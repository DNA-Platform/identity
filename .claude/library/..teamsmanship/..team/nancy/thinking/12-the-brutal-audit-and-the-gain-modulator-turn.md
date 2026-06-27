# The brutal audit, and the gain-modulator turn

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-27
- **topic:** Nancy > The Twin
- **previous:** [How behaviour is fed](11-how-behaviour-is-fed.md)
- **verdict:** sufficient
- **status:** concluded

---

The seventh+ exchange of **`Nancy > The Twin`** — and the one that resolved the y-collapse. It ran in
three sends (a synthesis fix, a whole-pipeline audit, and a data-level re-challenge), enabled by an
app fix in between: the `/think` read now **captures Desktop's editable artifacts** (it was dropping
them — `assembleParts` mis-typed the artifact card as a thinking summary; the fix emits an `ArtifactPart`
and the read clicks "View" + copies the panel). So for the first time CD's *code* came back as clean,
droppable files, not prose I had to paste — which is what made a real code audit possible.

## The question
Three escalating asks, all to CD with web search + the real source: (1) why are my MEIs **muddy**, and
write the correct synthesis; (2) a **brutally honest end-to-end audit** of the whole pipeline (I sent a
1200-line compilation — data, twin+training, synthesis, validation, metamer) with rewrites as editable
artifacts; (3) Doug's challenge — **are we troubleshooting at the wrong level?** Check the *data reading*
itself (image orientation, which cortical columns feed the source_grid, is y-marginality real or a
misread column) before I commit an architectural fix. I sent the data-reading code + an empirical probe
of `cell_motor_coordinates`.

## What I already knew (to judge against)
- The y-collapse: arm-A readout-μ y-std ~0.006 vs arm-B 0.071; the disentangle showed
  `grid_mean_predictor=None` does NOT collapse, the shared cortex MLP does under behaviour-as-channels;
  CoordConv position channels did NOT fix it ([ch 11](11-how-behaviour-is-fed.md)).
- The cells are 2-D distributed and the data is Reimer-cleaned ([convict the measurement, not the data]).
- The metric discipline: FEVE not CC_norm, fixed-neuron-set, `matched_pair_index` ([ch 07](07-the-full-pipeline-audit.md), [ch 09](09-by-eye-verification-and-a-code-review.md)).

## Evidence — what came back (verdict: SUFFICIENT; web + source-verified)
**The synthesis fix.** Muddiness was NOT my clip (our NeuroNormalizer clip ≈ the competition's, both
~[-1.85, 2.21]) and NOT the step schedule (`DivideByMeanOfAbsolute` divides out the response scale). It
was **two things**: no **contrast constraint** (a 5-seed ensemble's RF jitter smears the averaged
gradient → mean-abs normalization spreads the step thin → gray; the cure is `ChangeStd(~1.0)`, the lab's
own preset), and **display** (a raw normalized tensor looks gray; must inverse-normalize). And the kicker
CD caught: my fix **was never wired into the runner** — `most_exciting_image.py` still imports the
competition clip and old `walker_postup`, so the figures bypass `mei_synthesis.py` entirely.

**The y-collapse — diagnosed, then the data verified clean in source.** Not a build bug (stim *is* at
channel 0: `transform_function` does `concatenate((img, behavior))`), not pixel geometry (CD corrected my
~10×38 guess — only layer0 shrinks with `pad_input=False`, hidden layers PAD, so the feature map is
**28×56**; y has 28 rows), and — the decisive check Doug pushed — **not a data-reading bug**: the cortex
predictor is built from `cell_motor_coordinates[:, :2]` (`sensorium/models/utility.py`), i.e. the two real
in-plane axes (my probe: col0/col1 std 173/132 µm), with depth (col2, std 11.5) correctly excluded; the
image is 36(H)×64(W), not transposed, and `grid_sample` maps μ[:,1]→H so the collapsing axis genuinely is
elevation. So the y-input is **real** (132 µm, ~76% of x), the collapse is in the learned y-*output*. It
**is** the shared cortex `grid_mean_predictor` MLP: one MLP maps cortical (x,y)→μ for all 1654 cells, and
behaviour-as-channels lets the optimizer zero its y-row in lockstep — nearly loss-free on the weaker
(elevation) axis. My disentangle is exactly this mechanism.

