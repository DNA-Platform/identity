# Sprint 50 — The Suite You Cannot Afford to Run

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** `implementation-ready` *for U1–U4;* `design owed` *for U5–U7, and they are marked so*
- ***The chapter name is a PROXY; Doug's to rename.***

---

## <a id="requirements"></a>Requirements — ***Doug's words, 2026-09-08***

> ***"The performance is in the tests. We have to fix. What is the plan? We have a test suite that is too long to run. Sigh… we have the parent bug. What else? Make a future sprint plan please."***

**Approved as stated.** *Three things are asked for: the suite made runnable, the parent bug closed, and everything else that is open named in one place so nothing is carried in somebody's head.*

## <a id="why-now"></a>Why this sprint and not more of the last one

***[Sprint 49](53-sprint-49--the-five-seconds-before-the-page.md) landed its main fix*** — `/article` went from **339,122 chemicals to 10,282** and about five seconds to about one, because a rule was driving the parser ([Solutions 56](../solutions/56-the-rule-that-drove-the-parser.md)). **What it also exposed is that the loop under it was being paid by every promise in the suite too**, and that nobody has ever measured what a test run costs or why.

***A suite too slow to run stops being a gate and becomes a ceremony.*** *It is the reason a fifteen-fold regression reached the production bundle unnoticed: the thing that would have caught it was too expensive to consult.*

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · The suite is MEASURED before any of it is changed

***Nobody has split a test run into its parts.*** **`.public`'s `npm run test` is `tsc --noEmit` then a full rollup build then vitest**, and which of the three is the wall is unknown. **Chosen over** *going straight for the build*, which is the obvious suspect and therefore the one most likely to absorb credit it did not earn.

### <a id="d2"></a>D2 · The build in the test loop is a DESIGN, not an accident

**The tests read `dist` on purpose** — *"through the front door", so rollup owns the module graph and the cycles it has already resolved stay resolved.* ***That decision is not being reversed by a performance sprint.*** **What is on the table is paying for it once rather than every run.**

### <a id="d3"></a>D3 · The parent bug is chemistry's, and it is now partly fixed and UNMEASURED

***Two faults were found and repaired in `chemical.ts`, and a third was ruled on:*** *a chemical kept the discarded `$Eval` host as its parent; an `$Eval` is its own parent, so walking up from a chapter was **a cycle, not a chain**; and `parent` is now **get-only** on Doug's ruling.* **None of it has been measured against `.public`, because the suite is what this sprint exists to make affordable.** ***So the first measurement of the sprint pays for the last one.***

### <a id="d4"></a>D4 · Everything open is written down here, including what is not this sprint

*Doug asked "what else". **A list nobody wrote down is a list somebody is carrying**, and this session has carried it long enough.*

## <a id="units"></a>Units

### <a id="u1"></a>U1 · What a test run actually costs, split three ways

***DONE, 2026-09-08, and the answer was not the tests.***

| phase of `npm run test` | | |
|---|---|---|
| `tsc --noEmit -p src/tsconfig.json` | **8,314 ms** | *26%* |
| ***`npm run build` — rollup*** | ***19,890 ms*** | ***62%*** |
| **`vitest run`** | **3,830 ms** | ***12%*** |
| | ***32,034 ms*** | |

