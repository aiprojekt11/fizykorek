const fs = require('fs');

const content = fs.readFileSync('js/data-courses.js', 'utf8');
const lines = content.split('\n');

let startDyn = -1;
let endDyn = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"id": "m-dynamika"')) {
    startDyn = i;
  }
  if (startDyn !== -1 && lines[i].includes('"id": "m-praca"')) {
    endDyn = i;
    break;
  }
}

console.log('m-dynamika starts around line:', startDyn + 1, 'ends around line:', endDyn + 1);
