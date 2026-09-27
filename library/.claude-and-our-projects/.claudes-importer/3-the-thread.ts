// THE THREAD — the conversation as it stands on the screen, which is one path through a tree.
// Documented by 3-the-thread.tsx, which is this file's chapter.

import type { Conversation, Message } from './2-the-source';

// THE ROOT'S PARENT, which the export writes as a nil uuid rather than as an absence.
const nothing = '00000000-0000-4000-8000-000000000000';

// A CONVERSATION IS A TREE AND A READER SEES A PATH. Doug, 2026-09-16: "I am fine with only importing
// the visual conversation on the screen and not the tree." Every edit and every retry makes a branch;
// what the app shows is the one path from the root down to whichever leaf was last spoken on.
//
// MEASURED 2026-09-16 on Semantics of Types & More: 106 messages, one root, and TEN parents with more
// than one child. The markdown export had flattened those ten branches into the run, which is why
// reading it gave 101 blocks with near-duplicates beside each other and a count that did not match
// the file's own frontmatter. Nothing was wrong with the count; the tree had been walked as a list.
export const thread = (held: Conversation): Message[] => {
    const byUuid = new Map(held.messages.map(message => [message.uuid, message]));
    const last = leaf(held);
    const path: Message[] = [];

    for (let at: Message | undefined = last; at !== undefined; at = byUuid.get(at.after)) {
        path.push(at);
        if (at.after === nothing) break;
        if (path.length > held.messages.length) throw new Error(`the parents of ${held.name} do not reach a root`);
    }

    return path.reverse();
};

// WHERE THE READER IS, which is the last thing anybody said. A leaf is a message nothing answers;
// the one that was spoken most recently is the branch the app is showing.
const leaf = (held: Conversation): Message => {
    const answered = new Set(held.messages.map(message => message.after));
    const ends = held.messages.filter(message => !answered.has(message.uuid));
    const last = ends.sort((one, two) => one.said.localeCompare(two.said)).pop();
    if (last === undefined) throw new Error(`${held.name} holds no message that nothing answers`);

    return last;
};

// WHAT WAS LEFT BEHIND, so the importer can say it rather than round it off. A conversation of 106
// messages that shows 90 has not lost 16 — it has 16 on paths the reader is not looking at.
export const aside = (held: Conversation, shown: Message[]): number => held.messages.length - shown.length;
