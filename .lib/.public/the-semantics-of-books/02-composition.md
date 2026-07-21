# Composition

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Level One has one primitive, the **composition**, and its whole character is one recursive fact. Doug states it directly, in the *composition* passage ([conversation][conv]):

> "a composition is composed out of other compositions, where they are a composition of it right? And you can have the concept of a part-whole relationship between the pieces of the composition almost by definition… by virtue of having parts that are a part of a whole you have a structure that lends itself to authorship, even though the abstraction of a composition does not have the complexity to have a notion of authorship at that level because there's nothing to represent the author yet"

Two things are packed into that, on my reading, and both matter.

**Part-and-whole is intrinsic** — Doug's phrase is that it holds *"almost by definition."* A composition doesn't *have* a `parts` field bolted on; being composed of parts is what it *is*. In the artifact this is:

```ts
class Composition<Part> {
  parts: Part[]
  canonical = parts[0]
}
```

**The level *"lends itself to authorship"* — his words — but cannot yet represent one.** A whole whose parts belong to it is, as I read him, the *shape* authorship will need; but nothing at this level can stand in for an author, so authorship is not yet expressible. He is precise that this is a property of the level rather than a gap in it — what can represent an author arrives one level up. It is also, on my reading, why "document" was the wrong word for the primitive: a document already carries a whiff of standalone-ness and authorship that belong to the level above.

## Why "composition" and not "document"

The word was chosen against alternatives, and my reading of why it wins is that its ordinary meaning already *is* the formal one: a composition, unlike a document, implies someone who composed it, so the word carries the authorship that will matter a level up without being told to. Doug's confirmation, in the *composition is right* passage ([conversation][conv]): *"Composition is right."*

## The canonical

Within any composition, one part plays a distinguished role — the one you reach for first, that stands in for the rest. The rule is positional: the canonical is `parts[0]`. As I read it, this is not a type but a role a part bears within its whole, and it recurs at every level. Doug, in the *canonical echo* passage ([conversation][conv]):

> "the book is going to end up being the canonical part of the composition that you read first, which is why it will be expressed as a chapter in view form and the title will end up being the [canonical] piece of text that's in a composition."

## The two residents of Level One

- **Text** — the leaf composition: content that bottoms out, composed of nothing further. It terminates the recursion.
- **Title** — the canonical piece of text: a composition's first, name-bearing part. The title is what the canonical role looks like at text scale.

**Team reading (Cathy).** In `$Chemistry` this is a clean fit. `$Composition` is a `$Chemical` whose parts are its children; `view()` renders them. `$Text` is the leaf whose `view()` renders a string. The canonical being `parts[0]` means the "cover" view — render only the canonical — is free: it is what [`look('up')`](../../../chemistry/.lib/particle/09-the-composition-of-perspectives.md) already does, presenting one instance at its most general altitude. The one genuine question the compiler will settle: whether `$Text` is a second root off `$Chemical` or a leaf `$Composition` whose content is a string rather than sub-parts — a `--strict` decision, not a philosophical one.

The passage upward — where a book becomes a chapter of chapters and learns to stand as its own first part — belongs to Level Two. But already, a `$Book` will be a `Composition<Chapter>`, and as Doug puts it in the *base type* passage ([conversation][conv]): *"it is the composition that forces us to require assigning some sort of base to the parts."* The base type isn't a convenience; on this reading the composition demands it.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
