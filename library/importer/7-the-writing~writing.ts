import { identifier } from '@dna-platform/public';
import { escaped, sanitized } from '../..public/.binding/catalogue/language.ts';
import { written } from '../..public/.binding/catalogue/reading.ts';
import type { Block, Conversation, Message, Speaker } from './3-the-record~record.ts';

export type Referents = Record<Speaker, string>;
export type WrittenFile = { name: string; content: string };
export type WrittenChapter = {
    fileName: string;
    title: string;
    tsx: string;
    files: WrittenFile[];
    day?: string;
};
export type WrittenConversation = {
    chapters: WrittenChapter[];
    versions: WrittenChapter[];
    thinkingCount: number;
    resultCount: number;
};
export type Appendix = { identifier: string; type: string };
type ProsePiece = string | string[];
type ArtifactVersion = { title: string; contentType: string; language: string; content: string; versionCount: number };

const extensionsByContentType: Record<string, string> = {
    'text/markdown': 'md',
    'text/plain': 'txt',
    'text/html': 'html',
    'text/css': 'css',
    'text/csv': 'csv',
    'text/typescript': 'ts',
    'application/javascript': 'js',
    'application/json': 'json',
    'application/vnd.ant.react': 'tsx',
    'application/vnd.ant.mermaid': 'mmd',
    'image/svg+xml': 'svg',
};

const extensionsByLanguage: Record<string, string> = {
    python: 'py',
    typescript: 'ts',
    javascript: 'js',
    autohotkey: 'ahk',
    bash: 'sh',
    shell: 'sh',
    markdown: 'md',
    plaintext: 'txt',
    text: 'txt',
};

const extractedTextExtensions = ['pdf', 'doc', 'docx', 'odt', 'rtf', 'xls', 'xlsx', 'ppt', 'pptx'];
const extensionForm = /^[a-z0-9]{1,10}$/u;
const openingWordCount = 8;
const untitledDayFormat = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } as const;

const indentation = (depth: number): string => '    '.repeat(depth);
const attributeText = (text: string): string => written(text.replace(/\s+/gu, ' ')).replace(/"/gu, '&quot;');
const lineWidth = (depth: number): number => 124 - 4 * depth;

export const slugFromName = (name: string): string => {
    const cut = identifier.slug(name).slice(0, 60).replace(/-+$/u, '');

    return cut === '' ? 'untitled' : cut;
};

export const titleFromName = (name: string): string => sanitized(name
    .replace(/^[\p{Extended_Pictographic}\p{Emoji_Presentation}️\s]+/u, '')
    .replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}️\s]+$/u, ''));

