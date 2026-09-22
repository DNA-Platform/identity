# scope.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The scope-tracking module. Defines `$Scope`, `withScope`, `diffuse`, and the asker. **Since 2026-09-22 `snapshot()` lives beside `equivalent()` in [reconcile.ts](12-reconcile.md), where the [walked shapes](../reactivity/04-collection-mutation.md#walked) are one list**; the scope imports it.

## See also

- [Scope tracking](../reactivity/02-scope-tracking.md)
- [`diffuse`](../reactivity/05-diffuse.md)

## Source

- `library/chemistry/src/implementation/scope.ts`
