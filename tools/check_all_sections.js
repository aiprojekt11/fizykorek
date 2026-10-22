const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../js/data-courses.js'));
const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];

course.sections.forEach(sec => {
  console.log('Section id:', sec.id, 'title:', sec.title);
  sec.subchapters?.forEach(sub => {
    console.log(`  Sub ${sub.id}: tasks count = ${sub.tasks?.length}`);
  });
  console.log('Section tasks count:', sec.tasks?.length);
});
