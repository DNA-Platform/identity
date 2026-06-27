# The Composition of Perspectives

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The [previous chapter][mechanics] describes the perspective machinery — `reveal`, `perspectives`, `look`, `$view`. This chapter describes the design *underneath* those mechanics: what perspectives *are*, structurally, and how to design features around them. The mechanics are small because the idea is right. The idea is Doug's, and it is this: a perspective is **function composition with the function's owner reified alongside it**. Once you see it that way, every axis falls out, the type system becomes a composition rule rather than a constraint, and the framework starts meaning its own name.

## The core — a perspective is function composition

The whole feature reduces to one line. A perspective renders by

```typescript
render() { return this.view.call(this.instance); }
```

A [`Perspective`][perspective-src] carries two fields that look unremarkable until you notice they are the two halves of a function call: `view`, the lens — a function — and `instance`, the object that function runs against — the `this`. The object reifies *both* the function and its receiver, on the same object, as independent fields. This is the design move, and it is Doug's. Carrying both on one object is exactly what makes everything below easy.

The ordinary way to render an object is `instance.view()` — the method is *welded* to the receiver; you cannot say "this view, that object." Separating `view` from `instance` un-welds them. A method call `o.m()` is really `m.call(o)`, two things; a `Perspective` is that call held *open*, its two operands sitting in named slots, each independently substitutable. Fix `instance` and vary `view`, and you render one object many ways. Fix `view` and vary `instance`, and you render many objects one way. Both are just "swap one operand of the held-open call." Everything else in perspectives is a disciplined way of doing one of those two swaps.

## Inheritance is the grounding — the valence

A held-open call invites an obvious question: which `(view, instance)` pairings are *legal*? You cannot run an arbitrary view against an arbitrary object — a view body reaches into `this`'s members, and if the object lacks them the call is nonsense. The answer is already in the type system, and it is exact.

A view defined at class `C` is a valid rendering of any instance that **is-a** `C`. The reason is mechanical: the view body reaches `this`'s members, and only an instance at-or-below `C` in the hierarchy is guaranteed to have them. So the inheritance lattice *is* the runtime rule for which `(view, instance)` pairings are legal — it is the **valence** of the composition, the thing that says which recombinations are allowed. This is the Liskov substitution principle turned from a correctness obligation into a composition algebra: "an `is-a C` is substitutable wherever a `C` is expected" becomes "any `is-a C` is a legal receiver for `C`'s view."

This is what makes the vertical walk sound. Walk a view **up** its ancestry and it *generalizes* — it touches fewer, more-general members, so it is legal for *more* instances; the base view renders the whole family. Walk **down** and it *specializes* — touches more specific members, legal for *fewer*. "Revert to base view" is not a UI gimmick; it is moving along the valence toward the rendering that is legal for the most instances. The walk never breaks because each step lands on a view whose defining class is still an ancestor of the live instance — still a legal pairing by is-a.

## Three axes, not two

The two-operand framing predicts the axes. Hold the held-open call `view.call(instance)` and ask what you can vary:

- **Vertical — fix the instance, walk the view.** One live object; move `view` up and down *its own* ancestry. This is [`look('up'/'down')`][look] — revert to base and back. Documented in the [mechanics chapter][mechanics].
- **Horizontal — fix the instance, swap in a sibling view.** Sibling subclasses each `reveal` their `view` onto a shared base; reading `perspectives` binds each to the instance for a menu. The lenses are augmented from *outside* the instance's own chain. Also in the [mechanics chapter][mechanics].
- **The third axis — fix the view, swap the instance.** This one is unexplored in the API but it is *implied*, and it is the most interesting. Because a `Perspective` holds `instance` as a plain field, you can point it at a *different object* and render that one through the *same* lens. The pairing is legal exactly when the new instance **is-a** the view's defining class. A set of instances becomes interchangeable across each other's views — a collection rendered uniformly through one shared lens, or each drawn through any lens whose class it is-a.

The first two axes vary the lens; the third varies the receiver. They are the two operands of the same call. A framework that only ever wrote `instance.view()` could express none of these, because it never separated the two operands in the first place.

## The grid

Lay it out. Put the **instances** down the left, the **view-altitudes** (the defining classes, base on one end, most-derived on the other) across the top. Each cell is a candidate `(view, instance)` pairing; the cell **lights up** when the instance is-a the view's class — when the pairing is legal. The grid is the whole composition space at a glance: a row is "this instance, through every legal view" (the vertical and horizontal axes for that object); a column is "this view, across every instance it can render" (the third axis for that lens).

The design target you reach for is *the full grid lit*. "An inheritance hierarchy where every view is valid" means every cell is legal: design the members so any view renders any instance, and you get one **interchangeable family** — every object renderable through every lens, every lens applicable to every object. You get the full grid by a single discipline: make each view touch only members that *all* the instances share (members at or above the common ancestor). Loosen that — let a derived view touch a derived-only member — and you punch holes in the upper-right of the grid: that view is no longer legal for the more-general instances. The grid is a design instrument. You read it to see exactly which features are interchangeable and which are not, and you shape the hierarchy to light the cells you want.

## These are chemical reactions

