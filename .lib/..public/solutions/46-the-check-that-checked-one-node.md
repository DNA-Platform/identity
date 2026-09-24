# The Check That Checked One Node

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**keywords:** specify does nothing · a book specifies clean but its sections were never read · the binder reports every book stands · nothing inside a book is checked · specification passes on writing it never saw

---

## The symptom, as it was met

Doug asked whether the compiler running `specifically` would give a lot of feedback about what did not work. It would not. **`book.specify()` reads exactly one node — the book — and stops.**

Two lines make it so, and neither looks wrong on its own.

`$Writing.specify()` runs the types the writing carries and returns. It never touches `parts()`.

`binding/specify.ts` generates a check that opens each book and asserts `book.specify()` does not throw. It calls it on the root and on nothing else.

**So a book of forty chapters is one assertion about the book.** Every chapter, section, paragraph, sentence, word and letter inside it is unread. The suite is green, the build passes, and the specification has never been applied to any of the writing it was written for.

## Why it stayed hidden

**Because the tests specify what they build, and they build one thing.** A test writes a section, calls `specify()` on it, and the rule fires — so the rules are demonstrably alive. What is never demonstrated is that a section standing *inside* a chapter is ever asked.

The `.spec` examples run the same way. Each example is rooted, specified, and passes — one node at a time, by hand. Nothing composes them and asks the composition.

## The correction, and what it costs

Descending is one line and it is induction rather than a walk — each writing specifies its own parts, and those specify theirs:

```ts
for (const part of this.parts()) if (part !== this) part.specify();
```

***Do not make it a subtree walk.*** [Sprint 39's shallow battery](../projection/39-the-shallow-battery.md) convicted `mustHaveText` of being quadratic for exactly that shape and cured it by induction. One level per node is the cure holding.

**Measured when the line was added: sixteen tests failed, in two families. The line is IN, and both families were worked through.**

- **Sections written without a heading.** Fixtures built `section(paragraph(...))` all through the suite, and a section opens with its heading. These were fixtures that had never been valid and had never been asked. Repaired — the test helper's sections now open with one, and every count and copy the change shifted was updated with it.
- **Rules firing on prose the parse itself produced.** *A sentence stops once, at its end* fired inside `.spec` examples that are correct as written. **This one is a real gap and it is still open.**

## The gap the descent uncovered, and it is still open

***A paragraph is not divided into sentences.*** Printed from a section written exactly as the examples write one:

```
PART  $Heading   "A section written as prose"
PART  $Paragraph "Everything after the title, first character to last, is ONE paragraph. It is not divided at this level, however many sentences it carries."
   INNER $Sentence "Everything after the title, first character to last, is ONE paragraph. It is not divided at this level, however many sentences it carries."
```

**One `$Sentence` holds two sentences**, so the interior full stop trips the sentence's own rule. **The parse and the specification disagree, and nothing had ever asked** because nothing descended.

***A document framework that cannot hold a two-sentence paragraph is not finished***, so this is a design question rather than a repair: either the paragraph's parse divides on stops, or the sentence rule is wrong about what a sentence is. **The four examples were reduced to one sentence each so the descent could land green; that is a hold, not an answer.**

## What to take from it

**A specification that is only ever run on what a test hands it proves the rules compile, not that the library is checked.** The measure of a check is how many nodes it reads, and that number was one.

**And a green suite hid it.** 543 tests passed with the interior of every book unexamined, because every test that specifies also authors, and an author writes one thing at a time.

*Found and cured 2026-09-04 in [Sprint 41](../projection/43-sprint-41--subjects-authors-and-references.md). Doug: "It is this sprint, it is a feature, and anything other than fixing it is making it worse." The line is in, both suites are green, and the sentence-division gap above is the one thing it uncovered that stays open.*
