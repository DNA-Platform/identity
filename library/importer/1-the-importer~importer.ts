import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exportSource } from './3-the-record~claude.ts';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';
import { conversationPairings, type Pairing } from './4-the-pairing~pairing.ts';
import {
    importRecord, importRecords, importState, recordIdentifier, recordSuffix, writeImportRecord, type HeldRecord,
} from './5-the-ledger~ledger.ts';
import { asideCount, pathDays, shownPath } from './6-the-thread~thread.ts';
import { slugFromName, writtenChapter, type Referents } from './7-the-writing~writing.ts';
import {
    conversationBook, libraryEntry, orderRegisterTable, projectBook, projectEntry, registerBook, registerEntry, schemes,
    uniqueBookName, wrappedLines, type LibraryFolders,
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

export type Arguments = {
    projectName: string | undefined;
    onlyTitle: string | undefined;
    intoFolder: string | undefined;
    library: string;
    write: boolean;
    overwrite: boolean;
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
    onlyTitle: flagValue(argv, '--only'),
    intoFolder: flagValue(argv, '--into'),
    library: flagValue(argv, '--library') ?? resolve(importerFolder, '..'),
    write: argv.includes('--write'),
    overwrite: argv.includes('--overwrite'),
});

export const run = async (args: Arguments): Promise<void> => {
    const reading = await exportReading();
    const pairings = conversationPairings(args.library, reading.conversations, reading.projects, reading.mapping);
    console.log(pairingReport(pairings));
    if (args.projectName === undefined) {
        if (!args.write) console.log('nothing written — pass --write with --project');
        return;
    }
    const projectPairings = pairings.filter(pairing => pairing.projectName === args.projectName);
    const conversationOfPairing = (pairing: Pairing): Conversation =>
        reading.conversations.find(conversation => conversation.id === pairing.conversationId)!;
    const folders: LibraryFolders = {
        library: args.library,
        claude: join(args.library, '.claude'),
        claudeManual: join(args.library, '.claude', '.manual'),
        conversations: join(args.library, '.claude', '.conversations'),
    };
    const heldRecords = importRecords(folders.conversations);
    listProjectConversations(args.projectName, projectPairings, conversationOfPairing, folders, heldRecords);
    const pairedConversations = projectPairings.filter(pairing => !pairing.excluded).map(conversationOfPairing);
    console.log(archiveCheckReport(args.projectName, reading, pairedConversations));
    console.log(differenceLines('written back against the export', writtenDifferences(
        pairedConversations, heldRecords, folders.conversations,
    )).join('\n'));
    const chosenConversations = projectPairings
        .filter(pairing => !pairing.excluded && (args.onlyTitle === undefined || pairing.title === args.onlyTitle))
        .map(conversationOfPairing);
    if (args.intoFolder !== undefined) {
        for (const conversation of chosenConversations)
            writeChapterIntoFolder(args.intoFolder, conversation);
        return;
    }
    if (!args.write) {
        console.log('\nnothing written — pass --write');
        return;
    }
    const project = reading.projects.find(candidate => candidate.name === args.projectName);
    if (project === undefined) throw new Error(`no project named ${args.projectName} in the export`);
    writeProjectBooks(args, folders, project, reading, chosenConversations, heldRecords);
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

const archiveCheckReport = (projectName: string, reading: ExportReading, pairedConversations: Conversation[]): string => {
    const statisticsPath = join(accountFolder, '.statistics.md');
    if (!existsSync(statisticsPath)) return '\nno archive to check against';
    const statistics = archiveStatistics(readFileSync(statisticsPath, 'utf8'));
    const transcripts = archiveTranscripts(accountFolder);
    const filedNames = archiveFiling(accountFolder, projectName);
    const filingLines = filedNames === undefined
        ? [`filing: the archive has no project named ${projectName}`]
        : differenceLines('filing', filingDifferences(pairedConversations, filedNames, transcripts));

    return [
        '',
        `checked against the archive, ${countedNoun(transcripts.size, 'transcript')}`,
        ...differenceLines('counts', countDifferences(reading.counts, statistics)),
        ...filingLines,
        ...differenceLines('messages', transcriptDifferences(pairedConversations, transcripts)),
    ].join('\n');
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

const listProjectConversations = (
    projectName: string,
    projectPairings: Pairing[],
    conversationOfPairing: (pairing: Pairing) => Conversation,
    folders: LibraryFolders,
    heldRecords: Map<string, HeldRecord>,
): void => {
    const includedPairings = projectPairings.filter(pairing => !pairing.excluded);
    const byHandCount = includedPairings.filter(pairing => pairing.byHand).length;
    const byHandWords = byHandCount > 0 ? `, ${byHandCount} by hand` : '';
    console.log(`\n${projectName}: ${countedNoun(includedPairings.length, 'conversation')} paired${byHandWords}`);
    for (const pairing of includedPairings) {
        const conversation = conversationOfPairing(pairing);
        const path = shownPath(conversation);
        const record = heldRecords.get(conversation.id)?.record;
        const stateWord = importState(conversation, folders.conversations, record).padEnd(6);
        const shownWords = `${path.length} shown of ${conversation.messages.length}`;
        const countWords = `${shownWords}, ${asideCount(conversation, path)} aside`;
        const dayWords = countedNoun(pathDays(path).length, 'day');
        const nameWords = conversation.name || 'Untitled';
        console.log(`  ${stateWord} ${nameWords} · ${countWords} · ${dayWords} · ${pairing.evidence}`);
    }
    for (const pairing of projectPairings.filter(pairing => pairing.excluded))
        console.log(`  out    ${pairing.title} · ${pairing.reason}`);
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

const writeProjectBooks = (
    args: Arguments,
    folders: LibraryFolders,
    project: Project,
    reading: ExportReading,
    chosenConversations: Conversation[],
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
    const namedProjects = reading.projects.filter(candidate => candidate.name !== '');
    const scheme = schemes[(namedProjects.findIndex(candidate => candidate.id === project.id) + 1) % schemes.length];
    const writtenProjectBook = projectBook(folders, project, scheme, args.overwrite);
    filesTouched.push(...writtenProjectBook.files);
    filesTouched.push(...registerEntry(
        folders, folders.claude, project.name, writtenProjectBook.folder, project.updatedAt, projectCaption, '**',
    ).files);
    const namesTaken = new Set<string>();
    let writtenCount = 0;
    let keptCount = 0;
    for (const conversation of chosenConversations) {
        const heldRecord = heldRecords.get(conversation.id);
        const heldBookFolder = heldRecord === undefined
            ? undefined : join(folders.conversations, heldRecord.record.bookFolder);
        const bookStands = heldBookFolder !== undefined && existsSync(heldBookFolder);
        const standingRecord = bookStands ? heldRecord : undefined;
        const state = importState(conversation, folders.conversations, standingRecord?.record);
        if (standingRecord !== undefined && (!args.overwrite || state === 'edited')) {
            keptCount++;
            continue;
        }
        const name = standingRecord?.record.name
            ?? uniqueBookName(folders.conversations, conversation.name, namesTaken);
        const path = shownPath(conversation);
        const writtenBook = conversationBook(folders, conversation, path, name, [project.name], scheme, referents);
        const conversationCaption = `A conversation, ${countedNoun(path.length, 'exchange')}:`;
        const entry = registerEntry(
            folders, folders.conversations, name, writtenBook.folder, conversation.updatedAt,
            conversationCaption, '**', recordAppendix,
        );
        const entryStem = entry.entryPath?.replace(/\.tsx$/u, '');
        const newRecordPath = entryStem === undefined ? undefined : `${entryStem}${recordSuffix}`;
        const recordPath = standingRecord?.path ?? newRecordPath;
        if (recordPath === undefined)
            throw new Error(`no entry stands for "${name}" in ${folders.conversations}, so its record has no place`);
        const bookFolder = basename(writtenBook.folder);
        const record = importRecord(conversation, folders.conversations, name, bookFolder, reading.exportedOn);
        writeImportRecord(recordPath, record);
        filesTouched.push(
            ...writtenBook.files,
            ...entry.files,
            recordPath,
            ...projectEntry(folders, writtenProjectBook.folder, name, writtenBook.folder, conversation.createdAt),
        );
        writtenCount++;
    }
    filesTouched.push(...orderRegisterTable(folders.conversations), ...orderRegisterTable(folders.claude));
    console.log(`\nwrote ${countedNoun(writtenCount, 'conversation')}, kept ${keptCount}, `
        + `${countedNoun(filesTouched.length, 'file')} touched under ${folders.claude}`);
};

const flagValue = (argv: string[], flag: string): string | undefined => {
    const flagIndex = argv.indexOf(flag);

    return flagIndex >= 0 ? argv[flagIndex + 1] : undefined;
};

const countedNoun = (count: number, noun: string): string => `${count} ${noun}${count === 1 ? '' : 's'}`;
const elapsedSeconds = (since: number): string => `${((Date.now() - since) / 1000).toFixed(1)}s`;

const invokedDirectly = process.argv[1] !== undefined && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly)
    run(parsedArguments(process.argv.slice(2))).catch(error => {
        console.error(String(error.message ?? error));
        process.exit(1);
    });
