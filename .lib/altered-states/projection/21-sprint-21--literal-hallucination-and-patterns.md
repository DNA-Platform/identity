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

**In progress.**
- A slide describing pattern literals with a version of the grid figure, after the atomic feature slide.
- Patterns made at the locations of the recorded cells (*"We probably want to make patterns based on locations of the
  cell right?"*), running on David's box.

**Open, his to say.**
- What the report says of post-DOI spontaneous activity: it reads literal on its own day's map because what images
  drive came down to the spontaneous level after DOI (an image raised a cell 19% above spontaneous before, 2% after).
- Whether the axis words *not literal* and *literal* move to the zero.
- The atomic feature slide still shows the old examples, the first too dark; the ordered candidate is `exemplars.png`
  (the square grid first).
- The classification's pattern classes (slides 20 and 21) are points part of the way between two literals, which no
  image gives; pattern literals are the repair he proposed.
- The three earlier decks have not been read against the definition of a representation.

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
