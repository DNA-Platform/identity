# Sprint 7 — The four twins, one at a time

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

**Status: ACTIVE.** The run sprint. [Sprint 6](06-sprint-6--one-twin-fully-seen.md) is the gated rule; this sprint builds the **launch command** that executes it and runs the four twins through it, **one at a time**, under a check-in protocol. The instrument is whole now — both essential computations (MEI and metamer) are proven on a real twin (Sprint 5/6 close), the platform merge is healed, the type-check is green.

## The launch command (Doug: "yes, try to make that launch command")

One runner — `src/analysis/run_twin.py` — does the full one-twin loop for **any** of the four cases, parameterized `<which> <arm> [init]`:

1. `condition_loaders(which, arm)` — arm A = behaviour + eye-position (4-channel, shifter on); arm B = stimulus-only.
2. `model.ensemble(which, arm, init)` — the **5-seed** ensemble, **load-if-exists** so a long run resumes and a finished seed is never retrained. Convergence by early-stop, never a clock.
3. `validation.validate(ensemble, …)` — FEVE + corr-to-average on the ensemble (the reported quality).
4. `figures.verify_twin(seed-0, …)` — the by-eye panel on a representative seed (filters, retinotopy, pred-vs-measured, distributions, shifter ablation).
5. **Synthesis** — MEIs (fixed shared clip) + **metamers** (re-evocation criterion), on the ensemble.
6. `archive.add_twin(…)` — every array into the data archive; figures regenerate from it.

## The run order (Doug)

**Run one at a time. Start with behaviour + non-DOI — `pre A cold` — because that is the most standard** (the publication setup: behaviour + shifter, control condition). Each subsequent twin is **earned by a clean inspection** of the one before (Sprint 6's gate). Order: **`pre A`** → `pre B` → `post A` → `post B`, each fully run, archived, inspected, gated.

## The background check-in protocol (Doug)

Training is the long pole (~5–7 h/ensemble on CPU) and the all-neuron synthesis is longer still, so the runner is **launched as a background process** the team can check in on and Doug can **ping for progress** mid-run. The first run is **inspection-grade** — the full ensemble, but a *subset* of MEIs/metamers (best cells / sampled test images) so the first look comes back in hours, not days; the **all-neuron archive is a separate, deliberate long run decided after the first inspection passes**. Load-if-exists means the inspection run and the full run share checkpoints — no training is repeated.

## Pre-flight, finished while it trains

None of these block *starting* the train; they land before the analysis reads: the **data-derived MEI clip** (loader `img_mean`/`img_std`), the **metamer step-size/σ SSIM tuning**, the **fixed-neuron-set into reported numbers**, the **shifter ablation** in `verify_twin`, the **arm-independent ceiling**, and the **per-condition metamer ceiling**.

## Live — what is running, and what to REMEMBER TO CHECK (2026-06-25)

The **Control / Arm-A / cold** train is RUNNING — all 5 seeds, log at
`src/analysis/_checkpoints/train_pre_A_cold.log` (watch live: `tail -f` or PowerShell
`Get-Content -Wait`). Two facts confirmed by the smoke + the live run, written here so they are
not re-discovered:

- **Arm-A input is 4-channel**: channel 0 is the stimulus; channels 1–3 are the behaviour
  variables (running / pupil / pupil-derivative) broadcast spatially flat; a separate
  `pupil_center` feeds the eye-position shifter. So an MEI/metamer here optimizes **channel 0 at
  a held behavioural state** — the method is Nancy's thinking chapter 11 (open), sourced from CD.
- **Timing (CPU)**: ~70 s/epoch steady (the first epoch ~4.4 min is warmup), ~30–50 min/seed,
  **~2.5–4.5 h for the 5-seed ensemble** — an afternoon, not a day.

**Remember to CHECK — each is forgotten if not read back:**
1. **CD's fixed-behavioural-state answer** → Nancy reads it, concludes thinking ch11, and **only
   then** is the arm-A synthesis wired. The synth cannot run correctly until this lands. Do not skip.
2. **Seed-0 FEVE** (~40 min in) — the early sanity check; converged should be ~0.4-ish (cf. the
   Sprint-4 arm-B 0.40). If it sits near the 2-epoch 0.035, something is wrong — stop and look.
3. **The pre-flight** (data-clip, metamer SSIM, fixed-neuron-set, shifter ablation, ceilings) —
   wire while it trains, before the analysis reads.

## Review

Succeeds when: the runner trains `pre A` to convergence as a checkable background process; the by-eye panel and validation come back and the team inspects them; the MEIs and metamers match the published look; and only a clean inspection licenses `pre B`. The gate is a phase, not a hope — and the long run is now something Doug can watch, not a black box.
