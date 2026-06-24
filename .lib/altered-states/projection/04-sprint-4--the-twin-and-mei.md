# Sprint 4 — The Twin and MEI

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**Status: IN PROGRESS.** Build the digital-twin + MEI pipeline with the real `sensorium` / `neuralpredictors` / `mei` packages, end to end, in a dated experiment — trained properly, no hand-rolled stand-in. **The build is running:** the pre-DOI twin is training on CPU (minutes per epoch, early-stopping on validation); validation numbers are **pending the run** and are not claimed here. This realizes **Step 0–1** of
[The Altered Cortex — the analysis plan](../the-altered-cortex/03-the-analysis-plan.md) and the
per-neuron MEI tool — **not** the DOI hypothesis tests (H1–H6), which come after. The discipline
that bounds the whole sprint: *a twin that fits is not a mechanism.* This proves the **instrument**
exists; it makes no claim about DOI, and the writeup says so.

**Grounding** (cross-references, not restatements): the toolchain is
[The Build ch 7 — the toolchain index](../the-build/07-the-toolchain-index.md) — **neuralpredictors**
(cores/readouts, `FileTreeDataset`), **sensorium** (the 2022 static-scan model builder + loaders),
**mei** (gradient-ascent synthesis), **torch** (CPU); the env resolution is
[`src/library/model/NOTES.md`](../../../src/library/model/NOTES.md) — datajoint 0.14.9, `mei`
installed `--no-deps`, and **mei's datajoint pipeline is never invoked** (MEI is gradient ascent on
the trained model and needs no datajoint). The science is [Step 1](../the-altered-cortex/03-the-analysis-plan.md);
the data is [Datasets](../datasets/.cover.md); the model port is [`src/library/model/base.py`](../../../src/library/model/base.py); the concrete baseline twin + MEI hyperparameters are [The Build ch 10 — the digital-twin recipe](../the-build/10-the-digital-twin-recipe.md).

## Goal

In a new dated experiment `src/experiments/2026-06-23-twin-mei/`: train a Sensorium-baseline
encoding model (the twin) on the **pre-DOI** scan, validate it per neuron on the held-out test
images, and synthesize MEIs for a handful of well-fit neurons — with figures that show the twin learned and the MEIs read as real receptive fields. **Full quality, real packages, trained properly:** the twin is trained well enough that
validation is respectable and the synthesized MEIs come out **structured and recognizable**
(Gabor-like / centre-surround receptive fields, not noise) — that is the real bar, because the
pictures have to *look right*. The published ~0.61 normalized correlation is the aspiration, reached
as far as a sensible run allows; we **do not undertrain** to save time.

Two kinds of picture make it land, both **pre vs post**. A **matched cell** — the same neuron's
most-exciting input from the pre-DOI twin beside the post-DOI twin: does its preferred stimulus
change under the drug? And the **network itself, side by side** — first-layer filters, feature maps,
and the readout receptive-field map on each twin — so we can *see* how the trained model differs
across the transition, not only the neurons. The catch, designed for: two *independently* trained
networks differ by random seed alone, so the post twin is **aligned to the pre** (warm-started /
fine-tuned from it, or a shared core with a per-scan readout) — then the pre/post differences reflect
the **data**, not the initialization. Even so, the matched-cell MEI and the network deltas are
striking *demonstrations*, **not yet** controlled tuning-change results — H1 with its controls is a
later sprint.

## Who's on it

**Nancy + Adam build it** — Nancy the science (the twin, validation, MEI, the matched-cell and
network comparisons), Adam the infra (environment, training, the durable checkpoint cache). **Libby
catalogues it** and keeps the branch organization straight — where the experiment lives, the
dated-experiment + `library/` conventions, and what gets documented in which book. Cathy holds the
`Model`/`Checkpoint` port, Gabby the figures, Queenie a smoke test. Doug drives.

## Phases

### Phase 0 — Scaffold & imports
**Owners:** Adam (env), Arthur (structure).

- [ ] Create `src/experiments/2026-06-23-twin-mei/` (the dated-experiment convention, [The Build ch 8](../the-build/08-the-organization.md)), with its own `results/`.
- [ ] Smoke-confirm the stack imports together: `torch`, `neuralpredictors`, `sensorium`, `mei` (per [model NOTES](../../../src/library/model/NOTES.md)).
- [ ] Build dataloaders for **both scans** (pre-DOI and post-DOI) via the sensorium static loader / `FileTreeDataset`, reading the paths from `library/io/registry`. Confirm each yields (image → response) batches with the train/validation/test tiers.

### Phase 1 — Train & validate the twins (pre and post)
**Owners:** Nancy (science), Adam (training infra); Cathy on the `Model`/`Checkpoint` port.

