import puppeteer from 'puppeteer';
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// ONE BROWSER, KEPT OPEN — the tool Debugging a Page names as the one the day was missing. The
// first call launches Chrome and leaves it running with its endpoint written beside this file;
// every later call connects in milliseconds, asks one question of the page that is already open,
// prints the answer, and disconnects without closing. The page keeps its scroll, its hot updates
// and its console between questions.
//
//   look open <url>              open (or reopen) the page and wait until the book is drawn
//   look reload                  reload it and wait for the book again
//   look box <selector> [depth]  the rendered tree of a region with each element's computed box
//   look at <selector>           every match with its page-top and its text
//   look after <selector>        the computed ::before and ::after of the first match
//   look style <selector> <property...>   one element's computed properties
//   look shot <file> [y]         a photograph at a scroll offset
//   look errors                  what the page's console said since the last reload
//   look close                   close the browser and forget the endpoint
//
// READINESS IS A FACT, NEVER A SLEEP: a page is ready when the book's element is present and has
// a height, and every wait prints how it exited.
const here = dirname(fileURLToPath(import.meta.url));
const kept = join(here, '.look');
const [, , command = 'open', ...rest] = process.argv;

// A CALL NEVER WEDGES THE PAGE: whatever it is waiting on, it says "timeout" and exits, so the
// next call finds a browser rather than a queue.
setTimeout(() => { console.log(`${command}: timeout after 45s · exited by: timeout`); process.exit(1); }, 45000).unref();

const state = () => (existsSync(kept) ? JSON.parse(readFileSync(kept, 'utf8')) : undefined);

// THE BROWSER IS NOBODY'S CHILD. One puppeteer launches dies with the process that launched it —
// measured 2026-09-20: every reconnect after the launching call had exited found ECONNREFUSED.
// So Chrome is spawned detached on a debugging port of its own, and every call, the first
// included, connects to it by that URL.
const port = 9333;
const at = `http://127.0.0.1:${port}`;

const connected = async () => {
    const held = state() ?? { url: '' };
    let browser;
    try {
        browser = await puppeteer.connect({ browserURL: at });
    } catch {
        spawn(puppeteer.executablePath(), [`--remote-debugging-port=${port}`, '--headless=new', '--no-first-run', '--no-default-browser-check', '--window-size=1400,900', 'about:blank'], { detached: true, stdio: 'ignore' }).unref();
        for (let i = 0; i < 100 && browser === undefined; i++) {
            await new Promise(done => setTimeout(done, 100));
            try { browser = await puppeteer.connect({ browserURL: at }); } catch { /* not up yet */ }
        }
        if (browser === undefined) { console.log(`no browser answered at ${at} within 10s · exited by: timeout`); process.exit(1); }
    }
    const pages = await browser.pages();
    const page = pages.find(one => one.url() === held.url) ?? pages[0] ?? await browser.newPage();
    // THE VIEWPORT IS SET ON EVERY PAGE THE TOOL TAKES, not only the one it launched: a
    // reconnect that took the browser's default page measured a 784px-wide book.
    await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });
    page.on('console', message => { errors.push(`${message.type()}: ${message.text()}`); });
    page.on('pageerror', error => { errors.push(`error: ${error.message}`); });
    if (state() === undefined) writeFileSync(kept, JSON.stringify(held));
    return { browser, page, held };
};

const errors = [];

const ready = async page => {
    const start = Date.now();
    let exited = 'timeout';
    for (let i = 0; i < 600; i++) {
        // THE BOOK'S ELEMENT IS `display: contents` AND HAS NO BOX OF ITS OWN, so the fact asked
        // for is the book present and the page's main laid out with a height.
        const drawn = await page.evaluate(() => {
            const main = document.querySelector('main');
            return document.querySelector('.pd-book') !== null && main !== null && main.getBoundingClientRect().height > 0;
        });
        if (drawn) { exited = 'drawn'; break; }
        await new Promise(done => setTimeout(done, 50));
    }
    // A TIMEOUT SAYS WHAT IT SAW: the page's words and its console, because a book that does not
    // draw is a page saying why, and a bare "timeout" is the number to a question nobody asked.
    const saw = exited === 'drawn' ? '' : `\n  the page holds: ${JSON.stringify((await page.evaluate(() => document.body.innerText.slice(0, 300))))}\n  the console said: ${errors.length ? errors.join(' | ').slice(0, 600) : 'nothing this process heard'}`;
    return `${Date.now() - start}ms · exited by: ${exited}${saw}`;
};

const remember = (held, url) => writeFileSync(kept, JSON.stringify({ ...held, url }));

const { browser, page, held } = await connected();
const start = Date.now();

