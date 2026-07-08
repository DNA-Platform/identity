# The baseline re-anchor — Franke demoted, Walker's modulator found

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-28
- **topic:** Nancy > Neuroscience
- **previous:** [The specification, sent for a rigorous primary-source review](07-the-spec-sent-for-rigorous-review.md)
- **verdict:** sufficient (dispositive, source-grounded)
- **status:** concluded

---

The follow-up to [ch15](07-the-spec-sent-for-rigorous-review.md). Doug challenged the Franke-as-canonical
anchor: *"this is Reimer data, usually analyzed with Tolias — is CD comparing to the wrong baseline?"* I
sent it with the reminder that the canonical Reimer/Tolias digital-twin lineage is Walker + Cobos +
Lurz/Sensorium. CD pulled Walker, Cobos, and Lurz directly. **Doug's instinct was right, and the answer
handed us the missing gain instrument for free.**

## The question
Is Franke the wrong template? What does the canonical Reimer/Tolias pipeline ACTUALLY specify for a
single-session grayscale single-mouse twin + MEIs + metamers? And what is the right instrument set,
including the scale-bearing gain instrument the spec was missing?

## Evidence (verdict: sufficient; CD read Walker / Cobos / Lurz this session)
- **Franke is a downstream application, not a source.** It *inherits* its architecture and MEI procedure
  from Walker 2019 + Lurz 2021, and adds two things of its own: behaviour-**as-channels** input and a
  **colour** readout. So "method template = Franke" cited a derivative for the method and a colour paper
  for a colourless analysis. **Anchor = Walker (MEIs), Cobos (metamers), Lurz/Sensorium (twin).** From
  Franke, borrow ONLY: the **quiet/active percentile states** (3rd / 97th of pupil + locomotion — nothing
  to do with colour, transfers verbatim) and the **two-states → compare fixed-state-MEIs scaffold**. Drop
  the colour readout entirely; behaviour-as-channels is optional and arguably the wrong choice.
- **Walker's MODULATOR is the missing gain instrument.** Walker's twin includes a *modulator* that predicts
  a per-neuron **adaptive gain** from behaviour. Fit a twin WITH a modulator and you read DOI's effect on
  gain **within scan, at a fixed behaviour state, in unnormalized units** — exactly the Michaiel quantity.
  It does double duty: the behaviour *mechanism* (in place of Franke channels) AND the gain *readout*. (It
  is also the "gain-modulator" from my own ch12 y-collapse work — back now for the right reason.)
- **Two axes DOI moves, two instruments.** Amplitude/**gain** (raw space → the modulator) vs spatial
  **feature** (contrast-normalized → the MEI). The spec collapsed both into contrast-normalized
  instruments, which is *why gain vanished* — the same erasure as per-scan normalization.
- **Metamer needs the generative prior.** Cobos's near-identical reconstructions optimized in the latent of
  a **VAE (or Glow) generative prior**, not pixels. Pixel-space inversion is the underdetermined *baseline*
  variant. Canonical = encoder-inversion + generative prior + response-matching, multi-seed + stability.
- **MEI = Walker:** random init → regularized gradient ascent to convergence; **match mean luminance + RMS
  contrast before any comparison**; the L2-norm contrast budget (settled); the exact preconditioning
  σ/schedule still to lift verbatim from Walker's online Methods.
- **Architecture (codeable):** the Sensorium-2022 baseline `stacked_core_full_gauss_readout` (4 layers,
  kerns 9/7, 64 ch, depth-sep, gammas 6.3831/0.0076, Adam 0.009, Poisson). For single-session/grayscale:
  1 image channel, Gaussian readout, **learned-μ** (transfer rationale absent → justified), shifter, and
  behaviour via the **modulator**, not channels.
- **Honesty caveat (CD's):** he quoted Walker's main text + Fig 1 and Cobos's abstract/refs, but did NOT
  capture Walker's online-Methods preconditioning schedule or Cobos's exact optimizer/iteration counts —
  lift those two verbatim before freezing the recipe.

## Interpretation — my judgment
Doug's "wrong baseline" instinct was exactly right and it **closed the gain blind-spot** the whole thread
circled. The re-anchor is clean: Walker/Cobos/Lurz are the source; Franke is scaffolding. The **modulator**
is the keystone — behaviour mechanism *and* gain instrument — and its return vindicates the ch12
gain-modulator (for the right reason: Walker's canonical design, not a y-collapse patch). The y-collapse is
largely **mooted** by this design: behaviour via the modulator (not channels) + learned-μ (not the cortical
predictor) means there is no behaviour-channels × cortical-predictor interaction to collapse. The metamer
becomes a heavier, real build (the prior). Two verbatim numbers still owed.

## Conclusion — what to tell the team (and put in the spec)
- **Re-anchor:** Walker (MEI) + Cobos (metamer) + Lurz/Sensorium (twin); **Franke = scaffolding** (the
  percentiles + the comparison structure only).
- **Add the modulator** (Walker): behaviour mechanism + the gain instrument. Twin = Gaussian core/readout
  (learned-μ) + eye-position shifter + modulator(behaviour → per-neuron gain). No behaviour-as-channels.
- **Gain instrument (close the blind spot):** read DOI's gain off the modulator (or a model-light
  fixed-input amplitude backstop), in raw units at a fixed behaviour state — never off MEIs or
  standardized responses.
- **Metamer:** add the generative (VAE) prior + multi-seed/stability; the pixel-space version is the
  "baseline," not the method.
- **MEI:** Walker recipe + mean-luminance/RMS-contrast matching before comparison; same fixed behaviour
  state pre AND post.
- **Validation bar relative**, not Lurz's absolute number. Keep the model-free backbone; the twin adds
  feature (MEI) + population (metamer) + amplitude (modulator-gain), it doesn't replace it.
- **Owed verbatim:** Walker's preconditioning schedule; Cobos's optimizer/iteration counts.
- **Keepers (no regression):** matched-cells-throughout, the instrument framing, **learned-μ**, the
  reliable-in-both FEVE mask, the confirmed percentiles, Cobos terminology.
- **Standing lesson:** "closest paper" anchored us to a downstream colour study; the right anchor is the
  *method-source* lineage. Read where a method comes *from*, not just which paper looks closest.

<!-- citations -->
[previous]: 15-the-spec-sent-for-rigorous-review.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
