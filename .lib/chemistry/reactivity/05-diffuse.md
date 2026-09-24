# diffuse(chemical)

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

**`diffuse(chemical)` is the no-scope path's upward walk in [`scope.ts`](../../package/src/implementation/scope.ts): from the written chemical up `$$parent$$`, calling `react()` on every ancestor, so a parent that reads its child's state in its view redraws.** The setter calls it right after `react()` when no scope stands; inside a scope the same walk happens once, at `finalize`.

> *An earlier version of this chapter had `diffuse` walking a `$derivatives$` set behind an ownership gate. **Neither exists in the source**; the walk is the composition tree, and it is the same walk `finalize` makes. Corrected 2026-09-22.*

## Rules

- **Outside a scope: `react()` on the written chemical, then `diffuse`.**
- **Inside a scope: nothing until `finalize`, which dirties the ancestors of every dirty chemical and reacts each once.**
- **A write during the chemical's own draw does neither** — [construction is not news](01-reactive-properties.md#construction-is-not-news).
- **An ancestor that is drawing is not woken** — `react()` refuses it, since 2026-09-24: [a chemical is not dirty while it draws](01-reactive-properties.md#not-dirty-while-it-draws).

## Cases

- A `setTimeout` writing a child's field: the child reacts, then every ancestor.
- A handler writing a sibling's field: the sibling and its ancestors, at `finalize`.

## See also

- [Scope tracking](02-scope-tracking.md) — the in-scope path.
- [Cross-chemical writes](03-cross-chemical-writes.md) — why a write reaches whoever composed the written chemical.
- [scope.ts](../implementation/08-scope.md) — the source.
