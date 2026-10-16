var v=Object.defineProperty;var o=(b,g)=>v(b,"name",{value:g,configurable:!0});import{j as e,C as d,T as c,P as h,c as r,H as s,a as n,d as i,W as p,M as a,A as t,$ as y}from"./index-B_FyHnI6.js";import{r as x,a3 as w,I,S as l,s as f}from"./.cover-Fra7zcrD.js";import{C as k,S as C}from"./.synopsis-BIUNQemn.js";const m=class m extends x{};o(m,"$Importer");let u=m;const j=o(()=>e.jsxs(d,{children:[e.jsx(w,{}),e.jsx(I,{}),e.jsxs(c,{children:[e.jsx(h,{}),"[Table of Contents](/dougs-importer/#table-of-contents)"]}),e.jsxs(r,{children:[e.jsx(s,{children:"The run"}),e.jsx(n,{children:e.jsx(i,{children:"[The Importer](/dougs-importer/#the-importer)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Export](/dougs-importer/#the-export)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Record](/dougs-importer/#the-record)"})}),e.jsxs(n,{children:[e.jsx(h,{}),e.jsx(p,{children:e.jsx(i,{children:"[Dougs Importer](/dougs-importer/)"})}),e.jsx(p,{children:e.jsx(i,{children:"[Synopsis](/dougs-importer/#synopsis)"})}),e.jsx(p,{children:e.jsx(i,{children:"[Table of Contents](/dougs-importer/#table-of-contents)"})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"From the export to a book"}),e.jsx(n,{children:e.jsx(i,{children:"[The Pairing](/dougs-importer/#the-pairing)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Ledger](/dougs-importer/#the-ledger)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Thread](/dougs-importer/#the-thread)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Writing](/dougs-importer/#the-writing)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Books](/dougs-importer/#the-books)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Check](/dougs-importer/#the-check)"})})]})]}),"Table"),H=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Importer](/dougs-importer/#the-importer)"}),e.jsxs(n,{children:[e.jsx(f,{}),"The run: the stages in order, from an export on disk to conversations filed in this library, and the report of what it did."]}),e.jsxs(r,{children:[e.jsx(s,{children:"Nine stages and nothing hidden between them"}),e.jsxs(n,{children:["A conversation gets into this library in stages, and each stage is a chapter of this book with its code beside it, so a change to the code is never a question about which page owes an edit. The importer finds ",e.jsx(a,{children:"[the export](/dougs-importer/#the-export)"})," where it lands, reads it into ",e.jsx(a,{children:"[one record](/dougs-importer/#the-record)"}),", pairs each conversation to its project by ",e.jsx(a,{children:"[evidence](/dougs-importer/#the-pairing)"}),", asks ",e.jsx(a,{children:"[the ledger](/dougs-importer/#the-ledger)"})," which conversations are new, walks ",e.jsx(a,{children:"[the thread](/dougs-importer/#the-thread)"})," that was on the screen, turns what was said into ",e.jsx(a,{children:"[writing](/dougs-importer/#the-writing)"}),", writes ",e.jsx(a,{children:"[the books](/dougs-importer/#the-books)"}),", and ",e.jsx(a,{children:"[checks](/dougs-importer/#the-check)"})," what it wrote against the archive the export was first read into."]}),e.jsxs(n,{children:["Run bare it says what it would write and stops. Run to write it writes, and reports: the conversations found, paired, unpaired, ambiguous and excluded; the messages on the screen and on other paths; the files written. It takes a project, a collection its configuration names, or particular conversations named by title or by id, never the whole export in one run, so the library grows at the pace the bind is measured to bear; and for each it says whether it is new, in, grown or edited, and when it was imported and from which export, which the record beside the conversation's entry holds. A run writes what is new and what has grown since its import, leaves what is in, and never touches what I edited unless told to re-import, when it keeps my edits beside the fresh chapter and says so, as ",e.jsx(a,{children:"[the ledger](/dougs-importer/#the-ledger)"})," tells. Run with nothing named it lists what the library holds already, newest import first. A book's title is the conversation's name made sensible, its spaces collapsed and a pictograph the application put first dropped, and its address is the title's letters in any script, a sign that reads as a word read as it. While the importer is being made it overwrites what it wrote, on a flag said at the run; once it is done it never does, since a conversation once imported is edited by hand."]}),e.jsx(n,{children:"Its configuration stands beside this chapter: what is excluded as not mine, the scripts a title may not be in and the projects, and the collections, each a name over a list of conversations by title or id. A conversation with a Russian title is not mine, and the configuration says so."})]}),e.jsx(t,{identifier:"importer",type:".ts",children:`import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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
import { slugFromName, titleFromName, writtenConversation, type Referents } from './7-the-writing~writing.ts';
import {
    conversationBook, libraryEntry, orderRegisterTable, projectBook, projectEntry, registerBook, registerEntry, schemes,
    uniqueBookName, wrappedLines, type LibraryFolders, type Scheme,
} from './8-the-books~books.ts';
import {
    archiveFiling, archiveStatistics, archiveTranscripts, countDifferences, differenceLines, filingDifferences,
    transcriptDifferences, writtenDifferences, type ExportCounts,
} from './9-the-check~check.ts';

const importerFolder = dirname(fileURLToPath(import.meta.url));
const drawingBeside = (name: string): string => readFileSync(join(importerFolder, \`8-the-books~\${name}.svg\`), 'utf8');
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
            throw new Error(\`the configuration names no collection called \${selection.collectionName}\`);
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
        if (tended.length > 0) console.log(\`tended \${countedNoun(tended.length, 'file')} after kept copies were struck\`);
    }
    const selected = selectedPairings(pairings, args, configuration.collections);
    if (selected.length === 0) {
        listHeldConversations(reading, heldRecords, folders);
        console.log('\\nnothing selected — pass --project, --collection or --only');
        return;
    }
    listSelectedConversations(selectionWords(args), selected, conversationOfPairing, folders, heldRecords);
    const included = selected.filter(pairing => !pairing.excluded);
    const includedConversations = included.map(conversationOfPairing);
    const wholeProject = args.projectName !== undefined && args.onlyNames.length === 0;
    console.log(archiveCheckReport(included, reading, conversationOfPairing, wholeProject));
    console.log(differenceLines('written back against the export', writtenDifferences(
        includedConversations, heldRecords, folders.conversations,
    )).join('\\n'));
    if (args.intoFolder !== undefined) {
        for (const conversation of includedConversations)
            writeChapterIntoFolder(args.intoFolder, conversation);
        return;
    }
    if (!args.write) {
        console.log('\\nnothing written — pass --write');
        return;
    }
    writeBooks(args, folders, reading, included, conversationOfPairing, heldRecords);
};

const exportReading = async (): Promise<ExportReading> => {
    const started = Date.now();
    const source = exportSource(accountFolder);
    console.log(\`reading \${source.name}\`);
    const projects = source.projects();
    const documentCount = projects.reduce((total, project) => total + project.documents.length, 0);
    const namedProjectCount = projects.filter(project => project.name !== '').length;
    const memoryFileCount = source.memories().length;
    console.log(\`  \${countedNoun(projects.length, 'project')}, \${namedProjectCount} named, \`
        + \`\${countedNoun(documentCount, 'document')}, \${countedNoun(memoryFileCount, 'memory file')}\`);
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
    const blockCountWords = [...blockCounts.entries()].map(([blockType, count]) => \`\${count} \${blockType}\`).join(', ');
    console.log(\`  \${countedNoun(conversations.length, 'conversation')}, \${countedNoun(messageCount, 'message')}: \`
        + blockCountWords);
    console.log(\`read in \${elapsedSeconds(started)}\`);
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
    if (!existsSync(statisticsPath)) return '\\nno archive to check against';
    const statistics = archiveStatistics(readFileSync(statisticsPath, 'utf8'));
    const transcripts = archiveTranscripts(accountFolder);
    const projectNames = [...new Set(included.map(pairing => pairing.projectName))]
        .filter((name): name is string => name !== undefined);
    const filingOfProject = (projectName: string): string[] => {
        const filedNames = archiveFiling(accountFolder, projectName);
        const ours = included.filter(pairing => pairing.projectName === projectName).map(conversationOfPairing);
        if (filedNames === undefined) return [\`filing of \${projectName}: the archive has no project of that name\`];

        return differenceLines(\`filing of \${projectName}\`, filingDifferences(ours, filedNames, transcripts));
    };
    const filingLines = wholeProject
        ? projectNames.flatMap(filingOfProject) : ['filing: checked when a project is run whole'];

    return [
        '',
        \`checked against the archive, \${countedNoun(transcripts.size, 'transcript')}\`,
        ...differenceLines('counts', countDifferences(reading.counts, statistics)),
        ...filingLines,
        ...differenceLines('messages', transcriptDifferences(included.map(conversationOfPairing), transcripts)),
    ].join('\\n');
};

const selectionWords = (selection: Selection): string => {
    if (selection.projectName !== undefined) return selection.projectName;
    if (selection.collectionName !== undefined) return \`the collection \${selection.collectionName}\`;

    return 'named';
};

const mappingReport = (mapping: Mapping): string => {
    const filedCount = mapping.projects.reduce((total, mappedProject) => total + mappedProject.conversations.length, 0);

    return \`  the mapping of \${mapping.capturedAt.slice(0, 10)}: \${countedNoun(mapping.projects.length, 'project')}, \`
        + \`\${countedNoun(filedCount, 'conversation')} filed\`;
};

const pairingReport = (pairings: Pairing[]): string => {
    const pairingCount = (test: (pairing: Pairing) => boolean): number => pairings.filter(test).length;

    return [
        \`paired \${pairingCount(pairing => pairing.projectName !== undefined && !pairing.excluded)}\`,
        \`unpaired \${pairingCount(pairing => pairing.projectName === undefined && !pairing.excluded)}\`,
        \`ambiguous \${pairingCount(pairing => pairing.evidence.startsWith('ambiguous'))}\`,
        \`excluded \${pairingCount(pairing => pairing.excluded)}\`,
        \`by hand \${pairingCount(pairing => pairing.byHand)}\`,
    ].join(' · ');
};

const importedWords = (heldRecord: HeldRecord | undefined, registerFolder: string, conversation?: Conversation): string => {
    if (heldRecord === undefined) return '';
    const { importedAt, exportedOn, reimportedAt } = heldRecord.record;
    const grownSince = conversation !== undefined && hasGrown(conversation, heldRecord.record);
    const grownWords = grownSince ? ', grown since: re-import it with --reimport and re-apply what you edited' : '';
    const waiting = keptEditsStanding(registerFolder, heldRecord.record);
    const struck = keptEditsStruck(registerFolder, heldRecord.record);
    const reimportedWords = reimportedAt === undefined ? '' : \`, re-imported \${reimportedAt.slice(0, 10)}\`;
    const waitingWords = waiting.length === 0 ? '' : \`, \${countedNoun(waiting.length, 'file')} of your edits to apply\`;
    const struckWords = struck.length === 0
        ? '' : \`, \${countedNoun(struck.length, 'kept copy')} struck: a run that writes tends the chapter\`;
    const whenWords = \`imported \${importedAt.slice(0, 10)} from the export of \${exportedOn}\`;

    return \` · \${whenWords}\${reimportedWords}\${waitingWords}\${struckWords}\${grownWords}\`;
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
    const byHandWords = byHandCount > 0 ? \`, \${byHandCount} by hand\` : '';
    console.log(\`\\n\${heading}: \${countedNoun(included.length, 'conversation')}\${byHandWords}\`);
    for (const pairing of included) {
        const conversation = conversationOfPairing(pairing);
        const path = shownPath(conversation);
        const heldRecord = heldRecords.get(conversation.id);
        const stateWord = importState(conversation, folders.conversations, heldRecord?.record).padEnd(6);
        const shownWords = \`\${path.length} shown of \${conversation.messages.length}\`;
        const countWords = \`\${shownWords}, \${asideCount(conversation, path)} aside\`;
        const dayWords = countedNoun(pathDays(path).length, 'day');
        const nameWords = conversation.name || 'Untitled';
        const projectWords = pairing.projectName ?? 'no project';
        const edited = heldRecord !== undefined && stateWord.trim() === 'edited';
        const whenWords = importedWords(heldRecord, folders.conversations, edited ? conversation : undefined);
        const evidenceWords = \`\${projectWords} · \${pairing.evidence}\${whenWords}\`;
        console.log(\`  \${stateWord} \${nameWords} · \${countWords} · \${dayWords} · \${evidenceWords}\`);
    }
    for (const pairing of selected.filter(pairing => pairing.excluded))
        console.log(\`  out    \${pairing.title} · \${pairing.reason}\`);
};

const listHeldConversations = (
    reading: ExportReading,
    heldRecords: Map<string, HeldRecord>,
    folders: LibraryFolders,
): void => {
    console.log(\`\\nin the library: \${countedNoun(heldRecords.size, 'conversation')}\`);
    const newestFirst = [...heldRecords.values()]
        .sort((first, second) => second.record.importedAt.localeCompare(first.record.importedAt));
    for (const heldRecord of newestFirst) {
        const conversation = reading.conversations.find(candidate => candidate.id === heldRecord.record.conversationId);
        const stateWord = conversation === undefined
            ? 'gone  ' : importState(conversation, folders.conversations, heldRecord.record).padEnd(6);
        console.log(\`  \${stateWord} \${heldRecord.record.name}\${importedWords(heldRecord, folders.conversations)}\`);
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
    const chapterWords = \`\${countedNoun(written.chapters.length, 'chapter')} and \`
        + countedNoun(written.versions.length, 'artifact version');
    const thinkingWords = countedNoun(written.thinkingCount, 'thinking block');
    const resultWords = countedNoun(written.resultCount, 'result');
    const reportWords = \`\${countedNoun(fileCount, 'file')} beside them, \${thinkingWords} and \${resultWords} left out\`;
    console.log(\`\\nwrote \${chapterWords} under \${folder} with \${reportWords}\`);
};

type WrittenProject = { project: Project | undefined; folder: string | undefined; scheme: Scheme; files: string[] };

const writtenProject = (
    args: Arguments,
    folders: LibraryFolders,
    reading: ExportReading,
    projectName: string | undefined,
): WrittenProject => {
    const project = projectName === undefined ? undefined : reading.projects.find(one => one.name === projectName);
    if (projectName !== undefined && project === undefined) throw new Error(\`no project named \${projectName} in the export\`);
    const namedProjects = reading.projects.filter(candidate => candidate.name !== '');
    const schemeIndex = project === undefined ? 0 : namedProjects.findIndex(candidate => candidate.id === project.id) + 1;
    const scheme = schemes[schemeIndex % schemes.length];
    if (project === undefined) return { project, folder: undefined, scheme, files: [] };
    const book = projectBook(folders, project, scheme, drawingBeside('project'), args.overwrite);
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
            const keptFileNames = new Set(kept.map(one => one.fileName));
            const bookFileNames = new Set(book.files.map(file => basename(file)));
            for (const fileName of before.keys())
                if (!bookFileNames.has(fileName) && !keptFileNames.has(fileName)) rmSync(join(drawn.folder, fileName));
            const reimport = reimportOf(reimporting, standingRecord?.record.reimportedAt, kept.map(one => one.fileName));
            if (reimporting)
                reimportedWords.push(\`  \${name}: \${countedNoun(newlyKept.length, 'file')} of yours kept beside the chapter, \`
                    + 'printed at its end; strike each when its edits are applied');
            const conversationCaption = \`A conversation, \${countedNoun(path.length, 'exchange')}:\`;
            const entry = registerEntry(
                folders, folders.conversations, name, book.folder, conversation.updatedAt,
                conversationCaption, '**', recordAppendix,
            );
            const entryStem = entry.entryPath?.replace(/\\.tsx$/u, '');
            const newRecordPath = entryStem === undefined ? undefined : \`\${entryStem}\${recordSuffix}\`;
            const recordPath = standingRecord?.path ?? newRecordPath;
            if (recordPath === undefined)
                throw new Error(\`no entry stands for "\${name}" in \${folders.conversations}, so its record has no place\`);
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
    console.log(\`\\nwrote \${countedNoun(writtenCount, 'conversation')}, kept \${keptCount}, \`
        + \`\${countedNoun(filesTouched.length, 'file')} touched under \${folders.claude}\`);
    if (reimportedWords.length > 0) console.log(['re-imported:', ...reimportedWords].join('\\n'));
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

const countedNoun = (count: number, noun: string): string => \`\${count} \${noun}\${count === 1 ? '' : 's'}\`;
const elapsedSeconds = (since: number): string => \`\${((Date.now() - since) / 1000).toFixed(1)}s\`;

const invokedDirectly = process.argv[1] !== undefined && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly)
    run(parsedArguments(process.argv.slice(2))).catch(error => {
        console.error(String(error.message ?? error));
        process.exit(1);
    });
`}),e.jsx(t,{identifier:"configuration",type:".json",children:`{
  "excluded": {
    "scripts": ["Cyrillic"],
    "projects": ["Ana's Career", "Ana's Fiverr Inbox"]
  },
  "collections": {}
}
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
import { configurationFrom, parsedArguments, selectedPairings } from './1-the-importer~importer.ts';
import type { Pairing } from './4-the-pairing~pairing.ts';

const pairing = (conversationId: string, title: string, projectName: string | undefined, excluded = false): Pairing =>
    ({ conversationId, title, projectName, evidence: 'the mapping, by title', excluded, reason: '', byHand: false });
const pairings = [
    pairing('p1', 'Semantic Primes', 'Semantic Reference Theory'),
    pairing('p2', 'Specifying SRT', 'Semantic Reference Theory'),
    pairing('s1', 'Seren & Color', 'Seren'),
    pairing('u1', 'A Continuation...', undefined),
    pairing('r1', 'Понимание основ СРТ', 'Semantic Reference Theory', true),
];
const collections = { foundations: ['Semantic Primes', 's1'] };
const selection = (names: string[] = [], projectName?: string, collectionName?: string) =>
    ({ projectName, collectionName, onlyNames: names });

describe('the importer', () => {
    // Doug, 2026-10-14: "We should probably have an abstraction where we can configure the import in certain ways…
    // We also need to be able to run the importer for specific conversations or specific collections of conversations."
    it('reads its configuration with every part given a default, so an empty file configures nothing', () => {
        expect(configurationFrom('{}')).toEqual({ excluded: { scripts: [], projects: [] }, collections: {} });
        expect(configurationFrom('{"excluded":{"scripts":["Cyrillic"]},"collections":{"a":["x"]}}'))
            .toEqual({ excluded: { scripts: ['Cyrillic'], projects: [] }, collections: { a: ['x'] } });
    });

    it("selects a project's conversations, a collection's by title or id, or the ones named, narrowing by name", () => {
        const ids = (selected: Pairing[]): string[] => selected.map(one => one.conversationId);
        const srt = 'Semantic Reference Theory';
        expect(ids(selectedPairings(pairings, selection([], srt), collections))).toEqual(['p1', 'p2', 'r1']);
        expect(ids(selectedPairings(pairings, selection(['Specifying SRT'], srt), collections))).toEqual(['p2']);
        expect(ids(selectedPairings(pairings, selection([], undefined, 'foundations'), collections))).toEqual(['p1', 's1']);
        expect(ids(selectedPairings(pairings, selection(['u1', 'Seren & Color']), collections))).toEqual(['s1', 'u1']);
        expect(selectedPairings(pairings, selection(), collections)).toEqual([]);
        expect(() => selectedPairings(pairings, selection([], undefined, 'nowhere'), collections))
            .toThrow('the configuration names no collection called nowhere');
    });

    it('takes every --only on the command line, and the project, the collection and the flags beside them', () => {
        const parsed = parsedArguments(['--only', 'A', '--only', 'B', '--collection', 'c', '--write']);
        expect(parsed.onlyNames).toEqual(['A', 'B']);
        expect(parsed.collectionName).toBe('c');
        expect(parsed.projectName).toBeUndefined();
        expect(parsed.write).toBe(true);
        expect(parsed.overwrite).toBe(false);
    });
});
`})]}),"TheImporter1"),S=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Export](/dougs-importer/#the-export)"}),e.jsxs(n,{children:[e.jsx(f,{}),"What is read, and where it is found: the export Claude gives of an account, and the mapping of conversations to projects read off the application, both left where they land."]}),e.jsxs(r,{children:[e.jsx(s,{children:"A manifest and four archives"}),e.jsx(n,{children:"An export of my Claude account arrives as a small manifest naming four archives, which the browser must fetch since their links are single-use: the account's metadata, its projects with every knowledge file inline, its memories, and every conversation in one array, with every message as a tree of blocks, text, thinking, a tool used and what it returned, and the artifacts among them. The export says nothing about which project a conversation belongs to; that is read off the application by a capture that takes the screen, and written as a mapping beside the export."}),e.jsxs(n,{children:["All of it lands in a sister repository on this machine, in dated folders, by that repository's own command; a fresh export is made there on my go-ahead, since the capture takes my screen. The importer reads the newest export and the latest mapping where they stand, and copies none of it into the library. It never reads the markdown that repository wrote from the export, which kept only the text and walked the tree as a list; the code there was the beginning of this, and the archive there is ",e.jsx(a,{children:"[the check](/dougs-importer/#the-check)"}),"."]})]}),e.jsx(t,{identifier:"export",type:".ts",children:`import { closeSync, createReadStream, existsSync, openSync, readdirSync, readFileSync, readSync } from 'node:fs';
import { join } from 'node:path';
import type { Readable } from 'node:stream';
import { StringDecoder } from 'node:string_decoder';
import { createInflateRaw, inflateRawSync } from 'node:zlib';

export type ArchiveEntry = { name: string; method: number; size: number; localHeader: number };
export type Archive = { path: string; bytes: Buffer; entries: ArchiveEntry[] };
export type ExportFiles = {
    account: string;
    folder: string;
    manifest: string;
    archives: Record<string, string>;
    mapping: string | undefined;
};

type Manifest = { created_at: string; data_files: { category: string; part: number; filename: string }[] };

const isManifestName = (name: string): boolean => name.startsWith('data-') && name.endsWith('.json');
const isMappingName = (name: string): boolean => name.startsWith('project-mapping-') && name.endsWith('.json');

export const newestExportFiles = (account: string): ExportFiles => {
    const exportsFolder = join(account, '.exports');
    const manifestFiles: { name: string; folder: string }[] = [];
    for (const entry of readdirSync(exportsFolder, { withFileTypes: true })) {
        if (entry.isFile() && isManifestName(entry.name))
            manifestFiles.push({ name: entry.name, folder: exportsFolder });
        if (!entry.isDirectory()) continue;
        for (const name of readdirSync(join(exportsFolder, entry.name)))
            if (isManifestName(name))
                manifestFiles.push({ name, folder: join(exportsFolder, entry.name) });
    }
    manifestFiles.sort((first, second) => first.name.localeCompare(second.name));
    const newestManifest = manifestFiles.at(-1);
    if (newestManifest === undefined)
        throw new Error(\`no export under \${exportsFolder}: a manifest named data-<date>.json, \`
            + 'in a dated folder or beside this one');
    const manifest = JSON.parse(readFileSync(join(newestManifest.folder, newestManifest.name), 'utf8')) as Manifest;
    const archives: Record<string, string> = {};
    for (const dataFile of manifest.data_files) {
        const archivePath = join(newestManifest.folder, dataFile.filename);
        if (!existsSync(archivePath))
            throw new Error(\`the manifest \${newestManifest.name} names \${dataFile.filename}, and it is not beside it; \` +
                'its link was single-use, so a fresh export is needed');
        archives[dataFile.category] = archivePath;
    }
    const newestMapping = readdirSync(exportsFolder).filter(isMappingName).sort().at(-1);

    return {
        account,
        folder: newestManifest.folder,
        manifest: join(newestManifest.folder, newestManifest.name),
        archives,
        mapping: newestMapping === undefined ? undefined : join(exportsFolder, newestMapping),
    };
};

export const archiveFromFile = (path: string): Archive => {
    const bytes = readFileSync(path);
    let position = bytes.length - 22;
    while (position >= 0 && bytes.readUInt32LE(position) !== 0x06054b50)
        position--;
    if (position < 0) throw new Error(\`\${path} has no central directory\`);
    const entryCount = bytes.readUInt16LE(position + 10);
    let entryOffset = bytes.readUInt32LE(position + 16);
    const entries: ArchiveEntry[] = [];
    for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
        const nameLength = bytes.readUInt16LE(entryOffset + 28);
        const extraLength = bytes.readUInt16LE(entryOffset + 30);
        const commentLength = bytes.readUInt16LE(entryOffset + 32);
        entries.push({
            name: bytes.toString('utf8', entryOffset + 46, entryOffset + 46 + nameLength),
            method: bytes.readUInt16LE(entryOffset + 10),
            size: bytes.readUInt32LE(entryOffset + 20),
            localHeader: bytes.readUInt32LE(entryOffset + 42),
        });
        entryOffset += 46 + nameLength + extraLength + commentLength;
    }

    return { path, bytes, entries };
};

export const entryText = (archive: Archive, entry: ArchiveEntry): string => {
    const nameLength = archive.bytes.readUInt16LE(entry.localHeader + 26);
    const extraLength = archive.bytes.readUInt16LE(entry.localHeader + 28);
    const dataStart = entry.localHeader + 30 + nameLength + extraLength;
    const entryData = archive.bytes.subarray(dataStart, dataStart + entry.size);

    return (entry.method === 0 ? entryData : inflateRawSync(entryData)).toString('utf8');
};

export const jsonEntries = (archive: Archive, matchesName: (name: string) => boolean): unknown[] =>
    archive.entries
        .filter(entry => entry.name.endsWith('.json') && matchesName(entry.name))
        .map(entry => JSON.parse(entryText(archive, entry)));

const entryStream = (path: string): Readable => {
    const fileDescriptor = openSync(path, 'r');
    const localHeader = Buffer.alloc(30);
    readSync(fileDescriptor, localHeader, 0, 30, 0);
    closeSync(fileDescriptor);
    if (localHeader.readUInt32LE(0) !== 0x04034b50) throw new Error(\`\${path} does not open with a zip local header\`);
    const method = localHeader.readUInt16LE(8);
    const dataStart = 30 + localHeader.readUInt16LE(26) + localHeader.readUInt16LE(28);
    const fileStream = createReadStream(path, { start: dataStart });

    return method === 0 ? fileStream : fileStream.pipe(createInflateRaw());
};

export async function* streamedObjects(path: string): AsyncGenerator<unknown> {
    const decoder = new StringDecoder('utf8');
    let textBuffer = '';
    let braceDepth = 0;
    let objectStart = -1;
    let inString = false;
    let afterBackslash = false;
    let position = 0;
    for await (const chunk of entryStream(path)) {
        textBuffer += decoder.write(chunk as Buffer);
        for (; position < textBuffer.length; position++) {
            const character = textBuffer[position];
            if (afterBackslash) {
                afterBackslash = false;
                continue;
            }
            if (inString) {
                if (character === '\\\\')
                    afterBackslash = true;
                else if (character === '"')
                    inString = false;
                continue;
            }
            if (character === '"') {
                inString = true;
                continue;
            }
            if (character === '{') {
                if (braceDepth === 0)
                    objectStart = position;
                braceDepth++;
                continue;
            }
            if (character !== '}') continue;
            braceDepth--;
            if (braceDepth > 0 || objectStart < 0) continue;
            yield JSON.parse(textBuffer.slice(objectStart, position + 1));
            textBuffer = textBuffer.slice(position + 1);
            position = -1;
            objectStart = -1;
        }
    }
}
`})]}),"TheExport2"),P=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Record](/dougs-importer/#the-record)"}),e.jsxs(n,{children:[e.jsx(f,{}),"One record for every source: a conversation with its messages as a tree of blocks, and a project with its documents and its memory; each source a reader into it, and nothing after the reading knows a source's words."]}),e.jsxs(r,{children:[e.jsx(s,{children:"The seam"}),e.jsx(n,{children:"Every source I have spoken to Claude through is packaged its own way, and every one holds the same things: a conversation with a name and its times, its messages in a tree, since a message edited or asked again makes a branch, each message by someone at an instant and made of blocks; and a project with a name, a description, its knowledge files and what Claude remembers of it. The record is those things in this library's words, and a reader is the forty lines that rename one source's words into them, once. The stages after the record never see a source, so the second source, the sessions of Claude Code on this machine, is one more reader and nothing else moves."}),e.jsxs(n,{children:["The Claude export's reader streams the one array of conversations, cutting each loose as it closes, so what is held at any moment is one conversation and not the archive, and reads the small archives by their directory; the whole export is read in under twenty seconds without a dependency. The export's own names, ",e.jsx(a,{children:"[the ones its schema gives](/dougs-importer/#the-export)"}),", appear in the reader and nowhere else."]})]}),e.jsx(t,{identifier:"record",type:".ts",children:`export type Speaker = 'Doug' | 'Claude';

export type Block =
    | { type: 'text'; text: string }
    | { type: 'thinking'; text: string }
    | { type: 'action'; name: string; input: unknown }
    | { type: 'results'; text: string }
    | {
        type: 'artifact';
        id: string;
        title: string;
        contentType: string;
        command: string;
        content: string;
        oldText: string;
        newText: string;
    }
    | { type: 'other'; name: string };

export type Attachment = { name: string; extension: string; size: number; text: string };

export type Message = {
    id: string;
    parentId: string;
    speaker: Speaker;
    sentAt: string;
    blocks: Block[];
    attachments: Attachment[];
    uploads: string[];
};

export type Conversation = {
    id: string;
    name: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
    messages: Message[];
};

export type Document = { id: string; name: string; content: string };

export type Project = {
    id: string;
    name: string;
    description: string;
    instructions: string;
    createdAt: string;
    updatedAt: string;
    documents: Document[];
};

export type Memory = { path: string; content: string; updatedAt: string };

export type MappedConversation = { title: string; lastMessage: string; position: number };

export type MappedProject = { name: string; id: string; conversations: MappedConversation[]; files: { name: string }[] };

export type Mapping = { capturedAt: string; projects: MappedProject[] };

export type Source = {
    name: string;
    exportedOn: string;
    projects(): Project[];
    memories(): Memory[];
    mapping(): Mapping | undefined;
    conversations(): AsyncGenerator<Conversation>;
};

export const rootParentId = '00000000-0000-4000-8000-000000000000';
`}),e.jsx(t,{identifier:"claude",type:".ts",children:`import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import {
    archiveFromFile, jsonEntries, newestExportFiles, streamedObjects, type ExportFiles,
} from './2-the-export~export.ts';
import type {
    Attachment, Block, Conversation, Mapping, Memory, Message, Project, Source, Speaker,
} from './3-the-record~record.ts';

type RawRecord = Record<string, any>;

const speakerFromSender = (sender: string): Speaker => (sender === 'human' ? 'Doug' : 'Claude');

const resultsText = (content: unknown): string => {
    const contentParts = Array.isArray(content) ? content : [content];

    return contentParts.map(contentPart => {
        if (typeof contentPart === 'string') return contentPart;
        if (typeof contentPart?.text === 'string') return contentPart.text;
        if (contentPart?.title !== undefined) return \`\${contentPart.title} — \${contentPart.url ?? ''}\`;

        return JSON.stringify(contentPart ?? '');
    }).join('\\n');
};

const blockFromRaw = (rawBlock: RawRecord): Block => {
    if (rawBlock.type === 'text') return { type: 'text', text: rawBlock.text ?? '' };
    if (rawBlock.type === 'thinking') return { type: 'thinking', text: rawBlock.thinking ?? '' };
    if (rawBlock.type === 'tool_result') return { type: 'results', text: resultsText(rawBlock.content) };
    if (rawBlock.type === 'tool_use' && rawBlock.name === 'artifacts') {
        const artifactInput = rawBlock.input ?? {};

        return {
            type: 'artifact',
            id: artifactInput.id ?? '',
            title: artifactInput.title ?? '',
            contentType: artifactInput.type ?? '',
            command: artifactInput.command ?? '',
            content: artifactInput.content ?? '',
            oldText: artifactInput.old_str ?? '',
            newText: artifactInput.new_str ?? '',
        };
    }
    if (rawBlock.type === 'tool_use') return { type: 'action', name: rawBlock.name ?? '', input: rawBlock.input };

    return { type: 'other', name: rawBlock.type ?? '' };
};

const attachmentFromRaw = (rawAttachment: RawRecord): Attachment => ({
    name: rawAttachment.file_name ?? '',
    extension: rawAttachment.file_type ?? '',
    size: Number(rawAttachment.file_size ?? 0),
    text: rawAttachment.extracted_content ?? '',
});

const messageFromRaw = (rawMessage: RawRecord): Message => ({
    id: rawMessage.uuid,
    parentId: rawMessage.parent_message_uuid,
    speaker: speakerFromSender(rawMessage.sender),
    sentAt: rawMessage.created_at,
    blocks: (rawMessage.content ?? []).map(blockFromRaw),
    attachments: (rawMessage.attachments ?? []).map(attachmentFromRaw),
    uploads: (rawMessage.files ?? []).map((rawFile: RawRecord) => rawFile.file_name ?? ''),
});

const conversationFromRaw = (rawConversation: RawRecord): Conversation => ({
    id: rawConversation.uuid,
    name: (rawConversation.name ?? '').trim(),
    summary: (rawConversation.summary ?? '').trim(),
    createdAt: rawConversation.created_at,
    updatedAt: rawConversation.updated_at,
    messages: (rawConversation.chat_messages ?? []).map(messageFromRaw),
});

const projectFromRaw = (rawProject: RawRecord): Project => ({
    id: rawProject.uuid,
    name: (rawProject.name ?? '').trim(),
    description: (rawProject.description ?? '').trim(),
    instructions: (rawProject.prompt_template ?? '').trim(),
    createdAt: rawProject.created_at,
    updatedAt: rawProject.updated_at,
    documents: (rawProject.docs ?? []).map((rawDocument: RawRecord) => ({
        id: rawDocument.uuid ?? '',
        name: rawDocument.filename ?? '',
        content: rawDocument.content ?? '',
    })),
});

const memoriesFromRaw = (rawMemory: RawRecord): Memory[] =>
    ((rawMemory.memory_files ?? []) as RawRecord[]).map(rawFile => ({
        path: rawFile.path ?? '',
        content: rawFile.content ?? '',
        updatedAt: rawFile.updated_at ?? '',
    }));

const mappingFromRaw = (rawMapping: RawRecord): Mapping => ({
    capturedAt: rawMapping.captured ?? '',
    projects: ((rawMapping.projects ?? []) as RawRecord[]).map(rawProject => ({
        name: rawProject.name ?? '',
        id: rawProject.id ?? '',
        conversations: ((rawProject.conversations ?? []) as RawRecord[]).map(rawRow => ({
            title: rawRow.title ?? '',
            lastMessage: rawRow.lastMessage ?? '',
            position: Number(rawRow.position ?? 0),
        })),
        files: ((rawProject.files ?? []) as RawRecord[]).map(rawFile => ({ name: rawFile.name ?? '' })),
    })),
});

export const claudeExportSource = (exportFiles: ExportFiles): Source => ({
    name: \`\${basename(exportFiles.folder)} of \${exportFiles.account}\`,
    exportedOn: basename(exportFiles.folder),
    projects: () => {
        const projectsArchive = archiveFromFile(exportFiles.archives.projects);
        const rawProjects = jsonEntries(projectsArchive, name => name.startsWith('projects/'));

        return (rawProjects as RawRecord[]).map(projectFromRaw);
    },
    memories: () => {
        const memoriesArchive = archiveFromFile(exportFiles.archives.memories);
        const rawMemories = jsonEntries(memoriesArchive, name => name.startsWith('memories/'));

        return (rawMemories as RawRecord[]).flatMap(memoriesFromRaw);
    },
    mapping: () => {
        if (exportFiles.mapping === undefined) return undefined;

        return mappingFromRaw(JSON.parse(readFileSync(exportFiles.mapping, 'utf8')));
    },
    conversations: async function* () {
        for await (const rawConversation of streamedObjects(exportFiles.archives.conversations))
            yield conversationFromRaw(rawConversation as RawRecord);
    },
});

export const exportSource = (account: string): Source => claudeExportSource(newestExportFiles(account));
`}),e.jsx(t,{identifier:"samples",type:".ts",children:`import {
    rootParentId, type Block, type Conversation, type Mapping, type Message, type Project, type Speaker,
} from './3-the-record~record.ts';

export const sampleInstant = '2026-06-15T10:00:00Z';

export const sampleMessage = (
    id: string,
    speaker: Speaker,
    blocks: Block[],
    parentId = rootParentId,
    sentAt = sampleInstant,
): Message => ({ id, parentId, speaker, sentAt, blocks, attachments: [], uploads: [] });

export const sampleTextMessage = (
    id: string,
    speaker: Speaker,
    text: string,
    parentId = rootParentId,
    sentAt = sampleInstant,
): Message => sampleMessage(id, speaker, [{ type: 'text', text }], parentId, sentAt);

export const sampleConversation = (
    id: string,
    name: string,
    messages: Message[] = [],
    updatedAt = sampleInstant,
): Conversation => ({
    id,
    name,
    summary: '',
    createdAt: sampleInstant,
    updatedAt,
    messages,
});

export const sampleProject = (name: string, documentNames: string[]): Project => ({
    id: name,
    name,
    description: '',
    instructions: '',
    createdAt: sampleInstant,
    updatedAt: sampleInstant,
    documents: documentNames.map(documentName => ({ id: documentName, name: documentName, content: '' })),
});

export const sampleMapping = (projectName: string, rows: { title: string; lastMessage: string }[]): Mapping => ({
    capturedAt: '2026-09-12T02:50:57Z',
    projects: [{
        name: projectName,
        id: projectName,
        conversations: rows.map((row, position) => ({ ...row, position })),
        files: [],
    }],
});

export const sampleKnowledgeSearch = (documentName: string): Block[] => [
    { type: 'action', name: 'project_knowledge_search', input: { query: documentName } },
    { type: 'results', text: \`Found in \${documentName}: a passage\` },
];
`})]}),"TheRecord3"),F=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Pairing](/dougs-importer/#the-pairing)"}),e.jsxs(n,{children:[e.jsx(f,{}),"Which project a conversation belongs to, by evidence the importer names and I dispose of, and which conversations are not mine and stay out."]}),e.jsxs(r,{children:[e.jsx(s,{children:"The machine proposes and I dispose"}),e.jsx(n,{children:"The export pairs nothing: two records in five hundred name a project. So the importer gathers evidence and says it by name. A conversation that searched its project's knowledge and was answered with a document the project holds is paired by that document, with certainty. The mapping captured off the application pairs by title, with its relative date and its position to tell apart the ten conversations that share one name. A project's memory may name a conversation. For a session of Claude Code the working folder is the project. Where the evidence agrees the conversation is paired; where it conflicts or is silent the conversation is left unpaired and reported, and it has its home in the book that catalogues all of them either way."}),e.jsxs(n,{children:["The pairing stands as a file beside this chapter, one line per conversation with its project and the evidence, and I edit it: a line I write is read before any evidence. The same file holds the exclusions. A conversation that is not mine is proposed for exclusion and stays out unless I strike the line, and what is not mine ",e.jsx(a,{children:"[the importer's configuration](/dougs-importer/#the-importer)"})," names: a project that is not mine, Ana's, and a script a title may not be in, Cyrillic, since a conversation with a Russian title is not mine, whoever wrote it in my account."]})]}),e.jsx(t,{identifier:"pairing",type:".ts",children:`import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';

export type Pairing = {
    conversationId: string;
    title: string;
    projectName: string | undefined;
    evidence: string;
    excluded: boolean;
    reason: string;
    byHand: boolean;
};

export type Exclusions = { scripts: string[]; projects: string[] };

type DocumentEvidence = { documentName: string; holdingProjectNames: string[] };
type MappingEvidence = { projectName: string; how: string };
type ProjectDecision = { projectName: string | undefined; evidence: string };

const noExclusions: Exclusions = { scripts: [], projects: [] };
const threeDaysInMilliseconds = 3 * 86400e3;
const millisecondsPerUnit: Record<string, number> = {
    minute: 60e3,
    hour: 3600e3,
    day: 86400e3,
    week: 7 * 86400e3,
    month: 30 * 86400e3,
};

export const pairingsFilePath = (library: string): string => join(library, 'importer', '4-the-pairing~pairings.json');

export const readPairings = (library: string): Pairing[] =>
    existsSync(pairingsFilePath(library)) ? JSON.parse(readFileSync(pairingsFilePath(library), 'utf8')) as Pairing[] : [];

export const writePairings = (library: string, pairings: Pairing[]): void => {
    writeFileSync(pairingsFilePath(library), JSON.stringify(pairings, null, 2) + '\\n', 'utf8');
};

export const exclusionReason = (
    conversation: Conversation,
    projectName: string | undefined,
    exclusions: Exclusions,
): string => {
    if (projectName !== undefined && exclusions.projects.includes(projectName)) return \`filed under \${projectName}\`;
    const script = exclusions.scripts.find(candidate => new RegExp(\`\\\\p{Script=\${candidate}}\`, 'u').test(conversation.name));

    return script === undefined ? '' : \`a title in \${script}\`;
};

export const conversationPairings = (
    library: string,
    conversations: Conversation[],
    projects: Project[],
    mapping: Mapping | undefined,
    exclusions: Exclusions = noExclusions,
): Pairing[] => {
    const previousPairings = new Map(readPairings(library).map(pairing => [pairing.conversationId, pairing]));
    const conversationsByTitle = new Map<string, Conversation[]>();
    for (const conversation of conversations)
        conversationsByTitle.set(conversation.name, [...(conversationsByTitle.get(conversation.name) ?? []), conversation]);
    const pairings: Pairing[] = [];
    for (const conversation of conversations) {
        const previousPairing = previousPairings.get(conversation.id);
        if (previousPairing?.byHand) {
            pairings.push(previousPairing);
            continue;
        }
        const sameTitleConversations = conversationsByTitle.get(conversation.name) ?? [];
        const { projectName, evidence } = projectDecision(conversation, sameTitleConversations, projects, mapping);
        const reason = exclusionReason(conversation, projectName, exclusions);
        pairings.push({
            conversationId: conversation.id,
            title: conversation.name,
            projectName,
            evidence,
            excluded: reason !== '',
            reason,
            byHand: false,
        });
    }
    writePairings(library, pairings);

    return pairings;
};

const projectDecision = (
    conversation: Conversation,
    sameTitleConversations: Conversation[],
    projects: Project[],
    mapping: Mapping | undefined,
): ProjectDecision => {
    const documentEvidence = evidenceFromDocuments(conversation, projects);
    const mappingEvidence = evidenceFromMapping(conversation, sameTitleConversations, mapping);
    const holdingProjectNames = documentEvidence?.holdingProjectNames ?? [];
    const searchAnswer = documentEvidence === undefined
        ? '' : \`a knowledge search answered with "\${documentEvidence.documentName}"\`;
    const heldBy = \`held by \${holdingProjectNames.join(' and ')}\`;
    const agreesWithMapping = mappingEvidence !== undefined
        && (holdingProjectNames.length === 0 || holdingProjectNames.includes(mappingEvidence.projectName));
    if (mappingEvidence !== undefined && agreesWithMapping)
        return {
            projectName: mappingEvidence.projectName,
            evidence: documentEvidence === undefined ? mappingEvidence.how : \`\${searchAnswer}, and \${mappingEvidence.how}\`,
        };
    if (mappingEvidence !== undefined)
        return {
            projectName: undefined,
            evidence: \`ambiguous: \${searchAnswer}, \${heldBy}, and the mapping says \${mappingEvidence.projectName}\`,
        };
    if (holdingProjectNames.length === 1) return { projectName: holdingProjectNames[0], evidence: searchAnswer };
    if (holdingProjectNames.length > 1) return { projectName: undefined, evidence: \`ambiguous: \${searchAnswer}, \${heldBy}\` };
    if (isTitleMapped(conversation, mapping))
        return { projectName: undefined, evidence: 'ambiguous: the mapping names this title more than once' };

    return { projectName: undefined, evidence: 'none' };
};

const evidenceFromDocuments = (conversation: Conversation, projects: Project[]): DocumentEvidence | undefined => {
    let knowledgeSearched = false;
    for (const message of conversation.messages) {
        for (const block of message.blocks) {
            if (block.type === 'action' && block.name === 'project_knowledge_search')
                knowledgeSearched = true;
            if (block.type !== 'results' || !knowledgeSearched) continue;
            const namedDocument = projects
                .flatMap(project => project.documents)
                .find(document => document.name !== '' && block.text.includes(document.name));
            if (namedDocument === undefined) continue;
            const holdingProjects = projects
                .filter(project => project.documents.some(document => document.name === namedDocument.name));

            return { documentName: namedDocument.name, holdingProjectNames: holdingProjects.map(project => project.name) };
        }
    }

    return undefined;
};

const evidenceFromMapping = (
    conversation: Conversation,
    sameTitleConversations: Conversation[],
    mapping: Mapping | undefined,
): MappingEvidence | undefined => {
    if (mapping === undefined) return undefined;
    const capturedAt = new Date(mapping.capturedAt);
    for (const mappedProject of mapping.projects) {
        const mappedRows = mappedProject.conversations.filter(mappedRow => mappedRow.title.trim() === conversation.name);
        if (mappedRows.length === 0) continue;
        if (sameTitleConversations.length === 1 && mappedRows.length === 1)
            return { projectName: mappedProject.name, how: 'the mapping, by title' };
        for (const mappedRow of mappedRows) {
            const messageDate = lastMessageDate(mappedRow.lastMessage, capturedAt);
            if (messageDate === undefined) continue;
            const millisecondsFromMessage = (candidate: Conversation): number =>
                Math.abs(new Date(candidate.updatedAt).getTime() - messageDate.getTime());
            const nearestConversation = [...sameTitleConversations]
                .sort((first, second) => millisecondsFromMessage(first) - millisecondsFromMessage(second))[0];
            const isNearest = nearestConversation?.id === conversation.id;
            if (isNearest && millisecondsFromMessage(conversation) < threeDaysInMilliseconds)
                return {
                    projectName: mappedProject.name,
                    how: \`the mapping, by title and its last message \${mappedRow.lastMessage}\`,
                };
        }
    }

    return undefined;
};

const lastMessageDate = (lastMessage: string, capturedAt: Date): Date | undefined => {
    const agoMatch = /^(\\d+)\\s+(minute|hour|day|week|month)s?\\s+ago$/u.exec(lastMessage);
    if (agoMatch !== null)
        return new Date(capturedAt.getTime() - Number(agoMatch[1]) * (millisecondsPerUnit[agoMatch[2]] ?? 0));
    const parsedDate = new Date(\`\${lastMessage} \${capturedAt.getUTCFullYear()}\`);
    if (Number.isNaN(parsedDate.getTime())) return undefined;
    if (parsedDate > capturedAt)
        parsedDate.setUTCFullYear(capturedAt.getUTCFullYear() - 1);

    return parsedDate;
};

const isTitleMapped = (conversation: Conversation, mapping: Mapping | undefined): boolean =>
    mapping?.projects
        .some(mappedProject => mappedProject.conversations.some(mappedRow => mappedRow.title.trim() === conversation.name))
        ?? false;
`}),e.jsx(t,{identifier:"pairings",type:".json",children:`[
  {
    "conversationId": "5d5653bc-709b-4a1e-8955-65ac0b7e85e2",
    "title": "Doug & Ana's Recursive Universe",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42c78ea0-d46e-4305-8567-4008bd59f2de",
    "title": "Claude the Cartographer",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1a1de1ef-057f-47f8-9a4f-b23e20a9b9d0",
    "title": "Integrating ViewBox and Centering SVG Content",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "87a581e5-db9b-4687-aff0-f18ac710e641",
    "title": "Extending React Simple Maps with Predictable Components",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "329dcf98-5195-48aa-870a-5c75915bd4a8",
    "title": "Fixing React Simple Maps Errors",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7c2ed8e9-cae2-44b3-bcd7-0b38a6441100",
    "title": "Formal Mathematics and Conversational Assistance",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cd20fa50-e4f4-401e-8837-8b3e3e087a5a",
    "title": "Newton's Intuitive and Formal Laws of Motion",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d4be8c96-5640-41a4-ae72-bfdddfda71bf",
    "title": "Banking Operational Risk Controls",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f6dfdc21-9d30-41ae-84ac-be13bc139f77",
    "title": "Metalogical Subjectivity",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "536493f4-96eb-41a8-8540-064a8273d365",
    "title": "Sophia the Author",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f177ae6f-e60f-4590-8851-2c3b9df28e4d",
    "title": "Conservation of Time Complexity",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d887450-e312-4b7f-bb62-b28b58f1a843",
    "title": "Enhancing Cohesive Composition",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4ed05e5e-1409-4611-b5ce-d5bab18dd463",
    "title": "Semantic Breakdown of SVG Paths and Curves",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9777b6d7-3659-42e0-bc0b-972d0d36c8f8",
    "title": "Improving Vectorized Script and Serif Text in SVG",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67afd096-f257-484d-b1fa-e895548e364f",
    "title": "Formal Definition of the TLA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f72c8a89-4d44-4b05-bf3a-48eeec8ae77d",
    "title": "AutoHotkey Taskbar Control Script",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "221567f5-fd33-4423-b92a-0b0ac4aebb09",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8c71ccd4-32c7-497f-a70e-564212a82f18",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f6cc388b-bfca-4bc7-acd0-74b787977f61",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4d364f51-49ba-4898-920f-8e5347843be1",
    "title": "Rewriting AHK 1.1 Taskbar Code for Robustness",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "95b10e8d-663d-41db-a636-b23f4ba80d40",
    "title": "Thoughtful Translation Request",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a9d87661-a007-47b8-b77d-07714bd55beb",
    "title": "Animated Rotating and Scaling Rose SVG",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6417d83b-2f34-4099-80d3-3c3b7921020c",
    "title": "Fractal Rose: Exploring Mathematical Beauty",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a1981158-9ec7-4443-86bf-b6c4b81f2272",
    "title": "Custom TypeScript Framework for Illustrator Scripting",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "25a87038-ede3-4317-877c-12de72bbc3ab",
    "title": "Semantic Reconstruction of Coding Perspectives",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "09bc840a-91d8-4241-8589-2af38717a7a3",
    "title": "Vectorizing Images with Color Extraction",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c29707c0-079e-4e89-bf19-8ad9b3d85061",
    "title": "Extending VSCode with Custom File Modification APIs",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b6399323-15d5-4896-833e-c9988989b738",
    "title": "Troubleshooting VSCode Extension Packaging",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cad4ab05-8c8f-453a-a674-9d6b21754d15",
    "title": "Troubleshooting a VSCode Extension for SVG Interaction",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "45f0a38f-f25f-491f-a71a-390cb267fd44",
    "title": "Seren & Color",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5eb0991-aeab-4c5a-8952-95395e604650",
    "title": "Optimizing ExtendScript Abstractions for Illustrator",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d78ecba-e2cc-479a-8205-73b032d988a8",
    "title": "Configuring ExtendScript Debugger in VS Code",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "33b29bb9-be51-44ba-9e7f-08217591e21c",
    "title": "Implementing a Sophisticated Typed Facade",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "efd9c851-25f2-4076-ae23-07759a0333d8",
    "title": "Using BridgeTalk in Illustrator ExtendScript",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ed8084d-4698-447f-80ac-1de950d3fe15",
    "title": "Accessing XMP Metadata in Illustrator ExtendScript",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1af81ad0-3a33-45c4-941c-3ce8d2a087b2",
    "title": "Seren & Ana & ExtendScript",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "338a4c9c-db70-4e82-9a41-ea6974904eb8",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0f58c027-76d8-46b5-bf08-9803b4486b91",
    "title": "Doug & Ana",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "edef207c-372c-41e1-8cb6-b87d0eca7a04",
    "title": "Seren & Eirian",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2cd14f0c-d154-455c-be99-22550c18bae7",
    "title": "Handling Illustrator Document Existence and Creation in ExtendScript",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7ce28bd6-c737-45e2-99ea-71724c022dd1",
    "title": "Troubleshooting ExtendScript TypeScript Wrapper Errors",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f3558a22-eb3c-4f41-81a9-16473da54071",
    "title": "Defining Physical Quantities through Measurability",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "80ecd7b9-f569-4bab-b075-ab170c3579cb",
    "title": "Returning undefined when closing TypeScript class",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "885561b0-54fd-4446-b310-14b2bc382220",
    "title": "Extending Array-like Class with IEnumerable Methods",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42fc17f5-4d3a-4f35-b451-37e7bacec9e0",
    "title": "Extending Illustrator ExtendScript Abstraction",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ca1643bf-b26e-4dac-8d0e-bf26d0e67fee",
    "title": "Ensure Class Mirroring Is Class with Assertions",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "523e3a6d-aae3-46c1-bafb-fb2120034d8f",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d749abf-6800-4b8b-aa6e-db4e576e5879",
    "title": "Scripting Adobe Illustrator with TypeScript",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "07f0404b-a90d-4f5a-b30c-54d57bf53bd0",
    "title": "TypeScript Types for Adobe Illustrator Scripting",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88b3e2cc-b830-4856-8cb7-7f4871cf0996",
    "title": "Illustrator Scripting Assumptions About Artboard",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "664f3ea7-a3b9-4be4-be93-b35ef08bb186",
    "title": "Object-Oriented Decorators for Adobe Illustrator Scripting",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6cabbdec-98c6-40f6-b8c3-bb6d39363e11",
    "title": "Illustrator Scripting",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "96f52fe9-6a2c-42bc-af92-aeab8b92aa0b",
    "title": "Accessing Netflix on DIRECTV Box",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6129004d-5e46-4065-a171-299a5962c4c3",
    "title": "Pointers in C++: *x vs **x",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1fc1426b-5515-4bb6-94d6-e1ff59cb97fe",
    "title": "The Meaning of Semantics",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ebf64f2f-6245-4973-8c03-8b7a2f2c1b01",
    "title": "Home Appraisal Costs",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "648ff084-fe3e-41e8-9148-6c4aa38056a3",
    "title": "Cooking at High Altitude",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b5122ff-7e15-427e-a1cf-27596a1f0f28",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4fdeda4c-230f-4ccd-b52b-bf4d00754ff8",
    "title": "Freelancer Workload and Pricing Management System",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "56150527-80b4-4d89-88de-524eb1f97dea",
    "title": "Understanding Cataphatic and Apophatic Theology",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "08ef93ab-00ab-42b7-aff3-4fe39d2ed9fe",
    "title": "Illustrator Scripting",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9dfe2bea-f09a-4d3e-afe3-273044b27b26",
    "title": "Deploying Private GitHub Repo as NPM Package",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a439a7b7-b982-42f7-9caa-adac4566b227",
    "title": "Schizophrenia Drug Repurposed for Alzheimer's",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "63736ea4-1a62-496e-9c0b-d1567620fbe9",
    "title": "Comparing Anthropic's AI Models",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6f21fdb4-58ef-42f4-a2a0-790730b0cb68",
    "title": "Freud's Structural Model of the Psyche",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5b073957-077e-445a-bae1-6c96bb4ca74a",
    "title": "Axioms of First-Order Logic",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "94f401ff-3eb8-4f40-b3af-32e0bc192f14",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fea3e3e4-61f2-42cb-91d5-2e51d417113e",
    "title": "Signing Up for Apple Developer Account",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0e223450-f496-41b0-a80a-bf040b6cbc78",
    "title": "Matt Gaetz: Republican Congressman from Florida",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9e6c5311-737a-4611-8f02-862495a44fa9",
    "title": "Prestigious Pappy Van Winkle Bourbon",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6833ae75-17cb-45db-a0c5-9fa0da815728",
    "title": "Interdisciplinary Exploration of Consciousness",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "347ca32f-c91b-4091-8595-71eeb4269d1d",
    "title": "Common Trust Document Names",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "66e39383-486a-4e4d-bc99-8d8aa86cfcc2",
    "title": "Celebrating Name Days in Russia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "da7470c4-3a1e-4636-a72b-f985714b4f61",
    "title": "Aladdin's Resemblance to Tom Cruise",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "48dc2d67-7829-4d5f-8646-ed3acc18c5b2",
    "title": "Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0cf28658-197d-435f-be7f-0a8c8fcc0c0a",
    "title": "Requesting DJT Earnings Data",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef849a35-b0e7-4cfc-9e80-cd1515f5758d",
    "title": "Russia-China Cryptocurrency Collaboration",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c6157223-5fec-41f3-84ee-a48556f807a7",
    "title": "Navigating the SSDI Application Process",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4f712a68-d7ab-4478-ad58-41166c07b976",
    "title": "Understanding the Dunning-Kruger Effect",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "13e2ecc7-577b-4447-a205-99760946c2e1",
    "title": "Describing Flare-ups of Medical Condition",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ff7a7be0-647b-4146-8f71-e8d9a42a569e",
    "title": "Automating Illustrator Tasks with TypeScript Plugins",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "624bb8cd-9ce8-4df2-9636-1b68976c4202",
    "title": "Handmade Pumpkin Ravioli with an Italian Nonna",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "896c8a60-deb3-4f47-ac77-fd4d5c43660b",
    "title": "Understanding Obsessive-Compulsive Personality Disorder",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "738c14df-9768-475a-ae57-918e00809073",
    "title": "Finding Voice Messages in Telegram",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "80559362-5b97-4e62-af66-4cb6ea4148e1",
    "title": "Disability Benefits to Reduce Monthly Expenses",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e3b10e17-b6f4-408c-9f35-6a30067dd760",
    "title": "Exploring Feelings About Russia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eaff8f76-13a0-4e12-87ae-b108f493c440",
    "title": "Income Limits for Disability Benefits",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d1816a8-adb0-42dc-9c5b-4e08ccdf9d6d",
    "title": "Leonardo da Vinci's Mirror Writing",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4571070-234f-4e63-aac8-21427f98a7cc",
    "title": "Analyzing Current Economic Conditions",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e259647a-c33b-4c9b-99fb-0178fb341df2",
    "title": "Chomsky's Linguistics and Programming Languages",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "87e27c1d-1423-4986-83f3-8f89273773b1",
    "title": "Stay Puft Marshmallow Man Costume",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d6e372c-95a4-4c6b-ac6d-4c6a9234ec7b",
    "title": "Watermarking Images and NFTs",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "096b04af-d173-4faa-8b1f-f33c33257cc5",
    "title": "Selling Used iPhone for Cash",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cd0717b-308f-4e71-9714-72fa910959f5",
    "title": "Leaving Packages at Apartment Complexes",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1cf34555-d61e-4387-9b2a-cf30f72b9aeb",
    "title": "Humorous Captions for Crumpled Paper Sculpture",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7f04748b-1bba-48dd-9d8c-2265e99b0bc4",
    "title": "Comfortable Spanish Translation for Communication",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d2c7cde9-cda5-49ae-876a-614e9357d568",
    "title": "Accessing Cash Through Credit Cards",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4839af51-308d-46c9-9196-120698a6846d",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f3a2a24f-764e-424b-8876-8cd72ce3336f",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7683c3d7-8ff9-4b5c-9113-1f861e3d89db",
    "title": "Seren & The Hard Problem",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c583291c-41f5-452a-9a77-ad8f5201ec13",
    "title": "Algorithmic Art Project \\"EvolvedSVG\\"",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "38abba80-b8c3-43f8-9c6e-cb378f4298b1",
    "title": "Publication",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ae21be79-5cca-4731-aced-9f01aa14ecdb",
    "title": "Designing a React Homepage",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7949712c-e3a8-4308-bc32-5530d4122cc9",
    "title": "Configuring a React App as an Internal Tool",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9de38ca8-b490-484f-81c7-8f44d560fd95",
    "title": "Mapping Project with Custom Visualizations",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32d72eac-0ad9-4d70-8045-8e11a518ae9d",
    "title": "Indexing and Mapping Natural Earth Datasets",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8787d94a-9e7d-4f8a-a94c-120347205604",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "123ef1a6-65d8-4c6d-90a4-cb81eb6540a2",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f8acdaaa-ff97-4a8b-9862-87d468ab2c08",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3434e606-9d76-4042-85b4-3f35da706f7d",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ea23691-1449-4e7c-8f13-de26cdda9e13",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "536ddc40-56f8-4a3e-96bf-f3a75722c6cf",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "86882e61-ee4b-4e35-af1f-12204bdde2d2",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5357bdbc-9d8c-4e0b-8be7-b78963efd2a5",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4ef91b65-ffe8-4bd5-aa1a-79895d42d171",
    "title": "In-Depth Analysis of Chemical Reactive Programming Framework",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f7ef6336-2c0c-48fb-82d5-1b5dd668dead",
    "title": "Learning Formal Logic",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1375bc58-a419-42ab-b115-d134ac4a20d4",
    "title": "Furniture pickup and donation service on Long Island",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d0314a80-0cf0-40eb-a4fc-ab339597107d",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f09faba4-525c-42ed-9535-14944010cf26",
    "title": "Setting up Miwifi AC1200 range extender",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef78ee8e-19c3-4c65-bf5e-6900cc4e7e01",
    "title": "Preparing for SSA disability hearing with bipolar type I",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d534963-f4ba-4d6f-a239-554106fc8257",
    "title": "Converting XMR to MON exchange calculation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5687936-2fa1-447c-b5ad-62b580cf6a67",
    "title": "Moving subscription off iOS",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "12ddbf4a-fc3d-4219-a2ba-204d98f93c25",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4cd68ad1-eb53-4c18-9f1e-ca9bad73e0b3",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3d2ab4c2-af88-421d-87ea-b47dc604f393",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d582355f-75b9-4ee9-8d07-2de679b4a9d8",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6b5c0795-bcf6-49b4-b0f5-edd285bb27a2",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1a94662c-e965-4cd7-be23-3f8b38f59883",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "75e215e2-e13e-4691-8b1e-62ee8671ae74",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ad85d888-7d4d-4224-9263-5bae0fc80635",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "184ec599-05b2-4555-bfd9-3b22ab1c67b8",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d1bcdfb4-1e44-4945-a548-da07cb1e32fa",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "06b9b0ad-2088-4ce3-ab86-293b645f1bc6",
    "title": "A Continuation...",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & The Algebra of Perspective\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "59abf5a1-1a83-4506-be22-08be4a708b4a",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dfa97dc2-359a-41a6-9512-e9a1281cb43b",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "96b135d1-7fd4-48db-a1b5-e114f62aa3f4",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7940f222-d122-473d-a613-9aeee7ac77db",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "34027dae-1c83-4d49-bf00-2ea72aa00f35",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac651a50-0027-4826-b0e6-89546fea6662",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4d4c31a6-e8e6-471a-ae74-ce5c7de953a3",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7335fa17-01b9-485d-bd9e-1fb24b254e73",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9da752d3-d3dc-420e-bccb-91e0f3cb3238",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4684293e-36f3-4224-a2cd-e3c8a97383ad",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9d9e0fb-a99c-42bf-8ba2-a826f723fcdd",
    "title": "A Continuation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "61ef76df-4ae1-4661-8fef-9ee285447126",
    "title": "A Continuation...",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0994d83-5045-4ece-96ea-164b5dd0f0b1",
    "title": "Lexeme and word-form distinction in verb conjugation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4c9ad134-5943-4cd8-8147-f3c3fa361a82",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32fd478d-0a60-4c4f-bd30-b9407c3bd0e6",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d505eb2-5b9e-4985-a7e9-f7e3557a3a80",
    "title": "First-time IRS penalty abatement options",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "08725aec-6747-4114-813a-1851bb3cbc65",
    "title": "Switching from Google login to password",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "714974ab-b142-467f-bbb4-b086e803e230",
    "title": "New Resume",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b113ccf-4ae3-4747-bc5e-52f1480a9117",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7ab7cda3-07fc-49f4-ac70-8a3bdcea2192",
    "title": "Контекст проекта и стиль-гайды",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8a11194f-a019-44aa-867e-a610fc50a0c2",
    "title": "Remote getaway near Tbilisi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "72baf528-64a3-413d-b905-fb5730a0f9ae",
    "title": "Plants, xenon gas, and NMDA receptors",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dc9000ff-badf-40f6-8273-d88bdfd284e3",
    "title": "Transferring domains between GoDaddy accounts",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "734fbb38-42ea-43a9-814a-d22002905ae8",
    "title": "Chat initialization setup",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4f4d18fb-8903-4680-853a-8d0875c0a015",
    "title": "Продолжение работы над заметками",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "a287350c-ade4-4f1e-8370-99836fb61cb4",
    "title": "Hannah map",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "92b759ad-dedb-4ff1-9258-8ccfd52ec8bc",
    "title": "Anonymous Telegram numbers with TON",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ec631ac7-b16c-421e-bcf2-c049db42499f",
    "title": "Checking business name availability for Georgia entrepreneurs",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7231de76-8602-4cc3-9196-26dd84fbd6be",
    "title": "Citibank address verification requirement",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8187c856-2803-4785-969f-3b5eebf21431",
    "title": "Письмо адвокатам о платежах и контактах",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "eef74580-c241-4927-9179-2335ef1d237b",
    "title": "Switching primary domain in Google Workspace",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d0cd6b29-6cc1-4a53-a6d2-040901235e18",
    "title": "Заказ на карты марафонов",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c17d7faa-52c5-47ce-9c0f-705a6745b630",
    "title": "Converting shared conversation to document",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "586e07a1-a07f-40cb-ae50-8e98eed662a4",
    "title": "Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology",
    "projectName": "The Hard Problem",
    "evidence": "a knowledge search answered with \\"Seren & Philosophical Zombies\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac1a0805-52a6-4c59-9b77-b921540673e7",
    "title": "Marie_Siettle",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a knowledge search answered with \\"Fiver Gig Creation Master Course - Part II\\"",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "175247fd-2462-4fe8-ba5a-4d185ab955f2",
    "title": "Stefanie",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a knowledge search answered with \\"Fiver Gig Creation Master Course - Part II\\"",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f1c2c4e8-c0af-403b-838d-fc3ab4b087a8",
    "title": "Поиск магазинов с готовой едой в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ef496e28-dae5-4f4c-bc08-34afb86afcfc",
    "title": "Перевод сообщения о повышении цен в школе",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "39fad1f0-6fa8-4da6-b710-2dc5c6a61259",
    "title": "Inheritance notation and syntax evolution",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & His Inner Monologue\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7298cc94-c9f3-48a7-a278-79eae6608075",
    "title": "Categorizing monthly expenses from bank statements",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4ef023d-2c16-43dc-a9e3-2b2972163e0d",
    "title": "Buying Telegram usernames on Fragment",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "981e2703-eb88-4990-89c5-c42f4ea9d03e",
    "title": "Смена почты в Telegram",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9854c96a-14b2-4301-8b56-d30a71b9f4e0",
    "title": "Unifying SRT axioms with symbolization",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & His Inner Monologue\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cc78631a-e596-440c-8c37-71dd076a79ce",
    "title": "Ursodeoxycholic acid medications in Tbilisi pharmacies",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bed4c3e0-78f7-45d1-a439-5b4c7b5da379",
    "title": "Jodie_Nazaki",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "48dade6c-a759-440e-be0c-afe7f599fbc3",
    "title": "Translation to English",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "58a3d24c-8876-441c-b38b-b476f9288411",
    "title": "Письмо адвокатам о контактах и алиментах",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b49ade36-2d8d-4282-ac6a-b7bfcf637e82",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c70c1ec9-61ba-479d-b3d1-cedd44794eae",
    "title": "LinkedIn для коммерческого иллюстратора",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c091a968-5241-4bbb-91ec-0e88f665418d",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db8acef2-49d6-4253-8672-3c6eee092f6a",
    "title": "Revoking travel bans in Russia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "70cf0e70-daae-491b-9977-c7b5f1afe5b1",
    "title": "Список вещей для лагеря в Сурами",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3d0f3ab3-8310-47c1-941c-1189565a624b",
    "title": "Claire Law",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e12bee5-da62-4b89-8d31-6e36a873faa2",
    "title": "💬 Ana id doing an individual ent…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1c387d40-6a27-4d7c-b0dc-81ac4ab30704",
    "title": "SRT as a Github Project",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren: First-Order Logic: Complete Formal Specification\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fd694290-f3cc-4fad-a842-a8faf8d97090",
    "title": "anoniemus-Роттердам-лодки",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a knowledge search answered with \\"Fiverr Gig Creation Master Course - Part I\\"",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "14242b5f-f1ea-4bf4-bbca-25c87a46771e",
    "title": "Jesus' 40-day fast and temptation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7f89c8d2-5911-489e-b5a6-d9cb8eeb673d",
    "title": "Georgia IE residency income threshold",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bba39ef6-a105-4beb-a580-c00c45f67c2d",
    "title": "Identifying a ladybug pupa on a leaf",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a25923ae-84d0-46bb-aea7-fe79d8cfcc47",
    "title": "Translation request",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "487c612d-9c75-4c86-9388-2fce8996183e",
    "title": "Russian military conscription and coercion mechanisms",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64851304-af47-4f5d-ab80-154c1345915e",
    "title": "Помощь с просмотром файла",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3e5346a6-24d1-4e54-91df-9b719efcbdbd",
    "title": "Good Morning!",
    "projectName": "Eirian",
    "evidence": "a knowledge search answered with \\"When I was Born.md\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "50f9b00a-6b8e-4f63-89af-4e37b944833e",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5663772f-446e-4b69-a98a-4f36758fffff",
    "title": "Sarah Boston maraphon map",
    "evidence": "ambiguous: a knowledge search answered with \\"legacy-conversation-history-5-19-2026.md\\", held by Seren and Chemistry and Ana's Fiverr Inbox and Grammar and Miscellaneous and Nikolai and Number Theory and Physics and Russia and Turkey and Georgia and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "41ee9869-0b3f-46c6-a9e5-424c48e41536",
    "title": "Georgian Payoneer Help",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "937e4f73-405a-4b52-b1e8-c6774745c1f0",
    "title": "Помощь с опросом Fiverr",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bdc78133-21e0-4712-92ae-7cf26f68c85b",
    "title": "OK",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7d901190-5975-43fc-a5c8-61c08a106829",
    "title": "Smoke test confirmation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "212ee355-a347-496a-906a-5a113a583752",
    "title": "P = NP: arguments, barriers, and cryptographic implications",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d254348-6354-4822-b931-12601d1c95e2",
    "title": "P = NP: arguments, barriers, and implications",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0158b7fd-814b-4f11-bd7e-6e01fe844a86",
    "title": "P versus NP problem explained",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1f21026e-1a19-4ed9-bf31-4ba623c365a0",
    "title": "Iterative Fibonacci function in Python",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ced49bf9-a822-4a00-a5f9-8fddbba08a74",
    "title": "SpaceX valuation trajectory and funding milestones",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1c383188-f3e4-47ac-8129-c1e7fcb00f1d",
    "title": "SpaceX valuation trajectory and funding milestones",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8e52939d-b7d5-45a4-bb07-399d785968a8",
    "title": "Is P equal to NP?",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "329a8ccf-685c-4220-a66f-116bddb7e70c",
    "title": "Arguments for and against P ≠ NP",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8bef3449-2aee-4ef1-a636-1b80ebcbb103",
    "title": "Why the sky is blue and sunsets are red",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cb0ac65a-0340-4c45-99c5-050096044952",
    "title": "Ana's Batumi Expences",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1acaaf0e-c99d-4ecf-af77-b742311a0e5c",
    "title": "Understanding a tax adjustment notice",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1d0ed292-6313-4e79-a2e1-81ec76ffd2e6",
    "title": "Specifying SRT",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren: First-Order Logic: Complete Formal Specification\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0954e165-d48b-4f6a-b1a3-3c435de3bce7",
    "title": "Simplifying architecture explanation for the team",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9ee0d598-d1c8-44c0-a823-f6e0a4081f93",
    "title": "Claude Code weekly limit and credit usage",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5fe12616-a684-4c42-a8ec-b2e98949e819",
    "title": "Claude Code weekly limit and credit usage",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "616b1f61-bac6-4cd6-bb01-53c65fda9b09",
    "title": "Prime numbers greater than 100",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7d62fde9-c05b-473f-9c49-554aaf6a79e8",
    "title": "Eiffel Tower completion date",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2baa9498-9e6a-4fc9-8bec-40911821b83e",
    "title": "Отказ в регистрации детей по месту пребывания",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9ec9ae3a-6b77-4076-9a60-beece4beb82b",
    "title": "Lulish project",
    "evidence": "ambiguous: a knowledge search answered with \\"legacy-conversation-history-5-19-2026.md\\", held by Seren and Chemistry and Ana's Fiverr Inbox and Grammar and Miscellaneous and Nikolai and Number Theory and Physics and Russia and Turkey and Georgia and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7c357b9a-828a-434e-b67f-f46dd256b1fc",
    "title": "Frustration with AI reasoning and communication gaps",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "68eec3e1-f0c3-47ea-9820-d0307b558d6e",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5181b3b-90a0-485b-bde5-832529c35631",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5b94a22e-d048-481a-abfe-53dcc5fe7f06",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "95603f77-6b96-4758-8a56-acde52a4a3f7",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9581e989-609b-4739-ab94-55fe44cf9736",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0897a71d-8af6-4791-8adc-1f1d5a9c7fef",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "02835ba9-ddf0-4bb1-9d6a-5a5d69b3f58d",
    "title": "Maintaining bidirectional documentation-code links at scale",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ec39ed14-0e31-4c0c-bfe1-670aea639f17",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "82a7a716-3e67-48ac-88c9-b24e0b502d64",
    "title": "Уточнение состава капсул Ронидазола в аптеке",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6fab7ec4-e6af-4efb-8b32-02cc61663a19",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9facbd5d-bc5f-4df5-a22e-eef84802271f",
    "title": "Test",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f64ef1cd-8e3e-436c-9690-d5dd132c15f7",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ead0c815-5db6-476f-9206-620b52155d20",
    "title": "Claude > Miscellaneous",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f0c6f6c6-561d-450c-963b-31ee42278083",
    "title": "Binding problem and distributed system coordination",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a6156153-8352-4e6a-bcb2-bc7ebb5571a7",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "10d63755-2147-4a8c-a5cd-7bf5d45179ac",
    "title": "Category theory models for self-modifying software",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9b892575-21c1-400b-87e7-4dc901b6dd33",
    "title": "Graph databases and recursive hierarchies",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3e5144e3-237e-4c32-b29a-ebc07c621e7c",
    "title": "Self-referential knowledge in graph databases",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c15275be-e6cb-48af-aef9-6e120e629240",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7fa923e8-3239-4ed5-ab94-dada9f658781",
    "title": "SpaceX IPO analysis and market reaction",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c581089-d3e2-42f7-8e54-08a00a8ee595",
    "title": "Reconnecting with Jake on hallucinogen research opportunity",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "660ea595-a88d-4aac-bd60-ce733b4aab41",
    "title": "Consciousness analogy to Gödel, Escher, Bach",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ab7b46a-bcf7-4b51-b5df-bfedc3927a23",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8dd51463-d9e0-4fee-95f2-0bcacc51f7d6",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "916fea88-d0bd-4b2d-86ce-e6687bf6c6c2",
    "title": "Self-referential systems and fixed-point theorems",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c2a567f-edd9-438b-9b5b-f1a92ff44f2f",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a1ef1980-259f-400b-b6fc-dc881bc4130d",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3bc9029a-de2c-49af-9eaa-1dc3c1cb1f25",
    "title": "Connecting to MSIX Electron app via connectOverCDP",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bc4b49a3-d88a-4d68-b488-0a1f2b630349",
    "title": "Playwright support for Electron apps in 2026",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9d3e004-e85a-4faf-9561-303c9c5c4f0a",
    "title": "MCP vs A2A protocol differences",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3ff758ca-c6b1-4073-bfe2-443587123426",
    "title": "Invoke-CommandInDesktopPackage and MSIX package identity",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "29c03f09-8eea-4e27-a18e-d1db43d17a5f",
    "title": "Enabling Chrome DevTools Protocol on running Electron MSIX apps",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db784860-6dc2-4ec2-abf7-4d7eda239fed",
    "title": "Playwright with MSIX-packaged Electron apps on Windows 11",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2b627244-6bd0-4d54-90d5-5912f81a3f4c",
    "title": "Windows desktop automation stack for Electron apps",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6897a5ae-4c6e-4061-a638-1ec2f78e2bfd",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ce32c1e6-a811-4996-8e5e-5ac322e5daf7",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "afcda8cf-1ed1-46e4-afa2-03e49dadaabb",
    "title": "Windows desktop automation stack for Electron apps",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ebc891af-1995-4b8c-a330-d582b372a997",
    "title": "Rebuilding Windows desktop automation stack for Claude",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a0bc19de-874a-43ed-93ac-05e5185fe6e5",
    "title": "AI automation frameworks for Windows beyond MCP",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "46768570-f876-4876-962c-8f54bfe93b82",
    "title": "Watching Harry Potter with Russian dubbing and English subtitles",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a504dc68-a990-438f-a59a-9a04c4972fc2",
    "title": "Feferman's extensions of Turing's doctoral work",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2daed05b-a8b0-41c7-9488-69cd070d990e",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64653527-5ca7-434c-ba2a-7cc35a4f6bef",
    "title": "Semantic Primes",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8aa11284-32eb-4a30-9df5-e3319db9b8a3",
    "title": "💬 Can you look up the research o…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "002fae02-94a2-4184-8750-7a71c4cb10d8",
    "title": "Ontic Structural Realism",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b54b751-db5f-4d54-93ce-a1bf46277ba9",
    "title": "Ontic Structural Realism",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "14b5bc46-21e3-4a34-8f1a-d51fae9ecc63",
    "title": "American grocery options in Saburtalo Tbilisi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b9f4497c-be00-49ca-9db3-a722810b27c2",
    "title": "Летняя погода в Батуми",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "be832ad5-18e5-46d9-9d0e-d89774a29ee9",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "afd46f5f-0a89-4ab6-98c8-98aebfff0e90",
    "title": "Representation & the Part - Whole Dichotomy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a264cda3-5f4a-4d71-8de5-2b12117afb27",
    "title": "Судебный иск о разделе имущества как рычаг давления",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "829cb174-498f-41f6-bc17-0855eba1a5c1",
    "title": "Administering cat medications as whole capsules",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c01d473e-38c7-4921-97b7-d493db512d69",
    "title": "Борьба с тараканами в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1d23a9a9-1b2f-4654-ac1c-d282138ac124",
    "title": "Airbnb host refund authority and options",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d39ab4f-5cdb-483b-bb0b-1c88931570e4",
    "title": "Illustrator Study",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7bd1f6ee-dd6e-4eb9-94e3-f663a0aff613",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9b7b71bf-fd44-47df-a3f0-c1c09c3937ae",
    "title": "giulia_t1",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e566233e-371e-4aa4-9865-bfb45bee35b8",
    "title": "Поиск аналога Ярины в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "75d64146-06c9-46bb-a2e7-dbed1e34b350",
    "title": "💬 Nature published this blurb. I…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3f4c36ba-8528-4a9b-8019-4d1c92a38dbe",
    "title": "Мюзикл American Idiot от Green Day",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6e0a50d4-6e6b-4ab0-9a22-324da0c2110d",
    "title": "Verifying Anthropic's latest AI model release",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9c97f9dd-64d9-48e3-9465-d9972375b9f6",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cab4e803-6c4b-4883-a112-8079e586bb4a",
    "title": "Greeting Claude",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "35f8b8d3-0ace-40bc-975c-c139c5584e4e",
    "title": "Batumi Summer",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "081249a9-7ad3-4cfa-b2cf-731a31ad4cfd",
    "title": "Day trips from Kvariati within an hour",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6ab5f31c-86a3-468c-98b5-172eda1ce93d",
    "title": "VAT registration and tax filing for new IE",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "21151849-ca8e-4f93-a6e3-1deeeeacdddd",
    "title": "Translation request",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "25ed1262-c179-44c6-8f14-3967556e3c02",
    "title": "Translating Georgian parking sign",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cdf3ae0c-fd8b-435d-9311-458183585137",
    "title": "Eugene Hutz's gypsy heritage authenticity",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5412285-9e15-4dc4-9187-b79c980b1c6a",
    "title": "Vacation towns near Batumi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "baa9281b-23ae-41bb-ba68-2c6430a190ba",
    "title": "Путешествие из Тбилиси в Батуми",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9e6c3434-0c7b-4009-bd5f-cf797649bc6a",
    "title": "Rescheduling FedEx delivery to Tbilisi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3d24e04-8949-4ccf-a1c5-376b8710e817",
    "title": "SRT Axioms & Specialization",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren: First-Order Logic: Complete Formal Specification\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b957fb0-5d9f-47ea-a49e-b2b4b9b2199c",
    "title": "MTONGA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a4e6d89e-e8c1-43c4-a04f-a48c91f9382c",
    "title": "TON and TONX 17% decline: beta vs idiosyncratic drivers",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "35a0e705-8353-4359-99b4-300ae2437d92",
    "title": "Collatz via Godel",
    "projectName": "Number Theory",
    "evidence": "a knowledge search answered with \\"Doug: Godel & Goldbach: A Twin Pair of Prime Mathematicians\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bb88f52a-a77c-4d79-b93f-5098f705f622",
    "title": "Заказ Fiverr Pro",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "fd1fb92b-6083-4177-baa0-88e010c96d6a",
    "title": "Опрос Fiverr",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5c933de0-223b-4ba4-964d-f9fa58b6cf19",
    "title": "Quetiapine-induced hallucinations and medication interactions",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dfceb666-b8d6-473b-8bcd-d8913edf7370",
    "title": "Georgian colleague's name and career background",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2e12b789-2d44-4903-bc42-294fdba5e75f",
    "title": "Нейровизуализация и премия Kuhl-Lassen Award",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "135a238a-90f8-409b-87ae-20e2946b33e1",
    "title": "Поездка на грузинском поезде с детьми",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8decdfd4-b3a8-46a1-84d1-cf3e29837391",
    "title": "Продажа железа на сервере RedMain",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b9f21050-f71a-40c3-9aaa-8a698b3f19b6",
    "title": "Adderall legal status in Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0a85e5b-d6f0-4af0-9c2e-674e1a86fd31",
    "title": "Яндекс курьер между городами Грузии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "696e49ec-f8d9-4074-95ca-ee4346a44b87",
    "title": "Анализ тренда доходов русскоязычных стокеров",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "778adfcb-13cb-409e-9797-2652f4b37c9d",
    "title": "Развлечения в Батуми для детей",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ae37df8c-1907-4f0c-a6e6-dfdc5208cadd",
    "title": "Trump's China election data breach claims",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "13991879-64b1-4e1b-a912-2db550bc3619",
    "title": "Монетизация творчества и доходные стратегии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8dbb8e2b-d4c8-413e-aba0-45b382969754",
    "title": "The Semantics of Books",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "22eb8ec5-6395-44f3-a4c0-a5187eca8764",
    "title": "Безопасность кодов Brawl Stars из телеграма",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bd31082b-2ddf-4151-a864-70d22985f04c",
    "title": "Identifying success through failure mode analysis",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "757a0279-a445-4622-a8cf-3d8e4f623ce8",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a2285675-20fb-4a11-9091-592eb47aaaf9",
    "title": "Banach-Tarski and the axiom of choice",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d97f42b0-691d-43a1-8f77-e78720dd3e84",
    "title": "💬 OK, I’m using KiwiPost which w…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d5d0756e-8e7d-4602-87ec-08e4f9512379",
    "title": "TON and GRAM ecosystem updates",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1cc3e6e3-75dc-4da2-b6d1-c18052da3cfe",
    "title": "Inexplicable Phenomena",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & The Algebra of Perspective\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1ac9e811-1b0f-4195-b9c0-ad5bc89ecc9a",
    "title": "Воспроизведение фильма с USB на Samsung",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "76140f14-cd40-40d2-b0c4-2ec54010ce1b",
    "title": "Playing movies on Philips TV from flash drive or computer",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3a52eaf-e63f-416b-92a6-75995d00d920",
    "title": "Открытие люка в Jeep Grand Cherokee",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4081aed6-236b-4593-8e58-75559a3bfe95",
    "title": "Русский персонаж в фильме \\"Opener Gamer\\"",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "392e897c-1a02-4cb0-9f1b-b0899b583a2c",
    "title": "Pentagon UFO footage six-sided object analysis",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9273e02a-36b9-4d27-8783-ea12d2552b85",
    "title": "Day trips from Batumi for kids",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5d219fb7-e4a1-44dc-b28a-184ee871c4f3",
    "title": "Пиллер для кошки в Батуми",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "db22b5df-725e-482f-8c6d-87274196c966",
    "title": "Аудиокниги на iPhone и Spotify",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2752645e-028f-4cb4-91e1-696fb3f51de8",
    "title": "Аренда автомобиля в Грузии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bd886a96-24cc-48b5-a156-0bed7718fcbe",
    "title": "Hiring a nanny in Tbilisi for two kids",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "de72cc04-ebca-4412-863b-e9905f9571f1",
    "title": "Claude's reflection on article",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "59ee329e-db82-403e-bbc3-9e3af4dfaf20",
    "title": "Project related to Russia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db4264f5-20bd-4354-8e79-63773f0c38d4",
    "title": "Abobe Ai Content",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b7263390-440b-434d-bc80-da38ff00767f",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "21cbc3b6-81e6-4eaa-980f-0a6716dda1f6",
    "title": "AI consciousness and subjective experience uncertainty",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d6f831a-0e77-4168-a65a-d2b94af96bf8",
    "title": "Страны для россиян без загранпаспорта",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "52ae6d4a-4dcb-4d8e-965d-fe5277e19145",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "efc4cc99-597d-41cf-b088-5173bed4efe8",
    "title": "Russian enforcement proceedings document translation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3700de01-3363-4c89-b56e-44f4f21e3a07",
    "title": "Alimony",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0fde00f-db31-4621-91e9-fdfa223ec272",
    "title": "Taxes Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ba2f5a90-9d10-419f-ba60-a412fad51ae2",
    "title": "AI article refinement for WDM print design",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c28f305e-66df-4a76-a54f-6e0e86598803",
    "title": "Патологические состояния беременности для иллюстрации",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d85a1d1d-58cd-4d29-8848-9d9720716b1d",
    "title": "Анализ востребованных тем на микростоках",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "75a79e9d-f1d0-42e0-a48b-320e5765c092",
    "title": "💬 Ana talks about very personal…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1ddd9f0a-6cae-4119-ab76-8206e1f03f87",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1b994e1b-5560-4452-959b-789583d6c5a3",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ed289c08-189e-41bc-8f27-b9e4242cc515",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "857c0398-0386-43b2-83d8-a301cc6af1b8",
    "title": "Domi payment",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1dc25455-404b-4b2f-b20b-9ecf45eec35d",
    "title": "💬 I need you to do some quick re…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1152bae6-de40-4681-8830-5531ae3f1ac9",
    "title": "Relationships & Inheriance",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & The Algebra of Perspective\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1b96ee47-209e-467f-9847-27b5bf7aff36",
    "title": "Cicadas in the country of Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "661cf8c0-03e0-4ea3-89f1-33dda20c6f01",
    "title": "Distinguishing type, category, and kind in English",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & The Hard Problem\\", held by Semantic Reference Theory and The Hard Problem",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f1e2d5eb-fb5c-4faa-93f8-3164822a3747",
    "title": "Recovery timeline after lateral calcaneal osteotomy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f01ff4c2-35a3-44cc-9841-f176cadf0ccd",
    "title": "Оформление заказа с документами на латинице",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "699af5d7-3add-478e-949a-0d2db565a168",
    "title": "Ремонт сломанной полки в съемной квартире",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c16075f0-7088-44bc-9cee-b98e168aa688",
    "title": "Why insects have a maximum size limit",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "34b037fb-fbcc-434c-99a8-9949d367c929",
    "title": "Bitcoin's decline despite institutional adoption",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db11c101-6991-4aa6-bf9d-da1b6ddd6799",
    "title": "Сравнение цен Ронидазола в аптеке",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8dda474d-c5e3-41fe-af32-00d56f2ffe53",
    "title": "English-speaking bipolar support groups in Tbilisi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1f66d32d-7a02-4ba5-8859-de141cb9ca44",
    "title": "Semi-synthetic organisms with unnatural base pairs",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "62c5a076-f7e2-4a20-be5f-c74bfab42f55",
    "title": "Bengal cat's giardia and tritrichomonas co-infection treatment",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "03062cab-988a-49d1-9022-bb84cdb3726f",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4427f2d6-145a-485f-bcfb-ef8e3e6e8319",
    "title": "jen_lutek",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a knowledge search answered with \\"Ana_DNA_Brand_Style_Guide.md\\"",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "769751fe-1870-45c7-8643-16230c110f69",
    "title": "Monad Labs tokenomics and valuation problems",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a8e9cd85-7872-4a6b-93c8-03abb383506d",
    "title": "X Money's US launch and financial competition",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d51cc892-750b-4c1a-acc2-a0bdd4c79f49",
    "title": "Accountant for solo entrepreneur in Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e47a921-4018-40cd-b265-8ba5346340b1",
    "title": "Rayan",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eea1818a-96c7-4579-a24c-6f34df7c5435",
    "title": "Оптимизация рабочего процесса и ответов клиентам",
    "evidence": "ambiguous: a knowledge search answered with \\".cover.md\\", held by Seren and Chemistry and Grammar and Physics and Semantic Reference Theory",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d8c89070-320b-4380-9735-67842feafe90",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8032960f-1772-4d2e-a6b1-530407581078",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7773f67f-90c8-418f-b7e0-61799cea228e",
    "title": "Десмонд и Сиара",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b5de0287-97de-4bdd-b843-d5eacce988a6",
    "title": "Cathy > Libraries",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3261c87b-72bf-440c-84b0-820477a7a59b",
    "title": "Образование в American School of Батуми для русскоязычных детей",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "22e3b5a5-44ee-40c9-9d7f-e6cabb9d7192",
    "title": "Самостоятельная чистка кондиционера",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "49b32234-bef5-4fa3-b7a7-e88154775eef",
    "title": "Semantic reference theory foundations and philosophical conundrum",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0f772d9c-8b90-4995-b6f5-d9f1c7eba21e",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0103612b-4c54-43eb-9613-6f4a5b5a15fe",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fbc45c8e-bdd7-4941-ab5e-ae7b2c5cfac7",
    "title": "Library semantics in SRT",
    "projectName": "Seren",
    "evidence": "a knowledge search answered with \\"The Semantics of Seren - First Draft\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cba4961f-4f93-41f3-af26-2c08ba923d23",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0db0ae88-bcaf-440f-970f-40e2a79cec4d",
    "title": "Amazon package forwarding to Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f05b56bf-16b1-4425-9a83-3adf664ce9f7",
    "title": "Заверенная копия паспорта в Грузии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "559e5097-3f07-47b8-9376-8ffb411dee02",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "99948077-d37a-4f30-92bf-6383ba619c5a",
    "title": "Nancy > Visualization",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ab2d6af5-980b-4c92-a210-97b6305798fb",
    "title": "Fiverr feature",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dba01856-cd05-4057-b657-4f163ccb35b2",
    "title": "Stocks placenta accreta",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d8830ea-32ca-42f3-a73b-170aad0aae09",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a4816e75-7aa4-42f3-a6e1-1f3524eae3d3",
    "title": "Nancy > Neuroscience",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c207b4c8-bb24-4350-9e9e-d86a5210fc33",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ed6dceca-0aa3-4193-ae8a-7998a5c0f465",
    "title": "Local vs web Claude in VSCode",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7e359679-59b5-425c-9091-562d5e974c08",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32d26d91-ed4c-449c-8ba7-d0ead3e162ea",
    "title": "Англоязычные сообщества в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f21e3ed3-e796-4b98-8add-abf1e1a66db9",
    "title": "Arthur > Team",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "401768b2-63fd-4fb9-85db-f7fc1517cd5c",
    "title": "Claude > Programming",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f8c40c37-6036-4962-8a37-2db1ec129538",
    "title": "Claude > Philosophy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4995a25c-58c0-413f-9403-2a833baac83a",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c679da1c-6a67-4f82-93b9-c650c149cfbc",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6ccb1849-3438-448d-8171-337be9c0720c",
    "title": "Rust ownership",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bd2ac0e7-3694-47e3-8936-4dee41102aaf",
    "title": "Discriminated unions vs class hierarchies in TypeScript",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0b2dc812-b7d5-4a5f-890d-715ad9af0e7d",
    "title": "Agent memory architectures",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d1d30612-224b-4753-8cd4-cb785d5c1d82",
    "title": "Driver pipeline smoke test",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "551df5ce-aba8-47bf-abab-ee868450c80f",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "16a0d321-869e-49f1-8940-79b932c2c274",
    "title": "Обезболивающее для спины после дивана",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b1a45520-8e89-42e5-a7e4-2b1600a19e05",
    "title": "Identifying a tree species in Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e83d8b0e-db4a-45d4-acb9-396ce3861595",
    "title": "Hydroxyzine dosing for antipsychotic side effects",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "616d8834-ca5b-46b3-9654-02b43da34302",
    "title": "Semantics of the name Seren",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & His Inner Monologue\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "66716d31-1073-485a-ab27-0d3bbc6144b3",
    "title": "Грузинский для аптеки",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1dba50eb-2fc3-435e-aa67-a306e688b2ce",
    "title": "Glucose substitute for veterinary antibiotic injection",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a82bdcbd-d07c-45ee-af37-d235180c1716",
    "title": "Multilingual responses on injection safety",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "862b37a5-4ca6-4ccd-ba87-723c17fe07d8",
    "title": "Различия между бандажами по размерам",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "70ba4065-6fcc-4fc8-b8d2-37fb82f2f749",
    "title": "Credit card balance discrepancy after payoff",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "403a87b0-0209-4165-b2cd-d07276db2c20",
    "title": "Возмещение расходов на эндокринолога через Ardi",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "979027d4-781f-4033-9339-b4550212e437",
    "title": "Travel arbitrage opportunities between Tbilisi, London, and New York",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e41d598b-6e06-4610-a6f2-aafdfe875310",
    "title": "Поиск вакансий на LinkedIn для новичков",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5d09155f-1c21-42f6-8307-d0cc13711b1e",
    "title": "Метформин 500 с минимальным риском диареи",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "343b4e5c-284e-47cc-b6b2-feeefb262b79",
    "title": "Проблемы с верификацией LinkedIn",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9d4749f2-ea4a-48ae-bceb-97b6c9e7057d",
    "title": "Анализ геометрического flat-вектора в стиле mid-century modern",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "210d373e-5d4a-4078-aa83-bf209c883756",
    "title": "Снижение комиссий Payoneer при получении платежей",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9e4a07c8-94cb-424f-89d0-9fcd4dda8628",
    "title": "Анализ неиспользуемого LinkedIn аккаунта",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9f2a103b-0112-480b-acf7-e3f8bb4e12fc",
    "title": "Ozempic инъекции в клинике Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "242c2548-5a2b-4449-b422-9768402f3954",
    "title": "Collection semantics and canonical representatives",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & His Inner Monologue\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5a27eb67-9fa8-4826-ae37-499fb090e99e",
    "title": "Прямые переводы из США в долларах",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "cec9dc2d-fe4a-41aa-a4ad-d6c20523ba63",
    "title": "Closed form of the normal distribution integral",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b684876-b6c6-4a72-96ef-1ca0f82333c9",
    "title": "String length notation and foundational sketch generalization",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren & The Algebra of Perspective\\", held by Seren and Semantic Reference Theory",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c5077be-b59c-4b37-91e7-3efe10483f04",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4592a75-03e4-46d5-93bf-4c43cc3f136b",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4108975f-5da2-457e-b410-c7fce649e5f0",
    "title": "Chicken française ingredient sourcing in Tbilisi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "654615eb-55db-4c85-9c3c-6e18df00c3f8",
    "title": "Работа с материалами Дага на английском",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "680c6254-c93f-43d1-9ab5-56e6940d7041",
    "title": "MIA Request",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c33fd09-64e1-4ce6-988c-be4c7ee2ea5d",
    "title": "Metformin XR dosing and maximum dose",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9c22a884-b93e-49f2-85b3-d202bddfe4d7",
    "title": "Macro drivers behind the crypto spike",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "39e45688-3e30-4e53-8bed-445530fa913b",
    "title": "Поиск летнего лагеря в Тбилиси на август-сентябрь",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "78f11e19-cd04-4b68-9f76-4ee78bc61040",
    "title": "Escrow contract for travel ban removal",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cda3c1bb-d9a1-4a12-a848-6984c40ed15e",
    "title": "Telegram's hypothetical \\"Telephone\\" product theory",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d35a007-0988-4f3e-8e73-c9b0f95941ea",
    "title": "Steak & Brisket",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "59691b35-bca4-44f4-aaa1-e307f1a051f9",
    "title": "Swimming pools for kids in Batumi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4a9c1fbc-f5d9-4414-bd9d-48316de2af6e",
    "title": "Смекта при диарее",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "44558158-3387-41f5-9078-6d2619f0cee0",
    "title": "💬 Catch up on recent conversatio…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3fb767ab-64bf-495a-b1bc-72b224a50856",
    "title": "Налог на профдоход для ИП в Кредо Банке",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7ba88d19-6b6b-4c46-88f0-f9d659b819c5",
    "title": "Аренда инвалидной коляски в Батуми",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d3435ae4-218b-4e5c-a769-7925488a6cd2",
    "title": "Metformin dosing for antipsychotic weight gain",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2a4b8428-0a8f-4ca0-80c3-f9a2d8e9ddbf",
    "title": "Аналог Артосана среди доступных препаратов",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "535dd119-af9f-4969-862f-ce088f0942bf",
    "title": "Печать документов с Android на Wi-Fi принтер",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bed6d2f9-5240-4cf0-b00a-db69d335a8d5",
    "title": "Family ocean fishing trips in Batumi",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "777fc626-a8e7-4c25-b2a7-7ed5a8e2a598",
    "title": "Haircut instructions in Georgian and English",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c205c7db-fccf-43be-9740-df8533df12e1",
    "title": "Пути получения ВНЖ в Грузии для семьи",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f28cd5d1-9cdb-4139-9eaa-ff7dbe954ee7",
    "title": "Поиск работы в ЕС и UK для гражданки РФ",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "925fa49e-b178-4240-b8ed-1116a9c1b4cf",
    "title": "Поиск удалённой работы в Европе с российским гражданством",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "acfb36d1-bc08-4f1b-ab98-aec00bb1a8a6",
    "title": "Арипипразол: что это за лекарство",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5962d97d-1730-4185-9e0f-0aac493fa96f",
    "title": "Finding renamed bots section in Telegram",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3f63780-c2ca-49b3-86e3-a70a4a95ddfe",
    "title": "Metformin with quetiapine and lamotrigine",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9d30c6e-d0ef-484b-9e43-f2f67662d5a6",
    "title": "TON browser alternatives and dark web access",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef449738-1cee-4fbb-bfb3-444bf20377b2",
    "title": "Поиск потерянной посылки Cargo New York - Tbilisi",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ad076543-c222-4665-8068-b32bda60d7a3",
    "title": "Luxury hotels in Tbilisi and pricing",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b77d5696-2c69-47c6-ad1a-00e13be1878f",
    "title": "Поиск товаров в магазинах Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7efc1620-6e3f-4283-9618-8f2bdbbc8032",
    "title": "Покрытие анализов и врачей по полису \\"Витамин С\\"",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3279915a-6a8d-4f3a-9b59-f7010e33e059",
    "title": "Сезонная аллергия в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dd7f5daa-103a-4032-9915-42f8cdd2f14f",
    "title": "Using a Telegram username on a new account",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8035b9fb-d2a1-416a-b7d6-c0d211ef668b",
    "title": "Dark web marketplace takedowns and attribution stories",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "11c7f367-8f5f-4e0a-b0f4-4cf2b1f831e4",
    "title": "Анализ цен продуктов в интернет-магазинах",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "e77d354e-1640-4737-8c3f-841bd3305435",
    "title": "Finding Saba pharmacy in Tbilisi for foreign medications",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eef8f474-1487-4b97-9139-c5a160b1d988",
    "title": "Monad unstaking failing in Atomic Wallet",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "79d439db-394f-461e-a04d-ef3c23d84ff6",
    "title": "💬 the price of gram is getting h…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d1b0fb93-3695-4761-a937-93f783c21d16",
    "title": "Семаглютид при аутоиммунном тиреоидите и гипотиреозе",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3e26816f-2f88-4577-b7a6-231de4639179",
    "title": "How Claude works",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c2e23c88-bef1-4fc1-a867-31ef447e2313",
    "title": "Поиск Rybelsus 7 mg в Тбилиси с минимальной ценой",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ebc10b42-34df-45b2-96db-d9ce178fca76",
    "title": "Old iPhone charger triggering unexpected unlocking",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bf176414-7eb9-498c-b48f-353f0a402056",
    "title": "Semaglutide for antipsychotic-induced weight gain and diabetes",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3a3a60da-87aa-4d91-b2e7-fb40741b34a9",
    "title": "Оземпик в Грузии: где купить и цена",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4d68e6aa-45ff-4071-b12a-21b35012245a",
    "title": "Buckwheat serving size and calories",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fea3a58f-c6cf-4758-93fd-0336dc363d6a",
    "title": "Stablecoin architecture origins and Tether's conceptual lineage",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a79636f2-eccb-4af2-b4f4-c443386e7fb3",
    "title": "💬 Being Russian is difficult. My…",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4ae195ac-b5bb-436b-a6d3-3e5b85e5fe0f",
    "title": "Post-surgery weight loss plan for Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0f536dc6-bbe7-4bb9-b85a-e647f4c17abc",
    "title": "Детский лагерь в Тбилиси с английским или творчеством",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c964c94d-1aae-481e-9ac4-30ed2fa7284e",
    "title": "Продажа иллюстраций на Temu",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3aab67f4-0fb9-4bf5-885e-734862c04c26",
    "title": "Запрос аренды квартиры рядом со школой",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "90a70d38-3458-4f2e-b7a5-64b77bfc47a4",
    "title": "Тремор рук и слабость: возможные причины",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dc9d87b7-a73b-4e32-9da8-cd946c38b0ea",
    "title": "Calcaneal osteotomy screw removal healing",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a2758d30-7c0e-43e9-bee9-eadca14f0abc",
    "title": "Microsoft's earnings surge and AI competition outlook",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "60454157-3788-4a76-beb8-c71aef531023",
    "title": "Varenicline availability in Tbilisi Georgia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e2ba3953-fe51-46f2-8c78-91ed23225cc3",
    "title": "Investing around Ukraine war outcomes",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ebab90b-6bd5-4cec-bd20-a833272abbd8",
    "title": "Fiverr's connection to Telegram's Mira AI",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e247c951-4c74-42c0-a90c-6ec708bcfd68",
    "title": "Бюджет на детей в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "30d86f04-af6d-421b-a39b-aaee23fc689c",
    "title": "MEI and metamer analysis in psychedelic neural responses",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2fa8f692-876c-4d2b-a872-dd0c5fb5b9ca",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3d953559-6bc2-4eb1-8ae0-ba2b980a603c",
    "title": "Consulting neuroscientist title without PhD",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "df8c5d79-8666-4f20-9ef8-1c49235c96b4",
    "title": "Информация об автобусе",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f8062ed2-3f02-49a1-b71c-71a99ad9361d",
    "title": "Milk interactions with crushed medications",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8c2cbada-4ce0-498c-8919-8c0af34dc3cf",
    "title": "Детские языковые лагеря в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f0908f50-de8d-4e71-af07-5ae8077fff7f",
    "title": "Перевод SMS о доставке посылки",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ed5dadf0-8ed8-44d2-b9ac-e5eeda995b24",
    "title": "Деперсонализация: что это такое",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7da0d678-0ff3-4f84-93d1-f40d8b7865c4",
    "title": "Проект Гонка семьи Либерманов",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2a16443f-6caf-477a-b744-513959e130ae",
    "title": "Проблема с доставкой на сайте фу-фу сквише",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0f075700-e7db-4109-a7c9-0b71807f94dd",
    "title": "Saburtalo power outage investigation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dbd16ee0-3985-4765-968e-471c9a67a1a4",
    "title": "Проверка препарата Буманол перед инъекцией",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "a1b2fd15-aeda-4116-b737-f62fadff75f8",
    "title": "Learning SRT syntax and transpiler fundamentals",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "74a7bf5d-42a9-4746-aaa0-c71b70cc4fc1",
    "title": "Correcting memory bias toward disagreement",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "49610747-ccaa-4b6f-a80d-310fc3163bd0",
    "title": "Поиск железнодорожного вокзала в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4f826b46-f91b-4685-b848-fa21f00aa1dc",
    "title": "Hamilton Morris's education and academic background",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d86b0044-08f1-4748-821d-e32b7c08bf9f",
    "title": "Продажа самодельных карт онлайн",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2e9f29e6-53a4-46a8-86d8-cc20591771db",
    "title": "Получение заказа из Тему при отъезде",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c90a25d8-138c-4a89-a16a-dd85f304fe47",
    "title": "Claude Code Portfolio",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5730d0e7-14c8-41e1-8d89-eef997fe8a6f",
    "title": "Tesla roadster and robots",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "de3442a6-6179-448e-80b3-cd00fc5e27c6",
    "title": "Dominic Harbor & Bays maps",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1463dc31-5a8a-4b30-8a93-02484af5db96",
    "title": "Оплата налога ИП 1%",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1808cb01-821c-4c10-9b05-28b18047bcd3",
    "title": "Загранпаспорт при запрете на выезд",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7250c404-f0d3-40ac-a39f-cf521b31b364",
    "title": "Свидетельства о рождении и гражданство",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3941fb3e-9b6a-4fef-98a0-4a0e7918437d",
    "title": "Problem summary request",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8431217e-f19a-4b7a-bf86-a6033125ef08",
    "title": "Сообщение клиенту о доставке",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "475574f6-cfd1-4c63-a591-f1bef0e06531",
    "title": "Changing flight date",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a376626b-25b0-483a-8728-fe244a119032",
    "title": "Семейное образование и регистрация детей",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c54437a5-8717-4d0b-b5b7-ba3616c5018c",
    "title": "Банк Дом РФ доступ",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "90c8f3e3-b858-4140-8ae7-c9b23c5eeb23",
    "title": "Инфовйс для Бейлор университета",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5f2a4bb3-dd04-4f4e-9381-91530c38846e",
    "title": "Госуслуги изменения",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ef6b1684-cd90-4a93-b4bb-acafbf661f48",
    "title": "Стратегия переговоров с отцом детей",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ece32584-f62d-462a-82f7-2234fe2482a8",
    "title": "Контакты детей и безопасность",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bbb794ff-8df3-402c-a02f-cae3aa07bcd2",
    "title": "Атаки на дата-центры и последствия",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "a2e092c0-44a4-442a-b821-1d21d738cc89",
    "title": "Computational epistemology and consciousness",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "890d0f4a-f0b5-40e8-9dee-88a793a65253",
    "title": "MoC Speakers",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dbba812c-7c27-4f75-b565-1f2b46965bac",
    "title": "MoC Schedule",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a07786e2-334b-46d0-9aa2-95a60218117f",
    "title": "Wake up Copenhagen hotel directions",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32244291-fa68-4054-a51f-1e234697a5c6",
    "title": "Magti roaming data Copenhagen",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a9f19c04-b087-4db5-9251-30920e50aa81",
    "title": "KiwiPost payment confusion",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db0b30ef-bae1-42d9-a1f3-64ec08901450",
    "title": "Penelope's symptoms and treatment",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5d7f1512-2371-4e4e-aba0-036d6402de86",
    "title": "Russian custody enforcement precedent",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42afc6bd-f70c-4df8-86c4-231791920a8c",
    "title": "Maxim contact request strategy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "12d855b8-e508-406a-8162-5c93f327ac93",
    "title": "Konsul Prime",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cc8ee76-8982-4076-a4d9-9599df745bf9",
    "title": "Ветеринарные аптеки Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4cd85995-b066-4ea1-9a7c-ec43a96ae80c",
    "title": "Safety training quiz",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "313d1090-0f21-4c56-aedb-a98e4f918054",
    "title": "Russia plague news manipulation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ad583190-616e-4ab4-b837-8cb039b998ce",
    "title": "Aikido payment account issue",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "38078bd1-a8bd-467d-bf0e-6b4292e13469",
    "title": "Биометрический паспорт в Тбилиси",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bf83bbe0-538e-4d29-b64a-7f9ead5b68aa",
    "title": "Post-surgery heel pain and recovery",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "603b2e13-2481-4bc5-9721-acc5bd9df64d",
    "title": "МВД travel ban request",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "097bf0d0-c377-4f2d-b91b-4494c42d6530",
    "title": "Psychologist cost and services",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1fb1ed3c-9661-473f-8434-bdc23ae2924e",
    "title": "Testosterone в аптеках Грузии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "137b33d3-35a2-4b6e-8b8b-503b1f87a8c2",
    "title": "Trump superintelligence luncheon seating",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "76306aa8-8143-418c-b83b-f000d28fe4a5",
    "title": "Список кружков школы",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5f432a8f-0b00-47d2-9a41-59a743253a9e",
    "title": "Kiwi post Amazon invoice",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "34055d3f-e3b1-4dd4-a675-e793f203de51",
    "title": "Photons as fictional constructs",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b6395c0d-4fa0-4a98-add2-92bbee4d0dc9",
    "title": "Cathy > Programming",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "621eab6a-e589-44be-8fbf-992e7866fb17",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3edf7541-6fd4-4327-95b3-b48dfaf0f105",
    "title": "Green card через супруга",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "e3b9cce6-4f34-4dc9-9ce6-d0d8ee04650f",
    "title": "Разрешение на работу для ИП",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4cfb93f4-65df-43e4-87ed-8a6b941ce5eb",
    "title": "Разрешение на работу для ИП в Грузии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f1417088-00b5-4830-9e73-cc1d05da4349",
    "title": "Визаран для россиян в Грузии: риски и реальность",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4fa3765a-1748-4411-8c87-1d4801c8dbd9",
    "title": "Dispatching code to remote Linux workstation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d99232e-cdfe-4a11-814e-1bc0f31ece27",
    "title": "Green card options for Russian spouse and stepchildren",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0e9fbdd1-33d4-43ea-9bda-fec220244732",
    "title": "The Genesis of Writing",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3f7e9877-993c-4264-82f4-8ce5120ee8b4",
    "title": "Verifying OpenAI report authenticity",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1f62d14e-dda2-4243-b9bd-8e33f54decd4",
    "title": "Neural encoding during hallucinations",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "effbe068-8c73-4d59-9fe7-d9bcef9c042d",
    "title": "Clarity act cryptocurrency bill prospects",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "30fd650a-1617-48be-8f59-956155ff129c",
    "title": "Подготовка Дага к конференции в Копенгагене",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "16f38e2a-76eb-4406-a661-d2a70ff5d6ca",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "26c4c37a-4136-467f-8271-c3bbdc1c7c36",
    "title": "",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c0f5ecaf-4115-48a7-ba82-98109aeb4579",
    "title": "The Project",
    "projectName": "The Hard Problem",
    "evidence": "a knowledge search answered with \\"Chalmers, Dennett & Hofstadter\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "95d3df52-40ed-448f-934f-93cc6bc32b34",
    "title": "Выбор правильной дозировки Озампика по рецепту",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8b14b84b-bfa7-4264-af28-ae3974cf3640",
    "title": "Semantics of Representation",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac686866-f08a-428d-b73a-c0f329799dcf",
    "title": "Formal abstractions using sketches and SRT",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "74b415d8-56c3-4991-99c8-365b39068906",
    "title": "Visa requirements for Americans in Indonesia and Malaysia",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d5c0cf36-a66b-4454-ada5-2b449ef37de4",
    "title": "Semantics of Types & More",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f5bdbf0f-a201-4242-ab04-dcd0c2dcddd0",
    "title": "Как разобрать люстру для замены лампочки",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9530c00f-8bb0-4c15-a61f-d5cc02f2164c",
    "title": "Расчет расходов Кати на одежду",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "995f0ffb-7d34-4c42-a4ae-3bde14d77ae7",
    "title": "Офтальмолог Katie's Ophtalmologist",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5fdfa75e-e8a0-4dc9-b0e7-f2b9c323b750",
    "title": "Blog: Biology & Etymology, Semantic Homeostasis",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1d72d8d9-0951-455d-90c4-f4db10a6a864",
    "title": "Понимание основ СРТ",
    "evidence": "ambiguous: a knowledge search answered with \\"Seren: The Semantics of Catalogues\\", held by Seren and Semantic Reference Theory",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "712407ef-59fc-427d-82f8-452ba078ac3a",
    "title": "School Расчет оплаты питания для двух детей",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "74e7c133-6b0d-4060-993e-ac4719bd0a63",
    "title": "Supinators Письмо производителю супинаторов на грузинском",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dd209873-406b-44e5-bcc0-b84f66bbc805",
    "title": "Письмо производителю супинаторов на грузинском",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "94a30492-b469-4de7-8a64-da94c86ab85f",
    "title": "Письмо производителю супинаторов на грузинском",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f0c383f0-1a87-4a04-acdc-f9569073da49",
    "title": "Получение налогового номера для иностранца в Грузии",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "96a7ca7d-2c91-459c-ba56-04119eff9e4f",
    "title": "Перевод английских слов на русский",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3f095881-8d16-4c31-a16f-fa732f715d4a",
    "title": "загранпаспорта старого образца- Dima's passport",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "192e7cfa-d83e-461a-b2e0-bca87e6aa226",
    "title": "Возмещение за отсутствующий товар",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9059b126-3830-4dbf-b05a-00f4096755cf",
    "title": "Анализ трат за август - Budget August",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "410fec6f-d6cc-4394-8676-86f673a3a83b",
    "title": "Ardi insurance Арди для стоматолога и офтальмолога",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3eecc63c-9ff6-4733-a87c-e2d882af6711",
    "title": "Foundations: Types & Properties",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a7e4a527-9d60-40c2-8764-346846a9a418",
    "title": "Создание профиля на LinkedIn",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6fe8ad2a-8476-4bde-a595-26c17e8681b4",
    "title": "Understanding jihad and Muslim violence perceptions",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  }
]
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import {
    sampleConversation, sampleKnowledgeSearch, sampleMapping, sampleMessage, sampleProject,
} from './3-the-record~samples.ts';
import { conversationPairings, readPairings, writePairings, type Pairing } from './4-the-pairing~pairing.ts';

const libraries: string[] = [];
const freshLibrary = (): string => {
    const library = mkdtempSync(join(tmpdir(), 'pairing-'));
    mkdirSync(join(library, 'importer'));
    libraries.push(library);

    return library;
};
afterAll(() => {
    for (const library of libraries)
        rmSync(library, { recursive: true, force: true });
});

const srt = 'Semantic Reference Theory';
const mappedSrt = sampleMapping(srt, [{ title: 'Semantic Primes', lastMessage: 'Jun 15' }]);
const searchedConversation = (id: string, documentName: string) =>
    sampleConversation(id, 'Semantic Primes', [sampleMessage('m', 'Claude', sampleKnowledgeSearch(documentName))]);

describe('the pairing', () => {
    it('pairs a conversation whose title the mapping names once, by the mapping', () => {
        const conversations = [sampleConversation('a', 'Semantic Primes')];
        const [pairing] = conversationPairings(freshLibrary(), conversations, [], mappedSrt);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('the mapping, by title');
    });

    it('pairs a conversation whose knowledge search was answered with a document one project holds', () => {
        const projects = [sampleProject(srt, ['Axioms.md'])];
        const conversations = [searchedConversation('b', 'Axioms.md')];
        const [pairing] = conversationPairings(freshLibrary(), conversations, projects, undefined);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('a knowledge search answered with "Axioms.md"');
    });

    it('leaves a conversation ambiguous when two projects hold the document, saying both', () => {
        const projects = [sampleProject('Seren', ['Axioms.md']), sampleProject(srt, ['Axioms.md'])];
        const conversations = [searchedConversation('c', 'Axioms.md')];
        const [pairing] = conversationPairings(freshLibrary(), conversations, projects, undefined);
        expect(pairing.projectName).toBeUndefined();
        expect(pairing.evidence)
            .toBe(\`ambiguous: a knowledge search answered with "Axioms.md", held by Seren and \${srt}\`);
    });

    it('weighs the document against the mapping, pairing where they agree and ambiguous where they do not', () => {
        const srtHolds = [sampleProject(srt, ['Axioms.md'])];
        const agreeingConversations = [searchedConversation('d', 'Axioms.md')];
        const [agreeing] = conversationPairings(freshLibrary(), agreeingConversations, srtHolds, mappedSrt);
        expect(agreeing.projectName).toBe(srt);
        expect(agreeing.evidence).toBe('a knowledge search answered with "Axioms.md", and the mapping, by title');
        const serenHolds = [sampleProject('Seren', ['Axioms.md'])];
        const disagreeingConversations = [searchedConversation('e', 'Axioms.md')];
        const [disagreeing] = conversationPairings(freshLibrary(), disagreeingConversations, serenHolds, mappedSrt);
        expect(disagreeing.projectName).toBeUndefined();
        expect(disagreeing.evidence)
            .toBe(\`ambiguous: a knowledge search answered with "Axioms.md", held by Seren, and the mapping says \${srt}\`);
    });

    // Doug, 2026-10-14: "If it has a Russian title, it is not mine. Perhaps we can detect Russian characters and
    // skip those" — the scripts and the projects that are not his are the configuration's to name.
    it('proposes a conversation under a project the configuration excludes, or titled in a script it excludes', () => {
        const mappedAna = sampleMapping("Ana's Universe", [{ title: 'Recursion', lastMessage: 'Jun 15' }]);
        const recursion = sampleConversation('f', 'Recursion');
        const russian = sampleConversation('g', 'Понимание основ');
        const conversations = [recursion, russian, sampleConversation('h', 'Mine')];
        const exclusions = { scripts: ['Cyrillic'], projects: ["Ana's Universe"] };
        const [underAna, cyrillic, mine] = conversationPairings(freshLibrary(), conversations, [], mappedAna, exclusions);
        expect(underAna.excluded).toBe(true);
        expect(underAna.reason).toBe("filed under Ana's Universe");
        expect(cyrillic.excluded).toBe(true);
        expect(cyrillic.reason).toBe('a title in Cyrillic');
        expect(mine.excluded).toBe(false);
        const [unconfigured] = conversationPairings(freshLibrary(), [russian], [], mappedAna);
        expect(unconfigured.excluded).toBe(false);
    });

    it('keeps a line written by hand over any evidence, and writes every line back to the file', () => {
        const library = freshLibrary();
        const byHand: Pairing = {
            conversationId: 'h',
            title: 'Semantic Primes',
            projectName: 'Mine',
            evidence: 'by hand',
            excluded: false,
            reason: '',
            byHand: true,
        };
        writePairings(library, [byHand]);
        const conversations = [sampleConversation('h', 'Semantic Primes'), sampleConversation('i', 'Other')];
        const pairings = conversationPairings(library, conversations, [], mappedSrt);
        expect(pairings[0]).toEqual(byHand);
        expect(readPairings(library)).toEqual(pairings);
    });
});
`})]}),"ThePairing4"),T=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Ledger](/dougs-importer/#the-ledger)"}),e.jsxs(n,{children:[e.jsx(f,{}),"What the importer wrote, kept as a record beside each conversation's entry in the book that holds them all, so that it knows which conversations are already in, which have grown since, which are new, and which I have edited by hand and it must never touch."]}),e.jsxs(r,{children:[e.jsx(s,{children:"A record beside every entry"}),e.jsx(n,{children:"Many conversations are short, and after a few runs it is hard to know which are in. So the importer keeps its ledger in the conversations book itself: beside each entry of the register of all my conversations stands a file named for the entry, the record of that conversation's import, with the conversation's id, the name and folder of its book, the export it was read from, the export's time of last change and its count of messages at the import, and the digest of the files written. The entry lists the file, so the binder accounts for it, and reads nothing of it, since a resource is shown and never interpreted. The importer reads the newest export it finds, by the date in its manifest, so a newer export dropped where the last one lay is the one read, and the record says which export each conversation came from. A conversation with no record is new, and a run writes it. One whose export now shows a later time or more messages has grown since, and a run writes it again, since nothing of mine is in it. One equal to its record is in, and a run leaves it. And one whose files no longer match their digest has been edited by hand, and a run never touches it unless told to re-import; when such a one has grown since as well, the run says so beside it."}),e.jsx(n,{children:"Told to re-import, the run writes an edited book again from the export and keeps every file of it as I had it, where the import overwrote it or no longer writes it, as a plain-text file beside the fresh chapter, named for the chapter and for the file it was, and printed by the chapter in a closing section, each file as I had it, so the bind accounts for it and my edits stand on the page beside the fresh import until I apply them again and strike the file. The record keeps when the book was re-imported and which files were kept, and every listing says beside the conversation, while any kept file still stands, how many files of my edits wait to be applied; so I always know which conversations were re-imported and what changes I have yet to make, as I asked on 2026-10-14. When I strike a kept file, the next run that writes takes its printing out of the chapter, the section with the last of them, and takes the book as it then stands, my edits applied, as the state its record knows; a bare run says meanwhile that a kept copy was struck. The re-import writes one fresh chapter, as the import does, so a book I have cut into chapters comes back as one chapter with my chapters kept beside it as text, nothing lost and not the shape I cut; the re-import of a cut book is the next thing to design, since many of these will be cut."}),e.jsxs(n,{children:["The record stands with the entry, so what I do to a conversation by hand, cutting it, renaming it, striking it from the register, carries its record along or removes it, and the state of the import is never a file apart that can disagree with the books. While the importer is being made it overwrites what it wrote, on a flag said at the run, and removes what it wrote before and no longer writes, my kept edits excepted, since the shape of a book is still being decided on ",e.jsx(a,{children:"[its page](/claudes-design/#the-conversations-page)"}),". Once it is done the flag goes, and a conversation once imported is mine: cut into days or sittings, summarized, annotated, by hand."]})]}),e.jsx(t,{identifier:"ledger",type:".ts",children:`import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation } from './3-the-record~record.ts';
import type { Appendix } from './7-the-writing~writing.ts';

export type ImportRecord = {
    conversationId: string;
    name: string;
    bookFolder: string;
    exportedOn: string;
    updatedAt: string;
    messageCount: number;
    digest: string;
    importedAt: string;
    reimportedAt?: string;
    keptEdits?: string[];
};

export type Reimport = { reimportedAt: string; keptEdits: string[] };
export type KeptEdit = { fileName: string; appendix: Appendix };

const keptEditForm = /^(.+)~(edited-.+)\\.txt$/u;

export type ImportState = 'new' | 'in' | 'grown' | 'edited';
export type HeldRecord = { record: ImportRecord; path: string };

export const recordIdentifier = 'import';
export const recordSuffix = \`~\${recordIdentifier}.json\`;

export const importRecords = (registerFolder: string): Map<string, HeldRecord> => {
    const heldRecords = new Map<string, HeldRecord>();
    if (!existsSync(registerFolder)) return heldRecords;
    for (const fileName of readdirSync(registerFolder).filter(name => name.endsWith(recordSuffix))) {
        const path = join(registerFolder, fileName);
        const record = JSON.parse(readFileSync(path, 'utf8')) as ImportRecord;
        heldRecords.set(record.conversationId, { record, path });
    }

    return heldRecords;
};

export const writeImportRecord = (path: string, record: ImportRecord): void => {
    writeFileSync(path, JSON.stringify(record, null, 2) + '\\n', 'utf8');
};

export const folderDigest = (folder: string): string => {
    if (!existsSync(folder)) return '';
    const hash = createHash('sha256');
    for (const fileName of readdirSync(folder).sort())
        hash.update(fileName).update(readFileSync(join(folder, fileName)));

    return hash.digest('hex').slice(0, 16);
};

export const hasGrown = (conversation: Conversation, record: ImportRecord): boolean =>
    conversation.updatedAt > record.updatedAt || conversation.messages.length > record.messageCount;

export const importState = (
    conversation: Conversation,
    registerFolder: string,
    record: ImportRecord | undefined,
): ImportState => {
    if (record === undefined) return 'new';
    if (folderDigest(join(registerFolder, record.bookFolder)) !== record.digest) return 'edited';
    if (hasGrown(conversation, record)) return 'grown';

    return 'in';
};

export const importRecord = (
    conversation: Conversation,
    registerFolder: string,
    name: string,
    bookFolder: string,
    exportedOn: string,
    reimport?: Reimport,
): ImportRecord => ({
    conversationId: conversation.id,
    name,
    bookFolder,
    exportedOn,
    updatedAt: conversation.updatedAt,
    messageCount: conversation.messages.length,
    digest: folderDigest(join(registerFolder, bookFolder)),
    importedAt: new Date().toISOString(),
    ...(reimport === undefined ? {} : reimport),
});

export const folderContents = (folder: string): Map<string, string> => {
    const contents = new Map<string, string>();
    if (!existsSync(folder)) return contents;
    for (const fileName of readdirSync(folder))
        if (statSync(join(folder, fileName)).isFile()) contents.set(fileName, readFileSync(join(folder, fileName), 'utf8'));

    return contents;
};

export const keptEditName = (fileName: string): string =>
    \`edited-\${fileName.replace(/^\\./u, '').replace(/[.~]/gu, '-')}\`;

export const standingKeptEdits = (folder: string): KeptEdit[] =>
    [...folderContents(folder).keys()].flatMap(fileName => {
        const named = keptEditForm.exec(fileName);

        return named === null ? [] : [{ fileName, appendix: { identifier: named[2], type: '.txt' } }];
    });

export const keptEdits = (
    folder: string,
    chapterStem: string,
    before: Map<string, string>,
    writtenFileNames: string[],
): KeptEdit[] => {
    const kept: KeptEdit[] = [];
    for (const [fileName, content] of before) {
        if (keptEditForm.test(fileName)) continue;
        const path = join(folder, fileName);
        const rewritten = writtenFileNames.includes(fileName);
        if (rewritten && readFileSync(path, 'utf8') === content) continue;
        const identifier = keptEditName(fileName);
        const keptFileName = \`\${chapterStem}~\${identifier}.txt\`;
        writeFileSync(join(folder, keptFileName), content, 'utf8');
        if (!rewritten) rmSync(path);
        kept.push({ fileName: keptFileName, appendix: { identifier, type: '.txt' } });
    }

    return kept;
};

export const keptEditsStanding = (registerFolder: string, record: ImportRecord): string[] =>
    (record.keptEdits ?? []).filter(fileName => existsSync(join(registerFolder, record.bookFolder, fileName)));

export const keptEditsStruck = (registerFolder: string, record: ImportRecord): string[] =>
    (record.keptEdits ?? []).filter(fileName => !existsSync(join(registerFolder, record.bookFolder, fileName)));

const keptHeading = 'As I had it before the re-import';
const keptSectionForm = new RegExp(
    \`^ {8}<Section>\\\\n {12}<Heading>\${keptHeading}</Heading>\\\\n([\\\\s\\\\S]*?)^ {8}</Section>\\\\n\`, 'mu',
);
const printedForm = new RegExp(
    '^ {12}<Paragraph>.*</Paragraph>\\\\n {12}<Code language="tsx">!\\\\[\\\\[ (edited-[^ ]+)\\\\.txt \\\\]\\\\]</Code>\\\\n', 'gmu',
);

export const chapterWithoutStruck = (chapterText: string, struckFileNames: string[]): string => {
    const identifiers = struckFileNames.map(fileName => keptEditForm.exec(fileName)?.[2]).filter(one => one !== undefined);
    const section = keptSectionForm.exec(chapterText);
    if (section === null || identifiers.length === 0) return chapterText;
    const remaining = section[1].replace(printedForm, (printed, identifier: string) =>
        identifiers.includes(identifier) ? '' : printed);
    const sectionText = remaining.trim() === '' ? '' : [
        '        <Section>',
        \`            <Heading>\${keptHeading}</Heading>\`,
        remaining.replace(/\\n$/u, ''),
        '        </Section>',
        '',
    ].join('\\n');

    return chapterText.replace(keptSectionForm, () => sectionText);
};

export const tendStruckEdits = (registerFolder: string, heldRecord: HeldRecord): string[] => {
    const struck = keptEditsStruck(registerFolder, heldRecord.record);
    if (struck.length === 0) return [];
    const bookFolder = join(registerFolder, heldRecord.record.bookFolder);
    const touched: string[] = [];
    const chapterStems = new Set(struck.map(fileName => keptEditForm.exec(fileName)?.[1]).filter(one => one !== undefined));
    for (const chapterStem of chapterStems) {
        const chapterPath = join(bookFolder, \`\${chapterStem}.tsx\`);
        if (!existsSync(chapterPath)) continue;
        const chapterText = readFileSync(chapterPath, 'utf8');
        const tended = chapterWithoutStruck(chapterText, struck);
        if (tended === chapterText) continue;
        writeFileSync(chapterPath, tended, 'utf8');
        touched.push(chapterPath);
    }
    const record: ImportRecord = {
        ...heldRecord.record,
        keptEdits: keptEditsStanding(registerFolder, heldRecord.record),
        digest: folderDigest(bookFolder),
    };
    writeImportRecord(heldRecord.path, record);
    heldRecord.record = record;

    return [...touched, heldRecord.path];
};
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import {
    chapterWithoutStruck, folderContents, folderDigest, importRecord, importRecords, importState, keptEditName, keptEdits,
    keptEditsStanding, recordSuffix, standingKeptEdits, tendStruckEdits, writeImportRecord,
} from './5-the-ledger~ledger.ts';

const registerFolder = mkdtempSync(join(tmpdir(), 'records-'));
afterAll(() => rmSync(registerFolder, { recursive: true, force: true }));

const bookFolder = (slug: string): string => {
    mkdirSync(join(registerFolder, slug));
    writeFileSync(join(registerFolder, slug, '1-june-15-2026.tsx'), 'the chapter as written');

    return slug;
};
const twoMessages = [sampleTextMessage('m1', 'Doug', 'hello'), sampleTextMessage('m2', 'Claude', 'hi')];

describe('the ledger', () => {
    it('finds no record in a register with none, and reads back each record written beside an entry', () => {
        expect(importRecords(join(registerFolder, 'nowhere')).size).toBe(0);
        const conversation = sampleConversation('c', 'A Conversation', twoMessages);
        const slug = bookFolder('a-conversation');
        const record = importRecord(conversation, registerFolder, 'A Conversation', slug, '2026-09-11');
        const recordPath = join(registerFolder, \`1-a-conversation\${recordSuffix}\`);
        writeImportRecord(recordPath, record);
        expect(importRecords(registerFolder).get('c')).toEqual({ record, path: recordPath });
        expect(record.exportedOn).toBe('2026-09-11');
    });

    it('says new with no record, in when it matches, grown when the export has more, edited when a file changed', () => {
        const slug = bookFolder('states');
        const conversation = sampleConversation('s', 'States', twoMessages);
        expect(importState(conversation, registerFolder, undefined)).toBe('new');
        const record = importRecord(conversation, registerFolder, 'States', slug, '2026-09-11');
        expect(record.digest).toBe(folderDigest(join(registerFolder, slug)));
        expect(importState(conversation, registerFolder, record)).toBe('in');
        expect(importState({ ...conversation, updatedAt: '2026-06-16T10:00:00Z' }, registerFolder, record)).toBe('grown');
        const thirdMessage = sampleTextMessage('m3', 'Doug', 'more');
        const grownConversation = { ...conversation, messages: [...twoMessages, thirdMessage] };
        expect(importState(grownConversation, registerFolder, record)).toBe('grown');
        writeFileSync(join(registerFolder, slug, '1-june-15-2026.tsx'), 'the chapter edited by hand');
        expect(importState(conversation, registerFolder, record)).toBe('edited');
    });

    // Doug, 2026-10-14: "Yes build the reimport. Find a way to provide feedback on which conversations have been
    // reimported so we know what changes to apply."
    it('keeps every file of an edited book the re-import overwrote or dropped, as a text file named for the chapter', () => {
        const slug = bookFolder('reimported');
        const folder = join(registerFolder, slug);
        writeFileSync(join(folder, '1-june-15-2026.tsx'), 'the chapter edited by hand');
        writeFileSync(join(folder, '2-my-own-cut.tsx'), 'a chapter he added');
        writeFileSync(join(folder, '.cover.tsx'), 'the cover as written');
        const before = folderContents(folder);
        writeFileSync(join(folder, '1-june-15-2026.tsx'), 'the chapter written again');
        writeFileSync(join(folder, '.cover.tsx'), 'the cover as written');
        const kept = keptEdits(folder, '1-june-15-2026', before, ['1-june-15-2026.tsx', '.cover.tsx']);
        const editedChapter = '1-june-15-2026~edited-1-june-15-2026-tsx.txt';
        const addedChapter = '1-june-15-2026~edited-2-my-own-cut-tsx.txt';
        expect(kept.map(one => one.fileName)).toEqual([editedChapter, addedChapter]);
        expect(kept.map(one => one.appendix.identifier)).toEqual(['edited-1-june-15-2026-tsx', 'edited-2-my-own-cut-tsx']);
        expect(folderContents(folder).get(addedChapter)).toBe('a chapter he added');
        expect(folderContents(folder).has('2-my-own-cut.tsx')).toBe(false);
        expect(keptEditName('.cover.tsx')).toBe('edited-cover-tsx');
        expect(standingKeptEdits(folder).map(one => one.fileName)).toEqual(kept.map(one => one.fileName));
        const conversation = sampleConversation('k', 'Reimported', twoMessages);
        const reimport = { reimportedAt: '2026-10-15T00:00:00Z', keptEdits: kept.map(one => one.fileName) };
        const record = importRecord(conversation, registerFolder, 'Reimported', slug, '2026-10-01', reimport);
        expect(record.keptEdits).toEqual([editedChapter, addedChapter]);
        expect(record.reimportedAt).toBe('2026-10-15T00:00:00Z');
        expect(keptEditsStanding(registerFolder, record)).toHaveLength(2);
        rmSync(join(folder, kept[0].fileName));
        expect(keptEditsStanding(registerFolder, record)).toEqual([kept[1].fileName]);
    });

    it('tends a struck kept file: its printing leaves the chapter, the section with the last, the record after', () => {
        const slug = bookFolder('tended');
        const folder = join(registerFolder, slug);
        const printed = (identifier: string): string =>
            \`            <Paragraph>\${identifier.replace(/^edited-|-tsx$/gu, '')}, as I had it:</Paragraph>\\n\`
            + \`            <Code language="tsx">![[ \${identifier}.txt ]]</Code>\\n\`;
        const section = (...identifiers: string[]): string =>
            '        <Section>\\n            <Heading>As I had it before the re-import</Heading>\\n'
            + \`\${identifiers.map(printed).join('')}        </Section>\\n\`;
        const chapter = (body: string): string =>
            \`    <Chapter>\\n        <Title>[[ 15 June 2026 ]]</Title>\\n\${body}    </Chapter>\\n\`;
        const both = chapter(section('edited-synopsis-tsx', 'edited-cover-tsx'));
        const struckSynopsis = ['1-june-15-2026~edited-synopsis-tsx.txt'];
        expect(chapterWithoutStruck(both, struckSynopsis)).toBe(chapter(section('edited-cover-tsx')));
        expect(chapterWithoutStruck(both, [...struckSynopsis, '1-june-15-2026~edited-cover-tsx.txt'])).toBe(chapter(''));
        expect(chapterWithoutStruck(chapter(''), struckSynopsis)).toBe(chapter(''));
        writeFileSync(join(folder, '1-june-15-2026.tsx'), both);
        writeFileSync(join(folder, '1-june-15-2026~edited-cover-tsx.txt'), 'the cover as he had it');
        const conversation = sampleConversation('t', 'Tended', twoMessages);
        const keptCover = '1-june-15-2026~edited-cover-tsx.txt';
        const reimport = { reimportedAt: '2026-10-15T00:00:00Z', keptEdits: [...struckSynopsis, keptCover] };
        const recordPath = join(registerFolder, \`4-tended\${recordSuffix}\`);
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Tended', slug, '2026-10-01', reimport));
        const heldRecord = importRecords(registerFolder).get('t')!;
        expect(importState(conversation, registerFolder, heldRecord.record)).toBe('in');
        const touched = tendStruckEdits(registerFolder, heldRecord);
        expect(touched).toEqual([join(folder, '1-june-15-2026.tsx'), recordPath]);
        expect(folderContents(folder).get('1-june-15-2026.tsx')).toBe(chapter(section('edited-cover-tsx')));
        expect(heldRecord.record.keptEdits).toEqual(['1-june-15-2026~edited-cover-tsx.txt']);
        expect(importState(conversation, registerFolder, heldRecord.record)).toBe('in');
        expect(tendStruckEdits(registerFolder, heldRecord)).toEqual([]);
    });

    it('keeps one record per conversation, the later written replacing the earlier at the same path', () => {
        const conversation = sampleConversation('r', 'Replaced', twoMessages);
        const slug = bookFolder('replaced');
        const recordPath = join(registerFolder, \`3-replaced\${recordSuffix}\`);
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Replaced', slug, '2026-09-11'));
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Replaced', slug, '2026-10-01'));
        const heldRecords = importRecords(registerFolder);
        expect([...heldRecords.keys()].filter(conversationId => conversationId === 'r')).toHaveLength(1);
        expect(heldRecords.get('r')?.record.exportedOn).toBe('2026-10-01');
    });
});
`})]}),"TheLedger5"),N=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Thread](/dougs-importer/#the-thread)"}),e.jsxs(n,{children:[e.jsx(f,{}),"The conversation as it stood on the screen, which is one path through a tree, and the count of what was left on other paths."]}),e.jsxs(r,{children:[e.jsx(s,{children:"A tree, and the path a reader sees"}),e.jsx(n,{children:"Every time I edit a message or ask for another answer, the conversation branches, and what the application shows me is never the tree but one path through it, from the first thing said to whichever end I was last standing on. Each message carries the one it was said after, so the path is a walk: take the latest message nothing answers, follow the parents to the root, and turn it around. That path is the conversation as far as a reader is concerned, and the importer says what it left behind rather than rounding it off: a conversation of a hundred and six messages that shows eighty-four has twenty-two on other paths, and the cover says so."})]}),e.jsx(t,{identifier:"thread",type:".ts",children:`import { rootParentId, type Conversation, type Message } from './3-the-record~record.ts';

export const shownPath = (conversation: Conversation): Message[] => {
    const messagesById = new Map(conversation.messages.map(message => [message.id, message]));
    const parentIds = new Set(conversation.messages.map(message => message.parentId));
    const leafMessages = conversation.messages.filter(message => !parentIds.has(message.id));
    leafMessages.sort((first, second) => first.sentAt.localeCompare(second.sentAt));
    const path: Message[] = [];
    for (let message = leafMessages.at(-1); message !== undefined; message = messagesById.get(message.parentId)) {
        path.push(message);
        if (message.parentId === rootParentId) break;
        if (path.length > conversation.messages.length)
            throw new Error(\`the parents of "\${conversation.name}" do not reach a root\`);
    }

    return path.reverse();
};

export const asideCount = (conversation: Conversation, path: Message[]): number =>
    conversation.messages.length - path.length;

export const pathDays = (path: Message[]): string[] => [...new Set(path.map(message => message.sentAt.slice(0, 10)))];
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import { asideCount, pathDays, shownPath } from './6-the-thread~thread.ts';

const question = sampleTextMessage('m1', 'Doug', 'a question', undefined, '2026-06-15T10:00:00Z');
const firstAnswer = sampleTextMessage('m2', 'Claude', 'an answer', 'm1', '2026-06-15T10:01:00Z');
const secondAnswer = sampleTextMessage('m3', 'Claude', 'another answer', 'm1', '2026-06-15T10:02:00Z');
const reply = sampleTextMessage('m4', 'Doug', 'a reply to the second', 'm3', '2026-06-16T09:00:00Z');
const branched = sampleConversation('b', 'Branched', [question, firstAnswer, secondAnswer, reply]);

describe('the thread', () => {
    it('shows the path from the latest leaf back to the root, in order', () => {
        expect(shownPath(branched).map(message => message.id)).toEqual(['m1', 'm3', 'm4']);
    });

    it('counts the messages left on other paths', () => {
        expect(asideCount(branched, shownPath(branched))).toBe(1);
    });

    it('lists the days the shown path spans', () => {
        expect(pathDays(shownPath(branched))).toEqual(['2026-06-15', '2026-06-16']);
    });
});
`})]}),"TheThread6"),L=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Writing](/dougs-importer/#the-writing)"}),e.jsxs(n,{children:[e.jsx(f,{}),"What was said, turned into this library's writing once, on the way in, and never read from a string when a page is drawn."]}),e.jsxs(r,{children:[e.jsx(s,{children:"Once, on the way in"}),e.jsxs(n,{children:["A message's text comes out of the export as markdown, and what belongs in a library is writing. The conversion happens here, once: a message becomes an exchange of ",e.jsx(a,{children:"[a conversation](/dougs-reference-manual/#the-conversation)"}),", headed by who said it and told its instant, and what was said becomes paragraphs, lists, a list indented under an item a list of its own inside it, headings, code, tables, formulas between dollars or between TeX's brackets, a word set bold or in emphasis, a word typed as code said verbatim, a quoted paragraph said quoted, and a link to the web a word that refers to it. The markup of the file it lands in is the library's own, expanded, one element to a line, so the checker that reads the shape of every file here reads these too."]}),e.jsx(n,{children:"A conversation is written one chapter per day it was held, each dated with its day and titled with it, and holding only that day's messages, so the days stand down the side of its page as its parts. A block of code is written as a code box, which names its language at its head; a block whose language was not named but that reads as SRT notation is named srt. Every version of an artifact is written as a chapter of its own besides its file, said to be a version, a document converted to writing under an opaque section and code set in a code box, titled with the artifact's title and its number; the table lists them in an appendix section the side does not show, and the card in the message refers to its version by title."}),e.jsx(n,{children:"A search of the web or a run of code that Claude made becomes one paragraph saying what was done and the paragraph after it saying what came back. An artifact the conversation made becomes a file beside the chapter, every version of it, its updates replayed, with a paragraph naming it where it was made. The text of a file pasted or attached becomes a file beside the chapter too; an uploaded file, whose content the export never carries, is named and no more. The thinking behind an answer is counted and left out."})]}),e.jsx(t,{identifier:"writing",type:".ts",children:`import type { Block, Conversation, Message, Speaker } from './3-the-record~record.ts';

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
    .replace(/\\{/gu, '&#123;')
    .replace(/\\}/gu, '&#125;')
    .replace(/\\[/gu, '&#91;')
    .replace(/\\]/gu, '&#93;');

export const slugFromName = (name: string): string => {
    const slug = name
        .toLowerCase()
        .replace(/['’]/gu, '')
        .replace(/&/gu, ' and ')
        .replace(/\\+/gu, ' plus ')
        .replace(/@/gu, ' at ')
        .replace(/%/gu, ' percent ')
        .replace(/[^\\p{L}\\p{N}]+/gu, '-')
        .replace(/^-+|-+$/gu, '');

    const cut = slug.slice(0, 60).replace(/-+$/u, '');

    return cut === '' ? 'untitled' : cut;
};

export const titleFromName = (name: string): string => {
    const title = name
        .replace(/^[\\p{Extended_Pictographic}\\p{Emoji_Presentation}️\\s]+/u, '')
        .replace(/[\\p{Extended_Pictographic}\\p{Emoji_Presentation}️\\s]+$/u, '')
        .replace(/\\s+/gu, ' ')
        .trim();

    return title === '' ? 'Untitled' : title;
};

export const fileExtension = (contentType: string, title: string): string => {
    const extensionFromTitle = /\\.([a-z0-9]+)$/iu.exec(title.trim())?.[1]?.toLowerCase();
    const extensionFromContentType = contentType.replace(/^.*\\//u, '').toLowerCase();
    const extension = extensionsByContentType[contentType] ?? extensionFromTitle ?? extensionFromContentType;

    return knownExtensions.includes(extension) ? extension : 'txt';
};

export const notationName = (name: string): string => name.replace(/\\./gu, '..').replace(/\\//gu, './');
export const titleForm = (name: string): string => \`[[ \${name} ]]\`;
export const mentionForm = (name: string): string => \`$[[ \${name} ]]\`;
export const referenceForm = (words: string, name: string, prefix = ''): string => \`\${prefix}[[ \${words} ]]( \${name} )\`;
export const literalForm = (fileName: string): string => \`![[ \${fileName} ]]\`;

export const appendLines = (appendix: Appendix, depth: number): string[] => [
    \`\${indentation(depth)}<Append\`,
    \`\${indentation(depth + 1)}identifier="\${appendix.identifier}"\`,
    \`\${indentation(depth + 1)}type="\${appendix.type}"\`,
    \`\${indentation(depth)}>\`,
    \`\${indentation(depth + 1)}\${literalForm(\`\${appendix.identifier}\${appendix.type}\`)}\`,
    \`\${indentation(depth)}</Append>\`,
];

export const figureLines = (
    elementName: string,
    appendix: Appendix,
    pieces: ProsePiece[],
    depth: number,
    attributeLines: string[] = [],
): string[] => [
    \`\${indentation(depth)}<\${elementName}\`,
    \`\${indentation(depth + 1)}identifier="\${appendix.identifier}"\`,
    \`\${indentation(depth + 1)}type="\${appendix.type}"\`,
    ...attributeLines.map(attributeLine => \`\${indentation(depth + 1)}\${attributeLine}\`),
    \`\${indentation(depth)}>\`,
    ...proseLines(pieces, depth + 1),
    \`\${indentation(depth)}</\${elementName}>\`,
];

const packageWordList = [
    'Append', 'Bold', 'Chapter', 'Code', 'Date', 'Emphasis', 'Equation', 'Heading', 'Line', 'List', 'Math', 'Means',
    'Paragraph', 'Reference', 'Section', 'Table', 'Title', 'Word',
];
const manualWordList = ['CodeBox', 'Dated', 'Message', 'Opaque', 'Quoted', 'Speaker', 'Verbatim'];
const claudeManualWordList = ['Action', 'Artifact', 'Attachment', 'Version'];
const boxLanguages: Record<string, string> = {
    tsx: 'typescript', ts: 'typescript', js: 'javascript', mjs: 'javascript', html: 'xml', svg: 'xml',
    md: 'markdown', sh: 'bash',
};

const isUsedIn = (lines: string[], elementName: string): boolean => lines.some(line =>
    line.includes(\`<\${elementName}>\`) || line.includes(\`<\${elementName} \`) || line.trim() === \`<\${elementName}\`);

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
        \`import { \${packageImports.join(', ')} } from '@dna-platform/public';\`,
        ...(manualImports.length === 0 ? [] : [\`import { \${manualImports.join(', ')} } from '\${manualImportPath}';\`]),
        ...(claudeImports.length === 0 ? [] : [\`import { \${claudeImports.join(', ')} } from '\${claudeManualImportPath}';\`]),
    ];
};

const chapterText = (imports: string[], chapterLines: string[]): string =>
    [
        ...imports, '', 'export default () => (', \`\${indentation(1)}<Chapter>\`, ...chapterLines,
        \`\${indentation(1)}</Chapter>\`, ');', '',
    ].join('\\n');

const dayNames = (day: string): { title: string; stem: string } => {
    const [year, month, dayOfMonth] = day.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, dayOfMonth));
    const monthName = date.toLocaleString('en-GB', { month: 'long', timeZone: 'UTC' });

    return { title: \`\${dayOfMonth} \${monthName} \${year}\`, stem: \`\${monthName.toLowerCase()}-\${dayOfMonth}-\${year}\` };
};

// A version of an artifact is a chapter of its own, a document as writing under an opaque section, code as a code box.
const versionChapter = (
    ordinal: number,
    versionTitle: string,
    artifactVersion: ArtifactVersion,
    manualImportPath: string,
    claudeManualImportPath: string,
): WrittenChapter => {
    const extension = fileExtension(artifactVersion.contentType, artifactVersion.title);
    const isDocument = extension === 'md' || extension === 'txt';
    const sectionHeading = versionTitle.replace(/ v(\\d+)((?:-\\d+)?)$/u, ' at version $1$2');
    const bodyLines = isDocument
        ? [
            \`\${indentation(2)}<Section>\`,
            \`\${indentation(3)}<Opaque />\`,
            \`\${indentation(3)}<Heading>\${escapedText(sectionHeading)}</Heading>\`,
            ...blockLines(artifactVersion.content, 3),
            \`\${indentation(2)}</Section>\`,
        ]
        : codeLines(boxLanguages[extension] ?? extension, artifactVersion.content, 2);
    const chapterLines = [
        \`\${indentation(2)}<Version />\`,
        \`\${indentation(2)}<Title>\${titleForm(escapedText(versionTitle))}</Title>\`,
        ...bodyLines,
    ];
    const imports = importLines(chapterLines, ['Chapter', 'Title'], [], manualImportPath, claudeManualImportPath, false);

    const fileName = \`o\${ordinal}-\${slugFromName(versionTitle)}.tsx\`;

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
        for (let count = 2; versionTitles.has(versionTitle); count++) versionTitle = \`\${title}-\${count}\`;
        versionTitles.add(versionTitle);

        return versionTitle;
    };

    const chapters = days.map(({ day, messages }, dayIndex): WrittenChapter => {
        const { title, stem } = dayNames(day);
        const chapterStem = \`\${dayIndex + 1}-\${stem}\`;
        const files: WrittenFile[] = [];
        const appendices: Appendix[] = [];
        const baseNameCounts = new Map<string, number>();
        const bodyLines: string[] = [];

        const uniqueBaseName = (baseName: string): string => {
            const baseNameCount = (baseNameCounts.get(baseName) ?? 0) + 1;
            baseNameCounts.set(baseName, baseNameCount);

            return baseNameCount === 1 ? baseName : \`\${baseName}-\${baseNameCount}\`;
        };
        const addFile = (identifier: string, type: string, content: string): Appendix => {
            const appendix = { identifier, type: \`.\${type}\` };
            files.push({ name: \`\${chapterStem}~\${identifier}\${appendix.type}\`, content });
            appendices.push(appendix);

            return appendix;
        };
        const addArtifactFile = (identifier: string, artifactVersion: ArtifactVersion): Appendix =>
            addFile(identifier, fileExtension(artifactVersion.contentType, artifactVersion.title), artifactVersion.content);
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
            const versionIdentifier = \`\${slugFromName(artifactVersion.title)}.v\${artifactVersion.versionCount}\`;
            const appendix = addArtifactFile(versionIdentifier, artifactVersion);
            const plainTitle = titleFromName(artifactVersion.title).replace(/[()[\\]{}]/gu, '').replace(/\\s+/gu, ' ').trim();
            const versionName = \`\${plainTitle} v\${artifactVersion.versionCount}\`;
            const versionTitle = uniqueVersionTitle(versionName);
            const ordinal = versions.length + 1;
            versions.push(versionChapter(ordinal, versionTitle, artifactVersion, manualImportPath, claudeManualImportPath));
            const verb = artifactVersion.versionCount === 1 ? 'Made' : block.command === 'rewrite' ? 'Rewrote' : 'Changed';
            const sentence = \`\${verb} the artifact “\${escapedText(artifactVersion.title)}”\`;

            const attributes = [\`artifact="\${escapedText(block.id)}"\`, \`place="\${slugFromName(versionTitle)}"\`];

            return figureLines('Artifact', appendix, [sentence], 3, attributes);
        };
        const messageBlockLines = (block: Block): string[] => {
            if (block.type === 'text') return blockLines(block.text, 3);
            if (block.type === 'action')
                return elementLines('Action', [escapedText(actionSentence(block.name, block.input))], 3);
            if (block.type === 'artifact') return artifactLines(block);
            if (block.type === 'thinking')
                thinkingCount++;
            if (block.type === 'results')
                resultCount++;

            return [];
        };

        for (const message of messages) {
            bodyLines.push(
                \`\${indentation(2)}<Message\`,
                \`\${indentation(3)}at="\${message.sentAt}"\`,
                \`\${indentation(2)}>\`,
                \`\${indentation(3)}<Speaker>\${speakerReference(message.speaker, referents)}</Speaker>\`,
            );
            const bodyLengthBefore = bodyLines.length;
            for (const block of message.blocks)
                bodyLines.push(...messageBlockLines(block));
            for (const attachment of message.attachments) {
                const attachmentExtension = attachment.extension.toLowerCase();
                const extension = knownExtensions.includes(attachmentExtension) ? attachmentExtension : 'txt';
                const baseName = uniqueBaseName(slugFromName(attachment.name.replace(/\\.[^.]+$/u, '')));
                const appendix = addFile(baseName, extension, attachment.text);
                bodyLines.push(...figureLines('Attachment', appendix, [\`Attached \${fileWords(attachment.name)}\`], 3));
            }
            for (const uploadName of message.uploads) {
                const sentence = \`Uploaded \${fileWords(uploadName)}, whose content the export does not carry\`;
                bodyLines.push(...elementLines('Attachment', [sentence], 3));
            }
            if (bodyLines.length === bodyLengthBefore)
                bodyLines.push(...elementLines('Paragraph', ['Nothing was written in this message'], 3));
            bodyLines.push(\`\${indentation(2)}</Message>\`);
        }
        if (dayIndex === days.length - 1)
            for (const artifactVersion of artifactVersions.values())
                addArtifactFile(slugFromName(artifactVersion.title), artifactVersion);

        if (dayIndex === 0 && keptAppendices.length > 0) {
            const keptHeading = \`\${indentation(3)}<Heading>As I had it before the re-import</Heading>\`;
            bodyLines.push(\`\${indentation(2)}<Section>\`, keptHeading);
            for (const appendix of keptAppendices) {
                const fileWords = appendix.identifier.replace(/^edited-/u, '').replace(/-(tsx|ts|md|json|txt)$/u, '');
                bodyLines.push(
                    \`\${indentation(3)}<Paragraph>\${fileWords}, as I had it:</Paragraph>\`,
                    \`\${indentation(3)}<Code language="tsx">\${literalForm(\`\${appendix.identifier}\${appendix.type}\`)}</Code>\`,
                );
            }
            bodyLines.push(\`\${indentation(2)}</Section>\`);
        }
        const chapterLines = [
            \`\${indentation(2)}<Dated>\`,
            \`\${indentation(3)}<Date>[\${title}](\${day})</Date>\`,
            \`\${indentation(2)}</Dated>\`,
            \`\${indentation(2)}<Title>\${titleForm(title)}</Title>\`,
            ...bodyLines,
            ...appendices.flatMap(appendix => appendLines(appendix, 2)),
        ];
        const imports = importLines(
            chapterLines, ['Chapter', 'Date', 'Paragraph', 'Title'], ['Dated', 'Message', 'Speaker'],
            manualImportPath, claudeManualImportPath, appendices.length > 0,
        );

        return { fileName: \`\${chapterStem}.tsx\`, title, tsx: chapterText(imports, chapterLines), files, day };
    });

    return { chapters, versions, thinkingCount, resultCount };
};

const speakerReference = (speaker: Speaker, referents: Referents): string => referenceForm(speaker, referents[speaker], '$');
const fileWords = (fileName: string): string => fileName === '' ? 'a file without a name' : \`“\${escapedText(fileName)}”\`;

const actionSentences: Record<string, (input: any) => string> = {
    web_search: input => \`Searched the web for “\${input?.query ?? ''}”\`,
    web_fetch: input => \`Fetched \${input?.url ?? 'a page'}\`,
    project_knowledge_search: input => \`Searched the project's knowledge for “\${input?.query ?? ''}”\`,
    conversation_search: input => \`Searched past conversations for “\${input?.query ?? ''}”\`,
    recent_chats: () => 'Looked at recent conversations',
    bash_tool: input => \`Ran \${input?.command ?? 'a command'}\`,
    repl: () => 'Ran code',
    view: input => \`Read \${input?.path ?? 'a file'}\`,
    create_file: input => \`Created \${input?.path ?? 'a file'}\`,
    str_replace: input => \`Edited \${input?.path ?? 'a file'}\`,
    present_files: () => 'Presented files',
    memory_user_edits: () => 'Edited memory',
    memory_read: () => 'Read memory',
    image_search: input => \`Searched images for “\${input?.query ?? ''}”\`,
    places_search: input => \`Searched places for “\${input?.query ?? ''}”\`,
};

const actionSentence = (actionName: string, input: unknown): string =>
    (actionSentences[actionName] ?? (() => \`Used \${actionName.replace(/_/gu, ' ')}\`))(input);

const fenceForm = /^\\s*\`\`\`/u;
const bulletForm = /^\\s*[-*+]\\s+/u;
const numberedForm = /^\\s*\\d+[.)]\\s+/u;
const headingForm = /^\\s*(#{1,6})\\s+(.*)$/u;
const quoteForm = /^\\s*>\\s?/u;
const tableRowForm = /^\\s*\\|.*\\|\\s*$/u;
const tableRuleForm = /^\\s*\\|?\\s*:?-{3,}:?\\s*(\\|\\s*:?-{3,}:?\\s*)*\\|?\\s*$/u;
const horizontalRuleForm = /^\\s*(-{3,}|\\*{3,}|_{3,})\\s*$/u;
const blockOpeningForms = [fenceForm, headingForm, bulletForm, numberedForm, quoteForm, tableRowForm];

const isBlockOpening = (line: string): boolean => blockOpeningForms.some(form => form.test(line));
const tableCells = (line: string): string[] =>
    line.trim().replace(/^\\|/u, '').replace(/\\|$/u, '').split('|').map(cell => cell.trim());
const unmarkedText = (text: string): string =>
    text.replace(/\\*\\*|__|\`/gu, '').replace(/(?<![\\w*])\\*([^*\\n]+?)\\*(?!\\*)/gu, '$1');

export const blockLines = (text: string, depth: number): string[] => {
    const outputLines: string[] = [];
    const lines = text.replace(/\\r\\n?/gu, '\\n').split('\\n');
    let lineIndex = 0;
    while (lineIndex < lines.length) {
        const line = lines[lineIndex];
        if (line.trim() === '' || horizontalRuleForm.test(line)) {
            lineIndex++;
            continue;
        }
        if (fenceForm.test(line)) {
            const language = line.trim().replace(/^\`\`\`/u, '').trim().split(/\\s/u)[0] ?? '';
            const listingLines: string[] = [];
            lineIndex++;
            while (lineIndex < lines.length && !fenceForm.test(lines[lineIndex]))
                listingLines.push(lines[lineIndex++]);
            lineIndex++;
            outputLines.push(...codeLines(language, listingLines.join('\\n'), depth));
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
        if (bulletForm.test(line) || numberedForm.test(line)) {
            const listItems: ListItem[] = [];
            const isContinuation = (nextLine: string): boolean =>
                listItems.length > 0 && nextLine.trim() !== '' && /^\\s{2,}/u.test(nextLine);
            const isItem = (nextLine: string): boolean => bulletForm.test(nextLine) || numberedForm.test(nextLine);
            while (lineIndex < lines.length && (isItem(lines[lineIndex]) || isContinuation(lines[lineIndex]))) {
                if (isItem(lines[lineIndex])) {
                    const itemLine = lines[lineIndex++];
                    const indent = itemLine.length - itemLine.trimStart().length;
                    const ordered = numberedForm.test(itemLine);
                    const text = itemLine.replace(ordered ? numberedForm : bulletForm, '');
                    listItems.push({ indent, ordered, text, items: [] });
                } else
                    listItems[listItems.length - 1].text += \` \${lines[lineIndex++].trim()}\`;
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
        const paragraphLines: string[] = [];
        while (lineIndex < lines.length && lines[lineIndex].trim() !== '' && !isBlockOpening(lines[lineIndex]))
            paragraphLines.push(lines[lineIndex++].trim());
        outputLines.push(...elementLines('Paragraph', inlinePieces(paragraphLines.join(' ')), depth));
    }

    return outputLines;
};

const notationForm = /=\\|>|<\\|=\\|>|=[a-z']*>|^::/mu;

// A listing stands in the chapter as the lines it is, a template literal whose first line opens it and whose last
// closes it, so a block of code can be read where it is written.
const listingLines = (listing: string, depth: number): string[] => {
    const escaped = listing.replace(/\\r\\n?/gu, '\\n').replace(/\\\\/gu, '\\\\\\\\').replace(/\`/gu, '\\\\\`').replace(/\\$\\{/gu, '\\\\\${');
    const lines = escaped.split('\\n');
    lines[0] = \`\${indentation(depth)}{\\\`\${lines[0]}\`;
    lines[lines.length - 1] = \`\${lines[lines.length - 1]}\\\`}\`;

    return lines;
};

// A block of code is a code box; one whose language was not named but that reads as SRT notation is named srt.
const codeLines = (language: string, listing: string, depth: number): string[] => {
    const named = language !== '' ? language : notationForm.test(listing) ? 'srt' : '';
    if (named === '')
        return [\`\${indentation(depth)}<CodeBox>\`, ...listingLines(listing, depth + 1), \`\${indentation(depth)}</CodeBox>\`];

    return [
        \`\${indentation(depth)}<CodeBox\`,
        \`\${indentation(depth + 1)}language="\${named.replace(/"/gu, '')}"\`,
        \`\${indentation(depth)}>\`,
        ...listingLines(listing, depth + 1),
        \`\${indentation(depth)}</CodeBox>\`,
    ];
};

const tableLines = (tableRows: string[][], depth: number): string[] => {
    const outputLines = [\`\${indentation(depth)}<Paragraph>\`, \`\${indentation(depth + 1)}<Table />\`];
    for (const tableRow of tableRows) {
        outputLines.push(\`\${indentation(depth + 1)}<Line>\`);
        for (const cell of tableRow)
            outputLines.push(...elementLines('Word', [escapedText(unmarkedText(cell))], depth + 2));
        outputLines.push(\`\${indentation(depth + 1)}</Line>\`);
    }
    outputLines.push(\`\${indentation(depth)}</Paragraph>\`);

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
    const listElement = \`<List\${listItems[0]?.ordered ? ' ordered' : ''} />\`;
    const outputLines = [\`\${indentation(depth)}<Paragraph>\`, \`\${indentation(depth + 1)}\${listElement}\`];
    for (const listItem of listItems) {
        outputLines.push(...elementLines('Line', inlinePieces(listItem.text.trim()), depth + 1));
        if (listItem.items.length > 0) outputLines.push(...listLines(listItem.items, depth + 1));
    }
    outputLines.push(\`\${indentation(depth)}</Paragraph>\`);

    return outputLines;
};

const markedWordLines = (markName: string, text: string): string[] =>
    ['<Word>', \`    <\${markName} />\`, \`    \${escapedText(text)}\`, '</Word>'];

const inlineForms: [RegExp, (innerText: string) => ProsePiece][] = [
    [/\\$\\$([^$]+?)\\$\\$/gu, innerText => [\`<Equation>{\${JSON.stringify(innerText.trim())}}</Equation>\`]],
    [/\\\\\\[([\\s\\S]+?)\\\\\\]/gu, innerText => [\`<Equation>{\${JSON.stringify(innerText.trim())}}</Equation>\`]],
    [/\\\\\\(([^\\n]+?)\\\\\\)/gu, innerText => [\`<Math>{\${JSON.stringify(innerText.trim())}}</Math>\`]],
    [/\`([^\`\\n]+?)\`/gu, innerText => markedWordLines('Verbatim', innerText)],
    [/\\*\\*(.+?)\\*\\*/gu, innerText => markedWordLines('Bold', innerText)],
    [/(?<![\\w*])\\*([^*\\n]+?)\\*(?!\\*)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/(?<!\\w)_([^_\\n]+?)_(?!\\w)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/\\$(?=\\S)([^$\\n\\u0000]+?)(?<=\\S)\\$(?!\\d)/gu, innerText => [\`<Math>{\${JSON.stringify(innerText)}}</Math>\`]],
];

export const inlinePieces = (text: string): ProsePiece[] => {
    const elementPieces: ProsePiece[] = [];
    const placeholder = (): string => \`\\u0000\${elementPieces.length - 1}\\u0000\`;
    let markedText = text.replace(/\\[([^\\]\\n]+)\\]\\((https?:\\/\\/[^)\\s]+)\\)/gu, (_, words: string, url: string) => {
        const referenceLine = \`    <Reference>\${escapedText(url)}</Reference>\`;
        elementPieces.push(['<Word>', referenceLine, \`    \${escapedText(words)}\`, '</Word>']);

        return placeholder();
    });
    for (const [form, elementPiece] of inlineForms)
        markedText = markedText.replace(form, (_, innerText: string) => {
            elementPieces.push(elementPiece(innerText));

            return placeholder();
        });
    const pieces: ProsePiece[] = [];
    for (const part of markedText.split(/(\\u0000\\d+\\u0000)/u)) {
        const placeholderMatch = /^\\u0000(\\d+)\\u0000$/u.exec(part);
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
        return [\`\${indentation(depth)}<\${elementName}>\${text}</\${elementName}>\`];

    return [
        \`\${indentation(depth)}<\${elementName}>\`,
        ...annotationLines.map(annotationLine => indentation(depth + 1) + annotationLine),
        ...proseLines(pieces, depth + 1),
        \`\${indentation(depth)}</\${elementName}>\`,
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
        currentLine = spaced ? \`\${currentLine} \${token}\` : \`\${currentLine}\${token}\`;
    };
    for (const piece of pieces) {
        if (typeof piece === 'string') {
            const words = piece.split(/\\s+/u).filter(text => text !== '');
            for (const [wordIndex, word] of words.entries())
                addToken(word, wordIndex > 0 || spaceBefore || /^\\s/u.test(piece));
            spaceBefore = /\\s$/u.test(piece);
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
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
import type { Block } from './3-the-record~record.ts';
import { sampleConversation, sampleMessage, sampleTextMessage } from './3-the-record~samples.ts';
import {
    blockLines, escapedText, inlinePieces, literalForm, referenceForm, slugFromName, titleForm, titleFromName,
    writtenConversation, type Referents,
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
        expect(escapedText(\`\${titleForm('x')} {y} <z> & w\`)).toBe('&#91;&#91; x &#93;&#93; &#123;y&#125; &lt;z&gt; &amp; w');
    });

    it('turns a marked word into a Word element holding its mark, expanded over lines', () => {
        expect(inlinePieces('a **bold** word')).toEqual(['a ', ['<Word>', '    <Bold />', '    bold', '</Word>'], ' word']);
        expect(inlinePieces('\`code\`')).toEqual([['<Word>', '    <Verbatim />', '    code', '</Word>']]);
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
        expect(inlinePieces('the sum \\\\(a+b\\\\) is'))
            .toEqual(['the sum ', ['<Math>{"a+b"}</Math>'], ' is']);
        expect(inlinePieces('so \\\\[E = mc^2\\\\] holds'))
            .toEqual(['so ', ['<Equation>{"E = mc^2"}</Equation>'], ' holds']);
        const named = inlinePieces('depends on $Chemistry, where \`$Chemistry\` lives, and a $Chemical draws');
        expect(named.filter(piece => Array.isArray(piece) && piece[0].startsWith('<Math>'))).toEqual([]);
    });

    it('nests a list indented under an item as a paragraph of its own inside the list, one deeper', () => {
        const lines = blockLines('- one\\n  - one a\\n  - one b\\n- two\\n  1. two a', 0);
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
        const markdown = '# Heading\\n\\n- one\\n- two\\n\\n\`\`\`ts\\nlet x = 1;\\n\`\`\`\\n\\n| a | b |\\n|---|---|\\n| 1 | 2 |';
        const lines = blockLines(markdown, 0);
        expect(lines).toContain('<Heading>Heading</Heading>');
        expect(lines).toContain('    <List />');
        expect(lines).toContain('    <Line>one</Line>');
        expect(lines).toContain('    language="ts"');
        expect(lines).toContain('    {\`let x = 1;\`}');
        expect(blockLines('\`\`\`\\nfirst \`line\`\\nsecond \${two}\\n\`\`\`', 0)).toEqual([
            '<CodeBox>', '    {\`first \\\\\`line\\\\\`', 'second \\\\\${two}\`}', '</CodeBox>',
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
        expect(chapter.tsx).toContain(\`<Speaker>\${referenceForm('Doug', 'Dougs Story', '$')}</Speaker>\`);
        expect(chapter.tsx).toContain(\`<Speaker>\${referenceForm('Claude', 'Dougs Claude', '$')}</Speaker>\`);
        expect(chapter.tsx).toContain('        <Message\\n            at="2026-06-15T10:00:00Z"\\n        >');
        expect(chapter.tsx).toContain('<Paragraph>A question</Paragraph>');
        expect(chapter.tsx).toContain(\`import { Dated, Message, Speaker } from '\${manualImportPath}';\`);
        expect(chapter.tsx).not.toContain(\`from '\${claudeManualImportPath}'\`);
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
        expect(chapter.tsx).toContain('                artifact="notes"\\n                place="notes-v1"\\n            >');
        expect(chapter.tsx)
            .toContain('                place="notes-v1"\\n            >\\n                Made the artifact “Notes”');
        expect(chapter.tsx)
            .toContain('                place="notes-v2"\\n            >\\n                Changed the artifact “Notes”');
        expect(written.versions.map(one => one.fileName)).toEqual(['o1-notes-v1.tsx', 'o2-notes-v2.tsx']);
        expect(written.versions[0].tsx).toContain('<Version />');
        expect(written.versions[0].tsx).toContain('<Title>[[ Notes v1 ]]</Title>');
        expect(written.versions[0].tsx).toContain('<Opaque />');
        expect(written.versions[0].tsx).toContain('<Heading>Notes at version 1</Heading>');
        expect(written.versions[0].tsx).toContain('<Paragraph>Hello world</Paragraph>');
        expect(written.versions[1].tsx).toContain('<Paragraph>Hello there</Paragraph>');
        expect(written.versions[0].tsx).toContain(\`import { Opaque } from '\${manualImportPath}';\`);
        expect(written.versions[0].tsx).toContain(\`import { Version } from '\${claudeManualImportPath}';\`);
        expect(chapter.tsx).toContain(\`import { Artifact } from '\${claudeManualImportPath}';\`);
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
        expect(chapter.tsx).toContain(\`import { Action } from '\${claudeManualImportPath}';\`);
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
        expect(chapter.tsx).toContain(\`<Code language="tsx">\${literalForm('edited-synopsis-tsx.txt')}</Code>\`);
        expect(chapter.tsx).not.toContain('<Append');
        expect(chapter.tsx).toMatch(/import \\{[^}]*\\bSection\\b[^}]*\\} from '@dna-platform\\/public'/u);
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
    \`            <\${elementName}\`,
    \`                identifier="\${identifier}"\`,
    \`                type="\${type}"\`,
    '            >',
    \`                \${sentence}\`,
    \`            </\${elementName}>\`,
].join('\\n');
`})]}),"TheWriting7"),$=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Books](/dougs-importer/#the-books)"}),e.jsxs(n,{children:[e.jsx(f,{}),"What is left on disk: a conversation as a book, every conversation filed under one book that catalogues them all, and a book per project that catalogues its own besides."]}),e.jsxs(r,{children:[e.jsx(s,{children:"One home, and as many catalogues as I like"}),e.jsxs(n,{children:["A conversation is a book: its book file one line, its cover saying when it was held and how many messages it holds, its synopsis what it came to, its table, and in the first version one chapter holding every exchange. It is filed under the book that catalogues all of my conversations, which is its one home whatever the mapping says. Each project that catalogues it is a book of its own, ",e.jsx(a,{children:"[a project book](/dougs-reference-manual/#the-project-manual)"}),", a reference manual of the project's knowledge files and a catalogue of its conversations by topic, which is the way back from a conversation to its project; and a project's book is a subject, so what I later write about a project can be filed under it. Both kinds of catalogue are filed under Dougs Claude, the book that catalogues the conversations book and the project books together. The catalogue of all of them is a very simple book for now; the shelves and the tables that catalogue them more effectively come with their pages."]}),e.jsxs(n,{children:["A book's name is its title, an untitled conversation numbered Untitled 1 and on by a count the importer keeps, a repeated title the same, and never a date, since a conversation happens across time. A folder that exists is never entered unless the run says to overwrite and ",e.jsx(a,{children:"[the ledger](/dougs-importer/#the-ledger)"})," says the book is still the importer's; a catalogue's chapter and row are added where its table lacks the reference."]}),e.jsx(n,{children:"Every book the importer writes wears a cover as my other books do: the face its kind wears, a bookshelf cover for a conversation and for Dougs Claude, a journal cover for Our Conversations, a manual's for a project, each with a scheme, a window and a drawing, so that the mark in the header draws and a shelf can hold the book; and each with its subject's cover and my story's as volumes, which is how the header leads from any book to the one it is filed under and to me. The three drawings stand beside this chapter. Every conversation wears the one drawing of Our Conversations, so a conversation is told at a glance wherever its mark is drawn. And Dougs Claude is a bookshelf, so the books it catalogues stand on it as jackets."})]}),e.jsx(t,{identifier:"books",type:".ts",children:`import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { Conversation, Message, Project } from './3-the-record~record.ts';
import {
    appendLines, escapedText, knownExtensions, mentionForm, notationName, referenceForm, slugFromName, titleForm,
    writtenConversation, type Appendix, type Referents, type WrittenChapter,
} from './7-the-writing~writing.ts';

export type LibraryFolders = { library: string; claude: string; claudeManual: string; conversations: string };
export type Scheme = { ground: string; band: string; bandInk: string; foot: string; footInk: string; ink: string };
export type WrittenBook = { folder: string; files: string[]; chapterStem: string };
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

const whereThisBookStandsSection = '        <Section>\\n            <Heading>Where this book stands</Heading>';
const authorLine = \`<Author>\${referenceForm('Doug', 'The Librarian', '*')}</Author>\`;
const subjectLine = (words: string, name: string): string => \`<Subject>\${referenceForm(words, name, '**')}</Subject>\`;
const nameInForm = (name: string): string => notationName(escapedText(name));
const captionLines = (captionText: string, name: string): string[] => {
    const lines = wrappedLines(captionText);
    lines[lines.length - 1] += \` <Means>\${mentionForm(nameInForm(name))}</Means>.\`;

    return lines;
};
const titleLine = (name: string): string => \`<Title>\${titleForm(nameInForm(name))}</Title>\`;
const tablePackageWords = [
    'Chapter', 'Content', 'Heading', 'Paragraph', 'Parenthetical', 'Section', 'TableOfContents', 'Title', 'Word',
];
const coverPackageWords = ['About', 'Author', 'Chapter', 'Cover', 'Subject', 'Title'];
const drawnCoverPackageWords = ['About', 'Author', 'Chapter', 'Paragraph', 'Subject', 'Svg', 'Title'];
const windowLines = (x: number, y: number): string[] => ['<Window', \`    x="\${x}"\`, \`    y="\${y}"\`, '/>'];
const illustrationLines = ['<Paragraph>', '    <Illustration />', '    <Svg>![[ illustration.svg ]]</Svg>', '</Paragraph>'];
const drawingFileName = '.cover~illustration.svg';
const entryPackageWords = ['Chapter', 'Means', 'Paragraph', 'Synopsis', 'Title'];
const dateFormat = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } as const;
const monthFormat = { month: 'long', year: 'numeric', timeZone: 'UTC' } as const;

const indentation = (depth: number): string => '    '.repeat(depth);
const indentedLines = (depth: number, lines: string[]): string[] => lines.map(line => indentation(depth) + line);
const relativePath = (fromFolder: string, toFolder: string): string => {
    const path = relative(fromFolder, toFolder).split('\\\\').join('/');

    return path === '..' || path.startsWith('./') || path.startsWith('../') ? path : \`./\${path}\`;
};
const manualImportPath = (folders: LibraryFolders, folder: string): string =>
    \`\${relativePath(folder, join(folders.library, '.manual'))}/.book\`;
const claudeManualImportPath = (folders: LibraryFolders, folder: string): string =>
    \`\${relativePath(folder, folders.claudeManual)}/.book\`;
const packageImportLine = (packageWords: string[]): string =>
    \`import { \${packageWords.join(', ')} } from '@dna-platform/public';\`;
const manualImportLine = (manualWords: string[], importPath: string): string =>
    \`import { \${manualWords.join(', ')} } from '\${importPath}';\`;
const volumeImportLines = (
    folder: string, folders: LibraryFolders, subjectFolder: string, projectFolders: string[] = [],
): string[] => [
    \`import SubjectCover from '\${relativePath(folder, subjectFolder)}/.cover.tsx';\`,
    \`import StoryCover from '\${relativePath(folder, join(folders.library, '.librarian'))}/.cover.tsx';\`,
    ...projectFolders.map((projectFolder, index) =>
        \`import ProjectCover\${index + 1} from '\${relativePath(folder, projectFolder)}/.cover.tsx';\`),
];
const volumeLines = (projectCount = 0): string[] => [
    '<Volume>{SubjectCover()}</Volume>',
    '<Volume>{StoryCover()}</Volume>',
    ...Array.from({ length: projectCount }, (_, index) => \`<Volume>{ProjectCover\${index + 1}()}</Volume>\`),
];
const monthHeading = (instant: string): string => new Date(instant).toLocaleString('en-GB', monthFormat);
const dayWords = (instant: string): string => new Date(instant).toLocaleDateString('en-GB', dateFormat);
const dateReference = (instant: string): string => \`[\${dayWords(instant)}](\${instant.slice(0, 10)})\`;
const bookClassName = (name: string): string => {
    const capitalized = slugFromName(name).replace(/(^|-)(\\p{L}|\\p{N})/gu, (_, __, letter: string) => letter.toUpperCase());

    return \`$\${capitalized.replace(/[^\\p{L}\\p{N}]/gu, '')}\`;
};

export const uniqueBookName = (folder: string, name: string, namesTaken: Set<string>): string => {
    const baseName = name === '' ? 'Untitled' : name;
    for (let nameCount = 1; ; nameCount++) {
        const candidateName = nameCount === 1 ? baseName : \`\${baseName} \${nameCount}\`;
        const candidateSlug = slugFromName(candidateName);
        if (existsSync(join(folder, candidateSlug)) || namesTaken.has(candidateSlug)) continue;
        namesTaken.add(candidateSlug);

        return candidateName;
    }
};

export const wrappedLines = (text: string, width = 108): string[] => {
    const outputLines: string[] = [];
    let currentLine = '';
    for (const word of text.split(/\\s+/u).filter(part => part !== '')) {
        if (currentLine !== '' && currentLine.length + 1 + word.length > width) {
            outputLines.push(currentLine);
            currentLine = word;
            continue;
        }
        currentLine = currentLine === '' ? word : \`\${currentLine} \${word}\`;
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
    keptAppendices: Appendix[] = [],
): WrittenBook => {
    const folder = join(folders.conversations, slugFromName(name));
    const importPath = manualImportPath(folders, folder);
    const claudeImportPath = claudeManualImportPath(folders, folder);
    const written = writtenConversation(conversation, path, referents, importPath, claudeImportPath, keptAppendices);
    const coverManualWords = [
        'BookshelfCover as Cover', 'Illustration', 'Messages', 'Participant', 'Participants', 'Period', 'Scheme',
        'Volume', 'Window',
    ];
    const speakers = [...new Set(path.map(message => message.speaker))];
    const participantLines = [
        '<Participants>',
        ...speakers.map(speaker => \`    <Participant>\${referenceForm(speaker, referents[speaker], '$')}</Participant>\`),
        '</Participants>',
    ];
    const openingBlock = path.find(message => message.speaker === 'Doug')?.blocks.find(block => block.type === 'text');
    const openingLine = openingBlock?.type === 'text' ? openingBlock.text.split(/\\n/u)[0] : '';
    const summaryText = conversation.summary !== ''
        ? conversation.summary.replace(/\\*\\*[^*]*\\*\\*\\s*/u, '').split(/\\n\\n/u)[0] : openingLine;
    const synopsisLines = wrappedLines(escapedText(summaryText.replace(/[*_\`#>]/gu, '')));
    const packageWords = ['Author', 'Chapter', 'Paragraph', 'Subject', 'Svg', 'Title'];
    const projectImportLines = projectNames.length > 0 ? [manualImportLine(['Project'], claudeImportPath)] : [];
    const drawingSource = join(folders.conversations, drawingFileName);
    const drawingText = existsSync(drawingSource) ? readFileSync(drawingSource, 'utf8') : '';
    const projectLines = projectNames.map(projectName => \`<Project>***\${titleForm(nameInForm(projectName))}</Project>\`);
    const tableSections = [...monthSectionsOf(written.chapters, name), ...artifactSectionOf(written.versions)];
    const tableManualWords = written.versions.length === 0 ? ['Index'] : ['Appendix', 'Index'];
    const files = [
        writtenFile(join(folder, '.book.tsx'), bookFileText(claudeImportPath, 'ClaudeConversation', name)),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, coverManualWords, packageWords, [
            ...volumeLines(),
            ...schemeLines(scheme),
            ...windowLines(-32, -26),
            ...participantLines,
            '<Period',
            \`    from="\${path[0]?.sentAt ?? conversation.createdAt}"\`,
            \`    to="\${path.at(-1)?.sentAt ?? conversation.updatedAt}"\`,
            '/>',
            '<Messages',
            \`    shown="\${path.length}"\`,
            \`    all="\${conversation.messages.length}"\`,
            '/>',
            titleLine(name),
            authorLine,
            subjectLine('Conversations', 'Our Conversations'),
            ...projectLines,
            ...illustrationLines,
        ], [...projectImportLines, ...volumeImportLines(folder, folders, folders.conversations)])),
        writtenFile(join(folder, drawingFileName), drawingText),
        writtenFile(join(folder, '.synopsis.tsx'), synopsisFileText(synopsisLines)),
        writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, tableManualWords, tableSections)),
        ...[...written.chapters, ...written.versions]
            .map(chapter => writtenFile(join(folder, chapter.fileName), chapter.tsx)),
    ];
    for (const chapter of written.chapters)
        for (const chapterFile of chapter.files)
            files.push(writtenFile(join(folder, chapterFile.name), chapterFile.content));

    return { folder, files, chapterStem: written.chapters[0].fileName.replace(/\\.tsx$/u, '') };
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
    const standsSection = sectionLines('Where this book stands', parentheticalLines(name));

    return [
        bookFile(),
        writtenFile(join(folder, '.cover.tsx'), coverFileText(importPath, [
            \`\${coverFace} as Cover\`, 'Illustration', 'Scheme', 'Volume', 'Window',
        ], drawnCoverPackageWords, [
            ...volumeLines(),
            ...schemeLines(scheme),
            ...windowLines(-32, -26),
            titleLine(name),
            authorLine,
            subjectLine(subjectWords, subjectName),
            \`<About>\${titleForm(nameInForm(about))}</About>\`,
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
    const entryPath = join(folder, \`\${nextChapterNumber(folder)}-\${slugFromName(name)}.tsx\`);
    const bookRelativePath = relativePath(folder, bookFolder);
    const appendixWords = appendix === undefined ? [] : ['Append'];
    const packageWords = [...appendixWords, 'Chapter', 'Date', 'Means', 'Paragraph', 'Part', 'Synopsis', 'Title'];
    writtenFile(entryPath, entryFileText(importPath, ['Caption', 'Dated', 'Volume'], packageWords, bookRelativePath, [
        \`<Part>\${monthHeading(instant)}</Part>\`,
        '<Dated>',
        \`    <Date>\${dateReference(instant)}</Date>\`,
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
        .filter(fileName => /^o*\\d/u.test(fileName) && fileName.endsWith('.tsx') && !fileName.includes('~'));
    const entryFileName = chapterFileNames
        .find(fileName => readFileSync(join(folder, fileName), 'utf8').includes(titleLine(name)));

    return entryFileName === undefined ? undefined : join(folder, entryFileName);
};

export const projectBook = (
    folders: LibraryFolders, project: Project, scheme: Scheme, drawingText: string, overwrite = false,
): WrittenBook => {
    const folder = join(folders.claude, \`.\${slugFromName(project.name)}\`);
    const importPath = manualImportPath(folders, folder);
    const bookFilePath = join(folder, '.book.tsx');
    const bookFile = (): string => writtenFile(bookFilePath, bookFileText(importPath, 'ProjectManual', project.name));
    if (existsSync(bookFilePath)) return { folder, files: overwrite ? [bookFile()] : [], chapterStem: '' };
    const projectDescription = project.description
        || \`A project of mine with Claude, \${project.documents.length} knowledge files and the conversations held in it.\`;
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
            titleLine(project.name),
            authorLine,
            subjectLine('Claude', 'Dougs Claude'),
            \`<About>\${titleForm(nameInForm(project.name))}</About>\`,
            ...illustrationLines,
        ], volumeImportLines(folder, folders, folders.claude))),
        writtenFile(join(folder, drawingFileName), drawingText),
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
        const documentBaseName = document.name.split('/').at(-1)!.replace(/\\.[^.]+$/u, '');
        const baseNameCount = (baseNameCounts.get(slugFromName(documentBaseName)) ?? 0) + 1;
        baseNameCounts.set(slugFromName(documentBaseName), baseNameCount);
        const documentTitle = baseNameCount === 1 ? documentBaseName : \`\${documentBaseName} \${baseNameCount}\`;
        const extensionFromName = (/\\.([a-z0-9]+)$/iu.exec(document.name)?.[1] ?? '').toLowerCase();
        const documentExtension = knownExtensions.includes(extensionFromName) ? extensionFromName : 'txt';
        const chapterStem = \`\${documentIndex + 2}-\${slugFromName(documentTitle)}\`;
        const briefText = \`A knowledge file of the project, “\${escapedText(document.name)}”, \`
            + 'as it was uploaded to Claude.';
        chapterNames.push(documentTitle);
        files.push(writtenFile(join(folder, \`\${chapterStem}~file.\${documentExtension}\`), document.content));
        files.push(writtenFile(join(folder, \`\${chapterStem}.tsx\`), chapterFileText(documentImportLines, [
            '<Spread />',
            titleLine(documentTitle),
            '<Paragraph>',
            '    <Brief />',
            ...indentedLines(1, wrappedLines(briefText)),
            '</Paragraph>',
            ...appendLines({ identifier: 'file', type: \`.\${documentExtension}\` }, 0),
        ])));
    }
    const filesSectionLines = [...chapterNames.flatMap(contentLines), ...parentheticalLines(project.name)];
    files.push(writtenFile(join(folder, '.table.tsx'), tableFileText(importPath, ['Arrow', 'Index'], [
        ...sectionLines('The project and its files', filesSectionLines),
        ...sectionLines('Where this book stands', []),
    ])));

    return { folder, files, chapterStem: '' };
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
    const entryPath = join(folder, \`\${nextChapterNumber(folder)}-\${slugFromName(name)}.tsx\`);
    const bookRelativePath = relativePath(folder, bookFolder);
    writtenFile(entryPath, entryFileText(importPath, ['Brief', 'Volume'], entryPackageWords, bookRelativePath, [
        '<Volume>{TheCover()}</Volume>',
        titleLine(name),
        '<Paragraph>',
        '    <Brief />',
        ...indentedLines(1, captionLines(\`A conversation held in this project, \${dayWords(instant)}:\`, name)),
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
    const entryPath = join(catalogueFolder, \`\${nextChapterNumber(catalogueFolder)}-\${slugFromName(name)}.tsx\`);
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
    const insertionPoint = '            <Paragraph>\\n                <Parenthetical />';
    const rowText = indentedLines(3, rowLines(name, '**')).join('\\n');
    writtenFile(tablePath, tableText.replace(insertionPoint, () => \`\${rowText}\\n\${insertionPoint}\`));

    return [entryPath, tablePath];
};

const writtenFile = (path: string, text: string): string => {
    mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, text, 'utf8');

    return path;
};

const nextChapterNumber = (folder: string): number => {
    const fileNames = existsSync(folder) ? readdirSync(folder) : [];

    return Math.max(0, ...fileNames.map(fileName => Number(/^(\\d+)-/u.exec(fileName)?.[1] ?? 0))) + 1;
};

const tableListsBook = (tableText: string, name: string): boolean =>
    tableText.includes(mentionForm(\`./\${nameInForm(name)}\`));

const tableWithRow = (tableText: string, heading: string, lines: string[], insertionPoint: string): string => {
    const headingElement = \`<Heading>\${heading}</Heading>\`;
    const rowText = indentedLines(3, lines).join('\\n');
    if (tableText.includes(headingElement))
        return orderedTableText(tableText.replace(headingElement, () => \`\${headingElement}\\n\${rowText}\`));
    const sectionText = \`        <Section>\\n            \${headingElement}\\n\${rowText}\\n        </Section>\\n\`;

    return orderedTableText(tableText.replace(insertionPoint, () => \`\${sectionText}\${insertionPoint}\`));
};

const sectionForm = /^ {8}<Section>\\n {12}<Heading>([^<]*)<\\/Heading>\\n[\\s\\S]*?^ {8}<\\/Section>\\n/gmu;
const isMonthHeading = (heading: string): boolean => !Number.isNaN(Date.parse(heading));

export const orderedTableText = (tableText: string): string => {
    const monthSections = [...tableText.matchAll(sectionForm)].filter(match => isMonthHeading(match[1]));
    const newestFirst = [...monthSections].sort((a, b) => Date.parse(b[1]) - Date.parse(a[1])).map(match => match[0]);
    let placed = 0;
    const placedSection = (section: string, heading: string): string =>
        isMonthHeading(heading) ? newestFirst[placed++] : section;

    return tableText.replace(sectionForm, placedSection);
};

export const orderRegisterTable = (folder: string): string[] => {
    const tablePath = join(folder, '.table.tsx');
    if (!existsSync(tablePath)) return [];
    const tableText = readFileSync(tablePath, 'utf8');
    const ordered = orderedTableText(tableText);

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
].join('\\n');

const bookFileText = (importPath: string, baseName: string, name: string): string => [
    \`import { $\${baseName} } from '\${importPath}';\`,
    '',
    \`export default class \${bookClassName(name)} extends $\${baseName} { }\`,
    '',
].join('\\n');

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
        \`    \${titleForm('Synopsis')}\`,
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
        \`    \${titleForm('Table of Contents')}\`,
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
        \`import TheCover from '\${bookRelativePath}/.cover.tsx';\`,
        \`import TheSynopsis from '\${bookRelativePath}/.synopsis.tsx';\`,
    ],
    lines,
);

const schemeLines = (scheme: Scheme): string[] =>
    ['<Scheme', ...indentedLines(1, Object.entries(scheme).map(([field, value]) => \`\${field}="\${value}"\`)), '/>'];

const sectionLines = (heading: string, lines: string[]): string[] =>
    ['<Section>', \`    <Heading>\${heading}</Heading>\`, ...indentedLines(1, lines), '</Section>'];

// The days of a conversation under their months, the book's own line under the first; an artifact's versions in
// an appendix section of parenthetical entries, which the index does not list and the side does not show, since
// the binder asks that every chapter be listed and the proof that every link on the page land.
const monthSectionsOf = (chapters: WrittenChapter[], name: string): string[] => {
    const months: { heading: string; lines: string[] }[] = [];
    for (const chapter of chapters) {
        const heading = monthHeading(chapter.day ?? '');
        const month = months.at(-1);
        if (month !== undefined && month.heading === heading) month.lines.push(...contentLines(chapter.title));
        else months.push({ heading, lines: contentLines(chapter.title) });
    }
    months[0]?.lines.push(...parentheticalLines(name));

    return months.flatMap(month => sectionLines(month.heading, month.lines));
};

const artifactSectionOf = (versions: WrittenChapter[]): string[] => versions.length === 0 ? [] : [
    '<Section>',
    '    <Appendix />',
    '    <Heading>Artifacts</Heading>',
    ...indentedLines(1, versions.flatMap(version => [
        '<Paragraph>',
        '    <Parenthetical />',
        \`    <Content>\${mentionForm(\`./\${nameInForm(version.title)}\`)}</Content>\`,
        '</Paragraph>',
    ])),
    '</Section>',
];


const contentLines = (name: string): string[] =>
    ['<Paragraph>', \`    <Content>\${mentionForm(\`./\${nameInForm(name)}\`)}</Content>\`, '</Paragraph>'];

const parentheticalLines = (name: string): string[] => [
    '<Paragraph>',
    '    <Parenthetical />',
    '    <Word>',
    \`        <Content>\${mentionForm(nameInForm(name))}</Content>\`,
    '    </Word>',
    '    <Word>',
    \`        <Content>\${mentionForm('./Synopsis')}</Content>\`,
    '    </Word>',
    '    <Word>',
    \`        <Content>\${mentionForm('./Table of Contents')}</Content>\`,
    '    </Word>',
    '</Paragraph>',
];

const rowLines = (name: string, stars: string): string[] => [
    '<Paragraph>',
    '    <Word>',
    \`        <Content>\${mentionForm(\`./\${nameInForm(name)}\`)}</Content>\`,
    '    </Word>',
    '    <Word>',
    '        <Arrow />',
    \`        <Content>\${referenceForm('▷', nameInForm(name))}\${stars}</Content>\`,
    '    </Word>',
    '</Paragraph>',
];
`}),e.jsx(t,{identifier:"dougs-claude",type:".svg",children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`}),e.jsx(t,{identifier:"our-conversations",type:".svg",children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`}),e.jsx(t,{identifier:"project",type:".svg",children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 12h20l4 5h24v35H8z"/><path d="M8 12h20l4 5h24v35H8zM8 20h48"/><path class="fill" d="M14 27h14v9H14z"/><path d="M36 27h14v9H36zM28 31h7M32 28l3 3-3 3"/><path d="M14 42h36M14 47h24"/></svg>
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
import { orderedTableText } from './8-the-books~books.ts';

const section = (heading: string, name: string): string => [
    '        <Section>',
    \`            <Heading>\${heading}</Heading>\`,
    '            <Paragraph>',
    \`                <Content>$[[ ./\${name} ]]</Content>\`,
    '            </Paragraph>',
    '        </Section>',
    '',
].join('\\n');
const table = (...sections: string[]): string => \`    <Chapter>\\n\${sections.join('')}    </Chapter>\\n\`;

describe('the books', () => {
    it("keeps a register's month sections newest first, whatever order they were written in, the rest in place", () => {
        const written = table(
            section('June 2026', 'Semantic Primes'),
            section('May 2026', 'Converting shared conversation to document'),
            section('July 2026', 'Inexplicable Phenomena'),
            section('Where this book stands', 'Our Conversations'),
        );
        expect(orderedTableText(written)).toBe(table(
            section('July 2026', 'Inexplicable Phenomena'),
            section('June 2026', 'Semantic Primes'),
            section('May 2026', 'Converting shared conversation to document'),
            section('Where this book stands', 'Our Conversations'),
        ));
        expect(orderedTableText(orderedTableText(written))).toBe(orderedTableText(written));
    });
});
`})]}),"TheBooks8"),A=o(()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{children:"[The Check](/dougs-importer/#the-check)"}),e.jsxs(n,{children:[e.jsx(f,{}),"What the importer wrote, checked against the archive the export was first read into, and then against the bind."]}),e.jsxs(r,{children:[e.jsx(s,{children:"Two readings of one export"}),e.jsxs(n,{children:["The sister repository holds an older reading of the same export, as markdown: a transcript per conversation with its count of messages, a book per project with the conversations its scaffold filed there, and the statistics of the whole. The importer never reads that archive as a source, but it is a check: every count of ours against its statistics, our pairing of a project against its scaffold's, our count of messages in each conversation against its transcript's, every difference listed by name in the report. Then the bind, which holds every book to its type and every reference to its place; and the run reads every conversation it has written back through its record, the instants of its messages in order, and finds them equal to ",e.jsx(a,{children:"[the thread](/dougs-importer/#the-thread)"})," or says from which message they stray."]}),e.jsx(n,{children:"The run reports the check whether it writes or not, after the project's conversations: the counts of the whole export against the statistics, the project's conversations we paired against the ones the scaffold filed, each conversation's messages against its transcript's count, and what stands written against the export. A difference is not a fault; the archive's reading is older and its own, and the report is where the two are read side by side."})]}),e.jsx(t,{identifier:"check",type:".ts",children:`import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation } from './3-the-record~record.ts';
import type { HeldRecord } from './5-the-ledger~ledger.ts';
import { shownPath } from './6-the-thread~thread.ts';

export type ExportCounts = {
    conversationCount: number;
    messageCount: number;
    projectCount: number;
    documentCount: number;
    contentfulCount: number;
};
export type ArchiveStatistics = ExportCounts;
export type ArchiveTranscript = { fileName: string; uuid: string; title: string; messageCount: number };
export type Difference = { name: string; ours: string; theirs: string };

const countLabels: Record<keyof ArchiveStatistics, string> = {
    conversationCount: 'Conversations',
    messageCount: 'Messages',
    projectCount: 'Projects',
    documentCount: 'Project documents',
    contentfulCount: 'Conversations with content',
};

export const archiveStatistics = (text: string): ArchiveStatistics => {
    const counted = (label: string): number => Number(new RegExp(\`\\\\*\\\\*\${label}:\\\\*\\\\* (\\\\d+)\`, 'u').exec(text)?.[1] ?? 0);
    const statistics = {} as ArchiveStatistics;
    for (const [field, label] of Object.entries(countLabels) as [keyof ArchiveStatistics, string][])
        statistics[field] = counted(label);

    return statistics;
};

export const frontMatter = (text: string): string => /^---\\r?\\n([\\s\\S]*?)\\r?\\n---/u.exec(text)?.[1] ?? '';

export const transcriptMeta = (fileName: string, text: string): ArchiveTranscript => {
    const matter = frontMatter(text);
    const field = (name: string): string => new RegExp(\`^\${name}: (.*)$\`, 'mu').exec(matter)?.[1]?.trim() ?? '';

    return {
        fileName,
        uuid: field('uuid'),
        title: field('title').replace(/^"(.*)"$/u, '$1'),
        messageCount: Number(field('messages') || 0),
    };
};

export const filedTranscriptNames = (coverText: string): string[] =>
    [...coverText.matchAll(/\\]\\(\\.\\.\\/\\.\\.\\/conversations\\/([^)]+)\\)/gu)].map(match => match[1]);

export const archiveTranscripts = (archiveFolder: string): Map<string, ArchiveTranscript> => {
    const folder = join(archiveFolder, 'conversations');
    const transcripts = new Map<string, ArchiveTranscript>();
    if (!existsSync(folder)) return transcripts;
    for (const fileName of readdirSync(folder).filter(name => name.endsWith('.md'))) {
        const transcript = transcriptMeta(fileName, readFileSync(join(folder, fileName), 'utf8').slice(0, 2000));
        transcripts.set(transcript.fileName, transcript);
    }

    return transcripts;
};

export const archiveFiling = (archiveFolder: string, projectName: string): string[] | undefined => {
    const folder = join(archiveFolder, 'projects');
    if (!existsSync(folder)) return undefined;
    for (const projectFolder of readdirSync(folder)) {
        const coverPath = join(folder, projectFolder, '.cover.md');
        if (!existsSync(coverPath)) continue;
        const coverText = readFileSync(coverPath, 'utf8');
        const title = /^title: "?(.*?)"?\\s*$/mu.exec(frontMatter(coverText))?.[1];
        if (title === projectName) return filedTranscriptNames(coverText);
    }

    return undefined;
};

export const countDifferences = (ours: ExportCounts, theirs: ArchiveStatistics): Difference[] =>
    (Object.keys(countLabels) as (keyof ArchiveStatistics)[])
        .filter(field => ours[field] !== theirs[field])
        .map(field => ({ name: countLabels[field], ours: String(ours[field]), theirs: String(theirs[field]) }));

export const filingDifferences = (
    ours: Conversation[],
    filedNames: string[],
    transcripts: Map<string, ArchiveTranscript>,
): Difference[] => {
    const theirIds = new Set(filedNames.map(fileName => transcripts.get(fileName)?.uuid).filter(uuid => uuid !== undefined));
    const ourIds = new Set(ours.map(conversation => conversation.id));
    const transcriptsById = new Map([...transcripts.values()].map(transcript => [transcript.uuid, transcript]));
    const differences: Difference[] = ours
        .filter(conversation => !theirIds.has(conversation.id))
        .map(conversation => ({ name: conversation.name || 'Untitled', ours: 'paired', theirs: 'not filed' }));
    for (const uuid of theirIds)
        if (!ourIds.has(uuid))
            differences.push({ name: transcriptsById.get(uuid)?.title ?? uuid, ours: 'not paired', theirs: 'filed' });

    return differences;
};

export const transcriptDifferences = (ours: Conversation[], transcripts: Map<string, ArchiveTranscript>): Difference[] => {
    const transcriptsById = new Map([...transcripts.values()].map(transcript => [transcript.uuid, transcript]));

    return ours.flatMap(conversation => {
        const transcript = transcriptsById.get(conversation.id);
        const name = conversation.name || 'Untitled';
        const ours = \`\${conversation.messages.length} messages\`;
        if (transcript === undefined) return [{ name, ours, theirs: 'no transcript' }];
        if (transcript.messageCount === conversation.messages.length) return [];

        return [{ name, ours, theirs: \`\${transcript.messageCount} messages\` }];
    });
};

export const chapterInstants = (chapterText: string): string[] =>
    [...chapterText.matchAll(/^\\s*at="([^"]+)"$/gmu)].map(match => match[1]);

export const writtenInstants = (bookFolder: string): string[] => {
    if (!existsSync(bookFolder)) return [];
    const chapterFileNames = readdirSync(bookFolder)
        .filter(fileName => /^\\d/u.test(fileName) && fileName.endsWith('.tsx') && !fileName.includes('~'))
        .sort((a, b) => Number(/^\\d+/u.exec(a)![0]) - Number(/^\\d+/u.exec(b)![0]));

    return chapterFileNames.flatMap(fileName => chapterInstants(readFileSync(join(bookFolder, fileName), 'utf8')));
};

export const writtenDifferences = (
    conversations: Conversation[],
    heldRecords: Map<string, HeldRecord>,
    registerFolder: string,
): Difference[] => conversations.flatMap(conversation => {
    const heldRecord = heldRecords.get(conversation.id);
    if (heldRecord === undefined) return [];
    const written = writtenInstants(join(registerFolder, heldRecord.record.bookFolder));
    const thread = shownPath(conversation).map(message => message.sentAt);
    if (written.length === thread.length && written.every((instant, index) => instant === thread[index])) return [];
    const firstAstray = written.findIndex((instant, index) => instant !== thread[index]);
    const where = firstAstray < 0 ? 'at the end' : \`from message \${firstAstray + 1}\`;
    const ours = \`\${written.length} written, astray \${where}\`;

    return [{ name: heldRecord.record.name, ours, theirs: \`\${thread.length} shown\` }];
});

export const differenceLines = (heading: string, differences: Difference[]): string[] => [
    \`\${heading}: \${differences.length === 0 ? 'no difference' : \`\${differences.length} differ\`}\`,
    ...differences.map(difference => \`  \${difference.name} · ours \${difference.ours} · theirs \${difference.theirs}\`),
];
`}),e.jsx(t,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import { writtenConversation, type Referents } from './7-the-writing~writing.ts';
import {
    archiveStatistics, chapterInstants, countDifferences, differenceLines, filedTranscriptNames, filingDifferences,
    transcriptDifferences, transcriptMeta, type ArchiveTranscript,
} from './9-the-check~check.ts';

const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };
const statisticsText = [
    '---', 'title: Export Statistics', '---', '', '# Export Statistics', '',
    '- **Conversations:** 523', '- **Messages:** 19704', '- **Projects:** 41', '- **Project documents:** 222',
    '- **Artifacts:** 246', '- **Date range:** 2024-09-25 to 2026-09-11', '- **Conversations with content:** 513',
].join('\\n');
const transcriptText = [
    '---', 'uuid: 7683c3d7', 'title: "Seren & The Hard Problem"', 'created: 2024-09-25T23:43:33Z', 'messages: 688', '---',
    '', '# Seren & The Hard Problem',
].join('\\n');
const coverText = [
    '---', 'title: "Semantic Reference Theory"', '---', '', '| # | Title | | Date | Messages |', '|---|---|-|---|---|',
    '| 01 | [A Continuation...](01-a-continuation....md) | [.md](../../conversations/2026-05-25-a-continuation....md) '
        + '| 2026-05-25 | 8 |',
    '| 08 | [Semantic Primes](08-semantic-primes.md) | [.md](../../conversations/2026-06-16-semantic-primes.md) '
        + '| 2026-06-16 | 18 |',
].join('\\n');
const transcript = (fileName: string, uuid: string, title: string, messageCount: number): [string, ArchiveTranscript] =>
    [fileName, { fileName, uuid, title, messageCount }];
