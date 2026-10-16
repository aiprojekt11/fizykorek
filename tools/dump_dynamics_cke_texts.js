const fs = require('fs');
const d = require('./extracted_mechanics_texts.json');

function findTasks(text) {
  // Split or find Zadanie X
  const matches = [...text.matchAll(/(Zadanie\s+(\d+)[\s\S]*?)(?=Zadanie\s+\d+|$)/g)];
  return matches.map(m => ({
    num: m[2],
    text: m[1].trim()
  }));
}

for (const [key, val] of Object.entries(d)) {
  console.log(`\n================== ${key}: ${val.name} ==================`);
  const tasks = findTasks(val.text);
  tasks.slice(0, 5).forEach(t => {
    console.log(`--- Zadanie ${t.num} (length ${t.text.length}) ---`);
    console.log(t.text.slice(0, 300) + '...\n');
  });
}
