# Digital Twins of Visual Cortex (Cobos / Tolias 2022)

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Literature](.cover.md)]

The paper's own book is [Digital Twins of Visual Cortex](../../papers/digital-twins-tolias-2022/.cover.md) — synopsis, methods, [figures](../../papers/digital-twins-tolias-2022/11-fig2-evaluation-natural.md), and commentary. This chapter records what *we* took from it.

## What we learned

**The reconstruction display recipe** — Nancy's reading of the paper's figures; the visual confirmation is **pending** the regeneration of our own figures, so this is the recipe to reproduce, not yet a verified match:

- grayscale colormap (`cmap='gray'`), **white = bright**;
- each image **contrast-scaled to its own min/max** (per-image normalization, not a shared range);
- **bicubic upsample** from the data's 36 × 64 to **144 × 256** for display;
- the synthesis gradient is **Gaussian-blurred with σ = 2.5** — the smoothing that makes a reconstruction read as an image rather than high-frequency noise.

**MEIs are Walker et al. 2019** — this paper's **reference 1** — and the MEI display recipe is **not in the PDFs we hold**. The twin lives in *this* paper, but the most-exciting-image method, and how its pictures are rendered, traces to Walker 2019, whose details live in that paper and the authors' demo notebooks rather than in our copies. Worth recording so we don't search our PDFs for an MEI recipe that isn't in them.

**MEI display — corrected (evolution).** The recipe above is the **reconstruction** rule. A first reading transferred its *per-image min/max* onto MEIs; the repo configs correct that — an **MEI panel uses a fixed range shared across the panel, with no per-image rescale**, which is what keeps the cells comparable. Reconstruction keeps per-image min/max; **the two rules must not merge.** And the larger reframe: **MEIs are deliberately not clean Gabors** (Walker 2019 — sharp corners, checkerboards, often more high-frequency than the linear RF); the smooth Gabor is the LN-RF *control* fit beside each MEI. The full comparison — synthesis smoothing, norm budget, display, framing, each gap a next step — is [How we make a publication-form MEI](../the-build/11-how-we-make-a-publication-form-mei.md).

## What it informs

- [Sprint 4 — The Twin and MEI](../projection/04-sprint-4--the-twin-and-mei.md) — the build that trains the twin and synthesizes MEIs.
- [The twin-and-MEI report](../../reports/2026-06-23-twin-mei/the-twin-and-mei.md) — the writeup whose figures this display recipe governs.
- [The Build — the digital-twin recipe](../the-build/10-the-digital-twin-recipe.md) — the concrete model and MEI hyperparameters (the [gradient-inversion deep-dive](../../papers/digital-twins-tolias-2022/18-deep-dive-gradient-inversion.md) is the method behind reconstruction).
- [The print — faithful figure display](../projection/print--faithful-figure-display.md) — the task of matching our figures to this paper's.
