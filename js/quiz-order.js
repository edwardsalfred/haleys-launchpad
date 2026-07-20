/* ============================================================
   Deterministic multiple-choice option ordering.

   Shared by the app (js/quiz.js, at render time) AND the audio
   generators (scripts/generate-narration*.mjs, at build time) so
   the on-screen option order ALWAYS matches the pre-generated
   "Read it to me" narration MP3s.

   The order is a pure function of (moduleId, question id): stable
   across page loads and reproducible in Node. Seeding from the id
   — never Math.random — is exactly what lets the display and the
   audio agree. If you change how this orders options, you MUST
   regenerate the quiz audio (see quiz-audio-option-order-coupling).

   Reorders type:"mc" questions only. tf / numeric are returned
   untouched, as is any question the author marked shuffle:false.
   ============================================================ */
(function (root) {
  // FNV-1a string hash → 32-bit unsigned seed.
  function hashStr(s) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // mulberry32: tiny deterministic PRNG in [0, 1).
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Fisher-Yates over [0..n-1] driven by the seeded PRNG.
  function shuffledOrder(n, seed) {
    const rnd = mulberry32(seed);
    const order = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }

  // Return a copy of the question with options deterministically reordered
  // and answer + hints.narrow remapped to the new positions. Non-mc / opted
  // -out questions are returned as-is. The source object is never mutated.
  function order(q, moduleId) {
    if (!q || q.type !== "mc" || !Array.isArray(q.options) || q.shuffle === false) return q;
    const seed = hashStr(String(moduleId) + "-" + String(q.id));
    const ord = shuffledOrder(q.options.length, seed);
    const nq = { ...q, options: ord.map((i) => q.options[i]), answer: ord.indexOf(q.answer) };
    if (q.hints && Array.isArray(q.hints.narrow)) {
      nq.hints = {
        ...q.hints,
        narrow: q.hints.narrow.map((i) => ord.indexOf(i)).filter((i) => i !== -1),
      };
    }
    return nq;
  }

  root.QuizOrder = { order };
})(typeof window !== "undefined" ? window : this);
