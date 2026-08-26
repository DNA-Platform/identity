# formula.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

***The module is two members.*** **`$Formula` is a convenience class — it declares `formula` true and draws its children — and the machinery it used to own now lives on [`$Chemical`](02-chemical.md).** *So a class becomes a formula by extending `$Formula` or by declaring `formula` itself, anywhere in a hierarchy.*

```ts
export class $Formula extends $Chemical {
    override get formula(): boolean { return true; }

    override view(): ReactNode { return this.children ?? null; }
}
```

**It also stamps itself a base marker**, which is what keeps the climb from reaching it — *a key that reached `$Formula` would be visible to every branch, and [branch isolation](../composition/12-the-formula.md#the-bound-the-miss-and-the-boundary) would be gone.*

## What moved, and where it went

*All of it is on [`chemical.ts`](02-chemical.md) now.*

| | |
|---|---|
| **`formula`** | a getter, false by default. ***It bounds the climb and permits caching*** — the branch is the run of ancestors answering true, stopping at `$Formula`'s marker or where it turns false |
| **`resolve`** | a field, true by default, ***read off the template***. It decides whether THIS tag reads its own content as a name, and it is tested before any lookup |
| **`cache(key?)`** | `protected`. Files this instance under a name — or, with no argument, as the one that stands when nothing is named. ***A specimen is stamped its own template, because it is a thing to COPY*** and every site that names it derives its own rather than sharing one instance |
| **`[$keyOf$]`** | ***behind a symbol, so it is absent from the interface even to a subclass*** — and still overridable, which is what lets a formula read its content its own way |
| **`[$formula$]`** | the substitution the render walk consults. ***The marker and the resolver are one member***, so [`augment`](11-augment.md) imports nothing. It hands back the **bonding** form rather than `$(found)`, which would skip the bond constructor, and it is **asked for** through the representative so a scope may stand something else behind a name |
| **the branch, and the seeding** | module functions. *A super-chain runs an ancestor's `cache` with the **descendant** as receiver, so `cache` cannot know which class declared it — making each ancestor's specimen first, root-downward, is what keeps first-one-wins from depending on construction order. And a key an ancestor already holds is an **echo** of that ancestor's claim rather than a declaration, so it files nowhere.* |

***`standsFor` no longer exists.*** *It had no caller outside the suite and duplicated the lookup that `[$formula$]` performs inline.*

## See also

- [The Formula](../composition/12-the-formula.md) — the feature.
- [`chemical.ts`](02-chemical.md) — where the machinery lives.
- [`augment`](11-augment.md) — where the substitution runs.
- [The representative](../composition/11-the-representative.md) — what a resolution is asked for through.

## Source

- `library/chemistry/package/src/abstraction/formula.ts`
