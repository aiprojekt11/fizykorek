const fs = require('fs');

const slice = fs.readFileSync('tools/praca_matura_slice.txt', 'utf8');

// Find all tasks in sub-praca-matura before the closing bracket of subchapter
const subMaturaEnd = slice.indexOf('"tasks": [', slice.indexOf('tasks')); // wait, let's parse JS object safely or match by regex

// Regex match each task object
const taskRegex = /\{\s*"id":\s*"(matura-cke-praca-[^"]+)"/g;
let match;
const taskIds = [];
while ((match = taskRegex.exec(slice)) !== null) {
  taskIds.push({ id: match[1], index: match.index });
}

console.log('Found task IDs:', taskIds.map(t => t.id));
