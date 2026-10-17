import { createHash } from 'node:crypto';
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

const keptEditForm = /^(.+)~(edited-.+)\.txt$/u;

export type ImportState = 'new' | 'in' | 'grown' | 'edited';
export type HeldRecord = { record: ImportRecord; path: string };

const originForm = /<Origin>([^<]+)<\/Origin>/u;
const coverTitleForm = /<Title>\[\[ (.*?) \]\](?:\( (.*?) \))?<\/Title>/u;
const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', '#123': '{', '#125': '}', '#91': '[', '#93': ']' };

const nameFromForm = (form: string): string =>
    form.replace(/&(amp|lt|gt|#123|#125|#91|#93);/gu, (_, entity: string) => entities[entity]).replace(/\.(.)/gu, '$1');

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
    writeFileSync(path, JSON.stringify(ledger, null, 2) + '\n', 'utf8');
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

export const keptEditsStruck = (registerFolder: string, record: ImportRecord): string[] =>
    (record.keptEdits ?? []).filter(fileName => !existsSync(join(registerFolder, record.bookFolder, fileName)));

const keptHeading = 'As I had it before the re-import';
const keptSectionForm = new RegExp(
    `^ {8}<Section>\\n {12}<Heading>${keptHeading}</Heading>\\n([\\s\\S]*?)^ {8}</Section>\\n`, 'mu',
);
const printedForm = new RegExp(
    '^ {12}<Paragraph>.*</Paragraph>\\n {12}<Code language="tsx">!\\[\\[ (edited-[^ ]+)\\.txt \\]\\]</Code>\\n', 'gmu',
);

export const chapterWithoutStruck = (chapterText: string, struckFileNames: string[]): string => {
    const identifiers = struckFileNames.map(fileName => keptEditForm.exec(fileName)?.[2]).filter(one => one !== undefined);
    const section = keptSectionForm.exec(chapterText);
    if (section === null || identifiers.length === 0) return chapterText;
    const remaining = section[1].replace(printedForm, (printed, identifier: string) =>
        identifiers.includes(identifier) ? '' : printed);
    const sectionText = remaining.trim() === '' ? '' : [
        '        <Section>',
        `            <Heading>${keptHeading}</Heading>`,
        remaining.replace(/\n$/u, ''),
        '        </Section>',
        '',
    ].join('\n');

    return chapterText.replace(keptSectionForm, () => sectionText);
};

export const tendStruckEdits = (registerFolder: string, heldRecord: HeldRecord): string[] => {
    const struck = keptEditsStruck(registerFolder, heldRecord.record);
    if (struck.length === 0) return [];
    const bookFolder = join(registerFolder, heldRecord.record.bookFolder);
    const touched: string[] = [];
    const chapterStems = new Set(struck.map(fileName => keptEditForm.exec(fileName)?.[1]).filter(one => one !== undefined));
    for (const chapterStem of chapterStems) {
        const chapterPath = join(bookFolder, `${chapterStem}.tsx`);
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
