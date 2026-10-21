import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { newestBeside } from './2-the-export~export.ts';
import { exportSource } from './3-the-record~claude.ts';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';
import {
    conversationPairings, stackedProjects, writePairings, type Exclusions, type Pairing,
} from './4-the-pairing~pairing.ts';
import {
    folderContents, hasGrown, importRecord, importRecords, importState, keptEdits, keptEditsStanding, keptEditsStruck,
    standingKeptEdits, tendStruckEdits, writeImportRecord, type HeldRecord, type Reimport,
} from './5-the-ledger~ledger.ts';
import { asideCount, pathDays, shownPath } from './6-the-thread~thread.ts';
import { conversationTitle, slugFromName, writtenConversation, type Referents } from './7-the-writing~writing.ts';
import {
    conversationBook, libraryEntry, orderRegisterTable, plainName, projectBook, projectBookName, projectEntry,
    registerBook, registerEntry, schemes, uniqueConversationName, wrappedLines, type BookName,
    type ConversationNaming, type LibraryFolders, type Scheme,
} from './8-the-books~books.ts';
import {
    archiveFiling, archiveStatistics, archiveTranscripts, binderCheck, countDifferences, differenceLines, filingDifferences,
    membershipDifferences, transcriptDifferences, writtenDifferences, type ExportCounts,
} from './9-the-check~check.ts';

const importerFolder = dirname(fileURLToPath(import.meta.url));
const drawingBeside = (name: string): string => readFileSync(join(importerFolder, `8-the-books~${name}.svg`), 'utf8');
export const accountsFolder = resolve(importerFolder, '..', '..', '..', 'dna-library', 'library');
export const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };

const dougsClaudeSynopsis = 'My projects with Claude and all of my conversations with him, catalogued here: '
    + 'every conversation is filed under the book that holds them all, '
    + 'and every project is a book that catalogues its own besides.';
const ourConversationsSynopsis = 'Every conversation I have had with Claude, each a book of its own filed here, '
    + 'listed newest first; the projects catalogue them again by what they were about.';
const dougsClaudeCaption = 'My conversations with Claude and the projects they were held in:';
const ourConversationsCaption = 'All of them, newest first:';
const projectCaption = 'A project of mine, and the conversations held in it:';
const noProjectHeading = 'No project';
const noMappingWords = '  no mapping captured off the application; every conversation will be unpaired';

export type Account = { name: string; folder: string; address: string; ledger: string };
export type Configuration = { excluded: Exclusions; collections: Record<string, string[]> };
export type Selection = {
    all: boolean;
    projectName: string | undefined;
    collectionName: string | undefined;
    onlyNames: string[];
};
type ConversationOf = (pairing: Pairing) => Conversation;

export type Arguments = Selection & {
    intoFolder: string | undefined;
    library: string;
    write: boolean;
    overwrite: boolean;
    reimport: boolean;
};

type ExportReading = {
    account: Account;
    exportedOn: string;
    folder: string;
    projects: Project[];
    mapping: Mapping | undefined;
    conversations: Conversation[];
    counts: ExportCounts;
};

type Reading = {
    accounts: ExportReading[];
    projects: Project[];
    conversations: Map<string, Conversation>;
    readingOf: (pairing: Pairing) => ExportReading;
};

