import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import type { Conversation, Message, Project } from './3-the-record~record.ts';
import { identifier } from '@dna-platform/public';
import { escaped, sanitized } from '../..public/.binding/catalogue/language.ts';
import { written } from '../..public/.binding/catalogue/reading.ts';
import {
    appendLines, mentionForm, referenceForm, resourceExtension, slugFromName, titleForm, titleFromName, writtenConversation,
    type Appendix, type Referents, type WrittenChapter,
} from './7-the-writing~writing.ts';

export type LibraryFolders = { library: string; claude: string; claudeManual: string; conversations: string };
export type Scheme = { ground: string; band: string; bandInk: string; foot: string; footInk: string; ink: string };
export type WrittenBook = { folder: string; files: string[]; chapterStem: string };
export type BookName = { words: string; key: string };
export type ConversationNaming = { name: BookName; folderName: string };

export const conversationKeyPrefix = 'claude--';
export const shortIdLength = 8;
export const plainName = (name: string): BookName => ({ words: name, key: name });
export const projectBookName = (name: string): BookName => {
    const words = sanitized(name);

    return { words, key: `${conversationKeyPrefix}${words}` };
};
export type WrittenEntry = { entryPath: string | undefined; tablePath: string; files: string[] };

export const schemes: Scheme[] = [
    { ground: '#f3f0f8', band: '#c9bfe3', bandInk: '#3a2d63', foot: '#8f7fc0', footInk: '#2e2350', ink: '#3a2d63' },
    { ground: '#eef5f6', band: '#b6dde2', bandInk: '#1c565c', foot: '#7fb7bd', footInk: '#153e43', ink: '#1f5a60' },
    { ground: '#f6f0ea', band: '#e0c6ad', bandInk: '#5a3a1e', foot: '#c89a72', footInk: '#4a2c12', ink: '#5a3a1e' },
    { ground: '#eef4ee', band: '#b9d4bf', bandInk: '#1f3f2a', foot: '#8fb79b', footInk: '#17351f', ink: '#1f3f2a' },
    { ground: '#f7eef0', band: '#e4bfc8', bandInk: '#5f2436', foot: '#c98a9b', footInk: '#4d1a2a', ink: '#5f2436' },
    { ground: '#eff1f6', band: '#c0c9df', bandInk: '#2a3a63', foot: '#8e9fc8', footInk: '#1f2d50', ink: '#2a3a63' },
    { ground: '#f6f3e8', band: '#e2d6a6', bandInk: '#5c4d12', foot: '#c6b46a', footInk: '#4a3d0c', ink: '#5c4d12' },
    { ground: '#efefef', band: '#c8c8c8', bandInk: '#333333', foot: '#9a9a9a', footInk: '#262626', ink: '#333333' },
];

const whereThisBookStandsSection = '        <Section>\n            <Heading>Where this book stands</Heading>';
const authorLine = `<Author>${referenceForm('Doug', 'The Librarian', '*')}</Author>`;
const subjectLine = (words: string, name: string): string => `<Subject>${referenceForm(words, name, '**')}</Subject>`;
const nameInForm = (name: string): string => written(escaped(name));
const titleText = (bookName: BookName): string => bookName.words === bookName.key
    ? titleForm(nameInForm(bookName.key)) : referenceForm(written(bookName.words), nameInForm(bookName.key));
const mentionText = (bookName: BookName, within = false): string => {
    const key = `${within ? './' : ''}${nameInForm(bookName.key)}`;

    return bookName.words === bookName.key ? mentionForm(key) : referenceForm(written(bookName.words), key, '$');
};
const captionLines = (captionText: string, bookName: BookName): string[] => {
    const lines = wrappedLines(captionText);
    lines[lines.length - 1] += ` <Means>${mentionText(bookName)}</Means>.`;

    return lines;
};
const titleLine = (bookName: BookName): string => `<Title>${titleText(bookName)}</Title>`;
const tablePackageWords = [
    'Chapter', 'Content', 'Heading', 'Paragraph', 'Parenthetical', 'Section', 'TableOfContents', 'Title', 'Word',
];
const coverPackageWords = ['About', 'Author', 'Chapter', 'Cover', 'Subject', 'Title'];
const drawnCoverPackageWords = ['About', 'Author', 'Chapter', 'Paragraph', 'Subject', 'Svg', 'Title'];
const windowLines = (x: number, y: number): string[] => ['<Window', `    x="${x}"`, `    y="${y}"`, '/>'];
const illustrationLines = ['<Paragraph>', '    <Illustration />', '    <Svg>![[ illustration.svg ]]</Svg>', '</Paragraph>'];
const drawingFileName = '.cover~illustration.svg';
const entryPackageWords = ['Chapter', 'Means', 'Paragraph', 'Synopsis', 'Title'];
const dateFormat = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } as const;
const monthFormat = { month: 'long', year: 'numeric', timeZone: 'UTC' } as const;

