# Looks

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

A particle **holds a set of views and no opinion about them**. It declares as many as it has ways of being seen — `view`, `$view`, `$$view`, and onward — a subclass may add more or replace any of them, and **something outside the object** chooses which one draws, through the `look` attribute. That is the whole feature.

***THERE IS NO CANONICAL FACE.*** **`view` is not how the object “really” looks; it is the member with no `$` in front of it.** *Doug, on an earlier draft of this chapter that said otherwise: "there is a default view, and clearly it doesn't show itself at all. It contains all its views and no opinion on what it looks like."*

Written out, it is four lines:

```tsx
class $Sheet extends $Chemical {
    @look('book')   view()    { return <BookSkin>…</BookSkin>; }
    @look('github') $view()   { return <GithubSkin>…</GithubSkin>; }
    @look('night')  $$view()  { return <NightSkin>…</NightSkin>; }
}

<Sheet look={1} />        // by position
<Sheet look="github" />   // by name — the same drawing
```

**This replaced a larger thing.** Until 2026-08-25 the framework carried two orthogonal *perspective* axes — a horizontal one that filed sibling subclasses' views on a shared base through `reveal`, and a vertical one that walked one instance up its own ancestry with `look('up'|'down')` — plus a `Perspective` class, five framework symbols and a hand-built scope-tracked cursor. **Doug removed all of it in favour of the series.** *"We are completely removing perspectives… we are simplifying to this."* What the two axes did, an integer does.

## The series

**A look is `view` with a run of `$` in front of it**, and its position is the length of the run. The framework's test for the name is one regular expression, [`looks`][looks], shared by the two modules that need it.

***THE `$`s ARE AN INDEX, NOT A RANK.*** **They exist so that several members can share one base name.** *They carry no ordering, no distance from a default, and no progression — and this is measurable rather than asserted: **`hex` was moved from position 1 to position 3 and `hsl` from 3 to 1, each `@look` kept on its own body, and the page came back BYTE-IDENTICAL.*** **Meaning is supplied from outside — the decorator gives a look its name, and the container gives it its turn.**

*One consequence worth stating: `$look` starts at 0, so position zero is what draws when nobody has chosen. **That is a convenience of the runtime — something must render — and not a claim that position zero is privileged.***

**A subclass adds a member the base did not have; overriding one it already had replaces that look rather than adding another.** So a base with `view` and `$view` answers two looks, a subclass adding `$$view` answers three, and a subclass that merely overrides `$view` still answers two. *That is the whole of what "use subclassing to evolve the perspective" means, and it is Doug's sentence.*

**THE SET IS OPEN, AND NOTHING ENUMERATES IT.** A class declares as many members as it has ways of being seen; the framework finds the deepest run of `$` on the prototype chain and builds every position up to it. *There is no ceiling to find — a promise stands a class at **forty** looks and draws the fortieth, another builds ten by a chain of ten subclasses each adding one.* **Where you see `view`, `$view`, `$$view` written out, read the third as an ellipsis.**

**A gap is refused**, and this is the one place the implementation asserts something the design does not. *A class declaring `view` and `$$view` and nothing between them raises when its dictionary is built, naming the member that is missing.* **Since the index carries no ordering, a hole is not a broken sequence — it is almost certainly a typo**, and refusing it is worth more than allowing `look={1}` to miss. ***Raised rather than settled: if a skipped name should simply be an absent look, the check comes out.***

**An accessor is not a look.** The descriptor's *value* must be a function, so a `get $view()` is not a member of the series. This is inherited from the machinery that came before and kept for the same reason: an accessor named like a method is not one.

## The dictionary

Every instance holds a **view dictionary** under the [`$views$`][views] symbol, keyed **both** by position and by name:

```typescript
chemical[$views$].get(1)          // the function $view declares
chemical[$views$].get('github')   // the same function, if @look named it
```

It is built once per instance and held in a module `WeakMap` — the same shape the lens cache it replaced used. Building it walks the instance's own prototype chain for every declared member of the series, resolves each position by ordinary lookup so an override wins, and adds a string key for each look that `@look` named.

**Both keys reach the same function**, which is what makes `look={1}` and `look="github"` produce identical output. A promise pins that equality.

## `@look` — naming one

A look may be named, and the name is given by an attribute on the method itself:

```tsx
@look('github') $view() { … }
```

**The machinery is the framework's own.** [`bond.ts`][bond] already held two decorator registries — `inertDecorators` and `reactiveDecorators` — each a `Map` keyed by prototype and read back up the chain with `Object.getPrototypeOf`. `@look` is a third beside them, resolved the same way, which is exactly the lookup a subclass-extends-the-series design needs: **a subclass's name is found from the subclass and not from its base.**

