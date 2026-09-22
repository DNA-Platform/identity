# Scope Tracking

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

**A scope is the framework's record of one entry into chemical code: what was read, what was written, and who to wake when it closes.** [`withScope`](../../package/src/implementation/scope.ts) opens one; the outermost closes it with `finalize()`; a nested call joins the one already open.

## Where a scope stands — and where it does not

***`withScope` has three call sites in the whole framework, all in [`$Reagent.form()`](../../package/src/abstraction/bond.ts):*** a reactive method's call, and the two arms of the promise it may return. **An augmented handler reaches the same place**, since [augmentation](../implementation/11-augment.md) wraps every handler in `withScope`. ***Nothing on the render path opens one*** — not `$lift`, not the bond constructor, not the settle pass — which is why [the three passes](../particle/12-the-three-passes.md) could measure `recordWrite` at zero on a static page.

**And a reagent whose OWN chemical is drawing, or still in `'setup'`, opens none** ([`bond.ts:270`](../../package/src/abstraction/bond.ts)): *it runs under the asker alone, so a method called from its own view neither snapshots nor wakes.* ***The test is the reagent's own chemical, not whoever is drawing*** — a child's reagent called during its parent's draw DOES open a scope, once the child has mounted, and whatever it changes on the parent is compared at `finalize` and reacted. *That is the door the public redraft's Sprint 78 walked through; what chemistry owed it was an honest comparison, [below](04-collection-mutation.md), and the rest is the design's.*

## What is recorded

- **A read** — the activated getter calls `scope.recordRead(chemical, prop, value)`, and the scope keeps [`snapshot(value)`](04-collection-mutation.md#walked) under the FIRST read of that property; later reads in the same scope do not overwrite it.
- **A write** — the activated setter, having already refused an [equivalent value](01-reactive-properties.md#a-write-is-news-by-value) and a write during the chemical's own draw, calls `scope.recordWrite(chemical, prop)` instead of reacting.

## What finalize does

1. **Every written chemical is dirty.**
2. **Every read chemical whose current value is not `equivalent` to its snapshot is dirty** — this is how an in-place `push`, `set` or `add` is seen with the reference unchanged, and how a read that changed nothing is not.
3. **Every ancestor of a dirty chemical is dirty**, walked up `$$parent$$`, so a parent that reads its child's state in its view redraws.
4. **Each dirty chemical's `$Reaction.react()` is called once.** React batches what follows into one commit.

## Rules

- **A scope stands only inside a reagent or an augmented handler.** A draw stands in none.
- **A reagent of a drawing or unmounted chemical opens no scope**, and a reagent of any other chemical does, whoever is drawing.
- **A read is compared, a write is trusted.** A read that left its value equivalent wakes nothing.
- **Outside a scope the setter reacts at once**, and an in-place mutation outside a scope is invisible — wrap it in a method.

## Cases

- A click handler that increments a field: read recorded, write recorded, one `react()`.
- A handler that reads a Set and leaves it as it found it: nothing dirty, no draw — promised in [`walked-collections.test.tsx`](../../package/tests/react/walked-collections.test.tsx).
- A `setTimeout` writing a field: no scope, the setter reacts at once.
- A method called from its own view: no scope, drawn as read.

## See also

- [Collection mutation](04-collection-mutation.md) — what a snapshot is, and the one list it shares with `equivalent`.
- [diffuse](05-diffuse.md) — the no-scope path's upward walk.
- [scope.ts](../implementation/08-scope.md) — the source.
- [augment.ts](../implementation/11-augment.md) — the handler-wrapping.
