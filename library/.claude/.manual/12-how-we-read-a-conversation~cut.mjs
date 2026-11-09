import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [folder, cutsPath] = process.argv.slice(2);
const source = join(folder, '1-conversation.tsx');
const text = readFileSync(source, 'utf8');
const ending = text.includes('\r\n') ? '\r\n' : '\n';
const lines = text.split(ending);
const cuts = JSON.parse(readFileSync(cutsPath, 'utf8'));
const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');
const instants = held => [...held.matchAll(/at="([^"]+)"/gu)].map(match => match[1]);

const importEnd = lines.findIndex(line => line.startsWith('export default'));
const imports = lines.slice(0, importEnd).filter(line => line.trim() !== '');
const packageAt = imports.findIndex(line => line.includes("from '@dna-platform/public'"));
const names = new Set(/\{([^}]*)\}/u.exec(imports[packageAt])[1].split(',').map(name => name.trim()).filter(name => name !== ''));
names.add('Date');
if (cuts.some(cut => cut.part !== undefined)) names.add('Part');
imports[packageAt] = `import { ${[...names].sort((a, b) => a.localeCompare(b)).join(', ')} } from '@dna-platform/public';`;
imports.push("import { Dated } from '../../../.manual/4-the-date~code.tsx';");

const messages = [];
for (let index = 0; index < lines.length; index++) {
    if (lines[index].trim() !== '<Message') continue;
    const depth = /^ */u.exec(lines[index])[0].length;
    let close = index + 1;
    while (close < lines.length && !(/^ */u.exec(lines[close])[0].length === depth && lines[close].trim() === '</Message>')) close++;
    messages.push({ from: index, to: close, at: /at="([^"]+)"/u.exec(lines[index + 1])[1] });
    index = close;
}
if (cuts[0].from !== 1 || cuts[cuts.length - 1].to !== messages.length || cuts.some((cut, index) => index > 0 && cut.from !== cuts[index - 1].to + 1))
    throw new Error(`the cuts do not cover the ${messages.length} messages contiguously`);

const appends = [];
for (let index = messages[messages.length - 1].to + 1; index < lines.length; index++) {
    if (lines[index].trim() !== '<Append') continue;
    let close = index + 1;
    while (close < lines.length && lines[close].trim() !== '</Append>') close++;
    const block = lines.slice(index, close + 1);
    const identifier = /identifier="([^"]+)"/u.exec(block.join(' '))?.[1];
    const type = /type="([^"]+)"/u.exec(block.join(' '))?.[1] ?? '';
    const owner = messages.findIndex(message => lines.slice(message.from, message.to + 1).some(line => line.includes(`identifier="${identifier}"`)));
    if (identifier === undefined || owner === -1) throw new Error(`the append at line ${index + 1} names no message's attachment`);
    appends.push({ block, identifier, type, message: owner + 1 });
    index = close;
}

const withoutTurns = block => {
    const out = [];
    let skipping = false;
    for (const line of block) {
        if (!skipping && line.trim() === '<Turn>') { skipping = true; continue; }
        if (skipping) { if (line.trim() === '</Turn>') skipping = false; continue; }
        out.push(line);
    }
    return out;
};

let turnsRemoved = 0;
const chapters = cuts.map((cut, index) => {
    const own = messages.slice(cut.from - 1, cut.to);
    const body = own.flatMap(message => lines.slice(message.from, message.to + 1));
    const kept = withoutTurns(body);
    turnsRemoved += body.length - kept.length;
    const day = own[0].at.slice(0, 10);
    const shown = new Date(`${day}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    const file = `${index + 1}-${slug(cut.title)}.tsx`;
    const head = cut.part === undefined ? [] : [`        <Part>${cut.part}</Part>`];
    const ownAppends = appends.filter(append => append.message >= cut.from && append.message <= cut.to);
    const chapter = [
        ...imports, '', 'export default () => (', '    <Chapter>', ...head, '        <Dated>', `            <Date>[${shown}](${day})</Date>`, '        </Dated>',
        `        <Title>[[ ${cut.title} ]]</Title>`, ...kept, ...ownAppends.flatMap(append => append.block), '    </Chapter>', ');', '',
    ];
    return { file, title: cut.title, text: chapter.join(ending), messages: own.length, appends: ownAppends };
});

const expected = messages.map(message => message.at);
const found = chapters.flatMap(chapter => instants(chapter.text));
if (found.length !== expected.length || found.some((at, index) => at !== expected[index]))
    throw new Error(`nothing written: the cut would lose the sequence, ${found.length} instants against ${expected.length}`);

for (const chapter of chapters) {
    writeFileSync(join(folder, chapter.file), chapter.text);
    for (const append of chapter.appends) {
        const was = join(folder, `1-conversation~${append.identifier}${append.type}`);
        if (existsSync(was)) renameSync(was, join(folder, `${chapter.file.replace(/\.tsx$/u, '')}~${append.identifier}${append.type}`));
    }
}

const tablePath = join(folder, '.table.tsx');
const table = readFileSync(tablePath, 'utf8');
const tableEnding = table.includes('\r\n') ? '\r\n' : '\n';
const tableLines = table.split(tableEnding);
const rowAt = tableLines.findIndex(line => line.includes('$[[ ./Conversation ]]'));
if (rowAt === -1) throw new Error('the table has no row for ./Conversation');
const indent = /^ */u.exec(tableLines[rowAt])[0];
const paragraphOpen = rowAt - 1;
const paragraphClose = rowAt + 1;
const paragraphIndent = /^ */u.exec(tableLines[paragraphOpen])[0];
const paragraphs = [];
let open = null;
for (const cut of cuts) {
    const part = cut.part ?? null;
    if (part !== open) {
        if (open !== null) paragraphs.push(`${paragraphIndent}</Section>`);
        if (part !== null) paragraphs.push(`${paragraphIndent}<Section>`, `${indent}<Heading>${part}</Heading>`);
        open = part;
    }
    const outer = part === null ? paragraphIndent : indent;
    const inner = part === null ? indent : `${indent}    `;
    paragraphs.push(`${outer}<Paragraph>`, `${inner}<Content>$[[ ./${cut.title} ]]</Content>`, `${outer}</Paragraph>`);
}
if (open !== null) paragraphs.push(`${paragraphIndent}</Section>`);
tableLines.splice(paragraphOpen, paragraphClose - paragraphOpen + 1, ...paragraphs);
writeFileSync(tablePath, tableLines.join(tableEnding));

unlinkSync(source);
const parts = new Set(cuts.map(cut => cut.part).filter(part => part !== undefined));
console.log(`${chapters.length} chapters written in ${parts.size} part${parts.size === 1 ? '' : 's'}, the ${found.length} messages once each in order with their instants, ${turnsRemoved} lines of Turn marks removed, 1-conversation.tsx removed, the table rewritten with ${cuts.length} rows`);
for (const chapter of chapters) console.log(`  ${chapter.file}: ${chapter.messages} messages, "${chapter.title}"${chapter.appends.length > 0 ? `, ${chapter.appends.length} append${chapter.appends.length > 1 ? 's' : ''} with its file` : ''}`);
