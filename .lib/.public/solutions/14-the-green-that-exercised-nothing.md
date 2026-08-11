# The green that exercised nothing

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **keywords:** verification · false-green · gate-not-run · typecheck · driver · scope
- **sprint:** [Markdown](../projection/11-markdown.md)

---

## Symptoms

- Five consecutive sprint records reported **"app `tsc` 0"** and **"driven, zero page errors"**.
- A demo page — the manifold — **crashed on open**, with `ReferenceError: held is not defined`, and had done since `13829ab`.
- Nothing failed. No number was wrong about anything except its scope.

## What did not work

- **Reading the numbers.** *"app tsc 0"* is what a healthy typecheck looks like, and there is nothing in the output that says how many files it looked at.
- **Trusting that a gate that exists is a gate that runs.** Both gates existed. Both were in the record. Neither was doing its job.

## The mechanism — two gates, two different ways of not checking

**The typecheck passed by not running.**

```
cd app && tsc --noEmit          →  exit 0,  ZERO files typechecked
tsc -p app/tsconfig.json        →  46 files, 5 errors
```

Same config file, two invocations. The one behind every recorded *"app tsc 0"* **compiles nothing and exits 0.** Four of the five errors it hid were typing debt. The fifth was `Cannot find name 'held'` — the live crash, named by the compiler, for five sprints.

**The driver passed by not being run.** `verify-book.mjs` threw at its own step three on a selector that predated a rename, exited non-zero, and printed a bare stack trace with no indication of how far it had got. **It did not lie — it simply stopped being run**, and *"driven"* quietly came to mean something ad hoc that never opened the manifold's cover.

## The fix

**Report the number with its scope attached, always.** The gate now prints:

```
app tsc (app/tsconfig.json): 70 files typechecked —
  4/4 baselined type-debt errors [named], 0 unexpected. PASS.
```

Never a bare `PASS`. A count of files, a count of known debt **named by identity**, and a count of the unexpected. Debt policed by identity rather than by number, so a fifth error cannot hide among four and a swap cannot sneak through.

**And the driver says how far it got.** Checkpoint accounting: a mid-walk throw prints every check reached and `STALLED at checkpoint N: <what moved>`. A click that finds nothing **fails the run** instead of no-opping into the next check.

## The lesson

**A gate that passes by not running and a driver that passes by not reaching are the same disease.** In both cases the number was true and the scope was silent, and the scope was the whole content of the claim.

**So: before reporting a green, say what it exercised — and make the artifact say it, not the person.** A number that cannot state its own scope is not evidence, and a human promising to remember the scope is the part that decays.

**The habit that would have caught it, and it is cheap: watch the gate go red before trusting its green.** Break the thing it checks, on purpose, and confirm it fails *with a reason*. Three deliberate breakages took minutes here and produced three named failures. **A gate nobody has watched fail is a relay wearing infrastructure's clothes.**

*Filed as the third appearance of [the stale-build law](05-the-suite-that-passed-against-a-stale-build.md) — and a symptom filed three times is a cause nobody has fixed. The cause is not any one gate. It is reporting a number without its scope.*
