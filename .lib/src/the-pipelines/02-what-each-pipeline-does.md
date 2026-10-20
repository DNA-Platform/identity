# What each pipeline does

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Pipelines](.cover.md)]

Five pipelines, each answering one question and reading only the finished products of the ones before
it. Each package's cover is its documentation; this chapter is the map.

```
export  ->  (matched's code)
matched  ->  digital_twin  ->  mei
                          \->  metamer
```

`export` stands apart from the chain, because it is where data comes from rather than what is made
of it ([below](#export---a-dataset-in-the-labs-caiman-processing)).

## The chain, as one command

```bash
cd src
python -m pipelines.digital_twin 33328 33977 --then mei,metamer
```

The twin pipeline's first phase runs `matched`; its twins are trained; and only when it has finished
every phase and recorded the dataset's canonical build does `--then` start the pipelines that depend on
it, each on the same dataset. Every phase checks for its product first, so a rerun costs only what is
missing. On the box a run's command is exactly this - a pipeline's entry point, never orchestration
written for the occasion.

## `export` - a dataset in the lab's CaImAn processing

[`src/pipelines/export/`](../../pipelines/export/.cover.md), added 2026-10-06. It pulls a dataset's
recordings from the lab's database, in 33328's processing (`1-6-5`), by the lab's own code in the lab's
image on jr-compute003, through the [`als-remote-lab`](../the-skillset/02-als-remote-lab.md) tool. Each
pull is recorded in `runs/lab/`. It writes nothing until the lab's code reproduces outputs the lab
already produced: its stored stack coordinates, and the unit sets every delivery kept. Doug, 2026-10-06:
*"They keep giving me access and I can't do anything with it?"* The answer was to check the lab's
code against the lab's outputs instead of waiting for the person who ran it.

Today it leaves 33977's coordinates and its four-way match, made by `matched.cells.build` on the soma
units. Under CaImAn, 980 cells track pre to post and 393 are in all four recordings, against 3,256
and 1,177 delivered under Suite2P. The export itself waits on the lab's exporter, nexport.

## `matched` - which neuron is which

[`src/pipelines/matched/`](../../pipelines/matched/.cover.md). The same cell across every
recording of a dataset: Erin's matcher (mutual nearest neighbours) at her 10 µm on registered stack
coordinates, every link between two recordings given a status - `valid` for two registered frames,
`provisional` for the same session in mixed frames, `unregistered` otherwise - so no figure can imply
more than the data supports. It writes the **spine** (every pre/post pair of the stimulus scans: 749 on
33328, 980 / 3,256 on 33977 under CaImAn / Suite2P), the **pre-and-spontaneous table** (the pre cells
linked into the pre spontaneous recording and on into the post one: 489 / 1,619 on 33977), the
**four-way table** (the spine's cells in all four recordings, which the analyses of the spontaneous
recordings read), and the links into each spontaneous recording. Row order is identity downstream: a
table's order is its twin's readout order.

## `digital_twin` - the twins

[`src/pipelines/digital_twin/`](../../pipelines/digital_twin/.cover.md). Its phases:

- `prepare` - each scan's frames assembled from the stimulus set's, at the delivered 36x64;
- `match`;
- `ceiling` - the lab's noise ceiling and FEV, the number every twin's cells are cut at;
- `twin` - the dataset's twins, trained packed onto the card by measured memory;
- `validate` - FEVE and the health panels;
- `compare` - pre against post on cells reliable in both;
- `figures` - explained variance.

Every dataset gets **as many twins as its recordings allow** (`run.twin_names`), since 2026-10-20: the
**pair**, pre and post on the pre-post cells (the spine, FEV >= 0.15 in both image recordings), and
where there are spontaneous recordings the **moments' twin**, before DOI on the pre-and-spontaneous
cells (FEV >= 0.15 in the pre recording). Doug: *"Have the pipeline make these twins: Pre - matched cells
pre-post; Post - matched cells pre-post; Pre - matched pre-spontaneous-spontaneous, no post."* Every twin
sees **Doug's sinusoidal normalisation**, of the activity (a map per neuron per recording) and of the
images (one map over the whole stimulus set, on [-1, 1]) - *"Sine norm and FEV cutoff used for all twins
and for both caiman and suite2p"*. The one pair a dataset on the cells of every recording that this
replaced is at the tag `four-way-twins`. The twins use the published Sensorium
configuration, verbatim, on the frame it was published for. When every phase has run, the pipeline
writes the **canonical build** (`build.json`): the exact checkpoints with their hashes, the settings,
and the data's fingerprint. Every reader of a twin loads through it.

## `mei` - most exciting images

[`src/pipelines/mei/`](../../pipelines/mei/.cover.md). Walker 2019's recipe on the lab's ops,
for every cell of the dataset's pair (all of them clear the lab's FEV >= 0.15 in both conditions),
best-understood cells first; every MEI clipped to [-1, 1], the images' black and white. Phases `index`, `mei` (sixteen
cells a batch on the fast path), `quality`, `organize`, `figures` - which are the two Doug asked for:
`comparison.png` (every pair, before above after, by pre-FEVE, its pages in `comparison/`) and
`spectrum-and-filter.png` (the MEI spectrum before and after DOI, and the filter between them - the
June result the MEIs must replicate). The checks - the fast path against the lab's step, the twin
against the fixed 1x benchmark at three MEI blurs, the filter against June's - write to `verification/`.

## `metamer` - the image that evokes a measured response

[`src/pipelines/metamer/`](../../pipelines/metamer/.cover.md). Cobos 2022's inversion of the twin
against a response the animal actually gave. The surface: one metamer per test stimulus from the pair
`mei` uses - each twin its own, and the pre twin reading the post responses - the same from the
moments' twin, as a check, and the **spontaneous metameric moments**, every half-second bin, the
moments' twin reading the pre recording (pre-pre) and the post one (pre-post), each cell on its own
sinusoidal map in its own recording. The null and unconditioned metamers were retired on 2026-10-09 (*"we don't need the
null and unconditioned at all"*). One fast path for all of it, 0.51 s a metamer on the 45-px twin, held
against the single-image recipe by `check.py`; an inventory closes every run. Since 2026-10-13 the moments are
denoised by the spontaneous analysis's 2026-09-21 seed model, fitted per pairing (*"I want us to be doing what we did
in the spontaneous analysis project"*).

## `receptive_field` - the plain linear receptive field

[`src/pipelines/receptive_field/`](../../pipelines/receptive_field/.cover.md). Each tracked cell's
response-weighted average of the images, before and after DOI - no model, nothing to choose - with the
fields' pages, the spectrum and the filter from before to after, convergence and certainty against
trials; then every dataset side by side, CaImAn beside Suite2P in each mouse. Made a pipeline from the
receptive-field analysis on 2026-10-13 (*"We are making this a pipeline ... so we can compare all of the
datasets and segmentation methods"*).

## Where the analyses sit

Doug's analyses live in `src/analyses/` and read the pipelines' artifacts; they do not recompute what a
pipeline makes. `src/pipelines/.analyses/` holds the scratch studies that checked a pipeline, mirroring
its shape; nothing imports from it.

---

[Previous: [Back to pipelines, on a new machine](01-back-to-pipelines-on-a-new-machine.md)] | [Book: [The Pipelines](.cover.md)] | [Next: [The rules every pipeline follows](03-the-rules-every-pipeline-follows.md)]
