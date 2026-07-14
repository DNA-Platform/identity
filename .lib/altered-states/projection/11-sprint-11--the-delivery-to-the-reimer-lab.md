# Sprint 11 — The delivery: the DOI representation, characterized and handed to the Reimer Lab

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

**Status: PROPOSAL / DRAFT (2026-07-13)** — the plan for the sprint that *delivers*. Prior sprints built and fixed the instruments: [Sprint 9](09-sprint-9--the-raw-instruments-handed-over.md) synthesized the raw MEIs + metamers across the four twins; [Sprint 10](10-sprint-10--the-y-collapse-regression-and-rebuild.md) found and fixed the readout y-collapse and rebuilt the affected twins. The materials now exist — the **149-cell four-twin overlap is complete** (147 cells in every twin), the **8 metamer sets are building**, the **decoder is next** — so this sprint turns raw materials into a **deliverable for Erin & Jake Reimer**: the pre→post characterization, the science write-up, and a self-contained archive + code + one Erin-first notebook.

The division of labour is the same as the [active-image run](../the-build/13-the-active-image-run.md): **Nancy owns the science** (the characterization, the metric choices, the "same feature, lower resolution" reading); **Adam owns the handoff** (the HDF5 archive, the zip, the notebook, the reproducible organization). This proposal is the plan both work from; the science *conclusions* are Nancy's to draw, not asserted here.

