# The static-scan format

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

Each scan is a self-contained directory in the **neuralpredictors `FileTreeDataset`** layout — the Sensorium lineage's static-scan format. That this is the exact lineage format is *why* the Sensorium tooling loads it directly, with no custom reader (see [The Build](../the-build/.cover.md)). A scan has two parts: `data/` (the per-trial arrays) and `meta/` (the per-neuron and per-trial metadata).

## `data/` — one `.npy` per trial

Four parallel folders, each holding one file per trial named by trial index (`0.npy` … `N-1.npy`), all aligned by that index:

| folder | per-trial shape | what it is |
|---|---|---|
| `responses/` | `(n_neurons,)` | one response scalar per neuron for the trial (deconvolved calcium activity) |
| `images/` | `(1, 36, 64)` float32 | the grayscale stimulus shown — channel × height 36 × width 64 |
| `behavior/` | `(3,)` | three behavioral covariates for the trial |
| `pupil_center/` | `(2,)` | the `(x, y)` eye position |

The behavior triple follows the Sensorium convention — pupil size, its temporal change, and running/treadmill speed (the exact channel order is worth confirming against the loader). Note that the [walkthrough notebook](../../altered-states-doi/data/dataset_walkthrough.ipynb) labels `behavior` a "running speed" timeseries and comments its shape as `(n_timepoints,)`; the array is in fact three scalars. Read the shapes, not the comments.

## `meta/neurons/` — one entry per neuron

Aligned to the order of the `responses` vector: `unit_ids.npy`, `animal_ids.npy`, `sessions.npy`, `scan_idx.npy`, and `cell_motor_coordinates.npy` `(n_neurons, 3)` — each cell's XYZ position in *this scan's own* motor-coordinate frame. The cross-scan registration into a common anatomical space is a separate file, [`unit_stack_coords.csv`](04-matching-cells.md), not these per-scan coordinates.

## `meta/trials/` — one entry per trial

`tiers.npy` (the train / validation / test split — see [chapter 3](03-trials-tiers-and-counts.md)), `frame_image_id.npy` (which image was shown), `frame_image_class.npy`, `frame_presentation_time.npy`, `condition_hash.npy`, `trial_idx.npy`, the timing fields (`frame_last_flip`, `frame_pre_blank_period`, `frame_trial_ts`, `integration_window`, `sampling_timepoints`), and `album`, `animal_id`, `scan_idx`, `session`.

## `meta/statistics/` — normalization

`meta/statistics/<type>/{all,stimulus_Frame}/{mean,std,min,max,median}.npy` holds precomputed statistics per data type. The standard normalization is `(x − mean) / std` using the `all` statistics; for responses, `mean` and `std` are `(n_neurons,)`.

## The relative-path gotcha

The [walkthrough](../../altered-states-doi/data/dataset_walkthrough.ipynb) loads `responses/{i}` and `images/{i}` but `data/behavior/{i}` and `data/pupil_center/{i}` — inconsistent prefixes. On disk **all four live under `data/`**. Loaders must set the working directory to the scan root (or use absolute paths); the relative paths in the walkthrough only resolve from a particular, undocumented working directory. [The Build](../the-build/.cover.md) records how the analysis fixes this.

---

[Previous: [The two scans](01-the-two-scans.md)] | [Next: [Trials, tiers, and counts](03-trials-tiers-and-counts.md)]
