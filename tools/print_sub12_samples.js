const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

let sub1, sub2;
course.sections.forEach(sec => {
  (sec.subchapters || []).forEach(s => {
    if (s.id === 'sub-praca-moc') sub1 = s;
    if (s.id === 'sub-energie-zachowanie') sub2 = s;
  });
});

console.log('--- TASK 2 in SUB 1 ---');
console.log(JSON.stringify(sub1.tasks[1], null, 2));

console.log('--- TASK 4 in SUB 1 ---');
console.log(JSON.stringify(sub1.tasks[3], null, 2));

console.log('--- TASK 16 in SUB 2 ---');
console.log(JSON.stringify(sub2.tasks[3], null, 2));

console.log('--- TASK 18 in SUB 2 ---');
console.log(JSON.stringify(sub2.tasks[5], null, 2));
