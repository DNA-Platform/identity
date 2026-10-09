# The Layer That Took the Theme's Rules

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** library · equal-weight
- **sprint:** [Sprint 104](../projection/109-sprint-104--parts-and-the-manual.md#regressions)

---

## Symptoms

**Doug, 2026-10-09, an hour after the sprint closed with its page measured the same: *"Well I just launched 4242 and saw my library is broken."* Then: *"The arrows on the reference manual expand and collapse in the file tree don't work. Little things are different. There is regression."* And: *"Yes the styling is off in the library catalogue."*** Three things, no error anywhere: the arrow on a chapter's row in the manual's tree turned and the row took `pa-folded`, and its files stayed shown at their height; every file row in that tree stood twenty-eight pixels further right than before, dimmed to a little over half, and a chapter's second file looked exactly like its first where before it had not; and the catalogue opened on a bare column where it had opened on a card — the jacket small, the title in the sans, "filed under itself" in plain type, *by* and its name with no space between, the links underlined, the read-on button gone. Under the catalogue's contents the part's folder stood with its heading at nine and a half pixels, fifteen pixels below its own icons, directly after the contents where the appendix had stood at the foot.

## What it turned out to be

**One shape, three times: the manual's rules had moved from its theme into the Folder's own layer, every rule took one prefix, and the weight the theme's rules had earned one by one was gone.** [Solutions 109](109-the-fold-that-lost-to-the-books-prefix.md) had taught that a fold rule given the book's prefix must take it with every state rule on the same element or it is demoted; the move into the layer demoted them all at once.

- **The entry's fold.** The Folder's `.pa-entry.pa-folded .pd-file { display: none }` and its `.pd-paragraph.pa-entry .pd-file { display: flex }` weigh seven classes each, and the show rule stands later. Before the sprint the fold rule weighed five against three.
- **The file rows.** The base theme's rule for a second word in a row, `.pd-holds .pd-paragraph.pa-entry .pd-word + .pd-word`, sets an automatic start margin, a smaller size and an opacity of 0.55, for the arrow beside a catalogue's row. It never reached the manual's first file because the files stood after the number's label, which is no word; the sprint's row put the files after the twist, which is one, and the rule tied the Folder's six-class file rule and stood later. *It had always reached a chapter's second file, which follows the first*, which is why the pre-sprint tree dimmed `said.tsx` under `code.tsx`, an accident the sprint's probe had noticed and not pursued.
- **The front leaf.** The sprint narrowed the bookshelf's desk rules from `.pd-leaf.pd-open` to `.pd-leaf.pd-desk.pd-open` so that a chapter's leaf would take the base's look, and gave `pd-desk` to the books' leaves in the catalogue's `desk()` and not to the front leaf, which the catalogue draws in `front()` and which is the desk's own card for the library itself.
- **The part's folder in the reading view.** The bookshelf theme's `.pd-holds .pd-section.pa-appendix .pd-heading { font-size: 0.68 }` weighs five with its own hash and ties the Folder's heading rule; the appendix section's fourteen pixels of top padding push the heading down while the twist and the mark stand at the layer's top; and the section's `margin: auto 0 0`, which placed it at the foot of the flex column, does nothing inside the layer's block, since the Folder's layer is now the column's child.

## How it was found

**By binding the library as it stood at the last commit before the sprint and comparing every page against the current one, property by property.** The identity repo's copy at `54859a4` was written over a galley under the binder's galleys folder, bound by the galley's own apparatus and served on 4243; a script loaded each route on both, read thirty-two computed properties and the box of every element under the book, keyed by its path of tags and library classes so that styled-components' hashes do not count, and printed what differed. The catalogue's front leaf showed as eighty-six elements differing in fonts, colours and boxes; the manual showed the file rows. The fold was found by pressing and measuring, a height and a count of files shown, and the rule that won by listing every rule in Chrome that set `display` on the folded file, in sheet order — the method of Solutions 109. The folder's heading by the same listing for `font-size`, and its icons by measuring their centres against the heading's row in all four books, which also showed the manual's Key nine pixels low since before the sprint.

## Why no gate caught it sooner

The sprint's measure of the manual read 144 computed properties on 23 elements at load: no fold, no file row, no second file. The catalogue was measured in its built view, where the front leaf is hidden and the appendix section loses its padding, and never in its reading view. **A set of properties chosen before the change reads what it chose; a page bound before the change reads everything.**

## The repair, and the rule it leaves

The Folder's fold rule and file rule name the paragraph as its show rule does, seven classes, and the file rule says its own opacity; its heading rule names the sentence as the row rules name the paragraph, six, so a theme's appendix heading rule at five no longer shrinks it. The catalogue's front leaf wears `pd-desk`. The bookshelf's theme says in two lines what steps aside for a folder: a folder sits at the foot, `.pd-holds .pd-folder { margin-block-start: auto }`, and an appendix that is a folder keeps no padding above its heading. Bound and driven: the arrows fold to 27 pixels, every folder folds by height, every folder heading in the four books at 13 pixels level with its icons, the catalogue and the story differing from the pre-sprint copy in no property.

**The rule, in two halves.** *When a Format's layer takes over rules a theme held, each rule is given the weight the theme's had earned against the rules it must beat, and a layer standing around a section takes the section's place among its siblings, so what a theme said of the section's placement it must now say of the layer.* *And a sprint that promises a page unchanged proves it against that page bound at the commit before, every element and every property, in every view a reader opens* — [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md#galley).
