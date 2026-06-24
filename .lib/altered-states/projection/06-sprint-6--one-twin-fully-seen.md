# Sprint 6 — One twin, fully seen, then the rest

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**Status: PLANNED.** The execution sprint. [Sprint 5](05-sprint-5--the-publication-grade-analysis.md) built the instrument — the modular `src/analysis/` pipeline (data, model, validation), the `verify_twin` harness, `mei_recipe` — and its closing audit caught three bugs before any long run. Sprint 6 *runs* it, but under a rule that makes the long runs safe.

## The rule (Doug) — the spine of this sprint

**Because the runs are long (~5–7 h per ensemble), we build and FULLY analyse ONE twin at a time, save every image and verification value in the archive, look at it as a team, and only then decide to run the next.** No running four blind and discovering a bug at hour 38. The first twin is the gate; the other three are earned by a clean inspection. This is the whole shape of the sprint.

## Carried forward from Sprint 5

- **The instrument** — Phases 0–3 built and reviewed; the bones are sound (architecture, gammas, trainer, ensembling — CD-confirmed).
- **The gamma resolution** — `6.3831 / 0.0076` are the canonical Lurz/Sensorium baseline values (a frozen Bayesian fit, reused verbatim across the lineage), not the bare `15.5/4` placeholders. **We copy them, do not re-fit** (re-fitting is the non-canonical move). The lr overrides are fixed, low-stakes.
- **The three bugs, fixes in or scoped** — CC_norm ceiling mismatch (quarantined; FEVE is the metric), the FEVE survivorship artifact (the fixed-neuron-set discipline), cross-condition cell mis-alignment (`data.matched_pair_index`, the one canonical cell-sync map both validation and synthesis route through).
- **The retro lesson** — *convert discipline into structure*: a rule the tooling enforces is kept; a rule you must remember is fought.

## What CD taught us (captured, so it is not re-learned)

- **By-eye verification beats trusting a number.** The panel and its failure signatures: first-layer filters (oriented = healthy; salt-and-pepper = gamma too low *for our scan*; dead/duplicated = collapse) — *this is the visual test that the copied gamma transfers to Reimer data*; readout retinotopy (smooth sheet vs scramble/collapse); MEIs (localized complex non-Gabor vs clean-Gabor/noise/clip-saturation); predicted-vs-measured (positive non-negative diagonal vs band/sign-flip/scale-mismatch); distributions (non-negative right-skewed; *negatives ⇒ mean-subtraction crept in*); and the **shifter ablation** (predict with vs without `pupil_center` — identical means arm A degenerated to arm B).
- **The survivorship trap.** `get_fev`'s threshold drops a different cell set per condition; every pre/post number runs on matched cells reliable in **both** — the same-kind-of-number check now applies to **populations**.
- **Plot both in the same normalization space**; never surface the trainer's val-correlation as the twin's quality number.

## Phases

Owner in **bold**. The order is load-bearing: nothing trains until the analysis code is correct.

### Phase A — Pre-flight fixes (correct the analysis BEFORE it runs) · **Adam** + **Nancy**
- [ ] **Wire the fixed-neuron-set into the reported numbers** — a `feve`-no-threshold variant + reliability masks, every pre/post comparison through `fixed_set_compare`; report n per condition. (The survivorship cure exists but is not yet in `validate`.)
- [ ] **Shifter ablation** into `verify_twin` — predict with vs with `pupil_center` zeroed; a measurable change is the proof arm A ≠ arm B.
- [ ] **Arm-independent noise ceiling** (or drop the hand-rolled ceiling and report FEVE) — it must not depend on which arm's loaders built it.
- [ ] **Resolve the featurevis MEI op-paths** — install `featurevis --no-deps` (recommended, the real ops), reimplement locally, or the Sprint-4 fallback. Until then the MEI panel is deferred, the structural by-eye checks are not.

### Phase B — The full one-twin analysis harness · **Adam** wires, **Nancy** tunes, **Gabby** figures
- [ ] **Synthesis runner** — MEIs at the fixed quiet/active states (3rd/97th pct of the pre distribution, eye-position clamped) + reconstructions, on the ensemble.
- [ ] **Figures** — the `verify_twin` by-eye panel + the MEI grid (fixed shared scale) + the reconstruction gallery (per-image + bicubic), each verified against the published look.
- [ ] **Archive writer** — one twin → ALL artifacts (network checkpoints, MEIs, reconstructions, validation vectors, figures) written into the [dataset archive](../../reports/dataset-archive/README.md), the per-twin inspection record.

### Phase C — The first twin, fully seen · **Adam** + **Nancy**; **Doug** inspects
- [ ] Train the **first twin** (Control / Arm-A / cold) to convergence; run the full analysis; write everything to the archive.
- [ ] The team **looks**: the by-eye panel, the values, the automated red-flags (dead-filter fraction, non-negative predictions, retinotopy spread, the shifter ablation).

### Phase D — The gate · **all**; **Libby** records the decision
- [ ] Decide from the inspection whether the twin and the analysis are correct. **Only a clean inspection licenses the next twin.** A failed check is a bug to fix, not a number to explain away.

### Phase E — The rest, then the science · **Adam**/**Nancy**; nulls **Queenie**
- [ ] The remaining three twins (Control/Arm-B, DOI/Arm-A, DOI/Arm-B), each fully analysed, archived, and inspected — one at a time.
- [ ] The cross-condition **DOI tests (H1–H7)** on the fixed neuron set, each with its null (the temporal-drift null first), behaviour regressed out, raw-vs-normalized space stated. A twin that fits is not a mechanism.

## The archive is the point

Everything the run produces lives in the [Phase-8 dataset archive](../../reports/dataset-archive/README.md) — networks, computed images (as arrays, composed into figures separately), validation values, the replication index, the objective README. Doug's rule makes the archive the *inspection record*: the team can look at exactly what each twin produced and decide, and a future reader can reproduce it.

## Who's on it

**Adam** — the pre-flight fixes, the synthesis runner, the archive writer. **Nancy** — the fixed-set metric, the by-eye science, the H-tests. **Gabby** — figures. **Queenie** — the nulls + the temporal-drift control. **Libby** — the catalogue, the archive, the gate decisions. **Arthur** — structure. **Doug drives and inspects** — the gate is his call.

## Review

Succeeds when: the analysis code is correct (the pre-flight fixes landed), the **first twin is fully seen and archived before any other is trained**, every pre/post number is on the fixed matched-and-reliable set, the by-eye panel passes for each twin, the MEIs and reconstructions match the published look, and H1–H7 each carry their control on the synced cells. The discipline is structural now — the gate is a phase, not a hope.
