# The green that exercised nothing

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **keywords:** verification · false-green · gate-not-run · typecheck · driver · scope
- **sprint:** [Markdown](../projection/11-markdown.md) · [The Parse](../projection/13-the-parse.md) · [The Build](../projection/15-the-build.md) · [Custom Elements](../projection/17-custom-elements.md)

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

*Filed as the third appearance of [the stale-build specification](05-the-suite-that-passed-against-a-stale-build.md) — and a symptom filed three times is a cause nobody has fixed. The cause is not any one gate. It is reporting a number without its scope.*

---

## Two more of it, from [The Parse](../projection/13-the-parse.md) — and one of them is a false RED

**The relative `-p` does it too, and the gate is what caught it.** Running `tsc -p tsconfig.json` from inside `app/` printed nothing and exited 0, while `node app/typecheck.mjs` — the same config, reached by **absolute path** — reported four genuine errors in the same tree.

```
cd app && tsc -p tsconfig.json --noEmit                    →  silence, exit 0
node app/typecheck.mjs   (tsc -p <absolute>/tsconfig.json) →  65 files, 4 baselined, 4 unexpected
```

It was run as a shortcut, believed, and the real gate contradicted it. **The gate won because it states its scope and the shortcut does not** — which is the fix above, doing exactly the job it was built for. *Do not reach around a gate for a faster answer; the gate is the faster answer, because its number arrives with its meaning.*

**And the same disease inverted: a driver reported four failures that did not exist.** The dev server had been running since before three modules were deleted, so `verify-book.mjs` walked a page built from a **module graph that no longer existed** — four FAILs, all fictitious. The unit suite disagreed with the screen, and the suite was right.

```
server started before the deletions  →  4 FAIL, all against modules that are gone
server restarted, same commit        →  0 FAIL
```

**A false red costs what a false green does**, and it costs it faster: it sends you diagnosing code that is already correct. The tell is exact and worth memorising — **when a driver and the unit suite disagree about the same objects, suspect the process before the code.**

**So the scope rule extends to what the gate is RUNNING AGAINST, not only what it looked at.** A suite states which build; a typecheck states which files; **a driver states which server** — and a server that has outlived a file deletion is serving a build nobody wrote. *Restart the server after deleting a module, before believing anything it says.*

---

## A fourth appearance, found before it cost anything — from [The Build](../projection/15-the-build.md)

**The symptom, stated as it would be met:** *the typecheck reports zero errors and half of every book is missing from the build.*

**A pattern does not match a file whose name begins with a dot.** The library convention being designed names a book's cover `.cover.tsx` and its account `.synopsis.tsx`. Under an ordinary `include`, **neither exists.**

```
include: ["src/**/*.ts"]                         →  src/chapter.ts               (1 of 3)
  ..cover.ts, .synopsis.ts                       →  never seen, never reported

+ a module importing './..cover' and './.synopsis'
include: ["src/**/*.ts"]                         →  all four files, 0 errors
```

**Both halves matter.** A glob passes over them silently — no warning, no count, the same true-number-silent-scope disease as everything above. **An explicit import finds them and compiles clean**, which is why the convention survives at all.

**The fix is structural rather than procedural, and that is what makes it hold.** The generated module that composes a book imports its cover, its synopsis and every chapter by name. **So that module is the only door into the dotted files** — and a gate must enter through it, never by walking a pattern. *A typecheck configured over `src/**` would report a confident zero across a library it had read half of.*

**Filed as the fourth appearance, and the first one nobody paid for.** *Three earlier entries were found by something already broken; this one was found by [testing the assumption before building on it](../projection/15-the-build.md). The cause is unchanged — **a number without its scope** — and the only thing that changed is when it was asked.*

---

## A FIFTH APPEARANCE — and this one is the false red, recurring after it was filed. From [Custom Elements](../projection/17-custom-elements.md), 2026-08-18

