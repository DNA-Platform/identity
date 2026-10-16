import { describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import { writtenConversation, type Referents } from './7-the-writing~writing.ts';
import {
    archiveStatistics, chapterInstants, countDifferences, differenceLines, filedTranscriptNames, filingDifferences,
    transcriptDifferences, transcriptMeta, type ArchiveTranscript,
} from './9-the-check~check.ts';

const referents: Referents = { Doug: 'Dougs Story', Claude: 'Dougs Claude' };
const statisticsText = [
    '---', 'title: Export Statistics', '---', '', '# Export Statistics', '',
    '- **Conversations:** 523', '- **Messages:** 19704', '- **Projects:** 41', '- **Project documents:** 222',
    '- **Artifacts:** 246', '- **Date range:** 2024-09-25 to 2026-09-11', '- **Conversations with content:** 513',
].join('\n');
const transcriptText = [
    '---', 'uuid: 7683c3d7', 'title: "Seren & The Hard Problem"', 'created: 2024-09-25T23:43:33Z', 'messages: 688', '---',
    '', '# Seren & The Hard Problem',
].join('\n');
const coverText = [
    '---', 'title: "Semantic Reference Theory"', '---', '', '| # | Title | | Date | Messages |', '|---|---|-|---|---|',
    '| 01 | [A Continuation...](01-a-continuation....md) | [.md](../../conversations/2026-05-25-a-continuation....md) '
        + '| 2026-05-25 | 8 |',
    '| 08 | [Semantic Primes](08-semantic-primes.md) | [.md](../../conversations/2026-06-16-semantic-primes.md) '
        + '| 2026-06-16 | 18 |',
].join('\n');
const transcript = (fileName: string, uuid: string, title: string, messageCount: number): [string, ArchiveTranscript] =>
    [fileName, { fileName, uuid, title, messageCount }];
const transcripts = new Map<string, ArchiveTranscript>([
    transcript('2026-05-25-a-continuation....md', 'c1', 'A Continuation...', 8),
    transcript('2026-06-16-semantic-primes.md', 'c8', 'Semantic Primes', 18),
]);

describe('the check', () => {
    it("reads the archive's statistics, a transcript's front matter and a project cover's filing", () => {
        expect(archiveStatistics(statisticsText)).toEqual({
            conversationCount: 523, messageCount: 19704, projectCount: 41, documentCount: 222, contentfulCount: 513,
        });
        expect(transcriptMeta('t.md', transcriptText))
            .toEqual({ fileName: 't.md', uuid: '7683c3d7', title: 'Seren & The Hard Problem', messageCount: 688 });
        expect(filedTranscriptNames(coverText))
            .toEqual(['2026-05-25-a-continuation....md', '2026-06-16-semantic-primes.md']);
    });

    it('lists only the counts that differ, by name', () => {
        const ours = {
            conversationCount: 523, messageCount: 19704, projectCount: 41, documentCount: 222, contentfulCount: 512,
        };
        expect(countDifferences(ours, archiveStatistics(statisticsText)))
            .toEqual([{ name: 'Conversations with content', ours: '512', theirs: '513' }]);
    });

    it('tells a conversation we paired and the scaffold did not file from the reverse, and a count that differs', () => {
        const primes = sampleConversation('c8', 'Semantic Primes', [sampleTextMessage('m1', 'Doug', 'q')]);
        const books = sampleConversation('c16', 'The Semantics of Books', [sampleTextMessage('m1', 'Doug', 'q')]);
        const filedNames = filedTranscriptNames(coverText);
        expect(filingDifferences([primes, books], filedNames, transcripts)).toEqual([
            { name: 'The Semantics of Books', ours: 'paired', theirs: 'not filed' },
            { name: 'A Continuation...', ours: 'not paired', theirs: 'filed' },
        ]);
        expect(transcriptDifferences([primes, books], transcripts)).toEqual([
            { name: 'Semantic Primes', ours: '1 messages', theirs: '18 messages' },
            { name: 'The Semantics of Books', ours: '1 messages', theirs: 'no transcript' },
        ]);
        expect(differenceLines('filing', [])).toEqual(['filing: no difference']);
    });

    it('reads a written chapter back and finds its messages at the instants of the thread', () => {
        const question = sampleTextMessage('m1', 'Doug', 'A question', undefined, '2026-06-15T10:00:00Z');
        const path = [question, sampleTextMessage('m2', 'Claude', 'An answer', 'm1', '2026-06-15T10:01:00Z')];
        const [chapter] = writtenConversation(sampleConversation('c', 'A Conversation', path), path, referents, '../m', '../c').chapters;
        expect(chapterInstants(chapter.tsx)).toEqual(['2026-06-15T10:00:00Z', '2026-06-15T10:01:00Z']);
    });
});
