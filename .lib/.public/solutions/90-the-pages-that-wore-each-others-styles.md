# The Pages That Wore Each Other's Styles

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** tooling · first-paint · absent-case

---

## Symptoms

**Every page of a bound library drawn in one process carried the style rules of the books drawn before it** — measured when v1's render was first written, and the reason the render then drew each page in a child process of its own, as many at once as the machine had cores. **The cost of that cure was the other symptom:** a bind of the test library's 410 lines spent most of its time rendering six small pages, and 25 pages took 10 to 13 seconds, each child starting Node and a Vite server and transforming the whole framework to draw one page.

## What did not work

- **Reading the leak as a registration problem.** The render's own comment said a book registered its theme on a shared class when its module loaded — true of v1, and the reason recorded for the substrate to fix. In this code a Theme is a Format a book carries, and nothing registers on a shared class; the leak was somewhere else.
- **Drawing every page in one process and diffing the result.** All five pages came back byte-identical to the ones drawn a child per page — which proved nothing, because every book in the test library wears the same Theme. *A gate cannot show a leak between books that style alike: the absent case.*
- **Clearing the document's head between pages.** styled-components remembers what it has put in a sheet, so a component two books share would not be put there again, and the second page would lose it.

## The mechanism

**A page took its styles from the `<style>` tags styled-components had put in the head of the one document every page was drawn in** — [`draw.ts`](../../package/.binding/rendering/draw.ts), which read `document.head` after each render. In one process the head only grows, so the second book's page carried the first book's rules, and every page after carried all of them.

## The fix

**Each page collects its own styles in a `ServerStyleSheet` of its own, and the sheet is sealed when the page is written** — so the render draws every page with one server, [`rendering.ts`](../../package/.binding/rendering/rendering.ts) spawning one child with every name. *Committed as `66ad7cf`, Sprint 83's U4.* **Proved by a book that styles apart:** the paper is typewritten and drawn first, and [the regression](../../package/.binding/.test/binding.regression.ts) asserts its `monospace` rule is on its page and on no other — red with one server before the sheet, green after. **Measured before and after in one galley, the two renders alternated three times:** five pages 1.9s → 1.4s; twenty-five pages 10.2–12.9s → 2.7s.

## Prevention

- **A gate for a leak between things needs two things that differ.** The test library now carries one book styled apart from the rest, drawn first, so a leak would reach every page after it.
- **Anything registered on a class is registered on a book's own class** — Doug's pattern for dependency injection, [in Book](../library/05-book.md#how-it-is-extended), so what one book registers cannot reach another drawn beside it.
- **A speed claim is an A/B in one copy.** *The first number reported for this fix, 7.3s → 1.5s, set a render measured under load one morning against one measured idle later; the binder's own record had the render at 2.1s the day before. Alternated in one copy, the five-page gain was 28%, and the gain at twenty-five pages four to five times.*
