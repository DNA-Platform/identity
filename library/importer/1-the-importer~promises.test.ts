import { describe, expect, it } from 'vitest';
import { configurationFrom, parsedArguments, selectedPairings } from './1-the-importer~importer.ts';
import type { Pairing } from './4-the-pairing~pairing.ts';

const pairing = (conversationId: string, title: string, projectName: string | undefined, excluded = false): Pairing =>
    ({ conversationId, title, account: 'DNA', projectName, evidence: 'the capture', excluded, reason: '', byHand: false });
const pairings = [
    pairing('p1', 'Semantic Primes', 'Semantic Reference Theory'),
    pairing('p2', 'Specifying SRT', 'Semantic Reference Theory'),
    pairing('s1', 'Seren & Color', 'Seren'),
    pairing('u1', 'A Continuation...', undefined),
    pairing('r1', 'Понимание основ СРТ', 'Semantic Reference Theory', true),
];
const collections = { foundations: ['Semantic Primes', 's1'] };
const selection = (names: string[] = [], projectName?: string, collectionName?: string) =>
    ({ projectName, collectionName, onlyNames: names });

describe('the importer', () => {
    // Doug, 2026-10-14: "We should probably have an abstraction where we can configure the import in certain ways…
    // We also need to be able to run the importer for specific conversations or specific collections of conversations."
    it('reads its configuration with every part given a default, so an empty file configures nothing', () => {
        expect(configurationFrom('{}')).toEqual({ accounts: [], excluded: { scripts: [], projects: [] }, collections: {} });
        expect(configurationFrom('{"excluded":{"scripts":["Cyrillic"]},"collections":{"a":["x"]}}'))
            .toEqual({ accounts: [], excluded: { scripts: ['Cyrillic'], projects: [] }, collections: { a: ['x'] } });
        const account = { name: 'DNA Legacy', folder: 'claude-legacy', address: 'support@dna.love' };
        expect(configurationFrom(JSON.stringify({ accounts: [account] })).accounts).toEqual([account]);
    });

    it("selects a project's conversations, a collection's by title or id, or the ones named, narrowing by name", () => {
        const ids = (selected: Pairing[]): string[] => selected.map(one => one.conversationId);
        const srt = 'Semantic Reference Theory';
        expect(ids(selectedPairings(pairings, selection([], srt), collections))).toEqual(['p1', 'p2', 'r1']);
        expect(ids(selectedPairings(pairings, selection(['Specifying SRT'], srt), collections))).toEqual(['p2']);
        expect(ids(selectedPairings(pairings, selection([], undefined, 'foundations'), collections))).toEqual(['p1', 's1']);
        expect(ids(selectedPairings(pairings, selection(['u1', 'Seren & Color']), collections))).toEqual(['s1', 'u1']);
        expect(selectedPairings(pairings, selection(), collections)).toEqual([]);
        expect(() => selectedPairings(pairings, selection([], undefined, 'nowhere'), collections))
            .toThrow('the configuration names no collection called nowhere');
    });

    it('takes every --only on the command line, and the project, the collection and the flags beside them', () => {
        const parsed = parsedArguments(['--only', 'A', '--only', 'B', '--collection', 'c', '--write']);
        expect(parsed.onlyNames).toEqual(['A', 'B']);
        expect(parsed.collectionName).toBe('c');
        expect(parsed.projectName).toBeUndefined();
        expect(parsed.write).toBe(true);
        expect(parsed.overwrite).toBe(false);
    });
});
