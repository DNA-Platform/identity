# Implementation

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

*(**Mechanisms that are not obvious, not precise, or not swappable.** Doug's test is the one used throughout: could an implementer swap one kind of functionality for another without fighting the framework, and does the mechanism read as inevitable to somebody who has not been told? **Almost everything here was written between 2026-08-19 and 08-21**, which is [the third rush](01-how-to-read-this.md#the-rushes).)*

---

# The drawing

## <a id="i1"></a>I1 — The drawing template is adopted by half the framework, and the half that skips it cannot be themed

> **TREAT** · *step 4* — the five that skip the template join it, and **`named()` dissolves into `set()`** so a subclass changing an author changes the author.

**The template is three lines** — [`$Writing.view()` asks, `gathered()` collects, `set()` fills](../../package/src/writing/Writing.tsx) — **and a class overriding `set()` inherits the other two.** *Seventeen classes do.*

***Six override `view()` outright and never reach it:*** `$Figure` · `$Legend` · `$Denote` · `$Document` · `$TableOfContents` · `$Book`.

**`$Book`'s is [D49](../projection/19-the-binding.md#d49) and correct** — a book is in charge of its own reading environment. **The other five are not decisions; they are five classes written before the template existed and not brought to it.** *`$Document` re-implements `gathered` inline, twelve lines below the one it inherits.*

***And there is a second, undeclared drawing entry point.*** [`$Author`, `$Subject` and `$Canonical`](../../package/src/book/Author.tsx) each define **`named(theme)`**, called only from [`$Cover.byline`](../../package/src/book/Cover.tsx) — **while their `set()` returns `null`.** *So a subclass overriding `set()` on an author changes nothing on screen, because the cover calls the other method.* **Two rendering surfaces, one invisible to the template and to the theme.**

## <a id="i2"></a>I2 — Thirty-three inline style objects hold aesthetics no theme can reach

> **TREAT** · *step 4* — ***the largest step in the cleaning and the only visible one.*** The pattern already works in four classes.

***The pattern Doug named — "a property with a styled component can be overridden" — is used by four classes:*** `$Paragraph` (`Prose`, `Quotation`, `Item`, `Displayed`), `$Book` (`Sheet`, `Leaf`, `Running`, `Turning`, `Step`), `$Cover`, `$TableOfContents`. **Fifteen styled components, four files.**

***Nineteen other files write inline style objects — 33 of them*** — carrying decisions the theme has no member for:

`fontWeight: 600` · `letterSpacing: '-0.02em'` · `lineHeight: 1.15 / 1.25 / 1.5 / 1.55 / 1.65` · `borderRadius: '4px' / '3px'` · `fontSize: '0.88em'` · `padding: '0.1em 0.35em'` · `textUnderlineOffset: '0.15em'`

**So [R63](../projection/18-the-theme.md#r63) — *the default carries no aesthetic opinion* — is false in nineteen files**, and ***a consumer restyling a title cannot change its weight, its tracking or its leading without reimplementing `set()`.*** *An inline style is a snapshot taken at render; a styled component is a function of the theme.*

## <a id="i3"></a>I3 — The framework inspects a theme value and branches on a hex literal

> **TREAT** · *step 4* — one ternary and two hex literals.

```tsx
background: theme.ground === '#ffffff' ? '#f6f7f9' : theme.rule,
```
— [`Code.tsx:25`](../../package/.archive/writing/Code.tsx).

***This breaks [D40](../projection/18-the-theme.md#d40) exactly***, which says *a theme's values are OPAQUE to the framework* and exists **so a consumer may answer `var(--ink)` and get the cascade.** *A theme that answers a custom property makes this branch take the wrong side, silently, and there is a second hardcoded hex on the other side of it.*

## <a id="i4"></a>I4 — A class asks whether it is on a cover by walking up to eight parents looking for a boolean

> **TREAT** · *step 6* — ***it deletes itself*** — `instanceof $Cover` answers the question `isCover` was invented for.

```tsx
get opening(): boolean {
    const section = this.parent as { parent?: unknown } | undefined;
    let at: unknown = section?.parent;
    for (let step = 0; at && step < 8; step++) {
        if ((at as { isCover?: boolean }).isCover) return true;
```
— [`Title.tsx:16-27`](../../package/.archive/writing/Title.tsx).

**Two assumed hops, a magic bound of eight, and a duck-typed flag** — *for a question `instanceof $Cover` answers.* ***[F11 records what the unbounded version of this cost](../projection/19-the-binding.md#f11):*** twenty promises reported as *zero run* rather than as failures, `Worker exited unexpectedly`, **and the identical guard already standing two files away in [`$Denote.document`](../../package/.archive/document/Denote.tsx).**

## <a id="i5"></a>I5 — The framework declares a global module augmentation about somebody else's types

> **TREAT** · *step 2* — ***FORCED FIRST.*** Deleting the augmentation in the same act turns every later missed `p.theme` into a type error rather than a blank page.

```ts
declare module 'styled-components' {
    export interface DefaultTheme extends $Theme {}
}
```
— **`dressing.ts`**, born 2026-08-21.

***Shipped inside the package, so every consumer of `lib` who uses styled-components with their own theme now has a type error.*** **The demonstration is that consumer** — its 30-key design-token object is rejected by its own `ThemeProvider`, which is two of the six errors currently failing its typecheck.

***And the framework still writes `theme={theme as never}` at 25 call sites***, so **the augmentation does not even satisfy its own uses.**

*Measured: **there is no `ThemeProvider` anywhere in the package** and transient `$`-props are already incumbent (`$side`, `$open`). **So the augmentation is doing one job a transient prop does without reaching into anyone else's module.***

---

# Two answers to one question

## <a id="i6"></a>I6 — Every invariant on `$Book` is written twice, in two languages, and one pair has drifted

> **TREAT** · *step 7* — one statement, two readers. **The drifted pair is reconciled in the same edit.**

**[`Book.tsx:203-213`](../../package/src/book/Book.tsx) throws six errors from the bond constructor. [`Book.tsx:304-320`](../../package/src/book/Book.tsx) states the same six as `$valid` calls.** *Same conditions, different sentences.*

***The drift is already visible:*** the constructor says *"A book requires a synopsis OF ITSELF — one whose reference comes home"*; `valid()` says *"and this one accounts only for other books."*

**Two statements of one specification is [the reason a library is edit-first](../../../../.claude/library/library-tree/03-sprints.md), applied to code.**

## <a id="i7"></a>I7 — `title` is answered three ways, and one reimplements half of `canonical` inline

> **TREAT** · *step 7* — the contents delegates to `canonical` instead of copying one of its three clauses.

| class | how |
|---|---|
| `$Cover` | `super.title!` — **delegates** |
| `$Document` | a `$Title` from `this.canonical?.heading` |
| `$TableOfContents` | a `$Title` from `this.$parts.find(s => !s.parenthetical)?.heading` |

**`$Document.canonical` is `find(!parenthetical && summarised) ?? find(!parenthetical) ?? parts()[0]`.** ***The contents copied the second clause and dropped the other two***, so a contents and its document disagree about their own canonical whenever the first clause would have fired.

## <a id="i8"></a>I8 — Two answers to "what document am I in", one bounded and one a bare cast

> **TREAT** · *step 7* — ***`$Section` adopts `$Denote`'s walk***, which was written for exactly this and has been sitting two files away.

```ts
get document(): $Document { return this.parent as $Document; }         // $Section
```
```ts
get document(): $Document {                                            // $Denote
    let scope: unknown = this.parent;
    while (scope && !(scope instanceof $Document)) {
        const parent = (scope as { parent?: unknown }).parent;
        scope = parent === scope ? undefined : parent;                  // the self-parent guard
    }
    if (!scope) throw new Error(`Denote ${this.for}: it stands outside any document.`);
```

***The second is careful, bounded, and throws with a reason. The first is a cast.*** **Same question.** *[F11](../projection/19-the-binding.md#f11) already recorded that not consulting the careful one costs a session, and it is still not consulted.*

## <a id="i9"></a>I9 — `$Book.canonical` and `$Book.ref` are one member under two names

> **TREAT** · *step 7* — **one member, and it says that a book's reference IS its canonical** — a theorem rather than a coincidence.

```ts
get canonical(): $Cover { return this.cover; }
get ref(): $Cover { return this.cover; }
```
— [`Book.tsx:113,144`](../../package/src/book/Book.tsx), thirty lines apart.

***They ARE the same thing*** — [the canonical projection upward is the cover](../the-semantics-of-books/06-the-canonical-echo-and-views.md) — **and that is a theorem the code should state once, not a coincidence it satisfies twice.** *`contents`/`tableOfContents` is [the same fault one member over](03-names.md#n32).*

## <a id="i10"></a>I10 — Two numbering rules for one concept, neither written down

> **LEAVE** · *recorded* — ***both numbering rules are correct — LaTeX does exactly this.*** The missing half was that nothing said so, **and this entry is now where it is said.**

[`$Footnote.number`](../../package/.archive/document/Footnote.tsx) is **occurrence order**. [`$Citation.number`](../../package/.archive/document/Citation.tsx) **sorts keys alphabetically**. ***Both correct — LaTeX does exactly this — and neither says so anywhere a reader would find it.*** **It reads as a bug until you know it is a rule.**

## <a id="i11"></a>I11 — 230 lines of hand-forwarding, in two spellings

> ***SPLIT*** · *step 5 and [D-a](06-the-cleaning.md#owed)* — ***the word-grade forwarding goes at step 5 with [S2](04-semantics.md#s2).*** The reference forms' forwarding is **DESIGN OWED** with [S1](04-semantics.md#s1) — it is the half single inheritance cannot reach.

`where` · `select` · `selectMany` · `single` · `at` · `canonical` · `follow` — **48 calls delegating to `$Composible$` across 8 classes, and 18 identical `then()` bodies.** ***Measured at 230 lines of pure delegation.***

**And the `then()` bodies come in two spellings** — `const Path = $(paths.Path)` in one set, the imported `Path` used directly in the other — *for three identical lines.* **[S1](04-semantics.md#s1) is the cause; this is the size of it.**

---

# Mechanisms that are not obvious

## <a id="i12"></a>I12 — A document calls its own `view()` once and then rewrites its own view method

> ***CORRECTED 2026-08-23 after reading how `$Chemistry` renders.*** *Doug: **"Holy crap you don't know how $Chemistry works. You wrote it."*** **He was right, and the entry was wrong about the mechanism.**
>
> ***`this.$view = …` is not rewriting a method. It is chemistry's own vertical-perspective write-point***, `protected`, documented, and the thing [`look()`](../../../chemistry/.lib/particle/08-perspectives.md) drives:
>
> ```ts
> protected set $view(fn) {
>     this[$activeView$] = fn;
>     this[$viewCache$] = undefined;   // invalidate the rendered output
> }
> ```
>
> **And the render path never calls `view()` directly** — `$lift` calls `[$renderView$]()`, which calls `frame()`, which runs the ACTIVE view. *So setting `$view` to the base's is **rendering this instance at a more general altitude**, which is exactly what the vertical axis is for.*
>
> ***And the harvest is the designed path too.*** **A binding constructor is found by walking the class chain**, so [as the chemistry book states](../../../chemistry/.lib/composition/03-binding-constructor.md): *"a subclass whose writing lives in its `view()` therefore needs no constructor at all — the ancestor's binding constructor binds for it."* **That IS an authored chapter**, and `$Document`'s bond constructor asking it for its parts is the mechanism working.
>
> ***What remains true, and it is smaller than the entry claimed:*** **`view()` still means *declare your parts* at bond time and *draw* at render time**, and nothing in any book says so. **MONITOR**, and the prose is owed.
>
> ### <a id="i12-zero"></a>The measurement that was wrong, and it is the third of its kind
>
> ***This report claimed `lib` "ships no perspectives" — zero occurrences of `perspective`, `reveal`, `look(`.*** **It uses both seams:** [`$Document.$view`](../../package/.archive/document/Document.tsx) is the vertical axis and [`$Link.frame()`](../../package/.archive/reference/Link.tsx) is the wrap seam. **The grep could not have matched either.**
>
> ***Three times now this audit has reported a zero from a pattern that could not find the thing*** — [the orphan](../solutions/24-the-orphan-that-was-not-an-orphan.md), [`$Chemistry`'s exports](07-the-three-codebases.md#c5), and this. **The rule is already filed and was not applied: a negative result is a claim about the instrument until it is a claim about the code.**

```tsx
if (sections.length) this.$view = $Document.prototype.view;
```
— [`Document.tsx:89`](../../package/.archive/document/Document.tsx).

**A subclass's `view()` is called at construction to harvest its sections, and then the instance's active view is swapped to the base's.** ***So `view()` means two different things depending on when it is called***, and an author who writes a chapter as JSX has written a method that runs exactly once and is then replaced.

***It works, it is clever, and it is the least obvious thirteen lines in the package.*** **Nothing in any book explains it.**

## <a id="i13"></a>I13 — A card's fields are decided by reflection over how the class happened to be written

> ***CLOSED 2026-08-23 — the reflection is REQUIRED, and [chapter zero](../projection/00-planning.md) says why:*** **"That mapping CANNOT BE A CLOSED SHAPE, because books have subtypes and subtypes have derived information worth cataloguing… the card is strongly typed where it can be and informally extended in code for the rest, with derived information on subtypes DYNAMICALLY REACHABLE. A card class that had to know every property in advance would be a card for one kind of book, WHICH IS NOT A CATALOGUE."**
>
> ***So a reflective card is the design, not a compromise.*** *What the entry got right is smaller and stays: the heuristic — stop at a prototype owning `properties` or carrying any `$`-prefixed accessor — is a guess about how the class was written, and [`$$Book` reflecting `$Book`'s interface](04-semantics.md#s20) is a better rule than reflecting its prototype chain.*

[`$IndexCard.properties()`](../../package/src/reference/IndexCard.tsx) walks the prototype chain, collects getters that do **not** begin with `$`, and stops when a prototype owns `properties` or carries any `$`-prefixed accessor.

***A card's contents are inferred from an accidental property of the source.*** **Add a computed getter to a card subclass and it silently joins the card's copy.** *This is the least mathematically precise mechanism in the package, and it is on the class that carries a book's identity into the catalogue.*

## <a id="i14"></a>I14 — A catalogue answers a query by parsing a string micro-language

> **TREAT** · *step 9* — the method above it already takes the two halves as parameters.

```ts
find(query: string): $IndexCard<T> {
    const at = query.indexOf(':');
    const key = at < 0 ? query.trim() : query.slice(0, at).trim();
```
— [`CardCatalogue.tsx`](../../package/.archive/reference/CardCatalogue.tsx).

***A colon-separated string split at call time, throwing when it misses*** — **while `file(key, keyword, card)` directly above it takes the two halves as parameters.** *The class knows the shape and asks a caller to spell it.*

## <a id="i15"></a>I15 — Nine `try`/`catch` blocks are load-bearing, and two make an invariant conditional

> ***SPLIT*** · *step 7 and MONITOR* — ***the two that make an invariant conditional are TREATED*** — `$Cover` and `$TableOfContents` state their own specification instead of swallowing their parent's. ***The other seven are MONITORED***, and [F6](../projection/19-the-binding.md#f6) is the standing warning.

[`Book.tsx` ×3](../../package/src/book/Book.tsx) · [`Cover.tsx`](../../package/src/book/Cover.tsx) · [`TableOfContents.tsx`](../../package/src/book/TableOfContents.tsx) · [`Denote.tsx` ×2](../../package/.archive/document/Denote.tsx) · [`Cite.tsx`](../../package/.archive/document/Cite.tsx) · [`Formula.tsx`](../../package/.archive/writing/Formula.tsx)

***`$Cover` and `$TableOfContents` both catch their own parent's constructor and rethrow only sometimes***, to make *"a chapter requires a summary"* apply to them conditionally. **An invariant with a `catch` around it is not an invariant.**

*And this class of act produced [F6](../projection/19-the-binding.md#f6) — **non-monotonic validity**, a book valid or invalid depending on what else the page had loaded, because a `catch` turned an unfollowed reference into a `false`.*

## <a id="i16"></a>I16 — Readings evaluate, and the cache that makes it survivable lives outside the framework

> ***RULED 2026-08-22, and the ruling is larger than the entry.*** *Doug: **"This is radical but perhaps important. What if we put building at the wrong place? We need some building — the words and letters etc… But what if tables of contents don't get BUILT? What if they get SPECIFIED and it's the job of — for instance — the book to throw an error if its table of contents is missing, and then the table of contents' job to throw errors if its form is wrong. I bet this will clean up some really nasty code. And then THE COMPILER is responsible for filling in missing parts of any inferred content that can be inferred… the compiler feels like the right place for such LOWERING."***
>
> ***So the question was wrong. It is not "what may a reading evaluate" — it is WHERE INFERENCE HAPPENS***, and the answer moves it out of the model:
>
> | | builds | specifies and validates | lowers |
> |---|---|---|---|
> | **the parse** — prose into sentences, words, letters | ***yes*** | | |
> | **the model** — a contents, a title, a subtitle, a caption, a reference form | ***no*** | ***yes*** — a book raises if its contents is absent; a contents raises if its form is wrong | |
> | **the compiler** | | | ***yes*** — it fills in every inferable part before the model sees it |
>
> ***What it dissolves rather than fixes:*** **the getters that construct on every read stop constructing**, so there is nothing to cache and [the hand-rolled `WeakMap`](../../package/src/writing/Writing.tsx) goes with them; **[`$TableOfContents.parts()` stops deriving its entries from the book](../../package/src/book/TableOfContents.tsx)**; and *"some really nasty code"* is Doug's own estimate of the size — which matches [I7](#i7), [I9](#i9) and [I12](#i12) all being symptoms of one thing.
>
> ***A design session, not a step of this cleaning.*** **It reshapes the compiler and the model together and it is the largest thing this report has turned up.**
>
> ### <a id="i16-lowering"></a>And lowering is CODE INSERTION, which the compiler already does
>
> *Doug: **"Lowering would be code insertion. The compiler moves files. It should EDIT them. It can CREATE them. It is static analysis. Use the TypeScript compiler tools."***
>
> ***That is not a new capability — it is [`emit.ts`](../../build/stages/emit.ts) doing more of what it already does.*** **The compiler already opens every cover with ts-morph, computes edits from node positions and splices them back to front**, which is how a reference gains its card:
>
> ```ts
> edits.push({ at: open.getEnd() - 1, to: open.getEnd() - 1, text: ` for={${card}}` });
> ```
>
> ***So a contents that fills itself in the model becomes a contents the compiler WRITES OUT***, by the mechanism already in the file. ### <a id="i16-audit"></a>AUDITED — the pipeline Doug described is the pipeline that runs

*He asked for an audit rather than a decision: **"Just imagine that the library is lifted, moved, and then each file is edited, additional files are perhaps added if we need a table of contents that isn't there — though I am not sure we need to add anything, just INSTANTIATE one — and then the files that contain the generated code for books are added too. That's how it should work, so audit whether or not that is happening."***

**Measured against [`emit.ts`](../../build/stages/emit.ts), four for four:**

| he described | it does | where |
|---|---|---|
| **lifted and moved** | every cover, synopsis and chapter is copied into the target | `for (const file of [book.cover, book.synopsis, …book.chapters])` |
| **each file edited** | the cover is rewritten on the way through — references gain their cards, imports that only named a book are removed, silences are filled | `file.role === 'cover' ? rewritten(…) : source` |
| ***a contents INSTANTIATED, not added*** | ***exactly that*** — the generated module writes `<TableOfContents />` and no file is created for it | `assemble()` |
| **the generated book files added** | one `book.tsx` per book, plus `cards.tsx` and `books.tsx` | `put(join(into, book.path, 'book.tsx'), assemble(…))` |

***So nothing needs deciding and my question presupposed something that was never ruled.*** **The phrase "the file its author left" is [the compiler's own comment](../../build/stages/emit.ts) dramatising an incidental fact — that the corpus directory is not written to — as though it were a principle somebody agreed.** *Doug: **"No clue what an author's file is. I never consented to such a thing."*** **The comment goes with [O8's harvest](02-organization.md#o8).**

***What lowering adds is therefore MORE EDITING IN THE MOVED COPY***, by the mechanism already in the file — **not a new target, not a new tool, and not a reversal of anything.**

***[Finding 12 of the member audit, held for "the framework sprint" and still open](../projection/04-the-member-audit.md).***

[`$Section.subtitle`](../../package/src/writing/Section.tsx) · `$Section.tagline` · [`$Document.title`](../../package/.archive/document/Document.tsx) · [`$TableOfContents.title`](../../package/src/book/TableOfContents.tsx) · [`$Figure.caption`](../../package/.archive/writing/Figure.tsx) · **every `ref` getter** — *all construct chemicals inside a getter, on every read.*

**The boundary was never stated:** ***what may a reading evaluate?*** *And the cost is now visible* — [F2's heap exhaustion](../projection/18-the-theme.md#risks), and [a module-level `WeakMap` in `Writing.tsx`](../../package/src/writing/Writing.tsx) **keyed on object identity and invalidated by comparing `of.text`** — ***a hand-rolled memo standing outside the framework's own reactivity, in the framework.***

*[`$Footer.legend`](../../package/.archive/document/Footer.tsx) is the sharper version: it **lazily writes a `$`-prefixed reactive member from inside a getter**, which is the exact shape of [the parse that woke its own parents](../solutions/16-the-parse-that-woke-its-own-parents.md).*

## <a id="i17"></a>I17 — Dead parameters on three signatures

> **TREAT** · *step 1* — three signatures, free, and one of them is a member the last sprint struck from the model.

| | |
|---|---|
| [`shown(theme, of, parts, uniform, page)`](../../package/src/writing/Writing.tsx) | **both call sites pass `0`** — the sprint that struck `page` from the model left it in the one function that would have used it |
| [`$Book.stands(theme)`](../../package/src/book/Book.tsx) | takes a theme and **never reads it** |
| [`$Theme.lay(of, uniform)`](../../package/src/writing/Theme.tsx) | takes `of` and **answers from `uniform` alone** — *the parameter exists for subclasses, and the base signature promises a distinction it never makes* |

---

# In the application

## <a id="i22"></a>I22 — Nothing in `lib` that is not a member should be static, and sixteen things are

> ***RULED 2026-08-23.*** *Doug: **"There should be nothing static in this entire framework — not chemistry, just the `lib` framework — that is not a member. Fix that. Try to minimize the amount of methods you put for viewing, but if you have to, make them PROTECTED if possible. Remember that each thing provides its view, so why can't it figure out how it should be viewed? Maybe each thing handles its own case where everything inside it is parenthetical."***

### Counted

| | where | |
|---|---|---|
| **7 class statics** | [`$Composible$`](../../package/src/writing/Composition.tsx) | `canonical` · `where` · `select` · `selectMany` · `single` · `at` · `follow` — ***every one is a member of the thing it takes as its first argument*** |
| **8 module functions doing a member's work** | `Book` · `Paragraph` · `Section` · `Sentence` · `Writing` | `canonicals(cover)` · `pointed(reference)` · `blocks(prose)` · `reading(of)` · ***`shown(…)`, which is EXPORTED*** |
| ***2 of those 8 are the same function twice*** | [`Paragraph.tsx:24`](../../package/src/writing/Paragraph.tsx) and [`Sentence.tsx:29`](../../package/src/writing/Sentence.tsx) | `written(part)` — **byte-identical, in two files** |
| **1 module-level mutable cache** | [`Writing.tsx:10`](../../package/src/writing/Writing.tsx) | the `WeakMap`, which is [I16](#i16) |
| *~20 regexes* | `Section` · `Sentence` · `Paragraph` | *constants, and outside the ruling — except [`Section.tsx:32`](../../package/src/writing/Section.tsx), where `display` is a **function returning a fresh regex** because a `g` regex carries state* |

***`$Composible$` is the whole of the class-static problem***, and it dissolves the moment [`$Composition` is a class](04-semantics.md#s1) — *a static taking `of` as its first argument is a member with the receiver written out.*

### And the second half of the ruling is about views

> ***"Each thing provides its view, so why can't it figure out how it should be viewed? Maybe each thing handles its own case where everything inside it is parenthetical."***

**So [`matter()`](../../package/src/writing/Paragraph.tsx) does not become a protected member either — it stops existing.** *A paragraph whose parts are all parenthetical draws nothing, and that is one line inside its own `set()`.* ***`uniform()` is the same act one class up.***

### The warning attached to it, which is the part to keep

> ***"You were the one that wanted `$Writing` to be its own class because so much is shared. DON'T FORCE IT if it is creating semantic situations where [things] seem forced."***

***So the answer to a static is not always "move it up."*** **[`written(part)` appearing identically in two files](../../package/src/writing/Paragraph.tsx) looks like a candidate for `$Writing` — and it is a validity test that a paragraph and a sentence happen to share, not something every writing does.** *Sharing it upward would put a member on `$Letter` that means nothing there.* **Where a thing is shared by two siblings and not by the family, it belongs to neither the module nor the base.**

## <a id="i18"></a>I18 — The application scrapes the book's DOM to find where the reader is

> ***OUT OF SCOPE 2026-08-23*** · *the public application* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — the model holds `contents.open`; the application stops reading its own rendering.


## <a id="i19"></a>I19 — The registration is written on the framework's own exported root

> ***OUT OF SCOPE 2026-08-23*** · *the public application* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — the derived-scope form is the documented consumer one and the app has a single composition root.


## <a id="i20"></a>I20 — The application wraps the book in a second copy of the book's own sheet

> ***OUT OF SCOPE 2026-08-23*** · *the public application* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — one of the two sheets goes, and it is the application's.


## <a id="i21"></a>I21 — The compiler counts by position where the model answers

> **TREAT** · *step 1* — ***it is shipping wrong on all seven books.*** One line, and [the defect is filed](../solutions/25-the-card-that-listed-a-chapter-the-contents-did-not.md).

```ts
const own = live.chapters.slice(2, 3 + book.chapters.length);
```
— [`catalogue.ts:39`](../../build/stages/catalogue.ts).

***The defect this produces is [a bug and is filed as one](../solutions/25-the-card-that-listed-a-chapter-the-contents-did-not.md)*** — every card in the corpus lists a chapter its own book's contents excludes.

**What belongs in THIS book is the mechanism rather than the miscount.** *The compiler's own comment states the assumption out loud* — *"the compiler wrote this composition, so it knows its shape"* — **and knowing the shape is precisely what [the compiler's best principle says not to rely on](../../build/stages/resolve.ts):** *what a subject holds is not a list the subject keeps; it falls out of where its books sit, **which is why nothing has to be maintained in two places***.

***A book can be asked what its chapters are. It was counted instead, and the two answers drifted immediately.***
