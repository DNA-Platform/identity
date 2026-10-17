import { describe, expect, it } from 'vitest';
import type { Block } from './3-the-record~record.ts';
import { sampleConversation, sampleMessage, sampleTextMessage } from './3-the-record~samples.ts';
import {
    blockLines, conversationTitle, fileExtension, inlinePieces, literalForm, referenceForm, resourceExtension,
    slugFromName, titleForm, titleFromName, writtenConversation, type Referents,
} from './7-the-writing~writing.ts';

const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };
const manualImportPath = '../../../.manual/.book';
const claudeManualImportPath = '../../.manual/.book';
const artifactBlock = (command: string, content: string, oldText = '', newText = ''): Block => ({
    type: 'artifact', id: 'notes', title: 'Notes', contentType: 'text/markdown', language: '',
    command, content, oldText, newText,
});

describe('the writing', () => {
    // Doug, 2026-10-14: "remember to convert sensible things. & should be and. Are there other conversions like that
    // that are obvious? Do do intelligent title conversion for the chapters and the title of the book too."
    it("slugs a name as the library's Identifier does, a sign that reads as a word that word, and titles sensibly", () => {
        expect(slugFromName('Semantics of Types & More')).toBe('semantics-of-types-and-more');
        expect(slugFromName('C++ at 100% @ home')).toBe('c-plus-plus-at-100-percent-at-home');
        expect(slugFromName('Понимание основ СРТ')).toBe('понимание-основ-срт');
        expect(titleFromName('💬 the price of gram is getting high')).toBe('the price of gram is getting high');
        expect(titleFromName('  Semantic   Primes  ')).toBe('Semantic Primes');
        expect(titleFromName('🎉')).toBe('');
    });

    // Doug, 2026-10-17, on a slash in a title, the catalogue's separator: "As long as it doesn't break files on any
    // OS and won't cause me problems in vscode, use the one that looks lile the slash. Predict more problems like
    // this and fix similarly." The rules of a title are written in The Imported Conversation.
    // And 2026-10-17, of the binder's sanitizer: "Make sure the sanitizer is very smart." A title is sanitized by the
    // binder's own rule and never by a copy of it here: each character the notation reads is the lookalike.
    it('keeps a title out of the notation\'s way by the binder\'s sanitizer, each of its characters a lookalike', () => {
        expect(titleFromName('Allbirds GPU pivot and TON/Cocoon connection'))
            .toBe('Allbirds GPU pivot and TON∕Cocoon connection');
        expect(slugFromName(titleFromName('24/7 convenience stores'))).toBe('24-7-convenience-stores');
        expect(titleFromName('Notes (draft) [v2] {x}')).toBe('Notes ❨draft❩ ⁅v2⁆ {x}');
        expect(titleFromName('💬 История Биткоина.\nКто такой Са…')).toBe('История Биткоина. Кто такой Са…');
    });

    it('cuts a file\'s name at sixty letters of the library\'s own slug, and names one with none untitled', () => {
        expect(slugFromName('P ≠ NP')).toBe('p-not-equals-np');
        expect(slugFromName('a'.repeat(70))).toHaveLength(60);
        expect(slugFromName('🎉')).toBe('untitled');
    });

    it('titles a chat with no title by its first sentence, else as untitled on the day it began', () => {
        const words = 'Please help me plan a trip to Tbilisi next spring with my family. Thanks';
        const opening = sampleTextMessage('m', 'Doug', words);
        expect(conversationTitle(sampleConversation('t', '', [opening]))).toBe('Please help me plan a trip to Tbilisi');
        expect(conversationTitle(sampleConversation('u', '???', []))).toBe('Untitled, 15 June 2026');
        expect(conversationTitle(sampleConversation('v', 'Given', [opening]))).toBe('Given');
    });

    it('escapes what the notation and TSX would read, so a bracket in a message stays a bracket', () => {
        const lines = blockLines(`${titleForm('x')} {y} <z> & w`, 0);
        expect(lines.join('\n')).toContain('&#91;&#91; x &#93;&#93; &#123;y&#125; &lt;z&gt; &amp; w');
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

    // Found by the session that wrote down the imported conversation's form, 2026-10-16: a numbered list whose
    // items stand apart by blank lines drew "1." six times, one list to an item.
    it('keeps a list whose items stand apart by blank lines one list, and ends it at a list of another kind', () => {
        expect(blockLines('1. one\n\n2. two\n\n   still two\n\n3. three', 0)).toEqual([
            '<Paragraph>', '    <List ordered />', '    <Line>one</Line>', '    <Line>two still two</Line>',
            '    <Line>three</Line>', '</Paragraph>',
        ]);
        expect(blockLines('1. one\n\n- other', 0).filter(line => line.includes('<List'))).toHaveLength(2);
    });

    // Ruled in The Imported Conversation, 2026-10-16: a resource keeps the type the application gave the file,
    // never .txt chosen for it; the text the export extracted from a document stays text.
    it('names a file by the type the application gave it, a code artifact by its language', () => {
        expect(fileExtension('application/vnd.ant.code', 'Solver', 'python')).toBe('py');
        expect(fileExtension('application/vnd.ant.code', 'Hotkeys', 'autohotkey')).toBe('ahk');
        expect(fileExtension('text/markdown', 'Notes')).toBe('md');
        expect(fileExtension('', 'diagram.mmd')).toBe('mmd');
        expect(resourceExtension('text/plain')).toBe('txt');
        expect(resourceExtension('docx')).toBe('txt');
        expect(resourceExtension('')).toBe('txt');
    });

    // Found binding Semantic Reference Theory, 2026-10-17: SRT's own brackets, E![t] and [[t₁]], in a listing or a
    // formula were read by the catalogue as its notation. A string holding a bracket is a template with a
    // substitution, which the catalogue does not read, and the page shows it exactly.
    it('keeps a bracket in a listing or a formula out of the notation, and leaves a string without one as it was', () => {
        const listing = blockLines('```\n(x,y) := E![t]:x =t> y\n```', 0);
        expect(listing.find(line => line.includes('E![t]'))).toContain("{`${''}(x,y)");
        const commutator = inlinePieces('the commutator \\([[a,b]]\\) here').flat().join(' ');
        expect(commutator).toContain("<Math>{`${''}[[a,b]]`}</Math>");
        expect(inlinePieces('a sum \\(x + y\\) here').flat().join(' ')).toContain('<Math>{"x + y"}</Math>');
    });

    // Found binding Semantic Reference Theory, 2026-10-17: "### **Question 4**: *the case*" left a heading of a lone
    // colon once the library split the heading at it, and a heading with no words has no id. A heading is set bold
    // already, so its own bold marks are dropped.
    it('writes a heading without its own bold marks, so no colon is left standing alone', () => {
        expect(blockLines('### **Critical Questions Emerging**:', 0)).toEqual([
            '<Heading>Critical Questions Emerging:</Heading>',
        ]);
        expect(blockLines('### __Question 4__: the case', 0)).toEqual(['<Heading>Question 4: the case</Heading>']);
    });

    it("turns headings, lists, code and tables into the library's elements", () => {
        const markdown = '# Heading\n\n- one\n- two\n\n```ts\nlet x = 1;\n```\n\n| a | b |\n|---|---|\n| 1 | 2 |';
        const lines = blockLines(markdown, 0);
        expect(lines).toContain('<Heading>Heading</Heading>');
        expect(lines).toContain('    <List />');
        expect(lines).toContain('    <Line>one</Line>');
        expect(lines).toContain('    language="ts"');
        expect(lines).toContain('    {`let x = 1;`}');
        expect(blockLines('```\nfirst `line`\nsecond ${two}\n```', 0)).toEqual([
            '<CodeBox>', '    {`first \\`line\\`', 'second \\${two}`}', '</CodeBox>',
        ]);
        expect(lines).toContain('    <Table />');
        expect(lines).toContain('        <Word>2</Word>');
    });

    it('writes a chapter for each day of the conversation, each message timed and headed by its speaker', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question');
        const path = [question, sampleTextMessage('m2', 'Claude', 'An answer', 'm1')];
        const conversation = sampleConversation('c', 'A Conversation', path);
        const written = writtenConversation(conversation, path, referents, manualImportPath, claudeManualImportPath);
        const [chapter] = written.chapters;
        expect(chapter.fileName).toBe('1-june-15-2026.tsx');
        expect(chapter.title).toBe('15 June 2026');
        expect(chapter.tsx).not.toContain('<Part>');
        expect(chapter.tsx).toContain(`<Speaker>${referenceForm('Doug', 'Dougs Story', '$')}</Speaker>`);
        expect(chapter.tsx).toContain(`<Speaker>${referenceForm('Claude', 'Dougs Claude', '$')}</Speaker>`);
        expect(chapter.tsx).toContain('        <Message\n            at="2026-06-15T10:00:00Z"\n        >');
        expect(chapter.tsx).toContain('<Paragraph>A question</Paragraph>');
        expect(chapter.tsx).toContain(`import { Dated, Message, Speaker } from '${manualImportPath}';`);
        expect(chapter.tsx).toContain(`import { Origin } from '${claudeManualImportPath}';`);
        expect(chapter.tsx).toContain('<Origin>m1</Origin>');
    });

    it('cuts a conversation held over two days into two chapters, each dated and holding only its own messages', () => {
        const first = sampleTextMessage('m1', 'Doug', 'Day one', undefined, '2026-06-15T10:00:00Z');
        const second = sampleTextMessage('m2', 'Claude', 'Day two', 'm1', '2026-06-16T09:00:00Z');
        const conversation = sampleConversation('d', 'Days', [first, second]);
        const written = writtenConversation(conversation, [first, second], referents, manualImportPath,
            claudeManualImportPath);
        expect(written.chapters.map(one => one.fileName)).toEqual(['1-june-15-2026.tsx', '2-june-16-2026.tsx']);
        expect(written.chapters[1].tsx).toContain('<Date>[16 June 2026](2026-06-16)</Date>');
        expect(written.chapters[0].tsx).toContain('Day one');
        expect(written.chapters[0].tsx).not.toContain('Day two');
        expect(written.chapters[1].tsx).toContain('Day two');
    });

    // Found binding Semantic Reference Theory, 2026-10-17: "Symbols vs. Sets", a version's title with a dot, named
    // itself "vs Sets" while its table asked for "vs. Sets", since the dot escapes what follows unless doubled.
    it("titles a version with every dot doubled, as its book's table asks for it", () => {
        const dotted = { ...artifactBlock('create', 'Hello'), title: 'Symbols vs. Sets' } as Block;
        const written = writtenConversation(
            sampleConversation('d', 'Dotted', [sampleMessage('m1', 'Claude', [dotted])]),
            [sampleMessage('m1', 'Claude', [dotted])], referents, manualImportPath, claudeManualImportPath,
        );
        expect(written.versions[0].tsx).toContain('<Title>[[ Symbols vs.. Sets v1 ]]</Title>');
    });

    it("replays an artifact's versions into a file each and the final under its name, counting thinking unwritten", () => {
        const blocks: Block[] = [
            { type: 'thinking', text: 'hidden' },
            artifactBlock('create', 'Hello world'),
            artifactBlock('update', '', 'world', 'there'),
        ];
        const path = [sampleMessage('m1', 'Claude', blocks)];
        const conversation = sampleConversation('a', 'Artifacts', path);
        const written = writtenConversation(conversation, path, referents, manualImportPath, claudeManualImportPath);
        const [chapter] = written.chapters;
        expect(chapter.files.map(file => file.name))
            .toEqual(['1-june-15-2026~notes.v1.md', '1-june-15-2026~notes.v2.md', '1-june-15-2026~notes.md']);
        expect(chapter.files.map(file => file.content)).toEqual(['Hello world', 'Hello there', 'Hello there']);
        expect(chapter.tsx).toContain(literalForm('notes.v2.md'));
        expect(chapter.tsx).toContain('                artifact="notes"\n                place="notes-v1"\n            >');
        expect(chapter.tsx)
            .toContain('                place="notes-v1"\n            >\n                Made the artifact “Notes”');
        expect(chapter.tsx)
            .toContain('                place="notes-v2"\n            >\n                Changed the artifact “Notes”');
        expect(written.versions.map(one => one.fileName)).toEqual(['o1-notes-v1.tsx', 'o2-notes-v2.tsx']);
        expect(written.versions[0].tsx).toContain('<Version />');
        expect(written.versions[0].tsx).toContain('<Title>[[ Notes v1 ]]</Title>');
        expect(written.versions[0].tsx).toContain('<Opaque />');
        expect(written.versions[0].tsx).toContain('<Heading>Notes at version 1</Heading>');
        expect(written.versions[0].tsx).toContain('<Paragraph>Hello world</Paragraph>');
        expect(written.versions[1].tsx).toContain('<Paragraph>Hello there</Paragraph>');
        expect(written.versions[0].tsx).toContain(`import { Opaque } from '${manualImportPath}';`);
        expect(written.versions[0].tsx).toContain(`import { Version } from '${claudeManualImportPath}';`);
        expect(chapter.tsx).toContain(`import { Artifact, Origin } from '${claudeManualImportPath}';`);
        expect(written.thinkingCount).toBe(1);
    });

    it('keeps an action and counts its result unwritten, as thinking is', () => {
        const blocks: Block[] = [
            { type: 'action', name: 'web_search', input: { query: 'primes' } },
            { type: 'results', text: 'a page of findings' },
            { type: 'text', text: 'Found it.' },
        ];
        const path = [sampleMessage('m1', 'Claude', blocks)];
        const conversation = sampleConversation('r', 'Results', path);
        const written = writtenConversation(conversation, path, referents, manualImportPath, claudeManualImportPath);
        const [chapter] = written.chapters;
        expect(chapter.tsx).toContain('<Action>Searched the web for “primes”</Action>');
        expect(chapter.tsx).not.toContain('<Result');
        expect(chapter.tsx).toContain(`import { Action, Origin } from '${claudeManualImportPath}';`);
        expect(written.resultCount).toBe(1);
    });

    it('prints a file kept from a re-import in a closing section, inserted by a Code figure and never appended', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question');
        const kept = [{ identifier: 'edited-synopsis-tsx', type: '.txt' }];
        const conversation = sampleConversation('e', 'Edited', [question]);
        const [chapter] = writtenConversation(conversation, [question], referents, manualImportPath,
            claudeManualImportPath, kept)
            .chapters;
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
        const [chapter] = writtenConversation(conversation, [given], referents, manualImportPath, claudeManualImportPath)
            .chapters;
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
