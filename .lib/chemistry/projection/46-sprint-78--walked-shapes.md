# Walked Shapes

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/the-coding-style/03-the-coding-style.md)
- **status:** `closed` — *read, ruled, built, measured and committed 2026-09-22, in one session.*
- ***The chapter name and the sprint number are PROXIES.*** *The number is the team's current one — the public redraft's [Sprint 78](../../../..public/.lib/projection/.cover.md), whose defect this answered — and `walked` is the word Doug used in the room, not a name he has given.*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

> **"We have a bug with working with sets in the view. /catchup on state management in $Chemistry, and particularly how the snapshots work and how the system decided to call rerender or not."** *"We need to solve this but may need to solve a more general problem."*

**Then, once the mechanism was on the table:** ***"It's a set, modified in an idempotent way in the view. Should not change the snapshot but it does."*** *And on the line between the framework and the design:* **"I am fixing the non-idempotent part of the bug. We need to handle the set part. Yes there are other issues but one is a .public design issue."** *"Don't spiral on this. Please halt when it's solved or you conclude it needs a sophisticated solution and you need my feedback first."*

## <a id="the-literature"></a>What was read first

**Thirty-seven documents, grep-guided from the symptom's own words, before a line was designed.** *The load-bearing ones:* the [Reactivity](../reactivity/.cover.md) book whole, [`scope.ts`](../../package/src/implementation/scope.ts), [`reconcile.ts`](../../package/src/implementation/reconcile.ts), [`bond.ts`](../../package/src/abstraction/bond.ts) and [`reaction.ts`](../../package/src/abstraction/reaction.ts), [`particle.ts`](../../package/src/abstraction/particle.ts) where the render flag is raised, [the three passes](../particle/12-the-three-passes.md), [the reactivity contract](../authorship/04-the-reactivity-contract.md), the public branch's [Solutions 29](../../../.public/.lib/solutions/29-the-bond-that-woke-the-tree-it-was-building.md) and [53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md) — *two earlier attempts to widen the setter's silence, both built, both correctly changing nothing* — and the Sprint 78 session's own report of the symptom, which had already read the mechanism off the framework.

