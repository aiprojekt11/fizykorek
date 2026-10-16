const fs=require('fs');
const {PDFParse}=require('pdf-parse');
(async()=>{
 fs.mkdirSync('tools/energy-audit/keys',{recursive:true});
 for(const year of [2023,2024,2025,2026])for(const file of fs.readdirSync(`data/arkusze_cke/${year}`).filter(f=>/odpowiedzi\.pdf$/.test(f)&&!f.includes('stara'))){
  const id=file.replace('fizyka-','').replace('-odpowiedzi.pdf','');
  const p=new PDFParse({data:fs.readFileSync(`data/arkusze_cke/${year}/${file}`)});
  const res=await p.getText();await p.destroy();
  fs.writeFileSync(`tools/energy-audit/keys/${id}.json`,JSON.stringify(res.pages,null,2));
  fs.writeFileSync(`tools/energy-audit/keys/${id}.txt`,res.text);
  console.log('\n'+id);
  const chunks=res.text.split(/(?=Zadanie \d+\.\d+\. \(0)/);
  for(const t of chunks)if(/energii mechanicznej|energii kinetycznej|zderzeni|prac[yę] mechanicznej/i.test(t)&&/Zadanie [1-5]\./.test(t.slice(0,100)))console.log(t.slice(0,40),t.split('\n').filter(l=>/energii mechanicznej|energii kinetycznej|zderzeni|prac[yę] mechanicznej/.test(l)).slice(0,6).join(' / '));
 }
})().catch(e=>{console.error(e);process.exitCode=1});
