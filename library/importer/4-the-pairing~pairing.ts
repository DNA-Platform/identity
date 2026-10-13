import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';

export type Pairing = {
    conversationId: string;
    title: string;
    projectName: string | undefined;
    evidence: string;
    excluded: boolean;
    reason: string;
    byHand: boolean;
};

type DocumentEvidence = { documentName: string; holdingProjectNames: string[] };
type MappingEvidence = { projectName: string; how: string };
type ProjectDecision = { projectName: string | undefined; evidence: string };

const cyrillicLetters = /[Ѐ-ӿ]/u;
const threeDaysInMilliseconds = 3 * 86400e3;
const millisecondsPerUnit: Record<string, number> = {
    minute: 60e3,
    hour: 3600e3,
    day: 86400e3,
    week: 7 * 86400e3,
    month: 30 * 86400e3,
};

export const pairingsFilePath = (library: string): string => join(library, 'importer', '4-the-pairing~pairings.json');

export const readPairings = (library: string): Pairing[] =>
    existsSync(pairingsFilePath(library)) ? JSON.parse(readFileSync(pairingsFilePath(library), 'utf8')) as Pairing[] : [];

export const writePairings = (library: string, pairings: Pairing[]): void => {
    writeFileSync(pairingsFilePath(library), JSON.stringify(pairings, null, 2) + '\n', 'utf8');
};

export const conversationPairings = (
    library: string,
    conversations: Conversation[],
    projects: Project[],
    mapping: Mapping | undefined,
): Pairing[] => {
    const previousPairings = new Map(readPairings(library).map(pairing => [pairing.conversationId, pairing]));
    const conversationsByTitle = new Map<string, Conversation[]>();
    for (const conversation of conversations)
        conversationsByTitle.set(conversation.name, [...(conversationsByTitle.get(conversation.name) ?? []), conversation]);
    const pairings: Pairing[] = [];
    for (const conversation of conversations) {
        const previousPairing = previousPairings.get(conversation.id);
        if (previousPairing?.byHand) {
            pairings.push(previousPairing);
            continue;
        }
        const sameTitleConversations = conversationsByTitle.get(conversation.name) ?? [];
        const { projectName, evidence } = projectDecision(conversation, sameTitleConversations, projects, mapping);
        const isUnderAna = projectName !== undefined && /^ana/iu.test(projectName);
        const isCyrillicTitle = cyrillicLetters.test(conversation.name);
        const reason = isUnderAna ? `filed under ${projectName}` : isCyrillicTitle ? 'a title in Cyrillic' : '';
        pairings.push({
            conversationId: conversation.id,
            title: conversation.name,
            projectName,
            evidence,
            excluded: reason !== '',
            reason,
            byHand: false,
        });
    }
    writePairings(library, pairings);

    return pairings;
};

const projectDecision = (
    conversation: Conversation,
    sameTitleConversations: Conversation[],
    projects: Project[],
    mapping: Mapping | undefined,
): ProjectDecision => {
    const documentEvidence = evidenceFromDocuments(conversation, projects);
    const mappingEvidence = evidenceFromMapping(conversation, sameTitleConversations, mapping);
    const holdingProjectNames = documentEvidence?.holdingProjectNames ?? [];
    const searchAnswer = documentEvidence === undefined
        ? '' : `a knowledge search answered with "${documentEvidence.documentName}"`;
    const heldBy = `held by ${holdingProjectNames.join(' and ')}`;
    const agreesWithMapping = mappingEvidence !== undefined
        && (holdingProjectNames.length === 0 || holdingProjectNames.includes(mappingEvidence.projectName));
    if (mappingEvidence !== undefined && agreesWithMapping)
        return {
            projectName: mappingEvidence.projectName,
            evidence: documentEvidence === undefined ? mappingEvidence.how : `${searchAnswer}, and ${mappingEvidence.how}`,
        };
    if (mappingEvidence !== undefined)
        return {
            projectName: undefined,
            evidence: `ambiguous: ${searchAnswer}, ${heldBy}, and the mapping says ${mappingEvidence.projectName}`,
        };
    if (holdingProjectNames.length === 1) return { projectName: holdingProjectNames[0], evidence: searchAnswer };
    if (holdingProjectNames.length > 1) return { projectName: undefined, evidence: `ambiguous: ${searchAnswer}, ${heldBy}` };
    if (isTitleMapped(conversation, mapping))
        return { projectName: undefined, evidence: 'ambiguous: the mapping names this title more than once' };

    return { projectName: undefined, evidence: 'none' };
};

