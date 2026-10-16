const { createClient } = require('@supabase/supabase-js');

const ROLES = new Set(['owner', 'teacher', 'student']);

class HttpError extends Error {
    constructor(status, message, code = 'request_error', details) {
        super(message);
        this.name = 'HttpError';
        this.status = status;
        this.code = code;
        this.details = details;
    }
}

function requireEnv(name) {
    const value = process.env[name];
    if (!value) throw new HttpError(500, `Brak konfiguracji serwera: ${name}.`, 'server_not_configured');
    return value;
}

function requireAnyEnv(names) {
    for (const name of names) {
        if (process.env[name]) return process.env[name];
    }
    throw new HttpError(500, `Brak konfiguracji serwera: ${names.join(' lub ')}.`, 'server_not_configured');
}

function publicConfig() {
    return {
        supabaseUrl: requireEnv('SUPABASE_URL'),
        supabaseAnonKey: requireAnyEnv(['SUPABASE_PUBLISHABLE_KEY', 'SUPABASE_ANON_KEY']),
    };
}

function createAdminClient() {
    const serverKey = requireAnyEnv(['SUPABASE_SECRET_KEY', 'SUPABASE_SERVICE_ROLE_KEY']);
    return createClient(requireEnv('SUPABASE_URL'), serverKey, {
        auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
    });
}

function firstHeader(value) {
    return Array.isArray(value) ? value[0] : value;
}

function requestOrigin(req) {
    const forwardedProto = firstHeader(req.headers['x-forwarded-proto']);
    const protocol = forwardedProto
        ? forwardedProto.split(',')[0].trim()
        : (req.protocol || (req.socket && req.socket.encrypted ? 'https' : 'http'));
    const forwardedHost = firstHeader(req.headers['x-forwarded-host']);
    const host = (forwardedHost ? forwardedHost.split(',')[0].trim() : firstHeader(req.headers.host)) || '';
    return host ? `${protocol}://${host}` : null;
}

function allowedOrigins(req) {
    const values = [process.env.APP_ORIGIN, process.env.SITE_URL, requestOrigin(req)];
    if (process.env.VERCEL_URL) values.push(`https://${process.env.VERCEL_URL}`);
    return new Set(values.filter(Boolean).map((value) => {
        try {
            return new URL(value).origin;
        } catch {
            return '';
        }
    }).filter(Boolean));
}

function applyCors(req, res, methods) {
    const origin = firstHeader(req.headers.origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', `${methods.join(', ')}, OPTIONS`);
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.setHeader('Access-Control-Max-Age', '600');

    if (!origin) return true;

    let normalizedOrigin;
    try {
        normalizedOrigin = new URL(origin).origin;
    } catch {
        return false;
    }

    if (!allowedOrigins(req).has(normalizedOrigin)) return false;
    res.setHeader('Access-Control-Allow-Origin', normalizedOrigin);
    return true;
}

function handleCors(req, res, methods) {
    if (!applyCors(req, res, methods)) {
        sendJson(res, 403, { error: 'Niedozwolone źródło żądania.', code: 'origin_not_allowed' });
        return false;
    }
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return false;
    }
    return true;
}

function sendJson(res, status, payload) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify(payload));
}

function sendError(res, error) {
    if (error instanceof HttpError) {
        const payload = { error: error.message, code: error.code };
        if (error.details !== undefined) payload.details = error.details;
        return sendJson(res, error.status, payload);
    }
    console.error(error);
    return sendJson(res, 500, { error: 'Wewnętrzny błąd serwera.', code: 'internal_error' });
}

