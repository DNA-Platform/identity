# Sprint 49 — The Five Seconds Before the Page

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** `implementation-ready`
- ***The chapter name is a PROXY; Doug's to rename.***

---

## <a id="requirements"></a>Requirements — ***Doug's words, 2026-09-07***

> ***"I need you to do a performance audit of .public using .wiki as the test. It needs serious work. It's very very very slow. What's going on in specify. What can we do? Or is it something else?"***

**Approved as stated.** *The audit is done and is written below; the units are what it found.*

## <a id="measured"></a>WHAT WAS MEASURED — ***before any unit was written***

***Method:*** *puppeteer over CDP, the sampling profiler at 50µs, three consecutive loads per route, the demo on the running dev server and again on a `vite build` → `vite preview`. **The page's own drawing is timed separately from everything before it**, because that separation is the finding.*

| | **Sept 6 report** | ***now*** |
|---|---|---|
| **`/` — to a drawn book** | **390 ms** | ***5,748–6,993 ms*** |
| **`/article`** | 330–420 ms | ***4,981–5,904 ms*** |
| **`/article` DOMContentLoaded** | 220–300 ms | ***5,791 ms*** |
| ***production `/`*** | ***220 ms*** | ***4,984 ms*** |

***A regression of roughly fifteen times, and it is NOT dev tooling*** — **the production bundle is 4,984 ms against the dev server's 5,791.** *Building it away is not available.*

### <a id="not-specify"></a>THE ANSWER TO THE QUESTION ASKED — ***it is not `specify`***

**`specify` is 20 ms of 8,730.** *The whole specification chain — `specify`, `specifically`, `check`, `beneath`, `classNames` — is **about 69 ms, under one percent**, and the 48 rules are not the problem in any measure taken.*

| where the time is | ms | share |
|---|---|---|
| ***`chemical.ts`*** | ***3,315*** | ***38%*** |
| React | 1,673 | 19% |
| garbage collector and idle | 1,271 | 15% |
| `particle.ts` · `bond.ts` · `reaction.ts` | 1,089 | 12% |
| **the whole of `.public`** | **651** | **7%** |
| ***specification proper*** | ***69*** | ***<1%*** |

### <a id="the-shape"></a>And the shape of it — ***the drawing is fine; the construction is the wall***

***Timed from `domcontentloaded`, the page reaches its full 228 writings in 372 ms*** — **which is the Sept 6 number, unchanged.** *So nothing about rendering regressed.* **The five seconds happen BEFORE the page: the document is CONSTRUCTED at module evaluation**, and 62 resources totalling 3,009 ms of parallel network with a 91 ms slowest request do not account for it. ***It is main-thread work.***

**Who calls the hot functions, read from the profile's call tree:**

| | |
|---|---|
| `parseBondConstructor` ← `$Eval` ← `evalElement` ← **`view`** | ***222 hits*** — *a chemical constructed inside a view* |
| `bondName` ← `$Eval` ← `evalElement` ← **`view`** | ***192*** |
| `registered` ← `askedFor` ← `view` ← `$check` ← `$Writing` | ***283*** — *a registry lookup per construction* |
| `$Html$` ← `$Block` ← `check` | ***99*** — *a block made during a check* |

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · The audit's conclusion is recorded BEFORE the fixes, and it contradicts the question

***`specify` is exonerated by measurement, not by argument.*** **Chosen over** *tuning the specification chain, which would have cost real work for under one percent.* **This is written first because the next person will ask the same question**, and the answer must be findable without re-profiling.

### <a id="d2"></a>D2 · A per-CLASS fact recomputed per INSTANCE is the first thing fixed

***The cheapest, safest and largest single win available is memoisation of facts that cannot change.*** **Chosen over** *restructuring construction*, which is larger, riskier, and not yet designed. **Ordering matters here**: a structural change measured against an unmemoised baseline will be credited with wins it did not earn.

### <a id="d3"></a>D3 · EVERY unit in this sprint is in `chemistry`, and that needs Doug's explicit exception

***The standing ruling is "DONT CHENGE CHEMISTRY."*** **`.public` is 7% of the load; there is no version of this sprint that lives in `.public`.** *So the sprint does not start until Doug says so, and the chapter says this rather than assuming the audit implies permission.*

### <a id="d4"></a>D4 · Nothing lands without a before-and-after on the same command

