# Sprint 19 — The sinusoidal twins

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `active`. The pipelines are rewritten and tested here (2026-10-20); the first box run waits on
  GitHub refusing the box's deploy key. See [Where things stand](#where-things-stand).

---

The pipelines were rebuilt around Doug's sinusoidal normalisation, of the neural activity and of the images, with
three twins a dataset where the recordings allow. The normalisation itself, its paper and its research document,
are in [`library/theory/`](../../theory/.cover.md); the recipes that tested it before it reached the pipelines are
[most-exciting-image-standardization](../../../src/analyses/most-exciting-image-standardization/.cover.md). This
chapter is the plan, the rulings, and the resume list.

## What to read first

- [`digital_twin`'s cover](../../../src/pipelines/digital_twin/.cover.md): the three twins, their cells, what
  every twin sees.
- [`data/normalisation.py`](../../../src/pipelines/digital_twin/data/normalisation.py) and
  [`data/loaders.py`](../../../src/pipelines/digital_twin/data/loaders.py): the one home of the normalisation and
  of the cell sets.
- [`matched`'s cover](../../../src/pipelines/matched/.cover.md#the-pre-and-spontaneous-table-for-the-moments-twin):
  the pre-and-spontaneous table.
- [The Pipelines, ch 2](../../../src/.lib/the-pipelines/02-what-each-pipeline-does.md): the map, updated.

## The rulings, verbatim

- **Why the images too** (2026-10-20). *"I figured out why we want to sinusoidally norm the images with the neural
  outputs. We need 0 to mean something for the twins when they process spontaneous activity. That guarantees it.
  It detaches things a bit from natural scenes, but let's try it for now. Train with sinusoidal normalization on
  images too."*
- **The twins.** *"Have the pipeline make these twins: Pre - matched cells pre-post; Post - matched cells pre-post;
  Pre - matched pre-spontaneous-spontaneous, no post. We use the first two for metamers. We do metamers and
  metameric moments from the third."* And: *"pre-post matched for MEI, both for stimulus metamers, all four matched
  for metamers again (check) and metameric moments. And we have to adjust the metameric moment calc. We left off
  post in the MM moment calculation because we want as much overlap as possible."*
- **FEV and the normalisation, always.** *"Pre images, both spontaneous, FEV yes of course. Always use FEV and
  sinusoidal normalization on both neural activity and images - oh! You need to normalize ALL images at the same
  time. They mean something together, the neural activity is specific to a cell."*
- **A map per neuron per recording** (2026-10-19). *"The normalization is supposed to handle drift. The sinusoidal
  normalization is meant to handle min and max with outlier management, so it would be a map per neuron per
  recording."*
- **Unambiguous settings, every dataset.** *"For all datasets, two have spontaneous and one doesn't. So do as many
  twins as you can given the recordings. Obviously the third doesn't work when recordings absent. Write pipeline
  code so that it is unambiguous what we consider to be the correct settings. Sine norm and FEV cutoff used for all
  twins and for both caiman and suite2p."*
- **Replace, and keep the old at a tag** (his choice, 2026-10-20).
- **One image map over the whole stimulus set** (his choice, 2026-10-20) - **dropped 2026-10-23**: *"Okay drop the
  normalization on the twins."* And how to judge MEIs: *"I don't like that you are using numbers and not looking at
  the MEI. You have proven blind to this artifact yet you insist on quantifying."* *"Well check that the MEIs are
  right. Do it before changing everything."*
- **Read before asking.** *"If you don't know this, you need to read all the pipelines and learn about how the data
  is made, and read in library branches about this science project. There is a matched pipeline that chooses cells
  matched across."*
- **The drift check.** *"We need to make absolutely sure that when we feed the normalized spontaneous neural
  activity into the twin - which should be from its own recording session, that it's not drifting or doing strange
  thing, so that we really believe that the normed activity is related to the lowest contrast."*
- **The screen.** *"We may have a problem because I think the monitor was off instead of blank. Is there any way to
  tell? In this case, the neurons might be responding to something not as bright and we need to model that."* His
  choice: check the lab database first. And now: *"Thinking about whether the 0 of the images represent an all zero
  stimulus in the spontaneous case (find any info you can about the structure of these experiments)."*
- **The consequences of the normalisation.** *"Also I need you to build an analysis to comprehend the consequences of
  the normalization. We give a little up to be well behaved in the tails for extreme value comprehension. We decide
  that normalization is per recording. Can we know that the normalization appears stable across the recording or do
  we see artifacts. What else can we say?"*

## The twins

| twin | cells | for |
|---|---|---|
| `<dataset>-pre/B/pre-post`, `<dataset>-pst/B/pre-post` | the spine, FEV >= 0.15 in both image recordings | the MEIs, the stimulus metamers, the pre twin reading the post responses |
| `<dataset>-pre/B/pre-and-spontaneous`, where there are spontaneous recordings | pre cells linked into the pre spontaneous recording and on into the post one, FEV >= 0.15 in the pre recording | the metamers again (the check), the metameric moments |

Fourteen twins: the pair for 33328-caiman, 33977-caiman, 33977-suite2p, 34452-caiman and 34452-suite2p, and the
moments' twin for the four with spontaneous recordings. Before FEV, the cells matched:

| | spine | pre-and-spontaneous | four-way (no longer a twin) |
|---|---|---|---|
| 33328-caiman | 749 | - | - |
| 33977-caiman | 980 | 489 | 393 |
| 33977-suite2p | 3,256 | 1,619 | 1,177 |
| 34452-caiman | 1,118 | 384 | 218 |
| 34452-suite2p | 2,747 | 1,080 | 666 |

The `ceiling` phase prints how many clear FEV 0.15: the number each twin trains on.

## What was built (2026-10-20)

- **The tag `four-way-twins`**, pushed: the pipelines as they were, one pair a dataset on the cells of every
  recording, the lab's normalisation, the CPU and June twins.
- **`digital_twin/data/normalisation.py`**: Doug's algorithm and nothing else - distinct values sorted, a sine
  wave's values at evenly spaced phases, every sample its value's level. Responses each neuron's own map per
  recording on [0, 1]; the images, since 2026-10-23, the lab's as delivered (the image map is below). The lab's
  loader serves the recording and the response table on Doug's map replaces its responses, checked against what the
  lab serves on three trials before anything trains.
- **`loaders`**: the two twin cell sets, each cut at the recording's FEV; `recorded`, the lab's own loader, for the
  noise ceiling and the FEV and nothing else. Arm A is refused.
- **FEV has one home**, beside the noise ceiling (`noise_ceiling.explainable_variance`), moved out of the
  explained-variance figure, which now reads it. The MEI ranking's reliability rule reads the same number, so it
  keeps every cell of the pair instead of re-cutting on the FEV of the normalised responses.
- **`matched`** writes `pre-and-spontaneous.csv`; every spine and every other table unchanged.
- **The conductor and the library** make the twins by one rule (`run.twin_names`); the library holds no hand-written
  entry and no legacy or imported twin. Every checkpoint records the normalisation and the FEV threshold, and one
  trained under anything else is refused.
- **MEIs and metamers** clip to the scan's black and white (to [-1, 1] while the image map stood). The metamers gain the check (`generate.CHECK`); the moments read the
  moments' twin, their targets each linked cell's half-second bins on its own map over its whole spontaneous
  recording (`spontaneous.moment_matrix`). `binned_matrix`, in the lab's units on the spine, stays for the analyses
  that read it.
- **Tests**: 54 pass, none fail; new ones pin the twins, the one threshold and normalisation, the sort, and the
  pre-and-spontaneous table.
- **The drift check** (`metamer/drift.py`, the metamer pipeline's `drift` phase, before the moments): the level by
  minute and the population's similarity by minutes apart, against the same recording shuffled in time.

## What was learned

- **The image map is a fixed cosine of luminance.** imagenet_v2_gray's 5,100 frames at 36x64 hold every 1/16 step
  from 0 to 255 - 4,081 distinct values, none missing - so one map over the whole set is exactly -cos(pi v / 255).
  A uniform screen at 127.5 of 255 is 0; grey at 127 or 128 is -0.006 or +0.006; black is -1. **The twin's 0 is a
  mid-grey screen. If the monitor was off, the screen the animal saw corresponds to -1, not 0.**
- **What the lab records about the spontaneous scans** (`runs/lab/20261020-215004-screen-during-spontaneous.*`):
  no notes on any scan or session; no `stimulus.Sync` and no trial on any of the four spontaneous scans, so no
  stimulus program ran during them; the image scans' blank between images is recorded as `pre_blank_period`, "(s)
  off duration", about 0.41 s. Nothing in the database says what the screen showed with no program running.
- **The pupil does not settle it** (`runs/lab/20261020-215232-pupil-during-spontaneous.*`), median radius, image scan
  against spontaneous scan of the same session:

  | | before DOI | after DOI |
  |---|---|---|
  | 33977 | 34.3 -> 53.1 px | 20.6 -> 33.2 px |
  | 34452 | 46.0 -> 30.5 px | 31.2 -> 39.1 px |

  33977's spontaneous pupils are larger in both sessions, as a darker screen would make them, but the pre-DOI fit
  holds on 2,766 of 24,672 frames and Erin has called 33977's pupil unreliable; 34452 goes both ways. Erin, who ran
  the rig, is the one who knows.
- **The normalised spontaneous activity drifts within every recording** (the drift check, Doug's choice of form, the
  minutes curve: `metamer/drift.py`, the `drift` phase, `figures/spontaneous-drift.png`). On exactly what the moments
  invert - the moments' twin's cells (FEV-cut: 251, 622, 269, 573), each on its own map per recording:

  | | cells | one minute apart | lowest | at the far end | bins shuffled in time | median level by minute |
  |---|---|---|---|---|---|---|
  | 33977-caiman, before / after | 251 | +0.53 / +0.57 | -0.46 / -0.47 | +0.21 / -0.47 | -0.14..+0.01 / -0.26..+0.02 | 0.41-0.56 / 0.48-0.57 |
  | 33977-suite2p, before / after | 622 | +0.54 / +0.59 | -0.32 / -0.42 | +0.25 / -0.42 | +0.16..+0.20 / +0.16..+0.25 | 0.44-0.53 / 0.46-0.52 |
  | 34452-caiman, before / after | 269 | +0.57 / +0.43 | -0.66 / -0.54 | -0.59 / -0.37 | -0.17..+0.04 / -0.11..+0.04 | 0.45-0.57 / 0.47-0.55 |
  | 34452-suite2p, before / after | 573 | +0.51 / +0.36 | -0.59 / -0.45 | -0.58 / -0.37 | -0.07..-0.02 / -0.07..+0.04 | 0.43-0.53 / 0.48-0.52 |

  Which cells are relatively active changes over minutes: the population's pattern correlation turns negative
  between three and six minutes apart and is negative at twelve (-0.16 to -0.64), in all eight recordings, both
  mice, both processings. The
  time-shuffled control is flat, so the fall is the activity's order, not the map's constraint. The raw activity
  falls too (CaImAn from about 0.66-0.79 to 0.19-0.38, Suite2P from 0.96-0.98 to 0.84-0.96, highest because raw
  minute vectors are dominated by each cell's overall rate). Two recordings do something stranger: both of 33977's
  before DOI come back (correlation +0.21 and +0.25 at 19 minutes apart, a rise near 9), and Suite2P's median level
  drops sharply at minute 10-11. A per-recording map cannot remove drift within a recording, so a moment from the
  start and one from the end of a recording read the twin with different population patterns.

## The image map, and why it was dropped (2026-10-21 to 23)

The first full run (run-20261021-1607, all five datasets through MEIs, metamers, drift and moments) trained the twins on
images through one sine map over the stimulus set, [-1, 1]. Doug looked at the MEIs and saw the Suite2P blob the
standardization had fixed; I had called them clean without opening the paper's figure, and the comparison page was
ranked by FEVE on the twin's own scale (2.30 at the top - ill-defined cells first).

**By eye, the same neurons beside the paper** (33977 and 34452, the ten highest-FEV neurons): each new MEI kept its
paper MEI's layout, but thin edges thickened into bars and spots swelled into blobs, Suite2P most, one inverting. Every
aggregate I had reported matched the paper (the same neuron across processings 0.82) - which is why the rule now is to
look first ([memory: judge MEIs by eye against the reference]).

**The test** (run-20261023-1632, most-exciting-image-standardization, 33977, the paper's recipe with only the images
changed): the control - delivered images, today's code - is the paper's MEI row for row (Suite2P every row, CaImAn nine
of ten); the map on [-1, 1] is heavier, CaImAn gains a blocky texture and one MEI inverts; the map on [0, 1] (Doug's
question) is broken - flat plateaus at the bounds, black slabs, square patches. The paper's measures agree: the same
neuron across processings 0.83 (control), 0.78, 0.70. Prediction hardly moved (0.36-0.38), so the twins fit as well;
what the map spoils is the MEIs. A fourth arm, the map rescaled to mean 0 and std 1, ran to the end as well.

**Fixed** (241c753d8): the twins see the lab's delivered images, standardised per scan; the activity keeps Doug's map;
FEV 0.15 and the cells unchanged. Relaunched as run-20261023-1757-sinusoidal-twins-delivered-images, every twin retrained
(the image-map seeds cleared from the run's folder).

## Where things stand

**GitHub: the DNA-Platform organisation is flagged** ("hidden from the public"; Doug's dashboard banner, 2026-10-21),
after a brief flag on `support-dna`. Members signed in as themselves still reach it - this machine, as `support-dna`,
pulls and pushes - but a deploy key is not a member, so the box gets "Repository not found" for every key, old and new.
Doug has a ticket open and the security steps in hand. **Until it is lifted, runs travel over SSH**: main goes to the
box as a git bundle (sha256-checked), the run commits on the box, its branch comes home the same way and is pushed from
here. Every run of this sprint since 2026-10-21 went that way.

**Running**: run-20261023-1757-sinusoidal-twins-delivered-images, the pipeline's own entry point:

```
python -m pipelines.digital_twin 33328-caiman 33977-caiman 33977-suite2p 34452-caiman 34452-suite2p --then mei,metamer
```

Then: the MEIs beside the paper's for the same neurons, by eye, before any number; every twin's FEVE and explained
variance; the metamers, drift and moments; close the run (bundle home, push, the box's main in step, the store adopted).

**Open, in order:**

1. **The drift the check found** - what to do about it is Doug's: the moments as they are, or something about the
   drift first. The check itself is built and runs in every metamer run.
2. **The screen** - a question for Erin, consolidated, from Doug.
3. **The consequences of the normalisation** - the analysis Doug asked for; not started.
4. **What still reads the old twins**: `metamer/moment_contrast.py` (a diagnostic, outside the run),
   `mei/check.py`'s June comparisons, `analyses/spontaneous/analysis/invert.py`, `analyses/ensemble-recurrence`
   (`run.cell_set`, gone), and the standardization analysis, which applies its own normalisation on top of the
   pipeline's loaders. Each runs at the tag; none is in the pipeline run.

**Wrong turns, so nobody retries them:**

- the image map on the twins: MEIs heavier than the paper's; and judging MEIs by aggregate numbers, which matched the
  paper while the images did not - look at the same neurons beside the reference first;
- ranking an MEI page by FEVE on the twin's sinusoidal scale - it opens on ill-defined cells (FEVE above 1);
- a dataset wrapper without the lab's `__iter__` - the lab's scoring walks past the last trial;
- a launch script rewritten from Python on Windows - CRLF line endings, which bash refuses;

- asking Doug which link reaches the post spontaneous recording, when `matched`'s links answer it;
- testing the box's GitHub access with `GIT_SSH_COMMAND`, which bypasses the deploy key the clone uses;
- the lab image's `pipeline.pupil`, which needs a `git` module the image lacks - read `pipeline_eye` as a virtual
  module;
- a bash heredoc carrying a Python edit with quotes in it: write the script to a file.
