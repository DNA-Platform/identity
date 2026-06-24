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
| **Our architecture overrides** — `layers=4, input_kern=9, hidden_kern=7, hidden_channels=64, depth_separable=True, init_sigma=0.1, init_mu_range=0.3` — the recognizable **Sensorium-2022 baseline shape** (confident; overrides the bare defaults) | [ch 10](../the-build/10-the-digital-twin-recipe.md) · Sensorium-2022 baseline |
| **The audit's four changes** — FEVE is the published metric; **cold-primary** post twin; the **p=2 norm-and-clip is ours**; the **temporal-drift null** is the primary DOI control | [full-pipeline audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md) |
| **Behaviour crux (Franke 2022)** — behaviour inputs (pupil size, pupil-derivative, locomotion) + a pupil-position **eye-shifter**; MEIs synthesized at fixed **3rd / 97th-percentile** (quiet / active) states | audit · Franke 2022 · [ch 11](../the-build/11-how-we-make-a-publication-form-mei.md) |
| **Normalization** — per-neuron **std, no mean subtraction** (`NeuroNormalizer`: behaviour std-only, eye position z-scored) | audit §2 · [Datasets ch 2](../datasets/02-the-static-scan-format.md) |
| **MEI gradient constants — verbatim** — image blur 1.5 → 0.01, `FourierSmoothing(0.04)`, `MultiplyBy` 1/850 → 1/20400 | `nnvision/mei/regularizers.py` · [ch 11](../the-build/11-how-we-make-a-publication-form-mei.md) |
| **First measurement (Phase 2, single-seed twin)** — FEVE **0.40–0.47**; raw gain ratio median **0.54**, **89%** of matched cells reduced | [ch 13 — first numbers](../the-build/13-the-active-image-run.md) |
| **Metric labels** — the validation noise ceiling is a **leave-one-out oracle** (`get_signal_correlations`), *not* split-half; our **CC_norm** is in the spirit of Schoppe 2016, **not the literal formula** | audit · [ch 12](../the-build/12-how-we-make-a-publication-grade-twin.md) |

## Open — NOT settled

| Open question | Decision needed |
|---|---|
| **The four numeric overrides** — `gamma_input=6.3831` (vs default 15.5), `gamma_readout=0.0076` (vs 4), `lr_init=0.009` (vs 0.005), `lr_decay_steps=4` (vs 3) — **not on disk** anywhere | **[Phase-3 gate]** Does the Sensorium-2022 baseline use **fixed** gammas (copy + verify the numbers) or **fit** them per dataset (re-run the gamma search on our scan)? → Doug / CD. Detail: [ch 13 — parameter provenance](../the-build/13-the-active-image-run.md#parameter-provenance). |
| **featurevis MEI op-paths** — `nnvision.mei.ops` lacks the Walker ops; the real ops are in **`featurevis`**, not installed, so Phase 4 will not import as written | **[Phase-4 gate]** install `featurevis --no-deps` (recommended) / reimplement locally / Sprint-4 fallback. Detail: [ch 13 — parameter provenance](../the-build/13-the-active-image-run.md#parameter-provenance). |

When an Open item resolves, it moves up to Confirmed with its source; when a Confirmed item is overturned, it moves down with the reason. The register is the memory; the [run](../the-build/13-the-active-image-run.md) is the present; the [README](../../reports/dataset-archive/README.md) is the procedure.
