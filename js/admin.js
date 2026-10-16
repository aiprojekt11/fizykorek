/**
 * FizyKorek - kontroler panelu nauczyciela / właściciela.
 *
 * Wszystkie dane pochodzące z API są wstawiane przez textContent. Moduł nie
 * używa innerHTML, dzięki czemu adres e-mail ani inne pola użytkownika nie są
 * interpretowane jako kod HTML.
 */
(function initializeFizyKorekAdminModule() {
    'use strict';

    const ADMIN_ENDPOINT = '/api/admin';
    const STAFF_ROLES = new Set(['owner', 'teacher']);
    const state = {
        initialized: false,
        open: false,
        loading: false,
        students: [],
        teachers: [],
        courses: [],
        progress: []
    };

    const publicApi = {
        open,
        close,
        refresh,
        loadProgressDetail,
        exportProgressCsv
    };
    window.FizyKorekAdmin = Object.freeze(publicApi);

    window.addEventListener('auth-ready', handleAuthReady);
    window.addEventListener('auth-signed-out', handleSignedOut);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
    } else {
        bootstrap();
    }

    function auth() {
        return window.FizyKorekAuth;
    }

    function byId(id) {
        return document.getElementById(id);
    }

    function bootstrap() {
        bindDomEvents();
        const currentAuth = auth();
        if (currentAuth?.isReady) handleAuthReady({ detail: { profile: currentAuth.profile } });
        else close();
    }

    function handleAuthReady(event) {
        const profile = event?.detail?.profile || auth()?.profile;
        const allowed = STAFF_ROLES.has(profile?.role);
        const openButton = byId('adminOpenBtn');
        if (openButton) setHidden(openButton, !allowed);
        if (!allowed) close();
        state.initialized = allowed;
    }

    function handleSignedOut() {
        state.initialized = false;
        state.students = [];
        state.teachers = [];
        state.courses = [];
        state.progress = [];
        clearAdminViews();
        close();
    }

    function bindDomEvents() {
        const openButton = byId('adminOpenBtn');
        if (openButton && !openButton.dataset.adminBound) {
            openButton.dataset.adminBound = 'true';
            openButton.addEventListener('click', () => open().catch(showError));
        }

        const closeButton = byId('adminCloseBtn');
        if (closeButton && !closeButton.dataset.adminBound) {
            closeButton.dataset.adminBound = 'true';
            closeButton.addEventListener('click', close);
        }

        const refreshButton = byId('adminRefreshBtn');
        if (refreshButton && !refreshButton.dataset.adminBound) {
            refreshButton.dataset.adminBound = 'true';
            refreshButton.addEventListener('click', () => refresh().catch(showError));
        }

        bindForm('inviteUserForm', handleInviteSubmit);
        bindForm('adminAssignmentForm', handleAssignmentSubmit);
        bindForm('adminAiLimitForm', handleAiLimitSubmit);
        bindForm('adminSectionAccessForm', handleSectionAccessSubmit);

        const progressSelect = byId('adminProgressStudentSelect');
        if (progressSelect && !progressSelect.dataset.adminBound) {
            progressSelect.dataset.adminBound = 'true';
            progressSelect.addEventListener('change', () => {
                loadProgressDetail(progressSelect.value || undefined).catch(showError);
            });
        }

        const exportButton = byId('adminExportCsvBtn');
        if (exportButton && !exportButton.dataset.adminBound) {
            exportButton.dataset.adminBound = 'true';
            exportButton.addEventListener('click', () => {
                const studentId = byId('adminProgressStudentSelect')?.value || undefined;
                exportProgressCsv(studentId, exportButton).catch(showError);
            });
        }

        const panel = byId('adminPanel');
        if (panel && !panel.dataset.adminActionsBound) {
            panel.dataset.adminActionsBound = 'true';
            panel.addEventListener('click', handleDelegatedAction);
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && state.open) close();
        });
    }

    function bindForm(id, handler) {
        const form = byId(id);
        if (!form || form.dataset.adminBound) return;
        form.dataset.adminBound = 'true';
        form.addEventListener('submit', handler);
    }

    async function open() {
        requireStaff();
        const panel = byId('adminPanel');
        setHidden(panel, false);
        panel?.setAttribute('aria-modal', 'true');
        state.open = true;
        await refresh();
        byId('adminCloseBtn')?.focus();
    }

    function close() {
        const panel = byId('adminPanel');
        setHidden(panel, true);
        panel?.setAttribute('aria-modal', 'false');
        state.open = false;
    }

    async function refresh() {
        requireStaff();
        if (state.loading) return;
        state.loading = true;
        setStatus('Odświeżam dane panelu…', 'loading');
        setGlobalBusy(true);

        try {
            const profile = auth().profile;
            const requests = [
                getAdminCollection('students', 'students'),
                getAdminCollection('courses', 'courses')
            ];
            if (profile.role === 'owner') {
                requests.push(getAdminCollection('teachers', 'teachers'));
            }

            const results = await Promise.all(requests);
            state.students = results[0];
            state.courses = results[1];
            state.teachers = profile.role === 'owner' ? results[2] : [];

            renderStudents();
            renderCourses();
            renderTeachers();
            populateFormOptions();
            setStatus('Dane są aktualne.', 'success');
        } catch (error) {
            showError(error);
            throw error;
        } finally {
            state.loading = false;
            setGlobalBusy(false);
        }
    }

    async function getAdminCollection(action, property) {
        const response = await auth().apiFetch(
            `${ADMIN_ENDPOINT}?action=${encodeURIComponent(action)}`,
            { method: 'GET', cache: 'no-store' }
        );
        const payload = await readJson(response);
        return Array.isArray(payload[property]) ? payload[property] : [];
    }

    async function handleInviteSubmit(event) {
        event.preventDefault();
        requireStaff();
        const form = event.currentTarget;
        const email = byId('inviteEmail')?.value.trim() || '';
        const role = byId('inviteRole')?.value || 'student';
        const teacherId = byId('inviteTeacherId')?.value || undefined;

        if (!email) return setStatus('Wpisz adres e-mail zapraszanej osoby.', 'error');
        if (!['student', 'teacher'].includes(role)) return setStatus('Wybierz prawidłową rolę.', 'error');
        if (role === 'teacher' && auth().profile?.role !== 'owner') {
            return setStatus('Tylko właściciel może zapraszać nauczycieli.', 'error');
        }

        await withFormBusy(form, async () => {
            await mutate('POST', {
                action: 'invite-user',
                email,
                role,
                ...(teacherId ? { teacherId } : {})
            });
            form.reset();
            setStatus(`Zaproszenie dla ${email} zostało wysłane.`, 'success');
            await refresh();
        });
    }

    async function handleAssignmentSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const studentId = byId('assignmentStudentId')?.value || '';
        const courseId = byId('assignmentCourseId')?.value || '';
        const mode = form.querySelector('[name="assignmentMode"]:checked')?.value
            || byId('assignmentMode')?.value
            || 'assign';

        if (!studentId || !courseId) return setStatus('Wybierz ucznia i kurs.', 'error');

        await withFormBusy(form, async () => {
            await mutate('POST', {
                action: mode === 'revoke' ? 'revoke-course' : 'assign-course',
                studentId,
                courseId
            });
            setStatus(mode === 'revoke' ? 'Dostęp do kursu został odebrany.' : 'Kurs został przypisany.', 'success');
            await refresh();
        });
    }

    async function handleAiLimitSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const userId = byId('aiLimitUserId')?.value || '';
        const dailyLimit = parseNonNegativeInteger(byId('aiDailyLimit')?.value);
        if (!userId || dailyLimit === null) {
            return setStatus('Wybierz użytkownika i wpisz prawidłowy limit dzienny.', 'error');
        }

        await withFormBusy(form, async () => {
            await setAiLimit(userId, dailyLimit);
            setStatus('Dzienny limit AI został zapisany.', 'success');
            await refresh();
        });
    }

    async function handleSectionAccessSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const studentId = byId('sectionAccessStudentId')?.value || '';
        const courseId = byId('sectionAccessCourseId')?.value || '';
        const sectionId = byId('sectionAccessSectionId')?.value.trim() || '';
        const checkbox = byId('sectionAccessUnlocked');
        const isUnlocked = checkbox ? checkbox.checked : true;
        if (!studentId || !courseId || !sectionId) {
            return setStatus('Wybierz ucznia, kurs i podaj identyfikator działu.', 'error');
        }

        await withFormBusy(form, async () => {
            await mutate('POST', {
                action: 'set-section-access',
                studentId,
                courseId,
                sectionId,
                isUnlocked
            });
            setStatus(isUnlocked ? 'Dział został odblokowany.' : 'Dział został zablokowany.', 'success');
        });
    }

    async function handleDelegatedAction(event) {
        const button = event.target.closest('[data-admin-action]');
        const panel = byId('adminPanel');
        if (!button || (panel && !panel.contains(button))) return;

        const action = button.dataset.adminAction;
        const userId = button.dataset.userId || '';
        const email = button.dataset.email || '';
        const courseId = button.dataset.courseId || '';

        try {
            setButtonBusy(button, true);
            switch (action) {
                case 'resend-invite':
                    await mutate('POST', { action, email });
                    setStatus(`Ponownie wysłano zaproszenie do ${email}.`, 'success');
                    break;
                case 'reset-password':
                    await mutate('POST', { action, email });
                    setStatus(`Wysłano wiadomość do zmiany hasła na ${email}.`, 'success');
                    break;
                case 'toggle-suspension': {
                    const suspended = button.dataset.suspended !== 'true';
                    await mutate('PATCH', { action: 'set-user-status', userId, suspended });
                    setStatus(suspended ? 'Konto zostało zawieszone.' : 'Konto zostało aktywowane.', 'success');
                    await refresh();
                    break;
                }
                case 'delete-user':
                    if (!window.confirm(`Usunąć konto ${email}? Tej operacji nie można cofnąć.`)) return;
                    await mutate('DELETE', { action, userId });
                    setStatus(`Konto ${email} zostało usunięte.`, 'success');
                    await refresh();
                    break;
                case 'revoke-course':
                    await mutate('POST', { action, studentId: userId, courseId });
                    setStatus('Dostęp do kursu został odebrany.', 'success');
                    await refresh();
                    break;
                case 'show-progress':
                    setProgressStudentSelection(userId);
                    await loadProgressDetail(userId);
                    break;
                case 'set-ai-limit': {
                    const input = button.closest('[data-admin-user-row]')?.querySelector('.admin-ai-limit-input');
                    const dailyLimit = parseNonNegativeInteger(input?.value);
                    if (dailyLimit === null) throw new Error('Limit musi być liczbą całkowitą równą 0 lub większą.');
                    await setAiLimit(userId, dailyLimit);
                    setStatus('Dzienny limit AI został zapisany.', 'success');
                    await refresh();
                    break;
                }
                default:
                    return;
            }
        } catch (error) {
            showError(error);
        } finally {
            setButtonBusy(button, false);
        }
    }

    async function setAiLimit(userId, dailyLimit) {
        await mutate('POST', { action: 'set-ai-limit', userId, dailyLimit });
    }

    async function mutate(method, body) {
        requireStaff();
        const response = await auth().apiFetch(ADMIN_ENDPOINT, { method, body });
        return readJson(response);
    }

    async function loadProgressDetail(studentId) {
        requireStaff();
        setStatus('Ładuję postęp…', 'loading');
        const params = new URLSearchParams({ action: 'export-progress', format: 'json' });
        if (studentId) params.set('studentId', studentId);

        const response = await auth().apiFetch(`${ADMIN_ENDPOINT}?${params.toString()}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const payload = await readJson(response);
        state.progress = Array.isArray(payload.progress) ? payload.progress : [];
        renderProgress(state.progress, payload.exportedAt);
        setStatus(`Wczytano ${state.progress.length} wpisów postępu.`, 'success');
        return state.progress;
    }

    async function exportProgressCsv(studentId, sourceButton) {
        requireStaff();
        setButtonBusy(sourceButton, true, 'Eksportuję…');
        try {
            const params = new URLSearchParams({ action: 'export-progress', format: 'csv' });
            if (studentId) params.set('studentId', studentId);
            const response = await auth().apiFetch(`${ADMIN_ENDPOINT}?${params.toString()}`, {
                method: 'GET',
                headers: { Accept: 'text/csv' },
                cache: 'no-store'
            });
            if (!response.ok) await readJson(response);

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `fizykorek-postep-${new Date().toISOString().slice(0, 10)}.csv`;
            link.hidden = true;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.setTimeout(() => URL.revokeObjectURL(url), 1000);
            setStatus('Plik CSV został przygotowany.', 'success');
        } finally {
            setButtonBusy(sourceButton, false);
        }
    }

    function renderStudents() {
        const container = byId('adminStudentsList');
        if (!container) return;
        const fragment = document.createDocumentFragment();

        if (state.students.length === 0) {
            fragment.appendChild(emptyState('Brak uczniów. Zaproś pierwszą osobę.'));
        }

        state.students.forEach((student) => {
            const row = element('article', 'admin-user-row');
            row.dataset.adminUserRow = 'true';

            const heading = element('div', 'admin-user-heading');
            heading.appendChild(element('strong', 'admin-user-email', safeString(student.email, 'Brak adresu e-mail')));
            heading.appendChild(badge(safeString(student.status, 'unknown')));
            row.appendChild(heading);

            const completedCount = Array.isArray(student.completedTasks) ? student.completedTasks.length : 0;
            row.appendChild(element(
                'p',
                'admin-user-meta',
                `Ukończone zadania: ${completedCount} · Limit AI: ${numberOrZero(student.aiDailyLimit)}/dzień`
            ));

            const enrollmentList = element('div', 'admin-enrollment-list');
            const enrollments = Array.isArray(student.enrollments) ? student.enrollments : [];
            if (enrollments.length === 0) {
                enrollmentList.appendChild(element('span', 'admin-muted', 'Brak przypisanego kursu'));
            } else {
                enrollments.forEach((enrollment) => {
                    const courseId = safeString(enrollment.courseId || enrollment.course_id);
                    const item = element('div', 'admin-enrollment-item');
                    item.appendChild(element('span', '', `${courseTitle(courseId)} (${safeString(enrollment.status, 'active')})`));
                    if (enrollment.status !== 'revoked') {
                        item.appendChild(actionButton('Odbierz dostęp', 'revoke-course', {
                            userId: student.id,
                            courseId
                        }));
                    }
                    enrollmentList.appendChild(item);
                });
            }
            row.appendChild(enrollmentList);

            const limitRow = element('div', 'admin-inline-form');
            const limitLabel = element('label', '', 'Limit AI');
            const limitInput = document.createElement('input');
            limitInput.className = 'admin-ai-limit-input';
            limitInput.type = 'number';
            limitInput.min = '0';
            limitInput.step = '1';
            limitInput.value = String(numberOrZero(student.aiDailyLimit));
            limitInput.setAttribute('aria-label', `Dzienny limit AI dla ${safeString(student.email)}`);
            limitLabel.appendChild(limitInput);
            limitRow.appendChild(limitLabel);
            limitRow.appendChild(actionButton('Zapisz limit', 'set-ai-limit', { userId: student.id }));
            row.appendChild(limitRow);

            const actions = element('div', 'admin-user-actions');
            if (student.status === 'invited') {
                actions.appendChild(actionButton('Wyślij zaproszenie ponownie', 'resend-invite', {
                    email: student.email
                }));
            } else {
                actions.appendChild(actionButton('Wyślij zmianę hasła', 'reset-password', {
                    email: student.email
                }));
            }
            actions.appendChild(actionButton(
                student.status === 'suspended' ? 'Aktywuj konto' : 'Zawieś konto',
                'toggle-suspension',
                { userId: student.id, suspended: student.status === 'suspended' ? 'true' : 'false' }
            ));
            actions.appendChild(actionButton('Pokaż postęp', 'show-progress', { userId: student.id }));
            actions.appendChild(actionButton('Usuń konto', 'delete-user', {
                userId: student.id,
                email: student.email
            }, 'danger'));
            row.appendChild(actions);
            fragment.appendChild(row);
        });

        container.replaceChildren(fragment);
    }

    function renderTeachers() {
        const container = byId('adminTeachersList');
        if (!container) return;
        const fragment = document.createDocumentFragment();
        const owner = auth().profile?.role === 'owner';
        setHidden(container.closest('[data-admin-owner-only]'), !owner);

        if (!owner) {
            container.replaceChildren();
            return;
        }
        if (state.teachers.length === 0) fragment.appendChild(emptyState('Brak dodatkowych nauczycieli.'));

        state.teachers.forEach((teacher) => {
            const row = element('article', 'admin-user-row');
            row.dataset.adminUserRow = 'true';
            const heading = element('div', 'admin-user-heading');
            heading.appendChild(element('strong', '', safeString(teacher.email, 'Brak adresu e-mail')));
            heading.appendChild(badge(safeString(teacher.status, 'unknown')));
            row.appendChild(heading);
            row.appendChild(element(
                'p',
                'admin-user-meta',
                `Uczniowie: ${numberOrZero(teacher.studentCount)} · Limit AI: ${numberOrZero(teacher.aiDailyLimit)}/dzień`
            ));

            const actions = element('div', 'admin-user-actions');
            if (teacher.status === 'invited') {
                actions.appendChild(actionButton('Wyślij zaproszenie ponownie', 'resend-invite', { email: teacher.email }));
            } else {
                actions.appendChild(actionButton('Wyślij zmianę hasła', 'reset-password', { email: teacher.email }));
            }
            actions.appendChild(actionButton(
                teacher.status === 'suspended' ? 'Aktywuj konto' : 'Zawieś konto',
                'toggle-suspension',
                { userId: teacher.id, suspended: teacher.status === 'suspended' ? 'true' : 'false' }
            ));
            actions.appendChild(actionButton('Usuń konto', 'delete-user', {
                userId: teacher.id,
                email: teacher.email
            }, 'danger'));
            row.appendChild(actions);
            fragment.appendChild(row);
        });
        container.replaceChildren(fragment);
    }

    function renderCourses() {
        const container = byId('adminCoursesList');
        if (!container) return;
        const fragment = document.createDocumentFragment();
        if (state.courses.length === 0) fragment.appendChild(emptyState('Brak kursów.'));

        state.courses.forEach((course) => {
            const row = element('article', 'admin-course-row');
            const heading = element('div', 'admin-user-heading');
            heading.appendChild(element('strong', '', safeString(course.title, course.id)));
            heading.appendChild(badge(course.isActive === false ? 'nieaktywny' : 'aktywny'));
            row.appendChild(heading);
            row.appendChild(element(
                'p',
                'admin-user-meta',
                `ID: ${safeString(course.id)} · Przypisani uczniowie: ${numberOrZero(course.enrollmentCount)}`
            ));
            fragment.appendChild(row);
        });
        container.replaceChildren(fragment);
    }

    function renderProgress(progress, exportedAt) {
        const container = byId('adminProgressDetail');
        if (!container) return;
        const fragment = document.createDocumentFragment();
        if (exportedAt) {
            fragment.appendChild(element('p', 'admin-muted', `Stan na: ${formatDate(exportedAt)}`));
        }
        if (progress.length === 0) {
            fragment.appendChild(emptyState('Ten uczeń nie ukończył jeszcze żadnego zadania.'));
            container.replaceChildren(fragment);
            return;
        }

        const table = element('table', 'admin-progress-table');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        ['Uczeń', 'Kurs', 'Dział', 'Zadanie', 'Status', 'Data'].forEach((title) => {
            headerRow.appendChild(element('th', '', title));
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        progress.forEach((entry) => {
            const row = document.createElement('tr');
            const values = [
                entry.studentEmail || entry.studentId,
                entry.courseTitle || entry.courseId,
                entry.sectionId,
                entry.taskId,
                entry.completed ? 'Ukończone' : 'Nieukończone',
                entry.completedAt ? formatDate(entry.completedAt) : '—'
            ];
            values.forEach((value) => row.appendChild(element('td', '', safeString(value, '—'))));
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        fragment.appendChild(table);
        container.replaceChildren(fragment);
    }

    function populateFormOptions() {
        populateSelect('assignmentStudentId', state.students, 'Wybierz ucznia', (item) => item.id, (item) => item.email);
        populateSelect('sectionAccessStudentId', state.students, 'Wybierz ucznia', (item) => item.id, (item) => item.email);
        populateSelect('assignmentCourseId', state.courses, 'Wybierz kurs', (item) => item.id, (item) => item.title || item.id);
        populateSelect('sectionAccessCourseId', state.courses, 'Wybierz kurs', (item) => item.id, (item) => item.title || item.id);
        populateSelect(
            'aiLimitUserId',
            [...state.students, ...state.teachers],
            'Wybierz użytkownika',
            (item) => item.id,
            (item) => item.email
        );
        populateSelect('inviteTeacherId', state.teachers, 'Przypisz do mnie', (item) => item.id, (item) => item.email);
        populateSelect(
            'adminProgressStudentSelect',
            state.students,
            'Wszyscy uczniowie',
            (item) => item.id,
            (item) => item.email,
            true
        );

        const inviteRole = byId('inviteRole');
        if (inviteRole) {
            Array.from(inviteRole.options).forEach((option) => {
                if (option.value === 'teacher') option.disabled = auth().profile?.role !== 'owner';
            });
            if (inviteRole.value === 'teacher' && auth().profile?.role !== 'owner') inviteRole.value = 'student';
        }
    }

    function populateSelect(id, items, placeholder, valueGetter, labelGetter, preserveValue) {
        const select = byId(id);
        if (!select) return;
        const oldValue = preserveValue ? select.value : '';
        const fragment = document.createDocumentFragment();
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = placeholder;
        fragment.appendChild(emptyOption);

        items.forEach((item) => {
            const value = safeString(valueGetter(item));
            if (!value) return;
            const option = document.createElement('option');
            option.value = value;
            option.textContent = safeString(labelGetter(item), value);
            fragment.appendChild(option);
        });
        select.replaceChildren(fragment);
        if (oldValue && items.some((item) => safeString(valueGetter(item)) === oldValue)) select.value = oldValue;
    }

    function setProgressStudentSelection(studentId) {
        const select = byId('adminProgressStudentSelect');
        if (select) select.value = studentId;
    }

    function courseTitle(courseId) {
        return state.courses.find((course) => course.id === courseId)?.title || courseId || 'Nieznany kurs';
    }

    function actionButton(label, action, data, variant) {
        const button = element('button', `admin-action-btn${variant ? ` ${variant}` : ''}`, label);
        button.type = 'button';
        button.dataset.adminAction = action;
        Object.entries(data || {}).forEach(([key, value]) => {
            if (value !== undefined && value !== null) button.dataset[key] = String(value);
        });
        return button;
    }

    function badge(text) {
        return element('span', `admin-status-badge status-${cssToken(text)}`, text);
    }

    function emptyState(text) {
        return element('p', 'admin-empty-state', text);
    }

    function element(tagName, className, text) {
        const node = document.createElement(tagName);
        if (className) node.className = className;
        if (text !== undefined && text !== null) node.textContent = String(text);
        return node;
    }

    function setHidden(element, hidden) {
        if (!element) return;
        element.hidden = Boolean(hidden);
        element.classList.toggle('hidden', Boolean(hidden));
        element.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    }

    function setStatus(message, kind) {
        const target = byId('adminStatus');
        if (!target) return;
        target.textContent = message || '';
        target.dataset.kind = kind || 'info';
        target.hidden = !message;
    }

    function setGlobalBusy(busy) {
        const panel = byId('adminPanel');
        if (panel) panel.setAttribute('aria-busy', busy ? 'true' : 'false');
        const refreshButton = byId('adminRefreshBtn');
        if (refreshButton) refreshButton.disabled = Boolean(busy);
    }

    function setButtonBusy(button, busy, busyText) {
        if (!button) return;
        if (busy) {
            button.dataset.idleText = button.textContent;
            if (busyText) button.textContent = busyText;
        } else if (button.dataset.idleText) {
            button.textContent = button.dataset.idleText;
            delete button.dataset.idleText;
        }
        button.disabled = Boolean(busy);
        button.setAttribute('aria-busy', busy ? 'true' : 'false');
    }

    async function withFormBusy(form, operation) {
        const submitButton = form.querySelector('[type="submit"]');
        setButtonBusy(submitButton, true, 'Zapisywanie…');
        try {
            await operation();
        } catch (error) {
            showError(error);
        } finally {
            setButtonBusy(submitButton, false);
        }
    }

    async function readJson(response) {
        const contentType = response.headers.get('content-type') || '';
        let payload = {};
        if (contentType.includes('application/json')) {
            payload = await response.json().catch(() => ({}));
        } else {
            const text = await response.text().catch(() => '');
            payload = text ? { error: text } : {};
        }

        if (!response.ok) {
            throw new Error(payload.error || payload.message || `Błąd serwera (${response.status}).`);
        }
        return payload;
    }

    function requireStaff() {
        const currentAuth = auth();
        if (!currentAuth?.isReady || !STAFF_ROLES.has(currentAuth.profile?.role)) {
            close();
            throw new Error('Brak uprawnień do panelu nauczyciela.');
        }
    }

    function showError(error) {
        console.error('FizyKorek admin:', error);
        setStatus(error?.message || 'Nie udało się wykonać operacji.', 'error');
    }

    function clearAdminViews() {
        ['adminStudentsList', 'adminTeachersList', 'adminCoursesList', 'adminProgressDetail'].forEach((id) => {
            byId(id)?.replaceChildren();
        });
    }

    function parseNonNegativeInteger(value) {
        const number = Number(value);
        if (!Number.isInteger(number) || number < 0) return null;
        return number;
    }

    function numberOrZero(value) {
        const number = Number(value);
        return Number.isFinite(number) && number >= 0 ? number : 0;
    }

    function safeString(value, fallback) {
        if (value === undefined || value === null || value === '') return fallback || '';
        return String(value);
    }

    function cssToken(value) {
        return safeString(value, 'unknown').toLowerCase().replace(/[^a-z0-9_-]/g, '-');
    }

    function formatDate(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '—';
        return new Intl.DateTimeFormat('pl-PL', {
            dateStyle: 'short',
            timeStyle: 'short'
        }).format(date);
    }
})();
