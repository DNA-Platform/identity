# Working Well By Default

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-24 at the close of [Semantics, Then Drawing](21-semantics-then-drawing.md), which handed into a brainstorm on **the heavy audit of the compiler and the demonstration**. **Status: `implementation-ready` — [all sixteen requirements approved](#-the-next-action) and planned the same day.** The brainstorm ran as an audit with Doug in the room, and every requirement below stands on something measured during it rather than on something read.*

*The title is **Doug's own sentence**, said when he set the sprint: **"We need to audit and clean the compiler code, get something working well by default, and then go from there."** Standing for correction like every proxy on this branch.*

**Identifiers.** Requirements **R140–**, units **U150–**, decisions **D80–**, risks **K9–**. New Condition Report entries are **O16–**, **N35–**, **S24–**, **I30–**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-specification); a deletion leaves a gap.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) — ***this chapter*** → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) — **next** → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

---

# The objective

***Ask the compiler the five questions of Doug's letter it has never been asked, clean what that finds, and make the library the compiler produces good the first time somebody looks at it.***

**Doug's intent, in his own words across this brainstorm:**

> *"We need to audit and clean the compiler code, get something working well by default, and then go from there. So far the default view is atrocious."*
>
> *"I think the synopses are associated with the cover and not the table of contents and the whole thing lacks pagination through chapters."*
>
> *"There shouldn't be the notion of a page. One chapter displays at a time. There should be navigation between chapters — use manifold in the demo as a good example for the network, what clicking where should do approximately."*
>
> *"The base doesn't have to be as fancy but we want it to be like that and extensible."*
>
> *"This is a compiler. Please think in terms of that terminology as much as possible."*
>
> *"Like complaint: that seems like a bad word."*
>
> *"Don't be afraid to break the demo to get the default working, but then we have to fix the demo."*
>
> *"We want to be done with the test library, and move the test code to the demo and have the idea of compiling a dev/test library as soon as possible. Commit locally for now."*

## <a id="what-was-measured"></a>What the brainstorm measured — every requirement stands on one of these

