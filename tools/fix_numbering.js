const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let raw = fs.readFileSync(dataCoursesPath, 'utf8');

raw = raw.replace(
  '<div class=\\"theory-subtitle\\">3. Bilans energii',
  '<div class=\\"theory-subtitle\\">4. Bilans energii'
);

raw = raw.replace(
  '<div class=\\"theory-subtitle\\">5. Zjawisko odrzutu',
  '<div class=\\"theory-subtitle\\">5. Zjawisko odrzutu' // ensure
);

fs.writeFileSync(dataCoursesPath, raw, 'utf8');
console.log('Poprawiono numerację w data-courses.js');