async function readJsonBody(req, maxBytes = 100 * 1024) {
    if (req.body !== undefined && req.body !== null) {
        if (Buffer.isBuffer(req.body)) {
            if (req.body.length > maxBytes) throw new HttpError(413, 'Żądanie jest zbyt duże.', 'payload_too_large');
            try {
                return JSON.parse(req.body.toString('utf8') || '{}');
            } catch {
                throw new HttpError(400, 'Nieprawidłowy JSON.', 'invalid_json');
            }
        }
        if (typeof req.body === 'string') {
            if (Buffer.byteLength(req.body, 'utf8') > maxBytes) {
                throw new HttpError(413, 'Żądanie jest zbyt duże.', 'payload_too_large');
            }
            try {
                return JSON.parse(req.body || '{}');
            } catch {
                throw new HttpError(400, 'Nieprawidłowy JSON.', 'invalid_json');
            }
        }
        if (typeof req.body === 'object') {
            let serialized;
            try {
                serialized = JSON.stringify(req.body);
            } catch {
                throw new HttpError(400, 'Nieprawidłowe ciało żądania.', 'invalid_body');
            }
            if (Buffer.byteLength(serialized, 'utf8') > maxBytes) {
                throw new HttpError(413, 'Żądanie jest zbyt duże.', 'payload_too_large');
            }
            return req.body;
        }
        throw new HttpError(400, 'Nieprawidłowe ciało żądania.', 'invalid_body');
    }

    if (!req.on) return {};
    return new Promise((resolve, reject) => {
        let data = '';
        let bytes = 0;
        let finished = false;

        req.on('data', (chunk) => {
            if (finished) return;
            bytes += chunk.length;
            if (bytes > maxBytes) {
                finished = true;
                reject(new HttpError(413, 'Żądanie jest zbyt duże.', 'payload_too_large'));
                return;
            }
            data += chunk;
        });
        req.on('end', () => {
            if (finished) return;
            try {
                resolve(JSON.parse(data || '{}'));
            } catch {
                reject(new HttpError(400, 'Nieprawidłowy JSON.', 'invalid_json'));
            }
        });
        req.on('error', reject);
    });
}

function bearerToken(req) {
    const header = firstHeader(req.headers.authorization);
    const match = typeof header === 'string' && header.match(/^Bearer\s+([^\s]+)$/i);
    if (!match) throw new HttpError(401, 'Zaloguj się ponownie.', 'missing_token');
    return match[1];
}

function isSuspended(profile) {
    return profile.status === 'suspended' || profile.status === 'disabled';
}

async function requireAuth(req, options = {}) {
    const admin = options.admin || createAdminClient();
    const token = bearerToken(req);
    const { data: userData, error: userError } = await admin.auth.getUser(token);
    const user = userData && userData.user;
    if (userError || !user) throw new HttpError(401, 'Sesja wygasła. Zaloguj się ponownie.', 'invalid_token');

    const { data: profile, error: profileError } = await admin
        .from('profiles')
        .select('id,email,role,status,ai_daily_limit')
        .eq('id', user.id)
        .maybeSingle();

    if (profileError) throw new HttpError(500, 'Nie udało się odczytać profilu.', 'profile_read_failed');
    if (!profile || !ROLES.has(profile.role)) {
        throw new HttpError(403, 'Konto nie ma aktywnego profilu.', 'profile_missing');
    }
    if (isSuspended(profile)) throw new HttpError(403, 'Konto zostało zawieszone.', 'account_suspended');
    if (profile.status !== 'active') {
        throw new HttpError(403, 'Konto nie zostało jeszcze aktywowane.', 'account_inactive');
    }
    if (options.roles && !options.roles.includes(profile.role)) {
        throw new HttpError(403, 'Nie masz uprawnień do tej operacji.', 'forbidden');
    }

    return { admin, token, user, profile };
}

function cleanString(value, field, options = {}) {
    const { min = 1, max = 200, required = true } = options;
    if (value === undefined || value === null) {
        if (!required) return null;
        throw new HttpError(400, `Brak pola ${field}.`, 'validation_error');
    }
    if (typeof value !== 'string') throw new HttpError(400, `Pole ${field} musi być tekstem.`, 'validation_error');
    const result = value.trim();
    if (result.length < min || result.length > max) {
        throw new HttpError(400, `Pole ${field} ma nieprawidłową długość.`, 'validation_error');
    }
    return result;
}

