/* Batch-generates narration MP3s for every audio slot using the ElevenLabs API.
   Your API key stays on your machine — pass it as an environment variable,
   never commit it or put it in js/config.js (that file ships to browsers).

   Usage (PowerShell):
     $env:ELEVENLABS_API_KEY = "sk_..."          # required
     $env:ELEVENLABS_VOICE_ID = "yourVoiceId"    # optional; defaults to "Rachel" (stock)
     $env:ELEVENLABS_MODEL = "eleven_flash_v2_5" # optional; flash = ~half-price credits
     $env:LIMIT = "5"                            # optional; generate only N files (test run!)
     $env:ONLY = "math-u1"                       # optional; only slots whose module id starts with this
     node scripts/generate-narration.mjs

   Usage (bash):
     ELEVENLABS_API_KEY=sk_... node scripts/generate-narration.mjs

   - Skips files that already exist → safe to re-run / resume anytime.
   - To use YOUR cloned voice: create it at elevenlabs.io (Voices → Add voice),
     copy its voice ID, and set ELEVENLABS_VOICE_ID.
   - Start with LIMIT=5 to hear the voice before spending credits on all 541. */

import { readFileSync, readdirSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) {
  console.error("Missing ELEVENLABS_API_KEY environment variable. See the header of this script for usage.");
  process.exit(1);
}
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM"; // "Rachel" stock voice
const MODEL = process.env.ELEVENLABS_MODEL || "eleven_flash_v2_5";
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;
const ONLY = process.env.ONLY || "";

/* ---- load content (same shim as narration-manifest.mjs) ---- */
globalThis.window = { COURSE_CONTENT: [] };
for (const f of readdirSync(join(root, "content")).filter((f) => f.endsWith(".js")).sort()) {
  new Function("window", readFileSync(join(root, "content", f), "utf8"))(globalThis.window);
}
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
      const text = [strip(q.passage), strip(q.prompt),
        ...(q.options ? q.options.map((o, i) => `${"ABCD"[i]}: ${strip(o)}`) : [])]
        .filter(Boolean).join(" ... ");
      slots.push({ moduleId: mod.id, fileId: "quiz-" + q.id, text });
    }
  }
}

/* ---- generate ---- */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let done = 0, skipped = 0, failed = 0, generated = 0, chars = 0;

async function tts(text) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_64`, {
      method: "POST",
      headers: { "xi-api-key": API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        model_id: MODEL,
        voice_settings: { stability: 0.55, similarity_boost: 0.75 },
      }),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 429) { // rate limited — back off and retry
      const wait = attempt * 5000;
      console.log(`   rate-limited, waiting ${wait / 1000}s...`);
      await sleep(wait);
      continue;
    }
    throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  throw new Error("rate-limited 4 times in a row — try again later");
}

console.log(`${slots.length} slots found${ONLY ? ` (filtered to ${ONLY}*)` : ""}. Voice: ${VOICE_ID} | Model: ${MODEL}${LIMIT !== Infinity ? ` | LIMIT: ${LIMIT}` : ""}\n`);

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
    await sleep(400); // be polite to the API
  } catch (err) {
    failed++;
    console.error(`✗ audio/${slot.moduleId}/${slot.fileId}.mp3 — ${err.message}`);
    if (failed >= 5) { console.error("\n5 failures — stopping. Fix the issue and re-run (existing files are skipped)."); break; }
  }
  done++;
}

console.log(`\nDone. Generated: ${generated} | Skipped (already existed): ${skipped} | Failed: ${failed} | Characters spent this run: ${chars.toLocaleString()}`);
if (generated + skipped < slots.length) console.log("Re-run the same command to continue where you left off.");
