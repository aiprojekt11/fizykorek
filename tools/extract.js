const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(content, context);

const courses = context.window.FIZYKOREK_COURSES;
const matura = courses['matura-fizyka'];
const kin = matura.sections.find(s => s.id === 'm-kinematyka');
const subCke = kin.subchapters.find(s => s.id === 'sub-matura-cke');

fs.writeFileSync('tools/kinematyka_cke.json', JSON.stringify(subCke.tasks, null, 2));
console.log('Saved ' + subCke.tasks.length + ' tasks to tools/kinematyka_cke.json');
