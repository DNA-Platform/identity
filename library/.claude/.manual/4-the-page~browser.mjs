import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const puppeteer = createRequire(join(process.cwd(), 'package.json'))('puppeteer');
const port = 9333;
const profile = join(homedir(), '.cache', 'dna-platform', 'claude-browser');
const browserUrl = `http://127.0.0.1:${port}`;
const [command, ...words] = process.argv.slice(2);

const usage = [
    'node 4-the-page~browser.mjs open                       open the browser on claude.ai and keep it open',
    'node 4-the-page~browser.mjs tabs                       list the open tabs',
    'node 4-the-page~browser.mjs close [place]              close the tabs left open, all but the first, or those at one place',
    'node 4-the-page~browser.mjs go <url>                   open a url in a tab of its own, kept',
    'node 4-the-page~browser.mjs text <url> [selector]      print what the page, or one element, says',
    'node 4-the-page~browser.mjs html <url> <selector>      print an element\'s outer HTML',
    'node 4-the-page~browser.mjs tree <url> <selector> [n]  print an element\'s tree, tag and classes, n deep',
    'node 4-the-page~browser.mjs style <url> <selector> <properties,comma,separated>',
    'node 4-the-page~browser.mjs shot <url> <file.png>      photograph the page',
    'node 4-the-page~browser.mjs scroll <url> <selector>    scroll an element into view, at the top',
    'node 4-the-page~browser.mjs hover <url> <selector> [watch]   hover an element; print the watched element\'s classes before and after',
    'node 4-the-page~browser.mjs press <url> <selector> [watch]   press an element; print the watched element\'s classes before and after',
    'node 4-the-page~browser.mjs over <url> [width]         name the elements past the right edge at a width',
].join('\n');

const attached = async () => {
    try {
        return await puppeteer.connect({ browserURL: browserUrl, defaultViewport: null });
    } catch {
        throw new Error(`no browser answers at ${browserUrl}; open one first with: node 4-the-page~browser.mjs open`);
    }
};

// ONE TAB PER PLACE: a tab is kept per origin, claude.ai, the workbench, the built site, a file, and navigated to the
// address asked for rather than a new tab opened for every address; a tab already at the address is reused as it is.
const placeOf = (url) => { try { return new URL(url).origin; } catch { return url; } };
const pageAt = async (browser, url) => {
    const pages = await browser.pages();
    const open = pages.find(page => page.url().split('#')[0] === url.split('#')[0]);
    if (open !== undefined) return open;
    const atThePlace = pages.find(page => placeOf(page.url()) === placeOf(url) && !page.url().startsWith('https://claude.ai/chat/'));
    const page = atThePlace ?? await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    return page;
};

const open = async () => {
    mkdirSync(profile, { recursive: true });
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: profile,
        defaultViewport: null,
        args: [`--remote-debugging-port=${port}`, '--window-size=1400,1000', '--no-first-run', '--no-default-browser-check'],
        ignoreDefaultArgs: ['--enable-automation'],
    });
    const [page] = await browser.pages();
    await page.goto('https://claude.ai/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log(`the browser is open at ${browserUrl}, on claude.ai, with its own profile under ${profile}`);
    console.log('log in there once; it stays signed in. The browser stays open until this process ends.');
    browser.on('disconnected', () => process.exit(0));
    await new Promise(() => undefined);
};

