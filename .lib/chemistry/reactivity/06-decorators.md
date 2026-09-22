# Decorators

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

**A decoration overrides a name's default, per property, filed by prototype.** A bare name is live and `@inert()` stills it; an underscore name is still and `@reactive()` wakes it; a `$`-lowercase name is live and `@inert()` stills it too. **[`$Reflection.reactive`](../../package/src/abstraction/bond.ts) asks the name's default, then reads the decoration back up the prototype chain, stopping at the one prototype that OWNS the base marker.**

> ***CORRECTED 2026-09-22 — neither decorator had ever been consulted.*** *Two faults, both in `bond.ts`. **The lookup tested the base marker with `chemical?.[$isChemicalBase$]`, and every chemical inherits it from `$Particle.prototype`**, so the walk stopped at its first step for everything and answered undefined; the molecule's own walk had always asked with `Object.hasOwn`. **And `reactive` returned early for any `isSpecial` name before asking**, so `@inert()` on a `$`-lowercase member did nothing — [the three passes](../particle/12-the-three-passes.md#found-on-the-way) found that half. The suite held no promise about either. Found by the public redraft's session on the way to a different defect; fixed on Doug's ruling with four promises, [`decorators.test.tsx`](../../package/tests/abstraction/decorators.test.tsx).*

## Rules

- **`@inert()` stills a bare or `$`-lowercase member**: no accessor is installed, a write lands and wakes nothing, a read is not snapshotted.
- **`@reactive()` wakes an underscore member.**
- **A decoration holds down the chain**: a parent's `@inert()` on one member survives a subclass decorating another.
- **A decoration is read from the instance up to the base**, so a derived face inherits its class's decorations.

## Cases

- `@reactive() _count = 0` with `this._count++` in a handler — draws.
- `@inert() count = 0` with `this.count++` — the field is `1`, the drawing still says `0`.
- `@inert() $cache = 0` — the same.
- `class $Sub extends $Base` where `$Base` has `@inert() quiet` and `$Sub` has `@inert() other` — `quiet` stays still in `$Sub`.

## See also

- `$Reflection` in [bond.ts](../implementation/04-bond.md) — the registries and the walk.
- [Reactive properties](01-reactive-properties.md) — the defaults a decoration overrides.
