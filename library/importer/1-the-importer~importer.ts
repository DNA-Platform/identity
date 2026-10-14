import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exportSource } from './3-the-record~claude.ts';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';
import { conversationPairings, type Exclusions, type Pairing } from './4-the-pairing~pairing.ts';
import {
    folderContents, hasGrown, importRecord, importRecords, importState, keptEdits, keptEditsStanding, keptEditsStruck,
    recordIdentifier, recordSuffix, standingKeptEdits, tendStruckEdits, writeImportRecord, type HeldRecord, type Reimport,
} from './5-the-ledger~ledger.ts';
import { asideCount, pathDays, shownPath } from './6-the-thread~thread.ts';
import { slugFromName, titleFromName, writtenChapter, type Referents } from './7-the-writing~writing.ts';
import {
    conversationBook, libraryEntry, orderRegisterTable, projectBook, projectEntry, registerBook, registerEntry, schemes,
    uniqueBookName, wrappedLines, type LibraryFolders, type Scheme,
} from './8-the-books~books.ts';
import {
    archiveFiling, archiveStatistics, archiveTranscripts, countDifferences, differenceLines, filingDifferences,
    transcriptDifferences, writtenDifferences, type ExportCounts,
} from './9-the-check~check.ts';

const importerFolder = dirname(fileURLToPath(import.meta.url));
export const accountFolder = resolve(importerFolder, '..', '..', '..', 'dna-library', 'library', 'claude-dna');
export const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };

const dougsClaudeSynopsis = 'My projects with Claude and all of my conversations with him, catalogued here: '
    + 'every conversation is filed under the book that holds them all, '
    + 'and every project is a book that catalogues its own besides.';
const ourConversationsSynopsis = 'Every conversation I have had with Claude, each a book of its own filed here, '
    + 'listed newest first; the projects catalogue them again by what they were about.';
const dougsClaudeCaption = 'My conversations with Claude and the projects they were held in:';
const ourConversationsCaption = 'All of them, newest first:';
const projectCaption = 'A project of mine, and the conversations held in it:';
const noMappingWords = '  no mapping captured off the application; every conversation will be unpaired';
const recordAppendix = { identifier: recordIdentifier, type: '.json' };

export type Configuration = { excluded: Exclusions; collections: Record<string, string[]> };
export type Selection = { projectName: string | undefined; collectionName: string | undefined; onlyNames: string[] };
type ConversationOf = (pairing: Pairing) => Conversation;

export type Arguments = Selection & {
    intoFolder: string | undefined;
    library: string;
    write: boolean;
    overwrite: boolean;
    reimport: boolean;
};

type ExportReading = {
    exportedOn: string;
    projects: Project[];
    mapping: Mapping | undefined;
    conversations: Conversation[];
    counts: ExportCounts;
};

export const parsedArguments = (argv: string[]): Arguments => ({
    projectName: flagValue(argv, '--project'),
    collectionName: flagValue(argv, '--collection'),
    onlyNames: flagValues(argv, '--only'),
    intoFolder: flagValue(argv, '--into'),
    library: flagValue(argv, '--library') ?? resolve(importerFolder, '..'),
    write: argv.includes('--write'),
    overwrite: argv.includes('--overwrite'),
    reimport: argv.includes('--reimport'),
});

export const configurationPath = (library: string): string =>
    join(library, 'importer', '1-the-importer~configuration.json');

export const configurationFrom = (text: string): Configuration => {
    const read = JSON.parse(text) as Partial<Configuration>;

    return {
        excluded: { scripts: read.excluded?.scripts ?? [], projects: read.excluded?.projects ?? [] },
        collections: read.collections ?? {},
    };
};

export const readConfiguration = (library: string): Configuration => {
    const path = configurationPath(library);

    return configurationFrom(existsSync(path) ? readFileSync(path, 'utf8') : '{}');
};

