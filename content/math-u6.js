/* Unit 6 — Area Asteroid (3.MD.5, 3.MD.6, 3.MD.7, 3.MD.8)
   Area as covering with unit squares, the length × width shortcut,
   break-apart (distributive) areas, and perimeter. */
window.COURSE_CONTENT.push({
  id: "math-u6",
  subject: "math",
  order: 6,
  title: "Area Asteroid",
  subtitle: "Covering space with squares",
  planet: { emoji: "🪨", color: "#FFC53D" },
  badgeName: "Area Asteroid Star",
  modules: [

    /* ============ M1 — What Is Area? (3.MD.5, 3.MD.6) ============ */
    {
      id: "math-u6-m1",
      title: "What Is Area?",
      icon: "🟨",
      standard: "3.MD.5, 3.MD.6",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Area Asteroid!",
          html: `
            <p>Cadet, we just landed on Area Asteroid — and our landing pad needs a new floor!</p>
            <p>The repair robots cover floors with <b>golden square panels</b>, like this:</p>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨</div>
            </div>
            <p>How much floor did we cover? Just count the squares! That amount of flat space is called <b>area</b>.</p>`,
          narration: "Cadet, we just landed on Area Asteroid. And our landing pad needs a new floor! The repair robots cover floors with golden square panels. How much floor did we cover? Just count the squares! That amount of flat space is called area.",
        },
        {
          id: "s2",
          title: "Unit Squares",
          html: `
            <p><b>Area</b> is the amount of flat space <u>inside</u> a shape. We measure it with <b>unit squares</b>.</p>
            <div class="vocab"><b>unit square</b> — a square with sides 1 unit long. It covers exactly 1 square unit of space.</div>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨</div>
            </div>
            <p>This shape is covered by <b>6 unit squares</b>, so its area is <b>6 square units</b>.</p>
            <div class="callout"><b>Remember:</b> The squares must cover the whole shape with <u>no gaps</u> and <u>no overlaps</u> — like perfect floor tiles!</div>`,
          narration: "Area is the amount of flat space inside a shape. We measure it with unit squares. A unit square is a square with sides 1 unit long. It covers exactly 1 square unit of space. This shape is covered by 6 unit squares, so its area is 6 square units. Remember: the squares must cover the whole shape with no gaps and no overlaps. Like perfect floor tiles!",
        },
        {
          id: "s3",
          title: "Space Units for Area",
          html: `
            <p>Area units are named after the size of each square:</p>
            <table>
              <tr><th>Unit</th><th>Good for measuring</th></tr>
              <tr><td>square centimeter</td><td>a sticker</td></tr>
              <tr><td>square inch</td><td>a cookie</td></tr>
              <tr><td>square foot</td><td>a bathroom floor</td></tr>
              <tr><td>square meter</td><td>a whole classroom</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Small things get small square units. Big things get big square units. Always say "square" before the unit — 6 <b>square feet</b>, not just 6 feet!</div>`,
          narration: "Area units are named after the size of each square. A square centimeter is good for measuring a sticker. A square inch, a cookie. A square foot, a bathroom floor. A square meter, a whole classroom. Small things get small square units. Big things get big square units. Always say square before the unit. 6 square feet, not just 6 feet!",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>The robots tiled a charging mat. Let's find its area together!</p>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨🟨</div>
            </div>
            <p>Step 1: Check for gaps or overlaps. … None. Perfect tiling!</p>
            <p>Step 2: Count every unit square: 1, 2, 3, 4, 5, 6, 7, 8, 9, <b>10</b>.</p>
            <p>Step 3: Say it with the unit!</p>
            <div class="big-visual">Area = 10 square units</div>`,
          narration: "The robots tiled a charging mat. Let's find its area together! Step 1: check for gaps or overlaps. None. Perfect tiling! Step 2: count every unit square. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Step 3: say it with the unit! The area is 10 square units.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Area power loading, Cadet! Here's what you can do now:</p>
            <div class="callout">
              <p>✔️ I can say what area means: the flat space inside a shape.</p>
              <p>✔️ I can count unit squares to find an area — no gaps, no overlaps.</p>
              <p>✔️ I can name area units like square centimeters and square feet.</p>
            </div>
            <p>Get 7 out of 8 right to earn your star! 🚀</p>`,
          narration: "Area power loading, Cadet! Here's what you can do now. I can say what area means: the flat space inside a shape. I can count unit squares to find an area. No gaps, no overlaps. I can name area units like square centimeters and square feet. Get 7 out of 8 right to earn your star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What is <b>area</b>?",
            options: [
              "The amount of flat space inside a shape",
              "The distance around a shape",
              "How heavy a shape is",
              "The number of corners a shape has",
            ],
            answer: 0,
            hints: {
              verbal: "Think about the golden floor panels. Did they go around the edge, or fill up the inside?",
              example: "The tiles covering a whole bathroom floor measure its area — the space inside.",
              narrow: [1],
            },
            explain: "Area is the amount of flat space inside a shape — like the tiles covering a floor.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Count the unit squares. What is the area of this shape in square units?",
            visual: "🟨🟨🟨🟨<br>🟨🟨🟨🟨<br>🟨🟨🟨🟨",
            answer: 12,
            hints: {
              verbal: "Count every yellow square, one at a time. Don't skip any rows!",
              example: "A shape covered by 2 rows of 3 squares has 6 squares, so its area is 6 square units.",
            },
            explain: "There are 3 rows with 4 squares each: 4, 8, 12. The area is 12 square units.",
          },
          {
            id: "q3", type: "tf",
            prompt: "True or false: When you cover a shape to measure area, the unit squares can leave gaps.",
            answer: false,
            hints: {
              verbal: "Think of floor tiles. Would a floor with holes in it be fully covered?",
              example: "6 squares with a gap in the middle do NOT cover 7 spaces — the gap isn't measured.",
            },
            explain: "False! Unit squares must cover the whole shape with no gaps and no overlaps.",
          },
          {
            id: "q4", type: "mc",
            prompt: "A shape is covered by exactly 9 unit squares with no gaps or overlaps. What is its area?",
            options: ["9 square units", "9 units", "10 square units", "3 square units"],
            answer: 0,
            hints: {
              verbal: "The number of unit squares IS the area. Just remember to say 'square' with the unit.",
              example: "A shape covered by 5 unit squares has an area of 5 square units.",
              narrow: [1],
            },
            explain: "9 unit squares means an area of 9 SQUARE units — area always uses square units.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which unit would be best for measuring the area of a classroom floor?",
            options: ["Square meters", "Meters", "Square centimeters", "Minutes"],
            answer: 0,
            hints: {
              verbal: "Area needs SQUARE units. And a classroom is big, so pick a big square unit.",
              example: "A sticker is tiny, so we'd use square centimeters. A classroom is much bigger.",
              narrow: [1],
            },
            explain: "A classroom is big and flat, so square meters fit best. Plain meters measure length, not area.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "The robots tiled a doormat with unit squares. Count them. What is the area in square units?",
            visual: "🟨🟨🟨🟨🟨🟨<br>🟨🟨🟨🟨🟨🟨",
            answer: 12,
            hints: {
              verbal: "There are 2 rows. Count one row, then count the other and add them up.",
              example: "For 2 rows of 4 squares: 4 and 4 more make 8 square units.",
            },
            explain: "2 rows of 6 squares: 6 + 6 = 12. The area is 12 square units.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which shape has the <b>bigger area</b>?",
            visual: "Shape A:<br>🟨🟨🟨🟨<br>🟨🟨🟨🟨<br><br>Shape B:<br>🟨🟨<br>🟨🟨<br>🟨🟨",
            options: [
              "Shape A — it covers 8 square units",
              "Shape B — it covers 6 square units",
              "They have the same area",
              "You can't compare areas",
            ],
            answer: 0,
            hints: {
              verbal: "Count the squares in each shape. More squares means more area.",
              example: "A shape with 10 squares has a bigger area than a shape with 7 squares.",
              narrow: [1],
            },
            explain: "Shape A has 8 unit squares and Shape B has only 6, so Shape A has the bigger area.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "A robot covers a solar panel with unit squares: 4 rows with 5 squares in each row. What is the area in square units?",
            answer: 20,
            hints: {
              verbal: "Skip count by 5 for each row: 5, 10, ...",
              example: "3 rows of 4 squares: 4, 8, 12 — the area is 12 square units.",
            },
            explain: "4 rows of 5: 5, 10, 15, 20. The area is 20 square units.",
          },
        ],
      },
    },

    /* ============ M2 — The Area Shortcut (3.MD.7a, 3.MD.7b) ============ */
    {
      id: "math-u6-m2",
      title: "The Area Shortcut",
      icon: "📐",
      standard: "3.MD.7a, 3.MD.7b",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Counting Is Sloooow",
          html: `
            <p>Cadet, the robots tiled a HUGE cargo bay floor, and Cosmo tried to count every single square…</p>
            <p>"1, 2, 3… 27… wait, did I count that one already?!" 😵</p>
            <p>Counting one square at a time is slow, and it's easy to lose your place.</p>
            <div class="callout"><b>Good news:</b> Rectangles hide a shortcut. You already know it — it's multiplication!</div>`,
          narration: "Cadet, the robots tiled a huge cargo bay floor, and Cosmo tried to count every single square. 1, 2, 3, 27, wait, did I count that one already?! Counting one square at a time is slow, and it's easy to lose your place. Good news: rectangles hide a shortcut. You already know it. It's multiplication!",
        },
        {
          id: "s2",
          title: "Rows and Columns",
          html: `
            <p>Look at this tiled floor. It has <b>3 rows</b> with <b>4 squares</b> in each row:</p>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨</div>
            </div>
            <p>Three ways to count it — they ALL give 12:</p>
            <table>
              <tr><th>Add the rows</th><th>Add the columns</th><th>Multiply!</th></tr>
              <tr><td>4 + 4 + 4 = 12</td><td>3 + 3 + 3 + 3 = 12</td><td>3 × 4 = 12</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> A tiled rectangle is just an array — rows × squares-in-each-row = area.</div>`,
          narration: "Look at this tiled floor. It has 3 rows with 4 squares in each row. Three ways to count it, and they all give 12. Add the rows: 4 plus 4 plus 4 equals 12. Add the columns: 3 plus 3 plus 3 plus 3 equals 12. Or multiply: 3 times 4 equals 12. A tiled rectangle is just an array. Rows times squares in each row equals area.",
        },
        {
          id: "s3",
          title: "Area = Length × Width",
          html: `
            <p>Here's the shortcut, Cadet:</p>
            <div class="big-visual">Area of a rectangle = length × width</div>
            <p>Why does it work? The <b>length</b> tells how many squares fit in one row. The <b>width</b> tells how many rows there are. Multiply and you've counted every square at once!</p>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨🟨🟨</div>
            </div>
            <p>Length 6, width 2 → 2 × 6 = <b>12 square units</b>. No counting needed!</p>`,
          narration: "Here's the shortcut, Cadet. The area of a rectangle equals length times width. Why does it work? The length tells how many squares fit in one row. The width tells how many rows there are. Multiply and you've counted every square at once! Length 6, width 2. 2 times 6 equals 12 square units. No counting needed!",
        },
        {
          id: "s4",
          title: "Betsy's Bathroom Floor",
          html: `
            <p>Real mission time! <b>Betsy</b> is tiling her bathroom floor. It is <b>6 feet</b> wide and <b>8 feet</b> long, and each tile covers exactly <b>1 square foot</b>.</p>
            <p>How many tiles does she need?</p>
            <p>Step 1: Picture it — 6 rows of tiles with 8 tiles in each row.</p>
            <p>Step 2: Multiply the side lengths.</p>
            <div class="big-visual">6 × 8 = 48</div>
            <p>Step 3: Answer with the unit: Betsy needs <b>48 tiles</b>, because the floor's area is <b>48 square feet</b>. ✔️</p>`,
          narration: "Real mission time! Betsy is tiling her bathroom floor. It is 6 feet wide and 8 feet long, and each tile covers exactly 1 square foot. How many tiles does she need? Step 1: picture it. 6 rows of tiles with 8 tiles in each row. Step 2: multiply the side lengths. 6 times 8 equals 48. Step 3: answer with the unit. Betsy needs 48 tiles, because the floor's area is 48 square feet.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>The space greenhouse has a rug that is <b>5 meters</b> long and <b>7 meters</b> wide. Let's find its area!</p>
            <p>Step 1: What are the side lengths? … 5 and 7.</p>
            <p>Step 2: Multiply!</p>
            <div class="big-visual">5 × 7 = 35</div>
            <p>Step 3: Say it with square units: the rug's area is <b>35 square meters</b>. Nice work, Cadet! 🌱</p>`,
          narration: "The space greenhouse has a rug that is 5 meters long and 7 meters wide. Let's find its area! Step 1: what are the side lengths? 5 and 7. Step 2: multiply! 5 times 7 equals 35. Step 3: say it with square units. The rug's area is 35 square meters. Nice work, Cadet!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Shortcut unlocked! You can now say:</p>
            <div class="callout">
              <p>✔️ I can find a rectangle's area by multiplying length × width.</p>
              <p>✔️ I know why it works: rows × squares-in-each-row counts every square.</p>
              <p>✔️ I can solve real tiling problems, like Betsy's 6 × 8 bathroom floor.</p>
            </div>
            <p>Quiz time — multiply your way to a star! ⭐</p>`,
          narration: "Shortcut unlocked! You can now say: I can find a rectangle's area by multiplying length times width. I know why it works. Rows times squares in each row counts every square. I can solve real tiling problems, like Betsy's 6 by 8 bathroom floor. Quiz time. Multiply your way to a star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which equation is the <b>shortcut</b> for the area of this tiled floor?",
            visual: "🟨🟨🟨🟨🟨<br>🟨🟨🟨🟨🟨<br>🟨🟨🟨🟨🟨",
            options: ["3 × 5 = 15", "3 + 5 = 8", "5 − 3 = 2", "5 × 5 = 25"],
            answer: 0,
            hints: {
              verbal: "Count the rows, then count the squares in one row. Rows × squares-in-each-row.",
              example: "A floor with 2 rows of 6 squares has area 2 × 6 = 12 square units.",
              narrow: [1],
            },
            explain: "3 rows with 5 squares in each row: 3 × 5 = 15 square units.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Betsy tiles a bathroom floor that is 6 feet by 8 feet with square-foot tiles. How many tiles does she need?",
            answer: 48,
            hints: {
              verbal: "Each tile is 1 square foot, so the number of tiles equals the area. Multiply 6 × 8.",
              example: "A 2 ft × 5 ft floor needs 2 × 5 = 10 square-foot tiles.",
            },
            explain: "The area is 6 × 8 = 48 square feet, so Betsy needs 48 tiles.",
          },
          {
            id: "q3", type: "mc",
            prompt: "This array can be counted as 4 + 4 + 4. Which multiplication gives the <b>same</b> total?",
            visual: "🟨🟨🟨🟨<br>🟨🟨🟨🟨<br>🟨🟨🟨🟨",
            options: ["3 × 4", "4 × 4", "3 + 4", "4 × 5"],
            answer: 0,
            hints: {
              verbal: "How many 4s are being added? That count is the first factor.",
              example: "5 + 5 is two 5s, which is the same as 2 × 5.",
              narrow: [1],
            },
            explain: "4 + 4 + 4 is three 4s, so 3 × 4 = 12 — same total, speedy way.",
          },
          {
            id: "q4", type: "numeric",
            prompt: "A space postcard is 7 inches long and 4 inches wide. What is its area in square inches?",
            answer: 28,
            hints: {
              verbal: "Area of a rectangle = length × width. Multiply 7 × 4.",
              example: "A 3 in × 5 in card has area 3 × 5 = 15 square inches.",
            },
            explain: "7 × 4 = 28. The postcard's area is 28 square inches.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: To find a rectangle's area, you can multiply its side lengths instead of counting every square.",
            answer: true,
            hints: {
              verbal: "Think about the shortcut. Does rows × squares-in-each-row count every square?",
              example: "A 3 × 4 floor: counting gives 12 squares, and 3 × 4 = 12 too — same answer!",
            },
            explain: "True! Length × width counts all the rows of squares at once — that's the shortcut.",
          },
          {
            id: "q6", type: "mc",
            prompt: "A moon garden is 5 meters wide and 9 meters long. What is its area?",
            passage: "Captain Vega plants a rectangle-shaped garden on the moon. It measures 5 meters by 9 meters.",
            options: ["45 square meters", "14 square meters", "40 square meters", "54 square meters"],
            answer: 0,
            hints: {
              verbal: "Multiply the two side lengths — don't add them!",
              example: "A 4 m × 6 m garden has area 4 × 6 = 24 square meters.",
              narrow: [1],
            },
            explain: "5 × 9 = 45 square meters. Adding 5 + 9 = 14 finds nothing useful here — area needs multiplying.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which rug has the <b>bigger area</b>: a 6 × 3 rug or a 4 × 5 rug?",
            options: [
              "The 4 × 5 rug — 20 square units",
              "The 6 × 3 rug — 18 square units",
              "They have the same area",
              "Rugs don't have area",
            ],
            answer: 0,
            hints: {
              verbal: "Find each area with the shortcut, then compare the two products.",
              example: "A 2 × 9 rug (18) beats a 2 × 8 rug (16) because 18 > 16.",
              narrow: [1],
            },
            explain: "4 × 5 = 20 and 6 × 3 = 18. Since 20 > 18, the 4 × 5 rug has the bigger area.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "A hallway in the space station is 2 feet wide and 10 feet long. How many square-foot tiles cover it exactly?",
            answer: 20,
            hints: {
              verbal: "Multiply width × length: 2 × 10. Each square-foot tile covers 1 square foot.",
              example: "A 2 ft × 6 ft hallway needs 2 × 6 = 12 tiles.",
            },
            explain: "2 × 10 = 20. The hallway's area is 20 square feet, so it takes 20 tiles.",
          },
        ],
      },
    },

    /* ============ M3 — Break-Apart Areas (3.MD.7c, 3.MD.7d) ============ */
    {
      id: "math-u6-m3",
      title: "Break-Apart Areas",
      icon: "🧱",
      standard: "3.MD.7c, 3.MD.7d",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Crack It Like an Asteroid!",
          html: `
            <p>Uh oh, Cadet — the fact <b>6 × 7</b> just rolled up, and it's a big one!</p>
            <p>Out here on Area Asteroid, when a rock is too big, we don't panic…</p>
            <div class="big-visual">🪨 → 🪨🪨</div>
            <p>…we <b>crack it into smaller pieces</b>! You can do the same thing with a hard multiplication fact: break it into two easy facts.</p>`,
          narration: "Uh oh, Cadet. The fact 6 times 7 just rolled up, and it's a big one! Out here on Area Asteroid, when a rock is too big, we don't panic. We crack it into smaller pieces! You can do the same thing with a hard multiplication fact. Break it into two easy facts.",
        },
        {
          id: "s2",
          title: "The Break-Apart Trick",
          html: `
            <p>Picture 6 × 7 as a rectangle: 6 rows of 7 squares. Now slice the 7 into <b>5 and 2</b>:</p>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨🟨🟨🟦🟦</div>
              <div class="vis-row">🟨🟨🟨🟨🟨🟦🟦</div>
              <div class="vis-row">🟨🟨🟨🟨🟨🟦🟦</div>
              <div class="vis-row">🟨🟨🟨🟨🟨🟦🟦</div>
              <div class="vis-row">🟨🟨🟨🟨🟨🟦🟦</div>
              <div class="vis-row">🟨🟨🟨🟨🟨🟦🟦</div>
            </div>
            <p>Yellow part: 6 × 5 = <b>30</b>. Blue part: 6 × 2 = <b>12</b>. Add them back together:</p>
            <div class="big-visual">6 × 7 = (6 × 5) + (6 × 2) = 30 + 12 = 42</div>
            <div class="callout"><b>Remember:</b> Break one hard fact into two easy facts, then ADD the parts. Grown-ups call this the <b>distributive property</b>.</div>`,
          narration: "Picture 6 times 7 as a rectangle. 6 rows of 7 squares. Now slice the 7 into 5 and 2. The yellow part is 6 times 5, which is 30. The blue part is 6 times 2, which is 12. Add them back together. 6 times 7 equals 30 plus 12, which is 42. Break one hard fact into two easy facts, then add the parts. Grown-ups call this the distributive property.",
        },
        {
          id: "s3",
          title: "Try a Break-Apart!",
          html: `
            <p>Your turn to crack one, Cadet: <b>4 × 7</b>.</p>
            <p>Step 1: Slice the 7 into 5 and 2.</p>
            <p>Step 2: Solve the two easy pieces: 4 × 5 = <b>20</b> and 4 × 2 = <b>8</b>.</p>
            <p>Step 3: Add the pieces back together!</p>
            <div class="big-visual">4 × 7 = (4 × 5) + (4 × 2) = 20 + 8 = 28</div>
            <p>Boom — asteroid cracked! 💥</p>`,
          narration: "Your turn to crack one, Cadet. 4 times 7. Step 1: slice the 7 into 5 and 2. Step 2: solve the two easy pieces. 4 times 5 is 20, and 4 times 2 is 8. Step 3: add the pieces back together! 4 times 7 equals 20 plus 8, which is 28. Boom. Asteroid cracked!",
        },
        {
          id: "s4",
          title: "L-Shaped Rooms",
          html: `
            <p>The break-apart trick works on funny-shaped floors too! The space station has an <b>L-shaped room</b>. It's not a rectangle… but we can <u>cut it into two rectangles</u>!</p>
            <table>
              <tr><th>Piece</th><th>Size</th><th>Area</th></tr>
              <tr><td>Rectangle A</td><td>9 ft × 4 ft</td><td>36 square feet</td></tr>
              <tr><td>Rectangle B</td><td>2 ft × 6 ft</td><td>12 square feet</td></tr>
            </table>
            <p>Then <b>ADD</b> the two areas to get the whole room:</p>
            <div class="big-visual">(9 × 4) + (2 × 6) = 36 + 12 = 48 square feet</div>
            <div class="callout"><b>Remember:</b> Cut a tricky shape into rectangles, find each area, then ADD the parts.</div>`,
          narration: "The break-apart trick works on funny-shaped floors too! The space station has an L-shaped room. It's not a rectangle, but we can cut it into two rectangles! Rectangle A is 9 feet by 4 feet. That's 36 square feet. Rectangle B is 2 feet by 6 feet. That's 12 square feet. Then add the two areas to get the whole room. 36 plus 12 equals 48 square feet. Cut a tricky shape into rectangles, find each area, then add the parts.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Here's a little L-shaped charging pad. We already cut it into two rectangles:</p>
            <div class="big-visual">
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟨🟨🟨🟨</div>
              <div class="vis-row">🟦🟦</div>
              <div class="vis-row">🟦🟦</div>
            </div>
            <p>Step 1: Yellow rectangle: 3 × 4 = <b>12</b>.</p>
            <p>Step 2: Blue rectangle: 2 × 2 = <b>4</b>.</p>
            <p>Step 3: Add the parts!</p>
            <div class="big-visual">12 + 4 = 16 square units</div>`,
          narration: "Here's a little L-shaped charging pad. We already cut it into two rectangles. Step 1: the yellow rectangle is 3 rows of 4, so 3 times 4 equals 12. Step 2: the blue rectangle is 2 rows of 2, so 2 times 2 equals 4. Step 3: add the parts! 12 plus 4 equals 16 square units.",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Break-apart power engaged! You can now say:</p>
            <div class="callout">
              <p>✔️ I can break a hard fact apart: 6 × 7 = (6 × 5) + (6 × 2).</p>
              <p>✔️ I can cut an L-shaped figure into rectangles.</p>
              <p>✔️ I can ADD the parts to find the whole area.</p>
            </div>
            <p>Go crack that quiz, Cadet! 🪨💥</p>`,
          narration: "Break-apart power engaged! You can now say: I can break a hard fact apart. 6 times 7 equals 6 times 5 plus 6 times 2. I can cut an L-shaped figure into rectangles. I can add the parts to find the whole area. Go crack that quiz, Cadet!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which break-apart is a correct way to solve 6 × 7?",
            options: [
              "(6 × 5) + (6 × 2)",
              "(6 × 5) + (6 × 5)",
              "(6 × 7) + (6 × 7)",
              "(6 × 5) − (6 × 2)",
            ],
            answer: 0,
            hints: {
              verbal: "Slice the 7 into two numbers that ADD to 7. Then keep the 6 with both pieces.",
              example: "4 × 6 breaks into (4 × 5) + (4 × 1), because 5 + 1 = 6.",
              narrow: [1],
            },
            explain: "7 splits into 5 + 2, so 6 × 7 = (6 × 5) + (6 × 2) = 30 + 12 = 42.",
          },
          {
            id: "q2", type: "numeric",
            prompt: "Finish the break-apart: 6 × 7 = (6 × 5) + (6 × 2) = 30 + 12 = ?",
            answer: 42,
            hints: {
              verbal: "The two pieces are already solved — just add 30 + 12.",
              example: "For 3 × 7 = (3 × 5) + (3 × 2) = 15 + 6 = 21.",
            },
            explain: "30 + 12 = 42, so 6 × 7 = 42. The break-apart trick strikes again!",
          },
          {
            id: "q3", type: "numeric",
            prompt: "Crack this asteroid: use (8 × 5) + (8 × 2) to find 8 × 7.",
            answer: 56,
            hints: {
              verbal: "Solve each easy piece first: 8 × 5 and 8 × 2. Then add the two answers.",
              example: "For 9 × 7: (9 × 5) + (9 × 2) = 45 + 18 = 63.",
            },
            explain: "8 × 5 = 40 and 8 × 2 = 16, and 40 + 16 = 56. So 8 × 7 = 56.",
          },
          {
            id: "q4", type: "mc",
            prompt: "An L-shaped room is cut into a 9 ft × 4 ft rectangle and a 2 ft × 6 ft rectangle. What is the room's total area?",
            options: ["48 square feet", "36 square feet", "12 square feet", "21 square feet"],
            answer: 0,
            hints: {
              verbal: "Find both areas: 9 × 4 and 2 × 6. Then ADD them together.",
              example: "An L cut into 5 × 2 (10) and 3 × 1 (3) has total area 10 + 3 = 13 square units.",
              narrow: [1],
            },
            explain: "9 × 4 = 36 and 2 × 6 = 12. Adding both parts: 36 + 12 = 48 square feet.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: To find the area of an L-shaped figure, cut it into rectangles and <b>add</b> the areas of the parts.",
            answer: true,
            hints: {
              verbal: "Think about the L-shaped room. Did we multiply the two parts together, or add them?",
              example: "An L made of a 12-square part and a 4-square part covers 12 + 4 = 16 squares total.",
            },
            explain: "True! Each rectangle covers part of the shape, so adding the parts gives the whole area.",
          },
          {
            id: "q6", type: "numeric",
            prompt: "An L-shaped hallway is cut into a 5 × 3 rectangle and a 2 × 4 rectangle. What is its total area in square meters?",
            answer: 23,
            hints: {
              verbal: "Find each area first: 5 × 3 = ? and 2 × 4 = ? Then add the two answers.",
              example: "Parts of 4 × 2 (8) and 3 × 3 (9) make a total of 8 + 9 = 17 square units.",
            },
            explain: "5 × 3 = 15 and 2 × 4 = 8. Total area: 15 + 8 = 23 square meters.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Zip cut an L-shape into a 4 × 3 part and a 2 × 2 part. Then he <b>multiplied</b> 12 × 4. What should Zip do instead?",
            options: [
              "Add the parts: 12 + 4 = 16",
              "Subtract the parts: 12 − 4 = 8",
              "Multiply again: 12 × 4 = 48",
              "Count only the bigger part: 12",
            ],
            answer: 0,
            hints: {
              verbal: "The two rectangles each cover part of the shape. To get the WHOLE area, put the parts together.",
              example: "Parts of 10 and 3 squares make 10 + 3 = 13 squares — we add, never multiply the parts.",
              narrow: [3],
            },
            explain: "The parts cover 12 and 4 squares, so the whole shape covers 12 + 4 = 16 square units. Add, don't multiply!",
          },
          {
            id: "q8", type: "mc",
            prompt: "Which floor has the <b>bigger area</b>: a 6 × 6 square room, or an L-shaped room made of a 5 × 4 part and a 3 × 4 part?",
            options: [
              "The 6 × 6 square room — 36 square units",
              "The L-shaped room — 32 square units",
              "They have the same area",
              "L-shapes are always bigger",
            ],
            answer: 0,
            hints: {
              verbal: "Square room: 6 × 6. L-shaped room: (5 × 4) + (3 × 4). Find both, then compare.",
              example: "A 4 × 4 room (16) beats an L of 3 × 3 and 2 × 2 (9 + 4 = 13) because 16 > 13.",
              narrow: [1],
            },
            explain: "The square is 6 × 6 = 36. The L is 20 + 12 = 32. Since 36 > 32, the square room wins.",
          },
        ],
      },
    },

    /* ============ M4 — Perimeter Patrol (3.MD.8) ============ */
    {
      id: "math-u6-m4",
      title: "Perimeter Patrol",
      icon: "🚧",
      standard: "3.MD.8",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Fence Patrol!",
          html: `
            <p>New mission, Cadet! Space bunnies keep hopping into our moon garden. 🐰</p>
            <p>We need a fence that goes <b>all the way around the edge</b>:</p>
            <div class="big-visual">
              <div class="vis-row">🚧🚧🚧🚧🚧</div>
              <div class="vis-row">🚧🥕🥕🥕🚧</div>
              <div class="vis-row">🚧🥕🥕🥕🚧</div>
              <div class="vis-row">🚧🚧🚧🚧🚧</div>
            </div>
            <p>The distance <b>around</b> a shape has a special name: <b>perimeter</b>.</p>`,
          narration: "New mission, Cadet! Space bunnies keep hopping into our moon garden. We need a fence that goes all the way around the edge. The distance around a shape has a special name. Perimeter.",
        },
        {
          id: "s2",
          title: "Add All the Sides",
          html: `
            <div class="vocab"><b>perimeter</b> — the distance all the way around a shape. Find it by ADDING every side length.</div>
            <p>Our garden is a rectangle: <b>5 meters</b> long and <b>3 meters</b> wide. Walk around it and add each side:</p>
            <div class="big-visual">5 + 3 + 5 + 3 = 16</div>
            <p>The perimeter is <b>16 meters</b> — so we need 16 meters of fence!</p>
            <div class="callout"><b>Remember:</b> A rectangle's opposite sides match. Two sides are the length, two sides are the width.</div>`,
          narration: "Perimeter is the distance all the way around a shape. Find it by adding every side length. Our garden is a rectangle. 5 meters long and 3 meters wide. Walk around it and add each side. 5 plus 3 plus 5 plus 3 equals 16. The perimeter is 16 meters, so we need 16 meters of fence! Remember: a rectangle's opposite sides match. Two sides are the length, two sides are the width.",
        },
        {
          id: "s3",
          title: "The Mystery Side",
          html: `
            <p>Detective time! A fence has a perimeter of <b>16 feet</b>. Three sides measure 6, 2, and 6 feet — but one side got smudged off the map:</p>
            <div class="big-visual">6 + 2 + 6 + ? = 16</div>
            <p>Step 1: Add the sides you know: 6 + 2 + 6 = <b>14</b>.</p>
            <p>Step 2: How much more to reach 16? … 14 + <b>2</b> = 16.</p>
            <div class="big-visual">The mystery side is 2 feet! ✔️</div>
            <div class="callout"><b>Detective move:</b> Add the known sides, then figure out what's missing to reach the perimeter.</div>`,
          narration: "Detective time! A fence has a perimeter of 16 feet. Three sides measure 6, 2, and 6 feet, but one side got smudged off the map. Step 1: add the sides you know. 6 plus 2 plus 6 equals 14. Step 2: how much more to reach 16? 14 plus 2 equals 16. The mystery side is 2 feet! Detective move: add the known sides, then figure out what's missing to reach the perimeter.",
        },
        {
          id: "s4",
          title: "Area vs. Perimeter",
          html: `
            <p>Don't mix these up, Cadet — they're different superpowers!</p>
            <table>
              <tr><th></th><th>Perimeter</th><th>Area</th></tr>
              <tr><td>What is it?</td><td>distance AROUND</td><td>space INSIDE</td></tr>
              <tr><td>How to find it</td><td>ADD the sides</td><td>MULTIPLY length × width</td></tr>
              <tr><td>Units</td><td>meters, feet</td><td>square meters, square feet</td></tr>
            </table>
            <p>Same 4 × 3 garden, two answers: perimeter 4 + 3 + 4 + 3 = <b>14 meters</b> of fence, area 4 × 3 = <b>12 square meters</b> of dirt.</p>
            <div class="callout"><b>Remember:</b> Fence = perimeter. Floor tiles = area.</div>`,
          narration: "Don't mix these up, Cadet. They're different superpowers! Perimeter is the distance around. Area is the space inside. For perimeter, add the sides. For area, multiply length times width. Perimeter uses units like meters and feet. Area uses square units. The same 4 by 3 garden gives two answers. Perimeter: 4 plus 3 plus 4 plus 3 equals 14 meters of fence. Area: 4 times 3 equals 12 square meters of dirt. Fence equals perimeter. Floor tiles equal area.",
        },
        {
          id: "s5",
          title: "Same Fence, Different Space!",
          html: `
            <p>Here's a mind-bender: two gardens can use the <u>same fence</u> but hold <u>different space</u>!</p>
            <p>Both of these have a perimeter of <b>12</b>:</p>
            <table>
              <tr><th>1 × 5 garden</th><th>3 × 3 garden</th></tr>
              <tr><td>🟨🟨🟨🟨🟨</td><td>🟨🟨🟨<br>🟨🟨🟨<br>🟨🟨🟨</td></tr>
              <tr><td>Perimeter: 1+5+1+5 = 12</td><td>Perimeter: 3+3+3+3 = 12</td></tr>
              <tr><td>Area: 1 × 5 = <b>5</b></td><td>Area: 3 × 3 = <b>9</b></td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Same perimeter does NOT mean same area! And two shapes with the same area can have different perimeters too — a 2 × 6 and a 3 × 4 both have area 12, but perimeters 16 and 14.</div>`,
          narration: "Here's a mind-bender. Two gardens can use the same fence but hold different space! Both of these have a perimeter of 12. The 1 by 5 garden: perimeter 1 plus 5 plus 1 plus 5 equals 12, and area 1 times 5 equals 5. The 3 by 3 garden: perimeter 3 plus 3 plus 3 plus 3 equals 12, and area 3 times 3 equals 9. Same perimeter does not mean same area! And two shapes with the same area can have different perimeters too. A 2 by 6 and a 3 by 4 both have area 12, but perimeters 16 and 14.",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Patrol complete! You can now say:</p>
            <div class="callout">
              <p>✔️ I can find a perimeter by adding ALL the side lengths.</p>
              <p>✔️ I can find a mystery side when I know the perimeter.</p>
              <p>✔️ I know perimeter is the fence and area is the space inside — and same perimeter doesn't mean same area!</p>
            </div>
            <p>Pass this quiz and Area Asteroid is YOURS, Cadet! 🪨⭐</p>`,
          narration: "Patrol complete! You can now say: I can find a perimeter by adding all the side lengths. I can find a mystery side when I know the perimeter. I know perimeter is the fence and area is the space inside. And same perimeter doesn't mean same area! Pass this quiz and Area Asteroid is yours, Cadet!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "numeric",
            prompt: "A rectangle garden is 5 meters long and 3 meters wide. What is its perimeter in meters?",
            answer: 16,
            hints: {
              verbal: "Walk all the way around: add ALL four sides. A rectangle has two lengths and two widths.",
              example: "A 4 × 2 rectangle has perimeter 4 + 2 + 4 + 2 = 12.",
            },
            explain: "Add every side: 5 + 3 + 5 + 3 = 16 meters of fence all the way around.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What is <b>perimeter</b>?",
            options: [
              "The distance around a shape",
              "The space inside a shape",
              "How tall a shape is",
              "The number of sides a shape has",
            ],
            answer: 0,
            hints: {
              verbal: "Think of the bunny fence. Did it fill the inside of the garden, or wrap around the edge?",
              example: "Walking the whole edge of a playground measures its perimeter.",
              narrow: [1],
            },
            explain: "Perimeter is the distance around a shape. The space inside is the area — don't mix them up!",
          },
          {
            id: "q3", type: "numeric",
            prompt: "A fence has a perimeter of 18 feet. Three of its sides are 7, 2, and 7 feet. How long is the mystery side, in feet?",
            answer: 2,
            hints: {
              verbal: "Add the three sides you know. Then ask: how much more do I need to reach 18?",
              example: "Perimeter 16 with sides 6, 2, 6: those add to 14, so the last side is 2.",
            },
            explain: "7 + 2 + 7 = 16, and 16 + 2 = 18. The mystery side is 2 feet.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Leo wants to know how much fence to buy to go around his whole garden. Which should he find?",
            passage: "Leo's garden is a rectangle. He wants to put a fence along every edge so the space bunnies stay out.",
            options: [
              "The perimeter — add all the sides",
              "The area — multiply length × width",
              "The height of the tallest carrot",
              "The number of bunnies",
            ],
            answer: 0,
            hints: {
              verbal: "A fence goes AROUND the edge. Which one measures the distance around?",
              example: "Tiles for a floor need area. A fence around a yard needs perimeter.",
              narrow: [1],
            },
            explain: "A fence follows the edge all the way around, so Leo needs the perimeter. Area would tell him about the space inside.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Two gardens both have a perimeter of 12. Which one has the <b>bigger area</b>?",
            visual: "1 × 5 garden: 🟨🟨🟨🟨🟨<br><br>3 × 3 garden:<br>🟨🟨🟨<br>🟨🟨🟨<br>🟨🟨🟨",
            options: [
              "The 3 × 3 garden — area 9",
              "The 1 × 5 garden — area 5",
              "Same fence means same area",
              "Neither garden has an area",
            ],
            answer: 0,
            hints: {
              verbal: "The fences match, but count the squares INSIDE each garden and compare.",
              example: "With perimeter 8, a 2 × 2 square (area 4) holds more than a 1 × 3 rectangle (area 3).",
              narrow: [2],
            },
            explain: "1 × 5 = 5 and 3 × 3 = 9. Same perimeter of 12, but the square garden holds more space inside!",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: Two rectangles with the same perimeter always have the same area.",
            answer: false,
            hints: {
              verbal: "Remember the two gardens with the same 12-unit fence. Were their areas equal?",
              example: "Perimeter 12: a 1 × 5 has area 5, but a 3 × 3 has area 9 — different!",
            },
            explain: "False! A 1 × 5 and a 3 × 3 both have perimeter 12, but their areas are 5 and 9.",
          },
          {
            id: "q7", type: "numeric",
            prompt: "A square launch pad has sides that are each 7 meters long. What is its perimeter in meters?",
            answer: 28,
            hints: {
              verbal: "A square has 4 equal sides. Add 7 four times, or use 4 × 7.",
              example: "A square with 5-meter sides has perimeter 5 + 5 + 5 + 5 = 20 meters.",
            },
            explain: "All four sides are 7: 7 + 7 + 7 + 7 = 28 meters around.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Mira's rug is 4 feet by 3 feet. She says, \"The perimeter is 12 feet because 4 × 3 = 12.\" What went wrong?",
            options: [
              "She found the area — perimeter is 4 + 3 + 4 + 3 = 14 feet",
              "Nothing — perimeter means multiply the sides",
              "She should have subtracted: 4 − 3 = 1 foot",
              "Rugs don't have a perimeter",
            ],
            answer: 0,
            hints: {
              verbal: "Multiplying length × width gives the space INSIDE. Perimeter means ADD every side.",
              example: "A 5 × 2 rug: area is 5 × 2 = 10 square feet, but perimeter is 5 + 2 + 5 + 2 = 14 feet.",
              narrow: [1],
            },
            explain: "4 × 3 = 12 is the AREA in square feet. The perimeter adds all four sides: 4 + 3 + 4 + 3 = 14 feet.",
          },
        ],
      },
    },
  ],
});
