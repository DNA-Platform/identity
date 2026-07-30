# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$apply$** — A symbol-keyed method on `$Particle` that receives React props and maps them onto the instance, storing `children` into `$children$` and prefixing each remaining prop key with `$` before setting it.

**$activeView$** — A symbol-keyed slot holding the view function the instance currently renders through (the vertical-perspective axis). Unset means "render through the instance's own-class `view`." Read and written through the internal `$view` accessor; consulted by `$renderView$`.

**$cid$** — The chemical identity symbol, storing a unique auto-incrementing integer on each `$Particle` instance, used as the primary identity discriminator across the framework.

**$isPerspective$** — An untyped static marker stamped on a subclass by `reveal`, recording that this class has already filed its lens (so `reveal` is idempotent — once per subclass) and marking it as a perspectival lens rather than a perspective base.

**$isTemplate$** — A computed getter returning `true` when the particle is the static template singleton for its class, checked via `this == this[$type$][$$template$$]`.

**$isViewBase$** — An own-property marker stamped on `$Particle.prototype` and `$Chemical.prototype`. It marks the framework view methods (which render `toString()` / children) as structural fallbacks, not semantic perspectives, so the vertical `look` walk skips them and bottoms out at the highest user-defined view.

**$Particle** — The base class for all framework objects, providing identity fields, lifecycle phases, a view function, the perspective machinery (both axes), and the `use()` method that makes any particle renderable in React.

**$perspectives$** — A static slot on a perspective base class holding the array of filed `Perspective` lenses (the horizontal axis). `reveal` pushes onto it; `get perspectives` reads, clones, and binds it per instance.

**$renderView$** — A symbol-keyed internal render entry. `$lift` calls it instead of `view()` so the active vertical lens (`$activeView$`) is consulted without putting logic inside the user-overridable `view()`. Defaults to the instance's own-class `view`.

**$view** — A `protected` accessor on `$Particle` that gets and sets the active view function (Doug: "`$view` gets/sets from `this.view.view`"). The getter returns `$activeView$` or the own-class `view`; the setter swaps the active view and invalidates `$viewCache$`. Internal — `look` is the public surface.

**$symbol$** — A symbol-keyed property storing the particle's human-readable string identifier, formatted as `$Chemistry.{ClassName}[{cid}]`, also returned by `toString()`.

**$template$** — A symbol-keyed property pointing to the particle instance that serves as the prototype template for its view, set to `this` during construction.

**$type$** — A symbol-keyed property storing a reference to the particle's constructor function, providing runtime type identity for reflection and template checks.

**isParticle** — The marker that identifies an object as participating in the particle system, stamped during construction or particularization.

**look()** — The public verb of the vertical perspective axis. `look('up'|'down')` walks the instance's own ancestry, moving a scope-tracked cursor toward the base view or the actual class and setting `$view`; both clamps are silent no-ops. `look('up?'|'down?')` does not move — it returns whether that move is possible, and reading it in a render subscribes the consumer to the cursor.

**particular** — The constructor pattern where `$Particle` receives a non-Particle object, sets itself as the object's prototype via `Object.setPrototypeOf`, and returns the original object with particle behavior through delegation.

**Perspective** — A lens class carrying a `view` popped off a subclass and an `instance` it is bound to. `render()` runs the view against the bound instance — "this object, seen this way." The unit of the horizontal axis.

**perspectives** — A getter on `$Particle` returning the instance's bound `Perspective` lenses (the horizontal axis): it clones each lens filed on the perspective base, stores `this` on the clone, and caches per instance so a menu sees stable lens identity.

**prototypal view** — A lightweight prototype-linked copy created via `Object.create()` that inherits all state from the original through the chain, used by `use()`, `$as()`, and `$of()` to share state without duplication.

**reveal()** — A `protected` method called from a subclass's (template) constructor. It pops the subclass's `view` onto a `Perspective`, marks the subclass `$isPerspective$` (idempotent), and files the lens on the perspective base's `$perspectives$`. The horizontal axis's augmentation-from-outside.

**use()** — A method on `$Particle` that wraps a view function into a callable React component carrying `$view` and `$this`, creating a prototype-derived copy with a fresh cid for each call.

**view()** — The primary render method on `$Particle`, returning `ReactNode` output; defaults to `this.toString()` and is overridden by subclasses to produce their own rendering.

**viewLevel** — A getter returning the constructor name of the class whose `view` the instance currently renders through (the current altitude on the vertical axis). For a breadcrumb / clamp UI.
