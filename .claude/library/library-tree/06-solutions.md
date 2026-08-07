# Solutions

- **specification:** Solution
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A branch may carry a second book beside [Projection](03-sprints.md): **Solutions**. Projection indexes the work by **time** — sprint after sprint. Solutions indexes it by **problem** — one chapter per defect diagnosed. Same events, two axes, and neither answers the other's question: *what did we do in March* is Projection's, *why does the build fail this way* is Solutions'.

That orthogonality is the whole justification. A book that only re-sorted the sprints would be a duplicate; a book that answers a question no other book can answer earns its shelf.

## What belongs in it — and what does not

The split follows [Compound Engineering][ce]'s two tracks, which turn out to be a claim about *homes* and not only about shapes.

**A solution chapter is a defect.** Something broke, was diagnosed, and was fixed. It has no other room in the library — a protocol book will not hold "the build failed this way," and it should not.

**Everything else [distributes](../..librarianship/17-compounding.md).** A practice, a convention, a law, what a word means, what a teammate learned about themselves — those already have rooms, and a second copy in Solutions would be the drift we are avoiding.

The test: *does this chapter answer "why did this break?"* If yes, it is a solution. If it answers "how should we work?", it is a distribution.

## The cover is the index

A reader arrives with a **symptom**, not a diagnosis. So the cover's entry for each chapter leads with what was *observed*, in the words it was observed in — the error text, the wrong value, the visible behaviour — and only then what it turned out to be.

> ```
> 3. [The footnote that wore zero](03-the-footnote-that-wore-zero.md) — **a footnote rendered `0`
>    instead of `1`; every note in the demo, not just uncited ones** — the number was derived by
>    walking the prose for marks the demo never wrote, so `indexOf` returned −1.
> ```

A cover entry that opens with the conclusion is useless to the person who has the symptom, which is the only person who reads this book.

## Keywords, for grep

Every solution chapter carries one keyword line under its title, so the book is searchable without opening it:

```markdown
- **keywords:** framework · render-loop · chemistry · parent
```

Draw from a **stated vocabulary kept on the book's cover** — the surfaces this branch has (framework, model, demo, tooling, sync, library) and the mechanism classes it has seen (render-loop, stale-artifact, wrong-altitude, missing-parent, and so on). A keyword invented per chapter helps nobody; the vocabulary grows only when a genuinely new class appears, and it grows **on the cover** where the next writer will see it.

## The shape of a chapter

Kept from their bug track, because the order is what makes it usable:

1. **Symptoms** — what was observed, before anyone knew why.
2. **What did not work** — the wrong turns, so nobody retries them.
3. **The mechanism** — why it actually broke, with the defining line cited.
4. **The fix** — what changed.
5. **Prevention** — what kills the class of it, not this instance.

## Linking, both ways

A solution **links to the sprint** it came from; that sprint's chapter **links to the solution**. Neither duplicates the other: the sprint says what the week was, the solution says what the bug was. One account of each thing, two ways to reach it.

## When a branch has one

**Optional.** A branch with no diagnosed defects has no Solutions book, and that is not an omission. The book appears with its first chapter — and appearing empty is worse than not appearing.

<!-- citations -->
[ce]: https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412 "Compound Engineering plugin, EveryInc — pinned at commit 6a2a0f9, v3.21.1"
