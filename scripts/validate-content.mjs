/* Structural validator for content/*.js — run: node scripts/validate-content.mjs */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
globalThis.window = { COURSE_CONTENT: [] };
const files = readdirSync(join(root, "content")).filter((f) => f.endsWith(".js")).sort();
for (const f of files) {
  new Function("window", readFileSync(join(root, "content", f), "utf8"))(globalThis.window);
}

const units = globalThis.window.COURSE_CONTENT;
const errors = [];
const warn = [];
const seenUnitIds = new Set(), seenModIds = new Set();
let modCount = 0, qCount = 0, screenCount = 0, writingCount = 0;

for (const u of units) {
  if (!u.id || seenUnitIds.has(u.id)) errors.push(`duplicate/missing unit id: ${u.id}`);
  seenUnitIds.add(u.id);
  for (const k of ["subject", "order", "title", "planet"]) if (u[k] == null) errors.push(`${u.id}: missing ${k}`);
  if (!["math", "ela"].includes(u.subject)) errors.push(`${u.id}: bad subject ${u.subject}`);

  for (const m of u.modules || []) {
    modCount++;
    if (!m.id || seenModIds.has(m.id)) errors.push(`duplicate/missing module id: ${m.id}`);
    seenModIds.add(m.id);
    if (!m.id?.startsWith(u.id + "-m")) errors.push(`${m.id}: id doesn't match unit ${u.id}`);
    if (!m.standard) errors.push(`${m.id}: missing standard`);
    if (!m.screens?.length || m.screens.length < 3) errors.push(`${m.id}: too few screens (${m.screens?.length})`);
    if (m.screens?.length > 7) warn.push(`${m.id}: many screens (${m.screens.length})`);

    const sids = new Set();
    for (const s of m.screens || []) {
      screenCount++;
      if (!s.id || sids.has(s.id)) errors.push(`${m.id}: duplicate/missing screen id ${s.id}`);
      sids.add(s.id);
      if (!s.narration) errors.push(`${m.id}/${s.id}: missing narration`);
      if (s.type === "writing") { writingCount++; if (!s.prompt) errors.push(`${m.id}/${s.id}: writing screen missing prompt`); }
      else if (!s.html) errors.push(`${m.id}/${s.id}: missing html`);
    }

    const qs = m.quiz?.questions || [];
    if (qs.length !== 8) errors.push(`${m.id}: quiz has ${qs.length} questions (want 8)`);
    const qids = new Set();
    for (const q of qs) {
      qCount++;
      if (!q.id || qids.has(q.id)) errors.push(`${m.id}: duplicate/missing question id ${q.id}`);
      qids.add(q.id);
      if (!q.explain) errors.push(`${m.id}/${q.id}: missing explain`);
      if (!q.hints?.verbal || !q.hints?.example) errors.push(`${m.id}/${q.id}: missing verbal/example hint`);
      if (q.type === "mc") {
        if (!Array.isArray(q.options) || q.options.length < 3) errors.push(`${m.id}/${q.id}: mc needs 3-4 options`);
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options?.length || 0))
          errors.push(`${m.id}/${q.id}: bad answer index ${q.answer}`);
        if (!Array.isArray(q.hints?.narrow)) errors.push(`${m.id}/${q.id}: mc missing hints.narrow`);
        else if (q.hints.narrow.includes(q.answer)) errors.push(`${m.id}/${q.id}: narrow contains the CORRECT index`);
        else if (q.hints.narrow.some((i) => i < 0 || i >= q.options.length)) errors.push(`${m.id}/${q.id}: narrow index out of range`);
      } else if (q.type === "tf") {
        if (typeof q.answer !== "boolean") errors.push(`${m.id}/${q.id}: tf answer must be boolean`);
      } else if (q.type === "numeric") {
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 999999) errors.push(`${m.id}/${q.id}: bad numeric answer ${q.answer}`);
      } else errors.push(`${m.id}/${q.id}: unknown type ${q.type}`);
    }
  }
}

// track ordering sanity
for (const subj of ["math", "ela"]) {
  const orders = units.filter((u) => u.subject === subj).map((u) => u.order).sort((a, b) => a - b);
  orders.forEach((o, i) => { if (o !== i + 1) errors.push(`${subj}: unit orders not 1..N (${orders})`); });
}

console.log(`Units: ${units.length} | Modules: ${modCount} | Screens: ${screenCount} (writing: ${writingCount}) | Questions: ${qCount}`);
if (warn.length) console.log("WARNINGS:\n" + warn.map((e) => "  ~ " + e).join("\n"));
if (errors.length) { console.log("ERRORS:\n" + errors.map((e) => "  ✗ " + e).join("\n")); process.exit(1); }
console.log("All content valid ✓");
