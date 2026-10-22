const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;
const pracaSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');
const subMatura = pracaSec.subchapters.find(s => s.id === 'sub-praca-matura');

subMatura.tasks.forEach((t, i) => {
  console.log(`\n======================================================`);
  console.log(`TASK ${i + 1}: ${t.id}`);
  console.log(`Title: ${t.title}`);
  console.log(`Givens:\n`, t.solution.givens);
  console.log(`Steps count:`, t.solution.steps ? t.solution.steps.length : 0);
  if (t.solution.steps) {
    t.solution.steps.forEach((s, idx) => {
      console.log(`--- Step ${idx + 1}: ${s.title}`);
      console.log(s.content);
    });
  }
  console.log(`Numerical:\n`, t.solution.numerical);
  console.log(`Answer:\n`, t.solution.answer);
  console.log(`Trap:\n`, t.solution.trap);
});
