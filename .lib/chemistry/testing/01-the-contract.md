# The Contract

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The framework's regression harness. **428 unit tests** at last count, across 48 files in `library/chemistry/tests/`. Each test pins one invariant of $Chemistry's behavior; collectively they form the boundary against which refactors are checked.

## Three roles

1. **Regression detection.** A change to source that breaks one of the 428 invariants fails CI. The test suite is the most reliable surface for catching unintended behavior change.
2. **Specification crystallization.** Each `it(...)` description names a behavior. Reading the test list is one of the fastest ways to learn what the framework guarantees.
3. **Future-developer documentation.** A test that fails after a refactor explains *what changed* in a way prose cannot — the assertion was true; now it is not.

## What the test suite is not

The test suite is not a *user guide* — its audience is the framework developer doing a refactor, not a component author learning the API. The user-facing surface is the Lab.

The test suite is also not *exhaustive*. 428 tests cover the bulk of the surface, but the absence of a test does not mean a behavior is unspecified — only that it is unpinned. Behaviors with no test are vulnerable to silent change.

## What "pinned" means

A behavior is *pinned* by a test when:

- The test names the behavior in its description.
- The assertion fails if the behavior changes.
- The test is run on every commit (i.e., it's not skipped or quarantined).

Tests that are commented out, marked `it.skip`, or never run do not pin anything. They are *aspirations*, not invariants.

### A harness must not spend one word on two states

**The Lab's driver had a third way of pinning nothing, and it was worse than `it.skip` because it reported.** [`verify-all.mjs`](../../package/app/verify-all.mjs) classifies a section by the verdicts it finds: a `fail` present is FAIL, else a `pass` present is PASS, **else PENDING** — printed under the heading *"PENDING (interaction may not have triggered)"*.

*That heading is a guess about the harness, and it was covering three different states at once:*

| what was true | what it printed |
|---|---|
| **the route no longer exists** — the section was renamed and the driver was not | `PENDING` |
| the section renders, its controls were simply not worked | `PENDING` |
| ***the section is BROKEN and the interaction proved it*** | `PENDING` |

**Measured 2026-09-07: 19 PASS, 0 FAIL, 15 PENDING.** *Eight of the driver's route ids named sections that had been renamed — `II.1` is `handlers`, `V.1` is `properties`, `V.4` is `collections` — so fourteen sections had been reported as un-triggered interactions for as long as that rename is old, and **every one of them was working**. Correcting the names alone: **33 PASS, 0 FAIL, 1 PENDING**, with no source touched.*

***And the third row is the one that matters.*** **Behind one of those soft words sat a real defect**: [`poly-form/case-1.tsx`](../../package/app/src/sections/poly-form/case-1.tsx) wrote its email rule as a JSX **attribute string**, and a JSX attribute string does not process escapes — so `pattern="…\\.…"` carried **two** backslashes and demanded a literal `\` before the dot. ***No valid email could ever pass that form.*** *Confirmed off the source bytes rather than by reading it: `ada@example.com` false at two backslashes, true at one.* **It had never been caught because the driver never worked that form's controls, and reported its own silence as a note about itself.**

> ***The rule this adds to the ladder below: a harness owes a DISTINCT word to "I could not run this."*** **PASS, FAIL and NOT-YET are three states; a route that does not resolve is a fourth, and it is a failure OF THE HARNESS, not a pending result.** *An entry pointing at a section that no longer exists is `it.skip` wearing the costume of a run — and unlike `it.skip`, nothing about it looks skipped.*

**The practice that follows, and it is cheap:** *a driver's targets are checked against what the application actually declares* — `grep` the declared ids, `comm` them against the driver's, and **a target with no section is an error rather than a result**. *Run that way the same day, the count went **19 of 43 to 43 of 43**, and coverage from 19 to 35 of the 42 declared sections.*

### Evidence owes the same KIND as the failure

**A gate proves nothing about a failure it cannot express.** *This is the step above [the harness's word problem](#a-harness-must-not-spend-one-word-on-two-states): there the instrument said the wrong thing about what it ran; here the instrument runs perfectly and answers a different question than the one asked.*

***Observed 2026-09-07, on a sweep that deleted 258 repeated CSS selectors across two packages.*** **What was offered as evidence: `tsc` 0, 884 promises green, and the demo driven in a real browser with character counts and anchor counts identical before and after.** *Every one of those numbers was true.*

> ***AND NOT ONE OF THEM COULD HAVE CAUGHT THE FAILURE.*** **A declaration standing under the WRONG SELECTOR compiles, emits, throws nothing, and leaves the page's text byte-identical.** *The characters do not move. The anchors do not move. The suite is on the mechanism, and the thing at risk was six hand-written selectors in another package that the mechanism never sees.*

**The correction came from a reviewer who read the emitted stylesheet instead of the account** — *session inexplicable-phenomena-a7, whose whole check was two browser reads:*

```
.pNXpF { margin: 0.5em 0px 1em; color: rgb(32, 33, 34); }   the top of the class, NOT swept
.gnwngD h2 { font-size … color … font-family }              all five of a prefix, both bare getters included
```

***So the standard for a change is set by the failure it can have, not by the gates that happen to exist:*** **a text change is proved by text, a styling change by the emitted CSS or a computed style, a timing change by a count.** *And the cheapness is the argument — the read that would have caught this was two lines and it was skipped because three green numbers were already in hand.*

***One more thing that only a placement assertion catches.*** **A promise that a declaration EXISTS passes wherever it landed.** *The promise for this crossing asserts both sides — the span carries the colour and **the section does not** — because `outline-color` does not inherit, so a declaration that fell to the top of the class would satisfy a one-sided test and fail this one.* **And it was falsified rather than assumed: the prefix was stripped, two promises went red, the prefix was restored, thirty-one passed.**

> ***THE RULE, and it is the one this chapter's [ladder](#the-epistemic-steps) rests on:*** **a promise that cannot go red for the reason you are afraid of is not evidence, however green it is.**

## <a id="the-epistemic-steps"></a>The epistemic steps

A behavior with both a Lab specimen and a unit test is *demonstrated and pinned* — the strongest confidence level. A behavior with only the Lab is *demonstrated but vulnerable*. A behavior with only the test is *pinned but obscure*. A behavior with neither is *speculation*.

This bidirectional cross-link — specimen and test — is the strongest form of epistemic confidence the framework offers.
