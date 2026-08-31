# The hang that ate the machine

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

***keywords:*** `model` · `framework` · `construction-throw` · `detached-context` · `render-loop`

---

## What was observed

***`npx vitest run` never finished.*** **Four hundred seconds, then eight hundred, with no test count and no failure** — *not a red suite, no suite at all.* **Meanwhile the machine went from 15.8 GB to `free MB: 8`**, and every other process on it began to crawl.

*Two numbers that made no sense beside each other, both real:*

| | |
|---|---|
| **the ARCHIVE project — 32 files** | ***40 seconds, all passing*** |
| **the SRC project — 18 files** | ***never completed in 400*** |

***And one file's phase breakdown, which is where it turned:*** **`Duration 42.01s (transform 263ms · import 384ms · tests 0ms · environment 266ms)`.** *Under a second of measured work and forty-two seconds unaccounted for, with the tests never reporting at all.*

## What it was

***A specification throwing inside a bond constructor, during render.***

**Every level's bond called `this.specify()`. When a rule fails, `$check` throws. A throw raised while a chemical is being BUILT, inside a render, is retried by the reaction system — and it throws again.** *The loop is **synchronous**, so nothing yields: vitest's five-second test timeout can never fire, and the worker spins until vitest kills it at about forty-two seconds.*

***THE TRIGGER IS TWO CONDITIONS AND BOTH ARE REQUIRED.*** **The correlation was perfect across all fifteen render tests:**

| the writing being rendered | what happened |
|---|---|
| **invalid, with STRING children** — `<Sentence>{'One. Two.'}</Sentence>` | ***drew its failure message, 2 seconds*** |
| **invalid, with CHEMICAL children** — `<Section>{[word(letter('h'))]}</Section>` | ***hung*** |

*Seven such call sites, at section, document, file, book and chapter. Nothing below section had chemical children in its failing case, which is the whole reason the lower levels looked fine.*

## Why it was so hard to see

***THE SUITE WAS POISONING THE MACHINE THAT MEASURED IT, and this is the part worth carrying.***

**Vitest's default pool is `forks`.** *On a fourteen-CPU box that is up to thirteen node **processes**, each loading the framework into its own heap.* **Every run killed by the hang orphaned all of them**, *and they accumulated across the evening until the box had 8 MB free.* **Then every later run thrashed — and produced numbers.**

| the same single file | |
|---|---|
| **on the starved box** | ***transform 26.04s · import 26.80s*** |
| **on a clean box** | ***transform 747ms · import 1.04s*** |

***Thirty-five times apart, same file, same config.*** **Killing the stale node processes returned 10,112 MB in one command.**

***And the corrupted numbers were not obviously wrong — they were PLAUSIBLE.*** *33 seconds, then 10, then 11 reads exactly like a cold cache warming up, which is a real phenomenon that really does look like that.* **Three hypotheses were built on them and all three were false:** *that the cost was `happy-dom` per file (environment was 2.8s against 26s of transform); that transform was per-worker rather than per-file (four files ran **faster** than one, which was cache state and not a per-worker cost); and that only one file touched the DOM (`drawn()` and `shown()` call `createRoot` inside the shared setup, so fourteen of eighteen do).*

> ***The diagnosis that named it came from another session on the same machine***, [`altered-states-5c`](../projection/31-organization.md), *which had lost a day to the same shape:* **a metric that moved for reasons unrelated to what you think you are measuring, and looked like a finding the whole time.** *Their rule, taken: **take a baseline twice on a quiet box before believing any difference**, because the spread between two identical runs is what a real difference has to beat.*

## The fix

***`specify()` came out of nine bond constructors and two test-local ones.*** **One file went from 44.87 seconds to 865 milliseconds.** *Doug's ruling is the general form:* **"specify should be called on build to check and never needs to be called in the runtime of the app."**

***`bind()` still specifies***, *and that is deliberate rather than an oversight:* **[`$$(of, kind)`](../../package/src/utilities/Lib.tsx) — reading a writing AS a kind — creates a chemical and calls `bind`, which is the moment a claim is being made about what something is.** *Two tests state it: **"refuses writing that cannot be what it is being bound as."***

**And the same fault had a second instance, found while fixing the first.** *The block condition was written twice — as the `hasBlock` rule and as `$check(block, 'block')` inline in nine bond constructors — and **the inline one threw where the rule reports**.* ***It killed a legitimate case:*** *a leaf with no children of its own, whose copy comes from elsewhere, died on a check its own class default was meant to satisfy.*

***After: `tsc` 0, 268 tests in under 8 seconds, every hang gone.***

## The rule

***A BOND CONSTRUCTOR MAY NOT THROW.*** **It runs during render, and a throw during render is retried, so a bond that refuses does not fail — it spins.** *Whatever a bond wants to insist on belongs in the specification, which collects failures and raises once, where a caller asked.*

***And its corollary, which is what made this expensive rather than merely wrong:*** **an instrument that runs on the machine it is measuring can destroy its own footing.** *A test suite that leaks processes will, given an evening, make every subsequent measurement of itself a lie — and the lie will have a shape you can explain.* **Check the machine before believing the number.**
