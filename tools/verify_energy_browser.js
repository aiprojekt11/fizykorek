const fs=require('fs'),vm=require('vm'),assert=require('assert'),puppeteer=require('puppeteer');
function read(file){const s={window:{}};vm.runInNewContext(fs.readFileSync(file,'utf8'),s);return s.window.FIZYKOREK_COURSES;}
(async()=>{
 const data=read('js/data-courses.js'),before=read('tools/energy-audit/data-courses.before.js');
 for(const [id,course] of Object.entries(before)){
  if(id!=='matura-fizyka')assert.equal(JSON.stringify(course),JSON.stringify(data[id]));
  else for(const section of course.sections)if(section.id!=='m-praca')assert.equal(JSON.stringify(section),JSON.stringify(data[id].sections.find(s=>s.id===section.id)));
 }
 const section=data['matura-fizyka'].sections.find(s=>s.id==='m-praca'),tasks=section.subchapters[0].tasks;
 assert(!section.isComingSoon);
 assert.equal(tasks.length,19);
 assert.equal(tasks.reduce((n,t)=>n+[...t.problem.matchAll(/<h4>Zadanie \d+\.\d+\./g)].length,0),47);
 assert.equal(new Set(tasks.map(t=>t.id)).size,tasks.length);
 for(const t of tasks){assert(t.solution.steps.length);assert(!t.statementOnly);assert.equal(t.formula,'2023');assert(t.sourcePages.length);assert(fs.existsSync(t.solutionSource.localFile));}
 const browser=await puppeteer.launch({headless:true,executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
 try{
  const page=await browser.newPage(),results=[],errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1440,height:1100});
  await page.goto(require('url').pathToFileURL(require('path').resolve('index.html')).href,{waitUntil:'networkidle0'});
  await page.waitForFunction(()=>window.app&&window.katex);
  await page.evaluate(async()=>{await document.fonts.ready;document.documentElement.style.scrollBehavior='auto';});
  await page.addStyleTag({content:'*,*::before,*::after { transition:none !important; animation:none !important; scroll-behavior:auto !important; }'});
  async function clickSolution(){
   await page.waitForFunction(()=>Array.from(document.querySelectorAll('#taskProblemText img, #solutionContainer img')).every(i=>i.complete));
   await page.evaluate(async()=>{document.querySelector('#toggleSolutionBtn').scrollIntoView({block:'center',behavior:'instant'});await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});
   await page.click('#toggleSolutionBtn');
  }
  await page.evaluate(()=>window.app.setCourse('matura-fizyka'));
  for(const task of tasks){
   await page.evaluate(id=>window.app.openTask('m-praca',id,'sub-praca-matura'),task.id);
   await page.waitForFunction(()=>window.scrollY===0);
   assert(await page.evaluate(()=>document.querySelector('#solutionContainer').classList.contains('hidden')));
   await clickSolution();
   if(await page.evaluate(()=>document.querySelector('#solutionContainer').classList.contains('hidden'))){
    await page.screenshot({path:'tools/energy-audit/click-debug.png',fullPage:true});
    console.log(await page.evaluate(()=>{const b=document.querySelector('#toggleSolutionBtn'),r=b.getBoundingClientRect();return {active:window.app.state.activeTaskId,button:r.toJSON(),hit:document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.outerHTML.slice(0,400)}}));
   }
   await page.waitForFunction(()=>Array.from(document.querySelectorAll('#taskProblemText img, #solutionContainer img')).every(i=>i.complete));
   const state=await page.evaluate(()=>({
    title:document.querySelector('#taskTitle').textContent,
    broken:[...document.querySelectorAll('#taskProblemText img, #solutionContainer img')].filter(i=>!i.naturalWidth).map(i=>i.src),
    mathErrors:[...document.querySelectorAll('#taskProblemText .katex-error, #solutionContainer .katex-error')].map(x=>x.textContent),
    headings:[...document.querySelectorAll('#taskProblemText h4')].map(x=>x.textContent),
    solutionVisible:document.querySelector('#toggleSolutionBtn').getBoundingClientRect().height>0,
    solutionText:document.querySelector('#solutionContainer').textContent,
    solutionHidden:document.querySelector('#solutionContainer').classList.contains('hidden'),
    solutionSteps:[...document.querySelectorAll('#solutionContainer .step-item-title')].map(x=>x.textContent),
    sourceLink:document.querySelector('#solutionContainer a')?.href,
    text:document.querySelector('#taskProblemText').innerText
   }));
   assert.equal(state.broken.length,0,task.id+' images');
   assert.equal(state.mathErrors.length,0,task.id+' math');
   assert(state.solutionVisible);assert(!state.solutionHidden);assert(state.solutionText.length>150);assert(state.sourceLink);
   assert.equal(state.solutionSteps.length,state.headings.filter(x=>/Zadanie \d+\.\d+\./.test(x)).length);
   assert(!state.solutionText.includes('**'));assert(!state.solutionText.includes('$'),task.id+' unrendered math');
   assert(!/Wymagania szczegółowe|Przykładowe pełne rozwiązanie|Zasady oceniania/.test(state.text));
   results.push({id:task.id,...state});
   await page.screenshot({path:`tools/energy-audit/ui-${task.id}.png`,fullPage:true});
   await clickSolution();
   assert(await page.evaluate(()=>document.querySelector('#solutionContainer').classList.contains('hidden')));
  }
  // Returning to an existing task must restore its solution control.
  await page.evaluate(()=>window.app.openTask('m-dynamika','matura-cke-2026-maj-zad-2','sub-dynamika-matura'));
  assert(await page.evaluate(()=>document.querySelector('#toggleSolutionBtn').getBoundingClientRect().height>0));
  await page.setViewport({width:390,height:844});
  for(const task of tasks){
   await page.evaluate(id=>window.app.openTask('m-praca',id,'sub-praca-matura'),task.id);
   await page.waitForFunction(()=>window.scrollY===0);
   await clickSolution();
   const overflow=await page.evaluate(()=>Math.max(document.documentElement.scrollWidth-innerWidth,...['#taskProblemText','#solutionContainer'].map(s=>{const p=document.querySelector(s);return p.scrollWidth-p.clientWidth;})));
   if(overflow>2){
    console.log(await page.evaluate(()=>{const measure=()=>({root:document.documentElement.scrollWidth,body:document.body.scrollWidth,viewport:innerWidth});const out={before:measure()};for(const selector of ['.energy-table-scroll','#formulaDrawer','.ambient-glow']){const es=[...document.querySelectorAll(selector)],styles=es.map(e=>e.style.display);es.forEach(e=>e.style.display='none');out[selector]=measure();es.forEach((e,i)=>e.style.display=styles[i]);}return out;}));
    console.log(await page.evaluate(()=>[...document.body.querySelectorAll('*')].filter(e=>{const r=e.getBoundingClientRect(),p=e.parentElement?.getBoundingClientRect();return r.right>innerWidth+10&&p&&p.right<=innerWidth&&r.width>0;}).map(e=>({tag:e.tagName,id:e.id,cls:e.className,rect:e.getBoundingClientRect().toJSON(),position:getComputedStyle(e).position,overflow:getComputedStyle(e.parentElement).overflow,html:e.outerHTML.slice(0,180)}))));
    await page.screenshot({path:'tools/energy-audit/mobile-overflow.png',fullPage:true});
    console.log(await page.evaluate(()=>{const p=document.querySelector('#taskProblemText'),r=p.getBoundingClientRect();return [...p.querySelectorAll('p,table,.katex,img')].filter(e=>e.getBoundingClientRect().right>r.right).map(e=>({tag:e.tagName,text:e.textContent.slice(0,160),width:e.getBoundingClientRect().width,right:e.getBoundingClientRect().right,parentRight:r.right}));}));
   }
   assert(overflow<=2,`${task.id} mobile overflow ${overflow}`);
   await page.screenshot({path:`tools/energy-audit/mobile-${task.id}.png`,fullPage:true});
   await clickSolution();
  }
  await page.evaluate(()=>window.app.openTask('m-praca','matura-cke-praca-2026-czerwiec-zad-3','sub-praca-matura'));
  await page.screenshot({path:'tools/energy-audit/ui-mobile.png',fullPage:true});
  assert.deepEqual(errors,[]);
  fs.writeFileSync('tools/energy-audit/browser-check.json',JSON.stringify(results,null,2));
  console.log('PASS: 19 sets / 47 subtasks, original sections unchanged, all solutions and source links, valid math/images, reveal/hide works, mobile fits.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
