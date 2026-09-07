import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(new URL('../../../../package.json', import.meta.url));
const puppeteer = require('puppeteer');

const widths = [1600, 1512, 1440, 1366, 1280, 1200, 1120, 1024, 768, 640, 375];

const pages = {
    portal: {
        ours: 'http://localhost:5200/',
        theirs: 'https://www.wikipedia.org/',
        probes: [
            { name: 'masthead', ours: '@region(top)', theirs: 'main' },
            { name: 'wordmark', ours: 'img[alt="Wikipedia"]', theirs: '.central-textlogo__image' },
            { name: 'slogan', ours: '@region(top) p:has(img) + p .pd-paragraph', theirs: '.localized-slogan' },
            { name: 'ring-first-language', ours: '@region(top) div[at="1"]', theirs: '#js-link-box-en' },
            { name: 'search-form', ours: 'form', theirs: '#search-form' },
            { name: 'search-input', ours: 'input[name=search]', theirs: '#searchInput' },
            { name: 'content', ours: '@region(main)', theirs: '.footer' },
            { name: 'cards', ours: '.pd-index-card', theirs: '.other-project', count: 12 },
            { name: 'first-card', ours: '.pd-index-card', theirs: '.other-project' },
            { name: 'footer', ours: '@region(bottom)', theirs: '.footer' }
        ]
    },
    article: {
        ours: 'http://localhost:5200/article',
        theirs: 'https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Layout',
        probes: [
            { name: 'container', ours: 'main', theirs: '.mw-page-container' },
            { name: 'content', ours: '@region(main)', theirs: '#mw-content-text .mw-parser-output' },
            { name: 'sidebar', ours: '@region(left), @region(top)', theirs: '#vector-toc' },
            { name: 'title', ours: '@region(top) .pd-title h2', theirs: '#firstHeading' },
            { name: 'first-paragraph', ours: '@region(main) .pd-chapter p', theirs: '#mw-content-text .mw-parser-output p:not(:empty)' }
        ]
    }
};

const styles = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'color', 'backgroundColor', 'marginTop', 'marginBottom', 'paddingTop', 'paddingLeft', 'borderBottomWidth', 'borderBottomColor'];

// The refusal never carries a class of its own — styled-components emit hashes —
// so it is only ever found in the text a reader would actually see.
const refusals = /\$Chemistry:|Bond Constructor Failed|a piece of writing |an index card |a book (opens|carries|ends)|a title means|this one (holds|says|carries|means|opens|ends)/g;
const objects = /\$Chemistry\.\$?[A-Za-z]+/g;


