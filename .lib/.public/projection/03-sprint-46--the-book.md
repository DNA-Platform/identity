# Sprint 46 — The Book

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The book level of the composition model: `$Chapter` (composition of sections), and — per Doug's design — **cover, synopsis, and index as three kinds of chapter**. A `$Book` is a composition of chapters that must include a cover (its canonical) and a synopsis, because a book is **`$Indexable`** — it holds its own synopsis so an index can compose automatically. `$Literature` (composition of books) follows within the sprint. The demo settles the book-as-folder organization: the book and each chapter as separate files, composed DI-style.

## The first increment — as built and corrected (2026-07-30)

- **`$Chapter`** — `$Referent` implementing `$Composition<$Section>`: sections received DI-style as typed constructor children; `title` reads from its canonical section; readings flatten (`paragraphs`, `words`).
- **`$Cover`, `$Synopsis`, `$Index`** — chapters by inheritance. **Correction from Doug:** an index is the *topical index* of a book — optional, and nothing more was specified; the first build conflated it with a table of contents and invented derivation machinery (book self-injection, entry rules), all of it deleted. `$Index` stands as a bare optional chapter awaiting its real specification.
- **`$Book`** — `$Composition<$Chapter>` and `$Indexable`. Validation at the door, in book language: *"A book requires a cover at position zero — its canonical chapter"* (Doug: position 0, not merely present) and *"A book requires a synopsis — a book is indexable."* The canonical is `parts[0]`, the cover, by validation.
- **`$Indexable`** — the interface, named by Doug over `$Cataloguable`: `{ synopsis: $Writing }`.
- **`$Writing` widened per Doug** — every piece of writing, character to book, carries an assignable **`index`** (linear position; decimals allowed) and a **`parenthetical`** flag (visibility; possibly distinct parsing) — implemented across the composition levels and the book classes, authorable as props and assignable in code.

**Process correction, recorded:** the invented index behavior triggered Doug's standing instruction — *prediction of his needs goes to near zero; when the expectation is unknown, ask.* The TableOfContents (optional, synthesized when absent, listing itself), the chapter summary (a parenthetical section, in validation), and the fate of `$Indexable`'s name are **held as open questions to Doug**, not built.

**Mechanism findings, driven not assumed.** (1) DI-style children work as designed — sections bind into chapters and chapters into books as typed spread arguments, nested to any depth. (2) **The authored tree is the source of truth**: re-authoring a *held instance* as a child re-runs its bond constructor with the new element's (empty) children, minting empty content over it — so composition is done with *elements, nested, each carrying its own children*, never with pre-evaluated instances passed around. (3) A bond-constructor refusal is **captured for display** in dev (`$devError$` on the instance; production throws) — the Lab can render a refused book. (4) Cross-entry symbol identity does not survive the dual bundle (the `/symbolic` entry's `$devError$` is a different Symbol than the main entry's) — flagged as a framework finding; tests read the symbol by description.

Green: 37 lib tests, 0 type errors; the book spec covers DI binding, canonical-by-role, both refusals, indexability, the deriving index, flattened readings, and the whole-book render.

## Open in this sprint

`$Literature`; the book-as-folder demo (the shelf and the reading view — the sprint's arrangement); chapter titles beyond the canonical-section reading; the cross-entry symbol finding to chemistry's record.

*(Written at sprint start; to be completed at the retro.)*
