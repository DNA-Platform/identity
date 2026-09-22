# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$isBound$** — A computed getter on `$Chemical` returning `true` when the chemical is the active backing instance of its component, checked via `this == this[$component$]?.$chemical`.

**Bond** — A reactive connection within the molecular system that tracks an individual reactive property on a chemical, recording whether it is a prop and caching its last value.

**diffuse** — The no-scope path's upward walk in `scope.ts`: from a written chemical up `$$parent$$`, `react()` on every ancestor.

**snapshot** — The copy a scope keeps of a value it read, taken by the [walked shapes](04-collection-mutation.md#walked) and compared by `equivalent` at finalize.

**walked** — Copied and compared by content: an array, a Map, a Set, a Date, a plain object. Everything else is held by reference.

**Molecule** — The reactive state container for a `$Chemical` that owns the set of bonds, handles reactivation during rendering, and manages its own destruction lifecycle.

**Reaction** — The lifecycle coordinator for a `$Chemical` that drives it through async phases: mount, render, layout, effect, and unmount.

**scope** — The tracking context that records reads (as snapshots) and writes (as dirty) during a reagent or an augmented handler, finalized to react each dirty chemical and its ancestors once.
