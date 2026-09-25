# The Theme That Arrived on the Second Paint

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** `model` · `theme` · `first-paint`

---

## The symptom

**"All text on our page starts blue and turns black far later."** Doug, on the Turing page. Every meaning anchor drew in the browser's link blue on the first paint and took the encyclopedia's colour on a later one. No error, no warning, and the gate green, because the gate measured a settled page.

## What it was

A writing found its theme at draw time by **walking its parents for a theme annotation**, and fell back to the base theme's template when the walk found none. The theme was an annotation the book concatenated into its own block at its bond. Anything drawn before that walk could reach a bonded parent with a theme in its block was drawn in the base, and re-drawn once it could. Two phases, and the first one wrong.

## What fixed it — Doug's design, verbatim

*"Put a theme property on writing. It asks parent for theme. On document and book, have it store and make theme instead. One property and two overrides."* And: *"The theme is for the whole book — register the theme to $Book."* And: *"specifically shouldn't create the theme. It validates that it's assigned if anything. You can have this done in the bond constructor."*

So `$Writing.theme` is `reflection.above(this)?.theme ?? reflection.theme()`; `$Book` and `$Document` hold one, made in their bond by `$check(theme, '!')`, which is the registration answering; their specifications say only that one is there; the package registers the bare theme on `Book` and a book's file registers its own there, as one instance, `'single'`. Nothing walks. A book handed another theme assigns it and runs it down to its documents; the sheet is worn in the book's own view.

Measured after: the Turing page, the Manual of Style and the portal each wear the right theme on a fresh load, zero blue anchors; the paper switches by reassignment; the suite 101 of 101.

## What it cost to learn beside it

A **declared-only field** is invisible to chemistry, so a write to it re-draws nothing; and a field **initialised from reflection** runs when chemistry makes the class's template at module load, before the composition root has told reflection its kinds, and crashes the page. The store is `_theme?: $Theme`, assigned in the bond, read through a getter with the package's theme as the answer before the bond.

## Where it is recorded

[Sprint 64](../projection/70-sprint-64--themes-by-registration.md), [Themes per Type, Formats per Instance](../the-motif/04-themes-per-type-formats-per-instance.md).
