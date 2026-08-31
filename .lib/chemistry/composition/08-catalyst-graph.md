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
- **A chemical written in a VIEW is joined to nothing.** The rules above are the bond path. A view's output is React's, not the synthesis's, so a chemical an author writes in `view()` stays its own parent and its own catalyst — [an assignment](14-the-assignment.md#and-it-threads-the-lineage) is what joins one, because saying where a thing belongs is the one moment that answer is known.

## <a id="the-model-is-parented-and-the-drawing-is-not"></a>THE MODEL IS PARENTED AND THE DRAWING IS NOT

***Measured 2026-08-29, and it is not what the rules above imply.*** Rendering `<Host><Leaf /></Host>` and reading both sides:

| | |
|---|---|
| what the **bond constructor received** | `$Leaf[6]`, ***parented to the host*** |
| what **`view()` ran on** | `$Leaf[11]`, ***its own parent*** |
| what that one **derives from** | the `$Leaf` **template** — not the bonded child |

**So there are two populations of one part.** The bonded child is the model and carries its place in the graph; the drawing is a fresh per-mount derivative of the template and is a root. *Both statements in the rules are true, and they are true of different objects.*

***Three consequences, and they are the same fact seen three ways:*** a write on the drawn instance diffuses to nobody; [`$Scope.finalize`](../../package/src/implementation/scope.ts)'s upward walk has nothing to walk; and `askedFor`'s lineage walk is one node long, **which is why [the facade](13-the-facade.md)'s three scope-substitution promises are skipped** rather than failing.

***The cause in code is not yet traced and is deliberately not guessed at here.*** What is established is the measurement and its consequences; the next reader should start from `$Synthesis.process`'s bound-child cache and `$lift`'s derivative, and should carry a probe rather than a theory — reasoning about this one from the source was wrong twice before it was measured.

## Cases

- A stand-alone chemical: its own parent, its own catalyst, its own reaction.
- The same chemical composed into a parent: one reaction system, two members, one repaint.
- A write in a child's handler repainting a sibling rendered by the parent.
- `$(<TableOfContents />, book)` — evaluated as if authored inside the book, so the graph is joined before its bond constructor runs.

## See also

- [`bind`][s-III-6] — the static-binding entry that wires this graph.
- [The binding constructor][s-III-3] — the JSX path, and why the interpreting chemical is the parent.
- [Cross-chemical writes][s-IV-3] — the same structure met from the reactivity side.
- [The assignment][s-III-14] — the other way a chemical acquires a parent, and the only one available to a part a class draws for itself.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md
[s-III-6]: ./06-bind.md
[s-III-14]: ./14-the-assignment.md
[s-IV-3]: ../reactivity/03-cross-chemical-writes.md
