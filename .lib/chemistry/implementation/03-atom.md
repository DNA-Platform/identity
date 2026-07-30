# atom.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The `$Atom` source module. Defines the singleton-shaped subclass of `$Chemical`.

Every `$Particle` subclass has exactly one *template* — the canonical instance from which derivatives are created via `Object.create()`. `$Atom` is the framework's way of getting at that template without constructing fresh state: `new $Atom()` always returns the class's template instance rather than allocating a new object. This makes atoms singletons by construction. The template instance is stored at `$$template$$` and tested via `$isTemplate$`.

The singleton template pattern means an atom's reactive state is shared across all mount sites. Where a `$Chemical` creates a fresh derivative per mount, an `$Atom` reuses the same object — making it appropriate for components that hold no per-instance state, or whose state is intentionally global.

## See also

- `$Atom` — the class
- [Identity](../particle/01-identity.md) — `$$template$$`, `$isTemplate$`

## Source

- `library/chemistry/src/abstraction/atom.ts`
