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

> ***CORRECTED 2026-09-22.*** *The sentence above was false from the day it was written until this one.* **`equivalent` refused every prototype that was not `Object.prototype`, so a `Map`, a `Set` or a `Date` never equalled anything but itself — not a fresh one holding the same, and not its own snapshot, which [`snapshot()`](04-collection-mutation.md#walked) had deliberately copied by content.** *Every scope that so much as read one was dirty at `finalize`, and a fresh equal one handed as a prop never settled. It went unnoticed because no scope stood during a draw until the public redraft's Sprint 78 opened one — a child's reagent filling its writing's Set of classes while the writing drew — and looped. Doug: "It's a set, modified in an idempotent way in the view. Should not change the snapshot but it does."* **Now the copy and the comparison read [one list of walked shapes](04-collection-mutation.md#walked), so they cannot disagree again.**

**So assigning a fresh collection holding what the old one held is FREE.** *A reading that rebuilds its list on every call can assign the result without waking anything, which is the ordinary shape of a derived member and used to cost a repaint every time.*

*Before 2026-08-26 this was `store[property] === value`, and the same function was already being used one layer away — [scope tracking](./02-scope-tracking.md) has always compared read snapshots with `equivalent`. **The write path was the half that never called it.***

## <a id="an-accessor-is-live"></a>An accessor is a reactive property — by the same rule as a field

***Built 2026-09-22 on Doug's ruling: "It's not a rule change! These things should always have been reactive. They are props right? get $prop / set $prop. Why would a reactive property be any different. This is a bug not a feature."*** *And on what it proxies to: "It shouldn't matter if annotations are or aren't [a chemical]. The key is that there is a get / set property that proxies to anywhere. You know it exists. It should be reactive."*

**A declared `get`, with or without a `set`, whose name passes [`isReactive`](../../package/src/abstraction/bond.ts) is WRAPPED as a field is activated** — [`wrap`](../../package/src/abstraction/bond.ts), a proxy name. *The wrapper is an own, non-enumerable accessor on the template and, through `double()`, on every instance that is not the template; it calls the declared accessor with the right `this`, so a derived face reaches it through the chain as it reaches a field.* **A read records the getter's ANSWER in the scope**, so a getter alone is reactive even over a plain instance: a handler that reads it and then changes what it answers redraws, because `finalize` re-reads it through the property with no scope standing. **A set is news unless the answer is unchanged** — the answer is snapshotted before the set and compared after — **and a set during the chemical's own draw or bond is construction**, exactly as for a field.

***Where it had been out of whack.*** *The Sprint 18 rebuild built interception for fields and carried the legacy bond's accessor flags — `isProperty`, `isReadable`, `isWritable` — across as reflection only; the legacy snapshot had read every bond "via getter or backing field", and that reading did not cross. Since then an accessor descriptor became a bond that stored its `get` and `set` and installed nothing. A getter was live only by transparency, through the activated fields it read, and went dark over anything else; a setter recorded nothing, so `writing.$is = Narrative` from outside a draw redrew nothing. No commit ever removed a wrapper; one was never built.*

**Two scans of a template's own names learned the difference the same day.** *The styled compiler's `declared` and the facade walk's `facadesOf` both read every own name's value, and a wrapped getter read outside a draw reaches what only the draw provides. The wrapper's getter carries the declared accessor under `$original$`, as an augmented handler carries the user's own function, and both scans skip what carries it.*

**Promises:** [`accessors.test.tsx`](../../package/tests/abstraction/accessors.test.tsx), six — *a set through a setter from outside a draw redraws, on the direct road and on the template road; an equal set is not news; a getter proxying to a plain instance's list, read in a handler and pushed in place, is seen; a set in the bond constructor composed in a parent is construction; a getter alone read in a handler is snapshotted.* **Commit `2ffbe4c`.**

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

## <a id="not-dirty-while-it-draws"></a>A chemical is not dirty while it draws — its dirtiness starts after render

***Built 2026-09-24 on Doug's rule:*** *"when view is running, and render in general, we don't need to track changes on the executing chemical itself, because we know render happens last in the pipeline because its the result of view. Other chemicals might change how they look, but we have already rendered the current one. It's dirtiness starts after render."*

**The setter already kept it for writes, and two paths did not.** *A read of the drawing chemical was recorded by another chemical's scope standing during the draw — an annotation's `erase` and `defines`, each a reagent of a mounted chemical in a scope of its own — so `finalize` found it changed and reacted a chemical mid-draw. And `react()` would wake a drawing chemical from `finalize`'s upward walk or from `diffuse`.* **Now the field getter and the accessor wrapper's getter record a read only when the chemical is not drawing, and [`react()`](../../package/src/abstraction/reaction.ts) returns while its chemical draws.**

**Why nothing is lost:** *a draw ends with its view's output, so a change made during it is either in that output already or seen by the settle pass, which redraws after the commit and repaints once if the output differs.* **Another chemical changed during the draw is still woken**, because it has not drawn.

**The stated cost:** *an ancestor whose view reads the drawing chemical's state sees a change made during that draw only through its own settle pass, which runs when the ancestor drew in the same commit.*

**Promises:** [`dirtiness-after-render.test.tsx`](../../package/tests/react/dirtiness-after-render.test.tsx), five, with render counts. **Commit `ab97399`.** *The sprint, with the measured comparison against the filter first proposed: [Dirtiness Starts After Render](../projection/47-sprint-81--dirtiness-starts-after-render.md).*

## <a id="a-function-is-behaviour"></a>A method is a function on the prototype; a field is a value, even holding a function

***Corrected 2026-09-29, on the public branch's Sprint 93 pitch and Doug's "That's a serious bug. It means chemistry can't have handlers passed as props."*** **A member is judged by where it stands.** [The molecule](../../package/src/abstraction/molecule.ts) tells `formBonds` which names the instance itself holds; [`$Bond.create`](../../package/src/abstraction/bond.ts) never makes one of those a `$Reagent`, and `form()` activates it whatever it holds, so a field is settable and reactive even when its value is a function. **Only a function declared on the prototype — a class method — is a reagent**, answering a bound wrapper per instance and running in a scope.

**So a prop with a default is one field**, as React's `({ onPick = noop })` is: `$onPick = () => 'default'` given `onPick={…}` calls what was given; not given, the default; written after mount, the view follows at the cost of any other write. *A class held in a field compares as itself and a factory held in a field is the factory, so the getter, the framework set and the `= undefined` initialiser this chapter once taught for those cases are no longer needed for them.*

***What it was, so the record stays true:*** *from the membrane's first days until 2026-09-29, `$Bond.isMethod` routed on the value alone — any function that was not a chemical component became a getter-only reagent — so a field whose default was a function could never be set: "Cannot set property $highlighter … which has only a getter."* **The risk that was searched:** an arrow-function field used as a method is now a plain value, and none stood in chemistry, its Lab or the public branch. **Promises:** [`function-fields.test.tsx`](../../package/tests/react/function-fields.test.tsx), four — the given handler, the default, a write after mount at the cost of any other, and a prototype method still a reagent. **Commit `f21f051`.**

## Rules

- **A plain field is reactive.** `$` is not the switch; `_` and `constructor` are the exclusions.
- **A function on the prototype is a method, a REAGENT; a field is a value** even when it holds a function — see [above](#a-function-is-behaviour).
- **A `$` name must pass `isSpecial`** to be settable from JSX — `length >= 2`, second character lowercase, not `$` and not `_`.
- **A write is compared by value**, and an equal value is not news.
- **A declared accessor is reactive by the same rule**, wrapped rather than activated; a read records its answer, a set is news unless the answer is unchanged.
- **A write inside the writer's own bond constructor is not news**, whatever its value.
- **A chemical is not dirty while it draws**: no scope records a read of it and `react()` refuses it; its dirtiness starts after render.

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
