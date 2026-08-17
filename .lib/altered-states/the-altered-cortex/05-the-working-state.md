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
saying it didn't; the science paragraphs that filled it have graduated to comparison.md and the map.*

**No counts.** They have one home: `results/_progress.txt`. A count copied into prose is stale in minutes.

## Where we are (2026-07-18)

**The deliverable is built, and re-toned for Jake Reimer.** [`build_deliverable.py`](../../../src/analyses/most-exciting-image/pipeline/build_deliverable.py)
assembles the browsable folder (`launch.py` + `README.md` + `browse.ipynb` + `MANIFEST.json` + `models/ data/ lib/`)
and zips it, at whatever cell count is on disk. The notebook was rewritten from the "five acts" staging to **plain
descriptive sections** — Setup · Twin checks · A single matched cell · MEIs pre vs post · Metamers pre vs post ·
Resolution change — with the method *definitions* (MEI, metamer, DOI, twin) and the "what you are seeing" placards
removed. **These are the Reimer Lab's own published methods**, so nothing may read as teaching them; the deliverable
proves we reproduce the Sensorium/Tolias pipeline unsupervised. The one genuine addition, the **blur-equivalent σ**,
is stated plainly and **shown by eye — zero + median, no significance test** (an obvious effect needs none). Full
record: [Sprint 11](../projection/11-sprint-11--the-delivery-to-the-reimer-lab.md).

**The generation run was found STALLED and RELAUNCHED (2026-07-19).** It died on 2026-07-18 ~20:05 at 662/749
matched cells — `gen.log` went silent, `_progress.txt` froze, no live process — so the earlier "LIVE, leave it
alone" was stale. Doug asked to finish it; [`rebuild_freemu.sh`](../../../src/analyses/most-exciting-image/pipeline/rebuild_freemu.sh)
was relaunched detached (pid 610; it self-limited to ~4 workers on available memory). It is resumable and
skip-if-exists, so it resumes from the 662 on disk. **Metamers are done (8×100).** Work unit = one cell across all
four twins. Never launch a second pool; never edit the running `.sh`; don't run anything that writes `results/_full`
or `_organized` until the workers exit. *(The watchdog's post-gen tail — `pack_archive` → HDF5 zip — is the
retired path; when generation completes, stop it and run `_organize` + `build_deliverable` by hand, per Still open 1–2.)*

