# Sprint 46 — The Book

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The book level of the composition model: `$Chapter` (composition of sections), and — per Doug's design — **cover, synopsis, index, and table of contents as four kinds of chapter**. A `$Book` is a composition of chapters that must open with its cover (the canonical, position zero) and include a synopsis. `$Literature` (composition of books) follows within the sprint. The demo settles the book-as-folder organization: the book and each chapter as separate files, composed DI-style.

## The law of the level — Doug's answers, verbatim in effect (2026-07-30)

- **Cover at position zero** — validated at the door: *"A book requires a cover at position zero — its canonical chapter — and a synopsis."*
- **`$Writing` carries `index` and `parenthetical`** — every piece of writing, character to book: an assignable linear position (decimals allowed) and a visibility flag (parentheticals may parse differently later), authorable as props and assignable in code.
- **The index is the topical index** — an optional chapter, nothing more specified. **Correction:** the first build conflated it with a table of contents and invented derivation machinery, all deleted; `$Index` stands bare awaiting its real specification. This triggered Doug's standing instruction — *prediction of his needs goes to near zero; when the expectation is unknown, ask.* The rest of this level was built from his answers, not guessed.
- **The table of contents synthesizes as a fresh reading** — when no `$TableOfContents` is authored, `book.tableOfContents` mints one on each read from the live chapters; derived, never stored, nothing inserted into the book's parts. When one is authored, the book reads that one.
- **The table of contents lists every chapter — itself among them**, the cover included. The synthesized one places itself directly after the cover.
- **Validation goes through `valid`** (Doug, mid-sprint): every level states its law as `static valid(material): boolean` — the same grammar as the parsed levels, where each container filters by its parts' `valid` (`$Word.valid` in `$Sentence.parts`, up the chain). At the authored levels the door consults the class's own `valid` and refuses in one sentence; the level above stays free to consult the same law (`$Literature` will read `$Book.valid` exactly as `$Sentence.parts` reads `$Word.valid`). `$Chapter.valid` = has a parenthetical section; `$Book.valid` = cover at zero and a synopsis present; `$Synopsis`/`$Index` doors delegate to `$Chapter`'s door — one law, no duplication.
- **Every chapter has a summary; a summary is a parenthetical section** — validated at the chapter's door. The **cover's summary is its title**, minted fresh as a parenthetical section, so it is exempt from the summary law — and our answer to Doug's question *does the cover need validation?* is: **it needs a title** (`$Cover.valid` = has at least one section; every section's own door already demands a title, and the book's title and the cover's summary both read from it). Why not more: everything else a cover shows derives. The table of contents' summary is recorded intent, not yet built: *the cover's synopsis as a clickable link showing the book's title, navigating to the cover* — waiting on `$Reference`/navigation.
- **The default view of a chapter omits its parentheticals** — the first use of `parenthetical` deciding visibility.
- **`$Indexable` is dropped** — the interface deleted; the synopsis validation stays on `$Book`.

## Decisions of ours, flagged for Doug's eyes

Small mechanics his answers required but did not specify: (1) the book's door hands an *authored* table of contents its book, so `entries` can read the chapters; (2) the *synthesized* one seats itself after the cover — a placement we chose; (3) a sectionless table of contents titles itself `Table of Contents`; (4) `$Chapter.canonical` now reads the first **non-parenthetical** section, so a summary-first chapter still titles correctly — undirected, reviewable.

**Mechanism findings, driven not assumed.** (1) DI-style children work as designed — sections bind into chapters and chapters into books as typed spread arguments, nested to any depth. (2) **The authored tree is the source of truth**: re-authoring a *held instance* as a child re-runs its bond constructor with the new element's (empty) children, minting empty content over it — so composition is done with *elements, nested, each carrying its own children*, never with pre-evaluated instances passed around. (3) A bond-constructor refusal is **captured for display** in dev (`$devError$` on the instance; production throws) — the Lab can render a refused book. (4) Cross-entry symbol identity does not survive the dual bundle (the `/symbolic` entry's `$devError$` is a different Symbol than the main entry's) — flagged as a framework finding; tests read the symbol by description.

Green: 48 lib tests, 0 type errors; the book spec covers DI binding, canonical-at-zero, the refusals (cover missing, cover displaced, synopsis missing, summary missing, title missing), the laws as readable statics, the chapter summary and the cover's title-as-summary, the synthesized and authored table of contents, parenthetical visibility in the default view, index assignment with decimals, flattened readings, and the whole-book render.

## Open in this sprint

`$Literature`; the book-as-folder demo (the shelf and the reading view — the sprint's arrangement, now with the parenthetical toggle and the skim lens); the closing team discussion Doug asked for — the final composition files against our first drafts, and the audit of the new code; chapter titles beyond the canonical-section reading; the cross-entry symbol finding to chemistry's record.

*(Written at sprint start; edited as the sprint moves.)*
