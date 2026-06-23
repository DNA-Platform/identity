# The two scans

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

The dataset is two scans of one animal, **33328** — the same V1 population approach recorded twice, before and after the psychedelic, with the same GrayImageNet natural-image stimulus shown both times. Everything the analysis does begins from these two directories, found under [`library/altered-states-doi/data/`](../../altered-states-doi/data/) (the immutable archives, plus an `extracted/` copy the loaders read).

## Reading the directory name

Each scan is a directory whose name encodes its identity, e.g. `static-33328-6-2-1-6-5-GrayImageNet-d2759b…`:

- `static` — a *static-scan* dataset (still images, not movies)
- `33328` — the animal id
- `6-2` — **session 6, scan 2**; the second directory is `7-1` — **session 7, scan 1**
- `GrayImageNet` — the stimulus set (grayscale ImageNet natural images)
- the trailing hash — the stimulus/condition pipeline hash, identical across the two scans, confirming the same stimulus pipeline

## The two conditions

| | Pre-DOI baseline | Post-DOI |
|---|---|---|
| directory | `static-33328-6-2-…` | `static-33328-7-1-…` |
| session / `scan_idx` | 6 / 2 | 7 / 1 |
| neurons | **1654** | **1449** |
| trials | **5936** | **5996** |

The pre/post assignment — session 6 is the baseline, session 7 is after the 2 mg/kg DOI injection — is the design's central structure; it is established from the protocol and recorded in [The Altered Cortex, chapter 1](../the-altered-cortex/01-the-dataset-and-the-design.md). This book takes that assignment as given and documents what the files contain.

## Two gotchas worth stating once

**`scan_idx` is not chronological.** The pre-DOI scan carries `scan_idx` 2; the post-DOI scan carries `scan_idx` 1. Order is fixed by the session number (6 before 7) and the protocol, never by `scan_idx`. The [match-cells](04-matching-cells.md) stub names its variables `scan1`/`scan2` by `scan_idx`, so in that code `scan2` is the pre-DOI cell and `scan1` is the post-DOI cell — mixing this up silently swaps the conditions.

**The two populations are different sizes** (1654 vs 1449) and independently segmented. The same physical tissue was imaged twice, but cell yield and ordering differ between sessions, so neither the neuron count nor the row order matches across scans, and no neuron id means "the same cell" in both. That mismatch is the entire reason a [matched-cell index](04-matching-cells.md) is needed before any per-cell pre/post comparison. The stimulus side is matched by design — the same images, including the repeated [test images](03-trials-tiers-and-counts.md), are shown in both scans.

---

[Next: [The static-scan format](02-the-static-scan-format.md)]
