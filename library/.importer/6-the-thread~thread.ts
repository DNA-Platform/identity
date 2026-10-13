import { rootParentId, type Conversation, type Message } from './3-the-record~record.ts';

export const shownPath = (conversation: Conversation): Message[] => {
    const messagesById = new Map(conversation.messages.map(message => [message.id, message]));
    const parentIds = new Set(conversation.messages.map(message => message.parentId));
    const leafMessages = conversation.messages.filter(message => !parentIds.has(message.id));
    leafMessages.sort((first, second) => first.sentAt.localeCompare(second.sentAt));
    const path: Message[] = [];
    for (let message = leafMessages.at(-1); message !== undefined; message = messagesById.get(message.parentId)) {
        path.push(message);
        if (message.parentId === rootParentId) break;
        if (path.length > conversation.messages.length)
            throw new Error(`the parents of "${conversation.name}" do not reach a root`);
    }

    return path.reverse();
};

export const asideCount = (conversation: Conversation, path: Message[]): number =>
    conversation.messages.length - path.length;

export const pathDays = (path: Message[]): string[] => [...new Set(path.map(message => message.sentAt.slice(0, 10)))];
