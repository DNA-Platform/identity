# The Mirror With Two Directions

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [David](../../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)
- **keywords:** `demo` · `tooling` · `stale-artifact` · `sync`

---

## The symptom, twice

**First, Sprint 63:** three files edited under `.wiki/` vanished after a build. Nothing threw. The reader had written them, the next `npm run build` ran, and they were gone.

**Then, Sprint 64:** the paper's theme switch would not switch, in a headless browser, in Chrome, in VS Code's browser, after the switch's code had changed. `verify:latex` was green on both readings. Every probe read the same sheet before and after the press.

## What it was

A demo exists twice: a source tree the author edits, and a served tree Vite reads, and the served tree is a **mirror** that a binder writes. A mirror has two directions and each cost a session.

- **Served to source.** `sync.ts` ran in `prebuild`, copying the served tree back over the source before every rollup. So an edit made in the source between builds was undone by the build. That is the three vanished files.
- **Source to served.** `build.mjs` in each demo's `.public` copies source to served. A package rebuild, `npm run build` at the package root, does not run it. So the served `.book.tsx` still read `sheet.$register(Book)` while the source read `this.theme = $check($(sheet), '!')`, and every browser was running the old switch against a new package. The line that proved it: `curl http://localhost:5310/aaronson/.book.tsx | grep register`.

## What fixed it

`sync.ts` came out of `prebuild`; the compiler's direction, source to served, is the one direction. And the rule for a session: **after editing a demo's source, re-bind that demo** — `node .latex/.public/build.mjs`, `node .wiki/.public/build.mjs` — before trusting anything a browser shows. When a served page disagrees with the source, read the served file from the server first; it took an hour to ask that question.

## Where it is recorded

[Sprint 63](../projection/69-sprint-63--the-encyclopedia.md#stand3) for the syncer, [Sprint 64](../projection/70-sprint-64--themes-by-registration.md#stand) for the binder.
