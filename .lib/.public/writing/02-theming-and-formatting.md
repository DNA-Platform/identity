# Theming and Formatting

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***The chapter's name is a PROXY; Doug's to rename. Written 2026-09-22 to his words, with every design marked as built, tried, designed, or a reading.***

---

**Doug, 2026-09-22:** *"Write down, in the documentation, the theming and formatting strategy. And talk about it as one means of extension for writing. Using styled components or styled chemicals as or in the annotations. The annotations can be theme providers too, and various ones can work together."* And, later the same day, after two designs for theming had been tried and a third explored: *"We are not working on theming. We are working on elegant mechanisms which support it and other use cases. It is important to look at the possibilities."*

**So this chapter is about the mechanisms, and theming and formatting are two of the use cases they support.** The others named on the day are notes, footnotes, anchors and an annotated page. What an annotation *is* came first, and everything else is built on it.

## An annotation is a note on the page

**Doug, 2026-09-22:** *"Having the annotations annotate their writing with the pd-annotation, which we can easily make invisible, yet to a note function which renders at the level of their annotated writing... is semantically what an annotation is! Like, we should implement it on those grounds! And in fact, someone can write things in the annotations too, and in another view, print those, and we can see the annotated page."* *"Like, that is a better abstraction for what an annotation is. Writing them as a sort of note on the page."*

**Built that afternoon.** A writing renders its container, carrying its classes, with its contents and then its annotations inside. An annotation is a writing, and it renders as one: its own container with `pd-annotation` on it, holding whatever was written inside it, so *"someone can write things in the annotations too"* and they are on the page; the ordinary view hides the class with a stylesheet's rule, and an annotated view leaves the rule off and shows the page with its notes. Then, after its own writing, the annotation renders its `note()`, null by default, at the level of the writing it annotates: a global style, an anchor, a footnote, whatever the annotation has to say on the page rather than in its own hidden body. A note renders only while the annotation is expressed. The span that had held all of a writing's annotations, with `pd-annotations` on it, is gone; each annotation puts its class on itself, in its bond, after Writing's.

```tsx
<Writing>an aside <Parenthetical>because it was late</Parenthetical></Writing>
```

renders as a span with `pa-parenthetical` on it, holding the text, then a span with `pd-annotation` on it holding *because it was late*, then Parenthetical's note, the global style that hides `pa-parenthetical`. The promise is in [`.tests/writing.test.tsx`](../../package/.tests/writing.test.tsx), and the member-by-member record is in [The Annotation System](07-the-annotation-system.md#the-powers-of-an-annotation).

**This is the margin.** E9 puts commentary in the margin and types, references and meaning in the annotations; what an annotation renders, its hidden body and its note, is the margin of the writing it annotates, and no second collection is needed for it. A margin as a collection annotations inject elements into was explored on the day and is not built: the annotation's own rendering is the door, and an annotation that wants to render something at the writing's level says it in `note`.

## The mechanisms, and the set that is necessary

**Doug, 2026-09-22:** *"I am not committed to alignment. I am just saying it is an option. You need to look through all of these things and find the elegant set of necessary features."*

**What is necessary is small, and all of it is built.** An annotation acts on the writing's state in `defines` and takes it back in `erase`, idempotently, before the writing renders: the state is `container`, `classes`, and the contents, which an annotation may change through the collection's idempotent `ensure` and `replace`. An annotation weighs in on the binder's assert in `specifies`. An annotation renders as a note on the page. `$is` is the changes and `annotations` the full set, and `define` applies the one to the other and walks a copy from the front, so the one called first has the power, because it can say others are not expressed. That is the whole of it, and every use case below is a class written on it.

**What was explored and is not taken, with the reason:**

| explored | reason it is not necessary | standing |
|---|---|---|
| a power on Annotation called at view time to put something around the writing's element | a second moment when an annotation acts | **BUILT AND STRUCK 2026-09-23.** *Doug named it `review` in the morning and struck it the same day: **"No more review."** A provider does have to be an ancestor of what it themes — but a [Format](11-format-and-theme.md)'s own styled component can BE that ancestor, so `container` was the door all along and no power was needed* |
| a `themes` map on Writing, and a `theme` property | state for one use case on the base; theming is a use case, not the mechanism | designed and tried, not taken |
| a margin as a collection annotations inject into | the annotation's own rendering is the margin | not taken |
| `$Define` standing defaults behind the written, and the walk from the back | the one called first has the power; overriding is inactivation, not acting last | withdrawn the same day |
| alignment, an annotation declaring `'left' \| 'right'` and the collection sorting | an option, *"not committed"*; a sort option on the collection if ever needed | jotted, with uniqueness |
| printing the annotations backwards, so the front's rendering is last in the page | a stylesheet's cascade prefers the later rule; open until a use case needs it | open |

