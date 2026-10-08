# The register

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [The Ledger](.cover.md)]

Every entry is sourced. **Confirmed** = read from installed source, or agreed by the team. **Open** = not settled; do not assume it. This holds the one-line settled answer and where it lives — not the reasoning, which is at the link. Updated as answers land and questions arise.

## Confirmed — verified / agreed

| Established | Source |
|---|---|
| **Bare `sensorium` model defaults** — `stacked_core_full_gauss_readout(gamma_input=15.5, gamma_readout=4, layers=3, input_kern=13, hidden_kern=3, hidden_channels=32, init_mu_range=0.2, init_sigma=1.0)` | read this turn from `sensorium/models/models.py` (installed) |
| **Bare `standard_trainer` defaults** — `lr_init=0.005, lr_decay_steps=3, max_iter=200, patience=5, lr_decay_factor=0.3` | read this turn from `sensorium/training/trainers.py` (installed) |
| **Our architecture overrides** — `layers=4, input_kern=9, hidden_kern=7, hidden_channels=64, depth_separable=True, init_sigma=0.1, init_mu_range=0.3` — the recognizable **Sensorium-2022 baseline shape** (confident; overrides the bare defaults). **Since 2026-10-08, `hidden_kern=13`**: see the next row | [ch 10](../../../src/.lib/the-build/10-the-digital-twin-recipe.md) · Sensorium-2022 baseline |
| **The core's reach, 27 → 45 px (`hidden_kern` 7 → 13), both datasets, agreed 2026-10-08.** The justification, in Doug's framing: *we addressed an artifact where the reach of the MEI exceeded the capacity of the architecture, so we adjusted the architecture to accommodate a larger reach.* What was seen: at the Sensorium core's reach (9 + 3 × 6 = 27 px on the 36 × 64 frame), 33977's CaImAn MEIs filled a hard-edged square the size of that reach, and 33328's carried the same rectangle at lower contrast. That edge is where the network stops seeing, the architecture's receptive field rather than the cell's. Dense kernels, not dilation, which would see through a lattice with holes. The precedent is the 2x frame: kernels covering too little visual angle gave squares, and scaling them back cured them. A blur floor on the MEIs was tried first and erased them rather than removing the square (mei `verification/blur-floor/`). Doug: *"Try the architecture change now. Yes we did use this on the high resolution to get what we wanted."* The 27-px twins and MEIs are at the tag `reach-27px` | `src/pipelines/digital_twin/twin/train.py` (`MODEL_CONFIG`, comment beside it) · `.archive/2x-twins` · Doug, 2026-10-08 |
| **The audit's changes** — FEVE is the published metric; **cold-primary** post twin; the **p=2 norm-and-clip is ours**. (Experimental-design controls are the Reimer Lab's, not ours.) | [full-pipeline audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/.cover.md) |
| **Behaviour crux (Franke 2022)** — behaviour inputs (pupil size, pupil-derivative, locomotion) + a pupil-position **eye-shifter**; MEIs synthesized at fixed **3rd / 97th-percentile** (quiet / active) states | audit · Franke 2022 · [ch 11](../../../src/.lib/the-build/11-how-we-make-a-publication-form-mei.md) |
| **Normalization** — per-neuron **std, no mean subtraction** (`NeuroNormalizer`: behaviour std-only, eye position z-scored) | audit §2 · [Datasets ch 2](../datasets/02-the-static-scan-format.md) |
| **MEI gradient constants — verbatim** — image blur 1.5 → 0.01, `FourierSmoothing(0.04)`, `MultiplyBy` 1/850 → 1/20400 | `nnvision/mei/regularizers.py` · [ch 11](../../../src/.lib/the-build/11-how-we-make-a-publication-form-mei.md) |
| **First measurement (Phase 2, single-seed twin)** — FEVE **0.40–0.47**; raw gain ratio median **0.54**, **89%** of matched cells reduced | [ch 13 — first numbers](../../../src/.lib/the-build/13-the-active-image-run.md) |
| **Metric labels** — the validation noise ceiling is a **leave-one-out oracle** (`get_signal_correlations`), *not* split-half; our **CC_norm** is in the spirit of Schoppe 2016, **not the literal formula** | audit · [ch 12](../../../src/.lib/the-build/12-how-we-make-a-publication-grade-twin.md) |

## Open — NOT settled

| Open question | Decision needed |
|---|---|
| **The four numeric overrides** — `gamma_input=6.3831` (vs default 15.5), `gamma_readout=0.0076` (vs 4), `lr_init=0.009` (vs 0.005), `lr_decay_steps=4` (vs 3) — **not on disk** anywhere | **[Phase-3 gate]** Does the Sensorium-2022 baseline use **fixed** gammas (copy + verify the numbers) or **fit** them per dataset (re-run the gamma search on our scan)? → Doug / CD. Detail: [ch 13 — parameter provenance](../../../src/.lib/the-build/13-the-active-image-run.md#parameter-provenance). |
| **featurevis MEI op-paths** — `nnvision.mei.ops` lacks the Walker ops; the real ops are in **`featurevis`**, not installed, so Phase 4 will not import as written | **[Phase-4 gate]** install `featurevis --no-deps` (recommended) / reimplement locally / Sprint-4 fallback. Detail: [ch 13 — parameter provenance](../../../src/.lib/the-build/13-the-active-image-run.md#parameter-provenance). |
| **Formalising the 45-px reach** — agreed and in use (Confirmed above), not yet formalised. Doug, 2026-10-08: *"It's not something we need to formalize right now exactly, but we will in the future."* | **[Before publication]** Two measurements turn the justification into a methods statement. **Prediction unchanged:** validation correlation at 45 px against 27 px, seed for seed (the first 45-px seed, 33328 pre, scored 0.316; the 27-px seeds 0.309–0.321). **The artifact gone, in the model:** each cell's twin sensitivity at a grey image, and its share on the reach's outer ring (`ring_share`, at the tag `archive/2x-twins`), at 27 px against 45 px. |

When an Open item resolves, it moves up to Confirmed with its source; when a Confirmed item is overturned, it moves down with the reason. The register is the memory; the [run](../../../src/.lib/the-build/13-the-active-image-run.md) is the present; the [README](../../reports/dataset-archive/README.md) is the procedure.
