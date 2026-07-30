# molecule.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The bond-graph collection module. Defines `$Molecule` and the per-instance reactive carrier set.

A `$Molecule` is the reactivity machinery a particle allocates. Every `$Particle` instance carries a molecule that owns a **map of bonds keyed by field name** — one entry per `$x` reactive property the instance has touched. The molecule also holds a **link to the catalyst graph**, connecting the instance's local reactive state to the broader parent-child reaction system.

Every particle allocates a molecule, even particularized (derivative) instances. This is an intentional allocation cost: even a derivative needs its own scope-tracking to record which bonds were read during its render. The per-instance allocation interacts with `$derivatives$` — the set of live derivatives the template tracks — to decide when reactive fan-out should propagate through the prototype chain.

## See also

- [The class](../particle/01-identity.md)
- [Bond](./04-bond.md) — the individual reactive-field backing object
- `$isChemicalBase$` inherited resolution

## Source

- `library/chemistry/src/abstraction/molecule.ts`
