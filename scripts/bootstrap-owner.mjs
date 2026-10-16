import process from 'node:process';

function readArguments(argv) {
  let email = null;
  let dryRun = false;
  for (const argument of argv) {
    if (argument === '--dry-run') dryRun = true;
    else if (argument.startsWith('--')) throw new Error(`Nieznany argument: ${argument}`);
    else if (email === null) email = argument;
    else throw new Error('Podaj tylko jeden adres e-mail.');
  }

  email = email?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Uzycie: node scripts/bootstrap-owner.mjs adres@example.com [--dry-run]');
  }
  return { email, dryRun };
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

function adminHeaders(serviceRoleKey, json = false) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    ...(json ? { 'Content-Type': 'application/json' } : {}),
  };
}

async function requestJson(url, options, description) {
  const response = await fetch(url, options);
  const text = await response.text();
  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }
  if (!response.ok) {
    const details = typeof body === 'string' ? body : JSON.stringify(body);
    throw new Error(`${description} (${response.status}): ${details}`);
  }
  return body;
}

async function listAuthUsers(baseUrl, serviceRoleKey) {
  const users = [];
  const perPage = 1000;
  for (let page = 1; page <= 100; page += 1) {
    const body = await requestJson(
      `${baseUrl}/auth/v1/admin/users?page=${page}&per_page=${perPage}`,
      { headers: adminHeaders(serviceRoleKey) },
      'Nie mozna pobrac uzytkownikow Auth',
    );
    const pageUsers = Array.isArray(body) ? body : body?.users;
    if (!Array.isArray(pageUsers)) throw new Error('Nieoczekiwany format listy Auth users.');
    users.push(...pageUsers);
    if (pageUsers.length < perPage) break;
    if (page === 100) throw new Error('Przerwano po 100 stronach Auth users.');
  }
  return users;
}

async function getProfiles(baseUrl, serviceRoleKey, query) {
  const body = await requestJson(
    `${baseUrl}/rest/v1/profiles?${query}`,
    { headers: adminHeaders(serviceRoleKey) },
    'Nie mozna pobrac profili',
  );
  if (!Array.isArray(body)) throw new Error('Nieoczekiwany format odpowiedzi profiles.');
  return body;
}

async function inviteUser(baseUrl, serviceRoleKey, email, redirectTo) {
  const payload = { email };
  if (redirectTo) payload.redirect_to = redirectTo;
  const body = await requestJson(
    `${baseUrl}/auth/v1/invite`,
    {
      method: 'POST',
      headers: adminHeaders(serviceRoleKey, true),
      body: JSON.stringify(payload),
    },
    'Nie mozna wyslac zaproszenia',
  );
  const user = body?.user || body;
  if (!user?.id) throw new Error('Zaproszenie nie zwrocilo identyfikatora uzytkownika.');
  return user;
}

async function createProfile(baseUrl, serviceRoleKey, user, email) {
  const confirmed = Boolean(user.email_confirmed_at || user.confirmed_at);
  await requestJson(
    `${baseUrl}/rest/v1/profiles`,
    {
      method: 'POST',
      headers: {
        ...adminHeaders(serviceRoleKey, true),
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        id: user.id,
        email,
        role: 'owner',
        status: confirmed ? 'active' : 'invited',
      }),
    },
    'Nie mozna utworzyc profilu ownera',
  );
}

async function promoteProfile(baseUrl, serviceRoleKey, profile, user, email) {
  const patch = { email, role: 'owner' };
  const confirmed = Boolean(user.email_confirmed_at || user.confirmed_at);
  if (profile.status === 'invited' && confirmed) patch.status = 'active';

  await requestJson(
    `${baseUrl}/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}`,
    {
      method: 'PATCH',
      headers: {
        ...adminHeaders(serviceRoleKey, true),
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(patch),
    },
    'Nie mozna ustawic roli owner',
  );
}

async function main() {
  const { email, dryRun } = readArguments(process.argv.slice(2));
  const baseUrl = validateSupabaseUrl(requiredEnvironment('SUPABASE_URL'));
  const serviceRoleKey = requiredEnvironment('SUPABASE_SERVICE_ROLE_KEY');

  const redirectRaw = process.env.AUTH_REDIRECT_URL?.trim()
    || process.env.SUPABASE_AUTH_REDIRECT_TO?.trim()
    || process.env.APP_ORIGIN?.trim()
    || process.env.SITE_URL?.trim();
  const redirectTo = redirectRaw ? new URL(redirectRaw).toString() : null;
  const users = await listAuthUsers(baseUrl, serviceRoleKey);
  const matchingUsers = users.filter((user) => user.email?.toLowerCase() === email);
  if (matchingUsers.length > 1) {
    throw new Error('Znaleziono kilka kont Auth z tym adresem; przerwano dla bezpieczenstwa.');
  }

  const owners = await getProfiles(
    baseUrl,
    serviceRoleKey,
    'select=id,email,status&role=eq.owner&limit=2',
  );
  const existingUser = matchingUsers[0] || null;
  const foreignOwner = owners.find((owner) => owner.id !== existingUser?.id);
  if (foreignOwner) {
    throw new Error(
      `Owner juz istnieje (${foreignOwner.email}). Ten skrypt obsluguje tylko pierwszego ownera.`,
    );
  }

  if (dryRun) {
    if (existingUser) {
      console.log(`Tryb --dry-run: konto ${email} istnieje i zostaloby ustawione jako owner.`);
    } else {
      console.log(`Tryb --dry-run: ${email} otrzymalby zaproszenie i role owner.`);
    }
    return;
  }

  let user = existingUser;
  let invitedNow = false;
  if (!user) {
    user = await inviteUser(baseUrl, serviceRoleKey, email, redirectTo);
    invitedNow = true;
  }

  const profiles = await getProfiles(
    baseUrl,
    serviceRoleKey,
    `select=id,email,role,status&id=eq.${encodeURIComponent(user.id)}&limit=1`,
  );
  if (profiles[0]) await promoteProfile(baseUrl, serviceRoleKey, profiles[0], user, email);
  else await createProfile(baseUrl, serviceRoleKey, user, email);

  if (invitedNow) {
    console.log(`Wyslano zaproszenie do ${email} i ustawiono role owner.`);
    console.log('Profil stanie sie active automatycznie po potwierdzeniu adresu z zaproszenia.');
  } else {
    console.log(`Istniejace konto ${email} ma teraz role owner.`);
    if (!(user.email_confirmed_at || user.confirmed_at)) {
      console.log('Konto nadal oczekuje na potwierdzenie e-maila; skrypt nie wyslal drugiego zaproszenia.');
    }
  }
}

main().catch((error) => {
  console.error(`Blad: ${error.message}`);
  process.exitCode = 1;
});
