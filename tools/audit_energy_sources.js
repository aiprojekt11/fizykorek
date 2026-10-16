const fs = require('fs');
const {PDFParse}=require('pdf-parse');
(async()=>{
 fs.mkdirSync('tools/energy-audit',{recursive:true});
 for(const year of ['2023','2024','2025','2026','informatory']) {
  for(const file of fs.readdirSync(`data/arkusze_cke/${year}`).filter(f=>f.endsWith('.pdf')&&!/odpowiedzi|stara|aneks|2015|2021|^2023_/.test(f))) {
   const id=file.replace('fizyka-','').replace('informator-maturalny-fizyka-','informator-').replace('.pdf','');
   const parser=new PDFParse({data:fs.readFileSync(`data/arkusze_cke/${year}/${file}`)});
   const result=await parser.getText();
   fs.writeFileSync(`tools/energy-audit/${id}.json`,JSON.stringify(result.pages,null,2));
   console.log('\n'+id);
   for(const page of result.pages) {
    const lines=page.text.split('\n');
    const matches=lines.filter(l=>/energ|zderze|prac[ayę]|moc[ yą]|sprawnoś|spręży|uderz|hamow/i.test(l));
    if(matches.length) console.log('PAGE',page.num, matches.join(' / ').slice(0,1400));
   }
   await parser.destroy();
  }
 }
})().catch(e=>{console.error(e);process.exitCode=1});
