const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');

const svgMatches = content.match(/<svg/gi);
console.log('SVG count in whole data-courses.js file:', svgMatches ? svgMatches.length : 0);

const jsonText = content.replace(/^\/\*\*[\s\S]*?\*\/\s*/, '').replace(/^window\.FIZYKOREK_COURSES\s*=\s*/, '').replace(/;\s*$/, '');
const data = JSON.parse(jsonText);

let maturaSub = null;
data['matura-fizyka'].sections.forEach(sec => {
  if (sec.subchapters) {
    sec.subchapters.forEach(sub => {
      if (sub.id === 'sub-matura-cke') maturaSub = sub;
    });
  }
});

console.log('Sub-matura-cke tasks count:', maturaSub.tasks.length);
maturaSub.tasks.forEach((t, i) => {
  console.log(`Task ${i+1} [Rok/Miesiąc: ${t.year}]: ${t.title}`);
  console.log(`   Image path: ${t.image}`);
  const subtaskMatches = t.problem.match(/Zadanie 1\.\d+/g);
  console.log(`   Subtasks: ${subtaskMatches ? subtaskMatches.join(', ') : 'Zadanie 1'}`);
});
