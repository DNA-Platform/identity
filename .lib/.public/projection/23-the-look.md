# The Look

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

*Opened 2026-08-25 at the close of [Working Well By Default](22-working-well-by-default.md). **Status: CLOSED — built, driven, reviewed in the room and compounded.** — designed and planned in one session, with Doug in the room ruling at every turn.*

***PERSPECTIVES ARE REMOVED, NOT REFACTORED.*** *Doug: **"We are completely removing perspectives."** The two axes — `reveal`/`perspectives` and `look('up'/'down')` — the `Perspective` class, the scope-tracked cursor and five framework symbols all delete, and one integer takes their place.*

*The title is a proxy and stands for correction. It is taken from the surface Doug named: **`<Chemical look={2}/>`**, and `@look('github')` beside it.*

**Identifiers.** Requirements **R156–**, units **U168–**, decisions **D87–**, risks **K10–**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law); a deletion leaves a gap.*

**Where the code lands.** The framework work is in [`library/chemistry/package`](../../../chemistry/package/), so [$Chemistry's own Projection](../../../chemistry/.lib/projection/.cover.md) is owed an entry at the retro — the same arrangement [The Representative](12-the-representative.md) used. **The specification lives where perspectives are documented** — [the Particle book](../../../chemistry/.lib/particle/.cover.md), chapters 8 and 9, which this sprint rewrites.

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) — ***this chapter*** → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) — **next** → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## <a id="the-literature"></a>What was read, and why each earned its place

