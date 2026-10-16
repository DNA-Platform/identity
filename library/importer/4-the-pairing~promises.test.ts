import { mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { sampleConversation, sampleMapping, sampleProject } from './3-the-record~samples.ts';
import {
    conversationPairings, pairingsFilePath, readPairings, stackedProjects, writePairings, type Pairing,
} from './4-the-pairing~pairing.ts';

const libraries: string[] = [];
const freshLibrary = (): string => {
    const library = mkdtempSync(join(tmpdir(), 'pairing-'));
    mkdirSync(join(library, 'importer'));
    libraries.push(library);

    return library;
};
afterAll(() => {
    for (const library of libraries)
        rmSync(library, { recursive: true, force: true });
});

const srt = 'Semantic Reference Theory';
const axioms = 'Every referent is held at an instant, and the instant is what a relation is said of; '
    + 'this sentence is long enough that a probe from its middle names the file that holds it.';
const knowledgeChunk = `Axioms.md\n${axioms}`;
const mappedSrt = sampleMapping(srt, [{ title: 'Semantic Primes', lastMessage: 'Oct 1' }]);
const pairingsOf = (
    conversations: Parameters<typeof conversationPairings>[2],
    projects: Parameters<typeof conversationPairings>[3] = [],
    mapping: Parameters<typeof conversationPairings>[4] = undefined,
    exclusions?: Parameters<typeof conversationPairings>[5],
): Pairing[] => conversationPairings(freshLibrary(), 'DNA', conversations, projects, mapping, exclusions);

// Doug, 2026-10-16: "Look at their code and how it works. Get things in the same way" — the rules are
// dna-library's projects.ts, read from the export and the capture beside it.
describe('the pairing', () => {
    it('pairs a conversation whose title the capture lists once, by the capture, and says its account', () => {
        const [pairing] = pairingsOf([sampleConversation('a', 'Semantic Primes')], [], mappedSrt);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('the capture');
        expect(pairing.account).toBe('DNA');
    });

    it('leaves a title the capture lists in two projects to the evidence, naming both', () => {
        const mapping = sampleMapping(srt, [{ title: 'A Continuation...', lastMessage: 'Oct 1' }]);
        mapping.projects.push({ ...mapping.projects[0], name: 'Seren', id: 'Seren' });
        const [pairing] = pairingsOf([sampleConversation('b', 'A Continuation...')], [], mapping);
        expect(pairing.projectName).toBeUndefined();
        expect(pairing.evidence).toBe(`none: the capture lists this title in ${srt} and Seren`);
    });

    it('pairs a conversation whose search of a project\'s files returned a passage one project holds', () => {
        const projects = [sampleProject(srt, ['Axioms.md'], axioms), sampleProject('Seren', ['Other.md'], 'unrelated')];
        const searched = sampleConversation('c', 'Axioms', [], undefined, { knowledge: [knowledgeChunk] });
        const [pairing] = pairingsOf([searched], projects);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('a search of its project\'s files');
    });

    it('vetoes a read of a project\'s memory from a chat the capture visited that project and did not list', () => {
        const mapping = sampleMapping(srt, [{ title: 'Semantic Primes', lastMessage: 'Oct 1' }]);
        const listed = sampleConversation('d', 'Semantic Primes');
        const reader = sampleConversation('e', 'Formal abstractions', [], undefined, { memoryProjects: [srt] });
        const [, pairing] = pairingsOf([listed, reader], [sampleProject(srt, [])], mapping);
        expect(pairing.projectName).toBeUndefined();
        expect(pairing.evidence).toBe('none: a read of its project\'s memory said Semantic Reference Theory, '
            + 'vetoed since the capture visited the project and did not list it');
    });

    it('places a conversation one search hop from a captured one, and never from a memory label', () => {
        const capturedBefore = { ...mappedSrt, capturedAt: '2026-06-01T00:00:00Z' };
        const captured = sampleConversation('f', 'Semantic Primes', [], undefined, { found: ['g'] });
        const found = sampleConversation('g', 'Found by search');
        const [, byHop] = pairingsOf([captured, found], [sampleProject(srt, [])], capturedBefore);
        expect(byHop.projectName).toBe(srt);
        expect(byHop.evidence).toBe('a conversation search, one hop from "Semantic Primes"');
        const remembered = sampleConversation('h', 'Remembers', [], undefined, { memoryProjects: [srt], found: ['i'] });
        const linked = sampleConversation('i', 'Linked to a memory label');
        const [byMemory, notByHop] = pairingsOf([remembered, linked], [sampleProject(srt, [])]);
        expect(byMemory.projectName).toBe(srt);
        expect(notByHop.projectName).toBeUndefined();
    });

    // Doug, 2026-10-14: "If it has a Russian title, it is not mine. Perhaps we can detect Russian characters and
    // skip those" — the scripts and the projects that are not his are the configuration's to name.
    it('proposes a conversation under a project the configuration excludes, or titled in a script it excludes', () => {
        const mappedAna = sampleMapping("Ana's Universe", [{ title: 'Recursion', lastMessage: 'Oct 1' }]);
        const recursion = sampleConversation('j', 'Recursion');
        const russian = sampleConversation('k', 'Понимание основ');
        const conversations = [recursion, russian, sampleConversation('l', 'Mine')];
        const exclusions = { scripts: ['Cyrillic'], projects: ["Ana's Universe"] };
        const [underAna, cyrillic, mine] = pairingsOf(conversations, [], mappedAna, exclusions);
        expect(underAna.reason).toBe("filed under Ana's Universe");
        expect(cyrillic.reason).toBe('a title in Cyrillic');
        expect(mine.excluded).toBe(false);
        expect(pairingsOf([russian], [], mappedAna)[0].excluded).toBe(false);
    });

    it('keeps a line written by hand over any evidence, and writes nothing to the file itself', () => {
        const library = freshLibrary();
        const byHand: Pairing = {
            conversationId: 'm',
            title: 'Semantic Primes',
            account: 'DNA',
            projectName: 'Mine',
            evidence: 'by hand',
            excluded: false,
            reason: '',
            byHand: true,
        };
        writePairings(library, [byHand]);
        const fileBefore = readFileSync(pairingsFilePath(library), 'utf8');
        const conversations = [sampleConversation('m', 'Semantic Primes'), sampleConversation('n', 'Other')];
        const pairings = conversationPairings(library, 'DNA', conversations, [], mappedSrt);
        expect(pairings[0]).toEqual(byHand);
        expect(readFileSync(pairingsFilePath(library), 'utf8')).toBe(fileBefore);
        expect(readPairings(library)).toEqual([byHand]);
    });
});

// Doug, 2026-10-16: "We consider the new account to be a continuation of that one, with same named projects,
// so they exist on top of each other."
describe('the stack', () => {
    it('makes one project of a name in both accounts, the newer covering the older and the older showing through', () => {
        const older = sampleProject(srt, ['Axioms.md', 'Only Then.md'], 'as it was', 'What the project is for');
        const newer = sampleProject(srt, ['Axioms.md', 'Only Now.md'], 'as it is');
        const [stacked, seren] = stackedProjects([[older], [newer, sampleProject('Seren', [])]]);
        expect(stacked.documents.map(document => `${document.name}: ${document.content}`))
            .toEqual(['Axioms.md: as it is', 'Only Now.md: as it is', 'Only Then.md: as it was']);
        expect(stacked.description).toBe('What the project is for');
        expect(seren.name).toBe('Seren');
    });
});
