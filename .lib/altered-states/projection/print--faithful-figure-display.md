# Print — Faithful display of MEIs and reconstructed images

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

**Synopsis.** The twin, MEIs, and reconstruction are real (Sprint 4), but the *display* does not yet match the source papers. The MEIs come out **grainy and likely on the wrong intensity / colour scale**, and we have not confirmed how reconstructions should be **contrast-scaled and upsampled**. This print fixes *presentation, not analysis*: determine exactly how the Tolias / Reimer papers render MEIs and reconstructed images, and reproduce it in our figure code — so an author of those papers recognizes our figures as their own. This is Reimer's method on his kind of data; display here is not cosmetic, because a wrong colour scale or grain misrepresents the result.

## Checklist

**Nancy — read the source for the display recipe.**
- [ ] Read [`library/papers/digital-twins-tolias-2022/`](../../papers/digital-twins-tolias-2022/.cover.md) and [`functional-connectomics-tolias-2024/`](../../papers/functional-connectomics-tolias-2024/.cover.md) — the full PDF, the figure PNGs, the md synopsis in each folder.
- [ ] **MEI display**: colormap (grayscale vs diverging vs other), intensity normalization (per-MEI min/max vs a fixed symmetric range vs percentile clip), any smoothing / upsampling that removes grain, the resolution shown. Confirm what the paper does where ours are grainy.
- [ ] **Reconstruction display**: contrast scaling, upsampling to original resolution, colormap.
- [ ] Any twin methodology relevant to how outputs are shown.
- [ ] Report the exact, citable display recipe — concrete enough to implement in `paper_figures.py`.

**Libby — set up the research-book catalogue.**
- [ ] Create a research / papers catalogue book in `.lib`: each chapter points to a paper in `library/papers/`, recording what we learned and which code or report it informs.
- [ ] Seed it with the two Tolias papers (and the Histed paper), cross-linked to Sprint 4, the [twin-and-MEI report](../../reports/2026-06-23-twin-mei/the-twin-and-mei.md), and The Build.

**Then — apply (Gabby + Adam).**
- [ ] Update `paper_figures` (the MEI grid + reconstruction renderers) to the confirmed recipe; regenerate the figures in the report.

## Done when
The MEIs and reconstructions in the report are displayed **exactly as the papers display them** — verified panel-against-panel with the figure PNGs.
