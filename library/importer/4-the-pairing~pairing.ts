import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Conversation, Mapping, Project } from './3-the-record~record.ts';

export type Pairing = {
    conversationId: string;
    title: string;
    account: string;
    projectName: string | undefined;
    evidence: string;
    excluded: boolean;
    reason: string;
    byHand: boolean;
};

export type Exclusions = { scripts: string[]; projects: string[] };

type EvidenceKind = 'capture' | 'knowledge' | 'memory' | 'search';
type Assignment = { projectId: string; kind: EvidenceKind; through?: string };
type CaptureReading = {
    placed: Map<string, string>;
    outside: Set<string>;
    names: Map<string, string>;
    shared: Map<string, string[]>;
};

const noExclusions: Exclusions = { scripts: [], projects: [] };
const shortestChunk = 120;
const probeLength = 80;
const emptyCapture: CaptureReading = { placed: new Map(), outside: new Set(), names: new Map(), shared: new Map() };

export const pairingsFilePath = (library: string): string => join(library, 'importer', '4-the-pairing~pairings.json');

export const readPairings = (library: string): Pairing[] =>
    existsSync(pairingsFilePath(library)) ? JSON.parse(readFileSync(pairingsFilePath(library), 'utf8')) as Pairing[] : [];

export const writePairings = (library: string, pairings: Pairing[]): void => {
    writeFileSync(pairingsFilePath(library), JSON.stringify(pairings, null, 2) + '\n', 'utf8');
};

export const exclusionReason = (
    conversation: Conversation,
    projectName: string | undefined,
    exclusions: Exclusions,
): string => {
    if (projectName !== undefined && exclusions.projects.includes(projectName)) return `filed under ${projectName}`;
    const script = exclusions.scripts.find(candidate => new RegExp(`\\p{Script=${candidate}}`, 'u').test(conversation.name));

    return script === undefined ? '' : `a title in ${script}`;
};

