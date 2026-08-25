# Sprint 13 — Reading the machine we built

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `documentation complete` — the lesson sprints are the next planning step

---

**Status: ACTIVE (2026-08-21).** Prompted by David, who followed his error-in-variables email with two
more links: [plenoptic](https://docs.plenoptic.org) (Simoncelli lab) and
[Shin et al. 2025](../../papers/shin-recurrent-pattern-completion-2025/.cover.md) on recurrent
pattern completion. The reading of *why he sent both* is in
[that paper's commentary](../../papers/shin-recurrent-pattern-completion-2025/08-commentary.md).

Doug's own framing set the sprint: **he wants to be taught this, not handed it** — and to read every
line of code we write. So the sprint has two halves. This chapter records the first, which is done.

## What this sprint is for

`src/analyses/most-exciting-image/` is delivered and frozen: four twins, 749 matched cells, per-cell
MEIs, eight metamer sets, a decoder, and a headline resolution result. **7,862 lines across 56
files, and no per-file documentation of any of it.**

Two things follow. We cannot teach a machine we have not read, and we cannot claim a replication
against a method we cannot state. **So the sprint began by reading the whole training and synthesis
path and writing it down.**

## What was built

**`src/analyses/most-exciting-image-replication/`**, a new analysis. Nothing in it writes to
`most-exciting-image/`; one seam (`lib/twin.py`) is permitted to import from it.

- **[`docs/legacy/`](../../../src/analyses/most-exciting-image-replication/docs/legacy/.cover.md)** —
  nine chapters plus **thirteen per-file, per-function pages** covering the complete path from a
  folder on disk to a delivered comparison. Every file read in full.
- **[`architecture.md`](../../../src/analyses/most-exciting-image-replication/architecture.md)** —
  what plenoptic is and is not, and our twin's exact configuration.
- **[`design.md`](../../../src/analyses/most-exciting-image-replication/design.md)** — how the code
  gets written, and the plenoptic surface we use, named function by function.
- **[`statement-of-work.md`](../../../src/analyses/most-exciting-image-replication/statement-of-work.md)** —
  fifteen learning checkpoints, not a fixed syllabus.
- `lessons/` and `lib/`, empty, with their conventions written down.

## The correction that shaped the plan

**plenoptic cannot train a twin, and is not meant to.** Its own requirements state a model must have
**no learnable parameters** — synthesis optimises the *input* with the model frozen. It occupies the
third corner of a triangle its own documentation draws:

```
simulate     fix θ, fix s  ->  compute r
fit          fix s, fix r  ->  estimate θ      the digital twin. sensorium.
synthesize   fix θ, fix r  ->  find s          MEI, metamer, eigendistortion, MAD. plenoptic.
```

What it *does* give us is better than what was planned: **its model zoo is already a published
ladder** (Berardino et al. 2017), each rung adding exactly one idea, all pretrained, all compatible
with every synthesis method. We climb theirs rather than inventing toys, and the gap from the top
rung to our twin is exactly two ideas — a learned deep core and a fitted per-neuron readout.

## What the reading found

Nine items, none of which anyone had listed. The full record is
[the TODO](../../../src/analyses/most-exciting-image-replication/docs/legacy/07-todo.md).

**Answered by opening files nobody had opened:**

- **The environment was never unknown.** `pip` records every VCS install's commit in
  `direct_url.json` — **six** of them here, including two the lockfile structurally cannot express
  and one nobody knew was installed. All resolve upstream, and the install timestamps predate the
  training timestamps by five to seven days with no reinstall between, so those are demonstrably
  the commits that trained the delivered twins.
  **Compounded into [The Build ch4, The lockfile](../the-build/04-the-lockfile.md#what-the-lockfile-cannot-express-and-where-the-pin-actually-lives)**,
  which also corrected a stale instruction in [ch7](../the-build/07-the-toolchain-index.md) telling
  the reader to add `mei` to `requirements.in` — the one thing that would break the environment.
- **The gamma verify-search was run, and it vindicates the inherited hyperparameters** — the
  published point is 0.2% off the grid best and ranks 2nd of 10, across a grid spanning 0.002 in
  validation correlation.
- **Open Q13 was resolved.** `cross_pattern_loss` is locked to Pearson correlation, and the archive's
  cross sets were generated with it.
- **The delivered headline, located:** `blur_equiv_sigma_median_px 0.55`, IQR [0.15, 0.70], 80% of
  cells blurrier post, **0.6% at the ceiling** — not censored. Three independent frequency-domain
  measures agree.

**Found, and open:**

- **[risk] `area.npy` / `layer.npy` are a hand-edit.** The scans are declared regenerable from the
  tracked zips. **They are not** — a fresh extraction will not train until this is redone, and
  nobody has scripted it.
- **[risk] Metamer synthesis appears unseeded.** `synthesis.mei()` pins `seed=0`;
  `metamer.metamer()` calls `RandomNormal()` with no seed anywhere. If so, the delivered metamers
  are one draw rather than a fixed object, which changes what a replication can claim.
- **[risk] The Franke seed-null was probably never measured.** `run.py`'s `--null-cells` defaults to
  0, and no `compare_report.json` or `mei_seeds_*.npy` exists on disk.
- **The arm-B ensemble handles are stale**, recording `n_seeds: 1` while five trained seeds exist —
  `ensemble()` rewrites the handle on every call.
- **Epochs-to-stop was never saved**, so "did any seed hit the 500 ceiling?" cannot be answered from
  disk, even though the source is emphatic that hitting it means non-convergence.

## The three lessons the codebase teaches, which the lessons should carry

Not ours — the previous sprints', found written into the source.

**A statistic computed from the thing it judges cannot fail.** Two metrics in `validation.py` were
retired for this. `cc_norm` produced impossible values and announced itself; the retinotopy gate
produced *plausible* values, selected the wrong readout for three sprints, and — being
scale-invariant — could not see that it had collapsed the elevation range fourfold. **The second
failure mode is the dangerous one.**

**A measure that saturates reports the ceiling, not the effect.** `blur_equivalent_sigma`'s first run
used a 3.0 grid; 42% of the `-bh` MEIs piled onto it, and the reported 2.65 px was censored. The
fraction at the ceiling is now computed *into the output*, not merely recommended.

**A demoted measure can be worth keeping, relabelled.** `energy_entropy` was the resolution headline,
was found blind to blur and wrong-signed — and was kept as a *spread* measure, because it is the only
one that saw the spatial contraction. The pair is diagnostic where neither is alone:
`entropy↑ + resolution↓ = blur`; `entropy↓ + resolution↓ = contraction`.

## Where things stand

**Done and committed.** All thirteen P1 per-file pages, nine chapters, the environment record, the
architecture, the design, and the statement of work.

**Not done, and not blocking:** tier-3 presentation code, the nine `studies/` files (none
documented, several possibly broken by a directory move — **first job there is to find out which
still import**), and the shared statistics library beyond `resolution.py`.

**Nothing has been built.** `lessons/` and `lib/` are empty by decision: Doug reads every file, so
code appears only when the lesson that needs it is being written.

## Next — the lesson sprints

The [statement of work](../../../src/analyses/most-exciting-image-replication/statement-of-work.md)
carries fifteen learning checkpoints in four parts. **They are checkpoints, not a syllabus**: the
notebook count is emergent, and not understanding something is a legitimate reason to write another
one.

```
A  what a model of a neuron is    S1 the data · S2 a filter · S3 the MEI · S4 the leash
                                  S5 the plenoptic ladder
B  what you can ask it            S6 metamer · S7 eigendistortion · S8 MAD
C  where parameters come from     S9 fitting · S10 one conv layer · S11 depth ·
                                  S12 the readout · S13 A TOY TWIN · S14 the noise ceiling
D  the real thing                 S15 the twin, ours vs theirs, pre vs post
```

**S13 is the keystone**: simulate a population whose receptive fields we choose, train the *actual*
`stacked_core_full_gauss_readout` with the *actual* `TRAIN_CONFIG` on it, and check three things
against a truth we wrote down — that the core's first-layer kernels become oriented filters, that the
readout's μ recovers the true positions, and that **the MEI of a simulated neuron resembles the
filter we gave it.** That third check is the whole project in miniature.

**Sequencing recommendation, still open for Doug:** S1–S4, then jump to S15 to load the real twin and
reproduce one delivered MEI, then return. It makes the middle read as scaffolding toward something
already seen, and front-loads the riskiest unknown — whether the twin behaves inside plenoptic at
36 × 64.
