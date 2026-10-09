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
33328, 3,256 on 33977), the **four-way table** (the spine's cells present in all four recordings of a
dataset with spontaneous ones: 1,177 on 33977), and the links into each spontaneous recording. Row
order is identity downstream: the spine's order is every twin's readout order.

## `digital_twin` - the twins

[`src/pipelines/digital_twin/`](../../pipelines/digital_twin/.cover.md). Its phases:

- `prepare` - each scan's frames assembled from the stimulus set's, at the delivered 36x64;
- `match`;
- `ceiling` - the lab's noise ceiling;
- `twin` - the dataset's pairs, trained packed onto the card by measured memory;
- `validate` - FEVE and the health panels;
- `compare` - pre against post on cells reliable in both;
- `figures` - explained variance.

Every dataset gets **two twins**, pre and post, trained on the cells `matched` finds in **all** of its
recordings (`run.cell_set`). For 33328, with two driven recordings, that is the spine. For 33977, with
two spontaneous recordings as well, it is the four-way **intersection**. Doug, 2026-09-28: *"the rule is
that from matched, we take the intersection of all recordings... That's a simplifying assumption."*
The twins use the published Sensorium
configuration, verbatim, on the frame it was published for. When every phase has run, the pipeline
writes the **canonical build** (`build.json`): the exact checkpoints with their hashes, the settings,
and the data's fingerprint. Every reader of a twin loads through it.

## `mei` - most exciting images

[`src/pipelines/mei/`](../../pipelines/mei/.cover.md). Walker 2019's recipe on the lab's ops,
for every matched pair reliable in both conditions (the lab's FEV >= 0.15), from the dataset's pair of
twins; best-understood cells first. Phases `index`, `mei` (sixteen
cells a batch on the fast path), `quality`, `organize`, `figures` - which are the two Doug asked for:
`comparison.png` (every pair, before above after, by pre-FEVE, its pages in `comparison/`) and
`spectrum-and-filter.png` (the MEI spectrum before and after DOI, and the filter between them - the
June result the MEIs must replicate). The checks - the fast path against the lab's step, the twin
against the fixed 1x benchmark at three MEI blurs, the filter against June's - write to `verification/`.

## `metamer` - the image that evokes a measured response

[`src/pipelines/metamer/`](../../pipelines/metamer/.cover.md). Cobos 2022's inversion of the twin
against a response the animal actually gave. The surface, all on the pair `mei` uses: one metamer per
test stimulus - each twin its own, and the pre twin reading the post responses - and the **spontaneous
metameric moments**, every half-second bin, the pre twin reading the pre recording (pre-pre) and the
post one (pre-post). The null and unconditioned metamers were retired on 2026-10-09 (*"we don't need the
null and unconditioned at all"*). One fast path for all of it, 0.51 s a metamer on the 45-px twin, held
against the single-image recipe by `check.py`; an inventory closes every run.

## Where the analyses sit

Doug's analyses live in `src/analyses/` and read the pipelines' artifacts; they do not recompute what a
pipeline makes. `src/pipelines/.analyses/` holds the scratch studies that checked a pipeline, mirroring
its shape; nothing imports from it.

---

[Previous: [Back to pipelines, on a new machine](01-back-to-pipelines-on-a-new-machine.md)] | [Book: [The Pipelines](.cover.md)] | [Next: [The rules every pipeline follows](03-the-rules-every-pipeline-follows.md)]
