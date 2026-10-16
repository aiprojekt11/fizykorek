const fs = require('fs');

const coursesPath = 'js/data-courses.js';
let content = fs.readFileSync(coursesPath, 'utf8');

// Use a regex to extract the JSON part of data-courses.js or we can just run it in a VM
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
const dynSection = courses['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
const subMatura = dynSection.subchapters.find(s => s.id === 'sub-dynamika-matura');

const oldTasks = subMatura.tasks;

// We want to KEEP only the 5 tasks that are NOT collisions
const validIds = [
    'matura-cke-2026-styczen-zad-1',
    'matura-cke-2025-czerwiec-zad-2',
    'matura-cke-2024-czerwiec-zad-1',
    'matura-cke-2024-maj-zad-1',
    'matura-cke-informator-2023-zad-1'
];

const newTasks = oldTasks.filter(t => validIds.includes(t.id));

console.log(`Original tasks: ${oldTasks.length}`);
console.log(`New tasks: ${newTasks.length}`);

subMatura.tasks = newTasks;

// To write it back properly, we need to serialize it.
// The easiest way is to re-serialize the whole FIZYKOREK_COURSES object.
const updatedContent = `window.FIZYKOREK_COURSES = ${JSON.stringify(courses, null, 2)};`;

fs.writeFileSync(coursesPath, updatedContent, 'utf8');
console.log('Updated data-courses.js');
