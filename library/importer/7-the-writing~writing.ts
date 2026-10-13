import type { Block, Conversation, Message, Speaker } from './3-the-record~record.ts';

export type Referents = Record<Speaker, string>;
export type WrittenFile = { name: string; content: string };
export type WrittenChapter = { fileName: string; title: string; tsx: string; files: WrittenFile[]; thinkingCount: number };
export type Appendix = { identifier: string; type: string };
type ProsePiece = string | string[];
type ArtifactVersion = { title: string; contentType: string; content: string; versionCount: number };

export const knownExtensions = ['ts', 'tsx', 'js', 'mjs', 'json', 'md', 'css', 'html', 'sh', 'txt', 'csv', 'svg'];

const extensionsByContentType: Record<string, string> = {
    'text/markdown': 'md',
    'text/plain': 'txt',
    'text/html': 'html',
    'text/css': 'css',
    'text/csv': 'csv',
    'application/javascript': 'js',
    'application/json': 'json',
    'application/vnd.ant.react': 'tsx',
    'image/svg+xml': 'svg',
};

const indentation = (depth: number): string => '    '.repeat(depth);
const lineWidth = (depth: number): number => 124 - 4 * depth;

export const escapedText = (text: string): string => text
    .replace(/&/gu, '&amp;')
    .replace(/</gu, '&lt;')
    .replace(/>/gu, '&gt;')
    .replace(/\{/gu, '&#123;')
    .replace(/\}/gu, '&#125;')
    .replace(/\[/gu, '&#91;')
    .replace(/\]/gu, '&#93;');

