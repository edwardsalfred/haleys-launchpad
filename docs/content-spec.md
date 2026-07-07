# Haley's Launchpad — Content Authoring Spec

Every file in `content/` defines ONE unit (a "planet") and must follow this format
exactly. Files are plain JS loaded via `<script>`; each pushes one object into
`window.COURSE_CONTENT`. See `content/math-u1.js` for the reference exemplar —
match its quality, tone, and structure.

## File skeleton

```js
/* Unit N — <Title> (<standards covered>) */
window.COURSE_CONTENT.push({
  id: "math-u1",              // REQUIRED, kebab-case, matches filename
  subject: "math",            // "math" | "ela"
  order: 1,                   // position of this unit within its subject track
  title: "Multiplication Planet",
  subtitle: "Equal groups, arrays, and sharing",   // one short line, kid-facing
  planet: { emoji: "🪐", color: "#FF8C42" },       // map decoration
  badgeName: "Multiplication Planet Star",          // optional; badge for finishing the unit
  modules: [ /* see below */ ],
});
```

## Module shape

```js
{
  id: "math-u1-m1",           // REQUIRED: "<unitId>-m<N>"
  title: "What Is Multiplication?",
  icon: "✖️",                 // one emoji shown on the map
  standard: "3.OA.1",         // MS CCRS code(s), comma-separated if several
  minutes: 20,                // target time, always <= 20
  screens: [ /* 4-6 lesson screens */ ],
  quiz: { questions: [ /* exactly 8 questions */ ] },
}
```

## Screens (4–6 per module)

Common fields: `id` ("s1", "s2"...), `title` (short, kid-facing), `narration`
(REQUIRED on every screen — the exact text a narrator will read aloud; plain
prose, no HTML, no emoji; it should cover everything important on the screen).

### type: "lesson" (default — omit `type`)
`html`: the teaching content. Allowed building blocks (already styled):

- `<p>` prose — short sentences, 2nd–3rd grade reading level.
- `<div class="big-visual">` — large emoji/number visuals, e.g. equal groups:
  `<div class="vis-row">🍎🍎🍎 &nbsp; 🍎🍎🍎</div>` (use `vis-row` per line).
- `<div class="callout"><b>Remember:</b> ...</div>` — key idea box.
- `<div class="vocab"><b>word</b> — kid-friendly definition</div>` — new word box.
- `<table>` with `<th>/<td>` — small tables (≤5 columns, phone-width!).
- `<b>`, `<u>` for emphasis. NO images, NO links, NO scripts, NO other classes.

### type: "story" (ELA reading passages)
`html`: `<div class="story"><p>...</p>...</div>` — an ORIGINAL story/passage
(never copyrighted text). 150–350 words for grade 3, simple past tense,
dialogue with correct comma/quotation-mark punctuation.

### type: "writing" (ELA writing missions)
```js
{ id: "s5", type: "writing", title: "Your Turn to Write!",
  html: "<p>optional lead-in</p>",
  prompt: "One-sentence writing task the kid responds to.",
  checklist: ["I restated the question", "I gave my answer", ...],  // e.g. RACES steps
  narration: "..." }
```
The kid's text is saved for parent review; it is NOT auto-graded.

## Quiz (exactly 8 questions per module)

Passing = 80% (7 of 8). Mix difficulties: ~3 easy, ~3 medium, ~2 challenge.
Each question:

```js
{
  id: "q1",                   // "q1".."q8", unique within the module
  type: "mc",                 // "mc" | "tf" | "numeric"
  prompt: "Which equation matches the picture?",   // may contain <b>/<u>
  visual: "🍪🍪🍪🍪 &nbsp; 🍪🍪🍪🍪",               // optional big emoji/number visual
  passage: "Milo packed 3 boxes...",               // optional; word problems / ELA excerpts
  // mc:
  options: ["3 × 4", "3 + 4", "4 − 3", "12 × 1"],  // 3-4 options, ONE correct
  answer: 0,                                       // index of correct option
  // tf:  answer: true | false     (no options field)
  // numeric:  answer: 24          (kid types on a keypad; whole numbers only)
  hints: {
    verbal: "Count the groups first. How many groups of cookies do you see?",
    example: "For 2 groups of 5 stars: ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ → 2 × 5 = 10.",
    narrow: [2],              // mc only: indexes of WRONG options to keep visible
  },                          //   (correct answer always stays; others get dimmed)
  explain: "There are 2 groups with 4 cookies in each group, so 2 × 4.",
}
```

Rules for quiz items:
- Distractors must be PLAUSIBLE errors (adding instead of multiplying, reversing
  numerator/denominator, off-by-one) — never silly throwaways.
- `explain` is REQUIRED on every question: one or two friendly sentences that
  teach, shown after answering.
- `hints.verbal` and `hints.example` REQUIRED on every question; `hints.narrow`
  required on every `mc` question (array with ONE wrong-option index to keep,
  so the kid chooses between the correct answer and one distractor).
- `numeric` answers must be whole numbers 0–999999.
- ELA comprehension questions include the relevant excerpt in `passage` so kids
  never need to remember a previous screen.
- NO negative numbers, decimals, or fractions as numeric ANSWERS (use `mc` for
  fraction questions, e.g. options "1/4", "2/4"...).

## Voice & pedagogy

- Narrator persona: "Cosmo," a warm, playful alien guide. Address the kid as
  "Cadet." Celebrate effort. Never sarcastic, never shaming.
- Sentences short. One idea per screen. Concrete before abstract: every concept
  starts with a picture (emoji visual) before symbols.
- Each module's screens follow: hook/why-it-matters → teach with visual →
  worked example → try-it-with-me → recap (the recap screen lists 2-3
  "I can..." statements matching the standard).
- Content must be faithful to the Mississippi CCRS standard listed on the
  module — teach what the standard says, at grade-3 depth, using the sample
  problem styles from the MDE scaffolding/exemplar documents.
- Escape rule: content is embedded in JS strings — use double quotes for JS,
  single quotes inside HTML attributes, and `&nbsp;` for visual spacing.
  Multiplication sign is `×` (not x), division `÷`, fractions written "3/4".

## File checklist before you finish

1. File is valid JS (balanced quotes/braces; no trailing commas after the last
   property is fine, JS allows them; no template-literal backticks containing
   unescaped backticks).
2. Unit id, module ids, screen ids, question ids all unique and patterned.
3. Every screen has `narration`. Every question has `explain` + `hints`.
4. Exactly 8 questions per quiz; every `mc` has a valid `answer` index and
   `narrow` contains only wrong indexes.
5. Reading level: grade 2-3. No copyrighted text anywhere.
