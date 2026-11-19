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

*(edited as the entries come in; last edited 2026-11-19, after entry 7)*

- **The invariances of the space, by operation** (natural, medians over 548 neurons). Moving an image up or down 20
  grey levels: -1 to -2 bits. Extent, one place against every place at the same ground and gradation: +8 (and 0
  once the grid is fine). Which neuron's type: none that the space can tell (entry 6). Magnitude, a doubling: +18 to
  +21. So for an image shown to the twin the three features read one thing, how far its representation stands from
  featureless: 93% of their variance over the whole plane is one direction.
- **The fixed point of tiling.** In the image and in the measure together, when the grid is finer than about 0.6 of
  the neuron's own pattern spacing: about two places a period (entry 7). Coarser, the image becomes the grid's and
  the reading is that of one place.
- **The identity, and its limit.** In the space an MEI is its pattern at about 1.4 times the magnitude, the ground
  free, to within 5 bits. But it is another neuron's pattern just as nearly (5.0 against 4.7; its own nearer 53%
  of the time). The space identifies every feature with every pattern of one magnitude, not an MEI with its own.
- **In the neural activity itself: no identity found.** No point of the ground and gradation plane brings a
  pattern's activity to its MEI's (5.5 widths at the nearest, the MEI being 6.5 from the screen). With every neuron
  moved to the MEI's place the MEI's activity correlates 0.61 with the pattern literal (0.39 for another neuron's):
  place explains part. Pattern literals of different neurons correlate 0.59: a large common part, not looked into.
- **Open.** What the common part of the pattern literals is. Whether the pattern stays put under repeated passes
  through the twin (one pass: 0.94). Whether adding different features moves the measure where adding copies does
  not. Why two places a period. Whether recorded activity, which does use more of the space, tells types apart.
- **Next.** His word on what to pursue. My candidates, in order: the common part of the pattern literals (it may be
  the twin's own periodic response, the faint grid white noise comes back as); repeated passes through the twin.

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

### 3. Every neuron on every grid (2026-11-19, 11:25)

*Asked.* Entry 2's middle rows were 64 neurons. Do they hold for all 548?
*Done.* Run `0844-tiled-arranged-every` on David's box (phase `tiled-arranged-every`: ten grids of
`patterned.EVERY_GRID` at twice the lab's step size, every neuron, 2 hours 40); `gradation_and_tiling.py` again, which
reads every neuron's grid files once all ten are there.
*Seen* (natural, this tiling less the same neuron's pattern at the same gradation; median, 10%, 90%; 548 neurons
unless said):

| the type raised at | places | natural |
|---|---|---|
| one place (the MEI), 539 neurons | 1 | +5.8 (-20, +28) |
| every 12th place | 10 | +5.2 (-8, +20) |
| every 8th place | 24 | +5.6 (-4, +21) |
| every 6th place, 64 neurons | 43 | +2.2 (-2, +11) |
| a honeycomb, 6 apart | 52 | +0.5 (-4, +6) |
| every 5th place | 62 | +0.5 (-4, +6) |
| every 4th place, 64 neurons | 98 | -0.1 (-3, +3) |
| 1 place in 16, at random | 98 | +2.7 (-9, +17) |
| a honeycomb, 4 apart | 130 | 0.0 (-2, +2) |
| every 3rd place | 174 | 0.0 (-3, +2) |
| where the recorded cells are | 232 | +10.1 (-12, +32) |
| every 2nd place | 392 | +0.1 (-1, +2) |
| 1 place in 4, at random | 392 | +2.1 (-5, +11) |

*Reading.* For the measure the fixed point lies between every 8th place (+5.6) and every 6th or 5th (+2.2, +0.5):
the patterns' own spacing, about 7 pixels. Below it, more places change nothing (within 3 bits either way for a
neuron). Above it the reading is that of one place, about +5. So there are two plateaus, one place to about 24
places and about 50 places on, with the step where the grid becomes finer than the pattern. Tilings that are not
uniform stay off the fixed point however many places they have (random 1 in 4: 392 places, +2.1 and four times the
scatter; the cells' places: +10).
*Does not show* that the step is at each neuron's own spacing; that needs the spacing neuron by neuron (next).

### 4. The neurons moved to the MEI's place (2026-11-19, 11:25)

*Asked* (his "is that true in general or just in our space?"). By the twin's make (a neuron is a type at a place on
one shared map), if copies do not interfere, a neuron under the pattern answers as it would under the MEI were it
moved to the MEI's place. Is the pattern literal the MEI's neural activity with place taken away?
*Done.* Phase `moved` (`patterned.moved`, `painting.moved_to`; run `1121-moved`, half a second on the GPU): under
each neuron's MEI, every neuron's type read at that neuron's place. Checks: its diagonal against the MEI's own
activation, 2e-5; every neuron at its own place against the stored activity, 3e-5. Compared with the pattern
literals at the step sizes that correspond, as levels (0 under the grey screen, 1 under a neuron's own MEI), by the
correlation across the other 547 neurons (scratchpad `taken_away.py`; not yet a module).
*Seen* (median, 10%, 90% over 548 neurons). The pattern literal against: the MEI's activity with every neuron
moved to its place, 0.61 (0.39, 0.76); the MEI's ordinary activity, 0.54 (0.29, 0.69); another neuron's moved
activity, 0.39 (0.08, 0.67); another neuron's pattern literal, 0.59 (-0.03, 0.89). A pattern's level for one level
of the moved activity: 0.60. Neurons at half their own level or more: 27 under the pattern, 22 moved, 10 ordinary.
Its own moved activity is the best match among all 548 for 3% of neurons (median rank 54). In the space the moved
activity reads literal +124, natural +45, featureful +11, 8.2 widths from the screen; the MEI +129, +22, +8, 6.5
widths; the pattern literal +133, +14, +6, 6.7 widths.
*Rules out* the identity in its simple form: the pattern literal is not the MEI's activity with place taken away
(0.61, and its own is seldom the best match). *Does not rule out* that place explains part: moved is nearer than
ordinary (0.61 against 0.54) and nearer than another neuron's (0.39).
*Noticed.* Two different neurons' pattern literals are as alike as a pattern literal and its own moved activity
(0.59). Patterns share a large common part in the activity; what is one neuron's own is the smaller part. Not
looked into yet.

### 5. The free parameters: up and down, and magnitude (2026-11-19, 11:28, running)

Doug: *"Identites are things that don't change under composition with certain operations. You are showing tha twe
identified a space that might be invariant under pattern extent while not invariant under contrast? Amazing."* And:
*"REmember there are free parameters to explore. How do you make sure the MEI and its tiling are the same? You can
move up and down and increase the magnitude linearly and multiplicatively so there is a space to look for the
identity of the MEI / pattern."*
*My reading* (mine). Until now a pattern was matched to its MEI on one number, through the recipe's step size, and
its ground stayed darker than the MEI's at every step size (23 to 45 grey levels). The two operations that do not
change what an image is a picture of are moving its grey level up and down and multiplying its contrast. So put both
images at the same ground and the same gradation, exactly, by those two operations alone, over a plane of grounds
and gradations, and look for where in the plane the MEI and its pattern are the same, in the space and in the
activity.
*Done.* Phase `graded` (`patterned.graded`; run `1128-graded`): for every neuron its MEI, its pattern at the step
size that corresponds and its pattern at the lab's step size, each at grounds -40, -20, 0, +20, +40 grey levels from
the MEI's own ground and gradations 0.35, 0.5, 0.71, 1, 1.41, 2, 2.83 (grey level -> ground + gain x (grey level -
its own ground), then the screen's black and white); each through the twin. Check built in: the MEI at ground 0 and
gradation 1 is the MEI.
*To read when home:* in the plane, the three features of the MEI and of the pattern at each point (is the space
invariant to extent everywhere in the plane, or along a line?); what moving up and down does to the measure (not yet
known at all); whether a pattern made at the lab's step size and multiplied up is the pattern made at a larger step
size (is the step size only contrast?); and, in the activity, where the MEI and the pattern are nearest.

*Seen (entry 5, 11:34; `discriminant-analysis/free_parameters.py`, `free_parameters.json`).* The check passes (the MEI
at ground 0 and gradation 1 against its stored activity: 2.5e-5). Pixels at black or white: 2% for the MEI at the
largest gradation, under 1% for patterns at the median (18% for a tenth of neurons at the extreme corners).
Natural, medians over 548 neurons (rows: ground, grey levels from the MEI's own; columns: gradation):

| one place (the MEI) | 0.35 | 0.5 | 0.71 | 1 | 1.41 | 2 | 2.83 |
|---|---|---|---|---|---|---|---|
| -40 | -2 | +1 | +8 | +21 | +36 | +45 | +52 |
| -20 | -4 | +1 | +9 | +23 | +39 | +48 | +55 |
| 0 | -2 | +1 | +8 | +22 | +38 | +50 | +57 |
| +20 | -1 | +2 | +8 | +18 | +35 | +49 | +57 |
| +40 | 0 | +1 | +6 | +16 | +31 | +45 | +54 |

| every place (the pattern) | 0.35 | 0.5 | 0.71 | 1 | 1.41 | 2 | 2.83 |
|---|---|---|---|---|---|---|---|
| -40 | -3 | -1 | +6 | +18 | +35 | +51 | +57 |
| -20 | -5 | -1 | +5 | +18 | +34 | +47 | +55 |
| 0 | -3 | -1 | +4 | +14 | +27 | +40 | +51 |
| +20 | -1 | 0 | +3 | +11 | +23 | +35 | +46 |
| +40 | -1 | +1 | +3 | +9 | +19 | +31 | +41 |

- *Up and down* (20 grey levels of ground, at gradation 1): natural -0.8 (MEI), -2.2 (pattern); literal +1.4, +1.2;
  featureful -0.5, -0.4. *Magnitude* (a doubling, at ground 0): natural +21.3 (MEI), +18.5 (pattern); literal -6.4,
  -4.2; featureful +3.8, +2.5. So the space is nearly invariant to moving up and down and not to magnitude. Why up
  and down does so little: featureless is a family of screens at every grey level (the 52 walls and the middle
  grey), and natural is read against the nearest. How far the activity is from the middle grey screen's literal
  does change with ground (the MEI at gradation 0.35: 6.5 widths at ground -40, 2.9 at 0, 2.1 at +20).
- *Extent* (one place less every place at the same ground and gradation): natural +8.1 at ground 0, gradation 1
  (-14 to +28 by neuron); +3 to +5 at darker grounds; about 0 at gradations of 0.5 and under; +10 to +13 at brighter
  grounds and larger gradations. Literal -5; featureful +3. With the ground matched the two are a little further
  apart than entry 2 found with the pattern on its own darker ground (+5.8), because a pattern reads less natural
  on a brighter ground.
- *Is the step size only contrast?* The pattern made at the lab's step size and multiplied up, less the pattern
  made at the larger step size, at the same point: natural -2.5 at ground 0 and gradation 1 (-18 to +2 by neuron),
  -3.6 at 1.41; literal +1; featureful 0. Mostly yes. A pattern made at a larger step size is a few bits more
  natural than a fainter one multiplied up.
- *Where they are the same, in the space.* The point of each neuron's pattern's plane nearest its MEI as it is
  (all three features): 15.9 bits apart at ground 0 and gradation 1; 4.7 at the nearest point (2.1 to 10.4). The
  nearest points are at every ground about equally (137, 98, 135, 96, 82 neurons) and at gradations of 1 to 2 for
  most (115, 133, 112). So: the MEI is its pattern at about 1.4 times the magnitude, the ground free.
- *Where they are nearest, in the neural activity* (widths of image-evoked's variation): 6.1 at ground 0 and
  gradation 1; 5.5 at the nearest point, which for most neurons is the faintest pattern at ground 0; another
  neuron's pattern gets to 6.0; the MEI is 6.5 from the screen's literal. There is no point of the plane where the
  activity of the two is the same.

*Rules out* that matching the ground is what was missing (it changes little). *Establishes* the invariances by
operation.

### 6. Does the space tell one neuron's pattern from another's? (2026-11-19, 11:36)

*Asked.* Entry 5 brings a pattern within 5 bits of its MEI. Is that its own pattern's doing?
*Done.* The same nearest-point search with another neuron's pattern's plane (four different others a neuron); the
variance of the three features over every image of the plane; from `free_parameters.npz`, a few lines, not yet in
the module.
*Seen.* The MEI to its own pattern's plane: 4.7 bits (2.1 to 10.4). To another neuron's: 5.0 (2.2 to 12.3). Its own
is the nearer in 53% of comparisons. To another neuron's MEI's plane: 4.9. Over every image of both kinds at every
ground and gradation, 93% of the variance of the three features lies on one direction (literal -0.25, natural +0.96,
featureful +0.15). At one ground, natural and the distance from the screen's literal correlate at 0.92.
*Rules out* that the identity found in the space is between an MEI and its own pattern. *What it is:* for an image
shown to the twin the three features read one thing, how far its representation stands from featureless. That is
invariant to moving up and down, nearly to extent, and to which neuron's type; it is not invariant to magnitude.
The space identifies every feature with every pattern of the same magnitude.
*Does not rule out* that recorded activity uses more of the space (it does: image-evoked activity is at +280
featureful where every literal is near 0); this entry is about literals only.

### 7. The fixed point is at two places a period (2026-11-19, 11:33)

*Asked.* Is tiling's fixed point at each neuron's own pattern spacing?
*Done.* `gradation_and_tiling.py spacing` (`own_spacing`; `tiling_and_own_spacing.json`): every neuron's type on
square grids of spacing 2, 3, 5, 8, 12 places against its pattern at every place, twice the lab's step size: how
alike the two images are in regularity, and the features' difference at the same gradation; by the grid's spacing
over the pattern's own spacing (its strongest spatial frequency among spacings of 14 pixels or less).
*Seen.* The patterns' own spacing: 6.6 pixels (6.0 to 13.9; 57% between 5 and 7, 38% over 9). By grid: every 2nd
place 1.00 alike, every 3rd 1.00, every 5th 0.98, every 8th 0.66, every 12th 0.57. By the grid's spacing over the
pattern's own:

| grid spacing over own spacing | alike in regularity | natural, bits from the pattern's |
|---|---|---|
| under 0.3 | 1.00 | 0.6 |
| 0.3 to 0.45 | 1.00 | 0.9 |
| 0.45 to 0.6 | 0.99 | 1.5 |
| 0.6 to 0.75 | 0.87 | 5.4 |
| 0.75 to 0.9 | 0.93 | 3.2 |
| 0.9 to 1.05 | 0.76 | 8.0 |
| 1.05 to 1.25 | 0.69 | 6.4 |
| 1.25 to 1.5 | 0.56 | 7.8 |
| 1.5 to 2 | 0.46 | 8.6 |

On one grid, neurons with a longer own spacing stay their pattern more (every 8th place: 0.59 for the shorter half,
0.75 for the longer; r 0.30).
*Reading.* The image and the measure reach the fixed point together, when the grid is finer than about 0.6 of the
pattern's own spacing: about two places a period. This one is a neuron's own: it is set by its pattern's spacing.
*Does not show* why two a period. It is the sampling rate that fixes a periodic image (Nyquist), which may be all
it is; not derived.
