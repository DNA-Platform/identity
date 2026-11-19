# The pattern tiling fixed point

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

Doug, 2026-11-19, on seeing the pattern literals sit where the MEIs do in the space:

> *"I thought about this - you may have foudn a powerful identity. Can you prove that an MEI and one of your completed
> patterns under some equivalence where one is like the periodic completion of the other with the property that the
> twin produces activity pattern that returns a metamer with the pattern has the property of being approximately the
> same collection across neirons?!? Does that work for intermediary patterns? That is an amazing result! We found a
> periodic inveriant space? is that true in general or just in our space?"*

> *"You are going to want to say something more interesting than step size. Perhaps a pattern is something like a
> feature, and you can say that gradation seems to increase featurelessness, but tiling doesn't increase the change
> our measuer of feature. Can that be? That is amazong"*

> *"Why don't you explore to find the pattern tiling fixed point a little more deeply, while taking notes."*

**The objects** (33977, Suite2P, the twin before DOI, five seeds, 548 neurons in the space). A neuron is a type (its
weights on the twin's features) at a place. The lab's MEI recipe raises a type: at one place, which gives the
neuron's MEI; at every place of the twin's 28 by 56 map, which gives its pattern; or at some of the places, a tiling
between the two. Gradation is how strongly the feature stands in an image: the image's intensity at the neuron's
place over its MEI's (1 for the MEI). Our measure of feature is the three features (literal, natural, featureful,
bits) of the neural activity the twin gives the image.

**My reading of "the pattern tiling fixed point"** (mine until he confirms it). Tiling is an operation: raise the
type at more places. A fixed point of it is what more tiling no longer changes. There are three things that could
stop changing, and they need not stop at the same point: the image (the pattern itself), the neural activity the twin
gives it, and our measure of feature. To find the fixed point more deeply is to find where each one stops, what sets
that point for a neuron, and whether the pattern is also a fixed point of going through the twin and back.

## Where it stands

*(edited as the entries come in; last edited 2026-11-19, after entry 2)*

