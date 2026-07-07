/* Unit 3 — Big Number Base (3.NBT.1, 3.NBT.2, 3.NBT.3)
   Place-value power: rounding, adding and subtracting to 1,000, multiplying by tens. */
window.COURSE_CONTENT.push({
  id: "math-u3",
  subject: "math",
  order: 3,
  title: "Big Number Base",
  subtitle: "Rounding and numbers up to 1,000",
  planet: { emoji: "🌕", color: "#A78BFA" },
  badgeName: "Big Number Base Star",
  modules: [

    /* ============ M1 — Rounding Rockets (3.NBT.1) ============ */
    {
      id: "math-u3-m1",
      title: "Rounding Rockets",
      icon: "🎯",
      standard: "3.NBT.1",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Big Number Base!",
          html: `
            <p>Cadet, welcome to Big Number Base — the moon station where BIG numbers live!</p>
            <p>Mission Control just called: "About how many fuel cells do we have?" We have <b>37</b>. But Mission Control doesn't need the exact number — they want a nice, easy number that's <u>close</u>.</p>
            <div class="big-visual">37 is close to 40</div>
            <p>Finding the close, friendly number is called <b>rounding</b>. Let's learn how rockets do it!</p>
            <div class="vocab"><b>rounding</b> — trading an exact number for the friendly number it is closest to, like a ten or a hundred.</div>`,
          narration: "Cadet, welcome to Big Number Base. The moon station where big numbers live! Mission Control just called: about how many fuel cells do we have? We have 37. But Mission Control doesn't need the exact number. They want a nice, easy number that's close. 37 is close to 40. Finding the close, friendly number is called rounding. Let's learn how rockets do it!",
        },
        {
          id: "s2",
          title: "The Number Line Landing Strip",
          html: `
            <p>Picture a number line like a landing strip. The landing pads are the <b>tens</b>: 30, 40, 50...</p>
            <p>Our rocket is at <b>37</b>. Which pad is it closer to — 30 or 40?</p>
            <div class="big-visual">
              <div class="vis-row">30 ·······🚀·· 40</div>
              <div class="vis-row">← 7 jumps &nbsp;&nbsp;&nbsp; 3 jumps →</div>
            </div>
            <p>37 is <b>7 jumps</b> from 30 but only <b>3 jumps</b> from 40. So 37 rounds to <b>40</b>!</p>
            <div class="callout"><b>Remember:</b> Rounding to the nearest ten asks one question: which ten is it closer to?</div>`,
          narration: "Picture a number line like a landing strip. The landing pads are the tens: 30, 40, 50. Our rocket is at 37. Which pad is it closer to? 30 or 40? 37 is 7 jumps from 30, but only 3 jumps from 40. So 37 rounds to 40! Rounding to the nearest ten asks one question: which ten is it closer to?",
        },
        {
          id: "s3",
          title: "The 5-Rounds-Up Rule",
          html: `
            <p>You don't need a number line every time. Just peek at the <b>ones digit</b>!</p>
            <table>
              <tr><th>Ones digit</th><th>What to do</th></tr>
              <tr><td>0, 1, 2, 3, 4</td><td>Round DOWN ⬇️</td></tr>
              <tr><td>5, 6, 7, 8, 9</td><td>Round UP ⬆️</td></tr>
            </table>
            <p>So <b>62</b> rounds down to <b>60</b>, and <b>37</b> rounds up to <b>40</b>.</p>
            <p>What about <b>35</b>? It's exactly halfway between 30 and 40! Rockets never sit in the middle — the rule says <b>5 rounds UP</b>. So 35 rounds to <b>40</b>.</p>
            <div class="callout"><b>Remember:</b> To round to the nearest TEN, the ONES digit decides. And 5 always rounds up!</div>`,
          narration: "You don't need a number line every time. Just peek at the ones digit! If the ones digit is 0, 1, 2, 3, or 4, round down. If it's 5, 6, 7, 8, or 9, round up. So 62 rounds down to 60, and 37 rounds up to 40. What about 35? It's exactly halfway between 30 and 40! Rockets never sit in the middle. The rule says 5 rounds up. So 35 rounds to 40. To round to the nearest ten, the ones digit decides. And 5 always rounds up!",
        },
        {
          id: "s4",
          title: "Rounding to the Nearest Hundred",
          html: `
            <p>Big rockets land on <b>hundred</b> pads: 100, 200, 300, 400...</p>
            <p>Where does <b>349</b> land? It sits between 300 and 400.</p>
            <div class="big-visual">
              <div class="vis-row">300 ····🚀········ 400</div>
            </div>
            <p>This time, peek at the <b>tens digit</b>. In 349, the tens digit is <b>4</b> — that's in the round-DOWN club. So 349 rounds to <b>300</b>.</p>
            <p>But <b>372</b>? Its tens digit is <b>7</b> — round UP to <b>400</b>!</p>
            <div class="callout"><b>Remember:</b> Nearest TEN → look at the ONES digit. Nearest HUNDRED → look at the TENS digit.</div>`,
          narration: "Big rockets land on hundred pads: 100, 200, 300, 400. Where does 349 land? It sits between 300 and 400. This time, peek at the tens digit. In 349, the tens digit is 4. That's in the round-down club. So 349 rounds to 300. But 372? Its tens digit is 7. Round up to 400! Nearest ten, look at the ones digit. Nearest hundred, look at the tens digit.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Let's round <b>481</b> two ways. Ready, Cadet?</p>
            <p><b>Nearest ten:</b> Look at the ones digit: <b>1</b>. That rounds DOWN.</p>
            <div class="big-visual">481 → 480</div>
            <p><b>Nearest hundred:</b> Look at the tens digit: <b>8</b>. That rounds UP.</p>
            <div class="big-visual">481 → 500</div>
            <p>Same number, two different landing pads — it all depends which pad you're aiming for! 🎯</p>`,
          narration: "Let's round 481 two ways. Ready, Cadet? Nearest ten: look at the ones digit. It's 1. That rounds down. 481 rounds to 480. Nearest hundred: look at the tens digit. It's 8. That rounds up. 481 rounds to 500. Same number, two different landing pads. It all depends which pad you're aiming for!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Rounding rockets ready for launch! You can now say:</p>
            <div class="callout">
              <p>✔️ I can use a number line to find which ten or hundred is closer.</p>
              <p>✔️ I can round to the nearest ten using the ones digit.</p>
              <p>✔️ I can round to the nearest hundred using the tens digit — and 5 rounds up!</p>
            </div>
            <p>Get 7 out of 8 right to earn your star! 🚀</p>`,
          narration: "Rounding rockets ready for launch! You can now say: I can use a number line to find which ten or hundred is closer. I can round to the nearest ten using the ones digit. I can round to the nearest hundred using the tens digit. And 5 rounds up! Get 7 out of 8 right to earn your star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Round 37 to the nearest ten.",
            visual: "30 ·······🚀·· 40",
            options: ["40", "30", "35", "100"],
            answer: 0,
            hints: {
              verbal: "Look at the ones digit of 37. Is it in the round-up club (5 to 9) or the round-down club (0 to 4)?",
              example: "For 28, the ones digit is 8, so it rounds UP to 30.",
              narrow: [1],
            },
            explain: "The ones digit is 7, which rounds up — 37 is only 3 jumps from 40.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Round 62 to the nearest ten.",
            answer: 60,
            hints: {
              verbal: "The ones digit is 2. Does 2 round up or down? Which ten is 62 closest to?",
              example: "For 41, the ones digit is 1, so it rounds down to 40.",
            },
            explain: "The ones digit is 2, so 62 rounds down to 60 — it's only 2 jumps away.",
          },
          {
            id: "q3", type: "mc",
            prompt: "To round a number to the nearest <b>hundred</b>, which digit do you look at?",
            options: ["The tens digit", "The ones digit", "The hundreds digit", "The biggest digit"],
            answer: 0,
            hints: {
              verbal: "For the nearest ten you check the ones digit. For the nearest hundred, you check the digit one spot to the left of that.",
              example: "For 372, the tens digit is 7, so 372 rounds up to 400.",
              narrow: [1],
            },
            explain: "The tens digit decides the nearest hundred, just like the ones digit decides the nearest ten.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "Round 45 to the nearest ten.",
            answer: 50,
            hints: {
              verbal: "45 is exactly halfway between 40 and 50. Remember the special rule about 5!",
              example: "35 is halfway between 30 and 40, and 5 rounds UP, so 35 rounds to 40.",
            },
            explain: "45 is halfway, and 5 always rounds up — so 45 rounds to 50.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: 349 rounds to 400 when rounding to the nearest hundred.",
            answer: false,
            hints: {
              verbal: "Check the tens digit of 349. Is it in the round-up club or the round-down club?",
              example: "In 429, the tens digit is 2, so 429 rounds DOWN to 400.",
            },
            explain: "False! The tens digit is 4, which rounds down — 349 rounds to 300.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Round 650 to the nearest hundred.",
            options: ["700", "600", "650", "1000"],
            answer: 0,
            hints: {
              verbal: "650 is exactly halfway between 600 and 700. Which way does 5 send you?",
              example: "250 is halfway between 200 and 300, and 5 rounds up, so 250 rounds to 300.",
              narrow: [1],
            },
            explain: "650 is exactly halfway, and 5 rounds up — so 650 rounds to 700.",
          },
          {
            id: "q7", type: "numeric",
            prompt: "What is the SMALLEST whole number that rounds to 50 (nearest ten)?",
            answer: 45,
            hints: {
              verbal: "Start at 50 and walk backward: 49, 48, 47... Keep going until a number would round to 40 instead.",
              example: "The smallest number that rounds to 30 is 25, because 5 rounds up but 24 rounds down to 20.",
            },
            explain: "45 rounds up to 50 (5 rounds up!), but 44 rounds down to 40. So 45 is the smallest.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Detective challenge! How many different whole numbers round to 50 (nearest ten)?",
            options: ["10", "9", "5", "100"],
            answer: 0,
            hints: {
              verbal: "The smallest is 45 and the largest is 54. Count every whole number from 45 up to 54 — and don't forget 50 itself!",
              example: "The numbers that round to 20 are 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 — count them!",
              narrow: [1],
            },
            explain: "45, 46, 47, 48, 49, 50, 51, 52, 53, 54 — that's 10 numbers in the landing zone!",
          },
        ],
      },
    },

    /* ============ M2 — Add & Subtract to 1,000 (3.NBT.2) ============ */
    {
      id: "math-u3-m2",
      title: "Add & Subtract to 1,000",
      icon: "➕",
      standard: "3.NBT.2",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Supply Depot",
          html: `
            <p>Cadet, the Big Number Base supply depot is packed with fuel cells — hundreds of them! To keep count, we stack them by place value:</p>
            <div class="big-visual">
              <div class="vis-row">💯💯 &nbsp; 🔟🔟🔟 &nbsp; ▫️▫️▫️▫️</div>
            </div>
            <p>That's <b>2 hundreds</b>, <b>3 tens</b>, and <b>4 ones</b> — the number <b>234</b>!</p>
            <p>When supply ships arrive, we <b>add</b>. When rockets fuel up, we <b>subtract</b>. Big numbers, same place-value teamwork!</p>`,
          narration: "Cadet, the Big Number Base supply depot is packed with fuel cells. Hundreds of them! To keep count, we stack them by place value. 2 hundreds, 3 tens, and 4 ones. That's the number 234! When supply ships arrive, we add. When rockets fuel up, we subtract. Big numbers, same place-value teamwork!",
        },
        {
          id: "s2",
          title: "Adding with Regrouping",
          html: `
            <p>A ship delivers <b>167</b> fuel cells to our <b>256</b>. Let's add place by place, starting with the ones!</p>
            <table>
              <tr><th>Place</th><th>Add</th><th>Write</th></tr>
              <tr><td>Ones</td><td>6 + 7 = 13</td><td>write 3, carry 1 ten</td></tr>
              <tr><td>Tens</td><td>5 + 6 + 1 = 12</td><td>write 2, carry 1 hundred</td></tr>
              <tr><td>Hundreds</td><td>2 + 1 + 1 = 4</td><td>write 4</td></tr>
            </table>
            <div class="big-visual">256 + 167 = 423</div>
            <div class="vocab"><b>regrouping</b> — trading 10 ones for 1 ten, or 10 tens for 1 hundred. Ten little blocks become one bigger block!</div>`,
          narration: "A ship delivers 167 fuel cells to our 256. Let's add place by place, starting with the ones! Ones: 6 plus 7 is 13. Write 3, carry 1 ten. Tens: 5 plus 6 plus 1 is 12. Write 2, carry 1 hundred. Hundreds: 2 plus 1 plus 1 is 4. So 256 plus 167 equals 423. Regrouping means trading 10 ones for 1 ten, or 10 tens for 1 hundred. Ten little blocks become one bigger block!",
        },
        {
          id: "s3",
          title: "Subtracting with Borrowing",
          html: `
            <p>Now a rocket needs fuel! We have <b>272</b> cells and it takes <b>189</b>. Subtract place by place — and when a digit is too small, <b>borrow</b> from the next place!</p>
            <table>
              <tr><th>Place</th><th>Problem</th><th>Fix it</th></tr>
              <tr><td>Ones</td><td>2 − 9? Too small!</td><td>Borrow a ten: 12 − 9 = 3</td></tr>
              <tr><td>Tens</td><td>6 − 8? Too small!</td><td>Borrow a hundred: 16 − 8 = 8</td></tr>
              <tr><td>Hundreds</td><td>1 − 1</td><td>= 0</td></tr>
            </table>
            <div class="big-visual">272 − 189 = 83</div>
            <div class="callout"><b>Remember:</b> Borrowing is just regrouping backward — trade 1 ten for 10 ones!</div>`,
          narration: "Now a rocket needs fuel! We have 272 cells and it takes 189. Subtract place by place. And when a digit is too small, borrow from the next place! Ones: 2 minus 9 is too small, so borrow a ten. 12 minus 9 is 3. Tens: 6 minus 8 is too small, so borrow a hundred. 16 minus 8 is 8. Hundreds: 1 minus 1 is 0. So 272 minus 189 equals 83. Borrowing is just regrouping backward. Trade 1 ten for 10 ones!",
        },
        {
          id: "s4",
          title: "The Zero Trap",
          html: `
            <p>Watch out for this sneaky one, Cadet: <b>300 − 189</b>. The zeros have nothing to lend!</p>
            <p>Here's Cosmo's trick — think of 300 in a new costume:</p>
            <div class="big-visual">300 = 2 hundreds, 9 tens, 10 ones</div>
            <p>Now every place has plenty:</p>
            <p>Ones: 10 − 9 = <b>1</b>. &nbsp; Tens: 9 − 8 = <b>1</b>. &nbsp; Hundreds: 2 − 1 = <b>1</b>.</p>
            <div class="big-visual">300 − 189 = 111</div>
            <div class="callout"><b>Check it:</b> Add back up! 111 + 189 = 300. ✔️ Addition and subtraction are partners.</div>`,
          narration: "Watch out for this sneaky one, Cadet. 300 minus 189. The zeros have nothing to lend! Here's Cosmo's trick. Think of 300 in a new costume: 2 hundreds, 9 tens, and 10 ones. Now every place has plenty. Ones: 10 minus 9 is 1. Tens: 9 minus 8 is 1. Hundreds: 2 minus 1 is 1. So 300 minus 189 equals 111. Check it by adding back up! 111 plus 189 is 300. Addition and subtraction are partners.",
        },
        {
          id: "s5",
          title: "Space Store Dollars",
          html: `
            <p>The same moves work with money! At the Space Store, everything costs whole dollars.</p>
            <p>Zara saved <b>$250</b> in June and <b>$175</b> in July. How much altogether?</p>
            <div class="big-visual">$250 + $175 = $425</div>
            <p>Then she buys a jetpack for <b>$263</b> out of her <b>$425</b>. How much is left?</p>
            <div class="big-visual">$425 − $263 = $162</div>
            <p>Dollars are just numbers wearing a $ badge — add and subtract them the same way!</p>`,
          narration: "The same moves work with money! At the Space Store, everything costs whole dollars. Zara saved 250 dollars in June and 175 dollars in July. How much altogether? 250 plus 175 is 425 dollars. Then she buys a jetpack for 263 dollars out of her 425. How much is left? 425 minus 263 is 162 dollars. Dollars are just numbers wearing a dollar badge. Add and subtract them the same way!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Supply depot mastered! You can now say:</p>
            <div class="callout">
              <p>✔️ I can add numbers to 1,000, carrying when a place fills up.</p>
              <p>✔️ I can subtract with borrowing — even across zeros.</p>
              <p>✔️ I can add and subtract whole dollar amounts.</p>
            </div>
            <p>Quiz time — show Mission Control your big-number power! 💪</p>`,
          narration: "Supply depot mastered! You can now say: I can add numbers to 1,000, carrying when a place fills up. I can subtract with borrowing, even across zeros. I can add and subtract whole dollar amounts. Quiz time. Show Mission Control your big-number power!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What number do the blocks show?",
            visual: "💯💯 &nbsp; 🔟🔟🔟 &nbsp; ▫️▫️▫️▫️",
            options: ["234", "324", "2034", "9"],
            answer: 0,
            hints: {
              verbal: "Count the hundreds first, then the tens, then the ones.",
              example: "💯 🔟🔟 ▫️ shows 1 hundred, 2 tens, 1 one — that's 121.",
              narrow: [2],
            },
            explain: "2 hundreds, 3 tens, and 4 ones make 234.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Add the fuel cells: 254 + 132 = ?",
            answer: 386,
            hints: {
              verbal: "Add place by place: ones with ones, tens with tens, hundreds with hundreds.",
              example: "213 + 121: ones 3+1=4, tens 1+2=3, hundreds 2+1=3 → 334.",
            },
            explain: "Ones: 4+2=6. Tens: 5+3=8. Hundreds: 2+1=3. So 254 + 132 = 386.",
          },
          {
            id: "q3", type: "mc",
            prompt: "You're adding and the ones make <b>13</b>. What do you do?",
            options: [
              "Write 3, carry 1 ten",
              "Write 13 in the ones place",
              "Write 1, carry 3",
              "Skip the ones place",
            ],
            answer: 0,
            hints: {
              verbal: "13 ones is more than one place can hold. Trade 10 of them for 1 ten!",
              example: "In 256 + 167, the ones make 13 — write the 3, and the 1 ten joins the tens place.",
              narrow: [1],
            },
            explain: "13 ones = 1 ten and 3 ones. Write the 3 and carry the 1 ten over.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "The rocket takes 189 fuel cells from our 272. Solve: 272 − 189 = ?",
            answer: 83,
            hints: {
              verbal: "The ones and tens are too small — borrow both times! 12 − 9 first.",
              example: "252 − 137: borrow for the ones, 12 − 7 = 5, then 4 − 3 = 1, then 2 − 1 = 1 → 115.",
            },
            explain: "Borrow twice: 12−9=3, 16−8=8, 1−1=0. So 272 − 189 = 83.",
          },
          {
            id: "q5", type: "mc",
            prompt: "The Zero Trap! What is 300 − 189?",
            options: ["111", "121", "189", "211"],
            answer: 0,
            hints: {
              verbal: "Put 300 in its costume: 2 hundreds, 9 tens, 10 ones. Then subtract each place.",
              example: "200 − 145: think 1 hundred, 9 tens, 10 ones → 10−5=5, 9−4=5, 1−1=0 → 55.",
              narrow: [1],
            },
            explain: "Think of 300 as 2 hundreds, 9 tens, 10 ones: 10−9=1, 9−8=1, 2−1=1 → 111.",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: When subtracting, you can always take the smaller digit from the bigger digit, even if the bigger one is on the bottom.",
            answer: false,
            hints: {
              verbal: "In 272 − 189, the ones are 2 − 9. Can you swap them and do 9 − 2 instead?",
              example: "For 42 − 19, doing 9 − 2 in the ones gives the wrong answer. You must borrow: 12 − 9 = 3, so 42 − 19 = 23.",
            },
            explain: "False! You must keep the top number on top and borrow when its digit is too small.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Zara saved $250 in June and $175 in July. How much did she save altogether?",
            passage: "Zara is saving up for a jetpack from the Space Store. She keeps every whole dollar she earns.",
            options: ["$425", "$325", "$415", "$75"],
            answer: 0,
            hints: {
              verbal: "Add place by place. The tens make 5 + 7 = 12 tens — that's a carry!",
              example: "$130 + $180: tens make 11, so carry — $310.",
              narrow: [1],
            },
            explain: "250 + 175: ones 0+5=5, tens 5+7=12 (write 2, carry 1), hundreds 2+1+1=4 → $425.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Big challenge: 600 − 348 = ?",
            answer: 252,
            hints: {
              verbal: "Zeros again! Dress 600 up as 5 hundreds, 9 tens, 10 ones, then subtract each place.",
              example: "400 − 126: think 3 hundreds, 9 tens, 10 ones → 10−6=4, 9−2=7, 3−1=2 → 274.",
            },
            explain: "Think 5 hundreds, 9 tens, 10 ones: 10−8=2, 9−4=5, 5−3=2. So 600 − 348 = 252.",
          },
        ],
      },
    },

    /* ============ M3 — Times Ten Turbo (3.NBT.3) ============ */
    {
      id: "math-u3-m3",
      title: "Times Ten Turbo",
      icon: "🔟",
      standard: "3.NBT.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Turbo Boosters On!",
          html: `
            <p>Cadet, ready for TURBO speed? Watch what happens when a fact you already know hits a multiple of ten!</p>
            <div class="big-visual">6 × 8 = 48</div>
            <div class="big-visual">6 × 80 = 480 🚀</div>
            <p>Same fact, but ten times bigger! Multiplying by <b>tens</b> — 10, 20, 30, up to 90 — is the turbo booster of multiplication.</p>
            <div class="vocab"><b>multiple of ten</b> — a number you say when counting by tens: 10, 20, 30, 40, 50, 60, 70, 80, 90.</div>`,
          narration: "Cadet, ready for turbo speed? Watch what happens when a fact you already know hits a multiple of ten! 6 times 8 is 48. So 6 times 80 is 480! Same fact, but ten times bigger! Multiplying by tens, 10, 20, 30, up to 90, is the turbo booster of multiplication. A multiple of ten is a number you say when counting by tens: 10, 20, 30, all the way to 90.",
        },
        {
          id: "s2",
          title: "Thinking in Tens",
          html: `
            <p>Here's the secret: a multiple of ten is just a stack of ten-blocks! <b>40</b> is <b>4 tens</b>.</p>
            <p>So <b>2 × 40</b> means 2 groups of 4 tens:</p>
            <div class="big-visual">
              <div class="vis-row">🔟🔟🔟🔟</div>
              <div class="vis-row">🔟🔟🔟🔟</div>
            </div>
            <p>Count the ten-blocks: <b>8 tens</b>. And 8 tens is <b>80</b>!</p>
            <div class="big-visual">2 × 40 = 8 tens = 80</div>
            <div class="callout"><b>Remember:</b> Multiply the little fact first, then say the answer in TENS.</div>`,
          narration: "Here's the secret. A multiple of ten is just a stack of ten-blocks! 40 is 4 tens. So 2 times 40 means 2 groups of 4 tens. Count the ten-blocks: 8 tens. And 8 tens is 80! 2 times 40 equals 8 tens, which equals 80. Multiply the little fact first, then say the answer in tens.",
        },
        {
          id: "s3",
          title: "The Ten-Times Pattern",
          html: `
            <p>See the pattern? Every turbo fact starts with a little fact you know:</p>
            <table>
              <tr><th>Little fact</th><th>Turbo fact</th></tr>
              <tr><td>2 × 4 = 8</td><td>2 × 40 = 80</td></tr>
              <tr><td>5 × 6 = 30</td><td>5 × 60 = 300</td></tr>
              <tr><td>6 × 8 = 48</td><td>6 × 80 = 480</td></tr>
            </table>
            <p>Why does 5 × 60 = 300? Because 5 × 60 is 5 groups of 6 tens — that's <b>30 tens</b>, and 30 tens is <b>300</b>!</p>
            <div class="callout"><b>Remember:</b> The zero isn't magic — it's there because you're counting TENS, not ones.</div>`,
          narration: "See the pattern? Every turbo fact starts with a little fact you know. 2 times 4 is 8, so 2 times 40 is 80. 5 times 6 is 30, so 5 times 60 is 300. 6 times 8 is 48, so 6 times 80 is 480. Why does 5 times 60 equal 300? Because 5 times 60 is 5 groups of 6 tens. That's 30 tens, and 30 tens is 300! The zero isn't magic. It's there because you're counting tens, not ones.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>Mission Control needs <b>9 × 80</b>. Turbo time, Cadet!</p>
            <p>Step 1: Find the little fact. <b>9 × 8 = 72</b>.</p>
            <p>Step 2: But we're multiplying 9 by 8 <u>tens</u>, so the answer is <b>72 tens</b>.</p>
            <p>Step 3: Say 72 tens as a number:</p>
            <div class="big-visual">9 × 80 = 720</div>
            <p>One more, super speedy: <b>40 × 5</b>? Little fact 4 × 5 = 20, so 40 × 5 = <b>200</b>. Turbo! 🚀</p>`,
          narration: "Mission Control needs 9 times 80. Turbo time, Cadet! Step 1: find the little fact. 9 times 8 is 72. Step 2: but we're multiplying 9 by 8 tens, so the answer is 72 tens. Step 3: say 72 tens as a number. 9 times 80 equals 720. One more, super speedy. 40 times 5? The little fact is 4 times 5 equals 20, so 40 times 5 is 200. Turbo!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Turbo boosters mastered! You can now say:</p>
            <div class="callout">
              <p>✔️ I can multiply a one-digit number by a multiple of ten, like 9 × 80.</p>
              <p>✔️ I can think in tens: 5 × 60 is 30 tens, and 30 tens is 300.</p>
              <p>✔️ I can use a little fact I know to solve the big turbo fact.</p>
            </div>
            <p>Pass this quiz and Big Number Base is YOURS, Cadet! 🌕</p>`,
          narration: "Turbo boosters mastered! You can now say: I can multiply a one-digit number by a multiple of ten, like 9 times 80. I can think in tens. 5 times 60 is 30 tens, and 30 tens is 300. I can use a little fact I know to solve the big turbo fact. Pass this quiz and Big Number Base is yours, Cadet!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Each row shows 4 tens. What is 2 × 40?",
            visual: "🔟🔟🔟🔟<br>🔟🔟🔟🔟",
            options: ["80", "8", "44", "800"],
            answer: 0,
            hints: {
              verbal: "Count the ten-blocks in the picture. Then remember each block is worth TEN.",
              example: "3 rows of 2 ten-blocks is 6 tens, and 6 tens is 60.",
              narrow: [1],
            },
            explain: "2 groups of 4 tens is 8 tens — and 8 tens is 80.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Solve the launch code: 40 × 5 = ?",
            answer: 200,
            hints: {
              verbal: "Use the little fact 4 × 5 first. Then remember you're counting tens!",
              example: "30 × 2: little fact 3 × 2 = 6, so 30 × 2 = 60.",
            },
            explain: "4 × 5 = 20, so 40 × 5 is 20 tens — that's 200.",
          },
          {
            id: "q3", type: "mc",
            prompt: "You know 6 × 8 = 48. What is 6 × 80?",
            options: ["480", "48", "4800", "488"],
            answer: 0,
            hints: {
              verbal: "6 × 80 is 6 groups of 8 tens. That makes 48 tens. How much is 48 tens?",
              example: "If 3 × 7 = 21, then 3 × 70 = 21 tens = 210.",
              narrow: [1],
            },
            explain: "6 × 80 is 48 tens, and 48 tens is 480 — ten times bigger than 48.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "Think in tens: 5 × 60 = ?",
            answer: 300,
            hints: {
              verbal: "5 groups of 6 tens makes how many tens? Then say that many tens as a number.",
              example: "4 × 50 is 4 groups of 5 tens = 20 tens = 200.",
            },
            explain: "5 × 60 is 30 tens, and 30 tens is 300.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: 5 × 60 is the same as 30 tens.",
            answer: true,
            hints: {
              verbal: "60 is 6 tens. So 5 × 60 is 5 groups of 6 tens. Multiply 5 × 6 to count the tens.",
              example: "2 × 40 is 2 groups of 4 tens, which is 8 tens.",
            },
            explain: "True! 5 groups of 6 tens is 30 tens — and 30 tens is 300.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Cosmo says 4 × 20 = 80. WHY does that work?",
            options: [
              "4 × 2 tens makes 8 tens, and 8 tens is 80",
              "Because 4 + 20 = 24, then you add more",
              "Because 20 − 4 = 16",
              "Zeros make every answer bigger by luck",
            ],
            answer: 0,
            hints: {
              verbal: "20 is 2 tens. What is 4 groups of 2 tens?",
              example: "3 × 30 works because 3 × 3 tens = 9 tens = 90.",
              narrow: [1],
            },
            explain: "20 is 2 tens, so 4 × 20 is 4 × 2 tens = 8 tens = 80. The zero means tens, not magic!",
          },
          {
            id: "q7", type: "numeric",
            prompt: "Mission Control needs it fast: 9 × 80 = ?",
            answer: 720,
            hints: {
              verbal: "Little fact first: 9 × 8. Then your answer is that many TENS.",
              example: "9 × 30: little fact 9 × 3 = 27, so the answer is 27 tens = 270.",
            },
            explain: "9 × 8 = 72, so 9 × 80 is 72 tens — that's 720.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Each supply crate holds 30 fuel cells. The ship carries 8 crates. How many fuel cells is that?",
            passage: "A supply ship docks at Big Number Base. It carries 8 crates, and every crate holds exactly 30 fuel cells.",
            options: ["240", "24", "38", "2400"],
            answer: 0,
            hints: {
              verbal: "8 crates of 30 is 8 × 30. Use the little fact 8 × 3, then think in tens.",
              example: "6 crates of 20 cells: 6 × 2 = 12, so 6 × 20 = 120 cells.",
              narrow: [1],
            },
            explain: "8 × 30 is 8 × 3 tens = 24 tens = 240 fuel cells.",
          },
        ],
      },
    },
  ],
});