- [ ] Build the Sensorium-baseline model — convolutional core + per-neuron Gaussian readout — via sensorium's model builder (or neuralpredictors components). Train **one twin per scan** (pre-DOI and post-DOI). To make the two networks *comparable* rather than different by random seed, **align them**: train the post twin warm-started from the pre twin (fine-tune), or share one core with a per-scan readout. Aligned channels are what let the pre/post filter / feature / receptive-field comparisons read as data, not initialization.
- [ ] Train it **properly but minimally**: the real baseline core and per-neuron Gaussian readout, run for enough epochs (with early-stop on validation) that the readout converges and validation is respectable — **do not undertrain**, the MEIs are only as good as the twin. The minimalism is in *scope* (one scan, one architecture), not in fidelity. If the full set is too slow on CPU, train a sensible **subset well** (a few hundred well-isolated, reliable neurons and/or a reduced image set) rather than the full set badly — quality of fit beats coverage.
- [ ] Validate: per-neuron correlation between predicted and mean measured response on the **test tier** (and against the repeated-image noise ceiling).
- [ ] **Save the trained twins as durable checkpoints — the artifact we keep.** Train once, save each twin (weights + config + provenance: hash, train commit SHA, data hash) via the model port to a persistent `checkpoints/` dir in the experiment. It is large, so gitignored — but **never auto-cleaned**: a good twin must not be lost. On every later run, *load the checkpoint instead of retraining* (create-if-missing), so MEI synthesis, the network visualizations, and the matched-cell pre/post comparison all re-run off the saved twins — make the twin once, play with it after. Only `--rebuild` forces a fresh train; nothing else deletes a checkpoint.
- [ ] **Figure A** — the distribution of per-neuron test correlations (proves the twin learned structure), with a predicted-vs-actual scatter for a couple of cells. Styled to the project's visual grammar (Gabby).

### Phase 2 — MEI synthesis
**Owners:** Nancy + Cathy; Gabby on the figure.

- [ ] With the trained twin, use **mei**'s gradient-ascent synthesis (its model-synthesis core only — *not* any datajoint pipeline) to generate the most-exciting input for ~9–16 of the best-fit neurons, seeded from noise and Gaussian-blur-regularized (the blur/precondition is what makes MEIs come out as clean receptive fields rather than high-frequency noise — tune it until they read).
- [ ] **Figure B** — a clean grid of the synthesized MEIs (pre-DOI twin, best-fit neurons), the project's visual grammar (Gabby). These are the proof pictures; they have to look like real receptive fields.
- [ ] **Figure C — a matched cell, pre vs post.** For a few matched neurons, the MEI from the pre-DOI twin beside the MEI from the post-DOI twin — the headline picture, the same cell's preferred input across the transition. The caption carries the caveat: two separately-trained twins, a demonstration, not a controlled tuning-change result.

### Phase 2.5 — Network visualizations, pre vs post
**Owners:** Cathy + Nancy; Gabby on the figures.

Visualize the trained core so the twin is *shown*, not only used — and, because the post twin is
aligned to the pre (Phase 1), **side by side pre vs post** so the comparison reads:

- [ ] **First-layer convolutional filters**, pre beside post — the Gabor / centre-surround structure a working visual core develops, and whether it shifts under the drug (aligned channels make this a real comparison, not a permutation).
- [ ] **Feature maps** for one example image, pre vs post — the core's channel activations on each twin.
- [ ] The **readout receptive-field map**, pre vs post — each neuron's learned (x, y) readout position (the retinotopy), with the matched cells' RF shift pre→post drawn as arrows.
- [ ] *Optional stretch*: per-channel activation maximization (channel MEIs), pre vs post.
- [ ] **Figure D** — the pre-vs-post network-visualization set, styled to the project's grammar (Gabby). Caption notes that comparability comes from aligning the two networks; independently-trained nets would differ by seed alone.

### Phase 3 — Quick pictures, writeup, catalogue
**Owners:** all; Queenie a smoke test; Libby catalogues.

- [ ] Assemble Figures A and B into a short proof writeup in the experiment (and, if it earns it, a `library/reports/2026-06-23-twin-mei/` entry).
- [ ] Queenie: a smoke test that the twin trains a step and predicts the right shape, and that an MEI synthesizes — marked so the dial can run it alone.
- [ ] Catalogue (Libby, one-way `.lib`→code): the twin-training + checkpoint + mei-usage contracts into [The Build](../the-build/.cover.md); mark **Step 1 realized** in [The Altered Cortex](../the-altered-cortex/03-the-analysis-plan.md) with the realistic validation number; this sprint's retro here.

## Risks & boundaries

- **CPU time vs quality — quality wins.** The pictures have to look right, so the rule is *train well, scope small*: if the full set is too slow, cut to a well-chosen subset and train it properly. Never undertrain to where the MEIs are static — a clean MEI grid on 200 good neurons beats a noisy one on 1,654.
- **The mei / datajoint landmine.** Use only gradient-ascent synthesis; never invoke mei's datajoint-backed pipeline ([model NOTES](../../../src/library/model/NOTES.md)).
- **Session-bound.** The twin is fit on pre-DOI; applying it across to post-DOI (H4) and the residual/inversion tests (H5–H6) are **explicitly out of scope** — later sprints.
- **Honesty.** Pipeline proof, not a DOI result. The writeup states the validation number plainly and claims nothing about the drug.

## Review

The sprint succeeds if the twin trains, validates with a non-trivial per-neuron correlation, and the
MEIs synthesize into recognizable structure — Figures A and B in hand. The retro records what was
built, the realistic validation number, what it cost on CPU, and what the proof does and does not
license. The instrument, once it stands, is what every later hypothesis test (H1–H6) will use.
