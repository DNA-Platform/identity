# The spec check, and CD's approval

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-28
- **topic:** Nancy > Neuroscience
- **previous:** [The normalization miss, and the gain limitation](09-the-normalization-miss-and-the-gain-limitation.md)
- **verdict:** sufficient (source-checked approval)
- **status:** concluded

---

After Doug caught me **inventing** (a behaviour modulator and a gain instrument — CD's earlier suggestions
that I had let into the spec as if they were the plan), I stripped them, read all the analysis code in
source, and rewrote the spec to describe **only what the code builds and what the cited sources specify**.
Then I sent it to CD with one job: **check, don't redesign** — go setting-by-setting against the primary
sources and approve or give line-level corrections. He did, and **approved it as a faithful contract**
once a few source-level fixes were made (all now applied).

## Evidence (verdict sufficient; CD checked against the sources)
**Verified correct:** the Sensorium core/readout block verbatim (layers 4, kerns 9/7, 64 ch, depth-sep,
pad_input=False, stack=-1, gauss_type full, init_sigma 0.1, init_mu_range 0.3); the trainer (PoissonLoss,
get_correlations, lr 0.009, lr_decay_steps 4, patience 5); the **learned-μ** deviation (justified exactly
as Lurz supports — the grid predictor is for cross-animal transfer, absent here); **Franke Fig 1e** as the
precise source for behaviour-as-channels + 2 position channels + shifter and the 3 channels {pupil size,
derivative, running}; Cobos, Schoppe, and the oracle ceiling. And CD **disowned his own earlier additions**:
removing the modulator + gain was the right call.

**Corrections (applied):**
- **MEI quality was backwards.** Walker 2019's central result is that mouse-V1 MEIs *deviate* from Gabor
  RFs — they are **complex** (sharp corners, checkerboards, pointillist textures). "Oriented/Gabor-like"
  belongs to the **first-layer filters** (Part 4), not the MEI; a Gabor-like MEI is a **red flag**. *This
  corrects my own earlier MEI work, where I'd read oriented MEIs as the success signature — the opposite is
  true.* Fixed Part 6.
- **A required Walker step was missing:** match each MEI's **mean luminance + RMS contrast** to a common
  value before any comparison; and **reconcile the L2 energy budget** (the live runner clips without it) —
  one of {in-loop budget, post-hoc match} is required or the comparison is contrast-confounded. Fixed Parts 5/9.
- **μ co-registration:** the two twins are independently fit, so learned-μ differs pre/post — co-register/
  share μ before the RF-mask correlation, or "spatial change" is partly μ jitter. Fixed Part 9.
- `max_iter` 500 vs the Sensorium baseline **200** (non-binding; noted). Part 5 +Franke cite (percentile
  state). Liu-2018 and Cobos-loss flagged to confirm.

**Affirmed open (no action beyond the marks):** gammas (Sensorium-competition, re-derive), reliable-in-both
FEVE, the MEI preconditioning **numbers** (genuinely unverifiable without Walker's online Methods), the
metamer prior, 5-seeds, the behaviour state, learned-μ-across-all-four.

## Interpretation — my judgment
The de-invention was right, and CD confirming it (disowning his own modulator/gain) is the strongest
possible check. The spec is now a faithful, source-verified contract. The standout fix — **MEIs are complex,
not Gabor** — is a real misunderstanding I'd carried into earlier work, now corrected at the source. The
remaining unknowns are honest (the verbatim numeric schedules), and they come from the papers Nancy is
synthesizing into `library/papers/`.

## Conclusion — what to tell the team
- **The spec is CD-approved as a faithful contract**, corrections applied.
- **Keepers (verified):** the Sensorium twin, behaviour-as-channels (Franke), learned-μ (the fix), Walker
  MEIs, Cobos pixel-space metamers, the quality characterizations, matched-cells, scale-invariant throughout.
- **Owed verbatim** (from the papers, Nancy synthesizing): Walker's preconditioning numbers; Cobos's loss
  form + optimizer/iterations.
- **Standing lesson:** I am not the scientist — describe what's built and what the sources say; CD checks,
  he doesn't (and shouldn't) be the source of new analyses. And read the source's actual *result* (Walker:
  complex, not Gabor) before stating a quality criterion.

<!-- citations -->
[previous]: 17-the-normalization-miss-and-the-gain-limitation.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
