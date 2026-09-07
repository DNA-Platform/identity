# The rule that stopped running, and the suite improved

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** `framework` · `mechanical-edit` · `unrun-rule` *(proxy name, flagged for Doug)* · a suite that improves because a check stopped running · a sweep that deleted the line it had just written · a method whose whole body was one call

---

## Symptoms

- **A refactor moved specification into one hook and the suite got BETTER** — *91 passed / 5 failed* became ***94 passed / 2 failed***, same 96 promises. It was reported as landed and working on the strength of that.
- ***`tsc` 0. Build clean. No warning anywhere.*** *Every gate agreed.*
- **The demo drew.** *Nothing on the page said a rule was missing, because nothing on the page was being refused.*
- ***And the specification had run NOWHERE for hours.*** *The moment the hook was restored the same suite reported **58 passed / 5 failed** — three real faults it had been unable to see.*

## The mechanism — ***the sweep deleted the line it had just written***

**One script did two things in one pass, in this order:**

1. **wrote the hook** — `valid()` on [`$Writing`](../../package/src/writing/Writing.tsx), whose entire body was `this.specify();`
2. **swept the 39 scattered calls** — removing the string `        this.specify();` from every file under `src`

***The line it had just written is that string, at that indentation.*** **So step 2 deleted the body of the method step 1 existed to create**, and left behind:

```ts
valid(): boolean {
    return true;
}
```

*A method that satisfies its caller, answers what its name promises, and does nothing.* **The report said "39 calls replaced by one hook" and 39 calls had indeed been replaced — by nothing.**

## Why the number moved the RIGHT way, which is the part worth keeping

***The refactor contained a real fix and a silent deletion, and the real fix was worth more than the deletion cost.***

| | |
|---|---|
| **the real fix** | *`$Composition`'s bond called `this.specify()`, and every derived bond calls `super.$Composition(...)` FIRST — so the base validated a title before the title had added its heading.* **Removing that early call turned three failures into passes** |
| ***the silent deletion*** | ***cost nothing visible, because a rule that does not run cannot fail*** |

**Three promises went green and none went red, so the number moved by exactly the amount the good half earned.** *There is no arithmetic that separates them from outside.*

> ***THE ONE-LINE STATEMENT: a check that stopped running is indistinguishable, from the outside, from a check that started passing.*** **Both are a green number, and the green one is louder.**

## What did not work

| | |
|---|---|
| ***reading the suite*** | *91 → 94 is a true measurement of a moving target. It is equally consistent with "the rules now pass" and "the rules no longer run," and nothing in the number chooses* |
| ***every other gate*** | **`tsc` 0, build clean, no lint, no warning.** *A deleted call to a void method is legal in every sense a compiler checks* |
| ***the demo*** | *it drew, and it drew because it was not being refused. **A demo is only evidence when the thing that would refuse it is alive*** |

## The fix

**The call restored, and the honest number stated beside the flattering one:** *the same 63 promises went from **61 passed / 2 failed** to **58 passed / 5 failed** the instant the rule ran again.* ***Three faults that had been in the code the whole time.***

**And a demo that had been drawing began drawing `$Chemistry: Bond Constructor Failed` — three refusals at once**, one of which was a book's own made-empty apparatus and two of which were the demo's content. *None of that was new. It had been invisible.*

## Prevention

***Verify a change by READING the changed region, never by a downstream number that moved.*** **A claim of the form "X now calls Y" is proved by seeing `Y` inside `X`.** *A suite result cannot prove it, and this one actively argued against it.*

**Ask what else would produce this number.** *If a metric improved, the two candidates are always "the thing got better" and "the thing that measured it stopped." **The second is more likely after a refactor**, because a refactor is exactly the act that can remove a measurement.*

***A pass that both writes and removes the same pattern must write AFTER it sweeps, or write a form the sweep cannot match.*** **Order is the whole defence and it is free.**

*Beside that, the operational hazard the same session hit twice: on Windows the scratchpad is CASE-INSENSITIVE, so `W.bak` and `w.bak` are ONE file — backing up a source and a test whose names differ only in case destroyed the source, and the restore then wrote the test file over it. Recovered from `dist/lib.js.map`, whose `sourcesContent` embeds the original TypeScript. **Never name two backups differing only in case, and check the line count of every file a probe touched.***

---

*Sibling to [the sentences that said the opposite](22-the-sentences-that-said-the-opposite.md) — the same mechanical-edit class, and the two halves of it. **There the edit was on PROSE and each substitution was individually legal while an eighth of them inverted the sense; here the edit was on CODE and every deletion was legal too, but one of them was the point of the change.*** *That chapter names this branch's standing disease as **"a number that is true with a silent scope"**; this one is that disease with the scope silently emptied.*
