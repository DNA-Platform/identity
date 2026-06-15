# The Class

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`$Chemical` extends `$Particle` with the machinery for composition: parent-child relationships, the binding constructor, the catalyst graph, and the synthesis orchestrator. A `$Chemical` is the container that receives JSX children and binds them as typed arguments. The class is defined in `src/abstraction/chemical.ts`.

## Rules

- *(TBD — extends `$Particle`.)*
- *(TBD — adds `$synthesis`, `$catalyst`, `$$parent$$`, `$lastProps$`, `$remove$`.)*
- *(TBD — overrides `Component` getter to take the template path.)*
- *(TBD — declares a binding constructor.)*

## Cases

- A minimal `$Chemical` subclass with a binding constructor.
- A `$Chemical` with a `$catalyst` graph wiring.

## See also

- [The binding constructor][s-III-3] — the render-time method.
- [The catalyst graph][s-III-8] — the parent-child wiring.
- [Dual constructor][s-III-2] — the two-moment framing.

<!-- citations -->
[s-III-2]: ./02-dual-constructor.md
[s-III-3]: ./03-binding-constructor.md
[s-III-8]: ./08-catalyst-graph.md