export const selectedPairings = (
    pairings: Pairing[],
    selection: Selection,
    collections: Record<string, string[]>,
): Pairing[] => {
    const named = (names: string[]) => (pairing: Pairing): boolean =>
        names.includes(pairing.title) || names.includes(pairing.conversationId);
    const narrowed = (candidates: Pairing[]): Pairing[] =>
        selection.onlyNames.length === 0 ? candidates : candidates.filter(named(selection.onlyNames));
    if (selection.projectName !== undefined)
        return narrowed(pairings.filter(pairing => pairing.projectName === selection.projectName));
    if (selection.collectionName !== undefined) {
        const collection = collections[selection.collectionName];
        if (collection === undefined)
            throw new Error(`the configuration names no collection called ${selection.collectionName}`);
        return narrowed(pairings.filter(named(collection)));
    }

    return narrowed(selection.onlyNames.length === 0 ? [] : pairings);
};

export const run = async (args: Arguments): Promise<void> => {
    const configuration = readConfiguration(args.library);
    const reading = await exportReading();
    const pairings = conversationPairings(
        args.library, reading.conversations, reading.projects, reading.mapping, configuration.excluded,
    );
    console.log(pairingReport(pairings));
    const conversationOfPairing: ConversationOf = pairing =>
        reading.conversations.find(conversation => conversation.id === pairing.conversationId)!;
    const folders: LibraryFolders = {
        library: args.library,
        claude: join(args.library, '.claude'),
        claudeManual: join(args.library, '.claude', '.manual'),
        conversations: join(args.library, '.claude', '.conversations'),
    };
    const heldRecords = importRecords(folders.conversations);
    if (args.write) {
        const tended = [...heldRecords.values()].flatMap(heldRecord => tendStruckEdits(folders.conversations, heldRecord));
        if (tended.length > 0) console.log(`tended ${countedNoun(tended.length, 'file')} after kept copies were struck`);
    }
    const selected = selectedPairings(pairings, args, configuration.collections);
    if (selected.length === 0) {
        listHeldConversations(reading, heldRecords, folders);
        console.log('\nnothing selected — pass --project, --collection or --only');
        return;
    }
    listSelectedConversations(selectionWords(args), selected, conversationOfPairing, folders, heldRecords);
    const included = selected.filter(pairing => !pairing.excluded);
    const includedConversations = included.map(conversationOfPairing);
    const wholeProject = args.projectName !== undefined && args.onlyNames.length === 0;
    console.log(archiveCheckReport(included, reading, conversationOfPairing, wholeProject));
    console.log(differenceLines('written back against the export', writtenDifferences(
        includedConversations, heldRecords, folders.conversations,
    )).join('\n'));
    if (args.intoFolder !== undefined) {
        for (const conversation of includedConversations)
            writeChapterIntoFolder(args.intoFolder, conversation);
        return;
    }
    if (!args.write) {
        console.log('\nnothing written — pass --write');
        return;
    }
    writeBooks(args, folders, reading, included, conversationOfPairing, heldRecords);
};

const exportReading = async (): Promise<ExportReading> => {
    const started = Date.now();
    const source = exportSource(accountFolder);
    console.log(`reading ${source.name}`);
    const projects = source.projects();
    const documentCount = projects.reduce((total, project) => total + project.documents.length, 0);
    const namedProjectCount = projects.filter(project => project.name !== '').length;
    const memoryFileCount = source.memories().length;
    console.log(`  ${countedNoun(projects.length, 'project')}, ${namedProjectCount} named, `
        + `${countedNoun(documentCount, 'document')}, ${countedNoun(memoryFileCount, 'memory file')}`);
    const mapping = source.mapping();
    console.log(mapping === undefined ? noMappingWords : mappingReport(mapping));
    const conversations: Conversation[] = [];
    const blockCounts = new Map<string, number>();
    for await (const conversation of source.conversations()) {
        conversations.push(conversation);
        for (const message of conversation.messages)
            for (const block of message.blocks)
                blockCounts.set(block.type, (blockCounts.get(block.type) ?? 0) + 1);
    }
    const messageCount = conversations.reduce((total, conversation) => total + conversation.messages.length, 0);
    const blockCountWords = [...blockCounts.entries()].map(([blockType, count]) => `${count} ${blockType}`).join(', ');
    console.log(`  ${countedNoun(conversations.length, 'conversation')}, ${countedNoun(messageCount, 'message')}: `
        + blockCountWords);
    console.log(`read in ${elapsedSeconds(started)}`);
    const counts: ExportCounts = {
        conversationCount: conversations.length,
        messageCount,
        projectCount: projects.length,
        documentCount,
        contentfulCount: conversations.filter(conversation => conversation.messages.length > 0).length,
    };

    return { exportedOn: source.exportedOn, projects, mapping, conversations, counts };
};

