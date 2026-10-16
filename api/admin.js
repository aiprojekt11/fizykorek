const {
    HttpError,
    assertTeacherOwnsStudent,
    cleanEmail,
    cleanId,
    cleanString,
    cleanUuid,
    handleCors,
    queryValue,
    readJsonBody,
    requireActiveEnrollment,
    requireAuth,
    sendError,
    sendJson,
} = require('./_supabase');

function requireOwner(profile) {
    if (profile.role !== 'owner') {
        throw new HttpError(403, 'Ta operacja jest dostępna tylko dla właściciela.', 'owner_required');
    }
}

function integerInRange(value, field, min, max) {
    if (!Number.isInteger(value) || value < min || value > max) {
        throw new HttpError(400, `Pole ${field} musi być liczbą całkowitą od ${min} do ${max}.`, 'validation_error');
    }
    return value;
}

function optionalDate(value, field) {
    if (value === undefined || value === null || value === '') return null;
    const text = cleanString(value, field, { max: 64 });
    const date = new Date(text);
    if (Number.isNaN(date.getTime())) throw new HttpError(400, `Pole ${field} zawiera nieprawidłową datę.`, 'validation_error');
    return date.toISOString();
}

function authRedirectOptions() {
    const raw = process.env.AUTH_REDIRECT_URL || process.env.APP_ORIGIN || process.env.SITE_URL;
    if (!raw) return {};
    try {
        return { redirectTo: new URL(raw).toString() };
    } catch {
        throw new HttpError(500, 'AUTH_REDIRECT_URL ma nieprawidłowy format.', 'server_not_configured');
    }
}

async function audit(admin, profile, action, entityType, entityId, subjectId, details = {}) {
    const { error } = await admin.from('audit_log').insert({
        actor_id: profile.id,
        actor_role: profile.role,
        action,
        entity_type: entityType,
        entity_id: entityId ? String(entityId) : null,
        subject_id: subjectId || null,
        details,
    });
    if (error) console.error('Nie udało się zapisać audit_log:', error.message);
}

async function targetProfileById(admin, userId) {
    const { data, error } = await admin
        .from('profiles')
        .select('id,email,role,status,ai_daily_limit')
        .eq('id', userId)
        .maybeSingle();
    if (error) throw error;
    if (!data) throw new HttpError(404, 'Nie znaleziono użytkownika.', 'user_not_found');
    return data;
}

async function targetProfileByEmail(admin, email) {
    const { data, error } = await admin
        .from('profiles')
        .select('id,email,role,status,ai_daily_limit')
        .eq('email', email)
        .maybeSingle();
    if (error) throw error;
    if (!data) throw new HttpError(404, 'Nie znaleziono użytkownika.', 'user_not_found');
    return data;
}

async function assertCanManageTarget(admin, profile, target) {
    if (profile.role === 'owner') return;
    if (target.role !== 'student') throw new HttpError(403, 'Nauczyciel może zarządzać tylko swoimi uczniami.', 'forbidden');
    await assertTeacherOwnsStudent(admin, profile, target.id);
}

async function accessibleStudentIds(admin, profile) {
    if (profile.role === 'owner') {
        const { data, error } = await admin.from('profiles').select('id').eq('role', 'student');
        if (error) throw error;
        return (data || []).map((row) => row.id);
    }
    const { data, error } = await admin
        .from('teacher_students')
        .select('student_id')
        .eq('teacher_id', profile.id);
    if (error) throw error;
    return (data || []).map((row) => row.student_id);
}

