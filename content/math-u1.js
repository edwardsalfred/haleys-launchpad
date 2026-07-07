/* Unit 1 — Multiplication Planet (3.OA.1, 3.OA.2, 3.OA.4, 3.OA.5, 3.OA.6)
   The foundation unit: what multiplication and division MEAN. */
window.COURSE_CONTENT.push({
  id: "math-u1",
  subject: "math",
  order: 1,
  title: "Multiplication Planet",
  subtitle: "Equal groups, arrays, and sharing",
  planet: { emoji: "🪐", color: "#FF8C42" },
  badgeName: "Multiplication Planet Star",
  modules: [

    /* ============ M1 — What Is Multiplication? (3.OA.1) ============ */
    {
      id: "math-u1-m1",
      title: "What Is Multiplication?",
      icon: "✖️",
      standard: "3.OA.1",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Multiplication Planet!",
          html: `
            <p>Hi Cadet! I'm Cosmo, and this planet runs on <b>multiplication</b> power!</p>
            <p>Look! The space chickens laid their eggs in <b>equal groups</b>:</p>
            <div class="big-visual">
              <div class="vis-row">🥚🥚🥚 &nbsp; 🥚🥚🥚 &nbsp; 🥚🥚🥚</div>
            </div>
            <p>That's <b>3 groups</b> with <b>3 eggs</b> in each group. Counting groups like this is what multiplication is all about!</p>`,
          narration: "Hi Cadet! I'm Cosmo, and this planet runs on multiplication power! Look! The space chickens laid their eggs in equal groups. That's 3 groups with 3 eggs in each group. Counting groups like this is what multiplication is all about!",
        },
        {
          id: "s2",
          title: "Groups Of",
          html: `
            <p>Multiplication means counting <b>equal groups</b> — groups that all have the <u>same</u> number of things.</p>
            <div class="big-visual">
              <div class="vis-row">🚀🚀🚀🚀 &nbsp; 🚀🚀🚀🚀</div>
            </div>
            <p>Here are <b>2 groups of 4</b> rockets. We write it like this:</p>
            <div class="big-visual">2 × 4 = 8</div>
            <div class="vocab"><b>×</b> — the multiplication sign. Read "2 × 4" as "2 groups of 4."</div>`,
          narration: "Multiplication means counting equal groups. Groups that all have the same number of things. Here are 2 groups of 4 rockets. We write it: 2 times 4 equals 8. The times sign means groups of. So 2 times 4 means 2 groups of 4.",
        },
        {
          id: "s3",
          title: "Multiplication Is Speedy Adding",
          html: `
            <p>You already know a slow way to count equal groups — adding the same number again and again!</p>
            <div class="big-visual">
              <div class="vis-row">🍪🍪🍪🍪🍪 &nbsp; 🍪🍪🍪🍪🍪 &nbsp; 🍪🍪🍪🍪🍪</div>
            </div>
            <table>
              <tr><th>Slow way</th><th>Speedy way</th></tr>
              <tr><td>5 + 5 + 5 = 15</td><td>3 × 5 = 15</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> 3 × 5 means the same as 5 + 5 + 5. Multiplication is repeated addition in a rocket booster!</div>`,
          narration: "You already know a slow way to count equal groups. Adding the same number again and again! The slow way: 5 plus 5 plus 5 equals 15. The speedy way: 3 times 5 equals 15. Remember: 3 times 5 means the same as 5 plus 5 plus 5. Multiplication is repeated addition in a rocket booster!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>The alien puppies lined up their bones. Let's read the picture together!</p>
            <div class="big-visual">
              <div class="vis-row">🦴🦴 &nbsp; 🦴🦴 &nbsp; 🦴🦴 &nbsp; 🦴🦴</div>
            </div>
            <p>Step 1: Count the <b>groups</b>. … There are <b>4 groups</b>.</p>
            <p>Step 2: Count how many in <b>each group</b>. … <b>2 bones</b> each.</p>
            <p>Step 3: Write it! <b>4 × 2 = 8</b>. Eight bones altogether!</p>
            <div class="vocab"><b>factor</b> — a number you multiply. <b>product</b> — the answer. In 4 × 2 = 8, the factors are 4 and 2, and the product is 8.</div>`,
          narration: "The alien puppies lined up their bones. Let's read the picture together! Step 1: count the groups. There are 4 groups. Step 2: count how many in each group. 2 bones each. Step 3: write it! 4 times 2 equals 8. Eight bones altogether! The numbers you multiply are called factors. The answer is called the product.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>You're ready for the quiz, Cadet! Here's what you can do now:</p>
            <div class="callout">
              <p>✔️ I can read a picture of equal groups.</p>
              <p>✔️ I can write a multiplication equation like 3 × 5 = 15.</p>
              <p>✔️ I can use "groups of" to explain what multiplying means.</p>
            </div>
            <p>Get 7 out of 8 right to earn your star and unlock the next mission! 🚀</p>`,
          narration: "You're ready for the quiz, Cadet! Here's what you can do now. I can read a picture of equal groups. I can write a multiplication equation. I can use groups-of to explain what multiplying means. Get 7 out of 8 right to earn your star and unlock the next mission!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation matches the picture?",
            visual: "🍎🍎🍎 &nbsp; 🍎🍎🍎",
            options: ["2 × 3 = 6", "2 + 3 = 5", "3 − 2 = 1", "6 × 2 = 12"],
            answer: 0,
            hints: {
              verbal: "First count the groups of apples. Then count how many apples are in each group.",
              example: "For 🌟🌟 🌟🌟 🌟🌟 there are 3 groups of 2 stars, so we write 3 × 2 = 6.",
              narrow: [1],
            },
            explain: "There are 2 groups with 3 apples in each group — that's 2 × 3 = 6.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What does 4 × 5 mean?",
            options: ["4 groups of 5", "4 more than 5", "5 take away 4", "4 groups of 4"],
            answer: 0,
            hints: {
              verbal: "The × sign is read as 'groups of.' Say the equation out loud with those words.",
              example: "2 × 6 means 2 groups of 6. The first number counts the groups.",
              narrow: [3],
            },
            explain: "The × sign means 'groups of,' so 4 × 5 means 4 groups of 5.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which is the <b>speedy way</b> to write 6 + 6 + 6?",
            options: ["3 × 6", "6 × 6", "3 + 6", "6 − 3"],
            answer: 0,
            hints: {
              verbal: "Count how many times 6 is being added. That count becomes the first factor.",
              example: "4 + 4 is 4 added 2 times, so the speedy way is 2 × 4.",
              narrow: [1],
            },
            explain: "6 is added 3 times, so it's 3 groups of 6 — that's 3 × 6.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "Count the space cookies. How many are there altogether?",
            visual: "🍪🍪🍪🍪 &nbsp; 🍪🍪🍪🍪 &nbsp; 🍪🍪🍪🍪",
            answer: 12,
            hints: {
              verbal: "There are 3 groups with 4 cookies in each. Skip count: 4, 8, ...",
              example: "For 2 groups of 5: skip count 5, 10 — the answer is 10.",
            },
            explain: "3 groups of 4 cookies: 4, 8, 12. So 3 × 4 = 12.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: 5 × 2 means the same as 2 + 2 + 2 + 2 + 2.",
            answer: true,
            hints: {
              verbal: "5 × 2 means 5 groups of 2. Count how many 2s are in the addition.",
              example: "3 × 4 means 4 + 4 + 4 — three 4s added together.",
            },
            explain: "True! 5 groups of 2 is 2 added five times: 2 + 2 + 2 + 2 + 2 = 10.",
          },
          {
            id: "q6", type: "mc",
            prompt: "In the equation 6 × 3 = 18, which number is the <b>product</b>?",
            options: ["18", "6", "3", "9"],
            answer: 0,
            hints: {
              verbal: "The product is the ANSWER to a multiplication problem — it comes after the equals sign.",
              example: "In 2 × 5 = 10, the factors are 2 and 5, and the product is 10.",
              narrow: [1],
            },
            explain: "The product is the answer: 18. The numbers 6 and 3 are the factors.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Zara the alien has 5 baskets. Each basket holds 3 moon rocks. Which equation shows how many moon rocks she has?",
            passage: "Zara collects moon rocks in baskets. Every basket has exactly the same number of rocks inside.",
            options: ["5 × 3 = 15", "5 + 3 = 8", "5 − 3 = 2", "3 × 3 = 9"],
            answer: 0,
            hints: {
              verbal: "How many baskets (groups)? How many rocks in each? Groups × each = total.",
              example: "4 bags with 2 marbles each: 4 × 2 = 8 marbles.",
              narrow: [1],
            },
            explain: "5 baskets with 3 rocks each is 5 groups of 3: 5 × 3 = 15 moon rocks.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Write the product: 7 × 2 = ?",
            answer: 14,
            hints: {
              verbal: "7 × 2 means 7 groups of 2. Skip count by 2 seven times: 2, 4, 6, ...",
              example: "5 × 2 is 2, 4, 6, 8, 10 — the product is 10.",
            },
            explain: "Skip count by 2: 2, 4, 6, 8, 10, 12, 14. So 7 × 2 = 14.",
          },
        ],
      },
    },

    /* ============ M2 — Arrays Everywhere! (3.OA.1, 3.OA.5) ============ */
    {
      id: "math-u1-m2",
      title: "Arrays Everywhere!",
      icon: "🔲",
      standard: "3.OA.1, 3.OA.5",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Rocket Parking Lot",
          html: `
            <p>Cadet, look at how the rockets park — in neat rows! When things line up in equal rows, we call it an <b>array</b>.</p>
            <div class="big-visual">
              <div class="vis-row">🚀🚀🚀🚀</div>
              <div class="vis-row">🚀🚀🚀🚀</div>
              <div class="vis-row">🚀🚀🚀🚀</div>
            </div>
            <p><b>3 rows</b> with <b>4 rockets</b> in each row.</p>
            <div class="vocab"><b>array</b> — things arranged in equal rows and columns, like eggs in a carton or a muffin tray.</div>`,
          narration: "Cadet, look at how the rockets park. In neat rows! When things line up in equal rows, we call it an array. 3 rows with 4 rockets in each row. An array is things arranged in equal rows and columns, like eggs in a carton or a muffin tray.",
        },
        {
          id: "s2",
          title: "Reading an Array",
          html: `
            <p>Arrays are multiplication pictures! Here's how to read one:</p>
            <div class="big-visual">
              <div class="vis-row">⭐⭐⭐⭐⭐</div>
              <div class="vis-row">⭐⭐⭐⭐⭐</div>
            </div>
            <p>Step 1: Count the <b>rows</b> (going across): <b>2 rows</b>.</p>
            <p>Step 2: Count how many in <b>each row</b>: <b>5 stars</b>.</p>
            <p>Step 3: Multiply!</p>
            <div class="big-visual">2 × 5 = 10</div>`,
          narration: "Arrays are multiplication pictures! Here's how to read one. Step 1: count the rows going across. 2 rows. Step 2: count how many in each row. 5 stars. Step 3: multiply! 2 times 5 equals 10.",
        },
        {
          id: "s3",
          title: "The Flip Trick",
          html: `
            <p>Here's a space secret: turn an array on its side and the total <u>doesn't change</u>!</p>
            <table>
              <tr><th>2 rows of 5</th><th>5 rows of 2</th></tr>
              <tr><td>⭐⭐⭐⭐⭐<br>⭐⭐⭐⭐⭐</td><td>⭐⭐<br>⭐⭐<br>⭐⭐<br>⭐⭐<br>⭐⭐</td></tr>
              <tr><td>2 × 5 = 10</td><td>5 × 2 = 10</td></tr>
            </table>
            <div class="callout"><b>The Flip Trick:</b> You can multiply in any order! 2 × 5 = 5 × 2. Grown-ups call this the <b>commutative property</b>.</div>`,
          narration: "Here's a space secret. Turn an array on its side and the total doesn't change! 2 rows of 5 makes 10. 5 rows of 2 also makes 10. The flip trick: you can multiply in any order! 2 times 5 equals 5 times 2. Grown-ups call this the commutative property.",
        },
        {
          id: "s4",
          title: "Why the Flip Trick Helps",
          html: `
            <p>The Flip Trick means every fact you learn is really <b>two</b> facts!</p>
            <p>If you know <b>3 × 10 = 30</b>, then you also know <b>10 × 3 = 30</b>. Free fact! 🎁</p>
            <p>Tricky one like 8 × 2? Flip it to 2 × 8 and skip count by 2s — much easier!</p>
            <div class="big-visual">8 × 2 &nbsp;=&nbsp; 2 × 8 &nbsp;=&nbsp; 16</div>
            <div class="callout"><b>Remember:</b> Flipping the factors never changes the product.</div>`,
          narration: "The flip trick means every fact you learn is really two facts! If you know 3 times 10 is 30, then you also know 10 times 3 is 30. Free fact! A tricky one like 8 times 2? Flip it to 2 times 8 and skip count by 2s. Much easier! Flipping the factors never changes the product.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Array power unlocked! You can now say:</p>
            <div class="callout">
              <p>✔️ I can read an array as rows × columns.</p>
              <p>✔️ I can write a multiplication equation for an array.</p>
              <p>✔️ I can use the Flip Trick: 4 × 6 = 6 × 4.</p>
            </div>
            <p>Quiz time — go get those stars! ⭐</p>`,
          narration: "Array power unlocked! You can now say: I can read an array as rows times columns. I can write a multiplication equation for an array. I can use the flip trick. Quiz time. Go get those stars!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation matches this array?",
            visual: "🧁🧁🧁<br>🧁🧁🧁<br>🧁🧁🧁<br>🧁🧁🧁",
            options: ["4 × 3 = 12", "3 × 3 = 9", "4 + 3 = 7", "4 × 4 = 16"],
            answer: 0,
            hints: {
              verbal: "Count the rows going across. Then count the cupcakes in one row.",
              example: "An array with 2 rows of 6 hearts is 2 × 6 = 12.",
              narrow: [1],
            },
            explain: "There are 4 rows with 3 cupcakes in each row: 4 × 3 = 12.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "An egg carton has 2 rows with 6 eggs in each row. How many eggs is that?",
            visual: "🥚🥚🥚🥚🥚🥚<br>🥚🥚🥚🥚🥚🥚",
            answer: 12,
            hints: {
              verbal: "2 rows of 6 means 2 × 6. Skip count by 6: 6, then 6 more.",
              example: "2 rows of 4 would be 2 × 4 = 8.",
            },
            explain: "2 rows of 6 eggs: 2 × 6 = 12 eggs.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which fact is the <b>Flip Trick</b> partner of 7 × 3 = 21?",
            options: ["3 × 7 = 21", "7 × 7 = 49", "21 × 3 = 63", "7 + 3 = 10"],
            answer: 0,
            hints: {
              verbal: "The Flip Trick swaps the two factors but keeps the same product.",
              example: "The flip partner of 2 × 9 = 18 is 9 × 2 = 18.",
              narrow: [2],
            },
            explain: "Flipping the factors: 7 × 3 becomes 3 × 7, and the product stays 21.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: 6 × 4 and 4 × 6 have different products.",
            answer: false,
            hints: {
              verbal: "Think about the Flip Trick. Does turning an array sideways change how many things are in it?",
              example: "2 × 5 = 10 and 5 × 2 = 10 — same product!",
            },
            explain: "False! The Flip Trick says the order of factors doesn't matter: both equal 24.",
          },
          {
            id: "q5", type: "mc",
            prompt: "A choir stands in 5 rows. Each row has 2 singers. Which equation shows the total number of singers?",
            options: ["5 × 2 = 10", "5 + 2 = 7", "5 × 5 = 25", "2 × 2 = 4"],
            answer: 0,
            hints: {
              verbal: "Rows × how-many-in-each-row = total.",
              example: "3 rows of 4 chairs: 3 × 4 = 12 chairs.",
              narrow: [1],
            },
            explain: "5 rows of 2 singers is 5 × 2 = 10 singers.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "Use the Flip Trick! If 4 × 9 = 36, what is 9 × 4?",
            answer: 36,
            hints: {
              verbal: "Flipping the factors keeps the product exactly the same.",
              example: "If 3 × 8 = 24, then 8 × 3 = 24 too.",
            },
            explain: "Same factors, just flipped — the product is still 36.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which of these shows an <b>array</b>?",
            options: [
              "3 rows of muffins with 4 in each row",
              "A pile of muffins all mixed up",
              "One giant muffin",
              "Muffins in rows of 4, 2, and 5",
            ],
            answer: 0,
            hints: {
              verbal: "An array needs EQUAL rows — every row must have the same number.",
              example: "Eggs in a carton form an array: 2 equal rows of 6.",
              narrow: [3],
            },
            explain: "An array has equal rows — 3 rows with 4 in each row. Mixed piles and unequal rows don't count.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Nia knows 10 × 6 = 60 but forgot 6 × 10. What should she do?",
            options: [
              "Use the Flip Trick — it's also 60",
              "Add 10 + 6 to get 16",
              "Start counting from 1",
              "Skip the problem forever",
            ],
            answer: 0,
            hints: {
              verbal: "6 × 10 uses the same two factors as 10 × 6, just in a different order.",
              example: "Knowing 5 × 7 = 35 means 7 × 5 = 35 for free.",
              narrow: [1],
            },
            explain: "The Flip Trick! 6 × 10 has the same factors as 10 × 6, so it's also 60.",
          },
        ],
      },
    },

    /* ============ M3 — What Is Division? (3.OA.2) ============ */
    {
      id: "math-u1-m3",
      title: "What Is Division?",
      icon: "➗",
      standard: "3.OA.2",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Great Cookie Share",
          html: `
            <p>Emergency, Cadet! We baked <b>12 space cookies</b> and <b>3 aliens</b> want to share them <u>fairly</u>.</p>
            <div class="big-visual">
              <div class="vis-row">🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪</div>
              <div class="vis-row">👽 &nbsp;&nbsp; 👽 &nbsp;&nbsp; 👽</div>
            </div>
            <p>Sharing fairly — that's what <b>division</b> does! Let's deal them out: one for you, one for you, one for you...</p>
            <div class="big-visual">👽🍪🍪🍪🍪 &nbsp; 👽🍪🍪🍪🍪 &nbsp; 👽🍪🍪🍪🍪</div>
            <p>Each alien gets <b>4 cookies</b>!</p>`,
          narration: "Emergency, Cadet! We baked 12 space cookies and 3 aliens want to share them fairly. Sharing fairly. That's what division does! Let's deal them out. One for you, one for you, one for you. Each alien gets 4 cookies!",
        },
        {
          id: "s2",
          title: "Writing Division",
          html: `
            <p>Here's how we write the Great Cookie Share:</p>
            <div class="big-visual">12 ÷ 3 = 4</div>
            <div class="vocab"><b>÷</b> — the division sign. Read "12 ÷ 3" as "12 shared into 3 equal groups."</div>
            <table>
              <tr><th>12</th><th>÷ 3</th><th>= 4</th></tr>
              <tr><td>how many we start with</td><td>how many groups</td><td>how many in each group</td></tr>
            </table>
            <div class="vocab"><b>quotient</b> — the answer to a division problem. Here the quotient is 4.</div>`,
          narration: "Here's how we write the great cookie share. 12 divided by 3 equals 4. The division sign means shared into equal groups. 12 is how many we start with. 3 is how many groups. 4 is how many in each group. The answer to a division problem is called the quotient.",
        },
        {
          id: "s3",
          title: "Division's Two Questions",
          html: `
            <p>Division can answer <b>two</b> different questions. Watch!</p>
            <p><b>Question 1 — How many in each group?</b><br>
            15 stickers shared by 3 friends → 15 ÷ 3 = <b>5 stickers each</b>.</p>
            <p><b>Question 2 — How many groups?</b><br>
            15 stickers, 5 go on each page → 15 ÷ 5 = <b>3 pages</b>.</p>
            <div class="callout"><b>Remember:</b> Division shares things into equal groups OR counts how many equal groups fit.</div>`,
          narration: "Division can answer two different questions. Watch! Question 1: how many in each group? 15 stickers shared by 3 friends. 15 divided by 3 equals 5 stickers each. Question 2: how many groups? 15 stickers, 5 go on each page. 15 divided by 5 equals 3 pages. Division shares things into equal groups, or counts how many equal groups fit.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>The moon garage has <b>8 wheels</b>, and every space scooter needs <b>2 wheels</b>. How many scooters can we build?</p>
            <div class="big-visual">
              <div class="vis-row">🛞🛞 &nbsp; 🛞🛞 &nbsp; 🛞🛞 &nbsp; 🛞🛞</div>
            </div>
            <p>Step 1: Start with 8 wheels.</p>
            <p>Step 2: Make groups of 2.</p>
            <p>Step 3: Count the groups: <b>4 groups</b>.</p>
            <div class="big-visual">8 ÷ 2 = 4 scooters! 🛴</div>`,
          narration: "The moon garage has 8 wheels, and every space scooter needs 2 wheels. How many scooters can we build? Step 1: start with 8 wheels. Step 2: make groups of 2. Step 3: count the groups. 4 groups. 8 divided by 2 equals 4 scooters!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Division decoded, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can share things into equal groups.</p>
              <p>✔️ I can write a division equation like 12 ÷ 3 = 4.</p>
              <p>✔️ I know division answers "how many in each group?" or "how many groups?"</p>
            </div>
            <p>Time to show what you know! 🚀</p>`,
          narration: "Division decoded, Cadet! You can now say: I can share things into equal groups. I can write a division equation. I know division answers how many in each group, or how many groups. Time to show what you know!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation matches the picture of sharing?",
            visual: "👧🍬🍬🍬 &nbsp; 👦🍬🍬🍬",
            options: ["6 ÷ 2 = 3", "6 ÷ 3 = 2", "6 × 2 = 12", "6 − 2 = 4"],
            answer: 0,
            hints: {
              verbal: "Count the total candies first. Then count how many kids are sharing.",
              example: "10 candies shared by 2 kids: 10 ÷ 2 = 5 each.",
              narrow: [1],
            },
            explain: "6 candies shared between 2 kids gives 3 each: 6 ÷ 2 = 3.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "20 moon rocks are shared fairly among 4 aliens. How many rocks does each alien get?",
            answer: 5,
            hints: {
              verbal: "Deal the rocks out one at a time to 4 aliens. Or think: 4 × ? = 20.",
              example: "12 rocks shared by 3 aliens: 12 ÷ 3 = 4 each.",
            },
            explain: "20 ÷ 4 = 5. Each alien gets 5 moon rocks.",
          },
          {
            id: "q3", type: "mc",
            prompt: "In 18 ÷ 6 = 3, which number is the <b>quotient</b>?",
            options: ["3", "18", "6", "24"],
            answer: 0,
            hints: {
              verbal: "The quotient is the ANSWER to a division problem.",
              example: "In 10 ÷ 2 = 5, the quotient is 5.",
              narrow: [1],
            },
            explain: "The quotient is the answer: 3.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Milo has 14 stickers. He puts 7 stickers on each page. Which question does 14 ÷ 7 answer?",
            options: ["How many pages he fills", "How many stickers he has", "How many stickers he loses", "How much the stickers cost"],
            answer: 0,
            hints: {
              verbal: "He knows how many go in each group. Division tells him how many GROUPS (pages) he can make.",
              example: "15 cookies, 5 per plate: 15 ÷ 5 = 3 tells how many plates.",
              narrow: [1],
            },
            explain: "14 ÷ 7 = 2 counts the groups — Milo fills 2 pages.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: Division means sharing into <b>equal</b> groups.",
            answer: true,
            hints: {
              verbal: "Think about the Great Cookie Share — did every alien get the same amount?",
              example: "12 ÷ 3 = 4 gives every group exactly 4 — all equal.",
            },
            explain: "True! Fair, equal groups are the whole point of division.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "The garage has 16 wheels. Each rover needs 4 wheels. How many rovers can we build?",
            visual: "🛞🛞🛞🛞 &nbsp; 🛞🛞🛞🛞 &nbsp; 🛞🛞🛞🛞 &nbsp; 🛞🛞🛞🛞",
            answer: 4,
            hints: {
              verbal: "Make groups of 4 wheels and count the groups.",
              example: "8 wheels with 2 per scooter: 8 ÷ 2 = 4 scooters.",
            },
            explain: "16 ÷ 4 = 4. We can build 4 rovers.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which story matches the equation 10 ÷ 5 = 2?",
            options: [
              "10 grapes shared by 5 friends — 2 grapes each",
              "10 grapes plus 5 more grapes",
              "5 bags with 10 grapes in each bag",
              "10 grapes and 5 got eaten",
            ],
            answer: 0,
            hints: {
              verbal: "Division starts with the TOTAL and shares it. Which story starts with 10 and shares among 5?",
              example: "6 ÷ 2 = 3 matches: 6 balloons shared by 2 kids, 3 each.",
              narrow: [2],
            },
            explain: "10 shared into 5 equal groups gives 2 in each group — that's 10 ÷ 5 = 2.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Solve it, Cadet: 24 ÷ 6 = ?",
            answer: 4,
            hints: {
              verbal: "Think: 6 × what = 24? Skip count by 6: 6, 12, 18, 24 — how many jumps?",
              example: "18 ÷ 6: skip count 6, 12, 18 — that's 3 jumps, so 18 ÷ 6 = 3.",
            },
            explain: "Skip count by 6: 6, 12, 18, 24 — four jumps. So 24 ÷ 6 = 4.",
          },
        ],
      },
    },

    /* ============ M4 — Fact Families (3.OA.4, 3.OA.6) ============ */
    {
      id: "math-u1-m4",
      title: "Fact Families",
      icon: "👨‍👩‍👧‍👦",
      standard: "3.OA.4, 3.OA.6",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Multiplication and Division Are Partners",
          html: `
            <p>Big secret, Cadet: multiplication and division are <b>partners</b>. They use the same numbers, just moving in opposite directions!</p>
            <div class="big-visual">
              <div class="vis-row">🐞🐞🐞 &nbsp; 🐞🐞🐞</div>
            </div>
            <p>This one picture shows BOTH:</p>
            <table>
              <tr><th>Multiplication</th><th>Division</th></tr>
              <tr><td>2 × 3 = 6</td><td>6 ÷ 2 = 3</td></tr>
              <tr><td>3 × 2 = 6</td><td>6 ÷ 3 = 2</td></tr>
            </table>`,
          narration: "Big secret, Cadet. Multiplication and division are partners. They use the same numbers, just moving in opposite directions! One picture of 2 groups of 3 ladybugs shows four facts: 2 times 3 equals 6. 3 times 2 equals 6. 6 divided by 2 equals 3. And 6 divided by 3 equals 2.",
        },
        {
          id: "s2",
          title: "Meet the Fact Family",
          html: `
            <p>The numbers <b>2, 3, and 6</b> make a <b>fact family</b> — like a family photo with four poses!</p>
            <div class="big-visual">2 × 3 = 6 &nbsp; · &nbsp; 3 × 2 = 6<br>6 ÷ 3 = 2 &nbsp; · &nbsp; 6 ÷ 2 = 3</div>
            <div class="vocab"><b>fact family</b> — a set of multiplication and division facts that all use the same three numbers.</div>
            <div class="callout"><b>Remember:</b> If you know ONE fact in the family, you know all FOUR!</div>`,
          narration: "The numbers 2, 3, and 6 make a fact family. Like a family photo with four poses! 2 times 3 equals 6. 3 times 2 equals 6. 6 divided by 3 equals 2. 6 divided by 2 equals 3. A fact family is a set of multiplication and division facts that all use the same three numbers. If you know one fact in the family, you know all four!",
        },
        {
          id: "s3",
          title: "The Mystery Number",
          html: `
            <p>Sometimes an equation hides a number, like this:</p>
            <div class="big-visual">8 × ? = 48</div>
            <p>Don't panic — use the family partner! Flip it into division:</p>
            <div class="big-visual">48 ÷ 8 = ?</div>
            <p>48 ÷ 8 = <b>6</b>. So the mystery number is <b>6</b>, because 8 × 6 = 48. ✔️</p>
            <div class="callout"><b>Detective move:</b> To find a missing factor, divide the product by the factor you know.</div>`,
          narration: "Sometimes an equation hides a number, like 8 times what equals 48. Don't panic. Use the family partner! Flip it into division. 48 divided by 8 equals 6. So the mystery number is 6, because 8 times 6 is 48. Detective move: to find a missing factor, divide the product by the factor you know.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Mystery time! Find the hidden number:</p>
            <div class="big-visual">? ÷ 5 = 4</div>
            <p>Hmm — some number shared into 5 groups gives 4 in each group.</p>
            <p>Use the partner fact: <b>5 × 4 = 20</b>.</p>
            <div class="big-visual">20 ÷ 5 = 4 ✔️</div>
            <p>The mystery number is <b>20</b>! You're a math detective, Cadet! 🕵️</p>`,
          narration: "Mystery time! Find the hidden number. What number divided by 5 equals 4? Some number shared into 5 groups gives 4 in each group. Use the partner fact. 5 times 4 equals 20. So 20 divided by 5 equals 4. The mystery number is 20! You're a math detective, Cadet!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Fact family power activated! You can now say:</p>
            <div class="callout">
              <p>✔️ I can write the 4 facts in a fact family.</p>
              <p>✔️ I can find a missing factor by dividing.</p>
              <p>✔️ I know division is the partner of multiplication.</p>
            </div>
            <p>Pass this quiz and you've conquered Multiplication Planet! 🪐</p>`,
          narration: "Fact family power activated! You can now say: I can write the 4 facts in a fact family. I can find a missing factor by dividing. I know division is the partner of multiplication. Pass this quiz and you've conquered Multiplication Planet!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which fact belongs in the same family as 4 × 5 = 20?",
            options: ["20 ÷ 5 = 4", "20 ÷ 2 = 10", "4 × 6 = 24", "5 + 4 = 9"],
            answer: 0,
            hints: {
              verbal: "A fact family uses the SAME three numbers: 4, 5, and 20.",
              example: "The family of 2 × 3 = 6 includes 6 ÷ 3 = 2 — same numbers 2, 3, 6.",
              narrow: [1],
            },
            explain: "The family of 4, 5, and 20 includes 20 ÷ 5 = 4.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Find the mystery number: 6 × ? = 42",
            answer: 7,
            hints: {
              verbal: "Flip it into division: 42 ÷ 6 = ?",
              example: "For 3 × ? = 12, flip to 12 ÷ 3 = 4. Mystery number is 4.",
            },
            explain: "42 ÷ 6 = 7, so 6 × 7 = 42. The mystery number is 7.",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Find the mystery number: 45 ÷ ? = 9",
            answer: 5,
            hints: {
              verbal: "Think: 9 × what = 45?",
              example: "For 20 ÷ ? = 4, ask 4 × what = 20. Answer: 5.",
            },
            explain: "9 × 5 = 45, so 45 ÷ 5 = 9. The mystery number is 5.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Which THREE numbers make up this fact family? <br>7 × 8 = 56",
            options: ["7, 8, and 56", "7, 8, and 15", "8, 56, and 64", "7, 7, and 49"],
            answer: 0,
            hints: {
              verbal: "A fact family is the two factors plus their product.",
              example: "For 2 × 5 = 10, the family numbers are 2, 5, and 10.",
              narrow: [1],
            },
            explain: "The two factors (7 and 8) and the product (56) make the family.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: If you know 9 × 4 = 36, then you also know 36 ÷ 4 = 9.",
            answer: true,
            hints: {
              verbal: "They use the same three numbers: 9, 4, and 36. Are they in the same family?",
              example: "Knowing 3 × 6 = 18 means 18 ÷ 6 = 3 comes free.",
            },
            explain: "True! They're in the same fact family, so one fact unlocks the other.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Jax needs to solve ? × 3 = 27. What's the smartest detective move?",
            options: ["Divide: 27 ÷ 3", "Add: 27 + 3", "Subtract: 27 − 3", "Guess a random number"],
            answer: 0,
            hints: {
              verbal: "To find a missing factor, use the division partner.",
              example: "For ? × 2 = 14, divide 14 ÷ 2 = 7.",
              narrow: [2],
            },
            explain: "27 ÷ 3 = 9 finds the missing factor: 9 × 3 = 27.",
          },
          {
            id: "q7", type: "mc",
            prompt: "The space bakery problem: 32 muffins, 8 muffins fit in each box. Which partner fact finds the number of boxes?",
            passage: "Chef Zorp bakes 32 muffins. Each box holds exactly 8 muffins. How many boxes does Chef Zorp need?",
            options: ["8 × 4 = 32, so 4 boxes", "8 × 8 = 64, so 8 boxes", "32 × 8 = 256, so 256 boxes", "8 + 4 = 12, so 12 boxes"],
            answer: 0,
            hints: {
              verbal: "Ask: 8 times how many boxes makes 32?",
              example: "12 cookies, 6 per bag: 6 × 2 = 12, so 2 bags.",
              narrow: [1],
            },
            explain: "8 × 4 = 32, so 32 ÷ 8 = 4. Chef Zorp needs 4 boxes.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Last mystery: ? ÷ 6 = 3",
            answer: 18,
            hints: {
              verbal: "Some number split into 6 groups gives 3 each. Multiply the partners: 6 × 3.",
              example: "For ? ÷ 4 = 2, multiply 4 × 2 = 8. Mystery number: 8.",
            },
            explain: "6 × 3 = 18, so 18 ÷ 6 = 3. The mystery number is 18!",
          },
        ],
      },
    },
  ],
});
