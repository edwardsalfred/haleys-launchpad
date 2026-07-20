/* Batch-generates narration MP3s for every audio slot using the Fish Audio API.
   Your API key stays on your machine — pass it as an environment variable,
   never commit it or put it in js/config.js (that file ships to browsers).

   Usage (PowerShell):
     $env:FISH_API_KEY = "your_fish_api_token"        # required
     $env:FISH_VOICE_ID = "your_reference_model_id"   # optional; leave empty for default voice
     $env:FISH_MODEL = "s1-mini"                      # optional; s1-mini (cheap) | s1 (best) | speech-1.6
     $env:LIMIT = "5"                                 # optional; generate only N files (test run!)
     $env:ONLY = "math-u1"                            # optional; only slots whose module id starts with this
     node scripts/generate-narration-fish.mjs

   - Skips files that already exist → safe to re-run / resume anytime.
   - To use YOUR cloned voice: create it at fish.audio (Playground → Voice Cloning),
     copy its model / reference ID, and set FISH_VOICE_ID.
   - Start with LIMIT=5 to hear the voice before spending credits on all slots. */

import { readFileSync, readdirSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const API_KEY = process.env.FISH_API_KEY;
if (!API_KEY) {
  console.error("Missing FISH_API_KEY environment variable. See the header of this script for usage.");
  process.exit(1);
}
const VOICE_ID = process.env.FISH_VOICE_ID || "";
const MODEL = process.env.FISH_MODEL || "s1-mini";
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;
const ONLY = process.env.ONLY || "";

/* ---- load content (same shim as narration-manifest.mjs) ---- */
globalThis.window = { COURSE_CONTENT: [] };
for (const f of readdirSync(join(root, "content")).filter((f) => f.endsWith(".js")).sort()) {
  new Function("window", readFileSync(join(root, "content", f), "utf8"))(globalThis.window);
}
// Same deterministic MC option order the app uses at render time, so the audio
// names options in the exact order they appear on screen.
new Function("window", readFileSync(join(root, "js", "quiz-order.js"), "utf8"))(globalThis.window);
const orderQuestion = globalThis.window.QuizOrder.order;
const strip = (h) => String(h || "")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/×/g, " times ")
  .replace(/÷/g, " divided by ")
  .replace(/−/g, " minus ")
  .replace(/=/g, " equals ")
  .replace(/\s+/g, " ")
  .trim();

/* ---- collect slots ---- */
const slots = [];
for (const unit of globalThis.window.COURSE_CONTENT) {
  for (const mod of unit.modules) {
    if (ONLY && !mod.id.startsWith(ONLY)) continue;
    for (const s of mod.screens) {
      slots.push({ moduleId: mod.id, fileId: s.id, text: s.narration || strip(s.html) });
    }
    for (const q of mod.quiz?.questions || []) {
      const oq = orderQuestion(q, mod.id);
      const text = [strip(oq.passage), strip(oq.prompt),
        ...(oq.options ? oq.options.map((o, i) => `${"ABCD"[i]}: ${strip(o)}`) : [])]
        .filter(Boolean).join(" ... ");
      slots.push({ moduleId: mod.id, fileId: "quiz-" + q.id, text });
    }
  }
}

/* ---- generate ---- */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let done = 0, skipped = 0, failed = 0, generated = 0, chars = 0;

async function tts(text) {
  const body = {
    text,
    format: "mp3",
    mp3_bitrate: 128,
    chunk_length: 200,
    normalize: true,
    latency: "normal",
  };
  if (VOICE_ID) body.reference_id = VOICE_ID;

  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch("https://api.fish.audio/v1/tts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "model": MODEL,
      },
      body: JSON.stringify(body),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 429) {
      const wait = attempt * 5000;
      console.log(`   rate-limited, waiting ${wait / 1000}s...`);
      await sleep(wait);
      continue;
    }
    throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  throw new Error("rate-limited 4 times in a row — try again later");
}

console.log(`${slots.length} slots found${ONLY ? ` (filtered to ${ONLY}*)` : ""}. Voice: ${VOICE_ID || "(default)"} | Model: ${MODEL}${LIMIT !== Infinity ? ` | LIMIT: ${LIMIT}` : ""}\n`);

for (const slot of slots) {
  const dir = join(root, "audio", slot.moduleId);
  const file = join(dir, slot.fileId + ".mp3");
  if (existsSync(file)) { skipped++; continue; }
  if (generated >= LIMIT) break;
  mkdirSync(dir, { recursive: true });
  try {
    const audio = await tts(slot.text);
    writeFileSync(file, audio);
    generated++; chars += slot.text.length;
    console.log(`✓ audio/${slot.moduleId}/${slot.fileId}.mp3 (${slot.text.length} chars) [${generated + skipped}/${slots.length}]`);
    await sleep(300);
  } catch (err) {
    failed++;
    console.error(`✗ audio/${slot.moduleId}/${slot.fileId}.mp3 — ${err.message}`);
    if (failed >= 5) { console.error("\n5 failures — stopping. Fix the issue and re-run (existing files are skipped)."); break; }
  }
  done++;
}

console.log(`\nDone. Generated: ${generated} | Skipped (already existed): ${skipped} | Failed: ${failed} | Characters spent this run: ${chars.toLocaleString()}`);
if (generated + skipped < slots.length) console.log("Re-run the same command to continue where you left off.");
