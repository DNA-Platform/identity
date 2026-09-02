# Sprint 14 — Building the twin two ways

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `active` — the twin notebook is written; both arms train; the full run is in progress

---

**Status: ACTIVE (2026-08-27).** Sprint 13 read the delivered machine and wrote it down. This one
builds it again — **twice** — on Erin's data: once with sensorium's learned convolutional core, once
with a plenoptic one, then asks the same questions of both.

The work lives in
[`most-exciting-image-replication/analysis/`](../../../src/analyses/most-exciting-image-replication/analysis/.cover.md).
Three notebooks in dependency order — the twin, the MEI, the metamer — with
[the plan](../../../src/analyses/most-exciting-image-replication/analysis/.resources/twin/the-plan.md)
carrying the units and done-conditions.

**Update (2026-08-29).** `analysis/` holds the twin notebook and one technical folder, and nothing
else. Three notebooks written beside it mid-sprint were moved out, because a deliverable folder that
accumulates neighbours stops being one: the inversion work became its own project,
[perceptual-twin](../../../src/analyses/perceptual-twin/.cover.md), and the behaviour argument went
to the project it argues about,
[most-exciting-image/analysis](../../../src/analyses/most-exciting-image/analysis/.cover.md). Both
import `twin` from here rather than restating it, so the network keeps one owner.

## The error this sprint was rebuilt around

**I claimed, repeatedly and in writing, that plenoptic cannot train a model.** It is false, and it
cost most of a sprint.

```
Gaussian                      1 trainable   ['std']
LinearNonlinear               2 trainable   ['center_surround.center_std', ...]
OnOff                        12 trainable   ['luminance_scalar', ...]
```

plenoptic's models are ordinary `nn.Module`s carrying `nn.Parameter`s. What plenoptic lacks is a
*trainer*; what it **requires** is a frozen model **at synthesis time**, which is why `remove_grad`
exists at all. I read the second as the first, from `validate_model`'s error message, and never
checked.

**The blast radius, because one wrong belief propagates.** Believing no plenoptic arm could exist, I
redefined the side-by-side as *sensorium against hand-written torch*. That has nothing to train, so
the first notebook became an equivalence check on a **delivered checkpoint** — which proves we can
*replay* a twin, not *produce* one. With nothing left to build I drifted to what could be done with
artifacts already on disk, and ended up with a metamer notebook numbered **0**, sitting before the
twin notebook. Doug's read of that was exact: *"if metamers is first, you do not understand your
task."*

Two smaller assumptions failed with it. **Replication is not verification** — matching a delivered
array is a check, not a rebuild. And **"everything plenoptic touches is from plenoptic"** was violated
directly: I handed plenoptic a sensorium checkpoint inside an adapter and called that the plenoptic
arm.

## What the notebooks are now

**One implementation, two cores.** Data, readout, normalisation, loss, training loop and checkpoint
format are shared code, written once. Two lines build the arms:

```python
sensorium_twin = Twin(SensoriumCore(), channels=64)      # filters LEARNED,  40,256 parameters
plenoptic_twin = Twin(PlenopticCore(), channels=26)      # filters FIXED,         0 parameters
```

The plenoptic core is a **steerable pyramid** — Simoncelli's classical V1 basis, three scales by
eight orientations, no parameters at all. So the contrast is real rather than two spellings of one
model: **learned features against a fixed basis**, both feeding an identical readout, both predicting
the same 749 cells.

**Where the arms are written identically there is no comment.** A comment marks a genuine divergence,
so a reader scanning for comments is scanning for the real differences. That convention is Doug's,
and it is what makes the interleaving legible.

## The fairness problem the interleaving exposed

Writing both arms through one class made an artefact visible that a side-by-side would have hidden.
The pyramid's channels span **20x** — its lowpass residual has standard deviation 3.80 where the
oriented bands sit near 0.19 — while sensorium's core batch-norms after every layer. A linear readout
over unnormalised features is handicapped by arithmetic rather than by the model.

The shared `Twin` now normalises both. **The first full-length plenoptic run predates that fix**, so
its number stands as a first reading, not a result.

## Where the numbers are

