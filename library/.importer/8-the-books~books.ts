import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { Conversation, Message, Project } from './3-the-record~record.ts';
import {
    appendLines, escapedText, knownExtensions, mentionForm, notationName, referenceForm, slugFromName, titleForm,
    writtenChapter, type Appendix, type Referents,
} from './7-the-writing~writing.ts';

export type LibraryFolders = { library: string; claude: string; conversations: string };
export type Scheme = { ground: string; band: string; bandInk: string; foot: string; footInk: string; ink: string };
export type WrittenBook = { folder: string; files: string[] };
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
const nameInForm = (name: string): string => notationName(escapedText(name));
const captionLines = (captionText: string, name: string): string[] => {
    const lines = wrappedLines(captionText);
    lines[lines.length - 1] += ` <Means>${mentionForm(nameInForm(name))}</Means>.`;

    return lines;
};
const titleLine = (name: string): string => `<Title>${titleForm(nameInForm(name))}</Title>`;
const tablePackageWords = [
    'Chapter', 'Content', 'Heading', 'Paragraph', 'Parenthetical', 'Section', 'TableOfContents', 'Title', 'Word',
];
const coverPackageWords = ['About', 'Author', 'Chapter', 'Cover', 'Subject', 'Title'];
const entryPackageWords = ['Chapter', 'Means', 'Paragraph', 'Synopsis', 'Title'];
const dateFormat = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } as const;
const monthFormat = { month: 'long', year: 'numeric', timeZone: 'UTC' } as const;

const indentation = (depth: number): string => '    '.repeat(depth);
const indentedLines = (depth: number, lines: string[]): string[] => lines.map(line => indentation(depth) + line);
const relativePath = (fromFolder: string, toFolder: string): string => {
    const path = relative(fromFolder, toFolder).split('\\').join('/');

    return path.startsWith('.') ? path : `./${path}`;
};
const manualImportPath = (folders: LibraryFolders, folder: string): string =>
    `${relativePath(folder, join(folders.library, '.manual'))}/.book`;
const packageImportLine = (packageWords: string[]): string =>
    `import { ${packageWords.join(', ')} } from '@dna-platform/public';`;
const manualImportLine = (manualWords: string[], importPath: string): string =>
    `import { ${manualWords.join(', ')} } from '${importPath}';`;
const monthHeading = (instant: string): string => new Date(instant).toLocaleString('en-GB', monthFormat);
const dayWords = (instant: string): string => new Date(instant).toLocaleDateString('en-GB', dateFormat);
const dateReference = (instant: string): string => `[${dayWords(instant)}](${instant.slice(0, 10)})`;
const bookClassName = (name: string): string => {
    const capitalized = slugFromName(name).replace(/(^|-)(\p{L}|\p{N})/gu, (_, __, letter: string) => letter.toUpperCase());

    return `$${capitalized.replace(/[^\p{L}\p{N}]/gu, '')}`;
};

