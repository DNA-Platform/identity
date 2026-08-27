# The Provider

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

*Opened and closed 2026-08-26, Doug at the keyboard the whole way. **Status: `closed`.** It is a **prototype sprint** — it ran no brainstorm and wrote no requirements, because the thing being designed was the design. The title is the implementer's and stands for correction; **"provider" is Doug's own word** for what a bound type reads from.*

**Where the code lands.** [`library/.public/package/src2`](../../package/src2/) — *the next version of the framework, opened by Doug at the close of [The Specification](25-the-specification.md)* — and, at the end, **two defects fixed in [`$Chemistry`](../../../chemistry/package/src/)** with the rebuild chain run first.

## What this sprint is

***A piece of writing carries its types, and `$$` hands you the form.*** **That sentence is the whole design**, and it was arrived at by building it on the simplest thing there is — a letter — and then on the strangest thing anyone could name: **a clickable smiley face that is a letter.**

---

# <a id="the-rulings"></a>The rulings, verbatim

*Every one of these turned the design, and eight of them corrected the implementer.*

> ***"It's not about coercion. It's about composition. The thing being converted is a thing that has to already have the type."***

> *"`$$` should throw an error if the type is not found. **It shouldn't attempt to use it.**"*

> *"The `$$` has to find that the thing can be the right kind. **One of its types needs to be an instanceof letter right?**"*

> *"we should put that in a utility called Lib, and **why don't we call that `$Lib` and export it as `$$`**"*

> *"**Not `$this`** because you then have to call `this.$this`, and that is weird, but something similar."*

> ***"Get out of the habit of trying to make writing work for everything."*** *— on a `view()` put on the base class to make a recursion go away.*

> *"**Use `$` to get the component associated with the thing. Go look up how to draw a chemical. We support this natively.**"*

> *"**No you wouldn't use multiple views there.** Multiple views are definitely not used like that. They are for conceptually different views. And **they are supposed to be for the external user to change**."*

> *"**And why are you putting a collection that could be polymorphically adjusted outside of the class?**"*

> ***"Your failures are at the level that I give you a pretty concrete spec for the view and you completely ignore it."***

> *"**Nothing should ever be typed `unknown`. At minimum, they are chemicals.**"*

> *"**No I'm wrong, writing isn't abstract.** We can do `<Writing>Whatever<Type>Word</Type></Writing>`."*

> *"I don't know what you mean by `specifies` but **we have `specification` and `specify` so that can't possibly be what the name of a property is**."*

> *"**`check` had better throw eagerly** otherwise this will be hard code to write."*

> *"**Fresh array assignment should be free.**"* · *"Make it if it is a clear bug, otherwise run the design past me."*

> *"what if letters were hex codes? **Your validation would be bad.** But perhaps the point is that we'll make another class when we need to specify that."*

---

# <a id="what-was-built"></a>What was built

## <a id="the-shape"></a>The shape, in five classes

| | |
|---|---|
| **`$Writing`** | a `$Chemical` and the first concrete `$Referent$`. Holds `inline`, `parenthetical`, its `text` block, and its `specification` |
| **`$Annotation`** | a `$Writing` that is `parenthetical` — present in the writing, absent from the reading |
| **`$Type`** | an `$Annotation` that declares `formula`, so `<Type>Letter</Type>` resolves through [the catalogue](../../../chemistry/.lib/composition/12-the-formula.md). Holds `instance` and `bind()` |
| **`$Letter` … `$File`** | seven types descending straight from `$Type`, caching their own names, `resolve = false` so their own tags are content rather than keys |
| **`$Lib`** | the utility. **One method, exported as `$$`** |

## <a id="the-two-halves"></a>The two halves, and they are Doug's sentences

**`$$(type, writing)` FINDS. It does not make.**

```ts
const found = of.specification.find(one => one instanceof type);
if (!found) throw new Error(`This writing is not a ${type.name} — it carries ${names || 'no type at all'}.`);
found.bind(of);
found.specify();
```

***An earlier version manufactured a narrower type when the writing carried a wider one*** — so a writing carrying a bare `<Type>` would coerce to **anything**. **Deleted on Doug's ruling**, and the hex-letter case got *better* for it: a writing carrying a `$HexLetter` answers to **both** names because a hex letter **is-a** letter, and one carrying only `$Letter` refuses `$HexLetter` and says so.

**A bound type DRAWS THE WRITING IT STANDS FOR**, through the framework's own instance form:

```tsx
override view(): ReactNode {
    if (!this.instance) return null;
    const Instance = $(this.instance);
    return <Instance />;
}
```

***`chemical.ts:1164` already types this*** — `<T extends $Chemical>(chemical: T): $Component<T>` — **so the three casts an earlier draft wore were fighting the framework for nothing**, and they were erasing `$Properties<T>`, which is the type-preservation the representative exists to give.

***The comment above it is the load-bearing part:*** **a type's own writing is its NAME, never its content.** *The formula rewrites `<Type>Letter</Type>` fresh with its children, so a bound letter that drew its own children would print the word **Letter** in the middle of the prose. Drawing nothing when unbound is what stops that — and it is also what stops the recursion.*