const archiveCheckReport = (
    included: Pairing[],
    reading: ExportReading,
    conversationOfPairing: ConversationOf,
    wholeProject: boolean,
): string => {
    const statisticsPath = join(accountFolder, '.statistics.md');
    if (!existsSync(statisticsPath)) return '\nno archive to check against';
    const statistics = archiveStatistics(readFileSync(statisticsPath, 'utf8'));
    const transcripts = archiveTranscripts(accountFolder);
    const projectNames = [...new Set(included.map(pairing => pairing.projectName))]
        .filter((name): name is string => name !== undefined);
    const filingOfProject = (projectName: string): string[] => {
        const filedNames = archiveFiling(accountFolder, projectName);
        const ours = included.filter(pairing => pairing.projectName === projectName).map(conversationOfPairing);
        if (filedNames === undefined) return [`filing of ${projectName}: the archive has no project of that name`];

        return differenceLines(`filing of ${projectName}`, filingDifferences(ours, filedNames, transcripts));
    };
    const filingLines = wholeProject
        ? projectNames.flatMap(filingOfProject) : ['filing: checked when a project is run whole'];

    return [
        '',
        `checked against the archive, ${countedNoun(transcripts.size, 'transcript')}`,
        ...differenceLines('counts', countDifferences(reading.counts, statistics)),
        ...filingLines,
        ...differenceLines('messages', transcriptDifferences(included.map(conversationOfPairing), transcripts)),
    ].join('\n');
};

const selectionWords = (selection: Selection): string => {
    if (selection.projectName !== undefined) return selection.projectName;
    if (selection.collectionName !== undefined) return `the collection ${selection.collectionName}`;

    return 'named';
};

const mappingReport = (mapping: Mapping): string => {
    const filedCount = mapping.projects.reduce((total, mappedProject) => total + mappedProject.conversations.length, 0);

    return `  the mapping of ${mapping.capturedAt.slice(0, 10)}: ${countedNoun(mapping.projects.length, 'project')}, `
        + `${countedNoun(filedCount, 'conversation')} filed`;
};

const pairingReport = (pairings: Pairing[]): string => {
    const pairingCount = (test: (pairing: Pairing) => boolean): number => pairings.filter(test).length;

    return [
        `paired ${pairingCount(pairing => pairing.projectName !== undefined && !pairing.excluded)}`,
        `unpaired ${pairingCount(pairing => pairing.projectName === undefined && !pairing.excluded)}`,
        `ambiguous ${pairingCount(pairing => pairing.evidence.startsWith('ambiguous'))}`,
        `excluded ${pairingCount(pairing => pairing.excluded)}`,
        `by hand ${pairingCount(pairing => pairing.byHand)}`,
    ].join(' · ');
};

