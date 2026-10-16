const fs = require('fs');

// 1. Read add_work_energy_tasks.js
let code = fs.readFileSync('tools/add_work_energy_tasks.js', 'utf8');

// Mapping of introductory tasks correct options
const correctMap = {
  'p-zad-3': 'A',
  'p-zad-8': 'C',
  'p-zad-10': 'B',
  'p-zad-13': 'C',
  'p-zad-16': 'B',
  'p-zad-18': 'C',
  'p-zad-26': 'B',
  'p-zad-30': 'C',
  'p-zad-34': 'C',
  'p-zad-35': 'A'
};

// Add data-correct="X" to <div class="problem-options-list"> for each task
for (const [taskId, correct] of Object.entries(correctMap)) {
  // Find task block
  const taskRegex = new RegExp(`id:\\s*["']${taskId}["'][\\s\\S]*?tags:.*?\\]`, 'g');
  code = code.replace(taskRegex, (m) => {
    if (!m.includes('correctOption')) {
      return m + `,\n    correctOption: "${correct}"`;
    }
    return m;
  });
}

// In problems: replace <div class="problem-options-list"> with <div class="problem-options-list" data-correct="...">
for (const [taskId, correct] of Object.entries(correctMap)) {
  const taskBlockRegex = new RegExp(`(id:\\s*["']${taskId}["'][\\s\\S]*?problem:\\s*\`[\\s\\S]*?)<div class="problem-options-list">([\\s\\S]*?\`)`, 'g');
  code = code.replace(taskBlockRegex, `$1<div class="problem-options-list" data-correct="${correct}">$2`);
}

// Remove ** from answers: Poprawna odpowiedź: **X** -> Poprawna odpowiedź: X
code = code.replace(/Poprawna odpowiedź:\s*\*\*([A-D])\*\*/g, 'Poprawna odpowiedź: $1');
code = code.replace(/Odpowiedź:\s*\*\*([A-D])\*\*/g, 'Odpowiedź: $1');

// Also in sub-praca-matura tasks in add_work_energy_tasks.js:
// 1. 2023 czerwiec zad 2: add options A-D for subtask 2.1
const cze2023Search = `<div class="chart-container-svg"><img src="img/energy/2023-czerwiec-z2-opcje.png" alt="Odpowiedzi A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:450px;display:block;margin:15px auto;"></div>`;
const cze2023Replace = `<div class="chart-container-svg"><img src="img/energy/2023-czerwiec-z2-opcje.png" alt="Odpowiedzi A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:450px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`;

// 2. 2023 maj zad 2: add options A-D for subtask 2.2
const maj2023Search = `<div class="chart-container-svg"><img src="img/energy/2023-maj-z2-opcje.png" alt="Rysunki A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:720px;display:block;margin:15px auto;"></div>`;
const maj2023Replace = `<div class="chart-container-svg"><img src="img/energy/2023-maj-z2-opcje.png" alt="Rysunki A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:720px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`;

// 3. 2026 czerwiec zad 3: add data-correct to rows and data-pf to cells in P/F table
const cze2026Search = `<tr><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr><tr><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr>`;
const cze2026Replace = `<tr data-correct="P"><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class="pf-box" data-pf="P">P</td><td class="pf-box" data-pf="F">F</td></tr><tr data-correct="P"><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class="pf-box" data-pf="P">P</td><td class="pf-box" data-pf="F">F</td></tr>`;

// Modify existingMaturaSub logic in add_work_energy_tasks.js
const maturaPatchHook = `// Preserve existing matura subchapter
const existingMaturaSub = pracaSection.subchapters.find(s => s.id === 'sub-praca-matura') || pracaSection.subchapters[0];
existingMaturaSub.id = 'sub-praca-matura';
existingMaturaSub.number = 5;
existingMaturaSub.icon = '🎓';
existingMaturaSub.title = '5. Zadania maturalne CKE';
existingMaturaSub.shortTitle = 'Matura CKE';
existingMaturaSub.desc = 'Formuła 2023: autentyczne zadania maturalne CKE z lat 2023–2026 i informatorów maturalnych z pełnymi rozwiązaniami krok po kroku.';
existingMaturaSub.formulaCheat = 'W = \\\\Delta E_k, \\\\quad \\\\Delta E_{\\\\text{mech}} = W_t, \\\\quad P = F v, \\\\quad \\\\vec{p} = m \\\\vec{v}';

// Apply interactive options to matura tasks
existingMaturaSub.tasks.forEach(t => {
  if (t.id === 'matura-cke-praca-2023-czerwiec-zad-2') {
    if (!t.problem.includes('data-correct="B"')) {
      t.problem = t.problem.replace('${cze2023Search}', \`${cze2023Replace}\`);
    }
  }
  if (t.id === 'matura-cke-praca-2023-maj-zad-2') {
    if (!t.problem.includes('data-correct="C"')) {
      t.problem = t.problem.replace('${maj2023Search}', \`${maj2023Replace}\`);
    }
  }
  if (t.id === 'matura-cke-praca-2026-czerwiec-zad-3') {
    if (!t.problem.includes('data-correct="P"')) {
      t.problem = t.problem.replace('${cze2026Search}', \`${cze2026Replace}\`);
    }
  }
});`;

code = code.replace(/\/\/ Preserve existing matura subchapter[\s\S]*?existingMaturaSub\.formulaCheat = [^;]*;/, maturaPatchHook);

fs.writeFileSync('tools/add_work_energy_tasks.js', code, 'utf8');
console.log('add_work_energy_tasks.js updated with interactive options and no-asterisks answers!');
