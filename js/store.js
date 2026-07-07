/* ============================================================
   Storage adapter.

   Two implementations behind one interface:
   - SupabaseStore: real accounts + cross-device sync (when
     CCA_CONFIG has credentials).
   - LocalStore: demo mode in localStorage so the app is fully
     usable before Supabase is configured.

   Interface (all async):
     init() → "local" | "supabase"
     signUp(email, password) / signIn(email, password) / signOut()
     getParent() → {email} | null
     listStudents() → [{id,name,avatar,xp,streakCount}]
     createStudent(name, avatar, pin)
     verifyPin(studentId, pin) → boolean
     getProgress(studentId) → { progressMap, badges:[ids], xp, streakCount, answeredCount }
     saveScreenDone(studentId, moduleId, screenId) → true if newly done
     saveQuizAttempt(studentId, moduleId, {score,total,passed,stars})
     addXp(studentId, amount)
     earnBadge(studentId, badgeId) → true if newly earned
     touchStreak(studentId) → streakCount
     saveWriting(studentId, moduleId, prompt, text)
     listWritings(parent scope) → [...]
   ============================================================ */

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function todayStr() { return new Date().toISOString().slice(0, 10); }
function yesterdayStr() { const d = new Date(); d.setDate(d.getDate() - 1); return d.toISOString().slice(0, 10); }
function uid() { return "id-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }

/* ---------------- Local (demo) implementation ---------------- */
const LocalStore = {
  mode: "local",
  KEY: "cca_local_v1",
  SESSION: "cca_local_session",

  _load() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || null; } catch { return null; }
  },
  _save(db) { localStorage.setItem(this.KEY, JSON.stringify(db)); },
  _db() {
    return this._load() || { parent: null, students: [], progress: {}, attempts: [], badges: {}, writings: [] };
  },

  async init() { return "local"; },

  async signUp(email, password) {
    const db = this._db();
    if (db.parent) throw new Error("This device already has a family account. Sign in instead.");
    db.parent = { email, pwHash: await sha256("cca:" + password) };
    this._save(db);
    localStorage.setItem(this.SESSION, "1");
    return { email };
  },
  async signIn(email, password) {
    const db = this._db();
    if (!db.parent) throw new Error("No family account on this device yet. Create one!");
    if (db.parent.email !== email || db.parent.pwHash !== (await sha256("cca:" + password)))
      throw new Error("That email or password doesn't match.");
    localStorage.setItem(this.SESSION, "1");
    return { email };
  },
  async signOut() { localStorage.removeItem(this.SESSION); },
  async getParent() {
    const db = this._db();
    return localStorage.getItem(this.SESSION) === "1" && db.parent ? { email: db.parent.email } : null;
  },

  async listStudents() {
    return this._db().students.map(({ pinHash, ...s }) => s);
  },
  async createStudent(name, avatar, pin) {
    const db = this._db();
    const id = uid();
    db.students.push({ id, name, avatar, pinHash: await sha256(id + ":" + pin), xp: 0, streakCount: 0, lastActive: null });
    db.progress[id] = {}; db.badges[id] = [];
    this._save(db);
    return id;
  },
  async verifyPin(studentId, pin) {
    const s = this._db().students.find((x) => x.id === studentId);
    return !!s && s.pinHash === (await sha256(studentId + ":" + pin));
  },

  async getProgress(studentId) {
    const db = this._db();
    const s = db.students.find((x) => x.id === studentId) || {};
    const raw = db.progress[studentId] || {};
    const progressMap = {};
    for (const [modId, p] of Object.entries(raw)) {
      progressMap[modId] = { passed: !!p.passed, bestScore: p.bestScore || 0, stars: p.stars || 0, screensDone: p.screensDone || [] };
    }
    const answeredCount = db.attempts.filter((a) => a.studentId === studentId).reduce((n, a) => n + a.total, 0);
    return { progressMap, badges: (db.badges[studentId] || []).map((b) => b.id), xp: s.xp || 0, streakCount: s.streakCount || 0, answeredCount };
  },

  async saveScreenDone(studentId, moduleId, screenId) {
    const db = this._db();
    const prog = (db.progress[studentId] ||= {});
    const p = (prog[moduleId] ||= { passed: false, bestScore: 0, stars: 0, screensDone: [] });
    if (p.screensDone.includes(screenId)) return false;
    p.screensDone.push(screenId);
    this._save(db);
    return true;
  },

  async saveQuizAttempt(studentId, moduleId, { score, total, passed, stars }) {
    const db = this._db();
    db.attempts.push({ studentId, moduleId, score, total, passed, stars, at: new Date().toISOString() });
    const prog = (db.progress[studentId] ||= {});
    const p = (prog[moduleId] ||= { passed: false, bestScore: 0, stars: 0, screensDone: [] });
    p.passed = p.passed || passed;
    p.bestScore = Math.max(p.bestScore, Math.round((score / total) * 100));
    p.stars = Math.max(p.stars, stars);
    if (passed && !p.completedAt) p.completedAt = new Date().toISOString();
    this._save(db);
  },

  async addXp(studentId, amount) {
    const db = this._db();
    const s = db.students.find((x) => x.id === studentId);
    if (s) { s.xp = (s.xp || 0) + amount; this._save(db); }
  },

  async earnBadge(studentId, badgeId) {
    const db = this._db();
    const list = (db.badges[studentId] ||= []);
    if (list.some((b) => b.id === badgeId)) return false;
    list.push({ id: badgeId, at: new Date().toISOString() });
    this._save(db);
    return true;
  },

  async touchStreak(studentId) {
    const db = this._db();
    const s = db.students.find((x) => x.id === studentId);
    if (!s) return 0;
    const today = todayStr();
    if (s.lastActive === today) return s.streakCount;
    s.streakCount = s.lastActive === yesterdayStr() ? (s.streakCount || 0) + 1 : 1;
    s.lastActive = today;
    this._save(db);
    return s.streakCount;
  },

  async saveWriting(studentId, moduleId, prompt, text) {
    const db = this._db();
    db.writings.push({ id: uid(), studentId, moduleId, prompt, text, at: new Date().toISOString() });
    this._save(db);
  },
  async listWritings() { return this._db().writings; },
};

