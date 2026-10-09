# The Value That Was Said Twice

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

**keywords:** `model` · `twice-said` · `silent-default`

---

## The symptom, in the words it was observed in

***"The heading scale went flat when it stepped down a notch: the title is 24px and a section heading is close behind it, so a long note has little relief."*** *That was written into [the six-angle review](../projection/62-sprint-56--the-encyclopedia.md#a6) as a judgement about typography.* **It was not a judgement. Measured on the markdown reading: the title 24px and h2 24px — the SAME NUMBER — where the theme plainly declares `1.5em` and `1.25em`.**

***And the second face of it, which cost three passes:*** **a value was changed, rebuilt, driven, and the page did not move.** *Then changed again, rebuilt, driven, and the page did not move.* **The abstract's first line stayed 3px low through `5px`, then `2px`, then `5px` again.**

## What it turned out to be, both times

***A value can be SAID TWICE, and the later saying wins with nothing to show for it.*** **Two shapes, and they read identically from where the writing is done:**

| | |
|---|---|
| ***two prefixes on one selector*** | **the base theme sizes `h2.pd-heading` under `h2_`**, *and the article theme sizes the same selector under `head_`.* **A subclass that overrides `head_fontSize` answers ONE of them and loses the tie to the other** — markdown declared `1.25em` and drew `1.5em` (`package/src/markdown/Theme.tsx`) |
| ***one prefix, twice*** | **`abstracted_marginBottom` was declared at line 218 and again at line 222** of the article theme. *TypeScript reports this — `TS2300: Duplicate identifier` — but only once the file is typechecked, and a theme edit is normally judged by looking at the page* |

***Neither is a cascade problem in the ordinary sense.*** **The specificities are EQUAL, so the winner is source order, and source order across a base and its subclass is not something the person editing the subclass can see.**

## How it was found

***By asking the browser which rules matched, rather than by reading the theme again.***

```js
for (const sheet of document.styleSheets)
    for (const rule of sheet.cssRules)
        if (element.matches(rule.selectorText)) …
```

**That listed three rules where the file said one, and the answer was in the list.** *[The same instrument found a silent specificity tie a sprint earlier](66-the-promise-that-outlived-its-design.md); it is the fastest thing in this repository for a style that will not take.*

***The duplicate declaration was found by `tsc`, which had been reporting it the whole time*** — **the typecheck was being run against `src` and read for zero, and a `TS2300` in a file nobody expected to break got scrolled past.**

## Why no gate caught it

**A theme has no promise that says what size a heading is**, *and it should not: a suite that pins point sizes is a suite that fails every time a designer breathes.* ***What was missing is smaller and cheaper:*** **nothing anywhere asserts that a declared value is the value that DRAWS.**

*And the review's own instrument missed it because the review measured the thing by eye and wrote down an impression* — **"little relief"** — *which is a conclusion about taste standing where a number belonged.* ***A measurement would have shown two identical numbers and gone straight to the cause.***

## The repair, and the rule it leaves

**Markdown answers both prefixes**, which fixes the page and leaves the fault standing. ***The real repair is a rule, and it is one line:***

> ***A SELECTOR IS NAMED BY ONE PREFIX.*** **If a second prefix needs the same selector, the two are one group and should be written as one** — *and where they genuinely cannot be (the base's `h2_` also carries the RULE under a heading, and the encyclopedia overrides that prefix on a different selector), the collision is a debt to write down rather than a thing to route around.*

**This is the mirror of the convention we already hold** — *a prefix names ONE selector, which [broke a build last sprint](../projection/62-sprint-56--the-encyclopedia.md#a2) and presented as an error pointing at an unrelated line.* ***One prefix, one selector; one selector, one prefix.*** **We had half the rule.**

## The third time — 2026-10-02, Sprint 97, and the rule that ends it

**Libby's cover stood forty pixels low on her page and right on every other page of the library**, found by photographing every page against the signed galley and reading the boxes: `.pa-cover` had `margin-block-start: 40px` on Libby's page and `0` on the library's. The two declarations were the library's theme's `.pd-chapter { margin-block: calc(2 * space) }` and its Cover face's `.pa-cover { margin-block: 0 }` — one element, one property, two authors at equal specificity — and the winner was the order the styled components were *created*: on the library's page the theme's component is made before the faces and the face wins; on Libby's page her dark theme, a subclass created in her own door after the faces, is made later and the theme wins. The same `twice-said`, with source order now the order of class creation across files, which nobody editing a face can see. **The repair is the rule [the first development policy](../writing-a-book/07-the-development-policies.md#1--a-face-names-the-kind-with-its-mark-a-theme-names-the-kind-alone) states: a face's rule for its own element names the kind with its mark, `.pd-chapter.pa-cover`, and wins by specificity in every order; a theme's rule names the kind alone.** Applied to every face, seven pages at 0 pixels. Doug, asked whether the implementer could not simply accommodate it: *"Can one suppress the other? Annotations can control expression for this reason"* — and the marks an annotation puts on or takes off are read for what they mean, never taken off to win. The instrument this chapter asked for, a number, is what found it: the photographs, and the box probe that names the element and the rule.

## What to do when a style will not take

1. ***Ask the browser what matched.*** **Never re-read the theme** — the theme is what told you the wrong thing the first time.
2. ***Read the typecheck output for the file you edited***, not only its exit code. **A duplicate member is reported and is easy to scroll past.**
3. ***Check whether the number you want and the number you see are the same as some OTHER number on the page.*** **Two things at exactly 24px is not a coincidence; it is one declaration reaching both.**
