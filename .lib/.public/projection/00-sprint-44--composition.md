# Sprint 44 — Composition

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The first recorded sprint on this branch, and the branch's real beginning: turn [*The Semantics of Books*](../the-semantics-of-books/.cover.md) from a derivation into code. The goal is **polished, fully-tested versions of every `@dna-platform/lib` class** — the composition chain as the spine, the reference and book classes built on it — each one answerable to a test that states what it promises.

## Why this is a *composition* sprint — and how the framework detour began

Building the composition chain is where the two-week framework detour started, and naming it is half the point of this record. A composition is **made of components its author never wrote**: a `$Sentence` is a run of `$Word`s, but you author `<Sentence>Call me Ishmael</Sentence>` as *text*. For the class to render its composed children, it has to **materialize them** — and $Chemistry had no way to turn an authored element into a live instance, nor to carry a run of authored inline markup (`<Sentence>Call me <b>Ishmael</b></Sentence>`) as one thing. So we detoured into the framework and built the two missing primitives — `$()` eval and the block/inline content model — recorded as this sprint's [Chemistry chapter](../../../chemistry/.lib/projection/43-sprint-44--eval-and-the-block-model.md). They are done and green. This sprint is what they were *for*.

The off-track lesson, plainly: we began implementing [Sprint 43](../../../chemistry/.lib/projection/42-sprint-43--the-library-hosts-itself.md)'s design without opening the sprint that tracks it, and implementing it forced framework work that also went unrecorded. Both were real; neither had a home in the record until now.

## The register — what exists, and the state it's in

The [package](../../package/) is drafted, not finished. `index.ts` exports only a fraction of what is on disk.

- **The composition chain** — [`text/Composition.tsx`](../../package/src/text/Composition.tsx). `$Composition<T>` (`copy` · `parts` · `canonical` · `compose` · `select`) with the ladder `$Character → $Word → $Sentence → $Paragraph → $Section → $Document`. Exported and working, but `split()` per level is **provisional v1 tokenization** the code itself flags as an open domain decision, and authored pieces do not yet round-trip inline markup through blocks/eval.
- **The reference classes** — [`ref/`](../../package/src): `$Referent`, `$Reference`, `$Name`, `$Link`. Exported. The derived inverse (`citedBy` reading other referents' `refersTo`) is the design's load-bearing case for why $Chemistry is *forced, not chosen*, and is not yet built.
- **The book classes** — [`book/`](../../package/src): `$Book` is exported; `$Chapter`, `$Cover`, `$Subject`, `$Author`, `$Synopsis`, `$Title` **exist as files but are not exported or tested**. Per the design, Cover and Table of Contents are `view()`s over the same composition, not separate structures — native to `$Chemistry`'s `view()`/`look()`/perspectives.
- **Library / text / tools** — `library/Literature.tsx`, `text/Summary.tsx`, `text/Writing`, `tools/html.ts` (`text()`). Drafted; mostly unexported, untested.

## Owners

Per the [task-ownership rule](../../../../.claude/library/library-tree/03-sprints.md#task-ownership), every task has an explicit owner.

- **Arthur — runs the sprint.** Coordination, this Projection record, and keeping the class register coherent against *The Semantics of Books*: names general to the library (never "SRT"), and every class *forced, not chosen*.
- **Cathy & Queenie — lead.** Cathy realizes the composition model in the framework — authored markup round-tripping through `$()` and blocks. Queenie makes every class answerable to a test that states its promise, not its mechanism.
- **Libby et al — the branch.** The `@dna-platform/lib` code itself and its conformance to the design book.

### Tasks

- Polish the composition chain so authored inline markup (text + tags) round-trips through blocks and `$()` without loss; settle the tokenization contract or pin current behavior with a test and mark it open. — **Cathy**, tested by **Queenie**
- A spec-test per composition class — `copy`, `parts`, `canonical`, `compose`, `select`, and each level's `split`. — **Queenie**
- Finish, export, and test the book classes; render Cover and Table of Contents as `view()`s over one composition. — **Libby**, tested by **Queenie**
- Polish and test the reference classes; build or explicitly defer the derived `citedBy` inverse. — **Libby / Cathy**, tested by **Queenie**
- `$Literature`, `$Summary`, and `tools/html` — finish, export, test. — **Libby**, tested by **Queenie**
- Conformance pass: the register in code matches the design book's register; nothing SRT-specific; every class earns its place. — **Arthur / Cathy**

## Done when

- Every exported `@dna-platform/lib` class has a polished implementation **and** a test stating what it promises.
- The composition chain round-trips authored inline markup through blocks and `$()` without loss; the tokenization grammar is either settled or explicitly marked open with a test pinning current behavior.
- The book classes are finished, exported, and tested; Cover and Table of Contents render as views.
- The register in code conforms to [*The Semantics of Books*](../the-semantics-of-books/.cover.md) — general to the library, forced not chosen.
- Green: the `@dna-platform/lib` suite passes and the `tsc` delta is measured, not assumed.

*(Written at sprint start; to be completed at the retro with what was built and what was learned.)*
