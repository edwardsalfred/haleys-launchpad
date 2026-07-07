/* ============================================================
   Narrator — audio-per-screen playback.

   Convention:
     lesson screen  → audio/<moduleId>/<screenId>.mp3
     quiz question  → audio/<moduleId>/quiz-<questionId>.mp3

   Files are optional. If one is missing (404), the play button
   shows a dashed "no audio yet" state instead of erroring.
   ============================================================ */

window.Narrator = (function () {
  let current = null;      // active Audio element
  let currentBtn = null;   // button reflecting its state

  function srcFor(moduleId, screenId) {
    return `${CCA_CONFIG.AUDIO_BASE}/${moduleId}/${screenId}.mp3`;
  }

  function stop() {
    if (current) { current.pause(); current.src = ""; current = null; }
    if (currentBtn) { currentBtn.classList.remove("playing"); currentBtn = null; }
  }

  /* Wire a narrate button to an audio slot. */
  function attach(btn, moduleId, screenId) {
    const src = srcFor(moduleId, screenId);
    btn.addEventListener("click", () => {
      if (currentBtn === btn && current) { stop(); return; }
      stop();
      const audio = new Audio(src);
      current = audio; currentBtn = btn;
      btn.classList.add("playing");
      btn.classList.remove("unavailable");
      audio.addEventListener("ended", stop);
      audio.addEventListener("error", () => {
        stop();
        btn.classList.add("unavailable");
        btn.querySelector(".narrate-label").textContent = "No audio yet";
      });
      audio.play().catch(() => {
        stop();
        btn.classList.add("unavailable");
      });
    });
  }

  function buttonHtml(label = "Listen") {
    return `<button class="narrate-btn" type="button">
      <span aria-hidden="true">🔊</span><span class="narrate-label">${label}</span>
    </button>`;
  }

  return { attach, stop, buttonHtml, srcFor };
})();
