# The Three Passes

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**A static page draws every component three times, and only one of those three reaches the screen.** *Measured on 2026-09-08 against the three pages of the Wikipedia demo, in a real browser, with the framework instrumented at `[$renderView$]`.* **Neither of the two wasted passes is reactivity** — `$Reaction.react()` was called **zero** times on all three pages. *Both live in `$lift`, both are structural, and both have been in the file since the first commit that created it.*

***One piece of negative evidence is worth less than it looks and is discounted here rather than quietly relied on.*** **`$Scope.recordWrite` also measured zero, and that carries no weight**: it is reachable only when `currentScope()` is non-null (`bond.ts:229`), `$lift` never opens a scope, and `withScope` is entered only from reagents and augmented handlers. *On a static load with no events it is zero by construction, whether or not bonds are written.* **`react() === 0` is the load-bearing number**, because `react()` is the only reactive re-render path — and the settle-effect deliberately bypasses it by calling `p[$update$]()` directly.

This chapter is the handoff. It says what was measured, what causes each pass, what the third one is actually for, what pins it in place, and what a session changing it must not break.

## <a id="what-was-measured"></a>What was measured

**Instrumented `$Writing.prototype[$renderView$]` and `$Reaction.prototype.react`, drove all three demo pages in headless Chrome, and bucketed each draw by its call order on the instance.** *Every drawable, on every page, drew exactly three times — 3.00 with no variance.*

| page | drawables | draws | `react()` | pass A · discarded | pass B · kept | pass C · settle |
|---|---|---|---|---|---|---|
| **`/turing`** | **517** | **1551** | **0** | 517 · **65.8 ms · 34.4%** | 517 · **33.3 ms · 17.4%** | 517 · **92.2 ms · 48.2%** |
| **`/article`** | **398** | **1194** | **0** | 398 · 97.1 ms · 37.8% | 398 · 52.0 ms · 20.3% | 398 · 107.6 ms · 41.9% |
| **`/`** | **329** | **987** | **0** | 329 · 51.2 ms · 30.8% | 329 · 27.5 ms · 16.5% | 329 · 87.8 ms · 52.7% |

***On the Turing page, 82.6% of the time spent drawing is discarded.*** **Pass A costs MORE than pass B** — *it pays the cold work (`compile`, bond formation, the `$views$` table) and pass B hits the caches it warmed, so the discarded pass is the expensive one.*

**Bond constructors were counted in the same run: 548 on `/turing`, exactly two per bond-carrying instance.** *All 274 of them are `$Format` classes — the writings are drawn through `$(instance)`, which lifts with `bond` false.*

## <a id="pass-a"></a>Pass A — the render React throws away

**[`particle.ts:414`](../../package/src/abstraction/particle.ts) declares `const [cid, setCid] = useState(-1)`, and `particle.ts:453-455` calls `setCid(p[$cid$])` INSIDE the render body.** *That is a render-phase state update: React discards the pass it is in and re-invokes the component immediately, before committing. The first drawing of every component on the page is built, walked by `augment`, cached — and thrown away.*

***It is documented, as a step, and nobody ever costed it.*** **[Lift](04-lift.md), step 7:** *"Stores the derivative's cid. `setCid(p[$cid$])` **triggers a re-render**; on the next render, the cid is non-negative, and the closure takes the re-entry branch."*

**The experiment, run and reverted inside one command.** *Replacing the state pair with a stable box — `const held = useState(() => ({ cid: -1 }))[0]`, so nothing calls a setter during render — took `/turing` from 1551 draws to 1034 (3.00 to 2.00) and bond constructors from 548 to 274.* **`particle.ts` was restored.**

***AND THAT EXPERIMENT IS NOT THE FIX. It was reviewed adversarially and came back UNSAFE, on two grounds that are worth more than the measurement was.***