// The devices a reader actually holds, not widths in the abstract. Emulation
// carries the pixel ratio and the touch flag too, which change what CSS applies.
const devices = {
    'desktop-1600': { width: 1600, height: 1000, deviceScaleFactor: 1, isMobile: false },
    'laptop-1440': { width: 1440, height: 900, deviceScaleFactor: 2, isMobile: false },
    'laptop-1280': { width: 1280, height: 800, deviceScaleFactor: 2, isMobile: false },
    'narrow-1120': { width: 1120, height: 800, deviceScaleFactor: 1, isMobile: false },
    'tablet-820': { width: 820, height: 1180, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    'tablet-768': { width: 768, height: 1024, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    'phone-430': { width: 430, height: 932, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
    'phone-390': { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
    'phone-375': { width: 375, height: 667, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    'phone-360': { width: 360, height: 800, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
};

const phone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// Two full pages side by side in one image, labelled — so a difference is SEEN
// rather than inferred from two numbers read minutes apart.
async function compare(browser, named, page, device, out) {
    const shots = {};
    for (const side of ['ours', 'theirs']) {
        const tab = await browser.newPage();
        await tab.setViewport(devices[device]);
        if (devices[device].isMobile) await tab.setUserAgent(phone);
        await tab.goto(side === 'ours' ? page.ours : page.theirs, { waitUntil: 'networkidle0', timeout: 90000 });
        await settle(tab);
        shots[side] = (await tab.screenshot({ fullPage: true, encoding: 'base64' }));
        await tab.close();
    }
    const sheet = await browser.newPage();
    const wide = Math.min(devices[device].width, 760);
    await sheet.setViewport({ width: wide * 2 + 48, height: 1000 });
    await sheet.setContent(`<style>
        body{margin:0;background:#333;font:12px system-ui;display:flex;gap:16px;padding:16px}
        figure{margin:0;flex:1}figcaption{color:#fff;padding:4px 0;font-weight:700}
        img{width:100%;display:block;border:1px solid #666}
      </style>
      <figure><figcaption>OURS — ${named} @ ${device}</figcaption><img src="data:image/png;base64,${shots.ours}"></figure>
      <figure><figcaption>WIKIPEDIA — ${named} @ ${device}</figcaption><img src="data:image/png;base64,${shots.theirs}"></figure>`);
    await sheet.evaluate(async () => { await Promise.all([...document.images].filter(i => !i.complete).map(i => new Promise(d => { i.onload = i.onerror = d; }))); });
    const path = join(out, `compare-${named}-${device}.png`);
    await sheet.screenshot({ path, fullPage: true });
    await sheet.close();
    return path;
}

async function settle(page) {
    // A lazily-loaded image can never resolve, so every wait is raced against a cap.
    await page.evaluate(async () => {
        const capped = (waiting, ms) => Promise.race([waiting, new Promise(done => setTimeout(done, ms))]);
        await capped(document.fonts.ready, 5000);
        await capped(Promise.all([...document.images]
            .filter(image => !image.complete)
            .map(image => new Promise(done => { image.onload = image.onerror = done; }))), 8000);
        await new Promise(done => requestAnimationFrame(() => requestAnimationFrame(done)));
    });
}

async function look(page, probes, side) {
    return page.evaluate((probes, side, styles) => {
        const regions = new Map();
        for (const element of document.querySelectorAll('main *, main')) {
            const named = getComputedStyle(element).gridArea.split(' / ')[0];
            if (!regions.has(named)) regions.set(named, []);
            regions.get(named).push(element);
        }
        const region = (named) => regions.get(named) || [];
        const scoped = (selector) => selector.startsWith('>') ? ':scope ' + selector : selector;
        const find = (selector) => selector.startsWith('@region(')
            ? region(selector.slice(8, selector.indexOf(')'))).flatMap(held =>
                selector.length > selector.indexOf(')') + 1
                    ? [...held.querySelectorAll(scoped(selector.slice(selector.indexOf(')') + 1).trim()))]
                    : [held])
            : [...document.querySelectorAll(selector)];
        const seen = {};
        for (const probe of probes) {
            const selector = probe[side];
            const found = selector.split(',').flatMap(one => find(one.trim()));
            if (found.length === 0) { seen[probe.name] = { missing: true }; continue; }
            // The first DRAWN match, not the first match — an invisible element is not what a reader compares.
            const element = found.find(one => { const box = one.getBoundingClientRect(); return box.width > 0 && box.height > 0; }) ?? found[0];
            const box = element.getBoundingClientRect();
            const computed = getComputedStyle(element);
            seen[probe.name] = {
                count: found.length,
                x: Math.round(box.x), y: Math.round(box.y),
                width: Math.round(box.width), height: Math.round(box.height),
                style: Object.fromEntries(styles.map(name => [name, computed[name]]))
            };
        }
        return seen;
    }, probes, side, styles);
}

async function read(browser, url, width, probes, side, shot) {
    const page = await browser.newPage();
    const noise = [];
    page.on('pageerror', thrown => noise.push('pageerror: ' + thrown.message.split('\n')[0]));
    page.on('console', spoken => { if (spoken.type() === 'error') noise.push('console: ' + spoken.text().split('\n')[0].slice(0, 140)); });
    page.on('response', answered => { if (answered.status() >= 400) noise.push(answered.status() + ' ' + answered.url()); });
    await page.setViewport({ width, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });
    await settle(page);

    const text = await page.evaluate(() => document.body.innerText);
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    const seen = await look(page, probes, side);
    // The whole page, never the first screen — the bottom is where it was wrong.
    if (shot) await page.screenshot({ path: shot, fullPage: true });
    await page.close();

    return {
        height, seen, noise,
        refused: [...new Set(text.match(refusals) || [])],
        objects: [...new Set(text.match(objects) || [])]
    };
}

async function main() {
    const args = process.argv.slice(2);
    const out = (args.find(a => a.startsWith('--out=')) || '--out=./check').slice(6);
    const only = (args.find(a => a.startsWith('--only=')) || '--only=').slice(7);
    const chosen = (args.find(a => a.startsWith('--widths=')) || '').slice(9);
    const at = chosen ? chosen.split(',').map(Number) : widths;
    const skipTheirs = args.includes('--ours-only');
    mkdirSync(out, { recursive: true });

    const browser = await puppeteer.launch({ headless: 'new', protocolTimeout: 180000 });
    const report = [];
    let faults = 0;

    for (const [named, page] of Object.entries(pages)) {
        if (only && only !== named) continue;
        for (const width of at) {
            const ours = await read(browser, page.ours, width, page.probes, 'ours', join(out, `${named}-${width}-ours.png`));
            const theirs = skipTheirs ? null
                : await read(browser, page.theirs, width, page.probes, 'theirs', join(out, `${named}-${width}-theirs.png`));

            report.push(`\n=== ${named} @ ${width} ===`);
            report.push(`  height        ours ${ours.height}` + (theirs ? `  theirs ${theirs.height}  delta ${ours.height - theirs.height}` : ''));

            if (ours.refused.length) { faults++; report.push(`  REFUSED       ${ours.refused.join(' | ')}`); }
            if (ours.objects.length) { faults++; report.push(`  OBJECT TEXT   ${ours.objects.join(' | ')}`); }
            for (const line of [...new Set(ours.noise)]) { faults++; report.push(`  NOISE         ${line}`); }

            for (const probe of page.probes) {
                const mine = ours.seen[probe.name];
                const yours = theirs?.seen[probe.name];
                // A probe that matched nothing is a fault, never a zero.
                if (mine.missing) { faults++; report.push(`  MISSING       ${probe.name}  (ours: ${probe.ours})`); continue; }
                if (probe.count !== undefined && mine.count !== probe.count) {
                    faults++; report.push(`  COUNT         ${probe.name}  expected ${probe.count}, found ${mine.count}`);
                }
                if (!yours) continue;
                if (yours.missing) { report.push(`  no reference  ${probe.name}  (theirs: ${probe.theirs})`); continue; }
                const off = ['x', 'y', 'width', 'height'].filter(side => Math.abs(mine[side] - yours[side]) > 1);
                const drift = styles.filter(name => mine.style[name] !== yours.style[name]);
                if (off.length || drift.length) {
                    faults++;
                    report.push(`  ${probe.name}`);
                    for (const side of off) report.push(`      ${side.padEnd(8)} ours ${String(mine[side]).padStart(6)}   theirs ${String(yours[side]).padStart(6)}   delta ${mine[side] - yours[side]}`);
                    for (const name of drift) report.push(`      ${name.padEnd(18)} ours ${mine.style[name]}   theirs ${yours.style[name]}`);
                }
            }
        }
    }

    await browser.close();
    const text = report.join('\n');
    writeFileSync(join(out, 'report.txt'), text);
    console.log(text);
    console.log(`\n${faults} fault${faults === 1 ? '' : 's'}. Screenshots and report in ${out}`);
    process.exit(faults === 0 ? 0 : 1);
}

async function outline(url) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });
    await settle(page);
    console.log(await page.evaluate(() => {
        const rows = [];
        const walk = (element, depth) => {
            if (depth > 9) return;
            const box = element.getBoundingClientRect();
            const named = String(element.className || '').split(' ').filter(one => one && !one.startsWith('sc-')).slice(0, 3).join('.');
            rows.push('  '.repeat(depth) + element.tagName.toLowerCase() + (element.id ? '#' + element.id : '') + (named ? '.' + named : '')
                + ` [${Math.round(box.x)},${Math.round(box.y)} ${Math.round(box.width)}x${Math.round(box.height)}]`
                + ` ${getComputedStyle(element).gridArea.split(' / ')[0]}`);
            for (const child of element.children) walk(child, depth + 1);
        };
        walk(document.body, 0);
        return 'scrollHeight ' + document.documentElement.scrollHeight + '\n' + rows.join('\n');
    }));
    await browser.close();
}

async function comparing() {
    const args = process.argv.slice(2);
    const out = (args.find(a => a.startsWith('--out=')) || '--out=./check').slice(6);
    const only = (args.find(a => a.startsWith('--only=')) || '--only=').slice(7);
    const chosen = (args.find(a => a.startsWith('--devices=')) || '').slice(10);
    const at = chosen ? chosen.split(',') : Object.keys(devices);
    mkdirSync(out, { recursive: true });
    const browser = await puppeteer.launch({ headless: 'new', protocolTimeout: 180000 });
    for (const [named, page] of Object.entries(pages)) {
        if (only && only !== named) continue;
        for (const device of at) console.log(await compare(browser, named, page, device, out));
    }
    await browser.close();
}

const asked = process.argv.indexOf('--outline');
if (asked >= 0) await outline(process.argv[asked + 1]);
else if (process.argv.includes('--compare')) await comparing();
else await main();
