const fs=require('fs'),vm=require('vm'),assert=require('assert'),{createCanvas,loadImage}=require('canvas');
const {tasks:additions,img}=require('./energy_additions'),solutions=require('./energy_solutions'),R=String.raw;
function read(file){let s={window:{}};vm.runInNewContext(fs.readFileSync(file,'utf8'),s);return s.window.FIZYKOREK_COURSES;}
(async()=>{
 const courses=read('tools/energy-audit/before-solutions.js');
 const section=courses['matura-fizyka'].sections.find(s=>s.id==='m-praca');
 const tasks=section.subchapters[0].tasks;
 const all=courses['matura-fizyka'].sections.flatMap(s=>(s.subchapters||[]).flatMap(s=>s.tasks||[]));
 const deferred=JSON.parse(fs.readFileSync('tools/dynamics-audit/deferred-energy-tasks.json'));
 const c=structuredClone(all.find(t=>t.id==='matura-cke-2023-czerwiec-zad-1'));
 c.originalTaskId=c.id;c.id=c.id.replace('matura-cke-','matura-cke-praca-');c.formula='2023';c.sourcePages=[4,5];delete c.image;
 c.tags=['Matura CKE','Praca, moc i energia','Praca siły wypadkowej','Energia kinetyczna'];
 c.problem=c.problem.replace('class="task-matura"','class="task-matura energy-statements"')
 .replaceAll(R`\Delta(v^2)`,R`\Delta_{v^2}`)
 .replace('<p>W układzie współrzędnych','<p><strong>W układzie współrzędnych')
 .replace('dopasowaną do punktów pomiarowych.</p>','dopasowaną do punktów pomiarowych.</strong></p>')
 .replace('Zaznacz punkty','<u>Zaznacz</u> punkty').replace('oraz narysuj prostą','oraz <u>narysuj</u> prostą')
 .replace('Na podstawie wykresu wyznacz','Na podstawie wykresu <u>wyznacz</u>')
 .replace(R`$\Delta_{v^2}$</th>`,R`$\Delta_{v^2}$, $\text{m}^2/\text{s}^2$</th>`)
 .replace(/<em>Uwaga! ([\s\S]*?)<\/em>/,(_,s)=>'Uwaga! <em>'+s.replace('(tylko same dane z tabeli),','</em>(tylko same dane z tabeli),<em>')+'</em>')
 .replace(/<table[^>]*>/,'<div class="energy-table-scroll"><table class="energy-data-table">').replace('</table>','</table></div>')
 .replace(/<div class="chart-container-svg">[\s\S]*?<\/div>/,img('2023-czerwiec-z1-siatka','Układ współrzędnych do narysowania wykresu',620));
 additions.push(c);tasks.push(...additions);
 const crops=[
 ['2023-maj-8','2023-maj-z3-rysunki',[70,461,731,281]],
 ['2024-maj-7','2024-maj-z2-rys1',[116,490,680,294]],
 ['2024-maj-7','2024-maj-z2-rys23',[80,804,777,323]],
 ['2024-maj-10','2024-maj-z3-wykres',[104,325,665,345]],
 ['2024-maj-11','2024-maj-z3-os',[302,268,166,438]],
 ['2025-maj-6','2025-maj-z2-rysunek',[101,465,708,239]],
 ['2025-czerwiec-8','2025-czerwiec-z3-rysunek',[131,310,640,208]],
 ['2026-maj-4','2026-maj-z1-wykres',[127,733,656,416]],
 ['2026-maj-10','2026-maj-z3-rysunek',[537,218,287,307]],
 ['2026-czerwiec-10','2026-czerwiec-z4-rysunek',[113,580,658,186]],
 ['2023-czerwiec-5','2023-czerwiec-z1-siatka',[67,358,768,677]],
 ['2023-czerwiec-key-5','2023-czerwiec-z1-rozwiazanie',[55,491,766,660]],
 ['2024-maj-key-14','2024-maj-z3-sily-rozwiazanie',[319,377,155,382]],
 ['2026-styczen-key-8','2026-styczen-z2-sily-rozwiazanie',[265,989,327,196]],
 ['2026-maj-key-11','2026-maj-z2-konstrukcja-rozwiazanie',[243,151,386,375]],
 ['2023-maj-key-8','2023-maj-z2-sily-rozwiazanie',[246,531,395,277]]
 ];
 for(const [page,name,[x,y,w,h]] of crops){const im=await loadImage(`tools/energy-audit/${page}.png`),cv=createCanvas(w,h);cv.getContext('2d').drawImage(im,x,y,w,h,0,0,w,h);fs.writeFileSync(`img/energy/${name}.png`,cv.toBuffer('image/png'));}
 const keyPages={
 '2026-czerwiec-zad-3':[8,11],'2026-czerwiec-zad-4':[11,14],
 '2026-maj-zad-1':[3,10],'2026-maj-zad-2':[10,14],'2026-maj-zad-3':[15,19],
 '2026-styczen-zad-2':[8,12],'2025-czerwiec-zad-3':[8,9],'2025-maj-zad-2':[11,16],
 '2024-czerwiec-zad-1':[3,6],'2024-maj-zad-2':[7,12],'2024-maj-zad-3':[13,22],
 '2023-czerwiec-zad-1':[2,7],'2023-czerwiec-zad-2':[7,10],'2023-maj-zad-2':[8,9],'2023-maj-zad-3':[9,12],
 'informator-2025-zad-2':[15,19],'informator-2025-zad-3':[21,23],'informator-2023-zad-2':[15,19],'informator-2023-zad-3':[21,23]
 };
 for(const task of tasks){
  const key=task.id.replace('matura-cke-praca-',''),original=task.originalTaskId;
  delete task.statementOnly;
  task.solution=structuredClone(solutions[key]||(deferred.find(t=>t.id===original)||all.find(t=>t.id===original)).solution);
  if(key==='2026-maj-zad-2')task.solution.steps[0].content+=img('2026-maj-z2-konstrukcja-rozwiazanie','Konstrukcja środka i promienia okręgu według klucza CKE',440);
  delete task.solution.numerical;
  // Normalize emphasis in any reused solution text to the app's HTML renderer.
  for(const step of task.solution.steps)step.content=step.content.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  if(additions.includes(task))task.problem=task.problem.replace(/<strong>([\s\S]*?)<\/strong>/g,(_,s)=>'<strong>'+s.replace(/\$([^$]+)\$/g,(_,m)=>'$\\boldsymbol{'+m+'}$')+'</strong>');
  let pdf,url;
  if(key.startsWith('informator')){const y=key.split('-')[1];pdf=`data/arkusze_cke/informatory/informator-maturalny-fizyka-${y}.pdf`;url=task.link;}
  else{const session=key.split('-').slice(0,2).join('-'),type=session.includes('styczen')?'probna':'matura';pdf=`data/arkusze_cke/${session.slice(0,4)}/fizyka-${session}-${type}-rozszerzona-odpowiedzi.pdf`;url=`https://arkusze.pl/maturalne/fizyka-${session}-${type}-rozszerzona-odpowiedzi.pdf`;}
  if(key.startsWith('2026-czerwiec')){task.link='https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/arkusz.pdf';url=task.link.replace('arkusz.pdf','odpowiedzi.pdf');}
  assert(fs.existsSync(pdf),pdf);
  task.solutionSource={publisher:'Centralna Komisja Egzaminacyjna',url,localFile:pdf,pages:keyPages[key]};
  const [first,last]=keyPages[key];
  task.solution.source=`Opracowano na podstawie zasad oceniania CKE. <a href="${url}#page=${first}" target="_blank" rel="noopener noreferrer">${key.startsWith('informator')?'Informator CKE – rozwiązania':'Klucz odpowiedzi CKE'}, s. ${first}–${last}</a>.`;
  for(const m of (task.problem+JSON.stringify(task.solution)).matchAll(/src=\\?"([^"\\]+)\\?"/g))assert(fs.existsSync(m[1]),m[1]);
 }
 tasks.sort((a,b)=>{let ai=a.year.startsWith('Informator'),bi=b.year.startsWith('Informator');return ai!==bi?(ai?1:-1):b.number-a.number||Number(a.id.match(/zad-(\d+)$/)[1])-Number(b.id.match(/zad-(\d+)$/)[1]);});
 section.badge=`${tasks.length} zadań CKE`;
 section.subchapters[0].desc='Formuła 2023: arkusze 2023–2026 i informatory 2025 oraz 2023. Od najnowszych arkuszy do najstarszych. Pełne treści z oryginalnymi rysunkami oraz rozwiązania na podstawie kluczy CKE.';
 fs.writeFileSync('js/data-courses.js',`window.FIZYKOREK_COURSES = ${JSON.stringify(courses,null,2)};\n`);
 const manifest=tasks.map(t=>({id:t.id,source:t.source,link:t.link,pages:t.sourcePages,subtasks:[...t.problem.matchAll(/<h4>Zadanie (\d+\.\d+)\./g)].map(m=>m[1]),images:[...t.problem.matchAll(/src="([^"]+)"/g)].map(m=>m[1]),solutionSource:t.solutionSource,solutionImages:[...JSON.stringify(t.solution).matchAll(/src=\\"([^"\\]+)\\"/g)].map(m=>m[1])}));
 fs.writeFileSync('tools/energy-audit/manifest.json',JSON.stringify(manifest,null,2));
 assert.equal(tasks.length,19);assert.equal(manifest.reduce((n,t)=>n+t.subtasks.length,0),47);
 console.log('19 sets, 47 subtasks, solutions and source metadata for every set.');
})().catch(e=>{console.error(e);process.exitCode=1});
