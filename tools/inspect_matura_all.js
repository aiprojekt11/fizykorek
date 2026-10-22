const fs = require('fs');
global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;
const pracaSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');
const subMatura = pracaSec.subchapters.find(s => s.id === 'sub-praca-matura');

console.log('Sub-praca-matura tasks count:', subMatura.tasks.length);
subMatura.tasks.forEach((t, i) => {
  console.log(`\n================ TASK ${i + 1}: ${t.id} (${t.title}) ================`);
  console.log('Source:', t.source);
  console.log('Problem length:', t.problem ? t.problem.length : 0);
  console.log('Solution keys:', t.solution ? Object.keys(t.solution) : 'NO SOLUTION');
  if (t.solution && t.solution.steps) {
    console.log('Steps count:', t.solution.steps.length);
    t.solution.steps.forEach((s, si) => console.log(`  Step ${si+1}: ${s.title}`));
  }
});
