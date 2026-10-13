import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import { folderDigest, ledgerLinesWithConversation, ledgerState, readLedger, writeLedger } from './5-the-ledger~ledger.ts';

const library = mkdtempSync(join(tmpdir(), 'ledger-'));
mkdirSync(join(library, '.importer'));
afterAll(() => rmSync(library, { recursive: true, force: true }));

const bookFolder = (name: string): string => {
    const folder = join(library, name);
    mkdirSync(folder);
    writeFileSync(join(folder, '1-june-15-2026.tsx'), 'the chapter as written');

    return folder;
};
const twoMessages = [sampleTextMessage('m1', 'Doug', 'hello'), sampleTextMessage('m2', 'Claude', 'hi')];

describe('the ledger', () => {
    it('reads an empty ledger as no lines, writing the file, and reads back what it wrote sorted by folder', () => {
        expect(readLedger(library)).toEqual([]);
        const first = sampleConversation('c', 'A Conversation', twoMessages);
        const second = sampleConversation('d', 'Another', twoMessages);
        const lines = ledgerLinesWithConversation([], first, 'A Conversation', bookFolder('b-folder'));
        writeLedger(library, ledgerLinesWithConversation(lines, second, 'Another', bookFolder('a-folder')));
        expect(readLedger(library).map(line => line.conversationId)).toEqual(['d', 'c']);
    });

    it('says new with no line, in when the line matches, grown when the export has more, edited when a file changed', () => {
        const folder = bookFolder('states');
        const conversation = sampleConversation('s', 'States', twoMessages);
        expect(ledgerState(conversation, undefined)).toBe('new');
        const [line] = ledgerLinesWithConversation([], conversation, 'States', folder);
        expect(line.digest).toBe(folderDigest(folder));
        expect(ledgerState(conversation, line)).toBe('in');
        expect(ledgerState({ ...conversation, updatedAt: '2026-06-16T10:00:00Z' }, line)).toBe('grown');
        const thirdMessage = sampleTextMessage('m3', 'Doug', 'more');
        expect(ledgerState({ ...conversation, messages: [...twoMessages, thirdMessage] }, line)).toBe('grown');
        writeFileSync(join(folder, '1-june-15-2026.tsx'), 'the chapter edited by hand');
        expect(ledgerState(conversation, line)).toBe('edited');
    });

    it('replaces the line of a conversation imported again rather than adding a second', () => {
        const conversation = sampleConversation('r', 'Replaced', twoMessages);
        const folder = bookFolder('replaced');
        const once = ledgerLinesWithConversation([], conversation, 'Replaced', folder);
        const twice = ledgerLinesWithConversation(once, conversation, 'Replaced', folder);
        expect(twice).toHaveLength(1);
        expect(twice[0].name).toBe('Replaced');
    });
});
