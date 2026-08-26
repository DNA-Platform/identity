# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$apply$** — A symbol-keyed method on `$Particle` that receives React props and maps them onto the instance, storing `children` into `$children$` and prefixing each remaining prop key with `$` before setting it.

**$look** — The reactive field naming which of a chemical's looks draws it — a position, or a name `@look` gave one. It reaches the instance as the JSX attribute `look`, and it is an ordinary reactive field, so writing it in a handler repaints the instance and, through `finalize`'s walk up the composition tree, every ancestor with it.

**$cid$** — The chemical identity symbol, storing a unique auto-incrementing integer on each `$Particle` instance, used as the primary identity discriminator across the framework.

**$views$** — The symbol under which every instance holds its **view dictionary**: each look it can draw, keyed both by position and by any name `@look` gave it. Built once per instance from its own prototype chain and held in a module `WeakMap`.

**$isTemplate$** — A computed getter returning `true` when the particle is the static template singleton for its class, checked via `this == this[$type$][$$template$$]`.

**looks** — The regular expression that decides whether a member name is part of the series (`view`, `$view`, `$$view`, and onward). Shared by the particle, which builds the dictionary from it, and the molecule, which uses it to make sure no look is ever bonded over.

**$Particle** — The base class for all framework objects, providing identity fields, lifecycle phases, the series of views and the `$look` that chooses between them, and the `use()` method that makes any particle renderable in React.

**a look** — One member of a chemical's series of views: `view` is 0, `$view` is 1, `$$view` is 2, each further `$` the next. A subclass extends the series by declaring the next member and replaces a look by overriding its name.

**$renderView$** — A symbol-keyed internal render entry. `$lift` calls it instead of `view()` so the active vertical lens (`$activeView$`) is consulted without putting logic inside the user-overridable `view()`. Defaults to the instance's own-class `view`.

**$view** — A `protected` accessor on `$Particle` that gets and sets the active view function (Doug: "`$view` gets/sets from `this.view.view`"). The getter returns `$activeView$` or the own-class `view`; the setter swaps the active view and invalidates `$viewCache$`. Internal — `look` is the public surface.

**$symbol$** — A symbol-keyed property storing the particle's human-readable string identifier, formatted as `$Chemistry.{ClassName}[{cid}]`, also returned by `toString()`.

**$template$** — A symbol-keyed property pointing to the particle instance that serves as the prototype template for its view, set to `this` during construction.

**$type$** — A symbol-keyed property storing a reference to the particle's constructor function, providing runtime type identity for reflection and template checks.

**isParticle** — The marker that identifies an object as participating in the particle system, stamped during construction or particularization.

**@look(name)** — The attribute that names a look, so `look="github"` reaches the same drawing `look={1}` does. Registered by prototype in `bond.ts` beside `@inert` and `@reactive`, and read back up the chain the same way, so a subclass's name is found from the subclass and not from its base. In an application it needs `@babel/plugin-proposal-decorators`, because Babel does not read `experimentalDecorators`.

**particular** — The constructor pattern where `$Particle` receives a non-Particle object, sets itself as the object's prototype via `Object.setPrototypeOf`, and returns the original object with particle behavior through delegation.

**Perspective** — A lens class carrying a `view` popped off a subclass and an `instance` it is bound to. `render()` runs the view against the bound instance — "this object, seen this way." The unit of the horizontal axis.

**look (the attribute)** — The JSX attribute, typed `number | string`, that chooses which look draws. It is named in `$Attributes` and intersected into `$Properties<T>`, because the computed props type otherwise excludes everything declared on `$Chemical`.

**prototypal view** — A lightweight prototype-linked copy created via `Object.create()` that inherits all state from the original through the chain, used by `use()`, `$as()`, and `$of()` to share state without duplication.

**the dictionary** — The `Map` held under `$views$`. Both a position key and a name key reach the **same function**, which is what makes `look={1}` and `look="github"` produce identical output. A gap in the series is refused when it is built.

**use()** — A method on `$Particle` that wraps a view function into a callable React component carrying `$view` and `$this`, creating a prototype-derived copy with a fresh cid for each call.

**view()** — The primary render method on `$Particle`, returning `ReactNode` output; defaults to `this.toString()` and is overridden by subclasses to produce their own rendering.

**out of bounds** — A miss in the dictionary. One lookup on the render path, raised with a sentence naming what was asked and what exists — the form `$Location.read()` already used for the same kind of mistake.
