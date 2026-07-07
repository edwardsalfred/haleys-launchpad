/* ELA Unit 1 — Word Detective Station (L.3.4a, RL.3.1)
   Context clues: using the words and sentences around a mystery word
   to figure out what it means. Based on MS Exemplar ELA Unit 2. */
window.COURSE_CONTENT.push({
  id: "ela-r1",
  subject: "ela",
  order: 1,
  title: "Word Detective Station",
  subtitle: "Crack the case of mystery words",
  planet: { emoji: "🔍", color: "#5AA9FF" },
  badgeName: "Word Detective Star",
  modules: [

    /* ============ M1 — Context Clues 101 (L.3.4a) ============ */
    {
      id: "ela-r1-m1",
      title: "Context Clues 101",
      icon: "🕵️",
      standard: "L.3.4a",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Word Detective Station!",
          html: `
            <p>Cadet! Welcome to the Word Detective Station. 🔍</p>
            <p>Here's the case: sometimes when you read, you bump into a <b>mystery word</b> — a word you don't know.</p>
            <div class="big-visual">
              <div class="vis-row">📖 ➡️ 🤔 ➡️ 🕵️</div>
            </div>
            <p>Most readers panic. But not you! A Word Detective never panics, because a detective knows a secret:</p>
            <div class="callout"><b>The secret:</b> The sentence is the crime scene — and clues are everywhere!</div>`,
          narration: "Cadet! Welcome to the Word Detective Station. Here's the case: sometimes when you read, you bump into a mystery word. A word you don't know. Most readers panic. But not you! A Word Detective never panics, because a detective knows a secret. The sentence is the crime scene, and clues are everywhere!",
        },
        {
          id: "s2",
          title: "What Are Context Clues?",
          html: `
            <p>The words and sentences <b>around</b> a mystery word are called <b>context clues</b>. They point right at the meaning — like footprints leading to the answer!</p>
            <div class="big-visual">
              <div class="vis-row">👣 mystery word 👣</div>
            </div>
            <div class="vocab"><b>context clues</b> — the words and sentences near a mystery word that help you figure out what it means.</div>
            <p>Where do detectives look?</p>
            <p>1️⃣ The words <b>before</b> the mystery word.<br>
            2️⃣ The words <b>after</b> the mystery word.<br>
            3️⃣ The sentences <b>nearby</b>.</p>`,
          narration: "The words and sentences around a mystery word are called context clues. They point right at the meaning, like footprints leading to the answer! Context clues are the words and sentences near a mystery word that help you figure out what it means. Where do detectives look? One: the words before the mystery word. Two: the words after it. Three: the sentences nearby.",
        },
        {
          id: "s3",
          title: "Case #1: The Word 'Jeered'",
          html: `
            <p>Let's crack a real case together. Read this sentence:</p>
            <div class="callout">The rude fans <b>jeered</b> at the losing team, booing and yelling mean names.</div>
            <p>Mystery word: <b>jeered</b>. Hmm. Now hunt for clues!</p>
            <p>🔎 Clue 1: the fans were <u>rude</u>.</p>
            <p>🔎 Clue 2: they were <u>booing and yelling mean names</u>.</p>
            <p>Case closed! <b>Jeered</b> must mean <b>shouted unkind things to make fun of someone</b>. The clues told us — we never needed a dictionary!</p>`,
          narration: "Let's crack a real case together. Read this sentence: The rude fans jeered at the losing team, booing and yelling mean names. Mystery word: jeered. Now hunt for clues! Clue one: the fans were rude. Clue two: they were booing and yelling mean names. Case closed! Jeered must mean shouted unkind things to make fun of someone. The clues told us. We never needed a dictionary!",
        },
        {
          id: "s4",
          title: "Case #2: The Word 'Sultry'",
          html: `
            <p>Here comes another mystery word. Ready your magnifying glass!</p>
            <div class="callout">The afternoon was so <b>sultry</b> that we drank icy juice and hid in the shade until the sun went down.</div>
            <p>🔎 Clue 1: they drank <u>icy juice</u>.</p>
            <p>🔎 Clue 2: they <u>hid in the shade</u> from the sun.</p>
            <p>When do people gulp icy drinks and hide from the sun? On a <b>very hot</b> day!</p>
            <div class="big-visual">sultry = very hot and sticky ☀️</div>`,
          narration: "Here comes another mystery word. Ready your magnifying glass! The afternoon was so sultry that we drank icy juice and hid in the shade until the sun went down. Clue one: they drank icy juice. Clue two: they hid in the shade from the sun. When do people gulp icy drinks and hide from the sun? On a very hot day! Sultry means very hot and sticky.",
        },
        {
          id: "s5",
          title: "Try It With Me!",
          html: `
            <p>Your turn, Detective. Crack this one with me:</p>
            <div class="callout">Coach Vega was <b>impressed</b> by Remy's flip. "Wow!" she cheered. "That was amazing!"</div>
            <p>Step 1: Find the mystery word. … It's <b>impressed</b>.</p>
            <p>Step 2: Hunt for clues. … The coach said <u>"Wow!"</u> and <u>"That was amazing!"</u></p>
            <p>Step 3: Solve it! If Coach Vega cheered "Wow" and "amazing," then <b>impressed</b> means she <b>thought it was really great</b>.</p>
            <div class="callout"><b>Detective move:</b> Read past the mystery word — the best clues often come right after it!</div>`,
          narration: "Your turn, Detective. Crack this one with me. Coach Vega was impressed by Remy's flip. Wow, she cheered. That was amazing! Step 1: find the mystery word. It's impressed. Step 2: hunt for clues. The coach said wow, and, that was amazing. Step 3: solve it! If Coach Vega cheered wow and amazing, then impressed means she thought it was really great. Detective move: read past the mystery word. The best clues often come right after it!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Detective training level one — complete! You can now say:</p>
            <div class="callout">
              <p>✔️ I know context clues are the words and sentences around a mystery word.</p>
              <p>✔️ I can hunt for clues before, after, and near the word.</p>
              <p>✔️ I can use clues to figure out what a new word means.</p>
            </div>
            <p>Grab your magnifying glass — quiz time! 🔍</p>`,
          narration: "Detective training level one, complete! You can now say: I know context clues are the words and sentences around a mystery word. I can hunt for clues before, after, and near the word. I can use clues to figure out what a new word means. Grab your magnifying glass. Quiz time!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What are <b>context clues</b>?",
            options: [
              "The words and sentences around a mystery word that show its meaning",
              "The first letter of a word",
              "The picture on the front of the book",
              "The number of pages in a story",
            ],
            answer: 0,
            hints: {
              verbal: "Think about where a Word Detective hunts — near the mystery word, before it and after it.",
              example: "In 'The pup was drowsy, so it curled up and slept,' the clue 'curled up and slept' sits right next to the mystery word.",
              narrow: [1],
            },
            explain: "Context clues are the words and sentences AROUND a mystery word — they point to what it means.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What does the word <b>scalding</b> mean as used in the sentence?",
            passage: "The soup was scalding, so Theo blew on every spoonful to cool it down before he ate it.",
            options: ["Very hot", "Very salty", "Frozen solid", "Full of noodles"],
            answer: 0,
            hints: {
              verbal: "Why would Theo blow on his soup? What is he trying to change about it?",
              example: "In 'The metal slide was scorching, so we waited for it to cool,' cooling tells us scorching means very hot.",
              narrow: [1],
            },
            explain: "Theo blew on the soup 'to cool it down' — you only cool things that are very hot. Scalding means very hot.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which words in the sentence helped you figure out what <b>scalding</b> means?",
            passage: "The soup was scalding, so Theo blew on every spoonful to cool it down before he ate it.",
            options: [
              "blew on every spoonful to cool it down",
              "before he ate it",
              "The soup was",
              "Theo",
            ],
            answer: 0,
            hints: {
              verbal: "Which words tell you what Theo DID because the soup was scalding? That action is the clue.",
              example: "For 'The box was hefty, so both movers had to lift it,' the clue is 'both movers had to lift it.'",
              narrow: [1],
            },
            explain: "The clue is 'blew on every spoonful to cool it down' — cooling something down proves it was hot.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: When you find a mystery word, a Word Detective should skip it and never think about it again.",
            answer: false,
            hints: {
              verbal: "Remember the detective secret — the sentence is the crime scene. What should you do at a crime scene?",
              example: "For the word 'jeered,' we didn't skip it — we hunted for clues like 'booing and yelling mean names.'",
            },
            explain: "False! A Word Detective hunts for context clues in the words and sentences nearby to solve the mystery.",
          },
          {
            id: "q5", type: "mc",
            prompt: "What does the word <b>jeered</b> mean as used in the sentence?",
            passage: "The unkind fans jeered at the referee, booing and yelling mean names until he covered his ears.",
            options: [
              "Shouted unkind things",
              "Cheered politely",
              "Whispered a secret",
              "Clapped with joy",
            ],
            answer: 0,
            hints: {
              verbal: "Look at what the fans were doing: booing and yelling mean names. Is that kind or unkind?",
              example: "In 'The crowd taunted the villain, laughing and pointing,' the clues 'laughing and pointing' show taunted means made fun of.",
              narrow: [1],
            },
            explain: "The clues 'unkind,' 'booing,' and 'yelling mean names' show that jeered means shouted unkind things.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Which words in the sentence helped you figure out what <b>jeered</b> means?",
            passage: "The unkind fans jeered at the referee, booing and yelling mean names until he covered his ears.",
            options: [
              "booing and yelling mean names",
              "at the referee",
              "The fans",
              "until he",
            ],
            answer: 0,
            hints: {
              verbal: "Find the words that DESCRIBE the jeering — the part that shows exactly what the fans did.",
              example: "For 'The dog gobbled his food, swallowing it in two big bites,' the helping words are 'swallowing it in two big bites.'",
              narrow: [1],
            },
            explain: "'Booing and yelling mean names' describes exactly what jeering sounds like — that's the clue.",
          },
          {
            id: "q7", type: "mc",
            prompt: "What does the word <b>remarked</b> mean as used in the sentence?",
            passage: "\"That rocket is the fastest one yet,\" Grandpa remarked as we watched it zoom across the sky.",
            options: ["Said", "Ran", "Painted", "Forgot"],
            answer: 0,
            hints: {
              verbal: "Look right before the mystery word. There are quotation marks — what was Grandpa doing with those words?",
              example: "In '\"Nice catch,\" Mia commented,' the quotation marks show that commented means said.",
              narrow: [3],
            },
            explain: "Grandpa's words are in quotation marks, so remarked tells HOW the words came out — it means said.",
          },
          {
            id: "q8", type: "mc",
            prompt: "What does the word <b>sultry</b> mean as used in the sentence?",
            passage: "It was a sultry afternoon — so hot and sticky that even the lizards hid in the shade.",
            options: [
              "Hot and sticky",
              "Cold and snowy",
              "Windy and loud",
              "Dark and rainy",
            ],
            answer: 0,
            hints: {
              verbal: "The sentence explains itself right after the dash. Read the words after 'so.'",
              example: "In 'The cave was frigid — so cold we could see our breath,' the words after the dash tell you frigid means cold.",
              narrow: [3],
            },
            explain: "The sentence says it right there: 'so hot and sticky.' Sultry means hot and sticky.",
          },
        ],
      },
    },

    /* ============ M2 — Four Kinds of Clues (L.3.4a) ============ */
    {
      id: "ela-r1-m2",
      title: "Four Kinds of Clues",
      icon: "🧩",
      standard: "L.3.4a",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "The Detective's Clue Chart",
          html: `
            <p>Great detectives don't just find clues — they know what <b>kind</b> of clue they found! Writers leave four kinds:</p>
            <table>
              <tr><th>Clue</th><th>What it does</th></tr>
              <tr><td>🟢 Synonym</td><td>a nearby word means the <b>same</b></td></tr>
              <tr><td>🔴 Antonym</td><td>a nearby word means the <b>opposite</b></td></tr>
              <tr><td>🔵 Explanation</td><td>the sentence <b>explains</b> the word</td></tr>
              <tr><td>🟡 Example</td><td><b>examples</b> show what it means</td></tr>
            </table>
            <p>Let's meet each one, Cadet!</p>`,
          narration: "Great detectives don't just find clues. They know what kind of clue they found! Writers leave four kinds. A synonym clue: a nearby word means the same. An antonym clue: a nearby word means the opposite. An explanation clue: the sentence explains the word. And an example clue: examples show what it means. Let's meet each one, Cadet!",
        },
        {
          id: "s2",
          title: "Synonym Clues",
          html: `
            <p>A <b>synonym clue</b> is a nearby word that means the <b>same thing</b> as the mystery word. It's like the word brought its twin! 👯</p>
            <div class="vocab"><b>synonym</b> — a word that means the same as another word. Happy and glad are synonyms.</div>
            <div class="callout">Maya was <b>furious</b> — really <u>angry</u> — when her robot painted the cat purple.</div>
            <p>🔎 The twin word <u>angry</u> sits right next to <b>furious</b>. So furious means very angry!</p>
            <p>Watch for signal words like <b>or</b>, <b>also called</b>, and dashes — they often introduce a twin.</p>`,
          narration: "A synonym clue is a nearby word that means the same thing as the mystery word. It's like the word brought its twin! A synonym is a word that means the same as another word. Happy and glad are synonyms. Maya was furious, really angry, when her robot painted the cat purple. The twin word angry sits right next to furious. So furious means very angry! Watch for signal words like or, also called, and dashes. They often introduce a twin.",
        },
        {
          id: "s3",
          title: "Antonym Clues",
          html: `
            <p>An <b>antonym clue</b> is a nearby word that means the <b>opposite</b> of the mystery word. Find the opposite, then flip it!</p>
            <div class="vocab"><b>antonym</b> — a word that means the opposite. Hot and cold are antonyms.</div>
            <div class="callout"><u>Unlike</u> his <u>messy</u> brother, Jin kept his bunk <b>tidy</b>.</div>
            <p>🔎 Signal word <u>unlike</u>! Jin is the OPPOSITE of messy — so <b>tidy</b> means neat and clean.</p>
            <div class="callout"><b>Remember:</b> Words like <b>but</b>, <b>unlike</b>, and <b>however</b> are flashing signs that an opposite is nearby!</div>`,
          narration: "An antonym clue is a nearby word that means the opposite of the mystery word. Find the opposite, then flip it! An antonym is a word that means the opposite. Hot and cold are antonyms. Unlike his messy brother, Jin kept his bunk tidy. Signal word: unlike! Jin is the opposite of messy. So tidy means neat and clean. Remember: words like but, unlike, and however are flashing signs that an opposite is nearby!",
        },
        {
          id: "s4",
          title: "Explanation Clues",
          html: `
            <p>Sometimes the writer is extra kind and just <b>explains</b> the word for you. That's an <b>explanation clue</b>!</p>
            <div class="callout">The bridge was <b>sturdy</b>. <u>It was built so strong that it would not shake or fall, even in a storm.</u></div>
            <p>🔎 The second sentence is one big explanation: built strong, won't shake, won't fall.</p>
            <div class="big-visual">sturdy = strong and hard to break 💪</div>
            <p>Explanation clues often hide in the sentence <b>right after</b> the mystery word — always read one more sentence!</p>`,
          narration: "Sometimes the writer is extra kind and just explains the word for you. That's an explanation clue! The bridge was sturdy. It was built so strong that it would not shake or fall, even in a storm. The second sentence is one big explanation: built strong, won't shake, won't fall. Sturdy means strong and hard to break. Explanation clues often hide in the sentence right after the mystery word. Always read one more sentence!",
        },
        {
          id: "s5",
          title: "Example Clues",
          html: `
            <p>Last one! An <b>example clue</b> gives you <b>examples</b> of the mystery word — and the examples paint the picture.</p>
            <div class="callout">Ms. Reyes packed <b>provisions</b> for the space trip, <u>such as sandwiches, apples, and bottles of water</u>.</div>
            <p>🔎 The examples are sandwiches, apples, and water. Those are all food and drink — so <b>provisions</b> means food and supplies for a trip!</p>
            <div class="callout"><b>Remember:</b> Signal words for example clues: <b>such as</b>, <b>like</b>, <b>for example</b>, <b>including</b>.</div>`,
          narration: "Last one! An example clue gives you examples of the mystery word, and the examples paint the picture. Ms. Reyes packed provisions for the space trip, such as sandwiches, apples, and bottles of water. The examples are sandwiches, apples, and water. Those are all food and drink. So provisions means food and supplies for a trip! Remember the signal words for example clues: such as, like, for example, including.",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Your detective clue chart is complete! You can now say:</p>
            <div class="callout">
              <p>✔️ I can spot a synonym clue (a twin word that means the same).</p>
              <p>✔️ I can spot an antonym clue (an opposite, often after "but" or "unlike").</p>
              <p>✔️ I can spot explanation clues and example clues.</p>
            </div>
            <p>Four clues, one detective — that's you. Quiz time! 🧩</p>`,
          narration: "Your detective clue chart is complete! You can now say: I can spot a synonym clue, a twin word that means the same. I can spot an antonym clue, an opposite, often after but or unlike. I can spot explanation clues and example clues. Four clues, one detective. That's you. Quiz time!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "A nearby word that means the <b>same</b> as the mystery word is which kind of clue?",
            options: ["Synonym clue", "Antonym clue", "Example clue", "Explanation clue"],
            answer: 0,
            hints: {
              verbal: "Think of the twin word. Which clue type brings a twin that means the same thing?",
              example: "In 'The gem was tiny — small enough to hide under a coin,' the twin word 'small' is a synonym clue.",
              narrow: [1],
            },
            explain: "A synonym is a word that means the same — so a same-meaning neighbor word is a synonym clue.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What does the word <b>furious</b> mean as used in the sentence?",
            passage: "Maya was furious — really angry — when her robot painted the cat purple.",
            options: ["Very angry", "Very sleepy", "A little hungry", "Very proud"],
            answer: 0,
            hints: {
              verbal: "Look between the dashes. The writer put a twin word right there.",
              example: "In 'The hall was silent — totally quiet,' the twin word 'quiet' tells you silent means quiet.",
              narrow: [3],
            },
            explain: "The synonym clue 'really angry' sits right next to furious — furious means very angry.",
          },
          {
            id: "q3", type: "mc",
            prompt: "What does the word <b>tidy</b> mean as used in the sentence?",
            passage: "Unlike his messy brother, Jin kept his bunk tidy.",
            options: ["Neat and clean", "Messy and dirty", "Big and heavy", "Dark and cold"],
            answer: 0,
            hints: {
              verbal: "The signal word 'unlike' means Jin is the OPPOSITE of his brother. His brother is messy, so Jin is...?",
              example: "In 'Unlike the noisy parrot, the owl was silent,' the owl is the opposite of noisy — silent means quiet.",
              narrow: [1],
            },
            explain: "'Unlike his messy brother' is an antonym clue — tidy is the opposite of messy, so it means neat and clean.",
          },
          {
            id: "q4", type: "mc",
            prompt: "The signal words <b>but</b> and <b>unlike</b> usually warn you that which kind of clue is coming?",
            options: ["Antonym clue", "Synonym clue", "Example clue", "No clue at all"],
            answer: 0,
            hints: {
              verbal: "'But' and 'unlike' flip the sentence around. Which clue type is about opposites?",
              example: "'The soup was bland, but the tacos were spicy' — 'but' signals that bland is the opposite of spicy.",
              narrow: [1],
            },
            explain: "'But,' 'unlike,' and 'however' are flashing signs that an OPPOSITE is nearby — an antonym clue.",
          },
          {
            id: "q5", type: "mc",
            prompt: "What does the word <b>sturdy</b> mean as used in these sentences?",
            passage: "The bridge was sturdy. It was built so strong that it would not shake or fall, even in a storm.",
            options: [
              "Strong and hard to break",
              "Old and rusty",
              "Thin and wobbly",
              "Long and twisty",
            ],
            answer: 0,
            hints: {
              verbal: "Read the second sentence — it explains the whole word for you. What does it say the bridge was built like?",
              example: "'The cactus is hardy. It can live through heat and dryness' — the second sentence explains that hardy means tough.",
              narrow: [2],
            },
            explain: "The explanation clue says it was 'built so strong that it would not shake or fall' — sturdy means strong.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Which kind of clue helps you figure out <b>provisions</b> in this sentence?",
            passage: "Ms. Reyes packed provisions for the space trip, such as sandwiches, apples, and bottles of water.",
            options: ["Example clue", "Antonym clue", "Synonym clue", "No clue"],
            answer: 0,
            hints: {
              verbal: "Spot the signal words 'such as.' What follows them — opposites, twins, or a list of examples?",
              example: "'We saw many creatures, such as crabs, seals, and gulls' — the list after 'such as' is an example clue.",
              narrow: [2],
            },
            explain: "'Such as' introduces a list of examples — sandwiches, apples, water — so it's an example clue.",
          },
          {
            id: "q7", type: "tf",
            prompt: "True or false: An <b>antonym clue</b> is a nearby word that means the <b>opposite</b> of the mystery word.",
            answer: true,
            hints: {
              verbal: "Think of hot and cold, messy and tidy. Are those pairs the same or opposite?",
              example: "In 'Unlike the loud engine, the fan was quiet,' loud is the opposite of quiet — that's an antonym clue.",
            },
            explain: "True! An antonym clue gives you an opposite. Find the opposite, flip it, and you've solved the word.",
          },
          {
            id: "q8", type: "mc",
            prompt: "What does the word <b>drowsy</b> mean as used in the sentence?",
            passage: "After lunch Dev felt drowsy, but his little sister was wide awake and ready to play.",
            options: ["Sleepy", "Wide awake", "Hungry", "Excited"],
            answer: 0,
            hints: {
              verbal: "There's a 'but' in the middle! Dev is the OPPOSITE of his sister. His sister is wide awake, so Dev is...?",
              example: "'The cocoa was sweet, but the medicine was bitter' — 'but' shows bitter is the opposite of sweet.",
              narrow: [1],
            },
            explain: "The word 'but' signals an antonym clue: Dev is the opposite of 'wide awake,' so drowsy means sleepy.",
          },
        ],
      },
    },

    /* ============ M3 — The Word Detective Files (L.3.4a, RL.3.1) ============ */
    {
      id: "ela-r1-m3",
      title: "The Word Detective Files",
      icon: "📂",
      standard: "L.3.4a, RL.3.1",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Opening the Case Files",
          html: `
            <p>Detective Cadet — you've earned your badge training. Now for <b>real cases</b>: three story files, each hiding <b>two mystery words in bold</b>.</p>
            <p>Your detective plan for every file:</p>
            <p>1️⃣ Read the whole story once.<br>
            2️⃣ Stop at each <b>bold</b> word.<br>
            3️⃣ Hunt the nearby sentences for clues.<br>
            4️⃣ Say the meaning in your own words.</p>
            <div class="callout"><b>One more thing:</b> In the quiz I'll also ask, "Which words helped you figure it out?" A real detective can always point to the exact evidence!</div>`,
          narration: "Detective Cadet, you've earned your badge training. Now for real cases: three story files, each hiding two mystery words in bold. Your detective plan for every file: One, read the whole story once. Two, stop at each bold word. Three, hunt the nearby sentences for clues. Four, say the meaning in your own words. One more thing: in the quiz I'll also ask which words helped you figure it out. A real detective can always point to the exact evidence!",
        },
        {
          id: "s2",
          type: "story",
          title: "File #1: The New Cadet",
          html: `
            <div class="story">
              <p>Pip felt <b>timid</b> on his first day at Star School. Unlike his bold big sister, who marched right in, Pip hid behind the door and spoke in a tiny voice.</p>
              <p>Inside, a cadet named Marla <b>boasted</b> all morning. "I am the fastest flyer in the galaxy!" she bragged. "Nobody is as great as me!"</p>
              <p>Then the teacher spotted Pip. "Come in," she said kindly. "There is a seat for you right up front." Pip took a deep breath, stepped inside, and smiled his first small smile.</p>
            </div>`,
          narration: "File number one: The New Cadet. Pip felt timid on his first day at Star School. Unlike his bold big sister, who marched right in, Pip hid behind the door and spoke in a tiny voice. Inside, a cadet named Marla boasted all morning. I am the fastest flyer in the galaxy, she bragged. Nobody is as great as me! Then the teacher spotted Pip. Come in, she said kindly. There is a seat for you right up front. Pip took a deep breath, stepped inside, and smiled his first small smile.",
        },
        {
          id: "s3",
          type: "story",
          title: "File #2: The Moon Garden",
          html: `
            <div class="story">
              <p>Cadet Rosa planted a garden inside the moon dome. The new sprouts were <b>fragile</b>. They were so easily broken that Rosa touched them with just one gentle finger.</p>
              <p>"Careful," warned Cosmo. "One little bump could snap those stems."</p>
              <p>Every day Rosa gave the sprouts water and light. At last a silver flower opened. Rosa was <b>delighted</b>. She was so happy that she danced around the dome, and her grin stretched from ear to ear.</p>
            </div>`,
          narration: "File number two: The Moon Garden. Cadet Rosa planted a garden inside the moon dome. The new sprouts were fragile. They were so easily broken that Rosa touched them with just one gentle finger. Careful, warned Cosmo. One little bump could snap those stems. Every day Rosa gave the sprouts water and light. At last a silver flower opened. Rosa was delighted. She was so happy that she danced around the dome, and her grin stretched from ear to ear.",
        },
        {
          id: "s4",
          type: "story",
          title: "File #3: Robo-Rex to the Rescue",
          html: `
            <div class="story">
              <p>After the long space race, Captain Ndidi was <b>exhausted</b>. She was so tired that she could barely lift her helmet off her head.</p>
              <p>"Rest, Captain," beeped Robo-Rex, her robot dog. "I will finish the chores."</p>
              <p>Robo-Rex was <b>generous</b>. He shared his battery power with the ship, gave his oil snack to a squeaky door, and let the ship's cat sleep in his warm charging bed.</p>
              <p>"Good dog," yawned the captain. "Best dog in space."</p>
            </div>`,
          narration: "File number three: Robo-Rex to the Rescue. After the long space race, Captain Ndidi was exhausted. She was so tired that she could barely lift her helmet off her head. Rest, Captain, beeped Robo-Rex, her robot dog. I will finish the chores. Robo-Rex was generous. He shared his battery power with the ship, gave his oil snack to a squeaky door, and let the ship's cat sleep in his warm charging bed. Good dog, yawned the captain. Best dog in space.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Three files read, six mystery words hunted. You can now say:</p>
            <div class="callout">
              <p>✔️ I can find a bold mystery word in a story.</p>
              <p>✔️ I can use nearby sentences as clues to its meaning.</p>
              <p>✔️ I can point to the exact words that helped me — my evidence!</p>
            </div>
            <p>Solve this last quiz and the <b>Word Detective Star</b> is yours! ⭐</p>`,
          narration: "Three files read, six mystery words hunted. You can now say: I can find a bold mystery word in a story. I can use nearby sentences as clues to its meaning. I can point to the exact words that helped me. My evidence! Solve this last quiz and the Word Detective Star is yours!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What does the word <b>timid</b> mean as used in the story?",
            passage: "Pip felt timid on his first day at Star School. Unlike his bold big sister, who marched right in, Pip hid behind the door and spoke in a tiny voice.",
            options: ["Shy and a little scared", "Brave and loud", "Angry and grumpy", "Tall and strong"],
            answer: 0,
            hints: {
              verbal: "The word 'unlike' tells you Pip is the OPPOSITE of his bold sister. And look at what Pip did — he hid!",
              example: "In 'Unlike the fearless captain, the new pilot was nervous,' 'unlike' shows nervous is the opposite of fearless.",
              narrow: [1],
            },
            explain: "Pip is 'unlike his bold sister' — the opposite of bold — and he hid and spoke in a tiny voice. Timid means shy.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which words from the story helped you figure out what <b>timid</b> means?",
            passage: "Pip felt timid on his first day at Star School. Unlike his bold big sister, who marched right in, Pip hid behind the door and spoke in a tiny voice.",
            options: [
              "hid behind the door and spoke in a tiny voice",
              "on his first day",
              "at Star School",
              "marched right in",
            ],
            answer: 0,
            hints: {
              verbal: "Which words show what a timid person DOES? Find Pip's actions.",
              example: "For 'The pup was playful — it chased its tail and bounced,' the evidence is 'chased its tail and bounced.'",
              narrow: [3],
            },
            explain: "Hiding behind the door and speaking in a tiny voice are exactly what a shy, timid kid does — that's the evidence.",
          },
          {
            id: "q3", type: "mc",
            prompt: "What does the word <b>boasted</b> mean as used in the story?",
            passage: "A cadet named Marla boasted all morning. \"I am the fastest flyer in the galaxy!\" she bragged. \"Nobody is as great as me!\"",
            options: [
              "Bragged about herself",
              "Cried quietly",
              "Asked for help",
              "Flew a rocket",
            ],
            answer: 0,
            hints: {
              verbal: "There's a twin word in the very next sentence — the story says 'she bragged.' That's a synonym clue!",
              example: "In 'Leo hollered — he yelled so loudly the windows shook,' the twin word 'yelled' tells you hollered means yelled.",
              narrow: [3],
            },
            explain: "The synonym clue 'she bragged' plus Marla's show-off words prove that boasted means bragged about herself.",
          },
          {
            id: "q4", type: "mc",
            prompt: "What does the word <b>fragile</b> mean as used in the story?",
            passage: "The new sprouts were fragile. They were so easily broken that Rosa touched them with just one gentle finger.",
            options: [
              "Easily broken",
              "Very strong",
              "Bright green",
              "Fast growing",
            ],
            answer: 0,
            hints: {
              verbal: "The next sentence explains the word for you. Read what it says right after 'They were so...'",
              example: "'The old page was delicate. It could tear at the lightest touch' — the second sentence explains delicate.",
              narrow: [1],
            },
            explain: "The explanation clue says it plainly: 'so easily broken.' Fragile means easily broken.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which words from the story helped you figure out what <b>fragile</b> means?",
            passage: "The new sprouts were fragile. They were so easily broken that Rosa touched them with just one gentle finger. \"Careful,\" warned Cosmo. \"One little bump could snap those stems.\"",
            options: [
              "so easily broken",
              "planted a garden",
              "water and light",
              "inside the moon dome",
            ],
            answer: 0,
            hints: {
              verbal: "Which words explain what could happen to the sprouts? Cosmo's warning helps too!",
              example: "For 'The rope was frayed. It looked ready to snap,' the evidence is 'ready to snap.'",
              narrow: [2],
            },
            explain: "'So easily broken' — and Cosmo's warning that 'one little bump could snap those stems' — is the evidence.",
          },
          {
            id: "q6", type: "mc",
            prompt: "What does the word <b>delighted</b> mean as used in the story?",
            passage: "At last a silver flower opened. Rosa was delighted. She was so happy that she danced around the dome, and her grin stretched from ear to ear.",
            options: [
              "Very happy",
              "Very tired",
              "A little worried",
              "Very confused",
            ],
            answer: 0,
            hints: {
              verbal: "Read the sentence after the mystery word. What does it say Rosa was 'so' full of that she danced?",
              example: "In 'Sam was thrilled. He was so excited he jumped up and down,' the next sentence shows thrilled means excited.",
              narrow: [2],
            },
            explain: "The clues 'so happy,' dancing, and a giant grin all point one way: delighted means very happy.",
          },
          {
            id: "q7", type: "mc",
            prompt: "What does the word <b>exhausted</b> mean as used in the story?",
            passage: "After the long space race, Captain Ndidi was exhausted. She was so tired that she could barely lift her helmet off her head.",
            options: [
              "Very tired",
              "Very hungry",
              "Full of energy",
              "Lost in space",
            ],
            answer: 0,
            hints: {
              verbal: "The very next sentence hands you a twin word. Read: 'She was so ___ that...'",
              example: "'After the hike, Dad was weary. He was so tired he fell asleep in his boots' — 'tired' explains weary.",
              narrow: [2],
            },
            explain: "The synonym clue 'so tired' — plus barely lifting her helmet — shows exhausted means very tired.",
          },
          {
            id: "q8", type: "mc",
            prompt: "What does the word <b>generous</b> mean as used in the story?",
            passage: "Robo-Rex was generous. He shared his battery power with the ship, gave his oil snack to a squeaky door, and let the ship's cat sleep in his warm charging bed.",
            options: [
              "Happy to share with others",
              "Made of shiny metal",
              "Keeping everything for himself",
              "Afraid of cats",
            ],
            answer: 0,
            hints: {
              verbal: "The story gives EXAMPLES of what Robo-Rex did: shared power, gave his snack, lent his bed. What do all three show?",
              example: "'Gran was giving, always handing out cookies and hugs' — the examples show that giving means she shares.",
              narrow: [2],
            },
            explain: "Example clues! Sharing power, giving his snack, and lending his bed all show generous means happy to share.",
          },
        ],
      },
    },
  ],
});