***What the reading corrected, each with its source.*** **[Reactive properties](../reactivity/01-reactive-properties.md#a-write-is-news-by-value) said a Map, a Set and a Date "compare by content" under `equivalent`; git holds no commit that ever put a Set case in `reconcile.ts`.** *The chapter over-claimed on 2026-08-27 and the sentence stood false for four weeks — the [cover/chapter gap](../../../../.claude/library/bookkeeping/03-on-covers.md), one layer down.* **[Diffuse](../reactivity/05-diffuse.md) and [cross-chemical writes](../reactivity/03-cross-chemical-writes.md) walked a `$derivatives$` set behind an ownership gate; the source walks `$$parent$$` and has no gate.** **[Scope tracking](../reactivity/02-scope-tracking.md) and [collection mutation](../reactivity/04-collection-mutation.md) were stubs citing `$symbolize`, which the scope had not used since `snapshot()` replaced it.** *And [the three passes](../particle/12-the-three-passes.md#found-on-the-way) had listed this exact defect on 2026-09-08 with the reason it never fired — "no scope is live during a render" — which was true until Sprint 78 stood one.*

## <a id="the-mechanism"></a>The mechanism, read from the source

| | |
|---|---|
| **the copy** | [`snapshot()`](../../package/src/implementation/scope.ts) cloned a `Map`, a `Set` and a `Date` by content at every scope read — deliberately, so an in-place `add` could be seen with the reference unchanged |
| **the comparison** | [`equivalent()`](../../package/src/implementation/reconcile.ts) refused every prototype that was not `Object.prototype` — so a walked collection never equalled anything but itself: not its own snapshot at `finalize`, not a fresh equal one at the setter, not a fresh equal one handed as a prop at the settle pass |
| **the consequence** | every scope that so much as READ a Set was dirty at `finalize`; a fresh equal Set assigned was news; a fresh equal Set handed as a prop looped through the [settle pass](../particle/12-the-three-passes.md#pass-c) without end |
| **why it never fired** | `withScope` has three call sites, all in `$Reagent.form()`, and a reagent whose OWN chemical is drawing or still in `'setup'` opens none ([`bond.ts:270`](../../package/src/abstraction/bond.ts)) — so nothing on the render path ever compared a snapshot |
| **why it fired now** | the redraft's `$Writing` calls `define()` from its view, which clears its Set of classes and lets each annotation's `defines(writing)` add to it. `define` is the writing's own reagent and opens no scope. `defines` is the ANNOTATION's reagent: in `'setup'` at first paint, so quiet, and mounted by the settle pass, so from then on it opens a scope, reads the writing's Set, adds, and at `finalize` finds it not equivalent to its snapshot and calls `react()` on a writing mid-draw. React's `renderWithHooksAgain`, "Too many re-renders" — measured by running the session's reproduction as written, four promises red |

***The setter is walled against exactly that at [`bond.ts:220`](../../package/src/abstraction/bond.ts) — a write during the chemical's own draw is construction, not news. The scope's `finalize` has no such wall.*** *That is the more general problem Doug sensed, and it was put to him as one.*

***Found on the way, confirmed by reading and not by the other session's word:*** **`@inert()` and `@reactive()` had never been consulted.** *[`bond.ts:21`](../../package/src/abstraction/bond.ts) read the base marker with `chemical?.[$isChemicalBase$]`, which every chemical inherits from `$Particle.prototype` ([`particle.ts:301`](../../package/src/abstraction/particle.ts)), so the walk stopped at its first step for everything and answered `undefined`; the molecule's own walk at [`molecule.ts:100`](../../package/src/abstraction/molecule.ts) had always asked with `Object.hasOwn`. And `reactive` returned early for every `isSpecial` name before asking, the half [the three passes](../particle/12-the-three-passes.md#found-on-the-way) had found. The suite held no promise about either.*

## <a id="the-rulings"></a>The rulings — three built, one refused

| | Doug | built |
|---|---|---|
| **walked shapes equal** | *"Then that is the bug — calling walked sets equal."* | a `Map`, a `Set` and a `Date` compare by content |
| **one list** | *chose "one shared list of walked shapes" over three cases added to `equivalent` alone* | `snapshot()` moved beside `equivalent()` and both read one list, so they cannot disagree again |
| **decorators** | *chose "fix now, with promises" over recording it as owed or deleting them* | one walk, `Object.hasOwn` at the stop, no early return for `$`-names |
| ***the wall — REFUSED*** | ***"I am fixing the non-idempotent part of the bug… one is a .public design issue."*** | **nothing.** *The scope does not adopt the setter's during-a-draw rule. A design that changes state under a draw is answered by [the contract](../authorship/04-the-reactivity-contract.md) — views must be pure — not by the framework absorbing it; and with equality honest, a pass that ends where it began is quiet, which is the shape Doug's design takes.* |

## <a id="what-was-built"></a>What was built

**[`reconcile.ts`](../../package/src/implementation/reconcile.ts)** — *the list.* `walked`: an array, a `Map`, a `Set`, a `Date`, a plain object, each entry saying how to recognise one, copy one, and call two the same. Everything else that is an object is held by reference; the class owns its equivalence. `snapshot()` is the list's copy, `equivalent()` its comparison after `===`, the function case and the element case. **A Set member that is itself walked was copied into the snapshot and cannot be found by `has`; it is found by content, one scan per such member** — *stated as a cost, not hidden.*

**[`scope.ts`](../../package/src/implementation/scope.ts)** — imports `snapshot` from beside `equivalent`; its own copy is gone.

**[`bond.ts`](../../package/src/abstraction/bond.ts)** — `decorated(registry, chemical, property)`: from the instance up the chain, stopping at the prototype that OWNS the base marker, true where a registry holds the name. `$Reflection.reactive` asks the name's default, then the decoration.

**Promises, red before and green after, ten:** [`walked-collections.test.tsx`](../../package/tests/react/walked-collections.test.tsx) — *a handler that only reads a Set draws nothing · a Set cleared and refilled with the same members is not news · a Map read is quiet and a Map written wakes · a Date read is quiet · a fresh equal Set assigned is not news · a fresh equal Set handed as a prop settles, bounded so a red run reports rather than hangs.* [`decorators.test.tsx`](../../package/tests/abstraction/decorators.test.tsx) — *`@reactive()` wakes an underscore field · `@inert()` stills a bare field · and a `$`-lowercase one · a parent's decoration holds in a subclass that decorates another member.*

**Chapters, tended in the same act:** [reactive properties](../reactivity/01-reactive-properties.md#a-write-is-news-by-value) carries the dated correction; [scope tracking](../reactivity/02-scope-tracking.md), [collection mutation](../reactivity/04-collection-mutation.md), [diffuse](../reactivity/05-diffuse.md) and [decorators](../reactivity/06-decorators.md) are written from the source; [cross-chemical writes](../reactivity/03-cross-chemical-writes.md) and [the glossary](../reactivity/07-glossary.md) drop the mechanism that was never there; [scope.ts](../implementation/08-scope.md) says where `snapshot` went; [the three passes](../particle/12-the-three-passes.md#found-on-the-way) closes its two rows.

## <a id="measured"></a>What was measured

| | before | after |
|---|---|---|
| the ten promises | **10 red** — *`expected 2 to be +0` on every read, `expected '1' to be '0'` on every decorator, `the settle pass never settles` on the prop* | **10 green** |
| the chemistry suite | 913 of 913 | **923 of 923**, 74 files |
| `tsc --noEmit` | 0 | **0** |
| `dist` | — | **rebuilt with `rollup -c`**; the public package resolves `@dna-platform/chemistry` through the workspace link to `dist/chemistry.cjs`, so nothing reaches it unbuilt |
| the Sprint 78 reproduction, run as the session wrote it | **4 red**, "Too many re-renders" | **4 green** — *against the built dist AND their working tree, which had grown from 25 promises to 28 between the runs; which half closed it is not claimed* |
| the branch library | — | validator 0 errors over 9 books, 72 chapters; 203 links checked in the edited chapters, three pre-existing shallow paths in reactive properties fixed |

## <a id="learned"></a>What was learned

- ***A first-paint that is quiet and a settle pass that loops is the signature of a reagent whose chemical mounted between them.*** *The no-scope branch keys on the reagent's OWN chemical — drawing or `'setup'` — never on whoever is drawing.*
- ***The library claimed the fix for four weeks.*** *A sentence written the day the setter went by-value described the equality that `snapshot` implied rather than the one `reconcile.ts` had. The [catchup](../../../../.claude/library/our-skillset/34-catchup.md) that re-read the book against the source is what caught it; a catchup from memory would have repeated it.*
- ***Chemistry's job ended at honest equality.*** *The general problem — a scope closing during the draw of a chemical it dirtied — was found, stated and put to Doug, and he placed it on the design side. Two earlier sessions had widened the setter's silence for a symptom that was not reactivity ([Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md)); a third widening was not built.*
- ***A second defect surfaced and was ruled the design's.*** *A derivative's backing store is `Object.create` of its template's ([`bond.ts:177-185`](../../package/src/abstraction/bond.ts)), so a collection set by a field initializer is ONE object across every mount until something assigns it. Four shapes were put to Doug — copy on first read, copy at derive, run the initializer per derivative, or the design assigns. His ruling:* **"Well yeah, we shouldn't be futzing with object internals. This can't be getting and setting from a static set. If it needs to be reset at bond construction, they do it."** *A writing that wants a per-mount Set assigns one in its bond constructor, where a write to oneself is construction and wakes nobody.*

## <a id="accessors"></a>And accessors, the same afternoon — a declared get/set is reactive

> **"A gettable / settable property — can this be reactive? It needs to be. This is way of simplifying a complex thing and making it reactive. Gettable properties alone should be reactive I think. Where did we get out of whack."** — Doug

***Read first, twenty-one documents:*** *the bond's `form()`, the suite's promises about getters, the bond chapter, git for when a wrapper was last there, the legacy bond book, Sprint 18's plan, and the redraft's `get $is` / `set $is` with its two red promises, sent over as evidence.* **Found:** *never wrapped since the Sprint 18 rebuild; the accessor flags crossed as reflection, the legacy snapshot's read-through-getter did not. A getter was live only by transparency and a setter recorded nothing.*

**Three rulings, and the third reframed the first two:** *wrap get and set and snapshot the result; the thing proxied to does not matter — "The key is that there is a get / set property that proxies to anywhere. You know it exists. It should be reactive."; and no rule change — "It's not a rule change! These things should always have been reactive. They are props right? get $prop / set $prop… This is a bug not a feature."*

**Built:** *[`wrap`](../../package/src/abstraction/bond.ts) in `form()` and `double()`, the wrapper non-enumerable and carrying the declared accessor under `$original$`; `finalize` re-reads a property with no backing entry through the property; the styled compiler's `declared` and the facade walk's `facadesOf` skip a wrapper among the own names they scan.* **Measured:** *six promises, four red then six green; suite **929 of 929**; tsc **0**; dist rebuilt.* **Wrong turns, mine, so nobody retries them:** *an enumerable wrapper, which the styled compiler met as a field at compile time; a promise that wrote a prop from outside while the parent kept giving it, which `$apply` re-applies on every draw; and a face reading its template's shared `Papers`, which is this morning's ruling — made in the bond constructor.* **Commit `2ffbe4c`.**

## <a id="stand"></a>Where things stand

**Complete.** *Project commits `6881920` — `reconcile.ts`, `scope.ts`, `bond.ts`, the two promise files — and `2ffbe4c` — the accessor bond in `bond.ts`, `scope.ts`, `chemical.ts`, `styled.ts`, and `accessors.test.tsx`. The branch library mirrored to the identity branch `inexplicable-phenomena` locally, not pushed, with this chapter following. The public redraft's session was told twice: the landing with its measurements, and the ruling on the second defect.*

**Owed, small:** *one line in the particle book's derive chapter saying a derivative's backing store chains to its template's, so an unassigned collection is shared across mounts until the bond constructor assigns it.*

**New names, all proxies for Doug:** `walked` and the `Walked` type, `shapeOf`, `holds`, `decorated`.
