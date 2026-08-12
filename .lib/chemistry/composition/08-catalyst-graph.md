# Catalyst Graph

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

Composed chemicals share **one** reaction system, and the catalyst graph is what threads it. Every `$Chemical` carries two slots and a setter: `$$parent$$` (who holds me), `$catalyst$` (the root of the reaction system I belong to), and `$parent$` — a setter that **rewires on join** rather than merely recording. A chemical constructed alone is its own parent and its own catalyst; the moment it is composed into another, it stops running its own reaction and joins its parent's.

That is why a write inside one chemical's handler can repaint a chemical rendered elsewhere in the same composition — [cross-chemical writes](../reactivity/03-cross-chemical-writes.md) are this graph seen from the reactivity side.

## Rules

- **A chemical is born its own root.** [`$Chemical`'s constructor](../../package/src/abstraction/chemical.ts) sets `$$parent$$` and `$catalyst$` to itself, and `$Particle` has already given it a `$Reaction`. Standing alone is the default, not a special case.
- **The `$parent$` setter is the join, and it branches.** Assigned itself, the chemical becomes its own catalyst with a **fresh** reaction. Assigned another, it takes `parent[$catalyst$]` as its own and the catalyst's reaction **adds** it. Nothing is copied; the child is enrolled.
- **`$isCatalyst$` is the root test** — `this == this[$catalyst$]`. True only for the chemical the reaction system belongs to.
- **The public surface is `parent`.** The `parent` getter and setter on `$Chemical` read and write `$parent$`; author code never touches the symbols.
- **The parent is assigned before the binding constructor runs.** [`bind(chemical, parent)`](06-bind.md) wires the graph first and binds second, and `$(element, parent)` follows the same order — so a bond constructor always runs with its place in the graph already known.
- **A child binds to the chemical whose bond is interpreting it**, not to whatever wraps it in the markup. `$Synthesis` rebinds a child component whose chemical's parent is not the interpreting chemical, and an inline node gathered into a block is lifted parented to that same chemical — *an element in a block reaches outside the block for its parent*.
- **Rewiring is idempotent per join, not per render.** The synthesis caches bound children per type and key and reuses them while their parent is unchanged; a cache miss is what produces a fresh `$bind`.

## Cases

- A stand-alone chemical: its own parent, its own catalyst, its own reaction.
- The same chemical composed into a parent: one reaction system, two members, one repaint.
- A write in a child's handler repainting a sibling rendered by the parent.
- `$(<TableOfContents />, book)` — evaluated as if authored inside the book, so the graph is joined before its bond constructor runs.

## See also

- [`bind`][s-III-6] — the static-binding entry that wires this graph.
- [The binding constructor][s-III-3] — the JSX path, and why the interpreting chemical is the parent.
- [Cross-chemical writes][s-IV-3] — the same structure met from the reactivity side.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md
[s-III-6]: ./06-bind.md
[s-IV-3]: ../reactivity/03-cross-chemical-writes.md
