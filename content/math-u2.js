/* Unit 2 — Strategy Station (3.OA.5, 3.OA.7, 3.OA.9)
   The strategy unit: properties, break-apart, patterns, and fact fluency. */
window.COURSE_CONTENT.push({
  id: "math-u2",
  subject: "math",
  order: 2,
  title: "Strategy Station",
  subtitle: "Tricks that make multiplying easy",
  planet: { emoji: "🛰️", color: "#5AA9FF" },
  badgeName: "Strategy Station Star",
  modules: [

    /* ============ M1 — Property Power (3.OA.5) ============ */
    {
      id: "math-u2-m1",
      title: "Property Power",
      icon: "🔧",
      standard: "3.OA.5",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Strategy Station!",
          html: `
            <p>Cadet, welcome aboard Strategy Station — my floating tool shop! 🛰️</p>
            <p>Here we don't work harder. We work <b>smarter</b>. Remember the <b>Flip Trick</b> from Multiplication Planet?</p>
            <div class="big-visual">3 × 8 &nbsp;=&nbsp; 8 × 3 &nbsp;=&nbsp; 24</div>
            <p>Flipping the factors never changes the product. That trick was just your FIRST tool. Today we add more!</p>
            <div class="callout"><b>Remember:</b> The Flip Trick works because turning an array sideways doesn't change how many things are in it.</div>`,
          narration: "Cadet, welcome aboard Strategy Station. My floating tool shop! Here we don't work harder. We work smarter. Remember the Flip Trick from Multiplication Planet? 3 times 8 equals 8 times 3 equals 24. Flipping the factors never changes the product. That trick was just your first tool. Today we add more!",
        },
        {
          id: "s2",
          title: "The Grouping Trick",
          html: `
            <p>New tool! When you multiply <b>three</b> numbers, you can group them <u>any way you like</u>.</p>
            <p>Try 2 × 3 × 4. Watch both paths:</p>
            <table>
              <tr><th>Path 1</th><th>Path 2</th></tr>
              <tr><td>(2 × 3) × 4</td><td>2 × (3 × 4)</td></tr>
              <tr><td>6 × 4 = 24</td><td>2 × 12 = 24</td></tr>
            </table>
            <p>Same answer both ways! 🎉</p>
            <div class="callout"><b>The Grouping Trick:</b> Group the factors any way — the product stays the same. Grown-ups call this the <b>associative property</b>.</div>`,
          narration: "New tool! When you multiply three numbers, you can group them any way you like. Try 2 times 3 times 4. Path 1: do 2 times 3 first. That's 6. Then 6 times 4 is 24. Path 2: do 3 times 4 first. That's 12. Then 2 times 12 is 24. Same answer both ways! The Grouping Trick: group the factors any way. The product stays the same. Grown-ups call this the associative property.",
        },
        {
          id: "s3",
          title: "The One Rule and the Zero Rule",
          html: `
            <p>Two more tools — and they're the easiest ones on the station!</p>
            <p><b>The One Rule:</b> multiplying by 1 changes nothing. It's a mirror! 🪞</p>
            <div class="big-visual">
              <div class="vis-row">🚀 group of 7 &nbsp;→&nbsp; 1 × 7 = 7</div>
            </div>
            <p><b>The Zero Rule:</b> multiplying by 0 makes everything vanish! 💨</p>
            <div class="big-visual">
              <div class="vis-row">0 groups of 7 &nbsp;→&nbsp; 0 × 7 = 0</div>
            </div>
            <div class="callout"><b>Remember:</b> Any number × 1 is itself. Any number × 0 is 0. Every time!</div>`,
          narration: "Two more tools. And they're the easiest ones on the station! The One Rule: multiplying by 1 changes nothing. It's a mirror! 1 group of 7 is just 7. So 1 times 7 equals 7. The Zero Rule: multiplying by 0 makes everything vanish! 0 groups of 7 is nothing at all. So 0 times 7 equals 0. Any number times 1 is itself. Any number times 0 is 0. Every time!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Let's use the Grouping Trick on a tricky one: <b>2 × 7 × 5</b>.</p>
            <p>Step 1: Look for a friendly pair. Hmm... 2 × 5 = 10. Tens are EASY!</p>
            <p>Step 2: Group the friendly pair first:</p>
            <div class="big-visual">2 × 7 × 5 &nbsp;=&nbsp; (2 × 5) × 7</div>
            <p>Step 3: Solve! 2 × 5 = <b>10</b>, then 10 × 7 = <b>70</b>. Done! ⚡</p>
            <div class="callout"><b>Smart move:</b> Hunt for pairs that make 10 — they turn hard problems into easy ones.</div>`,
          narration: "Let's use the Grouping Trick on a tricky one. 2 times 7 times 5. Step 1: look for a friendly pair. 2 times 5 is 10. Tens are easy! Step 2: group the friendly pair first. Step 3: solve! 2 times 5 is 10, then 10 times 7 is 70. Done! Smart move: hunt for pairs that make 10. They turn hard problems into easy ones.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Your toolbox is filling up, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can use the Flip Trick: 3 × 8 = 8 × 3.</p>
              <p>✔️ I can group three factors any way I like.</p>
              <p>✔️ I know the One Rule and the Zero Rule.</p>
            </div>
            <p>Quiz time — show me that Property Power! 🔧</p>`,
          narration: "Your toolbox is filling up, Cadet! You can now say: I can use the Flip Trick. I can group three factors any way I like. I know the One Rule and the Zero Rule. Quiz time. Show me that Property Power!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation shows the <b>Flip Trick</b>?",
            options: ["9 × 4 = 4 × 9", "9 × 4 = 9 + 4", "9 × 4 = 9 × 9", "9 × 4 = 4 × 4"],
            answer: 0,
            hints: {
              verbal: "The Flip Trick swaps the two factors but keeps the same product.",
              example: "The flip partner of 2 × 7 is 7 × 2 — same product, 14.",
              narrow: [1],
            },
            explain: "The Flip Trick swaps the factors: 9 × 4 = 4 × 9. Both equal 36.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which shows the <b>Grouping Trick</b> for 2 × 3 × 4?",
            options: ["(2 × 3) × 4 = 2 × (3 × 4)", "(2 × 3) × 4 = 2 + 3 + 4", "2 × 3 × 4 = 2 × 3 + 4", "(2 × 3) × 4 = (2 × 4) + 3"],
            answer: 0,
            hints: {
              verbal: "The Grouping Trick keeps all three factors and just moves the parentheses.",
              example: "(5 × 2) × 3 and 5 × (2 × 3) both equal 30 — grouped differently, same product.",
              narrow: [2],
            },
            explain: "Grouping doesn't change the product: both paths give 24.",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Use the One Rule: 1 × 8 = ?",
            answer: 8,
            hints: {
              verbal: "The One Rule says multiplying by 1 changes nothing — it's a mirror.",
              example: "1 × 5 = 5. One group of 5 is just 5.",
            },
            explain: "One group of 8 is just 8. So 1 × 8 = 8.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: Any number times 0 equals 0.",
            answer: true,
            hints: {
              verbal: "Think about 0 groups of something. How many things do you have?",
              example: "0 × 7 means 0 groups of 7 rockets — no rockets at all: 0.",
            },
            explain: "True! Zero groups of anything is nothing. Any number × 0 = 0.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Zip wants to solve 2 × 6 × 5 the EASY way. Which pair should he group first?",
            options: ["2 × 5, because it makes 10", "6 × 5, because 6 comes first", "2 × 6, because they're small", "None — grouping changes the answer"],
            answer: 0,
            hints: {
              verbal: "Hunt for a friendly pair that makes 10 — then the last step is super easy.",
              example: "For 2 × 9 × 5, group (2 × 5) = 10 first, then 10 × 9 = 90.",
              narrow: [3],
            },
            explain: "Group (2 × 5) = 10 first, then 10 × 6 = 60. Tens make it easy!",
          },
          {
            id: "q6", type: "numeric",
            prompt: "Use the Grouping Trick: 5 × 2 × 3 = ?",
            answer: 30,
            hints: {
              verbal: "Group 5 × 2 first to make 10. Then multiply by 3.",
              example: "For 5 × 2 × 4: (5 × 2) = 10, then 10 × 4 = 40.",
            },
            explain: "(5 × 2) × 3 = 10 × 3 = 30. Friendly tens for the win!",
          },
          {
            id: "q7", type: "mc",
            prompt: "Nova knows 7 × 6 = 42 but is stuck on 6 × 7. What should she do?",
            passage: "Nova is practicing her facts. She has 7 × 6 = 42 memorized, but 6 × 7 is not on her list yet.",
            options: ["Use the Flip Trick — it's also 42", "Add 6 + 7 to get 13", "Start over and count every dot", "Use the Zero Rule to get 0"],
            answer: 0,
            hints: {
              verbal: "6 × 7 uses the same two factors as 7 × 6, just in a different order.",
              example: "Knowing 4 × 9 = 36 means 9 × 4 = 36 for free.",
              narrow: [1],
            },
            explain: "The Flip Trick! Same factors, same product: 6 × 7 = 42.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Which equation is <b>NOT true</b>?",
            options: ["0 × 9 = 9", "1 × 9 = 9", "9 × 0 = 0", "9 × 1 = 9"],
            answer: 0,
            hints: {
              verbal: "Check each one with the One Rule and the Zero Rule. Multiplying by 0 makes things vanish!",
              example: "0 × 4 = 0 (vanish!) and 1 × 4 = 4 (mirror!).",
              narrow: [2],
            },
            explain: "0 × 9 should be 0, not 9 — zero groups of 9 is nothing at all.",
          },
        ],
      },
    },

    /* ============ M2 — The Break-Apart Trick (3.OA.5) ============ */
    {
      id: "math-u2-m2",
      title: "The Break-Apart Trick",
      icon: "✂️",
      standard: "3.OA.5",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Scariest Fact on the Station",
          html: `
            <p>Cadet, some facts look BIG and scary. Like this one:</p>
            <div class="big-visual">6 × 7 = ?</div>
            <p>Don't run! I keep a secret tool for facts like this — my space scissors. ✂️</p>
            <p>We're going to <b>snip</b> the hard number into two <u>easy</u> pieces. Ready to see the trick?</p>`,
          narration: "Cadet, some facts look big and scary. Like 6 times 7. Don't run! I keep a secret tool for facts like this. My space scissors. We're going to snip the hard number into two easy pieces. Ready to see the trick?",
        },
        {
          id: "s2",
          title: "Snip the Array!",
          html: `
            <p>Here's 6 rows of 7 as an array. Now — SNIP! We cut every row into <b>5 + 2</b>:</p>
            <div class="big-visual">
              <div class="vis-row">🟦🟦🟦🟦🟦 ✂️ 🟨🟨</div>
              <div class="vis-row">🟦🟦🟦🟦🟦 ✂️ 🟨🟨</div>
              <div class="vis-row">🟦🟦🟦🟦🟦 ✂️ 🟨🟨</div>
              <div class="vis-row">🟦🟦🟦🟦🟦 ✂️ 🟨🟨</div>
              <div class="vis-row">🟦🟦🟦🟦🟦 ✂️ 🟨🟨</div>
              <div class="vis-row">🟦🟦🟦🟦🟦 ✂️ 🟨🟨</div>
            </div>
            <p>Now we have two EASY problems: <b>6 × 5 = 30</b> and <b>6 × 2 = 12</b>.</p>
            <div class="big-visual">6 × 7 &nbsp;=&nbsp; 6 × 5 + 6 × 2 &nbsp;=&nbsp; 30 + 12 &nbsp;=&nbsp; 42</div>
            <div class="callout"><b>The Break-Apart Trick:</b> Snip a hard factor into two easy ones, multiply each piece, then add. Grown-ups call this the <b>distributive property</b>.</div>`,
          narration: "Here's 6 rows of 7 as an array. Now, snip! We cut every row into 5 plus 2. Now we have two easy problems. 6 times 5 is 30. And 6 times 2 is 12. Add the pieces: 30 plus 12 is 42. So 6 times 7 equals 42. The Break-Apart Trick: snip a hard factor into two easy ones, multiply each piece, then add. Grown-ups call this the distributive property.",
        },
        {
          id: "s3",
          title: "Watch Me Snip Another One",
          html: `
            <p>Let's do <b>8 × 6</b> together. I'll snip the 6 into <b>5 + 1</b>:</p>
            <table>
              <tr><th>Snip</th><th>Multiply each piece</th><th>Add</th></tr>
              <tr><td>6 = 5 + 1</td><td>8 × 5 = 40<br>8 × 1 = 8</td><td>40 + 8 = 48</td></tr>
            </table>
            <div class="big-visual">8 × 6 = 48 ✔️</div>
            <p>Which pieces should you snip to? Easy ones! Fives, twos, ones, and tens are great pieces.</p>
            <div class="callout"><b>Remember:</b> The pieces must add back up to the number you snipped. 5 + 1 = 6. ✔️</div>`,
          narration: "Let's do 8 times 6 together. I'll snip the 6 into 5 plus 1. Multiply each piece. 8 times 5 is 40. 8 times 1 is 8. Add. 40 plus 8 is 48. So 8 times 6 equals 48. Which pieces should you snip to? Easy ones! Fives, twos, ones, and tens are great pieces. Remember: the pieces must add back up to the number you snipped. 5 plus 1 is 6.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Your turn to hold the scissors! Let's solve <b>4 × 8</b>.</p>
            <p>Step 1: Snip the 8 into two easy pieces: <b>5 + 3</b>.</p>
            <p>Step 2: Multiply each piece: 4 × 5 = <b>20</b> and 4 × 3 = <b>12</b>.</p>
            <p>Step 3: Add the pieces back together:</p>
            <div class="big-visual">4 × 8 &nbsp;=&nbsp; 20 + 12 &nbsp;=&nbsp; 32</div>
            <p>You just tamed a hard fact with two easy ones. Snip snip! ✂️</p>`,
          narration: "Your turn to hold the scissors! Let's solve 4 times 8. Step 1: snip the 8 into two easy pieces. 5 plus 3. Step 2: multiply each piece. 4 times 5 is 20, and 4 times 3 is 12. Step 3: add the pieces back together. 20 plus 12 is 32. So 4 times 8 equals 32. You just tamed a hard fact with two easy ones. Snip snip!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Scissors down, Cadet — you've mastered the snip! You can now say:</p>
            <div class="callout">
              <p>✔️ I can break a hard factor into two easy ones.</p>
              <p>✔️ I can multiply each piece and add: 6 × 7 = 30 + 12 = 42.</p>
              <p>✔️ I can check that my pieces add back to the factor I snipped.</p>
            </div>
            <p>Time to snip your way through the quiz! ✂️</p>`,
          narration: "Scissors down, Cadet. You've mastered the snip! You can now say: I can break a hard factor into two easy ones. I can multiply each piece and add. I can check that my pieces add back to the factor I snipped. Time to snip your way through the quiz!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "To break apart the 7 in 6 × 7, which snip works?",
            options: ["5 + 2", "5 + 3", "4 + 4", "7 + 1"],
            answer: 0,
            hints: {
              verbal: "The two pieces must add back up to exactly 7.",
              example: "To snip a 6, you could use 5 + 1 — because 5 + 1 = 6.",
              narrow: [1],
            },
            explain: "5 + 2 = 7, so it's a perfect snip. The other pairs don't add to 7.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which shows the <b>Break-Apart Trick</b> for 6 × 7?",
            options: ["6 × 5 + 6 × 2", "6 × 5 + 2", "6 + 5 + 2", "6 × 5 × 2"],
            answer: 0,
            hints: {
              verbal: "After the snip, BOTH pieces get multiplied by 6. Then you add.",
              example: "4 × 6 snipped as 5 + 1 becomes 4 × 5 + 4 × 1.",
              narrow: [1],
            },
            explain: "Snip 7 into 5 + 2, multiply each piece by 6: 6 × 5 + 6 × 2 = 30 + 12 = 42.",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Finish the trick: 6 × 7 = 6 × 5 + 6 × 2 = 30 + 12 = ?",
            answer: 42,
            hints: {
              verbal: "Both pieces are done — just add 30 and 12.",
              example: "For 20 + 15, add the tens then the ones: 35.",
            },
            explain: "30 + 12 = 42. So 6 × 7 = 42. The pieces always add back up!",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: 7 × (1 + 8) is equal to 7 × 9.",
            answer: true,
            hints: {
              verbal: "What does 1 + 8 make? If the pieces add back to 9, the two expressions match.",
              example: "6 × (5 + 2) equals 6 × 7, because 5 + 2 = 7.",
            },
            explain: "True! 1 + 8 = 9, so 7 × (1 + 8) is just 7 × 9 snipped into pieces.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which expression is equal to 9 × 7?",
            options: ["9 × (5 + 2)", "9 × (5 + 4)", "(9 + 5) × 2", "9 × 5 + 2"],
            answer: 0,
            hints: {
              verbal: "Check the pieces inside the parentheses. Do they add back up to 7?",
              example: "8 × (5 + 3) equals 8 × 8, because 5 + 3 = 8.",
              narrow: [1],
            },
            explain: "5 + 2 = 7, so 9 × (5 + 2) = 9 × 7 = 63. In 9 × (5 + 4) the pieces make 9, not 7.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "Use the Break-Apart Trick: 4 × 7 = 4 × 5 + 4 × 2 = ?",
            answer: 28,
            hints: {
              verbal: "Solve each piece first: 4 × 5 and 4 × 2. Then add them.",
              example: "3 × 7 = 3 × 5 + 3 × 2 = 15 + 6 = 21.",
            },
            explain: "4 × 5 = 20 and 4 × 2 = 8. Add: 20 + 8 = 28. So 4 × 7 = 28.",
          },
          {
            id: "q7", type: "mc",
            prompt: "The rocket theater has 6 rows with 8 seats in each row. Kai snips the 8 into 5 + 3. Which shows his math?",
            passage: "Kai wants to count all the seats fast. He knows his fives and threes really well, so he snips the 8 into 5 + 3.",
            options: ["6 × 5 + 6 × 3 = 30 + 18 = 48", "6 × 5 + 3 = 30 + 3 = 33", "6 + 5 + 3 = 14", "6 × 5 × 3 = 90"],
            answer: 0,
            hints: {
              verbal: "Both pieces — the 5 AND the 3 — get multiplied by 6 rows. Then add.",
              example: "5 rows of 7 seats, snipped 5 + 2: 5 × 5 + 5 × 2 = 25 + 10 = 35.",
              narrow: [1],
            },
            explain: "Each row's 8 seats split into 5 + 3, so it's 6 × 5 + 6 × 3 = 30 + 18 = 48 seats.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Snip it yourself, Cadet: 8 × 7 = ? (Try 8 × 5 + 8 × 2.)",
            answer: 56,
            hints: {
              verbal: "8 × 5 = 40 and 8 × 2 = 16. Now add the two pieces.",
              example: "7 × 7 = 7 × 5 + 7 × 2 = 35 + 14 = 49.",
            },
            explain: "8 × 5 = 40 and 8 × 2 = 16. Add: 40 + 16 = 56. So 8 × 7 = 56!",
          },
        ],
      },
    },

    /* ============ M3 — Pattern Hunters (3.OA.9) ============ */
    {
      id: "math-u2-m3",
      title: "Pattern Hunters",
      icon: "🔍",
      standard: "3.OA.9",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Multiplication Table Has Secrets",
          html: `
            <p>Grab your magnifying glass, Cadet — we're going pattern hunting! 🔍</p>
            <p>Look at the products of 4:</p>
            <div class="big-visual">4, 8, 12, 16, 20, 24, 28...</div>
            <p>Notice anything? Every single one is <b>even</b>! Not sometimes. <u>Always</u>.</p>
            <p>The multiplication table is FULL of hidden patterns like this. Hunters who spot them can predict answers before they even multiply!</p>`,
          narration: "Grab your magnifying glass, Cadet. We're going pattern hunting! Look at the products of 4. 4, 8, 12, 16, 20, 24, 28. Notice anything? Every single one is even! Not sometimes. Always. The multiplication table is full of hidden patterns like this. Hunters who spot them can predict answers before they even multiply!",
        },
        {
          id: "s2",
          title: "The Even and Odd Rules",
          html: `
            <p>Why is 4 × anything even? Because <b>even numbers split into pairs</b> — and groups of pairs stay paired!</p>
            <div class="big-visual">
              <div class="vis-row">👟👟 &nbsp; 👟👟 &nbsp; 👟👟</div>
            </div>
            <p>3 × 2 = 6 — all in pairs, no shoe left out. That's even!</p>
            <table>
              <tr><th>Factors</th><th>Product</th></tr>
              <tr><td>even × even</td><td>even</td></tr>
              <tr><td>even × odd</td><td>even</td></tr>
              <tr><td>odd × odd</td><td>odd</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> If EITHER factor is even, the product is even. Only odd × odd makes an odd product.</div>`,
          narration: "Why is 4 times anything even? Because even numbers split into pairs. And groups of pairs stay paired! 3 times 2 is 6. All in pairs, no shoe left out. That's even! Here are the rules. Even times even is even. Even times odd is even. Odd times odd is odd. If either factor is even, the product is even. Only odd times odd makes an odd product.",
        },
        {
          id: "s3",
          title: "The 5s and 9s Columns",
          html: `
            <p>More treasure in the table! Look at the <b>5s column</b>:</p>
            <div class="big-visual">5, 10, 15, 20, 25, 30...</div>
            <p>Every product of 5 ends in <b>0 or 5</b>. Every time!</p>
            <p>Now the <b>9s column</b> — this one is magic:</p>
            <div class="big-visual">9, 18, 27, 36, 45, 54...</div>
            <p>Add the digits of each one: 1+8 = 9. 2+7 = 9. 3+6 = 9. They ALL add to 9!</p>
            <div class="callout"><b>Bonus 9s clue:</b> In 9 × 6 = 54, the tens digit (5) is one less than the factor (6). That works all the way down the column!</div>`,
          narration: "More treasure in the table! Look at the 5s column. 5, 10, 15, 20, 25, 30. Every product of 5 ends in 0 or 5. Every time! Now the 9s column. This one is magic. 9, 18, 27, 36, 45, 54. Add the digits of each one. 1 plus 8 is 9. 2 plus 7 is 9. 3 plus 6 is 9. They all add to 9! Bonus 9s clue: in 9 times 6 equals 54, the tens digit 5 is one less than the factor 6. That works all the way down the column!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Let's hunt down <b>9 × 7</b> using ONLY patterns. No counting!</p>
            <p>Clue 1: The tens digit is one less than 7 → the answer starts with <b>6</b>.</p>
            <p>Clue 2: The digits must add to 9 → 6 + ? = 9 → the ones digit is <b>3</b>.</p>
            <div class="big-visual">9 × 7 = 63 🕵️</div>
            <p>Clue 3: Check with the even-odd rule! Odd × odd should be odd... and 63 IS odd. Case closed!</p>`,
          narration: "Let's hunt down 9 times 7 using only patterns. No counting! Clue 1: the tens digit is one less than 7. So the answer starts with 6. Clue 2: the digits must add to 9. 6 plus what makes 9? The ones digit is 3. 9 times 7 is 63! Clue 3: check with the even-odd rule. Odd times odd should be odd. And 63 is odd. Case closed!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Sharp eyes, detective! You can now say:</p>
            <div class="callout">
              <p>✔️ I can tell if a product will be even or odd before I multiply.</p>
              <p>✔️ I can spot the patterns in the 5s and 9s columns.</p>
              <p>✔️ I can explain a pattern — like why 4 × anything is even.</p>
            </div>
            <p>Take your magnifying glass into the quiz! 🔍</p>`,
          narration: "Sharp eyes, detective! You can now say: I can tell if a product will be even or odd before I multiply. I can spot the patterns in the 5s and 9s columns. I can explain a pattern, like why 4 times anything is even. Take your magnifying glass into the quiz!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "The products of which numbers are <b>always even</b>?",
            options: ["All of them — 4, 6, and 8", "Only 4", "Only 6", "Only 8"],
            answer: 0,
            hints: {
              verbal: "4, 6, and 8 are all even numbers. What does an even factor do to the product?",
              example: "6 × 3 = 18, 6 × 5 = 30 — an even factor keeps every product even.",
              narrow: [1],
            },
            explain: "4, 6, and 8 are all even, and any even factor makes the whole product even.",
          },
          {
            id: "q2", type: "tf",
            prompt: "True or false: An even number times an even number is always even.",
            answer: true,
            hints: {
              verbal: "Even numbers split into pairs. Do groups of pairs stay in pairs?",
              example: "4 × 6 = 24, 2 × 8 = 16 — even every time.",
            },
            explain: "True! Even × even is always even — everything stays in pairs.",
          },
          {
            id: "q3", type: "mc",
            prompt: "An <b>odd</b> number times an <b>odd</b> number makes a product that is...",
            options: ["Always odd", "Always even", "Sometimes odd, sometimes even", "Always zero"],
            answer: 0,
            hints: {
              verbal: "Try a few: 3 × 5, 7 × 9, 1 × 3. What do all the products have in common?",
              example: "3 × 5 = 15 and 7 × 3 = 21 — both odd.",
              narrow: [2],
            },
            explain: "Odd × odd is the ONLY combo that makes an odd product: 3 × 5 = 15, 7 × 9 = 63.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Every product of 5 ends in which digits?",
            options: ["0 or 5", "Always 0", "1 or 5", "Any digit"],
            answer: 0,
            hints: {
              verbal: "Skip count by 5 and watch the last digit: 5, 10, 15, 20...",
              example: "5 × 3 = 15 ends in 5. 5 × 4 = 20 ends in 0.",
              narrow: [1],
            },
            explain: "The 5s column goes 5, 10, 15, 20... — the ones digit is always 0 or 5.",
          },
          {
            id: "q5", type: "numeric",
            prompt: "Use the 9s clues: the tens digit of 9 × 4 is one less than 4, and the digits add to 9. What is 9 × 4?",
            answer: 36,
            hints: {
              verbal: "One less than 4 is 3, so the answer starts with 3. Then 3 + ? = 9.",
              example: "For 9 × 6: tens digit is 5, and 5 + 4 = 9, so 9 × 6 = 54.",
            },
            explain: "Tens digit 3, and 3 + 6 = 9, so the ones digit is 6. 9 × 4 = 36!",
          },
          {
            id: "q6", type: "mc",
            prompt: "Which number could be a product of 9? (Hint: use the digit-sum pattern!)",
            options: ["63", "56", "65", "34"],
            answer: 0,
            hints: {
              verbal: "Add the two digits of each choice. A product of 9 has digits that add to 9.",
              example: "27 is a product of 9 because 2 + 7 = 9.",
              narrow: [2],
            },
            explain: "6 + 3 = 9, so 63 fits the 9s pattern — and 9 × 7 = 63!",
          },
          {
            id: "q7", type: "mc",
            prompt: "Before multiplying, Luna says 6 × 7 will be <b>even</b>. Is she right, and why?",
            options: [
              "Yes — one factor (6) is even, so the product is even",
              "Yes — because 7 is odd, the product is even",
              "No — 7 is odd, so the product is odd",
              "No — products can't be even",
            ],
            answer: 0,
            hints: {
              verbal: "Check the table of rules: even × odd makes what?",
              example: "4 × 5 = 20 — one even factor made the product even.",
              narrow: [2],
            },
            explain: "Right! If either factor is even, the product is even. 6 × 7 = 42 — even.",
          },
          {
            id: "q8", type: "mc",
            prompt: "WHY is 4 × anything always even?",
            options: [
              "4 is even, so the groups split into pairs with none left over",
              "4 is lucky, so its answers are even",
              "Because 4 is bigger than 2",
              "It isn't always — 4 × 5 is odd",
            ],
            answer: 0,
            hints: {
              verbal: "Think about what 'even' means: everything can pair up with no leftovers.",
              example: "4 × 3 is 3 groups of 4, and each 4 is two pairs — so everything pairs up: 12.",
              narrow: [3],
            },
            explain: "4 splits into pairs, so any number of 4s still splits into pairs — that's what even means! (And 4 × 5 = 20 is even.)",
          },
        ],
      },
    },

    /* ============ M4 — Fact Fluency Blast (3.OA.7) ============ */
    {
      id: "math-u2-m4",
      title: "Fact Fluency Blast",
      icon: "⚡",
      standard: "3.OA.7",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Speed Run Begins!",
          html: `
            <p>This is it, Cadet — the final challenge of Strategy Station: the <b>Fact Fluency Speed Run</b>! ⚡</p>
            <p>Don't worry — there's <u>no timer</u>. A speed run isn't about rushing. It's about picking the <b>right tool fast</b>.</p>
            <div class="big-visual">🔧 ✂️ 🔍 👨‍👩‍👧‍👦 🖐️</div>
            <p>You've collected a whole toolbox on this station. Let's line up the tools before we blast off!</p>`,
          narration: "This is it, Cadet. The final challenge of Strategy Station. The Fact Fluency Speed Run! Don't worry. There's no timer. A speed run isn't about rushing. It's about picking the right tool fast. You've collected a whole toolbox on this station. Let's line up the tools before we blast off!",
        },
        {
          id: "s2",
          title: "Your Strategy Toolbox",
          html: `
            <p>Every fact has a tool that makes it easy. Here's your full kit:</p>
            <table>
              <tr><th>Tool</th><th>When to use it</th></tr>
              <tr><td>Skip counting</td><td>2s, 5s, 10s: 5, 10, 15...</td></tr>
              <tr><td>Flip Trick</td><td>8 × 2? Flip to 2 × 8!</td></tr>
              <tr><td>Break-Apart</td><td>6 × 7 = 6 × 5 + 6 × 2</td></tr>
              <tr><td>Fact family</td><td>42 ÷ 6? Think 6 × ? = 42</td></tr>
              <tr><td>9s pattern</td><td>9 × 6: tens digit 5, digits add to 9 → 54</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Division facts hide inside multiplication facts. Knowing 8 × 5 = 40 means 40 ÷ 5 = 8 for free!</div>`,
          narration: "Every fact has a tool that makes it easy. Here's your full kit. Skip counting for 2s, 5s, and 10s. The Flip Trick: 8 times 2? Flip to 2 times 8! Break-Apart: 6 times 7 is 6 times 5 plus 6 times 2. Fact family: 42 divided by 6? Think 6 times what is 42. And the 9s pattern. Remember: division facts hide inside multiplication facts. Knowing 8 times 5 is 40 means 40 divided by 5 is 8 for free!",
        },
        {
          id: "s3",
          title: "Watch a Pro Pick Tools",
          html: `
            <p>Watch me speed-run two facts by grabbing the right tool:</p>
            <p><b>Fact 1: 8 × 7.</b> Hmm, big! Grab the scissors ✂️ — snip 7 into 5 + 2:</p>
            <div class="big-visual">8 × 5 + 8 × 2 = 40 + 16 = 56</div>
            <p><b>Fact 2: 54 ÷ 9.</b> Division? Grab the fact family tool 👨‍👩‍👧‍👦 — think backwards:</p>
            <div class="big-visual">9 × ? = 54 &nbsp;→&nbsp; 9 × 6 = 54 &nbsp;→&nbsp; 54 ÷ 9 = 6</div>
            <p>Right tool, easy fact. Every time! 😎</p>`,
          narration: "Watch me speed-run two facts by grabbing the right tool. Fact 1: 8 times 7. Big! Grab the scissors. Snip 7 into 5 plus 2. 8 times 5 is 40, plus 8 times 2 is 16. That's 56. Fact 2: 54 divided by 9. Division? Grab the fact family tool. Think backwards. 9 times what is 54? 9 times 6 is 54. So 54 divided by 9 is 6. Right tool, easy fact. Every time!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Your turn! Solve <b>6 × 8</b> two different ways and see if they match.</p>
            <p><b>Way 1 — Break-Apart:</b> snip 8 into 5 + 3.<br>
            6 × 5 = 30 and 6 × 3 = 18. Add: 30 + 18 = <b>48</b>.</p>
            <p><b>Way 2 — Flip and skip:</b> flip to 8 × 6 and skip count by 6s:<br>
            6, 12, 18, 24, 30, 36, 42, <b>48</b>.</p>
            <div class="big-visual">6 × 8 = 48 ✔️✔️</div>
            <div class="callout"><b>Remember:</b> If two tools give the same answer, you KNOW it's right!</div>`,
          narration: "Your turn! Solve 6 times 8 two different ways and see if they match. Way 1: Break-Apart. Snip 8 into 5 plus 3. 6 times 5 is 30, and 6 times 3 is 18. Add: 30 plus 18 is 48. Way 2: flip to 8 times 6 and skip count by 6s. 6, 12, 18, 24, 30, 36, 42, 48. Both ways say 48! If two tools give the same answer, you know it's right!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Toolbox loaded, engines hot! You can now say:</p>
            <div class="callout">
              <p>✔️ I can pick a smart strategy for any fact within 100.</p>
              <p>✔️ I can use multiplication to solve division, like 42 ÷ 6 = 7.</p>
              <p>✔️ I can check an answer by solving it a second way.</p>
            </div>
            <p>The Speed Run quiz is waiting. No timer — just you and your tools. Blast off! ⚡🚀</p>`,
          narration: "Toolbox loaded, engines hot! You can now say: I can pick a smart strategy for any fact within 100. I can use multiplication to solve division. I can check an answer by solving it a second way. The Speed Run quiz is waiting. No timer. Just you and your tools. Blast off!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "numeric",
            prompt: "Speed Run #1: 6 × 7 = ?",
            answer: 42,
            hints: {
              verbal: "Grab the scissors! Snip 7 into 5 + 2, multiply each piece by 6, then add.",
              example: "6 × 6 = 6 × 5 + 6 × 1 = 30 + 6 = 36.",
            },
            explain: "6 × 5 = 30 and 6 × 2 = 12, so 6 × 7 = 42.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Speed Run #2: 8 × 5 = ?",
            options: ["40", "45", "35", "13"],
            answer: 0,
            hints: {
              verbal: "Skip count by 5 eight times — or remember that products of 5 end in 0 or 5.",
              example: "6 × 5: skip count 5, 10, 15, 20, 25, 30.",
              narrow: [1],
            },
            explain: "Skip count by 5: 5, 10, 15, 20, 25, 30, 35, 40. So 8 × 5 = 40.",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Speed Run #3: 8 × 8 = ?",
            answer: 64,
            hints: {
              verbal: "Snip one 8 into 5 + 3: 8 × 5 = 40 and 8 × 3 = 24. Add them.",
              example: "7 × 7 = 7 × 5 + 7 × 2 = 35 + 14 = 49.",
            },
            explain: "8 × 5 = 40 and 8 × 3 = 24. Add: 40 + 24 = 64. So 8 × 8 = 64.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Speed Run #4: 42 ÷ 6 = ?",
            options: ["7", "6", "8", "36"],
            answer: 0,
            hints: {
              verbal: "Use the fact family tool: 6 × what = 42?",
              example: "For 20 ÷ 4, think 4 × 5 = 20, so 20 ÷ 4 = 5.",
              narrow: [2],
            },
            explain: "6 × 7 = 42, so 42 ÷ 6 = 7. The fact family did the work!",
          },
          {
            id: "q5", type: "numeric",
            prompt: "Speed Run #5: 72 ÷ 9 = ?",
            answer: 8,
            hints: {
              verbal: "Think 9 × what = 72. Use the 9s pattern: the tens digit of the product is one less than the factor.",
              example: "For 54 ÷ 9: 9 × 6 = 54, so 54 ÷ 9 = 6.",
            },
            explain: "9 × 8 = 72 (and 7 + 2 = 9 — the pattern checks out!). So 72 ÷ 9 = 8.",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: If you know 8 × 5 = 40, then you also know 40 ÷ 5 = 8.",
            answer: true,
            hints: {
              verbal: "Multiplication and division are fact family partners — same three numbers.",
              example: "Knowing 6 × 4 = 24 means 24 ÷ 4 = 6 comes free.",
            },
            explain: "True! 8, 5, and 40 are one fact family, so one fact unlocks the other.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Rex is stuck on 7 × 8. Which tool would work best?",
            options: [
              "Break-Apart: 7 × 5 + 7 × 3",
              "The Zero Rule: the answer is 0",
              "Adding: 7 + 8 = 15",
              "The One Rule: the answer is 8",
            ],
            answer: 0,
            hints: {
              verbal: "There's no 0 or 1 in this fact — which tool snips a hard factor into easy pieces?",
              example: "For 6 × 7, Break-Apart gives 6 × 5 + 6 × 2 = 42.",
              narrow: [2],
            },
            explain: "Break-Apart! 7 × 5 = 35 and 7 × 3 = 21, so 7 × 8 = 35 + 21 = 56.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Final blast, Cadet: 9 × 7 = ?",
            answer: 63,
            hints: {
              verbal: "Use the 9s pattern: the tens digit is one less than 7, and the digits add to 9.",
              example: "9 × 4: tens digit 3, and 3 + 6 = 9, so 36.",
            },
            explain: "Tens digit 6, ones digit 3 (6 + 3 = 9): 9 × 7 = 63. Speed Run complete! ⚡",
          },
        ],
      },
    },
  ],
});
