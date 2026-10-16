const fs = require('fs');

const years = [2020, 2019, 2018, 2017, 2016, 2015];

years.forEach(year => {
    let text = fs.readFileSync(`../data/arkusze_cke/${year}/text.txt`, 'utf8');
    text = text.replace(/\n/g, ' ').replace(/\s+/g, ' ');
    
    console.log(`\n============== ${year} ==================`);
    for (let i = 1; i <= 5; i++) {
        const regex = new RegExp(`Zadanie ${i}\\.(.*?)(?=Zadanie ${i+1}\\.|$)`);
        const match = text.match(regex);
        if (match) {
            console.log(`\n[Zadanie ${i}]:\n` + match[1].substring(0, 1000));
        }
    }
});
