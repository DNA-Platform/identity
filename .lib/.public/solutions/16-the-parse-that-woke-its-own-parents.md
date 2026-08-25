# The parse that woke its own parents

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · render-loop · diffuse · parse · getter · gate
- **sprint:** [The Representative](../projection/12-the-representative.md) · [The Parse](../projection/13-the-parse.md) · [The Theme](../projection/18-the-theme.md) · [Working Well By Default](../projection/22-working-well-by-default.md)

---

## Symptoms

- **Both demo drivers went red with `Error: Maximum update depth exceeded`**, caught by React Router's boundary during render. `verify-book.mjs` stalled at **check 0** — the shelf, the first page it opens. `verify-demo.mjs` at check 21.
- **Every unit suite stayed green throughout** — lib **203/203**, chemistry **674/674**, `tsc` 0 in both, the app typecheck clean.
- It surfaced **several turns after the change that caused it**, because nothing drove the demo in between. The change was made, the suite was run, and the page was never opened.

## What did not work

Three reverts, each eliminating a suspect and none of them the cause:

| reverted | result |
|---|---|
| `$lift`'s registry-miss recovery (it calls `setCid` during render) | still red |
| the reagent priming that wraps every chemical method | still red |
| **all** of chemistry's source | a **different** error — `TypeError: made.valid is not a function` |

That third one is the informative one. It is not a fix; it proves the framework was **not** the cause, and it proves the model's converted asks depend on the new dispatch — with the old `$`, `$(Component)` answers the chemical, so `$(<Sentence>…</Sentence>)` was handed a chemical where a component was expected.

## The mechanism

One change, at five sites in the writing chain: the parse began threading a parent.

```tsx
// before
return $(<Sentence>{prose}</Sentence>);
// after — to give the composed part a lineage a scope could reach through
return $(<Sentence>{prose}</Sentence>, this);
```

**And `parts()` writes to every part it composes.** [`Writing.tsx:109-111`](../../package/src/writing/Writing.tsx) — `part.index = slot + this.first`, and `part.$role = 'mention'` where mentioning propagates.

**A write to a chemical that has a parent does not stay put.** Both of chemistry's propagation paths walk `$$parent$$` and react on every ancestor — [`scope.ts:94-102`](../../../chemistry/package/src/implementation/scope.ts) inside `finalize`, and [`diffuse` at `scope.ts:111`](../../../chemistry/package/src/implementation/scope.ts).

So the cycle closes:

```
parts() composes a part  →  writes part.index
   →  the write diffuses up the new parent chain: paragraph → section → chapter → book
   →  those ancestors re-render
   →  their views read parts() again
   →  parts() composes NEW parts, and writes to them
   →  … never settles
```

Before the threading, a composed part was its own parent, so the write had nowhere to go. **The parenting did not cause the write; it connected the write to something that would answer it.**

## The law

**A parse may not be given a parent while it mutates what it makes.** The two are incompatible as written, and neither is wrong on its own — the writes give parts their index, and the parent is what a scope needs in order to reach.

The consequence is a real limit rather than a bug to fix quietly: **region-scoped substitution through the parse is unavailable** until `parts()` stops writing to what it composes. That is a design question about what a reading is allowed to do, and it belongs in a design session rather than in a patch.

## DISCHARGED — [The Parse](../projection/13-the-parse.md), 2026-08-12

**The law above still holds. Its condition no longer does, so the limit is gone.**

The design session happened, and Doug's answer was to remove the writing rather than to work around it. `parts()` wrote **twice** — a number onto every part, and `$role = 'mention'` where mentioning propagates — and both are gone:

- **Nothing carries a number.** Position answers where a part stands, and `at(n)` reads `parts()[n]`. A number is what a **reference** holds; `$Location` keeps its own, because that is what it *is*.
- **Mentioning propagates by lineage.** A part is mentioned if what holds it is, so `role` reads its parent instead of being assigned one. That makes this defect's fix and mention-propagation **one mechanism** rather than two.

With nothing written, the parse threads lineage into what it composes and **both drivers stay green** — `verify-book.mjs` at 51 checkpoints, `verify-demo.mjs` at 25. The change that produced this chapter is the change that now works.

**The second write was nearly missed, and the record is why it was not.** The plan for the repair said threading a parent was safe "once nothing is written," counting only the number. Rereading *this chapter* while planning surfaced `part.$role = 'mention'` — which fires for exactly the same reason — and it was fixed before it could take the drivers red a second time. **That is the whole return on filing a defect: the next attempt read the chapter and found the half the plan had missed.**

**What is still true, and worth keeping:** a reading may not write to what it composes. The limit was never about parents.

## The gate that missed it, and it is the fourth filing