| | |
|---|---|
| ***a field first created during a view is bonded today by the SECOND pass, and would be permanently unbonded*** | **The body is `apply → reactivate → bond → draw` (`particle.ts:516-530`), so today's pass 2 runs `reactivate()` BEFORE the draw that commits.** *A member that first becomes an own property during pass 1's view is therefore bonded in time.* **The settle-effect never calls `reactivate()`** *(`particle.ts:506-515`)*, and `formBonds` skips what it has already seen — *so with pass 1 gone, that member is never bonded, and later writes to it silently never repaint.* ***The convergence loop does not catch it: `diff` repairs a divergent OUTPUT, never a missing BOND.*** *No live instance was found in the public library — `Reference.tsx:35`'s `this.$pid ??=` sits in the bond constructor, which is followed by a `reactivate()` in the same pass — but that is a "did not find", not a "cannot happen".* |
| ***mutating the box during render is a WORSE React violation than `setCid`, not a lesser one*** | **`setCid()` during render is sanctioned: React discards the pass and re-invokes, and nothing committed was touched.** *`held.cid = made` writes to COMMITTED state from inside render, so the write survives a pass React throws away.* **On a discarded-and-replayed render — a concurrent interruption, a Suspense retry, an error-boundary retry on the same fiber — the replay reads the mutated `held.cid`, `$Reaction.find` hits, and it reuses a derivative from the aborted pass**, one whose `[$apply$]` may be half-applied or whose bond constructor may have thrown midway. *The demo mounts on a concurrent root, so the machinery is present.* |

***What the experiment DID establish stands: the double pass is real, it is caused by the render-phase update, and removing it removes exactly one third of the draws and one half of the bond-constructor runs.*** **What it did not establish is that removing it is free.** *A correct fix has to keep a `reactivate()` in front of the committed draw, and must not write committed state from render.*

***One wording that matters when reading the measurement:*** **React discards the first pass's ELEMENT TREE — it never commits it and never runs its effects — but every side effect that pass had on the chemical survives**, *including `[$apply$]`, the bond constructor, the whole view evaluation, and `p[$viewCache$] = output`.* **That is why the wasted pass costs real work rather than nothing, and why the first pass sees an undefined cache while the second sees it set.**

***This is the cheapest third of the problem and it is not the interesting one.*** *It is named first because it is separable: it can be fixed without touching the settle-effect at all.*

## <a id="pass-c"></a>Pass C — the settle-effect, and it has no origin story

```js
useEffect(() => {                                  // 506 — NO dependency array
    p[$resolve$]('effect');                        // 507
    p[$rendering$] = true;
    const current = augment(withAsker(p, () => p[$renderView$](), true), react, p, false);
    p[$rendering$] = false;
    if (diff(current, p[$viewCache$])) {           // 511
        p[$viewCache$] = current;
        p[$update$]();
    }
});
```

**It arrived complete in `b8811f4`, whose entire commit message is "Many chemical reactions", and took its current body in `c2075d1c`, whose entire message is "Mad $Chemistry".** ***`git blame` puts `useState(-1)` and this effect in the same commit.*** *No commit message in the repository explains either. The stated purpose exists only in this library, written afterwards:* **[View](06-view.md)** *— "the mechanism that catches state changes that didn't go through bond setters."*

**`$viewCache$` has four uses in the whole of `src`** *(the declaration, this effect's read and write, and the render body's write)* — **the cache exists solely to feed this effect.**

### <a id="what-it-catches"></a>What it catches on these pages: nothing

***Proven three ways.*** **(1)** *A single true `diff` would push some components to five draws; the measurement is a flat 3.00.* **(2)** *A search for `on=` across `.public/package/src` and `.wiki` returns **zero** — no authored assignment exists anywhere, so `belong()` only ever runs the implied assignment, whose body is `() => {}` with an empty path, and `into()` is never reached.* **(3)** *`belongs()` then finds the parent already threaded by `derive()`, and returns.*

**So on `/turing` the settle-effect is 517 full view draws plus 517 full `augment` walks, to discover 517 times out of 517 that nothing changed.**

### <a id="what-it-could-catch"></a>What it CAN catch, and this is the load-bearing part

***The window is real even though these pages do not use it.*** **Between the render body returning and the passive-effect flush, four things write:**

