# The digital-twin recipe

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

The concrete recipe for the **Sensorium-2022 baseline encoding model** — the "digital twin" — and the **MEI** synthesis that runs on it, recorded here so it survives past the scratch `/think` output it was first worked out in. These are the published baseline's hyperparameters, confirmed against the `sinzlab` repositories; they realize the encoding model the [digital-twins paper](../../papers/tolias-digital-twins-2022/17-deep-dive-encoding-model.md) describes, with the [MEI gradient-ascent](../../papers/tolias-digital-twins-2022/18-deep-dive-gradient-inversion.md) of Walker et al. 2019. The packages are catalogued in [the toolchain index](07-the-toolchain-index.md); the env caveats (`mei` installed `--no-deps`, datajoint never invoked) live in [`src/library/model/NOTES.md`](../../../src/library/model/NOTES.md); the `Model`/`Checkpoint` port is [`src/library/model/base.py`](../../../src/library/model/base.py). This is the recipe the build follows — the real `sensorium` / `neuralpredictors` / `mei` packages, trained properly — and it runs in the experiment noted at the end.

## The encoding core — `neuralpredictors` `Stacked2dCore`

| parameter | value |
|---|---|
| layers | **4** |
| `input_kern` | **9** |
| `hidden_kern` | **7** |
| `hidden_channels` | **64** |
| hidden convolutions | **depth-separable** |
| `pad_input` | **False** |
| `stack` | **-1** (read out from the last layer) |
| per-layer | **BatchNorm + ELU** |
| output nonlinearity | **ELU + 1** (keeps rates positive for the Poisson loss) |

## Regularization

- **`gamma_input` = 6.3831** — a Laplacian smoothness penalty on the first-layer filters. This is the *Gabor-shaper*: it is what makes the learned receptive fields come out as smooth, oriented Gabor / centre-surround structure rather than high-frequency noise.
- **`gamma_readout` = 0.0076** — an L1 penalty on the readout feature weights (sparsity).

