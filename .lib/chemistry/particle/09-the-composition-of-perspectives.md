# The Composition of Looks

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The [previous chapter][mechanics] describes the machinery — the members, the dictionary, `@look`, the `look` attribute. This chapter is the design *underneath* it: what a look **is**, structurally, and how to build with it. The idea is Doug's and it survived the simplification intact, because the simplification was of the machinery and never of the idea.

**A look is function composition with the function's owner reified alongside it.**

## <a id="what-it-is-for"></a>What this is for, in plain words

**A class used to have one drawing.** If you wanted a different one you subclassed and overrode `view`, and then the original was gone for that subclass. So *how a thing looks by default* was a single decision you could only replace — never add to.

**Now a class carries several complete drawings at once.** A subclass can add one without destroying the others, or replace one without touching the rest.

***So a default view becomes a CHOICE rather than a FACT, and there can be more than one.*** *Doug, at the retro: "we are implementing this in preparation for choosing the default view, and we needed something polymorphic, and now we can have multiple default views."* **That is the practical reason this exists**, and the library framework is where it will be spent — deciding how a book is drawn, with room to decide it more than one way.

**And the choosing is polymorphic.** A container asks for a look; a subclass can change what that look draws for its own instances, at the same asking. *Same call site, different drawing by runtime type — which is what polymorphism has always meant, applied for once to what a thing LOOKS LIKE rather than to what it does.*

## <a id="what-the-object-contributes"></a>What the object contributes, and what it does not

**The object holds its drawings and has no opinion about which one is used.** There is no canonical face — `view` is not the real appearance with the rest as variants; it is simply the member with no `$` in front of it.

**The numbers are an index, not a rank.** They exist so several members can share one base name. *Moving one drawing from position 1 to position 3 and another the other way, with each name kept on its own body, produced a byte-identical page — measured.*

**So the meaning comes from outside.** The decorator gives a drawing its name; a container gives it its turn. **The object supplies what is possible and nothing else.**

*This is a stronger claim than it looks, because it is a claim about what an object IS.* **A thing with one appearance has that appearance as part of its identity.** *A thing with several, none of them first, does not — and what it looks like at any moment is a fact about the looking rather than about the thing.*

## <a id="unsettled"></a>What is settled, and what is not

**Settled: a class's drawings are its own.** *Doug: "Views are specific to the class."* A name on one class and the same name on another are unrelated, **and that is correct rather than a shortfall** — the drawing reaches that class's protected interior, so it could not be anything else.

**Not settled: whether anything should coordinate across classes.** *An earlier draft of this chapter called the absence of a shared vocabulary a gap, and Doug's read is that it may not be one:* **"we can also implement a coordinator if need be that makes sure everything is in sync."** *An object whose job is keeping a region agreeing is simpler than a vocabulary every class must answer to, and it does not ask unrelated classes to share a word.* ***Raised, not decided.***

## The core — a held-open call

The ordinary way to draw an object is `instance.view()` — the method is **welded** to its receiver. You cannot say *"this view, that object."*

A method call `o.m()` is really `m.call(o)`: two things. The dictionary holds that call **open** — and a consumer never touches the dictionary. It writes the operands as JSX:

```tsx
const Color = $(this.color);      // the receiver, held
<Color look="hex" />              // the function, chosen
```

Fix the receiver and vary the function, and one object draws many ways. Fix the function and vary the receiver, and many objects draw one way. **Both are just "swap one operand of a held-open call,"** and everything in the feature is a disciplined way of doing one of those two swaps.

*This used to require a `Perspective` object carrying `view` and `instance` as two fields. The dictionary makes the object unnecessary: it hands you the function, and you supply the receiver.*

## Inheritance is the grounding — the valence

A held-open call invites the obvious question: which `(view, instance)` pairings are **legal**? You cannot run an arbitrary view against an arbitrary object — a view body reaches into `this`'s members, and if the object lacks them the call is nonsense.

The answer is already in the type system and it is exact. **A view defined at class `C` is a valid drawing of any instance that is-a `C`**, because only an instance at or below `C` is guaranteed to have the members the body reaches for. So the inheritance lattice *is* the runtime rule for which pairings are allowed — the **valence** of the composition, the thing that says which recombinations the bond will accept.

This is the Liskov substitution principle turned from a correctness obligation into a composition algebra: *"an is-a `C` is substitutable wherever a `C` is expected"* becomes *"any is-a `C` is a legal receiver for `C`'s view."*

**And it is why the set is safe.** Every look a chemical holds is declared at or above its own class, so every pairing in its dictionary is legal by construction. There is no way to select an illegal one.

## Two ways to vary, and the second is the interesting one

- **Vary the function.** One live object, drawn through any member of its own series. This is `look` — a position or a name, and the thing the [mechanics chapter][mechanics] is about.
- **Vary the receiver.** Hold one look and point it at a *different object*. The pairing is legal exactly when the new instance **is-a** the view's defining class.

