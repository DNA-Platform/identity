# The Header Row That Never Matched

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** library · guessed-pattern · unrun-rule
- **sprint:** [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md)

---

## Symptoms

**The library's catalogue, a table, had a header row rule in two sheets and a plain header row on the signed page.** Read on 2026-10-02 while photographing the test library for parity against `library-OngNUK`, the galley Doug signed at Sprint 95: the new galley's header row stood at 11.2 pixels in the labels' voice, the signed galley's at 16 pixels plain — and the signed galley's own sheet carried `.pa-table .pa-row:first-child .pa-col { font-weight: bold; border-block-end: … }` from the base and `.pa-row:first-child .pa-col { font-size: calc(0.7 * …); text-transform: uppercase; … }` from the library's extension. Two rules for a header row, on a page whose header row showed neither.

## What it turned out to be

**`:first-child` named a position, and the position was not the row.** The catalogue is a Section whose first child is its Heading, *Filed under Libby*; the first row is the section's second child. So `.pa-row:first-child` matched nothing, in both sheets, for every sprint since the rule was written, and the header row was always plain. The signed look was the look of a rule that never ran — and parity, measured to the pixel, meant keeping the plain row, since the rule had never been part of what Doug saw.

The grade of [Sprint 96](../projection/101-sprint-96--the-librarians-grade.md#the-grade) had already named `.pa-row:first-child .pa-col` as a fight, *a position where no mark is*; the mark exists — the Table puts `pa-row-start-1` on the first row at the bind — and nobody had switched the rule to it, because the rule's silence looked like a look.

## How it was found

By a number and not by eye: the photographs showed the library's page differing, the box probe showed the header row's `font 16px` before and `11.2px` after, and the only way the *new* face's rule on the mark could differ from the old sheets' rules on the position was that the position had never matched. Reading the signed sheet confirmed it in one grep.

## Why no gate caught it

A rule that matches nothing is green everywhere: the suite asks whether the rule is *in* the sheet, which it was, and never whether it *applied* to an element. The browser drive measures what is shown, and a plain row looked like a design.

## The repair, and the rule it leaves

The Table's face names the mark, `.pa-row-start-1 .pa-col`, when a header look is wanted, and the test library wants none for parity. The rule is [the seventh development policy](../writing-a-book/07-the-development-policies.md#7--every-rule-names-a-mark-reaches-by-descendant-and-takes-its-numbers-from-the-theme): a rule names a mark, never a position — and the check that would have caught this is the one owed, a promise that every rule in a library's sheet matched at least one element of a bound page.