***The stale-server rule above was already written down, and it cost this branch a session anyway.***

**Two dev servers had outlived the modules they were serving**, and both demo drivers were run against them:

```
servers started before the modules changed  →  49 checkpoints · 23 checkpoints
restarted, SAME COMMIT                      →  61 checkpoints · 25 checkpoints
```

**The tell was not a FAIL this time. It was a SHORT COUNT** — and that is only legible because [this chapter's own fix](#the-fix) made the driver report how far it got. *A bare stack trace would have said nothing, and 49 looks like a number rather than like a stall.* **The gate caught its own recurrence.**

***So the interesting part is not the defect, it is that the fix did not hold.*** What this chapter prescribed — *restart the server after deleting a module, before believing anything it says* — is **a rule a person has to remember**, and it was written by the same team that then did not remember it. **A procedural fix does not kill a class.**

**What is procedural today, stated so the structural version can be chosen rather than drifted into:** the driver **attaches to a server it did not start** and has no way to ask whether that server's modules are the ones on disk. *Two shapes would end it — the driver starting its own server, or the served page carrying a build identity the driver asserts against the working copy.* ***Neither is built; both are named here rather than left for the next person to rediscover.***

**Until one of them exists, the mitigation is a runbook line rather than a rule** — [the sprint's own *How to see it*](../projection/17-custom-elements.md) now says *start the server yourself before driving it*, next to the command, where somebody about to drive will actually read it.

---

## A SIXTH APPEARANCE — ***the same signature, a different cause, and the runbook line was followed.*** From [Semantics, Then Drawing](../projection/21-semantics-then-drawing.md#the-drivers), 2026-08-24

***The numbers above are exact, and they recurred.***

```
the fifth appearance, stale servers      →  49 checkpoints · 23 checkpoints
restarted, same commit                   →  61 checkpoints · 25 checkpoints

the sixth appearance, a server I started →  49 checkpoints · stalled at 1
the navigation corrected, same commit    →  61 checkpoints · 31 checkpoints
```

**Forty-nine and sixty-one, twice, six days apart, from two causes with nothing in common.** *The mitigation this chapter prescribed — start the server yourself — **was followed***: the server was started for this run, on a free port, with `--strictPort`. **It did not help, because the cause was not the server.**

***[The red that exercised nothing](26-the-red-that-exercised-nothing.md) has the mechanism*** — `networkidle` unreachable while a cold vite compiles 170 modules, and a `waitForSelector` bound to an execution context that a full page load destroys. **What belongs HERE is what it says about this chapter's own fix.**

| what this chapter concluded | what the sixth appearance adds |
|---|---|
| ***"a procedural fix does not kill a class"*** | **confirmed twice over.** *The rule was remembered this time and the class survived anyway, because the rule addressed one cause of a signature that has at least two* |
| ***the short count is the tell*** | **it held, and it is the reason this was caught at all** — *but a short count says the walk stopped, never why, and "49" was read for an hour as a claim about the sprint's catalogue work* |
| ***two structural shapes would end it*** | ***a third is now built and the other two are still not.*** **The wait no longer dies with the page** — it polls across a navigation and names the landmark that never arrived. *The driver still does not start its own server, and the served page still carries no build identity* |

***And one thing this chapter did not say, which cost the most hours:*** **a short count POINTS.** *Every stall was at a step that leaves a book and returns to the shelf — a true pattern, and it indicted the framework work the sprint had just finished.* **A stall's location is where the instrument gave way, not where the code is wrong**, and those coincide only when the instrument is sound.

> ***The driver's own report is the thing to harden next.*** **`STALLED at checkpoint 50: Waiting for selector [data-book] failed` is a sentence about the app**, and it was a sentence about puppeteer. *A stall should say what it was standing on when it stopped — the URL, whether a navigation was in flight, and whether the context survived — because [this chapter's whole method is making a gate say what it exercised](#the-fix).*
