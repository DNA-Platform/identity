# The rules every pipeline follows

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Pipelines](.cover.md)]

The philosophy of the pipelines, as rules. Each is here because breaking it cost something, and each
carries the ruling it came from. A new pipeline follows all of them; a change to an old one that
breaks one is a change to this chapter first.

## 1. A pipeline is one entry point, and a run is a pipeline

`python -m pipelines.<name> <animal>` runs every phase, in order; `--to` and `--phase` run fewer. Doug:
*"a clean, single point of entry pipeline that can be used to run build steps, and that pipeline is
self-contained so that other pipelines can depend on it."* On the box a run's command is a pipeline's
entry point - never a script written for the occasion - so what ran is what anyone can rerun.

## 2. Every phase checks for its product first

The files are the state. A phase that finds its product does not remake it, so a run stopped anywhere
resumes where it stopped and a rerun costs only what is missing. Nothing clears a cache but `--rebuild`.

## 3. The manifest is the authority, not the disk

A dataset's twins are what its canonical build (`digital_twin/artifacts/<animal>/build.json`) records -
written only when the twin pipeline finishes every phase, with every checkpoint's hash and the data's
fingerprint - and every reader loads through it, which refuses a seed it does not record or whose bytes
have changed. Doug, 2026-09-17: *"we HAVE TO write our tools against the manifest! I can't find out
that I was sharing the results of 12 different runs."* So no downstream pipeline ever trains a twin: it
reads a finished one or stops.

## 4. A product knows what made it

A skip-if-exists cache must know what it is skipping, not only that it exists. Every MEI, metamer, fit
score and cell index records the identity of the twin that made it - the digest of its seeds in the
canonical build (`digital_twin.build.identity`) - and the synthesis that made it, and anything made
from a different twin or by a different synthesis is remade. A twin retrained under the same name
therefore never hands its predecessor's images to a figure; they used to be cleared by hand.

## 5. Pipelines kick off pipelines, on a finished build only

`--then mei,metamer` starts the dependants on the same dataset once the twin pipeline has finished every
phase - and not at all if it stopped, because a dependant started after a stopped run would read the
previous build as if it were this one's. Doug: *"We don't compute twins for the MEI alone. It is part of
the pipeline of connected results."*

## 6. Published code, on the published frame, and no settings

The method is the published one, run on the lab's own code: Sensorium's twin, Walker's MEI ops,
Cobos's `gauss_loss`, the lab's `NeuroNormalizer`. A lab function is imported, never rewritten, even
when a rewrite would agree. Doug: *"This is not Nancy/Claude's time-to-shine-innovating-on-a-published-
technique-thus-making-it-harder-to-publish-this-result Day."*

The frame is the delivered 36 x 64, the one Sensorium's config and Walker's blur were published for.
Both are used as published, and a frame of any other shape is refused, not adapted.

A pipeline builds one thing. The pipelines once trained 2x twins, and resolution became something to
choose. Doug, 2026-09-28: *"We don't want pipelines to have settings. That is just going to create
confusing."* The 2x work is archived whole in
[`src/pipelines/.archive/2x-twins/`](../../pipelines/.archive/2x-twins/.cover.md): its rule for
adapting (what sets an extent scales with the frame; what limits frequency stays) and everything it
made. Its code is the tag `archive/2x-twins`.

A change to the fast path must leave the lab's images unchanged to the precision it was measured at,
and the measurement is kept.

## 7. Ordering never filters; a filter is a ruling

Work is done best-first - cells by FEVE, targets by how well-determined they are - so a run stopped
early leaves something worth looking at, and a run taken to completion gives the same result in any
order. A filter is separate, named, and someone's ruling: the MEIs are made for pairs whose explainable
variance clears 0.15 in both conditions, the lab's reliability rule, because Doug asked that an FEVE
range be honoured.

## 8. Each session in its own units, and the pair identical but for the condition

Every twin is fit to its own session's responses, each cell divided by its standard deviation in that
session (the lab's normalisation: divided, not centred), and every other activity it reads - a
spontaneous moment, a pooled recording - is scaled the same way by its own session. The model is
invariant to a session's scale, so the same activity can be handed to either twin. Doug: *"I thought we
assumed values were zscore normalized across the session."* A per-cell difference in scale between
sessions may be the drug or the imaging; it is not ours to correct. And the two twins of a pair agree
on everything but the condition - cells, row order, arm, seeds, resolution - which `digital_twin.run.
parity` enforces as an error, because a pre/post difference must be the drug and not the cells.

## 9. Performance is part of correctness

On the card a slow run is a defect, not a number to relay: judge a runtime against what the card can
do, profile before reporting it, batch everything, and never share the card between two jobs whose
timings matter. Doug: *"performance is a critical and necessary condition of correctness and not a
nicety... It is your bug to solve."* Every speed-up is a change to the method until it is measured not
to be. The protocol is the skill's [whole machine](../the-skillset/01-07-als-remote--the-whole-machine.md).

## 10. A label is a claim, and the data decide it

A status a pipeline writes - a frame, a link, a verdict - is a claim about the data, and it is checked
against the files before it is reported as a limitation of the data. 33977's post scan was labelled
`motor` for months because its separate coordinate file was empty; its export carried the registered
coordinates all along, and matched now reads the frame off the data. Doug, 2026-09-27: *"We have all
coordinates in all data... If you believe cells can't be found across then matched is not working as
a pipeline and something is seriously wrong."*

## 11. An MEI is a test of the twin, and a check is not a figure

MEIs unlike the published ones are evidence against the twin before the MEI code. The squares of the
first 2x MEIs came from the twin's reach, not the recipe. On the published frame, two checks apply:

- every 33328 MEI against June's MEI of the same cell (`mei.check --before`);
- Walker's own code against the pipeline's MEI on the same twin (`--published`).

Checks like these are welcome and are kept in `verification/` or `validation/`, beside their numbers
and off Doug's path ([chapter 5](05-the-tree-doug-walks.md)).

---

[Previous: [What each pipeline does](02-what-each-pipeline-does.md)] | [Book: [The Pipelines](.cover.md)] | [Next: [How they are organized](04-how-they-are-organized.md)]
