var L=Object.defineProperty;var o=(M,W)=>L(M,"name",{value:W,configurable:!0});import{p as P,$ as S,j as e,C as F,a as B,T as h,R as z,A as U,S as G,c as V,d as q,F as Y,P as n,e as K,f as s,H as a,O as d,g as r,i as c,D as l,B as t,n as m,o as p,m as u}from"./.book-D3WQAwBC.js";import{$ as i}from"./index-DOue7X83.js";const k=class k extends P{};o(k,"$ClaudesLibraryImporter");let g=k;i(g);const A=class A extends S{print(){return e.jsxs(F,{children:[e.jsx(B,{}),e.jsxs(h,{children:["Claude’s Library Importer ",e.jsx(z,{children:"[](/claude-and-our-projects/)"})]}),e.jsx(U,{children:"[Author: Doug](/my-library-log/)"}),e.jsx(G,{children:"[Claude & Our Projects](/claude-and-our-projects/)"}),e.jsx(V,{here:"Claude’s Library Importer",about:"[Subject](/claude-and-our-projects/)",by:"[Author](/my-library-log/)"})]})}};o(A,"$Cover");let f=A;const X=e.jsx(n,{children:"The tool that brings a conversation out of an export and into this library, and the only book here whose chapters are about the code standing beside them. Each chapter is a page and its code is the file of the same name, so a change to one is never a question about the other."}),I=class I extends S{print(){return e.jsxs(q,{children:[e.jsx(Y,{children:"[Claude’s Library Importer]()"}),e.jsx(h,{print:!1,children:"Synopsis"}),X]})}};o(I,"$Synopsis");let w=I;const R=class R extends S{print(){return e.jsxs(K,{children:[e.jsx(h,{print:!1,children:"Table of Contents"}),e.jsxs(s,{children:[e.jsx(a,{children:"Contents"}),e.jsx(d,{children:e.jsx(r,{children:"[The Importer](/claudes-library-importer/#the-importer)"})}),e.jsx(d,{children:e.jsx(r,{children:"[The Source](/claudes-library-importer/#the-source)"})}),e.jsx(d,{children:e.jsx(r,{children:"[The Thread](/claudes-library-importer/#the-thread)"})}),e.jsx(d,{children:e.jsx(r,{children:"[The Movements](/claudes-library-importer/#the-movements)"})}),e.jsx(d,{children:e.jsx(r,{children:"[The Writing](/claudes-library-importer/#the-writing)"})}),e.jsx(d,{children:e.jsx(r,{children:"[The Book](/claudes-library-importer/#the-book)"})}),e.jsx(r,{print:!1,children:"Claude’s Library Importer"}),e.jsx(r,{print:!1,children:"Synopsis"}),e.jsx(r,{print:!1,children:"Table of Contents"})]})]})}};o(R,"$Table");let b=R;const _=`// THE IMPORTER — one conversation out of the export and into the library.
// Documented by 1-the-importer.tsx, which is this file's chapter.
//
//   npx tsx 1-the-importer.ts            says what it would do and stops
//   npx tsx 1-the-importer.ts --write    writes the book
//
// FIVE STEPS AND NOTHING HIDDEN BETWEEN THEM: find the conversation in the export, walk the thread a
// reader actually sees, cut it into movements, turn each message into writing, and shelve the book.
// Each step is one file, each file has one chapter, and the chapter carries the same name — so it is
// never a question which documentation a change here owes an edit to.

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { find } from './2-the-source';
import { aside, thread } from './3-the-thread';
import { cut, movements } from './4-the-movements';
import { shelve } from './6-the-book';

const here = dirname(fileURLToPath(import.meta.url));
const library = dirname(dirname(here));

// WHERE THE EXPORT IS AND WHICH CONVERSATION THIS IS. One conversation this sprint, by Doug's word:
// "we will focus on the importer and importing this one conversation."
export const asked = {
    export: join(library, '..', '..', 'dna-library', 'library', 'claude-dna', '.exports', '2026-09-11', 'conversations-000.zip'),
    named: 'Semantics of Types & More',
    into: join(library, '.claude-and-our-projects', 'semantic-reference-theory', 'conversations', 'semantics-of-types'),
    apparatus: ['Semantics of Types & More', 'What Was Said', 'Table of Contents', 'Lead'],
};

export const run = async (write: boolean): Promise<void> => {
    const held = await find(asked.export, asked.named);
    const shown = thread(held);
    const cuts = cut(shown, movements);

    console.log(\`\${held.name}\`);
    console.log(\`  \${held.messages.length} messages in the export · \${shown.length} on the screen · \${aside(held, shown)} on other paths\`);
    console.log(\`  \${cuts.length} movements\`);
    for (const one of cuts) console.log(\`    \${String(one.messages.length).padStart(3)}  \${one.name}\`);

    if (!write) return void console.log('\\nnothing written — pass --write');

    const wrote = shelve({ into: asked.into, name: asked.named, apparatus: asked.apparatus }, cuts);
    console.log(\`\\n\${wrote.length} files written\`);
    for (const file of wrote) console.log(\`  \${file}\`);
};

// IT RUNS WHEN IT IS RUN, AND NOT WHEN IT IS READ. A book folder holds chapters and code together,
// and something reading the folder must never set the importer going — measured 2026-09-16, a build
// imported this file in a chapter place and the usage line it printed came back as a broken book.
const invoked = process.argv[1] !== undefined && process.argv[1].endsWith('1-the-importer.ts');
if (invoked) run(process.argv.includes('--write')).catch(said => { console.error(said); process.exit(1); });
`,N=class N extends c{print(){return e.jsxs(l,{children:[e.jsx(h,{children:"The Importer"}),e.jsxs(s,{children:[e.jsx(a,{children:"Five steps and nothing hidden between them"}),e.jsx(n,{children:"This is the whole of it. Find the conversation in the export, walk the thread a reader actually sees, cut it into movements, turn each message into writing, and shelve the book. Every step is one file, every file has one chapter, and the chapter carries the same name — so it is never a question which page a change to the code owes an edit to."}),e.jsxs(n,{children:["Run without arguments it says what it would do and stops. Run with ",e.jsx(t,{children:"--write"})," it writes the book. I want to be able to see the cuts before anything lands on disk, because the cuts are the one part of this that is a judgement rather than a rule."]})]}),e.jsx(m,{by:"Adam",children:e.jsx(n,{children:"The order of the chapters is the order Doug reads code in: the thing that does the work first, then the things it leans on, each one able to be skipped by somebody who trusts its name."})}),e.jsxs(s,{children:[e.jsx(a,{children:"What it says when it runs"}),e.jsxs(n,{children:["It reports three numbers before anything else: how many messages are in the export, how many are on the screen, and how many are on paths nobody is looking at. For the first conversation those are ",e.jsx(t,{children:"106"}),", ",e.jsx(t,{children:"84"})," and ",e.jsx(t,{children:"22"}),". A conversation of 106 that shows 84 has not lost anything — it has 22 on branches, and I would rather read that sentence than wonder about a missing number."]})]}),e.jsx(p,{file:"1-the-importer.ts",children:_})]})}};o(N,"$TheImporter");let x=N;const J=`// THE SOURCE — the export, read without unpacking it.
// Documented by 2-the-source.tsx, which is this file's chapter.

import { closeSync, createReadStream, openSync, readSync } from 'node:fs';
import { createInflateRaw } from 'node:zlib';
import { Readable } from 'node:stream';
import { StringDecoder } from 'node:string_decoder';

// WHAT AN EXPORT HOLDS, named as the export names it. These are the intermediary shapes everything
// downstream reads, and they carry the two things the markdown never did: the TIME each thing was
// said, and the PARENT it was said after.
export type Message = {
    uuid: string;
    sender: 'human' | 'assistant';
    text: string;
    said: string;
    after: string;
};

export type Conversation = {
    uuid: string;
    name: string;
    opened: string;
    closed: string;
    messages: Message[];
};

// A ZIP OF ONE ENTRY IS A HEADER AND A DEFLATE STREAM, and reading it that way costs no dependency
// and no temporary file. The local header is thirty bytes plus the name and the extra field; after
// it, the bytes are raw deflate unless the method says they were stored.
const opened = (zip: string): Readable => {
    const file = openSync(zip, 'r');
    const head = Buffer.alloc(30);
    readSync(file, head, 0, 30, 0);
    closeSync(file);
    if (head.readUInt32LE(0) !== 0x04034b50) throw new Error(\`\${zip} does not open with a zip local header\`);
    const method = head.readUInt16LE(8);
    const from = 30 + head.readUInt16LE(26) + head.readUInt16LE(28);
    const bytes = createReadStream(zip, { start: from });

    return method === 0 ? bytes : bytes.pipe(createInflateRaw());
};

// THE WHOLE FILE IS ONE JSON ARRAY AND IT IS 208 MEGABYTES, so it is never parsed whole. The scan
// counts braces outside strings, cuts each top-level object as it closes, and throws the read prefix
// away — so what is held at any moment is one conversation, not the export. A StringDecoder joins
// the chunks, because a chunk boundary can fall in the middle of a character.
export async function* conversations(zip: string): AsyncGenerator<Conversation> {
    const decoder = new StringDecoder('utf8');
    let held = '';
    let depth = 0;
    let from = -1;
    let quoted = false;
    let escaped = false;

    // THE SCAN RESUMES, IT DOES NOT RESTART. \`at\` lives outside the chunk loop, so every character is
    // looked at once across the whole 208 MB. Reading from zero on each chunk made this quadratic and
    // the read never finished — measured 2026-09-16, killed at ten minutes with nothing to show.
    let at = 0;
    for await (const chunk of opened(zip)) {
        held += decoder.write(chunk as Buffer);
        for (; at < held.length; at++) {
            const said = held[at];
            if (escaped) { escaped = false; continue; }
            if (quoted) {
                if (said === '\\\\') escaped = true;
                else if (said === '"') quoted = false;
                continue;
            }
            if (said === '"') { quoted = true; continue; }
            if (said === '{') { if (depth === 0) from = at; depth++; continue; }
            if (said !== '}') continue;
            depth--;
            if (depth > 0 || from < 0) continue;
            yield read(JSON.parse(held.slice(from, at + 1)));
            held = held.slice(at + 1);
            at = -1;
            from = -1;
        }
    }
}

// THE FIRST CONVERSATION WITH THIS NAME, and the read stops there rather than finishing the file.
export const find = async (zip: string, named: string): Promise<Conversation> => {
    for await (const held of conversations(zip)) if (held.name.trim() === named.trim()) return held;
    throw new Error(\`no conversation named \${named} in \${zip}\`);
};

// EVERY CONVERSATION IN THE EXPORT, by name and date, for choosing one.
export const listed = async (zip: string): Promise<{ name: string; opened: string; messages: number }[]> => {
    const held: { name: string; opened: string; messages: number }[] = [];
    for await (const one of conversations(zip)) held.push({ name: one.name.trim(), opened: one.opened, messages: one.messages.length });

    return held;
};

// THE EXPORT'S OWN FIELDS, renamed once, here, so nothing downstream reads \`parent_message_uuid\`.
const read = (said: any): Conversation => ({
    uuid: said.uuid,
    name: said.name ?? '',
    opened: said.created_at,
    closed: said.updated_at,
    messages: (said.chat_messages ?? []).map((message: any): Message => ({
        uuid: message.uuid,
        sender: message.sender,
        text: message.text ?? '',
        said: message.created_at,
        after: message.parent_message_uuid,
    })),
});
`,O=class O extends c{print(){return e.jsxs(l,{children:[e.jsx(h,{children:"The Source"}),e.jsxs(s,{children:[e.jsx(a,{children:"Two hundred and eight megabytes"}),e.jsxs(n,{children:["The export is one JSON array holding every conversation I have ever had, and uncompressed it is ",e.jsx(t,{children:"208 MB"}),". That number is not a detail, it is the design. Nothing here parses the file. It reads it as a stream, counts braces outside strings, cuts each conversation loose as it closes, and throws the read part away — so what is in memory at any moment is one conversation rather than the archive."]}),e.jsxs(n,{children:["Finding ",e.jsx(u,{children:"Semantics of Types & More"})," takes ",e.jsx(t,{children:"17 seconds"})," and peaks at ",e.jsx(t,{children:"37 MB"}),", and the read stops the moment it has what it came for."]})]}),e.jsxs(s,{children:[e.jsx(a,{children:"A zip of one entry is a header and a deflate stream"}),e.jsx(n,{children:"The export arrives zipped, and there is no zip reader in Node. There did not need to be one: the archive holds a single entry, so the local header says where the bytes start and whether they were stored or deflated, and the rest is a stream. No dependency, no temporary file, and nothing unpacked onto a disk to go stale."})]}),e.jsx(m,{by:"Adam",children:e.jsx(n,{children:"The first version of the scan restarted at zero on every chunk, which is quadratic, and it never finished — killed at ten minutes with nothing to show. The scan resumes now, and the comment in the file says why so nobody writes it the easy way again."})}),e.jsxs(s,{children:[e.jsx(a,{children:"The export's words are renamed once, here"}),e.jsxs(n,{children:["The export says ",e.jsx(t,{children:"chat_messages"}),", ",e.jsx(t,{children:"created_at"})," and",e.jsx(t,{children:" parent_message_uuid"}),". This file is the only place those words appear. Everything downstream reads a message that says who sent it, what it says, when it was said and what it was said after — which is the vocabulary a library has, not the vocabulary an export has."]})]}),e.jsx(p,{file:"2-the-source.ts",children:J})]})}};o(O,"$TheSource");let y=O;const Z=`// THE THREAD — the conversation as it stands on the screen, which is one path through a tree.
// Documented by 3-the-thread.tsx, which is this file's chapter.

import type { Conversation, Message } from './2-the-source';

// THE ROOT'S PARENT, which the export writes as a nil uuid rather than as an absence.
const nothing = '00000000-0000-4000-8000-000000000000';

// A CONVERSATION IS A TREE AND A READER SEES A PATH. Doug, 2026-09-16: "I am fine with only importing
// the visual conversation on the screen and not the tree." Every edit and every retry makes a branch;
// what the app shows is the one path from the root down to whichever leaf was last spoken on.
//
// MEASURED 2026-09-16 on Semantics of Types & More: 106 messages, one root, and TEN parents with more
// than one child. The markdown export had flattened those ten branches into the run, which is why
// reading it gave 101 blocks with near-duplicates beside each other and a count that did not match
// the file's own frontmatter. Nothing was wrong with the count; the tree had been walked as a list.
export const thread = (held: Conversation): Message[] => {
    const byUuid = new Map(held.messages.map(message => [message.uuid, message]));
    const last = leaf(held);
    const path: Message[] = [];

    for (let at: Message | undefined = last; at !== undefined; at = byUuid.get(at.after)) {
        path.push(at);
        if (at.after === nothing) break;
        if (path.length > held.messages.length) throw new Error(\`the parents of \${held.name} do not reach a root\`);
    }

    return path.reverse();
};

// WHERE THE READER IS, which is the last thing anybody said. A leaf is a message nothing answers;
// the one that was spoken most recently is the branch the app is showing.
const leaf = (held: Conversation): Message => {
    const answered = new Set(held.messages.map(message => message.after));
    const ends = held.messages.filter(message => !answered.has(message.uuid));
    const last = ends.sort((one, two) => one.said.localeCompare(two.said)).pop();
    if (last === undefined) throw new Error(\`\${held.name} holds no message that nothing answers\`);

    return last;
};

// WHAT WAS LEFT BEHIND, so the importer can say it rather than round it off. A conversation of 106
// messages that shows 90 has not lost 16 — it has 16 on paths the reader is not looking at.
export const aside = (held: Conversation, shown: Message[]): number => held.messages.length - shown.length;
`,C=class C extends c{print(){return e.jsxs(l,{children:[e.jsx(h,{children:"The Thread"}),e.jsxs(s,{children:[e.jsx(a,{children:"A conversation is a tree and a reader sees a path"}),e.jsx(n,{children:"Every time I edit a message or ask for another answer, the conversation branches. What the app shows me is never the tree — it is one path through it, from the first thing said down to whichever end I was last standing on. That path is the conversation as far as anybody reading it is concerned, and it is the only thing I want in the library."}),e.jsx(n,{children:"Each message carries the one it was said after, so the path is a walk: take the last thing nothing answers, follow the parents up to the root, and turn it around."})]}),e.jsxs(s,{children:[e.jsx(a,{children:"What this settled"}),e.jsxs(n,{children:[e.jsx(u,{children:"Semantics of Types & More"})," holds ",e.jsx(t,{children:"106"})," messages, one root and",e.jsx(t,{children:" ten"})," parents with more than one child. On the screen it is ",e.jsx(t,{children:"84"}),", and the other ",e.jsx(t,{children:"22"})," are on branches. Read as a thread it alternates perfectly:",e.jsx(t,{children:" zero"})," messages follow the same speaker."]}),e.jsx(n,{children:"That last number is the proof. A first attempt read the markdown export instead and found 101 blocks with near-identical messages sitting beside each other — which looked like me saying the same thing twice and was nothing of the kind. The markdown had flattened ten branches into the run. Reading the source, none of that has to be guessed at."})]}),e.jsx(m,{by:"Cathy",children:e.jsx(n,{children:"The importer reports what it left behind rather than rounding it off. A conversation of 106 that shows 84 has 22 on paths nobody is reading, and saying so is the difference between a record and a summary."})}),e.jsx(p,{file:"3-the-thread.ts",children:Z})]})}};o(C,"$TheThread");let T=C;const Q=`// THE MOVEMENTS — where a conversation divides, and why no rule finds them.
// Documented by 4-the-movements.tsx, which is this file's chapter.

import type { Message } from './2-the-source';

export type Movement = {
    name: string;
    topic: string;
    opens: string;
};

export type Cut = Movement & { messages: Message[] };

// A MOVEMENT OPENS AT SOMETHING SOMEBODY SAID, not at a number. Doug, 2026-09-16: "The conversation,
// if long, should have many chapters but not one per turn." Nothing computes where those chapters
// begin — a movement is a run of exchanges about one thing, and only reading tells you where one
// stops. So the cuts are written down, and they are written as the OPENING WORDS of the message that
// starts each one rather than as an index, because an index moves the moment the thread is re-read
// and a sentence does not.
export const movements: Movement[] = [
    { name: 'Ivitivity', topic: 'The Semantics of a Suffix', opens: 'Ivitivity - let' },
    { name: 'Subjectivity and Passivity', topic: 'Where a Disposition Lives', opens: 'OK, so take your two part analysis' },
    { name: 'Adjectivity', topic: 'The Fourth Meaning', opens: 'I think this is one of a bigger number of endings' },
    { name: 'The Ten Referents', topic: 'Semantic Reference Theory', opens: 'Read the last conversation' },
    { name: 'A Property of the Type', topic: 'Properties and Types', opens: 'But long is a propery os many things' },
    { name: 'The Little Type Document', topic: 'Style', opens: 'I want you to read the little type document' },
    { name: 'Narrowing and the Diamond', topic: 'Polymorphism', opens: 'Here' + '’' + 's another interesting one' },
    { name: 'Semantic Context', topic: 'What the Session Made Visible', opens: 'Are you starting to see how SRT' },
];

// THE CUT, AND IT REFUSES TO GUESS. A movement whose opening sentence is not in the thread is a cut
// that no longer applies — the thread was re-read, or the branch shown has changed — and the importer
// says so rather than quietly sliding the chapter somewhere else.
export const cut = (thread: Message[], against: Movement[] = movements): Cut[] => {
    const opens = against.map(movement => {
        const at = thread.findIndex(message => said(message).startsWith(said({ text: movement.opens } as Message)));
        if (at < 0) throw new Error(\`no message in the thread opens with "\${movement.opens}" — the cuts need re-reading\`);

        return { movement, at };
    });

    return opens.map(({ movement, at }, which) => ({
        ...movement,
        messages: thread.slice(at, opens[which + 1]?.at ?? thread.length),
    }));
};

// WHAT A MESSAGE SAYS, with its whitespace settled, so a cut written by eye against a page matches a
// message whose line breaks came out of an export.
const said = (message: Message): string => message.text.replace(/\\s+/gu, ' ').trim();
`,H=class H extends c{print(){return e.jsxs(l,{children:[e.jsx(h,{children:"The Movements"}),e.jsxs(s,{children:[e.jsx(a,{children:"Where a conversation divides"}),e.jsx(n,{children:"A long conversation is not one page and it is not one page per message. It moves — a run of exchanges about one thing, then a turn, then another run. Those are the chapters. The first conversation has eight of them, from a word I made up for fun to the whole numbers."}),e.jsx(n,{children:"Nothing finds them. There is no rule in here that reads a conversation and says where it turned; I read the openings and decided. That is the one judgement in this whole tool, and it is written down where it can be argued with rather than buried in a threshold."})]}),e.jsxs(s,{children:[e.jsx(a,{children:"A cut is a sentence, not a number"}),e.jsxs(n,{children:["Each movement is written as the ",e.jsx(t,{children:"opening words"})," of the message that starts it. An index would be wrong the moment the thread is read again — a branch changes and everything after it slides by one — and a sentence does not move. If a cut stops matching, the importer stops and says which one, instead of quietly putting a chapter break somewhere nobody chose."]})]}),e.jsx(m,{by:"Libby",children:e.jsxs(n,{children:["Eight movements, ",e.jsx(u,{children:"12 · 12 · 6 · 6 · 18 · 8 · 16 · 6"}),", which is 84 — the whole thread and nothing dropped. A cut that loses a message is a cut that has gone wrong, so the arithmetic is worth printing every time."]})}),e.jsx(p,{file:"4-the-movements.ts",children:Q})]})}};o(H,"$TheMovements");let j=H;const ee=`// THE WRITING — markdown into our kinds, once, at import.
// Documented by 5-the-writing.tsx, which is this file's chapter.

// NOTHING PARSES MARKDOWN WHEN A PAGE IS DRAWN. There is no $Markdown kind in the package — the
// markdown folder holds a theme and nothing that reads — and that is right: a page that has to
// interpret a string before it can be read cannot be specified, searched or pointed at. So the
// conversion happens HERE, once, on the way in, and what lands on disk is ordinary writing.
//
// AND IT HANDLES ONLY WHAT IS ACTUALLY THERE. Measured on the first conversation: bold, italics,
// inline code, bullets, numbered lists, fenced code, one heading, one link, no tables, no maths.
// A reading that covered more than the corpus holds would be a reading nobody had tested.

// JSX TEXT IS NOT PROSE. Four characters mean something to the compiler and have to stop meaning it
// before a message becomes a chapter.
export const escaped = (text: string): string => text
    .replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;')
    .replace(/\\{/gu, '&#123;').replace(/\\}/gu, '&#125;');

// THE MARKS INSIDE A LINE. Escaping runs FIRST, so a tag written here is never escaped by it.
// Inline code has no kind in the library — it was reached for three times next door and refused each
// time — so it is set bold, which is what it looks like and not a claim that it is one.
export const inline = (text: string): string => escaped(text)
    .replace(/\\*\\*(.+?)\\*\\*/gsu, (_, said) => \`<Bold>\${said}</Bold>\`)
    .replace(/(^|[^*])\\*([^*]+?)\\*(?!\\*)/gsu, (_, before, said) => \`\${before}<Italics>\${said}</Italics>\`)
    .replace(/\`([^\`]+?)\`/gsu, (_, said) => \`<Bold>\${said}</Bold>\`)
    .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/gu, (_, text, at) => \`<Ref>[\${text}](\${at})</Ref>\`);

// THE BLOCKS. A message is a run of blocks separated by blank lines, and each becomes one writing.
// The walk is deliberately flat: it reads a line, decides what block it opens, and takes the lines
// that belong to it. Anything it does not recognise is prose, which is the right default for a
// conversation — most of what is said is just said.
export const written = (body: string, indent = '                    '): string[] => {
    const drawn: string[] = [];
    const lines = body.split('\\n');
    const bullet = /^\\s*[-*]\\s+/u;
    const number = /^\\s*\\d+\\.\\s+/u;
    let at = 0;

    while (at < lines.length) {
        const line = lines[at];
        if (line.trim() === '') { at++; continue; }

        if (line.trimStart().startsWith('\`\`\`')) {
            const language = line.trim().replace(/^\`\`\`/u, '').trim();
            const held: string[] = [];
            at++;
            while (at < lines.length && !lines[at].trimStart().startsWith('\`\`\`')) held.push(lines[at++]);
            at++;
            drawn.push(\`\${indent}<Code\${language === '' ? '' : \` language="\${language}"\`}>{\${JSON.stringify(held.join('\\n'))}}</Code>\`);
            continue;
        }

        const mark = bullet.test(line) ? bullet : number.test(line) ? number : undefined;
        if (mark !== undefined) {
            const held: string[] = [];
            while (at < lines.length && mark.test(lines[at])) held.push(lines[at++]);
            const items = held.map(one => \`\${indent}    <Item>\${inline(one.replace(/^\\s*(?:[-*]|\\d+\\.)\\s+/u, ''))}</Item>\`);
            drawn.push(\`\${indent}<List\${mark === number ? ' ordered' : ''}>\\n\${items.join('\\n')}\\n\${indent}</List>\`);
            continue;
        }

        if (line.trimStart().startsWith('#')) {
            drawn.push(\`\${indent}<Heading>\${inline(line.replace(/^\\s*#+\\s*/u, ''))}</Heading>\`);
            at++;
            continue;
        }

        const held: string[] = [];
        while (at < lines.length && lines[at].trim() !== '' && !lines[at].trimStart().startsWith('\`\`\`')
            && !bullet.test(lines[at]) && !number.test(lines[at])) held.push(lines[at++].trim());
        drawn.push(\`\${indent}<Paragraph>\${inline(held.join(' '))}</Paragraph>\`);
    }

    return drawn;
};
`,D=class D extends c{print(){return e.jsxs(l,{children:[e.jsx(h,{children:"The Writing"}),e.jsxs(s,{children:[e.jsx(a,{children:"Once, on the way in"}),e.jsx(n,{children:"What comes out of the export is markdown. What belongs in a library is writing. The conversion happens here, once, at import — never when a page is drawn. A page that has to interpret a string before it can be read cannot be specified, cannot be searched, and cannot be pointed at, and those three are the whole reason this library exists."}),e.jsx(n,{children:"So a message becomes paragraphs, lists, fenced code and marks, and what lands on disk is ordinary writing I could have typed. There is no markdown left in it."})]}),e.jsxs(s,{children:[e.jsx(a,{children:"It handles what is actually there"}),e.jsx(n,{children:"Bold, italics, inline code, bullets, numbered lists, fenced code, a heading and a link. That is the corpus, counted rather than imagined: no tables, no maths. A reading that covered more than the conversations hold would be a reading nobody had ever tested."})]}),e.jsx(m,{by:"Cathy",children:e.jsxs(n,{children:["Inline code has no kind in the library — it was reached for three times next door and refused each time, because a code span is content that is not writing and nothing has named it yet. It is set ",e.jsx(t,{children:"bold"})," here, which is what it looks like and not a claim that it is one."]})}),e.jsxs(s,{children:[e.jsx(a,{children:"Four characters that stop meaning something"}),e.jsx(n,{children:"A message is prose until it lands in a file, where braces and angle brackets mean something to a compiler. They are escaped first, before any mark is turned into a tag, so nothing this file writes is escaped by it afterwards. That ordering is the only subtle thing in here."})]}),e.jsx(p,{file:"5-the-writing.ts",children:ee})]})}};o(D,"$TheWriting");let v=D;const ne=`// THE BOOK — what the importer leaves on disk: a book, its table, and a chapter per movement.
// Documented by 6-the-book.tsx, which is this file's chapter.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Cut } from './4-the-movements';
import { escaped, written } from './5-the-writing';

export type Shelf = {
    into: string;
    name: string;
    apparatus: string[];
};

// GENERATED FILES SAY SO, AND AUTHORED ONES ARE NEVER TOUCHED. The book, its table and its movement
// chapters are written on every import; the cover, the synopsis and the lead are somebody's writing
// and are left exactly as they stand.
const generated = '// GENERATED by Claude’s Library Importer on every import — never edited.';

const slug = (name: string): string => name.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');
const identifier = (name: string): string => name.split(/[^A-Za-z0-9]+/u).map(one => one.charAt(0).toUpperCase() + one.slice(1)).join('');
const sigil = String.fromCharCode(36);

// WHO SPOKE, in the library's own words rather than the export's. The export says human and
// assistant; a library says who they are.
const spoke = { human: 'Doug', assistant: 'Claude' } as const;

export const shelve = (shelf: Shelf, cuts: Cut[]): string[] => {
    const wrote: string[] = [];
    const book = join(shelf.into, '.book.tsx');
    writeFileSync(book, bookFile(shelf), 'utf8');
    wrote.push(book);

    const table = join(shelf.into, '.table.tsx');
    writeFileSync(table, tableFile(shelf, cuts), 'utf8');
    wrote.push(table);

    cuts.forEach((cut, at) => {
        const file = join(shelf.into, \`\${at + 1}-\${slug(cut.name)}.tsx\`);
        writeFileSync(file, chapterFile(cut), 'utf8');
        wrote.push(file);
    });

    return wrote;
};

// A CONVERSATION BOOK WEARS THE LIBRARY IT IS IN. It extended $Conversation directly and so was
// not an encyclopedia at all: no three-column layout, no body element, and an author link nowhere
// the page's own checks could find it. Doug, 2026-09-16: "We aren't doing the conversation itself
// yet and all books can have this base for now." So it subclasses the library like every other
// book here, and the conversation kinds are worn by the CHAPTERS rather than by the book.
const bookFile = (shelf: Shelf): string => [
    generated,
    \`import { \${sigil} } from '@dna-platform/chemistry';\`,
    \`import \${sigil}DougsLibrary from '../../../../..reference/.book';\`,
    \`\`,
    \`export default class \${sigil}\${identifier(shelf.name)} extends \${sigil}DougsLibrary { }\`,
    \`\`,
    \`export const \${identifier(shelf.name)} = \${sigil}(\${sigil}\${identifier(shelf.name)});\`,
    \`\`,
].join('\\n');

// A TABLE NAMES EVERY CHAPTER OF ITS BOOK, which is the one rule a library has about one — so it is
// generated rather than kept by hand, because a hand-kept table drifts the moment a movement moves.
const tableFile = (shelf: Shelf, cuts: Cut[]): string => [
    generated,
    \`import { \${sigil}Chapter, Heading, Section, TableOfContents, Title, chapter as Chapter } from '@dna-platform/public';\`,
    \`import { Option } from '@dna-platform/public/application';\`,
    \`\`,
    \`export default class \${sigil}Table extends \${sigil}Chapter {\`,
    \`    print() {\`,
    \`        return (\`,
    \`            <TableOfContents>\`,
    \`                <Title print={false}>Table of Contents</Title>\`,
    \`                <Section>\`,
    \`                    <Heading>Contents</Heading>\`,
    ...cuts.map(cut => \`                    <Option><Chapter>\${escaped(cut.name)}</Chapter></Option>\`),
    ...shelf.apparatus.map(name => \`                    <Chapter print={false}>\${escaped(name)}</Chapter>\`),
    \`                </Section>\`,
    \`            </TableOfContents>\`,
    \`        );\`,
    \`    }\`,
    \`}\`,
    \`\`,
].join('\\n');

// ONE MOVEMENT, ONE CHAPTER, ONE DIALOGUE. The participant is written parenthetically on every
// exchange — naming, not declaring — and the time each thing was said stands beside it as a comment
// until the model has somewhere to put it. Doug wants the dates: "things I've said at a date, at a
// time." THAT IS THE NEXT THING THIS FILE OWES.
const chapterFile = (cut: Cut): string => {
    const exchanges = cut.messages.map(message => [
        \`                <Exchange>\`,
        \`                    {/* \${message.said} */}\`,
        \`                    <Participant print={false}>\${spoke[message.sender]}</Participant>\`,
        ...written(message.text),
        \`                </Exchange>\`,
    ].join('\\n'));

    return [
        generated,
        \`import { Bold, Code, Heading, Italics, Item, List, Paragraph, Ref, Title } from '@dna-platform/public';\`,
        \`import { Dialogue, Exchange, Participant, Topic } from '@dna-platform/public/conversation';\`,
        \`import { \${sigil}Article } from '../../../../..reference/.book';\`,
        \`\`,
        \`export default class \${sigil}\${identifier(cut.name)} extends \${sigil}Article {\`,
        \`    print() {\`,
        \`        return (\`,
        \`            <Dialogue>\`,
        \`                <Title>\${escaped(cut.name)}</Title>\`,
        \`                <Topic>\${escaped(cut.topic)}</Topic>\`,
        exchanges.join('\\n'),
        \`            </Dialogue>\`,
        \`        );\`,
        \`    }\`,
        \`}\`,
        \`\`,
    ].join('\\n');
};
`,$=class $ extends c{print(){return e.jsxs(l,{children:[e.jsx(h,{children:"The Book"}),e.jsxs(s,{children:[e.jsx(a,{children:"What is left on disk"}),e.jsxs(n,{children:["A conversation arrives as a ",e.jsx(t,{children:"book"}),": the book itself, its table of contents, and one chapter per movement. Ten files for the first one. Each chapter prints a dialogue, each dialogue holds its exchanges, and each exchange names who spoke it."]})]}),e.jsxs(s,{children:[e.jsx(a,{children:"Generated and authored do not mix"}),e.jsx(n,{children:"The book, the table and the movement chapters are written on every import and say so on their first line. The cover, the synopsis and the lead are somebody’s writing and are never touched. That line has to be obvious from inside the folder, because the whole thing is re-runnable and I should never have to remember which of my own words are safe."}),e.jsx(n,{children:"The table is generated for a reason: a table names every chapter of its book, and a hand-kept one drifts the moment a movement moves."})]}),e.jsx(m,{by:"Arthur",children:e.jsxs(n,{children:["The times are in the file as comments and nowhere else yet. Doug wants the dates — things said at a date, at a time — and there is no home in the model for one. ",e.jsx(u,{children:"That is the next thing this file owes,"})," and it is written at the top of it so it cannot be missed."]})}),e.jsx(p,{file:"6-the-book.ts",children:ne})]})}};o($,"$TheBook");let E=$;const te=i(g),se=i(f),ae=i(w),ie=i(b),oe=i(x),re=i(y),he=i(T),de=i(j),ce=i(v),le=i(E),ue=i(e.jsxs(te,{children:[e.jsx(se,{}),e.jsx(ae,{}),e.jsx(ie,{}),e.jsx(oe,{}),e.jsx(re,{}),e.jsx(he,{}),e.jsx(de,{}),e.jsx(ce,{}),e.jsx(le,{})]}));export{ue as book};