const run = async () => {
    if (command === 'open') return open();
    if (command === undefined) { console.log(usage); return; }
    const browser = await attached();
    try {
        if (command === 'tabs') {
            for (const page of await browser.pages()) console.log(`${page.url()}  ·  ${await page.title()}`);
            return;
        }
        if (command === 'close') {
            const pages = await browser.pages();
            const place = words[0];
            let closed = 0;
            for (const page of pages.slice(1)) {
                if (place !== undefined && !page.url().includes(place)) continue;
                await page.close();
                closed += 1;
            }
            console.log(`closed ${closed} of ${pages.length} tabs; ${pages.length - closed} open`);
            return;
        }
        const [url, selector, third] = words;
        if (url === undefined) throw new Error(`${command} needs a url\n${usage}`);
        const page = await pageAt(browser, url);
        if (command === 'go') { console.log(`${page.url()}  ·  ${await page.title()}`); return; }
        if (command === 'text') {
            const said = selector === undefined
                ? await page.evaluate(() => document.body.innerText)
                : await page.$$eval(selector, nodes => nodes.map(node => node.innerText).join('\n---\n'));
            console.log(said);
            return;
        }
        if (command === 'html') {
            console.log(await page.$$eval(selector, nodes => nodes.map(node => node.outerHTML).join('\n---\n')));
            return;
        }
        if (command === 'tree') {
            const depth = Number(third ?? 4);
            console.log(await page.$eval(selector, (root, depth) => {
                const lines = [];
                const walk = (node, level) => {
                    if (level > depth || node.nodeType !== 1) return;
                    const classes = [...node.classList].slice(0, 12).join('.');
                    const text = node.children.length === 0 ? ` "${(node.textContent ?? '').trim().slice(0, 60)}"` : '';
                    lines.push(`${'  '.repeat(level)}${node.tagName.toLowerCase()}${classes === '' ? '' : `.${classes}`}${text}`);
                    for (const child of node.children) walk(child, level + 1);
                };
                walk(root, 0);
                return lines.join('\n');
            }, depth));
            return;
        }
        if (command === 'style') {
            const properties = (third ?? 'font-family,font-size,line-height,color,background-color,padding,margin,border-radius,max-width').split(',');
            console.log(await page.$$eval(selector, (nodes, properties) => nodes.slice(0, 4).map(node => {
                const computed = getComputedStyle(node);
                const box = node.getBoundingClientRect();
                const values = properties.map(property => `${property}: ${computed.getPropertyValue(property)}`).join('; ');
                return `${node.tagName.toLowerCase()} ${Math.round(box.width)}x${Math.round(box.height)} at ${Math.round(box.left)},${Math.round(box.top)} · ${values}`;
            }).join('\n'), properties));
            return;
        }
        if (command === 'shot') {
            const file = selector ?? 'page.png';
            await page.screenshot({ path: file, fullPage: third === 'full' });
            console.log(`photograph: ${file}`);
            return;
        }
        if (command === 'scroll') {
            await page.$eval(selector, node => node.scrollIntoView({ block: 'start' }));
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(`scrolled to ${selector}`);
            return;
        }
        if (command === 'hover' || command === 'press') {
            const watched = third ?? selector;
            const classesOf = () => page.$eval(watched, node => `${node.tagName.toLowerCase()}.${[...node.classList].join('.')}`).catch(() => 'nothing matches');
            const before = await classesOf();
            if (command === 'hover') await page.hover(selector);
            else await page.click(selector);
            await new Promise(resolve => setTimeout(resolve, 600));
            console.log(`before: ${before}\nafter:  ${await classesOf()}`);
            return;
        }
        if (command === 'over') {
            const width = Number(selector ?? 390);
            await page.setViewport({ width, height: 844 });
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(await page.evaluate(() => `the page is ${document.documentElement.scrollWidth} wide on a screen ${window.innerWidth} wide`));
            console.log(await page.evaluate(() => [...document.querySelectorAll('body *')]
                .filter(node => node.getBoundingClientRect().right > window.innerWidth + 1)
                .slice(0, 20)
                .map(node => {
                    const box = node.getBoundingClientRect();
                    const classes = [...node.classList].slice(0, 6).join('.');
                    return `${node.tagName.toLowerCase()}${classes === '' ? '' : `.${classes}`} right ${Math.round(box.right)} of ${window.innerWidth} · "${(node.textContent ?? '').trim().slice(0, 50)}"`;
                }).join('\n')));
            await page.setViewport({ width: 1400, height: 1000 });
            return;
        }
        throw new Error(`no command ${command}\n${usage}`);
    } finally {
        browser.disconnect();
    }
};

run().catch(error => {
    console.error(String(error.message ?? error));
    process.exit(1);
});
