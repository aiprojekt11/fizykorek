const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/barto/Desktop/aplikacja/tools/raw_tasks';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.txt') && !f.endsWith('_odp.txt'));

const keywords = ['siła', 'tarci', 'współczynnik tarcia', 'naciąg', 'masa', 'zderzeni', 'pęd'];
const rigidBodyKeywords = ['moment siły', 'moment bezwładności', 'bryła sztywna', 'prędkość kątowa', 'przyspieszenie kątowe', 'walec', 'toczy się'];

let results = [];

for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const tasks = content.split(/Zadanie \d+\./).slice(1);
    
    let taskNum = 1;
    for (const task of tasks) {
        const lowerTask = task.toLowerCase();
        let matchCount = 0;
        for (const kw of keywords) {
            if (lowerTask.includes(kw)) matchCount++;
        }
        let rigidCount = 0;
        for (const rkw of rigidBodyKeywords) {
            if (lowerTask.includes(rkw)) rigidCount++;
        }
        
        if (matchCount >= 2 && rigidCount === 0) {
            results.push({
                file: file,
                taskNumber: taskNum,
                snippet: task.substring(0, 150).replace(/\n/g, ' ')
            });
        }
        taskNum++;
    }
}

console.log(JSON.stringify(results, null, 2));