*[A sprint opens by choosing what to read](../../../../.claude/library/library-tree/03-sprints.md#the-sprint-opens-with-its-literature), and the choosing is part of the sprint.*

| | what it was load-bearing for |
|---|---|
| [Perspectives](../../../chemistry/.lib/particle/08-perspectives.md) · [The Composition of Perspectives](../../../chemistry/.lib/particle/09-the-composition-of-perspectives.md) | the two axes as shipped, and the design underneath them — **what is being deleted, said by the person who built it** |
| [`particle.ts`](../../../chemistry/package/src/abstraction/particle.ts) · [`perspective.ts`](../../../chemistry/package/src/abstraction/perspective.ts) | the mechanism against the account — `frame()` had already arrived and the chapter did not know |
| [The Representative](../../../chemistry/.lib/composition/11-the-representative.md) · [its sprint](12-the-representative.md) | the `$` surface, because the second half of Doug's ask is a later sprint against it |
| [`types.ts`](../../../chemistry/package/src/implementation/types.ts) · [`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts) | **the attribute system Doug asked me to plug into** — the computed props type and the decorator registries |
| [The Reactivity Contract](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md) · [View](../../../chemistry/.lib/particle/06-view.md) | why the cursor had to be scope-tracked, and why it no longer does |
| [The Condition Report](../the-condition-report/.cover.md) — [How to Read This](../the-condition-report/01-how-to-read-this.md), [The Three Codebases](../the-condition-report/07-the-three-codebases.md), [The Compiler](../the-condition-report/08-the-compiler.md), [The Demonstration](../the-condition-report/09-the-demonstration.md) | the standard a fault is judged against, and **C7's rebuild-chain condition**, which governs any `$Chemistry` change |
| [The Canonical Echo](../the-semantics-of-books/06-the-canonical-echo-and-views.md) | a claim in the **theory** book that dies with the mechanism, and would otherwise be missed |
| [`Book.tsx`](../../package/src/book/Book.tsx) · [`sheet.tsx`](../../package/app/src/sections/page/sheet.tsx) · [`the-page.tsx`](../../package/app/src/sections/the-page.tsx) | the framework's whole drawing, and the five live lenses that have to survive the change unchanged on screen |

---

# The objective

***Delete perspectives and put a numbered, nameable series of views in their place — one integer or one word on a JSX attribute, and a vtable behind it.***

**Doug's design, in his own words across this session:**

> *"We are removing the current view functionality, and we are going to support the following methods: `view`, `$view`, `$$view`, `$$$view`… Why? So that we can use subclassing to evolve the perspective."*
>
> *"We will lift all versions of view. When we switch them we will assign `chemical.view.view`. If i == 2, `chemical.view.view = chemical.$$view`. That is what is happening conceptually behind the scenes."*
>
> *"We will get rid of the look and the `$Perspective` etc… we are simplifying to this."*
>
> *"They can't coexist!! We are using `$i` in chemistry. `$Location` will have to adapt."* — **superseded the same session by the rename below**
>
> *"Have the prop called `$look` instead of `$i`. `<Chemical look=2/>`. That's cool."*
>
> *"We have an attribute system. Can you plug into it so look is `look?: number | string`? And we can provide names for the view that work on look as well? We can make a view dictionary (a sort of vtable) for each instance (call it `$views$` as a symbol perhaps) and the map stores both number and string keys and it is accessed and used to find the view."*
>
> *"Use an `@` attribute. Can we have a look attribute that allows us to specify the name of a look?"*
>
> *"We will find a way to implement the frame demo where some of the perspective complexity is moved to the demo so that it is unchanged in output, but the views are still used."*
>
> *"Queenie will need to test this rigorously."*

## <a id="what-was-measured"></a>What the brainstorm measured — every requirement stands on one of these

***Nothing below is an impression.*** *Each row was produced during this session, on this working copy.*

| | measured | how |
|---|---|---|
| **the API surface being deleted** | `reveal(` **26** · `new Perspective` **21** · `look('up'\|'down')` **37** · `viewLevel` **43** · `.perspectives` **3 consumer sites** | grep across `src`, both apps, both suites |
| **the promises that move** | `look.test.tsx` **10** · `perspectives.test.tsx` **8** · `particle-perspectives.test.tsx` **6** = **24**; `frame.test.tsx` **11 survive** | counted per file |
| **`Perspective` is a PUBLIC export** | [`index.ts:17`](../../../chemistry/package/src/index.ts) — exactly **one** consumer imports it, `sheet.tsx` | grep for the import |
| **one symbol is already dead** | `$perspective$` (singular) — declared at [`symbols.ts:51`](../../../chemistry/package/src/implementation/symbols.ts), **0 uses in `src`** | grep, `src` only |
| **`$i` was taken, and by the busiest reference class** | [`$Location.$i`](../../package/src/reference/Location.tsx) — **6 sites**, plus `<Location i={…}/>` from [`Book.tsx:186`](../../package/src/book/Book.tsx), [`CardCatalogue.tsx:41`](../../package/src/reference/CardCatalogue.tsx), [`Writing.tsx:101`](../../package/src/writing/Writing.tsx) | grep — **this is why the prop is `look`** |
| **`$look` is free** | **0 occurrences** anywhere in the repository | grep across both packages and both apps |
| **`$$view` is ALREADY excluded from props** | [`$Properties<T>`](../../../chemistry/package/src/implementation/types.ts) maps `` K extends `$${infer First}${infer Rest}` `` and returns `never` when `First extends '$'` | read |
| **framework `$`-fields are excluded too — including ones meant to be props** | `$show`/`$hide` are `keyof $Chemical`, so `<X show={false}/>` does not typecheck; **every Lab site writes `this.x.$show = …` instead** | read + grep, 6 sites |
| **`$look` is reactive by the ordinary rule** | [`$Bond.isSpecial`](../../../chemistry/package/src/abstraction/bond.ts) — `length >= 2`, `[1] !== '$'`, `[1] !== '_'`, lowercase | read |
| **the decorator machinery exists and walks the prototype chain** | `inertDecorators` / `reactiveDecorators` — `Map<prototype, Set<string>>`, with `inertOf` recursing up `Object.getPrototypeOf` | read |
| **decorators are enabled in both packages** | `experimentalDecorators: true` in `chemistry/package/tsconfig.json` **and** `.public/package/tsconfig.json` | read |
| **the five demonstration lenses differ ONLY in `view()`** | `Book` declares no `view` at all — it inherits `$Sheet`'s, which is why it is the default lens | read `sheet.tsx` |
| **`the-page.tsx` already holds a STRING** | `showing = 'book'`, compared against `p.name` | read |

---

# The requirements — the register

*Written out in full while the sprint ran; **kept here as one line each, with every identifier and anchor intact**, now that each is either built or named as not. [Compounding](../../../../.claude/library/..librarianship/17-compounding.md): a sprint chapter stops being a plan and becomes an index.*

**Actors.** <a id="a1"></a>**A1** the framework author, who wants more than one drawing without more than one class · <a id="a2"></a>**A2** the consumer, who wants a different one from outside with one attribute · <a id="a3"></a>**A3** the reader of the demonstration, who should never learn anything changed.

| | | |
|---|---|---|
| <a id="r156"></a>**R156** | every part of the perspective machinery gone from the framework | ***done*** — [U168](#u168) |
| <a id="r157"></a>**R157** | `Perspective` leaves the package's public surface, and its one consumer moves | ***done*** — [U168](#u168) |
| <a id="r158"></a>**R158** | the two dead types holding these names in the opposite sense are reconciled | ***done*** — [U173](#u173) |
| <a id="r159"></a>**R159** | a class's views are `view`, `$view`, `$$view`, onward; a subclass adds or replaces | ***done*** — [U169](#u169) |
| <a id="r160"></a>**R160** | every instance carries `$views$`, keyed by number **and** by name | ***done*** — [U169](#u169) |
| <a id="r161"></a>**R161** | `@look('name')` names one, on the framework's own attribute machinery | ***done*** — [U170](#u170) |
| <a id="r162"></a>**R162** | `look` is a JSX attribute typed `number \| string`, carried by the computed type | ***done*** — [U171](#u171) |
| <a id="r163"></a>**R163** | a prop cannot overwrite a view at runtime either | ***done*** — [U171](#u171) |
| <a id="r164"></a>**R164** | an out-of-bounds look is refused, naming both sides | ***done*** — [U172](#u172). ***Throwing was chosen as [`$Location.read()`](../../package/src/reference/Location.tsx)'s house form; the ruling behind it predates the rename from `$i` to `look`, so it is the cheapest thing here to reverse*** |
| <a id="r165"></a>**R165** | switching a look repaints, through the ordinary reactive field and nothing else | ***done*** — [U172](#u172) |
| <a id="r166"></a>**R166** | `frame()` keeps its shape and reads the selected look | ***done*** — [U172](#u172) |
| <a id="r167"></a>**R167** | the demonstration's five lenses survive invisibly | ***done*** — [U175](#u175) |
| <a id="r168"></a>**R168** | the Lab's three cases become view cases, two output-identical | ***done*** — [U174](#u174) |
| <a id="r169"></a>**R169** | the books that document perspectives say what is true | ***done*** — [U176](#u176) |

## <a id="the-demo"></a>The demonstration, and what a hand-authored page could not fake

***Five chips can be faked with five pages. One instance carrying a live edit across all of them cannot.*** **The acceptance examples and their results are in [the build ledger](#ae1)**: `AE1` the typed text surviving four looks, `AE2` position and name giving byte-identical DOM, `AE3` the bounds message, `AE4` the frames case untouched.

# The plan

## Decisions

### <a id="d87"></a>D87 — The prop is `look`, and that is what saves `lib` from moving at all

**`$i` collided with [`$Location.$i`](../../package/src/reference/Location.tsx) — 6 sites plus 3 call sites in `lib`.** Doug first ruled that `$Location` would adapt and proposed `$index`; **the rename to `look` in the next breath made the collision disappear.** `$look` is measured free at **0 occurrences**.

***So `lib` is untouched by this sprint*** — which also removes a `dist` rebuild from the chain. **Recorded because the first ruling is in the transcript and a later reader would otherwise implement it.**

### <a id="d88"></a>D88 — The dictionary is built lazily per instance and cached, on the prototype-chain walk `$viewLevels` already did

`$viewLevels` walked the chain collecting own `view` descriptors whose value is a function. **The same walk, collecting `view` / `$view` / `$$view` / … instead, is the dictionary's construction** — most-derived first, deduplicated by member name so an override replaces rather than adds, ordered by `$` count.

*Chosen over building it in the constructor: a template's dictionary would be built before subclass fields exist, and `$Particle` constructs during class-field initialization.*

### <a id="d89"></a>D89 — The computed props type gains a framework-attribute allowance, and this is the load-bearing type change

[`$Properties<T>`](../../../chemistry/package/src/implementation/types.ts) returns `never` for any `` `$${First}${Rest}` `` where `First extends '$'` — **so `$$view` and every deeper one are already excluded and need no work.** It also returns `never` for `K extends keyof $Chemical`, which excludes `$view` the moment it is public **and would exclude `look` too**.

***The two requirements pull opposite ways through one clause***, so the type intersects an explicit framework-attribute declaration carrying `look?: number | string`. **`$show`/`$hide` have the same disease today and are deliberately NOT fixed here** — [named below](#not-in-scope) rather than swept in.

### <a id="d90"></a>D90 — `$activeView$` is deleted rather than repurposed

Doug's conceptual sentence was *"chemical.view.view."* **The dictionary plus `$look` says the same thing with no second slot to keep in step**, and a stored active-view function was the thing that had to be invalidated by hand. *The view cache invalidation moves to the ordinary reactive write on `$look`.*

### <a id="d91"></a>D91 — `perspectives-look` is CONVERTED, not deleted, and its prose is rewritten

Its drawings survive as three looks. **What it demonstrated — one live instance rendered at any altitude of its own inheritance — does not exist after this sprint.** *Deleting the case would hide the loss; converting it and leaving the old sentence would state something false.* **The case stays and says what it now shows.**

### <a id="d92"></a>D92 — The removal goes FIRST, in one unit, and the suite is watched going red

*[Doug's own sequence from last sprint](22-working-well-by-default.md#d80) — the gate before the work.* **Deleting the machinery with nothing in its place turns 24 promises and both apps red on purpose**, which is the only way to know the ledger was complete before anything is built to hide it.

## <a id="the-units"></a>The units — the register

*Each carried its files, dependencies, mechanism, demo contribution and scenarios while it ran. **The scenarios became the suite and are read where they run**; what a unit did is [the build ledger](#the-build-ledger)'s to say.*

| | | |
|---|---|---|
| <a id="u168"></a>**U168** | perspectives deleted, the suite watched going red — `R156` `R157` | [what the red proved](#u168-done) |
| <a id="u169"></a>**U169** | the view members and the `$views$` dictionary — `R159` `R160` | [landed as one seam](#u169-172-done) |
| <a id="u170"></a>**U170** | `@look('name')`, on `bond.ts`'s own registries — `R161` | [same](#u169-172-done) · [and K11 fired](#k11-fired) |
| <a id="u171"></a>**U171** | `look` becomes an attribute, `view` stops being one — `R162` `R163` | [same](#u169-172-done) |
| <a id="u172"></a>**U172** | `$look` selects, repaints, and refuses — `R164` `R165` `R166` | [same](#u169-172-done) |
| <a id="u173"></a>**U173** | the two dead types stop meaning something else — `R158` | [and the number I typed](#the-number-i-typed) |
| <a id="u174"></a>**U174** | the Lab's three cases — `R168` | [driven](#u174-176-done) |
| <a id="u175"></a>**U175** | the demonstration's five lenses — `R167` | [driven](#u174-176-done) · [and the boundary I got wrong](#the-boundary-i-got-wrong) |
| <a id="u176"></a>**U176** | the eight chapters, one of them in the theory book — `R169` | [done](#u174-176-done) |
| <a id="u177"></a>**U177** | the rebuild chain, from [C7](../the-condition-report/07-the-three-codebases.md#c7)'s condition | ***[it should have run first](#the-stale-dist)*** |

## <a id="the-removal-ledger"></a>The removal ledger — spent, and it was complete

*The swept list of every site — files, symbols, counts — was U168's checklist and is spent now that the deletion has run.* **What it proved is worth keeping: `tsc` named four files after the deletion and not one was outside the ledger.** *The single site the sweep missed was in `lib` rather than in the framework, and `tsc` found it — [the one site tsc found](#the-one-site-tsc-found).*

## <a id="risks"></a>Risks — spent

*Five were stated, K10–K14. **One fired and it is written where it fired**: [K11, the decorator that would not compile in an application](#k11-fired) — and it arrived nowhere near where the plan pointed it. **K10 did not fire** — the removal ledger held. The rest are in the record with what they cost.*

## <a id="tracing"></a>Every requirement lands somewhere — spent

*The two-way trace was checked before work started and is now the register above: **every requirement carries its unit, and every unit its requirements**, in the same table.*

## <a id="not-in-scope"></a>What has no unit, deliberately

| | why |
|---|---|
| **the `$` container extension** | ***Doug, this session: "We'll do `$` after."*** *It was the second half of the original ask and it is a later sprint.* |
| **`$show`/`$hide` are not writable as attributes either** | **The same [D89](#d89) clause excludes them, and every Lab site works around it by writing the field.** *Fixing it here would widen a type change into a behaviour change nobody asked for.* **Recorded so the next reader meets it in writing.** |
| **`$Location.$i` → `$index`** | **Ruled, then made unnecessary by the rename to `look`** — [D87](#d87). *`lib` does not move.* |
| **the classes drawer** | [S23](../the-condition-report/09-the-demonstration.md#s23) — *still transcribing source, still open, and this sprint changes what it would have to say.* **Named, not taken.** |
| **the top bar's state machine** | [O15](../the-condition-report/09-the-demonstration.md#o15) — *still undrawn. This sprint touches the same bar and deliberately changes nothing about which controls are legal.* |

---

# The build ledger

*Appended as each unit lands. **Numbers are from a run in the same message that claimed them**, never recalled.*

**Baseline, taken fresh before the first deletion:** ***`$Chemistry` 684/684 across 62 files, `tsc` 0.*** *Servers up before the first edit — the demonstration on **5199** (already running), the Lab on **5173**.*

### <a id="u168-done"></a>U168 — ***DONE.*** The deletion, and the red is the evidence

**`perspective.ts` deleted; `particle.ts` down ~150 lines; the stamp, the bond exclusion, five symbols and the public export gone.** *`symbolic.ts` needed no edit — it re-exports with `export * from './implementation/symbols'`, so the five dropped with their declarations.*

***THE LEDGER WAS COMPLETE, and this is the number that says so:*** **`tsc` names FOUR files and ZERO of them are in `src`.**

| | errors |
|---|---|
| `tests/react/perspectives.test.tsx` | **26** |
| `tests/react/look.test.tsx` | **24** |
| `tests/react/particle-perspectives.test.tsx` | **21** |
| `tests/react/frame.test.tsx` | **3** |

**Suite: 19 failed · 651 passed · 4 files failed.** ***[K10](#risks) did not fire*** — no file `tsc` named is missing from [the removal ledger](#the-removal-ledger).

***One correction I owe the plan:*** **`frame.test.tsx` is 10 of 11 green, not 11.** *Its single failure is `the frame wraps whichever ancestor view look() selects` — the one promise that names the deleted verb, and it is rewritten in U172 rather than kept.*

***And one site the sweep missed, found by reading rather than by grep:*** **[`molecule.ts:71`](../../../chemistry/package/src/abstraction/molecule.ts) excludes `view` from bond formation and nothing excludes `$view`** — which passes the reactive-name rule, so a bond accessor would be installed over the method. **It is an insertion point for U171, not a removal**, and it is written here because a ledger that only records what it predicted is not a ledger.

### <a id="u169-172-done"></a>U169 · U170 · U171 · U172 · U173 — ***DONE, and they landed as one seam***

*Planned as five units and built as one act, because `lookNameOf` would have been written twice otherwise. **Recorded as it happened rather than as it was planned.***

| | what it is |
|---|---|
| **`$views$`** | a symbol on `$Particle`; the dictionary is built once per instance and held in a module `WeakMap`, keyed by position **and** by name |
| **`looks`** | `/^\$*view$/` in [`symbols.ts`](../../../chemistry/package/src/implementation/symbols.ts) — *the only cycle-free home both `particle.ts` and `molecule.ts` can import* |
| **`@look('name')`** | a third registry in [`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts) beside `inertDecorators` and `reactiveDecorators`, read back up the prototype chain the same way |
| **`$look`** | an ordinary reactive field, added to `molecule.ts`'s `universalProperties` beside `$show` and `$hide` |
| **`$Attributes`** | `look?: number | string`, intersected into `$Properties<T>` — *and `'$view'` joined `'$parent'` in the exclusion, which is all the type needed* |

***THE MOLECULE WAS THE SITE THE SWEEP MISSED, and it needed TWO changes rather than one.*** **`formBonds` excluded the literal string `'view'`; it now tests the series**, so no look is ever bonded over. *And `universalProperties` is where `$look` gets its reactivity — the same list that already existed because `$show` and `$hide` sit above the ceiling property discovery stops at.* **A problem the framework had already solved once.**

***Doug's `chemical.view.view` is `$views$` plus `$look`***, and [`$activeView$` is deleted rather than repurposed](#d90) — *there is no second slot to keep in step, and the view-cache invalidation is now the ordinary reactive write.*

### <a id="the-probes"></a>WATCHED GOING RED — because a suite green on its first run is the one to distrust

***25 promises passed on the first run, which is exactly when the number means nothing.*** **Two probes, each reverted and each confirmed restored by a fresh green:**

| the probe | red |
|---|---|
| ***`frame()` ignores `$look`*** — `table.get(0)` instead of `table.get(this.$look)` | **7 failed** |
| ***`@look` records nothing*** — the registry write removed | **6 failed** |

*A third attempt at the first probe **appeared to pass with the probe still in place** — the restoring `cp` had failed and `&&` swallowed the run. **The number was read before the tree was checked**, which is [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) arriving in a new costume.*

### <a id="the-coverage-i-nearly-lost"></a>The coverage the arithmetic nearly hid

**24 `it(` blocks were deleted and the suite fell by 32.** *The gap is that [`look.test.tsx` ran its whole matrix TWICE](../../../chemistry/package/tests/react/views.test.tsx) — `for (const [root, Leaf, Mid, Base] of [...])`, once for a chain rooted at `$Particle` and once at `$Chemical`* — **and the replacement asserted the `$Particle` case once.**

***Doug asked for rigour, so the doubling is back:*** the selection promises run from both roots. **A count that does not reconcile is a coverage question, not an accounting one.**

> ***VERIFIED, fresh, in the run that claims it:*** **`$Chemistry` 687/687 across 60 files · `tsc` 0.** *From 684/62. **32 promises replaced by 35**, and three suites became one.*

### <a id="k11-fired"></a>***K11 FIRED, and not where the plan pointed*** — U170's decorator meets Babel

***`@look` compiles under `tsc`, under `vitest` (esbuild reads `experimentalDecorators`) and in the rollup `dist` build — and NOT IN ANY APPLICATION.*** **All three vite apps use `@vitejs/plugin-react`, which runs Babel, and Babel does not read `experimentalDecorators`.** *The Lab's dev server said so in as many words the moment a case was converted.*

**The plan named this risk against the bond-constructor's source regex and it arrived somewhere else entirely** — *the parser was never touched; the parse never happened, because the file would not compile.*

***And the gap is OLDER than this sprint.*** **`@inert` and `@reactive` have been public exports of `@dna-platform/chemistry` all along with exactly the same hole**, *and nothing had ever written a decorator in an application, so nobody found out.*

**Closed: `@babel/plugin-proposal-decorators` in `legacy` mode, wired into all three vite configs.** ***Verified where it matters — the BUILT artifact, not the dev server*** — because the requirement was Doug's: *"in a way where we can deploy it to the github pages."*

> ***A correction I owe, and Doug made it:*** **I raised this as a question with four options.** *It was a missing plugin with a known fix — a bug, not a design choice — and offering "would you rather delete the feature?" as an option was the wrong instrument.* **"If you ask me 'hey the code is broken, do you want it that way?' then you will be ineffective."** *Fix it, batch what genuinely blocks, and raise those together.*

### <a id="the-stale-dist"></a>C7's REBUILD CONDITION, arriving as eight checkpoints out of thirty-nine

***The library application drove 8/39 and stalled: "nothing to click for the physics entry."*** **`lib`'s `dist` was dated **August 12** — two weeks old — and the application consumes that `dist`, so it was running OLD `lib` against NEW `$Chemistry`.**

**It cost a wrong diagnosis before it cost the fix.** *I probed `$Document` twice, watched the probe change nothing, and concluded the probe was wrong — when the application had never seen either version of the file.* ***A source probe against a consumer that reads a `dist` is not a probe.***

> ***Rebuilt, and it went to 39/39, 0 console errors — then 39/39 again on the BUILT artifact.*** **[C7](../the-condition-report/07-the-three-codebases.md) says exactly this and [Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md) is the same disease.** *U177 existed because of it; it should have run before the first driver, not after.*

### <a id="the-one-site-tsc-found"></a>THE ONE SITE THE SWEEP MISSED — and `tsc` named it, which is what [D92](#d92) was for

***`lib` itself used the deleted `$view`.*** **[`Document.tsx`](../../package/src/document/Document.tsx)** — `declaration()` harvests a subclass's sections out of its own `view()` (code written in a chapter), then had to **stop re-emitting that declaration** and draw them instead: `this.$view = $Document.prototype.view`. *That is the vertical axis, used by the framework's own consumer.*

**The grep that built [the ledger](#the-removal-ledger) searched for `Perspective`, `reveal`, `look(`, `viewLevel` and `perspectives`. It never searched for `$view`.**

***The series expresses it directly and better:*** **`$Document` declares the inherited drawing as a look of its own, and `declaration()` sets `$look = 1`.** *What was implicit — swap the active view to an ancestor's — is now written down where a reader meets it.*

### <a id="u174-176-done"></a>U174 · U175 · U176 · U177 — ***DONE***

| | |
|---|---|
| **the Lab, three cases** | *sibling subclasses collapsed to one class each.* **Driven: eight look names on the page — `swatch · hex · rgb · hsl · cover · synopsis · reading · links` — every one from a decorator**, and the element case walked `79 Au Gold 196.97` → `79 Au Gold` → `Au` with the far arrow refusing at the bound |
| **the demonstration** | *five sibling subclasses → one `$Sheet` with five looks.* **`the-page.tsx` holds its own name list, by Doug's ruling**, and the chip writes `sheet.$look` — **one instance behind all five drawings** |
| **the chapters** | [Looks](../../../chemistry/.lib/particle/08-perspectives.md) and [The Composition of Looks](../../../chemistry/.lib/particle/09-the-composition-of-perspectives.md) rewritten · the glossary's nine perspective terms replaced · [polymorphism](../../../chemistry/.lib/composition/07-polymorphism.md) · [the particle source book](../../../chemistry/.lib/implementation/01-particle.md) · ***[The Canonical Echo](../the-semantics-of-books/06-the-canonical-echo-and-views.md), in the THEORY book*** — its mapping of the two total views onto `look('up')`/`look('down')` died with the axes and is rewritten against the series, where it fits better · covers updated with the tool in the same act |
| **the rebuild chain** | `$Chemistry` `dist` → `lib` `dist` → both applications, and **every gate re-run against the rebuilt copies** |

### <a id="ae1"></a>THE DEMONSTRATION — driven, on the BUILT artifact

***The test was: could a hand-authored page fake it?*** **Five chips can be faked with five pages. One instance carrying a live edit across all of them cannot.**

| | |
|---|---|
| **AE1** | typed `ZZQQ` into the edit pane, then switched **book → github → night → reading**: ***skin changed every time, `ZZQQ` present every time*** — dev **and** built, 0 console errors |
| **AE2** | `look={1}` and `look="github"` — **byte-identical DOM**, pinned by a promise |
| **AE3** | `look={9}` on three looks raises ***"Nothing stands at look 9 — $Sheet draws 3."*** |
| **AE4** | the frames case — **10 of its 11 promises untouched**, the eleventh rewritten because it named the deleted verb |

### <a id="the-number-i-typed"></a>***THE ONE HARDCODED NUMBER, and it was mine*** — corrected on Doug's challenge

***Doug: "view · \$view · \$\$view — I don't see ... on this. Tell me you hardcoded a number. This is an infinite view system."***

**The runtime never had a limit.** *`deepestLook` finds the deepest run of `$` on the prototype chain and the dictionary builds each member with `'$'.repeat(at)` — there is no cap in the walk, in `frame()`, in `@look`, in `$apply`'s guard, or in `$Properties<T>`, whose exclusion of the series is the unbounded rule `First extends '$'`.*

***But `$Particular` in [`types.ts`](../../../chemistry/package/src/implementation/types.ts) enumerated exactly three and stopped, and I wrote it that way.*** **A type that lists `view`, `$view`, `$$view` teaches a ceiling the code does not have** — which is [the standard this branch judges itself against](../the-condition-report/01-how-to-read-this.md): *every place the code says something the theory does not is a place a reader learns the theory wrong.*

**Corrected: it names the surface that is FIXED — `view`, `frame`, `$look` — and deliberately lists none of the members that are not.** ***Measured: `$$view` now appears ZERO times in the shipped `chemistry.d.ts`.***

**And it is proved rather than asserted, by four new promises:** *twelve looks on one class, each drawing its own number;* ***a class at FORTY looks, drawing the fortieth;*** *ten reached by a chain of ten subclasses each adding one; and the out-of-bounds message counting correctly at depth seven.* **`$Chemistry` 691/691.**

### <a id="the-boundary-i-got-wrong"></a>***THE DEMOS REACHED INTO THE FRAMEWORK, and they should never have***

***Doug: "Are symbols supposed to be used??? NO!!! That's framework stuff… C'mon guys. Assign the look prop."*** **He was right and I should have known.**

*I wrote `this.color[$views$].get(name).call(this.color)` into three Lab cases and the demonstration's page — a symbol-keyed framework dictionary, called from consumer code, to draw one object four ways at once.* **The public surface was sufficient the whole time:**

```tsx
const Color = $(this.color);       // the receiver, held once
<Color look="hex" />               // four of these, one per tile
```

**Four elements of ONE held instance's component, each handed a different `look`.** *Measured: dragging hue 28 → 300 moved **all four tiles together** — `#E98935` → `#E935E9`, `R 233 G 137 B 53` → `R 233 G 53 B 233`.* **One object, four simultaneous looks, no symbol.**

***And this is the strongest evidence the design is right that the sprint produced.*** **A framework whose own showcase has to open its internal dictionary is leaking.** *This one did not — and the demos got shorter.*

**Two further rulings came with it**, both taken:

- ***The chooser lives OUTSIDE.*** *"There should be an outside container controlling the UI that allows you to select different ones."* **The container holds `showing` and hands `look` in as a prop; nothing writes `$look` on somebody else's chemical.**
- ***The names are a TYPE, declared by the consumer.*** *"Expose a type called `$WhateverViews`… You can probably retype `$look` to be `$WhateverViews | number`."* **Done in all four: `$ColorViews`, `$BookViews`, `$CellViews`, `$SheetViews`, each narrowing its own class's `$look`.** *Nothing entered the framework — `$Particle` keeps `number | string`.* ***Watched biting: `showing: $ColorViews = 'sepia'` gives `Type '"sepia"' is not assignable to type '$ColorViews'`.***

### <a id="no-order"></a>***THE INDEX CARRIES NO ORDER*** — a claim in the chapter, refuted by Doug and then measured

***I wrote that `view` is "how the thing shows itself unprompted" and that each `$` is "one more step" from it. Both are false.***

***Doug: "there is a default view, and clearly it doesn't show itself at all. It contains all its views and no opinion on what it looks like… `$$$$$` is just an index and places no meaningful ordering. In the demos, does it matter if you changed the order? No right?"***

**Measured rather than conceded:** *`hex` moved from position 1 to position 3 and `hsl` from 3 to 1, each `@look` kept on its own body.* ***The page came back BYTE-IDENTICAL.***

**So the corrected account, now in [the chapter](../../../chemistry/.lib/particle/08-perspectives.md):** *there is **no canonical face**; `view` is simply the member with no `$` in front of it. The `$`s are an **index**, existing so several members can share one base name — no rank, no distance, no progression.* **The object contributes the possibility space and nothing else: the decorator supplies the name, the container supplies the choice.**

*One thing flagged rather than settled: **the gap check is the only place the implementation asserts an ordering.** It refuses `view` + `$$view` with no `$view`. Since the index carries no order, a hole is not a broken sequence — it is almost certainly a typo, which is why the check earns its place — **but if a skipped name should simply be an absent look, it comes out.***

## <a id="the-defect-i-did-not-cause"></a>A DEFECT FOUND, PROVED PRE-EXISTING, AND NOT FIXED HERE

***The BUILT demonstration logs `$Chemistry: Bond Constructor Failed — Error:` five times, with an EMPTY message, after checkpoint 7. Dev is silent.***

**The asymmetry is one line:** [`chemical.ts:269`](../../../chemistry/package/src/abstraction/chemical.ts) logs `console.error` **only when `dev` is false**; in dev the same failure renders a panel instead. *So the failure has been happening in both all along and only the built form said so.*

***Proved not mine, and proved rather than argued:*** **the whole sprint was stashed, all three `dist`s rebuilt at `HEAD`, the demonstration built and driven — same error, same checkpoint, same count of five.** *It is not minification either: an unminified build shows it too.*

**Nobody had ever driven the built demonstration.** *[Sprint 22 drove dev](22-working-well-by-default.md), and `verify-demo` against a built artifact appears never to have been run at all.* ***It is a defect, it belongs in [Solutions](../solutions/.cover.md) indexed by its symptom, and it is [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md)'s to file — not this sprint's to fix.***

---

# Where things stand

*Written 2026-08-25, at the close of the brainstorm and the plan; the build ledger above is appended as work lands.*

## → THE NEXT ACTION

> ### `/ce-brainstorm` — ***the `$` container extension***

***BUILT, VERIFIED, DRIVEN, REVIEWED IN THE ROOM AND COMPOUNDED.*** **Nothing is half-built and no gate is red.** *The `$` extension was the second half of Doug's original ask and he set it aside — **"We'll do `$` after."** It is now next.*

## <a id="what-this-means"></a>WHAT THIS MEANS — *keep this across compaction*

***Doug asked for this to be written down and kept, so it is here rather than only in a discussion.***

**A class used to have ONE drawing.** Wanting a different one meant subclassing and overriding `view`, and then the original was gone for that subclass. So *how a thing looks by default* was a single decision you could only replace — never add to.

**Now a class carries several complete drawings at once**, and a subclass adds one without destroying the others, or replaces one without touching the rest.

> ***So a default view becomes a CHOICE rather than a FACT, and there can be more than one.*** **Doug, at the retro: *"we are implementing this in preparation for choosing the default view, and we needed something polymorphic, and now we can have multiple default views and I think that is cool."*** *That is what this was built for, and the library framework is where it will be spent.*

**And the choosing is polymorphic** — a container asks for a look, and a subclass can change what that look draws for its own instances at the same asking. *Same call site, different drawing by runtime type: polymorphism applied, for once, to what a thing **looks like** rather than to what it does.*

**The object holds its drawings and has no opinion about which is used.** There is no canonical face; `view` is simply the member with no `$`. **The numbers are an index, not a rank** — permuting two drawings gave a byte-identical page. The decorator supplies the name, the container supplies the choice, and *the object supplies only what is possible.*

***One claim was made and then corrected, and the correction is the leading reading.*** *A first draft called the absence of a shared cross-class vocabulary of look-names a gap.* **Doug: *"Views are specific to the class. Yes we can build a shared vocabulary, but we can also implement a coordinator if need be that makes sure everything is in sync."*** *An object whose job is keeping a region agreeing is simpler than a vocabulary every class must answer to.* ***Raised, not decided*** — and it is the question the `$` sprint will meet.

*The fuller account, in plain words and without jargon, is [The Composition of Looks](../../../chemistry/.lib/particle/09-the-composition-of-perspectives.md#what-it-is-for).*

## Said plainly, for whoever is not tracking identifiers

**A chemical declares `view`, `$view`, `$$view` — one member per way of being seen, as many as it wants.** Every instance holds a dictionary of them keyed by position *and* by the name `@look` gave, and one JSX attribute chooses: `<Sheet look={2}/>` or `<Sheet look="night"/>`.

**It replaced something much larger** — two orthogonal perspective axes, a `Perspective` class, five framework symbols and a hand-built scope-tracked cursor — and the cursor turned out to be a reimplementation of the ordinary bond setter, line for line.

**Nothing on any screen changed.** The Lab's three cases and the demonstration's five lenses draw exactly what they drew.

## Rulings Doug made this session, verbatim

> **"We are completely removing perspectives."**
>
> **"They can't coexist!! We are using `$i` in chemistry."** — *superseded within the session by the rename to `look`, which is why `lib` does not move*
>
> **"Have the prop called `$look` instead of `$i`. `<Chemical look=2/>`. That's cool."**
>
> **"We have an attribute system. Can you plug into it so look is `look?: number | string`?"**
>
> **"Use an `@` attribute… Find that machinery and tell me if you can't, and if you can, use it to add this attribute."** — ***found: [`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts)'s decorator registries, with prototype-chain fallback and `experimentalDecorators` already on in both packages***
>
> **"It shouldn't be too heavy. It is just assigning a view."**
>
> **"Queenie will need to test this rigorously."**
>
> **"We'll do `$` after."**

## Verified — every gate, run against the REBUILT working copy at this close

*Not recalled. Every number below came from a run in the message that claimed it, after the whole `dist` chain was rebuilt.*

| | | before |
|---|---|---|
| **`$Chemistry`** | ***687/687*** across 60 files · `tsc` **0** | *684/684 across 62* |
| **`lib`** | ***352/352*** across 32 files · `tsc` **0** | *352/352* |
| **the demonstration** | 80 files typechecked, **0 unexpected** · driven ***92 checkpoints*** (31 + 61) | *80 files, 0 unexpected · 92* |
| **the public library** | 38 files typechecked, **0 unexpected** · driven ***39/39, 0 console errors*** — ***and 39/39 again on the BUILT artifact*** | *38 files · 39/39* |
| **the compiler** | ***43/43*** · walk **29/29** · resolve+emit **37/37** · ***CHECK 7/7*** — 34 chapters, 60 sections, 172 paragraphs, 312 sentences, 2,359 words, 17,240 letters | ***identical*** |
| **the Lab's typecheck** | 18 errors, **all pre-existing**, all in three `case.styled.ts` files, ***none in a converted case*** | *18, and in no gate* |

**Promise accounting:** *three suites removed (**32 promises**, because `look.test.tsx` ran its whole matrix over both a `$Particle`-rooted and a `$Chemical`-rooted chain) and one written (**35**).* **`frame.test.tsx` kept 10 of its 11 and had the eleventh rewritten.**

## Blockers

**None.** ***Two things are named rather than open:***

- **[R164's bounds behaviour](#r164)** — throwing was chosen as the house form, and the ruling that decided it predates the rename from `$i` to `look`. *Cheapest thing in the sprint to reverse.*
- **[The pre-existing bond-constructor error on the built demonstration](#the-defect-i-did-not-cause)** — proved not this sprint's, and [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md)'s to file.

## <a id="proxies"></a>Names standing for Doug's correction

*[Never self-named](../../../../.claude/library/..teamsmanship/.cover.md); each of these is a proxy, and the work is done under it.*

| | |
|---|---|
| **"The Look"** | *this sprint's title, taken from the surface Doug named* |
| **"Looks"** | *the chapter titles, from `look` and `@look`. **The FILES are still `08-perspectives.md` and `09-the-composition-of-perspectives.md`**, and the Lab's section is still routed and titled `Perspectives` — renaming either ripples through links and a bookmarked route, and **the word is Doug's call*** |
| **`$views$` · `looks` · `deepestLook` · `missingLook` · `$Attributes`** | *the internal names; `$views$` and `@look` are Doug's own, the rest are mine and stand for correction* |

## How to see it

| | |
|---|---|
| **the demonstration** | `npm run dev` in [`library/.public/package`](../../package/) → **http://localhost:5199/page** — *the five chips, the edit pane, and AE1* |
| **the Lab** | `npx vite app --port 4000` in [`library/chemistry/package`](../../../chemistry/package/) → `/perspectives` and `/frames` |
| **driving them** | `npm run verify` in the package — 92 checkpoints · `npm run drive` in the app — 39. **Start the server yourself first**, and *a short count is a stall rather than a number* |

## <a id="compounded"></a>What was compounded

**One lesson, and it was an EDIT rather than a chapter** — [The suite that passed against a stale build](../solutions/05-the-suite-that-passed-against-a-stale-build.md) gains a third form: ***the probe that proved nothing***, because the application resolves `lib` through `node_modules` to a `dist` two weeks old and never read the edited source. *A probe that changes nothing means the suspect was innocent **or** the probe never landed, and from outside those are identical.*

**And the chapter was compacted in the same pass: 8,664 words → 6,132.** *The requirements and units became registers keeping every identifier and anchor; the scenarios, the order, the risks and the trace became stubs saying what stood there. The [build ledger](#the-build-ledger) is untouched — it is the record rather than the plan.*

## Wrong turns already taken — do not retry these

| | |
|---|---|
| ***REACHING INTO `$views$` FROM DEMO CODE*** | *a framework symbol has no business in a consumer.* **Assign the `look` prop; the container owns the selection** — [the boundary I got wrong](#the-boundary-i-got-wrong) |
| ***Reading the `$` prefixes as an ORDER*** | *they are an index so several members can share one base name.* **Permuting two drawings gives a byte-identical page** — [measured](#no-order) |
| ***Probing SOURCE to test a consumer that reads a `dist`*** | *the probe never lands, and a probe that changes nothing looks exactly like an innocent suspect* — [filed](../solutions/05-the-suite-that-passed-against-a-stale-build.md) |
| ***`$i` as the selector*** | *it is [`$Location`](../../package/src/reference/Location.tsx)'s, at 6 sites and 3 call sites — [D87](#d87)* |
| ***A `#private` field for the view cursor*** | *it crashed on template derivatives, whose prototype chain does not carry the slot. **`$look` is an ordinary reactive field and must stay one*** |
| ***Deleting a drawing before somebody has seen the page without it*** | [last sprint's own correction](22-working-well-by-default.md#the-shelf-i-should-not-have-deleted) |
| ***Building `lib` against a stale `$Chemistry` `dist`*** | [filed](../solutions/05-the-suite-that-passed-against-a-stale-build.md) — *U177 exists because of it* |
