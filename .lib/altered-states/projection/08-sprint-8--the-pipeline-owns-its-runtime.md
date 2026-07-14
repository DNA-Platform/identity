# Sprint 8 — The pipeline owns its runtime

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

**Status: ACTIVE.** A small structural sprint between the long twin runs. [Sprint 7](07-sprint-7--the-four-twins-one-at-a-time.md) proved the four-twin loop; this one makes the most-exciting-image pipeline **self-contained**, so the package that produces the runtime artifacts also owns them. Written before the work per [Sprints](../../../.claude/library/library-tree/03-sprints.md); Adam's execution outcome folds in at the foot when he reports.

## The principle

A package should own its own runtime artifacts. In `src/analyses/most-exciting-image/`, the three working directories — `_cache/` (noise-ceiling arrays), `_checkpoints/` (the twin ensembles and gamma searches), `_logs/` (train/run logs) — currently sit at the *analysis root*, beside the `pipeline/` package that writes them. That split is the smell: the code lives in `pipeline/`, but its working state lives one level up, reached by `parents[2]` anchors. Move the three inside `pipeline/` and the package becomes relocatable and self-describing — everything it generates lives under it.

The distinction that makes this clean: **runtime artifacts are not deliverables.** `_cache/_checkpoints/_logs` are regenerable, gitignored working state — they belong to the package. `results/` (the arrays and figures the deliverable reads) is the *output*, and it stays at the analysis root beside `deliverable.md`. So this sprint moves exactly three directories and touches `results/` not at all. The organizing instinct is the one in [The Build ch 8 — The organization](../the-build/08-the-organization.md): things live where they are owned.

## Tasks

**Owner: Adam** on the code; Arthur on the structure and this record.

1. **Move the three runtime dirs into the package** — `_cache/`, `_checkpoints/`, `_logs/` → under `pipeline/`. The existing artifacts move with them (the five-seed ensembles, the noise-ceiling caches, the logs) so nothing is retrained or recomputed.
2. **Re-anchor every path.** The reach-arounds drop by one level: `pipeline/data/noise_ceiling.py`'s `_CACHE = parents[2] / "_cache"` → `parents[1]`; `pipeline/model/__init__.py`'s `CKPT_DIR = parents[2] / "_checkpoints"` → `parents[1]`; find and fix the `_logs` writer the same way. Leave `run.py`'s `RESULTS = parents[1] / "results"` untouched — results stays at the analysis root.
3. **Verify by a non-destructive dry run** (below). Only a clean dry run closes the task.

## The dry-run gate (non-destructive)

The move is verified, not assumed, and **nothing is overwritten**. Run `run.py` in a dry / load-if-exists mode and confirm three things: every runtime path now resolves to *inside* `pipeline/`; the moved artifacts are found in place (load-if-exists → no retraining, no recompute); and no existing file is written over. Because the twin ensembles are load-if-exists, a correct re-anchor means the runner finds them at their new location and does nothing destructive — the resolution itself is the proof. If any anchor still points at the old analysis-root location, the dry run surfaces it before a real run can scatter artifacts across both places.

## Review

Succeeds when: the three runtime dirs live under `pipeline/`, every anchor resolves inside the package, and a non-destructive dry run of `run.py` finds the existing artifacts and overwrites nothing. The pipeline is then relocatable — copy the package, and its whole runtime comes with it.

## Outcome

*To be recorded on Adam's report — what moved, which anchors changed, and the dry-run result.*
