import {
    rootParentId, type Block, type Conversation, type Mapping, type Message, type Project, type Speaker,
} from './3-the-record~record.ts';

export const sampleInstant = '2026-06-15T10:00:00Z';

export const sampleMessage = (
    id: string,
    speaker: Speaker,
    blocks: Block[],
    parentId = rootParentId,
    sentAt = sampleInstant,
): Message => ({ id, parentId, speaker, sentAt, blocks, attachments: [], uploads: [] });

export const sampleTextMessage = (
    id: string,
    speaker: Speaker,
    text: string,
    parentId = rootParentId,
    sentAt = sampleInstant,
): Message => sampleMessage(id, speaker, [{ type: 'text', text }], parentId, sentAt);

export const sampleConversation = (
    id: string,
    name: string,
    messages: Message[] = [],
    updatedAt = sampleInstant,
): Conversation => ({
    id,
    name,
    summary: '',
    createdAt: sampleInstant,
    updatedAt,
    messages,
});

export const sampleProject = (name: string, documentNames: string[]): Project => ({
    id: name,
    name,
    description: '',
    instructions: '',
    createdAt: sampleInstant,
    updatedAt: sampleInstant,
    documents: documentNames.map(documentName => ({ id: documentName, name: documentName, content: '' })),
});

export const sampleMapping = (projectName: string, rows: { title: string; lastMessage: string }[]): Mapping => ({
    capturedAt: '2026-09-12T02:50:57Z',
    projects: [{
        name: projectName,
        id: projectName,
        conversations: rows.map((row, position) => ({ ...row, position })),
        files: [],
    }],
});

export const sampleKnowledgeSearch = (documentName: string): Block[] => [
    { type: 'action', name: 'project_knowledge_search', input: { query: documentName } },
    { type: 'results', text: `Found in ${documentName}: a passage` },
];