export const uniqueBookName = (folder: string, name: string, namesTaken: Set<string>): string => {
    const baseName = name === '' ? 'Untitled' : name;
    for (let nameCount = 1; ; nameCount++) {
        const candidateName = nameCount === 1 ? baseName : `${baseName} ${nameCount}`;
        const candidateSlug = slugFromName(candidateName);
        if (existsSync(join(folder, candidateSlug)) || namesTaken.has(candidateSlug)) continue;
        namesTaken.add(candidateSlug);

        return candidateName;
    }
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
    name: string,
    projectNames: string[],
    scheme: Scheme,
    referents: Referents,
): WrittenBook => {
    const folder = join(folders.conversations, slugFromName(name));
    const importPath = manualImportPath(folders, folder);
    const chapter = writtenChapter(conversation, path, referents, importPath);
    const openingBlock = path.find(message => message.speaker === 'Doug')?.blocks.find(block => block.type === 'text');
    const openingLine = openingBlock?.type === 'text' ? openingBlock.text.split(/\n/u)[0] : '';
    const summaryText = conversation.summary !== ''
        ? conversation.summary.replace(/\*\*[^*]*\*\*\s*/u, '').split(/\n\n/u)[0] : openingLine;
    const synopsisLines = wrappedLines(escapedText(summaryText.replace(/[*_`#>]/gu, '')));
    const projectWords = projectNames.length > 0 ? ['Means', 'Paragraph'] : [];
    const packageWords = ['Author', 'Chapter', 'Cover', ...projectWords, 'Subject', 'Title'];
    const projectLines = projectNames.flatMap(projectName => [
        '<Paragraph>',
        `    <Means>***${titleForm(nameInForm(projectName))}</Means>`,
        '</Paragraph>',
    ]);
    const monthSection = sectionLines(
        monthHeading(path[0]?.sentAt ?? conversation.createdAt),
        [...contentLines(chapter.title), ...parentheticalLines(name)],
    );
    const files = [
        writtenFile(join(folder, '.book.tsx'), bookFileText(importPath, 'Conversation', name)),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, ['Messages', 'Period', 'Scheme'], packageWords, [
            ...schemeLines(scheme),
            '<Period',
            `    from="${path[0]?.sentAt ?? conversation.createdAt}"`,
            `    to="${path.at(-1)?.sentAt ?? conversation.updatedAt}"`,
            '/>',
            '<Messages',
            `    shown="${path.length}"`,
            `    all="${conversation.messages.length}"`,
            '/>',
            titleLine(name),
            authorLine,
            subjectLine('Conversations', 'Our Conversations'),
            ...projectLines,
        ])),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(synopsisLines)),
        writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, ['Index'], monthSection)),
        writtenFile(join(folder, chapter.fileName), chapter.tsx),
    ];
    for (const chapterFile of chapter.files)
        files.push(writtenFile(join(folder, chapterFile.name), chapterFile.content));

    return { folder, files };
};

export const registerBook = (
    folders: LibraryFolders,
    folder: string,
    name: string,
    about: string,
    subjectWords: string,
    subjectName: string,
    synopsisLines: string[],
    scheme: Scheme,
): string[] => {
    if (existsSync(join(folder, '.book.tsx'))) return [];
    const importPath = manualImportPath(folders, folder);
    const standsSection = sectionLines('Where this book stands', parentheticalLines(name));

    return [
        writtenFile(join(folder, '.book.tsx'), bookFileText(importPath, 'Register', about)),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, ['Scheme'], coverPackageWords, [
            ...schemeLines(scheme),
            titleLine(name),
            authorLine,
            subjectLine(subjectWords, subjectName),
            `<About>${titleForm(nameInForm(about))}</About>`,
        ])),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(synopsisLines)),
        writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, ['Arrow', 'Index'], standsSection)),
    ];
};

export const registerEntry = (
    folders: LibraryFolders,
    folder: string,
    name: string,
    bookFolder: string,
    instant: string,
    captionText: string,
    stars: string,
    appendix?: Appendix,
): WrittenEntry => {
    const tablePath = join(folder, '.table.tsx');
    const tableText = readFileSync(tablePath, 'utf8');
    if (tableListsBook(tableText, name)) return { entryPath: entryPathFor(folder, name), tablePath, files: [] };
    const importPath = manualImportPath(folders, folder);
    const entryPath = join(folder, `${nextChapterNumber(folder)}-${slugFromName(name)}.tsx`);
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
    writtenFile(tablePath, tableWithRow(tableText, monthHeading(instant), rowLines(name, stars), insertionPoint));

    return { entryPath, tablePath, files: [entryPath, tablePath] };
};

const entryPathFor = (folder: string, name: string): string | undefined => {
    const chapterFileNames = readdirSync(folder)
        .filter(fileName => /^o*\d/u.test(fileName) && fileName.endsWith('.tsx') && !fileName.includes('~'));
    const entryFileName = chapterFileNames
        .find(fileName => readFileSync(join(folder, fileName), 'utf8').includes(titleLine(name)));

    return entryFileName === undefined ? undefined : join(folder, entryFileName);
};

export const projectBook = (folders: LibraryFolders, project: Project, scheme: Scheme): WrittenBook => {
    const folder = join(folders.claude, slugFromName(project.name));
    if (existsSync(join(folder, '.book.tsx'))) return { folder, files: [] };
    const importPath = manualImportPath(folders, folder);
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
        writtenFile(join(folder, '.book.tsx'), bookFileText(importPath, 'Project', project.name)),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, ['Scheme'], coverPackageWords, [
            ...schemeLines(scheme),
            titleLine(project.name),
            authorLine,
            subjectLine('Claude', 'Dougs Claude'),
            `<About>${titleForm(nameInForm(project.name))}</About>`,
        ])),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(wrappedLines(escapedText(projectDescription)))),
        writtenFile(join(folder, '1-the-project.tsx'), chapterFileText(projectImportLines, [
            '<Spread />',
            titleLine('The Project'),
            '<Paragraph>',
            '    <Brief />',
            ...indentedLines(1, wrappedLines(escapedText(descriptionText))),
            '</Paragraph>',
            ...sectionLines('Its instructions', [
                '<Paragraph>',
                ...indentedLines(1, wrappedLines(escapedText(instructionsText))),
                '</Paragraph>',
            ]),
        ])),
    ];
    const chapterNames = ['The Project'];
    const baseNameCounts = new Map<string, number>();
    for (const [documentIndex, document] of project.documents.entries()) {
        const documentBaseName = document.name.split('/').at(-1)!.replace(/\.[^.]+$/u, '');
        const baseNameCount = (baseNameCounts.get(slugFromName(documentBaseName)) ?? 0) + 1;
        baseNameCounts.set(slugFromName(documentBaseName), baseNameCount);
        const documentTitle = baseNameCount === 1 ? documentBaseName : `${documentBaseName} ${baseNameCount}`;
        const extensionFromName = (/\.([a-z0-9]+)$/iu.exec(document.name)?.[1] ?? '').toLowerCase();
        const documentExtension = knownExtensions.includes(extensionFromName) ? extensionFromName : 'txt';
        const chapterStem = `${documentIndex + 2}-${slugFromName(documentTitle)}`;
        const briefText = `A knowledge file of the project, “${escapedText(document.name)}”, `
            + 'as it was uploaded to Claude.';
        chapterNames.push(documentTitle);
        files.push(writtenFile(join(folder, `${chapterStem}~file.${documentExtension}`), document.content));
        files.push(writtenFile(join(folder, `${chapterStem}.tsx`), chapterFileText(documentImportLines, [
            '<Spread />',
            titleLine(documentTitle),
            '<Paragraph>',
            '    <Brief />',
            ...indentedLines(1, wrappedLines(briefText)),
            '</Paragraph>',
            ...appendLines({ identifier: 'file', type: `.${documentExtension}` }, 0),
        ])));
    }
    const filesSectionLines = [...chapterNames.flatMap(contentLines), ...parentheticalLines(project.name)];
    files.push(writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, ['Arrow', 'Index'], [
        ...sectionLines('The project and its files', filesSectionLines),
        ...sectionLines('Where this book stands', []),
    ])));

    return { folder, files };
};

export const projectEntry = (
    folders: LibraryFolders,
    folder: string,
    name: string,
    bookFolder: string,
    instant: string,
): string[] => {
    const tablePath = join(folder, '.table.tsx');
    const tableText = readFileSync(tablePath, 'utf8');
    if (tableListsBook(tableText, name)) return [];
    const importPath = manualImportPath(folders, folder);
    const entryPath = join(folder, `${nextChapterNumber(folder)}-${slugFromName(name)}.tsx`);
    const bookRelativePath = relativePath(folder, bookFolder);
    writtenFile(entryPath, entryFileText(importPath, ['Brief', 'Volume'], entryPackageWords, bookRelativePath, [
        '<Volume>{TheCover()}</Volume>',
        titleLine(name),
        '<Paragraph>',
        '    <Brief />',
        ...indentedLines(1, captionLines(`A conversation held in this project, ${dayWords(instant)}:`, name)),
        '</Paragraph>',
        '<Synopsis>{TheSynopsis()}</Synopsis>',
    ]));
    writtenFile(tablePath, tableWithRow(tableText, 'Conversations', rowLines(name, '***'), whereThisBookStandsSection));

    return [entryPath, tablePath];
};

export const libraryEntry = (library: string, name: string, bookFolder: string, captionText: string): string[] => {
    const catalogueFolder = join(library, '..reference');
    const tablePath = join(catalogueFolder, '.table.tsx');
    const tableText = readFileSync(tablePath, 'utf8');
    if (tableListsBook(tableText, name)) return [];
    const entryPath = join(catalogueFolder, `${nextChapterNumber(catalogueFolder)}-${slugFromName(name)}.tsx`);
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

const tableListsBook = (tableText: string, name: string): boolean =>
    tableText.includes(mentionForm(`./${nameInForm(name)}`));

const tableWithRow = (tableText: string, heading: string, lines: string[], insertionPoint: string): string => {
    const headingElement = `<Heading>${heading}</Heading>`;
    const rowText = indentedLines(3, lines).join('\n');
    if (tableText.includes(headingElement)) return tableText.replace(headingElement, () => `${headingElement}\n${rowText}`);
    const sectionText = `        <Section>\n            ${headingElement}\n${rowText}\n        </Section>\n`;

    return tableText.replace(insertionPoint, () => `${sectionText}${insertionPoint}`);
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

const coverFileText = (importPath: string, manualWords: string[], packageWords: string[], lines: string[]): string =>
    chapterFileText([packageImportLine(packageWords), manualImportLine(manualWords, importPath)], ['<Cover />', ...lines]);

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

const contentLines = (name: string): string[] =>
    ['<Paragraph>', `    <Content>${mentionForm(`./${nameInForm(name)}`)}</Content>`, '</Paragraph>'];

const parentheticalLines = (name: string): string[] => [
    '<Paragraph>',
    '    <Parenthetical />',
    '    <Word>',
    `        <Content>${mentionForm(nameInForm(name))}</Content>`,
    '    </Word>',
    '    <Word>',
    `        <Content>${mentionForm('./Synopsis')}</Content>`,
    '    </Word>',
    '    <Word>',
    `        <Content>${mentionForm('./Table of Contents')}</Content>`,
    '    </Word>',
    '</Paragraph>',
];

const rowLines = (name: string, stars: string): string[] => [
    '<Paragraph>',
    '    <Word>',
    `        <Content>${mentionForm(`./${nameInForm(name)}`)}</Content>`,
    '    </Word>',
    '    <Word>',
    '        <Arrow />',
    `        <Content>${referenceForm('▷', nameInForm(name))}${stars}</Content>`,
    '    </Word>',
    '</Paragraph>',
];
