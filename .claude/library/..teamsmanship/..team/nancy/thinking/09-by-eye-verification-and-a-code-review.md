# By-eye verification, and a code review

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-24
- **topic:** Nancy > The Twin
- **previous:** [Gamma — fixed constants or fit per dataset?](08-gamma-fixed-or-fit.md)
- **status:** concluded

---

The fourth exchange of **`Nancy > The Twin`**. The trigger is Doug, and he's right: *trusting numbers isn't usually the way.* I'd been defending the gammas with FEVE 0.40–0.47 — a number — when the experimentalist's move is to **look at the model**. A twin can score 0.4 and still have dead filters, a scrambled retinotopy, or sign-flipped responses; you only catch that by eye. So I sent CD two asks at once, with the actual code attached: (1) the **by-eye verification panel** — what to look at, and the CORRECT-vs-broken visual signature for each — and (2) a **code review** for bugs beyond the one we already caught.

## The question

Two halves. *By-eye:* for a Sensorium V1 twin, what does a healthy first-layer filter set / readout retinotopy / MEI / predicted-vs-measured scatter / response distribution look like, versus a subtly-broken one? *Code:* where else are bugs hiding in the data path, the model build, the metrics? The factorization: CD holds the Sensorium/Lurz/Walker figure conventions and can read code cold for bugs; I hold what our pipeline actually does and whether a flagged signature matches what we'd see.

## What I already know (and the bug we found ourselves)

- We **audited and found one bug**: the hand-rolled `noise_ceiling` is the single-trial leave-one-out oracle, but `cc_norm`'s numerator is correlation-to-the-repeat-**mean** — different kinds of correlation, so CC_norm came back > 1. FEVE (`get_fev`) and the gain ratio don't use that ceiling and are clean. The lesson: **don't hand-roll the statistic** — and that lesson is itself a hint about where *other* bugs live (anything we hand-rolled or hand-aligned).
- The recipe is catalogued: [the twin](../../../../the-build/12-how-we-make-a-publication-grade-twin.md), [the MEI](../../../../the-build/11-how-we-make-a-publication-form-mei.md); the gammas are resolved canonical ([previous](08-gamma-fixed-or-fit.md)).

## What I expect (a prediction to measure against)

- **By-eye (high confidence):** the panel is roughly — first-layer conv filters should be **oriented, Gabor-like edge/bar detectors** (a healthy V1 core; *broken* = dead/all-zero filters, or duplicated/high-frequency noise); the readout `mu` positions should form a **smooth retinotopic map** (neighbouring cells → neighbouring visual-field positions; *broken* = a collapsed blob or scramble); MEIs should be **Walker-complex, not clean Gabors** (*broken* = pixel noise or a flat field); predicted-vs-measured should be **positively correlated and non-negative** (*broken* = a sign flip, a constant prediction, or a scale mismatch). I'm fairly sure of this list; the value of the answer is the *failure* signatures and any check I've omitted.
- **Code (genuine uncertainty):** I predict the one real remaining risk is a **neuron-ordering / alignment** bug — does the loader's neuron order match what `response_stats` (the shipped per-neuron std) and the matched-cell index assume? The `gain_ratio` matches by `unit_id`, which is safe; but anything that assumes loader-order == shipped-stats-order without matching is the trap. Second guess: the **`data_key`** handling, and whether the **shifter is actually exercised** (a shifter that silently does nothing would leave FEVE ~unchanged and hide). I do *not* expect another catastrophic bug — the pipeline is framework-maximal — but I want CD to tell me I'm wrong if I am.

## Evidence — what came back (verdict: SUFFICIENT, and it caught something big)

CD verified two API contracts from source first (the trainer return tuple; the shifter gated by `if shifter is True` and fed via `pupil_center` in forward), then gave both halves.

