const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:/Users/barto/Desktop/aplikacja/tools/extracted_mechanics_texts.json', 'utf8'));
const keywords = ['sił', 'tarci', 'współczynnik tarcia', 'naciąg', 'masa', 'pęd', 'waga', 'winda', 'równi'];
const rigidBodyKeywords = ['moment siły', 'moment bezwładności', 'bryła sztywna', 'prędkość kątowa', 'przyspieszenie kątowe', 'walec', 'toczy się', 'obraca', 'momentu pędu', 'ruch obrotowy'];

let results = [];
for (const [exam, contentObj] of Object.entries(data)) {
    if (!contentObj.text) continue;
    const tasks = contentObj.text.split(/Zadanie \d+\./);
    let taskNum = 0;
    for (const task of tasks) {
        if (taskNum === 0) {
            taskNum++;
            continue;
        }
        const lowerTask = task.toLowerCase();
        let matchCount = 0;
        for (const kw of keywords) {
            if (lowerTask.includes(kw)) matchCount++;
        }
        let rigidCount = 0;
        for (const rkw of rigidBodyKeywords) {
            if (lowerTask.includes(rkw)) rigidCount++;
        }
        if (matchCount >= 2 && rigidCount === 0 && !lowerTask.includes('zderze') && !lowerTask.includes('grawitacyj') && !lowerTask.includes('optycz') && !lowerTask.includes('termodynam')) {
            results.push({
                exam: exam,
                taskNumber: taskNum,
                snippet: task.substring(0, 200).replace(/\n/g, ' ')
            });
        }
        taskNum++;
    }
}
console.log(JSON.stringify(results, null, 2));
