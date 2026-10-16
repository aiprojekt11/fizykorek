const fs = require('fs');
const path = require('path');
const https = require('https');

const baseDir = path.join(__dirname, '..', 'data', 'arkusze_cke');

// List of all official CKE physics files: Informatory, Próbne (grudniowe, styczniowe, marcowe, kwietniowe), Czerwcowe (dodatkowe), Pokazowe/Przykładowe
const filesToDownload = [
    // --- INFORMATORY CKE ---
    {
        folder: 'informatory',
        name: 'informator-maturalny-fizyka-2025.pdf',
        url: 'https://arkusze.pl/informatory/informator-maturalny-fizyka-2025.pdf'
    },
    {
        folder: 'informatory',
        name: 'informator-maturalny-fizyka-2023.pdf',
        url: 'https://arkusze.pl/informatory/informator-maturalny-fizyka-2023.pdf'
    },
    {
        folder: 'informatory',
        name: 'informator-maturalny-fizyka-2023-aneks.pdf',
        url: 'https://arkusze.pl/informatory/informator-maturalny-fizyka-2023-aneks.pdf'
    },
    {
        folder: 'informatory',
        name: 'informator-maturalny-fizyka-2021-aneks.pdf',
        url: 'https://arkusze.pl/informatory/informator-maturalny-fizyka-2021-aneks.pdf'
    },
    {
        folder: 'informatory',
        name: 'informator-maturalny-fizyka-2015.pdf',
        url: 'https://arkusze.pl/informatory/informator-maturalny-fizyka-2015.pdf'
    },
    {
        folder: 'informatory',
        name: 'wzory-i-stale-fizykochemiczne-2023.pdf',
        url: 'https://arkusze.pl/informatory/wzory-i-stale-fizykochemiczne-2023.pdf'
    },
    {
        folder: 'informatory',
        name: 'wzory-i-stale-fizykochemiczne-2015.pdf',
        url: 'https://arkusze.pl/informatory/wzory-i-stale-fizykochemiczne-2015.pdf'
    },

    // --- ARKUSZE PRÓBNE I POKAZOWE CKE ---
    // 2026 Styczeń (Próbna CKE)
    {
        folder: '2026',
        name: 'fizyka-2026-styczen-probna-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf'
    },
    {
        folder: '2026',
        name: 'fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf'
    },
    // 2024 Grudzień (Próbna CKE)
    {
        folder: '2024',
        name: 'fizyka-2024-grudzien-probna-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2024-grudzien-probna-rozszerzona.pdf'
    },
    {
        folder: '2024',
        name: 'fizyka-2024-grudzien-probna-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2024-grudzien-probna-rozszerzona-odpowiedzi.pdf'
    },
    // 2023 Arkusz pokazowy / przykładowy CKE
    {
        folder: '2023',
        name: 'fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf'
    },
    {
        folder: '2023',
        name: 'fizyka-2023-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2023-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf'
    },
    // 2022 Grudzień (Próbna CKE)
    {
        folder: '2022',
        name: 'fizyka-2022-grudzien-probna-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2022-grudzien-probna-rozszerzona.pdf'
    },
    {
        folder: '2022',
        name: 'fizyka-2022-grudzien-probna-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2022-grudzien-probna-rozszerzona-odpowiedzi.pdf'
    },
    // 2021 Marzec (Próbna CKE)
    {
        folder: '2021',
        name: 'fizyka-2021-marzec-probna-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2021-marzec-probna-rozszerzona.pdf'
    },
    {
        folder: '2021',
        name: 'fizyka-2021-marzec-probna-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2021-marzec-probna-rozszerzona-odpowiedzi.pdf'
    },
    // 2020 Kwiecień (Próbna CKE)
    {
        folder: '2020',
        name: 'fizyka-2020-kwiecien-probna-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2020-kwiecien-probna-rozszerzona.pdf'
    },
    {
        folder: '2020',
        name: 'fizyka-2020-kwiecien-probna-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2020-kwiecien-probna-rozszerzona-odpowiedzi.pdf'
    },
    // 2015 Przykładowy arkusz CKE
    {
        folder: '2015',
        name: 'fizyka-2015-przykladowy-arkusz-cke-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2015-przykladowy-arkusz-cke-rozszerzona.pdf'
    },
    {
        folder: '2015',
        name: 'fizyka-2015-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2015-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf'
    },
    // 2014 Grudzień (Próbna CKE dla nowej matury)
    {
        folder: '2015',
        name: 'fizyka-2014-grudzien-probna-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2014-grudzien-probna-rozszerzona.pdf'
    },
    {
        folder: '2015',
        name: 'fizyka-2014-grudzien-probna-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2014-grudzien-probna-rozszerzona-odpowiedzi.pdf'
    },

    // --- MATURY CZERWCOWE (DODATKOWE CKE) 2015-2025 ---
    {
        folder: '2025',
        name: 'fizyka-2025-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2025',
        name: 'fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2024',
        name: 'fizyka-2024-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2024',
        name: 'fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2023',
        name: 'fizyka-2023-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2023',
        name: 'fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2022',
        name: 'fizyka-2022-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2022-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2022',
        name: 'fizyka-2022-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2022-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2021',
        name: 'fizyka-2021-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2021-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2021',
        name: 'fizyka-2021-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2021-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2020',
        name: 'fizyka-2020-lipiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2020-lipiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2020',
        name: 'fizyka-2020-lipiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2020-lipiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2019',
        name: 'fizyka-2019-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2019-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2019',
        name: 'fizyka-2019-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2019-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2018',
        name: 'fizyka-2018-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2018-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2018',
        name: 'fizyka-2018-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2018-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2017',
        name: 'fizyka-2017-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2017-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2017',
        name: 'fizyka-2017-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2017-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2016',
        name: 'fizyka-2016-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2016-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2016',
        name: 'fizyka-2016-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2016-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    },
    {
        folder: '2015',
        name: 'fizyka-2015-czerwiec-matura-rozszerzona.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2015-czerwiec-matura-rozszerzona.pdf'
    },
    {
        folder: '2015',
        name: 'fizyka-2015-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
        url: 'https://arkusze.pl/maturalne/fizyka-2015-czerwiec-matura-rozszerzona-odpowiedzi.pdf'
    }
];

function downloadFile(fileObj) {
    return new Promise((resolve) => {
        const destDir = path.join(baseDir, fileObj.folder);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        const filePath = path.join(destDir, fileObj.name);

        if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
            console.log(`[SKIP - Already exists] ${fileObj.folder}/${fileObj.name} (${fs.statSync(filePath).size} bytes)`);
            return resolve();
        }

        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://arkusze.pl/'
            }
        };

        https.get(fileObj.url, options, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                let redirectUrl = res.headers.location;
                if (!redirectUrl.startsWith('http')) redirectUrl = 'https://arkusze.pl' + redirectUrl;
                https.get(redirectUrl, options, (redirectRes) => {
                    const writeStream = fs.createWriteStream(filePath);
                    redirectRes.pipe(writeStream);
                    writeStream.on('finish', () => {
                        writeStream.close();
                        console.log(`[OK] Downloaded (redirect): ${fileObj.folder}/${fileObj.name} (${fs.statSync(filePath).size} bytes)`);
                        resolve();
                    });
                }).on('error', (err) => {
                    console.error(`[ERROR redirect] ${fileObj.name}: ${err.message}`);
                    resolve();
                });
                return;
            }

            if (res.statusCode !== 200) {
                console.error(`[FAIL HTTP ${res.statusCode}] ${fileObj.url}`);
                resolve();
                return;
            }

            const writeStream = fs.createWriteStream(filePath);
            res.pipe(writeStream);
            writeStream.on('finish', () => {
                writeStream.close();
                console.log(`[OK] Downloaded: ${fileObj.folder}/${fileObj.name} (${fs.statSync(filePath).size} bytes)`);
                resolve();
            });
        }).on('error', (err) => {
            console.error(`[ERROR] ${fileObj.name}: ${err.message}`);
            resolve();
        });
    });
}

async function run() {
    console.log(`Starting download of ${filesToDownload.length} official CKE files (informatory, próbne, czerwcowe, pokazowe)...`);
    for (let i = 0; i < filesToDownload.length; i++) {
        const item = filesToDownload[i];
        console.log(`[${i + 1}/${filesToDownload.length}] Fetching ${item.folder}/${item.name}...`);
        await downloadFile(item);
        await new Promise(r => setTimeout(r, 200));
    }
    console.log('\nAll official CKE files downloaded successfully!');
}

run().catch(console.error);
