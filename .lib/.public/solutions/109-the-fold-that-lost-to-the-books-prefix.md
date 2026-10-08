# The Fold That Lost to the Book's Prefix

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** library · equal-weight
- **sprint:** [Sprint 103](../projection/108-sprint-103--the-manuals-page.md#where-things-stand)

---

## Symptoms

**Doug: *"Bug report - the top level folders in the reference manual do not expand and collapse."*** The chevron turned and its `aria-pressed` flipped, the section took and lost `pa-folded`, and every row stayed shown at its full height, the Key's eight at load included. No error. Two probes had called the fold green before the report: one read the class and not a height, and one pressed a row's chevron for the folder's, because a folder's layer wraps its section from outside, so the first `.pd-twist` inside a section belongs to its first row.

## What it turned out to be

**Three rules set a row's display, and the one that won was the audit's.** Listed by matching every sheet rule on a folded row in Chrome: the base's `.pd-holds .pd-paragraph.pa-entry { display: flex }`; the fold's `.pd-holds .pa-folded .pd-paragraph.pa-entry { display: none }`, which outweighs it; and the audit's `.pd-book .pd-holds .pd-paragraph.pa-entry { display: flex }`, given the book's prefix in [Sprint 103](../projection/108-sprint-103--the-manuals-page.md#where-things-stand) so the theme would beat the tone, which weighs exactly as much as the fold's rule and stands later in the sheet. The fold lost a specificity contest the day the rows learned to say the book first.

## How it was found

By height. A probe pressed each folder's own chevron, `.pd-container.pd-folder > .pd-twist`, and measured the section's height and the count of rows with a height; then `document.styleSheets`, filtered to the rules the row matched that set `display`, printed the three in sheet order.

## Why no gate caught it sooner

The sweep read `pa-folded` and `aria-pressed`, both of which were right. Nothing read what was shown.

## The repair, and the rule it leaves

The two fold rules say the book first too, `.pd-book .pd-holds .pa-folded .pd-paragraph.pa-entry` and `.pd-book .pd-holds .pa-entry.pa-folded .pd-file`. Every folder folds to 35 px with no row shown and unfolds to its height; the Key is folded at load. **The rule: when a theme gives its rules a prefix to outweigh a tone, every state rule on the same element takes the prefix in the same act, or it has just been demoted. And a fold is verified by what is shown, a height and a count, never by a class landing** — Queenie's account of the probe is in [The three steps](../../../../.claude/library/..teamsmanship/..team/queenie/test-architecture/04-the-three-steps.md).
