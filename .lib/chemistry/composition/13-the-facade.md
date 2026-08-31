# The Facade

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*Built 2026-08-27/28. Every specification below is a promise in [`facade.test.tsx`](../../package/tests/abstraction/facade.test.tsx) — twenty kept, none skipped against [what is still open](#what-is-open) — and demonstrated in [the Lab's Facades section](../../package/app/src/sections/facades/case-1.tsx), driven headlessly so it cannot rot back.*

## What a facade is

**A member holding a component says what this chemical is DRAWN AS.**

```tsx
class $Sodium extends $Alkali {
    facade = Card;        // and nothing else
}
```

From then on, wherever a `$Sodium` is drawn, it is drawn inside a `Card` — **without extending it, importing a base from it, or registering with it**, and without `$Card` knowing that elements exist.

***What it is for is the one parent slot.*** Single inheritance makes a class spend its ancestry on one thing, and presentation usually takes it. A facade gives the slot back: the hierarchy says what the thing IS, and the facade says what it is read as. *Doug: "It's for getting around hard polymorphism rules, so you can have interesting inheritance hierarchies."*

**It is not [the formula](12-the-formula.md), and the difference is worth holding.** A formula replaces an element's TYPE, by a name written inside the tag, in the render walk. A facade wraps an INSTANCE, by a declaration on its class, as that instance draws itself. One is late binding on a string; the other is a layer between what a thing draws and what reaches the DOM.

## Where it happens

**[`frame()` is the render template method](../particle/06-view.md), and it says so in its own comment** — [`particle.ts`](../../package/src/abstraction/particle.ts#L117):

> *"`$lift`'s render entry calls `[$renderView$]`, which calls `frame()`, never `view()` directly. **Override `frame()` to WRAP what is drawn**, and wrap `super.frame()` so the content inside the wrapper still evolves with the view."*

`$Chemical` overrides it, and the whole mechanism is [nine lines](../../package/src/abstraction/chemical.ts#L1036):

```tsx
override frame(): ReactNode {
    if (this[$isTemplate$]) return super.frame();
    const wearing = facadesOf(this);
    if (wearing.length === 0) return super.frame();
    let out: ReactNode = super.frame();
    for (let at = wearing.length - 1; at >= 0; at--)
        out = React.createElement(wearing[at], { of: this, children: out } as any);
    return out;
}
```

***WRAPPING HAPPENS BY INSTANCE.*** *Doug: "wrapping has to happen by instance… It has to be each one declaring it."* `frame()` runs on the per-mount derivative, so every mount site decides for itself, nothing is stamped onto an element, and **nothing re-enters the view** — which is why a stack of two facades terminates on its own with no guard at all.

**A template never dresses itself.** It is not a mounted instance, and marking it would have every derivative inherit the mark through its prototype and never wrap again — *which is exactly what happened before the guard was added.*

## The contract, and the trick

**An implementation receives two things and must use both:**

| | |
|---|---|
| **`this.$of`** | the instance it is dressing — ask it anything |
| **`this.children`** | that instance's own drawing |

***The trick is to draw `this.children`.*** Drawing `$(this.$of)` instead looks equivalent and is not: it mounts a **second instance** of the same element, so the implementation reads one object while the screen shows another.

**The symptom, in the words it was observed in: the needle moved and the clock hand did not.** A gauge's caption stepped `10:00` to `11:00` while the clock inside it kept identical hand coordinates. *The unit tests were green through it; the demo is what caught it, which is why the demo is driven.*

***`of` arrives as an ordinary prop rather than a written argument, and that is forced.*** [`bond`](03-binding-constructor.md) reads written arguments off a symbol-keyed prop, and **React's `createElement` copies its config with `for…in`, which does not enumerate symbols** — so the written-arguments channel cannot be reached from `frame()` at all.

## One line dresses a family

**A class field is an own property on every instance, including every subclass's.** So a facade declared once at a hierarchy's root is inherited by every descendant, and the whole family is drawn by an interface none of them mentions:

```tsx
class $Element extends $Chemical { facade = Card; }   // said once
class $Metal   extends $Element  { }
class $Alkali  extends $Metal    { }                // still a Card
```

**And the hierarchy is what fills the interface.** Each level extends what the card reads through `super`, so the deeper the class, the more its card has to say — *which is the demonstration: an alkali card carries four rows where a noble carries three, and neither tree knows the other exists.*

## What counts as a declaration

***A component held in a member is a VALUE, not a method.*** [`$Bond.isMethod`](../../package/src/abstraction/bond.ts#L175) excludes a function carrying `$chemical`, because binding it as a reagent would hand back a callable wrapper where the component should be. **That correction stands on its own**, facade or no facade: `held = Other` on any chemical used to become a bound method, which is meaningless.

***A `$`-prefixed member is a prop and is never an assignment.*** `$` is the membrane between extrinsic context and what a thing is; a facade says what this thing IS.

**The declaration is read off the TEMPLATE, never a derivative** — [`facadesOf`](../../package/src/abstraction/chemical.ts#L866). A per-mount derivative is `Object.create(template)` and owns almost nothing; the fields live on the template. The result is cached in a module `WeakMap` keyed on the class and **never stamped onto the constructor**, because a lazy stamp at first render is what the constructor-static invariant in [`bond-behavior.test.tsx`](../../package/tests/regression/bond-behavior.test.tsx) forbids — *it caught this within one run of adding it.*

## What it costs

**A chemical with no facade pays one property read and one `WeakMap` hit, then `super.frame()`.** Below the noise floor of the bench harness, which varies threefold run to run on a fifty-chemical render — *so the honest statement is that it was not measurable, not that it was zero.*

**A chemical wearing one costs about 1.4x a bare one**, stable across runs. That is a second chemical mounting, which is what wearing a facade is.

## <a id="what-is-open"></a>What is open

***SCOPE SUBSTITUTION REACHES — 2026-08-29. The diagnosis was right about the cause and wrong about the cure.*** By the time `frame()` runs **the asker is pinned to the instance**, so a registration made on whoever wrote the element could never be consulted from there. The cure was not to move the dressing to the parent; it was to move **the choosing**.

***A FACADE IS CHOSEN WHERE THE ELEMENT WAS WRITTEN AND WORN WHERE IT DRAWS.*** The render walk knows the writer — it does exactly this for [the formula](12-the-formula.md) — so it asks `$` under that asker and hands the answer down as `$facade`. **That is the `$` membrane doing its ordinary job:** `facade` is what the class DECLARES, `$facade` is what this scope ANSWERED. `frame()` wears whichever it was given, so wrapping is still by instance and nothing else in this chapter changes.

***And two of the three promises were never a framework gap at all.*** They read as open for four sprints because the harness returned a **plain function component** as the host, so `$(Host, Level)(Fancy)` registered on a `$Function$` wrapper nothing ever rendered. Four configurations, measured: registered in a view and registered as a child both substitute; unregistered draws plain; and registered on one host leaves another host alone.

***AND SO IS THE THIRD — SATISFACTION IS JUDGED ON WHAT WAS DECLARED.*** A thing **already drawn inside** a `Level` is not wrapped in another, and a scope's stand-in counts because it **is** one by inheritance. This looked like it needed the drawn instance's ancestry, which a drawn instance does not have; it does not. **The walk knows what encloses what** — it is walking the markup — so it carries the enclosing chemicals on a reused array, pushed and popped, and answers from that. *One more thing the writer's own markup already knew.*

***And the names are placeholders.*** `facade` and `of` are the words the work has been done in; neither has been chosen.

## See also

- [The formula](12-the-formula.md) — the other substitution, by name and in the walk.
- [`frame` and the render flow](../particle/06-view.md) — where the wrap is installed.
- [`$lift`](../particle/04-lift.md) — the per-mount derivative a facade is worn by.
- [The representative](11-the-representative.md) — what a resolution would be asked for through.
- [The binding constructor](03-binding-constructor.md) — written arguments, and why `of` is not one.
