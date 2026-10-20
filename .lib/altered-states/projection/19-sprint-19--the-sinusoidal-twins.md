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
- **One image map over the whole stimulus set** (his choice, 2026-10-20).
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
  recording on [0, 1]; images one map over the whole stimulus set on [-1, 1]. The lab's loader is asked for the
  recording as recorded (`normalize=False`) and the maps replace its normaliser; the response table is checked
  against the dataset on three trials before anything trains.
- **`loaders`**: the two twin cell sets, each cut at the recording's FEV; `recorded`, the lab's own loader, for the
  noise ceiling and the FEV and nothing else. Arm A is refused.
- **FEV has one home**, beside the noise ceiling (`noise_ceiling.explainable_variance`), moved out of the
  explained-variance figure, which now reads it. The MEI ranking's reliability rule reads the same number, so it
  keeps every cell of the pair instead of re-cutting on the FEV of the normalised responses.
- **`matched`** writes `pre-and-spontaneous.csv`; every spine and every other table unchanged.
- **The conductor and the library** make the twins by one rule (`run.twin_names`); the library holds no hand-written
  entry and no legacy or imported twin. Every checkpoint records the normalisation and the FEV threshold, and one
  trained under anything else is refused.
- **MEIs and metamers** clip to [-1, 1]. The metamers gain the check (`generate.CHECK`); the moments read the
  moments' twin, their targets each linked cell's half-second bins on its own map over its whole spontaneous
  recording (`spontaneous.moment_matrix`). `binned_matrix`, in the lab's units on the spine, stays for the analyses
  that read it.
- **Tests**: 54 pass, none fail; new ones pin the twins, the one threshold and normalisation, the sort, and the
  pre-and-spontaneous table.

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

## Where things stand

**Blocked: GitHub refuses the box's deploy key.** The key (`lipshutzlab-01`, SHA256:sQ9c6hB77Gna5NTr779M89K7onwv4thoELOpMhaKDGw)
authenticates - GitHub greets it as DNA-Platform/altered-states - and then answers "Repository not found" to every
fetch; the box last pulled on 2026-10-19. Push from this machine works over SSH; `gh`'s token is invalid. The box's
side cannot fix it: the key's entry on the repository, or the organisation's deploy-key policy, has to be restored
on GitHub.

**When the box can pull**, one run, the pipeline's own entry point:

```
python -m pipelines.digital_twin 33328-caiman 33977-caiman 33977-suite2p 34452-caiman 34452-suite2p --then mei,metamer
```

Then: check every twin (FEVE, the health panels, explained variance), the MEIs and metamers, the inventory; close
the run; delete the products the old twins left that the new run did not overwrite (the `four-way` and `matched`
handles, validations, MEI and metamer caches - all at the tag).

**Open, in order:**

1. **The drift check** - its design is Doug's to choose.
2. **The screen** - a question for Erin, consolidated, from Doug.
3. **The consequences of the normalisation** - the analysis Doug asked for; not started.
4. **What still reads the old twins**: `metamer/moment_contrast.py` (a diagnostic, outside the run),
   `mei/check.py`'s June comparisons, `analyses/spontaneous/analysis/invert.py`, `analyses/ensemble-recurrence`
   (`run.cell_set`, gone), and the standardization analysis, which applies its own normalisation on top of the
   pipeline's loaders. Each runs at the tag; none is in the pipeline run.

**Wrong turns, so nobody retries them:**

- asking Doug which link reaches the post spontaneous recording, when `matched`'s links answer it;
- testing the box's GitHub access with `GIT_SSH_COMMAND`, which bypasses the deploy key the clone uses;
- the lab image's `pipeline.pupil`, which needs a `git` module the image lacks - read `pipeline_eye` as a virtual
  module;
- a bash heredoc carrying a Python edit with quotes in it: write the script to a file.
