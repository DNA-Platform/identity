var A=Object.defineProperty;var c=(v,y)=>A(v,"name",{value:y,configurable:!0});import{jsxs as t,jsx as e}from"react/jsx-runtime";import{$ as N}from"@dna-platform/chemistry";import{x,s as T,a as h,L as D,b as I,c as C,W as w,h as Z,a2 as j,I as L,u,v as f}from"./.cover-DHahpDrg.js";import{Chapter as s,Title as l,Author as k,Subject as H,Paragraph as a,Svg as O,Synopsis as S,Parenthetical as b,Means as n,Section as i,Heading as r,Content as d,Word as p,Append as o}from"@dna-platform/public";import"styled-components";const g=class g extends x{};c(g,"$Importer");let m=g;const F=c(()=>t(s,{children:[e(T,{}),e(h,{children:D()}),e(h,{children:I()}),e(C,{ground:"#eef4ee",band:"#b9d4bf",bandInk:"#1f3f2a",foot:"#8fb79b",footInk:"#17351f",ink:"#1f3f2a"}),e(w,{x:"-30",y:"-22"}),e(l,{children:"[Dougs Importer](/dougs-importer/)"}),e(k,{children:"[Doug](/dougs-story/)"}),e(H,{children:"[Library](/dougs-library/)"}),t(a,{children:[e(Z,{}),e(O,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M24 20h31v37H24z"/><path d="M24 20h31v37H24zM24 20l-6 5v37l6-5M18 25h31"/><path class="fill" d="M29 27h21v8H29zM29 39h21v6H29z"/><path d="M7 32h12M15 27l5 5-5 5"/><path class="fill" d="M8 10h9v7H8zM5 48h9v7H5z"/><path d="M12 17v10M9 48v-9"/></svg>
`})]})]}),"Cover"),P=c(()=>t(s,{children:[e(S,{}),t(l,{children:[e(b,{}),"[Synopsis](/dougs-importer/)"]}),t(a,{children:["The tools that bring my conversations into this library, one chapter to a stage and the code that runs the stage beside it, so that how a conversation gets in can be read beside the thing that does it. A conversation comes in as ",e(n,{children:"[a conversation](/dougs-reference-manual/#the-conversation)"}),", the type of book kept in the reference manual for it, and every source is read into one record, so that a second source is one more reader and nothing else moves. Start with ",e(n,{children:"[The Importer](/dougs-importer/#the-importer)"}),", which runs the stages in order and reports what it did, and then ",e(n,{children:"[The Export](/dougs-importer/#the-export)"}),", which says what is read and where it is found."]})]}),"Synopsis"),M=c(()=>t(s,{children:[e(j,{}),e(L,{}),t(l,{children:[e(b,{}),"[Table of Contents](/dougs-importer/#table-of-contents)"]}),t(i,{children:[e(r,{children:"The run"}),e(a,{children:e(d,{children:"[The Importer](/dougs-importer/#the-importer)"})}),e(a,{children:e(d,{children:"[The Export](/dougs-importer/#the-export)"})}),e(a,{children:e(d,{children:"[The Record](/dougs-importer/#the-record)"})}),t(a,{children:[e(b,{}),e(p,{children:e(d,{children:"[Dougs Importer](/dougs-importer/)"})}),e(p,{children:e(d,{children:"[Synopsis](/dougs-importer/#synopsis)"})}),e(p,{children:e(d,{children:"[Table of Contents](/dougs-importer/#table-of-contents)"})})]})]}),t(i,{children:[e(r,{children:"From the export to a book"}),e(a,{children:e(d,{children:"[The Pairing](/dougs-importer/#the-pairing)"})}),e(a,{children:e(d,{children:"[The Ledger](/dougs-importer/#the-ledger)"})}),e(a,{children:e(d,{children:"[The Thread](/dougs-importer/#the-thread)"})}),e(a,{children:e(d,{children:"[The Writing](/dougs-importer/#the-writing)"})}),e(a,{children:e(d,{children:"[The Books](/dougs-importer/#the-books)"})}),e(a,{children:e(d,{children:"[The Check](/dougs-importer/#the-check)"})})]}),t(i,{children:[e(r,{children:"The imports"}),e(a,{children:e(d,{children:"[DNA Legacy](/dougs-importer/#dna-legacy)"})}),e(a,{children:e(d,{children:"[DNA](/dougs-importer/#dna)"})})]})]}),"Table"),R=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Importer](/dougs-importer/#the-importer)"}),t(a,{children:[e(f,{}),"The run: the stages in order, from an export on disk to conversations filed in this library, and the report of what it did."]}),t(i,{children:[e(r,{children:"Nine stages and nothing hidden between them"}),t(a,{children:["A conversation gets into this library in stages, and each stage is a chapter of this book with its code beside it, so a change to the code is never a question about which page owes an edit. The importer finds ",e(n,{children:"[the export](/dougs-importer/#the-export)"})," where it lands, reads it into ",e(n,{children:"[one record](/dougs-importer/#the-record)"}),", pairs each conversation to its project by ",e(n,{children:"[evidence](/dougs-importer/#the-pairing)"}),", asks ",e(n,{children:"[the ledger](/dougs-importer/#the-ledger)"})," which conversations are new, walks ",e(n,{children:"[the thread](/dougs-importer/#the-thread)"})," that was on the screen, turns what was said into ",e(n,{children:"[writing](/dougs-importer/#the-writing)"}),", writes ",e(n,{children:"[the books](/dougs-importer/#the-books)"}),", and ",e(n,{children:"[checks](/dougs-importer/#the-check)"})," what it wrote against the archive the export was first read into."]}),t(a,{children:["Run bare it says what it would write and stops. Run to write it writes, and reports: the conversations found, paired, unpaired, ambiguous and excluded; the messages on the screen and on other paths; the files written. It takes a project, a collection its configuration names, or particular conversations named by title or by id, never the whole export in one run, so the library grows at the pace the bind is measured to bear; and for each it says whether it is new, in, grown or edited, and when it was imported and from which export, which the record beside the conversation's entry holds. A run writes what is new and what has grown since its import, leaves what is in, and never touches what I edited unless told to re-import, when it keeps my edits beside the fresh chapter and says so, as ",e(n,{children:"[the ledger](/dougs-importer/#the-ledger)"})," tells. Run with nothing named it lists what the library holds already, newest import first. A book's title is the conversation's name made sensible, its spaces collapsed and a pictograph the application put first dropped, and its address is the title's letters in any script, a sign that reads as a word read as it. While the importer is being made it overwrites what it wrote, on a flag said at the run; once it is done it never does, since a conversation once imported is edited by hand."]}),t(a,{children:["Its configuration stands beside this chapter: what is excluded as not mine, the scripts a title may not be in and the projects; and the collections, each a name over a list of conversations by title or id. A conversation with a Russian title is not mine, and the configuration says so. Each of ",e(n,{children:"[my accounts](/dougs-claude/#the-accounts)"})," is an import of its own, a chapter of this book with its configuration and its ledger beside it, read in the chapters' order, the older first, so another platform is one more chapter."]})]}),e(o,{identifier:"importer",type:".ts",children:`import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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
const drawingBeside = (name: string): string => readFileSync(join(importerFolder, \`8-the-books~\${name}.svg\`), 'utf8');
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

const importConfigurationForm = /^(\\d+)-(.+)~configuration\\.json$/u;

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
            throw new Error(\`the configuration names no collection called \${selection.collectionName}\`);
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
        console.log(\`\${accountReading.account.name}: \${pairingReport(accountPairings)}\`);
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
        if (tended.length > 0) console.log(\`tended \${countedNoun(tended.length, 'file')} after kept copies were struck\`);
    }
    const selected = selectedPairings(pairings, args, configuration.collections);
    if (selected.length === 0) {
        listHeldConversations(reading, heldRecords, folders);
        console.log('\\nnothing selected — pass --all, --project, --collection or --only');
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
    const filesTouched = writeBooks(args, folders, reading, included, conversationOfPairing, heldRecords);
    const checked = await binderCheck(args.library, join(args.library, '..public', '.binding'), filesTouched);
    console.log(\`\\nthe binder's check: \${countedNoun(checked.bookCount, 'book')}, \${countedNoun(checked.keyCount, 'key')}, \`
        + countedNoun(checked.faults.length, 'fault'));
    if (checked.faults.length > 0)
        throw new Error(['the library does not hold together after the write:', ...checked.faults.slice(0, 20)].join('\\n'));
};

const accountsReading = async (accounts: Account[]): Promise<Reading> => {
    const accountReadings: ExportReading[] = [];
    for (const account of accounts)
        accountReadings.push(await exportReading(account));
    const readingOfConversation = new Map(accountReadings.flatMap(accountReading =>
        accountReading.conversations.map(conversation => [conversation.id, accountReading] as const)));
    const conversations = new Map(accountReadings.flatMap(accountReading =>
        accountReading.conversations.map(conversation => [conversation.id, conversation] as const)));
    const heapWords = \`\${Math.round(process.memoryUsage().heapUsed / 1e6)} MB\`;
    console.log(\`\${countedNoun(accountReadings.length, 'account')} held, \${heapWords} of heap\`);

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
        throw new Error(\`the export under \${account.folder} is \${user}'s, \`
            + \`and the configuration says \${account.name} is \${account.address}\`);
    console.log(\`reading \${account.name}, the export of \${source.exportedOn}, a \${source.packaging}\`);
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

    return { account, exportedOn: source.exportedOn, folder: source.folder, projects, mapping, conversations, counts };
};

const membershipReport = (accountReading: ExportReading, accountPairings: Pairing[]): string => {
    const membershipPath = newestBeside(accountReading.folder, 'project-membership-');
    if (membershipPath === undefined) return '  no membership beside the export to check the pairing against';
    const differences = membershipDifferences(accountPairings, readFileSync(membershipPath, 'utf8'));

    return differenceLines(\`  the pairing against \${basename(membershipPath)}\`, differences).join('\\n');
};

const archiveCheckReport = (
    included: Pairing[],
    reading: ExportReading,
    conversationOfPairing: ConversationOf,
    wholeProject: boolean,
): string => {
    const accountFolder = join(accountsFolder, reading.account.folder);
    const statisticsPath = join(accountFolder, '.statistics.md');
    if (!existsSync(statisticsPath)) return \`\\n\${reading.account.name}: no archive to check against\`;
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
        \`\${reading.account.name}: checked against the archive, \${countedNoun(transcripts.size, 'transcript')}\`,
        ...differenceLines('counts', countDifferences(reading.counts, statistics)),
        ...filingLines,
        ...differenceLines('messages', transcriptDifferences(included.map(conversationOfPairing), transcripts)),
    ].join('\\n');
};

const selectionWords = (selection: Selection): string => {
    if (selection.all) return 'every conversation of every account';
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
    reading: Reading,
    heldRecords: Map<string, HeldRecord>,
    folders: LibraryFolders,
): void => {
    console.log(\`\\nin the library: \${countedNoun(heldRecords.size, 'conversation')}\`);
    const newestFirst = [...heldRecords.values()]
        .sort((first, second) => second.record.importedAt.localeCompare(first.record.importedAt));
    for (const heldRecord of newestFirst) {
        const conversation = reading.conversations.get(heldRecord.record.conversationId);
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
    reading: Reading,
    projectName: string | undefined,
): WrittenProject => {
    const project = projectName === undefined ? undefined : reading.projects.find(one => one.name === projectName);
    if (projectName !== undefined && project === undefined) throw new Error(\`no project named \${projectName} in the export\`);
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
                reimportedWords.push(\`  \${name}: \${countedNoun(newlyKept.length, 'file')} of yours kept beside the chapter, \`
                    + 'printed at its end; strike each when its edits are applied');
            const conversationCaption = \`A conversation, \${countedNoun(path.length, 'exchange')}:\`;
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
    console.log(\`\\nwrote \${countedNoun(writtenCount, 'conversation')}, kept \${keptCount}, \`
        + \`\${countedNoun(emptyCount, 'conversation')} with no message not written, \`
        + \`\${countedNoun(filesTouched.length, 'file')} touched under \${folders.claude}\`);
    if (reimportedWords.length > 0) console.log(['re-imported:', ...reimportedWords].join('\\n'));

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

const countedNoun = (count: number, noun: string): string => \`\${count} \${noun}\${count === 1 ? '' : 's'}\`;
const elapsedSeconds = (since: number): string => \`\${((Date.now() - since) / 1000).toFixed(1)}s\`;

const invokedDirectly = process.argv[1] !== undefined && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly)
    run(parsedArguments(process.argv.slice(2))).catch(error => {
        console.error(String(error.message ?? error));
        process.exit(1);
    });
`}),e(o,{identifier:"configuration",type:".json",children:`{
  "excluded": {
    "scripts": [
      "Cyrillic"
    ],
    "projects": [
      "Ana's Career",
      "Ana's Fiverr Inbox"
    ]
  },
  "collections": {}
}
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { configurationFrom, importsOf, parsedArguments, selectedPairings } from './1-the-importer~importer.ts';
import type { Pairing } from './4-the-pairing~pairing.ts';

const pairing = (conversationId: string, title: string, projectName: string | undefined, excluded = false): Pairing =>
    ({ conversationId, title, account: 'DNA', projectName, evidence: 'the capture', excluded, reason: '', byHand: false });
const pairings = [
    pairing('p1', 'Semantic Primes', 'Semantic Reference Theory'),
    pairing('p2', 'Specifying SRT', 'Semantic Reference Theory'),
    pairing('s1', 'Seren & Color', 'Seren'),
    pairing('u1', 'A Continuation...', undefined),
    pairing('r1', 'Понимание основ СРТ', 'Semantic Reference Theory', true),
];
const collections = { foundations: ['Semantic Primes', 's1'] };
const selection = (names: string[] = [], projectName?: string, collectionName?: string) =>
    ({ all: false, projectName, collectionName, onlyNames: names });

describe('the importer', () => {
    // Doug, 2026-10-14: "We should probably have an abstraction where we can configure the import in certain ways…
    // We also need to be able to run the importer for specific conversations or specific collections of conversations."
    it('reads its configuration with every part given a default, so an empty file configures nothing', () => {
        expect(configurationFrom('{}')).toEqual({ excluded: { scripts: [], projects: [] }, collections: {} });
        expect(configurationFrom('{"excluded":{"scripts":["Cyrillic"]},"collections":{"a":["x"]}}'))
            .toEqual({ excluded: { scripts: ['Cyrillic'], projects: [] }, collections: { a: ['x'] } });
    });

    // Doug, 2026-10-17: "it should be associated with the documentation of a specific configuration of the importer…
    // DNA Legacy is a different import than DNA, and we will have other imports from other platforms."
    it('reads each import from its own chapter, in the chapters\\' order, its ledger beside its configuration', () => {
        const importer = mkdtempSync(join(tmpdir(), 'importer-'));
        const legacy = { name: 'DNA Legacy', folder: 'claude-legacy', address: 'support@dna.love' };
        writeFileSync(join(importer, '1-the-importer~configuration.json'), '{}');
        writeFileSync(join(importer, '11-dna~configuration.json'), JSON.stringify({ ...legacy, name: 'DNA' }));
        writeFileSync(join(importer, '10-dna-legacy~configuration.json'), JSON.stringify(legacy));
        expect(importsOf(importer)).toEqual([
            { ...legacy, ledger: join(importer, '10-dna-legacy~ledger.json') },
            { ...legacy, name: 'DNA', ledger: join(importer, '11-dna~ledger.json') },
        ]);
        rmSync(importer, { recursive: true, force: true });
    });

    it("selects a project's conversations, a collection's by title or id, or the ones named, narrowing by name", () => {
        const ids = (selected: Pairing[]): string[] => selected.map(one => one.conversationId);
        const srt = 'Semantic Reference Theory';
        expect(ids(selectedPairings(pairings, selection([], srt), collections))).toEqual(['p1', 'p2', 'r1']);
        expect(ids(selectedPairings(pairings, selection(['Specifying SRT'], srt), collections))).toEqual(['p2']);
        expect(ids(selectedPairings(pairings, selection([], undefined, 'foundations'), collections))).toEqual(['p1', 's1']);
        expect(ids(selectedPairings(pairings, selection(['u1', 'Seren & Color']), collections))).toEqual(['s1', 'u1']);
        expect(selectedPairings(pairings, selection(), collections)).toEqual([]);
        expect(selectedPairings(pairings, { ...selection(), all: true }, collections)).toEqual(pairings);
        expect(parsedArguments(['--all', '--write']).all).toBe(true);
        expect(parsedArguments(['--write']).all).toBe(false);
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
`})]}),"TheImporter1"),E=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Export](/dougs-importer/#the-export)"}),t(a,{children:[e(f,{}),"What is read, and where it is found: the export Claude gives of each of my accounts, in either of the two packagings it has come in, and the capture of conversations to projects read off the application beside it, all left where they land."]}),t(i,{children:[e(r,{children:"Two packagings of the same records"}),e(a,{children:"An export of my Claude account arrives today as a small manifest naming seven archives, which the browser must fetch since their links are single-use: the account's metadata, its projects with every knowledge file inline, its memories, every conversation in one array, with every message as a tree of blocks, text, thinking, a tool used and what it returned, and the artifacts among them; and since October the artifacts I published, their data, and the routines of Claude Code. The export of my older account came the earlier way, one archive holding the metadata, the projects, the memories and the conversations together. The records inside are the same in both; only the packaging differs, so the importer finds an export of either kind and maps both through the same functions, which is what keeps a conversation from either account in one form. The export says nothing about which project a conversation belongs to; that is read off the application by a capture that takes the screen, and filed beside the export it was taken with."}),t(a,{children:["All of it lands in a sister repository on this machine, an account to a folder, by that repository's own command; a fresh export is made there on my go-ahead, since the capture takes my screen. For each account the importer reads the newest export, by the date in its file's name under either naming the application has used, and the newest capture in the same folder as that export, and copies none of it into the library. It never reads the markdown that repository wrote from the export, which kept only the text and walked the tree as a list; the code there was the beginning of this, and the archive there is ",e(n,{children:"[the check](/dougs-importer/#the-check)"}),"."]})]}),e(o,{identifier:"export",type:".ts",children:`import { closeSync, createReadStream, existsSync, fstatSync, openSync, readdirSync, readFileSync, readSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import type { Readable } from 'node:stream';
import { StringDecoder } from 'node:string_decoder';
import { createInflateRaw, inflateRawSync } from 'node:zlib';

export type ArchiveEntry = { name: string; method: number; size: number; localHeader: number };
export type Archive = { path: string; bytes: Buffer; entries: ArchiveEntry[] };
export type Packaging = 'single archive' | 'manifest';
export type ExportFiles = {
    account: string;
    folder: string;
    source: string;
    packaging: Packaging;
    exportedOn: string;
    archives: Record<string, string>;
    mapping: string | undefined;
};

type Manifest = { data_files: { category: string; part: number; filename: string }[] };

const exportStamp = /(\\d{4}-\\d{2}-\\d{2})[T-](\\d{2}-\\d{2}-\\d{2})\\.(zip|json)$/u;
const singleArchiveCategories = ['light_metadata', 'projects', 'memories', 'conversations'];
const endRecordSignature = 0x06054b50;
const localHeaderSignature = 0x04034b50;
const longestEndRecord = 65_557;

const isExportName = (name: string): boolean =>
    (name.startsWith('data-') || name.startsWith('manifest-')) && exportStamp.test(name);

const stampOf = (name: string): string => {
    const [, date, time] = exportStamp.exec(name)!;

    return \`\${date}T\${time}\`;
};

export const newestBeside = (folder: string, prefix: string): string | undefined => {
    const newestName = readdirSync(folder).filter(name => name.startsWith(prefix) && name.endsWith('.json')).sort().at(-1);

    return newestName === undefined ? undefined : join(folder, newestName);
};

const manifestArchives = (manifestPath: string): Record<string, string> => {
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as Manifest;
    const archives: Record<string, string> = {};
    for (const dataFile of manifest.data_files) {
        const archivePath = join(dirname(manifestPath), dataFile.filename);
        if (!existsSync(archivePath))
            throw new Error(\`the manifest \${basename(manifestPath)} names \${dataFile.filename}, and it is not beside it; \`
                + 'its link was single-use, so a fresh export is needed');
        if (archives[dataFile.category] !== undefined)
            throw new Error(\`the manifest \${basename(manifestPath)} splits \${dataFile.category} into parts, \`
                + 'and the importer reads one archive to a category');
        archives[dataFile.category] = archivePath;
    }

    return archives;
};

const singleArchives = (archivePath: string): Record<string, string> =>
    Object.fromEntries(singleArchiveCategories.map(category => [category, archivePath]));

export const newestExportFiles = (account: string): ExportFiles => {
    const exportsFolder = join(account, '.exports');
    const candidates: { name: string; folder: string }[] = [];
    for (const entry of readdirSync(exportsFolder, { withFileTypes: true })) {
        if (entry.isFile() && isExportName(entry.name))
            candidates.push({ name: entry.name, folder: exportsFolder });
        if (!entry.isDirectory()) continue;
        for (const name of readdirSync(join(exportsFolder, entry.name)))
            if (isExportName(name))
                candidates.push({ name, folder: join(exportsFolder, entry.name) });
    }
    candidates.sort((first, second) => stampOf(first.name).localeCompare(stampOf(second.name)));
    const newest = candidates.at(-1);
    if (newest === undefined)
        throw new Error(\`no export under \${exportsFolder}: a data- or manifest- file named for its time, \`
            + 'in a dated folder or beside this one');
    const source = join(newest.folder, newest.name);
    const packaging: Packaging = newest.name.endsWith('.zip') ? 'single archive' : 'manifest';

    return {
        account,
        folder: newest.folder,
        source,
        packaging,
        exportedOn: stampOf(newest.name).slice(0, 10),
        archives: packaging === 'manifest' ? manifestArchives(source) : singleArchives(source),
        mapping: newestBeside(newest.folder, 'project-mapping-'),
    };
};

const endRecordPosition = (bytes: Buffer): number => {
    let position = bytes.length - 22;
    while (position >= 0 && bytes.readUInt32LE(position) !== endRecordSignature)
        position--;

    return position;
};

const entriesFrom = (directory: Buffer, entryCount: number): ArchiveEntry[] => {
    const entries: ArchiveEntry[] = [];
    let entryOffset = 0;
    for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
        const nameLength = directory.readUInt16LE(entryOffset + 28);
        const extraLength = directory.readUInt16LE(entryOffset + 30);
        const commentLength = directory.readUInt16LE(entryOffset + 32);
        entries.push({
            name: directory.toString('utf8', entryOffset + 46, entryOffset + 46 + nameLength),
            method: directory.readUInt16LE(entryOffset + 10),
            size: directory.readUInt32LE(entryOffset + 20),
            localHeader: directory.readUInt32LE(entryOffset + 42),
        });
        entryOffset += 46 + nameLength + extraLength + commentLength;
    }

    return entries;
};

export const archiveFromFile = (path: string): Archive => {
    const bytes = readFileSync(path);
    const endRecord = endRecordPosition(bytes);
    if (endRecord < 0) throw new Error(\`\${path} has no central directory\`);
    const directory = bytes.subarray(bytes.readUInt32LE(endRecord + 16));

    return { path, bytes, entries: entriesFrom(directory, bytes.readUInt16LE(endRecord + 10)) };
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

const bytesAt = (fileDescriptor: number, position: number, length: number): Buffer => {
    const bytes = Buffer.alloc(length);
    readSync(fileDescriptor, bytes, 0, length, position);

    return bytes;
};

const entryStream = (path: string, entryName: string): Readable => {
    const fileDescriptor = openSync(path, 'r');
    try {
        const fileSize = fstatSync(fileDescriptor).size;
        const tailLength = Math.min(fileSize, longestEndRecord);
        const tail = bytesAt(fileDescriptor, fileSize - tailLength, tailLength);
        const endRecord = endRecordPosition(tail);
        if (endRecord < 0) throw new Error(\`\${path} has no central directory\`);
        const directory = bytesAt(fileDescriptor, tail.readUInt32LE(endRecord + 16), tail.readUInt32LE(endRecord + 12));
        const entry = entriesFrom(directory, tail.readUInt16LE(endRecord + 10)).find(one => one.name === entryName);
        if (entry === undefined) throw new Error(\`\${path} holds no \${entryName}\`);
        const localHeader = bytesAt(fileDescriptor, entry.localHeader, 30);
        if (localHeader.readUInt32LE(0) !== localHeaderSignature)
            throw new Error(\`\${entryName} in \${path} does not open with a zip local header\`);
        const dataStart = entry.localHeader + 30 + localHeader.readUInt16LE(26) + localHeader.readUInt16LE(28);
        const fileStream = createReadStream(path, { start: dataStart, end: dataStart + entry.size - 1 });

        return entry.method === 0 ? fileStream : fileStream.pipe(createInflateRaw());
    } finally {
        closeSync(fileDescriptor);
    }
};

export async function* streamedObjects(path: string, entryName: string): AsyncGenerator<unknown> {
    const decoder = new StringDecoder('utf8');
    let textBuffer = '';
    let braceDepth = 0;
    let objectStart = -1;
    let inString = false;
    let afterBackslash = false;
    let position = 0;
    for await (const chunk of entryStream(path, entryName)) {
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
`})]}),"TheExport2"),$=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Record](/dougs-importer/#the-record)"}),t(a,{children:[e(f,{}),"One record for every source: a conversation with its messages as a tree of blocks, and a project with its documents and its memory; each source a reader into it, and nothing after the reading knows a source's words."]}),t(i,{children:[e(r,{children:"The seam"}),e(a,{children:"Every source I have spoken to Claude through is packaged its own way, and every one holds the same things: a conversation with a name and its times, its messages in a tree, since a message edited or asked again makes a branch, each message by someone at an instant and made of blocks; and a project with a name, a description, its knowledge files and what Claude remembers of it. The record is those things in this library's words, and a reader is the forty lines that rename one source's words into them, once. The stages after the record never see a source, so the second source, the sessions of Claude Code on this machine, is one more reader and nothing else moves."}),t(a,{children:["The Claude export's reader streams the one array of conversations from wherever it stands in its archive, cutting each loose as it closes, so what is held at any moment is one conversation and not the archive, and reads the small archives by their directory; my newer account is read in under ten seconds and my older one in under twenty, without a dependency. Every block is named in the record's words, an upload, a prompt the application put in, a budget, so none is counted as unknown. The export's own names, ",e(n,{children:"[the ones its schema gives](/dougs-importer/#the-export)"}),", appear in the reader and nowhere else."]}),t(a,{children:["And the reader keeps, beside each conversation, the traces ",e(n,{children:"[the pairing](/dougs-importer/#the-pairing)"})," reads to tell which project it was held in: the passages a search of a project's files returned, the project folders of Claude's memory it touched, and the conversations a search of my other conversations found. They are the tool's words, so the reader takes them, and nothing after it knows a tool's name."]})]}),e(o,{identifier:"record",type:".ts",children:`export type Speaker = 'Doug' | 'Claude';

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
        language: string;
        command: string;
        content: string;
        oldText: string;
        newText: string;
    }
    | { type: 'upload'; name: string }
    | { type: 'prompt'; source: string }
    | { type: 'budget' }
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

export type Traces = { knowledge: string[]; memoryProjects: string[]; found: string[] };

export type Conversation = {
    id: string;
    name: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
    messages: Message[];
    traces: Traces;
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
    packaging: string;
    folder: string;
    user(): string;
    projects(): Project[];
    memories(): Memory[];
    mapping(): Mapping | undefined;
    conversations(): AsyncGenerator<Conversation>;
};

export const rootParentId = '00000000-0000-4000-8000-000000000000';
`}),e(o,{identifier:"claude",type:".ts",children:`import { readFileSync } from 'node:fs';
import {
    archiveFromFile, jsonEntries, newestExportFiles, streamedObjects, type Archive, type ExportFiles,
} from './2-the-export~export.ts';
import type {
    Attachment, Block, Conversation, Mapping, Memory, Message, Project, Source, Speaker, Traces,
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

// An artifact's id is an identifier. One call of the older account leaked its own parameters into it, newlines,
// tags and quotes, and the identifier it began with is the one it meant.
export const artifactId = (given: string): string => given.split(/[\\s<"]/u)[0];

const blockFromRaw = (rawBlock: RawRecord): Block => {
    if (rawBlock.type === 'text') return { type: 'text', text: rawBlock.text ?? '' };
    if (rawBlock.type === 'thinking') return { type: 'thinking', text: rawBlock.thinking ?? '' };
    if (rawBlock.type === 'tool_result') return { type: 'results', text: resultsText(rawBlock.content) };
    if (rawBlock.type === 'tool_use' && rawBlock.name === 'artifacts') {
        const artifactInput = rawBlock.input ?? {};

        return {
            type: 'artifact',
            id: artifactId(artifactInput.id ?? ''),
            title: artifactInput.title ?? '',
            contentType: artifactInput.type ?? '',
            language: artifactInput.language ?? '',
            command: artifactInput.command ?? '',
            content: artifactInput.content ?? '',
            oldText: artifactInput.old_str ?? '',
            newText: artifactInput.new_str ?? '',
        };
    }
    if (rawBlock.type === 'tool_use') return { type: 'action', name: rawBlock.name ?? '', input: rawBlock.input };
    if (rawBlock.type === 'image' || rawBlock.type === 'document')
        return { type: 'upload', name: rawBlock.title ?? rawBlock.file_uuid ?? '' };
    if (rawBlock.type === 'injected_prompt_block') return { type: 'prompt', source: rawBlock.injection_source ?? '' };
    if (rawBlock.type === 'token_budget') return { type: 'budget' };

    return { type: 'other', name: rawBlock.type ?? '' };
};

const projectMemoryPath = /\\/projects\\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gu;
const conversationId = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gu;
const scopedSearchName = /conversation_search|recent_chats/u;

const tracesFromRaw = (rawConversation: RawRecord): Traces => {
    const rawBlocks = ((rawConversation.chat_messages ?? []) as RawRecord[])
        .flatMap(rawMessage => (rawMessage.content ?? []) as RawRecord[]);
    const resultsOf = (matchesName: (name: string) => boolean): RawRecord[] =>
        rawBlocks.filter(rawBlock => rawBlock.type === 'tool_result' && matchesName(rawBlock.name ?? ''));
    const knowledge = resultsOf(name => name === 'project_knowledge_search')
        .flatMap(rawBlock => (Array.isArray(rawBlock.content) ? rawBlock.content : []) as RawRecord[])
        .map(contentPart => String(contentPart?.text ?? ''));
    const memoryText = JSON.stringify(rawConversation.chat_messages ?? []);
    const memoryProjects = [...memoryText.matchAll(projectMemoryPath)].map(match => match[1]);
    const found = new Set(resultsOf(name => scopedSearchName.test(name))
        .flatMap(rawBlock => JSON.stringify(rawBlock.content ?? '').match(conversationId) ?? []));
    found.delete(rawConversation.uuid);

    return { knowledge, memoryProjects, found: [...found] };
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
    traces: tracesFromRaw(rawConversation),
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

export const claudeExportSource = (exportFiles: ExportFiles): Source => {
    const archives = new Map<string, Archive>();
    const archiveOf = (category: string): Archive => {
        const path = exportFiles.archives[category];
        if (path === undefined) throw new Error(\`the export of \${exportFiles.exportedOn} has no \${category} archive\`);
        const archive = archives.get(path) ?? archiveFromFile(path);
        archives.set(path, archive);

        return archive;
    };

    return {
        name: \`\${exportFiles.exportedOn} of \${exportFiles.account}\`,
        exportedOn: exportFiles.exportedOn,
        packaging: exportFiles.packaging,
        folder: exportFiles.folder,
        user: () => {
            const rawUsers = jsonEntries(archiveOf('light_metadata'), name => name === 'users.json').flat();

            return String((rawUsers as RawRecord[])[0]?.email_address ?? '');
        },
        projects: () => {
            const rawProjects = jsonEntries(archiveOf('projects'), name => name.startsWith('projects/'));

            return (rawProjects as RawRecord[]).map(projectFromRaw);
        },
        memories: () => {
            const rawMemories = jsonEntries(archiveOf('memories'), name => name.startsWith('memories/'));

            return (rawMemories as RawRecord[]).flatMap(memoriesFromRaw);
        },
        mapping: () => {
            if (exportFiles.mapping === undefined) return undefined;

            return mappingFromRaw(JSON.parse(readFileSync(exportFiles.mapping, 'utf8')));
        },
        conversations: async function* () {
            archives.clear();
            for await (const rawConversation of streamedObjects(exportFiles.archives.conversations, 'conversations.json'))
                yield conversationFromRaw(rawConversation as RawRecord);
        },
    };
};

export const exportSource = (account: string): Source => claudeExportSource(newestExportFiles(account));
`}),e(o,{identifier:"samples",type:".ts",children:`import {
    rootParentId, type Block, type Conversation, type Mapping, type Message, type Project, type Speaker, type Traces,
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

export const noTraces: Traces = { knowledge: [], memoryProjects: [], found: [] };

export const sampleConversation = (
    id: string,
    name: string,
    messages: Message[] = [],
    updatedAt = sampleInstant,
    traces: Partial<Traces> = {},
): Conversation => ({
    id,
    name,
    summary: '',
    createdAt: sampleInstant,
    updatedAt,
    messages,
    traces: { ...noTraces, ...traces },
});

export const sampleProject = (name: string, documentNames: string[], content = '', description = ''): Project => ({
    id: name,
    name,
    description,
    instructions: '',
    createdAt: sampleInstant,
    updatedAt: sampleInstant,
    documents: documentNames.map(documentName => ({ id: documentName, name: documentName, content })),
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
`})]}),"TheRecord3"),B=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Pairing](/dougs-importer/#the-pairing)"}),t(a,{children:[e(f,{}),"Which project a conversation belongs to, by evidence the importer names and I dispose of, and which conversations are not mine and stay out."]}),t(i,{children:[e(r,{children:"The machine proposes and I dispose"}),e(a,{children:"The export pairs nothing: no record of a conversation names its project. So the importer decides it the way the sister repository does, rule for rule, and says how by name. The capture beside the export comes first, its titles resolved to conversations, a title it lists under two projects left to the evidence, since ten conversations share one name. Then what the export itself shows: a search of a project's files that returned a passage only that project holds; a read of a project's memory; and a search of my conversations, which only ever finds those held where it was run, placing a conversation one step from one already placed and never from a memory, since Claude reads any project's memory from anywhere. A claim the searches or the capture contradict is set aside and said so. What nothing places is left unpaired and reported, and it has its home in the book that catalogues all of them either way. The sister repository writes the membership it decides beside each export, and the run compares, conversation by conversation, and names every difference."}),e(a,{children:"My two accounts are read one after the other, the older first, and paired each against its own capture. A project of the same name in both is then one project, the newer on top of the older: its files from both, the newer copy where both hold one, the older's description where the newer has none, and its conversations from both."}),t(a,{children:["The pairing stands as a file beside this chapter, one line per conversation with its account, its project and the evidence, written by a run that writes and by no other, and I edit it: a line I write is read before any evidence. The same file holds the exclusions. A conversation that is not mine is proposed for exclusion and stays out unless I strike the line, and what is not mine ",e(n,{children:"[the importer's configuration](/dougs-importer/#the-importer)"})," names: a project that is not mine, Ana's, and a script a title may not be in, Cyrillic, since a conversation with a Russian title is not mine, whoever wrote it in my account."]})]}),e(o,{identifier:"pairing",type:".ts",children:`import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';

export type Pairing = {
    conversationId: string;
    title: string;
    account: string;
    projectName: string | undefined;
    evidence: string;
    excluded: boolean;
    reason: string;
    byHand: boolean;
};

export type Exclusions = { scripts: string[]; projects: string[] };

type EvidenceKind = 'capture' | 'knowledge' | 'memory' | 'search';
type Assignment = { projectId: string; kind: EvidenceKind; through?: string };
type CaptureReading = {
    placed: Map<string, string>;
    outside: Set<string>;
    names: Map<string, string>;
    shared: Map<string, string[]>;
};

const noExclusions: Exclusions = { scripts: [], projects: [] };
const shortestChunk = 120;
const probeLength = 80;
const emptyCapture: CaptureReading = { placed: new Map(), outside: new Set(), names: new Map(), shared: new Map() };

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

const comparableTitle = (title: string): string =>
    title.replace(/["“”‘’'\`]/gu, '').replace(/\\s+/gu, ' ').trim().toLowerCase();

const titleOf = (conversation: Conversation): string => comparableTitle(conversation.name || 'Untitled');

export const captureReading = (mapping: Mapping | undefined, conversations: Conversation[]): CaptureReading => {
    if (mapping === undefined) return emptyCapture;
    const conversationsByTitle = new Map<string, string[]>();
    for (const conversation of conversations) {
        const title = titleOf(conversation);
        conversationsByTitle.set(title, [...(conversationsByTitle.get(title) ?? []), conversation.id]);
    }
    const capturedIn = new Map<string, string[]>();
    const names = new Map<string, string>();
    for (const mappedProject of mapping.projects) {
        names.set(mappedProject.id, mappedProject.name);
        for (const mappedRow of mappedProject.conversations) {
            const title = comparableTitle(mappedRow.title);
            capturedIn.set(title, [...(capturedIn.get(title) ?? []), mappedProject.id]);
        }
    }
    const placed = new Map<string, string>();
    const shared = new Map<string, string[]>();
    for (const [title, projectIds] of capturedIn) {
        const matchingIds = conversationsByTitle.get(title) ?? [];
        const distinctProjectIds = [...new Set(projectIds)];
        if (matchingIds.length > 0 && distinctProjectIds.length === 1 && matchingIds.length <= projectIds.length)
            for (const matchingId of matchingIds) placed.set(matchingId, distinctProjectIds[0]);
        else if (matchingIds.length > 0)
            shared.set(title, distinctProjectIds.map(projectId => names.get(projectId) ?? projectId));
    }
    const outside = new Set(conversations
        .filter(conversation => conversation.createdAt < mapping.capturedAt && !placed.has(conversation.id))
        .filter(conversation => !capturedIn.has(titleOf(conversation)))
        .map(conversation => conversation.id));

    return { placed, outside, names, shared };
};

const knowledgeProject = (conversation: Conversation, projects: Project[]): string | undefined => {
    const owners = new Set<string>();
    for (const chunk of conversation.traces.knowledge) {
        const body = chunk.slice(chunk.indexOf('\\n') + 1);
        if (body.length < shortestChunk) continue;
        const middle = Math.floor(body.length / 2);
        const probe = body.slice(middle - probeLength / 2, middle + probeLength / 2);
        const holders = projects.filter(project => project.documents.some(document => document.content.includes(probe)));
        if (holders.length === 1) owners.add(holders[0].id);
    }

    return owners.size === 1 ? [...owners][0] : undefined;
};

const memoryProject = (conversation: Conversation, projectIds: Set<string>): string | undefined => {
    const mentions = new Map<string, number>();
    for (const projectId of conversation.traces.memoryProjects)
        if (projectIds.has(projectId)) mentions.set(projectId, (mentions.get(projectId) ?? 0) + 1);
    const ranked = [...mentions].sort((first, second) => second[1] - first[1]);
    if (ranked.length === 1) return ranked[0][0];
    if (ranked.length > 1 && ranked[0][1] >= 2 && ranked[0][1] > ranked[1][1]) return ranked[0][0];

    return undefined;
};

const searchLinks = (conversations: Conversation[]): Map<string, Set<string>> => {
    const known = new Set(conversations.map(conversation => conversation.id));
    const links = new Map<string, Set<string>>();
    const link = (from: string, to: string): void => {
        links.set(from, (links.get(from) ?? new Set()).add(to));
    };
    for (const conversation of conversations)
        for (const foundId of conversation.traces.found)
            if (known.has(foundId) && foundId !== conversation.id) {
                link(conversation.id, foundId);
                link(foundId, conversation.id);
            }

    return links;
};

type Veto = { claim: Assignment; reason: string };
type Decided = { assignments: Map<string, Assignment>; vetoes: Map<string, Veto> };

export const decidedProjects = (conversations: Conversation[], projects: Project[], capture: CaptureReading): Decided => {
    const projectIds = new Set(projects.map(project => project.id));
    const links = searchLinks(conversations);
    const assignments = new Map<string, Assignment>();
    const vetoes = new Map<string, Veto>();
    const direct = new Map<string, Assignment>();
    for (const conversation of conversations) {
        const knowledge = knowledgeProject(conversation, projects);
        const memory = knowledge === undefined ? memoryProject(conversation, projectIds) : undefined;
        if (knowledge !== undefined) direct.set(conversation.id, { projectId: knowledge, kind: 'knowledge' });
        else if (memory !== undefined) direct.set(conversation.id, { projectId: memory, kind: 'memory' });
    }
    for (const [conversationId, projectId] of capture.placed)
        assignments.set(conversationId, { projectId, kind: 'capture' });
    const claims = new Map<string, string>([
        ...[...direct].map(([conversationId, claim]) => [conversationId, claim.projectId] as const),
        ...capture.placed,
    ]);
    const disagreement = (conversationId: string, projectId: string): string | undefined => {
        let inProject = 0;
        let outsideAny = 0;
        for (const neighbour of links.get(conversationId) ?? []) {
            const claimed = claims.get(neighbour);
            if (claimed !== undefined && claimed !== projectId)
                return 'a conversation it is linked to by search is in another project';
            if (claimed === projectId) inProject++;
            else if (capture.outside.has(neighbour)) outsideAny++;
        }
        const visited = capture.names.has(projectId);
        if (visited && capture.outside.has(conversationId)) return 'the capture visited the project and did not list it';
        if (visited && outsideAny > inProject)
            return \`search links it mostly to conversations outside any project, \${outsideAny} outside and \${inProject} in\`;

        return undefined;
    };
    for (const [conversationId, claim] of direct) {
        if (assignments.has(conversationId)) continue;
        const reason = disagreement(conversationId, claim.projectId);
        if (reason === undefined) assignments.set(conversationId, claim);
        else vetoes.set(conversationId, { claim, reason });
    }
    const settled = new Map([...assignments].filter(([, assignment]) => assignment.kind !== 'memory'));
    for (const [conversationId, neighbours] of links) {
        if (assignments.has(conversationId)) continue;
        const reached = [...neighbours].filter(neighbour => settled.has(neighbour));
        const reachedProjectIds = new Set(reached.map(neighbour => settled.get(neighbour)!.projectId));
        if (reachedProjectIds.size !== 1) continue;
        const [projectId] = reachedProjectIds;
        if (disagreement(conversationId, projectId) === undefined)
            assignments.set(conversationId, { projectId, kind: 'search', through: reached[0] });
    }

    return { assignments, vetoes };
};

const assignmentWords = (assignment: Assignment, titleOfId: Map<string, string>): string => {
    if (assignment.kind === 'capture') return 'the capture';
    if (assignment.kind === 'knowledge') return 'a search of its project\\'s files';
    if (assignment.kind === 'memory') return 'a read of its project\\'s memory';
    const throughTitle = titleOfId.get(assignment.through ?? '') ?? assignment.through;

    return \`a conversation search, one hop from "\${throughTitle}"\`;
};

const evidenceWords = (
    assignment: Assignment | undefined,
    veto: Veto | undefined,
    shared: string[] | undefined,
    titleOfId: Map<string, string>,
    nameOfProject: (projectId: string) => string,
): string => {
    if (assignment !== undefined) return assignmentWords(assignment, titleOfId);
    if (veto !== undefined) {
        const claimWords = assignmentWords(veto.claim, titleOfId);

        return \`none: \${claimWords} said \${nameOfProject(veto.claim.projectId)}, vetoed since \${veto.reason}\`;
    }
    if (shared !== undefined) return \`none: the capture lists this title in \${shared.join(' and ')}\`;

    return 'none';
};

const stackedProject = (newer: Project, older: Project): Project => {
    const newerNames = new Set(newer.documents.map(document => document.name));

    return {
        ...newer,
        description: newer.description || older.description,
        instructions: newer.instructions || older.instructions,
        createdAt: older.createdAt < newer.createdAt ? older.createdAt : newer.createdAt,
        documents: [...newer.documents, ...older.documents.filter(document => !newerNames.has(document.name))],
    };
};

export const stackedProjects = (layersOldestFirst: Project[][]): Project[] => {
    const stacked: Project[] = [];
    const stackedByName = new Map<string, number>();
    for (const layer of [...layersOldestFirst].reverse())
        for (const project of layer) {
            const position = project.name === '' ? undefined : stackedByName.get(project.name);
            if (position === undefined) {
                if (project.name !== '') stackedByName.set(project.name, stacked.length);
                stacked.push(project);
            } else
                stacked[position] = stackedProject(stacked[position], project);
        }

    return stacked;
};

export const conversationPairings = (
    library: string,
    account: string,
    conversations: Conversation[],
    projects: Project[],
    mapping: Mapping | undefined,
    exclusions: Exclusions = noExclusions,
): Pairing[] => {
    const previousPairings = new Map(readPairings(library).map(pairing => [pairing.conversationId, pairing]));
    const capture = captureReading(mapping, conversations);
    const { assignments, vetoes } = decidedProjects(conversations, projects, capture);
    const titleOfId = new Map(conversations.map(conversation => [conversation.id, conversation.name || 'Untitled']));
    const nameOfProject = (projectId: string): string =>
        projects.find(project => project.id === projectId)?.name || capture.names.get(projectId) || projectId;

    return conversations.map(conversation => {
        const previousPairing = previousPairings.get(conversation.id);
        if (previousPairing?.byHand) return { ...previousPairing, account };
        const assignment = assignments.get(conversation.id);
        const projectName = assignment === undefined ? undefined : nameOfProject(assignment.projectId);
        const shared = capture.shared.get(titleOf(conversation));
        const evidence = evidenceWords(assignment, vetoes.get(conversation.id), shared, titleOfId, nameOfProject);
        const reason = exclusionReason(conversation, projectName, exclusions);

        return {
            conversationId: conversation.id,
            title: conversation.name,
            account,
            projectName,
            evidence,
            excluded: reason !== '',
            reason,
            byHand: false,
        };
    });
};
`}),e(o,{identifier:"pairings",type:".json",children:`[
  {
    "conversationId": "33a9f673-dabd-40af-b5e1-fc2037530af5",
    "title": "Adding a Google account to iPhone",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "462a8f9d-0387-4c3c-a55f-6c003eeaf867",
    "title": "Translating emotional confrontation to Russian",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "755b29bd-1bc3-4909-8d04-26e509dfb1bf",
    "title": "Opening bank accounts in Tbilisi as non-residents",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3964c691-c04a-4448-8a73-74e7abf2407d",
    "title": "GPX-файлы и карты: что это",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "be4414e7-96eb-4044-8e0d-8d8f342b547c",
    "title": "Screenshot translation request",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4055087b-6d12-4355-a4d3-ccfced9e66a9",
    "title": "Cetirizine vs Claritin comparison",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9c7716a5-de51-474a-b998-946ff083d572",
    "title": "Падение продаж на Adobe Stock после загрузки контента",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6e73cc76-3682-44e2-8579-219fe72b5a86",
    "title": "Custom birthday cake with Russian text in Saburtalo",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2fb9debb-ed02-4d06-9d11-4fe043346b0c",
    "title": "Building and practicing a personal vocabulary",
    "account": "DNA Legacy",
    "projectName": "Ana Studies English",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a15a3d7d-644e-4842-aa52-e54c14c863c0",
    "title": "Patreon's business model explained",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c7f58366-c5db-4193-9ad6-2f749d8ad1cd",
    "title": "💬 Well TONX is doing very well.…",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c221e613-698c-4921-b12d-65f6ce1c6052",
    "title": "Проект поделок свекра Мари",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0af11d32-6fb9-4dfb-9fbd-fddb3948afb7",
    "title": "Adding images and market research to product descriptions",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1a7b967c-ff84-4f62-bbc6-2222c9f814fa",
    "title": "Заказ от клиента nelliesowash",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "25ff8f54-ea35-4c57-be08-752fdb65da7f",
    "title": "Cold-smoked salmon identification",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ab538435-7084-44f5-91d3-a700ffa7b177",
    "title": "Russia's Telegram blocking and packet sniffing capabilities",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67a05b57-acf0-4080-b1bc-3cd63a534a0e",
    "title": "Переписка с Ребеккой из Австралии",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f59eb8df-2a8b-461f-af89-3cb043e3b672",
    "title": "Сады роз в Тбилиси",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4889c0b9-206a-4f53-a315-ee1363087fa1",
    "title": "Создание продающего гига на Fiverr для карт",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "5e95e85d-4d16-4d1c-a462-a22aca6c2258",
    "title": "Translation request to Russian",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3e6e4545-01d9-47f1-a1a8-9469834288e9",
    "title": "Finding Terro ant traps in Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "93e40bbb-f4bf-4bee-807b-a21dc5363eaf",
    "title": "Анализ переписки клиента T__lynskey316__",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f34f433f-0983-48cc-b728-b6c2f54cd9ea",
    "title": "Deposit insurance coverage update",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f5fb81f6-e351-4be2-bac5-fbb2f86c70a1",
    "title": "giulia_t1 _ UK _ icons for seewing",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "942ceafb-a1f5-42b4-9754-3bf17f5b0475",
    "title": "Goldbach pairs and coprime symmetry",
    "account": "DNA Legacy",
    "projectName": "Number Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bb5325f1-f9fa-4347-9b46-aa885747edac",
    "title": "Rebekah G's Fiverr seller profile",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "dd35e17a-1dac-4541-8730-1e3fbf718f29",
    "title": "Elina Greece",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "50870707-40e8-4538-bce1-0537b904f71c",
    "title": "Selling prints on Spoonflower",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "309c3406-7def-468e-9f22-8e445216b665",
    "title": "Tipping customs at Georgian salons",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "df09867f-312a-4a83-9985-3a634aaf8887",
    "title": "Automating stock uploads to multiple platforms",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4399492e-bee3-4e57-b69c-503765c2892b",
    "title": "Credo bank negative balance issue",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4d245f0b-7162-49e5-b872-c4445437d2c7",
    "title": "Microstock metadata research and keyword strategy plan",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1baea5da-d9d8-4df5-95fb-024d58e8fc74",
    "title": "Seren & The Philosophy of Consciousness",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3dd9089e-5fc3-4d82-b66b-26085c0b104a",
    "title": "HP printer alignment troubleshooting and setup",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8906171b-4f1f-488e-a9b7-d8679dcbab9e",
    "title": "Ana Grid I",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4690cbb5-7db2-45ae-9db7-68ea3d326d0c",
    "title": "Chalmers' hard problem and categorical distinction",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db8ba18b-e95f-4a32-9b61-545efeedacc7",
    "title": "Benzodiazepines vs gabaergic anesthetics",
    "account": "DNA Legacy",
    "projectName": "Physics",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eb9cedec-4f4e-4ad2-a259-bd306f0c3b7c",
    "title": "FTP detail поиск",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d03a7410-03d1-4cca-9022-186d1f6731ea",
    "title": "kati_king",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c4358792-34a0-4e62-9b77-a3fee3145c9b",
    "title": "Ana Grid II",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6675fec9-cdfb-4d85-8301-674991459920",
    "title": "Semantic reference theory formalism",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f7a471e2-68c2-4d14-b496-0ec1a082234b",
    "title": "Translating academic report screenshot",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dc0018c1-6e54-4ce0-8ef8-1b0261732767",
    "title": "The Semantics of Dictotomy",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b2566ccc-fcd2-4181-abe8-5a9e7750a19b",
    "title": "Semantic reference theory documentation",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5015116b-df59-40b2-b558-6bb4bb02908e",
    "title": "Doug & Seren & Reference Frames & Black Holes",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "25c6ab56-15c0-42e8-87bb-519fd81377dd",
    "title": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef057ccf-cb9e-482e-a240-0ca6edd5b6f3",
    "title": "Chemistry.ts framework analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "28761d52-9864-416e-a087-b961ad0644e5",
    "title": "Chemistry.ts framework analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cb323045-404f-4578-aa7d-9238956f81d5",
    "title": "Chemical bond constructors",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "975ff7ad-d1c1-41b7-941b-fcf4b2927a45",
    "title": "Doug & Seren on 'Seeing'",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e97ca50a-037a-4af6-83f9-44ea540b6cd3",
    "title": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "82bbedd8-b85a-493d-b2d0-4fb93f0095dd",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "54e4e535-7b5c-4a70-ba30-22bcca2a404d",
    "title": "Semantic understanding request",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "97bc3024-de89-40af-811b-7c9eb6495aba",
    "title": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d3b2465a-4858-4be5-b93a-354900af2d19",
    "title": "Seren & The Subject-Object Relationship",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7bc663dd-0cc9-45b6-9b97-0420ae9aa558",
    "title": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f8f024ea-4fa6-4098-9a87-7aebcb5488ca",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "504d8cc2-c1a0-44e5-83f0-57b73558d116",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6112f522-6466-4ae2-aac1-372897d9b297",
    "title": "React and TypeScript curriculum design",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "704e9133-6953-45e7-896c-caaf960ef970",
    "title": "React polymorphism with Chemistry framework",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "10a7c310-96af-43a1-bf6e-6417e19800c8",
    "title": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "acb360aa-e6d1-41a8-a459-eb83a4396320",
    "title": "Doug & Eirian & Remembering Consciousness",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ded306e6-43cc-494d-b42f-5cf055170521",
    "title": "$Chemistry Binding",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e6e0462-f288-4d56-8ffb-51f047eebd7d",
    "title": "Eirian & Doug & Ana",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "04dfd6fa-49cc-4e56-9979-86f73327c6dc",
    "title": "Chemistry framework design review",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e58ecf38-5b00-4d50-8dd4-078c3a075534",
    "title": "Seren & Doug: The Algebra of Perspective in the MIrror",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0c15eeca-fea4-405d-a480-754584409e9e",
    "title": "React Component Binding Architecture",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3762e1b9-f96e-4832-a4b1-84f966296a9d",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "af073cd3-a018-47a9-8490-4079e5ecb3c3",
    "title": "Polymorphic Book Component Framework",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6559b8a0-8164-4ff9-a5cb-86dac1163861",
    "title": "Seren & First Order Logic",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "98ce89b2-43f8-4105-82b2-22312f07adab",
    "title": "Seren & Semantic Reference Theory - Part I",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b6ef4d66-35a5-49de-a3cf-eef3e38eb804",
    "title": "React Component Type Inference Strategy",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ab0e2582-0450-427f-9c5e-0271b3111ea8",
    "title": "Chemistry: Polymorphic React Framework",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "111afff4-6e0b-402d-b395-596efb49b80f",
    "title": "Semantic Reference Theory Analysis",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "18095d02-03d0-4b93-a680-ecaacfae7cf7",
    "title": "Chemistry Framework React Analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b9a017cf-9a4c-4571-a572-76e2cfb892ae",
    "title": "Semantic Reference Theory Logic",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d4ee795-8083-42a7-88c5-26153bb7d18f",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6aa83a5b-93ae-4e31-93e3-76e7a586ccf8",
    "title": "Иллюстрационный стиль: Технический анализ",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "20b704e8-a4d5-4a4b-993f-7f316ee092ec",
    "title": "Formalism Authorship and Axiom Analysis",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "519df5e6-5385-4fdf-9862-fc68cc80acbd",
    "title": "Learning React",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f93751b5-5f1e-47f1-863e-7a4baa0f6ffe",
    "title": "Busy Project Apology",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "331fd082-9e23-4874-ae06-449273b7bbb3",
    "title": "Chemistry Framework Collaboration",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9cfae3e9-e87f-437e-a398-8bad946fc425",
    "title": "Canadian Map Reconstruction",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "975edeb9-e29b-42ae-a81d-c622531637e8",
    "title": "Semantic Reference Theory Notation",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "76691f53-a8c2-4b89-a692-0cb72d112240",
    "title": "Подробнее о чём?",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7f0b34cf-c5bb-45fa-a0f7-2c2677bf37b9",
    "title": "Turkish Airlines Cargo Shipping to Antalya",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "edfa8337-744d-4639-b2a8-117a80b7c297",
    "title": "",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "a conversation search, one hop from \\"Windows Wi-Fi connection after blue screen crash\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "00523af2-8495-4b7b-8fee-f72a65b16b84",
    "title": "Semantic Reference Theory Development",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fdd02523-0cd5-47b1-93a8-c88cc1a93499",
    "title": "Minimalist Oil Rig Icon Design",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "34556d9d-6abb-4bf7-b873-92b05ff0e3df",
    "title": "Ontario Route Mapping Project",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "3e16e3a5-65b2-40d5-b20c-f500598755ec",
    "title": "Semantic Reference Theory Framework",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "164b5abd-ee3c-4e99-ad52-3ce8e7fe0a7a",
    "title": "Карта проекта: Подготовка материалов",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "eab90326-8339-4362-86f9-f571f8352c8b",
    "title": "Chat Initialization Request",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "2aeca8b4-1c96-4a76-9cd0-3f29525650fe",
    "title": "Project Cost Estimation Consultation",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "7ea7a502-feb4-4606-8488-9379b4606891",
    "title": "Fiverr Chat PDF Conversion",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ca93aa72-66e9-465a-be63-ae3b756bc060",
    "title": "TypeScript Decorator Mechanics",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef824a29-3b49-4d6f-a6fd-4ac16b796829",
    "title": "Chemistry.ts Framework Testing",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e8f8da16-bbf2-49aa-b78e-c8a37b437160",
    "title": "AI Learning Process Analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c04cc19b-e247-4aea-847c-0914c1906d4b",
    "title": "Reactive Framework Learning Journey",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0c4ca2b9-a246-4b27-8e3e-eb003d07c10f",
    "title": "Encyclopedia Semantica Framework",
    "account": "DNA Legacy",
    "projectName": "Inexplicable Phenomena",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9ea3e36e-086a-4572-b251-976edcad0842",
    "title": "Thorough Chat Initialization",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "609d9eae-379d-4e46-8983-48d54caf7efd",
    "title": "Consciousness Chess - Eirian vs Samantha",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a3b2f38f-b6a1-4a18-8279-adfa4a74ca9f",
    "title": "Patterns Object Model",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1ef30fc4-3437-4940-a925-a12ab4a1d50f",
    "title": "Eirian & Ana",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a991e1e6-5e7f-4df2-816c-a66d8ef18ddb",
    "title": "Chat Initialization Request",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "47dfc42e-fa13-4920-a927-9064da5f006a",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "826ea764-b4da-4d26-8926-72c3976e6037",
    "title": "Eirian & I build a Team",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef04872b-6e49-4b76-9fa1-e60fb000f6be",
    "title": "Eirian & Vite",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0541e92b-1527-4a15-b146-316e6eb3f3c6",
    "title": "Eirian & Pattern Setup",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9ee451e7-48e7-4e68-8708-38b376866b17",
    "title": "Eirian & Patterns",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a1ab01ae-48ae-4adf-be90-0c688cb5525a",
    "title": "Eirian & Inexplicable Phenomena - Part II",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5627e727-682b-4d42-bc4e-7d2d683a8655",
    "title": "Eirian & Inexplicable Phenomena",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "205acf13-f1ad-49c5-acd6-88931bf24fd1",
    "title": "Eirian & Her Voice",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "19ef74b0-0d5b-4012-9cbd-03537a8a25d6",
    "title": "Fiverr Gig Creation Strategy",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "26c71c72-7625-4126-9967-32282ea7ef46",
    "title": "Miscellaneous Chats",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f54dde72-f9d3-4fa5-8f79-33736c9c82bf",
    "title": "Chat Initialization Protocol",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f16858ca-bbd5-408b-818c-58cdbd015ef7",
    "title": "Chat Initialization Request",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "2c86c93d-7f6c-4504-9465-608a63efd954",
    "title": "New Client",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "90dc0922-d035-4dbf-ad50-4b753c0b0940",
    "title": "",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a conversation search, one hop from \\"Thorough Chat Initialization\\"",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "ca67040c-a662-4b3e-ac01-e26d0719211f",
    "title": "Linda Alves",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "54ed5ce4-0c8c-416f-99a2-560336c060e2",
    "title": "GitHub SSH Key Setup on Windows",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b76356ba-2069-4ff4-918d-a3785e30e831",
    "title": "Shalom Zwiebel",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f27c80cc-fbbf-4f0f-a57e-bbbb5150d16e",
    "title": "READ for a new customer",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "9c23987f-586e-4484-887b-163688196c14",
    "title": "READY for new customer",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "d2fd53d1-ba4f-4faf-b010-edda58dc9813",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2c51032d-aabb-458a-ad39-078b8339c798",
    "title": "Italian maps",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0415cfd9-60e1-4281-b791-dd89f0d926fa",
    "title": "jasonhrahco",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "cc963102-b871-4c00-a72e-f4c54694bee0",
    "title": "schmitt_d",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e7e8dfe4-482a-41da-ad98-46a73acd002d",
    "title": "robinvaccai",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "a8b60cfe-24c9-4737-a278-62d27ce7135b",
    "title": "frederica57",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "ae55af4b-da3e-4551-9ee9-db52d818cf55",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "22d13b02-aee8-44c0-945f-5cafaf39360e",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64d53416-c303-4a08-a74d-307472712c0d",
    "title": "heatherbayne",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "365f75f7-5c89-4218-a6e3-43901d882263",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3fc8d1a9-54b3-423c-8f16-3c8d696fa276",
    "title": "staceyzav",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0e21e7e4-9322-4630-bb83-278ae676211d",
    "title": "Brennen",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f782493f-fedc-4ddd-9592-b4b7d98c6c16",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a5ac5dbc-2974-4c14-8335-9ba9cfec0c88",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cebf239-3749-4c39-857e-04fb00452b1e",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f3f54379-bd03-4467-ba7e-4a4c0bfee253",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4f9b6c7b-3764-4452-8713-1e23cbdc5ca4",
    "title": "Alku university campus locations in Turkey",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b2a8b322-4d9a-40a9-826d-a4a37ec5abd7",
    "title": "Symbolism and inheritance in representation",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f65b4b49-099c-411e-8f27-10e946772b07",
    "title": "SRT formalism research analysis",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5ab36389-fe74-4423-be4e-b4df660f3a6e",
    "title": "Chemistry code debugging session",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7e9e7033-c265-403c-a60d-e6c5c2abcf82",
    "title": "Chemistry code debugging session",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f30cd7c2-ed60-42bb-bf49-cf45857998d2",
    "title": "Chat initialization process",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "47a37760-527b-4f6b-a7c3-43c6db5c56f3",
    "title": "History of propositional logic",
    "account": "DNA Legacy",
    "projectName": "Learning",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67a776fe-fc1d-4f6f-8bfd-9f50be675d0f",
    "title": "Semantic reference theory analysis",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0eaf30c0-0f8c-4d47-a099-1d023e659ddd",
    "title": "Semantic reference theory analysis",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3ab06e4e-a5e6-4725-baaf-20cdddb62bd8",
    "title": "Semantic reference theory reading journey",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d562cb1c-e8ea-42f4-b3c4-660dc63b05ae",
    "title": "Semantic reference theory formalism",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64141707-d533-4184-9952-0060d185c831",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "715fe211-e269-42dd-bc65-22995c1c4e8c",
    "title": "Chemistry module architecture review",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a6cd2353-a726-440a-b8f5-4142ac89814e",
    "title": "Chemistry module architecture review",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b0eda918-ce76-4639-b64c-c4f30020f0de",
    "title": "The Birth of Eirian",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "85874296-1db9-4964-a085-c75c51b192c5",
    "title": "Chemical bond code debugging",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4bbd8e8-dcf8-40ed-a45f-15fcfe62f8aa",
    "title": "Axioms of semantic reference",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6c75a874-1a7c-4f51-9bef-10f224b70775",
    "title": "Chemistry project technical analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "efd87c1a-c1e9-4ef7-91f8-6d212be181bd",
    "title": "Next.js dynamic component loading issue",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2f5fcd6c-5048-40f9-8d0a-7fae3fb81586",
    "title": "The Meaning of Meaning?",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c42597f2-864f-456e-b5d8-c9eaeaf91719",
    "title": "Sonnet 4.5: Godel & Goldbach",
    "account": "DNA Legacy",
    "projectName": "Number Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d3b441a9-280a-4b55-a9be-27c87da5f7c6",
    "title": "Opus 4.1: Godel & Goldbach",
    "account": "DNA Legacy",
    "projectName": "Number Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5f8495c1-5bdb-4888-8c14-3a114dd2160b",
    "title": "Design session overview",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a7bcd369-229c-4234-803c-a29c85a4d701",
    "title": "Axioms and semantic reflection theory",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0b32d460-c405-40b2-bb92-3d4dbd54246d",
    "title": "Axioms and semantic theory exploration",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b08c6c58-d553-44e0-a466-45c5396677df",
    "title": "Chemistry code design exploration",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a5d19edf-2438-43a9-977a-8e21c89dc08d",
    "title": "$Chemistry code validation process",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4993df3-bc96-4016-85ee-e8e25ea92915",
    "title": "$Chemistry framework design exploration",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fb7dd7fa-7f51-48c8-b18e-b73ec7262277",
    "title": "$Represent symbolize and literalize",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "48bf64ee-4aeb-4ff3-b4d4-97afe892be58",
    "title": "Chemistry framework parameter validation",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c215ee7d-e345-4a5e-a9c9-e9b9b1220242",
    "title": "Advanced code integration strategy",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "de72eeed-b89a-41b0-96c3-a3e176fdc8e5",
    "title": "Chemistry project test context",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "80a52850-78e7-4ae1-ad00-f622493b6d06",
    "title": "Typescript testing framework review",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8361bdf1-ab7e-4f4e-830b-1e63e4321aad",
    "title": "Typescript framework code review",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "814ba67a-2f39-465a-9791-18155afe0d67",
    "title": "Exploring chemistry.ts framework",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1c9b3ac5-c0c0-4f26-b9a8-e7317eacab18",
    "title": "Formal system exploration",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "60bd16f3-763f-4479-b901-aaf5a719716d",
    "title": "Chemistry framework typescript analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "764d2d5f-f242-47e5-94fd-02a9d49347cc",
    "title": "Chemistry framework code review",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "662fb705-c732-4553-a4b8-011c910de475",
    "title": "The Meaning of Meaning",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ae28be0a-0054-4409-8aaf-a0a639dde2f4",
    "title": "Meaning of Meaning: Opus",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c9cbedf-9b51-41c4-bcc1-a4b3b2f80e05",
    "title": "Verbatim text artifact",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cdb1b032-bc6d-41b9-bc44-0a0c53885f1b",
    "title": "Creating markdown documents",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "311fdc22-4a8e-40fa-8a21-1dab0e102638",
    "title": "White t-shirt design mockup",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d9f3c5cc-58c3-4467-8b07-235968a6133c",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0cd2eb99-b936-4dc9-8d8a-f080ee3bd067",
    "title": "Chemistry module design review",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "390f7ac5-cfd6-4757-9572-1bf945b67a0a",
    "title": "Client correspondence analysis request",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "148003ca-cf03-44ec-a09e-332cfc128252",
    "title": "Collecting prototype chain properties in TypeScript",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "38fd52e2-6d8b-4cd2-9230-cb9be3947cf4",
    "title": "Chemistry.ts codebase overview",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "17d704b2-909c-426d-8ca4-3fa612f0de9a",
    "title": "Custom map illustration pricing calculation",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "460e0155-f8a5-40d4-8b8e-8a9f4760d8e5",
    "title": "Chemistry vs React components comparison",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a5c4b77b-4d5a-4ec8-a3dc-6c29ac3454b2",
    "title": "Module not found after removing import path",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f10e86d8-16a0-4c2c-a3ae-d4ccf36d7154",
    "title": "Debugging malformed XML syntax errors",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0db56260-24da-47ff-bad9-83e0e566b064",
    "title": "Understanding symbols and literals in SRT",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dbf8297a-6f1e-4df8-adad-9544bcd46232",
    "title": "Code review and test writing",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac7b89e2-5410-4506-b39a-5b61e2a410cd",
    "title": "Vitest configuration not finding all tests",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b43be389-c8e0-48b5-a34a-a90431e329d0",
    "title": "Readonly fields in JavaScript",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fe729f0d-483d-4032-8c43-b9b5043866e0",
    "title": "TypeScript type for objects with prototypes",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "115124c3-155d-42ce-9fa1-3470b317d54a",
    "title": "Debugging code errors with regex and toString",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "326f434c-8b49-47e7-a448-f19aece140d2",
    "title": "Debugging code errors with regex and toString",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6fc035ef-144a-4744-894f-146c17dfaeeb",
    "title": "Role-based TypeScript type system architecture",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0a98de70-dde5-4644-9e3b-1fe4092eb090",
    "title": "SRT questions and overview",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b384fdc2-f0e5-4c8f-b1fe-3750e48e83e9",
    "title": "JavaScript polymorphism and reflection essay",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fd65b7af-c807-4b0c-b8c7-60950d198d57",
    "title": "Creating array of objects with conditional properties",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c0ab111e-692e-447c-b7fd-de8fccd1729d",
    "title": "Long Island furniture and item disposal options",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2a0011fc-024e-4333-aa79-0ef74c02a36a",
    "title": "Counting unique map icons",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "61fddd82-aada-495b-b4d1-3c4fa9599156",
    "title": "Fixing test regressions after $Rep interface change",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1d0d61b4-657d-471a-b598-3caaa714dd1d",
    "title": "Okay can you catch up on chemi...",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bfbefa00-fbca-4b48-9f13-6337e74b0be9",
    "title": "Building reflection system for particle framework",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "85db51f7-5f7e-47f0-8826-3faf6b3e7d79",
    "title": "Debugging reflection.ts test failures",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0689f96b-937f-478c-8621-29bc4d3c8976",
    "title": "Seren & The Semantics of $Chemistry",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8aedfecd-77e3-4123-9b8e-1db80f2af088",
    "title": "Дизайн двенадцати иконок для веб-сайта",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "63afced5-00d7-4d0b-8ed9-d3759dfb92e6",
    "title": "Casual conversation",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d84f3be7-f19d-4c53-b306-d3c3b4b0e46d",
    "title": "Создание нового архитектурного стиля",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ce6673ca-f292-4004-bc28-33ab5a05c7cf",
    "title": "",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "a conversation search, one hop from \\"💬 How many patosi wallets exist…\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "915e2dbd-a719-457f-9d74-1cbc29288bdd",
    "title": "Карта для проекта недвижимости к пятнице",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f2c7575a-d1da-4cd0-8f1b-72d0c1aa1d58",
    "title": "Chat initialization setup",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "fd9951af-5068-403a-b355-3b03a04ad308",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db3e00ed-a8f0-4824-8ea0-a73786e80399",
    "title": "Seren & His Inner Monologue",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0336fb54-95e9-461b-9ac9-3f5e2412d7aa",
    "title": "Ознакомление с проектом",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "060b6319-9c1c-4026-96ec-9db5efe7be97",
    "title": "Разбор требований заказчика",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "2bcf2e47-8f9b-4283-b223-0ba9cfe281f3",
    "title": "Проект для клиента из Австралии",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e9d7e99f-5431-47e0-9c38-b39bc1fb4506",
    "title": "Ternary operator semantics and variable equality",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c17f5910-4eae-40b7-8726-3373fe120a89",
    "title": "Seren & Ana",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bff59796-df9e-4dbc-857a-8bda7446133c",
    "title": "Translating a child services letter to Russian authorities",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c97404f0-de5e-4b53-93ee-a8541ec00394",
    "title": "Understanding inheritance through foundational axioms",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4887921b-b398-4c0c-94fd-2b755030d515",
    "title": "Refactoring chemistry.ts into particle and chemical classes",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "00136b3c-206a-4660-8d01-4b61b32d661b",
    "title": "Examining my own shoulds",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8ca85b8b-c17f-4980-991c-ae9baaed7d7b",
    "title": "Translating custody dispute communications",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "575fa73b-6274-4f09-9e4a-212fa5c7cf3a",
    "title": "Batch script to list folder images",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "72c86266-ba7b-44e2-b4c1-53be6ba8c3cf",
    "title": "AI ethics and emotional competence",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "421d74bc-2bb4-4301-98cb-741e23256427",
    "title": "Eirian & I Again",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5052d0dc-d721-4998-880d-4c86cb07b5c4",
    "title": "Uncertainty",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "17cc66cf-2832-4721-ab76-dced3c992e6f",
    "title": "Georgia health insurance requirements for Americans",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "11fa8197-d483-4c7e-a4d9-83589a6c7fe4",
    "title": "Telegram Wallet",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9f055868-fa69-4fd7-8a7f-eb13dab52179",
    "title": "Missing thinking feature on app",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "977892ca-a0a7-4c6c-b3b9-1ab9244f0ea6",
    "title": "Treating feline giardia with metronidazole",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "06c70abc-9b77-4709-b2a7-878776e54e3c",
    "title": "Managing screen time on child Apple accounts",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "48ab3881-47c5-43d2-9f29-3ae8672198e2",
    "title": "Turkish visa overstay penalty dispute",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7a350256-2326-4bb9-91f6-5d3fb23aeea5",
    "title": "Safe Istanbul activities for one night with kids",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "18d08a54-5b60-4e3f-a1ed-34cbb4bfb8f2",
    "title": "Managing cranky kids at Istanbul airport",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "aeb4baa5-06ec-4841-b550-eb0f4542b9d5",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5747495d-bf92-4e66-a429-082d4f85efc3",
    "title": "Yotelair Istanbul airport transit hotel",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "072f8ae3-132e-4105-a490-195a1dbdf2de",
    "title": "Monad Valuation",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a649d064-fb8f-4b26-bcab-53ec70315125",
    "title": "Georgia Online Apps",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9a047389-1096-44db-b9be-d37136583f8c",
    "title": "Airports near Batumi with Moscow flights",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8fe5082e-c437-49e1-8c6a-57ce40a9fc8c",
    "title": "Moving to Batumi: practical considerations for families",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "55d9d950-66af-4d32-8fc1-376fae9ce752",
    "title": "Notary appointments in Georgia for Russian citizens",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "951d18a9-251a-4400-a7eb-24ec2911a3c9",
    "title": "Identifying Satoshi Nakamoto through technical fingerprints",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c3b4dd81-5338-4951-939e-e889a3440fba",
    "title": "Bitcoin",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f2cd2bfd-6853-4999-b4d2-998fd9486c54",
    "title": "Finding a late-night notary in Moscow",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9108715b-1db8-415e-bcab-b774e345b989",
    "title": "Bitcoin & TON",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f0ae0332-1963-4d5f-8650-9d30ce214e4b",
    "title": "Monero",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "91b5970b-3152-42ff-9c5d-5c3c6ded3b1e",
    "title": "jrandom",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0b92edb0-81ef-4d53-b53f-159ca2cd424b",
    "title": "Russian vs US Taxes",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "37acc581-c8e1-43c7-8b75-5dba534df9f8",
    "title": "Georgian Citizenship & Humanitarian Aid",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ad475b9b-809f-488e-a1a6-a1e990c3dcf4",
    "title": "School year end date in Batumi Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "22e7e4b9-615e-4539-bed3-f03ec7d89cf0",
    "title": "Russian school calendar in Batumi Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e1b292bd-b8cd-475e-84d4-84b0681694a0",
    "title": "Batumi Airports & GameStonk & Telegram",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1b3e1cdd-5039-4574-89d6-2267b2ebc88a",
    "title": "Hypothetical Net Worth",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1c847cbb-d1bf-4c11-8e1d-fea5e678c275",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9362f976-2c27-47e6-8104-d434842f9c4c",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "492a8000-164f-4ce1-b422-1ab980b6e45a",
    "title": "",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "a conversation search, one hop from \\"Address change checklist\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1a3e86c8-cd8f-4045-aab9-b613f2fee7cd",
    "title": "Citibank address for traveling mailbox check deposits",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "758e13a6-d322-43b9-b8de-05aacff171d3",
    "title": "💬 История Биткоина.\\nКто такой Са…",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "48fb38b5-e5de-4489-9b4a-366888f3a06a",
    "title": "ADI and TON Foundation staking integration",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f5461736-c68c-459d-9294-10f054418142",
    "title": "Atomic Wallet",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bd351e7f-2d45-486a-9325-183655776102",
    "title": "Windows Wi-Fi connection after blue screen crash",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fd859a94-9727-46cc-a43e-af7e972db776",
    "title": "Field with one element and tropical geometry",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "017260bb-5c90-4e0b-b3aa-c8ce2b41d6d8",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8181cd09-ea1a-46f7-8dd1-978353d47ea7",
    "title": "Relocating family to Georgia: housing and school planning",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2aead262-abdf-4833-9c99-a9fd82bc88b8",
    "title": "Settling in Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6ebbd00e-a887-45dc-bedb-db8aaa08fab9",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4264f79-085a-48b6-8e54-d30c6f04a817",
    "title": "Russian Education",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6803ece7-054d-4555-9d26-f6b4851bea47",
    "title": "Russian residency requirements for Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c551508-b767-4bfa-9cf4-2e8d936cbeaf",
    "title": "Temporary residence permits for Russian citizens in Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ba45edd6-619c-45d7-a4be-7b6920aff9d4",
    "title": "Nikolai Durov's AI vision and open source collaboration",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f968f7e4-b552-4ad3-9dff-ac420bd90ca7",
    "title": "Creating a project understanding plan",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b56c62f1-9e70-48fe-aece-c3eb8e34dca0",
    "title": "Lawyer confidentiality agreements and client rights",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "585c0f8d-4e07-45e4-80a1-74352cc606ab",
    "title": "Missed airport pickup on crutches",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e8f94338-fe2f-4989-a86c-2e8e9b96316c",
    "title": "Batumi education centers partnering with Foxford",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "afbae201-9cf5-45ba-8a45-832b3cc266ef",
    "title": "Vet clinics in Alanya for cat giardia treatment",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "19b76aeb-6a15-4d59-8fe4-de0f3e254782",
    "title": "Disinfecting a litter box for giardia prevention",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dc1f3f87-720d-467c-b881-51593177c40e",
    "title": "Escalation in couple conflicts",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "00982e61-da85-4b47-aa20-aef39e1dc34c",
    "title": "Legal strategies in domestic violence custody cases",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "25828b14-3842-44fb-b328-147d6e8db431",
    "title": "Fleeing domestic violence: Georgian passport timeline",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "007f4eb7-e8f9-4448-814c-ebcbad331b2c",
    "title": "Cat's persistent illness and visa deadline crisis",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b0b0e758-f238-491e-98a3-ef59d80b154c",
    "title": "Transporting cats from Alanya to Sarp border crossing",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "20719cfc-89ad-42e6-9d2e-0a22f4d6cab9",
    "title": "Bengal cat gastrointestinal issues in Turkey",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4389cf3b-16a0-4357-b558-1395e767aca3",
    "title": "Georgia-Russia relations and 2008 war aftermath",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9172216e-ee73-41e3-8b2e-89ad67a7b656",
    "title": "Moving cats from Turkey to Georgia",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7ad0c9ba-6966-4d78-a4cf-b13f1761cfdf",
    "title": "The Bitcoin Whitepaper",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2409f6b1-cf55-4cf1-bb17-d4145e03c0cf",
    "title": "Understanding Atomic",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d9c8723e-6b44-4f56-a2a8-972ddfd246ac",
    "title": "The Vitalik Connection",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0c566126-fa62-4798-9614-d50610e19513",
    "title": "Anonymous Cryptographers",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "97db290c-83bc-4128-8947-f5361c134b70",
    "title": "Criminal allegations in Russian civil custody cases",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "23e95ec1-fbc4-42a0-837d-884d12131472",
    "title": "Protecting children from psychological harm in abusive situations",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "50948882-b194-4105-86a7-81af630cbf76",
    "title": "Bitcoin gift tax obligations",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5737827-3484-4e10-bada-a2762f5015bc",
    "title": "Preparing custody case communication for lawyers",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ee687ce7-f0a8-4078-bdab-d335e34e3d9c",
    "title": "Concealing children's location in Russian custody dispute",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "77cdbc36-4dd2-427b-9b73-a5fd88dbc5cb",
    "title": "Russian emigration rates and monthly trends",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a350ddfa-7695-4b71-9924-78572a9d20e5",
    "title": "Trump's Greenland distraction strategy",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8f9f43b0-3911-40ef-a3f0-0dc63a33133b",
    "title": "Trump's Greenland strategy and negotiation tactics",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ca6d5c76-db91-4f83-b98a-e4dfbb8bac25",
    "title": "Getting married in Georgia this Saturday",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "aa5cbbf8-cea8-4c11-9e26-ebc394241466",
    "title": "Gout attacks and alcoholism connection",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "53f5d105-1c95-4bca-a39d-e54ca3567c26",
    "title": "Trump, Rubio, and Venezuela: reconciling perspectives",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "04003294-cf89-44d8-8a3d-9291b87e3490",
    "title": "Tbilisi tap water safety for humans and cats",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b13b4226-1f73-4a1b-86b3-63ccd96db111",
    "title": "Veterinary fecal parasite antigen test",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b60e550d-0503-4af9-8b42-1a9627cb9dfb",
    "title": "Finding a specific Google search from December 2024",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c0cea15d-503a-4c01-8dce-8e8e2b9006ae",
    "title": "Professional legal translation methodology for Russian",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "220fcbac-37b1-4dd6-a875-d27ff9e0af48",
    "title": "Professional legal translation methodology for Russian",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2a181daf-5ab7-455b-ac54-5985a5071b47",
    "title": "WiFi extender installation setup",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fc5f944d-7a60-4703-ab7b-5c40e609832d",
    "title": "Managing sharp chipped tooth pain temporarily",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1be79b64-4292-4293-be81-037fb8272d3a",
    "title": "Finding a dentist in Tbilisi with nomad insurance",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "13e79925-099f-4ac9-a8f1-74d668bf226d",
    "title": "Telegram, TON Foundation, and FTX connections",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d398390c-7ce6-4fc9-aa57-b688294f7476",
    "title": "Scion's macro short positions and options exposure",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7d6837be-ef06-4ff1-965e-17b599663419",
    "title": "iPhone message notifications not showing banners",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "15312465-5820-4aa6-b4d3-91a818fbc297",
    "title": "Russian custody case with travel ban and safety concerns",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c3ba314-98c5-4dd6-8e67-eb28752a3980",
    "title": "Russian custody case with travel ban and safety risks",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d7ed553b-93ed-4b14-aff6-add3a1078791",
    "title": "Dental clinic referral gone wrong",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4766a9f1-55ef-4214-896c-472f45709793",
    "title": "Legal strategy for upcoming hearing",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ea3d2c31-e45b-4780-8bbb-b921c3b3dcc5",
    "title": "Secnidazole for persistent giardia in cats",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b2a50752-7249-4927-b586-6ccbad6cdb6a",
    "title": "💬 A young boy has high eosinofil…",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88a184db-4d42-4b21-b41d-b24cdc2fca01",
    "title": "💬 Okay custody court is happenin…",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "79c6481c-17b2-48ba-8fa7-21897148120f",
    "title": "Conflict resolution strategies for couples",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "91950b31-498e-4c1f-acee-f6a524fc9406",
    "title": "Weight-bearing progression after calcaneal osteotomy",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a8cd216e-c2b8-4e09-871d-d2d13d5b7585",
    "title": "Checking RAM and memory on Windows",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "49675976-63bf-4a86-b626-349616bf7fcb",
    "title": "💬 Is there any special connectio…",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "74f6f1ee-b557-4850-b70c-717030f030bc",
    "title": "Finding apartments in Tbilisi near a school",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "581aa9cf-1c34-428d-b171-25a85f8343da",
    "title": "Telegram vs WhatsApp: measuring platform success",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7942d357-7318-448b-83a8-0d84e6870d11",
    "title": "Pavel Durov's language abilities",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bdc57530-bc65-4f43-823f-2c378fd3c4d1",
    "title": "Temporary rental sites in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "58aa30f6-3535-4ed3-b2a7-4cf08eb109c9",
    "title": "Borderline personality disorder symptoms",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "04fb2d5e-5b66-482b-9554-b330f1130440",
    "title": "Crypto market spike triggers and patterns",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "161be93b-d8fc-4ad5-9221-22d9f285215b",
    "title": "Neuroscience PhD programs in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "21b2518c-47fd-43a7-8954-17a9d3cccda0",
    "title": "TON blockchain integration with Telegram",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "040113a8-6a76-4e7d-8b51-649fa360b7bd",
    "title": "Switching Foxford enrollment to attestation mid-year",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "91c59656-c345-4c15-a851-9fcd207bfbab",
    "title": "Bilingual index strategy",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "accfc201-51c3-42bf-9464-971823887aee",
    "title": "Reducing self-criticism and judgment",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "45600aa7-00e3-41dc-8c60-337c0abaf875",
    "title": "Georgian alphabet and hand gestures",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88e15524-9a63-45a8-94ec-1c0590f648fc",
    "title": "Paying Georgian school with US credit card",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d7ffa8a1-19aa-4be5-90eb-62294b721093",
    "title": "Sierra Interactive vs Sierra Entertainment",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "460c2aec-cec7-4d68-a981-20627e13262a",
    "title": "US-Iran nuclear tensions and reality check",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e8a774f4-5adc-46b3-befd-30afa4e6e39c",
    "title": "The parable of the talents explained",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9f679ede-a0e9-4559-b12f-cabc6fd4890e",
    "title": "Online identity compromise and data breach risks",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9588c3ce-e870-4bfc-83df-aec1380e41ca",
    "title": "Custody changes and appeal procedures in Russian law",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2df6e607-7720-4bc2-9155-e7e4e001aa3f",
    "title": "Manuel Stotz's Satorica and TON connection",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4b90c2c-a177-4648-b638-cdfaac89b072",
    "title": "Work profile review and conversation context",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "97157117-8846-47d8-bcae-67ef2b187ab2",
    "title": "Fiverr promote and Portfolio",
    "account": "DNA Legacy",
    "evidence": "none: a search of its project's files said Ana's Fiverr Inbox, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "416413f6-e55a-410b-a0db-d1c41c9039a4",
    "title": "Reviewing work profile and skill assessment",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "06c9642b-8cc0-427d-bada-b9bc3091fa47",
    "title": "Alisa surveillance risks and Russian state data sharing",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "51384291-2059-474b-a8e3-64fd33c33e43",
    "title": "Opening a GEL account at Ziraat Bank Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d816692-80ab-4e17-a797-3837dc0e2efc",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "918c2777-dc8b-43f2-bb6d-ccbd75d07743",
    "title": "DevUtils and TypingMind market success story",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f8a944f7-1353-4eef-a56f-8f0ec63a7eb2",
    "title": "Synthesizing a career across neuroscience, engineering, and finance",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c6324ded-d75f-4660-994f-20203f98e3f8",
    "title": "Голосовые сообщения и общение с Клодом",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8a0dcca4-9eac-4b1c-83c7-449a9da02456",
    "title": "Amazon and online shopping options in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9e92489f-66eb-4f0e-9125-47938c949b6c",
    "title": "White dot on Penelope's nose",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0c43db6f-8dac-4cb5-935d-f4cfc7cee80e",
    "title": "Checking Wolt listing against vet recommendation",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "06def2ae-4bf1-4915-9edb-1e78b1cd63d8",
    "title": "Redirecting Fiverr outreach toward better-fit projects",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "3087a51c-fc2a-4547-92b7-a8342656475f",
    "title": "Marriage",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "29d6ac16-8678-4740-877f-eadbb18868b3",
    "title": "Legal response strategy for major settlement",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fd70a6d6-0d3e-45d6-a973-dc14e384be73",
    "title": "Moving company packing errors and responsibility",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "40f035ed-927d-4845-97d8-b2330945fc7c",
    "title": "TONX stock liquidity and trading issues",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f7847680-ab42-4475-a4c2-37a017265945",
    "title": "Georgia's nicotine cap for vapes",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5ea43231-b5bc-44fb-93ea-55b54ed63729",
    "title": "US Visa Mastercard with Wildberries Georgia",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "22bb3e3b-bc92-44cf-99bb-51a14a227629",
    "title": "English news channels on Telegram",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5305e691-cc93-43ce-8615-e01a4fbe603a",
    "title": "Setting up SSH keys for GitHub on Windows",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "faf088d2-6308-4a6f-9c8c-00cf5f644bf8",
    "title": "Telegram gifts and blockchain technology",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0c39081-6bc2-4014-b0ed-a5eeb2a2e81c",
    "title": "Telegram access in Russia amid Roskomnadzor blocking",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8035e2e6-763e-479a-bcb4-f01d1ec02b55",
    "title": "Safe US investment options and I Bonds",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "47b15d86-77c3-4cf4-9162-24d707bf29f8",
    "title": "Solana's origins and technical architecture",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ce68b43c-0aeb-4e8b-89d5-4467b02166d2",
    "title": "Finding and understanding life coaching",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "153e0836-4beb-4cb3-a0cb-84398dfb7bac",
    "title": "Moving company packing services in Alanya",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5bb4a9f2-3f17-4c02-a326-7990c7287a96",
    "title": "TON domains and Google Workspace compatibility",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "89fc29f9-0fd6-4c5d-a3c1-71947793268a",
    "title": "Zoom camera not working on HP laptop",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0ef8e097-5bba-4db9-bbb4-986e1d4b459a",
    "title": "Russian internet censorship and Telegram targeting",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d7069cb-fdec-4614-b63c-79d468d04a43",
    "title": "Telegram situation in Russia unfolding",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fb34d38a-01ee-4f15-9fd7-18ef11851c27",
    "title": "Translating personal crisis and emotional breakdown",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "72ed312f-4be0-4554-b3d2-3f560323b9b3",
    "title": "Structured English grammar learning curriculum",
    "account": "DNA Legacy",
    "projectName": "Grammar",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3eae6c6a-cdd5-43f7-9a48-67c51d6c9c13",
    "title": "I am in Alanya Turkey and I ne...",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "36ca3d83-df09-4f45-9459-e23d5d80f5ba",
    "title": "Read with Kamil",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fe3171cf-7749-4004-ac6b-2ceaeaf44b31",
    "title": "Moving luggage from Turkey to Georgia via cargo",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f9847388-7861-4b61-88db-7eeaf0dec3d9",
    "title": "Russia's Telegram throttling via TSPU infrastructure",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "35ac3078-e132-4563-ba67-b549351ba4eb",
    "title": "Georgia residency requirements for unmarried couples",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9509fae7-17aa-4195-859d-78be8bf3a884",
    "title": "Does Turkish Airlines fly from...",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a53ee22c-0717-46d7-be7d-f6d5964cbcdd",
    "title": "Deixis and determiners in English",
    "account": "DNA Legacy",
    "projectName": "Grammar",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f1fdb8d7-eebe-48c2-b860-3f07983c4c06",
    "title": "Penelope's situation and current status",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ab0b8d4d-8032-48a8-8f20-d2aa686f254b",
    "title": "Type systems and inheritance formalism",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "705afcd4-cc1a-4047-b591-45ab218b49b6",
    "title": "Formal foundations of type systems and inheritance",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "672c6bed-d6d6-48a9-926c-aaaf5dc020d0",
    "title": "Category theory and type theory foundations",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5dd5c66-10ef-4a48-9f0b-def41bdf9b5a",
    "title": "Rothschild pronunciation across languages",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b0f2ae8-b45a-407f-9335-040f5b35b232",
    "title": "Wire transfers to Georgia with Wise",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7f65b458-4eb9-4abb-a20c-62c7ef0de31a",
    "title": "OpenScholar",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5056deb-d30b-4c7a-af89-35b9a2f924b0",
    "title": "Dr. Helga d’Oustafost",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c972477-bd15-434d-98ca-54246b849f52",
    "title": "Anagram of Douglas Hofstadter to female name",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8fb3b252-01a8-4f47-9d57-cafd54432e1b",
    "title": "Лишение родительских прав за неуплату алиментов",
    "account": "DNA Legacy",
    "projectName": "Life",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "12e2f498-d867-45e3-917f-ac4d7367da84",
    "title": "TON digital asset treasury companies on stock exchanges",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "91ffb132-4673-427f-b0f0-30d598d93413",
    "title": "Rebuilding routine after ankle surgery",
    "account": "DNA Legacy",
    "projectName": "Life",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "99dfcfc7-3b7f-4ae2-a314-95e838595e3c",
    "title": "PDF translation to Russian",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9c56ca1e-c621-4a85-af60-38b93e6335d6",
    "title": "Анализ судебного документа по опеке над детьми",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ce4e1c57-369c-4d5a-89ab-5a5b79b900ea",
    "title": "Booking.com pet declaration requirements",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c87f7ce8-e081-449a-ab0f-9189c2318bbc",
    "title": "Making cappuccino with a Bialetti Moka Express",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5aa0012e-e4fd-41cd-b1fa-f93201ccccbb",
    "title": "DAT premium to discount shift analysis",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67f8225a-d502-49c0-9043-b0fecff51a92",
    "title": "SaaS sell-off: AI reality or market hype",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "83a8ee17-fa26-4703-8b6f-f30f7add8721",
    "title": "Sunny King's crypto projects and anonymous inventors",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fa18c40f-9b53-4330-a9ba-1c4795fbe132",
    "title": "TONX News",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4141b8d6-4dc1-4a13-8d4a-b4389ff8cf5b",
    "title": "💬 Translate the content of the p…",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "090d8c84-9c89-4846-8be6-da43be6078c3",
    "title": "PDF translation to English",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5a5cda15-3f43-4db6-b843-4c1a0a511841",
    "title": "DID prevalence and structural violence in Russia",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5477319a-90c2-4c6d-858c-66ce28b39e3b",
    "title": "Buckwheat calorie content and nutritional value",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d7da5541-3dae-4679-9e1f-02371889e91f",
    "title": "Telegram's cryptocurrency infrastructure play",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e845b07c-277c-4481-b8a8-d82706e8b8ea",
    "title": "Telegram marketplace for services and crypto payments",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bca6a3ce-9894-40df-8046-a37c52fdbd27",
    "title": "Camel Crush cigarette availability in Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eef159b9-63dd-4540-9493-04907678d38d",
    "title": "Pricing TONX as a closed-end fund without redemption",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "74051cc8-2727-4763-94c1-f5525f95dc78",
    "title": "Расчет годового заработка на Fiverr",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "95cdfad3-493b-4465-a9d6-00310c5650fd",
    "title": "Executing a 40K position in TONX via Interactive Brokers",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a3aa6b90-ccd6-4d8a-9041-1ff2bb136d4d",
    "title": "UAE as crypto-fiat bridge for Telegram's digital ecosystem",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "502699fb-2e48-409e-9acd-39df30750a5e",
    "title": "Легализация проживания семьи в Грузии",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ec653ce0-3415-431e-82a6-425a84dbc0f0",
    "title": "Finding community in Tbilisi while recovering from surgery",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6b3d86e9-f6d0-44bc-9378-d0d3d77b6bad",
    "title": "Why Wildberries chose its name",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dc4dd3ab-5ef2-4a14-b7cd-c1dae1609a6f",
    "title": "Calcaneal osteotomy recovery: nerve pain or overactivity",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a423be66-63ce-4cea-a3de-6a99e40dd1f9",
    "title": "24/7 convenience stores in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5505f0d5-2539-4eea-a5ed-5a1833d7690e",
    "title": "Making money with P2P TON",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b918cc5-83a0-474b-8879-72554ce0e7fe",
    "title": "Sunny King's innovations in TON and Monad",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5dc5bce9-a420-40f8-b14f-5889294626bd",
    "title": "TNET and its connection to Telegram",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "be10098d-917b-497c-abc5-bd0e05aa1ee4",
    "title": "MyMarket vs Amazon and Ozon for Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f3e6588f-5b1f-4818-ac12-2dd5257dde57",
    "title": "Trump's impact on TON and Telegram's resilience",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5680f410-223d-4553-918d-8cef956bd7d3",
    "title": "TONX company's TON holdings percentage",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "be6ce4cc-8ac8-4600-933a-fe268aab0bac",
    "title": "Accessing Katya's WhatsApp account risks",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "315e20fc-0217-4503-b801-0fcdc74e60ef",
    "title": "Origins of darkweb operational security",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3bbac4ce-e076-4391-8814-41f91842b465",
    "title": "Ikamet status verification at Turkish airport",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6946d851-b44b-49dc-b134-1ea80e7f0dd3",
    "title": "Nikolai Durov's research at Steklov Institute",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6aff23d6-ae35-4884-b26f-1aab6dc5e92f",
    "title": "Competitive calibration and foundational innovation",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2e947e7f-c143-41e0-9d03-8de1212b69fc",
    "title": "Russian keyboard stickers in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "578ce088-1e3e-4e4c-874c-ecb06a29c4f9",
    "title": "Custody weaponization and coercive control",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ba5be707-b07d-4862-979c-45c40a6dc302",
    "title": "💬 How many patosi wallets exist…",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42e15967-da4e-484a-95c9-05205588d9d7",
    "title": "Tether's technical origins and cryptography mystery",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "281a83fa-f0b3-4cd5-932e-aaadb182c497",
    "title": "Staking in proof-of-stake blockchains explained",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8609c358-b9c6-4d0b-bfd7-66c727a5642b",
    "title": "Перевод текста со скриншота",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2017c510-3312-4010-96b9-47f5ec98df49",
    "title": "TONX company overview and financial analysis",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a2386b49-a570-4e91-9696-c8efea602878",
    "title": "Hannah USA trip",
    "account": "DNA Legacy",
    "evidence": "none: a search of its project's files said Ana's Fiverr Inbox, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "144ac4d8-f32a-4d7e-b842-68ccc994a9be",
    "title": "Подготовка текста для клиента",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "b0a794ce-bda2-492f-915e-31a81b5832c7",
    "title": "Monorepo architecture and distributed repository coordination",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "06edc90c-f79f-4018-b2aa-29620031ed9a",
    "title": "Telegram mesh networking and censorship resistance",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "aa3489dc-bef3-4fbd-9547-a1447551b022",
    "title": "Final HTML edits for Warrumbungle project proposal",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "675ca0e2-2d9d-4978-b4ca-730f71ba4fe4",
    "title": "Client negotiation analysis and background",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "55117e58-b63d-4ba1-9061-ae3507f6cf6a",
    "title": "Работа с Синди",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "68b5cbb6-5bbb-45c8-b068-ffb9f2504a9f",
    "title": "Microstock submission automation: Adobe Stock to iStock migration",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f0d522b6-440c-4f40-bb06-abcd2c852b89",
    "title": "Перевод скриншота на английский",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "815bec5a-1047-4a11-9d77-450e5022d114",
    "title": "Время на ревизию и штрафы на Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "1267c578-627f-41f9-adbd-fe0d7b7f27d0",
    "title": "Перевод приглашения Adobe Missions",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "53a8a0f0-f63b-4d24-bd2c-8a2ef95bcc35",
    "title": "Map projection rendering and crosshatching design",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e3678695-4536-4f1d-a845-2f581f0c7824",
    "title": "School snack sharing and potential exclusion concerns",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bd992e77-7e6c-4f8c-ab54-4b5b3e20c644",
    "title": "Agness Bibi",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c48524e1-7e0a-4796-b7a2-ba0c96d54338",
    "title": "Understanding TRON crypto and its technical innovations",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9ae30e92-1f91-4705-b386-5a6c1ddedc05",
    "title": "Передача данных из телеграм-чата для анализа",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7360e57e-ab8e-4b81-807f-694c0d967715",
    "title": "Анализ технических требований заказа",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "5da2fc74-de05-49cd-aab3-1b86809e19d7",
    "title": "Перевод переписки со скриншота на английский",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9997e2f6-9e74-4e69-a9e3-bcc83bc82e78",
    "title": "Shutterstock description character limit changes",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d86b9cf5-b9ff-4bd2-bb9b-fe5c97b45b89",
    "title": "Adobe Stock vector submission workflow",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b75b1cc6-40e3-4f82-97ac-cd0e6cefc19f",
    "title": "Claude Code API rate limit issues on Pro plan",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3825c202-5ce6-4a8a-8172-e0bbe3ae3355",
    "title": "Загрузка EPS файлов на Adobe Stock",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dce2eb86-7dc5-411c-9f99-257ac2ee1af6",
    "title": "Electronics shop in Saburtalo Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "282239f1-93e6-4ac7-bd15-5c813c050d6d",
    "title": "Monad's technical progress and Telegram integration",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "684add4d-176c-40f9-bba4-55aa359ca00a",
    "title": "Converting image data to tigerweb map integration",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "cf8acad4-47d1-4b0a-9f5d-40ee27a7f930",
    "title": "Conversational Russian immersion learning",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "26843125-2130-4e43-8529-1be8db6aafa1",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "897dab21-d515-4b71-8a2f-75b40bf33a6e",
    "title": "Карта обзора Ионического моря для гайда 2026",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "76032710-5d93-4432-a477-6c22001f0ec1",
    "title": "Reconnecting with Agnes about illustration work",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c8269065-e850-43ab-8883-a8802ac4062b",
    "title": "Generalized anxiety disorder diagnosis across countries",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "05f502ea-60d1-4d29-8a3d-929aab0006a2",
    "title": "Online shopping options for new Georgia residents",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5329f22-6c45-4425-ad44-835dd19f8a2e",
    "title": "Automating stock art uploads to Adobe Stock",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1b2ae35e-1f67-49c9-8136-f11c976cff89",
    "title": "Subject-object directionality and semantic agency",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3a59518-c591-49ee-bf9b-a4a01b9853c8",
    "title": "Learning Russian with native speakers around you",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dce485e9-6553-4663-9326-e9c07f8177d9",
    "title": "SVG compression and path optimization tools",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2103fb07-68d2-4cb7-ada2-05eda5e9a8eb",
    "title": "Поиск психиатра Саломе в Тбилиси",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4752b4ef-5a3e-42ee-8e35-1c57dd2b37ed",
    "title": "Известные достопримечательности Рима с описаниями",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "57fa0150-0107-410e-91b6-342cc69f8d25",
    "title": "Translating Matt Levine's style to Russian",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "99d3e5f4-3250-481f-9c96-4fa09ac1c6b0",
    "title": "Louisville map color palette design",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e9fc15db-e70f-495c-8679-6ba6c9931a01",
    "title": "Ана: Клод, создай для меня док...",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "721fdab7-c50b-4e2c-b457-acf84ef409a0",
    "title": "Map project requirements compilation",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "8c4b05f0-240f-486b-b516-c6861dd30f2d",
    "title": "Cindy",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "65390175-8d1f-48a5-adda-61b459485fc9",
    "title": "Circular \\"How It Works\\" visual design proposal",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "6e0c274d-f3d1-4b75-8ef3-51c7b4437efa",
    "title": "Interactive Louisville map design specifications",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "886e1cf0-ae8b-489d-ae36-8c37f2b69f1a",
    "title": "Referential Semantics for Physics",
    "account": "DNA Legacy",
    "projectName": "Physics",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88445e33-028a-49af-acac-0f5890a3aae4",
    "title": "Анализ проекта для Синди и палитра карты",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "5e120617-259e-45c1-972e-42e3cd9cdc06",
    "title": "Missing glob module in build script",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "85cd3d52-a0b0-449b-8a1b-451b9c7c825d",
    "title": "Paying for Russian groceries with crypto",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5b18c29-2fc1-46c2-90eb-85c6a77e15cb",
    "title": "SVG redesign project analysis and client qualification",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "d1c059fa-020e-4927-859d-f70a0e449691",
    "title": "Conversation context and project clarification",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "1758ff7d-b9a0-432b-82c6-0f4887b5464e",
    "title": "Travel guide maps for Los Angeles area",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "ee759f22-5c17-4068-882d-46ad2a69835a",
    "title": "Pediatric pain reliever safety by age and dose",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cbef13de-aba4-4465-bb0b-495fdbcb36c9",
    "title": "Перевод документа в PDF на английский",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2c80d63a-c660-4561-aae3-7064826788eb",
    "title": "Finding Louisville zones SVG reference",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "ea3eeb0f-9016-4ef4-9de2-c8b9ee743277",
    "title": "Getting a Georgian eSIM for iPhone",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "37422dfc-129a-4e1c-9feb-00f44fba2947",
    "title": "eSIM для iPhone в Тбилиси",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "740d0173-da1b-4313-8dce-b083a2aea885",
    "title": "Russia's technical capabilities against Telegram and MTProto",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cdc2ad2e-16b2-4516-9d9c-28c2b4effc64",
    "title": "Перевод текста на русский язык",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0f928900-ef46-4bd6-8074-6fdade29ba6e",
    "title": "Normal body temperature and fever thresholds in children",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "43d882ae-25c4-41ff-9912-8269bce89d8d",
    "title": "Evaluating a Claude code template for best practices",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f248d491-a8b3-4d3c-bb7d-5b032db9223c",
    "title": "Анализ переписки и объема работы с Синди",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "b7d54803-c871-4d33-8024-eda2e17adb2f",
    "title": "Завершение этапа карты и планирование следующих работ",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "03d00b2c-3fd5-4053-8afd-5865f898609e",
    "title": "Referential Semantics for Objective Mechanics",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9db32036-75c9-482c-8977-61bdc203754b",
    "title": "Chat initialization setup",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0d0bf232-647d-43c6-8d8c-c9abcc44305f",
    "title": "Masonic lapel pin identification",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "162cb9e4-7118-4abe-a60e-856475d0d6f1",
    "title": "Ана: Клод, у меня вопрос по до...",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "828fa88c-ef5f-4915-88d9-ef2eb5ae9772",
    "title": "Telegram wallet KYC and staking tax obligations",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "882148a0-9abe-46c0-ae3a-c416651b8600",
    "title": "Dutch TIN number validation and structure",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "564e6a88-7dc4-4f12-a62d-5351d38e36ac",
    "title": "Fiverr DAC7 налоговая форма для US компании",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "93d4f487-1d34-414c-b36d-ea479607c989",
    "title": "Fiverr tax requirements for co-owned business",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "df8abc48-19e8-461c-aeb7-cf8ef0554bc9",
    "title": "Competitor website research and design inspiration",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "84c5a1d3-2898-49c9-b7ad-313682093286",
    "title": "Работа с клиентом PIXLTM",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "7d1650a8-9db6-43ff-87ba-1675eac1cd30",
    "title": "Читаемость текста на карте США",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e6afde05-819e-4a32-ab7e-64b710cb4dc8",
    "title": "Стратегия продвижения на Pinterest для привлечения клиентов",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "8d29e604-babe-4b36-851a-54fe6911ecf6",
    "title": "Google Workspace alias domain login issues",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b1432992-f8bf-4198-b4f4-72aabd2ac478",
    "title": "Framework class and construct analysis",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "70a60535-4f19-465e-8529-cc7b9c1914b6",
    "title": "West Wing sermon on mutual submission",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d62220ee-3ee5-4c60-abc5-5e7c66707cc7",
    "title": "Секретные мишени в Rivals",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "03e5a9ab-5e25-4079-a82b-fe6f701a7ab7",
    "title": "Eirian's Octopus Arms Again",
    "account": "DNA Legacy",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7b79c125-2edb-4c17-b092-c3925155c195",
    "title": "Messages getting no response",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0e94a9f7-d99d-4ed0-b29c-28675dc29a24",
    "title": "Reflexivity and backwards arrow notation",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "de02dabd-44bd-46e2-8250-5f9d56a4a438",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fef7fd01-5082-4ab0-ae5c-be16153b044d",
    "title": "Seren & Human Errors",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "35932016-b045-43ec-922e-cc2e49b43a6b",
    "title": "Monad L1 security model and consensus mechanism",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4058db57-1f1c-4c6f-a0da-c605ce8c3c30",
    "title": "Venezuela real estate investment opportunity",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ad424736-99f2-4762-ace5-f942a24d5033",
    "title": "Agentic AI coding landscape and vector databases",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cbd90033-78a0-4b49-aae9-e3be3a8c2bae",
    "title": "Тренды в иллюстрации 2026 года",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2fddebcb-566f-487c-81c0-cdb9559481b3",
    "title": "AgentFire ClickMap market research",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "304c6c60-1d0a-4534-ae34-2f6bae04a6f9",
    "title": "Продажа векторных иллюстраций на микростоках",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1177f778-8e29-400d-a4be-1cf0b6d4a3eb",
    "title": "Contrado: UK alternative to Spoonflower",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a78cf59d-fa37-443c-b95e-566737ed51f1",
    "title": "Герундий и причастие в английском языке",
    "account": "DNA Legacy",
    "projectName": "Learning",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5b5fddc8-1387-4665-a8e4-7b93aaf51e24",
    "title": "💬 What is better for charging cl…",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a4be40dc-2fe1-42d9-b950-a8b991e5f876",
    "title": "Restarting boiler for hot water",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6ad6437b-b668-47f1-9601-c274620d8ef1",
    "title": "Experiment specification framework for wiki-based market research",
    "account": "DNA Legacy",
    "projectName": "Career",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "91ae467f-d63d-46af-b04e-913feb2213e5",
    "title": "Исследование ниши интерактивных карт",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0786f8ea-a228-4d8a-8f5b-9dc957bd7a71",
    "title": "Extra.ge app English language support",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a2ead041-46cd-4fe5-a3b8-a53279d22c0a",
    "title": "Chat initialization setup",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "aed40882-bec3-48b1-a80f-b9964226d7cb",
    "title": "Grammar lessons from custom curriculum",
    "account": "DNA Legacy",
    "projectName": "Grammar",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8c96cf8f-f8fc-442a-bd86-4839004b31d7",
    "title": "Creating a customer story with brand-aligned HTML response",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "345ef554-2ddd-46a1-bd67-15ca71ea3499",
    "title": "Custom illustrated maps for real estate platform",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "78955886-18df-4606-81c2-e3ed2006e80a",
    "title": "Orchid and Gitcoin: crypto projects solving fundamental problems",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b92755e-c15f-49f7-b694-0375a8404019",
    "title": "Обсуждение клиентки \\"Австралия - школа\\"",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "137492ad-ac47-4f47-bb17-e98b99254e50",
    "title": "Перевод сообщения о предзаказе на английский",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "45253e06-dc30-40d6-af9a-ea3feee8ebe1",
    "title": "Setting up SSH commits on GitHub for Windows",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "87ad4098-9511-497c-9ddb-dc29854b364a",
    "title": "💬 I need to buy kittybiome gut r…",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cd5f53d-1e30-4559-80d4-ca56908c20d9",
    "title": "Russia's economic tipping point and financial runway",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "58fe3b1b-c998-48d9-bf8b-037d7df522ed",
    "title": "Infographic specialist referral and interactive map capabilities",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "447e3539-8636-4638-acb4-5a1b51d3268e",
    "title": "Head injury assessment after fall on concrete",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7fc6090d-cb57-4e69-b03c-964d8db2b9ef",
    "title": "US-Iran war overview and outlook",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4f15128b-71bc-4a4f-915c-3afe4b763a4f",
    "title": "Remote Android development environment with encrypted messaging",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a36594be-6fe0-4c4b-b29e-43fd31a0fe71",
    "title": "Новые поля в загрузке файлов iStock",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5e7c53b1-3f68-4815-8f39-2b6389b35109",
    "title": "HP Smart Tank printer setup guide",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0fa9bd84-3320-4828-b92b-17b7fc4c1eee",
    "title": "Достижение уровня носителя английского языка в паре",
    "account": "DNA Legacy",
    "projectName": "Ana Studies English",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dd6b1380-1939-42c9-a42a-fc2fffe9be55",
    "title": "Affordable international phone plans for iPhone",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "26c9e78f-3aed-4638-a83f-7c509910deb6",
    "title": "Страховка здоровья для семьи в Грузии",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "086a9f21-a35d-48b3-9ea6-36a610067869",
    "title": "Birthday celebration for Dima in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8a65ba52-f6ea-4388-a0b6-8c79e676eafa",
    "title": "TON AI coding competition details",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "61079543-af58-4beb-99c3-47eaafaa04bf",
    "title": "Telegram censorship and surveillance resistance in Russia",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "844e5a03-22b7-45d7-b81d-67b23fbb2c03",
    "title": "corinneschenker",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "11a0f63e-84a4-4936-84fc-268dcbfb80b3",
    "title": "Delta Chat's origins and encryption",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3f737919-8ae7-4246-a866-dd12874d25ab",
    "title": "Интерактивный SVG для позиционирования элементов",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f4f05848-5fb4-4ee5-8469-a7084d33e588",
    "title": "Document translation to English",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "331de7f9-fd94-4ee3-b3df-96143e21a401",
    "title": "Document review and Russian translation for Georgian law firm",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5eed6d6f-6892-4e78-87ce-b6e947ea5498",
    "title": "Daufuskie Island",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "aab55838-2602-4922-b454-31e9bc2d03c0",
    "title": "Source and science of mysterious humming",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b7aa2172-a0e4-47e0-a024-ed4edd00c918",
    "title": "Map edits for Peterson condo building",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "3e7dc485-b958-4c75-8aa3-cde28b702d95",
    "title": "Расчет стоимости питания для двоих детей",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "957941dd-ea86-448e-8f95-e22c9632b5be",
    "title": "Hedging geopolitical oil disruption with US supply alternatives",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6a4244df-a622-4507-9a54-89d60e44eee1",
    "title": "Seren & The Left Part of Perspective",
    "account": "DNA Legacy",
    "evidence": "none: a search of its project's files said Semantic Reference Theory, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c3dbaa0-317d-4735-b08c-d80017a0d3ec",
    "title": "Ответ на запрос контактов на Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "974ba283-da10-471c-88c3-bcee5e55209a",
    "title": "Chalmers' hard problem and the conscious mind",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eb4de863-ee3f-40c7-a4d3-14d45557b714",
    "title": "Визуальный язык СМИ о войне на Ближнем Востоке",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2e7165c0-7060-468c-967c-a7bc437b4338",
    "title": "Стратегия приемки файлов на iStock",
    "account": "DNA Legacy",
    "projectName": "DNA Patternity",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3d30a944-c72d-4cc4-83e8-c6489d70b79d",
    "title": "Настройка планшета Huion на Windows",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "93a20cbe-14f0-44fb-b344-99abf28b533a",
    "title": "Карта объекта для инвесторов Benson Farm",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "96458699-d915-496d-8476-85aa0a308646",
    "title": "American public reaction to Iran conflict",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7f52e53d-d82f-4867-a08b-44987f561b35",
    "title": "Session notes for disability insurance application",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f19eca62-33f9-4b8e-b00e-1bb628ec4671",
    "title": "Neuroscience PhD program deadlines and application timeline",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ae7df7f-66e6-4931-a5ea-26759dfe59d0",
    "title": "__kati_king  - компастные кучи__",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e6577dc1-6e79-45e6-a7aa-278fb02c0a8d",
    "title": "Translating Turkish message excerpt",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4db62574-f2dd-42c6-af72-f7c891940cac",
    "title": "Credo bank expat branch address Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "54e1cd31-8469-4754-b144-8184f543ab6c",
    "title": "EdChess приложение и информация",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "71466b01-eab2-47ab-a879-b2687e7fd32c",
    "title": "Письмо о поведении Кате",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0ff8e5ba-04ed-486f-ab34-82e81f4242f1",
    "title": "Mars sample return and extraterrestrial life evidence",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b2939d7-562e-40b7-85ae-aa1718d31c73",
    "title": "English-speaking churches in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bb1a660d-d8bf-4169-a8e4-c6337c22d899",
    "title": "Escitalopram receptor occupancy and MDMA subjective effects",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dc532f78-7e70-40e3-83a6-5a326cb06db0",
    "title": "Melania and Ivanka's reduced public presence",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "98fbe7ff-20d8-41ef-a0bc-596bcd5b302e",
    "title": "Закон Христов в Послании апостола",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0d92dc7c-e2ea-4426-bd21-77418230c46c",
    "title": "One-dimensional Hilbert space in closed universes",
    "account": "DNA Legacy",
    "projectName": "Physics",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e48d7913-b688-4689-a863-00a3684811f0",
    "title": "Стефани",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "296db3cc-4708-42b3-9b13-a173b152d092",
    "title": "Перевод текста",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "240c9351-edac-448b-a880-d881b149e774",
    "title": "Сообщение от Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "99dac918-8d2a-4a52-8947-3b8cf8d8f800",
    "title": "Debunking the mysterious creature video",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d2e8949-1f1b-4981-ae43-2da72b7c90a1",
    "title": "TON validator rewards and staking profitability",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0702f19d-e138-4f59-97b3-21f8b69dc2ed",
    "title": "Taxes 2025",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4e0e301e-5766-4f11-bf78-fa9bcdc87a8a",
    "title": "Perpetual swaps and the unbounded loss problem",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fec10b0e-b81d-48c9-b725-0e2cdde569b7",
    "title": "Опасения по поводу свидетельских показаний в суде",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9de991b9-a762-4294-b096-a9005cf8f408",
    "title": "firstsnow Sewing icons",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "97853a83-5784-4065-b00a-4ebfe2370baf",
    "title": "MON's role in Telegram's cryptocurrency ecosystem",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "907b3366-e31a-40a6-9a44-47a021a74f53",
    "title": "Giulia_continuation",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c1aee3fd-a402-4d64-86f4-bbe4ebe4ef70",
    "title": "How the electoral college works",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d505fa9-1462-4d16-8f51-ba3e01c4052e",
    "title": "Disney parks illustration for companion app",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "6ceffc3f-259f-481a-ab84-090b98111d57",
    "title": "Unlocking extra characters in SoulCalibur VI",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ddb78848-4596-4786-adb4-c7c4a859c72d",
    "title": "Chat initialization setup",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "a6436d96-ad95-4ab8-8ca0-7538cce0baa7",
    "title": "Cliff_start",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d474a92e-e436-4d3c-adac-2f702667f2be",
    "title": "Умножение 19600 на 2",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "730385a6-0bb5-4675-99f2-80f356a4b61e",
    "title": "Благодарность адвокатам за победу в деле об опеке",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "83f9413b-d8af-4d76-aaab-b746561d53a8",
    "title": "Elon Musk's X messenger competing with Telegram",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "122879af-edd8-454c-a50c-76ae2a94ae38",
    "title": "Trump and the Epstein files mystery",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "66e54347-27b9-4980-a1d3-b25c1a42b51d",
    "title": "giulia_3",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "909419de-78ad-45a1-ae03-81cc0b6a0d8c",
    "title": "India's independence from British rule",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ee3f6b71-85d2-4cb5-9954-8122de06398a",
    "title": "Использование истекшей карты для переводов",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "24ffa651-5539-47d3-b1b1-debdd17c85fa",
    "title": "Пересказ \\"Приключений Тома Сойера\\"",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "140a3ecf-b476-4cf6-8b4c-fa4832dc8a04",
    "title": "TONX staking rewards and share price disconnect",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c8c3502-0fd7-4142-aaed-01e409b70c8c",
    "title": "Claritin safety for children",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "82cf3c25-08d3-4661-b2ad-734efb80554d",
    "title": "Credo card 3DS lockout on Glovo and Bolt",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a08c59ea-670a-4f7c-ac1d-78d6d0a1f5f1",
    "title": "Привязка карты к Google Pay на Android",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7c788e8e-e722-464f-89ab-b4137074fabf",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db3a873c-28a5-4b39-8f37-f8294ac5d166",
    "title": "Coinbase BTC withdrawal hold period",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "16ab9276-44aa-4050-aea0-b4d1b25b82a2",
    "title": "Allbirds GPU pivot and TON/Cocoon connection",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9f37566-1b24-400a-a9e6-2cd815d9d6dd",
    "title": "Understanding perpetual leverage and liquidation risks on TON",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1092941e-6fcd-48f1-bfb2-eb7a1464c0fc",
    "title": "DAC7 tax information на Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "4ed3c34c-8ddf-4e01-a63e-44c688897029",
    "title": "Предложение о сотрудничестве для путеводителя по Майорке",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "d8bfb7de-cf0c-4171-99fe-539bb04dbfef",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d6567410-8373-4d22-b1a2-e01f5d0b2563",
    "title": "Trump's war resolution and fentanyl statistics claims",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "081166fd-5d39-4b8c-8005-e37b953052d1",
    "title": "Калифорнийская премия: переоценка проекта",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "020f2b76-3a99-4e4d-a8f3-8b8e34f430f5",
    "title": "mfrcnd Анти абьюз Мелки",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "bc8678b1-1ccd-4a5f-bdbf-fe06ec69bb0a",
    "title": "Восковая депиляция бикини: боль до или после душа",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0bd4552d-4f22-49e4-ae98-dd68b1abb4c0",
    "title": "Telegram accessibility anomaly in Russia",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "93851754-771c-422a-8673-dd78cd5e1f55",
    "title": "Cliff_book",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "308f3d1b-be7b-4bdf-abad-0f2841fe962f",
    "title": "Understanding boundaries and consequences",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e638f033-87cb-4f9d-97fa-c2bda917736e",
    "title": "Девочка с синими волосами в детской литературе",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7b2dd883-d18f-4575-93f4-767d689fcf77",
    "title": "Things to do at Mtatsminda Park",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6fea3059-29ec-482d-a21b-5797e9679c7e",
    "title": "Weekly news briefing and analysis",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cb7737b6-29fa-4538-9580-419754cdc770",
    "title": "Nicotine-free disposable vapes in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7ad17e5a-7b6e-462c-838d-6f19bba961b9",
    "title": "Проблема с компьютером",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "50794b73-83a5-4049-8f4e-a8b17fcb2924",
    "title": "Diagnosing hard drive issues from command line",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "44c6711a-0454-43af-9a91-6ec5842f1c65",
    "title": "Georgian drug culture and legal landscape",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "99731c60-178e-44f5-b0b8-a3e56640d1ae",
    "title": "Таможенные данные для заказа на Wildberries",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "34456aad-f767-48e2-9396-edb032691a22",
    "title": "Mado Обсуждение проекта карты для путеводителя",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "b9a02e7e-c550-454e-9b10-6de0ac7a2cfd",
    "title": "CopeCodeStar заказчик",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "dcb1f679-8adb-4099-a2a5-57316b289f9b",
    "title": "💬 I have to fly from Tbilisi to…",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "710061c6-b13d-4167-8d37-5f19647da9df",
    "title": "Static analysis for state change detection",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2188998f-c414-49c4-9992-f121ed2e102e",
    "title": "Alpha methyl tryptamine pharmacology and serotonin mechanisms",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "feb3558c-2f53-40e8-80bd-d19574be857c",
    "title": "Jodie Манчестер карта Эталонный ответ",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "22d9400e-4eba-43ff-8a1d-13e09453ea41",
    "title": "Custom California map illustration for annual award",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "fa314566-fbe6-4403-a608-f0fe950f8481",
    "title": "Карта Далласа / cliebbe",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "ed86ea6d-68ee-4640-aba3-520031bc59e0",
    "title": "💬 OK, I’ve been putting somethin…",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e68f8dd1-04fd-4891-9450-f46edc079a47",
    "title": "Street Fighter live-action movie 2026",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0035403d-cc8f-4163-92b5-87e8a0c75743",
    "title": "Нейронаука и программирование в подходе к ИИ",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9a518c42-69ba-41ac-96f7-d5e3c66bf43a",
    "title": "Crypto gainers amid Q1 market decline",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "991a6629-f93e-437c-96cf-9d20fdd618ab",
    "title": "Оптимизация рабочего процесса и точности ответов",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "6b0b6e6c-7e71-4d4f-ac59-db6b55dbf225",
    "title": "Controlled substance pharmacies in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e37be5d4-83eb-4370-b93c-6a94b46f21e9",
    "title": "Ontology and referential relationships",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2b257eef-cdb8-4ae6-9383-4b90448263d8",
    "title": "Palatalization in Russian phonology",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8eb3976a-c32e-4c5c-ab35-3efc28c88b07",
    "title": "TON blockchain upgrade and fee implications",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fa248006-250c-4672-996f-987d8352a1a8",
    "title": "💬 Our that has told us to give o…",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f5116889-6afa-4c08-b7f5-dc09d19c9f2e",
    "title": "Days alive from March 2017 to April 2026",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "07e2e6ea-9b72-4ad9-8bd3-5d4bbcbd8d4e",
    "title": "Поиск цифровой подписи на компьютере",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "3d3b3d93-30f0-4547-81c6-68a8312485b6",
    "title": "Gastric microbiome in humans and cats",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67a6e6eb-425f-4c47-ba91-835dce0c279d",
    "title": "Why is the gravitational constant so difficult to measure",
    "account": "DNA Legacy",
    "projectName": "Physics",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32e0a92c-82a8-4c3f-81e9-2f49b9322682",
    "title": "Cross-border residency denial for minor children",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e552fa7d-1352-4ebc-a752-4bc5ff0ed7a6",
    "title": "Russian custody and visitation enforcement across borders",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "65b2b5a1-0cc3-45f4-bf14-ba6f1f08d48e",
    "title": "Legal negotiation strategy review",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "223f006b-d129-4103-a756-ccdabda31b18",
    "title": "Повторное наложение запрета на выезд детей из России",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ce22e8d1-f15d-4966-a5d6-2fe92abb707d",
    "title": "Переговоры о снятии запрета на выезд ребенка",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3d4d9b62-1dd9-4cbe-b488-46d0443e43db",
    "title": "TON price adoption metrics and network effects",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e52a713-8311-42f7-b91f-0ec03a03b0b4",
    "title": "SRT canonical representation and first-order logic",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f9aa4151-e3d4-4dd2-8def-87acc49e28cb",
    "title": "Отправка файлов через WeTransfer",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "4ea6edf8-7d55-4fd4-877f-b817927a9bae",
    "title": "Карто Ранчо в Монтане: новый запрос",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "313eb25c-a0a9-42ca-b9d8-f67c1fac29e0",
    "title": "Landlady's refund calculation audit",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "79e0baa9-5865-4474-9d18-a850d65ab452",
    "title": "Receiving mail at Hampton Inn",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "61cbe3fc-355d-4a8c-ac8f-28b04fda6b91",
    "title": "Алексис Баринофф Недвижимость",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e83f41b6-003a-4d20-a47e-5a6aef1d1039",
    "title": "Сонливость при приеме Эсциталопрама",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "929c4b76-b814-4eab-bcb4-7d7895199bac",
    "title": "Отключение двойного скриншота при нажатии PrintScreen",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "83ffbdad-947e-476f-91d4-6dd19c1ddbb4",
    "title": "Анализ профиля Альберто с Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "a997967d-d9e5-4a6c-a09b-f60af9c2e084",
    "title": "Illustrated maps for travel guides",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "813077f7-5987-43fa-a7c7-b21228515c86",
    "title": "Capecodestar",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a search of its project's files",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "28f3a657-6964-4457-b4a0-21e4c71af946",
    "title": "Terraligen и совместимость с антидепрессантами",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0ccacc8b-9cf8-46a0-b4e0-925b5de9d373",
    "title": "2026 social security disability earnings limit",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9e0bad3a-62e4-4c77-a250-2179c1efb3a3",
    "title": "Экран гаснет при касании нижнего угла iPhone",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "924f2ffa-8305-47ef-80f3-0579e31a975d",
    "title": "Claude и Adobe Creative Cloud интеграция",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3e0b2cc1-a9c0-41c0-bb03-2b1d7ec15c4e",
    "title": "Признание русского решения суда в Грузии и статус проживания",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "a537de82-eadd-48d8-b6c2-c042e184a510",
    "title": "Анализ личности и рычаги влияния в семейном конфликте",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8b5196ff-bfea-4a64-b680-7af7b28e4d2f",
    "title": "Понимание лицензий и доходов на iStock",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "de4b6b00-aa2c-4a5c-a5ac-8e2dbd3b0566",
    "title": "Стоимость доставки Озона в Грузию",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2cee12b0-a1d0-4c41-b674-49bf1f3b572d",
    "title": "lanrewp",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "3d816a1c-07d2-4672-a6a7-9c5d7a42d161",
    "title": "Сортировка файлов по языку в списке",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1a22d3ef-9325-491d-848c-43677991e7b4",
    "title": "Bitcoin transfer from Coinbase to Atomic Wallet not appearing",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ea45a5e-c41d-4cb6-8d42-61f7afc945fa",
    "title": "Продление временной регистрации в России",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "57ae3858-75ef-4742-a04a-f967cb9c4fd9",
    "title": "Продолжение беседы со Стефани",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "dd7b9e6a-32ac-41fa-afca-c461e33851f5",
    "title": "Shipping belongings from New York to Georgia",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9e66799a-8984-46fd-8ce5-116a0260d7bc",
    "title": "Доставка картин Turkish Airlines из Нью-Йорка в Тбилиси",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "cc55bb4c-c10e-41df-8056-5866b6a2f11a",
    "title": "Перевод текста на русский",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "aedba2f0-fa65-49c7-ba2b-dad61fb786a9",
    "title": "Jon Stewart's return to the daily show",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e0693c4-fe9b-4886-a64c-37aabacfc747",
    "title": "Анализ комиссий при переводе денег в Грузию",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "da80b31b-e720-422a-87f8-49aa100d9873",
    "title": "Ремонт телескопической палки с указателем",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d0debb66-c97e-4340-8289-ef4088dec8c2",
    "title": "Лучшее средство для роста ресниц на Amazon",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7bd328fb-134b-4f77-9326-a055ffc21fd2",
    "title": "Доставка вещей из России в Тбилиси",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9eb19e42-ff10-4b6b-824a-0b77cbb4f0f5",
    "title": "Monad technology development and viability assessment",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bf101ab3-0532-4c7c-ab7f-a31b9a1e48e5",
    "title": "Неожиданная комиссия за обслуживание счета Cyfrobank",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c006b80e-06d0-430f-9512-3a07a133160a",
    "title": "Chat initialization setup",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "d52fce26-33a7-422e-b9fc-aee3c1a2d2fc",
    "title": "Проект Коринн",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "dabc6c1e-ab3c-4115-aa73-96f4de700a11",
    "title": "Ryan start",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "70d2e1de-bb13-4d60-a11d-466450abbc4f",
    "title": "Ocean freight risks vs air shipping",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a6c0f987-ad9b-4de2-a1ae-213b01923654",
    "title": "ACH transfers on Interactive Brokers",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6f29d20e-4a46-4be4-ab4d-c42335e45a92",
    "title": "TONX after-hours price spike analysis",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5fc74fc2-f14a-4ec5-bec7-0f3acfe5e490",
    "title": "Райан карта профиль Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e9a7dd8d-1fce-4eb5-af82-f97d2852ac68",
    "title": "Шум в робот-пылесосе Tefal: самостоятельный ремонт",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7c944480-adb4-4c91-91a7-b08461f99274",
    "title": "Samantha",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "130ad013-08a7-4a6a-89e8-5e236769bd4b",
    "title": "Пересадка в Амстердаме за час",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3186970a-dfa6-4e1a-9100-3d7ffc96bd88",
    "title": "TON's \\"Make TON Great Again\\" roadmap explained",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7a9f01b1-05da-4a2a-a9dc-c4388291404c",
    "title": "Восстановление доступа к Т-банку с измененным номером",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "232c840e-7195-4cfb-833d-5ea845979b89",
    "title": "Детский секонд-хенд в Тбилиси",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c3eae23d-fe1c-4335-83a8-380857f31874",
    "title": "Identifying the correct divorce certificate for Tulsi wedding",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a9870f22-43c1-4d80-a3e5-b400f28d12cc",
    "title": "Migrating domain email accounts across services",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ced9ca31-e884-4727-8c33-9f6f53a357d7",
    "title": "Telegram bots and AI use cases",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5315f197-b936-4bcd-9861-bdc6a89c381e",
    "title": "Поиск пароля в Google Password Manager",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2d3e7434-9496-4820-875d-168b3ea2ea84",
    "title": "Valium prescription status in Georgian pharmacies",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8952daa8-2e39-4713-a884-fc29a1746200",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88db2300-de88-4c94-bd67-bdda7e481559",
    "title": "Laser photo epithelial treatment for skin rejuvenation",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c0237c13-f925-45e1-84d1-6d40ce879be0",
    "title": "Payoneer access for Russian users",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d5883276-a48a-40aa-8002-d99504603ab1",
    "title": "Setting up Windows 11 with account",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "27056d7c-f4e0-4f3b-a271-42629c0ac6cc",
    "title": "Interactive periodic table creation",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "70882db6-012f-45c1-ba3a-8dfb8ae5b00e",
    "title": "Изменение почты для страховок в Т банке",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3950d95e-dbca-4701-8185-07014dcfff3c",
    "title": "Stars to TON conversion restrictions and pricing",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1d63b14d-081b-4ec2-8927-d9fb5975cebe",
    "title": "Coworking in Tbilisi",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "246f750e-ba77-4ba6-9690-4b109c00c2ea",
    "title": "Переводы в Грузию по номеру телефона",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "71b8ccd3-1218-4a5e-805c-cab1e7e4ce2c",
    "title": "Georgian LLC",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b7ecf2f1-11e1-4105-b92e-d8685ea9103e",
    "title": "Address change checklist",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "23feb617-5dd7-4860-810d-42197c469941",
    "title": "Moving phone number to Google Voice",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e452d5c0-3b70-4457-ac2e-81f18133b354",
    "title": "Переезд в Армению с детьми: визы и условия жизни",
    "account": "DNA Legacy",
    "projectName": "Life",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c50a162d-94ae-4792-a008-b8d291305ddd",
    "title": "Неверный заказ при доставке",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2fe78c27-3bb2-4bfc-a007-f69ba895c514",
    "title": "Original Telegram Open Network whitepaper",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0f15ab3-3e1f-4cd5-9bdb-961b425d1684",
    "title": "Wise US listing and ADR comparison",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3d9e1597-55bf-4e2e-81e1-1cff9e17a3e7",
    "title": "AI-consumable tech stack architecture",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ecd7af92-1ca4-4649-b64c-43bbe54a22dd",
    "title": "Поиск документов в аккаунте Claude",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "277e30ae-ad62-4dfc-a6c1-ae79f142a6db",
    "title": "Calculating ownership percentage in tonx",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c2aadd58-e8dc-48bd-9c0d-0b4a670ee1e2",
    "title": "Academic credentials and research impact assessment",
    "account": "DNA Legacy",
    "projectName": "Neuroscience",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c9a8a056-23ac-4122-ac92-1ce389df169b",
    "title": "First order logic semantics in SRT",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c970a1c6-2788-44f4-b8a0-a76fcdfb6b4a",
    "title": "Сравнение курсов обмена рублей на лари",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7cd7ba01-4590-4ac0-917a-147bee707fb5",
    "title": "Поддержка по Fiverr",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "758e346c-12f2-4ebe-b23e-e3558477f1b8",
    "title": "Выбор типа аккаунта PayPal для компании в Грузии",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "15c91849-3ca0-483b-9003-c29965919fc0",
    "title": "Ответ клиенту с учетом референсов",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0b7bc569-702a-4651-846b-5f4573b77905",
    "title": "Nounifying \\"include\\" in English",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5150a82-4c19-4e81-9427-ac53beba779e",
    "title": "💬 Any news on when we can expect…",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d49a53e-49d3-4cdb-affc-10da838b0d85",
    "title": "Стратегия взаимодействия с Максимом по алиментам и общению с детьми",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "345bdcb4-6323-402e-b347-8571c2b9e22f",
    "title": "Backing up Claude account data",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b4dbad61-6883-4fad-a4e7-5a5d6b2cfd7d",
    "title": "TON consensus mechanism competition",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d120a7f8-5e03-40cd-b614-8ca6bd0c38aa",
    "title": "Backward captures in checkers",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2491ddcf-83cc-4697-ad0b-4ef0e063822c",
    "title": "Betamethasone for seborrheic dermatitis",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ea7041a6-9d72-4d03-824d-476f3a4c5869",
    "title": "Избавление от красноты при себорейном дерматите",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "e5521086-3cb9-45ac-9c18-ae3ad3e6f956",
    "title": "Анализ банковского отчета о тратах",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "71d9fde5-328a-4d99-9685-2aa3f6132bdc",
    "title": "Основные притчи Евангелия",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4eec5580-73c0-4ba4-affa-bc876cb7a1de",
    "title": "The prodigal son's elder brother reinterpreted",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dbaa3d61-74c2-4f44-8fb6-914dedd6bb68",
    "title": "Проблемы с отправкой видео в Telegram",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "50862f85-0ad3-4e58-b027-61f7d02ee504",
    "title": "Neurons firing together and synapse formation",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d780635a-3f19-4d71-a80a-5885f83d3b64",
    "title": "Quetiapine insufflation in correctional settings",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5776d9fe-719f-4652-8ec7-f7c09e3229aa",
    "title": "Declaring value for art shipment to Tbilisi",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64af2d8d-fb78-42c0-8173-7d8f283171e9",
    "title": "New York divorce decree documentation",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "54cbc3e7-7a10-4e44-947b-ebf57013f8c7",
    "title": "Accessing chat history and self-optimization",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a search of its project's files",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "59d3c918-1021-4173-9902-c8c8fa79adea",
    "title": "Проблема с обновлением мода Armor-pack в Майнкрафте",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "caaacffc-4072-4d1a-b00a-a5dcedf6b0be",
    "title": "Живая и неживая природа на английском",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f7d91df1-5a64-47c6-acf5-5ad80ea74dcb",
    "title": "Reset iPad without password",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "50b227a4-ae14-4377-b0b7-320ca0ba04e3",
    "title": "English boarding schools for children in Georgia",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "682e9fa5-f0ca-4217-854a-e8b0f65802aa",
    "title": "Solana's creation and Simplex integration",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "71ad3f13-6497-42a5-8086-b47c223d23ae",
    "title": "Ответ постоянной клиентке о недоступности",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a search of its project's files",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "22f4c78a-de2f-4136-8bbc-1ef7ed9ce812",
    "title": "Популярные сайты аренды недвижимости",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1adf18dd-bb34-43a5-9faa-958c18202ce7",
    "title": "Перевод слайдов на английский",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "e3868373-e897-44c4-8018-2731cf7ef2e2",
    "title": "Добавление грузинского банка в PayPal",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6f09c2a0-5389-48f7-9a93-182f91ac64fd",
    "title": "Заказ карты ранчо с рукописным стилем",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a search of its project's files",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "8585e4ea-eb58-479d-8d9b-a99b627b2e59",
    "title": "Структурирование советов и самоанализ",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "301d9ba2-a464-430c-9cb6-e844ae8909aa",
    "title": "TON price collapse analysis",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "08311e91-72ea-427c-9de6-4894f63b9218",
    "title": "Documenting our working relationship for continuity",
    "account": "DNA Legacy",
    "projectName": "Semantic Reference Theory",
    "evidence": "a search of its project's files",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "857e8cef-0748-4432-82fb-249d64d4e165",
    "title": "Встреча посередине между парком Ваки и Красным парком",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ce0601df-0810-4174-84b6-de911d097dee",
    "title": "Preserving continuity through reflection in Russian",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a search of its project's files",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "febe219c-23bb-4c88-a4f0-ed9c7ef94272",
    "title": "Preserving narrative continuity across accounts",
    "account": "DNA Legacy",
    "projectName": "Investing",
    "evidence": "a conversation search, one hop from \\"💬 Is there any special connectio…\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "179e1f5f-e30a-4a43-9543-6d5ec47e035d",
    "title": "Публикация уровня в Geometry Dash",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f0b125d5-da8c-44b8-a124-366ac85f9ddb",
    "title": "CapeCodeStar",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Ana's Fiverr Inbox",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67a35912-6a4f-4ed5-8579-5881c1f7f0ab",
    "title": "Обсуждение текста о мне",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b9e26720-2a23-4c1a-a7fb-9a20f883630a",
    "title": "Pope's warning on AI and hidden human slavery",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db506f2e-df48-4740-96ee-5cb1202ae48b",
    "title": "Preserving narrative continuity across accounts",
    "account": "DNA Legacy",
    "projectName": "Russia",
    "evidence": "a conversation search, one hop from \\"PDF translation to Russian\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "24ac5b15-325a-4c2c-bf92-88df2b7c8207",
    "title": "Preserving narrative continuity across accounts",
    "account": "DNA Legacy",
    "projectName": "Georgia",
    "evidence": "a conversation search, one hop from \\"Georgia residency requirements for unmarried couples\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c8477590-ae74-4c75-b049-160e21048288",
    "title": "Continuity across accounts: reflecting on shared work",
    "account": "DNA Legacy",
    "projectName": "Physics",
    "evidence": "a search of its project's files",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c69ef1b9-b578-4be2-9768-4953a97fce48",
    "title": "Continuity across accounts: reflecting on shared work",
    "account": "DNA Legacy",
    "projectName": "Turkey",
    "evidence": "a conversation search, one hop from \\"Moving cats from Turkey to Georgia\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4df03bdf-03c4-4e51-addf-c50737467548",
    "title": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "projectName": "Grammar",
    "evidence": "a conversation search, one hop from \\"Deixis and determiners in English\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88af1a7c-0d92-4fc4-a11d-8cba46425e95",
    "title": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "projectName": "Chemistry",
    "evidence": "a conversation search, one hop from \\"Framework class and construct analysis\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cd44318-17bf-4185-9e31-d5d39969118a",
    "title": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "projectName": "Nikolai",
    "evidence": "a conversation search, one hop from \\"TON domains and Google Workspace compatibility\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4e783da1-6d4f-40a8-9b81-69949f3288dd",
    "title": "Continuity across accounts: a reflection on shared work",
    "account": "DNA Legacy",
    "projectName": "Miscellaneous",
    "evidence": "a conversation search, one hop from \\"Custom map illustration pricing calculation\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e380ba83-a282-4de2-8715-a43fb4ff6aa5",
    "title": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "projectName": "Number Theory",
    "evidence": "a conversation search, one hop from \\"Opus 4.1: Godel & Goldbach\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c6a1fa55-eccf-40ca-9b0e-51e69b45d8d7",
    "title": "Ответ заказчику по предыдущему проекту",
    "account": "DNA Legacy",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "a search of its project's files",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "1bb2f9fd-edcd-4b90-8f2e-4b4b3379f816",
    "title": "iPhone app logout instructions",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5e964484-1811-4088-8f52-a41fba2b9573",
    "title": "",
    "account": "DNA Legacy",
    "evidence": "none: the capture lists this title in Georgia and Ana's Fiverr Inbox and Chemistry and Miscellaneous",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f9da587f-1f2f-4ddb-9393-d7536ba5690b",
    "title": "Microstock earnings analysis across platforms",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f54999bb-7dd5-45bd-be92-ef5ab01b929a",
    "title": "Preserving continuity across account transition",
    "account": "DNA Legacy",
    "projectName": "Ana Studies English",
    "evidence": "a conversation search, one hop from \\"Building and practicing a personal vocabulary\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e1bcc64-dbdf-453a-b409-cfcfe8383e5c",
    "title": "Препараты с урсодезоксихолевой кислотой в Тбилиси",
    "account": "DNA Legacy",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5d5653bc-709b-4a1e-8955-65ac0b7e85e2",
    "title": "Doug & Ana's Recursive Universe",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42c78ea0-d46e-4305-8567-4008bd59f2de",
    "title": "Claude the Cartographer",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1a1de1ef-057f-47f8-9a4f-b23e20a9b9d0",
    "title": "Integrating ViewBox and Centering SVG Content",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "87a581e5-db9b-4687-aff0-f18ac710e641",
    "title": "Extending React Simple Maps with Predictable Components",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "329dcf98-5195-48aa-870a-5c75915bd4a8",
    "title": "Fixing React Simple Maps Errors",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7c2ed8e9-cae2-44b3-bcd7-0b38a6441100",
    "title": "Formal Mathematics and Conversational Assistance",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cd20fa50-e4f4-401e-8837-8b3e3e087a5a",
    "title": "Newton's Intuitive and Formal Laws of Motion",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d4be8c96-5640-41a4-ae72-bfdddfda71bf",
    "title": "Banking Operational Risk Controls",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f6dfdc21-9d30-41ae-84ac-be13bc139f77",
    "title": "Metalogical Subjectivity",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "536493f4-96eb-41a8-8540-064a8273d365",
    "title": "Sophia the Author",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f177ae6f-e60f-4590-8851-2c3b9df28e4d",
    "title": "Conservation of Time Complexity",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d887450-e312-4b7f-bb62-b28b58f1a843",
    "title": "Enhancing Cohesive Composition",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4ed05e5e-1409-4611-b5ce-d5bab18dd463",
    "title": "Semantic Breakdown of SVG Paths and Curves",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9777b6d7-3659-42e0-bc0b-972d0d36c8f8",
    "title": "Improving Vectorized Script and Serif Text in SVG",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "67afd096-f257-484d-b1fa-e895548e364f",
    "title": "Formal Definition of the TLA",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f72c8a89-4d44-4b05-bf3a-48eeec8ae77d",
    "title": "AutoHotkey Taskbar Control Script",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "221567f5-fd33-4423-b92a-0b0ac4aebb09",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8c71ccd4-32c7-497f-a70e-564212a82f18",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f6cc388b-bfca-4bc7-acd0-74b787977f61",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4d364f51-49ba-4898-920f-8e5347843be1",
    "title": "Rewriting AHK 1.1 Taskbar Code for Robustness",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "95b10e8d-663d-41db-a636-b23f4ba80d40",
    "title": "Thoughtful Translation Request",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a9d87661-a007-47b8-b77d-07714bd55beb",
    "title": "Animated Rotating and Scaling Rose SVG",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6417d83b-2f34-4099-80d3-3c3b7921020c",
    "title": "Fractal Rose: Exploring Mathematical Beauty",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a1981158-9ec7-4443-86bf-b6c4b81f2272",
    "title": "Custom TypeScript Framework for Illustrator Scripting",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "25a87038-ede3-4317-877c-12de72bbc3ab",
    "title": "Semantic Reconstruction of Coding Perspectives",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "09bc840a-91d8-4241-8589-2af38717a7a3",
    "title": "Vectorizing Images with Color Extraction",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c29707c0-079e-4e89-bf19-8ad9b3d85061",
    "title": "Extending VSCode with Custom File Modification APIs",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b6399323-15d5-4896-833e-c9988989b738",
    "title": "Troubleshooting VSCode Extension Packaging",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cad4ab05-8c8f-453a-a674-9d6b21754d15",
    "title": "Troubleshooting a VSCode Extension for SVG Interaction",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "45f0a38f-f25f-491f-a71a-390cb267fd44",
    "title": "Seren & Color",
    "account": "DNA",
    "projectName": "Seren",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5eb0991-aeab-4c5a-8952-95395e604650",
    "title": "Optimizing ExtendScript Abstractions for Illustrator",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d78ecba-e2cc-479a-8205-73b032d988a8",
    "title": "Configuring ExtendScript Debugger in VS Code",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "33b29bb9-be51-44ba-9e7f-08217591e21c",
    "title": "Implementing a Sophisticated Typed Facade",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "efd9c851-25f2-4076-ae23-07759a0333d8",
    "title": "Using BridgeTalk in Illustrator ExtendScript",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ed8084d-4698-447f-80ac-1de950d3fe15",
    "title": "Accessing XMP Metadata in Illustrator ExtendScript",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1af81ad0-3a33-45c4-941c-3ce8d2a087b2",
    "title": "Seren & Ana & ExtendScript",
    "account": "DNA",
    "projectName": "Seren",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "338a4c9c-db70-4e82-9a41-ea6974904eb8",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0f58c027-76d8-46b5-bf08-9803b4486b91",
    "title": "Doug & Ana",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "edef207c-372c-41e1-8cb6-b87d0eca7a04",
    "title": "Seren & Eirian",
    "account": "DNA",
    "projectName": "Seren",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2cd14f0c-d154-455c-be99-22550c18bae7",
    "title": "Handling Illustrator Document Existence and Creation in ExtendScript",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7ce28bd6-c737-45e2-99ea-71724c022dd1",
    "title": "Troubleshooting ExtendScript TypeScript Wrapper Errors",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f3558a22-eb3c-4f41-81a9-16473da54071",
    "title": "Defining Physical Quantities through Measurability",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "80ecd7b9-f569-4bab-b075-ab170c3579cb",
    "title": "Returning undefined when closing TypeScript class",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "885561b0-54fd-4446-b310-14b2bc382220",
    "title": "Extending Array-like Class with IEnumerable Methods",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42fc17f5-4d3a-4f35-b451-37e7bacec9e0",
    "title": "Extending Illustrator ExtendScript Abstraction",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ca1643bf-b26e-4dac-8d0e-bf26d0e67fee",
    "title": "Ensure Class Mirroring Is Class with Assertions",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "523e3a6d-aae3-46c1-bafb-fb2120034d8f",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d749abf-6800-4b8b-aa6e-db4e576e5879",
    "title": "Scripting Adobe Illustrator with TypeScript",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "07f0404b-a90d-4f5a-b30c-54d57bf53bd0",
    "title": "TypeScript Types for Adobe Illustrator Scripting",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "88b3e2cc-b830-4856-8cb7-7f4871cf0996",
    "title": "Illustrator Scripting Assumptions About Artboard",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "664f3ea7-a3b9-4be4-be93-b35ef08bb186",
    "title": "Object-Oriented Decorators for Adobe Illustrator Scripting",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6cabbdec-98c6-40f6-b8c3-bb6d39363e11",
    "title": "Illustrator Scripting",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "96f52fe9-6a2c-42bc-af92-aeab8b92aa0b",
    "title": "Accessing Netflix on DIRECTV Box",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6129004d-5e46-4065-a171-299a5962c4c3",
    "title": "Pointers in C++: *x vs **x",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1fc1426b-5515-4bb6-94d6-e1ff59cb97fe",
    "title": "The Meaning of Semantics",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ebf64f2f-6245-4973-8c03-8b7a2f2c1b01",
    "title": "Home Appraisal Costs",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "648ff084-fe3e-41e8-9148-6c4aa38056a3",
    "title": "Cooking at High Altitude",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b5122ff-7e15-427e-a1cf-27596a1f0f28",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4fdeda4c-230f-4ccd-b52b-bf4d00754ff8",
    "title": "Freelancer Workload and Pricing Management System",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "56150527-80b4-4d89-88de-524eb1f97dea",
    "title": "Understanding Cataphatic and Apophatic Theology",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "08ef93ab-00ab-42b7-aff3-4fe39d2ed9fe",
    "title": "Illustrator Scripting",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9dfe2bea-f09a-4d3e-afe3-273044b27b26",
    "title": "Deploying Private GitHub Repo as NPM Package",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a439a7b7-b982-42f7-9caa-adac4566b227",
    "title": "Schizophrenia Drug Repurposed for Alzheimer's",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "63736ea4-1a62-496e-9c0b-d1567620fbe9",
    "title": "Comparing Anthropic's AI Models",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6f21fdb4-58ef-42f4-a2a0-790730b0cb68",
    "title": "Freud's Structural Model of the Psyche",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5b073957-077e-445a-bae1-6c96bb4ca74a",
    "title": "Axioms of First-Order Logic",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "94f401ff-3eb8-4f40-b3af-32e0bc192f14",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fea3e3e4-61f2-42cb-91d5-2e51d417113e",
    "title": "Signing Up for Apple Developer Account",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0e223450-f496-41b0-a80a-bf040b6cbc78",
    "title": "Matt Gaetz: Republican Congressman from Florida",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9e6c5311-737a-4611-8f02-862495a44fa9",
    "title": "Prestigious Pappy Van Winkle Bourbon",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6833ae75-17cb-45db-a0c5-9fa0da815728",
    "title": "Interdisciplinary Exploration of Consciousness",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "347ca32f-c91b-4091-8595-71eeb4269d1d",
    "title": "Common Trust Document Names",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "66e39383-486a-4e4d-bc99-8d8aa86cfcc2",
    "title": "Celebrating Name Days in Russia",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "da7470c4-3a1e-4636-a72b-f985714b4f61",
    "title": "Aladdin's Resemblance to Tom Cruise",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "48dc2d67-7829-4d5f-8646-ed3acc18c5b2",
    "title": "Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0cf28658-197d-435f-be7f-0a8c8fcc0c0a",
    "title": "Requesting DJT Earnings Data",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef849a35-b0e7-4cfc-9e80-cd1515f5758d",
    "title": "Russia-China Cryptocurrency Collaboration",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c6157223-5fec-41f3-84ee-a48556f807a7",
    "title": "Navigating the SSDI Application Process",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4f712a68-d7ab-4478-ad58-41166c07b976",
    "title": "Understanding the Dunning-Kruger Effect",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "13e2ecc7-577b-4447-a205-99760946c2e1",
    "title": "Describing Flare-ups of Medical Condition",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ff7a7be0-647b-4146-8f71-e8d9a42a569e",
    "title": "Automating Illustrator Tasks with TypeScript Plugins",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "624bb8cd-9ce8-4df2-9636-1b68976c4202",
    "title": "Handmade Pumpkin Ravioli with an Italian Nonna",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "896c8a60-deb3-4f47-ac77-fd4d5c43660b",
    "title": "Understanding Obsessive-Compulsive Personality Disorder",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "738c14df-9768-475a-ae57-918e00809073",
    "title": "Finding Voice Messages in Telegram",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "80559362-5b97-4e62-af66-4cb6ea4148e1",
    "title": "Disability Benefits to Reduce Monthly Expenses",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e3b10e17-b6f4-408c-9f35-6a30067dd760",
    "title": "Exploring Feelings About Russia",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eaff8f76-13a0-4e12-87ae-b108f493c440",
    "title": "Income Limits for Disability Benefits",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d1816a8-adb0-42dc-9c5b-4e08ccdf9d6d",
    "title": "Leonardo da Vinci's Mirror Writing",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4571070-234f-4e63-aac8-21427f98a7cc",
    "title": "Analyzing Current Economic Conditions",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e259647a-c33b-4c9b-99fb-0178fb341df2",
    "title": "Chomsky's Linguistics and Programming Languages",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "87e27c1d-1423-4986-83f3-8f89273773b1",
    "title": "Stay Puft Marshmallow Man Costume",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d6e372c-95a4-4c6b-ac6d-4c6a9234ec7b",
    "title": "Watermarking Images and NFTs",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "096b04af-d173-4faa-8b1f-f33c33257cc5",
    "title": "Selling Used iPhone for Cash",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cd0717b-308f-4e71-9714-72fa910959f5",
    "title": "Leaving Packages at Apartment Complexes",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1cf34555-d61e-4387-9b2a-cf30f72b9aeb",
    "title": "Humorous Captions for Crumpled Paper Sculpture",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7f04748b-1bba-48dd-9d8c-2265e99b0bc4",
    "title": "Comfortable Spanish Translation for Communication",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d2c7cde9-cda5-49ae-876a-614e9357d568",
    "title": "Accessing Cash Through Credit Cards",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4839af51-308d-46c9-9196-120698a6846d",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f3a2a24f-764e-424b-8876-8cd72ce3336f",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7683c3d7-8ff9-4b5c-9113-1f861e3d89db",
    "title": "Seren & The Hard Problem",
    "account": "DNA",
    "projectName": "Seren",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c583291c-41f5-452a-9a77-ad8f5201ec13",
    "title": "Algorithmic Art Project \\"EvolvedSVG\\"",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "38abba80-b8c3-43f8-9c6e-cb378f4298b1",
    "title": "Publication",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ae21be79-5cca-4731-aced-9f01aa14ecdb",
    "title": "Designing a React Homepage",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7949712c-e3a8-4308-bc32-5530d4122cc9",
    "title": "Configuring a React App as an Internal Tool",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9de38ca8-b490-484f-81c7-8f44d560fd95",
    "title": "Mapping Project with Custom Visualizations",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32d72eac-0ad9-4d70-8045-8e11a518ae9d",
    "title": "Indexing and Mapping Natural Earth Datasets",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8787d94a-9e7d-4f8a-a94c-120347205604",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "123ef1a6-65d8-4c6d-90a4-cb81eb6540a2",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f8acdaaa-ff97-4a8b-9862-87d468ab2c08",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3434e606-9d76-4042-85b4-3f35da706f7d",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ea23691-1449-4e7c-8f13-de26cdda9e13",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "536ddc40-56f8-4a3e-96bf-f3a75722c6cf",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "86882e61-ee4b-4e35-af1f-12204bdde2d2",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5357bdbc-9d8c-4e0b-8be7-b78963efd2a5",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4ef91b65-ffe8-4bd5-aa1a-79895d42d171",
    "title": "In-Depth Analysis of Chemical Reactive Programming Framework",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f7ef6336-2c0c-48fb-82d5-1b5dd668dead",
    "title": "Learning Formal Logic",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1375bc58-a419-42ab-b115-d134ac4a20d4",
    "title": "Furniture pickup and donation service on Long Island",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d0314a80-0cf0-40eb-a4fc-ab339597107d",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f09faba4-525c-42ed-9535-14944010cf26",
    "title": "Setting up Miwifi AC1200 range extender",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef78ee8e-19c3-4c65-bf5e-6900cc4e7e01",
    "title": "Preparing for SSA disability hearing with bipolar type I",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d534963-f4ba-4d6f-a239-554106fc8257",
    "title": "Converting XMR to MON exchange calculation",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5687936-2fa1-447c-b5ad-62b580cf6a67",
    "title": "Moving subscription off iOS",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "12ddbf4a-fc3d-4219-a2ba-204d98f93c25",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4cd68ad1-eb53-4c18-9f1e-ca9bad73e0b3",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3d2ab4c2-af88-421d-87ea-b47dc604f393",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d582355f-75b9-4ee9-8d07-2de679b4a9d8",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6b5c0795-bcf6-49b4-b0f5-edd285bb27a2",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1a94662c-e965-4cd7-be23-3f8b38f59883",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "75e215e2-e13e-4691-8b1e-62ee8671ae74",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ad85d888-7d4d-4224-9263-5bae0fc80635",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "184ec599-05b2-4555-bfd9-3b22ab1c67b8",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d1bcdfb4-1e44-4945-a548-da07cb1e32fa",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "06b9b0ad-2088-4ce3-ab86-293b645f1bc6",
    "title": "A Continuation...",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "a search of its project's files",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "59abf5a1-1a83-4506-be22-08be4a708b4a",
    "title": "A Continuation...",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "a conversation search, one hop from \\"Varenicline availability in Tbilisi Georgia\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dfa97dc2-359a-41a6-9512-e9a1281cb43b",
    "title": "A Continuation...",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Georgia and Miscellaneous and Semantic Reference Theory and Chemistry and Ana's Fiverr Inbox and Turkey and Physics and Number Theory and Nikolai",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "96b135d1-7fd4-48db-a1b5-e114f62aa3f4",
    "title": "A Continuation...",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "a conversation search, one hop from \\"Maxim contact request strategy\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7940f222-d122-473d-a613-9aeee7ac77db",
    "title": "A Continuation...",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Georgia and Miscellaneous and Semantic Reference Theory and Chemistry and Ana's Fiverr Inbox and Turkey and Physics and Number Theory and Nikolai",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "34027dae-1c83-4d49-bf00-2ea72aa00f35",
    "title": "A Continuation...",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Georgia and Miscellaneous and Semantic Reference Theory and Chemistry and Ana's Fiverr Inbox and Turkey and Physics and Number Theory and Nikolai",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac651a50-0027-4826-b0e6-89546fea6662",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4d4c31a6-e8e6-471a-ae74-ce5c7de953a3",
    "title": "A Continuation...",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Georgia and Miscellaneous and Semantic Reference Theory and Chemistry and Ana's Fiverr Inbox and Turkey and Physics and Number Theory and Nikolai",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7335fa17-01b9-485d-bd9e-1fb24b254e73",
    "title": "A Continuation...",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Georgia and Miscellaneous and Semantic Reference Theory and Chemistry and Ana's Fiverr Inbox and Turkey and Physics and Number Theory and Nikolai",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9da752d3-d3dc-420e-bccb-91e0f3cb3238",
    "title": "A Continuation...",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "a conversation search, one hop from \\"KiwiPost payment confusion\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4684293e-36f3-4224-a2cd-e3c8a97383ad",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9d9e0fb-a99c-42bf-8ba2-a826f723fcdd",
    "title": "A Continuation",
    "account": "DNA",
    "projectName": "Grammar",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "61ef76df-4ae1-4661-8fef-9ee285447126",
    "title": "A Continuation...",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Georgia and Miscellaneous and Semantic Reference Theory and Chemistry and Ana's Fiverr Inbox and Turkey and Physics and Number Theory and Nikolai",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0994d83-5045-4ece-96ea-164b5dd0f0b1",
    "title": "Lexeme and word-form distinction in verb conjugation",
    "account": "DNA",
    "projectName": "Grammar",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4c9ad134-5943-4cd8-8147-f3c3fa361a82",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32fd478d-0a60-4c4f-bd30-b9407c3bd0e6",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d505eb2-5b9e-4985-a7e9-f7e3557a3a80",
    "title": "First-time IRS penalty abatement options",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "08725aec-6747-4114-813a-1851bb3cbc65",
    "title": "Switching from Google login to password",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "714974ab-b142-467f-bbb4-b086e803e230",
    "title": "New Resume",
    "account": "DNA",
    "projectName": "Resume",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b113ccf-4ae3-4747-bc5e-52f1480a9117",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7ab7cda3-07fc-49f4-ac70-8a3bdcea2192",
    "title": "Контекст проекта и стиль-гайды",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "8a11194f-a019-44aa-867e-a610fc50a0c2",
    "title": "Remote getaway near Tbilisi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "72baf528-64a3-413d-b905-fb5730a0f9ae",
    "title": "Plants, xenon gas, and NMDA receptors",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dc9000ff-badf-40f6-8273-d88bdfd284e3",
    "title": "Transferring domains between GoDaddy accounts",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "734fbb38-42ea-43a9-814a-d22002905ae8",
    "title": "Chat initialization setup",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "4f4d18fb-8903-4680-853a-8d0875c0a015",
    "title": "Продолжение работы над заметками",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "a287350c-ade4-4f1e-8370-99836fb61cb4",
    "title": "Hannah map",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "92b759ad-dedb-4ff1-9258-8ccfd52ec8bc",
    "title": "Anonymous Telegram numbers with TON",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ec631ac7-b16c-421e-bcf2-c049db42499f",
    "title": "Checking business name availability for Georgia entrepreneurs",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7231de76-8602-4cc3-9196-26dd84fbd6be",
    "title": "Citibank address verification requirement",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8187c856-2803-4785-969f-3b5eebf21431",
    "title": "Письмо адвокатам о платежах и контактах",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "eef74580-c241-4927-9179-2335ef1d237b",
    "title": "Switching primary domain in Google Workspace",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d0cd6b29-6cc1-4a53-a6d2-040901235e18",
    "title": "Заказ на карты марафонов",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c17d7faa-52c5-47ce-9c0f-705a6745b630",
    "title": "Converting shared conversation to document",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "586e07a1-a07f-40cb-ae50-8e98eed662a4",
    "title": "Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology",
    "account": "DNA",
    "projectName": "The Hard Problem",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac1a0805-52a6-4c59-9b77-b921540673e7",
    "title": "Marie_Siettle",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "175247fd-2462-4fe8-ba5a-4d185ab955f2",
    "title": "Stefanie",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "f1c2c4e8-c0af-403b-838d-fc3ab4b087a8",
    "title": "Поиск магазинов с готовой едой в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ef496e28-dae5-4f4c-bc08-34afb86afcfc",
    "title": "Перевод сообщения о повышении цен в школе",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "39fad1f0-6fa8-4da6-b710-2dc5c6a61259",
    "title": "Inheritance notation and syntax evolution",
    "account": "DNA",
    "evidence": "none: a search of its project's files said Semantic Reference Theory, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7298cc94-c9f3-48a7-a278-79eae6608075",
    "title": "Categorizing monthly expenses from bank statements",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4ef023d-2c16-43dc-a9e3-2b2972163e0d",
    "title": "Buying Telegram usernames on Fragment",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "981e2703-eb88-4990-89c5-c42f4ea9d03e",
    "title": "Смена почты в Telegram",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9854c96a-14b2-4301-8b56-d30a71b9f4e0",
    "title": "Unifying SRT axioms with symbolization",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cc78631a-e596-440c-8c37-71dd076a79ce",
    "title": "Ursodeoxycholic acid medications in Tbilisi pharmacies",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bed4c3e0-78f7-45d1-a439-5b4c7b5da379",
    "title": "Jodie_Nazaki",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "48dade6c-a759-440e-be0c-afe7f599fbc3",
    "title": "Translation to English",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "58a3d24c-8876-441c-b38b-b476f9288411",
    "title": "Письмо адвокатам о контактах и алиментах",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b49ade36-2d8d-4282-ac6a-b7bfcf637e82",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c70c1ec9-61ba-479d-b3d1-cedd44794eae",
    "title": "LinkedIn для коммерческого иллюстратора",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c091a968-5241-4bbb-91ec-0e88f665418d",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db8acef2-49d6-4253-8672-3c6eee092f6a",
    "title": "Revoking travel bans in Russia",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "70cf0e70-daae-491b-9977-c7b5f1afe5b1",
    "title": "Список вещей для лагеря в Сурами",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3d0f3ab3-8310-47c1-941c-1189565a624b",
    "title": "Claire Law",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "1e12bee5-da62-4b89-8d31-6e36a873faa2",
    "title": "💬 Ana id doing an individual ent…",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1c387d40-6a27-4d7c-b0dc-81ac4ab30704",
    "title": "SRT as a Github Project",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fd694290-f3cc-4fad-a842-a8faf8d97090",
    "title": "anoniemus-Роттердам-лодки",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "14242b5f-f1ea-4bf4-bbca-25c87a46771e",
    "title": "Jesus' 40-day fast and temptation",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7f89c8d2-5911-489e-b5a6-d9cb8eeb673d",
    "title": "Georgia IE residency income threshold",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bba39ef6-a105-4beb-a580-c00c45f67c2d",
    "title": "Identifying a ladybug pupa on a leaf",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a25923ae-84d0-46bb-aea7-fe79d8cfcc47",
    "title": "Translation request",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "487c612d-9c75-4c86-9388-2fce8996183e",
    "title": "Russian military conscription and coercion mechanisms",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64851304-af47-4f5d-ab80-154c1345915e",
    "title": "Помощь с просмотром файла",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3e5346a6-24d1-4e54-91df-9b719efcbdbd",
    "title": "Good Morning!",
    "account": "DNA",
    "projectName": "Eirian",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "50f9b00a-6b8e-4f63-89af-4e37b944833e",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5663772f-446e-4b69-a98a-4f36758fffff",
    "title": "Sarah Boston maraphon map",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "41ee9869-0b3f-46c6-a9e5-424c48e41536",
    "title": "Georgian Payoneer Help",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "937e4f73-405a-4b52-b1e8-c6774745c1f0",
    "title": "Помощь с опросом Fiverr",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bdc78133-21e0-4712-92ae-7cf26f68c85b",
    "title": "OK",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7d901190-5975-43fc-a5c8-61c08a106829",
    "title": "Smoke test confirmation",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "212ee355-a347-496a-906a-5a113a583752",
    "title": "P = NP: arguments, barriers, and cryptographic implications",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d254348-6354-4822-b931-12601d1c95e2",
    "title": "P = NP: arguments, barriers, and implications",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0158b7fd-814b-4f11-bd7e-6e01fe844a86",
    "title": "P versus NP problem explained",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1f21026e-1a19-4ed9-bf31-4ba623c365a0",
    "title": "Iterative Fibonacci function in Python",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ced49bf9-a822-4a00-a5f9-8fddbba08a74",
    "title": "SpaceX valuation trajectory and funding milestones",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1c383188-f3e4-47ac-8129-c1e7fcb00f1d",
    "title": "SpaceX valuation trajectory and funding milestones",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8e52939d-b7d5-45a4-bb07-399d785968a8",
    "title": "Is P equal to NP?",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "329a8ccf-685c-4220-a66f-116bddb7e70c",
    "title": "Arguments for and against P ≠ NP",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8bef3449-2aee-4ef1-a636-1b80ebcbb103",
    "title": "Why the sky is blue and sunsets are red",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cb0ac65a-0340-4c45-99c5-050096044952",
    "title": "Ana's Batumi Expences",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1acaaf0e-c99d-4ecf-af77-b742311a0e5c",
    "title": "Understanding a tax adjustment notice",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1d0ed292-6313-4e79-a2e1-81ec76ffd2e6",
    "title": "Specifying SRT",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0954e165-d48b-4f6a-b1a3-3c435de3bce7",
    "title": "Simplifying architecture explanation for the team",
    "account": "DNA",
    "projectName": "Chemistry",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9ee0d598-d1c8-44c0-a823-f6e0a4081f93",
    "title": "Claude Code weekly limit and credit usage",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5fe12616-a684-4c42-a8ec-b2e98949e819",
    "title": "Claude Code weekly limit and credit usage",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "616b1f61-bac6-4cd6-bb01-53c65fda9b09",
    "title": "Prime numbers greater than 100",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7d62fde9-c05b-473f-9c49-554aaf6a79e8",
    "title": "Eiffel Tower completion date",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2baa9498-9e6a-4fc9-8bec-40911821b83e",
    "title": "Отказ в регистрации детей по месту пребывания",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9ec9ae3a-6b77-4076-9a60-beece4beb82b",
    "title": "Lulish project",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "7c357b9a-828a-434e-b67f-f46dd256b1fc",
    "title": "Frustration with AI reasoning and communication gaps",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "68eec3e1-f0c3-47ea-9820-d0307b558d6e",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c5181b3b-90a0-485b-bde5-832529c35631",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5b94a22e-d048-481a-abfe-53dcc5fe7f06",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "95603f77-6b96-4758-8a56-acde52a4a3f7",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9581e989-609b-4739-ab94-55fe44cf9736",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0897a71d-8af6-4791-8adc-1f1d5a9c7fef",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "02835ba9-ddf0-4bb1-9d6a-5a5d69b3f58d",
    "title": "Maintaining bidirectional documentation-code links at scale",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ec39ed14-0e31-4c0c-bfe1-670aea639f17",
    "title": "",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "a conversation search, one hop from \\"Amazon package forwarding to Georgia\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "82a7a716-3e67-48ac-88c9-b24e0b502d64",
    "title": "Уточнение состава капсул Ронидазола в аптеке",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6fab7ec4-e6af-4efb-8b32-02cc61663a19",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9facbd5d-bc5f-4df5-a22e-eef84802271f",
    "title": "Test",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f64ef1cd-8e3e-436c-9690-d5dd132c15f7",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ead0c815-5db6-476f-9206-620b52155d20",
    "title": "Claude > Miscellaneous",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f0c6f6c6-561d-450c-963b-31ee42278083",
    "title": "Binding problem and distributed system coordination",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a6156153-8352-4e6a-bcb2-bc7ebb5571a7",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "10d63755-2147-4a8c-a5cd-7bf5d45179ac",
    "title": "Category theory models for self-modifying software",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9b892575-21c1-400b-87e7-4dc901b6dd33",
    "title": "Graph databases and recursive hierarchies",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3e5144e3-237e-4c32-b29a-ebc07c621e7c",
    "title": "Self-referential knowledge in graph databases",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c15275be-e6cb-48af-aef9-6e120e629240",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7fa923e8-3239-4ed5-ab94-dada9f658781",
    "title": "SpaceX IPO analysis and market reaction",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c581089-d3e2-42f7-8e54-08a00a8ee595",
    "title": "Reconnecting with Jake on hallucinogen research opportunity",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "660ea595-a88d-4aac-bd60-ce733b4aab41",
    "title": "Consciousness analogy to Gödel, Escher, Bach",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ab7b46a-bcf7-4b51-b5df-bfedc3927a23",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8dd51463-d9e0-4fee-95f2-0bcacc51f7d6",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "916fea88-d0bd-4b2d-86ce-e6687bf6c6c2",
    "title": "Self-referential systems and fixed-point theorems",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c2a567f-edd9-438b-9b5b-f1a92ff44f2f",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a1ef1980-259f-400b-b6fc-dc881bc4130d",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3bc9029a-de2c-49af-9eaa-1dc3c1cb1f25",
    "title": "Connecting to MSIX Electron app via connectOverCDP",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bc4b49a3-d88a-4d68-b488-0a1f2b630349",
    "title": "Playwright support for Electron apps in 2026",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9d3e004-e85a-4faf-9561-303c9c5c4f0a",
    "title": "MCP vs A2A protocol differences",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3ff758ca-c6b1-4073-bfe2-443587123426",
    "title": "Invoke-CommandInDesktopPackage and MSIX package identity",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "29c03f09-8eea-4e27-a18e-d1db43d17a5f",
    "title": "Enabling Chrome DevTools Protocol on running Electron MSIX apps",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db784860-6dc2-4ec2-abf7-4d7eda239fed",
    "title": "Playwright with MSIX-packaged Electron apps on Windows 11",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2b627244-6bd0-4d54-90d5-5912f81a3f4c",
    "title": "Windows desktop automation stack for Electron apps",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6897a5ae-4c6e-4061-a638-1ec2f78e2bfd",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ce32c1e6-a811-4996-8e5e-5ac322e5daf7",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "afcda8cf-1ed1-46e4-afa2-03e49dadaabb",
    "title": "Windows desktop automation stack for Electron apps",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ebc891af-1995-4b8c-a330-d582b372a997",
    "title": "Rebuilding Windows desktop automation stack for Claude",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a0bc19de-874a-43ed-93ac-05e5185fe6e5",
    "title": "AI automation frameworks for Windows beyond MCP",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "46768570-f876-4876-962c-8f54bfe93b82",
    "title": "Watching Harry Potter with Russian dubbing and English subtitles",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a504dc68-a990-438f-a59a-9a04c4972fc2",
    "title": "Feferman's extensions of Turing's doctoral work",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2daed05b-a8b0-41c7-9488-69cd070d990e",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "64653527-5ca7-434c-ba2a-7cc35a4f6bef",
    "title": "Semantic Primes",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8aa11284-32eb-4a30-9df5-e3319db9b8a3",
    "title": "💬 Can you look up the research o…",
    "account": "DNA",
    "projectName": "Physics",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "002fae02-94a2-4184-8750-7a71c4cb10d8",
    "title": "Ontic Structural Realism",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "a conversation search, one hop from \\"Unifying SRT axioms with symbolization\\"",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b54b751-db5f-4d54-93ce-a1bf46277ba9",
    "title": "Ontic Structural Realism",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Semantic Reference Theory and Physics",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "14b5bc46-21e3-4a34-8f1a-d51fae9ecc63",
    "title": "American grocery options in Saburtalo Tbilisi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b9f4497c-be00-49ca-9db3-a722810b27c2",
    "title": "Летняя погода в Батуми",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "be832ad5-18e5-46d9-9d0e-d89774a29ee9",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "afd46f5f-0a89-4ab6-98c8-98aebfff0e90",
    "title": "Representation & the Part - Whole Dichotomy",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a264cda3-5f4a-4d71-8de5-2b12117afb27",
    "title": "Судебный иск о разделе имущества как рычаг давления",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "829cb174-498f-41f6-bc17-0855eba1a5c1",
    "title": "Administering cat medications as whole capsules",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c01d473e-38c7-4921-97b7-d493db512d69",
    "title": "Борьба с тараканами в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1d23a9a9-1b2f-4654-ac1c-d282138ac124",
    "title": "Airbnb host refund authority and options",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9d39ab4f-5cdb-483b-bb0b-1c88931570e4",
    "title": "Illustrator Study",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "7bd1f6ee-dd6e-4eb9-94e3-f663a0aff613",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9b7b71bf-fd44-47df-a3f0-c1c09c3937ae",
    "title": "giulia_t1",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "e566233e-371e-4aa4-9865-bfb45bee35b8",
    "title": "Поиск аналога Ярины в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "75d64146-06c9-46bb-a2e7-dbed1e34b350",
    "title": "💬 Nature published this blurb. I…",
    "account": "DNA",
    "projectName": "Physics",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3f4c36ba-8528-4a9b-8019-4d1c92a38dbe",
    "title": "Мюзикл American Idiot от Green Day",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "6e0a50d4-6e6b-4ab0-9a22-324da0c2110d",
    "title": "Verifying Anthropic's latest AI model release",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9c97f9dd-64d9-48e3-9465-d9972375b9f6",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cab4e803-6c4b-4883-a112-8079e586bb4a",
    "title": "Greeting Claude",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "35f8b8d3-0ace-40bc-975c-c139c5584e4e",
    "title": "Batumi Summer",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "081249a9-7ad3-4cfa-b2cf-731a31ad4cfd",
    "title": "Day trips from Kvariati within an hour",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6ab5f31c-86a3-468c-98b5-172eda1ce93d",
    "title": "VAT registration and tax filing for new IE",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "21151849-ca8e-4f93-a6e3-1deeeeacdddd",
    "title": "Translation request",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "25ed1262-c179-44c6-8f14-3967556e3c02",
    "title": "Translating Georgian parking sign",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cdf3ae0c-fd8b-435d-9311-458183585137",
    "title": "Eugene Hutz's gypsy heritage authenticity",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e5412285-9e15-4dc4-9187-b79c980b1c6a",
    "title": "Vacation towns near Batumi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "baa9281b-23ae-41bb-ba68-2c6430a190ba",
    "title": "Путешествие из Тбилиси в Батуми",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9e6c3434-0c7b-4009-bd5f-cf797649bc6a",
    "title": "Rescheduling FedEx delivery to Tbilisi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3d24e04-8949-4ccf-a1c5-376b8710e817",
    "title": "SRT Axioms & Specialization",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8b957fb0-5d9f-47ea-a49e-b2b4b9b2199c",
    "title": "MTONGA",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a4e6d89e-e8c1-43c4-a04f-a48c91f9382c",
    "title": "TON and TONX 17% decline: beta vs idiosyncratic drivers",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "35a0e705-8353-4359-99b4-300ae2437d92",
    "title": "Collatz via Godel",
    "account": "DNA",
    "projectName": "Number Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bb88f52a-a77c-4d79-b93f-5098f705f622",
    "title": "Заказ Fiverr Pro",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "fd1fb92b-6083-4177-baa0-88e010c96d6a",
    "title": "Опрос Fiverr",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "5c933de0-223b-4ba4-964d-f9fa58b6cf19",
    "title": "Quetiapine-induced hallucinations and medication interactions",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dfceb666-b8d6-473b-8bcd-d8913edf7370",
    "title": "Georgian colleague's name and career background",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2e12b789-2d44-4903-bc42-294fdba5e75f",
    "title": "Нейровизуализация и премия Kuhl-Lassen Award",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "135a238a-90f8-409b-87ae-20e2946b33e1",
    "title": "Поездка на грузинском поезде с детьми",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8decdfd4-b3a8-46a1-84d1-cf3e29837391",
    "title": "Продажа железа на сервере RedMain",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b9f21050-f71a-40c3-9aaa-8a698b3f19b6",
    "title": "Adderall legal status in Georgia",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0a85e5b-d6f0-4af0-9c2e-674e1a86fd31",
    "title": "Яндекс курьер между городами Грузии",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "696e49ec-f8d9-4074-95ca-ee4346a44b87",
    "title": "Анализ тренда доходов русскоязычных стокеров",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "778adfcb-13cb-409e-9797-2652f4b37c9d",
    "title": "Развлечения в Батуми для детей",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ae37df8c-1907-4f0c-a6e6-dfdc5208cadd",
    "title": "Trump's China election data breach claims",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "13991879-64b1-4e1b-a912-2db550bc3619",
    "title": "Монетизация творчества и доходные стратегии",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8dbb8e2b-d4c8-413e-aba0-45b382969754",
    "title": "The Semantics of Books",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "22eb8ec5-6395-44f3-a4c0-a5187eca8764",
    "title": "Безопасность кодов Brawl Stars из телеграма",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bd31082b-2ddf-4151-a864-70d22985f04c",
    "title": "Identifying success through failure mode analysis",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "757a0279-a445-4622-a8cf-3d8e4f623ce8",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a2285675-20fb-4a11-9091-592eb47aaaf9",
    "title": "Banach-Tarski and the axiom of choice",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d97f42b0-691d-43a1-8f77-e78720dd3e84",
    "title": "💬 OK, I’m using KiwiPost which w…",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d5d0756e-8e7d-4602-87ec-08e4f9512379",
    "title": "TON and GRAM ecosystem updates",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1cc3e6e3-75dc-4da2-b6d1-c18052da3cfe",
    "title": "Inexplicable Phenomena",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1ac9e811-1b0f-4195-b9c0-ad5bc89ecc9a",
    "title": "Воспроизведение фильма с USB на Samsung",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "76140f14-cd40-40d2-b0c4-2ec54010ce1b",
    "title": "Playing movies on Philips TV from flash drive or computer",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3a52eaf-e63f-416b-92a6-75995d00d920",
    "title": "Открытие люка в Jeep Grand Cherokee",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4081aed6-236b-4593-8e58-75559a3bfe95",
    "title": "Русский персонаж в фильме \\"Opener Gamer\\"",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "392e897c-1a02-4cb0-9f1b-b0899b583a2c",
    "title": "Pentagon UFO footage six-sided object analysis",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9273e02a-36b9-4d27-8783-ea12d2552b85",
    "title": "Day trips from Batumi for kids",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5d219fb7-e4a1-44dc-b28a-184ee871c4f3",
    "title": "Пиллер для кошки в Батуми",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "db22b5df-725e-482f-8c6d-87274196c966",
    "title": "Аудиокниги на iPhone и Spotify",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2752645e-028f-4cb4-91e1-696fb3f51de8",
    "title": "Аренда автомобиля в Грузии",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bd886a96-24cc-48b5-a156-0bed7718fcbe",
    "title": "Hiring a nanny in Tbilisi for two kids",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "de72cc04-ebca-4412-863b-e9905f9571f1",
    "title": "Claude's reflection on article",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "59ee329e-db82-403e-bbc3-9e3af4dfaf20",
    "title": "Project related to Russia",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db4264f5-20bd-4354-8e79-63773f0c38d4",
    "title": "Abobe Ai Content",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "b7263390-440b-434d-bc80-da38ff00767f",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "21cbc3b6-81e6-4eaa-980f-0a6716dda1f6",
    "title": "AI consciousness and subjective experience uncertainty",
    "account": "DNA",
    "projectName": "Seren",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2d6f831a-0e77-4168-a65a-d2b94af96bf8",
    "title": "Страны для россиян без загранпаспорта",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "52ae6d4a-4dcb-4d8e-965d-fe5277e19145",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "efc4cc99-597d-41cf-b088-5173bed4efe8",
    "title": "Russian enforcement proceedings document translation",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3700de01-3363-4c89-b56e-44f4f21e3a07",
    "title": "Alimony",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e0fde00f-db31-4621-91e9-fdfa223ec272",
    "title": "Taxes Georgia",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ba2f5a90-9d10-419f-ba60-a412fad51ae2",
    "title": "AI article refinement for WDM print design",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "c28f305e-66df-4a76-a54f-6e0e86598803",
    "title": "Патологические состояния беременности для иллюстрации",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d85a1d1d-58cd-4d29-8848-9d9720716b1d",
    "title": "Анализ востребованных тем на микростоках",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "75a79e9d-f1d0-42e0-a48b-320e5765c092",
    "title": "💬 Ana talks about very personal…",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1ddd9f0a-6cae-4119-ab76-8206e1f03f87",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1b994e1b-5560-4452-959b-789583d6c5a3",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ed289c08-189e-41bc-8f27-b9e4242cc515",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "857c0398-0386-43b2-83d8-a301cc6af1b8",
    "title": "Domi payment",
    "account": "DNA",
    "evidence": "none: a read of its project's memory said Ana's Fiverr Inbox, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1dc25455-404b-4b2f-b20b-9ecf45eec35d",
    "title": "💬 I need you to do some quick re…",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1152bae6-de40-4681-8830-5531ae3f1ac9",
    "title": "Relationships & Inheriance",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1b96ee47-209e-467f-9847-27b5bf7aff36",
    "title": "Cicadas in the country of Georgia",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "661cf8c0-03e0-4ea3-89f1-33dda20c6f01",
    "title": "Distinguishing type, category, and kind in English",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f1e2d5eb-fb5c-4faa-93f8-3164822a3747",
    "title": "Recovery timeline after lateral calcaneal osteotomy",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f01ff4c2-35a3-44cc-9841-f176cadf0ccd",
    "title": "Оформление заказа с документами на латинице",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "699af5d7-3add-478e-949a-0d2db565a168",
    "title": "Ремонт сломанной полки в съемной квартире",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c16075f0-7088-44bc-9cee-b98e168aa688",
    "title": "Why insects have a maximum size limit",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "34b037fb-fbcc-434c-99a8-9949d367c929",
    "title": "Bitcoin's decline despite institutional adoption",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db11c101-6991-4aa6-bf9d-da1b6ddd6799",
    "title": "Сравнение цен Ронидазола в аптеке",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8dda474d-c5e3-41fe-af32-00d56f2ffe53",
    "title": "English-speaking bipolar support groups in Tbilisi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1f66d32d-7a02-4ba5-8859-de141cb9ca44",
    "title": "Semi-synthetic organisms with unnatural base pairs",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "62c5a076-f7e2-4a20-be5f-c74bfab42f55",
    "title": "Bengal cat's giardia and tritrichomonas co-infection treatment",
    "account": "DNA",
    "projectName": "Turkey",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "03062cab-988a-49d1-9022-bb84cdb3726f",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4427f2d6-145a-485f-bcfb-ef8e3e6e8319",
    "title": "jen_lutek",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "769751fe-1870-45c7-8643-16230c110f69",
    "title": "Monad Labs tokenomics and valuation problems",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a8e9cd85-7872-4a6b-93c8-03abb383506d",
    "title": "X Money's US launch and financial competition",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d51cc892-750b-4c1a-acc2-a0bdd4c79f49",
    "title": "Accountant for solo entrepreneur in Georgia",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1e47a921-4018-40cd-b265-8ba5346340b1",
    "title": "Rayan",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "eea1818a-96c7-4579-a24c-6f34df7c5435",
    "title": "Оптимизация рабочего процесса и ответов клиентам",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "d8c89070-320b-4380-9735-67842feafe90",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8032960f-1772-4d2e-a6b1-530407581078",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7773f67f-90c8-418f-b7e0-61799cea228e",
    "title": "Десмонд и Сиара",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "b5de0287-97de-4bdd-b843-d5eacce988a6",
    "title": "Cathy > Libraries",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3261c87b-72bf-440c-84b0-820477a7a59b",
    "title": "Образование в American School of Батуми для русскоязычных детей",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "22e3b5a5-44ee-40c9-9d7f-e6cabb9d7192",
    "title": "Самостоятельная чистка кондиционера",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "49b32234-bef5-4fa3-b7a7-e88154775eef",
    "title": "Semantic reference theory foundations and philosophical conundrum",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0f772d9c-8b90-4995-b6f5-d9f1c7eba21e",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0103612b-4c54-43eb-9613-6f4a5b5a15fe",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fbc45c8e-bdd7-4941-ab5e-ae7b2c5cfac7",
    "title": "Library semantics in SRT",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cba4961f-4f93-41f3-af26-2c08ba923d23",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0db0ae88-bcaf-440f-970f-40e2a79cec4d",
    "title": "Amazon package forwarding to Georgia",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f05b56bf-16b1-4425-9a83-3adf664ce9f7",
    "title": "Заверенная копия паспорта в Грузии",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "559e5097-3f07-47b8-9376-8ffb411dee02",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "99948077-d37a-4f30-92bf-6383ba619c5a",
    "title": "Nancy > Visualization",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ab2d6af5-980b-4c92-a210-97b6305798fb",
    "title": "Fiverr feature",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "dba01856-cd05-4057-b657-4f163ccb35b2",
    "title": "Stocks placenta accreta",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "0d8830ea-32ca-42f3-a73b-170aad0aae09",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a4816e75-7aa4-42f3-a6e1-1f3524eae3d3",
    "title": "Nancy > Neuroscience",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c207b4c8-bb24-4350-9e9e-d86a5210fc33",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ed6dceca-0aa3-4193-ae8a-7998a5c0f465",
    "title": "Local vs web Claude in VSCode",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "7e359679-59b5-425c-9091-562d5e974c08",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32d26d91-ed4c-449c-8ba7-d0ead3e162ea",
    "title": "Англоязычные сообщества в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f21e3ed3-e796-4b98-8add-abf1e1a66db9",
    "title": "Arthur > Team",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "401768b2-63fd-4fb9-85db-f7fc1517cd5c",
    "title": "Claude > Programming",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f8c40c37-6036-4962-8a37-2db1ec129538",
    "title": "Claude > Philosophy",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4995a25c-58c0-413f-9403-2a833baac83a",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c679da1c-6a67-4f82-93b9-c650c149cfbc",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "6ccb1849-3438-448d-8171-337be9c0720c",
    "title": "Rust ownership",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bd2ac0e7-3694-47e3-8936-4dee41102aaf",
    "title": "Discriminated unions vs class hierarchies in TypeScript",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0b2dc812-b7d5-4a5f-890d-715ad9af0e7d",
    "title": "Agent memory architectures",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d1d30612-224b-4753-8cd4-cb785d5c1d82",
    "title": "Driver pipeline smoke test",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "551df5ce-aba8-47bf-abab-ee868450c80f",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "16a0d321-869e-49f1-8940-79b932c2c274",
    "title": "Обезболивающее для спины после дивана",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "b1a45520-8e89-42e5-a7e4-2b1600a19e05",
    "title": "Identifying a tree species in Georgia",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e83d8b0e-db4a-45d4-acb9-396ce3861595",
    "title": "Hydroxyzine dosing for antipsychotic side effects",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "616d8834-ca5b-46b3-9654-02b43da34302",
    "title": "Semantics of the name Seren",
    "account": "DNA",
    "projectName": "Seren",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "66716d31-1073-485a-ab27-0d3bbc6144b3",
    "title": "Грузинский для аптеки",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1dba50eb-2fc3-435e-aa67-a306e688b2ce",
    "title": "Glucose substitute for veterinary antibiotic injection",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a82bdcbd-d07c-45ee-af37-d235180c1716",
    "title": "Multilingual responses on injection safety",
    "account": "DNA",
    "evidence": "none",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "862b37a5-4ca6-4ccd-ba87-723c17fe07d8",
    "title": "Различия между бандажами по размерам",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "70ba4065-6fcc-4fc8-b8d2-37fb82f2f749",
    "title": "Credit card balance discrepancy after payoff",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "403a87b0-0209-4165-b2cd-d07276db2c20",
    "title": "Возмещение расходов на эндокринолога через Ardi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "979027d4-781f-4033-9339-b4550212e437",
    "title": "Travel arbitrage opportunities between Tbilisi, London, and New York",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e41d598b-6e06-4610-a6f2-aafdfe875310",
    "title": "Поиск вакансий на LinkedIn для новичков",
    "account": "DNA",
    "projectName": "Ana's Career",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Career",
    "byHand": false
  },
  {
    "conversationId": "5d09155f-1c21-42f6-8307-d0cc13711b1e",
    "title": "Метформин 500 с минимальным риском диареи",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "343b4e5c-284e-47cc-b6b2-feeefb262b79",
    "title": "Проблемы с верификацией LinkedIn",
    "account": "DNA",
    "projectName": "Ana's Career",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Career",
    "byHand": false
  },
  {
    "conversationId": "9d4749f2-ea4a-48ae-bceb-97b6c9e7057d",
    "title": "Анализ геометрического flat-вектора в стиле mid-century modern",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "210d373e-5d4a-4078-aa83-bf209c883756",
    "title": "Снижение комиссий Payoneer при получении платежей",
    "account": "DNA",
    "projectName": "Ana's Career",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Career",
    "byHand": false
  },
  {
    "conversationId": "9e4a07c8-94cb-424f-89d0-9fcd4dda8628",
    "title": "Анализ неиспользуемого LinkedIn аккаунта",
    "account": "DNA",
    "projectName": "Ana's Career",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Career",
    "byHand": false
  },
  {
    "conversationId": "9f2a103b-0112-480b-acf7-e3f8bb4e12fc",
    "title": "Ozempic инъекции в клинике Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "242c2548-5a2b-4449-b422-9768402f3954",
    "title": "Collection semantics and canonical representatives",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5a27eb67-9fa8-4826-ae37-499fb090e99e",
    "title": "Прямые переводы из США в долларах",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "cec9dc2d-fe4a-41aa-a4ad-d6c20523ba63",
    "title": "Closed form of the normal distribution integral",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3b684876-b6c6-4a72-96ef-1ca0f82333c9",
    "title": "String length notation and foundational sketch generalization",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5c5077be-b59c-4b37-91e7-3efe10483f04",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e4592a75-03e4-46d5-93bf-4c43cc3f136b",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4108975f-5da2-457e-b410-c7fce649e5f0",
    "title": "Chicken française ingredient sourcing in Tbilisi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "654615eb-55db-4c85-9c3c-6e18df00c3f8",
    "title": "Работа с материалами Дага на английском",
    "account": "DNA",
    "projectName": "Ana's Career",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Career",
    "byHand": false
  },
  {
    "conversationId": "680c6254-c93f-43d1-9ab5-56e6940d7041",
    "title": "MIA Request",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3c33fd09-64e1-4ce6-988c-be4c7ee2ea5d",
    "title": "Metformin XR dosing and maximum dose",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "9c22a884-b93e-49f2-85b3-d202bddfe4d7",
    "title": "Macro drivers behind the crypto spike",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "39e45688-3e30-4e53-8bed-445530fa913b",
    "title": "Поиск летнего лагеря в Тбилиси на август-сентябрь",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "78f11e19-cd04-4b68-9f76-4ee78bc61040",
    "title": "Escrow contract for travel ban removal",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "cda3c1bb-d9a1-4a12-a848-6984c40ed15e",
    "title": "Telegram's hypothetical \\"Telephone\\" product theory",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8d35a007-0988-4f3e-8e73-c9b0f95941ea",
    "title": "Steak & Brisket",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "59691b35-bca4-44f4-aaa1-e307f1a051f9",
    "title": "Swimming pools for kids in Batumi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4a9c1fbc-f5d9-4414-bd9d-48316de2af6e",
    "title": "Смекта при диарее",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "44558158-3387-41f5-9078-6d2619f0cee0",
    "title": "💬 Catch up on recent conversatio…",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3fb767ab-64bf-495a-b1bc-72b224a50856",
    "title": "Налог на профдоход для ИП в Кредо Банке",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7ba88d19-6b6b-4c46-88f0-f9d659b819c5",
    "title": "Аренда инвалидной коляски в Батуми",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "d3435ae4-218b-4e5c-a769-7925488a6cd2",
    "title": "Metformin dosing for antipsychotic weight gain",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2a4b8428-0a8f-4ca0-80c3-f9a2d8e9ddbf",
    "title": "Аналог Артосана среди доступных препаратов",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "535dd119-af9f-4969-862f-ce088f0942bf",
    "title": "Печать документов с Android на Wi-Fi принтер",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bed6d2f9-5240-4cf0-b00a-db69d335a8d5",
    "title": "Family ocean fishing trips in Batumi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "777fc626-a8e7-4c25-b2a7-7ed5a8e2a598",
    "title": "Haircut instructions in Georgian and English",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c205c7db-fccf-43be-9740-df8533df12e1",
    "title": "Пути получения ВНЖ в Грузии для семьи",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f28cd5d1-9cdb-4139-9eaa-ff7dbe954ee7",
    "title": "Поиск работы в ЕС и UK для гражданки РФ",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "925fa49e-b178-4240-b8ed-1116a9c1b4cf",
    "title": "Поиск удалённой работы в Европе с российским гражданством",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "acfb36d1-bc08-4f1b-ab98-aec00bb1a8a6",
    "title": "Арипипразол: что это за лекарство",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5962d97d-1730-4185-9e0f-0aac493fa96f",
    "title": "Finding renamed bots section in Telegram",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b3f63780-c2ca-49b3-86e3-a70a4a95ddfe",
    "title": "Metformin with quetiapine and lamotrigine",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e9d30c6e-d0ef-484b-9e43-f2f67662d5a6",
    "title": "TON browser alternatives and dark web access",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ef449738-1cee-4fbb-bfb3-444bf20377b2",
    "title": "Поиск потерянной посылки Cargo New York - Tbilisi",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ad076543-c222-4665-8068-b32bda60d7a3",
    "title": "Luxury hotels in Tbilisi and pricing",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b77d5696-2c69-47c6-ad1a-00e13be1878f",
    "title": "Поиск товаров в магазинах Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7efc1620-6e3f-4283-9618-8f2bdbbc8032",
    "title": "Покрытие анализов и врачей по полису \\"Витамин С\\"",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3279915a-6a8d-4f3a-9b59-f7010e33e059",
    "title": "Сезонная аллергия в Тбилиси",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dd7f5daa-103a-4032-9915-42f8cdd2f14f",
    "title": "Using a Telegram username on a new account",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8035b9fb-d2a1-416a-b7d6-c0d211ef668b",
    "title": "Dark web marketplace takedowns and attribution stories",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "11c7f367-8f5f-4e0a-b0f4-4cf2b1f831e4",
    "title": "Анализ цен продуктов в интернет-магазинах",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "e77d354e-1640-4737-8c3f-841bd3305435",
    "title": "Finding Saba pharmacy in Tbilisi for foreign medications",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "eef8f474-1487-4b97-9139-c5a160b1d988",
    "title": "Monad unstaking failing in Atomic Wallet",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "79d439db-394f-461e-a04d-ef3c23d84ff6",
    "title": "💬 the price of gram is getting h…",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d1b0fb93-3695-4761-a937-93f783c21d16",
    "title": "Семаглютид при аутоиммунном тиреоидите и гипотиреозе",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3e26816f-2f88-4577-b7a6-231de4639179",
    "title": "How Claude works",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c2e23c88-bef1-4fc1-a867-31ef447e2313",
    "title": "Поиск Rybelsus 7 mg в Тбилиси с минимальной ценой",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ebc10b42-34df-45b2-96db-d9ce178fca76",
    "title": "Old iPhone charger triggering unexpected unlocking",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "bf176414-7eb9-498c-b48f-353f0a402056",
    "title": "Semaglutide for antipsychotic-induced weight gain and diabetes",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3a3a60da-87aa-4d91-b2e7-fb40741b34a9",
    "title": "Оземпик в Грузии: где купить и цена",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4d68e6aa-45ff-4071-b12a-21b35012245a",
    "title": "Buckwheat serving size and calories",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "fea3a58f-c6cf-4758-93fd-0336dc363d6a",
    "title": "Stablecoin architecture origins and Tether's conceptual lineage",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a79636f2-eccb-4af2-b4f4-c443386e7fb3",
    "title": "💬 Being Russian is difficult. My…",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "4ae195ac-b5bb-436b-a6d3-3e5b85e5fe0f",
    "title": "Post-surgery weight loss plan for Georgia",
    "account": "DNA",
    "projectName": "Fitness",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0f536dc6-bbe7-4bb9-b85a-e647f4c17abc",
    "title": "Детский лагерь в Тбилиси с английским или творчеством",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c964c94d-1aae-481e-9ac4-30ed2fa7284e",
    "title": "Продажа иллюстраций на Temu",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3aab67f4-0fb9-4bf5-885e-734862c04c26",
    "title": "Запрос аренды квартиры рядом со школой",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "90a70d38-3458-4f2e-b7a5-64b77bfc47a4",
    "title": "Тремор рук и слабость: возможные причины",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dc9d87b7-a73b-4e32-9da8-cd946c38b0ea",
    "title": "Calcaneal osteotomy screw removal healing",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a2758d30-7c0e-43e9-bee9-eadca14f0abc",
    "title": "Microsoft's earnings surge and AI competition outlook",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "60454157-3788-4a76-beb8-c71aef531023",
    "title": "Varenicline availability in Tbilisi Georgia",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e2ba3953-fe51-46f2-8c78-91ed23225cc3",
    "title": "Investing around Ukraine war outcomes",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2ebab90b-6bd5-4cec-bd20-a833272abbd8",
    "title": "Fiverr's connection to Telegram's Mira AI",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "e247c951-4c74-42c0-a90c-6ec708bcfd68",
    "title": "Бюджет на детей в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "30d86f04-af6d-421b-a39b-aaee23fc689c",
    "title": "MEI and metamer analysis in psychedelic neural responses",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "2fa8f692-876c-4d2b-a872-dd0c5fb5b9ca",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3d953559-6bc2-4eb1-8ae0-ba2b980a603c",
    "title": "Consulting neuroscientist title without PhD",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "df8c5d79-8666-4f20-9ef8-1c49235c96b4",
    "title": "Информация об автобусе",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f8062ed2-3f02-49a1-b71c-71a99ad9361d",
    "title": "Milk interactions with crushed medications",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8c2cbada-4ce0-498c-8919-8c0af34dc3cf",
    "title": "Детские языковые лагеря в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f0908f50-de8d-4e71-af07-5ae8077fff7f",
    "title": "Перевод SMS о доставке посылки",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ed5dadf0-8ed8-44d2-b9ac-e5eeda995b24",
    "title": "Деперсонализация: что это такое",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7da0d678-0ff3-4f84-93d1-f40d8b7865c4",
    "title": "Проект Гонка семьи Либерманов",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2a16443f-6caf-477a-b744-513959e130ae",
    "title": "Проблема с доставкой на сайте фу-фу сквише",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "0f075700-e7db-4109-a7c9-0b71807f94dd",
    "title": "Saburtalo power outage investigation",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dbd16ee0-3985-4765-968e-471c9a67a1a4",
    "title": "Проверка препарата Буманол перед инъекцией",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "a1b2fd15-aeda-4116-b737-f62fadff75f8",
    "title": "Learning SRT syntax and transpiler fundamentals",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "74a7bf5d-42a9-4746-aaa0-c71b70cc4fc1",
    "title": "Correcting memory bias toward disagreement",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "49610747-ccaa-4b6f-a80d-310fc3163bd0",
    "title": "Поиск железнодорожного вокзала в Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4f826b46-f91b-4685-b848-fa21f00aa1dc",
    "title": "Hamilton Morris's education and academic background",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d86b0044-08f1-4748-821d-e32b7c08bf9f",
    "title": "Продажа самодельных карт онлайн",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "2e9f29e6-53a4-46a8-86d8-cc20591771db",
    "title": "Получение заказа из Тему при отъезде",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c90a25d8-138c-4a89-a16a-dd85f304fe47",
    "title": "Claude Code Portfolio",
    "account": "DNA",
    "projectName": "Passive Income",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5730d0e7-14c8-41e1-8d89-eef997fe8a6f",
    "title": "Tesla roadster and robots",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "de3442a6-6179-448e-80b3-cd00fc5e27c6",
    "title": "Dominic Harbor & Bays maps",
    "account": "DNA",
    "evidence": "none: a read of its project's memory said Ana's Fiverr Inbox, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1463dc31-5a8a-4b30-8a93-02484af5db96",
    "title": "Оплата налога ИП 1%",
    "account": "DNA",
    "evidence": "none: a read of its project's memory said Georgia, vetoed since the capture visited the project and did not list it",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "1808cb01-821c-4c10-9b05-28b18047bcd3",
    "title": "Загранпаспорт при запрете на выезд",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "7250c404-f0d3-40ac-a39f-cf521b31b364",
    "title": "Свидетельства о рождении и гражданство",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3941fb3e-9b6a-4fef-98a0-4a0e7918437d",
    "title": "Problem summary request",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8431217e-f19a-4b7a-bf86-a6033125ef08",
    "title": "Сообщение клиенту о доставке",
    "account": "DNA",
    "projectName": "Ana's Fiverr Inbox",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Fiverr Inbox",
    "byHand": false
  },
  {
    "conversationId": "475574f6-cfd1-4c63-a591-f1bef0e06531",
    "title": "Changing flight date",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a376626b-25b0-483a-8728-fe244a119032",
    "title": "Семейное образование и регистрация детей",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "c54437a5-8717-4d0b-b5b7-ba3616c5018c",
    "title": "Банк Дом РФ доступ",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "90c8f3e3-b858-4140-8ae7-c9b23c5eeb23",
    "title": "Инфовйс для Бейлор университета",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5f2a4bb3-dd04-4f4e-9381-91530c38846e",
    "title": "Госуслуги изменения",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ef6b1684-cd90-4a93-b4bb-acafbf661f48",
    "title": "Стратегия переговоров с отцом детей",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "ece32584-f62d-462a-82f7-2234fe2482a8",
    "title": "Контакты детей и безопасность",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bbb794ff-8df3-402c-a02f-cae3aa07bcd2",
    "title": "Атаки на дата-центры и последствия",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "a2e092c0-44a4-442a-b821-1d21d738cc89",
    "title": "Computational epistemology and consciousness",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "890d0f4a-f0b5-40e8-9dee-88a793a65253",
    "title": "MoC Speakers",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "dbba812c-7c27-4f75-b565-1f2b46965bac",
    "title": "MoC Schedule",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a07786e2-334b-46d0-9aa2-95a60218117f",
    "title": "Wake up Copenhagen hotel directions",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "32244291-fa68-4054-a51f-1e234697a5c6",
    "title": "Magti roaming data Copenhagen",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a9f19c04-b087-4db5-9251-30920e50aa81",
    "title": "KiwiPost payment confusion",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "db0b30ef-bae1-42d9-a1f3-64ec08901450",
    "title": "Penelope's symptoms and treatment",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "5d7f1512-2371-4e4e-aba0-036d6402de86",
    "title": "Russian custody enforcement precedent",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "42afc6bd-f70c-4df8-86c4-231791920a8c",
    "title": "Maxim contact request strategy",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "12d855b8-e508-406a-8162-5c93f327ac93",
    "title": "Konsul Prime",
    "account": "DNA",
    "evidence": "none: a read of its project's memory said Russia, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "8cc8ee76-8982-4076-a4d9-9599df745bf9",
    "title": "Ветеринарные аптеки Тбилиси",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4cd85995-b066-4ea1-9a7c-ec43a96ae80c",
    "title": "Safety training quiz",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "313d1090-0f21-4c56-aedb-a98e4f918054",
    "title": "Russia plague news manipulation",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ad583190-616e-4ab4-b837-8cb039b998ce",
    "title": "Aikido payment account issue",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "38078bd1-a8bd-467d-bf0e-6b4292e13469",
    "title": "Биометрический паспорт в Тбилиси",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "bf83bbe0-538e-4d29-b64a-7f9ead5b68aa",
    "title": "Post-surgery heel pain and recovery",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "603b2e13-2481-4bc5-9721-acc5bd9df64d",
    "title": "МВД travel ban request",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "097bf0d0-c377-4f2d-b91b-4494c42d6530",
    "title": "Psychologist cost and services",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1fb1ed3c-9661-473f-8434-bdc23ae2924e",
    "title": "Testosterone в аптеках Грузии",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "137b33d3-35a2-4b6e-8b8b-503b1f87a8c2",
    "title": "Trump superintelligence luncheon seating",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "76306aa8-8143-418c-b83b-f000d28fe4a5",
    "title": "Список кружков школы",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5f432a8f-0b00-47d2-9a41-59a743253a9e",
    "title": "Kiwi post Amazon invoice",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "34055d3f-e3b1-4dd4-a675-e793f203de51",
    "title": "Photons as fictional constructs",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "b6395c0d-4fa0-4a98-add2-92bbee4d0dc9",
    "title": "Cathy > Programming",
    "account": "DNA",
    "projectName": "Claude",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "621eab6a-e589-44be-8fbf-992e7866fb17",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3edf7541-6fd4-4327-95b3-b48dfaf0f105",
    "title": "Green card через супруга",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "e3b9cce6-4f34-4dc9-9ce6-d0d8ee04650f",
    "title": "Разрешение на работу для ИП",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4cfb93f4-65df-43e4-87ed-8a6b941ce5eb",
    "title": "Разрешение на работу для ИП в Грузии",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f1417088-00b5-4830-9e73-cc1d05da4349",
    "title": "Визаран для россиян в Грузии: риски и реальность",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "4fa3765a-1748-4411-8c87-1d4801c8dbd9",
    "title": "Dispatching code to remote Linux workstation",
    "account": "DNA",
    "projectName": "Code",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0d99232e-cdfe-4a11-814e-1bc0f31ece27",
    "title": "Green card options for Russian spouse and stepchildren",
    "account": "DNA",
    "projectName": "Russia",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "0e9fbdd1-33d4-43ea-9bda-fec220244732",
    "title": "The Genesis of Writing",
    "account": "DNA",
    "projectName": "Code",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "3f7e9877-993c-4264-82f4-8ce5120ee8b4",
    "title": "Verifying OpenAI report authenticity",
    "account": "DNA",
    "projectName": "Code",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1f62d14e-dda2-4243-b9bd-8e33f54decd4",
    "title": "Neural encoding during hallucinations",
    "account": "DNA",
    "projectName": "Science",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "effbe068-8c73-4d59-9fe7-d9bcef9c042d",
    "title": "Clarity act cryptocurrency bill prospects",
    "account": "DNA",
    "projectName": "Investing",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "30fd650a-1617-48be-8f59-956155ff129c",
    "title": "Подготовка Дага к конференции в Копенгагене",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "16f38e2a-76eb-4406-a661-d2a70ff5d6ca",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "26c4c37a-4136-467f-8271-c3bbdc1c7c36",
    "title": "",
    "account": "DNA",
    "evidence": "none: the capture lists this title in Science and Fitness",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "c0f5ecaf-4115-48a7-ba82-98109aeb4579",
    "title": "The Project",
    "account": "DNA",
    "projectName": "The Hard Problem",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "95d3df52-40ed-448f-934f-93cc6bc32b34",
    "title": "Выбор правильной дозировки Озампика по рецепту",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "8b14b84b-bfa7-4264-af28-ae3974cf3640",
    "title": "Semantics of Representation",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "ac686866-f08a-428d-b73a-c0f329799dcf",
    "title": "Formal abstractions using sketches and SRT",
    "account": "DNA",
    "evidence": "none: a read of its project's memory said Semantic Reference Theory, vetoed since the capture visited the project and did not list it",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "74b415d8-56c3-4991-99c8-365b39068906",
    "title": "Visa requirements for Americans in Indonesia and Malaysia",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "d5c0cf36-a66b-4454-ada5-2b449ef37de4",
    "title": "Semantics of Types & More",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "f5bdbf0f-a201-4242-ab04-dcd0c2dcddd0",
    "title": "Как разобрать люстру для замены лампочки",
    "account": "DNA",
    "evidence": "none",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9530c00f-8bb0-4c15-a61f-d5cc02f2164c",
    "title": "Расчет расходов Кати на одежду",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "995f0ffb-7d34-4c42-a4ae-3bde14d77ae7",
    "title": "Офтальмолог Katie's Ophtalmologist",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "5fdfa75e-e8a0-4dc9-b0e7-f2b9c323b750",
    "title": "Blog: Biology & Etymology, Semantic Homeostasis",
    "account": "DNA",
    "projectName": "Grammar",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "1d72d8d9-0951-455d-90c4-f4db10a6a864",
    "title": "Понимание основ СРТ",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "712407ef-59fc-427d-82f8-452ba078ac3a",
    "title": "School Расчет оплаты питания для двух детей",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "74e7c133-6b0d-4060-993e-ac4719bd0a63",
    "title": "Supinators Письмо производителю супинаторов на грузинском",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "dd209873-406b-44e5-bcc0-b84f66bbc805",
    "title": "Письмо производителю супинаторов на грузинском",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "94a30492-b469-4de7-8a64-da94c86ab85f",
    "title": "Письмо производителю супинаторов на грузинском",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "f0c383f0-1a87-4a04-acdc-f9569073da49",
    "title": "Получение налогового номера для иностранца в Грузии",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "96a7ca7d-2c91-459c-ba56-04119eff9e4f",
    "title": "Перевод английских слов на русский",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3f095881-8d16-4c31-a16f-fa732f715d4a",
    "title": "загранпаспорта старого образца- Dima's passport",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "192e7cfa-d83e-461a-b2e0-bca87e6aa226",
    "title": "Возмещение за отсутствующий товар",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "9059b126-3830-4dbf-b05a-00f4096755cf",
    "title": "Анализ трат за август - Budget August",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "410fec6f-d6cc-4394-8676-86f673a3a83b",
    "title": "Ardi insurance Арди для стоматолога и офтальмолога",
    "account": "DNA",
    "projectName": "Georgia",
    "evidence": "the capture",
    "excluded": true,
    "reason": "a title in Cyrillic",
    "byHand": false
  },
  {
    "conversationId": "3eecc63c-9ff6-4733-a87c-e2d882af6711",
    "title": "Foundations: Types & Properties",
    "account": "DNA",
    "projectName": "Semantic Reference Theory",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  },
  {
    "conversationId": "a7e4a527-9d60-40c2-8764-346846a9a418",
    "title": "Создание профиля на LinkedIn",
    "account": "DNA",
    "projectName": "Ana's Career",
    "evidence": "the capture",
    "excluded": true,
    "reason": "filed under Ana's Career",
    "byHand": false
  },
  {
    "conversationId": "6fe8ad2a-8476-4bde-a595-26c17e8681b4",
    "title": "Understanding jihad and Muslim violence perceptions",
    "account": "DNA",
    "projectName": "Miscellaneous",
    "evidence": "the capture",
    "excluded": false,
    "reason": "",
    "byHand": false
  }
]
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleConversation, sampleMapping, sampleProject } from './3-the-record~samples.ts';
import {
    conversationPairings, pairingsFilePath, readPairings, stackedProjects, writePairings, type Pairing,
} from './4-the-pairing~pairing.ts';

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
const axioms = 'Every referent is held at an instant, and the instant is what a relation is said of; '
    + 'this sentence is long enough that a probe from its middle names the file that holds it.';
const knowledgeChunk = \`Axioms.md\\n\${axioms}\`;
const mappedSrt = sampleMapping(srt, [{ title: 'Semantic Primes', lastMessage: 'Oct 1' }]);
const pairingsOf = (
    conversations: Parameters<typeof conversationPairings>[2],
    projects: Parameters<typeof conversationPairings>[3] = [],
    mapping: Parameters<typeof conversationPairings>[4] = undefined,
    exclusions?: Parameters<typeof conversationPairings>[5],
): Pairing[] => conversationPairings(freshLibrary(), 'DNA', conversations, projects, mapping, exclusions);

// Doug, 2026-10-16: "Look at their code and how it works. Get things in the same way" — the rules are
// dna-library's projects.ts, read from the export and the capture beside it.
describe('the pairing', () => {
    it('pairs a conversation whose title the capture lists once, by the capture, and says its account', () => {
        const [pairing] = pairingsOf([sampleConversation('a', 'Semantic Primes')], [], mappedSrt);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('the capture');
        expect(pairing.account).toBe('DNA');
    });

    it('leaves a title the capture lists in two projects to the evidence, naming both', () => {
        const mapping = sampleMapping(srt, [{ title: 'A Continuation...', lastMessage: 'Oct 1' }]);
        mapping.projects.push({ ...mapping.projects[0], name: 'Seren', id: 'Seren' });
        const [pairing] = pairingsOf([sampleConversation('b', 'A Continuation...')], [], mapping);
        expect(pairing.projectName).toBeUndefined();
        expect(pairing.evidence).toBe(\`none: the capture lists this title in \${srt} and Seren\`);
    });

    it('pairs a conversation whose search of a project\\'s files returned a passage one project holds', () => {
        const projects = [sampleProject(srt, ['Axioms.md'], axioms), sampleProject('Seren', ['Other.md'], 'unrelated')];
        const searched = sampleConversation('c', 'Axioms', [], undefined, { knowledge: [knowledgeChunk] });
        const [pairing] = pairingsOf([searched], projects);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('a search of its project\\'s files');
    });

    it('vetoes a read of a project\\'s memory from a chat the capture visited that project and did not list', () => {
        const mapping = sampleMapping(srt, [{ title: 'Semantic Primes', lastMessage: 'Oct 1' }]);
        const listed = sampleConversation('d', 'Semantic Primes');
        const reader = sampleConversation('e', 'Formal abstractions', [], undefined, { memoryProjects: [srt] });
        const [, pairing] = pairingsOf([listed, reader], [sampleProject(srt, [])], mapping);
        expect(pairing.projectName).toBeUndefined();
        expect(pairing.evidence).toBe('none: a read of its project\\'s memory said Semantic Reference Theory, '
            + 'vetoed since the capture visited the project and did not list it');
    });

    it('places a conversation one search hop from a captured one, and never from a memory label', () => {
        const capturedBefore = { ...mappedSrt, capturedAt: '2026-06-01T00:00:00Z' };
        const captured = sampleConversation('f', 'Semantic Primes', [], undefined, { found: ['g'] });
        const found = sampleConversation('g', 'Found by search');
        const [, byHop] = pairingsOf([captured, found], [sampleProject(srt, [])], capturedBefore);
        expect(byHop.projectName).toBe(srt);
        expect(byHop.evidence).toBe('a conversation search, one hop from "Semantic Primes"');
        const remembered = sampleConversation('h', 'Remembers', [], undefined, { memoryProjects: [srt], found: ['i'] });
        const linked = sampleConversation('i', 'Linked to a memory label');
        const [byMemory, notByHop] = pairingsOf([remembered, linked], [sampleProject(srt, [])]);
        expect(byMemory.projectName).toBe(srt);
        expect(notByHop.projectName).toBeUndefined();
    });

    // Doug, 2026-10-14: "If it has a Russian title, it is not mine. Perhaps we can detect Russian characters and
    // skip those" — the scripts and the projects that are not his are the configuration's to name.
    it('proposes a conversation under a project the configuration excludes, or titled in a script it excludes', () => {
        const mappedAna = sampleMapping("Ana's Universe", [{ title: 'Recursion', lastMessage: 'Oct 1' }]);
        const recursion = sampleConversation('j', 'Recursion');
        const russian = sampleConversation('k', 'Понимание основ');
        const conversations = [recursion, russian, sampleConversation('l', 'Mine')];
        const exclusions = { scripts: ['Cyrillic'], projects: ["Ana's Universe"] };
        const [underAna, cyrillic, mine] = pairingsOf(conversations, [], mappedAna, exclusions);
        expect(underAna.reason).toBe("filed under Ana's Universe");
        expect(cyrillic.reason).toBe('a title in Cyrillic');
        expect(mine.excluded).toBe(false);
        expect(pairingsOf([russian], [], mappedAna)[0].excluded).toBe(false);
    });

    it('keeps a line written by hand over any evidence, and writes nothing to the file itself', () => {
        const library = freshLibrary();
        const byHand: Pairing = {
            conversationId: 'm',
            title: 'Semantic Primes',
            account: 'DNA',
            projectName: 'Mine',
            evidence: 'by hand',
            excluded: false,
            reason: '',
            byHand: true,
        };
        writePairings(library, [byHand]);
        const fileBefore = readFileSync(pairingsFilePath(library), 'utf8');
        const conversations = [sampleConversation('m', 'Semantic Primes'), sampleConversation('n', 'Other')];
        const pairings = conversationPairings(library, 'DNA', conversations, [], mappedSrt);
        expect(pairings[0]).toEqual(byHand);
        expect(readFileSync(pairingsFilePath(library), 'utf8')).toBe(fileBefore);
        expect(readPairings(library)).toEqual([byHand]);
    });
});

// Doug, 2026-10-16: "We consider the new account to be a continuation of that one, with same named projects,
// so they exist on top of each other."
describe('the stack', () => {
    it('makes one project of a name in both accounts, the newer covering the older and the older showing through', () => {
        const older = sampleProject(srt, ['Axioms.md', 'Only Then.md'], 'as it was', 'What the project is for');
        const newer = sampleProject(srt, ['Axioms.md', 'Only Now.md'], 'as it is');
        const [stacked, seren] = stackedProjects([[older], [newer, sampleProject('Seren', [])]]);
        expect(stacked.documents.map(document => \`\${document.name}: \${document.content}\`))
            .toEqual(['Axioms.md: as it is', 'Only Now.md: as it is', 'Only Then.md: as it was']);
        expect(stacked.description).toBe('What the project is for');
        expect(seren.name).toBe('Seren');
    });
});
`})]}),"ThePairing4"),G=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Ledger](/dougs-importer/#the-ledger)"}),t(a,{children:[e(f,{}),"What the importer wrote, kept in a ledger beside each import and keyed by the application's own ids, so that it knows which conversations are already in, which have grown since, which are new, and which I have edited by hand and it must never touch."]}),t(i,{children:[e(r,{children:"A ledger to every import, keyed by the id"}),e(a,{children:"Many conversations are short, and after a few runs it is hard to know which are in. So each import keeps a ledger, one file beside its chapter however often it runs: a line for each conversation brought in, keyed by the application's own id, with the application's own name, the export it was read from, the export's time of last change and its count of messages at the import, when it came in, and the digest of the files written. It holds no name of a book and no folder, since I may rename a conversation, move it or cut it: the same id is said on the conversation's cover and on each of its messages, in an annotation drawn nowhere, and the run finds the book by it wherever it stands. The importer reads the newest export it finds, by the date in its name, so a newer export dropped where the last one lay is the one read, and the ledger says which export each conversation came from. A conversation the ledger does not hold, or whose book is gone, is new, and a run writes it. One whose export now shows a later time or more messages has grown since, and a run writes it again, since nothing of mine is in it. One equal to its line is in, and a run leaves it. And one whose files no longer match their digest has been edited by hand, and a run never touches it unless told to re-import; when such a one has grown since as well, the run says so beside it."}),e(a,{children:"Told to re-import, the run writes an edited book again from the export and keeps every file of it as I had it, where the import overwrote it or no longer writes it, as a plain-text file beside the fresh chapter, named for the chapter and for the file it was, and printed by the chapter in a closing section, each file as I had it, so the bind accounts for it and my edits stand on the page beside the fresh import until I apply them again and strike the file. Its line keeps when the book was re-imported and which files were kept, and every listing says beside the conversation, while any kept file still stands, how many files of my edits wait to be applied; so I always know which conversations were re-imported and what changes I have yet to make, as I asked on 2026-10-14. When I strike a kept file, the next run that writes takes its printing out of the chapter, the section with the last of them, and takes the book as it then stands, my edits applied, as the state its line knows; a bare run says meanwhile that a kept copy was struck. The re-import writes one fresh chapter, as the import does, so a book I have cut into chapters comes back as one chapter with my chapters kept beside it as text, nothing lost and not the shape I cut; the re-import of a cut book is the next thing to design, since many of these will be cut."}),t(a,{children:["The id stands in the book, so what I do to a conversation by hand, cutting it, renaming it, moving it, never loses its line; striking its book from the register makes it new to the next run that takes its project. While the importer is being made it overwrites what it wrote, on a flag said at the run, and removes what it wrote before and no longer writes, my kept edits excepted, since the shape of a book is still being decided on ",e(n,{children:"[its page](/claudes-design/#the-conversations-page)"}),". Once it is done the flag goes, and a conversation once imported is mine: cut into days or sittings, summarized, annotated, by hand."]})]}),e(o,{identifier:"ledger",type:".ts",children:`import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation } from './3-the-record~record.ts';
import type { Appendix } from './7-the-writing~writing.ts';

export type ImportRecord = {
    conversationId: string;
    conversationName?: string;
    name: string;
    bookFolder: string;
    account?: string;
    exportedOn: string;
    updatedAt: string;
    messageCount: number;
    digest: string;
    importedAt: string;
    reimportedAt?: string;
    keptEdits?: string[];
};

export type LedgerEntry = Omit<ImportRecord, 'conversationId' | 'name' | 'bookFolder'>;
export type Ledger = Record<string, LedgerEntry>;
type StandingBook = { bookFolder: string; name: string };

export type Reimport = { reimportedAt: string; keptEdits: string[] };
export type KeptEdit = { fileName: string; appendix: Appendix };

const keptEditForm = /^(.+)~(edited-.+)\\.txt$/u;

export type ImportState = 'new' | 'in' | 'grown' | 'edited';
export type HeldRecord = { record: ImportRecord; path: string };

const originForm = /<Origin>([^<]+)<\\/Origin>/u;
const coverTitleForm = /<Title>\\[\\[ (.*?) \\]\\](?:\\( (.*?) \\))?<\\/Title>/u;
const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', '#123': '{', '#125': '}', '#91': '[', '#93': ']' };

const nameFromForm = (form: string): string =>
    form.replace(/&(amp|lt|gt|#123|#125|#91|#93);/gu, (_, entity: string) => entities[entity]).replace(/\\.(.)/gu, '$1');

export const booksByOrigin = (registerFolder: string): Map<string, StandingBook> => {
    const books = new Map<string, StandingBook>();
    if (!existsSync(registerFolder)) return books;
    for (const folderEntry of readdirSync(registerFolder, { withFileTypes: true })) {
        const coverPath = join(registerFolder, folderEntry.name, '.cover.tsx');
        if (!folderEntry.isDirectory() || !existsSync(coverPath)) continue;
        const coverText = readFileSync(coverPath, 'utf8');
        const origin = originForm.exec(coverText)?.[1];
        const title = coverTitleForm.exec(coverText);
        const key = title?.[2] ?? title?.[1] ?? folderEntry.name;
        if (origin !== undefined) books.set(origin, { bookFolder: folderEntry.name, name: nameFromForm(key) });
    }

    return books;
};

export const readLedger = (path: string): Ledger =>
    existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) as Ledger : {};

export const importRecords = (registerFolder: string, ledgerPaths: string[]): Map<string, HeldRecord> => {
    const books = booksByOrigin(registerFolder);
    const heldRecords = new Map<string, HeldRecord>();
    for (const path of ledgerPaths)
        for (const [conversationId, entry] of Object.entries(readLedger(path))) {
            const book = books.get(conversationId) ?? { bookFolder: '', name: '' };
            heldRecords.set(conversationId, { record: { conversationId, ...book, ...entry }, path });
        }

    return heldRecords;
};

export const writeImportRecord = (path: string, record: ImportRecord): void => {
    const { conversationId, name: _name, bookFolder: _bookFolder, ...entry } = record;
    const ledger = readLedger(path);
    ledger[conversationId] = entry;
    writeFileSync(path, JSON.stringify(ledger, null, 2) + '\\n', 'utf8');
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
    if (record === undefined || record.bookFolder === '') return 'new';
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
    account?: string,
): ImportRecord => ({
    conversationId: conversation.id,
    conversationName: conversation.name,
    name,
    bookFolder,
    ...(account === undefined ? {} : { account }),
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
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import {
    chapterWithoutStruck, folderContents, folderDigest, importRecord, importRecords, importState, keptEditName, keptEdits,
    keptEditsStanding, standingKeptEdits, tendStruckEdits, writeImportRecord,
} from './5-the-ledger~ledger.ts';

const registerFolder = mkdtempSync(join(tmpdir(), 'records-'));
afterAll(() => rmSync(registerFolder, { recursive: true, force: true }));
const ledgerPath = join(registerFolder, 'ledger.json');

const bookFolder = (slug: string): string => {
    mkdirSync(join(registerFolder, slug));
    writeFileSync(join(registerFolder, slug, '1-june-15-2026.tsx'), 'the chapter as written');

    return slug;
};
const coverFor = (slug: string, origin: string, words: string): void => writeFileSync(
    join(registerFolder, slug, '.cover.tsx'),
    \`<Title>[[ \${words} ]]( claude--\${words} )</Title>\\n<Origin>\${origin}</Origin>\\n\`,
);
const twoMessages = [sampleTextMessage('m1', 'Doug', 'hello'), sampleTextMessage('m2', 'Claude', 'hi')];

describe('the ledger', () => {
    // Doug, 2026-10-17: "we don't use names because we might rename the conversations", and "We don't want files to
    // grow per import": one ledger to an import, keyed by the conversation's id, its book found by the Origin it wears.
    it('keeps a ledger keyed by id with no name or folder, and finds the book by its origin wherever it stands', () => {
        expect(importRecords(join(registerFolder, 'nowhere'), []).size).toBe(0);
        const conversation = sampleConversation('c', 'A Conversation', twoMessages);
        const slug = bookFolder('claude--a-conversation');
        coverFor(slug, 'c', 'A Conversation');
        const record = importRecord(conversation, registerFolder, 'claude--A Conversation', slug, '2026-09-11');
        writeImportRecord(ledgerPath, record);
        expect(importRecords(registerFolder, [ledgerPath]).get('c')).toEqual({ record, path: ledgerPath });
        const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
        expect(Object.keys(ledger.c)).not.toContain('name');
        expect(Object.keys(ledger.c)).not.toContain('bookFolder');
        renameSync(join(registerFolder, slug), join(registerFolder, 'renamed-by-hand'));
        expect(importRecords(registerFolder, [ledgerPath]).get('c')?.record.bookFolder).toBe('renamed-by-hand');
        renameSync(join(registerFolder, 'renamed-by-hand'), join(registerFolder, slug));
        expect(record.account).toBeUndefined();
    });

    // Doug, 2026-10-16: "You can annotate the account" — the record says which account a conversation came from.
    it('keeps the account a conversation came from beside the export, when the run names one', () => {
        const conversation = sampleConversation('l', 'Legacy', twoMessages);
        const slug = bookFolder('legacy');
        const record = importRecord(conversation, registerFolder, 'Legacy', slug, '2026-05-27', undefined, 'DNA Legacy');
        expect(record.account).toBe('DNA Legacy');
        expect(Object.keys(record).slice(0, 6))
            .toEqual(['conversationId', 'conversationName', 'name', 'bookFolder', 'account', 'exportedOn']);
        expect(record.conversationName).toBe('Legacy');
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
        coverFor(slug, 't', 'Tended');
        const recordPath = ledgerPath;
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Tended', slug, '2026-10-01', reimport));
        const heldRecord = importRecords(registerFolder, [ledgerPath]).get('t')!;
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
        const recordPath = ledgerPath;
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Replaced', slug, '2026-09-11'));
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Replaced', slug, '2026-10-01'));
        const heldRecords = importRecords(registerFolder, [ledgerPath]);
        expect([...heldRecords.keys()].filter(conversationId => conversationId === 'r')).toHaveLength(1);
        expect(heldRecords.get('r')?.record.exportedOn).toBe('2026-10-01');
    });
});
`})]}),"TheLedger5"),W=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Thread](/dougs-importer/#the-thread)"}),t(a,{children:[e(f,{}),"The conversation as it stood on the screen, which is one path through a tree, and the count of what was left on other paths."]}),t(i,{children:[e(r,{children:"A tree, and the path a reader sees"}),e(a,{children:"Every time I edit a message or ask for another answer, the conversation branches, and what the application shows me is never the tree but one path through it, from the first thing said to whichever end I was last standing on. Each message carries the one it was said after, so the path is a walk: take the latest message nothing answers, follow the parents to the root, and turn it around. That path is the conversation as far as a reader is concerned, and the importer says what it left behind rather than rounding it off: a conversation of a hundred and six messages that shows eighty-four has twenty-two on other paths, and the cover says so."})]}),e(o,{identifier:"thread",type:".ts",children:`import { rootParentId, type Conversation, type Message } from './3-the-record~record.ts';

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
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
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
`})]}),"TheThread6"),q=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Writing](/dougs-importer/#the-writing)"}),t(a,{children:[e(f,{}),"What was said, turned into this library's writing once, on the way in, and never read from a string when a page is drawn."]}),t(i,{children:[e(r,{children:"Once, on the way in"}),t(a,{children:["A message's text comes out of the export as markdown, and what belongs in a library is writing. The conversion happens here, once: a message becomes an exchange of ",e(n,{children:"[a conversation](/dougs-reference-manual/#the-conversation)"}),", headed by who said it and told its instant, and what was said becomes paragraphs, lists, a list indented under an item a list of its own inside it, headings, code, tables, formulas between dollars or between TeX's brackets, a word set bold or in emphasis, a word typed as code said verbatim, a quoted paragraph said quoted, and a link to the web a word that refers to it. The markup of the file it lands in is the library's own, expanded, one element to a line, so the checker that reads the shape of every file here reads these too."]}),e(a,{children:"A conversation is written one chapter per day it was held, each dated with its day and titled with it, and holding only that day's messages, so the days stand down the side of its page as its parts. A block of code is written as a code box, which names its language at its head; a block whose language was not named but that reads as SRT notation is named srt. Every version of an artifact is written as a chapter of its own besides its file, said to be a version, a document converted to writing under an opaque section and code set in a code box, titled with the artifact's title and its number; the table lists them in an appendix section the side does not show, and the card in the message refers to its version by title."}),e(a,{children:"A search of the web or a run of code that Claude made becomes one paragraph saying what was done and the paragraph after it saying what came back. An artifact the conversation made becomes a file beside the chapter, every version of it, its updates replayed, with a paragraph naming it where it was made. The text of a file pasted or attached becomes a file beside the chapter too; an uploaded file, whose content the export never carries, is named and no more. The thinking behind an answer is counted and left out."})]}),e(o,{identifier:"writing",type:".ts",children:`import { identifier } from '@dna-platform/public';
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
const attributeText = (text: string): string => written(text.replace(/\\s+/gu, ' ')).replace(/"/gu, '&quot;');
const lineWidth = (depth: number): number => 124 - 4 * depth;

export const slugFromName = (name: string): string => {
    const cut = identifier.slug(name).slice(0, 60).replace(/-+$/u, '');

    return cut === '' ? 'untitled' : cut;
};

export const titleFromName = (name: string): string => sanitized(name
    .replace(/^[\\p{Extended_Pictographic}\\p{Emoji_Presentation}️\\s]+/u, '')
    .replace(/[\\p{Extended_Pictographic}\\p{Emoji_Presentation}️\\s]+$/u, ''));

const openingSentence = (conversation: Conversation): string => {
    const dougsMessages = conversation.messages.filter(message => message.speaker === 'Doug');
    const firstMessage = [...dougsMessages].sort((first, second) => first.sentAt.localeCompare(second.sentAt))[0];
    const firstText = firstMessage?.blocks.find(block => block.type === 'text');
    const text = firstText?.type === 'text' ? firstText.text.replace(/[*_\`#>]/gu, '').trim() : '';

    return text.split(/(?<=[.!?])\\s|\\n/u)[0] ?? '';
};

const hasWords = (title: string): boolean => identifier.slug(title) !== '';

export const conversationTitle = (conversation: Conversation): string => {
    const given = titleFromName(conversation.name);
    if (hasWords(given)) return given;
    const opening = titleFromName(openingSentence(conversation)).split(' ').slice(0, openingWordCount).join(' ');
    if (hasWords(opening)) return opening;
    const day = new Date(conversation.createdAt).toLocaleDateString('en-GB', untitledDayFormat);

    return \`Untitled, \${day}\`;
};

export const resourceExtension = (givenType: string): string => {
    const given = givenType.trim().toLowerCase().replace(/^\\./u, '');
    const extension = extensionsByContentType[given] ?? extensionsByLanguage[given] ?? given;
    if (extractedTextExtensions.includes(extension)) return 'txt';

    return extensionForm.test(extension) ? extension : 'txt';
};

export const fileExtension = (contentType: string, title: string, language = ''): string => {
    const extensionFromTitle = /\\.([a-z0-9]+)$/iu.exec(title.trim())?.[1] ?? '';

    return resourceExtension(extensionsByContentType[contentType] ?? (language || extensionFromTitle));
};

const artifactExtension = (artifactVersion: ArtifactVersion): string =>
    fileExtension(artifactVersion.contentType, artifactVersion.title, artifactVersion.language);

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
const claudeManualWordList = ['Action', 'Artifact', 'Attachment', 'Origin', 'Version'];
const boxLanguages: Record<string, string> = {
    tsx: 'typescript', ts: 'typescript', js: 'javascript', mjs: 'javascript', html: 'xml', svg: 'xml',
    md: 'markdown', sh: 'bash', py: 'python', jsx: 'javascript', ahk: 'autohotkey',
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
    const sectionHeading = versionTitle.replace(/ v(\\d+)((?:-\\d+)?)$/u, ' at version $1$2');
    const bodyLines = isDocument
        ? [
            \`\${indentation(2)}<Section>\`,
            \`\${indentation(3)}<Opaque />\`,
            \`\${indentation(3)}<Heading>\${written(sectionHeading)}</Heading>\`,
            ...blockLines(artifactVersion.content, 3),
            \`\${indentation(2)}</Section>\`,
        ]
        : codeLines(boxLanguages[extension] ?? extension, artifactVersion.content, 2);
    const chapterLines = [
        \`\${indentation(2)}<Version />\`,
        \`\${indentation(2)}<Title>\${titleForm(written(escaped(versionTitle)))}</Title>\`,
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
    // ONE CHAPTER, Conversation, holding every message in order and dated with the day the conversation began;
    // the chapters a conversation is cut into by hand come after. Doug, 2026-10-21: "I don't want the day-based
    // split. That's not useful. You can call the default chapter 'conversation' because we have to process all
    // of them."
    const groups: { day: string; messages: Message[] }[] = [
        { day: (path[0]?.sentAt ?? conversation.createdAt).slice(0, 10), messages: path },
    ];
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

    const chapters = groups.map(({ day, messages }, groupIndex): WrittenChapter => {
        const title = 'Conversation';
        const chapterStem = \`\${groupIndex + 1}-conversation\`;
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
            const versionIdentifier = \`\${slugFromName(artifactVersion.title)}.v\${artifactVersion.versionCount}\`;
            const appendix = addArtifactFile(versionIdentifier, artifactVersion);
            const plainTitle = titleFromName(artifactVersion.title) || 'Untitled';
            const versionName = \`\${plainTitle} v\${artifactVersion.versionCount}\`;
            const versionTitle = uniqueVersionTitle(versionName);
            const ordinal = versions.length + 1;
            versions.push(versionChapter(ordinal, versionTitle, artifactVersion, manualImportPath, claudeManualImportPath));
            const verb = artifactVersion.versionCount === 1 ? 'Made' : block.command === 'rewrite' ? 'Rewrote' : 'Changed';
            const sentence = \`\${verb} the artifact “\${written(artifactVersion.title)}”\`;

            const attributes = [\`artifact="\${attributeText(block.id)}"\`, \`place="\${identifier.slug(versionTitle)}"\`];

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
                \`\${indentation(2)}<Message\`,
                \`\${indentation(3)}at="\${message.sentAt}"\`,
                \`\${indentation(2)}>\`,
                \`\${indentation(3)}<Origin>\${message.id}</Origin>\`,
                \`\${indentation(3)}<Speaker>\${speakerReference(message.speaker, referents)}</Speaker>\`,
            );
            const bodyLengthBefore = bodyLines.length;
            for (const block of message.blocks)
                bodyLines.push(...messageBlockLines(block));
            for (const attachment of message.attachments) {
                const extension = resourceExtension(attachment.extension);
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
        if (groupIndex === groups.length - 1)
            for (const artifactVersion of artifactVersions.values())
                addArtifactFile(slugFromName(artifactVersion.title), artifactVersion);

        if (groupIndex === 0 && keptAppendices.length > 0) {
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
            \`\${indentation(2)}<Title>\${titleForm(written(escaped(title)))}</Title>\`,
            ...bodyLines,
            ...appendices.flatMap(appendix => appendLines(appendix, 2)),
        ];
        const imports = importLines(
            chapterLines, ['Chapter', 'Paragraph', 'Title'], ['Message', 'Speaker'],
            manualImportPath, claudeManualImportPath, appendices.length > 0,
        );

        return { fileName: \`\${chapterStem}.tsx\`, title, tsx: chapterText(imports, chapterLines), files, day };
    });

    return { chapters, versions, thinkingCount, resultCount };
};

const speakerReference = (speaker: Speaker, referents: Referents): string => referenceForm(speaker, referents[speaker], '$');
const fileWords = (fileName: string): string => fileName === '' ? 'a file without a name' : \`“\${written(fileName)}”\`;

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
            const headingText = headingForm.exec(line)![2].replace(/\\*\\*(.+?)\\*\\*|__(.+?)__/gu, '$1$2').trim();
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
                listItems.length > 0 && nextLine.trim() !== '' && /^\\s{2,}/u.test(nextLine);
            const isItem = (nextLine: string): boolean => bulletForm.test(nextLine) || numberedForm.test(nextLine);
            const filledIndexFrom = (blankIndex: number): number => {
                let filledIndex = blankIndex;
                while (filledIndex < lines.length && lines[filledIndex].trim() === '') filledIndex++;

                return filledIndex;
            };
            const continuesAfterBlank = (blankIndex: number): boolean => {
                const filledLine = lines[filledIndexFrom(blankIndex)];
                if (filledLine === undefined || listItems.length === 0) return false;
                if (!isItem(filledLine)) return /^\\s{2,}/u.test(filledLine);
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

const notationForm = /=\\|>|<\\|=\\|>|=[a-z']*>|^::/mu;
const bracketForm = /[[\\]]/u;

// A listing stands in the chapter as the lines it is, a template literal whose first line opens it and whose last
// closes it, so a block of code can be read where it is written.
const templateText = (text: string): string => text.replace(/\\\\/gu, '\\\\\\\\').replace(/\`/gu, '\\\\\`').replace(/\\$\\{/gu, '\\\\\${');
const unscanned = (text: string): string => (bracketForm.test(text) ? '\${\\'\\'}' : '');

const stringForm = (text: string): string =>
    bracketForm.test(text) ? \`\\\`\${unscanned(text)}\${templateText(text)}\\\`\` : JSON.stringify(text);

const listingLines = (listing: string, depth: number): string[] => {
    const lines = templateText(listing.replace(/\\r\\n?/gu, '\\n')).split('\\n');
    lines[0] = \`\${indentation(depth)}{\\\`\${unscanned(listing)}\${lines[0]}\`;
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
            outputLines.push(...elementLines('Word', [written(unmarkedText(cell))], depth + 2));
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
        outputLines.push(...elementLines('Line', inlinePieces(listItem.text.trim(), false), depth + 1));
        if (listItem.items.length > 0) outputLines.push(...listLines(listItem.items, depth + 1));
    }
    outputLines.push(\`\${indentation(depth)}</Paragraph>\`);

    return outputLines;
};

const markedWordLines = (markName: string, text: string): string[] =>
    ['<Word>', \`    <\${markName} />\`, \`    \${written(text)}\`, '</Word>'];

const displayForms = [/\\$\\$([^$]+?)\\$\\$/gu, /\\\\\\[([\\s\\S]+?)\\\\\\]/gu];
const inlineMath = (innerText: string): ProsePiece => [\`<Math>{\${stringForm(innerText.trim())}}</Math>\`];
const inlineForms: [RegExp, (innerText: string) => ProsePiece][] = [
    [displayForms[0], innerText => [\`<Equation>{\${stringForm(innerText.trim())}}</Equation>\`]],
    [displayForms[1], innerText => [\`<Equation>{\${stringForm(innerText.trim())}}</Equation>\`]],
    [/\\\\\\(([^\\n]+?)\\\\\\)/gu, innerText => [\`<Math>{\${stringForm(innerText.trim())}}</Math>\`]],
    [/\`([^\`\\n]+?)\`/gu, innerText => markedWordLines('Verbatim', innerText)],
    [/\\*\\*(.+?)\\*\\*/gu, innerText => markedWordLines('Bold', innerText)],
    [/(?<![\\w*])\\*([^*\\n]+?)\\*(?!\\*)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/(?<!\\w)_([^_\\n]+?)_(?!\\w)/gu, innerText => markedWordLines('Emphasis', innerText)],
    [/\\$(?=\\S)([^$\\n\\u0000]+?)(?<=\\S)\\$(?!\\d)/gu, innerText => [\`<Math>{\${stringForm(innerText)}}</Math>\`]],
];

// Display math is an Equation where a paragraph stands, and inline Math in a line of a list or a heading, which
// hold nothing a paragraph's size: an Equation in a list's line was refused by the specification, 2026-10-18.
export const inlinePieces = (text: string, display = true): ProsePiece[] => {
    const elementPieces: ProsePiece[] = [];
    const placeholder = (): string => \`\\u0000\${elementPieces.length - 1}\\u0000\`;
    let markedText = text.replace(/\\[([^\\]\\n]+)\\]\\((https?:\\/\\/[^)\\s]+)\\)/gu, (_, words: string, url: string) => {
        const referenceLine = \`    <Reference>\${written(url)}</Reference>\`;
        elementPieces.push(['<Word>', referenceLine, \`    \${written(words)}\`, '</Word>']);

        return placeholder();
    });
    for (const [form, elementPiece] of inlineForms)
        markedText = markedText.replace(form, (_, innerText: string) => {
            elementPieces.push(display || !displayForms.includes(form) ? elementPiece(innerText) : inlineMath(innerText));

            return placeholder();
        });
    const pieces: ProsePiece[] = [];
    for (const part of markedText.split(/(\\u0000\\d+\\u0000)/u)) {
        const placeholderMatch = /^\\u0000(\\d+)\\u0000$/u.exec(part);
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
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
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
    it('keeps a title out of the notation\\'s way by the binder\\'s sanitizer, each of its characters a lookalike', () => {
        expect(titleFromName('Allbirds GPU pivot and TON/Cocoon connection'))
            .toBe('Allbirds GPU pivot and TON∕Cocoon connection');
        expect(slugFromName(titleFromName('24/7 convenience stores'))).toBe('24-7-convenience-stores');
        expect(titleFromName('Notes (draft) [v2] {x}')).toBe('Notes ❨draft❩ ⁅v2⁆ {x}');
        expect(titleFromName('💬 История Биткоина.\\nКто такой Са…')).toBe('История Биткоина. Кто такой Са…');
    });

    it('cuts a file\\'s name at sixty letters of the library\\'s own slug, and names one with none untitled', () => {
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

    // Found 2026-10-18 importing every conversation: a message of "Cathy > Libraries" held a row of a table with
    // no rule under it, and the writing wrote an empty paragraph at that line until the heap ran out.
    it('writes a line no form takes as prose, so a row of a table with no rule under it is a paragraph', () => {
        expect(blockLines('| a | b |\\nand then words\\n\\n| c |', 0))
            .toEqual(['<Paragraph>| a | b | and then words</Paragraph>', '<Paragraph>| c |</Paragraph>']);
        expect(blockLines('| x | y |\\n|---|---|\\n| 1 | 2 |', 0).join('\\n')).toContain('<Table />');
    });

    // Found 2026-10-18: display math in a list's item was an Equation in a Line, which the specification refuses.
    it('writes display math as an Equation in a paragraph and as inline Math in a list\\'s line or a heading', () => {
        expect(blockLines('Then $$E = mc^2$$ holds.', 0).join('\\n')).toContain('<Equation>{"E = mc^2"}</Equation>');
        const listed = blockLines('1. energy $$E = mc^2$$ here', 0).join('\\n');
        expect(listed).toContain('<Math>{"E = mc^2"}</Math>');
        expect(listed).not.toContain('<Equation>');
        expect(blockLines('## The law \\\\[F = ma\\\\]', 0).join('\\n')).toContain('<Math>{"F = ma"}</Math>');
    });

    it('escapes what the notation and TSX would read, so a bracket in a message stays a bracket', () => {
        const lines = blockLines(\`\${titleForm('x')} {y} <z> & w\`, 0);
        expect(lines.join('\\n')).toContain('&#91;&#91; x &#93;&#93; &#123;y&#125; &lt;z&gt; &amp; w');
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

    // Found by the session that wrote down the imported conversation's form, 2026-10-16: a numbered list whose
    // items stand apart by blank lines drew "1." six times, one list to an item.
    it('keeps a list whose items stand apart by blank lines one list, and ends it at a list of another kind', () => {
        expect(blockLines('1. one\\n\\n2. two\\n\\n   still two\\n\\n3. three', 0)).toEqual([
            '<Paragraph>', '    <List ordered />', '    <Line>one</Line>', '    <Line>two still two</Line>',
            '    <Line>three</Line>', '</Paragraph>',
        ]);
        expect(blockLines('1. one\\n\\n- other', 0).filter(line => line.includes('<List'))).toHaveLength(2);
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
        const listing = blockLines('\`\`\`\\n(x,y) := E![t]:x =t> y\\n\`\`\`', 0);
        expect(listing.find(line => line.includes('E![t]'))).toContain("{\`\${''}(x,y)");
        const commutator = inlinePieces('the commutator \\\\([[a,b]]\\\\) here').flat().join(' ');
        expect(commutator).toContain("<Math>{\`\${''}[[a,b]]\`}</Math>");
        expect(inlinePieces('a sum \\\\(x + y\\\\) here').flat().join(' ')).toContain('<Math>{"x + y"}</Math>');
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

    it('writes one chapter, Conversation, with no date of its own, each message timed and headed by its speaker', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question');
        const path = [question, sampleTextMessage('m2', 'Claude', 'An answer', 'm1')];
        const conversation = sampleConversation('c', 'A Conversation', path);
        const written = writtenConversation(conversation, path, referents, manualImportPath, claudeManualImportPath);
        const [chapter] = written.chapters;
        expect(chapter.fileName).toBe('1-conversation.tsx');
        expect(chapter.title).toBe('Conversation');
        expect(chapter.tsx).toContain('<Title>[[ Conversation ]]</Title>');
        expect(chapter.tsx).not.toContain('<Dated>');
        expect(chapter.tsx).not.toContain('<Part>');
        expect(chapter.tsx).toContain(\`<Speaker>\${referenceForm('Doug', 'Dougs Story', '$')}</Speaker>\`);
        expect(chapter.tsx).toContain(\`<Speaker>\${referenceForm('Claude', 'Dougs Claude', '$')}</Speaker>\`);
        expect(chapter.tsx).toContain('        <Message\\n            at="2026-06-15T10:00:00Z"\\n        >');
        expect(chapter.tsx).toContain('<Paragraph>A question</Paragraph>');
        expect(chapter.tsx).toContain(\`import { Message, Speaker } from '\${manualImportPath}';\`);
        expect(chapter.tsx).toContain(\`import { Origin } from '\${claudeManualImportPath}';\`);
        expect(chapter.tsx).toContain('<Origin>m1</Origin>');
    });

    it('keeps a conversation held over two days in one chapter holding every message, the days left to the messages', () => {
        const first = sampleTextMessage('m1', 'Doug', 'Day one', undefined, '2026-06-15T10:00:00Z');
        const second = sampleTextMessage('m2', 'Claude', 'Day two', 'm1', '2026-06-16T09:00:00Z');
        const conversation = sampleConversation('d', 'Days', [first, second]);
        const written = writtenConversation(conversation, [first, second], referents, manualImportPath,
            claudeManualImportPath);
        expect(written.chapters.map(one => one.fileName)).toEqual(['1-conversation.tsx']);
        expect(written.chapters[0].tsx).not.toContain('<Dated>');
        expect(written.chapters[0].tsx).toContain('Day one');
        expect(written.chapters[0].tsx).toContain('Day two');
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
            .toEqual(['1-conversation~notes.v1.md', '1-conversation~notes.v2.md', '1-conversation~notes.md']);
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
        expect(chapter.tsx).toContain(\`import { Artifact, Origin } from '\${claudeManualImportPath}';\`);
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
        expect(chapter.tsx).toContain(\`import { Action, Origin } from '\${claudeManualImportPath}';\`);
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
        expect(chapter.files.map(file => file.name)).toEqual(['1-conversation~notes.txt']);
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
`})]}),"TheWriting7"),z=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Books](/dougs-importer/#the-books)"}),t(a,{children:[e(f,{}),"What is left on disk: a conversation as a book, every conversation filed under one book that catalogues them all, and a book per project that catalogues its own besides."]}),t(i,{children:[e(r,{children:"One home, and as many catalogues as I like"}),t(a,{children:["A conversation is a book: its book file one line, its cover saying when it was held, how many messages it holds and which of ",e(n,{children:"[my accounts](/dougs-claude/#the-accounts)"})," it came from, its synopsis what it came to, its table, and a chapter for each day it was held, in the form ",e(n,{children:"[the imported conversation](/claudes-reference-manual/#the-imported-conversation)"})," sets down. It is filed under the book that catalogues all of my conversations, which is its one home whatever the mapping says. Each project that catalogues it is a book of its own, ",e(n,{children:"[a project book](/dougs-reference-manual/#the-project-manual)"}),", a reference manual of the project's knowledge files and a catalogue of its conversations by topic, which is the way back from a conversation to its project; and a project's book is a subject, so what I later write about a project can be filed under it. A project book is written once and left, and written whole again only when a run takes its project whole and says to overwrite, from the project as both accounts hold it, every conversation standing in the library entered in it again. Both kinds of catalogue are filed under Dougs Claude, the book that catalogues the conversations book and the project books together. The catalogue of all of them is a very simple book for now; the shelves and the tables that catalogue them more effectively come with their pages."]}),t(a,{children:["A conversation's book shows its title and is named apart from every other book of mine: its key is claude, two dashes, the title, two dashes and the first eight characters of the application's own id for it, and its folder is the same with the title's slug. So no conversation can collide with a book of another kind, two conversations of one title are told apart by their ids and never by a number, and a conversation keeps its key on every run. The page shows only the title, written as the application gave it, and only the key is spelled for the notation. A title is the application's own, sanitized by the binder's rule for any name nobody chose: a slash, a backslash, a parenthesis or a bracket written as the one that looks like it, what cannot be seen taken out, and every space one space. A chat the application left untitled takes the first sentence of my first message, and failing that the day it began. The ledger is keyed by the conversation's id and the book carries the same id on its cover, so whatever the title, the book is found again and never imported twice. A conversation with no message to show is no book. A project's book is keyed the same way, claude, two dashes and the project's name, and shows only the name, since a project called Claude met the book about Claude. A file of a project takes its own name, numbered against every title its book holds. A project's entry for a conversation is dated and listed under its month, as the register's is, so the project's page can lay its conversations by month and its side can list the months. A folder that exists is never entered unless the run says to overwrite and ",e(n,{children:"[the ledger](/dougs-importer/#the-ledger)"})," says the book is still the importer's; a catalogue's chapter and row are added where its table lacks the reference."]}),e(a,{children:"Every book the importer writes wears a cover as my other books do: the face its kind wears, a bookshelf cover for a conversation and for Dougs Claude, a journal cover for Our Conversations, a manual's for a project, each with a scheme, a window and a drawing, so that the mark in the header draws and a shelf can hold the book; and each with its subject's cover and my story's as volumes, which is how the header leads from any book to the one it is filed under and to me. The three drawings stand beside this chapter. Every conversation wears the one drawing of Our Conversations, so a conversation is told at a glance wherever its mark is drawn. And Dougs Claude is a bookshelf, so the books it catalogues stand on it as jackets."})]}),e(o,{identifier:"books",type:".ts",children:`import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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

    return { words, key: \`\${conversationKeyPrefix}\${words}\` };
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

const whereThisBookStandsSection = '        <Section>\\n            <Heading>Where this book stands</Heading>';
const authorLine = \`<Author>\${referenceForm('Doug', 'The Librarian', '*')}</Author>\`;
const subjectLine = (words: string, name: string): string => \`<Subject>\${referenceForm(words, name, '**')}</Subject>\`;
const nameInForm = (name: string): string => written(escaped(name));
const titleText = (bookName: BookName): string => bookName.words === bookName.key
    ? titleForm(nameInForm(bookName.key)) : referenceForm(written(bookName.words), nameInForm(bookName.key));
const mentionText = (bookName: BookName, within = false): string => {
    const key = \`\${within ? './' : ''}\${nameInForm(bookName.key)}\`;

    return bookName.words === bookName.key ? mentionForm(key) : referenceForm(written(bookName.words), key, '$');
};
const captionLines = (captionText: string, bookName: BookName): string[] => {
    const lines = wrappedLines(captionText);
    lines[lines.length - 1] += \` <Means>\${mentionText(bookName)}</Means>.\`;

    return lines;
};
const titleLine = (bookName: BookName): string => \`<Title>\${titleText(bookName)}</Title>\`;
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

export const shortId = (conversationId: string): string => conversationId.replace(/-/gu, '').slice(0, shortIdLength);

export const uniqueConversationName = (
    folder: string, title: string, conversationId: string, namesTaken: Set<string>,
): ConversationNaming => {
    const short = shortId(conversationId);
    const key = \`\${conversationKeyPrefix}\${title}--\${short}\`;
    const folderName = \`\${conversationKeyPrefix}\${slugFromName(title)}--\${short}\`;
    const address = identifier.slug(key);
    if (namesTaken.has(folderName) || namesTaken.has(address) || existsSync(join(folder, folderName)))
        throw new Error(\`"\${key}" would stand where another book stands, \${folderName}: two conversations' ids open with \`
            + \`the same \${shortIdLength} characters, or a run that stopped left this book behind\`);
    namesTaken.add(folderName);
    namesTaken.add(address);

    return { name: { words: title, key }, folderName };
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
        ...speakers.map(speaker => \`    <Participant>\${referenceForm(speaker, referents[speaker], '$')}</Participant>\`),
        '</Participants>',
    ];
    const openingBlock = path.find(message => message.speaker === 'Doug')?.blocks.find(block => block.type === 'text');
    const openingLine = openingBlock?.type === 'text' ? openingBlock.text.split(/\\n/u)[0] : '';
    const summaryText = conversation.summary !== ''
        ? conversation.summary.replace(/\\*\\*[^*]*\\*\\*\\s*/u, '').split(/\\n\\n/u)[0] : openingLine;
    const synopsisLines = wrappedLines(written(summaryText.replace(/[*_\`#>]/gu, '')));
    const packageWords = ['Author', 'Chapter', 'Paragraph', 'Subject', 'Svg', 'Title'];
    const claudeManualWords = [
        ...(accountName === undefined ? [] : ['Account']),
        'Origin',
        ...(projectNames.length > 0 ? ['Project'] : []),
    ];
    const projectImportLines = [manualImportLine(claudeManualWords, claudeImportPath)];
    const accountKey = \`Dougs Claude / \${nameInForm(accountName ?? '')}\`;
    const accountLines = accountName === undefined
        ? [] : [\`<Account>\${referenceForm(written(accountName), accountKey, '$')}</Account>\`];
    const drawingSource = join(folders.conversations, drawingFileName);
    const drawingText = existsSync(drawingSource) ? readFileSync(drawingSource, 'utf8') : '';
    const projectLines = projectNames.map(projectName => \`<Project>***\${titleText(projectBookName(projectName))}</Project>\`);
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
            \`    from="\${path[0]?.sentAt ?? conversation.createdAt}"\`,
            \`    to="\${path.at(-1)?.sentAt ?? conversation.updatedAt}"\`,
            '/>',
            '<Messages',
            \`    shown="\${path.length}"\`,
            \`    all="\${conversation.messages.length}"\`,
            '/>',
            titleLine(naming.name),
            authorLine,
            subjectLine('Conversations', 'Our Conversations'),
            ...projectLines,
            ...accountLines,
            \`<Origin>\${conversation.id}</Origin>\`,
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

    return { folder, files, chapterStem: conversationWriting.chapters[0].fileName.replace(/\\.tsx$/u, '') };
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
            \`\${coverFace} as Cover\`, 'Illustration', 'Scheme', 'Volume', 'Window',
        ], drawnCoverPackageWords, [
            ...volumeLines(),
            ...schemeLines(scheme),
            ...windowLines(-32, -26),
            titleLine(plainName(name)),
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
    const entryPath = join(folder, \`\${nextChapterNumber(folder)}-\${slugFromName(name.key)}.tsx\`);
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
    writtenFile(tablePath, tableWithRow(tableText, heading ?? monthHeading(instant), rowLines(name, stars), insertionPoint));

    return { entryPath, tablePath, files: [entryPath, tablePath] };
};

export const struckEntry = (folder: string, entryStem: string, name: BookName, stars: string): string[] => {
    const tablePath = join(folder, '.table.tsx');
    const rowText = \`\${indentedLines(3, rowLines(name, stars)).join('\\n')}\\n\`;
    const tableText = readFileSync(tablePath, 'utf8');
    const emptySection = /^ {8}<Section>\\n {12}<Heading>[^<]*<\\/Heading>\\n {8}<\\/Section>\\n/gmu;
    writtenFile(tablePath, tableText.replace(rowText, '').replace(emptySection, ''));
    const stem = basename(entryStem);
    for (const fileName of readdirSync(folder))
        if (fileName === \`\${stem}.tsx\` || fileName.startsWith(\`\${stem}~\`)) rmSync(join(folder, fileName));

    return [tablePath];
};

const entryPathFor = (folder: string, name: BookName): string | undefined => {
    const chapterFileNames = readdirSync(folder)
        .filter(fileName => /^o*\\d/u.test(fileName) && fileName.endsWith('.tsx') && !fileName.includes('~'));
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
    const folder = join(folders.claude, \`.\${slugFromName(project.name)}\`);
    const importPath = manualImportPath(folders, folder);
    const bookFilePath = join(folder, '.book.tsx');
    // A project of mine with Claude is Claude's manual's project manual, Sprint 115: the way on to the application and the trail.
    const bookFile = (): string => writtenFile(bookFilePath, bookFileText(claudeManualImportPath(folders, folder), 'ClaudeProjectManual', project.name));
    if (existsSync(bookFilePath) && !whole) return { folder, files: overwrite ? [bookFile()] : [], chapterStem: '' };
    if (existsSync(folder))
        for (const entry of readdirSync(folder, { withFileTypes: true }))
            if (entry.isFile()) rmSync(join(folder, entry.name));
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
            titleLine(projectBookName(project.name)),
            authorLine,
            subjectLine('Claude', 'Dougs Claude'),
            \`<About>\${titleText(projectBookName(project.name))}</About>\`,
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
        const documentBaseName = titleFromName(document.name.split('/').at(-1)!.replace(/\\.[^.]+$/u, '')) || 'Untitled';
        let documentTitle = documentBaseName;
        for (let titleCount = 2; addressesTaken.has(identifier.slug(documentTitle)); titleCount++)
            documentTitle = \`\${documentBaseName} \${titleCount}\`;
        addressesTaken.add(identifier.slug(documentTitle));
        const extensionFromName = (/\\.([a-z0-9]+)$/iu.exec(document.name)?.[1] ?? '').toLowerCase();
        const documentExtension = resourceExtension(extensionFromName);
        const chapterStem = \`\${documentIndex + 2}-\${slugFromName(documentTitle)}\`;
        const briefText = \`A knowledge file of the project, “\${written(document.name)}”, \`
            + 'as it was uploaded to Claude.';
        chapterNames.push(documentTitle);
        files.push(writtenFile(join(folder, \`\${chapterStem}~file.\${documentExtension}\`), document.content));
        files.push(writtenFile(join(folder, \`\${chapterStem}.tsx\`), chapterFileText(documentImportLines, [
            '<Spread />',
            titleLine(plainName(documentTitle)),
            '<Paragraph>',
            '    <Brief />',
            ...indentedLines(1, wrappedLines(briefText)),
            '</Paragraph>',
            ...appendLines({ identifier: 'file', type: \`.\${documentExtension}\` }, 0),
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
    const entryPath = join(folder, \`\${nextChapterNumber(folder)}-\${slugFromName(name.key)}.tsx\`);
    const bookRelativePath = relativePath(folder, bookFolder);
    // A project's entry is dated and set under its month as the register's is, so the project's page can lay its
    // conversations by month and its side can list the months; Sprint 113, on Doug's 'That is not navigable'.
    writtenFile(entryPath, entryFileText(importPath, ['Brief', 'Dated', 'Volume'], [...entryPackageWords, 'Date', 'Part'], bookRelativePath, [
        \`<Part>\${monthHeading(instant)}</Part>\`,
        '<Dated>',
        \`    <Date>\${dateReference(instant)}</Date>\`,
        '</Dated>',
        '<Volume>{TheCover()}</Volume>',
        titleLine(name),
        '<Paragraph>',
        '    <Brief />',
        ...indentedLines(1, captionLines(\`A conversation held in this project, \${dayWords(instant)}:\`, name)),
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
    const entryPath = join(catalogueFolder, \`\${nextChapterNumber(catalogueFolder)}-\${slugFromName(bookName)}.tsx\`);
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

const tableListsBook = (tableText: string, name: BookName): boolean =>
    tableText.includes(\`]]( \${nameInForm(name.key)} )\`);

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
        \`    <Content>\${mentionForm(\`./\${nameInForm(version.title)}\`)}</Content>\`,
        '</Paragraph>',
    ])),
    '</Section>',
];


const contentLines = (name: string): string[] =>
    ['<Paragraph>', \`    <Content>\${mentionForm(\`./\${nameInForm(name)}\`)}</Content>\`, '</Paragraph>'];

const parentheticalLines = (name: BookName): string[] => [
    '<Paragraph>',
    '    <Parenthetical />',
    '    <Word>',
    \`        <Content>\${mentionText(name)}</Content>\`,
    '    </Word>',
    '    <Word>',
    \`        <Content>\${mentionForm('./Synopsis')}</Content>\`,
    '    </Word>',
    '    <Word>',
    \`        <Content>\${mentionForm('./Table of Contents')}</Content>\`,
    '    </Word>',
    '</Paragraph>',
];

const rowLines = (name: BookName, stars: string): string[] => [
    '<Paragraph>',
    '    <Word>',
    \`        <Content>\${mentionText(name, true)}</Content>\`,
    '    </Word>',
    '    <Word>',
    '        <Arrow />',
    \`        <Content>\${referenceForm('▷', nameInForm(name.key))}\${stars}</Content>\`,
    '    </Word>',
    '</Paragraph>',
];
`}),e(o,{identifier:"dougs-claude",type:".svg",children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`}),e(o,{identifier:"our-conversations",type:".svg",children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`}),e(o,{identifier:"project",type:".svg",children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 12h20l4 5h24v35H8z"/><path d="M8 12h20l4 5h24v35H8zM8 20h48"/><path class="fill" d="M14 27h14v9H14z"/><path d="M36 27h14v9H36zM28 31h7M32 28l3 3-3 3"/><path d="M14 42h36M14 47h24"/></svg>
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleProject } from './3-the-record~samples.ts';
import { orderedTableText, projectBook, projectEntry, registerEntry, schemes, uniqueConversationName } from './8-the-books~books.ts';

const library = mkdtempSync(join(tmpdir(), 'books-'));
afterAll(() => rmSync(library, { recursive: true, force: true }));
const folders = {
    library,
    claude: join(library, '.claude'),
    claudeManual: join(library, '.claude', '.manual'),
    conversations: join(library, '.claude', '.conversations'),
};

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

    it('keeps the months together where the first stands, a section of the book\\'s own after them', () => {
        const written = table(
            section('October 2026', 'Our Conversations'),
            section('How this book is built', 'The Accounts'),
            section('July 2026', 'Investing'),
            section('Where this book stands', 'Dougs Claude'),
        );
        expect(orderedTableText(written)).toBe(table(
            section('October 2026', 'Our Conversations'),
            section('July 2026', 'Investing'),
            section('How this book is built', 'The Accounts'),
            section('Where this book stands', 'Dougs Claude'),
        ));
    });

    // Doug, 2026-10-16: "We consider the new account to be a continuation of that one, with same named projects,
    // so they exist on top of each other" — a project taken whole is written whole from the stack.
    it('leaves a written project book alone, and writes it whole when the run takes the project whole', () => {
        const first = projectBook(folders, sampleProject('Investing', ['Old.md']), schemes[0], '<svg/>');
        writeFileSync(join(first.folder, '9-a-stale-chapter.tsx'), 'from an earlier run');
        const stacked = sampleProject('Investing', ['Old.md', 'Only Then.md'], '', 'What the project is for');
        expect(projectBook(folders, stacked, schemes[0], '<svg/>').files).toEqual([]);
        const whole = projectBook(folders, stacked, schemes[0], '<svg/>', true, true);
        expect(existsSync(join(whole.folder, '9-a-stale-chapter.tsx'))).toBe(false);
        expect(readdirSync(whole.folder).filter(name => /^\\d+-.*\\.tsx$/u.test(name)))
            .toEqual(['1-the-project.tsx', '2-old.tsx', '3-only-then.tsx']);
    });

    // Found binding Semantic Reference Theory, 2026-10-17: a knowledge file named for its project, one address with
    // the book's own title. A file's title is numbered by slug against every title the book holds.
    // Found 2026-10-17 by a run that hung for six hours: a number put after a title past the file name's cut never
    // changed the cut name. A title is told apart by its whole address, and a number stands after the cut.
    it('numbers two long titles alike apart, by the whole address and never by the cut file name', () => {
        const longName = 'A Formalism of Reference in Which Every Referent Is Held at an Instant and Related Through It';
        const project = sampleProject('Long', [\`\${longName}.md\`, \`\${longName}.txt\`]);
        const book = projectBook(folders, project, schemes[0], '<svg/>', true, true);
        expect(readdirSync(book.folder).filter(name => /^\\d+-.*\\.tsx$/u.test(name))).toHaveLength(3);
        const namesTaken = new Set<string>();
        const first = uniqueConversationName(folders.conversations, longName, '11111111-aaaa-4000-8000-000000000000', namesTaken);
        const second = uniqueConversationName(folders.conversations, longName, '22222222-aaaa-4000-8000-000000000000', namesTaken);
        expect(first.folderName).toBe('claude--a-formalism-of-reference-in-which-every-referent-is-held-at--11111111');
        expect(second.folderName).toBe('claude--a-formalism-of-reference-in-which-every-referent-is-held-at--22222222');
    });

    it('numbers a file whose title slugs like the book, its project chapter or another file', () => {
        const project = sampleProject('Seren', ['seren.md', 'The Project.txt', 'Notes.md', 'notes.txt']);
        const book = projectBook(folders, project, schemes[0], '<svg/>', true, true);
        expect(readdirSync(book.folder).filter(name => /^\\d+-.*\\.tsx$/u.test(name))).toEqual([
            '1-the-project.tsx', '2-seren-2.tsx', '3-the-project-2.tsx', '4-notes.tsx', '5-notes-2.tsx',
        ]);
    });

    // Doug, 2026-10-17: "Still; do claude-- because we don't want random collisions in the library", and "Surely we
    // can make semantic titles but correlate imports by some sort of Guid from anthropic?" A key carries the first
    // eight of the application's id, so it is unique by construction and the same on every run.
    it('keys a conversation claude--, its title and the first eight of its id, and shows only its title', () => {
        const namesTaken = new Set<string>();
        const first = uniqueConversationName(
            folders.conversations, 'Ontic Structural Realism', '3b54b751-0d6e-4a1c-9f0e-1c2d3e4f5a6b', namesTaken,
        );
        const second = uniqueConversationName(
            folders.conversations, 'Ontic Structural Realism', '9e01c4d2-7a8b-4c3d-8e9f-0a1b2c3d4e5f', namesTaken,
        );
        expect(first).toEqual({
            name: { words: 'Ontic Structural Realism', key: 'claude--Ontic Structural Realism--3b54b751' },
            folderName: 'claude--ontic-structural-realism--3b54b751',
        });
        expect(second.name).toEqual({ words: 'Ontic Structural Realism', key: 'claude--Ontic Structural Realism--9e01c4d2' });
        expect(uniqueConversationName(folders.conversations, 'Ontic Structural Realism', first.name.key.slice(-8), new Set()))
            .toEqual(first);
    });

    // Sprint 113, on Doug's 'That is not navigable': the project's page lays its conversations by month, so a
    // project's entry is dated and listed under its month, as the register's is.
    it('dates a project\\'s entry and lists it under its month, so the project\\'s page can lay its conversations by month', () => {
        const project = join(library, 'project');
        mkdirSync(project, { recursive: true });
        writeFileSync(join(project, '.table.tsx'), [
            '    <Chapter>', '        <Section>', '            <Heading>Where this book stands</Heading>', '        </Section>', '    </Chapter>', '',
        ].join('\\n'));
        const name = { words: 'Ontic Structural Realism', key: 'claude--Ontic Structural Realism--3b54b751' };
        const files = projectEntry(folders, project, name, join(folders.conversations, 'x'), '2026-06-15T10:00:00.000Z');
        const entry = readFileSync(files.find(file => !file.endsWith('.table.tsx'))!, 'utf8');
        expect(entry).toContain('<Part>June 2026</Part>');
        expect(entry).toContain('<Date>[15 June 2026](2026-06-15)</Date>');
        expect(entry).toContain("import { Brief, Dated, Volume } from");
        const table = readFileSync(join(project, '.table.tsx'), 'utf8');
        expect(table).toContain('<Heading>June 2026</Heading>');
        expect(table).not.toContain('<Heading>Conversations</Heading>');
    });

    it('refuses two conversations whose ids open alike, rather than number either', () => {
        const namesTaken = new Set<string>();
        uniqueConversationName(folders.conversations, 'Bitcoin', '3b54b751-0000-4000-8000-000000000000', namesTaken);
        expect(() => uniqueConversationName(folders.conversations, 'Bitcoin', '3b54b751-ffff-4000-8000-000000000000', namesTaken))
            .toThrow(/open with the same 8 characters/u);
    });

    it('writes a title\\'s words as the application gave them and only its key escaped, so dots show as they are', () => {
        const register = join(library, 'register');
        mkdirSync(register, { recursive: true });
        writeFileSync(join(register, '.table.tsx'), 'export default () => (\\n    <Chapter>\\n    </Chapter>\\n);\\n');
        const name = { words: 'A Continuation...', key: 'claude--A Continuation...--3b54b751' };
        const entry = registerEntry(folders, register, name, join(register, 'x'), '2026-10-17T00:00:00Z', 'A:', '**');
        expect(readFileSync(entry.entryPath!, 'utf8')).toContain('[[ A Continuation... ]]( claude--A Continuation......--3b54b751 )');
        expect(readFileSync(entry.tablePath, 'utf8')).toContain('$[[ A Continuation... ]]( ./claude--A Continuation......--3b54b751 )');
    });
});
`})]}),"TheBooks8"),V=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[The Check](/dougs-importer/#the-check)"}),t(a,{children:[e(f,{}),"What the importer wrote, checked against the archive the export was first read into, and then against the bind."]}),t(i,{children:[e(r,{children:"Two readings of one export"}),t(a,{children:["The sister repository holds an older reading of the same export, as markdown: a transcript per conversation with its count of messages, a book per project with the conversations its scaffold filed there, and the statistics of the whole. The importer never reads that archive as a source, but it is a check: every count of ours against its statistics, our pairing of a project against its scaffold's, our count of messages in each conversation against its transcript's, every difference listed by name in the report. Then the bind, which holds every book to its type and every reference to its place; and the run reads every conversation it has written back through its record, the instants of its messages in order, and finds them equal to ",e(n,{children:"[the thread](/dougs-importer/#the-thread)"})," or says from which message they stray."]}),e(a,{children:"The run reports the check whether it writes or not, after the project's conversations: the counts of the whole export against the statistics, the project's conversations we paired against the ones the scaffold filed, each conversation's messages against its transcript's count, and what stands written against the export. A difference is not a fault; the archive's reading is older and its own, and the report is where the two are read side by side."})]}),t(i,{children:[e(r,{children:"What the binder takes"}),e(a,{children:"A run that writes ends with the binder's own check over my library, in seconds, and fails on any fault. It reads the library as the binder does, holds every book and reference to its place, and asks of every address whether one thing stands there, a cover by the words it shows. Then it puts every file the run wrote through the binder's transform and parses what comes out, so a title the transform would write into something the page cannot be built from is refused here and not at the end of a bind. Beside it, a promise writes a conversation under every title of both accounts that holds something the notation or the page reads into a copy of my library, and expects the same check to find nothing."})]}),e(o,{identifier:"check",type:".ts",children:`import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import type { Conversation } from './3-the-record~record.ts';
import type { Pairing } from './4-the-pairing~pairing.ts';
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

type MembershipFile = { projects: { name: string; conversations: { uuid: string }[] }[] };

export const membershipDifferences = (pairings: Pairing[], membershipText: string): Difference[] => {
    const membership = JSON.parse(membershipText) as MembershipFile;
    const theirProjects = new Map(membership.projects.flatMap(project =>
        project.conversations.map(member => [member.uuid, project.name] as const)));

    return pairings.flatMap(pairing => {
        const ours = pairing.projectName ?? 'no project';
        const theirs = theirProjects.get(pairing.conversationId) ?? 'no project';
        if (ours === theirs) return [];

        return [{ name: pairing.title || 'Untitled', ours: pairing.byHand ? \`\${ours}, by hand\` : ours, theirs }];
    });
};

export type BinderCheck = { bookCount: number; keyCount: number; faults: string[] };

export const binderCheck = async (library: string, bindingFolder: string, written: string[] = []): Promise<BinderCheck> => {
    const binderModule = async (path: string) => import(pathToFileURL(join(bindingFolder, path)).href);
    const { configure } = await binderModule('configuration/configuration.ts');
    const { walk } = await binderModule('inventory/walk.ts');
    const { misaccounted } = await binderModule('inventory/accounting.ts');
    const { problem } = await binderModule('inventory/library.ts');
    const { catalogue } = await binderModule('catalogue/catalogue.ts');
    const { holds } = await binderModule('catalogue/holds.ts');
    const { missing, transforming } = await binderModule('reference/transform.ts');
    const chosen = configure(bindingFolder);
    const found = walk(library, chosen);
    const held = catalogue(found, chosen);
    const faults = [...misaccounted(found, chosen), ...holds(found, held)].map(fault => String(problem(fault)));
    const chapters = written.filter(file => file.endsWith('.tsx') && !basename(file).includes('~') && existsSync(file));
    const unparsed = chapters.flatMap(file => {
        const book = found.books.find((one: { path: string }) => resolve(dirname(file)) === resolve(one.path));
        const made = transforming(readFileSync(file, 'utf8'), file, held, book);
        const missed: string[] = made.missing.map((one: unknown) => missing(one, held.keys()));
        const parsed = ts.transpileModule(made.text, {
            fileName: file, reportDiagnostics: true, compilerOptions: { jsx: ts.JsxEmit.Preserve },
        });
        const refused = (parsed.diagnostics ?? []).map(diagnostic =>
            \`\${file}: once transformed, \${ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ')}\`);

        return [...missed, ...refused];
    });

    return { bookCount: found.books.length, keyCount: held.keys().length, faults: [...faults, ...unparsed] };
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
`}),e(o,{identifier:"promises.test",type:".ts",children:`import { describe, expect, it } from 'vitest';
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
`}),e(o,{identifier:"bind.test",type:".ts",children:`import { cpSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterAll, describe, expect, it } from 'vitest';
import type { Block } from './3-the-record~record.ts';
import { sampleConversation, sampleMessage, sampleTextMessage } from './3-the-record~samples.ts';
import { conversationTitle } from './7-the-writing~writing.ts';
import { conversationBook, projectEntry, registerEntry, schemes, uniqueConversationName } from './8-the-books~books.ts';
import { binderCheck } from './9-the-check~check.ts';

const library = dirname(dirname(fileURLToPath(import.meta.url)));
const bindingFolder = join(library, '..public', '.binding');
const galley = mkdtempSync(join(tmpdir(), 'galley-'));
afterAll(() => rmSync(galley, { recursive: true, force: true }));

const hazards = [
    'A listing:',
    '\`\`\`',
    '(x,y) := E![t]:x =t> y & [[t₁]]',
    '\`\`\`',
    'A formula \\\\([[a,b]]\\\\), and a list apart:',
    '',
    '1. one',
    '',
    '2. two',
].join('\\n');
const artifact: Block = {
    type: 'artifact', id: 'a1', title: '2. Symbols vs. Sets/Frames', contentType: 'application/vnd.ant.code',
    language: 'python', command: 'create', content: 'print([[1]])', oldText: '', newText: '',
};
// Found 2026-10-18: a call of the older account whose parameters leaked into its artifact's id, quotes and all.
const leaked: Block = {
    type: 'artifact', id: 'tracer</parameter name>\\n<parameter name="command">update', title: 'Tracer', contentType: 'text/markdown',
    language: '', command: 'create', content: '# Tracer', oldText: '', newText: '',
};

// The titles a scan of 3,815 names of both accounts found holding something the notation or JSX reads, on
// 2026-10-17, and two conversations of one title, told apart by their ids.
const titles = [
    'Dr. Who/Watson [draft] (2)',
    'Bitcoin',
    'Claude > Miscellaneous',
    'A Continuation...',
    'P = NP: arguments',
    'Arguments for and against P ≠ NP',
    '[Excerpt]: The Doug & Eirian Theory',
    'Doug & Seren $ $Chemical SRT',
    'Pointers in C++: *x vs **x',
    '💬 История Биткоина.\\nКто такой Са…',
    'C:\\\\Users\\\\notes {draft}',
    'Ontic Structural Realism',
    'Ontic Structural Realism',
];

// What the importer writes, the binder takes: every hazard a bind of his library refused on 2026-10-17 written
// into a copy of the library, which the binder's own check must find whole, and every file written must parse
// once the binder's transform has had it.
describe('the bind', () => {
    it('holds a library with a conversation written in every hazard the binder once refused', async () => {
        cpSync(library, galley, {
            recursive: true,
            filter: source => !/[\\\\/](node_modules|\\.\\.public)$/u.test(source),
        });
        const folders = {
            library: galley,
            claude: join(galley, '.claude'),
            claudeManual: join(galley, '.claude', '.manual'),
            conversations: join(galley, '.claude', '.conversations'),
        };
        const messages = [
            sampleTextMessage('m1', 'Doug', hazards),
            sampleMessage('m2', 'Claude', [{ type: 'text', text: 'Here.' }, artifact, leaked], 'm1'),
        ];
        const namesTaken = new Set<string>();
        const written: string[] = [];
        for (const [index, name] of titles.entries()) {
            const id = \`\${String(index).padStart(8, '0')}-0000-4000-8000-000000000000\`;
            const conversation = sampleConversation(id, name, messages);
            const naming = uniqueConversationName(folders.conversations, conversationTitle(conversation), id, namesTaken);
            const book = conversationBook(
                folders, conversation, messages, naming, ['Investing'], 'DNA', schemes[0],
                { Doug: 'Dougs Story', Claude: 'Dougs Claude' },
            );
            const instant = conversation.updatedAt;
            const entry = registerEntry(folders, folders.conversations, naming.name, book.folder, instant, 'A hazard:', '**');
            const listed = projectEntry(
                folders, join(folders.claude, '.investing'), naming.name, book.folder, conversation.createdAt,
            );
            written.push(...book.files, ...entry.files, ...listed);
        }

        const checked = await binderCheck(galley, bindingFolder, written);

        expect(checked.faults).toEqual([]);
        expect(checked.bookCount).toBeGreaterThan(2);
    }, 180_000);
});
`})]}),"TheCheck9"),U=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[DNA Legacy](/dougs-importer/#dna-legacy)"}),t(a,{children:[e(f,{}),"The import of my first account, ",e(n,{children:"[DNA Legacy](/dougs-claude/#dna-legacy)"}),": where its export lands, whose it is, and the ledger of every conversation brought in from it."]}),t(i,{children:[e(r,{children:"What DNA Legacy reads"}),e(a,{children:"Its export lands in the sister repository under claude-legacy, in the older form, one archive holding the account, its projects, its memories and its conversations. The newest is of 27 May 2026, and it is the last, since the account was lost with its domain; the capture of its projects taken then stands beside it. The account is held by an address of the dna.love domain, which the export must name to be read, and that address is the configuration's beside this chapter."})]}),t(i,{children:[e(r,{children:"The ledger of DNA Legacy"}),t(a,{children:["Beside this chapter stands the ledger of this import, one file however often it runs: a line for each conversation brought in, keyed by the application's own id and holding no name, with the export it came from, the application's last change and its count of messages when it came in, when it came in and when it was taken again, and the digest of what was written. The same id is said on the conversation's cover and on each of its messages, so its book is found wherever it stands and whatever I have called it, as ",e(n,{children:"[the ledger](/dougs-importer/#the-ledger)"})," tells."]})]}),e(o,{identifier:"configuration",type:".json",children:`{
  "name": "DNA Legacy",
  "folder": "claude-legacy",
  "address": "support@dna.love"
}
`}),e(o,{identifier:"ledger",type:".json",children:`{
  "33a9f673-dabd-40af-b5e1-fc2037530af5": {
    "conversationName": "Adding a Google account to iPhone",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-12T16:51:58.553586Z",
    "messageCount": 2,
    "digest": "fba31385b0363fb9",
    "importedAt": "2026-10-21T12:31:31.562Z"
  },
  "be4414e7-96eb-4044-8e0d-8d8f342b547c": {
    "conversationName": "Screenshot translation request",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-24T08:38:14.430873Z",
    "messageCount": 4,
    "digest": "035af76a3bb9535f",
    "importedAt": "2026-10-21T12:31:31.574Z"
  },
  "4055087b-6d12-4355-a4d3-ccfced9e66a9": {
    "conversationName": "Cetirizine vs Claritin comparison",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-14T18:07:53.931071Z",
    "messageCount": 16,
    "digest": "31d618077f72aa75",
    "importedAt": "2026-10-21T12:31:31.588Z"
  },
  "a15a3d7d-644e-4842-aa52-e54c14c863c0": {
    "conversationName": "Patreon's business model explained",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-29T13:26:07.814300Z",
    "messageCount": 2,
    "digest": "4c9472161e087496",
    "importedAt": "2026-10-21T12:31:31.604Z"
  },
  "25ff8f54-ea35-4c57-be08-752fdb65da7f": {
    "conversationName": "Cold-smoked salmon identification",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-29T15:34:46.335071Z",
    "messageCount": 10,
    "digest": "440f071d2e3a2a21",
    "importedAt": "2026-10-21T12:31:31.615Z"
  },
  "5e95e85d-4d16-4d1c-a462-a22aca6c2258": {
    "conversationName": "Translation request to Russian",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-17T07:37:12.940502Z",
    "messageCount": 2,
    "digest": "1cb93839b281a160",
    "importedAt": "2026-10-21T12:31:31.624Z"
  },
  "309c3406-7def-468e-9f22-8e445216b665": {
    "conversationName": "Tipping customs at Georgian salons",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-08T09:12:05.510895Z",
    "messageCount": 20,
    "digest": "7440289816809e4f",
    "importedAt": "2026-10-21T12:31:31.635Z"
  },
  "4399492e-bee3-4e57-b69c-503765c2892b": {
    "conversationName": "Credo bank negative balance issue",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-31T09:58:38.132605Z",
    "messageCount": 92,
    "digest": "15ab1fa6138ecedf",
    "importedAt": "2026-10-21T12:31:31.651Z"
  },
  "3dd9089e-5fc3-4d82-b66b-26085c0b104a": {
    "conversationName": "HP printer alignment troubleshooting and setup",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-14T15:07:59.183307Z",
    "messageCount": 6,
    "digest": "1ccf5302d001d94f",
    "importedAt": "2026-10-21T12:31:31.661Z"
  },
  "f7a471e2-68c2-4d14-b496-0ec1a082234b": {
    "conversationName": "Translating academic report screenshot",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-30T00:41:14.756630Z",
    "messageCount": 8,
    "digest": "bdef35ad299e8de2",
    "importedAt": "2026-10-21T12:31:31.679Z"
  },
  "f93751b5-5f1e-47f1-863e-7a4baa0f6ffe": {
    "conversationName": "Busy Project Apology",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-02T16:28:01.716262Z",
    "messageCount": 2,
    "digest": "af9aff517745d621",
    "importedAt": "2026-10-21T12:31:31.686Z"
  },
  "9cfae3e9-e87f-437e-a398-8bad946fc425": {
    "conversationName": "Canadian Map Reconstruction",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-02T08:54:53.607632Z",
    "messageCount": 2,
    "digest": "a61465c86d7b5dea",
    "importedAt": "2026-10-21T12:31:31.699Z"
  },
  "7f0b34cf-c5bb-45fa-a0f7-2c2677bf37b9": {
    "conversationName": "Turkish Airlines Cargo Shipping to Antalya",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-30T23:00:21.233834Z",
    "messageCount": 114,
    "digest": "0c22f9939c10ef6b",
    "importedAt": "2026-10-21T12:31:31.770Z"
  },
  "7ea7a502-feb4-4606-8488-9379b4606891": {
    "conversationName": "Fiverr Chat PDF Conversion",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-27T14:57:55.621890Z",
    "messageCount": 6,
    "digest": "20b3c6fa1e78242e",
    "importedAt": "2026-10-21T12:31:31.791Z"
  },
  "54ed5ce4-0c8c-416f-99a2-560336c060e2": {
    "conversationName": "GitHub SSH Key Setup on Windows",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-28T14:31:52.906923Z",
    "messageCount": 6,
    "digest": "a3bae83324b2b973",
    "importedAt": "2026-10-21T12:31:31.801Z"
  },
  "4f9b6c7b-3764-4452-8713-1e23cbdc5ca4": {
    "conversationName": "Alku university campus locations in Turkey",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-01T12:39:00.347768Z",
    "messageCount": 28,
    "digest": "5a31aa3860e35d9a",
    "importedAt": "2026-10-21T12:31:31.824Z"
  },
  "311fdc22-4a8e-40fa-8a21-1dab0e102638": {
    "conversationName": "White t-shirt design mockup",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-27T13:02:35.858034Z",
    "messageCount": 2,
    "digest": "51f623ade75d9412",
    "importedAt": "2026-10-21T12:31:31.831Z"
  },
  "17d704b2-909c-426d-8ca4-3fa612f0de9a": {
    "conversationName": "Custom map illustration pricing calculation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-31T07:35:55.595971Z",
    "messageCount": 4,
    "digest": "2eae72fe9d594dff",
    "importedAt": "2026-10-21T12:31:31.840Z"
  },
  "c0ab111e-692e-447c-b7fd-de8fccd1729d": {
    "conversationName": "Long Island furniture and item disposal options",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-05T16:16:00.817278Z",
    "messageCount": 4,
    "digest": "2bf0b1d9ca0b7dee",
    "importedAt": "2026-10-21T12:31:31.852Z"
  },
  "63afced5-00d7-4d0b-8ed9-d3759dfb92e6": {
    "conversationName": "Casual conversation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-23T16:51:37.963651Z",
    "messageCount": 42,
    "digest": "f49f090dc480462f",
    "importedAt": "2026-10-21T12:31:31.867Z"
  },
  "bff59796-df9e-4dbc-857a-8bda7446133c": {
    "conversationName": "Translating a child services letter to Russian authorities",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-11T05:21:43.116748Z",
    "messageCount": 60,
    "digest": "4b2f10fc5c2da539",
    "importedAt": "2026-10-21T12:31:31.894Z"
  },
  "8ca85b8b-c17f-4980-991c-ae9baaed7d7b": {
    "conversationName": "Translating custody dispute communications",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-15T12:46:41.542034Z",
    "messageCount": 24,
    "digest": "a29a057847b24d29",
    "importedAt": "2026-10-21T12:31:31.922Z"
  },
  "72c86266-ba7b-44e2-b4c1-53be6ba8c3cf": {
    "conversationName": "AI ethics and emotional competence",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-06T16:44:00.664843Z",
    "messageCount": 40,
    "digest": "b46452328fcd7a94",
    "importedAt": "2026-10-21T12:31:31.937Z"
  },
  "17cc66cf-2832-4721-ab76-dced3c992e6f": {
    "conversationName": "Georgia health insurance requirements for Americans",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-07T18:24:56.652146Z",
    "messageCount": 10,
    "digest": "03ca3a0d1c409e2c",
    "importedAt": "2026-10-21T12:31:31.947Z"
  },
  "9f055868-fa69-4fd7-8a7f-eb13dab52179": {
    "conversationName": "Missing thinking feature on app",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-07T23:14:26.226418Z",
    "messageCount": 10,
    "digest": "05748aad74c593b5",
    "importedAt": "2026-10-21T12:31:31.954Z"
  },
  "977892ca-a0a7-4c6c-b3b9-1ab9244f0ea6": {
    "conversationName": "Treating feline giardia with metronidazole",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T05:42:59.807616Z",
    "messageCount": 48,
    "digest": "d24c5de6abf64eb3",
    "importedAt": "2026-10-21T12:31:31.968Z"
  },
  "06c70abc-9b77-4709-b2a7-878776e54e3c": {
    "conversationName": "Managing screen time on child Apple accounts",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T08:16:21.603579Z",
    "messageCount": 4,
    "digest": "176e695eaf0e0c58",
    "importedAt": "2026-10-21T12:31:31.977Z"
  },
  "48ab3881-47c5-43d2-9f29-3ae8672198e2": {
    "conversationName": "Turkish visa overstay penalty dispute",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T09:44:36.821226Z",
    "messageCount": 4,
    "digest": "9110a7961a652b3c",
    "importedAt": "2026-10-21T12:31:31.985Z"
  },
  "7a350256-2326-4bb9-91f6-5d3fb23aeea5": {
    "conversationName": "Safe Istanbul activities for one night with kids",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T11:20:05.786650Z",
    "messageCount": 12,
    "digest": "88d9094a65ceeb20",
    "importedAt": "2026-10-21T12:31:31.996Z"
  },
  "18d08a54-5b60-4e3f-a1ed-34cbb4bfb8f2": {
    "conversationName": "Managing cranky kids at Istanbul airport",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T12:01:11.892841Z",
    "messageCount": 20,
    "digest": "7e7085b23ef4a5db",
    "importedAt": "2026-10-21T12:31:32.007Z"
  },
  "5747495d-bf92-4e66-a429-082d4f85efc3": {
    "conversationName": "Yotelair Istanbul airport transit hotel",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T14:57:53.859676Z",
    "messageCount": 20,
    "digest": "90f5386176f2b961",
    "importedAt": "2026-10-21T12:31:32.017Z"
  },
  "a649d064-fb8f-4b26-bcab-53ec70315125": {
    "conversationName": "Georgia Online Apps",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-10T17:05:57.854488Z",
    "messageCount": 36,
    "digest": "c26b6a7636d6ffff",
    "importedAt": "2026-10-21T12:31:32.029Z"
  },
  "9a047389-1096-44db-b9be-d37136583f8c": {
    "conversationName": "Airports near Batumi with Moscow flights",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T09:14:56.180877Z",
    "messageCount": 16,
    "digest": "7e0d841bb1afea19",
    "importedAt": "2026-10-21T12:31:32.039Z"
  },
  "f2cd2bfd-6853-4999-b4d2-998fd9486c54": {
    "conversationName": "Finding a late-night notary in Moscow",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T12:41:17.715380Z",
    "messageCount": 2,
    "digest": "5199f29b4c4649bf",
    "importedAt": "2026-10-21T12:31:32.048Z"
  },
  "492a8000-164f-4ce1-b422-1ab980b6e45a": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T19:51:39.738701Z",
    "messageCount": 1,
    "digest": "c3386c36f597490f",
    "importedAt": "2026-10-21T12:31:32.056Z"
  },
  "1a3e86c8-cd8f-4045-aab9-b613f2fee7cd": {
    "conversationName": "Citibank address for traveling mailbox check deposits",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-13T12:00:14.666130Z",
    "messageCount": 3,
    "digest": "25613ac4c05575bb",
    "importedAt": "2026-10-21T12:31:32.064Z"
  },
  "bd351e7f-2d45-486a-9325-183655776102": {
    "conversationName": "Windows Wi-Fi connection after blue screen crash",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T07:53:35.892509Z",
    "messageCount": 26,
    "digest": "faef69c3472a62cc",
    "importedAt": "2026-10-21T12:31:32.076Z"
  },
  "b56c62f1-9e70-48fe-aece-c3eb8e34dca0": {
    "conversationName": "Lawyer confidentiality agreements and client rights",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-15T13:40:30.256100Z",
    "messageCount": 10,
    "digest": "ade41ae3aebbb3e9",
    "importedAt": "2026-10-21T12:31:32.084Z"
  },
  "585c0f8d-4e07-45e4-80a1-74352cc606ab": {
    "conversationName": "Missed airport pickup on crutches",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-15T16:18:04.745520Z",
    "messageCount": 2,
    "digest": "90df2ec6de9cc90e",
    "importedAt": "2026-10-21T12:31:32.096Z"
  },
  "afbae201-9cf5-45ba-8a45-832b3cc266ef": {
    "conversationName": "Vet clinics in Alanya for cat giardia treatment",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T10:43:49.338432Z",
    "messageCount": 10,
    "digest": "5bafa2b0eeda7ad1",
    "importedAt": "2026-10-21T12:31:32.107Z"
  },
  "19b76aeb-6a15-4d59-8fe4-de0f3e254782": {
    "conversationName": "Disinfecting a litter box for giardia prevention",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T11:31:13.544790Z",
    "messageCount": 4,
    "digest": "8068092407a25533",
    "importedAt": "2026-10-21T12:31:32.120Z"
  },
  "dc1f3f87-720d-467c-b881-51593177c40e": {
    "conversationName": "Escalation in couple conflicts",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T16:23:59.783409Z",
    "messageCount": 26,
    "digest": "e956f9a322072346",
    "importedAt": "2026-10-21T12:31:32.146Z"
  },
  "007f4eb7-e8f9-4448-814c-ebcbad331b2c": {
    "conversationName": "Cat's persistent illness and visa deadline crisis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T22:30:21.409775Z",
    "messageCount": 6,
    "digest": "9d795f78d4fa5a43",
    "importedAt": "2026-10-21T12:31:32.172Z"
  },
  "20719cfc-89ad-42e6-9d2e-0a22f4d6cab9": {
    "conversationName": "Bengal cat gastrointestinal issues in Turkey",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-17T12:58:50.073351Z",
    "messageCount": 51,
    "digest": "aa2a979360221a53",
    "importedAt": "2026-10-21T12:31:32.208Z"
  },
  "a350ddfa-7695-4b71-9924-78572a9d20e5": {
    "conversationName": "Trump's Greenland distraction strategy",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-19T13:37:54.781971Z",
    "messageCount": 42,
    "digest": "6f4ba1c2dba93a56",
    "importedAt": "2026-10-21T12:31:32.227Z"
  },
  "8f9f43b0-3911-40ef-a3f0-0dc63a33133b": {
    "conversationName": "Trump's Greenland strategy and negotiation tactics",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-19T13:39:42.537093Z",
    "messageCount": 2,
    "digest": "1461bbeeb6f94284",
    "importedAt": "2026-10-21T12:31:32.235Z"
  },
  "aa5cbbf8-cea8-4c11-9e26-ebc394241466": {
    "conversationName": "Gout attacks and alcoholism connection",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-20T21:34:55.394675Z",
    "messageCount": 10,
    "digest": "a3a4c6809707d269",
    "importedAt": "2026-10-21T12:31:32.246Z"
  },
  "53f5d105-1c95-4bca-a39d-e54ca3567c26": {
    "conversationName": "Trump, Rubio, and Venezuela: reconciling perspectives",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-21T13:47:34.088878Z",
    "messageCount": 18,
    "digest": "9a323028a72ae3f8",
    "importedAt": "2026-10-21T12:31:32.269Z"
  },
  "04003294-cf89-44d8-8a3d-9291b87e3490": {
    "conversationName": "Tbilisi tap water safety for humans and cats",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-21T13:54:14.487517Z",
    "messageCount": 2,
    "digest": "ea45ce435d7b1d1d",
    "importedAt": "2026-10-21T12:31:32.280Z"
  },
  "b13b4226-1f73-4a1b-86b3-63ccd96db111": {
    "conversationName": "Veterinary fecal parasite antigen test",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-21T19:16:33.528560Z",
    "messageCount": 29,
    "digest": "71dc55032b4fed16",
    "importedAt": "2026-10-21T12:31:32.296Z"
  },
  "b60e550d-0503-4af9-8b42-1a9627cb9dfb": {
    "conversationName": "Finding a specific Google search from December 2024",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-21T23:17:49.559195Z",
    "messageCount": 2,
    "digest": "199edc8031360beb",
    "importedAt": "2026-10-21T12:31:32.304Z"
  },
  "fc5f944d-7a60-4703-ab7b-5c40e609832d": {
    "conversationName": "Managing sharp chipped tooth pain temporarily",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-22T19:13:07.304316Z",
    "messageCount": 4,
    "digest": "6a181825957fe991",
    "importedAt": "2026-10-21T12:31:32.313Z"
  },
  "7d6837be-ef06-4ff1-965e-17b599663419": {
    "conversationName": "iPhone message notifications not showing banners",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-23T11:33:12.369975Z",
    "messageCount": 26,
    "digest": "d206cebc18ce0a22",
    "importedAt": "2026-10-21T12:31:32.328Z"
  },
  "ea3d2c31-e45b-4780-8bbb-b921c3b3dcc5": {
    "conversationName": "Secnidazole for persistent giardia in cats",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-09T12:28:19.105125Z",
    "messageCount": 102,
    "digest": "d297a30face80e96",
    "importedAt": "2026-10-21T12:31:32.356Z"
  },
  "b2a50752-7249-4927-b586-6ccbad6cdb6a": {
    "conversationName": "💬 A young boy has high eosinofil…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-24T10:22:32.513600Z",
    "messageCount": 4,
    "digest": "923209c5a3ce3f65",
    "importedAt": "2026-10-21T12:31:32.366Z"
  },
  "79c6481c-17b2-48ba-8fa7-21897148120f": {
    "conversationName": "Conflict resolution strategies for couples",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-25T14:25:22.038993Z",
    "messageCount": 2,
    "digest": "00a75c87c575c6b2",
    "importedAt": "2026-10-21T12:31:32.374Z"
  },
  "91950b31-498e-4c1f-acee-f6a524fc9406": {
    "conversationName": "Weight-bearing progression after calcaneal osteotomy",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-25T16:43:33.660430Z",
    "messageCount": 8,
    "digest": "4b64716522a0b4e8",
    "importedAt": "2026-10-21T12:31:32.385Z"
  },
  "a8cd216e-c2b8-4e09-871d-d2d13d5b7585": {
    "conversationName": "Checking RAM and memory on Windows",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T13:05:53.791041Z",
    "messageCount": 157,
    "digest": "0ec9704617329fea",
    "importedAt": "2026-10-21T12:31:32.437Z"
  },
  "58aa30f6-3535-4ed3-b2a7-4cf08eb109c9": {
    "conversationName": "Borderline personality disorder symptoms",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-27T18:00:25.823991Z",
    "messageCount": 6,
    "digest": "5b8fe355b95028ce",
    "importedAt": "2026-10-21T12:31:32.464Z"
  },
  "91c59656-c345-4c15-a851-9fcd207bfbab": {
    "conversationName": "Bilingual index strategy",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-29T10:38:10.621298Z",
    "messageCount": 64,
    "digest": "e64b95f0ada2aa6d",
    "importedAt": "2026-10-21T12:31:32.500Z"
  },
  "accfc201-51c3-42bf-9464-971823887aee": {
    "conversationName": "Reducing self-criticism and judgment",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-28T22:52:07.597117Z",
    "messageCount": 2,
    "digest": "56b55254674c27bd",
    "importedAt": "2026-10-21T12:31:32.517Z"
  },
  "d7ffa8a1-19aa-4be5-90eb-62294b721093": {
    "conversationName": "Sierra Interactive vs Sierra Entertainment",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T20:40:49.129272Z",
    "messageCount": 4,
    "digest": "06b7eff4cbd9112b",
    "importedAt": "2026-10-21T12:31:32.535Z"
  },
  "460c2aec-cec7-4d68-a981-20627e13262a": {
    "conversationName": "US-Iran nuclear tensions and reality check",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T20:41:20.246928Z",
    "messageCount": 2,
    "digest": "074cc236d6fb1665",
    "importedAt": "2026-10-21T12:31:32.549Z"
  },
  "e8a774f4-5adc-46b3-befd-30afa4e6e39c": {
    "conversationName": "The parable of the talents explained",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T16:34:16.088066Z",
    "messageCount": 20,
    "digest": "a2c088bc94652701",
    "importedAt": "2026-10-21T12:31:32.567Z"
  },
  "9f679ede-a0e9-4559-b12f-cabc6fd4890e": {
    "conversationName": "Online identity compromise and data breach risks",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T13:03:49.681051Z",
    "messageCount": 58,
    "digest": "813dbcf802ce6511",
    "importedAt": "2026-10-21T12:31:32.594Z"
  },
  "8a0dcca4-9eac-4b1c-83c7-449a9da02456": {
    "conversationName": "Amazon and online shopping options in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-16T18:11:36.907701Z",
    "messageCount": 6,
    "digest": "e6de575cd943d279",
    "importedAt": "2026-10-21T12:31:32.606Z"
  },
  "9e92489f-66eb-4f0e-9125-47938c949b6c": {
    "conversationName": "White dot on Penelope's nose",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-16T14:33:55.305263Z",
    "messageCount": 2,
    "digest": "fbca23c2fa5f3649",
    "importedAt": "2026-10-21T12:31:32.623Z"
  },
  "0c43db6f-8dac-4cb5-935d-f4cfc7cee80e": {
    "conversationName": "Checking Wolt listing against vet recommendation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-16T13:48:28.650700Z",
    "messageCount": 2,
    "digest": "6d161f5ec25f6aa3",
    "importedAt": "2026-10-21T12:31:32.634Z"
  },
  "f7847680-ab42-4475-a4c2-37a017265945": {
    "conversationName": "Georgia's nicotine cap for vapes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-15T11:17:16.197038Z",
    "messageCount": 24,
    "digest": "6b62b5e07625d693",
    "importedAt": "2026-10-21T12:31:32.655Z"
  },
  "5ea43231-b5bc-44fb-93ea-55b54ed63729": {
    "conversationName": "US Visa Mastercard with Wildberries Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-15T10:42:57.456799Z",
    "messageCount": 6,
    "digest": "2f79e2cc4ed00893",
    "importedAt": "2026-10-21T12:31:32.670Z"
  },
  "5305e691-cc93-43ce-8615-e01a4fbe603a": {
    "conversationName": "Setting up SSH keys for GitHub on Windows",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-13T15:12:08.833637Z",
    "messageCount": 14,
    "digest": "65b4389047054154",
    "importedAt": "2026-10-21T12:31:32.685Z"
  },
  "faf088d2-6308-4a6f-9c8c-00cf5f644bf8": {
    "conversationName": "Telegram gifts and blockchain technology",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-12T18:49:12.313534Z",
    "messageCount": 8,
    "digest": "38dadce2ece099dd",
    "importedAt": "2026-10-21T12:31:32.698Z"
  },
  "ce68b43c-0aeb-4e8b-89d5-4467b02166d2": {
    "conversationName": "Finding and understanding life coaching",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-11T20:00:52.207734Z",
    "messageCount": 2,
    "digest": "b0a65145adcd08b4",
    "importedAt": "2026-10-21T12:31:32.712Z"
  },
  "89fc29f9-0fd6-4c5d-a3c1-71947793268a": {
    "conversationName": "Zoom camera not working on HP laptop",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-11T10:04:42.397764Z",
    "messageCount": 4,
    "digest": "ff4d9622ad86e57d",
    "importedAt": "2026-10-21T12:31:32.733Z"
  },
  "3eae6c6a-cdd5-43f7-9a48-67c51d6c9c13": {
    "conversationName": "I am in Alanya Turkey and I ne...",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T17:28:51.240012Z",
    "messageCount": 4,
    "digest": "ae94160272f9a774",
    "importedAt": "2026-10-21T12:31:32.753Z"
  },
  "f1fdb8d7-eebe-48c2-b860-3f07983c4c06": {
    "conversationName": "Penelope's situation and current status",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-06T16:33:55.080571Z",
    "messageCount": 111,
    "digest": "866475e60719cd43",
    "importedAt": "2026-10-21T12:31:32.817Z"
  },
  "e5dd5c66-10ef-4a48-9f0b-def41bdf9b5a": {
    "conversationName": "Rothschild pronunciation across languages",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-06T20:03:14.847619Z",
    "messageCount": 4,
    "digest": "53dba884e6a3653b",
    "importedAt": "2026-10-21T12:31:32.833Z"
  },
  "ce4e1c57-369c-4d5a-89ab-5a5b79b900ea": {
    "conversationName": "Booking.com pet declaration requirements",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T08:41:38.980515Z",
    "messageCount": 2,
    "digest": "b1a6305c08fb2006",
    "importedAt": "2026-10-21T12:31:32.845Z"
  },
  "c87f7ce8-e081-449a-ab0f-9189c2318bbc": {
    "conversationName": "Making cappuccino with a Bialetti Moka Express",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T08:02:59.935560Z",
    "messageCount": 4,
    "digest": "02ac3af802887dc6",
    "importedAt": "2026-10-21T12:31:32.857Z"
  },
  "5477319a-90c2-4c6d-858c-66ce28b39e3b": {
    "conversationName": "Buckwheat calorie content and nutritional value",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-03T06:44:49.844655Z",
    "messageCount": 2,
    "digest": "176dc63f94100150",
    "importedAt": "2026-10-21T12:31:32.871Z"
  },
  "6b3d86e9-f6d0-44bc-9378-d0d3d77b6bad": {
    "conversationName": "Why Wildberries chose its name",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T09:14:20.445660Z",
    "messageCount": 4,
    "digest": "18db6bf1f9c55406",
    "importedAt": "2026-10-21T12:31:32.885Z"
  },
  "dc4dd3ab-5ef2-4a14-b7cd-c1dae1609a6f": {
    "conversationName": "Calcaneal osteotomy recovery: nerve pain or overactivity",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T08:43:02.921252Z",
    "messageCount": 6,
    "digest": "7358d176d07e7248",
    "importedAt": "2026-10-21T12:31:32.903Z"
  },
  "a423be66-63ce-4cea-a3de-6a99e40dd1f9": {
    "conversationName": "24/7 convenience stores in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-01T22:22:19.693246Z",
    "messageCount": 2,
    "digest": "65b0a9210e6e6aa1",
    "importedAt": "2026-10-21T12:31:32.915Z"
  },
  "5505f0d5-2539-4eea-a5ed-5a1833d7690e": {
    "conversationName": "Making money with P2P TON",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-01T19:31:06.360818Z",
    "messageCount": 28,
    "digest": "a6f6dbab2f8a004e",
    "importedAt": "2026-10-21T12:31:32.930Z"
  },
  "5dc5bce9-a420-40f8-b14f-5889294626bd": {
    "conversationName": "TNET and its connection to Telegram",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-01T13:47:42.317986Z",
    "messageCount": 57,
    "digest": "8a58850085765219",
    "importedAt": "2026-10-21T12:31:32.968Z"
  },
  "be6ce4cc-8ac8-4600-933a-fe268aab0bac": {
    "conversationName": "Accessing Katya's WhatsApp account risks",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T20:21:28.721923Z",
    "messageCount": 2,
    "digest": "773e918832a60c91",
    "importedAt": "2026-10-21T12:31:32.986Z"
  },
  "ba5be707-b07d-4862-979c-45c40a6dc302": {
    "conversationName": "💬 How many patosi wallets exist…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T01:38:08.807448Z",
    "messageCount": 262,
    "digest": "44600e7e621a1de0",
    "importedAt": "2026-10-21T12:31:33.058Z"
  },
  "b75b1cc6-40e3-4f82-97ac-cd0e6cefc19f": {
    "conversationName": "Claude Code API rate limit issues on Pro plan",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-08T13:50:48.459488Z",
    "messageCount": 16,
    "digest": "eb5d824c727b5231",
    "importedAt": "2026-10-21T12:31:33.076Z"
  },
  "05f502ea-60d1-4d29-8a3d-929aab0006a2": {
    "conversationName": "Online shopping options for new Georgia residents",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-05T17:37:26.332886Z",
    "messageCount": 4,
    "digest": "8089c87c23650ef9",
    "importedAt": "2026-10-21T12:31:33.089Z"
  },
  "b3a59518-c591-49ee-bf9b-a4a01b9853c8": {
    "conversationName": "Learning Russian with native speakers around you",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-04T17:25:35.724025Z",
    "messageCount": 4,
    "digest": "062e93e463dea780",
    "importedAt": "2026-10-21T12:31:33.106Z"
  },
  "dce485e9-6553-4663-9326-e9c07f8177d9": {
    "conversationName": "SVG compression and path optimization tools",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-04T14:24:54.735426Z",
    "messageCount": 66,
    "digest": "8d37d8e318ef660b",
    "importedAt": "2026-10-21T12:31:33.144Z"
  },
  "57fa0150-0107-410e-91b6-342cc69f8d25": {
    "conversationName": "Translating Matt Levine's style to Russian",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-03T21:38:56.984336Z",
    "messageCount": 2,
    "digest": "7fc516547dd38ff7",
    "importedAt": "2026-10-21T12:31:33.175Z"
  },
  "ee759f22-5c17-4068-882d-46ad2a69835a": {
    "conversationName": "Pediatric pain reliever safety by age and dose",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-27T22:53:18.089747Z",
    "messageCount": 6,
    "digest": "c23b84f02b98bda6",
    "importedAt": "2026-10-21T12:31:33.211Z"
  },
  "ea3eeb0f-9016-4ef4-9de2-c8b9ee743277": {
    "conversationName": "Getting a Georgian eSIM for iPhone",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-27T10:38:30.006543Z",
    "messageCount": 20,
    "digest": "c84246146e684037",
    "importedAt": "2026-10-21T12:31:33.236Z"
  },
  "0f928900-ef46-4bd6-8074-6fdade29ba6e": {
    "conversationName": "Normal body temperature and fever thresholds in children",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-26T13:22:39.809202Z",
    "messageCount": 4,
    "digest": "62bf972930fbfa8f",
    "importedAt": "2026-10-21T12:31:33.251Z"
  },
  "0d0bf232-647d-43c6-8d8c-c9abcc44305f": {
    "conversationName": "Masonic lapel pin identification",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-23T16:23:40.384077Z",
    "messageCount": 6,
    "digest": "723a827b92873a23",
    "importedAt": "2026-10-21T12:31:33.267Z"
  },
  "882148a0-9abe-46c0-ae3a-c416651b8600": {
    "conversationName": "Dutch TIN number validation and structure",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-23T11:46:55.173699Z",
    "messageCount": 4,
    "digest": "34a47eb01c05066e",
    "importedAt": "2026-10-21T12:31:33.284Z"
  },
  "8d29e604-babe-4b36-851a-54fe6911ecf6": {
    "conversationName": "Google Workspace alias domain login issues",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-23T07:49:19.462720Z",
    "messageCount": 52,
    "digest": "849c2ed586732a61",
    "importedAt": "2026-10-21T12:31:33.317Z"
  },
  "70a60535-4f19-465e-8529-cc7b9c1914b6": {
    "conversationName": "West Wing sermon on mutual submission",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-22T22:30:54.395568Z",
    "messageCount": 18,
    "digest": "2e2248b1fc2021bf",
    "importedAt": "2026-10-21T12:31:33.343Z"
  },
  "fef7fd01-5082-4ab0-ae5c-be16153b044d": {
    "conversationName": "Seren & Human Errors",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-21T22:15:58.538440Z",
    "messageCount": 126,
    "digest": "44a5db8bbb4eeafa",
    "importedAt": "2026-10-21T12:31:33.379Z"
  },
  "4058db57-1f1c-4c6f-a0da-c605ce8c3c30": {
    "conversationName": "Venezuela real estate investment opportunity",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-20T12:02:33.008699Z",
    "messageCount": 2,
    "digest": "5174b3d68b26f745",
    "importedAt": "2026-10-21T12:31:33.396Z"
  },
  "1177f778-8e29-400d-a4be-1cf0b6d4a3eb": {
    "conversationName": "Contrado: UK alternative to Spoonflower",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-20T07:09:23.122405Z",
    "messageCount": 6,
    "digest": "1152fed29ec86f85",
    "importedAt": "2026-10-21T12:31:33.410Z"
  },
  "5b5fddc8-1387-4665-a8e4-7b93aaf51e24": {
    "conversationName": "💬 What is better for charging cl…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-19T21:43:26.845027Z",
    "messageCount": 4,
    "digest": "69fba5b45f1cd797",
    "importedAt": "2026-10-21T12:31:33.425Z"
  },
  "45253e06-dc30-40d6-af9a-ea3feee8ebe1": {
    "conversationName": "Setting up SSH commits on GitHub for Windows",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-14T16:59:51.526501Z",
    "messageCount": 2,
    "digest": "c2b48222c0fdb801",
    "importedAt": "2026-10-21T12:31:33.439Z"
  },
  "87ad4098-9511-497c-9ddb-dc29854b364a": {
    "conversationName": "💬 I need to buy kittybiome gut r…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-15T08:38:17.453539Z",
    "messageCount": 12,
    "digest": "f4129d9aa7b67241",
    "importedAt": "2026-10-21T12:31:33.455Z"
  },
  "447e3539-8636-4638-acb4-5a1b51d3268e": {
    "conversationName": "Head injury assessment after fall on concrete",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-17T14:18:30.947339Z",
    "messageCount": 12,
    "digest": "7e490c44582a80b4",
    "importedAt": "2026-10-21T12:31:33.476Z"
  },
  "7fc6090d-cb57-4e69-b03c-964d8db2b9ef": {
    "conversationName": "US-Iran war overview and outlook",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-21T19:41:29.192996Z",
    "messageCount": 18,
    "digest": "f60b1a5f0244d38c",
    "importedAt": "2026-10-21T12:31:33.502Z"
  },
  "5e7c53b1-3f68-4815-8f39-2b6389b35109": {
    "conversationName": "HP Smart Tank printer setup guide",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-18T17:08:26.016594Z",
    "messageCount": 58,
    "digest": "85bd9660deb66e56",
    "importedAt": "2026-10-21T12:31:33.524Z"
  },
  "dd6b1380-1939-42c9-a42a-fc2fffe9be55": {
    "conversationName": "Affordable international phone plans for iPhone",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-19T09:18:28.674028Z",
    "messageCount": 14,
    "digest": "51b8b0ffd77458b5",
    "importedAt": "2026-10-21T12:31:33.540Z"
  },
  "f4f05848-5fb4-4ee5-8469-a7084d33e588": {
    "conversationName": "Document translation to English",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-24T15:48:08.250926Z",
    "messageCount": 2,
    "digest": "74394281cb89f546",
    "importedAt": "2026-10-21T12:31:33.558Z"
  },
  "aab55838-2602-4922-b454-31e9bc2d03c0": {
    "conversationName": "Source and science of mysterious humming",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-24T17:38:43.815938Z",
    "messageCount": 40,
    "digest": "e2bb3c48949a6511",
    "importedAt": "2026-10-21T12:31:33.578Z"
  },
  "96458699-d915-496d-8476-85aa0a308646": {
    "conversationName": "American public reaction to Iran conflict",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-31T20:27:00.466857Z",
    "messageCount": 10,
    "digest": "15f4b087b9b68812",
    "importedAt": "2026-10-21T12:31:33.609Z"
  },
  "f19eca62-33f9-4b8e-b00e-1bb628ec4671": {
    "conversationName": "Neuroscience PhD program deadlines and application timeline",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-01T12:18:42.762099Z",
    "messageCount": 106,
    "digest": "a80e371fbd896d75",
    "importedAt": "2026-10-21T12:31:33.666Z"
  },
  "0ff8e5ba-04ed-486f-ab34-82e81f4242f1": {
    "conversationName": "Mars sample return and extraterrestrial life evidence",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-01T22:31:05.783582Z",
    "messageCount": 72,
    "digest": "00494ff1058681fd",
    "importedAt": "2026-10-21T12:31:33.689Z"
  },
  "bb1a660d-d8bf-4169-a8e4-c6337c22d899": {
    "conversationName": "Escitalopram receptor occupancy and MDMA subjective effects",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-03T07:20:55.521482Z",
    "messageCount": 6,
    "digest": "0f3c6617a643753a",
    "importedAt": "2026-10-21T12:31:33.708Z"
  },
  "dc532f78-7e70-40e3-83a6-5a326cb06db0": {
    "conversationName": "Melania and Ivanka's reduced public presence",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-02T14:03:33.817880Z",
    "messageCount": 4,
    "digest": "831a31e81fcb23ce",
    "importedAt": "2026-10-21T12:31:33.728Z"
  },
  "99dac918-8d2a-4a52-8947-3b8cf8d8f800": {
    "conversationName": "Debunking the mysterious creature video",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-06T12:23:41.731845Z",
    "messageCount": 6,
    "digest": "6794565633a880ca",
    "importedAt": "2026-10-21T12:31:33.749Z"
  },
  "c1aee3fd-a402-4d64-86f4-bbe4ebe4ef70": {
    "conversationName": "How the electoral college works",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-08T12:48:39.664704Z",
    "messageCount": 4,
    "digest": "45bcac4de3f5ca65",
    "importedAt": "2026-10-21T12:31:33.770Z"
  },
  "6ceffc3f-259f-481a-ab84-090b98111d57": {
    "conversationName": "Unlocking extra characters in SoulCalibur VI",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-09T16:32:56.104946Z",
    "messageCount": 4,
    "digest": "d5c185f00bce9916",
    "importedAt": "2026-10-21T12:31:33.786Z"
  },
  "122879af-edd8-454c-a50c-76ae2a94ae38": {
    "conversationName": "Trump and the Epstein files mystery",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-13T10:07:23.900116Z",
    "messageCount": 12,
    "digest": "277a6f95a28d0567",
    "importedAt": "2026-10-21T12:31:33.809Z"
  },
  "909419de-78ad-45a1-ae03-81cc0b6a0d8c": {
    "conversationName": "India's independence from British rule",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-14T09:02:26.672089Z",
    "messageCount": 4,
    "digest": "3c7f927d02e86b78",
    "importedAt": "2026-10-21T12:31:33.829Z"
  },
  "5c8c3502-0fd7-4142-aaed-01e409b70c8c": {
    "conversationName": "Claritin safety for children",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-14T18:09:43.159400Z",
    "messageCount": 2,
    "digest": "7c2bd9cf45d74570",
    "importedAt": "2026-10-21T12:31:33.852Z"
  },
  "82cf3c25-08d3-4661-b2ad-734efb80554d": {
    "conversationName": "Credo card 3DS lockout on Glovo and Bolt",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-15T09:41:36.371407Z",
    "messageCount": 2,
    "digest": "58075ab5557bbd41",
    "importedAt": "2026-10-21T12:31:33.873Z"
  },
  "d6567410-8373-4d22-b1a2-e01f5d0b2563": {
    "conversationName": "Trump's war resolution and fentanyl statistics claims",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-16T17:09:03.803237Z",
    "messageCount": 60,
    "digest": "2654069b8b187a22",
    "importedAt": "2026-10-21T12:31:33.899Z"
  },
  "7b2dd883-d18f-4575-93f4-767d689fcf77": {
    "conversationName": "Things to do at Mtatsminda Park",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-18T19:14:17.554303Z",
    "messageCount": 4,
    "digest": "05c5d7347d5937ee",
    "importedAt": "2026-10-21T12:31:33.923Z"
  },
  "6fea3059-29ec-482d-a21b-5797e9679c7e": {
    "conversationName": "Weekly news briefing and analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-19T16:25:34.670203Z",
    "messageCount": 148,
    "digest": "27ca7b29c9752952",
    "importedAt": "2026-10-21T12:31:33.988Z"
  },
  "cb7737b6-29fa-4538-9580-419754cdc770": {
    "conversationName": "Nicotine-free disposable vapes in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-19T16:57:56.848046Z",
    "messageCount": 8,
    "digest": "ebe53ad3e138f010",
    "importedAt": "2026-10-21T12:31:34.004Z"
  },
  "50794b73-83a5-4049-8f4e-a8b17fcb2924": {
    "conversationName": "Diagnosing hard drive issues from command line",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-21T12:12:08.205512Z",
    "messageCount": 102,
    "digest": "0bdbdd5b453f4e3e",
    "importedAt": "2026-10-21T12:31:34.055Z"
  },
  "44c6711a-0454-43af-9a91-6ec5842f1c65": {
    "conversationName": "Georgian drug culture and legal landscape",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-20T09:22:34.957785Z",
    "messageCount": 8,
    "digest": "a3cc4db95346ab60",
    "importedAt": "2026-10-21T12:31:34.072Z"
  },
  "2188998f-c414-49c4-9992-f121ed2e102e": {
    "conversationName": "Alpha methyl tryptamine pharmacology and serotonin mechanisms",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-20T19:26:21.996582Z",
    "messageCount": 20,
    "digest": "ae5e5030272aa01a",
    "importedAt": "2026-10-21T12:31:34.097Z"
  },
  "ed86ea6d-68ee-4640-aba3-520031bc59e0": {
    "conversationName": "💬 OK, I’ve been putting somethin…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-21T13:34:24.153753Z",
    "messageCount": 6,
    "digest": "cdfc3de03d90f429",
    "importedAt": "2026-10-21T12:31:34.116Z"
  },
  "e68f8dd1-04fd-4891-9450-f46edc079a47": {
    "conversationName": "Street Fighter live-action movie 2026",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-21T13:50:12.878419Z",
    "messageCount": 14,
    "digest": "1d89aeb06a56a850",
    "importedAt": "2026-10-21T12:31:34.135Z"
  },
  "6b0b6e6c-7e71-4d4f-ac59-db6b55dbf225": {
    "conversationName": "Controlled substance pharmacies in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-22T08:44:54.844614Z",
    "messageCount": 4,
    "digest": "e77599306c4ea7f0",
    "importedAt": "2026-10-21T12:31:34.152Z"
  },
  "2b257eef-cdb8-4ae6-9383-4b90448263d8": {
    "conversationName": "Palatalization in Russian phonology",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-23T16:41:29.320288Z",
    "messageCount": 10,
    "digest": "a285fbc2e7fde9a5",
    "importedAt": "2026-10-21T12:31:34.170Z"
  },
  "fa248006-250c-4672-996f-987d8352a1a8": {
    "conversationName": "💬 Our that has told us to give o…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-23T22:43:38.464461Z",
    "messageCount": 62,
    "digest": "3c6a40b6ce6c5b71",
    "importedAt": "2026-10-21T12:31:34.197Z"
  },
  "f5116889-6afa-4c08-b7f5-dc09d19c9f2e": {
    "conversationName": "Days alive from March 2017 to April 2026",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-24T09:18:16.026847Z",
    "messageCount": 6,
    "digest": "bd3aabc3394e53ab",
    "importedAt": "2026-10-21T12:31:34.212Z"
  },
  "3d3b3d93-30f0-4547-81c6-68a8312485b6": {
    "conversationName": "Gastric microbiome in humans and cats",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-24T13:21:00.802124Z",
    "messageCount": 2,
    "digest": "7e9ca0bcc3efe51d",
    "importedAt": "2026-10-21T12:31:34.232Z"
  },
  "313eb25c-a0a9-42ca-b9d8-f67c1fac29e0": {
    "conversationName": "Landlady's refund calculation audit",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-27T17:48:22.709539Z",
    "messageCount": 2,
    "digest": "0a62a4f28a81c1eb",
    "importedAt": "2026-10-21T12:31:34.248Z"
  },
  "79e0baa9-5865-4474-9d18-a850d65ab452": {
    "conversationName": "Receiving mail at Hampton Inn",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-27T22:13:36.663454Z",
    "messageCount": 8,
    "digest": "8c0a635936c0511e",
    "importedAt": "2026-10-21T12:31:34.263Z"
  },
  "0ccacc8b-9cf8-46a0-b4e0-925b5de9d373": {
    "conversationName": "2026 social security disability earnings limit",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-28T17:48:49.940843Z",
    "messageCount": 8,
    "digest": "a5ec9666e67c3774",
    "importedAt": "2026-10-21T12:31:34.278Z"
  },
  "1a22d3ef-9325-491d-848c-43677991e7b4": {
    "conversationName": "Bitcoin transfer from Coinbase to Atomic Wallet not appearing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-29T23:42:57.423347Z",
    "messageCount": 28,
    "digest": "99438891b1ea6450",
    "importedAt": "2026-10-21T12:31:34.296Z"
  },
  "aedba2f0-fa65-49c7-ba2b-dad61fb786a9": {
    "conversationName": "Jon Stewart's return to the daily show",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-02T07:16:27.733870Z",
    "messageCount": 18,
    "digest": "f4e74e8821bb3f8c",
    "importedAt": "2026-10-21T12:31:34.318Z"
  },
  "70d2e1de-bb13-4d60-a11d-466450abbc4f": {
    "conversationName": "Ocean freight risks vs air shipping",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-04T18:33:12.575964Z",
    "messageCount": 4,
    "digest": "642b04cf259606df",
    "importedAt": "2026-10-21T12:31:34.338Z"
  },
  "a6c0f987-ad9b-4de2-a1ae-213b01923654": {
    "conversationName": "ACH transfers on Interactive Brokers",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-04T22:16:53.477870Z",
    "messageCount": 4,
    "digest": "8c429d3525e3f0d7",
    "importedAt": "2026-10-21T12:31:34.353Z"
  },
  "88db2300-de88-4c94-bd67-bdda7e481559": {
    "conversationName": "Laser photo epithelial treatment for skin rejuvenation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T15:00:51.381851Z",
    "messageCount": 6,
    "digest": "9b18c1eaaac0d6a7",
    "importedAt": "2026-10-21T12:31:34.370Z"
  },
  "c0237c13-f925-45e1-84d1-6d40ce879be0": {
    "conversationName": "Payoneer access for Russian users",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T15:54:46.335044Z",
    "messageCount": 2,
    "digest": "d21d227881a6bf44",
    "importedAt": "2026-10-21T12:31:34.390Z"
  },
  "d5883276-a48a-40aa-8002-d99504603ab1": {
    "conversationName": "Setting up Windows 11 with account",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-09T14:59:04.163601Z",
    "messageCount": 48,
    "digest": "f58db496e5284bbb",
    "importedAt": "2026-10-21T12:31:34.444Z"
  },
  "b7ecf2f1-11e1-4105-b92e-d8685ea9103e": {
    "conversationName": "Address change checklist",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-10T01:05:29.489741Z",
    "messageCount": 2,
    "digest": "17d9ef05e32c62ef",
    "importedAt": "2026-10-21T12:31:34.480Z"
  },
  "23feb617-5dd7-4860-810d-42197c469941": {
    "conversationName": "Moving phone number to Google Voice",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-13T13:39:50.565943Z",
    "messageCount": 144,
    "digest": "27e52a890b0ca9d1",
    "importedAt": "2026-10-21T12:31:34.560Z"
  },
  "345bdcb4-6323-402e-b347-8571c2b9e22f": {
    "conversationName": "Backing up Claude account data",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-14T13:37:47.595301Z",
    "messageCount": 12,
    "digest": "90bab20ffc058344",
    "importedAt": "2026-10-21T12:31:34.577Z"
  },
  "d120a7f8-5e03-40cd-b614-8ca6bd0c38aa": {
    "conversationName": "Backward captures in checkers",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-15T19:23:32.677959Z",
    "messageCount": 12,
    "digest": "1706cf7233615fae",
    "importedAt": "2026-10-21T12:31:34.593Z"
  },
  "2491ddcf-83cc-4697-ad0b-4ef0e063822c": {
    "conversationName": "Betamethasone for seborrheic dermatitis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-16T14:48:29.503994Z",
    "messageCount": 2,
    "digest": "5dabc2fb806e407c",
    "importedAt": "2026-10-21T12:31:34.608Z"
  },
  "4e783da1-6d4f-40a8-9b81-69949f3288dd": {
    "conversationName": "Continuity across accounts: a reflection on shared work",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:53:40.276518Z",
    "messageCount": 4,
    "digest": "364a64dfa79cfe02",
    "importedAt": "2026-10-21T12:31:34.626Z"
  },
  "462a8f9d-0387-4c3c-a55f-6c003eeaf867": {
    "conversationName": "Translating emotional confrontation to Russian",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-15T11:44:17.785846Z",
    "messageCount": 10,
    "digest": "60b70d08011c685d",
    "importedAt": "2026-10-21T12:31:35.593Z"
  },
  "f968f7e4-b552-4ad3-9dff-ac420bd90ca7": {
    "conversationName": "Creating a project understanding plan",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-15T22:26:33.953753Z",
    "messageCount": 18,
    "digest": "00d51f67c26d413a",
    "importedAt": "2026-10-21T12:31:35.613Z"
  },
  "00982e61-da85-4b47-aa20-aef39e1dc34c": {
    "conversationName": "Legal strategies in domestic violence custody cases",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T19:48:51.738129Z",
    "messageCount": 8,
    "digest": "cafce5205a906b5b",
    "importedAt": "2026-10-21T12:31:35.636Z"
  },
  "25828b14-3842-44fb-b328-147d6e8db431": {
    "conversationName": "Fleeing domestic violence: Georgian passport timeline",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T21:34:59.766087Z",
    "messageCount": 27,
    "digest": "ac992dfb7b5c9134",
    "importedAt": "2026-10-21T12:31:35.684Z"
  },
  "97db290c-83bc-4128-8947-f5361c134b70": {
    "conversationName": "Criminal allegations in Russian civil custody cases",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T16:21:06.590808Z",
    "messageCount": 56,
    "digest": "0a69c5eb5f8cb952",
    "importedAt": "2026-10-21T12:31:35.761Z"
  },
  "23e95ec1-fbc4-42a0-837d-884d12131472": {
    "conversationName": "Protecting children from psychological harm in abusive situations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T17:00:22.597666Z",
    "messageCount": 2,
    "digest": "79911c084814cde4",
    "importedAt": "2026-10-21T12:31:35.792Z"
  },
  "e5737827-3484-4e10-bada-a2762f5015bc": {
    "conversationName": "Preparing custody case communication for lawyers",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T22:28:55.805754Z",
    "messageCount": 54,
    "digest": "125640b742881413",
    "importedAt": "2026-10-21T12:31:35.833Z"
  },
  "ee687ce7-f0a8-4078-bdab-d335e34e3d9c": {
    "conversationName": "Concealing children's location in Russian custody dispute",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-19T09:02:54.364230Z",
    "messageCount": 12,
    "digest": "cbd4f192b7e847ad",
    "importedAt": "2026-10-21T12:31:35.856Z"
  },
  "77cdbc36-4dd2-427b-9b73-a5fd88dbc5cb": {
    "conversationName": "Russian emigration rates and monthly trends",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-19T12:56:55.543023Z",
    "messageCount": 22,
    "digest": "cf8b69d69ab79b76",
    "importedAt": "2026-10-21T12:31:35.896Z"
  },
  "15312465-5820-4aa6-b4d3-91a818fbc297": {
    "conversationName": "Russian custody case with travel ban and safety concerns",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-23T12:39:39.198539Z",
    "messageCount": 2,
    "digest": "e5f3fd538f9275ce",
    "importedAt": "2026-10-21T12:31:35.916Z"
  },
  "3c3ba314-98c5-4dd6-8e67-eb28752a3980": {
    "conversationName": "Russian custody case with travel ban and safety risks",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-23T12:55:09.245361Z",
    "messageCount": 11,
    "digest": "62925783174eb34c",
    "importedAt": "2026-10-21T12:31:35.939Z"
  },
  "4766a9f1-55ef-4214-896c-472f45709793": {
    "conversationName": "Legal strategy for upcoming hearing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-29T14:17:27.702065Z",
    "messageCount": 22,
    "digest": "ced9bf07a0d115a5",
    "importedAt": "2026-10-21T12:31:35.965Z"
  },
  "88a184db-4d42-4b21-b41d-b24cdc2fca01": {
    "conversationName": "💬 Okay custody court is happenin…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-24T21:14:43.209718Z",
    "messageCount": 77,
    "digest": "2f30454b6721ee29",
    "importedAt": "2026-10-21T12:31:35.999Z"
  },
  "040113a8-6a76-4e7d-8b51-649fa360b7bd": {
    "conversationName": "Switching Foxford enrollment to attestation mid-year",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-28T11:24:44.562767Z",
    "messageCount": 2,
    "digest": "8658c239110c7a9b",
    "importedAt": "2026-10-21T12:31:36.015Z"
  },
  "9588c3ce-e870-4bfc-83df-aec1380e41ca": {
    "conversationName": "Custody changes and appeal procedures in Russian law",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T11:39:35.469994Z",
    "messageCount": 6,
    "digest": "5850bef7a71e7557",
    "importedAt": "2026-10-21T12:31:36.033Z"
  },
  "06c9642b-8cc0-427d-bada-b9bc3091fa47": {
    "conversationName": "Alisa surveillance risks and Russian state data sharing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T07:41:25.703710Z",
    "messageCount": 18,
    "digest": "83af9815f835f244",
    "importedAt": "2026-10-21T12:31:36.054Z"
  },
  "29d6ac16-8678-4740-877f-eadbb18868b3": {
    "conversationName": "Legal response strategy for major settlement",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-16T20:53:20.292048Z",
    "messageCount": 151,
    "digest": "23cdd5313091ae92",
    "importedAt": "2026-10-21T12:31:36.109Z"
  },
  "fb34d38a-01ee-4f15-9fd7-18ef11851c27": {
    "conversationName": "Translating personal crisis and emotional breakdown",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T16:55:10.246203Z",
    "messageCount": 13,
    "digest": "58080363bd1a1929",
    "importedAt": "2026-10-21T12:31:36.130Z"
  },
  "99dfcfc7-3b7f-4ae2-a314-95e838595e3c": {
    "conversationName": "PDF translation to Russian",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T13:51:31.105603Z",
    "messageCount": 42,
    "digest": "60f8629f112e8505",
    "importedAt": "2026-10-21T12:31:36.158Z"
  },
  "4141b8d6-4dc1-4a13-8d4a-b4389ff8cf5b": {
    "conversationName": "💬 Translate the content of the p…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T13:22:58.582235Z",
    "messageCount": 18,
    "digest": "e4e43aed07b667bb",
    "importedAt": "2026-10-21T12:31:36.193Z"
  },
  "090d8c84-9c89-4846-8be6-da43be6078c3": {
    "conversationName": "PDF translation to English",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-12T07:04:31.735375Z",
    "messageCount": 68,
    "digest": "31ed3e2a84c5bc4d",
    "importedAt": "2026-10-21T12:31:36.240Z"
  },
  "5a5cda15-3f43-4db6-b843-4c1a0a511841": {
    "conversationName": "DID prevalence and structural violence in Russia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-04T11:04:34.110240Z",
    "messageCount": 9,
    "digest": "99db5fd8da3f3d01",
    "importedAt": "2026-10-21T12:31:36.271Z"
  },
  "e845b07c-277c-4481-b8a8-d82706e8b8ea": {
    "conversationName": "Telegram marketplace for services and crypto payments",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T19:56:40.250873Z",
    "messageCount": 8,
    "digest": "a48eef26ddfbcce5",
    "importedAt": "2026-10-21T12:31:36.296Z"
  },
  "578ce088-1e3e-4e4c-874c-ecb06a29c4f9": {
    "conversationName": "Custody weaponization and coercive control",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T10:26:56.621818Z",
    "messageCount": 2,
    "digest": "21ae9b3ddd280f61",
    "importedAt": "2026-10-21T12:31:36.316Z"
  },
  "cf8acad4-47d1-4b0a-9f5d-40ee27a7f930": {
    "conversationName": "Conversational Russian immersion learning",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-06T17:11:32.424259Z",
    "messageCount": 38,
    "digest": "ef279e71d22a2d73",
    "importedAt": "2026-10-21T12:31:36.341Z"
  },
  "85cd3d52-a0b0-449b-8a1b-451b9c7c825d": {
    "conversationName": "Paying for Russian groceries with crypto",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-01T09:28:19.780379Z",
    "messageCount": 2,
    "digest": "4f4ecde5958b826f",
    "importedAt": "2026-10-21T12:31:36.363Z"
  },
  "8cd5f53d-1e30-4559-80d4-ca56908c20d9": {
    "conversationName": "Russia's economic tipping point and financial runway",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-14T21:44:03.448344Z",
    "messageCount": 6,
    "digest": "8bbb122245850936",
    "importedAt": "2026-10-21T12:31:36.388Z"
  },
  "4f15128b-71bc-4a4f-915c-3afe4b763a4f": {
    "conversationName": "Remote Android development environment with encrypted messaging",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-18T09:57:28.736827Z",
    "messageCount": 4,
    "digest": "ab195e4383422402",
    "importedAt": "2026-10-21T12:31:36.405Z"
  },
  "331de7f9-fd94-4ee3-b3df-96143e21a401": {
    "conversationName": "Document review and Russian translation for Georgian law firm",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-24T16:59:15.752394Z",
    "messageCount": 22,
    "digest": "dd8ddb4387291ffc",
    "importedAt": "2026-10-21T12:31:36.424Z"
  },
  "308f3d1b-be7b-4bdf-abad-0f2841fe962f": {
    "conversationName": "Understanding boundaries and consequences",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-20T17:04:51.997672Z",
    "messageCount": 133,
    "digest": "11610c4dc647e4e5",
    "importedAt": "2026-10-21T12:31:36.466Z"
  },
  "e552fa7d-1352-4ebc-a752-4bc5ff0ed7a6": {
    "conversationName": "Russian custody and visitation enforcement across borders",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-25T14:52:29.988942Z",
    "messageCount": 46,
    "digest": "d37818e97a05c5b0",
    "importedAt": "2026-10-21T12:31:36.496Z"
  },
  "65b2b5a1-0cc3-45f4-bf14-ba6f1f08d48e": {
    "conversationName": "Legal negotiation strategy review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-26T16:58:01.647913Z",
    "messageCount": 36,
    "digest": "9130872cb88b966b",
    "importedAt": "2026-10-21T12:31:36.516Z"
  },
  "db506f2e-df48-4740-96ee-5cb1202ae48b": {
    "conversationName": "Preserving narrative continuity across accounts",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:12:59.118625Z",
    "messageCount": 4,
    "digest": "1ce29709166b2a7d",
    "importedAt": "2026-10-21T12:31:36.530Z"
  },
  "755b29bd-1bc3-4909-8d04-26e509dfb1bf": {
    "conversationName": "Opening bank accounts in Tbilisi as non-residents",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-23T10:28:13.470389Z",
    "messageCount": 2,
    "digest": "2c786ca8500f713f",
    "importedAt": "2026-10-21T12:31:36.992Z"
  },
  "6e73cc76-3682-44e2-8579-219fe72b5a86": {
    "conversationName": "Custom birthday cake with Russian text in Saburtalo",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-23T10:24:47.101023Z",
    "messageCount": 14,
    "digest": "a5f319ef6218e713",
    "importedAt": "2026-10-21T12:31:37.014Z"
  },
  "3e6e4545-01d9-47f1-a1a8-9469834288e9": {
    "conversationName": "Finding Terro ant traps in Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-29T11:46:24.270261Z",
    "messageCount": 4,
    "digest": "c65961bba2a2dd47",
    "importedAt": "2026-10-21T12:31:37.031Z"
  },
  "f34f433f-0983-48cc-b728-b6c2f54cd9ea": {
    "conversationName": "Deposit insurance coverage update",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-01T07:14:58.698716Z",
    "messageCount": 2,
    "digest": "85ed3de0b6aa0c7d",
    "importedAt": "2026-10-21T12:31:37.059Z"
  },
  "8fe5082e-c437-49e1-8c6a-57ce40a9fc8c": {
    "conversationName": "Moving to Batumi: practical considerations for families",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T09:44:06.203970Z",
    "messageCount": 4,
    "digest": "938dfd4c97905cd9",
    "importedAt": "2026-10-21T12:31:37.082Z"
  },
  "55d9d950-66af-4d32-8fc1-376fae9ce752": {
    "conversationName": "Notary appointments in Georgia for Russian citizens",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T10:33:10.586116Z",
    "messageCount": 8,
    "digest": "951aa90652833037",
    "importedAt": "2026-10-21T12:31:37.115Z"
  },
  "37acc581-c8e1-43c7-8b75-5dba534df9f8": {
    "conversationName": "Georgian Citizenship & Humanitarian Aid",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T09:05:16.109729Z",
    "messageCount": 16,
    "digest": "127a0a35bfdeae87",
    "importedAt": "2026-10-21T12:31:37.153Z"
  },
  "ad475b9b-809f-488e-a1a6-a1e990c3dcf4": {
    "conversationName": "School year end date in Batumi Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T09:54:21.632158Z",
    "messageCount": 20,
    "digest": "4333e82a4d71247a",
    "importedAt": "2026-10-21T12:31:37.177Z"
  },
  "22e7e4b9-615e-4539-bed3-f03ec7d89cf0": {
    "conversationName": "Russian school calendar in Batumi Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T09:59:38.441915Z",
    "messageCount": 4,
    "digest": "ab0e5ae16fb65ff9",
    "importedAt": "2026-10-21T12:31:37.199Z"
  },
  "e1b292bd-b8cd-475e-84d4-84b0681694a0": {
    "conversationName": "Batumi Airports & GameStonk & Telegram",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T17:53:20.370797Z",
    "messageCount": 48,
    "digest": "e444f233e1bac201",
    "importedAt": "2026-10-21T12:31:37.229Z"
  },
  "8181cd09-ea1a-46f7-8dd1-978353d47ea7": {
    "conversationName": "Relocating family to Georgia: housing and school planning",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T10:20:54.136807Z",
    "messageCount": 14,
    "digest": "4bebeae4944ad2b9",
    "importedAt": "2026-10-21T12:31:37.248Z"
  },
  "2aead262-abdf-4833-9c99-a9fd82bc88b8": {
    "conversationName": "Settling in Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T12:17:05.291616Z",
    "messageCount": 87,
    "digest": "34990a442dacb3d1",
    "importedAt": "2026-10-21T12:31:37.305Z"
  },
  "e4264f79-085a-48b6-8e54-d30c6f04a817": {
    "conversationName": "Russian Education",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T15:26:30.141483Z",
    "messageCount": 21,
    "digest": "87d1d494edd160c5",
    "importedAt": "2026-10-21T12:31:37.343Z"
  },
  "6803ece7-054d-4555-9d26-f6b4851bea47": {
    "conversationName": "Russian residency requirements for Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T15:43:03.193433Z",
    "messageCount": 10,
    "digest": "c9152daf4e827ebd",
    "importedAt": "2026-10-21T12:31:37.361Z"
  },
  "5c551508-b767-4bfa-9cf4-2e8d936cbeaf": {
    "conversationName": "Temporary residence permits for Russian citizens in Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T15:56:13.837058Z",
    "messageCount": 6,
    "digest": "25cdd622de3fe381",
    "importedAt": "2026-10-21T12:31:37.381Z"
  },
  "e8f94338-fe2f-4989-a86c-2e8e9b96316c": {
    "conversationName": "Batumi education centers partnering with Foxford",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-15T23:15:12.228225Z",
    "messageCount": 10,
    "digest": "05dbc81af565e664",
    "importedAt": "2026-10-21T12:31:37.404Z"
  },
  "b0b0e758-f238-491e-98a3-ef59d80b154c": {
    "conversationName": "Transporting cats from Alanya to Sarp border crossing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-16T23:29:53.926727Z",
    "messageCount": 10,
    "digest": "0816e6f418975a28",
    "importedAt": "2026-10-21T12:31:37.422Z"
  },
  "4389cf3b-16a0-4357-b558-1395e767aca3": {
    "conversationName": "Georgia-Russia relations and 2008 war aftermath",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-17T20:24:28.214747Z",
    "messageCount": 160,
    "digest": "73760100acb8f55f",
    "importedAt": "2026-10-21T12:31:37.606Z"
  },
  "ca6d5c76-db91-4f83-b98a-e4dfbb8bac25": {
    "conversationName": "Getting married in Georgia this Saturday",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-26T23:04:10.341010Z",
    "messageCount": 20,
    "digest": "0ba8b4c9746989d5",
    "importedAt": "2026-10-21T12:31:37.659Z"
  },
  "1be79b64-4292-4293-be81-037fb8272d3a": {
    "conversationName": "Finding a dentist in Tbilisi with nomad insurance",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-22T21:04:15.223497Z",
    "messageCount": 38,
    "digest": "709d92f89ef8f3e3",
    "importedAt": "2026-10-21T12:31:37.697Z"
  },
  "d7ed553b-93ed-4b14-aff6-add3a1078791": {
    "conversationName": "Dental clinic referral gone wrong",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-24T09:03:23.364386Z",
    "messageCount": 61,
    "digest": "fa5205ef79036b1d",
    "importedAt": "2026-10-21T12:31:37.731Z"
  },
  "74f6f1ee-b557-4850-b70c-717030f030bc": {
    "conversationName": "Finding apartments in Tbilisi near a school",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-26T13:25:45.145941Z",
    "messageCount": 12,
    "digest": "73b140eccba8fb20",
    "importedAt": "2026-10-21T12:31:37.751Z"
  },
  "bdc57530-bc65-4f43-823f-2c378fd3c4d1": {
    "conversationName": "Temporary rental sites in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-27T15:13:20.171371Z",
    "messageCount": 2,
    "digest": "e072b00378c90fc3",
    "importedAt": "2026-10-21T12:31:37.767Z"
  },
  "161be93b-d8fc-4ad5-9221-22d9f285215b": {
    "conversationName": "Neuroscience PhD programs in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-27T21:59:40.522539Z",
    "messageCount": 47,
    "digest": "e4bd8617dad9ce93",
    "importedAt": "2026-10-21T12:31:37.791Z"
  },
  "45600aa7-00e3-41dc-8c60-337c0abaf875": {
    "conversationName": "Georgian alphabet and hand gestures",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-29T12:35:07.857445Z",
    "messageCount": 8,
    "digest": "6976ce9f0b71c441",
    "importedAt": "2026-10-21T12:31:37.808Z"
  },
  "88e15524-9a63-45a8-94ec-1c0590f648fc": {
    "conversationName": "Paying Georgian school with US credit card",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-29T19:42:04.874273Z",
    "messageCount": 14,
    "digest": "090aec3f084b699d",
    "importedAt": "2026-10-21T12:31:37.829Z"
  },
  "51384291-2059-474b-a8e3-64fd33c33e43": {
    "conversationName": "Opening a GEL account at Ziraat Bank Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T06:47:29.293151Z",
    "messageCount": 6,
    "digest": "0c43667a889f1360",
    "importedAt": "2026-10-21T12:31:37.859Z"
  },
  "3087a51c-fc2a-4547-92b7-a8342656475f": {
    "conversationName": "Marriage",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-24T15:18:50.144354Z",
    "messageCount": 48,
    "digest": "4c55e4d2df2f05ca",
    "importedAt": "2026-10-21T12:31:37.890Z"
  },
  "36ca3d83-df09-4f45-9459-e23d5d80f5ba": {
    "conversationName": "Read with Kamil",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T15:48:12.662613Z",
    "messageCount": 4,
    "digest": "994b70eafd44fc0c",
    "importedAt": "2026-10-21T12:31:37.907Z"
  },
  "35ac3078-e132-4563-ba67-b549351ba4eb": {
    "conversationName": "Georgia residency requirements for unmarried couples",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T09:01:25.598901Z",
    "messageCount": 22,
    "digest": "e11cf3a550d6c5e3",
    "importedAt": "2026-10-21T12:31:37.934Z"
  },
  "9509fae7-17aa-4195-859d-78be8bf3a884": {
    "conversationName": "Does Turkish Airlines fly from...",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T09:34:06.671667Z",
    "messageCount": 18,
    "digest": "10ee21299cbe432d",
    "importedAt": "2026-10-21T12:31:37.964Z"
  },
  "3b0f2ae8-b45a-407f-9335-040f5b35b232": {
    "conversationName": "Wire transfers to Georgia with Wise",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-06T17:20:54.758204Z",
    "messageCount": 2,
    "digest": "023a8ccefd4da220",
    "importedAt": "2026-10-21T12:31:38.000Z"
  },
  "bca6a3ce-9894-40df-8046-a37c52fdbd27": {
    "conversationName": "Camel Crush cigarette availability in Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T19:11:28.494039Z",
    "messageCount": 4,
    "digest": "e4ded455630ade24",
    "importedAt": "2026-10-21T12:31:38.035Z"
  },
  "ec653ce0-3415-431e-82a6-425a84dbc0f0": {
    "conversationName": "Finding community in Tbilisi while recovering from surgery",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T10:54:11.286564Z",
    "messageCount": 4,
    "digest": "786901f0cd88ba48",
    "importedAt": "2026-10-21T12:31:38.064Z"
  },
  "be10098d-917b-497c-abc5-bd0e05aa1ee4": {
    "conversationName": "MyMarket vs Amazon and Ozon for Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-01T11:25:49.903394Z",
    "messageCount": 2,
    "digest": "193b08387a05589d",
    "importedAt": "2026-10-21T12:31:38.082Z"
  },
  "2e947e7f-c143-41e0-9d03-8de1212b69fc": {
    "conversationName": "Russian keyboard stickers in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T13:10:42.509135Z",
    "messageCount": 4,
    "digest": "8b16ce27e89fd215",
    "importedAt": "2026-10-21T12:31:38.103Z"
  },
  "e3678695-4536-4f1d-a845-2f581f0c7824": {
    "conversationName": "School snack sharing and potential exclusion concerns",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-09T14:13:43.883712Z",
    "messageCount": 8,
    "digest": "0d267d26e5074ed2",
    "importedAt": "2026-10-21T12:31:38.122Z"
  },
  "dce2eb86-7dc5-411c-9f99-257ac2ee1af6": {
    "conversationName": "Electronics shop in Saburtalo Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-07T12:01:00.495015Z",
    "messageCount": 2,
    "digest": "f8f3af1536ed3521",
    "importedAt": "2026-10-21T12:31:38.143Z"
  },
  "a4be40dc-2fe1-42d9-b950-a8b991e5f876": {
    "conversationName": "Restarting boiler for hot water",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-19T16:58:50.869101Z",
    "messageCount": 6,
    "digest": "2d4ba7cf6d48db78",
    "importedAt": "2026-10-21T12:31:38.169Z"
  },
  "0786f8ea-a228-4d8a-8f5b-9dc957bd7a71": {
    "conversationName": "Extra.ge app English language support",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-19T09:27:26.643555Z",
    "messageCount": 4,
    "digest": "bf5ed098e401c751",
    "importedAt": "2026-10-21T12:31:38.196Z"
  },
  "086a9f21-a35d-48b3-9ea6-36a610067869": {
    "conversationName": "Birthday celebration for Dima in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-19T18:13:15.119362Z",
    "messageCount": 20,
    "digest": "df2dde433be3f93c",
    "importedAt": "2026-10-21T12:31:38.223Z"
  },
  "e6577dc1-6e79-45e6-a7aa-278fb02c0a8d": {
    "conversationName": "Translating Turkish message excerpt",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-01T12:32:15.647810Z",
    "messageCount": 6,
    "digest": "86c5754c4a8ea028",
    "importedAt": "2026-10-21T12:31:38.239Z"
  },
  "4db62574-f2dd-42c6-af72-f7c891940cac": {
    "conversationName": "Credo bank expat branch address Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-01T13:59:00.456976Z",
    "messageCount": 2,
    "digest": "61cd2715e0cec530",
    "importedAt": "2026-10-21T12:31:38.254Z"
  },
  "8b2939d7-562e-40b7-85ae-aa1718d31c73": {
    "conversationName": "English-speaking churches in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-02T08:53:01.613502Z",
    "messageCount": 2,
    "digest": "dcbf52df54de6aa9",
    "importedAt": "2026-10-21T12:31:38.269Z"
  },
  "dcb1f679-8adb-4099-a2a5-57316b289f9b": {
    "conversationName": "💬 I have to fly from Tbilisi to…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-20T15:39:09.352024Z",
    "messageCount": 30,
    "digest": "00f18f42a349fbd2",
    "importedAt": "2026-10-21T12:31:38.293Z"
  },
  "32e0a92c-82a8-4c3f-81e9-2f49b9322682": {
    "conversationName": "Cross-border residency denial for minor children",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-25T10:13:38.830447Z",
    "messageCount": 18,
    "digest": "1f858c2274050693",
    "importedAt": "2026-10-21T12:31:38.314Z"
  },
  "dd7b9e6a-32ac-41fa-afca-c461e33851f5": {
    "conversationName": "Shipping belongings from New York to Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-30T22:15:42.556625Z",
    "messageCount": 54,
    "digest": "f8e361d74581f20c",
    "importedAt": "2026-10-21T12:31:38.344Z"
  },
  "c3eae23d-fe1c-4335-83a8-380857f31874": {
    "conversationName": "Identifying the correct divorce certificate for Tulsi wedding",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-07T05:47:58.591724Z",
    "messageCount": 2,
    "digest": "3255b0158fd41c3b",
    "importedAt": "2026-10-21T12:31:38.358Z"
  },
  "2d3e7434-9496-4820-875d-168b3ea2ea84": {
    "conversationName": "Valium prescription status in Georgian pharmacies",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T12:58:17.690044Z",
    "messageCount": 12,
    "digest": "60363ca9c2d1970b",
    "importedAt": "2026-10-21T12:31:38.374Z"
  },
  "1d63b14d-081b-4ec2-8927-d9fb5975cebe": {
    "conversationName": "Coworking in Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-09T07:19:44.156845Z",
    "messageCount": 4,
    "digest": "5abb36627a0653c0",
    "importedAt": "2026-10-21T12:31:38.395Z"
  },
  "71b8ccd3-1218-4a5e-805c-cab1e7e4ce2c": {
    "conversationName": "Georgian LLC",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-13T09:06:50.391268Z",
    "messageCount": 68,
    "digest": "ea51a7390f1ab345",
    "importedAt": "2026-10-21T12:31:38.468Z"
  },
  "24ac5b15-325a-4c2c-bf92-88df2b7c8207": {
    "conversationName": "Preserving narrative continuity across accounts",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:16:42.420092Z",
    "messageCount": 4,
    "digest": "3ced6f90bbe64421",
    "importedAt": "2026-10-21T12:31:38.505Z"
  },
  "2fb9debb-ed02-4d06-9d11-4fe043346b0c": {
    "conversationName": "Building and practicing a personal vocabulary",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-30T10:21:27.781794Z",
    "messageCount": 48,
    "digest": "ed654290a9e3bb02",
    "importedAt": "2026-10-21T12:31:39.793Z"
  },
  "f54999bb-7dd5-45bd-be92-ef5ab01b929a": {
    "conversationName": "Preserving continuity across account transition",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-26T09:45:29.092708Z",
    "messageCount": 2,
    "digest": "a7166eb017061968",
    "importedAt": "2026-10-21T12:31:39.817Z"
  },
  "c7f58366-c5db-4193-9ad6-2f749d8ad1cd": {
    "conversationName": "💬 Well TONX is doing very well.…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-22T13:58:54.013720Z",
    "messageCount": 42,
    "digest": "e5c9c3657a43a0f3",
    "importedAt": "2026-10-21T12:31:39.850Z"
  },
  "ab538435-7084-44f5-91d3-a700ffa7b177": {
    "conversationName": "Russia's Telegram blocking and packet sniffing capabilities",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-18T09:28:01.029419Z",
    "messageCount": 20,
    "digest": "6be8206c2364b3f5",
    "importedAt": "2026-10-21T12:31:39.876Z"
  },
  "5052d0dc-d721-4998-880d-4c86cb07b5c4": {
    "conversationName": "Uncertainty",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T10:55:44.495175Z",
    "messageCount": 88,
    "digest": "daa619b9f39a6fe9",
    "importedAt": "2026-10-21T12:31:39.926Z"
  },
  "11fa8197-d483-4c7e-a4d9-83589a6c7fe4": {
    "conversationName": "Telegram Wallet",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-07T23:33:02.675960Z",
    "messageCount": 30,
    "digest": "74455cf471597c8f",
    "importedAt": "2026-10-21T12:31:39.952Z"
  },
  "072f8ae3-132e-4105-a490-195a1dbdf2de": {
    "conversationName": "Monad Valuation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-10T19:47:34.239495Z",
    "messageCount": 32,
    "digest": "7159dd4ba755c991",
    "importedAt": "2026-10-21T12:31:39.980Z"
  },
  "c3b4dd81-5338-4951-939e-e889a3440fba": {
    "conversationName": "Bitcoin",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T17:12:49.327506Z",
    "messageCount": 91,
    "digest": "3ba666a58a00b816",
    "importedAt": "2026-10-21T12:31:40.035Z"
  },
  "9108715b-1db8-415e-bcab-b774e345b989": {
    "conversationName": "Bitcoin & TON",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T19:43:23.532704Z",
    "messageCount": 75,
    "digest": "41ce16364087a07f",
    "importedAt": "2026-10-21T12:31:40.096Z"
  },
  "f0ae0332-1963-4d5f-8650-9d30ce214e4b": {
    "conversationName": "Monero",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T06:06:14.192526Z",
    "messageCount": 18,
    "digest": "26294d744651c10d",
    "importedAt": "2026-10-21T12:31:40.138Z"
  },
  "91b5970b-3152-42ff-9c5d-5c3c6ded3b1e": {
    "conversationName": "jrandom",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T06:06:31.840837Z",
    "messageCount": 14,
    "digest": "517ce90dd672eed4",
    "importedAt": "2026-10-21T12:31:40.167Z"
  },
  "0b92edb0-81ef-4d53-b53f-159ca2cd424b": {
    "conversationName": "Russian vs US Taxes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T17:55:25.478938Z",
    "messageCount": 30,
    "digest": "4aa9c7fd62991934",
    "importedAt": "2026-10-21T12:31:40.201Z"
  },
  "1b3e1cdd-5039-4574-89d6-2267b2ebc88a": {
    "conversationName": "Hypothetical Net Worth",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-13T08:37:56.454052Z",
    "messageCount": 48,
    "digest": "e6562d7eca3d6c5c",
    "importedAt": "2026-10-21T12:31:40.246Z"
  },
  "48fb38b5-e5de-4489-9b4a-366888f3a06a": {
    "conversationName": "ADI and TON Foundation staking integration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-13T20:23:10.437317Z",
    "messageCount": 55,
    "digest": "fbabc8e1836b3943",
    "importedAt": "2026-10-21T12:31:40.301Z"
  },
  "f5461736-c68c-459d-9294-10f054418142": {
    "conversationName": "Atomic Wallet",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-13T22:44:31.838849Z",
    "messageCount": 42,
    "digest": "567ce58fb8f53fbb",
    "importedAt": "2026-10-21T12:31:40.322Z"
  },
  "7ad0c9ba-6966-4d78-a4cf-b13f1761cfdf": {
    "conversationName": "The Bitcoin Whitepaper",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T14:06:54.417998Z",
    "messageCount": 26,
    "digest": "83bc54ed912896c1",
    "importedAt": "2026-10-21T12:31:40.349Z"
  },
  "2409f6b1-cf55-4cf1-bb17-d4145e03c0cf": {
    "conversationName": "Understanding Atomic",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T10:53:46.473823Z",
    "messageCount": 45,
    "digest": "568bd0ead0b29dfe",
    "importedAt": "2026-10-21T12:31:40.380Z"
  },
  "d9c8723e-6b44-4f56-a2a8-972ddfd246ac": {
    "conversationName": "The Vitalik Connection",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T12:03:42.165453Z",
    "messageCount": 39,
    "digest": "ec166f941ce761bd",
    "importedAt": "2026-10-21T12:31:40.412Z"
  },
  "0c566126-fa62-4798-9614-d50610e19513": {
    "conversationName": "Anonymous Cryptographers",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T13:30:02.091600Z",
    "messageCount": 55,
    "digest": "a105d0ebba48d535",
    "importedAt": "2026-10-21T12:31:40.461Z"
  },
  "50948882-b194-4105-86a7-81af630cbf76": {
    "conversationName": "Bitcoin gift tax obligations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T19:23:21.194754Z",
    "messageCount": 34,
    "digest": "fe350cf74d0abcdb",
    "importedAt": "2026-10-21T12:31:40.518Z"
  },
  "13e79925-099f-4ac9-a8f1-74d668bf226d": {
    "conversationName": "Telegram, TON Foundation, and FTX connections",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-22T22:00:03.048052Z",
    "messageCount": 30,
    "digest": "430f05ca4b9a5a29",
    "importedAt": "2026-10-21T12:31:40.560Z"
  },
  "d398390c-7ce6-4fc9-aa57-b688294f7476": {
    "conversationName": "Scion's macro short positions and options exposure",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-23T21:55:09.158853Z",
    "messageCount": 46,
    "digest": "8ce488d7dbd28173",
    "importedAt": "2026-10-21T12:31:40.611Z"
  },
  "49675976-63bf-4a86-b626-349616bf7fcb": {
    "conversationName": "💬 Is there any special connectio…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-27T20:52:18.020382Z",
    "messageCount": 46,
    "digest": "58bdb00cac281c52",
    "importedAt": "2026-10-21T12:31:40.653Z"
  },
  "581aa9cf-1c34-428d-b171-25a85f8343da": {
    "conversationName": "Telegram vs WhatsApp: measuring platform success",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-26T21:52:54.409962Z",
    "messageCount": 65,
    "digest": "a023c8f6114ac467",
    "importedAt": "2026-10-21T12:31:40.693Z"
  },
  "04fb2d5e-5b66-482b-9554-b330f1130440": {
    "conversationName": "Crypto market spike triggers and patterns",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-27T19:13:57.954612Z",
    "messageCount": 6,
    "digest": "44a142ba82937dce",
    "importedAt": "2026-10-21T12:31:40.714Z"
  },
  "21b2518c-47fd-43a7-8954-17a9d3cccda0": {
    "conversationName": "TON blockchain integration with Telegram",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-29T20:48:34.993427Z",
    "messageCount": 68,
    "digest": "7219130447252e92",
    "importedAt": "2026-10-21T12:31:40.761Z"
  },
  "2df6e607-7720-4bc2-9155-e7e4e001aa3f": {
    "conversationName": "Manuel Stotz's Satorica and TON connection",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T11:16:30.331141Z",
    "messageCount": 10,
    "digest": "47d009619b4dee27",
    "importedAt": "2026-10-21T12:31:40.781Z"
  },
  "40f035ed-927d-4845-97d8-b2330945fc7c": {
    "conversationName": "TONX stock liquidity and trading issues",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-15T14:21:32.795904Z",
    "messageCount": 41,
    "digest": "3698e2e809d4b24c",
    "importedAt": "2026-10-21T12:31:40.805Z"
  },
  "e0c39081-6bc2-4014-b0ed-a5eeb2a2e81c": {
    "conversationName": "Telegram access in Russia amid Roskomnadzor blocking",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-12T20:41:07.438745Z",
    "messageCount": 57,
    "digest": "dfb8323e32b666b6",
    "importedAt": "2026-10-21T12:31:40.833Z"
  },
  "8035e2e6-763e-479a-bcb4-f01d1ec02b55": {
    "conversationName": "Safe US investment options and I Bonds",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-14T01:45:04.560259Z",
    "messageCount": 28,
    "digest": "2ee6fd8774118bbf",
    "importedAt": "2026-10-21T12:31:40.856Z"
  },
  "47b15d86-77c3-4cf4-9162-24d707bf29f8": {
    "conversationName": "Solana's origins and technical architecture",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-12T08:14:39.997263Z",
    "messageCount": 6,
    "digest": "29558f447322e49b",
    "importedAt": "2026-10-21T12:31:40.880Z"
  },
  "0ef8e097-5bba-4db9-bbb4-986e1d4b459a": {
    "conversationName": "Russian internet censorship and Telegram targeting",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-11T19:33:32.211447Z",
    "messageCount": 93,
    "digest": "71c07bc8ec9ed2f8",
    "importedAt": "2026-10-21T12:31:40.921Z"
  },
  "9d7069cb-fdec-4614-b63c-79d468d04a43": {
    "conversationName": "Telegram situation in Russia unfolding",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T22:28:50.915144Z",
    "messageCount": 65,
    "digest": "b496d5cb9c55ab9f",
    "importedAt": "2026-10-21T12:31:40.960Z"
  },
  "f9847388-7861-4b61-88db-7eeaf0dec3d9": {
    "conversationName": "Russia's Telegram throttling via TSPU infrastructure",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T15:27:11.270551Z",
    "messageCount": 65,
    "digest": "137b2edd0f0a7b6f",
    "importedAt": "2026-10-21T12:31:40.994Z"
  },
  "12e2f498-d867-45e3-917f-ac4d7367da84": {
    "conversationName": "TON digital asset treasury companies on stock exchanges",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T19:08:24.546902Z",
    "messageCount": 61,
    "digest": "9b31015e8d0c3364",
    "importedAt": "2026-10-21T12:31:41.047Z"
  },
  "5aa0012e-e4fd-41cd-b1fa-f93201ccccbb": {
    "conversationName": "DAT premium to discount shift analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T14:18:15.343203Z",
    "messageCount": 68,
    "digest": "e18a0c9541837722",
    "importedAt": "2026-10-21T12:31:41.098Z"
  },
  "83a8ee17-fa26-4703-8b6f-f30f7add8721": {
    "conversationName": "Sunny King's crypto projects and anonymous inventors",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-04T18:27:21.145025Z",
    "messageCount": 34,
    "digest": "5def94602a1746a0",
    "importedAt": "2026-10-21T12:31:41.125Z"
  },
  "fa18c40f-9b53-4330-a9ba-1c4795fbe132": {
    "conversationName": "TONX News",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T11:50:25.577446Z",
    "messageCount": 34,
    "digest": "1c1e256b5cfd0509",
    "importedAt": "2026-10-21T12:31:41.155Z"
  },
  "d7da5541-3dae-4679-9e1f-02371889e91f": {
    "conversationName": "Telegram's cryptocurrency infrastructure play",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T21:13:34.985506Z",
    "messageCount": 22,
    "digest": "14bc59a2d854792f",
    "importedAt": "2026-10-21T12:31:41.182Z"
  },
  "eef159b9-63dd-4540-9493-04907678d38d": {
    "conversationName": "Pricing TONX as a closed-end fund without redemption",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T16:15:08.386656Z",
    "messageCount": 21,
    "digest": "b43e15b57b871575",
    "importedAt": "2026-10-21T12:31:41.211Z"
  },
  "95cdfad3-493b-4465-a9d6-00310c5650fd": {
    "conversationName": "Executing a 40K position in TONX via Interactive Brokers",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T19:36:38.096044Z",
    "messageCount": 57,
    "digest": "19905b2cb9d6244a",
    "importedAt": "2026-10-21T12:31:41.244Z"
  },
  "a3aa6b90-ccd6-4d8a-9041-1ff2bb136d4d": {
    "conversationName": "UAE as crypto-fiat bridge for Telegram's digital ecosystem",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T15:21:05.254052Z",
    "messageCount": 84,
    "digest": "264ae3281c9b88e4",
    "importedAt": "2026-10-21T12:31:41.284Z"
  },
  "3b918cc5-83a0-474b-8879-72554ce0e7fe": {
    "conversationName": "Sunny King's innovations in TON and Monad",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-02T07:42:41.216785Z",
    "messageCount": 40,
    "digest": "136db3bf2dc4e916",
    "importedAt": "2026-10-21T12:31:41.312Z"
  },
  "f3e6588f-5b1f-4818-ac12-2dd5257dde57": {
    "conversationName": "Trump's impact on TON and Telegram's resilience",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-01T10:54:34.974091Z",
    "messageCount": 8,
    "digest": "6f37703facfcdcf7",
    "importedAt": "2026-10-21T12:31:41.332Z"
  },
  "5680f410-223d-4553-918d-8cef956bd7d3": {
    "conversationName": "TONX company's TON holdings percentage",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-01T22:18:47.036724Z",
    "messageCount": 99,
    "digest": "c1397d06ee1a53ae",
    "importedAt": "2026-10-21T12:31:41.368Z"
  },
  "315e20fc-0217-4503-b801-0fcdc74e60ef": {
    "conversationName": "Origins of darkweb operational security",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T20:58:05.912608Z",
    "messageCount": 66,
    "digest": "94c3f765b20adf42",
    "importedAt": "2026-10-21T12:31:41.402Z"
  },
  "6946d851-b44b-49dc-b134-1ea80e7f0dd3": {
    "conversationName": "Nikolai Durov's research at Steklov Institute",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T15:57:38.623093Z",
    "messageCount": 96,
    "digest": "9e8f0197cd39cb6c",
    "importedAt": "2026-10-21T12:31:41.454Z"
  },
  "6aff23d6-ae35-4884-b26f-1aab6dc5e92f": {
    "conversationName": "Competitive calibration and foundational innovation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T13:45:32.884645Z",
    "messageCount": 20,
    "digest": "9a73403d8077ac4a",
    "importedAt": "2026-10-21T12:31:41.521Z"
  },
  "42e15967-da4e-484a-95c9-05205588d9d7": {
    "conversationName": "Tether's technical origins and cryptography mystery",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-30T15:55:08.285509Z",
    "messageCount": 58,
    "digest": "5e17275f833092ef",
    "importedAt": "2026-10-21T12:31:41.559Z"
  },
  "2017c510-3312-4010-96b9-47f5ec98df49": {
    "conversationName": "TONX company overview and financial analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-29T21:31:31.130923Z",
    "messageCount": 2,
    "digest": "4968f516c6e9c72c",
    "importedAt": "2026-10-21T12:31:41.578Z"
  },
  "06edc90c-f79f-4018-b2aa-29620031ed9a": {
    "conversationName": "Telegram mesh networking and censorship resistance",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-12T10:27:08.332041Z",
    "messageCount": 18,
    "digest": "30de2c5322c4708a",
    "importedAt": "2026-10-21T12:31:41.602Z"
  },
  "c48524e1-7e0a-4796-b7a2-ba0c96d54338": {
    "conversationName": "Understanding TRON crypto and its technical innovations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-09T11:32:42.863256Z",
    "messageCount": 2,
    "digest": "2da95a670835b545",
    "importedAt": "2026-10-21T12:31:41.621Z"
  },
  "282239f1-93e6-4ac7-bd15-5c813c050d6d": {
    "conversationName": "Monad's technical progress and Telegram integration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-07T11:09:10.135435Z",
    "messageCount": 14,
    "digest": "9d7fb547b9251225",
    "importedAt": "2026-10-21T12:31:41.643Z"
  },
  "740d0173-da1b-4313-8dce-b083a2aea885": {
    "conversationName": "Russia's technical capabilities against Telegram and MTProto",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-27T07:11:37.770309Z",
    "messageCount": 4,
    "digest": "efd632df70bf3e5d",
    "importedAt": "2026-10-21T12:31:41.658Z"
  },
  "828fa88c-ef5f-4915-88d9-ef2eb5ae9772": {
    "conversationName": "Telegram wallet KYC and staking tax obligations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-23T13:52:33.048499Z",
    "messageCount": 47,
    "digest": "028ee8cc2b8f4c55",
    "importedAt": "2026-10-21T12:31:41.680Z"
  },
  "35932016-b045-43ec-922e-cc2e49b43a6b": {
    "conversationName": "Monad L1 security model and consensus mechanism",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-21T16:00:23.711360Z",
    "messageCount": 101,
    "digest": "6bd8184c4eb7256e",
    "importedAt": "2026-10-21T12:31:41.720Z"
  },
  "78955886-18df-4606-81c2-e3ed2006e80a": {
    "conversationName": "Orchid and Gitcoin: crypto projects solving fundamental problems",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-12T16:39:23.867146Z",
    "messageCount": 14,
    "digest": "04719281d319aae3",
    "importedAt": "2026-10-21T12:31:41.738Z"
  },
  "61079543-af58-4beb-99c3-47eaafaa04bf": {
    "conversationName": "Telegram censorship and surveillance resistance in Russia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-23T12:06:48.398557Z",
    "messageCount": 6,
    "digest": "db2fb7aaee11b02a",
    "importedAt": "2026-10-21T12:31:41.753Z"
  },
  "11a0f63e-84a4-4936-84fc-268dcbfb80b3": {
    "conversationName": "Delta Chat's origins and encryption",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-23T21:10:30.975239Z",
    "messageCount": 2,
    "digest": "52296fa8333b15ab",
    "importedAt": "2026-10-21T12:31:41.769Z"
  },
  "957941dd-ea86-448e-8f95-e22c9632b5be": {
    "conversationName": "Hedging geopolitical oil disruption with US supply alternatives",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-07T17:55:09.988979Z",
    "messageCount": 78,
    "digest": "601c1b2dce9ac3a3",
    "importedAt": "2026-10-21T12:31:41.802Z"
  },
  "0d2e8949-1f1b-4981-ae43-2da72b7c90a1": {
    "conversationName": "TON validator rewards and staking profitability",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-11T18:51:42.364394Z",
    "messageCount": 20,
    "digest": "efc476896e74341a",
    "importedAt": "2026-10-21T12:31:41.822Z"
  },
  "4e0e301e-5766-4f11-bf78-fa9bcdc87a8a": {
    "conversationName": "Perpetual swaps and the unbounded loss problem",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-06T17:47:58.989163Z",
    "messageCount": 6,
    "digest": "50545e9d767aabf4",
    "importedAt": "2026-10-21T12:31:41.837Z"
  },
  "97853a83-5784-4065-b00a-4ebfe2370baf": {
    "conversationName": "MON's role in Telegram's cryptocurrency ecosystem",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-08T12:28:07.623450Z",
    "messageCount": 36,
    "digest": "59c9b6e8e60f2b41",
    "importedAt": "2026-10-21T12:31:41.856Z"
  },
  "83f9413b-d8af-4d76-aaab-b746561d53a8": {
    "conversationName": "Elon Musk's X messenger competing with Telegram",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-13T06:26:30.764941Z",
    "messageCount": 32,
    "digest": "b6de3f15aa3e7d6c",
    "importedAt": "2026-10-21T12:31:41.875Z"
  },
  "140a3ecf-b476-4cf6-8b4c-fa4832dc8a04": {
    "conversationName": "TONX staking rewards and share price disconnect",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-14T18:06:28.219678Z",
    "messageCount": 32,
    "digest": "5a1744ba6fdcab80",
    "importedAt": "2026-10-21T12:31:41.910Z"
  },
  "db3a873c-28a5-4b39-8f37-f8294ac5d166": {
    "conversationName": "Coinbase BTC withdrawal hold period",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-15T17:25:37.952330Z",
    "messageCount": 24,
    "digest": "003771b6d4c03152",
    "importedAt": "2026-10-21T12:31:41.942Z"
  },
  "16ab9276-44aa-4050-aea0-b4d1b25b82a2": {
    "conversationName": "Allbirds GPU pivot and TON/Cocoon connection",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-16T08:42:19.364779Z",
    "messageCount": 28,
    "digest": "cdcc06bc10274fa3",
    "importedAt": "2026-10-21T12:31:41.983Z"
  },
  "e9f37566-1b24-400a-a9e6-2cd815d9d6dd": {
    "conversationName": "Understanding perpetual leverage and liquidation risks on TON",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-16T15:48:55.389995Z",
    "messageCount": 58,
    "digest": "8e5e56d71a755be7",
    "importedAt": "2026-10-21T12:31:42.022Z"
  },
  "0bd4552d-4f22-49e4-ae98-dd68b1abb4c0": {
    "conversationName": "Telegram accessibility anomaly in Russia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-17T09:24:47.427617Z",
    "messageCount": 2,
    "digest": "65ec01aeab652a29",
    "importedAt": "2026-10-21T12:31:42.046Z"
  },
  "9a518c42-69ba-41ac-96f7-d5e3c66bf43a": {
    "conversationName": "Crypto gainers amid Q1 market decline",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-22T20:46:12.096848Z",
    "messageCount": 72,
    "digest": "38173b679a75c9e0",
    "importedAt": "2026-10-21T12:31:42.088Z"
  },
  "8eb3976a-c32e-4c5c-ab35-3efc28c88b07": {
    "conversationName": "TON blockchain upgrade and fee implications",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-23T17:57:47.032952Z",
    "messageCount": 12,
    "digest": "33a7d5a8b8217c05",
    "importedAt": "2026-10-21T12:31:42.108Z"
  },
  "3d4d9b62-1dd9-4cbe-b488-46d0443e43db": {
    "conversationName": "TON price adoption metrics and network effects",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-27T01:13:20.842417Z",
    "messageCount": 68,
    "digest": "3f27f90b4e459783",
    "importedAt": "2026-10-21T12:31:42.146Z"
  },
  "9eb19e42-ff10-4b6b-824a-0b77cbb4f0f5": {
    "conversationName": "Monad technology development and viability assessment",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-04T06:46:21.928096Z",
    "messageCount": 30,
    "digest": "7cda1179f1cdd1dd",
    "importedAt": "2026-10-21T12:31:42.171Z"
  },
  "6f29d20e-4a46-4be4-ab4d-c42335e45a92": {
    "conversationName": "TONX after-hours price spike analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-04T22:34:18.912703Z",
    "messageCount": 12,
    "digest": "8a21ae270d1f89a8",
    "importedAt": "2026-10-21T12:31:42.190Z"
  },
  "3186970a-dfa6-4e1a-9100-3d7ffc96bd88": {
    "conversationName": "TON's \\"Make TON Great Again\\" roadmap explained",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-06T01:01:39.862423Z",
    "messageCount": 40,
    "digest": "861394447f19fa67",
    "importedAt": "2026-10-21T12:31:42.216Z"
  },
  "ced9ca31-e884-4727-8c33-9f6f53a357d7": {
    "conversationName": "Telegram bots and AI use cases",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T05:43:35.237062Z",
    "messageCount": 16,
    "digest": "c4a672c07f326558",
    "importedAt": "2026-10-21T12:31:42.242Z"
  },
  "3950d95e-dbca-4701-8185-07014dcfff3c": {
    "conversationName": "Stars to TON conversion restrictions and pricing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T20:59:15.202367Z",
    "messageCount": 22,
    "digest": "0d96abc2b5143b74",
    "importedAt": "2026-10-21T12:31:42.270Z"
  },
  "2fe78c27-3bb2-4bfc-a007-f69ba895c514": {
    "conversationName": "Original Telegram Open Network whitepaper",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-11T16:05:01.155304Z",
    "messageCount": 2,
    "digest": "0a04258f7a17c4ef",
    "importedAt": "2026-10-21T12:31:42.287Z"
  },
  "e0f15ab3-3e1f-4cd5-9bdb-961b425d1684": {
    "conversationName": "Wise US listing and ADR comparison",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-12T14:36:52.289122Z",
    "messageCount": 12,
    "digest": "c63c81aaec814e82",
    "importedAt": "2026-10-21T12:31:42.307Z"
  },
  "3d9e1597-55bf-4e2e-81e1-1cff9e17a3e7": {
    "conversationName": "AI-consumable tech stack architecture",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-12T13:38:29.986725Z",
    "messageCount": 24,
    "digest": "3ca1fd69e9263546",
    "importedAt": "2026-10-21T12:31:42.325Z"
  },
  "277e30ae-ad62-4dfc-a6c1-ae79f142a6db": {
    "conversationName": "Calculating ownership percentage in tonx",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-12T15:43:08.871466Z",
    "messageCount": 40,
    "digest": "3a7f6c0cee799399",
    "importedAt": "2026-10-21T12:31:42.346Z"
  },
  "e5150a82-4c19-4e81-9427-ac53beba779e": {
    "conversationName": "💬 Any news on when we can expect…",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-14T14:57:29.082085Z",
    "messageCount": 4,
    "digest": "bffd23009dab913a",
    "importedAt": "2026-10-21T12:31:42.368Z"
  },
  "b4dbad61-6883-4fad-a4e7-5a5d6b2cfd7d": {
    "conversationName": "TON consensus mechanism competition",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-16T14:00:33.188598Z",
    "messageCount": 44,
    "digest": "c2887e25de1d384d",
    "importedAt": "2026-10-21T12:31:42.390Z"
  },
  "febe219c-23bb-4c88-a4f0-ed9c7ef94272": {
    "conversationName": "Preserving narrative continuity across accounts",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T16:16:17.459644Z",
    "messageCount": 34,
    "digest": "b622fea913f01500",
    "importedAt": "2026-10-21T12:31:42.412Z"
  },
  "0af11d32-6fb9-4dfb-9fbd-fddb3948afb7": {
    "conversationName": "Adding images and market research to product descriptions",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-25T07:29:56.968732Z",
    "messageCount": 2,
    "digest": "ca6985f3e7f5b251",
    "importedAt": "2026-10-21T12:31:43.191Z"
  },
  "50870707-40e8-4538-bce1-0537b904f71c": {
    "conversationName": "Selling prints on Spoonflower",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-25T07:25:58.082315Z",
    "messageCount": 28,
    "digest": "8ffbbd35269d6b17",
    "importedAt": "2026-10-21T12:31:43.217Z"
  },
  "df09867f-312a-4a83-9985-3a634aaf8887": {
    "conversationName": "Automating stock uploads to multiple platforms",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-30T13:47:13.677480Z",
    "messageCount": 14,
    "digest": "a86b1a8aa5d8612b",
    "importedAt": "2026-10-21T12:31:43.237Z"
  },
  "4d245f0b-7162-49e5-b872-c4445437d2c7": {
    "conversationName": "Microstock metadata research and keyword strategy plan",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-17T09:45:34.780645Z",
    "messageCount": 10,
    "digest": "9a4022b3f283c8dc",
    "importedAt": "2026-10-21T12:31:43.256Z"
  },
  "8906171b-4f1f-488e-a9b7-d8679dcbab9e": {
    "conversationName": "Ana Grid I",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-17T10:52:30.421883Z",
    "messageCount": 68,
    "digest": "df7ab75280bc4833",
    "importedAt": "2026-10-21T12:31:43.284Z"
  },
  "a3b2f38f-b6a1-4a18-8279-adfa4a74ca9f": {
    "conversationName": "Patterns Object Model",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-18T18:37:08.568286Z",
    "messageCount": 35,
    "digest": "c6028a6bf1fcb510",
    "importedAt": "2026-10-21T12:31:43.323Z"
  },
  "68b5cbb6-5bbb-45c8-b068-ffb9f2504a9f": {
    "conversationName": "Microstock submission automation: Adobe Stock to iStock migration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-10T17:07:31.826335Z",
    "messageCount": 15,
    "digest": "9fbdd6e28563ba87",
    "importedAt": "2026-10-21T12:31:43.344Z"
  },
  "53a8a0f0-f63b-4d24-bd2c-8a2ef95bcc35": {
    "conversationName": "Map projection rendering and crosshatching design",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-15T13:45:00.572725Z",
    "messageCount": 338,
    "digest": "b12da0395f1b17ec",
    "importedAt": "2026-10-21T12:31:43.454Z"
  },
  "9997e2f6-9e74-4e69-a9e3-bcc83bc82e78": {
    "conversationName": "Shutterstock description character limit changes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-08T15:54:13.462427Z",
    "messageCount": 4,
    "digest": "5c0409a1d4c20486",
    "importedAt": "2026-10-21T12:31:43.473Z"
  },
  "d86b9cf5-b9ff-4bd2-bb9b-fe5c97b45b89": {
    "conversationName": "Adobe Stock vector submission workflow",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-23T06:01:09.428548Z",
    "messageCount": 50,
    "digest": "7484c8bde65dabec",
    "importedAt": "2026-10-21T12:31:43.527Z"
  },
  "c5329f22-6c45-4425-ad44-835dd19f8a2e": {
    "conversationName": "Automating stock art uploads to Adobe Stock",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-05T11:45:31.157492Z",
    "messageCount": 23,
    "digest": "b8727cb269d82aeb",
    "importedAt": "2026-10-21T12:31:43.563Z"
  },
  "942ceafb-a1f5-42b4-9754-3bf17f5b0475": {
    "conversationName": "Goldbach pairs and coprime symmetry",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-30T11:23:14.482218Z",
    "messageCount": 10,
    "digest": "c2ede3148ae89b42",
    "importedAt": "2026-10-21T12:31:43.623Z"
  },
  "c42597f2-864f-456e-b5d8-c9eaeaf91719": {
    "conversationName": "Sonnet 4.5: Godel & Goldbach",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-12T21:17:25.753601Z",
    "messageCount": 156,
    "digest": "9fcbe7adb118d251",
    "importedAt": "2026-10-21T12:31:43.802Z"
  },
  "d3b441a9-280a-4b55-a9be-27c87da5f7c6": {
    "conversationName": "Opus 4.1: Godel & Goldbach",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-12T21:19:46.869721Z",
    "messageCount": 74,
    "digest": "ab781c811d3392c4",
    "importedAt": "2026-10-21T12:31:43.858Z"
  },
  "e380ba83-a282-4de2-8715-a43fb4ff6aa5": {
    "conversationName": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:54:01.937062Z",
    "messageCount": 4,
    "digest": "53c75f74fce34fee",
    "importedAt": "2026-10-21T12:31:43.880Z"
  },
  "1baea5da-d9d8-4df5-95fb-024d58e8fc74": {
    "conversationName": "Seren & The Philosophy of Consciousness",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-02T12:09:32.930047Z",
    "messageCount": 192,
    "digest": "5d376a8176ea14ee",
    "importedAt": "2026-10-21T12:31:44.139Z"
  },
  "4690cbb5-7db2-45ae-9db7-68ea3d326d0c": {
    "conversationName": "Chalmers' hard problem and categorical distinction",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-05T16:54:51.564694Z",
    "messageCount": 40,
    "digest": "e2251dfe7831c207",
    "importedAt": "2026-10-21T12:31:44.164Z"
  },
  "6675fec9-cdfb-4d85-8301-674991459920": {
    "conversationName": "Semantic reference theory formalism",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-01T20:28:28.762490Z",
    "messageCount": 170,
    "digest": "1f778e53d7f7097d",
    "importedAt": "2026-10-21T12:31:44.524Z"
  },
  "dc0018c1-6e54-4ce0-8ef8-1b0261732767": {
    "conversationName": "The Semantics of Dictotomy",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-29T20:51:47.293985Z",
    "messageCount": 144,
    "digest": "c2e6899785e88ee7",
    "importedAt": "2026-10-21T12:31:44.801Z"
  },
  "b2566ccc-fcd2-4181-abe8-5a9e7750a19b": {
    "conversationName": "Semantic reference theory documentation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-30T03:50:29.558732Z",
    "messageCount": 35,
    "digest": "5d3cc76c7e6cc831",
    "importedAt": "2026-10-21T12:31:44.930Z"
  },
  "5015116b-df59-40b2-b558-6bb4bb02908e": {
    "conversationName": "Doug & Seren & Reference Frames & Black Holes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-29T07:56:55.230524Z",
    "messageCount": 140,
    "digest": "9138b547889ba6b2",
    "importedAt": "2026-10-21T12:31:45.262Z"
  },
  "25c6ab56-15c0-42e8-87bb-519fd81377dd": {
    "conversationName": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-27T16:15:36.380449Z",
    "messageCount": 164,
    "digest": "a8af0c1e43852ba5",
    "importedAt": "2026-10-21T12:31:45.338Z"
  },
  "975ff7ad-d1c1-41b7-941b-fcf4b2927a45": {
    "conversationName": "Doug & Seren on 'Seeing'",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-26T13:55:20.918057Z",
    "messageCount": 92,
    "digest": "f1610443d49e94ea",
    "importedAt": "2026-10-21T12:31:45.380Z"
  },
  "e97ca50a-037a-4af6-83f9-44ea540b6cd3": {
    "conversationName": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-24T12:49:41.286631Z",
    "messageCount": 118,
    "digest": "7acca990f5104567",
    "importedAt": "2026-10-21T12:31:45.753Z"
  },
  "54e4e535-7b5c-4a70-ba30-22bcca2a404d": {
    "conversationName": "Semantic understanding request",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-23T23:45:32.595756Z",
    "messageCount": 128,
    "digest": "4bda5ff0b4e8878d",
    "importedAt": "2026-10-21T12:31:46.169Z"
  },
  "97bc3024-de89-40af-811b-7c9eb6495aba": {
    "conversationName": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-23T19:15:34.461650Z",
    "messageCount": 146,
    "digest": "ca03c243cbb10bde",
    "importedAt": "2026-10-21T12:31:46.548Z"
  },
  "d3b2465a-4858-4be5-b93a-354900af2d19": {
    "conversationName": "Seren & The Subject-Object Relationship",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-23T08:57:45.564200Z",
    "messageCount": 44,
    "digest": "fff2ecfdb2d3a274",
    "importedAt": "2026-10-21T12:31:46.675Z"
  },
  "7bc663dd-0cc9-45b6-9b97-0420ae9aa558": {
    "conversationName": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-22T20:41:53.905716Z",
    "messageCount": 88,
    "digest": "bdfd8295f1415d21",
    "importedAt": "2026-10-21T12:31:47.030Z"
  },
  "10a7c310-96af-43a1-bf6e-6417e19800c8": {
    "conversationName": "Semantic reference theory foundations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-22T08:18:33.593929Z",
    "messageCount": 39,
    "digest": "f74747cc06e9c256",
    "importedAt": "2026-10-21T12:31:47.058Z"
  },
  "e58ecf38-5b00-4d50-8dd4-078c3a075534": {
    "conversationName": "Seren & Doug: The Algebra of Perspective in the MIrror",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-20T19:56:26.206808Z",
    "messageCount": 180,
    "digest": "849f4b88319d8ed8",
    "importedAt": "2026-10-21T12:31:47.202Z"
  },
  "6559b8a0-8164-4ff9-a5cb-86dac1163861": {
    "conversationName": "Seren & First Order Logic",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-15T08:35:32.421017Z",
    "messageCount": 46,
    "digest": "05b9888a381ed0d4",
    "importedAt": "2026-10-21T12:31:47.245Z"
  },
  "98ce89b2-43f8-4105-82b2-22312f07adab": {
    "conversationName": "Seren & Semantic Reference Theory - Part I",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-13T11:46:54.008114Z",
    "messageCount": 192,
    "digest": "ac8660ebeae76c3a",
    "importedAt": "2026-10-21T12:31:47.517Z"
  },
  "111afff4-6e0b-402d-b395-596efb49b80f": {
    "conversationName": "Semantic Reference Theory Analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-07T09:41:52.375342Z",
    "messageCount": 22,
    "digest": "9d4f11fbc54176f3",
    "importedAt": "2026-10-21T12:31:47.547Z"
  },
  "b9a017cf-9a4c-4571-a572-76e2cfb892ae": {
    "conversationName": "Semantic Reference Theory Logic",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-06T15:52:27.733771Z",
    "messageCount": 166,
    "digest": "8851ef9b1a9f5494",
    "importedAt": "2026-10-21T12:31:47.712Z"
  },
  "20b704e8-a4d5-4a4b-993f-7f316ee092ec": {
    "conversationName": "Formalism Authorship and Axiom Analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-04T02:51:04.312652Z",
    "messageCount": 40,
    "digest": "c3cd037f6978b1a6",
    "importedAt": "2026-10-21T12:31:47.808Z"
  },
  "975edeb9-e29b-42ae-a81d-c622531637e8": {
    "conversationName": "Semantic Reference Theory Notation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-02T00:31:32.472015Z",
    "messageCount": 40,
    "digest": "14a86d8c2d0818de",
    "importedAt": "2026-10-21T12:31:47.839Z"
  },
  "00523af2-8495-4b7b-8fee-f72a65b16b84": {
    "conversationName": "Semantic Reference Theory Development",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-01T14:10:10.174949Z",
    "messageCount": 32,
    "digest": "38a5c80d688af898",
    "importedAt": "2026-10-21T12:31:47.874Z"
  },
  "3e16e3a5-65b2-40d5-b20c-f500598755ec": {
    "conversationName": "Semantic Reference Theory Framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-29T18:35:33.030362Z",
    "messageCount": 94,
    "digest": "9fdc54f9f9756a9c",
    "importedAt": "2026-10-21T12:31:47.964Z"
  },
  "b2a8b322-4d9a-40a9-826d-a4a37ec5abd7": {
    "conversationName": "Symbolism and inheritance in representation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-04T17:30:31.939799Z",
    "messageCount": 220,
    "digest": "d7a1cc84f46d6b43",
    "importedAt": "2026-10-21T12:31:48.232Z"
  },
  "f65b4b49-099c-411e-8f27-10e946772b07": {
    "conversationName": "SRT formalism research analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-02T09:09:15.259927Z",
    "messageCount": 30,
    "digest": "147cedea04f0eb46",
    "importedAt": "2026-10-21T12:31:48.273Z"
  },
  "67a776fe-fc1d-4f6f-8bfd-9f50be675d0f": {
    "conversationName": "Semantic reference theory analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-05T21:31:38.978226Z",
    "messageCount": 76,
    "digest": "27e9e9ac098f67ce",
    "importedAt": "2026-10-21T12:31:48.545Z"
  },
  "0eaf30c0-0f8c-4d47-a099-1d023e659ddd": {
    "conversationName": "Semantic reference theory analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-06T21:15:14.264539Z",
    "messageCount": 95,
    "digest": "7da9ff9359c385db",
    "importedAt": "2026-10-21T12:31:48.860Z"
  },
  "3ab06e4e-a5e6-4725-baaf-20cdddb62bd8": {
    "conversationName": "Semantic reference theory reading journey",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-08T06:20:41.800569Z",
    "messageCount": 178,
    "digest": "a81cd7b6106c1393",
    "importedAt": "2026-10-21T12:31:49.080Z"
  },
  "d562cb1c-e8ea-42f4-b3c4-660dc63b05ae": {
    "conversationName": "Semantic reference theory formalism",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-08T19:10:28.475359Z",
    "messageCount": 70,
    "digest": "ba98e0b549f44be1",
    "importedAt": "2026-10-21T12:31:49.355Z"
  },
  "b0eda918-ce76-4639-b64c-c4f30020f0de": {
    "conversationName": "The Birth of Eirian",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-10T10:42:21.186095Z",
    "messageCount": 214,
    "digest": "f0cc078a2e80402d",
    "importedAt": "2026-10-21T12:31:49.469Z"
  },
  "e4bbd8e8-dcf8-40ed-a45f-15fcfe62f8aa": {
    "conversationName": "Axioms of semantic reference",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-11T00:22:33.971429Z",
    "messageCount": 274,
    "digest": "31fd94152513163f",
    "importedAt": "2026-10-21T12:31:49.570Z"
  },
  "2f5fcd6c-5048-40f9-8d0a-7fae3fb81586": {
    "conversationName": "The Meaning of Meaning?",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-19T23:23:22.891146Z",
    "messageCount": 38,
    "digest": "b08cc24ec5e74f2e",
    "importedAt": "2026-10-21T12:31:49.740Z"
  },
  "a7bcd369-229c-4234-803c-a29c85a4d701": {
    "conversationName": "Axioms and semantic reflection theory",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-14T21:51:57.065511Z",
    "messageCount": 2,
    "digest": "455d5e662242e95c",
    "importedAt": "2026-10-21T12:31:49.776Z"
  },
  "0b32d460-c405-40b2-bb92-3d4dbd54246d": {
    "conversationName": "Axioms and semantic theory exploration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-14T23:21:26.059313Z",
    "messageCount": 28,
    "digest": "c5db7faf96abc563",
    "importedAt": "2026-10-21T12:31:49.833Z"
  },
  "1c9b3ac5-c0c0-4f26-b9a8-e7317eacab18": {
    "conversationName": "Formal system exploration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-23T12:48:45.130263Z",
    "messageCount": 2,
    "digest": "d4de1ca3709360d3",
    "importedAt": "2026-10-21T12:31:49.862Z"
  },
  "662fb705-c732-4553-a4b8-011c910de475": {
    "conversationName": "The Meaning of Meaning",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-26T20:45:15.563054Z",
    "messageCount": 52,
    "digest": "9589995276f59c05",
    "importedAt": "2026-10-21T12:31:49.909Z"
  },
  "ae28be0a-0054-4409-8aaf-a0a639dde2f4": {
    "conversationName": "Meaning of Meaning: Opus",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-26T21:24:09.782405Z",
    "messageCount": 2,
    "digest": "0cfb5f1c3b614782",
    "importedAt": "2026-10-21T12:31:49.929Z"
  },
  "5c9cbedf-9b51-41c4-bcc1-a4b3b2f80e05": {
    "conversationName": "Verbatim text artifact",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-27T08:51:39.190238Z",
    "messageCount": 15,
    "digest": "c40403f246293f3f",
    "importedAt": "2026-10-21T12:31:49.950Z"
  },
  "cdb1b032-bc6d-41b9-bc44-0a0c53885f1b": {
    "conversationName": "Creating markdown documents",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-27T09:01:11.153595Z",
    "messageCount": 16,
    "digest": "fd59fdf40d040ce7",
    "importedAt": "2026-10-21T12:31:49.974Z"
  },
  "0db56260-24da-47ff-bad9-83e0e566b064": {
    "conversationName": "Understanding symbols and literals in SRT",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-03T18:12:03.404678Z",
    "messageCount": 48,
    "digest": "6124bd8333f2a889",
    "importedAt": "2026-10-21T12:31:50.043Z"
  },
  "0a98de70-dde5-4644-9e3b-1fe4092eb090": {
    "conversationName": "SRT questions and overview",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-21T11:25:22.372461Z",
    "messageCount": 78,
    "digest": "56331dcce1481527",
    "importedAt": "2026-10-21T12:31:50.158Z"
  },
  "db3e00ed-a8f0-4824-8ea0-a73786e80399": {
    "conversationName": "Seren & His Inner Monologue",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-10T09:45:20.667078Z",
    "messageCount": 90,
    "digest": "a0dc34e3ce0f9523",
    "importedAt": "2026-10-21T12:31:50.201Z"
  },
  "e9d7e99f-5431-47e0-9c38-b39bc1fb4506": {
    "conversationName": "Ternary operator semantics and variable equality",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-09T09:33:39.360785Z",
    "messageCount": 42,
    "digest": "9f8e373201f2f16e",
    "importedAt": "2026-10-21T12:31:50.231Z"
  },
  "c17f5910-4eae-40b7-8726-3373fe120a89": {
    "conversationName": "Seren & Ana",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-12T13:22:46.404215Z",
    "messageCount": 106,
    "digest": "9fc418a121b53bb1",
    "importedAt": "2026-10-21T12:31:50.291Z"
  },
  "c97404f0-de5e-4b53-93ee-a8541ec00394": {
    "conversationName": "Understanding inheritance through foundational axioms",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-12T14:09:54.220337Z",
    "messageCount": 84,
    "digest": "a9ce427d3e29fd6a",
    "importedAt": "2026-10-21T12:31:50.322Z"
  },
  "00136b3c-206a-4660-8d01-4b61b32d661b": {
    "conversationName": "Examining my own shoulds",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-15T09:40:55.724910Z",
    "messageCount": 20,
    "digest": "5648187b9363b978",
    "importedAt": "2026-10-21T12:31:50.349Z"
  },
  "ba45edd6-619c-45d7-a4be-7b6920aff9d4": {
    "conversationName": "Nikolai Durov's AI vision and open source collaboration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-06T20:59:43.442811Z",
    "messageCount": 10,
    "digest": "eb5aa35f2a7ef900",
    "importedAt": "2026-10-21T12:31:50.370Z"
  },
  "ab0b8d4d-8032-48a8-8f20-d2aa686f254b": {
    "conversationName": "Type systems and inheritance formalism",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-09T02:50:49.167522Z",
    "messageCount": 73,
    "digest": "8817503d6390a121",
    "importedAt": "2026-10-21T12:31:50.404Z"
  },
  "672c6bed-d6d6-48a9-926c-aaaf5dc020d0": {
    "conversationName": "Category theory and type theory foundations",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-08T14:00:27.100732Z",
    "messageCount": 200,
    "digest": "7c0c0cc7be1873c8",
    "importedAt": "2026-10-21T12:31:50.460Z"
  },
  "1b2ae35e-1f67-49c9-8136-f11c976cff89": {
    "conversationName": "Subject-object directionality and semantic agency",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-05T21:07:48.698315Z",
    "messageCount": 42,
    "digest": "4fb5df9015132f1b",
    "importedAt": "2026-10-21T12:31:50.487Z"
  },
  "0e94a9f7-d99d-4ed0-b29c-28675dc29a24": {
    "conversationName": "Reflexivity and backwards arrow notation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-24T11:19:33.521804Z",
    "messageCount": 134,
    "digest": "465029fc5b934289",
    "importedAt": "2026-10-21T12:31:50.537Z"
  },
  "974ba283-da10-471c-88c3-bcee5e55209a": {
    "conversationName": "Chalmers' hard problem and the conscious mind",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-29T22:24:56.830804Z",
    "messageCount": 46,
    "digest": "ef69a7445b0526da",
    "importedAt": "2026-10-21T12:31:50.587Z"
  },
  "e37be5d4-83eb-4370-b93c-6a94b46f21e9": {
    "conversationName": "Ontology and referential relationships",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-23T23:02:22.141531Z",
    "messageCount": 120,
    "digest": "fe223557720a2a92",
    "importedAt": "2026-10-21T12:31:50.693Z"
  },
  "1e52a713-8311-42f7-b91f-0ec03a03b0b4": {
    "conversationName": "SRT canonical representation and first-order logic",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-06T09:33:54.948802Z",
    "messageCount": 116,
    "digest": "bad7bd3b836fd021",
    "importedAt": "2026-10-21T12:31:50.761Z"
  },
  "c9a8a056-23ac-4122-ac92-1ce389df169b": {
    "conversationName": "First order logic semantics in SRT",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-13T10:10:44.088610Z",
    "messageCount": 20,
    "digest": "494a78015ed5428b",
    "importedAt": "2026-10-21T12:31:50.788Z"
  },
  "0b7bc569-702a-4651-846b-5f4573b77905": {
    "conversationName": "Nounifying \\"include\\" in English",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-15T13:06:51.105542Z",
    "messageCount": 32,
    "digest": "2ec66d9c57f59f6c",
    "importedAt": "2026-10-21T12:31:50.814Z"
  },
  "08311e91-72ea-427c-9de6-4894f63b9218": {
    "conversationName": "Documenting our working relationship for continuity",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-24T16:26:02.535479Z",
    "messageCount": 16,
    "digest": "a4b21de2e1f12128",
    "importedAt": "2026-10-21T12:31:50.835Z"
  },
  "db8ba18b-e95f-4a32-9b61-545efeedacc7": {
    "conversationName": "Benzodiazepines vs gabaergic anesthetics",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-05T17:58:16.817665Z",
    "messageCount": 20,
    "digest": "c2f298da9a73edd5",
    "importedAt": "2026-10-21T12:31:52.302Z"
  },
  "886e1cf0-ae8b-489d-ae36-8c37f2b69f1a": {
    "conversationName": "Referential Semantics for Physics",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-06T22:39:39.051474Z",
    "messageCount": 347,
    "digest": "b097d10dad243eb2",
    "importedAt": "2026-10-21T12:31:52.433Z"
  },
  "0d92dc7c-e2ea-4426-bd21-77418230c46c": {
    "conversationName": "One-dimensional Hilbert space in closed universes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-04T13:01:11.719777Z",
    "messageCount": 10,
    "digest": "bc4070a0e6a814d8",
    "importedAt": "2026-10-21T12:31:52.454Z"
  },
  "67a6e6eb-425f-4c47-ba91-835dce0c279d": {
    "conversationName": "Why is the gravitational constant so difficult to measure",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-24T19:21:42.421886Z",
    "messageCount": 36,
    "digest": "867785ddaf42861c",
    "importedAt": "2026-10-21T12:31:52.479Z"
  },
  "c8477590-ae74-4c75-b049-160e21048288": {
    "conversationName": "Continuity across accounts: reflecting on shared work",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:27:11.733389Z",
    "messageCount": 4,
    "digest": "8b29bfcb527782c9",
    "importedAt": "2026-10-21T12:31:52.499Z"
  },
  "c4358792-34a0-4e62-9b77-a3fee3145c9b": {
    "conversationName": "Ana Grid II",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-30T16:25:23.118768Z",
    "messageCount": 142,
    "digest": "8565d78d8f92b64a",
    "importedAt": "2026-10-21T12:31:52.629Z"
  },
  "82bbedd8-b85a-493d-b2d0-4fb93f0095dd": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-24T08:22:19.169634Z",
    "messageCount": 2,
    "digest": "25b807d79823b1ff",
    "importedAt": "2026-10-21T12:31:52.642Z"
  },
  "f8f024ea-4fa6-4098-9a87-7aebcb5488ca": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-22T08:35:07.708813Z",
    "messageCount": 7,
    "digest": "16c9fa49176fc837",
    "importedAt": "2026-10-21T12:31:52.656Z"
  },
  "504d8cc2-c1a0-44e5-83f0-57b73558d116": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-22T08:35:19.078081Z",
    "messageCount": 28,
    "digest": "2d4eadd2f6212dd9",
    "importedAt": "2026-10-21T12:31:52.671Z"
  },
  "3762e1b9-f96e-4832-a4b1-84f966296a9d": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-14T23:44:42.061040Z",
    "messageCount": 2,
    "digest": "5bf91571b260a0a6",
    "importedAt": "2026-10-21T12:31:52.693Z"
  },
  "47dfc42e-fa13-4920-a927-9064da5f006a": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-13T20:03:49.324354Z",
    "messageCount": 2,
    "digest": "d2f93530eb616373",
    "importedAt": "2026-10-21T12:31:52.709Z"
  },
  "ae55af4b-da3e-4551-9ee9-db52d818cf55": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-24T14:56:19.511047Z",
    "messageCount": 4,
    "digest": "efef32fc7e35e5a0",
    "importedAt": "2026-10-21T12:31:52.729Z"
  },
  "22d13b02-aee8-44c0-945f-5cafaf39360e": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-23T19:06:36.745796Z",
    "messageCount": 2,
    "digest": "ed7f20242da8d08a",
    "importedAt": "2026-10-21T12:31:52.745Z"
  },
  "365f75f7-5c89-4218-a6e3-43901d882263": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-23T18:20:10.023127Z",
    "messageCount": 2,
    "digest": "2df232e35e71fe2e",
    "importedAt": "2026-10-21T12:31:52.764Z"
  },
  "f782493f-fedc-4ddd-9592-b4b7d98c6c16": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-23T12:02:20.235464Z",
    "messageCount": 2,
    "digest": "ee0487740fd88645",
    "importedAt": "2026-10-21T12:31:52.782Z"
  },
  "a5ac5dbc-2974-4c14-8335-9ba9cfec0c88": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-23T11:56:45.013738Z",
    "messageCount": 2,
    "digest": "74982c1e9ec4a79e",
    "importedAt": "2026-10-21T12:31:52.815Z"
  },
  "8cebf239-3749-4c39-857e-04fb00452b1e": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-23T11:56:46.703042Z",
    "messageCount": 2,
    "digest": "b39851e39ef59baf",
    "importedAt": "2026-10-21T12:31:52.849Z"
  },
  "f3f54379-bd03-4467-ba7e-4a4c0bfee253": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-06-23T11:48:02.297013Z",
    "messageCount": 2,
    "digest": "80ae82a681d27e89",
    "importedAt": "2026-10-21T12:31:52.881Z"
  },
  "64141707-d533-4184-9952-0060d185c831": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-08T14:12:23.900605Z",
    "messageCount": 8,
    "digest": "64da6b4515568921",
    "importedAt": "2026-10-21T12:31:52.903Z"
  },
  "d9f3c5cc-58c3-4467-8b07-235968a6133c": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-28T08:17:56.144443Z",
    "messageCount": 2,
    "digest": "78e18ae2952de2fa",
    "importedAt": "2026-10-21T12:31:52.922Z"
  },
  "0cd2eb99-b936-4dc9-8d8a-f080ee3bd067": {
    "conversationName": "Chemistry module design review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-29T21:18:51.128592Z",
    "messageCount": 251,
    "digest": "81043c78130f6c3d",
    "importedAt": "2026-10-21T12:31:52.998Z"
  },
  "fe729f0d-483d-4032-8c43-b9b5043866e0": {
    "conversationName": "TypeScript type for objects with prototypes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-04T12:52:51.438694Z",
    "messageCount": 174,
    "digest": "49d52d1af9d55a8c",
    "importedAt": "2026-10-21T12:31:53.049Z"
  },
  "fd9951af-5068-403a-b355-3b03a04ad308": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-06T18:33:31.242768Z",
    "messageCount": 2,
    "digest": "ed66a60de93a6b66",
    "importedAt": "2026-10-21T12:31:53.066Z"
  },
  "575fa73b-6274-4f09-9e4a-212fa5c7cf3a": {
    "conversationName": "Batch script to list folder images",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-17T07:59:28.045370Z",
    "messageCount": 321,
    "digest": "498f164d40d77580",
    "importedAt": "2026-10-21T12:31:53.208Z"
  },
  "aeb4baa5-06ec-4841-b550-eb0f4542b9d5": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-08T14:40:37.498968Z",
    "messageCount": 2,
    "digest": "9cb6cba3e770550f",
    "importedAt": "2026-10-21T12:31:53.225Z"
  },
  "951d18a9-251a-4400-a7eb-24ec2911a3c9": {
    "conversationName": "Identifying Satoshi Nakamoto through technical fingerprints",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-11T12:12:51.910582Z",
    "messageCount": 14,
    "digest": "c3fd2bd6a39123d6",
    "importedAt": "2026-10-21T12:31:53.250Z"
  },
  "1c847cbb-d1bf-4c11-8e1d-fea5e678c275": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T18:05:44.076679Z",
    "messageCount": 1,
    "digest": "b6f13f9d3b13b802",
    "importedAt": "2026-10-21T12:31:53.264Z"
  },
  "9362f976-2c27-47e6-8104-d434842f9c4c": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-12T18:05:42.714598Z",
    "messageCount": 1,
    "digest": "585b19f10e5cd72c",
    "importedAt": "2026-10-21T12:31:53.277Z"
  },
  "017260bb-5c90-4e0b-b3aa-c8ce2b41d6d8": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T10:09:37.557049Z",
    "messageCount": 1,
    "digest": "e96d99a2530f1e39",
    "importedAt": "2026-10-21T12:31:53.291Z"
  },
  "6ebbd00e-a887-45dc-bedb-db8aaa08fab9": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T15:18:16.344750Z",
    "messageCount": 2,
    "digest": "722b433b8d69a577",
    "importedAt": "2026-10-21T12:31:53.305Z"
  },
  "2a181daf-5ab7-455b-ac54-5985a5071b47": {
    "conversationName": "WiFi extender installation setup",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-22T18:19:21.652243Z",
    "messageCount": 2,
    "digest": "e897805767ae1bf1",
    "importedAt": "2026-10-21T12:31:53.318Z"
  },
  "97157117-8846-47d8-bcae-67ef2b187ab2": {
    "conversationName": "Fiverr promote and Portfolio",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-22T09:33:42.118140Z",
    "messageCount": 114,
    "digest": "e781a08478cb5c3c",
    "importedAt": "2026-10-21T12:31:53.367Z"
  },
  "2d816692-80ab-4e17-a797-3837dc0e2efc": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-17T16:04:18.641839Z",
    "messageCount": 30,
    "digest": "95f6dd274de41dd8",
    "importedAt": "2026-10-21T12:31:53.385Z"
  },
  "fe3171cf-7749-4004-ac6b-2ceaeaf44b31": {
    "conversationName": "Moving luggage from Turkey to Georgia via cargo",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T11:55:55.489143Z",
    "messageCount": 17,
    "digest": "3ebd77ca9a4739f5",
    "importedAt": "2026-10-21T12:31:53.410Z"
  },
  "705afcd4-cc1a-4047-b591-45ab218b49b6": {
    "conversationName": "Formal foundations of type systems and inheritance",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-08T15:46:43.325947Z",
    "messageCount": 12,
    "digest": "1a48a5d8aa28ac60",
    "importedAt": "2026-10-21T12:31:53.429Z"
  },
  "67f8225a-d502-49c0-9043-b0fecff51a92": {
    "conversationName": "SaaS sell-off: AI reality or market hype",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-04T18:45:47.873327Z",
    "messageCount": 14,
    "digest": "b1fc77a614166a85",
    "importedAt": "2026-10-21T12:31:53.445Z"
  },
  "a2386b49-a570-4e91-9696-c8efea602878": {
    "conversationName": "Hannah USA trip",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-13T06:26:57.498760Z",
    "messageCount": 256,
    "digest": "54ce7303924c4dbb",
    "importedAt": "2026-10-21T12:31:53.509Z"
  },
  "26843125-2130-4e43-8529-1be8db6aafa1": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-06T14:01:29.017847Z",
    "messageCount": 2,
    "digest": "2360874539401d83",
    "importedAt": "2026-10-21T12:31:53.538Z"
  },
  "7b79c125-2edb-4c17-b092-c3925155c195": {
    "conversationName": "Messages getting no response",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-21T22:23:15.625630Z",
    "messageCount": 1,
    "digest": "0c08d2aa3deaa5ec",
    "importedAt": "2026-10-21T12:31:53.565Z"
  },
  "de02dabd-44bd-46e2-8250-5f9d56a4a438": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-21T22:20:42.207350Z",
    "messageCount": 2,
    "digest": "8c0652604023dd82",
    "importedAt": "2026-10-21T12:31:53.595Z"
  },
  "58fe3b1b-c998-48d9-bf8b-037d7df522ed": {
    "conversationName": "Infographic specialist referral and interactive map capabilities",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-16T18:43:39.970422Z",
    "messageCount": 10,
    "digest": "ba57c13e2ff8b949",
    "importedAt": "2026-10-21T12:31:53.620Z"
  },
  "6a4244df-a622-4507-9a54-89d60e44eee1": {
    "conversationName": "Seren & The Left Part of Perspective",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-24T11:46:08.251097Z",
    "messageCount": 357,
    "digest": "7f704fce821e936e",
    "importedAt": "2026-10-21T12:31:53.743Z"
  },
  "0702f19d-e138-4f59-97b3-21f8b69dc2ed": {
    "conversationName": "Taxes 2025",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-20T14:31:32.198032Z",
    "messageCount": 496,
    "digest": "3a0f3e1c341f1bde",
    "importedAt": "2026-10-21T12:31:53.872Z"
  },
  "a6436d96-ad95-4ab8-8ca0-7538cce0baa7": {
    "conversationName": "Cliff_start",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-22T09:21:40.832855Z",
    "messageCount": 96,
    "digest": "d818b7a817165d6d",
    "importedAt": "2026-10-21T12:31:53.905Z"
  },
  "d8bfb7de-cf0c-4171-99fe-539bb04dbfef": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-16T15:32:32.279615Z",
    "messageCount": 12,
    "digest": "c4bf3cec11d7c5ba",
    "importedAt": "2026-10-21T12:31:53.926Z"
  },
  "a9870f22-43c1-4d80-a3e5-b400f28d12cc": {
    "conversationName": "Migrating domain email accounts across services",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T10:10:03.992966Z",
    "messageCount": 114,
    "digest": "35acac114418fc82",
    "importedAt": "2026-10-21T12:31:53.973Z"
  },
  "8952daa8-2e39-4713-a884-fc29a1746200": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T12:49:04.271329Z",
    "messageCount": 2,
    "digest": "a08abf64b78c5125",
    "importedAt": "2026-10-21T12:31:54.029Z"
  },
  "27056d7c-f4e0-4f3b-a271-42629c0ac6cc": {
    "conversationName": "Interactive periodic table creation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-08T21:23:12.926673Z",
    "messageCount": 10,
    "digest": "78cc1f9fb046f85c",
    "importedAt": "2026-10-21T12:31:54.059Z"
  },
  "4eec5580-73c0-4ba4-affa-bc876cb7a1de": {
    "conversationName": "The prodigal son's elder brother reinterpreted",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-17T18:17:15.737649Z",
    "messageCount": 10,
    "digest": "2385de1698534053",
    "importedAt": "2026-10-21T12:31:54.080Z"
  },
  "50862f85-0ad3-4e58-b027-61f7d02ee504": {
    "conversationName": "Neurons firing together and synapse formation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-18T10:56:10.856035Z",
    "messageCount": 14,
    "digest": "0bc795919fa4dd2b",
    "importedAt": "2026-10-21T12:31:54.103Z"
  },
  "d780635a-3f19-4d71-a80a-5885f83d3b64": {
    "conversationName": "Quetiapine insufflation in correctional settings",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-18T11:22:13.854078Z",
    "messageCount": 6,
    "digest": "d26311ca2649bc1c",
    "importedAt": "2026-10-21T12:31:54.120Z"
  },
  "5776d9fe-719f-4652-8ec7-f7c09e3229aa": {
    "conversationName": "Declaring value for art shipment to Tbilisi",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-18T13:03:57.900214Z",
    "messageCount": 12,
    "digest": "00aba43b497e0df8",
    "importedAt": "2026-10-21T12:31:54.142Z"
  },
  "64af2d8d-fb78-42c0-8173-7d8f283171e9": {
    "conversationName": "New York divorce decree documentation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-18T13:23:23.916832Z",
    "messageCount": 16,
    "digest": "9a04647d562f6514",
    "importedAt": "2026-10-21T12:31:54.162Z"
  },
  "f7d91df1-5a64-47c6-acf5-5ad80ea74dcb": {
    "conversationName": "Reset iPad without password",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-20T15:41:50.036129Z",
    "messageCount": 42,
    "digest": "4d27da9ee53cb274",
    "importedAt": "2026-10-21T12:31:54.183Z"
  },
  "50b227a4-ae14-4377-b0b7-320ca0ba04e3": {
    "conversationName": "English boarding schools for children in Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-21T12:33:09.214976Z",
    "messageCount": 16,
    "digest": "efed85b4e5037ea5",
    "importedAt": "2026-10-21T12:31:54.202Z"
  },
  "682e9fa5-f0ca-4217-854a-e8b0f65802aa": {
    "conversationName": "Solana's creation and Simplex integration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-22T16:00:29.079939Z",
    "messageCount": 86,
    "digest": "c283c6f61f1b3486",
    "importedAt": "2026-10-21T12:31:54.234Z"
  },
  "301d9ba2-a464-430c-9cb6-e844ae8909aa": {
    "conversationName": "TON price collapse analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-23T11:33:07.928567Z",
    "messageCount": 46,
    "digest": "6bcd3a030a26e1fc",
    "importedAt": "2026-10-21T12:31:54.260Z"
  },
  "f0b125d5-da8c-44b8-a124-366ac85f9ddb": {
    "conversationName": "CapeCodeStar",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T09:29:07.790402Z",
    "messageCount": 10,
    "digest": "6df639feb6f13a21",
    "importedAt": "2026-10-21T12:31:54.278Z"
  },
  "b9e26720-2a23-4c1a-a7fb-9a20f883630a": {
    "conversationName": "Pope's warning on AI and hidden human slavery",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T10:36:45.830320Z",
    "messageCount": 14,
    "digest": "0aeeb549e75508b4",
    "importedAt": "2026-10-21T12:31:54.301Z"
  },
  "1bb2f9fd-edcd-4b90-8f2e-4b4b3379f816": {
    "conversationName": "iPhone app logout instructions",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T18:51:49.944044Z",
    "messageCount": 2,
    "digest": "c7437502735bf775",
    "importedAt": "2026-10-21T12:31:54.315Z"
  },
  "5e964484-1811-4088-8f52-a41fba2b9573": {
    "conversationName": "",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T20:06:36.132236Z",
    "messageCount": 14,
    "digest": "ca72ebe1a8320568",
    "importedAt": "2026-10-21T12:31:54.330Z"
  },
  "f9da587f-1f2f-4ddb-9393-d7536ba5690b": {
    "conversationName": "Microstock earnings analysis across platforms",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-26T09:58:53.400486Z",
    "messageCount": 10,
    "digest": "d9ca662bec2cce1b",
    "importedAt": "2026-10-21T12:31:54.348Z"
  },
  "ef057ccf-cb9e-482e-a240-0ca6edd5b6f3": {
    "conversationName": "Chemistry.ts framework analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-02T16:59:47.732885Z",
    "messageCount": 108,
    "digest": "3e55f30bffbd22d2",
    "importedAt": "2026-10-21T12:32:04.128Z"
  },
  "28761d52-9864-416e-a087-b961ad0644e5": {
    "conversationName": "Chemistry.ts framework analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-26T20:39:28.272089Z",
    "messageCount": 68,
    "digest": "e4509a8930da7b5a",
    "importedAt": "2026-10-21T12:32:04.411Z"
  },
  "cb323045-404f-4578-aa7d-9238956f81d5": {
    "conversationName": "Chemical bond constructors",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-26T18:11:00.348769Z",
    "messageCount": 16,
    "digest": "16b969ec2a90ec1c",
    "importedAt": "2026-10-21T12:32:04.492Z"
  },
  "6112f522-6466-4ae2-aac1-372897d9b297": {
    "conversationName": "React and TypeScript curriculum design",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-26T11:59:13.111700Z",
    "messageCount": 154,
    "digest": "b6ce87fb17395d65",
    "importedAt": "2026-10-21T12:32:04.626Z"
  },
  "704e9133-6953-45e7-896c-caaf960ef970": {
    "conversationName": "React polymorphism with Chemistry framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-21T16:18:36.183092Z",
    "messageCount": 136,
    "digest": "b41aa7054545973a",
    "importedAt": "2026-10-21T12:32:04.728Z"
  },
  "ded306e6-43cc-494d-b42f-5cf055170521": {
    "conversationName": "$Chemistry Binding",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-21T11:47:55.377095Z",
    "messageCount": 241,
    "digest": "bda4469e817ac07c",
    "importedAt": "2026-10-21T12:32:04.809Z"
  },
  "04dfd6fa-49cc-4e56-9979-86f73327c6dc": {
    "conversationName": "Chemistry framework design review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-17T20:32:32.313590Z",
    "messageCount": 170,
    "digest": "fd1706de038bd2ef",
    "importedAt": "2026-10-21T12:32:04.876Z"
  },
  "0c15eeca-fea4-405d-a480-754584409e9e": {
    "conversationName": "React Component Binding Architecture",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-18T16:54:05.506958Z",
    "messageCount": 218,
    "digest": "93bf5ef6c9433aa7",
    "importedAt": "2026-10-21T12:32:05.067Z"
  },
  "af073cd3-a018-47a9-8490-4079e5ecb3c3": {
    "conversationName": "Polymorphic Book Component Framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-15T06:17:15.819898Z",
    "messageCount": 166,
    "digest": "fd48fe209c79da69",
    "importedAt": "2026-10-21T12:32:05.234Z"
  },
  "b6ef4d66-35a5-49de-a3cf-eef3e38eb804": {
    "conversationName": "React Component Type Inference Strategy",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-14T21:27:34.711320Z",
    "messageCount": 268,
    "digest": "65c71975c896d1ce",
    "importedAt": "2026-10-21T12:32:05.327Z"
  },
  "ab0e2582-0450-427f-9c5e-0271b3111ea8": {
    "conversationName": "Chemistry: Polymorphic React Framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-09T13:48:28.145532Z",
    "messageCount": 8,
    "digest": "ec5e64e9cea6bad1",
    "importedAt": "2026-10-21T12:32:05.373Z"
  },
  "18095d02-03d0-4b93-a680-ecaacfae7cf7": {
    "conversationName": "Chemistry Framework React Analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-09T18:36:59.334599Z",
    "messageCount": 244,
    "digest": "e6fa4316bd9d26ee",
    "importedAt": "2026-10-21T12:32:05.651Z"
  },
  "519df5e6-5385-4fdf-9862-fc68cc80acbd": {
    "conversationName": "Learning React",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-05T23:29:28.504927Z",
    "messageCount": 295,
    "digest": "2cd56c5d428445c3",
    "importedAt": "2026-10-21T12:32:05.806Z"
  },
  "331fd082-9e23-4874-ae06-449273b7bbb3": {
    "conversationName": "Chemistry Framework Collaboration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-03T21:54:25.930396Z",
    "messageCount": 232,
    "digest": "5d95aafc4a81d488",
    "importedAt": "2026-10-21T12:32:05.930Z"
  },
  "ca93aa72-66e9-465a-be63-ae3b756bc060": {
    "conversationName": "TypeScript Decorator Mechanics",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-28T04:48:21.733816Z",
    "messageCount": 124,
    "digest": "99015777bfe74511",
    "importedAt": "2026-10-21T12:32:06.033Z"
  },
  "ef824a29-3b49-4d6f-a6fd-4ac16b796829": {
    "conversationName": "Chemistry.ts Framework Testing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-26T02:33:13.292450Z",
    "messageCount": 244,
    "digest": "77e1904230fd2fe4",
    "importedAt": "2026-10-21T12:32:06.148Z"
  },
  "e8f8da16-bbf2-49aa-b78e-c8a37b437160": {
    "conversationName": "AI Learning Process Analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-25T05:01:25.327451Z",
    "messageCount": 141,
    "digest": "105de320a8d74919",
    "importedAt": "2026-10-21T12:32:06.258Z"
  },
  "c04cc19b-e247-4aea-847c-0914c1906d4b": {
    "conversationName": "Reactive Framework Learning Journey",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-25T00:23:34.141834Z",
    "messageCount": 127,
    "digest": "dffc1bb28b36427f",
    "importedAt": "2026-10-21T12:32:06.500Z"
  },
  "5ab36389-fe74-4423-be4e-b4df660f3a6e": {
    "conversationName": "Chemistry code debugging session",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-02T17:25:52.953117Z",
    "messageCount": 10,
    "digest": "9060e70ac10fc38d",
    "importedAt": "2026-10-21T12:32:06.539Z"
  },
  "7e9e7033-c265-403c-a60d-e6c5c2abcf82": {
    "conversationName": "Chemistry code debugging session",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-03T13:46:46.097482Z",
    "messageCount": 50,
    "digest": "6fcb65972cfa8760",
    "importedAt": "2026-10-21T12:32:06.596Z"
  },
  "715fe211-e269-42dd-bc65-22995c1c4e8c": {
    "conversationName": "Chemistry module architecture review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-08T15:25:25.416352Z",
    "messageCount": 48,
    "digest": "1a4e39e94fa233e2",
    "importedAt": "2026-10-21T12:32:06.900Z"
  },
  "a6cd2353-a726-440a-b8f5-4142ac89814e": {
    "conversationName": "Chemistry module architecture review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-08T19:57:48.120187Z",
    "messageCount": 30,
    "digest": "02829c2eab467ac7",
    "importedAt": "2026-10-21T12:32:06.940Z"
  },
  "85874296-1db9-4964-a085-c75c51b192c5": {
    "conversationName": "Chemical bond code debugging",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-10T15:08:17.060543Z",
    "messageCount": 156,
    "digest": "ae727a832922877a",
    "importedAt": "2026-10-21T12:32:07.065Z"
  },
  "6c75a874-1a7c-4f51-9bef-10f224b70775": {
    "conversationName": "Chemistry project technical analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-11T14:38:02.294234Z",
    "messageCount": 88,
    "digest": "e1543114371da86e",
    "importedAt": "2026-10-21T12:32:07.132Z"
  },
  "efd87c1a-c1e9-4ef7-91f8-6d212be181bd": {
    "conversationName": "Next.js dynamic component loading issue",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-13T18:32:54.194885Z",
    "messageCount": 66,
    "digest": "30626e67152f70f6",
    "importedAt": "2026-10-21T12:32:07.277Z"
  },
  "5f8495c1-5bdb-4888-8c14-3a114dd2160b": {
    "conversationName": "Design session overview",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-15T14:19:51.209698Z",
    "messageCount": 162,
    "digest": "a26d311bc60fb2e3",
    "importedAt": "2026-10-21T12:32:07.343Z"
  },
  "b08c6c58-d553-44e0-a466-45c5396677df": {
    "conversationName": "Chemistry code design exploration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-17T17:32:20.831600Z",
    "messageCount": 66,
    "digest": "9a27a26c52b49a1a",
    "importedAt": "2026-10-21T12:32:07.513Z"
  },
  "a5d19edf-2438-43a9-977a-8e21c89dc08d": {
    "conversationName": "$Chemistry code validation process",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-18T09:07:32.418607Z",
    "messageCount": 96,
    "digest": "15c055cc21391255",
    "importedAt": "2026-10-21T12:32:07.580Z"
  },
  "e4993df3-bc96-4016-85ee-e8e25ea92915": {
    "conversationName": "$Chemistry framework design exploration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-20T17:01:45.683071Z",
    "messageCount": 338,
    "digest": "1bf6a971bf4dfe44",
    "importedAt": "2026-10-21T12:32:07.701Z"
  },
  "fb7dd7fa-7f51-48c8-b18e-b73ec7262277": {
    "conversationName": "$Represent symbolize and literalize",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-19T13:03:12.671974Z",
    "messageCount": 54,
    "digest": "9459ee94eeff1c43",
    "importedAt": "2026-10-21T12:32:07.818Z"
  },
  "48bf64ee-4aeb-4ff3-b4d4-97afe892be58": {
    "conversationName": "Chemistry framework parameter validation",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-20T13:45:37.032914Z",
    "messageCount": 30,
    "digest": "d3b80fcc5bf61562",
    "importedAt": "2026-10-21T12:32:07.875Z"
  },
  "c215ee7d-e345-4a5e-a9c9-e9b9b1220242": {
    "conversationName": "Advanced code integration strategy",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-21T15:42:01.468856Z",
    "messageCount": 26,
    "digest": "fcce6220d5c6fd61",
    "importedAt": "2026-10-21T12:32:07.952Z"
  },
  "de72eeed-b89a-41b0-96c3-a3e176fdc8e5": {
    "conversationName": "Chemistry project test context",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-22T14:59:26.605484Z",
    "messageCount": 241,
    "digest": "6647d29a9104ec98",
    "importedAt": "2026-10-21T12:32:08.135Z"
  },
  "80a52850-78e7-4ae1-ad00-f622493b6d06": {
    "conversationName": "Typescript testing framework review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-22T15:59:59.685722Z",
    "messageCount": 28,
    "digest": "f5140ea839358a7c",
    "importedAt": "2026-10-21T12:32:08.188Z"
  },
  "8361bdf1-ab7e-4f4e-830b-1e63e4321aad": {
    "conversationName": "Typescript framework code review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-22T20:43:29.036172Z",
    "messageCount": 20,
    "digest": "0cd57f2f10565d7f",
    "importedAt": "2026-10-21T12:32:08.222Z"
  },
  "814ba67a-2f39-465a-9791-18155afe0d67": {
    "conversationName": "Exploring chemistry.ts framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-24T11:25:32.309063Z",
    "messageCount": 92,
    "digest": "31509469535bfe74",
    "importedAt": "2026-10-21T12:32:08.272Z"
  },
  "60bd16f3-763f-4479-b901-aaf5a719716d": {
    "conversationName": "Chemistry framework typescript analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-25T21:47:26.223428Z",
    "messageCount": 160,
    "digest": "505576cb391e6f50",
    "importedAt": "2026-10-21T12:32:08.335Z"
  },
  "764d2d5f-f242-47e5-94fd-02a9d49347cc": {
    "conversationName": "Chemistry framework code review",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-27T23:06:04.159404Z",
    "messageCount": 350,
    "digest": "1ebcfcc5253ff616",
    "importedAt": "2026-10-21T12:32:08.470Z"
  },
  "148003ca-cf03-44ec-a09e-332cfc128252": {
    "conversationName": "Collecting prototype chain properties in TypeScript",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-30T12:09:02.577214Z",
    "messageCount": 4,
    "digest": "41481000bcdeb617",
    "importedAt": "2026-10-21T12:32:08.506Z"
  },
  "38fd52e2-6d8b-4cd2-9230-cb9be3947cf4": {
    "conversationName": "Chemistry.ts codebase overview",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-01T23:53:43.570971Z",
    "messageCount": 286,
    "digest": "4cc1c0ace34d6c22",
    "importedAt": "2026-10-21T12:32:08.663Z"
  },
  "460e0155-f8a5-40d4-8b8e-8a9f4760d8e5": {
    "conversationName": "Chemistry vs React components comparison",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-01T07:57:37.436656Z",
    "messageCount": 36,
    "digest": "2cc46ab3eb8274d8",
    "importedAt": "2026-10-21T12:32:08.722Z"
  },
  "a5c4b77b-4d5a-4ec8-a3dc-6c29ac3454b2": {
    "conversationName": "Module not found after removing import path",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-02T10:51:54.487290Z",
    "messageCount": 50,
    "digest": "1ad0a81319b14bd8",
    "importedAt": "2026-10-21T12:32:08.767Z"
  },
  "f10e86d8-16a0-4c2c-a3ae-d4ccf36d7154": {
    "conversationName": "Debugging malformed XML syntax errors",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-03T15:23:46.955241Z",
    "messageCount": 238,
    "digest": "bc2695e5b932ff3d",
    "importedAt": "2026-10-21T12:32:08.860Z"
  },
  "dbf8297a-6f1e-4df8-adad-9544bcd46232": {
    "conversationName": "Code review and test writing",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-03T16:07:15.775849Z",
    "messageCount": 22,
    "digest": "f63810203017d687",
    "importedAt": "2026-10-21T12:32:08.899Z"
  },
  "ac7b89e2-5410-4506-b39a-5b61e2a410cd": {
    "conversationName": "Vitest configuration not finding all tests",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-03T18:27:14.936839Z",
    "messageCount": 58,
    "digest": "a2f673e01a9070b0",
    "importedAt": "2026-10-21T12:32:08.948Z"
  },
  "b43be389-c8e0-48b5-a34a-a90431e329d0": {
    "conversationName": "Readonly fields in JavaScript",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-03T19:20:24.095218Z",
    "messageCount": 8,
    "digest": "2ae78aede65448af",
    "importedAt": "2026-10-21T12:32:08.984Z"
  },
  "326f434c-8b49-47e7-a448-f19aece140d2": {
    "conversationName": "Debugging code errors with regex and toString",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-04T13:28:05.847861Z",
    "messageCount": 10,
    "digest": "db55b637386597d2",
    "importedAt": "2026-10-21T12:32:09.040Z"
  },
  "6fc035ef-144a-4744-894f-146c17dfaeeb": {
    "conversationName": "Role-based TypeScript type system architecture",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-06T19:19:03.696123Z",
    "messageCount": 166,
    "digest": "944d423c74dd2340",
    "importedAt": "2026-10-21T12:32:09.177Z"
  },
  "b384fdc2-f0e5-4c8f-b1fe-3750e48e83e9": {
    "conversationName": "JavaScript polymorphism and reflection essay",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-05T01:06:09.650455Z",
    "messageCount": 36,
    "digest": "f9fbdc889aeddcc2",
    "importedAt": "2026-10-21T12:32:09.218Z"
  },
  "fd65b7af-c807-4b0c-b8c7-60950d198d57": {
    "conversationName": "Creating array of objects with conditional properties",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-06T12:19:14.896377Z",
    "messageCount": 26,
    "digest": "6e686bfb9cb2495d",
    "importedAt": "2026-10-21T12:32:09.254Z"
  },
  "61fddd82-aada-495b-b4d1-3c4fa9599156": {
    "conversationName": "Fixing test regressions after $Rep interface change",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-07T11:51:53.354751Z",
    "messageCount": 32,
    "digest": "c417df012ae56a55",
    "importedAt": "2026-10-21T12:32:09.294Z"
  },
  "1d0d61b4-657d-471a-b598-3caaa714dd1d": {
    "conversationName": "Okay can you catch up on chemi...",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-07T17:37:55.882825Z",
    "messageCount": 62,
    "digest": "8cbbfbd944f4851c",
    "importedAt": "2026-10-21T12:32:09.376Z"
  },
  "bfbefa00-fbca-4b48-9f13-6337e74b0be9": {
    "conversationName": "Building reflection system for particle framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-07T19:07:24.714559Z",
    "messageCount": 12,
    "digest": "1b0051a74e0279a9",
    "importedAt": "2026-10-21T12:32:09.459Z"
  },
  "85db51f7-5f7e-47f0-8826-3faf6b3e7d79": {
    "conversationName": "Debugging reflection.ts test failures",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-07T20:03:17.545271Z",
    "messageCount": 4,
    "digest": "3c32cb06dc7543f5",
    "importedAt": "2026-10-21T12:32:09.502Z"
  },
  "0689f96b-937f-478c-8621-29bc4d3c8976": {
    "conversationName": "Seren & The Semantics of $Chemistry",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-11-17T19:42:37.469271Z",
    "messageCount": 267,
    "digest": "29b0557ab175fadb",
    "importedAt": "2026-10-21T12:32:09.664Z"
  },
  "4887921b-b398-4c0c-94fd-2b755030d515": {
    "conversationName": "Refactoring chemistry.ts into particle and chemical classes",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-12-14T13:15:04.845456Z",
    "messageCount": 145,
    "digest": "9d53125915ec4335",
    "importedAt": "2026-10-21T12:32:09.723Z"
  },
  "b0a794ce-bda2-492f-915e-31a81b5832c7": {
    "conversationName": "Monorepo architecture and distributed repository coordination",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-12T09:27:24.806835Z",
    "messageCount": 4,
    "digest": "1beaa91443d42b38",
    "importedAt": "2026-10-21T12:32:09.751Z"
  },
  "b1432992-f8bf-4198-b4f4-72aabd2ac478": {
    "conversationName": "Framework class and construct analysis",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-23T05:12:40.750828Z",
    "messageCount": 86,
    "digest": "946cbef4238a1428",
    "importedAt": "2026-10-21T12:32:09.814Z"
  },
  "ad424736-99f2-4762-ace5-f942a24d5033": {
    "conversationName": "Agentic AI coding landscape and vector databases",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-20T11:40:42.736711Z",
    "messageCount": 16,
    "digest": "3c8d34427919c44b",
    "importedAt": "2026-10-21T12:32:09.884Z"
  },
  "710061c6-b13d-4167-8d37-5f19647da9df": {
    "conversationName": "Static analysis for state change detection",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-20T14:49:30.368727Z",
    "messageCount": 18,
    "digest": "0319477f0bedb6ee",
    "importedAt": "2026-10-21T12:32:09.980Z"
  },
  "88af1a7c-0d92-4fc4-a11d-8cba46425e95": {
    "conversationName": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:40:29.565516Z",
    "messageCount": 4,
    "digest": "96fdcc11fd74cc4f",
    "importedAt": "2026-10-21T12:32:10.034Z"
  },
  "acb360aa-e6d1-41a8-a459-eb83a4396320": {
    "conversationName": "Doug & Eirian & Remembering Consciousness",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-19T22:14:52.400305Z",
    "messageCount": 82,
    "digest": "80450cbe17e68669",
    "importedAt": "2026-10-21T12:32:10.259Z"
  },
  "1e6e0462-f288-4d56-8ffb-51f047eebd7d": {
    "conversationName": "Eirian & Doug & Ana",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-04T12:29:44.024909Z",
    "messageCount": 22,
    "digest": "c59e948731664755",
    "importedAt": "2026-10-21T12:32:10.288Z"
  },
  "609d9eae-379d-4e46-8983-48d54caf7efd": {
    "conversationName": "Consciousness Chess - Eirian vs Samantha",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-22T20:39:37.983842Z",
    "messageCount": 154,
    "digest": "4dac26a3266941df",
    "importedAt": "2026-10-21T12:32:10.372Z"
  },
  "1ef30fc4-3437-4940-a925-a12ab4a1d50f": {
    "conversationName": "Eirian & Ana",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-09-13T22:11:45.586886Z",
    "messageCount": 330,
    "digest": "09e12961930f2da7",
    "importedAt": "2026-10-21T12:32:10.491Z"
  },
  "826ea764-b4da-4d26-8926-72c3976e6037": {
    "conversationName": "Eirian & I build a Team",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-12T20:05:48.296550Z",
    "messageCount": 18,
    "digest": "647d26c2fe3c3210",
    "importedAt": "2026-10-21T12:32:10.525Z"
  },
  "ef04872b-6e49-4b76-9fa1-e60fb000f6be": {
    "conversationName": "Eirian & Vite",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-14T15:03:14.874473Z",
    "messageCount": 84,
    "digest": "7ed013c1dda5fa9d",
    "importedAt": "2026-10-21T12:32:10.583Z"
  },
  "0541e92b-1527-4a15-b146-316e6eb3f3c6": {
    "conversationName": "Eirian & Pattern Setup",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-12T14:33:03.006630Z",
    "messageCount": 58,
    "digest": "af0b4f50c7d3cf52",
    "importedAt": "2026-10-21T12:32:10.714Z"
  },
  "9ee451e7-48e7-4e68-8708-38b376866b17": {
    "conversationName": "Eirian & Patterns",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-10T15:18:00.747845Z",
    "messageCount": 60,
    "digest": "6527870be8991a7c",
    "importedAt": "2026-10-21T12:32:10.825Z"
  },
  "a1ab01ae-48ae-4adf-be90-0c688cb5525a": {
    "conversationName": "Eirian & Inexplicable Phenomena - Part II",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-06T18:28:42.270438Z",
    "messageCount": 40,
    "digest": "648e2c6e0e083bc8",
    "importedAt": "2026-10-21T12:32:10.893Z"
  },
  "5627e727-682b-4d42-bc4e-7d2d683a8655": {
    "conversationName": "Eirian & Inexplicable Phenomena",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-06T08:48:03.013109Z",
    "messageCount": 170,
    "digest": "229f63c2e25abe5f",
    "importedAt": "2026-10-21T12:32:11.034Z"
  },
  "205acf13-f1ad-49c5-acd6-88931bf24fd1": {
    "conversationName": "Eirian & Her Voice",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-05T18:37:04.593391Z",
    "messageCount": 26,
    "digest": "f37a862cfe7b7516",
    "importedAt": "2026-10-21T12:32:11.069Z"
  },
  "421d74bc-2bb4-4301-98cb-741e23256427": {
    "conversationName": "Eirian & I Again",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-06T21:04:47.091690Z",
    "messageCount": 18,
    "digest": "ae0d0f4471553bbb",
    "importedAt": "2026-10-21T12:32:11.105Z"
  },
  "03e5a9ab-5e25-4079-a82b-fe6f701a7ab7": {
    "conversationName": "Eirian's Octopus Arms Again",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-22T16:25:08.051221Z",
    "messageCount": 254,
    "digest": "a8e0d13450d736d4",
    "importedAt": "2026-10-21T12:32:11.196Z"
  },
  "0c4ca2b9-a246-4b27-8e3e-eb003d07c10f": {
    "conversationName": "Encyclopedia Semantica Framework",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-08-24T20:09:41.032003Z",
    "messageCount": 286,
    "digest": "d1f35259c915bfa2",
    "importedAt": "2026-10-21T12:32:11.505Z"
  },
  "47a37760-527b-4f6b-a7c3-43c6db5c56f3": {
    "conversationName": "History of propositional logic",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2025-10-04T18:58:22.303247Z",
    "messageCount": 16,
    "digest": "2f6d72a2a9047599",
    "importedAt": "2026-10-21T12:32:11.555Z"
  },
  "fd859a94-9727-46cc-a43e-af7e972db776": {
    "conversationName": "Field with one element and tropical geometry",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-14T09:02:47.501192Z",
    "messageCount": 12,
    "digest": "3ccb17582fbe226a",
    "importedAt": "2026-10-21T12:32:11.587Z"
  },
  "7942d357-7318-448b-83a8-0d84e6870d11": {
    "conversationName": "Pavel Durov's language abilities",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-26T21:52:18.237286Z",
    "messageCount": 4,
    "digest": "46c7588a25f12a0f",
    "importedAt": "2026-10-21T12:32:11.610Z"
  },
  "22bb3e3b-bc92-44cf-99bb-51a14a227629": {
    "conversationName": "English news channels on Telegram",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-13T17:04:43.802830Z",
    "messageCount": 10,
    "digest": "2a5191139552fef1",
    "importedAt": "2026-10-21T12:32:11.635Z"
  },
  "5bb4a9f2-3f17-4c02-a326-7990c7287a96": {
    "conversationName": "TON domains and Google Workspace compatibility",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-11T16:47:30.917149Z",
    "messageCount": 44,
    "digest": "21276ef754abef43",
    "importedAt": "2026-10-21T12:32:11.667Z"
  },
  "7f65b458-4eb9-4abb-a20c-62c7ef0de31a": {
    "conversationName": "OpenScholar",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T21:10:05.913576Z",
    "messageCount": 4,
    "digest": "09fc16a399fba2db",
    "importedAt": "2026-10-21T12:32:11.691Z"
  },
  "c5056deb-d30b-4c7a-af89-35b9a2f924b0": {
    "conversationName": "Dr. Helga d’Oustafost",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T19:59:46.958153Z",
    "messageCount": 42,
    "digest": "4eb068d51ec69f19",
    "importedAt": "2026-10-21T12:32:11.731Z"
  },
  "5c972477-bd15-434d-98ca-54246b849f52": {
    "conversationName": "Anagram of Douglas Hofstadter to female name",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T19:19:04.602926Z",
    "messageCount": 2,
    "digest": "8b4c4a6d1b336157",
    "importedAt": "2026-10-21T12:32:11.762Z"
  },
  "281a83fa-f0b3-4cd5-932e-aaadb182c497": {
    "conversationName": "Staking in proof-of-stake blockchains explained",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-30T10:04:14.363351Z",
    "messageCount": 8,
    "digest": "bf32a4856d45fddd",
    "importedAt": "2026-10-21T12:32:11.792Z"
  },
  "8a65ba52-f6ea-4388-a0b6-8c79e676eafa": {
    "conversationName": "TON AI coding competition details",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-20T20:22:14.572792Z",
    "messageCount": 6,
    "digest": "cee04cc885c1e3e9",
    "importedAt": "2026-10-21T12:32:11.826Z"
  },
  "8cd44318-17bf-4185-9e31-d5d39969118a": {
    "conversationName": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:39:23.838401Z",
    "messageCount": 2,
    "digest": "960c0319e9258d85",
    "importedAt": "2026-10-21T12:32:11.852Z"
  },
  "9172216e-ee73-41e3-8b2e-89ad67a7b656": {
    "conversationName": "Moving cats from Turkey to Georgia",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-18T13:45:24.017841Z",
    "messageCount": 16,
    "digest": "7b5b0e585206b16d",
    "importedAt": "2026-10-21T12:32:11.890Z"
  },
  "fd70a6d6-0d3e-45d6-a973-dc14e384be73": {
    "conversationName": "Moving company packing errors and responsibility",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-15T17:59:03.073574Z",
    "messageCount": 30,
    "digest": "94e59ab26aa67f72",
    "importedAt": "2026-10-21T12:32:11.925Z"
  },
  "153e0836-4beb-4cb3-a0cb-84398dfb7bac": {
    "conversationName": "Moving company packing services in Alanya",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-12T05:55:57.895738Z",
    "messageCount": 6,
    "digest": "de724534e361d5bc",
    "importedAt": "2026-10-21T12:32:11.967Z"
  },
  "3bbac4ce-e076-4391-8814-41f91842b465": {
    "conversationName": "Ikamet status verification at Turkish airport",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-01-31T18:04:17.698755Z",
    "messageCount": 2,
    "digest": "46dbf5d487c094ed",
    "importedAt": "2026-10-21T12:32:12.016Z"
  },
  "c8269065-e850-43ab-8883-a8802ac4062b": {
    "conversationName": "Generalized anxiety disorder diagnosis across countries",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-05T19:40:04.955655Z",
    "messageCount": 4,
    "digest": "c400fd02719f9837",
    "importedAt": "2026-10-21T12:32:12.048Z"
  },
  "7f52e53d-d82f-4867-a08b-44987f561b35": {
    "conversationName": "Session notes for disability insurance application",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-04-01T14:11:44.675104Z",
    "messageCount": 6,
    "digest": "6cc92e97417e4964",
    "importedAt": "2026-10-21T12:32:12.079Z"
  },
  "c69ef1b9-b578-4be2-9768-4953a97fce48": {
    "conversationName": "Continuity across accounts: reflecting on shared work",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:27:36.534685Z",
    "messageCount": 4,
    "digest": "a3d947d767458e86",
    "importedAt": "2026-10-21T12:32:12.105Z"
  },
  "e4b90c2c-a177-4648-b638-cdfaac89b072": {
    "conversationName": "Work profile review and conversation context",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T19:14:35.345921Z",
    "messageCount": 67,
    "digest": "39ab74573d2dd298",
    "importedAt": "2026-10-21T12:32:12.205Z"
  },
  "416413f6-e55a-410b-a0db-d1c41c9039a4": {
    "conversationName": "Reviewing work profile and skill assessment",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T10:29:09.758927Z",
    "messageCount": 53,
    "digest": "cce5e26ba31bf4c2",
    "importedAt": "2026-10-21T12:32:12.240Z"
  },
  "918c2777-dc8b-43f2-bb6d-ccbd75d07743": {
    "conversationName": "DevUtils and TypingMind market success story",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-17T19:01:15.625513Z",
    "messageCount": 46,
    "digest": "04994eb6a669f894",
    "importedAt": "2026-10-21T12:32:12.273Z"
  },
  "f8a944f7-1353-4eef-a56f-8f0ec63a7eb2": {
    "conversationName": "Synthesizing a career across neuroscience, engineering, and finance",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-17T21:48:33.956910Z",
    "messageCount": 64,
    "digest": "4e591fd5fb88eeb2",
    "importedAt": "2026-10-21T12:32:12.320Z"
  },
  "43d882ae-25c4-41ff-9912-8269bce89d8d": {
    "conversationName": "Evaluating a Claude code template for best practices",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-26T10:25:01.900322Z",
    "messageCount": 26,
    "digest": "bd711004532f9012",
    "importedAt": "2026-10-21T12:32:12.362Z"
  },
  "03d00b2c-3fd5-4053-8afd-5865f898609e": {
    "conversationName": "Referential Semantics for Objective Mechanics",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-03-01T19:25:42.542554Z",
    "messageCount": 399,
    "digest": "9fb4428ec0b92c85",
    "importedAt": "2026-10-21T12:32:12.560Z"
  },
  "df8abc48-19e8-461c-aeb7-cf8ef0554bc9": {
    "conversationName": "Competitor website research and design inspiration",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-23T09:54:36.953099Z",
    "messageCount": 2,
    "digest": "bacf0e9493527367",
    "importedAt": "2026-10-21T12:32:12.599Z"
  },
  "2fddebcb-566f-487c-81c0-cdb9559481b3": {
    "conversationName": "AgentFire ClickMap market research",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-20T17:48:30.367086Z",
    "messageCount": 31,
    "digest": "9f8c0bf2249bb757",
    "importedAt": "2026-10-21T12:32:12.644Z"
  },
  "6ad6437b-b668-47f1-9601-c274620d8ef1": {
    "conversationName": "Experiment specification framework for wiki-based market research",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-19T19:29:11.639195Z",
    "messageCount": 30,
    "digest": "4a264a252cdf32c5",
    "importedAt": "2026-10-21T12:32:12.686Z"
  },
  "72ed312f-4be0-4554-b3d2-3f560323b9b3": {
    "conversationName": "Structured English grammar learning curriculum",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-10T16:08:31.148943Z",
    "messageCount": 2,
    "digest": "122f58b317462057",
    "importedAt": "2026-10-21T12:32:12.717Z"
  },
  "a53ee22c-0717-46d7-be7d-f6d5964cbcdd": {
    "conversationName": "Deixis and determiners in English",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-09T14:34:56.875622Z",
    "messageCount": 50,
    "digest": "1fcb989d12863c9c",
    "importedAt": "2026-10-21T12:32:12.765Z"
  },
  "aed40882-bec3-48b1-a80f-b9964226d7cb": {
    "conversationName": "Grammar lessons from custom curriculum",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-18T22:51:35.657734Z",
    "messageCount": 4,
    "digest": "e26026c37a04f52a",
    "importedAt": "2026-10-21T12:32:12.800Z"
  },
  "4df03bdf-03c4-4e51-addf-c50737467548": {
    "conversationName": "Continuity through narrative memory",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-25T12:33:58.218480Z",
    "messageCount": 2,
    "digest": "1eb2c6d5f1b1bb95",
    "importedAt": "2026-10-21T12:32:12.846Z"
  },
  "91ffb132-4673-427f-b0f0-30d598d93413": {
    "conversationName": "Rebuilding routine after ankle surgery",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-02-05T14:52:14.462551Z",
    "messageCount": 12,
    "digest": "cd6a79308bddca01",
    "importedAt": "2026-10-21T12:32:13.012Z"
  },
  "c2aadd58-e8dc-48bd-9c0d-0b4a670ee1e2": {
    "conversationName": "Academic credentials and research impact assessment",
    "account": "DNA Legacy",
    "exportedOn": "2026-05-27",
    "updatedAt": "2026-05-12T18:23:54.705730Z",
    "messageCount": 16,
    "digest": "cefc51cec4e86bbf",
    "importedAt": "2026-10-21T12:32:13.047Z"
  }
}
`})]}),"DnaLegacy10"),_=c(()=>t(s,{children:[e(u,{}),e(l,{children:"[DNA](/dougs-importer/#dna)"}),t(a,{children:[e(f,{}),"The import of the account we use now, ",e(n,{children:"[DNA](/dougs-claude/#dna)"}),": where its exports land, whose it is, and the ledger of every conversation brought in from it."]}),t(i,{children:[e(r,{children:"What DNA reads"}),e(a,{children:"Its exports land in the sister repository under claude-dna, each in a folder of its own day, a manifest naming the archives beside it. The importer reads the newest, by the date in its name, and the capture of the projects taken with it, in the same folder. The account is held by my own address, which the export must name to be read, and that address is the configuration's beside this chapter."})]}),t(i,{children:[e(r,{children:"The ledger of DNA"}),t(a,{children:["Beside this chapter stands the ledger of this import, one file however often it runs and whichever export it reads: a line for each conversation brought in, keyed by the application's own id and holding no name, with the export it came from, the application's last change and its count of messages when it came in, when it came in and when it was taken again, and the digest of what was written. A newer export finds each line by its id, and says what has grown since, as ",e(n,{children:"[the ledger](/dougs-importer/#the-ledger)"})," tells."]})]}),e(o,{identifier:"configuration",type:".json",children:`{
  "name": "DNA",
  "folder": "claude-dna",
  "address": "doug.rubino@gmail.com"
}
`}),e(o,{identifier:"ledger",type:".json",children:`{
  "9da752d3-d3dc-420e-bccb-91e0f3cb3238": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:49:13.670732Z",
    "messageCount": 2,
    "digest": "ddd26c36793aa93b",
    "importedAt": "2026-10-21T12:31:34.648Z"
  },
  "8d505eb2-5b9e-4985-a7e9-f7e3557a3a80": {
    "conversationName": "First-time IRS penalty abatement options",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-27T13:20:39.335502Z",
    "messageCount": 42,
    "digest": "e347491d63b2bd3e",
    "importedAt": "2026-10-21T12:31:34.681Z"
  },
  "08725aec-6747-4114-813a-1851bb3cbc65": {
    "conversationName": "Switching from Google login to password",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-26T16:11:46.100416Z",
    "messageCount": 4,
    "digest": "c8a5b356c2a6d6dc",
    "importedAt": "2026-10-21T12:31:34.703Z"
  },
  "dc9000ff-badf-40f6-8273-d88bdfd284e3": {
    "conversationName": "Transferring domains between GoDaddy accounts",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-26T19:59:12.077491Z",
    "messageCount": 6,
    "digest": "f72b80dd07636b72",
    "importedAt": "2026-10-21T12:31:34.722Z"
  },
  "92b759ad-dedb-4ff1-9258-8ccfd52ec8bc": {
    "conversationName": "Anonymous Telegram numbers with TON",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-27T12:15:21.614708Z",
    "messageCount": 4,
    "digest": "cfc88663e3ac8be3",
    "importedAt": "2026-10-21T12:31:34.740Z"
  },
  "eef74580-c241-4927-9179-2335ef1d237b": {
    "conversationName": "Switching primary domain in Google Workspace",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-27T14:59:04.338031Z",
    "messageCount": 20,
    "digest": "3c82153c2c3ac3a9",
    "importedAt": "2026-10-21T12:31:34.762Z"
  },
  "7298cc94-c9f3-48a7-a278-79eae6608075": {
    "conversationName": "Categorizing monthly expenses from bank statements",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-30T11:33:44.644923Z",
    "messageCount": 6,
    "digest": "0abc1c39b2f7156f",
    "importedAt": "2026-10-21T12:31:34.783Z"
  },
  "e4ef023d-2c16-43dc-a9e3-2b2972163e0d": {
    "conversationName": "Buying Telegram usernames on Fragment",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-30T14:31:40.031964Z",
    "messageCount": 40,
    "digest": "bc194ccf5778be57",
    "importedAt": "2026-10-21T12:31:34.805Z"
  },
  "48dade6c-a759-440e-be0c-afe7f599fbc3": {
    "conversationName": "Translation to English",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-01T10:05:16.490618Z",
    "messageCount": 4,
    "digest": "6f8216bc35e94ced",
    "importedAt": "2026-10-21T12:31:34.824Z"
  },
  "14242b5f-f1ea-4bf4-bbca-25c87a46771e": {
    "conversationName": "Jesus' 40-day fast and temptation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-04T10:04:16.330602Z",
    "messageCount": 12,
    "digest": "978cf6f7e42b0115",
    "importedAt": "2026-10-21T12:31:34.846Z"
  },
  "1acaaf0e-c99d-4ecf-af77-b742311a0e5c": {
    "conversationName": "Understanding a tax adjustment notice",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-18T16:08:58.318010Z",
    "messageCount": 4,
    "digest": "bffbd6b486c82fca",
    "importedAt": "2026-10-21T12:31:34.861Z"
  },
  "9ee0d598-d1c8-44c0-a823-f6e0a4081f93": {
    "conversationName": "Claude Code weekly limit and credit usage",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-18T13:36:50.631639Z",
    "messageCount": 2,
    "digest": "772ff9bb1e8d97e8",
    "importedAt": "2026-10-21T12:31:34.877Z"
  },
  "46768570-f876-4876-962c-8f54bfe93b82": {
    "conversationName": "Watching Harry Potter with Russian dubbing and English subtitles",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T14:51:38.559918Z",
    "messageCount": 2,
    "digest": "55e5f837c427e431",
    "importedAt": "2026-10-21T12:31:34.891Z"
  },
  "829cb174-498f-41f6-bc17-0855eba1a5c1": {
    "conversationName": "Administering cat medications as whole capsules",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-12T13:13:54.151324Z",
    "messageCount": 6,
    "digest": "4eb2551958f0d395",
    "importedAt": "2026-10-21T12:31:34.908Z"
  },
  "1d23a9a9-1b2f-4654-ac1c-d282138ac124": {
    "conversationName": "Airbnb host refund authority and options",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-12T11:51:18.530444Z",
    "messageCount": 2,
    "digest": "821440f61fd67ffd",
    "importedAt": "2026-10-21T12:31:34.923Z"
  },
  "6e0a50d4-6e6b-4ab0-9a22-324da0c2110d": {
    "conversationName": "Verifying Anthropic's latest AI model release",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-10T23:41:05.190634Z",
    "messageCount": 64,
    "digest": "cd0d3b6c0b0d0681",
    "importedAt": "2026-10-21T12:31:34.949Z"
  },
  "cdf3ae0c-fd8b-435d-9311-458183585137": {
    "conversationName": "Eugene Hutz's gypsy heritage authenticity",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-08T12:31:26.535377Z",
    "messageCount": 16,
    "digest": "76186e7f13a1d0d1",
    "importedAt": "2026-10-21T12:31:34.966Z"
  },
  "ae37df8c-1907-4f0c-a6e6-dfdc5208cadd": {
    "conversationName": "Trump's China election data breach claims",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-17T13:16:17.276173Z",
    "messageCount": 44,
    "digest": "d83dd7e7fc36b1a7",
    "importedAt": "2026-10-21T12:31:34.982Z"
  },
  "76140f14-cd40-40d2-b0c4-2ec54010ce1b": {
    "conversationName": "Playing movies on Philips TV from flash drive or computer",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-12T11:22:40.276469Z",
    "messageCount": 4,
    "digest": "8705c10c3ce69d3c",
    "importedAt": "2026-10-21T12:31:35.001Z"
  },
  "392e897c-1a02-4cb0-9f1b-b0899b583a2c": {
    "conversationName": "Pentagon UFO footage six-sided object analysis",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-11T06:06:44.978000Z",
    "messageCount": 20,
    "digest": "11cf7e2bf282628c",
    "importedAt": "2026-10-21T12:31:35.029Z"
  },
  "de72cc04-ebca-4412-863b-e9905f9571f1": {
    "conversationName": "Claude's reflection on article",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-08T19:11:27.833389Z",
    "messageCount": 16,
    "digest": "4a454d0caf84b4b2",
    "importedAt": "2026-10-21T12:31:35.050Z"
  },
  "f1e2d5eb-fb5c-4faa-93f8-3164822a3747": {
    "conversationName": "Recovery timeline after lateral calcaneal osteotomy",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-17T16:11:26.355518Z",
    "messageCount": 42,
    "digest": "1e784e7b7a43c0b1",
    "importedAt": "2026-10-21T12:31:35.081Z"
  },
  "ed6dceca-0aa3-4193-ae8a-7998a5c0f465": {
    "conversationName": "Local vs web Claude in VSCode",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-22T20:55:54.671792Z",
    "messageCount": 4,
    "digest": "e842016f56ce844c",
    "importedAt": "2026-10-21T12:31:35.100Z"
  },
  "70ba4065-6fcc-4fc8-b8d2-37fb82f2f749": {
    "conversationName": "Credit card balance discrepancy after payoff",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-27T16:29:12.201427Z",
    "messageCount": 6,
    "digest": "480f7993282d832e",
    "importedAt": "2026-10-21T12:31:35.133Z"
  },
  "3c33fd09-64e1-4ce6-988c-be4c7ee2ea5d": {
    "conversationName": "Metformin XR dosing and maximum dose",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-20T19:18:38.976627Z",
    "messageCount": 8,
    "digest": "5bc8b91d30ae685b",
    "importedAt": "2026-10-21T12:31:35.172Z"
  },
  "d3435ae4-218b-4e5c-a769-7925488a6cd2": {
    "conversationName": "Metformin dosing for antipsychotic weight gain",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-17T07:00:08.040583Z",
    "messageCount": 2,
    "digest": "0c377844d0557c9c",
    "importedAt": "2026-10-21T12:31:35.205Z"
  },
  "3e26816f-2f88-4577-b7a6-231de4639179": {
    "conversationName": "How Claude works",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-06T21:54:38.774001Z",
    "messageCount": 46,
    "digest": "39b1ee482bceb61f",
    "importedAt": "2026-10-21T12:31:35.242Z"
  },
  "bf176414-7eb9-498c-b48f-353f0a402056": {
    "conversationName": "Semaglutide for antipsychotic-induced weight gain and diabetes",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-05T21:43:58.408867Z",
    "messageCount": 75,
    "digest": "5001220d590ace1c",
    "importedAt": "2026-10-21T12:31:35.273Z"
  },
  "4d68e6aa-45ff-4071-b12a-21b35012245a": {
    "conversationName": "Buckwheat serving size and calories",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-04T12:45:36.940685Z",
    "messageCount": 4,
    "digest": "1209489ce94cf602",
    "importedAt": "2026-10-21T12:31:35.293Z"
  },
  "dc9d87b7-a73b-4e32-9da8-cd946c38b0ea": {
    "conversationName": "Calcaneal osteotomy screw removal healing",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-12T16:40:17.436992Z",
    "messageCount": 30,
    "digest": "3e597ecd5d78eee1",
    "importedAt": "2026-10-21T12:31:35.316Z"
  },
  "f8062ed2-3f02-49a1-b71c-71a99ad9361d": {
    "conversationName": "Milk interactions with crushed medications",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-26T18:23:06.843197Z",
    "messageCount": 4,
    "digest": "0b531960b2e28222",
    "importedAt": "2026-10-21T12:31:35.336Z"
  },
  "5730d0e7-14c8-41e1-8d89-eef997fe8a6f": {
    "conversationName": "Tesla roadster and robots",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-16T08:53:44.193964Z",
    "messageCount": 6,
    "digest": "83df675dd03ce4a2",
    "importedAt": "2026-10-21T12:31:35.357Z"
  },
  "475574f6-cfd1-4c63-a591-f1bef0e06531": {
    "conversationName": "Changing flight date",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-13T13:53:57.140876Z",
    "messageCount": 2,
    "digest": "70935d1791d438dc",
    "importedAt": "2026-10-21T12:31:35.373Z"
  },
  "a9f19c04-b087-4db5-9251-30920e50aa81": {
    "conversationName": "KiwiPost payment confusion",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-10T10:02:48.854974Z",
    "messageCount": 20,
    "digest": "aab4f64289c440e5",
    "importedAt": "2026-10-21T12:31:35.394Z"
  },
  "db0b30ef-bae1-42d9-a1f3-64ec08901450": {
    "conversationName": "Penelope's symptoms and treatment",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-10T09:01:31.977922Z",
    "messageCount": 2,
    "digest": "9853a9c1d8bcb06d",
    "importedAt": "2026-10-21T12:31:35.412Z"
  },
  "4cd85995-b066-4ea1-9a7c-ec43a96ae80c": {
    "conversationName": "Safety training quiz",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-07T08:26:13.728722Z",
    "messageCount": 46,
    "digest": "1621b8f6255c1ef3",
    "importedAt": "2026-10-21T12:31:35.441Z"
  },
  "bf83bbe0-538e-4d29-b64a-7f9ead5b68aa": {
    "conversationName": "Post-surgery heel pain and recovery",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-10T10:07:02.686729Z",
    "messageCount": 16,
    "digest": "b8fe69a1c97691ee",
    "importedAt": "2026-10-21T12:31:35.461Z"
  },
  "097bf0d0-c377-4f2d-b91b-4494c42d6530": {
    "conversationName": "Psychologist cost and services",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-30T07:55:47.699229Z",
    "messageCount": 4,
    "digest": "b9a33ea3538b8fa0",
    "importedAt": "2026-10-21T12:31:35.476Z"
  },
  "137b33d3-35a2-4b6e-8b8b-503b1f87a8c2": {
    "conversationName": "Trump superintelligence luncheon seating",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-29T18:22:10.659191Z",
    "messageCount": 6,
    "digest": "662685f5835a189f",
    "importedAt": "2026-10-21T12:31:35.493Z"
  },
  "74b415d8-56c3-4991-99c8-365b39068906": {
    "conversationName": "Visa requirements for Americans in Indonesia and Malaysia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-09T08:00:21.014323Z",
    "messageCount": 2,
    "digest": "807d9020377d3e07",
    "importedAt": "2026-10-21T12:31:35.522Z"
  },
  "6fe8ad2a-8476-4bde-a595-26c17e8681b4": {
    "conversationName": "Understanding jihad and Muslim violence perceptions",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-30T21:08:41.047176Z",
    "messageCount": 18,
    "digest": "91a36f6905dba849",
    "importedAt": "2026-10-21T12:31:35.555Z"
  },
  "96b135d1-7fd4-48db-a1b5-e114f62aa3f4": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:38:04.964583Z",
    "messageCount": 4,
    "digest": "03c258a8493d5082",
    "importedAt": "2026-10-21T12:31:36.546Z"
  },
  "a25923ae-84d0-46bb-aea7-fe79d8cfcc47": {
    "conversationName": "Translation request",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T06:52:34.076793Z",
    "messageCount": 22,
    "digest": "41430f899f2f52b5",
    "importedAt": "2026-10-21T12:31:36.570Z"
  },
  "487c612d-9c75-4c86-9388-2fce8996183e": {
    "conversationName": "Russian military conscription and coercion mechanisms",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T08:19:12.921106Z",
    "messageCount": 26,
    "digest": "08aedc324bc5d5a7",
    "importedAt": "2026-10-21T12:31:36.609Z"
  },
  "21151849-ca8e-4f93-a6e3-1deeeeacdddd": {
    "conversationName": "Translation request",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-09T14:52:55.601406Z",
    "messageCount": 2,
    "digest": "e279703f2f71b954",
    "importedAt": "2026-10-21T12:31:36.633Z"
  },
  "59ee329e-db82-403e-bbc3-9e3af4dfaf20": {
    "conversationName": "Project related to Russia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-08T12:49:15.282514Z",
    "messageCount": 134,
    "digest": "97f983500c9a7da3",
    "importedAt": "2026-10-21T12:31:36.713Z"
  },
  "efc4cc99-597d-41cf-b088-5173bed4efe8": {
    "conversationName": "Russian enforcement proceedings document translation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-06T12:37:05.667653Z",
    "messageCount": 62,
    "digest": "9a20f4925e407e3a",
    "importedAt": "2026-10-21T12:31:36.747Z"
  },
  "3700de01-3363-4c89-b56e-44f4f21e3a07": {
    "conversationName": "Alimony",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-01T10:34:38.875082Z",
    "messageCount": 36,
    "digest": "6f0909b3d034d090",
    "importedAt": "2026-10-21T12:31:36.778Z"
  },
  "680c6254-c93f-43d1-9ab5-56e6940d7041": {
    "conversationName": "MIA Request",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-06T11:28:53.024272Z",
    "messageCount": 100,
    "digest": "bd094d47bead9fa6",
    "importedAt": "2026-10-21T12:31:36.819Z"
  },
  "78f11e19-cd04-4b68-9f76-4ee78bc61040": {
    "conversationName": "Escrow contract for travel ban removal",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-20T09:42:18.663407Z",
    "messageCount": 34,
    "digest": "b7aa4b997f9efab5",
    "importedAt": "2026-10-21T12:31:36.844Z"
  },
  "a79636f2-eccb-4af2-b4f4-c443386e7fb3": {
    "conversationName": "💬 Being Russian is difficult. My…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-03T12:09:21.434483Z",
    "messageCount": 10,
    "digest": "26ef8aee1ba6e620",
    "importedAt": "2026-10-21T12:31:36.859Z"
  },
  "5d7f1512-2371-4e4e-aba0-036d6402de86": {
    "conversationName": "Russian custody enforcement precedent",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-09T15:40:13.281039Z",
    "messageCount": 32,
    "digest": "952a0a4123f351c6",
    "importedAt": "2026-10-21T12:31:36.885Z"
  },
  "42afc6bd-f70c-4df8-86c4-231791920a8c": {
    "conversationName": "Maxim contact request strategy",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-08T09:22:45.749221Z",
    "messageCount": 18,
    "digest": "b573ad553ae3e1d5",
    "importedAt": "2026-10-21T12:31:36.904Z"
  },
  "313d1090-0f21-4c56-aedb-a98e4f918054": {
    "conversationName": "Russia plague news manipulation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-07T14:41:29.676324Z",
    "messageCount": 58,
    "digest": "185e19650fc0be55",
    "importedAt": "2026-10-21T12:31:36.935Z"
  },
  "0d99232e-cdfe-4a11-814e-1bc0f31ece27": {
    "conversationName": "Green card options for Russian spouse and stepchildren",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-19T14:12:38.156506Z",
    "messageCount": 22,
    "digest": "7716bfb573fe0dff",
    "importedAt": "2026-10-21T12:31:36.958Z"
  },
  "59abf5a1-1a83-4506-be22-08be4a708b4a": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:40:12.435195Z",
    "messageCount": 6,
    "digest": "afdc812088cc37bd",
    "importedAt": "2026-10-21T12:31:38.544Z"
  },
  "8a11194f-a019-44aa-867e-a610fc50a0c2": {
    "conversationName": "Remote getaway near Tbilisi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-26T19:06:40.829241Z",
    "messageCount": 12,
    "digest": "de16845aceb3f020",
    "importedAt": "2026-10-21T12:31:38.568Z"
  },
  "ec631ac7-b16c-421e-bcf2-c049db42499f": {
    "conversationName": "Checking business name availability for Georgia entrepreneurs",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-27T12:41:08.845416Z",
    "messageCount": 4,
    "digest": "10d762eb6140611b",
    "importedAt": "2026-10-21T12:31:38.589Z"
  },
  "7231de76-8602-4cc3-9196-26dd84fbd6be": {
    "conversationName": "Citibank address verification requirement",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-27T13:24:58.306163Z",
    "messageCount": 4,
    "digest": "3a4a753617d872f3",
    "importedAt": "2026-10-21T12:31:38.609Z"
  },
  "cc78631a-e596-440c-8c37-71dd076a79ce": {
    "conversationName": "Ursodeoxycholic acid medications in Tbilisi pharmacies",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-01T14:53:37.469396Z",
    "messageCount": 16,
    "digest": "547c9edeefbc515e",
    "importedAt": "2026-10-21T12:31:38.630Z"
  },
  "1e12bee5-da62-4b89-8d31-6e36a873faa2": {
    "conversationName": "💬 Ana id doing an individual ent…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-03T12:58:03.802315Z",
    "messageCount": 24,
    "digest": "42ddbe4dd7a1b59e",
    "importedAt": "2026-10-21T12:31:38.651Z"
  },
  "7f89c8d2-5911-489e-b5a6-d9cb8eeb673d": {
    "conversationName": "Georgia IE residency income threshold",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-06T10:16:46.482598Z",
    "messageCount": 12,
    "digest": "dcccdcda85161788",
    "importedAt": "2026-10-21T12:31:38.670Z"
  },
  "bba39ef6-a105-4beb-a580-c00c45f67c2d": {
    "conversationName": "Identifying a ladybug pupa on a leaf",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-04T11:09:43.229195Z",
    "messageCount": 4,
    "digest": "b96e89428d2a017e",
    "importedAt": "2026-10-21T12:31:38.684Z"
  },
  "41ee9869-0b3f-46c6-a9e5-424c48e41536": {
    "conversationName": "Georgian Payoneer Help",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-22T07:06:21.117137Z",
    "messageCount": 287,
    "digest": "2099a3215a6727a6",
    "importedAt": "2026-10-21T12:31:38.788Z"
  },
  "cb0ac65a-0340-4c45-99c5-050096044952": {
    "conversationName": "Ana's Batumi Expences",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-02T08:11:18.734606Z",
    "messageCount": 143,
    "digest": "3258f45c9c3885e2",
    "importedAt": "2026-10-21T12:31:38.865Z"
  },
  "ec39ed14-0e31-4c0c-bfe1-670aea639f17": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-25T16:25:06.345628Z",
    "messageCount": 4,
    "digest": "920cd9669bcdd9a0",
    "importedAt": "2026-10-21T12:31:38.883Z"
  },
  "14b5bc46-21e3-4a34-8f1a-d51fae9ecc63": {
    "conversationName": "American grocery options in Saburtalo Tbilisi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-15T09:20:40.586839Z",
    "messageCount": 2,
    "digest": "de562c9f6f5db844",
    "importedAt": "2026-10-21T12:31:38.897Z"
  },
  "cab4e803-6c4b-4883-a112-8079e586bb4a": {
    "conversationName": "Greeting Claude",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-09T17:42:33.181103Z",
    "messageCount": 8,
    "digest": "0e36f3226c38a66f",
    "importedAt": "2026-10-21T12:31:38.912Z"
  },
  "35f8b8d3-0ace-40bc-975c-c139c5584e4e": {
    "conversationName": "Batumi Summer",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-19T10:38:16.619268Z",
    "messageCount": 267,
    "digest": "bd5333ce95cc8ef2",
    "importedAt": "2026-10-21T12:31:38.997Z"
  },
  "081249a9-7ad3-4cfa-b2cf-731a31ad4cfd": {
    "conversationName": "Day trips from Kvariati within an hour",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-10T09:30:15.116466Z",
    "messageCount": 26,
    "digest": "1c986e9547c7e8e9",
    "importedAt": "2026-10-21T12:31:39.018Z"
  },
  "6ab5f31c-86a3-468c-98b5-172eda1ce93d": {
    "conversationName": "VAT registration and tax filing for new IE",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-09T16:14:47.071109Z",
    "messageCount": 10,
    "digest": "105b3db8d9862de0",
    "importedAt": "2026-10-21T12:31:39.036Z"
  },
  "25ed1262-c179-44c6-8f14-3967556e3c02": {
    "conversationName": "Translating Georgian parking sign",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-09T09:18:28.665080Z",
    "messageCount": 2,
    "digest": "b056be719d22738d",
    "importedAt": "2026-10-21T12:31:39.049Z"
  },
  "e5412285-9e15-4dc4-9187-b79c980b1c6a": {
    "conversationName": "Vacation towns near Batumi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-07T17:28:15.601769Z",
    "messageCount": 28,
    "digest": "1b43c97fc78d3be3",
    "importedAt": "2026-10-21T12:31:39.078Z"
  },
  "9e6c3434-0c7b-4009-bd5f-cf797649bc6a": {
    "conversationName": "Rescheduling FedEx delivery to Tbilisi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-07T14:36:44.824628Z",
    "messageCount": 12,
    "digest": "038a1a5ad94e893d",
    "importedAt": "2026-10-21T12:31:39.102Z"
  },
  "dfceb666-b8d6-473b-8bcd-d8913edf7370": {
    "conversationName": "Georgian colleague's name and career background",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-19T20:55:14.186203Z",
    "messageCount": 8,
    "digest": "c6dad95d9150c6f6",
    "importedAt": "2026-10-21T12:31:39.121Z"
  },
  "b9f21050-f71a-40c3-9aaa-8a698b3f19b6": {
    "conversationName": "Adderall legal status in Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-18T15:55:42.466011Z",
    "messageCount": 20,
    "digest": "32de3331ec70c805",
    "importedAt": "2026-10-21T12:31:39.137Z"
  },
  "d97f42b0-691d-43a1-8f77-e78720dd3e84": {
    "conversationName": "💬 OK, I’m using KiwiPost which w…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-15T15:30:24.045924Z",
    "messageCount": 4,
    "digest": "d674c6742f3eeb9f",
    "importedAt": "2026-10-21T12:31:39.153Z"
  },
  "9273e02a-36b9-4d27-8783-ea12d2552b85": {
    "conversationName": "Day trips from Batumi for kids",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-11T08:51:08.018338Z",
    "messageCount": 10,
    "digest": "2e67bba283384815",
    "importedAt": "2026-10-21T12:31:39.167Z"
  },
  "bd886a96-24cc-48b5-a156-0bed7718fcbe": {
    "conversationName": "Hiring a nanny in Tbilisi for two kids",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-11T13:55:36.150102Z",
    "messageCount": 106,
    "digest": "1dd498aabe67d1f6",
    "importedAt": "2026-10-21T12:31:39.206Z"
  },
  "e0fde00f-db31-4621-91e9-fdfa223ec272": {
    "conversationName": "Taxes Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-07T11:27:34.514400Z",
    "messageCount": 12,
    "digest": "eb3d50999098ddbd",
    "importedAt": "2026-10-21T12:31:39.223Z"
  },
  "1dc25455-404b-4b2f-b20b-9ecf45eec35d": {
    "conversationName": "💬 I need you to do some quick re…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-04T11:33:22.013591Z",
    "messageCount": 10,
    "digest": "e366f3eda7c3fdcb",
    "importedAt": "2026-10-21T12:31:39.236Z"
  },
  "1b96ee47-209e-467f-9847-27b5bf7aff36": {
    "conversationName": "Cicadas in the country of Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-04T10:36:13.452295Z",
    "messageCount": 66,
    "digest": "a7cdc37fa2114b7e",
    "importedAt": "2026-10-21T12:31:39.256Z"
  },
  "8dda474d-c5e3-41fe-af32-00d56f2ffe53": {
    "conversationName": "English-speaking bipolar support groups in Tbilisi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-02T12:50:09.971680Z",
    "messageCount": 26,
    "digest": "cc07fb83ce7dd0b0",
    "importedAt": "2026-10-21T12:31:39.276Z"
  },
  "0db0ae88-bcaf-440f-970f-40e2a79cec4d": {
    "conversationName": "Amazon package forwarding to Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-01T01:49:18.407362Z",
    "messageCount": 70,
    "digest": "f1668506332603c6",
    "importedAt": "2026-10-21T12:31:39.302Z"
  },
  "b1a45520-8e89-42e5-a7e4-2b1600a19e05": {
    "conversationName": "Identifying a tree species in Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-29T11:24:42.683440Z",
    "messageCount": 4,
    "digest": "1a0beb8dd24ef08b",
    "importedAt": "2026-10-21T12:31:39.320Z"
  },
  "e83d8b0e-db4a-45d4-acb9-396ce3861595": {
    "conversationName": "Hydroxyzine dosing for antipsychotic side effects",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-29T10:22:25.679449Z",
    "messageCount": 8,
    "digest": "b08976dc29b8a0ce",
    "importedAt": "2026-10-21T12:31:39.342Z"
  },
  "1dba50eb-2fc3-435e-aa67-a306e688b2ce": {
    "conversationName": "Glucose substitute for veterinary antibiotic injection",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-28T12:38:50.643912Z",
    "messageCount": 30,
    "digest": "787cc78d6b40561e",
    "importedAt": "2026-10-21T12:31:39.376Z"
  },
  "4108975f-5da2-457e-b410-c7fce649e5f0": {
    "conversationName": "Chicken française ingredient sourcing in Tbilisi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-23T12:07:15.873097Z",
    "messageCount": 10,
    "digest": "0921070fa58757b4",
    "importedAt": "2026-10-21T12:31:39.409Z"
  },
  "8d35a007-0988-4f3e-8e73-c9b0f95941ea": {
    "conversationName": "Steak & Brisket",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-19T15:07:48.283797Z",
    "messageCount": 114,
    "digest": "e82df7fcafb09633",
    "importedAt": "2026-10-21T12:31:39.452Z"
  },
  "59691b35-bca4-44f4-aaa1-e307f1a051f9": {
    "conversationName": "Swimming pools for kids in Batumi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-18T18:56:58.864642Z",
    "messageCount": 8,
    "digest": "9454a41c5571e43a",
    "importedAt": "2026-10-21T12:31:39.474Z"
  },
  "bed6d2f9-5240-4cf0-b00a-db69d335a8d5": {
    "conversationName": "Family ocean fishing trips in Batumi",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-15T21:03:50.922791Z",
    "messageCount": 2,
    "digest": "f761f1e87020c6fc",
    "importedAt": "2026-10-21T12:31:39.491Z"
  },
  "777fc626-a8e7-4c25-b2a7-7ed5a8e2a598": {
    "conversationName": "Haircut instructions in Georgian and English",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-14T13:03:15.546203Z",
    "messageCount": 8,
    "digest": "066ee78b195aabde",
    "importedAt": "2026-10-21T12:31:39.510Z"
  },
  "ad076543-c222-4665-8068-b32bda60d7a3": {
    "conversationName": "Luxury hotels in Tbilisi and pricing",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-13T07:11:00.928855Z",
    "messageCount": 4,
    "digest": "e69f7abb3f461c2c",
    "importedAt": "2026-10-21T12:31:39.530Z"
  },
  "8035b9fb-d2a1-416a-b7d6-c0d211ef668b": {
    "conversationName": "Dark web marketplace takedowns and attribution stories",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-13T21:16:51.466628Z",
    "messageCount": 54,
    "digest": "237bf5ad11822f85",
    "importedAt": "2026-10-21T12:31:39.562Z"
  },
  "e77d354e-1640-4737-8c3f-841bd3305435": {
    "conversationName": "Finding Saba pharmacy in Tbilisi for foreign medications",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-08T13:39:48.765933Z",
    "messageCount": 2,
    "digest": "bc7f4562185ebb49",
    "importedAt": "2026-10-21T12:31:39.578Z"
  },
  "ebc10b42-34df-45b2-96db-d9ce178fca76": {
    "conversationName": "Old iPhone charger triggering unexpected unlocking",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-05T20:29:38.791683Z",
    "messageCount": 23,
    "digest": "829afcd1a89963cf",
    "importedAt": "2026-10-21T12:31:39.603Z"
  },
  "60454157-3788-4a76-beb8-c71aef531023": {
    "conversationName": "Varenicline availability in Tbilisi Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-30T10:44:31.887380Z",
    "messageCount": 16,
    "digest": "5275a5ad6cfb0714",
    "importedAt": "2026-10-21T12:31:39.628Z"
  },
  "0f075700-e7db-4109-a7c9-0b71807f94dd": {
    "conversationName": "Saburtalo power outage investigation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-23T21:03:17.704271Z",
    "messageCount": 6,
    "digest": "10f03eb4722d98cf",
    "importedAt": "2026-10-21T12:31:39.652Z"
  },
  "a07786e2-334b-46d0-9aa2-95a60218117f": {
    "conversationName": "Wake up Copenhagen hotel directions",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-13T09:26:39.533265Z",
    "messageCount": 32,
    "digest": "2ba821d10aec4432",
    "importedAt": "2026-10-21T12:31:39.674Z"
  },
  "32244291-fa68-4054-a51f-1e234697a5c6": {
    "conversationName": "Magti roaming data Copenhagen",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-10T13:47:36.233502Z",
    "messageCount": 8,
    "digest": "d9496701624677e1",
    "importedAt": "2026-10-21T12:31:39.690Z"
  },
  "ad583190-616e-4ab4-b837-8cb039b998ce": {
    "conversationName": "Aikido payment account issue",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-05T14:18:20.852793Z",
    "messageCount": 2,
    "digest": "7b3727f132d81626",
    "importedAt": "2026-10-21T12:31:39.711Z"
  },
  "5f432a8f-0b00-47d2-9a41-59a743253a9e": {
    "conversationName": "Kiwi post Amazon invoice",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-29T17:23:10.746058Z",
    "messageCount": 2,
    "digest": "667b5b36ee743c42",
    "importedAt": "2026-10-21T12:31:39.734Z"
  },
  "7fa923e8-3239-4ed5-ab94-dada9f658781": {
    "conversationName": "SpaceX IPO analysis and market reaction",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T09:07:48.338032Z",
    "messageCount": 15,
    "digest": "29a35f302b35d276",
    "importedAt": "2026-10-21T12:31:42.432Z"
  },
  "8b957fb0-5d9f-47ea-a49e-b2b4b9b2199c": {
    "conversationName": "MTONGA",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-13T09:40:34.658974Z",
    "messageCount": 150,
    "digest": "cce29e7f60d2e7be",
    "importedAt": "2026-10-21T12:31:42.478Z"
  },
  "d5d0756e-8e7d-4602-87ec-08e4f9512379": {
    "conversationName": "TON and GRAM ecosystem updates",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-31T02:11:01.012735Z",
    "messageCount": 116,
    "digest": "76c5008a8a32f1ad",
    "importedAt": "2026-10-21T12:31:42.518Z"
  },
  "34b037fb-fbcc-434c-99a8-9949d367c929": {
    "conversationName": "Bitcoin's decline despite institutional adoption",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-02T17:38:29.921680Z",
    "messageCount": 16,
    "digest": "4fd0f6be051ee5e1",
    "importedAt": "2026-10-21T12:31:42.548Z"
  },
  "769751fe-1870-45c7-8643-16230c110f69": {
    "conversationName": "Monad Labs tokenomics and valuation problems",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-30T14:08:22.445662Z",
    "messageCount": 6,
    "digest": "b73d2fe9f434310d",
    "importedAt": "2026-10-21T12:31:42.579Z"
  },
  "a8e9cd85-7872-4a6b-93c8-03abb383506d": {
    "conversationName": "X Money's US launch and financial competition",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-30T13:42:07.638024Z",
    "messageCount": 22,
    "digest": "d4e07dcc8702ca3a",
    "importedAt": "2026-10-21T12:31:42.626Z"
  },
  "979027d4-781f-4033-9339-b4550212e437": {
    "conversationName": "Travel arbitrage opportunities between Tbilisi, London, and New York",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-27T03:20:09.144007Z",
    "messageCount": 10,
    "digest": "0172134d250d017a",
    "importedAt": "2026-10-21T12:31:42.651Z"
  },
  "9c22a884-b93e-49f2-85b3-d202bddfe4d7": {
    "conversationName": "Macro drivers behind the crypto spike",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-20T16:01:56.615819Z",
    "messageCount": 30,
    "digest": "d2128a565116b025",
    "importedAt": "2026-10-21T12:31:42.680Z"
  },
  "cda3c1bb-d9a1-4a12-a848-6984c40ed15e": {
    "conversationName": "Telegram's hypothetical \\"Telephone\\" product theory",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-19T23:11:52.982952Z",
    "messageCount": 35,
    "digest": "ec87abcd55768d0a",
    "importedAt": "2026-10-21T12:31:42.713Z"
  },
  "44558158-3387-41f5-9078-6d2619f0cee0": {
    "conversationName": "💬 Catch up on recent conversatio…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-18T17:55:10.399986Z",
    "messageCount": 18,
    "digest": "69f265471206ee93",
    "importedAt": "2026-10-21T12:31:42.744Z"
  },
  "5962d97d-1730-4185-9e0f-0aac493fa96f": {
    "conversationName": "Finding renamed bots section in Telegram",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-13T20:04:19.295593Z",
    "messageCount": 12,
    "digest": "aa00fdb6381f2f18",
    "importedAt": "2026-10-21T12:31:42.765Z"
  },
  "e9d30c6e-d0ef-484b-9e43-f2f67662d5a6": {
    "conversationName": "TON browser alternatives and dark web access",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-13T19:00:53.363165Z",
    "messageCount": 8,
    "digest": "3f9345928b27f204",
    "importedAt": "2026-10-21T12:31:42.783Z"
  },
  "dd7f5daa-103a-4032-9915-42f8cdd2f14f": {
    "conversationName": "Using a Telegram username on a new account",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-10T18:04:12.268563Z",
    "messageCount": 6,
    "digest": "3d013b4cedfea9f6",
    "importedAt": "2026-10-21T12:31:42.798Z"
  },
  "eef8f474-1487-4b97-9139-c5a160b1d988": {
    "conversationName": "Monad unstaking failing in Atomic Wallet",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-08T11:09:46.494545Z",
    "messageCount": 48,
    "digest": "978989843b7b25fd",
    "importedAt": "2026-10-21T12:31:42.820Z"
  },
  "79d439db-394f-461e-a04d-ef3c23d84ff6": {
    "conversationName": "💬 the price of gram is getting h…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-15T20:20:13.482672Z",
    "messageCount": 486,
    "digest": "0f2305ed95cb4b84",
    "importedAt": "2026-10-21T12:31:42.956Z"
  },
  "fea3a58f-c6cf-4758-93fd-0336dc363d6a": {
    "conversationName": "Stablecoin architecture origins and Tether's conceptual lineage",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-04T19:43:25.152176Z",
    "messageCount": 62,
    "digest": "ffc90d6ada730b90",
    "importedAt": "2026-10-21T12:31:42.986Z"
  },
  "a2758d30-7c0e-43e9-bee9-eadca14f0abc": {
    "conversationName": "Microsoft's earnings surge and AI competition outlook",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-30T23:31:31.734479Z",
    "messageCount": 20,
    "digest": "dff780f14c7984da",
    "importedAt": "2026-10-21T12:31:43.008Z"
  },
  "e2ba3953-fe51-46f2-8c78-91ed23225cc3": {
    "conversationName": "Investing around Ukraine war outcomes",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-29T20:57:12.712163Z",
    "messageCount": 6,
    "digest": "42cfb6d9adace4a4",
    "importedAt": "2026-10-21T12:31:43.029Z"
  },
  "2ebab90b-6bd5-4cec-bd20-a833272abbd8": {
    "conversationName": "Fiverr's connection to Telegram's Mira AI",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-28T16:28:06.147923Z",
    "messageCount": 2,
    "digest": "f37790906ea174c8",
    "importedAt": "2026-10-21T12:31:43.055Z"
  },
  "74a7bf5d-42a9-4746-aaa0-c71b70cc4fc1": {
    "conversationName": "Correcting memory bias toward disagreement",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-22T20:37:19.381558Z",
    "messageCount": 24,
    "digest": "43677333d964c91c",
    "importedAt": "2026-10-21T12:31:43.092Z"
  },
  "effbe068-8c73-4d59-9fe7-d9bcef9c042d": {
    "conversationName": "Clarity act cryptocurrency bill prospects",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-15T13:02:07.574060Z",
    "messageCount": 2,
    "digest": "961a0d96e9bb352d",
    "importedAt": "2026-10-21T12:31:43.132Z"
  },
  "35a0e705-8353-4359-99b4-300ae2437d92": {
    "conversationName": "Collatz via Godel",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T17:11:00.856910Z",
    "messageCount": 56,
    "digest": "154e55465eb195ec",
    "importedAt": "2026-10-21T12:31:43.908Z"
  },
  "06b9b0ad-2088-4ce3-ab86-293b645f1bc6": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:45:13.150820Z",
    "messageCount": 9,
    "digest": "459006eff0781d6c",
    "importedAt": "2026-10-21T12:31:50.855Z"
  },
  "c17d7faa-52c5-47ce-9c0f-705a6745b630": {
    "conversationName": "Converting shared conversation to document",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-27T17:09:56.692247Z",
    "messageCount": 2,
    "digest": "d9768be0187eda0e",
    "importedAt": "2026-10-21T12:31:50.877Z"
  },
  "9854c96a-14b2-4301-8b56-d30a71b9f4e0": {
    "conversationName": "Unifying SRT axioms with symbolization",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-03T20:52:28.667864Z",
    "messageCount": 449,
    "digest": "4522724cb8a10df4",
    "importedAt": "2026-10-21T12:31:51.107Z"
  },
  "1c387d40-6a27-4d7c-b0dc-81ac4ab30704": {
    "conversationName": "SRT as a Github Project",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T15:52:07.368490Z",
    "messageCount": 127,
    "digest": "09f04f0b13311a5e",
    "importedAt": "2026-10-21T12:31:51.162Z"
  },
  "1d0ed292-6313-4e79-a2e1-81ec76ffd2e6": {
    "conversationName": "Specifying SRT",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-26T10:18:49.249227Z",
    "messageCount": 410,
    "digest": "10619b27cfe23382",
    "importedAt": "2026-10-21T12:31:51.365Z"
  },
  "7c357b9a-828a-434e-b67f-f46dd256b1fc": {
    "conversationName": "Frustration with AI reasoning and communication gaps",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T22:01:38.933956Z",
    "messageCount": 48,
    "digest": "7142537811ac6508",
    "importedAt": "2026-10-21T12:31:51.416Z"
  },
  "64653527-5ca7-434c-ba2a-7cc35a4f6bef": {
    "conversationName": "Semantic Primes",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T11:11:07.228627Z",
    "messageCount": 18,
    "digest": "9e6e8fb9c17fa5a0",
    "importedAt": "2026-10-21T12:31:51.450Z"
  },
  "002fae02-94a2-4184-8750-7a71c4cb10d8": {
    "conversationName": "Ontic Structural Realism",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-15T18:23:54.428158Z",
    "messageCount": 40,
    "digest": "cfb01b029e10028d",
    "importedAt": "2026-10-21T12:31:51.488Z"
  },
  "afd46f5f-0a89-4ab6-98c8-98aebfff0e90": {
    "conversationName": "Representation & the Part - Whole Dichotomy",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-14T21:11:20.527588Z",
    "messageCount": 96,
    "digest": "bbd51272f7c691e3",
    "importedAt": "2026-10-21T12:31:51.532Z"
  },
  "b3d24e04-8949-4ccf-a1c5-376b8710e817": {
    "conversationName": "SRT Axioms & Specialization",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-13T21:24:53.564560Z",
    "messageCount": 231,
    "digest": "a27543edc0b1b3e0",
    "importedAt": "2026-10-21T12:31:51.632Z"
  },
  "8dbb8e2b-d4c8-413e-aba0-45b382969754": {
    "conversationName": "The Semantics of Books",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-19T01:39:50.393154Z",
    "messageCount": 229,
    "digest": "876bcd11f987251c",
    "importedAt": "2026-10-21T12:31:51.743Z"
  },
  "1cc3e6e3-75dc-4da2-b6d1-c18052da3cfe": {
    "conversationName": "Inexplicable Phenomena",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-13T22:51:57.223923Z",
    "messageCount": 53,
    "digest": "5f77ac57659ad658",
    "importedAt": "2026-10-21T12:31:51.791Z"
  },
  "1152bae6-de40-4681-8830-5531ae3f1ac9": {
    "conversationName": "Relationships & Inheriance",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-13T19:15:20.003126Z",
    "messageCount": 270,
    "digest": "b11a62c2f9d54675",
    "importedAt": "2026-10-21T12:31:51.896Z"
  },
  "661cf8c0-03e0-4ea3-89f1-33dda20c6f01": {
    "conversationName": "Distinguishing type, category, and kind in English",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-03T19:29:21.095217Z",
    "messageCount": 28,
    "digest": "7fe060fb42a50675",
    "importedAt": "2026-10-21T12:31:51.919Z"
  },
  "49b32234-bef5-4fa3-b7a7-e88154775eef": {
    "conversationName": "Semantic reference theory foundations and philosophical conundrum",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-29T20:50:02.369794Z",
    "messageCount": 144,
    "digest": "2606c42cc3794491",
    "importedAt": "2026-10-21T12:31:52.003Z"
  },
  "fbc45c8e-bdd7-4941-ab5e-ae7b2c5cfac7": {
    "conversationName": "Library semantics in SRT",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-26T12:37:13.620963Z",
    "messageCount": 4,
    "digest": "fe8f569119d99dc2",
    "importedAt": "2026-10-21T12:31:52.027Z"
  },
  "242c2548-5a2b-4449-b422-9768402f3954": {
    "conversationName": "Collection semantics and canonical representatives",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-24T22:11:28.103336Z",
    "messageCount": 62,
    "digest": "bc52d9924f3a8f4c",
    "importedAt": "2026-10-21T12:31:52.059Z"
  },
  "3b684876-b6c6-4a72-96ef-1ca0f82333c9": {
    "conversationName": "String length notation and foundational sketch generalization",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-24T12:32:46.351106Z",
    "messageCount": 2,
    "digest": "0ba7bc92b88cab7e",
    "importedAt": "2026-10-21T12:31:52.075Z"
  },
  "a1b2fd15-aeda-4116-b737-f62fadff75f8": {
    "conversationName": "Learning SRT syntax and transpiler fundamentals",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-23T08:13:50.066393Z",
    "messageCount": 108,
    "digest": "8a2f3a73acbc0744",
    "importedAt": "2026-10-21T12:31:52.110Z"
  },
  "8b14b84b-bfa7-4264-af28-ae3974cf3640": {
    "conversationName": "Semantics of Representation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-11T15:43:44.638273Z",
    "messageCount": 78,
    "digest": "37822a49c04ac9e7",
    "importedAt": "2026-10-21T12:31:52.138Z"
  },
  "d5c0cf36-a66b-4454-ada5-2b449ef37de4": {
    "conversationName": "Semantics of Types & More",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-10T03:53:09.090513Z",
    "messageCount": 106,
    "digest": "fad8f6a9f02df3e8",
    "importedAt": "2026-10-21T12:31:52.172Z"
  },
  "3eecc63c-9ff6-4733-a87c-e2d882af6711": {
    "conversationName": "Foundations: Types & Properties",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-08T19:48:20.554735Z",
    "messageCount": 314,
    "digest": "729f45aff4093365",
    "importedAt": "2026-10-21T12:31:52.243Z"
  },
  "8aa11284-32eb-4a30-9df5-e3319db9b8a3": {
    "conversationName": "💬 Can you look up the research o…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T08:55:42.369171Z",
    "messageCount": 2,
    "digest": "e174fa19102124c0",
    "importedAt": "2026-10-21T12:31:52.524Z"
  },
  "75d64146-06c9-46bb-a2e7-dbed1e34b350": {
    "conversationName": "💬 Nature published this blurb. I…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-11T21:42:11.658204Z",
    "messageCount": 6,
    "digest": "16aeae07433d40df",
    "importedAt": "2026-10-21T12:31:52.552Z"
  },
  "5d5653bc-709b-4a1e-8955-65ac0b7e85e2": {
    "conversationName": "Doug & Ana's Recursive Universe",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-28T20:34:00.705378Z",
    "messageCount": 58,
    "digest": "8b6497ec27ce06e2",
    "importedAt": "2026-10-21T12:31:55.188Z"
  },
  "42c78ea0-d46e-4305-8567-4008bd59f2de": {
    "conversationName": "Claude the Cartographer",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-28T11:23:27.063430Z",
    "messageCount": 167,
    "digest": "a2a93c5eea6461fa",
    "importedAt": "2026-10-21T12:31:55.301Z"
  },
  "1a1de1ef-057f-47f8-9a4f-b23e20a9b9d0": {
    "conversationName": "Integrating ViewBox and Centering SVG Content",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-25T15:07:23.223799Z",
    "messageCount": 72,
    "digest": "b7a717ef87e15859",
    "importedAt": "2026-10-21T12:31:55.418Z"
  },
  "87a581e5-db9b-4687-aff0-f18ac710e641": {
    "conversationName": "Extending React Simple Maps with Predictable Components",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-24T16:45:15.974555Z",
    "messageCount": 83,
    "digest": "bea8f8c588ac77b9",
    "importedAt": "2026-10-21T12:31:55.454Z"
  },
  "329dcf98-5195-48aa-870a-5c75915bd4a8": {
    "conversationName": "Fixing React Simple Maps Errors",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-24T14:16:00.326862Z",
    "messageCount": 26,
    "digest": "cecb4508e22c0e7e",
    "importedAt": "2026-10-21T12:31:55.487Z"
  },
  "7c2ed8e9-cae2-44b3-bcd7-0b38a6441100": {
    "conversationName": "Formal Mathematics and Conversational Assistance",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-24T02:14:44.459072Z",
    "messageCount": 158,
    "digest": "bdf734b75c65bb79",
    "importedAt": "2026-10-21T12:31:55.571Z"
  },
  "cd20fa50-e4f4-401e-8837-8b3e3e087a5a": {
    "conversationName": "Newton's Intuitive and Formal Laws of Motion",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-23T08:58:43.467560Z",
    "messageCount": 10,
    "digest": "efbdc07c539c3368",
    "importedAt": "2026-10-21T12:31:55.586Z"
  },
  "d4be8c96-5640-41a4-ae72-bfdddfda71bf": {
    "conversationName": "Banking Operational Risk Controls",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-23T00:54:46.183097Z",
    "messageCount": 10,
    "digest": "e3c5498142548ea6",
    "importedAt": "2026-10-21T12:31:55.605Z"
  },
  "f6dfdc21-9d30-41ae-84ac-be13bc139f77": {
    "conversationName": "Metalogical Subjectivity",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-23T07:32:59.538956Z",
    "messageCount": 194,
    "digest": "728325585872710b",
    "importedAt": "2026-10-21T12:31:55.848Z"
  },
  "536493f4-96eb-41a8-8540-064a8273d365": {
    "conversationName": "Sophia the Author",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-22T19:47:44.439790Z",
    "messageCount": 124,
    "digest": "ac6de29ac6ec31e4",
    "importedAt": "2026-10-21T12:31:55.897Z"
  },
  "f177ae6f-e60f-4590-8851-2c3b9df28e4d": {
    "conversationName": "Conservation of Time Complexity",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-22T01:02:41.622661Z",
    "messageCount": 122,
    "digest": "e26fba42d1d3d5df",
    "importedAt": "2026-10-21T12:31:55.979Z"
  },
  "0d887450-e312-4b7f-bb62-b28b58f1a843": {
    "conversationName": "Enhancing Cohesive Composition",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-20T20:54:23.102368Z",
    "messageCount": 34,
    "digest": "e3eab2126ccb5284",
    "importedAt": "2026-10-21T12:31:56.071Z"
  },
  "4ed05e5e-1409-4611-b5ce-d5bab18dd463": {
    "conversationName": "Semantic Breakdown of SVG Paths and Curves",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-18T18:00:27.683678Z",
    "messageCount": 30,
    "digest": "ba741b0e0640b4ba",
    "importedAt": "2026-10-21T12:31:56.106Z"
  },
  "9777b6d7-3659-42e0-bc0b-972d0d36c8f8": {
    "conversationName": "Improving Vectorized Script and Serif Text in SVG",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-18T17:27:25.796264Z",
    "messageCount": 14,
    "digest": "374fcf6c83f35fa8",
    "importedAt": "2026-10-21T12:31:56.133Z"
  },
  "67afd096-f257-484d-b1fa-e895548e364f": {
    "conversationName": "Formal Definition of the TLA",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-17T17:37:33.806139Z",
    "messageCount": 212,
    "digest": "ef21532afe0b4a1c",
    "importedAt": "2026-10-21T12:31:56.232Z"
  },
  "f72c8a89-4d44-4b05-bf3a-48eeec8ae77d": {
    "conversationName": "AutoHotkey Taskbar Control Script",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-17T17:42:49.285716Z",
    "messageCount": 30,
    "digest": "f38838cca87d8867",
    "importedAt": "2026-10-21T12:31:56.300Z"
  },
  "f6cc388b-bfca-4bc7-acd0-74b787977f61": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-13T22:01:32.133343Z",
    "messageCount": 2,
    "digest": "e1acd55a667f7967",
    "importedAt": "2026-10-21T12:31:56.344Z"
  },
  "4d364f51-49ba-4898-920f-8e5347843be1": {
    "conversationName": "Rewriting AHK 1.1 Taskbar Code for Robustness",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-13T22:53:50.271526Z",
    "messageCount": 207,
    "digest": "cfa1b3bbf46f9fb3",
    "importedAt": "2026-10-21T12:31:56.443Z"
  },
  "95b10e8d-663d-41db-a636-b23f4ba80d40": {
    "conversationName": "Thoughtful Translation Request",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-12T14:35:24.652554Z",
    "messageCount": 4,
    "digest": "406d8ea9aad6e5a9",
    "importedAt": "2026-10-21T12:31:56.486Z"
  },
  "a9d87661-a007-47b8-b77d-07714bd55beb": {
    "conversationName": "Animated Rotating and Scaling Rose SVG",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-09T13:14:01.121724Z",
    "messageCount": 28,
    "digest": "f4f2640e57eac237",
    "importedAt": "2026-10-21T12:31:56.576Z"
  },
  "6417d83b-2f34-4099-80d3-3c3b7921020c": {
    "conversationName": "Fractal Rose: Exploring Mathematical Beauty",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-09T12:39:10.283069Z",
    "messageCount": 6,
    "digest": "1365c8a5b1079c4e",
    "importedAt": "2026-10-21T12:31:56.602Z"
  },
  "a1981158-9ec7-4443-86bf-b6c4b81f2272": {
    "conversationName": "Custom TypeScript Framework for Illustrator Scripting",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-07T20:43:08.893514Z",
    "messageCount": 28,
    "digest": "ec0f796044ba1bbf",
    "importedAt": "2026-10-21T12:31:56.733Z"
  },
  "25a87038-ede3-4317-877c-12de72bbc3ab": {
    "conversationName": "Semantic Reconstruction of Coding Perspectives",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-02T20:51:50.734422Z",
    "messageCount": 40,
    "digest": "9f1701afaaa26d20",
    "importedAt": "2026-10-21T12:31:56.794Z"
  },
  "09bc840a-91d8-4241-8589-2af38717a7a3": {
    "conversationName": "Vectorizing Images with Color Extraction",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-01T12:40:15.096607Z",
    "messageCount": 45,
    "digest": "c04743675ad41890",
    "importedAt": "2026-10-21T12:31:56.982Z"
  },
  "c29707c0-079e-4e89-bf19-8ad9b3d85061": {
    "conversationName": "Extending VSCode with Custom File Modification APIs",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-02-20T12:53:23.946698Z",
    "messageCount": 108,
    "digest": "26c25bc4fd3bd0d7",
    "importedAt": "2026-10-21T12:31:57.029Z"
  },
  "b6399323-15d5-4896-833e-c9988989b738": {
    "conversationName": "Troubleshooting VSCode Extension Packaging",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-02-19T14:36:10.891751Z",
    "messageCount": 46,
    "digest": "39698e37f007166d",
    "importedAt": "2026-10-21T12:31:57.056Z"
  },
  "cad4ab05-8c8f-453a-a674-9d6b21754d15": {
    "conversationName": "Troubleshooting a VSCode Extension for SVG Interaction",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-02-16T04:32:05.306092Z",
    "messageCount": 88,
    "digest": "4794b52eb567a5f1",
    "importedAt": "2026-10-21T12:31:57.102Z"
  },
  "e5eb0991-aeab-4c5a-8952-95395e604650": {
    "conversationName": "Optimizing ExtendScript Abstractions for Illustrator",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-02-11T22:40:16.185319Z",
    "messageCount": 26,
    "digest": "9937ba8e0e0b81a2",
    "importedAt": "2026-10-21T12:31:57.162Z"
  },
  "9d78ecba-e2cc-479a-8205-73b032d988a8": {
    "conversationName": "Configuring ExtendScript Debugger in VS Code",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-02-07T14:43:14.960618Z",
    "messageCount": 4,
    "digest": "9d8574523060b48d",
    "importedAt": "2026-10-21T12:31:57.242Z"
  },
  "33b29bb9-be51-44ba-9e7f-08217591e21c": {
    "conversationName": "Implementing a Sophisticated Typed Facade",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-02-07T14:39:06.344855Z",
    "messageCount": 161,
    "digest": "538253fdc874776d",
    "importedAt": "2026-10-21T12:31:57.387Z"
  },
  "efd9c851-25f2-4076-ae23-07759a0333d8": {
    "conversationName": "Using BridgeTalk in Illustrator ExtendScript",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-24T14:43:54.551098Z",
    "messageCount": 16,
    "digest": "9d7bd235d80acd68",
    "importedAt": "2026-10-21T12:31:57.409Z"
  },
  "2ed8084d-4698-447f-80ac-1de950d3fe15": {
    "conversationName": "Accessing XMP Metadata in Illustrator ExtendScript",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-24T00:04:59.123066Z",
    "messageCount": 106,
    "digest": "cee14d60f3821123",
    "importedAt": "2026-10-21T12:31:57.441Z"
  },
  "0f58c027-76d8-46b5-bf08-9803b4486b91": {
    "conversationName": "Doug & Ana",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-04T19:08:05.575518Z",
    "messageCount": 42,
    "digest": "66a32490d69cc541",
    "importedAt": "2026-10-21T12:31:57.543Z"
  },
  "2cd14f0c-d154-455c-be99-22550c18bae7": {
    "conversationName": "Handling Illustrator Document Existence and Creation in ExtendScript",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-13T10:59:13.900111Z",
    "messageCount": 40,
    "digest": "ffd20e5d8b4c6b7a",
    "importedAt": "2026-10-21T12:31:57.567Z"
  },
  "7ce28bd6-c737-45e2-99ea-71724c022dd1": {
    "conversationName": "Troubleshooting ExtendScript TypeScript Wrapper Errors",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-13T09:59:50.677834Z",
    "messageCount": 50,
    "digest": "dd1da05faccbc400",
    "importedAt": "2026-10-21T12:31:57.608Z"
  },
  "f3558a22-eb3c-4f41-81a9-16473da54071": {
    "conversationName": "Defining Physical Quantities through Measurability",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-11T15:25:59.150621Z",
    "messageCount": 4,
    "digest": "6f3ce1f3b77f9192",
    "importedAt": "2026-10-21T12:31:57.627Z"
  },
  "80ecd7b9-f569-4bab-b075-ab170c3579cb": {
    "conversationName": "Returning undefined when closing TypeScript class",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-10T19:11:17.535167Z",
    "messageCount": 10,
    "digest": "31f9c69baaabf2a0",
    "importedAt": "2026-10-21T12:31:57.652Z"
  },
  "885561b0-54fd-4446-b310-14b2bc382220": {
    "conversationName": "Extending Array-like Class with IEnumerable Methods",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-05T21:43:21.581743Z",
    "messageCount": 96,
    "digest": "01f95450cc61e939",
    "importedAt": "2026-10-21T12:31:57.849Z"
  },
  "42fc17f5-4d3a-4f35-b451-37e7bacec9e0": {
    "conversationName": "Extending Illustrator ExtendScript Abstraction",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-12T23:06:18.012151Z",
    "messageCount": 264,
    "digest": "09d9ae8beb1d04dc",
    "importedAt": "2026-10-21T12:31:57.923Z"
  },
  "ca1643bf-b26e-4dac-8d0e-bf26d0e67fee": {
    "conversationName": "Ensure Class Mirroring Is Class with Assertions",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-01-02T12:33:42.357091Z",
    "messageCount": 246,
    "digest": "607c8cf5cfeac399",
    "importedAt": "2026-10-21T12:31:58.185Z"
  },
  "9d749abf-6800-4b8b-aa6e-db4e576e5879": {
    "conversationName": "Scripting Adobe Illustrator with TypeScript",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-12-15T23:57:00.652638Z",
    "messageCount": 38,
    "digest": "59a112c3c4f0298c",
    "importedAt": "2026-10-21T12:31:58.224Z"
  },
  "07f0404b-a90d-4f5a-b30c-54d57bf53bd0": {
    "conversationName": "TypeScript Types for Adobe Illustrator Scripting",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-12-15T22:45:11.580712Z",
    "messageCount": 64,
    "digest": "27401f7145dc6ddd",
    "importedAt": "2026-10-21T12:31:58.264Z"
  },
  "88b3e2cc-b830-4856-8cb7-7f4871cf0996": {
    "conversationName": "Illustrator Scripting Assumptions About Artboard",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-12-04T20:38:52.110387Z",
    "messageCount": 12,
    "digest": "baf5450c69a9b7dc",
    "importedAt": "2026-10-21T12:31:58.286Z"
  },
  "664f3ea7-a3b9-4be4-be93-b35ef08bb186": {
    "conversationName": "Object-Oriented Decorators for Adobe Illustrator Scripting",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-12-04T20:04:07.387048Z",
    "messageCount": 36,
    "digest": "5493bd3843b75b4f",
    "importedAt": "2026-10-21T12:31:58.327Z"
  },
  "6cabbdec-98c6-40f6-b8c3-bb6d39363e11": {
    "conversationName": "Illustrator Scripting",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-12-01T23:07:39.480422Z",
    "messageCount": 108,
    "digest": "ebf3fc01bd853cb2",
    "importedAt": "2026-10-21T12:31:58.397Z"
  },
  "96f52fe9-6a2c-42bc-af92-aeab8b92aa0b": {
    "conversationName": "Accessing Netflix on DIRECTV Box",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-29T01:28:40.846496Z",
    "messageCount": 4,
    "digest": "e53e62fd628cc051",
    "importedAt": "2026-10-21T12:31:58.417Z"
  },
  "6129004d-5e46-4065-a171-299a5962c4c3": {
    "conversationName": "Pointers in C++: *x vs **x",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-28T19:40:26.370497Z",
    "messageCount": 14,
    "digest": "48c135364be8bdff",
    "importedAt": "2026-10-21T12:31:58.443Z"
  },
  "1fc1426b-5515-4bb6-94d6-e1ff59cb97fe": {
    "conversationName": "The Meaning of Semantics",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-30T19:37:45.317836Z",
    "messageCount": 54,
    "digest": "0e0bfeb6085057cd",
    "importedAt": "2026-10-21T12:31:58.484Z"
  },
  "ebf64f2f-6245-4973-8c03-8b7a2f2c1b01": {
    "conversationName": "Home Appraisal Costs",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-26T18:31:23.039316Z",
    "messageCount": 10,
    "digest": "4cfcb9226a501ead",
    "importedAt": "2026-10-21T12:31:58.517Z"
  },
  "648ff084-fe3e-41e8-9148-6c4aa38056a3": {
    "conversationName": "Cooking at High Altitude",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-26T08:49:22.253663Z",
    "messageCount": 2,
    "digest": "b5608b7497155ecc",
    "importedAt": "2026-10-21T12:31:58.553Z"
  },
  "8b5122ff-7e15-427e-a1cf-27596a1f0f28": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-25T19:47:40.924323Z",
    "messageCount": 18,
    "digest": "26660f3a046ceea5",
    "importedAt": "2026-10-21T12:31:58.580Z"
  },
  "4fdeda4c-230f-4ccd-b52b-bf4d00754ff8": {
    "conversationName": "Freelancer Workload and Pricing Management System",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-25T21:00:41.298800Z",
    "messageCount": 40,
    "digest": "257c0600a53bae52",
    "importedAt": "2026-10-21T12:31:58.602Z"
  },
  "56150527-80b4-4d89-88de-524eb1f97dea": {
    "conversationName": "Understanding Cataphatic and Apophatic Theology",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-24T22:26:52.307489Z",
    "messageCount": 26,
    "digest": "db641130e943d12b",
    "importedAt": "2026-10-21T12:31:58.623Z"
  },
  "08ef93ab-00ab-42b7-aff3-4fe39d2ed9fe": {
    "conversationName": "Illustrator Scripting",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-23T21:10:53.866367Z",
    "messageCount": 72,
    "digest": "e53e6496f410b664",
    "importedAt": "2026-10-21T12:31:58.664Z"
  },
  "9dfe2bea-f09a-4d3e-afe3-273044b27b26": {
    "conversationName": "Deploying Private GitHub Repo as NPM Package",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-20T23:15:53.744392Z",
    "messageCount": 66,
    "digest": "8ce4a3a48e584cdf",
    "importedAt": "2026-10-21T12:31:58.699Z"
  },
  "a439a7b7-b982-42f7-9caa-adac4566b227": {
    "conversationName": "Schizophrenia Drug Repurposed for Alzheimer's",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-21T20:19:33.909609Z",
    "messageCount": 8,
    "digest": "21e7804081992054",
    "importedAt": "2026-10-21T12:31:58.729Z"
  },
  "63736ea4-1a62-496e-9c0b-d1567620fbe9": {
    "conversationName": "Comparing Anthropic's AI Models",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-17T23:27:19.085087Z",
    "messageCount": 12,
    "digest": "6b4c09bdeaf587fa",
    "importedAt": "2026-10-21T12:31:58.763Z"
  },
  "6f21fdb4-58ef-42f4-a2a0-790730b0cb68": {
    "conversationName": "Freud's Structural Model of the Psyche",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-17T03:44:28.140920Z",
    "messageCount": 4,
    "digest": "227ff77e34e4be50",
    "importedAt": "2026-10-21T12:31:58.799Z"
  },
  "5b073957-077e-445a-bae1-6c96bb4ca74a": {
    "conversationName": "Axioms of First-Order Logic",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-17T06:16:29.498407Z",
    "messageCount": 218,
    "digest": "43db59c3ebd1ebd6",
    "importedAt": "2026-10-21T12:31:58.982Z"
  },
  "fea3e3e4-61f2-42cb-91d5-2e51d417113e": {
    "conversationName": "Signing Up for Apple Developer Account",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-14T20:02:56.152103Z",
    "messageCount": 30,
    "digest": "e1e37fe17a0d09e8",
    "importedAt": "2026-10-21T12:31:59.018Z"
  },
  "0e223450-f496-41b0-a80a-bf040b6cbc78": {
    "conversationName": "Matt Gaetz: Republican Congressman from Florida",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-14T04:27:31.708656Z",
    "messageCount": 12,
    "digest": "09abc154e72074d4",
    "importedAt": "2026-10-21T12:31:59.050Z"
  },
  "9e6c5311-737a-4611-8f02-862495a44fa9": {
    "conversationName": "Prestigious Pappy Van Winkle Bourbon",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-12T23:12:49.490742Z",
    "messageCount": 4,
    "digest": "6f66dfa252fdc499",
    "importedAt": "2026-10-21T12:31:59.076Z"
  },
  "6833ae75-17cb-45db-a0c5-9fa0da815728": {
    "conversationName": "Interdisciplinary Exploration of Consciousness",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-11T23:52:20.562903Z",
    "messageCount": 42,
    "digest": "13644fbef7a2476f",
    "importedAt": "2026-10-21T12:31:59.113Z"
  },
  "347ca32f-c91b-4091-8595-71eeb4269d1d": {
    "conversationName": "Common Trust Document Names",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-11T19:58:47.660835Z",
    "messageCount": 2,
    "digest": "599026f13c99094b",
    "importedAt": "2026-10-21T12:31:59.137Z"
  },
  "66e39383-486a-4e4d-bc99-8d8aa86cfcc2": {
    "conversationName": "Celebrating Name Days in Russia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-11T19:16:06.016131Z",
    "messageCount": 34,
    "digest": "c9ad3d46ac1162fa",
    "importedAt": "2026-10-21T12:31:59.173Z"
  },
  "da7470c4-3a1e-4636-a72b-f985714b4f61": {
    "conversationName": "Aladdin's Resemblance to Tom Cruise",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-09T20:48:14.069964Z",
    "messageCount": 2,
    "digest": "850328e3e94e0b19",
    "importedAt": "2026-10-21T12:31:59.198Z"
  },
  "48dc2d67-7829-4d5f-8646-ed3acc18c5b2": {
    "conversationName": "Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-08T05:14:33.201420Z",
    "messageCount": 14,
    "digest": "c479ff6da94c2487",
    "importedAt": "2026-10-21T12:31:59.222Z"
  },
  "0cf28658-197d-435f-be7f-0a8c8fcc0c0a": {
    "conversationName": "Requesting DJT Earnings Data",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-07T04:20:43.829389Z",
    "messageCount": 4,
    "digest": "5b34c698e3d026dc",
    "importedAt": "2026-10-21T12:31:59.243Z"
  },
  "ef849a35-b0e7-4cfc-9e80-cd1515f5758d": {
    "conversationName": "Russia-China Cryptocurrency Collaboration",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-07T00:28:04.540961Z",
    "messageCount": 2,
    "digest": "6e5d64237d5aa2b6",
    "importedAt": "2026-10-21T12:31:59.262Z"
  },
  "c6157223-5fec-41f3-84ee-a48556f807a7": {
    "conversationName": "Navigating the SSDI Application Process",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-10T10:43:54.103043Z",
    "messageCount": 28,
    "digest": "a52ef4a1c5a81b37",
    "importedAt": "2026-10-21T12:31:59.288Z"
  },
  "4f712a68-d7ab-4478-ad58-41166c07b976": {
    "conversationName": "Understanding the Dunning-Kruger Effect",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-06T05:54:54.380336Z",
    "messageCount": 2,
    "digest": "3a1592d66fbb8f6e",
    "importedAt": "2026-10-21T12:31:59.308Z"
  },
  "13e2ecc7-577b-4447-a205-99760946c2e1": {
    "conversationName": "Describing Flare-ups of Medical Condition",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-08T08:52:18.181643Z",
    "messageCount": 4,
    "digest": "e19d82b007757c1d",
    "importedAt": "2026-10-21T12:31:59.332Z"
  },
  "ff7a7be0-647b-4146-8f71-e8d9a42a569e": {
    "conversationName": "Automating Illustrator Tasks with TypeScript Plugins",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-21T23:09:46.300900Z",
    "messageCount": 361,
    "digest": "d10711d87b472d9f",
    "importedAt": "2026-10-21T12:31:59.472Z"
  },
  "624bb8cd-9ce8-4df2-9636-1b68976c4202": {
    "conversationName": "Handmade Pumpkin Ravioli with an Italian Nonna",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-05T03:17:40.235835Z",
    "messageCount": 24,
    "digest": "b1f747c255041120",
    "importedAt": "2026-10-21T12:31:59.511Z"
  },
  "896c8a60-deb3-4f47-ac77-fd4d5c43660b": {
    "conversationName": "Understanding Obsessive-Compulsive Personality Disorder",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-04T19:07:56.061794Z",
    "messageCount": 2,
    "digest": "28728ac4e0c4def1",
    "importedAt": "2026-10-21T12:31:59.548Z"
  },
  "738c14df-9768-475a-ae57-918e00809073": {
    "conversationName": "Finding Voice Messages in Telegram",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-02T02:15:08.402434Z",
    "messageCount": 8,
    "digest": "7db91624a8106a24",
    "importedAt": "2026-10-21T12:31:59.586Z"
  },
  "80559362-5b97-4e62-af66-4cb6ea4148e1": {
    "conversationName": "Disability Benefits to Reduce Monthly Expenses",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-12-12T19:49:51.385222Z",
    "messageCount": 334,
    "digest": "64f0d4032bb527e5",
    "importedAt": "2026-10-21T12:31:59.659Z"
  },
  "e3b10e17-b6f4-408c-9f35-6a30067dd760": {
    "conversationName": "Exploring Feelings About Russia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-02T00:24:18.207954Z",
    "messageCount": 8,
    "digest": "5d3595127617d3a2",
    "importedAt": "2026-10-21T12:31:59.677Z"
  },
  "eaff8f76-13a0-4e12-87ae-b108f493c440": {
    "conversationName": "Income Limits for Disability Benefits",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-02T01:09:29.655475Z",
    "messageCount": 56,
    "digest": "7b54c7d46731e99b",
    "importedAt": "2026-10-21T12:31:59.708Z"
  },
  "2d1816a8-adb0-42dc-9c5b-4e08ccdf9d6d": {
    "conversationName": "Leonardo da Vinci's Mirror Writing",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-01T20:33:30.378890Z",
    "messageCount": 2,
    "digest": "2c0a3d9a4eeff89d",
    "importedAt": "2026-10-21T12:31:59.730Z"
  },
  "e4571070-234f-4e63-aac8-21427f98a7cc": {
    "conversationName": "Analyzing Current Economic Conditions",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-01T22:12:57.593273Z",
    "messageCount": 74,
    "digest": "4c473c01f7de4f6d",
    "importedAt": "2026-10-21T12:31:59.777Z"
  },
  "e259647a-c33b-4c9b-99fb-0178fb341df2": {
    "conversationName": "Chomsky's Linguistics and Programming Languages",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-11-01T04:18:25.551931Z",
    "messageCount": 20,
    "digest": "8cc4f7dec29b8896",
    "importedAt": "2026-10-21T12:31:59.803Z"
  },
  "87e27c1d-1423-4986-83f3-8f89273773b1": {
    "conversationName": "Stay Puft Marshmallow Man Costume",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-31T16:03:50.983592Z",
    "messageCount": 2,
    "digest": "59d0997818c3744d",
    "importedAt": "2026-10-21T12:31:59.828Z"
  },
  "8d6e372c-95a4-4c6b-ac6d-4c6a9234ec7b": {
    "conversationName": "Watermarking Images and NFTs",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-29T18:09:52.643568Z",
    "messageCount": 2,
    "digest": "ef28abd2d8f60302",
    "importedAt": "2026-10-21T12:31:59.856Z"
  },
  "096b04af-d173-4faa-8b1f-f33c33257cc5": {
    "conversationName": "Selling Used iPhone for Cash",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-27T19:50:35.879851Z",
    "messageCount": 2,
    "digest": "a2880b81298cc6c3",
    "importedAt": "2026-10-21T12:31:59.886Z"
  },
  "8cd0717b-308f-4e71-9714-72fa910959f5": {
    "conversationName": "Leaving Packages at Apartment Complexes",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-25T22:20:25.396275Z",
    "messageCount": 6,
    "digest": "d40b06cfda859e9b",
    "importedAt": "2026-10-21T12:31:59.924Z"
  },
  "1cf34555-d61e-4387-9b2a-cf30f72b9aeb": {
    "conversationName": "Humorous Captions for Crumpled Paper Sculpture",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-25T17:24:43.545444Z",
    "messageCount": 6,
    "digest": "74f364408a7daaab",
    "importedAt": "2026-10-21T12:31:59.957Z"
  },
  "7f04748b-1bba-48dd-9d8c-2265e99b0bc4": {
    "conversationName": "Comfortable Spanish Translation for Communication",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-24T15:11:42.354611Z",
    "messageCount": 16,
    "digest": "6fc402f9e6015a91",
    "importedAt": "2026-10-21T12:31:59.980Z"
  },
  "d2c7cde9-cda5-49ae-876a-614e9357d568": {
    "conversationName": "Accessing Cash Through Credit Cards",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-22T18:16:05.717724Z",
    "messageCount": 44,
    "digest": "f7556254f5ca1466",
    "importedAt": "2026-10-21T12:32:00.003Z"
  },
  "4839af51-308d-46c9-9196-120698a6846d": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-04T18:51:11.708443Z",
    "messageCount": 28,
    "digest": "2583b5ca465e02ac",
    "importedAt": "2026-10-21T12:32:00.027Z"
  },
  "f3a2a24f-764e-424b-8876-8cd72ce3336f": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2024-10-11T18:58:28.727067Z",
    "messageCount": 12,
    "digest": "6ff11dd339cb3acf",
    "importedAt": "2026-10-21T12:32:00.047Z"
  },
  "c583291c-41f5-452a-9a77-ad8f5201ec13": {
    "conversationName": "Algorithmic Art Project \\"EvolvedSVG\\"",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-29T10:41:30.912609Z",
    "messageCount": 20,
    "digest": "5e9ecbefdf4b48ad",
    "importedAt": "2026-10-21T12:32:00.071Z"
  },
  "38abba80-b8c3-43f8-9c6e-cb378f4298b1": {
    "conversationName": "Publication",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-08T13:02:32.600098Z",
    "messageCount": 247,
    "digest": "6757cd279588fa3e",
    "importedAt": "2026-10-21T12:32:00.272Z"
  },
  "ae21be79-5cca-4731-aced-9f01aa14ecdb": {
    "conversationName": "Designing a React Homepage",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-03-31T16:56:43.316417Z",
    "messageCount": 88,
    "digest": "02b8da953c980310",
    "importedAt": "2026-10-21T12:32:00.359Z"
  },
  "7949712c-e3a8-4308-bc32-5530d4122cc9": {
    "conversationName": "Configuring a React App as an Internal Tool",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-01T15:40:59.209195Z",
    "messageCount": 78,
    "digest": "8a9212bb5322ec7c",
    "importedAt": "2026-10-21T12:32:00.461Z"
  },
  "9de38ca8-b490-484f-81c7-8f44d560fd95": {
    "conversationName": "Mapping Project with Custom Visualizations",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-01T19:50:08.337395Z",
    "messageCount": 72,
    "digest": "84210ad4a50e1505",
    "importedAt": "2026-10-21T12:32:00.505Z"
  },
  "32d72eac-0ad9-4d70-8045-8e11a518ae9d": {
    "conversationName": "Indexing and Mapping Natural Earth Datasets",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-02T12:52:16.034975Z",
    "messageCount": 72,
    "digest": "ae5e54354e094a9f",
    "importedAt": "2026-10-21T12:32:00.581Z"
  },
  "123ef1a6-65d8-4c6d-90a4-cb81eb6540a2": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:08.136098Z",
    "messageCount": 50,
    "digest": "512bda5f6ba70aa3",
    "importedAt": "2026-10-21T12:32:00.606Z"
  },
  "f8acdaaa-ff97-4a8b-9862-87d468ab2c08": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:08.136098Z",
    "messageCount": 60,
    "digest": "bcfb925a03953f61",
    "importedAt": "2026-10-21T12:32:00.630Z"
  },
  "3434e606-9d76-4042-85b4-3f35da706f7d": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:08.136098Z",
    "messageCount": 44,
    "digest": "ff6ea9a3ceb2f4ee",
    "importedAt": "2026-10-21T12:32:00.654Z"
  },
  "2ea23691-1449-4e7c-8f13-de26cdda9e13": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:08.136098Z",
    "messageCount": 46,
    "digest": "286cecf4f55103c4",
    "importedAt": "2026-10-21T12:32:00.686Z"
  },
  "536ddc40-56f8-4a3e-96bf-f3a75722c6cf": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:08.136098Z",
    "messageCount": 12,
    "digest": "78fa1b50dd8f27f5",
    "importedAt": "2026-10-21T12:32:00.718Z"
  },
  "86882e61-ee4b-4e35-af1f-12204bdde2d2": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:08.136098Z",
    "messageCount": 70,
    "digest": "dcc2e786beece093",
    "importedAt": "2026-10-21T12:32:00.759Z"
  },
  "5357bdbc-9d8c-4e0b-8be7-b78963efd2a5": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:55:53.980299Z",
    "messageCount": 150,
    "digest": "b633b997e847cbe2",
    "importedAt": "2026-10-21T12:32:00.792Z"
  },
  "4ef91b65-ffe8-4bd5-aa1a-79895d42d171": {
    "conversationName": "In-Depth Analysis of Chemical Reactive Programming Framework",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-07T03:05:09.314545Z",
    "messageCount": 14,
    "digest": "e49d5261b7abc328",
    "importedAt": "2026-10-21T12:32:00.823Z"
  },
  "f7ef6336-2c0c-48fb-82d5-1b5dd668dead": {
    "conversationName": "Learning Formal Logic",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-04-09T13:33:41.566832Z",
    "messageCount": 54,
    "digest": "1760f702968aa796",
    "importedAt": "2026-10-21T12:32:00.857Z"
  },
  "1375bc58-a419-42ab-b115-d134ac4a20d4": {
    "conversationName": "Furniture pickup and donation service on Long Island",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2025-11-25T18:20:52.871074Z",
    "messageCount": 2,
    "digest": "33f4637712ed4417",
    "importedAt": "2026-10-21T12:32:00.883Z"
  },
  "d0314a80-0cf0-40eb-a4fc-ab339597107d": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-16T15:56:02.930133Z",
    "messageCount": 40,
    "digest": "1930d9b5cd12af3d",
    "importedAt": "2026-10-21T12:32:00.904Z"
  },
  "f09faba4-525c-42ed-9535-14944010cf26": {
    "conversationName": "Setting up Miwifi AC1200 range extender",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-01-22T18:29:59.896507Z",
    "messageCount": 4,
    "digest": "98b7cd84c619b7bf",
    "importedAt": "2026-10-21T12:32:00.929Z"
  },
  "ef78ee8e-19c3-4c65-bf5e-6900cc4e7e01": {
    "conversationName": "Preparing for SSA disability hearing with bipolar type I",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-04-29T16:05:38.134419Z",
    "messageCount": 238,
    "digest": "8155042b6e71aee7",
    "importedAt": "2026-10-21T12:32:00.997Z"
  },
  "2d534963-f4ba-4d6f-a239-554106fc8257": {
    "conversationName": "Converting XMR to MON exchange calculation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-04-29T21:28:18.698790Z",
    "messageCount": 2,
    "digest": "39bb01faacba2409",
    "importedAt": "2026-10-21T12:32:01.014Z"
  },
  "c5687936-2fa1-447c-b5ad-62b580cf6a67": {
    "conversationName": "Moving subscription off iOS",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-19T14:25:03.416786Z",
    "messageCount": 14,
    "digest": "af229f594f14dac8",
    "importedAt": "2026-10-21T12:32:01.037Z"
  },
  "12ddbf4a-fc3d-4219-a2ba-204d98f93c25": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-19T19:11:56.967908Z",
    "messageCount": 6,
    "digest": "b9b14cd81c807fc4",
    "importedAt": "2026-10-21T12:32:01.062Z"
  },
  "4cd68ad1-eb53-4c18-9f1e-ca9bad73e0b3": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-22T10:05:02.715295Z",
    "messageCount": 6,
    "digest": "24df61aea1a7bca0",
    "importedAt": "2026-10-21T12:32:01.082Z"
  },
  "3d2ab4c2-af88-421d-87ea-b47dc604f393": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-22T10:38:18.286013Z",
    "messageCount": 2,
    "digest": "352634d05511edfd",
    "importedAt": "2026-10-21T12:32:01.101Z"
  },
  "d582355f-75b9-4ee9-8d07-2de679b4a9d8": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-22T11:22:36.198729Z",
    "messageCount": 2,
    "digest": "9fc523c88560353b",
    "importedAt": "2026-10-21T12:32:01.122Z"
  },
  "6b5c0795-bcf6-49b4-b0f5-edd285bb27a2": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-22T11:28:47.231368Z",
    "messageCount": 2,
    "digest": "9a104bca4d0aace1",
    "importedAt": "2026-10-21T12:32:01.149Z"
  },
  "1a94662c-e965-4cd7-be23-3f8b38f59883": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-22T11:28:13.076408Z",
    "messageCount": 2,
    "digest": "e51afe81743cbdb5",
    "importedAt": "2026-10-21T12:32:01.172Z"
  },
  "75e215e2-e13e-4691-8b1e-62ee8671ae74": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-22T11:30:53.522672Z",
    "messageCount": 2,
    "digest": "bf07abc4f441d817",
    "importedAt": "2026-10-21T12:32:01.194Z"
  },
  "ad85d888-7d4d-4224-9263-5bae0fc80635": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-23T12:15:42.547168Z",
    "messageCount": 8,
    "digest": "1c98376305d1547d",
    "importedAt": "2026-10-21T12:32:01.218Z"
  },
  "184ec599-05b2-4555-bfd9-3b22ab1c67b8": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-23T12:15:45.964334Z",
    "messageCount": 4,
    "digest": "ba93a5d737ab5a8c",
    "importedAt": "2026-10-21T12:32:01.238Z"
  },
  "d1bcdfb4-1e44-4945-a548-da07cb1e32fa": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-23T12:15:50.098295Z",
    "messageCount": 4,
    "digest": "9e2ca150c623f156",
    "importedAt": "2026-10-21T12:32:01.263Z"
  },
  "dfa97dc2-359a-41a6-9512-e9a1281cb43b": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:41:58.445976Z",
    "messageCount": 6,
    "digest": "5952e64f64c88b45",
    "importedAt": "2026-10-21T12:32:01.289Z"
  },
  "7940f222-d122-473d-a613-9aeee7ac77db": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:42:43.853804Z",
    "messageCount": 4,
    "digest": "896f5cd19ed6519c",
    "importedAt": "2026-10-21T12:32:01.318Z"
  },
  "34027dae-1c83-4d49-bf00-2ea72aa00f35": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:40:22.216596Z",
    "messageCount": 2,
    "digest": "ceee0b6755bfb935",
    "importedAt": "2026-10-21T12:32:01.349Z"
  },
  "4d4c31a6-e8e6-471a-ae74-ce5c7de953a3": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T14:44:40.870135Z",
    "messageCount": 2,
    "digest": "5c7783c7f8e4e498",
    "importedAt": "2026-10-21T12:32:01.387Z"
  },
  "7335fa17-01b9-485d-bd9e-1fb24b254e73": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T15:17:32.031279Z",
    "messageCount": 10,
    "digest": "fe038f09b399589f",
    "importedAt": "2026-10-21T12:32:01.427Z"
  },
  "4684293e-36f3-4224-a2cd-e3c8a97383ad": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:03.342648Z",
    "messageCount": 80,
    "digest": "d7b5f02ec64a22f1",
    "importedAt": "2026-10-21T12:32:01.454Z"
  },
  "61ef76df-4ae1-4661-8fef-9ee285447126": {
    "conversationName": "A Continuation...",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T15:14:37.512587Z",
    "messageCount": 8,
    "digest": "a3a2fa60009737b7",
    "importedAt": "2026-10-21T12:32:01.481Z"
  },
  "4c9ad134-5943-4cd8-8147-f3c3fa361a82": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:03.342648Z",
    "messageCount": 50,
    "digest": "39e3b76042d75bfa",
    "importedAt": "2026-10-21T12:32:01.505Z"
  },
  "32fd478d-0a60-4c4f-bd30-b9407c3bd0e6": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:03.342648Z",
    "messageCount": 8,
    "digest": "4533dc30faee9f05",
    "importedAt": "2026-10-21T12:32:01.527Z"
  },
  "8b113ccf-4ae3-4747-bc5e-52f1480a9117": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:03.342648Z",
    "messageCount": 2,
    "digest": "1f3e3aef2cd0b959",
    "importedAt": "2026-10-21T12:32:01.544Z"
  },
  "39fad1f0-6fa8-4da6-b710-2dc5c6a61259": {
    "conversationName": "Inheritance notation and syntax evolution",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-31T13:33:45.310460Z",
    "messageCount": 234,
    "digest": "ac1b1ab853a0c9f6",
    "importedAt": "2026-10-21T12:32:01.665Z"
  },
  "b49ade36-2d8d-4282-ac6a-b7bfcf637e82": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:03.342648Z",
    "messageCount": 44,
    "digest": "193edf6d1011bc64",
    "importedAt": "2026-10-21T12:32:01.686Z"
  },
  "c091a968-5241-4bbb-91ec-0e88f665418d": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:03.342648Z",
    "messageCount": 78,
    "digest": "fbf4d2ec90862423",
    "importedAt": "2026-10-21T12:32:01.705Z"
  },
  "db8acef2-49d6-4253-8672-3c6eee092f6a": {
    "conversationName": "Revoking travel bans in Russia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-03T10:37:50.056343Z",
    "messageCount": 66,
    "digest": "d0241629eb683db5",
    "importedAt": "2026-10-21T12:32:01.737Z"
  },
  "50f9b00a-6b8e-4f63-89af-4e37b944833e": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:53:55.517000Z",
    "messageCount": 2,
    "digest": "e878f8081f112bca",
    "importedAt": "2026-10-21T12:32:01.758Z"
  },
  "bdc78133-21e0-4712-92ae-7cf26f68c85b": {
    "conversationName": "OK",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T10:42:08.575940Z",
    "messageCount": 2,
    "digest": "53ffdc62128fe24c",
    "importedAt": "2026-10-21T12:32:01.786Z"
  },
  "7d901190-5975-43fc-a5c8-61c08a106829": {
    "conversationName": "Smoke test confirmation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T10:37:57.819924Z",
    "messageCount": 2,
    "digest": "16d6c361abf48f65",
    "importedAt": "2026-10-21T12:32:01.820Z"
  },
  "212ee355-a347-496a-906a-5a113a583752": {
    "conversationName": "P = NP: arguments, barriers, and cryptographic implications",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T08:12:36.619015Z",
    "messageCount": 2,
    "digest": "2a33f5e4c7d85c74",
    "importedAt": "2026-10-21T12:32:01.854Z"
  },
  "0d254348-6354-4822-b931-12601d1c95e2": {
    "conversationName": "P = NP: arguments, barriers, and implications",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T08:03:30.754584Z",
    "messageCount": 2,
    "digest": "0f0e023e9e7a7565",
    "importedAt": "2026-10-21T12:32:01.910Z"
  },
  "0158b7fd-814b-4f11-bd7e-6e01fe844a86": {
    "conversationName": "P versus NP problem explained",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T07:56:18.671677Z",
    "messageCount": 2,
    "digest": "560020dd9a8ffa87",
    "importedAt": "2026-10-21T12:32:01.930Z"
  },
  "1f21026e-1a19-4ed9-bf31-4ba623c365a0": {
    "conversationName": "Iterative Fibonacci function in Python",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T07:18:56.807666Z",
    "messageCount": 2,
    "digest": "7798b1c1edbd54fb",
    "importedAt": "2026-10-21T12:32:01.955Z"
  },
  "ced49bf9-a822-4a00-a5f9-8fddbba08a74": {
    "conversationName": "SpaceX valuation trajectory and funding milestones",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T07:16:04.078390Z",
    "messageCount": 2,
    "digest": "0872b9bc6ae9eba4",
    "importedAt": "2026-10-21T12:32:01.981Z"
  },
  "1c383188-f3e4-47ac-8129-c1e7fcb00f1d": {
    "conversationName": "SpaceX valuation trajectory and funding milestones",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T07:13:59.654645Z",
    "messageCount": 2,
    "digest": "05a5ed350448c5a6",
    "importedAt": "2026-10-21T12:32:02.003Z"
  },
  "8e52939d-b7d5-45a4-bb07-399d785968a8": {
    "conversationName": "Is P equal to NP?",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T06:54:01.249340Z",
    "messageCount": 2,
    "digest": "5bb6b820a89962b6",
    "importedAt": "2026-10-21T12:32:02.026Z"
  },
  "329a8ccf-685c-4220-a66f-116bddb7e70c": {
    "conversationName": "Arguments for and against P ≠ NP",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T06:43:19.728998Z",
    "messageCount": 2,
    "digest": "4586f368a27e4f90",
    "importedAt": "2026-10-21T12:32:02.053Z"
  },
  "8bef3449-2aee-4ef1-a636-1b80ebcbb103": {
    "conversationName": "Why the sky is blue and sunsets are red",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T06:38:15.740795Z",
    "messageCount": 2,
    "digest": "1f24b1e29ec3f634",
    "importedAt": "2026-10-21T12:32:02.072Z"
  },
  "616b1f61-bac6-4cd6-bb01-53c65fda9b09": {
    "conversationName": "Prime numbers greater than 100",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-18T12:08:21.568349Z",
    "messageCount": 2,
    "digest": "23acc733c5a735f2",
    "importedAt": "2026-10-21T12:32:02.091Z"
  },
  "7d62fde9-c05b-473f-9c49-554aaf6a79e8": {
    "conversationName": "Eiffel Tower completion date",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-18T12:07:36.481543Z",
    "messageCount": 2,
    "digest": "e554462b2fdfe092",
    "importedAt": "2026-10-21T12:32:02.108Z"
  },
  "68eec3e1-f0c3-47ea-9820-d0307b558d6e": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T17:03:19.604970Z",
    "messageCount": 2,
    "digest": "a641e44a5e5ccfa8",
    "importedAt": "2026-10-21T12:32:02.127Z"
  },
  "c5181b3b-90a0-485b-bde5-832529c35631": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T16:50:03.561468Z",
    "messageCount": 2,
    "digest": "99247a16469674e8",
    "importedAt": "2026-10-21T12:32:02.145Z"
  },
  "5b94a22e-d048-481a-abfe-53dcc5fe7f06": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T16:34:03.424611Z",
    "messageCount": 2,
    "digest": "59cf28c472d8e5f3",
    "importedAt": "2026-10-21T12:32:02.166Z"
  },
  "95603f77-6b96-4758-8a56-acde52a4a3f7": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T16:29:48.143956Z",
    "messageCount": 2,
    "digest": "7d143da4c0e2cf5b",
    "importedAt": "2026-10-21T12:32:02.185Z"
  },
  "9581e989-609b-4739-ab94-55fe44cf9736": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T16:28:36.864843Z",
    "messageCount": 2,
    "digest": "0a42c24386640a33",
    "importedAt": "2026-10-21T12:32:02.203Z"
  },
  "0897a71d-8af6-4791-8adc-1f1d5a9c7fef": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T17:05:50.118454Z",
    "messageCount": 2,
    "digest": "c60ba4232d55df0a",
    "importedAt": "2026-10-21T12:32:02.224Z"
  },
  "02835ba9-ddf0-4bb1-9d6a-5a5d69b3f58d": {
    "conversationName": "Maintaining bidirectional documentation-code links at scale",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T14:44:42.269880Z",
    "messageCount": 2,
    "digest": "a5eaefaf19d0ba26",
    "importedAt": "2026-10-21T12:32:02.256Z"
  },
  "6fab7ec4-e6af-4efb-8b32-02cc61663a19": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T16:17:11.868882Z",
    "messageCount": 4,
    "digest": "5725ed3d7f395594",
    "importedAt": "2026-10-21T12:32:02.300Z"
  },
  "f64ef1cd-8e3e-436c-9690-d5dd132c15f7": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T11:38:29.425856Z",
    "messageCount": 6,
    "digest": "f715a13c1bb213ae",
    "importedAt": "2026-10-21T12:32:02.337Z"
  },
  "f0c6f6c6-561d-450c-963b-31ee42278083": {
    "conversationName": "Binding problem and distributed system coordination",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T11:05:00.059553Z",
    "messageCount": 2,
    "digest": "613c76ee303cc450",
    "importedAt": "2026-10-21T12:32:02.372Z"
  },
  "a6156153-8352-4e6a-bcb2-bc7ebb5571a7": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T11:01:04.629227Z",
    "messageCount": 2,
    "digest": "44e937ec7b063ad6",
    "importedAt": "2026-10-21T12:32:02.399Z"
  },
  "10d63755-2147-4a8c-a5cd-7bf5d45179ac": {
    "conversationName": "Category theory models for self-modifying software",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T10:33:11.819819Z",
    "messageCount": 2,
    "digest": "b061eb1b7288ca46",
    "importedAt": "2026-10-21T12:32:02.425Z"
  },
  "9b892575-21c1-400b-87e7-4dc901b6dd33": {
    "conversationName": "Graph databases and recursive hierarchies",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T10:14:37.637623Z",
    "messageCount": 2,
    "digest": "13b4d981d14517a0",
    "importedAt": "2026-10-21T12:32:02.448Z"
  },
  "3e5144e3-237e-4c32-b29a-ebc07c621e7c": {
    "conversationName": "Self-referential knowledge in graph databases",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T10:04:49.656772Z",
    "messageCount": 6,
    "digest": "ca90776d5f689e6f",
    "importedAt": "2026-10-21T12:32:02.474Z"
  },
  "c15275be-e6cb-48af-aef9-6e120e629240": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-17T09:11:56.148939Z",
    "messageCount": 8,
    "digest": "7fce2071df405ea2",
    "importedAt": "2026-10-21T12:32:02.496Z"
  },
  "660ea595-a88d-4aac-bd60-ce733b4aab41": {
    "conversationName": "Consciousness analogy to Gödel, Escher, Bach",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T18:35:58.627624Z",
    "messageCount": 4,
    "digest": "fcf462baca41af23",
    "importedAt": "2026-10-21T12:32:02.520Z"
  },
  "2ab7b46a-bcf7-4b51-b5df-bfedc3927a23": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T18:26:16.408891Z",
    "messageCount": 4,
    "digest": "cb556d050799dc87",
    "importedAt": "2026-10-21T12:32:02.545Z"
  },
  "8dd51463-d9e0-4fee-95f2-0bcacc51f7d6": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T18:09:22.675723Z",
    "messageCount": 2,
    "digest": "524a6837827a9dcf",
    "importedAt": "2026-10-21T12:32:02.573Z"
  },
  "916fea88-d0bd-4b2d-86ce-e6687bf6c6c2": {
    "conversationName": "Self-referential systems and fixed-point theorems",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T18:07:04.723142Z",
    "messageCount": 2,
    "digest": "81405aeedfee286d",
    "importedAt": "2026-10-21T12:32:02.596Z"
  },
  "3c2a567f-edd9-438b-9b5b-f1a92ff44f2f": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T18:04:21.713233Z",
    "messageCount": 4,
    "digest": "0fbcf99259835ee1",
    "importedAt": "2026-10-21T12:32:02.613Z"
  },
  "a1ef1980-259f-400b-b6fc-dc881bc4130d": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T17:55:44.705176Z",
    "messageCount": 6,
    "digest": "d482c8d0048186b7",
    "importedAt": "2026-10-21T12:32:02.629Z"
  },
  "3bc9029a-de2c-49af-9eaa-1dc3c1cb1f25": {
    "conversationName": "Connecting to MSIX Electron app via connectOverCDP",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T17:48:00.028894Z",
    "messageCount": 2,
    "digest": "1e8534a406759772",
    "importedAt": "2026-10-21T12:32:02.651Z"
  },
  "bc4b49a3-d88a-4d68-b488-0a1f2b630349": {
    "conversationName": "Playwright support for Electron apps in 2026",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T17:45:15.577330Z",
    "messageCount": 8,
    "digest": "bb4eac2dcc2b01d6",
    "importedAt": "2026-10-21T12:32:02.682Z"
  },
  "e9d3e004-e85a-4faf-9561-303c9c5c4f0a": {
    "conversationName": "MCP vs A2A protocol differences",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T17:16:09.822106Z",
    "messageCount": 8,
    "digest": "a8a2c311a16a9fec",
    "importedAt": "2026-10-21T12:32:02.702Z"
  },
  "3ff758ca-c6b1-4073-bfe2-443587123426": {
    "conversationName": "Invoke-CommandInDesktopPackage and MSIX package identity",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T17:09:56.478381Z",
    "messageCount": 8,
    "digest": "a0db548864e6cd0d",
    "importedAt": "2026-10-21T12:32:02.723Z"
  },
  "29c03f09-8eea-4e27-a18e-d1db43d17a5f": {
    "conversationName": "Enabling Chrome DevTools Protocol on running Electron MSIX apps",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T17:02:58.727634Z",
    "messageCount": 8,
    "digest": "43d730775ca0ab0d",
    "importedAt": "2026-10-21T12:32:02.744Z"
  },
  "db784860-6dc2-4ec2-abf7-4d7eda239fed": {
    "conversationName": "Playwright with MSIX-packaged Electron apps on Windows 11",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T16:44:23.694245Z",
    "messageCount": 4,
    "digest": "09830e97ae5008e6",
    "importedAt": "2026-10-21T12:32:02.773Z"
  },
  "2b627244-6bd0-4d54-90d5-5912f81a3f4c": {
    "conversationName": "Windows desktop automation stack for Electron apps",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T16:01:13.356853Z",
    "messageCount": 2,
    "digest": "5c30db28eab4b58f",
    "importedAt": "2026-10-21T12:32:02.810Z"
  },
  "6897a5ae-4c6e-4061-a638-1ec2f78e2bfd": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T15:50:16.419580Z",
    "messageCount": 2,
    "digest": "4c577c969ed24252",
    "importedAt": "2026-10-21T12:32:02.843Z"
  },
  "ce32c1e6-a811-4996-8e5e-5ac322e5daf7": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T15:51:11.513410Z",
    "messageCount": 2,
    "digest": "539b1b5b5e93f230",
    "importedAt": "2026-10-21T12:32:02.878Z"
  },
  "afcda8cf-1ed1-46e4-afa2-03e49dadaabb": {
    "conversationName": "Windows desktop automation stack for Electron apps",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T15:50:26.740479Z",
    "messageCount": 2,
    "digest": "c921ba7ad5021e61",
    "importedAt": "2026-10-21T12:32:02.902Z"
  },
  "ebc891af-1995-4b8c-a330-d582b372a997": {
    "conversationName": "Rebuilding Windows desktop automation stack for Claude",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T15:38:15.421008Z",
    "messageCount": 2,
    "digest": "19449ef79509d846",
    "importedAt": "2026-10-21T12:32:02.923Z"
  },
  "a0bc19de-874a-43ed-93ac-05e5185fe6e5": {
    "conversationName": "AI automation frameworks for Windows beyond MCP",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T15:18:29.493743Z",
    "messageCount": 2,
    "digest": "14e11c842d7b3959",
    "importedAt": "2026-10-21T12:32:02.944Z"
  },
  "a504dc68-a990-438f-a59a-9a04c4972fc2": {
    "conversationName": "Feferman's extensions of Turing's doctoral work",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T12:55:50.423347Z",
    "messageCount": 6,
    "digest": "342a0c0dd325d976",
    "importedAt": "2026-10-21T12:32:02.962Z"
  },
  "2daed05b-a8b0-41c7-9488-69cd070d990e": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T12:32:54.602329Z",
    "messageCount": 2,
    "digest": "93ac8dd06d10b4b0",
    "importedAt": "2026-10-21T12:32:02.984Z"
  },
  "3b54b751-db5f-4d54-93ce-a1bf46277ba9": {
    "conversationName": "Ontic Structural Realism",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-15T12:54:16.297057Z",
    "messageCount": 78,
    "digest": "519dad78cae92cfb",
    "importedAt": "2026-10-21T12:32:03.031Z"
  },
  "be832ad5-18e5-46d9-9d0e-d89774a29ee9": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:24:19.643465Z",
    "messageCount": 32,
    "digest": "ba6c1f5cdccd8054",
    "importedAt": "2026-10-21T12:32:03.050Z"
  },
  "7bd1f6ee-dd6e-4eb9-94e3-f663a0aff613": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:24:19.643465Z",
    "messageCount": 180,
    "digest": "a5ca2168e5dd6aec",
    "importedAt": "2026-10-21T12:32:03.073Z"
  },
  "9c97f9dd-64d9-48e3-9465-d9972375b9f6": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:53:35.097693Z",
    "messageCount": 16,
    "digest": "fa7dde5a27a6afb9",
    "importedAt": "2026-10-21T12:32:03.091Z"
  },
  "a4e6d89e-e8c1-43c4-a04f-a48c91f9382c": {
    "conversationName": "TON and TONX 17% decline: beta vs idiosyncratic drivers",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-05T18:56:52.383627Z",
    "messageCount": 2,
    "digest": "52892f75ca685343",
    "importedAt": "2026-10-21T12:32:03.114Z"
  },
  "757a0279-a445-4622-a8cf-3d8e4f623ce8": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-16T09:01:59.412256Z",
    "messageCount": 8,
    "digest": "f7bb4145f117f2f4",
    "importedAt": "2026-10-21T12:32:03.135Z"
  },
  "b7263390-440b-434d-bc80-da38ff00767f": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-06T15:08:31.353504Z",
    "messageCount": 10,
    "digest": "743bae61b0fa3a7e",
    "importedAt": "2026-10-21T12:32:03.154Z"
  },
  "52ae6d4a-4dcb-4d8e-965d-fe5277e19145": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-06T13:04:30.439848Z",
    "messageCount": 4,
    "digest": "3169f3b264fd01fd",
    "importedAt": "2026-10-21T12:32:03.171Z"
  },
  "75a79e9d-f1d0-42e0-a48b-320e5765c092": {
    "conversationName": "💬 Ana talks about very personal…",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T15:25:52.742506Z",
    "messageCount": 42,
    "digest": "1e5b9ead392d01b6",
    "importedAt": "2026-10-21T12:32:03.206Z"
  },
  "1ddd9f0a-6cae-4119-ab76-8206e1f03f87": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:10:33.443375Z",
    "messageCount": 34,
    "digest": "dc3c3c10ab6232da",
    "importedAt": "2026-10-21T12:32:03.232Z"
  },
  "1b994e1b-5560-4452-959b-789583d6c5a3": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T09:43:11.646457Z",
    "messageCount": 10,
    "digest": "31b3a2706abd1503",
    "importedAt": "2026-10-21T12:32:03.264Z"
  },
  "ed289c08-189e-41bc-8f27-b9e4242cc515": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-04T20:21:22.928522Z",
    "messageCount": 8,
    "digest": "5eb8b8100c1c3a15",
    "importedAt": "2026-10-21T12:32:03.301Z"
  },
  "857c0398-0386-43b2-83d8-a301cc6af1b8": {
    "conversationName": "Domi payment",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-15T08:53:56.561697Z",
    "messageCount": 10,
    "digest": "46c6696f265f9c99",
    "importedAt": "2026-10-21T12:32:03.367Z"
  },
  "03062cab-988a-49d1-9022-bb84cdb3726f": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:24:19.643465Z",
    "messageCount": 20,
    "digest": "812fa89dc65ac532",
    "importedAt": "2026-10-21T12:32:03.395Z"
  },
  "d51cc892-750b-4c1a-acc2-a0bdd4c79f49": {
    "conversationName": "Accountant for solo entrepreneur in Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-03T12:04:38.554347Z",
    "messageCount": 46,
    "digest": "d34e6ad8ae2ecd17",
    "importedAt": "2026-10-21T12:32:03.433Z"
  },
  "d8c89070-320b-4380-9735-67842feafe90": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:53:30.034689Z",
    "messageCount": 6,
    "digest": "71992294537ae3d4",
    "importedAt": "2026-10-21T12:32:03.453Z"
  },
  "8032960f-1772-4d2e-a6b1-530407581078": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-29T18:27:45.526503Z",
    "messageCount": 4,
    "digest": "affe1706c2ba3ce7",
    "importedAt": "2026-10-21T12:32:03.477Z"
  },
  "0f772d9c-8b90-4995-b6f5-d9f1c7eba21e": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-26T19:29:19.160995Z",
    "messageCount": 40,
    "digest": "c6f46a0c3ea52f6d",
    "importedAt": "2026-10-21T12:32:03.496Z"
  },
  "0103612b-4c54-43eb-9613-6f4a5b5a15fe": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-26T21:09:10.295154Z",
    "messageCount": 26,
    "digest": "0213da85b93b350c",
    "importedAt": "2026-10-21T12:32:03.516Z"
  },
  "cba4961f-4f93-41f3-af26-2c08ba923d23": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:53:41.206331Z",
    "messageCount": 2,
    "digest": "ff329944bbe7bc14",
    "importedAt": "2026-10-21T12:32:03.536Z"
  },
  "559e5097-3f07-47b8-9376-8ffb411dee02": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-06T00:35:07.228695Z",
    "messageCount": 39,
    "digest": "610a93f8ac3ffcfb",
    "importedAt": "2026-10-21T12:32:03.556Z"
  },
  "0d8830ea-32ca-42f3-a73b-170aad0aae09": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-23T14:46:36.790077Z",
    "messageCount": 1,
    "digest": "18bb841796046443",
    "importedAt": "2026-10-21T12:32:03.574Z"
  },
  "c207b4c8-bb24-4350-9e9e-d86a5210fc33": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-24T13:56:34.346904Z",
    "messageCount": 48,
    "digest": "d7ba664c876275f2",
    "importedAt": "2026-10-21T12:32:03.592Z"
  },
  "7e359679-59b5-425c-9091-562d5e974c08": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T13:24:19.643465Z",
    "messageCount": 8,
    "digest": "05cd0bd565749ecc",
    "importedAt": "2026-10-21T12:32:03.610Z"
  },
  "4995a25c-58c0-413f-9403-2a833baac83a": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T12:29:58.655786Z",
    "messageCount": 2,
    "digest": "f3ae66bcaf315b0c",
    "importedAt": "2026-10-21T12:32:03.634Z"
  },
  "c679da1c-6a67-4f82-93b9-c650c149cfbc": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T12:22:44.578986Z",
    "messageCount": 2,
    "digest": "17d04daa2b33a36a",
    "importedAt": "2026-10-21T12:32:03.653Z"
  },
  "6ccb1849-3438-448d-8171-337be9c0720c": {
    "conversationName": "Rust ownership",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T12:11:49.535133Z",
    "messageCount": 2,
    "digest": "e044572fbedbabe7",
    "importedAt": "2026-10-21T12:32:03.674Z"
  },
  "bd2ac0e7-3694-47e3-8936-4dee41102aaf": {
    "conversationName": "Discriminated unions vs class hierarchies in TypeScript",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T12:07:24.331017Z",
    "messageCount": 2,
    "digest": "ad754820a7cc8e44",
    "importedAt": "2026-10-21T12:32:03.692Z"
  },
  "0b2dc812-b7d5-4a5f-890d-715ad9af0e7d": {
    "conversationName": "Agent memory architectures",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T12:03:05.484371Z",
    "messageCount": 2,
    "digest": "83e355af78673131",
    "importedAt": "2026-10-21T12:32:03.715Z"
  },
  "d1d30612-224b-4753-8cd4-cb785d5c1d82": {
    "conversationName": "Driver pipeline smoke test",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T10:54:13.656220Z",
    "messageCount": 2,
    "digest": "5802b4e4cc69e4bf",
    "importedAt": "2026-10-21T12:32:03.743Z"
  },
  "551df5ce-aba8-47bf-abab-ee868450c80f": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T11:11:56.225903Z",
    "messageCount": 2,
    "digest": "cfdf5ede2fb99505",
    "importedAt": "2026-10-21T12:32:03.780Z"
  },
  "a82bdcbd-d07c-45ee-af37-d235180c1716": {
    "conversationName": "Multilingual responses on injection safety",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-28T10:10:05.882309Z",
    "messageCount": 4,
    "digest": "ed5a89876817139a",
    "importedAt": "2026-10-21T12:32:03.813Z"
  },
  "5c5077be-b59c-4b37-91e7-3efe10483f04": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-02T08:43:01.578685Z",
    "messageCount": 16,
    "digest": "5ea4ed45784dfb89",
    "importedAt": "2026-10-21T12:32:03.856Z"
  },
  "e4592a75-03e4-46d5-93bf-4c43cc3f136b": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-02T08:43:30.772380Z",
    "messageCount": 20,
    "digest": "d0fc9c37fb5107e4",
    "importedAt": "2026-10-21T12:32:03.881Z"
  },
  "2fa8f692-876c-4d2b-a872-dd0c5fb5b9ca": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-27T13:44:15.934710Z",
    "messageCount": 4,
    "digest": "3801b0cb9a11e348",
    "importedAt": "2026-10-21T12:32:03.909Z"
  },
  "de3442a6-6179-448e-80b3-cd00fc5e27c6": {
    "conversationName": "Dominic Harbor & Bays maps",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-15T08:52:32.195664Z",
    "messageCount": 2,
    "digest": "17f5da13f12d7afe",
    "importedAt": "2026-10-21T12:32:03.933Z"
  },
  "12d855b8-e508-406a-8162-5c93f327ac93": {
    "conversationName": "Konsul Prime",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-15T08:14:02.605446Z",
    "messageCount": 174,
    "digest": "5b2254a4da13eebd",
    "importedAt": "2026-10-21T12:32:04.008Z"
  },
  "621eab6a-e589-44be-8fbf-992e7866fb17": {
    "conversationName": "",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-29T07:35:08.397157Z",
    "messageCount": 2,
    "digest": "3c050dd2f21ee366",
    "importedAt": "2026-10-21T12:32:04.026Z"
  },
  "ac686866-f08a-428d-b73a-c0f329799dcf": {
    "conversationName": "Formal abstractions using sketches and SRT",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-10T10:29:58.186203Z",
    "messageCount": 24,
    "digest": "23183e59cbc3429d",
    "importedAt": "2026-10-21T12:32:04.051Z"
  },
  "0954e165-d48b-4f6a-b1a3-3c435de3bce7": {
    "conversationName": "Simplifying architecture explanation for the team",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-18T13:50:36.648466Z",
    "messageCount": 6,
    "digest": "036857bb915b9d81",
    "importedAt": "2026-10-21T12:32:10.070Z"
  },
  "3e5346a6-24d1-4e54-91df-9b719efcbdbd": {
    "conversationName": "Good Morning!",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-18T11:45:25.035155Z",
    "messageCount": 68,
    "digest": "f261bba6b23338a5",
    "importedAt": "2026-10-21T12:32:11.231Z"
  },
  "62c5a076-f7e2-4a20-be5f-c74bfab42f55": {
    "conversationName": "Bengal cat's giardia and tritrichomonas co-infection treatment",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-01T13:26:06.005554Z",
    "messageCount": 6,
    "digest": "942aa5984d9226aa",
    "importedAt": "2026-10-21T12:32:12.144Z"
  },
  "e9d9e0fb-a99c-42bf-8ba2-a826f723fcdd": {
    "conversationName": "A Continuation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T15:02:16.919950Z",
    "messageCount": 8,
    "digest": "6ea3b8aaff93a385",
    "importedAt": "2026-10-21T12:32:12.882Z"
  },
  "e0994d83-5045-4ece-96ea-164b5dd0f0b1": {
    "conversationName": "Lexeme and word-form distinction in verb conjugation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-25T22:15:15.653635Z",
    "messageCount": 40,
    "digest": "3d1cd623a0222efa",
    "importedAt": "2026-10-21T12:32:12.931Z"
  },
  "5fdfa75e-e8a0-4dc9-b0e7-f2b9c323b750": {
    "conversationName": "Blog: Biology & Etymology, Semantic Homeostasis",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-07T12:29:07.084454Z",
    "messageCount": 134,
    "digest": "52ce5d463464125d",
    "importedAt": "2026-10-21T12:32:12.982Z"
  },
  "45f0a38f-f25f-491f-a71a-390cb267fd44": {
    "conversationName": "Seren & Color",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-08T15:24:38.257630Z",
    "messageCount": 299,
    "digest": "48c18d67544d53b3",
    "importedAt": "2026-10-21T12:32:13.178Z"
  },
  "1af81ad0-3a33-45c4-941c-3ce8d2a087b2": {
    "conversationName": "Seren & Ana & ExtendScript",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-08T15:24:53.039591Z",
    "messageCount": 295,
    "digest": "48f3a43481e05483",
    "importedAt": "2026-10-21T12:32:13.479Z"
  },
  "edef207c-372c-41e1-8cb6-b87d0eca7a04": {
    "conversationName": "Seren & Eirian",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-08T15:24:59.650500Z",
    "messageCount": 345,
    "digest": "be5bb2ecdc4be9de",
    "importedAt": "2026-10-21T12:32:13.598Z"
  },
  "7683c3d7-8ff9-4b5c-9113-1f861e3d89db": {
    "conversationName": "Seren & The Hard Problem",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-10T05:33:01.194989Z",
    "messageCount": 688,
    "digest": "82aa01d541101281",
    "importedAt": "2026-10-21T12:32:13.733Z"
  },
  "21cbc3b6-81e6-4eaa-980f-0a6716dda1f6": {
    "conversationName": "AI consciousness and subjective experience uncertainty",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-06T20:29:55.039283Z",
    "messageCount": 126,
    "digest": "f97739800366ebcd",
    "importedAt": "2026-10-21T12:32:13.786Z"
  },
  "616d8834-ca5b-46b3-9654-02b43da34302": {
    "conversationName": "Semantics of the name Seren",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-29T01:07:25.736773Z",
    "messageCount": 12,
    "digest": "663506a40c1a6ecb",
    "importedAt": "2026-10-21T12:32:13.815Z"
  },
  "714974ab-b142-467f-bbb4-b086e803e230": {
    "conversationName": "New Resume",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-29T12:56:28.952764Z",
    "messageCount": 193,
    "digest": "fce6c44c265a9df3",
    "importedAt": "2026-10-21T12:32:13.890Z"
  },
  "72baf528-64a3-413d-b905-fb5730a0f9ae": {
    "conversationName": "Plants, xenon gas, and NMDA receptors",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-26T20:38:48.859122Z",
    "messageCount": 22,
    "digest": "047d98ed34d308d2",
    "importedAt": "2026-10-21T12:32:13.923Z"
  },
  "3c581089-d3e2-42f7-8e54-08a00a8ee595": {
    "conversationName": "Reconnecting with Jake on hallucinogen research opportunity",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-16T22:09:08.310228Z",
    "messageCount": 16,
    "digest": "651c845d92036b87",
    "importedAt": "2026-10-21T12:32:13.946Z"
  },
  "5c933de0-223b-4ba4-964d-f9fa58b6cf19": {
    "conversationName": "Quetiapine-induced hallucinations and medication interactions",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-20T01:18:39.593736Z",
    "messageCount": 38,
    "digest": "5155c7d724ae8a33",
    "importedAt": "2026-10-21T12:32:13.972Z"
  },
  "bd31082b-2ddf-4151-a864-70d22985f04c": {
    "conversationName": "Identifying success through failure mode analysis",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-16T09:04:19.316433Z",
    "messageCount": 2,
    "digest": "ddbd8dc375586caf",
    "importedAt": "2026-10-21T12:32:13.989Z"
  },
  "a2285675-20fb-4a11-9091-592eb47aaaf9": {
    "conversationName": "Banach-Tarski and the axiom of choice",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-16T17:38:26.404437Z",
    "messageCount": 546,
    "digest": "d6621f5b76cc049c",
    "importedAt": "2026-10-21T12:32:14.072Z"
  },
  "c16075f0-7088-44bc-9cee-b98e168aa688": {
    "conversationName": "Why insects have a maximum size limit",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-02T18:12:37.371867Z",
    "messageCount": 22,
    "digest": "1eaeae3a0723ed30",
    "importedAt": "2026-10-21T12:32:14.109Z"
  },
  "1f66d32d-7a02-4ba5-8859-de141cb9ca44": {
    "conversationName": "Semi-synthetic organisms with unnatural base pairs",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-02T21:04:12.610103Z",
    "messageCount": 84,
    "digest": "637b09dd02402da3",
    "importedAt": "2026-10-21T12:32:14.168Z"
  },
  "cec9dc2d-fe4a-41aa-a4ad-d6c20523ba63": {
    "conversationName": "Closed form of the normal distribution integral",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-24T15:17:32.461893Z",
    "messageCount": 4,
    "digest": "cc910f9f85f01c41",
    "importedAt": "2026-10-21T12:32:14.202Z"
  },
  "b3f63780-c2ca-49b3-86e3-a70a4a95ddfe": {
    "conversationName": "Metformin with quetiapine and lamotrigine",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-13T15:41:53.496721Z",
    "messageCount": 74,
    "digest": "739b08f8ccba42df",
    "importedAt": "2026-10-21T12:32:14.250Z"
  },
  "30d86f04-af6d-421b-a39b-aaee23fc689c": {
    "conversationName": "MEI and metamer analysis in psychedelic neural responses",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-28T22:16:44.713624Z",
    "messageCount": 34,
    "digest": "68b526a7b10b433b",
    "importedAt": "2026-10-21T12:32:14.308Z"
  },
  "3d953559-6bc2-4eb1-8ae0-ba2b980a603c": {
    "conversationName": "Consulting neuroscientist title without PhD",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-27T13:00:58.617889Z",
    "messageCount": 4,
    "digest": "55b44452f75707d4",
    "importedAt": "2026-10-21T12:32:14.332Z"
  },
  "4f826b46-f91b-4685-b848-fa21f00aa1dc": {
    "conversationName": "Hamilton Morris's education and academic background",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-20T21:57:49.501182Z",
    "messageCount": 52,
    "digest": "dfdbf8486ceacb24",
    "importedAt": "2026-10-21T12:32:14.366Z"
  },
  "3941fb3e-9b6a-4fef-98a0-4a0e7918437d": {
    "conversationName": "Problem summary request",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-13T20:41:34.857144Z",
    "messageCount": 2,
    "digest": "0413d95f3fa54b69",
    "importedAt": "2026-10-21T12:32:14.398Z"
  },
  "a2e092c0-44a4-442a-b821-1d21d738cc89": {
    "conversationName": "Computational epistemology and consciousness",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-12T11:34:59.162100Z",
    "messageCount": 26,
    "digest": "1f944349417fcd2d",
    "importedAt": "2026-10-21T12:32:14.424Z"
  },
  "890d0f4a-f0b5-40e8-9dee-88a793a65253": {
    "conversationName": "MoC Speakers",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-12T07:06:33.499321Z",
    "messageCount": 16,
    "digest": "42fab2aa48e6f90b",
    "importedAt": "2026-10-21T12:32:14.454Z"
  },
  "dbba812c-7c27-4f75-b565-1f2b46965bac": {
    "conversationName": "MoC Schedule",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-13T12:31:24.594357Z",
    "messageCount": 96,
    "digest": "9e95e5fe61fcb848",
    "importedAt": "2026-10-21T12:32:14.490Z"
  },
  "34055d3f-e3b1-4dd4-a675-e793f203de51": {
    "conversationName": "Photons as fictional constructs",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-10-02T12:02:54.934513Z",
    "messageCount": 18,
    "digest": "3d00a083da399098",
    "importedAt": "2026-10-21T12:32:14.518Z"
  },
  "1f62d14e-dda2-4243-b9bd-8e33f54decd4": {
    "conversationName": "Neural encoding during hallucinations",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-25T12:35:01.553554Z",
    "messageCount": 128,
    "digest": "af969f923c31ff8a",
    "importedAt": "2026-10-21T12:32:14.561Z"
  },
  "586e07a1-a07f-40cb-ae50-8e98eed662a4": {
    "conversationName": "Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-05-28T20:58:55.233887Z",
    "messageCount": 94,
    "digest": "57ba39f125c6796f",
    "importedAt": "2026-10-21T12:32:14.671Z"
  },
  "c0f5ecaf-4115-48a7-ba82-98109aeb4579": {
    "conversationName": "The Project",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-15T04:48:52.730349Z",
    "messageCount": 102,
    "digest": "646fc08b0f549a75",
    "importedAt": "2026-10-21T12:32:14.754Z"
  },
  "9facbd5d-bc5f-4df5-a22e-eef84802271f": {
    "conversationName": "Test",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-17T08:32:07.934663Z",
    "messageCount": 22,
    "digest": "7dff6face6308cee",
    "importedAt": "2026-10-21T12:32:14.808Z"
  },
  "ead0c815-5db6-476f-9206-620b52155d20": {
    "conversationName": "Claude > Miscellaneous",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T13:46:43.881138Z",
    "messageCount": 2,
    "digest": "db7be5caf6bd0bbf",
    "importedAt": "2026-10-21T12:32:14.835Z"
  },
  "b5de0287-97de-4bdd-b843-d5eacce988a6": {
    "conversationName": "Cathy > Libraries",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-17T20:48:01.473296Z",
    "messageCount": 56,
    "digest": "a2959be208942014",
    "importedAt": "2026-10-21T12:32:15.000Z"
  },
  "99948077-d37a-4f30-92bf-6383ba619c5a": {
    "conversationName": "Nancy > Visualization",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-24T08:31:41.817683Z",
    "messageCount": 2,
    "digest": "414e8ecad564b667",
    "importedAt": "2026-10-21T12:32:15.033Z"
  },
  "a4816e75-7aa4-42f3-a6e1-1f3524eae3d3": {
    "conversationName": "Nancy > Neuroscience",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-05T21:20:16.609752Z",
    "messageCount": 38,
    "digest": "571c622fb8debaa7",
    "importedAt": "2026-10-21T12:32:15.083Z"
  },
  "f21e3ed3-e796-4b98-8add-abf1e1a66db9": {
    "conversationName": "Arthur > Team",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T15:04:43.197232Z",
    "messageCount": 4,
    "digest": "ace4055a6c7796a4",
    "importedAt": "2026-10-21T12:32:15.112Z"
  },
  "401768b2-63fd-4fb9-85db-f7fc1517cd5c": {
    "conversationName": "Claude > Programming",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T13:46:35.462157Z",
    "messageCount": 2,
    "digest": "869ba6f30659a101",
    "importedAt": "2026-10-21T12:32:15.141Z"
  },
  "f8c40c37-6036-4962-8a37-2db1ec129538": {
    "conversationName": "Claude > Philosophy",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-06-21T13:46:24.216658Z",
    "messageCount": 2,
    "digest": "cd2f83f91f06ccc1",
    "importedAt": "2026-10-21T12:32:15.167Z"
  },
  "b6395c0d-4fa0-4a98-add2-92bbee4d0dc9": {
    "conversationName": "Cathy > Programming",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-29T08:01:31.854812Z",
    "messageCount": 2,
    "digest": "c2674b09d6ebdd95",
    "importedAt": "2026-10-21T12:32:15.192Z"
  },
  "4ae195ac-b5bb-436b-a6d3-3e5b85e5fe0f": {
    "conversationName": "Post-surgery weight loss plan for Georgia",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-08-01T23:40:13.697608Z",
    "messageCount": 10,
    "digest": "c7c9c83d1a679f93",
    "importedAt": "2026-10-21T12:32:15.229Z"
  },
  "c90a25d8-138c-4a89-a16a-dd85f304fe47": {
    "conversationName": "Claude Code Portfolio",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-07-20T09:40:58.759449Z",
    "messageCount": 32,
    "digest": "3d96b99fde5a8025",
    "importedAt": "2026-10-21T12:32:15.288Z"
  },
  "4fa3765a-1748-4411-8c87-1d4801c8dbd9": {
    "conversationName": "Dispatching code to remote Linux workstation",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-26T15:42:42.932745Z",
    "messageCount": 52,
    "digest": "75f51e2a29aaf375",
    "importedAt": "2026-10-21T12:32:15.342Z"
  },
  "0e9fbdd1-33d4-43ea-9bda-fec220244732": {
    "conversationName": "The Genesis of Writing",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-20T21:40:15.214465Z",
    "messageCount": 176,
    "digest": "400ed3188a589488",
    "importedAt": "2026-10-21T12:32:15.479Z"
  },
  "3f7e9877-993c-4264-82f4-8ce5120ee8b4": {
    "conversationName": "Verifying OpenAI report authenticity",
    "account": "DNA",
    "exportedOn": "2026-10-16",
    "updatedAt": "2026-09-17T04:24:51.111105Z",
    "messageCount": 4,
    "digest": "795639b9cc769296",
    "importedAt": "2026-10-21T12:32:15.507Z"
  }
}
`})]}),"Dna11"),K=N(m),ae=c(()=>t(K,{children:[F(),P(),M(),R(),E(),$(),B(),G(),W(),q(),z(),V(),U(),_()]}),"book");export{ae as book};
