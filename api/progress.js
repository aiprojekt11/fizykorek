const {
    HttpError,
    cleanId,
    handleCors,
    queryValue,
    readJsonBody,
    requireActiveEnrollment,
    requireAuth,
    requireCourseTask,
    sendError,
    sendJson,
} = require('./_supabase');

async function assertSectionAvailable(admin, studentId, courseId, section) {
    if (section && section.isComingSoon) {
        throw new HttpError(403, 'Ten dział nie jest jeszcze dostępny.', 'section_unavailable');
    }
    if (!section || !section.id) return;

    const { data, error } = await admin
        .from('student_section_access')
        .select('is_unlocked')
        .eq('student_id', studentId)
        .eq('course_id', courseId)
        .eq('section_id', section.id)
        .maybeSingle();
    if (error) throw new HttpError(500, 'Nie udało się sprawdzić dostępu do działu.', 'section_access_failed');
    if (!data || !data.is_unlocked) {
        throw new HttpError(403, 'Ten dział został zablokowany przez nauczyciela.', 'section_locked');
    }
}

module.exports = async function handler(req, res) {
    try {
        if (!handleCors(req, res, ['GET', 'PUT', 'DELETE'])) return;
        if (!['GET', 'PUT', 'DELETE'].includes(req.method)) {
            res.setHeader('Allow', 'GET, PUT, DELETE, OPTIONS');
            return sendJson(res, 405, { error: 'Metoda niedozwolona.', code: 'method_not_allowed' });
        }

        const { admin, profile } = await requireAuth(req, { roles: ['student'] });

        if (req.method === 'GET') {
            const courseId = cleanId(queryValue(req, 'courseId'), 'courseId');
            await requireActiveEnrollment(admin, profile.id, courseId);

            const { data, error } = await admin
                .from('task_progress')
                .select('task_id')
                .eq('student_id', profile.id)
                .eq('course_id', courseId)
                .eq('completed', true);
            if (error) throw error;

            return sendJson(res, 200, {
                courseId,
                completedTaskIds: (data || []).map((row) => row.task_id),
            });
        }

        const body = await readJsonBody(req, 16 * 1024);
        const courseId = cleanId(body.courseId, 'courseId');
        const taskId = cleanId(body.taskId, 'taskId');
        await requireActiveEnrollment(admin, profile.id, courseId);
        const { section } = await requireCourseTask(admin, courseId, taskId);
        await assertSectionAvailable(admin, profile.id, courseId, section);

        if (req.method === 'PUT') {
            if (body.completed !== undefined && body.completed !== true) {
                throw new HttpError(400, 'Dla PUT pole completed musi mieć wartość true.', 'validation_error');
            }
            const completedAt = new Date().toISOString();
            const { error } = await admin.from('task_progress').upsert({
                student_id: profile.id,
                course_id: courseId,
                task_id: taskId,
                section_id: section && section.id ? section.id : null,
                completed: true,
                completed_at: completedAt,
            }, { onConflict: 'student_id,course_id,task_id' });
            if (error) throw error;

            return sendJson(res, 200, {
                ok: true,
                courseId,
                taskId,
                completed: true,
                completedAt,
            });
        }

        const { error } = await admin
            .from('task_progress')
            .delete()
            .eq('student_id', profile.id)
            .eq('course_id', courseId)
            .eq('task_id', taskId);
        if (error) throw error;

        return sendJson(res, 200, { ok: true, courseId, taskId, completed: false });
    } catch (error) {
        return sendError(res, error);
    }
};