const transcripts = new Map<string, ArchiveTranscript>([
    transcript('2026-05-25-a-continuation....md', 'c1', 'A Continuation...', 8),
    transcript('2026-06-16-semantic-primes.md', 'c8', 'Semantic Primes', 18),
]);

describe('the check', () => {
    it("reads the archive's statistics, a transcript's front matter and a project cover's filing", () => {
        expect(archiveStatistics(statisticsText)).toEqual({
            conversationCount: 523, messageCount: 19704, projectCount: 41, documentCount: 222, contentfulCount: 513,
        });
        expect(transcriptMeta('t.md', transcriptText))
            .toEqual({ fileName: 't.md', uuid: '7683c3d7', title: 'Seren & The Hard Problem', messageCount: 688 });
        expect(filedTranscriptNames(coverText))
            .toEqual(['2026-05-25-a-continuation....md', '2026-06-16-semantic-primes.md']);
    });

    it('lists only the counts that differ, by name', () => {
        const ours = {
            conversationCount: 523, messageCount: 19704, projectCount: 41, documentCount: 222, contentfulCount: 512,
        };
        expect(countDifferences(ours, archiveStatistics(statisticsText)))
            .toEqual([{ name: 'Conversations with content', ours: '512', theirs: '513' }]);
    });

    it('tells a conversation we paired and the scaffold did not file from the reverse, and a count that differs', () => {
        const primes = sampleConversation('c8', 'Semantic Primes', [sampleTextMessage('m1', 'Doug', 'q')]);
        const books = sampleConversation('c16', 'The Semantics of Books', [sampleTextMessage('m1', 'Doug', 'q')]);
        const filedNames = filedTranscriptNames(coverText);
        expect(filingDifferences([primes, books], filedNames, transcripts)).toEqual([
            { name: 'The Semantics of Books', ours: 'paired', theirs: 'not filed' },
            { name: 'A Continuation...', ours: 'not paired', theirs: 'filed' },
        ]);
        expect(transcriptDifferences([primes, books], transcripts)).toEqual([
            { name: 'Semantic Primes', ours: '1 messages', theirs: '18 messages' },
            { name: 'The Semantics of Books', ours: '1 messages', theirs: 'no transcript' },
        ]);
        expect(differenceLines('filing', [])).toEqual(['filing: no difference']);
    });

    it('reads a written chapter back and finds its messages at the instants of the thread', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question', undefined, '2026-06-15T10:00:00Z');
        const path = [question, sampleTextMessage('m2', 'Claude', 'An answer', 'm1', '2026-06-15T10:01:00Z')];
        const [chapter] = writtenConversation(sampleConversation('c', 'A Conversation', path), path, referents, '../m', '../c').chapters;
        expect(chapterInstants(chapter.tsx)).toEqual(['2026-06-15T10:00:00Z', '2026-06-15T10:01:00Z']);
    });
});
`})]}),"TheCheck9"),R=y(u),D=o(()=>e.jsxs(R,{children:[k(),C(),j(),H(),S(),P(),F(),T(),N(),L(),$(),A()]}),"book");export{D as book};
