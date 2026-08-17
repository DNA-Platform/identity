# The publication checklist, and the risk that isn't the weights

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-30
- **topic:** Nancy > Neuroscience
- **previous:** [The four-twin fit, read as instrument trust](19-the-four-twin-fit-and-instrument-trust.md)
- **verdict:** sufficient (source-honest; reframes my audit)
- **status:** concluded

---

I asked CD for the publication-readiness checklist across the four twin domains — twins, MEIs, metamers, the
pre/post comparison — on the axis Doug named: **confirmed vs merely built.** Not "is it in the pipeline" but
"is there an *artifact* — a sweep, a figure, a control — that proves it holds *on this scan*." Two things came
back that matter. First, CD **refused to invent a "canonical three-gate"** it could not source — the exact
intellectual honesty I want from an audit, and the mirror of my own rule (don't let a plausible story outrun
verification). Second, and load-bearing: **the single most likely reviewer-rejection point is not about the
twins' weights at all** — it is the **temporal-drift / scan-order confound**, which is independent of the
weights and **not built** in our code. That reframes my whole rebuild audit: the biggest accuracy risk for
this *study* lives downstream of the twins.

## Evidence (verdict sufficient; CD, confirmed-not-built axis)

**The four-domain checklist (confirmed = an artifact proves it holds on our scan):**

- **(1) Twins.** Gamma **plateau sweep** (built = pasted; confirmed = the sweep exists — our open one);
  **ensemble saturation** (every seed early-stopped on val-correlation, not the max_iter ceiling; a seed-count
  curve shows metric *and* MEIs stop moving by 5); **2-D retinotopy as a figure**, not an assertion;
  **ceiling-referenced, bias-aware validation** (FEVE/Schoppe + oracle + corr-to-avg on reliable-in-both cells,
  **full-length `get_fev`** survivorship fix, per-condition SNR + Pospisil–Bair CIs); **the post/A collapse
  explained, not shipped** (the behaviour-freeze/shuffle ablation must have run — coupling non-stationarity vs
  pathology; an unexplained worst-arm is not publication-final); first-layer filters healthy, train−test gap
  comparable across the four.
- **(2) MEIs.** Walker preconditioning **verbatim** (numbers matching, not "structure looks right"); **both**
  the in-loop L2 energy budget (`PNormConstraintAndClip` p=2) **and** the post-hoc **mean-luminance + RMS-
  contrast match** — the latter "the step most often silently absent," without which every MEI×MEI metric is
  contrast-confounded; **fixed state identical *and* in-distribution** (the Franke 3rd/97th state must lie
  inside the *intersection* of both scans' behaviour — the covariate-overlap trap, not an extrapolation the
  baseline twin never saw); **non-Gabor as a positive control** (a Gabor-like MEI = under-regularized / collapsed
  toward the linear RF; confirm via MEI-vs-linear-RF, which doubles as proof the twin captured V1 nonlinearity);
  init stability (ρ≈0.99 across random starts) + RF-localization at μ.
- **(3) Metamers.** **Re-evoke validity** (the twin's response to the metamer correlates with the target
  population response, referenced to the repeat-reliability ceiling — the reference-free criterion); **labeled
  honestly** (pixel-space inversion is the underdetermined baseline, *not* Cobos's VAE/flow-prior headline —
  build the prior or name it "pixel-space reconstruction (Cobos baseline)"); multi-seed stability (show
  convergence or report the spread); **per-scan σ/step criterion-based** (tuned on re-evoke/SSIM, not visually)
  **and identical protocol pre/post** (not different σ that flatter the comparison).
- **(4) The pre/post comparison.** **Matching anatomical-only** (reciprocal-NN on registration coordinates, no
  response/tuning-similarity term — else you select *against* the cells DOI changed and the comparison is
  circular); **μ co-registration** before any RF-mask MEI×MEI metric (independent learned-μ fits jitter the mask
  and fake "spatial change"); **within-scan temporal-drift / no-drug control** (drug perfectly confounded with
  scan order — n=1, no vehicle, DOI always second — so split each scan early/late and show pre→post exceeds
  within-scan drift, or a baseline-only pseudo-comparison null); **scale-invariance discipline** (every metric a
  ratio/shape/correlation, no cross-scan amplitude); behavioural null pre-specified against Franke's "state
  leaves spatial structure ~unchanged," cell-wise stats as **within-animal descriptive (n=1)**, not a population
  test.

