# The contents that failed before adoption

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** model · missing-parent · construction-order · render
- **sprint:** [The Subject](../projection/09-the-subject.md)

---

## Symptoms

- A book with an **authored** `<TableOfContents />` rendered a red box in that chapter's place: **"Bond Constructor Failed — Cannot read properties of undefined (reading 'summary')"** — and, after a first guard, **"$TableOfContents is not valid after its bond constructor."**
- Every **model-level** test on the same book passed — it bound, its chapters were right, its contents answered rows. Only rendering showed it.
- The failure predates the sprint that found it. **Authored contents pages always dev-erred at bind**; nobody knew, because the bond used to splice one in instead, and no one had ever rendered an authored one.

## What did not work

- **Reasoning from the diff.** Three theories (an import cycle, a fresh-instance re-bind, a view throw) each fit some of the evidence and none fit all of it. **The probe settled it in one run** — print the devError, the chapters, and the innerHTML.

## The mechanism

`$Chapter`'s bond demands a summary. The contents' summary is **not its own** — it derives from the book: `this.book.cover.summary`. But **children bind before their parent adopts them**, so at bind time `this.book` is not the book yet, `book.cover` is `undefined`, and the getter throws inside the bond. The spliced contents never hit this because the splice ran *inside the book's bond* and handed the parent over explicitly.

Two layers had to be fixed, and they are the shipped `$Cover` pattern plus its validity half:

1. **The bond catches the ancestor's demand** when the demand cannot apply yet — a contents' summary lawfully arrives on adoption, so its absence at bind is not a failure.
2. **`valid()` states the class's own law** — unadopted and empty is lawful; adopted runs the accrued law — otherwise the framework’s generic `assertValid` throws in the ancestor’s voice.

And the getters stop reaching through a parent they may not have: `summary` and `cover` answer `undefined` before adoption instead of throwing.

## The fix

[`TableOfContents.tsx`](../../package/src/book/TableOfContents.tsx) — guarded `summary`/`cover`, the try-catch bond with the rethrow-when-it-has-one, and `valid()` answering for itself. `read()` throws honestly — *"stands outside any book"* — instead of crashing.

## The lesson

**A part whose law is satisfied by its whole must not enforce that law before the whole adopts it.** Any derived-from-parent member that participates in bind-time validation is this bug waiting; the `$Cover` pattern (catch, keep your own reason, state your own `valid()`) is the shipped answer.

**And the probe rule held again:** when three theories each fit some of the evidence, stop theorizing and print the actual shape — one run answered what three readings could not. Filed before as [the class that was not the class](06-the-class-that-was-not-the-class.md); this is the render-side instance.
