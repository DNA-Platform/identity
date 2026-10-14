import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import {
    sampleConversation, sampleKnowledgeSearch, sampleMapping, sampleMessage, sampleProject,
} from './3-the-record~samples.ts';
import { conversationPairings, readPairings, writePairings, type Pairing } from './4-the-pairing~pairing.ts';

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
const mappedSrt = sampleMapping(srt, [{ title: 'Semantic Primes', lastMessage: 'Jun 15' }]);
const searchedConversation = (id: string, documentName: string) =>
    sampleConversation(id, 'Semantic Primes', [sampleMessage('m', 'Claude', sampleKnowledgeSearch(documentName))]);

describe('the pairing', () => {
    it('pairs a conversation whose title the mapping names once, by the mapping', () => {
        const conversations = [sampleConversation('a', 'Semantic Primes')];
        const [pairing] = conversationPairings(freshLibrary(), conversations, [], mappedSrt);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('the mapping, by title');
    });

    it('pairs a conversation whose knowledge search was answered with a document one project holds', () => {
        const projects = [sampleProject(srt, ['Axioms.md'])];
        const conversations = [searchedConversation('b', 'Axioms.md')];
        const [pairing] = conversationPairings(freshLibrary(), conversations, projects, undefined);
        expect(pairing.projectName).toBe(srt);
        expect(pairing.evidence).toBe('a knowledge search answered with "Axioms.md"');
    });

    it('leaves a conversation ambiguous when two projects hold the document, saying both', () => {
        const projects = [sampleProject('Seren', ['Axioms.md']), sampleProject(srt, ['Axioms.md'])];
        const conversations = [searchedConversation('c', 'Axioms.md')];
        const [pairing] = conversationPairings(freshLibrary(), conversations, projects, undefined);
        expect(pairing.projectName).toBeUndefined();
        expect(pairing.evidence)
            .toBe(`ambiguous: a knowledge search answered with "Axioms.md", held by Seren and ${srt}`);
    });

    it('weighs the document against the mapping, pairing where they agree and ambiguous where they do not', () => {
        const srtHolds = [sampleProject(srt, ['Axioms.md'])];
        const agreeingConversations = [searchedConversation('d', 'Axioms.md')];
        const [agreeing] = conversationPairings(freshLibrary(), agreeingConversations, srtHolds, mappedSrt);
        expect(agreeing.projectName).toBe(srt);
        expect(agreeing.evidence).toBe('a knowledge search answered with "Axioms.md", and the mapping, by title');
        const serenHolds = [sampleProject('Seren', ['Axioms.md'])];
        const disagreeingConversations = [searchedConversation('e', 'Axioms.md')];
        const [disagreeing] = conversationPairings(freshLibrary(), disagreeingConversations, serenHolds, mappedSrt);
        expect(disagreeing.projectName).toBeUndefined();
        expect(disagreeing.evidence)
            .toBe(`ambiguous: a knowledge search answered with "Axioms.md", held by Seren, and the mapping says ${srt}`);
    });

    // Doug, 2026-10-14: "If it has a Russian title, it is not mine. Perhaps we can detect Russian characters and
    // skip those" — the scripts and the projects that are not his are the configuration's to name.
    it('proposes a conversation under a project the configuration excludes, or titled in a script it excludes', () => {
        const mappedAna = sampleMapping("Ana's Universe", [{ title: 'Recursion', lastMessage: 'Jun 15' }]);
        const recursion = sampleConversation('f', 'Recursion');
        const russian = sampleConversation('g', 'Понимание основ');
        const conversations = [recursion, russian, sampleConversation('h', 'Mine')];
        const exclusions = { scripts: ['Cyrillic'], projects: ["Ana's Universe"] };
        const [underAna, cyrillic, mine] = conversationPairings(freshLibrary(), conversations, [], mappedAna, exclusions);
        expect(underAna.excluded).toBe(true);
        expect(underAna.reason).toBe("filed under Ana's Universe");
        expect(cyrillic.excluded).toBe(true);
        expect(cyrillic.reason).toBe('a title in Cyrillic');
        expect(mine.excluded).toBe(false);
        const [unconfigured] = conversationPairings(freshLibrary(), [russian], [], mappedAna);
        expect(unconfigured.excluded).toBe(false);
    });

    it('keeps a line written by hand over any evidence, and writes every line back to the file', () => {
        const library = freshLibrary();
        const byHand: Pairing = {
            conversationId: 'h',
            title: 'Semantic Primes',
            projectName: 'Mine',
            evidence: 'by hand',
            excluded: false,
            reason: '',
            byHand: true,
        };
        writePairings(library, [byHand]);
        const conversations = [sampleConversation('h', 'Semantic Primes'), sampleConversation('i', 'Other')];
        const pairings = conversationPairings(library, conversations, [], mappedSrt);
        expect(pairings[0]).toEqual(byHand);
        expect(readPairings(library)).toEqual(pairings);
    });
});
