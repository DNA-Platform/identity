# The View That Constructed Its Parts

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` `render-make` `worker-crash` `silent-drop` `differential`

---

**Symptom:** the full suite reports 24 of 25 files and exit code ZERO — a whole file's tests vanish without failing — while every file passes alone, fast. The victim varies between runs. Runs crawl from five seconds to ninety, then to minutes; vitest prints one warning: *worker forks emitted error, worker exited unexpectedly*, above a native V8 stack.

**What did not work:** blaming the harness first. The unmounted test roots were real and old — dozens of green full runs old — so hygiene (tracked mounts, afterEach unmount) moved the ceiling and did not cure the pair; worse, the flush made the file die SOLO, detonating locally what used to leak quietly. Heap logging died with its worker; buffered reporters ate the evidence twice. Only a streaming reporter (tap-flat) survived the crash to name the neighborhood.

**The mechanism:** the table's `view()` was changed to ask `this.parts()` — and in the render path, `parts()` CONSTRUCTS: conferred cells, made shapes, binds — and every bind ran the type's full battery, every battery walked subtree text. Render-time construction times render count times battery walks crossed the worker's native ceiling; which file died depended only on when.

**The fix:** the differential — same tree, view reverted to its old text-split — took composition-experiment from 57/87 in 144 seconds to 87/87 in 4.5. The revert was KEPT until the shallow battery landed; the parts-drawing then returned against the killer pair as its gate.

**Prevention:** a view may READ what is cached and may never be the seat where the model gets built — solutions 40 and 44's law extended to `parts()`. And the instrument is the lesson: when a crash varies its victim, stop reading theory and run the differential — one change, same tree, conviction or acquittal.

**Second appearance, 2026-09-03, the rebuild:** the table view was rebuilt fresh from the ruling "in the view get the cells in the right form" and asked `parts()` again — the same seat, the same floating victim, heap death at whichever test the load reached. The parse writes parents (solutions 16), so each render of a derivative re-parses and re-adopts, an allocating loop. Convicted by only-mode bisection to one test after the per-describe runs were all green alone. **The durable cure is a view whose shape cannot construct: the table now reads its cells straight off the block's elements — a filter, a chunk, nothing made.** A law that must be remembered at each rebuild is not yet a law; a view written as a pure read is.

**Third appearance, 2026-09-04, render-the-parse:** Doug ruled that views render their parsed parts, stopped at sentence — and the implementation put `this.parts()` into `$Composition.view()`. The full suite died at 4 GB with ~225 tests vanished while every file passed alone and fast: the first appearance's exact signature. The differential this time ACQUITS the React mounting and convicts the parse allocation itself — with the old view and the parse forced at construction instead, the suite died the same way. Measured: 59 KB per paragraph parsed to two sentences, roughly 20 KB per chemical; the suite's tens of thousands of constructions sum to the worker's ceiling while a real chapter would cost ~6 MB. The law refines: the view seat was never the whole story — WHOLESALE construction anywhere is multiplied by the suite's storm count, and per-chemical weight decides survival. The ruling stands in Sprint 39; the implementation waits on one of three roads — pay the suite's cost, ship parsed rendering as an opt-in look, or a chemistry diet.
