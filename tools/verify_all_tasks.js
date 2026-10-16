const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);
const dyn = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
const maturaSub = dyn.subchapters.find(s => s.id === 'sub-dynamika-matura');
console.log('Total tasks in sub-dynamika-matura:', maturaSub.tasks.length);
maturaSub.tasks.forEach((t, i) => {
  const imgExists = t.image ? fs.existsSync(t.image) : false;
  const imgMatches = (t.problem.match(/src="([^"]+)"/g) || []).map(m => m.replace('src="', '').replace('"', ''));
  const allImgsExist = imgMatches.every(src => fs.existsSync(src));
  console.log(`Task ${i+1}: ${t.id}`);
  console.log(`  Title: ${t.title}`);
  console.log(`  Main image: ${t.image} (exists: ${imgExists})`);
  console.log(`  Inner images: ${imgMatches.join(', ') || 'none'} (all exist: ${allImgsExist})`);
  console.log(`  Has solution: ${!!t.solution}`);
  if (t.problem) {
    const subtasks = t.problem.match(/Zadanie\s+\d+(\.\d+)?/g) || [];
    console.log(`  Subtasks found in text: ${subtasks.join(', ')}`);
  }
});
