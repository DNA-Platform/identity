# diffuse(chemical)

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`diffuse(chemical)` is the fan-out function in [scope.ts](../implementation/08-scope.md). It walks the chemical's `$derivatives$` set — but only when the chemical *owns* the set (`hasOwnProperty($derivatives$)`) — and re-renders each derivative.

## Rules

- *(TBD — gated on `hasOwnProperty($derivatives$)`.)*
- *(TBD — re-renders each registered derivative.)*

## Cases

- A chemical whose own derivatives are fanned out.
- A derivative that prototype-inherits `$derivatives$` and does not fan out.

## See also

- The `$derivatives$` registry — the set this reads.
- The ownership gate — the `hasOwnProperty` check.
- [scope.ts](../implementation/08-scope.md) — the source file.
