const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

course.sections.forEach(sec => {
  if (sec.id === 'sec-praca-energia') {
    console.log('Section id:', sec.id);
    console.log('Subchapters count:', sec.subchapters?.length);
    sec.subchapters?.forEach(sub => {
      console.log(`  Sub ${sub.id}: tasks count = ${sub.tasks?.length}`);
    });
    console.log('Section-level tasks count:', sec.tasks?.length);
  }
});