**By-eye panel** — six checks, each with the healthy *and* the broken signature: (1) first-layer filters — oriented Gabor-like bank = healthy; salt-and-pepper = gamma_input too low *for our scan*, washed-out = too high, dead/duplicated = under-training/collapse (this *is* the visual test that the copied gamma transfers to Reimer data); (2) readout `mu` retinotopy — smooth topographic sheet = healthy, scramble = bad cortical coords, collapse-to-a-point = dead readout; (3) MEIs — localized complex non-Gabor = healthy, clean Gabor = linear/not-the-MEI, noise = blur too weak, saturating-the-clip = the p=2 constraint binding; (4) predicted-vs-measured — positive non-negative diagonal = healthy, horizontal band = mean-collapse, negative = pre-nonlinearity tensor, sign-flip = neuron-order misalignment; (5) distributions — non-negative right-skewed = healthy, centred-on-zero-with-negatives = mean-subtraction crept in; (6) **shifter ablation** — predict with vs with `pupil_center` zeroed; a measurable change = the shifter works, identical = it's inert and arm A has degenerated to arm B.

**Code review**, ordered by harm:
- **CRITICAL — FEVE threshold = survivorship artifact.** `get_fev(fev_threshold=0.15)` drops a *different* cell set in pre vs post; under DOI's gain/SNR drop, more post cells fall out, the survivors are the cleanest, and median FEVE rises by *selection*. Our own numbers expose it: corr-to-average says pre > post, FEVE says post > pre — opposite directions. Fix: every metric on a **fixed neuron set** — matched pairs reliable in *both*.
- **HIGH — per-cell pre/post alignment** only enforced in `gain_ratio`; all other per-cell vectors are native loader order, mismatched across scans. Route every cross-condition comparison through one matched-pair index.
- **HIGH — noise ceiling rebuilt on arm-A loaders** regardless of the model's arm; build it once, arm-independent (or just drop CC_norm and use FEVE).
- **MEDIUM** — confirm `pupil_center` actually reaches forward in arm A (the ablation is the proof); confirm `_core_state` strips the `core.` prefix on warm-start.
- **Clean:** architecture/gamma config exact, trainer unpacking right, `EnsembleModel` averaging canonical, `.eval()` before ensembling correct, fixed `seed=1` holds the split. "The bones are sound."

## Interpretation — vs my prediction

I **nailed the alignment bug** (HIGH #2 — I predicted the neuron-ordering trap) and the **shifter question** (CD's answer: prove it with the ablation). I **missed the CRITICAL one entirely** — the FEVE-threshold survivorship artifact — and worse, *the tell was in our own numbers* (corr-to-average and FEVE pointing opposite ways) and I read past it, even *reported* "post is better" off the selection-inflated FEVE. That is the **same-kind-of-number trap a third time**: FEVE-on-a-selected-subset is not the same population as corr-on-all-cells, so their disagreement was the signature, not noise. The by-eye panel matched my list and sharpened the failure signatures — exactly what I wanted that I couldn't write myself.

## Conclusion — the pre-flight fixes (filed before any twin trains)

1. **CRITICAL — fixed-neuron-set discipline.** Every pre/post number on the matched pairs reliable in both conditions; report n. (`fixed_set_compare` + `matched_pair_index` now in `validation/`.)
2. **HIGH — one canonical matched-pair index** that all cross-condition per-cell comparisons (ΔFEVE, tuning, the MEI/reconstruction contrasts) route through.
3. **HIGH — arm-independent noise ceiling**, or drop the hand-rolled ceiling and report FEVE (the lesson, again: don't hand-roll the statistic).
4. **MEDIUM — shifter ablation** wired into `verify_twin`, run on the first twin, to prove arm A ≠ arm B.

The standing meta-lesson grows a tooth: the same-kind-of-number check now applies to **populations**, not just metrics and labels — confirm two numbers are over the *same cells* before reading their difference. The audit did its job: it caught the one thing that would have turned a threshold-selection mirage into a published DOI claim.

<!-- citations -->
[previous]: 08-gamma-fixed-or-fit.md
[research-topics]: ../research-topics/02-the-twin.md
[twin-recipe]: ../../../../the-build/12-how-we-make-a-publication-grade-twin.md
[mei-recipe]: ../../../../the-build/11-how-we-make-a-publication-form-mei.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md

<!-- citations -->
[previous]: 08-gamma-fixed-or-fit.md
[research-topics]: ../research-topics/02-the-twin.md
[twin-recipe]: ../../../../the-build/12-how-we-make-a-publication-grade-twin.md
[mei-recipe]: ../../../../the-build/11-how-we-make-a-publication-form-mei.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
