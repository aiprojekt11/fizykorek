const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(content, context);

let courses = context.window.FIZYKOREK_COURSES;
let sections = courses['matura-fizyka'].sections;

let kinSub = sections.find(s => s.id === 'm-kinematyka').subchapters.find(sub => sub.id === 'sub-matura-cke');
let tasks = kinSub.tasks;

const moveMap = {
    'matura-cke-2023-zad-1': 'm-praca',
    'matura-cke-2018-zad-1': 'm-dynamika',
    'matura-cke-2025-czerwiec-zad-1': 'm-dynamika',
    'matura-cke-2021-czerwiec-zad-1': 'm-bryla',
    'matura-cke-2019-czerwiec-zad-1': 'm-dynamika',
    'matura-cke-informator-2023-zad-2': 'm-dynamika'
};

Object.keys(moveMap).forEach(taskId => {
    let tIndex = tasks.findIndex(t => t.id === taskId);
    if (tIndex > -1) {
        let task = tasks.splice(tIndex, 1)[0];
        let targetSecId = moveMap[taskId];
        let targetSec = sections.find(s => s.id === targetSecId);
        
        let subCkeId = 'sub-matura-cke-' + targetSecId.split('-')[1];
        let subCke = targetSec.subchapters.find(sub => sub.id === subCkeId);
        
        if (!subCke) {
            subCke = {
                id: subCkeId,
                title: "Matura CKE - " + targetSec.title.split(':')[1].trim(),
                icon: "🎓",
                desc: "Zadania maturalne CKE z tego działu.",
                number: targetSec.subchapters.length + 1,
                shortTitle: "Matura CKE",
                formulaCheat: "",
                tasks: []
            };
            targetSec.subchapters.push(subCke);
        }
        subCke.tasks.push(task);
    }
});

// Update data-courses.js
// Read original file as text, we don't want to lose the header comment this time.
// Since we used JSON stringify last time, the header is ALREADY LOST!
// So we can just stringify again.
fs.writeFileSync('js/data-courses.js', 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n');
console.log('Moved tasks successfully!');