const comparableTitle = (title: string): string =>
    title.replace(/["“”‘’'`]/gu, '').replace(/\s+/gu, ' ').trim().toLowerCase();

const titleOf = (conversation: Conversation): string => comparableTitle(conversation.name || 'Untitled');

export const captureReading = (mapping: Mapping | undefined, conversations: Conversation[]): CaptureReading => {
    if (mapping === undefined) return emptyCapture;
    const conversationsByTitle = new Map<string, string[]>();
    for (const conversation of conversations) {
        const title = titleOf(conversation);
        conversationsByTitle.set(title, [...(conversationsByTitle.get(title) ?? []), conversation.id]);
    }
    const capturedIn = new Map<string, string[]>();
    const names = new Map<string, string>();
    for (const mappedProject of mapping.projects) {
        names.set(mappedProject.id, mappedProject.name);
        for (const mappedRow of mappedProject.conversations) {
            const title = comparableTitle(mappedRow.title);
            capturedIn.set(title, [...(capturedIn.get(title) ?? []), mappedProject.id]);
        }
    }
    const placed = new Map<string, string>();
    const shared = new Map<string, string[]>();
    for (const [title, projectIds] of capturedIn) {
        const matchingIds = conversationsByTitle.get(title) ?? [];
        const distinctProjectIds = [...new Set(projectIds)];
        if (matchingIds.length > 0 && distinctProjectIds.length === 1 && matchingIds.length <= projectIds.length)
            for (const matchingId of matchingIds) placed.set(matchingId, distinctProjectIds[0]);
        else if (matchingIds.length > 0)
            shared.set(title, distinctProjectIds.map(projectId => names.get(projectId) ?? projectId));
    }
    const outside = new Set(conversations
        .filter(conversation => conversation.createdAt < mapping.capturedAt && !placed.has(conversation.id))
        .filter(conversation => !capturedIn.has(titleOf(conversation)))
        .map(conversation => conversation.id));

    return { placed, outside, names, shared };
};

const knowledgeProject = (conversation: Conversation, projects: Project[]): string | undefined => {
    const owners = new Set<string>();
    for (const chunk of conversation.traces.knowledge) {
        const body = chunk.slice(chunk.indexOf('\n') + 1);
        if (body.length < shortestChunk) continue;
        const middle = Math.floor(body.length / 2);
        const probe = body.slice(middle - probeLength / 2, middle + probeLength / 2);
        const holders = projects.filter(project => project.documents.some(document => document.content.includes(probe)));
        if (holders.length === 1) owners.add(holders[0].id);
    }

    return owners.size === 1 ? [...owners][0] : undefined;
};

const memoryProject = (conversation: Conversation, projectIds: Set<string>): string | undefined => {
    const mentions = new Map<string, number>();
    for (const projectId of conversation.traces.memoryProjects)
        if (projectIds.has(projectId)) mentions.set(projectId, (mentions.get(projectId) ?? 0) + 1);
    const ranked = [...mentions].sort((first, second) => second[1] - first[1]);
    if (ranked.length === 1) return ranked[0][0];
    if (ranked.length > 1 && ranked[0][1] >= 2 && ranked[0][1] > ranked[1][1]) return ranked[0][0];

    return undefined;
};

const searchLinks = (conversations: Conversation[]): Map<string, Set<string>> => {
    const known = new Set(conversations.map(conversation => conversation.id));
    const links = new Map<string, Set<string>>();
    const link = (from: string, to: string): void => {
        links.set(from, (links.get(from) ?? new Set()).add(to));
    };
    for (const conversation of conversations)
        for (const foundId of conversation.traces.found)
            if (known.has(foundId) && foundId !== conversation.id) {
                link(conversation.id, foundId);
                link(foundId, conversation.id);
            }

    return links;
};

type Veto = { claim: Assignment; reason: string };
type Decided = { assignments: Map<string, Assignment>; vetoes: Map<string, Veto> };

export const decidedProjects = (conversations: Conversation[], projects: Project[], capture: CaptureReading): Decided => {
    const projectIds = new Set(projects.map(project => project.id));
    const links = searchLinks(conversations);
    const assignments = new Map<string, Assignment>();
    const vetoes = new Map<string, Veto>();
    const direct = new Map<string, Assignment>();
    for (const conversation of conversations) {
        const knowledge = knowledgeProject(conversation, projects);
        const memory = knowledge === undefined ? memoryProject(conversation, projectIds) : undefined;
        if (knowledge !== undefined) direct.set(conversation.id, { projectId: knowledge, kind: 'knowledge' });
        else if (memory !== undefined) direct.set(conversation.id, { projectId: memory, kind: 'memory' });
    }
    for (const [conversationId, projectId] of capture.placed)
        assignments.set(conversationId, { projectId, kind: 'capture' });
    const claims = new Map<string, string>([
        ...[...direct].map(([conversationId, claim]) => [conversationId, claim.projectId] as const),
        ...capture.placed,
    ]);
    const disagreement = (conversationId: string, projectId: string): string | undefined => {
        let inProject = 0;
        let outsideAny = 0;
        for (const neighbour of links.get(conversationId) ?? []) {
            const claimed = claims.get(neighbour);
            if (claimed !== undefined && claimed !== projectId)
                return 'a conversation it is linked to by search is in another project';
            if (claimed === projectId) inProject++;
            else if (capture.outside.has(neighbour)) outsideAny++;
        }
        const visited = capture.names.has(projectId);
        if (visited && capture.outside.has(conversationId)) return 'the capture visited the project and did not list it';
        if (visited && outsideAny > inProject)
            return `search links it mostly to conversations outside any project, ${outsideAny} outside and ${inProject} in`;

        return undefined;
    };
    for (const [conversationId, claim] of direct) {
        if (assignments.has(conversationId)) continue;
        const reason = disagreement(conversationId, claim.projectId);
        if (reason === undefined) assignments.set(conversationId, claim);
        else vetoes.set(conversationId, { claim, reason });
    }
    const settled = new Map([...assignments].filter(([, assignment]) => assignment.kind !== 'memory'));
    for (const [conversationId, neighbours] of links) {
        if (assignments.has(conversationId)) continue;
        const reached = [...neighbours].filter(neighbour => settled.has(neighbour));
        const reachedProjectIds = new Set(reached.map(neighbour => settled.get(neighbour)!.projectId));
        if (reachedProjectIds.size !== 1) continue;
        const [projectId] = reachedProjectIds;
        if (disagreement(conversationId, projectId) === undefined)
            assignments.set(conversationId, { projectId, kind: 'search', through: reached[0] });
    }

    return { assignments, vetoes };
};

const assignmentWords = (assignment: Assignment, titleOfId: Map<string, string>): string => {
    if (assignment.kind === 'capture') return 'the capture';
    if (assignment.kind === 'knowledge') return 'a search of its project\'s files';
    if (assignment.kind === 'memory') return 'a read of its project\'s memory';
    const throughTitle = titleOfId.get(assignment.through ?? '') ?? assignment.through;

    return `a conversation search, one hop from "${throughTitle}"`;
};

const evidenceWords = (
    assignment: Assignment | undefined,
    veto: Veto | undefined,
    shared: string[] | undefined,
    titleOfId: Map<string, string>,
    nameOfProject: (projectId: string) => string,
): string => {
    if (assignment !== undefined) return assignmentWords(assignment, titleOfId);
    if (veto !== undefined) {
        const claimWords = assignmentWords(veto.claim, titleOfId);

        return `none: ${claimWords} said ${nameOfProject(veto.claim.projectId)}, vetoed since ${veto.reason}`;
    }
    if (shared !== undefined) return `none: the capture lists this title in ${shared.join(' and ')}`;

    return 'none';
};

const stackedProject = (newer: Project, older: Project): Project => {
    const newerNames = new Set(newer.documents.map(document => document.name));

    return {
        ...newer,
        description: newer.description || older.description,
        instructions: newer.instructions || older.instructions,
        createdAt: older.createdAt < newer.createdAt ? older.createdAt : newer.createdAt,
        documents: [...newer.documents, ...older.documents.filter(document => !newerNames.has(document.name))],
    };
};

export const stackedProjects = (layersOldestFirst: Project[][]): Project[] => {
    const stacked: Project[] = [];
    const stackedByName = new Map<string, number>();
    for (const layer of [...layersOldestFirst].reverse())
        for (const project of layer) {
            const position = project.name === '' ? undefined : stackedByName.get(project.name);
            if (position === undefined) {
                if (project.name !== '') stackedByName.set(project.name, stacked.length);
                stacked.push(project);
            } else
                stacked[position] = stackedProject(stacked[position], project);
        }

    return stacked;
};

export const conversationPairings = (
    library: string,
    account: string,
    conversations: Conversation[],
    projects: Project[],
    mapping: Mapping | undefined,
    exclusions: Exclusions = noExclusions,
): Pairing[] => {
    const previousPairings = new Map(readPairings(library).map(pairing => [pairing.conversationId, pairing]));
    const capture = captureReading(mapping, conversations);
    const { assignments, vetoes } = decidedProjects(conversations, projects, capture);
    const titleOfId = new Map(conversations.map(conversation => [conversation.id, conversation.name || 'Untitled']));
    const nameOfProject = (projectId: string): string =>
        projects.find(project => project.id === projectId)?.name || capture.names.get(projectId) || projectId;

    return conversations.map(conversation => {
        const previousPairing = previousPairings.get(conversation.id);
        if (previousPairing?.byHand) return { ...previousPairing, account };
        const assignment = assignments.get(conversation.id);
        const projectName = assignment === undefined ? undefined : nameOfProject(assignment.projectId);
        const shared = capture.shared.get(titleOf(conversation));
        const evidence = evidenceWords(assignment, vetoes.get(conversation.id), shared, titleOfId, nameOfProject);
        const reason = exclusionReason(conversation, projectName, exclusions);

        return {
            conversationId: conversation.id,
            title: conversation.name,
            account,
            projectName,
            evidence,
            excluded: reason !== '',
            reason,
            byHand: false,
        };
    });
};
