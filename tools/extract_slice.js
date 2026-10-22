const fs = require('fs');

const content = fs.readFileSync('js/data-courses.js', 'utf8');

// Let's parse out m-praca tasks
const pracaMaturaIdx = content.indexOf('"id": "sub-praca-matura"');
const nextSubIdx = content.indexOf('"id": "sub-bryla', pracaMaturaIdx);
const slice = content.substring(pracaMaturaIdx, nextSubIdx);

fs.writeFileSync('tools/praca_matura_slice.txt', slice, 'utf8');
console.log('Saved slice length:', slice.length);
