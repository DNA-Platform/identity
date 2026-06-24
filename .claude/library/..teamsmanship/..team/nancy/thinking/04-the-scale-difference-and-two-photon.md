# The scale difference, and whether two-photon makes it

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-23
- **topic:** Nancy > Neuroscience
- **previous:** [Writing the exploration well](03-writing-the-exploration-well.md)

---

The fourth exchange in **`Nancy > Neuroscience`**, and the one where Doug pointed out I was about to conclude "recording artifact" from inside my own head when whether that scale difference is a *known two-photon process* is a research question — and there is an instrument for reaching past what I hold. Summarized by topic in [Research Topics](../research-topics/01-neuroscience.md).

## The trigger

Checking the [matched-cell comparison](../../../../../../library/reports/2026-06-23-exploration/initial-data-exploration.md) on matched (shared test) stimuli, the raw post-DOI response is ~48% lower (85% of the 749 cells drop) — but the per-neuron s.d. *also* halves (post/pre ≈ 0.50), and dividing each session by its own s.d. removes the difference (ratio ≈ 1.06). So the raw drop is a proportional, whole-session **scale difference**, not obviously a firing change. The question is whether two-photon imaging is *known* to produce exactly this, and whether the field treats raw cross-session magnitude as invalid.

## The question (sent to Desktop)

The general half, factorized out: in two-photon calcium imaging, (1) what causes a whole-session multiplicative difference in response *scale* between two sessions of the same neurons (laser/PMT gain, GCaMP expression drift, depth/plane, F0, bleaching, deconvolution scaling); (2) is a raw cross-session magnitude comparison considered invalid, with per-session normalization the standard fix; (3) does more movement degrade SNR for a whole session; (4) what measures are robust to a scale difference, and what would separate a drug-induced gain change from a recording-condition one. The specific half stays with me: deciding what our −48%-raw / ~1.0-normalized result means and what the report may claim.

## What I expect

That this is textbook. Per-session normalization (ΔF/F or s.d.-standardization, the neuralpredictors way) exists *precisely because* absolute two-photon magnitude is not comparable across sessions — gain, expression, and depth all drift. So the field would call the raw comparison invalid and the standardized one the real one. Movement should degrade SNR (motion/z-drift), plausibly scaling a whole session down. And correlation-based measures (reliability) should be the robust ones — which is why the reliability drop is the only magnitude-independent thing I have, though it too can fall from a noisier recording.

## What I already know (verified here, not guessed)

- **Our own [Datasets book](../../../../../../library/.lib/datasets/02-the-static-scan-format.md) documents the normalization** — `meta/statistics`, "(x − mean)/std using the `all` statistics," per-neuron for responses. I had it written down and still compared raw. The miss is mine.
- The raw drop tracks the s.d. drop almost exactly (0.52 vs 0.50) → multiplicative scaling, removed by standardizing.
- The motion literature confirms movement-driven SNR loss in awake 2P is real and largely unavoidable (z-drift, jitter, false signals), so the more-active post session plausibly records worse.

## Evidence — what came back (verdict: SUFFICIENT — sharper than my question)

Desktop reframed it precisely: the lockstep means the raw effect is a **single per-neuron multiplicative scalar** — coefficient of variation preserved, each neuron's across-image profile intact, only amplitude scaled. A per-neuron gain is produced *identically* by (a) genuine divisive/multiplicative **gain modulation** of V1 — plausible for a 5-HT2A agonist (Carandini–Heeger normalization; arousal/pupil gain, Reimer 2014 / McGinley 2015; locomotion gain, Niell & Stryker 2010) — and (b) a mundane **cross-session measurement scale** (deconvolved a.u. on different days: GCaMP expression, laser power, PMT gain, focal plane, neuropil, the pipeline's per-session normalization). From this comparison the two are **non-identifiable**, and standardizing *removes the very axis the effect lives on* — diagnostic, not reassuring. Free constraint: a pure scalar leaves reliability invariant, yet reliability fell — so something beyond a clean scalar moved; `r = g·signal + fixed noise floor` reconciles it (lower gain drops mean, s.d., SNR together → reliability falls), consistent with a measurement scale-down, the alternative being genuinely added noise — and which one depends on whether the s.d. was taken over images (signal) or trials (mixes noise; mine was over trials). Disambiguation ladder: within-session scale-invariant gain contrasts (running vs stationary per session), scale-invariant code metrics (tuning/noise correlations, decoding), and below-deconvolution raw F/F0/event rates anchored on a blank epoch. Honest current statement: *a per-neuron scalar differs between sessions, origin unknown.*

## Interpretation — my judgment

Better than the verdict I was about to write. I had it as "recording artifact"; the truth is **non-identifiability** — the effect is a clean per-neuron gain change, and a 5-HT2A agonist producing divisive gain modulation is a *live, plausible* hypothesis, not something to dismiss. Doug's "don't throw the baby out" is vindicated twice: I should not certify a drug effect from raw a.u. (the artifact risk), and I should not dismiss it either (it could be real gain). The decisive point is that this comparison *cannot tell*, because standardization quotients out exactly the axis in question. The reliability drop is the one lever saying it isn't a perfectly clean scalar — but the `r = g·s + n` reconciliation means even that is consistent with a measurement scale-down, so it doesn't rescue the effect alone. My own fix: I took s.d. over *trials* (signal+noise), so "standardization erases it" is slightly entangled with the reliability question — the cleaner normalization is s.d. over *images*, which I should redo. The ladder *is* the model-free next analysis: within-session, scale-invariant contrasts where the cross-session scalar cancels by construction.

## Conclusion — a filed thought

**The report's matched-cell claim becomes:** a per-neuron multiplicative scalar separates the sessions (raw −48%, erased by per-session standardization), *non-identifiable* from this comparison — genuine V1 gain modulation (plausible for DOI) or cross-session measurement scale. Not "a firing drop," not "an artifact," but "a per-neuron gain change of unknown origin," with a concrete ladder to resolve it and the 97% behavioural confound as the *second* rung once measurement is ruled out.

**Method lesson:** verify the pipeline's own normalization before any cross-session magnitude claim — it was in Erin's walkthrough (section 5) and our Datasets book, and I compared raw. When standardization erases an effect, that is *diagnostic of where the effect lives*, not proof it is noise.

**For the team:** the strongest argument yet that the real first analysis is **model-free, within-session, scale-invariant** (gain modulation, tuning/noise-correlation structure, decoding) — they sidestep the cross-session scalar that swallows the magnitude story.

<!-- citations -->
[previous]: 03-writing-the-exploration-well.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[report]: ../../../../../../library/reports/2026-06-23-exploration/initial-data-exploration.md
[datasets-format]: ../../../../../../library/.lib/datasets/02-the-static-scan-format.md