export const parsedArguments = (argv: string[]): Arguments => ({
    all: argv.includes('--all'),
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

const importConfigurationForm = /^(\d+)-(.+)~configuration\.json$/u;

export const importsOf = (importerFolder: string): Account[] => readdirSync(importerFolder)
    .map(fileName => ({ fileName, numbered: importConfigurationForm.exec(fileName) }))
    .filter(({ numbered }) => numbered !== null && numbered[2] !== 'the-importer')
    .sort((first, second) => Number(first.numbered![1]) - Number(second.numbered![1]))
    .map(({ fileName }) => ({
        ...JSON.parse(readFileSync(join(importerFolder, fileName), 'utf8')) as Omit<Account, 'ledger'>,
        ledger: join(importerFolder, fileName.replace(/~configuration.json$/u, '~ledger.json')),
    }));

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
    if (selection.all) return narrowed(pairings);
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
    const accounts = importsOf(join(args.library, 'importer'));
    if (accounts.length === 0) throw new Error('the importer holds no import: a chapter with a configuration beside it');
    const reading = await accountsReading(accounts);
    const pairings = reading.accounts.flatMap(accountReading => conversationPairings(
        args.library, accountReading.account.name, accountReading.conversations, accountReading.projects,
        accountReading.mapping, configuration.excluded,
    ));
    for (const accountReading of reading.accounts) {
        const accountPairings = pairings.filter(pairing => pairing.account === accountReading.account.name);
        console.log(`${accountReading.account.name}: ${pairingReport(accountPairings)}`);
        console.log(membershipReport(accountReading, accountPairings));
    }
    const conversationOfPairing: ConversationOf = pairing => reading.conversations.get(pairing.conversationId)!;
    const folders: LibraryFolders = {
        library: args.library,
        claude: join(args.library, '.claude'),
        claudeManual: join(args.library, '.claude', '.manual'),
        conversations: join(args.library, '.claude', '.conversations'),
    };
    const heldRecords = importRecords(folders.conversations, accounts.map(account => account.ledger));
    if (args.write) {
        writePairings(args.library, pairings);
        const tended = [...heldRecords.values()].flatMap(heldRecord => tendStruckEdits(folders.conversations, heldRecord));
        if (tended.length > 0) console.log(`tended ${countedNoun(tended.length, 'file')} after kept copies were struck`);
    }
    const selected = selectedPairings(pairings, args, configuration.collections);
    if (selected.length === 0) {
        listHeldConversations(reading, heldRecords, folders);
        console.log('\nnothing selected — pass --all, --project, --collection or --only');
        return;
    }
    listSelectedConversations(selectionWords(args), selected, conversationOfPairing, folders, heldRecords);
    const included = selected.filter(pairing => !pairing.excluded);
    const includedConversations = included.map(conversationOfPairing);
    const wholeProject = args.projectName !== undefined && args.onlyNames.length === 0;
    for (const accountReading of reading.accounts) {
        const accountIncluded = included.filter(pairing => pairing.account === accountReading.account.name);
        console.log(archiveCheckReport(accountIncluded, accountReading, conversationOfPairing, wholeProject));
    }
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
    const filesTouched = writeBooks(args, folders, reading, included, conversationOfPairing, heldRecords);
    const checked = await binderCheck(args.library, join(args.library, '..public', '.binding'), filesTouched);
    console.log(`\nthe binder's check: ${countedNoun(checked.bookCount, 'book')}, ${countedNoun(checked.keyCount, 'key')}, `
        + countedNoun(checked.faults.length, 'fault'));
    if (checked.faults.length > 0)
        throw new Error(['the library does not hold together after the write:', ...checked.faults.slice(0, 20)].join('\n'));
};

const accountsReading = async (accounts: Account[]): Promise<Reading> => {
    const accountReadings: ExportReading[] = [];
    for (const account of accounts)
        accountReadings.push(await exportReading(account));
    const readingOfConversation = new Map(accountReadings.flatMap(accountReading =>
        accountReading.conversations.map(conversation => [conversation.id, accountReading] as const)));
    const conversations = new Map(accountReadings.flatMap(accountReading =>
        accountReading.conversations.map(conversation => [conversation.id, conversation] as const)));
    const heapWords = `${Math.round(process.memoryUsage().heapUsed / 1e6)} MB`;
    console.log(`${countedNoun(accountReadings.length, 'account')} held, ${heapWords} of heap`);

    return {
        accounts: accountReadings,
        projects: stackedProjects(accountReadings.map(accountReading => accountReading.projects)),
        conversations,
        readingOf: pairing => readingOfConversation.get(pairing.conversationId)!,
    };
};

const exportReading = async (account: Account): Promise<ExportReading> => {
    const started = Date.now();
    const source = exportSource(join(accountsFolder, account.folder));
    const user = source.user();
    if (user !== account.address)
        throw new Error(`the export under ${account.folder} is ${user}'s, `
            + `and the configuration says ${account.name} is ${account.address}`);
    console.log(`reading ${account.name}, the export of ${source.exportedOn}, a ${source.packaging}`);
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

    return { account, exportedOn: source.exportedOn, folder: source.folder, projects, mapping, conversations, counts };
};

const membershipReport = (accountReading: ExportReading, accountPairings: Pairing[]): string => {
    const membershipPath = newestBeside(accountReading.folder, 'project-membership-');
    if (membershipPath === undefined) return '  no membership beside the export to check the pairing against';
    const differences = membershipDifferences(accountPairings, readFileSync(membershipPath, 'utf8'));

    return differenceLines(`  the pairing against ${basename(membershipPath)}`, differences).join('\n');
};

const archiveCheckReport = (
    included: Pairing[],
    reading: ExportReading,
    conversationOfPairing: ConversationOf,
    wholeProject: boolean,
): string => {
    const accountFolder = join(accountsFolder, reading.account.folder);
    const statisticsPath = join(accountFolder, '.statistics.md');
    if (!existsSync(statisticsPath)) return `\n${reading.account.name}: no archive to check against`;
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
        `${reading.account.name}: checked against the archive, ${countedNoun(transcripts.size, 'transcript')}`,
        ...differenceLines('counts', countDifferences(reading.counts, statistics)),
        ...filingLines,
        ...differenceLines('messages', transcriptDifferences(included.map(conversationOfPairing), transcripts)),
    ].join('\n');
};

