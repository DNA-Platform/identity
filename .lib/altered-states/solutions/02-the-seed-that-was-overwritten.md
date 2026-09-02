# The seed that was overwritten

- **keywords:** twin · pipeline · overwritten-parameter · lost-work
- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

## Symptoms

Two rows of a results table, read at 09:45 after an overnight run:

```
reverse_mirror_pre_B_seed0   epochs 60   val_mse 0.887570   pixel r 0.2387   masked r 0.2538
reverse_mirror_pre_B_seed1   epochs 60   val_mse 0.887570   pixel r 0.2387   masked r 0.2538
```

Agreement to five decimal places on every model metric. Training does not do that.

What was observed before it was named:

- The two checkpoints **differ on disk** — different md5, different file sizes in the metadata,
  different recorded `minutes` (124 against 119). They look like two runs because they *were* two
  runs.
- The **epoch-0 validation losses differ**: 1.02371 against 1.03658. So the runs genuinely started
  from different places.
- And yet `max|weight difference|` across every tensor in the two state dicts is **0.000e+00**.

Every signal a status check normally reads said the seeds were working. Different runtimes,
different hashes, different starting losses. Only the final metrics agreeing too exactly gave it
away.

## What it was

`torch.manual_seed(seed)` was the first statement in `train()`, before the data was loaded:

```python
torch.manual_seed(seed)
t0 = time.time()
(r_train, i_train), ... = load_pairs(which, arm)     # <- resets the global RNG
...
net = build(n_cells, height, width, arch)            # <- initialised from seed 1, always
```

`load_pairs` calls `data.condition_loaders`, which calls the lab's `static_loaders(..., seed=1,
...)` — and that reseeds the **global** torch RNG. So the seed passed on the command line was
overwritten before a single parameter was initialised, and every run built its network from seed 1
whatever was asked for.

The data *shuffling* still varied between runs, because it draws after the reseed. That is what
produced the different epoch-0 losses and made the runs look independent.

## The fix

Seed **after** the loaders, immediately before the network is built. Verified separately rather
than assumed: `manual_seed(0)` and `manual_seed(1)` give an initialisation differing by
`max|diff| 0.5890`, and the same seed reproduces at `0.0`. The mechanism was never broken — it was
being undone.

## Why it mattered more than a wasted night

Six hours and three checkpoints were discarded. That is the cheap part.

**A five-seed ensemble of five copies of one network reports zero seed spread.** Every
cross-condition comparison built on it would have looked far more certain than it is — the same
failure as [quoting a borrowed noise
floor](../the-altered-cortex/05-the-working-state.md), except manufactured here rather than
imported. On this branch the seed spread on stimulus drive is ~27%, *larger* than the ensembling
effect, so a spread of zero would not have looked implausible. It would have looked like a clean
result.

## What generalises

**A parameter you pass is not a parameter that is applied.** Anything that reaches a library call
can be reset by it, and global RNG state is the most commonly reset thing in numerical code. The
check is cheap and nobody runs it: *set the knob two different ways and confirm the output differs.*

**The forward twins were never affected**, and the contrast is the lesson. `build_model(loaders,
arm, seed)` takes the seed as an **argument** rather than reading global state, so its five seeds
score 0.3810 to 0.3999 — genuinely different networks. A parameter handed directly to the thing
that consumes it cannot be overwritten between setting and use; a global cannot make that promise.

**Identical results across conditions that should differ is a stronger alarm than a wrong number.**
A wrong number invites interpretation. Two rows agreeing to five decimals invites arithmetic, and
arithmetic ends the question in about a minute.
