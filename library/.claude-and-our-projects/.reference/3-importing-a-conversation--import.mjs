// THE IMPORTER — a conversation exported from Claude becomes a book of dialogues.
//
// Doug, 2026-09-16: "let's go to ../dna-library find the semantics of types conversation and import".
//
// IT RUNS ONCE AND LEAVES WRITING BEHIND. There is no $Markdown kind in the package — src/markdown
// holds a theme and nothing that parses — so the conversion happens HERE, at import, and what lands
// on disk is ordinary writing a person could have typed. Nothing parses markdown at draw time.
//
//   node 3-importing-a-conversation--import.mjs           lists the messages, so the movements are cut by looking
//   node 3-importing-a-conversation--import.mjs --write   writes the chapters
//
// IT IS A RESOURCE OF THE CHAPTER BESIDE IT — Doug, 2026-09-16: "let's turn it into a resource sort
// of like what you did with tools for skills like the compiler". The chapter says what the import is
// and this runs it; the pair is one thing, named alike, and neither goes looking for the other.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const library = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const source = join(library, '..', '..', 'dna-library', 'library', 'claude-dna', 'conversations',
    '2026-09-09-semantics-of-types-&-more.md');
const into = join(library, '.claude-and-our-projects', 'semantic-reference-theory', 'conversations', 'semantics-of-types');

// WHO SAID IT. The export writes two labels and the library knows two people; the mapping is here
// and nowhere else, so a conversation with other participants needs one line rather than a rewrite.
const said = { User: 'Doug', Agent: 'Claude' };

// THE MOVEMENTS, CUT BY READING THE OPENINGS rather than by counting. Each entry opens a dialogue at
// the message index given; the last runs to the end. Doug: "The conversation, if long, should have
// many chapters but not one per turn." THESE CUTS ARE A FIRST READING AND ARE HIS TO MOVE.
const movements = [
    { at: 0, name: 'Ivitivity', topic: 'The Semantics of a Suffix' },
    { at: 12, name: 'Subjectivity and Passivity', topic: 'Where a Disposition Lives' },
    { at: 25, name: 'Adjectivity', topic: 'The Fourth Meaning' },
    { at: 31, name: 'The Ten Referents', topic: 'Semantic Reference Theory' },
    { at: 38, name: 'A Property of the Type', topic: 'Properties and Types' },
    { at: 61, name: 'The Little Type Document', topic: 'Style' },
    { at: 72, name: 'Narrowing and the Diamond', topic: 'Polymorphism' },
    { at: 90, name: 'Semantic Context', topic: 'What the Session Made Visible' },
];

const messages = () => {
    const raw = readFileSync(source, 'utf8');
    const held = [];
    for (const block of raw.split(/\n---\n/u)) {
        const opened = /^\*\*(User|Agent)\*\*\s*·\s*(.+)$/mu.exec(block);
        if (opened === null) continue;
        const body = block.slice(opened.index + opened[0].length)
            .split('\n')
            .filter(line => line.startsWith('>'))
            .map(line => line.replace(/^>\s?/u, ''))
            .join('\n')
            .trim();
        if (body !== '') held.push({ who: said[opened[1]], when: opened[2].trim(), body });
    }

    // THE EXPORT SAYS SOME THINGS TWICE, AND ONLY SOME OF THAT IS AN ARTIFACT. Measured 2026-09-16:
    // the file carries 53 User blocks and 48 Agent, 101 in all, where its own frontmatter says 106.
    // A message identical to the one IMMEDIATELY BEFORE it is the export repeating itself and is
    // dropped. One identical to an earlier message with a reply in between is NOT — that is Doug
    // sending the same thing again to get a different answer, which is the conversation happening.
    const kept = held.filter((message, at) => at === 0 || message.body !== held[at - 1].body);
    console.error(`${held.length} blocks read · ${held.length - kept.length} adjacent repeats dropped · ${kept.length} messages`);

    return kept;
};

// ─── MARKDOWN INTO WRITING ────────────────────────────────────────────────────────────────────────

const escaped = (text) => text
    .replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;')
    .replace(/\{/gu, '&#123;').replace(/\}/gu, '&#125;');

