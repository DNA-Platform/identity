# The walk that never advanced

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `model` `self-successor` `render-make`

---

## The symptom

**The test suite "got slow".** A single `npm run build && vitest run` hit a **600-second** timeout. One test file, capped at 5 seconds, at 12, at 25 — all exceeded. Doug, watching it: *"TAKING FOREVER, I don't have it."*

When a run was finally allowed to finish, it said this:

```
Error: [vitest-pool]: Worker forks emitted error.
Caused by: Error: Worker exited unexpectedly

 Test Files   (1)
      Tests   (4)
     Errors  1 error
   Duration  24.58s (transform 360ms, setup 0ms, import 548ms, tests 0ms, environment 326ms)
```

**The four numbers in that Duration line sum to about 1.2 seconds.** The other 23 were the pool waiting on a worker that had died. `tests 0ms` — nothing ever ran.

And in plain node, outside vitest, the same thing looked like success:

```
imported ok
level(chapter) = true
exit=0
```

The next line never printed. **Exit code 0, no error, no stack** — the process was gone.

## What it was

`$TypeOfChapter.below()` returned `$TypeOfChapter`.

`reflection.beneath()` walks a chain by asking each type for the one below it:

```ts
for (let kind = holding.constructor; kind !== undefined;) {
    if (held instanceof kind) return true;
    kind = this.template(kind).below();
}
```

A type that names **itself** as the type below it makes `kind` never change. The loop is infinite, `template()` allocates on every turn, and the process dies without unwinding — which is why there is no stack and why the exit code is clean.

It was reachable from `$Writing.kind`, which every chemical touches while being built, so **every worker died the moment the suite constructed anything**.

## Why it was written

Doug asked for a chapter that composes chapters — *"can you do chapter is a composition of chapters like Letter"* — and `below()` looked like the way to say so. It was not: `$Composition.parts()` already keeps a nested writing of its own kind, without `below()` naming it:

```ts
if (own !== undefined && token !== this && reflection.instanceOf(token, own)) return token;
```

So the line was **redundant as well as fatal**. `$Letter`, the model it was copied from, does not do this — it declares no `below()` at all and is terminal. Deleting the override restored both the design and the suite: **2.82 seconds, 102 green.**

## The part worth keeping

**A green number was never the thing that lied here — an ordinary word was.** "Slow" is what a stalled process looks like from outside, and it sent the diagnosis to the toolchain and kept it there for hours. In order, the causes proposed and abandoned: vite's module runner; the six `.d.ts` rollups; `@rollup/plugin-typescript` type-checking twice; the door files at the root of `src`; the size of chemistry's source; Windows Defender. Each was measured. **Each measurement was true and none of them was the cause**, because the thing being measured was never reaching the work.

Two things would have found it in minutes:

- **A stalled process and a slow process look identical in wall time and opposite in everything else.** `Duration 24.58s (… tests 0ms)` says the parts do not sum to the whole, and that is the tell — it was on screen for an hour before it was read.
- **A silent exit is a crash.** `exit=0` with output that stops mid-script is not a script that finished.

And one that cost real time on its own: **Sprint 50's measurements were quoted as current.** They were fourteen sprints old. *"It's much longer than that"* — Doug, who was watching the clock, was the instrument that caught it.

## The toolchain findings, which were real but were not this

Kept because they stand on their own, and separated because conflating them is what made the hunt long:

| | measured |
|---|---|
| `npx rollup --version` | **39.4s** wall, **0.09s** CPU |
| `node …/rollup/dist/bin/rollup --version` | **6.7s** cold, **0.3s** warm |
| `node -e "0"` | **0.1s** |

`npx` spends about **33 seconds per invocation** resolving a binary that `node` runs directly. Nothing in this repository's scripts needs it, and nothing uses it now. Separately, the build was type-checking the whole program while emitting, which `npm run typecheck` already does — a transpile-only build with no `.d.ts` and ES output only takes **1.4s** against 60.

<!-- linked from projection/61-sprint-55--the-two-ladders.md -->
