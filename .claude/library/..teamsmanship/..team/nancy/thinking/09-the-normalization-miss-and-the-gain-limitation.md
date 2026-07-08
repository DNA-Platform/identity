# The normalization miss, and the gain limitation

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-28
- **topic:** Nancy > Neuroscience
- **previous:** [The baseline re-anchor — Franke demoted, Walker's modulator found](08-the-baseline-re-anchor-and-walkers-modulator.md)
- **verdict:** pending (read not yet done)
- **status:** in progress

---

Doug caught a foundational miss in the integrated spec. I had added a **Gain** instrument (Part 7, off
CD's "read gain off Walker's modulator" idea) without reckoning with what the exploration established
months ago — **the per-scan normalization erases the gain.** He told me to read the source (the
`exploration` and `twin-mei` experiment folders), not my synthesis of it. I did, and it is deeper than
"normalization erases gain":

- The recording is **volumetric**; a **z-drift rescales every cell's amplitude** across the field, so
  **raw cross-scan amplitude is uninterpretable**. (`exploration.py:388-394` is explicit.)
- The dataset therefore ships a **per-neuron per-scan std normalization** (used by `static_loaders`
  `normalize=True`; `real_data.py` z-scores the same way). It removes the z-drift — and **also removes the
  one documented DOI effect, the gain reduction (Michaiel)** — "the very quantity this normalization
  removes." The exploration's own conclusion: a real DOI gain change must be sought with **scale-invariant,
  within-scan** methods, **not cross-scan amplitude**.
- So **neither** cross-scan raw (z-drift-confounded) **nor** normalized (gain-erased) amplitude recovers
  the gain, and a modulator fit on normalized responses inherits the same cross-scan problem. CD's
  modulator-gain idea **and** my Part 7 both fail on exactly this. The gain is a **limitation**, not a
  buildable instrument — and the scale-invariant MEIs/metamers are *appropriate*, not a blind spot.

## The question (to CD; corrected spec attached)
(1) Is there a valid **within-scan, scale-invariant** gain signature, or is the absolute gain simply not
addressable in this volumetric per-scan-normalized data? (2) What **else** foundational about this specific
Reimer dataset (volumetric, per-scan-normalized, single-mouse, grayscale, single-session, behaviour-
confounded) am I still forgetting — the silent kind of constraint that invalidates a method?

## What I did (source-grounding, per Doug)
Read `exploration/analysis.py` + `exploration.py` and `twin-mei/twin_mei.py` + `real_data.py`. Corrected
the spec: the intro now states the z-drift→normalization→gain-erasure constraint; Part 1 names the shipped
normalization and its reason; **Part 7 is reframed as a documented limitation** (with Open Q9); Part 8 is
scale-invariant (feature axis only). Fixed the contradictions the reframe left (the modulator is no longer
called "the gain instrument").

## What I expect
CD likely confirms the absolute gain is not cleanly addressable here, with maybe a partial within-scan
signature. And he will probably surface more silent constraints I keep re-discovering one at a time: n=1
(single mouse) generalization, no labelled spontaneous epochs (limits the reconstruction/hallucination
read), grayscale (no colour axis), the behaviour/arousal confound on any pre/post comparison.

## Evidence / Interpretation / Conclusion
(pending the read of `bwzd2pp7g`.)

<!-- citations -->
[previous]: 16-the-baseline-re-anchor-and-walkers-modulator.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