const selectionWords = (selection: Selection): string => {
    if (selection.all) return 'every conversation of every account';
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
    reading: Reading,
    heldRecords: Map<string, HeldRecord>,
    folders: LibraryFolders,
): void => {
    console.log(`\nin the library: ${countedNoun(heldRecords.size, 'conversation')}`);
    const newestFirst = [...heldRecords.values()]
        .sort((first, second) => second.record.importedAt.localeCompare(first.record.importedAt));
    for (const heldRecord of newestFirst) {
        const conversation = reading.conversations.get(heldRecord.record.conversationId);
        const stateWord = conversation === undefined
            ? 'gone  ' : importState(conversation, folders.conversations, heldRecord.record).padEnd(6);
        console.log(`  ${stateWord} ${heldRecord.record.name}${importedWords(heldRecord, folders.conversations)}`);
    }
};

const writeChapterIntoFolder = (intoFolder: string, conversation: Conversation): void => {
    const manualImportPath = '../.manual/.book';
    const claudeManualImportPath = '../.claude/.manual/.book';
    const path = shownPath(conversation);
    const written = writtenConversation(conversation, path, referents, manualImportPath, claudeManualImportPath);
    const folder = join(intoFolder, slugFromName(conversation.name));
    mkdirSync(folder, { recursive: true });
    for (const chapter of [...written.chapters, ...written.versions]) {
        writeFileSync(join(folder, chapter.fileName), chapter.tsx, 'utf8');
        for (const chapterFile of chapter.files)
            writeFileSync(join(folder, chapterFile.name), chapterFile.content, 'utf8');
    }
    const fileCount = written.chapters.reduce((sum, chapter) => sum + chapter.files.length, 0);
    const chapterWords = `${countedNoun(written.chapters.length, 'chapter')} and `
        + countedNoun(written.versions.length, 'artifact version');
    const thinkingWords = countedNoun(written.thinkingCount, 'thinking block');
    const resultWords = countedNoun(written.resultCount, 'result');
    const reportWords = `${countedNoun(fileCount, 'file')} beside them, ${thinkingWords} and ${resultWords} left out`;
    console.log(`\nwrote ${chapterWords} under ${folder} with ${reportWords}`);
};

type WrittenProject = { project: Project | undefined; folder: string | undefined; scheme: Scheme; files: string[] };