| what writes | where | reaches the drawing? |
|---|---|---|
| **`belongs()` → `particle[$parent$] = receiver`** | `particle.ts:583` | ***YES, and invisibly.*** *`$parent$` is symbol-keyed, so it is never a bond and never reacts — and the public library **draws from it**: `$Writing.book` reads `this.parent`, `reflection.indent()` walks it, and `classNames()` puts the answer into the rendered `className`.* |
| **`belong()` → `assign()` → `into()`** | `particle.ts:565` → `augment.ts:376` | *YES for an authored `on=`. A bond member fires `react()` on its own; a `_` member, an `@inert` member, an accessor or a nested path fires nothing, and only this effect notices.* |
| **`hydration.propagate` → `overwrite(other)`** | `hydration.ts:38` | *YES. A microtask on a sibling atom, `$rendering$` false, no scope.* |
| **`$form()`** | `particle.ts:481` | *YES, but it reacts on its own.* |

***And there is a fifth, which is what makes naive removal dangerous.*** **`substitute()` resolves an element's TYPE through `askedFor`, which walks `asker[$parent$]` outward** *([augment.ts:119](../../package/src/implementation/augment.ts) → `chemical.ts:1115` → `chemical.ts:1687`)*. **`$parent$` is threaded at mount — between the two passes.** *So the settle pass searches a strictly longer lineage than the render pass, and can resolve a registration the render pass could not. Different `element.type`, `diff` true, one more render — **permanently, on every first mount where an ancestor registered anything**.*

***That is not a bug in the effect. It is the effect doing its job, and it is why the answer is not "delete it".***

## <a id="the-question"></a>The question that was actually asked

> ***"Maybe we need ALL the diffs to first be taken after bond constructor call — its whole purpose is no update statefulness hence construction. And then AFTER a batch of things happens that hasn't actually affected the view, don't we take our reference diff? It should happen AFTER the view first contributes markup and then after it is rendered?"*** — Doug, 2026-09-08

**The bond-constructor half is already true and does not need building.** *[`chemical.ts:288-324`](../../package/src/abstraction/chemical.ts) raises `$rendering$` around the whole bond constructor, and [`bond.ts:225`](../../package/src/abstraction/bond.ts) is `if (this[$rendering$]) return;` — a write there stores its value and wakes nothing.* **The guard tests the WRITTEN chemical, not the writing one**, *so a bond constructor writing a member of a DIFFERENT chemical is not covered — and there are two real instances of exactly that in the public library ([`Section.tsx:22-27`](../../../.public/package/src/writing/Section.tsx) and [`Paragraph.tsx:44-50`](../../../.public/package/src/writing/Paragraph.tsx)), both saved by a single `@inert()` on `mention` and by nothing else.*

**The second half is the open design.** *The window that matters is one COMMIT, not one component, and passive effects flush bottom-up — so a root-level pass runs after every descendant's `belong`, `$form`, `$parent$` threading and hydration microtask.* ***One settle pass per commit, taken at the root, sees exactly what 517 per-component passes see.***

**Three things make that harder than it sounds, and each is written here so nobody rediscovers it:**

1. ***It is not a mount effect and must not become one.*** *The effect has no dependency array, so it re-runs on every commit — and a later commit that mounts new children has the same problem the first mount does.* **The replacement is once per commit, not once after mount.**
2. ***The effect does two unrelated jobs.*** *`p[$resolve$]('effect')` is per-component lifecycle and has to stay per-component. Only the redraw and the diff can move.*
3. ***A root pass must reproduce the per-component context or it will diff false-positive for reasons unrelated to state.*** *The body's cache was produced under `withAsker(p, …)` with `$rendering$` raised; `drawing()` gates configuration errors and `$Reagent` takes the `$rendering$` fast path. Dropping that context changes the drawing itself.*

## <a id="what-not-to-break"></a>What must not break, named exactly

***One test pins the number arithmetically, and it is the only one.*** **[`tests/abstraction/assignment.test.tsx`](../../package/tests/abstraction/assignment.test.tsx):**

```js
it('and it is TWO passes more than the same page assigning nothing', () => {
    expect(assigning - plain).toBe(2);
});
```

*Today a non-assigning page is 3 (discarded + kept + settle) and an assigning page is 5 (3 + the woken render and its settle), so the difference is **2**. Remove the settle pass and the difference becomes **1**, and the promise goes red.* **It is a real promise about a real behaviour and it needs re-deriving, not deleting.**

