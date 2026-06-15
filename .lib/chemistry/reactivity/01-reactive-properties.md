# Reactive Properties

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

A `$`-prefixed instance field is a reactive property. The framework installs a get/set accessor pair that records reads (for snapshot) and writes (for fan-out). Mutating a reactive property triggers re-render without an explicit `setState`. The shape predicate — `length >= 2` and starting with `$` — is documented in § IX.3.

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
- [§ IX.3 `isSpecial`][s-IX-3] — the shape predicate.
- [§ I.2 The `$` membrane][s-I-2] — the grammar.

<!-- citations -->
[s-IX-3]: ../IX-reflection/03-isspecial.md
[s-I-2]: ../I-foundation/02-the-dollar-membrane.md
