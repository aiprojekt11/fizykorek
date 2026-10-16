/**
 * FizyKorek - klient uwierzytelniania i danych ucznia.
 *
 * Wymaga Supabase JS v2 w wariancie UMD, załadowanego przed tym plikiem:
 * https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2
 *
 * Moduł celowo uruchamia aplikację w trybie fail-closed. Dopóki sesja,
 * profil, przypisane kursy i postęp nie zostaną zweryfikowane, chroniona
 * część interfejsu pozostaje ukryta.
 */
(function initializeFizyKorekAuthModule() {
    'use strict';

    const CONFIG_ENDPOINT = '/api/config';
    const COURSES_ENDPOINT = '/api/courses';
    const PROGRESS_ENDPOINT = '/api/progress';
    const STORAGE_PREFIX = 'fizykorek:user:';
    const ALLOWED_ROLES = new Set(['owner', 'teacher', 'student']);
    const AUTH_QUERY_KEYS = new Set([
        'access_token',
        'refresh_token',
        'expires_in',
        'expires_at',
        'token_type',
        'type',
        'code',
        'token_hash',
        'error',
        'error_code',
        'error_description'
    ]);

    const EVENTS = Object.freeze({
        ready: 'auth-ready',
        signedOut: 'auth-signed-out',
        error: 'auth-error',
        progressChanged: 'progress-changed'
    });

    const state = {
        client: null,
        session: null,
        user: null,
        profile: null,
        courses: Object.create(null),
        completedTaskIds: new Set(),
        completedTaskIdsByCourse: new Map(),
        ready: false,
        initialized: false,
        initializationError: null,
        loadedAccessToken: null
    };

    let authSubscription = null;
    let initializationPromise = null;
    let sessionWork = Promise.resolve();
    let sessionGeneration = 0;
    let credentialFlow = detectCredentialFlow();
    let credentialFlowCompleted = false;
    const progressWrites = new Map();

    // Nie pozwalamy, aby dane kursu osadzone w stronie były dostępne przed
    // zweryfikowaniem przypisania po stronie serwera.
    window.FIZYKOREK_COURSES = Object.create(null);

    class FizyKorekApiError extends Error {
        constructor(message, status, payload) {
            super(message);
            this.name = 'FizyKorekApiError';
            this.status = status;
            this.payload = payload;
        }
    }

    const publicApi = {
        EVENTS,
        FizyKorekApiError,
        init,
        signIn,
        signOut,
        requestPasswordReset,
        updatePassword,
        getAccessToken,
        apiFetch,
        setTaskCompleted,
        getCompletedTaskIds,
        namespaceKey,
        storage: Object.freeze({
            getItem: privateStorageGet,
            setItem: privateStorageSet,
            removeItem: privateStorageRemove
        })
    };

    Object.defineProperties(publicApi, {
        client: { enumerable: true, get: () => state.client },
        session: { enumerable: true, get: () => state.session },
        user: { enumerable: true, get: () => state.user },
        profile: { enumerable: true, get: () => state.profile },
        courses: { enumerable: true, get: () => state.courses },
        completedTaskIds: {
            enumerable: true,
            get: () => new Set(state.completedTaskIds)
        },
        isReady: { enumerable: true, get: () => state.ready },
        initializationError: {
            enumerable: true,
            get: () => state.initializationError
        }
    });

    window.FizyKorekAuth = Object.freeze(publicApi);
    setProtectedUiVisible(false);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init().catch(reportInitializationError);
        }, { once: true });
    } else {
        init().catch(reportInitializationError);
    }

    function byId(id) {
        return document.getElementById(id);
    }

    function setHidden(element, hidden) {
        if (!element) return;
        element.hidden = Boolean(hidden);
        element.classList.toggle('hidden', Boolean(hidden));
        element.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    }

    function getProtectedElements() {
        const shell = byId('appShell');
        if (shell) return [shell];

        return [byId('appHeader'), document.querySelector('main')].filter(Boolean);
    }

    function setProtectedUiVisible(visible) {
        getProtectedElements().forEach((element) => setHidden(element, !visible));
        document.documentElement.classList.toggle('auth-pending', !visible);
        if (document.body) {
            document.body.dataset.authState = visible ? 'authenticated' : 'locked';
        }
    }

    function showAuthScreen(mode, message) {
        const authView = byId('authView');
        const loginForm = byId('loginForm');
        const setPasswordForm = byId('setPasswordForm');
        const forgotPasswordForm = byId('forgotPasswordForm');

        setProtectedUiVisible(false);
        setHidden(authView, false);
        setHidden(loginForm, mode !== 'login');
        setHidden(setPasswordForm, mode !== 'set-password');
        setHidden(forgotPasswordForm, mode !== 'forgot-password');

        if (authView) authView.dataset.authMode = mode;
        setStatus(message || '', mode === 'error' ? 'error' : 'info');
    }

    function showApplication() {
        setHidden(byId('authView'), true);
        setProtectedUiVisible(true);

        const email = byId('currentUserEmail');
        if (email) email.textContent = state.profile?.email || state.user?.email || '';

        const adminOpenButton = byId('adminOpenBtn');
        if (adminOpenButton) {
            adminOpenButton.hidden = !isStaffProfile(state.profile);
            adminOpenButton.classList.toggle('hidden', !isStaffProfile(state.profile));
        }
    }

    function setStatus(message, kind) {
        const status = byId('authStatus');
        if (!status) return;
        status.textContent = message || '';
        status.dataset.kind = kind || 'info';
        status.hidden = !message;
    }

    function setFormError(id, message) {
        const target = byId(id);
        if (!target) {
            if (message) setStatus(message, 'error');
            return;
        }
        target.textContent = message || '';
        target.hidden = !message;
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

    async function init() {
        if (initializationPromise) return initializationPromise;

        initializationPromise = (async () => {
            window.FIZYKOREK_COURSES = Object.create(null);
            bindDomEvents();
            showAuthScreen('loading', 'Sprawdzam bezpieczną sesję…');

            const sdk = window.supabase;
            if (!sdk || typeof sdk.createClient !== 'function') {
                throw new Error('Nie udało się załadować modułu bezpiecznego logowania.');
            }

            const response = await fetch(CONFIG_ENDPOINT, {
                method: 'GET',
                credentials: 'same-origin',
                cache: 'no-store',
                headers: { Accept: 'application/json' }
            });
            const config = await readResponsePayload(response);

            if (!response.ok || !config?.supabaseUrl || !config?.supabaseAnonKey) {
                throw new Error(config?.error || 'Konfiguracja logowania jest niedostępna.');
            }

            state.client = sdk.createClient(config.supabaseUrl, config.supabaseAnonKey, {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                    detectSessionInUrl: true,
                    flowType: 'pkce',
                    storageKey: 'fizykorek-auth'
                }
            });

            const listener = state.client.auth.onAuthStateChange((event, nextSession) => {
                // Supabase odradza wywołania kolejnych metod klienta wewnątrz
                // callbacku auth. Kolejkujemy pracę poza nim.
                window.setTimeout(() => queueSessionWork(nextSession, event), 0);
            });
            authSubscription = listener?.data?.subscription || null;

            const sessionResult = await state.client.auth.getSession();
            if (sessionResult.error) throw sessionResult.error;

            state.initialized = true;
            await queueSessionWork(sessionResult.data.session, 'INITIAL_SESSION');
            return publicApi;
        })();

        return initializationPromise;
    }

    function bindDomEvents() {
        const loginForm = byId('loginForm');
        if (loginForm && !loginForm.dataset.authBound) {
            loginForm.dataset.authBound = 'true';
            loginForm.addEventListener('submit', handleLoginSubmit);
        }

        const setPasswordForm = byId('setPasswordForm');
        if (setPasswordForm && !setPasswordForm.dataset.authBound) {
            setPasswordForm.dataset.authBound = 'true';
            setPasswordForm.addEventListener('submit', handleSetPasswordSubmit);
        }

        const forgotPasswordForm = byId('forgotPasswordForm');
        if (forgotPasswordForm && !forgotPasswordForm.dataset.authBound) {
            forgotPasswordForm.dataset.authBound = 'true';
            forgotPasswordForm.addEventListener('submit', handleForgotPasswordSubmit);
        }

        const forgotPasswordButton = byId('forgotPasswordBtn');
        if (forgotPasswordButton && !forgotPasswordButton.dataset.authBound) {
            forgotPasswordButton.dataset.authBound = 'true';
            forgotPasswordButton.addEventListener('click', () => {
                const recoveryEmail = byId('recoveryEmail');
                const loginEmail = byId('loginEmail');
                if (recoveryEmail && loginEmail) recoveryEmail.value = loginEmail.value;
                showAuthScreen(forgotPasswordForm ? 'forgot-password' : 'login');
                if (!forgotPasswordForm && loginEmail?.value) {
                    requestPasswordReset(loginEmail.value)
                        .then(() => setStatus('Jeśli konto istnieje, wysłaliśmy wiadomość z linkiem do zmiany hasła.', 'success'))
                        .catch((error) => setStatus(friendlyAuthError(error), 'error'));
                }
            });
        }

        const backToLoginButton = byId('backToLoginBtn');
        if (backToLoginButton && !backToLoginButton.dataset.authBound) {
            backToLoginButton.dataset.authBound = 'true';
            backToLoginButton.addEventListener('click', () => showAuthScreen('login'));
        }

        const signOutButton = byId('signOutBtn');
        if (signOutButton && !signOutButton.dataset.authBound) {
            signOutButton.dataset.authBound = 'true';
            signOutButton.addEventListener('click', async () => {
                setButtonBusy(signOutButton, true, 'Wylogowywanie…');
                try {
                    await signOut();
                } finally {
                    setButtonBusy(signOutButton, false);
                }
            });
        }
    }

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const emailInput = byId('loginEmail');
        const passwordInput = byId('loginPassword');
        const submitButton = byId('loginSubmitBtn') || event.submitter;
        const email = emailInput?.value.trim() || '';
        const password = passwordInput?.value || '';

        setFormError('loginError', '');
        setButtonBusy(submitButton, true, 'Logowanie…');

        try {
            await signIn(email, password);
            if (passwordInput) passwordInput.value = '';
        } catch (error) {
            setFormError('loginError', friendlyAuthError(error));
        } finally {
            setButtonBusy(submitButton, false);
        }
    }

    async function handleSetPasswordSubmit(event) {
        event.preventDefault();
        const passwordInput = byId('newPassword');
        const confirmationInput = byId('confirmPassword');
        const submitButton = byId('setPasswordSubmitBtn') || event.submitter;
        const password = passwordInput?.value || '';
        const confirmation = confirmationInput?.value || '';

        setFormError('setPasswordError', '');
        if (password.length < 8) {
            setFormError('setPasswordError', 'Hasło musi mieć co najmniej 8 znaków.');
            return;
        }
        if (password !== confirmation) {
            setFormError('setPasswordError', 'Podane hasła nie są takie same.');
            return;
        }

        setButtonBusy(submitButton, true, 'Zapisywanie…');
        try {
            await updatePassword(password);
            if (passwordInput) passwordInput.value = '';
            if (confirmationInput) confirmationInput.value = '';
            credentialFlowCompleted = true;
            credentialFlow = null;
            cleanAuthParametersFromUrl();
            const sessionResult = await state.client.auth.getSession();
            if (sessionResult.error || !sessionResult.data.session) {
                throw sessionResult.error || new Error('Sesja wygasła. Otwórz link z wiadomości ponownie.');
            }
            await queueSessionWork(sessionResult.data.session, 'PASSWORD_UPDATED');
        } catch (error) {
            setFormError('setPasswordError', friendlyAuthError(error));
        } finally {
            setButtonBusy(submitButton, false);
        }
    }

    async function handleForgotPasswordSubmit(event) {
        event.preventDefault();
        const emailInput = byId('recoveryEmail');
        const submitButton = byId('recoverySubmitBtn') || event.submitter;
        const email = emailInput?.value.trim() || '';

        setFormError('recoveryError', '');
        setButtonBusy(submitButton, true, 'Wysyłanie…');
        try {
            await requestPasswordReset(email);
            setStatus('Jeśli konto istnieje, wysłaliśmy wiadomość z linkiem do zmiany hasła.', 'success');
        } catch (error) {
            // Taki sam komunikat dla wszystkich adresów nie zdradza, czy konto istnieje.
            setFormError('recoveryError', friendlyAuthError(error));
        } finally {
            setButtonBusy(submitButton, false);
        }
    }

    async function signIn(email, password) {
        await ensureInitialized();
        if (!email || !password) throw new Error('Wpisz adres e-mail i hasło.');

        const result = await state.client.auth.signInWithPassword({ email, password });
        if (result.error) throw result.error;
        if (!result.data.session) throw new Error('Nie udało się utworzyć sesji.');
        await queueSessionWork(result.data.session, 'SIGNED_IN');
        return result.data;
    }

    async function signOut() {
        await ensureInitialized();
        sessionGeneration += 1;
        credentialFlow = null;
        credentialFlowCompleted = false;
        cleanAuthParametersFromUrl();
        const result = await state.client.auth.signOut();
        clearAuthenticatedState('manual');
        if (result.error) throw result.error;
    }

    async function requestPasswordReset(email) {
        await ensureInitialized();
        if (!email) throw new Error('Wpisz adres e-mail.');
        const redirectTo = `${window.location.origin}${window.location.pathname}`;
        const result = await state.client.auth.resetPasswordForEmail(email, { redirectTo });
        if (result.error) throw result.error;
    }

    async function updatePassword(password) {
        await ensureInitialized();
        if (!state.session) throw new Error('Link stracił ważność. Otwórz najnowszą wiadomość e-mail.');
        const result = await state.client.auth.updateUser({ password });
        if (result.error) throw result.error;
        return result.data;
    }

    function queueSessionWork(nextSession, event) {
        sessionWork = sessionWork
            .catch(() => undefined)
            .then(() => processSession(nextSession, event));
        return sessionWork;
    }

    async function processSession(nextSession, event) {
        const generation = ++sessionGeneration;

        if (event === 'PASSWORD_RECOVERY') {
            credentialFlow = 'recovery';
            credentialFlowCompleted = false;
        }

        if (!nextSession?.user) {
            clearAuthenticatedState(event || 'missing-session');
            return;
        }

        if (
            state.ready
            && state.loadedAccessToken === nextSession.access_token
            && event !== 'PASSWORD_RECOVERY'
        ) {
            state.session = nextSession;
            state.user = nextSession.user;
            return;
        }

        state.session = nextSession;
        state.user = nextSession.user;

        if (credentialFlow && !credentialFlowCompleted) {
            state.ready = false;
            showAuthScreen(
                'set-password',
                credentialFlow === 'invite'
                    ? 'Ustaw hasło, aby aktywować swoje konto.'
                    : 'Ustaw nowe hasło do swojego konta.'
            );
            return;
        }

        showAuthScreen('loading', 'Ładuję Twoje kursy i postęp…');

        try {
            const loaded = await loadAuthenticatedState(nextSession.user, generation);
            if (!loaded || generation !== sessionGeneration) return;

            state.ready = true;
            state.loadedAccessToken = nextSession.access_token;
            state.initializationError = null;
            showApplication();
            dispatchAuthEvent(EVENTS.ready, createPublicStateDetail());
        } catch (error) {
            if (generation !== sessionGeneration) return;
            await rejectSession(error);
        }
    }

    async function loadAuthenticatedState(user, generation) {
        const [profileResult, coursesResponse] = await Promise.all([
            loadOwnProfile(user.id),
            apiFetch(COURSES_ENDPOINT, { method: 'GET', cache: 'no-store' })
        ]);
        const coursesPayload = await requireJsonResponse(coursesResponse);
        if (generation !== sessionGeneration) return false;

        const profile = normalizeProfile(coursesPayload.profile || profileResult);
        assertAllowedProfile(profile, user.id);

        const courses = normalizeCourses(coursesPayload.courses, profile.role);
        const progressByCourse = await loadProgressForCourses(
            Object.keys(courses),
            coursesPayload,
            profile.role
        );
        if (generation !== sessionGeneration) return false;

        const completedTaskIds = new Set();
        progressByCourse.forEach((ids) => ids.forEach((taskId) => completedTaskIds.add(taskId)));

        state.profile = profile;
        state.courses = courses;
        state.completedTaskIdsByCourse = progressByCourse;
        state.completedTaskIds = completedTaskIds;
        window.FIZYKOREK_COURSES = courses;

        privateStorageSet('completed-task-ids-by-course', serializeProgress(progressByCourse));
        return true;
    }

    async function loadOwnProfile(userId) {
        const result = await state.client
            .from('profiles')
            .select('id,email,role,status,ai_daily_limit,created_at,updated_at')
            .eq('id', userId)
            .maybeSingle();

        if (result.error) return null;
        return result.data;
    }

    async function loadProgressForCourses(courseIds, coursesPayload, role) {
        const result = new Map();
        courseIds.forEach((courseId) => result.set(courseId, new Set()));

        addProgressIds(result, coursesPayload.completedTaskIds, null);
        const sourceCourses = Array.isArray(coursesPayload.courses) ? coursesPayload.courses : [];
        sourceCourses.forEach((course) => {
            const courseId = String(course?.id || course?.slug || '');
            if (courseId) addProgressIds(result, course?.completedTaskIds, courseId);
        });

        // Endpoint uczniowski sprawdza aktywne przypisanie. Nauczyciel i właściciel
        // nie mają własnego postępu kursowego, więc dla nich wystarcza odpowiedź courses.
        if (role !== 'student' || courseIds.length === 0) return result;

        const responses = await Promise.all(courseIds.map(async (courseId) => {
            const response = await apiFetch(
                `${PROGRESS_ENDPOINT}?courseId=${encodeURIComponent(courseId)}`,
                { method: 'GET', cache: 'no-store' }
            );
            const payload = await requireJsonResponse(response);
            return { courseId, completedTaskIds: payload.completedTaskIds };
        }));

        responses.forEach(({ courseId, completedTaskIds }) => {
            result.set(courseId, new Set(normalizeIdArray(completedTaskIds)));
        });
        return result;
    }

    function addProgressIds(target, ids, courseId) {
        if (!Array.isArray(ids)) return;

        if (courseId) {
            const set = target.get(courseId) || new Set();
            normalizeIdArray(ids).forEach((id) => set.add(id));
            target.set(courseId, set);
            return;
        }

        // Top-level może zwracać obiekty {courseId, taskId} albo same taskId.
        ids.forEach((entry) => {
            if (!entry || typeof entry !== 'object') return;
            const entryCourseId = String(entry.courseId || entry.course_id || '');
            const taskId = String(entry.taskId || entry.task_id || '');
            if (!entryCourseId || !taskId || !target.has(entryCourseId)) return;
            target.get(entryCourseId).add(taskId);
        });
    }

    function normalizeIdArray(value) {
        if (!Array.isArray(value)) return [];
        return value
            .map((item) => {
                if (typeof item === 'string') return item;
                return item?.taskId || item?.task_id || '';
            })
            .map((item) => String(item).trim())
            .filter(Boolean);
    }

    function normalizeProfile(rawProfile) {
        if (!rawProfile || typeof rawProfile !== 'object') return null;
        return Object.freeze({
            id: String(rawProfile.id || ''),
            email: String(rawProfile.email || state.user?.email || ''),
            role: String(rawProfile.role || ''),
            status: String(rawProfile.status || ''),
            aiDailyLimit: Number(rawProfile.aiDailyLimit ?? rawProfile.ai_daily_limit ?? 0),
            createdAt: rawProfile.createdAt || rawProfile.created_at || null,
            updatedAt: rawProfile.updatedAt || rawProfile.updated_at || null
        });
    }

    function assertAllowedProfile(profile, userId) {
        if (!profile || profile.id !== userId) {
            throw new Error('Nie udało się potwierdzić profilu użytkownika.');
        }
        if (!ALLOWED_ROLES.has(profile.role)) {
            throw new Error('Konto nie ma prawidłowo przypisanej roli.');
        }
        if (profile.status === 'suspended') {
            throw new Error('To konto zostało zawieszone. Skontaktuj się z nauczycielem.');
        }
        if (profile.status !== 'active') {
            throw new Error('Konto nie zostało jeszcze aktywowane. Otwórz link z zaproszenia.');
        }
    }

    function normalizeCourses(rawCourses, role) {
        const normalized = Object.create(null);
        const list = Array.isArray(rawCourses)
            ? rawCourses
            : Object.values(rawCourses && typeof rawCourses === 'object' ? rawCourses : {});

        list.forEach((record) => {
            if (!record || typeof record !== 'object') return;
            const content = record.content && typeof record.content === 'object' ? record.content : record;
            const id = String(record.id || record.slug || content.id || '').trim();
            if (!id) return;

            const sectionAccess = normalizeSectionAccess(record.sectionAccess || record.section_access);
            const course = {
                ...content,
                id,
                title: String(record.title || content.title || id),
                subtitle: String(record.description || content.subtitle || ''),
                sectionAccess
            };

            if (Array.isArray(content.sections)) {
                course.sections = content.sections.map((section) => ({
                    ...section,
                    // Brak jawnego wpisu dostępu oznacza blokadę (secure by default).
                    isAccessLocked: role === 'student'
                        ? section?.isLocked === true || sectionAccess[section.id] !== true
                        : section?.isLocked === true
                }));
            }

            normalized[id] = course;
        });

        return normalized;
    }

    function normalizeSectionAccess(value) {
        const result = Object.create(null);
        if (Array.isArray(value)) {
            value.forEach((item) => {
                const id = item?.sectionId || item?.section_id;
                if (id) result[String(id)] = Boolean(item.isUnlocked ?? item.is_unlocked);
            });
        } else if (value && typeof value === 'object') {
            Object.entries(value).forEach(([id, unlocked]) => {
                result[String(id)] = Boolean(unlocked);
            });
        }
        return result;
    }

    async function rejectSession(error) {
        console.error('FizyKorek auth:', error);
        state.initializationError = error;
        const message = friendlyAuthError(error);

        if (state.client) {
            await state.client.auth.signOut({ scope: 'local' }).catch(() => undefined);
        }
        clearAuthenticatedState('rejected', message);
        dispatchAuthEvent(EVENTS.error, { message });
    }

    function clearAuthenticatedState(reason, message) {
        const hadUser = Boolean(state.user || state.session || state.ready);
        sessionGeneration += 1;
        state.session = null;
        state.user = null;
        state.profile = null;
        state.courses = Object.create(null);
        state.completedTaskIds = new Set();
        state.completedTaskIdsByCourse = new Map();
        state.ready = false;
        state.loadedAccessToken = null;
        window.FIZYKOREK_COURSES = Object.create(null);

        const email = byId('currentUserEmail');
        if (email) email.textContent = '';
        setHidden(byId('adminPanel'), true);
        showAuthScreen('login', message || 'Zaloguj się, aby przejść do swoich kursów.');

        if (hadUser || reason === 'manual' || reason === 'SIGNED_OUT') {
            dispatchAuthEvent(EVENTS.signedOut, { reason: reason || 'signed-out' });
        }
    }

    async function getAccessToken() {
        await ensureInitialized();
        const result = await state.client.auth.getSession();
        if (result.error || !result.data.session?.access_token) {
            throw new FizyKorekApiError('Sesja wygasła. Zaloguj się ponownie.', 401, null);
        }
        state.session = result.data.session;
        state.user = result.data.session.user;
        return result.data.session.access_token;
    }

    async function apiFetch(input, initOptions) {
        await ensureInitialized();
        const options = { ...(initOptions || {}) };
        const allowAuthRetry = options.authRetry !== false;
        delete options.authRetry;
        const url = new URL(String(input), window.location.origin);
        if (url.origin !== window.location.origin) {
            throw new Error('Token logowania może być wysyłany wyłącznie do tej aplikacji.');
        }

        const headers = new Headers(options.headers || {});
        const originalBody = options.body;
        if (isPlainObject(originalBody)) {
            options.body = JSON.stringify(originalBody);
            if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
        }
        if (!headers.has('Accept')) headers.set('Accept', 'application/json');
        options.headers = headers;
        options.credentials = 'same-origin';

        let token = await getAccessToken();
        headers.set('Authorization', `Bearer ${token}`);
        let response = await fetch(url.toString(), options);

        if (response.status === 401 && allowAuthRetry) {
            const refresh = await state.client.auth.refreshSession();
            if (!refresh.error && refresh.data.session?.access_token) {
                state.session = refresh.data.session;
                state.user = refresh.data.session.user;
                token = refresh.data.session.access_token;
                headers.set('Authorization', `Bearer ${token}`);
                response = await fetch(url.toString(), options);
            }
        }

        if (response.status === 401) {
            window.setTimeout(() => {
                state.client?.auth.signOut({ scope: 'local' }).catch(() => undefined);
                clearAuthenticatedState('expired', 'Sesja wygasła. Zaloguj się ponownie.');
            }, 0);
        }

        return response;
    }

    async function setTaskCompleted(courseId, taskId, completed) {
        const normalizedCourseId = String(courseId || '').trim();
        const normalizedTaskId = String(taskId || '').trim();
        if (!state.ready || state.profile?.role !== 'student') {
            throw new Error('Postęp można zmieniać wyłącznie na aktywnym koncie ucznia.');
        }
        if (!normalizedCourseId || !state.courses[normalizedCourseId]) {
            throw new Error('Ten kurs nie jest przypisany do konta.');
        }
        if (!normalizedTaskId) throw new Error('Brak identyfikatora zadania.');

        const writeKey = `${normalizedCourseId}:${normalizedTaskId}`;
        const previous = progressWrites.get(writeKey) || Promise.resolve();
        const operation = previous.catch(() => undefined).then(async () => {
            const shouldComplete = Boolean(completed);
            const response = await apiFetch(PROGRESS_ENDPOINT, {
                method: shouldComplete ? 'PUT' : 'DELETE',
                body: shouldComplete
                    ? { courseId: normalizedCourseId, taskId: normalizedTaskId, completed: true }
                    : { courseId: normalizedCourseId, taskId: normalizedTaskId }
            });
            const payload = await requireJsonResponse(response);

            const courseSet = state.completedTaskIdsByCourse.get(normalizedCourseId) || new Set();
            if (shouldComplete) courseSet.add(normalizedTaskId);
            else courseSet.delete(normalizedTaskId);
            state.completedTaskIdsByCourse.set(normalizedCourseId, courseSet);

            rebuildCompletedTaskIds();
            privateStorageSet('completed-task-ids-by-course', serializeProgress(state.completedTaskIdsByCourse));

            const detail = {
                courseId: normalizedCourseId,
                taskId: normalizedTaskId,
                completed: shouldComplete,
                completedAt: payload.completedAt || null
            };
            dispatchAuthEvent(EVENTS.progressChanged, detail);
            return detail;
        }).finally(() => {
            if (progressWrites.get(writeKey) === operation) progressWrites.delete(writeKey);
        });

        progressWrites.set(writeKey, operation);
        return operation;
    }

    function getCompletedTaskIds(courseId) {
        if (courseId) {
            return new Set(state.completedTaskIdsByCourse.get(String(courseId)) || []);
        }
        return new Set(state.completedTaskIds);
    }

    function rebuildCompletedTaskIds() {
        const all = new Set();
        state.completedTaskIdsByCourse.forEach((ids) => ids.forEach((id) => all.add(id)));
        state.completedTaskIds = all;
    }

    function serializeProgress(progressByCourse) {
        const serialized = Object.create(null);
        progressByCourse.forEach((ids, courseId) => {
            serialized[courseId] = Array.from(ids);
        });
        return serialized;
    }

    function namespaceKey(key) {
        if (!state.user?.id) throw new Error('Brak aktywnego użytkownika.');
        const normalizedKey = String(key || '').trim();
        if (!normalizedKey) throw new Error('Klucz danych prywatnych nie może być pusty.');
        return `${STORAGE_PREFIX}${state.user.id}:${normalizedKey}`;
    }

    function privateStorageGet(key, fallbackValue) {
        try {
            const value = window.localStorage.getItem(namespaceKey(key));
            if (value === null) return fallbackValue;
            return JSON.parse(value);
        } catch (error) {
            console.warn('Nie udało się odczytać prywatnych danych lokalnych:', error);
            return fallbackValue;
        }
    }

    function privateStorageSet(key, value) {
        try {
            window.localStorage.setItem(namespaceKey(key), JSON.stringify(value));
            return true;
        } catch (error) {
            console.warn('Nie udało się zapisać prywatnych danych lokalnych:', error);
            return false;
        }
    }

    function privateStorageRemove(key) {
        try {
            window.localStorage.removeItem(namespaceKey(key));
            return true;
        } catch (error) {
            console.warn('Nie udało się usunąć prywatnych danych lokalnych:', error);
            return false;
        }
    }

    async function requireJsonResponse(response) {
        const payload = await readResponsePayload(response);
        if (!response.ok) {
            throw new FizyKorekApiError(
                payload?.error || payload?.message || `Błąd serwera (${response.status}).`,
                response.status,
                payload
            );
        }
        return payload || {};
    }

    async function readResponsePayload(response) {
        const type = response.headers.get('content-type') || '';
        if (type.includes('application/json')) return response.json().catch(() => ({}));
        const text = await response.text().catch(() => '');
        return text ? { error: text } : {};
    }

    function isPlainObject(value) {
        if (!value || Object.prototype.toString.call(value) !== '[object Object]') return false;
        const prototype = Object.getPrototypeOf(value);
        return prototype === Object.prototype || prototype === null;
    }

    function isStaffProfile(profile) {
        return profile?.role === 'owner' || profile?.role === 'teacher';
    }

    function createPublicStateDetail() {
        return {
            user: state.user,
            profile: state.profile,
            courses: state.courses,
            completedTaskIds: Array.from(state.completedTaskIds)
        };
    }

    function dispatchAuthEvent(name, detail) {
        window.dispatchEvent(new CustomEvent(name, { detail }));
        // Alias z prefiksem ułatwia integrację bez ryzyka kolizji z innymi modułami.
        window.dispatchEvent(new CustomEvent(`fizykorek:${name}`, { detail }));
    }

    function detectCredentialFlow() {
        const query = new URLSearchParams(window.location.search);
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
        const type = query.get('type') || hash.get('type');
        if (type === 'invite' || type === 'recovery') return type;
        return null;
    }

    function cleanAuthParametersFromUrl() {
        const url = new URL(window.location.href);
        AUTH_QUERY_KEYS.forEach((key) => url.searchParams.delete(key));

        const hashParams = new URLSearchParams(url.hash.replace(/^#/, ''));
        let authHashFound = false;
        AUTH_QUERY_KEYS.forEach((key) => {
            if (hashParams.has(key)) authHashFound = true;
            hashParams.delete(key);
        });
        if (authHashFound) {
            const remainingHash = hashParams.toString();
            url.hash = remainingHash ? `#${remainingHash}` : '';
        }
        window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
    }

    function friendlyAuthError(error) {
        const status = Number(error?.status || 0);
        const raw = String(error?.message || '').toLowerCase();

        if (status === 401 || raw.includes('invalid login credentials')) {
            return 'Nieprawidłowy adres e-mail lub hasło.';
        }
        if (status === 429 || raw.includes('rate limit')) {
            return 'Zbyt wiele prób. Odczekaj chwilę i spróbuj ponownie.';
        }
        if (raw.includes('password should be') || raw.includes('weak password')) {
            return 'Hasło jest zbyt słabe. Użyj co najmniej 8 znaków.';
        }
        if (raw.includes('expired') || raw.includes('otp')) {
            return 'Link wygasł lub został już użyty. Poproś o nową wiadomość.';
        }
        if (raw.includes('failed to fetch') || raw.includes('network')) {
            return 'Brak połączenia z serwerem. Sprawdź internet i spróbuj ponownie.';
        }
        return error?.message || 'Nie udało się wykonać operacji. Spróbuj ponownie.';
    }

    async function ensureInitialized() {
        // Podczas pierwszego ładowania apiFetch jest używany do pobrania kursów,
        // zanim init() zakończy się w całości. Gdy klient już istnieje, nie wolno
        // czekać na initializationPromise, bo utworzyłoby to cykliczne oczekiwanie.
        if (state.client) return;
        if (!initializationPromise) await init();
        else await initializationPromise;
        if (!state.client) throw new Error('Moduł logowania nie jest gotowy.');
    }

    function reportInitializationError(error) {
        console.error('Nie udało się uruchomić logowania FizyKorek:', error);
        state.initializationError = error;
        state.ready = false;
        window.FIZYKOREK_COURSES = Object.create(null);
        showAuthScreen('error', friendlyAuthError(error));
        dispatchAuthEvent(EVENTS.error, { message: friendlyAuthError(error) });
    }

    window.addEventListener('beforeunload', () => {
        authSubscription?.unsubscribe?.();
    }, { once: true });
})();
