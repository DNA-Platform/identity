# Sprint 17 — The twins on a graphics card

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md), [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **status:** `active` - 2026-09-26/28. The twins went onto the card, and the chain from matched cells to
  MEIs and metamers was enforced; both datasets ran through it at 2x (72x128). On 2026-09-28 the
  pipelines were set back to one frame, the delivered 36x64, and nothing else. The 2x twins and all
  they made are archived in `src/pipelines/.archive/2x-twins/` (tag `archive/2x-twins`). The 1x chain is
  running on the box for both datasets, to be held to June's twins and MEIs. Every 33977 recording was
  found registered, so its matching is valid. The metamer surface is built on the intersection twins,
  batched. The pipelines are written down as a book, [The Pipelines](../the-pipelines/.cover.md).
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
- **Fast, and then all of them.** *"change the lab code. We need this fast. WE need to use what is in
  sensorium and we need to find examples in github repos of the right packages to see the right way to
  make this but fast… THe lab code is our best attempt but I am sure we can find a fast way. Now is the
  time to find it."* Then: *"If it's fast we want to do all 749 adn 3K pre- and post- in the two
  datasets respectively"* - the FEVE filter lifted. *"I thought we could get a 50x increase in speed…
  That's sub-second MEI I think."* *"Yes do these changes and please make them efficient."* *"If there
  is a near identical way to train or compute that fits the box or setup better, or a better setup,
  please make changes for the sake of perforamnce."*
- **Checked against what came before.** *"Make sure to be able to check in on them to confirm that they
  look like the ones we computed before."*
- **The MEIs failed, and the twin was the culprit.** *"MEI didn't work. There are little squares. That is
  not even almost the published result or anything we've ever seen. Did you not look? Do you not know
  what they should look like? Educate yourself on MEI."* - *"We need to be using preexisting code
  exactly. No room for innovation at all except to adapt to the new resolution, and maybe cell count if
  it's not usual. Obviously pre and post twins need to be identical. This is one of our first usages of
  the twins. They too might be faulty."* - *"This is not Nancy/Claude's time-to-shine-innovating-on-a-
  published-technique-thus-making-it-harder-to-publish-this-result Day."* - *"If there is a
  reimplementation from the lab, that is okay. It can be the evolution of published code... not
  handrolled."* - *"Fix the twin! They are obviously wrong, thus negating the idea that we are ready to
  run MEI. The MEI are, in some sense, a test of the twin and it failed. The twins should produce higher
  resolutions of the same thing. Anything else and we have failed to adapt the system to 2x."* - on
  sameness: *"That is subjective not bytecode identical. But it should be approximately true, otherwise
  we can't have said to have simply scaled something up."* - *"Now you know that you can use MEI
  artifacts as a way of validating the twins. That is a good result."*
- **The tree Doug walks.** *"figures is a place where I ask for work, not a dumping ground for your
  mess."* The rule is [The Pipelines ch5](../the-pipelines/05-the-tree-doug-walks.md).
- **One frame.** On 2026-09-28, after both datasets had run at 2x: *"Blegh this is a big exploration.
  Find some way of archiving the code to create the 2x twins and lets move back to 1x twins, where you
  refer to the code we have been using in spontaneous and most-exciting-image."* When offered a
  resolution setting: *"We don't want pipelines to have settings. That is just going to create
  confusing."* On the bar: *"double and triple check that we have a publication quality twin in place
  that is making near identical MEI to the ones generated in most-exciting-image."*
- **Two twins for each.** Replacing *two twins, or four* (above), 2026-09-28: *"I think, perhaps, we
  should just have two twins for each and the rule is that from matched, we take the intersection of
  all recordings, so for 33328 its the two driven ones and the 33977 it's the four with two
  spontaneous ones. That's a simplifying assumption."*

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

**Then the lab's step, changed.** Doug: *"change the lab code. We need this fast. WE need to use what
is in sensorium and we need to find examples in github repos… THe lab code is our best attempt but I am
sure we can find a fast way. Now is the time to find it."* The lab's own large runs were read first:
the MICrONS MEIs (`cajal/microns-vei-2025`) and `sinzlab/laminr` make one neuron per job, and MICrONS
steps with `featurevis.gradient_ascent`, one forward a step. Our package's `mei.optimization.MEI.step`
evaluates the model twice and multiplies the second by zero when the MEI is excitatory; `lean_step` is
that step with the dead evaluation and an unread CPU copy removed - the same images, exactly, at half
the time. The torch profiler then put 61% of the card's time in `convolution_backward`:
`gradient_ascent` leaves the twin's weights trainable, so every step computes every seed's weight
gradients and discards them. `frozen` holds them out of autograd. The image's gradient is the same
function; on the card a different cuDNN kernel runs. The profiler then showed one input-gradient
convolution at about 2 TFLOPS and PyTorch's own depthwise kernels at 41%: `tuned_kernels` lets cuDNN
time its kernels and runs the twin in `channels_last`, which sends the depthwise layers to cuDNN.
Measured on full 1,000-step MEIs of 16 cells of 33977's pre twin, against the lab's own step at that
batch (6.32 s an MEI): lean and frozen 2.04 s, at most 5.4e-4 a pixel away; tuned 1.43 s, at most
1.8e-3, r 1.000000 in every cell - where two cells' MEIs differ by 1.7-2.3. The figure
(`mei/artifacts/33977/figures/speed_check.png`) shows the same cells made each way, indistinguishable.
bfloat16 was measured under Doug's "yes" and refused under his "near identical": 1.23 s, but pixels
moved by up to 0.178. Batch 16 stays fastest (8: 1.50 ms an MEI-step, 32: 2.00) - a batch-16 layer is
~38 MB and the card's L2 64 MB. On the tuned path the element-wise passes were 44% of the card:
`torch.compile` fuses them - 1.11 s. And the readout computed every neuron of the twin for every image
while the objective kept the diagonal: `FullGaussian2d`'s own `out_idx` restricts it to the batch's
cells - 0.99 s, and not one pixel moved by it. A compiled twin called at a second batch size switched
to a dynamic-shape graph three times slower (`fill_` half the card, in the profiler's own run); so
compiles are static and a short batch is padded to sixteen. Every MEI's `.json` names how it was made, and a cell counts as done
only when both its halves were made the same way (`_made_alike`); batches are cut from the cells still
to make, so every batch is full.

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
| batched against single, 4 cells of 33328 pre | `walker`: identical, 0 difference (two cells differ by 2.30); `contrast-0.2`: at most 5.6e-4 per pixel (two cells differ by 1.67) - the order of `ChangeStd`'s reduction on a batch, compounded over 1,000 steps | the same run |
| a step at batch 16, per MEI-step, 100-step MEIs | the lab's step 6.2 ms; one evaluation 3.1 ms (0 difference); and frozen weights 1.9 ms (1.94e-4) | `run-20260927-0747-mei-profile-frozen` |
| the same, full 1,000-step MEIs, against the lab's step | the lab's step 6.32 s an MEI; lean + frozen 2.04 s (5.4e-4); + tuned kernels **1.43 s** (1.8e-3, r 1.000000); + bfloat16 1.23 s (0.178, r 0.9994) - refused | `run-20260927-0803-mei-speed` |
| tuned, by batch, per MEI-step | 8: 1.50 ms (1.6 GB); 16: 1.43; 32: 2.00 (5.7 GB) | the same run |
| full MEIs, warm-up excluded, against the lab's step | the lab's step 6.31 s; tuned 1.32 s; compiled 1.11 s (1.8e-3, r 1.000000); + own readout **0.99 s** (1.8e-3, unchanged) | `run-20260927-0810-mei-compile`, `-0815-mei-readout` |
| where the card's time went | the lab's step: `convolution_backward` 61%. Frozen: the card saturated, 629 ms of kernels in 20 steps; an input-gradient convolution 28%, native depthwise 41%. Tuned: convolutions under half, element-wise passes (batch norm, ELU, adds) 44%, the readout's `grid_sampler` backward 8% | `run-20260927-0745-mei-profile`, `-0747-`, `-0803-mei-speed` |

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
| `run-20260927-0745-mei-profile` | the lab's step against one evaluation, and the profiler | exit 0; harvested |
| `run-20260927-0747-mei-profile-frozen` | the same, with frozen weights and a batch sweep | exit 0; harvested |
| `run-20260927-0754-meis-fast` | every remaining MEI, both recipes, FEVE >= 0, on the fast path | exit 143: stopped - it was pairing lab-step halves with fast-path halves; harvested |
| `run-20260927-0757-meis-all` | every matched cell, both recipes, no filter | exit 143: stopped for the next speedup after 114 MEIs; harvested |
| `run-20260927-0803-mei-speed` | tuned kernels and bfloat16 against the lab's step, 1,000 steps | exit 0; harvested |
| `run-20260927-0810-mei-compile` | `torch.compile` against the lab's step | exit 0; harvested |
| `run-20260927-0815-mei-readout` | the readout of the batch's own cells | 0.99 s an MEI |
| `run-20260927-1435-twins-published-smoothing` | 33328's 2x pair at the published smoothing, and the benchmark | exit 0; the pair Doug chose |
| `run-20260927-1550-mei-blur-between` | the chosen twin at three MEI blurs | exit 0; the in-between blur chosen |
| `run-20260927-1555-twins-33977` | 33977's four twins, frame-scaled | exit 0; intersection FEVE 0.16 / 0.30 |
| `run-20260927-1737-chain-mei` | matched -> twins -> MEIs, 33328 then 33977 | stopped after 33328, by plan |
| `run-20260927-1746-metamer-check` | the batched metamer against the single one | exit 1: a stimulus left on the card |
| `run-20260927-1946-metamers-33328` | the metamer check, then 33328's metamers | exit 0; the batched path equal to 1.9e-3, r 1.000000 |
| `run-20260927-2121-metamers-33328-singulars` | the unconditioned remade on the current twins | exit 0 |
| `run-20260927-2239-pipelines-33977` | matched rebuilt -> twins re-recorded -> MEIs -> metamers | exit 0; the comparison no longer refused |
| `run-20260928-0033-metamers-cross` | the pre twin reading the post responses, both datasets | exit 0 |
| `run-20260928-1350-twins-1x` | the 1x chain, both datasets, six twins | exit 143: stopped once the twins were built, for the one-pair rule; harvested, 33977's spine pair removed |
| `run-20260928-1438-chain-1x` | the 1x chain on the one pair each: twins recorded, MEIs, metamers | exit 0 in 7.5 minutes; both builds recorded, 317 + 329 MEI pairs, 100 metamers per stimulus set per reading; the first run closed by `close` |
| `run-20260928-1456-mei-published` | Walker 2019's code against the pipeline's MEI, 33328's pre twin | exit 0; r 0.986-0.991 on the 8 best-fit cells; closed |

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
- **A cause asserted before it was measured.** This chapter first said a step was "overhead, not
  arithmetic - about 97 ms a step at batch 16 for roughly 2 ms of floating point", and blamed the
  walker ops rebuilding their masks on the CPU. The profiler said otherwise: the card was busy with
  real work, the weight gradients no one reads. The estimate was of the forward pass alone - and it is
  where Doug's "50x" came from: our number, never a measurement. His "sub-second MEI" was reached by
measurement - 0.99 s - at 12.7x, not 50x.
- **A difference measured on a shorter MEI than the pipeline makes.** The frozen path's 1.94e-4 was
  from 100-step MEIs and was quoted as the pipeline's; at 1,000 steps it is 5.4e-4. Every variant is
  now measured on the whole recipe.
- **Halves made two ways.** The first fast-path run resumed cells the packed run had stopped between
  their twins, and made the missing half on the new path. Queenie caught it from the counts (743 pre,
  735 post); `_made_alike` is the rule that followed.
- **Every 2x MEI was a square, and we explained it instead of convicting it.** Published MEIs (Walker
  2019 Fig. 3, Lurz 2021 Fig. 6) are small compact features fading to grey; ours filled a hard-edged
  square the size of the core's reach. Nancy looked at the squares three times and each time gave them an
  architectural story. Doug saw them once. What found the cause: each cell's sensitivity at the grey
  image - one gradient, no MEI calculation - was already a square with bright edges on the 2x twin, and
  a smooth falling blob on our 1x twin; on the 1x twin both MEI codes, the lab's re-implementation and
  Walker's own, gave the summer's soft features, and on the 2x twin both gave squares, whatever the
  blur. **The twins were trained at 2x with the published 36 x 64 config**: kernels 9 and 7 in pixels,
  a 27-pixel reach that covered half the visual angle, receptive fields spilling past it. The fix scales
  the three pixel-unit numbers (`model_config_for`): kernels 17 and 13, the Laplace smoothness penalty
  x 16. The unscaled twins and every MEI made from them were removed.
- **The MEI recipe was never the published code.** The summer's and ours came from `featurevis`'s
  `walker` re-implementation (`nnvision.mei.regularizers`), whose `FourierSmoothing(0.04)` - commented
  "close" to Walker's `fft_smooth(0.1)` - passes 0.95-0.99 of the gradient where Walker's passes
  0.5-0.76, and whose noise start is eight times Walker's. Walker's own code is `deepdraw`/`make_step` in
  cajal/inception_loop2019 (and microns-vei-2025); it is ported verbatim, every change declared, in
  `mei/inception_loop.py`. Doug allows the lab's re-implementation too; which is the pipeline's one way
  is his to rule.
- **The fast path was ours, hand-rolled.** Batching, a patched step, frozen weights, tuned kernels, a
  compiled twin and a narrowed readout - each measured equal to within 1.8e-3, and each ours, which is
  what Doug rules out. It is off the path to published MEIs.
- **Figures and bytecode on Doug's path**, and names he could not scan: fixed, and written down as the
  rule of [The Pipelines ch5](../the-pipelines/05-the-tree-doug-walks.md).

## The twins settled, the chain, and the metamer surface (2026-09-27, afternoon)

**The resolution rule, in one sentence.** What sets an extent scales with the frame; what limits
frequency stays as published. The twin's kernels scaled (9 -> 17, 7 -> 13); its smoothing weight, first
scaled by 16 on a continuum argument that measurement refuted (the equivalent on the trained 1x filters
was 2.2-3.5), went back to the published value. Doug: *"We didn't scale it because we increased the
resolution to give the system the ability to detect finer frequencies. It doesn't seem to, but keeping
that low made it possible."* Fit is flat across x1, x4 and x16 (validation correlation 0.311, 0.309,
0.311), and the MEIs through either twin are the same pattern, cell for cell: *"we are getting nearly
identical answers, which is good."*

**A fixed benchmark.** *"The pre- 1x should be a constant. Otherwise you don't understand validation."*
The 1x twin's MEIs of the eight cells Doug first accepted, saved once (`validation/config-search/
benchmark-1x.npz`), every 2x candidate drawn against it.

**The MEI blur, between.** *"Actually, I like less mei blur too. I want something in between."* 2.25 ->
0.015 px at 2x, halfway between as published and scaled to the frame; `verification/twins-compared.png`
draws all three on one twin.

**The chain, enforced.** *"We don't compute twins for the MEI alone. It is part of the pipeline of
connected results."* Every MEI, metamer, fit score and cell index records the identity of the twin that
made it and is remade when it changes; the MEI index refuses twins not built from the matched table;
`--then` starts a dependant only on a finished build. The filter figure - June's spectrum and filter,
cycles per frame width - is drawn by the MEI pipeline, June's reaching half amplitude at 24.5.

**Units, and two wrong answers.** Every session's activity is normalized by its own session's scale,
the lab's way, and the model is invariant to it - *"I thought we assumed values were zscore normalized
across the session."* I twice proposed otherwise (the pre twin's divisor; raw activity at fixed gain),
reading a per-cell difference between sessions as a distortion when it may be the drug. Withdrawn; the
per-cell scale is now the lab's `NeuroNormalizer` object rather than our division.

**Matching: every 33977 recording is registered.** 17-3 was labelled motor because Erin's file for it
is header-only; its export's coordinates are the registered ones (the same delivery's 12-1 export is her
file cell for cell), and the pairs saturate past 10 um as 33328's do - 3,256, 3,350, 3,382 at 10, 15, 20.
*"If you believe cells can't be found across then matched is not working as a pipeline and something is
seriously wrong."* The tables are unchanged; only the label and the comparison it refused.

**The metamer surface.** *"We want all the regular metamers, which is one per stimulus. We want one
unconditional metamer across all trials - we always use the twin that is the intersection of all four
datasets. We want the spontaneous metameric moments on pre- and we want spontaneous metameric moments
from post spontaneous, but on pre-... we need it to be performant."* The union retired; every metamer
from the intersection twins; the moments moved from `analyses/spontaneous` into the pipeline; all of it
batched through one compiled twin, held against the single-image recipe by `metamer/check.py`.

## Both datasets through the chain (2026-09-27, night)

**33328**, signed off by Doug as the organization for both: 317 MEI pairs reliable in both conditions;
the MEI filter replicates June's roll-off to about 22 cycles per frame width and bottoms at 0.59 near 27
where June's crossed half amplitude at 24 - one octave, 16-32, holding 4.5% of each MEI's variance before
and 1.7% after. The metamers - 100 per twin, re-evoke 0.86 and 0.83 - show no such low-pass (lowest
0.85 at 37, the same with the seed's finest band removed). Figures: the MEI comparison and its pages;
`metamers.png` and pages of stimulus, before, after and after-read-by-the-pre-twin, full frame at its own
proportion; the spectrum and filter for each, amplitude on a log axis over log frequency.

**33977**, overnight: every recording found registered, so the pre/post comparison runs - intersection
FEVE 0.181 before, 0.310 after. 329 MEI pairs; its MEI filter is NOT low-pass (above 1 between 8 and 16,
lowest 0.91 at 57), and its MEIs are large smooth blobs without 33328's bars and gratings - with its
twins' low fit, a question about the twins before it is a finding. Metamers re-evoke 0.91 and 0.92. The
figure titles had carried June's "low-pass filter" as a claim; they now state only what is drawn.

**The pre twin reading the post responses** - Doug: *"to decode what they look like. So we can compare
those too."* Re-evoke 0.79 on 33328 and 0.67 on 33977, below each twin's reading of its own. Seen in
both datasets and not yet measured: after-DOI metamers carrying oriented stripes that neither their
stimulus nor the before-DOI metamer has.

## One frame: the 2x twins archived (2026-09-28)

**What moved.** The code as it ran is the git tag `archive/2x-twins`. Everything it made moved by `git
mv` into `src/pipelines/.archive/2x-twins/<pipeline>/<animal>/`, 4,605 files: seeds and manifests, the
validation and the config search, every MEI and metamer, and their figures. The folder's
[cover](../../../src/pipelines/.archive/2x-twins/.cover.md) gives the reason for 2x, the method, what
it found, and how to make it again. The CPU 1x twins, June's imports and June's metamer targets stayed
where they were.

**What the pipelines are now.** One frame, the delivered 36x64:

- there is no `scale` key;
- the registry holds each export and its `-1x` assembly from the frame store;
- `train` uses Sensorium's config verbatim and refuses any other frame;
- the MEI blur is Walker's as published, and Walker's own code has no zoom;
- `gamma_search.py` is back where `config_search.py` stood.

The twins are `<animal>-<cond>-1x/B/<cells>` on the card, beside the CPU 1x twins under `@legacy`. The
per-scan caches kept at 1x equal the box's current-export ones exactly. Thirteen tests had gone stale
during the sprint (the legacy argument, per-cell-set verdicts, the metamer surface, checkpoints that
record device and config). They were brought up to what the code promises, and 53 pass.

**The bar, and how it is checked.** The 33328 pair is held to June's in two ways:

- **Seed by seed** against the `@june` import (`library.reproduction`). June trained on the CPU, so the
  bar is seed noise, not four decimals. The pipeline's own CPU 1x pair reached 0.314 and 0.268 against
  June's 0.313 and 0.271.
- **Cell by cell**, every MEI against June's MEI of the same cell (`mei.check --before`), now on the one
  frame both were made on.

`mei.check --published` sets Walker 2019's own code against the pipeline's MEI on the same twin.
33977's CPU 1x twins fit no better than its 2x ones did (validation correlation 0.147 and 0.137), so
the frame was not what held its fit down; its MEIs are looked at again on the published frame.

**Two twins for each, and the first of the bar met.** Under Doug's rule the pair is trained on the
cells matched across all the dataset's recordings (`run.cell_set`): 33328's two driven recordings,
749 cells; 33977's four, two driven and two spontaneous, 1,177. The `[twin] cells` setting is gone.
The GPU 1x twins of `run-20260928-1350-twins-1x` were built under the rule before it, six of them. It
was stopped as its MEIs began, and 33977's spine pair (3,256 cells) was removed from `main` (history
`30e20a9e`).

The 33328 pair against June's, seed by seed (validation correlation):

| | seed 0 | seed 1 | seed 2 | seed 3 | seed 4 | June's seed range |
|---|---|---|---|---|---|---|
| pre | +0.0041 | -0.0005 | +0.0037 | +0.0009 | +0.0006 | 0.3088-0.3167 |
| post | -0.0041 | -0.0052 | +0.0013 | -0.0034 | +0.0076 | 0.2645-0.2753 |

FEVE is 0.501 and 0.497 on the same 456 and 369 scored cells, against June's recorded 0.480 and 0.512.
33977's pair has FEVE 0.227 and 0.260 on 489 and 406 cells. `run-20260928-1438-chain-1x` re-recorded
both builds and made the MEIs and metamers.

**The MEIs against June's.** 634 of 33328's MEIs were each set against June's MEI of the same cell and
condition (`mei.check --before`): pixel correlation median 0.894, quartiles 0.808-0.937, 10th to 90th
percentile 0.708-0.960. Row by row the pipeline's MEI is June's feature in June's place. The worst shown,
pair 215 after DOI at -0.120, is the same oriented bars in the same place at the opposite phase, which
a pixel correlation counts as a mismatch. The filter from before to after DOI on the same 317 cells
(`--filter`) reaches half amplitude at 24.8 cycles per frame width, June's at 24.1; the two curves
overlap from 2 to 32.

Walker 2019's own code (`inception_loop.py`, ported verbatim) and the pipeline's fast path, on the same
twin and the 8 best-fit cells (`--published`): r 0.986-0.991, median 0.988, and each pair the same image
by eye. Those eight cells hold two or three MEIs between them - units 1134, 345, 30 and 1568 one, 644,
318 and 2361 another - which is the duplicate-soma question (open item 7) showing in the MEIs.

33977's MEIs on the published frame are still large smooth blobs and rings, without 33328's bars and
gratings. The frame did not make them; the twins are the same method on another dataset.

## Still open

1. **Doug's decisions**:
   - where the filter stops being plotted: at 37, where the middle halves overlap again, or at the floor
     near 34;
   - Cobos's 1,000 steps against our convergence gate;
   - the duplicate-soma criterion for summaries (lateral distance);
   - whether the metamer summary leads by how well-determined the target is, or by re-evoke.
2. **The 1x twins held to June's** - met: the fit seed by seed, the MEIs cell by cell, the filter, and
   Walker's own code against the pipeline (above).
3. **33977's MEIs as a test of its twins** - smooth blobs on the published frame too, FEVE 0.23 and
   0.26: a question about 33977's twins before any finding on them.
4. **The stripes after DOI** - seen on the 2x metamers. Look for them on the 1x ones, then measure
   periodic, oriented energy, post against pre, before making any claim.
5. **The spontaneous moments** - built, by name only; Doug: *"Not yet."*
6. **Speed on the card** - the 2x twin made an MEI or metamer in 7.5 s at batch 16; the 1x twins make
   an MEI in 0.41 s (`run-20260928-1438-chain-1x`). Next: the five ensemble members fused into one set of kernels, measured on
   a free card.
7. **Duplicate cells** - one soma across neighbouring planes (0.1-5.6 um laterally, 5-25 um in depth);
   Doug: *"we can make all MEI, and then exclude based on criteria like that for the summary statistic
   figures."*
8. **The 2x data** - the `-2x` scan folders and the 2x frame store are still in `library/data` on both
   machines, and no pipeline reads them. Doug decides whether they stay.
9. [The Altered Cortex](../the-altered-cortex/.cover.md)'s validator reports errors, nearly all older
   than this sprint. One of them tells a reader to relaunch a CPU watchdog, which must not be followed.
