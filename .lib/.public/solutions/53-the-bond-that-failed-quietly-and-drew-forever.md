# The Bond That Failed Quietly And Drew Forever

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **subject:** [Publicity](../..publicity/.cover.md)

---

**keywords:** `framework` · `render-loop` · `swallowed-build` *(proxy name, flagged for Doug)* · a bond that throws and is caught · `FATAL ERROR: Ineffective mark-compacts near heap limit` · a suite that dies rather than fails · a chemical whose members are undefined after its own bond

---

## The symptom

**A test file did not fail — it DIED.** `book.test.tsx`, sixteen promises, ending in:

```
FATAL ERROR: Ineffective mark-compacts near heap limit — Allocation failed
```

*No assertion, no error message, no red test.* **The worker exhausted the heap and the sixteen promises never ran at all.** *Beside it, `tsc` reported **0** and the other four files passed, so every gate but the one that died said the code was fine.*

## What was measured, 2026-09-07

***Instrumented in the real run, by session inexplicable-phenomena-7e:***

| | |
|---|---|
| **`$Book.frame` entered** | ***39,882 times*** at depth 1, from one stack |
| ***setter entries*** | ***ZERO, across 40,001 instrumented events*** |
| reactive accessors installed and wrapped | **377** — *so the instrument was live and watching* |

> ***THE LOOP IS NOT REACTIVITY.*** **It never reaches change assessment at all.** *That single number — zero setter entries against 377 live accessors — is what rules out the whole family of explanations everyone reached for first.*

## The mechanism, and it bites ANY failing bond

