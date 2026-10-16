// Import statements only. Sources were checked against the rendered CKE pages.
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const {createCanvas, loadImage} = require('canvas');
const R = String.raw;
const audit = 'tools/energy-audit';
const image = (name, alt, height=460) => `<div class="chart-container-svg"><img src="img/energy/${name}.png" alt="${alt}" class="theory-img" style="max-height:${height}px;display:block;margin:15px auto;"></div>`;
function replace(task, from, to) {
  assert(task.problem.includes(from), `${task.id}: missing replacement ${from}`);
  task.problem = task.problem.replace(from, to);
}
function replaceImage(task, oldName, name, alt, height) {
  const re = new RegExp('<div class="chart-container-svg">\\s*<img[^>]*src="img/'+oldName+'\\.png"[^>]*>\\s*</div>');
  assert(re.test(task.problem), oldName);
  task.problem = task.problem.replace(re, image(name,alt,height));
}
(async()=>{
 fs.mkdirSync(audit,{recursive:true});
 fs.mkdirSync('img/energy',{recursive:true});
 const current = fs.readFileSync('js/data-courses.js','utf8');
 if(!fs.existsSync(`${audit}/data-courses.before.js`))fs.writeFileSync(`${audit}/data-courses.before.js`,current);
 const sandbox={window:{}};
 vm.runInNewContext(fs.readFileSync(`${audit}/data-courses.before.js`,'utf8'),sandbox);
 const courses=sandbox.window.FIZYKOREK_COURSES;
 const dynamics=courses['matura-fizyka'].sections.find(s=>s.id==='m-dynamika').subchapters[0].tasks;
 const tasks=JSON.parse(fs.readFileSync('tools/dynamics-audit/deferred-energy-tasks.json','utf8'));
 for(const id of ['matura-cke-2026-maj-zad-2','matura-cke-2024-czerwiec-zad-1'])tasks.push(JSON.parse(JSON.stringify(dynamics.find(t=>t.id===id))));
 const find=id=>tasks.find(t=>t.id===`matura-cke-${id}`);
 const crops=[
  ['2026-styczen-6','2026-styczen-z2-rys1',[235,198,429,120]],
  ['2026-styczen-6','2026-styczen-z2-rys2',[235,396,429,120]],
  ['2026-styczen-6','2026-styczen-z2-rys3',[226,860,425,238]],
  ['2023-maj-6','2023-maj-z2-rys1',[245,357,406,295]],
  ['2023-maj-6','2023-maj-z2-rys2',[245,663,406,294]],
  ['2023-maj-7','2023-maj-z2-opcje',[41,277,823,755]],
  ['2023-czerwiec-7','2023-czerwiec-z2-rys1',[226,286,431,63]],
  ['2023-czerwiec-7','2023-czerwiec-z2-opcje',[100,602,556,365]],
  ['2026-czerwiec-8','2026-czerwiec-z3-rysunki',[111,574,696,334]],
  ['informator-2023-20','informator-2023-z3-diagram',[83,379,744,495]],
  ['informator-2025-20','informator-2025-z3-diagram',[83,405,744,493]],
  ['2026-maj-6','2026-maj-z2-ruch',[548,195,253,210]],
  ['2026-maj-6','2026-maj-z2-siatka',[247,595,400,343]],
  ['2026-maj-7','2026-maj-z2-opcje',[176,240,550,642]],
  ['2024-czerwiec-4','2024-czerwiec-z1-rysunek',[164,467,614,202]],
 ];
 for(const [page,name,[x,y,w,h]] of crops){
  const dir=page==='2024-czerwiec-4'?audit:'tools/dynamics-audit';
  const original=await loadImage(`${dir}/${page}.png`);
  const canvas=createCanvas(w,h),ctx=canvas.getContext('2d');
  ctx.drawImage(original,x,y,w,h,0,0,w,h);
  // Only a fragment of the neighbouring paragraph occupies this corner.
  if(name==='2026-maj-z2-ruch'){ctx.fillStyle='#fff';ctx.fillRect(0,0,60,20);}
  fs.writeFileSync(`img/energy/${name}.png`,canvas.toBuffer('image/png'));
 }
 let t=find('2026-styczen-zad-2');
 replace(t,'o tych samych wartościach','<u>o tych samych wartościach</u>');
 for(let n=1;n<=3;n++)replaceImage(t,`cke_2026_styczen_zad2_rys${n}`,`2026-styczen-z2-rys${n}`,`Rysunek ${n}. – kule K1 i K2`,n===3?330:170);
 t=find('2023-maj-zad-2');
 replace(t,'masy są sobie równe.','masy <u>są sobie równe.</u>');
 replace(t,'było doskonale sprężyste.','było <u>doskonale sprężyste</u>.');
 for(let n=1;n<=2;n++)replaceImage(t,`cke_2023_maj_zad2_rys${n}`,`2023-maj-z2-rys${n}`,`Rysunek ${n}. – krążki K1 i K2`,360);
 const second=image('2023-maj-z2-rys2','Rysunek 2. – krążki K1 i K2',360);
 replace(t,second,'');
 replace(t,'<h4>Zadanie 2.1.',second+'\n<h4>Zadanie 2.1.');
 replaceImage(t,'cke_2023_maj_zad2_opcje','2023-maj-z2-opcje','Rysunki A–D – wektory prędkości po zderzeniu',720);
 t=find('2023-czerwiec-zad-2');
 replace(t,'było doskonale sprężyste.','było <u>doskonale sprężyste</u>.');
 replace(t,'połączyły się trwale.','<u>połączyły się trwale</u>.');
 replace(t,'utracił układ','<u>utracił</u> układ');
 replace(t,'<em>Wskazówka! Długości wektorów odpowiadają wartościom prędkości kul. W zadaniu nie trzeba wykonywać obliczeń – wystarczy sprawdzić, czy spełnione są zasady zachowania odpowiednich wielkości fizycznych.</em>',
 '<em>Wskazówka! Długości wektorów odpowiadają wartościom prędkości kul.</em> W zadaniu nie trzeba <em>wykonywać obliczeń – wystarczy sprawdzić, czy spełnione są zasady zachowania</em> odpowiednich <em>wielkości fizycznych.</em>');
 replaceImage(t,'cke_2023_czerwiec_zad2_rys1','2023-czerwiec-z2-rys1','Kule K1 i K2 przed zderzeniem',105);
 replaceImage(t,'cke_2023_czerwiec_zad2_opcje','2023-czerwiec-z2-opcje','Odpowiedzi A–D – wektory prędkości po zderzeniu',450);
 t=find('2026-czerwiec-zad-3');
 replaceImage(t,'cke_2026_czerwiec_zad3_rysunki','2026-czerwiec-z3-rysunki','Rysunki 1.–3. – zderzenie klocków ze sprężyną',400);
 t.problem=t.problem.replace(/<td>P<\/td><td>F<\/td>/g,'<td class="pf-box">P</td><td class="pf-box">F</td>');
 for(const year of [2023,2025]){
  t=find(`informator-${year}-zad-2`);
  replace(t,'Oblicz wartość siły reakcji podłoża','Oblicz wartość siły <u>reakcji podłoża</u>');
  replace(t,'<em>Wskazówka:','Wskazówka:');
  replace(t,'</em>','');
  t.link=year===2025?'https://bip.cke.gov.pl/attachments/download/10000':'https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf';
  t=find(`informator-${year}-zad-3`);
  replaceImage(t,'cke_informator_zad3_stroboskop',`informator-${year}-z3-diagram`,'Diagram – kolejne położenia ciał A i B',510);
  // The labels on the source diagram are upright, not italic mathematical symbols.
  t.problem=t.problem.replace(/\$([AB])_([1-6])\$/g,'$1<sub>$2</sub>');
 }
 t=find('2026-maj-zad-2');
 replaceImage(t,'cke_2026_maj_zad2_ruch','2026-maj-z2-ruch','Ciało na nici w płaszczyźnie pionowej',260);
 replaceImage(t,'cke_2026_maj_zad2_siatka','2026-maj-z2-siatka','Rysunek – wektory prędkości na siatce',400);
 replaceImage(t,'cke_2026_maj_zad2_opcje','2026-maj-z2-opcje','Rysunki A–D – siły w najniższym położeniu',640);
 t=find('2024-czerwiec-zad-1');
 replaceImage(t,'cke_2024_czerwiec_zad1_rysunek','2024-czerwiec-z1-rysunek','Rysunek – deseczka z monetami M1, M2 i M3',250);
 replace(t,R`$\frac{r_1}{r_2} = \frac{1}{2} \qquad \text{oraz} \qquad \frac{r_1}{r_3} = \frac{1}{3} \qquad \text{oraz} \qquad \frac{r_2}{r_3} = \frac{2}{3}$`,R`$\frac{r_1}{r_2} = \frac{1}{2}$ &nbsp; oraz &nbsp; $\frac{r_1}{r_3} = \frac{1}{3}$ &nbsp; oraz &nbsp; $\frac{r_2}{r_3} = \frac{2}{3}$`);
 const sourcePages={
  '2026-czerwiec-zad-3':[8,9], '2026-maj-zad-2':[6,7,8], '2026-styczen-zad-2':[6,7],
  '2024-czerwiec-zad-1':[4,5], '2023-czerwiec-zad-2':[7,8], '2023-maj-zad-2':[6,7],
  'informator-2025-zad-2':[15,16,18], 'informator-2025-zad-3':[20,22],
  'informator-2023-zad-2':[15,16,18], 'informator-2023-zad-3':[20,22],
 };
 for(const task of tasks){
  const key=task.id.replace('matura-cke-','');
  task.originalTaskId=task.id;
  task.id=task.id.replace('matura-cke-','matura-cke-praca-');
  task.sourcePages=sourcePages[key];
  task.formula='2023';
  task.statementOnly=true;
  task.problem=task.problem.replace('class="task-matura"','class="task-matura energy-statements"');
  delete task.solution;
  delete task.image;
  task.tags=['Matura CKE','Praca, moc i energia',...(key.includes('2024-czerwiec')?['Praca siły tarcia','Energia kinetyczna']:key.includes('2026-maj')?['Zasada zachowania energii mechanicznej']:['Zderzenia sprężyste i niesprężyste','Energia kinetyczna'])];
  const month=key.includes('czerwiec')?6:key.includes('maj')?5:1;
  task.number=Number(key.match(/20\d\d/)[0])*100+month;
  // Keep the bold math in the bold instructions, as in the paper source.
  task.problem=task.problem.replace(/<strong>([\s\S]*?)<\/strong>/g,(_,body)=>'<strong>'+body.replace(/\$([^$]+)\$/g,(_,math)=>'$\\boldsymbol{'+math+'}$')+'</strong>');
  for(const m of task.problem.matchAll(/src="([^"]+)"/g))assert(fs.existsSync(m[1]),m[1]);
 }
 tasks.sort((a,b)=>{
  const ai=a.year.startsWith('Informator'),bi=b.year.startsWith('Informator');
  return ai!==bi?(ai?1:-1):b.number-a.number||Number(a.id.match(/zad-(\d+)$/)[1])-Number(b.id.match(/zad-(\d+)$/)[1]);
 });
 const section=courses['matura-fizyka'].sections.find(s=>s.id==='m-praca');
 section.isComingSoon=false;
 section.badge=`${tasks.length} zadań CKE`;
 section.desc='Praca, moc, sprawność, energia kinetyczna i potencjalna, zasada zachowania energii oraz zderzenia sprężyste i niesprężyste.';
 section.subchapters=[{
  id:'sub-praca-matura', title:'Zadania maturalne CKE (Praca, moc i energia)', shortTitle:'Matura CKE', number:1, icon:'🎓',
  desc:'Formuła 2023: zadania z arkuszy 2023–2026 oraz informatorów 2025 i 2023. Arkusze od najnowszych do najstarszych, następnie informatory. Treść i oryginalne rysunki, bez rozwiązań.',
  formulaCheat:'',tasks
 }];
 section.tasks=[];
 fs.writeFileSync('js/data-courses.js',`window.FIZYKOREK_COURSES = ${JSON.stringify(courses,null,2)};\n`);
 fs.writeFileSync(`${audit}/manifest.json`,JSON.stringify(tasks.map(t=>({id:t.id,source:t.source,link:t.link,pages:t.sourcePages,subtasks:[...t.problem.matchAll(/<h4>Zadanie (\d+\.\d+)\./g)].map(m=>m[1]),images:[...t.problem.matchAll(/src="([^"]+)"/g)].map(m=>m[1])})),null,2));
 console.log(`Imported ${tasks.length} statements; no solutions; ${crops.length} original figure crops.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
