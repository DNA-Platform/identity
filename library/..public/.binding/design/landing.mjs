import puppeteer from 'puppeteer';

const BASE = process.argv[2] || 'http://localhost:4241';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

const where = async page => page.evaluate(() => ({
    y: Math.round(window.scrollY),
    tall: Math.round(document.documentElement.scrollHeight),
    hash: location.hash,
    path: location.pathname,
    restore: history.scrollRestoration,
}));

for (const route of ['/', '/my-library-log/', '/claude-and-our-projects/']) {
    const g = await b.newPage();
    await g.setViewport({ width: 1400, height: 1000 });
    await g.goto(BASE + route, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1800));
    console.log(`\n${route}  on arrival: ${JSON.stringify(await where(g))}`);

    const links = await g.evaluate(() => [...new Set([...document.querySelectorAll('.pd-body a[href^="/"]')]
        .map(a => a.getAttribute('href')))].slice(0, 2));
    for (const href of links) {
        await g.goto(BASE + route, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1400));
        const at = await g.evaluate(one => {
            const link = [...document.querySelectorAll(`a[href="${one}"]`)].find(e => e.getClientRects().length > 0);
            if (!link) return null;
            link.scrollIntoView({ block: 'center' });
            const r = link.getClientRects()[0];
            return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
        }, href);
        if (at === null) continue;
        await g.mouse.click(at.x, at.y);
        await new Promise(r => setTimeout(r, 2200));
        const landed = await where(g);
        const bottom = landed.y > 40;
        console.log(`   pressed ${href.padEnd(30)} -> ${landed.path}  scrollY=${landed.y} of ${landed.tall}  hash="${landed.hash}"  ${bottom ? '<<< NOT AT THE TOP' : 'at the top'}`);
    }
    await g.close();
}
await b.close();