***The promises are the cheapest twelfth of it.*** **A run spent twenty seconds bundling and under four seconds testing**, and the bundle was there because [D2](#d2) put it there — the tests read `dist` on purpose.

*One false number was produced and withdrawn on the way: `--reporter=basic` is not a reporter in this vitest, so the run failed at startup in 4,049 ms and **that time was very nearly reported as the suite's**. It agreed with the real number to within 200 ms, which is exactly how a wrong measurement survives.*

### <a id="u2"></a>U2 · The parse fix's effect on the suite, measured

| | |
|---|---|
| ***mechanism*** | **The loop [Sprint 49](53-sprint-49--the-five-seconds-before-the-page.md) closed ran in every promise that builds a document, not only in the browser.** *A test that builds a section was building its sentences, words and letters too.* **Measure the suite at the commit before the fix and at the commit after** |
| **files** | *none* |
| **depends on** | [U1](#u1) |
| ***visible end*** | ***the share of the suite's wall time that was the loop***, which is either most of it — in which case much of this sprint is already done — or it is not, and we know that too |

### <a id="u3"></a>U3 · The build is paid once, not once per run

***DONE, 2026-09-08, on Doug's ruling*** — **"We have to remember to rebuild typescript by hand."**

| | |
|---|---|
| `npm run test` | ***`vitest run`*** — **3,830 ms** |
| **`npm run test:gate`** | *the honest chain: `tsc`, then the build, then the suite* |

***The loop is eight times faster and the gate still exists.*** **What it costs is the risk [Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md) is written about** — *a suite that passes against a stale build* — **and the mitigation is the ruling itself: the build is a deliberate act now, not a thing that happens to you.**

### <a id="u4"></a>U4 · The parent bug closed and promised

***DONE for `.public`, 2026-09-08 — `tsc` 0 and 80 of 80***, including *a chapter handed to a book answers that book*, which had been red.

**What was wrong, in three parts:** *a chemical kept the discarded `$Eval` host as its parent; **an `$Eval` is its own parent, so walking up from a chapter was a CYCLE**; and what was written into a chemical was never held by it — `$(<Book />, cover, chapter)` left the chapter held by nobody.* **All three are fixed where the host is thrown away, and `parent` is get-only.**

***AND THE FIX EXPOSED A HANG THAT HAD BEEN HIDING BEHIND THE BUG.*** **`Reflection.indent()` walks `at.parent` with no guard.** *While a writing's parent was a dead `$Eval` — not a writing — the walk stopped on its first step **by accident**. The moment parents became real, a root writing is its own parent and the loop never ended; `classNames` calls it on every frame, so the whole suite hung after 26 promises.* **The guard is the one `book` already had, and it is one line.**

> ***A walk with no termination condition passed for years because a bug was stopping it.*** **Fixing the bug is what made it a hang.**

**Still open:** *the Lab's `$Vessel` assigns `parent` in a bond constructor and `parent` is now get-only — **what a chemical made inside a bond constructor is held by is undecided**, and it is the last piece of this unit.*

### <a id="u5"></a>U5 · ***DESIGN OWED*** — construction leaves module evaluation

***No mechanism, no files.*** **Doug, twice:** *"We shouldn't even be evaling the chapters in place. That is module load time. We write it wrong. Something should be called somewhere else."*

**A chapter module ends `export default $(<Chapter>…</Chapter>, Chapter)`, so importing it constructs the whole tree before React exists.** *That is why the seconds sat in front of the page rather than inside it, and why a chapter's only holder at import time was the scaffolding that evaluated it.*

***The design question is what a chapter module exports instead*** — *something written at module scope and built when the book is* — **and it is a question about how an application is authored, which makes it Doug's to direct.**

### <a id="u6"></a>U6 · ***DESIGN OWED*** — everything renders three times

***No mechanism, no files.*** **Measured on `/article`: 2,184 renders to draw 230 writings.** *71 paragraphs render 213 times, 28 headings 84, 25 sections 75 — **exactly three each**, uniform and independent of content — and each writing's TYPE renders three times alongside it while `$Type.view()` and `$Type.frame()` both return `null`.*

**The renders arrive in two waves with a 175 ms gap between them**, so it is one pass and then a full repaint, not three passes. ***What schedules the second wave is not known***, and a probe on `$Reaction.react()` recorded zero repaint requests, which is not credible and is itself the first thing to explain.

### <a id="u7"></a>U7 · ***DESIGN OWED*** — a serialization framework

***No mechanism, no files.*** **Doug:** *"we clearly need a serialization framework. Chemistry has symbolization mechanics. But we can add that to a design planning for later."* **Raised while making `$Atom` stop persisting by default** — *persistence is now opt-in, which makes the absence of a real serialization story visible rather than hidden behind a default.*

## <a id="everything-open"></a>What else is open — ***the answer to "what else"***

*Named here so it is written down, whether or not it is this sprint.*

| | | |
|---|---|---|
| **`bondName` per chemical** | *a per-class fact recomputed per instance, over the whole class chain* | **866 ms when last measured**, before the parse fix — *the share is now unknown* |
| **the registry per construction** | *`registered` ← `askedFor` ← `view` ← `$check`* | *a cache here is how a registration goes silently dead — [Solutions 06](../solutions/06-the-class-that-was-not-the-class.md)* |
| ***no performance gate*** | *the 6 September report said 220 ms and nothing watched it* | ***the only item that prevents a repeat*** |
| **the nested anchor** | *a `$Title` carrying a `$Reference` draws an anchor inside an anchor* | *visible on both routes; mine and unfixed* |
| **387 broken links** | *in the branch library, some real and many false positives from code spans* | *the checker reads `` `this.name` `` as a link* |
| ***rulings owed*** | *proxy names across three sprints; whether a piece of writing carries the account of its own making by construction; whether a disambiguation page is a catalogue or a defect* | *[Sprint 48](52-sprint-48--the-level-a-writing-generates.md) and [the pages chapter](../the-semantics-of-books/17-the-pages-of-a-third-person-library.md)* |

## <a id="risks"></a>Risks

| | |
|---|---|
| ***measuring the suite with the suite*** | **[U2](#u2) compares two commits, and everything else in the tree moved between them.** *Mitigated by timing the same test FILE rather than the whole run* |
| ***a conditional build that goes stale*** | ***the exact failure this branch already has a chapter for*** — [Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md), *a suite that passed against a stale build.* **So `npm run test` always builds and only a named fast loop skips it** |
| ***the parent fixes are unmeasured*** | *they are in the working copy and green in chemistry alone. **They may have broken `.public` and nobody knows***, which is [U4](#u4)'s first act |
| ***both parent walks guard SELF only*** | **[0a's limit, on the record rather than fixed](#u4): `book` guards `holding !== this` and `indent` guards `at.parent === at`, so a TWO-cycle — a parents b, b parents a — still runs forever in either.** *Chemistry sets parents now and should make that impossible, and neither walk will carry a visited-set when it runs on every frame — but it is the same class of thing that just cost a hang* |
| ***U5 and U6 look like tuning and are not*** | *both change what the framework does, not how fast it does it. **Marked design owed and denied files** so they cannot be picked up as chores* |

## <a id="where-things-stand"></a>Where things stand

- [x] ***Sprint 49's fix landed*** — *339,122 chemicals to 10,282; the parser is asked only by a chapter or a section; three promises hold it*
- [x] ***the `$Eval` parent cycle found and fixed*** — *walking up from a chapter was a loop, not a chain*
- [x] ***`parent` is get-only*** — *Doug's ruling, chemistry `tsc` 0 at the time it was made*
- [x] ***U1 · what a test run costs*** — **bundle 19,890 · tsc 8,314 · vitest 3,830**
- [ ] U2 · the parse fix's effect on the suite
- [x] ***U3 · the build is out of the loop*** — *`npm run test` 32,034 ms to 3,830*
- [x] ***U4 · the parent bug closed*** — *80 of 80; the unguarded `indent` walk it exposed is fixed. **The Lab's `$Vessel` remains***
- [ ] U5 · *design owed* — construction leaves module evaluation
- [ ] U6 · *design owed* — everything renders three times
- [ ] U7 · *design owed* — serialization

---

*Written 2026-09-08 at Doug's request, at the end of the session that produced [Sprint 49](53-sprint-49--the-five-seconds-before-the-page.md). **The working copy is the truth**: chemistry is built and green on its own gate; `.public` has not been measured since chemistry was rebuilt, and that measurement is [U1](#u1)'s first act rather than a number this chapter is allowed to state.*
