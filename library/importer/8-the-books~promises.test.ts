import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleProject } from './3-the-record~samples.ts';
import { orderedTableText, projectBook, projectEntry, registerEntry, schemes, uniqueConversationName } from './8-the-books~books.ts';

const library = mkdtempSync(join(tmpdir(), 'books-'));
afterAll(() => rmSync(library, { recursive: true, force: true }));
const folders = {
    library,
    claude: join(library, '.claude'),
    claudeManual: join(library, '.claude', '.manual'),
    conversations: join(library, '.claude', '.conversations'),
};

const section = (heading: string, name: string): string => [
    '        <Section>',
    `            <Heading>${heading}</Heading>`,
    '            <Paragraph>',
    `                <Content>$[[ ./${name} ]]</Content>`,
    '            </Paragraph>',
    '        </Section>',
    '',
].join('\n');
const table = (...sections: string[]): string => `    <Chapter>\n${sections.join('')}    </Chapter>\n`;

describe('the books', () => {
    it("keeps a register's month sections newest first, whatever order they were written in, the rest in place", () => {
        const written = table(
            section('June 2026', 'Semantic Primes'),
            section('May 2026', 'Converting shared conversation to document'),
            section('July 2026', 'Inexplicable Phenomena'),
            section('Where this book stands', 'Our Conversations'),
        );
        expect(orderedTableText(written)).toBe(table(
            section('July 2026', 'Inexplicable Phenomena'),
            section('June 2026', 'Semantic Primes'),
            section('May 2026', 'Converting shared conversation to document'),
            section('Where this book stands', 'Our Conversations'),
        ));
        expect(orderedTableText(orderedTableText(written))).toBe(orderedTableText(written));
    });

    it('keeps the months together where the first stands, a section of the book\'s own after them', () => {
        const written = table(
            section('October 2026', 'Our Conversations'),
            section('How this book is built', 'The Accounts'),
            section('July 2026', 'Investing'),
            section('Where this book stands', 'Dougs Claude'),
        );
        expect(orderedTableText(written)).toBe(table(
            section('October 2026', 'Our Conversations'),
            section('July 2026', 'Investing'),
            section('How this book is built', 'The Accounts'),
            section('Where this book stands', 'Dougs Claude'),
        ));
    });

    // Doug, 2026-10-16: "We consider the new account to be a continuation of that one, with same named projects,
    // so they exist on top of each other" — a project taken whole is written whole from the stack.
    it('leaves a written project book alone, and writes it whole when the run takes the project whole', () => {
        const first = projectBook(folders, sampleProject('Investing', ['Old.md']), schemes[0], '<svg/>');
        writeFileSync(join(first.folder, '9-a-stale-chapter.tsx'), 'from an earlier run');
        const stacked = sampleProject('Investing', ['Old.md', 'Only Then.md'], '', 'What the project is for');
        expect(projectBook(folders, stacked, schemes[0], '<svg/>').files).toEqual([]);
        const whole = projectBook(folders, stacked, schemes[0], '<svg/>', true, true);
        expect(existsSync(join(whole.folder, '9-a-stale-chapter.tsx'))).toBe(false);
        expect(readdirSync(whole.folder).filter(name => /^\d+-.*\.tsx$/u.test(name)))
            .toEqual(['1-the-project.tsx', '2-old.tsx', '3-only-then.tsx']);
    });

    // Found binding Semantic Reference Theory, 2026-10-17: a knowledge file named for its project, one address with
    // the book's own title. A file's title is numbered by slug against every title the book holds.
    // Found 2026-10-17 by a run that hung for six hours: a number put after a title past the file name's cut never
    // changed the cut name. A title is told apart by its whole address, and a number stands after the cut.
    it('numbers two long titles alike apart, by the whole address and never by the cut file name', () => {
        const longName = 'A Formalism of Reference in Which Every Referent Is Held at an Instant and Related Through It';
        const project = sampleProject('Long', [`${longName}.md`, `${longName}.txt`]);
        const book = projectBook(folders, project, schemes[0], '<svg/>', true, true);
        expect(readdirSync(book.folder).filter(name => /^\d+-.*\.tsx$/u.test(name))).toHaveLength(3);
        const namesTaken = new Set<string>();
        const first = uniqueConversationName(folders.conversations, longName, '11111111-aaaa-4000-8000-000000000000', namesTaken);
        const second = uniqueConversationName(folders.conversations, longName, '22222222-aaaa-4000-8000-000000000000', namesTaken);
        expect(first.folderName).toBe('claude--a-formalism-of-reference-in-which-every-referent-is-held-at--11111111');
        expect(second.folderName).toBe('claude--a-formalism-of-reference-in-which-every-referent-is-held-at--22222222');
    });

    it('numbers a file whose title slugs like the book, its project chapter or another file', () => {
        const project = sampleProject('Seren', ['seren.md', 'The Project.txt', 'Notes.md', 'notes.txt']);
        const book = projectBook(folders, project, schemes[0], '<svg/>', true, true);
        expect(readdirSync(book.folder).filter(name => /^\d+-.*\.tsx$/u.test(name))).toEqual([
            '1-the-project.tsx', '2-seren-2.tsx', '3-the-project-2.tsx', '4-notes.tsx', '5-notes-2.tsx',
        ]);
    });

    // Doug, 2026-10-17: "Still; do claude-- because we don't want random collisions in the library", and "Surely we
    // can make semantic titles but correlate imports by some sort of Guid from anthropic?" A key carries the first
    // eight of the application's id, so it is unique by construction and the same on every run.
    it('keys a conversation claude--, its title and the first eight of its id, and shows only its title', () => {
        const namesTaken = new Set<string>();
        const first = uniqueConversationName(
            folders.conversations, 'Ontic Structural Realism', '3b54b751-0d6e-4a1c-9f0e-1c2d3e4f5a6b', namesTaken,
        );
        const second = uniqueConversationName(
            folders.conversations, 'Ontic Structural Realism', '9e01c4d2-7a8b-4c3d-8e9f-0a1b2c3d4e5f', namesTaken,
        );
        expect(first).toEqual({
            name: { words: 'Ontic Structural Realism', key: 'claude--Ontic Structural Realism--3b54b751' },
            folderName: 'claude--ontic-structural-realism--3b54b751',
        });
        expect(second.name).toEqual({ words: 'Ontic Structural Realism', key: 'claude--Ontic Structural Realism--9e01c4d2' });
        expect(uniqueConversationName(folders.conversations, 'Ontic Structural Realism', first.name.key.slice(-8), new Set()))
            .toEqual(first);
    });

    // Sprint 113, on Doug's 'That is not navigable': the project's page lays its conversations by month, so a
    // project's entry is dated and listed under its month, as the register's is.
    it('dates a project\'s entry and lists it under its month, so the project\'s page can lay its conversations by month', () => {
        const project = join(library, 'project');
        mkdirSync(project, { recursive: true });
        writeFileSync(join(project, '.table.tsx'), [
            '    <Chapter>', '        <Section>', '            <Heading>Where this book stands</Heading>', '        </Section>', '    </Chapter>', '',
        ].join('\n'));
        const name = { words: 'Ontic Structural Realism', key: 'claude--Ontic Structural Realism--3b54b751' };
        const files = projectEntry(folders, project, name, join(folders.conversations, 'x'), '2026-06-15T10:00:00.000Z');
        const entry = readFileSync(files.find(file => !file.endsWith('.table.tsx'))!, 'utf8');
        expect(entry).toContain('<Part>June 2026</Part>');
        expect(entry).toContain('<Date>[15 June 2026](2026-06-15)</Date>');
        expect(entry).toContain("import { Brief, Dated, Volume } from");
        const table = readFileSync(join(project, '.table.tsx'), 'utf8');
        expect(table).toContain('<Heading>June 2026</Heading>');
        expect(table).not.toContain('<Heading>Conversations</Heading>');
    });

    it('refuses two conversations whose ids open alike, rather than number either', () => {
        const namesTaken = new Set<string>();
        uniqueConversationName(folders.conversations, 'Bitcoin', '3b54b751-0000-4000-8000-000000000000', namesTaken);
        expect(() => uniqueConversationName(folders.conversations, 'Bitcoin', '3b54b751-ffff-4000-8000-000000000000', namesTaken))
            .toThrow(/open with the same 8 characters/u);
    });

    it('writes a title\'s words as the application gave them and only its key escaped, so dots show as they are', () => {
        const register = join(library, 'register');
        mkdirSync(register, { recursive: true });
        writeFileSync(join(register, '.table.tsx'), 'export default () => (\n    <Chapter>\n    </Chapter>\n);\n');
        const name = { words: 'A Continuation...', key: 'claude--A Continuation...--3b54b751' };
        const entry = registerEntry(folders, register, name, join(register, 'x'), '2026-10-17T00:00:00Z', 'A:', '**');
        expect(readFileSync(entry.entryPath!, 'utf8')).toContain('[[ A Continuation... ]]( claude--A Continuation......--3b54b751 )');
        expect(readFileSync(entry.tablePath, 'utf8')).toContain('$[[ A Continuation... ]]( ./claude--A Continuation......--3b54b751 )');
    });
});
