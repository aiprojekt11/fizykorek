const fs = require('fs');
global.window = {};
require('c:/Users/barto/Desktop/aplikacja/js/data-courses.js');
const c = window.FIZYKOREK_COURSES;

const kinSec = c['matura-fizyka'].sections[0];
const subCke = kinSec.subchapters.find(s => s.id === 'sub-matura-cke');

console.log(`sub-matura-cke has ${subCke.tasks.length} tasks:`);
subCke.tasks.forEach((t, i) => {
  console.log(`${i+1}. ${t.id.padEnd(32)} | ${t.title}`);
});
