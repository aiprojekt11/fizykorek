const fs=require('fs'),{PDFParse}=require('pdf-parse');
(async()=>{
 const jobs=[['2023-maj',[8,9]],['2023-czerwiec',[4,5]],['2024-maj',[7,8,9,10,11,12]],['2025-maj',[6,7]],['2025-czerwiec',[8,9]],['2026-maj',[4,5,10,11]],['2026-czerwiec',[10,11,12,13]],['2023-czerwiec-key',[5]],['2024-maj-key',[14]],['2026-styczen-key',[8]],['2026-maj-key',[10]]];
 jobs.push(['2026-maj-key',[11]]);
 jobs.push(['2023-maj-key',[8]]);
 for(const [id,pages] of jobs){
  if(pages.every(n=>fs.existsSync(`tools/energy-audit/${id}-${n}.png`)))continue;
  const key=id.endsWith('-key'),base=id.replace('-key',''),type=base.includes('styczen')?'probna':'matura';
  const p=new PDFParse({data:fs.readFileSync(`data/arkusze_cke/${base.slice(0,4)}/fizyka-${base}-${type}-rozszerzona${key?'-odpowiedzi':''}.pdf`)});
  const r=await p.getScreenshot({partial:pages,scale:1.5});
  for(const page of r.pages)fs.writeFileSync(`tools/energy-audit/${id}-${page.pageNumber}.png`,page.data);
  await p.destroy();console.log(id);
 }
})().catch(e=>{console.error(e);process.exitCode=1});
