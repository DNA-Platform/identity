# bond.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The bond / reagent / reflection / decorator / activate source module.

A `$Bond` is the reactive-prop binding object that backs every `$x` field. When you write `$count = 0` in a chemical, the framework allocates a bond to back that field. The bond's getter records reads in the active scope; its setter fires reactions.

Each bond carries: the field name, a reference to its owning particle, the current value, and scope-tracking machinery for the reaction system. Bonds are allocated **lazily** — on first read or write, not at construction time. This means an unreferenced `$x` field costs nothing until something touches it.

Bonds connect upward to the `$Molecule` (the particle's bond-map that collects all its reactive fields) and outward to `$Reaction` (the active scope that is recording reads). The module also defines `$Reagent` reachability, `$Reflection` (the introspection surface for bond metadata), and the decorator infrastructure (`@inert`, `@reactive`) that overrides default reactivity.

## See also

- `$Reflection` class
- [Decorators](../reactivity/06-decorators.md)
- [Molecule](./05-molecule.md) — the bond-map collection
- `$Reagent` reachability

## Source

- `library/chemistry/src/abstraction/bond.ts`
