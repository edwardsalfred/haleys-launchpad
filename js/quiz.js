/* ============================================================
   Quiz engine.

   Question types:
     mc      — multiple choice: options[], answer = correct index
     tf      — true/false: answer = true|false
     numeric — number entry on a big keypad: answer = number

   Hint ladder (inspired by the MS AAAS Levels-of-Support
   continuum, most independent → most supported):
     1. "verbal"  — a guiding hint
     2. "example" — a worked example of a similar problem
     3. "narrow"  — (mc only) dims wrong choices down to two
   Using any hint halves that question's XP but never blocks
   progress. One answer attempt per question; wrong answers show
   the correct one plus a kid-friendly explanation.
   ============================================================ */

window.Quiz = (function () {
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // IMPORTANT: do NOT shuffle MC option order at runtime. The "Read it to me"
  // narration MP3s are pre-generated from the authored option order (they read
  // "A: … B: … C: …" from content/*.js), so any runtime reshuffle makes the
  // voiceover name options in a different order than they appear on screen.
  // Anti-position-bias (correct answer not always first) is instead baked into
  // the content itself, so the audio and the display always agree.

  function start(container, module, { onFinish }) {
    const questions = module.quiz.questions;
    const state = {
      i: 0, score: 0, hintsUsed: 0,
      results: [], // {id, correct, hintUsed}
    };

    function render() {
      Narrator.stop();
      const q = questions[state.i];
      const pct = Math.round((state.i / questions.length) * 100);

      container.innerHTML = `
        <div class="quiz-progress">
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <span class="q-count">${state.i + 1} / ${questions.length}</span>
        </div>
        <div class="panel">
          ${Narrator.buttonHtml("Read it to me")}
          ${q.passage ? `<div class="q-passage">${q.passage}</div>` : ""}
          <p class="q-prompt">${q.prompt}</p>
          ${q.visual ? `<div class="q-visual">${q.visual}</div>` : ""}
          <div class="answers" id="answers"></div>
          <div id="hint-area"></div>
          <div id="feedback"></div>
        </div>`;

      Narrator.attach(container.querySelector(".narrate-btn"), module.id, "quiz-" + q.id);
      renderAnswers(q);
      renderHintButton(q);
    }

    /* ----- answer widgets ----- */
    function renderAnswers(q) {
      const box = container.querySelector("#answers");
      if (q.type === "numeric") {
        box.innerHTML = `
          <div class="num-display" id="num-display">&nbsp;</div>
          <div class="pin-pad">
            ${[1,2,3,4,5,6,7,8,9].map((n) => `<button class="pin-key" data-k="${n}">${n}</button>`).join("")}
            <button class="pin-key" data-k="back">⌫</button>
            <button class="pin-key" data-k="0">0</button>
            <button class="pin-key btn-mint" data-k="go" style="background:var(--alien-mint);color:var(--space-900)">✓</button>
          </div>`;
        let value = "";
        const display = box.querySelector("#num-display");
        box.querySelectorAll(".pin-key").forEach((k) =>
          k.addEventListener("click", () => {
            const key = k.dataset.k;
            if (key === "back") value = value.slice(0, -1);
            else if (key === "go") { if (value !== "") answer(q, Number(value)); return; }
            else if (value.length < 6) value += key;
            display.textContent = value || " ";
          })
        );
      } else {
        const options = q.type === "tf" ? ["True", "False"] : q.options;
        const keys = "ABCDEFGH";
        box.innerHTML = options.map((opt, idx) =>
          `<button class="answer-btn" data-i="${idx}">
             <span class="a-key">${q.type === "tf" ? (idx === 0 ? "✔" : "✘") : keys[idx]}</span>
             <span>${opt}</span>
           </button>`).join("");
        box.querySelectorAll(".answer-btn").forEach((btn) =>
          btn.addEventListener("click", () => {
            const idx = Number(btn.dataset.i);
            const given = q.type === "tf" ? idx === 0 : idx;
            answer(q, given, btn);
          })
        );
      }
    }

    /* ----- hint ladder ----- */
    function renderHintButton(q) {
      const area = container.querySelector("#hint-area");
      if (!q.hints) return;
      const ladder = [];
      if (q.hints.verbal) ladder.push({ tag: "Hint", text: q.hints.verbal });
      if (q.hints.example) ladder.push({ tag: "Watch how", text: q.hints.example });
      if ((q.type === "mc") && Array.isArray(q.hints.narrow)) ladder.push({ tag: "Narrow it down", narrow: q.hints.narrow });
      if (!ladder.length) return;

      let level = 0;
      area.innerHTML = `<button class="hint-btn" type="button">💡 Need a hint?</button><div id="hint-boxes"></div>`;
      const btn = area.querySelector(".hint-btn");
      btn.addEventListener("click", () => {
        if (level >= ladder.length) return;
        const h = ladder[level++];
        state.currentHintUsed = true;
        if (h.narrow) {
          // keep the correct answer + one distractor
          container.querySelectorAll(".answer-btn").forEach((b) => {
            const i = Number(b.dataset.i);
            if (i !== q.answer && !h.narrow.includes(i)) b.classList.add("dim");
          });
          area.querySelector("#hint-boxes").insertAdjacentHTML("beforeend",
            `<div class="hint-box"><span class="hint-tag">${h.tag}</span><div>I crossed out some answers for you!</div></div>`);
        } else {
          area.querySelector("#hint-boxes").insertAdjacentHTML("beforeend",
            `<div class="hint-box"><span class="hint-tag">${h.tag}</span><div>${h.text}</div></div>`);
        }
        if (level >= ladder.length) { btn.disabled = true; btn.textContent = "That's all my hints!"; }
        else btn.textContent = "💡 Another hint?";
      });
    }

    /* ----- answering ----- */
    function answer(q, given, btnEl) {
      const hintUsed = !!state.currentHintUsed;
      state.currentHintUsed = false;
      let correct;
      if (q.type === "numeric") correct = Number(given) === Number(q.answer);
      else if (q.type === "tf") correct = given === q.answer;
      else correct = given === q.answer;

      state.results.push({ id: q.id, correct, hintUsed });
      if (correct) state.score++;
      if (hintUsed) state.hintsUsed++;

      // lock + color the widgets
      container.querySelectorAll(".answer-btn").forEach((b) => {
        b.disabled = true;
        const i = Number(b.dataset.i);
        const isRight = q.type === "tf" ? (i === 0) === q.answer : i === q.answer;
        if (isRight) b.classList.add("correct");
        else if (btnEl === b && !correct) b.classList.add("wrong");
      });
      const numDisplay = container.querySelector("#num-display");
      if (numDisplay) {
        numDisplay.classList.add(correct ? "correct" : "wrong");
        container.querySelectorAll(".pin-key").forEach((k) => (k.disabled = true));
        if (!correct) numDisplay.textContent = `${given} → ${q.answer}`;
      }
      const hintBtn = container.querySelector(".hint-btn");
      if (hintBtn) hintBtn.disabled = true;

      const praise = ["Stellar!", "Blast off!", "You got it!", "Super nova!", "Way to go, Cadet!"];
      const encourage = ["Not quite — look!", "Almost! Here's the answer:", "Good try, Cadet!"];
      const fb = container.querySelector("#feedback");
      const rightAnswerText = q.type === "numeric" ? q.answer
        : q.type === "tf" ? (q.answer ? "True" : "False")
        : q.options[q.answer];
      fb.innerHTML = `
        <div class="feedback-bar ${correct ? "good" : "bad"}">
          <div>${correct ? "🎉 " + praise[Math.floor(Math.random() * praise.length)]
                         : "💫 " + encourage[Math.floor(Math.random() * encourage.length)]}
               ${correct ? "" : ` The answer is <u>${esc(rightAnswerText)}</u>.`}</div>
          ${q.explain ? `<div class="fb-explain">${q.explain}</div>` : ""}
        </div>
        <button class="btn btn-big btn-blue mt" id="next-q">${state.i + 1 < questions.length ? "Next Question ➜" : "See My Score! ⭐"}</button>`;
      fb.querySelector("#next-q").addEventListener("click", () => {
        if (state.i + 1 < questions.length) { state.i++; render(); }
        else finish();
      });
      fb.querySelector("#next-q").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function finish() {
      Narrator.stop();
      const total = questions.length;
      const pct = Math.round((state.score / total) * 100);
      onFinish({
        score: state.score, total, pct,
        passed: pct >= CCA_CONFIG.PASS_PCT,
        stars: Gamify.starsFor(pct),
        results: state.results,
        hintsUsed: state.hintsUsed,
      });
    }

    render();
  }

  return { start };
})();
