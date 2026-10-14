import { createHash } from 'node:crypto';
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

const keptEditForm = /^(.+)~(edited-.+)\.txt$/u;

export type ImportState = 'new' | 'in' | 'grown' | 'edited';
export type HeldRecord = { record: ImportRecord; path: string };

export const recordIdentifier = 'import';
export const recordSuffix = `~${recordIdentifier}.json`;

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
    writeFileSync(path, JSON.stringify(record, null, 2) + '\n', 'utf8');
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
    `edited-${fileName.replace(/^\./u, '').replace(/[.~]/gu, '-')}`;

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
        const keptFileName = `${chapterStem}~${identifier}.txt`;
        writeFileSync(join(folder, keptFileName), content, 'utf8');
        if (!rewritten) rmSync(path);
        kept.push({ fileName: keptFileName, appendix: { identifier, type: '.txt' } });
    }

    return kept;
};

export const keptEditsStanding = (registerFolder: string, record: ImportRecord): string[] =>
    (record.keptEdits ?? []).filter(fileName => existsSync(join(registerFolder, record.bookFolder, fileName)));