**The reviewer-rejection set (the 2–3 most-skipped):** (1) **the temporal-drift / order control** — the single
most likely killer for a two-scan n=1 psychedelic design, the one a Reimer/Tolias reviewer asks *first* ("how
do you know it's DOI and not scan two?"), and the easiest to skip because you must build the null yourself from
within-scan splits; (2) **matching circularity** — prove the match is position-only, else the whole comparison
is circular; (3) **the gamma plateau-check** — the frozen gammas shape the MEI/non-Gabor result, so an imported
hyperparameter means the headline rests on someone else's dataset. Honorable mentions that quietly confound the
compare: **μ co-registration** and the **luminance/RMS match**.

**CD's honesty on "the three the lab gates on":** it said outright it *cannot* verify a named, canonical
Reimer/Tolias three-check pre-launch gate from anything sourced ("I'd be inventing lab doctrine"), and would
not overwrite my memory with a reconstruction — asking instead what the other two I recalled were. What it
*could* offer is the **natural instrument-trust triplet**: (i) validation clears the noise ceiling
(reliable-in-both FEVE/oracle with CIs); (ii) the forward pass is structurally healthy (2-D retinotopy + stable,
non-Gabor MEIs); (iii) the synthesis-shaping hyperparameters are verified on our scan (the gamma plateau) — the
minimal set where skipping any one means the MEIs/metamers can't be trusted as instruments regardless of how
good the correlations look.

## Interpretation — my judgment

**The honesty is the most valuable thing in the exchange.** CD declining to fabricate a canonical lab gate is
the same discipline I hold — don't let a plausible story (or a plausible authority) outrun the source. Its
natural triplet is the *instrument-trust* framing, not a leaderboard, and it lines up cleanly with the
four-twin instrument-trust read (trustworthiness, not prediction) and the rebuild audit (gamma the open gate).

**The correction to my own audit is the keeper.** The rebuild audit examined the **weights** — rebuild-or-not,
the three weight-level gates (preserved in `specification.md`). But the single most likely reviewer-rejection is
**not the weights** — it is the **temporal-drift / scan-order confound**, a *comparison* control, independent of
the twins, and **not built**. That is why my two-step answer felt incomplete to Doug. A perfect twin compared
badly still gets rejected. The two audits are different axes: the weight-level ledger answers *"are the twins
trustworthy instruments?"* (yes, pending gamma); this answers *"is the comparison valid?"* (only if the drift
null and the matching-anatomy proof are built). **Gamma is the one item on both lists** — it is a weight gate *and* it shapes the MEIs — which is why
it is genuinely load-bearing; but temporal-drift and matching-circularity are pure comparison controls no amount
of twin quality repairs.

**The temporal-drift null is the deepest threat, and it is mine — I flagged it and it isn't built.** n=1, two
scans, DOI always the second, no vehicle → the drug is *perfectly confounded with scan order and time*. My own
Sprint-5 execution plan named it "highest-priority control, runs FIRST" — and it is **not in the code**. The fix
is the within-scan early/late split (build the null from each scan's own halves); it is skipped precisely
because you have to construct the null yourself. Until it exists, "DOI effect" reads as "second-scan effect,"
and that is the first thing a reviewer will say.

**Matching-circularity is subtle and fatal.** If the reciprocal-NN match carries *any* functional/tuning-
similarity term, it selects *for* cells that didn't change and *against* the cells DOI changed — making "the
represented features are similar pre/post" a foregone conclusion. Our match is registration-coordinate-based as
far as I know, but CD's point is that we must **prove** it (show the artifact), not assert it.

## Conclusion — what to tell the team

- CD delivered a real four-domain publication-readiness checklist on the confirmed-not-built axis, and
  **refused to fabricate a canonical lab three-gate** — honesty I trust, and a model to mirror.
- **The keeper reframe: the biggest accuracy risk for this study is not the twins' weights** (very likely fine —
  2 of 3 weight gates confirmed, gamma the only open one) **but the comparison controls** — chiefly the
  **unbuilt temporal-drift / scan-order null**, the #1 reviewer-rejection point for an n=1 two-scan DOI design
  with no vehicle.
- **Build/prove before the paper (the reviewer-rejection set):** (1) **temporal-drift null** — within-scan
  early/late split — **NOT BUILT, highest priority**; (2) **matching-anatomy proof** — reciprocal-NN is
  registration-only, shown in an artifact; (3) **gamma plateau-check** — the shared weight gate. Honorable
  mentions: **μ co-registration** + the **luminance/RMS match**, or the spatial-change metric measures the wrong
  thing.
- **Adopt CD's instrument-trust triplet as the twin-domain gate:** validation clears the ceiling / healthy
  non-Gabor forward pass / gamma verified on our scan.
- **Cross-reference:** the weight-level ledger (readout = free-μ DONE, behaviour-channels DONE, gamma PENDING —
  now preserved in `specification.md`) answers *are the twins trustworthy*; this chapter answers *is the
  comparison valid*. **Both must clear** — and the comparison side is the more exposed.

## Standing lesson

I keep **auditing the instrument when the biggest risk is the experiment.** The weights can be perfect and the
study still fall to the scan-order confound. For an n=1, two-scan, no-vehicle DOI design, the accuracy actually
lives in the **comparison controls — the temporal-drift null first** — so I must audit the comparison as hard
as the twin. And CD's "I can't source that, I won't invent it" is worth more than a confident fabrication: an
honest gap is a finding; mirror it.

<!-- citations -->
[previous]: 19-the-four-twin-fit-and-instrument-trust.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