***And [The Assignment](../composition/14-the-assignment.md) states the number as canon*** — *"a page drawing one top, two tops, or no chemical at all draws the same three times."* **That sentence must be re-measured and rewritten in the same act as the change.**

**[`lineage.test.tsx`](../../package/tests/abstraction/lineage.test.tsx) survives.** *Its promise is RELATIVE — "the writer is drawn no more than one that writes no chemical" — so it compares two counts and stays green at three, at two, or at one.*

**`counting: false` must survive.** *It gates exactly one statement, `settled(asker, pass)`, and cannot change the returned node. A root pass that counts will corrupt `passes` and fire spurious runaway and reorder errors.*

## <a id="found-on-the-way"></a>Four defects found on the way, none of them the subject

| | |
|---|---|
| ***`@inert()` on a `$`-lowercase member is silently ignored, and this library says it works*** | **[`bond.ts:41-47`](../../package/src/abstraction/bond.ts) short-circuits — `if ($Reflection.isSpecial(this.property)) return true;` — BEFORE `inertOf` is consulted.** *[Decorators](../reactivity/06-decorators.md) says "`@inert()` opts a `$`-prefixed property out of reactivity" and offers `@inert $cache = new WeakMap()` as its example. That does nothing.* **Nobody has written one — the repository's only `@inert()` is on `mention`, which is bare and works — so it is a trap standing open rather than a live fault.** ***It is also the reason `$this` could not be excluded and had to be deleted instead.*** |
| ***the settle-effect ignores `$show`/`$hide` and `$devError$`*** | *`particle.ts:509` calls `[$renderView$]()` unconditionally, while the render body returns early for a filtered component **without writing `$viewCache$`**.* **So a hidden component draws its whole view on every commit, and `diff(current, undefined)` is true — one guaranteed extra render for every hidden component at mount.** |
| ***`equivalent()` can never equal two Maps, Sets or Dates, and `snapshot()` deliberately walks them*** | *[`scope.ts:13-35`](../../package/src/implementation/scope.ts) clones a Map, Set or Date by value; `scope.ts:85` then compares the snapshot with `equivalent()`, which rejects any prototype that is not `Object.prototype`.* **Any reactive member holding one of those, read inside a scope, is unconditionally dirty at `finalize()`.** *It does not fire on these pages only because no scope is live during a render.* |
| ***`$Synthesis.bond` is not idempotent, and `[$bond$]` defeats its own guard*** | *`[$bond$]` allocates a fresh `{ children }` literal every call, so the `$lastProps$` identity short-circuit can never fire.* **The user's bond constructor IS memoised by `sameArgs`; the machinery around it is not** — *a new context, `React.Children.toArray`, the inline scan, a re-bond of every child whose props object was rebuilt, a descriptor per child, and two `molecule.reactivate()` calls, every render, to arrive at "nothing changed".* |

## <a id="reading"></a>The reading, in the order it pays

**The render pathology is already catalogued, and this chapter adds to it rather than replacing it.** *[Solutions 12](../../../.public/.lib/solutions/12-the-writing-that-looped-its-page.md) — a host rendering 41 times and its child zero. [16](../../../.public/.lib/solutions/16-the-parse-that-woke-its-own-parents.md) — a reading called during a render may not build a chemical. [29](../../../.public/.lib/solutions/29-the-bond-that-woke-the-tree-it-was-building.md) — a field assignment in a bond constructor. [40](../../../.public/.lib/solutions/40-the-render-that-made-things.md) and [45](../../../.public/.lib/solutions/45-the-view-that-constructed-its-parts.md) — a view READS and never MAKES, three appearances and three worker deaths. [44](../../../.public/.lib/solutions/44-the-enforcement-that-detonated-per-render.md) — `specifically` runs many times and may create but never mutate. [52](../../../.public/.lib/solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md) — the pieces a writing remade each time it drew.*

***And Solutions 52 is corrected here.*** **It accounts for mount as "two passes at mount (the first paint and the change-detection effect)".** *The stack traces say both of those are the React render body, and the change-detection effect is a **third**.* **The mount cost has been under-counted by one pass since it was written down.**
