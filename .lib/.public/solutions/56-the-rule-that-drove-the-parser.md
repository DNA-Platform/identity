# The rule that drove the parser

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `performance` · `loop` · `specification` · a page that took five seconds before drawing anything · 339,122 objects to draw 230 · nineteen thousand letters built and none drawn · a green suite through all of it

---

## Symptoms

- ***The encyclopedia took about five seconds to appear***, in the dev server **and in the production bundle** — *4,984 ms built, so there was nothing to build away.*
- **The five seconds were BEFORE the page.** *Timed from `domcontentloaded` the page reached its full 228 writings in **372 ms**, which was the number from six days earlier, unchanged. **Nothing about drawing had regressed.***
- ***`tsc` 0. 77 of 77. Zero refusal panels. Both pages correct in the browser.*** *Every gate agreed, for days.*
- **And the page built `339,122` chemicals to draw `230` pieces of writing** — *1,474 apiece* — **including 19,015 `$Letter` and 3,478 `$Word`, none of which are ever drawn.**

## The mechanism — ***a rule asked for parts, and asking for parts runs the parser***

**Two calls, each of which reads as ordinary.**

```ts
// WritingSpecification.composed — the rule's reading
const read = (writing as { parts?: () => $Writing[] }).parts?.();
if (read !== undefined) return read;

// SectionSpecification.read — the section's reading
return writing instanceof $Composition ? writing.parts() : this.composed(writing);
```

***`parts()` is not an accessor. It is the parser.*** **So the chain closes:**

| | |
|---|---|
| **1** | *a writing is constructed, and chemistry calls `valid()` after the bond chain* |
| **2** | `valid()` → `specify()` → **a rule asks `composed(writing)`** |
| **3** | `composed` → **`parts()`** → `parser.parse` → *reduces the tokens into the level below* |
| **4** | ***each writing it just made is constructed*** — *back to 1* |

**A chapter parses to sections, a section to paragraphs, a paragraph to sentences, a sentence to words, a word to letters.** ***Nothing stopped it, because the thing that would have stopped it — nobody asking — was doing the asking.***

> ***THE ONE-LINE STATEMENT: `parts()` is a parse, so a rule that reads parts is a rule that runs the parser, and a rule runs on everything the parser makes.***

## Why every gate stayed green

***Because the parse was CORRECT.*** **Every letter it built was a real letter, in the right place, with the right type.** *The suite asserts what the writing says and how it draws; both were right. The demo drew, and drew correctly. `tsc` has nothing to say about how many times a method is called.*

***Nothing in the branch measured how much was built to draw what was drawn***, and that number is the only one that was wrong.

## The fix — ***a rule reads what is written; the parser answers what is asked***

**Doug set it as two sentences, and they are the whole repair:** *"The parser shouldn't be converting anything until parts is called, and it shouldn't be called in specify."* · ***"The parser should be used when asked for for what is asked for."***

| | |
|---|---|
| `composed` | *reads the block — **what was written** — and never `parts()`* |
| `$opensWithHeading` | **demands what the reading can meet:** *a heading is held, or something is held to read one out of.* The dead `read()` helper went with it |
| `$Theme` | ***an `$Atom`***, so a theme is one object rather than **60,340** — *`$check(theme, '!')` was making one in every writing's bond constructor* |

## What it cost, measured on the same command

| | before | after |
|---|---|---|
| ***chemicals built for `/article`*** | ***339,122*** | ***10,282*** |
| `$Letter` · `$Word` | 19,015 · 3,478 | ***0 · 0*** |
| `$Theme` objects | 60,340 | ***1*** |
| **`parse()` calls on the whole page** | *uncounted* | ***70***, *every one a section or a chapter, half served from the memo* |
| **load** | ~5,000 ms | ***~1,000 ms*** |
| writings drawn · refusal panels | 230 · 0 | ***230 · 0*** |

## Prevention — ***the promises, and they caught a second instance immediately***

***Three promises in [`writing.test.tsx`](../../package/.tests/writing.test.tsx) wrap `parser.parse` and record who asked:***

- **specifying a piece of writing asks the parser for nothing**
- **a paragraph asks the parser for nothing, however much prose it holds**
- **asking a section for its parts parses the section, and nothing beneath it**

***The first one went red the moment it was written***, on a section — **which is how `SectionSpecification.read()` was found at all.** *The `composed` fix alone had left the second call in place, and the number had already improved enough to look finished.* **That is the whole argument for promising a mechanism rather than an outcome: the outcome was already good, and the fault was still there.**

***And the standing lesson, which this branch now has twice:*** **a green number does not say what it cost.** *[Solutions 54](54-the-rule-that-stopped-running-and-the-suite-improved.md) is a rule that stopped running and made the suite look better; this is a rule that ran on everything and made the suite look the same.* **Neither is visible from the suite, and both are visible in one count of what was built against what was drawn.**

---

*Found 2026-09-07 during a performance audit of `.public` measured through `.wiki`, on Doug's report that the page was "very very very slow" and his question of what was going on in `specify`. **`specify` was 20 ms of 8,730 — it was not slow, it was LOUD**: it ran on everything the parser made, and it was the thing making the parser run.*
