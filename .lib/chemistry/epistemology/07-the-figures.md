# The Figures

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

*The design of the [Lab](02-the-lab.md) case that shows [the formula](../composition/12-the-formula.md), written out because the case took four attempts and the first three failed for reasons worth keeping. It is one case, [`figures.tsx`](../../package/app/src/sections/formula/figures.tsx): six classes, two drawings each, twelve in all, and two dials that reach every one of them.*

## The instrument

**A Lab case is an instrument, not an illustration.** It has to make a mechanism *operable* — something the reader turns, and the turning has to tell them what the mechanism does. The case that came before this one drew four coloured tiles that differed only in their data, and it failed as an instrument for a reason that had nothing to do with taste: **there was nothing to turn that changed anything a reader could not have predicted.**

**So this case is built on three surfaces and no more.** A word inside a tag, which selects a class. A `look` **name** — `reading` or `field` — which selects one of that class's two drawings, and which every class answers to, so one token reaches all six. And two dials, `hue` and `shape`, which are ordinary props. Everything on the screen is a consequence of those four values, and the written line at the top of the case prints them back — `<Fig hue={208} shape={46} look="field">neuron</Fig>` — so the reader always knows exactly which four produced what they are seeing.

**The layout is the argument.** The stage is large and on the left; the six tiles sit in a block beside it, each one live rather than a thumbnail. A reader can watch a dial move all seven drawings at once — six small and one large — which is the only way to see that the dials are *shared* and the drawings are *not*. Putting the tiles beneath the stage, which is where they started, pushed the stage off the bottom of the screen and destroyed exactly that simultaneity.

**Nothing in the case is decoration and nothing is generic.** There is no shared chart helper, no palette module, no configuration object. Each class computes its own geometry and its own colour from `$hue` and `$shape` and knows nothing about the other five. That is the point being demonstrated: the base hands down two raw numbers and says nothing about what they mean, and six classes disagree about their meaning in six ways.

## The six, and why each pair belongs together

**Every class carries two drawings and they are named the same two words.** A ***reading*** is what you take; a ***field*** is what you take it from. The pair is never a large version and a small one — it is *the same subject twice, under two different questions* — and because all six share the vocabulary, one token flips the whole row.

***And `shape` moves geometry, never palette.*** *Two figures used to put the dial into saturation and into lightness; at low values both went muddy, and a dial that drains the colour out of a drawing is a dial nobody wants to move.* **The colour is the class's; the dial is the data's.**

### stars — a blue band

**`field` scatters twenty-eight points and joins every pair closer than a threshold**, which makes a **proximity graph**: what you read is *which point is near which*. **`reading` drops the same points onto a baseline with a hairline each**, so what you read is *how high each one stands*. The data is identical; the question is not.

**The scatter is deliberately not a wave** — the positions come off the golden angle beaten against a second incommensurate frequency, because an earlier version placed them on a single sinusoid and every value of `shape` looked like the same curve slid sideways. **The x positions are pinned**, so the dial rewires the graph — edges appear and vanish as points cross the distance threshold — rather than sliding the whole scatter, which read as re-seeding.

### neuron — an amber band

***Hindmarsh–Rose, the minimal bursting neuron.*** Two fast variables generate spikes; a third, slow one loads up, silences the cell and releases it. **`reading` is the voltage over time** — clusters of spikes separated by silences, each cluster visibly decaying as the slow current accumulates. **`field` is the fast subsystem's phase plane**, with the slow variable frozen. *The two readings a neuroscientist actually takes: what it did, and what it was going to do.*

**`shape` is the injected current**, so the dial walks the cell through real physiology — quiescent, then bursts of two, three, four spikes, then tonic. **The slow variable is frozen MID-BURST and not at rest**, because freezing it while the cell is silent leaves a laminar plane with nothing circulating in it and the picture dies. *That was predicted as the one real risk before the figure was built, and it was the one that had to be handled.*

**The field is drawn with three hollow chevrons to an arrow**, growing toward the tip and stepping through a slice of the wheel as they go, with **size carrying speed** — so the nullclines appear as seams of small arrows and no line has to be drawn at all. **The hue is the heading and the saturation is the speed**, which produces the composition the figure was aiming at: *a broad laminar field in one quiet colour with a single saturated vortex where the fast subsystem circulates.*

### rings — a crimson band

**`field` is a ripple tank**: two sources, each ring's weight and opacity modulated by a squared cosine so the circles read as **wave crests** rather than drawn lines, the two families multiplied so their overlaps darken the way water does. **`reading` closes the same nine values into a polygon over three graduated rings.** One is a pattern that emerges from a rule; the other is a shape that reports a quantity.

