# Regression Stories

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

`[SCAFFOLD]` — How specific bugs were caught and pinned. Each story: the bug, the investigation, the fix, the test that pins it.

Known regressions documented in the test suite:

- **Cross-chemical handler fan-out** (sprint 24) — `regression/bond-behavior.test.tsx`. Writing a held instance's reactive prop from another chemical's handler landed the value but skipped the repaint. Fixed by making `scope.finalize()` fan out to derivatives. See [caveats](../epistemology/04-caveats.md#cross-chemical-handler-fan-out).

- **Short prop name instability** (sprint 24) — `regression/short-prop-name.test.tsx`. Single-letter `$<x>` reactive props (`$v`, `$x`, `$y`) were silently inert due to `length > 2` gate. Fixed with `>=`. See [caveats](../epistemology/04-caveats.md#short-prop-name-instability).

- **Particularization prototype loss** (sprint 22) — `spikes/sp1-prototype-mutation.test.tsx`. Explored during the particularization redesign. See [caveats](../epistemology/04-caveats.md#particularization-prototype-loss).

Each regression test exists specifically to prevent recurrence. The test name describes the bug, not the feature.
