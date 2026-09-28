# Mention and Means

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-28 with [Sprint 91](../projection/96-sprint-91--the-comments-leave-the-code.md), on the rulings of [Sprint 81](../projection/87-sprint-81--reference-and-referent.md); the code is [`src/writing/Mention.tsx`](../../package/src/writing/Mention.tsx) and [`Means.tsx`](../../package/src/writing/Means.tsx), the promises [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx).***

---

## What they are

**Two words that read what the compiler wrote.** The compiler turns every form of the notation into `[text](identifier)` and names no component — Doug, 2026-09-24: *"The compiler ALWAYS should give: `[text](identifier)`. It doesn't know about specific components."* A **Mention** is the word that reads an identifier the compiler allocated, a place others may reach: it stands a [Referent](17-reference-and-referent.md) holding the slug of its name, so its element carries the id, and it draws the words. A **Means** is the word that reads an identifier the compiler resolved, an address: it stands a [Reference](17-reference-and-referent.md) holding the url, so it is a link, and it draws the words. Both are Words — Sprint 81 D3, *"Mention is a `$Word`"* — so each is a part of the sentence that holds it, and each shows its words and never the syntax.

| member | what it is | where it comes from |
|---|---|---|
| `name` | the text half of the form, read through [the binder](../utilities/05-binder.md) from the copy of the writing's text | Sprint 81 D4 |
| `$Mention.$Define` | stands a Referent holding `identifier.slug(name)` — the id made from the name and never from the identifier given | Sprint 85: *"Title should use the name to create the fragment with the Identifier utility"* |
| `$Means.$Define` | stands a Reference holding the identifier — the url | Sprint 81 D4: the url comes from the compiler |
| `$Means.means` | the Reference it stands, `annotations.expressed($Reference)` | ours |
| `write()` | the name, on both | Sprint 81: the words and never the syntax |
| `MentionSpecification` · `MeansSpecification` | **a mention says what it mentions** · **a means says what it means** — a content that is not the compiler's form is refused | Sprint 81 R8, R9 |

## How they are extended

- **A word that reads the compiler's form is the pattern**: a class under Word that reads `binder.reference(html.copy(this.text))` and stands the annotation that holds the half it wants, in `$Define`, when the form is there. Mention and Means are the two halves, and a library's own word — one that reads a form and stands something else — follows the same shape.
- **Written by hand or compiled, they behave the same**, since the compiler only writes source; a test may write `[Words](/where/)` directly.
- **They never make an address.** A Means is given its url; a Mention makes its id from its name; nothing here reads a url or a path — [the coding style's line](../the-coding-style/03-the-coding-style.md).

## Promises

In [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx): *a mention is the word that reads what the compiler wrote* — a word standing a referent with the identifier; shows the words and never the syntax; drawn, its own element carries the id; a part of the sentence that holds it; the same by hand as compiled; makes its id from its name; refused when its content is not a reference. *A means is the word that reads what the compiler resolved* — a word standing a reference with the url; shows the words; drawn, a link whose own element inside the anchor wears the class and the words; a part of the sentence, as Doug wrote it; the same by hand as compiled; refused when its content is not a reference.

## Gate

Measured 2026-09-28: the package 302 of 302, typecheck 0.

**Names.** Doug's: `Mention`, `Means`. Ours, flagged: `name`, `means`.
