const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

let sub3, sub4;
course.sections.forEach(sec => {
  (sec.subchapters || []).forEach(s => {
    if (s.id === 'sub-zderzenia-niesprezyste') sub3 = s;
    if (s.id === 'sub-zderzenia-sprezyste') sub4 = s;
  });
});

console.log('=== SUBCHAPTER 3 TASKS ===');
sub3.tasks.forEach(t => {
  console.log(`\n================ ID: ${t.id} | ${t.title} ================`);
  console.log('problem:', t.problem);
  console.log('solution:', JSON.stringify(t.solution, null, 2));
});

console.log('\n=== SUBCHAPTER 4 TASKS ===');
sub4.tasks.forEach(t => {
  console.log(`\n================ ID: ${t.id} | ${t.title} ================`);
  console.log('problem:', t.problem);
  console.log('solution:', JSON.stringify(t.solution, null, 2));
});
