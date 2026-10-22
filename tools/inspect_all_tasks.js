const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

let sub1, sub2, sub3, sub4;
course.sections.forEach(sec => {
  (sec.subchapters || []).forEach(s => {
    if (s.id === 'sub-praca-moc') sub1 = s;
    if (s.id === 'sub-energie-zachowanie') sub2 = s;
    if (s.id === 'sub-zderzenia-niesprezyste') sub3 = s;
    if (s.id === 'sub-zderzenia-sprezyste') sub4 = s;
  });
});

function printSub(sub, name) {
  console.log(`==================== ${name} (${sub.tasks.length} tasks) ====================`);
  sub.tasks.forEach(t => {
    console.log(`\n--- ${t.id} (${t.title}) ---`);
    console.log('problem type:', t.correctOption ? 'CLOSED (ABCD)' : 'OPEN');
    console.log('solution givens:', t.solution?.givens);
    console.log('solution steps count:', t.solution?.steps?.length);
    t.solution?.steps?.forEach((st, idx) => {
      console.log(`  Step ${idx+1}: [${st.title}]`);
      console.log(`    ${st.content.split('\n')[0]}`);
    });
    console.log('solution answer:', t.solution?.answer);
    if (t.solution?.trap) console.log('solution trap:', t.solution?.trap);
  });
}

printSub(sub1, 'SUBCHAPTER 1: Praca i moc');
printSub(sub2, 'SUBCHAPTER 2: Energie i zachowanie');
printSub(sub3, 'SUBCHAPTER 3: Zderzenia niesprężyste');
printSub(sub4, 'SUBCHAPTER 4: Zderzenia sprężyste');