***The Sept 6 report existed the whole time and nothing watched it.*** **A fifteen-times regression reached production and was found only because a person said the page felt slow.** *So each unit reports the same measurement before and after, and [U5](#u5) makes it repeatable.*

## <a id="units"></a>Units

### <a id="u1"></a>U1 · `bondName` answers once per class, not once per chemical

| | |
|---|---|
| ***mechanism*** | **`$Synthesis.bondName` walks `Object.getOwnPropertyNames(proto)` and calls `authored` — two regex replaces — on every own member, and it runs from the `$Synthesis` constructor, which is once per CHEMICAL.** *The answer is fixed when the class is defined.* **Memoise on the constructor** |
| ***measured cost*** | ***`bondName` 504 ms + `authored` 362 ms = 866 ms, about 10% of the load*** |
| **files** | `library/chemistry/package/src/abstraction/chemical.ts` |
| **depends on** | *nothing* |
| ***visible end*** | ***the same three-load measurement, `/` and `/article`, with the milliseconds stated before and after*** |

### <a id="u2"></a>U2 · The registry is asked once per component, not once per construction

| | |
|---|---|
| ***mechanism*** | **`registered` ← `askedFor` ← `view` ← `$check` — 283 hits.** *A `$check(X, '!')` resolves a DI registration by walking the registry on every construction. **The registration is a fact about a component and a scope**, and changes only when something registers* |
| **files** | `library/chemistry/package/src/abstraction/chemical.ts` |
| **depends on** | *nothing; measure after [U1](#u1) so the two are not confused* |
| ***visible end*** | ***`registered` gone from the profile's top twenty, with the page's own timing unchanged or better*** |

### <a id="u3"></a>U3 · ***DESIGN OWED*** — why a chemical is constructed inside `view`

***This unit has no mechanism and is therefore not buildable.*** **It is deliberately denied files, scenarios and dependencies** so it cannot be mistaken for work.

**What is known:** *`parseBondConstructor` and `bondName` are both reached through `$Eval` ← `evalElement` ← `view`, 222 and 192 hits.* **What is NOT known:** *whether that is one construction per writing at module evaluation — which would be correct and merely expensive — or a re-construction, which is [Solutions 16's rule](../solutions/16-the-parse-that-woke-its-own-parents.md) broken: **a view reads and never makes**.*

***The measurement that decides it, and it must be taken before any code is written:*** **count the chemicals constructed against the 230 writings drawn.** *Equal means expensive-per-construction and the answer is more of [U1](#u1). **Far greater means repeated construction**, and the answer is structural and needs its own design.*

### <a id="u4"></a>U4 · ***DESIGN OWED*** — the document is built at module evaluation

***No mechanism, no files.*** **The demo writes `$(<Chapter>…</Chapter>, Chapter)` at module top level**, so importing a chapter constructs its whole tree before React exists. *That is what puts five seconds in front of the page rather than inside it.*

**The design question is whether construction can be deferred to first draw without losing what the eval-with-written form buys** — *and it is a question about the framework's shape, not a tuning exercise. It is named here so the sprint does not silently absorb it.*

### <a id="u5"></a>U5 · A performance gate that fails, so this cannot happen again silently

| | |
|---|---|
| ***mechanism*** | **One command that drives both routes three times, reports time-to-drawn and DOMContentLoaded, and EXITS NON-ZERO past a threshold.** *The instruments already exist in this session's scratchpad; what is missing is a home and a threshold* |
| **files** | `library/.public/package/` — *a script beside the package, and its numbers written into this chapter* |
| **depends on** | [U1](#u1), [U2](#u2) — *the threshold is set from the repaired number, not the broken one* |
| ***visible end*** | ***the command run in front of Doug, once green and once deliberately failed*** |

## <a id="scenarios"></a>Test scenarios — ***stated as needs***

| unit | the need |
|---|---|
| **U1** | *a class whose bond constructor is found by the fallback walk still finds it after memoisation* |
| **U1** | *a class RENAMED by the build — the `_$Writing` case the walk exists for — still resolves, since that is the whole reason the function is not a simple lookup* |
| **U1** | *two classes with the same `authored` name do not share an answer* |
| **U1** | *a subclass declaring its own bond constructor is not given its parent's* |
| **U2** | *a registration made AFTER a component has been resolved is seen — the cache must not outlive a registration* |
| **U2** | *a scoped registration and a global one resolve as they do today* |
| **U5** | *the gate fails when a deliberate delay is introduced, and passes when it is removed* |

## <a id="risks"></a>Risks

| | |
|---|---|
| ***a cache that outlives a registration*** | **[U2](#u2) is the dangerous one** — *DI resolved once and cached is exactly how [a registration goes silently dead](../solutions/06-the-class-that-was-not-the-class.md). **Mitigated by clearing on registration**, and by the scenario above being written first* |
| ***crediting a structural change with a memoisation's win*** | *[D2](#d2)'s ordering, and each unit measured on its own* |
| ***the profile is a sampling profile*** | *self time at 50µs is a good estimate and not an exact one. **The wall-clock three-load measurement is the number that decides success**, not the profile* |
| ***two sessions in `chemical.ts`*** | *`bondName`, `authored` and `registered` are three small regions; anyone else in that file is told which* |
| ***`$Eval` may be correct*** | *[U3](#u3) may find construction-per-writing is right and merely costly. **That is an answer, not a failure**, and it moves the work to [U4](#u4)* |

## <a id="where-things-stand"></a>Where things stand

- [x] ***the audit*** — *taken, with the numbers above; `specify` exonerated at under 1%*
- [x] ***the regression established*** — *fifteen times, present in the production build*
- [ ] **Doug's exception for `chemistry`** — ***the sprint does not start without it***
- [ ] U1 · `bondName` memoised
- [ ] U2 · the registry cached
- [ ] U3 · *design owed* — chemicals constructed inside `view`
- [ ] U4 · *design owed* — construction at module evaluation
- [ ] U5 · the gate

---

*The instruments used are in this session's scratchpad and are not committed. The Sept 6 report this corrects is [The Wikipedia Demo § the performance report](49-the-wikipedia-demo.md#the-performance-report--a-report-and-it-changes-nothing), whose conclusion — "the framework's own share is about 100 ms in production" — **was true when it was written and is not true now**.*