async function listStudents(admin, profile) {
    const studentIds = await accessibleStudentIds(admin, profile);
    if (studentIds.length === 0) return { students: [] };

    const [profilesResult, linksResult, enrollmentsResult, progressResult] = await Promise.all([
        admin
            .from('profiles')
            .select('id,email,status,ai_daily_limit')
            .in('id', studentIds)
            .order('email'),
        admin
            .from('teacher_students')
            .select('teacher_id,student_id')
            .in('student_id', studentIds),
        admin
            .from('enrollments')
            .select('student_id,course_id,status,assigned_by,starts_at,ends_at')
            .in('student_id', studentIds),
        admin
            .from('task_progress')
            .select('student_id,course_id,task_id,section_id,completed_at')
            .in('student_id', studentIds)
            .eq('completed', true),
    ]);
    for (const result of [profilesResult, linksResult, enrollmentsResult, progressResult]) {
        if (result.error) throw result.error;
    }

    const teacherIds = new Map();
    for (const link of linksResult.data || []) {
        if (!teacherIds.has(link.student_id)) teacherIds.set(link.student_id, []);
        teacherIds.get(link.student_id).push(link.teacher_id);
    }
    const enrollments = new Map();
    for (const row of enrollmentsResult.data || []) {
        if (!enrollments.has(row.student_id)) enrollments.set(row.student_id, []);
        enrollments.get(row.student_id).push({
            courseId: row.course_id,
            status: row.status,
            startsAt: row.starts_at,
            endsAt: row.ends_at,
            assignedBy: row.assigned_by,
        });
    }
    const completedTasks = new Map();
    for (const row of progressResult.data || []) {
        if (!completedTasks.has(row.student_id)) completedTasks.set(row.student_id, []);
        completedTasks.get(row.student_id).push({
            courseId: row.course_id,
            taskId: row.task_id,
            sectionId: row.section_id,
            completedAt: row.completed_at,
        });
    }

    return {
        students: (profilesResult.data || []).map((student) => ({
            id: student.id,
            email: student.email,
            status: student.status,
            aiDailyLimit: student.ai_daily_limit,
            teacherIds: teacherIds.get(student.id) || [],
            enrollments: enrollments.get(student.id) || [],
            completedTasks: completedTasks.get(student.id) || [],
        })),
    };
}

async function listTeachers(admin, profile) {
    requireOwner(profile);
    const [teachersResult, linksResult] = await Promise.all([
        admin
            .from('profiles')
            .select('id,email,status,ai_daily_limit')
            .eq('role', 'teacher')
            .order('email'),
        admin.from('teacher_students').select('teacher_id,student_id'),
    ]);
    if (teachersResult.error) throw teachersResult.error;
    if (linksResult.error) throw linksResult.error;

    const counts = new Map();
    for (const link of linksResult.data || []) {
        counts.set(link.teacher_id, (counts.get(link.teacher_id) || 0) + 1);
    }
    return {
        teachers: (teachersResult.data || []).map((teacher) => ({
            id: teacher.id,
            email: teacher.email,
            status: teacher.status,
            aiDailyLimit: teacher.ai_daily_limit,
            studentCount: counts.get(teacher.id) || 0,
        })),
    };
}

async function listCourses(admin, profile) {
    let courseQuery = admin.from('courses').select('id,title,is_active').order('title');
    if (profile.role === 'teacher') courseQuery = courseQuery.eq('is_active', true);
    const { data: courses, error: courseError } = await courseQuery;
    if (courseError) throw courseError;

    let enrollmentQuery = admin.from('enrollments').select('student_id,course_id').eq('status', 'active');
    if (profile.role === 'teacher') {
        const ids = await accessibleStudentIds(admin, profile);
        if (ids.length === 0) enrollmentQuery = null;
        else enrollmentQuery = enrollmentQuery.in('student_id', ids);
    }
    const enrollmentResult = enrollmentQuery ? await enrollmentQuery : { data: [], error: null };
    if (enrollmentResult.error) throw enrollmentResult.error;

    const counts = new Map();
    for (const row of enrollmentResult.data || []) {
        counts.set(row.course_id, (counts.get(row.course_id) || 0) + 1);
    }
    return {
        courses: (courses || []).map((course) => ({
            id: course.id,
            title: course.title,
            isActive: course.is_active,
            enrollmentCount: counts.get(course.id) || 0,
        })),
    };
}

