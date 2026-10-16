const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../js/data-courses.js');
let rawData = fs.readFileSync(dataPath, 'utf8');

let startIndex = rawData.indexOf('window.FIZYKOREK_COURSES = ') + 'window.FIZYKOREK_COURSES = '.length;
let jsonStr = rawData.substring(startIndex).trim();
if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

let data = JSON.parse(jsonStr);

// Find the kinematics CKE tasks
const ckeSection = data['matura-fizyka'].sections.find(s => s.id === 'm-kinematyka-cke' || s.id === 'm-kinematyka' || s.id === 'sub-matura-cke' || (s.subchapters && s.subchapters.find(sub => sub.id === 'sub-matura-cke')));

let ckeSubchapter = null;
if (ckeSection) {
    if (ckeSection.id === 'sub-matura-cke') ckeSubchapter = ckeSection;
    else if (ckeSection.subchapters) {
        ckeSubchapter = ckeSection.subchapters.find(sub => sub.id === 'sub-matura-cke');
    }
}

if (!ckeSubchapter) {
    for (const section of data['matura-fizyka'].sections) {
        if (section.subchapters) {
            const sub = section.subchapters.find(s => s.id === 'sub-matura-cke');
            if (sub) ckeSubchapter = sub;
        }
    }
}

if (ckeSubchapter) {
    ckeSubchapter.tasks.forEach(task => {
        // Find the year from the task ID or title
        let yearMatch = task.title.match(/202[1-5]/);
        if (!yearMatch && task.source) yearMatch = task.source.match(/202[1-5]/);
        let year = yearMatch ? yearMatch[0] : null;

        if (year) {
            // Update title to include year and month
            if (!task.title.includes(year)) {
                // Determine month, mostly maj
                const month = 'maj';
                task.title = `${task.title} (${year} ${month})`;
            }

            // Remove SVG from problem
            if (task.problem.includes('<svg')) {
                task.problem = task.problem.replace(/<div class="chart-container-svg">[\s\S]*?<\/svg>\s*<\/div>/, `\n\n[TUTAJ OBRAZEK: img/cke_${year}_zad${task.number}.png]\n\n`);
                task.problem = task.problem.replace(/<svg[\s\S]*?<\/svg>/, `\n\n[TUTAJ OBRAZEK: img/cke_${year}_zad${task.number}.png]\n\n`);
                task.image = `img/cke_${year}_zad${task.number}.png`;
            }
            
            // Remove SVG from solution
            if (task.solution && task.solution.steps) {
                task.solution.steps.forEach(step => {
                    if (step.content.includes('<svg')) {
                        step.content = step.content.replace(/<div class="chart-container-svg">[\s\S]*?<\/svg>\s*<\/div>/, `\n\n[TUTAJ OBRAZEK W ROZWIAZANIU]\n\n`);
                        step.content = step.content.replace(/<svg[\s\S]*?<\/svg>/, `\n\n[TUTAJ OBRAZEK W ROZWIAZANIU]\n\n`);
                    }
                });
            }
        }
    });
}

const prefix = rawData.substring(0, startIndex);
const newData = prefix + JSON.stringify(data, null, 4) + ';\n';
fs.writeFileSync(dataPath, newData, 'utf8');
console.log('Successfully updated js/data-courses.js');
