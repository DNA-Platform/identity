# public-audit-parse

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**Confirm that nothing is rendering all the way down.** The library declares seven composition levels — Book, Chapter, Section, Paragraph, Sentence, Word, Letter — and each level's type knows how to make the one beneath it. **The page is supposed to chunk at the paragraph and stop.** This skill proves that it did.

> ***Doug's rule, 2026-09-08, and it is two rules:*** **"Letter-Paragraph parts literally shouldn't be called. In fact, almost none of them should even be created though creation isn't a hard rule."**

| | |
|---|---|
| ***HARD*** | **`parts()` is never called on a `$Paragraph`, `$Sentence`, `$Word` or `$Letter`.** *Zero. A single call is a finding.* |
| ***SOFT*** | **almost none of those levels should be constructed.** *Creation is not forbidden; a population that grows with the page is the signal* |

### <a id="the-cutoff"></a>THE CUTOFF IS THE PARAGRAPH, and above it the parse is AFFORDED

> ***Doug, 2026-09-08, ruling on the cost:*** **"Yes you can pay for the parse above Paragraph. That's our cutoff."**
>
> **"A book only has chapters. The whole point of composition is that. We should validate book parts because it's above section. We should validate section parts. Neither should parse downward."**

***This settles a question the audit had left open, and it settles it in both directions.*** **Above the paragraph the parse is not a cost to be avoided — it is what composition IS**, *and a book validating that it holds only chapters, or a section validating that it holds only paragraphs, is entitled to ask for its parts.* **Below the paragraph the parse is forbidden**, *and that is what the hard assertion above measures.*

***AND THE SECOND HALF IS A SEPARATE RULE THAT NEEDS ITS OWN MEASUREMENT.*** **"Neither should parse downward."** *A book asked for its parts answers CHAPTERS and stops; it does not go on to ask each chapter for its parts. A section answers PARAGRAPHS and stops.* **One level, one step** — so a call on a book must not produce a call on a section in the same act. *That is a fact about the CALL GRAPH, not about the totals, and the counter that proves the hard assertion above cannot see it: it counts calls per class and cannot tell a book's own descent from a section's.* **A depth-stamped counter is what it needs, and it is not built yet.**

> ***THE PROMISE OWED, in Doug's words:*** **"We should have a test for that as a promise."** *A count in an audit is a reading taken once; a promise goes red when somebody breaks it.* **Both are wanted, and the audit is not a substitute for the promise.**


