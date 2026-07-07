/* ============================================================
   Gamification — XP rules, stars, badges, streaks, celebration.

   XP rules:
     +5   per lesson screen completed (first time only)
     +10  per quiz question answered correctly without hints
     +5   per quiz question answered correctly after a hint
     +50  first time a module is passed
     +25  bonus for a perfect quiz

   Stars per module (best kept):
     80–89% → ★   90–99% → ★★   100% → ★★★
   ============================================================ */

window.Gamify = (function () {
  const XP = { SCREEN: 5, CORRECT: 10, CORRECT_HINT: 5, MODULE_PASS: 50, PERFECT: 25 };

  const RANKS = [
    { xp: 0, name: "Space Rookie", emoji: "🐣" },
    { xp: 250, name: "Star Scout", emoji: "🔭" },
    { xp: 700, name: "Comet Cadet", emoji: "☄️" },
    { xp: 1500, name: "Rocket Ranger", emoji: "🚀" },
    { xp: 2800, name: "Planet Pilot", emoji: "🪐" },
    { xp: 4500, name: "Galaxy Guardian", emoji: "🌌" },
    { xp: 7000, name: "Cosmic Captain", emoji: "👨‍🚀" },
  ];

  /* Badge catalog. `when(ctx)` decides if it should be awarded.
     ctx = { progressMap, xp, streakCount, answeredCount, lastQuiz: {moduleId, pct, passed},
             unitJustCompleted, trackJustCompleted } */
  const BADGES = [
    { id: "first-launch", emoji: "🚀", name: "First Launch", desc: "Pass your first mission",
      when: (c) => Object.values(c.progressMap).some((p) => p.passed) },
    { id: "perfect-orbit", emoji: "💯", name: "Perfect Orbit", desc: "Score 100% on a quiz",
      when: (c) => !!c.lastQuiz && c.lastQuiz.pct === 100 },
    { id: "streak-3", emoji: "🔥", name: "3-Day Streak", desc: "Learn 3 days in a row",
      when: (c) => c.streakCount >= 3 },
    { id: "streak-7", emoji: "🌟", name: "7-Day Streak", desc: "Learn 7 days in a row",
      when: (c) => c.streakCount >= 7 },
    { id: "answer-100", emoji: "🧠", name: "Brain Booster", desc: "Answer 100 quiz questions",
      when: (c) => c.answeredCount >= 100 },
    { id: "answer-500", emoji: "🛸", name: "Question Crusher", desc: "Answer 500 quiz questions",
      when: (c) => c.answeredCount >= 500 },
    { id: "five-missions", emoji: "🎖️", name: "Mission Five", desc: "Pass 5 missions",
      when: (c) => Object.values(c.progressMap).filter((p) => p.passed).length >= 5 },
    { id: "fifteen-missions", emoji: "🏆", name: "Mission Master", desc: "Pass 15 missions",
      when: (c) => Object.values(c.progressMap).filter((p) => p.passed).length >= 15 },
    { id: "math-galaxy", emoji: "🪐", name: "Math Galaxy Hero", desc: "Finish every math mission",
      when: (c) => c.trackJustCompleted === "math" },
    { id: "ela-galaxy", emoji: "📖", name: "Reading Galaxy Hero", desc: "Finish every reading mission",
      when: (c) => c.trackJustCompleted === "ela" },
  ];
  /* Per-unit "planet conquered" badges are generated from content. */
  function unitBadge(unit) {
    return { id: "unit-" + unit.id, emoji: unit.planet.emoji, name: unit.badgeName || unit.title + " Star",
      desc: "Finish every mission on " + unit.title,
      when: (c) => c.unitJustCompleted === unit.id };
  }
  function allBadges() {
    const units = [...Content.getUnits("math"), ...Content.getUnits("ela")];
    return [...BADGES, ...units.map(unitBadge)];
  }

  function starsFor(pct) {
    if (pct >= 100) return 3;
    if (pct >= 90) return 2;
    if (pct >= CCA_CONFIG.PASS_PCT) return 1;
    return 0;
  }

  function rankFor(xp) {
    let r = RANKS[0];
    for (const rank of RANKS) if (xp >= rank.xp) r = rank;
    return r;
  }
  function nextRank(xp) { return RANKS.find((r) => r.xp > xp) || null; }

  /* Evaluate + persist newly earned badges. Returns the new ones. */
  async function checkBadges(studentId, ctx) {
    const earned = [];
    for (const b of allBadges()) {
      if (ctx.badges.includes(b.id)) continue;
      let ok = false;
      try { ok = b.when(ctx); } catch { ok = false; }
      if (ok && (await Store.earnBadge(studentId, b.id))) earned.push(b);
    }
    return earned;
  }

  /* ---------- celebration helpers ---------- */
  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.getElementById("toast-root").appendChild(el);
    setTimeout(() => el.remove(), 3900);
  }

  function confetti(n = 80) {
    const colors = ["#FFC53D", "#FF6B6B", "#3EE6C0", "#5AA9FF", "#FF8FD8", "#A78BFA"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = 1.8 + Math.random() * 1.6 + "s";
      p.style.animationDelay = Math.random() * 0.6 + "s";
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 4200);
    }
  }

  return { XP, RANKS, allBadges, starsFor, rankFor, nextRank, checkBadges, toast, confetti };
})();
