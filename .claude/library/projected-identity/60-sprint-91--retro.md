# Sprint 91 — Retro

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

## What was delivered

[Sprint 91](59-sprint-91--the-app-driver-build.md) delivered the **foundation and the documentation**, not a working driver:

- A typecheck gate (`.claude/tsconfig.json`, ESM/Bundler to match how `tsx` runs) where none existed. Before it, "does the driver compile" had no answer — `tsx` transpiles each file alone, which is how a constructor-arity break sat in `main` undetected.
- The app object model compiling clean — **0 core errors**. The `Composer` rewritten to [decision #2](../reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions) (no `Uia` import; `send()` verifies its own draft cleared). `session.ts`/`index.ts` neutralized honestly rather than propped up. Disposable scripts/exports left broken on purpose.
- [Invariant 6](../reference-desk/13-the-redesign.md#layer-invariants--the-sanity-test) added: everything that touches the app is async and non-blocking; `Window`'s synchronous `powershellSync` flagged as the breach to fix in the build.
- Documentation reconciled with shipped code: [ch.13](../reference-desk/13-the-redesign.md) (design, six invariants, class catalogue, removal plan, the 14-requirement mapping), the [sending IS-chapter](../reference-desk/03-01-operations--sending.md) rewritten to the real `Composer`, and `///:` annotations updated in lockstep. The link checker validates annotations and chapters alike.

## Why we call it done — and what "done" is not

The team did not pre-decide this; it was argued out, and the argument turned twice.

The word "done" was the problem first. Claude declared Sprint 87 done because the pieces were present, and it wasn't — he'd never run it. So the team refused the conflation: "the model compiles" and "the driver works" are different claims, and only one was earned. Queenie made the standard concrete — with no behavior to test this sprint, "done" can only certify claims that are *checkable*: it compiles (run the gate), and the docs match the code (read them against it). Anything about behavior is Sprint 92.

Adam supplied the checkable anchor on the implementation half — the gate, green for the app core, falsifiable by anyone who runs `tsc`. That is a "done" that cannot be faked, and it is not "works."

The documentation half failed the same standard on first inspection. Libby found that [Thoughtfulness ch.4](../thoughtfulness/04-the-code.md) still described a `Session` and a 110-line `think.ts` that no longer exist, in the present tense — the Sprint 86 sin (a synopsis describing a memory, not the code). She would not sign "documentation done" with that lie standing. Rather than rewrite ch.4 from *imagined* rebuilt code (how the lie originally got in), Claude marked it superseded-pending-rebuild, and added the same migration banner to [ch.12 The App](../reference-desk/12-the-app.md). With that, the docs either match the code or say plainly where they don't.

So "done" here means: **the model compiles, and the documentation does not lie.** It explicitly does **not** mean the driver works against Desktop. Not one of the [fourteen acceptance tests](55-sprint-89--think-acceptance-tests.md) has run — that is Sprint 92's bar.

## What carries to Sprint 92

The live-app build — M1 (`launch(): Page` reconstitute-and-confirm, with the `Window`→async cascade), M2 (send from home → `ConversationPage`), M3 (read one streaming response to completion) — and then the removal plan, `/think` on the new driver, and the fourteen acceptance tests written fresh and reliably green. The build is gated by those tests, against the running app.

## Live-test findings and process hygiene

After the retro, Doug handed over his machine to test the foundation against the live app. The probe (`index.ts`) attached to the running window and:

- **Pass** — launch, foreground verification, UIA, and sidebar list-reading all work; it read 19 real conversation titles.
- **Red** — `detectScreen()` returns `unknown`. Screen detection is broken at the URL-read; M1's `launch(): Page` reconstitute-and-confirm cannot stand on it until fixed. (Diagnostic left at `src/scripts/spike-detect.ts`.)
- **Red, environmental** — `Window.find()` via `powershellSync` intermittently fails with *"Starting the CLR failed (HRESULT 80004005)"* under process pressure. This is [invariant 6](../reference-desk/13-the-redesign.md#layer-invariants--the-sanity-test) proven in the field: a cold PowerShell per call is not just slow, it is *flaky*. It moves the `Window`→async-persistent-shell conversion from "should" to "must."

**Process hygiene (cleanup record).** The testing surfaced a process leak on Doug's machine — **109 PowerShell and ~319 node processes** accumulated. Cause: the test scripts never call `exit()`/`shell.close()`, so every run leaks its persistent PowerShell; each `npx tsx` leaves runners behind; and `powershellSync` spawns a fresh process per window call. Cleared with Doug's authorization: **108 PowerShell killed** (3 system left), node returned to 1 (the session itself was never touched — it runs on node, so a blanket kill was refused). **Sprint 92 owes a cleanup discipline**: every script closes its shell in a `finally`; `exit()` always runs; tests do not leak. This and the `Window`→async conversion are the same root — the synchronous, per-call shell.

## The lesson

"Done" is a claim, and a claim has a truth-condition. Name the truth-condition before you say the word: *compiles* is checkable, *docs don't lie* is checkable, *works* is not — until a test runs. Sprint 87 said "done" with no truth-condition and was wrong. This sprint said "done" only of the claims it could check.
