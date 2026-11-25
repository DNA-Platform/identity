# The other dataset with spontaneous recordings: a plan

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

**This chapter is a plan. No test in it has been run.** What has been done is the first thing he asked for (the
justification, found) and a count of what the tests would have to work with. No level of neural activity in 34452 has
been read.

Doug, 2026-11-25, whole:

> *"Come up with a method to see if the other dataset that we have with spontaneous recordings shows any signs of
> having similar properties. We need a plan. We excluded the dataset, and the first thing to do is to find our
> justification for why. But we can still try to run some tests to see if we see some evidence that the result is
> similar. I'm not sure how to structure this"*

**My reading** (mine until he confirms it).
- The other dataset is mouse 34452, in Suite2P (new work is on Suite2P since 2026-11-13). It is the only mouse besides
  33977 with spontaneous recordings before and after DOI; 33328 has none.
- "The result" is the fourth deck's
  ([literal-hallucination-qda.pdf](../../../src/reports/imaginary-representation/literal-hallucination-qda.pdf)):
  where spontaneous neural activity lands in the space before and after DOI (the three features, the classification),
  with what the space rests on (the twin's checks, the most exciting images and their completed patterns).
- "Signs of similar properties" is the same shape in 34452's own figures. 34452 is read on its own and is never
  pooled with 33977.

## Where it stands

*(edited, never appended; last edited 2026-11-25)*

- **The justification is found** (section 1). It is an instrument reason, measured from the lab's own tables before
  this result existed, and it is written in both of 34452's configs with his words.
- **It was measured on the two image recordings only.** The two spontaneous recordings were never measured.
- **The result reads the after-DOI image recording for one thing:** it is the map every after-DOI spontaneous sample
  is read through. Every recorded reason sits on that recording (section 2).
- **The damage is in half of it.** Fields 2 and 4 kept the light that 33977's fields 2 and 4 kept, and stayed in
  register: 229 of the 391 cells the report's rule gives. Fields 1 and 3 lost about 70% of their light and one plane:
  162 cells (section 3).
- **The twin for 34452 is trained and explains as much as 33977's** (section 2). The stored products the analysis
  starts from are on the report's cells.
- Nothing run. Next: his word on the plan (section 7), then step 1.

## 1. Why 34452 was left out, as recorded

Where: the comment at the head of
[`34452-suite2p.toml`](../../../src/pipelines/digital_twin/configs/34452-suite2p.toml) and
[`34452-caiman.toml`](../../../src/pipelines/digital_twin/configs/34452-caiman.toml), from
`runs/lab/20261024-151122-imaging-quality.*` and `runs/lab/20261024-151244-unit-fields-34452.*`.

His words:
- 2026-10-14: *"Don't leave out 34452 - use it as an example where I don't exactly know what to do in a situation like
  this"*.
- 2026-10-24: *"write notes that when we aggregate, to leave that one out ... We don't do cross dataset statistics yet
  ... we need a principled reason to drop one"*; and *"I didn't rule not to drop a dataset after seeing its result.
  That is your interpretation. But we need a principled reason to drop one."*
- 2026-10-29, of the metameric moments: *"We only have one dataset with spontaneous. We are ruling out the most recent
  one."*

The reason is the instrument, measured independently of any result. What prompted the look was that 34452's most
exciting images do not match before and after DOI (aligned r 0.59 CaImAn and 0.73 Suite2P, against 0.79 to 0.82 in
33977). What was then measured, on the two **image** recordings (11-1 before DOI, 13-2 after):

| | 34452 | 33977, the reference |
|---|---|---|
| light the after-DOI recording kept (photons per pixel) | 27 to 31% in fields 1 and 3; about 70% in fields 2 and 4 | 74 to 77% in every field |
| the before-DOI recording, first third to last | dimmed 21 to 34% | dimmed 8 to 10% |
| field 1 after DOI | matches no before-DOI cell, in either processing | in register |
| the eye in the after-DOI recording | the pupil fit finds it in 41% of frames, none in the second half (79% before DOI) | not in that record |
| cells segmented after DOI (Suite2P) | 42% fewer | 19% fewer |

Left open then: DOI acting on the whole recording, or a contaminating signal shared across cells in a dim recording.
*"The session is Erin's to explain."* Each dataset is still run and reported on its own.

## 2. Which recordings the result reads, and where the reasons fall

Read from the code that makes the report's samples
([`moments/data.py`](../../../src/analyses/metameric-moments/moments/data.py),
[`moments/screens.py`](../../../src/analyses/metameric-moments/moments/screens.py)) and from
[the discriminant analysis](../../../src/analyses/discriminant-analysis/.cover.md).

| recording | 33977 | 34452 | what the result takes from it | what is known of it in 34452 |
|---|---|---|---|---|
| images, before DOI | 12-1 | 11-1 | the twin, so every literal; the covariance of image-evoked neural activity; the before-DOI day's map | dimmed 21 to 34% as it ran; the twin made from it explains as much as 33977's (below) |
| spontaneous, before DOI | 12-2 | 11-2 | the displacement, the spontaneous covariance, the zero of natural; the pre-DOI samples | its light was never measured |
| spontaneous, after DOI | 17-1 | 13-1 | the samples that are placed | its light was never measured |
| images, after DOI | 17-3 | 13-2 | one thing: the map each after-DOI spontaneous sample is read through (each cell's sample placed among that cell's own responses to that day's images); and it decides which cells are used | every recorded reason is here |

So nothing in the report's before-DOI results reads a recording the reasons touch. The after-DOI result reads the
damaged recording as its map.

**The twin** (`validation/validate_*-pre_B_pre-and-spontaneous.json`, the twin before DOI on the pre-and-spontaneous
cells, five seeds; picture:
[verify png](../../../src/pipelines/digital_twin/artifacts/34452-suite2p/validation/verify_34452-suite2p-pre_B_pre-and-spontaneous.png)):

| | 34452 | 33977, the reference |
|---|---|---|
| cells | 573 | 622 |
| explained share of explainable variance, median (the paper's 0.61) | 0.57 | 0.53 |
| signal correlation, median | 0.56 | 0.54 |
| single-trial correlation, median | 0.26 | 0.25 |

**The two maps and what each assumes** (the code's own words, `moments/data.py`). A sample on its own day's map
*"assumes the spontaneous scan and the image scan of a session share a gain"*. A sample on the before-DOI day's map
*"assumes the two sessions' scans share a gain"*. In 34452 the second is known to be false (the light fell between
the days). The first has never been measured, in either mouse. In both mice the order is images then spontaneous
before DOI, and spontaneous then images after DOI.

## 3. What the tests would have to work with

Counted 2026-11-25 with the project's own functions (`neuron_ids`, `pre_and_spontaneous`, `spontaneous_links`,
`spontaneous.window`); the fields after DOI from the lab's record of 2026-10-24. Counts only.

| | 33977 | 34452 |
|---|---|---|
| each spontaneous recording | 20.2 min at 9.4 Hz | 20.0 min at 6.1 Hz |
| samples (one 0.5 s window) a recording | 2,422 | 2,397 |
| frames in a sample | 4.7 | 3.1 |
| the twin's cells | 622 | 573 |
| the report's cells: those that reach the after-DOI image recording | 548 | 391 |
| the twin's cells in the same field in both spontaneous recordings | 614 of 622 | 505 of 573 |

34452's 391 cells, field before DOI (rows) by field in the after-DOI image recording (columns):

| | field 2 | field 3 | field 4 | all |
|---|---|---|---|---|
| field 1 | 0 | 64 | 0 | 64 |
| field 2 | 103 | 0 | 2 | 105 |
| field 3 | 0 | 98 | 0 | 98 |
| field 4 | 7 | 0 | 117 | 124 |
| all | 110 | 162 | 119 | 391 |

None is in field 1 after DOI. The 64 cells that were in field 1 before DOI are matched to cells in field 3 after DOI.
That is what a plane moving in depth would give if fields 1 and 3 are two depths of one place; whether they are is in
the lab's scan tables and I have not read it.

The light, by field (photons per pixel, the lab's quality tables, the image recordings):

| | before DOI | after DOI | kept |
|---|---|---|---|
| 34452, fields 2 and 4 | 3.05, 3.34 | 2.14, 2.30 | 70%, 69% |
| 33977, fields 2 and 4 | 3.05, 3.27 | 2.35, 2.51 | 77%, 77% |
| 34452, fields 1 and 3 | 4.05, 4.40 | 1.10, 1.36 | 27%, 31% |
| 33977, fields 1 and 3 | 5.87, 6.19 | 4.36, 4.56 | 74%, 74% |

**So 34452 has two halves.** In fields 2 and 4 (229 cells; 220 in the same field before and after) the light is
33977's same fields', before and after. In fields 1 and 3 (162 cells, all in field 3 after DOI) are the lost light
and the lost plane. What is common to the whole after-DOI recording and so to both halves: the eye not found in its
second half.

The stored products the analysis starts from exist for 34452 and are on these 391 cells
(`metameric-moments/artifacts/34452-suite2p/film/`, made 2026-10-31, after the twin of 2026-10-23).

## 4. The plan

**Step 1. Finish the justification for the recordings this result reads.** Three checks. None looks at where
after-DOI spontaneous neural activity lands.

- **a. The light of the four spontaneous scans** (34452's 11-2 and 13-1; 33977's 12-2 and 17-1 as the reference),
  from the lab's quality tables, by the script of 2026-10-24 with those scans named. It answers whether a day's
  spontaneous scan and image scan share their light, which a sample's own day's map assumes. One read through
  David's box.
- **b. Whether images still drive the cells in the after-DOI image recording where the eye is not found.** Oracle on
  the 100 repeated test images, the trials with the eye found against the trials without. No twin. If images do not
  drive the cells there, those trials are not responses to images, and a map made from them is not a map of what
  images drive.
- **c. Whether fields 1 and 3 are two depths of one place**, from the lab's scan tables (with a).

**Step 2. Before DOI only** (recordings 11-1 and 11-2; no recorded reason reaches them). The report's code with the
dataset's name changed and nothing else: `screens` of metameric-moments, then `metrics` and `reinterpretation` of
spontaneity-and-emptiness, on David's box (they write `screens.npz`, `paintings.npz` and `reinterpretation.npz`, the
three files `three_qdas.py` reads); then `heading` and `how-imaginary` (no twin), `discriminant.py`, `three_qdas.py`
and `patterns.py` on this machine.
Read, in this order:
- the report's own checks: a held-out image-evoked sample names its own image among 100 (33977: 90%); each feature's
  defining example on its own side; members drawn from each class returned as that class (33977: 98%, 96%, 99%);
- the pre-DOI rows of the report's two tables: pre-DOI spontaneous against image-evoked on the canonical view;
  pre-DOI spontaneous classified (33977: 82% featureless, 18% imagined, none hallucinated).

If the checks fail the space is not built in this dataset and the plan stops there.

**Step 3. After DOI.** The same run gives it. Read three ways, the simplest first:
- **a. Two medians, no twin:** what images drive over spontaneous, raw, each day (33977: 1.19 before DOI, 1.02
  after; [the-literal-axis.md](../../theory/discrimination-semantics/the-literal-axis.md), section 12), for fields 2
  and 4 and for fields 1 and 3. Beside it, the raw level after DOI over before, which says how the amplitude follows
  the light: the two halves lost different amounts of it.
- **b. The canonical view and the classification on the 391 cells**, each sample on its own day's map (the report's
  reading) and on the before-DOI day's map (stored beside it by the same code).
- **c. The same on fields 2 and 4 alone (229 cells) and on fields 1 and 3 alone (162).** This needs one addition to
  the three scripts: a choice of cells. A forced subset, said first wherever it is shown.

**Step 4. Only at his word: the most exciting images and their completed patterns in 34452.** They read the twin
alone, so no recorded reason reaches them. One step size for 548 neurons was 16 minutes on David's box.

**Step 5. How it is shown.** One flagged page beside 33977's: 34452's canonical view drawn by the report's own
function, with the sentence saying why it was left out and which half is shown. Never pooled, never averaged with
33977.

## 5. What counts as similar, and what each outcome will be taken to mean

Written before anything is run, so that neither outcome is read after the fact.

**Similar is the shape, in 34452's own figures:**
1. on each of the three features, post-DOI spontaneous lies between pre-DOI spontaneous and image-evoked;
2. it is most of the way to image-evoked on literal and featureful, and nearer pre-DOI spontaneous on natural;
3. pre-DOI spontaneous is classified mostly featureless and none hallucinated; post-DOI spontaneous hallucinated;
4. on the before-DOI day's map, post-DOI spontaneous moves part of the way and not across (33977: literal −153 to
   −50, 1% of samples on the literal side).

The bits are not compared: they grow with the number of cells (391 or 229 against 548), and a sample here averages
3.1 frames against 4.7.

**Why two maps and two halves** (my reasoning; step 3a is what checks it).
- On its own day's map, an after-DOI image recording that is dim, or partly made of trials where no image drove the
  cells, places a spontaneous sample nearer the middle of the map whatever the drug did. That is the direction of
  the result. So in the damaged half a result on this map cannot be told from the damage.
- On the before-DOI day's map, less light after DOI reads as lower activity, if amplitude follows light. That is the
  opposite direction. So a result there is one the lost light did not make.
- Fields 2 and 4 are, by their light and their register, the instrument 33977 had.

| what comes out | what I would say |
|---|---|
| step 1b: images do not drive the cells where the eye is not found | the after-DOI map as made is not a map of what images drive; step 3 on its own day's map waits for his word on the map (section 7) |
| step 2's checks fail | the space is not built in this dataset; nothing about DOI is read from it |
| step 2 holds | the method stands in a second mouse before DOI. This counts fully: no recorded reason reaches it |
| step 3, fields 2 and 4 show the shape | a sign that the result is similar, from the half of 34452 whose instrument matches 33977's |
| step 3, fields 2 and 4 do not show it, step 1 clean | it counts against, and I say so; the instrument there gives no excuse |
| step 3, stronger in fields 1 and 3 than in fields 2 and 4 | the excess is the lost light and the lost plane; it shows what such damage does to this measure |
| step 3, only on its own day's map, and only in fields 1 and 3 | cannot be told from the damage; said so |

## 6. What it costs

- Step 1a and 1c: one read of the lab's tables through David's box, minutes (the 2026-10-24 read was one script).
  Step 1b: this machine, minutes.
- Steps 2 and 3: the three phases on David's box are not timed on this dataset; I would read their run records for
  33977 before starting, and say what runs when it starts. On this machine `three_qdas.py` took about ten minutes and `patterns.py` about eight for
  33977.
- Step 4: 16 minutes a step size for 548 neurons on David's box; the report made eleven step sizes.

## 7. His to say

1. Whether "the result" is the fourth deck's, as I read it.
2. Whether the order suits, and whether step 1 starts.
3. Only if step 1b says images do not drive the cells where the eye is not found: whether the after-DOI map is then
   made from the trials with the eye found. It changes how a sample is read, so it is his.
4. Whether step 4 is wanted.

## Found on the way

- Both 34452 configs say of the spontaneous recordings "~9.4 Hz". The files say 6.10 Hz (7,300 frames a field in
  20.0 minutes); 9.4 Hz is 33977's. Not edited: I have not checked whether a stored product is keyed on the config's
  bytes.
- The 2026-10-24 imaging-quality read named the six image recordings only; that is why the spontaneous scans' light
  is not known.
