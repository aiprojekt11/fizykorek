'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(__dirname, 'redesign-qa');
const appUrl = process.env.FIZYKOREK_URL || pathToFileURL(path.join(rootDir, 'index.html')).href;

const viewports = [
    { name: 'desktop-1440', width: 1440, height: 1000, minButtonSize: 40 },
    { name: 'tablet-960', width: 960, height: 900, minButtonSize: 40 },
    { name: 'mobile-390', width: 390, height: 844, minButtonSize: 44 },
];

function chromeExecutable() {
    const candidates = [
        process.env.PUPPETEER_EXECUTABLE_PATH,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    ].filter(Boolean);

    return candidates.find((candidate) => fs.existsSync(candidate));
}

function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function settle(page) {
    await page.evaluate(async () => {
        document.documentElement.style.scrollBehavior = 'auto';
        if (document.fonts && document.fonts.ready) {
            await Promise.race([
                document.fonts.ready,
                new Promise((resolve) => setTimeout(resolve, 2500)),
            ]);
        }
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    await wait(80);
}

async function screenshot(page, viewportName, state, fullPage = true) {
    const file = path.join(outputDir, `${viewportName}-${state}.png`);
    await page.screenshot({ path: file, fullPage, captureBeyondViewport: true });
    return path.relative(rootDir, file).replaceAll('\\', '/');
}

async function layoutSnapshot(page, label, minButtonSize) {
    return page.evaluate(({ snapshotLabel, expectedButtonSize }) => {
        const isRendered = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.display !== 'none'
                && style.visibility !== 'hidden'
                && Number(style.opacity) !== 0
                && rect.width > 0
                && rect.height > 0;
        };
        const isVisible = (element) => {
            if (!isRendered(element)) return false;
            const rect = element.getBoundingClientRect();
            return rect.right > 0 && rect.left < innerWidth;
        };

        const accessibleName = (element) => (
            element.getAttribute('aria-label')
            || element.getAttribute('title')
            || element.textContent
            || element.getAttribute('placeholder')
            || ''
        ).replace(/\s+/g, ' ').trim();

        const doc = document.documentElement;
        const body = document.body;
        const rootOverflow = Math.max(doc.scrollWidth, body.scrollWidth) - innerWidth;
        const controls = [...document.querySelectorAll('button, input, select, textarea, a[href], [role="button"]')]
            .filter(isVisible);
        const unnamedControls = controls
            .filter((element) => !accessibleName(element))
            .map((element) => element.outerHTML.slice(0, 180));
        const smallButtons = controls
            .filter((element) => element.matches('button, [role="button"], input[type="button"], input[type="submit"]'))
            .map((element) => {
                const rect = element.getBoundingClientRect();
                return {
                    name: accessibleName(element).slice(0, 80),
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                };
            })
            .filter(({ width, height }) => width < expectedButtonSize || height < expectedButtonSize);

        const brokenImages = [...document.images]
            .filter(isVisible)
            .filter((image) => image.complete && image.naturalWidth === 0)
            .map((image) => image.currentSrc || image.src);
        const pendingImages = [...document.images]
            .filter(isVisible)
            .filter((image) => !image.complete)
            .map((image) => image.currentSrc || image.src);
        const mathErrors = [...document.querySelectorAll('.katex-error')]
            .filter(isVisible)
            .map((element) => element.textContent.slice(0, 160));

        const isInsideHorizontalScroller = (element) => {
            let ancestor = element.parentElement;
            while (ancestor && ancestor !== body) {
                const overflow = getComputedStyle(ancestor).overflowX;
                if (overflow === 'auto' || overflow === 'scroll') return true;
                ancestor = ancestor.parentElement;
            }
            return false;
        };
        const overflowOffenders = [...document.querySelectorAll(
            '#appHeader *, #dashboardView:not(.hidden) *, #workspaceView:not(.hidden) *',
        )]
            .filter(isRendered)
            .filter((element) => !element.closest('.formula-drawer, .formula-drawer-backdrop, .ambient-glow'))
            .map((element) => {
                const rect = element.getBoundingClientRect();
                return { element, rect };
            })
            .filter(({ rect }) => rect.left < -2 || rect.right > innerWidth + 2)
            .filter(({ element }) => !isInsideHorizontalScroller(element))
            .slice(0, 12)
            .map(({ element, rect }) => ({
                selector: element.id
                    ? `#${element.id}`
                    : `${element.tagName.toLowerCase()}.${String(element.className).trim().replace(/\s+/g, '.')}`,
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
            }));

        return {
            label: snapshotLabel,
            viewport: { width: innerWidth, height: innerHeight },
            document: { width: Math.max(doc.scrollWidth, body.scrollWidth), height: doc.scrollHeight },
            rootOverflow,
            overflowOffenders,
            mathRendererReady: typeof window.renderMathInElement === 'function',
            unnamedControls,
            smallButtons,
            brokenImages,
            pendingImages,
            mathErrors,
        };
    }, { snapshotLabel: label, expectedButtonSize: minButtonSize });
}

async function selectRepresentativeTask(page) {
    return page.evaluate(() => {
        const course = window.app?.courses?.['matura-fizyka'];
        assertApp(course, 'Nie znaleziono kursu matura-fizyka.');

        const withTasks = (section) => (section.subchapters || []).some((sub) => (sub.tasks || []).length)
            || (section.tasks || []).length;
        const section = course.sections.find((item) => item.id === 'm-praca' && withTasks(item))
            || course.sections.find(withTasks);
        assertApp(section, 'Nie znaleziono działu zawierającego zadania.');

        const subchapter = (section.subchapters || []).find((item) => (item.tasks || []).length) || null;
        const tasks = subchapter ? subchapter.tasks : section.tasks;
        const task = tasks.find((item) => /<img|<svg|<table|energy-table/i.test(item.problem || ''))
            || tasks.find((item) => !item.statementOnly && item.solution)
            || tasks[0];
        assertApp(task, 'Nie znaleziono reprezentatywnego zadania.');

        window.app.openTask(section.id, task.id, subchapter?.id || null, false);
        return { sectionId: section.id, subchapterId: subchapter?.id || null, taskId: task.id };

        function assertApp(value, message) {
            if (!value) throw new Error(message);
        }
    });
}

async function dashboardState(page) {
    await page.evaluate(() => {
        window.app.setCourse('matura-fizyka');
        const course = window.app.courses['matura-fizyka'];
        const preferred = course.sections.find((section) => section.id === 'm-praca' && !section.isComingSoon)
            || course.sections.find((section) => !section.isComingSoon)
            || course.sections[0];
        if (preferred) window.app.setSection(preferred.id, false);
        window.app.showDashboard(false);
        window.scrollTo(0, 0);
    });
    await settle(page);
    await page.waitForSelector('#dashboardView:not(.hidden)');
}

async function verifyEnergyTheoryDiagrams(page, viewport, states, screenshots) {
    const theorySubchapters = await page.evaluate(() => {
        const section = window.app.courses['matura-fizyka'].sections.find((item) => item.id === 'm-praca');
        return (section?.subchapters || [])
            .filter((subchapter) => subchapter.theory && (subchapter.theory.includes('theory-placeholder') || subchapter.theory.includes('theory-figure')))
            .map((subchapter) => ({
                id: subchapter.id,
                expected: (subchapter.theory.match(/class="(theory-placeholder|theory-figure)"/g) || []).length,
            }));
    });

    assert.equal(theorySubchapters.length, 4, 'Nie znaleziono czterech podrozdziałów teorii.');

    for (const subchapter of theorySubchapters) {
        await page.evaluate((subchapterId) => {
            window.app.setSubchapter(subchapterId, false);
            document.querySelector('#subchapterFocusCard')?.scrollIntoView({ block: 'start' });
        }, subchapter.id);
        await settle(page);

        const theoryState = await page.evaluate(() => ({
            count: document.querySelectorAll('.theory-placeholder, .theory-figure').length,
            brokenImages: [...document.querySelectorAll('.theory-diagram')]
                .filter((img) => img.naturalWidth === 0).map((img) => img.src),
        }));
        assert.equal(theoryState.count, subchapter.expected, `Nieprawidłowa liczba elementów teorii w ${subchapter.id}.`);
        assert.deepEqual(theoryState.brokenImages, [], `Uszkodzone obrazy w ${subchapter.id}.`);

        states.push(await layoutSnapshot(page, `theory-${subchapter.id}`, viewport.minButtonSize));
        if (viewport.width === 1440 || viewport.width === 390) {
            screenshots.push(await screenshot(page, viewport.name, `theory-${subchapter.id}`));
        }
    }
}

async function verifyAiToggle(page, viewportName) {
    const button = await page.$('#toggleAiPanelBtn');
    if (!button) return { skipped: true, reason: 'Brak #toggleAiPanelBtn' };

    const before = await page.evaluate(() => {
        const grid = document.querySelector('#workspaceLayoutGrid');
        const panel = document.querySelector('#chatWorkspacePanel');
        const buttonEl = document.querySelector('#toggleAiPanelBtn');
        return {
            gridClass: grid?.className || '',
            panelClass: panel?.className || '',
            expanded: buttonEl?.getAttribute('aria-expanded'),
        };
    });
    await button.click();
    await settle(page);
    const after = await page.evaluate(() => {
        const grid = document.querySelector('#workspaceLayoutGrid');
        const panel = document.querySelector('#chatWorkspacePanel');
        return { gridClass: grid?.className || '', panelClass: panel?.className || '' };
    });
    assert.notDeepEqual(after, before, 'Przycisk panelu AI nie zmienił stanu układu.');
    if (before.expanded === 'true') {
        await button.click();
        await settle(page);
    }
    const openState = await page.evaluate(() => {
        const buttonEl = document.querySelector('#toggleAiPanelBtn');
        const panel = document.querySelector('#chatWorkspacePanel');
        const style = panel ? getComputedStyle(panel) : null;
        return {
            expanded: buttonEl?.getAttribute('aria-expanded'),
            visible: Boolean(panel && style && style.visibility !== 'hidden' && style.display !== 'none'),
        };
    });
    assert.equal(openState.expanded, 'true', 'Przycisk AI nie zgłasza stanu otwartego.');
    assert.equal(openState.visible, true, 'Panel AI nie jest widoczny po otwarciu.');
    const screenshotPath = page.viewport().width <= 960
        ? await screenshot(page, viewportName, 'ai-open', false)
        : null;
    if (before.expanded !== 'true') {
        await button.click();
        await settle(page);
    }
    return { skipped: false, screenshot: screenshotPath };
}

async function verifyTaskNavigation(page) {
    const next = await page.$('#nextTaskBtn:not([disabled])');
    const previous = await page.$('#prevTaskBtn');
    if (!next || !previous) return { skipped: true, reason: 'Brak dostępnej pary następne/poprzednie' };

    const taskBefore = await page.evaluate(() => window.app.state.activeTaskId);
    await next.click();
    await settle(page);
    const taskAfter = await page.evaluate(() => window.app.state.activeTaskId);
    assert.notEqual(taskAfter, taskBefore, 'Nawigacja „Następne” nie zmieniła zadania.');
    await previous.click();
    await settle(page);
    const taskReturned = await page.evaluate(() => window.app.state.activeTaskId);
    assert.equal(taskReturned, taskBefore, 'Nawigacja „Poprzednie” nie wróciła do zadania.');
    return { skipped: false };
}

async function verifyCompletionToggle(page) {
    const button = await page.$('#taskCheckToggleBtn');
    if (!button) return { skipped: true, reason: 'Brak #taskCheckToggleBtn' };

    const before = await page.evaluate(() => ({
        className: document.querySelector('#taskCheckToggleBtn')?.className || '',
        label: document.querySelector('#taskCheckLabelText')?.textContent.trim() || '',
    }));
    await button.click();
    await settle(page);
    const after = await page.evaluate(() => ({
        className: document.querySelector('#taskCheckToggleBtn')?.className || '',
        label: document.querySelector('#taskCheckLabelText')?.textContent.trim() || '',
    }));
    assert.notDeepEqual(after, before, 'Przycisk ukończenia zadania nie zmienił stanu.');
    await page.click('#taskCheckToggleBtn');
    await settle(page);
    return { skipped: false };
}

async function verifyFormulaDrawer(page, viewportName) {
    const opener = await page.$('#formulaDrawerBtn');
    const drawer = await page.$('#formulaDrawer');
    if (!opener || !drawer) return { skipped: true, reason: 'Brak kontrolek karty wzorów' };

    await opener.click();
    await page.waitForFunction(() => document.querySelector('#formulaDrawer')?.classList.contains('open'));
    await settle(page);
    const screenshotPath = await screenshot(page, viewportName, 'formulas', false);
    await page.waitForFunction(() => document.activeElement?.id === 'formulaSearchInput', { timeout: 1500 });
    const focusedId = await page.evaluate(() => document.activeElement?.id || '');
    assert.equal(focusedId, 'formulaSearchInput', 'Po otwarciu karty wzorów fokus nie trafił do wyszukiwarki.');
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !document.querySelector('#formulaDrawer')?.classList.contains('open'));
    return { skipped: false, screenshot: screenshotPath };
}

