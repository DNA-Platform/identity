// THE SOURCE — the export, read without unpacking it.
// Documented by 2-the-source.tsx, which is this file's chapter.

import { closeSync, createReadStream, openSync, readSync } from 'node:fs';
import { createInflateRaw } from 'node:zlib';
import { Readable } from 'node:stream';
import { StringDecoder } from 'node:string_decoder';

// WHAT AN EXPORT HOLDS, named as the export names it. These are the intermediary shapes everything
// downstream reads, and they carry the two things the markdown never did: the TIME each thing was
// said, and the PARENT it was said after.
export type Message = {
    uuid: string;
    sender: 'human' | 'assistant';
    text: string;
    said: string;
    after: string;
};

export type Conversation = {
    uuid: string;
    name: string;
    opened: string;
    closed: string;
    messages: Message[];
};

// A ZIP OF ONE ENTRY IS A HEADER AND A DEFLATE STREAM, and reading it that way costs no dependency
// and no temporary file. The local header is thirty bytes plus the name and the extra field; after
// it, the bytes are raw deflate unless the method says they were stored.
const opened = (zip: string): Readable => {
    const file = openSync(zip, 'r');
    const head = Buffer.alloc(30);
    readSync(file, head, 0, 30, 0);
    closeSync(file);
    if (head.readUInt32LE(0) !== 0x04034b50) throw new Error(`${zip} does not open with a zip local header`);
    const method = head.readUInt16LE(8);
    const from = 30 + head.readUInt16LE(26) + head.readUInt16LE(28);
    const bytes = createReadStream(zip, { start: from });

    return method === 0 ? bytes : bytes.pipe(createInflateRaw());
};

// THE WHOLE FILE IS ONE JSON ARRAY AND IT IS 208 MEGABYTES, so it is never parsed whole. The scan
// counts braces outside strings, cuts each top-level object as it closes, and throws the read prefix
// away — so what is held at any moment is one conversation, not the export. A StringDecoder joins
// the chunks, because a chunk boundary can fall in the middle of a character.
export async function* conversations(zip: string): AsyncGenerator<Conversation> {
    const decoder = new StringDecoder('utf8');
    let held = '';
    let depth = 0;
    let from = -1;
    let quoted = false;
    let escaped = false;

    // THE SCAN RESUMES, IT DOES NOT RESTART. `at` lives outside the chunk loop, so every character is
    // looked at once across the whole 208 MB. Reading from zero on each chunk made this quadratic and
    // the read never finished — measured 2026-09-16, killed at ten minutes with nothing to show.
    let at = 0;
    for await (const chunk of opened(zip)) {
        held += decoder.write(chunk as Buffer);
        for (; at < held.length; at++) {
            const said = held[at];
            if (escaped) { escaped = false; continue; }
            if (quoted) {
                if (said === '\\') escaped = true;
                else if (said === '"') quoted = false;
                continue;
            }
            if (said === '"') { quoted = true; continue; }
            if (said === '{') { if (depth === 0) from = at; depth++; continue; }
            if (said !== '}') continue;
            depth--;
            if (depth > 0 || from < 0) continue;
            yield read(JSON.parse(held.slice(from, at + 1)));
            held = held.slice(at + 1);
            at = -1;
            from = -1;
        }
    }
}

// THE FIRST CONVERSATION WITH THIS NAME, and the read stops there rather than finishing the file.
export const find = async (zip: string, named: string): Promise<Conversation> => {
    for await (const held of conversations(zip)) if (held.name.trim() === named.trim()) return held;
    throw new Error(`no conversation named ${named} in ${zip}`);
};

// EVERY CONVERSATION IN THE EXPORT, by name and date, for choosing one.
export const listed = async (zip: string): Promise<{ name: string; opened: string; messages: number }[]> => {
    const held: { name: string; opened: string; messages: number }[] = [];
    for await (const one of conversations(zip)) held.push({ name: one.name.trim(), opened: one.opened, messages: one.messages.length });

    return held;
};

// THE EXPORT'S OWN FIELDS, renamed once, here, so nothing downstream reads `parent_message_uuid`.
const read = (said: any): Conversation => ({
    uuid: said.uuid,
    name: said.name ?? '',
    opened: said.created_at,
    closed: said.updated_at,
    messages: (said.chat_messages ?? []).map((message: any): Message => ({
        uuid: message.uuid,
        sender: message.sender,
        text: message.text ?? '',
        said: message.created_at,
        after: message.parent_message_uuid,
    })),
});
