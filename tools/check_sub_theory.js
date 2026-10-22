const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];
let sub;
course.sections.forEach(sec => {
  (sec.subchapters || []).forEach(s => {
    if (s.id === 'sub-zderzenia-sprezyste') sub = s;
  });
});

console.log('Sub found:', !!sub);
const lines = sub.theory.split('\n');
lines.forEach((l, i) => {
  if (l.includes('cases') || l.includes('pt') || l.includes('ZZP')) {
    console.log(i + ': ' + l);
  }
});