const evidenceFromDocuments = (conversation: Conversation, projects: Project[]): DocumentEvidence | undefined => {
    let knowledgeSearched = false;
    for (const message of conversation.messages) {
        for (const block of message.blocks) {
            if (block.type === 'action' && block.name === 'project_knowledge_search')
                knowledgeSearched = true;
            if (block.type !== 'results' || !knowledgeSearched) continue;
            const namedDocument = projects
                .flatMap(project => project.documents)
                .find(document => document.name !== '' && block.text.includes(document.name));
            if (namedDocument === undefined) continue;
            const holdingProjects = projects
                .filter(project => project.documents.some(document => document.name === namedDocument.name));

            return { documentName: namedDocument.name, holdingProjectNames: holdingProjects.map(project => project.name) };
        }
    }

    return undefined;
};

const evidenceFromMapping = (
    conversation: Conversation,
    sameTitleConversations: Conversation[],
    mapping: Mapping | undefined,
): MappingEvidence | undefined => {
    if (mapping === undefined) return undefined;
    const capturedAt = new Date(mapping.capturedAt);
    for (const mappedProject of mapping.projects) {
        const mappedRows = mappedProject.conversations.filter(mappedRow => mappedRow.title.trim() === conversation.name);
        if (mappedRows.length === 0) continue;
        if (sameTitleConversations.length === 1 && mappedRows.length === 1)
            return { projectName: mappedProject.name, how: 'the mapping, by title' };
        for (const mappedRow of mappedRows) {
            const messageDate = lastMessageDate(mappedRow.lastMessage, capturedAt);
            if (messageDate === undefined) continue;
            const millisecondsFromMessage = (candidate: Conversation): number =>
                Math.abs(new Date(candidate.updatedAt).getTime() - messageDate.getTime());
            const nearestConversation = [...sameTitleConversations]
                .sort((first, second) => millisecondsFromMessage(first) - millisecondsFromMessage(second))[0];
            const isNearest = nearestConversation?.id === conversation.id;
            if (isNearest && millisecondsFromMessage(conversation) < threeDaysInMilliseconds)
                return {
                    projectName: mappedProject.name,
                    how: `the mapping, by title and its last message ${mappedRow.lastMessage}`,
                };
        }
    }

    return undefined;
};

const lastMessageDate = (lastMessage: string, capturedAt: Date): Date | undefined => {
    const agoMatch = /^(\d+)\s+(minute|hour|day|week|month)s?\s+ago$/u.exec(lastMessage);
    if (agoMatch !== null)
        return new Date(capturedAt.getTime() - Number(agoMatch[1]) * (millisecondsPerUnit[agoMatch[2]] ?? 0));
    const parsedDate = new Date(`${lastMessage} ${capturedAt.getUTCFullYear()}`);
    if (Number.isNaN(parsedDate.getTime())) return undefined;
    if (parsedDate > capturedAt)
        parsedDate.setUTCFullYear(capturedAt.getUTCFullYear() - 1);

    return parsedDate;
};

const isTitleMapped = (conversation: Conversation, mapping: Mapping | undefined): boolean =>
    mapping?.projects
        .some(mappedProject => mappedProject.conversations.some(mappedRow => mappedRow.title.trim() === conversation.name))
        ?? false;
