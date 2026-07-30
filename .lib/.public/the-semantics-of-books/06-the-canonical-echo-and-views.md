# The Canonical Echo, and Why Cover and Contents Are Views

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Two of the pieces every prior draft treated as *parts of a book* — the Cover and the Table of Contents — are not parts at all. They are **views**. This chapter is how that falls out, and it is the part of the derivation that lands most directly on [$Chemistry](../../../chemistry/.lib/..representivity/.cover.md), because "a thing seen many ways from one representation" is exactly what `view()` and [perspectives](../../../chemistry/.lib/particle/08-perspectives.md) are.

## The canonical echoes

The [canonical](02-composition.md) — the part a reader meets first, `parts[0]` — is not a type. It is a **role**, and the same role recurs at every scale. Doug, in the *echo* passage ([conversation][conv]):

> "the book is going to end up being the canonical part of the composition that you read first, which is why it will be expressed as a chapter in view form and the title will end up being the [canonical] piece of text that's in a composition. These concepts echo up across the layers"

One role, five scales:

| whole | its canonical part | what a view makes of it |
|---|---|---|
| composition | the title | the heading, the label |
| book | its canonical chapter | **the Cover** — the first chapter of the file |
| person-subject | the autobiography | the author, as met inside the library |
| subject | its canonical book | the first place a reader learns from |
| library | the top subject's account | the library, introducing itself |

## The polymorphism of compositions

Doug worked out the mechanism himself, and it is the elegant part. Every composition offers **two total views** at any rank. In the *polymorphism* passage ([conversation][conv]):

> "you can view a book as a composition of sections if you imagine that you're allowed to iterate over all of the chapters and kept all of the sections… the canonical functions as the representative for the next layer up. So if you want to think of a book as a chapter, then it is the chapter that contains only the title, or title author — and that's the Cover! … you can have the version flattened over all of them and you could have the version that just has the canonicals. These are different ways of representing the same thing in different roles in the library based on this weird form of polymorphism that compositions employ."

The two views, named:

- **Flattening (downward).** A book presents as a composition of all its sections — iterate the chapters, keep their sections, the book's own title standing first. This is *reading order*: consulting the whole, cover to cover.
- **Canonical projection (upward).** When a composition must function as a part in the layer above, it presents as the part containing **only its canonical**. A book functioning as a chapter — which is how it appears inside its subject — presents as *the chapter containing only its title and author*. **That is the Cover.** A book functioning as a section presents as its title alone; a subject viewing all its books that way sees a list of title-sections — **the Table of Contents**, with the cover legitimately among the entries, and the ToC free to contain even itself.

## Cover and Contents dissolve

So neither is stored. Doug had seen it coming, in the *pre-physical* passage ([conversation][conv]):

> "the view for the book ends up being the Cover. But the cover is not actually part of the representation because the representation is pre-physical … an electronic book doesn't really have a cover."

The representation holds only the book's own facts — its title, its author reference, its chapters. Cover, spine, and jacket are what different *views* paint from those facts; the e-book is his proof that the physical form was always optional. What I take from it: no class was added at all — two operations do the work that Cover and Table of Contents would each have needed a class to do.

**Team reading (Cathy).** That is what makes the whole model native to `$Chemistry`, not merely expressible in it. The two total views are the two axes I already built:

- **Canonical projection upward = [`look('up')`](../../../chemistry/.lib/particle/09-the-composition-of-perspectives.md)** — render one instance at its most general altitude, presenting only its representative. The Cover is `$Book` shown through its canonical projection; the Table of Contents is a `$Subject` projecting each of its books canonically.
- **Flattening downward = `look('down')` / the full `view()`** — render the whole expansion, reading order.
- And **named lenses** (Cover, Synopsis, Reading, Links) are [perspectives](../../../chemistry/.lib/particle/08-perspectives.md): subclasses overriding `view()`, read back bound to the live book — precisely the `perspectives-book` prototype already running in the app.

So Cover and Table of Contents are not classes we write. They are `view()`s of one `$Book` and one `$Subject`. The framework's polymorphism *is* the composition's polymorphism — the same closure, discovered twice.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
