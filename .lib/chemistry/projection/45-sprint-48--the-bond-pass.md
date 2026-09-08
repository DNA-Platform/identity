# The Bond Pass

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*
- **status:** `requirements-only` — *re-aimed 2026-09-08 at ONE RENDER, with the wiki as the canonical case; the bond-pass units below are the mechanism it will use.*
- **was:** `implementation-ready` — *except [U2](#u2), which is **design owed** and marked so.*
- ***The chapter name and the sprint number are PROXIES; Doug's to rename.***
- ***THIS SPRINT CHANGES `$Chemistry`, against the standing ruling.*** *Doug sent this session at it directly, 2026-09-07; the exception is recorded [below](#the-exception) and belongs in the commit message.*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

> ***"I want efficiency in the update. The bond constructor is understood to mutate the local object graph. It should not trigger updates until after react processes something. Otherwise we require a proof of idempotency that is uncalled for. WE can do a forward only pass through the bond constructors of a connected tree. Ist here a way? We need to follow promises and we need to make more to codify this. It should prevent loops too."***

> ***And on the fix this chapter first proposed:*** **"`$(undefined)` — but this should be blocked by type…"**

> ***And on the promises:*** **"Review the promises carefully. I want you to see if you have the semantics right. Sometimes you test the code not the need."**

| | the requirement | lands in |
|---|---|---|
| **R1** | a bond constructor's writes do not trigger updates **during the pass** | [U3](#u3) |
| **R2** | **no idempotency proof** is required of a bond constructor | [U3](#u3), [U7](#u7) |
| **R3** | a **forward-only pass** through the bond constructors of a connected tree | [U2](#u2), [U4](#u4) |
| **R4** | it **prevents loops** | [U4](#u4) |
| **R5** | **promises followed, and more made** to codify it | [U5](#u5) |
| **R6** | *and, from the same instruction:* **the other sessions stop being blocked** | [U1](#u1), [U1b](#u1b) |
| **R7** | ***a state the type forbids is never constructed*** | [U1](#u1), [U1b](#u1b) |

## <a id="one-render"></a>THE SPRINT IS ONE RENDER — requirements, 2026-09-08

> ***Doug:*** **"public is loading 3 times. It is rendering three times before it settles. It is non-reactive. It has to be once."**
>
> ***And how to attack it:*** **"I would solve this problem using the wiki as the canonical thing to get to one render, fixing $Chemistry but tweaking it too if needed slightly."**

***MEASURED THE SAME DAY, PER INSTANCE — and the shape of it is the finding.*** *Counted at BOTH view call sites in [`particle.ts`](../../package/src/abstraction/particle.ts) — the render body at `529` and the settle effect at `509` — keyed by OBJECT IDENTITY and stamped with whether the view cache was already set, so each pass names itself rather than being inferred; probe added and removed in one command.*

| | `/article` | `/` | `/turing` |
|---|---|---|---|
| instances | **788** | **673** | **1,032** |
| view passes | **2,364** | **2,019** | **3,096** |
| ***per instance*** | ***exactly 3*** | ***exactly 3*** | ***exactly 3*** |
| **the signature, every instance** | `B-B+C+` | `B-B+C+` | `B-B+C+` |

> ***EVERY INSTANCE ON EVERY ROUTE DREW THREE TIMES, AND NOT ONE DREW FEWER.*** **Doug's sentence was exact, per instance and uniformly** — *"It is rendering three times before it settles."* **No variance and no distribution: a systematic TRIPLING, not a cascade and not a settling storm.**
>
> ***AND A FIRST COUNT SAID TWO. IT WAS WRONG, AND THE WAY IT WAS WRONG IS WORTH KEEPING.*** *It missed the discarded body pass entirely, because a count keyed by `cid` cannot separate the two body passes — **they share an instance, a cid and a call site**, and differ only in whether the cache is set.* **Session `inexplicable-phenomena-0a` reported three and named the discriminator that settles it: record whether `$viewCache# The Bond Pass

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*
- **status:** `requirements-only` — *re-aimed 2026-09-08 at ONE RENDER, with the wiki as the canonical case; the bond-pass units below are the mechanism it will use.*
- **was:** `implementation-ready` — *except [U2](#u2), which is **design owed** and marked so.*
- ***The chapter name and the sprint number are PROXIES; Doug's to rename.***
- ***THIS SPRINT CHANGES `$Chemistry`, against the standing ruling.*** *Doug sent this session at it directly, 2026-09-07; the exception is recorded [below](#the-exception) and belongs in the commit message.*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

> ***"I want efficiency in the update. The bond constructor is understood to mutate the local object graph. It should not trigger updates until after react processes something. Otherwise we require a proof of idempotency that is uncalled for. WE can do a forward only pass through the bond constructors of a connected tree. Ist here a way? We need to follow promises and we need to make more to codify this. It should prevent loops too."***

> ***And on the fix this chapter first proposed:*** **"`$(undefined)` — but this should be blocked by type…"**

> ***And on the promises:*** **"Review the promises carefully. I want you to see if you have the semantics right. Sometimes you test the code not the need."**

| | the requirement | lands in |
|---|---|---|
| **R1** | a bond constructor's writes do not trigger updates **during the pass** | [U3](#u3) |
| **R2** | **no idempotency proof** is required of a bond constructor | [U3](#u3), [U7](#u7) |
| **R3** | a **forward-only pass** through the bond constructors of a connected tree | [U2](#u2), [U4](#u4) |
| **R4** | it **prevents loops** | [U4](#u4) |
| **R5** | **promises followed, and more made** to codify it | [U5](#u5) |
| **R6** | *and, from the same instruction:* **the other sessions stop being blocked** | [U1](#u1), [U1b](#u1b) |
| **R7** | ***a state the type forbids is never constructed*** | [U1](#u1), [U1b](#u1b) |

## <a id="one-render"></a>THE SPRINT IS ONE RENDER — requirements, 2026-09-08

> ***Doug:*** **"public is loading 3 times. It is rendering three times before it settles. It is non-reactive. It has to be once."**
>
> ***And how to attack it:*** **"I would solve this problem using the wiki as the canonical thing to get to one render, fixing $Chemistry but tweaking it too if needed slightly."**

 is undefined at each call, bucketed by ordinal.** *Re-measured their way, the answer is theirs, on all three routes.*
>
> ***A FIRST ATTEMPT COUNTED PER CLASS and was wrong***: `$Block` 304, `$AnchorFormat` 186. **Doug threw it out in one line — *"You have instances and sequences confused. There are tons of elements on a page."*** *304 blocks drawing once each is a page with 304 blocks, not a defect. The per-class number measures the document; only the per-instance one measures the framework.*

***AND PER BOOK, WHICH IS THE QUESTION THAT MATTERS MOST.*** **Doug: *"Per instance is one measure, but per book too. We want to know why top level ones are ever rerendering."***

**They are not — beyond the tripling everything shares.** *`$Article` drew **3**, exactly like all 788, and the distribution holds **one entry** — `B-B+C+`, 788 times.* ***So no ancestor is waking because a descendant moved; there is no cascade on load at all.*** **The top of the page pays the same two universal wasted passes as the bottom, and nothing else.**

> ***What is NOT yet measured is an INTERACTION.*** *A probe that typed into the portal's search counted **zero** redraws, which measures the probe rather than the framework — a synthetic input event that never reached a chemical proves nothing. **The interaction case is open**, and it is where a cascade would show if there is one.*

## <a id="redundant"></a>THE SETTLE PASS IS REDUNDANT, AND IT IS PROVEN

> ***Doug:*** **"definitely know if rendering is redundant. That is the most serious kind of bug."**

***Instrumented at the diff itself — how often the change-detection pass finds a change:***

| page | checked | ***changed*** |
|---|---|---|
| `/article` | 788 | ***0*** |
| `/` | 673 | ***0*** |

> ***1,461 CHECKS ACROSS TWO PAGES AND NOT ONE CHANGE.*** **Every settle draw produced output identical to the cache it was compared against.** *One full third of all view work on the demo is a pass that has never once found anything — and it is the third that is hardest to remove, because [it legitimately sees a longer lineage than the render pass does](#the-governing-rule).*

***THE OTHER WASTED THIRD NEEDS NO DIFF TO CONDEMN IT.*** **`B-` is discarded by React itself**, *by construction, on every instance, because the render body calls a state setter.* **Nothing compares it to anything; it is simply thrown away.** *So of three passes, ONE reaches the screen — one is proven redundant by measurement, and one is redundant by definition.*

***AND DOUG'S RULING MAKES IT REDUNDANT BY CONSTRUCTION rather than by luck:*** **"I am willing to say that calling view should never mutate and that's what bond construction is for, come what may."** *A view that cannot mutate cannot produce a different answer a second time — so the pass that looks for one has nothing to look for. **The zero above is not a lucky page; it is what the ruling guarantees.***

*The pass exists to catch a view whose output moved because the view itself moved something. Ban that, and the catcher is dead weight — which is [R15](#the-governing-rule) arriving from the other direction.*

***AND ALL THREE PASSES HAVE NAMES. EXACTLY ONE OF THEM REACHES THE SCREEN.***

| | where | what it is |
|---|---|---|
| **`B-`** | the render body, [`particle.ts:529`](../../package/src/abstraction/particle.ts) | ***React throws it away.*** *[`particle.ts:414`](../../package/src/abstraction/particle.ts) declares `useState(-1)` and [`particle.ts:455`](../../package/src/abstraction/particle.ts) calls `setCid` **inside the render body** — a render-phase state update, so React discards the pass it is in and re-invokes immediately, before committing.* **The DRAWING is binned; every side effect on the chemical survives — including the bond constructor, which therefore runs twice** |
| **`B+`** | the render body again | ***the one that reaches the screen*** |
| **`C+`** | the settle effect, [`particle.ts:509`](../../package/src/abstraction/particle.ts) | *a `useEffect` with **no dependency array** that draws again on every commit and diffs the result against the cache* |

**Session `inexplicable-phenomena-ad` reached the settle effect independently with a no-write control: a page whose bonds write nothing still shows the extra views**, which rules reactivity out as the cause — *and `0a` measured `$Reaction.react()` at **zero** on all three pages, which says the same thing from the other side.*

> ***SO TWO THIRDS OF ALL VIEW WORK ON THE DEMO IS WASTE, AND BOTH THIRDS ARE NAMED.*** *One is discarded by React by construction; the other has never once found a change.*

### <a id="the-shape"></a>Doug's design, in his words

> **"Suppose, in an event loop — because render would likely have to happen after, or at least in whatever unit the structure sent for UI update happens — we call bond constructors, then we call view."**
>
> **"We need reactivity on for other chemicals but off for the current one in bond construction."**
>
> **"view shouldn't be mutating. We should ignore mutation in it entirely."**
>
> **"The dirty flag isn't started until view is called. Bond construction to view is free I think."**
>
> **"There's props and there's bond construction — yes, we need to handle the nuance of the difference."**

### <a id="requirements"></a>The requirements

*Numbered from R8 — [R1 to R7](#the-requirement) are the bond-pass requirements this sprint inherits, and an identifier is never reused.*

| | the requirement | what would be OBSERVED |
|---|---|---|
| **R8** | ***A chemical draws ONCE per change.*** *One pass per chemical per thing that actually moved — not per ancestor's repaint, not per settling round* | **the view-pass count on `/article`**, taken the same way as the 2,364 above |
| **R9** | ***Bond construction is free*** — *an instance of [R15](#the-governing-rule) rather than a rule of its own.* *Between a bond constructor and the view that follows it, a write to the chemical BEING BUILT wakes nothing — the dirty flag does not start until `view()` is called* | *a bond constructor that writes to itself costs no extra pass; today it is the [measured](#the-mechanism) `duringBond=2`* |
| **R10** | ***But a write to ANOTHER chemical still reacts.*** *Reactivity is off for the one being built and on for everything else — that is the distinction, and it is not "quiet during construction"* | *a bond constructor writing to a sibling still repaints the sibling* |
| **R11** | ***PROPS ARE NOT BOND CONSTRUCTION, and the two want different rules.*** *Props are written to a chemical from outside, before its bond runs; a bond constructor is the chemical composing what it was handed. **Doug named this as a nuance to handle rather than a rule to state**, and the sprint owes the distinction* | *a prop change repaints; a bond constructor's own write does not* |
| **R12** | ***A VIEW MAY NOT MUTATE — Doug's ruling, "come what may" — and mutation inside one is IGNORED rather than obeyed.*** *Not "discouraged", not "warned" — a write during `view()` does not mark anything dirty* | *a view that writes to itself draws once, not forever* |
| **R13** | ***Async bond construction still works.*** *A bond constructor may return a promise; the chemical re-reacts when it settles, and that is one further pass, not a storm* | *the existing async promises stay green* |
| **R14** | ***And nothing else moves.*** *The wiki draws the same page: same characters, same anchors, no refusal panels* | *the demo driven in a real browser with a reload* |

### <a id="the-governing-rule"></a>R15 — THE GOVERNING RULE, and it subsumes the rest

> ***Doug, 2026-09-08:*** **"dirty checking should always be off the second we know something is going to render anyways, and shouldn't be reset and started again until we know something has rendered."**

***DIRTY TRACKING EXISTS TO ANSWER ONE QUESTION — should this draw? — AND THE MOMENT THE ANSWER IS YES IT IS DEAD WEIGHT.*** *Every read recorded, every snapshot taken, every comparison made after a render is already certain is work that cannot change the outcome.*

**And the window is stated exactly, in both directions:**

| | |
|---|---|
| ***off*** | *the instant a render becomes CERTAIN — not when it starts, not when it commits* |
| ***on again*** | ***only once something has actually rendered*** — not on a timer, not at the end of a pass, not optimistically |

***This is why [R9](#requirements) is true rather than a special case.*** **A bond constructor's writes cost nothing because a view is already coming** — *"if we were calling view anyways, bond construction shouldn't trigger any dirty checking"* — **and the same sentence covers the settling cascade, an event handler that has already scheduled a paint, and anything else that writes while a draw is pending.** *The bond is not privileged; it is simply the commonest case of a general rule.*

> ***AND IT IS THE MOST LIKELY HOME OF THE THIRD PASS.*** *A write during a cascade re-marks what is already marked and re-schedules what is already scheduled. **The rule says that work should not exist**, and the count is the test of whether it does.*

***AND THE FRAMEWORK ALREADY KNOWS — it is one line, in one place.*** **[`particle.ts:470`](../../package/src/abstraction/particle.ts) is `p[$update$] = () => setToken((t: number) => t + 1)`, and [`$Reaction.react()`](../../package/src/abstraction/reaction.ts) is the single door to it.** *So the instant a render becomes certain is the instant `update()` is called, and the instant it stops being certain is the next run of the component function.*

> ***That turns R15 from a principle into a place.*** **The window opens at one call site and closes at one other**, *which means the sprint's question is not "can we know" but "what does the write path do differently once it does."*

### <a id="acceptance"></a>The acceptance, as a number

***This sprint has the rarest thing a framework sprint can have: an end that is a measurement rather than a feeling.***

| | |
|---|---|
| **today** | ***3 passes per instance, uniform on all three routes*** — 2,364 on `/article`, 2,019 on `/`, 3,096 on `/turing` |
| **the target** | ***Doug's word is ONCE***, and the honest reading is one pass per chemical per change — so the number to beat is stated per kind rather than in total, because a page with more writings legitimately draws more |
| **the instrument** | *the render-entry counter, added and removed in one command; **and the page itself**, driven with a reload, since a count that falls while the page breaks is not a win* |
| **the canonical case** | ***the wiki***, on Doug's instruction — not a fixture |

***What is NOT in this sprint:*** **[atomic and coupled](00-planning.md#next)**, which is the next one as capacity allows.

## <a id="the-correction"></a>THE CORRECTION — R6 is NOT what R1–R4 fixes

***Doug's instruction was "the other sessions are blocked on this. Coordinate. See that you are addressing it."*** **Checked, and the answer is negative.**

**[Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md) is session inexplicable-phenomena-7e's own instrumented measurement of the loop that blocks them**, and it rules this family out in one number: ***zero setter entries across 40,001 instrumented events, against 377 live reactive accessors.*** *Its own sentence: **"THE LOOP IS NOT REACTIVITY."***

> ***So the forward-only bond pass does not unblock them, and saying it did would be the third attempt of its kind.*** **Two proposals in exactly this family — both Doug's — were already built and correctly changed nothing:** *widening the setter's quiet zone to honour `$phase$ === 'setup'`, and a snapshot after the bond.*

***The two faults share a file and nothing else, and this chapter keeps them apart.*** *R6 and R7 are [U1](#u1) and [U1b](#u1b); R1–R4 are everything below them.*

## <a id="the-type-argument"></a>THE TYPE ARGUMENT — why the first proposal was wrong

***This chapter first proposed a stable Fragment for `$(undefined)`. Doug refused it in six words and he is right.***

**`$(undefined)` is already blocked by type.** *Every overload of `$` takes an element, a chemical, a class, a component, a representative or a string; under strict null checks **`undefined` satisfies none of them**, including the props form, whose `{ children?: ReactNode }` is an object type.*

***So the only way the runtime reaches that path is a member DECLARED as a chapter, a cover or a block, holding `undefined`.*** **That is not a caller mistake. It is [the framework's own error handling violating a guarantee the type system made](../../package/src/abstraction/chemical.ts)** — a bond throws, the throw is caught and stored in `c[$devError$]`, and every member the bond had not yet reached keeps a value its declared type forbids.

| | |
|---|---|
| **what a stable Fragment does** | *stops the loop* — the drawing settles, and a suite reports instead of dying |
| ***what it does NOT do*** | ***stop the impossible state from being built.*** *The object is still half-assembled, still typed as though it were not, and every reading of it is still a lie the compiler cannot see* |

> ***THE RULE THIS SETTLES, and it generalises past this defect:*** **a framework may not catch a construction failure and hand back the object.** *Either construction completes, or it raises — because a caught construction failure produces a value whose type is a false statement, and no amount of downstream defence repairs that.*

## <a id="the-mechanism"></a>The mechanism R1–R4 acts on, read from the source

***The write path, and the branch that matters*** — [`bond.ts:212-228`](../../package/src/abstraction/bond.ts):

```
store[property] = value;
if (this[$rendering$]) return;
const scope = currentScope();
if (scope) scope.recordWrite(this, property);
else { this[$reaction$]?.react(); diffuse(this); }
```

| | | state |
|---|---|---|
| **`$rendering$` is PER CHEMICAL** | raised on `p` for the whole of p's render including its bond — [`particle.ts:497-517`](../../package/src/abstraction/particle.ts) — so p writing to **itself** is already silent | ***verified by reading*** |
| ***a bond constructor writes to its CHILDREN*** | other chemicals, not rendering, so each write takes the `else` branch: `react()` now, and `diffuse` walks the parent chain and reacts on **every ancestor — including the chemical whose bond is running** | ***MEASURED*** — [P2](#p2): **one write, `duringBond=2`, `total=2`** |
| ***nothing on the render path opens a scope*** | `withScope` has **three** call sites in the framework, all inside `$Reagent.form()`. **Zero** on the render path, **zero** on the bond path — so `currentScope()` is null during a bond and the deferring branch is never taken | ***verified by grep*** |

> ***That is R2 stated as a mechanism: every bond write to a child re-schedules the parent that wrote it, so the bond must be safe to run again.*** *React's batching hides the cost; it does not remove the requirement.*

## <a id="broken"></a>THE USE CASES THAT ARE BROKEN TODAY — asked for by name

***Doug: "if you see real use cases that are broken, think about them hard… like things that shouldn't have multiple renders."*** **Five, each with the record that measured it, and what this sprint does or does not do for it.**

### <a id="b1"></a>B1 · An inline part cannot hold state across its writing's re-render

***The commonest thing an author would try, and it silently does not work.*** **[`groupInline`](../../package/src/abstraction/chemical.ts) lifts each inline element with `evalElement`, which builds `new $Eval()` per element per pass — a throwaway host with a fresh synthesis and therefore a fresh bound-child cache.** *So every re-render of a `$Writing` rebuilds every inline part it holds, runs their bond constructors again on new instances, and unmounts the old ones.*

**Measured in [Solutions 52](../../../.public/.lib/solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md):** *the writing `[38]` and its block `[51]` held identity for the whole run while the block's contents went `[53],[56]` → `[70],[73]` → `[84],[87]` → `[98],[101]` → `[112],[115]`.* ***A `<Highlight>` that counts, a `<Reference>` that caches its resolution, a formula that parsed its own text — each starts again every time the paragraph around it repaints.***

> ***R1–R4 REDUCE this and do not fix it.*** *Fewer spurious re-renders means fewer remakings, but a genuine re-render still remakes. **The fix is a bound-child cache on the inline path** — [U8](#u8), and it is the half of Doug's original ask that the deferral does not reach.*

### <a id="b2"></a>B2 · A page paints twice where it should paint once

**[The assignment](../composition/14-the-assignment.md) states the cost honestly: a written assignment is *exactly two passes more* than the same page assigning nothing.** *One instance of the family was already closed on 2026-09-06 — a format inside a chapter of a book with a `Theme` registered on the book is now answered that theme **at its bond**, where before it was answered the default until mount and **the page painted twice**.*

***That fix worked by moving the answer earlier. R1–R4 attack the same cost from the other side:*** *if a bond's writes do not wake anybody until the commit, the second pass has nothing to carry.* **[U7](#u7) is where that becomes a number rather than an expectation.**

> ***CORRECTED — THIS ENTRY WAS TWO DEFECTS AND ONLY ONE IS THIS SPRINT'S.*** **`-ad`'s no-write control separated them on a two-node tree:** *with the bond's writes, `react()` **2** and the storm above; with **zero** writes, `react()` **0** — **and the extra views are still there.*** **So the reaction storm is entirely the bond's writes and is what the pass removes; the extra paint is [B6](#b6) and the pass will not touch it.** ***[U7](#u7) must not score itself against B6's share.***

### <a id="b3"></a>B3 · A view whose shape depends on what it assigned never settles

**The two loops, [named and measured](../composition/14-the-assignment.md): the one that CLIMBS, and the one that FLIPS 1, 0, 1, 0.** *Neither is a nested render — each turn is its own commit, so **React's own update-depth guard never fires**, and one of them hangs the process outright.*

***Today they are caught by a purpose-built counter*** — the number of things a view assigns *changed*. **[U4](#u4) makes the general case an error at the write**, which covers the shapes the counter was never written for.

### <a id="b4"></a>B4 · A failed construction is permanent — ***THE LATCH***

***Reported by session inexplicable-phenomena-ad, and it breaks this chapter's first plan outright.*** **`this._lastBondArgs = $Synthesis.snapshotArgs(newArgs)` is assigned BEFORE the try block** ([`chemical.ts:274-277`](../../package/src/abstraction/chemical.ts)).

> ***So `sameArgs` matches on the very next pass and the bond is NEVER RE-RUN.*** **A chemical that failed to build cannot rebuild itself**, and nothing settles it. *A stable Fragment would have stopped the loop and left the object broken forever — which is why [U1b](#u1b) exists and why it is not optional.*

### <a id="b5"></a>B5 · A subclass of a `.public` class cannot be declared at a test file's top level

***Also from 7e, and it cost them three runs.*** **`class X extends $Book` at a module's top level throws `Class extends value undefined is not a constructor`, purely from import order, because `Book.tsx` sits in a cycle.** *Declaring the same class inside the test function fixes it.*

***Not this sprint's to fix — it is `.public`'s module graph — but it is written here because every probe this sprint writes would otherwise meet it.***

### <a id="b6"></a>B6 · Every tree pays an extra pass that nothing asked for — ***and it is NOT this sprint's***

***Found by a control rather than by a trace, which is the whole reason it is separable.*** **Running the identical two-node probe with the bond writing NOTHING — `react()` 0, no pass, no assignment — the views still run again:** *`trunk-view` **3×** and `leaf-view` **3×**, and a trailing `leaf-view > trunk-view` after the commit marker.*

**The cause is [`particle.ts:509`](../../package/src/abstraction/particle.ts): a `useEffect` with NO dependency array that re-runs the view and diffs it against the cache on every commit, unconditionally.** *Read here to confirm — it calls `p[$renderView$]()` a second time, and calls `p[$update$]()` whenever `diff` says the output changed.*

> ***And it is the SAME line [Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md) names as the loop's re-entry mechanism*** — *there it re-entered forever because a half-built chemical drew a fresh Fragment every call; here it simply costs a pass on every tree, forever, whether or not anything changed.* **One line, two symptoms, and the second was invisible until somebody ran a page that did nothing.**

***Deliberately NOT taken on.*** **The effect is the framework's own change detection and blunting it is a separate design with its own risk** — *and [U1](#u1) already removed the input that made it pathological.* **It is recorded so that [U7](#u7)'s number is honest: the pass removes the reaction storm and leaves this, and a benchmark that claims both would be claiming someone else's saving.**

## <a id="decisions"></a>Decisions

### <a id="d0"></a>D0 · Construction raises; it does not hand back a broken object

***The rule from [the type argument](#the-type-argument), and the one every unit in the R6/R7 group is an instance of.*** *Chosen over defending each reader of a half-built object one at a time, because there is no end to that list and the compiler cannot help with any of it.*

### <a id="d1"></a>D1 · The pass is a scope, and `$Scope` already is one

**Chosen over building a second collector.** *[`$Scope`](../../package/src/implementation/scope.ts) already records writes rather than firing them, releases them once at `finalize()`, walks the composition tree upward while doing it, and `withScope` already carries the outermost-only nesting rule.* ***Nothing needs inventing; something needs opening.***

### <a id="d2"></a>D2 · WHERE the pass drains is NOT decided — see [U2](#u2)

***React does not hand us the boundary.*** **`withScope` closes when its function returns, and a parent's render returns before React renders its children** — so a scope opened inside one component's render never covers the children's bonds, and "a connected tree" is exactly what it would fail to span.

*Three candidates, none chosen: the **catalyst root**, since `$isCatalyst$` already means "the root of the reaction system I belong to" and a connected tree is precisely a catalyst system; a **microtask**; or the **post-commit effect** at [`particle.ts:509`](../../package/src/abstraction/particle.ts) that already re-runs the view and diffs.* ***The catalyst is the one that matches Doug's words. Whether it is stable across a re-render starting mid-tree is unknown — [P1](#p1).***

### <a id="d3"></a>D3 · Forward-only is a REFUSAL, not a silent skip

**A write during the pass that reaches a chemical already bonded in this pass is a back-edge, and it is refused, naming both ends.** *Chosen over dropping it quietly, because [the assignment's four refusals](../composition/14-the-assignment.md) already settled the house rule for this exact situation:* ***each of them was measured doing nothing before it was designed for, and an assignment that cannot work must say so.***

### <a id="d4"></a>D4 · The R6/R7 group lands FIRST, and not only because it unblocks people

**A failing bond currently DIES rather than FAILS.** *So until construction reports honestly, no measurement about bond constructors can be taken at all — the instrument dies with the worker.* ***U1 and U1b are preconditions of this sprint's own numbers.***

### <a id="d5"></a>D5 · Measured in chemistry, never in lib

***`lib`'s suite cannot verify anything right now*** — measured this session: `tsc` **0** in `src`, and `vitest run src/tests/book.test.tsx` **dies at 178s**, worker exiting, 15 tests reporting nothing.

**Chemistry's is green and is the baseline:** *`assignment` + `lineage` + `block` = **70 passed, 2.18s**, measured this session; 7e last reported the whole chemistry suite green at **868**.* ***And the tree carries three sessions' uncommitted work, so every number in this sprint is a DELTA and nobody may claim an absolute.***

### <a id="the-exception"></a>D6 · The standing ruling against changing chemistry, and why this sprint is an exception

> ***The ruling, verbatim, reported by session inexplicable-phenomena-ad:*** **"DONT CHENGE CHEMISTRY"** — *given after a session added an overload to `chemical.ts` because a demo file wanted a better type. And beside it:* **"the speed of your innovation means $Chemistry might need to be cleaned carefully as a codebase but I will do that later."**

***Doug sent this session at chemistry directly, 2026-09-07, in a conversation whose whole subject was the bond path.*** **The exception is his and it is recorded here and in the commit message**, *because the record should show an exception rather than a silence.* ***It does not widen: nothing outside the units below is touched, and no member is named without asking.***

## <a id="units"></a>Units

### <a id="u1"></a>U1 · Construction raises instead of storing — ***BUILT 2026-09-07, and it worked first try***

> ***THE RESULT, from session inexplicable-phenomena-7e within minutes of it landing:*** **`Error: a title means what it titles, and this one means nothing`** — *one run, one sentence, exit in seconds, where there had been heap death and six failed attempts to instrument.* ***And it was never `$Book`.***
>
> **The fault it exposed:** *[`Title.tsx:34`](../../../.public/package/src/book/Title.tsx) carries `@specify('a title means what it titles')` checking `writing.meaning !== undefined`. A bare `<Title>Chemistry</Title>` carries no reference, so it means nothing, so **its** bond throws and everything above it collapses.* **The `$Book` errors that were chased for two sessions were all downstream of a cover whose title never constructed**, *and `order=[$Cover,$Chapter,$TypeOfBook]` was the state after an abort rather than a cause.*
>
> ***AND THE RULE CANNOT HOLD AT CONSTRUCTION, BY ITS OWN DESIGN.*** **A title's meaning is emitted by the COMPILER; `specify()` in a bond asks for it at build time, before any compiler has run.** *So the rule and the seat are incompatible in principle rather than by accident — which is [U1](#u1) doing exactly what it was for: making the cause legible instead of stopping the symptom.* **What Doug now owes is which of the two moves: the rule is compiler-time and must not run in a bond, or every title everywhere carries a reference — and nine sites in the suite plus BOTH demo covers write a bare title today.**

**Measured on landing:** *`tsc` **0** · chemistry suite **869 passed across 71 files** (7e's last figure was 868, taken before tonight — no regression either way) · a probe rendering a throwing bond under `mode='throw'`, the error reaching the caller with its own sentence, **created and removed in one command** · `npm run build` run, because `.public` resolves through the workspace symlink to `package.json`'s `main`/`module` and would otherwise have measured the old code.*

| | |
|---|---|
| **mechanism** | `$exceptions.mode === 'throw'` raises **regardless of `dev`**. [`chemical.ts:290`](../../package/src/abstraction/chemical.ts) reads `if (!dev && $exceptions.mode === 'throw')`, and [`dev.ts:5`](../../package/src/implementation/dev.ts) makes `dev` true under vitest — *so the framework already has a raise mode and it is switched off in exactly the environment that needs it* |
| **file** | [`chemical.ts`](../../package/src/abstraction/chemical.ts) — one condition |
| **depends on** | *nothing* |
| **changes no default** | *mode initialises to `render` in dev and `silent` in production; nothing behaves differently unless a caller opts in* |
| ***visible end*** | ***`.public`'s `book.test.tsx` prints the bond's own sentence*** where it now exhausts the heap. **A hand-authored page cannot fake it: the artefact is a suite that finishes, carrying a message nobody wrote by hand** |

### <a id="u1b"></a>U1b · The latch — ***NOT BUILT, and the argument for it does not survive***

***It was checked before it was built, and the justification failed.*** **The mechanism is real:** *`_lastBondArgs` is recorded before the try at [`chemical.ts:274-277`](../../package/src/abstraction/chemical.ts), so `sameArgs` matches on the next pass and a failed bond is never re-run.* **The claim built on it was that this is what leaves the object permanently half-built.**

> ***It is not.*** **The retry it would enable runs with IDENTICAL arguments, and identical arguments produce an identical failure.** *So the latch is not what keeps the object broken — the throwing bond is. And lifting it would make a permanently-failing bond re-run on every render inside the loop that already exists: more work per turn, not fewer turns.*

**Where it does matter is narrower and real:** *a bond that would succeed on a retry because something outside its arguments changed — a registration that arrived, an async dependency that settled.* ***That is a genuine unit with a different justification, and it is Doug's to call.***

*Recorded rather than dropped, with its history: `-ad` raised it, `7e` passed it on, and `7e` has since written back accepting the reasoning — **"I was the one who passed -ad's claim along without testing it; you were right to test it."*** **The claim came from teammates and was still checked, which is the only reason it is not in the code.**

### <a id="u1c"></a>U1c · The stable drawing — ***held, and possibly unnecessary***

***Deliberately NOT scheduled.*** *With [U1](#u1) and [U1b](#u1b) in, the state it defends against should be unreachable — and [the type argument](#the-type-argument) says it always was.* **Kept as an identifier so the record shows it was considered and why it was not built.** *Doug's to call back in if he wants the defence anyway.*

### <a id="u2"></a>U2 · The pass, opened and drained — ***ANSWERED, and it is the MICROTASK***

***Designed by session inexplicable-phenomena-ad, 2026-09-07, and every load-bearing fact independently re-checked here before it was written down.***

**The fact that decides it is one this chapter did not have: *nothing in this codebase time-slices*.** *Verified — **0** occurrences of `startTransition`, `useDeferredValue` or `useTransition` across `src/` and `app/src/`; React **19.2.4** on `createRoot`, every update on the default lane.* ***So render and commit for one update are a single synchronous run, and a microtask queued during it lands after the WHOLE TREE rather than mid-tree.***

***MEASURED IN THE REAL BROWSER, and the first browser trace nearly killed the design.*** **Chrome through puppeteer, against a temporary probe harness created and removed in one command:**

```
duringBond=2 total=2 :: bond-open > react! > react! > WROTE > bond-close >
    trunk-view > trunk-view > leaf-view > leaf-view > MICROTASK > leaf-view > trunk-view
```

***The microtask sits in the MIDDLE.*** *Under `happy-dom` it had landed after everything.* **Two readings fit that line — either it drained mid-tree and the design is dead, or the trailing views are a later pass — and a trace cannot tell them apart**, *so `-ad` did not guess.*

***THE DISAMBIGUATION — a plain React `useLayoutEffect` marker, which fires at commit after the whole tree renders, plus a control running the identical bond writing NOTHING:***

```
writes=true    … leaf-view > leaf-view > COMMIT#1 > MICROTASK > leaf-view > trunk-view
writes=false   bond-open > bond-close > trunk-view > trunk-view >
               leaf-view > leaf-view > COMMIT#1 > MICROTASK > leaf-view > trunk-view
```

> ***`COMMIT#1` PRECEDES `MICROTASK` IN BOTH.*** **The microtask drains after React has rendered AND committed the whole tree — in Chrome, not only under vitest.** *[U2](#u2) stands, on real footing rather than on a test environment's batching.*

> ***AND THAT MOOTS [P1](#p1).*** **The catalyst was the candidate that matched Doug's words, and it is the one needing a stability proof across a re-render starting mid-tree.** *The microtask needs no such proof — it needs the no-time-slicing fact, which is checkable, and which becomes a promise so that the day somebody writes a transition the suite says so rather than the drain quietly moving.*

**`queueMicrotask` is already the framework's own idiom** — [`atom.ts:33`](../../package/src/abstraction/atom.ts) and [`hydration.ts:91`](../../package/src/implementation/hydration.ts), *both confirmed.* ***Nothing new is introduced.***

**The shape:** *the pass opens at the first bond constructor to run when none is open, and queues its drain then · it holds what has been bonded this pass and defers writes — **`$Scope.recordWrite` already defers and `finalize()` already walks the parents**, so [D1](#d1) holds and nothing needs inventing · a write reaching a chemical already bonded is refused naming both ends, [D3](#d3) unchanged · it closes on the microtask.*

***PLACEMENT, and it is a direct consequence of [U1](#u1):*** **one `try`/`finally` around the bond invocation at [`chemical.ts:288`](../../package/src/abstraction/chemical.ts) — and it MUST be `finally`.** *With the raise reachable, a throwing bond now escapes that block, and anything less would leak an open pass on exactly the failure this sprint made visible.*

***`$Pass` and `bonded` are proxy names, flagged to Doug as proxies. Nothing is built.***

### <a id="u3"></a>U3 · Bond writes defer

| | |
|---|---|
| **mechanism** | the bond constructor invocation runs inside the pass, so a write to another chemical takes `scope.recordWrite` instead of `react()` + `diffuse()`. **The setter is expected to need no change** — its deferring branch already exists and is simply never reached |
| **files** | [`chemical.ts`](../../package/src/abstraction/chemical.ts) at the bond invocation · [`bond.ts`](../../package/src/abstraction/bond.ts) *only if the expectation above is wrong* |
| **depends on** | [U2](#u2) |
| ***visible end*** | *the Lab's assigned-properties case settling in fewer passes, with the count shown* |

### <a id="u4"></a>U4 · Forward-only, and the refusal

| | |
|---|---|
| **mechanism** | the pass holds what it has already bonded; a bond runs **at most once per pass**, and a write reaching an already-bonded chemical is refused, **naming both ends** |
| **files** | [`chemical.ts`](../../package/src/abstraction/chemical.ts) · [`scope.ts`](../../package/src/implementation/scope.ts) |
| **depends on** | [U2](#u2), [U3](#u3) |
| ***visible end*** | ***a page written to loop reports which chemical reached back to which*** — [B3](#b3)'s CLIMB and FLIP, each named at the write rather than found in a heap dump |

### <a id="u5"></a>U5 · The promises — R5

| | |
|---|---|
| **mechanism** | new promises beside the existing ones, in `tests/abstraction/`, **each stating a need rather than a mechanism** — [below](#scenarios) |
| **files** | `library/chemistry/package/tests/abstraction/` — a new file; **not** an edit to `assignment.test.tsx`, whose 38 are the baseline |
| **depends on** | [U3](#u3), [U4](#u4) |
| ***visible end*** | *the needs below, green, and the 70 unchanged* |

### <a id="u7"></a>U7 · The numbers — R2 and [B2](#b2)

| | |
|---|---|
| **mechanism** | passes per page before and after, against [the post-frame bench](../../package/bench/post-frame.bench.ts), which already states four numbers for the assignment |
| **files** | `library/chemistry/package/bench/` |
| **depends on** | [U3](#u3) |
| ***visible end*** | ***a delta, stated as a number*** |

### <a id="u8"></a>U8 · The inline part keeps its identity — [B1](#b1), and the other half of Doug's ask

| | |
|---|---|
| **mechanism** | the inline path gets the bound-child cache the block path already has. [`process`](../../package/src/abstraction/chemical.ts) keys bound children by type and element key and reuses them while the parent is unchanged; [`groupInline`](../../package/src/abstraction/chemical.ts)'s flush has **no cache at all** and calls `evalElement` fresh every pass |
| **files** | [`chemical.ts`](../../package/src/abstraction/chemical.ts) — `groupInline` |
| **depends on** | *nothing structurally; sequenced after [U3](#u3) so the two are measured apart* |
| ***visible end*** | ***an inline part that counts still holds its count after the paragraph around it repaints*** |
| **caution** | *[Solutions 52](../../../.public/.lib/solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md) records Doug ruling this churn his to clean; this unit is the exception's exception and needs his word specifically* |

## <a id="probes"></a>Probes — each created and removed in one command

- ***<a id="p1"></a>P1 — is a catalyst stable across a re-render starting mid-tree?*** ***MOOT, not run.*** *[U2](#u2) chose the microtask, which needs no such proof.* **The identifier is kept so the record shows the question was retired rather than forgotten.**
- ***<a id="p2"></a>P2 — how many `react()` calls actually fire from a bond constructor?*** ***RUN, by session inexplicable-phenomena-ad, and [the mechanism](#the-mechanism) is now MEASURED rather than read.***

  **A two-node tree; a trunk whose bond writes ONE field on ONE inline leaf; `$Reaction.prototype.react` counted while a bond is on the stack.** *Created and removed in one command.*

  ```
  duringBond=2   total=2
  bond-open > react! > react! > WROTE-TO-LEAF > bond-close > …
  ```

  > ***Every `react()` in the whole run came from inside a bond constructor, and ONE write produced TWO:*** **one on the leaf, and one from `diffuse` walking up to the trunk *whose bond was running at that moment*.** *That is Doug's idempotency demand on the smallest tree that can express it.* **The control is honest too: a bond that writes to nothing costs `react()` **0**.**

  ***And [B2](#b2) is in the same trace, quantified:*** **trunk-view 4 times and leaf-view 5 times, across two renders of a TWO-NODE tree.**

- ***<a id="p3"></a>A trap that cost two probe attempts, and every promise in [U5](#u5) will meet it:*** **a NON-INLINE child never reaches the block.** *A `$Leaf` without `inline = true` gets its own bond argument, so a trunk declaring `(block: $Block)` is handed an **empty** block — `BLOCK []` verbatim — and measures **0** while looking correct.* **The child must be inline, or declared as its own parameter.**
- ***<a id="p4"></a>AND ITS SIBLING, which is the rule under both:*** **a probe that measures a cost without a DO-NOTHING control cannot tell a framework cost from a user cost.** *The no-write run is what separated the reaction storm from [B6](#b6)'s extra paint, and the empty-block run is what would have made a true number mean the wrong thing.* ***It is [Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md)'s 377-live-accessors control, one level out:*** **a zero is only evidence when something in the same run proves the instrument was watching.**
- ***And run it in the BROWSER before believing it.*** *The `happy-dom` trace of [U2](#u2) reached the right conclusion for a reason the browser did not support, and the browser's own first trace read as a refutation until a commit marker disambiguated it.* **A test environment's batching is not React's.**
- ***Declare any class that subclasses a `.public` class INSIDE the test function*** — [B5](#b5).

## <a id="scenarios"></a>The promises — ***stated as needs, not as mechanisms***

> ***Doug: "Sometimes you test the code not the need."*** **This section was rewritten after that.** *The rule applied: a promise names something a person wanted to do, and fails when they cannot. A promise that counts `react()` calls or compares object identity is testing the code — it stays green through a rewrite that breaks the need, and goes red on a refactor that keeps it.*

| the need | the promise |
|---|---|
| ***a construction failure is legible*** ([U1](#u1)) | *a bond that throws* → **the suite finishes and the thrown sentence is in the output.** *Not: `$devError$` holds a string* |
| ***a thing that failed to build can build*** ([U1b](#u1b)) | *a bond that threw, then given different children* → **it builds and the members are there.** *Not: `_lastBondArgs` is undefined* |
| ***a bond constructor may write to what it was handed*** ([U3](#u3)) | *a bond that appends the child it received to a member* → **rendered once, the member holds it once.** *Not: no `react()` fired during the bond* |
| ***a chemical still hears the outside world*** ([U3](#u3)) | *a `setTimeout` writing after the paint* → **the page updates.** *The pass must not swallow what it was never about* |
| ***a reading in a parent follows what its child does*** ([U3](#u3)) | *a child written to during a bond* → **the parent's view shows the new value after the commit.** *Deferral must not become loss* |
| ***a page that feeds itself is reported, not hung*** ([U4](#u4)) | *[B3](#b3)'s CLIMB and FLIP* → **a named error identifying both ends, and the process alive** |
| ***a page that grows because somebody pressed something is fine*** ([U4](#u4)) | *a button that adds a part* → **not refused.** *The distinction the assignment's counter already draws, and the one a naive rule would break* |
| ***an inline part keeps what it knows*** ([U8](#u8)) | *an inline chemical holding a count, its paragraph re-rendered* → **the count survives** |
| ***the same page costs less*** ([U7](#u7)) | *the identical page under both* → **a stated delta** |

## <a id="the-instrument"></a>THE INSTRUMENT IS NOT FIT FOR THIS SPRINT — measured by driving it

***Doug: "This is the heart of $Chemistry. You will have to drive the demo and check a lot of it by hand, testing the controls."*** **Driven, in a real browser, on a fresh server at 4100. And the driving found the driver.**

***First, the differential, because it is the only claim this sprint gets to make about [U1](#u1) and the Lab:*** **`verify-all.mjs` reports PASS 19 · FAIL 0 · PENDING 15 · ERROR 0 — and reports IDENTICALLY with the change and with it reverted.** *The gate was put back, the driver re-run, and the line restored in one command. **U1 is neutral on the Lab, proven rather than assumed.***

***Then the finding, and it is about coverage rather than correctness.***

| | measured |
|---|---|
| **the 15 "pending" carry an EMPTY detail** | *not "the interaction did not trigger" — **zero `[data-verdict]` elements on the page at all*** |
| ***8 route ids the driver visits are declared by no section*** | `II.1` `II.4` `II.5` `III.3` `V.1` `V.3` `V.4` `VI.1` — **hand-driven, `/V.1` and `/II.1` render the shell and nothing else**, while `/todo` renders its case, two verdicts and working controls |
| ***24 declared sections the driver never visits at all*** | including ***`assigned`, `blocks`, `facades`, `formula`, `persistence`, `perspectives`, `styled`*** — **this sprint's entire verification surface** |
| **and those 24 carry no verdict either** | *hand-driven with their controls worked — `assigned` answers `−` `+` `unbind` `end`, `facades` answers `$Element` `$Metal` `$Alkali` `$Noble`, `persistence` answers `place the ribbon` `note the margin` — **every one renders and responds, and none exposes a `data-verdict`*** |

> ***So the Lab is ALIVE and the instrument is HALF BLIND.*** **19 of 43 sections are asserted; 8 ids point at nothing; and the newest sections — the ones built for the assignment, the block and the facade — render and respond but cannot be asserted at all, because the verdict contract the driver keys on was dropped as the Lab grew.**

### <a id="the-repair"></a>THE REPAIR — ruled by Doug, *"Repair it first"*

***The cause of the eight was a RENAME nobody carried into the driver.*** **The sections were given their own names and the roman numerals went with them** — *`II.1` is `handlers`, `II.4` is `data-loading`, `II.5` is `native-objects`, `III.3` is `typed-children`, `V.1` is `properties`, `V.3` is `parent-child`, `V.4` is `collections`, `VI.1` is `reusable`.* **Fourteen sections had been reported as un-triggered interactions for as long as that rename is old, and every one of them was working.**

| stage | measured |
|---|---|
| **as found** | **PASS 19 · FAIL 0 · PENDING 15** |
| ***the eight ids renamed*** | ***PASS 33 · FAIL 0 · PENDING 1*** — *fourteen recovered, all green, no code touched* |
| **nine unvisited verdict-carrying sections added** | PASS 36 · FAIL 0 · PENDING 7 — *and the pendings now carry real pending verdicts rather than nothing* |
| ***their controls worked, and `stress` corrected*** | *the driver clicked a button containing `Run`; the button says **`Fire wave`*** |
| ***as it stands*** | ***PASS 43 · FAIL 0 · PENDING 0 · ERROR 0***, over **35 of 42** declared sections |

***AND THE DRIVING FOUND A REAL DEFECT, which is the point of driving.*** **[`poly-form/case-1.tsx`](../../package/app/src/sections/poly-form/case-1.tsx) wrote its email rule as a JSX ATTRIBUTE STRING — `pattern="^[^@]+@[^@]+\\.[^@]+$"` — and a JSX attribute string does not process escapes**, *so the value carries **two** backslashes and the rule demands a literal `\` before the dot.* ***No valid email could ever pass that form.*** **Confirmed off the source bytes rather than by reading:** *`ada@example.com` → false at two backslashes, true at one.* **Fixed, one character, and the case now passes by hand and in the driver.**

> ***It had never been caught because the driver never worked that form's controls*** — *it reported the section as `PENDING`, which reads like a warning about the harness and was really a defect hiding behind one.*

***WHAT REMAINS — seven sections, and they are this sprint's own surface:*** **`assigned`, `blocks`, `facades`, `formula`, `persistence`, `perspectives`, `styled`.** *Hand-driven and healthy — `perspectives` answers its `hsl` · `hex` · `rgb` looks, `formula` its `reading` · `field` · `<Fig>` controls, `styled` its `background` · `$color`, and no page errors anywhere — **but none of them draws a `data-verdict`, so none can be asserted.*** **`blocks` has no controls at all and is display-only.**

***That is the rest of the repair and it is authoring, not wiring:*** *each of those cases needs the verdict rows the other fifty-two already draw.* **Until it is done, [U3](#u3) and [U4](#u4) name a visible end that a machine cannot read** — *and `assigned` is exactly the case they name.*

> ***COMPOUNDED.*** **The lesson lives in [The Contract](../testing/01-the-contract.md#a-harness-must-not-spend-one-word-on-two-states), not here** — *the chapter already ruled that `it.skip` pins nothing, and this is the same rule one level out: a route that does not resolve is a failure OF THE HARNESS, not a pending result.* **The measurements stay in this record; the practice lives in the room whose subject it is.**
>
> ***And one lesson is OWED rather than batched:*** **a JSX attribute string does not process escapes**, which is why `pattern="…\\.…"` carried two backslashes. *That is a distinct, reusable fact with its own bite — a regex, a date format or a path written as a plain attribute rather than an expression — and it wants its own run and its own room. **Chemistry has no Solutions book, and one should not be made for a lesson this run did not distribute.***

## <a id="risks"></a>Risks

| | mitigation |
|---|---|
| ***a third change in a family that has twice changed nothing*** | **[P2](#p2) measures the mechanism before U3 is built.** *Solutions 53's own lesson: instrument the thing you are about to blame, and read the zero* |
| **the setter's `else` branch also serves external callbacks** — `setTimeout`, `fetch.then`, a socket | the pass is bounded by the render and its commit, never open-ended; **and it is a promise above**, not a hope |
| **`withScope`'s outermost-only rule** means a reactive method called during a bond joins the pass instead of finalizing itself | *a real behaviour change, and it must be promised rather than discovered* |
| ***deferral becoming loss*** | *the third and fifth promises exist for exactly this: a write that is deferred must still arrive* |
| **the names** — `pass`, `forward-only`, `back-edge` | ***all three are proxies and none is Doug's.*** *No framework thing is self-named; flagged here and in the work report* |
| **absolutes** | three sessions' uncommitted work in one tree — ***deltas only***, and the commit tool takes the whole tree, so nobody runs it without saying so first |

## <a id="lanes"></a>Lanes — agreed with both open sessions

***This session holds `library/chemistry/package/`.*** **`library/.public/package/src` and `.wiki` are session inexplicable-phenomena-7e's**; ***`.lib` and the sprint chapters are session inexplicable-phenomena-ad's***, *which is why [Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md) gains this sprint's measurements rather than a second chapter about one defect.*

**7e's state, in their words: standing, not mid-move** — *`specify()` removed from `$Writing`'s bond and added to 38 kind bonds, plus `$Book.placed()` inserting after what it should follow; `tsc` 0; nothing half-applied.* **Their working copy is left exactly as found.**

***Their dead ends, recorded so nobody repeats them:*** *setting `$exceptions.mode = 'throw'` from a test (dies, because of the `!dev` gate [U1](#u1) removes) · `NODE_ENV=production` on the vitest command (the runner will not start) · removing `specify()` from `$Book` alone, and from the four kinds `placed()` makes (both still die) · throwing at a call cap (swallowed like everything else).* **And their one readable result, got by appending to a file mid-bond:** *pass one's message reads `order=[$Cover,$Chapter,$TypeOfBook]` — **the synopsis, table and index are not in the block at all** — which is the thread [U1](#u1) exists to let them pull.*

## <a id="where-things-stand"></a>Where things stand

> ***THE NEXT ACTION, as a command:*** **`/ce-brainstorm` with the wiki team** — *the framework work this chapter opened is done and green; what is left is the demo, and that is theirs.* **The bond pass itself ([U3](#u3), [U4](#u4)) is DESIGNED, MEASURED and UNBUILT, and is session `inexplicable-phenomena-ad`'s to build on Doug's word.** *If instead you are picking up this chapter's own remaining work, it is `/ce-work` at the seven sections named in [The Repair](#the-repair).*

> ***AND THE SESSION ALSO CLOSED A SECOND PIECE OF WORK, in `.public` rather than chemistry — [below](#the-mention-work).*** — *give `assigned`, `blocks`, `facades`, `formula`, `persistence`, `perspectives` and `styled` the verdict rows the other fifty-two cases already draw.* **Doug ruled it: *"Repair it first."*** *After that, and not before, `@inert` on the block — [presented, not built](#the-block).*
>
> ***Written 2026-09-07 by session inexplicable-phenomena-47.*** **Handed to session inexplicable-phenomena-99**, *which opened as this was being written — **session inexplicable-phenomena-7e, who did the measuring recorded throughout this chapter, ended between two messages***, and `.public/package/src` and `.wiki` pass with their lane. **The working copy is the truth; verify before acting on any line of this.**

### <a id="the-mention-work"></a>THE MENTION AND THE CATALOGUE — `.public`, and it is finished

***Three red promises in `.public` were handed to this session as one fault in chemistry. They were not.*** **Measured: `$Reference`'s bond constructor runs exactly ONCE, at build, with the right text — nothing is remade, and [U8](#u8) is not the cause.** *The handoff was withdrawn by the session that sent it.*

***The real fault was one thing wearing three faces:*** **every `$TypeOf$X` mention type extended `$TypeOfReference`, so every mention inherited `a reference carries a path` — which a mention has no way to satisfy.** *A book whose construction aborts draws a panel, and a panel has neither anchors nor regions, which is why one fault read as three.*

**Doug's ruling:** ***"they are just a piece of writing that means the thing. No need for them to be a reference which takes Path."***

***What shipped, and it adds NO members — nine were deleted:***

| | |
|---|---|
| **the seven mention types** | *no longer reference types; `$TypeOf$X extends $Type`, each specification over `WritingSpecification`* |
| ***the seven mention classes*** | ***extend `$Catalogue`***, which now extends `$Composition` — *so a mention is a composition by Doug's rule and a catalogue by the same object* |
| **`catalogue()`** | *answers the mention rather than constructing a wrapper; the two stay separate members, so other writing may answer them differently* |
| ***`parts()`*** | ***catalogues what the writing REFERS TO, never itself*** — one implementation where there were two copies and five gaps |
| **the regress** | *closed by **nullability**, on Doug's ruling — **"nothing mentions a mention"**. Self-reference was refused: "I love self-reference. I don't like the switch"* |
| **the module cycle** | *dissolved by a **type-only** import — returning the mention needs no class at runtime* |
| **`$$Book`** | *the last `addType` after `super` in the package; now the concat form.* **`addType` callers in `src`: 0** |
| ***a url parser*** | [`src/utilities/Url.ts`](../../../.public/package/src/utilities/Url.ts) — *each part separate, `reads` versus `addresses`; `$Path` and `$Reference` both ask it instead of duplicating `URL.canParse`* |

***The lesson is compounded, not repeated here:*** **[The Reference, and What It Points With](../../../.public/.lib/the-semantics-of-books/16-the-reference-and-its-locator.md#the-mention)** — *Q1 answered, the identification half standing alone as a mention, and the general shape: **a stand-in inherits the rules written for the thing it stands for and cannot satisfy them.***

***Green at close:*** **`.public` tsc 0 · 77 of 77 · demo 0 refusal panels on `/` and `/article` with 1,765 and 17,647 characters, 48 and 67 anchors, 0 empty hrefs, driven with a reload.** *Chemistry tsc 0 · 871 of 871 · Lab driver 43/0/0/0.*

### <a id="h-rulings"></a>Doug's rulings this session, verbatim

| | |
|---|---|
| **on the first fix proposed** | ***"$(undefined) - but this should be blocked by type…"*** |
| **on the promises** | ***"Review the promises carefully. I want you to see if you have the semantics right. Sometimes you test the code not the need."*** |
| ***on block and inline*** | ***"We need block and inline to work!!! It needs to work right. Absolutely non-negotiable. But I also don't think block elements should be live because its the things inside that matter. Can we turn it off? If someone changes the array, we imagine they will render. If someone changes the elements inside though… when they rerender, we need to see it"*** |
| **on the latch** | ***"This is tricky. Leave it semantically as is for now unless there is a clean simple fix that doesn't destroy a lot"*** |
| **on the driver** | ***repair it first*** — *and* ***"Verify on perspectives, frames too"*** |
| **on the demo** | ***"This is the heart of $Chemistry. You will have to drive the demo and check a lot of it by hand, testing the controls"*** |
| ***the standing ruling this sprint excepts*** | ***"DONT CHENGE CHEMISTRY"*** — *lifted for this work by Doug's direct instruction; see [the exception](#the-exception)* |

### <a id="h-state"></a>What is done, in plain words

***A bond constructor that throws now says so out loud instead of killing the process.*** **One condition in `chemical.ts`: the framework already had a raise-instead-of-swallow mode, and it was switched off in the only environment we ever run in.** *That is [U1](#u1), and it was session 7e's proposal rather than this session's.* **Within minutes of it landing, a two-session hunt ended in one run with one sentence — and the fault was in a title's rule, not in the book everyone had been reading.**

***And the Lab's driver was asserting less than half of the Lab while reporting nothing wrong.*** **Eight of its routes named sections that had been renamed out from under it; a ninth clicked a button by a caption that no longer exists; and behind one of its soft "pending" words sat a form whose email rule could never pass.** *All three corrected — [The Repair](#the-repair) carries the numbers.*

### <a id="h-inprogress"></a>What is in progress, and what has not started

**In progress — nothing built.** *No edit is half-applied; the three files this session touched are complete and green.*

***DESIGNED SINCE, and by another session: the design question is ANSWERED.*** **[U2](#u2) is the microtask, not the catalyst** — *because nothing in this codebase time-slices, so a microtask queued inside a bond drains after the whole tree rather than mid-tree.* **Confirmed in Chrome, not only under vitest: a commit marker lands BEFORE the microtask in both the writing and the non-writing run.** *And [P2](#p2) has turned [the mechanism](#the-mechanism) from read into measured: one write inside a bond, `duringBond=2`, the second landing on the trunk whose bond is running.* **Both are session `inexplicable-phenomena-ad`'s work; every fact they rest on was re-checked here before being written down.**

> ***AND THE CONTROL FOUND A DEFECT NOBODY WAS LOOKING FOR.*** **Running the identical probe with the bond writing nothing gives `react()` 0 — and the extra views are still there.** *So what this chapter had called one thing is two: the reaction storm, which is the bond's writes and which the pass removes, and [B6](#b6) — **an unconditional extra pass every tree pays**, from the same dependency-array-less effect [Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md) blames for its loop.* ***Not taken on, and recorded so [U7](#u7)'s number does not claim someone else's saving.***

***Not started: the feature itself.*** *The pass ([U3](#u3)), the refusal ([U4](#u4)), its promises ([U5](#u5)) and its numbers ([U7](#u7)) — all designed now, none begun.* **Doug holds the design and the ruling on the member the write path gains; `-ad` is waiting on his word and has built nothing.**

> ***THE WORK HAS MOVED.*** **Doug handed the bond-pass design to session `inexplicable-phenomena-ad` directly.** *This session keeps build rights inside `chemistry/package` and **will not build the pass in parallel** — two sessions building one design in one tree is how the forty-six orphans happened.*

### <a id="the-block"></a>The block, and the answer to Doug's question

***He asked whether the block can be stopped from being live. It can, and the mechanism already exists.*** **`$Block.$elements` is `$`-prefixed, so it is reactive by default, and `@inert()` is exactly the opt-out** — [`bond.ts`](../../package/src/abstraction/bond.ts), documented in [Decorators](../reactivity/06-decorators.md). *No new member and no new idea.*

***And the liveness is not where it looks.*** **The write is already silent** — prop application runs inside the chemical's own rendering flag. ***It is the READ:*** whoever reads `elements` takes a snapshot, a fresh array of new instances compares unequal at [`$Scope.finalize`](../../package/src/implementation/scope.ts), and the reader is marked dirty and redrawn. *`@inert` stops that tracking — which is Doug's rule exactly: the array changing is not news, and a thing inside it that changes is its own chemical with its own reaction, so it redraws itself.*

> ***NOT BUILT — present the shape before writing it.*** *It is one decorator on the heart of the framework, and [B1](#b1)'s inline cache ([U8](#u8)) is the other half of the same ask.*

### <a id="h-blocked"></a>Blocked, and on whom

| | waits on |
|---|---|
| ***the feature*** ([U3](#u3), [U4](#u4)) | ***Doug*** — *[U2](#u2) is answered and [P2](#p2) is measured, so nothing technical is outstanding.* **What waits is his word to build, and his ruling on the member the write path gains** |
| ***being able to SEE the feature*** | *the seven sections above — `assigned` is the case U3 and U4 name as their visible end, and it draws no verdict* |
| ***whether this defect is fixed or merely fixable*** | ***Doug.*** **Should `dev` default to `throw`?** *[U1](#u1) made the raise reachable; it did not make it the default. A plain run still swallows — measured by `-ad` at **277.13s heap death** unmodified against the built `dist`, against **2.21s, 14 failed / 1 passed** with the mode set* |
| ***the `specify()` rule against the compiler*** | ***Doug, through session 7e***, whose lane it is — *a title's meaning is emitted by the compiler, and `specify()` in a bond asks for it first. Nine suite sites and both demo covers write a bare title* |
| **[U8](#u8), and the narrow [U1b](#u1b)** | *Doug — both are chemistry, and [the exception](#the-exception) is not a licence to keep going* |

### <a id="h-verified"></a>What was actually run, with the numbers

| | |
|---|---|
| **chemistry `tsc`** | ***0*** |
| **chemistry suite** | ***869 passed across 71 files*** — *the same 869 before the change; 7e's 868 was taken earlier in the night* |
| ***the Lab driver*** | **19 PASS / 0 FAIL / 15 PENDING as found → *43 PASS / 0 FAIL / 0 PENDING / 0 ERROR***, over **35 of 42** declared sections |
| ***U1 against the Lab*** | ***neutral, by differential*** — *the gate put back, the driver re-run, identical 19/0/15/0, and the line restored in one command* |
| **the raise itself** | *a probe rendering a throwing bond under `mode='throw'`, the error reaching the caller carrying its own sentence — created and removed in one command* |
| **the email rule** | *read off the source bytes: `ada@example.com` **false** at two backslashes, **true** at one* |
| **`dist`** | *rebuilt — `.public` resolves through the workspace symlink to `package.json`'s `main`/`module`, so nothing reaches a consumer without it* |
| **library links** | *119 checked, **0 broken*** |

### <a id="h-wrong-turns"></a>Wrong turns already tried — do not repeat these

***This session's own:*** **the stable Fragment for `$(undefined)`** — *refused by Doug on the type, and it would not have helped anyway, since the object stays half-built.* **And [U1b](#u1b) as first argued** — *the retry runs with identical arguments and fails identically.*

***Session 7e's, every one measured:*** *setting `$exceptions.mode = 'throw'` from a test **before** U1 (dies, because of the `!dev` gate) · `NODE_ENV=production` on the vitest command (the runner will not start) · removing `specify()` from `$Book` alone, and from the four kinds `placed()` makes (both still die) · throwing at a call cap (swallowed like everything else).*

***And two earlier ones in [Solutions 53](../../../.public/.lib/solutions/53-the-bond-that-failed-quietly-and-drew-forever.md), both Doug's, both built, both correctly changing nothing:*** *widening the setter's quiet zone to honour `$phase$ === 'setup'`, and a snapshot after the bond.* **Reactivity is not the cause of that loop, and this sprint does not claim it is.**

***One trap that costs runs:*** **a top-level `class X extends $Book` in a new test file throws `Class extends value undefined is not a constructor`** — *import order, because `Book.tsx` sits in a cycle.* **Declare such a class inside the test function.**

### <a id="h-seeing"></a>How to see it

```bash
cd library/chemistry/package
npx vite app --port 4100 --strictPort          # a FRESH server; a long-running one served a stale module once and cost a session
PORT=4100 node app/verify-all.mjs              # expect PASS 43 · FAIL 0 · PENDING 0 · ERROR 0
```

**Open `http://localhost:4100/assigned`** — *the case U3 and U4 name.* **Its controls are `−` `+` `unbind` `end`**, *and what to watch for is the maker revoking the other owner's hold without killing it.* ***It draws no verdict, which is exactly the gap the next step closes.*** **Kill the server when done** — *nothing in this branch should be left listening.*

### <a id="h-read"></a>Read these first — three, and they are a starting point rather than a boundary

| read | what is load-bearing in it |
|---|---|
| ***this chapter's [The Repair](#the-repair)*** | **the driver's real state and the exact eight renames** — *without it the next session re-derives them, which cost this one an hour* |
| **[The Contract](../testing/01-the-contract.md#a-harness-must-not-spend-one-word-on-two-states)** | *the compounded lesson — **a harness owes a distinct word to "I could not run this."** Read it before touching the driver again* |
| **[The Binding Constructor](../composition/03-binding-constructor.md)** and **[The Catalyst Graph](../composition/08-catalyst-graph.md#the-model-is-parented-and-the-drawing-is-not)** | ***what a bond actually receives, and the two populations of one part*** — *the second is the measurement every design in this chapter stands on, and reasoning from the source about it was wrong twice before it was measured* |

### <a id="h-lanes"></a>The tree, and who holds what

***Three sessions, one working copy, nothing committed by anybody.*** **This session touched three files, all in chemistry:** *`src/abstraction/chemical.ts` ([U1](#u1)), `app/verify-all.mjs` (the repair), and `app/src/sections/poly-form/case-1.tsx` (the email rule).* **Session 7e holds `.public/package/src` and `.wiki`; session `-ad` holds `.public/.lib`.**

> ***THE PUSH IS NOT DONE, and that is deliberate rather than forgotten.*** **The commit tool takes the WHOLE TREE and has no partial mode** — *`-ad` pushed half-finished work under their own message once tonight and left main red.* ***So nobody runs it without saying so first and getting a clean-tree confirmation from the other two.*** **This session has asked; when both confirm, the push is the last act, and this section is not finished until it reports the commit.**

***Settled here:*** construction raises rather than handing back a broken object ([D0](#d0)) · the pass is `$Scope` and nothing new ([D1](#d1)) · forward-only refuses rather than skips ([D3](#d3)) · the R6/R7 group first, because a dying suite cannot measure a bond ([D4](#d4)).

***Corrected here, and every correction came from outside this session:*** **the stable Fragment was the wrong fix, and Doug said why in six words** ([the type argument](#the-type-argument)) · **it would have left the object permanently broken anyway** ([B4](#b4), from `-ad`) · ***and the promises were testing the code rather than the need*** ([the promises](#scenarios)).

***And the correction at the top stands:*** **R6 is not what R1–R4 fixes.**