***This section exists because [the audit's own worst finding](20-the-audit.md#part-iv) was four things planned before they were designed.*** **Nothing below is an impression.** *Each row was produced during the brainstorm, on this machine, on this date.*

| | measured | how |
|---|---|---|
| **The site's default view** | `/physics/the-standard-model` renders **188 characters**, then a table of contents of **135**, then the chapter at **6,578** | driven, built artifact, served |
| **The site's payload** | **683 kB on every route**, to draw 39–58 DOM nodes. The whole corpus is **17,240 letters** | resource timing, four routes |
| **The shelf duplicates the contents** | `data-entries=2` on **all five** chapters of `/physics`, including a two-paragraph chapter the shelf is larger than | walked, chapter by chapter |
| **The turning misnames chapters** | `next → Synopsis` leads to a page headed **The Standard Model** | walked |
| **The demo's landing cost is construction** | last byte **351 ms**, first paint **2,412 ms** — **2,061 ms with nothing left to fetch** | navigation + paint timing, built artifact |
| **The demo cannot be built** | minified, `/books` throws `Cannot read properties of undefined (reading 'chapters')`; unminified, **73 nodes, 0 errors, identical to dev** | two builds, both served and driven |
| **`commands/` is outside the typecheck** | `tsc --listFiles` names **14 files and none of the four commands** | `tsc --listFiles` |
| **`see.ts` is broken and reports a contradiction** | 4 type errors; prints `declared` on every row above `0 declaring · 0 supplied · 0 standing for nobody` | compiled directly, then run |
| **A book with no synopsis crashes the compiler** | raw `TypeError` at `emit.ts:224`, **no diagnostic, no book named** | corpus broken in a copy, five ways |
| **A syntax error is misdiagnosed** | reported as *"exports nothing a book can compose"* | same |
| **Any export satisfies the walk** | `export const nothing = 1` produces **0 complaints** | same |
| **The compiler is idempotent in content** | recompile → **empty diff**; git shows 30 modified because the compiler writes **LF into a CRLF repository** | recompile + `git diff` |

---

# The requirements

***Four groups, in the order Doug ruled them.*** **The compiler first, because [the default view is what the compiler produces](#group-3) and cleaning the producer before the product is his own sequence.**

## <a id="group-1"></a>Group 1 — The compiler, asked the other five questions

***Doug: "All of those. And in that order of importance."*** **[The letter asked six things](20-the-audit.md#the-letter-and-what-it-asked-for) and the compiler has been asked one.** *Each requirement below is one of the four he ranked, turned into something that can be seen satisfied.*

### <a id="r140"></a>R140 — The compiler's contact with the framework is typed, and the type is the framework's

***Question 1, and the highest priority he gave.*** **[S21](../the-condition-report/08-the-compiler.md#s21): the compiler's one contact with the framework it compiles for is `any`** — [`catalogue.ts`](../../build/stages/catalogue.ts) casts an imported book to `{ book: any }`, [`validate.ts`](../../build/stages/validate.ts) takes `live: any` and holds a `Map<string, any>`.

**Four members are read off a living book — `contents.chapters`, `title.copy`, `subtitle.copy`, `synopsis.summary` — and not one is checked against the class that answers them.** *`@dna-platform/lib` is already a dependency of `build`; `$Book` is already exported from it.*

> ***OBSERVED:*** **rename `contents` in the framework and the compiler fails to compile**, where today it compiles and starts emitting empty cards. *A promise renames a member in a fixture and asserts a type error, or the check is a `tsc` run that goes red.*

### <a id="r141"></a>R141 — The seam carries what its consumers read, and a consumer is told when it changes

***Question 2.*** **[The seam is the only thing the phases share](../../build/library.ts), so it is the only place their agreement can live** — and it changed without its consumer knowing. **`Link.from` was deliberately deleted; [`see.ts`](../../build/dump.ts) still reads it four times.**

**Two things are required and they are different.** *The first is that the seam's consumers are all inside the typecheck ([O16](#o16)). The second is that the seam can say **not yet computed*** — today `File.declares` is `''` before `refer` fills it, `Entry.references` is `[]`, `Library.books` is `[]`, **and none of those is distinguishable from a genuine empty**, so a stage run out of order returns a plausible wrong answer rather than an error.

> ***OBSERVED:*** **`tsc --listFiles` in `build/` names every module in the package**, and a stage asked for something the pipeline has not filled yet **says so** rather than answering empty. *A promise runs `resolve` on an unreferred library and asserts a failure.*

### <a id="r142"></a>R142 — A wrong corpus produces a diagnostic, never a stack trace

***Question 3, and the brainstorm found three faults in one sitting.*** **[The design is stated in the seam's own words](../../build/library.ts):** *"Complaints TRAVEL rather than stop the walk: one pass tells an author everything that is wrong, because a build that reports one fault at a time is a build somebody runs many times."*

| the fault | what happens today | entry |
|---|---|---|
| **a book with no synopsis** | ***raw `TypeError` at `emit.ts:224`, no diagnostic, no book named*** | <a id="i31"></a>[I31](#i31) |
| **a file that will not parse** | reported as *"exports nothing a book can compose"* — **the wrong cause** | <a id="i32"></a>[I32](#i32) |
| **a chapter exporting anything at all** | ***0 complaints***; `export const nothing = 1` is emitted as `<nothing />` | <a id="i33"></a>[I33](#i33) |

**The root of the first is two non-null assertions in [`resolve.ts`](../../build/stages/resolve.ts) with only one guard behind them** — *[`walk.ts`](../../build/stages/walk.ts) complains about a missing cover and never about a missing synopsis.*

> ***OBSERVED:*** **a corpus broken each of those three ways compiles to a NAMED diagnostic and a non-zero exit, and never to a stack trace.** *Three promises, each breaking a fixture corpus one way. This is the requirement a hand-authored page cannot fake — a stack trace is visibly not a diagnostic.*

### <a id="r143"></a>R143 — The compiler speaks compiler

***Question 4, and Doug ruled the altitude:*** **"Nomenclature isn't too important for the compiler compared to the framework, but we do want it to be extensible and well designed"** · **"This is a compiler. Please think in terms of that terminology as much as possible."**

**Two words are struck by name.**

| struck | why | the compiler's own word |
|---|---|---|
| ***`Complaint`*** | **Doug: "that seems like a bad word"** | ***diagnostic*** — what every compiler calls the thing it reports |
| ***`see`*** | **Doug: "Don't like the same see"** | ***`dump`*** — **taken 2026-08-24.** *It dumps the intermediate representation between passes, which is GCC's `-fdump-tree-*`, Clang's `-ast-dump` and LLVM's `-emit-llvm`; the output is the compiler's internals rather than a report for a reader, and the name should say so* |

**And `CHECK` is filed in `commands/` while being the fourth phase of the compile** ([O14](../the-condition-report/08-the-compiler.md#o14)). *Doug: **"I don't understand what is being asked of me in this. But whatever you are checking, put it in the right place."*** — **so this is not a question returned to him; it is a decision the sprint makes with compiler vocabulary.** *What `check.ts` does — run the emitted artifact in a separate process and confirm it satisfies the specification — is what a **verifier** does, and a verifier running apart from the emitter is the JVM's and the CLR's own arrangement rather than an invention.*

> ***OBSERVED:*** **the struck words appear zero times in `build/`**, measured with a grep whose scope is printed, and **every folder in `build/` holds one kind of thing**, named in that folder's own header.

## <a id="group-2"></a>Group 2 — The compiler, cleaned

***[Eight entries were found by the one reading pass](../the-condition-report/08-the-compiler.md), and its headline holds: not one is a wrong mechanism — every one is a thing said twice.*** **The brainstorm adds two more that the pass could not see, because both live outside what it read.**

### <a id="r144"></a>R144 — Everything in `build/` is inside the compiler's own typecheck

**<a id="o16"></a>O16 — `tsconfig.json`'s `include` is `["*.ts", "tests/*.ts"]`.** *`stages/` and `utilities/` are reached only because `index.ts` imports them; **nothing imports the four commands**, and `check.ts` is spawned by a path string.* **`tsc --listFiles` names fourteen files and none of the commands** — so `npm run test`, which begins `tsc --noEmit`, has been reporting zero over four unchecked modules.

**<a id="i30"></a>I30 — and this is what was hiding there.** *[`see.ts`](../../build/dump.ts) reads `Link.from` at four sites; the field was deleted from the seam, whose own comment says* ***"HOW it was arrived at is deliberately not here."*** **The command runs, prints `declared` on every row, and prints `0 declaring · 0 supplied · 0 standing for nobody` underneath — a report that contradicts itself on one screen.**

> ***OBSERVED:*** **the typecheck's file count is printed with its scope and includes the commands**, the four errors are real and then gone, **and the report's rows and its summary agree.**

### <a id="r145"></a>R145 — One closed set, stated once

**[N34](../the-condition-report/08-the-compiler.md#n34): `'author' | 'subject' | 'canonical'` is the compiler's entire vocabulary of reference and it is written three times in three notations** — a doc comment on a `string` field, and two `Set`s of capitalised strings in two modules — *none of which a compiler can check against another.*

> ***OBSERVED:*** **a fourth kind added in one place fails to compile in the others**, where today it compiles everywhere and works nowhere.

### <a id="r146"></a>R146 — The mechanical duplications go

**[I23](../the-condition-report/08-the-compiler.md#i23)** *`forward` byte-identical in three modules, with the one difference a lie about the difference* · **[I24](../the-condition-report/08-the-compiler.md#i24)** *a path becomes a URL two ways and `node:url` exports the function that handles the drive letter already in play* · **[I27](../the-condition-report/08-the-compiler.md#i27)** *six levels declared twice in one file, so a seventh must be added twice* · **[I25](../the-condition-report/08-the-compiler.md#i25)** *two full traversals of the output to answer one question about it* · **[I26](../the-condition-report/08-the-compiler.md#i26)** *three near-identical link blocks, two of them the same eight lines.*

> ***OBSERVED:*** **each is gone and every gate still green** — *the compiler's suite, walk, build, and `CHECK 7/7`.*

### <a id="r147"></a>R147 — A compile leaves the repository as it found it

**<a id="o17"></a>O17 — the compiler writes LF into a repository that stores CRLF**, *so a recompile that changes nothing marks **thirty files modified**.* **Verified: `git diff` after a clean recompile is EMPTY.** *The compiler is idempotent in content and noisy in the tree, which is exactly backwards — a real regeneration is invisible inside thirty phantom ones.*

> ***OBSERVED:*** ***`git status` is clean after a compile that changed nothing.***

## <a id="group-3"></a>Group 3 — The default view

***Doug: "So far the default view is atrocious."*** **He is right, and it is not a styling problem — [almost nothing is on the page](#what-was-measured).**

### <a id="r148"></a>R148 — The entries live in the table of contents, and nowhere else

***Doug's ruling:*** **"The links to catalogued books belongs in the table of contents."** *And on the mechanism, after being asked:* **"If not in reading then not in the contents. But if the synopsis is placed from a different book, parenthetical should be ignored. Book can set all such synopses to not being parenthetical in the bond constructor if that's the most elegant way."*

**That is what [`$Book()`](../../package/src/book/Book.tsx) already does** — `chapter.parenthetical = !chapter.card || this.accounts(chapter)` — *so a catalogued book's synopsis is already non-parenthetical, already in the reading, and already listed in the contents with an arrow.* ***The redundant thing is `shelf()`.***

**<a id="s24"></a>S24 — `$Book.shelf()` draws the entries beside whatever chapter is standing, on every chapter.** *Measured: `data-entries=2` on all five chapters of `/physics`, including a two-paragraph chapter that **the shelf is larger than**.* **So a catalogue is drawn once in the contents and again under every page of the book.**

> ***OBSERVED:*** **`data-entries` appears zero times on every route**, the contents still lists every catalogued book with its arrow, *and a driver walking every chapter of `/physics` finds the entries exactly once.*

### <a id="r149"></a>R149 — A turning names the chapter it turns to

**<a id="i30b"></a>I36 — [`turning()`](../../package/src/book/Book.tsx) reads `chapter.title?.copy` while the standing chapter renders its card's title**, *so `next → Synopsis` leads to a page headed **The Standard Model**, and two different chapters both offer `next → Synopsis`.*

> ***OBSERVED:*** ***for every chapter of every book, the name in the turning equals the heading on the page it reaches*** — *which is a promise a driver can walk and a hand-authored page cannot fake.*

### <a id="r150"></a>R150 — Navigation is the Manifold's network, at the base

***Doug named the reference:*** **"use manifold in the demo as a good example for the network — what clicking where should do approximately"** · **"you have a cover which presents some organized information, provides a way of navigating when you click anywhere, and then you can move around in the way manifold guides you to do"** · **"The base doesn't have to be as fancy but we want it to be like that and extensible."**

**[The Manifold's network, read off its code](../../.archive/app/src/sections/the-manifold.tsx), and what the framework has of it today:**

| the Manifold does | `$Book` today |
|---|---|
| **a closed cover you click ANYWHERE to open** | ***nothing*** — the cover is inert |
| a running head that steps up one level — chapter → contents, contents → cover | ***has it*** — `head()`, null on the cover |
| **turns at the foot with a FOLIO between them**, previous-from-first returning to the cover | **turns yes, folio no**, and previous-from-first does nothing |
| a contents where every line jumps and carries its tagline | ***has it*** |
| **a return mark when a link jumps you across chapters** | ***nothing*** |
| lenses that redraw the same chapter | *out of scope — it is the demonstration's* |

> ***OBSERVED:*** **a reader lands on `/physics/the-standard-model`, clicks the cover once, and is reading the chapter** — *no near-empty stop in between.* **The folio says where they are.** *A driver asserts the click target exists on the cover and that one click moves the standing chapter.*

### <a id="r151"></a>R151 — CORRECTED · The library being shown carries a lot of writing

***The first version of this requirement was wrong and is recorded rather than replaced silently.*** **It proposed a per-route character floor enforced as validation.** *Doug: **"Near empty page? What are you talking about? This sounds like something I requested about the demo and something you tried to enforce with validation. Yeah when showing this library, write a lot."***

**The correction is the whole lesson: a thin page is not a fault in the framework and cannot be validated into being interesting.** *`/physics/the-standard-model` renders 188 characters because **the corpus has 188 characters there***, and no gate can fix that. **The empty stops between a reader and the writing are [R150](#r150)'s job**, and they disappear by construction there rather than by being counted.

***So what is required is authoring, not enforcement:*** **whatever library is shown carries enough writing that the default view demonstrates the framework rather than a title card.** *And it interacts with [what is not in this sprint](#not-in-this-sprint) — **the test library is being retired**, so writing a lot into it is work that leaves with it. The corpus that gets written is the one that survives.*

> ***OBSERVED:*** ***a person opens the compiled library and reads.*** **No count, and deliberately none** — *[K12](#the-risks) was the objection to a count and this is the answer to it.*

## <a id="group-4"></a>Group 4 — The demonstration

***Doug: "I would like to leave the demo separate and do basic analysis / debugging of performance concerns"*** · **"Don't be afraid to break the demo to get the default working, but then we have to fix the demo."**

### <a id="r152"></a>R152 — The demonstration's landing page paints without constructing a book

**<a id="i35"></a>I35 — the profile, and it settles the question:** *last byte at **351 ms**, first paint at **2,412 ms**.* ***2,061 ms — 85% of the wall clock — with nothing left to fetch.*** **It is not loading. It is five book models being constructed at module scope while [`card.tsx`](../../.archive/app/src/sections/book/library/the-team/card.tsx) reads them at module scope too.**

**The fix chain is forced and its order is the whole of it:** *cards carry literals → `card.tsx` stops importing the books → [`the-books.tsx`](../../.archive/app/src/sections/the-books.tsx) imports them dynamically.* **[The attempt that was tried and reverted](../the-condition-report/09-the-demonstration.md#i29) did step three without step one**, *which is why "requests fell 156 → 84 and every spine vanished."*

> ***OBSERVED:*** ***first paint under a stated budget with zero books constructed***, measured the same way it was measured here, **and every spine still on the shelf.** *This is a stopgap and is written down as one — it drifts, which is [S23](../the-condition-report/09-the-demonstration.md#s23) waiting to happen again, and it ends when the demonstration becomes a compiled library.*

### <a id="r153"></a>R153 — The demonstration can be built

**<a id="i34"></a>I34 — built and served, `/books` throws `Cannot read properties of undefined (reading 'chapters')`.** *Built unminified and served, it is **73 nodes, 1,179 characters, 0 errors — identical to dev.*** **The mechanism is the one already fixed next door: a bond constructor is found by the class's name, and [the sibling application's config carries `esbuild: { keepNames: true }` with a comment naming this exact defect](../../app/vite.config.ts).** *The demonstration's config does not, and nothing ships it, so nobody found out.*

> ***OBSERVED:*** ***the built demonstration draws what the dev server draws***, asserted as a node count and a character count on both, **and the build is a script somebody can run.**

### <a id="r154"></a>R154 — Whatever Group 3 breaks in the demonstration is repaired in this sprint

***Doug's condition, verbatim:*** **"Don't be afraid to break the demo to get the default working, but then we have to fix the demo."**

> ***OBSERVED:*** ***`npm run verify` in the package is green with its checkpoint count stated*** — *92 at the last measurement — and the count is compared to that number rather than to zero.*

### <a id="r155"></a>R155 — The drivers and the server meet without a person remembering

**<a id="o18"></a>O18 — neither vite config sets a port.** *Vite serves **5173**; `verify-demo.mjs` and `verify-book.mjs` default to **5199**, `verify-library.mjs` to **5299**.* **Every document in the library says 5199.** *The only thing bridging them is somebody passing a flag, and [a driver that cannot connect stalls rather than saying so](../solutions/26-the-red-that-exercised-nothing.md).*

> ***OBSERVED:*** **`npm run dev` and `npm run verify` work with no flags and no environment variable**, *and a driver pointed at nothing says so in one line instead of stalling.*

---

# The actors

| | |
|---|---|
| **A1 — the author** | *writes a corpus of chapters and covers, and needs a wrong one to be told what is wrong rather than shown a stack trace* |
| **A2 — the reader** | *arrives at a route holding nothing, and needs the writing rather than a title card* |
| **A3 — the implementer** | *extends the compiler with a fifth kind of reference, or a seventh level, and needs one place to say it* |
| **A4 — the maintainer** | *runs the gates and needs a number that has a scope attached to it* |

# The flows

| | |
|---|---|
| **F1 — a corpus is compiled** | *walk → refer → resolve → emit → verify, and a fault at any point is a named diagnostic that travels* |
| **F2 — a reader opens a book** | *cover → one click → the writing, with a folio saying where they are and a turn saying where next* |
| **F3 — a reader follows a catalogue** | *the contents lists the catalogued books with arrows; following one is a navigation and opens nothing else* |
| **F4 — the demonstration is opened** | *the shelf paints its spines before any book is constructed* |

# Acceptance examples

| | |
|---|---|
| **AE1** | *A corpus whose book has no synopsis compiles to `INVALID <path> — a book with no synopsis` and exits non-zero. **No stack trace.*** |
| **AE2** | *A corpus with a malformed chapter says the file would not parse, and names the file.* |
| **AE3** | *`export const nothing = 1` in a chapter fails before it reaches the emitter.* |
| **AE4** | *`/physics` is walked chapter by chapter and `data-entries` is absent from every one.* |
| **AE5** | *For every chapter of every book, `turning`'s forward label equals the heading of the page it reaches.* |
| **AE6** | *`/physics/the-standard-model` → click the cover → the 6,578-character chapter is on screen.* |
| **AE7** | *The demonstration's `/books` paints with zero book modules requested, and five spines standing.* |
| **AE8** | *The built demonstration and the dev demonstration report the same node count on `/books`.* |
| **AE9** | *A clean recompile leaves `git status` empty.* |
| **AE10** | *`tsc --listFiles` in `build/` names all four commands.* |

---

# <a id="not-in-this-sprint"></a>What is NOT in this sprint

| | why |
|---|---|
| ***Compiling the demonstration as a library*** | **Doug: "We do want to ultimately turn the demo into an alternate library. But I want to get the base styling down first because otherwise we aren't sure what the demo needs to be built on."** *R152 is explicitly the stopgap until then.* |
| ***Retiring the test library*** | **Doug: "We want to be done with the test library, and move the test code to the demo… as soon as possible."** *Named as the direction; nothing here may block it.* |
| ***Tracking the corpus, or compiling in CI*** | ***Doug: "This doesn't matter. We don't want to deploy this… Commit locally for now."*** |
| **The 683 kB payload** | *measured and filed. The site is **fast** — 273–583 ms — so this is a size finding rather than a speed one, and no requirement rests on it* |
| **`$Chemistry` the package** | ***ruled out three times*** — [see the standing box](21-semantics-then-drawing.md#the-rest-of-the-audit) |
| **The nine entries scoped out to the application and the Lab** | *identifiers kept, [routed in the ledger](../the-condition-report/06-the-cleaning.md#the-rest)* |

# The risks

| | |
|---|---|
| **K9** | ***Deleting `shelf()` may leave a subject with no visible entries anywhere*** if the contents' arrow rendering depends on something the shelf was doing. **Watch the contents go red first.** |
| **K10** | ***The demonstration's fix chain has a forced order*** and doing step three first has already failed once, visibly — every spine vanished. **Literals before dynamic imports, and measure between.** |
| **K11** | ***Renaming `Complaint` touches the seam***, which is what every stage reads. *A blanket rename [has bitten twice on this branch](21-semantics-then-drawing.md#wrong-turns-already-taken).* |
| **K12** | ***FIRED, at the brainstorm, before anything was built.*** *It warned that a character floor is a count, and [every gate this branch runs is a count that was green while everything was wrong](../the-condition-report/01-how-to-read-this.md#why-no-gate).* **Doug struck the floor in the same breath** — *"this sounds like something you tried to enforce with validation"* — **and [R151 is rewritten](#r151).** ***A risk that fires during the brainstorm is the cheapest one this branch has ever had.*** |

---

# <a id="the-measurement"></a>THE MEASUREMENT — taken before the work was divided

***[The Build's specification](../../../../.claude/library/our-skillset/29-ce-plan.md#a-dispatch-is-checked-against-the-size-of-the-work): a plan that has not measured the work is asserting something about work it never looked at.*** **Sixteen requirements reads large. Measured, it is about eight files.**

| | measured | what it means |
|---|---|---|
| **`shelf` in `package/src`** | ***7 references across 2 files*** | **[R148](#r148) is a deletion, not a refactor** |
| **`turning` · `stands()` · `head()`** | ***every one in `Book.tsx`*** | **[R149](#r149) and [R150](#r150) are ONE FILE** |
| **`Complaint`** | 10 type sites, 41 lowercase — **~51 across 6 files** | [R143](#r143) is wide and shallow; **[K11](#the-risks) governs it** |
| **`$Book` in `lib`'s `dist`** | ***`contents` · `title` · `subtitle` · `chapters` · `synopsis.summary` all typed*** | **[R140](#r140) is reachable today** — it is a cast, not a design |
| **the demo's literals** | **4 taglines + 26 chapter titles**, one file | [R152](#r152) is thirty strings |
| **the missing guard** | `walk.ts` holds 5 complaint sites | *the synopsis diagnostic is a **sixth line*** |
| **`see.ts` · `check.ts` references** | 17 and 19, mostly documentation | [R143](#r143)'s renames reach the library, not just the code |

> ***THE EFFICIENCY RULING, which is Doug's ask turned into a rule for this plan:*** **units are organized BY FILE wherever the requirements permit, so no file is opened twice.** *Three requirements land in one edit of the seam; three land in one edit of `Book.tsx`.*

# The decisions

### <a id="d80"></a>D80 — The typecheck scope goes first, and the position is FORCED

**[R144](#r144) is not the smallest unit, it is the ENABLING one.** *Until `commands/` is inside `tsc`, every later change to the seam can break a consumer silently — which is [exactly what already happened to `see.ts`](#i30).* **Chosen over doing it last with the other cleanup**, *and the precedent is [the transient prop in Semantics, Then Drawing](21-semantics-then-drawing.md), where deleting the global augmentation first turned every later miss into a type error instead of a blank page.*

### <a id="d81"></a>D81 — The seam is edited ONCE, carrying three requirements

**[R141](#r141)'s honesty, [R143](#r143)'s `Diagnostic`, and [R145](#r145)'s union all live in [`library.ts`](../../build/library.ts).** *Done separately that is three passes over every stage.* ***Chosen over three tidy commits*** — **[K11](#the-risks) says a blanket rename has bitten twice on this branch**, *and the mitigation is one rename with the typecheck from [D80](#d80) already standing, not three.*

### <a id="d82"></a>D82 — "Not yet computed" is said per FIELD, never per phase — the seam keeps having no tense

***This one is friction, and the friction is the design speaking.*** **[The seam's own comment fails what [R141](#r141) asks for](../../build/library.ts):** *"THE ONE SEAM, and every stage both takes it and returns it. There is no second, narrower seam and therefore no tense to name."*

**So the mechanism does not add a tense.** *It makes the FIELDS honest:* **`File.declares` becomes optional, so `undefined` is *not read yet* and `''` is *read, and exports nothing*** — *two states that are one state today.* **Same for `Entry.references` and `Library.books`.**

***Chosen over a discriminated `Read | Referred | Resolved` union***, **which is the narrower seam the comment forbids** — *and which would have been the obvious move if nobody had read the comment.*

### <a id="d83"></a>D83 — The compiler's words are the compiler industry's, and none is invented

***Doug: "This is a compiler. Please think in terms of that terminology as much as possible."*** **Three words, all standing, all flagged as proxies — and the point of each is that it is NOT ours:**

| was | is | precedent |
|---|---|---|
| ***`Complaint`*** | ***`Diagnostic`*** | **what every compiler calls the thing it reports.** *Doug: "complaint: that seems like a bad word"* |
| ***`see`*** | ***`dump`*** | **GCC `-fdump-tree-*` · Clang `-ast-dump` · LLVM `-emit-llvm`.** *It dumps the intermediate representation between passes; the name should say the output is the compiler's internals rather than a reader's report* |
| ***`check`*** | ***the verifier*** | **the JVM and the CLR both verify emitted code in a context that did not emit it** — *which is [the exact reason `check.ts` is a spawn](../../build/index.ts), so the name and the mechanism finally agree* |

### <a id="d84"></a>D84 — The default view is one file, and the deletion comes first inside it

**[R148](#r148) deletes `shelf()`, [R149](#r149) repairs `turning()`, [R150](#r150) adds the cover click and the folio — all in [`Book.tsx`](../../package/src/book/Book.tsx).** ***The deletion goes first*** *because it removes a whole rendering path, and repairing a turning that sits under a shelf nobody will keep is work done twice.* **[`Synopsis.tsx`](../../package/src/book/Synopsis.tsx) is touched only where the entry draws**, *and only if the deletion leaves it drawing something no caller wants.*

### <a id="d85"></a>D85 — The demo's literals are GENERATED ONCE by a script that is kept

**[R152](#r152) needs 4 taglines and 26 chapter titles that today are read off living books.** *Typing them by hand is thirty chances to be wrong and no way to notice.* ***So a small script reads the books once and prints the card declarations, its output is pasted, and the script stays in the demo*** — **so regenerating is one command until [the demonstration becomes a compiled library](#not-in-this-sprint) and the real compiler takes the job.**

*Chosen over hand-typing (silent drift from minute one) and over doing the full compilation now (**[explicitly out of scope](#not-in-this-sprint)** — Doug wants the base styling settled first). **The script is the seam between the stopgap and the real answer**, and it is deliberately shaped like what `catalogue.ts` already does.*

### <a id="d86"></a>D86 — `R154` is scheduled AFTER the default view, and its size is deliberately unknown

***The one place this plan fails to estimate.*** **[R154](#r154) repairs whatever [Group 3](#group-3) breaks in the demonstration, and what that is cannot be known before Group 3 runs.** *Doug authorised the breakage — "Don't be afraid to break the demo to get the default working, but then we have to fix the demo" — so the unit exists, is owned, and is sized when it can be.* **Naming it now with a guessed size would be [the fault this branch files most](21-semantics-then-drawing.md).**

# The units

***Sixteen units. Every one names its mechanism and what will be VISIBLE when it is done.*** **Identifiers begin at U150; [none is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-specification).**

## Phase 1 — the gate

### <a id="u150"></a>U150 · `R144` · **The compiler's typecheck covers the compiler** — FORCED FIRST

**Mechanism:** *`build/tsconfig.json`'s `include` widens from `["*.ts", "tests/*.ts"]` to reach every folder.* **Files:** `build/tsconfig.json`. **Depends on:** nothing.

> ***VISIBLE:*** **`tsc --noEmit` goes RED with the four `Link.from` errors, and is watched going red before anything is fixed.** *A number that was 0 over 14 files becomes 4 over 18 — [which is the only way to know a gate ever had a scope](../solutions/14-the-green-that-exercised-nothing.md).*

## Phase 2 — the seam, in one act

### <a id="u151"></a>U151 · `R141` `R143` `R145` · **The seam says three things it could not say**

**Mechanism:** *one edit to [`library.ts`](../../build/library.ts) —* **`Complaint` → `Diagnostic`** ([D83](#d83)); **`Reference.as` becomes a union of the three kinds** it is a doc comment about today; **`File.declares`, `Entry.references` and `Library.books` become able to say *not yet computed*** per [D82](#d82). **Files:** `build/library.ts`. **Depends on:** [U150](#u150).

> ***VISIBLE:*** **the seam compiles and every stage goes red at once**, *which is the point — [K11](#the-risks)'s mitigation is that the breakage is total and immediate rather than partial and silent.*

### <a id="u152"></a>U152 · `R141` `R143` `R145` · **Every stage meets the new seam**

**Mechanism:** *`tsc` drives it.* **The two capitalised `kinds` sets are derived from the union rather than restated** ([N34](../the-condition-report/08-the-compiler.md#n34)); *`complaint`/`complaints` become `diagnostic`/`diagnostics` at ~41 sites;* **the optional fields are read as optional.** **Files:** `walk.ts` `refer.ts` `resolve.ts` `emit.ts` `validate.ts` `index.ts`. **Depends on:** [U151](#u151).

> ***VISIBLE:*** ***`Complaint` appears zero times in `build/`, measured with a grep whose scope is printed***, and the compiler's whole suite is green — 43 unit, walk 29, build 37, `CHECK 7/7`.

## Phase 3 — the compiler's own faults

### <a id="u153"></a>U153 · `R143` `R144` · **`see` becomes `dump`, and it stops contradicting itself**

**Mechanism:** *the file is repaired and renamed in one act, because [D80](#d80) put it inside the typecheck and it is being opened anyway.* **The four `Link.from` reads go**; *what replaces them is what the seam can actually answer — [`Link` carries `book` and `display`](../../build/library.ts) and nothing about how it was arrived at.* **Files:** `build/commands/see.ts` → `dump.ts`, `build/package.json`, and the ~17 references in the library. **Depends on:** [U152](#u152).

> ***VISIBLE:*** ***`npm run dump` prints rows and a summary that agree*** — **where today seven books print `declared` three times each above `0 declaring · 0 supplied · 0 standing for nobody`.** *A hand-authored page cannot fake this: the contradiction is on screen and then it is not.*

### <a id="u154"></a>U154 · `R143` · **`CHECK` is named for what it is and filed where it belongs**

**Mechanism:** *[`check.ts`](../../build/verify.ts) is the entry point for [`stages/validate.ts`](../../build/stages/validate.ts), spawned because emitting rewrites the files it imported.* **It becomes the verifier, filed with its stage**, and *the folder header that already states the taxonomy is corrected to describe every file in it.* **Files:** `build/commands/check.ts`, `build/index.ts`, `build/package.json`, ~19 references. **Depends on:** [U150](#u150).

> ***VISIBLE:*** ***every folder in `build/` holds one kind of thing***, and the header in each says which — *including the one file [that header does not describe today](../the-condition-report/08-the-compiler.md#o14).*

### <a id="u155"></a>U155 · `R142` · **A wrong corpus produces a diagnostic** — the three fault classes

**Mechanism:** *three separate faults with three separate causes, and the measurement for each is [in the brainstorm](#what-was-measured).*

| fault | mechanism |
|---|---|
| **no synopsis → raw `TypeError`** | ***[`walk.ts`](../../build/stages/walk.ts) gains a sixth diagnostic beside its cover check***, and [`resolve.ts:47-48`](../../build/stages/resolve.ts)'s two non-null assertions stop being the only thing holding it up |
| **syntax error → wrong cause** | **[`refer.ts`](../../build/stages/refer.ts) asks whether the file PARSED before asking what it exports** — *ts-morph knows; nothing currently asks* |
| **any export passes** | *`declaredBy` accepts `export const nothing = 1`.* **The check becomes what its own diagnostic already claims** — *something a book can compose* |

**Files:** `build/stages/walk.ts` `refer.ts` `resolve.ts`. **Depends on:** [U152](#u152).

> ***VISIBLE:*** ***three corpora, each broken one way, each producing a NAMED diagnostic and a non-zero exit.*** **This is the sprint's unfakeable unit** — *a stack trace is visibly not a diagnostic, and [all three were reproduced during the brainstorm](#what-was-measured) so the red is already known to be real.*

### <a id="u156"></a>U156 · `R140` · **The compiler's contact with the framework is `$Book`**

**Mechanism:** *[`catalogue.ts`](../../build/stages/catalogue.ts)'s `{ book: any }` becomes `{ book: $Book }`; [`validate.ts`](../../build/stages/validate.ts)'s `live: any` and `Map<string, any>` take the class.* ***Measured as reachable***: every member the compiler reads is typed in `lib`'s `dist`. **Files:** `build/stages/catalogue.ts` `validate.ts`. **Depends on:** [U152](#u152).

> ***VISIBLE:*** ***rename `contents` in the framework and the compiler fails to compile*** — **where today it compiles and emits empty cards.** *Demonstrated by doing it, watching red, and putting it back.*

### <a id="u157"></a>U157 · `R146` · **The five mechanical duplications**

**Mechanism:** *[I23](../the-condition-report/08-the-compiler.md#i23) one exported `forward` · [I24](../the-condition-report/08-the-compiler.md#i24) `pathToFileURL` from `node:url` in one place · [I27](../the-condition-report/08-the-compiler.md#i27) the levels array declares the type · [I25](../the-condition-report/08-the-compiler.md#i25) one walk of the output with two callers · [I26](../the-condition-report/08-the-compiler.md#i26) one function over the link names, which is [U151](#u151)'s union arriving with something to do.* **Files:** `walk.ts` `refer.ts` `emit.ts` `validate.ts` `catalogue.ts` `utilities/`. **Depends on:** [U152](#u152).

> ***VISIBLE:*** **every gate still green, and the compiler shorter.** *A line count stated before and after.*

### <a id="u158"></a>U158 · `R147` · **A compile leaves the repository as it found it**

**Mechanism:** *the compiler writes LF into a CRLF repository, so an idempotent compile marks thirty files modified — **verified, `git diff` is empty**.* **Files:** the emitter's write, or `.gitattributes`. **Depends on:** [U152](#u152).

> ***VISIBLE:*** ***`git status` is empty after a compile that changed nothing***, so the next real regeneration is visible instead of hidden among thirty phantoms.

## Phase 4 — the default view, in one file

### <a id="u159"></a>U159 · `R148` · **`shelf()` is deleted** — the entries live in the contents alone

**Mechanism:** *[Doug's ruling](#r148): the links to catalogued books belong in the table of contents, which [already lists them with an arrow](../../package/src/book/TableOfContents.tsx).* **`$Book.shelf()`, `$Book.$shelf` and the `Shelf` styled component go.** *Measured: 7 references, 2 files.* **Files:** `package/src/book/Book.tsx`, `Synopsis.tsx`. **Depends on:** nothing — **and it is scheduled first inside its file** per [D84](#d84).

> ***VISIBLE:*** ***`data-entries` appears zero times on every route***, the contents still lists every catalogued book with its arrow, **and a two-paragraph chapter is no longer smaller than the catalogue hanging under it.**

### <a id="u160"></a>U160 · `R149` · **A turning names the chapter it reaches**

**Mechanism:** *`turning()` reads `chapter.title?.copy` while the standing chapter draws its card's title, so `next → Synopsis` leads to a page headed **The Standard Model**.* **The turning asks the chapter what a reader will see**, *which is what [`$$Synopsis.copy`](../../package/src/book/Synopsis.tsx) already answers for the contents.* **Files:** `package/src/book/Book.tsx`. **Depends on:** [U159](#u159).

> ***VISIBLE:*** ***for every chapter of every book, the forward label equals the heading of the page it reaches*** — **walked by a driver, and today it fails on `/physics` at two chapters out of five.**

### <a id="u161"></a>U161 · `R150` · **The cover opens on a click, and a folio says where you are**

**Mechanism:** *[the Manifold's network at the base](#r150) — a cover you click anywhere, a folio between the turns, previous-from-first returning to the cover.* **All three are members a book can override**, *which is the extensibility Doug asked for: "the base doesn't have to be as fancy but we want it to be like that and extensible."* **Files:** `package/src/book/Book.tsx` `Cover.tsx`. **Depends on:** [U160](#u160).

> ***VISIBLE:*** ***a reader lands on `/physics/the-standard-model`, clicks once, and is reading the 6,578-character chapter*** — **where today that takes two clicks through 188 characters and then 135.**

### <a id="u162"></a>U162 · `R151` · **DESIGN OWED — what corpus gets the writing**

***Not a unit, and marked so deliberately.*** **[R151 was corrected at the brainstorm](#r151): a thin page is the corpus being thin, and no gate can fix it.** *Doug: "when showing this library, write a lot."* ***But the test library is being retired***, so **which corpus receives the writing is not decided, and writing it into the wrong one is work that leaves with it.**

> **No files. No scenarios. No dependencies.** *Its identifier is kept and its body says what must be settled: [the corpus question](#not-in-this-sprint), which is Doug's and is deliberately downstream of the base styling.*

## Phase 5 — the demonstration

### <a id="u163"></a>U163 · `R152` · **The cards carry their own text**

**Mechanism:** *[D85](#d85) — a script reads the four books once and prints their card declarations; the output is pasted into [`card.tsx`](../../.archive/app/src/sections/book/library/the-team/card.tsx); the script is kept.* **4 taglines, 26 chapter titles.** *`line(book)` and `titles(book)` go, and `of` becomes a loader — which is what `The Team`'s card in that same file already does.* **Files:** `package/app/src/sections/book/library/the-team/card.tsx`, one new script. **Depends on:** nothing.

> ***VISIBLE:*** ***five spines on the shelf with zero book modules requested***, **and the profile taken the same way it was taken here** — *first paint against a last-byte of 351 ms, rather than 2,412 ms against it.*

### <a id="u164"></a>U164 · `R152` · **The books arrive dynamically**

**Mechanism:** *[`the-books.tsx`](../../.archive/app/src/sections/the-books.tsx)'s four static imports become dynamic, **which [U163](#u163) is what makes possible**.* **[The attempt recorded in that file did this step without the previous one](../the-condition-report/09-the-demonstration.md#i29)** — *requests fell 156 → 84 and every spine vanished.* **Files:** `package/app/src/sections/the-books.tsx`. **Depends on:** [U163](#u163) — ***and the order is [K10](#the-risks), which has already fired once.***

> ***VISIBLE:*** **request count on `/books` measured before and after, and the spines still standing** — *the exact pairing the reverted attempt failed.*

### <a id="u165"></a>U165 · `R153` · **The demonstration can be built**

**Mechanism:** *[the sibling application's config carries `esbuild: { keepNames: true }` with a comment naming this defect](../../app/vite.config.ts); the demonstration's does not.* **A build script is added so the thing can be run at all.** **Files:** `package/app/vite.config.ts`, `package/package.json`. **Depends on:** nothing.

> ***VISIBLE:*** ***the built demonstration draws what the dev server draws*** — **73 nodes and 0 errors, against today's `Cannot read properties of undefined (reading 'chapters')`.** *Both sides already measured.*

### <a id="u166"></a>U166 · `R155` · **The drivers and the server meet with no flag**

**Mechanism:** *neither vite config sets a port; the three drivers default to 5199 and 5299 and vite serves 5173.* **The configs name the ports the drivers already expect**, *and a driver that cannot connect says so in one line rather than [stalling](../solutions/26-the-red-that-exercised-nothing.md).* **Files:** `package/app/vite.config.ts`, `app/vite.config.ts`, the three drivers. **Depends on:** [U165](#u165) — *same file.*

> ***VISIBLE:*** ***`npm run dev` then `npm run verify`, no flags, no environment variable***, and a driver pointed at a dead port naming the port.

### <a id="u167"></a>U167 · `R154` · **The demonstration is repaired** — size deliberately unknown

**Mechanism:** *[D86](#d86) — what [Phase 4](#u159) breaks cannot be known before Phase 4 runs.* **Doug authorised the breakage and required the repair in the same sentence.** **Files:** unknown, in `package/app/src`. **Depends on:** [U161](#u161).

> ***VISIBLE:*** ***`npm run verify` green with its checkpoint count stated*** — **92 at the last measurement, compared to that number rather than to zero.**

# The test scenarios

| | unit | scenario | covers |
|---|---|---|---|
| **T1** | [U150](#u150) | *`tsc --listFiles` in `build/` names all four commands* | **AE10** |
| **T2** | [U153](#u153) | *`dump` on the corpus: every row's mark and the summary's counts agree* | — |
| **T3** | [U155](#u155) | *a corpus whose book has no synopsis → named diagnostic, non-zero exit, **no stack trace*** | **AE1** |
| **T4** | [U155](#u155) | *a corpus with a malformed chapter → the diagnostic says the file would not parse, and names it* | **AE2** |
| **T5** | [U155](#u155) | *`export const nothing = 1` → failed before the emitter* | **AE3** |
| **T6** | [U156](#u156) | *a fixture renaming `contents` on a `$Book` → a type error* | — |
| **T7** | [U151](#u151) | *a fourth reference kind added in one place fails to compile in the others* | — |
| **T8** | [U151](#u151) | *`resolve` on an unreferred library fails rather than answering empty* | — |
| **T9** | [U159](#u159) | *every chapter of `/physics` walked; `data-entries` absent from all of them* | **AE4** |
| **T10** | [U160](#u160) | *every chapter of every book: forward label = heading of the page reached* | **AE5** |
| **T11** | [U161](#u161) | *`/physics/the-standard-model` → one click on the cover → the chapter is on screen* | **AE6** |
| **T12** | [U163](#u163) `U164` | *`/books` paints five spines with zero book modules requested* | **AE7** |
| **T13** | [U165](#u165) | *built and dev demonstrations report the same node count on `/books`* | **AE8** |
| **T14** | [U158](#u158) | *a clean recompile leaves `git status` empty* | **AE9** |
| **T15** | [U167](#u167) | *`npm run verify` — checkpoint count stated and compared to 92* | — |
| **T16** | [U166](#u166) | *a driver pointed at a dead port names the port instead of stalling* | — |

# Origin tracing

## Every requirement lands somewhere

| | lands in |
|---|---|
| **R140** | [U156](#u156) · T6 |
| **R141** | [U151](#u151) [U152](#u152) — *and its typecheck half is [U150](#u150)* · T8 |
| **R142** | [U155](#u155) · T3 T4 T5 |
| **R143** | [U151](#u151) [U152](#u152) [U153](#u153) [U154](#u154) |
| **R144** | [U150](#u150) [U153](#u153) · T1 T2 |
| **R145** | [U151](#u151) [U152](#u152) · T7 |
| **R146** | [U157](#u157) |
| **R147** | [U158](#u158) · T14 |
| **R148** | [U159](#u159) · T9 |
| **R149** | [U160](#u160) · T10 |
| **R150** | [U161](#u161) · T11 |
| **R151** | ***[U162](#u162) — DESIGN OWED, and it is marked rather than pretended*** |
| **R152** | [U163](#u163) [U164](#u164) · T12 |
| **R153** | [U165](#u165) · T13 |
| **R154** | [U167](#u167) · T15 |
| **R155** | [U166](#u166) · T16 |

## Every unit cites back

***Every unit above carries its requirement in its heading and its visible end in its own line.*** **[U162](#u162) is the exception and it is [marked design owed](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure)** — *denied files, scenarios and dependencies, so it cannot be mistaken for buildable work.*

## And what has no unit, deliberately

**The 683 kB payload** — *measured, filed, no requirement rests on it.* **The nine entries scoped out to the application and the Lab** — *identifiers kept.* **Compiling the demonstration** and **retiring the test library** — *[both named as the direction and both out of scope](#not-in-this-sprint), and nothing in this plan may block either.*

# The plan checked against itself

| | |
|---|---|
| ***The thinnest section is [U167](#u167)*** | **and that is deliberate — [D86](#d86).** *It is the one place the plan fails to guess, because its input is Phase 4's output* |
| ***The riskiest is [U151](#u151)*** | **one edit that breaks every stage at once.** *[K11](#the-risks) says a blanket rename has bitten twice; the mitigation is that [U150](#u150) stands first, so the breakage is a typecheck rather than a runtime* |
| ***The one that must not be reordered is [U163](#u163) → [U164](#u164)*** | **[K10](#the-risks) has already fired once, visibly** — *every spine vanished* |
| ***The one that proves the sprint*** | **[U155](#u155).** *A stack trace is visibly not a diagnostic, and all three faults were reproduced during the brainstorm, so the red is known real before a line is written* |

---

# <a id="the-ledger"></a>THE LEDGER — the work as it ran

***Sixteen of eighteen units built and verified on 2026-08-24.*** **[U162](#u162) is [design owed](#u162) and was never a unit; [U167](#u167) is done.** *Every number below was read off a fresh run in the same sitting.*

## What landed

| unit | | evidence |
|---|---|---|
| **[U150](#u150)** | the compiler's typecheck covers the compiler | ***watched RED first*** — 14 files → **18**, and the 4 hidden errors appeared |
| **[U151](#u151)** | the seam says three things it could not | **50 errors at once across 11 files** — a typecheck, not a runtime, which was [K11](#the-risks)'s whole mitigation |
| **[U152](#u152)** | every stage meets it | `Complaint` **zero** in `build/`; both capitalised `kinds` sets derived from one list |
| **[U153](#u153)** | `see` → `dump`, and it stops lying | ***17 links = 13 pointing + 4 standing for a name*** — rows and summary agree, where seven books printed `declared` above `0 declaring` |
| **[U154](#u154)** | the verifier, filed where it belongs | `commands/` **dissolved**; root holds the entry points, `stages/` the passes, `tests/` the gates |
| **[U155](#u155)** | ***a wrong corpus produces a diagnostic*** | **three corpora broken three ways → three NAMED diagnostics, exit code 1, no stack trace.** *This is the unit that proves the sprint* |
| **[U156](#u156)** | the framework contact is `$Book` | ***`Property 'contentss' does not exist on type '$Book'. Did you mean 'contents'?'`*** — demonstrated by breaking it |
| **[U157](#u157)** | five duplications gone | I23 I24 I25 I26 I27 · **code 1,310 lines**, gates identical |
| **[U158](#u158)** | a compile leaves the tree as it found it | **29 phantom modifications → 0.** *`git diff` was already empty; `.gitattributes` declares what the compiler writes* |
| **[U159](#u159)** | `shelf()` deleted | ***`data-entries` = 0 on every chapter of `/physics`***, where it was 2 on all five |
| **[U160](#u160)** | a turning names what it reaches | `next → The Standard Model` · `next → Gauge Theory` — **three of five labels were wrong** |
| **[U161](#u161)** | the cover is a door, and there is a folio | **one click moves the standing chapter; the folio reads 0 → 1** |
| **[U163](#u163)** | the cards carry their own text | **6/6 promises** that each literal equals its living book's own answer |
| **[U164](#u164)** | the books arrive through doors | ***shelf chunk 284 kB → 74 kB*** · **and every spine still standing**, which the reverted attempt could not do |
| **[U165](#u165)** | the demonstration can be built | ***73 nodes, 0 errors, minified*** — where it threw `Cannot read properties of undefined (reading 'chapters')` |
| **[U166](#u166)** | drivers and server meet with no flag | **`npm run dev` serves 5199, `npm run verify` connects** |
| **[U167](#u167)** | the demonstration repaired | ***92 checkpoints, exit 0*** — the baseline exactly |

## <a id="the-numbers"></a>The demonstration's landing page, measured on both sides

| | before | after |
|---|---|---|
| **to visible** (built, minified) | ***3,520 ms*** | ***1,638 ms*** |
| **first paint** | 2,412 ms | ***1,472 ms*** |
| ***construction after the last byte*** | ***2,061 ms*** | ***1,028 ms*** |
| transferred | 2,006 kB | ***781 kB*** |
| the shelf's chunk | 284 kB · 75.5 kB gz | ***74 kB · 21.2 kB gz*** |
| spines drawn | 5 | ***5*** |

***The remaining second is The Team's book and the shelf's, both still eager*** — *The Team because its card is completed BY its book rather than carrying its own line.*

## <a id="the-one-offs"></a>THE ONE-OFFS — added in the room, and one correction I owe

***Doug added these while the sprint ran.*** **They are recorded here rather than in a second document, because [a sprint that spawns a second file has split its own record](../../../../.claude/library/library-tree/03-sprints.md#what-a-projection-book-contains--the-schema).**

| | | |
|---|---|---|
| **the `library/` folder** | ***"Remove the library folder and put CardCatalogue in reference"*** | **done** — `package/src/library/` held one class; it is `reference/CardCatalogue.tsx` now, and `tests/library/` moved with it |
| **its comments** | ***"Move the code comments out of the file and into the library branch"*** | **stripped to zero** — *and [the 362 lines sprint 19 harvested are still owed a home](19-the-binding.md#f10), so this one's commentary is owed with them* |
| **the card** | ***"a CardCatalogue was supposed to be a catalogue of `$IndexCard`s`<T>` and `$$Book` was supposed to be an `$IndexCard<$Book>`"*** | **done** — `$IndexCard<T>` is a class in `reference/`, `$$Book extends $IndexCard<$Book>`, and **identity, filing and AUTHORSHIP moved onto the card**, because those are facts about a card in a catalogue rather than about a book |
| **the default** | ***"No, book is not the default. Create a `$CardCatalogue<$Book>`"*** | **done** — generic over what it catalogues, holding `$IndexCard<T>[]`, no `$$Book` default |
| **`$Index`** | ***"Delete `$Index`"*** | **done** — seven lines, no members, imported by nothing |
| **`then`** | ***"Okay renamed then. We had follow."*** | **done across 17 declarations and every call site** |
| **the catalogue** | ***"I don't even think we need a card catalogue… cards should be handed out"*** | **done for the application** — see below |

### <a id="the-shelf-i-should-not-have-deleted"></a>THE SHELF — deleted, and put back

***Doug: "Deleting the shelf????? Who decided that… something I do not and did not consent to."*** **He is right and the correction is mine.**

**What was deleted was [`$Book.shelf()`](../../package/src/book/Book.tsx), a method in the framework** — *not the demonstration's shelf, which was never touched and drove green throughout.* **It was removed on his own sentence, "the links to catalogued books belongs in the table of contents," and the fault was not the reading — it was that [a drawing was removed before anyone was shown the screen without it](18-the-theme.md).** *The screen without it is a subject rendering its own name and nothing else.*

***RESTORED, and better placed than before:*** **the shelf draws when the COVER is the standing chapter**, *rather than beside whatever chapter happens to stand* — **so the entries appear once, on the face a reader arrives at**, and the duplication that [S24](#s24) measured is still gone. `verify-library` **39/39**.

> ***THE RULE THIS COST, and it is [the standing instruction from The Theme](18-the-theme.md) arriving a second time:*** **a drawing is not deleted on a reading of a sentence. It is deleted after somebody has seen the page without it.**

### <a id="the-catalogue-dissolved"></a>THE CATALOGUE DISSOLVED — because the compiler was already holding what it searched for

***Doug: "Why can't you instantiate something of type `$CardCatalogue<$Book>`? We don't need any functionality in the catalogue. Or do we? I recall we had searching, but why? cards should be handed out."***

**MEASURED FIRST, this time.** *Of the sixteen annotations in the emitted library, **eleven carried their card and five did not*** — the `<Author>The Team</Author>` form, a name rather than an import. **Those five were the entire reason a catalogue existed at runtime: something had to look up a card by the word a reader sees.**

***And the compiler was holding that card the whole time.*** **It now resolves a named annotation against the titles of the cards it is about to emit** — *by the resolved link first, because two books may print one title, and by the name when there is no link* — **so all fifteen carry their card and there is nothing left to search.**

**What went:** *the emitted `$TheCatalogue` class, the `catalogue` instance, the `file()` scope registration, and the application's imports of all three.* **What stays:** *the cards themselves, and a `Map` from route to card that the breadcrumb reads.* ***`$CardCatalogue` remains in `lib` because the demonstration is a hand-written library and still uses one*** — **which is now the only thing that does.**

### <a id="the-thenable-closed"></a>AND `then` BECAME `follow`, WHICH CLOSED A DEFECT NOBODY HAD FILED

***`Promise<$Book>` now typechecks.*** **Proven by writing the thing that was impossible an hour earlier** — *the demonstration's book doors, which had to hand back `Promise<{ book: $Book }>` and now hand back the book.*

**And the workaround was already written down in two places without being recognised as one.** *[`catalogue.tsx`](../../app/src/catalogue.tsx) said it in its own words — "IT HANDS BACK A HOLDER RATHER THAN THE BOOK, and that is forced: `$Book` declares `then()`… so a promise resolving to one would call it and never settle" — and the compiler's emitted `books.tsx` wraps every book the same way and says nothing.* ***Two workarounds, one cause, no entry.*** **Both are simplified now.**

## The gates, run fresh

| | |
|---|---|
| **`lib`** | ***346/346*** · `tsc` 0 |
| **the compiler** | ***43/43*** · walk **29/29** · resolve+emit **37/37** · ***CHECK 7/7*** — 34 chapters, 60 sections, 172 paragraphs, 312 sentences, 2,359 words, 17,240 letters, ***identical before and after*** |
| **the public app** | **38 files typechecked, 26 dot-prefixed, 0 unexpected** |
| **the demonstration** | **80 files typechecked, 0 unexpected** · ***`npm run verify` 92 checkpoints, exit 0*** |
| **the public library, driven** | ***9 checkpoints, 6 passed, 3 FAILED*** — **and it is blocked rather than broken**, see below |

## <a id="what-came-to-light"></a>What came to light while building — reported, not routed around

### <a id="the-thenable"></a>EVERY REFERENT IS A THENABLE, and it is a defect

***`$Referent.then()` chains a reference onto a path. It is also the JavaScript thenable protocol.*** **So `Promise<$Book>` is not a valid promise type, and `await`ing one hands `resolve` to `$Book.then` as though it were a reference — a promise that never settles.** *Found by writing `async (): Promise<$Book>` in the demonstration and getting `TS1058`/`TS1320`.*

***The compiler's own emitted `books.tsx` already wraps every book — `Promise<{ book: $Book }>` — and nothing there says why.*** **The workaround is in the demonstration now, with the reason written beside it.** *The word is Doug's to rule.*

### THE FRONT DOOR IS NOW ITS OWN NAME AND NOTHING ELSE

**[U159](#u159) removed the shelf, correctly — it was drawing the whole catalogue under every chapter, larger than the chapters themselves.** *But the entries had nowhere else to land: the contents lists them, and the contents is a stop AFTER the cover.* ***So `/` and `/physics` now render a title, a tagline, a byline and `NEXT`.***

**The public library's driver fails on exactly this** — *"front door draws its shelf — got null"* — **and it is a design question rather than a broken checkpoint**, so the driver is left red rather than moved to assert something nobody has decided. *[Doug's own sentence names the answer](#r150): "a cover which presents some organized information, provides a way of navigating when you click anywhere."*

### A BOOK NOW ARRIVES, AND NOTHING SAYS SO

*Three of four demonstration books are fetched when a card is followed.* **There is a gap between the click and the book, and no loading state fills it.** *The driver had to stop waiting a fixed 550 ms and start waiting for the book — which is the honest change, and it is recorded because the same gap faces a reader.*

### THE CONTENTS NAMED ITSELF AFTER ITS FIRST CHAPTER

***Found by [U160](#u160) going red in a way I had caused.*** **[`$TableOfContents`](../../package/src/book/TableOfContents.tsx) overrides `parts()` to mean its ENTRIES, so `canonical` is the first CHAPTER** — *and `$$Chapter.copy` read a heading off it.* **Fixed at the root: a chapter's reference form asks the chapter's TITLE**, which is right for a contents and identical for every ordinary chapter.

---

# <a id="design-owed"></a>DESIGN OWED — Doug's directions, measured but not built

***Four things were ruled in the room that are larger than this sprint.*** **Each is recorded with what it would cost, because [a unit with no mechanism is not a unit](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure) and none of these has one yet.**

## <a id="read-async"></a>D1 · `read()` returns a promise — RULED, and it has a wall in front of it

***Doug chose it over the two alternatives.*** **Measured before starting: 18 declarations and 145 call sites across four programs** — *32 in the framework and its consumers, 113 in the suite.* **That is large but ordinary.**

***What is NOT ordinary is this:*** **[`$Book.tsx:270`](../../package/src/book/Book.tsx) calls `accounts(chapter)` from inside `$Book()`, the BOND CONSTRUCTOR, and [`accounts` at :256 calls `chapter.read()`](../../package/src/book/Book.tsx).** *A bond constructor runs during construction and cannot be async.* **The same path reaches `valid()` through `structure()`.**

> ***So `read()` cannot become a promise while validation dereferences books.*** **The way through is one the branch already found for a different reason** — *["A CARD COMPUTE OPENS NONE… asking a leaf for its library opened every book on the path, which is the one thing a catalogue exists to make unnecessary"](../../package/src/book/Book.tsx)* — **validation asks CARDS rather than books, and then nothing synchronous needs to open anything.** *[`$Author.valid()`](../../package/src/book/Author.tsx) already works that way.*

***That is the design, and it is a sprint rather than a unit.***

## <a id="index-card"></a>D2 · `$IndexCard` is carrying too much

***Doug: "What does an index card have on it? It's just a piece of writing that refers to something right? It's kind of like a paragraph level reference that you expect to be kind of inserted into other compositions in interesting ways. Maybe you are trying to put too much on index card."***

**Today it carries a name, a pointer, a subject, an author, the library climb, and a reflection mechanism.** *That is a record, not a piece of writing.* ***And the `$$` family already says what a reference form IS: [one grade below what it stands for](14-cataloguing.md)*** — `$$Chapter` is a section, `$$Section` a paragraph. **A card at PARAGRAPH grade would be writing that can stand inside other compositions**, *which is exactly what Doug described and what a real index card is.*

**[`filed()`](#the-one-offs) is a symptom of the overload and is left standing rather than renamed**, *because renaming a member that should not exist is the wrong repair.*

## <a id="closed-under-books"></a>D3 · `$CardCatalogue` is not a book, and the metaphor is closed under books

***Doug: "It isn't a book. The library metaphor is closed under books. The card catalogue might be useful for the check step of the compiler. But it is not used in the app."***

**It has one user left in the repository** — *the demonstration's hand-written library* — **and the application dissolved it entirely this sprint.** ***The closure argument is the real one and outranks the usage count:*** a thing in this library that is not a book is a thing the theory does not have.

## <a id="the-compiler-moves"></a>D4 · THE COMPILER MOVES INTO THE PACKAGE — prepare for it

***Doug, and this is the architecture rather than a task:***

> **"lib is the package that supports the app. The compiler is likely moving into the package. Prepare for that. `.public` is the public library. The app IS that library. lib is a utility package for interfacing with the public library, and just in the way `.claude` belongs to identity, a different repo, so too can `.public` interface with other libraries."**

**Nothing in this sprint blocks it, and two things were done with it in mind without knowing:** *the compiler's folders now hold one kind of thing each, and its contact with the framework is [typed against `$Book` rather than `any`](#u156) — which is the seam that has to survive the move.*

---

# <a id="the-commentary"></a>THE COMMENTARY'S HOME — settled by Libby, whose territory it is

***Doug: "How things fit into library branches is not my job. Ask Libby to read about how her library works with all its branches."*** **She read it and settled it.**

**TWO THINGS ARE FORCED.** *[O8 already ruled the direction](../the-condition-report/02-organization.md#o8): the book links to the file, the file never cites the book, and the dead-link checker guards the drift.* **And the one-way link rule decides the shelf** — *branches link INTO the identity and the identity never links DOWN into a branch* — **so a book carrying `package/src/…` links can only live in [`.public/.lib/`](.cover.md).** *Bookkeeping and Librarianship are forbidden from holding them, because identity travels between projects and the code does not.*

***THE MOVE IS TRIAGE BEFORE REHOMING, and most of the 362 lines are owed a DELETION rather than a relocation.***

| what a comment says | where it goes |
|---|---|
| what Bookkeeping or Librarianship already say | ***delete*** — and make the file linkable from the chapter that already says it |
| **why the model is shaped this way** | [The Semantics of Books](../the-semantics-of-books/.cover.md) — *it already links down to the files; [chapter 15](../the-semantics-of-books/15-the-levels-of-writing.md) is the template* |
| what is wrong | [The Condition Report](../the-condition-report/.cover.md) · [Solutions](../solutions/.cover.md) — **both exist** |
| ***how to USE the class*** | ***the one genre with no home today*** |

**NO BOOK IS MINTED YET, deliberately.** *Only the how-to-use residue is left after triage, and whether that is a paragraph or a shelf is a volume question nobody can answer before sorting.* ***Minting a shelf for un-triaged comments is the add-don't-read habit itself.*** **If it earns a companion to `lib`, the name is Doug's and the pen is Libby's.**

> ***AND THIS IS WHY IT IS WORTH PAYING NOW rather than after [the compiler moves into the package](#the-compiler-moves):*** **a comment inside a file travels silently when the file moves and may land somewhere wrong. A book-to-file link that breaks under a move is caught LOUDLY by the checker and repointed on purpose.** *Comment-in-code is fragile under a reorganization; book-links-to-code is self-verifying under one.*

**Routing decides the pen:** *the why through [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md) and [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), the faults through the Condition Report's authors, a companion through [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md).*

---

# <a id="the-comments-i-added"></a>THE COMMENTS I ADDED, AND WHY THEY CAME OUT

***Doug, at the close, and it is a correction of how this session worked:***

> **"I don't inherently hate code comments, but this code exists to match a very formal specification, and it can't be muddied with your rather myopic comments. I have not seen that your team is capable of writing durable comments. You write little usage notes usually. That can be done in a library branch in a book in a chapter that is about that part of the code."**

***MEASURED: 94 comment lines added to the compiler and 28 to `lib` in one session.*** **The compiler stood at 519 comment lines against 1,309 of code — 28% — and `lib` at 234 where [the standing ruling is zero](19-the-binding.md#f10).**

**And the CONTENT is the tell rather than the count.** *Nearly every line I added began "This used to…", "It was called…", "where before…"* — ***a changelog written into the source, of changes [this chapter already records in full](#the-ledger).*** **A formal specification does not carry its own diff.**

***ALL 102 WERE REMOVED.*** *Two files were corrupted by the removal — a JSDoc closer begins with `*` and matched the filter — and both were **restored from `HEAD` and rebuilt with the semantic changes alone**, which is the better end state anyway.* **Every gate re-run after: [all four green](#where-things-stand).**

> ***THE RULE, and it is the same shape as [the shelf](#the-shelf-i-should-not-have-deleted):*** **the sprint chapter is where a change explains itself. The source says what a thing IS; it does not say what it used to be.** *[Libby's routing](#the-commentary) is where the durable half goes.*

# <a id="the-blue-book"></a>THE BLUE BOOK — three fixes, seen

***Doug, 2026-08-25: "in the blue book you can't see the titles… you probably want next and previous same book to be on the top and bottom, and you want them to start you at the top of the page."***

**MEASURED: the chapter title drew at `rgb(20, 24, 29)` on a `#0f1620` ground.** *Near-black on near-black.* **The cause is that the demonstration's Build book carries its own dark palette and the chapters use the framework's `$Title`, which takes the THEME's ink** — *a book that dresses itself and a title that dresses itself from somewhere else.*

| | |
|---|---|
| **the titles** | ***`#0078d7`***, the Windows selection blue, *asked for by name.* **Measured after: `rgb(0, 120, 215)`** |
| **the turns** | ***two `nav` blocks*** — above the plate and below it, from one member so they cannot drift apart |
| **a turn opens at the head** | ***scrolled to 600, turned, measured 0*** |

*Every gate re-run: lib 352/352, the demonstration exit 0, the public library 39/39.*

# <a id="what-a-card-is"></a>WHAT AN INDEX CARD IS — worked out, and it was already half-built

***Doug, 2026-08-25: "A blank index card doesn't have a whole lot of space on it, but it might expect a title? It might expect a whole section that describes something. Think about that. Not sure it needs to be more. Work it out."***

## The ladder answers it, and `$$Book` is the only rung that left

***Every reference form in this framework is ONE GRADE BELOW what it stands for.*** **That is [the specification the `$$` family closed on](14-cataloguing.md), and it holds without exception until the top:**

| reference form | ***IS a*** | stands for a |
|---|---|---|
| `$$Word` | `$Letter` | `$Word` |
| `$$Sentence` | `$Word` | `$Sentence` |
| `$$Paragraph` | `$Sentence` | `$Paragraph` |
| `$$Section` | `$Paragraph` | `$Section` |
| `$$Chapter` | `$Section` | `$Chapter` |
| ***`$$Book`*** | ***`$IndexCard` — outside the writing hierarchy altogether*** | `$Book` |

***One grade below a BOOK is a CHAPTER.*** **So a card is a chapter, and a chapter is exactly what Doug described:** *[`$Chapter`](../../package/src/book/Chapter.tsx) carries a **title**, and its `requires()` demands a **summary — a parenthetical section that describes it***. **"A title? A whole section that describes something." That is a chapter, stated in the code before the question was asked.**

## And `$Synopsis` is already the thing

***[`$Synopsis extends $Chapter` and carries `$for?: $$Book`](../../package/src/book/Synopsis.tsx).*** **It is a chapter, standing in one book, giving an account of another** — *which is an index card in everything but the name.* **The demonstration's shelf already composes four of them as chapters and calls the result a catalogue.**

> ***So the framework has TWO representations of one idea:*** **a card as WRITING (`$Synopsis`, a chapter that stands elsewhere) and a card as a RECORD (`$$Book`, a bag of strings with a reflection mechanism).** *The second is the one Doug says is carrying too much, and the first is the one that was right.*

## What follows, and it closes [D3](#closed-under-books) without arguing about it

**If a card is a chapter, then a catalogue of cards is a BOOK whose chapters are cards** — *and [the library metaphor is closed under books](#closed-under-books) again, which was Doug's objection to `$CardCatalogue` and is answered rather than conceded.* **The compiler would emit its cards as a small BOOK rather than a module of literals**, and *the app's breadcrumb would read a chapter's title rather than a record's field.*

## <a id="what-travels"></a>Which reference can travel — and this is what `read()` turns on

***MEASURED, both ways, before proposing either:***

| | errors |
|---|---|
| `read(): Promise<T>` **on the `$Reference` interface** | ***656*** |
| `read(): Promise<T>` **on the card alone** | ***104*** |
| **today** | **0** |

**The 656 are not `await`s missing.** *They read `Types of parameters 'part' and 'part' are incompatible` and `The types returned by 'read'`* — **every `$Composition<$Reference<T>>` member shifts, and chemistry's contravariance multiplies it.** *This is [the variance wrong turn already in the record](21-semantics-then-drawing.md#wrong-turns-already-taken), at seven times its previous scale.*

***And the gap between 656 and 104 names the truth:*** **a card is the ONLY reference in the system whose referent can live outside the constructed graph.** *A chapter refers to the book it stands in. A section refers to a section already built. **Only a card can send you to the stacks.*** **So travel is a property OF THE CARD, not of reference.**

## <a id="the-blocker-is-gone"></a>THE BLOCKER IS GONE — and that is built, not proposed

***[`$Book()` no longer dereferences anything.](../../package/src/book/Book.tsx)*** **`accounts()` asked whether a synopsis's reference came home by CALLING `read()` — from inside the bond constructor — which is what made an async read impossible.** *It asks the cards now: a synopsis carrying no card accounts for the book it stands in, and one carrying a card accounts only when it is that book's own.*

**Nothing is opened, the constructor is free, and `lib` is 352/352 with `tsc` 0.** ***Whatever shape the card takes, that wall is down.***

# <a id="the-card-is-built"></a>THE CARD IS A CHAPTER — BUILT

***Doug: "Do the card now. Let's get this done."*** **Built 2026-08-25, and every gate green with it.**

| | |
|---|---|
| **`$IndexCard extends $Chapter`** | *one grade below the book it stands for, which is what every reference form already was* |
| **a card WRITES ITSELF** | *given no writing it declares a **title section** and a **summary** — a chapter's minimum and a card's whole surface. Probed: `parts()` = 2, stable across calls* |
| ***the catalogue half is gone from `$$Book`*** | **it was overriding `canonical` to mean "the first entry" while `$Document.canonical` means "the first section"** — *a composition of cards and a composition of sections at once, which is the overload Doug named* |
| ***the reflection is gone from the framework*** | `properties()` · `written()` · `printed()` — **a card that IS writing prints itself as writing.** *[The demonstration's own card declares them now](../../.archive/app/src/sections/book/library/the-team/librarycard.tsx), which keeps the signed "four cards printing their own fields" demonstration and puts it where a library's extras belong* |
| **`title` and `subtitle` stopped being strings** | *they are the card's WRITING; `name` remains its identity, and the two were being conflated* |

***277 type errors → 0, in five measured steps.*** **And `tsc` earned its keep**: it caught every place a `$Title` object would have been rendered as text, which is [U156](#u156)'s whole argument arriving somewhere nobody planned it.

## <a id="the-loop-it-found"></a>What building it found — a live loop, and its root

***`verify-library` went to `Maximum update depth exceeded`.*** **The card was innocent** — *probed: it declares its writing once and `parts()` is stable.* **The root is that [`$Document.title` CONSTRUCTS a fresh `$Title` chemical on every read](../../package/.archive/document/Document.tsx)**, *and the application had just started reading `card.title` inside its view.* ***A view that constructs a chemical never returns — [which is already filed](21-semantics-then-drawing.md#what-the-demo-found) — and here it looped.***

**The application reads `canonical?.heading` now, a string that constructs nothing.** ***The root remains: [`$Document.title`](../../package/.archive/document/Document.tsx) and [`$Figure.caption`](../../package/.archive/writing/Figure.tsx) both build on every read, with nothing saying so at either.***

> ***COMPOUNDED into [The parse that woke its own parents](../solutions/16-the-parse-that-woke-its-own-parents.md#a-getter-is-a-reading-too), as its THIRD appearance*** — **not a new chapter, because that chapter's specification already covers it**: *a reading called during a render must be held.* **What this appearance adds is which things are readings** — *`parts()` announced itself as one; `title` does not, which is why it survived three sprints and two appearances.*

## <a id="async-answered"></a>AND `read()` AS A PROMISE — measured, and the answer is no

***Doug: "read is part of an interface. You need to do it everywhere. Understand the interfaces you work on please… And yeah, figure out if we want that to be async. If it helps. It might."***

**Measured across the whole interface, both before and after the card became a chapter:**

| | errors |
|---|---|
| `read(): Promise<T>` on `$Reference`, before | ***656*** |
| `read(): Promise<T>` on `$Reference`, after | ***602*** |
| today | **0** |

***It barely moved, and that is the finding.*** **The cascade was never about views** — *it is `$Composition<$Reference<T>>` structural typing, amplified by chemistry's contravariance, which is [the variance wrong turn already recorded](21-semantics-then-drawing.md#wrong-turns-already-taken).*

> ***AND IT IS NO LONGER NEEDED.*** **A card carries its own writing, so no view reads one to draw it.** *The only thing that reads a card is NAVIGATION — and navigation already awaits, in [the demonstration's `follow`](../../.archive/app/src/sections/book/library/the-team/card.tsx) and [the application's `fetch`](../../app/src/catalogue.tsx).* **Making the interface async costs 602 errors and buys what the card already bought.**

# Where things stand

*One state, written 2026-08-25 at the session's close. **The previous state is deleted rather than layered under this one.***

## → THE NEXT ACTION

> ### `/ce-brainstorm`

***The sprint is closed.*** **Built, verified, compounded, and [the audit's register is current](../the-condition-report/08-the-compiler.md#dispositions) — which it was not an hour ago.** *Nothing is half-built and no gate is red.*

***The subject this session EXPECTED is how the framework evolves from a UI perspective*** — **Doug, 2026-08-25: "Next sprint is going to be a big sprint about how to evolve this framework from a UI perspective. We need to figure it out."** *Written as an expectation and not as a brief: **Doug sets the subject in the room.***

## What this sprint did, in plain words

**It was planned as an audit of the compiler and it became a question about what a CARD is.** *The two met at the end.*

- **The compiler was audited properly for the first time**, and every fault it had is fixed. *The one that paid was the question nobody had ever asked it — what happens when the corpus is WRONG — which found a crash, a misdiagnosis and a silent pass.*
- **The compiler stopped needing a catalogue at all**, because it was already holding what it searched for.
- **The demonstration's landing page was halved**, and it can be built at all, which it could not before.
- **A card became a chapter** — one grade below the book it stands for, carrying a title and an account, which is what every other reference form already was.
- **`then` became `follow`**, which closed a defect that had two workarounds sitting in the code and no entry.

## Rulings Doug made, verbatim — the most expensive thing a session can lose

> **"There shouldn't be the notion of a page. One chapter displays at a time. There should be navigation between chapters — use manifold in the demo as a good example for the network."**
>
> **"The base doesn't have to be as fancy but we want it to be like that and extensible."**
>
> **"lib is the package that supports the app. The compiler is likely moving into the package. Prepare for that. `.public` is the public library. The app IS that library. lib is a utility package for interfacing with the public library, and just in the way `.claude` belongs to identity, a different repo, so too can `.public` interface with other libraries."**
>
> **"It isn't a book. The library metaphor is closed under books."**
>
> **"A blank index card doesn't have a whole lot of space on it, but it might expect a title? It might expect a whole section that describes something. Not sure it needs to be more."**
>
> **"read is part of an interface. You need to do it everywhere. Understand the interfaces you work on please. Very very very important."**
>
> **"I don't inherently hate code comments, but this code exists to match a very formal specification, and it can't be muddied with your rather myopic comments… That can be done in a library branch in a book in a chapter that is about that part of the code."**
>
> **"Deleting the shelf????? Who decided that… something I do not and did not consent to."**

## Verified — every gate, with its number

| | |
|---|---|
| **`lib`** | ***352/352*** · `tsc` 0 |
| **the compiler** | ***43/43*** · walk 29/29 · resolve+emit 37/37 · ***CHECK 7/7*** — 34 chapters, 60 sections, 172 paragraphs, 312 sentences, 2,359 words, 17,240 letters, **identical to the sprint's opening measurement** |
| **the public library** | 38 files typechecked, 0 unexpected · ***driven 39/39, 0 console errors*** |
| **the demonstration** | 80 files typechecked, 0 unexpected · ***`npm run verify` exit 0, 92 checkpoints*** |
| **the branch library's links** | **3,986 checked · 135 broken → 26**, *and the 26 remaining point at files this audit deliberately deleted* |

## What is NOT done — named rather than omitted

| in plain words | |
|---|---|
| **A catalogue should be a book of cards** | *now that a card IS a chapter, the metaphor closes without `$CardCatalogue` at all* — [D3](#closed-under-books) |
| **Two getters build a chemical every time they are read** | `$Document.title` and `$Figure.caption`. **A view may not touch either, and nothing says so at either.** *Today's render loop came out of one of them* — [the third appearance](../solutions/16-the-parse-that-woke-its-own-parents.md#a-getter-is-a-reading-too) |
| **The compiler moves into the package** | *nothing here blocks it; the folders and the typed seam were done with it in mind* — [D4](#the-compiler-moves) |
| **The framework's commentary has a route but no triage** | **Libby settled WHERE and HOW; nobody has sorted the 362 lines** — [her ruling](#the-commentary) |
| **The classes drawer still transcribes source** | *it teaches a model the framework no longer has* — [S23](../the-condition-report/09-the-demonstration.md#s23) |
| **The top bar has a state machine nobody has drawn** | *eight controls of three kinds, nothing disabled and nothing marked* — [O15](../the-condition-report/09-the-demonstration.md#o15) |
| **A book arrives with nothing on screen** | *three demonstration books are fetched when a card is followed, and no loading state fills the gap* |
| **Which corpus gets the writing** | *the test library is being retired, so writing into it is work that leaves with it* — [U162](#u162) |

## Wrong turns already taken — ***do not retry these***

| | |
|---|---|
| ***DELETING A DRAWING ON A READING OF A SENTENCE*** | **[the shelf](#the-shelf-i-should-not-have-deleted)** — *a drawing is deleted after somebody has seen the page without it, never before* |
| ***WRITING A CHANGELOG INTO THE SOURCE*** | **[122 comment lines](#the-comments-i-added)** — *the source says what a thing IS, not what it used to be* |
| ***`read(): Promise<T>` on `$Reference`*** | ***602 errors***, measured twice — *composition variance, not views, and [the card made it unnecessary](#async-answered)* |
| ***Narrowing a `$` prop in a subclass*** | *chemistry's `Component<T>` is contravariant in props; the getter narrows instead* |
| ***Making the demo's books dynamic before the cards carry their text*** | **every spine vanishes** |
| ***Assuming a golden HTML promise is stable*** | *it records styled-components hashes, so adding one anywhere turns it red* |

## What to read — ***four, shaped for a brainstorm about the UI***

*[Not a boundary](../../../../.claude/library/our-skillset/32-ce-handoff.md#9-sufficient-is-a-claim-and-it-was-wrong) — a starting point. A brainstorm reads sources, not code.*

| | what is load-bearing in it |
|---|---|
| **[What an index card is](#what-a-card-is)** | ***the reference ladder, and why a card is a chapter.*** *The UI question and the model question turn out to be one question* |
| **[`$Book.view()`](../../package/src/book/Book.tsx)** | **the framework's ENTIRE drawing, in four members** — *a running head, one standing chapter, the shelf, the turns. Everything a UI sprint would change is in that one method* |
| **[The Manifold](../../.archive/app/src/sections/the-manifold.tsx)** | ***Doug named it as the reference for navigation*** — a closed cover you click anywhere, a running head that steps up a level, turns with a folio, lenses, ribbons, and addresses that resolve through the model |
| **[The Theme](18-the-theme.md)** | **DEVELOP IN THE OPEN** — *six rules from the last sprint that drew, and [this session broke the first of them](#the-shelf-i-should-not-have-deleted)* |

## How to see it

| | |
|---|---|
| **the demonstration** | `npm run dev` in [`library/.public/package`](../../package/) → ***http://localhost:5199/*** — **the shelf, five spines, three books behind doors.** *`/books` is the landing page and the one that was halved* |
| **the public library** | `npm run dev` in [`library/.public/app`](../../app/) → ***http://localhost:5299/*** — **the compiled test library.** *The cover carries its shelf; `/physics` shows a subject with its two books* |
| **driving them** | `npm run verify` in the package — ***92 checkpoints*** · `npm run drive` in the app — ***39 checkpoints.*** **Start the server yourself first**, and *a short count is a stall rather than a number* |
| **the compiler** | `npm run dump ../../.test-library` prints the intermediate representation · `npm test` runs all four gates |
