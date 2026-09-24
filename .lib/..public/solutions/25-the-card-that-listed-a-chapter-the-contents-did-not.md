# The card that listed a chapter the contents did not

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** tooling · wrong-altitude · absent-case
- **sprint:** [The Audit](../projection/20-the-audit.md#w30)

---

## Symptoms

- **A book's card and the same book's table of contents disagree about its chapters.** On **all seven books** in the corpus.
- ***The Standard Model's card says*** `["Synopsis", "Symmetry"]`. ***Its contents says*** `["Symmetry"]`.
- **Every card in the generated catalogue begins with the entry `"Synopsis"`** — [`app/src/library/cards.tsx`](../../app/src/library/cards.tsx), seven of seven.
- ***And every gate is green.*** The compiler's four phases pass, `CHECK` reports 7/7 books standing, the framework suite is 336/336, the driver's checkpoints hold. **Nothing anywhere reports a fault.**

## What did not work

- **Reading either number on its own.** *`["Synopsis", "Symmetry"]` is a plausible chapter list. So is `["Symmetry"]`.* **Neither is wrong-looking; they are only wrong together**, and nothing in the system ever puts them side by side.
- **The `CHECK` gate.** It counts chapters, sections, paragraphs, sentences, words and letters **off the model**, and the card is not the model. *A count of one thing cannot detect a second thing disagreeing with it.*
- **The driver.** It asserts that a contents row exists and is clickable. ***It never compares a row to a card.***

## The mechanism — a positional slice standing in for a question the model answers

[`catalogue.ts:39`](../../build/stages/catalogue.ts) reads a book's own chapters off the living book by **counting**:

```ts
// The compiler wrote this composition, so it knows its shape: the cover,
// the contents, then the book's own account and chapters, then whatever
// it catalogues. Only the middle stretch is the book's own writing.
const own = live.chapters.slice(2, 3 + book.chapters.length);
```

**For The Standard Model, `live.chapters` is `[Cover, TableOfContents, Synopsis, Symmetry]` and `book.chapters.length` is `1`, so `slice(2, 4)` takes two where it wants one.** ***The extra one is the book's own synopsis.***

**And the model excludes it deliberately.** [`$Synopsis.parenthetical`](../../package/src/book/Synopsis.tsx) answers `!standsFor`, so a book's own account is parenthetical; [`$TableOfContents.parts()`](../../package/src/book/TableOfContents.tsx) filters parenthetical chapters out. ***Two rules, both correct, and the compiler knows neither of them.***

***The off-by-one is not the defect.*** **The defect is in the comment**: *"the compiler wrote this composition, so it knows its shape."* **Knowing the shape is exactly what the compiler's own best principle says not to rely on** — [`resolve.ts`](../../build/stages/resolve.ts):

> *"What a subject holds is **not a list the subject keeps**. It falls out of where its books sit, **which is why nothing has to be maintained in two places**."*

***One phase obeys that and one phase does not, and the one that does not drifted immediately.***

## The fix — ask the book

**A book already answers this, and it answers it the way the page does:**

```
the chapters a reader is offered  =  the book's contents
```

*Whatever expression the compiler uses, it must be **the same one the contents uses**, so the two cannot disagree — and the two magic numbers go with it.* **The card is then a reading of the book rather than an arithmetic about it.**

***And the promise that proves it has to compare the two to each other***, not either to a string:

```
for every book:   card.chapters  ===  book.contents.parts().map(name)
```

## The lesson — a derived thing states its source or it drifts

***Two things computed the same fact and only one of them was asked.*** **A card exists to carry what a reader is shown before opening anything** — *that is a reading of the book, and a reading is asked, never counted.*

**The general rule, and it is [already written one folder over](../../build/stages/resolve.ts):** ***when a fact can be derived from the model, deriving it anywhere else is maintaining it in two places*** — **and the second place will be wrong within a sprint, silently, because both numbers are internally consistent.**

*Doug's own classification is worth keeping, because it is what sent this here rather than into [the Condition Report](../the-condition-report/.cover.md):* **"it's a bug. And a good one. But it's not a wart in the framework."** ***A defect gets fixed; a wart gets designed away. Filing them together loses both.***
