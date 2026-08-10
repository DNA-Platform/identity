# The field that buried a method

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** demo · model · name-collision · subclass
- **sprint:** [The Subject](../projection/09-the-subject.md)

---

## Symptoms

- Opening The Team threw **"this.book.at is not a function"** — from `$TableOfContents.parts()`, which builds each row with `this.book.at(chapter.index)`.
- The book passed an `instanceof $Book` check right before the call. The book was real; its `at` was not a function.
- Everything else about the book worked, and had worked for days. The error appeared only when something finally asked the contents for its rows.

## What did not work

- **Suspecting the contents' parent** — the previous day's defect, and the instrumented guard proved the book was found correctly.
- **Suspecting the module graph** — a fresh server changed nothing.

## The mechanism

`$TheTeam extends $Book` declared a state field for the open page:

```tsx
at = 1;
```

`$Book.at(index)` is the location method every contents row is built with. **A field and a method share one name space on an instance**, and the field wins: `team.at` was the number `1`, and `1` is not a function.

Nothing complained at binding, at typecheck, or at render — TypeScript accepts the narrowing, and no code path touched `book.at` until the margin finally read `tableOfContents.chapters`. The collision sat silent until the first honest question.

## The fix

The field is named `page`. The general rule costs one read: **before adding a member to a `$Book` subclass, read the book's member list — the subclass lives in its book's name space.** Short state names (`at`, `index`, `copy`, `parts`, `ref`) are exactly the ones the model already owns.

## The lesson

**A subclass of a model class can silently bury the model.** The demo's book classes carry view state now — that is the self-viewing design working — so their state names must be chosen against `$Book`'s surface, not just for readability. When a model method "is not a function," look for a field wearing its name before looking anywhere deeper.
