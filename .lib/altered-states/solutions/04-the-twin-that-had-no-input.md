# The twin that had no input

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **keywords:** `twin` `pipeline` `unsurfaced-substitution`
- **date:** 2026-09-15

---

## What was observed

The matched cell set for 33977 kept coming out small. Erin's matcher on the pre and post scans gives
**3,256** cells at 10 µm. The table I built gave **1,340**, and an earlier version of it gave
**663**. Doug: *"Remember 2000 cells?"*

Nothing was broken. Every hop ran correctly, at the right cutoff, with the right algorithm.

## What it turned out to be

**I had built the cell set to require a neuron to appear in all four recordings** — pre stimulus, pre
spontaneous, post spontaneous, post stimulus — and composed the pre-to-post identity by routing
through the spontaneous scans. The spontaneous segmentations found about 3,500 cells where the
stimulus scans found 6,084 and 4,903, so that requirement alone caps the set at ~3,500, and three
mutual-nearest-neighbour hops cut it to 1,340.

**The requirement only makes sense if a twin were being trained on spontaneous activity.** None is,
and none can be. Doug: *"we aren't training twins for the spontaneous activity. That's silly we have
no input."*

A twin maps a **stimulus** to a **response**. A spontaneous recording is a mouse on a blank screen:
there is no stimulus, so there is no input, so there is nothing for a twin to learn. The spontaneous
data is a **target for inversion** — a measured response vector fed backwards through the pre or post
twin — and never a training set. The cells it needs are found afterwards, nearest-cell from each
cell's own session.

So the cell set is **pre to post, directly**, and the spontaneous columns hang off it as nullable
attributes. 3,256 cells instead of 1,340.

## The mechanism, which is the part worth keeping

I modelled the dataset as **four symmetric sessions** because that was a clean data structure — one
`Session` type, one matcher, one table, generic over the 2×2. It is a good structure and it produced
a wrong requirement, because symmetry in the data model implied symmetry in the *purpose*, and the
four recordings do not have symmetric purposes. Two are training data. Two are inversion targets.

**A scientist would have asked what a spontaneous twin would predict, and stopped.** I did not ask,
because it never presented itself as a scientific question — it presented as a schema decision, and
schema decisions feel like mine to make. Doug: *"even thinking a twin would be trained because you
are not a scientist."*

## What to do instead

**Before a structure decides what data is included, say out loud what each piece of data is FOR.**
If two things go in the same table, they should be there for the same reason. Where they are not,
the structure is asserting something about the science, and that assertion is a question for Doug —
see the memory on purview.

The tell here was available and I walked past it: the four-way requirement made the training set
*smaller*, and a restriction that costs training data should have forced the question "what is this
restriction buying?" The answer was: an analysis that does not need it.

## Where it was fixed

[`matched/cells.py`](../../../src/pipelines/matched/cells.py) — the spine is `pre -> pst` directly at
10 µm, labelled `valid` or `unregistered` by the coordinate frames available; the spontaneous columns
are derived per cell from its own session's stimulus scan and are nullable. The removed chaining
carries a comment saying why, so it is not reinvented.
