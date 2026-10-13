import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import {
    folderDigest, importRecord, importRecords, importState, recordSuffix, writeImportRecord,
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
        const recordPath = join(registerFolder, `1-a-conversation${recordSuffix}`);
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

    it('keeps one record per conversation, the later written replacing the earlier at the same path', () => {
        const conversation = sampleConversation('r', 'Replaced', twoMessages);
        const slug = bookFolder('replaced');
        const recordPath = join(registerFolder, `3-replaced${recordSuffix}`);
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Replaced', slug, '2026-09-11'));
        writeImportRecord(recordPath, importRecord(conversation, registerFolder, 'Replaced', slug, '2026-10-01'));
        const heldRecords = importRecords(registerFolder);
        expect([...heldRecords.keys()].filter(conversationId => conversationId === 'r')).toHaveLength(1);
        expect(heldRecords.get('r')?.record.exportedOn).toBe('2026-10-01');
    });
});
