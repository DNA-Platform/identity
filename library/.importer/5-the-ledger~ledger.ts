import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation } from './3-the-record~record.ts';

export type LedgerLine = {
    conversationId: string;
    name: string;
    folder: string;
    updatedAt: string;
    messageCount: number;
    digest: string;
    importedAt: string;
};

export type LedgerState = 'new' | 'in' | 'grown' | 'edited';

export const ledgerFilePath = (library: string): string => join(library, '.importer', '5-the-ledger~ledger.json');

export const writeLedger = (library: string, ledgerLines: LedgerLine[]): void => {
    const sortedLines = [...ledgerLines].sort((first, second) => first.folder.localeCompare(second.folder));
    writeFileSync(ledgerFilePath(library), JSON.stringify(sortedLines, null, 2) + '\n', 'utf8');
};

export const readLedger = (library: string): LedgerLine[] => {
    if (!existsSync(ledgerFilePath(library)))
        writeLedger(library, []);

    return JSON.parse(readFileSync(ledgerFilePath(library), 'utf8')) as LedgerLine[];
};

export const folderDigest = (folder: string): string => {
    if (!existsSync(folder)) return '';
    const hash = createHash('sha256');
    for (const fileName of readdirSync(folder).sort())
        hash.update(fileName).update(readFileSync(join(folder, fileName)));

    return hash.digest('hex').slice(0, 16);
};

export const ledgerState = (conversation: Conversation, ledgerLine: LedgerLine | undefined): LedgerState => {
    if (ledgerLine === undefined) return 'new';
    if (folderDigest(ledgerLine.folder) !== ledgerLine.digest) return 'edited';
    const hasGrown = conversation.updatedAt > ledgerLine.updatedAt || conversation.messages.length > ledgerLine.messageCount;
    if (hasGrown) return 'grown';

    return 'in';
};

export const ledgerLinesWithConversation = (
    ledgerLines: LedgerLine[],
    conversation: Conversation,
    name: string,
    folder: string,
): LedgerLine[] => {
    const ledgerLine: LedgerLine = {
        conversationId: conversation.id,
        name,
        folder,
        updatedAt: conversation.updatedAt,
        messageCount: conversation.messages.length,
        digest: folderDigest(folder),
        importedAt: new Date().toISOString(),
    };

    return [...ledgerLines.filter(otherLine => otherLine.conversationId !== conversation.id), ledgerLine];
};