const writtenProject = (
    args: Arguments,
    folders: LibraryFolders,
    reading: Reading,
    projectName: string | undefined,
): WrittenProject => {
    const project = projectName === undefined ? undefined : reading.projects.find(one => one.name === projectName);
    if (projectName !== undefined && project === undefined) throw new Error(`no project named ${projectName} in the export`);
    const namedProjects = reading.projects.filter(candidate => candidate.name !== '');
    const schemeIndex = project === undefined ? 0 : namedProjects.findIndex(candidate => candidate.id === project.id) + 1;
    const scheme = schemes[schemeIndex % schemes.length];
    if (project === undefined) return { project, folder: undefined, scheme, files: [] };
    const wholeProject = args.overwrite && (args.all || args.projectName !== undefined) && args.onlyNames.length === 0;
    const drawing = drawingBeside('project');
    const book = projectBook(folders, project, scheme, drawing, args.overwrite, wholeProject);
    const entry = registerEntry(
        folders, folders.claude, projectBookName(project.name), book.folder, project.updatedAt, projectCaption, '**',
    );

    return { project, folder: book.folder, scheme, files: [...book.files, ...entry.files] };
};

const writeBooks = (
    args: Arguments,
    folders: LibraryFolders,
    reading: Reading,
    included: Pairing[],
    conversationOfPairing: ConversationOf,
    heldRecords: Map<string, HeldRecord>,
): string[] => {
    const filesTouched: string[] = [];
    const dougsClaudeFiles = registerBook(
        folders, folders.claude, 'Dougs Claude', 'Claude', 'Library', 'The Library', join(folders.library, '..reference'),
        wrappedLines(dougsClaudeSynopsis), schemes[5], 'Catalogue', 'BookshelfCover', drawingBeside('dougs-claude'),
        args.overwrite,
    );
    const ourConversationsFiles = registerBook(
        folders, folders.conversations, 'Our Conversations', 'Conversations', 'Claude', 'Dougs Claude', folders.claude,
        wrappedLines(ourConversationsSynopsis), schemes[1], 'Register', 'JournalCover', drawingBeside('our-conversations'),
        args.overwrite,
    );
    const ourConversationsEntry = registerEntry(
        folders, folders.claude, plainName('Our Conversations'), folders.conversations, new Date().toISOString(),
        ourConversationsCaption, '**',
    );
    const dougsClaudeEntryFiles = libraryEntry(folders.library, 'Dougs Claude', folders.claude, dougsClaudeCaption);
    filesTouched.push(...dougsClaudeFiles, ...dougsClaudeEntryFiles);
    filesTouched.push(...ourConversationsFiles, ...ourConversationsEntry.files);
    const namesTaken = new Set<string>();
    const reimportedWords: string[] = [];
    let writtenCount = 0;
    let keptCount = 0;
    let emptyCount = 0;
    for (const projectName of [...new Set(included.map(pairing => pairing.projectName))]) {
        const written = writtenProject(args, folders, reading, projectName);
        filesTouched.push(...written.files);
        for (const pairing of included.filter(candidate => candidate.projectName === projectName)) {
            const conversation = conversationOfPairing(pairing);
            // A conversation with no message to show is no book: there is nothing in it to read, and a
            // conversation's type refuses a day that holds no message. Twenty of them, 2026-10-18.
            if (shownPath(conversation).length === 0) {
                emptyCount++;
                continue;
            }
            const heldRecord = heldRecords.get(conversation.id);
            const heldBookFolder = heldRecord === undefined || heldRecord.record.bookFolder === ''
                ? undefined : join(folders.conversations, heldRecord.record.bookFolder);
            const bookStands = heldBookFolder !== undefined && existsSync(heldBookFolder);
            const standingRecord = bookStands ? heldRecord : undefined;
            const state = importState(conversation, folders.conversations, standingRecord?.record);
            const reimporting = state === 'edited' && args.reimport;
            const keptAsIs = (state === 'edited' && !reimporting) || (state === 'in' && !args.overwrite);
            const title = conversationTitle(conversation);
            const standingName = (held: HeldRecord): BookName => ({ words: title, key: held.record.name });
            if (standingRecord !== undefined && keptAsIs) {
                keptCount++;
                if (written.folder !== undefined)
                    filesTouched.push(...projectEntry(
                        folders, written.folder, standingName(standingRecord), heldBookFolder!, conversation.createdAt,
                    ));
                continue;
            }
            const standing = standingRecord;
            const naming: ConversationNaming = standing === undefined
                ? uniqueConversationName(folders.conversations, title, conversation.id, namesTaken)
                : { name: standingName(standing), folderName: standing.record.bookFolder };
            const name = naming.name.key;
            const path = shownPath(conversation);
            const projectNames = written.project === undefined ? [] : [written.project.name];
            const accountName = reading.readingOf(pairing).account.name;
            const before = standing === undefined ? new Map<string, string>() : folderContents(heldBookFolder!);
            const drawn = conversationBook(
                folders, conversation, path, naming, projectNames, accountName, written.scheme, referents,
            );
            const drawnFileNames = drawn.files.map(file => basename(file));
            const newlyKept = reimporting ? keptEdits(drawn.folder, drawn.chapterStem, before, drawnFileNames) : [];
            const kept = standingKeptEdits(drawn.folder);
            const book = kept.length === 0 ? drawn : conversationBook(
                folders, conversation, path, naming, projectNames, accountName, written.scheme, referents,
                kept.map(one => one.appendix),
            );
            const keptFileNames = new Set(kept.map(one => one.fileName));
            const bookFileNames = new Set(book.files.map(file => basename(file)));
            for (const fileName of before.keys())
                if (!bookFileNames.has(fileName) && !keptFileNames.has(fileName)) rmSync(join(drawn.folder, fileName));
            const reimport = reimportOf(reimporting, standingRecord?.record.reimportedAt, kept.map(one => one.fileName));
            if (reimporting)
                reimportedWords.push(`  ${name}: ${countedNoun(newlyKept.length, 'file')} of yours kept beside the chapter, `
                    + 'printed at its end; strike each when its edits are applied');
            const conversationCaption = `A conversation, ${countedNoun(path.length, 'exchange')}:`;
            const entry = registerEntry(
                folders, folders.conversations, naming.name, book.folder, conversation.updatedAt, conversationCaption, '**',
                undefined, written.project?.name ?? noProjectHeading,
            );
            const accountReading = reading.readingOf(pairing);
            const recordPath = accountReading.account.ledger;
            const record = importRecord(
                conversation, folders.conversations, name, basename(book.folder), accountReading.exportedOn, reimport,
                accountReading.account.name,
            );
            writeImportRecord(recordPath, record);
            filesTouched.push(...book.files, ...entry.files, recordPath);
            if (written.folder !== undefined)
                filesTouched.push(
                    ...projectEntry(folders, written.folder, naming.name, book.folder, conversation.createdAt),
                );
            writtenCount++;
        }
    }
    const latestByPart = new Map<string, string>();
    for (const pairing of included) {
        const part = pairing.projectName ?? noProjectHeading;
        const latest = conversationOfPairing(pairing).updatedAt;
        if ((latestByPart.get(part) ?? '') < latest) latestByPart.set(part, latest);
    }
    const partsNewestFirst = [...latestByPart.entries()]
        .filter(([part]) => part !== noProjectHeading)
        .sort((first, second) => second[1].localeCompare(first[1]))
        .map(([part]) => part);
    if (latestByPart.has(noProjectHeading)) partsNewestFirst.push(noProjectHeading);
    filesTouched.push(...orderRegisterTable(folders.conversations, partsNewestFirst), ...orderRegisterTable(folders.claude));
    console.log(`\nwrote ${countedNoun(writtenCount, 'conversation')}, kept ${keptCount}, `
        + `${countedNoun(emptyCount, 'conversation')} with no message not written, `
        + `${countedNoun(filesTouched.length, 'file')} touched under ${folders.claude}`);
    if (reimportedWords.length > 0) console.log(['re-imported:', ...reimportedWords].join('\n'));

    return filesTouched;
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
