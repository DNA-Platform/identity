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

*(edited as the entries come in; last edited 2026-11-19, after entry 10)*

- **The invariances of the space, by operation** (natural, medians over 548 neurons). Moving an image up or down 20
  grey levels: -1 for an MEI at any magnitude; for a pattern -2 at the MEI's magnitude and -4 at 2.8 times it (a
  pattern is invariant to ground only while faint). Extent, one place against every place at the same ground and gradation: +8 (and 0
  once the grid is fine). Which neuron's type: none that the space can tell (entry 6). Magnitude, a doubling: +18 to
  +21. So for an image shown to the twin the three features read one thing, how far its representation stands from
  featureless: 93% of their variance over the whole plane is one direction.
- **The fixed point of tiling.** In the image and in the measure together, when the grid is finer than about 0.6 of
  the neuron's own pattern spacing: about two places a period (entry 7). Coarser, the image becomes the grid's and
  the reading is that of one place.
- **The identity, and its limit.** In the space an MEI is its pattern at about 1.4 times the magnitude, the ground
  free, to within 5 bits. But it is another neuron's pattern just as nearly (5.0 against 4.7; its own nearer 53%
  of the time). The space identifies every feature with every pattern of one magnitude, not an MEI with its own.
- **In the neural activity itself: a link that is the neuron's own, not an identity.** No point of the ground and
  gradation plane brings a pattern's activity to its MEI's (5.5 widths at the nearest, the MEI being 6.5 from the
  screen). Two thirds of a pattern literal is common to every pattern and is not about patterns: it is how readily
  each cell is driven by anything, natural images the same (entry 9). What is left is the neuron's own: it
  correlates 0.55 with its MEI's activity when every neuron is moved over about a period around the MEI's place,
  with the right scale, and 0.02 with another neuron's (entry 10). So the activity carries the type; the three
  features do not read it.
- **Open.** Whether summing the moved readings over the pattern's lattice closes the rest (entry 10's reading).
  Whether the pattern stays put under repeated passes through the twin (one pass: 0.94). Whether adding different
  features moves the measure where adding copies does not. Why two places a period. Whether recorded activity,
  which does use more of the space, tells types apart.
- **Next.** His word on what to pursue. My candidates, in order: the lattice sum (a small job on the box); repeated
  passes through the twin.

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

