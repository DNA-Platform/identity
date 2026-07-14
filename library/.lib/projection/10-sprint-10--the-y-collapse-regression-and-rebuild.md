# Sprint 10 — The y-collapse regression: find it, verify it, rebuild only what's broken

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

**Status: CLOSED (2026-07-13)** — close-out at the bottom; MEI catch-up still running toward the even four-twin set.
Sprint 9 handed over raw instruments (MEIs + metamers, all four twins) — but the
reconstructions were low-fidelity and the metamers landed oddly. Root-caused, forensically, to a **regression
of a fix we already made and dropped**. This sprint recovers the fix, proves the scope, rebuilds *only* the
affected twins, and re-verifies — carefully, because retraining is expensive.

## The finding (forensic, 2026-07-09)

- **Symptom:** the pre/A twin's readout-μ is collapsed in elevation — `μy-R² 0.08` against the real cortical
  layout (`retinotopy_check.png`), while μx maps cleanly (`R² 0.70`). The cells are genuinely 2-D
  (cortical y/x = 0.75); the twin flattened them. Downstream: blurry, low-fidelity metamers/reconstructions
  (~0.2 pixel-corr vs Cobos 0.55) and pre/post RF-location mismatches.
- **Cause (from [Sprint 7](07-sprint-7--the-four-twins-one-at-a-time.md), "the step we dropped"):** the
  **arm-A eye-position shifter**, enabled with bare `shifter=True`, takes the sensorium default
  **`gamma_shifter=0` (no regularization)**; the unregularized `MLPShifter` co-adapts and **absorbs the
  vertical retinotopy**. Arm B (`shifter=None`) does not collapse (Sprint-7 measured y-std 0.071 vs arm-A 0.004).
- **The regression, confirmed in live code:** `model/__init__.py:99` still reads
  `cfg["shifter"] = True if arm == "A" else None` — the exact bare default. Sprint 7 paused with seed 1 saved and
  said *"no re-train until the config is corrected AND catalogued in [the twin recipe]"* — it was **never
  catalogued** (ch12 has no `gamma_shifter`) and **never applied**. (Free-μ was *not* the fix; it is already on
  and the collapse persists — my earlier free-μ diagnosis was wrong.)

## Scope — prove it before spending the hours

Retraining is ~hours per ensemble; we do **not** rebuild what isn't broken. Hypothesis: **arm A only** (pre/A,
post/A) is collapsed; **arm B (pre/B, post/B) is valid.** This must be **verified on all four**, not assumed.

## Plan

1. **[verify, read-only] Retinotopy on ALL FOUR twins.** Load each twin's readout-μ, run the
   `_retinotopy_check` (cortical layout vs μ, μy-R²). Confirm arm-A collapsed / arm-B intact. *Gate the rebuild
   scope on this — no rerun recommended off one twin.* (Also promote this check into the pipeline's `verify_twin`
   gate so a collapse can never ship silently again.)
2. **[recover] The canonical shifter config.** Source the Franke-2022 shifter regularization
   (`gamma_shifter` + companions) — Sprint-7's dropped "CD (async)" step — and **catalogue it in
   [the twin recipe, ch12](../the-build/12-how-we-make-a-publication-grade-twin.md)** where the next person reads
   it, not in a sprint note that scrolls away.
3. **[fix] Code.** Set the shifter config in `build_model` (`model/__init__.py`) so arm A trains a *regularized*
   shifter; assert non-collapse in the verify gate.
4. **[rebuild] Retrain ONLY the collapsed twins** (expected: pre/A, post/A) — cold-seeded 5-seed ensembles,
   early-stop on val correlation, resumable. Arm B untouched if the check clears it.
5. **[re-verify] Retinotopy + FEVE** on the rebuilt twins; μy-R² must jump. Then **regenerate only the affected
   objects** (arm-A MEIs + metamers) via the existing symmetric generator; arm-B objects stand.
6. **[track] This note.** Log each step's result here as it lands.

## THE FIX — the answer, read from the package source (2026-07-10)

**Root cause (source-confirmed, not guessed).** The twins train with `grid_mean_predictor=None` (free-μ,
`TWIN_CONFIG`). In `neuralpredictors/layers/readouts/gaussian.py` (l.317): *with `grid_mean_predictor=None`,
`self._mu = Parameter(...)`* — μ is a **raw free parameter with NO cortical prior.** Free-μ cannot recover
vertical retinotopy from natural-image training, so μy scrambles (R² 0.02–0.12) in all four twins. **Free-μ was
the wrong "fix" — it disables the readout's retinotopy mechanism.**

