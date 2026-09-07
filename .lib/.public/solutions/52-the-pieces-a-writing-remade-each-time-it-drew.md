# The Pieces a Writing Remade Each Time It Drew

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` `model` `rebind` `render-make` `render-loop`

---

**Symptom:** on every re-render of a `$Writing`, the pieces it holds are rebound as new instances, their bond constructors run again, and the old instances unmount — while the writing's own bond runs once and its block keeps its identity. Observed 2026-09-06 as instances rebound and old ones unmounted on every re-render of a Writing, measured to the frame in [the Wikipedia demo sprint](../projection/49-the-wikipedia-demo.md#the-theme-and-the-loop), where a member write at mount turned the remaking into a loop that ran until the heap was gone.

## <a id="not-these"></a>What this chapter does NOT explain — ***a wrong attribution, withdrawn 2026-09-07***

***Three red `.public` promises — a mention's `href`, a book's table of contents, a book's first region — were attributed to this chapter and they do not belong to it.*** **Session inexplicable-phenomena-a7 measured it out:** *`$Reference`'s bond runs **exactly once, at build**, with the right text; it is never re-run at draw, nothing is remade, and the held object is identical before and after drawing.*

> ***The reasoning that produced the wrong attribution, kept because the trap is reusable:*** **"built clean and drawn refused" is a real signature but it does not identify a MECHANISM.** *Both faults happen AT BUILD; the exception is merely STORED and rendered as a panel later, so a build-time failure wears a draw-time face.* ***And `specify()` called by hand AFTER construction passes on an object whose construction already failed and stored it*** — **which is [Solutions 53](53-the-bond-that-failed-quietly-and-drew-forever.md)'s own lesson, one level out, walked into by the person who wrote it.**

*What those three actually are: a mention inheriting `a reference carries a path` and asking `searchFor`, which is **shallow by design**, for a `$Path` that sits one level deeper inside the reference it HOLDS; and `a title means what it titles` refusing a bare `<Title>` at construction. **Both are `.public` semantics and both are Doug's rulings** — they are [Sprint 48's U7](../projection/52-sprint-48--the-level-a-writing-generates.md#u7).*

## The mechanism, measured

**The defining line is in the synthesis.** A chemical's `[$bond$]` hands its children to the synthesis on every render, and `process` groups the inline children; the group is flushed through `groupInline`, whose flush lifts each inline element with `evalElement(c, this._chemical)` — a fresh `$Eval` host per element per pass, whose own synthesis has no bound-child cache, so every pass binds a new instance. The group lands in a `block` element keyed `$b0`, and THAT is cached by the writing's synthesis: the same `$Block` instance is reused, its `elements` prop is written with the new pieces, and `sameArgs` sees the same block and skips the writing's bond constructor. So the writing keeps its block and its bond, and the block's contents are new. ([chemical.ts](../../../chemistry/package/src/abstraction/chemical.ts), `groupInline` and the bound-child cache in `process`.)

**The numbers.** `drawn(<Writing><TypeOfSection /><Reference />a</Writing>)`, frames counted at `frame()`: the writing `[38]` and its block `[51]` held their identity for the whole run, while the block held `TypeOfSection[53], Reference[56]`, then `[70],[73]`, then `[84],[87]`, then `[98],[101]`, then `[112],[115]`; the `$Reference` bond ran at frames 2, 3, 19, 33, 47 and 61 on a new instance each time, and `$TypeOfReference` was made anew with each. Two passes at mount (the first paint and the change-detection effect), then one remaking per re-render of the writing. With a wake at the piece's mount the cycle was fourteen frames long and did not end; without one, a re-render costs one remaking and stops.

**What it means for `specifically`.** Not re-measured tonight, and it does not need to be: [Solutions 44](44-the-enforcement-that-detonated-per-render.md) measured `specifically` running once per render on a fresh writing whose block never carries its previous append, and this chapter is the mechanism under that measurement — the fresh writing is the rebound instance. So a type added by `addType` inside `specifically` is added to the instance of that render and does not survive the next re-render of the writing; it is added again, to the next instance, when `specifically` runs again there. Creation is tolerable in that seat, mutation is not, and a member the design derives in `specifically` must be derivable from the same inputs every time — *a level fixed in the bond is fixed on an instance that is itself remade, so the bond is not a safer place, only a stated one.* (State of this claim: the remaking is measured; the per-render `specifically` is Solutions 44's measurement; their conjunction is read, not run.)

## What it is not

It is not the loop. The loop needed a wake — a member write on the piece at its mount diffusing to the writing — and that wake is gone ([the assignment](../../../chemistry/.lib/composition/14-the-assignment.md#and-it-threads-the-lineage)). The remaking stands, pre-existing, and Doug ruled it his: *"the speed of your innovation means $Chemistry might need to be cleaned carefully as a codebase but I will do that later."*

## See also

- [The Wikipedia Demo — the theme, the default on, and the loop](../projection/49-the-wikipedia-demo.md#the-theme-and-the-loop) — where it was measured and what it looped.
- [The Enforcement That Detonated Per Render](44-the-enforcement-that-detonated-per-render.md) — `specifically` per render on fresh writing, the symptom this chapter is the mechanism of.
- [Catalyst Graph](../../../chemistry/.lib/composition/08-catalyst-graph.md) — a child binds to the chemical whose bond interprets it, and the eval form's throwaway host.
