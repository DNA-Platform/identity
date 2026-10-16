import { describe, expect, it } from 'vitest';
import type { Block } from './3-the-record~record.ts';
import { sampleConversation, sampleMessage, sampleTextMessage } from './3-the-record~samples.ts';
import {
    blockLines, escapedText, inlinePieces, literalForm, referenceForm, slugFromName, titleForm, titleFromName,
    writtenChapter, type Referents,
} from './7-the-writing~writing.ts';

const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };
const manualImportPath = '../../../.manual/.book';
const claudeManualImportPath = '../../.manual/.book';
const artifactBlock = (command: string, content: string, oldText = '', newText = ''): Block =>
    ({ type: 'artifact', id: 'notes', title: 'Notes', contentType: 'text/markdown', command, content, oldText, newText });

describe('the writing', () => {
    // Doug, 2026-10-14: "remember to convert sensible things. & should be and. Are there other conversions like that
    // that are obvious? Do do intelligent title conversion for the chapters and the title of the book too."
    it("slugs a name as the library's Identifier does, a sign that reads as a word that word, and titles sensibly", () => {
        expect(slugFromName('Semantics of Types & More')).toBe('semantics-of-types-and-more');
        expect(slugFromName('C++ at 100% @ home')).toBe('c-plus-plus-at-100-percent-at-home');
        expect(slugFromName('Понимание основ СРТ')).toBe('понимание-основ-срт');
        expect(titleFromName('💬 the price of gram is getting high')).toBe('the price of gram is getting high');
        expect(titleFromName('  Semantic   Primes  ')).toBe('Semantic Primes');
        expect(titleFromName('🎉')).toBe('Untitled');
    });

    it('escapes what the notation and TSX would read, so a bracket in a message stays a bracket', () => {
        expect(escapedText(`${titleForm('x')} {y} <z> & w`)).toBe('&#91;&#91; x &#93;&#93; &#123;y&#125; &lt;z&gt; &amp; w');
    });

    it('turns a marked word into a Word element holding its mark, expanded over lines', () => {
        expect(inlinePieces('a **bold** word')).toEqual(['a ', ['<Word>', '    <Bold />', '    bold', '</Word>'], ' word']);
        expect(inlinePieces('`code`')).toEqual([['<Word>', '    <Verbatim />', '    code', '</Word>']]);
    });

    it('keeps the spaces around a marked word, the opening tag ending a line and the closing tag opening the next', () => {
        expect(blockLines('a **bold** word', 0)).toEqual([
            '<Paragraph>',
            '    a <Word>',
            '        <Bold />',
            '        bold',
            '    </Word> word',
            '</Paragraph>',
        ]);
        expect(blockLines('(**bold**)', 0))
            .toEqual(['<Paragraph>', '    (<Word>', '        <Bold />', '        bold', '    </Word>)', '</Paragraph>']);
    });

    it('reads a formula between dollars or TeX brackets, never the span between dollar-named words', () => {
        expect(inlinePieces('the sum $a+b$ is')).toEqual(['the sum ', ['<Math>{"a+b"}</Math>'], ' is']);
        expect(inlinePieces('the sum \\(a+b\\) is'))
            .toEqual(['the sum ', ['<Math>{"a+b"}</Math>'], ' is']);
        expect(inlinePieces('so \\[E = mc^2\\] holds'))
            .toEqual(['so ', ['<Equation>{"E = mc^2"}</Equation>'], ' holds']);
        const named = inlinePieces('depends on $Chemistry, where `$Chemistry` lives, and a $Chemical draws');
        expect(named.filter(piece => Array.isArray(piece) && piece[0].startsWith('<Math>'))).toEqual([]);
    });

    it('nests a list indented under an item as a paragraph of its own inside the list, one deeper', () => {
        const lines = blockLines('- one\n  - one a\n  - one b\n- two\n  1. two a', 0);
        expect(lines).toEqual([
            '<Paragraph>', '    <List />', '    <Line>one</Line>',
            '    <Paragraph>', '        <List />', '        <Line>one a</Line>', '        <Line>one b</Line>',
            '    </Paragraph>',
            '    <Line>two</Line>',
            '    <Paragraph>', '        <List ordered />', '        <Line>two a</Line>', '    </Paragraph>',
            '</Paragraph>',
        ]);
    });
    it("turns headings, lists, code and tables into the library's elements", () => {
        const markdown = '# Heading\n\n- one\n- two\n\n```ts\nlet x = 1;\n```\n\n| a | b |\n|---|---|\n| 1 | 2 |';
        const lines = blockLines(markdown, 0);
        expect(lines).toContain('<Heading>Heading</Heading>');
        expect(lines).toContain('    <List />');
        expect(lines).toContain('    <Line>one</Line>');
        expect(lines).toContain('    language="ts"');
        expect(lines).toContain('    <Table />');
        expect(lines).toContain('        <Word>2</Word>');
    });

    it('writes one chapter for the whole conversation, each message timed and headed by its speaker', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question');
        const path = [question, sampleTextMessage('m2', 'Claude', 'An answer', 'm1')];
        const conversation = sampleConversation('c', 'A Conversation', path);
        const chapter = writtenChapter(conversation, path, referents, manualImportPath, claudeManualImportPath);
        expect(chapter.fileName).toBe('1-june-15-2026.tsx');
        expect(chapter.title).toBe('15 June 2026');
        expect(chapter.tsx).not.toContain('<Part>');
        expect(chapter.tsx).toContain(`<Speaker>${referenceForm('Doug', 'Dougs Story', '$')}</Speaker>`);
        expect(chapter.tsx).toContain(`<Speaker>${referenceForm('Claude', 'Dougs Claude', '$')}</Speaker>`);
        expect(chapter.tsx).toContain('        <Message\n            at="2026-06-15T10:00:00Z"\n        >');
        expect(chapter.tsx).toContain('<Paragraph>A question</Paragraph>');
        expect(chapter.tsx).toContain(`import { Dated, Message, Speaker } from '${manualImportPath}';`);
        expect(chapter.tsx).not.toContain(`from '${claudeManualImportPath}'`);
    });

    it("replays an artifact's versions into a file each and the final under its name, counting thinking unwritten", () => {
        const blocks: Block[] = [
            { type: 'thinking', text: 'hidden' },
            artifactBlock('create', 'Hello world'),
            artifactBlock('update', '', 'world', 'there'),
        ];
        const path = [sampleMessage('m1', 'Claude', blocks)];
        const conversation = sampleConversation('a', 'Artifacts', path);
        const chapter = writtenChapter(conversation, path, referents, manualImportPath, claudeManualImportPath);
        expect(chapter.files.map(file => file.name))
            .toEqual(['1-june-15-2026~notes.v1.md', '1-june-15-2026~notes.v2.md', '1-june-15-2026~notes.md']);
        expect(chapter.files.map(file => file.content)).toEqual(['Hello world', 'Hello there', 'Hello there']);
        expect(chapter.tsx).toContain(literalForm('notes.v2.md'));
        expect(chapter.tsx).toContain(figure('Artifact', 'notes.v1', '.md', 'Made the artifact “Notes”'));
        expect(chapter.tsx).toContain(figure('Artifact', 'notes.v2', '.md', 'Changed the artifact “Notes”'));
        expect(chapter.tsx).toContain(`import { Artifact } from '${claudeManualImportPath}';`);
        expect(chapter.thinkingCount).toBe(1);
    });

    it('keeps an action and counts its result unwritten, as thinking is', () => {
        const blocks: Block[] = [
            { type: 'action', name: 'web_search', input: { query: 'primes' } },
            { type: 'results', text: 'a page of findings' },
            { type: 'text', text: 'Found it.' },
        ];
        const path = [sampleMessage('m1', 'Claude', blocks)];
        const conversation = sampleConversation('r', 'Results', path);
        const chapter = writtenChapter(conversation, path, referents, manualImportPath, claudeManualImportPath);
        expect(chapter.tsx).toContain('<Action>Searched the web for “primes”</Action>');
        expect(chapter.tsx).not.toContain('<Result');
        expect(chapter.tsx).toContain(`import { Action } from '${claudeManualImportPath}';`);
        expect(chapter.resultCount).toBe(1);
    });

    it('prints a file kept from a re-import in a closing section, inserted by a Code figure and never appended', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question');
        const kept = [{ identifier: 'edited-synopsis-tsx', type: '.txt' }];
        const conversation = sampleConversation('e', 'Edited', [question]);
        const chapter = writtenChapter(conversation, [question], referents, manualImportPath, claudeManualImportPath, kept);
        expect(chapter.tsx).toContain('<Heading>As I had it before the re-import</Heading>');
        expect(chapter.tsx).toContain('<Paragraph>synopsis, as I had it:</Paragraph>');
        expect(chapter.tsx).toContain(`<Code language="tsx">${literalForm('edited-synopsis-tsx.txt')}</Code>`);
        expect(chapter.tsx).not.toContain('<Append');
        expect(chapter.tsx).toMatch(/import \{[^}]*\bSection\b[^}]*\} from '@dna-platform\/public'/u);
    });

    it('files an attachment beside the chapter and names it where it was given, an upload by name alone', () => {
        const given = {
            ...sampleTextMessage('m1', 'Doug', 'Read this'),
            attachments: [{ name: 'notes.txt', extension: 'txt', size: 5, text: 'hello' }],
            uploads: ['photo.png', ''],
        };
        const conversation = sampleConversation('g', 'Given', [given]);
        const chapter = writtenChapter(conversation, [given], referents, manualImportPath, claudeManualImportPath);
        expect(chapter.files.map(file => file.name)).toEqual(['1-june-15-2026~notes.txt']);
        expect(chapter.tsx).toContain(figure('Attachment', 'notes', '.txt', 'Attached “notes.txt”'));
        expect(chapter.tsx)
            .toContain('<Attachment>Uploaded “photo.png”, whose content the export does not carry</Attachment>');
        expect(chapter.tsx)
            .toContain('<Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>');
        expect(chapter.tsx).toContain(literalForm('notes.txt'));
    });
});

const figure = (elementName: string, identifier: string, type: string, sentence: string): string => [
    `            <${elementName}`,
    `                identifier="${identifier}"`,
    `                type="${type}"`,
    '            >',
    `                ${sentence}`,
    `            </${elementName}>`,
].join('\n');