## <a id="the-exotic-letter"></a>The exotic letter — the demonstration, and it is Doug's shape

```tsx
<Writing>
    <Smiley />
    <Type>Letter</Type>
</Writing>
```

**`$Smiley` is a `$Writing` that knows nothing about letters.** It holds the faces it can turn to and which one it is turned to now; `copy` answers the current face; a click turns it. ***No new machinery, and — after a correction — no misuse of an old one.***

> ***THE LOOK SERIES WAS ABUSED AND THE ABUSE IS WORTH RECORDING.*** *The first version made the three faces `view` / `$view` / `$$view` and had the object set its own `$look` from a click handler.* **Looks are for conceptually different views and are chosen from OUTSIDE by the container** — *the account says it in those words.* **Three faces are three VALUES**, and the right mechanism was an ordinary reactive field all along.

**And the faces are a member**, which is the second correction and the one that earns the design: `class $Cats extends $Smiley { faces = ['😺', '😼']; }` changes what the writing **is** without touching `$Letter`, `$$`, or any catalogue. *That is [the hex-letter case](#the-rulings) arriving on a different axis.*

## <a id="the-swap"></a>Where `<Type>` actually resolves — measured, because it decides the authoring

| | |
|---|---|
| **outside a drawing** — `$(<Writing>a<Type>Letter</Type></Writing>)` | ***`$Type`*** — not swapped |
| **inside a view, built with `$()`** | ***`$Type`*** — not swapped |
| ***as a drawn child*** | ***`$Letter`*** |

***So Doug's shape has to be RENDERED***, not built. **[R202's boundary](24-the-formula.md#r202), met in practice** — and it is still [the open question from The Specification](25-the-specification.md#open) about what the compiler can emit.

---

# <a id="the-chemistry-fixes"></a>The two defects in `$Chemistry`

*Found by building on the framework rather than by any gate, which is the third time in this branch.*

**[The bond that woke the tree it was building](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md)** — ***a chemical that writes a field in its bond constructor loops without bound if anything composes it.*** **12 distinct instances in 14 bonds**, `Too many re-renders`, on `this.n = 1`. **The fix was already in the file**: `$rendering$` wraps props application and did not wrap the bond.

**And value equality on the write path.** *Doug's question — "we aren't doing value equality for arrays?" — was right, and it is a **separate** defect.* [`equivalent`](../../../chemistry/package/src/implementation/reconcile.ts) was already used on the read path and never on the write. **The order mattered:** fixing equality first would have masked the reproduction and left the loop waiting for a scalar.

***Both watched going red before either was believed, and the rebuild chain ran first.***

---

# <a id="numbers"></a>The numbers, from the runs that claim them

> **`$Chemistry` 728/728 across 61 files · `tsc` 0 · `rollup` 0 · `dist` rebuilt**
> **`lib` 352/352 across 32 files · `tsc` 0**
> **`src2` `tsc` 0 · 17 probes across four files, every one watched going red**

**The probes are scratch, not a suite** — `letter.probe.tsx`, `smiley.probe.tsx`, `nested.probe.tsx`, `equality.probe.tsx` and `src2.config.ts`, in the session scratchpad. ***`src2` is outside the package's own typecheck and has no test runner of its own.*** *That is a gate to wire before it grows.*

---

# <a id="wrong-turns"></a>The wrong turns already taken — do not repeat these

| | what happened |
|---|---|
| ***putting the mechanism on the base class*** | A `view()` on `$Writing` that walked its parts and skipped parenthetical ones, written to make a recursion go away. **Doug: *"Get out of the habit of trying to make writing work for everything."*** *Moving it to `$Letter` deleted the recursion outright — a letter draws a string, and a string cannot contain a type.* |
| ***casting past the framework*** | `$(x as never) as never as React.ComponentType`. **The typed overload existed.** *A cast that erases `$Properties<T>` throws away the one guarantee the representative provides.* |
| ***spending the look series on values*** | Three smiley faces as three looks, with the object choosing its own. **Looks are conceptually different views, chosen from outside.** |
| ***a collection at module scope*** | `const faces = [...]` beside the class instead of on it — **unreachable by any subclass**, which is the one thing the design is for. |
| ***rewriting Doug's spec*** | Given `<Writing>{something}<Type>Letter</Type></Writing>`, the implementer wrote `<Smiley><Letter/></Smiley>` — **dropping the `<Type>` and inverting the nesting.** *Writing `<Letter/>` directly hardcodes the class the formula exists to resolve.* |
| ***a marker name colliding with the vocabulary*** | `specifies`, beside `specification` and `specify`. **Struck.** *The mechanism it served is [still needed and still unnamed](#owed).* |
| ***a green probe that asserted nothing*** | `expect(drawn).toBeTruthy()`. **[Solutions 14](../solutions/14-the-green-that-exercised-nothing.md), again.** Rewritten to compare the resolved class name, then watched red. |

---

# <a id="where-things-stand"></a>WHERE THINGS STAND

*[The session boundary](../../../../.claude/library/our-skillset/32-ce-handoff.md). **The next session opens by reading this and acts on nothing until it has** — and the working copy is the truth, not this page.*

## The state

> **`$Chemistry` 728/728 · `tsc` 0 · `rollup` 0 · `dist` rebuilt · `lib` 352/352 · `tsc` 0 · `src2` `tsc` 0**

**Nothing is committed at the time of writing**, and [three earlier sprints were already uncommitted in this tree](25-the-specification.md#where-things-stand) — *The Look*, *The Formula* and *The Specification* — **so a push carries four.** ***Use [the commit tool](../../../../.claude/library/..environmentalism/06-on-sync--commit.sh), never raw git.***

**One file changed casing:** `src2/utilities/html.ts` → `Html.ts`, Doug's rename, **and git was still tracking the old name** — which made `tsc` raise TS1149 pointing at an import line and look like the utility was broken. *The index is corrected; an editor that still shows red there needs its TS server restarted.*

## <a id="done"></a>What is DONE

- **`src2` holds a working prototype**: `$Writing`, `$Annotation`, `$Type`, seven level types, `$Lib`/`$$`, and `$Letter` implementing composition and drawing its provider.
- **`$$` finds, binds, specifies, and throws naming both sides.** It makes nothing.
- **A piece of writing that carries `<Type>Letter</Type>` is a letter**, its bound form draws it, and an exotic letter clicks.
- **Two `$Chemistry` defects fixed**, with the rebuild chain and both suites.
- **The library:** [Solutions 29](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md), and [Reactive Properties](../../../chemistry/.lib/reactivity/01-reactive-properties.md) rewritten — *which also corrected a settled account that said only `$`-prefixed fields are reactive. **[`bond.ts:52`](../../../chemistry/package/src/abstraction/bond.ts) says a plain field is reactive**; `$` decides settability from JSX.*

## <a id="owed"></a>What is NOT done, and what is OWED

| | |
|---|---|
| ***the model does not follow the click*** | **The page shows 😀 and `writing.copy` still says 🙂.** The block holds the bonded smiley; React draws a derivative; the click writes the derivative. *[K24](25-the-specification.md#k24), now measured on the shape Doug specified.* **A probe pins the divergence and will flip when it is fixed.** ***This is the largest open thing in the design.*** |
| ***the collector*** | `specify()` states its reason through `$check` and **nothing outside a bond hears it**. So the prototype can prove a type is *selected* and cannot prove one *rejects*. |
| ***`$check` eager throw*** | **RULED and not built.** *`reset()` sets `chemical = null`, so "is a bond in flight" is one comparison* — but it changes the compiler's [`validate.ts`](../../build/stages/validate.ts), which asks `valid()` outside a bond and expects a boolean. **Chemistry change; rebuild chain.** |
| ***two names*** | **`annotation`** — the marker `$Writing` uses to find its types, because `instanceof $Type` closes a module cycle (*measured: `Class extends value undefined`*). And **`$Composed`** — the probe's proxy for the class that carries a block, if one is wanted. ***Both are proxies awaiting Doug.*** |
| ***the maker*** | A type answers **what it composes** and **how it divides**, so `parts()` is written once on `$Type` and no class name appears in the walk. **[S10](../the-condition-report/04-semantics.md#s10) becomes designable through this.** *Not started.* |
| ***`valid` → `specify`, and the "law" sweep*** | **[R207](25-the-specification.md#r207) and [R206](25-the-specification.md#r206), owed since The Specification and still owed.** *86 call sites across 39 files; 329 occurrences.* |
| **`src2` has no gate** | Its own `tsconfig`, no runner, outside `npm run test`. |
| **no export pattern** | Nothing in `src2` writes `export const X = $($X)`, so no specimen is filed at module load and no key exists until something constructs the class. |

## <a id="next"></a>What the next session is for

***Doug: a serious design session to build this new version of the framework.*** **The prototype answered the questions it was built to answer; what it did not do is decide the shape.** *These are the ones it left standing, in the order they block each other:*

1. **Does state written on a drawn derivative reach the model?** *Everything interactive depends on it and it is a `$Chemistry` question.*
2. **Where does the block live** — on `$Writing`, or on a class below it that a leaf like `$Smiley` need not inherit?
3. **The maker** — `composes` and `divide` on the type, which is what makes the seven levels one implementation.
4. **The collector** — how a `specify()` failure is heard, and whether `$check` throws eagerly.
5. **What the compiler emits**, given that `<Type>` only resolves as a drawn child.

## Where to start reading

***This chapter last.*** **Start at [Solutions 29](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md)** — it is the only thing here that changed the framework everything else stands on. **Then [Reactive Properties](../../../chemistry/.lib/reactivity/01-reactive-properties.md)**, which now states both fixes and corrects what it used to claim. *Then the working copy of [`src2`](../../package/src2/), which is 13 small files and reads in ten minutes.*
