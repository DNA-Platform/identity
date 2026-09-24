# How a Class Is Documented

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**The documentation system of `.public`, focused on extension, ruled 2026-09-22.** Doug: *"we have to come up with a documentation system that is focused on extension for everything in .public — this is the beginning of the next draft."* Offered three shapes, he chose the hand-written one, four parts per class, living in the branch library beside the package. This chapter is that system: what a chapter of it holds, where the chapters live, what links to what, and when a class is called done. It generalizes the plan first written for Writing in [How Writing Is Extended](../writing/06-how-writing-is-extended.md#the-documentation-plan), which Doug asked for in one sentence — *"it is so important to have an extension plan for polymorphism in this framework."*

## One book per folder, one chapter per class

**Every folder of `src` has a book in the branch library, and every class exported from that folder has a chapter in it.** The book is named for the folder, in the library's plain words; its cover is the index of what can be extended there, each entry saying what the class is and where a subclass reaches it. A folder's book opens with front matter that says what the folder's classes have in common — for `writing`, [the annotation-based writing model](../writing/07-the-annotation-system.md); for `utilities`, that they are the things every writing is built with and none of them is a writing.

**Where the chapters stand today.** Writing's three chapters were written inside [The Genesis of Writing](../the-genesis-of-writing/.cover.md) while the class was being ruled, since the rulings and the class arrived together; they move into the `writing` book when Letter, the folder's second class, arrives, and the Genesis book keeps the record of the redesign. The `utilities` folder's book is [Utilities](../utilities/.cover.md), the first written to this system.

## The four parts of a chapter

**A chapter holds exactly four parts, in this order, and a reader who wants to extend the class reads the second.**

1. **What it is** — every member in a table: the member, what it is in one sentence, and where it comes from, cited to the Genesis event or the dated ruling, or flagged as ours and not yet Doug's. A member with no citation is a question for Doug, not a member.
2. **How it is extended** — the seams a subclass reaches, each named with what a subclass does there and the rule it is under; then what a subclass never does; then how the classes expected to arrive on it are expected to arrive. This is the part the system exists for.
3. **The promises** — what the class's test file promises, by group, so a change turns a promise red rather than a page silently.
4. **The gate** — the last measured run: types, build, promises, and any number measured that a reader would decide by.

## The rules a chapter is under

- **The chapter links to the code and the code never links to the chapter.** *"You are supposed to use reference documents in the branch that LINK to the code"* — the comment lifecycle in [The Coding Style](03-the-coding-style.md#comments): a comment is a stage, and when a class is called done its reasoning is here and the code carries none.
- **Every name that is ours is flagged** in the chapter as a proxy until Doug rules on it, under a heading of its own; every name that is his is used as given.
- **A question for Doug is asked in the code** as an `ask:` line at the line it concerns while the class is being written, and moves into the chapter when he answers, the line leaving the file. At the review the questions still open leave the code for the chapter.
- **The chapter is edited at every pass and never rewritten from memory**; its cover entry is re-edited in the same act, with the tool. A struck design stays in the chapter as what was struck and why.
- **The sprint chapter carries every ruling verbatim**, and the chapter cites the ruling rather than restating it.

## When a class is called done

A class is done when its four parts are current, no `ask:` line stands in its file, every name in it is Doug's or accepted, and its code carries no comment. Until then the chapter says which of those is missing.
