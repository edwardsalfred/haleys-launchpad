/* ============================================================
   App — state, hash router, quiz recording, break timer.
   ============================================================ */

window.App = {
  parent: null,
  student: null,
  progress: { progressMap: {}, badges: [], xp: 0, streakCount: 0, answeredCount: 0 },
  _sessionStart: Date.now(),
  _breakShown: false,

  go(hash) {
    if (location.hash === hash) this.route();
    else location.hash = hash;
  },

  async refreshProgress() {
    if (!this.student) return;
    this.progress = await Store.getProgress(this.student.id);
  },

  resetBreakTimer() {
    this._sessionStart = Date.now();
    this._breakShown = false;
  },

  checkBreak() {
    const mins = (Date.now() - this._sessionStart) / 60000;
    if (mins >= CCA_CONFIG.BREAK_MINUTES && !this._breakShown) {
      this._breakShown = true;
      Views.breakOverlay();
    }
  },

  /* Persist a finished quiz: attempt row, XP, streak, badges, unit/track completion. */
  async recordQuiz(mod, result) {
    const sid = this.student.id;
    const before = this.progress.progressMap[mod.id];
    const firstPass = result.passed && !(before && before.passed);

    await Store.saveQuizAttempt(sid, mod.id, result);

    // XP
    const noHint = result.results.filter((r) => r.correct && !r.hintUsed).length;
    const withHint = result.results.filter((r) => r.correct && r.hintUsed).length;
    let xp = noHint * Gamify.XP.CORRECT + withHint * Gamify.XP.CORRECT_HINT;
    if (firstPass) xp += Gamify.XP.MODULE_PASS;
    if (result.pct === 100) xp += Gamify.XP.PERFECT;
    if (xp > 0) await Store.addXp(sid, xp);
    result.xpEarned = xp;

    const streak = await Store.touchStreak(sid);
    await this.refreshProgress();
    this.progress.streakCount = streak;

    // unit / track completion (only when this quiz newly passed the module)
    let unitJustCompleted = null, trackJustCompleted = null;
    if (firstPass) {
      const unit = Content.getUnit(mod.unitId);
      if (unit.modules.every((m) => this.progress.progressMap[m.id]?.passed)) unitJustCompleted = unit.id;
      const stats = Content.trackStats(mod.subject, this.progress.progressMap);
      if (stats.done === stats.total) trackJustCompleted = mod.subject;
    }

    const newBadges = await Gamify.checkBadges(sid, {
      ...this.progress,
      lastQuiz: { moduleId: mod.id, pct: result.pct, passed: result.passed },
      unitJustCompleted,
      trackJustCompleted,
    });
    result.newBadges = newBadges;
    if (newBadges.length) this.progress.badges.push(...newBadges.map((b) => b.id));
    newBadges.forEach((b) => Gamify.toast(`${b.emoji} New badge: ${b.name}!`));
  },

  /* ---------------- error boundary ---------------- */
  /* A throw anywhere in init()/route() used to leave #app completely empty —
     a blank screen with no message and no way back (one dropped Supabase
     request was enough). Always land somewhere recoverable instead, and
     surface the detail so a grown-up can report what actually broke. */
  fail(err) {
    console.error("[Launchpad] fatal:", err);
    const el = document.getElementById("app");
    if (!el) return;
    const detail = String((err && err.message) || err || "Unknown error")
      .replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    document.getElementById("bottom-nav")?.classList.add("hidden");
    el.innerHTML = `
    <div class="view center">
      <div class="hero" style="padding-top:12px">
        <span class="logo-rocket">🛸</span>
        <h1 style="font-size:1.5rem">Houston, we had a problem!</h1>
        <p class="tagline">Cosmo lost the signal for a moment.<br>Nothing you did was wrong, Cadet!</p>
      </div>
      <div class="panel">
        <div class="btn-row" style="flex-direction:column">
          <button class="btn btn-big btn-mint" id="err-retry">Try Again 🔄</button>
          <button class="btn btn-big btn-ghost" id="err-home">Back to Start 🏠</button>
        </div>
        <p class="muted mt">For a grown-up: ${detail}</p>
      </div>
    </div>`;
    el.querySelector("#err-retry").addEventListener("click", () => location.reload());
    el.querySelector("#err-home").addEventListener("click", () => {
      location.hash = "#/dashboard";
      location.reload();
    });
  },

  /* ---------------- router ---------------- */
  async route() {
    try { await this._route(); } catch (err) { this.fail(err); }
  },

  async _route() {
    const el = document.getElementById("app");
    const hash = location.hash || "#/dashboard";
    const [, view, arg] = hash.split("/"); // "#/lesson/math-u1-m1" → ["#", "lesson", "math-u1-m1"]
    Narrator.stop();

    // auth guards
    if (!this.parent) {
      document.getElementById("bottom-nav").classList.add("hidden");
      return Views.welcome(el);
    }
    const kidRoutes = ["dashboard", "map", "lesson", "quiz", "badges", "parent-gate"];
    if (!this.student && kidRoutes.includes(view)) {
      document.getElementById("bottom-nav").classList.add("hidden");
      return Views.profiles(el);
    }

    // First-run: parent has pending child info (from signup) and no students yet
    if (this.parent?.pendingChild && view !== "setup-first-kid") {
      const kids = await Store.listStudents();
      if (kids.length === 0) {
        document.getElementById("bottom-nav").classList.add("hidden");
        return Views.setupFirstKid(el);
      }
    }

    // bottom nav visibility: kid-facing views only
    const showNav = ["dashboard", "map", "badges"].includes(view);
    document.getElementById("bottom-nav").classList.toggle("hidden", !showNav);
    document.querySelectorAll(".nav-btn").forEach((b) => {
      const r = b.dataset.route;
      b.classList.toggle("active", r === hash || (view === "map" && r === `#/map/${arg}`) || (view === "dashboard" && r === "#/dashboard"));
    });

    switch (view) {
      case "welcome": return Views.welcome(el);
      case "setup-first-kid": return Views.setupFirstKid(el);
      case "profiles": return Views.profiles(el);
      case "pin": return Views.pinEntry(el, arg);
      case "dashboard": await this.refreshProgress(); return Views.dashboard(el);
      case "map": return Views.map(el, arg === "ela" ? "ela" : "math");
      case "lesson": return Views.lesson(el, arg, 0);
      case "quiz": return Views.quiz(el, arg);
      case "badges": return Views.badges(el);
      case "parent-gate": return Views.parentGate(el);
      case "parent": return Views.parentArea(el);
      default: return Views.dashboard(el);
    }
  },

  async init() {
    try { await this._init(); } catch (err) { this.fail(err); }
  },

  async _init() {
    await Store.init();

    // restore session
    this.parent = await Store.getParent();
    if (this.parent) {
      try {
        const saved = JSON.parse(localStorage.getItem("cca_active_student"));
        if (saved) {
          const kids = await Store.listStudents();
          this.student = kids.find((k) => k.id === saved.id) || null;
        }
      } catch { /* ignore */ }
      if (this.student) await this.refreshProgress();
    }

    // bottom nav
    document.querySelectorAll(".nav-btn").forEach((b) =>
      b.addEventListener("click", () => this.go(b.dataset.route)));

    window.addEventListener("hashchange", () => this.route());

    if (!this.parent) this.go("#/welcome");
    else if (this.parent.pendingChild) {
      const kids = await Store.listStudents();
      this.go(kids.length === 0 ? "#/setup-first-kid" : "#/profiles");
    }
    else if (!this.student) this.go("#/profiles");
    else this.go("#/dashboard");
    this.route();
  },
};

/* Anything that escapes a handler (a stray listener, a rejected promise) must
   not leave a cadet staring at a blank screen either. Only take over the view
   when it is actually empty — otherwise just log and let the screen stand. */
function guardBlankScreen(err) {
  const el = document.getElementById("app");
  if (el && el.innerHTML.trim().length < 120) App.fail(err);
  else console.error("[Launchpad]", err);
}
window.addEventListener("error", (e) => guardBlankScreen(e.error || e.message));
window.addEventListener("unhandledrejection", (e) => guardBlankScreen(e.reason));

document.addEventListener("DOMContentLoaded", () => App.init());
