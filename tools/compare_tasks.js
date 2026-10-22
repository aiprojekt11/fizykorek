const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

let sub1, sub2, sub3, sub4;
course.sections.forEach(sec => {
  (sec.subchapters || []).forEach(s => {
    if (s.id === 'sub-praca-moc') sub1 = s;
    if (s.id === 'sub-energie-zachowanie') sub2 = s;
    if (s.id === 'sub-zderzenia-niesprezyste') sub3 = s;
    if (s.id === 'sub-zderzenia-sprezyste') sub4 = s;
  });
});

console.log('Found:', !!sub1, !!sub2, !!sub3, !!sub4);
console.log('--- SUB 1 TASK 1 keys ---', Object.keys(sub1.tasks[0]));
console.log('--- SUB 1 TASK 1 solution keys ---', Object.keys(sub1.tasks[0].solution || {}));
console.log('--- SUB 1 TASK 1 solution ---');
console.log(JSON.stringify(sub1.tasks[0].solution, null, 2));

console.log('--- SUB 2 TASK 1 solution ---');
console.log(JSON.stringify(sub2.tasks[0].solution, null, 2));

console.log('--- SUB 3 TASK 1 solution ---');
console.log(JSON.stringify(sub3.tasks[0].solution, null, 2));

console.log('--- SUB 4 TASK 1 solution ---');
console.log(JSON.stringify(sub4.tasks[0].solution, null, 2));
