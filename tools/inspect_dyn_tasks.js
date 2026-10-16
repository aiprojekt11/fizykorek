const fs = require('fs');
const vm = require('vm');

const coursesPath = 'js/data-courses.js';
const content = fs.readFileSync(coursesPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
const dynSection = courses['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
const subMatura = dynSection.subchapters.find(s => s.id === 'sub-dynamika-matura');

console.log('Number of tasks in sub-dynamika-matura:', subMatura.tasks.length);
subMatura.tasks.forEach((t, i) => {
    console.log(`\n=================== TASK ${i+1}: ${t.id} (${t.title}) ===================`);
    console.log(t.problem);
});