/* ---------------- Supabase implementation ---------------- */
const SupabaseStore = {
  mode: "supabase",
  client: null,

  async init() {
    this.client = window.supabase.createClient(CCA_CONFIG.SUPABASE_URL, CCA_CONFIG.SUPABASE_ANON_KEY);
    return "supabase";
  },

  async signUp(email, password) {
    const { data, error } = await this.client.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
    return { email: data.user?.email || email, needsConfirmation: !data.session };
  },
  async signIn(email, password) {
    const { data, error } = await this.client.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    return { email: data.user.email };
  },
  async signOut() { await this.client.auth.signOut(); },
  async getParent() {
    const { data } = await this.client.auth.getSession();
    return data.session ? { email: data.session.user.email } : null;
  },

  async listStudents() {
    const { data, error } = await this.client.from("students")
      .select("id,name,avatar,xp,streak_count").order("created_at");
    if (error) throw new Error(error.message);
    return data.map((s) => ({ id: s.id, name: s.name, avatar: s.avatar, xp: s.xp, streakCount: s.streak_count }));
  },
  async createStudent(name, avatar, pin) {
    const { data: session } = await this.client.auth.getSession();
    const parentId = session.session.user.id;
    const { data, error } = await this.client.from("students")
      .insert({ parent_id: parentId, name, avatar, pin_hash: "pending" }).select("id").single();
    if (error) throw new Error(error.message);
    const pinHash = await sha256(data.id + ":" + pin);
    const { error: e2 } = await this.client.from("students").update({ pin_hash: pinHash }).eq("id", data.id);
    if (e2) throw new Error(e2.message);
    return data.id;
  },
  async verifyPin(studentId, pin) {
    const { data, error } = await this.client.from("students").select("pin_hash").eq("id", studentId).single();
    if (error) return false;
    return data.pin_hash === (await sha256(studentId + ":" + pin));
  },

  async getProgress(studentId) {
    const [{ data: prog }, { data: badges }, { data: student }, { data: attempts }] = await Promise.all([
      this.client.from("module_progress").select("*").eq("student_id", studentId),
      this.client.from("badges").select("badge_id").eq("student_id", studentId),
      this.client.from("students").select("xp,streak_count").eq("id", studentId).single(),
      this.client.from("quiz_attempts").select("total").eq("student_id", studentId),
    ]);
    const progressMap = {};
    for (const p of prog || []) {
      progressMap[p.module_id] = { passed: p.passed, bestScore: p.best_score, stars: p.stars, screensDone: p.screens_done || [] };
    }
    return {
      progressMap,
      badges: (badges || []).map((b) => b.badge_id),
      xp: student?.xp || 0,
      streakCount: student?.streak_count || 0,
      answeredCount: (attempts || []).reduce((n, a) => n + a.total, 0),
    };
  },

  async _upsertProgress(studentId, moduleId, patch) {
    const { data } = await this.client.from("module_progress")
      .select("*").eq("student_id", studentId).eq("module_id", moduleId).maybeSingle();
    if (data) {
      const { error } = await this.client.from("module_progress").update(patch(data)).eq("id", data.id);
      if (error) throw new Error(error.message);
      return data;
    }
    const fresh = { student_id: studentId, module_id: moduleId, passed: false, best_score: 0, stars: 0, screens_done: [] };
    const { error } = await this.client.from("module_progress").insert(patch(fresh));
    if (error) throw new Error(error.message);
    return null;
  },

  async saveScreenDone(studentId, moduleId, screenId) {
    let isNew = true;
    await this._upsertProgress(studentId, moduleId, (row) => {
      const done = row.screens_done || [];
      isNew = !done.includes(screenId);
      return { ...row, screens_done: isNew ? [...done, screenId] : done };
    });
    return isNew;
  },

  async saveQuizAttempt(studentId, moduleId, { score, total, passed, stars }) {
    const { error } = await this.client.from("quiz_attempts")
      .insert({ student_id: studentId, module_id: moduleId, score, total, passed, stars });
    if (error) throw new Error(error.message);
    await this._upsertProgress(studentId, moduleId, (row) => ({
      ...row,
      passed: row.passed || passed,
      best_score: Math.max(row.best_score || 0, Math.round((score / total) * 100)),
      stars: Math.max(row.stars || 0, stars),
      completed_at: row.completed_at || (passed ? new Date().toISOString() : null),
    }));
  },

  async addXp(studentId, amount) {
    const { error } = await this.client.rpc("add_xp", { p_student_id: studentId, p_amount: amount });
    if (error) throw new Error(error.message);
  },

  async earnBadge(studentId, badgeId) {
    const { error } = await this.client.from("badges").insert({ student_id: studentId, badge_id: badgeId });
    if (error) {
      if (error.code === "23505") return false; // already earned (unique violation)
      throw new Error(error.message);
    }
    return true;
  },

  async touchStreak(studentId) {
    const { data, error } = await this.client.rpc("touch_streak", { p_student_id: studentId });
    if (error) throw new Error(error.message);
    return data;
  },

  async saveWriting(studentId, moduleId, prompt, text) {
    const { error } = await this.client.from("writing_submissions")
      .insert({ student_id: studentId, module_id: moduleId, prompt, response: text });
    if (error) throw new Error(error.message);
  },
  async listWritings() {
    const { data, error } = await this.client.from("writing_submissions")
      .select("id,student_id,module_id,prompt,response,created_at").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data.map((w) => ({ id: w.id, studentId: w.student_id, moduleId: w.module_id, prompt: w.prompt, text: w.response, at: w.created_at }));
  },
};

/* ---------------- Pick implementation ---------------- */
window.Store = (CCA_CONFIG.SUPABASE_URL && CCA_CONFIG.SUPABASE_ANON_KEY && window.supabase)
  ? SupabaseStore
  : LocalStore;
