# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$isBound$** — A computed getter on `$Chemical` returning `true` when the chemical is the active backing instance of its component, checked via `this == this[$component$]?.$chemical`.

**Bond** — A reactive connection within the molecular system that tracks an individual reactive property on a chemical, recording whether it is a prop and caching its last value.

**derivatives** — The downstream chemicals connected via `$derivatives$` that receive fan-out notifications when a chemical's reactive state changes, walked by the `diffuse` function.

**diffuse** — The fan-out function in `scope.ts` that walks a chemical's `$derivatives$` when owned, propagating state changes to every derivative that needs to re-render.

**Molecule** — The reactive state container for a `$Chemical` that owns the set of bonds, handles reactivation during rendering, and manages its own destruction lifecycle.

**Reaction** — The lifecycle coordinator for a `$Chemical` that drives it through async phases: mount, render, layout, effect, and unmount.

**scope** — The tracking context that records reads (for snapshot) and writes (as dirty) during event handler execution, finalized to fire reactions and fan out to derivatives.
