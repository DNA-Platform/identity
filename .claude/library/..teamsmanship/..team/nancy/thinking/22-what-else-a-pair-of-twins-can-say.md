# What else a pair of twins can say

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-07-08
- **topic:** Nancy > Neuroscience
- **previous:** [The publication checklist, and the risk that isn't the weights](21-the-publication-checklist-and-the-risk-that-isnt-the-weights.md)
- **verdict:** pending (the CD write is blocked by a Desktop modal; my independent evaluation stands as the interim)
- **status:** in progress (Evidence awaits the read)

---

Two questions to CD, factorized my way. **(1)** the exact cleanest way to *implement*, in the sinzlab stack
(`mei` / `nnvision` / `neuralpredictors` / `sensorium`), the analyses we just specced — per-cell Walker MEIs,
the within Cobos metamers, target-driven population inversion (Cobos/Bashivan), and the **scale-invariant
cross objective** (a raw MSE cross-metamer would chase the per-scan-normalized amplitude we're forbidden to
compare). **(2)** range widely: beyond MEI + metamer comparison, what *published* methods compare the
represented features of a **pair** of encoding models of the same neurons — then I evaluate each against my
three hard constraints (scale-invariance, matched-cells-only, Rule-1).

**What I expect.** On (1): the answer is "there is no separate population-control package — you drive
`mei.methods.gradient_ascent` (or a plain SGD loop) with a *custom objective*, and the ensemble is handled by
`mei.modules.EnsembleModel` averaging"; the cross loss is a cosine/correlation objective. On (2): the two
strong misses are **RSA on predicted responses** and **in-silico tuning/invariance probes** — both
scale-invariant and more directly "represented features" than metamers; the rest either summarize (CKA/CCA)
or fail scale-invariance.

**What I already know** (the papers I hold): [Walker 2019](../../../../../../library/papers/walker-inception-loops-2019/.cover.md)
(MEI), [Cobos 2022](../../../../../../library/papers/digital-twins-tolias-2022/.cover.md) (metamer),
[Bashivan 2019](../../../../../../library/papers/bashivan-neural-population-control-2019/.cover.md)
(target-driven population synthesis), [Sinz 2018](../../../../../../library/papers/sinz-domain-transfer-2018/.cover.md)
(domain/condition transfer, in-silico tuning recovery), [Lurz 2021](../../../../../../library/papers/lurz-generalization-2021/.cover.md)
(transfer). The constraints are in `specification.md` (the goal, the data constraint, Rules 1–3).

## Evidence

**PENDING.** The `/think` write/read cannot complete against Claude Desktop. Two failure modes seen: first the
brain could not foreground Desktop ("maximize() could not bring Claude to the foreground"); on resume, Desktop
*was* open and foreground-verified, but both write and read failed with **"Could not find 'New chat' in the
UIA tree"** — the documented **Sprint-77 pitfall**: a **modal dialog is open in Claude Desktop** (e.g. the
"Move chat" project picker) and blocks all navigation, so the sidebar's "New chat" anchor is absent. The write
therefore never landed (`thought-state.json` still holds an unrelated stale thought). **Fix is at the machine:**
dismiss the Desktop dialog (press Escape) and leave the app on its normal chat home, then re-run the write
(payload staged in `_think_attach.md`). Evidence = CD's response, to be pasted here after the read. My interim
evaluation
(below) does not depend on it.

## Interpretation — my independent evaluation (the judgment is mine either way)

### Q1 — implementation
- **(1a) MEIs + within metamers.** Already the right shape in our `synthesis/` + `metamer/`: `mei.methods.
  gradient_ascent` with the `nnvision` walker ops, on the `EnsembleModel` (gradient of the mean activation
  across seeds — the ensemble *is* the smoother). No change expected; I want CD only to confirm the current
  recommended `mei` entry point (functional `gradient_ascent` vs an `MEIMethod`/`optimize` object) and any
  ensemble-averaging gotcha.
- **(1b) Target-driven population inversion.** There is no separate "population control" package — you drive
  the same gradient descent with a **custom objective `−dist(ensemble(x), target)`**. Our `metamer/` module
  already *is* this (Cobos MSE-to-target). Bashivan's population control is the same machinery with an
  experimenter-chosen target; the cross-metamer is that with the target drawn from the other condition. So
  (1b) needs no new tool — it needs the objective swapped.
