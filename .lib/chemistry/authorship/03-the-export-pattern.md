# The Export Pattern

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

How a chemical module exports: the class, the component via `$()`, and the type via `I<T>`.

## The canonical shape

If a `.tsx` file defines a usable Component, it exports that Component. The Component is named in capital-first React convention (`Book`, `Lab`); the chemical class behind it is named `$Book`, `$Lab`. Other files import the Component and use it directly — they never instantiate the class to obtain a Component.

```typescript
// book.tsx
import { $Chemical, $ } from '@dna-platform/chemistry';

class $Book extends $Chemical { ... }
export const Book = $($Book);
```

Consumers import `Book` and write `<Book>...</Book>`. They never see `$Book`. The `$()` callable is the membrane.

## Two forms

- **Class form** — `$($Book)`. Use this for stateless templates: every mount runs the bond constructor fresh. This is the default.
- **Instance form** — `$(lab)`. Use this *only* when one held instance owns state that must persist across mounts (e.g. an app-level `lab` holding the active route). The instance form routes through `$lift` and reuses the held object. Lowercase `lab` for the instance, capital `Lab` for the exported Component.

## The inverse form

`$(Component)` takes a Component and returns the chemical instance it wraps. This is for the rare case where the instance was created inside the module and you need it from outside — debugging, framework-level inspection, or test harnesses.

## What there is not

There is no `.Component` property on a chemical. The internal accessor is a symbol-keyed method (`[$resolveComponent$]`) the framework uses internally; it is not part of the public API and `chemical.Component` returns `undefined`. The only way to obtain a Component is the `$()` callable.

## Base classes don't export Components

`$Particle` and `$Chemical` are extended by other classes; they do nothing as standalone Components. Only files that define a *usable* Component — a chemical the consumer would render in JSX — should export one.

## Identity stability

The `$` never escapes the module boundary. The Component is identity-stable — importing `Book` from many files all yields the same Component, so React reconciliation works as expected. There is no need to instantiate `$X` repeatedly to "get the same Component" — you wouldn't anyway, and `$()` makes the cache implicit.
