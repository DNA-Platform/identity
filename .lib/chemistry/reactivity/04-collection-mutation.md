# In-Place Collection Mutation

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

**An in-place `push`, `set`, `add` or nested write is seen with the reference unchanged, because a [scope](02-scope-tracking.md) keeps a copy of what it read and compares it at `finalize`.** The copy is `snapshot()`, the comparison is `equivalent()`, and since 2026-09-22 both live in [`reconcile.ts`](../../package/src/implementation/reconcile.ts) and read one list.

## <a id="walked"></a>The walked shapes — one list

***A value is either walked or held.*** **Walked: an array, a `Map`, a `Set`, a `Date`, a plain object.** *Each entry in the list says three things — how to recognise one, how to copy one, how to say two are the same:*

| shape | copied | the same when |
|---|---|---|
| **array** | element by element | same length, each element equivalent |
| **`Map`** | values copied, keys kept | same size, every key present, each value equivalent |
| **`Set`** | members copied | same size, every member found — by `has`, or by content when the member is itself walked and so was copied |
| **`Date`** | by time | same time |
| **plain object** | key by key | same keys, each value equivalent |

**Held: everything else that is an object — a class instance, a chemical.** *Copied by reference, equal only to itself. The class owns its equivalence.*

***One list, because two lists disagreed.*** **From 2026-08-27 to 2026-09-22 `snapshot()` in `scope.ts` walked a `Map`, a `Set` and a `Date` while `equivalent()` in `reconcile.ts` refused every prototype that was not `Object.prototype`** — *so a walked collection never equalled its own snapshot, any scope that read one was dirty at `finalize`, a fresh equal one assigned was news, and a fresh equal one handed as a prop never settled through the [settle pass](../particle/12-the-three-passes.md#pass-c).* [Reactive properties](01-reactive-properties.md#a-write-is-news-by-value) carries the correction; [the three passes](../particle/12-the-three-passes.md#found-on-the-way) had already found the defect and measured why it never fired.

## Rules

- **A read that left its collection as it found it wakes nothing** — including one cleared and refilled with the same members. *Doug, 2026-09-22: "It's a set, modified in an idempotent way in the view. Should not change the snapshot but it does."*
- **A read that changed its collection in place wakes its chemical**, whoever's reagent made the change.
- **Assigning a fresh collection holding what the old one held is not news** — the setter compares by the same list.
- **A held instance is compared by reference.** Mutating one in place is invisible; replace it, or make it a chemical.

## Cases

- `this.set.add(x)` in a handler — draws once.
- `this.classes.clear(); this.classes.add('a'); this.classes.add('b')` on a Set that already held `a` and `b` — draws nothing.
- `this.map.get('x')` in a handler — draws nothing; `this.map.set('x', 2)` — draws once.
- `<Child picked={new Set(this.items)} />` — settles; before the fix it never did.

**Promises:** [`walked-collections.test.tsx`](../../package/tests/react/walked-collections.test.tsx), six; the older Set, Map and array promises in [`scope-tracking.test.tsx`](../../package/tests/react/scope-tracking.test.tsx) and [`bond-behavior.test.tsx`](../../package/tests/regression/bond-behavior.test.tsx) still hold.

## See also

- [Scope tracking](02-scope-tracking.md) — where snapshots are taken and compared.
- [Reactive properties](01-reactive-properties.md#a-write-is-news-by-value) — the setter's use of the same equality.
- [reconcile.ts](../implementation/12-reconcile.md) — the source, where the list lives.
