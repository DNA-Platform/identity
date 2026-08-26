# particle.ts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The `$Particle` source module. Defines the class, the `$lift` primitive, the render filters, and the `isParticle` predicate. The constructor's particularization branch lives here, and so does the series of views — `frame()`, the `$views$` dictionary and the `$look` that chooses between them; `$Chemical` inherits all of it.

## Perspective surface

The series of views is a member of `$Particle`, because drawing is a view concern and views live here. *It replaced two perspective axes and a `Perspective` class on 2026-08-25 — [Looks](../particle/08-perspectives.md) records what was given up along with what it bought.*

- **The dictionary.** `get [$views$]` builds the instance's `Map` of looks — keyed by position and by any name `@look` gave — from the module-scope `deepestLook` walk over its own prototype chain, held in the module-scope `viewTables` WeakMap. A gap in the series raises; an accessor is not a look, by the descriptor-value test.
- **The choice.** `$look` is a plain reactive field declared beside `$show` and `$hide`, and it is bonded through `molecule.ts`'s `universalProperties` for the same reason they are — it sits above the `$isChemicalBase$` ceiling that property discovery stops at. `frame()` reads the dictionary at `$look` and raises `missingLook(…)` on a miss; `[$renderView$]` is the render entry `$lift` calls, and it calls `frame()`. *There is no stored active view and no hand-written reactivity: the ordinary bond setter already records a scope write or fires the reaction and diffuses.*

`$lift` calls `p[$renderView$]()` (not `p.view()`) at both the deferred-effect re-render and the main render, so a vertical lens set via `look` is the function React reconciles.

## See also

- [The class](../particle/01-identity.md)
- [Looks](../particle/08-perspectives.md) — the series, conceptually.
- `isParticle`
- [Render filters](../particle/05-render-filters.md)
- [`$lift`](../particle/04-lift.md)

## Source

- `library/chemistry/src/abstraction/particle.ts`
