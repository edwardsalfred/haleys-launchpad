/* Unit 8 — Shape Sector (3.G.1, 3.G.2)
   The final math unit: classifying quadrilaterals by attributes,
   and partitioning shapes into equal parts named by unit fractions. */
window.COURSE_CONTENT.push({
  id: "math-u8",
  subject: "math",
  order: 8,
  title: "Shape Sector",
  subtitle: "The quadrilateral club",
  planet: { emoji: "🔷", color: "#FF6B6B" },
  badgeName: "Shape Sector Star",
  modules: [

    /* ============ M1 — The Quadrilateral Club (3.G.1) ============ */
    {
      id: "math-u8-m1",
      title: "The Quadrilateral Club",
      icon: "🔷",
      standard: "3.G.1",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Shape Sector!",
          html: `
            <p>Cadet, this is <b>Shape Sector</b> — the space station where every shape has a badge!</p>
            <div class="big-visual">
              <div class="vis-row">🔷 &nbsp; ⬜ &nbsp; ▭ &nbsp; 🔺 &nbsp; ⚪</div>
            </div>
            <p>Shapes get sorted by their <b>attributes</b> — how many sides they have, how long the sides are, and what their corners look like.</p>
            <div class="vocab"><b>attribute</b> — something you can notice and count about a shape, like its sides or its corners.</div>`,
          narration: "Cadet, this is Shape Sector! The space station where every shape has a badge. Shapes get sorted by their attributes. How many sides they have, how long the sides are, and what their corners look like. An attribute is something you can notice and count about a shape, like its sides or its corners.",
        },
        {
          id: "s2",
          title: "The Club Rule: Exactly 4 Sides",
          html: `
            <p>The coolest club on this station is the <b>Quadrilateral Club</b>. It has ONE rule:</p>
            <div class="callout"><b>Club rule:</b> A quadrilateral is a shape with <b>exactly 4 straight sides</b> (and 4 corners).</div>
            <table>
              <tr><th>Shape</th><th>Sides</th><th>In the club?</th></tr>
              <tr><td>🔺 triangle</td><td>3</td><td>No</td></tr>
              <tr><td>⬜ square</td><td>4</td><td>Yes!</td></tr>
              <tr><td>▭ rectangle</td><td>4</td><td>Yes!</td></tr>
              <tr><td>⚪ circle</td><td>0 straight sides</td><td>No</td></tr>
            </table>
            <p>Count the sides. If you count exactly 4, the shape is in!</p>`,
          narration: "The coolest club on this station is the Quadrilateral Club. It has one rule. A quadrilateral is a shape with exactly 4 straight sides and 4 corners. A triangle has 3 sides, so it's not in the club. A square has 4 sides. It's in! A rectangle has 4 sides. In! A circle has no straight sides, so it's out. Count the sides. If you count exactly 4, the shape is in!",
        },
        {
          id: "s3",
          title: "Meet the Club Members",
          html: `
            <p>Inside the club, some members have <b>special badges</b> for extra attributes:</p>
            <table>
              <tr><th>Member</th><th>Special attribute</th></tr>
              <tr><td>🔷 <b>rhombus</b></td><td>all 4 sides the <u>same length</u></td></tr>
              <tr><td>▭ <b>rectangle</b></td><td>all 4 corners are <u>square corners</u> (like the corner of an L)</td></tr>
              <tr><td>⬜ <b>square</b></td><td>BOTH! 4 equal sides AND 4 square corners</td></tr>
            </table>
            <div class="vocab"><b>square corner</b> — a perfect L-shaped corner, like the corner of a book or a window.</div>`,
          narration: "Inside the club, some members have special badges for extra attributes. A rhombus has all 4 sides the same length. A rectangle has all 4 corners as square corners, like the corner of an L. And a square has both! 4 equal sides and 4 square corners. A square corner is a perfect L-shaped corner, like the corner of a book or a window.",
        },
        {
          id: "s4",
          title: "The Square's Double Badge",
          html: `
            <p>Watch this, Cadet — let's check a square against BOTH badge rules:</p>
            <div class="big-visual">⬜</div>
            <p>Are all 4 sides the same length? <b>Yes</b> → so a square is a <b>rhombus</b>. ✔️</p>
            <p>Are all 4 corners square corners? <b>Yes</b> → so a square is a <b>rectangle</b>. ✔️</p>
            <div class="callout"><b>Remember:</b> A square is BOTH a rhombus AND a rectangle. It earned both badges!</div>
            <p>But careful — it doesn't work backwards. A long, skinny rectangle ▭ is NOT a square, because its sides aren't all equal.</p>`,
          narration: "Watch this, Cadet. Let's check a square against both badge rules. Are all 4 sides the same length? Yes! So a square is a rhombus. Are all 4 corners square corners? Yes! So a square is a rectangle. A square is both a rhombus and a rectangle. It earned both badges! But careful. It doesn't work backwards. A long skinny rectangle is not a square, because its sides aren't all equal.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>A mystery shape just floated in. Let's sort it together!</p>
            <div class="big-visual">🔶</div>
            <p>It's a kite shape: <b>4 sides</b>, but the sides are <u>not</u> all the same length, and there are <u>no</u> square corners.</p>
            <p>Step 1: Count the sides — exactly 4 → it IS a <b>quadrilateral</b>. ✔️</p>
            <p>Step 2: All sides equal? No → not a rhombus.</p>
            <p>Step 3: Square corners? No → not a rectangle (and not a square).</p>
            <div class="callout"><b>Big idea:</b> Some quadrilaterals are in the club but have NO special badge. 4 sides is enough to join!</div>`,
          narration: "A mystery shape just floated in. Let's sort it together! It's a kite shape. 4 sides, but the sides are not all the same length, and there are no square corners. Step 1: count the sides. Exactly 4, so it is a quadrilateral. Step 2: all sides equal? No, so it's not a rhombus. Step 3: square corners? No, so it's not a rectangle, and not a square. Big idea: some quadrilaterals are in the club but have no special badge. 4 sides is enough to join!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Shape sorter certified! You can now say:</p>
            <div class="callout">
              <p>✔️ I can tell if a shape is a quadrilateral by counting 4 sides.</p>
              <p>✔️ I can spot a rhombus (4 equal sides), a rectangle (4 square corners), and a square (both!).</p>
              <p>✔️ I know some quadrilaterals are none of these — and that's okay!</p>
            </div>
            <p>Quiz time — show the club what you know! 🔷</p>`,
          narration: "Shape sorter certified! You can now say: I can tell if a shape is a quadrilateral by counting 4 sides. I can spot a rhombus with 4 equal sides, a rectangle with 4 square corners, and a square with both. And I know some quadrilaterals are none of these. And that's okay! Quiz time. Show the club what you know!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which shape belongs in the Quadrilateral Club?",
            options: ["A shape with 4 straight sides", "A shape with 3 straight sides", "A circle", "A shape with 5 straight sides"],
            answer: 0,
            hints: {
              verbal: "Remember the club rule: count the sides. The club takes shapes with exactly 4.",
              example: "A square has 4 sides — it's in the club. A triangle has 3 — it's out.",
              narrow: [3],
            },
            explain: "A quadrilateral is any shape with exactly 4 straight sides.",
          },
          {
            id: "q2", type: "mc",
            prompt: "A shape has 4 sides that are ALL the same length. Which special badge does it earn?",
            visual: "🔷",
            options: ["Rhombus", "Triangle", "Circle", "Pentagon"],
            answer: 0,
            hints: {
              verbal: "Which club member's rule is 'all 4 sides the same length'?",
              example: "A rectangle's badge is about square corners. A rhombus's badge is about equal sides.",
              narrow: [3],
            },
            explain: "A rhombus is a quadrilateral with all 4 sides the same length.",
          },
          {
            id: "q3", type: "tf",
            prompt: "True or false: Every square is also a rectangle.",
            answer: true,
            hints: {
              verbal: "Check the rectangle rule: does a square have 4 square corners?",
              example: "The square passed both badge checks — equal sides AND square corners.",
            },
            explain: "True! A square has 4 square corners, so it passes the rectangle test. It's both a rectangle and a rhombus.",
          },
          {
            id: "q4", type: "mc",
            prompt: "A shape has 4 square corners, but 2 long sides and 2 short sides. What is it?",
            visual: "▭",
            options: ["A rectangle (but not a square)", "A square", "A rhombus", "A triangle"],
            answer: 0,
            hints: {
              verbal: "Square corners means rectangle. But are ALL the sides equal? That's what a square needs.",
              example: "A door shape has 4 square corners but isn't a square — its sides aren't all equal.",
              narrow: [1],
            },
            explain: "4 square corners makes it a rectangle. But the sides aren't all equal, so it's not a square.",
          },
          {
            id: "q5", type: "mc",
            prompt: "A cadet writes: 'ALL quadrilaterals are squares, rectangles, or rhombuses.' Which shape proves this is FALSE?",
            options: [
              "A kite shape with 4 sides of different lengths and no square corners",
              "A square",
              "A rectangle",
              "A rhombus",
            ],
            answer: 0,
            hints: {
              verbal: "You need a shape with 4 sides that fails ALL three badge tests — no equal sides, no square corners.",
              example: "The mystery kite from our lesson had 4 sides but earned no special badge at all.",
              narrow: [2],
            },
            explain: "The kite shape has 4 sides, so it IS a quadrilateral — but it's not a square, rectangle, or rhombus. That proves the sentence false!",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: A triangle can join the Quadrilateral Club.",
            visual: "🔺",
            answer: false,
            hints: {
              verbal: "Count a triangle's sides. Does it match the club rule of exactly 4?",
              example: "A square with 4 sides is in the club. A shape with 3 sides breaks the rule.",
            },
            explain: "False! A triangle has only 3 sides, and the club rule is exactly 4.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Which attribute do a rectangle ▭ and a square ⬜ <b>share</b>?",
            options: ["4 square corners", "All 4 sides the same length", "Only 3 corners", "Curved sides"],
            answer: 0,
            hints: {
              verbal: "Think about the corners of both shapes. What do they look like?",
              example: "A book and a window both have perfect L-shaped corners — just like these two shapes.",
              narrow: [1],
            },
            explain: "Both have 4 square corners! But only the square must have all 4 sides equal.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Why does a square earn BOTH the rhombus badge and the rectangle badge?",
            options: [
              "It has 4 equal sides AND 4 square corners",
              "It is the biggest shape in the club",
              "It has more than 4 sides",
              "It has 4 equal sides but no square corners",
            ],
            answer: 0,
            hints: {
              verbal: "Check the square against both rules: the equal-sides rule and the square-corners rule.",
              example: "Rhombus badge = all sides equal. Rectangle badge = all square corners. Which shape passes both?",
              narrow: [3],
            },
            explain: "A square passes both tests: all 4 sides are equal (rhombus!) and all 4 corners are square (rectangle!).",
          },
        ],
      },
    },

    /* ============ M2 — Equal Parts Finale (3.G.2) ============ */
    {
      id: "math-u8-m2",
      title: "Equal Parts Finale",
      icon: "🏁",
      standard: "3.G.2",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Final Mission!",
          html: `
            <p>Cadet — this is it. Your <b>final math mission</b> in the whole galaxy! 🏁</p>
            <p>The station is throwing a party, and we baked one giant space pizza. <b>4 hungry aliens</b> each want a <u>fair</u> share.</p>
            <div class="big-visual">
              <div class="vis-row">🍕</div>
              <div class="vis-row">👽 👽 👽 👽</div>
            </div>
            <p>Fair means <b>equal parts</b> — every piece the exact same size. Let's learn how to cut it!</p>`,
          narration: "Cadet, this is it. Your final math mission in the whole galaxy! The station is throwing a party, and we baked one giant space pizza. 4 hungry aliens each want a fair share. Fair means equal parts. Every piece the exact same size. Let's learn how to cut it!",
        },
        {
          id: "s2",
          title: "Equal Parts Get Fraction Names",
          html: `
            <p>When we cut a circle into <b>4 equal parts</b>, each part covers the <u>same amount</u> of the circle.</p>
            <div class="big-visual">⚪ → ◔ ◔ ◔ ◔</div>
            <p>Each part gets a fraction name:</p>
            <div class="big-visual">1 part out of 4 equal parts = 1/4</div>
            <div class="callout"><b>Remember:</b> Cut a shape into 4 equal parts → each part is <b>1/4</b> of the shape's area. Cut it into 6 equal parts → each part is <b>1/6</b>. The parts you cut become the bottom number!</div>`,
          narration: "When we cut a circle into 4 equal parts, each part covers the same amount of the circle. Each part gets a fraction name. 1 part out of 4 equal parts is one fourth. Cut a shape into 4 equal parts, and each part is one fourth of the shape's area. Cut it into 6 equal parts, and each part is one sixth. The parts you cut become the bottom number!",
        },
        {
          id: "s3",
          title: "Equal Parts Can Look Different!",
          html: `
            <p>Here's a space secret: equal parts don't have to be the same <u>shape</u> — they just need the same <b>area</b>!</p>
            <table>
              <tr><th>Cut down the middle</th><th>Cut corner to corner</th></tr>
              <tr><td>▭ split into 2 tall halves</td><td>▭ split into 2 triangle halves</td></tr>
              <tr><td>each half = 1/2</td><td>each half = 1/2</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Both cuts make halves! The pieces look different, but each one covers exactly half the rectangle's area.</div>`,
          narration: "Here's a space secret. Equal parts don't have to be the same shape. They just need the same area! Cut a rectangle down the middle, and you get 2 tall halves. Cut it corner to corner, and you get 2 triangle halves. Both cuts make halves! The pieces look different, but each one covers exactly half the rectangle's area.",
        },
        {
          id: "s4",
          title: "Try It With Me!",
          html: `
            <p>The party needs brownies! Let's cut this brownie pan into <b>6 equal parts</b> together.</p>
            <div class="big-visual">
              <div class="vis-row">🟫🟫🟫</div>
              <div class="vis-row">🟫🟫🟫</div>
            </div>
            <p>Step 1: Count the parts — <b>6 pieces</b>.</p>
            <p>Step 2: Check they're equal — every piece is the same size. ✔️</p>
            <p>Step 3: Name one piece — 1 part out of 6 equal parts:</p>
            <div class="big-visual">each piece = 1/6 of the pan</div>
            <p>Careful, Cadet: if one alien cut a giant piece and left tiny ones, the parts would NOT be equal — and no fraction name allowed!</p>`,
          narration: "The party needs brownies! Let's cut this brownie pan into 6 equal parts together. Step 1: count the parts. 6 pieces. Step 2: check they're equal. Every piece is the same size. Step 3: name one piece. 1 part out of 6 equal parts is one sixth. Each piece is one sixth of the pan. Careful, Cadet. If one alien cut a giant piece and left tiny ones, the parts would not be equal. And no fraction name allowed!",
        },
        {
          id: "s5",
          title: "The Grand Review: Shapes, Fractions, Area",
          html: `
            <p>Look how far you've flown, Cadet — this mission connects EVERYTHING:</p>
            <table>
              <tr><th>Power</th><th>How it helps here</th></tr>
              <tr><td>Shapes 🔷</td><td>We cut circles, squares, and rectangles into parts</td></tr>
              <tr><td>Fractions 🍕</td><td>Each equal part gets a name like 1/2, 1/4, 1/6</td></tr>
              <tr><td>Area 📐</td><td>"Equal parts" means each part covers the SAME area</td></tr>
            </table>
            <p>One quick check: a rectangle is made of <b>8 unit squares</b>. Cut it into 2 equal parts → each part covers <b>4 squares</b>, and each part is <b>1/2</b> of the whole. Shapes, area, and fractions — all in one move!</p>`,
          narration: "Look how far you've flown, Cadet. This mission connects everything! Shapes: we cut circles, squares, and rectangles into parts. Fractions: each equal part gets a name like one half, one fourth, or one sixth. Area: equal parts means each part covers the same area. One quick check. A rectangle is made of 8 unit squares. Cut it into 2 equal parts, and each part covers 4 squares. Each part is one half of the whole. Shapes, area, and fractions. All in one move!",
        },
        {
          id: "s6",
          title: "You Finished Math Galaxy!",
          html: `
            <p>🎉 <b>CADET! YOU DID IT!</b> 🎉</p>
            <p>This was the very last math mission — you have explored <b>every planet in Math Galaxy</b>!</p>
            <div class="callout">
              <p>✔️ I can cut shapes into equal parts.</p>
              <p>✔️ I can name each equal part with a unit fraction like 1/4 or 1/6.</p>
              <p>✔️ I know equal parts can look different but must cover equal areas.</p>
            </div>
            <p>Multiplication, division, fractions, time, measurement, area, and shapes — you mastered them ALL. One last quiz stands between you and your final star. I am SO proud of you, Cadet. Now go make it 8 for 8! 🚀⭐</p>`,
          narration: "Cadet! You did it! This was the very last math mission. You have explored every planet in Math Galaxy! You can now say: I can cut shapes into equal parts. I can name each equal part with a unit fraction like one fourth or one sixth. I know equal parts can look different but must cover equal areas. Multiplication, division, fractions, time, measurement, area, and shapes. You mastered them all! One last quiz stands between you and your final star. I am so proud of you, Cadet. Now go make it 8 for 8!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "A circle is cut into 4 equal parts. What fraction of the circle's area is EACH part?",
            visual: "⚪ → ◔ ◔ ◔ ◔",
            options: ["1/4", "1/2", "1/3", "4/1"],
            answer: 0,
            hints: {
              verbal: "Count the equal parts. That count becomes the bottom number of the fraction.",
              example: "A shape cut into 2 equal parts → each part is 1/2. Cut into 6 → each is 1/6.",
              narrow: [3],
            },
            explain: "4 equal parts means each part is 1 out of 4 — that's 1/4 of the circle's area.",
          },
          {
            id: "q2", type: "mc",
            prompt: "A rectangle banner is cut into 3 equal parts. What is each part?",
            options: ["1/3 of the banner", "1/2 of the banner", "3/1 of the banner", "1/4 of the banner"],
            answer: 0,
            hints: {
              verbal: "How many equal parts did we cut? Put that number on the bottom of the fraction.",
              example: "A brownie pan cut into 6 equal pieces → each piece is 1/6.",
              narrow: [1],
            },
            explain: "3 equal parts → each part is 1 out of 3, which is 1/3 of the banner.",
          },
          {
            id: "q3", type: "tf",
            prompt: "True or false: To call the pieces 'fourths,' all 4 pieces must cover an EQUAL amount of the shape.",
            answer: true,
            hints: {
              verbal: "Think of the pizza party. Could we call unfair pieces 'fourths'?",
              example: "If one alien grabs a giant slice and leaves tiny ones, the parts aren't equal — no fraction name allowed.",
            },
            explain: "True! Fraction names only work for EQUAL parts. Each fourth must cover the same area.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Which picture shows 1/3 of the figure shaded?",
            options: [
              "A rectangle cut into 3 equal parts, with 1 part shaded",
              "A rectangle cut into 3 parts of different sizes, with 1 part shaded",
              "A rectangle cut into 4 equal parts, with 1 part shaded",
              "A rectangle cut into 3 equal parts, with 2 parts shaded",
            ],
            answer: 0,
            hints: {
              verbal: "1/3 needs TWO things: exactly 3 EQUAL parts, and exactly 1 of them shaded.",
              example: "1/4 shaded = 4 equal parts with 1 shaded. Unequal parts don't count!",
              narrow: [2],
            },
            explain: "1/3 means 1 shaded part out of 3 EQUAL parts. Unequal parts or a different count won't work.",
          },
          {
            id: "q5", type: "tf",
            prompt: "True or false: Two halves of the same rectangle can LOOK different — as long as each covers half the area.",
            answer: true,
            hints: {
              verbal: "Remember the two ways we cut the rectangle: down the middle, and corner to corner.",
              example: "A middle cut makes 2 tall halves. A corner-to-corner cut makes 2 triangle halves. Both are true halves!",
            },
            explain: "True! Equal parts need equal AREA, not matching shapes. Both cuts give each piece half the rectangle.",
          },
          {
            id: "q6", type: "mc",
            prompt: "The party pizza is cut into 8 equal slices. Zorp eats 1 slice. How much of the pizza did Zorp eat?",
            visual: "🍕🍕🍕🍕🍕🍕🍕🍕",
            options: ["1/8", "1/6", "8/1", "1/4"],
            answer: 0,
            hints: {
              verbal: "Count the equal slices. Zorp ate 1 out of that many.",
              example: "A pie cut into 4 equal slices → eating 1 slice is eating 1/4.",
              narrow: [1],
            },
            explain: "8 equal slices, and Zorp ate 1 — that's 1/8 of the pizza.",
          },
          {
            id: "q7", type: "mc",
            prompt: "A flag is cut into 6 equal parts, and 1 part is painted gold. Which sentence is TRUE?",
            options: [
              "The gold part is 1/6 of the flag's area",
              "The gold part is 1/6 because it's the prettiest part",
              "The gold part is 6/1 of the flag",
              "The gold part is 1/2 of the flag's area",
            ],
            answer: 0,
            hints: {
              verbal: "1 part out of 6 equal parts — write it as a fraction with the parts count on the bottom.",
              example: "1 brownie out of 6 equal brownies is 1/6 of the pan's area.",
              narrow: [3],
            },
            explain: "6 equal parts → each part, including the gold one, covers 1/6 of the flag's area.",
          },
          {
            id: "q8", type: "numeric",
            prompt: "Grand finale review! A rectangle is made of 8 unit squares. It is cut into 2 equal parts. How many unit squares does EACH part cover?",
            visual: "🟦🟦🟦🟦<br>🟦🟦🟦🟦",
            answer: 4,
            hints: {
              verbal: "Equal parts share the area fairly. Split 8 squares into 2 equal groups.",
              example: "A shape of 6 squares cut into 2 equal parts → each part covers 6 ÷ 2 = 3 squares.",
            },
            explain: "8 ÷ 2 = 4. Each part covers 4 unit squares — and each part is 1/2 of the whole. You finished Math Galaxy, Cadet! 🎉",
          },
        ],
      },
    },
  ],
});
