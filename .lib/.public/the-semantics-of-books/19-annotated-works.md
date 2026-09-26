# Annotated Works, and What We Built Beside Them

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-09-26 at the close of [Sprint 83](../projection/89-sprint-83--memory-management.md), on Doug's word.***

---

***"I recommend you find writing-based components and language even in the test library. Limit your lexicon to things connecting to writing and find beautiful examples and see if anything you are doing is close. You might end up seeing analogies between annotated works of literature and cells with their genome!"*** — Doug, 2026-09-26.

**The method is one question asked of everything we built: which annotated work did this first, and how close are we?** Books have carried annotations for as long as there have been books — rubrics, glosses, running heads, errata, colophons — and each is a component someone designed, tested on readers for centuries, and named. Where we built something one of them already is, the name and the shape are waiting. Where we built something none of them is, that is worth knowing too. *Genetics stays the structural guide — what parts exist and how they act on each other — and writing gives every name: [a word used to explain is never a member](../the-coding-style/03-the-coding-style.md#code-patterns).*

## The lexicon, audited

**Every name the test library and this sprint's tests use, and whether it is writing's.** The compiler's plain helpers keep plain names — its register asks for clarity, and forcing book words onto them was a fault once already — so a book word is offered only where it is exact.

| name | where | writing's? | the book word, where it is exact |
|---|---|---|---|
| `RunningHead` | [the test library](../../package/.binding/.test/the-library/1-the-shelves.tsx.tsx) | **yes** — the line at the head of every page naming its book | — |
| `Typewritten` | [the paper's book](../../package/.binding/.test/paper/.book.tsx) | **yes** | — |
| `Theme` | [the library's book](../../package/.binding/.test/the-library/.book.tsx) | Doug's | — |
| `bound`, `printed`, `read`, `drawn` | [staging](../../package/.binding/.test/staging.ts), the regression | **yes** — the bindery and the press | — |
| `staged`, `Staged`, `held` | staging, the regression | no — the theatre | **galley** — the trial impression pulled to be corrected before a book is bound; one galley is broken on purpose, one is measured |
| `fixture` | staging | no — the workshop | **copy** is the printer's word for the text set from, but it says too little; no exact word, so it stays |
| `duplicated`, `Copies` | staging | no | none exact — a book set again under N names is no edition — so they stay |
| `$CountingBook` | [the render promises](../../package/.tests/renders.test.tsx) | no | **ledger** — a book that keeps count |
| `$Reading`, `$Unreading`, `$Looking` | the render and book promises | reading is writing's own | — |
| `One` … `Four`, `The Table` | [the grid promise](../../package/.tests/table.test.tsx) | entries from no work | **the First Folio's Catalogue** — the plays under Comedies, Histories and Tragedies |
| `Budding`, `Growing`, `Grafting` | older promises | no — the garden and the cell | each to be read against what it tests |

## Annotated works beside what we built

| the work | what it does | what we have | how close |
|---|---|---|---|
| **The running head** | the book's or chapter's name set atop every page by the compositor, never by the chapter's author | the [RunningHead](../library/01-books-in-annotations.md#any-writing-reaches-its-book), reading `this.$book` so nothing in the chapter names its book | **close** — and it was the name we already had |
| **Rubrication** | red ink marking where a thing begins, or what kind of thing it is — a *rubric* | `pa-cover`, `pa-synopsis`, `pa-table-of-contents`: [an annotation marks its presence with a class](../writing/10-developing-an-annotation.md#mark) | **close** — a `pa-` class is a rubric |
| **The First Folio's Catalogue**, 1623 | the table of contents set as a grid, the plays under Comedies, Histories and Tragedies — read column by column | a table's [`contents`](../library/03-cover-synopsis-and-table-of-contents.md), in the order the page shows their names | **close** — the order follows the page, so a grid written a column to a section reads as the Folio reads |
| **The incipit** | a medieval work known by its opening words | a composition's canonical is its first part — a section's heading, a chapter's title | **close** |
| **The errata slip** | corrections bound in after printing, applied by the reader, the type never reset | [`$is`](../writing/05-the-writing-class.md) — the changes and not the set, stood in front of what was written and taken back whole | **close** |
| **The colophon** | the printer's note at the end: who made the book, when, and where | the binder's `record` phase and the manifest it writes | **close in what it holds**; drawn on no page |
| **Galley proofs** | trial impressions pulled to be corrected before binding | the regression's staged copies — [one broken on purpose, one bound whole](../the-catalogue-and-the-specification/07-the-binder.md#test-library) | **close**; the name is the theatre's |
| **The catchword** | the next page's first word printed at the foot of this one | `after(this)` — an annotation reaching what stands behind it | **a likeness**, not a component |
| **The Glossa Ordinaria** | the text with glosses between its lines and around it | every annotation's note is drawn after its writing — and hidden by the test library's Theme | **partial** — there is no margin |
| **The Talmud page** | the text at the center, Rashi and Tosafot around it, glosses on glosses, a reference apparatus on every page | annotations of annotations — an Author carries its Reference; Means and Mention | **partial** — the page has no shape; every composition draws as a span |
| ***Pale Fire***, 1962 | a poem, a commentary that overruns it, an index that is a web of its own | Narrative taking the Parentheticals behind it out of expression; the catalogue | **partial** — no index chapter yet |
| **The palimpsest** | a page scraped and written over, the under-text still legible | `erase` takes back exactly what `defines` put | **the contrast, by design** — our pages keep no trace |

**The three partial rows are one gap.** The Glossa, the Talmud page and *Pale Fire* each need what [the front matter already flags](../library/01-books-in-annotations.md#what-is-not-drawn-yet): the page's shape — a center, margins, a place beside the text for what is said of it. They are the most beautiful annotated works there are, and they are what that flag is for.

## Seen as a cell

**Read only for structure — the names stay writing's.** Doug's likeness holds further than expected: the sequence and the annotations on it behave the way a text and its annotations do.

| in an annotated work | in a cell |
|---|---|
| the text | the sequence |
| an annotation said of a passage | a feature annotated on the genome — bioinformatics' own word for it |
| a rubric: a mark that changes no word | an epigenetic mark — methylation, a histone mark — changing no base, read by the machinery |
| a parenthetical: on the page, and hidden | an intron: transcribed, then spliced out of what is expressed |
| a gloss that sets another aside | a repressor silencing a gene |
| the errata slip, applied over the text | RNA editing: the transcript changed, the genome not |
| the page as drawn | the protein — what is expressed |
| the binder, which reads what was written and binds it | the ribosome, which binds the transcript and reads it |

*Two rows are exact enough to guide a design. **A rubric is an epigenetic mark:** each marks without rewriting, and each is read by whatever comes after — which is why a `pa-` class belongs to an annotation and never to the text. **A parenthetical is an intron:** present in what was written, absent from what is read — which is why a table can hide its apparatus entries and the compiler still read them.*

## What it asks of Doug

The renames the audit offers — **galley** for the staged copies, **ledger** for the book that keeps count, **the First Folio's plays** for the grid's entries — and whether the page's shape, with the Glossa and the Talmud page as its examples, is the next thing to build.