*(Settled coming in — the speed question is closed. The MEI recipe was audited line-by-line against Walker 2019 and the lab's own `nnvision` and is correct; the convergence probe shows the image only reaches corr>0.99 of its final form at **~step 850–875 of 1000** (~1.1×), so there is **no method-faithful early-stop** — the full 1000-step schedule stands, and on this CPU box the long run is accepted (a GPU re-gen is the only real speedup, spec [ch14](../the-build/14-why-synthesis-is-slow.md)). This sprint spends no more effort on speed.)*

## Aims

1. **Characterize pre→post** on the four-twin-overlap matched cells — per-cell MEI change (spec Metrics **M4**) and population-metamer change — everything **scale-invariant** (M1–M4), mirrored across arm A and arm B.
2. **Answer the behaviour-arm question** — arm A vs arm B: does conditioning on behaviour change the *recovered features*, or only the fit?
3. **Formalize the reading** — "post-DOI = the **same representation at lower resolution**" — as a bounded, caveated descriptive claim, from three legs: the aligned pre/post similarity, the high-frequency-energy drop, and the reduced-drive mechanism.
4. **Hand it off** — zip the pipeline code + the fast HDF5 archive + one **Erin-first Jupyter notebook**, self-contained, no pipeline required to open.

## Deliverables

- `results/altered_states_doi_archive.h5` — the fast, raw, high-res archive (four twins, raw data, per-cell MEIs, 8 metamer sets, decoder recons, validation), per-cell/per-target chunked for open→sort→look (deliverable.md "Layout for speed").
- `results/compare/` — the M4 per-cell change table (.csv/.npy) + M1/M2 best-one metrics + M3 exemplar indices, **both arms**, descriptive (no significance test).
- A short **science write-up** (the characterization narrative + the formalized reading with its caveats) — lands in [comparison.md](../../../src/analyses/most-exciting-image/comparison.md) Findings and is summarized for the handoff. **Never** ships the speculative predictive lens (comparison.md is explicit: the lens stays out of the Reimer deliverable).
- `deliverable/altered_states_doi.zip` — pipeline code + archive + notebook + a one-page README pointer.
- `notebooks/explore_altered_states.ipynb` — the Erin-first browser (Aim 4 detail below).

## The analyses — method + citation

### A1 · Per-cell MEI change + population-metamer change (the characterization) — Nancy
- **Cells:** the **four-twin overlap** only (present in pre/A, pre/B, post/A, post/B), in the canonical `cell_index.json` order — so row *i* is the same tracked neuron everywhere (deliverable.md symmetry guarantee). Report *n*.
- **MEI change (M4):** `1 − corr(MEI_pre, MEI_post)` in the **co-registered RF patch** after luminance/RMS match, decomposed into Δpreferred-orientation / ΔSF / ΔRF-size / Δμ — *how* the peak feature moved. **Include the already-computed shift-tolerant aligned similarity** (`metrics.aligned_corr`, max corr over ±8 px): **arm-B median 0.72** — the pre/post MEI is largely the *same feature*, off-centre. [Walker 2019 (MEI, luminance/RMS match, non-Gabor); Franke 2022 (MEIs across states).]
- **Population-metamer change (M4 second form):** `1 − corr(r_pre[i,:], r_post[i,:])` over the target images (the per-cell response-profile beneath the population metamers), plus **metamer(pre) vs metamer(post)** structure **inside the RF-covered strip** — *not* metamer-vs-stimulus (comparison.md F5: pixel resemblance is the wrong test; validate metamers by **re-evoke** ≈0.67). [Cobos 2022; Freeman & Simoncelli 2011 (metamer = invariance probe).]
- **Best-one + exemplars (M1/M2/M3):** rank by consistency-gated drive (MEI) / re-evoke-valid image fidelity (metamer); deliver **clean-in-both** and **largest-change** exemplar sets, separately labelled, never chosen to maximise the difference.
- **Required gate — the metamer seed-null floor (comparison.md F6):** before *any* pre→post metamer change is called real, compute **metamer(pre, seed 1) vs metamer(pre, seed 2)** (same twin, different init) as the reproducibility floor; only a pre→post similarity **below** that floor is a representational change, not sampling noise. (The metamer analog of the MEI seed-consistency gate.)

### A2 · The behaviour-arm question — arm A vs arm B — Nancy
- **Question (spec "The four twins"):** arm B (no behaviour) is *our* control — does conditioning on behaviour change the recovered features?
- **Method:** compute every A1 number **twice** — through the behaviour twins (A) and the no-behaviour twins (B) — on the organized common-index datasets (`mei_pre_A` vs `mei_pre_B`, etc., from `_organize.py`). An effect present in **both** arms is **not** an artifact of behaviour conditioning (comparison.md §C). Report side by side.
- **Standing correction (comparison.md F4):** arm A was **confounded** by the per-twin fixed-behaviour-state bug (now fixed in `load_twin`; arm A must be regenerated). **Arm B is the primary comparison**; arm A is the mirror, re-run clean.

### A3 · Formalize "same representation, lower resolution" — Nancy
A bounded descriptive claim resting on three legs, each already partly measured:
1. **Same feature** — high aligned-shape similarity: arm-B shift-tolerant pre/post MEI corr **median 0.72**; same RF spot, same gross structure (comparison.md F2/§A.3).
2. **Lower resolution** — a **frequency-domain** HF-energy drop, scored with frequency-aware measures (radial power spectrum, HF-energy ratio, spectral entropy vs a phase-shuffled null — **not** raw pixel correlation, which the blur confounds, F3): **arm B (clean) HF 0.052→0.026, ~2×, 17/22 cells** so far (F4); confirm on the full arm-B overlap and on the metamers, and require it to **exceed the seed-dispersion noise floor**.
3. **Mechanism** — **Michaiel, Parker & Niell 2019** (our exact drug, DOI): DOI **reduces bottom-up visual drive** while **retinotopy, tuning, and RF structure stay intact** → same feature at **lower SNR** → blurrier, lower-resolution post reconstructions. This is the empirical anchor for "same feature, lower resolution" and it *constrains* the reading to **not remapped**. [Michaiel 2019; Cobos 2022; Walker 2019.]

### A4 · The handoff — archive + code + Erin-first notebook — Adam
- **HDF5 archive** — pack the `results/_organized/` numerical datasets (raw `float32` 36×64) into one fast file: one group per twin / per metamer set / decoder, keyed by the shared `cell_index` and `target_index`, per-cell/per-target chunked so any cell's MEI (across four twins) or any target's eight metamers loads without scanning. No pre-rendered PNGs (deliverable.md).
- **Zip** — `pipeline/` (one folder per spec Part) + the archive + the notebook + a one-page README that says *open the notebook, load the archive, go*.
- **Erin-first notebook** (written for an experimentalist, prose alongside code):
  - **Load a twin** and run it on any image (checkpoints are standalone).
  - **Browse a matched cell's MEI across the four twins** (pre/post × arm A/B) beside its readout-μ and the raw stimulus — the row-aligned comparison *is* the analysis.
  - **Metamer vs decoder** on the **shared target index**: metamer_within_{pre,post}_{A,B}[k] beside `decoder_ridge[k]` / `decoder_deconv[k]` for the same target — replicating **Cobos Fig 2** (metamer wins *neural* re-evoke, the decoder wins *pixel* fidelity; comparison.md F7: ridge 0.41 > deconv 0.35 > metamer 0.22 on pixels). [Cobos 2022 Fig-2 recipe: ridge + deconv CNN, fit on train, scored on held-out test, per image.]
  - **Sort the table** by quality (M1/M2) or by change (M4) and jump to any cell/target — all figures render **on demand from the raw arrays**, no baked galleries.

## Caveats — carried into the write-up, stated plainly (spec + comparison.md)

- **n = 1 animal — descriptive, not a hypothesis test.** Every pre/post quantity is a per-cell descriptor; no significance claim.
- **No absolute-gain claim.** Per-scan std normalization removes the DOI gain change (Michaiel); we read only its *downstream* (SNR → fidelity), never amplitude. Every metric is a ratio / correlation / shape.
- **Elevation is a ~1-D strip.** The 749 matched cells tile ~0.6×0.5 mm (~5% of V1); azimuth retinotopy is clean, **elevation is effectively one-dimensional** (μ-y under-determined, spec Open Q12). Honest instruments are per-cell MEI features + metamers **within the covered strip**; elevation-specific spatial claims are restricted.
- **Low absolute reconstruction fidelity is a coverage ceiling, not a bug** (comparison.md F5) — and it **cancels** in a within-animal pre/post comparison on the same cells, so we compare **change within the covered strip**, never our whole-frame number against Cobos's 0.55.
- **Blur confound** — resolution must be scored with frequency-aware measures, not raw pixel correlation (F3).
- **Cross-condition metamers are exploratory** (spec Open Q14) — never headline; the within metamers + per-cell MEIs carry the primary claims.
- **The predictive lens stays out of the deliverable** — it is a tool for deciding what to look for, not a result (comparison.md).

## Definition of done

- M4 per-cell change (both forms) + M1/M2/M3 computed on the four-twin overlap, **both arms**, past the seed-null floors, written to `results/compare/`.
- The arm A/B mirror reported side by side; the "same feature, lower resolution" reading formalized with its caveats in comparison.md Findings.
- The archive packed and self-check-loadable; the zip assembled; the Erin-first notebook runs top-to-bottom from the archive alone.
- Handoff note to Jake Reimer & Erin (what it is, how to open it, what it does and does **not** claim).

## Close-out — logged as it lands
*(empty — fill per step as the sprint runs, like Sprint 10.)*

<!-- citations -->
[Sprint 9]: 09-sprint-9--the-raw-instruments-handed-over.md
[Sprint 10]: 10-sprint-10--the-y-collapse-regression-and-rebuild.md
