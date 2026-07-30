# Sprint 46 — The Book

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The book level of the composition model: `$Chapter` (composition of sections), and — per Doug's design — **cover, synopsis, and index as three kinds of chapter**. A `$Book` is a composition of chapters that must include a cover (its canonical) and a synopsis, because a book is **`$Indexable`** — it holds its own synopsis so an index can compose automatically. `$Literature` (composition of books) follows within the sprint. The demo settles the book-as-folder organization: the book and each chapter as separate files, composed DI-style.

## The first increment — as built (2026-07-30)

- **`$Chapter`** — `$Referent` implementing `$Composition<$Section>`: sections received DI-style as typed constructor children; `title` reads from its canonical section; readings flatten (`paragraphs`, `words`).
- **`$Cover`, `$Synopsis`, `$Index`** — chapters by inheritance. The index is the derived one: the book hands itself to its index at the door (`index.book = this`), and `entries` reads fresh from the book's chapters — every chapter except the cover and the index itself; v1 entries are titles, growing synopses when chapters become indexable.
- **`$Book`** — `$Composition<$Chapter>` and `$Indexable`. Minimal validation at the door, in book language: *"A book requires a cover — its canonical chapter"*; *"A book requires a synopsis — a book is indexable."* **The canonical is the cover by role, not by position** — authored anywhere among the chapters, it is still what the book presents first.
- **`$Indexable`** — the interface, named by Doug over `$Cataloguable`: `{ synopsis: $Writing }`.

**Mechanism findings, driven not assumed.** (1) DI-style children work as designed — sections bind into chapters and chapters into books as typed spread arguments, nested to any depth. (2) **The authored tree is the source of truth**: re-authoring a *held instance* as a child re-runs its bond constructor with the new element's (empty) children, minting empty content over it — so composition is done with *elements, nested, each carrying its own children*, never with pre-evaluated instances passed around. (3) A bond-constructor refusal is **captured for display** in dev (`$devError$` on the instance; production throws) — the Lab can render a refused book. (4) Cross-entry symbol identity does not survive the dual bundle (the `/symbolic` entry's `$devError$` is a different Symbol than the main entry's) — flagged as a framework finding; tests read the symbol by description.

Green: 37 lib tests, 0 type errors; the book spec covers DI binding, canonical-by-role, both refusals, indexability, the deriving index, flattened readings, and the whole-book render.

## Open in this sprint

`$Literature`; the book-as-folder demo (the shelf and the reading view — the sprint's arrangement); chapter titles beyond the canonical-section reading; the cross-entry symbol finding to chemistry's record.

*(Written at sprint start; to be completed at the retro.)*