function csvCell(value) {
    let text = value === null || value === undefined ? '' : String(value);
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
}

async function exportProgress(req, res, admin, profile) {
    let studentIds = await accessibleStudentIds(admin, profile);
    const requestedStudentId = queryValue(req, 'studentId');
    if (requestedStudentId) {
        const studentId = cleanUuid(requestedStudentId, 'studentId');
        const target = await targetProfileById(admin, studentId);
        if (target.role !== 'student') throw new HttpError(400, 'Wybrany użytkownik nie jest uczniem.', 'validation_error');
        await assertCanManageTarget(admin, profile, target);
        studentIds = [studentId];
    }

    let rows = [];
    if (studentIds.length > 0) {
        const { data, error } = await admin
            .from('task_progress')
            .select('student_id,course_id,task_id,section_id,completed,completed_at')
            .in('student_id', studentIds)
            .order('student_id')
            .order('course_id')
            .order('task_id');
        if (error) throw error;
        rows = data || [];
    }

    const courseIds = [...new Set(rows.map((row) => row.course_id))];
    const [studentsResult, coursesResult] = await Promise.all([
        studentIds.length > 0
            ? admin.from('profiles').select('id,email').in('id', studentIds)
            : Promise.resolve({ data: [], error: null }),
        courseIds.length > 0
            ? admin.from('courses').select('id,title').in('id', courseIds)
            : Promise.resolve({ data: [], error: null }),
    ]);
    if (studentsResult.error) throw studentsResult.error;
    if (coursesResult.error) throw coursesResult.error;

    const emails = new Map((studentsResult.data || []).map((row) => [row.id, row.email]));
    const titles = new Map((coursesResult.data || []).map((row) => [row.id, row.title]));
    const progress = rows.map((row) => ({
        studentId: row.student_id,
        studentEmail: emails.get(row.student_id) || '',
        courseId: row.course_id,
        courseTitle: titles.get(row.course_id) || '',
        taskId: row.task_id,
        sectionId: row.section_id,
        completed: row.completed,
        completedAt: row.completed_at,
    }));

    const format = (queryValue(req, 'format') || 'json').toLowerCase();
    if (format === 'json') {
        return sendJson(res, 200, { exportedAt: new Date().toISOString(), progress });
    }
    if (format !== 'csv') throw new HttpError(400, 'Format musi mieć wartość json albo csv.', 'validation_error');

    const keys = ['studentId', 'studentEmail', 'courseId', 'courseTitle', 'taskId', 'sectionId', 'completed', 'completedAt'];
    const csv = [keys.map(csvCell).join(','), ...progress.map((row) => keys.map((key) => csvCell(row[key])).join(','))].join('\r\n');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="postep-${new Date().toISOString().slice(0, 10)}.csv"`);
    res.setHeader('Cache-Control', 'no-store');
    return res.end(`\uFEFF${csv}`);
}

async function inviteUser(body, admin, profile) {
    const email = cleanEmail(body.email);
    const role = cleanString(body.role || 'student', 'role', { max: 16 });
    if (!['student', 'teacher'].includes(role)) throw new HttpError(400, 'Dozwolona rola to student albo teacher.', 'validation_error');
    if (profile.role === 'teacher' && role !== 'student') {
        throw new HttpError(403, 'Nauczyciel może zapraszać tylko uczniów.', 'forbidden');
    }
    if (role === 'teacher') requireOwner(profile);

    let aiDailyLimit;
    if (body.aiDailyLimit !== undefined) aiDailyLimit = integerInRange(body.aiDailyLimit, 'aiDailyLimit', 0, 10000);

    let teacherId = null;
    if (role === 'student') {
        if (profile.role === 'teacher') teacherId = profile.id;
        else if (body.teacherId) {
            teacherId = cleanUuid(body.teacherId, 'teacherId');
            const teacher = await targetProfileById(admin, teacherId);
            if (teacher.role !== 'teacher') {
                throw new HttpError(400, 'Wybrany opiekun nie jest nauczycielem.', 'validation_error');
            }
        }
    }

    const { data, error } = await admin.auth.admin.inviteUserByEmail(email, authRedirectOptions());
    if (error || !data.user) {
        const duplicate = error && /already|registered|exists/i.test(error.message || '');
        throw new HttpError(duplicate ? 409 : 400, duplicate ? 'Konto z tym adresem już istnieje.' : 'Nie udało się wysłać zaproszenia.', duplicate ? 'user_exists' : 'invite_failed');
    }

    try {
        const profileRow = { id: data.user.id, email, role, status: 'invited' };
        if (aiDailyLimit !== undefined) profileRow.ai_daily_limit = aiDailyLimit;
        const { error: profileError } = await admin.from('profiles').upsert(profileRow, { onConflict: 'id' });
        if (profileError) throw profileError;

        if (teacherId) {
            const { error: linkError } = await admin.from('teacher_students').upsert({
                teacher_id: teacherId,
                student_id: data.user.id,
                created_by: profile.id,
            }, { onConflict: 'teacher_id,student_id' });
            if (linkError) throw linkError;
        }
    } catch (setupError) {
        await admin.auth.admin.deleteUser(data.user.id, false).catch(() => {});
        throw setupError;
    }

    await audit(admin, profile, `${role}.invited`, 'profile', data.user.id, data.user.id, { email, teacherId });
    return { ok: true, user: { id: data.user.id, email, role, status: 'invited', teacherId } };
}

async function sendAccountEmail(action, body, admin, profile) {
    const email = cleanEmail(body.email);
    const target = await targetProfileByEmail(admin, email);
    await assertCanManageTarget(admin, profile, target);
    const options = authRedirectOptions();

    if (action === 'resend-invite') {
        if (target.status !== 'invited') throw new HttpError(409, 'Konto nie oczekuje na przyjęcie zaproszenia.', 'not_invited');
        // Supabase pozwala wysłać ponowne zaproszenie istniejącemu,
        // niepotwierdzonemu użytkownikowi. Dzięki temu używany jest właściwy
        // szablon "Invite user", a nie szablon rejestracji publicznej.
        const { error } = await admin.auth.admin.inviteUserByEmail(email, options);
        if (error) throw new HttpError(400, 'Nie udało się ponownie wysłać zaproszenia.', 'resend_failed');
    } else {
        const { error } = await admin.auth.resetPasswordForEmail(email, { redirectTo: options.redirectTo });
        if (error) throw new HttpError(400, 'Nie udało się wysłać wiadomości do zmiany hasła.', 'reset_failed');
    }

    await audit(admin, profile, action === 'resend-invite' ? 'invite.resent' : 'password.reset_requested', 'profile', target.id, target.id, { email });
    return { ok: true };
}

async function setUserStatus(body, admin, profile) {
    const userId = cleanUuid(body.userId, 'userId');
    if (userId === profile.id) throw new HttpError(400, 'Nie możesz zawiesić własnego konta.', 'self_action_forbidden');
    if (typeof body.suspended !== 'boolean') throw new HttpError(400, 'Pole suspended musi być wartością logiczną.', 'validation_error');
    const target = await targetProfileById(admin, userId);
    await assertCanManageTarget(admin, profile, target);

    const { error: authError } = await admin.auth.admin.updateUserById(userId, {
        ban_duration: body.suspended ? '876600h' : 'none',
    });
    if (authError) throw new HttpError(400, 'Nie udało się zmienić stanu konta.', 'status_update_failed');

    const status = body.suspended ? 'suspended' : 'active';
    const { error } = await admin.from('profiles').update({ status }).eq('id', userId);
    if (error) throw error;
    await audit(admin, profile, body.suspended ? 'user.suspended' : 'user.reactivated', 'profile', userId, userId);
    return { ok: true, userId, status };
}

async function deleteUser(body, admin, profile) {
    const userId = cleanUuid(body.userId, 'userId');
    if (userId === profile.id) throw new HttpError(400, 'Nie możesz usunąć własnego konta.', 'self_action_forbidden');
    const target = await targetProfileById(admin, userId);
    await assertCanManageTarget(admin, profile, target);
    await audit(admin, profile, 'user.deleted', 'profile', userId, userId, { email: target.email, role: target.role });
    const { error } = await admin.auth.admin.deleteUser(userId, false);
    if (error) throw new HttpError(400, 'Nie udało się usunąć konta.', 'delete_failed');
    return { ok: true, userId };
}

async function assignCourse(body, admin, profile) {
    const studentId = cleanUuid(body.studentId, 'studentId');
    const courseId = cleanId(body.courseId, 'courseId');
    const student = await targetProfileById(admin, studentId);
    if (student.role !== 'student') throw new HttpError(400, 'Wybrany użytkownik nie jest uczniem.', 'validation_error');
    await assertCanManageTarget(admin, profile, student);

    const { data: course, error: courseError } = await admin
        .from('courses')
        .select('id,is_active')
        .eq('id', courseId)
        .maybeSingle();
    if (courseError) throw courseError;
    if (!course) throw new HttpError(404, 'Nie znaleziono kursu.', 'course_not_found');
    if (!course.is_active) throw new HttpError(409, 'Nie można przypisać nieaktywnego kursu.', 'course_inactive');

    const startsAt = optionalDate(body.startsAt, 'startsAt') || new Date().toISOString();
    const endsAt = optionalDate(body.endsAt, 'endsAt');
    if (endsAt && new Date(endsAt) <= new Date(startsAt)) {
        throw new HttpError(400, 'Data zakończenia musi być późniejsza od daty rozpoczęcia.', 'validation_error');
    }
    const { error } = await admin.from('enrollments').upsert({
        student_id: studentId,
        course_id: courseId,
        status: 'active',
        assigned_by: profile.id,
        starts_at: startsAt,
        ends_at: endsAt,
    }, { onConflict: 'student_id,course_id' });
    if (error) throw error;
    await audit(admin, profile, 'enrollment.upserted', 'enrollment', `${studentId}:${courseId}`, studentId, { courseId, startsAt, endsAt });
    return { ok: true, studentId, courseId, status: 'active', startsAt, endsAt };
}

async function revokeCourse(body, admin, profile) {
    const studentId = cleanUuid(body.studentId, 'studentId');
    const courseId = cleanId(body.courseId, 'courseId');
    const student = await targetProfileById(admin, studentId);
    await assertCanManageTarget(admin, profile, student);

    const { data, error } = await admin
        .from('enrollments')
        .update({ status: 'revoked' })
        .eq('student_id', studentId)
        .eq('course_id', courseId)
        .select('student_id')
        .maybeSingle();
    if (error) throw error;
    if (!data) throw new HttpError(404, 'Nie znaleziono przypisania kursu.', 'enrollment_not_found');
    await audit(admin, profile, 'enrollment.revoked', 'enrollment', `${studentId}:${courseId}`, studentId, { courseId });
    return { ok: true, studentId, courseId, status: 'revoked' };
}

async function setSectionAccess(body, admin, profile) {
    const studentId = cleanUuid(body.studentId, 'studentId');
    const courseId = cleanId(body.courseId, 'courseId');
    const sectionId = cleanId(body.sectionId, 'sectionId');
    if (typeof body.isUnlocked !== 'boolean') throw new HttpError(400, 'Pole isUnlocked musi być wartością logiczną.', 'validation_error');
    const student = await targetProfileById(admin, studentId);
    await assertCanManageTarget(admin, profile, student);
    await requireActiveEnrollment(admin, studentId, courseId);

    const { data: course, error: courseError } = await admin
        .from('courses')
        .select('content')
        .eq('id', courseId)
        .maybeSingle();
    if (courseError) throw courseError;
    const sectionExists = course && Array.isArray(course.content && course.content.sections)
        && course.content.sections.some((section) => section && section.id === sectionId);
    if (!sectionExists) throw new HttpError(404, 'Nie znaleziono działu w tym kursie.', 'section_not_found');

    const { error } = await admin.from('student_section_access').upsert({
        student_id: studentId,
        course_id: courseId,
        section_id: sectionId,
        is_unlocked: body.isUnlocked,
        granted_by: profile.id,
    }, { onConflict: 'student_id,course_id,section_id' });
    if (error) throw error;
    await audit(admin, profile, 'section.access_changed', 'course_section', `${courseId}:${sectionId}`, studentId, { courseId, sectionId, isUnlocked: body.isUnlocked });
    return { ok: true, studentId, courseId, sectionId, isUnlocked: body.isUnlocked };
}

async function setAiLimit(body, admin, profile) {
    const userId = cleanUuid(body.userId, 'userId');
    const dailyLimit = integerInRange(body.dailyLimit, 'dailyLimit', 0, 10000);
    const target = await targetProfileById(admin, userId);
    await assertCanManageTarget(admin, profile, target);
    const { error } = await admin.from('profiles').update({ ai_daily_limit: dailyLimit }).eq('id', userId);
    if (error) throw error;
    await audit(admin, profile, 'ai.limit_changed', 'profile', userId, userId, { dailyLimit });
    return { ok: true, userId, dailyLimit };
}

module.exports = async function handler(req, res) {
    try {
        if (!handleCors(req, res, ['GET', 'POST', 'PATCH', 'DELETE'])) return;
        if (!['GET', 'POST', 'PATCH', 'DELETE'].includes(req.method)) {
            res.setHeader('Allow', 'GET, POST, PATCH, DELETE, OPTIONS');
            return sendJson(res, 405, { error: 'Metoda niedozwolona.', code: 'method_not_allowed' });
        }

        const { admin, profile } = await requireAuth(req, { roles: ['owner', 'teacher'] });

        if (req.method === 'GET') {
            const action = cleanString(queryValue(req, 'action'), 'action', { max: 40 });
            if (action === 'students') return sendJson(res, 200, await listStudents(admin, profile));
            if (action === 'teachers') return sendJson(res, 200, await listTeachers(admin, profile));
            if (action === 'courses') return sendJson(res, 200, await listCourses(admin, profile));
            if (action === 'export-progress') return exportProgress(req, res, admin, profile);
            throw new HttpError(400, 'Nieznana akcja.', 'unknown_action');
        }

        const body = await readJsonBody(req, 64 * 1024);
        const action = cleanString(body.action || queryValue(req, 'action'), 'action', { max: 40 });

        if (req.method === 'POST') {
            let result;
            if (action === 'invite-user') result = await inviteUser(body, admin, profile);
            else if (action === 'resend-invite' || action === 'reset-password') result = await sendAccountEmail(action, body, admin, profile);
            else if (action === 'assign-course') result = await assignCourse(body, admin, profile);
            else if (action === 'revoke-course') result = await revokeCourse(body, admin, profile);
            else if (action === 'set-section-access') result = await setSectionAccess(body, admin, profile);
            else if (action === 'set-ai-limit') result = await setAiLimit(body, admin, profile);
            else throw new HttpError(400, 'Nieznana akcja.', 'unknown_action');
            return sendJson(res, 200, result);
        }

        if (req.method === 'PATCH' && ['set-user-status', 'suspend-user', 'reactivate-user'].includes(action)) {
            if (action === 'suspend-user') body.suspended = true;
            if (action === 'reactivate-user') body.suspended = false;
            return sendJson(res, 200, await setUserStatus(body, admin, profile));
        }
        if (req.method === 'DELETE' && action === 'delete-user') {
            return sendJson(res, 200, await deleteUser(body, admin, profile));
        }

        throw new HttpError(400, 'Akcja nie pasuje do metody HTTP.', 'invalid_action_method');
    } catch (error) {
        return sendError(res, error);
    }
};
