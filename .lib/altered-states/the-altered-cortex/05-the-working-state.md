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
The 2026-07-18 clean-shop deleted the six cortex-era diagnostics (figures gone, findings void); three
metamer studies were added since. Of the 12 that remain, **3 of 12 are ✗** — the decoder /
metamer-vs-decoder trio, which create and score the decoder resource (a keeper); repair their
`parents[]` when the metamer findings are rewritten post-run.

- ✓ `_check_all_twins.py` · ✓ `_retinotopy_grid.py` · ✓ `_prepost_analysis.py` · ✓ `_blur_check.py` · ✓ `_metamer_similarity.py` · ✓ `_extract_targets.py`
- ✓ `_metamer_convergence.py` · ✓ `_metamer_fixed.py` · ✓ `_seeded_metamers.py` — the finding-F2 trio (unseeded, oscillating synthesis, and its fix)
- ✗ `_metamer_vs_decoder.py` · ✗ `_decoder.py` · ✗ `_decoder_figure.py`

## The validator's four remaining errors — read before acting on one of them (2026-08-29)

`00-the-turn--check.py` reported eight; four were ch5's own staleness about the studies and are
fixed. The four that remain are real, pre-existing, and **one of them must not be obeyed literally**:

**`RUN: no generation watchdog alive` — do NOT relaunch it right now.** The check exists because the
book describes a live 12-worker generation run. That run is finished. The machine is currently
training the optical-behaviour twins (~1.4 GB resident, 15-20 h), and `rebuild_freemu.sh` has **no
lock** — relaunching it would start a competing 12-worker pool on top of that and both would thrash,
which is the exact failure this book already records twice. The honest fix is to retire the live-run
language in [`deliverable.md`](../../../src/analyses/most-exciting-image/deliverable.md) Status and
let the check follow it; that is prose surgery in a contract while its project is mid-experiment, so
it is left for whoever owns that run to do as it lands.

**Three `FIGURES` errors — ten cited figures do not exist.** `retinotopy_749_modelfree.png` and
`retinotopy_749_pre.png` (cited by [the map](03-the-analysis-plan.md) and `deliverable.md`), and
seven `blur_sigma` / `metamer_blur_sigma` figures cited by `comparison.md`. These are findings whose
evidence is gone — the check's own phrasing, and it is right. They are regenerable from the studies
that made them, and until they are regenerated the claims resting on them are citing nothing.

Neither group was caused by tonight's work, and neither is safe to paper over: a check that is
routinely red teaches the next reader to ignore it, which is how the eight became eight.

## `rf_mask(readout.mu)` is the wrong instrument for coverage (2026-08-30)

**Three measurements agree that these 749 cells look at rows ~20-31 of the frame, and both mu-derived
masks are about six rows too high.**

| instrument | needs a twin? | answer |
|---|---|---|
| stimulus-triggered RF, 4,850 training trials | no | peak **row 26, col 37** |
| input gradients through the twin | yes | peak **row 26, col 37** |
| occlusion sweep, best 12-row band | yes, no gradients | rows **20-31**, r 0.845 |
| `rf_mask(readout.mu)`, perceptual twin | — | rows 16-27 |
| delivered `rf_mask.npy` | — | rows 13-23 |

The twin reads where the data says. **mu is not where the network functionally looks**, so a mask built
from mu is misplaced even when the twin is fine. This is the "collapsed elevation range" the circular
readout gate hid, resurfacing as a coverage error. Every coverage figure drawn from mu on this branch
is drawn too high.

Scoring in the measured patch instead of the mu patch moved every reconstruction number: decode r
**0.524 -> 0.612**, per-band identification real out to **17.1** rather than 6.8 cycles per image
height. **The "walled at a 6 px blur" verdict below was computed over partly wrong pixels and is
withdrawn.**

## WITHDRAWN — everything the ridge decoder produced on 2026-08-30

Three sections stood here: an H5 result (the unexplained component is low-dimensional and image-like),
a percept section with a pre/post 2x2 and its parity controls, and a "reading the image back out of
activity" section concluding the reconstruction was walled at a 6-pixel blur.