**The mechanism we disabled.** `grid_mean_predictor={'type':'cortex','input_dimensions':2}`: the sensorium
builder (`sensorium/models/models.py` l.100) calls `prepare_grid` (`sensorium/models/utility.py`: *"using the
neurons' cortical coordinates to guide the readout locations in image space"*), building `source_grids` from
`neurons.cell_motor_coordinates` → the readout **predicts μ from each cell's cortical position → retinotopic by
construction** (Lurz 2021's whole point). That is `MODEL_CONFIG` — the config we walked away from.

**The fix:** train with **`grid_mean_predictor='cortex'`** (`MODEL_CONFIG`). Use the package as written; no custom
readout. We shouldn't have needed new code — we needed to stop disabling the right one.

**The one real fork the sweep is resolving.** Sprint-7 saw `cortex` "collapse" (y-std 0.0064) — but that was
arm A **with the bare unregularized shifter**, which absorbs vertical retinotopy. The sweep tests `cortex` on
**arm B (no shifter)** too. If **pre/B/cortex μy-R² > 0.5**, cortex IS the fix and the arm-A collapse is a separate
shifter matter (order/regularize the shifter for arm A only). Empirical verdict ~1 h out. (Confidence per the
publication bar: **high** on the root cause — proven in source; the sweep only decides cortex-plain vs
cortex-plus-arm-A-shifter-handling. Not options for their own sake — a genuine A-vs-B fork.)

## The bug — anatomy of how "fixed" became a live regression (documented 2026-07-10, Doug)

**Original problem (Sprint 7):** the `grid_mean_predictor="cortex"` readout collapsed elevation retinotopy
(μy-std 0.0064 — a flat line); the unregularized arm-A shifter was a *suspected* co-cause.

**The fix we adopted:** revert to free-μ (`grid_mean_predictor=None`). `train_learned_mu.py` "verified" it.

**Why we believed it — the WRONG yardstick.** Verification checked **μy-STD** ("holds if y-std ~0.05–0.10" vs
cortex 0.0064). Free-μ gave y-std ~0.05–0.19 → it *passed*, so spec + code recorded *"free-μ holds a 2-D map
(verified)."* But y-std only asks *"is the elevation spread non-zero?"* — never *"does each cell's elevation-μ
match its real cortical position?"* Free-μ produces **spread but SCRAMBLED** elevation: μy fans out (good std)
but does not track the true retinotopy.

**How it was debunked (2026-07-10).** Regressed μ on the real cortical layout (affine R²). μx-R² 0.3–0.6
(azimuth maps); **μy-R² 0.02–0.12 (elevation scrambled) across ALL FOUR twins, arm B included.** So (a) the
"fix" restored elevation *variance*, never the *map*; (b) arm B has no shifter yet still collapses → the shifter
was never the cause; (c) nothing downstream (MEIs, metamers, reconstruction) is trustworthy.

**Root failure = DRY + a weak metric.** The strong test that would have caught it — `compare_retinotopy.py`,
μ-vs-cortex — was **archived**, and even it reported y-std, not R². The weak y-std check survived; the real gate
rotted. Fix forward: μy-R² becomes a hard assertion in `verify_twin` (audit item 5), so no twin ships collapsed
again. (Tonight the sweep also crashed once on a `μ` char in cp1252 — hardened to UTF-8, relaunched, resumable.)

## Code audit & refactor — the rot that let the fix regress (2026-07-09, Doug)

The DRY failure that hid the collapse is a *symptom* of a rotten generation layer. Clean it before we
retrain+regenerate, so the rebuilt objects come from code that can't lose a fix again. Itemized, each with a
regression check:

1. **[DRY · orchestrators] Two → one.** `run.py` (sequential, one twin) and `_generate_full.py` (parallel, all
   four) each reimplement: twin-load, held-state, MEI loop, metamer loop, progress. → single-source them:
   `twins.py` (done: `load_twin`/`fixed_state`) + a new `synthesize.py` (`mei_of`, `metamers_of`, `targets`)
   imported by ONE driver `generate.py`. Retire the duplicate. *Regress: golden MEI/metamer arrays match pre-refactor.*
2. **[STRUCTURE] Split production from studies.** Move the 14 one-off `_*.py` (blur, rf-coverage, decoder,
   retinotopy, similarity, examples, extract-*) into `analysis/`, out of the module dir. Pipeline dir = production only.
3. **[DRY · metrics] One toolkit.** `_pearson`, `_crop`, `ncc_surface`, `hf_frac`, `up`, `n01` are copied in ≥5
   scripts → one `metrics.py` (or extend `compare/quality_toolkit.py`); every study imports it. *Regress: values identical.*
4. **[CONFIG] Single-source the twin knobs, esp. the shifter.** The collapse knob is bolted into `build_model`
   with the bad default. → a documented `SHIFTER_CONFIG` (with `gamma_shifter`) in `model/`, one home, applied in
   `build_model`. (Value from step-2 recovery.) *Regress: retinotopy check passes on a fresh seed.*
5. **[GATE] Retinotopy back into `verify_twin`.** The archived `compare_retinotopy` proves collapse; the gate must
   assert μy-R² so a collapse can never ship silently again.
6. **[NAMING] Clear entry point + names.** `_generate_full.py` → `generate.py`; one obvious `python generate.py`.
7. **[HYGIENE] gitignore** `__pycache__/`, `_logs/`, stray `_digital-twins-tolias-2022.txt`, `_REFACTOR_NOTES.md`.
8. **[COMMENTS] Standardize** each module's file-docstring to state its contract (most have one).

**Target layout**
```
pipeline/  data/ model/ synthesis/ metamer/ validation/ compare/ figures/ archive/   # production
           twins.py  synthesize.py  generate.py  metrics.py  build_archive.py
analysis/  blur/ rf-coverage/ decoder/ retinotopy/ metamer-similarity/ examples/       # the studies
```
**Regression harness (build first):** `smoke.py` — imports every module, loads one twin, synthesizes 1 MEI + 1
metamer, asserts they match a cached golden array within tol. Run before & after each item.

## Deferred — run this again when we get further (the forward marker)

The **behaviour arm (A)** is on hold: its twins carry the shifter y-collapse (this sprint's bug), so **arm-A
objects are not to be trusted or shipped** until the shifter fix + retrain pass the retinotopy gate. The plan,
held here so it can't be lost:
- **NOW** — ship the **no-behaviour arm (B)**: no shifter, no collapse, the trustworthy default. Get its MEIs /
  metamers / decoder / examples fully working and handed to Reimer.
- **WHEN WE GET FURTHER** (shifter config recovered → arm-A twins retrained → gate passes) — **re-run the whole
  generation for arm A**, regenerate its objects, add the behaviour half of the analysis. A *planned* re-run, not
  a maybe: the code stays arm-parameterized so it's one command, never a rewrite.

## The generation contract — how everything is made (single source, arm a parameter)

Every object flows through ONE path; `arm` is a parameter, never a second copy:
- **twin** → `twins.load_twin(state, arm)` (A: behaviour + shifter + held state; B: stim-only).
- **MEI** → `synthesize.mei_of(twin, cell)`; **metamer** → `synthesize.metamers_of(twin, targets)`.
- **decoder / figures / metrics** → `analysis/*` + `metrics.py`, all arm-agnostic.
- **driver** → `generate.py` loops `{pre,post} × {A,B}` over those same functions.
Changing how we generate anything means changing that ONE place. (The absence of this rule is what let the
collapse fix regress.)

## No duplication between behaviour and no-behaviour

A and B are the *same code with `arm` flipped*. The only real differences are localized inside `load_twin` — the
shifter (A only) and the held behaviour state (A only). There is never a "behaviour version" and a "no-behaviour
version" of a function.

## Log
- 2026-07-09 — regression found + confirmed in code (`model/__init__.py:99`); pre/A verified collapsed
  (μy-R² 0.08). All-four verification pending a free machine (generation finishing, 226/236 MEIs).
- 2026-07-09 — code audit filed (8 items). Started DRY merge: `twins.py` single-sources `load_twin`/`fixed_state`.
- 2026-07-09 — cut 6 dead one-off scripts; added `metrics.py` (single-source image/spectral primitives). Next:
  refactor the kept studies onto it + verify, then merge the two orchestrators.
- 2026-07-10 — **GATE on ALL FOUR twins: every one collapsed** (μy-R²: pre/A 0.02, pre/B 0.10, post/A 0.02,
  post/B 0.12; μx maps fine, ~0.3–0.6). **Arm B collapses too → the shifter is NOT the cause**; the free-μ readout
  is not learning vertical retinotopy on this scan, in any arm. **Arm B is therefore NOT a clean deliverable** —
  the no-behaviour data exists but carries the same collapse. Pivot from the (moot) `gamma_shifter` sweep to a
  **retinotopy CONFIG sweep**: `_sweep_retinotopy.py` trains `learned_mu` vs `cortex` grid-predictor on pre × {A,B},
  logs μy-R² → `results/_sweep/sweep_results.json`. Smoke-tested, launched, resumable.
- 2026-07-10 — **SWEEP VERDICT — CORTEX is the fix** (empirical + source-grounded, no intuition):
  pre/A learned_mu μy-R² **0.02** → pre/A **cortex μy-R² 0.67** (μx 0.96); pre/B learned_mu 0.10; pre/B cortex
  training. The cortex `grid_mean_predictor` (Lurz 2021: **μ = W·cortical-coords**, `prepare_grid` feeds
  `cell_motor_coordinates[:,:2]`) restores elevation; free-μ (no prior) can't. Added **`cortex_linear`**
  (`hidden_layers:0`) to the sweep — Nancy's robust variant: a *linear* map can't zero the μy row under behaviour
  the way the MLP can. μy-std ~0.02 is the **real narrow V1 elevation band**, not scatter (matches the coverage
  ceiling). Spec Open Q12 corrected; `## THE FIX` holds the config.

## RETRAIN PLAN — publication-quality, do it once, right (actionable)

1. **Finish the sweep** incl. `cortex_linear`; pick the config with the highest μy-R² that holds on **both** arms
   (expect `cortex` or `cortex_linear`, μy-R² > 0.5). Relaunch resumes (4 configs cached).
2. **Set `TWIN_CONFIG`** in `model/__init__.py` = that cortex config (reverse the free-μ override). One place.
3. **Add the μy-R² assertion to `verify_twin`** (the gate that was archived) — a twin below threshold *fails the build*.
4. **Retrain ALL FOUR twins cold** — the long run; resumable, early-stop on val correlation, no clock.
5. **Regenerate** MEIs + metamers + decoder from the single-source pipeline (`twins.py` / `generate.py` / `metrics.py`).
6. **Re-verify** retinotopy (all four pass the gate) + FEVE before anything is called a deliverable.
Nothing downstream is trustworthy until a twin passes the μy-R² gate.

## Building & checking the four twins (2026-07-11) — DONE this session, build RUNNING

**The check (DRY, runs on any twin):** `pipeline/build_twins.py :: readout_retinotopy(ens, loaders, dk)` — ONE
function: affine-regress the ensemble-mean readout-μ on the real `cell_motor_coordinates`; return μx-R² / μy-R² /
μy-std. **μy-R² is the elevation gate.** Verified end-to-end — reproduces the sweep's pre_A_cortex μy-R² **0.672**
exactly. This is the very check that was archived and let the collapse ship; it is now a *build gate* (threshold 0.4).

**The build (DRY, one logic for all four):** `build_twins.py` loops `state ∈ {pre,post} × arm ∈ {A,B}` and calls the
single source `model.ensemble(state, arm, init="cortex", n_seeds=5, …)`. The four twins differ **only** by pre/post
(scan) and A/B (behaviour+shifter / stim-only); every other knob — cortex readout, `standard_trainer`, early-stop,
5-seed — is a constant from `model/`. `init="cortex"` writes fresh checkpoints (`twin_<state>_<arm>_cortex_seed<k>.pt`),
so the old collapsed free-μ "cold" checkpoints are preserved, not overwritten. Each twin is gated on μy-R² ≥ 0.4 →
`results/twin_gate.json`; a FAIL prints "do NOT regenerate."

**Config decision (grounded in the package + sweep, not intuition):** built on **`cortex`, hidden_layers:1** =
`MODEL_CONFIG` = the published Lurz/sensorium default. Sweep (1 seed each): cortex μy-R² 0.67(A)/0.69(B), val
0.389/0.302; `cortex_linear` (hidden_layers:0) μy-R² 1.00, val 0.400 — marginally better val, but R²=1.0 is a
linear-model/affine-check tautology and our data gives no substantive reason to deviate from the published default.
`cortex_linear` stays the documented robust fallback if a seed ever fails the gate.

**Launched:** `python build_twins.py 5 200` → 5 seeds × 4 twins, 200-epoch ceiling (early-stop ~60–95), CPU,
resumable — a finished seed is never retrained, so it survives any interruption (multi-day run). Log:
`results/build_twins.log`; gate verdicts accumulate in `results/twin_gate.json`.
**Next (needs Doug):** when all four PASS the gate, regenerate MEIs/metamers/decoder from the single-source pipeline
(it currently points at the "cold" free-μ twins → repoint to "cortex"), then re-verify retinotopy + FEVE before any
deliverable ships.

## The three instruments — code audit + generation plan (2026-07-11)

Twins built + gated (all four PASS, re-validated reproducibly). Doug: audit the three instruments (MEI, metamer,
decoder), confirm DRY, set up generation. Spec + deliverable + comparison read first. Governing constraint: **all
analyses run on the SAME matched cells across all four conditions, from ONE canonical cell list** (deliverable
"Symmetry & alignment guarantee") — so the generators are shared code with `arm`/`state` as parameters.

**What exists (all three, method-correct):**
- **MEI** — `synthesis/` (Walker 2019 gradient ascent, `mei`+nnvision walker ops). Per matched cell; arm-A at the
  shared fixed behaviour state, arm-B stim-only.
- **Metamer** — `metamer/` (Cobos 2022, **vendored verbatim** from `sinzlab/reconstruction`: `gauss_loss` +
  `ChangeNormConditional`; cross sets use `cross_pattern_loss` = Pearson, Open Q13). All **8 sets** (within-pre/post
  + cross pre→post/post→pre × arm A/B) in `_generate_full.py`.
- **Decoder** — `_decoder.py` (Cobos 2022 Fig 2: ridge [linear] + deconv [CNN], fit on train / score held-out test,
  data picks). Publication-grounded, **exploratory**, not yet integrated. Comparison frames it as the *different*
  Response→Image tool; the pixel-space metamer stays the primary instrument.

**Critical bug found + fixed — generation pointed at the COLLAPSED twins.** `init="cold"` (retired free-μ) was
**hardcoded in 5 places** (`_generate_full`, `twins`, `run`, `build_archive`×2); regenerating would have produced
every object off the broken twins. **Fixed by single-sourcing:** `model.TWIN_INIT = "cortex"` is the ONE source of
"which trained twins to synthesize from"; every site now reads `init=TWIN_INIT`. Switching builds = one edit.

**DRY debt — partly paid, rest tracked.**
- `load_twin` was defined **twice** (`twins.py` + `_generate_full.py`) — the same duplication shape that let the
  y-collapse regress. **Fixed:** one `load_twin` in `twins.py` (reads TWIN_INIT, returns loaders); `_generate_full`
  imports it; its copy + `_shared_fixed_state` deleted; verified imports clean.
- **Still owed (tracked, do carefully — not while unsupervised):** TWO orchestrators — `run.py` (sequential,
  arm-A-only, within-only) and `_generate_full.py` (parallel, symmetric, all 8 sets) — should merge into ONE
  `generate.py` over shared `synthesize` functions (audit item 1). Fold `_decoder.py` into the pipeline.

**Stale objects handled (non-destructive).** The 472 MEIs + 64 metamers in `_full/` were off the cold twins →
**moved to `_full_cold_collapsed/`** (preserved). The 118-cell union set was captured to `_full/cell_priority.json`
first, so cortex regeneration does the SAME 118 cells. `_full/mei` + `_full/metamer` regenerate fresh.

**GENERATE — the plan (actionable):**
1. **Smoke** the cortex path (1 MEI + 1 short metamer via the refactored `_generate_full`) — running.
2. **Launch `_generate_full.py`** on cortex twins — the COMPLETE sets (no subset → no redo): **all 749 matched
   cells × 4 twins = 2996 MEIs** + **8 metamer sets × 100 repeated target images = 800 metamers**, symmetric, one
   canonical index, skip-if-exists, multiprocessing (~20h run). ⚠ *Correction (2026-07-11): the first launch used
   118 cells / 8 targets — arbitrary leftovers from the old run, a redo risk Doug caught. The matched population is
   **749** and there are **100** repeated test images, so the full sets are those. reliable-in-both is an
   ANALYSIS-time filter (Part 9 / `fixed_set_compare`), not a generation cut — so we generate every matched cell.*
3. **Decoder** after generation frees the machine — ridge (cheap) then deconv; held-out scoring; reconstruct the 8
   targets beside the metamers.
4. **Archive** (`build_archive.py`, now TWIN_INIT) → the fast HDF5 for Erin/Reimer.
5. **Then** the Part-9 characterization + the Erin-first notebook.

## Retinotopy is effectively 1-D — the honest scale finding (2026-07-12, Doug's challenge)

Doug challenged the "collapse fixed" verdict: *are you sure it isn't effective collapse at a scale you missed?*
He was right. The rotation-invariant test — SVD of the 2×2 cortex→μ map (μ = A·cortical_xy) — on all four twins:

| twin | singular values (per mm) | **ratio sv2/sv1** | 2-D fit R² |
|---|---|---|---|
| pre/A (bh) | 1.32, 0.12 | **0.09** | 0.94 |
| pre (canon) | 1.32, 0.35 | **0.27** | 0.94 |
| post/A (bh) | 1.37, 0.15 | **0.11** | 0.97 |
| post (canon) | 1.31, 0.30 | **0.23** | 0.95 |

- **The retinotopy is ~1-D.** A strong axis (~1.3/mm = azimuth) and a weak one (0.1–0.35/mm = elevation). μy-R²
  hid this because μ is cleanly predicted by cortex (R² 0.94–0.97) — it just predicts onto a **line**, not a plane.
- **Largely REAL, not a twin bug.** The 749 matched cells span **585 × 481 µm** — ~5% of V1 (2–3 mm) by area — and
  tile a **thin horizontal visual-field strip** (F5). A small patch genuinely covers a narrow elevation band; the
  cortex readout recovers that faithfully. Azimuth retinotopy is solid across all four.
- **The arm-A shifter worsens elevation** (bh ratio 0.09–0.11 vs canonical 0.23–0.27) — Sprint-7's suspicion,
  data-confirmed: the eye-position shifter absorbs vertical retinotopy. **Behaviour-arm vertical claims are
  extra-unreliable**; fixable with `gamma_shifter`>0 + an arm-A rebuild (limited benefit — the real strip limit dominates).
- **Consequence (already the F5 position):** restrict elevation-specific claims; azimuth + the covered strip are the
  honest domain. The MEIs/metamers stay valid instruments; the caveat is an analysis restriction, not a discard.
- **The retinotopy GRID was wrong** — binned on raw cortical x,y, but cortex→visual is rotated + sign-flipped, so it
  read "backward." Re-plot by projecting cortical coords onto the map's visual axes (azimuth = the strong sv).
  TODO next machine-free window.

## CLOSE-OUT (2026-07-13) — sprint complete

Delivered the three instruments on rebuilt, verified twins, plus the organization and the honest science:
- **Twins** — regression found (free-μ scrambled RF positions) and fixed (cortex `grid_mean_predictor`); all four
  retrained + gated. Retinotopy honest: azimuth clean, elevation an effectively-1-D **real** strip (~5% of V1);
  arm-A shifter compresses elevation further. FEVE decent, post weaker (DOI reduces drive).
- **MEIs** — method audited line-by-line as **correct** (Walker + the lab's package, no bug); ~11 min/MEI is the
  published recipe, no faithful CPU speedup (N=875 measured). The four-twin set is caught up **evenly** via the
  resumable `resume_gen.sh` watchdog toward the 556-cell union; keeper = the four-twin overlap.
- **Metamers** — all **800** (8 sets × 100 targets), inverting the twin over the **whole 749-neuron population**,
  `sinzlab/reconstruction` verbatim (Cobos-standard).
- **Decoder + Cobos Fig 2** — ridge + deconv; the metamer↔decoder comparison **replicates the paper**
  (reconstructors pixel-sharper, metamer response-faithful/blurry; ridge>deconv because deconv overfits our small
  set — Cobos's own caveat). Recorded as F7 in `comparison.md`.
- **Organization** — separate `float32` datasets per twin/set on a shared cell/target index (`_organize.py`,
  deterministic/reproducible), the shift-tolerant pre↔post MEI similarity (arm-B **0.72** = same feature after
  alignment), all documented in `deliverable.md`.
- **Conventions** — the Code-conventions section (DRY / single-source / minimal / read-before-write) added to the
  spec; the retinotopy check single-sourced in `validation/`.

**Next sprint** (proposed separately in projection/): the **Jake handoff** — pre/post characterization, the
behaviour-arm question, the "same representation, lower resolution" formalization, the code + archive ZIP, and the
Erin-first Jupyter notebook.
