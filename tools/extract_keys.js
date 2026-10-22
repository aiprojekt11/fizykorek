const fs = require('fs');

function inspectKey(fileName, taskSearchRegex) {
  const content = fs.readFileSync(fileName, 'utf8');
  console.log(`\n================ KEY: ${fileName} ================`);
  const match = content.match(taskSearchRegex);
  if (match) {
    console.log(match[0].substring(0, 2500));
  } else {
    console.log('Regex did not match.');
  }
}

inspectKey('tools/energy-audit/keys/2026-czerwiec-matura-rozszerzona.txt', /Zadanie 3[\s\S]*?(?=Zadanie 4|$)/);
inspectKey('tools/energy-audit/keys/2026-maj-matura-rozszerzona.txt', /Zadanie 2[\s\S]*?(?=Zadanie 3|$)/);
inspectKey('tools/energy-audit/keys/2026-styczen-probna-rozszerzona.txt', /Zadanie 2[\s\S]*?(?=Zadanie 3|$)/);
inspectKey('tools/energy-audit/keys/2023-czerwiec-matura-rozszerzona.txt', /Zadanie 2[\s\S]*?(?=Zadanie 3|$)/);
inspectKey('tools/energy-audit/keys/2023-maj-matura-rozszerzona.txt', /Zadanie 2[\s\S]*?(?=Zadanie 3|$)/);
