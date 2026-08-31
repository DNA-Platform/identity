# The Representative

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*Shipped in [The Representative](../../../.public/.lib/projection/12-the-representative.md). Every specification below is a promise in [`representative.test.tsx`](../../package/tests/abstraction/representative.test.tsx), which is the surface's specification and reads in the order of the forms.*

## What `$` is

**`$` is a coercion utility, not a container.** You hand it a thing and it gives you the form of that thing you need — a class becomes a component, an instance becomes a component, an element becomes a live instance. One symbol, several argument shapes, the move reclaimed from jQuery. The `$catalogue` behind it is machinery and never the interface.

What this chapter adds is that **the coercion becomes context-sensitive**: `$(Component)` answers *the component to render here*, and *here* is a scope the framework has already established.

## The algebra

Four forms. **A representative bonds tightly to what it stands beside — no space across the comma**, so the pair reads as one thing.

| written | reads | gives back |
|---|---|---|
| `$($Component)` | *from the class* | a component that is a **new root scope** |
| `$($,Component)` | *from a component* | a component that is a **derived scope** |
| `$(Component)` | *resolve* | the component to render **here** |
| `$(A,B)(C)` | *for A, a B is a C* | registers, and returns `C` |
| `$(Component,$)` | *what stands behind it* | the chemical the component wraps |
| `Component.$` | *the model behind the face* | the same chemical, read left to right |
| `$(A,B)(C,{…})` | *…but narrowly* | the same, reached less far or by fewer askers |

### `$` as an argument — the representative

