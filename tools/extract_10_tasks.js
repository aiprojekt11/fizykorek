const fs = require('fs');
const d = require('./extracted_mechanics_texts.json');

const tasksToInspect = [
  { id: '1_2026_sty_z1', key: 'cke2026_sty', taskNum: 1 },
  { id: '2_2026_sty_z2', key: 'cke2026_sty', taskNum: 2 },
  { id: '3_2025_cze_z2', key: 'cke2025_cze', taskNum: 2 },
  { id: '4_2024_cze_z1', key: 'cke2024_cze', taskNum: 1 },
  { id: '5_2024_maj_z1', key: 'cke2024_maj', taskNum: 1 },
  { id: '6_2023_cze_z2', key: 'cke2023_cze', taskNum: 2 },
  { id: '7_2023_maj_z2', key: 'cke2023_maj', taskNum: 2 },
  { id: '8_2022_12_z2', key: 'cke2022_12', taskNum: 2 },
  { id: '9_inf2023_z1', key: 'inf2023', taskNum: 1 },
  { id: '10_inf2023_z3', key: 'inf2023', taskNum: 3 },
];

tasksToInspect.forEach(t => {
  const fullText = d[t.key].text;
  const regex = new RegExp(`(Zadanie\\s+${t.taskNum}\\.[\\s\\S]*?)(?=Zadanie\\s+${t.taskNum + 1}\\.|$)`);
  const match = fullText.match(regex);
  const outPath = `tools/task_${t.id}.txt`;
  if (match) {
    fs.writeFileSync(outPath, match[1].trim());
    console.log(`Saved ${outPath}, length=${match[1].length}`);
  } else {
    // try looser regex
    const regex2 = new RegExp(`(Zadanie\\s+${t.taskNum}\\b[\\s\\S]*?)(?=Zadanie\\s+${t.taskNum + 1}\\b|$)`);
    const m2 = fullText.match(regex2);
    if (m2) {
      fs.writeFileSync(outPath, m2[1].trim());
      console.log(`Saved (loose) ${outPath}, length=${m2[1].length}`);
    } else {
      console.log(`FAILED to find ${t.id} in ${t.key}`);
    }
  }
});
