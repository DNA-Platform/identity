# Figure

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Written 2026-09-28 with U3 of [Sprint 89](../projection/94-sprint-89--figures.md); the code is [`src/figures/Figure.tsx`](../../package/src/figures/Figure.tsx), the promises [`.tests/figure.test.tsx`](../../package/.tests/figure.test.tsx).***

---

## What it is

**A Figure is the letter that interfaces an append.** Doug, 2026-09-28: *"a view-like component like Next… you can specify an input to the resource system, or you can give it contents or both, and it puts the resource content at the end of its text."* It is a Letter, so it stands anywhere a letter may and takes annotations as any letter does — *"we want annotations to work in Symbols too"* — and it wears `pd-figure`. It names an append of its chapter by the same two words the append carries, written as attributes, and draws that append's contents after whatever the author wrote in it; written with contents and no name, it is its own literal.

| member | what it is |
|---|---|
| `$identifier` · `$type` | which append: `<Figure identifier="version1" />` names one by identifier, any type; `<Figure type=".ts" />` names the one whose identifier is empty |
| `chapter`, Writing's | the chapter it stands in; the figure's own walk, `chapter`, went 2026-09-30 when the reading became Writing's |
| `names` | whether it names an append at all |
| `append` | the Append it interfaces, among the chapter's annotations |
| `contents` | that append's text, copied |
| `write()` | the author's own text, then the contents — the general form every figure draws through |
| `FigureSpecification` | **a figure names an append its chapter holds** — *"whatever base class interacts with a resource throws if it's not found"* |

## How it is extended

- **A figure of your own is a class under Figure** that overrides `write()` — drawing `super.write()` inside the element it wants, or reading `this.contents` to run the file it prints — and marks itself in `$Define`. [Code, Image and Svg](03-code-image-and-svg.md) are the three that ship, and the shape a library's own follows; *"we want to support many types of figures in our writing."*
- **A figure that runs what it shows** is v1's Build book's pattern and a library's to write: the file beside the chapter imported as a module by the chapter's book class, and printed by a Code figure in the chapter, so *"a wrong rule draws a wrong tree."*
- **A format on a figure dresses it**, in front, as on any letter; a Block figure stands as a block, an Inline one in the line.
- **Names are attributes and contents are the author's**, so a figure may be named and written at once; naming by content would have taken the contents' place.

## Promises

Six in [`.tests/figure.test.tsx`](../../package/.tests/figure.test.tsx): named by identifier it draws the append's contents in a letter wearing its mark; named by type alone it finds the empty identifier; given contents it draws those, and given both its own first; a Format in front dresses it; it names an append its chapter holds and says so when it does not; it exposes the append and its contents.

## Gate

Measured 2026-09-28: the package 302 of 302.

**Names.** Doug's: `Figure`, `identifier`, `type`. Ours, flagged: `names`, `append`, `contents`.
