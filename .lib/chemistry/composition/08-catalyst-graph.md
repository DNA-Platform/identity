# Catalyst Graph

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The catalyst graph wires composed chemicals into a shared reaction system. Each `$Chemical` carries `$catalyst$` (its top-of-graph reference), `$$parent$$` (its parent), and a `$parent$` setter that rewires the graph on join. Composed chemicals share a reaction tree so writes in one chemical's handler can reach derivatives in another.

## Rules

- *(TBD — `$catalyst$` points at the graph root.)*
- *(TBD — `$$parent$$` is set by `$bind`.)*
- *(TBD — `$parent$` setter rewires on join.)*

## Cases

- Cross-chemical write through composition.
- The catalyst's reaction tree shape.

## See also

- [`bind`][s-III-6] — the static-binding entry.

<!-- citations -->
[s-III-6]: ./06-bind.md
