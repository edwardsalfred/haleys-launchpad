/* ============================================================
   Content index — normalizes window.COURSE_CONTENT into fast
   lookup structures and defines track ordering / mastery gating.

   Gating model:
   - Two independent tracks ("math", "ela"), each strictly linear.
   - A module is UNLOCKED when the previous module in its track
     has a passing quiz attempt (score >= PASS_PCT). The first
     module of each track is always unlocked.
   ============================================================ */

window.Content = (function () {
  const units = [...window.COURSE_CONTENT].sort((a, b) =>
    a.subject === b.subject ? a.order - b.order : a.subject.localeCompare(b.subject)
  );

  const bySubject = { math: [], ela: [] };
  const moduleById = new Map();
  const unitById = new Map();
  const trackOrder = { math: [], ela: [] }; // ordered module ids per track

  for (const unit of units) {
    if (!bySubject[unit.subject]) bySubject[unit.subject] = [];
    bySubject[unit.subject].push(unit);
    unitById.set(unit.id, unit);
  }
  for (const subj of Object.keys(bySubject)) {
    bySubject[subj].sort((a, b) => a.order - b.order);
    for (const unit of bySubject[subj]) {
      for (const mod of unit.modules) {
        mod.unitId = unit.id;
        mod.subject = subj;
        moduleById.set(mod.id, mod);
        trackOrder[subj].push(mod.id);
      }
    }
  }

  function getUnits(subject) { return bySubject[subject] || []; }
  function getUnit(id) { return unitById.get(id); }
  function getModule(id) { return moduleById.get(id); }

  function prevModuleId(moduleId) {
    const mod = moduleById.get(moduleId);
    if (!mod) return null;
    const order = trackOrder[mod.subject];
    const i = order.indexOf(moduleId);
    return i > 0 ? order[i - 1] : null;
  }

  function nextModuleId(moduleId) {
    const mod = moduleById.get(moduleId);
    if (!mod) return null;
    const order = trackOrder[mod.subject];
    const i = order.indexOf(moduleId);
    return i >= 0 && i < order.length - 1 ? order[i + 1] : null;
  }

  /* progressMap: { [moduleId]: {passed, bestScore, stars} } */
  function isUnlocked(moduleId, progressMap) {
    const prev = prevModuleId(moduleId);
    if (prev === null) return true;
    return !!(progressMap[prev] && progressMap[prev].passed);
  }

  function isUnitUnlocked(unitId, progressMap) {
    const unit = unitById.get(unitId);
    if (!unit) return false;
    return isUnlocked(unit.modules[0].id, progressMap);
  }

  /* First not-yet-passed unlocked module in a track (the "next mission"). */
  function nextMission(subject, progressMap) {
    for (const id of trackOrder[subject]) {
      const p = progressMap[id];
      if (!p || !p.passed) return isUnlocked(id, progressMap) ? id : null;
    }
    return null; // track complete
  }

  function trackStats(subject, progressMap) {
    const ids = trackOrder[subject];
    const done = ids.filter((id) => progressMap[id] && progressMap[id].passed).length;
    return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
  }

  function totalModules() { return moduleById.size; }

  return { getUnits, getUnit, getModule, prevModuleId, nextModuleId, isUnlocked, isUnitUnlocked, nextMission, trackStats, trackOrder, totalModules };
})();
