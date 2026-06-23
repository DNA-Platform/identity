# Matching cells across the two scans

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

The two scans hold independently segmented populations — 1654 cells pre-DOI, 1449 post-DOI — with no shared neuron ordering and no id that means "the same cell" in both ([chapter 1](01-the-two-scans.md)). A per-cell pre/post comparison therefore needs an explicit map: which neuron in the baseline scan is which neuron after the drug. That map is built from anatomy.

## The registration file

[`unit_stack_coords.csv`](../../data/.archive/unit_stack_coords.csv) holds 4750 rows with columns `animal_id, session_id, scan_id, unit_id, stack_x, stack_y, stack_z` — every segmented unit's position in a common anatomical "stack" coordinate frame that places both scans in the same space. It spans both conditions (`scan_id` 2 = pre / session 6, `scan_id` 1 = post / session 7) and contains more units than either functional export, so it is first filtered to each scan's exported `unit_ids` before matching. It is itself a *derived* registration output, now archived under [`library/data/.archive/`](../../data/.archive/) alongside the raw inputs.

## The matcher

[`matching.py`](../../../src/library/io/matching.py) — the verified matcher, now part of the shared core at `src/library/io/` — implements a **reciprocal-nearest-neighbour** match: load each scan's exported `unit_ids` from its *own* folder via the data registry, take the `(x, y, z)` stack coordinates, compute the full pairwise distance matrix (`scipy.spatial.distance.cdist`), and within a **10 µm** cutoff keep only mutual pairs — for each pre cell the nearest post cell (forward) and for each post cell the nearest pre cell (reverse), merged on both ids. Because the module keys scans by `scan_idx` (`PRE = 2`, `POST = 1`), the pre-DOI cell is `scan_id 2` and the post-DOI cell is `scan_id 1`.

## Fixed and verified

The original stub had a real bug: it loaded the neuron id list from the **same path for both scans**, so the per-scan filtering was wrong and its count could not be trusted. That is **fixed**. [`matching.py`](../../../src/library/io/matching.py) loads each scan's `unit_ids` from its own folder via the data registry; the matching *algorithm* (`cdist`, reciprocal nearest neighbour, the 10 µm cutoff) was always correct, and only the data-loading needed the path correction.

The result is now **verified**: **749 reciprocal pairs**, **median nearest-neighbour distance 2.68 µm** — well inside the 10 µm cutoff — and **guarded by a regression test** ([`src/tests/test_matching.py`](../../../src/tests/test_matching.py), run under `pytest -m v1_doi`), so any future change that moves the count is caught immediately. The original `match-cells.py.md` stub is archived at [`library/data/.archive/`](../../data/.archive/).

The matched index is the substrate for the per-cell pre/post tests (H1–H3) in [The Altered Cortex analysis plan](../the-altered-cortex/03-the-analysis-plan.md), Steps 3–5; it is reused by every one of them, so its correctness — now pinned by the test — is load-bearing.

---

[Previous: [Trials, tiers, and counts](03-trials-tiers-and-counts.md)] | [Next: [Caveats that bound the science](05-caveats.md)]
