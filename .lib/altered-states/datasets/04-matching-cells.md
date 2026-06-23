# Matching cells across the two scans

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

The two scans hold independently segmented populations — 1654 cells pre-DOI, 1449 post-DOI — with no shared neuron ordering and no id that means "the same cell" in both ([chapter 1](01-the-two-scans.md)). A per-cell pre/post comparison therefore needs an explicit map: which neuron in the baseline scan is which neuron after the drug. That map is built from anatomy.

## The registration file

[`unit_stack_coords.csv`](../../altered-states-doi/data/unit_stack_coords.csv) holds 4750 rows with columns `animal_id, session_id, scan_id, unit_id, stack_x, stack_y, stack_z` — every segmented unit's position in a common anatomical "stack" coordinate frame that places both scans in the same space. It spans both conditions (`scan_id` 2 = pre / session 6, `scan_id` 1 = post / session 7) and contains more units than either functional export, so it is first filtered to each scan's exported `unit_ids` before matching.

## The matcher

[`match-cells.py.md`](../../altered-states-doi/data/match-cells.py.md) implements a **reciprocal-nearest-neighbour** match: filter the CSV to each scan's exported cells, take the `(x, y, z)` stack coordinates, compute the full pairwise distance matrix (`scipy.spatial.distance.cdist`), and within a **10 µm** cutoff keep only mutual pairs — for each pre cell the nearest post cell (forward) and for each post cell the nearest pre cell (reverse), merged on both ids. The expected result is **about 749 matched cells**, the figure from the team's exploration. Because the script names scans by `scan_idx`, its `scan2` column is the pre-DOI cell and `scan1` is the post-DOI cell.

## The bug in the current stub

The stub loads the neuron id list from the **same path for both scans**:

```python
unit_ids_scan2 = np.load("meta/neurons/unit_ids.npy")  # path to scan 1 data
unit_ids_scan1 = np.load("meta/neurons/unit_ids.npy")  # path to scan 2 data
```

Both lines read one file, so both scans are filtered by the same id set and the per-scan filtering is wrong; the printed match count cannot be trusted until each scan's `unit_ids.npy` is loaded from its own scan directory. The matching *algorithm* — `cdist`, reciprocal nearest neighbour, the 10 µm cutoff — is correct; only the data-loading is broken, so the fix is a path correction. Until it is fixed and the count reproduced, treat 749 as the expected pair count, not a verified one. The matched index is the substrate for the per-cell pre/post tests (H1–H3) in [The Altered Cortex analysis plan](../the-altered-cortex/03-the-analysis-plan.md), Steps 3–5; it is reused by every one of them, so its correctness is load-bearing.

---

[Previous: [Trials, tiers, and counts](03-trials-tiers-and-counts.md)] | [Next: [Caveats that bound the science](05-caveats.md)]
