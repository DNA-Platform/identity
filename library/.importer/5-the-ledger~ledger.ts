import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation } from './3-the-record~record.ts';

export type ImportRecord = {
    conversationId: string;
    name: string;
    bookFolder: string;
    exportedOn: string;
    updatedAt: string;
    messageCount: number;
    digest: string;
    importedAt: string;
};

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

export const importState = (
    conversation: Conversation,
    registerFolder: string,
    record: ImportRecord | undefined,
): ImportState => {
    if (record === undefined) return 'new';
    if (folderDigest(join(registerFolder, record.bookFolder)) !== record.digest) return 'edited';
    const hasGrown = conversation.updatedAt > record.updatedAt || conversation.messages.length > record.messageCount;
    if (hasGrown) return 'grown';

    return 'in';
};

export const importRecord = (
    conversation: Conversation,
    registerFolder: string,
    name: string,
    bookFolder: string,
    exportedOn: string,
): ImportRecord => ({
    conversationId: conversation.id,
    name,
    bookFolder,
    exportedOn,
    updatedAt: conversation.updatedAt,
    messageCount: conversation.messages.length,
    digest: folderDigest(join(registerFolder, bookFolder)),
    importedAt: new Date().toISOString(),
});
