# The suite that passed against a stale build

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** verification · false-green · stale-artifact · cross-package · dist
- **sprint:** [48 — Subjects and the Library](../projection/06-sprint-48--subjects-and-the-library.md)

---

## Symptoms

- A framework change landed in `@dna-platform/chemistry` that **should have broken four classes** in the lib. The chemistry suite went from 622 to 628 and caught the change correctly.
- The **lib suite reported 108/108 passing.** Nothing failed. The change appeared to be safe.
- It was reported in the room as a result — *"108/108"* — before anyone asked what the lib was testing against.

## What did not work

- **Reading the number.** 108/108 is what a healthy suite looks like, and there is nothing in the output that says which build it exercised.
- **Trusting `deps: { inline: [/chemistry/] }`** in the lib's `vitest.config.ts`. Inlining controls bundling, not resolution, and it reads like it means "use the source."

## The mechanism

The lib resolves its dependency through `node_modules`, and `package.json` points at the built artifact:

```
"main":   "dist/lib.cjs",
"module": "dist/lib.js",
```

A one-line probe settles it and should be the first thing run:

```bash
node -e "console.log(require.resolve('@dna-platform/chemistry'))"
# → library/chemistry/package/dist/chemistry.cjs
```

So the lib was testing **the last build of chemistry**, not the working tree. The source change was invisible to it. Rebuilding chemistry and re-running turned 108/108 into **105/108**, with three failures naming exactly the four classes the audit had predicted — *"$Cover did not call $Document"*, *"$TableOfContents did not call $Document"*, *"$Section did not call $Writing"*.

**The change was correct the whole time. The verification was not.**

## The fix

**When a change crosses a package boundary, rebuild the dependency before running the dependant's suite.** `npm run build` in `chemistry/package`, then the lib suite. Without it the run is not a weaker check — it is **a check of different code**.

## The lesson

**An unexplained pass is exactly as suspicious as an unexplained failure**, and it is far more dangerous, because nobody investigates good news. Twice in one session a suite passed where it should not have: here, and when an audit script's counts came out lower than the code warranted. Both times the number was right about something — just not about the thing being claimed.

The habit that catches it: **before reporting a green number, say what it exercised.** Not *the suite passed* but *the suite passed against this build of that dependency*. If that sentence cannot be completed, the number is not yet evidence.
