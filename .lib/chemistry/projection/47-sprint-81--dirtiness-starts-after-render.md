# Dirtiness Starts After Render

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/the-coding-style/03-the-coding-style.md)
- **status:** `closed` — *read, assessed, ruled, built, measured, committed and handed off 2026-09-24, in one session.*
- ***The chapter name and the sprint number are PROXIES.*** *The number is the team's current one — the public redraft's [Sprint 81](../../../..public/.lib/projection/87-sprint-81--reference-and-referent.md), whose session dispatched this — and the name is Doug's sentence, not a name he has given.*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

> **"I am waking you up so the other team can dispatch a small but important task to you. It has to do with this idea — when view is running, and render in general, we don't need to track changes on the executing chemical itself, because we know render happens last in the pipeline because its the result of view. Other chemicals might change how they look, but we have already rendered the current one. It's dirtiness starts after render."**

*Then "Then assess this", and after the assessment, "Build the full rule", and "Fix it, run $Chemistry promises, and then handoff to the other session".*

**The dispatch, from the redraft's session:** *a writing's `define` runs each annotation's `erase` and then its `defines` during the writing's draw. Each is a reagent of a mounted annotation, so each runs in a scope of its own; the scope recorded the read of the writing's `classes` and `id`, found them changed at `finalize`, and reacted the drawing writing — "Too many re-renders", eighteen drawn promises looped. Their proposal: skip a drawing chemical in `finalize`'s last loop.*

## <a id="the-literature"></a>What was read first

**Thirty-six documents, grep-guided from the dispatch's own words.** *The load-bearing ones:* [`scope.ts`](../../package/src/implementation/scope.ts), [`reaction.ts`](../../package/src/abstraction/reaction.ts), [`bond.ts`](../../package/src/abstraction/bond.ts)'s getters, setters and reagent, [`particle.ts`](../../package/src/abstraction/particle.ts)'s render body and settle pass, the reactivity book, [the view](../particle/06-view.md) and [the three passes](../particle/12-the-three-passes.md), the redraft's Sprint 81 and its annotation pass, and [Solutions 16](../../../.public/.lib/solutions/16-the-parse-that-woke-its-own-parents.md) and [29](../../../.public/.lib/solutions/29-the-bond-that-woke-the-tree-it-was-building.md).

***What the reading corrected.*** **The flag is raised in seven places, not two** — *props in `bind`, the bond, the persist setter, derive's recall, the mount recall, the settle pass and the render body; the view chapter lists only the render body's span.* **The rule already held for writes and failed for reads** — *both setters refuse a write during the chemical's own draw; the two getters recorded a read of it anyway, and `react()` woke it from `finalize`'s walk and from `diffuse`.* **And the refusal of 22 September** *([Walked Shapes](46-sprint-78--walked-shapes.md#the-rulings)) rested on the design being able to make its pass idempotent; the redraft had since measured that each annotation call is its own scope, so a pass that erases and re-defines is news twice per draw however idempotent the whole.*

## <a id="assessed"></a>The assessment, measured

**Five probes, run against four variants and removed in the same command; each cell is the host's draws against a control host that does nothing:**

| case | today | the proposed filter | reads untracked only | the full rule |
|---|---|---|---|---|
| another chemical takes a class away and gives it back during the draw | loops | settles | settles | settles |
| the same, with the host inside a parent | loops | ***the parent loops, 61 draws*** | settles | settles |
| the same method called outside the draw | redraws | redraws | redraws | redraws |
| another chemical changes itself during the draw | host +2 | +0 | +2 | +0 |
| a draw writes a mounted child's field | host +2 | +2 | +2 | +0 |

***The filter stops the reaction but not the walk.*** *It skips the drawing writing and still walks up from it, so the parent is woken every draw and redraws the writing — the loop moves up a level.* **The dirt has to stop at its source**, *and a drawing chemical must not be woken from any path, which only `react()` can say once for all of them.*

## <a id="the-ruling"></a>The ruling

**Doug chose the full rule** over the proposed filter and over leaving it.

## <a id="built"></a>What was built

- **[`bond.ts`](../../package/src/abstraction/bond.ts)** — *the field getter and the accessor wrapper's getter record a read only when the chemical is not drawing.*
- **[`reaction.ts`](../../package/src/abstraction/reaction.ts)** — *`react()` returns while its chemical draws.*
- **[`scope.ts`](../../package/src/implementation/scope.ts)** — *the header comment no longer claims a render cycle opens a scope.*

**Promises:** [`dirtiness-after-render.test.tsx`](../../package/tests/react/dirtiness-after-render.test.tsx), five — *a class taken away and given back during the draw settles, and a later change costs what it costs an untouched host · inside a parent, the parent draws as often as an untouched host's · the same method outside the draw still redraws · another chemical changing itself during the draw paints its change and the host is not woken · a draw writing a mounted child paints the child and the host is not woken.*

## <a id="measured"></a>What was measured

| | before | after |
|---|---|---|
| the five promises | **4 red** — *two "Too many re-renders", two "expected 5 to be 3"* | **5 green** |
| chemistry's suite | 932 of 932 | **937 of 937**, 76 files |
| `tsc --noEmit` | 0 | **0** |
| `dist` | — | **rebuilt with `rollup -c`**; the built `react()` carries the check |
| the redraft's suite, with their command, against the new dist | 151 at their floor | **159 of 159**, eleven files, their tree as it stood |

## <a id="learned"></a>What was learned

- ***A rule about a chemical belongs at the chemical.*** *A filter at the end of `finalize` answered one path; the chemical is reached from reads, from the walk, and from `diffuse`, and only the getters and `react()` see all of them.*
- ***Measure the proposal, not only the idea.*** *The filter fixed the case it was written from and moved the loop into the case it was not.*
- **The stated cost:** *an ancestor whose view reads the drawing chemical's state sees a change made during that draw only through its own settle pass, which runs when it drew in the same commit.*

## <a id="stand"></a>Where things stand

**Complete.** *Project commit `ab97399`, local and not pushed; `dist` rebuilt; handed off to the redraft's session with the commit, the rule, the measurements and their command.* **Chapters tended:** *[reactive properties](../reactivity/01-reactive-properties.md#not-dirty-while-it-draws), [scope tracking](../reactivity/02-scope-tracking.md), [diffuse](../reactivity/05-diffuse.md), [the reaction](../implementation/06-reaction.md), [the view](../particle/06-view.md), and the refusal in [Walked Shapes](46-sprint-78--walked-shapes.md#the-rulings) marked reversed.*

**Owed, small:** *the render body lowers the flag without a `finally`, and `react()` now trusts the flag; a view that throws leaves it raised until the component draws again, which today matters only while React unmounts or retries it.*

**New names:** none.
