import { mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
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
    `<Title>[[ ${words} ]]( claude--${words} )</Title>\n<Origin>${origin}</Origin>\n`,
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
            `            <Paragraph>${identifier.replace(/^edited-|-tsx$/gu, '')}, as I had it:</Paragraph>\n`
            + `            <Code language="tsx">![[ ${identifier}.txt ]]</Code>\n`;
        const section = (...identifiers: string[]): string =>
            '        <Section>\n            <Heading>As I had it before the re-import</Heading>\n'
            + `${identifiers.map(printed).join('')}        </Section>\n`;
        const chapter = (body: string): string =>
            `    <Chapter>\n        <Title>[[ 15 June 2026 ]]</Title>\n${body}    </Chapter>\n`;
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
