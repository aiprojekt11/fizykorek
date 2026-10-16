const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../js/data-courses.js');
let rawData = fs.readFileSync(dataPath, 'utf8');

const prefixIdx = rawData.indexOf('window.FIZYKOREK_COURSES = ') + 'window.FIZYKOREK_COURSES = '.length;
let jsonStr = rawData.substring(prefixIdx).trim();
if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

let data = JSON.parse(jsonStr);

// Clean up CKE tasks
for (const section of data['matura-fizyka'].sections) {
    if (section.id === 'm-kinematyka' && section.subchapters) {
        let ckeSubchapter = section.subchapters.find(s => s.id === 'sub-matura-cke');
        if (ckeSubchapter) {
            // Remove duplicates for 2016, 2018, 2019
            const uniqueTasks = [];
            const seenIds = new Set();
            for (const task of ckeSubchapter.tasks) {
                if (!seenIds.has(task.id)) {
                    seenIds.add(task.id);
                    uniqueTasks.push(task);
                }
            }
            ckeSubchapter.tasks = uniqueTasks;
            
            // Fix extensions for 2021-2025
            for (const task of ckeSubchapter.tasks) {
                if (task.image && task.image.endsWith('.svg')) {
                    task.image = task.image.replace('.svg', '.png');
                }
                let yearMatch = task.title.match(/202[1-5]/);
                if (yearMatch) {
                    const year = yearMatch[0];
                    task.image = `img/cke_${year}_zad${task.number}.png`;
                }
            }
        }
    }
}

const prefix = rawData.substring(0, prefixIdx);
const newData = prefix + JSON.stringify(data, null, 4) + ';\n';
fs.writeFileSync(dataPath, newData, 'utf8');
console.log('Fixed tasks');
