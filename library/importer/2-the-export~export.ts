import { closeSync, createReadStream, existsSync, fstatSync, openSync, readdirSync, readFileSync, readSync } from 'node:fs';
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

const exportStamp = /(\d{4}-\d{2}-\d{2})[T-](\d{2}-\d{2}-\d{2})\.(zip|json)$/u;
const singleArchiveCategories = ['light_metadata', 'projects', 'memories', 'conversations'];
const endRecordSignature = 0x06054b50;
const localHeaderSignature = 0x04034b50;
const longestEndRecord = 65_557;

const isExportName = (name: string): boolean =>
    (name.startsWith('data-') || name.startsWith('manifest-')) && exportStamp.test(name);

const stampOf = (name: string): string => {
    const [, date, time] = exportStamp.exec(name)!;

    return `${date}T${time}`;
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
            throw new Error(`the manifest ${basename(manifestPath)} names ${dataFile.filename}, and it is not beside it; `
                + 'its link was single-use, so a fresh export is needed');
        if (archives[dataFile.category] !== undefined)
            throw new Error(`the manifest ${basename(manifestPath)} splits ${dataFile.category} into parts, `
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
        throw new Error(`no export under ${exportsFolder}: a data- or manifest- file named for its time, `
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
    if (endRecord < 0) throw new Error(`${path} has no central directory`);
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
        if (endRecord < 0) throw new Error(`${path} has no central directory`);
        const directory = bytesAt(fileDescriptor, tail.readUInt32LE(endRecord + 16), tail.readUInt32LE(endRecord + 12));
        const entry = entriesFrom(directory, tail.readUInt16LE(endRecord + 10)).find(one => one.name === entryName);
        if (entry === undefined) throw new Error(`${path} holds no ${entryName}`);
        const localHeader = bytesAt(fileDescriptor, entry.localHeader, 30);
        if (localHeader.readUInt32LE(0) !== localHeaderSignature)
            throw new Error(`${entryName} in ${path} does not open with a zip local header`);
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
                if (character === '\\')
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
