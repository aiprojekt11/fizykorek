const fs = require('fs');
global.window = {};
require('c:/Users/barto/Desktop/aplikacja/js/data-courses.js');
const courseData = window.FIZYKOREK_COURSES || global.FIZYKOREK_COURSES;

function getFormula(task) {
  const id = task.id;
  const title = task.title;
  const source = task.source || '';
  const link = task.link || '';

  // Informator 2023 -> nowa formuła (stworzony pod Formułę 2023)
  if (id.includes('informator-2023') || source.includes('Formuła 2023')) return 'nowa formuła';
  if (id.includes('2023-pokazowy') || source.includes('Formuła 2023')) return 'nowa formuła';
  if (id.includes('2015-przykladowy') || source.includes('Formuła 2015')) return 'stara formuła';
  if (id.includes('2022-pokazowy')) return 'nowa formuła'; // marzec 2022 arkusz pokazowy dla nowej formuły 2023
  
  // Extract year
  const match = id.match(/20\d\d/);
  if (match) {
    const year = parseInt(match[0]);
    if (year >= 2023) return 'nowa formuła';
    return 'stara formuła';
  }
  return '';
}

function findTasks(node) {
  if (!node) return [];
  let res = [];
  if (Array.isArray(node)) {
    node.forEach(item => res.push(...findTasks(item)));
  } else if (typeof node === 'object') {
    if (node.id && node.id.startsWith('matura-cke-')) res.push(node);
    for (let k in node) res.push(...findTasks(node[k]));
  }
  return res;
}

const tasks = findTasks(courseData);
const unique = [];
const seen = new Set();
tasks.forEach(t => {
  if (!seen.has(t.id)) {
    seen.add(t.id);
    unique.push(t);
  }
});

const mappings = unique.map(t => {
  const formula = getFormula(t);
  let newTitle = t.title;
  // Remove existing formula if any
  newTitle = newTitle.replace(/\s*(stara|nowa)\s+formuła/i, '').trim();
  newTitle = `${newTitle} ${formula}`;
  return {
    id: t.id,
    oldTitle: t.title,
    newTitle: newTitle,
    formula
  };
});

console.log(JSON.stringify(mappings, null, 2));