**It fills the plate because the rings are drawn past its corners**, and it is the clearest case of `shape` being *structural*: the dial sets the crest spacing, and the figure that results is a different pattern rather than a scaled one. **The two families sit at different lightnesses**, which is what keeps the fringes legible rather than muddy.

### pulse — a teal band

**`field` stacks nine filled curves back to front**, each offset and each opaque, so the front ones occlude the ones behind — a ridge plot, which shows nine signals *and* their relation at once. **`reading` treats the same nine as separate measurements standing apart.** *This is the oldest disagreement in data drawing — a curve sampled, or nine facts? — and the class refuses to settle it, which is what two looks are for.*

**A single filled trace stood here first and was simply dull beside its neighbours.** *Equal interest across the six is a requirement rather than a nicety: a row is only as strong as the tile a reader's eye skips.* The ramp is sequential within the band, light at the back and deep at the front, which is what makes nine overlapping curves readable as a stack rather than a smear.

### weave — a violet band

**`reading` puts nine values into a grid of discrete cells; `field` lays warp and weft on a repeating sett** — the stripe sequence a real tartan is specified by — **with the crossings multiplied**, so warp over weft darkens the way cloth does. **The same information at two resolutions**, and switching between them is the clearest demonstration that a look changes what *kind* of thing you are looking at.

**The reading leads because the first version of the cloth was layered rather than woven** — two sets of translucent rectangles, which reads as a graphic and not as a textile — and a pair should open with its stronger drawing. **The band is not a band but a triad**, three hues a third of the wheel apart, so turning the dial rotates a whole scheme rather than sliding one: visibly different behaviour from its five neighbours.

### orbit — a green band

**`field` puts nine values on nine concentric orbits, each as an angle; `reading` collapses all nine into their mean and draws one arc.** This is the pair that argues about **aggregation** — nine things in relation, or one number that stands for them — and it is deliberately the most reductive reading in the case.

**Both hold the centre**, which keeps the pair feeling like one class, and `shape` moves each body around its own orbit at its own rate, so the system **precesses** rather than expands. **Its band is the widest of the six**, so the nine planets march across it instead of sharing one green — a row of nine identical dots was the version before, and it made the figure look like a diagram of one thing repeated.

## The selection effect

**The subject of this case is not the twelve drawings. It is what happens when a reader realises the drawings were chosen by a word.** Everything else — the palettes, the geometry, the dials — exists to make that realisation land hard, and the case is designed backwards from it.

**The first thing the selection does is destroy the expectation of a variant.** When six tiles differ only in colour or size, a reader assumes one drawing with parameters, and the tag reads as configuration. When the six are a graph, a vector field, an interference pattern, a signal, a cloth and an orrery, no parameterisation could account for them — so the reader is forced to the correct conclusion, which is that **the word did not adjust something, it chose something.** The visual distance between the six is not showmanship; it is the evidence.

**The second thing it does is make the two axes separable.** The word and the `look` number are both small tokens sitting in the same tag, and until you watch them do different things it is easy to believe they are the same mechanism. Flipping `look` redraws all six *without changing which six they are*; changing a word replaces one of them entirely. **A reader who has done both in the same minute has understood the whole design**, and has understood it from the screen rather than from a sentence.

**The third thing is that the dials prove the selection is not a picture.** If the swap produced a static drawing, sliding hue would be indistinguishable from swapping in a different image. Because the dials are ordinary props that cross the swap, every one of the seven drawings on screen answers the same two numbers simultaneously — **and a reader watching six unrelated worlds respond in six unrelated ways to one slider is watching polymorphism, not a gallery.**

**The fourth thing is the asymmetry the case leaves deliberately unshown.** Nothing on the screen says which class arrived; the tag says `<Fig>`, and the drawing is whatever the catalogue answered. **That absence is the factory pattern's whole content** — the caller names a kind and never learns the concrete class — and it is more convincing as an absence than it would be as a label. The reader can look for the seam and not find one.

**And the fifth is what the case cannot show, which is worth stating so nobody claims it does.** The screen cannot show that a name climbed to its ancestors, that a sibling's name was refused, or that a scope re-dressed a resolution — those are the three cases that follow it in the section, and they are drab on purpose because what they demonstrate is a *rule*, not a *world*. **This case earns the reader's attention; the three after it spend it.** A section needs both, and the mistake we made three times was trying to make one case do both jobs at once.
