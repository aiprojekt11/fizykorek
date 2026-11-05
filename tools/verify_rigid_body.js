const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js', 'data-courses.js'), 'utf8'), sandbox);
const course = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'];
const section = course.sections.find((item) => item.id === 'm-bryla');
const introTopics = section.subchapters.slice(0, 4);
const maturaSubchapter = section.subchapters.find((item) => item.id === 'sub-bryla-matura');
const tasks = maturaSubchapter.tasks;
const expected = [
  'matura-cke-bryla-2026-czerwiec-zad-4',
  'matura-cke-bryla-2026-maj-zad-3',
  'matura-cke-bryla-2026-styczen-zad-3',
  'matura-cke-bryla-2025-czerwiec-zad-3',
  'matura-cke-bryla-2025-maj-zad-2',
  'matura-cke-bryla-2024-grudzien-zad-3',
  'matura-cke-bryla-2024-czerwiec-zad-2',
  'matura-cke-bryla-2024-maj-zad-2',
  'matura-cke-bryla-2023-czerwiec-zad-3',
  'matura-cke-bryla-2023-maj-zad-3',
  'matura-cke-bryla-2023-pokazowy-zad-2',
  'matura-cke-bryla-informator-2025-zad-4',
  'matura-cke-bryla-informator-2023-zad-4'
];

const failures = [];
if (section.isComingSoon) failures.push('Dział nadal jest oznaczony jako w przygotowaniu.');
if (introTopics.length !== 4 || introTopics.some((topic, index) => topic.number !== index + 1 || topic.tasks.length !== 0 || !topic.theory)) failures.push('Brak kompletnych czterech podtematów wprowadzających.');
if (maturaSubchapter.number !== 5) failures.push('Podrozdział maturalny nie ma numeru 5.');
if (tasks.length !== expected.length) failures.push(`Oczekiwano ${expected.length} zadań, znaleziono ${tasks.length}.`);
if (tasks.map((task) => task.id).join('|') !== expected.join('|')) failures.push('Nieprawidłowa kolejność zadań.');

for (const task of tasks) {
  if (!task.solution || !task.solution.answer || !task.solution.steps?.length) failures.push(`${task.id}: brak rozwiązania lub odpowiedzi.`);
  const content = `${task.problem}\n${JSON.stringify(task.solution)}`;
  const invalidControls = [...content].filter((char) => char.charCodeAt(0) < 32 && !['\n', '\r', '\t'].includes(char));
  if (invalidControls.length) failures.push(`${task.id}: niedozwolone znaki sterujące.`);
  const images = [...content.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
  for (const image of images) {
    if (!fs.existsSync(path.join(root, image))) failures.push(`${task.id}: brak obrazu ${image}.`);
  }
  if (task.link?.startsWith('data/') && !fs.existsSync(path.join(root, task.link))) failures.push(`${task.id}: brak arkusza ${task.link}.`);
  if (task.solutionSource?.localFile && !fs.existsSync(path.join(root, task.solutionSource.localFile))) failures.push(`${task.id}: brak klucza ${task.solutionSource.localFile}.`);
}

const ids = tasks.map((task) => task.id);
if (new Set(ids).size !== ids.length) failures.push('Powtórzone identyfikatory zadań.');
const originals = tasks.map((task) => task.originalTaskId);
if (new Set(originals).size !== originals.length) failures.push('Powtórzone identyfikatory źródłowe.');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`OK: ${tasks.length} zadań, właściwa kolejność, komplet rozwiązań, odpowiedzi, źródeł i obrazów.`);