- **Established.** Gradation moves our measure of feature (a doubling: +24 bits natural, +3 featureful, -6 literal;
  at the faintest the pattern literal sits on the featureless screens' literals). Tiling at one gradation moves it by
  about a quarter of that, from one place to all 1,568 (+6 natural at one place, 0 from about 50 places on). So for
  the measure the fixed point is reached at about 50 places, which is a spacing of 5 or 6 places, near the patterns'
  own spacing of about 7 pixels.
- **Established earlier, for the image.** On grids finer than the pattern's own spacing the image is the same pattern
  (0.97 to 1.00 by regularity); on coarser grids it becomes the grid's (0.61, 0.58). Another start gives the same
  pattern. One pass through the twin and back gives the pattern again (0.94 by regularity).
- **Not established.** That it holds neuron by neuron (it does not in the space: r 0.41). What sets the fixed point
  for a neuron (its pattern's own spacing is the candidate). Whether it holds for all 548 in the middle of the
  range. Whether the pattern stays put under repeated passes through the twin. Whether, in the neural activity, the
  pattern literal is the MEI's activity with place taken away.
- **Next.** Entries 3 and 4, whose data came home at 11:22: every neuron on every grid; every type read at each
  MEI's own place.

## Entries

### 1. The pattern literals sit where the MEIs do (2026-11-19, morning)

*Asked* (Doug): *"Your patterns are the MEIs. No difference in this space"*; *"Find step sizes that correspond, and
use those."*
*Done.* Every neuron's pattern at eleven step sizes, 0.5 to 8 times the lab's (runs `0556-tiled-steps`,
`0737-tiled-steps-beyond` on David's box); for each neuron the step size where its pattern's intensity equals its
MEI's (`spontaneity-and-emptiness`, `patterned_figures.corresponding`); those pattern literals placed in the space
(`discriminant-analysis/shown_images.py 33977-suite2p corresponding`).
*Seen.* 539 of 548 neurons have such a step size (1.78 times the lab's; 1.05 to 3.35). Pattern literals at +133, +14,
+6 bits (literal, natural, featureful); the MEIs at +129, +21, +9.
*Rules out* that the two are apart in this space as collections. *Does not show* that a neuron's pattern sits on its
own MEI.
*Leads to* his idea above.

### 2. Gradation against tiling (2026-11-19, about 11:00)

*Asked.* At one gradation, does the measure change with the tiling? At one tiling, with the gradation? Neuron by
neuron?
*Done.* `src/analyses/discriminant-analysis/gradation_and_tiling.py` (no GPU, a minute): every stored image of one
type raised all together, by where it was raised: one place (the MEI, 548 neurons); every 12th, 8th, 6th, 4th place
(64 neurons, the lab's step size, twice, four times); every 5th, 3rd, 2nd place, honeycombs, random spots, where the
recorded cells are (64 neurons, twice the lab's step size); a disc (17 neurons, every step size); every place (548
neurons, eleven step sizes). For each image its gradation and the three features. Each image of a tiling is compared
with the same neuron's pattern read at the same gradation (a straight line in the logarithm of gradation between the
step sizes made). Record: `artifacts/33977-suite2p/gradation_and_tiling.json`; figures
`gradation_and_tiling-examples.png`, `gradation_and_tiling.png`.
*Seen, gradation* (every neuron's pattern; gradation: literal, natural, featureful; then how far from the screen's
literal in widths; then neurons at half their own level or more):

| step size | gradation | literal | natural | featureful | far | raised |
|---|---|---|---|---|---|---|
| 0.5 | 0.31 | +143 | -7 | +0.3 | 3.1 | 0 |
| 1 | 0.62 | +139 | -1 | +3 | 5.0 | 5 |
| 2 | 1.09 | +131 | +25 | +7 | 7.2 | 41 |
| 4 | 1.67 | +128 | +47 | +8 | 8.7 | 60 |
| 8 | 2.55 | +126 | +60 | +11 | 9.9 | 73 |

A doubling of gradation: natural +24 (10 to 32 by neuron), featureful +3.3, literal -6.
*Seen, tiling* (this tiling less the same neuron's pattern at the same gradation, medians, with 10% and 90% for
natural):

| the type raised at | places | neurons | natural | featureful | literal |
|---|---|---|---|---|---|
| one place (the MEI) | 1 | 539 | +5.8 (-20, +28) | +2.9 | -4.2 |
| every 12th place | 10 | 64 | +4.1 (-7, +21) | +1.1 | -2.3 |
| every 8th place | 24 | 64 | +4.5 (-3, +20) | +0.9 | -1.9 |
| every 6th place | 43 | 64 | +2.2 (-2, +11) | +0.5 | -1.2 |
| a honeycomb, 6 apart | 52 | 64 | +0.6 (-3, +7) | 0.0 | 0.0 |
| every 5th place | 62 | 64 | +0.4 (-3, +7) | -0.1 | +0.1 |
| every 4th place | 98 | 64 | -0.1 (-3, +3) | 0.0 | 0.0 |
| 1 place in 16, at random | 98 | 64 | +2.4 (-15, +16) | +1.3 | -0.6 |
| a honeycomb, 4 apart | 130 | 64 | -0.1 (-3, +2) | 0.0 | -0.1 |
| every 3rd place | 174 | 64 | -0.1 (-2, +2) | 0.0 | -0.1 |
| where the recorded cells are | 232 | 64 | +8.2 (-13, +36) | +0.2 | -3.9 |
| a disc about its place | 314 | 17 | -4.4 (-26, +8) | +1.7 | -1.3 |
| every 2nd place | 392 | 64 | -0.1 (-1, +1) | 0.0 | -0.1 |
| 1 place in 4, at random | 392 | 64 | +1.1 (-9, +11) | +0.8 | -0.6 |

*Seen, in the neural activity.* At the same gradation the MEI raises 10 neurons to half their own level or more and
its neuron to 1.0; the pattern raises 28, and its neuron to about 0.45. How far the activity is from the screen's
literal is the same: 6.5 widths under the MEI, 6.7 under the pattern.
*Seen, neuron by neuron.* A neuron's MEI against its own pattern at gradation 1, across 539 neurons: r 0.41 on
natural, 0.22 literal, 0.13 featureful. The MEI is 13 bits of natural from its own pattern, 17 from another
neuron's; two neurons' patterns are 19 apart.
*Rules out* that tiling moves the measure as gradation does: over a 1,568-fold change in places the median moves 6
bits, and one doubling of gradation moves it 24. *Does not rule out* a small, real effect of the first few tens of
places: one place reads a little more featured than every place on all three features, in the direction of more
gradation, fading by about 50 places. *Does not show* an identity neuron by neuron. Uniform tilings agree with the
pattern to within 3 bits either way from about 50 places; tilings that are not uniform (random spots, the cells'
places, a disc) scatter three to ten times wider.
*An example, marked as one:* the square-grid neuron (9). Along a row of `gradation_and_tiling-examples.png` (10
places to every place) natural is -3, +3, +3, -6, -4 at the lab's step size; +22, +48, +47, +34, +37 at twice; +63,
+74, +71, +70, +70 at four times. Its MEI: +28.
*Leads to* entries 3 and 4.
