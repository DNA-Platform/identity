# The Letter That Redrew the Book

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** framework · library
- **sprint:** [Sprint 118](../projection/123-sprint-118--gates-before-the-render.md#u7)

---

## Symptoms

**A letter typed into the project page's search cost 1.2 to 1.7 s on the workbench and 1.9 s on the bound page, on a project of a hundred and forty rows, with nothing wrong on the console.** The hits were right and the page simply redrew. The plan had guessed the words were read on every letter; they were read once and kept, so the reading was not the cost.

## What it turned out to be

**Chemistry's diffuse.** A write to a reactive field of a mounted chemical wakes the chemicals that read it and then climbs the composition tree, re-rendering every parent up to the book: `diffuse` is `wakeReaders` and then the climb through the parents, read at its source in chemistry's bond. The word typed lived on the table's annotation, the index, which the book reads while it draws. So each letter re-rendered the book, its head, its side bar's sixty-three file rows and its column, 679 nodes removed on one letter with 127 file drawings among them, and the results once.

## How it was found

The browser's profiler around the second letter: nine in ten samples React committing, more than half of them mounts. Counters placed in the writes for one measure: the book's own write ran on every letter, its head and its column with it, the results' once. Three isolations, each added and removed in one turn: with the word unwritten the book did not draw; written on the search's field it drew; a field nobody reads, written on that field, drew it too. The cause was then read in the bond, not inferred from the counts.

## The repair, and the rule it leaves

**The word typed lives on a chemical of its own with no parent.** `$Sought` in `.me/.manual/14-the-entry~code.tsx`, made at the entry chapter's module scope by the lift's eval form, where there is no asker and what the lift makes is a root; the index answers the word through a getter, and the search's field, the results and each hit read it there. A letter then wakes its readers alone: each letter after the first 0.31 to 0.67 s on the workbench, and on the bound page 0.79 s for the first and 0.10 to 0.20 s after, from 1.9 s. Made in the bond constructor or the bound step, the holder was parented and the page drew still; made by `new`, it woke nobody; both measured before the module scope was chosen.

**The rule:** state a page-wide draw reads never lives on a mounted chemical. A reactive write costs its readers and then every ancestor's re-render, so a value that changes on every keystroke is held where it has readers and no parent. The first letter still costs the crossing's redraw of the table once per search, said and not hidden.
