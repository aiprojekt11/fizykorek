const fs = require('fs');
global.window = {};
require('c:/Users/barto/Desktop/aplikacja/js/data-courses.js');
const c = window.FIZYKOREK_COURSES;

function parseDateWeight(task) {
  const id = task.id;
  const title = task.title.toLowerCase();

  // Extract year
  const yearMatch = id.match(/20\d\d/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 2020;

  // Month weight:
  // grudzien = 12
  // czerwiec = 6
  // maj = 5
  // kwiecien = 4
  // marzec / pokazowy = 3
  // przykladowy = 1
  let month = 5; // default maj
  if (id.includes('grudzien') || title.includes('grudzień')) month = 12;
  else if (id.includes('lipiec') || title.includes('lipiec')) month = 7;
  else if (id.includes('czerwiec') || title.includes('czerwiec')) month = 6;
  else if (id.includes('maj') || title.includes('maj')) month = 5;
  else if (id.includes('kwiecien') || title.includes('kwiecień')) month = 4;
  else if (id.includes('marzec') || id.includes('pokazowy') || title.includes('pokazowy')) month = 3;
  else if (id.includes('przykladowy') || title.includes('przykładowa')) month = 1;

  return year * 100 + month;
}

const subCke = c['matura-fizyka'].sections[0].subchapters.find(s => s.id === 'sub-matura-cke');

const sorted = [...subCke.tasks].sort((a, b) => {
  return parseDateWeight(b) - parseDateWeight(a); // descending: najmłodsze (najnowsze) do najstarszych
});

console.log('Sorted order:');
sorted.forEach((t, i) => {
  console.log(`${i+1}. ${t.id.padEnd(35)} (weight: ${parseDateWeight(t)}) | ${t.title}`);
});
