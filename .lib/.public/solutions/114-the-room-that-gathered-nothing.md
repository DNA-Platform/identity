# The Room That Gathered Nothing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

**keywords:** `library` · `guessed-pattern`

---

## Symptoms

***"nothing matches .pd-built-in"*** — the workbench, on a design chapter of Doug's design book that referred to three chapters of his manual by name, whose room was to gather those references into a block of places it is built in. The room drew its plate and its exhibit; the block was not on the page, no error anywhere, the typecheck clean.

***"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none"*** — the bind, an hour later, refusing the book on the Portfolio's own rule, when every one of its three designs held a paragraph said `Exhibit` with its picture, plainly, in its source.

## What it turned out to be

A writing's `text.find(given)` reads the writing's direct children and no deeper: [`Collection.find`](../../package/src/utilities/Collection.ts) over [`Text`](../../package/src/writing/Writing.tsx), and nothing in the package walks further, since the package's own collections are each one level deep — a book's chapters, a chapter's sections, a paragraph's words. The room's getter read `chapter.text.find($Word)` and saw the title and the sections; the Means stood in paragraphs inside the sections. The design's rule read `chapter.text.find($Paragraph)` and saw no paragraph at all, the exhibit standing inside a section; it passed on the workbench only because the workbench does not run the rules, and the Portfolio's rule, written the same way, refused the book at the bind. Three readers, one assumption, and the assumption was mine: that `find` was a search.

## How it was found

By `read=` on the workbench naming the element and getting nothing; then by reading `find` in the package rather than remembering it; then by grepping every deep walk in the library, which all go `chapter.text.find($Section).flatMap(section => section.text.find($Paragraph))`, section by section, and [`sections()`](../../../../.me/.manual/1-the-book~code.tsx) in his base book is a walk of the same kind. The repair is [`within`](../../../../.me/.manual/24-the-room~code.tsx), a walk in document order that answers a find to any depth, and the room's getter, the design's rule and the portfolio's rule read through it. [How a Book Is Built](../writing-a-book/00-02-how-a-book-is-built.md) says it beside its line on getters.

## Why no gate caught it sooner

The typecheck cannot: a shallow find and a deep one have the same type. The look caught the first reader, since the block was missing from the page; the bind caught the third, since the rule refused, which is the rule working as a gate. The second reader, the design's rule, was caught by neither until the bind ran the rules, because the workbench shows the page and runs no specification — which is also why the bind is the gate at the end of a unit and never the way to look. What would catch it sooner is a deep find in the package, one word on `Writing`, so that a library never writes the walk; that stands as a pitch of low weight in the sprint's chapter.
