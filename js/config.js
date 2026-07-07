/* ============================================================
   Haley's Launchpad — configuration
   Fill in your Supabase project credentials to enable cloud
   accounts and cross-device progress sync.

   Until you do, the app runs in LOCAL DEMO MODE: everything
   works, but accounts and progress live only in this browser
   (localStorage).
   ============================================================ */

window.CCA_CONFIG = {
  // From your Supabase dashboard: Project Settings → API
  SUPABASE_URL: "https://nicffbhskznkurbafnao.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_QtnWIsp07O4jPQz08GSUAA_aTDSVJwT",  // publishable key — safe to ship to browsers

  // Mastery gate: minimum quiz score (percent) to unlock the next mission
  PASS_PCT: 80,

  // Pomodoro cap: minutes before the gentle "mission break" reminder
  BREAK_MINUTES: 20,

  // Where narration audio lives, relative to the site root.
  // Each lesson screen looks for:  audio/<moduleId>/<screenId>.mp3
  // Each quiz question looks for:  audio/<moduleId>/quiz-<questionId>.mp3
  AUDIO_BASE: "audio",
};

// Content registry — every content/*.js file pushes its unit in here.
window.COURSE_CONTENT = [];
