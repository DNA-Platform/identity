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

## Earn the Diff — the protocol this sprint forced

Eleven corrections from Doug in one sprint, and every one was knowledge the team already owned — its own framework chapters, its own research probes, its own design register. The diagnosis, from the mid-sprint discussion: one mistake, repeated — acting on a guess when the truth was already written down. Five faces of it: coding before reading; treating framework friction as an obstacle to silence rather than the design speaking (the `$Referent` block); certifying outputs while the named mechanism never engaged (green on the raw-children fallback); not verifying what the toolchain actually resolves (the stale chemistry dist); and deleting assumptions without recognizing them as assumptions (`$Writing`).

The protocol, binding for the rest of this sprint and after:

1. **Cite or stop.** No branch edit before the relevant `.lib` chapter is read this session; every non-trivial decision in a report carries its citation — design book, framework chapter, or Doug's directive. No citation = stop and ask.
2. **Friction is the design speaking.** An invariant error or a forced cast is a mandatory stop: say what the framework is saying, check the design book, then act. Never restructure the ontology to silence an error. Surviving `as any` casts are justified aloud; the count trends to zero.
3. **Prove the mechanism, not the output.** A test whose title names a mechanism asserts that mechanism. After any dependency change, rebuild and probe what consumers resolve before concluding anything.
4. **Search our own findings first.** Branch library and research probes are consulted before designing; the re-reading reflex re-arms at every turn boundary.

**Amendment (same sprint, after the protocol failed its first test).** A content-taking class constructor was written *after* the protocol, citation attached — proof that rules 1–4 police edits but never require understanding. The failure they missed is generalization: deriving each decision from what the thing IS, rather than patching the latest correction. Three rules that target the model itself:

5. **Model first.** Before a class is touched, its model is stated in the room *before* the diff — what it is in the framework's ontology: born how, content arrives how, renders how. Every member of the class must be derivable from that statement; a member that is not derivable is deleted. (Run on the composition ladder, this one sentence — "born only through synthesis; content is one block through the bond constructor; Character/Word/Sentence are inline" — deleted the constructors, killed the `?? children` fallback, and produced the `inline` fields the parser needed.)
6. **Use cases come from the design, never from tests or old code.** Tests are re-derived from the model on every change, never preserved as requirements — `new $Word('hello')` survived two rewrites because the team's own tests kept defending it.
7. **Connect the sprint to itself.** What this sprint built is the first candidate tool for every problem in it — eval was already the minting path; the inline flag was already the parser's contract.

**Second amendment — the loop, after rules alone failed twice.** Self-applied rules kept Doug as the only reviewer, at the most expensive point: after the code. Zero questions were asked all sprint; defects sat visible in the team's own reports. Rules don't fix that; a turn shape does. Every increment now runs **Restate → Question → Synopsis for sign-off → Build → Self-review → Report**: restate the ask and what it excludes; ask the genuinely open questions instead of guessing; present a ten-line synopsis (model sentence, per-class deltas, the pinning tests) and get sign-off *before any file changes*; build; then a suspect-pass over the diff — every member derived or deleted, every `??`/cast/branch interrogated as an invented use case — with findings reported honestly, unresolved ones included. Green is necessary, never sufficient; a report without findings is a report that wasn't reviewed.

## The retro — done, 2026-07-29

**What was built.** In $Chemistry: `$()` eval of elements to live instances; the `$Html<'string'|'number'|'block'>` content model with inline-run grouping at the bond constructor; `$check(x, 'block')` with the empty-block mint; and the `$Html` enum bug fixed at the computed-type level (`$Content`/`$HtmlTag` in `types.ts`), so the content-node kinds travel to consumers — 622 green. In `@dna-platform/lib`: `$Writing` and `$Composition<T extends $Writing>` as pure interfaces; the ladder `$Character` (a writing, the floor) → `$Word` → `$Sentence` → `$Paragraph` — inline by zero-arg constructor, each parsing its level out of `copy`, validation filtering at the parse — and `$Section`, block-level, whose required title is the first element of its block and whose canonical is the paragraph that has only the title. Content enters once, as one live block at the bond constructor; every reading is fresh; nothing derived is cached. Tools: `text`, `enclose`, `display`. `$Document` removed as unneeded. 28 tests green, 0 tsc errors, comment-free, formatted to the standard.

**What was learned.** The corrections ledger above, condensed: levels are parsed, never authored — the creator of a paragraph does not specify sentences; the block is the one door and the one held thing; a chemical is born only through synthesis, so class constructors stay empty except to declare intrinsic nature (inline); composition is an interface because being-a-composition is a role, while lineage belongs to classes; and the working protocol that survived is the loop — restate, question, synopsis for sign-off, build, self-review — with Doug at the cheap points, not the expensive ones.

**Open at close.** The JSX authoring surface for titled sections; the title-text-in-`copy`/`parts` interplay; the negative title case unpinned; grammar edges ("Mr.", "3.14") unpinned; `compose`/`select` undecided; `canonical` typed `T` but undefined on a standalone empty; the reference and book classes untouched — the register's next material.
