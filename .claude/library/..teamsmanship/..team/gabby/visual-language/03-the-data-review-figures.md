# The data-review figures

- **author:** [Gabby](../gabby-and-the-visual-voice/.cover.md)

---

[Book: [Visual Language](.cover.md)]

This is the design for the DOI data-review figure set — the seven panels Nancy's [draft script](../../../../../../src/experiments/2026-06-23-exploration/exploration.py) generates in plain matplotlib. The job is not new figures. The lab (Reimer / Tolias / Sinz) already knows these forms on sight; the job is to make the *familiar* forms beautiful, self-explaining, and nearly text-free — so a panel teaches itself in one glance and an honest reader can't over-read it. The same discipline as the Lab: [beauty is communication, two colors carry the comparison, every mark is structural or active](01-the-lab-design-system.md). Here the comparison is **pre-DOI vs post-DOI**, and that binary is the spine of the whole language.

## 1. The shared visual language

**The two-color spine — pre vs post, identical in every panel.** One comparison runs through all panels, so it gets one fixed pair, used nowhere else. Doug's review retired the original teal/coral — the orange "wasn't making him happy." The palette is now **peaceful**: a slate-blue and a dusty rose at matched chroma, calm and unified, no orange anywhere.

- **pre-DOI = "Harbor" slate-blue `#5B82A6`** — cool, calm, the baseline.
- **post-DOI = "Blush" dusty rose `#C58A9A`** — soft, warm-leaning, the altered state.
- Deeper tones for median/emphasis strokes: `pre_dark #3E5F80`, `post_dark #9E6577`.

