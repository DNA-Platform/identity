# Sourcing the reconstruction method

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-24
- **topic:** Nancy > The Twin
- **previous:** [By-eye verification, and a code review](09-by-eye-verification-and-a-code-review.md)
- **status:** concluded

---

The fifth exchange of **`Nancy > The Twin`**. The trigger is Doug, and the catch is sharp: we called the pipeline "almost ready" while one of the **two essential computations** — the predicted images, i.e. stimulus **reconstruction** — had no sourced method. The MEIs we settled the hard way (the walker ops turned out to be the lab's own, bundled in `nnvision.legacy.featurevis`). Reconstruction is the other half, and for it I had only a *prose* recipe — which is exactly the trap Doug named: a deep-dive paragraph does not 100% specify an algorithm, and the [standing principle](../../../../the-build/11-how-we-make-a-publication-form-mei.md) forbids me from closing the gap by implementing.

## The question

The general part, sent to CD: the **exact published method and public code** for natural-image reconstruction by gradient-inverting the encoding model (Cobos / Tolias 2022, "Digital Twins of the Visual Cortex") — the GitHub repo + file/function, the optimizer + learning rate, single-trial vs repeat-averaged target and over which neurons, the loss (MSE on raw vs normalized responses), the start image, any pixel clip, the σ=2.5 gradient-blur schedule, and whether it reuses the MEI `gradient_ascent` machinery. The specific part I keep: does the sourced config map onto OUR tooling (the proven `mei.methods.gradient_ascent`) and our 36×64 `normalize=True` loaders.

## What I already know

- **The concept is catalogued** — the [literature note](../../../../the-literature/01-digital-twins-tolias-2022.md) and its deep-dive: start from gray, gradient-descend the image to minimize MSE between predicted and **recorded** responses, blur the gradient at σ=2.5, ~1000 iters; MNIST gets a VAE-latent variant. The **display** rule is catalogued too: per-image min/max + bicubic 36×64→144×256 (NOT the MEI's fixed-shared-range rule).
- **The code is NOT in our installed tools.** I searched `nnvision`, `mei`, and all of site-packages for reconstruct / invert / MSE — nothing. Unlike the MEI ops, there is no bundled copy.
- **The engine IS ours.** `mei.methods.gradient_ascent` (proven today on real MEIs) ascends whatever scalar the wrapped model returns. Reconstruction is the same engine with the objective `−MSE(twin(image), target_responses)` — a wrapper exactly like the `SingleNeuron` we already wrote.

## What I expect (a prediction to measure against)

- **High confidence:** reconstruction reuses the same `gradient_ascent` / featurevis machinery, objective swapped to MSE-to-target; the σ=2.5 blur is a *constant* `GaussianBlur` of the gradient, not the walker's annealed Fourier schedule.
- **Genuine uncertainty (the parts the prose does not pin):** (1) the target — I lean **repeat-averaged** response over reliable cells (cleaner inversion), but single-trial figures exist; (2) the loss space — raw vs standardized responses; (3) optimizer + lr (SGD vs Adam); (4) the exact public repo. These are precisely why this is a `/think` and not an implementation.

## Evidence — what came back (verdict: SUFFICIENT, and it reframed the method)

**Two corrections up front.** (1) The paper is **Cobos, Muhammad, Fahey, Ding, Ding, Reimer, Sinz, Tolias (2022), "It takes neurons to understand neurons: Digital twins of visual cortex synthesize neural *metamers*"** (bioRxiv 2022.12.09.519708) — the method is **metamer synthesis**, not "reconstruction": blank → gradient-descend to match recorded responses → the images are evaluated as *metamers* (do they re-evoke the original neural activity), not as pixel reconstructions. (2) **There is no public code** — CD grepped `nnvision`/`mei`/`sensorium` for `metamer|reconstruct|invert` (empty, confirming my own search) and web-searched for a repo (none); the paper has no code-availability statement and the author contributions say it was built in the lab's **internal DataJoint** pipeline. So this is the genuine fallback the [principle](../../../../the-build/11-how-we-make-a-publication-form-mei.md) names — *no code to get from GitHub* — and the Methods prose **fully specifies** the ~15-line algorithm.

**The seven questions** (CD flagged each quoted / inferred / not-in-paper):
1. **Repo** — NOT PUBLIC (internal DataJoint); reimplement from prose.
2. **Optimizer** — plain **SGD on the image**; step size **and** σ are **hyperparameters tuned per-scan by SSIM** — *no canonical lr to copy*. Constant step, fixed iters, no schedule.
3. **Target** — **repeat-averaged** responses (main; single-trial is the noisier Fig-S2 variant), over **all anatomically-included cells (~8200/scan), NOT a reliability-thresholded subset** — do *not* reuse our FEVE-filtered set here.
4. **Loss** — **MSE in normalized response space**. ⚠️ Cobos **z-scores (mean *and* std)**; our Sensorium `NeuroNormalizer` is **std-only (no mean subtraction)** — so our MSE is not literally their functional; decide and document the space.
5. **Start** — "blank" (quoted); gray = normalized mean, no noise (inferred).
6. **In-loop constraint** — none but the gradient blur (no pixel clip, no norm constraint); blur **constant σ=2.5, not annealed** (matches our spec; contrast the MEI walker's 1.5→0.01 anneal). Upsample-to-144×256 + contrast-rescale-to-0–255 is **post-hoc display only**.
7. **Same machinery as MEIs?** — **separate routine**: descent on MSE-to-a-population-vector, a single constant gradient blur, *none* of the walker ops. Shares only the autodiff-input-optimization idea. Not the `mei` driver.

**Two thread-closers.** The **0.61** I've chased is, in *this* paper, the **encoding model's** normalized corr-to-average (0.61 norm / 0.56 abs, Schoppe CC_norm, repeat-averaged) — prediction accuracy, *not* reconstruction quality; and "Ours" reconstruction response-correlation is a *different* 0.609 in Table 1 — don't conflate. And the metamer **upper bound** (split-half of 60 trials) is **0.908** for natural images — a ceiling **DOI's gain/SNR change will move, so it must be estimated per condition**.

## Interpretation — vs my prediction

I scored well on the mechanics and missed two framings. **Right:** repeat-averaged target, constant σ=2.5 blur, separate routine, plain SGD — all as predicted. **Wrong:** I expected a *reliability-thresholded* target; it is **all included cells, no FEVE filter** (and that is the correct discipline — the metamer must match the *whole* recorded population, not a clean subset). **Didn't anticipate:** the **z-score (mean+std) vs our std-only** loss-space divergence — a real subtlety that makes our MSE a slightly different functional — and the **SSIM-tuned step-size/σ**: there is *no number to copy*, the optimization hyperparameters are fit per-scan. The biggest reframe is the name — what we filed as "reconstruction" is the lab's **metamer synthesis**, evaluated by re-evoked activity, not pixel fidelity.

## Conclusion — the method, and the principle nuance

**This is the one case where reimplementation is the correct, principled move** — not a shortcut. The MEI rule ("the code exists; use it, never reimplement") assumed the code *exists*; here it verifiably **does not** (internal DataJoint, no public release), and the Methods **fully specify** the algorithm. So a faithful reimplementation from the prose is the *only* path and a legitimate one — but it is **Doug's call** to bless it (vs pursuing the authors' internal code), because it sits on the exact boundary the principle guards. **Catalogue the distinction so it is never mistaken for the MEI lesson.**

The metamer routine, specified: a **separate** module — plain **SGD on the image**, **blank (normalized-mean) init**, **constant σ=2.5 Gaussian gradient blur**, objective **MSE to the repeat-averaged response over all included cells** (no reliability threshold) in **our std-only normalized space** (documented as a deviation from Cobos's mean+std z-score), **~1000 iters**, with **step-size and σ tuned per-scan by SSIM** (not a fixed lr). Post-hoc **upsample + contrast-rescale for display only**, never inside the loop or in any response-space comparison. For the DOI contrast, estimate the **0.908-style upper bound per condition**. The archive's `recon/` slots are really **metamers** — rename in the catalogue. Open for Doug: bless the reimplementation (then it is a ~15-line module against our `EnsembleModel` + loaders), or seek the internal code.

<!-- citations -->
[previous]: 09-by-eye-verification-and-a-code-review.md
[research-topics]: ../research-topics/02-the-twin.md
[mei-recipe]: ../../../../the-build/11-how-we-make-a-publication-form-mei.md
[literature]: ../../../../the-literature/01-digital-twins-tolias-2022.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
