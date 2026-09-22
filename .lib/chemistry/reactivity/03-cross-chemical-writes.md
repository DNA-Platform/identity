# Cross-Chemical Writes

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## The surprise

A handler attached to chemical A can write `B.$x = value` against a sibling chemical B, and B re-renders correctly — even though the write is happening *inside A's scope*, not B's.

```ts
class $Toggle extends $Chemical {
  $on = false
  $Toggle(other: $Light) {
    this.onClick = () => { other.$on = !other.$on }
  }
}
```

Click the toggle: the light wakes. Across instances, across the JSX tree, regardless of where the handler was registered.

## Why it works

Reactive writes don't only fan out within the writer's scope — they walk the *catalyst graph*, the structural overlay that links composed chemicals through their `$parent` relationship. A write to `B.$x` finds B's scope, fires B's reactions, and propagates through B's derivatives. The writing handler's scope is irrelevant to who wakes.

The in-scope and no-scope paths are symmetric — both walk `$$parent$$` upward, [diffuse](./05-diffuse.md) at once and `finalize` once at the close of the scope, so whoever composed the written chemical redraws.

## Why it's surprising

In many reactive systems, "the scope you're in" decides what wakes. Writing to a foreign property feels like reaching across a boundary the system doesn't track. $Chemistry tracks the boundary structurally — through the catalyst graph, not the call stack — so the cross-chemical write *is* tracked.

A reader who expected scope-boundedness will be surprised by the propagation. A reader who knows the [catalyst graph](../composition/08-catalyst-graph.md) exists will expect it.

## The rules

- **In-scope writes** wait for `scope.finalize()`. The scope snapshots state on read; on finalize, it dirties each written chemical, each read chemical whose value is no longer [equivalent](04-collection-mutation.md#walked) to its snapshot, and every ancestor, then fires `react()` once each.
- **No-scope writes** call `react()` and [diffuse](./05-diffuse.md) immediately.
- *An earlier version of these rules named a `$derivatives$` registry and an ownership gate. Neither is in the source; corrected 2026-09-22.*

## History

This was not always true. The pre-sprint-24 code had an in-scope-write fast path that *skipped* fan-out when the writer was already inside a scope. See [caveats](../epistemology/04-caveats.md#cross-chemical-handler-fan-out) for the full story.

## See also

- [diffuse](./05-diffuse.md) — the fan-out function.
- [Catalyst graph](../composition/08-catalyst-graph.md) — the structural overlay enabling cross-chemical propagation.
- [Caveats](../epistemology/04-caveats.md#cross-chemical-handler-fan-out) — the historical caveat (fixed sprint 24).
