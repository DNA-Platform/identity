# The Build That Would Not Exit

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [David](../../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)
- **keywords:** tooling · stale-artifact

---

## Symptoms

**`npm run build` in the package — `rollup -c`, the full build that emits `dist/lib.d.ts` — wrote every artifact and then never exited.** Measured twice on 2026-09-27: once chained before the package suite, which never started and was killed at the ten-minute cap with `dist/lib.d.ts` written at 00:03; once alone under a five-minute cap, killed with exit 124, `dist/lib.js` and `dist/lib.d.ts` written at 07:34, complete. **The artifacts are whole both times**; only the process stays.

## What did not work

- **Waiting.** Ten minutes did not end it. Nothing it was doing after the write was visible from outside.
- **Reading it as the suite's hang.** The first time, the suite chained after the build was blamed, because the build's lines were filtered out of the output; run alone, the suite takes 3.4 seconds.

## The mechanism

**Not diagnosed.** The quick build, `rollup -c --environment QUICK`, exits as it should; the full build differs from it by the declaration emit. Whatever holds the process open holds it after the last file is written, which points at a handle a plugin leaves open rather than at work undone — but that is a reading, not a measurement, and the chapter says so.

## The fix

**None yet.** The full build is run alone, under a cap, and its artifacts trusted when their times are fresh: `timeout 300 npm run build`, then `ls -la dist/lib.d.ts`. Nothing is chained behind it.

## Prevention

- **Never chain a suite behind the full build.** Build, read the artifacts' times, then test — the compiler's typecheck reads `dist/lib.d.ts`, which only the full build writes.
- **Filter a build's output after it has ended, never while deciding whether it has.** A grep that swallows the lines that would show a hang shows nothing at all.
- **The diagnosis is owed**, to whoever next opens `rollup.config.cjs`: which plugin keeps the process alive after emit, measured with the plugins removed one at a time.
