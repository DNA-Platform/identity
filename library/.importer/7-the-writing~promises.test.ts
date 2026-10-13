import { describe, expect, it } from 'vitest';
import type { Block } from './3-the-record~record.ts';
import { sampleConversation, sampleMessage, sampleTextMessage } from './3-the-record~samples.ts';
import {
    blockLines, escapedText, inlinePieces, literalForm, referenceForm, titleForm, writtenChapter, type Referents,
} from './7-the-writing~writing.ts';

const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };
const manualImportPath = '../../.manual/.book';
const artifactBlock = (command: string, content: string, oldText = '', newText = ''): Block =>
    ({ type: 'artifact', id: 'notes', title: 'Notes', contentType: 'text/markdown', command, content, oldText, newText });

describe('the writing', () => {
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

    it('reads a formula between dollars as one element, and never the span between two dollar-named words', () => {
        expect(inlinePieces('the sum $a+b$ is')).toEqual(['the sum ', ['<Math>{"a+b"}</Math>'], ' is']);
        const named = inlinePieces('depends on $Chemistry, where `$Chemistry` lives, and a $Chemical draws');
        expect(named.filter(piece => Array.isArray(piece) && piece[0].startsWith('<Math>'))).toEqual([]);
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

    it('writes one chapter for the whole conversation, each exchange a section headed by its speaker and timed', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question');
        const path = [question, sampleTextMessage('m2', 'Claude', 'An answer', 'm1')];
        const chapter = writtenChapter(sampleConversation('c', 'A Conversation', path), path, referents, manualImportPath);
        expect(chapter.fileName).toBe('1-june-15-2026.tsx');
        expect(chapter.title).toBe('15 June 2026');
        expect(chapter.tsx).toContain('<Part>June 2026</Part>');
        expect(chapter.tsx).toContain(`<Speaker>${referenceForm('Doug', 'Dougs Story', '$')}</Speaker>`);
        expect(chapter.tsx).toContain(`<Speaker>${referenceForm('Claude', 'Dougs Claude', '$')}</Speaker>`);
        expect(chapter.tsx).toContain('at="2026-06-15T10:00:00Z"');
        expect(chapter.tsx).toContain('<Paragraph>A question</Paragraph>');
    });

    it("replays an artifact's versions into a file each and the final under its name, counting thinking unwritten", () => {
        const blocks: Block[] = [
            { type: 'thinking', text: 'hidden' },
            artifactBlock('create', 'Hello world'),
            artifactBlock('update', '', 'world', 'there'),
        ];
        const path = [sampleMessage('m1', 'Claude', blocks)];
        const chapter = writtenChapter(sampleConversation('a', 'Artifacts', path), path, referents, manualImportPath);
        expect(chapter.files.map(file => file.name))
            .toEqual(['1-june-15-2026~notes.v1.md', '1-june-15-2026~notes.v2.md', '1-june-15-2026~notes.md']);
        expect(chapter.files.map(file => file.content)).toEqual(['Hello world', 'Hello there', 'Hello there']);
        expect(chapter.tsx).toContain(literalForm('notes.v2.md'));
        expect(chapter.thinkingCount).toBe(1);
    });
});
