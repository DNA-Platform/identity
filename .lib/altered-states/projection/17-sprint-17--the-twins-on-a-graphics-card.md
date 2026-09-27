# Sprint 17 — The twins on a graphics card

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md), [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **status:** `active` — 2026-09-26/27. Six GPU twins trained, harvested, their figures and validation
  in the pipeline's artifacts for both datasets. MEIs for every matched cell with FEVE >= 0 in both
  conditions, two recipes: 1,478 `walker` MEIs made and harvested; the batched synthesis proved equal to
  the single-cell one on the real twins, but it buys 2x, not the tenfold hoped - the next run's shape is
  Doug's to set.
---

The sprint moved the work onto the lab's GPU machine and, in doing so, retired the CPU world. How the
box is reached and driven is not recorded here: it is the [`/als-remote`](../../../.claude/library/our-skillset/34-als-remote.md)
skill, a catalogue of protocols each carrying its ruling, and [The Lab Box](../the-lab-box/.cover.md),
the record of the machine. This chapter is what the science pipelines became, and why.

## The rulings, verbatim

- **One world.** *"I actually think we need to just migrate to the assumption that there will be a GPU.
  We can't have multiple worlds here. That tag is not going to follow all the way to the figures we
  generate. So I think you should make room for the legacy twins in the pipeline, and then just have the
  new software use the GPU. This research requires it. So we are replacing."*
- **Two twins, or four.** *"For digital twins, we need to train them with the driven-driven matched cells
  - the ones with trials. When there is spontaneous, we need a pair of twins that have matched cells
  across the four recordings. These populations should all be computed in, cached and referenced from
  the matched pipelines, so that pipeline needs to run before the twin. So we actually need two twins
  generated for datasets without spontaneous and four generated for datasets with it."*
- **Resolution.** Asked 1x/128, 2x/64 or 2x/128: *"We want the largest option. Let's see what kind of
  speedup we get - and yes we have reason to believe we can work with larger images. So try."*
- **All the old twins are legacy.** Asked all or all-but-June: *"All of them."*
- **Pipelines, not orchestration.** *"Write things to run as a pipeline. Try your best to engineer it
  like that, so then we get the analysis figures."* And *"Restart. Start from scratch. It is affordable.
  Let's ensure this run works serially."*
- **Figures in the artifacts.** *"Make sure it creates the figures in the artifact that are part of the
  pipeline for both."*
- **MEIs.** *"We want to compute MEI for all cells in the pre- post- match on just the driven pair. The
  reason we create the two sets of twins is so that we can use the same networks in both of these
  cases."* On constraining contrast, first *keep it as it is*, then: *"WE can compute both ways."* On
  scale: *"We can filter by FEVE"*, the threshold chosen at **>= 0.0**, and *"Do the FEVE but also take
  the intersection of pre- versus post"* - which the worse-half rule already is. *"There must be a way to
  batch some of this."*

## What the pipelines became

**The twin pipeline is GPU-only.** `DEVICE = "cuda"`, no switch; training refuses without a card. The
CPU twins - the 1x pairs, the partial 33328 2x, the June imports - moved by `git mv` to
`digital_twin/artifacts/<animal>/legacy/` with their own manifest, loadable as `…@legacy` / `…@june`,
never trained; a checkpoint at a canonical path trained on another device is refused. Cell sets are
fixed by the design (`run.cell_sets`): the spine, and the four-way set where there are spontaneous
recordings, both read from the matched pipeline, which the `match` phase now runs first. `twin_names`
stays the spine pair every downstream reader expects; `every_twin` is all of them. 2x, batch 128.

**One command is the whole run.** `python -m pipelines.digital_twin 33977 33328` prepares every dataset,
trains every missing twin of all of them packed onto the GPU by measured memory
(`digital_twin/gpu.py`), then validates, compares, draws and records. `--serial` is the plain path.
Validation numbers and each twin's health figure now go to the pipeline's own
`artifacts/<animal>/validation/` and `figures/`.

**A data bug, found by the first GPU run.** Rebuilding 33977's 2x folders from the neuropil export left
the original export's extra images behind - 6,000 images for 5,965 trials - and the lab's loader refused
them. `prepare.build` now clears the images like every other piece, and "already built" requires one
image per trial, across either path separator.

**The MEI pipeline** computes every matched cell on the spine pair, by two recipes each with its own
cache: `walker` (June's) and `contrast-0.2` (the image's s.d. held at 0.2 each step - June's unused
`walker_postup_contrast` at a Tolias-lab member's value on our scans). Two adoptions from the decision
record, neither changing an image: the package's own `ConstrainedOutputModel`, and every MEI's
activation traced every tenth step. `--min-feve` is the one filter, on a pair's worse half. Everything
the pipeline makes is in its own artifacts; the caches computed from the legacy twins are in `legacy/`.

**Batching, because packing could not.** One MEI measured 20.6 s on the RTX 5080; packed, the card was
busy and gave 4.5-6 MEIs a minute, about 44 h for the whole set. `mei_batch` runs the ensemble's passes on
a batch of cells' images and nothing else: every walker op acts per image except
`DivideByMeanOfAbsolute`, whose `(batch,)`-shaped mean broadcasts over an image's last axis, so it runs
one image at a time, unmodified; every image starts from the single-cell seed-0 noise. On the CPU,
batched equals single to 1e-7 per pixel for both recipes.

## Measured

| | | source |
|---|---|---|
| twin epoch, 2x, batch 128 | 3.6 s alone, 6-7 s with two sharing | the first GPU run's epoch clock |
| six twins, serially | 1 h 47 min | `run-20260927-0008-twins-serial` meta |
| spine twins' validation FEVE median | 33977 0.183 pre / 0.275 post; 33328 0.404 / 0.398 | its validate phase |
| 33328 compare | FEVE 0.438 pre / 0.430 post on cells reliable in both, paired difference -0.031, raw gain ratio post/pre 0.542 | its compare phase; 33977's refused, `unregistered` |
| pairs with worse-half FEVE >= 0 | 33977 2,328 of 3,256; 33328 635 of 749 | the `feve-by-pair` probe |
| one MEI | 20.6 s, 424 MiB beside twin training; 12.6 s, 409 MiB on a free card | the `mei-timing` probe; `pipelines.mei.check` |
| batched MEI, per MEI | batch 8: 6.48 s (2.9 GB); 16: **6.05 s** (5.5 GB); 32: 7.11 s (11.0 GB); 64: out of the card's 16 GB | `run-20260927-0720-mei-batch-check` |
| batched against single, 4 cells of 33328 pre | `walker`: identical, 0 difference; `contrast-0.2`: at most 5.6e-4 per pixel (two cells differ by 1.67) - the order of `ChangeStd`'s reduction on a batch, compounded over 1,000 steps | the same run |

For reference, not as a standard: the June 33328 twins scored FEVE 0.480 / 0.512 on the delivered 1x
frames on the CPU. The 2x GPU pair is lower; it is a different resolution and a different device, and it
is recorded, not explained.

## The runs, by branch

| branch | what | result |
|---|---|---|
| `run-20260926-2347-gpu-twins` | first GPU twins | exit 1: the stale-images bug |
| `run-20260926-2350-gpu-twins` | twins, orchestrated in its command | exit 143: stopped for the from-scratch serial run |
| `run-20260927-0003-gpu-selftest` | the packer's self-test | exit 0 |
| `run-20260927-0008-twins-serial` | the six twins, `--serial`, from scratch | exit 0; harvested (rebased) as `70e8bfd` |
| `run-20260927-0220-twins-figures` | the twin pipeline again, figures into artifacts | exit 0; harvested |
| `run-20260927-0220-meis` | packed MEIs, both recipes, FEVE >= 0 | exit 143: stopped for batching; 1,478 `walker` MEIs, harvested |
| `run-20260927-0231-mei-batch-check` | the batched-MEI proof | exit 1: out of GPU memory beside the packed run |
| `run-20260927-0720-mei-batch-check` | the batched-MEI proof, on a free card | equivalence and batches 1-32 measured; exit 1 at batch 64, out of memory |

## What went wrong, and why

- **The packed MEI run filled the card**, by design, so a second run on it had no memory: the packer
  starts jobs while free memory exceeds its own job size. Two runs do not share one card.
- **A conductor outlived its stop.** `SIGTERM` ended the shards but not the MEI conductor, whose packing
  loop started new ones; `SIGKILL` on the whole tree stopped it. The stopped run's record had already
  been committed.
- **Ordering by FEVE puts ill-defined cells first.** The head of the order read FEVE 1.223; FEVE above 1
  means a cell with almost no explainable variance, which is why the lab's `get_fev` drops FEV < 0.15
  before reporting FEVE. The per-cell ordering does not. At >= 0.0 every such cell is computed anyway; it
  matters for which MEIs are read as meaningful.
- **The narrator, and the book left behind.** For most of the night the team reported to Doug instead of
  discussing, and the code moved while this library did not.

## Still open

1. **The MEI run's shape.** Batching is proved and buys 2x: at batch 16, 6 s per MEI, so 11,852 MEIs
   (both recipes, FEVE >= 0) is about 18 h after the 1,478 already made. Past batch 16 the card gives
   nothing more. The time is overhead, not arithmetic - about 97 ms a step at batch 16 for roughly 2 ms of
   floating point: the lab's `MEI.step` evaluates the model twice a step, and the walker ops rebuild their
   Fourier mask and blur kernel on the CPU every step. Going faster means touching the lab's code or its
   determinism, which is Doug's to rule.
2. Whether the MEI filter should also require the lab's reliability rule (FEV >= 0.15 in both
   conditions).
3. [The Altered Cortex](../the-altered-cortex/.cover.md)'s validator reports 20 errors, nearly all older
   than this sprint - moved `src/library/stats` links, stale study marks, June figures cited and gone - and
   one that tells a reader to relaunch a CPU generation watchdog, which must not be followed.
4. The legacy twins' validation outputs still sit at the old place, `src/pipelines/.analyses/digital-twin/twin/`.
5. 33977's pre/post comparison waits, as before, on Erin's word about 17-3's coordinates.
