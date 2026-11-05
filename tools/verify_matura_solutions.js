const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('js/data-courses.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const course = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'];
const sections = course.sections;

let totalAsterisks = 0;
let checkedTasks = 0;
const imagesFound = [];

function checkText(taskId, fieldName, text) {
  if (typeof text !== 'string') return;
  if (text.includes('**')) {
    console.log(`  [FAIL] Task ${taskId} has ** in ${fieldName}: "${text.substring(0, 40)}..."`);
    totalAsterisks++;
  }
}

['m-praca', 'm-bryla'].forEach(mId => {
  const section = sections.find(s => s.id === mId);
  if (!section) {
    console.error(`Section ${mId} not found!`);
    return;
  }
  const maturaSub = section.subchapters.find(sub => sub.id.includes('matura'));
  if (maturaSub) {
    console.log(`\nChecking ${mId} -> ${maturaSub.id} (${maturaSub.tasks.length} tasks):`);
    maturaSub.tasks.forEach(t => {
      checkedTasks++;
      const sol = t.solution;
      if (!sol) {
        console.log(`  [WARN] Task ${t.id} has no solution!`);
        return;
      }
      checkText(t.id, 'solution.intuition', sol.intuition);
      checkText(t.id, 'solution.givens', sol.givens);
      checkText(t.id, 'solution.numerical', sol.numerical);
      checkText(t.id, 'solution.answer', sol.answer);
      checkText(t.id, 'solution.trap', sol.trap);
      checkText(t.id, 'solution.source', sol.source);

      if (sol.steps && Array.isArray(sol.steps)) {
        sol.steps.forEach((st, idx) => {
          checkText(t.id, `solution.steps[${idx}].title`, st.title);
          checkText(t.id, `solution.steps[${idx}].content`, st.content);
        });
      }

      // Check for images
      const solJson = JSON.stringify(sol);
      if (solJson.includes('<img')) {
        const matches = solJson.match(/src=\\"([^\\"]+)\\"/g) || solJson.match(/src="([^"]+)"/g);
        imagesFound.push({ id: t.id, imgs: matches });
      }
    });
  }
});

console.log(`\nChecked ${checkedTasks} tasks.`);
console.log(`Total occurrences of **: ${totalAsterisks}`);
console.log(`Embedded images found in solutions: ${imagesFound.length}`);
imagesFound.forEach(item => {
  console.log(`  Task ${item.id}: ${item.imgs ? item.imgs.join(', ') : 'unknown'}`);
});
