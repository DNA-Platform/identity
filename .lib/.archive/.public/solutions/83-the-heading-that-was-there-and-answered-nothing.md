# The heading that was there and answered nothing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **sprint:** [Sprint 73 — The Essential Books](../projection/79-sprint-73--the-essential-books.md)
- **keywords:** `model` · `written-not-made` *(proxy name, flagged for Doug)* · a chapter titled by nothing while its heading is on the page · a book that holds fifteen blank names · a recovered heading no one can see · block against parts

---

## The symptom

***A chapter answered no name at all, while the heading it is named by was drawn on the page a reader was looking at.*** The binder said it two ways over one night, and both readings were true:

```
its table of contents names "" where the book holds
  "alan-turing              "
```

**Fifteen chapters, one name and fourteen blanks** — and every one of those chapters draws a heading. Later, with a rule asking the question directly:

```
error SPEC: .article — 1:Synopsis › a chapter is titled, and this one is titled by nothing
            turing  — 3:Lead    › a chapter is titled, and this one is titled by nothing
```

***Nothing was missing from the page.*** The synopsis drew *From Wikipedia, the free encyclopedia*; the chapters drew their headings at the right level; the suite was 112 of 112 and `tsc` was 0 throughout. **Only the question answered nothing.**

## What it is

**`heading()` asked the BLOCK, and a recovered heading is only ever in the PARTS.**

[`$Section.heading()`](../../package/src/writing/Section.tsx) read `searchForOne($TypeOfHeading)`, and [`$Writing.searchForOne`](../../package/src/writing/Writing.tsx) filters `this._block.$elements` — **what an author wrote, and nothing else.** But the heading of a section written as prose is not written: [`SectionSpecification.supplies`](../../package/src/writing/Section.tsx) reads it out of the opening sentence, elides it at sixty characters, and answers it **first among the parts** — and `supplies` runs from [`$Composition.parts()`](../../package/src/writing/Composition.tsx), which the block never consults.

***So the two halves of one idea lived on opposite sides of a line nothing named.*** A heading an author wrote is in the block *and* in the parts. **A heading the framework recovered is in the parts alone**, invisible to every member that asks the block — which was every member that asks.

**The same cut ran one level up.** `$Document.title()` asked the block for its first section, so a document written as prose — no `<Section>` anywhere in it — had no title, although the parse makes it one and `supplies` titles it. *A cover is the one document that writes its title and writes chrome before it, so a written `<Title>` has to answer first; everything else is recovered.*

## Why every gate stayed green

***Nothing that ran asked the question.*** The suite drew books and specified writings; **no promise asked a chapter its name**, because until this sprint a chapter had no name to ask for. The defect was therefore not a regression — **it had always been true**, and it became visible the moment something depended on it, which is the ordinary way a reading this old surfaces.

***And the first fix made it worse before it made it better.*** Reading the parts for the written title too broke the one place it must not: inside a table of contents, `$(TableOfContents, TypeOfSection)(TypeOfRow)` substitutes every section for a **row**, and [`$Row.heading()`](../../package/src/library/Row.tsx) answers `undefined` by design. *So a contents can never be titled by its first section and must write its title — which is why the block is asked first and the parts second, and not the other way round.*

## The fix

**One member each, at the two levels:**

```tsx
// $Section — the heading it opens with, recovered or written
heading(): $Writing | undefined { return this.searchPartsForOne($TypeOfHeading); }

// $Document — the title an author WROTE, else the first section among its PARTS
title(): $Section | undefined { return this.searchForOne<$Title>($TypeOfTitle) ?? this.searchParts<$Section>($TypeOfSection)[0]; }
```

*Both lean on `searchParts`/`searchPartsForOne`, the [parts twin of `searchFor`](../projection/79-sprint-73--the-essential-books.md#where) this sprint added because four places were hand-rolling the same type predicate.*

***Measured after:*** every chapter in all four books answers a name; the four that still answer badly are the ones a written title had to rescue, and each is a chapter the rule proved was written wrong rather than a reading that is still blind.

## The lesson, which is about the question and not the bug

> ***A reading that asks the BLOCK answers what an author wrote. A reading that asks the PARTS answers what the writing IS.***

**They differ by exactly what the framework supplies** — a recovered heading, a made section, a level the parse generated — and that difference is invisible from the call site, because both answer the same type and one of them simply answers less. **Ask which one you mean before writing `searchFor`,** and where the answer is *what this writing is*, ask the parts.

***The cost of not asking:*** a rule was designed, built, driven and withdrawn on the misreading — [R8](../projection/79-sprint-73--the-essential-books.md#r8), which demanded a heading an author WROTE because recovery looked absent. **Doug named it in one line: *"You should be able to recover a heading."*** *The rule was wrong; the reading under it was what needed fixing.*
