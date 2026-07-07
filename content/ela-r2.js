/* Unit R2 — Character Cove (RL.3.3, RL.3.1, L.3.4a)
   Reading unit: character traits inside & out, proving traits with text
   evidence, and a full original story to put it all together. */
window.COURSE_CONTENT.push({
  id: "ela-r2",
  subject: "ela",
  order: 2,
  title: "Character Cove",
  subtitle: "What makes a character tick",
  planet: { emoji: "🏝️", color: "#3EE6C0" },
  badgeName: "Character Cove Star",
  modules: [

    /* ============ M1 — Traits Inside & Out (RL.3.3) ============ */
    {
      id: "ela-r2-m1",
      title: "Traits Inside & Out",
      icon: "🎭",
      standard: "RL.3.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Welcome to Character Cove!",
          html: `
            <p>Ahoy, Cadet! This cozy island is where story <b>characters</b> hang out — the people, aliens, and robots that stories are about.</p>
            <div class="big-visual">
              <div class="vis-row">👧 👽 🤖 👦</div>
            </div>
            <p>When you meet a new crewmate, you notice how they <b>look</b> first. But to really know them, you watch what they <b>do</b> and listen to what they <b>say</b>.</p>
            <p>Reading works the same way. On this island, you'll learn to figure out what makes a character tick!</p>`,
          narration: "Ahoy, Cadet! This cozy island is where story characters hang out. The people, aliens, and robots that stories are about. When you meet a new crewmate, you notice how they look first. But to really know them, you watch what they do and listen to what they say. Reading works the same way. On this island, you'll learn to figure out what makes a character tick!",
        },
        {
          id: "s2",
          title: "Outside Traits and Inside Traits",
          html: `
            <p>A <b>trait</b> is a word that describes a character. Traits come in two kinds:</p>
            <table>
              <tr><th>Outside traits 👀</th><th>Inside traits 💚</th></tr>
              <tr><td>how a character LOOKS</td><td>what a character is LIKE</td></tr>
              <tr><td>tall, red-haired, freckled</td><td>brave, selfish, patient</td></tr>
            </table>
            <div class="vocab"><b>character trait</b> — a word that describes what a character looks like on the outside, or what they are like on the inside.</div>
            <div class="callout"><b>Remember:</b> You can SEE outside traits. You have to FIGURE OUT inside traits from what a character does and says.</div>`,
          narration: "A trait is a word that describes a character. Traits come in two kinds. Outside traits tell how a character looks: tall, red-haired, freckled. Inside traits tell what a character is like: brave, selfish, patient. Remember: you can see outside traits. You have to figure out inside traits from what a character does and says.",
        },
        {
          id: "s3",
          title: "The Characterization Map",
          html: `
            <p>Here's a reading tool called the <b>Characterization Map</b>. Imagine drawing an outline of the character's body:</p>
            <div class="big-visual">
              <div class="vis-row">🧍</div>
            </div>
            <p>👀 <b>Outside traits</b> get written <u>outside</u> the body — anyone can see them.</p>
            <p>💚 <b>Inside traits</b> get written <u>inside</u>, right in the heart — because they live inside the character.</p>
            <p>Try it with Captain Bolt: <b>tall</b> and <b>silver-suited</b> go on the outside. <b>Brave</b> and <b>honest</b> go in the heart.</p>`,
          narration: "Here's a reading tool called the Characterization Map. Imagine drawing an outline of the character's body. Outside traits get written outside the body, because anyone can see them. Inside traits get written inside, right in the heart, because they live inside the character. Try it with Captain Bolt. Tall and silver-suited go on the outside. Brave and honest go in the heart.",
        },
        {
          id: "s4",
          title: "Trait or Feeling?",
          html: `
            <p>Careful, Cadet — a <b>trait</b> is not the same as a <b>feeling</b>!</p>
            <table>
              <tr><th>Feeling 🌦️</th><th>Trait 🎖️</th></tr>
              <tr><td>comes and goes</td><td>lasts and lasts</td></tr>
              <tr><td>angry, excited, scared</td><td>kind, honest, stubborn</td></tr>
            </table>
            <p>When Rio lost the game, he stomped his foot. By dinner he was laughing again. <b>Angry</b> was just a feeling — it passed like a cloud.</p>
            <p>But Grandma Luna shares her snacks every single day. <b>Kind</b> is her trait — it sticks like a badge.</p>
            <div class="callout"><b>Remember:</b> A feeling passes like a cloud. A trait sticks like a badge.</div>`,
          narration: "Careful, Cadet. A trait is not the same as a feeling! A feeling comes and goes, like angry, excited, or scared. A trait lasts and lasts, like kind, honest, or stubborn. When Rio lost the game, he stomped his foot. By dinner he was laughing again. Angry was just a feeling. It passed like a cloud. But Grandma Luna shares her snacks every single day. Kind is her trait. It sticks like a badge.",
        },
        {
          id: "s5",
          title: "Why Did They Do That?",
          html: `
            <p>One more character clue: the <b>motivation</b> — the reason WHY a character does something.</p>
            <div class="vocab"><b>motivation</b> — the reason why a character does what they do.</div>
            <p>Watch: Zia saved half her allowance every week. Why?</p>
            <div class="big-visual">
              <div class="vis-row">🪙➡️🎁</div>
            </div>
            <p>Because she wanted to buy her mom a birthday gift! That's her motivation.</p>
            <p>Ask <b>"Why did the character do that?"</b> and the story usually whispers the answer.</p>`,
          narration: "One more character clue: the motivation. The reason why a character does something. Watch. Zia saved half her allowance every week. Why? Because she wanted to buy her mom a birthday gift! That's her motivation. Ask why did the character do that, and the story usually whispers the answer.",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>You've mapped your first characters, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can tell outside traits (looks) from inside traits (what a character is LIKE).</p>
              <p>✔️ I can tell a trait (lasts) from a feeling (comes and goes).</p>
              <p>✔️ I can find a character's motivation — the WHY behind what they do.</p>
            </div>
            <p>Get 7 out of 8 right to earn your star! 🏝️</p>`,
          narration: "You've mapped your first characters, Cadet! You can now say: I can tell outside traits from inside traits. I can tell a trait, which lasts, from a feeling, which comes and goes. I can find a character's motivation. The why behind what they do. Get 7 out of 8 right to earn your star!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which of these is an <b>inside</b> trait?",
            options: ["brave", "tall", "red-haired", "freckled"],
            answer: 0,
            hints: {
              verbal: "An inside trait tells what a character is LIKE, not what they look like.",
              example: "Curly hair is an outside trait you can see. Honest is an inside trait you figure out.",
              narrow: [1],
            },
            explain: "Brave tells what a character is LIKE inside. Tall, red-haired, and freckled are outside traits you can see.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which of these is an <b>outside</b> trait?",
            options: ["curly-haired", "honest", "patient", "greedy"],
            answer: 0,
            hints: {
              verbal: "An outside trait is something you could see just by looking at the character.",
              example: "You can SEE that a character is short or wears glasses — those are outside traits.",
              narrow: [2],
            },
            explain: "You can see curly hair with your eyes. Honest, patient, and greedy are inside traits.",
          },
          {
            id: "q3", type: "mc",
            prompt: "On a Characterization Map, where do <b>inside</b> traits like 'kind' go?",
            options: [
              "Inside the body outline, in the heart",
              "Outside the body outline",
              "At the very top of the page",
              "They don't go on the map",
            ],
            answer: 0,
            hints: {
              verbal: "Inside traits live INSIDE the character — so where would you write them?",
              example: "For Captain Bolt, 'tall' goes outside the outline, and 'brave' goes in the heart.",
              narrow: [1],
            },
            explain: "Inside traits live inside the character, so they go in the heart of the body outline.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: A trait lasts a long time, but a feeling can come and go.",
            answer: true,
            hints: {
              verbal: "Think of the cloud and the badge. Which one passes by, and which one sticks?",
              example: "Rio was angry for one afternoon (feeling), but Grandma Luna is kind every day (trait).",
            },
            explain: "True! A feeling passes like a cloud, but a trait sticks like a badge.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Was 'angry' Rio's trait or his feeling?",
            passage: "When Rio lost the game, he stomped his foot and crossed his arms. But by dinnertime, he was laughing and telling jokes again.",
            options: [
              "A feeling, because it went away by dinner",
              "A trait, because he stomped his foot",
              "A trait, because he lost the game",
              "An outside trait, because you could see it",
            ],
            answer: 0,
            hints: {
              verbal: "Did the anger last and last, or did it come and go?",
              example: "If a character cries once when her balloon pops but smiles the rest of the story, sad is a feeling, not a trait.",
              narrow: [1],
            },
            explain: "Rio's anger passed by dinnertime — it came and went, so it was a feeling, not a trait.",
          },
          {
            id: "q6", type: "mc",
            prompt: "What is Zia's <b>motivation</b> for saving her allowance?",
            passage: "Zia saved half her allowance every single week. Her mom's birthday was coming, and Zia wanted to surprise her with a gift.",
            options: [
              "She wants to buy her mom a birthday gift",
              "She is saving to buy a toy for herself",
              "Her mom told her she had to save it",
              "She forgot she had any allowance",
            ],
            answer: 0,
            hints: {
              verbal: "Motivation is the WHY. Read the passage again — why is Zia saving?",
              example: "If Max practices kicking every day because he wants to make the team, making the team is his motivation.",
              narrow: [1],
            },
            explain: "The passage says Zia wanted to surprise her mom with a gift — that's the reason WHY she saves.",
          },
          {
            id: "q7", type: "mc",
            prompt: "How does a reader figure out a character's <b>inside</b> traits?",
            options: [
              "By watching what the character does and says",
              "By looking at what the character looks like",
              "By counting the pages in the book",
              "By reading only the title",
            ],
            answer: 0,
            hints: {
              verbal: "Inside traits are invisible. What two things do characters do in a story that give them away?",
              example: "If a character shares her only sandwich, her ACTION shows she is generous — even if the story never says the word.",
              narrow: [1],
            },
            explain: "Actions and words are the clues! What a character does and says shows what they are like inside.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Which inside trait best fits Kip?",
            passage: "Every morning, Kip fed the class fish without being asked. He watered the plants too, even when no one was watching.",
            options: ["responsible", "tall", "grumpy", "lucky"],
            answer: 0,
            hints: {
              verbal: "Kip does his jobs without being asked or watched. What kind of person does that?",
              example: "A character who always tells the truth, even when it's hard, is honest.",
              narrow: [1],
            },
            explain: "Kip takes care of his jobs without being asked — that shows he is responsible. 'Tall' is an outside trait, and nothing shows it.",
          },
        ],
      },
    },

    /* ============ M2 — Prove It! (RL.3.1, RL.3.3) ============ */
    {
      id: "ela-r2-m2",
      title: "Prove It!",
      icon: "🧾",
      standard: "RL.3.1, RL.3.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Show Me Where It Says That!",
          html: `
            <p>Cadet, space detectives never just guess — they find <b>proof</b>. Readers do the same thing!</p>
            <div class="big-visual">
              <div class="vis-row">🕵️ 🧾 📖</div>
            </div>
            <p>If you say, "This character is brave," a good reader will ask:</p>
            <div class="callout"><b>"Show me where it says that!"</b></div>
            <p>Your proof is right there in the story — you just have to point to it.</p>`,
          narration: "Cadet, space detectives never just guess. They find proof. Readers do the same thing! If you say this character is brave, a good reader will ask: show me where it says that! Your proof is right there in the story. You just have to point to it.",
        },
        {
          id: "s2",
          title: "What Counts as Evidence?",
          html: `
            <p><b>Text evidence</b> is words or sentences <u>from the story</u> that prove your idea.</p>
            <div class="vocab"><b>text evidence</b> — words from the story that prove what you think about it.</div>
            <p>Detectives use this sentence frame:</p>
            <div class="callout">"The character is <b>[trait]</b>. I know because the story says <b>[evidence]</b>."</div>
            <p>Your own guess is not evidence. A picture in your head is not evidence. Only the story's words count!</p>`,
          narration: "Text evidence is words or sentences from the story that prove your idea. Detectives use this sentence frame: The character is blank. I know because the story says blank. Your own guess is not evidence. A picture in your head is not evidence. Only the story's words count!",
        },
        {
          id: "s3",
          title: "Watch Me Prove It",
          html: `
            <p>Read this tiny story with me:</p>
            <p><b>Captain Vega and the Storm.</b> Rain hammered the dome. Captain Vega grabbed a rope and marched straight into the storm. "Stay inside," she told her crew. "I will tie down the antenna myself." Her hands shook, but she did not turn back.</p>
            <p>My idea: <b>Captain Vega is brave.</b></p>
            <p>My proof: the story says she <b>"marched straight into the storm"</b> and <b>"did not turn back."</b></p>
            <div class="callout"><b>Trait + Evidence:</b> Captain Vega is brave. I know because the story says she marched into the storm and did not turn back.</div>`,
          narration: "Read this tiny story with me. Captain Vega and the Storm. Rain hammered the dome. Captain Vega grabbed a rope and marched straight into the storm. Stay inside, she told her crew. I will tie down the antenna myself. Her hands shook, but she did not turn back. My idea: Captain Vega is brave. My proof: the story says she marched straight into the storm and did not turn back.",
        },
        {
          id: "s4",
          title: "Real Proof vs. Weak Proof",
          html: `
            <p>Sneaky trap alert! Some sentences are <u>about</u> the character but don't <u>prove</u> your trait.</p>
            <p>Read about Tilly:</p>
            <p><b>Tilly's Star-Berries.</b> Tilly counted her four star-berries. Her tummy growled. Then she saw Pip staring at the empty snack shelf. Tilly slid two berries across the table. "Take these," she said. "You look hungrier than me."</p>
            <p>Idea: <b>Tilly is generous.</b></p>
            <table>
              <tr><th>Weak proof ❌</th><th>Real proof ✔️</th></tr>
              <tr><td>"Tilly counted her four star-berries."</td><td>"Tilly slid two berries across the table."</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Real proof shows the trait in action. Counting berries doesn't show generous — GIVING them does!</div>`,
          narration: "Sneaky trap alert! Some sentences are about the character but don't prove your trait. Read about Tilly. Tilly counted her four star-berries. Her tummy growled. Then she saw Pip staring at the empty snack shelf. Tilly slid two berries across the table. Take these, she said. You look hungrier than me. Idea: Tilly is generous. Counting berries is weak proof. It doesn't show generous. Sliding two berries across the table is real proof, because giving shows the trait in action.",
        },
        {
          id: "s5",
          title: "Ask and Answer Like a Detective",
          html: `
            <p>Detectives also <b>ask questions</b> while they read — and answer them by pointing to the words.</p>
            <p>Question: <b>Why did Tilly give away her berries?</b></p>
            <p>Point to the text: she saw Pip <b>"staring at the empty snack shelf"</b> and said, <b>"You look hungrier than me."</b> She gave them because Pip was hungry!</p>
            <div class="callout"><b>Remember:</b> Answer questions with the story's words, not just your memory. Go back and point!</div>`,
          narration: "Detectives also ask questions while they read, and answer them by pointing to the words. Question: why did Tilly give away her berries? Point to the text. She saw Pip staring at the empty snack shelf, and said, you look hungrier than me. She gave them because Pip was hungry! Answer questions with the story's words, not just your memory. Go back and point!",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Detective badge earned, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can prove a character trait with words from the story.</p>
              <p>✔️ I can tell real proof from weak proof.</p>
              <p>✔️ I can answer questions by pointing back to the text.</p>
            </div>
            <p>Quiz time — bring your magnifying glass! 🔍</p>`,
          narration: "Detective badge earned, Cadet! You can now say: I can prove a character trait with words from the story. I can tell real proof from weak proof. I can answer questions by pointing back to the text. Quiz time. Bring your magnifying glass!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What is <b>text evidence</b>?",
            options: [
              "Words from the story that prove your idea",
              "Your own best guess about the story",
              "The picture on the book's cover",
              "A story you heard somewhere else",
            ],
            answer: 0,
            hints: {
              verbal: "Evidence has to come FROM somewhere. Where do readers find their proof?",
              example: "Saying 'the story says she marched into the storm' is evidence. Saying 'I just feel it' is not.",
              narrow: [1],
            },
            explain: "Text evidence is words from the story itself — not guesses, covers, or other stories.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What can the reader determine about Captain Vega?",
            passage: "Rain hammered the dome. Captain Vega grabbed a rope and marched straight into the storm. \"Stay inside,\" she told her crew. \"I will tie down the antenna myself.\" Her hands shook, but she did not turn back.",
            options: [
              "She is brave.",
              "She gives up easily.",
              "She is lazy.",
              "She is unkind to her crew.",
            ],
            answer: 0,
            hints: {
              verbal: "Look at her actions. She walked INTO a storm and did not turn back. What kind of person does that?",
              example: "A character who climbs a tall tree to save a kitten, even though she's shaking, is brave.",
              narrow: [1],
            },
            explain: "Vega marched into the storm and did not turn back, even though her hands shook — that's brave.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which sentence from the story <b>shows</b> that Captain Vega is brave?",
            passage: "Rain hammered the dome. Captain Vega grabbed a rope and marched straight into the storm. \"Stay inside,\" she told her crew. \"I will tie down the antenna myself.\" Her hands shook, but she did not turn back.",
            options: [
              "\"Captain Vega grabbed a rope and marched straight into the storm.\"",
              "\"Rain hammered the dome.\"",
              "\"Her hands shook.\"",
              "\"'Stay inside,' she told her crew.\"",
            ],
            answer: 0,
            hints: {
              verbal: "Real proof shows the trait IN ACTION. Which sentence shows Vega doing something brave?",
              example: "To prove a character is generous, pick the sentence where she GIVES something away.",
              narrow: [2],
            },
            explain: "Marching straight into the storm is the brave action. The rain and her shaking hands are about the scene, but they don't prove brave by themselves.",
          },
          {
            id: "q4", type: "mc",
            prompt: "What can the reader determine about Tilly?",
            passage: "Tilly counted her four star-berries. Her tummy growled. Then she saw Pip staring at the empty snack shelf. Tilly slid two berries across the table. \"Take these,\" she said. \"You look hungrier than me.\"",
            options: [
              "She is generous.",
              "She is hungry, so that is her trait.",
              "She is selfish.",
              "She is afraid of Pip.",
            ],
            answer: 0,
            hints: {
              verbal: "Hungry is how Tilly FEELS for a moment. What does her ACTION with the berries show about her?",
              example: "A boy who shares his umbrella in the rain is showing the trait 'kind,' even if he feels cold.",
              narrow: [1],
            },
            explain: "Tilly gave away half her berries even though she was hungry. Hungry is a passing feeling — generous is the trait her action shows.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which sentence from the story <b>shows</b> that Tilly is generous?",
            passage: "Tilly counted her four star-berries. Her tummy growled. Then she saw Pip staring at the empty snack shelf. Tilly slid two berries across the table. \"Take these,\" she said. \"You look hungrier than me.\"",
            options: [
              "\"Tilly slid two berries across the table.\"",
              "\"Tilly counted her four star-berries.\"",
              "\"Her tummy growled.\"",
              "\"Then she saw Pip staring at the empty snack shelf.\"",
            ],
            answer: 0,
            hints: {
              verbal: "Generous means giving. Find the sentence where Tilly GIVES something.",
              example: "'She counted her coins' is weak proof. 'She dropped her coins in the donation jar' is real proof.",
              narrow: [1],
            },
            explain: "Sliding two berries to Pip is the giving action. Counting berries is about Tilly, but it doesn't prove she's generous.",
          },
          {
            id: "q6", type: "tf",
            prompt: "True or false: Saying \"I think the character is kind because I just feel it\" counts as text evidence.",
            answer: false,
            hints: {
              verbal: "Where does text evidence have to come from — your feelings, or the story's words?",
              example: "Real evidence sounds like: 'The story says she shared her only sandwich.'",
            },
            explain: "False! A feeling isn't proof. Text evidence must be words you can point to in the story.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Your friend says, \"Vega is brave.\" What is the best detective question to ask?",
            options: [
              "\"Can you show me the words in the story that prove it?\"",
              "\"Is the story long or short?\"",
              "\"Do you like Vega?\"",
              "\"What does Vega look like?\"",
            ],
            answer: 0,
            hints: {
              verbal: "Detectives always ask for proof from the text. Which question asks for that?",
              example: "When someone says 'Tilly is generous,' a detective says, 'Show me where it says that!'",
              narrow: [3],
            },
            explain: "Detectives ask for proof from the story's words. What Vega looks like is an outside trait — it can't prove brave.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Which sentence is the <b>best evidence</b> that a character is patient?",
            options: [
              "\"She waited calmly while her little brother tied his shoes ten times.\"",
              "\"She has long brown hair.\"",
              "\"She won the race on Saturday.\"",
              "\"She yelled, 'Hurry up!'\"",
            ],
            answer: 0,
            hints: {
              verbal: "Patient means staying calm while waiting. Which sentence shows waiting calmly?",
              example: "Best evidence for 'helpful': 'He carried his neighbor's bags up the stairs.'",
              narrow: [1],
            },
            explain: "Waiting calmly through ten tries shows patience in action. Hair color is an outside trait, and yelling would show the opposite!",
          },
        ],
      },
    },

    /* ============ M3 — Story: The New Kid on Deck 7 (RL.3.3, RL.3.1, L.3.4a) ============ */
    {
      id: "ela-r2-m3",
      title: "Story: The New Kid on Deck 7",
      icon: "📖",
      standard: "RL.3.3, RL.3.1, L.3.4a",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Your Reading Mission",
          html: `
            <p>Time for a real story, Cadet! As you read <b>"The New Kid on Deck 7,"</b> be a character detective:</p>
            <div class="callout">
              <p>🎭 Watch what Juno <b>does</b> and <b>says</b> — her inside traits are hiding there.</p>
              <p>🧾 Collect <b>evidence</b> — sentences you could point to as proof.</p>
              <p>🔤 If you meet a new word, read the sentences around it for clues!</p>
            </div>
            <p>Ready? Turn the page! 📖</p>`,
          narration: "Time for a real story, Cadet! As you read The New Kid on Deck 7, be a character detective. Watch what Juno does and says. Her inside traits are hiding there. Collect evidence. Sentences you could point to as proof. And if you meet a new word, read the sentences around it for clues! Ready? Turn the page!",
        },
        {
          id: "s2",
          type: "story",
          title: "The New Kid on Deck 7 — Part 1",
          html: `
            <div class="story">
              <p>It was Juno's first day at station school, and her boots felt heavier than moon rocks. She stood outside the classroom door on Deck 7 of Star Station Beta. Through the little round window, she could see twenty kids she had never met. Her stomach did a slow flip.</p>
              <p>She hesitated. Her hand floated over the door button, then dropped back to her side. She counted to three and finally pressed it.</p>
              <p>"Welcome!" said Ms. Orbit. "Class, this is Juno. Her family just moved here from the moon base."</p>
              <p>"Hi," Juno said, so quietly that only the first row heard her. She hurried to an empty seat in the back and studied her boots.</p>
              <p>At lunch, Juno carried her tray toward an empty table. Then she heard a small, sad sound. A younger boy named Remy sat alone, holding a toy robot. Its wheel had snapped off, and it lay in his hand like a broken cookie.</p>
            </div>`,
          narration: "The New Kid on Deck 7, part one. It was Juno's first day at station school, and her boots felt heavier than moon rocks. She stood outside the classroom door on Deck 7 of Star Station Beta. Through the little round window, she could see twenty kids she had never met. Her stomach did a slow flip. She hesitated. Her hand floated over the door button, then dropped back to her side. She counted to three and finally pressed it. Welcome! said Ms. Orbit. Class, this is Juno. Her family just moved here from the moon base. Hi, Juno said, so quietly that only the first row heard her. She hurried to an empty seat in the back and studied her boots. At lunch, Juno carried her tray toward an empty table. Then she heard a small, sad sound. A younger boy named Remy sat alone, holding a toy robot. Its wheel had snapped off, and it lay in his hand like a broken cookie.",
        },
        {
          id: "s3",
          type: "story",
          title: "The New Kid on Deck 7 — Part 2",
          html: `
            <div class="story">
              <p>Juno's cheeks felt warm. Talking to new people made her heart race. But she picked up her tray and walked over anyway.</p>
              <p>"I can try to fix it," she said softly. "If you want."</p>
              <p>Remy sniffed and handed her the robot. Juno pressed the wheel into place. It popped right back off. She tried again, holding it longer this time. It fell off again.</p>
              <p>"It's okay," Remy mumbled. "It's junk now."</p>
              <p>"It is not junk," Juno said. "And I don't quit." She bent the clip from her lunch tray into a tiny pin and slid it through the wheel. This time, the wheel held. The robot rolled across the table, beeping happily.</p>
              <p>Remy beamed. His smile stretched from one ear all the way to the other. "You fixed it!" he said. "Will you sit with me tomorrow?"</p>
              <p>Juno's voice was still quiet. But her answer was not slow at all. "Yes," she said.</p>
            </div>`,
          narration: "The New Kid on Deck 7, part two. Juno's cheeks felt warm. Talking to new people made her heart race. But she picked up her tray and walked over anyway. I can try to fix it, she said softly. If you want. Remy sniffed and handed her the robot. Juno pressed the wheel into place. It popped right back off. She tried again, holding it longer this time. It fell off again. It's okay, Remy mumbled. It's junk now. It is not junk, Juno said. And I don't quit. She bent the clip from her lunch tray into a tiny pin and slid it through the wheel. This time, the wheel held. The robot rolled across the table, beeping happily. Remy beamed. His smile stretched from one ear all the way to the other. You fixed it! he said. Will you sit with me tomorrow? Juno's voice was still quiet. But her answer was not slow at all. Yes, she said.",
        },
        {
          id: "s4",
          title: "Juno's Trait-Evidence Chart",
          html: `
            <p>Detective time! The story never says "Juno is shy" or "Juno is kind" — it <b>shows</b> us. Let's build her chart:</p>
            <table>
              <tr><th>Inside trait</th><th>Proof from the story</th></tr>
              <tr><td>shy</td><td>She hesitated at the door and said "Hi" so quietly that only the first row heard.</td></tr>
              <tr><td>kind</td><td>She walked over to sad Remy and said, "I can try to fix it."</td></tr>
              <tr><td>determined</td><td>The wheel fell off twice, but she said, "I don't quit," and fixed it.</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> Juno's actions changed the story! Because she didn't quit, the robot got fixed — and she made her first friend.</div>`,
          narration: "Detective time! The story never says Juno is shy, or Juno is kind. It shows us. Let's build her chart. Shy: she hesitated at the door, and said hi so quietly that only the first row heard. Kind: she walked over to sad Remy and said, I can try to fix it. Determined: the wheel fell off twice, but she said I don't quit, and fixed it. Remember, Juno's actions changed the story! Because she didn't quit, the robot got fixed, and she made her first friend.",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>What a story, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can name a character's traits from what they do and say.</p>
              <p>✔️ I can prove each trait with a sentence from the story.</p>
              <p>✔️ I can use nearby words to figure out new words like "hesitated."</p>
            </div>
            <p>Pass this quiz and Character Cove is yours! 🏝️⭐</p>`,
          narration: "What a story, Cadet! You can now say: I can name a character's traits from what they do and say. I can prove each trait with a sentence from the story. I can use nearby words to figure out new words, like hesitated. Pass this quiz and Character Cove is yours!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What can the reader determine about Juno at the beginning of the story?",
            passage: "She hesitated. Her hand floated over the door button, then dropped back to her side. \"Hi,\" Juno said, so quietly that only the first row heard her. She hurried to an empty seat in the back and studied her boots.",
            options: ["She is shy.", "She is bossy.", "She is rude to the class.", "She is excited to give a speech."],
            answer: 0,
            hints: {
              verbal: "Look at her actions: waiting at the door, speaking super quietly, hiding in the back. What trait fits?",
              example: "A character who talks to everyone loudly on day one would be outgoing. Juno is the opposite.",
              narrow: [3],
            },
            explain: "Speaking in a whisper, hiding in the back seat, and hesitating at the door all show that Juno is shy.",
          },
          {
            id: "q2", type: "mc",
            prompt: "In the story, what does <b>hesitated</b> mean?",
            passage: "She hesitated. Her hand floated over the door button, then dropped back to her side. She counted to three and finally pressed it.",
            options: [
              "paused because she wasn't sure",
              "ran through the door quickly",
              "shouted at the top of her voice",
              "fixed something that was broken",
            ],
            answer: 0,
            hints: {
              verbal: "Her hand floated over the button, then DROPPED. Did she press it right away, or did she wait?",
              example: "If a swimmer 'hesitated' at the edge of the pool, she stood there a moment before jumping in.",
              narrow: [1],
            },
            explain: "Hesitated means paused because she wasn't sure. Juno's hand hovered and dropped before she finally pressed the button.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which words from the story helped you figure out what <b>hesitated</b> means?",
            passage: "She hesitated. Her hand floated over the door button, then dropped back to her side. She counted to three and finally pressed it.",
            options: [
              "\"Her hand floated over the door button, then dropped\"",
              "\"twenty kids she had never met\"",
              "\"Deck 7 of Star Station Beta\"",
              "\"'Welcome!' said Ms. Orbit\"",
            ],
            answer: 0,
            hints: {
              verbal: "Context clues sit right NEXT to the new word. Which words come right after 'She hesitated'?",
              example: "For 'Remy beamed,' the clue is the very next sentence about his smile.",
              narrow: [1],
            },
            explain: "The very next sentence — her hand floating and dropping — shows the pause. That's the context clue for hesitated.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Which sentence from the story <b>shows</b> that Juno is kind?",
            passage: "Juno's cheeks felt warm. Talking to new people made her heart race. But she picked up her tray and walked over anyway. \"I can try to fix it,\" she said softly. \"If you want.\"",
            options: [
              "\"'I can try to fix it,' she said softly.\"",
              "\"Juno's cheeks felt warm.\"",
              "\"She hurried to an empty seat in the back.\"",
              "\"The robot rolled across the table.\"",
            ],
            answer: 0,
            hints: {
              verbal: "Kind means caring about others. Which sentence shows Juno offering to help someone?",
              example: "For Tilly, the proof of generous was the sentence where she GAVE the berries away.",
              narrow: [1],
            },
            explain: "Offering to fix Remy's robot shows kindness in action. Warm cheeks are about Juno, but they don't prove she's kind.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which sentence from the story <b>shows</b> that Juno is determined?",
            passage: "\"It's okay,\" Remy mumbled. \"It's junk now.\" \"It is not junk,\" Juno said. \"And I don't quit.\" She bent the clip from her lunch tray into a tiny pin and slid it through the wheel. This time, the wheel held.",
            options: [
              "\"'It is not junk,' Juno said. 'And I don't quit.'\"",
              "\"'It's okay,' Remy mumbled.\"",
              "\"Juno's voice was still quiet.\"",
              "\"At lunch, Juno carried her tray.\"",
            ],
            answer: 0,
            hints: {
              verbal: "Determined means you keep trying and never give up. Which sentence sounds like never giving up?",
              example: "'She practiced the song again and again until it was perfect' shows determined.",
              narrow: [2],
            },
            explain: "Saying 'I don't quit' and trying a new way shows Juno is determined. Her quiet voice shows shy, not determined.",
          },
          {
            id: "q6", type: "mc",
            prompt: "In the story, what does <b>beamed</b> mean?",
            passage: "Remy beamed. His smile stretched from one ear all the way to the other. \"You fixed it!\" he said.",
            options: [
              "smiled a great big smile",
              "started to cry",
              "shouted angrily",
              "shined a flashlight",
            ],
            answer: 0,
            hints: {
              verbal: "Read the sentence right after 'Remy beamed.' What is stretching from ear to ear?",
              example: "'Dad beamed when I showed him my drawing' — Dad was very happy and it showed on his face.",
              narrow: [3],
            },
            explain: "Beamed means smiled a great big smile. The clue is his smile stretching from one ear to the other.",
          },
          {
            id: "q7", type: "tf",
            prompt: "True or false: Juno gave up after the robot's wheel fell off two times.",
            passage: "Juno pressed the wheel into place. It popped right back off. She tried again, holding it longer this time. It fell off again. \"It is not junk,\" Juno said. \"And I don't quit.\"",
            answer: false,
            hints: {
              verbal: "Read the last line of the passage. What did Juno say after the second try failed?",
              example: "A determined character keeps going after a fail — like a biker who falls twice and still rides again.",
            },
            explain: "False! After two fails, Juno said 'I don't quit,' made a tiny pin from a clip, and fixed the wheel on her third try.",
          },
          {
            id: "q8", type: "mc",
            prompt: "What happened <b>because</b> Juno kept trying and fixed the robot?",
            passage: "This time, the wheel held. The robot rolled across the table, beeping happily. Remy beamed. \"You fixed it!\" he said. \"Will you sit with me tomorrow?\" Juno's voice was still quiet. But her answer was not slow at all. \"Yes,\" she said.",
            options: [
              "Remy asked her to sit with him, and she made her first friend",
              "Ms. Orbit gave the class extra homework",
              "The robot broke again right away",
              "Juno moved back to the moon base",
            ],
            answer: 0,
            hints: {
              verbal: "A character's actions change what happens next. What did Remy do right after the robot was fixed?",
              example: "Because Tilly shared her berries, Pip wasn't hungry anymore — one action causes the next event.",
              narrow: [2],
            },
            explain: "Juno's determination changed the story: the fixed robot made Remy beam, and he asked her to sit with him — her first station friend!",
          },
        ],
      },
    },
  ],
});
