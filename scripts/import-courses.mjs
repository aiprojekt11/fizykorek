import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');

function readArguments(argv) {
  const options = {
    file: path.join(projectRoot, 'js', 'data-courses.js'),
    active: true,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--dry-run') options.dryRun = true;
    else if (argument === '--inactive') options.active = false;
    else if (argument === '--file') {
      const value = argv[index + 1];
      if (!value) throw new Error('Po --file podaj sciezke do pliku.');
      options.file = path.resolve(process.cwd(), value);
      index += 1;
    } else if (argument.startsWith('--file=')) {
      options.file = path.resolve(process.cwd(), argument.slice('--file='.length));
    } else {
      throw new Error(`Nieznany argument: ${argument}`);
    }
  }
  return options;
}

function requiredEnvironment(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Brak zmiennej srodowiskowej ${name}.`);
  return value;
}

function validateSupabaseUrl(rawUrl) {
  const url = new URL(rawUrl);
  const isLocal = ['localhost', '127.0.0.1'].includes(url.hostname);
  if (url.protocol !== 'https:' && !(isLocal && url.protocol === 'http:')) {
    throw new Error('SUPABASE_URL musi uzywac HTTPS (HTTP jest dozwolone tylko lokalnie).');
  }
  return url.toString().replace(/\/$/, '');
}

async function parseCourses(filePath) {
  const source = await fs.readFile(filePath, 'utf8');
  const sandbox = { window: Object.create(null) };
  vm.createContext(sandbox, {
    name: 'fizykorek-course-import',
    codeGeneration: { strings: false, wasm: false },
  });
  vm.runInContext(source, sandbox, {
    filename: filePath,
    timeout: 15_000,
  });

  const rawCourses = sandbox.window.FIZYKOREK_COURSES;
  if (!rawCourses || typeof rawCourses !== 'object' || Array.isArray(rawCourses)) {
    throw new Error('Plik nie ustawil window.FIZYKOREK_COURSES na obiekt.');
  }

  // Kopia JSON usuwa prototypy z kontekstu VM i gwarantuje zgodnosc z JSONB.
  return JSON.parse(JSON.stringify(rawCourses));
}

function buildRows(courses, isActive) {
  const rows = Object.entries(courses).map(([key, course]) => {
    if (!course || typeof course !== 'object' || Array.isArray(course)) {
      throw new Error(`Kurs ${key} nie jest obiektem.`);
    }
    const id = String(course.id || key).trim();
    const title = String(course.title || '').trim();
    if (!id) throw new Error(`Kurs ${key} nie ma id.`);
    if (!title) throw new Error(`Kurs ${id} nie ma title.`);
    if (course.id && course.id !== key) {
      console.warn(`Uwaga: klucz "${key}" rozni sie od id "${course.id}"; uzywam id.`);
    }
    return { id, title, content: course, is_active: isActive };
  });

  const ids = new Set();
  for (const row of rows) {
    if (ids.has(row.id)) throw new Error(`Powtorzone id kursu: ${row.id}`);
    ids.add(row.id);
  }
  return rows;
}

async function upsertCourses(baseUrl, serviceRoleKey, rows) {
  const response = await fetch(`${baseUrl}/rest/v1/courses?on_conflict=id`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(rows),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Import nie udal sie (${response.status}): ${details}`);
  }
}

async function main() {
  const options = readArguments(process.argv.slice(2));
  const courses = await parseCourses(options.file);
  const rows = buildRows(courses, options.active);

  console.log(`Plik: ${options.file}`);
  console.log(`Kursy: ${rows.length}`);
  for (const row of rows) {
    const sectionCount = Array.isArray(row.content.sections) ? row.content.sections.length : 0;
    console.log(`- ${row.id}: ${row.title} (${sectionCount} dzialow)`);
  }

  if (options.dryRun) {
    console.log('Tryb --dry-run: baza nie zostala zmieniona.');
    return;
  }

  const baseUrl = validateSupabaseUrl(requiredEnvironment('SUPABASE_URL'));
  const serviceRoleKey = requiredEnvironment('SUPABASE_SERVICE_ROLE_KEY');
  await upsertCourses(baseUrl, serviceRoleKey, rows);
  console.log(`Zaimportowano ${rows.length} kursow do public.courses.`);
}

main().catch((error) => {
  console.error(`Blad: ${error.message}`);
  process.exitCode = 1;
});
