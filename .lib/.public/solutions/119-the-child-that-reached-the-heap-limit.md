# The Child That Reached the Heap Limit

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** tooling · budget-met · walk-in-draw
- **sprint:** [Sprint 114](../projection/119-sprint-114--the-conversations-at-a-thousand.md#u2)

---

## Symptoms

**A full bind of Doug's library, 1,019 books, stopped at the specify stage with `reading .claude/.chemistry, .claude/.claude, .claude/.code, .claude/.conversations failed before it could answer (exit 134)` after 202 s, and above it the child's own last words: `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`, the last Mark-Compact at 4,043 MB of 4,121.** The same bind had passed that morning, every page kept. The unit that had just landed, 2026-10-19, had changed a manual's code file, which stales every book, and had given a section's count word a new way of answering.

**Mended, it died again, in 90 s this time**, the same batch, the same last words, and the unit's change was no longer in the path.

## What it turned out to be

**Two causes, one symptom, and the second was found only after the first was wrongly taken for the whole of it.**

- **The unit's own, `walk-in-draw`.** The count word on a section's heading, `$SectionCount.write()`, had been written to ask whether each row led to one of the book's entries, and the register's `entries` getter walks `this.text.find($Chapter)` over 983 chapters. Inside a draw every read is tracked by the lift's memo, so each of a thousand rows walked a thousand chapters and registered every one, and the child's heap filled with dependencies. The same question asked once at bind, section-local, costs allocations only. *Decided once in a `$Bound` with a `Set`, handed down, never asked in `write()`.*
- **At HEAD, `budget-met`.** With the count mended, the register alone, specified by hand in a child of its own, died at 58 s; with the code as bound that morning it died the same way; and under a ten-gigabyte heap it passed at a peak of 4,065 MB in 232 s, 8,911 writings walked. Node's default old space is four gigabytes, and the binder opens its children with no heap flag, so the register's specification had stood at the edge of the default heap and the morning's bind had passed it by a margin the day used up. **Not the unit's: a red at HEAD is inherited, and this one was proved so by swapping the five changed code files for the checkout's and watching the same death.** Filed as [B49](../the-catalogue-and-the-specification/08-the-binders-condition.md#b49).

## How it was found

**By running the specify child by hand on one book at a time**, which the binder makes possible: `node specification/specify.mjs <folders>` in the binding with `BINDING_PLACES` set to its `.places.json` and `NODE_ENV=development`, which is how `specifying.ts` opens it. The smallest project manual passed in 6 s at 328 MB, the largest in 13 s at 623 MB, and the register died in 58 s alone; then `--max-old-space-size=10240` gave the true peak. **And by bisecting against the checkout**: the commit tool keeps the personal library's previous versions in `../dougs-library/library`, so the five code files were swapped for theirs, the register specified by hand, and the files restored.

## Why no gate caught it sooner

**The binder's children print their peak, and the stage lines carry it**, but a peak that passes under the limit says nothing about how far under; the specify stage had never reported the register's peak against the heap because nothing asked. **And the first death was read as the unit's because the unit had a plausible cause in it**, which was real and was mended, and the mending was then measured as a cure by the next death's timing alone, 90 s against 202 s, a number that moved for a reason other than the one credited to it.

## The repair, and the rule it leaves

**The count word writes what its own section holds; the index decides at bind, once, with a set of the book's entries, which sections are counted and which rows are dated.** Every bind of Doug's library since runs with `NODE_OPTIONS=--max-old-space-size=10240` in the environment, which the binder hands every child unchanged, about 34 minutes for the whole; the treatment is the binder's and so Doug's to rule, a field under its configuration naming the children's heap, or the register's entries ceasing to import their covers, which is the import's form. The second bind under the wider heap, after the third volume reached 703 covers, drew its pages at a peak of 8,198 MB in a child against a flag of 8,192, which is why the line says ten.

**The rule, in two halves.** *A word writes what its own writing holds; whatever needs the book's whole text is decided once at bind and handed down, since a walk inside a draw is a walk every draw tracks.* *And a death that follows a change is measured at HEAD before it is owned: run the child by hand on the one book, swap the changed files for the checkout's, and read the peak under a heap wide enough to hold it, because two causes can share one symptom and the plausible one is mended first.*
