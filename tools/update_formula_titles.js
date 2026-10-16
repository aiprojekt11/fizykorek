const fs = require('fs');

const path = 'c:/Users/barto/Desktop/aplikacja/js/data-courses.js';
let content = fs.readFileSync(path, 'utf8');

// The list of 27 Matura tasks with their exact target title and formula
const updates = [
  { id: 'matura-cke-2025-zad-1', newTitle: 'Matura maj 2025 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2022-zad-1', newTitle: 'Matura maj 2022 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2021-zad-1', newTitle: 'Matura maj 2021 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2019-zad-1', newTitle: 'Matura maj 2019 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2016-zad-1', newTitle: 'Matura maj 2016 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2015-zad-1', newTitle: 'Matura maj 2015 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2024-grudzien-zad-1', newTitle: 'Matura próbna grudzień 2024 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2023-pokazowy-zad-1', newTitle: 'Matura arkusz pokazowy 2023 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2023-czerwiec-zad-1', newTitle: 'Matura czerwiec 2023 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2022-czerwiec-zad-1', newTitle: 'Matura czerwiec 2022 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2020-lipiec-zad-1', newTitle: 'Matura lipiec 2020 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2020-kwiecien-zad-1', newTitle: 'Matura próbna kwiecień 2020 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2016-czerwiec-zad-1', newTitle: 'Matura czerwiec 2016 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2015-przykladowy-zad-1', newTitle: 'Matura przykładowa 2015 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2022-pokazowy-zad-1', newTitle: 'Matura arkusz pokazowy marzec 2022 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2020-zad-1', newTitle: 'Matura maj 2020 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2017-zad-1', newTitle: 'Matura maj 2017 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2022-grudzien-zad-1', newTitle: 'Matura próbna grudzień 2022 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2021-marzec-zad-1', newTitle: 'Matura próbna marzec 2021 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2018-zad-1', newTitle: 'Matura maj 2018 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-2025-czerwiec-zad-1', newTitle: 'Matura czerwiec 2025 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2019-czerwiec-zad-1', newTitle: 'Matura czerwiec 2019 zad.1 stara formuła', formula: 'Stara formuła' },
  { id: 'matura-cke-informator-2023-zad-2', newTitle: 'Informator CKE 2023 zad.2 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2024-zad-1', newTitle: 'Matura maj 2024 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2023-zad-1', newTitle: 'Matura maj 2023 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2024-czerwiec-zad-1', newTitle: 'Matura czerwiec 2024 zad.1 nowa formuła', formula: 'Nowa formuła' },
  { id: 'matura-cke-2021-czerwiec-zad-1', newTitle: 'Matura czerwiec 2021 zad.1 stara formuła', formula: 'Stara formuła' }
];

let updatedCount = 0;

updates.forEach(u => {
  // Find task by id and replace its title property
  const idRegex = new RegExp(`("id":\\s*"${u.id}"[\\s\\S]*?"title":\\s*")[^"]+(")`);
  if (idRegex.test(content)) {
    content = content.replace(idRegex, `$1${u.newTitle}$2`);
    updatedCount++;
    console.log(`Updated title for ${u.id} -> ${u.newTitle}`);
  } else {
    console.warn(`Could not find task with id: ${u.id}`);
  }
});

fs.writeFileSync(path, content, 'utf8');
console.log(`Successfully updated ${updatedCount} / ${updates.length} tasks in data-courses.js.`);
