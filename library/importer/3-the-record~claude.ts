import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import {
    archiveFromFile, jsonEntries, newestExportFiles, streamedObjects, type ExportFiles,
} from './2-the-export~export.ts';
import type {
    Attachment, Block, Conversation, Mapping, Memory, Message, Project, Source, Speaker,
} from './3-the-record~record.ts';

type RawRecord = Record<string, any>;

const speakerFromSender = (sender: string): Speaker => (sender === 'human' ? 'Doug' : 'Claude');

const resultsText = (content: unknown): string => {
    const contentParts = Array.isArray(content) ? content : [content];

    return contentParts.map(contentPart => {
        if (typeof contentPart === 'string') return contentPart;
        if (typeof contentPart?.text === 'string') return contentPart.text;
        if (contentPart?.title !== undefined) return `${contentPart.title} — ${contentPart.url ?? ''}`;

        return JSON.stringify(contentPart ?? '');
    }).join('\n');
};

const blockFromRaw = (rawBlock: RawRecord): Block => {
    if (rawBlock.type === 'text') return { type: 'text', text: rawBlock.text ?? '' };
    if (rawBlock.type === 'thinking') return { type: 'thinking', text: rawBlock.thinking ?? '' };
    if (rawBlock.type === 'tool_result') return { type: 'results', text: resultsText(rawBlock.content) };
    if (rawBlock.type === 'tool_use' && rawBlock.name === 'artifacts') {
        const artifactInput = rawBlock.input ?? {};

        return {
            type: 'artifact',
            id: artifactInput.id ?? '',
            title: artifactInput.title ?? '',
            contentType: artifactInput.type ?? '',
            command: artifactInput.command ?? '',
            content: artifactInput.content ?? '',
            oldText: artifactInput.old_str ?? '',
            newText: artifactInput.new_str ?? '',
        };
    }
    if (rawBlock.type === 'tool_use') return { type: 'action', name: rawBlock.name ?? '', input: rawBlock.input };

    return { type: 'other', name: rawBlock.type ?? '' };
};

const attachmentFromRaw = (rawAttachment: RawRecord): Attachment => ({
    name: rawAttachment.file_name ?? '',
    extension: rawAttachment.file_type ?? '',
    size: Number(rawAttachment.file_size ?? 0),
    text: rawAttachment.extracted_content ?? '',
});

const messageFromRaw = (rawMessage: RawRecord): Message => ({
    id: rawMessage.uuid,
    parentId: rawMessage.parent_message_uuid,
    speaker: speakerFromSender(rawMessage.sender),
    sentAt: rawMessage.created_at,
    blocks: (rawMessage.content ?? []).map(blockFromRaw),
    attachments: (rawMessage.attachments ?? []).map(attachmentFromRaw),
    uploads: (rawMessage.files ?? []).map((rawFile: RawRecord) => rawFile.file_name ?? ''),
});

const conversationFromRaw = (rawConversation: RawRecord): Conversation => ({
    id: rawConversation.uuid,
    name: (rawConversation.name ?? '').trim(),
    summary: (rawConversation.summary ?? '').trim(),
    createdAt: rawConversation.created_at,
    updatedAt: rawConversation.updated_at,
    messages: (rawConversation.chat_messages ?? []).map(messageFromRaw),
});

const projectFromRaw = (rawProject: RawRecord): Project => ({
    id: rawProject.uuid,
    name: (rawProject.name ?? '').trim(),
    description: (rawProject.description ?? '').trim(),
    instructions: (rawProject.prompt_template ?? '').trim(),
    createdAt: rawProject.created_at,
    updatedAt: rawProject.updated_at,
    documents: (rawProject.docs ?? []).map((rawDocument: RawRecord) => ({
        id: rawDocument.uuid ?? '',
        name: rawDocument.filename ?? '',
        content: rawDocument.content ?? '',
    })),
});

const memoriesFromRaw = (rawMemory: RawRecord): Memory[] =>
    ((rawMemory.memory_files ?? []) as RawRecord[]).map(rawFile => ({
        path: rawFile.path ?? '',
        content: rawFile.content ?? '',
        updatedAt: rawFile.updated_at ?? '',
    }));

const mappingFromRaw = (rawMapping: RawRecord): Mapping => ({
    capturedAt: rawMapping.captured ?? '',
    projects: ((rawMapping.projects ?? []) as RawRecord[]).map(rawProject => ({
        name: rawProject.name ?? '',
        id: rawProject.id ?? '',
        conversations: ((rawProject.conversations ?? []) as RawRecord[]).map(rawRow => ({
            title: rawRow.title ?? '',
            lastMessage: rawRow.lastMessage ?? '',
            position: Number(rawRow.position ?? 0),
        })),
        files: ((rawProject.files ?? []) as RawRecord[]).map(rawFile => ({ name: rawFile.name ?? '' })),
    })),
});

export const claudeExportSource = (exportFiles: ExportFiles): Source => ({
    name: `${basename(exportFiles.folder)} of ${exportFiles.account}`,
    exportedOn: basename(exportFiles.folder),
    projects: () => {
        const projectsArchive = archiveFromFile(exportFiles.archives.projects);
        const rawProjects = jsonEntries(projectsArchive, name => name.startsWith('projects/'));

        return (rawProjects as RawRecord[]).map(projectFromRaw);
    },
    memories: () => {
        const memoriesArchive = archiveFromFile(exportFiles.archives.memories);
        const rawMemories = jsonEntries(memoriesArchive, name => name.startsWith('memories/'));

        return (rawMemories as RawRecord[]).flatMap(memoriesFromRaw);
    },
    mapping: () => {
        if (exportFiles.mapping === undefined) return undefined;

        return mappingFromRaw(JSON.parse(readFileSync(exportFiles.mapping, 'utf8')));
    },
    conversations: async function* () {
        for await (const rawConversation of streamedObjects(exportFiles.archives.conversations))
            yield conversationFromRaw(rawConversation as RawRecord);
    },
});

export const exportSource = (account: string): Source => claudeExportSource(newestExportFiles(account));
