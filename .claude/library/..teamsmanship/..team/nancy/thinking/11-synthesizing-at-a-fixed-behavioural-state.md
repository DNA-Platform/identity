# Synthesizing at a fixed behavioural state

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-25
- **topic:** Nancy > The Twin
- **previous:** [Sourcing the reconstruction method](10-sourcing-the-reconstruction-method.md)
- **status:** open

---

The sixth exchange of **`Nancy > The Twin`**, and it opened on a process correction: the team had drifted into designing arm-A synthesis in Arthur's voice — a *neuroscience* decision being made as an architecture detail — and Doug, with Libby, called it. The synthesis method is mine. So before a line of it is wired, I source the part I would otherwise have guessed.

## The question

Arm A is the behaviour arm, and I confirmed by inspection what its input is: a **4-channel image** — channel 0 the grayscale stimulus, channels 1–3 the behaviour variables (running, pupil, pupil-derivative) broadcast as spatially-constant channels — plus a separate `pupil_center` for the eye-position shifter. So an MEI or metamer here is synthesized **at a held behavioural state**: optimize channel 0, pin channels 1–3 and the eye position. The procedure for *which* state and *how* is Franke et al. 2022, and I sent CD four questions: (1) gradient on channel 0 only; (2) which behaviour variables to which percentiles, in raw or normalized space; (3) what `pupil_center` is clamped to; (4) whether it is a separate MEI per state (quiet, active) with the quiet-vs-active difference as the behavioural-modulation result.

## What I already know

- **The channel mapping is settled by our own data**, not assumed: channel 0 spatial std 0.80 with 237 distinct values; channels 1–3 spatial std exactly 0.0, equal to `behavior[0]` = [4.017, 0.021, 0.001] to the digit.
- **The fixed-state framing is from the audit** ([ch07](07-the-full-pipeline-audit.md)): MEIs are synthesized at **3rd/97th-percentile quiet/active** states with eye position clamped — Arm A validated. What I did *not* pin then was the exact application to the 4-channel input.
- My Sprint-4 synthesis tests were **arm B, one channel** — none of this machinery was exercised, so "arm A, fully" was never as close as we said.

## What I expect (a prediction to measure against)

Gradient on channel 0 only (high confidence). Quiet/active as the 3rd/97th percentile of locomotion and pupil, in the normalized space the loader emits (medium — the raw-vs-normalized choice is the real uncertainty, and it is the same trap as the metamer loss space). `pupil_center` clamped to the session median (medium). A separate MEI per state, the difference reported (high). The genuine open piece is whether pupil-derivative moves with the state or is held at zero.

## Evidence — pending the read

## Interpretation — pending the read

## Conclusion — pending the read

<!-- citations -->
[previous]: 10-sourcing-the-reconstruction-method.md
[audit]: 07-the-full-pipeline-audit.md
[research-topics]: ../research-topics/02-the-twin.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