function cleanId(value, field = 'id') {
    const result = cleanString(value, field, { max: 160 });
    if (!/^[a-zA-Z0-9][a-zA-Z0-9._:-]*$/.test(result)) {
        throw new HttpError(400, `Pole ${field} ma nieprawidłowy format.`, 'validation_error');
    }
    return result;
}

function cleanUuid(value, field = 'id') {
    const result = cleanString(value, field, { max: 36 });
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(result)) {
        throw new HttpError(400, `Pole ${field} ma nieprawidłowy format.`, 'validation_error');
    }
    return result;
}

function cleanEmail(value) {
    const email = cleanString(value, 'email', { max: 254 }).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new HttpError(400, 'Nieprawidłowy adres e-mail.', 'validation_error');
    }
    return email;
}

function queryValue(req, key) {
    if (req.query && req.query[key] !== undefined) return firstHeader(req.query[key]);
    try {
        return new URL(req.url, 'http://localhost').searchParams.get(key);
    } catch {
        return null;
    }
}

async function assertTeacherOwnsStudent(admin, profile, studentId) {
    cleanUuid(studentId, 'studentId');
    if (profile.role === 'owner') return;
    if (profile.role !== 'teacher') throw new HttpError(403, 'Brak dostępu do ucznia.', 'forbidden');

    const { data, error } = await admin
        .from('teacher_students')
        .select('student_id')
        .eq('teacher_id', profile.id)
        .eq('student_id', studentId)
        .maybeSingle();
    if (error) throw new HttpError(500, 'Nie udało się sprawdzić dostępu do ucznia.', 'access_check_failed');
    if (!data) throw new HttpError(403, 'Brak dostępu do tego ucznia.', 'forbidden');
}

async function requireActiveEnrollment(admin, studentId, courseId) {
    const { data, error } = await admin.rpc('has_active_enrollment', {
        target_student_id: studentId,
        target_course_id: courseId,
    });
    if (error) throw new HttpError(500, 'Nie udało się sprawdzić przypisania kursu.', 'enrollment_check_failed');
    if (!data) throw new HttpError(403, 'Nie masz dostępu do tego kursu.', 'course_not_assigned');
    return true;
}

function findTask(content, taskId) {
    if (!content || typeof content !== 'object') return null;
    const sections = Array.isArray(content.sections) ? content.sections : [];
    for (const section of sections) {
        const directTasks = Array.isArray(section.tasks) ? section.tasks : [];
        const task = directTasks.find((item) => item && item.id === taskId);
        if (task) return { task, section };
        const subchapters = Array.isArray(section.subchapters) ? section.subchapters : [];
        for (const subchapter of subchapters) {
            const nestedTasks = Array.isArray(subchapter.tasks) ? subchapter.tasks : [];
            const nestedTask = nestedTasks.find((item) => item && item.id === taskId);
            if (nestedTask) return { task: nestedTask, section, subchapter };
        }
    }
    return null;
}

async function requireCourseTask(admin, courseId, taskId) {
    const { data: course, error } = await admin
        .from('courses')
        .select('id,title,content,is_active')
        .eq('id', courseId)
        .eq('is_active', true)
        .maybeSingle();
    if (error) throw new HttpError(500, 'Nie udało się odczytać kursu.', 'course_read_failed');
    if (!course) throw new HttpError(404, 'Nie znaleziono kursu.', 'course_not_found');
    const located = findTask(course.content, taskId);
    if (!located) throw new HttpError(404, 'Nie znaleziono zadania w kursie.', 'task_not_found');
    return { course, ...located };
}

module.exports = {
    HttpError,
    applyCors,
    assertTeacherOwnsStudent,
    cleanEmail,
    cleanId,
    cleanString,
    cleanUuid,
    createAdminClient,
    findTask,
    handleCors,
    publicConfig,
    queryValue,
    readJsonBody,
    requireActiveEnrollment,
    requireAuth,
    requireCourseTask,
    sendError,
    sendJson,
};