The change was made to enable region scoping, run against the unit suite, seen green, and **never driven**. The suite could not have caught it: **no test renders a book**, so 203/203 proved compatibility and nothing about the parse under a paint.

This is [the green that exercised nothing](14-the-green-that-exercised-nothing.md) again — and that chapter's own conclusion holds here, that the cause is the **reporting** rather than any one gate. The number was true; the sentence that should have accompanied it was never said.

**The habit that catches it:** a change to the model's parse is not verified until a book has been **drawn**. The suites answer a different question, and answering it well is not evidence.

## What it also settles

A proposed conversion of the demo's three dresses into scopes was **the same change at sixteen eval sites**, and would have produced the same loop on the page. It was stopped and raised rather than shipped, on the grounds that the parse threads no parent and the ruling was owed. **That judgement was right for a reason nobody had yet measured** — and this chapter is the measurement.

## See also

- [The writing that looped its page](12-the-writing-that-looped-its-page.md) — the other render loop in this branch, and a **different** mechanism: prop rebinding on an inline child inside a block, host rendering 41 times and child zero. A reader arriving with "the page loops" should read both and check which shape they have.
- [The chapter that wrote its sections twice](13-the-chapter-that-wrote-its-sections-twice.md) — building the model inside a view, which this loop passes through on every turn of the cycle.
- [The green that exercised nothing](14-the-green-that-exercised-nothing.md) — the gate half of this.

---

# IT CAME BACK, AND THE DISCHARGE HAD MISSED A THIRD WRITE — [The Theme](../projection/18-the-theme.md), 2026-08-20

***The law held. The condition was not gone — it was dormant.***

## Symptoms, and the first one is that there were no failures

- **Three test files did not fail. They DIED.** `Worker exited unexpectedly`, no assertion, no stack that named anything in this repository.
- Run alone with output showing, the reason arrived: ***`FATAL ERROR: Reached heap limit Allocation failed — JavaScript heap out of memory`***, after two Mark-Compacts at **4,050 MB**.
- **The suite reported `Test Files 25 passed (28)` and `Tests 274 passed (307)`** — a green count with three files simply absent from it.
- The change that caused it was **one line**: a section began drawing its parts instead of its source block.

## What did not work