**This audit runs under [the five phases](01-public-audit.md#how-an-audit-runs) and [the fix-eagerly rule](01-public-audit.md#fix-what-has-a-clear-solution)** — *it reads, argues, researches what is already written down, designs the fix, and reports; and a defect with one obvious correct answer is repaired rather than raised as a question.*

## Why calling it is the thing that matters

**[`$Composition.parts()`](../../package/src/writing/Composition.tsx) is where the descent happens.** It asks its kind for `below()` and hands the tokens to [`reflection.template(beneath).makes(tokens)`](../../package/src/utilities/Reflection.tsx) — so **a level that is asked for its parts BUILDS the level under it.** Each `makes()` also builds a second chemical beside every piece it makes, its `mention`, so **one call costs two objects per piece**.

**And the descent is one call deep at a time, which is what makes it stoppable.** [`$Section`](../../package/src/writing/Section.tsx) is the only level that overrides `reading()` to go through `reflection.wrapped(this)` — that is the one place a draw reaches `parts()`. Nothing below Section does, and **nothing below Section should start.**

**The memo does not save you.** [`Parser.parse`](../../package/src/utilities/Parser.tsx) memoises per writing in a `WeakMap`, so the *second* call is cheap — but the first one already built the level beneath, and it is the building that is the cost.

## Run it

**[`03-public-audit-parse--probe.cjs`](03-public-audit-parse--probe.cjs) installs every counter and takes them all out again**, backing up each file before it touches it and reverting the lot if any anchor fails to match — so a rename cannot leave the tree half-patched.

```bash
node library/.public/.lib/the-public-skillset/03-public-audit-parse--probe.cjs install <scratch>/bak
#   ... build both packages, then drive with 02-public-audit-performance--drive.mjs ...
node library/.public/.lib/the-public-skillset/03-public-audit-parse--probe.cjs revert  <scratch>/bak
```

**The driver prints the verdict itself** — `PASS` when `parts()` was never called on a `$Paragraph`, `$Sentence`, `$Word` or `$Letter`, and `FAIL` naming the level and the count when it was.

***Last run, 2026-09-08, on a probed production build:*** **78 on `$Section`, 3 on `$Header`, and nothing below.** *`PASS`.*

## Steps

1. **Build both** — see [the trap](01-public-audit.md#read-this-first-or-the-numbers-will-mislead-you). A probe in `.public/src` does nothing until `npm run build` has run in the package.

2. **Instrument `$Composition.parts()`**, counting by `this.constructor.name`. This is the hard assertion.
   ```
   ASSERT zero entries for $Paragraph, $Sentence, $Word, $Letter.
   ```
   Report the whole histogram, not just the assertion — a level appearing that never appeared before is worth seeing even where it is allowed.

3. **Census every chemical construction by class.** Patch the type stamp in [particle.ts](../../../chemistry/package/src/abstraction/particle.ts) — the line that assigns `this.constructor` — and bucket by name. **Also record whether the construction happened before anything rendered**, by flipping a flag at the top of `$lift`'s component. That split is what tells import-time cost from render-time cost.

4. **Cross-check with the specifications.** Instrument [`Specification.check`](../../package/src/utilities/Specification.ts) and count by `constructor.name`. **`WordSpecification`, `SentenceSpecification` and `LetterSpecification` must not appear.** *A specification running is independent evidence that its level was built, and it will catch a construction path the census misses.*

5. **Revert every probe in the command that added it**, and confirm with `git status` in the same command.

## What it looked like when it was right

***Measured 2026-09-08 at commit `40d9667`, production build, headless Chrome.*** **The chunking was working.**

| | `/article` | `/turing` | `/` |
|---|---|---|---|
| **`$Letter` · `$Word` · `$Sentence` · `$Paragraph` instances** | ***0*** | ***0*** | ***0*** |
| `$Eval` | 6,281 | 6,421 | 6,159 |
| `$Block` | 3,762 | 3,802 | 3,686 |
| classes with exactly one instance | 126 | 126 | 126 |
| **constructed before any render** | **9,587** | **9,587** | **9,587** |

**And the specification count agreed from the other side:** on `/article`, **7,665 rule executions across 21 specification classes, and not one of them was `Word`, `Sentence` or `Letter`.**

> ***SO THE 10,000 IS NOT PARSE DEPTH.*** *That was the first hypothesis and it was wrong.* **The population is `$Eval` and `$Block`, and both come from one idiom that every bond constructor in this library writes** — `super.$X($check(block, $Block).concat($check($TypeOfX, '!')))`. *`$check(Type, '!')` costs a throwaway chemical; `.concat` costs a block; and it runs once per level of the class chain per element.* **Two objects per level per element, to say what kind something is.**

## The two numbers that also fell out, and both are findings

- ***Every `$Phrase` on the article page is invalid.*** **`$composesWhatItHolds` threw 326 times and `PhraseSpecification` ran exactly 326 times** — *"a piece of writing holds nothing above its own level, and this one holds something above it."* **That is the branch's 326 console errors**, present on `main`, swallowed to `console.error`.
- ***`$stopsAtItsEnd` threw 153 times*** — *"a sentence stops once, at its end, and this one stops before it."*

**Neither is a performance defect and both are real.** *They belong in [Solutions](../solutions/.cover.md) when they are diagnosed; this skill's job is only to keep counting them.*

## Reading, if the count comes back wrong

- **[Composition](../../package/src/writing/Composition.tsx)** — `parts()`, and the `accept` closure that decides whether a token is kept or reduced
- **[Parser](../../package/src/utilities/Parser.tsx)** — `parse`, the per-writing memo, and `sentences`/`words`/`letters`
- **[Section](../../package/src/writing/Section.tsx)** — `reading()`, the one override that puts `parts()` on the draw path
- **[The Three Passes](../../../chemistry/.lib/particle/12-the-three-passes.md)** — why anything on the draw path costs three times what you think it does