**The first is what a menu is.** [The Lab's colour case](../../package/app/src/sections/perspectives-color/case-1.tsx) draws **the same live color four ways at once** — four elements of one held instance's component, each handed a different `look` — so dragging the hue slider moves all four together, *measured*. **That is "fix the receiver, vary the function," written four times in one render**, and it is unwriteable in a framework where the two operands are welded.

**The second is still ahead of us.** Nothing today points one look at a different object, and the thing that would make it worth doing is a **shared vocabulary of names** — so a container could say *"everything below me, at `compact`"* across children that have nothing else in common. *Today `'compact'` on one class and `'compact'` on another are unrelated strings.*

## The grid

Lay it out. Put the **instances** down the left and the **views** across the top. Each cell is a candidate pairing; it **lights up** when the instance is-a the view's defining class.

A row is *"this instance, through every view it can wear."* A column is *"this view, across every instance it can draw."* The grid is the whole composition space at a glance, and it is a **design instrument**: you read it to see which features are interchangeable, and you shape the hierarchy to light the cells you want.

**The full grid lit** means every view is valid for every instance — one interchangeable family. You get it by one discipline: **make each view touch only members the whole family shares.** Loosen that and you punch holes in the grid.

## These are chemical reactions

The framework is named Chemistry and this is where the name stops being decoration. A `(view, instance)` pairing is a **bond**; drawing a different pairing is that bond breaking and re-forming; **inheritance is the valence** — the rule for which recombinations are accepted, exactly as an atom's valence says which bonds it will form. The framework already has [`$Bond`][bond-src] and [`$Reaction`][reaction-src] as its reactive substrate; looks are the same idea raised to the level of *what draws what*.

React has nothing like this, and the reason is structural rather than incidental: a React component is welded to its props and its identity, and the type system has no notion of *"this drawing is valid for that other object."* You cannot rebind a component to a different owner and have the type checker vouch for the swap. Looks can, because the swap is substituting one operand of a held-open call, and is-a is precisely the predicate that says when it type-checks.

## Why `this` — the deepest point

Underneath all of it is `this`, doing two jobs at once, which is why this works and why **a look must be a method on the class rather than a function beside it.**

A `this`-bound function has, simultaneously, a **perspective** and a **context**. The *perspective*: it acts **as** a particular object, from inside that object's privacy — `this` is what reaches `protected` members, the standpoint from which the object sees itself. The *context*: `this` carries the bounded data the object holds, its own state and nothing else's. A view is a **pure function of `this`'s bounded state**: same `this`, same drawing. That is [view purity][view].

**And it is why the looks live on the class.** A drawing that reaches an object's privileged internals has to *be* that object, from inside — which in this type system means being declared on its class or an ancestor. An outside function gets the public surface; only a declared member gets the protected interior.

So `this` fuses the **subjective standpoint** (whose privacy am I drawing from?) with the **objective state** (what bounded data is there to draw?). Composition gives you the two operands; `this` is what makes the function operand a genuine *perspective* — a view from somewhere, of something bounded — rather than a bare function over public data.

## How to design with it

**Build the set on one class.** Each member is a different way of seeing the same bounded state, and they share the class's protected helpers — which is the point of the pattern and what makes them cheap. *The Lab's colour case is four looks over one set of `h`/`s`/`l` fields and two protected getters.*

***AND THE OBJECT HOLDS NO OPINION ABOUT THEM.*** **It contributes the possibility space and nothing else** — the name comes from a decorator, the choice comes from a container, and the position is an index rather than a rank. *An object with a canonical face and some alternatives would be a different design; this one has no face until something outside it picks.*

**Extend by subclassing.** A subclass adds the next member for a way of seeing its base did not have, and overrides an existing member for a way it wants to do differently. **Which member it overrides is the design decision**, because that is what a consumer selecting that position will get.

**Name what a menu will offer.** `@look` is what lets a UI say `look="github"` instead of `look={1}`, and it is what makes a bar of chips readable. **Leave a look unnamed when nothing will ask for it by name** — the internal drawing a class switches itself onto has no business in somebody's menu.

**For drawing many looks at once, call the dictionary.** `chemical[$views$].get(name).call(chemical)` is the preview tile. `$look` is for what *stands*.

**And the reactivity rule is now the ordinary one.** `$look` is a plain reactive field, so: write it in a handler and the instance repaints; **bond the thing you are switching as a child** of whatever also needs to repaint, and `finalize`'s walk up the composition tree carries it there. There is no third rule. *The chapter this replaced had a fixed three-step recipe here, and every step of it was the old cursor's hand-built reactivity — which turned out to be a reimplementation of the bond setter.*

## What was given up

**Drawing an instance through a *specific ancestor's* view is gone.** The old vertical axis could walk one live object up its own inheritance; the series cannot, because a subclass overriding `view` **replaces** position 0 rather than stacking on it.

**Where a class needs that, it declares the ancestor's drawing as a look of its own.** [`$Document`](../../../.public/package/src/document/Document.tsx) is the live case: a subclass may declare its sections in `view()` — code written in a chapter — and once `declaration()` has harvested them the document sets `$look = 1` to draw them rather than re-emit the declaration. **The capability did not disappear; it stopped being implicit.**

## See also

- [Looks][mechanics] — the mechanics this chapter explains the design of.
- [view][] — view purity, the `view()` boundary, and the cache.
- The [reactivity contract][reactivity-contract] — why a handler is where a look changes.
- The composition book — how chemicals bond as children, which is the substrate the repaint rule rides on.

<!-- citations -->
[mechanics]: 08-perspectives.md
[view]: 06-view.md
[reactivity-contract]: ../authorship/04-the-reactivity-contract.md

[bond-src]: ../../package/src/abstraction/bond.ts
[reaction-src]: ../../package/src/abstraction/reaction.ts