**Naming is optional and additive.** An unnamed look is still reachable by position; naming one does not disturb the numbering. Two looks may not share a name, and `@look` on a member that is not part of the series is refused — both with a sentence rather than a silent miss.

**It needs a Babel plugin in an application.** `experimentalDecorators` is read by `tsc`, by esbuild (so the suite compiles), and by the rollup `dist` build — but **not** by `@vitejs/plugin-react`, which runs Babel. Every application in this repository now configures `@babel/plugin-proposal-decorators` in `legacy` mode for exactly this reason. *The gap was older than this feature — `@inert` and `@reactive` have shipped since long before it, and nothing had ever written one in an app.*

## `look` — the attribute

**`look` is a JSX attribute typed `number | string`**, and it lands on the reactive field [`$look`][look-field] the ordinary way every prop does.

```tsx
<Sheet look={2} />
<Sheet look="night" />
```

Two things make it work, and both are the framework's existing machinery rather than anything new:

**It is a plain reactive field.** `$look` passes [`$Bond.isSpecial`][bond] on the ordinary rule, so it gets the ordinary accessor — and the ordinary setter is *byte-for-byte* what the old cursor hand-wrote: record a scope write inside a handler, or fire the reaction and `diffuse` outside one. **Writing it in a handler repaints, and because `finalize` walks `$$parent$$` upward and re-reacts every ancestor, it repaints a bonded parent too.** The whole scope-tracked cursor apparatus was reimplementing a bond setter.

**It is named in the props type.** [`$Properties<T>`][types] excludes every member declared on `$Chemical`, which is why `$show` and `$hide` are not writable as attributes; `look` is admitted explicitly through a small `$Attributes` type intersected into it. The same computed type **excludes the series**: `$$view` and everything deeper fall out because their first character after `$` is `$`, and `$view` is excluded by name beside `$parent`.

**And the type is not the guard.** A spread, an `any`, or a plain-function path can still reach `$apply` with a prop called `view`, which would land on `$view` and overwrite a method. `$apply` refuses any prop whose `$`-form names a look, and says which attribute to use instead.

## Out of bounds

A miss in the dictionary is the whole check — one lookup, on the render path, and it raises naming both sides:

```
Nothing stands at look 9 — $Sheet draws 3.
$Sheet has no look called nope — it draws github, night.
```

*The form is the one [`$Location.read()`][location] already used for the same kind of mistake.*

## `frame` is unchanged

[`frame()`][frame] is still the render template method, and `$lift`'s entry still calls `[$renderView$]`, which calls `frame()`. What changed is one line inside it: it reads the dictionary at `$look` instead of a stored active-view slot. **Overriding `frame()` to wrap what is drawn, and calling `super.frame()` so the content inside the wrapper keeps evolving, works exactly as it did** — and now the thing it wraps is whichever look is selected.

## What this cost, and what it bought

**Bought:** one integer where there were two axes; a name that travels from a decorator to a JSX attribute; and about 150 lines deleted from `particle.ts`, a whole file, five symbols and a hand-built backing store.

**Cost, stated plainly:** *there is no longer a way to render an instance through a **specific ancestor's** view.* The vertical axis could say "draw this leaf as its grandparent draws it"; the series cannot, because a subclass overriding `view` replaces position 0 rather than stacking on it. Where a class needs that, it declares the ancestor's drawing as a look of its own — which is what [`$Document`](../../../.public/package/src/document/Document.tsx) does: a subclass may *declare* its sections in `view()`, and once they are harvested the document sets `$look = 1` to draw them instead of re-emitting the declaration.

## See also

- [The Composition of Looks][composition] — the design underneath: a held-open call, inheritance as its valence, and what survived the simplification.
- [view][] — the `view()` boundary, `$viewCache$`, and view purity.
- [lift][] — where the render body calls `[$renderView$]`.
- The [reactivity contract][reactivity-contract] — why `$look` being an ordinary field is the whole reactivity story.
- The glossary indexes every term here by name.

<!-- citations -->
[composition]: 09-the-composition-of-perspectives.md
[view]: 06-view.md
[lift]: 04-lift.md
[reactivity-contract]: ../authorship/04-the-reactivity-contract.md

[looks]: ../../package/src/implementation/symbols.ts
[views]: ../../package/src/implementation/symbols.ts
[bond]: ../../package/src/abstraction/bond.ts
[types]: ../../package/src/implementation/types.ts
[look-field]: ../../package/src/abstraction/particle.ts
[frame]: ../../package/src/abstraction/particle.ts
[location]: ../../../.public/package/src/reference/Location.tsx
