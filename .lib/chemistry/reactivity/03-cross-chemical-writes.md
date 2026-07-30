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

The in-scope and no-scope paths are symmetric — both call [diffuse](./05-diffuse.md), which gates fan-out on `hasOwnProperty($derivatives$)`. Sibling derivatives that prototype-inherit the registry do not leak writes.

## Why it's surprising

In many reactive systems, "the scope you're in" decides what wakes. Writing to a foreign property feels like reaching across a boundary the system doesn't track. $Chemistry tracks the boundary structurally — through the catalyst graph, not the call stack — so the cross-chemical write *is* tracked.

A reader who expected scope-boundedness will be surprised by the propagation. A reader who knows the [catalyst graph](../composition/08-catalyst-graph.md) exists will expect it.

## The rules

- **In-scope writes** call `diffuse` on `scope.finalize()`. The scope snapshots state on read; on finalize, it fires `react()` for each dirty chemical and fans out to derivatives.
- **No-scope writes** call `diffuse` immediately. The setter fires `react()` directly, then walks `$derivatives$`.
- **The ownership gate** prevents sibling leaks. `diffuse` checks `hasOwnProperty($derivatives$)` — only chemicals that *own* their derivatives set fan out. Derivatives that inherit the set through the prototype chain are not responsible for propagation.

## History

This was not always true. The pre-sprint-24 code had an in-scope-write fast path that *skipped* fan-out when the writer was already inside a scope. See [caveats](../epistemology/04-caveats.md#cross-chemical-handler-fan-out) for the full story.

## See also

- [diffuse](./05-diffuse.md) — the fan-out function.
- [Catalyst graph](../composition/08-catalyst-graph.md) — the structural overlay enabling cross-chemical propagation.
- [Caveats](../epistemology/04-caveats.md#cross-chemical-handler-fan-out) — the historical caveat (fixed sprint 24).
