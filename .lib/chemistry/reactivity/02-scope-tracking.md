# Scope Tracking

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

Event handlers wrapped via `augment` run inside a `withScope` block. Reads are recorded for snapshot; writes are recorded as dirty. On `scope.finalize()`, reactions fire and fan out to derivatives via [diffuse](./05-diffuse.md). Code outside a scope (e.g., a `setTimeout`) takes the no-scope write path with the same fan-out semantics.

## Rules

- *(TBD — `withScope` opens a tracking frame.)*
- *(TBD — reads recorded for snapshot.)*
- *(TBD — writes recorded as dirty.)*
- *(TBD — `scope.finalize` fires reactions.)*

## Cases

- Click handler triggering re-render.
- `setTimeout` write outside scope (no-scope path).

## See also

- [diffuse](./05-diffuse.md) — the fan-out function.
- [scope.ts](../implementation/08-scope.md) — the source.
- [augment.ts](../implementation/11-augment.md) — the handler-wrapping.
