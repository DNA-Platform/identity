# Reactive Properties

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

**An instance field is reactive by default.** The framework installs a get/set accessor pair that records reads (for snapshot) and writes (for fan-out), so mutating one triggers a re-render without an explicit `setState`.

***The `$` prefix was never what made a field live.*** **[`$Reflection.isReactive`](../../package/src/abstraction/bond.ts) reads `if (!property.startsWith("$")) return true`** — so a **plain** field is reactive, and only three things are not: `constructor`, anything beginning `_`, and a `$`-name that fails [`isSpecial`](../../package/src/abstraction/bond.ts) (`$$view`, `$_x`, `$X`).

**What `$` decides is `isSpecial`, and what `isSpecial` decides is whether a name can be written from JSX** — `$apply`, the props type, the binding surface. *An earlier version of this chapter said only `$`-prefixed fields are reactive and only they participate in scope tracking. **Both halves were wrong**, and the corrected sentence is already written in the model: "a plain property is reactive by default — the `$` was never what made it live, it was what made it settable from JSX."*

## Intrinsic vs extrinsic state

The `$` prefix carries a philosophical distinction. A `$x` field is **extrinsic state** — it flows inward from a consumer (a parent's JSX prop, a binding constructor argument). A plain `x` field is **intrinsic state** — owned by the object itself, invisible to the composition layer. ***The membrane is about who may WRITE, not about what is watched***: only `$`-prefixed fields appear in `$apply` and in the props type, so the outside world can reach them and cannot reach the rest. **A plain field is still live, and a `_` field is genuinely inert** — which is why a cache is spelled `_read` and stays out of the reactivity.

## <a id="a-write-is-news-by-value"></a>A write is news BY VALUE, not by reference

***The setter compares with [`equivalent`](../../package/src/implementation/reconcile.ts), not with `===`.***

```ts
set(value) {
    const store = backing(this);
    if (equivalent(store[property], value)) return;
    ...
```

**`equivalent` opens with `if (a === b) return true`, so a scalar costs exactly what it cost before.** Arrays and plain objects compare **element-wise**; a `Map`, a `Set` and a `Date` compare by content; and ***a class instance — a chemical included — still compares by reference***, because a class owns its own equivalence.

**So assigning a fresh collection holding what the old one held is FREE.** *A reading that rebuilds its list on every call can assign the result without waking anything, which is the ordinary shape of a derived member and used to cost a repaint every time.*

*Before 2026-08-26 this was `store[property] === value`, and the same function was already being used one layer away — [scope tracking](./02-scope-tracking.md) has always compared read snapshots with `equivalent`. **The write path was the half that never called it.***

## <a id="construction-is-not-news"></a>Construction is not news

***A write made while a chemical is being SET UP stores its value and wakes nobody.*** **The flag is [`$rendering$`](../../package/src/implementation/symbols.ts), it lives on the chemical, and the setter tests it before it fans anything out.**

**It is raised around two things:** applying props, and — since 2026-08-26 — ***the bond constructor.***

```ts
const bonding = c[$rendering$];
c[$rendering$] = true;
try { /* the bond constructor runs here */ }
finally { c[$rendering$] = bonding; }
```

**Because the flag is per-object, the distinction it draws is the right one without anything else being said:** *a chemical writing to **itself** during its own construction is setup; a bond writing to a **different** chemical — `chapter.$in = this` — is still a change, and still reacts.*

***Why it has to be this way:*** [`finalize`](../../package/src/implementation/scope.ts) walks `$$parent$$` upward and marks every ancestor dirty. **So a composed chemical whose bond wrote a field woke its own parent, the parent re-rendered, and re-rendering built a NEW instance whose bond wrote again** — 12 distinct instances in 14 bonds, and `Too many re-renders`. *The whole diagnosis is [The bond that woke the tree it was building](../../../.public/.lib/solutions/29-the-bond-that-woke-the-tree-it-was-building.md).*

**The rule to carry:** ***a bond constructor is the one place in this framework where a write is construction rather than mutation.***

## Rules

- **A plain field is reactive.** `$` is not the switch; `_` and `constructor` are the exclusions.
- **A `$` name must pass `isSpecial`** to be settable from JSX — `length >= 2`, second character lowercase, not `$` and not `_`.
- **A write is compared by value**, and an equal value is not news.
- **A write inside the writer's own bond constructor is not news**, whatever its value.

## Cases

- `$count = 0` with `this.$count++`.
- `$map = new Map()` with `this.$map.set(...)`.
- `$arr.push(...)`.
- `parenthetical = false` — a plain field, live, and **not** settable from JSX.
- `xs = []` reassigned to a fresh `[]` — not news.

## See also

- [Scope tracking](./02-scope-tracking.md) — how reads/writes are recorded, and where `equivalent` was already being used.
- [Collection Mutation](./04-collection-mutation.md) — in-place `push`/`set`/`add`, caught on the read path rather than the write.
- [Decorators](./06-decorators.md) — `@inert` / `@reactive` overrides.
- [The Grammar](../authorship/01-the-grammar.md) — the `$` membrane.
- [The bond that woke the tree it was building](../../../.public/.lib/solutions/29-the-bond-that-woke-the-tree-it-was-building.md) — the defect both changes came out of.
