const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(content, context);

let updatedTasks = JSON.parse(fs.readFileSync('tools/kinematyka_cke_updated.json', 'utf8'));

let matura = context.window.FIZYKOREK_COURSES['matura-fizyka'];
let kin = matura.sections.find(s => s.id === 'm-kinematyka');
let subCke = kin.subchapters.find(s => s.id === 'sub-matura-cke');

subCke.tasks = updatedTasks;

fs.writeFileSync('js/data-courses.js', 'window.FIZYKOREK_COURSES = ' + JSON.stringify(context.window.FIZYKOREK_COURSES, null, 2) + ';\n');
console.log('Successfully updated js/data-courses.js');
