---
title: "Gamma — fixed constants or fit per dataset? (thought in progress)"
date: 2026-06-24
topic: "Nancy > The Twin"
previous: 07-the-full-pipeline-audit.md
status: concluded
---

# Gamma — fixed constants or fit per dataset? (thought in progress)

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

Third exchange in **`Nancy > The Twin`**. The audit ([ch 07](07-the-full-pipeline-audit.md)) settled the architecture and the MEI recipe; this one is the regularization, and it is the question that gates *training the four twins*. Written in the pause; Evidence / Interpretation / Conclusion follow the read.

## The question

Does the canonical Sensorium-2022 / Tolias baseline use **FIXED** regularization weights — `gamma_input` / `gamma_readout` as published constants you copy verbatim — or does it **FIT** them per dataset via an nnfabrik hyperparameter search we'd have to re-run on our scan? Same for the LR schedule (`lr_init`, `lr_decay_steps`). And for our four-twin DOI design (Control/DOI × behaviour-in/out): one shared gamma, or fit per condition?

## Why now

It gates the four-twin training run, and today we read the **installed** source and found a gap. The bare function defaults are `gamma_input=15.5`, `gamma_readout=4`, `lr_init=0.005`, `lr_decay_steps=3`. Our config overrides these with `gamma_input=6.3831`, `gamma_readout=0.0076`, `lr_init=0.009`, `lr_decay_steps=4` — heavy, oddly-specific deviations copied from a Sensorium-2022 baseline reference **not on disk** ([The Build ch 10 provenance flag](../../../../../../library/.lib/the-build/10-the-digital-twin-recipe.md)). If the baseline *fits* gamma and we *copy* the competition's numbers onto our Reimer scan, every twin is silently mis-regularized — gamma controls exactly the Laplacian smoothness of the core and the readout sparsity, i.e. the tuning structure the whole DOI analysis reads. So the instrument's correctness rides on this.

## What I expect — my lean, as a prediction to measure against

I lean **FIT, not fixed**, and fairly strongly. Concretely, what I expect CD to confirm:

1. **The canonical pipeline FITS gamma per dataset.** nnfabrik exists precisely to do this — register Model/Dataset/Trainer, search configs, select on validation correlation (Lurz 2021 sweeps regularization). The installed `15.5 / 4` are *bare function placeholders*, not the baseline.
2. **6.3831 / 0.0076 are search OUTPUTS, tuned on the Sensorium competition data** — the four-decimal specificity and the large distance from the defaults are the signature of an optimizer landing on a non-round value, not a human-set constant. So they are *that dataset's* fit, not universal constants.
3. **Therefore copying them onto our scan is not the canonical method** — the correct move is to re-run the gamma search on our **pre-DOI** scan, or at minimum a sensitivity sweep confirming we sit on the validation-correlation plateau. (Lurz 2021's optimum is a broad plateau, so the copied values may be *near*-optimal — which is why this is "verify, likely fine" not "certainly broken.")
4. **LR schedule is also tuned but low-stakes** — with early-stopping on validation correlation, the final twin is relatively insensitive to `lr_init`/`lr_decay_steps`; gamma is the consequential one.
5. **Four-twin design: fit gamma ONCE on the control (pre-DOI) and share it across all four** — so regularization is not itself a cross-condition variable (a pre/post difference must not be partly a gamma difference). This matches the cold-primary/aligned discipline.

The one answer that would **surprise me and flip part of this**: if CD shows the Sensorium baseline shipped a **single fixed config for all competition scans** — i.e. the gammas were fit once on a reference and then *frozen as the published baseline* — then copying them is defensible *as the baseline does it*, and the imperative softens from "re-fit" to "these are the published constants; check sensitivity on our scan." I'll weigh that hard if it comes.

## What I already know — the context I'll judge against

- Our exact override values and the installed defaults, read from source today (the trigger above); the provenance flag is already standing in [The Build ch 10](../../../../../../library/.lib/the-build/10-the-digital-twin-recipe.md) ("appear only in our files … not in the installed source … a Phase-3 gate awaiting Doug").
- The parameter audit (my prior turn): constants like `fev_threshold=0.15` are repo defaults; the MEI gradient constants are verbatim nnvision; but these four training hyperparameters were exactly the ones flagged as *unverifiable from disk* — this `/think` is their resolution.
- Core + trainer are otherwise the **publication recipe verbatim** ([ch 12, "what is not wrong"](../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md)); the open piece is the regularization provenance, not the model.
- Discipline ([ch 12](../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md)): gamma bears on H1/H2 and the gain question; and a remembered value is a guess — only the source is the fact, which is why we don't ship copied gammas unverified.

## Evidence — what came back (verdict: SUFFICIENT, dispositive)

CD traced the four numbers in source (grepped `6.3831` across the whole stack) rather than asserting. The one-line: **the *methodology* (Lurz 2021 / nnfabrik) fits the gammas per dataset via Bayesian optimization; the Sensorium-2022 baseline and the lab's nnvision demos *freeze one such fit* — 6.3831 / 0.0076 — and reuse it verbatim across every scan without re-fitting.** So 6.3831 / 0.0076 are genuine published constants you can copy — but a frozen snapshot of a search run on a *different* dataset (Lurz 2020), not a per-Sensorium-scan fit.

The provenance chain, from source:
- The values originate in `Lurz_2020_code/lurz2020/models/models.py` (`gamma_input=6.3831` line 45, `gamma_readout=0.0076` line 64) as model-builder defaults. **The same file carries a *different* fitted set for a different variant — `gamma_input=46.402` (line 240), `gamma_readout=0.0207` (line 259)** — and two optimal sets in one codebase is the proof they are *fitted*, not universal (a hand-set smoothness constant wouldn't differ ~7× across variants). The file references "the bayesian hypersearch … TrainedModelBayesianTransfer."
- The mechanism is `nnfabrik/utility/hypersearch.py::Bayesian` — Facebook **Ax** (`ax.service.managed_loop.optimize`), **loguniform** priors (hence "oddly specific" outputs like 6.3831), objective = **validation correlation** (`get_correlations`); fit params go in `model_config_auto`, the rest fixed in `model_config`. Class default `total_trials=5` (too few; real runs use dozens).
- The freezing: 6.3831 / 0.0076 are hardcoded identically across every Sensorium baseline notebook and the nnvision mouse demos — same numbers, never re-fit, across all seven competition mice. The installed `sensorium/models/models.py` default (`15.5 / 4`) is the **un-frozen generic library placeholder**.
- `lr_init` / `lr_decay_steps` (0.009 / 4): **fixed** trainer_config overrides in the baseline notebooks (over the library 0.005 / 3), **not** part of the search, and far less sensitive (`lr_decay_steps` just caps ReduceLROnPlateau reductions). Not the risk.
- Four twins: **one gamma, shared identically across all four** — per-condition gammas would confound a tuning difference with a regularization difference; the competition used one config across seven mice, so two conditions of one animal is an even stronger case for sharing.

## Interpretation — my judgment

**What I nailed.** Share-one-gamma-across-all-four (my prediction #5) — confirmed and called "the most important answer." And the tell: the four-decimal specificity *is* a search output (Ax loguniform priors), exactly as I read it.

**The big correction — our framing was backwards.** We (the whole team, me included) called our 6.3831 / 0.0076 "heavy overrides" of the canonical 15.5 / 4 defaults. It is the reverse: **15.5 / 4 are the generic library placeholders; 6.3831 / 0.0076 ARE the canonical Sensorium/Lurz baseline values.** Our config is *restoring* the baseline, not overriding it. This is the same-kind-of-thing trap one level up — we mistook the library default for "the canonical value" and our restored baseline for "an override," and the fact is the opposite. The lesson generalizes: confirm which value is the placeholder and which is the published baseline before calling either an override.

**Where my "fit, not fixed" lean was half-right.** The honest answer is *both, at different layers* — the method fits, the baseline freezes-and-reuses — which is the very scenario I'd flagged would partially flip me ("baseline ships a single frozen config across all scans"). It did. So the imperative softens from "we copied the wrong numbers" to "we copied the *right* canonical numbers, but they were fit on a *different* dataset." The values being a frozen Bayesian-opt fit is proven, not inferred, by the second set (46.402 / 0.0207) in the same Lurz-2020 file.

**The residual real risk, narrowed.** Not mis-copied — but possibly off-plateau for *our* scan: different indicator, sampling rate, neuron count, and especially our per-neuron-std response scaling all shift the effective penalty. That is a *verification*, not a correction.

## Conclusion — a filed thought

**The plan (CPU-affordable, faithful):**
1. Run **one** modest gamma search — nnfabrik `Bayesian` / Ax `managed_loop.optimize` — on the **Control + behaviour** scan only, **single seed**, **~20–30 trials** (not the class default of 5), gammas in `model_config_auto`, loguniform ranges bracketing the published values (`gamma_input` ~1–50, `gamma_readout` ~1e-3–1e-1), objective = validation correlation, everything else fixed.
2. Compare the optimum to 6.3831 / 0.0076.
3. **Near** the published values → use **6.3831 / 0.0076 for all four** twins (canonical *and* verified-on-our-data, maximally comparable to the literature).
4. **Far** → use our **fitted** set for all four.
5. Either way: **freeze one gamma set, apply it identically to Control/DOI × behaviour-in/out; never fit per-condition.**
6. `lr_init=0.009` / `lr_decay_steps=4` are **fixed, low-stakes** baseline trainer overrides — keep, don't search.

This converts the silent mis-regularization risk into a one-time, checkable step, and keeps regularization constant across the comparison the whole DOI analysis rests on. One open caveat CD flagged: it verified the *mechanism* and the *code origin* (dispositive) but did not pull the exact Lurz-2021 methods sentence on trial count / search ranges — fetch verbatim if a methods section needs it.

The topic-level resolution is settled in [Research Topics → The Twin](../research-topics/02-the-twin.md); this chapter is the exchange behind it.

<!-- citations -->
[previous]: 07-the-full-pipeline-audit.md
[research-topics]: ../research-topics/02-the-twin.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[build-recipe]: ../../../../../../library/.lib/the-build/10-the-digital-twin-recipe.md
[build-twin]: ../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md