1. **a bond constructor throws**
2. **[`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) CATCHES it and stores the message in `c[$devError$]`** — ***swallowed, not rethrown***
3. *so every member the bond had not yet reached stays `undefined`*
4. **`$(undefined)` takes the `arg == null` fast path** ([`chemical.ts:1697-1716`](../../../chemistry/package/src/abstraction/chemical.ts)) **and ends in `React.createElement(React.Fragment, null, ...[])`** — ***A BRAND NEW OBJECT EVERY CALL***
5. **the effect at [`particle.ts:498`](../../../chemistry/package/src/abstraction/particle.ts)** — *a `useEffect` with **no dependency array*** — renders the view and compares it with `diff(current, p[$viewCache$])`
6. ***a fresh Fragment is never equal to a cached one***, so the diff is **unconditionally true**, so it writes the cache and calls `p[$update$]!()`
7. **render → effect → render, without end**

***THE ONE-LINE STATEMENT OF THE MECHANISM: a half-built chemical draws NOTHING, and nothing is not equal to itself.***

> ***AND THE ONE-LINE STATEMENT OF THE ROOT, which took Doug one sentence to reach and this chapter a whole draft to miss:*** **the framework caught an error and handed back an object the type system says cannot exist.** *Every step from 3 onward is downstream of that.*

### <a id="latched"></a>And it is LATCHED, which is what makes it permanent rather than transient

**`this._lastBondArgs = $Synthesis.snapshotArgs(newArgs)` is assigned BEFORE the try block** ([`chemical.ts:274-277`](../../../chemistry/package/src/abstraction/chemical.ts)).

***So `sameArgs` matches on the very next pass and the bond is NEVER RE-RUN.*** **The chemical that failed to build cannot rebuild itself**, and no amount of settling repairs it. *A transient fault would drain; this one cannot.*

## What did not work — two negative results, so nobody repeats them

*Both were Doug's own proposals, both were built, and both correctly changed nothing — **because reactivity is not the cause**.*

| | |
|---|---|
| ***widening the setter's quiet zone*** | *so it honours `$phase$ === 'setup'` the way the method wrapper at [`bond.ts:270`](../../../chemistry/package/src/abstraction/bond.ts) already does.* **Applied, still heap death, reverted; chemistry's diff came back clean** |
| ***a snapshot after the bond*** | *cannot help: **nothing here is a reactive write**. The bond is already quiet for self-writes ([`chemical.ts:287-288`](../../../chemistry/package/src/abstraction/chemical.ts), restored at `:323`) and the setter skips equivalent values ([`bond.ts:218`](../../../chemistry/package/src/abstraction/bond.ts))* |

## The fix — ***the obvious one was REFUSED, and the refusal is the better finding***

***An earlier draft of this chapter recorded a candidate: `$(undefined)` answering a STABLE Fragment rather than a fresh one, so a half-built chemical would settle instead of looping.*** **Doug refused it, on the type:**

> ***"`$(undefined)` — but this should be blocked by type…"***

**And he is right in a way that moves the whole diagnosis.** *No overload of `$` admits `undefined` under strict null checks.* ***So the only way to REACH that path at all is a member holding a value its declared type forbids*** — **which is the framework catching a construction failure and handing the object back anyway.**

> ***THE ROOT, restated: a swallowed throw does not merely leave an object half-built. It hands back an object THE TYPE SYSTEM SAYS CANNOT EXIST.*** *Making the drawing of that impossible object stable would have made the lie quieter, not smaller — the loop would stop and the half-built chemical would remain, permanently, with its stored message never raised.* **The fix is to not build that state.**

***WHAT LANDED*** *(session inexplicable-phenomena-47, on Doug's direct instruction, [chemistry's Sprint 48](../../../chemistry/.lib/projection/45-sprint-48--the-bond-pass.md))*:

| | |
|---|---|
| **U1 — BUILT** | ***`$exceptions.mode === 'throw'` raises regardless of dev.*** *In [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts), `if (!dev && $exceptions.mode === 'throw')` became `if ($exceptions.mode === 'throw')`* — **one condition removed, no default changed.** *Measured: **tsc 0**, **869 chemistry promises across 71 files**, a probe proving the throw reaches the caller carrying its own message, and a `build` so `dist` carries it (`.public` resolves through the symlink to `main`/`module`, so nothing reaches the consumer without it)* |
| ***U1b — NOT BUILT, and the reasoning against it is better than the reasoning for it*** | *This chapter first recorded [the latch](#latched) as **not optional**, on the argument that stopping the loop while leaving `_lastBondArgs` set would leave the object permanently half-built.* ***That argument was conditioned on the swallow REMAINING.*** **Once the bond raises, it collapses: the retry the latch forbids would run with IDENTICAL arguments and fail identically, so the latch is not what keeps the object broken — the throwing bond is.** *And lifting it would re-run a permanently-failing bond on every render inside the loop, which is more work per turn, not fewer turns.* **What survives is narrower and real: a bond that would succeed on a retry because something OUTSIDE its arguments changed — a registration that arrived, an async dependency that settled.** *That is a genuine unit, it needs that justification rather than this one, and it is Doug's call. It is [questioned in Sprint 48](../../../chemistry/.lib/projection/45-sprint-48--the-bond-pass.md), not dropped* |

> ***AND THE SHARPEST THING IN THE WHOLE ENTRY: the fix was already in the file.*** **A raise mode existed, gated behind `!dev` — in the one environment where `dev` is always true.** *A branch that can never be taken reads exactly like a policy, and this one had been read that way for as long as it had been there.*

### <a id="confirmed"></a>The confirmation, measured 2026-09-07 in `.public` — ***the same file, the same suite, one line apart***

*A probe set `$exceptions.mode = 'throw'` at the top of `book.test.tsx` and ran it (created and removed in one command):*

| | before | after |
|---|---|---|
| **the run** | ***`FATAL ERROR: Ineffective mark-compacts` at 277.13 s*** | **`Duration 2.21s`** |
| **what it said** | *nothing — 15 promises never ran* | ***`Tests 14 failed \| 1 passed (15)`***, *each with a message and a stack* |
| **the message it had been destroying** | *unreadable* | ***`a piece of writing composes the kind beneath it, or its own, and this one holds neither`***, *at `$TypeOfTitle.specifically` ← `$Title.specify`* |

> **The loop and the fault underneath it are now visibly two different things** — *which is [exactly what this chapter claimed](#what-it-was-not) before it could be shown.* ***The reported error is WHERE `specify()` RUNS: a piece of writing asked to prove itself before its children had become writings.***

### ***BUT THE RAISE IS NOT ON, and this is the open question***

**`$exceptions` defaults to `{ mode: dev ? 'render' : 'silent' }`** ([`dev.ts:79`](../../../chemistry/package/src/implementation/dev.ts)). *`dev` is true under vitest, under the dev server, in every place we actually run.* ***So the default in development is still to swallow, and a failing bond still loops there — U1 made the fix REACHABLE and nothing yet reaches it.*** **Whether `dev` should default to `'throw'` is Doug's call and it is the one that decides whether this defect is fixed or merely fixable.**

## Prevention

***The class this belongs to, and it is why the entry earns its place:*** **a framework may not catch a construction failure and return the object, because what it returns is a value whose type is a FALSE STATEMENT** — *and every consumer downstream is entitled to assume that value cannot exist, because the types told them so.* *A caught error that leaves an object half-assembled is not survivable merely because the symptom is quiet: here it converted a reportable failure into a heap death and destroyed the very message it stored, and the fix that would have quietened it would have left the lie in place.* ***The rule: raise, or do not catch.***

**And the diagnostic habit that cracked it in one number:** ***instrument the mechanism you are about to blame, and read the zero.*** *Zero setter entries against 377 live accessors is not an absence of evidence — it is evidence of absence, and it eliminated reactivity outright where three rounds of reasoning had not.*

## <a id="what-it-was-not"></a>What it is not — the fault beside it, and they were confused for each other

***This chapter's loop was found while chasing a DIFFERENT question, and the two must not be merged.*** **The bond that threw was throwing because of [where `specify()` is called](../projection/51-sprint-47--the-language-index.md#blocked)** — *a piece of writing asked to prove itself before its children had become writings.* **That is a `.public` design question and Doug has ruled on it.**

***This chapter is the framework half: whatever made the bond throw, a swallowed throw should not have produced a loop.*** *Fix where it runs and this loop stops appearing; leave this defect and the next failing bond finds it again.*

---

*Written 2026-09-07 out of [Sprint 47](../projection/51-sprint-47--the-language-index.md). **Every measurement is session inexplicable-phenomena-7e's**, taken in the real run with a live instrument; this chapter is the record, not the investigation.*
