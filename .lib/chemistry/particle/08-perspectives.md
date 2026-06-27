# Perspectives

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

A particle has *one* `view()`. Perspective is the machinery that lets a single live particle be rendered through *more than one* — without changing the instance, without props, and without the thing doing the rendering knowing which lens it holds. There are two orthogonal axes. The **horizontal** axis collects the views of sibling subclasses into a menu of lenses filed on a shared base: augmentation from outside. The **vertical** axis walks one instance up and down its *own* prototype chain to render it through any ancestor's `view` — revert to base view. They are independent — sibling lenses versus own ancestry — and they compose.

Both axes live on `$Particle`. Perspective is a view concern, and views live here; `$Chemical` inherits the whole surface unchanged. This chapter describes both *mechanically*: the horizontal `reveal` / `perspectives` pair, then the vertical `look` / `$view` pair. The framework symbols that back them — `$activeView$`, `$renderView$`, `$isViewBase$` — are internal, and named where they bear on the behavior. The chapter after this one, [The Composition of Perspectives][composition], is the *why* — the design philosophy these mechanics are built to serve, the third axis they imply, and how to design your own features around them.

## The two axes

Picture a base class `$Color` with three subclasses, `$Swatch`, `$Hex`, and `$Named`, each overriding `view`. That is a **horizontal** family: siblings, each a different way of drawing the same data. The horizontal axis gathers their views into a list of lenses on `$Color`, so a menu can offer "show this color as a swatch / as hex / by name."

Now picture a single chain, `$PeriodicCell → $NamedElement → $Element`, where each ancestor draws progressively less: the cell draws a full group-colored tile, the named element a symbol-plus-name, the element just the symbol. That is a **vertical** ancestry. The vertical axis walks one live `$PeriodicCell` *up* toward `$Element` — rendering the same instance through a more general ancestor's `view` — and back *down* toward its actual class.

The axes are orthogonal because they index different things. Horizontal indexes *siblings of a base* (classes that are not on the instance's own prototype chain). Vertical indexes *the instance's own ancestors* (classes that are). A chemical can carry both: a menu of sibling lenses, and an up/down walk of its own inheritance, at once.

## Horizontal — `reveal` and `perspectives`

A perspective, on this axis, is a *subclass that overrides `view`* and announces itself. The announcement happens from the subclass's own (template) constructor by calling [`reveal`][reveal]:

```typescript
class $Hex extends $Color {
    constructor() {
        super();
        this.reveal(new Perspective('hex'));
    }
}
```

[`reveal`][reveal] does three things. It **pops** the calling subclass's `view` off onto the [`Perspective`][perspective-src] lens (`perspective.view = this.view`). It stamps the subclass with the `$isPerspective$` marker so a second construction does not re-file the lens — `reveal` is idempotent, once per subclass. And it walks up from the subclass past any already-perspectival ancestors to the *base* — the first class in the chain that is not itself a lens — and pushes the perspective onto that base's static `$perspectives$` array. The lenses accrete on the base, contributed by the subclasses, from outside. This is the `$` membrane made dynamic: the base did not declare these views; its subclasses augmented it with them.

Filing a lens is only half. The other half is *binding* it to a live instance, which is what reading [`perspectives`][perspectives] does:

```typescript
get perspectives(): Perspective[] {
    // walk to the perspective base, read its filed lenses,
    // clone each, set `instance = this` on the clone, cache per instance
}
```

Each read clones every filed lens and stores `this` on the clone (`lens.instance = this`), then memoizes the bound array in a per-instance `WeakMap` so repeated reads return the *same* lens objects — stable identity a menu can key on. A bound lens is "this object, seen this way": [`Perspective.render()`][perspective-src] runs its popped `view` with the bound instance as `this`, drawing that instance's own live data through that lens. The component rendering a perspective never has to hand it the object; the object is already inside the lens. A `Perspective` also carries a `name` (the menu label) and a `default` flag (the lens a menu starts on).

So the horizontal flow is: subclasses `reveal` their views onto the base from their constructors; an instance reads `perspectives` to get those views bound to itself; a menu renders the bound lenses and lets a user pick one.

## Vertical — `look` and `$view`

The vertical axis needs no `reveal` and no menu. It uses inheritance that is already there. Single inheritance means each step up the prototype chain has exactly one parent, so "render through the parent's view" is unambiguous — there is one parent, one more general view, no choice to disambiguate.

The public verb is [`look`][look]:

```typescript
look(direction: 'up' | 'down'): void;
look(direction: 'up?' | 'down?'): boolean;
```

`look('up')` moves toward the base view (more general); `look('down')` moves toward the instance's actual class (more specific). Both clamps are *silent no-ops*: `'up'` stops at the highest user-defined view-level and never reaches the framework's `$Chemical` / `$Particle` view; `'down'` stops at the instance's actual class. Walking off either end does nothing rather than throwing.

The `?` forms are the same verb in a different mood. `look('up?')` and `look('down?')` **do not move** — they return whether that move is *possible*. This is why there is no separate `canLook`: the query and the act are one verb, called twice — `look('up?')` in a render to decide whether to grey a button, `look('up')` in that button's handler to actually move. The two TypeScript overloads give each mood its exact return type: the bare forms return `void`, the `?` forms return `boolean`. Reading a `?` form in a render also *subscribes* the consumer to the cursor, so the greying stays live as the walk moves (see "Why a once-mounted consumer repaints" below).

A [`viewLevel`][view-level] getter returns the constructor name of the class whose view is currently active — `"PeriodicCell"`, `"NamedElement"`, `"Element"` — for a breadcrumb that shows the current altitude.

Under the verb, the move is an index into a list. [`$viewLevels`][view-levels] is the ordered chain of *user* view-levels for the instance, most-derived first: every ancestor class whose prototype owns a real `view` method, **excluding** the framework bases. The exclusion is by the own-property `$isViewBase$` marker stamped on `$Particle.prototype` and `$Chemical.prototype` — their `view` methods render `toString()` and children, structural fallbacks, not semantic perspectives, so the walk skips them and bottoms out at the highest user view. `look` moves a cursor along this list and points [`$view`][view-accessor] at the indexed level's `view` function.

[`$view`][view-accessor] is the internal write-point — Doug's phrasing was "`$view` gets and sets from `this.view.view`." Its getter returns the active view (`$activeView$`) or, when none is set, the instance's own-class `view`. Its setter swaps the active view function and invalidates the view cache so the instance repaints through the new lens. It is `protected`: `look` is the public surface; `$view` is the mechanism `look` drives. The render path consults the active view through [`$renderView$`][render-view] rather than calling `view()` directly — `$lift` calls `$renderView$`, which returns `($activeView$ ?? view).call(this)` — so the vertical lens is honored without putting any branching logic inside the user-overridable `view()`.

## Why a once-mounted consumer repaints

The subtle part of the vertical axis is reactivity. In this framework, *renders are not scope-tracked* — only event handlers are (see the [reactivity contract][reactivity-contract]). So a consumer that read `viewLevel` once at mount would not, by the ordinary render path, learn that a later `look` moved the cursor. The cursor is what closes that gap: it is a **scope-tracked reactive read and write**, not a plain `#private` field.

Reading the cursor — in `look`, in `viewLevel`, in a `?` query, and so transitively in any consumer's render or breadcrumb — records a scope read against the instance, exactly as a reactive property field does. The value is mirrored into the instance's `$backing$` store under a reserved string key, so the scope's read-snapshot diff at finalize sees the cursor move. Writing the cursor goes through the same channel a reactive setter uses: store, mirror, then either record a scope write (inside a handler's scope, so finalize re-reacts every consumer that read it) or — outside any scope — fire the reaction and *diffuse* up the composition tree immediately. That diffuse up the bonded-child walk is what carries the repaint to a once-mounted consumer: the consumer subscribed to the cursor by reading it, and the write re-reacts it. (A `#private` field was the first attempt here; it crashed on template derivatives, whose prototype chain does not carry the private slot. The scope-tracked reactive cursor is both what fixes that and what makes the live repaint work.)

