# The Float That Could Not Leave Its Column

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** `demo` · `theme` · `grid-item` · `wrong-altitude`

---

## The symptom

On `/article` the section after the lead would not wrap beside the Manual of Style box, and on `/turing` *Early life and education* would not wrap beside the infobox. The box floated correctly **inside the document that held it** — the lead's own prose wrapped in four line boxes — and every document after that one began at the full column's left edge, `x264 w728`, as though no float existed. Nothing in the DOM looked wrong, no rule was missing, and both boxes already declared `float: right`.

## What it was

**Every prose document was its own grid item, and a float cannot cross from one grid item to another.** The encyclopedia theme makes `main` a `display: grid`; `.pd-book` and `.pd-book > .pd-chapter` are `display: contents`, so each **document** became the grid child, placed by one rule in [`src/encyclopedia/Theme.tsx`](../../package/src/encyclopedia/Theme.tsx):

```
.pd-book > .pd-chapter > .pd-document:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter):not(.pd-footer),
.pd-book > .pd-chapter > .pd-synopsis, .pd-book > .pd-chapter > .pd-index   →   grid-column: 2
```

A grid item establishes an independent formatting context. **So the defect was never about where the box was written or when it was found** — no nesting, no timing and no re-parenting could have fixed it, because each document was a sealed context.

***And the `:not()` roster in that selector was the same missing concept saying itself out loud*** — [What Natural Means](../the-coding-style/07-what-natural-means.md) had already named that chain as a concept nobody had given a name to. The name was **the body**.

## What did not work, and what it cost

- **Writing the whole article as ONE document** so the floats had a single column to flow in. It works, and it dissolved the synopsis and the table of contents to buy the layout — **the reason the team that did it was fired** ([The Cover Is a Cover](../the-type-system/08-the-cover-is-a-cover.md#his-cause)). Reverted at `a35c7f9`.
- **Designing the box to be found and moved** — a mount-phase find through chemistry's `next('mount')`, a registry on the book's scratchpad, the article held invisible until a placement landed. All of it is machinery for a question that was not being asked: *nothing about the box's position was wrong.*
- **Measuring element boxes instead of line boxes.** A block child of a document is the full column wide whether a float reaches it or not; only a **line box** shortens. Two readings looked green against a float that was doing nothing, because the text standing beside it happened to be three short lines.

## What fixed it

**The book was given a part to put the article's chapters in.** [`$Encyclopedia`](../../package/src/encyclopedia/Encyclopedia.tsx) draws them into one box, the theme places **that box** in the text column, and the `:not()` roster is gone. One formatting context now holds every chapter of the article, so a format that says `float: right` reaches the prose that follows it — *and neither format changed.*

**Measured, red by construction and green by probe:** a line put into the chapter after the manual comes out **374 wide, ending at x638** against the float's left edge at **682**, and **676** wide below the float. Before, each document reported `grid-column: 2` at `x264 w728` and no float could shorten anything outside its own.

## Prevention, and it kills the class

- ***Before treating a layout failure as a placement problem, ask what formatting context each piece is in.*** A grid item, a flex item, `overflow` other than visible and `display: flow-root` all seal one — **and the seal is invisible in the DOM.**
- ***Measure line boxes, never element boxes, when the question is whether text flows beside something.*** `Range.getClientRects()` answers it; `getBoundingClientRect()` on a block never will.
- ***A `:not()` roster inside a placement rule is the tell that a part of the page has no name yet.*** Name the part and the roster dissolves.

## Where it is recorded

[Sprint 67](../projection/73-sprint-67--the-flow-the-book-holds.md), which built it; [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md#the-look), which carries the rule for a consumer; [Sprint 65](../projection/71-sprint-65--the-encyclopedia-finished.md), whose U5 this closes.
