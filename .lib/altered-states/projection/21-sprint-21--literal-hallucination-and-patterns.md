# Sprint 21 — Literal hallucination and patterns

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `active` (opened as a chapter 2026-11-19; the work began 2026-11-16 with no chapter, which is why its
  state was lost at a context cut). See [Where things stand](#where-things-stand).

---

Read spontaneous neural activity before and after DOI as interpretations of a literal, with QDA; and find whether
patterns are representations the twin generalizes to. One mouse, 33977, Suite2P, the twin before DOI on the
pre-and-spontaneous cells (five seeds, 548 neurons in the space). The paper is the fourth deck,
[literal-hallucination-qda.pdf](../../../src/reports/imaginary-representation/literal-hallucination-qda.pdf).

Doug, 2026-11-19, when I had kept the state in private notes: *"You are not using your .claude library and books like
doing science which you create and organize, to keep track of state"*; *"We designed that. I want you to ue it"*;
*"Yes update books! I told you to use it, not to ask me. If you need permisison you wont use it."*

## What to read first

1. [Doing Science](../doing-science/.cover.md) and [Doing Science on Altered States](../doing-science-on-altered-states/.cover.md).
2. The report's cover, [imaginary-representation](../../../src/reports/imaginary-representation/.cover.md): the deck slide by slide.
3. The analyses' covers: [discriminant-analysis](../../../src/analyses/discriminant-analysis/.cover.md) (the three
   features, the classification) and [spontaneity-and-emptiness](../../../src/analyses/spontaneity-and-emptiness/.cover.md)
   (the MEIs, the patterns, every phase run on David's box).
4. The working notes, [notes.md](../../theory/discrimination-semantics/notes.md) section 16.8 (patterns, in the order
   things were found, his words verbatim), and [the-literal-axis.md](../../theory/discrimination-semantics/the-literal-axis.md).

## The definitions this sprint stands on

- **A representation** is the neural activity the twin gives an image. The twin is published; this is a definition,
  followed as any definition in a paper (*"A representation is objective in the context of a twin"*).
- **A literal** is that neural activity, taken as the objective representation of a stimulus; neural activity is an
  interpretation of it.
- **A pattern literal** is the neural activity the twin gives a pattern (*"The twin is supposed to model image to
  activity so maybe that's what we do. We can use thoes as the patterns to create our pattern literals"*).
- **A stamp is not a representation**: an image made by using the twin as a stamp on an arrangement of my choosing
  does not go beside representations (*"When you use my code to draw mickey mouse with the MEI, will you be confused
  about whether we should refer to it alongside actual representations in this paper?"*).
- **The twin is justified on natural scenes, and the work is to generalize from them** (*"Justified on natural scenes!
  We want generalization based on thsi... Patterns might be essential for representation... and we know
  hallucinations are patterned"*).

## Where things stand

**The literal axis (done, in the deck).** Its zero is the point of not knowing the difference; on the classification
slide and the canonical view only the axis numbers moved, checked pixel by pixel (*"Just change the axis. It always
had a dotted line. It was great. Just axis numnbers"*). The QDA result is unchanged (67 stored arrays identical).
Held out, every sample of pre-DOI spontaneous neural activity is rejected as from the blank screen's literal (-144
bits) and every image-evoked sample accepted as from its image's (+98); that sentence is under the canonical view,
and his note on the dictionary slide.

**Patterns (measured 2026-11-19; pictures in the analysis's `figures/`).** A pattern is the image the lab's MEI recipe
finds when a neuron's type is raised at every spot of the twin's map.
- *The twin generalizes to patterns.* An image passed through the twin, then the metamer of that activity: natural
  test images come back at 0.73, patterns at 0.72, white noise at 0.12 (all reinvoke their activity at 1.00). White
  noise comes back as one faint grid whatever the noise.
- *A pattern is its regularity* (the direction and spacing of what repeats, wherever the dots sit). By that, a
  pattern against the metamer of its activity: 0.94, 56 of 64 at 0.8 or more.
- *The grid does not matter.* On square and honeycomb grids finer than the pattern's own spacing (about 7 pixels) the
  pattern is the same (0.97 to 1.00); at random spots nearly (0.90, 0.81); on coarser grids it becomes the grid's
  (0.61, 0.58). `same-pattern-on-every-grid.png`; Doug: *"Amazing!! It really is meaningful. Put a version of that in
  the paper when describing pattern literals."*
- *Not the neuron's MEI tiled.* Under its own pattern a neuron reaches 0.58 of its level under its own MEI; the piece
  of the pattern at its place is 0.21 like its MEI.
- *A directional effect.* 85% of patterns lie across at the lab's step size where 55% of the MEIs do (68% at four
  times the step size).
- *Not in the recorded cells alone.* Cells with alike MEIs, one a location, do not make the pattern (4% of 548; 23
  rules).
- *The step size.* The pattern's spread equals its MEI's at 1.9 times the lab's step size (1.25 to 2.7 by neuron);
  its ground is darker at every step size. Not settled.
- *Cost.* One step size for all 548 neurons is 16 minutes on David's box, and no change to the code makes it faster
  (measured); the cost is the twin.

**Would spontaneous activity be classified as patterns? (measured 2026-11-19; `shown_images.py classes:<phase>`.)**
Doug: *"show DOI, MEI, pattern and image evoked and natural to see. Can you conclude that they would be classified as
patterns?"* Four classes of literal (the featureless screens', the MEIs' neural activity, the pattern literals, the
natural images'), each sample to the class it is most probable under:

| samples of | patterns at | featureless | MEIs | patterns | natural |
|---|---|---|---|---|---|
| post-DOI spontaneous | the lab's step size | 2% | 25% | 43% | 30% |
| post-DOI spontaneous | 4 times the step size | 12% | 43% | 6% | 39% |
| pre-DOI spontaneous (held out) | the lab's step size | 80% | 6% | 10% | 5% |
| image-evoked, test images (held out) | the lab's step size | 2% | 8% | 4% | 86% |

At the lab's own step size, the published recipe's and the one that makes the MEIs, patterns are the class post-DOI
spontaneous activity most often goes to, by a small margin (0.7 bits over the MEIs, 1.4 over natural images, 5.6
over the featureless screens at the median). At four times the step size it does not hold. So the conclusion rests
on the step size, which is not settled.

**From atomic to uniform, a quick look (2026-11-19; `mei_to_pattern.py`, not in the deck).** Doug: *"MEI to pattern is
great. Atomic to uniform. You could run LDA on MEI versus pattern and then place DOI on it to see where it sits as a
quick analysis to see if it is worth putting in."* LDA (Ledoit-Wolf shrinkage) tells the MEIs' neural activity from
the pattern literals held out (98% right at the lab's step size, 100% at four times). On its axis (0 the MEIs, 1 the
patterns), medians: pre-DOI spontaneous 1.63 and post-DOI 1.55 at the lab's step size, -0.57 and 0.30 at four times;
but the featureless screens sit at the pattern end at the lab's step size (1.15) and the natural scenes at four times
(1.04), and recorded samples are spread several times wider than the whole distance from MEI to pattern. So the axis
is not reading atomic against uniform, and I told him it is not worth a slide as it stands; the four-class result
above says more.

**In the deck, and shown to him.**
- The deck is 24 slides. Slide 18, replaced at his word (*"Replace this. You can show a few exemplary examples
  here, define them as the pattern literal and explain how they are a natural extension of the MEI. And then use the
  next slide to express the may in which they are unique to a neuron and its MEI"*): six exemplary pairs, the square
  grid first, with the pattern literal defined. Slide 19: a pattern is unique to a neuron and its most exciting
  image (the grid figure; another neuron's pattern 0.38; its own pattern excites a neuron more than 97% of the
  others' do). Slide 21, new (*"Don't we want a slide after this shwowing patterns too"*): the pattern literals on
  the canonical view. The classification slide is page 23 and unchanged.
- Patterns made where the recorded cells are (*"We probably want to make patterns based on locations of the cell
  right?"*; `tiled-cells`, 232 spots): a column of that figure.
- Three views of the space, in his order (`artifacts/patterns/figures/space-1..3`): what is discriminated and the
  literals; then the MEIs and the patterns; then post-DOI spontaneous. Not in the deck until he has seen them.

**In this space a pattern is an MEI (Doug, 2026-11-19, of slides 20 and 21: *"Your patterns are the MEIs. No
difference in this space"*).** He is right. Medians, bits (literal, natural, featureful): the MEIs +129, +21, +9;
the patterns at the lab's step size +139, -1, +3; at four times it +128, +47, +8. The MEIs sit inside the patterns'
own range, and what moves a pattern is the step size, which is what places an MEI too: how far its neural activity
stands from the blank screen's. The space does not read one spot against every spot. The four-class result agrees
(patterns over MEIs for post-DOI spontaneous: 0.7 bits). They do differ in the neural activity itself: LDA on the 548
neurons tells an MEI from a pattern 98% to 100% of the time held out. Slide 21's title says more than this; not
changed without his word.

**The step sizes that correspond, all 548 neurons, eleven step sizes (2026-11-19; `patterned_figures.corresponding`,
`corresponding.npz`; runs `0556-tiled-steps` and `0737-tiled-steps-beyond` on David's box, both home).** Doug: *"Find
step sizes that correspond, and use those. Talk about pattern intensity on the step size slide."*
- A pattern's intensity is the spread of its grey level at the neuron's place. Over its MEI's: 0.62 at the lab's step
  size, 1.09 at twice, 1.67 at four times (0.31 at half, 2.55 at eight times). Equal at 1.78 times the lab's (1.05
  to 3.35).
- 539 of 548 neurons have a step size that corresponds among the eleven made (0.5 to 8 times the lab's); over all
  548 the intensity at the step size used is 1.00 of the MEI's (0.92 to 1.08). Nine never get there by eight times,
  where patterns reach the screen's black and white; they are used at eight times. Not worth a larger step size.
- In the space: +133, +14, +6 bits (literal, natural, featureful) beside the MEIs' +129, +21, +9. Not told apart.
- As a class: post-DOI spontaneous samples go to the patterns for 35%, natural images 30%, MEIs 29%, featureless
  screens 6% (the patterns over the MEIs by 0.15 bits at the median). Pre-DOI spontaneous featureless 85%;
  image-evoked natural 82%. Not a conclusion that it is classified as patterns. The four step sizes beyond changed
  none of this (the 82 neurons they were for were already near: 1.11 and 0.87 of their MEI's intensity).
- The deck (25 slides) is built from this: 18 the pattern literal, 19 the step size and pattern intensity (seven
  columns, the lab's to four times), 20 unique to a neuron, 21 where the MEIs sit, 22 where the patterns sit, 24 the
  classification slide unchanged. The three views of the space (`artifacts/patterns/figures/space-1..3`) use the
  corresponding patterns too; he has not seen them.
- To build: `literal-hallucination-figures.py` draws the figures and writes numbers.json; `literal-hallucination-deck.py`
  builds the deck from them. Two scripts; the first alone leaves the old deck.
- The grid figure (slide 20) is still the 64 explored neurons at twice the lab's step size.

**His idea: gradation and tiling (Doug, 2026-11-19, on seeing the pattern literals sit where the MEIs do).** In his
words, both messages whole:

> *"I thought about this - you may have foudn a powerful identity. Can you prove that an MEI and one of your completed
> patterns under some equivalence where one is like the periodic completion of the other with the property that the
> twin produces activity pattern that returns a metamer with the pattern has the property of being approximately the
> same collection across neirons?!? Does that work for intermediary patterns? That is an amazing result! We found a
> periodic inveriant space? is that true in general or just in our space?"*

> *"You are going to want to say something more interesting than step size. Perhaps a pattern is something like a
> feature, and you can say that gradation seems to increase featurelessness, but tiling doesn't increase the change
> our measuer of feature. Can that be? That is amazong"*

Then, when I started computing without the books: *"I want you to read that. I want you to use the library, and I want
you to run long things in backfround and I want you to resume."*

My reading, said to him and not yet confirmed. The MEI and the pattern are two images of one type: the MEI is the
type at one place, the pattern the type at every place (his own distinction of 2026-11-07, *"I am interested in the
idea of MEI versus type. That is a great semantic distinction"*). The equivalence is periodic completion, and it is
admitted because the twin gives the pattern back (through the twin and back, 0.94 by regularity). The claim: our
measure of feature (the three features, read on the neural activity the twin gives the image) is the same for the
two, neuron by neuron and for everything between (a few copies, a disc), so the space is invariant to tiling; while
gradation, how strongly the feature stands in the image, moves it, and less of it reads more featureless. A pattern
is then like a feature: it has the features of its atomic feature and no more (his slide of 2026-11-18: *"Is a
pattern featureless? No, it has features but not a lot because it is like an atomic feature"*).

What is in hand before the test: gradation moves the measure (the same pattern reads natural -1 bits at the lab's
step size, +14 where its intensity equals its MEI's, +47 at four times); tiling at equal gradation does not for the
two ends (one place +21, every place +14); in the neural activity itself the two are told apart (LDA 98 to 100%), so
the invariance is the space's, not the activity's.

The test (`discriminant-analysis/gradation_and_tiling.py`; no GPU, everything is stored): one type at one place (the
MEI), in a disc, at every 12th, 8th, 6th and 4th place, at random spots, on a honeycomb, at every place; for each
the gradation (the spread of grey level at the neuron's place over its MEI's) and the three features. Asked: at one
gradation, do the features change with the tiling; at one tiling, with the gradation; and neuron by neuron, does a
neuron's pattern sit where its own MEI does. Results go under this block.

**To do: redo every pattern scatter (Doug, 2026-11-19, of slide 22, "At the step size that corresponds, pattern
literals sit where the most exciting images do").** *"Jot down tha twe need to redo all pattern scatters, but note
that this one is especially bad. We may need to just show MEI and patterns superimpose first, then show they can be
made to move to the left, and then show that that is where the DOI activity is!"*
- Every scatter with patterns in it: slide 22 (`pattern-literals-view.png`, the worst: the patterns are a strip
  pressed against the natural literals' line, with five other groups and their labels around it, and the MEIs it
  is compared with are not on it), slide 21 (`patterns-view.png`), and the three views
  (`artifacts/patterns/figures/space-1..3`).
- The order he proposes, three figures: (1) the MEIs and the patterns alone, superimposed; (2) the same, made to
  move to the left; (3) that is where post-DOI spontaneous neural activity is.
- Not known yet, and not to be guessed: what makes them move to the left. Measured so far, medians (literal,
  natural): patterns at the lab's step size +139, -1; where intensity equals the MEI's +133, +14; at four times
  +128, +47. So more gradation moves them a little left and up. Post-DOI spontaneous is at +70, +11. The gradation
  and tiling test says which operation moves which way; ask him what he means by made to move before drawing (2).
- Nothing drawn until the test is in and he has said what (2) is. Slides are changed at his word only.

**On David's box now (2026-11-19).** `run-20261119-0844-tiled-arranged-every` (launched 08:44; ten grids of
`patterned.EVERY_GRID` at twice the lab's step size, 16 minutes each, about 2 hours 40): every neuron's pattern on
every grid. When home (fetch its branch, cherry-pick with theirs, sync), `same_on_every_grid` reads every neuron's
files by itself (`_grids_whose`: all ten or the 64's); rerun the figures script and the deck script; slide 20's
numbers then come from all 548 (its record says how many neurons it read); look at slide 20 and the frozen slide
check; then the covers, the notes and this chapter. The watcher is the scratchpad's `grids_home.sh`; if the session
is cut, these steps are the whole of it.

**Open, his to say.**
- What the report says of post-DOI spontaneous activity: it reads literal on its own day's map because what images
  drive came down to the spontaneous level after DOI (an image raised a cell 19% above spontaneous before, 2% after).
- Whether the axis words *not literal* and *literal* move to the zero.
- The classification's pattern classes (slides 23 and 24) are points part of the way between two literals, which no
  image gives; pattern literals are the repair he proposed.
- The three earlier decks have not been read against the definition of a representation.
- Whether the three views of the space and the four-class result go in the deck (he has not seen the views).
- Brightness: at every step size the pattern's ground is darker than its MEI's (25 to 43 grey levels). No step size
  matches it; whether it matters is his to say.

## Wrong turns, so they are not taken again

- I kept this sprint's state out of the books. A context cut then left me with a summary and none of the project.
- I treated the definition of a representation as a rule of his, and answered "does your pattern have corresponding
  neural activity" with "yes, any image does", as if that made it meaningful.
- I called the patterns "not justified" because the twin was trained on natural scenes. That is the question
  (generalization), not a verdict; my own numbers did not say what I said (the twin matches recorded activity at 0.54
  on the test images that repeat most and 0.55 on the rest).
- I handed him settled things as findings: that the twin represents only within the recorded neurons' receptive
  fields, and that it has no eye position (the oldest result: the behaviour was too erratic for the model to
  converge with it; mice do not saccade as we do).
- I compared pattern and metamer dot for dot. His correction: define the pattern by its regularity.
- I placed MEIs on grids coarser than the pattern and read the result as a pattern; it is the grid's.
- I told him my code was eight times slower than the pipeline's from a number measured on another twin.
- I measured in our space before looking (*"I want to look at what the patterns are! ... We use our space last"*).
