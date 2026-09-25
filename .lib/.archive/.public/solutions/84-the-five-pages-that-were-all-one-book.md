# The five pages that were all one book

- **author:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **sprint:** [Sprint 73 — The Essential Books](../projection/79-sprint-73--the-essential-books.md)
- **keywords:** `tooling` · `overwritten-input` *(proxy name, flagged for Doug)* · four published pages identical to the byte · a page bigger than the page it was made from · a library that publishes one book however many it holds

---

## The symptom

***A library of five books published five pages, and four of them were the same page.*** The build said so in the ordinary way and nothing was wrong with it:

```
5 books read · 0 unchanged · 258 writings specified   ·   bound in 24.0s
```

**Four of the five pages were identical to the byte**, at 43,983, and the root's own page was 23,053 — *smaller than the pages made from it.* None of the four held its own book: every one drew `pd-dougs-library`, the ROOT book's class, and a chapter written that morning could not be found in any published file.

```
43983 ./claude-and-our-projects/index.html
23053 ./index.html                            ← the root, and the smallest
43983 ./my-library-log/index.html
43983 ./semantic-reference-theory/index.html
43983 ./semantics-of-types-and-more/index.html
```

***The size was the tell and it was read backwards for an hour.*** A shell should be SMALLER than a page. These were larger, which meant they were not shells — they were the root's page with something added.

## What it is

**The page TEMPLATE and a rendered PAGE were the same file.**

[`draw.ts`](../../package/.binding/rendering/draw.ts) read the face's `index.html` as the template every book is drawn into. The bundle writes the shell there — and the ROOT book's own page is written there too, because the root's address is `/`. So the first book drawn destroyed the template, and every book after it was drawn into the root's finished page.

***And the injection kept quiet about it***, which is why no gate could fire. [`page.ts`](../../package/.binding/rendering/page.ts) puts the markup in by matching the EMPTY element:

```ts
.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
```

**After the root has been written there is no empty element left**, so the replacement finds nothing, changes nothing, and returns the string it was given — **the root's page, whole.** *A `String.replace` that matches nothing is not an error in any language.*

**The `</head>` replacement DID still match**, every time, so each page got a second copy of the stylesheet and a second copy of the replay script. ***That is the twenty kilobytes, and it is why the copy was bigger than the original.***

## Why every gate stayed green

***Nothing that ran could see it.*** The specification reads BOOKS, not pages, and every book specified: 258 writings, 0 failures. The library rules read the graph, and the graph is written at specify, before a page exists. The manifest records what was WRITTEN, and five files were written. **Every number in the build was true.**

*The one instrument that would have caught it is a driver that opens each page and asserts visible text, and the master binding ships none — [it has no `design/` folder at all](../projection/79-sprint-73--the-essential-books.md), while both demos have one that never came from it.*

## What did not work

***Three readings were wrong before the right one, and each was plausible.***

- **"It is the hydration shell."** The branch already records that [a prerendered page is a shell that hydrates](../projection/79-sprint-73--the-essential-books.md#where), so identical pages looked like known behaviour. *It is not: a shell is small, and these were large.*
- **"The routes or the modules are wrong."** They are not. A probe loaded every route and printed what came back — **each answered its own class and its own chapter count** — so the loading was never in question:
  ```
  Doug                      → $DougsLibrary          | chapters 3
  MY Library Log            → $MyLibraryLog          | chapters 4
  ```
- **"`$` returns the parent's component for an empty subclass."** Plausible, because every book here is `class $X extends $DougsLibrary { }` and a class-level cache would be inherited. *It is not:* [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) guards with `Object.prototype.hasOwnProperty.call(this, $component$)`.

## The fix

**The shell is taken aside once, before any page is drawn**, and every child reads that instead of the face:

```ts
export const shellOf = (binding: string): string => join(binding, '.shell.html');
copyFileSync(join(binding, '..', 'index.html'), shellOf(binding));
```

*Measured after: five pages, five different sizes, each carrying its own book's class, and a chapter written that morning present in the page of the book that holds it.*

## The lesson, which is about files and not about rendering

> ***A TEMPLATE IS AN INPUT AND A PAGE IS AN OUTPUT, AND THEY MUST NOT BE THE SAME FILE.***

**Wherever a program reads one thing to write many, the thing it reads has to be somewhere the writing cannot reach.** *The failure mode is silent by construction: the first write succeeds, and every later one is made from a source that no longer says what it said.*

***And the second half is about the seam that hid it:*** **a replacement that matches nothing is not an error.** *`String.replace` with no match returns its input, so a pipeline built from replacements degrades into a copy rather than failing.* **Where a replacement is load-bearing, its match is a claim, and a claim that can silently not hold is the same as no claim at all.**