const importedWords = (heldRecord: HeldRecord | undefined, registerFolder: string, conversation?: Conversation): string => {
    if (heldRecord === undefined) return '';
    const { importedAt, exportedOn, reimportedAt } = heldRecord.record;
    const grownSince = conversation !== undefined && hasGrown(conversation, heldRecord.record);
    const grownWords = grownSince ? ', grown since: re-import it with --reimport and re-apply what you edited' : '';
    const waiting = keptEditsStanding(registerFolder, heldRecord.record);
    const struck = keptEditsStruck(registerFolder, heldRecord.record);
    const reimportedWords = reimportedAt === undefined ? '' : `, re-imported ${reimportedAt.slice(0, 10)}`;
    const waitingWords = waiting.length === 0 ? '' : `, ${countedNoun(waiting.length, 'file')} of your edits to apply`;
    const struckWords = struck.length === 0
        ? '' : `, ${countedNoun(struck.length, 'kept copy')} struck: a run that writes tends the chapter`;
    const whenWords = `imported ${importedAt.slice(0, 10)} from the export of ${exportedOn}`;

    return ` · ${whenWords}${reimportedWords}${waitingWords}${struckWords}${grownWords}`;
};

const listSelectedConversations = (
    heading: string,
    selected: Pairing[],
    conversationOfPairing: ConversationOf,
    folders: LibraryFolders,
    heldRecords: Map<string, HeldRecord>,
): void => {
    const included = selected.filter(pairing => !pairing.excluded);
    const byHandCount = included.filter(pairing => pairing.byHand).length;
    const byHandWords = byHandCount > 0 ? `, ${byHandCount} by hand` : '';
    console.log(`\n${heading}: ${countedNoun(included.length, 'conversation')}${byHandWords}`);
    for (const pairing of included) {
        const conversation = conversationOfPairing(pairing);
        const path = shownPath(conversation);
        const heldRecord = heldRecords.get(conversation.id);
        const stateWord = importState(conversation, folders.conversations, heldRecord?.record).padEnd(6);
        const shownWords = `${path.length} shown of ${conversation.messages.length}`;
        const countWords = `${shownWords}, ${asideCount(conversation, path)} aside`;
        const dayWords = countedNoun(pathDays(path).length, 'day');
        const nameWords = conversation.name || 'Untitled';
        const projectWords = pairing.projectName ?? 'no project';
        const edited = heldRecord !== undefined && stateWord.trim() === 'edited';
        const whenWords = importedWords(heldRecord, folders.conversations, edited ? conversation : undefined);
        const evidenceWords = `${projectWords} · ${pairing.evidence}${whenWords}`;
        console.log(`  ${stateWord} ${nameWords} · ${countWords} · ${dayWords} · ${evidenceWords}`);
    }
    for (const pairing of selected.filter(pairing => pairing.excluded))
        console.log(`  out    ${pairing.title} · ${pairing.reason}`);
};

const listHeldConversations = (
    reading: ExportReading,
    heldRecords: Map<string, HeldRecord>,
    folders: LibraryFolders,
): void => {
    console.log(`\nin the library: ${countedNoun(heldRecords.size, 'conversation')}`);
    const newestFirst = [...heldRecords.values()]
        .sort((first, second) => second.record.importedAt.localeCompare(first.record.importedAt));
    for (const heldRecord of newestFirst) {
        const conversation = reading.conversations.find(candidate => candidate.id === heldRecord.record.conversationId);
        const stateWord = conversation === undefined
            ? 'gone  ' : importState(conversation, folders.conversations, heldRecord.record).padEnd(6);
        console.log(`  ${stateWord} ${heldRecord.record.name}${importedWords(heldRecord, folders.conversations)}`);
    }
};

const writeChapterIntoFolder = (intoFolder: string, conversation: Conversation): void => {
    const manualImportPath = '../.manual/.book';
    const claudeManualImportPath = '../.claude/.manual/.book';
    const path = shownPath(conversation);
    const chapter = writtenChapter(conversation, path, referents, manualImportPath, claudeManualImportPath);
    const folder = join(intoFolder, slugFromName(conversation.name));
    mkdirSync(folder, { recursive: true });
    writeFileSync(join(folder, chapter.fileName), chapter.tsx, 'utf8');
    for (const chapterFile of chapter.files)
        writeFileSync(join(folder, chapterFile.name), chapterFile.content, 'utf8');
    const fileWords = countedNoun(chapter.files.length, 'file');
    const thinkingWords = countedNoun(chapter.thinkingCount, 'thinking block');
    const resultWords = countedNoun(chapter.resultCount, 'result');
    const reportWords = `${fileWords} beside it, ${thinkingWords} and ${resultWords} left out`;
    console.log(`\nwrote ${join(folder, chapter.fileName)} with ${reportWords}`);
};

