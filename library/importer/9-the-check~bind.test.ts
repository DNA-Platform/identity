import { cpSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterAll, describe, expect, it } from 'vitest';
import type { Block } from './3-the-record~record.ts';
import { sampleConversation, sampleMessage, sampleTextMessage } from './3-the-record~samples.ts';
import { conversationTitle } from './7-the-writing~writing.ts';
import { conversationBook, projectEntry, registerEntry, schemes, uniqueConversationName } from './8-the-books~books.ts';
import { binderCheck } from './9-the-check~check.ts';

const library = dirname(dirname(fileURLToPath(import.meta.url)));
const bindingFolder = join(library, '..public', '.binding');
const galley = mkdtempSync(join(tmpdir(), 'galley-'));
afterAll(() => rmSync(galley, { recursive: true, force: true }));

const hazards = [
    'A listing:',
    '```',
    '(x,y) := E![t]:x =t> y & [[t₁]]',
    '```',
    'A formula \\([[a,b]]\\), and a list apart:',
    '',
    '1. one',
    '',
    '2. two',
].join('\n');
const artifact: Block = {
    type: 'artifact', id: 'a1', title: '2. Symbols vs. Sets/Frames', contentType: 'application/vnd.ant.code',
    language: 'python', command: 'create', content: 'print([[1]])', oldText: '', newText: '',
};
// Found 2026-10-18: a call of the older account whose parameters leaked into its artifact's id, quotes and all.
const leaked: Block = {
    type: 'artifact', id: 'tracer</parameter name>\n<parameter name="command">update', title: 'Tracer', contentType: 'text/markdown',
    language: '', command: 'create', content: '# Tracer', oldText: '', newText: '',
};

// The titles a scan of 3,815 names of both accounts found holding something the notation or JSX reads, on
// 2026-10-17, and two conversations of one title, told apart by their ids.
const titles = [
    'Dr. Who/Watson [draft] (2)',
    'Bitcoin',
    'Claude > Miscellaneous',
    'A Continuation...',
    'P = NP: arguments',
    'Arguments for and against P ≠ NP',
    '[Excerpt]: The Doug & Eirian Theory',
    'Doug & Seren $ $Chemical SRT',
    'Pointers in C++: *x vs **x',
    '💬 История Биткоина.\nКто такой Са…',
    'C:\\Users\\notes {draft}',
    'Ontic Structural Realism',
    'Ontic Structural Realism',
];

// What the importer writes, the binder takes: every hazard a bind of his library refused on 2026-10-17 written
// into a copy of the library, which the binder's own check must find whole, and every file written must parse
// once the binder's transform has had it.
describe('the bind', () => {
    it('holds a library with a conversation written in every hazard the binder once refused', async () => {
        cpSync(library, galley, {
            recursive: true,
            filter: source => !/[\\/](node_modules|\.\.public)$/u.test(source),
        });
        const folders = {
            library: galley,
            claude: join(galley, '.claude'),
            claudeManual: join(galley, '.claude', '.manual'),
            conversations: join(galley, '.claude', '.conversations'),
        };
        const messages = [
            sampleTextMessage('m1', 'Doug', hazards),
            sampleMessage('m2', 'Claude', [{ type: 'text', text: 'Here.' }, artifact, leaked], 'm1'),
        ];
        const namesTaken = new Set<string>();
        const written: string[] = [];
        for (const [index, name] of titles.entries()) {
            const id = `${String(index).padStart(8, '0')}-0000-4000-8000-000000000000`;
            const conversation = sampleConversation(id, name, messages);
            const naming = uniqueConversationName(folders.conversations, conversationTitle(conversation), id, namesTaken);
            const book = conversationBook(
                folders, conversation, messages, naming, ['Investing'], 'DNA', schemes[0],
                { Doug: 'Dougs Story', Claude: 'Dougs Claude' },
            );
            const instant = conversation.updatedAt;
            const entry = registerEntry(folders, folders.conversations, naming.name, book.folder, instant, 'A hazard:', '**');
            const listed = projectEntry(
                folders, join(folders.claude, '.investing'), naming.name, book.folder, conversation.createdAt,
            );
            written.push(...book.files, ...entry.files, ...listed);
        }

        const checked = await binderCheck(galley, bindingFolder, written);

        expect(checked.faults).toEqual([]);
        expect(checked.bookCount).toBeGreaterThan(2);
    }, 180_000);
});
