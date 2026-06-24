# The toolchain index

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

A reference index of every analysis package approved for this project: what each is *for in our pipeline*, where its documentation and source live, how maintained it is, and which lock tier it belongs to — the rock-solid [data tier](02-certain-before-fragile.md) or the fragile [modelling tier](04-the-lockfile.md). This chapter holds the **reference**; the **reasoning** — why `statsmodels` is load-bearing, why CEBRA is double-edged, why dPCA is dormant — is Nancy's judgment and is *not* restated here. It lives in her think record: **[The toolchain, and what to leave out](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md)** (summarized in [Nancy > Neuroscience](../../../.claude/library/..teamsmanship/..team/nancy/research-topics/01-neuroscience.md)), which is where this approved set came from.

Packages already frozen in the [lockfile](../../../requirements.in) are marked **pinned**; the rest are **★ add** — the exact `requirements.in` lines are at the [foot of this chapter](#requirementsin-additions). Tier is **data** (installs clean, verified first) or **model** (torch-dependent / git-sourced, wrestled second).

## Standard scientific / ML stack

| Package | Purpose in our pipeline | Docs | Source | Maintenance | Tier · Lock |
|---|---|---|---|---|---|
| numpy | n-d arrays — the substrate every `.npy` trial loads into | [docs](https://numpy.org/doc/stable/) | [numpy/numpy](https://github.com/numpy/numpy) | active | data · pinned |
| scipy | stats, `spatial.distance.cdist` for cell-matching, signal | [docs](https://docs.scipy.org/doc/scipy/) | [scipy/scipy](https://github.com/scipy/scipy) | active | data · pinned |
| pandas | tabular wrangling — `unit_stack_coords.csv`, trial/cell tables | [docs](https://pandas.pydata.org/docs/) | [pandas-dev/pandas](https://github.com/pandas-dev/pandas) | active | data · pinned |
| scikit-learn | classical ML — decoders, PCA, cross-val for drug-state classification | [docs](https://scikit-learn.org/stable/) | [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | active | data · pinned |
| pytorch (`torch`) | tensor/autograd backend for the digital twin and CEBRA | [docs](https://pytorch.org/docs/stable/) | [pytorch/pytorch](https://github.com/pytorch/pytorch) | active | model · pinned (CPU wheel) |
| statsmodels | GLM / mixed-effects to regress out the pupil+running confound | [docs](https://www.statsmodels.org/stable/) | [statsmodels/statsmodels](https://github.com/statsmodels/statsmodels) | active | data · **★ add** |
| matplotlib | every project figure — we render them ourselves to match the published paper figures; the lab packages ship none ([note](#figures-rendered-by-us-not-the-packages)) | [docs](https://matplotlib.org/stable/) | [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib) | active | data · pinned |
| seaborn | statistical plotting over matplotlib | [docs](https://seaborn.pydata.org/) | [mwaskom/seaborn](https://github.com/mwaskom/seaborn) | active | data · pinned |

## Neuroscience-specific

| Package | Purpose in our pipeline | Docs | Source | Maintenance | Tier · Lock |
|---|---|---|---|---|---|
| pynapple | tuning curves and trial-aligned analyses on the response/behavior arrays | [docs](https://pynapple.org/) | [pynapple-org/pynapple](https://github.com/pynapple-org/pynapple) | active (Flatiron) | data · **★ add** |
| rastermap | population-raster ordering — visualizing ~1600-neuron structure pre/post | [rastermap](https://github.com/MouseLand/rastermap) · [paper](https://pubmed.ncbi.nlm.nih.gov/39414974/) | [MouseLand/rastermap](https://github.com/MouseLand/rastermap) | active (Stringer/Pachitariu, Nat Neurosci 2024) | data · **★ add** |
| CEBRA | joint neural+behavioral latent embeddings — baseline vs DOI geometry | [cebra.ai](https://cebra.ai/) | [AdaptiveMotorControlLab/CEBRA](https://github.com/AdaptiveMotorControlLab/CEBRA) | active (Apache-2.0) | model · **★ add** (torch, CPU-OK, heavyweight) |
| umap-learn | nonlinear dimensionality reduction of population state (import: `umap`) | [docs](https://umap-learn.readthedocs.io/en/latest/) | [lmcinnes/umap](https://github.com/lmcinnes/umap) | active | data · **★ add** |
| dPCA | demixed PCA — separate stimulus variance from condition (pre/post) variance | [machenslab/dPCA](https://github.com/machenslab/dPCA) | [machenslab/dPCA](https://github.com/machenslab/dPCA) | **dormant** | data · **★ add (vendor/reimplement, do not pin a dead repo)** |
| fitgabor | fit Gabor receptive fields to neuron tuning | [mohammadbashiri/fitgabor](https://github.com/mohammadbashiri/fitgabor) | [mohammadbashiri/fitgabor](https://github.com/mohammadbashiri/fitgabor) | niche / low | model · **★ add (source-install only if needed)** |

## Lab toolchain — Tolias / Reimer / Sinz (sinzlab, cajal, ecobost)

| Package | Purpose in our pipeline | Docs | Source | Maintenance | Tier · Lock |
|---|---|---|---|---|---|
| neuralpredictors | model components (cores/readouts), `FileTreeDataset`, transforms — the substrate the digital twin is built on | [sinzlab/neuralpredictors](https://github.com/sinzlab/neuralpredictors) | [sinzlab/neuralpredictors](https://github.com/sinzlab/neuralpredictors) | active (git master) | model · pinned (git SHA) |
| nnfabrik | training/config framework wrapping neuralpredictors (heavyweight; optional for a one-off CPU run) | [sinzlab/nnfabrik](https://github.com/sinzlab/nnfabrik) | [sinzlab/nnfabrik](https://github.com/sinzlab/nnfabrik) | active (git master) | model · pinned (git SHA) |
| sensorium | the 2022 **static-scan** competition repo — our data loaders and model-builder template | [sinzlab/sensorium](https://github.com/sinzlab/sensorium) | [sinzlab/sensorium](https://github.com/sinzlab/sensorium) | 2022, git-only | model · pinned (git SHA) |
| mei | Most-Exciting-Input synthesis — gradient ascent for what drives a neuron (use instead of `ecobost/featurevis`) | [sinzlab/mei](https://github.com/sinzlab/mei) | [sinzlab/mei](https://github.com/sinzlab/mei) | active | model · **★ add (git)** |
| datajoint | relational data pipeline / provenance (opt-in; pinned `<1` for the pre-1.0 API the lab code uses) | [docs](https://docs.datajoint.com/) | [datajoint/datajoint-python](https://github.com/datajoint/datajoint-python) | active (we pin `<1`) | model · pinned (`<1`) |

## Figures: rendered by us, not the packages

The lab toolchain ships **no plotting or figure utilities** — verified by reading the installed source, not assumed. `sensorium` and `mei` touch matplotlib nowhere; `neuralpredictors` has a single match, `PiecewiseLinearExpNonlinearity.visualize()` in `layers/activations.py`, which draws an activation transfer curve ("Response before alteration" on the x-axis) — a debug plot of a nonlinearity, **not** a figure tool. The published paper figures live in the authors' demo notebooks, not the importable package; matplotlib and seaborn are general framework tools, not lab ones.

So there is no `plot_reconstruction()` or `plot_mei()` to call: **we render every project figure ourselves in matplotlib**, styled to *match* the published figures — which we hold pixel-for-pixel in [the digital-twins paper book](../../papers/digital-twins-tolias-2022/.cover.md) as the reference (e.g. [Fig 2 — evaluation](../../papers/digital-twins-tolias-2022/11-fig2-evaluation-natural.md), [Fig S1 — extended gallery](../../papers/digital-twins-tolias-2022/13-sup-fig-s1-extended-gallery.md)). This is about plotting *tools* only; the science figures themselves are still pending the [twin run](10-the-digital-twin-recipe.md#where-it-is-built). The check is the same one that confirmed the [MEI paths](10-the-digital-twin-recipe.md) — the [installed source on disk is the fact](../../../.claude/library/teamspeak/08-reading.md#read-the-source-not-only-the-library), not the assumption that a modelling package must arrive with its own plots.

## Skip list — deliberately not carried

These were considered and left out; the reasons are part of the record so the exclusion is auditable.

| Package | What it is | Why skipped |
|---|---|---|
| suite2p | raw two-photon registration + ROI/calcium extraction | [MouseLand/suite2p](https://github.com/MouseLand/suite2p) — our data is **already extracted** to responses; the raw-scan layer is upstream of us |
| CaImAn | raw calcium-imaging analysis | [flatironinstitute/CaImAn](https://github.com/flatironinstitute/CaImAn) — same: raw-scan processing we have already passed |
| cajal/pipeline | Tolias-lab raw-scan DataJoint pipeline | [cajal/pipeline](https://github.com/cajal/pipeline) — upstream raw processing / provenance, already done |
| ecobost/featurevis | feature-visualization (MEI precursor) | [ecobost/featurevis](https://github.com/ecobost/featurevis) — **superseded by `mei`** |

## `requirements.in` additions

The lines to append to [`requirements.in`](../../../requirements.in) when these land (the install itself is a separate step — this chapter only catalogues):

```
# --- Standard (added) ---
statsmodels          # GLM / mixed-effects: regress out the pupil+running confound

# --- Neuroscience-specific ---
pynapple             # tuning curves, trial-aligned analyses
rastermap            # population-raster ordering & visualization
umap-learn           # nonlinear dimensionality reduction (import: umap)
cebra                # joint neural+behavioral latent embeddings (torch; CPU-OK; heavyweight)

# --- Lab toolchain (added) ---
mei @ git+https://github.com/sinzlab/mei.git   # MEI synthesis (use instead of ecobost/featurevis)

# Not pip-pinned — handled out of band:
#   dPCA     — repo dormant; vendor or reimplement the demixing we need, don't pin a dead dependency
#   fitgabor — niche; source-install from github.com/mohammadbashiri/fitgabor only if a Gabor-fit step is needed
```

The already-pinned packages (numpy, scipy, pandas, scikit-learn, torch, matplotlib, seaborn, neuralpredictors, nnfabrik, sensorium, datajoint) are unchanged — see [The lockfile](04-the-lockfile.md).

## Scope of this index

This index is altered-states-specific for now, sitting inside The Build. Because analyses will accrue across projects and want a *shared* toolchain reference, it is a candidate to be promoted to a project-independent home later; that organization is being thought through separately. Until then, the concrete index lives here, and the reasoning behind every inclusion stays in [Nancy's think record](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md).