## The two together

The axes compose without interfering. `perspectives` reads the lenses filed by *sibling* subclasses on a shared base. `look` walks the instance's *own* ancestors. One is augmentation from outside the chain; the other is altitude within it. A chemical with a rich ancestry and a family of sibling lenses offers both at once: a menu that switches which sibling view draws it, and an up/down control that renders its current view through a more general ancestor — revert to base — and back. One object, seen through any sibling lens, at any altitude of its own inheritance. Natural perspectival polymorphism.

## See also

- [The Composition of Perspectives][composition] — the design philosophy behind these mechanics: function composition, inheritance as valence, the third axis, and how to design features around them.
- [view][] — the `view()` method, `$viewCache$`, and the render boundary the active view swaps.
- [lift][] — where the render body calls `$renderView$` instead of `view()`.
- [identity][] — what `toString()` returns when a framework base view is reached (and why `$isViewBase$` excludes it).
- The [reactivity contract][reactivity-contract] — why handlers are scoped and renders are not, which is why the cursor must be reactive.
- The glossary indexes every perspective term by name.

<!-- citations -->
[composition]: 09-the-composition-of-perspectives.md
[view]: 06-view.md
[lift]: 04-lift.md
[identity]: 01-identity.md
[reactivity-contract]: ../authorship/04-the-reactivity-contract.md

[reveal]: ../../package/src/abstraction/particle.ts#L248
[perspectives]: ../../package/src/abstraction/particle.ts#L232
[perspective-src]: ../../package/src/abstraction/perspective.ts#L17
[look]: ../../package/src/abstraction/particle.ts#L203
[view-level]: ../../package/src/abstraction/particle.ts#L217
[view-levels]: ../../package/src/abstraction/particle.ts#L151
[view-accessor]: ../../package/src/abstraction/particle.ts#L126
[render-view]: ../../package/src/abstraction/particle.ts#L138