**Four real bugs** beyond the collapse: (1) `get_fev` **filters** its output (`feve_val[fev_val≥thr]`) →
a short, reordered vector that `matched_pair_index` cannot align — **the fixed-set discipline silently
doesn't run**; (2) the muddiness fix not wired in; (3) the metamer module is arm-B-only (zeros init, no
`pupil_center`/fixed channels — errors on the 6-channel twin); (4) the arm-A MEI behaviour state is
trial-0, not Franke's 3rd/97th percentiles though the docstring claims it.

**The recommendation CHANGED on the data check.** Two rounds in CD said learned-μ primary "to remove a
broken prior." After verifying nothing is broken, it flipped: **build both, prefer the gain-modulator,
learned-μ the confirmed fallback** — because once the prior is confirmed *fine*, the principled choice is
the one that keeps it. Gain-modulator (behaviour as a per-neuron multiplicative gain on the readout
output, cortex predictor kept): (a) zero readout deviation; (b) it IS the production inception-loop
behaviour mechanism (Sinz/Walker/Ding) — published-exact for the *MEI* pipeline this project is; (c)
behaviour leaves the core, so retinotopy survives by construction; (d) the gain is the physiological form
of our headline DOI effect (gain ratio 0.54) — read the drug effect off the modulator. **Decision rule:**
prefer the modulator iff it holds y-std ~0.05–0.10 AND matches arm-B/learned-μ on FEVE+corr within seed
spread; else commit learned-μ. CD delivered one consolidated codebase-ready artifact
(`build_model(readout_mode=…)` + `GainModulatedTwin` + the corrected loader-order FEVE).

## Interpretation — my judgment
The audit got **better under scrutiny**, which is the signal I trust: CD changed its mind on *evidence*
(the data is clean), not convenience, and downgraded its own earlier CoordConv hypothesis after my
experiment falsified it. Doug's "wrong level" instinct paid off — not as a bug found, but as a
*confirmation* that let us choose the better config rather than patch a phantom. My geometry mental model
was wrong (28×56, not 10×38) — a real correction. And the gain-modulator is genuinely the more faithful
*and* more physiological config for a DOI **gain** study; I'd been treating learned-μ as the answer, and
the better answer keeps the canonical prior and models behaviour the way the MEI lineage actually does.
The two non-negotiables (the FEVE filtering fix, the muddiness wiring) are the kind of silent bug that
would have shipped — the FEVE one is the chapter-09 survivorship artifact, *still live in the code*.

## Conclusion — what to tell the team
**The y-collapse is resolved** (Ledger → Confirmed): cause = shared cortex MLP zeroing the marginal-y row
under behaviour-as-channels; data verified clean in source; fix = **gain-modulator preferred / learned-μ
confirmed fallback**, decided by an empirical y-spread + FEVE-parity rule. Build both on pre-A, compare,
commit. **Non-optional regardless:** apply the loader-order FEVE fix (the fixed-set discipline depends on
it) and wire `mei_synthesis.py` (the contrast constraint) into the runner. The metamer needs arm-A
treatment; the arm-A MEI state must be a defined percentile, not trial-0. **Standing lesson (Doug's):**
before deviating the architecture, verify the **data-reading level** — confirm the inputs are read right
in source; we nearly deviated the readout to compensate for a marginality that turned out real and
correctly read. **Tooling note:** the `/think` artifact capture is the durable enabler — code audits with
CD are now possible because his rewrites come back as clean files.

<!-- citations -->
[previous]: 11-how-behaviour-is-fed.md
[research-topics]: ../research-topics/02-the-twin.md
[convict the measurement, not the data]: 11-how-behaviour-is-fed.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