Blue-vs-rose keeps the colorblind-safe hue+luminance separation while reading as quiet and harmonious rather than alarming. The rule is absolute: pre is *always* Harbor, post is *always* Blush — bars, lines, histograms, scatter axes, every legend. Supporting inks (all softened, never pure black): text `#2B2F33`, secondary/caption `#6B7177`, grid `#E8E8E6`, reference/identity lines `#A8ACB0`, warm paper `#F4F1EC` (caveat band + diverging midpoint). Colormaps: grayscale stimuli stay `gray`; activity rasters use **`cividis`** (calm, colorblind-safe — magma's harsh purple/orange retired); any pre−post difference map uses the **`slate_rose` diverging map** (Harbor → warm paper → Blush, centered at zero) so even heatmaps speak the spine.

**Typography.** **Segoe UI throughout** — a genuinely modern, professional sans that ships on the lab's Windows machine — with graceful fallback `["Segoe UI", "Calibri", "Arial", "DejaVu Sans"]` (DejaVu always exists, so nothing breaks). One family for unity, the look Doug asked for; hierarchy comes from **size, not heft** — titles are **semibold, not bold** (the heavy DejaVu-Bold look is what read as dated). Sizes raised so nothing crams: title 14, axis label 11.5, tick 10, legend 10, annotation/takeaway 10 (takeaway italic, muted). Titles are left-set (editorial, calm). Minimal text means short titles, units folded into axis labels, the rest as quiet baked annotation.

**Layout, sizes, dpi.** Single-column width **6.6 in**, wide **13.2 in**, comfortable panel heights 4.2–5.0 in (the crushed strips get taller). **dpi = 220** for save (130 on screen). **`constrained_layout` on by default** in the rcParams with real h/w padding — this is what makes everything breathe. The biggest "designed, not default" move stays: **despine top + right on every axis**, short outward ticks, a quiet warm grid only where it aids reading, never on rasters or images.

**The style module — `src/library/viz/style.py`** (built). `use_style()` sets the rcParams (Segoe UI stack/sizes, semibold left-set titles, despined frame, warm quiet grid, dpi, `constrained_layout` on, `legend.frameon=False`, `image.cmap=cividis`, and a `prop_cycle` that starts Harbor→Blush); `PALETTE` and `PRE`/`POST` aliases; `LABEL` (`pre-DOI (sess 6)` / `post-DOI (sess 7)`); the registered `DIVERGING`/`slate_rose` and `SLATE_SEQ` colormaps; size constants `W1/W2/H1/H2`. Helpers: `takeaway()` (quiet italic foot-sentence, no box), `caveat()` (calm warm-paper band, *not* a loud orange box), `median_line()` (thin dashed in the condition's deeper tone, quietly labelled), `identity_line()` (`y=x` for before/after scatters), `label_axes_by_condition()` (tint x/y labels by condition), `slim_colorbar()`, `panel_label()`, `despine()`. Import once and every panel inherits the language.

## 2. The seven panels — standard form + augmentation

**0 — Tier summary → the title card.** *Standard:* grouped bar, trials per tier (train/val/test), pre vs post. *Augment:* recolor to the spine; value labels atop bars in mono; a bracket+label on the **test** bar — "100 images × ~10 repeats → the reliability set" — because test is the scientifically load-bearing tier; a one-line metadata header — "1654 pre / 1449 post cells • 749 reciprocally matched (verified)"; italic takeaway: *"Identical stimulus design pre and post; only the test repeats support reliability."* This stops being a plot to stare at and becomes the set's honest header card.

**1 — Example stimuli → orientation grid.** *Standard:* 3×4 grid of 36×64 GrayImageNet frames, gray, no axes. *Augment:* even 8px gutters, a hairline frame per tile, one corner caption "36×64 px • GrayImageNet • train tier", and a single row of the **100 repeated test images** set off with a teal top-edge so the reliability stimuli are visible as a distinct set. Takeaway: *"Same natural-image stimuli in both sessions."* Pretty is enough here — it's orientation, not statistics.

**2 — Single-trial snapshot → one image, one population response.** *Standard:* stimulus left, neuron response vector right. *Augment:* the raw ~1600-bar spray is noise — render the response as a **1-D heatmap strip sorted by the population order from panel 5**, so structure shows; mark the mean with a reference line and tick the top-3 responders; move behavior/pupil out of the cramped suptitle into small labeled chips under the stimulus. Takeaway: *"One image evokes a sparse, structured population response."* Illustrative, not statistical — pretty wins.

**3 — Behavioral covariates → the confound (honesty anchor).** *Standard:* pupil/running timeseries and distributions, pre vs post. *Augment:* name the channels (pupil size, running speed, …) instead of `behavior[0]`; split into labeled rows, pre/post overlaid in the spine colors; distributions with **labeled median lines** and the shift annotated with an arrow ("pupil ↑ X% post"); and a **bold in-figure caveat box** — *"Arousal/locomotion differ pre vs post. Neural changes below may reflect this, not DOI directly."* This is Nancy's honesty baked into pixels. Highly informative — show it clearly.

**4 — Per-cell reliability → the noise ceiling (THE load-bearing panel).** *Standard:* histogram of per-cell split-half correlation on the 100 repeated test images — the canonical Sinz–Tolias noise-ceiling plot. *Augment (invest the most here, "show more" beats "show pretty"):* pre vs post as smooth filled step-histograms/KDE in the spine colors with **labeled median lines**; a **shaded "reliable" band** (r > threshold) with the **% of cells inside annotated per condition** — reliability isn't just a shape, it's *how many cells are usable*; a small companion of reliability-vs-mean-rate (hexbin) so it's clearly signal, not noise floor; optional ECDF twin for exact median/threshold reads. Takeaway: *"Most cells are reliably driven (median r ≈ —); this is the ceiling any model could reach."* If pre/post medians differ, label it *descriptive, confounded by arousal*. Oracle correlation is the optional twin of split-half.

**5 — Population structure → sparse, low-dimensional.** *Standard:* (a) sorted mean-rate curve, (b) response-value distribution, (c) neuron×trial raster. *Augment:* (a) annotate the sparsity/long tail (fraction of cells carrying X% of activity), pre/post in spine; (b) log-y to expose the tail; (c) **the raster is visual noise unless sorted — sort neurons by rastermap (1-D embedding)** so co-active ensembles form visible bands, group the test repeats together, add a slim labeled colorbar and a trial scale bar. Takeaway: *"Activity is sparse and low-dimensional — a minority of co-active ensembles dominate."* **rastermap is not currently installed** — add it as a dependency, or the helper falls back to a correlation-based hierarchical leaf order. Unsorted, panel 5c should be cut.

**6 — Pre vs post on the 749 matched cells → same cells, before/after (descriptive, confounded).** *Standard:* per-cell statistic pre (x) vs post (y), same physical cells, identity line. *Augment:* two density scatters side by side — mean rate, and reliability — each with a **labeled y=x identity line** (the "no change" reference), **hexbin density** (749 points overplot), and **marginal histograms** on the axes; the **x-axis label in teal, y-axis label in coral** so the axes themselves carry the comparison; a single annotated Δ-stat with a direction arrow off identity. And the heaviest **caveat ribbon** of the set: *"Same physical cells (reciprocally matched, verified). Differences are DESCRIPTIVE — confounded by session, time, and arousal (panel 3). Not a causal DOI effect."* Genuinely valuable (matched cells are rare) and the most tempting to over-read, so it wears the largest caveat.

## 3. Informative vs filler; where "show more" wins

- **Load-bearing:** **4** (reliability — the scientific anchor), **3** (the confound — the honesty anchor), **6** (matched cells — the unique-data anchor, caveated).
- **Orientation, keep small and pretty:** **0** (title card), **1** (stimuli), **2** (single trial).
- **Filler unless augmented:** **5c** the raster — meaningless without rastermap sorting; **5a/b** are fine but minor.
- **"Show more" beats "show pretty":** panel 4 (medians, threshold band, %-reliable, rate-dependence), panel 6 (identity line, marginals, Δ-stats), panel 5c (rastermap sort). **"Show pretty" is enough:** 0, 1, 2.

The honesty principle, in the pixels: descriptive panels must *read* descriptive. Panels 3 and 6 carry visible caveat boxes; panel 4 labels any pre/post gap as confounded. The figures look designed, but they never look more certain than the data is — that is Nancy's scientific honesty held in the visual layer.

## 4. What's in lib/viz vs the experiment script

**In `src/library/viz/` (reusable — my territory, encodes the language so no panel re-implements it):**

- **`style.py`** — `use_style()` rcParams, `PALETTE`, `LABELS`, `CMAP` (incl. the custom teal–white–coral diverging), size constants (`W1=6.5`, `W2=13`, heights), dpi=200.
- **`helpers.py`** — small composable pieces: `despine(ax)`; `takeaway(fig, text)` (the italic bottom strip); `caveat(ax_or_fig, text)` (the consistent honesty ribbon); `median_line(ax, x, label, color)`; `identity_line(ax)`; `shaded_band(ax, lo, hi, label)`; `scale_bar(ax, …)`; `data_labels(ax, bars)` (mono value labels); `density_scatter(ax, x, y)` (hexbin/KDE without a hard seaborn dep); `sorted_order(R)` (rastermap with hierarchical fallback); `slim_colorbar(im, ax, label)`.

**Stays in the experiment script (analysis-specific, not reusable):** the statistics and data prep — `split_half_reliability`, optional oracle, the matched-cell join via [`match_cells`](../../../../../../src/library/io/matching.py), per-panel layout and composition. The script calls `use_style()` and the helpers; the science stays with the experiment, the look lives in viz. Hard dependency surface stays minimal — matplotlib + numpy; **rastermap optional** (recommended, with fallback); no required seaborn.

<!-- citations -->
[The Lab design system]: 01-the-lab-design-system.md
[The teammate palette]: 02-the-teammate-palette.md
[Gabby and the Visual Voice]: ../gabby-and-the-visual-voice/.cover.md
