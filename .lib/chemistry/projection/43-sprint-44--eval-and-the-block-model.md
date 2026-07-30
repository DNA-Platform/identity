# Sprint 44 — Eval and the Block Model

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

$Chemistry's contribution to a sprint whose real subject lives on the [public-library branch](../../../.public/.lib/projection/01-sprint-44--composition.md): the two primitives the composition classes could not be written without. A `$Sentence` is composed of `$Word`s the author never wrote — they authored *text* — so the class must materialize its own children, and carry a run of authored inline markup as one thing. Neither was possible. This sprint made both possible; the composition work is where they are spent.

## What was built

**`$()` eval — an element to a live instance.** `$(<Word>hello</Word>)` runs the real bond-constructor synthesis over a single element and returns the materialized instance. No parallel construction path: it reuses the bond constructor's own `process()`, so an evaled instance is identical to one born in a render. Default return is `any`; a strongly-typed overload is available for callers who want it. This is the operation a composition performs to turn authored markup into composed children.

**The block / inline content model.** `$Html<'string' | 'number' | 'block'>` — realized not with new classes but by **declaration-merging** `string`, `number`, and `block` into React's intrinsic elements, so the existing `$Html<T>` mapped type generates their props (`$value`, `$elements`) exactly as it does for `div` or `span`. `inline` is a per-class flag read from the type. Inside a bond constructor, the parser groups every consecutive run of inline nodes — a lone `<b>`, a lone string, or a mix — into one `$Html<'block'>`, **one level deep**, and only there. `string` and `number` are internal: produced by the parser, never authored.

A block is a **pure comprehension lens** — coherent grouping to be found. It is never persistent, never keyed, never a rendered wrapper; a caller renders it wherever they like (in a span, for styling), transforms it, or checks it for empty. `$check(undefined, 'block')` mints an empty block instead of throwing, so a bond constructor that wants a block always has one.

## What was learned

- **Persistence is the parent's to express, via keys — never the child's to assume.** A re-render *reuses* the instance (`cid` lives in `useState`; `$Reaction.find(cid)` returns the same object); a new instance is minted only on mount. A block therefore has no place to persist, and that is correct — [keying.test](../../package/tests/react/keying.test.tsx) pins it: a keyed child carries state across a parent reorder, an unkeyed one is positional.
- **The bond constructor dropping raw text was a bug, not a feature** — the premise that it is *supposed* to skip text was rejected, and the drop fixed.

## Done

Green: the chemistry suite passes at 622, with [eval](../../package/tests/react/eval.test.tsx) and [inline](../../package/tests/react/inline.test.tsx) locking the two primitives. The composition classes now have the operation they were missing; polishing them to use it is the [public-branch chapter](../../../.public/.lib/projection/01-sprint-44--composition.md) of this same sprint.
