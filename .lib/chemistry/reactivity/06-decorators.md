# Decorators

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`@inert()` opts a `$`-prefixed property out of reactivity; `@reactive()` opts a non-`$` property in. Decoration registers the property in `$Reflection` so the per-instance reactivity decision yields the intended classification.

## Rules

- *(TBD — `@inert()` excludes a `$x` property from reactivity.)*
- *(TBD — `@reactive()` includes a non-`$` property in reactivity.)*

## Cases

- `@inert $cache = new WeakMap()`.
- `@reactive count = 0`.

## See also

- `$Reflection` class — the decorator registry.
- [Reactive properties](./01-reactive-properties.md) — the default behavior.
