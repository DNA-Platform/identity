# Reactive Properties

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

A `$`-prefixed instance field is a reactive property. The framework installs a get/set accessor pair that records reads (for snapshot) and writes (for fan-out). Mutating a reactive property triggers re-render without an explicit `setState`. The shape predicate — `length >= 2` and starting with `$` — is documented in `$Reflection.isSpecial`.

## Intrinsic vs extrinsic state

The `$` prefix carries a philosophical distinction. A `$x` field is **extrinsic state** — it flows inward from a consumer (a parent's JSX prop, a binding constructor argument). A plain `x` field is **intrinsic state** — owned by the object itself, invisible to the composition layer. The framework enforces this boundary: only `$`-prefixed fields are reactive, only `$`-prefixed fields appear in `$apply`, and only `$`-prefixed fields participate in scope tracking. The `$` membrane is not merely a naming convention; it is the dividing line between what the outside world can write and what the object controls privately.

## Rules

- *(TBD — `$x` fields are reactive by default.)*
- *(TBD — `_`-prefixed fields are excluded.)*
- *(TBD — `constructor` is excluded.)*
- *(TBD — single-letter `$<x>` is not special; `length >= 2` is required.)*

## Cases

- `$count = 0` with `this.$count++`.
- `$map = new Map()` with `this.$map.set(...)`.
- `$arr.push(...)`.

## See also

- [Scope tracking](./02-scope-tracking.md) — how reads/writes are recorded.
- [Decorators](./06-decorators.md) — `@inert` / `@reactive` overrides.
- `isSpecial` — the shape predicate in `$Reflection`.
- [The Grammar](../authorship/01-the-grammar.md) — the `$` membrane.
