# The page I measured from the top

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** `demo` · `tooling` · `guessed-pattern` · `absent-case` · a detector that matched nothing and was read as a clean page · a suite that could not reach the fault because it never drew
- **resource:** [55-the-page-i-measured-from-the-top--check.mjs](55-the-page-i-measured-from-the-top--check.mjs)

---

## Symptoms

- **Doug, twice, on a page reported as nearly finished:** ***"Look at the bottom on mine. Yours is way way off."*** and ***"Guys not even close. A theme isn't working. It's totally broken."***
- **Every report I had given him was true about the top 1000 pixels of a 1146-pixel page.** *Every screenshot was taken with `clip: { y: 0, height: 1000 }`.*
- ***I reported "ZERO panels" on a page whose masthead read `$Chemistry: Bond Constructor Failed`.*** *The whole cover — wordmark, ten-language ring, search box — was absent, replaced by the refusal, and I sent that number to a teammate who was acting on it.*
- **The suite was green on the very shapes that were failing.** *Six demo shapes built verbatim through `dist` and asked to `specify()`: all six OK. The page drew two refusals.*

## The mechanism — ***three instruments, each blind in a different direction***

**FIRST, THE DETECTOR THAT COULD NOT MATCH.** *My panel probe was:*

```js
[...document.querySelectorAll('*')].filter(e => String(e.className).includes('exception'))
```

***The framework styles through styled-components, which emit hashed class names — `sc-kEqYZi khTxCd`.*** **There has never been a class containing `exception` on that page, so the filter returned `[]` every time, and I reported `[]` as *zero panels* rather than as *my probe found nothing*.** *This is `guessed-pattern` exactly: a query written from an assumption about the shape of the thing sought, whose empty result was read as evidence of absence.* **It cost four separate reports and one wrong number sent to a teammate.**

**SECOND, THE SUITE THAT NEVER DREW.** *I built every failing shape through the published package and called `specify()` on each:*

| built and asked | result |
|---|---|
| the article cover, verbatim | **OK** |
| the portal cover | **OK** |
| a title carrying a URL reference | **OK** |
| a paragraph holding a markdown link | **OK** |
| the table-of-contents entry `$Book.contents()` builds | **OK** |

***All six pass, and the page refuses.*** **The refusing objects are not in the book at all** — a census of the block before render and again after it found **one `$Cover`, zero `$Exception`, and nothing changed across the render**, while two panels stood in the DOM. *The chemicals that failed were **made during the draw** and discarded.* ***A promise that never renders cannot reach a defect that lives only on the render path*** — `absent-case`, where the absent case is *drawing at all*.

**THIRD, THE FIRST SCREEN.** *A viewport is not a page.* **`fullPage: true` is one word and its absence made every visual comparison I did structurally incapable of seeing the fault Doug was pointing at.**

***A FOURTH, FOUND 2026-09-08, AND IT IS THE SAME TRAP WITH A CLOCK.*** **Timing a test suite, I ran `npx vitest run --reporter=basic`.** *There is no `basic` reporter in this vitest; the run failed at startup, printed a stack, and executed **no promises at all**.* **I timed it at `4,049 ms` and was one sentence away from reporting that as the suite's cost.**

***What makes it the same disease is what makes it dangerous: the real suite is 3,830 ms.*** **A number produced by a run that did nothing agreed with the true number to within 200 ms.** *Nothing about `4,049` looked wrong — it was the right order of magnitude, stable, and reproducible.* ***It was caught only by opening the output file*** — *which is the same act that would have caught the empty detector above, and it is the only act that ever catches this.*

**The rule the three instruments already gave, restated for a clock:** ***a measurement of a thing that did not happen is not a small measurement, it is not a measurement.*** **So a timed run reports what it ran** — *tests executed, files collected, exit code* — **and a timing with no work behind it is an error, exactly as an empty match is.**

## What the instrument has to do instead

**Assert on what a reader sees.** *The refusal carries no class, no attribute and no tag of its own — but it always carries its words. `document.body.innerText` is the only surface that cannot be styled out from under a check.*

**Make an empty match an ERROR, never a value.** *This is the whole of it. A probe that matched nothing knows one thing for certain — that it did not measure — and that is a fault report, not a zero.*

**Measure the whole page, and both pages, at every width.** *Not the first screen. Not one breakpoint.*

**Wait for what changes layout, and cap every wait.** *Fonts change every box on the page; a lazily-loaded image never resolves, so an uncapped `await` on `image.onload` hangs the run rather than failing it.*

**Restart the server before believing the page.** *Rebuilding `dist` under a running vite makes it serve a stale or empty module, and the phantom faults that follow are indistinguishable from real ones.* **Solutions [5](05-the-suite-that-passed-against-a-stale-build.md) is the same disease in the suite.**

## The fix

**The resource beside this chapter, [`55-…--check.mjs`](55-the-page-i-measured-from-the-top--check.mjs), is those five rules as a program.** *Run it from the repository root with the demo served on 5200:*

```
node library/.public/.lib/solutions/55-the-page-i-measured-from-the-top--check.mjs
node …--check.mjs --only=portal --widths=1440 --out=<scratchpad>/check
node …--check.mjs --outline http://localhost:5200/        # discover selectors instead of guessing them
```

*It walks eleven widths from 1600 to 375, opens ours and Wikipedia's side by side, and for each named probe pair reports every box and computed-style difference. It exits non-zero on any fault, and it counts as a fault: a refusal in the visible text, object-text, a console error, a 404, a probe that matched nothing, and a count that came back wrong.* **`--outline` exists because the honest way to write a probe pair is to read the reference page's real structure first.**

***It found, in its first run, everything four hand-written probes had missed:*** *the dead cover, the content column capped at the article's measure instead of the portal's, the twelve project cards at 180px against Wikipedia's 303, and a footer 465 pixels shorter than the one it was being compared to.*

## Prevention

***A probe reports two different things — "the value is zero" and "I did not measure" — and only one of them is a measurement.*** **Every selector-driven check must fail loudly on an empty match.** *Nothing else in this chapter would have mattered if that one rule had been in place, because the first wrong report would have been caught by the second.*

**Ask what your instrument is structurally unable to see.** *A viewport clip cannot see the bottom. A class-name filter cannot see a hashed class. A suite that never renders cannot see the render path.* ***Each of those is a category of blindness, not a bug, and none of them will ever produce an error.***

**When a teammate is acting on your number, correct it before you do anything else.** *I sent "ZERO panels" and then spent a measurement on the next thing; the right order was the correction first.*

---

*Sibling to [the suite that passed against a stale build](05-the-suite-that-passed-against-a-stale-build.md) and to [the red that exercised nothing](26-the-red-that-exercised-nothing.md) — all three are **a green produced by a measurement that could not reach its subject**. **There the reach was broken by a stale artifact and by an inert fixture; here by three instruments each looking in a direction the fault was not.*** *And to [the rule that stopped running](54-the-rule-that-stopped-running-and-the-suite-improved.md), whose lesson is the inverse and the same: **ask what else would produce this number.***