const openingSentence = (conversation: Conversation): string => {
    const dougsMessages = conversation.messages.filter(message => message.speaker === 'Doug');
    const firstMessage = [...dougsMessages].sort((first, second) => first.sentAt.localeCompare(second.sentAt))[0];
    const firstText = firstMessage?.blocks.find(block => block.type === 'text');
    const text = firstText?.type === 'text' ? firstText.text.replace(/[*_`#>]/gu, '').trim() : '';

    return text.split(/(?<=[.!?])\s|\n/u)[0] ?? '';
};

const hasWords = (title: string): boolean => identifier.slug(title) !== '';

export const conversationTitle = (conversation: Conversation): string => {
    const given = titleFromName(conversation.name);
    if (hasWords(given)) return given;
    const opening = titleFromName(openingSentence(conversation)).split(' ').slice(0, openingWordCount).join(' ');
    if (hasWords(opening)) return opening;
    const day = new Date(conversation.createdAt).toLocaleDateString('en-GB', untitledDayFormat);

    return `Untitled, ${day}`;
};

export const resourceExtension = (givenType: string): string => {
    const given = givenType.trim().toLowerCase().replace(/^\./u, '');
    const extension = extensionsByContentType[given] ?? extensionsByLanguage[given] ?? given;
    if (extractedTextExtensions.includes(extension)) return 'txt';

    return extensionForm.test(extension) ? extension : 'txt';
};

export const fileExtension = (contentType: string, title: string, language = ''): string => {
    const extensionFromTitle = /\.([a-z0-9]+)$/iu.exec(title.trim())?.[1] ?? '';

    return resourceExtension(extensionsByContentType[contentType] ?? (language || extensionFromTitle));
};

const artifactExtension = (artifactVersion: ArtifactVersion): string =>
    fileExtension(artifactVersion.contentType, artifactVersion.title, artifactVersion.language);

export const titleForm = (name: string): string => `[[ ${name} ]]`;
export const mentionForm = (name: string): string => `$[[ ${name} ]]`;
export const referenceForm = (words: string, name: string, prefix = ''): string => `${prefix}[[ ${words} ]]( ${name} )`;
export const literalForm = (fileName: string): string => `![[ ${fileName} ]]`;

export const appendLines = (appendix: Appendix, depth: number): string[] => [
    `${indentation(depth)}<Append`,
    `${indentation(depth + 1)}identifier="${appendix.identifier}"`,
    `${indentation(depth + 1)}type="${appendix.type}"`,
    `${indentation(depth)}>`,
    `${indentation(depth + 1)}${literalForm(`${appendix.identifier}${appendix.type}`)}`,
    `${indentation(depth)}</Append>`,
];

export const figureLines = (
    elementName: string,
    appendix: Appendix,
    pieces: ProsePiece[],
    depth: number,
    attributeLines: string[] = [],
): string[] => [
    `${indentation(depth)}<${elementName}`,
    `${indentation(depth + 1)}identifier="${appendix.identifier}"`,
    `${indentation(depth + 1)}type="${appendix.type}"`,
    ...attributeLines.map(attributeLine => `${indentation(depth + 1)}${attributeLine}`),
    `${indentation(depth)}>`,
    ...proseLines(pieces, depth + 1),
    `${indentation(depth)}</${elementName}>`,
];

const packageWordList = [
    'Append', 'Bold', 'Chapter', 'Code', 'Date', 'Emphasis', 'Equation', 'Heading', 'Line', 'List', 'Math', 'Means',
    'Paragraph', 'Reference', 'Section', 'Table', 'Title', 'Word',
];
const manualWordList = ['CodeBox', 'Dated', 'Message', 'Opaque', 'Quoted', 'Speaker', 'Verbatim'];
const claudeManualWordList = ['Action', 'Artifact', 'Attachment', 'Origin', 'Version'];
const boxLanguages: Record<string, string> = {
    tsx: 'typescript', ts: 'typescript', js: 'javascript', mjs: 'javascript', html: 'xml', svg: 'xml',
    md: 'markdown', sh: 'bash', py: 'python', jsx: 'javascript', ahk: 'autohotkey',
};

const isUsedIn = (lines: string[], elementName: string): boolean => lines.some(line =>
    line.includes(`<${elementName}>`) || line.includes(`<${elementName} `) || line.trim() === `<${elementName}`);

const importLines = (
    bodyLines: string[],
    alwaysPackage: string[],
    alwaysManual: string[],
    manualImportPath: string,
    claudeManualImportPath: string,
    hasAppendices: boolean,
): string[] => {
    const packageImports = packageWordList
        .filter(word => alwaysPackage.includes(word) || (word === 'Append' ? hasAppendices : isUsedIn(bodyLines, word)));
    const manualImports = manualWordList.filter(word => alwaysManual.includes(word) || isUsedIn(bodyLines, word));
    const claudeImports = claudeManualWordList.filter(word => isUsedIn(bodyLines, word));

    return [
        `import { ${packageImports.join(', ')} } from '@dna-platform/public';`,
        ...(manualImports.length === 0 ? [] : [`import { ${manualImports.join(', ')} } from '${manualImportPath}';`]),
        ...(claudeImports.length === 0 ? [] : [`import { ${claudeImports.join(', ')} } from '${claudeManualImportPath}';`]),
    ];
};

const chapterText = (imports: string[], chapterLines: string[]): string =>
    [
        ...imports, '', 'export default () => (', `${indentation(1)}<Chapter>`, ...chapterLines,
        `${indentation(1)}</Chapter>`, ');', '',
    ].join('\n');

const dayNames = (day: string): { title: string; stem: string } => {
    const [year, month, dayOfMonth] = day.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, dayOfMonth));
    const monthName = date.toLocaleString('en-GB', { month: 'long', timeZone: 'UTC' });

    return { title: `${dayOfMonth} ${monthName} ${year}`, stem: `${monthName.toLowerCase()}-${dayOfMonth}-${year}` };
};

// A version of an artifact is a chapter of its own, a document as writing under an opaque section, code as a code box.
const versionChapter = (
    ordinal: number,
    versionTitle: string,
    artifactVersion: ArtifactVersion,
    manualImportPath: string,
    claudeManualImportPath: string,
): WrittenChapter => {
    const extension = artifactExtension(artifactVersion);
    const isDocument = extension === 'md' || extension === 'txt';
    const sectionHeading = versionTitle.replace(/ v(\d+)((?:-\d+)?)$/u, ' at version $1$2');
    const bodyLines = isDocument
        ? [
            `${indentation(2)}<Section>`,
            `${indentation(3)}<Opaque />`,
            `${indentation(3)}<Heading>${written(sectionHeading)}</Heading>`,
            ...blockLines(artifactVersion.content, 3),
            `${indentation(2)}</Section>`,
        ]
        : codeLines(boxLanguages[extension] ?? extension, artifactVersion.content, 2);
    const chapterLines = [
        `${indentation(2)}<Version />`,
        `${indentation(2)}<Title>${titleForm(written(escaped(versionTitle)))}</Title>`,
        ...bodyLines,
    ];
    const imports = importLines(chapterLines, ['Chapter', 'Title'], [], manualImportPath, claudeManualImportPath, false);

    const fileName = `o${ordinal}-${slugFromName(versionTitle)}.tsx`;

    return { fileName, title: versionTitle, tsx: chapterText(imports, chapterLines), files: [] };
};

export const writtenConversation = (
    conversation: Conversation,
    path: Message[],
    referents: Referents,
    manualImportPath: string,
    claudeManualImportPath: string,
    keptAppendices: Appendix[] = [],
): WrittenConversation => {
    const days: { day: string; messages: Message[] }[] = [];
    for (const message of path) {
        const day = message.sentAt.slice(0, 10);
        const last = days.at(-1);
        if (last !== undefined && last.day === day) last.messages.push(message);
        else days.push({ day, messages: [message] });
    }
    if (days.length === 0) days.push({ day: conversation.createdAt.slice(0, 10), messages: [] });
    const artifactVersions = new Map<string, ArtifactVersion>();
    const versions: WrittenChapter[] = [];
    const versionTitles = new Set<string>();
    let thinkingCount = 0;
    let resultCount = 0;

    const uniqueVersionTitle = (title: string): string => {
        let versionTitle = title;
        for (let count = 2; versionTitles.has(versionTitle); count++) versionTitle = `${title}-${count}`;
        versionTitles.add(versionTitle);

        return versionTitle;
    };

    const chapters = days.map(({ day, messages }, dayIndex): WrittenChapter => {
        const { title, stem } = dayNames(day);
        const chapterStem = `${dayIndex + 1}-${stem}`;
        const files: WrittenFile[] = [];
        const appendices: Appendix[] = [];
        const baseNameCounts = new Map<string, number>();
        const bodyLines: string[] = [];

        const uniqueBaseName = (baseName: string): string => {
            const baseNameCount = (baseNameCounts.get(baseName) ?? 0) + 1;
            baseNameCounts.set(baseName, baseNameCount);

            return baseNameCount === 1 ? baseName : `${baseName}-${baseNameCount}`;
        };
        const addFile = (identifier: string, type: string, content: string): Appendix => {
            const appendix = { identifier, type: `.${type}` };
            files.push({ name: `${chapterStem}~${identifier}${appendix.type}`, content });
            appendices.push(appendix);

            return appendix;
        };
        const addArtifactFile = (identifier: string, artifactVersion: ArtifactVersion): Appendix =>
            addFile(identifier, artifactExtension(artifactVersion), artifactVersion.content);
        const artifactLines = (block: Extract<Block, { type: 'artifact' }>): string[] => {
            const firstVersion = { title: block.title || block.id, contentType: block.contentType, language: '' };
            const artifactVersion = artifactVersions.get(block.id) ?? { ...firstVersion, content: '', versionCount: 0 };
            if (block.command === 'create' || block.command === 'rewrite' || artifactVersion.versionCount === 0)
                artifactVersion.content = block.content || artifactVersion.content;
            else if (block.command === 'update' && block.oldText !== '')
                artifactVersion.content = artifactVersion.content.replace(block.oldText, block.newText);
            if (block.title !== '')
                artifactVersion.title = block.title;
            if (block.contentType !== '')
                artifactVersion.contentType = block.contentType;
            if (block.language !== '')
                artifactVersion.language = block.language;
            artifactVersion.versionCount++;
            artifactVersions.set(block.id, artifactVersion);
            const versionIdentifier = `${slugFromName(artifactVersion.title)}.v${artifactVersion.versionCount}`;
            const appendix = addArtifactFile(versionIdentifier, artifactVersion);
            const plainTitle = titleFromName(artifactVersion.title) || 'Untitled';
            const versionName = `${plainTitle} v${artifactVersion.versionCount}`;
            const versionTitle = uniqueVersionTitle(versionName);
            const ordinal = versions.length + 1;
            versions.push(versionChapter(ordinal, versionTitle, artifactVersion, manualImportPath, claudeManualImportPath));
            const verb = artifactVersion.versionCount === 1 ? 'Made' : block.command === 'rewrite' ? 'Rewrote' : 'Changed';
            const sentence = `${verb} the artifact “${written(artifactVersion.title)}”`;

            const attributes = [`artifact="${attributeText(block.id)}"`, `place="${identifier.slug(versionTitle)}"`];

            return figureLines('Artifact', appendix, [sentence], 3, attributes);
        };
        const messageBlockLines = (block: Block): string[] => {
            if (block.type === 'text') return blockLines(block.text, 3);
            if (block.type === 'action')
                return elementLines('Action', [written(actionSentence(block.name, block.input))], 3);
            if (block.type === 'artifact') return artifactLines(block);
            if (block.type === 'thinking')
                thinkingCount++;
            if (block.type === 'results')
                resultCount++;

            return [];
        };

        for (const message of messages) {
            bodyLines.push(
                `${indentation(2)}<Message`,
                `${indentation(3)}at="${message.sentAt}"`,
                `${indentation(2)}>`,
                `${indentation(3)}<Origin>${message.id}</Origin>`,
                `${indentation(3)}<Speaker>${speakerReference(message.speaker, referents)}</Speaker>`,
            );
            const bodyLengthBefore = bodyLines.length;
            for (const block of message.blocks)
                bodyLines.push(...messageBlockLines(block));
            for (const attachment of message.attachments) {
                const extension = resourceExtension(attachment.extension);
                const baseName = uniqueBaseName(slugFromName(attachment.name.replace(/\.[^.]+$/u, '')));
                const appendix = addFile(baseName, extension, attachment.text);
                bodyLines.push(...figureLines('Attachment', appendix, [`Attached ${fileWords(attachment.name)}`], 3));
            }
            for (const uploadName of message.uploads) {
                const sentence = `Uploaded ${fileWords(uploadName)}, whose content the export does not carry`;
                bodyLines.push(...elementLines('Attachment', [sentence], 3));
            }
            if (bodyLines.length === bodyLengthBefore)
                bodyLines.push(...elementLines('Paragraph', ['Nothing was written in this message'], 3));
            bodyLines.push(`${indentation(2)}</Message>`);
        }
        if (dayIndex === days.length - 1)
            for (const artifactVersion of artifactVersions.values())
                addArtifactFile(slugFromName(artifactVersion.title), artifactVersion);

        if (dayIndex === 0 && keptAppendices.length > 0) {
            const keptHeading = `${indentation(3)}<Heading>As I had it before the re-import</Heading>`;
            bodyLines.push(`${indentation(2)}<Section>`, keptHeading);
            for (const appendix of keptAppendices) {
                const fileWords = appendix.identifier.replace(/^edited-/u, '').replace(/-(tsx|ts|md|json|txt)$/u, '');
                bodyLines.push(
                    `${indentation(3)}<Paragraph>${fileWords}, as I had it:</Paragraph>`,
                    `${indentation(3)}<Code language="tsx">${literalForm(`${appendix.identifier}${appendix.type}`)}</Code>`,
                );
            }
            bodyLines.push(`${indentation(2)}</Section>`);
        }
        const chapterLines = [
            `${indentation(2)}<Dated>`,
            `${indentation(3)}<Date>[${title}](${day})</Date>`,
            `${indentation(2)}</Dated>`,
            `${indentation(2)}<Title>${titleForm(written(escaped(title)))}</Title>`,
            ...bodyLines,
            ...appendices.flatMap(appendix => appendLines(appendix, 2)),
        ];
        const imports = importLines(
            chapterLines, ['Chapter', 'Date', 'Paragraph', 'Title'], ['Dated', 'Message', 'Speaker'],
            manualImportPath, claudeManualImportPath, appendices.length > 0,
        );

        return { fileName: `${chapterStem}.tsx`, title, tsx: chapterText(imports, chapterLines), files, day };
    });

    return { chapters, versions, thinkingCount, resultCount };
};

const speakerReference = (speaker: Speaker, referents: Referents): string => referenceForm(speaker, referents[speaker], '$');
const fileWords = (fileName: string): string => fileName === '' ? 'a file without a name' : `“${written(fileName)}”`;

const actionSentences: Record<string, (input: any) => string> = {
    web_search: input => `Searched the web for “${input?.query ?? ''}”`,
    web_fetch: input => `Fetched ${input?.url ?? 'a page'}`,
    project_knowledge_search: input => `Searched the project's knowledge for “${input?.query ?? ''}”`,
    conversation_search: input => `Searched past conversations for “${input?.query ?? ''}”`,
    recent_chats: () => 'Looked at recent conversations',
    bash_tool: input => `Ran ${input?.command ?? 'a command'}`,
    repl: () => 'Ran code',
    view: input => `Read ${input?.path ?? 'a file'}`,
    create_file: input => `Created ${input?.path ?? 'a file'}`,
    str_replace: input => `Edited ${input?.path ?? 'a file'}`,
    present_files: () => 'Presented files',
    memory_user_edits: () => 'Edited memory',
    memory_read: () => 'Read memory',
    image_search: input => `Searched images for “${input?.query ?? ''}”`,
    places_search: input => `Searched places for “${input?.query ?? ''}”`,
};

const actionSentence = (actionName: string, input: unknown): string =>
    (actionSentences[actionName] ?? (() => `Used ${actionName.replace(/_/gu, ' ')}`))(input);

const fenceForm = /^\s*```/u;
const bulletForm = /^\s*[-*+]\s+/u;
const numberedForm = /^\s*\d+[.)]\s+/u;
const headingForm = /^\s*(#{1,6})\s+(.*)$/u;
const quoteForm = /^\s*>\s?/u;
const tableRowForm = /^\s*\|.*\|\s*$/u;
const tableRuleForm = /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/u;
const horizontalRuleForm = /^\s*(-{3,}|\*{3,}|_{3,})\s*$/u;
const blockOpeningForms = [fenceForm, headingForm, bulletForm, numberedForm, quoteForm, tableRowForm];

const isBlockOpening = (line: string): boolean => blockOpeningForms.some(form => form.test(line));
const tableCells = (line: string): string[] =>
    line.trim().replace(/^\|/u, '').replace(/\|$/u, '').split('|').map(cell => cell.trim());
const unmarkedText = (text: string): string =>
    text.replace(/\*\*|__|`/gu, '').replace(/(?<![\w*])\*([^*\n]+?)\*(?!\*)/gu, '$1');

export const blockLines = (text: string, depth: number): string[] => {
    const outputLines: string[] = [];
    const lines = text.replace(/\r\n?/gu, '\n').split('\n');
    let lineIndex = 0;
    while (lineIndex < lines.length) {
        const line = lines[lineIndex];
        if (line.trim() === '' || horizontalRuleForm.test(line)) {
            lineIndex++;
            continue;
        }
        if (fenceForm.test(line)) {
            const language = line.trim().replace(/^```/u, '').trim().split(/\s/u)[0] ?? '';
            const listingLines: string[] = [];
            lineIndex++;
            while (lineIndex < lines.length && !fenceForm.test(lines[lineIndex]))
                listingLines.push(lines[lineIndex++]);
            lineIndex++;
            outputLines.push(...codeLines(language, listingLines.join('\n'), depth));
            continue;
        }
        if (headingForm.test(line)) {
            const headingText = headingForm.exec(line)![2].replace(/\*\*(.+?)\*\*|__(.+?)__/gu, '$1$2').trim();
            outputLines.push(...elementLines('Heading', inlinePieces(headingText, false), depth));
            lineIndex++;
            continue;
        }
        if (tableRowForm.test(line) && lineIndex + 1 < lines.length && tableRuleForm.test(lines[lineIndex + 1])) {
            const tableRows = [tableCells(line)];
            lineIndex += 2;
            while (lineIndex < lines.length && tableRowForm.test(lines[lineIndex]))
                tableRows.push(tableCells(lines[lineIndex++]));
            outputLines.push(...tableLines(tableRows, depth));
            continue;
        }
        if (bulletForm.test(line) || numberedForm.test(line)) {
            const listItems: ListItem[] = [];
            const isContinuation = (nextLine: string): boolean =>
                listItems.length > 0 && nextLine.trim() !== '' && /^\s{2,}/u.test(nextLine);
            const isItem = (nextLine: string): boolean => bulletForm.test(nextLine) || numberedForm.test(nextLine);
            const filledIndexFrom = (blankIndex: number): number => {
                let filledIndex = blankIndex;
                while (filledIndex < lines.length && lines[filledIndex].trim() === '') filledIndex++;

                return filledIndex;
            };
            const continuesAfterBlank = (blankIndex: number): boolean => {
                const filledLine = lines[filledIndexFrom(blankIndex)];
                if (filledLine === undefined || listItems.length === 0) return false;
                if (!isItem(filledLine)) return /^\s{2,}/u.test(filledLine);
                const indent = filledLine.length - filledLine.trimStart().length;

                return indent > listItems[0].indent || numberedForm.test(filledLine) === listItems[0].ordered;
            };
            const continuesList = (nextLine: string): boolean =>
                isItem(nextLine) || isContinuation(nextLine) || (nextLine.trim() === '' && continuesAfterBlank(lineIndex));
            while (lineIndex < lines.length && continuesList(lines[lineIndex])) {
                if (lines[lineIndex].trim() === '')
                    lineIndex = filledIndexFrom(lineIndex);
                else if (isItem(lines[lineIndex])) {
                    const itemLine = lines[lineIndex++];
                    const indent = itemLine.length - itemLine.trimStart().length;
                    const ordered = numberedForm.test(itemLine);
                    const text = itemLine.replace(ordered ? numberedForm : bulletForm, '');
                    listItems.push({ indent, ordered, text, items: [] });
                } else
                    listItems[listItems.length - 1].text += ` ${lines[lineIndex++].trim()}`;
            }
            outputLines.push(...listLines(nestedItems(listItems), depth));
            continue;
        }
        if (quoteForm.test(line)) {
            const quotedLines: string[] = [];
            while (lineIndex < lines.length && quoteForm.test(lines[lineIndex]))
                quotedLines.push(lines[lineIndex++].replace(quoteForm, ''));
            outputLines.push(...elementLines('Paragraph', inlinePieces(quotedLines.join(' ')), depth, ['<Quoted />']));
            continue;
        }
        // A line no form above took is prose, and a paragraph always takes its first line: a row of a table
        // with no rule under it opens no table, and a paragraph that took nothing wrote an empty paragraph at
        // the same line for ever, 12 GB in 13 minutes on 2026-10-18.
        const paragraphLines: string[] = [lines[lineIndex++].trim()];
        while (lineIndex < lines.length && lines[lineIndex].trim() !== '' && !isBlockOpening(lines[lineIndex]))
            paragraphLines.push(lines[lineIndex++].trim());
        outputLines.push(...elementLines('Paragraph', inlinePieces(paragraphLines.join(' ')), depth));
    }

    return outputLines;
};

const notationForm = /=\|>|<\|=\|>|=[a-z']*>|^::/mu;
const bracketForm = /[[\]]/u;

// A listing stands in the chapter as the lines it is, a template literal whose first line opens it and whose last
// closes it, so a block of code can be read where it is written.
const templateText = (text: string): string => text.replace(/\\/gu, '\\\\').replace(/`/gu, '\\`').replace(/\$\{/gu, '\\${');
const unscanned = (text: string): string => (bracketForm.test(text) ? '${\'\'}' : '');

const stringForm = (text: string): string =>
    bracketForm.test(text) ? `\`${unscanned(text)}${templateText(text)}\`` : JSON.stringify(text);

const listingLines = (listing: string, depth: number): string[] => {
    const lines = templateText(listing.replace(/\r\n?/gu, '\n')).split('\n');
    lines[0] = `${indentation(depth)}{\`${unscanned(listing)}${lines[0]}`;
    lines[lines.length - 1] = `${lines[lines.length - 1]}\`}`;

    return lines;
};

// A block of code is a code box; one whose language was not named but that reads as SRT notation is named srt.
const codeLines = (language: string, listing: string, depth: number): string[] => {
    const named = language !== '' ? language : notationForm.test(listing) ? 'srt' : '';
    if (named === '')
        return [`${indentation(depth)}<CodeBox>`, ...listingLines(listing, depth + 1), `${indentation(depth)}</CodeBox>`];

    return [
        `${indentation(depth)}<CodeBox`,
        `${indentation(depth + 1)}language="${named.replace(/"/gu, '')}"`,
        `${indentation(depth)}>`,
        ...listingLines(listing, depth + 1),
        `${indentation(depth)}</CodeBox>`,
    ];
};

const tableLines = (tableRows: string[][], depth: number): string[] => {
    const outputLines = [`${indentation(depth)}<Paragraph>`, `${indentation(depth + 1)}<Table />`];
    for (const tableRow of tableRows) {
        outputLines.push(`${indentation(depth + 1)}<Line>`);
        for (const cell of tableRow)
            outputLines.push(...elementLines('Word', [written(unmarkedText(cell))], depth + 2));
        outputLines.push(`${indentation(depth + 1)}</Line>`);
    }
    outputLines.push(`${indentation(depth)}</Paragraph>`);

    return outputLines;
};

type ListItem = { indent: number; ordered: boolean; text: string; items: ListItem[] };

// Items indented under an item are its own list, as deep as the markdown nests them.
const nestedItems = (flatItems: ListItem[]): ListItem[] => {
    const topItems: ListItem[] = [];
    const open: ListItem[] = [];
    for (const item of flatItems) {
        while (open.length > 0 && open[open.length - 1].indent >= item.indent) open.pop();
        (open.length === 0 ? topItems : open[open.length - 1].items).push(item);
        open.push(item);
    }

    return topItems;
};

// A list is a paragraph said to be a list, its items lines; a nested list is a paragraph inside it, one deeper.
const listLines = (listItems: ListItem[], depth: number): string[] => {
    const listElement = `<List${listItems[0]?.ordered ? ' ordered' : ''} />`;
    const outputLines = [`${indentation(depth)}<Paragraph>`, `${indentation(depth + 1)}${listElement}`];
    for (const listItem of listItems) {
        outputLines.push(...elementLines('Line', inlinePieces(listItem.text.trim(), false), depth + 1));
        if (listItem.items.length > 0) outputLines.push(...listLines(listItem.items, depth + 1));
    }
    outputLines.push(`${indentation(depth)}</Paragraph>`);

    return outputLines;
};

const markedWordLines = (markName: string, text: string): string[] =>
    ['<Word>', `    <${markName} />`, `    ${written(text)}`, '</Word>'];

const displayForms = [/\$\$([^$]+?)\$\$/gu, /\\\[([\s\S]+?)\\\]/gu];
const inlineMath = (innerText: string): ProsePiece => [`<Math>{${stringForm(innerText.trim())}}</Math>`];
const inlineForms: [RegExp, (innerText: string) => ProsePiece][] = [
    [displayForms[0], innerText => [`<Equation>{${stringForm(innerText.trim())}}</Equation>`]],
    [displayForms[1], innerText => [`<Equation>{${stringForm(innerText.trim())}}</Equation>`]],
    [/\\\(([^\n]+?)\\\)/gu, innerText => [`<Math>{${stringForm(innerText.trim())}}</Math>`]],
    [/`([^`\n]+?)`/gu, innerText => markedWordLines('Verbatim', innerText)],
    [/\*\*(.+?)\*\*/gu, innerText => markedWordLines('Bold', innerText)],
    [/(?<![\w*])\*([^*\n]+?)\*(?!\*)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/(?<!\w)_([^_\n]+?)_(?!\w)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/\$(?=\S)([^$\n\u0000]+?)(?<=\S)\$(?!\d)/gu, innerText => [`<Math>{${stringForm(innerText)}}</Math>`]],
];

// Display math is an Equation where a paragraph stands, and inline Math in a line of a list or a heading, which
// hold nothing a paragraph's size: an Equation in a list's line was refused by the specification, 2026-10-18.
export const inlinePieces = (text: string, display = true): ProsePiece[] => {
    const elementPieces: ProsePiece[] = [];
    const placeholder = (): string => `\u0000${elementPieces.length - 1}\u0000`;
    let markedText = text.replace(/\[([^\]\n]+)\]\((https?:\/\/[^)\s]+)\)/gu, (_, words: string, url: string) => {
        const referenceLine = `    <Reference>${written(url)}</Reference>`;
        elementPieces.push(['<Word>', referenceLine, `    ${written(words)}`, '</Word>']);

        return placeholder();
    });
    for (const [form, elementPiece] of inlineForms)
        markedText = markedText.replace(form, (_, innerText: string) => {
            elementPieces.push(display || !displayForms.includes(form) ? elementPiece(innerText) : inlineMath(innerText));

            return placeholder();
        });
    const pieces: ProsePiece[] = [];
    for (const part of markedText.split(/(\u0000\d+\u0000)/u)) {
        const placeholderMatch = /^\u0000(\d+)\u0000$/u.exec(part);
        if (placeholderMatch !== null)
            pieces.push(elementPieces[Number(placeholderMatch[1])]);
        else if (part !== '')
            pieces.push(written(part));
    }

    return pieces;
};

const plainText = (pieces: ProsePiece[]): string | undefined => {
    if (pieces.length === 0) return '';
    if (pieces.length === 1 && typeof pieces[0] === 'string') return pieces[0];

    return undefined;
};

const elementLines = (
    elementName: string,
    pieces: ProsePiece[],
    depth: number,
    annotationLines: string[] = [],
): string[] => {
    const text = plainText(pieces);
    const fitsOnOneLine = text !== undefined && text.length + elementName.length * 2 + 5 <= lineWidth(depth);
    if (annotationLines.length === 0 && fitsOnOneLine)
        return [`${indentation(depth)}<${elementName}>${text}</${elementName}>`];

    return [
        `${indentation(depth)}<${elementName}>`,
        ...annotationLines.map(annotationLine => indentation(depth + 1) + annotationLine),
        ...proseLines(pieces, depth + 1),
        `${indentation(depth)}</${elementName}>`,
    ];
};

export const proseLines = (pieces: ProsePiece[], depth: number): string[] => {
    const outputLines: string[] = [];
    let currentLine = '';
    let spaceBefore = true;
    const flushLine = (): void => {
        if (currentLine !== '')
            outputLines.push(indentation(depth) + currentLine);
        currentLine = '';
    };
    const addToken = (token: string, spaced: boolean): void => {
        if (currentLine === '') {
            currentLine = token;
            return;
        }
        if (spaced && currentLine.length + 1 + token.length > lineWidth(depth)) {
            flushLine();
            currentLine = token;
            return;
        }
        currentLine = spaced ? `${currentLine} ${token}` : `${currentLine}${token}`;
    };
    for (const piece of pieces) {
        if (typeof piece === 'string') {
            const words = piece.split(/\s+/u).filter(text => text !== '');
            for (const [wordIndex, word] of words.entries())
                addToken(word, wordIndex > 0 || spaceBefore || /^\s/u.test(piece));
            spaceBefore = /\s$/u.test(piece);
            continue;
        }
        addToken(piece[0], spaceBefore);
        if (piece.length > 1) {
            flushLine();
            for (const innerLine of piece.slice(1, -1))
                outputLines.push(indentation(depth) + innerLine);
            currentLine = piece[piece.length - 1];
        }
        spaceBefore = false;
    }
    flushLine();

    return outputLines;
};