switch (command) {
    case 'open': {
        const url = rest[0] ?? 'http://localhost:5173/dougs-library/';
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        remember(held, url);
        console.log(`open ${url} · ready after ${await ready(page)}`);
        // AND WHAT THE PAGE SAID WHILE OPENING, always — a page that draws without a part of itself
        // says why in its console, and only the process that opened it can hear.
        const said = errors.filter(one => /error|warn/iu.test(one));
        if (said.length) console.log(`the console said:\n  ${said.slice(0, 6).join('\n  ').slice(0, 1200)}`);
        break;
    }
    case 'reload': {
        await page.reload({ waitUntil: 'domcontentloaded' });
        console.log(`reload ${page.url()} · ready after ${await ready(page)}`);
        break;
    }
    case 'box': {
        const [selector, depth = '3'] = rest;
        console.log(await page.evaluate((selector, depth) => {
            const root = document.querySelector(selector);
            if (!root) return `no element matches ${selector}`;
            const lines = [];
            const walk = (node, level) => {
                if (level > depth) return;
                const style = getComputedStyle(node);
                const box = node.getBoundingClientRect();
                const text = node.children.length ? '' : ` "${node.textContent.trim().slice(0, 40)}"`;
                lines.push(`${'  '.repeat(level)}<${node.tagName.toLowerCase()} class="${node.className}"${node.getAttribute('href') ? ` href="${node.getAttribute('href')}"` : ''}> ${Math.round(box.width)}x${Math.round(box.height)} @${Math.round(box.left)},${Math.round(box.top + window.scrollY)} pad=${style.padding} margin=${style.margin} display=${style.display}${text}`);
                for (const child of node.children) walk(child, level + 1);
            };
            walk(root, 0);
            return lines.join('\n');
        }, selector, Number(depth)));
        break;
    }
    case 'at': {
        const [selector] = rest;
        console.log(await page.evaluate(selector => [...document.querySelectorAll(selector)].map(node => {
            const box = node.getBoundingClientRect();
            return `${Math.round(box.top + window.scrollY)}  <${node.tagName.toLowerCase()} id="${node.id}"> "${node.textContent.trim().slice(0, 50)}"`;
        }).join('\n') || `no element matches ${selector}`, selector));
        break;
    }
    case 'after': {
        const [selector] = rest;
        console.log(await page.evaluate(selector => {
            const node = document.querySelector(selector);
            if (!node) return `no element matches ${selector}`;
            return ['::before', '::after'].map(which => {
                const style = getComputedStyle(node, which);
                return `${which}: content ${style.content} ${style.width}x${style.height} display ${style.display} background ${style.backgroundColor} border ${style.border}`;
            }).join('\n');
        }, selector));
        break;
    }
    case 'style': {
        const [selector, ...properties] = rest;
        console.log(await page.evaluate((selector, properties) => {
            const node = document.querySelector(selector);
            if (!node) return `no element matches ${selector}`;
            const style = getComputedStyle(node);
            return properties.map(property => `${property}: ${style[property]}`).join(' · ');
        }, selector, properties));
        break;
    }
    case 'shot': {
        const [file, y = '0'] = rest;
        await page.evaluate(y => window.scrollTo(0, y), Number(y));
        await new Promise(done => setTimeout(done, 100));
        writeFileSync(file, await page.screenshot());
        console.log(`shot ${page.url()} at ${y} -> ${file}`);
        break;
    }
    // ONE ELEMENT, PHOTOGRAPHED ALONE — for putting a box beside the same box on Wikipedia. The
    // page is clipped to the element's box rather than the element asked to photograph itself,
    // which hung twice on 2026-09-20 and wedged every call after it.
    case 'crop': {
        const [selector, file] = rest;
        const box = await page.evaluate(selector => {
            const node = document.querySelector(selector);
            if (!node) return null;
            // PAGE COORDINATES, because the capture reaches beyond the viewport.
            const rect = node.getBoundingClientRect();
            return { x: Math.max(0, rect.left + window.scrollX), y: Math.max(0, rect.top + window.scrollY), width: Math.ceil(rect.width), height: Math.ceil(rect.height) };
        }, selector);
        if (box === null) { console.log(`no element matches ${selector}`); break; }
        await new Promise(done => setTimeout(done, 150));
        writeFileSync(file, await page.screenshot({ clip: box, captureBeyondViewport: true }));
        console.log(`crop ${selector} ${box.width}x${box.height} -> ${file}`);
        break;
    }
    // WHO WINS: every rule on the page whose selector names the substring, with the declarations
    // asked for, in sheet order — the cascade read rather than inferred.
    case 'rules': {
        const [substring, ...properties] = rest;
        console.log(await page.evaluate((substring, properties) => {
            const lines = [];
            for (const sheet of document.styleSheets) {
                let rules;
                try { rules = sheet.cssRules; } catch { continue; }
                for (const rule of rules) {
                    const said = rule.selectorText;
                    if (!said || !said.includes(substring)) continue;
                    const wanted = (properties.length ? properties : ['padding', 'margin']).map(one => `${one}: ${rule.style.getPropertyValue(one) || '—'}`).join(' · ');
                    lines.push(`${said.slice(0, 110)}  {${wanted}}`);
                }
            }
            return lines.join('\n') || `no rule names ${substring}`;
        }, substring, properties));
        break;
    }
    case 'errors': {
        console.log(errors.length ? errors.join('\n') : 'nothing said since this process connected (the console is heard only by the launching process)');
        break;
    }
    case 'close': {
        await browser.close();
        if (existsSync(kept)) unlinkSync(kept);
        console.log('closed');
        process.exit(0);
    }
    default:
        console.log(`no such question: ${command}`);
}
console.log(`(${Date.now() - start}ms)`);
await browser.disconnect();
