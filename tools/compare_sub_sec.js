const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;
const pracaSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');
const subMatura = pracaSec.subchapters.find(s => s.id === 'sub-praca-matura');

for (let i = 0; i < 9; i++) {
  const tSub = subMatura.tasks[i];
  const tSec = pracaSec.tasks[42 + i];
  console.log('Task ' + (i+1) + ': ' + tSub.id);
  const eq = JSON.stringify(tSub.solution) === JSON.stringify(tSec.solution);
  console.log('  identical solutions?', eq);
  if (!eq) {
    console.log('  tSub keys:', Object.keys(tSub.solution || {}));
    console.log('  tSec keys:', Object.keys(tSec.solution || {}));
  }
}
