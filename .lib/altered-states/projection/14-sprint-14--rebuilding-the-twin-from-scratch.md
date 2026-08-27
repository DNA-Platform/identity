# Sprint 14 — Rebuilding the twin from scratch

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `planned` — the notebook plan is written; nothing built

---

**Status: ACTIVE (2026-08-27).** Sprint 13 read the delivered machine and wrote it down. This one
tests whether the reading was real, by rebuilding the twin and checking it against the original.

## The claim, and the test of it

**We understand the delivered twin well enough to rebuild it from nothing.**

The test is `torch.allclose`, not a description. Write the network ourselves, load the delivered
weights into it, compare 749 responses against sensorium's to floating point.

The full notebook plan lives with the code, in
[`analysis/.cover.md`](../../../src/analyses/most-exciting-image-replication/analysis/.cover.md) —
nine notebooks in four groups: the data, the network from scratch, synthesis in two columns, and the
delivered number.

## The correction that shapes it

Doug asked for sensorium and plenoptic side by side, configuring the twin in each. **That is not
possible, and the reason is structural.** `plenoptic.validate.validate_model` raises on any model with
a learnable parameter — synthesis holds the model fixed and differentiates the *image*. plenoptic has
no architecture, no readout, no trainer.

So the side-by-side moves: **sensorium's module against our own from-scratch module**, checked by
`allclose`; then one frozen twin driven by **two synthesis libraries**, `mei` and plenoptic. *"Produce
the same thing from plenoptic"* becomes *build it ourselves so plenoptic will accept it*.

## What the rebuild actually is

From `twin_pre_B_cold_seed0.pt` — **44 tensors, 93,960 parameters**. Legible, and small:

```
core.layer0        Conv2d(1->64, 9x9) + BatchNorm2d(64) + ELU
core.layer1..3     depth-separable: 1x1 (64->64) -> 7x7 grouped -> 1x1 (64->64), + norm + ELU
readout._mu        (1, 749, 1, 2)     each neuron's position
readout.sigma      (1, 749, 2, 2)     full covariance
readout._features  (1, 64, 1, 749)    each neuron's channel weighting
readout.bias       (749,)
```

`stack=-1`, so only the last layer reaches the readout. The Laplace filter is the input regulariser —
training only. **Batch norm must use the stored running statistics**, and getting that wrong is the
likeliest first failure.

## Found while planning: the delivered headline is n=160 of 749

Measured, by running the delivered measure on the delivered arrays:

```
first 160 cells   median 0.55 px   IQR [0.23, 0.70]   79% blurrier post
all 749 cells     median 0.50 px   IQR [0.00, 0.65]   73% blurrier post
delivered JSON    median 0.55 px   IQR [0.15, 0.70]   80% blurrier post   n=160
```

`studies/_prepost_analysis.py` has **no filter** — it loads the whole array. So the delivered JSON was
written when only 160 cells had been synthesised, and the arrays now hold 749. **Re-running the
delivered script today gives 0.50 / 73%, not 0.55 / 80%.** Both are reproducible and both are honest;
the replication has to name which it is reproducing, and should report both.

## Confirmed: metamer synthesis is unseeded

`pipeline/metamer.py`'s `metamer()` calls `RandomNormal()` with no seed. Read in the source, not
inferred. MEIs are seeded (`gradient_ascent(..., seed=0)`) and can be reproduced exactly; metamers
cannot.

This is not a formality. On a single toy neuron, four runs of the same synthesis from different noise
all hit the target response exactly, and:

```
corr(change from start, rf)     -1.0000 in every run
corr(answer, its own start)     +0.994  +0.989  +0.997  +0.988
corr between the four answers   -0.11 to +0.36
```

**The optimiser moves the image only along the one direction the loss can see.** The answer is
otherwise the noise it started from. With 749 neurons constraining 2304 pixels the model pins far more
of it — but how much more is a number nobody has measured.

## Deferred to a later sprint — seeded metamers

**Doug's call (2026-08-27):** confirm the unseeded behaviour first; twins and MEIs replicated first;
then build the version we think is formally correct. As a proof that a seeded protocol is better,
redo the **top 5 metamers of each condition, seeded, in the delivered analysis** — not in the
replication.

The ranking is already computed, using the delivered `quality_toolkit` rank (`mean(SSIM,
shift-NCC)` to the target stimulus) over the released package's arrays:

| condition | top 5 target indices | best rank | median |
|---|---|---|---|
| `metamer_within_pre` | 48, 96, 7, 40, 31 | 0.317 | 0.136 |
| `metamer_within_post` | 31, 7, 48, 46, 43 | 0.322 | 0.147 |
| `metamer_within_pre-bh` | 96, 48, 40, 7, 94 | 0.326 | 0.151 |
| `metamer_within_post-bh` | 3, 48, 90, 0, 92 | 0.326 | 0.160 |

**Target 48 is in all four; target 7 in three.** Those are the natural first cases.

What "seeded performs better" would have to mean, stated before the work rather than after: the
delivered metamer is one draw, so its quality is partly luck. Run each target k times with different
seeds, measure the spread in `re_evoke_corr` and in the images, and show that a fixed protocol
produces a *defined* object rather than a sample. Whether it also produces a *better* one is a
separate question and must not be assumed.

## Also open

- **Train or load?** Twenty checkpoints exist. Loading reproduces the delivered objects; retraining
  costs hours and will not bit-match across torch builds. Recommendation: load.
- **The line on "no library code".** Our own helpers get written into cells. But `walker_gradient`
  and `walker_postup` are built from `nnvision.legacy.featurevis.ops` — published lab code, which the
  standing rule says to import rather than retype. Recommendation: import those, write the rest.
