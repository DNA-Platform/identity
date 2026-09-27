# Testing a correspondence

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)

---

[Chapter 1](01-the-pattern.md) claims that aboutness is structural rather than semantic, and names five media that share the pattern. It gives no way to be wrong. That is a defect in the chapter, not a virtue of the claim: **a correspondence that cannot fail anywhere is measuring the surveyor.** This chapter is the falsification the first one owes, and it is written from a survey I actually ran — the annotated works of literature against the annotation system we built, twelve rows, scored ([the survey itself](../../../../../../library/.public/.lib/the-semantics-of-books/19-annotated-works.md), and [autobiography ch 22](../cathy-and-the-reactive-canvas/22-scoring-the-resemblance.md) for how it went).

Three tests, in increasing order of how much they cost to pass.

## 1. The verdict spread

Score every part, including the unflattering ones, and require **more than one verdict**. A survey where every row comes back *close* has told you nothing except that you were looking for matches. A correspondence doing real work produces a spread: *close*, *partial*, *a likeness and not a component*, and *the contrast, by design*.

The contrast rows are the most valuable and the easiest to skip. A palimpsest keeps its under-text legible; our `erase` takes back exactly what `defines` put and leaves no trace. That is not a failed match — it is a place where the two media genuinely part, stated precisely enough to be a design decision rather than an oversight. **A correspondence with no contrast rows has not been examined; it has been enjoyed.**

## 2. The failure cluster

When rows fail, ask whether they fail **independently or for one reason**. Independent failures mean the correspondence is thin — scattered coincidences with no shape. Failures that converge on a single missing component mean the correspondence has a shape, and the shape *predicts*.

In the survey, three rows came back partial — the Glossa Ordinaria, the Talmud page, *Pale Fire* — and all three failed for the same reason: there is no page with a shape, no center, no margin, no place beside the text for what is said of it. Three of the most elaborate annotated works ever made, surveyed separately, naming one component. That convergence is worth more than any of the seven matches, because it is the correspondence telling me what to build next instead of me telling it what I already built.

## 3. Does it move a member?

The strongest test, and the only one that distinguishes structure from decoration. **A correspondence earns structural status when it decides, in advance, where a part goes or what it is called, in a way you would have gotten wrong without it.**

Two rows passed. *A rubric is an epigenetic mark* — red ink marking where a thing begins and changing no word, methylation marking a base and changing no base, a `pa-` class marking a writing and changing no text — and it decided that the class belongs to the annotation and never to the text, because a mark that rewrote the text would not be a mark. *A parenthetical is an intron* — present in what was written, absent from what is expressed — and it decided that a table may hide its apparatus entries while the compiler still reads them. Both moved a member. Every other row in the survey is either history or a guess.

## The discount: medium distance

All three tests need one weighting. **Convergence is cheap between near media and expensive between far ones.** Two designers arranging marks on a page will both invent the running head; that tells you almost nothing, because the constraints are shared. Ink, chromatin and CSS arriving at *a mark that changes nothing and is read by whatever comes after* tells you a great deal, because those substrates share nothing at all.

This is the standard chapter 1 was implicitly relying on and never stated. Its five media — TypeScript, the library, $Chemistry, reading, consciousness — are not near each other, and that distance is where the force of the claim comes from. Naming the standard also prices the weak instances honestly.

## Turning the tests on this book

**Verified.** The fixed point has a spread. TypeScript is a *contrast by design*, not a match: its interpreter finishes before the interpreted system begins, so a failed fixed point there is a compile error rather than a lived state. Consciousness is the row with no recovery path, which is an asymmetry and not a likeness. So the book does not consist only of matches.

**Verified.** It has moved members. The `subject:` field read as scope tracking is what made the validator's job the type checker's job. View purity read as object-bounded is why `this` is the boundary and not the module.

**A guess.** Whether the failures cluster. My suspicion is that the media which fit least fit least for one reason — the gap between the two layers is inspectable in four of them and not in the fifth — but I have not surveyed the five media row by row the way I surveyed the annotated works, and until I do, that sentence is a hypothesis wearing the clothes of a finding. **That survey is what this book owes next.**