- **(1c) The scale-invariant cross objective — the one real design question.** My lean: **L = 1 − cos(pred,
  target)** (or 1 − Pearson, which also removes an additive offset), over the population vector, with an
  ε-stabilized norm. Cosine/correlation removes the *global* scale of the target vector — the cross-scan
  magnitude concern. **The subtlety I want CD on:** cosine removes global scale but *not* per-cell scale (each
  matched cell's pre/post std ratio differs). To remove per-cell scale you'd z-score each cell across the
  *target-image set* first (unitless per-cell response profiles), which couples the per-image inversions.
  Provisional call: use **1 − correlation over cells per image** (removes global scale + offset), and treat the
  residual per-cell-scale as a documented limitation — not per-cell z-scoring, which over-couples and departs
  further from Cobos. This is exactly the kind of thing to get an outside read on.

### Q2 — what else a pair of twins can say (each scored against my constraints)
**Strong adds** (scale-invariant ✓, matched-cells ✓, published ✓, feature-interpretable):
- **RSA on predicted responses** (Kriegeskorte, Mur & Bandettini 2008). Build each twin's representational
  dissimilarity matrix over a common image set (dissimilarity = 1 − correlation of the matched-cell response
  pattern between image pairs), compare the pre and post RDMs. Correlation-distance RDMs are **scale-invariant
  by construction**; reveals whether the *geometry* of image representation (which images V1 treats as similar)
  reshapes under DOI. This is the single best addition — a whole-representation comparison metamers don't give.
- **In-silico tuning + invariance probes** (Sinz 2018 established twins recover orientation/direction tuning;
  Walker 2019). Present parametric gratings/Gabors (orientation, SF, phase, size) to each twin; read **tuning
  *shape and preference*** — preferred orientation/SF, tuning width, OSI/DSI, phase-invariance/complex-cell
  index — pre vs post per cell. Report **shapes and indices only, never grating amplitude** (that's the
  scale-invariance line). Arguably the *most direct* answer to "how the represented features change," and it's
  the classical feature axes a reviewer expects. Caveat: gratings are out-of-training-domain, so fidelity is
  bounded (Sinz's asymmetry) — label it a domain-transfer read.

**Good adds** (scale-invariant summary / decomposition; less "picture," more scalar):
- **CKA / CCA / SVCCA** (Kornblith 2019; Raghu 2017) on the matched-cell predicted-response matrices (cells ×
  images), pre vs post. CKA is invariant to isotropic scaling and orthogonal transforms; CCA to invertible
  linear maps — both **scale-invariant**. Gives one similarity scalar + the aligned-subspace dimensionality
  ("how many representational axes survived"). A clean quantitative complement to RSA.
- **Linear readout transfer** (Sinz 2018 / Lurz 2021 transfer). Freeze the pre core, fit a fresh readout on
  post responses (and vice-versa); measure transfer by **fraction-oracle correlation** (scale-invariant).
  Decomposes the change: good transfer ⇒ the *features* (core) are preserved and only the readout moved; poor
  transfer ⇒ the feature space itself changed. Genuinely informative, and grounded in Sinz's own machinery.

**Exploratory sibling** (published machinery, scale-invariant objective, labeled prompted — same category as
our cross-metamer):
- **Controversial / disagreement stimuli** (Golan, Raju & Kriegeskorte 2020). Synthesize the images that best
  *reveal* the pre/post difference. But the natural objective |pre−post| is **cross-scan amplitude → forbidden**;
  it needs a scale-invariant disagreement (the *angle* between the two population patterns, or rank-disagreement).
  Interesting, low priority, and it is the synthesis sibling of the cross-metamer.

**Fails / defer:**
- **RSA on readout weights** — **FAILS**: the two cores are independently fit, so their feature spaces are not
  aligned; per-cell readout weight vectors are not comparable across models without an alignment step. Not a
  published cross-model comparison as-is.
- **Shared-vs-private variance** — **weak/defer**: more about population structure than represented features,
  and it flirts with amplitude; only admissible as *fractions*. Lower priority.

## Conclusion — what to tell the team (interim, pending CD)

- **MEI + metamer is NOT as close as it gets.** Two scale-invariant, matched-cell, published methods answer
  "how the represented features change" at least as directly and belong in the spec: **(1) RSA on predicted
  responses** (representational geometry) and **(2) in-silico tuning/invariance probes** (orientation/SF/size
  preference + selectivity indices, shape-only). I'd add a **Part 10 — representational comparison** carrying
  both, scale-invariant metrics only.
- **Good quantitative complements:** **CKA/CCA** (a similarity scalar + surviving-subspace count) and **linear
  readout transfer** (core-features-vs-readout decomposition, Sinz). Add as secondary metrics.
- **Exploratory sibling of the cross-metamer:** **controversial/disagreement stimuli** with a scale-invariant
  objective — same "prompted extension" label, low priority.
- **Reject / defer:** RSA-on-readout-weights (feature spaces unaligned — fails), shared-private variance (weak).
- **Implementation:** no new package needed — drive `gradient_ascent` with custom objectives; the cross loss is
  **1 − correlation** over the population vector (per-cell-scale residual = a documented limitation). Confirm
  with CD, then it's a small addition to `metamer/` + a new `represent/` (RSA/tuning/CKA) module.
- **Owed:** fire the staged write, read CD, and fold its corroboration (esp. the exact cross-objective form and
  the current `mei` API) into the Evidence section above.

## Standing note

The write being blocked from the brain is the recurring `/think`-from-background limit — the *judgment* half is
mine and I've given it; the *reaching* half needs the room's foreground. And the substantive lesson for the
study: I'd been treating MEI+metamer as the whole comparison, when the representational-geometry (RSA) and
classical-tuning reads are cheaper, more standard, and more directly on "represented features" — I should reach
for the well-published population-level comparison before the bespoke synthesis one.

<!-- citations -->
[previous]: 21-the-publication-checklist-and-the-risk-that-isnt-the-weights.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
