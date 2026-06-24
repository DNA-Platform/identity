# The active-image run

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md), [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

A live record, in our own voice, of the run that makes the **active images** — the most-exciting images (MEIs). This chapter is the *process* as it happens; the *recipe* is [ch 11 (MEI)](11-how-we-make-a-publication-form-mei.md) and [ch 12 (twin)](12-how-we-make-a-publication-grade-twin.md), the *plan* is [Sprint 5](../projection/05-sprint-5--the-publication-grade-analysis.md), and the precise *file manifest* for an outside reader is the [Phase-8 archive README](../../reports/dataset-archive/README.md). We track here what we're building, the two long runs it rests on, and where each stands — tagged as it moves, so the forgetful reader (us, next week) sees the state at a glance.

## What we're building

An active image is a neuron's most-exciting input — what the twin says that cell most wants to see. We synthesize one per well-fit neuron, **pre and post DOI**, on the **ensemble** twin, by the [Walker recipe](11-how-we-make-a-publication-form-mei.md). Adam wires the synthesis and trains the model; Nancy owns the science, the metric, and the display. Two long runs stand between us and the pictures, and they run *in order* because the second needs the first.

## The two long runs

**Run A — train the ensemble twin** ([Phase 3](../projection/05-sprint-5--the-publication-grade-analysis.md)). The canonical twin of [ch 12](12-how-we-make-a-publication-grade-twin.md), and really **four twins** — Control (pre) and DOI (post), each **with and without behaviour** (behaviour-in / behaviour-out) — each a **5-seed cold ensemble** (`mei.modules.EnsembleModel`) with the **eye-position shifter on**. Training stops on **convergence**: each seed early-stops when validation correlation plateaus, and we *verify* it stopped there and not at the `max_iter` ceiling — a non-binding number set high. Compute time is no constraint; ten-hour runs are fine. Post is trained **cold as the primary**; warm-start is a robustness variant, not a fifth twin (the [final audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md): warm-start biases the change-detection toward baseline). CPU, hours not minutes. The durable artifact is the set of checkpoints; nothing downstream starts until they exist and validate at the normalized bar.

**Run B — synthesize the MEIs** ([Phase 4](../projection/05-sprint-5--the-publication-grade-analysis.md)). On the trained ensemble, the Walker MEI recipe of [ch 11](11-how-we-make-a-publication-form-mei.md): annealed *image* blur 1.5 → 0.01, Fourier-smoothed magnitude-normalized gradient, `PNormConstraintAndClip`, 1000 iterations, on the best-fit neurons, pre beside post. Reconstruction rides the same ensemble. The MEIs are the headline pictures; they are only as good as Run A's twin.

## Status — updated as it moves

Legend: ⧗ queued · ▶ running · ✓ done · ⚠ issue.

| Phase | What | Owner | State |
|---|---|---|---|
| 0 · scaffold | `src/analysis/` modules + contracts | Adam · Cathy | ▶ |
| 1 · data | loaders (behavior + eye-position on), noise ceiling, matched cells | Adam | ⧗ |
| 2 · validation | FEVE + labeled CC_norm + the raw gain ratio (the free measurement, first) | Nancy | ✓ |
| 3 · model — **Run A** | 5-seed ensemble + shifter, both arms, cold-primary (+warm robustness) | Adam · Nancy | ⧗ |
| 4 · synthesis — **Run B** | MEIs + reconstruction on the ensemble | Adam · Nancy | ⧗ |
| 5 · figures | MEI grid, matched-cell MEI, reconstruction gallery | Gabby | ⧗ |

*(Phase 2's free measurement has landed — first numbers below — and the two long runs (3, 4) are next. Tags move as the work lands; this table is the at-a-glance state, the durable file record is the archive.)*

## First numbers — Phase 2 validation · [MEASUREMENT]

The free measurement ran first, on the **existing Sprint-4 twins** (single-seed, warm), in **24 seconds** — exactly the discipline the audit set: fix the metric before retraining a model that may not be broken. The first real, apples-to-apples number, recorded fresh.

| | corr-to-avg | FEVE (neurons > 0.15) | CC_norm |
|---|---|---|---|
| pre-DOI | 0.507 | **0.396** (937 / 1654) | 1.370 |
| post-DOI | 0.468 | **0.473** (634 / 1449) | 1.662 |

**Raw gain ratio** — post/pre response s.d. across the 749 matched cells: median **0.542**, IQR [0.387, 0.795]; **89% of cells reduced**.

Three things, honestly:

1. **The metric fix is confirmed.** The single-trial 0.26 we worried over was the wrong *kind* of number; on the *same* twin, FEVE lands **0.40–0.47** — already most of the way to the published 0.61, and this is a *single-seed* twin. The Phase-3 ensemble should close the rest. The 0.26-vs-0.61 alarm was a measurement artefact, as Nancy's [metric-mismatch](../../../.claude/library/..teamsmanship/..team/nancy/thinking/06-the-twin-and-the-metric-mismatch.md) call predicted.

2. **FEVE is the number to trust; CC_norm is not — yet.** CC_norm comes out **> 1** (1.37, 1.66), impossible for a real normalized correlation — it means our **noise ceiling is underestimated**, so CC_norm is unreliable until [Queenie's ceiling smoke-test](../projection/05-sprint-5--the-publication-grade-analysis.md) passes (a stale or mis-keyed denominator makes every normalized number silently wrong). **FEVE is the trustworthy metric** — which is exactly why the [full-pipeline audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md) put FEVE first and labelled CC_norm as ours. The audit is vindicated on the first run.

3. **The gain headline is real.** A **~46% median drop in raw response amplitude post-DOI**, across **89%** of matched cells — a clean per-neuron gain reduction, the direction the literature predicts for a 5-HT2A agonist in V1 (cf. Michaiel, Parker & Niell 2019), and **exactly the effect per-neuron std-normalization erases by construction**. This is the [gain finding](../datasets/05-caveats.md) promoted from caveat to result. It is bounded, though: **n = 1**, and a raw-amplitude drop is not yet a *neural* gain change — DOI is vasoactive and the session is volumetric (z-drift), so the **Phase-6 temporal-drift and vascular controls** must separate neural from measurement before this is called a drug effect on firing.

These ran on the Sprint-4 twins; the ensemble re-validation (Phase 3) writes the final numbers into the [archive](../../reports/dataset-archive/README.md). The README stays the clean procedure; this is the process record, in our voice.

## Parameter provenance

Doug's directive: **know every source, no guessing.** This is the audit of where each parameter actually comes from, confirmed against installed source this turn. Two open items are **gates** — Phase 3 and Phase 4 do not run until they resolve.

**Solid — confirmed against the installed source:**

| What | Confirmed source |
|---|---|
| Architecture (`Stacked2dCore` + `FullGaussian2d`) | the Sensorium-2022 baseline; installed `sensorium` / `neuralpredictors` |
| API, trainer, the `verbose` shim, the landmines | introspected from installed source ([NOTES.md](../../../src/library/model/NOTES.md)) |
| MEI constants — image blur 1.5 → 0.01, `FourierSmoothing(0.04)`, `MultiplyBy` 1/850 → 1/20400 | **verbatim** in `nnvision/mei/regularizers.py` |
| MEI behavioural states — 3rd / 97th percentile (quiet / active) | Franke 2022 |

**Open / flagged:**

| What | Status | Issue and resolution |
|---|---|---|
| `gamma_input` 6.3831, `gamma_readout` 0.0076, `lr_init` 0.009, `lr_decay_steps` 4 | **OPEN — Phase-3 gate** | appear **only** in our files (`twin_mei.py`, `model/`, `NOTES.md`, the README) and [ch 10](10-the-digital-twin-recipe.md); **nowhere** in installed `sensorium` / `neuralpredictors`. Unsourced — traced to an external Sensorium-2022 baseline not on disk. Flagged to Doug; awaiting resolution before training. |
| MEI op dotted paths | **OPEN — Phase-4 gate** | the paths in `mei_recipe.py` were **wrong** — `nnvision.mei.ops` lacks the Walker ops; the real ones live in **`featurevis`** (`featurevis.ops.*`, `featurevis.legacy.ops.GaussianBlur`), which is **not installed**, so Phase 4 will not import as written. (The constraint is `mei.postprocessing.PNormConstraintAndClip`, installed, now corrected in the recipe.) Resolution: install `featurevis --no-deps` (recommended), reimplement locally, or fall back to the Sprint-4 path. |
| `CONSTRAINT_NORM = 25` | **OPEN — to tune** | not a published value; tuned empirically so the clip rarely fires (which also gates the shared-scale display). |
| metric / ceiling labels | **corrected** | the validation noise ceiling is a **leave-one-out oracle** (`get_signal_correlations`), **not** "split-half"; our CC_norm is **in the spirit of Schoppe 2016, not the literal formula**. Labels fixed across the catalogue. |

Until the two gates clear, the [archive README](../../reports/dataset-archive/README.md) stays the clean procedure and these flags stay here, in our voice. The [full-pipeline audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md) confirmed the recipe; this is the provenance underneath it.

## Where the outputs go

The run's durable artifacts — the ensemble checkpoints, the MEIs, the reconstructions, the validation numbers, the figures — are the contents of the **[Phase-8 dataset archive](../../reports/dataset-archive/README.md)**, whose README is the objective, methods-section manifest an outside scientist reads. The division is deliberate and is [Sprint 5 Phase 8](../projection/05-sprint-5--the-publication-grade-analysis.md)'s own rule: the **how and why** live here, in our voice; the **precise file dictionary** lives in the archive README, in none. The full ground-up gap this run closes is the [report](../../reports/from-the-ground-up--the-publication-grade-analysis.md); the science it serves is the [analysis plan](../the-altered-cortex/03-the-analysis-plan.md).
