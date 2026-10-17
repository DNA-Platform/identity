import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleProject } from './3-the-record~samples.ts';
import { orderedTableText, projectBook, schemes } from './8-the-books~books.ts';

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
});
