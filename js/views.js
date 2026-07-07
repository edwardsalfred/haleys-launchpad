/* ============================================================
   Views — every screen of the app renders through here.
   Each view is a function (el, ...args) that fills #app.
   Navigation + shared state live in app.js (window.App).
   ============================================================ */

window.Views = (function () {
  const AVATARS = ["🦊", "🐸", "🦄", "🐯", "🐙", "🦖", "🐼", "🚀", "👾", "🌟", "🐢", "🦩"];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  const COSMO_SVG = `
  <svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cosmo the alien">
    <line x1="60" y1="18" x2="60" y2="34" stroke="#3EE6C0" stroke-width="4" stroke-linecap="round"/>
    <circle cx="60" cy="12" r="7" fill="#FFC53D">
      <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <ellipse cx="60" cy="78" rx="42" ry="46" fill="#3EE6C0"/>
    <ellipse cx="60" cy="86" rx="30" ry="30" fill="#8FF3DE"/>
    <circle cx="45" cy="66" r="10" fill="#fff"/>
    <circle cx="75" cy="66" r="10" fill="#fff"/>
    <circle cx="47" cy="68" r="5" fill="#0A0E23"/>
    <circle cx="77" cy="68" r="5" fill="#0A0E23"/>
    <path d="M 46 92 Q 60 104 74 92" stroke="#0A0E23" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="32" cy="84" r="5" fill="#FF8FD8" opacity="0.7"/>
    <circle cx="88" cy="84" r="5" fill="#FF8FD8" opacity="0.7"/>
  </svg>`;

  function cosmoSays(text) {
    return `<div class="cosmo-row mt">
      <div class="cosmo">${COSMO_SVG}</div>
      <div class="speech">${text}</div>
    </div>`;
  }

  /* ================= WELCOME (parent auth) ================= */
  function welcome(el, mode = "signin") {
    const isUp = mode === "signup";
    el.innerHTML = `
    <div class="view">
      <div class="hero">
        <span class="logo-rocket">🚀</span>
        <h1>Haley's <span class="grad">Launchpad</span></h1>
        <p class="tagline">3rd grade adventures in Math &amp; Reading<br>aligned to the Mississippi standards</p>
      </div>
      ${Store.mode === "local" ? `<div class="demo-banner">🧪 Demo mode. Progress saves on this device only. Add your Supabase keys in js/config.js for real accounts.</div>` : ""}
      <div class="panel">
        <h3 class="center" style="margin-bottom:12px">${isUp ? "Create your family account" : "Grown-up sign in"}</h3>
        <form id="auth-form">
          ${isUp ? `
          <div class="field"><label for="first-name">Your first name</label>
            <input id="first-name" autocomplete="given-name" required maxlength="40" placeholder="e.g. Alfred"></div>
          <div class="field"><label for="last-name">Your last name</label>
            <input id="last-name" autocomplete="family-name" required maxlength="40" placeholder="e.g. Edwards"></div>
          ` : ""}
          <div class="field"><label for="email">Parent email</label>
            <input id="email" type="email" autocomplete="email" required placeholder="you@example.com"></div>
          <div class="field"><label for="password">Password</label>
            <input id="password" type="password" autocomplete="${isUp ? "new-password" : "current-password"}" required minlength="${isUp ? 12 : 6}" placeholder="${isUp ? "At least 12 characters" : "Your password"}"></div>
          ${isUp ? `
          <div class="field"><label for="child-name">Your child's first name</label>
            <input id="child-name" required maxlength="20" placeholder="e.g. Haley"></div>
          <div class="field"><label for="child-school">Your child's school</label>
            <input id="child-school" required maxlength="80" placeholder="e.g. Sunnybrook Elementary"></div>
          ` : ""}
          <div class="form-error" id="auth-error"></div>
          <button class="btn btn-big" type="submit">${isUp ? "Create Account 🌟" : "Sign In 🚀"}</button>
        </form>
        <p class="form-note center">${isUp
          ? `Already set up? <button class="link-btn" id="switch">Sign in</button>`
          : `First time here? <button class="link-btn" id="switch">Create an account</button>`}</p>
      </div>
      ${cosmoSays("Hi! I'm <b>Cosmo</b>! A grown-up sets things up first, then it's blast-off time! 🎉")}
    </div>`;

    el.querySelector("#switch").addEventListener("click", () => welcome(el, isUp ? "signin" : "signup"));
    el.querySelector("#auth-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const errEl = el.querySelector("#auth-error");
      errEl.textContent = "";
      const email = el.querySelector("#email").value.trim();
      const pw = el.querySelector("#password").value;
      try {
        if (isUp) {
          if (pw.length < 12) throw new Error("Password must be at least 12 characters.");
          const firstName = el.querySelector("#first-name").value.trim();
          const lastName = el.querySelector("#last-name").value.trim();
          const childName = el.querySelector("#child-name").value.trim();
          const childSchool = el.querySelector("#child-school").value.trim();
          if (!firstName || !lastName) throw new Error("Please enter your first and last name.");
          if (!childName) throw new Error("Please enter your child's first name.");
          if (!childSchool) throw new Error("Please enter your child's school.");
          const res = await Store.signUp(email, pw, {
            first_name: firstName,
            last_name: lastName,
            pending_child_name: childName,
            pending_child_school: childSchool,
          });
          if (res && res.needsConfirmation) {
            checkEmail(el, email);
            return;
          }
        } else {
          await Store.signIn(email, pw);
        }
        App.parent = await Store.getParent();
        if (App.parent?.pendingChild) {
          const kids = await Store.listStudents();
          if (kids.length === 0) return App.go("#/setup-first-kid");
        }
        App.go("#/profiles");
      } catch (err) {
        errEl.textContent = err.message || "Something went wrong. Try again!";
      }
    });
  }

  /* ================= CHECK-EMAIL (post-signup confirmation) ================= */
  function checkEmail(el, email) {
    el.innerHTML = `
    <div class="view">
      <div class="hero">
        <span class="logo-rocket">📬</span>
        <h1>Check your <span class="grad">email</span></h1>
        <p class="tagline">We sent a confirmation link to<br><b>${esc(email)}</b></p>
      </div>
      <div class="panel">
        <p>Click the link in that email to activate your family account. Once you're confirmed, come back here and sign in.</p>
        <button class="btn btn-big" id="to-signin">Go to Sign In 🚀</button>
      </div>
      ${cosmoSays("Almost ready for blast-off! Just tap the link in your email inbox. 📨")}
    </div>`;
    el.querySelector("#to-signin").addEventListener("click", () => welcome(el, "signin"));
  }

  /* ================= SETUP FIRST KID (post email-confirm, first sign-in) ================= */
  async function setupFirstKid(el) {
    const parent = await Store.getParent();
    if (!parent?.pendingChild) return App.go("#/profiles");
    const childName = parent.pendingChild.name || "Cadet";
    const childSchool = parent.pendingChild.school || "";
    let chosen = AVATARS[0];
    el.innerHTML = `
    <div class="view">
      <div class="hero" style="padding-top:12px">
        <span class="logo-rocket">🎉</span>
        <h1>Welcome${parent.firstName ? ", " + esc(parent.firstName) : ""}!</h1>
        <p class="tagline">Let's set up <b>${esc(childName)}</b>'s cadet card</p>
      </div>
      <div class="panel">
        <div class="field"><label for="kname">Cadet name</label>
          <input id="kname" maxlength="20" value="${esc(childName)}" required></div>
        <div class="field"><label for="kschool">School</label>
          <input id="kschool" maxlength="80" value="${esc(childSchool)}" required></div>
        <label style="font-weight:700;color:var(--ink-dim);font-size:0.95rem">Pick a space buddy</label>
        <div class="profile-grid" id="avatar-pick" style="grid-template-columns:repeat(4,1fr)">
          ${AVATARS.map((a, i) => `<button type="button" class="profile-card${i === 0 ? " picked" : ""}" data-a="${a}" style="padding:10px">
            <span class="avatar">${a}</span></button>`).join("")}
        </div>
        <div class="field mt"><label for="kpin">Secret code (4 numbers)</label>
          <input id="kpin" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="e.g. 2468" required></div>
        <div class="form-error" id="setup-error"></div>
        <button class="btn btn-big btn-mint" id="setup-save">Blast off! 🚀</button>
      </div>
      ${cosmoSays("A cadet name, a school, a space buddy, and a secret code, then we're launching! 🌠")}
    </div>`;

    const pickBox = el.querySelector("#avatar-pick");
    pickBox.querySelectorAll(".profile-card").forEach((b) =>
      b.addEventListener("click", () => {
        pickBox.querySelectorAll(".profile-card").forEach((x) => (x.style.borderColor = ""));
        b.style.borderColor = "var(--star-gold)";
        chosen = b.dataset.a;
      }));

    el.querySelector("#setup-save").addEventListener("click", async () => {
      const errEl = el.querySelector("#setup-error");
      errEl.textContent = "";
      const name = el.querySelector("#kname").value.trim();
      const school = el.querySelector("#kschool").value.trim();
      const pin = el.querySelector("#kpin").value.trim();
      if (!name) return (errEl.textContent = "Every cadet needs a name!");
      if (!school) return (errEl.textContent = "Please enter your child's school.");
      if (!/^\d{4}$/.test(pin)) return (errEl.textContent = "The secret code must be exactly 4 numbers.");
      try {
        await Store.createStudent(name, chosen, pin, school);
        await Store.clearPendingChild();
        App.parent = await Store.getParent();
        Gamify.toast(`Welcome aboard, Cadet ${name}! 🚀`);
        App.go("#/profiles");
      } catch (err) { errEl.textContent = err.message; }
    });
  }

  /* ================= PROFILE PICKER ================= */
  async function profiles(el) {
    const kids = await Store.listStudents();
    el.innerHTML = `
    <div class="view">
      <div class="hero" style="padding-top:12px">
        <h1 style="font-size:1.6rem">Who's flying today? 👩‍🚀</h1>
      </div>
      <div class="profile-grid">
        ${kids.map((k) => `
          <button class="profile-card" data-id="${k.id}">
            <span class="avatar">${k.avatar}</span>
            <span class="pname">${esc(k.name)}</span>
            <span class="muted">⭐ ${k.xp || 0} XP</span>
          </button>`).join("")}
        <button class="profile-card" id="add-kid" style="border-style:dashed">
          <span class="avatar">➕</span><span class="pname">New Cadet</span>
        </button>
      </div>
      ${kids.length === 0 ? cosmoSays("Let's make your very own cadet card! Tap <b>New Cadet</b>!") : ""}
      <p class="center mt"><button class="link-btn" id="signout">Grown-up sign out</button></p>
    </div>`;

    el.querySelectorAll(".profile-card[data-id]").forEach((btn) =>
      btn.addEventListener("click", () => App.go("#/pin/" + btn.dataset.id)));
    el.querySelector("#add-kid").addEventListener("click", () => newCadet(el));
    el.querySelector("#signout").addEventListener("click", async () => {
      await Store.signOut(); App.parent = null; App.student = null; App.go("#/welcome");
    });
  }

  function newCadet(el) {
    let chosen = AVATARS[0];
    el.innerHTML = `
    <div class="view">
      <div class="map-head"><button class="back-btn" id="back">←</button><h2>New Cadet 🛠️</h2></div>
      <div class="panel">
        <div class="field"><label for="kname">Cadet name</label>
          <input id="kname" maxlength="20" placeholder="First name" required></div>
        <div class="field"><label for="kschool">School</label>
          <input id="kschool" maxlength="80" placeholder="e.g. Sunnybrook Elementary" required></div>
        <label style="font-weight:700;color:var(--ink-dim);font-size:0.95rem">Pick your space buddy</label>
        <div class="profile-grid" id="avatar-pick" style="grid-template-columns:repeat(4,1fr)">
          ${AVATARS.map((a, i) => `<button type="button" class="profile-card${i === 0 ? " picked" : ""}" data-a="${a}" style="padding:10px">
            <span class="avatar">${a}</span></button>`).join("")}
        </div>
        <div class="field mt"><label for="kpin">Secret code (4 numbers)</label>
          <input id="kpin" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="e.g. 2468" required></div>
        <div class="form-error" id="kid-error"></div>
        <button class="btn btn-big btn-mint" id="create-kid">Make My Cadet Card! 🎖️</button>
      </div>
    </div>`;

    const pickBox = el.querySelector("#avatar-pick");
    pickBox.querySelectorAll(".profile-card").forEach((b) =>
      b.addEventListener("click", () => {
        pickBox.querySelectorAll(".profile-card").forEach((x) => (x.style.borderColor = ""));
        b.style.borderColor = "var(--star-gold)";
        chosen = b.dataset.a;
      }));
    el.querySelector("#back").addEventListener("click", () => profiles(el));
    el.querySelector("#create-kid").addEventListener("click", async () => {
      const name = el.querySelector("#kname").value.trim();
      const school = el.querySelector("#kschool").value.trim();
      const pin = el.querySelector("#kpin").value.trim();
      const errEl = el.querySelector("#kid-error");
      if (!name) return (errEl.textContent = "Every cadet needs a name!");
      if (!school) return (errEl.textContent = "Please enter the school name.");
      if (!/^\d{4}$/.test(pin)) return (errEl.textContent = "The secret code must be exactly 4 numbers.");
      try {
        await Store.createStudent(name, chosen, pin, school);
        Gamify.toast(`Welcome aboard, Cadet ${name}! 🚀`);
        profiles(el);
      } catch (err) { errEl.textContent = err.message; }
    });
  }

  /* ================= PIN ENTRY ================= */
  async function pinEntry(el, studentId) {
    const kids = await Store.listStudents();
    const kid = kids.find((k) => k.id === studentId);
    if (!kid) return App.go("#/profiles");
    let pin = "";

    el.innerHTML = `
    <div class="view center">
      <div class="hero" style="padding-top:12px">
        <span style="font-size:3.4rem">${kid.avatar}</span>
        <h1 style="font-size:1.5rem">Hi ${esc(kid.name)}!</h1>
        <p class="tagline">Enter your secret code</p>
      </div>
      <div class="pin-dots" id="dots">${"<div class='pin-dot'></div>".repeat(4)}</div>
      <div class="pin-pad" id="pad">
        ${[1,2,3,4,5,6,7,8,9].map((n) => `<button class="pin-key" data-k="${n}">${n}</button>`).join("")}
        <button class="pin-key" data-k="who" style="font-size:0.85rem">Not me</button>
        <button class="pin-key" data-k="0">0</button>
        <button class="pin-key" data-k="back">⌫</button>
      </div>
    </div>`;

    const dots = () => el.querySelectorAll(".pin-dot").forEach((d, i) => d.classList.toggle("filled", i < pin.length));
    el.querySelector("#pad").addEventListener("click", async (e) => {
      const key = e.target.closest(".pin-key")?.dataset.k;
      if (!key) return;
      if (key === "who") return App.go("#/profiles");
      if (key === "back") { pin = pin.slice(0, -1); return dots(); }
      if (pin.length >= 4) return;
      pin += key; dots();
      if (pin.length === 4) {
        if (await Store.verifyPin(studentId, pin)) {
          App.student = kid;
          localStorage.setItem("cca_active_student", JSON.stringify(kid));
          await App.refreshProgress();
          const streak = await Store.touchStreak(studentId);
          App.progress.streakCount = streak;
          App.go("#/dashboard");
        } else {
          el.querySelector("#dots").classList.add("pin-shake");
          setTimeout(() => { el.querySelector("#dots").classList.remove("pin-shake"); pin = ""; dots(); }, 450);
        }
      }
    });
  }

  /* ================= DASHBOARD ================= */
  function dashboard(el) {
    const { progressMap, xp, streakCount } = App.progress;
    const rank = Gamify.rankFor(xp);
    const next = Gamify.nextRank(xp);
    const totalStars = Object.values(progressMap).reduce((n, p) => n + (p.stars || 0), 0);
    const math = Content.trackStats("math", progressMap);
    const ela = Content.trackStats("ela", progressMap);

    // "Continue" = next mission in whichever track is less complete (tie → math)
    const contSubject = ela.pct < math.pct ? "ela" : "math";
    const contId = Content.nextMission(contSubject, progressMap) || Content.nextMission(contSubject === "math" ? "ela" : "math", progressMap);
    const contModule = contId ? Content.getModule(contId) : null;

    el.innerHTML = `
    <div class="view">
      <div class="dash-head">
        <div class="avatar-big">${App.student.avatar}</div>
        <div>
          <h2>Hi, ${esc(App.student.name)}! ${rank.emoji}</h2>
          <div class="sub">${rank.name}${next ? ` · ${next.xp - xp} XP to ${next.name}` : " · top rank!"}</div>
        </div>
      </div>
      <div class="stat-strip">
        <div class="stat"><div class="num">⚡ ${xp}</div><div class="lbl">XP</div></div>
        <div class="stat"><div class="num">🔥 ${streakCount}</div><div class="lbl">Day streak</div></div>
        <div class="stat"><div class="num">⭐ ${totalStars}</div><div class="lbl">Stars</div></div>
      </div>

      ${contModule ? `
      <button class="panel continue-card" id="continue" style="width:100%;text-align:left;border-color:var(--alien-mint)">
        <span class="cc-icon">${contModule.icon || "🛰️"}</span>
        <span class="cc-text">
          <span class="cc-title">Next mission: ${esc(contModule.title)}</span><br>
          <span class="cc-sub">${Content.getUnit(contModule.unitId).title} · ~${contModule.minutes || 20} min</span>
        </span>
        <span class="btn btn-mint" style="min-height:44px;padding:8px 16px">GO!</span>
      </button>` : `<div class="panel center"><b>🏆 Every mission complete. You're a legend, Cadet!</b></div>`}

      <button class="galaxy-card math" data-route="#/map/math">
        <span class="g-deco">🪐</span>
        <span class="g-emoji">🪐</span>
        <h3>Math Galaxy</h3>
        <div class="g-sub">${math.done} of ${math.total} missions complete</div>
        <div class="g-progress"><div class="progress-track"><div class="progress-fill" style="width:${math.pct}%"></div></div></div>
      </button>

      <button class="galaxy-card ela" data-route="#/map/ela">
        <span class="g-deco">📖</span>
        <span class="g-emoji">📖</span>
        <h3>Reading Galaxy</h3>
        <div class="g-sub">${ela.done} of ${ela.total} missions complete</div>
        <div class="g-progress"><div class="progress-track"><div class="progress-fill" style="width:${ela.pct}%"></div></div></div>
      </button>

      ${cosmoSays(dashTip(streakCount, math, ela))}
    </div>`;

    if (contModule) el.querySelector("#continue").addEventListener("click", () => App.go("#/lesson/" + contModule.id));
    el.querySelectorAll("[data-route]").forEach((b) => b.addEventListener("click", () => App.go(b.dataset.route)));
  }

  function dashTip(streak, math, ela) {
    if (streak >= 3) return `🔥 <b>${streak} days in a row!</b> Keep that rocket burning!`;
    if (math.done === 0 && ela.done === 0) return "Ready for your very first mission? Tap the green <b>GO!</b> button!";
    if (math.pct >= 100) return "🪐 <b>Math Galaxy complete!</b> Incredible flying, Cadet!";
    return "One mission at a time. That's how great explorers do it! 💪";
  }

  /* ================= GALAXY MAP ================= */
  function map(el, subject) {
    const { progressMap } = App.progress;
    const units = Content.getUnits(subject);
    const nextId = Content.nextMission(subject, progressMap);
    const title = subject === "math" ? "🪐 Math Galaxy" : "📖 Reading Galaxy";

    el.innerHTML = `
    <div class="view">
      <div class="map-head">
        <button class="back-btn" data-route="#/dashboard">←</button>
        <h2>${title}</h2>
      </div>
      ${units.map((unit) => {
        const unlocked = Content.isUnitUnlocked(unit.id, progressMap);
        return `
        <section class="unit-block ${unlocked ? "" : "unit-locked"}">
          <div class="unit-head">
            <div class="planet" style="background:${unit.planet.color};color:${unit.planet.color}">${unit.planet.emoji}</div>
            <div>
              <div class="u-title">${esc(unit.title)}</div>
              <div class="u-sub">${esc(unit.subtitle || "")}</div>
            </div>
          </div>
          <ul class="mission-list">
            ${unit.modules.map((m) => {
              const p = progressMap[m.id];
              const passed = p && p.passed;
              const isNext = m.id === nextId;
              const canOpen = Content.isUnlocked(m.id, progressMap);
              const stars = passed ? "⭐".repeat(p.stars) + "☆".repeat(3 - p.stars) : "";
              return `
              <li class="mission ${passed ? "done" : ""} ${isNext ? "next" : ""} ${canOpen ? "" : "locked"}">
                <button class="mission-btn" data-mod="${m.id}" ${canOpen ? "" : "disabled"}>
                  <span class="m-icon">${canOpen ? (passed ? "✅" : m.icon || "🛰️") : "🔒"}</span>
                  <span class="m-body">
                    <span class="m-title">${esc(m.title)}</span><br>
                    <span class="m-sub">${esc(m.standard)} · ~${m.minutes || 20} min</span>
                  </span>
                  <span class="m-stars">${stars}</span>
                </button>
              </li>`;
            }).join("")}
          </ul>
        </section>`;
      }).join("")}
    </div>`;

    el.querySelectorAll("[data-route]").forEach((b) => b.addEventListener("click", () => App.go(b.dataset.route)));
    el.querySelectorAll(".mission-btn[data-mod]").forEach((b) =>
      b.addEventListener("click", () => App.go("#/lesson/" + b.dataset.mod)));
  }

  /* ================= LESSON PLAYER ================= */
  function lesson(el, moduleId, screenIndex = 0) {
    const mod = Content.getModule(moduleId);
    if (!mod) return App.go("#/dashboard");
    if (!Content.isUnlocked(moduleId, App.progress.progressMap)) {
      Gamify.toast("🔒 Finish the mission before this one first!");
      return App.go("#/map/" + (mod.subject || "math"));
    }
    App.checkBreak();

    const screens = mod.screens;
    const i = Math.max(0, Math.min(screenIndex, screens.length - 1));
    const screen = screens[i];
    const seen = (App.progress.progressMap[moduleId]?.screensDone) || [];

    el.innerHTML = `
    <div class="view">
      <div class="lesson-top">
        <button class="back-btn" data-route="#/map/${mod.subject}">←</button>
        <div class="lt-title">${mod.icon || "🛰️"} ${esc(mod.title)}</div>
        <span class="chip">${esc(mod.standard)}</span>
      </div>
      <div class="screen-dots">
        ${screens.map((s, k) => `<div class="sd ${k === i ? "on" : seen.includes(s.id) ? "seen" : ""}"></div>`).join("")}
        <div class="sd ${""}" style="border:1.5px solid var(--star-gold);background:transparent" title="quiz"></div>
      </div>
      <div class="panel lesson-body" id="lesson-screen">
        ${Narrator.buttonHtml()}
        ${screen.title ? `<h3>${esc(screen.title)}</h3>` : ""}
        ${screen.type === "writing" ? writingScreenHtml(screen) : screen.html}
      </div>
      <div class="btn-row">
        ${i > 0 ? `<button class="btn btn-ghost" id="prev">← Back</button>` : ""}
        <button class="btn ${i + 1 >= screens.length ? "btn-coral" : "btn-blue"}" id="next">
          ${screen.type === "writing" ? "Save & Continue ✍️" : i + 1 >= screens.length ? "Start the Quiz! 🚀" : "Next ➜"}
        </button>
      </div>
    </div>`;

    Narrator.attach(el.querySelector(".narrate-btn"), mod.id, screen.id);

    const prev = el.querySelector("#prev");
    if (prev) prev.addEventListener("click", () => lesson(el, moduleId, i - 1));
    el.querySelector("[data-route]").addEventListener("click", (e) => App.go(e.currentTarget.dataset.route));

    el.querySelector("#next").addEventListener("click", async () => {
      // writing screens: persist the kid's writing before moving on
      if (screen.type === "writing") {
        const text = el.querySelector(".writing-area").value.trim();
        if (text.length < 10) { Gamify.toast("✍️ Write a little more first, Cadet!"); return; }
        await Store.saveWriting(App.student.id, mod.id, screen.prompt, text);
        Gamify.toast("📨 Sent to Mission Control for a grown-up to read!");
      }
      const isNew = await Store.saveScreenDone(App.student.id, mod.id, screen.id);
      if (isNew) {
        await Store.addXp(App.student.id, Gamify.XP.SCREEN);
        App.progress.xp += Gamify.XP.SCREEN;
        (App.progress.progressMap[mod.id] ||= { passed: false, bestScore: 0, stars: 0, screensDone: [] }).screensDone.push(screen.id);
      }
      if (i + 1 >= screens.length) App.go("#/quiz/" + moduleId);
      else lesson(el, moduleId, i + 1);
    });
  }

  function writingScreenHtml(screen) {
    return `
      ${screen.html || ""}
      <div class="callout"><b>Your mission:</b> ${screen.prompt}</div>
      ${screen.checklist ? `
      <p><b>Check your work:</b></p>
      <ul class="races-checklist">
        ${screen.checklist.map((c) => `<li><input type="checkbox"> <span>${c}</span></li>`).join("")}
      </ul>` : ""}
      <textarea class="writing-area" placeholder="Type your writing here..."></textarea>
      <p class="muted mt">Your writing goes to a grown-up to read. It doesn't need a score to keep going. 💌</p>`;
  }

  /* ================= QUIZ ================= */
  function quiz(el, moduleId) {
    const mod = Content.getModule(moduleId);
    if (!mod) return App.go("#/dashboard");
    if (!Content.isUnlocked(moduleId, App.progress.progressMap)) {
      Gamify.toast("🔒 Finish the mission before this one first!");
      return App.go("#/map/" + (mod.subject || "math"));
    }
    App.checkBreak();

    el.innerHTML = `
    <div class="view">
      <div class="lesson-top">
        <button class="back-btn" data-route="#/lesson/${moduleId}">←</button>
        <div class="lt-title">📝 Quiz: ${esc(mod.title)}</div>
      </div>
      <div id="quiz-root"></div>
    </div>`;
    el.querySelector("[data-route]").addEventListener("click", (e) => App.go(e.currentTarget.dataset.route));

    Quiz.start(el.querySelector("#quiz-root"), mod, {
      onFinish: async (result) => {
        await App.recordQuiz(mod, result);
        results(el, mod, result);
      },
    });
  }

  /* ================= RESULTS ================= */
  function results(el, mod, result) {
    const { passed, pct, score, total, stars } = result;
    if (passed) Gamify.confetti();
    const nextId = Content.nextModuleId(mod.id);
    const nextMod = nextId ? Content.getModule(nextId) : null;
    const nextUnlocked = nextMod && Content.isUnlocked(nextId, App.progress.progressMap);

    el.innerHTML = `
    <div class="view results">
      <span class="r-emoji">${passed ? "🏆" : "🛠️"}</span>
      <h2>${passed ? "Mission Complete!" : "So Close, Cadet!"}</h2>
      <div class="r-score">You got ${score} out of ${total} (${pct}%)</div>
      <div class="result-stars">
        ${[1, 2, 3].map((n) => `<span class="s ${n <= stars ? "earned" : ""}">⭐</span>`).join("")}
      </div>
      ${result.xpEarned ? `<span class="xp-chip">⚡ +${result.xpEarned} XP</span>` : ""}
      ${(result.newBadges || []).map((b) => `<span class="xp-chip">${b.emoji} ${b.name}!</span>`).join("")}
      <div class="panel mt" style="text-align:left">
        ${passed
          ? cosmoSays(pct === 100
              ? "A <b>perfect score</b>?! You're a superstar! 🌟"
              : "You passed! The next mission is unlocked. Want to try again later for 3 stars?")
          : cosmoSays(`You need <b>${CCA_CONFIG.PASS_PCT}%</b> to unlock the next mission. Let's look at the lesson again. You've got this! 💪`)}
      </div>
      <div class="btn-row" style="flex-direction:column">
        ${passed && nextUnlocked ? `<button class="btn btn-big btn-mint" id="go-next">Next Mission: ${esc(nextMod.title)} 🚀</button>` : ""}
        ${!passed ? `<button class="btn btn-big btn-blue" id="review">Review the Lesson 📚</button>` : ""}
        <button class="btn btn-big ${passed ? "btn-blue" : "btn-coral"}" id="retry">${passed ? "Try Again for More Stars ⭐" : "Try the Quiz Again 💪"}</button>
        <button class="btn btn-big btn-ghost" id="to-map">Back to the Map 🗺️</button>
      </div>
    </div>`;

    const on = (id, fn) => { const b = el.querySelector(id); if (b) b.addEventListener("click", fn); };
    on("#go-next", () => App.go("#/lesson/" + nextId));
    on("#review", () => App.go("#/lesson/" + mod.id));
    on("#retry", () => App.go("#/quiz/" + mod.id));
    on("#to-map", () => App.go("#/map/" + mod.subject));
  }

  /* ================= BADGES ================= */
  function badges(el) {
    const earned = App.progress.badges;
    const all = Gamify.allBadges();
    el.innerHTML = `
    <div class="view">
      <div class="map-head">
        <button class="back-btn" data-route="#/dashboard">←</button>
        <h2>🏅 My Badges</h2>
      </div>
      <p class="muted">${earned.length} of ${all.length} collected</p>
      <div class="badge-grid">
        ${all.map((b) => `
          <div class="badge-card ${earned.includes(b.id) ? "" : "locked"}">
            <div class="b-emoji">${b.emoji}</div>
            <div class="b-name">${esc(b.name)}</div>
            <div class="b-desc">${esc(b.desc)}</div>
          </div>`).join("")}
      </div>
    </div>`;
    el.querySelector("[data-route]").addEventListener("click", (e) => App.go(e.currentTarget.dataset.route));
  }

  /* ================= PARENT GATE + PARENT AREA ================= */
  function parentGate(el) {
    const a = 3 + Math.floor(Math.random() * 6); // 3..8
    const b = 4 + Math.floor(Math.random() * 6); // 4..9
    el.innerHTML = `
    <div class="view center">
      <div class="hero" style="padding-top:12px"><span style="font-size:3rem">🔒</span>
        <h1 style="font-size:1.4rem">Grown-Ups Only</h1>
        <p class="tagline">To enter, solve: <b style="color:var(--star-gold)">${a} × ${b} = ?</b></p>
      </div>
      <div class="panel" style="max-width:320px;margin:0 auto">
        <div class="field"><input id="gate" inputmode="numeric" placeholder="Answer" style="text-align:center;font-size:1.4rem"></div>
        <div class="form-error" id="gate-err"></div>
        <button class="btn btn-big" id="gate-go">Enter</button>
        <p class="form-note center"><button class="link-btn" data-route="#/dashboard">Back to the fun stuff</button></p>
      </div>
    </div>`;
    el.querySelector("[data-route]").addEventListener("click", (e) => App.go(e.currentTarget.dataset.route));
    el.querySelector("#gate-go").addEventListener("click", () => {
      if (Number(el.querySelector("#gate").value) === a * b) App.go("#/parent");
      else el.querySelector("#gate-err").textContent = "Hmm, not quite. Try again.";
    });
  }

  async function parentArea(el) {
    const kids = await Store.listStudents();
    const writings = await Store.listWritings();
    const reports = await Promise.all(kids.map(async (k) => ({ kid: k, prog: await Store.getProgress(k.id) })));

    el.innerHTML = `
    <div class="view parent-view">
      <div class="map-head">
        <button class="back-btn" data-route="#/dashboard">←</button>
        <h2>👨‍👩‍👧 Parent Dashboard</h2>
      </div>
      ${Store.mode === "local" ? `<div class="demo-banner">🧪 Demo mode. Data lives in this browser only. Configure Supabase (see README) for real accounts &amp; sync.</div>` : ""}
      ${reports.map(({ kid, prog }) => {
        const math = Content.trackStats("math", prog.progressMap);
        const ela = Content.trackStats("ela", prog.progressMap);
        const stars = Object.values(prog.progressMap).reduce((n, p) => n + (p.stars || 0), 0);
        const kidWritings = writings.filter((w) => w.studentId === kid.id);
        return `
        <div class="panel kid-report">
          <div class="kr-head"><span class="avatar">${kid.avatar}</span><h3>${esc(kid.name)}</h3></div>
          <div class="kr-row"><span>Math Galaxy</span><span class="v">${math.done}/${math.total} missions (${math.pct}%)</span></div>
          <div class="kr-row"><span>Reading Galaxy</span><span class="v">${ela.done}/${ela.total} missions (${ela.pct}%)</span></div>
          <div class="kr-row"><span>Total XP</span><span class="v">⚡ ${prog.xp}</span></div>
          <div class="kr-row"><span>Stars earned</span><span class="v">⭐ ${stars}</span></div>
          <div class="kr-row"><span>Day streak</span><span class="v">🔥 ${prog.streakCount}</span></div>
          <div class="kr-row"><span>Quiz questions answered</span><span class="v">${prog.answeredCount}</span></div>
          ${kidWritings.length ? `
            <h4 class="mt">✍️ Writing to review (${kidWritings.length})</h4>
            ${kidWritings.slice(0, 5).map((w) => `
              <div class="writing-review">
                <div class="wr-prompt">${esc(Content.getModule(w.moduleId)?.title || w.moduleId)}: ${esc(w.prompt)}</div>
                <div class="wr-text">${esc(w.text)}</div>
              </div>`).join("")}` : ""}
        </div>`;
      }).join("")}
      <div class="panel mt">
        <h3>About this course</h3>
        <p class="muted mt">Content is aligned to the Mississippi College and Career Readiness Standards for Grade 3.
        every math standard (3.OA, 3.NBT, 3.NF, 3.MD, 3.G) plus an ELA unit built on the MDE "Characters' Contributions"
        exemplar (RL.3.3, RL.3.1, L.3.4a, L.3.2c, W.3.1). A mission is passed at ${CCA_CONFIG.PASS_PCT}%+ on its quiz;
        Passing unlocks the next mission. Writing missions are saved here for you to read. They are not auto-graded.</p>
        <div class="btn-row">
          <button class="btn btn-ghost" id="switch-kid">Switch cadet</button>
          <button class="btn btn-coral" id="signout">Sign out</button>
        </div>
      </div>
    </div>`;

    el.querySelector("[data-route]").addEventListener("click", (e) => App.go(e.currentTarget.dataset.route));
    el.querySelector("#switch-kid").addEventListener("click", () => {
      App.student = null; localStorage.removeItem("cca_active_student"); App.go("#/profiles");
    });
    el.querySelector("#signout").addEventListener("click", async () => {
      await Store.signOut();
      App.parent = null; App.student = null; localStorage.removeItem("cca_active_student");
      App.go("#/welcome");
    });
  }

  /* ================= BREAK OVERLAY ================= */
  function breakOverlay() {
    const root = document.getElementById("overlay-root");
    root.innerHTML = `
    <div class="overlay">
      <div class="panel">
        <div class="o-emoji">🧘</div>
        <h3>Mission Break!</h3>
        <p>You've been exploring for ${CCA_CONFIG.BREAK_MINUTES} minutes.<br>
        Great astronauts rest their eyes, stretch, and drink some water! 💧</p>
        <div class="btn-row" style="flex-direction:column">
          <button class="btn btn-big btn-mint" id="break-done">I Took My Break! ✅</button>
          <button class="btn btn-big btn-ghost" id="break-exit">I'm Done for Now 👋</button>
        </div>
      </div>
    </div>`;
    root.querySelector("#break-done").addEventListener("click", () => { root.innerHTML = ""; App.resetBreakTimer(); });
    root.querySelector("#break-exit").addEventListener("click", () => { root.innerHTML = ""; App.resetBreakTimer(); App.go("#/dashboard"); });
  }

  return { welcome, setupFirstKid, profiles, pinEntry, dashboard, map, lesson, quiz, results, badges, parentGate, parentArea, breakOverlay, cosmoSays };
})();
