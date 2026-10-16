const {
    handleCors,
    requireAuth,
    sendError,
    sendJson,
} = require('./_supabase');

function groupValues(rows, keyName, valueName) {
    const grouped = new Map();
    for (const row of rows || []) {
        if (!grouped.has(row.course_id)) grouped.set(row.course_id, []);
        if (row[keyName]) grouped.get(row.course_id).push(row[valueName]);
    }
    return grouped;
}

function lockedSubchapter(subchapter) {
    return {
        id: subchapter && subchapter.id,
        title: subchapter && subchapter.title,
        icon: subchapter && subchapter.icon,
        desc: subchapter && subchapter.desc,
        isLocked: true,
        tasks: [],
    };
}

function contentForStudent(content, access) {
    if (!content || typeof content !== 'object') return {};
    const sections = Array.isArray(content.sections) ? content.sections : [];
    return {
        ...content,
        sections: sections.map((section) => {
            const unlocked = Boolean(section && section.id && access[section.id]) && !section.isComingSoon;
            if (unlocked) return { ...section, isLocked: false };
            return {
                id: section && section.id,
                title: section && section.title,
                icon: section && section.icon,
                badge: section && section.badge,
                desc: section && section.desc,
                isComingSoon: Boolean(section && section.isComingSoon),
                isLocked: true,
                tasks: [],
                subchapters: Array.isArray(section && section.subchapters)
                    ? section.subchapters.map(lockedSubchapter)
                    : [],
            };
        }),
    };
}

module.exports = async function handler(req, res) {
    try {
        if (!handleCors(req, res, ['GET'])) return;
        if (req.method !== 'GET') {
            res.setHeader('Allow', 'GET, OPTIONS');
            return sendJson(res, 405, { error: 'Metoda niedozwolona.', code: 'method_not_allowed' });
        }

        const { admin, profile } = await requireAuth(req);

        if (profile.role === 'owner' || profile.role === 'teacher') {
            let query = admin.from('courses').select('id,title,content,is_active').order('title');
            if (profile.role === 'teacher') query = query.eq('is_active', true);
            const { data: courses, error } = await query;
            if (error) throw error;
            return sendJson(res, 200, { courses: courses || [] });
        }

        const now = new Date().toISOString();
        const { data: enrollments, error: enrollmentError } = await admin
            .from('enrollments')
            .select('course_id,status,starts_at,ends_at')
            .eq('student_id', profile.id)
            .eq('status', 'active')
            .or(`starts_at.is.null,starts_at.lte.${now}`)
            .or(`ends_at.is.null,ends_at.gt.${now}`);
        if (enrollmentError) throw enrollmentError;

        const courseIds = [...new Set((enrollments || []).map((item) => item.course_id))];
        if (courseIds.length === 0) return sendJson(res, 200, { courses: [] });

        const [coursesResult, progressResult, accessResult] = await Promise.all([
            admin
                .from('courses')
                .select('id,title,content,is_active')
                .in('id', courseIds)
                .eq('is_active', true)
                .order('title'),
            admin
                .from('task_progress')
                .select('course_id,task_id')
                .eq('student_id', profile.id)
                .eq('completed', true)
                .in('course_id', courseIds),
            admin
                .from('student_section_access')
                .select('course_id,section_id,is_unlocked')
                .eq('student_id', profile.id)
                .in('course_id', courseIds),
        ]);

        if (coursesResult.error) throw coursesResult.error;
        if (progressResult.error) throw progressResult.error;
        if (accessResult.error) throw accessResult.error;

        const completedByCourse = groupValues(progressResult.data, 'task_id', 'task_id');
        const accessByCourse = new Map();
        for (const row of accessResult.data || []) {
            if (!accessByCourse.has(row.course_id)) accessByCourse.set(row.course_id, {});
            accessByCourse.get(row.course_id)[row.section_id] = Boolean(row.is_unlocked);
        }

        const courses = (coursesResult.data || []).map((course) => {
            const sectionAccess = accessByCourse.get(course.id) || {};
            return {
                ...course,
                content: contentForStudent(course.content, sectionAccess),
                completedTaskIds: completedByCourse.get(course.id) || [],
                sectionAccess,
            };
        });

        return sendJson(res, 200, { courses });
    } catch (error) {
        return sendError(res, error);
    }
};
