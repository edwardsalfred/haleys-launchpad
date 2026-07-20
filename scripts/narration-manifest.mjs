/* Generates docs/narration-scripts.md — every audio slot in the course with
   its filename and the exact script to read, for a recording session.

   Usage:  node scripts/narration-manifest.mjs                                */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Shim the browser globals the content files expect, then load them.
globalThis.window = { COURSE_CONTENT: [] };
const contentDir = join(root, "content");
for (const f of readdirSync(contentDir).filter((f) => f.endsWith(".js")).sort()) {
  // content files are side-effect scripts: evaluate them
  new Function("window", readFileSync(join(contentDir, f), "utf8"))(globalThis.window);
}
// Same deterministic MC option order the app + audio use, so recording scripts
// list options in the order they appear on screen and in the narration.
new Function("window", readFileSync(join(root, "js", "quiz-order.js"), "utf8"))(globalThis.window);
const orderQuestion = globalThis.window.QuizOrder.order;

const units = globalThis.window.COURSE_CONTENT
  .sort((a, b) => (a.subject === b.subject ? a.order - b.order : a.subject.localeCompare(b.subject)));

const strip = (html) => String(html || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

let out = `# Narration Recording Scripts\n\n`;
out += `Generated from content/*.js — ${new Date().toISOString().slice(0, 10)}\n\n`;
out += `Record each script below and save it as the listed MP3 path (44.1 kHz, mono is fine).\n`;
out += `Missing files are OK — the app shows "No audio yet" until they exist.\n\n`;

let slots = 0;
for (const unit of units) {
  out += `\n---\n\n## ${unit.subject.toUpperCase()} · ${unit.title} (\`${unit.id}\`)\n`;
  for (const mod of unit.modules) {
    out += `\n### ${mod.title} (\`${mod.id}\`)\n\n`;
    for (const s of mod.screens) {
      const script = s.narration || strip(s.html);
      out += `**\`audio/${mod.id}/${s.id}.mp3\`** — ${s.title || "screen"}\n\n> ${script}\n\n`;
      slots++;
    }
    for (const q of mod.quiz?.questions || []) {
      const oq = orderQuestion(q, mod.id);
      const script = [strip(oq.passage), strip(oq.prompt),
        ...(oq.options ? oq.options.map((o, i) => `${"ABCD"[i]}: ${strip(o)}`) : [])]
        .filter(Boolean).join(" ... ");
      out += `**\`audio/${mod.id}/quiz-${q.id}.mp3\`** — quiz question ${q.id}\n\n> ${script}\n\n`;
      slots++;
    }
  }
}

out = out.replace("# Narration Recording Scripts",
  `# Narration Recording Scripts\n\n**${slots} audio slots total.**`);

mkdirSync(join(root, "docs"), { recursive: true });
writeFileSync(join(root, "docs", "narration-scripts.md"), out);
console.log(`Wrote docs/narration-scripts.md — ${slots} audio slots.`);
