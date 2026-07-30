# particle.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The `$Particle` source module. Defines the class, the `$lift` primitive, the render filters, and the `isParticle` predicate. The constructor's particularization branch lives here. As of sprint 42 the perspective machinery — both axes — also lives here; `$Chemical` inherits it.

## Perspective surface

Both perspective axes are members of `$Particle` (they were on `$Chemical` through sprint 41 and migrated down in sprint 42, since perspective is a view concern and views live on `$Particle`):

- **Horizontal.** `get perspectives` and `protected reveal(perspective)`, backed by the module-scope `perspectiveCache` WeakMap and the `Perspective` import. `reveal` pops a subclass's `view` onto a lens, marks the subclass `$isPerspective$`, and files the lens on the perspective base's static `$perspectives$`. `perspectives` clones the filed lenses, binds `this`, and memoizes per instance.
- **Vertical.** `look(direction)` — two TS overloads, `'up'|'down'` returning `void` (move) and `'up?'|'down?'` returning `boolean` (query). `get viewLevel` returns the current altitude's class name. Internals: the `protected get/set $view` accessor reads/writes the active view function (`$activeView$` slot) and invalidates `$viewCache$`; `[$renderView$]` is the render entry `$lift` calls instead of `view()` so the active view is honored; `private get $viewLevels` builds the ordered user-view-level chain, excluding the framework bases via the `$isViewBase$` own-property marker (stamped on `$Particle.prototype` here and on `$Chemical.prototype` in `chemical.ts`); `private get $viewCursor` / `writeCursor` are the **scope-tracked** reactive cursor — read records a scope read, write mirrors into `$backing$` (via `viewCursorBacking`) and records a scope write or, outside a scope, fires the reaction and `diffuse`s up the bonded-child tree. The cursor is symbol-keyed rather than `#private` so it survives template derivatives.

`$lift` calls `p[$renderView$]()` (not `p.view()`) at both the deferred-effect re-render and the main render, so a vertical lens set via `look` is the function React reconciles.

## See also

- [The class](../particle/01-identity.md)
- [Perspectives](../particle/08-perspectives.md) — both axes, conceptually.
- `isParticle`
- [Render filters](../particle/05-render-filters.md)
- [`$lift`](../particle/04-lift.md)

## Source

- `library/chemistry/src/abstraction/particle.ts`
