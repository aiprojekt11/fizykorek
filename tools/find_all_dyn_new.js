const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:/Users/barto/Desktop/aplikacja/tools/extracted_mechanics_texts.json', 'utf8'));
const keywords = ['sił', 'tarci', 'współczynnik tarcia', 'naciąg', 'masa', 'pęd', 'waga', 'winda', 'równia'];
const rigidBodyKeywords = ['moment siły', 'moment bezwładności', 'bryła sztywna', 'prędkość kątowa', 'przyspieszenie kątowe', 'walec', 'toczy się', 'obraca', 'momentu pędu', 'ruch obrotowy'];

let results = [];
for (const [exam, tasks] of Object.entries(data)) {
    for (const [taskName, taskContent] of Object.entries(tasks)) {
        const lowerTask = taskContent.toLowerCase();
        let matchCount = 0;
        for (const kw of keywords) {
            if (lowerTask.includes(kw)) matchCount++;
        }
        let rigidCount = 0;
        for (const rkw of rigidBodyKeywords) {
            if (lowerTask.includes(rkw)) rigidCount++;
        }
        if (matchCount >= 2 && rigidCount === 0 && !lowerTask.includes('zderze') && !lowerTask.includes('grawitacyj') && !lowerTask.includes('optycz') && !lowerTask.includes('termodynam') && !lowerTask.includes('ciepł')) {
            results.push({
                exam: exam,
                task: taskName,
                snippet: taskContent.substring(0, 100).replace(/\n/g, ' ')
            });
        }
    }
}
console.log(JSON.stringify(results, null, 2));
