# public-audit-performance

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Measure what a page of this library costs to open, and **prove that a change made it cheaper without making it wrong.** The second half is the whole skill: an optimization that is only measured on the clock will ship a page with the words missing.

Written 2026-09-08 out of a session that found the bottleneck and then very nearly shipped a fix that cut first paint by 36% and deleted three quarters of the article.


**This audit runs under [the five phases](01-public-audit.md#how-an-audit-runs) and [the fix-eagerly rule](01-public-audit.md#fix-what-has-a-clear-solution)** — *it reads, argues, researches what is already written down, designs the fix, and reports; and a defect with one obvious correct answer is repaired rather than raised as a question.*

## <a id="the-gate"></a>THE GATE — take these on every run, beside every number

**A performance result is four numbers and a hash, or it is not a result.**

| | |
|---|---|
| **`textLen` and `textHash`** | `document.body.innerText` — its length and a cheap rolling hash. ***Must be IDENTICAL before and after.*** |
| **node count** | `document.querySelectorAll('*').length` |
| **console errors** | count them; **must not increase** |
| **FCP and total blocking time** | the win |

> ***THIS GATE HAS ALREADY EARNED ITS KEEP ONCE.*** *Caching the type instance returned by `$check(Type, '!')` took `/turing` from 1900ms to 1208ms and `/article` from 1800ms to 1320ms.* **The node count was identical. The text went from 57,286 characters to 4,808.** *Neither the unit suites nor the clock could see it; only reading the rendered text could.*

## What the numbers were, so a change has something to beat

**Production build, served from a static localhost server, headless Chrome, median of five.** Taken 2026-09-08 at commit `40d9667`.

| route | FCP | total blocking | DOM commits | nodes | text |
|---|---|---|---|---|---|
| `/turing` | **1900ms** | 1682ms | **1** | 565 | 57,286 |
| `/article` | **1800ms** | 1404ms | **1** | 555 | 19,787 |
| `/` | **1692ms** | 1437ms | **1** | 501 | 1,009 |

***The DOM commits ONCE.*** *So this is not a repainting problem — it is a work problem, and all of the work happens before the first paint.* **Modules finish evaluating at ~1,937ms on `/turing` and ~1,024ms on `/`, while `domInteractive` is ~50ms** — so **React has not been called** for the first one to two seconds.

## Run it

**[`02-public-audit-performance--drive.mjs`](02-public-audit-performance--drive.mjs) serves a built directory and drives it**, printing the win and [the gate](#the-gate) on one line per route. It serves the directory itself on an OS-chosen port, so two audits can run side by side and nothing else has to be started.

```bash
node library/.public/.lib/the-public-skillset/02-public-audit-performance--drive.mjs <built-dir> <label> [runs]
```

*It also dumps the counters from [public-audit-parse](03-public-audit-parse.md) whenever that probe is installed, so one driver serves both skills.*

## Steps

1. **Build both.** See [the trap](01-public-audit.md#read-this-first-or-the-numbers-will-mislead-you) — `npm run build` in the package, *then* `vite build` on `.wiki/.public`.

2. **Serve the built output statically** with an SPA fallback (any unknown path returns `index.html`), on a port nothing else holds. **Do not measure the dev server** — its React build carries `logComponentRender` and `logComponentEffect`, which are pure dev overhead and will send you after the wrong function.

3. **Drive each route five times**, taking FCP, long tasks, and the whole gate. `blocking` is the sum of `duration - 50` over `longtask` entries.

4. **Count DOM commits** with a `MutationObserver` armed on `#root` at `DOMContentLoaded`. **More than one batch on a static load is a finding.**

5. **Count view passes per instance** if the question is about rendering rather than loading. Patch **both** call sites of `[$renderView$]` in [particle.ts](../../../chemistry/package/src/abstraction/particle.ts) — the render body and the settle effect — key by **object identity**, and stamp each call with whether `$viewCache$` was already set. The signature to expect is **`B-B+C+`, three passes, on every instance**; the full account is [The Three Passes](../../../chemistry/.lib/particle/12-the-three-passes.md).
   > ***Keying by `cid` is not enough and will give you two.*** *The two render-body passes share an instance, a cid and a call site, and differ only in whether the cache is set.*

6. **Profile with the CDP sampler and BUCKET BY TIME**, not by total self time. A flat self-time list mixes the import phase and the render phase into one ranking and hides which is which. 200ms buckets, top six per bucket, is enough to see the phases separate.

7. **Report the gate beside the win.** Every time.

## Where the cost actually is, so you do not re-derive it

***Measured 2026-09-08, and none of it is React.***

| | |
|---|---|
| **`$Eval`** | **6,421 per page load** — a throwaway `$Chemical` allocated at [chemical.ts](../../../chemistry/package/src/abstraction/chemical.ts) to host one `$()` call, then discarded. Its caller is `$check(Type, '!')`, which is in every bond constructor in this library |
| **`$Block`** | **3,802 per page load** — largely from the `.concat()` in that same idiom |
| **everything else** | **~167**, and 126 of those are class templates |
| **the specification suite** | **7,665 rule executions on `/article`, 479 of which THROW.** [`Specification.check`](../../package/src/utilities/Specification.ts) runs every rule in a `try` and a rule signals failure by throwing, so each failure builds an `Error` with a stack |
| **`$saysSomething`** | **1,146 executions**, each rendering the writing's entire subtree to a string to answer a boolean |
| **per-class facts recomputed per instance** | `bondName` **76,560 calls for 153 classes**; `authored` **363,361 calls**, two regexes each. ***Real but small*** — built and measured at only 9–22% |

> ***AND THE SHARED-TEMPLATE PROBLEM IS THE ONE THAT MATTERS.*** **`$check(Type, '!')` returns the class TEMPLATE** — every `$Section` on the page holds *the same* `$TypeOfSection` object — **and that shared chemical is re-bonded and re-parented once per mention.** *Doug's ruling, 2026-09-08:* **"You can't cache chemical. You'd need to design intermediate representation and if you created a caching system using chemicals, you made a serious error."** *Skipping the re-bond is what deleted the text, because the state each mention needs is smeared across one object.*

## The rules this skill runs under

- ***A probe is added and removed in ONE command.*** *Never leave one in the tree, and never split the add and the revert across two calls.*
- ***Read the changed file, not a number that moved.*** *Confirm the revert with `git status`, in the same command.*
- ***Take a control.*** *This branch's production build already logs 326 console errors on `main`; a session once spent twenty minutes blaming its own change for them.*
- ***Never leave build output or driver artefacts in the package.*** *Scratchpad only, and sweep after.*
