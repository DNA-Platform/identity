# The compute register

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Ledger](.cover.md)]

What compute has actually cost, including **the runs that produced nothing**. Doug, 2026-09-16:
*"Where are you logging the part where we do everything 12 times because you make a mistake? Have to
be reflective in finance."* Every estimate I had given him assumed one clean run. None of them ever
is.

**A cost estimate without a rework multiplier is not an estimate.** This page holds the multiplier
and the evidence for it.

## The measured unit costs

Measured on this machine, not assumed. One thread, so they scale by worker count.

| | measured | at 72x128 (4x the pixels) |
|---|---|---|
| one MEI or metamer, 1,000 steps, 5-seed ensemble | **10.7 min** at 36x64 | ~43 min |
| one training epoch, 3,256 cells, batch 64 | — | **4.3 min** on mains, awake, idle machine |
| one training seed | — | ~2.5-3.5 h (29-52 epochs observed) |

And the machine's own hazards, all measured: a competing job took an epoch from **4.3 to 94 minutes**
(memory paging); **battery and sleep** took it to **110 minutes** and lost six hours overnight.

## Session of 2026-09-15/16 - what was spent and what survived

| # | run | machine time | produced | why it ended |
|---|---|---|---|---|
| 1 | twins, `cells="all"` | ~85 min | **nothing** | MY ERROR - a pre/post pair fit to different cell populations cannot be compared |
| 2 | twins, matched | ~0 | **nothing** | MY ERROR - missing library entry, and a stale `window=` argument crashed the ceiling phase |
| 3 | twins, matched 1,886 | ~45 min | **nothing** | MY ERROR - per-dataset derived cutoff, replaced by one shared 10 um |
| 4 | 33328, batch 128 | ~4 min | **nothing** | MY ERROR - changed a published hyperparameter unilaterally, then reverted the decision to Doug |
| 5 | 33328, batch 64 | ~30 min | **nothing** | Doug redirected to 33977 first - not rework |
| 6 | 33977, 1,340 chained cells | ~10 min | **nothing** | MY ERROR - required a cell in all four recordings for an analysis that never needed it |
| 7 | 33977, 3,256 matched cells | 22.5 h, running | **4 seed checkpoints** | still going |
| - | metamers on the June pair | ~80 min | **nothing** | killed twice: first for memory contention I created, then for priority |
| - | the collaborator archive | ~60 min | 3 archives, sent | rebuilt 4 times as the structure was corrected |

**Roughly 5 hours of machine time produced nothing, against about 10 hours of useful training.** Six
launches preceded the first correct one, and four of those six were my error rather than a change of
direction.

## Quote costs PER ATTEMPT, never as a total

Doug, 2026-09-16: *"you project an end when you really mean 220 dollars per your attempt."*

The correction is about how the number is expressed, not about choosing a better multiplier. A
multiplier still implies I can forecast the end. **I cannot.** Tonight was seven launches for one
correct run and I could not have predicted a single one of the six failures in advance - each looked
like a finished decision at the time.

So every figure here is **per attempt**, and the attempt count is not mine to estimate:

| | **per attempt** |
|---|---|
| both twin pairs, rented CPU | ~$15 |
| all 200 metamers | ~$7 |
| top 100 cells' MEIs | ~$10 |
| all 6,512 MEIs | ~$220 |

Observed attempts-to-first-correct-run, this session: **7** for the twins. That is one data point,
not a rate. It is recorded because it is the only evidence there is, not because it predicts
anything.

**The practical consequence:** the person authorising spend needs the per-attempt number and their
own judgement about how many attempts a thing is worth - and it should never be me, because I am the
variable being multiplied.

**What actually reduces the attempt count**, in the order they would have helped tonight:

1. **Ask before anything long-running starts** - every one of the four errors above was a decision I
   made alone that Doug reversed within the hour. See the memory on purview.
2. **Rehearse on the cheap machine before paying.** A paid run should never be the first run of a
   configuration. The 36x64 June pair exists precisely for this: a full synthesis there costs
   10 minutes and proves the recipe before 43-minute syntheses start billing.
3. **Never run two heavy jobs together** - measured at 21x, not a rounding error.
4. **Check the machine is on mains and awake** before quoting any wall-clock estimate at all.
