# The Word Chemistry Held

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** model · shadowed-name · tooling

---

## Symptoms

**A getter named `next` added to `$Chapter` turned the package typecheck red with 211 errors — two on the getter and the rest everywhere a `<Chapter>` stood.** The two: `TS2416: Property 'next' in type '$Chapter' is not assignable to the same property in base type '$Composition'. Type '$Chapter' is not assignable to type '(phase: $Phase) => Promise<void>'` and `TS2423: Class '$Composition' defines instance member function 'next', but extended class '$Chapter' defines it as instance member accessor`. The rest: `TS2604: JSX element type 'Chapter' does not have any construct or call signatures` in every promise file that wrote one, and `Argument of type 'typeof $Chapter' is not assignable to parameter of type 'Given<$Chemical & object>'` wherever the class was handed to the framework. Measured 2026-09-27, [Sprint 86](../projection/92-sprint-86--next-previous-and-the-display-of-chapters.md#u1)'s first unit, with the suite green at 253 of 253 beside it.

## What did not work

- **Reading the tail of the wrong typecheck.** A bare `tsc --noEmit -p tsconfig.json` in the package loses the `@/` path alias that only `src/tsconfig.json` declares, and reports 208 errors of *Cannot find module '@/utilities/Specification'* whose tail is the same override errors. The package's typecheck is `npm run typecheck` and nothing else; and the first error is the fault, not the last.
- **Reading the two hundred as the fault.** They are the shadow of the first two: a class whose one member fails its base is no longer assignable to `$Chemical`, so every component made from it fails, and every promise that renders it.

## The mechanism

**Chemistry held the word.** Every chemical is a particle, and `next(phase)` was the particle's lifecycle method — the one Book called as `next('mount')` — so no class under Writing could carry a getter by that name. The plan had named `next` and `previous` on Chapter in Doug's own words and he had approved them; the collision was found by building and not by rereading, which is [the contract rule](../../../../.claude/library/our-skillset/29-ce-plan.md) of the plan step.

## The fix

**Not in the library.** The pair was built as `after` and `before`, the decision's own words, flagged as proxies, and the question put to Doug once the rest of the sprint was built. He ruled on chemistry instead — *"for everything from formula to next, we expose symbols that we export with those names… let's give $Chemistry a clean surface area"* — it was pitched, and chemistry built it the same day as [A Clean Surface](../../../chemistry/.lib/projection/48-sprint-87--a-clean-surface.md), `541fc24`: `formula`, `resolve`, `persist`, `inline`, `selector`, `styled` and `next` are exported symbols written as keys, `this[next]('mount')`, and `view`, `frame` and `parent` stay words. The pair returned as `next` and `previous`, `bf82472`.

## Prevention

- **Before naming a member on a writing, ask chemistry's declarations for the word:** `grep -n "^\s*<word>(" node_modules/@dna-platform/chemistry/dist/chemistry.d.ts`. What remains a word there is `view`, `frame` and `parent`, and every other word is the library's — [The Coding Style](../the-coding-style/03-the-coding-style.md#the-surface).
- **The package typecheck is `npm run typecheck`**, read from the head.
- **A name the plan approved and the framework refuses is a contract fault:** raised, built under a flagged proxy, and asked — never a second word chosen alone, and never a change to chemistry from this branch.
