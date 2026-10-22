const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

let sub3;
course.sections.forEach(sec => {
  (sec.subchapters || []).forEach(s => {
    if (s.id === 'sub-zderzenia-niesprezyste') sub3 = s;
  });
});

sub3.tasks.forEach(t => {
  console.log(`\n================ ID: ${t.id} | ${t.title} ================`);
  console.log('problem:', t.problem);
  console.log('solution:', JSON.stringify(t.solution, null, 2));
});
