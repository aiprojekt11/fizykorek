const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const { tasks: energyAdditions } = require('./energy_additions');
const energySolutions = require('./energy_solutions');
const energyManifest = require('./energy-audit/manifest.json');

const dataPath = 'js/data-courses.js';
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, 'utf8'), sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;
const course = courses['matura-fizyka'];
const section = course.sections.find((item) => item.id === 'm-praca');
const matura = section.subchapters.find((item) => item.id === 'sub-praca-matura');
assert(matura, 'Nie znaleziono podrozdziału sub-praca-matura.');

const missingOriginalIds = [
  'matura-cke-2026-czerwiec-zad-4',
  'matura-cke-2026-maj-zad-1',
  'matura-cke-2026-maj-zad-3',
  'matura-cke-2025-czerwiec-zad-3',
  'matura-cke-2025-maj-zad-2',
  'matura-cke-2024-czerwiec-zad-1',
  'matura-cke-2024-maj-zad-2',
  'matura-cke-2024-maj-zad-3',
  'matura-cke-2023-czerwiec-zad-1',
  'matura-cke-2023-maj-zad-3'
];

const tasksOutsideWork = course.sections
  .filter((item) => item.id !== 'm-praca')
  .flatMap((item) => (item.subchapters || []).flatMap((subchapter) => subchapter.tasks || []));

function cloneForWork(task) {
  const copy = structuredClone(task);
  const originalTaskId = copy.originalTaskId || copy.id;
  copy.originalTaskId = originalTaskId;
  copy.id = originalTaskId.replace('matura-cke-', 'matura-cke-praca-');
  const manifestEntry = energyManifest.find((item) => item.id === copy.id);
  assert(manifestEntry, `${copy.id}: brak wpisu w manifeście audytu.`);
  copy.source = manifestEntry.source;
  copy.link = manifestEntry.link;
  copy.sourcePages = structuredClone(manifestEntry.pages);
  copy.solutionSource = structuredClone(manifestEntry.solutionSource);
  for (const key of ['intuition', 'givens', 'numerical', 'answer', 'trap', 'source']) {
    if (typeof copy.solution?.[key] === 'string') {
      copy.solution[key] = copy.solution[key].replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    }
  }
  for (const step of copy.solution?.steps || []) {
    if (typeof step.content === 'string') {
      step.content = step.content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    }
  }
  copy.formula = '2023';
  copy.tags = [...new Set(['Matura CKE', 'Praca, moc i energia', ...(copy.tags || [])])];
  assert(copy.solution?.answer, `${copy.id}: brak rozwiązania lub odpowiedzi.`);
  assert(copy.sourcePages?.length, `${copy.id}: brak stron źródłowych.`);
  return copy;
}

function buildMay2026Task1() {
  const source = energyAdditions.find((item) => item.originalTaskId === 'matura-cke-2026-maj-zad-1');
  assert(source, 'Brak treści zadania 2026 maj zad. 1.');
  const task = structuredClone(source);
  task.solution = structuredClone(energySolutions['2026-maj-zad-1']);
  task.solutionSource = {
    publisher: 'Centralna Komisja Egzaminacyjna',
    url: 'https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf',
    localFile: 'data/arkusze_cke/2026/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf',
    pages: [3, 10]
  };
  task.solution.source = 'Opracowano na podstawie zasad oceniania CKE. <a href="https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf#page=3" target="_blank" rel="noopener noreferrer">Klucz odpowiedzi CKE, s. 3–10</a>.';
  return cloneForWork(task);
}

const additions = missingOriginalIds.map((originalTaskId) => {
  if (originalTaskId === 'matura-cke-2026-maj-zad-1') return buildMay2026Task1();
  const source = tasksOutsideWork.find((item) => (item.originalTaskId || item.id) === originalTaskId);
  assert(source, `Nie znaleziono zadania ${originalTaskId} w pozostałych działach.`);
  return cloneForWork(source);
});

// Informator 2025 powtarza dwa zadania z informatora 2023. Zachowujemy jedno
// wystąpienie każdego zadania, ale rejestrujemy oba źródła.
const duplicateInformatorIds = new Set([
  'matura-cke-praca-informator-2023-zad-2',
  'matura-cke-praca-informator-2023-zad-3'
]);
const missingOriginalIdSet = new Set(missingOriginalIds);
const base = matura.tasks.filter((task) =>
  !duplicateInformatorIds.has(task.id) &&
  !missingOriginalIdSet.has(task.originalTaskId || task.id)
);
for (const number of [2, 3]) {
  const kept = base.find((task) => task.id === `matura-cke-praca-informator-2025-zad-${number}`);
  assert(kept, `Brak zadania informator 2025 nr ${number}.`);
  kept.title = `Informator CKE 2025/2023 zad. ${number} nowa formuła`;
  kept.year = 'Informatory 2025 i 2023';
  kept.source = 'Informatory CKE 2025 i 2023 – zadanie wspólne';
  kept.alsoAppearsIn = [{
    source: 'Informator maturalny CKE 2023 – Fizyka',
    localFile: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf',
    pages: number === 2 ? [15, 19] : [20, 23]
  }];
}

const byOriginalId = new Map();
for (const task of [...base, ...additions]) {
  const key = task.originalTaskId || task.id;
  if (!byOriginalId.has(key)) byOriginalId.set(key, task);
}
const tasks = [...byOriginalId.values()];

function taskNumber(task) {
  return Number(task.id.match(/zad-(\d+)$/)?.[1] || 0);
}
tasks.sort((a, b) => {
  const ai = a.year.startsWith('Informator');
  const bi = b.year.startsWith('Informator');
  if (ai !== bi) return ai ? 1 : -1;
  return b.number - a.number || taskNumber(a) - taskNumber(b);
});

assert.equal(tasks.length, 17, 'Po scaleniu powtórzeń powinno pozostać 17 unikalnych zestawów.');
assert.equal(new Set(tasks.map((task) => task.id)).size, tasks.length, 'Powtórzone identyfikatory zadań.');
assert.equal(new Set(tasks.map((task) => task.originalTaskId)).size, tasks.length, 'Powtórzone zadania źródłowe.');
for (const task of tasks) {
  assert(task.formula === '2023', `${task.id}: nieprawidłowa formuła.`);
  assert(task.solution?.answer, `${task.id}: brak odpowiedzi.`);
  assert(task.solutionSource?.localFile && fs.existsSync(task.solutionSource.localFile), `${task.id}: brak lokalnego klucza.`);
  for (const match of (task.problem + JSON.stringify(task.solution)).matchAll(/src=\\?"([^"\\]+)\\?"/g)) {
    assert(fs.existsSync(match[1]), `${task.id}: brak obrazu ${match[1]}.`);
  }
}

matura.tasks = tasks;
matura.number = 5;
matura.title = '5. Zadania maturalne CKE';
matura.desc = 'Wszystkie unikalne zadania Formuły 2023 z arkuszy 2023–2026 oraz informatorów 2025 i 2023. Powtórzone zadania z obu informatorów są pokazane tylko raz i mają zapisane oba źródła.';
section.badge = '17 unikalnych zadań CKE';
section.isComingSoon = false;

fs.writeFileSync(dataPath, `window.FIZYKOREK_COURSES = ${JSON.stringify(courses, null, 2)};\n`);
console.log('Zapisano 17 unikalnych zestawów: 15 z arkuszy i 2 wspólne zadania informatorowe.');
