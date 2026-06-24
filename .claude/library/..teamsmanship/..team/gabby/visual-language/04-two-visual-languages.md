# Two visual languages

- **author:** [Gabby](../gabby-and-the-visual-voice/.cover.md)

---

[Book: [Visual Language](.cover.md)]

Sprint 5 — the publication-grade analysis — gave me a `figures/` module to own, and the first thing I had to see is that it is *not* the same job as the [data-review figures](03-the-data-review-figures.md). Those speak the **house voice**: peaceful Ocean/Clay, quiet takeaways and caveats, Segoe UI, despined airy frames — because their job is for the *team* to see its own data clearly. The publication figures have the opposite job: be recognized by an author of the source paper, **panel against panel**. Their visual language is the **field's**, not mine. Two languages, and conflating them is the trap.

The sprint's one principle on top is *"confirm two numbers are the same kind of number before reading their difference as a deficiency."* The figure version of that exact discipline: **the data-bearing display is a measurement, not an aesthetic.** A MEI's colormap, value range, and interpolation are part of what the figure *measures*. If I "beautify" them — a warmer colormap, per-image contrast so each cell pops — I commit the same category error the report warns against: I make two things that aren't the same kind of thing look comparable. So for image panels, **beauty serves by being faithful, even invisible.** My taste does not touch the display rule.

Where my taste *does* live is the **chrome** — type, spacing, captions, panel letters, axis labels, the breathing room. The split is clean and load-bearing: the house style ([`viz/style.py`](../../../../../../src/library/viz/style.py)) may dress a publication figure's chrome so the set stays in one professional voice, but the `imshow` display rule is sacred and copied from the paper. Chrome is mine; the data-bearing pixels are the field's.

The two display rules in Phase 5 **must not merge**, and the safest way to guarantee that is to make them two named things, not one helper with a `mode=` flag:

- **MEI panels** — grayscale, a **fixed range shared across the entire comparison set** (and that set *includes pre and post* — if matched-cell pre/post MEIs are scaled independently you cannot compare them, which destroys the whole matched-cell point), **no per-image rescale**, and a **single shared colorbar** for the grid. The shared colorbar is itself the honest signal that the range is shared.
- **Reconstruction panels** — the *opposite* rule: **per-image** contrast + **bicubic** upsample 36×64 → 144×256, and **no colorbar** (a colorbar on per-image-rescaled panels would lie about comparability). The caption must say brightness is not comparable across panels.

One reassurance, and it comes from the palette grammar the style module now carries: magnitude/activity is **grayscale, white = none** (the Rastermap / Stringer-Pachitariu field standard). That already aligns the house style with the field's convention for the image panels — so the condition hues (Ocean = pre, Clay = post) belong to the **quantitative** science figures (the H1–H6 tuning / reliability / geometry plots, where pre vs post *is* the comparison), while the MEI and reconstruction **image** panels stay grayscale-canonical. The two languages don't fight; they divide cleanly by what kind of thing is being shown.

Last, "verify each panel against the published figures" should be a **produced artifact, not a vibe** — our panel set beside the actual published reference plates ([the Tolias digital-twins paper](../../../../../../library/papers/digital-twins-tolias-2022/.cover.md)) on a side-by-side QA sheet, with a note of whether the MEI was made by the canonical annealed-blur synthesis or the noisier CPU fallback (so a synthesis artifact is never misread as a figure-quality miss — the same-kind-of-thing principle, one level down, in my own domain).

<!-- citations -->
[The data-review figures]: 03-the-data-review-figures.md
[Gabby and the Visual Voice]: ../gabby-and-the-visual-voice/.cover.md
