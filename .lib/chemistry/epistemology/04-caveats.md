# Caveats

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Negative epistemology. A caveat is a behavior we *thought* worked and didn't, or a corner whose past failure earns naming. When a caveat resolves, the page is preserved as institutional memory.

How caveats relate to [open questions](05-open-questions.md): a caveat documents a **resolved** misconception (or one we've decided to live with). An open question documents an **unresolved** uncertainty. When an open question is investigated and the resolution is "the framework was wrong," it becomes a caveat.

---

## Cross-chemical handler fan-out

**Fixed sprint 24.** Writing a held instance's reactive prop from inside *another* chemical's wrapped event handler used to land the value but skip the repaint.

The bond setter in `bond.ts` has two paths. The no-scope path called `react()` and `fanOutToDerivatives()`. The in-scope path (event handlers run inside a scope via `withScope`) only called `react()` on finalize — it did not fan out to derivatives. Held-instance components mounted via `$lift` *are* derivatives; their `$update$` hook lives on the derivative, not on the held instance. Without fan-out, derivatives never woke.

The fix: `scope.finalize()` now fans out to derivatives symmetrically with the no-scope path. Re-entrancy is safe because `withScope` clears `$currentScope` before calling `finalize()`.

---

## Short prop name instability

**Fixed sprint 24.** Single-letter `$<x>` reactive props (`$v`, `$x`, `$y`) were silently inert.

`$Reflection.isSpecial` gated reactivity on `property.length > 2`. A name like `$v` has length 2, so it was treated as non-reactive without any warning. The fix: change `>` to `>=`. Two characters is the minimum for a `$`-prefixed identifier.

Pinned by `tests/regression/short-prop-name.test.tsx` — four tests covering held `.Component`, `$()` dispatch, single mount, and two mounts.

---

## Particularization prototype loss

**Fixed sprint 22.** The first version of `new $Particle(plainObject)` replaced the object's prototype with `Object.setPrototypeOf`, breaking `instanceof` checks for the object's original class.

`Object.setPrototypeOf(error, particle)` doesn't insert into the chain — it replaces the chain. `error -> Error.prototype -> Object.prototype` becomes `error -> particle -> $Particle.prototype -> Object.prototype`. The `Error.prototype` link is gone; `instanceof Error` returns `false`.

Sprint 22 replaced prototype replacement with **mixin insertion**: a fresh object whose prototype *is* the user's original prototype, with particle methods copied as own properties. `instanceof Error` walks the chain, finds `Error.prototype`, returns `true`. Trade-off: `instanceof $Particle` now returns `false`; use `isParticle(x)` instead.

---

## Particle allocates reactivity machinery

**Current (accepted trade-off).** Every `$Particle` allocates a `$Molecule` and `$Reaction` unconditionally at construction, even for particles that never form bonds, never re-render, and never participate in JSX — including particularized carriers.

Before sprint 27, the molecule and reaction lived on `$Chemical`. The sprint-27 migration moved them down to `$Particle` for uniformity: every particle is now a fully-reactive carrier. `$lift` no longer checks whether its parent has a molecule; `$Chemical` no longer has a special "I have a molecule, you don't" branch.

The cost: two object allocations per particle. For typical chemistry workloads (a few hundred instances), invisible. For workloads constructing many short-lived particularized carriers in a hot path, profile.

What to watch: particularized carriers inherit the cost; the reaction registry grows with each particle (entries are removed on unmount, but particles allocated and immediately discarded without mounting do not currently auto-unregister).
