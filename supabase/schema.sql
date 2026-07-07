-- ============================================================
-- Haley's Launchpad — Supabase schema
-- Run this once in the Supabase SQL Editor (Dashboard → SQL).
-- Safe to re-run: uses IF NOT EXISTS / OR REPLACE throughout.
--
-- Model: one auth.users row per PARENT. Kids are rows in
-- `students` owned by that parent (COPPA-friendly: children
-- never get their own auth accounts; they unlock a profile
-- with a 4-digit PIN hashed client-side).
-- All RLS policies scope data to the signed-in parent.
-- ============================================================

-- ---------- profiles (one per parent, mirrors auth.users) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

-- Additive columns (safe on existing installs)
alter table public.profiles add column if not exists first_name text;
alter table public.profiles add column if not exists last_name text;

-- auto-create a profile row on signup, copying name from signup metadata
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, first_name, last_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- students (kid profiles) ----------
create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.profiles (id) on delete cascade,
  name text not null check (char_length(name) between 1 and 40),
  avatar text not null default '🦊',
  pin_hash text not null,               -- sha256(student_id + ':' + pin), computed client-side
  xp integer not null default 0,
  streak_count integer not null default 0,
  last_active_date date,
  created_at timestamptz not null default now()
);
create index if not exists students_parent_idx on public.students (parent_id);

alter table public.students add column if not exists school text;

-- ---------- module progress (one row per student × module) ----------
create table if not exists public.module_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students (id) on delete cascade,
  module_id text not null,              -- e.g. 'math-u1-m1' (content lives in the app bundle)
  passed boolean not null default false,
  best_score integer not null default 0 check (best_score between 0 and 100),
  stars integer not null default 0 check (stars between 0 and 3),
  screens_done jsonb not null default '[]'::jsonb,  -- screen ids completed (for per-screen XP dedup)
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (student_id, module_id)
);
create index if not exists module_progress_student_idx on public.module_progress (student_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists module_progress_touch on public.module_progress;
create trigger module_progress_touch
  before update on public.module_progress
  for each row execute function public.set_updated_at();

-- ---------- quiz attempts (full history, for the parent dashboard) ----------
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students (id) on delete cascade,
  module_id text not null,
  score integer not null,
  total integer not null,
  passed boolean not null,
  stars integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists quiz_attempts_student_idx on public.quiz_attempts (student_id, created_at desc);

-- ---------- badges ----------
create table if not exists public.badges (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students (id) on delete cascade,
  badge_id text not null,
  earned_at timestamptz not null default now(),
  unique (student_id, badge_id)
);
create index if not exists badges_student_idx on public.badges (student_id);

-- ---------- writing submissions (RACES / opinion pieces → parent review) ----------
create table if not exists public.writing_submissions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students (id) on delete cascade,
  module_id text not null,
  prompt text not null,
  response text not null,
  reviewed boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists writing_student_idx on public.writing_submissions (student_id, created_at desc);

-- ---------- RPCs ----------
-- Atomic XP increment (avoids read-modify-write races between devices)
create or replace function public.add_xp(p_student_id uuid, p_amount integer)
returns void
language sql
security invoker
as $$
  update public.students
  set xp = xp + greatest(p_amount, 0)
  where id = p_student_id;   -- RLS still applies: parents can only touch their own kids
$$;

-- Daily streak: +1 if last activity was yesterday, reset to 1 otherwise,
-- unchanged if already counted today. Returns the current streak.
create or replace function public.touch_streak(p_student_id uuid)
returns integer
language plpgsql
security invoker
as $$
declare v_streak integer;
begin
  update public.students
  set streak_count = case
        when last_active_date = current_date then streak_count
        when last_active_date = current_date - 1 then streak_count + 1
        else 1
      end,
      last_active_date = current_date
  where id = p_student_id
  returning streak_count into v_streak;
  return coalesce(v_streak, 0);
end;
$$;

-- ---------- Row Level Security ----------
alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.module_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.badges enable row level security;
alter table public.writing_submissions enable row level security;

-- profiles: a parent sees only their own row
drop policy if exists "own profile" on public.profiles;
create policy "own profile" on public.profiles
  for select using (auth.uid() = id);

-- students: full CRUD on your own kids
drop policy if exists "own students" on public.students;
create policy "own students" on public.students
  for all
  using (parent_id = auth.uid())
  with check (parent_id = auth.uid());

-- helper predicate used by the child tables
create or replace function public.owns_student(p_student_id uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.students s
    where s.id = p_student_id and s.parent_id = auth.uid()
  );
$$;

drop policy if exists "own kids progress" on public.module_progress;
create policy "own kids progress" on public.module_progress
  for all
  using (public.owns_student(student_id))
  with check (public.owns_student(student_id));

drop policy if exists "own kids attempts" on public.quiz_attempts;
create policy "own kids attempts" on public.quiz_attempts
  for all
  using (public.owns_student(student_id))
  with check (public.owns_student(student_id));

drop policy if exists "own kids badges" on public.badges;
create policy "own kids badges" on public.badges
  for all
  using (public.owns_student(student_id))
  with check (public.owns_student(student_id));

drop policy if exists "own kids writing" on public.writing_submissions;
create policy "own kids writing" on public.writing_submissions
  for all
  using (public.owns_student(student_id))
  with check (public.owns_student(student_id));