**All of it came from a `sklearn` ridge regression, not from the twin.** The defect and its mechanism
are [Solutions ch1 — The decoder that replaced the twin](../solutions/01-the-decoder-that-replaced-the-twin.md).
The code and every figure were deleted. The numbers are not repeated here, because a withdrawn number
left in a working-state chapter is exactly the [stale artefact](../solutions/.cover.md) this book
exists to prevent — the Solutions chapter holds what is worth remembering about them.

**What was in those sections and survives, because it used no decoder,** is the coverage result immediately
above and these two raw-response measurements:

- per-cell split-half reliability **pre 0.565 -> post 0.497**;
- cross-condition per-cell tuning correlation **0.4006** raw, **0.8246** after correcting for both
  conditions' reliability, over the 652 cells reliable enough to correct.

## Comparable twins — the measure, and what it says about behaviour (2026-08-29)

**The question changed shape.** "Is the post twin as good as the pre twin" is answerable and not the
one that matters; a twin can predict well and represent something else. The question everything
cross-condition rests on is whether **a condition's two twins represent the same code**.

**The measure, and the thing that makes it a measure:** every similarity is calibrated against a
**same-representation reference** — two *training* seeds of the same twin, which represent the same
thing by construction. Whatever a metric reads across those is what "the same" looks like in its
units. Owner: [`comparability.py`](../../../src/analyses/perceptual-twin/analysis/.resources/perception/comparability.py)
in the perceptual-twin project; loader-free, so it runs beside a training job.

Measured on the 100 shared target images, five seeds per twin. The ratio is pre-vs-post over the
same-representation reference — 1.0 would be "as alike as two seeds of one twin":

| | no-behaviour | full-behaviour |
|---|---|---|
| stimulus drive, post / pre | 0.79 | **0.30** |
| tuning agreement | 0.60 | 0.41 |
| representational geometry (RSA) | 0.75 | 0.50 |
| population axes | 0.67 | 0.44 |
| shared variance | 0.36 | 0.17 |
| **MEI agreement** (the delivered benchmark) | **0.633** | **0.584** |
| blur factor, px² (frequency domain) | +0.26 | **+3.14** |
| cutoff frequency, pre → post | 0.273 → 0.219 | 0.210 → **0.083** |
| energy-entropy ratio (spatial domain) | 1.0115 | 1.1001 |

**Three things follow.**

**Neither arm's twins are interchangeable.** Every metric falls outside its seed reference in both
arms — pre and post do not represent the same code even without behaviour. That is expected of a
drug and it had never been given a number.

**Behaviour makes it much worse, and the gate says why.** Post's stimulus drive collapses to 0.30 of
pre with behaviour against 0.79 without — [F3](../../../src/analyses/most-exciting-image-replication/analysis/.resources/twin/findings.md)
confirmed on real stimuli rather than 20 random images. A twin that barely responds to the image is
not representing a perception, so every similarity computed on it is measuring a baseline.

**The delivered benchmark is the least sensitive instrument for this question.** MEI agreement
separates the arms by 8% (0.633 against 0.584) where the representational measures separate them by
30-40% and drive by a factor of 2.6. It answers "is the preferred image the same", which is a
weaker question than "is the code the same" — worth knowing before it is used to decide anything.

**And `energy_entropy` badly understates the arm-A resolution loss**, exactly as
[`resolution.py`](../../../src/library/stats/resolution.py)'s header warns. Its ratio makes arm A
look 9× worse than arm B; the frequency-domain blur factor makes it **12×** worse, and the cutoff
frequency falls 61% against 20%. The spatial measure is Doug's and is first-class for spread; for
*detail* the frequency one is the one to believe, and the two should be reported together so the
disagreement stays visible.

**Not yet measured:** the pupil-only and filtered-pupil arms, whose twins are still training. The
battery takes them unchanged — one row in `comparability.ARMS`.

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
