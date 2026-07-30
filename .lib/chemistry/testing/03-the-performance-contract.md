# The Performance Contract

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

What the framework costs at runtime, measured, with thresholds for scale.

**Measurement date:** 2026-04-23

## Summary

$Chemistry is ship-ready for v1 and for most realistic app shapes beyond v1. The initially-feared "500 chemicals -> 73ms" number was worst-case initial-render cost; real-app per-event cost is dramatically cheaper because re-renders are localized to mutating subtrees.

## The two regimes

$Chemistry performance has two distinct regimes that you must not conflate.

### Regime 1: Initial render (cold start)

Rendering N chemicals from scratch into a freshly-created DOM tree. Cost is proportional to total chemical count.

| Total chemicals | Initial render time |
|-----------------|---------------------|
| 10 | ~2ms |
| 50 | ~8ms |
| 100 | ~17ms |
| 500 | ~73ms |
| 1000 | ~150ms (extrapolated) |

**Per-chemical render cost ~170us.** Roughly 7x slower than plain React; 25x slower than Solid. This is the cost of the scope-tracking + accessor overhead you pay for the reactive convenience.

### Regime 2: Per-event re-render (the one that matters)

After the tree is rendered, an event mutates ONE chemical's state. Cost does NOT scale with total tree size.

| Total chemicals | Per-event cost |
|-----------------|----------------|
| 10 | 0.171ms |
| 50 | 0.234ms |
| 100 | 0.190ms |
| 200 | 0.285ms |

**Scaling factor 200:10 is 1.67x — essentially flat.** Siblings don't re-render. The container doesn't re-render. Only the mutating chemical's subtree re-renders.

## Granularity tradeoff

Same DOM output, different internal structure:

| Design | Per-event cost | Why |
|--------|----------------|-----|
| 1 chemical with 50 items (monolithic) | 2.0ms | Re-renders whole view. Cost dominated by React's 50-element reconciliation. |
| 50 chemicals with 1 item each (granular) | **0.26ms** | Only the changed cell re-renders. Per-chemical scope snapshot is near-free. |

**Granular is 7.68x cheaper per event.** The framework rewards fine-grained composition.

**Guidance:**
- **Granular (default)** when items update independently. Each chemical is ~250us to update. Stock tickers, feed items, form fields, cells in a spreadsheet.
- **Monolithic** when all items update together (e.g., a chart that redraws atomically). The per-chemical overhead isn't worth isolation.
- Most real UIs are a mix. Organize along natural state boundaries.

## App-shape assessment

| Shape | Verdict | Notes |
|-------|---------|-------|
| Static site, <100 chemicals | Excellent | Initial render ~17ms; per-event cost negligible. |
| App with hundreds of chemicals, most idle | Excellent | Per-event cost stays flat regardless of total count. |
| App with bulk simultaneous updates across 500+ chemicals per event | Noticeable | Initial-render-like cost per event. Rare pattern. |
| App with 1000+ chemicals AND frequent full-tree updates | Static analysis recommended | Not observed in typical apps. |

## Known cost tradeoffs

- **Runtime snapshot-diff over subscription graphs.** MobX avoids $symbolize via an observer set (O(1) per read). We avoid subscription-graph complexity at the cost of snapshot serialization. Per-read cost higher; total-app complexity lower.
- **Object.defineProperty over Proxy.** Vue 3 uses Proxy and gets faster mounts. We preserve `===` identity. Framework ergonomics > 2x mount delta.
- **No automatic memoization.** Parent re-render doesn't cascade to children that don't depend on parent's state. This is React's default but with less ceremony because we don't use React.memo.

## What we haven't measured

- Memory per chemical instance. Hasn't been profiled.
- CPU-throttled performance. Real users on older devices are slower than the dev machine.
- Complex real-world interactions. Benchmarks are synthetic.
- Concurrent mode under React transitions. Not exercised.

These are good future measurement targets, not v1 blockers.

## Bottom line

The answer depends on what changes per event:

- **What STAYS STATIC** has zero cost per event regardless of quantity.
- **What RE-RENDERS** costs ~170us per chemical in the re-render path.
- In practice, most chemicals in an app are static at any given moment. The terminal updates, the file tree doesn't. The ticker updates, the header doesn't.

**"100 chemicals is a lot" translates to "100 RE-RENDERING chemicals per event is a lot."** Most apps never hit this.
