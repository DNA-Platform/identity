# On Strays

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

***A stray is a process our work started and nobody ended.*** A dev server whose shell was killed but whose child was not; a probe that waited for a page that never came; an esbuild service pinging for a parent that has been gone since Tuesday; a headless Chrome a driver launched and forgot. **Each one is small. Together they are the machine.**

**Measured 2026-09-19, the day this chapter was written:** *twenty-seven node processes, nine esbuild services, a `rollup -c` from four days earlier carrying 2,461 CPU-seconds, two driver scripts from the 17th, three probe harnesses from that morning.* ***And the thing that led to counting them was not real.*** *A dev server appeared to take 123, then 276, then 408 seconds to start — and every one of those numbers was a timing loop running to its own limit, because its match never fired: [the start that was timed by a loop that never matched](../../../library/.public/.lib/solutions/87-the-start-that-was-timed-by-a-loop-that-never-matched.md). The server started in under three seconds the whole time. The strays were worth ending; they were not slowing anything that mattered, and the performance numbers that evening were three to four times the morning's for reasons that were never isolated.*

## <a id="the-sweep"></a>The sweep — [`11-on-strays--sweep.ts`](11-on-strays--sweep.ts)

```
npx tsx .claude/library/..environmentalism/11-on-strays--sweep.ts --look     list
npx tsx .claude/library/..environmentalism/11-on-strays--sweep.ts            list, then end
```

***What it ends:*** **a node process running out of this repository; an esbuild service out of this repository; a HEADLESS Chrome.** *Those three are the shapes our work takes when it is left running, and nothing else takes them.*

***What it spares, and each is a rule:*** **whatever listens on 4242 and its whole tree** — *that is the preview Doug keeps a tab open on, and [one port is the rule](../our-skillset/34-catchup.md)* — **any Chrome that is not headless** — *that is a person's browser* — **and any node process that does not run out of this repository** — *Adobe's, an editor's, anything that is not ours to end.*

***And the stages.*** *A binder test that crashes before its `afterAll` leaves a whole library under `.test/.staged`, inside vite's root, where every later suite and scan walks it. The sweep removes them.*

## <a id="when"></a>When to run it

- **Before measuring anything.** *A number taken on a loaded machine is a number about the load.*
- **After a session that drove a browser or a dev server**, whether or not the driver reported finishing — [it was the drivers that never reported finishing that were still running](#the-sweep).
- **When a dev server takes longer to come up than it did yesterday.** *That was the symptom; this is the first thing to check.*

## <a id="why-a-tool"></a>Why a tool and not a habit

> ***Doug, 2026-09-19:*** **"remember to write a cleanup task somewhere to help with this, maybe in the binder itself or as a tool in the library if it's more general."**

*It is more general: the strays that evening came from the binder, from `.claude/src/scripts`, and from probes in a scratchpad — three sources, one machine.* **A habit is what left them there; a tool that says what it found and what it spared is what a session can run without having to remember what it started.** *The binder's own register of cleanup, which is a different thing, lives with the binder: [The Binder's Condition](../../../library/.public/.lib/the-catalogue-and-the-specification/08-the-binders-condition.md).*