const indentation = (depth: number): string => '    '.repeat(depth);
const indentedLines = (depth: number, lines: string[]): string[] => lines.map(line => indentation(depth) + line);
const relativePath = (fromFolder: string, toFolder: string): string => {
    const path = relative(fromFolder, toFolder).split('\\').join('/');

    return path === '..' || path.startsWith('./') || path.startsWith('../') ? path : `./${path}`;
};
const manualImportPath = (folders: LibraryFolders, folder: string): string =>
    `${relativePath(folder, join(folders.library, '.manual'))}/.book`;
const claudeManualImportPath = (folders: LibraryFolders, folder: string): string =>
    `${relativePath(folder, folders.claudeManual)}/.book`;
const packageImportLine = (packageWords: string[]): string =>
    `import { ${packageWords.join(', ')} } from '@dna-platform/public';`;
const manualImportLine = (manualWords: string[], importPath: string): string =>
    `import { ${manualWords.join(', ')} } from '${importPath}';`;
const volumeImportLines = (
    folder: string, folders: LibraryFolders, subjectFolder: string, projectFolders: string[] = [],
): string[] => [
    `import SubjectCover from '${relativePath(folder, subjectFolder)}/.cover.tsx';`,
    `import StoryCover from '${relativePath(folder, join(folders.library, '.librarian'))}/.cover.tsx';`,
    ...projectFolders.map((projectFolder, index) =>
        `import ProjectCover${index + 1} from '${relativePath(folder, projectFolder)}/.cover.tsx';`),
];
const volumeLines = (projectCount = 0): string[] => [
    '<Volume>{SubjectCover()}</Volume>',
    '<Volume>{StoryCover()}</Volume>',
    ...Array.from({ length: projectCount }, (_, index) => `<Volume>{ProjectCover${index + 1}()}</Volume>`),
];
const monthHeading = (instant: string): string => new Date(instant).toLocaleString('en-GB', monthFormat);
const dayWords = (instant: string): string => new Date(instant).toLocaleDateString('en-GB', dateFormat);
const dateReference = (instant: string): string => `[${dayWords(instant)}](${instant.slice(0, 10)})`;
const bookClassName = (name: string): string => {
    const capitalized = slugFromName(name).replace(/(^|-)(\p{L}|\p{N})/gu, (_, __, letter: string) => letter.toUpperCase());

    return `$${capitalized.replace(/[^\p{L}\p{N}]/gu, '')}`;
};

export const shortId = (conversationId: string): string => conversationId.replace(/-/gu, '').slice(0, shortIdLength);

export const uniqueConversationName = (
    folder: string, title: string, conversationId: string, namesTaken: Set<string>,
): ConversationNaming => {
    const short = shortId(conversationId);
    const key = `${conversationKeyPrefix}${title}--${short}`;
    const folderName = `${conversationKeyPrefix}${slugFromName(title)}--${short}`;
    const address = identifier.slug(key);
    if (namesTaken.has(folderName) || namesTaken.has(address) || existsSync(join(folder, folderName)))
        throw new Error(`"${key}" would stand where another book stands, ${folderName}: two conversations' ids open with `
            + `the same ${shortIdLength} characters, or a run that stopped left this book behind`);
    namesTaken.add(folderName);
    namesTaken.add(address);

    return { name: { words: title, key }, folderName };
};

