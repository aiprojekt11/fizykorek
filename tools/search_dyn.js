const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/barto/Desktop/aplikacja/tools/';
const files = fs.readdirSync(dir).filter(f => f.startsWith('raw_') && f.endsWith('.txt'));

const keywords = ['sił', 'tarci', 'współczynnik tarcia', 'naciąg', 'masa', 'pęd'];
const rigidBodyKeywords = ['moment siły', 'moment bezwładności', 'bryła sztywna', 'prędkość kątowa', 'przyspieszenie kątowe', 'walec', 'toczy się', 'obraca', 'momentu pędu', 'ruch obrotowy'];

let results = [];
for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const tasks = content.split(/Zadanie \d+\./);
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
        if (matchCount >= 2 && rigidCount === 0 && !lowerTask.includes('zderze') && !lowerTask.includes('grawitacyj') && !lowerTask.includes('optycz')) {
            results.push({
                file: file,
                snippet: task.substring(0, 150).replace(/\n/g, ' ')
            });
        }
        taskNum++;
    }
}
console.log(JSON.stringify(results, null, 2));
