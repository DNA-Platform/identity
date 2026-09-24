# The Gate That Checked the Archive

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**keywords:** tsc reports zero and the source is broken · typecheck passes but npm run test fails · src tsc 0 claimed all session · the wrong tsconfig · errors only in the tests folder · a green number nobody could reproduce

---

## The symptom

**A whole session reported `src` tsc **0** after every change.** The number was read off `npx tsc --noEmit -p tsconfig.json`, filtered to lines beginning `src/`. *It was zero every time, and it was zero because almost nothing under `src` was being compiled.*

**When `npm run test` was finally read rather than assumed, the real gate showed 28 errors** — every one of them from that session's own two changes, sitting untouched for hours behind a number that said they were not there.

## The mechanism, and it is two lines of configuration

`package.json` in [`lib`](../../package/package.json):

```json
"test": "tsc --noEmit -p src/tsconfig.json && vitest run"
```

`tsconfig.json` at the package root:

```json
"include": [".archive/**/*.ts", ".archive/**/*.tsx", "tests/**/*.ts", "tests/**/*.tsx"]
```

***The root config does not include `src` at all.*** It compiles the archive and the old `tests/` folder, and `src` is reached only where an archived test happens to import it. **So a source file nothing archived imports is never checked, and a new error in one is invisible.**

**The tell was there and was misread.** The root config reported five errors, all in `tests/`, all the same unresolvable v1 module — *and that steadiness was taken as "known pre-existing debt" rather than as "this project is not looking at my work."*

## The fix

**Run the gate the package declares.** `npm run test`, or `tsc --noEmit -p src/tsconfig.json` when only the types are wanted. *Nothing was changed in either config; the defect was entirely in which command was believed.*

## The lesson

***A green number is worth exactly what you know about what produced it.*** **Before a measurement is reported as a gate, read the script that the project calls its gate** — `package.json` says so in one line, and reading it costs less than one wrong claim.

**And the sharper half:** *the number was not merely uninformative, it was actively reassuring.* **Zero errors filtered to a path that was never compiled reads identically to zero errors in compiled code**, which is why the mistake survived a full session of careful work. ***A filter over an unknown population is not a measurement.***

*Its sibling is [Solutions 05](05-the-suite-that-passed-against-a-stale-build.md) — the suite that passed against a stale build — met AGAIN in this same session, when a chemistry source change was invisible to `lib` because `lib` resolves the package to `dist`. **Both are one fault wearing two faces: trusting a result without knowing what was actually run.***
