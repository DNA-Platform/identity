# The Instance That Took the Shell's Name

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** tooling · shadowed-name

---

## Symptoms

**A bind of the test library failed at `render` with `TypeError: html.replace is not a function`**, raised in [`page.ts`](../../package/.binding/rendering/page.ts) from [`draw.ts`](../../package/.binding/rendering/draw.ts), with the typecheck at 0 errors — measured 2026-09-27, the hour the render was changed to build each page's book once and tell it its bookmark. Every regression promise after the bind went red with it, since every one reads a page the bind did not write.

## What did not work

- **Reading the failure as the new instance's.** The book was built with `$(loaded.book(), Book)` and told its bookmark, and the first suspicion was the build — a wrong element, a wrong class. The instance was fine; it had been handed to the wrong function.

## The mechanism

**Two locals of one name in one function, one shadowing the other.** `draw.ts` read the page shell once, before its loop, as `const built = readFileSync(shellOf(binding), 'utf8')`; the change gave the book instance the same name inside the loop, `const built = $(loaded.book(), Book)`, and the page function three lines later — `page(built, markup, …)` — took the instance where it wanted the shell's html. **The typecheck saw nothing**, because `page`'s first parameter is typed as the string it is and TypeScript resolves `built` to the inner declaration as JavaScript does — a book where a string was wanted is an error only at the call, and the call was written before the shadow. *Both names were role names — what a thing had been through, not what it was — which is the naming rule Doug gave on 2026-09-21: "I want variables to express what type they are and not what role they play."*

## The fix

**The instance is named for its type and its component as the promises name theirs:** `const book = $(loaded.book(), Book)`, `const Drawn = $(book)`; the shell keeps its name. *Committed as `e33086d`, Sprint 85's amended U5; the regression went from a failed bind to 26 of 26 on the rename alone.*

## Prevention

- **A name says the type, never the role** — [the coding style](../the-coding-style/03-the-coding-style.md#code-patterns). Two things of one type in one scope is the one case a qualifier is allowed, and the signal to restructure; two *role* names in one scope is how one of them silently becomes the other.
- **A bind's own words before a theory.** The error named the function and the argument; reading it first would have saved the theory about the instance.