Where `$` appears **as an argument** it is not doing its work; it stands for the presence of a representative, in the abstract, the way a punctuation mark does. It is `$` **mentioned** rather than used — the same distinction that makes `**` a part of a sentence and never a word ([The Levels of Writing](../../../.public/.lib/the-semantics-of-books/15-the-levels-of-writing.md#used-and-mentioned)).

Its position says which direction: **first, make me a new one from this; last, give me what stands behind this.**

It works as a discriminator because `$` is a single, unmistakable object — `new Chemistry().view`, a plain function carrying no `$chemical` — so no class and no component can ever be confused for it.

### `$($Component)` — from the class

The definitional form. It is written **once per class, at the export**, where the class lives:

```tsx
class $TableOfContents extends $Chapter { … }
export const TableOfContents = $($TableOfContents);
```

A class carries no scope of its own, so the component this returns is a **root** — nothing above it, and it answers only what is registered on it.

### `$($,Component)` — from a component

The consumer's form, and the common one. It creates **a new component derived from the one given**, so its scope **falls back**: anything not registered on the derivative is answered by what it came from.

```tsx
import { TableOfContents } from '@dna-platform/lib';

const Contents = $($,TableOfContents);   // mine, inheriting theirs
```

The fallback is not machinery we added. A derived component wraps a derived chemical, and a derived chemical is `Object.create` of the one it came from — **so falling back is what prototypes already do**, the same way [`backing()`](../../package/src/abstraction/bond.ts) gives each instance a reactive store built on its template's.

**The comma is the entire difference between this form and the one above, and the entire difference is the source.**

### `$(Component)` — resolve

The ask, and it is written **explicitly**. Framework code says what it wants and gets what the current scope says stands for it:

```tsx
class $Book extends $Chemical {
    view() {
        const TableOfContents = $(parts.TableOfContents);
        return <TableOfContents/>;
    }
}
```

**With nothing registered it returns the very object it was given** — so the default is never *in* the container; it is the argument. Its type is preserved (`Component<T>` in, `Component<T>` out), which is what makes a substitution invisible to the caller and impossible to make with something that is not a subclass.

`<Book/>` written in a view is React's own path and is **not** resolved. Getting the container's answer requires writing `$`.

### `$(A,B)(C)` — register

*For A, a B is a C.* The scope comes first, the thing being asked for second, the thing that stands for it last.

```tsx
const Shelf = $($,TheShelf);
$(Shelf,TableOfContents)(MyContents);
```

**You cannot register without naming a scope.** There is no process-wide form, which is why two packages sharing one `@dna-platform/chemistry` cannot collide: a registration is only ever visible to what renders inside the scope it was written on.

`$(A,B)(C,{…})` carries options where a registration needs narrowing. The plain form is the one that projects downward.

### `$(Component,$)` — what stands behind it

The rare one, and it is measured rather than assumed: **no consumer code uses it.** It exists for debugging, framework inspection, and test harnesses — which is what the [export pattern](../authorship/03-the-export-pattern.md) already said of the shape it replaces.

### `Component.$` — the model behind the face

The same answer as `$(Component,$)`, composing better:

```tsx
const theme = $(themes.Theme).$;    // resolve here, then the model the answer wears
```

**Both forms are kept, and they are pinned equal shape by shape** — from a class, from a held instance, from a derived scope, from a tag, from `$bind`, from a wrapped plain function. Two differences are real and promised: **a plain function carries no `.$`** until `$` wraps it, and **`$(instance,$)` is not the model form at all** — the instance branch is reached first, so the representative is not consulted and you get the instance's component.

**Neither form resolves first.** You named a component and asked what stands behind *it*; resolution is a separate act, which is why `$(X).$` and `X.$` differ under a registration and both are correct.

### A plain function component takes part

A component is a function whose props are its parameters, and it may be side-effecting rather than visual. **`$` wraps a plain one on the way in, memoised**, so it can be asked for, registered, and stood in for like any other — and asking twice gives the same component, so React identity holds.

## Scope

**A component instance is a scope**, and its reach is itself and its progeny — everything rendered beneath it. Resolution walks the lineage from the asking instance upward through the composition graph; the first registration found answers.

**Privacy is not exporting.** A component object is a capability: if your module creates one and keeps it, nobody else can name it, so nobody can register against your scope and your registrations reach nothing outside it. That is module-level isolation obtained from ordinary JavaScript rather than from a build step.

**Registration is configuration, never render.** The framework establishes the scope before it calls a bond constructor and before it calls a view — both are calls it makes itself. Configuring during a render is an error and says so.

## How a chemical consumes

**A local variable, where you need it.** That is the form.

```tsx
class $Book extends $Chemical {
    view() {
        const TableOfContents = $(parts.TableOfContents);
        return <TableOfContents/>;
    }
}
```

**Keep the name.** The namespace import exists so the local can carry the component's **own** name, and the JSX below it reads exactly as it would have without the container. **Do not invent a short alias per site** — a component is named for its class without the `$`, and a resolved local keeps the name it asked for. The namespace is required rather than stylistic: `const TableOfContents = $(TableOfContents)` is a `ReferenceError`, because the `const` claims the name for the whole block before the import can be read.

**Nothing is hidden by this.** The token is an imported symbol — not a string, not an interface fetched from a global — so a class's dependencies are greppable, statically analyzable, and derivable from its source. That is the difference between this and the service location the literature objects to.

**A component can be held. We don't, because `$` exists so that nobody has to** — a held component is a component to pass around, and passing them around is the problem this replaces. Two facts sit beside that choice: **a bond constructor takes chemicals**, not components — `$Book(...chapters: $Chapter[])` receives instances — and a **field initializer runs once, on the template, before any scope exists**, so an ask written there could not resolve correctly. A component is resolved where it is rendered.

**So substituting a resolved component has one route: register.** Overriding a bond constructor changes what **chemicals** a chemical was handed, which is a different act about different things. And plain property overriding stays what it always was — [polymorphism](07-polymorphism.md) for values that are not resolved.

## How an app configures

**A configuration module, and it reads in one order: imports, components, registrations, exports.**

```tsx
import * as parts from '@dna-platform/lib';
import { $MyContents } from './my-contents';

const MyContents = $($MyContents);           // a root I own
export const Book = $($,parts.Book);         // derived from theirs — falls back

$(Book,parts.TableOfContents)(MyContents);   // and this is what my book uses
```

Downstream code imports `Book` and renders it. **Everything beneath it resolves the way this module said**, and nothing beneath it mentions a registration.

**Registration appears only in configuration modules.** Everywhere else writes `$(X)` to ask. That is the [composition root's](https://blog.ploeh.dk/2019/06/17/composition-root-location/) own specification — the container never leaks past the place that composes — and here it is a grep with an empty result.

**Configure before anything renders.** The framework establishes a scope before it calls a bond constructor and before it calls a view; a registration arriving inside either is an error, because a configuration that changes mid-render would mean a component resolving two ways in one paint.

## What a scope reaches, and in what order

**A scope reaches only what it BINDS.** A chemical that merely returns `this.children` never parents them, so a part standing "inside" it has no lineage to walk and resolves to its argument. **The catalyst graph is threaded by the bond constructor** — the bond is what makes a scope reach. This is the single most common way a registration appears to do nothing.

**Reach projects downward by default.** `$(A,B)(C)` answers anything beneath A, not only A's own asks — because the alternative would mean naming every class between a book and a sentence. `{reach: 'self'}` narrows it; `{asker: $Class}` answers only that class's asks, and beats an unnamed registration in the same scope.

**Precedence is a stated order, nearest to the asker first:** the asking instance's own scope, falling through its derivation chain and its class chain, then each ancestor in the composition lineage, then the argument itself. The cost of that order is worth knowing — **a component that configured itself cannot be re-dressed from outside.**

**Chemical code resolves as the chemical it belongs to.** A method's asks answer the same whether or not a paint is in flight, so a reading does not mean two things depending on who is looking. Getters are not covered by this and remain paint-dependent.

## A limit, and it is not a bug

**A parse may not be given a parent while it mutates what it makes.** `parts()` writes an index onto everything it composes; a write to a chemical with a parent diffuses up the composition tree and re-runs the reading that made it. So **region-scoped substitution through the parse is unavailable** until a reading stops writing to what it composes.

The full diagnosis, with the loop and the three reverts that found it, is [The parse that woke its own parents](../../../.public/.lib/solutions/16-the-parse-that-woke-its-own-parents.md).

## Where the catalogue comes in

Each scope holds a [`$Catalogue`](../../package/src/implementation/catalogue.ts) keyed by the requested component's identity. A derived scope's catalogue is the parent's `$new()` — a child whose `#topics` chain falls through — and a class-created scope's is a root. `$deref` is how a scope lets go.

**The catalogue's own handshake mirrors the encapsulation rule**: `$find(ref,subject)` only searches a catalogue you already hold, so scopes cannot be discovered, only used when handed to you.

## See also

- [The binding constructor][s-III-3] — one of the two places a scope is established.
- [The catalyst graph][s-III-8] — the lineage resolution walks.
- [The HTML catalogue][s-III-9] — `$('div',X)`, which is this feature's ancestor: a token in, an implementation stored.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md
[s-III-8]: ./08-catalyst-graph.md
[s-III-9]: ./09-html-catalogue.md
