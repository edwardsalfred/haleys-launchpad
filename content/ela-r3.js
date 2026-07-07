/* Unit 3 (ELA) — Story Engine (RL.3.3, RL.3.1)
   How a character's traits and motivations CAUSE their actions,
   and how those actions drive the sequence of events. */
window.COURSE_CONTENT.push({
  id: "ela-r3",
  subject: "ela",
  order: 3,
  title: "Story Engine",
  subtitle: "How characters make the story go",
  planet: { emoji: "⚙️", color: "#A78BFA" },
  badgeName: "Story Engine Star",
  modules: [

    /* ============ M1 — Traits Drive the Story (RL.3.3) ============ */
    {
      id: "ela-r3-m1",
      title: "Traits Drive the Story",
      icon: "🚂",
      standard: "RL.3.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Every Story Has an Engine",
          html: `
            <p>Cadet, welcome to the Story Engine! Here's a big secret about stories:</p>
            <div class="big-visual">
              <div class="vis-row">🚂 ➜ 🚃 ➜ 🚃 ➜ 🚃</div>
            </div>
            <p>The events in a story are like train cars. They don't move by themselves. Something has to <b>pull</b> them.</p>
            <p>The engine that pulls every story is the <b>character</b> — what the character is like, and what the character does!</p>
            <div class="callout"><b>Remember:</b> Characters don't just ride along in a story. Their choices make the next events happen!</div>`,
          narration: "Cadet, welcome to the Story Engine! Here's a big secret about stories. The events in a story are like train cars. They don't move by themselves. Something has to pull them. The engine that pulls every story is the character. What the character is like, and what the character does! Characters don't just ride along in a story. Their choices make the next events happen!",
        },
        {
          id: "s2",
          title: "Traits: What a Character Is Like",
          html: `
            <p>A <b>trait</b> is a word that tells what a character is like on the <u>inside</u> — brave, curious, kind, impatient, careful.</p>
            <div class="vocab"><b>trait</b> — what a character is like on the inside. Not how they look — how they act and think!</div>
            <p>Traits matter because they <b>cause actions</b>. Watch the word <b>because</b> do its job:</p>
            <div class="big-visual">
              <div class="vis-row">BECAUSE a character is brave 💪</div>
              <div class="vis-row">⬇️</div>
              <div class="vis-row">she stands up to the dragon 🐉</div>
            </div>
            <p>A shy character would hide instead. Different trait, different action, different story!</p>`,
          narration: "A trait is a word that tells what a character is like on the inside. Brave, curious, kind, impatient, careful. Not how they look. How they act and think! Traits matter because they cause actions. Watch the word because do its job. Because a character is brave, she stands up to the dragon. A shy character would hide instead. Different trait, different action, different story!",
        },
        {
          id: "s3",
          type: "story",
          title: "Read: The Door at Grandma's House",
          html: `
            <div class="story">
              <p>Mia asked questions about everything. Why do cats purr? What is inside a cloud? Grandma called her "my curious cricket."</p>
              <p>One rainy day, Mia visited Grandma's house. At the end of the hall stood an old blue door.</p>
              <p>"Grandma, what's behind that door?" Mia asked.</p>
              <p>"Oh, nothing for little crickets," Grandma said. But she smiled a small, secret smile.</p>
              <p>That smile made Mia even more curious. She hunted high and low until she found a tiny key inside the teapot on the shelf. Click! The old door creaked open.</p>
              <p>Behind it was a hidden garden with a stone bench and roses growing wild.</p>
              <p>"This was Grandpa's garden," Grandma whispered. "I closed it up long ago. Looking at it made me too sad."</p>
              <p>"Can we wake it up again?" Mia asked.</p>
              <p>So all spring, Mia and Grandma pulled weeds and planted seeds — together.</p>
            </div>`,
          narration: "The Door at Grandma's House. Mia asked questions about everything. Why do cats purr? What is inside a cloud? Grandma called her my curious cricket. One rainy day, Mia visited Grandma's house. At the end of the hall stood an old blue door. Grandma, what's behind that door? Mia asked. Oh, nothing for little crickets, Grandma said. But she smiled a small, secret smile. That smile made Mia even more curious. She hunted high and low until she found a tiny key inside the teapot on the shelf. Click! The old door creaked open. Behind it was a hidden garden with a stone bench and roses growing wild. This was Grandpa's garden, Grandma whispered. I closed it up long ago. Looking at it made me too sad. Can we wake it up again? Mia asked. So all spring, Mia and Grandma pulled weeds and planted seeds. Together.",
        },
        {
          id: "s4",
          title: "The Because Chain",
          html: `
            <p>Now let's hook the train cars together. Mia's trait is the engine — everything else follows <b>because</b> of it!</p>
            <div class="big-visual">
              <div class="vis-row">BECAUSE Mia is curious 🔍</div>
              <div class="vis-row">➜ she hunts for the key 🗝️</div>
              <div class="vis-row">➜ she opens the old door 🚪</div>
              <div class="vis-row">➜ she finds the hidden garden 🌹</div>
              <div class="vis-row">➜ she and Grandma bring it back to life 🌱</div>
            </div>
            <p>Readers keep track of this with a <b>Characters' Contributions chart</b>:</p>
            <table>
              <tr><th>Trait</th><th>Text evidence</th><th>How it changed the events</th></tr>
              <tr><td>curious</td><td>"She hunted high and low until she found a tiny key."</td><td>Opening the door led to finding the garden and fixing it with Grandma.</td></tr>
            </table>`,
          narration: "Now let's hook the train cars together. Mia's trait is the engine. Everything else follows because of it! Because Mia is curious, she hunts for the key. So she opens the old door. So she finds the hidden garden. So she and Grandma bring it back to life. Readers keep track of this with a Characters' Contributions chart. It has three parts. The trait, the text evidence that proves it, and how the trait changed the events of the story.",
        },
        {
          id: "s5",
          title: "The What-If Test",
          html: `
            <p>Here's a detective trick to check if a trait really drives the story. Ask: <b>What if the character weren't ___?</b></p>
            <div class="big-visual">
              <div class="vis-row">What if Mia weren't curious? 🤔</div>
            </div>
            <p>She would walk right past the blue door. No key hunt. No creaking door. No hidden garden. No spring of planting with Grandma.</p>
            <p>The whole story falls apart! That proves Mia's curiosity isn't just a detail — it's the <b>engine</b>.</p>
            <div class="callout"><b>The What-If Test:</b> If taking away the trait makes the events disappear, the trait CAUSED the events.</div>`,
          narration: "Here's a detective trick to check if a trait really drives the story. Ask: what if the character weren't that trait? What if Mia weren't curious? She would walk right past the blue door. No key hunt. No creaking door. No hidden garden. No spring of planting with Grandma. The whole story falls apart! That proves Mia's curiosity isn't just a detail. It's the engine. If taking away the trait makes the events disappear, the trait caused the events.",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>Engine check complete, Cadet! You can now say:</p>
            <div class="callout">
              <p>✔️ I can name a character's trait and find text evidence for it.</p>
              <p>✔️ I can build a because chain: trait ➜ action ➜ next events.</p>
              <p>✔️ I can use the What-If Test to show a trait drives the story.</p>
            </div>
            <p>Quiz time — show me that Story Engine power! 🚂</p>`,
          narration: "Engine check complete, Cadet! You can now say: I can name a character's trait and find text evidence for it. I can build a because chain from trait to action to next events. I can use the What-If Test to show a trait drives the story. Quiz time. Show me that Story Engine power!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "What is a character <b>trait</b>?",
            options: [
              "What a character is like on the inside",
              "What a character is wearing",
              "The place where the story happens",
              "The last event in the story",
            ],
            answer: 0,
            hints: {
              verbal: "A trait tells how a character acts and thinks — words like brave, curious, or kind.",
              example: "If a boy shares his lunch every day, his trait is generous — that's what he's like inside.",
              narrow: [1],
            },
            explain: "A trait is what a character is like on the inside — like curious, brave, or kind. Clothes and places aren't traits.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which word best describes Mia's trait?",
            passage: "Mia asked questions about everything. Why do cats purr? What is inside a cloud? Grandma called her \"my curious cricket.\"",
            options: ["curious", "sleepy", "shy", "grumpy"],
            answer: 0,
            hints: {
              verbal: "What does Mia do about everything? Asking lots of questions is a clue to her trait.",
              example: "A character who gives away her toys shows the trait generous. Mia's questions show her trait.",
              narrow: [2],
            },
            explain: "Mia asks questions about everything — that's what curious people do. Grandma even calls her a curious cricket!",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which sentence from the story is the best <b>evidence</b> that Mia is curious?",
            passage: "One rainy day, Mia visited Grandma's house. At the end of the hall stood an old blue door. ... She hunted high and low until she found a tiny key inside the teapot on the shelf.",
            options: [
              "\"She hunted high and low until she found a tiny key.\"",
              "\"One rainy day, Mia visited Grandma's house.\"",
              "\"At the end of the hall stood an old blue door.\"",
              "\"Behind it was a hidden garden with a stone bench.\"",
            ],
            answer: 0,
            hints: {
              verbal: "Evidence for a trait shows the character DOING something that proves it. Which sentence shows Mia acting curious?",
              example: "Evidence that a girl is brave: 'She stepped into the dark cave first.' It shows the trait in action.",
              narrow: [1],
            },
            explain: "Hunting high and low for the key shows curiosity in action. The other sentences are true, but they tell about the weather, the door, or the garden — not about Mia.",
          },
          {
            id: "q4", type: "mc",
            prompt: "What happened <b>BECAUSE</b> Mia opened the old blue door?",
            passage: "Click! The old door creaked open. Behind it was a hidden garden with a stone bench and roses growing wild.",
            options: [
              "She found the hidden garden",
              "She found the key in the teapot",
              "Grandma smiled a secret smile",
              "It started to rain",
            ],
            answer: 0,
            hints: {
              verbal: "A because question asks what came NEXT as a result. What did opening the door lead to?",
              example: "Because Leo watered the seed, a flower grew. The watering came first, the flower came after.",
              narrow: [1],
            },
            explain: "Opening the door is the cause; finding the hidden garden is the effect. Finding the key and Grandma's smile happened BEFORE the door opened.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Use the What-If Test! If Mia <b>weren't</b> curious, what would most likely happen?",
            options: [
              "She would never find the key, so the garden would stay hidden",
              "She would find the garden even faster",
              "Grandma would ask Mia to open the door",
              "The story would end exactly the same way",
            ],
            answer: 0,
            hints: {
              verbal: "Take away the curiosity. Would Mia still hunt for the key? What disappears from the story?",
              example: "If a brave knight weren't brave, he wouldn't face the dragon — so the dragon would never be beaten.",
              narrow: [3],
            },
            explain: "No curiosity means no key hunt, no open door, no garden. The trait causes the whole chain of events!",
          },
          {
            id: "q6", type: "mc",
            prompt: "A Characters' Contributions chart has three columns: Trait, Text evidence, and ___?",
            options: [
              "How the trait changed the events",
              "The character's favorite color",
              "How many pages the story has",
              "The name of the author",
            ],
            answer: 0,
            hints: {
              verbal: "The chart tracks how the character makes the story GO. The last column connects the trait to the events.",
              example: "For Mia: trait = curious, evidence = she hunted for the key, last column = opening the door led to finding the garden.",
              narrow: [1],
            },
            explain: "The third column tells how the trait and actions changed the sequence of events — that's the character's contribution to the story!",
          },
          {
            id: "q7", type: "mc",
            prompt: "How does Mia's curiosity <b>change what happens</b> in the story?",
            passage: "That smile made Mia even more curious. She hunted high and low until she found a tiny key inside the teapot on the shelf. Click! The old door creaked open. ... So all spring, Mia and Grandma pulled weeds and planted seeds — together.",
            options: [
              "It leads her to open the door, which brings Grandpa's garden back to life",
              "It makes Grandma close the garden long ago",
              "It makes the roses grow wild behind the door",
              "It causes the rainy day at the start of the story",
            ],
            answer: 0,
            hints: {
              verbal: "Follow the because chain from the trait all the way to the ending. Where does her curiosity lead?",
              example: "A helpful trait can change a story's ending: because Sam is helpful, he fixes the wagon, so the team wins the parade.",
              narrow: [2],
            },
            explain: "Her curiosity leads to the key, the door, and the garden — and by the end, she and Grandma wake the garden up again. The rain and the wild roses happened without Mia's help.",
          },
          {
            id: "q8", type: "tf",
            prompt: "True or false: A character's actions can <b>cause</b> the next events in a story.",
            answer: true,
            hints: {
              verbal: "Think about the train. Do the story events move by themselves, or does the character's choice pull them along?",
              example: "Because Mia opened the door, she found the garden — her action caused the next event.",
            },
            explain: "True! Characters are the story engine. Their traits cause their actions, and their actions cause what happens next.",
          },
        ],
      },
    },

    /* ============ M2 — Story: Rex and the Robot Race (RL.3.3, RL.3.1) ============ */
    {
      id: "ela-r3-m2",
      title: "Story: Rex and the Robot Race",
      icon: "🤖",
      standard: "RL.3.3, RL.3.1",
      minutes: 20,
      screens: [
        {
          id: "s1",
          type: "story",
          title: "Rex and the Robot Race — Part 1",
          html: `
            <div class="story">
              <p>Rex loved to go fast. He ran to lunch. He rushed through homework. Waiting made his feet tap and his fingers drum. Rex was the most impatient kid at Maple School.</p>
              <p>On Friday, the school held the Great Robot Race. Rex had built a shiny silver robot named Zip. Before the race, Ms. Ortiz held up a checklist.</p>
              <p>"Racers, do three things," she said. "Tighten every screw, test your wheels, and check your battery."</p>
              <p>Rex tightened Zip's screws in a flash. He spun the wheels twice. Then he read the last step. The battery check took five whole minutes.</p>
              <p>"Five minutes?" Rex groaned. "No way. Zip is ready. I want to practice my victory wave."</p>
              <p>Next to him, a girl named Jade checked her robot slowly and carefully — every screw, every wheel, and yes, the battery.</p>
              <p>"You'll still be checking when I win," Rex laughed, and he skipped the battery check.</p>
            </div>`,
          narration: "Rex and the Robot Race, part one. Rex loved to go fast. He ran to lunch. He rushed through homework. Waiting made his feet tap and his fingers drum. Rex was the most impatient kid at Maple School. On Friday, the school held the Great Robot Race. Rex had built a shiny silver robot named Zip. Before the race, Ms. Ortiz held up a checklist. Racers, do three things, she said. Tighten every screw, test your wheels, and check your battery. Rex tightened Zip's screws in a flash. He spun the wheels twice. Then he read the last step. The battery check took five whole minutes. Five minutes? Rex groaned. No way. Zip is ready. I want to practice my victory wave. Next to him, a girl named Jade checked her robot slowly and carefully. Every screw, every wheel, and yes, the battery. You'll still be checking when I win, Rex laughed. And he skipped the battery check.",
        },
        {
          id: "s2",
          type: "story",
          title: "Rex and the Robot Race — Part 2",
          html: `
            <div class="story">
              <p>The whistle blew. Zip shot to the front like a silver arrow! Rex practiced his victory wave.</p>
              <p>Then, halfway down the track, Zip blinked red. Zip rolled slower... and slower... and stopped. The battery was dead.</p>
              <p>Rex's stomach dropped. "The battery check," he whispered. "I skipped it."</p>
              <p>Just then he heard a rattle. Jade's robot wobbled near the ramp — its front wheel had come loose! Jade's hands were shaking too hard to fix it.</p>
              <p>Rex knew wheels. He had tightened Zip's screws a hundred times. He could sit and sulk, or he could help.</p>
              <p>Rex ran over. "Hold your robot still," he said. "Righty-tighty!" Together they fixed the wheel, and Jade's robot zoomed across the finish line.</p>
              <p>Jade won the trophy. But she walked straight to Rex and shook his hand.</p>
              <p>"Next year, let's check our robots together," she said.</p>
              <p>"Deal," said Rex. "Even the battery. <u>Especially</u> the battery."</p>
            </div>`,
          narration: "Rex and the Robot Race, part two. The whistle blew. Zip shot to the front like a silver arrow! Rex practiced his victory wave. Then, halfway down the track, Zip blinked red. Zip rolled slower, and slower, and stopped. The battery was dead. Rex's stomach dropped. The battery check, he whispered. I skipped it. Just then he heard a rattle. Jade's robot wobbled near the ramp. Its front wheel had come loose! Jade's hands were shaking too hard to fix it. Rex knew wheels. He had tightened Zip's screws a hundred times. He could sit and sulk, or he could help. Rex ran over. Hold your robot still, he said. Righty-tighty! Together they fixed the wheel, and Jade's robot zoomed across the finish line. Jade won the trophy. But she walked straight to Rex and shook his hand. Next year, let's check our robots together, she said. Deal, said Rex. Even the battery. Especially the battery.",
        },
        {
          id: "s3",
          title: "Walk the Chain",
          html: `
            <p>Great reading, Cadet! Now let's hook up the because chain that drives this whole story:</p>
            <div class="big-visual">
              <div class="vis-row">BECAUSE Rex is impatient ⏩</div>
              <div class="vis-row">➜ he skips the battery check 🔋</div>
              <div class="vis-row">➜ Zip stops in the middle of the race 🤖</div>
              <div class="vis-row">➜ Rex is out — and sees Jade in trouble 👀</div>
              <div class="vis-row">➜ he chooses to help her fix the wheel 🔧</div>
              <div class="vis-row">➜ Jade finishes, and they become a team 🤝</div>
            </div>
            <p>Now the What-If Test: <b>What if Rex weren't impatient?</b> He would do the battery check. Zip would finish the race. But Rex might never stop, never help Jade, and never learn his lesson!</p>
            <div class="callout"><b>Remember:</b> One trait at the start caused every event — all the way to the new ending.</div>`,
          narration: "Great reading, Cadet! Now let's hook up the because chain that drives this whole story. Because Rex is impatient, he skips the battery check. So Zip stops in the middle of the race. So Rex is out, and sees Jade in trouble. So he chooses to help her fix the wheel. So Jade finishes, and they become a team. Now the What-If Test. What if Rex weren't impatient? He would do the battery check. Zip would finish the race. But Rex might never stop, never help Jade, and never learn his lesson! One trait at the start caused every event, all the way to the new ending.",
        },
        {
          id: "s4",
          title: "Rex's Contributions Chart",
          html: `
            <p>Let's fill in the Characters' Contributions chart for Rex. Notice he shows TWO sides!</p>
            <table>
              <tr><th>Trait</th><th>Text evidence</th><th>How it changed the events</th></tr>
              <tr><td>impatient</td><td>"Five minutes? No way." He skipped the battery check.</td><td>Zip's battery died, so Rex lost his chance to win.</td></tr>
              <tr><td>helpful</td><td>"Hold your robot still," he said. Together they fixed the wheel.</td><td>Jade finished the race, and they planned to work together next year.</td></tr>
            </table>
            <p>See it, Cadet? Rex's impatience caused the problem. His choice to help caused the happy ending. Characters drive the story from the first page to the last!</p>`,
          narration: "Let's fill in the Characters' Contributions chart for Rex. Notice he shows two sides! First trait: impatient. The evidence: he said five minutes, no way, and skipped the battery check. How it changed the events: Zip's battery died, so Rex lost his chance to win. Second trait: helpful. The evidence: he said hold your robot still, and together they fixed the wheel. How it changed the events: Jade finished the race, and they planned to work together next year. See it, Cadet? Rex's impatience caused the problem. His choice to help caused the happy ending. Characters drive the story from the first page to the last!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Story Engine mastered! You can now say:</p>
            <div class="callout">
              <p>✔️ I can name Rex's traits and prove them with story evidence.</p>
              <p>✔️ I can explain how Rex's actions caused the next events.</p>
              <p>✔️ I can use the What-If Test to see how a trait changes a story's ending.</p>
            </div>
            <p>Pass this quiz and the Story Engine Star is yours! ⚙️⭐</p>`,
          narration: "Story Engine mastered! You can now say: I can name Rex's traits and prove them with story evidence. I can explain how Rex's actions caused the next events. I can use the What-If Test to see how a trait changes a story's ending. Pass this quiz and the Story Engine Star is yours!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which trait best describes Rex at the <b>beginning</b> of the story?",
            passage: "Rex loved to go fast. He ran to lunch. He rushed through homework. Waiting made his feet tap and his fingers drum. Rex was the most impatient kid at Maple School.",
            options: ["impatient", "careful", "shy", "mean"],
            answer: 0,
            hints: {
              verbal: "How does Rex feel about waiting? Rushing and hating to wait point to one trait.",
              example: "A kid who checks every step slowly, like Jade, is careful. Rex is the opposite.",
              narrow: [1],
            },
            explain: "Rex rushes everything and can't stand waiting — that's impatient. Careful is Jade's trait, not Rex's.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What happened <b>BECAUSE</b> Rex skipped the battery check?",
            passage: "Then, halfway down the track, Zip blinked red. Zip rolled slower... and slower... and stopped. The battery was dead.",
            options: [
              "Zip's battery died in the middle of the race",
              "Ms. Ortiz took away the checklist",
              "Jade's wheel came loose on the ramp",
              "Zip crossed the finish line first",
            ],
            answer: 0,
            hints: {
              verbal: "The battery never got checked. What part of Zip failed during the race?",
              example: "Because a rider skips pumping her tires, her bike goes flat mid-ride. Skipped step, broken part.",
              narrow: [2],
            },
            explain: "No battery check meant a dead battery — so Zip stopped mid-race. Jade's loose wheel happened too, but Rex's skipped check didn't cause it.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which sentence from the story is the best <b>evidence</b> that Rex is impatient?",
            passage: "\"Five minutes?\" Rex groaned. \"No way. Zip is ready. I want to practice my victory wave.\" ... \"You'll still be checking when I win,\" Rex laughed, and he skipped the battery check.",
            options: [
              "\"Five minutes? No way. Zip is ready.\"",
              "\"Rex had built a shiny silver robot named Zip.\"",
              "\"On Friday, the school held the Great Robot Race.\"",
              "\"Jade won the trophy.\"",
            ],
            answer: 0,
            hints: {
              verbal: "Look for words that show Rex refusing to wait. Which sentence shows that feeling?",
              example: "Evidence that a character is kind: 'She gave her only cookie away.' The sentence must SHOW the trait.",
              narrow: [1],
            },
            explain: "Groaning at five minutes and saying no way shows Rex won't wait — impatience in action. The other sentences are true but don't show his trait.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Put the events in order. What happened right <b>AFTER</b> Zip stopped on the track?",
            passage: "Rex's stomach dropped. \"The battery check,\" he whispered. \"I skipped it.\" Just then he heard a rattle. Jade's robot wobbled near the ramp — its front wheel had come loose!",
            options: [
              "Rex heard a rattle — Jade's wheel had come loose",
              "Ms. Ortiz read the checklist to the racers",
              "Rex tightened Zip's screws in a flash",
              "Jade shook Rex's hand",
            ],
            answer: 0,
            hints: {
              verbal: "Find the moment Zip stops in the passage. Read what happens just then.",
              example: "To order events, use time clues like 'just then' and 'after' — they tell you what comes next.",
              narrow: [3],
            },
            explain: "Just after Zip stopped, Rex heard the rattle of Jade's loose wheel. The checklist and screw-tightening happened BEFORE the race, and the handshake came at the very end.",
          },
          {
            id: "q5", type: "mc",
            prompt: "How does Rex's <b>impatience</b> change what happens in the story?",
            options: [
              "It makes him skip a step, which knocks him out of the race",
              "It helps him build a faster robot than everyone",
              "It makes Jade check her robot carefully",
              "It causes Ms. Ortiz to cancel the race",
            ],
            answer: 0,
            hints: {
              verbal: "Follow the because chain: impatient ➜ skipped check ➜ what happened to Zip?",
              example: "Because Mia is curious, she opens the door and finds the garden. The trait starts the chain of events.",
              narrow: [1],
            },
            explain: "His impatience made him skip the battery check, the battery died, and Zip stopped — impatience knocked Rex out of the race. Jade was careful all on her own!",
          },
          {
            id: "q6", type: "mc",
            prompt: "Use the What-If Test! If Rex <b>weren't</b> impatient, what would most likely be different?",
            options: [
              "He would check the battery, and Zip would keep running in the race",
              "Zip would stop even sooner in the race",
              "Jade would skip her battery check too",
              "The race would happen on a different day",
            ],
            answer: 0,
            hints: {
              verbal: "Take away the impatience. Would Rex still skip the five-minute battery check?",
              example: "If Mia weren't curious, she'd never hunt for the key — take away the trait and the event disappears.",
              narrow: [1],
            },
            explain: "A patient Rex would do the full checklist, so Zip's battery would be charged and Zip would keep racing. The trait caused the breakdown!",
          },
          {
            id: "q7", type: "mc",
            prompt: "How did Rex's choice to <b>help Jade</b> change the ending of the story?",
            passage: "Together they fixed the wheel, and Jade's robot zoomed across the finish line. ... \"Next year, let's check our robots together,\" she said. \"Deal,\" said Rex.",
            options: [
              "Jade finished the race, and the two became a team for next year",
              "Rex's robot Zip got a new battery and won",
              "Jade's robot stopped on the track next to Zip",
              "Rex got the trophy for the fastest robot",
            ],
            answer: 0,
            hints: {
              verbal: "What did fixing the wheel let Jade's robot do? And what did Jade say to Rex after?",
              example: "A character's kind action can change an ending: because Sam shares his map, the lost hikers get home.",
              narrow: [3],
            },
            explain: "Rex's help got Jade's robot across the finish line — and won him a teammate for next year. Rex didn't win the trophy, but his action changed the ending for the better.",
          },
          {
            id: "q8", type: "tf",
            prompt: "True or false: Zip stopped in the race <b>because</b> Rex skipped the battery check.",
            answer: true,
            hints: {
              verbal: "What did Rex whisper the moment Zip stopped? He named the cause himself!",
              example: "Cause and effect: because a plant gets no water, it wilts. Skipped step, stopped robot.",
            },
            explain: "True! Skipping the battery check was the cause, and the dead battery that stopped Zip was the effect. Rex even whispered it: I skipped it.",
          },
        ],
      },
    },
  ],
});
