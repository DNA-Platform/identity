// Photographs each concept of this book that is newer than its photographs, at a desk's width, at a phone's, and small,
// the desk at a third of its pixels for a card, and says what on it runs past the edge of the screen. Run from anywhere:
//
//     node .me/.design/o3-the-camera~camera.mjs
//
// A concept is a page kept beside a chapter under its number, as 3-every-concept~025.html. Its three
// photographs are kept beside it under the same number. Every photograph is taken at one pixel per pixel of the
// screen it shows, so a photograph's own size is its device's. Bind the book afterwards.
import { createRequire } from 'node:module';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const book = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(book, '../../package.json'));
const devices = [
    { name: 'desk', width: 1280, height: 800, scale: 1 },
    { name: 'phone', width: 390, height: 844, scale: 1 },
    { name: 'small', width: 1280, height: 800, scale: 0.3 },
];

const older = (photograph, concept) => !existsSync(photograph) || statSync(photograph).mtimeMs < statSync(concept).mtimeMs;
const concepts = readdirSync(book).filter(file => /~\d{3}\.html$/u.test(file)).sort();
const wanted = concepts.flatMap(file => devices.map(device => ({ file, device, photograph: join(book, file.replace(/\.html$/u, `-${device.name}.png`)) })))
    .filter(shot => older(shot.photograph, join(book, shot.file)));

if (wanted.length === 0) console.log(`${concepts.length} concepts, every photograph current`);
else {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: true, ignoreDefaultArgs: ['--hide-scrollbars'] });
    for (const shot of wanted) {
        const page = await browser.newPage();
        await page.setViewport({ width: shot.device.width, height: shot.device.height, deviceScaleFactor: shot.device.scale });
        await page.goto(pathToFileURL(join(book, shot.file)).href, { waitUntil: 'networkidle0' });
        await page.evaluate(() => document.fonts.ready);
        await new Promise(done => setTimeout(done, 500));
        const past = await page.evaluate(() => {
            const wide = document.documentElement.clientWidth;
            return Array.from(document.querySelectorAll('body *')).filter(one => {
                const box = one.getBoundingClientRect();
                return box.width > 0 && box.right > wide + 1 && getComputedStyle(one).position !== 'fixed';
            }).length;
        });
        await page.screenshot({ path: shot.photograph });
        await page.close();
        console.log(`${shot.file} at a ${shot.device.name}: photographed, ${past} past the right edge`);
    }
    await browser.close();
    console.log(`photographed ${wanted.length}; bind the book to see them`);
}
