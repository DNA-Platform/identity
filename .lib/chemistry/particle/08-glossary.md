# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$apply$** — A symbol-keyed method on `$Particle` that receives React props and maps them onto the instance, storing `children` into `$children$` and prefixing each remaining prop key with `$` before setting it.

**$cid$** — The chemical identity symbol, storing a unique auto-incrementing integer on each `$Particle` instance, used as the primary identity discriminator across the framework.

**$isTemplate$** — A computed getter returning `true` when the particle is the static template singleton for its class, checked via `this == this[$type$][$$template$$]`.

**$Particle** — The base class for all framework objects, providing identity fields, lifecycle phases, a view function, and the `use()` method that makes any particle renderable in React.

**$symbol$** — A symbol-keyed property storing the particle's human-readable string identifier, formatted as `$Chemistry.{ClassName}[{cid}]`, also returned by `toString()`.

**$template$** — A symbol-keyed property pointing to the particle instance that serves as the prototype template for its view, set to `this` during construction.

**$type$** — A symbol-keyed property storing a reference to the particle's constructor function, providing runtime type identity for reflection and template checks.

**isParticle** — The marker that identifies an object as participating in the particle system, stamped during construction or particularization.

**particular** — The constructor pattern where `$Particle` receives a non-Particle object, sets itself as the object's prototype via `Object.setPrototypeOf`, and returns the original object with particle behavior through delegation.

**prototypal view** — A lightweight prototype-linked copy created via `Object.create()` that inherits all state from the original through the chain, used by `use()`, `$as()`, and `$of()` to share state without duplication.

**use()** — A method on `$Particle` that wraps a view function into a callable React component carrying `$view` and `$this`, creating a prototype-derived copy with a fresh cid for each call.

**view()** — The primary render method on `$Particle`, returning `ReactNode` output; defaults to `this.toString()` and is overridden by subclasses to produce their own rendering.
