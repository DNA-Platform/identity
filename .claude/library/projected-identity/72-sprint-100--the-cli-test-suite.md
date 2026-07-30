# Sprint 100 — The CLI Test Suite

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

## What this sprint is

A test suite for the [Claude Nexus](71-sprint-99--the-claude-nexus.md) CLI and the app-level capabilities beneath it.

It is a **separate sprint on purpose.** A suite written in the same breath as the code asserts what the code *does*; a suite written after, from the sprint's promises, asserts what the code *should do*. This team has the receipt for that distinction: [Sprint 89's gate](56-sprint-89--retro.md) was a table of 19 tests of which 6 existed and **0 ran**, because they called methods that did not exist. The diagnosis then was *stop adding tests to the surface; finish the driver underneath.* The driver is now underneath. This is the surface, and it is written against the promises rather than the implementation.

## What a test asserts here

The standing rule: **tests are promises, not mechanism checks.** A test that asserts the CLI called a particular controller method is a test that will break when we refactor and pass when we regress. A test asserts what a caller is entitled to rely on.

Three things make this suite unusual, and each dictates a layer:

- **The app under test is a live GUI on one screen.** Real runs cannot be parallel, cannot be fast, and cannot be hermetic. They are also the only tests that can catch what actually breaks here.
- **The reality boundary lies.** [Sprint 92](62-sprint-92--retro.md) taught it three ways: an empty composer reports its placeholder as its value; the Stop button appears on a mere acknowledgement; a *succeeded* dispatch lingered to its timeout. Only the first of the [three truths](62-sprint-92--retro.md) — structural, perceptual, temporal — is machine-checked by a type system. **The other two are what this suite exists for.**
- **The nexus is a process.** Its lifecycle — starts, answers, refuses politely, exits without leaking a shell — is itself behaviour to assert.

## The three layers

### Layer 1 — Protocol tests (no app, fast, hermetic)

The nexus's command surface against a **fake driver**: a stand-in for `Claude` implementing the same interface with a scripted screen. These assert the things that are true regardless of what is on screen:

- Unknown command → a clear error, not a crash.
- Malformed arguments → refused with the usage, not a stack trace.
- `--json` output parses and matches the documented shape; the pretty form is not asserted character-for-character (that is churn), only that it names the screen and lists the commands.
- **Every error response carries a tree field**, per [Sprint 99](71-sprint-99--the-claude-nexus.md).
- Driver commands serialize; **inspection commands answer while a driver command is in flight.** This is the queue invariant, and it is assertable with a fake driver that blocks on demand — which is the only way to test it deterministically.

Layer 1 must be **fast and runnable on any machine** — including one with no Claude Desktop — or it will not be run.

### Layer 2 — App-capability tests (live app, single screen, serial)

The three capabilities [Sprint 99](71-sprint-99--the-claude-nexus.md#the-three-app-level-additions-requirement-4-in-the-app-not-the-command) puts in the app, tested against the real thing:

- **`describe()` does not drift.** The load-bearing test of the whole design: add a method to a page, and it appears in the model with no second edit. Assert against the *page objects*, not a fixture — a fixture of expected commands is a hand-maintained list, which is the exact failure `describe()` exists to prevent. **A test that freezes the command list re-introduces the drift.**
- **`check()` catches all three inconsistencies.** Identity (navigate away behind the app's back), type (hold a page object for a screen we left), structure (open a modal so the screen no longer has what its model claims). Each must be *provoked*, and each verdict must name what disagreed.
- **`recover()` restores a known state** from each provoked failure — including with a modal open, which is where [Sprint 87 died](52-sprint-87--retro.md).

### Layer 3 — Flow tests (live app, end to end, slow)

The [19 acceptance requirements](55-sprint-89--think-acceptance-tests.md) rewritten against the nexus: send returns control at streaming-start; long responses verify; the composer is robust to a human typing; a conversation is created, named, and filed; read returns the structured response; timeout leaves a resumable state.

**These are the ones "reliably green" applies to.** Green-once is not a pass — the two that most need repetition are shell serialization and background reading, which is what [Sprint 89](55-sprint-89--think-acceptance-tests.md#tests-surfaced-by-the-team) already said and Sprint 92 confirmed.

## Rules the suite lives by

- **Every test cleans up.** `window.minimize()` in a `finally`, *before* closing the shell (minimize needs the shell), and never during a pending send. Then close the shell, or it leaks — Sprint 91 leaked 100+ that way. **A test that leaks a shell has failed even if it passed.**
- **No fixed waits.** Poll a sensor. A `setTimeout` in a test is a guess about the app's speed and will be wrong on a slower machine.
- **A flaky test is a defect, not a nuisance** — either in the test's signal or in the driver. It is investigated, not re-run. This is the direct consequence of the reality boundary lying: a flaky assertion is usually a *true* report about an unreliable signal.
- **Ground every signal in a captured tree.** The `src/trees/` captures are the reference; when a screen is not covered, capture it before asserting against it. Guessing what the tree says is how `readDraft() === ''` became a 30-second failure.
- **The suite reports what it skipped.** A run with no Claude Desktop must say "layers 2 and 3 skipped," never print green for a third of itself. Silent truncation reads as coverage.

## Milestones

- **M1 — The harness and layer 1.** Runner, the fake driver, protocol tests. Runs anywhere, fast, no app.
- **M2 — Layer 2.** The three capability tests against the live app, each failure *provoked* rather than waited for.
- **M3 — Layer 3.** The acceptance flows on the nexus, run repeatedly until reliably green — Queenie holds the verdict.
- **M4 — Wired into the gate.** Layer 1 joins [`/audit`](../our-skillset/18-audit.md) alongside `tsc --noEmit`; layers 2 and 3 are run by hand, because a suite that seizes the foreground cannot be automatic on Doug's machine. **Written down, not assumed.**

## Open questions — honest ones

1. **What is the fake driver a fake of?** If it mimics `Claude`, layer 1 tests the nexus but not the app. If it is too clever it becomes a second implementation with its own bugs. Leaning: the smallest possible stand-in — a scripted screen and a blocking switch for the queue test — and nothing else.
2. **Can layer 2 provoke a structural inconsistency reliably?** Opening a modal is easy; being sure the app *hasn't* recovered on its own before the assertion runs is not.
3. **Where does the suite live?** Beside the CLI in `.claude/cli/`, or in a sibling test tree? Bound up with [Sprint 99's open question 5](71-sprint-99--the-claude-nexus.md#open-questions--honest-ones) about whether `.claude/cli/` travels with the identity.

## Definition of done

1. Layer 1 runs with no Claude Desktop present, in seconds, and is wired into `/audit`.
2. The queue invariant is asserted deterministically: inspection answers while a driver command blocks.
3. `describe()`'s no-drift property is tested by **adding a real method**, not by comparing against a frozen list.
4. Each of `check()`'s three inconsistencies is provoked and caught, and each verdict names what disagreed.
5. `recover()` is proven from a modal-open state.
6. The acceptance flows are **reliably** green — Queenie's verdict, repetition required, green-once refused.
7. Every test minimizes and closes its shell; a leak-count check runs at the end of a suite run.
8. A partial run reports what it skipped.

**Fallback:** ship layer 1 and layer 2. Protocol correctness plus the three app capabilities is a real gate; the flow tests can follow. **Do not** ship layer 3 half-green and call it done — that is [Sprint 89's table](56-sprint-89--retro.md) again, and we have paid for it once.
