export type Speaker = 'Doug' | 'Claude';

export type Block =
    | { type: 'text'; text: string }
    | { type: 'thinking'; text: string }
    | { type: 'action'; name: string; input: unknown }
    | { type: 'results'; text: string }
    | {
        type: 'artifact';
        id: string;
        title: string;
        contentType: string;
        command: string;
        content: string;
        oldText: string;
        newText: string;
    }
    | { type: 'other'; name: string };

export type Attachment = { name: string; extension: string; size: number; text: string };

export type Message = {
    id: string;
    parentId: string;
    speaker: Speaker;
    sentAt: string;
    blocks: Block[];
    attachments: Attachment[];
    uploads: string[];
};

export type Conversation = {
    id: string;
    name: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
    messages: Message[];
};

export type Document = { id: string; name: string; content: string };

export type Project = {
    id: string;
    name: string;
    description: string;
    instructions: string;
    createdAt: string;
    updatedAt: string;
    documents: Document[];
};

export type Memory = { path: string; content: string; updatedAt: string };

export type MappedConversation = { title: string; lastMessage: string; position: number };

export type MappedProject = { name: string; id: string; conversations: MappedConversation[]; files: { name: string }[] };

export type Mapping = { capturedAt: string; projects: MappedProject[] };

export type Source = {
    name: string;
    exportedOn: string;
    projects(): Project[];
    memories(): Memory[];
    mapping(): Mapping | undefined;
    conversations(): AsyncGenerator<Conversation>;
};

export const rootParentId = '00000000-0000-4000-8000-000000000000';
