# Decorators

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`@inert()` opts a `$`-prefixed property out of reactivity; `@reactive()` opts a non-`$` property in. Decoration registers the property in `$Reflection` (§ IX.1) so the per-instance reactivity decision (§ IX.2) yields the intended classification.

## Rules

- *(TBD — `@inert()` excludes a `$x` property from reactivity.)*
- *(TBD — `@reactive()` includes a non-`$` property in reactivity.)*

## Cases

- `@inert $cache = new WeakMap()`.
- `@reactive count = 0`.

## See also

- [§ IX.1 `$Reflection` class][s-IX-1] — the registry.
- [Reactive properties](./01-reactive-properties.md) — the default behavior.

<!-- citations -->
[s-IX-1]: ../IX-reflection/01-reflection-class.md
