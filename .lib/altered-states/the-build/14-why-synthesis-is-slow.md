# Why synthesis is slow, and the fastest identical path

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Build](.cover.md)]

Doug asked the right question about [the active-image run](13-the-active-image-run.md): the twins are *trained* — why is making the pictures still slow? The answer, and a review of every lever that could make it faster **without changing a single output pixel**, recorded here so we don't re-derive it next time. The short version: synthesis is an *optimization*, not an inference; the one machine-sized lever (a GPU) isn't on this box; batching is provable but modest on a saturated CPU; and the only speedup that stacks cleanly on the run we're already doing is stopping each optimization early — if, and only if, it has converged.

## 1 — Why it is slow: synthesis is optimization, not inference

A trained twin makes a *prediction* cheap — one forward pass, milliseconds. But an MEI is not a prediction. It is the answer to *"what image maximizes this neuron?"*, and we find it by [gradient ascent on the image itself](11-how-we-make-a-publication-form-mei.md): start from noise, then **1000 times** — forward the image through the twin, backprop to the pixels, Fourier-smooth and normalize the gradient, step, clip, blur. The twin's weights are frozen the whole time; what moves is the *input*. So a trained twin does not make this fast — training and synthesis are different axes. "Inference vs training" is the wrong frame; the right frame is **one prediction vs a thousand-step inner loop that calls that prediction ten thousand times.**

And it is not one twin — it is the **5-seed [ensemble](12-how-we-make-a-publication-grade-twin.md)**. Every step forwards *and* backwards through all five members. So per MEI: ~1000 steps × 5 members × (forward + backward) ≈ **10,000 member-passes**. Across all **1498** MEIs (749 matched cells × pre/A + post/A) that is roughly **15 million member forward/backward passes** — plus the 32 metamers, each its own 1000-step inversion of the full population. That is the cost. It is intrinsic to the method, not waste.

## 1a — The audit: correct, and slow for the right reasons

Doug asked the skeptic's question — is the MEI code *correct*, or is it slow from a bug? I audited it against the source of truth, and the verdict is: **correct, verified line-by-line; the cost is intrinsic, not a bug.**

- **The recipe matches Walker 2019 verbatim.** The paper's [Methods](../../papers/walker-inception-loops-2019/04-methods.md) specify exactly three things and no more: Gaussian-white-noise init, the gradient **averaged over the ensemble instances**, an image-space **Gaussian-blur anneal** (large σ → small, every step), and a **Fourier gradient precondition** `G = (fₓ²+f_y²)^(−α)`. The paper pins *no* iteration count, *no* step schedule, *no* norm/clip budget — those come from the lab's implementation.
- **Our op-chain is byte-for-byte the lab's own `walker_gradient`/`walker_postup`.** Those live as module-level `Compose` objects in `nnvision/mei/regularizers.py:28–33` — `FourierSmoothing(0.04) → DivideByMeanOfAbsolute() → MultiplyBy(1/850, decay=(1/850−1/20400)/(1−1000))` and `ClipRange(−bias/scale,(255−bias)/scale) → GaussianBlur(1.5, decay=(1.5−0.01)/(1−1000))`, `bias=111.283…, scale=60.922…`. Our `pipeline/synthesis.py` reproduces each constant and the op order exactly. We *re-compose* rather than import only because `regularizers.py:1` does `from featurevis…` and **`featurevis` isn't installed** (the module is un-importable in our env) — so re-composing the identical chain from the installed `nnvision.legacy.featurevis.ops` is a *required adapter*, not gratuitous custom code.
- **The 5× ensemble cost is the method, not waste.** `mei.modules.EnsembleModel.__call__` (`modules.py:39–45`) forwards every member and averages — which *is* Walker's "gradient averaged over the instances." Removing it would change the result. (We run 5 seeds where the paper ran 4 — more instances, same method.)
- **`1000` steps is the lab's designed schedule, not our guess.** The anneal decay factors are hardcoded to `/(1−1000)` in `regularizers.py:30,33` with the comment "decays … in 1000 iterations." The blur only reaches its final σ=0.01, and the step its final 1/20400, *at* step 1000. That is why early-stop is subtle: stopping the schedule early gives the same picture *only where the image has already stopped moving* — it is not a free knob.

One honest **fidelity note for Nancy** (a match to the *code*, not the 2019 *text*): nnvision's `FourierSmoothing(0.04)` uses the form `(1−‖f‖√2)^0.04`, which is **not** the paper's `(fₓ²+f_y²)^(−0.1)` — and nnvision's *own* comment at `regularizers.py:28` says so ("not exactly the same as fft_smooth(precond=0.1) but close"). We faithfully reproduce the lab's evolved code; whether to prefer the literal 2019 filter is a science call, not a bug.

So the ~11-minutes-per-MEI is a **1000-step optimization on a 5-member ensemble** — every factor mandated by the published method. The one genuine micro-inefficiency I found is not in the recipe but in the wrapper: `_StimOnly.forward` (`synthesis.py:142`) forwards the **whole population** every step and then selects `[:, idx]` — computing thousands of readouts to use one. The conv core dominates, so the saving is modest, but subsetting the single neuron's readout is numerically exact (no cross-neuron coupling) and a safe optional trim. Everything below is about the *intrinsic* cost.

## 2 — GPU: the biggest lever, and it is not on this box