```
plenoptic   best 0.1038 at epoch 31      (before the shared normalisation)
sensorium   epoch 4, 0.186, climbing     (~1.9 min/epoch)
delivered   0.309 - 0.317
```

The delivered figure is what the `pre` twin scored on this architecture and this data. Landing there
is the replication; landing elsewhere is a finding either way.

## What the abandoned notebook did establish

Not wasted, and worth keeping: the delivered twin written from scratch in plain torch reproduces
sensorium's 749 responses **bit for bit on all twenty checkpoints, both arms** — arm A's six input
channels and its eye-position shifter included. Three things came out of it.

**`align_corners=True` is worth 0.265** in the responses, and the wrong setting produces a perfectly
plausible answer. **`.eval()` is load-bearing**, so batch norm uses stored statistics. And **`sigma`
never enters the forward pass** — the readout samples around `mu` during training and uses `mu`
itself at evaluation.

## Findings against the delivered work

Four, all measured, recorded in
[`analysis/findings.md`](../../../src/analyses/most-exciting-image-replication/analysis/.resources/twin/findings.md).

**F1 — the delivered headline is 160 of 749 cells.** `studies/_prepost_analysis.py` has no filter; the
JSON is a snapshot from mid-catch-up. Re-running it today gives 0.50 / 73%, not 0.55 / 80%.

**F2 — metamer synthesis is unseeded and does not converge.** Better at step 500 than step 1000, still
oscillating at 4000. Applying the lab's own `walker_gradient` preconditioner — the one the MEI path
already uses — makes it monotone: target 48 goes from `0.618` with a **0.212** seed-spread to `0.886`
with **0.000**. That is a fix to the generator, not a selection among draws.

**F3 — the `post-bh` twin is barely stimulus-driven**, six times less than the other three, which is
why its metamers came out seed-*independent*.

**F4 — the MEI clip range uses the Sensorium competition's image statistics, not our scan's.** The
ceiling is 6.8% too high. Binding but small: 0.001–0.024% of pixels, 2–4% of cells.

## The day the twin was not used — 2026-08-30

**Defect, diagnosed and written up:**
[Solutions ch1 — The decoder that replaced the twin](../solutions/01-the-decoder-that-replaced-the-twin.md).
An entire working day in `src/analyses/perceptual-twin/` produced percept figures, spectra,
dimensionality and hallucination statistics from a `sklearn` ridge regression that never touched the
network. The twin was loaded, used to measure receptive fields, and never inverted. Doug caught it;
all of that code and every figure from it were deleted at his instruction.

**What survives from the day, because it used no decoder:**

- **`rf_mask(readout.mu)` is the wrong instrument for coverage.** The stimulus-triggered receptive
  field over 4,850 training trials, the twin's own input gradients, and an occlusion sweep all put
  these 749 cells at rows ~20-31 peaking at row 26; `rf_mask(mu)` says 16-27 and the delivered
  `rf_mask.npy` says 13-23. The twin reads where the data says — **mu is not where the network
  functionally looks**, so every coverage figure drawn from mu on this branch is drawn too high.
  This is the same family as [Sprint 10](10-sprint-10--the-y-collapse-regression-and-rebuild.md)'s
  circular retinotopy gate, resurfacing as a coverage error rather than a selection error.
- **Raw response measurements, no model at all.** Per-cell split-half reliability pre **0.565** ->
  post **0.497**. Cross-condition per-cell tuning correlation **0.4006** raw, **0.8246** after
  correcting for both conditions' reliability — so tuning is largely preserved with a real ~18%
  residual.
- **The post perceptual twin did not exist and now is training.** Five `sensorium_post_B` seeds under
  the same `TRAIN_CONFIG` as the five pre seeds. Its absence was the original excuse for reaching for
  a decoder.

**Withdrawn:** every reconstruction, spectral, component, event and structure result reported that
day. [The Altered Cortex](../the-altered-cortex/.cover.md) chapters 5 and 7 are annotated accordingly
rather than deleted, so the trail of what was believed and why remains readable.

## Next

Sprint A finishes when both arms have converged numbers from the matched architecture. Then the MEI,
where seeding makes exact reproduction possible, and only then the metamer.