export const wrappedLines = (text: string, width = 108): string[] => {
    const outputLines: string[] = [];
    let currentLine = '';
    for (const word of text.split(/\s+/u).filter(part => part !== '')) {
        if (currentLine !== '' && currentLine.length + 1 + word.length > width) {
            outputLines.push(currentLine);
            currentLine = word;
            continue;
        }
        currentLine = currentLine === '' ? word : `${currentLine} ${word}`;
    }
    if (currentLine !== '')
        outputLines.push(currentLine);

    return outputLines.length === 0 ? ['Nothing was said of this book.'] : outputLines;
};

export const conversationBook = (
    folders: LibraryFolders,
    conversation: Conversation,
    path: Message[],
    naming: ConversationNaming,
    projectNames: string[],
    accountName: string | undefined,
    scheme: Scheme,
    referents: Referents,
    keptAppendices: Appendix[] = [],
): WrittenBook => {
    const folder = join(folders.conversations, naming.folderName);
    const importPath = manualImportPath(folders, folder);
    const claudeImportPath = claudeManualImportPath(folders, folder);
    const conversationWriting = writtenConversation(conversation, path, referents, importPath, claudeImportPath, keptAppendices);
    const coverManualWords = [
        'BookshelfCover as Cover', 'Illustration', 'Messages', 'Participant', 'Participants', 'Period', 'Scheme',
        'Volume', 'Window',
    ];
    const speakers = [...new Set(path.map(message => message.speaker))];
    const participantLines = [
        '<Participants>',
        ...speakers.map(speaker => `    <Participant>${referenceForm(speaker, referents[speaker], '$')}</Participant>`),
        '</Participants>',
    ];
    const openingBlock = path.find(message => message.speaker === 'Doug')?.blocks.find(block => block.type === 'text');
    const openingLine = openingBlock?.type === 'text' ? openingBlock.text.split(/\n/u)[0] : '';
    const summaryText = conversation.summary !== ''
        ? conversation.summary.replace(/\*\*[^*]*\*\*\s*/u, '').split(/\n\n/u)[0] : openingLine;
    const synopsisLines = wrappedLines(written(summaryText.replace(/[*_`#>]/gu, '')));
    const packageWords = ['Author', 'Chapter', 'Paragraph', 'Subject', 'Svg', 'Title'];
    const claudeManualWords = [
        ...(accountName === undefined ? [] : ['Account']),
        'Origin',
        ...(projectNames.length > 0 ? ['Project'] : []),
    ];
    const projectImportLines = [manualImportLine(claudeManualWords, claudeImportPath)];
    const accountKey = `Dougs Claude / ${nameInForm(accountName ?? '')}`;
    const accountLines = accountName === undefined
        ? [] : [`<Account>${referenceForm(written(accountName), accountKey, '$')}</Account>`];
    const drawingSource = join(folders.conversations, drawingFileName);
    const drawingText = existsSync(drawingSource) ? readFileSync(drawingSource, 'utf8') : '';
    const projectLines = projectNames.map(projectName => `<Project>***${titleText(projectBookName(projectName))}</Project>`);
    const tableSections = [...chapterListing(conversationWriting.chapters, naming.name), ...artifactSectionOf(conversationWriting.versions)];
    const tableManualWords = conversationWriting.versions.length === 0 ? ['Index'] : ['Appendix', 'Index'];
    const files = [
        writtenFile(join(folder, '.book.tsx'), bookFileText(claudeImportPath, 'ClaudeConversation', naming.name.key)),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, coverManualWords, packageWords, [
            ...volumeLines(),
            ...schemeLines(scheme),
            ...windowLines(-32, -26),
            ...participantLines,
            '<Period',
            `    from="${path[0]?.sentAt ?? conversation.createdAt}"`,
            `    to="${path.at(-1)?.sentAt ?? conversation.updatedAt}"`,
            '/>',
            '<Messages',
            `    shown="${path.length}"`,
            `    all="${conversation.messages.length}"`,
            '/>',
            titleLine(naming.name),
            authorLine,
            subjectLine('Conversations', 'Our Conversations'),
            ...projectLines,
            ...accountLines,
            `<Origin>${conversation.id}</Origin>`,
            ...illustrationLines,
        ], [...projectImportLines, ...volumeImportLines(folder, folders, folders.conversations)])),
        writtenFile(join(folder, drawingFileName), drawingText),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(synopsisLines)),
        writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, tableManualWords, tableSections)),
        ...[...conversationWriting.chapters, ...conversationWriting.versions]
            .map(chapter => writtenFile(join(folder, chapter.fileName), chapter.tsx)),
    ];
    for (const chapter of conversationWriting.chapters)
        for (const chapterFile of chapter.files)
            files.push(writtenFile(join(folder, chapterFile.name), chapterFile.content));

    return { folder, files, chapterStem: conversationWriting.chapters[0].fileName.replace(/\.tsx$/u, '') };
};

export const registerBook = (
    folders: LibraryFolders,
    folder: string,
    name: string,
    about: string,
    subjectWords: string,
    subjectName: string,
    subjectFolder: string,
    synopsisLines: string[],
    scheme: Scheme,
    bookType: 'Catalogue' | 'Register',
    coverFace: 'BookshelfCover' | 'JournalCover',
    drawingText: string,
    overwrite = false,
): string[] => {
    const importPath = manualImportPath(folders, folder);
    const bookFilePath = join(folder, '.book.tsx');
    const bookFile = (): string => writtenFile(bookFilePath, bookFileText(importPath, bookType, about));
    if (existsSync(bookFilePath)) return overwrite ? [bookFile()] : [];
    const standsSection = sectionLines('Where this book stands', parentheticalLines(plainName(name)));

    return [
        bookFile(),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, [
            `${coverFace} as Cover`, 'Illustration', 'Scheme', 'Volume', 'Window',
        ], drawnCoverPackageWords, [
            ...volumeLines(),
            ...schemeLines(scheme),
            ...windowLines(-32, -26),
            titleLine(plainName(name)),
            authorLine,
            subjectLine(subjectWords, subjectName),
            `<About>${titleForm(nameInForm(about))}</About>`,
            ...illustrationLines,
        ], volumeImportLines(folder, folders, subjectFolder))),
        writtenFile(join(folder, drawingFileName), drawingText),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(synopsisLines)),
        writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, ['Arrow', 'Index'], standsSection)),
    ];
};

export const registerEntry = (
    folders: LibraryFolders,
    folder: string,
    name: BookName,
    bookFolder: string,
    instant: string,
    captionText: string,
    stars: string,
    appendix?: Appendix,
    heading?: string,
): WrittenEntry => {
    const tablePath = join(folder, '.table.tsx');
    const tableText = readFileSync(tablePath, 'utf8');
    if (tableListsBook(tableText, name)) return { entryPath: entryPathFor(folder, name), tablePath, files: [] };
    const importPath = manualImportPath(folders, folder);
    const entryPath = join(folder, `${nextChapterNumber(folder)}-${slugFromName(name.key)}.tsx`);
    const bookRelativePath = relativePath(folder, bookFolder);
    const appendixWords = appendix === undefined ? [] : ['Append'];
    const packageWords = [...appendixWords, 'Chapter', 'Date', 'Means', 'Paragraph', 'Part', 'Synopsis', 'Title'];
    writtenFile(entryPath, entryFileText(importPath, ['Caption', 'Dated', 'Volume'], packageWords, bookRelativePath, [
        `<Part>${monthHeading(instant)}</Part>`,
        '<Dated>',
        `    <Date>${dateReference(instant)}</Date>`,
        '</Dated>',
        '<Volume>{TheCover()}</Volume>',
        titleLine(name),
        '<Paragraph>',
        '    <Caption />',
        ...indentedLines(1, captionLines(captionText, name)),
        '</Paragraph>',
        '<Synopsis>{TheSynopsis()}</Synopsis>',
        ...(appendix === undefined ? [] : appendLines(appendix, 0)),
    ]));
    const insertionPoint = tableText.includes(whereThisBookStandsSection) ? whereThisBookStandsSection : '    </Chapter>';
    writtenFile(tablePath, tableWithRow(tableText, heading ?? monthHeading(instant), rowLines(name, stars), insertionPoint));

    return { entryPath, tablePath, files: [entryPath, tablePath] };
};

export const struckEntry = (folder: string, entryStem: string, name: BookName, stars: string): string[] => {
    const tablePath = join(folder, '.table.tsx');
    const rowText = `${indentedLines(3, rowLines(name, stars)).join('\n')}\n`;
    const tableText = readFileSync(tablePath, 'utf8');
    const emptySection = /^ {8}<Section>\n {12}<Heading>[^<]*<\/Heading>\n {8}<\/Section>\n/gmu;
    writtenFile(tablePath, tableText.replace(rowText, '').replace(emptySection, ''));
    const stem = basename(entryStem);
    for (const fileName of readdirSync(folder))
        if (fileName === `${stem}.tsx` || fileName.startsWith(`${stem}~`)) rmSync(join(folder, fileName));

    return [tablePath];
};

const entryPathFor = (folder: string, name: BookName): string | undefined => {
    const chapterFileNames = readdirSync(folder)
        .filter(fileName => /^o*\d/u.test(fileName) && fileName.endsWith('.tsx') && !fileName.includes('~'));
    const entryFileName = chapterFileNames
        .find(fileName => readFileSync(join(folder, fileName), 'utf8').includes(titleLine(name)));

    return entryFileName === undefined ? undefined : join(folder, entryFileName);
};

export const projectBook = (
    folders: LibraryFolders,
    project: Project,
    scheme: Scheme,
    drawingText: string,
    overwrite = false,
    whole = false,
): WrittenBook => {
    const folder = join(folders.claude, `.${slugFromName(project.name)}`);
    const importPath = manualImportPath(folders, folder);
    const bookFilePath = join(folder, '.book.tsx');
    // A project of mine with Claude is Claude's manual's project manual, Sprint 115: the way on to the application and the trail.
    const bookFile = (): string => writtenFile(bookFilePath, bookFileText(claudeManualImportPath(folders, folder), 'ClaudeProjectManual', project.name));
    if (existsSync(bookFilePath) && !whole) return { folder, files: overwrite ? [bookFile()] : [], chapterStem: '' };
    if (existsSync(folder))
        for (const entry of readdirSync(folder, { withFileTypes: true }))
            if (entry.isFile()) rmSync(join(folder, entry.name));
    const projectDescription = project.description
        || `A project of mine with Claude, ${project.documents.length} knowledge files and the conversations held in it.`;
    const projectImportLines = [
        packageImportLine(['Chapter', 'Heading', 'Paragraph', 'Section', 'Title']),
        manualImportLine(['Brief', 'Spread'], importPath),
    ];
    const documentImportLines = [
        packageImportLine(['Append', 'Chapter', 'Paragraph', 'Title']),
        manualImportLine(['Brief', 'Spread'], importPath),
    ];
    const descriptionText = project.description || 'What this project is, as Claude held it.';
    const instructionsText = project.instructions || 'No instructions were set on this project.';
    const files = [
        bookFile(),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, [
            'Cover', 'Illustration', 'Scheme', 'Volume', 'Window',
        ], drawnCoverPackageWords, [
            ...volumeLines(),
            ...schemeLines(scheme),
            ...windowLines(-32, -26),
            titleLine(projectBookName(project.name)),
            authorLine,
            subjectLine('Claude', 'Dougs Claude'),
            `<About>${titleText(projectBookName(project.name))}</About>`,
            ...illustrationLines,
        ], volumeImportLines(folder, folders, folders.claude))),
        writtenFile(join(folder, drawingFileName), drawingText),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(wrappedLines(written(projectDescription)))),
        writtenFile(join(folder, '1-the-project.tsx'), chapterFileText(projectImportLines, [
            '<Spread />',
            titleLine(plainName('The Project')),
            '<Paragraph>',
            '    <Brief />',
            ...indentedLines(1, wrappedLines(written(descriptionText))),
            '</Paragraph>',
            ...sectionLines('Its instructions', [
                '<Paragraph>',
                ...indentedLines(1, wrappedLines(written(instructionsText))),
                '</Paragraph>',
            ]),
        ])),
    ];
    const chapterNames = ['The Project'];
    const addressesTaken = new Set([project.name, 'The Project', 'Synopsis', 'Table of Contents'].map(name => identifier.slug(name)));
    for (const [documentIndex, document] of project.documents.entries()) {
        const documentBaseName = titleFromName(document.name.split('/').at(-1)!.replace(/\.[^.]+$/u, '')) || 'Untitled';
        let documentTitle = documentBaseName;
        for (let titleCount = 2; addressesTaken.has(identifier.slug(documentTitle)); titleCount++)
            documentTitle = `${documentBaseName} ${titleCount}`;
        addressesTaken.add(identifier.slug(documentTitle));
        const extensionFromName = (/\.([a-z0-9]+)$/iu.exec(document.name)?.[1] ?? '').toLowerCase();
        const documentExtension = resourceExtension(extensionFromName);
        const chapterStem = `${documentIndex + 2}-${slugFromName(documentTitle)}`;
        const briefText = `A knowledge file of the project, “${written(document.name)}”, `
            + 'as it was uploaded to Claude.';
        chapterNames.push(documentTitle);
        files.push(writtenFile(join(folder, `${chapterStem}~file.${documentExtension}`), document.content));
        files.push(writtenFile(join(folder, `${chapterStem}.tsx`), chapterFileText(documentImportLines, [
            '<Spread />',
            titleLine(plainName(documentTitle)),
            '<Paragraph>',
            '    <Brief />',
            ...indentedLines(1, wrappedLines(briefText)),
            '</Paragraph>',
            ...appendLines({ identifier: 'file', type: `.${documentExtension}` }, 0),
        ])));
    }
    const filesSectionLines = [...chapterNames.flatMap(contentLines), ...parentheticalLines(projectBookName(project.name))];
    files.push(writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, ['Arrow', 'Index'], [
        ...sectionLines('The project and its files', filesSectionLines),
        ...sectionLines('Where this book stands', []),
    ])));

    return { folder, files, chapterStem: '' };
};

export const projectEntry = (
    folders: LibraryFolders,
    folder: string,
    name: BookName,
    bookFolder: string,
    instant: string,
): string[] => {
    const tablePath = join(folder, '.table.tsx');
    const tableText = readFileSync(tablePath, 'utf8');
    if (tableListsBook(tableText, name)) return [];
    const importPath = manualImportPath(folders, folder);
    const entryPath = join(folder, `${nextChapterNumber(folder)}-${slugFromName(name.key)}.tsx`);
    const bookRelativePath = relativePath(folder, bookFolder);
    // A project's entry is dated and set under its month as the register's is, so the project's page can lay its
    // conversations by month and its side can list the months; Sprint 113, on Doug's 'That is not navigable'.
    writtenFile(entryPath, entryFileText(importPath, ['Brief', 'Dated', 'Volume'], [...entryPackageWords, 'Date', 'Part'], bookRelativePath, [
        `<Part>${monthHeading(instant)}</Part>`,
        '<Dated>',
        `    <Date>${dateReference(instant)}</Date>`,
        '</Dated>',
        '<Volume>{TheCover()}</Volume>',
        titleLine(name),
        '<Paragraph>',
        '    <Brief />',
        ...indentedLines(1, captionLines(`A conversation held in this project, ${dayWords(instant)}:`, name)),
        '</Paragraph>',
        '<Synopsis>{TheSynopsis()}</Synopsis>',
    ]));
    writtenFile(tablePath, tableWithRow(tableText, monthHeading(instant), rowLines(name, '***'), whereThisBookStandsSection));

    return [entryPath, tablePath];
};

export const libraryEntry = (library: string, bookName: string, bookFolder: string, captionText: string): string[] => {
    const name = plainName(bookName);
    const catalogueFolder = join(library, '..reference');
    const tablePath = join(catalogueFolder, '.table.tsx');
    const tableText = readFileSync(tablePath, 'utf8');
    if (tableListsBook(tableText, name)) return [];
    const entryPath = join(catalogueFolder, `${nextChapterNumber(catalogueFolder)}-${slugFromName(bookName)}.tsx`);
    const bookRelativePath = relativePath(catalogueFolder, bookFolder);
    writtenFile(entryPath, entryFileText('../.manual/.book', ['Caption', 'Volume'], entryPackageWords, bookRelativePath, [
        '<Volume>{TheCover()}</Volume>',
        titleLine(name),
        '<Paragraph>',
        '    <Caption />',
        ...indentedLines(1, captionLines(captionText, name)),
        '</Paragraph>',
        '<Synopsis>{TheSynopsis()}</Synopsis>',
    ]));
    const insertionPoint = '            <Paragraph>\n                <Parenthetical />';
    const rowText = indentedLines(3, rowLines(name, '**')).join('\n');
    writtenFile(tablePath, tableText.replace(insertionPoint, () => `${rowText}\n${insertionPoint}`));

    return [entryPath, tablePath];
};

const writtenFile = (path: string, text: string): string => {
    mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, text, 'utf8');

    return path;
};

const nextChapterNumber = (folder: string): number => {
    const fileNames = existsSync(folder) ? readdirSync(folder) : [];

    return Math.max(0, ...fileNames.map(fileName => Number(/^(\d+)-/u.exec(fileName)?.[1] ?? 0))) + 1;
};

const tableListsBook = (tableText: string, name: BookName): boolean =>
    tableText.includes(`]]( ${nameInForm(name.key)} )`);

const tableWithRow = (tableText: string, heading: string, lines: string[], insertionPoint: string): string => {
    const headingElement = `<Heading>${heading}</Heading>`;
    const rowText = indentedLines(3, lines).join('\n');
    if (tableText.includes(headingElement))
        return orderedTableText(tableText.replace(headingElement, () => `${headingElement}\n${rowText}`));
    const sectionText = `        <Section>\n            ${headingElement}\n${rowText}\n        </Section>\n`;

    return orderedTableText(tableText.replace(insertionPoint, () => `${sectionText}${insertionPoint}`));
};

const sectionForm = /^ {8}<Section>\n {12}<Heading>([^<]*)<\/Heading>\n[\s\S]*?^ {8}<\/Section>\n/gmu;
const isMonthHeading = (heading: string): boolean => !Number.isNaN(Date.parse(heading));

export const orderedTableText = (tableText: string): string => {
    const monthSections = [...tableText.matchAll(sectionForm)].filter(match => isMonthHeading(match[1]));
    const newestFirst = [...monthSections].sort((a, b) => Date.parse(b[1]) - Date.parse(a[1])).map(match => match[0]);
    let monthsPlaced = false;
    const placedSection = (section: string, heading: string): string => {
        if (!isMonthHeading(heading)) return section;
        if (monthsPlaced) return '';
        monthsPlaced = true;

        return newestFirst.join('');
    };

    return tableText.replace(sectionForm, placedSection);
};

// THE REGISTER'S PARTS IN THE ORDER GIVEN, newest first by their latest conversation with the unfiled last, where
// the sections are headed by a project and not by a month; Sprint 114 set Our Conversations by its parts.
const partsOrdered = (tableText: string, partsNewestFirst: string[]): string => {
    const parts = new Map([...tableText.matchAll(sectionForm)]
        .filter(match => !isMonthHeading(match[1]) && partsNewestFirst.includes(match[1]))
        .map(match => [match[1], match[0]] as const));
    if (parts.size === 0) return tableText;
    const ordered = partsNewestFirst.filter(heading => parts.has(heading)).map(heading => parts.get(heading)!).join('');
    let placed = false;
    const placedSection = (section: string, heading: string): string => {
        if (!parts.has(heading)) return section;
        if (placed) return '';
        placed = true;

        return ordered;
    };

    return tableText.replace(sectionForm, placedSection);
};

export const orderRegisterTable = (folder: string, partsNewestFirst: string[] = []): string[] => {
    const tablePath = join(folder, '.table.tsx');
    if (!existsSync(tablePath)) return [];
    const tableText = readFileSync(tablePath, 'utf8');
    const ordered = partsOrdered(orderedTableText(tableText), partsNewestFirst);

    return ordered === tableText ? [] : [writtenFile(tablePath, ordered)];
};

const chapterFileText = (importLines: string[], lines: string[]): string => [
    ...importLines,
    '',
    'export default () => (',
    '    <Chapter>',
    ...indentedLines(2, lines),
    '    </Chapter>',
    ');',
    '',
].join('\n');

const bookFileText = (importPath: string, baseName: string, name: string): string => [
    `import { $${baseName} } from '${importPath}';`,
    '',
    `export default class ${bookClassName(name)} extends $${baseName} { }`,
    '',
].join('\n');

const coverFileText = (
    importPath: string,
    manualWords: string[],
    packageWords: string[],
    lines: string[],
    moreImportLines: string[] = [],
): string => chapterFileText(
    [packageImportLine(packageWords), manualImportLine(manualWords, importPath), ...moreImportLines],
    ['<Cover />', ...lines],
);

const synopsisFileText = (synopsisLines: string[]): string => chapterFileText(
    [packageImportLine(['Chapter', 'Paragraph', 'Parenthetical', 'Synopsis', 'Title'])],
    [
        '<Synopsis />',
        '<Title>',
        '    <Parenthetical />',
        `    ${titleForm('Synopsis')}`,
        '</Title>',
        '<Paragraph>',
        ...indentedLines(1, synopsisLines),
        '</Paragraph>',
    ],
);

const tableFileText = (importPath: string, manualWords: string[], sectionsLines: string[]): string => chapterFileText(
    [packageImportLine(tablePackageWords), manualImportLine(manualWords, importPath)],
    [
        '<TableOfContents />',
        '<Index />',
        '<Title>',
        '    <Parenthetical />',
        `    ${titleForm('Table of Contents')}`,
        '</Title>',
        ...sectionsLines,
    ],
);

const entryFileText = (
    importPath: string,
    manualWords: string[],
    packageWords: string[],
    bookRelativePath: string,
    lines: string[],
): string => chapterFileText(
    [
        packageImportLine(packageWords),
        manualImportLine(manualWords, importPath),
        `import TheCover from '${bookRelativePath}/.cover.tsx';`,
        `import TheSynopsis from '${bookRelativePath}/.synopsis.tsx';`,
    ],
    lines,
);

const schemeLines = (scheme: Scheme): string[] =>
    ['<Scheme', ...indentedLines(1, Object.entries(scheme).map(([field, value]) => `${field}="${value}"`)), '/>'];

const sectionLines = (heading: string, lines: string[]): string[] =>
    ['<Section>', `    <Heading>${heading}</Heading>`, ...indentedLines(1, lines), '</Section>'];

// The conversation's one chapter listed in no section, so the binder finds it listed and the index lists nothing,
// the book's own line after it; an artifact's versions in an appendix section of parenthetical entries, which the
// index does not list and the side does not show. Doug, 2026-10-21: "Not everything has to be displayed."
const chapterListing = (chapters: WrittenChapter[], bookName: BookName): string[] =>
    [...chapters.flatMap(chapter => contentLines(chapter.title)), ...parentheticalLines(bookName)];

const artifactSectionOf = (versions: WrittenChapter[]): string[] => versions.length === 0 ? [] : [
    '<Section>',
    '    <Appendix />',
    '    <Heading>Artifacts</Heading>',
    ...indentedLines(1, versions.flatMap(version => [
        '<Paragraph>',
        '    <Parenthetical />',
        `    <Content>${mentionForm(`./${nameInForm(version.title)}`)}</Content>`,
        '</Paragraph>',
    ])),
    '</Section>',
];


const contentLines = (name: string): string[] =>
    ['<Paragraph>', `    <Content>${mentionForm(`./${nameInForm(name)}`)}</Content>`, '</Paragraph>'];

const parentheticalLines = (name: BookName): string[] => [
    '<Paragraph>',
    '    <Parenthetical />',
    '    <Word>',
    `        <Content>${mentionText(name)}</Content>`,
    '    </Word>',
    '    <Word>',
    `        <Content>${mentionForm('./Synopsis')}</Content>`,
    '    </Word>',
    '    <Word>',
    `        <Content>${mentionForm('./Table of Contents')}</Content>`,
    '    </Word>',
    '</Paragraph>',
];

const rowLines = (name: BookName, stars: string): string[] => [
    '<Paragraph>',
    '    <Word>',
    `        <Content>${mentionText(name, true)}</Content>`,
    '    </Word>',
    '    <Word>',
    '        <Arrow />',
    `        <Content>${referenceForm('▷', nameInForm(name.key))}${stars}</Content>`,
    '    </Word>',
    '</Paragraph>',
];
