const fs = require('fs');

global.window = {};
require('c:/Users/barto/Desktop/aplikacja/js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

function parseDateWeight(task) {
  const id = task.id || '';
  const title = (task.title || '').toLowerCase();

  const yearMatch = id.match(/20\d\d/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 2020;

  let month = 5;
  if (id.includes('grudzien') || title.includes('grudzień')) month = 12;
  else if (id.includes('lipiec') || title.includes('lipiec')) month = 7;
  else if (id.includes('czerwiec') || title.includes('czerwiec')) month = 6;
  else if (id.includes('maj') || title.includes('maj')) month = 5;
  else if (id.includes('kwiecien') || title.includes('kwiecień')) month = 4;
  else if (id.includes('marzec') || id.includes('pokazowy') || title.includes('pokazowy')) month = 3;
  else if (id.includes('przykladowy') || title.includes('przykładowa')) month = 1;

  return year * 100 + month;
}

// 1. Sort sub-matura-cke in Kinematyka
const kinSec = courses['matura-fizyka'].sections[0];
const subCke = kinSec.subchapters.find(s => s.id === 'sub-matura-cke');
if (subCke && subCke.tasks) {
  subCke.tasks.sort((a, b) => parseDateWeight(b) - parseDateWeight(a));
}

// 2. Also sort any other matura subchapter lists if present
courses['matura-fizyka'].sections.forEach(sec => {
  if (sec.subchapters) {
    sec.subchapters.forEach(sub => {
      if (sub.tasks && sub.tasks.length > 1 && sub.tasks.every(t => t.id.startsWith('matura-cke-'))) {
        sub.tasks.sort((a, b) => parseDateWeight(b) - parseDateWeight(a));
      }
    });
  }
});

// Write back to js/data-courses.js
const fileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('c:/Users/barto/Desktop/aplikacja/js/data-courses.js', fileContent, 'utf8');
console.log('Successfully re-ordered tasks and saved data-courses.js!');
