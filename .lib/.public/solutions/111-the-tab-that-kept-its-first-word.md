# The Tab That Kept Its First Word

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **keywords:** library · bonded-once
- **sprint:** [Sprint 106](../projection/111-sprint-106--the-manual-spread-out.md#where-things-stand)

---

## Symptoms

**A press on the manual's dock put the code in front, and the dock still read *full screen*; pressed again it put the words back, as if it had read *split*, and still read *full screen*.** The sketch draws one dock button whose word flips with the page's state, so the two tabs the bar had drawn, one shown in each state by a rule, were made one Tab whose annotation and whose word both followed the book: `annotation={codeInFront ? split : codeForward}` and `{codeInFront ? 'split' : 'full screen'}`. Driven on the workbench the state flipped correctly both ways, so the annotation followed, and the word never changed.

## What it turned out to be

**A writing's word is its children at the bond; its fields are its props at every draw.** Chemistry bonds a chemical once, and in that bond it processes the children it was given into the content the instance holds ([chemical.ts](../../../chemistry/package/src/abstraction/chemical.ts), lines 233 to 271: the children are taken from the props, processed, and kept on the instance), which for a writing is its `text` ([Writing.tsx](../../package/src/writing/Writing.tsx), line 40, the bond that takes its chemicals). A redraw does not bond again: the lift's memo of Sprint 102 sets each `$`-prop onto the held instance, which is why `annotation` followed the state, and the children are not a `$`-prop and were not set. So the Tab's word was the first word it was given and stayed so; a redraw set its fields and not its text.

**The fix is the shape the bar had before:** two tabs, each with its own word, one shown in each state by the rules `.pd-to-split { display: none }` and `.pa-code-forward & .pd-to-split { display: flex }`, under one `pd-dock` class each ([11-the-panel~code.tsx](../../../../.me/.manual/11-the-panel~code.tsx)). A word that must change with state is two words, each drawn, and a class that chooses; or it is a noun of the library's own with a `write()` that reads the state, which a dock's one label did not earn.

## How it was found

By driving the press and reading the dock's word after each, in the same probe that read the book's classes: the classes flipped and the word did not, so the two were not one thing.

## Why no gate caught it sooner

**The gate that proves a press reads the book's classes, and a class flipped.** The word is the only thing the probe had not read, because the two-tab form had made the word a matter of which element was shown, never of what an element said. The rule that follows is the library's: **a thing a reader presses changes a class, and what the class shows was always drawn**; nothing in the library sets a writing's text from state, and a label that flips is two labels.