export const slugFromName = (name: string): string => {
    const slug = name
        .toLowerCase()
        .replace(/['’]/gu, '')
        .replace(/&/gu, ' and ')
        .replace(/[^\p{L}\p{N}]+/gu, '-')
        .replace(/^-+|-+$/gu, '');

    return slug === '' ? 'untitled' : slug.slice(0, 60);
};

export const fileExtension = (contentType: string, title: string): string => {
    const extensionFromTitle = /\.([a-z0-9]+)$/iu.exec(title.trim())?.[1]?.toLowerCase();
    const extensionFromContentType = contentType.replace(/^.*\//u, '').toLowerCase();
    const extension = extensionsByContentType[contentType] ?? extensionFromTitle ?? extensionFromContentType;

    return knownExtensions.includes(extension) ? extension : 'txt';
};

export const notationName = (name: string): string => name.replace(/\./gu, '..').replace(/\//gu, './');
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

export const writtenChapter = (
    conversation: Conversation,
    path: Message[],
    referents: Referents,
    manualImportPath: string,
    claudeManualImportPath: string,
): WrittenChapter => {
    const firstDay = path[0]?.sentAt.slice(0, 10) ?? conversation.createdAt.slice(0, 10);
    const [year, month, day] = firstDay.split('-').map(Number);
    const monthName = new Date(Date.UTC(year, month - 1, day)).toLocaleString('en-GB', { month: 'long', timeZone: 'UTC' });
    const title = `${day} ${monthName} ${year}`;
    const chapterStem = `1-${monthName.toLowerCase()}-${day}-${year}`;
    const files: WrittenFile[] = [];
    const appendices: Appendix[] = [];
    const artifactVersions = new Map<string, ArtifactVersion>();
    const baseNameCounts = new Map<string, number>();
    const bodyLines: string[] = [];
    let thinkingCount = 0;

    const uniqueBaseName = (baseName: string): string => {
        const baseNameCount = (baseNameCounts.get(baseName) ?? 0) + 1;
        baseNameCounts.set(baseName, baseNameCount);

        return baseNameCount === 1 ? baseName : `${baseName}-${baseNameCount}`;
    };
    const addFile = (identifier: string, type: string, content: string): void => {
        files.push({ name: `${chapterStem}~${identifier}.${type}`, content });
        appendices.push({ identifier, type: `.${type}` });
    };
    const addArtifactFile = (identifier: string, artifactVersion: ArtifactVersion): void => {
        addFile(identifier, fileExtension(artifactVersion.contentType, artifactVersion.title), artifactVersion.content);
    };
    const artifactLines = (block: Extract<Block, { type: 'artifact' }>): string[] => {
        const artifactVersion = artifactVersions.get(block.id)
            ?? { title: block.title || block.id, contentType: block.contentType, content: '', versionCount: 0 };
        if (block.command === 'create' || block.command === 'rewrite' || artifactVersion.versionCount === 0)
            artifactVersion.content = block.content || artifactVersion.content;
        else if (block.command === 'update' && block.oldText !== '')
            artifactVersion.content = artifactVersion.content.replace(block.oldText, block.newText);
        if (block.title !== '')
            artifactVersion.title = block.title;
        if (block.contentType !== '')
            artifactVersion.contentType = block.contentType;
        artifactVersion.versionCount++;
        artifactVersions.set(block.id, artifactVersion);
        addArtifactFile(`${slugFromName(artifactVersion.title)}.v${artifactVersion.versionCount}`, artifactVersion);
        const verb = artifactVersion.versionCount === 1 ? 'Made' : block.command === 'rewrite' ? 'Rewrote' : 'Changed';
        const sentence = `${verb} the artifact “${escapedText(artifactVersion.title)}”`;

        return elementLines('Artifact', [sentence], 3);
    };
    const messageBlockLines = (block: Block): string[] => {
        if (block.type === 'text') return blockLines(block.text, 3);
        if (block.type === 'action')
            return elementLines('Action', [escapedText(actionSentence(block.name, block.input))], 3);
        if (block.type === 'results' && block.text.trim() !== '')
            return elementLines('Result', [escapedText(block.text.trim().slice(0, 4000))], 3);
        if (block.type === 'artifact') return artifactLines(block);
        if (block.type === 'thinking')
            thinkingCount++;

        return [];
    };

    for (const message of path) {
        bodyLines.push(
            `${indentation(2)}<Message`,
            `${indentation(3)}at="${message.sentAt}"`,
            `${indentation(2)}>`,
            `${indentation(3)}<Speaker>${speakerReference(message.speaker, referents)}</Speaker>`,
        );
        const bodyLengthBefore = bodyLines.length;
        for (const block of message.blocks)
            bodyLines.push(...messageBlockLines(block));
        for (const attachment of message.attachments) {
            const attachmentExtension = attachment.extension.toLowerCase();
            const extension = knownExtensions.includes(attachmentExtension) ? attachmentExtension : 'txt';
            addFile(uniqueBaseName(slugFromName(attachment.name.replace(/\.[^.]+$/u, ''))), extension, attachment.text);
            bodyLines.push(...elementLines('Attachment', [`Attached “${escapedText(attachment.name)}”`], 3));
        }
        for (const uploadName of message.uploads) {
            const sentence = `Uploaded “${escapedText(uploadName)}”, whose content the export does not carry`;
            bodyLines.push(...elementLines('Attachment', [sentence], 3));
        }
        if (bodyLines.length === bodyLengthBefore)
            bodyLines.push(...elementLines('Paragraph', ['Nothing was written in this message'], 3));
        bodyLines.push(`${indentation(2)}</Message>`);
    }
    for (const artifactVersion of artifactVersions.values())
        addArtifactFile(slugFromName(artifactVersion.title), artifactVersion);

    const isUsedInBody = (elementName: string): boolean => bodyLines.some(line =>
        line.includes(`<${elementName}>`) || line.includes(`<${elementName} `) || line.trim() === `<${elementName}`);
    const alwaysImported = ['Chapter', 'Date', 'Paragraph', 'Part', 'Title'];
    const packageWords = [
        'Append', 'Bold', 'Chapter', 'Code', 'Date', 'Emphasis', 'Equation', 'Heading', 'Line', 'List', 'Math', 'Paragraph',
        'Part', 'Reference', 'Table', 'Title', 'Word',
    ];
    const manualWords = ['Dated', 'Message', 'Quoted', 'Speaker', 'Verbatim'];
    const claudeManualWords = ['Action', 'Artifact', 'Attachment', 'Result'];
    const packageImports = packageWords
        .filter(word => alwaysImported.includes(word) || (word === 'Append' ? appendices.length > 0 : isUsedInBody(word)));
    const manualImports = manualWords.filter(word => ['Dated', 'Message', 'Speaker'].includes(word) || isUsedInBody(word));
    const claudeManualImports = claudeManualWords.filter(isUsedInBody);
    const claudeImportLine = claudeManualImports.length === 0
        ? [] : [`import { ${claudeManualImports.join(', ')} } from '${claudeManualImportPath}';`];
    const tsx = [
        `import { ${packageImports.join(', ')} } from '@dna-platform/public';`,
        `import { ${manualImports.join(', ')} } from '${manualImportPath}';`,
        ...claudeImportLine,
        '',
        'export default () => (',
        `${indentation(1)}<Chapter>`,
        `${indentation(2)}<Part>${monthName} ${year}</Part>`,
        `${indentation(2)}<Dated>`,
        `${indentation(3)}<Date>[${title}](${firstDay})</Date>`,
        `${indentation(2)}</Dated>`,
        `${indentation(2)}<Title>${titleForm(title)}</Title>`,
        ...bodyLines,
        ...appendices.flatMap(appendix => appendLines(appendix, 2)),
        `${indentation(1)}</Chapter>`,
        ');',
        '',
    ].join('\n');

    return { fileName: `${chapterStem}.tsx`, title, tsx, files, thinkingCount };
};

const speakerReference = (speaker: Speaker, referents: Referents): string => referenceForm(speaker, referents[speaker], '$');

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
            outputLines.push(...elementLines('Heading', inlinePieces(headingForm.exec(line)![2].trim()), depth));
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
        const listForm = bulletForm.test(line) ? bulletForm : numberedForm.test(line) ? numberedForm : undefined;
        if (listForm !== undefined) {
            const listItems: string[] = [];
            const isContinuation = (nextLine: string): boolean =>
                listItems.length > 0 && nextLine.trim() !== '' && /^\s{2,}/u.test(nextLine);
            while (lineIndex < lines.length && (listForm.test(lines[lineIndex]) || isContinuation(lines[lineIndex]))) {
                if (listForm.test(lines[lineIndex]))
                    listItems.push(lines[lineIndex++].replace(listForm, ''));
                else
                    listItems[listItems.length - 1] += ` ${lines[lineIndex++].trim()}`;
            }
            outputLines.push(...listLines(listItems, listForm === numberedForm, depth));
            continue;
        }
        if (quoteForm.test(line)) {
            const quotedLines: string[] = [];
            while (lineIndex < lines.length && quoteForm.test(lines[lineIndex]))
                quotedLines.push(lines[lineIndex++].replace(quoteForm, ''));
            outputLines.push(...elementLines('Paragraph', inlinePieces(quotedLines.join(' ')), depth, ['<Quoted />']));
            continue;
        }
        const paragraphLines: string[] = [];
        while (lineIndex < lines.length && lines[lineIndex].trim() !== '' && !isBlockOpening(lines[lineIndex]))
            paragraphLines.push(lines[lineIndex++].trim());
        outputLines.push(...elementLines('Paragraph', inlinePieces(paragraphLines.join(' ')), depth));
    }

    return outputLines;
};

const codeLines = (language: string, listing: string, depth: number): string[] => {
    const listingLine = `${indentation(depth + 1)}{${JSON.stringify(listing)}}`;
    if (language === '') return [`${indentation(depth)}<Code>`, listingLine, `${indentation(depth)}</Code>`];

    return [
        `${indentation(depth)}<Code`,
        `${indentation(depth + 1)}language="${language.replace(/"/gu, '')}"`,
        `${indentation(depth)}>`,
        listingLine,
        `${indentation(depth)}</Code>`,
    ];
};

const tableLines = (tableRows: string[][], depth: number): string[] => {
    const outputLines = [`${indentation(depth)}<Paragraph>`, `${indentation(depth + 1)}<Table />`];
    for (const tableRow of tableRows) {
        outputLines.push(`${indentation(depth + 1)}<Line>`);
        for (const cell of tableRow)
            outputLines.push(...elementLines('Word', [escapedText(unmarkedText(cell))], depth + 2));
        outputLines.push(`${indentation(depth + 1)}</Line>`);
    }
    outputLines.push(`${indentation(depth)}</Paragraph>`);

    return outputLines;
};

const listLines = (listItems: string[], ordered: boolean, depth: number): string[] => {
    const listElement = `<List${ordered ? ' ordered' : ''} />`;
    const outputLines = [`${indentation(depth)}<Paragraph>`, `${indentation(depth + 1)}${listElement}`];
    for (const listItem of listItems)
        outputLines.push(...elementLines('Line', inlinePieces(listItem.trim()), depth + 1));
    outputLines.push(`${indentation(depth)}</Paragraph>`);

    return outputLines;
};

const markedWordLines = (markName: string, text: string): string[] =>
    ['<Word>', `    <${markName} />`, `    ${escapedText(text)}`, '</Word>'];

const inlineForms: [RegExp, (innerText: string) => ProsePiece][] = [
    [/\$\$([^$]+?)\$\$/gu, innerText => [`<Equation>{${JSON.stringify(innerText.trim())}}</Equation>`]],
    [/`([^`\n]+?)`/gu, innerText => markedWordLines('Verbatim', innerText)],
    [/\*\*(.+?)\*\*/gu, innerText => markedWordLines('Bold', innerText)],
    [/(?<![\w*])\*([^*\n]+?)\*(?!\*)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/(?<!\w)_([^_\n]+?)_(?!\w)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/\$(?=\S)([^$\n\u0000]+?)(?<=\S)\$(?!\d)/gu, innerText => [`<Math>{${JSON.stringify(innerText)}}</Math>`]],
];

export const inlinePieces = (text: string): ProsePiece[] => {
    const elementPieces: ProsePiece[] = [];
    const placeholder = (): string => `\u0000${elementPieces.length - 1}\u0000`;
    let markedText = text.replace(/\[([^\]\n]+)\]\((https?:\/\/[^)\s]+)\)/gu, (_, words: string, url: string) => {
        const referenceLine = `    <Reference>${escapedText(url)}</Reference>`;
        elementPieces.push(['<Word>', referenceLine, `    ${escapedText(words)}`, '</Word>']);

        return placeholder();
    });
    for (const [form, elementPiece] of inlineForms)
        markedText = markedText.replace(form, (_, innerText: string) => {
            elementPieces.push(elementPiece(innerText));

            return placeholder();
        });
    const pieces: ProsePiece[] = [];
    for (const part of markedText.split(/(\u0000\d+\u0000)/u)) {
        const placeholderMatch = /^\u0000(\d+)\u0000$/u.exec(part);
        if (placeholderMatch !== null)
            pieces.push(elementPieces[Number(placeholderMatch[1])]);
        else if (part !== '')
            pieces.push(escapedText(part));
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
