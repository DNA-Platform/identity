# The orphan that was not an orphan

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** tooling · guessed-pattern · absent-case
- **sprint:** [The Audit](../projection/20-the-audit.md#w43)

---

## Symptoms

- **An audit reported a 705-line file as dead** — *"`sections/the-manifold.tsx` is imported by NOTHING"* — **and called it the worst finding in the pass.**
- **It was reported in the room, written into a sprint chapter, and turned into a unit of work**, all inside twenty minutes.
- ***The file is alive.*** [`sections/book/library/the-manifold/book.tsx:4`](../../package/app/src/sections/book/library/the-manifold/book.tsx) imports `$TheManifold` from it.
- **Two sprint chapters that cite the file as their escape-hatch proof were declared to be citing a corpse. They were not.**

## What did not work

- **The grep that produced the claim.** It searched for `from './the-manifold'` and `from '../the-manifold'`. ***The real specifier is `'../../../the-manifold'`.*** **Three levels, not one or two — and the pattern could not have matched it.**
- **Filtering the noise out of a second grep.** A wider search *did* list every specifier mentioning the name, and the output was filtered with `grep -v` to remove the file's own lines — **which also removed the line that named it.**
- ***Reading the result as absence.*** **A search that returns nothing has two readings — *it is not there* and *I did not look for the right thing* — and only one of them was considered.**

## The mechanism — a search written from a guess, reported as a measurement

**The audit's whole method was: do not assert, measure.** Three passes of it worked. ***This one produced a number the same way the others did and the number was about the pattern rather than about the code.***

**A grep for an import is a guess about the shape of a specifier.** *`./x` · `../x` · `../../../x` · `@/x` · `x?raw` · a dynamic `import('./x')` — six shapes, and a pattern covering two of them answers confidently about all six.*

***And the wrong answer was PLAUSIBLE, which is what made it dangerous.*** **The file really is oddly placed** — three levels above the book that composes it, where the other four books declare their class in their own folder. **So the measurement agreed with a real smell, and agreement felt like corroboration.**

*It is [the same shape as the audit's own finding about counts](../the-condition-report/01-how-to-read-this.md#why-no-gate), one level up: **a green number and a red number are both claims about what was exercised**, and a zero from a search is a claim about the search.*

## The fix — sweep from the FILES, never from a pattern

**The correct sweep inverts the question.** *Do not ask "does anything import this specifier?" Ask, for every file, whether **any other file names it at all**:*

```js
const re = new RegExp(`['"\`][^'"\`]*?(?:^|/)${esc(stem)}(?:\\.tsx?)?['"\`]`, 'm');
```

**Every quoted specifier whose last path segment is the file's own stem, with or without extension** — *which covers all six shapes at once, because it never assumes how deep the relative path is.*

***Run properly across all four programs, the answer is three files and 350 lines*** — [`Literature.tsx`](../../package/src/library/Literature.tsx) at 0, [`teaser.tsx`](../../app/src/teaser.tsx) at 198, [`case-shell.tsx`](../../package/app/src/apparatus/case-shell.tsx) at 152 — **and `the-manifold.tsx` is not among them.**

*The false positives the first correct run still produced are worth keeping: `verify-build.ts`, `verify-walk.ts`, `see.ts` and `check.ts` are **scripts run by npm rather than modules**, which [the compiler's own comment states](../../build/check.ts). **A sweep needs an entry-point list, and the folder had already written one in prose.***

## The lesson — a negative result is a claim about the instrument

***When a search finds nothing, the finding is about the search until it is about the code.*** **Say what the pattern covered before reporting what it did not find**, which is [the rule already filed for green numbers](05-the-suite-that-passed-against-a-stale-build.md) — *say what a number exercised* — **stated for a zero instead of a pass.**

**And the specific practice, because it costs nothing:** ***sweep from the files, not from a pattern.*** *Enumerate what exists, then ask what names it. A pattern written against remembered syntax will answer confidently about syntax it never saw.*

***Last: the audit caught this itself, inside the session, before the claim left the branch.*** **That is the only part worth being pleased about** — and the reason it was caught is that the sweep was re-run properly for a different chapter, ***not that anybody doubted the first answer.***
