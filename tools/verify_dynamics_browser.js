const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const puppeteer = require('puppeteer');
function read(file){const s={window:{}};vm.runInNewContext(fs.readFileSync(file,'utf8'),s);return s.window.FIZYKOREK_COURSES;}
(async()=>{
  const data=read('js/data-courses.js');
  const before=read('tools/dynamics-audit/data-courses.before.js');
  for(const [id,course] of Object.entries(before)){
    if(id!=='matura-fizyka')assert.equal(JSON.stringify(course),JSON.stringify(data[id]));
    else for(const section of course.sections)if(section.id!=='m-dynamika')assert.equal(JSON.stringify(section),JSON.stringify(data[id].sections.find(s=>s.id===section.id)));
  }
  const tasks=data['matura-fizyka'].sections.find(s=>s.id==='m-dynamika').subchapters[0].tasks;
  assert.equal(tasks.length,9);
  assert.equal(new Set(tasks.map(t=>t.id)).size,tasks.length);
  const browser=await puppeteer.launch({headless:true,executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
  try{
    const page=await browser.newPage();
    await page.setViewport({width:1440,height:1100});
    await page.goto('http://localhost:3000',{waitUntil:'networkidle0'});
    await page.waitForFunction(()=>window.app&&window.katex);
    await page.evaluate(()=>window.app.setCourse('matura-fizyka'));
    const results=[];
    for(const task of tasks){
      await page.evaluate(id=>window.app.openTask('m-dynamika',id,'sub-dynamika-matura'),task.id);
      await page.waitForFunction(()=>Array.from(document.querySelectorAll('#taskProblemText img')).every(i=>i.complete));
      const state=await page.evaluate(()=>({title:document.querySelector('#taskTitle').textContent,broken:Array.from(document.querySelectorAll('#taskProblemText img')).filter(i=>!i.naturalWidth).map(i=>i.src),mathErrors:Array.from(document.querySelectorAll('.katex-error')).map(x=>x.textContent),headings:Array.from(document.querySelectorAll('#taskProblemText h4')).map(x=>x.textContent)}));
      assert.equal(state.broken.length,0,task.id+' images');
      assert.equal(state.mathErrors.length,0,task.id+' math');
      results.push({id:task.id,...state});
      if(/2026-(maj|czerwiec)|2024-grudzien|informator-2025/.test(task.id))await page.screenshot({path:`tools/dynamics-audit/ui-${task.id}.png`,fullPage:true});
    }
    await page.setViewport({width:390,height:844});
    await page.evaluate(()=>window.app.openTask('m-dynamika','matura-cke-2026-maj-zad-2','sub-dynamika-matura'));
    await page.screenshot({path:'tools/dynamics-audit/ui-mobile.png',fullPage:true});
    fs.writeFileSync('tools/dynamics-audit/browser-check.json',JSON.stringify(results,null,2));
    console.log('PASS: 9 tasks loaded; no broken images or KaTeX errors; unrelated sections unchanged.');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
