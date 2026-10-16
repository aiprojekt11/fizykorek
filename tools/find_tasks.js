const fs = require('fs');

const years = [2020, 2019, 2018, 2017, 2016, 2015];

years.forEach(year => {
    const text = fs.readFileSync(`../data/arkusze_cke/${year}/text.txt`, 'utf8');
    
    // Find Zadanie 1, Zadanie 2, Zadanie 3, Zadanie 4
    for (let i = 1; i <= 4; i++) {
        const regex = new RegExp(`Zadanie ${i}\\.(.*?)(?=Zadanie ${i+1}\\.|$)`, 's');
        const match = text.match(regex);
        if (match) {
            let content = match[1].replace(/\s+/g, ' ').trim();
            console.log(`\n[${year}] Zadanie ${i}:`);
            console.log(content.substring(0, 300) + '...');
        }
    }
});
