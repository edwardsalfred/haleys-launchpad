# 🚀 Haley's Launchpad

A self-paced, gamified 3rd-grade course for **Math** and **Reading**, aligned to the
**Mississippi College- and Career-Readiness Standards** — built for a kid on a
parent's phone, working mostly on their own.

- **40 missions** (modules) across two galaxies: 29 math missions covering every
  Grade 3 math standard (3.OA, 3.NBT, 3.NF, 3.MD, 3.G), and 11 reading missions
  built from the MDE ELA Exemplar Unit 2 *"Characters' Contributions"*
  (RL.3.3, RL.3.1, L.3.4a, L.3.2c, W.3.1).
- **Mastery gating:** score **80%+** on a mission's quiz to unlock the next one.
  Unlimited retakes; 1–3 stars per mission (80/90/100%).
- **Gamified:** XP, ranks (Space Rookie → Cosmic Captain), daily streaks,
  badges, planet progress maps, confetti.
- **20-minute missions** with a gentle break reminder (Pomodoro-sized).
- **Voice narration slots on every screen** — record your own audio, drop the
  files in, done (see below).
- **Kid-safe login:** parent email account + per-child avatar & 4-digit PIN
  (kids never need an email address).
- **Hint ladder** on every quiz question (hint → worked example → narrow the
  choices), modeled on the MDE Levels-of-Support continuum.

## Two pages

- **`index.html`** — the public **landing page** (the story, video, and
  sign-up call to action). This is what a new family sees first.
- **`app.html`** — the actual **course app** the landing page's "Start Free"
  buttons send people to. This is what a signed-in cadet lives in day to day.

## Quick start (zero setup)

Serve this folder with any static file server and it just works in
**demo mode** — accounts and progress live in that browser's localStorage.

```
# any of these, from this folder:
npx serve .
python -m http.server 8080
```

Then open `/` for the landing page or `/app.html` for the course directly.

> Opening the files straight from the file system (file://) mostly works, but
> a local server is more reliable for audio/video playback.

## Enable real accounts (Supabase, ~5 minutes)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the dashboard, open **SQL Editor**, paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql), and click **Run**. (Safe to re-run.)
3. Recommended: **Authentication → Providers → Email** — turn OFF
   "Confirm email" so parents can sign in immediately (or keep it on if you
   prefer verified emails).
4. Copy **Project Settings → API → Project URL** and **anon public key** into
   [`js/config.js`](js/config.js):
   ```js
   SUPABASE_URL: "https://YOURPROJECT.supabase.co",
   SUPABASE_ANON_KEY: "eyJ...",
   ```
5. Reload the app. The demo-mode banner disappears; accounts and progress now
   sync across devices. Row Level Security keeps every family's data private
   to their own login.

## Deploy

The app is 100% static files — host it anywhere:

- **Vercel:** `npm i -g vercel && vercel` from this folder (or drag-drop at vercel.com/new).
- **Netlify:** drag this folder onto app.netlify.com/drop.
- **GitHub Pages:** push and enable Pages.

No build step. No server code. (The Supabase anon key is designed to be public;
data protection comes from RLS.)

## Recording narration audio

Every lesson screen and quiz question has an audio slot:

```
audio/<moduleId>/<screenId>.mp3        ← lesson screens
audio/<moduleId>/quiz-<questionId>.mp3 ← quiz questions
```

Example: `audio/math-u1-m1/s1.mp3`, `audio/math-u1-m1/quiz-q3.mp3`.

Run the manifest generator to get **one document with every slot's filename and
its exact narration script**, ready for a recording session:

```
node scripts/narration-manifest.mjs
```

→ writes `docs/narration-scripts.md`. Missing files are fine — the Listen
button politely shows "No audio yet" until you add them.

### Option B: generate the narration with ElevenLabs

If you'd rather use AI text-to-speech (including a **clone of your own
voice** — record ~2 minutes at elevenlabs.io → Voices → Add voice, then copy
the voice ID), there's a batch generator. Your API key stays on your machine
as an environment variable — never put it in `js/config.js` or any shipped
file:

```powershell
$env:ELEVENLABS_API_KEY = "sk_..."
$env:ELEVENLABS_VOICE_ID = "yourVoiceId"   # optional; defaults to a stock voice
$env:LIMIT = "5"                           # test run: hear 5 files before committing credits
node scripts/generate-narration.mjs
```

Then remove `LIMIT` and re-run to generate the rest (already-generated files
are skipped, so it's resumable). Full course ≈ 541 files / ~130k characters —
roughly one month of ElevenLabs' Creator tier on their Flash model.

## Telling your story (landing page + video)

- **`index.html`** is the marketing/story page — hero, the "Why I built this"
  video, a personal letter, feature highlights, and standards trust badges,
  all ending in a "Start Free" button into `app.html`.
- The video slot looks for `video/haley-story.mp4` (+ optional
  `video/poster.jpg`); until you add it, a friendly "coming soon" card shows
  instead and the written letter carries the story on its own. See
  [`video/README.md`](video/README.md).
- A ready-to-read 60–90 second script (with timing and b-roll ideas) is at
  [`docs/haley-video-script.md`](docs/haley-video-script.md).
- The letter text in `index.html` (inside the `.lp-letter` block) is a
  starting draft — personalize it with your own memories of Haley whenever
  you'd like; there's an HTML comment right above it marking where to edit.

## Project structure

```
index.html              PUBLIC landing page: story, video, sign-up CTA
app.html                the course app itself (single page, hash routing)
css/styles.css          shared tokens/fonts/starfield + app UI (mobile-first, space theme)
css/landing.css          landing-page-only layout (reuses tokens from styles.css)
video/                  drop haley-story.mp4 (+ poster.jpg) here
js/config.js            ← your Supabase keys + tunables (pass %, break minutes)
js/content-index.js     content registry, track ordering, mastery gating
js/store.js             storage adapter: Supabase OR localStorage demo mode
js/audio.js             narration player (audio-per-screen)
js/gamify.js            XP, ranks, badges, streaks, confetti
js/quiz.js              quiz engine (mc/tf/numeric + hint ladder)
js/views.js             every screen (login, PIN pad, dashboard, maps, lessons,
                        quizzes, results, badges, parent dashboard)
js/app.js               router, session, quiz recording, break timer
content/math-u1..u8.js  Math Galaxy — 8 units, 29 missions
content/ela-r1..r4.js   Reading Galaxy — 4 units, 11 missions
supabase/schema.sql     full database schema + RLS (paste into SQL editor)
scripts/narration-manifest.mjs  generates the recording script document
scripts/validate-content.mjs    structural check for content/*.js files
docs/content-spec.md    authoring format for adding new units/missions
docs/haley-video-script.md  script for the landing-page story video
```

## Adding or editing content

Missions are plain data — no code changes needed. Follow
[`docs/content-spec.md`](docs/content-spec.md), add a `content/*.js` file (or
edit one), and include it with a `<script>` tag in `app.html`. Gating order
comes from each unit's `order` field and module array order. Run
`node scripts/validate-content.mjs` after editing to catch structural mistakes.

## Notes for parents

- **Writing missions** (Reading Galaxy, Writer's Launchpad) are saved to the
  **Parent Dashboard** (🔒 Grown-Ups tab) for you to read — they're
  deliberately not auto-graded. Quizzes carry the mastery gate.
- The Grown-Ups area is behind a multiplication gate; progress, streaks, stars,
  and your kids' writing all live there.
- Reading lessons use **original stories** written for this course. The MDE
  unit's anchor texts (Patricia Polacco's books) are lovely — the course works
  without them, but they make great bedtime reading if your library has them.
