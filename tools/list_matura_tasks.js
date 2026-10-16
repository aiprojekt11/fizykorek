const fs = require('fs');
global.window = {};
require('c:/Users/barto/Desktop/aplikacja/js/data-courses.js');
const courseData = window.FIZYKOREK_COURSES || global.FIZYKOREK_COURSES;

const list = [];
function traverse(obj) {
  if (!obj) return;
  if (Array.isArray(obj)) {
    obj.forEach(traverse);
  } else if (typeof obj === 'object') {
    if (obj.id && (obj.id.startsWith('matura-cke-') || (obj.title && obj.title.toLowerCase().includes('matura')))) {
      if (obj.problem) {
        list.push({
          id: obj.id,
          title: obj.title,
          year: obj.year,
          source: obj.source,
          link: obj.link
        });
      }
    }
    for (let k in obj) {
      if (typeof obj[k] === 'object') traverse(obj[k]);
    }
  }
}

traverse(courseData);
console.log(JSON.stringify(list, null, 2));
console.log('Total tasks:', list.length);
