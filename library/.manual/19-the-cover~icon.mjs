// The library's icon, made from its catalogue's cover: the mark as the bar draws it — the drawing
// windowed at the desk's scale, grounded in the band, bordered with the drawing's own line — written
// into the binding's configuration as the page's icon. Run it when the cover changes:
//   node .me/.manual/19-the-cover~icon.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const me = resolve(import.meta.dirname, '..');
const cover = readFileSync(resolve(me, '..reference/.cover.tsx'), 'utf8');
const drawing = readFileSync(resolve(me, '..reference/.cover~illustration.svg'), 'utf8').trim();
const configuration = resolve(me, '..public/.binding/.pubconfig');

const said = (name) => cover.match(new RegExp(`${name}="([^"]+)"`, 'u'))?.[1];
const band = said('band');
const foot = said('foot');
const ink = said('ink');
const x = Number(said('x'));
const y = Number(said('y'));

const mark = 28;
const volume = 184;
const round = (number) => Number(number.toFixed(3));
const scale = round(volume * 0.54);
const line = round(scale / 64 * 1.7);
const inner = drawing.replace('<svg ', `<svg x="${round(line + x)}" y="${round(line + y)}" width="${scale}" height="${scale}" `);
const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${mark} ${mark}">`,
    `<style>.pd-illustration{fill:none;stroke:${ink};stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.pd-illustration .fill{fill:${foot};stroke:${ink}}.pd-illustration .light{fill:#ffffff;stroke:none}</style>`,
    `<clipPath id="window"><rect width="${mark}" height="${mark}"/></clipPath>`,
    `<rect width="${mark}" height="${mark}" fill="${band}"/>`,
    `<g clip-path="url(#window)">${inner}</g>`,
    `<rect x="${round(line / 2)}" y="${round(line / 2)}" width="${round(mark - line)}" height="${round(mark - line)}" fill="none" stroke="${ink}" stroke-width="${line}"/>`,
    `</svg>`,
].join('');

const icon = `data:image/svg+xml,${encodeURIComponent(svg).replaceAll('%20', ' ')}`;
const settings = JSON.parse(readFileSync(configuration, 'utf8'));
settings.rendering.icon = icon;
writeFileSync(configuration, `${JSON.stringify(settings, null, 2)}\n`);
console.log(`the icon is the catalogue's mark: band ${band}, line ${ink}, window ${x} ${y}; written to .pubconfig`);
