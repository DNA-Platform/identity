import { closeSync, createReadStream, existsSync, openSync, readdirSync, readFileSync, readSync } from 'node:fs';
import { join } from 'node:path';
import type { Readable } from 'node:stream';
import { StringDecoder } from 'node:string_decoder';
import { createInflateRaw, inflateRawSync } from 'node:zlib';

export type ArchiveEntry = { name: string; method: number; size: number; localHeader: number };
export type Archive = { path: string; bytes: Buffer; entries: ArchiveEntry[] };
export type ExportFiles = {
    account: string;
    folder: string;
    manifest: string;
    archives: Record<string, string>;
    mapping: string | undefined;
};

type Manifest = { created_at: string; data_files: { category: string; part: number; filename: string }[] };

const isManifestName = (name: string): boolean => name.startsWith('data-') && name.endsWith('.json');
const isMappingName = (name: string): boolean => name.startsWith('project-mapping-') && name.endsWith('.json');

export const newestExportFiles = (account: string): ExportFiles => {
    const exportsFolder = join(account, '.exports');
    const manifestFiles: { name: string; folder: string }[] = [];
    for (const entry of readdirSync(exportsFolder, { withFileTypes: true })) {
        if (entry.isFile() && isManifestName(entry.name))
            manifestFiles.push({ name: entry.name, folder: exportsFolder });
        if (!entry.isDirectory()) continue;
        for (const name of readdirSync(join(exportsFolder, entry.name)))
            if (isManifestName(name))
                manifestFiles.push({ name, folder: join(exportsFolder, entry.name) });
    }
    manifestFiles.sort((first, second) => first.name.localeCompare(second.name));
    const newestManifest = manifestFiles.at(-1);
    if (newestManifest === undefined)
        throw new Error(`no export under ${exportsFolder}: a manifest named data-<date>.json, `
            + 'in a dated folder or beside this one');
    const manifest = JSON.parse(readFileSync(join(newestManifest.folder, newestManifest.name), 'utf8')) as Manifest;
    const archives: Record<string, string> = {};
    for (const dataFile of manifest.data_files) {
        const archivePath = join(newestManifest.folder, dataFile.filename);
        if (!existsSync(archivePath))
            throw new Error(`the manifest ${newestManifest.name} names ${dataFile.filename}, and it is not beside it; ` +
                'its link was single-use, so a fresh export is needed');
        archives[dataFile.category] = archivePath;
    }
    const newestMapping = readdirSync(exportsFolder).filter(isMappingName).sort().at(-1);

    return {
        account,
        folder: newestManifest.folder,
        manifest: join(newestManifest.folder, newestManifest.name),
        archives,
        mapping: newestMapping === undefined ? undefined : join(exportsFolder, newestMapping),
    };
};

export const archiveFromFile = (path: string): Archive => {
    const bytes = readFileSync(path);
    let position = bytes.length - 22;
    while (position >= 0 && bytes.readUInt32LE(position) !== 0x06054b50)
        position--;
    if (position < 0) throw new Error(`${path} has no central directory`);
    const entryCount = bytes.readUInt16LE(position + 10);
    let entryOffset = bytes.readUInt32LE(position + 16);
    const entries: ArchiveEntry[] = [];
    for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
        const nameLength = bytes.readUInt16LE(entryOffset + 28);
        const extraLength = bytes.readUInt16LE(entryOffset + 30);
        const commentLength = bytes.readUInt16LE(entryOffset + 32);
        entries.push({
            name: bytes.toString('utf8', entryOffset + 46, entryOffset + 46 + nameLength),
            method: bytes.readUInt16LE(entryOffset + 10),
            size: bytes.readUInt32LE(entryOffset + 20),
            localHeader: bytes.readUInt32LE(entryOffset + 42),
        });
        entryOffset += 46 + nameLength + extraLength + commentLength;
    }

    return { path, bytes, entries };
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

const entryStream = (path: string): Readable => {
    const fileDescriptor = openSync(path, 'r');
    const localHeader = Buffer.alloc(30);
    readSync(fileDescriptor, localHeader, 0, 30, 0);
    closeSync(fileDescriptor);
    if (localHeader.readUInt32LE(0) !== 0x04034b50) throw new Error(`${path} does not open with a zip local header`);
    const method = localHeader.readUInt16LE(8);
    const dataStart = 30 + localHeader.readUInt16LE(26) + localHeader.readUInt16LE(28);
    const fileStream = createReadStream(path, { start: dataStart });

    return method === 0 ? fileStream : fileStream.pipe(createInflateRaw());
};

export async function* streamedObjects(path: string): AsyncGenerator<unknown> {
    const decoder = new StringDecoder('utf8');
    let textBuffer = '';
    let braceDepth = 0;
    let objectStart = -1;
    let inString = false;
    let afterBackslash = false;
    let position = 0;
    for await (const chunk of entryStream(path)) {
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
