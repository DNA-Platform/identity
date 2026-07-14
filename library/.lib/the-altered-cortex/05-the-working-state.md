# The working state

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

**The only volatile chapter — rewritten every turn, and *supposed* to go stale between them.** Everything dated
or measured lives here so the [cover](.cover.md), [ch0](00-the-turn.md) and [the map](03-the-analysis-plan.md)
stay timeless. ([On Synopsis](../../../.claude/library/bookkeeping/09-on-synopsis.md#write-for-evolution) names
counts, snapshots and "current" as anti-evolution patterns; the library sanctions current-state content, it just
gives it its own place. This is that place.)

**Rewrite, never append.** A lesson stops being news the turn after it is learned: once it is durable it
graduates to [the map's Lessons](03-the-analysis-plan.md#the-lessons-that-cost-the-most) as one line and a
reason, and leaves here. The story it came from is in git. *This chapter reached 306 lines by appending — while
saying it didn't.*

**No counts.** They have one home: `results/_progress.txt`. A count copied into prose is stale in minutes.

## Read next turn — the volatile half of the reading list

[ch0](00-the-turn.md) holds the **structural** list (always the same). This holds what *this* state makes worth
opening next, and it is re-tuned every turn. **Right now:**

1. `results/_progress.txt` — the phase and the counts. Then `python 00-the-turn--check.py`.
2. [`_generate_full.py::_plan`](../../../src/analyses/most-exciting-image/pipeline/_generate_full.py) — **only if
   the phase looks wrong.** Phase 1 (MEI→150) is running; it advances itself.
3. When phase 1 ends → [`_organize.py`](../../../src/analyses/most-exciting-image/pipeline/_organize.py), then
   [`_prepost_analysis.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_prepost_analysis.py) and
   [`_blur_check.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_blur_check.py) — re-run all
   three, then rewrite **F10/F9** in [comparison.md](../../../src/analyses/most-exciting-image/comparison.md).
4. **Skip** the reference chapters ([ch1](01-the-dataset-and-the-design.md), [ch2](02-the-question-made-falsifiable.md),
   [ch4](04-cataloguing-the-deck.md)) — nothing in flight touches the dataset or the hypotheses.

## Active code

If this list doesn't match what you're about to do, you are about to write a rival. Every row names **what it
owns**, **its contract**, and **what checks it** — code with neither is how all of this started.

| code | state · what it owns | contract | checked by |
|---|---|---|---|
| [`_generate_full.py`](../../../src/analyses/most-exciting-image/pipeline/_generate_full.py) + [`rebuild_freemu.sh`](../../../src/analyses/most-exciting-image/pipeline/rebuild_freemu.sh) | **LIVE, detached — leave it alone.** Phased (`_plan`): MEI→`GEN_MEI_TARGET` → all metamers → MEI unbounded. Work unit = one cell × all four twins, so **uneven per-twin counts are a live run, not a bug**. 🔴 **`GEN_WORKERS` is memory-bound** (20 models/worker). ⚠ **no lock** — a second launch = competing pools. ⚠ never edit the `.sh` while it runs (bash reads by byte offset). | [deliverable.md Status](../../../src/analyses/most-exciting-image/deliverable.md) | [`--check.py`](00-the-turn--check.py) `RUN`; `dead tasks:` in `_progress.txt` |
| [`validation/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/validation/__init__.py) | the ONE home for retinotopy: `whitened_rf`, `retinotopy_map` (Garrett/VFS + permutation), `readout_vs_rf` (**the honest gate**). ⚠ `readout_retinotopy` = **circular, diagnostic only** | [spec Open Q7](../../../src/analyses/most-exciting-image/specification.md) | [`_check_all_twins.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_check_all_twins.py) → `retinotopy_749_*.png` |
| [`metrics.py`](../../../src/analyses/most-exciting-image/pipeline/metrics.py) | `energy_pmf`/`energy_entropy` (**Doug's measure: square, ÷sum, entropy — no mean subtraction; change = the RATIO**), `hf_fraction`, `aligned_corr`. ⚠ `energy_center` is now **callerless** — deletable once checked; `energy_focus` is load-bearing. | [spec Metrics](../../../src/analyses/most-exciting-image/specification.md) | **nothing** — no test covers the primitives every finding rests on |
| [`_prepost_analysis.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_prepost_analysis.py) | ✓ **runs.** Entropy ratio, HF cross-check, Gaussian fit (centre + σ), per-axis retinotopy, centre shift — **per condition, never pooled**. Writes `entropy_ratio{,-bh}.png`, `prepost_examples{,-bh}.png`; arrays → `_data/`. | [comparison.md §A + **F9/F10**](../../../src/analyses/most-exciting-image/comparison.md) | [`--check.py`](00-the-turn--check.py) `FIGURES` + `CONVENTIONS` |
| [`_blur_check.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_blur_check.py) | ✓ **runs.** "Is post blurrier?" — HF-energy per MEI, per condition, off the raw files (works mid-run). | [comparison.md §A.4 + **F10**](../../../src/analyses/most-exciting-image/comparison.md) | prints only — its numbers reach the book via F10 |
| [`_organize.py`](../../../src/analyses/most-exciting-image/pipeline/_organize.py) | ✓ **runs.** Raw → per-twin datasets on the four-twin overlap. Idempotent — **re-run as the count grows**. 0 metamer sets yet (a set needs all 100 targets). | [deliverable.md](../../../src/analyses/most-exciting-image/deliverable.md) | [`--check.py`](00-the-turn--check.py) `STATE` |
| [`metamer/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/metamer/__init__.py) | the vendored Cobos inversion. **Verify against `sinzlab/reconstruction`'s example code before the 800 finish.** Edit, never replace. | [spec Part 7 + Q5](../../../src/analyses/most-exciting-image/specification.md) | re-evoke correlation (spec Part 8) — **not yet run on free-μ** |

## The studies — which import right now

**✓ = runs · ✗ = stale `parents[]` — stale, not wrong, and not a licence to write a new one.** Measured
2026-07-14: **11 of 15 are ✗**. What each is *for*, and the two-line fix, are [in the map](03-the-analysis-plan.md).

- ✓ `_check_all_twins.py` · ✓ `_retinotopy_grid.py` · ✓ `_prepost_analysis.py` · ✓ `_blur_check.py`
- ✗ `_metamer_vs_decoder.py` · ✗ `_decoder.py` · ✗ `_decoder_figure.py` · ✗ `_mei_good_examples.py`
- ✗ `_mei_quality_check.py` (also points at `results/_full_cold_collapsed/`, **deleted** — needs a decision, not a path fix) · ✗ `_make_examples.py`
- ✗ `_metamer_similarity.py` · ✗ `_rf_coverage.py` · ✗ `_extract_targets.py` · ✗ `_retinotopy_check.py` · ✗ `_sweep_retinotopy.py`

## Still open — in dependency order

**The MEI half of the pre→post comparison is recomputed on free-μ (F9/F10). The metamer half (F1/F3/F5/F6/F7) is
cortex-era and void** — it needs the sets, which phase 2 will finish.

1. **Re-run as MEI lands:** `python pipeline/_organize.py && python pipeline/studies/_prepost_analysis.py && python pipeline/studies/_blur_check.py` → rewrite F9/F10. All idempotent, minutes.
2. **Split `prepost_summary.json`** — it holds **both conditions in one file** (keys `""`, `"-bh"`), and it sits in `examples/`. Split per condition and move to `_data/`. *(Doug asked twice; still owed.)*
3. **Rewrite the metamer findings** once phase 2 completes the sets.
4. **Fix the 11 stale studies** — mechanical; idiom in the map.
5. **Merge `energy_center` into `energy_focus`** (toward the robust trim) + fix the `gaussian_focus` docstring.
6. **Verify `metamer()`** against `sinzlab/reconstruction`'s example code; **verify the decoder** against Cobos Fig 2 → F7.
7. **Lock `rebuild_freemu.sh`** so a second launch is a no-op — only while it is *not* running.
8. **`metrics.py` has no test.** Three assertions would do: `energy_pmf` sums to 1; `energy_entropy` falls for a concentrated image and rises for a diffuse one; `hf_fraction` is energy-invariant. They are the floor under F10.
9. **The FIGURES check over-reports.** Its regex only matches backticked `results/...` paths, so **bare filenames slip through**. Widen it; resolve bare names against `results/examples/`.

## Audit trail — 2026-07-14

**Read this turn:** the cover, ch0, ch5, [the map](03-the-analysis-plan.md), and `_generate_full.py`'s planner +
dispatch. Earlier today, all three contracts and every `studies/_*.py` docstring + `parents[]` line.

**The book was compacted.** ch5 had reached **306 lines by appending** — twenty story-paragraphs — in the chapter
whose own first rule is *rewrite, never append*. The durable half graduated to
[the map's Lessons](03-the-analysis-plan.md#the-lessons-that-cost-the-most): one line and a reason each, because
**a lesson stops being news the turn after it is learned** and the story survives in git. Two live contradictions
went with it — this chapter called ΔH +0.233 the *wrong quantity* in one paragraph and asserted it as a *finding*
in another, and its Retinotopy section duplicated the map's verbatim. The reading list is now split: ch0 holds
the **structural** list, this chapter the **volatile** one, re-tuned each turn.

**Phase 1 is running** (MEI → 150 matched) at 10 workers, detached, **dead tasks: 0**. It advances itself: each
invocation runs one phase, exits, and the watchdog re-plans from disk — the files are the state.