A GPU is the lever that would matter most — image-optimization is exactly the massively-parallel workload GPUs devour, and batch-of-images synthesis on CUDA is where the 10–100× numbers come from. **This machine has none.** The only display adapter is **Intel(R) Graphics** (an integrated iGPU, ~2 GB shared), and our torch is the **CPU build** (`2.12.1+cpu`, `cuda.is_available() == False`, no CUDA runtime). There is no NVIDIA device to target. The iGPU is reachable only through experimental backends (Intel XPU/IPEX, DirectML) that ship *different* kernels and *different* floating-point reduction orders — so they would **not** reproduce the archive bit-for-bit, which fails the whole point of a locked method. GPU is therefore **out on this box**, and parked as a *future* note: if the archive is ever regenerated on a CUDA machine, GPU + batching is the 10–100× path — but that is a different machine and a fresh validation, not this run.

## 3 — Batching: provable identical, but modest on a saturated CPU

Batching is the real algorithmic lever, and it *can* be made numerically identical. The proof:

- **The gradients don't mix.** Stack `B` different-neuron MEIs into one `(B,1,H,W)` batch; the twin returns `(B, N)`; the objective is the diagonal gather `sum_b out[b, idx_b]`. Because image `b` only affects row `b`, the gradient of each image is *exactly* its serial single-neuron gradient. The ensemble average is the same for every image. Identical by construction.
- **The ops must stay per-image.** Each walker op has to transform slice `b` using only slice `b`'s statistics. Most already do (FourierSmoothing is a per-image FFT; GaussianBlur a per-channel conv; ClipRange elementwise; MultiplyBy a scalar). **Two do not**, and they are the reason batching is "batch-1-only" today: `DivideByMeanOfAbsolute` computes a `(B,)` divisor and broadcasts it wrong (needs reshape to `(B,1,1,1)`), and the metamer's `ChangeNormConditional` uses a scalar `if x_norm >= norm` that is ambiguous for `B>1` (needs a per-image mask). Both are small, local fixes.
- **The init must match.** Serial synthesis seeds `RandomNormal` at `seed=0` for *every* MEI, so all start from the *same* noise; a batch must tile that one init `B` times. Trivial.

With those two op-fixes and the tiled init, **batched == serial** to floating-point epsilon — and the proof is a cheap A/B: run 8 neurons both ways, assert `max|Δ| < 1e-5`.

But here is the honest CPU caveat. The 10–100× figure is a *GPU* number — it comes from filling hardware that sits idle at batch-1. On **this** box the [run is already 12 workers on 14 cores](13-the-active-image-run.md); the cores are **already saturated**. Batching inside a worker doesn't add compute — it only makes each core's work a bit more FLOP-efficient (better SIMD/BLAS amortization), which on CPU is realistically **~1.5–3×**, not 10×, and only if we *also* drop to fewer workers to give each batch its threads. Net against an already-core-saturated multiprocess pool, the gain is modest — and it costs real build-and-prove time plus two rewrites of the locked walker ops, risking the very "identical" guarantee the archive rests on. **Verdict: worth building only when we move to a GPU; not worth interrupting a producing CPU run.**

## 4 — Convergence early-stop: the lever that actually stacks on this run

The one speedup that (a) needs no GPU, (b) doesn't touch the op code, and (c) *multiplies* on top of the multiprocessing we're already doing is **stopping each optimization when it has converged.** The recipe is coarse-to-fine by design: the [gradient step anneals](11-how-we-make-a-publication-form-mei.md) ~24× (1/850 → 1/20400) and the image blur anneals 1.5 → 0.01 across the 1000 steps, so gross structure lands early and late steps only refine detail. If an MEI's image is unchanged after step *N*, then running the same 1000-step schedule but *stopping at N* yields the **same converged picture** at *N*/1000 the cost.

The catch is exactly one thing, and it is **[Nancy's][nancy-link] call, not mine**: is the step-*N* image *equal enough* to the step-1000 image to be called the same MEI? That is a fidelity judgment, and it must be **measured, not assumed** — I have not measured the plateau step, and I will not quote a number I don't have. The cheap way to get it, *off* the critical path: instrument one worker (or re-run two already-finished cells) to log the objective and the image-delta every 50 steps, and read where the curve flattens. If it flattens hard at, say, half the steps, that is a clean ~2× on every remaining and future MEI, with an *identical converged* result — the best return available on this hardware. (Note the subtlety: because the anneal `decay_factor` depends on `n_steps`, "stop the 1000-schedule early at N" is the identical-image move; "re-run with `n_steps=N`" is a *different* schedule and a *different* picture. Only the former preserves the archive.)

## Recommendation

1. **Do not interrupt the run.** The 12-worker, guaranteed-identical multiprocess generation is *already* the fastest identical path on this box — incremental, resumable, stoppable. Killing it to chase a rewrite trades a producing run for risk.
2. **GPU: unavailable.** No CUDA hardware, CPU-only torch. Biggest lever, wrong machine. Keep it as a future-re-gen note.
3. **Batching: park it.** Provable-identical with two small op-fixes, but only ~1.5–3× on a saturated CPU and it risks the identity guarantee. Build it *if and when* we get a GPU, where it pays 10–100×.
4. **Convergence early-stop: pursue it, cheaply and off the critical path.** Measure the plateau on a couple of finished cells; if MEIs converge well before 1000 steps, stopping the same schedule early is an identical-image speedup that stacks on everything else — pending Nancy's fidelity sign-off.

The throughline of [this book](.cover.md) holds here too: the fastest path is not the cleverest one, it is the one that still *verifies itself* — a producing run whose every object is the locked recipe, and a speedup we only take once we've measured that it changes the wall-clock without changing the picture.

<!-- citations -->
[nancy-link]: ../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md