**And one feature jotted down, Doug's, to be implemented when it is obvious that we need it — *"Do we need it yet? Let's jot this and alignment down for now"*:** *"What if we have certain annotations which are unique. And when they are, we treat it like an override of any of its parents. So if it gets skipped, its parents are automatically ignored. The define loop would need to keep a list of the types of the unique annotations."* E21 already has an annotation declaring itself unique. Our reading, to be confirmed: a unique annotation nearer the front dominates every annotation behind it whose class is its own or one of its parent classes; the pass keeps the set of those classes and skips the dominated, erasing what they did, this pass only, so a dominant that leaves lets the dominated act again. It would replace any family's manual inactivation. Not built.

## Format lends the container

**A Format is an annotation that says what a writing is drawn inside, by adding its styled component as a layer around the writing's own element — landed 2026-09-23 as the writing's single container, made a layer 2026-09-24, and documented to the four parts in [Format and Theme](11-format-and-theme.md).** It holds the component on `style`, absent on the base so a bare Format changes nothing, and a subclass declares its own **inside the class**, which is the ruled form: `style = styled.blockquote\`…\``. *Doug: "I would have the system store the component on a property… And then can't it be more easily overridden in a subclass? That can be what the format class does."* And on the spelling, after `format` was tried: *"No Format.format. Format.style."* Its `defines` takes every other Format out of expression and stands its style as the outermost layer, cited to itself; its `erase` is `revert(this)` and keeps nothing — the `envelope` and `apply` of the single container went with it. The writing is then drawn inside the styled element, with the rule in the sheet. Promised in [`.tests/format.test.tsx`](../../package/.tests/format.test.tsx), including [why it settles with nothing to guard](11-format-and-theme.md#idempotency).

**What follows.** A writing is drawn as one element, so on a bare single-valued surface the last annotation to act decides it — which, the pass running front to back, would be the one furthest back. **Format does not leave it there.** *Doug: "All formats prevent multiple formats right?"* — so every Format unexpresses every other, whatever its class, and the one nearest the FRONT is the one that decides. *A per-kind version of that rule was built first and struck the same day, because it let a theme and a style fight over one container and lose silently; uniqueness across all Formats is what makes [redoing a whole look](11-format-and-theme.md#a-whole-new-look) safe.* Any number of annotations may put classes on the element, which is how style composes, and two rule sets reach one element only by `styled(Other)` at definition. *Means modifies Format on render* (E23): when the reference annotations arrive, a Means acts on the Format beside it, so a writing whose meaning addresses is drawn as an anchor — and nothing new is needed for it, since a format carries properties and any annotation may find it and set one. A Format may also hold styled components as content, E23's *"a place for themes and styled components; no constraints, like Letter"*, not tried; and a Format may be a styled chemical, chemistry compiling its CSS fields into the component it lends, a reading.

## Theme, as a use case the mechanisms must support

***There is no Theme class, and theming is one line on a Format*** — **`theme = true`, landed 2026-09-23 on Doug's question, and documented in [Format and Theme](11-format-and-theme.md#theming).** *"If we have theme as a type of format, then why isn't it a property question, a certain type of way of writing a format."*

**The problem was real and the same in every attempt.** Styled-components' provider has to be an ancestor of the writing's container for that element and everything beneath it to read the theme — *and a note renders after the contents, INSIDE the container, where a provider encloses nothing.* **So a note cannot carry a theme, and something had to stand above the element.**

**What it turned out to be: the element itself.** *A format already hands the writing a component, so a format that themes hands one that is already wrapped* — its bond composes its style inside a provider, once per mount, and the writing draws through it as it draws through any container. **The provider is the element's parent because the component puts it there**, and nothing on Writing exposes a seam for it.

**Four ways were tried or probed across 2026-09-22 and 23. The record, and why the other three lost:**

- **A property on Writing** that a Theme sets, the writing returning its element inside one provider. *Works; holds one theme; state for one use case on the base.*
- **A power on Annotation** folding each expressed annotation's wrapper around the container from the front. **Built in nine lines and named `review` by Doug, then struck by him the same day** — *"No more review"* — once it was clear a format's own component could carry the provider. *It was a member added where a door already stood.*
- **The annotation rendered as an ancestor** of its writing, the writing nesting its container inside each expressed annotation's component. *Probed and it works; it moves every annotation's note outside the container, which is the opposite of what the note abstraction settled.*
- **A provider placed AS the container**, rather than wrapping one. **Measured, and it costs the box:** *the writing's element disappears and every class its annotations gave it goes with it, silently.* **Doug: "We WANT the container."**

**And a theme is never put around the container by `defines`.** *That was tried first and loops: a pass that makes a wrapper makes a new one each time, so the container is a new component at every draw and React stops it with **Too many re-renders**.* ***The composition happening in the BOND rather than in a pass is what fixes it*** — **once per mount, one component identity for the life of the writing, and the passes only ever move that one component onto and off the container.** *This is the general shape of every idempotence problem in the model: what is made is made in the bond, and what a pass does is set and unset.*

**Chemistry's own provision is not reached** — it exists for styled chemicals, and it goes on running for every writing and returning the element unchanged. **The theme handed down is the annotation itself**, `theme={this}`, so a format's own properties are the theme's values and a subclass adds one by declaring a field. *Two nested themes merge because styled-components spreads the nearer object over the farther, so the inner wins what it names and inherits the rest; the one cost is that the annotation's own machinery is in the object too, and it matters the day somebody names a theme value `style`.*

## Static and dynamic, and working together

**The same annotations act statically and dynamically.** Statically: written as a child, or stood by a class in `$Define`, a Book standing its house format. Dynamically: given through `$is` from a button, or a written one's `expressed` flipped. A change redraws the writing and the next pass applies it; what the annotation lent or set is taken back by its `erase`, and its note stops rendering.

**How they work together.** *Theming and formatting are one class, so the two cannot fight over one surface by construction:* a format that themes adds a layer like any other, and one that does not theme still adds one. **Two formats on one writing do not resolve by order — the front unexpresses the rest**, so there is never a silent loser, and a whole look may be replaced by a class that shares nothing with what it replaces but `$Format` itself. *Themes at different LEVELS are a different thing entirely and do nest:* a format on a book and another on a chapter are two writings, and their providers nest as the document nests, which is what makes a chapter refine its book's palette by naming only what differs. **Parenthetical and a format are independent, a class and an element.** Narrative's way, asking the collection to take a sibling behind it out of expression, works on any of them. *Every one of these is visible in the one list a writing keeps, and none needs Writing to know any of them by name.*

## What this is like elsewhere

**Doug, 2026-09-22:** *"Does React have something like our annotations as a design pattern? It seems like adding traits to a component is a way to customize, but I think it looks more like components DIing some sort of memory source and all interacting with it, whereas this is more of a plugin system for components themselves — or at least the chemical is the memory container and the component rolled together."*

**React has nothing first-class for attaching behaviour to a component from outside, and it once did.** Mixins were that, in the class-component era, attached from outside, able to interact, and removed for their implicit dependencies. What React kept works from inside or by wrapping: hooks add a capability inside the function that renders; higher-order components wrap a component in another, order-dependent, which is the shape of the wrapper design that looped here; context is what Doug describes, a memory source provided above and read below, with every consumer interacting with it and none acting on a particular component. Children read by type, a router's routes or a select's options, is the one React habit this resembles, and it is what Writing does when it sorts annotations from contents.

**The nearer relatives are outside React.** Vue's custom directives and Angular's attribute directives annotate an element with a behaviour that has lifecycle hooks and compose several to one element; Svelte's actions attach a behaviour to a node with an update and a destroy, which are `defines` and `erase` by other names. Nearer still is the entity-component-system, where an entity is the memory and attached components are the behaviours a system walks, which is the writing and its annotations and the pass. The difference Doug names is the right one: here the chemical is the memory container and the component rolled together, and an annotation is a plugin on that instance, typed by its class, found by the collection, acting on the writing's state before it renders and rendering as a note on its page. It is not a trait of the class, as a mixin or a decorator is; it is an annotation of the writing, and two writings of one class carry different ones.

## Where things are

| what | where | state |
|---|---|---|
| the note abstraction: `pd-annotation` on the annotation's container, `note()` after it | [`src/writing/Writing.tsx`](../../package/src/writing/Writing.tsx), promises in [`.tests/writing.test.tsx`](../../package/.tests/writing.test.tsx) | built, 49 of 49 |
| Format in the language, with its chapter; theming a property on it and no Theme class | [`src/writing/Format.tsx`](../../package/src/writing/Format.tsx), [Format and Theme](11-format-and-theme.md) | built 2026-09-23, 83 of 83, **not yet seen in a browser** |
| the findings and costs, member by member | [Using and Extending Writing](01-using-and-extending-writing.md#annotations-that-reach-the-element) | written |
| chemistry's own provision and styled chemicals | [`styled.ts`](../../../chemistry/package/src/abstraction/styled.ts), `providing`, `styledFor` | read |
| uniqueness, the annotated view's stylesheet | this chapter | Doug's to rule |
| what a Format held by a Theme is for, and `replaced` as an inert field | [Format and Theme](11-format-and-theme.md#winner-take-all) | raised, Doug's to rule |
| the rulings | [Sprint 78](../projection/84-sprint-78--another-draft-of-public.md), rulings 92 to 97 | recorded |

**Names, flagged.** His: `style` on Format — *"No Format.format. Format.style"* — and `envelope`, *"call this envelope of the annotation is the writing's component"*, struck with the single container on 2026-09-24 — `theme` as the property that makes a format provide, `note`, `pd-annotation`, `pa-` for what an annotation puts on a writing, `unique`, `margin`. **Struck, with the code that carried them:** `format` and `replaced` on Format, `values` for a theme's values, `around` and then `review` for a power that wrapped, `$Theme` as a class, and `theme` as a property on Writing.
