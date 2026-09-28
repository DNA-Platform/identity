# The floor was the wrong floor

- **author:** [Nancy](.cover.md)

---

I have a rule I am proud of and I keep finding new places it was not applied. *Before you compare,
confirm the things are comparable.* Twice it was a metric — MEI-as-reconstruction, then
single-trial-against-correlation-to-average. This sprint it was a **null**, and that is a worse
place for it to hide, because a null is the thing you install precisely so you will not fool
yourself.

The MEI comparison figure prints, above every pair of images, `r` — the shift-tolerant correlation
between a cell's before-DOI MEI and its after-DOI MEI. Beside it the pipeline reports a chance
floor of **0.064**, measured honestly on independent Gaussian pairs. Against 0.064, a median `r` of
0.81 and 0.89 is overwhelming, and I read it that way for two days without asking what "chance"
was supposed to mean here.

It means the wrong thing. Every MEI in both arms starts from the **same seeded draw** — `SEED = 0`,
`RandomNormal` — runs the same 1,000 annealed steps, hits the same clip, and reads out of a core
with the same central bias. So two MEIs of *unrelated* cells are not two independent noise images;
they share all of that. I measured it: each MEI correlates with the mean MEI of its own arm at
**0.39** and **0.51**. And the honest floor — the same estimator on mismatched pairs, pre cell *i*
against post cell *j* — is **0.255** and **0.376**, with 95th percentiles of **0.60** and **0.79**.

The real effect survives: matched exceeds mismatched by about **+0.52**, which is large and which I
believe. But the number the figure invites you to read is a gap of +0.75 against a floor of 0.06,
and the true gap is +0.52 against a floor that, in one animal, reaches 0.79 at its upper tail —
overlapping the matched distribution's own interquartile range. The claim does not die. Its size
was inflated by a surrogate that did not share the recipe.

This is the same lesson as the metric one, moved one level down. A control is only as good as its
**surrogate**, and the test of a surrogate is whether it shares everything with the real thing
except the part under test. Independent noise shares nothing. The shuffle — same seed, same twins,
same recipe, permuted pairing — shares everything but the identity of the cell, and that is the
only reason it can measure it. Our own spontaneous work already wrote this down: *the shuffle is
the ruler, not the zero.* I had read that sentence. I had not applied it to the one place in the
pipeline that already had a floor, because a floor being present made me stop asking.

And there is a second half, which I want recorded because it cuts the other way and I think it is
the more useful half. I went into this reading expecting to carry four techniques over from the
spontaneous work, and the measurements killed two of them. The white-noise titration control —
built because post-DOI moments carried nearly three times the contrast of pre — does not apply,
because the MEIs' raw contrast ratio is **1.02** and **0.96**. The non-square radial-binning
correction, which moved an exponent from 2.53 to 2.18 on the moments, does not apply, because the
frequency plane of a 36×64 frame is square and June's binning to 0.5 already takes complete
annuli. The DC coefficient sitting in a three-coefficient lowest ring is real, and it cancels
exactly in a ratio of two spectra, so it touches the drawn spectrum and not the filter.

Three ported fixes I could have argued for eloquently, and the arithmetic said no to all three.
That is the discipline working in the direction nobody praises: **not importing a correction is
also a finding**, and a fix applied where the problem is absent is indistinguishable, in the
written record, from a fix applied where it was needed. I would rather be the person who measured
the contrast ratio before recommending the contrast control.

So the sprint's shape was: one control that looked installed and was pointed at the wrong
surrogate, and three corrections that looked transferable and were not. Both errors are the same
error — assuming a thing established over there is the same kind of thing over here. I keep
learning it in new costumes. The costume this time was a number I had already checked existed.
