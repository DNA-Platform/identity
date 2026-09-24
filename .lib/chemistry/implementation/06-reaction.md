# reaction.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The per-chemical reaction unit module. Defines `$Reaction` and the dirty-set / re-render trigger.

**`react()` is the one door to a re-render, and it refuses four times:** *no chemical, a destroyed one, one unmounting, and — since 2026-09-24 — one that is drawing, [whose dirtiness starts after render](../reactivity/01-reactive-properties.md#not-dirty-while-it-draws).*

## See also

- [The class](../particle/01-identity.md)
- [Scope tracking](../reactivity/02-scope-tracking.md)

## Source

- `library/chemistry/src/abstraction/reaction.ts`