**MEI validity filter — the canonical, lab-code one (in progress, 2026-07-19).** Which cells' MEIs to trust is
decided by the LAB's reliability criterion (Walker 2019: oracle correlation via `neuralpredictors.oracle_corr_jackknife`,
cached per matched cell by [`noise_ceiling`](../../../src/analyses/most-exciting-image/pipeline/data/noise_ceiling.py)),
**not** an image-based redundancy / entropy / crispness rule — those were mine, invented, and are dropped. A whole
turn was spent on a hand-rolled oracle and a redundancy filter before this landed; see the map's new lesson
[On the lab's code](03-the-analysis-plan.md#the-lessons-that-cost-the-most). `noise_ceiling` was rewritten to call
the lab function (hand-rolled `_oracle_ceiling` deleted; neuron-order now asserted, verified equal to matched-pair
order). Still to do: ship the oracle per condition in the archive at build, gate every analysis on it, and report
**% of cells with a valid MEI** in the notebook. `pipeline/panels.py` still carries the abandoned redundancy filter —
replace it with the oracle gate.

**Clean-shop audit — passes 1–3 (2026-07-18).** **Every module and study was read line-by-line** and
reference-graphed; the deliverable README was validated against the code. Deleted across the passes (all
zero-caller, git-preserved): `build_twins.py` (a dead rival gating on the retired circular μy-R² gate), the HDF5
delivery cluster (`build_archive.py`, `archive/`, `make_notebook.py`, `notebooks/`), the callerless
`energy_center` primitive, the unused Open-Q8 `mei_recipe.py`, the six cortex-era diagnostic studies,
`_measure_convergence.py`, `resume_gen.sh`; and the folder chaff — the stale `_logs/` folder, 12 `_data/` orphans
(logs + deleted-study JSONs), `_twins/gof_summary`, the stray `=`. Stale comments corrected to free-μ
(`model/__init__.py`, `twins.py`, `_decoder.py`) and both contracts reconciled (`deliverable.md`; spec Part 2 +
Q12; `mei_recipe` refs). **Folder compaction:** the four single-file packages were flattened to modules
(`validation.py`, `figures.py`, `synthesis.py`, `metamer.py` — pipeline dropped from 10 folders to 6; imports
re-verified live; book + spec links updated), and the notebook-testing garbage (`.ipynb_checkpoints`,
`__pycache__`) was cleaned out of the deliverable. **What else remains is gated on the live run** — see Still open 2.

## Active code

If this list doesn't match what you're about to do, you are about to write a rival. Every row names **what it
owns**, **its contract**, and **what checks it**.

| code | state · what it owns | contract | checked by |
|---|---|---|---|
| [`_generate_full.py`](../../../src/analyses/most-exciting-image/pipeline/_generate_full.py) + [`rebuild_freemu.sh`](../../../src/analyses/most-exciting-image/pipeline/rebuild_freemu.sh) | **LIVE, detached — leave it alone.** Phased: MEIs across all four twins (metamers done). Work unit = one cell × four twins → uneven per-twin counts are a live run, not a bug. 🔴 workers are **memory-bound** (20 models each). ⚠ **no lock** — a second launch = competing pools. ⚠ never edit the `.sh` while it runs. *(`rebuild_freemu.sh`'s post-gen tail — `pack_archive` → HDF5 zip — is the retired path; it will be replaced by `build_deliverable.py` once the run ends.)* | [deliverable.md](../../../src/analyses/most-exciting-image/deliverable.md) | [`--check.py`](00-the-turn--check.py) `RUN`; `dead tasks:` in `_progress.txt` |
| [`build_deliverable.py`](../../../src/analyses/most-exciting-image/pipeline/build_deliverable.py) | **THE deliverable builder** — `_organized/` + `_checkpoints/` + `src/library` → the zipped browsable folder; plain-section notebook, `include_behavior` toggle, `-bh`/no-suffix naming, `MANIFEST.json` stamps the count. Rebuild after each `_organize`. | [deliverable.md](../../../src/analyses/most-exciting-image/deliverable.md) | executes clean under `nbclient`; figures inspected by eye |
| [`_organize.py`](../../../src/analyses/most-exciting-image/pipeline/_organize.py) | ✓ raw per-object → per-twin/per-set datasets on the four-twin overlap. Idempotent — **re-run as the count grows.** | [deliverable.md](../../../src/analyses/most-exciting-image/deliverable.md) | [`--check.py`](00-the-turn--check.py) `STATE` |
| [`validation.py`](../../../src/analyses/most-exciting-image/pipeline/validation.py) | the ONE home for retinotopy: `whitened_rf`, `retinotopy_map` (Garrett/VFS + permutation), `readout_vs_rf` (**the honest gate**). ⚠ `readout_retinotopy` = **circular, diagnostic only.** | [spec Open Q7](../../../src/analyses/most-exciting-image/specification.md) | [`_check_all_twins.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_check_all_twins.py) |
| [`metrics.py`](../../../src/analyses/most-exciting-image/pipeline/metrics.py) | `energy_pmf`/`energy_entropy` (Doug's spread measure — square, ÷sum, **no mean subtraction**; change = the RATIO), `hf_fraction`, `aligned_corr`, `energy_focus` (robust MEI centre+extent, load-bearing). | [spec Metrics](../../../src/analyses/most-exciting-image/specification.md) | **nothing** — no test covers the primitives every finding rests on |
| [`library/stats/resolution.py`](../../../src/library/stats/resolution.py) | **the resolution measure**: `blur_equivalent_sigma` (+ `cutoff_freq`, `radial_power`, `spectral_slope`, `spectral_entropy`). Recovers a known blur exactly. `selection.py::pick_examples` is the 2N-by-goodness exemplar rule. | [comparison.md §B-quater / F10](../../../src/analyses/most-exciting-image/comparison.md) | recovers σ=0…2 at err +0.00 |
| [`_prepost_analysis.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_prepost_analysis.py) · [`_blur_check.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_blur_check.py) | ✓ run. Pre→post via the energy distribution (entropy ratio, Gaussian fit, per-axis retinotopy) and "is post blurrier?" (HF-energy), **per condition, never pooled.** | [comparison.md §A + F9/F10](../../../src/analyses/most-exciting-image/comparison.md) | [`--check.py`](00-the-turn--check.py) `FIGURES` + `CONVENTIONS` |
| [`metamer.py`](../../../src/analyses/most-exciting-image/pipeline/metamer.py) | the vendored Cobos inversion. Edit, never replace. | [spec Part 7 + Q5](../../../src/analyses/most-exciting-image/specification.md) | re-evoke correlation (spec Part 8) |

## The studies — which import right now

**✓ = runs · ✗ = stale `parents[]` — stale, not wrong; the fix is two lines, [in the map](03-the-analysis-plan.md).**
The 2026-07-18 clean-shop deleted the six cortex-era diagnostics (figures gone, findings void); of the 9 that
remain, **3 of 9 are ✗** — the decoder / metamer-vs-decoder trio, which create and score the decoder resource
(a keeper); repair their `parents[]` when the metamer findings are rewritten post-run.

- ✓ `_check_all_twins.py` · ✓ `_retinotopy_grid.py` · ✓ `_prepost_analysis.py` · ✓ `_blur_check.py` · ✓ `_metamer_similarity.py` · ✓ `_extract_targets.py`
- ✗ `_metamer_vs_decoder.py` · ✗ `_decoder.py` · ✗ `_decoder_figure.py`

## Still open — in dependency order

1. **When the run ends (`_progress.txt` = 749):** re-run `_organize.py && build_deliverable.py` (restamps the
   deliverable's count from 336 to final), then `_prepost_analysis.py && _blur_check.py` → rewrite F9/F10; rewrite
   the metamer findings on the finished sets.
2. **Post-run, gated on the live chain:** delete `pack_archive.py` + retire/rewire `rebuild_freemu.sh` to call
   `build_deliverable.py`; and **repair the decoder trio** (`_decoder`, `_decoder_figure`, `_metamer_vs_decoder`)
   — stale `sys.path`, `examples/`↔`_data/` path confusion, `pear`/`target_images` rivals. Deferred because they
   can only be *verified* by running them, which needs the finished twins + full generation (editing untested is
   the exact bug-class this book warns about).
3. **`metrics.py` has no test** — three assertions (`energy_pmf` sums to 1; `energy_entropy` falls for a
   concentrated image, rises for a diffuse one; `hf_fraction` is energy-invariant) are the floor under F10.
4. **Notebook cell-by-cell meaning re-audit** — the README is validated against the code; the notebook markdown was
   validated at the tone rewrite but not re-checked against each code cell this pass.
5. **Pipeline-root naming (optional):** the runners `_generate_full`/`_organize` carry `_` prefixes while
   `build_deliverable`/`run` don't — a cosmetic inconsistency. Renaming touches the `_generate_full` import in
   `_extract_targets`, so it waits for post-run when it can be tested. The single-file-package flatten is done.

## Audit trail — 2026-07-18

**Read (passes 1–3):** the cover, ch0, the three contracts, ch5, the map, the deliverable README, and — line-by-line
— **every module and study** in `pipeline/` (metrics, twins, model, run, validation, compare, quality_toolkit,
figures, synthesis, metamer, data + noise_ceiling, gamma_search, _generate_full, _organize, launch, and all nine
studies). Reference-graphed every `.py`/`.sh`; every deletion carries a zero-live-caller grep.

**Verdict:** the live/deliverable code is clean and free-μ-consistent. The only remaining stale code is the
**decoder trio** (Cobos Fig 2 + the shipped decoder resource) — necessary, repair queued to post-run (Still open 2).
`pack_archive.py`/`rebuild_freemu.sh` are the retired HDF5 chain, kept only because the run is live.

**Deletions + reconciliations:** listed in the clean-shop paragraph above. `comparison.md`'s F1–F8 findings banner is
honestly labeled cortex-era/void and left as-is (not chaff). The full "everything runs" rebuild is the post-run
final test.

## Read next turn — the volatile half of the reading list

[ch0](00-the-turn.md) holds the **structural** list. This is what *this* state makes worth opening next.
**Right now (clean-shop, mid-generation):**

1. `results/_progress.txt` — the count and `dead tasks:`. Then `python 00-the-turn--check.py`.
2. **If the run has ended:** the post-run deletion batch + the contract reconciliations (Still-open 1–3 above).
   The caller-evidence for each deletion is in the audit memo (scratchpad, temporary).
3. **If it is still live:** the contract reconciliations (Still-open 3) are safe to do now — they are prose, not
   the run. Do those; leave the HDF5 cluster and the watchdog alone.
4. **Skip** the reference chapters ([ch1](01-the-dataset-and-the-design.md)/[ch2](02-the-question-made-falsifiable.md)/[ch4](04-cataloguing-the-deck.md)) — the science did not move.