The framework is named Chemistry, and perspectives are where the name stops being decoration. A `Perspective` is a **bond** between a view and an instance; rendering a different pairing is that bond *breaking and re-forming*. Inheritance is the **valence** — the rule for which recombinations the bond will accept, exactly as an atom's valence says which bonds it will form. The framework already has [`$Bond`][bond-src] and [`$Reaction`][reaction-src] as its reactive substrate; perspectives are the same idea raised to the level of *what renders what* — the view-instance bond is the reaction, and the type lattice is the chemistry that governs it. The framework means its own name here.

React has nothing like this, and the reason is structural, not incidental: a React component is welded to its props and its identity, and the type system has no notion of "this rendering is valid for that other object." You cannot rebind a component to a different owner and have the type checker *vouch for the swap*. Perspectives can, because the swap is just substituting one operand of a held-open call, and is-a is precisely the predicate that says when the substitution type-checks.

## Why `this` — the deepest point

Underneath all of it is `this`, and `this` is doing two jobs at once, which is why this works and why a perspective *must* be a subclass.

A `this`-bound function has, simultaneously, a **perspective** and a **context**. The *perspective*: the function acts *as* a particular object, from *inside* that object's privacy — `this` is what reaches `protected` members, the standpoint from which the object sees itself. The *context*: `this` carries the bounded data the object holds — its own state, and nothing else's. A view is a **pure function of `this`'s bounded state**: same `this`, same render. That is [view purity][view], and it is the reason a perspective must be a subclass rather than an external function — *only `this` reaches `protected`*. A lens that draws an object's privileged internals has to *be* that object, from inside, which in this type system means being defined on the object's class or an ancestor. An outside function gets the public surface; only a subclass-defined view gets the protected interior.

So `this` fuses the **subjective standpoint** (whose privacy am I rendering from?) with the **objective state** (what bounded data is there to render?). Function composition gives you the two operands; `this` is what makes the lens operand a genuine *perspective* — a view from somewhere, of something bounded — rather than a bare function over public data. The whole feature is "hold the `this`-call open and let each operand vary," and the depth is that `this` was already carrying both of the things a perspective needs.

## How to design features around it

Practically, here is how to build with each axis. The unit is always: a hierarchy where the `view` overrides are *valid pairings* by is-a.

**Build the hierarchy.** Each level either overrides `view` (a new altitude) or overrides nothing (inherits the parent's view — its altitude is simply the nearest ancestor that does override). Only overriding classes are selectable levels; that is the design lever for *which* altitudes exist.

**For the vertical walk (`look`).** Use a *linear* chain where every level's view is a valid rendering of the leaf instance. The rule that keeps the walk unbreakable: **a view at level `L` may touch only members present at-or-below `L`** — members `L` itself or its ancestors declare. Then every step up lands on a still-legal pairing, and "revert to base" always succeeds. If a view reaches a member its own class does not have, the walk past that level renders garbage; keep views inside their own valence.

**For instance-swap (the third axis).** Put the instances in one hierarchy and render them through a **shared-ancestor view** — a view defined at a class all of them are-a. Every instance is then a legal receiver for that one lens, and you can swap which object the lens draws while the lens stays fixed.

**For the full grid.** Design so *all* views are valid for *all* instances: every `view` touches only members shared across the whole family (at or above the common ancestor). The payoff is total interchangeability — any lens draws any object.

**The reactivity rule — the one that bites.** Renders are not scope-tracked in this framework; only event handlers are (see the [reactivity contract][reactivity-contract]). So a consumer repaints on a `look()` or an instance-swap **only when the walked instance is a bonded child** of the consumer — the cursor write *diffuses up the bonded-child composition walk*, and that is the only path back to a once-mounted consumer. The recipe is fixed: (1) **bond the instance as a child** of the consumer so it sits on the composition tree; (2) **read `viewLevel` or `look('up?'/'down?')` in the consumer's view** — a tracked read that subscribes the consumer to the cursor; (3) **call `look()` or do the swap inside an event handler** — the handler's scope captures the write and finalize re-reacts every subscriber. Read in the view, write in the handler, and bond the thing you walk. Miss any of the three and the screen will not move even though the cursor did.

**The query forms.** `look('up?')` and `look('down?')` ask "could I?" without moving — that is how a UI greys its ends with no separate `canLook` method, and reading a `?` form *is* a tracked read, so it subscribes the consumer along with everything else. One verb, two moods: query in the render, act in the handler.

## See also

- [Perspectives][mechanics] — the mechanics this chapter explains the design of.
- [view][] — view purity, the `view()` boundary, and the cache the active view swaps.
- The [reactivity contract][reactivity-contract] — why only handlers are scoped, which is the whole reason for the bonded-child reactivity rule.
- The composition book — how chemicals bond as children, which is the substrate the instance-swap and reactivity rules ride on.

<!-- citations -->
[mechanics]: 08-perspectives.md
[view]: 06-view.md
[reactivity-contract]: ../authorship/04-the-reactivity-contract.md

[perspective-src]: ../../package/src/abstraction/perspective.ts#L17
[look]: ../../package/src/abstraction/particle.ts#L203
[bond-src]: ../../package/src/abstraction/bond.ts
[reaction-src]: ../../package/src/abstraction/reaction.ts
