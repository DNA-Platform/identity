# The red that exercised nothing

- **author:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** demo · tooling · detached-context · gate-not-run
- **sprint:** [Semantics, Then Drawing](../projection/21-semantics-then-drawing.md#the-drivers)

---

***The inverse of [The green that exercised nothing](14-the-green-that-exercised-nothing.md), and it costs more.*** **A false green is believed and moved past; a false red is INVESTIGATED**, *and the investigation happens in the wrong codebase.*

## Symptoms

- **`STALLED at checkpoint 1 · why: Navigation timeout of 20000 ms exceeded`** — the demonstration's own driver, on its first navigation, against a server answering `200`.
- **`STALLED at checkpoint 50: Waiting for selector [data-book] failed`** — then, on the next run of the same unchanged driver, **`STALLED at checkpoint 5`**. *Different places on different runs.*
- ***Every stall was at a step that leaves a book and comes back to the shelf.*** **That was the only pattern**, and it pointed straight at the framework work the sprint had just done to books and catalogues.
- ***And the app was fine.*** **Every route rendered, every link worked, every navigation arrived** — `/` four spines, `/books` four spines, `/page` 3,622 characters, `/title` four titles in four distinct components — **with zero console errors and zero page errors throughout.**

## What did not work

- **Believing the message.** *"Waiting for selector `[data-book]` failed"* names a selector, so the first hour went to finding who emits `data-book` and what stopped emitting it. **The selector was never missing.**
- **Reading the pattern.** *Always at a return to the shelf* is a true observation and it is what made the sprint's own catalogue work the prime suspect. **A true pattern in the symptoms is not evidence about the cause**, and this one had a second explanation nobody had looked for: those are also the only steps that perform a **full browser navigation**.
- **Probing harder.** Six probes established that the shelf draws, the subject link reads correctly, the click navigates, and the spines return in about 1.5 seconds. *All true, all reassuring, none of it touching the defect* — because the defect was in the thing doing the probing.
- ***Writing a fourth driver.*** **Three drivers already existed and two of them were green.** *This is the failure the [tools chapter](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/08-the-tools-that-were-made-for-us.md) is about, committed by the person who wrote it* — **Doug stopped it:** *"Why are you having so much trouble driving a web app? We do this all the time. Scour the repo for evidence."*

## The mechanism — two causes, and the instrument owns both

### One · `networkidle` is not reachable on a cold dev server

[`verify-demo.mjs`](../../.archive/app/verify-demo.mjs) and [`verify-book.mjs`](../../.archive/app/verify-book.mjs) navigated with `waitUntil: 'networkidle0'` and `'networkidle2'`. **A cold vite compiles 170 modules on the first hit** — measured, not assumed — *and network idle is not reached inside a twenty-second timeout.*

***So the FIRST checkpoint of a driver fails against a working app***, and the failure is a navigation timeout, which reads like the app hanging.

### Two · a wait is bound to an execution context, and a page load destroys it

**This is the one that made the stall move.** `page.waitForSelector` polls **inside the page**, in an execution context that a full navigation tears down. Two steps in this demonstration perform full navigations:

| the step | what makes it a full load |
|---|---|
| **opening the algebra book** | [`the-books.tsx`](../../.archive/app/src/sections/the-books.tsx) — `if (book === algebra) { window.location.href = '/page'; return; }` |
| **following a subject link back to the shelf** | [`the-manifold.tsx`](../../.archive/app/src/sections/the-manifold.tsx) — `<DayChip as="a" href="/books" data-subject …>`, **a real anchor with no `preventDefault`** |

***A wait installed just before one of those dies with the context it was installed in***, and puppeteer reports it as the selector never arriving. **The wait fails on precisely the steps it exists for**, and it reports the app's landmark as missing rather than its own footing as gone. *That is why the stall moved between runs: it is a race with the load, not a property of the page.*

## Why nobody caught it

***NEITHER DRIVER WAS IN ANY `npm test`.*** **[`library/.public/package`](../../package/package.json)'s test is `tsc --noEmit && node app/typecheck.mjs && vitest run`** — *the two browser drivers are not in it, nor in any other script in the repository.* **A driver nobody runs is not a gate**, and these two had been rotting unwatched.

***And the working pattern was already in the repository.*** **[The chemistry harness](../../../chemistry/package/app/verify-all.mjs) navigates with `waitUntil: 'domcontentloaded'` and then settles**, and has never had this problem. *Six `verify-*.mjs` files exist across three packages; the two that stall are the two that use `networkidle`.*

## The fix

- **Both drivers navigate on `domcontentloaded` and settle**, which is the harness pattern that already worked.
- **`waitForSelector` is replaced by a `landmark()` poll** that catches the context swap, keeps polling across the load, and — when it does give up — **names the landmark that never arrived and why it was expected.**
- **Wired as `npm run verify`** in [the package](../../package/package.json), so they run.
- **The title section joined the walk**, which it had never been in — six checkpoints measured on **computed style**, because four distinct generated class names would pass while all four drew identically.

***92 checkpoints, 0 failed, 0 console errors*** — **31 across the page and the title, 61 through the books.** *The book walk had never once finished before this; its best previous run reached 49 of 61.*

## The lesson

**[Chapter 14](14-the-green-that-exercised-nothing.md) says: before reporting a green number, say what it exercised.** ***This is the same rule for a red one, and it needs saying separately because the failure mode is opposite.***

> ***A RED IS A CLAIM ABOUT THE INSTRUMENT UNTIL IT IS A CLAIM ABOUT THE CODE.***

**A false green is dangerous because nobody investigates good news.** *A false red is dangerous because everybody investigates it* — **and the investigation runs in the codebase the instrument was pointed at, not the instrument.** [The stale-build chapter](05-the-suite-that-passed-against-a-stale-build.md) reached the same sentence from the other direction: *a measurement that disagrees with the code is first a claim about which copy was measured.*

***Two tells, and both were present within the first minutes:***

| the tell | what it said here |
|---|---|
| ***The failure MOVES between identical runs*** | checkpoint 1, then 5, then 50, with nothing changed — **a race, and code does not race with itself** |
| ***A manual pass contradicts the automated one*** | *every route rendered by hand, with no console errors.* **When the eye and the gate disagree, the gate is the newer claim** |

***And the smaller lesson, which is mine.*** **I wrote a fourth driver before reading the three that existed** — *after Doug asked me to scour the repo, the answer was one grep away and it was in my own autobiography:* **"you don't have to build everything; sometimes the best engineering is knowing what to adopt."** *Reading a chapter is not consulting it, which is [the link I built three times](03-the-link-i-built-three-times.md) again, in a different room.*
