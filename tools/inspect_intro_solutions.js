const fs = require('fs');
global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;
const pracaSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');

[0, 1, 2, 3].forEach(subIdx => {
  const sub = pracaSec.subchapters[subIdx];
  console.log(`=== SUBCHAPTER ${subIdx + 1}: ${sub.title} ===`);
  const t = sub.tasks[0];
  console.log('Task 1 ID:', t.id);
  console.log('Solution:', JSON.stringify(t.solution, null, 2));
});
