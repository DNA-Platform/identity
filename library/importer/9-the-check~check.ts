import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
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
    const counted = (label: string): number => Number(new RegExp(`\\*\\*${label}:\\*\\* (\\d+)`, 'u').exec(text)?.[1] ?? 0);
    const statistics = {} as ArchiveStatistics;
    for (const [field, label] of Object.entries(countLabels) as [keyof ArchiveStatistics, string][])
        statistics[field] = counted(label);

    return statistics;
};

export const frontMatter = (text: string): string => /^---\r?\n([\s\S]*?)\r?\n---/u.exec(text)?.[1] ?? '';

export const transcriptMeta = (fileName: string, text: string): ArchiveTranscript => {
    const matter = frontMatter(text);
    const field = (name: string): string => new RegExp(`^${name}: (.*)$`, 'mu').exec(matter)?.[1]?.trim() ?? '';

    return {
        fileName,
        uuid: field('uuid'),
        title: field('title').replace(/^"(.*)"$/u, '$1'),
        messageCount: Number(field('messages') || 0),
    };
};

export const filedTranscriptNames = (coverText: string): string[] =>
    [...coverText.matchAll(/\]\(\.\.\/\.\.\/conversations\/([^)]+)\)/gu)].map(match => match[1]);

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
        const title = /^title: "?(.*?)"?\s*$/mu.exec(frontMatter(coverText))?.[1];
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
        const ours = `${conversation.messages.length} messages`;
        if (transcript === undefined) return [{ name, ours, theirs: 'no transcript' }];
        if (transcript.messageCount === conversation.messages.length) return [];

        return [{ name, ours, theirs: `${transcript.messageCount} messages` }];
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

        return [{ name: pairing.title || 'Untitled', ours: pairing.byHand ? `${ours}, by hand` : ours, theirs }];
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
    const unparsed = written.filter(file => file.endsWith('.tsx') && existsSync(file)).flatMap(file => {
        const book = found.books.find((one: { path: string }) => resolve(dirname(file)) === resolve(one.path));
        const made = transforming(readFileSync(file, 'utf8'), file, held, book);
        const missed: string[] = made.missing.map((one: unknown) => missing(one, held.keys()));
        const parsed = ts.transpileModule(made.text, {
            fileName: file, reportDiagnostics: true, compilerOptions: { jsx: ts.JsxEmit.Preserve },
        });
        const refused = (parsed.diagnostics ?? []).map(diagnostic =>
            `${file}: once transformed, ${ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ')}`);

        return [...missed, ...refused];
    });

    return { bookCount: found.books.length, keyCount: held.keys().length, faults: [...faults, ...unparsed] };
};

export const chapterInstants = (chapterText: string): string[] =>
    [...chapterText.matchAll(/^\s*at="([^"]+)"$/gmu)].map(match => match[1]);

export const writtenInstants = (bookFolder: string): string[] => {
    if (!existsSync(bookFolder)) return [];
    const chapterFileNames = readdirSync(bookFolder)
        .filter(fileName => /^\d/u.test(fileName) && fileName.endsWith('.tsx') && !fileName.includes('~'))
        .sort((a, b) => Number(/^\d+/u.exec(a)![0]) - Number(/^\d+/u.exec(b)![0]));

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
    const where = firstAstray < 0 ? 'at the end' : `from message ${firstAstray + 1}`;
    const ours = `${written.length} written, astray ${where}`;

    return [{ name: heldRecord.record.name, ours, theirs: `${thread.length} shown` }];
});

export const differenceLines = (heading: string, differences: Difference[]): string[] => [
    `${heading}: ${differences.length === 0 ? 'no difference' : `${differences.length} differ`}`,
    ...differences.map(difference => `  ${difference.name} · ours ${difference.ours} · theirs ${difference.theirs}`),
];