> **Provenance flag.** These two `gamma` values, plus `lr_init` 0.009 and `lr_decay_steps` 4 in Training below, appear only in our files and this recipe — **not** in the installed `sensorium` / `neuralpredictors` source. They trace to an external Sensorium-2022 baseline not on disk, and are a **Phase-3 gate** in the [parameter-provenance audit](13-the-active-image-run.md#parameter-provenance), awaiting Doug's resolution. Treat them as the working values, not as repo-confirmed.

## The readout — `FullGaussian2d`

| parameter | value |
|---|---|
| `init_sigma` | **0.1** |
| `init_mu_range` | **0.3** |
| `grid_mean_predictor` | **`'cortex'`** — each neuron's readout location is predicted from its measured cortical `(x, y)`, so retinotopy is built in rather than learned from scratch |

Confirmed: `grid_mean_predictor='cortex'` works directly against our `cell_motor_coordinates`, with **no `None` fallback** needed. `static_loaders` did need two small data fixups, recorded in [NOTES.md](../../../src/library/model/NOTES.md): constant `area` / `layer` neuron-meta written per scan, because the loader reads those fields even when nothing filters on them.

## Training — `sensorium.training.standard_trainer`

| parameter | value |
|---|---|
| optimizer | **Adam**, `lr_init` **0.009** |
| scheduler | **ReduceLROnPlateau**, `factor` **0.3**, `patience` **5** |
| loss | **PoissonLoss** |
| early stopping | on **per-neuron correlation** (validation) |
| `max_iter` | **200** |

The published aspiration is **~0.61 normalized correlation** on comparable data (~37% of explainable variance); a twin far below that cannot support MEI synthesis or inversion.

> **One env-compat shim, confirmed in [NOTES.md](../../../src/library/model/NOTES.md).** The real `standard_trainer` runs end to end on CPU, but it builds `ReduceLROnPlateau(verbose=…)`, and torch ≥ 2.x removed that kwarg. A one-line patch subclasses the scheduler to swallow `verbose` before the trainer is called — an environment-compat shim, **not** a reimplementation. `standard_trainer` returns `(score, output, model.state_dict())`; the third item is the checkpoint we save.

## MEI synthesis — `sinzlab/mei` (Walker et al. 2019)

Gradient ascent on the trained twin to find each neuron's most-exciting input — `mei.methods.gradient_ascent`, the model-synthesis core only (**never** the datajoint-backed pipeline):

| parameter | value |
|---|---|
| optimizer | **SGD**, `lr` **0.1** |
| iterations | **1000** |
| initialization | **RandomNormal** |
| precondition | **Gaussian blur, σ = 1 px** on the *gradient* — **our one custom op**, not a package class (see the note below); it suppresses high-frequency noise during synthesis (the pragmatic CPU form — the publication target is an *annealed image* blur, [ch 11](11-how-we-make-a-publication-form-mei.md)) |
| postprocessing | **`PNormConstraint(norm_value = 25, p = 2)`** — an L2-norm **ceiling** (scales an image *down* only when its norm exceeds 25), **not** a fixed-norm projection |
| extras | none in the live build — the confirmed cfg is initial + optimizer + stopper + the precondition and postprocessing above; `LpNorm` / `TotalVariation` / `BoxContrast` / `NatImgBackground` are optional regularizers from the broader MEI literature, not used here |

> **Confirmed against the installed source.** The values and dotted paths above are read from the installed packages — introspected by Adam, not assumed — and recorded in [`src/library/model/NOTES.md`](../../../src/library/model/NOTES.md). One honest exception: `mei` and `neuralpredictors` ship **no** Gaussian-blur precondition — their default precondition is the identity — so the blur is the **single op we wrote**, `library.model.mei_ops.GaussianBlurPrecondition(sigma=1)`, wired into `mei`'s real precondition slot by dotted path; everything else in the run is the real package. Where a package genuinely lacks a piece, we write it honestly and label it ours rather than pass it off as stock.
>
> And the resolution is itself the lesson: these paths were **read from the installed source, not assumed** — the discipline of [reading the source, not only the library](../../../.claude/library/teamspeak/08-reading.md#read-the-source-not-only-the-library). A value remembered from a demo notebook is a guess; the import path in the installed package is the fact.

## Where it is built

The recipe is built with the **real packages** — `sensorium` builds the model, `neuralpredictors` supplies the core and readout, `mei` does the synthesis — in the dated experiment [`src/experiments/2026-06-23-twin-mei/`](../../../src/experiments/2026-06-23-twin-mei/twin_mei.py) (the dated-experiment convention, [ch 8](08-the-organization.md)): `twin_mei.py`, durable **`checkpoints/`** (`twin_pre.pt`, `twin_post.pt` — gitignored but never auto-cleaned, so a good twin is never lost), and **`results/`** (`A_validation.png`, `B_mei_grid.png`, `C_matched_mei.png`, `D_network.png`, an `_inspect/` scratch dir, and `summary.json`).

The twin is **trained properly** — CPU time is fine; quality of fit is the bar, because the MEIs are only as good as the twin. There is no shortcut architecture and no hand-rolled stand-in: the build *is* the recipe above, run on the real packages. This realizes **Step 0–1** of [the analysis plan](../the-altered-cortex/03-the-analysis-plan.md) and is the work of [Sprint 4](../projection/04-sprint-4--the-twin-and-mei.md) — it builds the *instrument* the later hypothesis tests (H1–H6) use, and makes no claim about DOI: a twin that fits is not a mechanism.

The figures (`A`–`D`) are rendered by us in matplotlib, styled to match the published paper figures — the lab packages ship no plotting tools ([ch 7](07-the-toolchain-index.md#figures-rendered-by-us-not-the-packages)).

**Validation numbers pending.** The achieved per-neuron test correlation — against the ~0.61 baseline aspiration — is recorded here once Adam's run completes, not claimed before it exists.

<!-- citations -->
[toolchain]: 07-the-toolchain-index.md
[organization]: 08-the-organization.md
[analysis-plan]: ../the-altered-cortex/03-the-analysis-plan.md
[sprint-4]: ../projection/04-sprint-4--the-twin-and-mei.md
[model-notes]: ../../../src/library/model/NOTES.md
