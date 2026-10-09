# Reference and Referent

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-28 with [Sprint 91](../projection/96-sprint-91--the-comments-leave-the-code.md), three sprints after the classes, whose rulings are [Sprint 81](../projection/87-sprint-81--reference-and-referent.md)'s; the code is [`src/writing/Reference.tsx`](../../package/src/writing/Reference.tsx) and [`Referent.tsx`](../../package/src/writing/Referent.tsx), the promises [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx).***

---

## What they are

**Two annotations, one holding an address and one holding an id — the two halves of what the compiler writes.** The Genesis, E22: *"Mention becomes Referent… Reference is another annotation; points to its Referent."* A **Reference** is the address its writing means: it makes the writing a link by adding an anchor to the writing's containers. A **Referent** is the id its writing answers to: it sets the writing's id, so a reference lands there. Neither draws a word of its own; both are hidden as every annotation's writing is, and both are found by class among the writing's annotations.

| member | what it is | where it comes from |
|---|---|---|
| `$Reference.identifier` | the address, its text trimmed — the url the compiler resolved | Sprint 81 D2: the annotation's own field is `identifier`, since `id` on a writing is a reading |
| `$Reference.defines(writing)` · `anchor` | adds `pa-reference` and an anchor to the writing's containers; `erase` takes both back. The anchor is `anchor`, a styled anchor declared once on the class and wearing the same class through styled-components' `attrs`, `selection.a.attrs({ className: 'pa-reference' })`, given its href per instance in the bond; an underline is the anchor's own, so a sheet dresses a link by name, `.pa-reference`, and reaches no layer through the word it holds | Sprint 81 U5, the layer a reference adds; [Sprint 95, U16](../projection/100-sprint-95--pages-formats-and-words.md#u16), on Doug's *"Yes, the same class, through attrs"* |
| `$SelfReference`, exported `Self` | a reference that also wears `pa-self-reference`, its anchor too, extending its parent's `anchor` with `attrs`; its anchor bare since Sprint 97, a library taking the underline off by the class the anchor wears — Doug: "anchors and self reference — these things might deserve to be in the base theme that one would implement in the subclass of theme that they create" | Sprint 85, a heading linking to itself; [Sprint 95, U16](../projection/100-sprint-95--pages-formats-and-words.md#u16) |
| `ReferenceSpecification` | **a reference holds the address its writing means** | Sprint 81 R6 |
| `$Referent.identifier` | the id, its text trimmed — the name's slug, made by the Mention that stands it | Sprint 81 D2; Sprint 85: an id comes from the name |
| `$Referent.defines(writing)` | sets the writing's `id` and adds `pa-referent`; `erase` reverts both | Sprint 81 D1, Doug: *"I put an id on writing and it starts as undefined. Perhaps we can have the annotation set that and add pa-referent to the classes"* |
| `ReferentSpecification` | **a referent holds the id its writing answers to** · **a writing is mentioned once** | Sprint 81 D7: uniqueness is a `specifies`, not a mechanism |

## How they are extended

- **A type of link is a class under Reference** that adds its own mark in `defines`, after `super.defines`, and a note for its style — `$SelfReference` is the example, and the shape a library's own follows. The anchor is the base's; a subclass does not draw a second, and one that wants its own class on it extends the base's `anchor` with `attrs`, as Self does.
- **A Referent is stood by a Mention**, which reads the compiler's form and makes the id from the name; a writing may also stand one by hand, holding any id, and the specification still holds it to one.
- **A format composes with the anchor in either order**, and whichever acts later is drawn outside; a reference taken out of expression loses its layer and the format keeps its own.
- **Neither is a word.** What shows the words is [Mention and Means](18-mention-and-means.md); these hold what the words point at.

## Promises

In [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx): *a referent is the id its writing answers to* — holds its identifier; gives its writing the id and the class, drawn on the element a reference comes to; takes both back when a family member says it does not apply, and is expressed again when that is gone; answers the last id set; refuses a writing mentioned twice, and one that names nothing. *A reference is the address its writing means* — holds its identifier and gives the class; wears no self-reference mark; never gives an id; stands beside a referent without either taking the other's mark. *A reference makes its writing a link by adding a layer* — alone its anchor is outermost; composes with a format in either order; the text is inside the anchor; taken out of expression its layer goes; registering is idempotent. *A self-reference* — found where a reference is asked for, wearing both classes; drawn a link like any other; takes back both and its layer; its note is the style that takes the underline off; held to a reference's specification.

## Gate

Measured 2026-09-28: the package 302 of 302, typecheck 0.

**Names.** Doug's: `Reference`, `Referent`, `Means` for the exported word, `identifier`; struck by him: the alias `Mentioned` — *"Have Referent and Mention exist in files."* Ours, flagged: `Self` as the export of `$SelfReference`, `anchor` and `_anchor`, the two marks.
