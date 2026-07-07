/* Reading Unit 4 — Writer's Launchpad (L.3.2c, W.3.1, W.3.1b, RL.3.3)
   The final reading unit: dialogue punctuation, the RACES opinion-writing
   strategy, and the culminating Star Reader performance task. */
window.COURSE_CONTENT.push({
  id: "ela-r4",
  subject: "ela",
  order: 4,
  title: "Writer's Launchpad",
  subtitle: "Say it, prove it, write it",
  planet: { emoji: "✍️", color: "#FF8FD8" },
  badgeName: "Writer's Launchpad Star",
  modules: [

    /* ============ M1 — Talking Marks (L.3.2c) ============ */
    {
      id: "ela-r4-m1",
      title: "Talking Marks",
      icon: "💬",
      standard: "L.3.2c",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Words That Talk",
          html: `
            <p>Cadet! Our ship radio just caught a message. Someone is <b>talking</b> in this sentence — can you spot which words came out of their mouth?</p>
            <div class="big-visual">"Blast off!" shouted Pip.</div>
            <p>See those little floating marks? They are <b>quotation marks</b>, and they give the spoken words a hug.</p>
            <div class="vocab"><b>quotation marks</b> — the marks " " that wrap around a speaker's exact words.</div>
            <div class="callout"><b>Remember:</b> Quotation marks hug ONLY the spoken words. The <b>speaker tag</b> — words like <u>shouted Pip</u> — stays outside the hug.</div>`,
          narration: "Cadet! Our ship radio just caught a message. Someone is talking in this sentence. Can you spot which words came out of their mouth? Blast off, shouted Pip. See those little floating marks? They are quotation marks, and they give the spoken words a hug. Quotation marks hug only the spoken words. The speaker tag, words like shouted Pip, stays outside the hug.",
        },
        {
          id: "s2",
          title: "Pattern A: Speech First",
          html: `
            <p>There are two ways to build a talking sentence. Here is <b>Pattern A</b> — the speech comes FIRST:</p>
            <div class="big-visual">"Let's go," said Max.</div>
            <p>Three rules make it work:</p>
            <p>1. Quotation marks hug the spoken words: <b>"Let's go,"</b></p>
            <p>2. A <b>comma</b> sits <u>inside</u> the closing quotation mark. It separates the speech from the speaker tag.</p>
            <p>3. A period ends the whole sentence, after <b>said Max</b>.</p>
            <div class="callout"><b>Remember:</b> In Pattern A, the comma rides INSIDE the quotation marks — like a passenger inside the rocket.</div>`,
          narration: "There are two ways to build a talking sentence. Here is Pattern A. The speech comes first. Let's go, said Max. Three rules make it work. One: quotation marks hug the spoken words. Two: a comma sits inside the closing quotation mark. It separates the speech from the speaker tag. Three: a period ends the whole sentence, after said Max. In Pattern A, the comma rides inside the quotation marks, like a passenger inside the rocket.",
        },
        {
          id: "s3",
          title: "Pattern B: Speaker First",
          html: `
            <p>Now flip it! In <b>Pattern B</b>, the speaker tag comes FIRST:</p>
            <div class="big-visual">Max said, "Let's go."</div>
            <p>Three rules again:</p>
            <p>1. A <b>comma</b> comes right after the speaker tag: <b>Max said,</b></p>
            <p>2. The speech starts with a <b>capital letter</b>: <b>"L</b>et's go."</p>
            <p>3. The end mark — period, question mark, or exclamation point — goes <u>inside</u> the quotation marks.</p>
            <table>
              <tr><th>Pattern A</th><th>Pattern B</th></tr>
              <tr><td>"Let's go," said Max.</td><td>Max said, "Let's go."</td></tr>
            </table>`,
          narration: "Now flip it! In Pattern B, the speaker tag comes first. Max said, let's go. Three rules again. One: a comma comes right after the speaker tag. Two: the speech starts with a capital letter. Three: the end mark, a period, question mark, or exclamation point, goes inside the quotation marks. Pattern A puts the speech first. Pattern B puts the speaker first. Both need a comma and hugging quotation marks.",
        },
        {
          id: "s4",
          title: "Repair Shop: Fix the Broken Sentence",
          html: `
            <p>Uh oh — this sentence crash-landed with NO talking marks at all. Let's repair it together!</p>
            <div class="big-visual">We have a new student today she said</div>
            <p>Step 1: Find the spoken words: <b>We have a new student today</b></p>
            <p>Step 2: Hug them with quotation marks: <b>"We have a new student today"</b></p>
            <p>Step 3: It's Pattern A, so tuck a comma INSIDE the closing quotes: <b>"We have a new student today,"</b></p>
            <p>Step 4: End the sentence with a period after the tag.</p>
            <div class="big-visual">"We have a new student today," she said.</div>
            <p>Repair complete! 🔧</p>`,
          narration: "Uh oh. This sentence crash-landed with no talking marks at all. Let's repair it together! We have a new student today she said. Step 1: find the spoken words. We have a new student today. Step 2: hug them with quotation marks. Step 3: it's Pattern A, so tuck a comma inside the closing quotation marks. Step 4: end the sentence with a period after the tag. We have a new student today, comma, she said, period. Repair complete!",
        },
        {
          id: "s5",
          title: "Mission Recap",
          html: `
            <p>Talking marks mastered! You can now say:</p>
            <div class="callout">
              <p>✔️ I can hug ONLY the spoken words with quotation marks.</p>
              <p>✔️ I can use a comma to separate the speech from the speaker tag.</p>
              <p>✔️ I can write Pattern A ("Let's go," said Max.) and Pattern B (Max said, "Let's go.").</p>
            </div>
            <p>Quiz time — go show those sentences who's boss! 💬</p>`,
          narration: "Talking marks mastered! You can now say: I can hug only the spoken words with quotation marks. I can use a comma to separate the speech from the speaker tag. I can write Pattern A, speech first, and Pattern B, speaker first. Quiz time. Go show those sentences who's boss!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Which sentence is punctuated correctly?",
            options: [
              "\"We won the game,\" said Leo.",
              "\"We won the game\", said Leo.",
              "We won the game, \"said Leo.\"",
              "\"We won the game\" said Leo.",
            ],
            answer: 0,
            hints: {
              verbal: "This is Pattern A — speech first. The comma should ride INSIDE the closing quotation mark.",
              example: "Correct Pattern A: \"Let's go,\" said Max. The comma is inside the quotes, hugging the speech.",
              narrow: [3],
            },
            explain: "In Pattern A the comma sits inside the closing quotation marks: \"We won the game,\" said Leo.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which sentence shows <b>Pattern B</b> — speaker first — done correctly?",
            options: [
              "Mia said, \"The ship is ready.\"",
              "Mia said \"The ship is ready.\"",
              "Mia said, \"the ship is ready.\"",
              "Mia said, The ship is ready.",
            ],
            answer: 0,
            hints: {
              verbal: "Pattern B needs three things: a comma after the tag, a capital letter starting the speech, and quotation marks hugging the speech.",
              example: "Correct Pattern B: Max said, \"Let's go.\" Comma after said, capital L, end mark inside the quotes.",
              narrow: [1],
            },
            explain: "Pattern B needs a comma after the speaker tag, a capital T on The, and quotation marks around the speech.",
          },
          {
            id: "q3", type: "mc",
            prompt: "What do quotation marks hug?",
            options: [
              "Only the words the speaker says out loud",
              "The whole sentence, tag and all",
              "Only the speaker's name",
              "Only the last word of the sentence",
            ],
            answer: 0,
            hints: {
              verbal: "Think about the radio message. Which words actually came out of Pip's mouth?",
              example: "In \"Blast off!\" shouted Pip. — only Blast off! gets the hug. The tag shouted Pip stays outside.",
              narrow: [1],
            },
            explain: "Quotation marks hug ONLY the spoken words. The speaker tag always stays outside.",
          },
          {
            id: "q4", type: "tf",
            prompt: "True or false: In the sentence <b>\"Let's go,\" said Max.</b> the comma belongs INSIDE the quotation marks.",
            answer: true,
            hints: {
              verbal: "This is Pattern A — speech first. Think about where the comma rides.",
              example: "\"We won the game,\" said Leo. — see how the comma sits before the closing quote mark?",
            },
            explain: "True! In Pattern A the comma rides inside the quotation marks, right after the last spoken word.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Find the mistake: <b>Jax said, \"the comet is here.\"</b>",
            options: [
              "The word 'the' needs a capital T",
              "The comma after 'said' should be erased",
              "The period should move outside the quotes",
              "The quotation marks should be erased",
            ],
            answer: 0,
            hints: {
              verbal: "In Pattern B, the speech starts fresh — like the beginning of its own little sentence.",
              example: "Max said, \"Let's go.\" — the L in Let's is a capital, even though it's in the middle of the sentence.",
              narrow: [2],
            },
            explain: "The first spoken word always gets a capital letter: Jax said, \"The comet is here.\"",
          },
          {
            id: "q6", type: "mc",
            prompt: "This sentence crash-landed: <b>We have a new student today she said</b> — which repair is correct?",
            options: [
              "\"We have a new student today,\" she said.",
              "\"We have a new student today\" she said.",
              "We have a new student today, \"she said.\"",
              "\"We have a new student today,\" She said.",
            ],
            answer: 0,
            hints: {
              verbal: "Hug only the spoken words, tuck a comma inside the closing quotes, and keep 'she' lowercase.",
              example: "Fixing 'It is snowing he said' gives: \"It is snowing,\" he said.",
              narrow: [1],
            },
            explain: "Hug the spoken words, put the comma inside the closing quotes, and end after the tag: \"We have a new student today,\" she said.",
          },
          {
            id: "q7", type: "mc",
            prompt: "In Pattern B — <b>Max said, \"Let's go.\"</b> — where does the period go?",
            options: [
              "Inside the quotation marks",
              "Outside the quotation marks",
              "Right after the word 'said'",
              "Nowhere — no period is needed",
            ],
            answer: 0,
            hints: {
              verbal: "The end mark stays with the speech, inside the hug.",
              example: "Mia said, \"The ship is ready.\" — the period sits before the closing quote mark.",
              narrow: [1],
            },
            explain: "The end mark — period, question mark, or exclamation point — goes inside the quotation marks with the speech.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Three of these are correct. Which sentence has a <b>mistake</b>?",
            options: [
              "\"Time for launch,\" said Cosmo.",
              "Cosmo said, \"Time for launch.\"",
              "\"Time for launch said,\" Cosmo.",
              "\"Time for launch!\" shouted Cosmo.",
            ],
            answer: 2,
            hints: {
              verbal: "Check each one: are the quotation marks hugging ONLY the spoken words, or did a tag word sneak inside the hug?",
              example: "The tag stays outside: \"Blast off!\" shouted Pip. — the word shouted is never inside the quotes.",
              narrow: [0],
            },
            explain: "The word 'said' snuck inside the quotation marks — but it's part of the tag, not the speech. Correct: \"Time for launch,\" said Cosmo.",
          },
        ],
      },
    },

    /* ============ M2 — The RACES Rocket (W.3.1b, RL.3.3) ============ */
    {
      id: "ela-r4-m2",
      title: "The RACES Rocket",
      icon: "🚀",
      standard: "W.3.1b, RL.3.3",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Meet the RACES Rocket",
          html: `
            <p>Cadet, when someone asks you a question about a story, don't just blurt an answer — launch the <b>RACES Rocket</b>! It has five stages, and every stage fires in order:</p>
            <div class="big-visual">🚀 R · A · C · E · S</div>
            <table>
              <tr><th>Stage</th><th>What you do</th></tr>
              <tr><td><b>R</b> — Restate</td><td>Turn the question into the start of your answer</td></tr>
              <tr><td><b>A</b> — Answer</td><td>Say what you think</td></tr>
              <tr><td><b>C</b> — Cite</td><td>Copy proof words from the story, in quotation marks</td></tr>
              <tr><td><b>E</b> — Explain</td><td>Tell how your proof shows your answer is right</td></tr>
              <tr><td><b>S</b> — Sum it up</td><td>Finish with one strong closing sentence</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> A rocket can't skip a stage — and neither can your paragraph!</div>`,
          narration: "Cadet, when someone asks you a question about a story, don't just blurt an answer. Launch the RACES Rocket! It has five stages, and every stage fires in order. R is Restate: turn the question into the start of your answer. A is Answer: say what you think. C is Cite: copy proof words from the story, in quotation marks. E is Explain: tell how your proof shows your answer is right. S is Sum it up: finish with one strong closing sentence. A rocket can't skip a stage, and neither can your paragraph!",
        },
        {
          id: "s2",
          type: "story",
          title: "Read: The Garden Rescue",
          html: `
            <div class="story">
              <p>On Saturday, Rosa's class met at the school garden. The summer sun had baked the dirt hard, and the bean plants drooped like tired flags.</p>
              <p>"Our garden is thirsty," said Mr. Lee. "The hose is broken, and the pond is all the way down the hill."</p>
              <p>Some kids groaned. Rosa grabbed a bucket. "Then we will carry the water," she said.</p>
              <p>Rosa marched down the hill and back up with a full bucket. Water sloshed on her shoes, but she did not stop. She carried water up the hill three times. Then she showed the other kids how to make a bucket line, passing water hand to hand.</p>
              <p>By lunchtime, every plant stood tall again. Mr. Lee clapped. "Rosa, you saved our garden," he said.</p>
              <p>Rosa just smiled and picked up her bucket. "Tomorrow I will come back," she said, "in case the plants get thirsty again."</p>
            </div>`,
          narration: "The Garden Rescue. On Saturday, Rosa's class met at the school garden. The summer sun had baked the dirt hard, and the bean plants drooped like tired flags. Our garden is thirsty, said Mr. Lee. The hose is broken, and the pond is all the way down the hill. Some kids groaned. Rosa grabbed a bucket. Then we will carry the water, she said. Rosa marched down the hill and back up with a full bucket. Water sloshed on her shoes, but she did not stop. She carried water up the hill three times. Then she showed the other kids how to make a bucket line, passing water hand to hand. By lunchtime, every plant stood tall again. Mr. Lee clapped. Rosa, you saved our garden, he said. Rosa just smiled and picked up her bucket. Tomorrow I will come back, she said, in case the plants get thirsty again.",
        },
        {
          id: "s3",
          title: "Launch Stages R, A, and C",
          html: `
            <p>Here's our question: <b>What kind of friend is Rosa? How do you know?</b></p>
            <p>Watch the first three stages fire!</p>
            <p><b>R — Restate:</b> <u>The question asks what kind of friend Rosa is.</u><br>(We turned the question into a sentence.)</p>
            <p><b>A — Answer:</b> <u>I think Rosa is a helpful friend.</u><br>(We said our opinion, loud and clear.)</p>
            <p><b>C — Cite:</b> <u>In the story it says, "She carried water up the hill three times."</u><br>(We copied proof words from the story and hugged them with quotation marks!)</p>
            <div class="callout"><b>Remember:</b> Cite means copy the story's exact words — and your talking marks from last mission do the hugging.</div>`,
          narration: "Here's our question. What kind of friend is Rosa? How do you know? Watch the first three stages fire! R, Restate: the question asks what kind of friend Rosa is. We turned the question into a sentence. A, Answer: I think Rosa is a helpful friend. We said our opinion, loud and clear. C, Cite: in the story it says, she carried water up the hill three times. We copied proof words from the story and hugged them with quotation marks! Cite means copy the story's exact words.",
        },
        {
          id: "s4",
          title: "Launch Stages E and S",
          html: `
            <p>Two stages left — the ones that make your answer SOAR!</p>
            <p><b>E — Explain:</b> <u>This evidence shows Rosa is helpful because she kept working hard so the garden would not die.</u><br>(We told HOW the proof backs up our answer.)</p>
            <p><b>S — Sum it up:</b> <u>That is why Rosa is a helpful friend.</u><br>(One strong sentence to land the rocket.)</p>
            <p>Now read the whole paragraph, all five stages together:</p>
            <div class="callout">The question asks what kind of friend Rosa is. I think Rosa is a helpful friend. In the story it says, "She carried water up the hill three times." This evidence shows Rosa is helpful because she kept working hard so the garden would not die. That is why Rosa is a helpful friend.</div>
            <p>Five sentences. Five stages. One perfect launch! 🚀</p>`,
          narration: "Two stages left. The ones that make your answer soar! E, Explain: this evidence shows Rosa is helpful because she kept working hard so the garden would not die. We told how the proof backs up our answer. S, Sum it up: that is why Rosa is a helpful friend. One strong sentence to land the rocket. Now read the whole paragraph, all five stages together. Five sentences. Five stages. One perfect launch!",
        },
        {
          id: "s5",
          type: "writing",
          title: "Your Turn to Launch!",
          html: `
            <p>Your turn at the controls, Cadet! Rosa wasn't just helpful — she also acted like a <b>leader</b>. Remember: she showed the other kids how to make a bucket line.</p>
            <p>Fire all five stages: Restate, Answer, Cite (with quotation marks!), Explain, Sum it up.</p>`,
          prompt: "How does Rosa lead the other kids in the story? Write a RACES paragraph using proof from The Garden Rescue.",
          checklist: [
            "R — I restated the question",
            "A — I answered with my opinion",
            "C — I cited proof words from the story inside quotation marks",
            "E — I explained how my proof shows my answer is right",
            "S — I summed it up with one closing sentence",
          ],
          narration: "Your turn at the controls, Cadet! Rosa wasn't just helpful. She also acted like a leader. Remember, she showed the other kids how to make a bucket line. How does Rosa lead the other kids in the story? Write a RACES paragraph using proof from The Garden Rescue. Fire all five stages: Restate, Answer, Cite with quotation marks, Explain, and Sum it up.",
        },
        {
          id: "s6",
          title: "Mission Recap",
          html: `
            <p>RACES Rocket certified! You can now say:</p>
            <div class="callout">
              <p>✔️ I know what R, A, C, E, and S each stand for.</p>
              <p>✔️ I can cite proof from a story using quotation marks.</p>
              <p>✔️ I can write a five-sentence RACES paragraph about a character.</p>
            </div>
            <p>Pass the quiz to earn your rocket wings — the Final Mission is next! 🏆</p>`,
          narration: "RACES Rocket certified! You can now say: I know what R, A, C, E, and S each stand for. I can cite proof from a story using quotation marks. I can write a five-sentence RACES paragraph about a character. Pass the quiz to earn your rocket wings. The Final Mission is next!",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "In the RACES Rocket, what does the <b>R</b> stand for?",
            options: [
              "Restate the question",
              "Reread the story",
              "Remember the characters",
              "Rush to the answer",
            ],
            answer: 0,
            hints: {
              verbal: "Stage R turns the question into the very first sentence of your paragraph.",
              example: "For the question 'What kind of friend is Rosa?' stage R writes: The question asks what kind of friend Rosa is.",
              narrow: [1],
            },
            explain: "R is Restate — you turn the question into the start of your answer.",
          },
          {
            id: "q2", type: "mc",
            prompt: "What does the <b>C</b> in RACES tell you to do?",
            options: [
              "Cite proof words from the story",
              "Copy the question word for word",
              "Check your spelling",
              "Count your sentences",
            ],
            answer: 0,
            hints: {
              verbal: "Stage C is where you grab the story's exact words as evidence and hug them with quotation marks.",
              example: "A cite sentence looks like: In the story it says, \"She carried water up the hill three times.\"",
              narrow: [1],
            },
            explain: "C is Cite — copy proof words straight from the story, inside quotation marks.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Which RACES stage is this sentence? <b>The question asks what kind of friend Rosa is.</b>",
            options: ["R — Restate", "A — Answer", "C — Cite", "E — Explain"],
            answer: 0,
            hints: {
              verbal: "This sentence doesn't give an opinion or proof — it just turns the question around into a statement.",
              example: "For 'Why is Max brave?' the restate is: The question asks why Max is brave.",
              narrow: [1],
            },
            explain: "It restates the question as a sentence — that's stage R.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Which RACES stage is this sentence? <b>In the story it says, \"She carried water up the hill three times.\"</b>",
            passage: "Water sloshed on her shoes, but she did not stop. She carried water up the hill three times.",
            options: ["C — Cite", "R — Restate", "A — Answer", "S — Sum it up"],
            answer: 0,
            hints: {
              verbal: "Look at the quotation marks — this sentence is borrowing the story's exact words as proof.",
              example: "Any sentence starting 'In the story it says...' with quoted words is the Cite stage.",
              narrow: [2],
            },
            explain: "It quotes the story's exact words as evidence — that's C, Cite.",
          },
          {
            id: "q5", type: "mc",
            prompt: "Which RACES stage is this sentence? <b>This shows Rosa is helpful because she kept working hard so the garden would not die.</b>",
            options: ["E — Explain", "C — Cite", "R — Restate", "S — Sum it up"],
            answer: 0,
            hints: {
              verbal: "The word 'because' is a big clue — this sentence tells HOW the proof backs up the answer.",
              example: "An explain sentence sounds like: This shows Max is brave because he climbed down even though he was scared.",
              narrow: [1],
            },
            explain: "It tells how the evidence proves the answer — that's E, Explain.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Which stage of the RACES Rocket fires <b>LAST</b>?",
            options: [
              "S — Sum it up",
              "R — Restate",
              "C — Cite",
              "A — Answer",
            ],
            answer: 0,
            hints: {
              verbal: "Say the letters in order: R, A, C, E... what comes at the end?",
              example: "The model paragraph ended with: That is why Rosa is a helpful friend. — one strong closing sentence.",
              narrow: [3],
            },
            explain: "S — Sum it up — is the final stage: one strong sentence that lands the rocket.",
          },
          {
            id: "q7", type: "tf",
            prompt: "True or false: In the <b>E</b> stage, you explain how your evidence proves your answer is right.",
            answer: true,
            hints: {
              verbal: "Think about what came right after the cite sentence in our Rosa paragraph.",
              example: "This shows Rosa is helpful BECAUSE she kept working hard — the E stage connects proof to answer.",
            },
            explain: "True! E is Explain — you connect your proof back to your answer, usually with the word 'because.'",
          },
          {
            id: "q8", type: "mc",
            prompt: "The question is: <b>What kind of friend is Rosa?</b> Which sentence is the <b>A — Answer</b> stage?",
            options: [
              "I think Rosa is a helpful friend.",
              "The question asks what kind of friend Rosa is.",
              "In the story it says, \"She carried water up the hill three times.\"",
              "That is why Rosa is a helpful friend.",
            ],
            answer: 0,
            hints: {
              verbal: "The Answer stage says your opinion for the first time — words like 'I think' are a clue.",
              example: "For 'Why is Max brave?' the answer stage is: I think Max is brave because of what he did on the cliff.",
              narrow: [1],
            },
            explain: "The Answer stage states your opinion: I think Rosa is a helpful friend. The others restate, cite, and sum up.",
          },
        ],
      },
    },

    /* ============ M3 — Final Mission: The Star Reader (RL.3.3, W.3.1, L.3.2c) ============ */
    {
      id: "ela-r4-m3",
      title: "Final Mission: The Star Reader",
      icon: "🏆",
      standard: "RL.3.3, W.3.1, L.3.2c",
      minutes: 20,
      screens: [
        {
          id: "s1",
          title: "Final Mission Briefing",
          html: `
            <p>Cadet — this is it. Your <b>FINAL READING MISSION</b>. 🏆</p>
            <p>Here's the plan:</p>
            <p>1. Read a brand-new story called <b>The Star Reader</b> — all by yourself, no help from me.</p>
            <p>2. Turn on your <b>trait radar</b>. The narrator, Nova, shows three traits: <b>curious</b>, <b>careful</b>, and <b>generous</b>. Hunt for the ACTIONS that prove each one.</p>
            <p>3. Pass the quiz, then launch one last RACES Rocket about Nova.</p>
            <div class="vocab"><b>trait</b> — a word that describes what a character is like on the inside, proven by what they do and say.</div>
            <p>Deep breath, Cadet. You are ready. Begin!</p>`,
          narration: "Cadet, this is it. Your final reading mission. Here's the plan. One: read a brand-new story called The Star Reader, all by yourself, no help from me. Two: turn on your trait radar. The narrator, Nova, shows three traits: curious, careful, and generous. Hunt for the actions that prove each one. Three: pass the quiz, then launch one last RACES Rocket about Nova. A trait is a word that describes what a character is like on the inside, proven by what they do and say. Deep breath, Cadet. You are ready. Begin!",
        },
        {
          id: "s2",
          type: "story",
          title: "The Star Reader — Part 1",
          html: `
            <div class="story">
              <p>My name is Nova, and everyone in my family calls me the Star Reader. On Friday, my class camped in the school yard for Star Night. Mr. Vega set up one big telescope in the grass.</p>
              <p>While the other kids roasted marshmallows, I wandered over to the supply table. A dusty wooden box sat underneath it.</p>
              <p>"What's in that old box?" I asked. I could not stop wondering about it.</p>
              <p>"Look and see," Mr. Vega said with a smile.</p>
              <p>Inside I found a paper star map, soft and brown with age. I lifted it slowly with both hands, like it was a baby bird. I did not want to rip even one corner.</p>
              <p>The map showed a tiny cluster of stars called the Silver Kite. A note on the edge said, "The Silver Kite hides near the old oak tree."</p>
            </div>`,
          narration: "The Star Reader, part one. My name is Nova, and everyone in my family calls me the Star Reader. On Friday, my class camped in the school yard for Star Night. Mr. Vega set up one big telescope in the grass. While the other kids roasted marshmallows, I wandered over to the supply table. A dusty wooden box sat underneath it. What's in that old box? I asked. I could not stop wondering about it. Look and see, Mr. Vega said with a smile. Inside I found a paper star map, soft and brown with age. I lifted it slowly with both hands, like it was a baby bird. I did not want to rip even one corner. The map showed a tiny cluster of stars called the Silver Kite. A note on the edge said, the Silver Kite hides near the old oak tree.",
        },
        {
          id: "s3",
          type: "story",
          title: "The Star Reader — Part 2",
          html: `
            <div class="story">
              <p>I checked the map twice. Then I checked the sky twice. The oak tree stood at the far end of the yard, and gray clouds were starting to roll in.</p>
              <p>"Mr. Vega," I said, "may we move the telescope before the clouds cover everything?"</p>
              <p>We rolled the telescope across the grass, one slow step at a time, so the lens would not shake loose. When I finally looked through it, the Silver Kite sparkled like spilled glitter. My heart jumped.</p>
              <p>Then I saw Ben sitting alone on his sleeping bag. He was new at our school, and he did not know anyone yet.</p>
              <p>"Ben, come see!" I called. "You can look first, as long as you want."</p>
              <p>Ben's eyes went wide at the eyepiece. "It really looks like a kite," he whispered.</p>
              <p>Soon the whole class lined up to take turns, and Ben told star jokes until everyone laughed. At the end of the night, Mr. Vega gave me the old map to keep. But on Monday, I hung it on our classroom wall, so every kid could be a star reader too.</p>
            </div>`,
          narration: "The Star Reader, part two. I checked the map twice. Then I checked the sky twice. The oak tree stood at the far end of the yard, and gray clouds were starting to roll in. Mr. Vega, I said, may we move the telescope before the clouds cover everything? We rolled the telescope across the grass, one slow step at a time, so the lens would not shake loose. When I finally looked through it, the Silver Kite sparkled like spilled glitter. My heart jumped. Then I saw Ben sitting alone on his sleeping bag. He was new at our school, and he did not know anyone yet. Ben, come see! I called. You can look first, as long as you want. Ben's eyes went wide at the eyepiece. It really looks like a kite, he whispered. Soon the whole class lined up to take turns, and Ben told star jokes until everyone laughed. At the end of the night, Mr. Vega gave me the old map to keep. But on Monday, I hung it on our classroom wall, so every kid could be a star reader too.",
        },
        {
          id: "s4",
          title: "Trait Radar Check",
          html: `
            <p>Great reading, Cadet! Before the quiz, let's check your trait radar. Look how Nova's traits <u>drove the story</u>:</p>
            <table>
              <tr><th>Trait</th><th>Action</th><th>What it caused</th></tr>
              <tr><td><b>Curious</b></td><td>Asked about the dusty box</td><td>She found the star map</td></tr>
              <tr><td><b>Careful</b></td><td>Lifted the map slowly; checked it twice; rolled the telescope one slow step at a time</td><td>The map stayed safe and the telescope reached the oak tree before the clouds</td></tr>
              <tr><td><b>Generous</b></td><td>Let Ben look first; hung the map on the classroom wall</td><td>Ben made friends, and every kid became a star reader</td></tr>
            </table>
            <div class="callout"><b>Remember:</b> A character's traits cause their actions, and their actions change how the story ends. That's the chain you'll write about!</div>`,
          narration: "Great reading, Cadet! Before the quiz, let's check your trait radar. Look how Nova's traits drove the story. Curious: she asked about the dusty box, and that's how she found the star map. Careful: she lifted the map slowly, checked it twice, and rolled the telescope one slow step at a time, so the map stayed safe and the telescope reached the oak tree before the clouds. Generous: she let Ben look first and hung the map on the classroom wall, so Ben made friends and every kid became a star reader. A character's traits cause their actions, and their actions change how the story ends. That's the chain you'll write about!",
        },
        {
          id: "s5",
          type: "writing",
          title: "Final Launch: Your Star Reader Paragraph",
          html: `
            <p>This is the moment, Cadet — your final launch! 🚀</p>
            <p>Nova showed three traits: <b>curious</b>, <b>careful</b>, and <b>generous</b>. Pick the ONE you believe mattered most to how the story ends, and prove it with the RACES Rocket.</p>
            <p>When you finish this paragraph, you will have completed every reading mission in the academy. I could not be prouder of you, Star Reader. ⭐</p>`,
          prompt: "Which ONE of Nova's traits — curious, careful, or generous — contributes MOST to how the story ends? Write an opinion paragraph using RACES.",
          checklist: [
            "I used all 5 RACES parts — Restate, Answer, Cite, Explain, Sum it up",
            "I picked just ONE trait — curious, careful, or generous",
            "I quoted proof words from The Star Reader",
            "I used quotation marks correctly around my quote",
            "I explained how the trait changed what happened in the story",
          ],
          narration: "This is the moment, Cadet. Your final launch! Nova showed three traits: curious, careful, and generous. Pick the one you believe mattered most to how the story ends, and prove it with the RACES Rocket. Which one of Nova's traits contributes most to how the story ends? Write an opinion paragraph using RACES. Use all five parts, pick just one trait, quote proof words from the story with correct quotation marks, and explain how the trait changed what happened. When you finish this paragraph, you will have completed every reading mission in the academy. I could not be prouder of you, Star Reader.",
        },
      ],
      quiz: {
        questions: [
          {
            id: "q1", type: "mc",
            prompt: "Where does Star Night happen?",
            passage: "On Friday, my class camped in the school yard for Star Night. Mr. Vega set up one big telescope in the grass.",
            options: [
              "In the school yard",
              "On a tall mountain",
              "At Nova's house",
              "Inside the classroom",
            ],
            answer: 0,
            hints: {
              verbal: "Reread the first lines — where did the class camp?",
              example: "To find a story's setting, look for place words near the beginning, like 'my class camped in the...'",
              narrow: [3],
            },
            explain: "The story says the class camped in the school yard for Star Night.",
          },
          {
            id: "q2", type: "mc",
            prompt: "Which sentence from the story shows that Nova is <b>curious</b>?",
            passage: "A dusty wooden box sat underneath it. \"What's in that old box?\" I asked. I could not stop wondering about it.",
            options: [
              "\"What's in that old box?\" I asked. I could not stop wondering about it.",
              "I lifted it slowly with both hands, like it was a baby bird.",
              "\"Ben, come see!\" I called.",
              "The oak tree stood at the far end of the yard.",
            ],
            answer: 0,
            hints: {
              verbal: "Curious means full of questions and wondering. Which sentence shows Nova asking and wondering?",
              example: "A curious character asks things like 'What's inside?' and can't stop thinking about a mystery.",
              narrow: [1],
            },
            explain: "Asking about the box and wondering nonstop shows curiosity. The other actions show careful and generous.",
          },
          {
            id: "q3", type: "mc",
            prompt: "Nova lifts the map <b>slowly with both hands, like it was a baby bird</b>. Which trait does this action show?",
            passage: "I lifted it slowly with both hands, like it was a baby bird. I did not want to rip even one corner.",
            options: ["Careful", "Curious", "Generous", "Brave"],
            answer: 0,
            hints: {
              verbal: "Think about WHY she moves slowly — she does not want to rip even one corner.",
              example: "A careful character protects fragile things: carrying eggs gently, double-checking work, moving slowly.",
              narrow: [1],
            },
            explain: "Moving slowly to protect the fragile map shows Nova is careful.",
          },
          {
            id: "q4", type: "mc",
            prompt: "Which action shows that Nova is <b>generous</b>?",
            passage: "\"Ben, come see!\" I called. \"You can look first, as long as you want.\"",
            options: [
              "She let Ben look through the telescope first",
              "She checked the map twice",
              "She asked what was in the dusty box",
              "She rolled the telescope one slow step at a time",
            ],
            answer: 0,
            hints: {
              verbal: "Generous means sharing what you have with others. Which action gives something away?",
              example: "Giving a friend the first turn — or the biggest slice — is a generous action.",
              narrow: [2],
            },
            explain: "Letting Ben look first — as long as he wants — is sharing, which shows Nova is generous.",
          },
          {
            id: "q5", type: "mc",
            prompt: "The story says the map showed a tiny <b>cluster</b> of stars. What does 'cluster' mean?",
            passage: "The map showed a tiny cluster of stars called the Silver Kite.",
            options: [
              "A close group",
              "A single bright star",
              "A kind of telescope",
              "A loud noise",
            ],
            answer: 0,
            hints: {
              verbal: "The Silver Kite is made of stars — more than one — sitting close together in a shape.",
              example: "A cluster of grapes is a bunch of grapes close together. A cluster of stars works the same way.",
              narrow: [1],
            },
            explain: "A cluster is a close group — the Silver Kite is a little group of stars that make a kite shape.",
          },
          {
            id: "q6", type: "mc",
            prompt: "Why did Nova ask Mr. Vega to <b>move the telescope</b>?",
            passage: "The oak tree stood at the far end of the yard, and gray clouds were starting to roll in. \"Mr. Vega,\" I said, \"may we move the telescope before the clouds cover everything?\"",
            options: [
              "Clouds were rolling in, and the Silver Kite hid near the far-away oak tree",
              "The telescope was broken",
              "Mr. Vega told her she had to move it",
              "She wanted to sit closer to the marshmallows",
            ],
            answer: 0,
            hints: {
              verbal: "Look for the cause: what was in the sky, and where did the map say the Silver Kite was hiding?",
              example: "A cause-effect question asks WHY. Find the sentence right before the action — it usually holds the cause.",
              narrow: [2],
            },
            explain: "The Silver Kite hid near the oak tree across the yard, and clouds were coming — so the telescope had to move fast.",
          },
          {
            id: "q7", type: "mc",
            prompt: "Mr. Vega let Nova KEEP the map. Why did she hang it on the classroom wall instead?",
            passage: "At the end of the night, Mr. Vega gave me the old map to keep. But on Monday, I hung it on our classroom wall, so every kid could be a star reader too.",
            options: [
              "She wanted every kid to be able to use it",
              "She was afraid it would rip at her house",
              "Mr. Vega told her she had to give it back",
              "She did not like the map anymore",
            ],
            answer: 0,
            hints: {
              verbal: "Read the last words of the story — Nova tells you her reason with the word 'so.'",
              example: "In 'I shared my kit so my team could build too,' the reason comes after the word 'so.'",
              narrow: [1],
            },
            explain: "Nova hung it up 'so every kid could be a star reader too' — one more generous choice that ends the story.",
          },
          {
            id: "q8", type: "mc",
            prompt: "Which version of this sentence from the story is punctuated correctly?",
            options: [
              "\"Ben, come see!\" I called.",
              "\"Ben, come see\"! I called.",
              "Ben, come see! \"I called.\"",
              "\"ben, come see!\" I called.",
            ],
            answer: 0,
            hints: {
              verbal: "Quotation marks hug ONLY the spoken words, the end mark stays inside the hug, and the speech starts with a capital letter.",
              example: "Correct Pattern A: \"Blast off!\" shouted Pip. — exclamation point inside, tag outside, capital B.",
              narrow: [1],
            },
            explain: "The exclamation point rides inside the quotation marks, the tag 'I called' stays outside, and Ben gets a capital B.",
          },
        ],
      },
    },
  ],
});