type WrittenProject = { project: Project | undefined; folder: string | undefined; scheme: Scheme; files: string[] };

const writtenProject = (
    args: Arguments,
    folders: LibraryFolders,
    reading: ExportReading,
    projectName: string | undefined,
): WrittenProject => {
    const project = projectName === undefined ? undefined : reading.projects.find(one => one.name === projectName);
    if (projectName !== undefined && project === undefined) throw new Error(`no project named ${projectName} in the export`);
    const namedProjects = reading.projects.filter(candidate => candidate.name !== '');
    const schemeIndex = project === undefined ? 0 : namedProjects.findIndex(candidate => candidate.id === project.id) + 1;
    const scheme = schemes[schemeIndex % schemes.length];
    if (project === undefined) return { project, folder: undefined, scheme, files: [] };
    const book = projectBook(folders, project, scheme, args.overwrite);
    const entry = registerEntry(folders, folders.claude, project.name, book.folder, project.updatedAt, projectCaption, '**');

    return { project, folder: book.folder, scheme, files: [...book.files, ...entry.files] };
};

const writeBooks = (
    args: Arguments,
    folders: LibraryFolders,
    reading: ExportReading,
    included: Pairing[],
    conversationOfPairing: ConversationOf,
    heldRecords: Map<string, HeldRecord>,
): void => {
    const filesTouched: string[] = [];
    const dougsClaudeFiles = registerBook(
        folders, folders.claude, 'Dougs Claude', 'Claude', 'Library', 'The Library',
        wrappedLines(dougsClaudeSynopsis), schemes[5], args.overwrite,
    );
    const ourConversationsFiles = registerBook(
        folders, folders.conversations, 'Our Conversations', 'Conversations', 'Claude', 'Dougs Claude',
        wrappedLines(ourConversationsSynopsis), schemes[1], args.overwrite,
    );
    const ourConversationsEntry = registerEntry(
        folders, folders.claude, 'Our Conversations', folders.conversations, new Date().toISOString(),
        ourConversationsCaption, '**',
    );
    const dougsClaudeEntryFiles = libraryEntry(folders.library, 'Dougs Claude', folders.claude, dougsClaudeCaption);
    filesTouched.push(...dougsClaudeFiles, ...dougsClaudeEntryFiles);
    filesTouched.push(...ourConversationsFiles, ...ourConversationsEntry.files);
    const namesTaken = new Set<string>();
    const reimportedWords: string[] = [];
    let writtenCount = 0;
    let keptCount = 0;
    for (const projectName of [...new Set(included.map(pairing => pairing.projectName))]) {
        const written = writtenProject(args, folders, reading, projectName);
        filesTouched.push(...written.files);
        for (const pairing of included.filter(candidate => candidate.projectName === projectName)) {
            const conversation = conversationOfPairing(pairing);
            const heldRecord = heldRecords.get(conversation.id);
            const heldBookFolder = heldRecord === undefined
                ? undefined : join(folders.conversations, heldRecord.record.bookFolder);
            const bookStands = heldBookFolder !== undefined && existsSync(heldBookFolder);
            const standingRecord = bookStands ? heldRecord : undefined;
            const state = importState(conversation, folders.conversations, standingRecord?.record);
            const reimporting = state === 'edited' && args.reimport;
            const keptAsIs = (state === 'edited' && !reimporting) || (state === 'in' && !args.overwrite);
            if (standingRecord !== undefined && keptAsIs) {
                keptCount++;
                continue;
            }
            const name = standingRecord?.record.name
                ?? uniqueBookName(folders.conversations, titleFromName(conversation.name), namesTaken);
            const path = shownPath(conversation);
            const projectNames = written.project === undefined ? [] : [written.project.name];
            const before = heldBookFolder === undefined ? new Map<string, string>() : folderContents(heldBookFolder);
            const drawn = conversationBook(folders, conversation, path, name, projectNames, written.scheme, referents);
            const drawnFileNames = drawn.files.map(file => basename(file));
            const newlyKept = reimporting ? keptEdits(drawn.folder, drawn.chapterStem, before, drawnFileNames) : [];
            const kept = standingKeptEdits(drawn.folder);
            const book = kept.length === 0 ? drawn : conversationBook(
                folders, conversation, path, name, projectNames, written.scheme, referents, kept.map(one => one.appendix),
            );
            const reimport = reimportOf(reimporting, standingRecord?.record.reimportedAt, kept.map(one => one.fileName));
            if (reimporting)
                reimportedWords.push(`  ${name}: ${countedNoun(newlyKept.length, 'file')} of yours kept beside the chapter, `
                    + 'printed at its end; strike each when its edits are applied');
            const conversationCaption = `A conversation, ${countedNoun(path.length, 'exchange')}:`;
            const entry = registerEntry(
                folders, folders.conversations, name, book.folder, conversation.updatedAt,
                conversationCaption, '**', recordAppendix,
            );
            const entryStem = entry.entryPath?.replace(/\.tsx$/u, '');
            const newRecordPath = entryStem === undefined ? undefined : `${entryStem}${recordSuffix}`;
            const recordPath = standingRecord?.path ?? newRecordPath;
            if (recordPath === undefined)
                throw new Error(`no entry stands for "${name}" in ${folders.conversations}, so its record has no place`);
            const bookFolder = basename(book.folder);
            const record = importRecord(conversation, folders.conversations, name, bookFolder, reading.exportedOn, reimport);
            writeImportRecord(recordPath, record);
            filesTouched.push(...book.files, ...entry.files, recordPath);
            if (written.folder !== undefined)
                filesTouched.push(...projectEntry(folders, written.folder, name, book.folder, conversation.createdAt));
            writtenCount++;
        }
    }
    filesTouched.push(...orderRegisterTable(folders.conversations), ...orderRegisterTable(folders.claude));
    console.log(`\nwrote ${countedNoun(writtenCount, 'conversation')}, kept ${keptCount}, `
        + `${countedNoun(filesTouched.length, 'file')} touched under ${folders.claude}`);
    if (reimportedWords.length > 0) console.log(['re-imported:', ...reimportedWords].join('\n'));
};

const reimportOf = (
    reimporting: boolean,
    reimportedAt: string | undefined,
    keptFileNames: string[],
): Reimport | undefined => {
    if (reimporting) return { reimportedAt: new Date().toISOString(), keptEdits: keptFileNames };
    if (reimportedAt === undefined) return undefined;

    return { reimportedAt, keptEdits: keptFileNames };
};

const flagValue = (argv: string[], flag: string): string | undefined => {
    const flagIndex = argv.indexOf(flag);

    return flagIndex >= 0 ? argv[flagIndex + 1] : undefined;
};

const flagValues = (argv: string[], flag: string): string[] =>
    argv.flatMap((word, index) => word === flag && argv[index + 1] !== undefined ? [argv[index + 1]] : []);

const countedNoun = (count: number, noun: string): string => `${count} ${noun}${count === 1 ? '' : 's'}`;
const elapsedSeconds = (since: number): string => `${((Date.now() - since) / 1000).toFixed(1)}s`;

const invokedDirectly = process.argv[1] !== undefined && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly)
    run(parsedArguments(process.argv.slice(2))).catch(error => {
        console.error(String(error.message ?? error));
        process.exit(1);
    });
