import { describe, expect, it } from 'vitest';
import { sampleConversation, sampleTextMessage } from './3-the-record~samples.ts';
import { asideCount, pathDays, shownPath } from './6-the-thread~thread.ts';

const question = sampleTextMessage('m1', 'Doug', 'a question', undefined, '2026-06-15T10:00:00Z');
const firstAnswer = sampleTextMessage('m2', 'Claude', 'an answer', 'm1', '2026-06-15T10:01:00Z');
const secondAnswer = sampleTextMessage('m3', 'Claude', 'another answer', 'm1', '2026-06-15T10:02:00Z');
const reply = sampleTextMessage('m4', 'Doug', 'a reply to the second', 'm3', '2026-06-16T09:00:00Z');
const branched = sampleConversation('b', 'Branched', [question, firstAnswer, secondAnswer, reply]);

describe('the thread', () => {
    it('shows the path from the latest leaf back to the root, in order', () => {
        expect(shownPath(branched).map(message => message.id)).toEqual(['m1', 'm3', 'm4']);
    });

    it('counts the messages left on other paths', () => {
        expect(asideCount(branched, shownPath(branched))).toBe(1);
    });

    it('lists the days the shown path spans', () => {
        expect(pathDays(shownPath(branched))).toEqual(['2026-06-15', '2026-06-16']);
    });
});