async function runViewport(browser, viewport) {
    const page = await browser.newPage();
    const pageErrors = [];
    const localResourceFailures = [];

    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('requestfailed', (request) => {
        if (request.url().startsWith('file:')) {
            localResourceFailures.push(`${request.url()} (${request.failure()?.errorText || 'unknown'})`);
        }
    });

    await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
    await page.evaluateOnNewDocument(() => {
        try {
            localStorage.clear();
        } catch (_) {
            // Some file:// policies can block storage. A fresh browser profile is enough in that case.
        }
    });
    await page.goto(appUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForFunction(() => window.app && window.app.courses, { timeout: 15000 });
    await page.addStyleTag({
        content: '*,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important;transition:none!important;scroll-behavior:auto!important}',
    });

    const states = [];
    const screenshots = [];

    await dashboardState(page);
    states.push(await layoutSnapshot(page, 'dashboard', viewport.minButtonSize));
    screenshots.push(await screenshot(page, viewport.name, 'dashboard'));

    await verifyEnergyTheoryDiagrams(page, viewport, states, screenshots);

    const selectedTask = await selectRepresentativeTask(page);
    await settle(page);
    await page.waitForFunction(() => [...document.querySelectorAll('#taskProblemText img')].every((image) => image.complete));
    states.push(await layoutSnapshot(page, 'task', viewport.minButtonSize));
    screenshots.push(await screenshot(page, viewport.name, 'task'));

    const interactions = {
        aiToggle: await verifyAiToggle(page, viewport.name),
        navigation: await verifyTaskNavigation(page),
        completion: await verifyCompletionToggle(page),
    };
    if (interactions.aiToggle.screenshot) screenshots.push(interactions.aiToggle.screenshot);

    const solutionButton = await page.$('#toggleSolutionBtn:not(.hidden)');
    if (solutionButton) {
        await solutionButton.click();
        await page.waitForFunction(() => !document.querySelector('#solutionContainer')?.classList.contains('hidden'));
        await page.waitForFunction(() => [...document.querySelectorAll('#solutionContainer img')].every((image) => image.complete));
        await settle(page);
        states.push(await layoutSnapshot(page, 'solution', viewport.minButtonSize));
        screenshots.push(await screenshot(page, viewport.name, 'solution'));
    } else {
        interactions.solution = { skipped: true, reason: 'Reprezentatywne zadanie nie ma rozwiązania' };
    }

    interactions.formulaDrawer = await verifyFormulaDrawer(page, viewport.name);
    if (interactions.formulaDrawer.screenshot) screenshots.push(interactions.formulaDrawer.screenshot);

    await page.close();
    return {
        viewport,
        selectedTask,
        states,
        interactions,
        screenshots,
        pageErrors,
        localResourceFailures,
    };
}

(async () => {
    fs.mkdirSync(outputDir, { recursive: true });
    const executablePath = chromeExecutable();
    const browser = await puppeteer.launch({
        headless: true,
        ...(executablePath ? { executablePath } : {}),
    });

    const results = [];
    try {
        for (const viewport of viewports) {
            results.push(await runViewport(browser, viewport));
        }
    } finally {
        await browser.close();
    }

    const failures = [];
    const warnings = [];
    for (const result of results) {
        for (const state of result.states) {
            const prefix = `${result.viewport.name}/${state.label}`;
            if (state.rootOverflow > 2) failures.push(`${prefix}: poziomy overflow ${state.rootOverflow}px`);
            if (state.overflowOffenders.length) failures.push(`${prefix}: elementy poza viewportem: ${JSON.stringify(state.overflowOffenders)}`);
            if (state.brokenImages.length) failures.push(`${prefix}: uszkodzone obrazy: ${state.brokenImages.join(', ')}`);
            if (state.pendingImages.length) failures.push(`${prefix}: niedokończone obrazy: ${state.pendingImages.join(', ')}`);
            if (state.mathErrors.length) failures.push(`${prefix}: błędy KaTeX: ${state.mathErrors.join(' | ')}`);
            if (!state.mathRendererReady) failures.push(`${prefix}: renderer KaTeX nie został załadowany`);
            if (state.unnamedControls.length) failures.push(`${prefix}: kontrolki bez nazwy: ${state.unnamedControls.join(' | ')}`);
            if (state.smallButtons.length) warnings.push(`${prefix}: małe przyciski: ${JSON.stringify(state.smallButtons)}`);
        }
        if (result.pageErrors.length) failures.push(`${result.viewport.name}: błędy strony: ${result.pageErrors.join(' | ')}`);
        if (result.localResourceFailures.length) failures.push(`${result.viewport.name}: błędy lokalnych zasobów: ${result.localResourceFailures.join(' | ')}`);
    }

    const report = {
        generatedAt: new Date().toISOString(),
        appUrl,
        pass: failures.length === 0 && (!process.env.STRICT_UI || warnings.length === 0),
        failures,
        warnings,
        results,
    };
    fs.writeFileSync(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));

    if (warnings.length) {
        console.warn(`WARN: ${warnings.length} ostrzeżeń o rozmiarach przycisków.`);
        warnings.forEach((warning) => console.warn(`- ${warning}`));
    }
    if (failures.length) {
        console.error(`FAIL: ${failures.length} problemów układu lub interakcji.`);
        failures.forEach((failure) => console.error(`- ${failure}`));
        process.exitCode = 1;
    } else if (process.env.STRICT_UI && warnings.length) {
        console.error('FAIL: STRICT_UI=1 traktuje ostrzeżenia jako błędy.');
        process.exitCode = 1;
    } else {
        console.log(`PASS: ${viewports.length} widoki, bez overflow i błędów interakcji.`);
    }
    console.log(`Zrzuty i raport: ${path.relative(rootDir, outputDir)}`);
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