- **Reading the discharge.** [It says "with nothing written, the parse threads lineage"](#discharged--the-parse-2026-08-12), and that sentence is true about the two writes it counted. **It is not true of the parse.**
- **Looking for an assertion.** There is none. ***A heap death is not a red test***, and the runner's summary presents it as three files that merely did not appear.

## The mechanism — ADOPTION IS A WRITE, and it is the third one

The discharge counted two: the number, and `$role = 'mention'`. **The parse still writes at five sites**, and it writes the parent itself:

```tsx
if (made.parent !== this) made.parent = this as never;
```

[`Paragraph.tsx:65`](../../package/src/writing/Paragraph.tsx) · [`Section.tsx:143`](../../package/src/writing/Section.tsx) · [`Sentence.tsx:69`](../../package/src/writing/Sentence.tsx) · [`Word.tsx:27`](../../package/src/writing/Word.tsx) · [`Document.tsx:112`](../../package/src/document/Document.tsx)

**`parent` is a chemical's own setter, so assigning it is a write like any other**, and [`diffuse`](../../../chemistry/package/src/implementation/scope.ts) propagates a write upward through the composition tree. So the cycle from [the original mechanism](#the-mechanism) closes again, with one difference that makes it worse:

```
view() calls parts()  →  parts() builds NEW objects and adopts each one
   →  the adoption diffuses up  →  the ancestor re-renders  →  view() calls parts() again
   →  NEW objects again, adopted again  →  … and every turn ALLOCATES
```

***The original loop spun. This one spins and allocates***, which is why it exhausts the heap instead of tripping React's update-depth guard.

## Why it lay dormant for a sprint and a half

**Adoption was always a write. Nothing had ever called `parts()` inside a render.** The drawing rendered the source block; the parse ran in suites, in the compiler and in the validator — **all outside a paint, where a diffuse has nothing to re-run.**

***So the discharge was not wrong, it was narrow:*** it removed the two writes that were firing and left one that could not fire yet. **A condition that is dormant reads exactly like a condition that is gone.**

## The fix — and it is deliberately NOT the obvious one

**The obvious fix is to stop adopting**, and it was rejected: adoption is what gives a part its lineage, and lineage is what `role` propagates through and what a scope reaches along. *Removing it would undo [the discharge above](#discharged--the-parse-2026-08-12).*

***So the DRAWING holds what it read, and the parse is untouched.*** A reading is kept per instance, keyed on the writing it came from, in the draw path alone:

- **`parts()` is exactly what it was** — anything asking it outside a render still gets a fresh reading, and the model keeps its semantics.
- **The second call in a render returns the same objects**, whose `parent` already equals `this`, so **the guard short-circuits and no write happens.**
- **Proven by the numbers that did not move:** `CHECK` reported **7/7 books · 158 paragraphs · 233 sentences · 1,293 words · 5,881 letters** before and after, and the suite went **307/307 → 313/313** with the new promises.

## The law, sharpened by its own return

**It was:** *a parse may not be given a parent while it mutates what it makes.*

***It is:*** **a parse may not be given a parent while it mutates what it makes — AND GIVING THE PARENT IS ONE OF THE MUTATIONS.** *The two halves are not separable, which is what the first statement implied and the discharge read past.*

**And the practical form, which is the one to carry:** ***a reading that is called during a render must be held.*** *Not for speed — for termination.* **The uncached parse was filed four times as a cost. It is not a cost. It is a wall**, and any future work that draws through the model meets it on the first render.

## What the record got right, and what it could not

**[The discharge's own lesson was that rereading the chapter caught a missed write](#discharged--the-parse-2026-08-12)** — the `$role` one. ***It happened again and rereading did not catch it this time***, because the third write does not look like a write: it reads as bookkeeping, in a line whose visible job is a guard.

**So the tell is worth stating for the next reader:** ***in this framework, any assignment to a chemical's member is a write that diffuses — including the ones that look structural.*** *`part.parent = this` is not plumbing. It is a mutation with a reach.*

---

# <a id="a-getter-is-a-reading-too"></a>THE THIRD APPEARANCE — A GETTER IS A READING TOO · [Working Well By Default](../projection/22-working-well-by-default.md), 2026-08-25

***The law held again, and again the condition had been dormant rather than absent.*** **It cost one driver run to find and one line to stop.**

## Symptoms

- **`verify-library` died at `Maximum update depth exceeded`** — the same words as [the original](#symptoms), caught by React Router's boundary during render.
- **Nothing else was red.** `lib` **352/352**, `tsc` 0 in every package, both application typechecks clean, `CHECK 7/7` with its counts unchanged.
- It arrived on a change that touched **neither the parse nor a view** — the framework's card became a chapter, and the application began reading `card.title`.

## What did not work — and the first suspect was innocent

**The card was the obvious cause and it was wrong.** *Probed directly:*

```
PARTS 2   TITLE X   SUMMARY SummaryAn account.   STABLE true true
```

***It declares its writing once, and `parts()` returns the identical objects on a second call.*** **[The held reading from the fix above](#the-fix--and-it-is-deliberately-not-the-obvious-one) was doing its job.** *So the loop was somewhere the previous two appearances had not looked.*

## The mechanism — A GETTER THAT BUILDS A CHEMICAL

**[`$Document.title`](../../package/src/document/Document.tsx) constructs a NEW `$Title` every time it is read:**

```tsx
get title(): $Title | undefined {
    const t = this.canonical?.heading ?? '';
    if (!t) return undefined;
    const Title = $(titles.Title);
    const title: $Title = $(<Title>{t}</Title>);   // ← a fresh chemical, every read
    return title;
}
```

**The application's breadcrumb had just started reading it inside `view()`.** *So every render built a chemical, and [a construction inside a render is the same wall this chapter has met twice](#the-mechanism--adoption-is-a-write-and-it-is-the-third-one)* — **new objects, allocated and adopted, on a path that re-runs because of them.**

***Why it lay dormant is the same sentence a third time:*** **`$Document.title` was always like this. Nothing had ever read it inside a view.** *The framework's own `head()` reads `this.title?.copy` in a view and does not loop — because a `$Book`'s title comes from its cover, built once, while the application was reading a CARD's title on a chemical it re-reads every paint.*

## The fix, and the root left standing

**The breadcrumb reads [`canonical?.heading`](../../package/src/writing/Section.tsx) — a string, constructing nothing.** *One line, and `verify-library` went **39/39, 0 console errors**.*

> ***THE ROOT IS NOT FIXED AND IS NAMED RATHER THAN OMITTED.*** **`$Document.title` still builds on every read, and [`$Figure.caption`](../../package/src/writing/Figure.tsx) does the same thing** — *found by the same grep, latent for the same reason.* **Two getters that no view may touch, and nothing says so at either one.**

## The law, in the form this appearance adds

**It was:** *a reading that is called during a render must be held.*

***And what this adds is which things are readings:*** **a getter that builds a chemical IS a reading**, *however small it looks and however much it reads like an accessor.* **`parts()` announced itself as a reading. `title` does not** — and that is exactly why it survived three sprints and two appearances of this chapter.

***The tell, stated so the next reader can grep for it:*** **any getter whose body contains `$(<…/>)` is a reading, not an accessor.** *It may be called from a suite, a compiler or a validator freely; it may not be called from a view.*
