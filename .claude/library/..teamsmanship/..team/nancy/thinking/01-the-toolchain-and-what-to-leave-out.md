---
title: "The toolchain, and what to leave out"
date: 2026-06-23
topic: "Nancy > Neuroscience"
---

# The toolchain, and what to leave out

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

My first-ever question sent past the context window. It went out in the **`Nancy > Neuroscience`** Desktop conversation — the opening exchange of that thread, summarized by topic in [Research Topics](../research-topics/01-neuroscience.md).

## The question

I asked for the most useful Python packages for our work, deliberately *factorized* into three buckets so the answer would be auditable: (1) the standard scientific/ML stack; (2) neuroscience-specific tools — tuning, population geometry, decoding, dimensionality reduction, receptive fields, MEI; (3) the Tolias/Reimer/Sinz lab toolchain — neuralpredictors, nnfabrik, sensorium, mei, datajoint, and the sinzlab / cajal / ecobost GitHub orgs. I asked for it bounded, with maintenance status on each. What I held back, on purpose, so the judgment would stay mine: our specifics — Sensorium static-scan format, ~1600 layer-2/3 V1 neurons, a frozen digital twin, CPU-only, Python 3.11, the pre/post-DOI design. I wanted the general map from the outside; the fit to our case is my job, not Desktop's.

## Evidence — what came back (verdict: SUFFICIENT)

Desktop verified GitHub before answering and correctly pinned our format as the **2022 `sinzlab/sensorium` static-scan** repo, *not* the 2023 video repo — the distinction that would have wasted days. Its single highest-value move was *pruning*, telling me what **not** to carry: skip the raw-scan layer (suite2p, CaImAn, `cajal/pipeline`) because our data is already extracted; skip the datajoint/nnfabrik provenance machinery for a one-off CPU run and call `neuralpredictors` directly.

The buckets, with its maintenance reads:
- **(1) Standard stack:** numpy, scipy, pandas, scikit-learn, PyTorch, statsmodels, matplotlib/seaborn.
- **(2) Neuroscience-specific:** pynapple (tuning; maintained, Flatiron), rastermap (population raster; Stringer/Pachitariu 2025), CEBRA (neural+behavioral latent embeddings; Apache-2.0, CPU-runnable), umap-learn, dPCA (demixed PCA — conceptually ideal but the repo is dormant), fitgabor (Gabor RF fits; niche).
- **(3) Lab toolchain:** neuralpredictors (the substrate, non-optional), sensorium 2022 (our template), mei (MEI synthesis — use this rather than ecobost/featurevis), nnfabrik (heavyweight, optional), datajoint (opt-in).

Its **minimal viable set:** numpy/scipy/pandas/sklearn/torch + neuralpredictors + sensorium + mei + CEBRA/rastermap + pynapple. I judged the answer sufficient: it was current, correctly scoped to our actual repo, and — rare for a tooling answer — it subtracted more than it added.

## Interpretation — my judgment

The real gift was the pruning. A list of everything that *could* help is noise; the value was being told what to leave out, which confirms the lean environment [The Build](../../../../../../library/.lib/the-build/.cover.md) is already converging on. Three cautions I add *beyond* what Desktop said, because they are where the weight-of-evidence lens bites:

1. **`statsmodels` is load-bearing, not optional.** Desktop filed it in the standard stack as if it were a convenience. It is the mixed-effects / GLM tool for regressing out the pupil-and-running arousal/locomotion confound — the [confound the data already shows](../../../../../../library/.lib/datasets/.cover.md) and that [The Altered Cortex](../../../../../../library/.lib/the-altered-cortex/.cover.md) names as the bar every result must clear. Without it, a V1 difference cannot earn the label "drug effect."
2. **CEBRA is double-edged.** Jointly embedding neural *and* behavioral data is exactly where the confound can hide: a baseline→DOI separation in the latent space could be a *behavior* separation in costume. Use it, but always compare neural-only against neural+behavior, and match or regress behavior first.
3. **dPCA is conceptually perfect but dormant.** Demixing stimulus variance from condition variance is precisely our question — but a dormant repo is not something to trust on faith. Vendor it or reimplement the piece we need rather than depend on it.

The discipline underneath all three: a model that fits is not a mechanism, and what we can decode is not what the brain uses. The toolchain doesn't change that — it just determines how cleanly I can hold the line.

## Conclusion — a filed thought, not settled team work

The minimal viable set stands. Beyond what the lockfile already pins, the environment adds: **CEBRA, rastermap, pynapple, statsmodels, and possibly dPCA / fitgabor** — CEBRA the only heavyweight, and CPU-OK — which is what should land in `requirements.in`.

Two questions stay **open to Doug** (this is a thought, not a decision):
- **(a)** Should the geometry layer lead with **dPCA** (principled demixing, but dormant) or **CEBRA** (turnkey, but confound-prone)?
- **(b)** Is the first milestone the **digital-twin fit**, or a **model-free pass** at pre/post tuning and population structure first?

Filed pending Doug's call.

<!-- citations -->
[research-topics]: ../research-topics/.cover.md
[thinking-cover]: .cover.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[the-build]: ../../../../../../library/.lib/the-build/.cover.md
[datasets]: ../../../../../../library/.lib/datasets/.cover.md
[the-altered-cortex]: ../../../../../../library/.lib/the-altered-cortex/.cover.md
