// THE MOVEMENTS — where a conversation divides, and why no rule finds them.
// Documented by 4-the-movements.tsx, which is this file's chapter.

import type { Message } from './2-the-source';

export type Movement = {
    name: string;
    topic: string;
    opens: string;
};

export type Cut = Movement & { messages: Message[] };

// A MOVEMENT OPENS AT SOMETHING SOMEBODY SAID, not at a number. Doug, 2026-09-16: "The conversation,
// if long, should have many chapters but not one per turn." Nothing computes where those chapters
// begin — a movement is a run of exchanges about one thing, and only reading tells you where one
// stops. So the cuts are written down, and they are written as the OPENING WORDS of the message that
// starts each one rather than as an index, because an index moves the moment the thread is re-read
// and a sentence does not.
export const movements: Movement[] = [
    { name: 'Ivitivity', topic: 'The Semantics of a Suffix', opens: 'Ivitivity - let' },
    { name: 'Subjectivity and Passivity', topic: 'Where a Disposition Lives', opens: 'OK, so take your two part analysis' },
    { name: 'Adjectivity', topic: 'The Fourth Meaning', opens: 'I think this is one of a bigger number of endings' },
    { name: 'The Ten Referents', topic: 'Semantic Reference Theory', opens: 'Read the last conversation' },
    { name: 'A Property of the Type', topic: 'Properties and Types', opens: 'But long is a propery os many things' },
    { name: 'The Little Type Document', topic: 'Style', opens: 'I want you to read the little type document' },
    { name: 'Narrowing and the Diamond', topic: 'Polymorphism', opens: 'Here' + '’' + 's another interesting one' },
    { name: 'Semantic Context', topic: 'What the Session Made Visible', opens: 'Are you starting to see how SRT' },
];

// THE CUT, AND IT REFUSES TO GUESS. A movement whose opening sentence is not in the thread is a cut
// that no longer applies — the thread was re-read, or the branch shown has changed — and the importer
// says so rather than quietly sliding the chapter somewhere else.
export const cut = (thread: Message[], against: Movement[] = movements): Cut[] => {
    const opens = against.map(movement => {
        const at = thread.findIndex(message => said(message).startsWith(said({ text: movement.opens } as Message)));
        if (at < 0) throw new Error(`no message in the thread opens with "${movement.opens}" — the cuts need re-reading`);

        return { movement, at };
    });

    return opens.map(({ movement, at }, which) => ({
        ...movement,
        messages: thread.slice(at, opens[which + 1]?.at ?? thread.length),
    }));
};

// WHAT A MESSAGE SAYS, with its whitespace settled, so a cut written by eye against a page matches a
// message whose line breaks came out of an export.
const said = (message: Message): string => message.text.replace(/\s+/gu, ' ').trim();
