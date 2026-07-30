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

## The epistemic ladder

A behavior with both a Lab specimen and a unit test is *demonstrated and pinned* — the strongest confidence level. A behavior with only the Lab is *demonstrated but vulnerable*. A behavior with only the test is *pinned but obscure*. A behavior with neither is *speculation*.

This bidirectional cross-link — specimen and test — is the strongest form of epistemic confidence the framework offers.