*Corrected on looking at the figure (`free_parameters.png`, 11:40).* I had said the space is nearly invariant to
moving up and down. For the MEI it is: its five lines lie on one another at every gradation. For the pattern it is
only while the pattern is faint: its five lines fan out as magnitude grows, the darker ground the more natural (at
gradation 2.83: +57 at 40 grey levels darker, +41 at 40 brighter; 4 bits for 20 grey levels, where the MEI moves 1).
It is not the screen's limits: the patterns' gradation as made is the gradation asked (2.79 to 2.83 at every
ground). The MEIs' is not at the two largest (1.9 for 2, 2.5 for 2.83: their peaks reach black and white), so the
MEI's last two points sit a little left of where they are drawn.
*A reading of his "linearly and multiplicatively"* (mine, not confirmed). Magnitude can be counted in grey levels
(what I did: the spread at the neuron's place) or as a ratio to the ground. If the space read the ratio alone, 40
grey levels of ground on the MEIs' ground of 112 would move natural by about +13 and -9 bits at gradation 1; the
pattern moves +5 and -5, the MEI 0 and -6. So the space reads magnitude nearer the first way than the second, and
the pattern partly the second. Not pursued.

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

### 8. Two neurons' patterns share half of what repeats (2026-11-19, 11:45)

*Asked.* Rebuilding slide 20 from all 548 changed one number: another neuron's pattern, alike in regularity, 0.51
where the 64 gave 0.38. Is 0.51 the population's, or an effect of comparing each neuron with the next in the list?
*Done.* The correlation of amplitude spectra (`patterned_figures._regularity`) between every pair of the 548
patterns at twice the lab's step size; a few lines, not in a module.
*Seen.* The next neuron in the list: 0.51 (0.15 to 0.90). Every pair of different neurons: 0.51 (0.15 to 0.87). The
same. A neuron's own pattern on another fine grid: 1.00.
*Reading.* It is the population's. Half of what repeats in a pattern (its directions and spacings) is common to
two neurons at the median, and a tenth of pairs are the same pattern for this measure. With entry 4 (pattern
literals of different neurons correlate 0.59) this says the same thing twice, once in the image and once in the
activity: patterns have a large common part. *Leads to* the open question at the top: what the common part is.

### 9. The common part of the pattern literals (2026-11-19, 11:44)

*Asked.* Entry 4: two neurons' pattern literals correlate 0.59. What is common to them, and is what is left a
neuron's own?
*Done.* `gradation_and_tiling.py moved` (`place_taken_away`, `place_taken_away.json`). A set's common part is its
mean over the neurons' images, one level a cell. It is compared with the cells' mean level under the natural test
images and under white noise (phase `through-and-back`); every comparison of entry 4 is redone with each set's own
common part taken away.
*Seen.* The common part holds 0.67 of the pattern literals' sum of squares. A cell's mean level over every pattern is
0.18 of its level under its own MEI (0.02 to 0.33 over cells); under the natural test images it is also 0.18 (0.03
to 0.30). Over cells the common part correlates 0.76 with the mean level under the natural test images, 0.55 with
white noise, 0.85 with the mean level under every MEI. With the common parts taken away, the pattern literal
against its MEI's activity with every neuron moved to its place: 0.43 (0.15 to 0.65); against the MEI's ordinary
activity: 0.30; against another neuron's moved activity: 0.01 (-0.32 to 0.33); against another neuron's pattern
literal: 0.02. Its own moved activity is the most alike of all 548 for 6% of neurons; the median rank of its own is
25.
*Reading.* The common part is not about patterns. It is how readily each cell is driven by anything, the same for
patterns as for natural images. What is left of a pattern literal is the neuron's own: related to its own MEI
(0.43), unrelated to another's (0.01). So in the neural activity there is a link between an MEI and its own
pattern, specific to the neuron. It is not an identity.
*Rules out* that the likeness of pattern literals to one another says patterns are one thing. *Rules out* that the
space's blindness to type (entry 6) is the activity's: the activity carries the type; the three features do not read it.

### 10. The neurons moved over a period about the MEI (2026-11-19, 11:47)

*Asked.* Under a pattern a neuron sits at any phase of what repeats; entry 4 moved every neuron to the MEI's centre
alone. Does moving them over a disc about it bring the MEI's activity nearer the pattern literal?
*Done.* Phase `moved` again (run `1145-moved-about`, under a second): every type's mean answer over a disc of places
about the MEI's own place, at radii 1.5, 2.5, 3.5, 5 and 7 places (`patterned.ABOUT`; from the map of every type at
every place). Check: the nearest place of the map against the exact reading at the place, r 0.97. Read by
`place_taken_away`.
*Seen* (the pattern literal against the moved activity; r with the common part, r without, the pattern's level for
one level of it, the neuron's own level in it):

| every neuron moved | with | without | slope | own level |
|---|---|---|---|---|
| to the MEI's place | 0.61 | 0.43 | 0.60 | 1.00 |
| over radius 2.5 | 0.61 | 0.44 | 0.64 | 0.82 |
| over radius 3.5 | 0.64 | 0.46 | 0.69 | 0.75 |
| over radius 5 | 0.67 | 0.50 | 0.80 | 0.63 |
| over radius 7 | 0.71 | 0.55 | 0.95 | 0.49 |

Another neuron's stays at 0.01 to 0.03. Its own is first for 7% (median rank 19 of 548). Patterns made at a larger
step size link better (scratchpad `about.py`, not in the module): without the common part, 0.50 at the lab's step
size, 0.56 at twice, 0.59 at four times (own first for 11%, median rank 12).
*Reading.* Over about a period (the patterns' spacing is 6.6 pixels, so radius 7 is a disc two periods across) the
MEI's activity with place taken away has the pattern literal's scale (slope 0.95; the neuron's own level 0.49,
where under its pattern it is 0.39 to 0.45) and correlates 0.71 with it, 0.55 for the neuron's own part. It was
still rising at the largest radius tried.
*Does not show* an identity: half the variance of the neuron's own part is not explained. What is missing may be
that one MEI is not a tiling: a neuron moved a period away sees the MEI's edge, not the next copy. The fair
comparison sums the moved readings over the lattice of the pattern; not done.
