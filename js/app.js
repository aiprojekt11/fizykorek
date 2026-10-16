/**
 * FizyKorek 2.0 – Główny Kontroler Aplikacji (App.js)
 * Architektura ścieżki nauki krok po kroku (Roadmap Stepper & Subchapter Focus).
 * Zarządza stanem kursów, etapów, odhaczaniem zadań, akordeonem i asystentem AI.
 */

document.addEventListener('DOMContentLoaded', () => {
    class FizyKorekApp {
        constructor() {
            this.courses = window.FIZYKOREK_COURSES || {};
            this.formulas = window.FIZYKOREK_FORMULAS || {};

            let initialCourse = localStorage.getItem('fizykorek_course');
            if (!initialCourse || initialCourse === 'kinematyka-wprowadzenie' || !this.courses[initialCourse]) {
                initialCourse = 'matura-fizyka';
            }

            const courseObj = this.courses[initialCourse];
            let initialSection = localStorage.getItem('fizykorek_active_section');
            const targetSecObj = courseObj?.sections?.find(s => s.id === initialSection);
            if (!initialSection || !targetSecObj || targetSecObj.isComingSoon) {
                const firstAvailable = courseObj?.sections?.find(s => !s.isComingSoon);
                initialSection = firstAvailable?.id || 'm-dynamika';
            }

            let initialSub = localStorage.getItem('fizykorek_subchapter');
            const secObj = courseObj?.sections?.find(s => s.id === initialSection);
            if (secObj && secObj.subchapters && secObj.subchapters.length > 0) {
                if (!initialSub || !secObj.subchapters.some(sub => sub.id === initialSub)) {
                    initialSub = secObj.subchapters[0].id;
                }
            } else {
                initialSub = null;
            }

            this.state = {
                activeCourseId: initialCourse,
                activeSectionId: initialSection,
                activeSubchapterId: initialSub,
                activeTaskId: null,
                theme: 'light',
                completedTasks: new Set(JSON.parse(localStorage.getItem('fizykorek_completed_tasks') || '[]')),
                unlockedSubchapters: new Set(JSON.parse(localStorage.getItem('fizykorek_unlocked_subchapters') || '["sub-ruch-jednostajny"]')),
                revealedSolutions: new Set(),
                revealedSteps: new Map(),
                isFormulaDrawerOpen: false,
                isAiPanelOpen: window.innerWidth > 960,
                formulaCategory: 'all',
                formulaSearchQuery: ''
            };

            this.chatTutor = new window.FizyKorekChatTutor();

            this.initDOM();
            this.initTheme();
            this.bindEvents();
            this.render();
            this.restoreNavigationState();
        }

        initDOM() {
            this.dom = {
                // Views
                dashboardView: document.getElementById('dashboardView'),
                workspaceView: document.getElementById('workspaceView'),

                // Navigation & Header
                appHeader: document.getElementById('appHeader'),
                logoBtn: document.getElementById('logoBtn'),
                formulaDrawerBtn: document.getElementById('formulaDrawerBtn'),
                themeToggleBtn: document.getElementById('themeToggleBtn'),
                themeIconSun: document.getElementById('themeIconSun'),
                themeIconMoon: document.getElementById('themeIconMoon'),

                // Dashboard elements
                courseHeroTitle: document.getElementById('courseHeroTitle'),
                courseHeroBadge: document.getElementById('courseHeroBadge'),
                courseHeroDesc: document.getElementById('courseHeroDesc'),
                courseSwitchBtns: document.querySelectorAll('.course-switch-card'),

                // Roadmap & Stepper elements
                sectionRoadmapHeader: document.getElementById('sectionRoadmapHeader'),
                currentSectionBadge: document.getElementById('currentSectionBadge'),
                sectionTasksTotalLabel: document.getElementById('sectionTasksTotalLabel'),
                currentSectionTitle: document.getElementById('currentSectionTitle'),
                currentSectionDesc: document.getElementById('currentSectionDesc'),
                sectionProgressPercent: document.getElementById('sectionProgressPercent'),
                sectionProgressBarFill: document.getElementById('sectionProgressBarFill'),
                roadmapStepperContainer: document.getElementById('roadmapStepperContainer'),
                roadmapStepsRow: document.getElementById('roadmapStepsRow'),
                subchapterFocusCard: document.getElementById('subchapterFocusCard'),
                upcomingSectionsContainer: document.getElementById('upcomingSectionsContainer'),
                contestSectionsGrid: document.getElementById('contestSectionsGrid'),
                courseSectionsContainer: document.getElementById('courseSectionsContainer'),
                courseSectionsGrid: document.getElementById('courseSectionsGrid'),

                // Workspace elements
                backToDashboardBtn: document.getElementById('backToDashboardBtn'),
                workspaceCourseBadge: document.getElementById('workspaceCourseBadge'),
                workspaceSectionTitle: document.getElementById('workspaceSectionTitle'),
                prevTaskBtn: document.getElementById('prevTaskBtn'),
                nextTaskBtn: document.getElementById('nextTaskBtn'),
                taskCounterBadge: document.getElementById('taskCounterBadge'),
                taskJumpSelect: document.getElementById('taskJumpSelect'),
                toggleAiPanelBtn: document.getElementById('toggleAiPanelBtn'),
                workspaceLayoutGrid: document.getElementById('workspaceLayoutGrid'),
                toggleAiText: document.getElementById('toggleAiText'),
                chatWorkspacePanel: document.getElementById('chatWorkspacePanel'),
                aiPanelBackdrop: document.getElementById('aiPanelBackdrop'),
                closeAiPanelBtn: document.getElementById('closeAiPanelBtn'),

                // Task details
                taskCard: document.getElementById('taskCard'),
                taskTitle: document.getElementById('taskTitle'),
                taskMetaSource: document.getElementById('taskMetaSource'),
                taskExternalLink: document.getElementById('taskExternalLink'),
                taskDifficultyBadge: document.getElementById('taskDifficultyBadge'),
                taskTagsContainer: document.getElementById('taskTagsContainer'),
                taskProblemText: document.getElementById('taskProblemText'),
                taskCheckToggleBtn: document.getElementById('taskCheckToggleBtn'),
                taskCheckLabelText: document.getElementById('taskCheckLabelText'),

                // Bottom workspace nav & check
                bottomPrevTaskBtn: document.getElementById('bottomPrevTaskBtn'),
                bottomCheckTaskBtn: document.getElementById('bottomCheckTaskBtn'),
                bottomCheckLabelText: document.getElementById('bottomCheckLabelText'),
                bottomNextTaskBtn: document.getElementById('bottomNextTaskBtn'),
                bottomNextBtnText: document.getElementById('bottomNextBtnText'),

                // Solution accordion
                toggleSolutionBtn: document.getElementById('toggleSolutionBtn'),
                solutionContainer: document.getElementById('solutionContainer'),
                solutionIntuition: document.getElementById('solutionIntuition'),
                solutionGivens: document.getElementById('solutionGivens'),
                solutionStepsContainer: document.getElementById('solutionStepsContainer'),
                solutionNumerical: document.getElementById('solutionNumerical'),
                solutionAnswer: document.getElementById('solutionAnswer'),
                solutionTrap: document.getElementById('solutionTrap'),

                // Formula drawer
                formulaDrawer: document.getElementById('formulaDrawer'),
                formulaDrawerBackdrop: document.getElementById('formulaDrawerBackdrop'),
                closeFormulaDrawerBtn: document.getElementById('closeFormulaDrawerBtn'),
                formulaSearchInput: document.getElementById('formulaSearchInput'),
                formulaCategoryTabs: document.getElementById('formulaCategoryTabs'),
                formulaCardsContainer: document.getElementById('formulaCardsContainer'),
                constantsContainer: document.getElementById('constantsContainer'),
                downloadPdfLink: document.getElementById('downloadPdfLink'),

                // Toast
                toastNotification: document.getElementById('toastNotification')
            };
        }

        bindEvents() {
            // Logo & Back buttons
            if (this.dom.logoBtn) {
                this.dom.logoBtn.addEventListener('click', () => this.showDashboard());
            }
            if (this.dom.backToDashboardBtn) {
                this.dom.backToDashboardBtn.addEventListener('click', () => this.showDashboard());
            }

            // Course switches on dashboard
            if (this.dom.courseSwitchBtns) {
                this.dom.courseSwitchBtns.forEach(card => {
                    card.addEventListener('click', () => {
                        const courseId = card.getAttribute('data-course-id');
                        if (courseId) {
                            this.setCourse(courseId);
                        }
                    });
                });
            }

            // Formula drawer toggles
            if (this.dom.formulaDrawerBtn) {
                this.dom.formulaDrawerBtn.addEventListener('click', () => this.toggleFormulaDrawer(true));
            }
            if (this.dom.closeFormulaDrawerBtn) {
                this.dom.closeFormulaDrawerBtn.addEventListener('click', () => this.toggleFormulaDrawer(false));
            }
            if (this.dom.formulaDrawerBackdrop) {
                this.dom.formulaDrawerBackdrop.addEventListener('click', () => this.toggleFormulaDrawer(false));
            }

            // Formula search & filter
            if (this.dom.formulaSearchInput) {
                this.dom.formulaSearchInput.addEventListener('input', (e) => {
                    this.state.formulaSearchQuery = e.target.value.toLowerCase().trim();
                    this.renderFormulaCards();
                });
            }

            // Solution toggle button
            if (this.dom.toggleSolutionBtn) {
                this.dom.toggleSolutionBtn.addEventListener('click', () => {
                    this.toggleSolutionVisibility();
                });
            }

            // Workspace Task Checking
            if (this.dom.taskCheckToggleBtn) {
                this.dom.taskCheckToggleBtn.addEventListener('click', () => {
                    if (this.state.activeTaskId) {
                        this.toggleTaskCompleted(this.state.activeTaskId);
                    }
                });
            }
            if (this.dom.bottomCheckTaskBtn) {
                this.dom.bottomCheckTaskBtn.addEventListener('click', () => {
                    if (this.state.activeTaskId) {
                        this.toggleTaskCompleted(this.state.activeTaskId);
                    }
                });
            }

            // Task navigation (prev/next)
            if (this.dom.prevTaskBtn) {
                this.dom.prevTaskBtn.addEventListener('click', () => this.navigateTask(-1));
            }
            if (this.dom.nextTaskBtn) {
                this.dom.nextTaskBtn.addEventListener('click', () => this.navigateTask(1));
            }
            if (this.dom.bottomPrevTaskBtn) {
                this.dom.bottomPrevTaskBtn.addEventListener('click', () => this.navigateTask(-1));
            }
            if (this.dom.bottomNextTaskBtn) {
                this.dom.bottomNextTaskBtn.addEventListener('click', () => this.navigateTask(1));
            }

            // Quick Jump Select dropdown
            if (this.dom.taskJumpSelect) {
                this.dom.taskJumpSelect.addEventListener('change', (e) => {
                    const val = e.target.value;
                    if (val && val.includes('::')) {
                        const [secId, taskId] = val.split('::');
                        this.openTask(secId, taskId);
                    }
                });
            }

            // Toggle AI sidebar panel (wider materials view)
            if (this.dom.toggleAiPanelBtn) {
                this.dom.toggleAiPanelBtn.addEventListener('click', () => {
                    this.setAiPanelOpen(!this.state.isAiPanelOpen, true);
                });
            }
            if (this.dom.closeAiPanelBtn) {
                this.dom.closeAiPanelBtn.addEventListener('click', () => this.setAiPanelOpen(false, true));
            }
            if (this.dom.aiPanelBackdrop) {
                this.dom.aiPanelBackdrop.addEventListener('click', () => this.setAiPanelOpen(false, true));
            }

            // Keyboard shortcut (Escape closes drawers)
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.state.isFormulaDrawerOpen) {
                    this.toggleFormulaDrawer(false);
                } else if (e.key === 'Escape' && this.state.isAiPanelOpen && window.innerWidth <= 960) {
                    this.setAiPanelOpen(false, true);
                }
            });

            this._aiMobileMedia = window.matchMedia('(max-width: 960px)');
            this._lastAiMobileState = this._aiMobileMedia.matches;
            this.setAiPanelOpen(!this._lastAiMobileState, false);
            this._aiMobileMedia.addEventListener('change', (event) => {
                this._lastAiMobileState = event.matches;
                this.setAiPanelOpen(!event.matches, false);
            });

            // Hash change for URL routing / browser back & forward buttons
            window.addEventListener('hashchange', () => this.handleHashChange());
        }

        setAiPanelOpen(open, manageFocus = false) {
            const grid = this.dom.workspaceLayoutGrid;
            if (!grid) return;

            const isMobileDrawer = window.innerWidth <= 960;
            this.state.isAiPanelOpen = open;
            grid.classList.toggle('ai-collapsed', !open);
            grid.classList.toggle('ai-mobile-open', open && isMobileDrawer);
            document.body.classList.toggle('ai-drawer-open', open && isMobileDrawer);

            if (this.dom.toggleAiPanelBtn) {
                this.dom.toggleAiPanelBtn.setAttribute('aria-expanded', String(open));
            }
            if (this.dom.chatWorkspacePanel) {
                this.dom.chatWorkspacePanel.setAttribute('aria-hidden', String(!open));
            }
            if (this.dom.aiPanelBackdrop) {
                this.dom.aiPanelBackdrop.setAttribute('aria-hidden', String(!(open && isMobileDrawer)));
            }
            if (this.dom.toggleAiText) {
                this.dom.toggleAiText.textContent = open ? 'Ukryj AI' : 'Zapytaj AI';
            }

            if (manageFocus) {
                if (open && isMobileDrawer) {
                    setTimeout(() => this.dom.closeAiPanelBtn?.focus(), 80);
                } else if (!open) {
                    this.dom.toggleAiPanelBtn?.focus();
                }
            }
        }

        initTheme() {
            localStorage.setItem('fizykorek_theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
            this.updateThemeIcons();
        }

        toggleTheme() {
            this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', this.state.theme);
            localStorage.setItem('fizykorek_theme', this.state.theme);
            this.updateThemeIcons();
            this.showToast(`Przełączono na motyw ${this.state.theme === 'dark' ? 'ciemny 🌙' : 'jasny ☀️'}`);
        }

        updateThemeIcons() {
            if (this.dom && this.dom.themeIconSun && this.dom.themeIconMoon) {
                if (this.state.theme === 'dark') {
                    this.dom.themeIconSun.style.display = 'block';
                    this.dom.themeIconMoon.style.display = 'none';
                } else {
                    this.dom.themeIconSun.style.display = 'none';
                    this.dom.themeIconMoon.style.display = 'block';
                }
            }
        }

        setCourse(courseId) {
            if (!this.courses[courseId]) return;
            this.state.activeCourseId = courseId;
            localStorage.setItem('fizykorek_course', courseId);

            const course = this.courses[courseId];
            if (course && course.sections && course.sections.length > 0) {
                const secExists = course.sections.some(s => s.id === this.state.activeSectionId);
                if (!secExists) {
                    this.state.activeSectionId = course.sections[0].id;
                    localStorage.setItem('fizykorek_active_section', this.state.activeSectionId);
                    if (course.sections[0].subchapters && course.sections[0].subchapters.length > 0) {
                        this.state.activeSubchapterId = course.sections[0].subchapters[0].id;
                        localStorage.setItem('fizykorek_subchapter', this.state.activeSubchapterId);
                    }
                }
            }

            this.renderDashboard();
            this.showToast(`Wybrano: ${this.courses[courseId].title}`);
        }

        setSection(sectionId, updateHash = true) {
            const course = this.courses[this.state.activeCourseId];
            if (!course || !course.sections) return;
            const targetSec = course.sections.find(s => s.id === sectionId);
            if (!targetSec) return;

            if (targetSec.isComingSoon) {
                this.showToast(`Dział "${targetSec.title}" będzie dostępny wkrótce! ⏳`);
                return;
            }

            this.state.activeSectionId = sectionId;
            localStorage.setItem('fizykorek_active_section', sectionId);

            if (targetSec.subchapters && targetSec.subchapters.length > 0) {
                this.state.activeSubchapterId = targetSec.subchapters[0].id;
                localStorage.setItem('fizykorek_subchapter', this.state.activeSubchapterId);
            }

            if (updateHash) {
                window.location.hash = `section=${sectionId}`;
            }

            this.renderDashboard();
            this.showToast(`Przejście do: ${targetSec.title}`);

            if (this.dom.sectionRoadmapHeader) {
                this.dom.sectionRoadmapHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        setSubchapter(subId, updateHash = true) {
            this.state.activeSubchapterId = subId;
            localStorage.setItem('fizykorek_subchapter', subId);

            if (updateHash) {
                window.location.hash = `section=${this.state.activeSectionId}&sub=${subId}`;
            }

            this.renderRoadmapStepper();
            this.renderSubchapterFocusCard();

            if (this.dom.subchapterFocusCard) {
                this.dom.subchapterFocusCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        unlockSubchapter(subId) {
            this.state.unlockedSubchapters.add(subId);
            localStorage.setItem('fizykorek_unlocked_subchapters', JSON.stringify(Array.from(this.state.unlockedSubchapters)));
            this.setSubchapter(subId);
            this.showToast('Odblokowano kolejny etap! 🚀');
        }

        syncTaskCheckButtons(taskId) {
            const isDone = this.state.completedTasks.has(taskId);

            if (this.dom.taskCheckToggleBtn) {
                this.dom.taskCheckToggleBtn.classList.toggle('is-checked', isDone);
                this.dom.taskCheckToggleBtn.setAttribute('aria-pressed', String(isDone));
                if (this.dom.taskCheckLabelText) {
                    this.dom.taskCheckLabelText.textContent = isDone ? 'Opanowane ✓' : 'Oznacz jako zrobione';
                }
            }

            if (this.dom.bottomCheckTaskBtn) {
                this.dom.bottomCheckTaskBtn.classList.toggle('is-checked', isDone);
                this.dom.bottomCheckTaskBtn.setAttribute('aria-pressed', String(isDone));
                if (this.dom.bottomCheckLabelText) {
                    this.dom.bottomCheckLabelText.textContent = isDone ? 'Opanowane ✓' : 'Oznacz jako zrobione';
                }
            }
        }

        getActiveSection() {
            const course = this.courses[this.state.activeCourseId];
            if (!course || !course.sections || course.sections.length === 0) return null;
            return course.sections.find(s => s.id === this.state.activeSectionId) || course.sections[0];
        }

        getActiveSubchapter() {
            const currentSec = this.getActiveSection();
            if (!currentSec || !currentSec.subchapters || currentSec.subchapters.length === 0) return null;
            return currentSec.subchapters.find(sub => sub.id === this.state.activeSubchapterId) || currentSec.subchapters[0];
        }

        getNextSubchapter(currentSubId) {
            const currentSec = this.getActiveSection();
            if (!currentSec || !currentSec.subchapters) return null;
            const idx = currentSec.subchapters.findIndex(s => s.id === currentSubId);
            if (idx !== -1 && idx < currentSec.subchapters.length - 1) {
                return currentSec.subchapters[idx + 1];
            }
            return null;
        }

        showDashboard(updateHash = true) {
            this.state.activeTaskId = null;
            localStorage.removeItem('fizykorek_active_task');

            if (updateHash) {
                window.location.hash = `section=${this.state.activeSectionId}`;
            }

            this.dom.dashboardView.classList.remove('hidden');
            this.dom.workspaceView.classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.renderDashboard();
        }

        openTask(sectionId, taskId, subchapterId = null, updateHash = true) {
            this.state.activeSectionId = sectionId;
            this.state.activeTaskId = taskId;
            localStorage.setItem('fizykorek_active_section', sectionId);
            localStorage.setItem('fizykorek_active_task', taskId);

            if (subchapterId) {
                this.state.activeSubchapterId = subchapterId;
                localStorage.setItem('fizykorek_subchapter', subchapterId);
            }

            if (updateHash) {
                window.location.hash = `task=${taskId}`;
            }

            this.dom.dashboardView.classList.add('hidden');
            this.dom.workspaceView.classList.remove('hidden');
            if (window.innerWidth <= 960) {
                this.setAiPanelOpen(false, false);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });

            this.renderTaskWorkspace();
            setTimeout(() => this.dom.taskTitle?.focus({ preventScroll: true }), 80);
        }

        findTaskById(taskId) {
            if (!taskId) return null;
            const course = this.courses[this.state.activeCourseId];
            if (!course || !course.sections) return null;
            for (const section of course.sections) {
                if (section.subchapters) {
                    for (const sub of section.subchapters) {
                        const found = sub.tasks ? sub.tasks.find(t => t.id === taskId) : null;
                        if (found) return { task: found, section, subchapter: sub };
                    }
                } else if (section.tasks) {
                    const found = section.tasks.find(t => t.id === taskId);
                    if (found) return { task: found, section, subchapter: null };
                }
            }
            return null;
        }

        getCurrentTask() {
            return this.findTaskById(this.state.activeTaskId);
        }

        restoreNavigationState() {
            const hash = window.location.hash.replace(/^#/, '');
            const params = new URLSearchParams(hash);
            const hashTask = params.get('task');
            const hashSec = params.get('section');
            const hashSub = params.get('sub');

            const targetTaskId = hashTask || localStorage.getItem('fizykorek_active_task');
            const targetSectionId = hashSec || localStorage.getItem('fizykorek_active_section');
            const targetSubId = hashSub || localStorage.getItem('fizykorek_subchapter');

            if (targetTaskId) {
                const found = this.findTaskById(targetTaskId);
                if (found) {
                    this.openTask(found.section.id, found.task.id, found.subchapter ? found.subchapter.id : null, false);
                    return;
                }
            }

            if (targetSectionId) {
                const course = this.courses[this.state.activeCourseId];
                if (course && course.sections && course.sections.some(s => s.id === targetSectionId)) {
                    this.state.activeSectionId = targetSectionId;
                    if (targetSubId) {
                        this.state.activeSubchapterId = targetSubId;
                    }
                    this.showDashboard(false);
                    return;
                }
            }
        }

        handleHashChange() {
            const hash = window.location.hash.replace(/^#/, '');
            if (!hash) {
                if (!this.dom.workspaceView.classList.contains('hidden')) {
                    this.showDashboard(false);
                }
                return;
            }
            const params = new URLSearchParams(hash);
            const taskId = params.get('task');
            const secId = params.get('section');
            const subId = params.get('sub');

            if (taskId && taskId !== this.state.activeTaskId) {
                const found = this.findTaskById(taskId);
                if (found) {
                    this.openTask(found.section.id, found.task.id, found.subchapter ? found.subchapter.id : null, false);
                }
            } else if (!taskId && !this.dom.workspaceView.classList.contains('hidden')) {
                this.showDashboard(false);
                if (secId && secId !== this.state.activeSectionId) {
                    this.setSection(secId, false);
                }
            } else if (secId && secId !== this.state.activeSectionId) {
                this.setSection(secId, false);
            }
        }

        getAllTasksInActiveCourse() {
            const course = this.courses[this.state.activeCourseId];
            if (!course) return [];
            const list = [];
            course.sections.forEach(sec => {
                if (sec.isComingSoon) return;
                if (sec.subchapters) {
                    sec.subchapters.forEach(sub => {
                        sub.tasks.forEach(t => list.push({ task: t, section: sec, subchapter: sub }));
                    });
                } else if (sec.tasks) {
                    sec.tasks.forEach(t => list.push({ task: t, section: sec, subchapter: null }));
                }
            });
            return list;
        }

        navigateTask(direction) {
            const allTasks = this.getAllTasksInActiveCourse();
            if (allTasks.length === 0) return;

            const currentIndex = allTasks.findIndex(item => item.task.id === this.state.activeTaskId);
            if (currentIndex === -1) return;

            const nextIndex = currentIndex + direction;
            if (nextIndex >= 0 && nextIndex < allTasks.length) {
                const nextItem = allTasks[nextIndex];
                this.openTask(nextItem.section.id, nextItem.task.id, nextItem.subchapter ? nextItem.subchapter.id : null);
            } else if (nextIndex >= allTasks.length) {
                this.showToast('To jest ostatnie zadanie w tym kursie!');
            }
        }

        toggleTaskCompleted(taskId) {
            const wasCompleted = this.state.completedTasks.has(taskId);
            if (wasCompleted) {
                this.state.completedTasks.delete(taskId);
            } else {
                this.state.completedTasks.add(taskId);
            }

            localStorage.setItem('fizykorek_completed_tasks', JSON.stringify(Array.from(this.state.completedTasks)));

            // Refresh the list, progress counters and current task state.
            this.renderDashboard();
            if (this.state.activeTaskId === taskId && !this.dom.workspaceView.classList.contains('hidden')) {
                this.renderTaskWorkspace();
            }
            this.showToast(wasCompleted ? 'Odznaczono zadanie' : '✓ Zadanie oznaczone jako opanowane!');
        }

        toggleSolutionVisibility() {
            const taskId = this.state.activeTaskId;
            if (!taskId) return;

            const isOpen = this.state.revealedSolutions.has(taskId);
            if (isOpen) {
                this.state.revealedSolutions.delete(taskId);
            } else {
                this.state.revealedSolutions.add(taskId);
            }

            this.updateSolutionAccordionUI(!isOpen);
        }

        updateSolutionAccordionUI(isOpen) {
            if (!this.dom.solutionContainer || !this.dom.toggleSolutionBtn) return;

            if (isOpen) {
                this.dom.solutionContainer.classList.remove('hidden');
                this.dom.toggleSolutionBtn.classList.add('active');
                this.dom.toggleSolutionBtn.setAttribute('aria-expanded', 'true');
                this.dom.toggleSolutionBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                    <span>Ukryj pełne rozwiązanie</span>
                `;
                this.triggerKaTeX(this.dom.solutionContainer);
            } else {
                this.dom.solutionContainer.classList.add('hidden');
                this.dom.toggleSolutionBtn.classList.remove('active');
                this.dom.toggleSolutionBtn.setAttribute('aria-expanded', 'false');
                this.dom.toggleSolutionBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Pokaż rozwiązanie krok po kroku</span>
                `;
            }
        }

        render() {
            this.renderDashboard();
            this.renderFormulaDrawer();
        }

        renderDashboard() {
            const course = this.courses[this.state.activeCourseId];
            if (!course) return;

            // Highlight active switch card
            if (this.dom.courseSwitchBtns) {
                this.dom.courseSwitchBtns.forEach(card => {
                    const isCurrent = card.getAttribute('data-course-id') === this.state.activeCourseId;
                    card.classList.toggle('active', isCurrent);
                });
            }

            // Update Hero
            if (this.dom.courseHeroTitle) this.dom.courseHeroTitle.textContent = course.title;
            if (this.dom.courseHeroBadge) this.dom.courseHeroBadge.textContent = course.badge;
            if (this.dom.courseHeroDesc) this.dom.courseHeroDesc.textContent = course.subtitle;

            // Render modern Działy Grid with dynamic live progress
            this.renderCourseSectionsGrid();

            if (this.state.activeCourseId === 'matura-fizyka') {
                this.renderMaturaCurriculum();
            } else if (this.state.activeCourseId === 'konkurs-fizyka') {
                this.renderKonkursCurriculum();
            } else {
                this.renderGenericSections();
            }
        }

        getSectionIconSvg(section) {
            const label = `${section?.id || ''} ${section?.title || ''}`.toLowerCase();
            let paths = '<circle cx="12" cy="12" r="8"></circle><path d="M12 8v8M8 12h8"></path>';

            if (label.includes('kinemat')) {
                paths = '<path d="M4 12h15"></path><path d="m14 7 5 5-5 5"></path><circle cx="6" cy="12" r="2"></circle>';
            } else if (label.includes('dynam')) {
                paths = '<circle cx="12" cy="12" r="3"></circle><path d="M12 3v5M12 16v5M3 12h5M16 12h5"></path>';
            } else if (label.includes('praca') || label.includes('energia') || label.includes('moc')) {
                paths = '<path d="m13 2-8 12h7l-1 8 8-12h-7z"></path>';
            } else if (label.includes('bry') || label.includes('sztyw')) {
                paths = '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"></path><path d="m4 7.5 8 4.5 8-4.5M12 12v9"></path>';
            } else if (label.includes('harmon') || label.includes('fala')) {
                paths = '<path d="M3 12c2.3-6 4.7-6 7 0s4.7 6 7 0 3.7-6 4-6"></path>';
            } else if (label.includes('graw') || label.includes('astro')) {
                paths = '<circle cx="12" cy="12" r="3"></circle><path d="M4.5 8.5c3-4.5 11-5.5 15-2s.5 9-4.5 11.5-11 1.5-12-3.5c-.4-2 1-4.2 3.5-6"></path>';
            } else if (label.includes('termo')) {
                paths = '<path d="M9 14.5V5a3 3 0 0 1 6 0v9.5a5 5 0 1 1-6 0z"></path><path d="M12 7v9"></path>';
            } else if (label.includes('elektr') || label.includes('prąd')) {
                paths = '<path d="m13 2-8 12h7l-1 8 8-12h-7z"></path>';
            } else if (label.includes('magnet')) {
                paths = '<path d="M5 4v8a7 7 0 0 0 14 0V4"></path><path d="M5 8h5M14 8h5"></path>';
            } else if (label.includes('opty')) {
                paths = '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"></path><circle cx="12" cy="12" r="2.5"></circle>';
            }

            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
        }

        renderCourseSectionsGrid() {
            if (!this.dom.courseSectionsGrid) return;
            const course = this.courses[this.state.activeCourseId];
            if (!course || !course.sections) return;

            this.dom.courseSectionsGrid.innerHTML = '';

            course.sections.forEach(sec => {
                const secTasks = sec.subchapters ? sec.subchapters.flatMap(s => s.tasks || []) : (sec.tasks || []);
                const secTotal = secTasks.length;
                const secDone = secTasks.filter(t => this.state.completedTasks.has(t.id)).length;
                const secPercent = secTotal > 0 ? Math.round((secDone / secTotal) * 100) : 0;
                const isActive = sec.id === this.state.activeSectionId;
                const isLocked = !!sec.isComingSoon;

                const card = document.createElement('button');
                card.type = 'button';
                card.className = `course-section-card ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`;
                card.dataset.sectionId = sec.id;
                card.setAttribute('aria-current', isActive ? 'true' : 'false');
                card.setAttribute('aria-disabled', String(isLocked));

                let badgeText = sec.badge || 'Dostępny';
                if (isLocked) {
                    badgeText = 'W przygotowaniu';
                } else if (isActive) {
                    badgeText = 'Wybrany dział';
                }

                card.innerHTML = `
                    <div class="sec-card-header">
                        <div class="sec-card-icon-wrap">${this.getSectionIconSvg(sec)}</div>
                        <span class="sec-card-badge">${badgeText}</span>
                    </div>
                    <h3 class="sec-card-title">${sec.title}</h3>
                    <p class="sec-card-desc">${sec.desc || ''}</p>
                    <div class="sec-card-progress">
                        <div class="sec-progress-labels">
                            <span>${isLocked ? 'Dział w opracowaniu' : `Opanowane: ${secDone} z ${secTotal} zadań`}</span>
                            <span class="sec-progress-percent">${isLocked ? '—' : `${secPercent}%`}</span>
                        </div>
                        <div class="sec-progress-bar-bg" role="progressbar" aria-label="Postęp w dziale ${sec.title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${isLocked ? 0 : secPercent}">
                            <div class="sec-progress-bar-fill" style="width: ${isLocked ? 0 : secPercent}%;"></div>
                        </div>
                    </div>
                `;

                card.addEventListener('click', () => {
                    if (isLocked) {
                        this.showToast(`Dział "${sec.title}" będzie dostępny wkrótce! Pracujemy nad kolejnymi zadaniami ⏳`);
                    } else {
                        this.setSection(sec.id);
                    }
                });

                this.dom.courseSectionsGrid.appendChild(card);
            });
        }

        renderMaturaCurriculum() {
            if (this.dom.contestSectionsGrid) {
                this.dom.contestSectionsGrid.classList.add('hidden');
            }

            const course = this.courses['matura-fizyka'];
            const currentSec = this.getActiveSection() || course.sections[0];
            if (!currentSec) return;

            // Ensure activeSubchapterId exists
            if (!this.state.activeSubchapterId && currentSec.subchapters && currentSec.subchapters.length > 0) {
                this.state.activeSubchapterId = currentSec.subchapters[0].id;
            }

            // Calculate overall section progress
            const allTasks = (currentSec.tasks && currentSec.tasks.length > 0) ? currentSec.tasks : (currentSec.subchapters ? currentSec.subchapters.flatMap(s => s.tasks || []) : []);
            const totalTasks = allTasks.length;
            const completedCount = allTasks.filter(t => this.state.completedTasks.has(t.id)).length;
            const percent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

            if (this.dom.sectionRoadmapHeader) {
                this.dom.sectionRoadmapHeader.classList.remove('hidden');
            }
            if (this.dom.currentSectionTitle) {
                this.dom.currentSectionTitle.textContent = currentSec.title;
            }
            if (this.dom.currentSectionBadge) {
                this.dom.currentSectionBadge.textContent = currentSec.badge || 'Matura CKE';
            }
            if (this.dom.currentSectionDesc) {
                this.dom.currentSectionDesc.textContent = currentSec.desc;
            }
            if (this.dom.sectionTasksTotalLabel) {
                this.dom.sectionTasksTotalLabel.textContent = `Opanowano: ${completedCount} / ${totalTasks} zadań`;
            }
            if (this.dom.sectionProgressPercent) {
                this.dom.sectionProgressPercent.textContent = `${percent}%`;
            }
            if (this.dom.sectionProgressBarFill) {
                this.dom.sectionProgressBarFill.style.width = `${percent}%`;
                const progressRoot = this.dom.sectionProgressBarFill.parentElement;
                if (progressRoot) {
                    progressRoot.setAttribute('role', 'progressbar');
                    progressRoot.setAttribute('aria-label', `Postęp w dziale ${currentSec.title}`);
                    progressRoot.setAttribute('aria-valuemin', '0');
                    progressRoot.setAttribute('aria-valuemax', '100');
                    progressRoot.setAttribute('aria-valuenow', String(percent));
                }
            }

            // Render Stepper and Focus card
            this.renderRoadmapStepper();
            this.renderSubchapterFocusCard();
            if (this.dom.upcomingSectionsContainer) {
                this.dom.upcomingSectionsContainer.innerHTML = '';
            }
        }

        renderKonkursCurriculum() {
            const course = this.courses['konkurs-fizyka'];
            if (!course) return;

            // Ensure activeSectionId belongs to konkurs-fizyka
            if (!this.state.activeSectionId || !course.sections.some(s => s.id === this.state.activeSectionId)) {
                this.state.activeSectionId = course.sections[0].id;
            }

            const currentSec = this.getActiveSection() || course.sections[0];

            // Ensure activeSubchapterId belongs to currentSec
            if (currentSec.subchapters && currentSec.subchapters.length > 0) {
                if (!currentSec.subchapters.some(sub => sub.id === this.state.activeSubchapterId)) {
                    this.state.activeSubchapterId = currentSec.subchapters[0].id;
                }
            }

            // Render Contest Działy Grid (6 cards)
            if (this.dom.contestSectionsGrid) {
                this.dom.contestSectionsGrid.classList.remove('hidden');
                this.dom.contestSectionsGrid.innerHTML = '';

                course.sections.forEach(sec => {
                    const secTasks = sec.subchapters ? sec.subchapters.flatMap(s => s.tasks || []) : (sec.tasks || []);
                    const secTotal = secTasks.length;
                    const secDone = secTasks.filter(t => this.state.completedTasks.has(t.id)).length;
                    const secPercent = secTotal > 0 ? Math.round((secDone / secTotal) * 100) : 0;
                    const isActive = sec.id === currentSec.id;

                    const card = document.createElement('div');
                    card.className = `contest-section-card ${isActive ? 'active' : ''}`;
                    card.innerHTML = `
                        <div class="contest-sec-top">
                            <div class="contest-sec-icon-wrap">${sec.icon}</div>
                            <span class="contest-sec-badge">${sec.badge}</span>
                        </div>
                        <div class="contest-sec-body">
                            <h4 class="contest-sec-title">${sec.title}</h4>
                            <p class="contest-sec-desc">${sec.desc}</p>
                        </div>
                        <div class="contest-sec-progress">
                            <div class="contest-sec-progress-labels">
                                <span>Opanowane: ${secDone} / ${secTotal}</span>
                                <span>${secPercent}%</span>
                            </div>
                            <div class="contest-sec-progress-bar">
                                <div class="contest-sec-progress-fill" style="width: ${secPercent}%;"></div>
                            </div>
                        </div>
                    `;

                    card.addEventListener('click', () => {
                        this.setSection(sec.id);
                    });

                    this.dom.contestSectionsGrid.appendChild(card);
                });
            }

            // Update Header for the active Dział
            const secTasks = currentSec.subchapters ? currentSec.subchapters.flatMap(s => s.tasks || []) : (currentSec.tasks || []);
            const secTotal = secTasks.length;
            const secDone = secTasks.filter(t => this.state.completedTasks.has(t.id)).length;
            const secPercent = secTotal > 0 ? Math.round((secDone / secTotal) * 100) : 0;

            if (this.dom.sectionRoadmapHeader) {
                this.dom.sectionRoadmapHeader.classList.remove('hidden');
            }
            if (this.dom.currentSectionTitle) {
                this.dom.currentSectionTitle.textContent = `${currentSec.icon} ${currentSec.title}`;
            }
            if (this.dom.currentSectionBadge) {
                this.dom.currentSectionBadge.textContent = currentSec.badge;
            }
            if (this.dom.currentSectionDesc) {
                this.dom.currentSectionDesc.textContent = currentSec.desc;
            }
            if (this.dom.sectionTasksTotalLabel) {
                this.dom.sectionTasksTotalLabel.textContent = `Opanowano: ${secDone} / ${secTotal} zadań w dziale`;
            }
            if (this.dom.sectionProgressPercent) {
                this.dom.sectionProgressPercent.textContent = `${secPercent}%`;
            }
            if (this.dom.sectionProgressBarFill) {
                this.dom.sectionProgressBarFill.style.width = `${secPercent}%`;
            }

            // Render Stepper and Focus card
            this.renderRoadmapStepper();
            this.renderSubchapterFocusCard();

            // Hide upcoming sections teaser for contest
            if (this.dom.upcomingSectionsContainer) {
                this.dom.upcomingSectionsContainer.innerHTML = '';
            }
        }

        renderRoadmapStepper() {
            if (!this.dom.roadmapStepsRow) return;
            const currentSec = this.getActiveSection();
            if (!currentSec || !currentSec.subchapters) return;

            this.dom.roadmapStepsRow.innerHTML = '';

            currentSec.subchapters.forEach(sub => {
                const stepCard = document.createElement('button');
                stepCard.type = 'button';
                const isActive = sub.id === this.state.activeSubchapterId;
                const subDoneCount = sub.tasks.filter(t => this.state.completedTasks.has(t.id)).length;
                const totalInSub = sub.tasks.length;
                const isAllDone = totalInSub > 0 && subDoneCount === totalInSub;

                stepCard.className = 'stepper-step-card';
                if (isActive) stepCard.classList.add('active');
                if (isAllDone) stepCard.classList.add('completed');
                stepCard.setAttribute('aria-current', isActive ? 'step' : 'false');

                let statusBadgeText = isAllDone ? `✓ ${subDoneCount}/${totalInSub}` : `${subDoneCount}/${totalInSub} zadań`;

                stepCard.innerHTML = `
                    <div class="step-badge-num">${isAllDone ? '✓' : sub.number}</div>
                    <div class="step-card-text">
                        <span class="step-card-title">${sub.shortTitle || sub.title}</span>
                        <div class="step-card-meta">
                            <span class="step-status-tag">${statusBadgeText}</span>
                        </div>
                    </div>
                `;

                stepCard.addEventListener('click', () => {
                    this.setSubchapter(sub.id);
                });

                this.dom.roadmapStepsRow.appendChild(stepCard);
            });
        }

        renderSubchapterFocusCard() {
            if (!this.dom.subchapterFocusCard) return;
            const sub = this.getActiveSubchapter();
            if (!sub) return;

            const currentSec = this.getActiveSection();
            const subDoneCount = sub.tasks.filter(t => this.state.completedTasks.has(t.id)).length;
            const totalInSub = sub.tasks.length;
            const percent = totalInSub > 0 ? Math.round((subDoneCount / totalInSub) * 100) : 0;
            const nextSub = this.getNextSubchapter(sub.id);

            this.dom.subchapterFocusCard.innerHTML = `
                <div class="subchapter-focus-header">
                    <div class="sfh-info">
                        <div class="sfh-step-pill">
                            <span>${sub.icon} ${sub.number ? `Temat ${sub.number}` : ''}</span>
                        </div>
                        <h3 class="sfh-title">${sub.title}</h3>
                        <p class="sfh-desc">${sub.desc}</p>
                    </div>
                    <div class="sfh-progress-wrap">
                        <div class="sfh-progress-label">Postęp tematu: ${subDoneCount} z ${totalInSub} (${percent}%)</div>
                        <div class="sfh-progress-bar" role="progressbar" aria-label="Postęp tematu ${sub.title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
                            <div class="sfh-progress-fill" style="width: ${percent}%;"></div>
                        </div>
                    </div>
                </div>

                <!-- Mini Formula Box / Teoria -->
                ${(sub.id === 'sub-praca-matura' || (!sub.theory && !sub.formulaCheat)) ? '' : `
                <div class="subchapter-formula-box">
                    <div class="sfb-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        <span>${sub.theory ? 'Wstęp teoretyczny:' : 'Kluczowe wzory w tym temacie:'}</span>
                    </div>
                    <div class="sfb-content ${sub.theory ? 'has-theory' : ''}" id="subFormulaContent">${sub.theory ? sub.theory : '$$' + sub.formulaCheat + '$$'}</div>
                </div>
                `}

                <!-- Tasks Checklist -->
                <div class="subchapter-tasks-list" id="subchapterTasksListContainer">
                    <!-- Populated below -->
                </div>

                <!-- Milestone Action Banner -->
                <div class="milestone-action-banner ${subDoneCount === totalInSub && totalInSub > 0 ? 'milestone-banner-congrats' : ''}" id="milestoneBanner">
                    <!-- Populated below -->
                </div>
            `;

            // Render tasks inside the list
            const listContainer = this.dom.subchapterFocusCard.querySelector('#subchapterTasksListContainer');
            sub.tasks.forEach((task, idx) => {
                const isDone = this.state.completedTasks.has(task.id);
                const taskCard = document.createElement('div');
                taskCard.className = `task-item-card ${isDone ? 'task-done' : ''}`;

                const stars = '⭐'.repeat(task.difficulty);

                taskCard.innerHTML = `
                    <div class="task-item-left">
                        <button class="btn-task-checkbox" title="${isDone ? 'Oznacz jako nieukończone' : 'Oznacz jako rozwiązane'}" aria-label="${isDone ? 'Oznacz zadanie jako nieukończone' : 'Oznacz zadanie jako zrobione'}" aria-pressed="${isDone}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </button>
                        <div class="task-item-info">
                            <div class="task-item-top">
                                <span class="task-item-index">${(task.source || '').includes('Konkurs') || task.id.startsWith('kk-') ? '🏆 ' : ''}Zadanie ${task.number || (idx + 1)}</span>
                                ${task.points ? `<span class="badge-points">${task.points} pkt</span>` : ''}
                                <span class="badge-diff" title="Trudność: ${task.difficulty}/3">${stars}</span>
                            </div>
                            <h4 class="task-item-title">${task.title}</h4>
                            <div class="task-item-tags">
                                <span class="badge-source">${task.source}</span>
                            </div>
                        </div>
                    </div>
                    <div class="task-item-right">
                        <button class="btn btn-sm btn-outline-primary open-task-action-btn" aria-label="Otwórz zadanie ${task.number || (idx + 1)}">
                            <span>Rozwiąż</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                `;

                // Checkbox toggle (without opening task)
                const checkBtn = taskCard.querySelector('.btn-task-checkbox');
                checkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleTaskCompleted(task.id);
                });

                // Row click opens task
                taskCard.addEventListener('click', (e) => {
                    if (!e.target.closest('.btn-task-checkbox')) {
                        this.openTask(currentSec.id, task.id, sub.id);
                    }
                });

                listContainer.appendChild(taskCard);
            });

            // Milestone Banner Content
            const milestoneBanner = this.dom.subchapterFocusCard.querySelector('#milestoneBanner');
            if (subDoneCount === totalInSub && totalInSub > 0) {
                milestoneBanner.innerHTML = `
                    <div class="mab-text">
                        <div class="mab-text-title">🎉 Znakomicie! Opanowałeś temat: ${sub.shortTitle || sub.title}</div>
                        <div class="mab-text-sub">Wszystkie zadania z tego tematu są zrobione!</div>
                    </div>
                    <div class="mab-actions">
                        ${nextSub ? `<button class="btn btn-primary" id="nextSubchapterBtn">
                            <span>Przejdź do: ${nextSub.shortTitle || nextSub.title}</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>` : `<span class="pill-badge glow-badge">🏆 Opanowano cały dział ${currentSec.title}!</span>`}
                    </div>
                `;
                const nextBtn = milestoneBanner.querySelector('#nextSubchapterBtn');
                if (nextBtn && nextSub) {
                    nextBtn.addEventListener('click', () => {
                        this.unlockSubchapter(nextSub.id);
                    });
                }
            } else {
                const firstUnsolved = sub.tasks.find(t => !this.state.completedTasks.has(t.id)) || sub.tasks[0];
                milestoneBanner.innerHTML = `
                    <div class="mab-text">
                        <div class="mab-text-title">Twoja ścieżka postępu: ${subDoneCount} / ${totalInSub} ukończone</div>
                        <div class="mab-text-sub">Odhaczaj kolejne zadania, aby opanować ten temat.</div>
                    </div>
                    <div class="mab-actions">
                        ${firstUnsolved ? `<button class="btn btn-primary" id="continueTaskBtn">
                            <span>Kontynuuj: Zad. ${firstUnsolved.number || ''}</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>` : ''}
                        ${nextSub ? `<button class="btn btn-sm btn-ghost" id="earlyUnlockBtn" title="Przejdź do kolejnego tematu">
                            <span>Kolejny temat ➔</span>
                        </button>` : ''}
                    </div>
                `;
                const contBtn = milestoneBanner.querySelector('#continueTaskBtn');
                if (contBtn && firstUnsolved) {
                    contBtn.addEventListener('click', () => {
                        this.openTask(currentSec.id, firstUnsolved.id, sub.id);
                    });
                }
                const earlyBtn = milestoneBanner.querySelector('#earlyUnlockBtn');
                if (earlyBtn && nextSub) {
                    earlyBtn.addEventListener('click', () => {
                        this.setSubchapter(nextSub.id);
                    });
                }
            }

            // Trigger KaTeX for formula cheat box
            this.triggerKaTeX(this.dom.subchapterFocusCard.querySelector('#subFormulaContent'));
        }

        renderUpcomingSections() {
            if (!this.dom.upcomingSectionsContainer) return;
            const course = this.courses['matura-fizyka'];
            const otherSections = course.sections.filter(s => s.id !== this.state.activeSectionId);

            if (otherSections.length === 0) {
                this.dom.upcomingSectionsContainer.innerHTML = '';
                return;
            }

            this.dom.upcomingSectionsContainer.innerHTML = `
                <h3 class="usc-heading">Kolejne działy w kursie maturalnym:</h3>
                <div class="usc-grid">
                    ${otherSections.map(sec => {
                const isAvailable = !sec.isComingSoon;
                const pointerStyle = isAvailable ? 'cursor: pointer; border: 1px solid var(--accent);' : 'opacity: 0.7;';
                const dataAttr = isAvailable ? `data-section-id="${sec.id}"` : '';
                return `
                        <div class="usc-card" style="${pointerStyle}" ${dataAttr}>
                            <div class="usc-card-top">
                                <span class="usc-card-icon">${sec.icon}</span>
                                <span class="usc-card-badge">${sec.badge} ${isAvailable ? '(Dostępny)' : ''}</span>
                            </div>
                            <h4 class="usc-card-title">${sec.title}</h4>
                            <p class="usc-card-desc">${sec.desc}</p>
                        </div>
                        `;
            }).join('')}
                </div>
            `;

            this.dom.upcomingSectionsContainer.querySelectorAll('.usc-card').forEach(card => {
                if (card.dataset.sectionId) {
                    card.addEventListener('click', () => {
                        this.setSection(card.dataset.sectionId);
                        window.scrollTo(0, 0);
                    });
                }
            });
        }

        renderGenericSections() {
            // Fallback / Konkurs Kuratoryjny
            if (this.dom.sectionRoadmapHeader) {
                this.dom.sectionRoadmapHeader.classList.add('hidden');
            }
            if (this.dom.roadmapStepsRow) {
                this.dom.roadmapStepsRow.innerHTML = '';
            }
            if (this.dom.upcomingSectionsContainer) {
                this.dom.upcomingSectionsContainer.innerHTML = '';
            }

            const course = this.courses[this.state.activeCourseId];
            if (!course || !this.dom.subchapterFocusCard) return;

            this.dom.subchapterFocusCard.innerHTML = `
                <div class="subchapter-focus-header">
                    <div class="sfh-info">
                        <h3 class="sfh-title">${course.title}</h3>
                        <p class="sfh-desc">${course.subtitle}</p>
                    </div>
                </div>
                <div class="subchapter-tasks-list" id="konkursTasksList"></div>
            `;

            const listContainer = this.dom.subchapterFocusCard.querySelector('#konkursTasksList');
            course.sections.forEach(sec => {
                sec.tasks.forEach((task, idx) => {
                    const isDone = this.state.completedTasks.has(task.id);
                    const taskCard = document.createElement('div');
                    taskCard.className = `task-item-card ${isDone ? 'task-done' : ''}`;
                    taskCard.innerHTML = `
                        <div class="task-item-left">
                            <button class="btn-task-checkbox" title="Oznacz jako zrobione">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </button>
                            <div class="task-item-info">
                                <span class="task-item-index">Zadanie ${idx + 1}</span>
                                <h4 class="task-item-title">${task.title}</h4>
                                <div class="task-item-tags">
                                    <span class="badge-source">${task.source}</span>
                                </div>
                            </div>
                        </div>
                        <div class="task-item-right">
                            <button class="btn btn-sm btn-outline-primary">Rozwiąż ➔</button>
                        </div>
                    `;
                    taskCard.querySelector('.btn-task-checkbox').addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.toggleTaskCompleted(task.id);
                    });
                    taskCard.addEventListener('click', (e) => {
                        if (!e.target.closest('.btn-task-checkbox')) {
                            this.openTask(sec.id, task.id);
                        }
                    });
                    listContainer.appendChild(taskCard);
                });
            });
        }

        renderTaskWorkspace() {
            const data = this.getCurrentTask();
            if (!data) return;

            const { task, section, subchapter } = data;
            const course = this.courses[this.state.activeCourseId];

            // Workspace Header Breadcrumb
            if (this.dom.workspaceCourseBadge) {
                this.dom.workspaceCourseBadge.textContent = this.state.activeCourseId === 'matura-fizyka' ? 'Matura CKE' : course.title;
            }
            if (this.dom.workspaceSectionTitle) {
                const subText = subchapter ? ` / ${subchapter.shortTitle || subchapter.title}` : '';
                this.dom.workspaceSectionTitle.textContent = `${section.title}${subText}`;
            }

            // Task Prev/Next navigation states
            const allTasks = this.getAllTasksInActiveCourse();
            const currentIndex = allTasks.findIndex(item => item.task.id === task.id);
            if (this.dom.prevTaskBtn) this.dom.prevTaskBtn.disabled = currentIndex <= 0;
            if (this.dom.nextTaskBtn) this.dom.nextTaskBtn.disabled = currentIndex >= allTasks.length - 1;
            if (this.dom.bottomPrevTaskBtn) this.dom.bottomPrevTaskBtn.disabled = currentIndex <= 0;
            if (this.dom.bottomNextTaskBtn) this.dom.bottomNextTaskBtn.disabled = currentIndex >= allTasks.length - 1;

            if (this.dom.taskCounterBadge) {
                this.dom.taskCounterBadge.textContent = `Zadanie ${currentIndex + 1} z ${allTasks.length}`;
            }

            // Bottom Next Task Text
            if (this.dom.bottomNextBtnText) {
                if (subchapter) {
                    const isLastInSub = subchapter.tasks[subchapter.tasks.length - 1].id === task.id;
                    const nextSub = this.getNextSubchapter(subchapter.id);
                    if (isLastInSub && nextSub) {
                        this.dom.bottomNextBtnText.textContent = `Kolejny etap: ${nextSub.shortTitle} ➔`;
                    } else {
                        this.dom.bottomNextBtnText.textContent = 'Następne zadanie ➔';
                    }
                } else {
                    this.dom.bottomNextBtnText.textContent = 'Następne zadanie ➔';
                }
            }

            // Populate Task Jump Dropdown (grouped by subchapters across available sections)
            if (this.dom.taskJumpSelect) {
                this.dom.taskJumpSelect.innerHTML = '';
                course.sections.forEach(sec => {
                    if (sec.isComingSoon) return;
                    if (sec.subchapters && sec.subchapters.length > 0) {
                        sec.subchapters.forEach(sub => {
                            const group = document.createElement('optgroup');
                            group.label = `${sec.title} • ${sub.shortTitle || sub.title}`;
                            sub.tasks.forEach(t => {
                                const opt = document.createElement('option');
                                const isDone = this.state.completedTasks.has(t.id);
                                opt.value = `${sec.id}::${t.id}`;
                                opt.textContent = `${isDone ? '✓ ' : ''}${t.title}`;
                                if (t.id === task.id) opt.selected = true;
                                group.appendChild(opt);
                            });
                            this.dom.taskJumpSelect.appendChild(group);
                        });
                    } else if (sec.tasks && sec.tasks.length > 0) {
                        const group = document.createElement('optgroup');
                        group.label = sec.title;
                        sec.tasks.forEach(t => {
                            const opt = document.createElement('option');
                            const isDone = this.state.completedTasks.has(t.id);
                            opt.value = `${sec.id}::${t.id}`;
                            opt.textContent = `${isDone ? '✓ ' : ''}${t.title}`;
                            if (t.id === task.id) opt.selected = true;
                            group.appendChild(opt);
                        });
                        this.dom.taskJumpSelect.appendChild(group);
                    }
                });
            }

            // Task Content
            if (this.dom.taskTitle) this.dom.taskTitle.textContent = task.title;
            if (this.dom.taskMetaSource) this.dom.taskMetaSource.textContent = task.source;
            if (this.dom.taskDifficultyBadge) {
                this.dom.taskDifficultyBadge.textContent = '⭐'.repeat(task.difficulty);
                this.dom.taskDifficultyBadge.title = `Poziom trudności: ${task.difficulty} / 3`;
            }

            // Task tags are intentionally not displayed in the task view.
            if (this.dom.taskTagsContainer) {
                this.dom.taskTagsContainer.innerHTML = '';
            }

            // Sync Check Buttons state
            this.syncTaskCheckButtons(task.id);

            // Problem Text with KaTeX and possible SVG chart
            if (this.dom.taskProblemText) {
                let problemHtml = this.formatProblemText(task.problem);
                if (task.chartSvg) {
                    problemHtml += `<div class="chart-container-svg">${task.chartSvg}</div>`;
                }
                this.dom.taskProblemText.innerHTML = problemHtml;
                this.triggerKaTeX(this.dom.taskProblemText);
                this.setupInteractiveOptions(task);
            }

            // Solution Accordion Populating
            this.populateSolution(task);

            // Notify AI Chat Tutor of the current task
            if (this.chatTutor && typeof this.chatTutor.setTaskContext === 'function') {
                this.chatTutor.setTaskContext(this.state.activeCourseId, task);
            }
        }

        populateSolution(task) {
            if (this.dom.toggleSolutionBtn) {
                this.dom.toggleSolutionBtn.classList.toggle('hidden', !!task.statementOnly);
            }
            if (task.statementOnly) {
                this.updateSolutionAccordionUI(false);
                if (this.dom.solutionContainer) this.dom.solutionContainer.innerHTML = '';
                return;
            }
            const sol = task.solution;
            if (!sol) {
                if (this.dom.solutionContainer) {
                    this.dom.solutionContainer.innerHTML = `
                        <div class="solution-block" style="border-left: 3px solid var(--accent-indigo); background: rgba(99,102,241,0.05); padding: 16px; border-radius: 8px;">
                            <div class="block-title" style="display:flex; align-items:center; gap:8px; font-weight:600; color:var(--text-main); margin-bottom:8px;">
                                <span>✍️</span> Tryb samodzielnego rozwiązywania
                            </div>
                            <div class="block-body" style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">
                                Dla tego zadania oficjalne rozwiązanie krok po kroku nie zostało jeszcze opublikowane.
                                Spróbuj rozwiązać je samodzielnie lub skorzystaj z podpowiedzi <strong>Tutora AI</strong> w panelu bocznym!
                            </div>
                        </div>`;
                }
                const isOpen = this.state.revealedSolutions.has(task.id);
                this.updateSolutionAccordionUI(isOpen);
                return;
            }

            let html = '';
            const isSimple = !sol.steps || sol.steps.length === 0;

            if (isSimple) {
                html += `<div class="solution-block">
                    <div class="block-title">💡 Rozwiązanie</div>
                    <div class="block-body">`;

                if (sol.givens) {
                    html += `<strong>Dane i szukane:</strong><br>${this.formatMathText(sol.givens)}<br><br>`;
                }
                if (sol.intuition) {
                    html += `<strong>Wskazówka:</strong><br>${this.formatMathText(sol.intuition)}<br><br>`;
                }
                if (sol.numerical) {
                    html += `<strong>Obliczenia:</strong><br>${this.formatMathText(sol.numerical)}<br><br>`;
                }
                if (sol.answer) {
                    html += `<strong>Odpowiedź:</strong><br><span class="answer-highlight">${this.formatMathText(sol.answer)}</span><br><br>`;
                }
                if (sol.trap) {
                    html += `<strong>Uwaga:</strong><br>${this.formatMathText(sol.trap)}<br><br>`;
                }

                html += `</div></div>`;
            } else {
                if (sol.givens) {
                    html += `<div class="solution-block solution-givens-block">
                        <div class="block-title">📝 Dane i szukane</div>
                        <div class="block-body">${this.formatMathText(sol.givens)}</div>
                    </div>`;
                }

                html += `<div class="solution-block">
                    <div class="block-title">💡 Rozwiązanie krok po kroku</div>
                    <div class="block-body">`;

                if (sol.intuition) {
                    html += `<div class="sol-section" style="margin-bottom:12px;"><strong>Wskazówka:</strong><br>${this.formatMathText(sol.intuition)}</div>`;
                }

                html += `<div class="solution-steps-wrapper" style="margin-bottom:12px;">
                            <div class="steps-heading">
                                <span>Kroki wyprowadzenia:</span>
                            </div>
                            <div class="solution-steps-list">`;
                sol.steps.forEach((step, idx) => {
                    html += `<div class="step-item" style="margin-bottom:8px;">
                        <div class="step-badge" style="display:inline-block; font-size:0.75rem; font-weight:bold; color:var(--accent-indigo); background:rgba(99,102,241,0.15); padding:2px 6px; border-radius:4px; margin-bottom:4px;">KROK ${idx + 1}</div>
                        <div class="step-item-title" style="font-weight:600; margin-bottom:2px;">${step.title}</div>
                        <div class="step-item-content">${this.formatMathText(step.content)}</div>
                    </div>`;
                });
                html += `</div></div>`;

                if (sol.numerical) {
                    html += `<div class="sol-section" style="margin-bottom:12px;"><strong>Obliczenia liczbowe:</strong><br>${this.formatMathText(sol.numerical)}</div>`;
                }
                if (sol.answer) {
                    html += `<div class="sol-section answer-highlight" style="margin-bottom:12px;"><strong>Odpowiedź końcowa:</strong><br>${this.formatMathText(sol.answer)}</div>`;
                }
                if (sol.trap) {
                    html += `<div class="sol-section" style="color:var(--accent-amber);"><strong>⚠️ Uwaga (częsty błąd):</strong><br>${this.formatMathText(sol.trap)}</div>`;
                }

                html += `</div></div>`;
            }

            if (sol.source) {
                html += `<div class="solution-block"><div class="block-title">📄 Klucz CKE</div><div class="block-body">${this.formatMathText(sol.source)}</div></div>`;
            }
            this.dom.solutionContainer.classList.toggle('energy-solutions', task.id.startsWith('matura-cke-praca-'));
            this.dom.solutionContainer.innerHTML = html;
            this.triggerKaTeX(this.dom.solutionContainer);

            // Check if solution was previously opened for this task
            const isOpen = this.state.revealedSolutions.has(task.id);
            this.updateSolutionAccordionUI(isOpen);
        }

        setupInteractiveOptions(task) {
            if (!this.dom.taskProblemText) return;
            const currentSec = this.getActiveSection();
            const isPraca = currentSec && currentSec.id === 'm-praca';
            if (!isPraca) return;

            // 1. Multiple-choice questions (.problem-options-list)
            const optionLists = this.dom.taskProblemText.querySelectorAll('.problem-options-list');
            optionLists.forEach(list => {
                let correctLetter = (list.getAttribute('data-correct') || task.correctOption || '').trim().toUpperCase();
                if (!correctLetter && task.solution && task.solution.answer) {
                    const ansMatch = task.solution.answer.match(/(?:odpowiedź[:\s]*|odpowiedź:\s*)([A-D])/i) ||
                        task.solution.answer.match(/\b([A-D])\b/);
                    if (ansMatch) correctLetter = ansMatch[1].toUpperCase();
                }

                const items = list.querySelectorAll('.problem-option-item');
                items.forEach(item => {
                    item.classList.add('is-interactive');
                    item.addEventListener('click', () => {
                        const letterEl = item.querySelector('.problem-option-letter');
                        const letter = (item.getAttribute('data-option') || (letterEl ? letterEl.textContent : '')).trim().toUpperCase();

                        items.forEach(it => it.classList.remove('is-correct', 'is-incorrect'));

                        if (correctLetter && letter === correctLetter) {
                            item.classList.add('is-correct');
                        } else {
                            item.classList.add('is-incorrect');
                            if (correctLetter) {
                                items.forEach(it => {
                                    const lEl = it.querySelector('.problem-option-letter');
                                    const l = (it.getAttribute('data-option') || (lEl ? lEl.textContent : '')).trim().toUpperCase();
                                    if (l === correctLetter) it.classList.add('is-correct');
                                });
                            }
                        }
                    });
                });
            });

            // 2. Truth / False tables (.cke-table with .pf-box)
            const pfRows = this.dom.taskProblemText.querySelectorAll('tr[data-correct], tr');
            pfRows.forEach(row => {
                const pfBoxes = row.querySelectorAll('.pf-box');
                if (pfBoxes.length === 2) {
                    pfBoxes.forEach(box => {
                        box.classList.add('is-interactive');
                        box.addEventListener('click', () => {
                            const rowCorrect = (row.getAttribute('data-correct') || '').trim().toUpperCase();
                            const val = (box.getAttribute('data-pf') || box.textContent).trim().toUpperCase();
                            pfBoxes.forEach(b => b.classList.remove('is-correct', 'is-incorrect'));

                            if (rowCorrect && val === rowCorrect) {
                                box.classList.add('is-correct');
                            } else {
                                box.classList.add('is-incorrect');
                                if (rowCorrect) {
                                    pfBoxes.forEach(b => {
                                        const bVal = (b.getAttribute('data-pf') || b.textContent).trim().toUpperCase();
                                        if (bVal === rowCorrect) b.classList.add('is-correct');
                                    });
                                }
                            }
                        });
                    });
                }
            });
        }

        formatMathText(text) {
            if (!text) return '';
            return text.replace(/\\n/g, '\n').replace(/\r?\n/g, '<br>');
        }

        formatProblemText(rawText) {
            if (!rawText) return '';
            // If problem is already HTML-formatted (starts with <), preserve it directly
            if (rawText.trim().startsWith('<')) {
                return rawText;
            }
            // Normalize all newlines (literal \n or escaped \\n)
            let text = rawText.replace(/\\n/g, '\n').replace(/\r\n/g, '\n');

            // Split into paragraphs by double newlines
            const paragraphs = text.split(/\n\n+/);

            return paragraphs.map(p => {
                const lines = p.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);
                if (lines.length === 0) return '';

                // Check if this block contains multiple-choice options (A., B., C., D. or A), B), C), D))
                const hasOptions = lines.some(l => /^[A-D][.)]\s+/.test(l));
                if (hasOptions) {
                    let optionsHtml = '<div class="problem-options-list">';
                    let nonOptionsHtml = '';
                    lines.forEach(line => {
                        const optMatch = line.match(/^([A-D])[.)]\s+(.*)$/);
                        if (optMatch) {
                            optionsHtml += `<div class="problem-option-item">
                                <span class="problem-option-letter">${optMatch[1]}</span>
                                <span class="problem-option-text">${optMatch[2]}</span>
                            </div>`;
                        } else {
                            nonOptionsHtml += `<div class="problem-paragraph">${line}</div>`;
                        }
                    });
                    optionsHtml += '</div>';
                    return nonOptionsHtml + optionsHtml;
                }

                // Check if block contains open subquestions (a), b), c))
                const hasSubquestions = lines.some(l => /^[a-d]\)\s+/.test(l));
                if (hasSubquestions) {
                    return lines.map(l => {
                        const subMatch = l.match(/^([a-d]\))\s+(.*)$/);
                        if (subMatch) {
                            return `<div class="problem-subquestion-item">
                                <strong class="problem-subquestion-letter">${subMatch[1]}</strong>
                                <span class="problem-subquestion-text">${subMatch[2]}</span>
                            </div>`;
                        }
                        return `<div class="problem-paragraph">${l}</div>`;
                    }).join('');
                }

                // Standard paragraph
                return `<div class="problem-paragraph">${lines.join('<br>')}</div>`;
            }).join('');
        }

        triggerKaTeX(element) {
            if (!element) return;
            if (typeof renderMathInElement !== 'function') {
                setTimeout(() => this.triggerKaTeX(element), 100);
                return;
            }
            try {
                renderMathInElement(element, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\[', right: '\\]', display: true },
                        { left: '\\(', right: '\\)', display: false }
                    ],
                    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
                    throwOnError: false
                });
            } catch (err) {
                console.warn('KaTeX render error:', err);
            }
        }

        // ============================================================
        // Formula Drawer Logic
        // ============================================================
        toggleFormulaDrawer(open) {
            this.state.isFormulaDrawerOpen = open;
            if (open) {
                this._formulaReturnFocus = document.activeElement;
            }
            if (this.dom.formulaDrawer) {
                this.dom.formulaDrawer.classList.toggle('open', open);
                this.dom.formulaDrawer.setAttribute('aria-hidden', String(!open));
                this.dom.formulaDrawer.toggleAttribute('inert', !open);
            }
            if (this.dom.formulaDrawerBackdrop) {
                this.dom.formulaDrawerBackdrop.classList.toggle('open', open);
                this.dom.formulaDrawerBackdrop.setAttribute('aria-hidden', String(!open));
            }
            if (this.dom.formulaDrawerBtn) {
                this.dom.formulaDrawerBtn.setAttribute('aria-expanded', String(open));
            }
            document.body.classList.toggle('formula-drawer-open', open);
            if (open) {
                this.renderFormulaCards();
                if (this.dom.formulaSearchInput) {
                    setTimeout(() => this.dom.formulaSearchInput.focus(), 150);
                }
            } else if (this._formulaReturnFocus && typeof this._formulaReturnFocus.focus === 'function') {
                this._formulaReturnFocus.focus();
            }
        }

        renderFormulaDrawer() {
            if (!this.formulas || !this.formulas.categories) return;

            // Categories tabs
            if (this.dom.formulaCategoryTabs) {
                this.dom.formulaCategoryTabs.innerHTML = '';
                const formulaCategories = [
                    { id: 'all', name: 'Wszystkie' },
                    ...this.formulas.categories
                ];
                formulaCategories.forEach(cat => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'formula-tab-btn' + (cat.id === this.state.formulaCategory ? ' active' : '');
                    btn.textContent = cat.name;
                    btn.setAttribute('role', 'tab');
                    btn.setAttribute('aria-selected', String(cat.id === this.state.formulaCategory));
                    btn.addEventListener('click', () => {
                        this.state.formulaCategory = cat.id;
                        this.dom.formulaCategoryTabs.querySelectorAll('.formula-tab-btn').forEach(b => {
                            b.classList.remove('active');
                            b.setAttribute('aria-selected', 'false');
                        });
                        btn.classList.add('active');
                        btn.setAttribute('aria-selected', 'true');
                        this.renderFormulaCards();
                    });
                    this.dom.formulaCategoryTabs.appendChild(btn);
                });
            }

            // Constants
            if (this.dom.constantsContainer && this.formulas.constants) {
                this.dom.constantsContainer.innerHTML = '';
                this.formulas.constants.forEach(c => {
                    const pill = document.createElement('div');
                    pill.className = 'constant-pill';
                    pill.innerHTML = `
                        <span class="const-symbol">$${c.symbol}$</span>
                        <span class="const-name">${c.name}:</span>
                        <span class="const-val">$${c.value}$</span>
                    `;
                    this.dom.constantsContainer.appendChild(pill);
                });
                this.triggerKaTeX(this.dom.constantsContainer);
            }

            this.renderFormulaCards();
        }

        renderFormulaCards() {
            if (!this.dom.formulaCardsContainer || !this.formulas) return;

            const allFormulas = Array.isArray(this.formulas.formulas)
                ? this.formulas.formulas
                : (this.formulas.categories || []).flatMap(category =>
                    (category.formulas || []).map(formula => ({
                        ...formula,
                        category: category.id,
                        categoryName: category.name
                    }))
                );

            const q = this.state.formulaSearchQuery;
            const cat = this.state.formulaCategory;

            const filtered = allFormulas.filter(f => {
                const matchCat = (cat === 'all' || f.category === cat);
                const searchableText = [f.title, f.desc, f.meaning, f.latex, ...(f.tags || [])]
                    .filter(Boolean)
                    .join(' ')
                    .toLowerCase();
                const matchSearch = !q || searchableText.includes(q);
                return matchCat && matchSearch;
            });

            this.dom.formulaCardsContainer.innerHTML = '';

            if (filtered.length === 0) {
                this.dom.formulaCardsContainer.innerHTML = `
                    <div class="formula-empty-state">
                        Brak wzorów pasujących do "${q}". Spróbuj innej frazy lub kategorii.
                    </div>
                `;
                return;
            }

            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = 'formula-item-card glass-panel';
                card.innerHTML = `
                    <div class="formula-item-top">
                        <h4 class="formula-item-title">${item.title}</h4>
                        <span class="formula-item-cat">${item.categoryName || item.category}</span>
                    </div>
                    <div class="formula-latex-display">$$${item.latex}$$</div>
                    <p class="formula-item-desc">${item.desc || item.meaning || ''}</p>
                    <div class="formula-actions">
                        <button class="btn btn-xs btn-outline-primary ask-formula-btn" title="Poproś tutora AI o wyprowadzenie i zastosowanie">
                            <span>Zapytaj AI o ten wzór</span>
                        </button>
                    </div>
                `;

                card.querySelector('.ask-formula-btn').addEventListener('click', () => {
                    this.toggleFormulaDrawer(false);
                    if (this.dom.workspaceView.classList.contains('hidden')) {
                        const allTasks = this.getAllTasksInActiveCourse();
                        if (allTasks.length > 0) {
                            this.openTask(allTasks[0].section.id, allTasks[0].task.id);
                        }
                    }
                    if (this.chatTutor && typeof this.chatTutor.handleSendMessage === 'function') {
                        this.setAiPanelOpen(true, false);
                        setTimeout(() => {
                            this.chatTutor.handleSendMessage(`Wytłumacz mi intuicję fizyczną i zastosowanie wzoru: ${item.title} ($$${item.latex}$$). Kiedy mogę go bezpiecznie użyć?`);
                        }, 300);
                    }
                });

                this.dom.formulaCardsContainer.appendChild(card);
            });

            this.triggerKaTeX(this.dom.formulaCardsContainer);
        }

        showToast(message, duration = 2800) {
            if (!this.dom.toastNotification) return;
            this.dom.toastNotification.textContent = message;
            this.dom.toastNotification.classList.add('show');
            clearTimeout(this._toastTimer);
            this._toastTimer = setTimeout(() => {
                this.dom.toastNotification.classList.remove('show');
            }, duration);
        }
    }

    // Initialize Application
    window.app = new FizyKorekApp();
});
