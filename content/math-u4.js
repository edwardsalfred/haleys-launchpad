/* Unit 4 — Problem-Solving Probe (3.OA.3, 3.OA.8)
   Word problems with all four operations: one-step, two-step, and
   checking answers for reasonableness with estimation. */
window.COURSE_CONTENT.push({
  id: "math-u4",
  subject: "math",
  order: 4,
  title: "Problem-Solving Probe",
  subtitle: "Word problems with all four operations",
  planet: { emoji: "🛸", color: "#3EE6C0" },
  badgeName: "Problem-Solving Probe Star",
  modules: [

    /* ============ M1 — One-Step Missions (3.OA.3) ============ */
    {
      id: "math-u4-m1",
      title: "One-Step Missions",
      icon: "🧩",
      standard: "3.OA.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Mission Control Needs You!",
          html: `
            <p>Cadet! Mission Control just sent a problem — but it's hiding inside <b>words</b>. That's called a <b>word problem</b>.</p>
            <div class="callout">Zork packed <b>3 boxes</b>. Each box has <b>5 star snacks</b>. How many snacks altogether?</div>
            <p>Don't panic — let's turn the words into a picture:</p>
            <div class="big-visual">
              <div class="vis-row">🍬🍬🍬🍬🍬 &nbsp; 🍬🍬🍬🍬🍬 &nbsp; 🍬🍬🍬🍬🍬</div>
            </div>
            <p>3 groups of 5 — you already know this! <b>3 × 5 = 15</b> snacks. Word problems are just math wearing a costume! 🎭</p>`,
          narration: "Cadet! Mission Control just sent a problem, but it's hiding inside words. That's called a word problem. Zork packed 3 boxes. Each box has 5 star snacks. How many snacks altogether? Don't panic. Let's turn the words into a picture. 3 groups of 5. You already know this! 3 times 5 equals 15 snacks. Word problems are just math wearing a costume!",
        },
        {
          id: "s2",
          title: "Clue Words",
          html: `
            <p>Word problems drop <b>clue words</b> that tell you which operation to use. Be a detective!</p>
            <table>
              <tr><th>Clues to MULTIPLY ×</th><th>Clues to DIVIDE ÷</th></tr>
              <tr><td>"groups"</td><td>"shared equally"</td></tr>
              <tr><td>"in each"</td><td>"How many does <u>each</u> get?"</td></tr>
              <tr><td>"altogether" / "total"</td><td>"How many groups fit?"</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> If you know the groups and want the <b>total</b> — multiply. If you know the total and need to <b>share</b> it — divide.</div>`,
          narration: "Word problems drop clue words that tell you which operation to use. Be a detective! Clues to multiply: groups, in each, altogether, and total. Clues to divide: shared equally, how many does each get, and how many groups fit. Remember: if you know the groups and want the total, multiply. If you know the total and need to share it, divide.",
        },
        {
          id: "s3",
          title: "Worked Example: The Crystal Cargo",
          html: `
            <p>Let's solve one together, step by step:</p>
            <div class="callout"><b>4 rockets</b> each carry <b>6 space crystals</b>. How many crystals altogether?</div>
            <p>Step 1: Find the clues. "Each" and "altogether" — that means <b>multiply</b>!</p>
            <p>Step 2: Draw a picture — 4 groups of 6:</p>
            <div class="big-visual">
              <div class="vis-row">💎💎💎💎💎💎 &nbsp; 💎💎💎💎💎💎</div>
              <div class="vis-row">💎💎💎💎💎💎 &nbsp; 💎💎💎💎💎💎</div>
            </div>
            <p>Step 3: Write an equation. Use <b>?</b> for the number we don't know:</p>
            <div class="big-visual">4 × 6 = ?</div>
            <p>Step 4: Solve! 4 × 6 = <b>24</b> crystals. ✔️</p>`,
          narration: "Let's solve one together, step by step. 4 rockets each carry 6 space crystals. How many crystals altogether? Step 1: find the clues. Each and altogether. That means multiply! Step 2: draw a picture. 4 groups of 6. Step 3: write an equation. Use a question mark for the number we don't know. 4 times 6 equals what? Step 4: solve! 4 times 6 equals 24 crystals.",
        },
        {
          id: "s4",
          title: "Worked Example: Maria's Ribbon",
          html: `
            <p>Now a <b>sharing</b> mission — watch the clues change:</p>
            <div class="callout">Maria cuts <b>12 feet</b> of ribbon into <b>3 equal pieces</b> to share with her two sisters. How long is each piece?</div>
            <p>Step 1: Clues! "Equal pieces" and "each" — that means <b>divide</b>.</p>
            <p>Step 2: Picture it — 12 feet split into 3 equal pieces:</p>
            <div class="big-visual">
              <div class="vis-row">🎀🎀🎀🎀 | 🎀🎀🎀🎀 | 🎀🎀🎀🎀</div>
            </div>
            <p>Step 3: Equation with a symbol for the unknown:</p>
            <div class="big-visual">12 ÷ 3 = ?</div>
            <p>Step 4: Solve! Each piece is <b>4 feet</b> long. ✔️</p>
            <div class="vocab"><b>measurement problem</b> — a word problem about lengths, weights, or amounts, like feet of ribbon or liters of water.</div>`,
          narration: "Now a sharing mission. Watch the clues change. Maria cuts 12 feet of ribbon into 3 equal pieces to share with her two sisters. How long is each piece? Step 1: clues! Equal pieces and each. That means divide. Step 2: picture it. 12 feet split into 3 equal pieces. Step 3: write the equation. 12 divided by 3 equals what? Step 4: solve! Each piece is 4 feet long. A measurement problem is a word problem about lengths, weights, or amounts.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Your turn, Cadet — I'll guide you:</p>
            <div class="callout">The space garden has <b>20 seeds</b>. We plant <b>5 seeds in each row</b>. How many rows can we plant?</div>
            <p>Step 1: Clues? We know the <b>total</b> (20) and how many <b>in each</b> row (5). We need the number of groups — <b>divide</b>!</p>
            <p>Step 2: Picture — make groups of 5:</p>
            <div class="big-visual">
              <div class="vis-row">🌱🌱🌱🌱🌱 &nbsp; 🌱🌱🌱🌱🌱 &nbsp; 🌱🌱🌱🌱🌱 &nbsp; 🌱🌱🌱🌱🌱</div>
            </div>
            <p>Step 3: Equation: <b>20 ÷ 5 = ?</b></p>
            <p>Step 4: Count the groups… <b>4 rows</b>! Great detective work! 🕵️</p>`,
          narration: "Your turn, Cadet. I'll guide you. The space garden has 20 seeds. We plant 5 seeds in each row. How many rows can we plant? Step 1: clues? We know the total, 20, and how many in each row, 5. We need the number of groups. Divide! Step 2: picture it. Make groups of 5. Step 3: write the equation. 20 divided by 5 equals what? Step 4: count the groups. 4 rows! Great detective work!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>One-step missions: unlocked! You can now say:</p>
            <div class="callout">
              <p>✔️ I can find clue words like "in each," "altogether," and "shared equally."</p>
              <p>✔️ I can draw a picture AND write an equation with ? for the unknown.</p>
              <p>✔️ I can choose × or ÷ to solve a word problem.</p>
            </div>
            <p>Quiz time — show Mission Control what you've got! 🚀</p>`,
          narration: "One-step missions unlocked! You can now say: I can find clue words like in each, altogether, and shared equally. I can draw a picture and write an equation with a question mark for the unknown. I can choose multiplication or division to solve a word problem. Quiz time. Show Mission Control what you've got!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation matches this problem?",
            passage: "Zip packs 6 bags. Each bag has 4 moon apples. How many apples altogether?",
            options: ["6 × 4 = ?", "6 + 4 = ?", "6 − 4 = ?", "6 ÷ 4 = ?"],
            answer: 0,
            hints: {
              verbal: "The clues are 'each' and 'altogether.' Groups and a total mean multiply.",
              example: "3 boxes with 5 snacks in each: 3 × 5 = ? snacks altogether.",
              narrow: [1],
            },
            explain: "6 groups with 4 in each — 'altogether' tells us to multiply: 6 × 4 = 24.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "How many solar panels does the rover have altogether?",
            passage: "A rover has 4 rows of solar panels. Each row has 8 panels.",
            visual: "🟦🟦🟦🟦🟦🟦🟦🟦<br>🟦🟦🟦🟦🟦🟦🟦🟦<br>🟦🟦🟦🟦🟦🟦🟦🟦<br>🟦🟦🟦🟦🟦🟦🟦🟦",
            answer: 32,
            hints: {
              verbal: "4 rows with 8 in each row is an array. Multiply rows × how many in each.",
              example: "3 rows of 6 panels would be 3 × 6 = 18 panels.",
            },
            explain: "4 rows of 8 panels: 4 × 8 = 32 panels altogether.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which words are a clue to <b>multiply</b>?",
            options: [
              "5 boxes with 3 toys in each — how many altogether?",
              "15 toys shared equally by 5 kids",
              "5 toys were taken away",
              "5 fewer toys than yesterday",
            ],
            answer: 0,
            hints: {
              verbal: "Multiplying is for counting equal groups to find a TOTAL. Which story has groups and asks for a total?",
              example: "'4 bags with 2 marbles in each, how many altogether?' means multiply: 4 × 2.",
              narrow: [1],
            },
            explain: "'In each' and 'altogether' are multiply clues — equal groups making a total.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "How many feet long is each piece?",
            passage: "Maria cuts 12 feet of ribbon into 3 equal pieces so she can share it with her two sisters.",
            visual: "🎀🎀🎀🎀 | 🎀🎀🎀🎀 | 🎀🎀🎀🎀",
            answer: 4,
            hints: {
              verbal: "'Equal pieces' means divide. Split 12 into 3 equal parts.",
              example: "10 feet of string cut into 2 equal pieces: 10 ÷ 2 = 5 feet each.",
            },
            explain: "12 ÷ 3 = 4. Each piece of ribbon is 4 feet long.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which equation matches this problem?",
            passage: "18 space cookies are shared equally among 6 aliens. How many cookies does each alien get?",
            options: ["18 ÷ 6 = ?", "18 × 6 = ?", "18 + 6 = ?", "18 − 6 = ?"],
            answer: 0,
            hints: {
              verbal: "'Shared equally' is a divide clue. Start with the total and split it into groups.",
              example: "12 candies shared equally by 3 kids: 12 ÷ 3 = ? each.",
              narrow: [3],
            },
            explain: "Sharing 18 equally among 6 means divide: 18 ÷ 6 = 3 cookies each.",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: The words 'shared equally' are a clue to <b>divide</b>.",
            answer: true,
            hints: {
              verbal: "Think of the cookie share — when things get split fairly, which sign do we use?",
              example: "'20 rocks shared equally by 4 aliens' becomes 20 ÷ 4.",
            },
            explain: "True! Sharing a total into equal groups is exactly what division does.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which equation matches this problem?",
            passage: "Jade has 40 stickers. She puts 8 stickers on each page. How many pages does she fill?",
            options: ["40 ÷ 8 = ?", "40 × 8 = ?", "40 + 8 = ?", "40 − 8 = ?"],
            answer: 0,
            hints: {
              verbal: "Jade knows the total (40) and how many go IN EACH page (8). She needs the number of groups — divide.",
              example: "15 stickers, 5 on each page: 15 ÷ 5 = 3 pages.",
              narrow: [3],
            },
            explain: "40 split into groups of 8: 40 ÷ 8 = 5 pages. Subtracting 8 once would only fill one page!",
          },
          {
            id: "q8", type: "numeric",
            prompt: "How many pieces of rope will Cosmo have?",
            passage: "Cosmo has 45 feet of rope. He cuts it into pieces that are 5 feet long each.",
            answer: 9,
            hints: {
              verbal: "Start with 45 feet and make groups of 5. How many groups fit? Think: 5 × ? = 45.",
              example: "20 feet of rope cut into 5-foot pieces: 20 ÷ 5 = 4 pieces.",
            },
            explain: "45 ÷ 5 = 9. Cosmo gets 9 pieces of rope, each 5 feet long.",
          },
        ],
      },
    },

    /* ============ M2 — Two-Step Missions (3.OA.8) ============ */
    {
      id: "math-u4-m2",
      title: "Two-Step Missions",
      icon: "🗺️",
      standard: "3.OA.8",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Double Trouble!",
          html: `
            <p>Alert, Cadet! Some missions can't be solved in one jump. They take <b>TWO steps</b> — like crossing a river on two stepping stones. 🪨🪨</p>
            <div class="callout">Cosmo buys <b>2 packs</b> of comet candies. Each pack has <b>5 candies</b>. Then he eats <b>3</b>. How many are left?</div>
            <div class="big-visual">
              <div class="vis-row">🍬🍬🍬🍬🍬 &nbsp; 🍬🍬🍬🍬🍬</div>
            </div>
            <p>See it? First we need the total candies. THEN we can take away the 3 he ate. One equation isn't enough — we need a plan!</p>`,
          narration: "Alert, Cadet! Some missions can't be solved in one jump. They take two steps, like crossing a river on two stepping stones. Cosmo buys 2 packs of comet candies. Each pack has 5 candies. Then he eats 3. How many are left? See it? First we need the total candies. Then we can take away the 3 he ate. One equation isn't enough. We need a plan!",
        },
        {
          id: "s2",
          title: "The Two-Step Plan",
          html: `
            <p>Here's the plan for every two-step mission:</p>
            <table>
              <tr><th>Step 1</th><th>Step 2</th></tr>
              <tr><td>Find the <b>hidden number</b> the problem doesn't tell you</td><td>Use that number to answer the <b>real question</b></td></tr>
            </table>
            <p>And here's a big-kid upgrade: instead of ?, we use a <b>letter</b> for the unknown!</p>
            <div class="big-visual">2 × 5 − 3 = w</div>
            <div class="vocab"><b>w</b> — a letter standing for the number we don't know yet. Any letter works: w, n, c… It's just ? in a fancy suit!</div>`,
          narration: "Here's the plan for every two-step mission. Step 1: find the hidden number the problem doesn't tell you. Step 2: use that number to answer the real question. And here's a big-kid upgrade. Instead of a question mark, we use a letter for the unknown! 2 times 5 minus 3 equals w. The letter w stands for the number we don't know yet. Any letter works. It's just a question mark in a fancy suit!",
        },
        {
          id: "s3",
          title: "Worked Example: The Skating Team",
          html: `
            <p>Mission Control's favorite puzzle — let's crush it:</p>
            <div class="callout">A skating team has <b>10 members</b>. Each member has <b>2 skates</b>. Each skate has <b>4 wheels</b>. How many wheels in all?</div>
            <p><b>Step 1:</b> Find the hidden number — how many <u>skates</u>?</p>
            <div class="big-visual">10 × 2 = 20 skates 🛼</div>
            <p><b>Step 2:</b> Use it! 20 skates with 4 wheels on each:</p>
            <div class="big-visual">20 × 4 = 80 wheels</div>
            <p>As one equation with a letter: <b>10 × 2 × 4 = w</b>, and <b>w = 80</b>. ✔️</p>
            <div class="callout"><b>Remember:</b> The answer from Step 1 becomes an ingredient for Step 2.</div>`,
          narration: "Mission Control's favorite puzzle. Let's crush it. A skating team has 10 members. Each member has 2 skates. Each skate has 4 wheels. How many wheels in all? Step 1: find the hidden number. How many skates? 10 times 2 equals 20 skates. Step 2: use it! 20 skates with 4 wheels on each. 20 times 4 equals 80 wheels. As one equation with a letter: 10 times 2 times 4 equals w, and w equals 80. Remember: the answer from step 1 becomes an ingredient for step 2.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Your turn to take two steps, Cadet:</p>
            <div class="callout">The space café has <b>4 tables</b> with <b>6 chairs at each</b> table. <b>5 chairs</b> are broken. How many good chairs are there, <b>c</b>?</div>
            <p><b>Step 1:</b> Hidden number — total chairs:</p>
            <div class="big-visual">4 × 6 = 24 chairs</div>
            <p><b>Step 2:</b> Take away the broken ones:</p>
            <div class="big-visual">24 − 5 = c &nbsp; → &nbsp; c = 19</div>
            <p><b>19 good chairs!</b> You just did multiplication AND subtraction in one mission. Two-step champion! 🏆</p>`,
          narration: "Your turn to take two steps, Cadet. The space café has 4 tables with 6 chairs at each table. 5 chairs are broken. How many good chairs are there? Step 1: find the hidden number. The total chairs. 4 times 6 equals 24 chairs. Step 2: take away the broken ones. 24 minus 5 equals c, so c equals 19. 19 good chairs! You just did multiplication and subtraction in one mission. Two-step champion!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Two-step power: online! You can now say:</p>
            <div class="callout">
              <p>✔️ I can find the hidden number first, then answer the real question.</p>
              <p>✔️ I can write an equation with a letter (like w) for the unknown.</p>
              <p>✔️ I can mix ×, ÷, +, and − in one problem.</p>
            </div>
            <p>Show me those two-step moves in the quiz! 🕺</p>`,
          narration: "Two-step power online! You can now say: I can find the hidden number first, then answer the real question. I can write an equation with a letter, like w, for the unknown. I can mix all four operations in one problem. Show me those two-step moves in the quiz!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation finds the number of <b>skates</b> first?",
            passage: "A skating team has 10 members. Each member has 2 skates. Each skate has 4 wheels. How many wheels in all?",
            options: ["10 × 2 = s", "10 + 2 = s", "10 × 4 = s", "2 + 4 = s"],
            answer: 0,
            hints: {
              verbal: "Step 1 is about skates only. 10 members with 2 skates EACH — groups mean multiply.",
              example: "6 riders with 2 gloves each: 6 × 2 = 12 gloves.",
              narrow: [1],
            },
            explain: "10 members with 2 skates each: 10 × 2 = 20 skates. That's the hidden number for Step 1.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Now finish the mission. The team has 20 skates, and each skate has 4 wheels. How many wheels in all?",
            passage: "A skating team has 10 members. Each member has 2 skates, so there are 20 skates. Each skate has 4 wheels.",
            answer: 80,
            hints: {
              verbal: "Step 2 uses the answer from Step 1. Multiply 20 skates by 4 wheels each.",
              example: "10 skates with 4 wheels each would be 10 × 4 = 40 wheels.",
            },
            explain: "20 × 4 = 80. The whole team rolls on 80 wheels!",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which equation matches this problem?",
            passage: "Kai buys 3 packs of star cards. Each pack has 6 cards. Then he finds 4 more cards. How many cards does he have now, c?",
            options: ["3 × 6 + 4 = c", "3 + 6 + 4 = c", "3 × 6 − 4 = c", "3 × 6 × 4 = c"],
            answer: 0,
            hints: {
              verbal: "Step 1: multiply to find the cards in the packs. Step 2: he FINDS more, so add.",
              example: "2 bags of 5 shells plus 1 extra shell: 2 × 5 + 1 = 11.",
              narrow: [2],
            },
            explain: "3 packs of 6 is 3 × 6 = 18 cards, then ADD the 4 he found: 18 + 4 = 22. So 3 × 6 + 4 = c.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "Solve it! What is c?",
            passage: "Kai buys 3 packs of star cards with 6 cards in each pack, then finds 4 more. 3 × 6 + 4 = c",
            answer: 22,
            hints: {
              verbal: "Do the multiplication first: 3 × 6. Then add 4 to that answer.",
              example: "For 2 × 5 + 3: first 2 × 5 = 10, then 10 + 3 = 13.",
            },
            explain: "Step 1: 3 × 6 = 18. Step 2: 18 + 4 = 22. So c = 22 cards.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: In the equation 5 × 4 − 6 = w, the letter <b>w</b> stands for the number we don't know yet.",
            answer: true,
            hints: {
              verbal: "Remember the big-kid upgrade — what does a letter in an equation do?",
              example: "In 2 × 3 = n, the letter n is the unknown answer, 6.",
            },
            explain: "True! A letter like w is just a symbol for the unknown — a ? in a fancy suit.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "How many beads does Mia have left?",
            passage: "Mia has 50 space beads. She makes 4 bracelets and uses 8 beads on each bracelet. How many beads are left?",
            answer: 18,
            hints: {
              verbal: "Step 1: how many beads did she USE? 4 bracelets × 8 beads. Step 2: subtract that from 50.",
              example: "30 beads, 2 bracelets of 10 beads: 2 × 10 = 20 used, then 30 − 20 = 10 left.",
            },
            explain: "Step 1: 4 × 8 = 32 beads used. Step 2: 50 − 32 = 18 beads left.",
          },
          {
            id: "q7", type: "mc",
            prompt: "What should you find FIRST?",
            passage: "A rocket bus has 6 rows of 4 seats. 5 seats are empty. How many seats are full?",
            options: [
              "The total number of seats (6 × 4)",
              "Subtract 5 from 6",
              "Add 6 + 4 + 5",
              "The number of empty rows",
            ],
            answer: 0,
            hints: {
              verbal: "You can't take away the empty seats until you know how many seats there are in ALL.",
              example: "For the café chairs, Step 1 was the total: 4 × 6 = 24 chairs.",
              narrow: [1],
            },
            explain: "Step 1 is the hidden number: 6 × 4 = 24 total seats. Then you can subtract the 5 empty ones.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Finish the rocket bus mission. How many seats are full?",
            passage: "The rocket bus has 6 rows of 4 seats, which is 24 seats in all. 5 seats are empty.",
            answer: 19,
            hints: {
              verbal: "Take Step 1's answer, 24 seats, and subtract the 5 empty ones.",
              example: "12 seats with 2 empty: 12 − 2 = 10 full seats.",
            },
            explain: "24 − 5 = 19. There are 19 full seats on the rocket bus.",
          },
        ],
      },
    },

    /* ============ M3 — Does That Make Sense? (3.OA.8) ============ */
    {
      id: "math-u4-m3",
      title: "Does That Make Sense?",
      icon: "🤔",
      standard: "3.OA.8",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Robo-Bot's Silly Answer",
          html: `
            <p>Uh oh, Cadet. Robo-Bot solved a problem… and something smells fishy. 🐟</p>
            <div class="callout">Robo-Bot says: "12 × 4 = <b>480</b>! Beep boop!"</div>
            <p>Hmm. Let's check with a quick trick. 12 is close to 10, and 10 × 4 = <b>40</b>.</p>
            <div class="big-visual">40 &nbsp; vs. &nbsp; 480 ❌</div>
            <p>480 is nowhere NEAR 40! Robo-Bot's answer doesn't make sense. (The real answer is 48.)</p>
            <p>Today you learn to be the <b>sense checker</b> — the cadet who catches silly answers!</p>`,
          narration: "Uh oh, Cadet. Robo-Bot solved a problem, and something smells fishy. Robo-Bot says 12 times 4 equals 480. Hmm. Let's check with a quick trick. 12 is close to 10, and 10 times 4 equals 40. 480 is nowhere near 40! Robo-Bot's answer doesn't make sense. The real answer is 48. Today you learn to be the sense checker. The cadet who catches silly answers!",
        },
        {
          id: "s2",
          title: "Rounding: The Sense Checker's Tool",
          html: `
            <p>The trick I used is called <b>rounding</b> — swapping a number for the nearest friendly ten.</p>
            <div class="big-visual">38 → 40 &nbsp;&nbsp; 22 → 20 &nbsp;&nbsp; 75 → 80</div>
            <p>The rule: look at the <b>ones digit</b>.</p>
            <table>
              <tr><th>Ones digit is 0–4</th><th>Ones digit is 5–9</th></tr>
              <tr><td>Round DOWN (22 → 20)</td><td>Round UP (38 → 40)</td></tr>
            </table>
            <div class="vocab"><b>estimate</b> — a quick "about how much" answer you get by rounding first. Not exact — just close!</div>`,
          narration: "The trick I used is called rounding. Swapping a number for the nearest friendly ten. 38 rounds to 40. 22 rounds to 20. 75 rounds to 80. The rule: look at the ones digit. If it's 0 to 4, round down. If it's 5 to 9, round up. An estimate is a quick, about-how-much answer you get by rounding first. Not exact. Just close!",
        },
        {
          id: "s3",
          title: "Worked Example: The Space Shop",
          html: `
            <p>Sense-check a money mission with me:</p>
            <div class="callout">A moon helmet costs <b>$32</b>. Moon boots cost <b>$49</b>. Zia says the total is <b>$81</b>. Does that make sense?</div>
            <p><b>Step 1 — Round:</b> $32 → $30 and $49 → $50.</p>
            <p><b>Step 2 — Estimate:</b></p>
            <div class="big-visual">$30 + $50 = $80</div>
            <p><b>Step 3 — Compare:</b> Zia's answer $81 is super close to $80. ✔️ It makes sense!</p>
            <div class="callout"><b>Remember:</b> Round → Estimate → Compare. If the exact answer is CLOSE to the estimate, it makes sense. If it's far away, check again!</div>`,
          narration: "Sense-check a money mission with me. A moon helmet costs 32 dollars. Moon boots cost 49 dollars. Zia says the total is 81 dollars. Does that make sense? Step 1: round. 32 rounds to 30, and 49 rounds to 50. Step 2: estimate. 30 plus 50 equals 80 dollars. Step 3: compare. Zia's answer, 81 dollars, is super close to 80. It makes sense! Remember: round, estimate, compare. If the exact answer is close to the estimate, it makes sense. If it's far away, check again!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Your turn to be the sense checker, Cadet:</p>
            <div class="callout">Zia solves <b>61 − 28</b> and gets <b>33</b>. Does that make sense?</div>
            <p><b>Round:</b> 61 → 60 and 28 → 30.</p>
            <p><b>Estimate:</b></p>
            <div class="big-visual">60 − 30 = 30</div>
            <p><b>Compare:</b> 33 is close to 30… ✔️ It makes sense!</p>
            <p>But what if Zia had gotten <b>89</b>? That's FAR from 30 — sense-checker alarm! 🚨 She probably added instead of subtracting.</p>`,
          narration: "Your turn to be the sense checker, Cadet. Zia solves 61 minus 28 and gets 33. Does that make sense? Round: 61 becomes 60, and 28 becomes 30. Estimate: 60 minus 30 equals 30. Compare: 33 is close to 30. It makes sense! But what if Zia had gotten 89? That's far from 30. Sense-checker alarm! She probably added instead of subtracting.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Sense-checker certified! You can now say:</p>
            <div class="callout">
              <p>✔️ I can round numbers to the nearest ten.</p>
              <p>✔️ I can estimate: round → estimate → compare.</p>
              <p>✔️ I can spot an answer that's way off and check it again.</p>
            </div>
            <p>Pass this quiz and the Problem-Solving Probe badge is yours! 🛸</p>`,
          narration: "Sense-checker certified! You can now say: I can round numbers to the nearest ten. I can estimate. Round, estimate, compare. I can spot an answer that's way off and check it again. Pass this quiz and the Problem-Solving Probe badge is yours!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Round 38 to the nearest ten.",
            options: ["40", "30", "38", "50"],
            answer: 0,
            hints: {
              verbal: "Look at the ones digit of 38. Is it 5 or more? Then round UP.",
              example: "27 has a 7 in the ones place, so it rounds up to 30.",
              narrow: [1],
            },
            explain: "The ones digit is 8, which is 5 or more — so 38 rounds up to 40.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Estimate 4 × 21 by rounding 21 to the nearest ten first. What is your estimate?",
            answer: 80,
            hints: {
              verbal: "21 rounds down to 20. Now multiply 4 × 20.",
              example: "To estimate 3 × 19: round 19 to 20, then 3 × 20 = 60.",
            },
            explain: "21 rounds to 20, and 4 × 20 = 80. The exact answer, 84, is nice and close!",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which is the best <b>estimate</b> for the pages read?",
            passage: "A cadet reads 19 pages every day for 3 days. About how many pages is that?",
            options: [
              "About 60, because 19 rounds to 20",
              "About 30, because 19 rounds to 10",
              "About 190, because you put the numbers together",
              "About 22, because 19 + 3 = 22",
            ],
            answer: 0,
            hints: {
              verbal: "Round 19 to the nearest ten first. Then multiply by the 3 days.",
              example: "21 pages a day for 2 days: 21 → 20, and 2 × 20 = about 40 pages.",
              narrow: [3],
            },
            explain: "19 rounds up to 20, and 3 × 20 = 60. About 60 pages — the exact answer is 57.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: 48 + 33 is about 80, so an exact answer of 81 makes sense.",
            answer: true,
            hints: {
              verbal: "Round both numbers: 48 → 50 and 33 → 30. Add the rounded numbers and compare.",
              example: "For 42 + 39: estimate 40 + 40 = 80, so an exact answer of 81 is sensible.",
            },
            explain: "True! 50 + 30 = 80, and 81 is super close to 80 — the answer makes sense.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which answer is <b>reasonable</b> for 52 − 29?",
            passage: "Robo-Bot says 52 − 29 = 81. Use an estimate to pick the answer that really makes sense.",
            options: ["23", "81", "2", "123"],
            answer: 0,
            hints: {
              verbal: "Round first: 52 → 50 and 29 → 30. What is 50 − 30? Pick the answer near that.",
              example: "For 41 − 18: estimate 40 − 20 = 20, so an answer near 20 is reasonable.",
              narrow: [1],
            },
            explain: "Estimate: 50 − 30 = 20, and 23 is close to 20. Robo-Bot got 81 because he added instead of subtracting!",
          },
          {
            id: "q6", type: "numeric",
            prompt: "Round each price to the nearest ten dollars and estimate the total. About how many dollars is that?",
            passage: "A star game costs $23 and a galaxy puzzle costs $58. About how much do they cost together?",
            answer: 80,
            hints: {
              verbal: "Round $23 and $58 to the nearest ten first. Then add the two rounded prices.",
              example: "$12 + $37: round to $10 + $40 = about $50.",
            },
            explain: "$23 → $20 and $58 → $60. Estimate: 20 + 60 = $80. The exact total, $81, is right next door!",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which equation matches this problem?",
            passage: "Space movie tickets cost $6 each. Ana buys 7 tickets and pays with $50. How much money does she have left, m?",
            options: ["50 − 6 × 7 = m", "50 + 6 × 7 = m", "6 × 7 = m", "50 − 6 = m"],
            answer: 0,
            hints: {
              verbal: "Step 1: the tickets cost 6 × 7 dollars. Step 2: she has money LEFT, so subtract that cost from 50.",
              example: "Paying $20 for 3 toys at $5 each: 20 − 3 × 5 = money left.",
              narrow: [1],
            },
            explain: "The tickets cost 6 × 7 = $42, and 'left' means subtract: 50 − 42 = $8. So 50 − 6 × 7 = m.",
          },
          {
            id: "q8", type: "tf",
            prompt: "True or false: Sam's answer makes sense.",
            passage: "Sam solves 96 ÷ 3 and gets 32. To check, he estimates: 90 ÷ 3 = 30.",
            answer: true,
            hints: {
              verbal: "Compare Sam's exact answer, 32, with his estimate, 30. Are they close together or far apart?",
              example: "An exact answer of 21 makes sense when the estimate is 20 — they're close.",
            },
            explain: "True! 32 is very close to the estimate of 30, so Sam's answer passes the sense check.",
          },
        ],
      },
    },
  ],
});
