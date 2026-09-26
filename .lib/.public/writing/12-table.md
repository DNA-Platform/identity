# Table

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-26 with U7 of [Sprint 84](../projection/90-sprint-84--means-and-the-table.md#u7), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`Table.tsx`](../../package/src/writing/Table.tsx), the promises [`.tests/table.test.tsx`](../../package/.tests/table.test.tsx).***

---

## What it is

***"A table is a way of interpreting a composition, and the attribute can handle annotating the various contents as needed."*** — Doug, 2026-09-26. **A Table is an annotation said of a composition that reads it as a grid: its rows are the composition's parts, its cells a row's parts, and it marks each with the classes a grid library would, by authorship.** It is a style and nothing more — *"Table is a stylistic thing, the table of contents is an attribute, the links are dynamic, but the three can work together"* — so a written table of contents wears one, and so may any section or paragraph.

| member | what it is | cited |
|---|---|---|
| `$start` · `$rows` · `$columns` | props, written `start`, `rows` and `columns` as `$is` is written `is`: where the rows begin among the parts, and how many rows and columns the writer says there are | *"This has to be configured as a prop: $start: number, start = 1 would skip the canonical, and we can make table smart enough to typecheck for sections and chapters and set start to 1 if undefined"* |
| `composition` | its parent when that is a composition, typed as Title's chapter is | the code pattern: a known parent is typed by a property |
| `start` | `$start`, or 1 past the canonical when the composition is a section or a chapter, else 0 | his words above |
| `rows` · `columns` | the parts from `start`; `$columns`, or the widest row | *"rows its parts, cells their parts"* |
| `note()` | the sheet, a global style: `.pa-table` a grid, `.pa-row` `display: contents` so cells land in the table's columns, and for one to twelve tracks `.pa-cols-N`, `.pa-col-start-J` and `.pa-col-span-K` | copied from Bootstrap's `row`, `col-N` and Tailwind's `grid-cols-N`, `col-start-N`, `col-span-N` — *"study the class layout of the popular grid libraries and copy it for pa- classes"* |
| `defines(writing)` · `erase(writing)` | `pa-table` and `pa-cols-N` on the composition, and taken back | [an annotation marks its presence](10-developing-an-annotation.md#mark) |
| `$Bound()` | **once, when the book is whole:** `pa-row` and `pa-row-start-I` on each row, `pa-col` and `pa-col-start-J` on each cell, and `pa-col-span-K` on the last cell of a row shorter than the table — then `super.$Bound()` | *"Mark at bound is great"* — [why](#why-the-marks-are-the-binds) |
| `TableSpecification` | **a table is said of a composition**; **a table has the rows it says**; **a table has the columns it says** | `$rows` and `$columns` *"validate"* |

### In use

```tsx
<Section>
    <Table />
    <Heading>The Catalogue</Heading>
    <Paragraph><Word><Content>[[ The Log ]]**</Content></Word>: <Word><Content>$[ The Log / Synopsis ]</Content></Word></Paragraph>
    <Paragraph><Word><Content>[[ Some Projects ]]**</Content></Word>: <Word><Content>$[ Some Projects / Synopsis ]</Content></Word></Paragraph>
</Section>
```

*The test library's catalogue, [`the-library/.table.tsx`](../../package/.binding/.test/the-library/.table.tsx): the heading is the section's canonical and no row, each paragraph a row, each Word a cell — drawn on the bound page as `pa-table pa-cols-2`, three rows, six cells.*

## <a id="why-the-marks-are-the-binds"></a>Why the marks are the bind's, and not the define's

**Marked in `defines`, a Table cost two draws for every row and cell, before paint and with no paint.** Measured 2026-09-26 with a probe logging every `view()`, `defines` and `erase` in order: the bond-time define costs nothing, and the first two views of the section rewrite the rows' classes before any row has read them; but chemistry's third view of the section — [pass C, the settle-effect](../../../chemistry/.lib/particle/12-the-three-passes.md) — calls `view()`, which runs `define`, which erases and re-adds every row's classes after the rows have finished their own three passes. `Collection` is `@represented()` and sets its values on every change, and chemistry wakes a reader on a set, not on a change of value, so each row is drawn and checked again. *In time: half a millisecond a marked child in happy-dom; 5 rows by 2 cells +7ms, 20 by 4 +47ms, 50 by 4 +196ms, a fifty-row catalogue doubling its time to first paint.*

**At `$Bound` nothing has drawn**, so the marks are news to no one, and with `defines` and `erase` touching only the composition, the third pass writes nothing to a child. Measured: the control's count, at every size. *The cost of the choice: a section built alone, never bound, wears `pa-table` and its rows no marks; and a Table taken out after the bind leaves the marks the bind gave, since a bind has no erase. Every page is a book.* Doug's question of the mechanism stands for chemistry — *"I worry that the problem is that things are running based on something being set and not something being changed"* — and the sprint record carries [the articulation](../projection/90-sprint-84--means-and-the-table.md#plan): writes made during a draw to other chemicals held until that draw ends, and compared before anyone wakes.

## How it is extended

- **A library's own grid** is a subclass with its own `style`, as a Format's is; the marks are the same, so a sheet written against `pa-` classes reads any Table.
- **Which parts are rows** is `start`, and a kind of composition that keeps its canonical elsewhere overrides it.
- **What a row must hold** is the specification; a table that must be square says so in a subclass's.

## Promises

Seven in [`.tests/table.test.tsx`](../../package/.tests/table.test.tsx): a section interpreted as a grid, its paragraphs the rows and their words the cells, the heading no row; a paragraph's sentences its rows, every one unless `start` says otherwise; a short row's last cell spanning what remains; a section built alone wearing `pa-table` and no marks; the rows and columns it says checked, and a composition required; taken out, the section's classes taken back and the bind's marks kept; drawn, the section wearing `pa-table` with its six cells inside. One in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx): a book whose section wears a Table draws and paints exactly as one whose section does not. In the compiler's [regression](../../package/.binding/.test/binding.regression.ts): the library's catalogue drawn as a grid on its bound page.

## Gate

Committed as `92cbac9` marking in `defines`, and as `bf9a559` at `$Bound`. Measured 2026-09-26 after the second: the package's typecheck 0 errors and 234 of 234; the compiler's typecheck 0 errors, unit suite 100 of 100 and regression 22 of 22; the library's catalogue photographed as a grid.

**Names.** Doug's: `Table`, `$start`, `$rows`, `$columns`, and the classes `pa-table`, `pa-cols-N`, `pa-row`, `pa-row-start-I`, `pa-col`, `pa-col-start-J`, `pa-col-span-K`. Ours, flagged: `TableSpecification` and its rules; `start`, `rows` and `columns` as the readings of the props.
