import { readFileSync } from 'node:fs';
import {
    archiveFromFile, jsonEntries, newestExportFiles, streamedObjects, type Archive, type ExportFiles,
} from './2-the-export~export.ts';
import type {
    Attachment, Block, Conversation, Mapping, Memory, Message, Project, Source, Speaker, Traces,
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
            language: artifactInput.language ?? '',
            command: artifactInput.command ?? '',
            content: artifactInput.content ?? '',
            oldText: artifactInput.old_str ?? '',
            newText: artifactInput.new_str ?? '',
        };
    }
    if (rawBlock.type === 'tool_use') return { type: 'action', name: rawBlock.name ?? '', input: rawBlock.input };
    if (rawBlock.type === 'image' || rawBlock.type === 'document')
        return { type: 'upload', name: rawBlock.title ?? rawBlock.file_uuid ?? '' };
    if (rawBlock.type === 'injected_prompt_block') return { type: 'prompt', source: rawBlock.injection_source ?? '' };
    if (rawBlock.type === 'token_budget') return { type: 'budget' };

    return { type: 'other', name: rawBlock.type ?? '' };
};

const projectMemoryPath = /\/projects\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gu;
const conversationId = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gu;
const scopedSearchName = /conversation_search|recent_chats/u;

const tracesFromRaw = (rawConversation: RawRecord): Traces => {
    const rawBlocks = ((rawConversation.chat_messages ?? []) as RawRecord[])
        .flatMap(rawMessage => (rawMessage.content ?? []) as RawRecord[]);
    const resultsOf = (matchesName: (name: string) => boolean): RawRecord[] =>
        rawBlocks.filter(rawBlock => rawBlock.type === 'tool_result' && matchesName(rawBlock.name ?? ''));
    const knowledge = resultsOf(name => name === 'project_knowledge_search')
        .flatMap(rawBlock => (Array.isArray(rawBlock.content) ? rawBlock.content : []) as RawRecord[])
        .map(contentPart => String(contentPart?.text ?? ''));
    const memoryText = JSON.stringify(rawConversation.chat_messages ?? []);
    const memoryProjects = [...memoryText.matchAll(projectMemoryPath)].map(match => match[1]);
    const found = new Set(resultsOf(name => scopedSearchName.test(name))
        .flatMap(rawBlock => JSON.stringify(rawBlock.content ?? '').match(conversationId) ?? []));
    found.delete(rawConversation.uuid);

    return { knowledge, memoryProjects, found: [...found] };
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
    traces: tracesFromRaw(rawConversation),
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

export const claudeExportSource = (exportFiles: ExportFiles): Source => {
    const archives = new Map<string, Archive>();
    const archiveOf = (category: string): Archive => {
        const path = exportFiles.archives[category];
        if (path === undefined) throw new Error(`the export of ${exportFiles.exportedOn} has no ${category} archive`);
        const archive = archives.get(path) ?? archiveFromFile(path);
        archives.set(path, archive);

        return archive;
    };

    return {
        name: `${exportFiles.exportedOn} of ${exportFiles.account}`,
        exportedOn: exportFiles.exportedOn,
        packaging: exportFiles.packaging,
        folder: exportFiles.folder,
        user: () => {
            const rawUsers = jsonEntries(archiveOf('light_metadata'), name => name === 'users.json').flat();

            return String((rawUsers as RawRecord[])[0]?.email_address ?? '');
        },
        projects: () => {
            const rawProjects = jsonEntries(archiveOf('projects'), name => name.startsWith('projects/'));

            return (rawProjects as RawRecord[]).map(projectFromRaw);
        },
        memories: () => {
            const rawMemories = jsonEntries(archiveOf('memories'), name => name.startsWith('memories/'));

            return (rawMemories as RawRecord[]).flatMap(memoriesFromRaw);
        },
        mapping: () => {
            if (exportFiles.mapping === undefined) return undefined;

            return mappingFromRaw(JSON.parse(readFileSync(exportFiles.mapping, 'utf8')));
        },
        conversations: async function* () {
            archives.clear();
            for await (const rawConversation of streamedObjects(exportFiles.archives.conversations, 'conversations.json'))
                yield conversationFromRaw(rawConversation as RawRecord);
        },
    };
};

export const exportSource = (account: string): Source => claudeExportSource(newestExportFiles(account));
