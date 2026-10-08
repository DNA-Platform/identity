# atom.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The `$Atom` source module. Defines the singleton-shaped subclass of `$Chemical`.

Every `$Particle` subclass has exactly one *template* — the canonical instance from which derivatives are created via `Object.create()`, **made by the framework** ([the template is the framework's](../particle/04-lift.md#the-template-is-the-frameworks)). `$Atom` is the framework's way of getting at that template without constructing fresh state: `new $Atom()` always returns the class's template instance rather than allocating a new object — ***since 2026-10-08 by asking for it, making it under the framework's flag when none stands yet, so an author's construction is never itself the template and is idempotent whichever came first.*** The template instance is stored at `$$template$$` and tested via `$isTemplate$`. *A construction that made the template is the first, not a re-construction: the re-init guard that keeps a later construction's field initializers from clobbering what was recalled is not set on it.*

***And an atom MOUNTS ITSELF.*** Its template carries `$direct$`, so the lift takes the direct path: the one instance is the component, with one store and one update handle. *Before that date a drawn atom was a per-mount derivative of the singleton, which read it through the prototype; once a derivative owned its store, hydration's propagation between the two never converged — a microtask loop measured to the heap's end — and the singleton's recall was lost to its copies.* A singleton has no per-mount state by definition, so a derivative of one was never the right shape.

The singleton means an atom's reactive state is shared across all mount sites — now literally one object. Where a `$Chemical` creates a fresh derivative per mount, an `$Atom` reuses the same object — making it appropriate for components that hold no per-instance state, or whose state is intentionally global.

## See also

- `$Atom` — the class
- [Identity](../particle/01-identity.md) — `$$template$$`, `$isTemplate$`

## Source

- `library/chemistry/src/abstraction/atom.ts`
