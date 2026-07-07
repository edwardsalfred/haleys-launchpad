/* Unit 7 — Measurement Moon (3.MD.1, 3.MD.2, 3.MD.3, 3.MD.4)
   Time to the minute, metric mass and liquid volume, scaled graphs, and line plots. */
window.COURSE_CONTENT.push({
  id: "math-u7",
  subject: "math",
  order: 7,
  title: "Measurement Moon",
  subtitle: "Time, weight, liquids, and graphs",
  planet: { emoji: "🌙", color: "#4ADE80" },
  badgeName: "Measurement Moon Star",
  modules: [

    /* ============ M1 — Time to the Minute (3.MD.1) ============ */
    {
      id: "math-u7-m1",
      title: "Time to the Minute",
      icon: "⏰",
      standard: "3.MD.1",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Measurement Moon!",
          html: `
            <p>Cadet, welcome to Measurement Moon! Up here, <b>every minute counts</b>.</p>
            <div class="big-visual">
              <div class="vis-row">🚀 Launch time: 7:42 ⏰</div>
            </div>
            <p>Mission Control says our rocket launches at exactly <b>7:42</b> — not 7:40, not 7:45. If we're even one minute late, we miss it!</p>
            <p>Today you'll learn to read a clock <b>to the exact minute</b>. Let's go!</p>`,
          narration: "Cadet, welcome to Measurement Moon! Up here, every minute counts. Mission Control says our rocket launches at exactly 7 42. Not 7 40, not 7 45. If we're even one minute late, we miss it! Today you'll learn to read a clock to the exact minute. Let's go!",
        },
        {
          id: "s2",
          title: "The Two Hands of the Clock",
          html: `
            <p>A clock has two hands, and each one has a job:</p>
            <table>
              <tr><th>Hand</th><th>Job</th></tr>
              <tr><td><b>Short</b> hand</td><td>points to the <b>hour</b></td></tr>
              <tr><td><b>Long</b> hand</td><td>points to the <b>minutes</b></td></tr>
            </table>
            <p>Between every two numbers on the clock there are <b>5 tiny tick marks</b>. Each tick mark is <b>1 minute</b> — the clock face is really a number line curled into a circle!</p>
            <div class="callout"><b>Remember:</b> To count minutes, count by <b>5s</b> at each big number, then by <b>1s</b> on the little ticks.</div>`,
          narration: "A clock has two hands, and each one has a job. The short hand points to the hour. The long hand points to the minutes. Between every two numbers on the clock there are 5 tiny tick marks. Each tick mark is 1 minute. The clock face is really a number line curled into a circle! To count minutes, count by 5s at each big number, then by 1s on the little ticks.",
        },
        {
          id: "s3",
          title: "Reading 7:42 Together",
          html: `
            <p>Let's read the launch clock step by step!</p>
            <p>Step 1: The <b>short hand</b> is just past the 7. The hour is <b>7</b>.</p>
            <p>Step 2: The <b>long hand</b> is on the 8. Count by 5s to get there:</p>
            <div class="big-visual">5, 10, 15, 20, 25, 30, 35, <b>40</b></div>
            <p>Step 3: The long hand is <b>2 tiny ticks past</b> the 8. Count on by 1s: <b>41, 42</b>.</p>
            <div class="big-visual">⏰ 7:42</div>
            <div class="callout"><b>Remember:</b> Big numbers count by 5s. Tiny ticks count by 1s.</div>`,
          narration: "Let's read the launch clock step by step! Step 1: the short hand is just past the 7. The hour is 7. Step 2: the long hand is on the 8. Count by 5s to get there. 5, 10, 15, 20, 25, 30, 35, 40. Step 3: the long hand is 2 tiny ticks past the 8. Count on by 1s. 41, 42. The time is 7 42. Big numbers count by 5s. Tiny ticks count by 1s.",
        },
        {
          id: "s4",
          title: "Time Jumps on a Number Line",
          html: `
            <p>Clocks can also tell us <b>how much time passes</b>. We call that <b>elapsed time</b> — and a number line makes it easy!</p>
            <div class="vocab"><b>elapsed time</b> — the amount of time that goes by from start to finish.</div>
            <p>A movie starts at 3:10 and ends at 3:45. How long is it? Jump along the number line:</p>
            <div class="big-visual">3:10 —(+5)→ 3:15 —(+15)→ 3:30 —(+15)→ 3:45</div>
            <p>Add the jumps: 5 + 15 + 15 = <b>35 minutes</b>!</p>`,
          narration: "Clocks can also tell us how much time passes. We call that elapsed time. And a number line makes it easy! Elapsed time is the amount of time that goes by from start to finish. A movie starts at 3 10 and ends at 3 45. How long is it? Jump along the number line. From 3 10, jump 5 minutes to 3 15. Jump 15 more to 3 30. Jump 15 more to 3 45. Add the jumps. 5 plus 15 plus 15 equals 35 minutes!",
        },
        {
          id: "s5",
          title: "Try It With Me: Jonathan's Morning",
          html: `
            <p>Cadet Jonathan wakes up at <b>5:45</b>. He showers for <b>5 minutes</b>, gets dressed for <b>10 minutes</b>, and eats breakfast for <b>15 minutes</b>. When is he ready?</p>
            <p>Hop along the number line with me:</p>
            <div class="big-visual">5:45 —(+5)→ 5:50 —(+10)→ 6:00 —(+15)→ 6:15</div>
            <p>Step 1: 5:45 plus 5 minutes = <b>5:50</b>.</p>
            <p>Step 2: 5:50 plus 10 minutes = <b>6:00</b>.</p>
            <p>Step 3: 6:00 plus 15 minutes = <b>6:15</b>.</p>
            <p>Jonathan is ready at <b>6:15</b> — right on time for the shuttle! 🚌</p>`,
          narration: "Cadet Jonathan wakes up at 5 45. He showers for 5 minutes, gets dressed for 10 minutes, and eats breakfast for 15 minutes. When is he ready? Hop along the number line with me. Step 1: 5 45 plus 5 minutes is 5 50. Step 2: 5 50 plus 10 minutes is 6 o'clock. Step 3: 6 o'clock plus 15 minutes is 6 15. Jonathan is ready at 6 15. Right on time for the shuttle!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Tick tock, Cadet — you've got clock power! You can now say:</p>
            <div class="callout">
              <p>✔️ I can tell time to the nearest minute.</p>
              <p>✔️ I can count minutes by 5s, then by 1s.</p>
              <p>✔️ I can solve elapsed-time problems with jumps on a number line.</p>
            </div>
            <p>Get 7 out of 8 right to earn your star! 🚀</p>`,
          narration: "Tick tock, Cadet. You've got clock power! You can now say: I can tell time to the nearest minute. I can count minutes by 5s, then by 1s. I can solve elapsed-time problems with jumps on a number line. Get 7 out of 8 right to earn your star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "The long minute hand points straight down at the 6. How many minutes past the hour is that?",
            options: ["30 minutes", "6 minutes", "25 minutes", "35 minutes"],
            answer: 0,
            hints: {
              verbal: "Count by 5s from the 12 to the 6: 5, 10, 15, ...",
              example: "If the minute hand points at the 3, count 5, 10, 15 — that's 15 minutes.",
              narrow: [1],
            },
            explain: "Count by 5s to the 6: 5, 10, 15, 20, 25, 30. The 6 means 30 minutes.",
          },
          {
            id: "q2", type: "tf",
            prompt: "True or false: Each tiny tick mark on a clock stands for 1 minute.",
            answer: true,
            hints: {
              verbal: "Think about the clock as a number line curled into a circle. What did each tiny tick count?",
              example: "The minute hand on the 1 is 5 minutes. One tick past the 1 is 6 minutes — one more.",
            },
            explain: "True! Big numbers count by 5s, and each tiny tick between them is exactly 1 minute.",
          },
          {
            id: "q3", type: "numeric",
            prompt: "The minute hand points at the 9. How many minutes past the hour is that?",
            answer: 45,
            hints: {
              verbal: "Count by 5s from the 12 all the way around to the 9.",
              example: "To the 4, count 5, 10, 15, 20 — that's 20 minutes.",
            },
            explain: "Count by 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45. The 9 means 45 minutes.",
          },
          {
            id: "q4", type: "mc",
            prompt: "The short hand is just past the 7. The long hand is 2 tiny ticks past the 8. What time is it?",
            options: ["7:42", "8:42", "7:40", "7:22"],
            answer: 0,
            hints: {
              verbal: "The short hand gives the hour. For minutes, count by 5s to the 8, then 1s for the extra ticks.",
              example: "Short hand past the 3, long hand 1 tick past the 6: 30 + 1 = 31 minutes, so 3:31.",
              narrow: [2],
            },
            explain: "The hour is 7. Count by 5s to the 8 (40), then 2 more ticks: 41, 42. It's 7:42.",
          },
          {
            id: "q5", type: "numeric",
            prompt: "Jonathan wakes at 5:45. He showers 5 minutes, dresses 10 minutes, and eats 15 minutes. How many minutes does his whole routine take?",
            passage: "Jonathan wakes up at 5:45. He takes 5 minutes to shower, 10 minutes to get dressed, and 15 minutes to eat breakfast.",
            answer: 30,
            hints: {
              verbal: "Add up all three jumps: 5 + 10 + 15.",
              example: "A routine of 10 + 5 + 5 minutes takes 20 minutes in all.",
            },
            explain: "Add the jumps: 5 + 10 + 15 = 30 minutes for the whole routine.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Jonathan starts at 5:45 and his routine takes 30 minutes. What time is he ready?",
            passage: "Jonathan wakes up at 5:45. His shower, getting dressed, and breakfast take 30 minutes altogether.",
            options: ["6:15", "6:30", "6:00", "5:30"],
            answer: 0,
            hints: {
              verbal: "Jump on the number line: 5:45 plus 15 minutes reaches 6:00. How many minutes are left to add?",
              example: "2:50 plus 20 minutes: jump 10 to 3:00, then 10 more to 3:10.",
              narrow: [1],
            },
            explain: "5:45 plus 15 minutes is 6:00, then 15 more minutes is 6:15.",
          },
          {
            id: "q7", type: "numeric",
            prompt: "A moon movie starts at 3:10 and ends at 3:45. How many minutes long is it?",
            answer: 35,
            hints: {
              verbal: "Jump from 3:10 to 3:45 on a number line. Try a jump of 5 to 3:15, then count the rest.",
              example: "From 4:20 to 4:50: jump 10 to 4:30, then 20 more — 30 minutes.",
            },
            explain: "3:10 to 3:15 is 5 minutes, then 3:15 to 3:45 is 30 more. 5 + 30 = 35 minutes.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Zara starts her homework at 4:20 and works for 25 minutes. What time does she finish?",
            passage: "Zara sits down to do her star charts at 4:20. She works for exactly 25 minutes without stopping.",
            options: ["4:45", "4:55", "4:25", "5:20"],
            answer: 0,
            hints: {
              verbal: "Break 25 into friendly jumps: 4:20 plus 10 is 4:30. Keep jumping!",
              example: "6:15 plus 25 minutes: 6:15 to 6:30 is 15, then 10 more lands on 6:40.",
              narrow: [1],
            },
            explain: "4:20 plus 10 is 4:30, plus 10 more is 4:40, plus 5 more is 4:45.",
          },
        ],
      },
    },

    /* ============ M2 — Grams, Kilograms & Liters (3.MD.2) ============ */
    {
      id: "math-u7-m2",
      title: "Grams, Kilograms & Liters",
      icon: "⚖️",
      standard: "3.MD.2",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Cargo Bay Problem",
          html: `
            <p>Cadet, we have a problem in the cargo bay! Before the rocket can lift off, we must measure <b>everything</b> we pack.</p>
            <div class="big-visual">
              <div class="vis-row">📎 🎒 🐕 🧃</div>
            </div>
            <p>Some things are light, some are heavy, and some things <u>pour</u>! We need the right <b>unit</b> to measure each one.</p>
            <p>Today you'll meet three measuring heroes: the <b>gram</b>, the <b>kilogram</b>, and the <b>liter</b>.</p>`,
          narration: "Cadet, we have a problem in the cargo bay! Before the rocket can lift off, we must measure everything we pack. Some things are light, some are heavy, and some things pour! We need the right unit to measure each one. Today you'll meet three measuring heroes: the gram, the kilogram, and the liter.",
        },
        {
          id: "s2",
          title: "Grams and Kilograms",
          html: `
            <p><b>Mass</b> tells us how much stuff is in something — how heavy it feels.</p>
            <div class="vocab"><b>gram (g)</b> — a tiny unit of mass. A paper clip 📎 has a mass of about <b>1 gram</b>.</div>
            <div class="vocab"><b>kilogram (kg)</b> — a big unit of mass. A chunky math book has a mass of about <b>1 kilogram</b>.</div>
            <table>
              <tr><th>Grams for...</th><th>Kilograms for...</th></tr>
              <tr><td>a paper clip 📎</td><td>a dog 🐕</td></tr>
              <tr><td>a feather 🪶</td><td>a backpack 🎒</td></tr>
              <tr><td>a crayon 🖍️</td><td>a cadet like you! 🧑‍🚀</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Light things → grams. Heavy things → kilograms.</div>`,
          narration: "Mass tells us how much stuff is in something. How heavy it feels. A gram is a tiny unit of mass. A paper clip has a mass of about 1 gram. A kilogram is a big unit of mass. A chunky math book has a mass of about 1 kilogram. Use grams for light things like a paper clip, a feather, or a crayon. Use kilograms for heavy things like a dog, a backpack, or a cadet like you! Light things, grams. Heavy things, kilograms.",
        },
        {
          id: "s3",
          title: "Liters for Liquids",
          html: `
            <p>What about things that <b>pour</b>, like juice or rocket fuel? Liquids get their own unit!</p>
            <div class="vocab"><b>liter (L)</b> — a unit for measuring liquid. A tall water bottle 💧 holds about <b>1 liter</b>.</div>
            <div class="big-visual">
              <div class="vis-row">🥄 less than 1 liter &nbsp; 💧 about 1 liter &nbsp; 🛁 many liters</div>
            </div>
            <p>A spoon holds much less than a liter. A bathtub holds <b>many</b> liters!</p>
            <div class="callout"><b>Remember:</b> If it pours or splashes, measure it in <b>liters</b>.</div>`,
          narration: "What about things that pour, like juice or rocket fuel? Liquids get their own unit! A liter is a unit for measuring liquid. A tall water bottle holds about 1 liter. A spoon holds much less than a liter. A bathtub holds many liters! If it pours or splashes, measure it in liters.",
        },
        {
          id: "s4",
          title: "The Backpack Problem",
          html: `
            <p>Word problem time! Watch me solve one:</p>
            <p><b>My backpack has a mass of 8 kilograms. I take out 2 kilograms of food. What is its mass now?</b></p>
            <p>Step 1: Start with <b>8 kg</b>.</p>
            <p>Step 2: Taking out means <b>subtract</b>: 8 − 2.</p>
            <div class="big-visual">8 kg − 2 kg = 6 kg</div>
            <p>Step 3: Answer with the unit: <b>6 kilograms</b>. ✔️</p>
            <div class="callout"><b>Remember:</b> Solve it like a number problem, then put the <b>unit</b> back in your answer.</div>`,
          narration: "Word problem time! Watch me solve one. My backpack has a mass of 8 kilograms. I take out 2 kilograms of food. What is its mass now? Step 1: start with 8 kilograms. Step 2: taking out means subtract. 8 minus 2. That's 6. Step 3: answer with the unit. 6 kilograms. Solve it like a number problem, then put the unit back in your answer.",
        },
        {
          id: "s5",
          title: "Try It With Me: The Juice Tank",
          html: `
            <p>Your turn to help! The galley tank has <b>3 liters</b> of star juice. Chef Zorp pours in <b>4 more liters</b>. How much juice is in the tank now?</p>
            <div class="big-visual">
              <div class="vis-row">🧃🧃🧃 &nbsp;+&nbsp; 🧃🧃🧃🧃</div>
            </div>
            <p>Step 1: Pouring <u>in</u> means <b>add</b>.</p>
            <p>Step 2: 3 + 4 = 7.</p>
            <div class="big-visual">3 L + 4 L = 7 L</div>
            <p>Step 3: Say it with the unit: <b>7 liters</b> of star juice! Great measuring, Cadet!</p>`,
          narration: "Your turn to help! The galley tank has 3 liters of star juice. Chef Zorp pours in 4 more liters. How much juice is in the tank now? Step 1: pouring in means add. Step 2: 3 plus 4 equals 7. Step 3: say it with the unit. 7 liters of star juice! Great measuring, Cadet!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Cargo bay measured and ready! You can now say:</p>
            <div class="callout">
              <p>✔️ I can pick grams, kilograms, or liters to measure something.</p>
              <p>✔️ I know a paper clip is about 1 gram and a water bottle is about 1 liter.</p>
              <p>✔️ I can solve word problems about mass and liquids.</p>
            </div>
            <p>Quiz time — weigh in and win that star! ⭐</p>`,
          narration: "Cargo bay measured and ready! You can now say: I can pick grams, kilograms, or liters to measure something. I know a paper clip is about 1 gram and a water bottle is about 1 liter. I can solve word problems about mass and liquids. Quiz time. Weigh in and win that star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "A paper clip has a mass of about...",
            visual: "📎",
            options: ["1 gram", "1 kilogram", "100 grams", "1 liter"],
            answer: 0,
            hints: {
              verbal: "A paper clip is one of the lightest things around. Pick the tiniest unit of mass.",
              example: "A feather is super light, so we measure it in grams — just a few grams.",
              narrow: [2],
            },
            explain: "A paper clip is about 1 gram — the gram is our unit for very light things.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which unit should we use to measure the mass of a dog?",
            visual: "🐕",
            options: ["Kilograms", "Grams", "Liters", "Minutes"],
            answer: 0,
            hints: {
              verbal: "A dog is heavy — much heavier than a paper clip. Is it light-unit or heavy-unit?",
              example: "A backpack is heavy, so we measure it in kilograms.",
              narrow: [1],
            },
            explain: "A dog is heavy, so kilograms fit best. Grams are for light things like paper clips.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which unit should we use to measure the water in a fish tank?",
            visual: "🐠💧",
            options: ["Liters", "Grams", "Kilograms", "Inches"],
            answer: 0,
            hints: {
              verbal: "Water pours and splashes. Which unit is just for liquids?",
              example: "Juice in a jug is a liquid, so we measure it in liters.",
              narrow: [2],
            },
            explain: "Water is a liquid, and liquids are measured in liters.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "Your backpack has a mass of 8 kilograms. You take out 2 kilograms of food. What is the backpack's mass now, in kilograms?",
            passage: "A cadet's backpack has a mass of 8 kilograms. The cadet takes out 2 kilograms of food to lighten the load.",
            answer: 6,
            hints: {
              verbal: "Taking something OUT makes the backpack lighter. Subtract!",
              example: "A 5 kg box with 1 kg removed: 5 − 1 = 4 kg.",
            },
            explain: "Taking out means subtract: 8 − 2 = 6 kilograms.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: Liters are used to measure liquids, like juice and water.",
            answer: true,
            hints: {
              verbal: "Think about the water bottle. What unit did we use for things that pour?",
              example: "We measured the star juice tank in liters because juice pours.",
            },
            explain: "True! If it pours or splashes, we measure it in liters.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "A tank holds 3 liters of juice. Chef Zorp pours in 4 more liters. How many liters are in the tank now?",
            visual: "🧃🧃🧃 &nbsp;+&nbsp; 🧃🧃🧃🧃",
            answer: 7,
            hints: {
              verbal: "Pouring IN means the amount goes up. Add the two amounts.",
              example: "2 liters plus 5 more liters makes 2 + 5 = 7 liters.",
            },
            explain: "Pouring in means add: 3 + 4 = 7 liters of juice.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which of these holds about <b>1 liter</b>?",
            options: ["A water bottle", "A swimming pool", "A spoonful of soup", "A bathtub"],
            answer: 0,
            hints: {
              verbal: "One liter is a medium drink-sized amount — not tiny, not giant.",
              example: "A spoon holds way less than a liter; a bathtub holds many, many liters.",
              narrow: [1],
            },
            explain: "A tall water bottle holds about 1 liter. Pools and tubs hold many liters; a spoon holds far less.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Each bag of moon sand has a mass of 2 kilograms. You load 4 bags. What is the total mass in kilograms?",
            passage: "The rover carries bags of moon sand. Every bag has a mass of exactly 2 kilograms, and there are 4 bags to load.",
            answer: 8,
            hints: {
              verbal: "4 equal bags of 2 kg — that's 4 groups of 2. Multiply!",
              example: "3 bags of 5 kg each: 3 × 5 = 15 kg total.",
            },
            explain: "4 bags of 2 kg each: 4 × 2 = 8 kilograms of moon sand.",
          },
        ],
      },
    },

    /* ============ M3 — Graph It! (3.MD.3) ============ */
    {
      id: "math-u7-m3",
      title: "Graph It!",
      icon: "📊",
      standard: "3.MD.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Great Snack Vote",
          html: `
            <p>Big news, Cadet! The whole academy voted for their favorite space snack, and the votes are pouring in!</p>
            <div class="big-visual">
              <div class="vis-row">🍕 🌮 🍪 🍎</div>
            </div>
            <p>But a giant pile of votes is hard to read. We need a way to <b>see</b> the data at a glance.</p>
            <p>That's what <b>graphs</b> do — they turn numbers into pictures. Let's build some!</p>`,
          narration: "Big news, Cadet! The whole academy voted for their favorite space snack, and the votes are pouring in! But a giant pile of votes is hard to read. We need a way to see the data at a glance. That's what graphs do. They turn numbers into pictures. Let's build some!",
        },
        {
          id: "s2",
          title: "Picture Graphs with a Key",
          html: `
            <p>A <b>picture graph</b> uses little pictures to show data. But here's the trick — read the <b>key</b> first!</p>
            <div class="vocab"><b>key</b> — tells you how many each picture stands for.</div>
            <div class="big-visual">
              <div class="vis-row">Key: each 🌟 = 5 votes</div>
              <div class="vis-row">Pizza &nbsp;🌟🌟🌟</div>
              <div class="vis-row">Tacos &nbsp;🌟🌟</div>
            </div>
            <p>Pizza has 3 stars, but each star is worth <b>5</b>! Skip count: 5, 10, <b>15 votes</b>.</p>
            <p>Tacos: 5, 10 — <b>10 votes</b>.</p>
            <div class="callout"><b>Remember:</b> Never count the pictures alone — multiply by the key!</div>`,
          narration: "A picture graph uses little pictures to show data. But here's the trick. Read the key first! The key tells you how many each picture stands for. In our graph, each star equals 5 votes. Pizza has 3 stars, but each star is worth 5! Skip count: 5, 10, 15 votes. Tacos has 2 stars: 5, 10. 10 votes. Never count the pictures alone. Multiply by the key!",
        },
        {
          id: "s3",
          title: "Bar Graphs and the Scale",
          html: `
            <p>A <b>bar graph</b> uses bars instead of pictures. The <b>scale</b> on the side tells you what each line is worth.</p>
            <p>The academy's shirt-color vote came in like this:</p>
            <table>
              <tr><th>Color</th><th>Votes</th></tr>
              <tr><td>Blue</td><td>28</td></tr>
              <tr><td>Red</td><td>15</td></tr>
              <tr><td>Green</td><td>23</td></tr>
              <tr><td>Yellow</td><td>17</td></tr>
            </table>
            <p>To draw it, pick a scale that counts by <b>5s</b>: 0, 5, 10, 15, 20, 25, 30. Blue's bar rises past 25, almost to 30. Red's bar stops right at 15.</p>
            <div class="callout"><b>Remember:</b> When a bar ends <u>between</u> two lines, its value is between those two numbers.</div>`,
          narration: "A bar graph uses bars instead of pictures. The scale on the side tells you what each line is worth. The academy's shirt-color vote came in like this. Blue got 28 votes. Red got 15. Green got 23. Yellow got 17. To draw it, pick a scale that counts by 5s: 0, 5, 10, 15, 20, 25, 30. Blue's bar rises past 25, almost to 30. Red's bar stops right at 15. When a bar ends between two lines, its value is between those two numbers.",
        },
        {
          id: "s4",
          title: "How Many More? How Many Fewer?",
          html: `
            <p>Graphs love comparison questions! Watch me solve one from the shirt vote:</p>
            <p><b>How many more cadets voted Blue than Red?</b></p>
            <p>Step 1: Read the graph. Blue = <b>28</b>, Red = <b>15</b>.</p>
            <p>Step 2: "How many more" means <b>subtract</b>.</p>
            <div class="big-visual">28 − 15 = 13</div>
            <p><b>13 more cadets</b> voted Blue. ✔️</p>
            <p>Some questions take <b>two steps</b>: "How many votes did Red and Yellow get together?" First add: 15 + 17 = <b>32 votes</b>.</p>`,
          narration: "Graphs love comparison questions! Watch me solve one from the shirt vote. How many more cadets voted blue than red? Step 1: read the graph. Blue is 28. Red is 15. Step 2: how many more means subtract. 28 minus 15 equals 13. 13 more cadets voted blue. Some questions take two steps. How many votes did red and yellow get together? First add: 15 plus 17 equals 32 votes.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Your turn! Here's the moon-pet picture graph:</p>
            <div class="big-visual">
              <div class="vis-row">Key: each 🚀 = 10 pets</div>
              <div class="vis-row">Space cats &nbsp;🚀🚀🚀🚀</div>
              <div class="vis-row">Space dogs 🚀🚀🚀</div>
            </div>
            <p>Step 1: Space cats: 4 rockets × 10 = <b>40 pets</b>.</p>
            <p>Step 2: Space dogs: 3 rockets × 10 = <b>30 pets</b>.</p>
            <p>Step 3: How many more cats than dogs? 40 − 30 = <b>10 more space cats</b>! 🐱</p>`,
          narration: "Your turn! Here's the moon-pet picture graph. The key says each rocket equals 10 pets. Step 1: space cats have 4 rockets. 4 times 10 is 40 pets. Step 2: space dogs have 3 rockets. 3 times 10 is 30 pets. Step 3: how many more cats than dogs? 40 minus 30 equals 10 more space cats!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Data decoded, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can read a picture graph using its key.</p>
              <p>✔️ I can read a bar graph using its scale.</p>
              <p>✔️ I can solve "how many more" and "how many fewer" problems from a graph.</p>
            </div>
            <p>Go show that quiz who's boss! 📊</p>`,
          narration: "Data decoded, Cadet! You can now say: I can read a picture graph using its key. I can read a bar graph using its scale. I can solve how many more and how many fewer problems from a graph. Go show that quiz who's boss!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "The key says each 🍪 = 2 cookies. Zork's row shows 4 cookie pictures. How many cookies did Zork bake?",
            visual: "Key: each 🍪 = 2 cookies<br>Zork &nbsp;🍪🍪🍪🍪",
            options: ["8 cookies", "4 cookies", "10 cookies", "6 cookies"],
            answer: 0,
            hints: {
              verbal: "Don't count the pictures alone — each picture is worth 2! Skip count by 2s.",
              example: "If each 🌟 = 5 and there are 3 stars, that's 5, 10, 15.",
              narrow: [1],
            },
            explain: "4 pictures worth 2 each: 4 × 2 = 8 cookies.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "The key says each 🟦 = 5 votes. Pizza's row shows 3 squares. How many votes did pizza get?",
            visual: "Key: each 🟦 = 5 votes<br>Pizza &nbsp;🟦🟦🟦<br>Tacos &nbsp;🟦🟦",
            answer: 15,
            hints: {
              verbal: "Each square stands for 5 votes. Skip count by 5s: 5, 10, ...",
              example: "2 squares worth 5 each: 5, 10 — that's 10 votes.",
            },
            explain: "3 squares worth 5 votes each: 5, 10, 15. Pizza got 15 votes.",
          },
          {
            id: "q3", type: "mc",
            prompt: "The Rocket Team scored 20 points. The key says each ⭐ = 5 points. How many stars should we draw?",
            options: ["4 stars", "20 stars", "5 stars", "2 stars"],
            answer: 0,
            hints: {
              verbal: "How many 5s make 20? Think 5, 10, 15, 20 — count the jumps.",
              example: "For 30 points with each star worth 10: 10, 20, 30 — draw 3 stars.",
              narrow: [1],
            },
            explain: "5, 10, 15, 20 — four jumps of 5. Draw 4 stars.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "How many more cadets voted Blue than Red?",
            passage: "The shirt-color vote: Blue — 28, Red — 15, Green — 23, Yellow — 17.",
            visual: "Blue 28 &nbsp;·&nbsp; Red 15 &nbsp;·&nbsp; Green 23 &nbsp;·&nbsp; Yellow 17",
            answer: 13,
            hints: {
              verbal: "'How many more' means subtract the smaller number from the bigger one.",
              example: "If cats got 12 votes and dogs got 9, that's 12 − 9 = 3 more cats.",
            },
            explain: "Blue 28 minus Red 15: 28 − 15 = 13 more votes for Blue.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: On a scaled picture graph, one picture can stand for more than 1 thing.",
            answer: true,
            hints: {
              verbal: "Think about the key in our snack graph — what was each star worth?",
              example: "In the moon-pet graph, each rocket stood for 10 whole pets.",
            },
            explain: "True! The key tells you the value — one picture can mean 2, 5, 10, or more.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Which color got the <b>most</b> votes?",
            passage: "The shirt-color vote: Blue — 28, Red — 15, Green — 23, Yellow — 17.",
            visual: "Blue 28 &nbsp;·&nbsp; Red 15 &nbsp;·&nbsp; Green 23 &nbsp;·&nbsp; Yellow 17",
            options: ["Blue", "Green", "Yellow", "Red"],
            answer: 0,
            hints: {
              verbal: "The most votes means the tallest bar — the biggest number in the list.",
              example: "With 7, 12, and 9 votes, the winner is 12 — the biggest number.",
              narrow: [1],
            },
            explain: "Blue's 28 is bigger than 23, 17, and 15 — Blue wins!",
          },
          {
            id: "q7", type: "numeric",
            prompt: "Two-step challenge! How many more votes did Green and Yellow get <b>together</b> than Blue got alone?",
            passage: "The shirt-color vote: Blue — 28, Red — 15, Green — 23, Yellow — 17.",
            visual: "Blue 28 &nbsp;·&nbsp; Red 15 &nbsp;·&nbsp; Green 23 &nbsp;·&nbsp; Yellow 17",
            answer: 12,
            hints: {
              verbal: "Step 1: add Green + Yellow. Step 2: subtract Blue from that total.",
              example: "If A = 10 and B = 15 together vs C = 20: 10 + 15 = 25, then 25 − 20 = 5.",
            },
            explain: "Step 1: 23 + 17 = 40. Step 2: 40 − 28 = 12 more votes.",
          },
          {
            id: "q8", type: "mc",
            prompt: "A bar graph's scale counts by 10s: 0, 10, 20, 30. The Comets' bar ends exactly <b>halfway between</b> the 20 line and the 30 line. How many points do the Comets have?",
            options: ["25", "20", "30", "21"],
            answer: 0,
            hints: {
              verbal: "Halfway between 20 and 30 — what number sits right in the middle?",
              example: "Halfway between 10 and 20 is 15.",
              narrow: [2],
            },
            explain: "Halfway between 20 and 30 is 25 — the bar shows 25 points.",
          },
        ],
      },
    },

    /* ============ M4 — Rulers & Line Plots (3.MD.4) ============ */
    {
      id: "math-u7-m4",
      title: "Rulers & Line Plots",
      icon: "📏",
      standard: "3.MD.4",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Moon Crystal Collection",
          html: `
            <p>Look what we found, Cadet — a whole tray of sparkling <b>moon crystals</b>!</p>
            <div class="big-visual">
              <div class="vis-row">💎 💎 💎 💎 💎</div>
            </div>
            <p>The science lab needs to know how long each crystal is. But these crystals are tricky — most of them are <u>not</u> a whole number of inches long!</p>
            <p>Today we'll measure to the nearest <b>half inch</b> and <b>quarter inch</b>, then show it all on a special graph called a <b>line plot</b>.</p>`,
          narration: "Look what we found, Cadet. A whole tray of sparkling moon crystals! The science lab needs to know how long each crystal is. But these crystals are tricky. Most of them are not a whole number of inches long! Today we'll measure to the nearest half inch and quarter inch, then show it all on a special graph called a line plot.",
        },
        {
          id: "s2",
          title: "Halves and Quarters on a Ruler",
          html: `
            <p>Zoom in on a ruler between 0 and 1. There are little marks <u>inside</u> the inch!</p>
            <div class="big-visual">0 —— 1/4 —— 2/4 —— 3/4 —— 1</div>
            <p>The marks split each inch into <b>4 equal parts</b> called <b>quarter inches</b>.</p>
            <div class="vocab"><b>quarter inch</b> — one of 4 equal parts of an inch: 1/4, 2/4, 3/4.</div>
            <div class="callout"><b>Remember:</b> The middle mark, 2/4, is the same as <b>1/2</b> — the half inch!</div>`,
          narration: "Zoom in on a ruler between 0 and 1. There are little marks inside the inch! The marks split each inch into 4 equal parts called quarter inches. One fourth, two fourths, three fourths. The middle mark, two fourths, is the same as one half. The half inch!",
        },
        {
          id: "s3",
          title: "Measuring a Crystal",
          html: `
            <p>Let's measure a crystal together!</p>
            <p>Step 1: Line up one end of the crystal with the <b>0</b> on the ruler.</p>
            <p>Step 2: Look where the other end stops.</p>
            <div class="big-visual">1 —— 1&nbsp;1/4 —— <b>1&nbsp;2/4</b> —— 1&nbsp;3/4 —— 2<br>💎 ends right at the middle mark</div>
            <p>Step 3: The crystal ends at the mark halfway between 1 and 2. That's <b>1 1/2 inches</b> (the same as 1 2/4)!</p>
            <div class="callout"><b>Remember:</b> Always start at 0, and read the closest mark.</div>`,
          narration: "Let's measure a crystal together! Step 1: line up one end of the crystal with the 0 on the ruler. Step 2: look where the other end stops. Step 3: the crystal ends at the mark halfway between 1 and 2. That's 1 and one half inches. The same as 1 and two fourths! Always start at 0, and read the closest mark.",
        },
        {
          id: "s4",
          title: "Meet the Line Plot",
          html: `
            <p>We measured the whole crystal tray. Now let's show the data on a <b>line plot</b>!</p>
            <div class="vocab"><b>line plot</b> — a number line with an ✖ above it for <u>each</u> thing you measured.</div>
            <div class="big-visual">
              <div class="vis-row">Crystal lengths (inches)</div>
              <div class="vis-row">1/4 | ✖✖</div>
              <div class="vis-row">2/4 | ✖✖✖</div>
              <div class="vis-row">3/4 | ✖✖✖✖</div>
              <div class="vis-row">&nbsp;1&nbsp;&nbsp; | ✖</div>
            </div>
            <p>Each ✖ is <b>one crystal</b>. Two crystals measured 1/4 inch, three measured 2/4 inch, four measured 3/4 inch, and one measured a whole inch.</p>`,
          narration: "We measured the whole crystal tray. Now let's show the data on a line plot! A line plot is a number line with an X above it for each thing you measured. Each X is one crystal. Two crystals measured one fourth inch. Three measured two fourths inch. Four measured three fourths inch. And one measured a whole inch.",
        },
        {
          id: "s5",
          title: "Try It With Me: Read the Plot",
          html: `
            <p>Let's read the crystal line plot together!</p>
            <div class="big-visual">
              <div class="vis-row">1/4 | ✖✖</div>
              <div class="vis-row">2/4 | ✖✖✖</div>
              <div class="vis-row">3/4 | ✖✖✖✖</div>
              <div class="vis-row">&nbsp;1&nbsp;&nbsp; | ✖</div>
            </div>
            <p><b>Which length happened most often?</b> The longest row of ✖s is at 3/4 — that's the most common length!</p>
            <p><b>How many crystals in all?</b> Count every ✖: 2 + 3 + 4 + 1 = <b>10 crystals</b>.</p>
            <p>You just read a line plot like a real space scientist! 🔬</p>`,
          narration: "Let's read the crystal line plot together! Which length happened most often? The longest row of X's is at three fourths. That's the most common length! How many crystals in all? Count every X. 2 plus 3 plus 4 plus 1 equals 10 crystals. You just read a line plot like a real space scientist!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Ruler mastered, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can measure to the nearest half inch and quarter inch.</p>
              <p>✔️ I can show measurements on a line plot with ✖ marks.</p>
              <p>✔️ I can read a line plot to answer questions about data.</p>
            </div>
            <p>One more quiz and Measurement Moon is yours! 🌙</p>`,
          narration: "Ruler mastered, Cadet! You can now say: I can measure to the nearest half inch and quarter inch. I can show measurements on a line plot with X marks. I can read a line plot to answer questions about data. One more quiz and Measurement Moon is yours!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "A space bug ends at the mark exactly <b>halfway between 1 and 2</b> on the ruler. How long is it?",
            visual: "1 —— · —— <b>🐛</b> —— · —— 2",
            options: ["1 1/2 inches", "1 inch", "2 inches", "1 1/4 inches"],
            answer: 0,
            hints: {
              verbal: "Halfway between 1 and 2 is the half-inch mark past the 1.",
              example: "Something ending halfway between 3 and 4 measures 3 1/2 inches.",
              narrow: [3],
            },
            explain: "Halfway between 1 and 2 is the half mark: 1 1/2 inches.",
          },
          {
            id: "q2", type: "mc",
            prompt: "A tiny crystal ends at the <b>first</b> small mark after 0. How long is it?",
            visual: "0 —💎— 1/4 —— 2/4 —— 3/4 —— 1",
            options: ["1/4 inch", "1/2 inch", "3/4 inch", "1 inch"],
            answer: 0,
            hints: {
              verbal: "The inch is split into 4 equal parts. The first mark is one of those four parts.",
              example: "The marks in order are 1/4, 2/4, 3/4 — the first one is 1/4.",
              narrow: [1],
            },
            explain: "The first quarter mark after 0 is 1/4 inch.",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Look at the line plot. How many crystals measured 2/4 inch?",
            visual: "1/4 | ✖✖<br>2/4 | ✖✖✖<br>3/4 | ✖✖✖✖<br>&nbsp;1&nbsp;&nbsp; | ✖",
            answer: 3,
            hints: {
              verbal: "Find the 2/4 row and count the X marks in it.",
              example: "If the 1/4 row shows ✖✖, then 2 crystals measured 1/4 inch.",
            },
            explain: "The 2/4 row has 3 X marks — 3 crystals measured 2/4 inch.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "Using the same line plot, how many crystals were measured <b>in all</b>?",
            visual: "1/4 | ✖✖<br>2/4 | ✖✖✖<br>3/4 | ✖✖✖✖<br>&nbsp;1&nbsp;&nbsp; | ✖",
            answer: 10,
            hints: {
              verbal: "Every X is one crystal. Add up the X marks in all four rows.",
              example: "A plot with rows of 1, 2, and 3 X marks shows 1 + 2 + 3 = 6 objects.",
            },
            explain: "Add every X: 2 + 3 + 4 + 1 = 10 crystals in all.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: On a line plot, each ✖ stands for one object that was measured.",
            answer: true,
            hints: {
              verbal: "Think about the crystal plot — what did each X mean?",
              example: "Three X marks above 2/4 meant exactly three crystals of that length.",
            },
            explain: "True! One X = one measured object. Count the X marks to count the objects.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Which is <b>longer</b>: a stick that measures 3/4 inch or a stick that measures 1/4 inch?",
            options: ["The 3/4 inch stick", "The 1/4 inch stick", "They are the same length"],
            answer: 0,
            hints: {
              verbal: "Picture the ruler: 1/4 is the first mark, 3/4 is the third mark. Which is farther from 0?",
              example: "2/4 is farther along the ruler than 1/4, so 2/4 inch is longer.",
              narrow: [1],
            },
            explain: "3/4 is three quarter-steps from 0, but 1/4 is only one — so 3/4 inch is longer.",
          },
          {
            id: "q7", type: "mc",
            prompt: "A ribbon ends at the <b>third</b> small mark after the 2. How long is the ribbon?",
            visual: "2 —— 2 1/4 —— 2 2/4 —— <b>🎀</b> —— 3",
            options: ["2 3/4 inches", "2 1/4 inches", "3 inches", "2 inches"],
            answer: 0,
            hints: {
              verbal: "Count the quarter marks after the 2: first is 1/4, second is 2/4, third is...",
              example: "The third mark after 5 would be 5 3/4 inches.",
              narrow: [1],
            },
            explain: "Three quarter marks past the 2 is 2 3/4 inches.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "From the line plot: how many MORE crystals measured 3/4 inch than 1/4 inch?",
            visual: "1/4 | ✖✖<br>2/4 | ✖✖✖<br>3/4 | ✖✖✖✖<br>&nbsp;1&nbsp;&nbsp; | ✖",
            answer: 2,
            hints: {
              verbal: "Count the X marks in the 3/4 row and the 1/4 row, then subtract.",
              example: "If one row has 5 X marks and another has 3, that's 5 − 3 = 2 more.",
            },
            explain: "3/4 has 4 X marks and 1/4 has 2: 4 − 2 = 2 more crystals.",
          },
        ],
      },
    },
  ],
});
