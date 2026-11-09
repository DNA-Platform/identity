import { readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import { marked } from './12-how-we-read-a-conversation~sorts.mjs';

const [target, ...marksPaths] = process.argv.slice(2);
const chapters = statSync(target).isDirectory()
    ? readdirSync(target).filter(file => /^\d+-.+\.tsx$/u.test(file)).sort((a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(file => join(target, file))
    : [target];

const read = text => text.replace(/<[^>]+>/gu, ' ').replace(/\{'\s*'\}|\{" "\}/gu, ' ')
    .replace(/&lt;/gu, '<').replace(/&gt;/gu, '>').replace(/&amp;/gu, '&').replace(/&#123;/gu, '{').replace(/&#125;/gu, '}').replace(/&quot;/gu, '"').replace(/&#39;/gu, "'")
    .replace(/[‘’]/gu, "'").replace(/[“”]/gu, '"').replace(/…/gu, '...').replace(/\s+/gu, ' ').trim();
const loose = text => text.replace(/["']/gu, "'").toLowerCase().replace(/[.,;:!?]+$/u, '').trim();
const words = text => text.split(/\s+/u).filter(word => word !== '').length;

const messages = [];
for (const chapter of chapters) {
    const lines = readFileSync(chapter, 'utf8').split(/\r?\n/u);
    for (let index = 0; index < lines.length; index++) {
        if (lines[index].trim() !== '<Message') continue;
        const depth = /^ */u.exec(lines[index])[0].length;
        let close = index + 1;
        while (close < lines.length && !(/^ */u.exec(lines[close])[0].length === depth && lines[close].trim() === '</Message>')) close++;
        messages.push({ at: /at="([^"]+)"/u.exec(lines[index + 1])[1], text: read(lines.slice(index + 2, close).join(' ').replace(marked, ' ')) });
        index = close;
    }
}
const byInstant = new Map(messages.map((message, index) => [message.at, index]));

const states = ['Proven', 'Conjectured', 'Refuted', 'Intuition'];
const quoting = ['Correction', 'Importance', 'Remark', 'Question', 'Revision', 'Archive', 'Idea'];
let faults = 0, checked = 0, spans = 0;
for (const path of marksPaths) {
    const list = JSON.parse(readFileSync(path, 'utf8'));
    const marks = Array.isArray(list) ? list : list.marks ?? [];
    const own = [];
    for (const mark of marks) {
        checked++;
        const index = mark.message !== undefined ? mark.message - 1 : byInstant.get(mark.at);
        const message = messages[index];
        const name = mark.message !== undefined ? `${mark.message} ${mark.sort}` : `the ${mark.sort} at ${mark.at}`;
        if (message === undefined) { own.push(`${name}: no such message`); continue; }
        if (mark.at !== message.at) own.push(`${name}: instant ${mark.at} is not the message's ${message.at}`);
        if (words(mark.words) > 45) own.push(`${name}: ${words(mark.words)} words`);
        if (mark.sort === 'Result' && !states.some(state => mark.words.startsWith(state))) own.push(`${name}: a Result opens with its state: "${mark.words.slice(0, 40)}"`);
        if (mark.sort === 'Revision' && !/^(Replaced|Changed)\b/u.test(mark.words)) own.push(`${name}: a Revision opens with Replaced or Changed: "${mark.words.slice(0, 40)}"`);
        if (!quoting.includes(mark.sort)) continue;
        for (const match of read(mark.words).matchAll(/(?:^|[\s(—-])(?:'([^']{12,}?)'|"([^"]{12,}?)")(?=[\s).,;:!?—-]|$)/gu)) {
            const span = (match[1] ?? match[2]).replace(/\.\.\.$/u, '').replace(/^\.\.\./u, '').trim();
            for (const piece of span.split(/\.\.\.|…/u).map(loose).filter(piece => words(piece) >= 4)) {
                spans++;
                const where = mark.speaker === 'Doug' ? [message] : [message, messages[index - 1], messages[index + 1]].filter(Boolean);
                if (!where.some(one => loose(one.text).includes(piece))) own.push(`${name}: not in the message: "${piece}"`);
            }
        }
    }
    console.log(`${basename(path)}: ${marks.length} marks, ${own.length} fault${own.length === 1 ? '' : 's'}`);
    for (const fault of own) console.log(`  ${fault}`);
    faults += own.length;
}
console.log(`${checked} marks checked against ${messages.length} messages, ${spans} quoted spans, ${faults} fault${faults === 1 ? '' : 's'}`);
process.exit(faults === 0 ? 0 : 1);
