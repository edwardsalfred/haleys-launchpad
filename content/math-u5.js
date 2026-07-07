/* Unit 5 — Fraction Frontier (3.NF.1, 3.NF.2, 3.NF.3a-d, 3.G.2)
   Parts of a whole: unit fractions, fractions on the number line,
   equivalence, whole numbers as fractions, and comparing fractions. */
window.COURSE_CONTENT.push({
  id: "math-u5",
  subject: "math",
  order: 5,
  title: "Fraction Frontier",
  subtitle: "Parts of a whole, on and off the number line",
  planet: { emoji: "🌗", color: "#FF8FD8" },
  badgeName: "Fraction Frontier Star",
  modules: [

    /* ============ M1 — Meet the Fractions (3.NF.1, 3.G.2) ============ */
    {
      id: "math-u5-m1",
      title: "Meet the Fractions",
      icon: "🍕",
      standard: "3.NF.1, 3.G.2",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Pizza Party on the Frontier!",
          html: `
            <p>Welcome to the Fraction Frontier, Cadet! Out here, we share <b>everything</b> fairly.</p>
            <p>Tonight, <b>4 alien friends</b> share <b>1 space pizza</b>. We cut it into <b>4 equal slices</b>:</p>
            <div class="big-visual">
              <div class="vis-row">🍕🍕🍕🍕</div>
            </div>
            <p>Each slice is <b>1 out of 4 equal parts</b>. We call that piece <b>1/4</b> — a <b>fraction</b>!</p>
            <div class="vocab"><b>fraction</b> — a number that names part of a whole.</div>`,
          narration: "Welcome to the Fraction Frontier, Cadet! Out here, we share everything fairly. Tonight, 4 alien friends share 1 space pizza. We cut it into 4 equal slices. Each slice is 1 out of 4 equal parts. We call that piece one fourth. A fraction is a number that names part of a whole.",
        },
        {
          id: "s2",
          title: "One Part of the Whole",
          html: `
            <p>Here's the big rule: to make a fraction, the parts must be <b>EQUAL</b> — all the same size!</p>
            <p>This fuel bar is cut into <b>4 equal parts</b>. One part is filled:</p>
            <div class="big-visual">🟦⬜⬜⬜ = 1/4</div>
            <p>Cut a whole into <b>2</b> equal parts, and each part is <b>1/2</b>. Cut it into <b>8</b> equal parts, and each part is <b>1/8</b>.</p>
            <div class="callout"><b>Remember:</b> More parts means each part gets <u>smaller</u>. 1/8 is smaller than 1/2!</div>`,
          narration: "Here's the big rule: to make a fraction, the parts must be equal. All the same size! This fuel bar is cut into 4 equal parts. One part is filled. That's one fourth. Cut a whole into 2 equal parts, and each part is one half. Cut it into 8 equal parts, and each part is one eighth. More parts means each part gets smaller. One eighth is smaller than one half!",
        },
        {
          id: "s3",
          title: "Top Number, Bottom Number",
          html: `
            <p>Every fraction has two numbers with jobs:</p>
            <div class="big-visual">🟩🟩🟩⬜ = 3/4</div>
            <table>
              <tr><th>Number</th><th>Job</th></tr>
              <tr><td><b>3</b> (top)</td><td>how many parts we're counting</td></tr>
              <tr><td><b>4</b> (bottom)</td><td>how many equal parts in the whole</td></tr>
            </table>
            <div class="vocab"><b>numerator</b> — the top number: parts we count.</div>
            <div class="vocab"><b>denominator</b> — the bottom number: equal parts in the whole.</div>
            <p>So 3/4 means <b>3 parts</b>, and each part is <b>1/4</b> of the whole.</p>`,
          narration: "Every fraction has two numbers with jobs. In three fourths, the top number 3 tells how many parts we're counting. The bottom number 4 tells how many equal parts are in the whole. The top number is called the numerator. The bottom number is called the denominator. So three fourths means 3 parts, and each part is one fourth of the whole.",
        },
        {
          id: "s4",
          title: "Equal Parts, Different Shapes",
          html: `
            <p>Here's a frontier secret: equal parts don't have to <u>look</u> the same — they just have to be the same <b>size</b>!</p>
            <p>Fold a square sandwich two ways:</p>
            <table>
              <tr><th>Two rectangles</th><th>Two triangles</th></tr>
              <tr><td>🟨🟨<br>🟧🟧</td><td>🟨🟧<br>🟨🟧</td></tr>
              <tr><td>each part = 1/2</td><td>each part = 1/2</td></tr>
            </table>
            <p>Both ways make <b>2 equal parts</b>, so each part is <b>1/2</b> of the sandwich.</p>
            <div class="callout"><b>Remember:</b> If a shape is cut into equal-size parts, each part is one unit fraction of the whole — 1/2, 1/3, 1/4, 1/6, or 1/8.</div>`,
          narration: "Here's a frontier secret: equal parts don't have to look the same. They just have to be the same size! Fold a square sandwich into two rectangles, or into two triangles. Both ways make 2 equal parts, so each part is one half of the sandwich. If a shape is cut into equal-size parts, each part is one unit fraction of the whole.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>The chocolate bar problem! A space chocolate bar breaks into <b>6 equal pieces</b>, and <b>4 alien children</b> each take one piece.</p>
            <div class="big-visual">
              <div class="vis-row">🟫🟫🟫🟫🟫🟫</div>
            </div>
            <p>Step 1: Count the equal parts: <b>6</b>. That's the denominator.</p>
            <p>Step 2: Each child takes <b>1</b> piece. That's the numerator.</p>
            <p>Step 3: So each child gets <b>1/6</b> of the bar!</p>
            <div class="big-visual">🟫⬜⬜⬜⬜⬜ = 1/6</div>`,
          narration: "The chocolate bar problem! A space chocolate bar breaks into 6 equal pieces, and 4 alien children each take one piece. Step 1: count the equal parts. 6. That's the denominator. Step 2: each child takes 1 piece. That's the numerator. Step 3: so each child gets one sixth of the bar!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Fractions unlocked, Cadet! Here's what you can do now:</p>
            <div class="callout">
              <p>✔️ I can name one equal part of a whole as a unit fraction like 1/4.</p>
              <p>✔️ I know the numerator counts parts and the denominator counts equal parts in the whole.</p>
              <p>✔️ I know equal parts must be equal in size — but not the same shape.</p>
            </div>
            <p>Get 7 out of 8 right to earn your star! 🚀</p>`,
          narration: "Fractions unlocked, Cadet! Here's what you can do now. I can name one equal part of a whole as a unit fraction. I know the numerator counts parts and the denominator counts equal parts in the whole. I know equal parts must be equal in size, but not the same shape. Get 7 out of 8 right to earn your star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What fraction of the fuel bar is filled?",
            visual: "🟦⬜⬜⬜",
            options: ["1/4", "1/3", "3/4", "4/1"],
            answer: 0,
            hints: {
              verbal: "Count ALL the equal parts first — that's the bottom number. Then count the filled parts.",
              example: "For 🟩⬜ there are 2 equal parts and 1 is filled, so it shows 1/2.",
              narrow: [2],
            },
            explain: "There are 4 equal parts and 1 is filled, so the bar shows 1/4.",
          },
          {
            id: "q2", type: "mc",
            prompt: "In the fraction 3/4, what does the <b>4</b> tell you?",
            options: [
              "The whole is cut into 4 equal parts",
              "We are counting 4 parts",
              "There are 4 wholes",
              "Add 3 and 4",
            ],
            answer: 0,
            hints: {
              verbal: "The bottom number is the denominator. Does it count the parts you take, or the equal parts in the whole?",
              example: "In 1/8, the 8 means the whole is cut into 8 equal parts.",
              narrow: [1],
            },
            explain: "The denominator 4 tells how many equal parts the whole is cut into.",
          },
          {
            id: "q3", type: "mc",
            prompt: "A chocolate bar breaks into 6 equal pieces. Four children each take one piece. What portion does each child get?",
            passage: "One chocolate bar is broken into 6 pieces that are all the same size. Each of the 4 children takes exactly one piece.",
            options: ["1/6", "1/4", "4/6", "6/1"],
            answer: 0,
            hints: {
              verbal: "How many equal pieces is the WHOLE bar cut into? Each child takes just 1 of them.",
              example: "A pizza cut into 8 equal slices: one slice is 1/8, no matter who takes it.",
              narrow: [1],
            },
            explain: "The bar has 6 equal pieces, and each child takes 1 piece — that's 1/6 of the bar.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: To name a piece with a fraction, all the parts must be <b>equal</b> in size.",
            answer: true,
            hints: {
              verbal: "Think about sharing a pizza fairly. Would it be fair if one slice was giant and one was tiny?",
              example: "🟦⬜⬜⬜ shows 1/4 only because all 4 parts are the same size.",
            },
            explain: "True! Fractions only work with equal parts — that's the big rule.",
          },
          {
            id: "q5", type: "mc",
            prompt: "What does the fraction <b>3/4</b> mean?",
            options: [
              "3 parts, each of size 1/4",
              "3 wholes and 4 parts",
              "4 parts, each of size 1/3",
              "3 plus 4",
            ],
            answer: 0,
            hints: {
              verbal: "The numerator counts the parts. The denominator tells the size of each part.",
              example: "2/6 means 2 parts, and each part is 1/6 of the whole.",
              narrow: [2],
            },
            explain: "3/4 means you count 3 parts, and each part is 1/4 of the whole.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "In the fraction 5/8, what is the <b>denominator</b>?",
            answer: 8,
            hints: {
              verbal: "The denominator is the BOTTOM number — the number of equal parts in the whole.",
              example: "In 1/6, the denominator is 6.",
            },
            explain: "The denominator is the bottom number: 8. It means the whole has 8 equal parts.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which shape shows <b>1/3</b> shaded?",
            options: [
              "A circle cut into 3 equal parts with 1 part shaded",
              "A circle cut into 3 different-size parts with 1 part shaded",
              "A circle cut into 4 equal parts with 1 part shaded",
              "A circle cut into 3 equal parts with 2 parts shaded",
            ],
            answer: 0,
            hints: {
              verbal: "1/3 needs 3 EQUAL parts, with exactly 1 of them shaded.",
              example: "🟩⬜⬜ shows 1/3 — three equal parts, one filled.",
              narrow: [1],
            },
            explain: "1/3 means 1 shaded part out of 3 equal parts. Unequal parts don't make fractions!",
          },
          {
            id: "q8", type: "tf",
            prompt: "True or false: Two halves of the same square must look exactly the same shape.",
            answer: false,
            hints: {
              verbal: "Think about folding a square two ways — into rectangles or into triangles. Are both halves fair?",
              example: "A square cut into 2 rectangles and a square cut into 2 triangles both make halves — same size, different shape.",
            },
            explain: "False! Equal parts must be equal in SIZE, but they can be different shapes.",
          },
        ],
      },
    },

    /* ============ M2 — Fractions on the Number Line (3.NF.2) ============ */
    {
      id: "math-u5-m2",
      title: "Fractions on the Number Line",
      icon: "📏",
      standard: "3.NF.2",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Space Runway",
          html: `
            <p>Cadet, fractions aren't just pizza pieces — they're <b>places on a number line</b>!</p>
            <p>Here's our runway from <b>0</b> to <b>1</b>:</p>
            <div class="big-visual">0 ————————— 1</div>
            <p>Whole numbers live on the number line, and fractions live there too — right <u>between</u> 0 and 1!</p>
            <div class="callout"><b>Remember:</b> A fraction is a number. It has its very own spot on the number line.</div>`,
          narration: "Cadet, fractions aren't just pizza pieces. They're places on a number line! Here's our runway from 0 to 1. Whole numbers live on the number line, and fractions live there too. Right between 0 and 1! A fraction is a number. It has its very own spot on the number line.",
        },
        {
          id: "s2",
          title: "Cutting the Runway",
          html: `
            <p>To find fourths, cut the space from 0 to 1 into <b>4 equal lengths</b>:</p>
            <div class="big-visual">0 —|—|—|— 1</div>
            <p>Each little length is <b>1/4</b> of the whole trip.</p>
            <p>The <u>first mark</u> after 0 is the number <b>1/4</b> — because it's 1 hop of size 1/4 from 0.</p>
            <div class="big-visual">0 —1/4—2/4—3/4— 1</div>
            <div class="callout"><b>Remember:</b> The denominator tells how many equal lengths to cut between 0 and 1.</div>`,
          narration: "To find fourths, cut the space from 0 to 1 into 4 equal lengths. Each little length is one fourth of the whole trip. The first mark after 0 is the number one fourth, because it's 1 hop of size one fourth from 0. Then comes two fourths, then three fourths, then 1. The denominator tells how many equal lengths to cut between 0 and 1.",
        },
        {
          id: "s3",
          title: "Hop, Hop, Land!",
          html: `
            <p>To find <b>2/4</b>, start at 0 and take <b>2 hops</b>, each hop <b>1/4</b> long:</p>
            <div class="big-visual">0 →hop→hop🚀—|— 1</div>
            <div class="big-visual">2 hops of 1/4 = 2/4</div>
            <p>The rocket lands on the number <b>2/4</b> — two segments from 0!</p>
            <div class="callout"><b>Remember:</b> To find a/b, take <b>a</b> hops of size <b>1/b</b> from 0. The numerator counts the hops!</div>`,
          narration: "To find two fourths, start at 0 and take 2 hops, each hop one fourth long. The rocket lands on the number two fourths. Two segments from 0! To find any fraction, take numerator-many hops of the unit fraction size, starting from 0. The numerator counts the hops!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Let's place <b>5/6</b> on the number line together!</p>
            <p>Step 1: The denominator is 6, so cut 0 to 1 into <b>6 equal lengths</b>:</p>
            <div class="big-visual">0 —|—|—|—|—|— 1</div>
            <p>Step 2: Each length is <b>1/6</b>.</p>
            <p>Step 3: The numerator is 5, so hop <b>5 times</b> from 0:</p>
            <div class="big-visual">0 —1/6—2/6—3/6—4/6—🚀— 1</div>
            <p>Landed on <b>5/6</b> — one hop away from 1. Great flying, Cadet!</p>`,
          narration: "Let's place five sixths on the number line together! Step 1: the denominator is 6, so cut 0 to 1 into 6 equal lengths. Step 2: each length is one sixth. Step 3: the numerator is 5, so hop 5 times from 0. One sixth, two sixths, three sixths, four sixths, five sixths. Landed on five sixths. One hop away from 1. Great flying, Cadet!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Number line navigator — that's you! You can now say:</p>
            <div class="callout">
              <p>✔️ I can cut the line from 0 to 1 into b equal lengths, and each length is 1/b.</p>
              <p>✔️ I can find a/b by taking a hops of 1/b from 0.</p>
              <p>✔️ I know every fraction has its own point on the number line.</p>
            </div>
            <p>Quiz time — fly straight to those stars! ⭐</p>`,
          narration: "Number line navigator. That's you! You can now say: I can cut the line from 0 to 1 into equal lengths, and each length is a unit fraction. I can find a fraction by hopping from 0. I know every fraction has its own point on the number line. Quiz time. Fly straight to those stars!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "The line from 0 to 1 is cut into 4 equal lengths. What number is at the <b>first mark</b> after 0?",
            visual: "0 —|—|—|— 1",
            options: ["1/4", "1/2", "4/1", "1/3"],
            answer: 0,
            hints: {
              verbal: "Count the equal lengths between 0 and 1. The first mark is ONE of those lengths from 0.",
              example: "If 0 to 1 is cut into 2 equal lengths, the middle mark is 1/2.",
              narrow: [3],
            },
            explain: "The line is cut into 4 equal lengths, so the first mark is 1 length of 1/4 from 0 — the number 1/4.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Where is <b>2/4</b> on the number line?",
            options: [
              "2 hops of 1/4 from 0",
              "4 hops of 1/2 from 0",
              "2 hops of 1/4 from 1",
              "At the same spot as 0",
            ],
            answer: 0,
            hints: {
              verbal: "The numerator counts the hops. The denominator tells the size of each hop. Always start at 0!",
              example: "3/8 is 3 hops of 1/8, starting at 0.",
              narrow: [2],
            },
            explain: "2/4 means 2 hops, each 1/4 long, starting from 0 — two segments from 0.",
          },
          {
            id: "q3", type: "mc",
            prompt: "The runway from 0 to 1 is cut into 6 equal lengths. Cosmo lands on the 5th mark after 0. What number is he on?",
            visual: "0 —|—|—|—|—🚀— 1",
            options: ["5/6", "6/5", "5/8", "1/6"],
            answer: 0,
            hints: {
              verbal: "The bottom number is how many equal lengths. The top number is how many marks from 0.",
              example: "On a line cut into 4 lengths, the 3rd mark after 0 is 3/4.",
              narrow: [1],
            },
            explain: "6 equal lengths make sixths, and 5 hops from 0 lands on 5/6.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: To show eighths, you cut the line from 0 to 1 into 8 <b>equal</b> lengths.",
            answer: true,
            hints: {
              verbal: "The denominator 8 tells how many pieces to cut — and fraction pieces are always equal.",
              example: "For fourths, you cut 0 to 1 into 4 equal lengths.",
            },
            explain: "True! Eighths means 8 equal lengths between 0 and 1, and each length is 1/8.",
          },
          {
            id: "q5", type: "numeric",
            prompt: "The line from 0 to 1 is cut into thirds. How many hops of 1/3 does it take to land on 2/3?",
            visual: "0 —|—|— 1",
            answer: 2,
            hints: {
              verbal: "The numerator of a fraction counts the hops from 0.",
              example: "To land on 3/4, you take 3 hops of 1/4.",
            },
            explain: "The numerator is 2, so it takes 2 hops of 1/3 to reach 2/3.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Cosmo hops 3 times from 0. Each hop is 1/8 long. Where does he land?",
            options: ["3/8", "1/8", "8/3", "1/3"],
            answer: 0,
            hints: {
              verbal: "Hop size is the denominator. Number of hops is the numerator.",
              example: "2 hops of 1/6 lands on 2/6.",
              narrow: [3],
            },
            explain: "3 hops of size 1/8 lands on 3/8.",
          },
          {
            id: "q7", type: "tf",
            prompt: "True or false: The hops on a fraction number line can be different sizes.",
            answer: false,
            hints: {
              verbal: "Remember the big fraction rule — parts must be EQUAL. Lengths on a number line are parts too!",
              example: "For fourths, all 4 lengths between 0 and 1 must be exactly the same.",
            },
            explain: "False! Every hop must be the same length, just like fraction parts must be equal.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Each hop on the runway is 1/6 long. How many hops from 0 does it take to land on 4/6?",
            answer: 4,
            hints: {
              verbal: "Look at the top number of the fraction — it counts the hops.",
              example: "To land on 5/6, it takes 5 hops of 1/6.",
            },
            explain: "4/6 means 4 hops of 1/6 from 0 — so it takes 4 hops.",
          },
        ],
      },
    },

    /* ============ M3 — Twin Fractions (3.NF.3a, 3.NF.3b) ============ */
    {
      id: "math-u5-m3",
      title: "Twin Fractions",
      icon: "👯",
      standard: "3.NF.3a, 3.NF.3b",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Fraction Twins",
          html: `
            <p>Cadet, meet the twin aliens Zip and Zap. Zip ate <b>1/2</b> of a fuel bar. Zap ate <b>2/4</b> of the <u>same size</u> fuel bar.</p>
            <table>
              <tr><th>Zip: 1/2</th><th>Zap: 2/4</th></tr>
              <tr><td>🟦🟦⬜⬜<br>(1 big half)</td><td>🟩🟩⬜⬜<br>(2 small fourths)</td></tr>
            </table>
            <p>Look — they ate the <b>same amount</b>! Different names, same size.</p>
            <div class="vocab"><b>equivalent fractions</b> — fractions that name the same amount. 1/2 = 2/4.</div>`,
          narration: "Cadet, meet the twin aliens Zip and Zap. Zip ate one half of a fuel bar. Zap ate two fourths of the same size fuel bar. Look! They ate the same amount! Different names, same size. Equivalent fractions are fractions that name the same amount. One half equals two fourths.",
        },
        {
          id: "s2",
          title: "Same Point, Same Number",
          html: `
            <p>Twin fractions land on the <b>same point</b> of the number line, too!</p>
            <div class="big-visual">0 —|—🚀—|— 1<br>2/4</div>
            <div class="big-visual">0 ——🚀—— 1<br>1/2</div>
            <p>Cut the line into fourths and hop to 2/4 — or cut it into halves and hop to 1/2. You land on the <u>exact same spot</u>!</p>
            <div class="callout"><b>Remember:</b> If two fractions sit at the same point on the number line, they are equivalent — they're equal.</div>`,
          narration: "Twin fractions land on the same point of the number line, too! Cut the line into fourths and hop to two fourths. Or cut it into halves and hop to one half. You land on the exact same spot! If two fractions sit at the same point on the number line, they are equivalent. They're equal.",
        },
        {
          id: "s3",
          title: "Spotting Twins with Bars",
          html: `
            <p>Let's check: is <b>4/6</b> a twin of <b>2/3</b>? Line up two same-size bars:</p>
            <div class="big-visual">🟪🟪🟪🟪⬜⬜ = 4/6</div>
            <div class="big-visual">🟧🟧⬜ = 2/3</div>
            <p>4 out of 6 small parts covers the same amount as 2 out of 3 big parts.</p>
            <div class="big-visual">4/6 = 2/3 ✔️</div>
            <p>Twins found! The shaded parts are the <b>same size</b>, so the fractions are equal.</p>`,
          narration: "Let's check: is four sixths a twin of two thirds? Line up two same-size bars. 4 out of 6 small parts covers the same amount as 2 out of 3 big parts. Four sixths equals two thirds. Twins found! The shaded parts are the same size, so the fractions are equal.",
        },
        {
          id: "s4",
          title: "The Same-Whole Rule",
          html: `
            <p>⚠️ Warning, Cadet! Twin-checking only works when both fractions come from the <b>same size whole</b>.</p>
            <p>Is 1/2 of a tiny moon cookie the same as 1/2 of a giant planet cookie?</p>
            <div class="big-visual">
              <div class="vis-row">🍪 vs 🌕</div>
            </div>
            <p><b>No way!</b> Half of a giant cookie is way more cookie.</p>
            <div class="callout"><b>The Same-Whole Rule:</b> Only compare fractions when the wholes are the same size.</div>`,
          narration: "Warning, Cadet! Twin-checking only works when both fractions come from the same size whole. Is one half of a tiny moon cookie the same as one half of a giant planet cookie? No way! Half of a giant cookie is way more cookie. The same-whole rule: only compare fractions when the wholes are the same size.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Is <b>3/6</b> a twin of <b>1/2</b>? Let's check together!</p>
            <p>Step 1: Draw both on same-size bars.</p>
            <div class="big-visual">🟦🟦🟦⬜⬜⬜ = 3/6</div>
            <div class="big-visual">🟩🟩🟩⬜⬜⬜ = 1/2</div>
            <p>Step 2: Compare the shaded amounts — <b>exactly the same</b>!</p>
            <p>Step 3: Write it with an equals sign:</p>
            <div class="big-visual">3/6 = 1/2</div>
            <p>Twins confirmed! You're a fraction detective, Cadet! 🕵️</p>`,
          narration: "Is three sixths a twin of one half? Let's check together! Step 1: draw both on same-size bars. Step 2: compare the shaded amounts. Exactly the same! Step 3: write it with an equals sign. Three sixths equals one half. Twins confirmed! You're a fraction detective, Cadet!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Twin power activated! You can now say:</p>
            <div class="callout">
              <p>✔️ I can tell fractions are equivalent when they are the same size or the same point on a number line.</p>
              <p>✔️ I can find simple twins like 1/2 = 2/4 and 4/6 = 2/3.</p>
              <p>✔️ I only compare fractions when the wholes are the same size.</p>
            </div>
            <p>Go show those quiz questions who's boss! 🚀</p>`,
          narration: "Twin power activated! You can now say: I can tell fractions are equivalent when they are the same size or the same point on a number line. I can find simple twins like one half equals two fourths. I only compare fractions when the wholes are the same size. Go show those quiz questions who's boss!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which symbol makes this true? &nbsp; 3/6 __ 1/2",
            visual: "🟦🟦🟦⬜⬜⬜ &nbsp; vs &nbsp; 🟩🟩🟩⬜⬜⬜",
            options: [">", "<", "="],
            answer: 2,
            hints: {
              verbal: "Look at the bars. Is one shaded amount bigger, or are they exactly the same size?",
              example: "2/4 and 1/2 cover the same amount, so 2/4 = 1/2.",
              narrow: [1],
            },
            explain: "3 out of 6 covers exactly half the bar, so 3/6 = 1/2. They're twins!",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which fraction is equivalent to <b>1/2</b>?",
            options: ["2/4", "1/4", "2/3", "1/3"],
            answer: 0,
            hints: {
              verbal: "Picture a bar cut into 4 parts. How many fourths cover the same amount as one half?",
              example: "🟦🟦⬜⬜ shows 2/4, and it covers half the bar.",
              narrow: [1],
            },
            explain: "2/4 covers the same amount as 1/2 — they land on the same point on the number line.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which fraction is a twin of <b>4/6</b>?",
            visual: "🟪🟪🟪🟪⬜⬜",
            options: ["2/3", "1/3", "3/4", "6/4"],
            answer: 0,
            hints: {
              verbal: "4 out of 6 small parts covers the same amount as how many out of 3 big parts?",
              example: "2/6 covers the same amount as 1/3 — check with same-size bars.",
              narrow: [3],
            },
            explain: "4/6 and 2/3 cover the same amount of the whole, so 4/6 = 2/3.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: Equivalent fractions land on the <b>same point</b> of the number line.",
            answer: true,
            hints: {
              verbal: "Think of 1/2 and 2/4. When you hop to each one, do you land in the same spot?",
              example: "2/4 and 1/2 both land exactly halfway between 0 and 1.",
            },
            explain: "True! Same point means same number — that's exactly what equivalent means.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which fraction is a twin of <b>2/6</b>?",
            options: ["1/3", "1/2", "2/3", "6/2"],
            answer: 0,
            hints: {
              verbal: "Draw a bar in sixths and shade 2. Then draw a same-size bar in thirds. How many thirds match?",
              example: "4/6 matches 2/3 the same way — two small parts fit inside one big part.",
              narrow: [2],
            },
            explain: "2 sixths cover the same amount as 1 third, so 2/6 = 1/3.",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: 1/2 of a small cookie equals 1/2 of a giant cookie.",
            answer: false,
            hints: {
              verbal: "Remember the Same-Whole Rule. Are these two wholes the same size?",
              example: "Half of a big pizza is more food than half of a tiny pizza.",
            },
            explain: "False! You can only compare fractions when the wholes are the same size.",
          },
          {
            id: "q7", type: "mc",
            prompt: "On a number line from 0 to 1, where do 1/2 and 2/4 land?",
            options: [
              "On the same point",
              "On different points",
              "Both on 0",
              "Both on 1",
            ],
            answer: 0,
            hints: {
              verbal: "1/2 and 2/4 are twins. What do twin fractions do on a number line?",
              example: "3/6 and 1/2 both land exactly halfway between 0 and 1.",
              narrow: [1],
            },
            explain: "1/2 and 2/4 are equivalent, so they land on the exact same point — halfway to 1.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Finish the twins: 1/3 = ?/6. What number goes in the blank?",
            visual: "🟧⬜⬜ &nbsp; = &nbsp; 🟦🟦⬜⬜⬜⬜",
            answer: 2,
            hints: {
              verbal: "Look at the bars: 1 big third covers the same amount as how many little sixths?",
              example: "1/2 = 3/6 because 3 sixths cover the same amount as 1 half.",
            },
            explain: "Two sixths cover the same amount as one third, so 1/3 = 2/6. The blank is 2.",
          },
        ],
      },
    },

    /* ============ M4 — Whole Numbers in Disguise (3.NF.3c) ============ */
    {
      id: "math-u5-m4",
      title: "Whole Numbers in Disguise",
      icon: "🥸",
      standard: "3.NF.3c",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Great Disguise",
          html: `
            <p>Psst, Cadet... some fractions are <b>whole numbers wearing a disguise</b>! 🥸</p>
            <p>Zork ate a pizza cut into 4 slices — and he ate <b>all 4 slices</b>:</p>
            <div class="big-visual">🍕🍕🍕🍕 = 4/4</div>
            <p>4 out of 4 equal parts is... the <b>whole pizza</b>!</p>
            <div class="big-visual">4/4 = 1</div>
            <div class="callout"><b>Remember:</b> When the numerator and denominator match, the fraction equals 1 whole. 2/2 = 1, 3/3 = 1, 4/4 = 1, 6/6 = 1, 8/8 = 1.</div>`,
          narration: "Psst, Cadet. Some fractions are whole numbers wearing a disguise! Zork ate a pizza cut into 4 slices. And he ate all 4 slices. 4 out of 4 equal parts is the whole pizza! Four fourths equals 1. When the numerator and denominator match, the fraction equals 1 whole. Two halves, three thirds, four fourths, six sixths, and eight eighths all equal 1.",
        },
        {
          id: "s2",
          title: "Fractions with a 1 on the Bottom",
          html: `
            <p>Here's another disguise. What if each "part" is a <b>whole thing</b>?</p>
            <p>A denominator of <b>1</b> means the whole isn't cut at all — each part is 1 whole!</p>
            <div class="big-visual">🌕 🌕 🌕 = 3/1</div>
            <p>3/1 means <b>3 parts, each one whole</b>. That's just... <b>3</b>!</p>
            <div class="big-visual">3 = 3/1</div>
            <div class="callout"><b>Remember:</b> Any whole number can dress up as a fraction: put it over 1. 6/1 = 6.</div>`,
          narration: "Here's another disguise. What if each part is a whole thing? A denominator of 1 means the whole isn't cut at all. Each part is 1 whole! Three over 1 means 3 parts, each one whole. That's just 3! Any whole number can dress up as a fraction. Put it over 1. Six over 1 equals 6.",
        },
        {
          id: "s3",
          title: "Same Spot on the Number Line",
          html: `
            <p>Let's prove it with the number line! Cut 0 to 1 into fourths and hop <b>4 times</b>:</p>
            <div class="big-visual">0 —1/4—2/4—3/4—🚀<br>4/4 lands right on 1!</div>
            <p><b>4/4</b> and <b>1</b> sit at the <u>exact same point</u> — so they're the same number.</p>
            <p>And <b>6/1</b>? That's 6 hops, each 1 whole long — landing right on <b>6</b>.</p>
            <div class="callout"><b>Remember:</b> A whole number and its fraction disguise share one point on the number line.</div>`,
          narration: "Let's prove it with the number line! Cut 0 to 1 into fourths and hop 4 times. Four fourths lands right on 1! Four fourths and 1 sit at the exact same point, so they're the same number. And six over 1? That's 6 hops, each 1 whole long. Landing right on 6. A whole number and its fraction disguise share one point on the number line.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Undercover mission! What whole number is hiding inside <b>6/6</b>?</p>
            <div class="big-visual">🟨🟨🟨🟨🟨🟨 = 6/6</div>
            <p>Step 1: The whole is cut into <b>6</b> equal parts.</p>
            <p>Step 2: We're counting <b>all 6</b> parts.</p>
            <p>Step 3: All the parts = the whole thing!</p>
            <div class="big-visual">6/6 = 1</div>
            <p>Disguise removed — it was <b>1</b> the whole time! Great detective work, Cadet! 🕵️</p>`,
          narration: "Undercover mission! What whole number is hiding inside six sixths? Step 1: the whole is cut into 6 equal parts. Step 2: we're counting all 6 parts. Step 3: all the parts equal the whole thing! Six sixths equals 1. Disguise removed. It was 1 the whole time! Great detective work, Cadet!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Disguises don't fool you anymore! You can now say:</p>
            <div class="callout">
              <p>✔️ I can write a whole number as a fraction, like 3 = 3/1.</p>
              <p>✔️ I know a fraction like 4/4 or 6/6 equals 1 whole.</p>
              <p>✔️ I can find whole numbers and their fraction disguises at the same point on the number line.</p>
            </div>
            <p>One quiz stands between you and your star! 🚀</p>`,
          narration: "Disguises don't fool you anymore! You can now say: I can write a whole number as a fraction, like 3 equals three over 1. I know a fraction like four fourths equals 1 whole. I can find whole numbers and their fraction disguises at the same point on the number line. One quiz stands between you and your star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which fraction is equivalent to the number <b>1</b>?",
            options: ["4/4", "1/4", "2/4", "3/4"],
            answer: 0,
            hints: {
              verbal: "1 whole means ALL the parts. Which fraction counts every single part?",
              example: "A pizza cut into 6 slices: eating all 6 is 6/6 — one whole pizza.",
              narrow: [3],
            },
            explain: "4/4 means all 4 of 4 equal parts — that's the whole thing, which is 1.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which fraction is the number <b>3</b> in disguise?",
            options: ["3/1", "1/3", "3/3", "3/4"],
            answer: 0,
            hints: {
              verbal: "To dress a whole number as a fraction, put it over 1.",
              example: "The number 6 in disguise is 6/1.",
              narrow: [2],
            },
            explain: "3/1 means 3 parts that are each 1 whole — that's 3. (Careful: 3/3 equals 1, not 3!)",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Remove the disguise! 6/1 = ?",
            answer: 6,
            hints: {
              verbal: "A denominator of 1 means each part is 1 whole. Count 6 wholes.",
              example: "4/1 is 4 wholes, so 4/1 = 4.",
            },
            explain: "6/1 means 6 parts, each 1 whole — that's the number 6.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: 8/8 = 1.",
            answer: true,
            hints: {
              verbal: "8 out of 8 equal parts — is anything missing, or is that the whole thing?",
              example: "A fuel bar in 8 parts with all 8 filled: 🟩🟩🟩🟩🟩🟩🟩🟩 — one full bar.",
            },
            explain: "True! All 8 of 8 equal parts make one whole, so 8/8 = 1.",
          },
          {
            id: "q5", type: "mc",
            prompt: "On the number line, <b>2/2</b> sits at the same point as which number?",
            visual: "0 —1/2—🚀",
            options: ["1", "2", "0", "1/2"],
            answer: 0,
            hints: {
              verbal: "Take 2 hops of 1/2 from 0. Two halves make how many wholes?",
              example: "4/4 lands exactly on 1 — four fourths make one whole.",
              narrow: [1],
            },
            explain: "Two hops of 1/2 land exactly on 1. So 2/2 = 1. (Not 2 — the 2s are a disguise!)",
          },
          {
            id: "q6", type: "numeric",
            prompt: "Zork ate 4/4 of his pizza. How many whole pizzas did he eat?",
            visual: "🍕🍕🍕🍕",
            answer: 1,
            hints: {
              verbal: "He ate all 4 of the 4 slices. How many whole pizzas is that?",
              example: "Eating 6/6 of a pizza means eating 1 whole pizza.",
            },
            explain: "4/4 is all the parts of one pizza — Zork ate 1 whole pizza.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which list shows fractions that ALL equal 1?",
            options: [
              "2/2, 3/3, 4/4",
              "1/2, 1/3, 1/4",
              "2/1, 3/1, 4/1",
              "1/2, 2/2, 3/3",
            ],
            answer: 0,
            hints: {
              verbal: "A fraction equals 1 when the top and bottom numbers MATCH.",
              example: "6/6 = 1 and 8/8 = 1 — matching top and bottom.",
              narrow: [2],
            },
            explain: "When numerator and denominator match — 2/2, 3/3, 4/4 — each fraction is 1 whole.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Cosmo says, \"4/1 and 4/4 are the same number.\" Is he right?",
            options: [
              "No — 4/1 = 4, but 4/4 = 1",
              "Yes — they both equal 4",
              "Yes — they both equal 1",
              "No — 4/1 = 1, but 4/4 = 4",
            ],
            answer: 0,
            hints: {
              verbal: "Check each one. 4/1 is 4 wholes. 4/4 is all 4 parts of ONE whole.",
              example: "6/1 = 6, but 6/6 = 1 — very different numbers!",
              narrow: [3],
            },
            explain: "4/1 means 4 wholes, so it equals 4. But 4/4 is all the parts of one whole, so it equals 1.",
          },
        ],
      },
    },

    /* ============ M5 — Fraction Face-Off (3.NF.3d) ============ */
    {
      id: "math-u5-m5",
      title: "Fraction Face-Off",
      icon: "⚔️",
      standard: "3.NF.3d",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to the Face-Off Arena!",
          html: `
            <p>Cadet, it's time for the <b>Fraction Face-Off</b> — where two fractions battle to see which is bigger!</p>
            <div class="big-visual">2/6 ⚔️ 5/6</div>
            <p>We'll use three battle symbols:</p>
            <table>
              <tr><th>&gt;</th><th>&lt;</th><th>=</th></tr>
              <tr><td>greater than</td><td>less than</td><td>equal</td></tr>
            </table>
            <div class="callout"><b>Arena rule:</b> Fractions can only face off when they come from the <u>same size whole</u>!</div>`,
          narration: "Cadet, it's time for the Fraction Face-Off, where two fractions battle to see which is bigger! We'll use three battle symbols: greater than, less than, and equal. Arena rule: fractions can only face off when they come from the same size whole!",
        },
        {
          id: "s2",
          title: "Same Denominator: More Parts Wins",
          html: `
            <p>Round 1: <b>2/6</b> vs <b>5/6</b>. The pieces are the <u>same size</u> — both are sixths!</p>
            <div class="big-visual">🟦🟦⬜⬜⬜⬜ = 2/6</div>
            <div class="big-visual">🟩🟩🟩🟩🟩⬜ = 5/6</div>
            <p>Same size pieces, so just count: 5 pieces beats 2 pieces!</p>
            <div class="big-visual">2/6 &lt; 5/6</div>
            <div class="callout"><b>Remember:</b> Same denominator → same size pieces → <u>more parts wins</u>.</div>`,
          narration: "Round 1: two sixths versus five sixths. The pieces are the same size. Both are sixths! Same size pieces, so just count: 5 pieces beats 2 pieces! Two sixths is less than five sixths. Same denominator means same size pieces, so more parts wins.",
        },
        {
          id: "s3",
          title: "Same Numerator: Bigger Pieces Win",
          html: `
            <p>Round 2: <b>3/8</b> vs <b>3/4</b>. Both have <b>3 pieces</b> — but are the pieces the same size?</p>
            <div class="big-visual">🟦🟦🟦⬜⬜⬜⬜⬜ = 3/8</div>
            <div class="big-visual">🟩🟩🟩⬜ = 3/4</div>
            <p><b>No!</b> Fourths are big pieces; eighths are little pieces. 3 big pieces beat 3 little pieces!</p>
            <div class="big-visual">3/8 &lt; 3/4</div>
            <div class="callout"><b>Remember:</b> Same numerator → same number of pieces → <u>bigger pieces win</u>. A smaller denominator means bigger pieces!</div>`,
          narration: "Round 2: three eighths versus three fourths. Both have 3 pieces. But are the pieces the same size? No! Fourths are big pieces. Eighths are little pieces. 3 big pieces beat 3 little pieces! Three eighths is less than three fourths. Same numerator means same number of pieces, so bigger pieces win. A smaller denominator means bigger pieces!",
        },
        {
          id: "s4",
          title: "The Library Face-Off",
          html: `
            <p>Real mission! Mary checked out 6 books. <b>2/3</b> were fiction and <b>2/6</b> were nonfiction. Which did she have more of?</p>
            <p>Both fractions count <b>2 pieces</b> — same numerator! So compare the piece sizes:</p>
            <div class="big-visual">🟪🟪⬜ = 2/3</div>
            <div class="big-visual">🟨🟨⬜⬜⬜⬜ = 2/6</div>
            <p>Thirds are bigger than sixths, so:</p>
            <div class="big-visual">2/3 &gt; 2/6</div>
            <p>Mary had more <b>fiction</b> books — and the bars prove it!</p>`,
          narration: "Real mission! Mary checked out 6 books. Two thirds were fiction and two sixths were nonfiction. Which did she have more of? Both fractions count 2 pieces. Same numerator! So compare the piece sizes. Thirds are bigger than sixths, so two thirds is greater than two sixths. Mary had more fiction books. And the bars prove it!",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Your turn in the arena: <b>5/8</b> vs <b>3/8</b>!</p>
            <p>Step 1: Check the denominators — both are 8. <b>Same size pieces!</b></p>
            <p>Step 2: Same size pieces means <b>more parts wins</b>.</p>
            <p>Step 3: 5 parts beats 3 parts:</p>
            <div class="big-visual">🟩🟩🟩🟩🟩⬜⬜⬜ = 5/8</div>
            <div class="big-visual">🟦🟦🟦⬜⬜⬜⬜⬜ = 3/8</div>
            <div class="big-visual">5/8 &gt; 3/8</div>
            <p>Champion move, Cadet! ⚔️</p>`,
          narration: "Your turn in the arena: five eighths versus three eighths! Step 1: check the denominators. Both are 8. Same size pieces! Step 2: same size pieces means more parts wins. Step 3: 5 parts beats 3 parts. Five eighths is greater than three eighths. Champion move, Cadet!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Face-Off champion! You can now say:</p>
            <div class="callout">
              <p>✔️ I can compare fractions with the same denominator: more parts wins.</p>
              <p>✔️ I can compare fractions with the same numerator: bigger pieces win.</p>
              <p>✔️ I can prove my answer with a picture and use &gt;, &lt;, or =.</p>
            </div>
            <p>Win this quiz and the Fraction Frontier Star is yours! 🌗</p>`,
          narration: "Face-Off champion! You can now say: I can compare fractions with the same denominator. More parts wins. I can compare fractions with the same numerator. Bigger pieces win. I can prove my answer with a picture and use greater than, less than, or equals. Win this quiz and the Fraction Frontier Star is yours!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which symbol makes this true? &nbsp; 2/6 __ 5/6",
            visual: "🟦🟦⬜⬜⬜⬜ &nbsp; vs &nbsp; 🟩🟩🟩🟩🟩⬜",
            options: ["<", ">", "="],
            answer: 0,
            hints: {
              verbal: "The denominators match, so the pieces are the same size. Just count the pieces!",
              example: "1/4 < 3/4 because 3 same-size pieces beat 1.",
              narrow: [1],
            },
            explain: "Same size pieces (sixths), and 2 pieces is less than 5 pieces — so 2/6 < 5/6.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which symbol makes this true? &nbsp; 3/8 __ 3/4",
            visual: "🟦🟦🟦⬜⬜⬜⬜⬜ &nbsp; vs &nbsp; 🟩🟩🟩⬜",
            options: ["<", ">", "="],
            answer: 0,
            hints: {
              verbal: "Both count 3 pieces — but which pieces are bigger, eighths or fourths?",
              example: "2/8 < 2/4 because fourths are bigger pieces than eighths.",
              narrow: [2],
            },
            explain: "Same number of pieces, but fourths are bigger than eighths — so 3/8 < 3/4.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Mary checked out six books. 2/3 were fiction and 2/6 were nonfiction. Mary had more of which type?",
            passage: "Mary checked out six library books. 2/3 of them were fiction. 2/6 of them were nonfiction.",
            options: [
              "Fiction — thirds are bigger pieces than sixths",
              "Nonfiction — 6 is bigger than 3",
              "The same amount of each",
              "You can't tell",
            ],
            answer: 0,
            hints: {
              verbal: "Same numerator! Both count 2 pieces. Which pieces are bigger — thirds or sixths?",
              example: "2/4 > 2/8 because fourths are bigger pieces than eighths.",
              narrow: [1],
            },
            explain: "Both count 2 pieces, but thirds are bigger than sixths: 2/3 > 2/6. More fiction!",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: When two fractions have the same denominator, the one with the <b>bigger numerator</b> is greater.",
            answer: true,
            hints: {
              verbal: "Same denominator means same size pieces. Would you rather have 5 of them or 2 of them?",
              example: "5/6 > 2/6 — five sixths beat two sixths.",
            },
            explain: "True! Same size pieces means more parts wins — the bigger numerator is greater.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which is bigger: <b>1/2</b> or <b>1/8</b> of the same fuel bar?",
            visual: "🟩🟩🟩🟩⬜⬜⬜⬜ &nbsp; vs &nbsp; 🟦⬜⬜⬜⬜⬜⬜⬜",
            options: ["1/2", "1/8", "They are equal"],
            answer: 0,
            hints: {
              verbal: "Both are 1 piece. Which is bigger — one piece from a bar cut in 2, or one piece from a bar cut in 8?",
              example: "1/3 > 1/6 — cutting into fewer pieces makes each piece bigger.",
              narrow: [1],
            },
            explain: "Cutting into only 2 pieces makes big pieces — 1/2 > 1/8. More cuts, smaller pieces!",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: You can fairly compare 3/4 of a snack bar with 1/4 of a snack bar only if both bars are the <b>same size</b>.",
            answer: true,
            hints: {
              verbal: "Remember the arena rule — the Same-Whole Rule!",
              example: "1/2 of a giant cookie is more than 3/4 of a tiny cookie — different wholes aren't fair.",
            },
            explain: "True! Comparisons only make sense when both fractions come from the same size whole.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which symbol makes this true? &nbsp; 5/8 __ 3/8",
            options: [">", "<", "="],
            answer: 0,
            hints: {
              verbal: "Same denominator, so the pieces match. Count the pieces on each side.",
              example: "4/6 > 1/6 because 4 same-size pieces beat 1.",
              narrow: [1],
            },
            explain: "Eighths are the same size, and 5 beats 3 — so 5/8 > 3/8.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Zara ran 3/4 of the track. Jax ran 3/6 of the <b>same</b> track. Who ran farther?",
            passage: "Zara and Jax race on the same space track. Zara runs 3/4 of the track. Jax runs 3/6 of the track.",
            options: [
              "Zara — fourths are bigger pieces than sixths",
              "Jax — 6 is bigger than 4",
              "They ran the same distance",
              "You can't tell",
            ],
            answer: 0,
            hints: {
              verbal: "Same numerator — both ran 3 pieces of track. Whose pieces are longer?",
              example: "3/4 > 3/8 because fourths are bigger pieces than eighths.",
              narrow: [1],
            },
            explain: "Both ran 3 pieces, but fourths are longer than sixths: 3/4 > 3/6. Zara ran farther!",
          },
        ],
      },
    },
  ],
});