// INLINE, AND ONLY WHAT IS ACTUALLY IN THE FILE. Measured: 255 bolds, one link, no maths, no tables.
// Escaping runs FIRST so a tag this writes is never escaped by it.
const inline = (text) => escaped(text)
    .replace(/\*\*(.+?)\*\*/gsu, (_, said) => `<Bold>${said}</Bold>`)
    .replace(/(^|[^*])\*([^*]+?)\*(?!\*)/gsu, (_, before, said) => `${before}<Italics>${said}</Italics>`)
    .replace(/`([^`]+?)`/gsu, (_, said) => `<Bold>${said}</Bold>`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gu, (_, text, at) => `<Ref>[${text}](${at})</Ref>`);

const listed = (lines, ordered) => {
    const items = lines.map(line => `                        <Item>${inline(line.replace(/^\s*(?:[-*]|\d+\.)\s+/u, ''))}</Item>`);

    return `                    <List${ordered ? ' ordered' : ''}>\n${items.join('\n')}\n                    </List>`;
};

const written = (body) => {
    const drawn = [];
    const lines = body.split('\n');
    let at = 0;
    while (at < lines.length) {
        const line = lines[at];
        if (line.trim() === '') { at++; continue; }

        if (line.trimStart().startsWith('```')) {
            const language = line.trim().replace(/^```/u, '').trim();
            const held = [];
            at++;
            while (at < lines.length && !lines[at].trimStart().startsWith('```')) held.push(lines[at++]);
            at++;
            drawn.push(`                    <Code${language === '' ? '' : ` language="${language}"`}>{${JSON.stringify(held.join('\n'))}}</Code>`);
            continue;
        }

        const bullet = /^\s*[-*]\s+/u;
        const number = /^\s*\d+\.\s+/u;
        const mark = bullet.test(line) ? bullet : number.test(line) ? number : undefined;
        if (mark !== undefined) {
            const held = [];
            while (at < lines.length && mark.test(lines[at])) held.push(lines[at++]);
            drawn.push(listed(held, mark === number));
            continue;
        }

        if (line.trimStart().startsWith('#')) {
            drawn.push(`                    <Heading>${inline(line.replace(/^\s*#+\s*/u, ''))}</Heading>`);
            at++;
            continue;
        }

        const held = [];
        while (at < lines.length && lines[at].trim() !== '' && !lines[at].trimStart().startsWith('```')
            && !bullet.test(lines[at]) && !number.test(lines[at])) held.push(lines[at++].trim());
        drawn.push(`                    <Paragraph>${inline(held.join(' '))}</Paragraph>`);
    }

    return drawn;
};

// ─── THE CHAPTER ──────────────────────────────────────────────────────────────────────────────────

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');
const identifier = (name) => name.replace(/[^A-Za-z0-9]+/gu, '');

const chapter = (movement, held) => {
    const exchanges = held.map(message => [
        `                <Exchange>`,
        `                    <Participant print={false}>${message.who}</Participant>`,
        ...written(message.body),
        `                </Exchange>`,
    ].join('\n'));

    return [
        `import { Bold, Code, Heading, Italics, Item, List, Paragraph, Ref, Title } from '@dna-platform/public';`,
        `import { Dialogue, Exchange, Participant, Topic } from '@dna-platform/public/conversation';`,
        `import { $Article } from '../../../../..reference/.book';`,
        ``,
        `export default class $${identifier(movement.name)} extends $Article {`,
        `    print() {`,
        `        return (`,
        `            <Dialogue>`,
        `                <Title>${escaped(movement.name)}</Title>`,
        `                <Topic>${escaped(movement.topic)}</Topic>`,
        exchanges.join('\n'),
        `            </Dialogue>`,
        `        );`,
        `    }`,
        `}`,
        ``,
    ].join('\n');
};

// ─── RUN ──────────────────────────────────────────────────────────────────────────────────────────

const held = messages();

if (!process.argv.includes('--write')) {
    console.log(`${held.length} messages in ${source}\n`);
    held.forEach((message, at) => console.log(`${String(at).padStart(3)}  ${message.who.padEnd(7)}  ${message.body.replace(/\s+/gu, ' ').slice(0, 92)}`));
    process.exit(0);
}

movements.forEach((movement, at) => {
    const to = movements[at + 1]?.at ?? held.length;
    const file = join(into, `${at + 1}-${slug(movement.name)}.tsx`);
    writeFileSync(file, chapter(movement, held.slice(movement.at, to)), 'utf8');
    console.log(`${file} — ${to - movement.at} exchanges`);
});
