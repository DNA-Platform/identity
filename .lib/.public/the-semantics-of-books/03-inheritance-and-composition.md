# Inheritance and Composition

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

To work out the basic types, Doug names two ways one type can differ from another. This chapter is the one he pointed at directly when he asked where `$Reference` and `$Author` live.

**Doug's framing (this session):** *"One can be different by validation, and a subclass can express that. One can be different because it is a composition of the other."*

Those are the two edges of the whole hierarchy, and they are not the same move.

## Composition ascends scale; inheritance refines within a scale

- **Composition** — one type differs because it *is composed of* the other, and Doug's later word for this operation is **multiplication**: many of a thing become the level above (*"multiplication can turn a sentence into a paragraph"*). It ascends a rung, minting new structure, and — his instinct, which I share — it **flows down**: a book is a composition of chapters, a chapter of sections, a section of paragraphs, all the way to the leaf. One recursive operation at every rung.

- **Inheritance by validation** — one type differs because it *is the same shape with a constraint enforced on it* (*"adding a validation lets a symbol become a word or a sentence"*). A subclass says "everything the parent says, plus this must hold." It refines within a rung; it changes no scale. The type checker (and a runtime `$check`) enforces the constraint, which is why the compiler is a co-author: a bad `extends` fails to compile before it becomes a bad idea.

My rule of thumb: read the relation aloud. *"An autobiography is a biography whose author is its subject"* is validation. *"A paragraph is many sentences"* is multiplication.

## Where `$Reference` lives — the act of pointing

Doug is emphatic that a reference is not a kind of name ([conversation][conv]):

> "A Reference is not a type of name. The card in a card catalogue is a reference right? It is not a name."

His conversation gives its anatomy — *"a reference has a name and a link"* — and the design worked out this session lands it as the **base of the referential lineage**: not a composition of parts but the general act of *pointing*, of which everything else that points is a special case. It is a **hyperlink** — a surface you read, a target you go to. `$Reference<T>` is now built (`@dna-platform/lib`), as `$Chemical` with:

- **`$for`** — the target, an *indirect* string the catalogue resolves. Never the held object: a library that catalogues itself cannot hold object references (they cycle, and cannot be serialized), so a reference holds only the string.
- **its children** — the surface displayed (the "name" you read). `<Reference for="…">{whatever}</Reference>`.
- **`lookup(): T`** — following it is a **navigation**, not a "resolution." You don't resolve a catalogue card; you follow it and the library takes you to the book. `T` is what the lookup yields, kept a real type by being the return type rather than a stored field. The router behind it is the deferred seam.
- **`frame()`** — wraps the surface in a clickable link, via the render template method that now lives on `$Particle` (`view()` is the surface; `frame()` wraps it, so the surface still evolves through `view()`).

## Where `$Author` lives — a reference, typed

An author is not a person's name in a string. Doug ([conversation][conv]):

> "an author is a reference to a type of book called an autobiography"

So `$Author = $Reference<$Autobiography>` — a reference whose *target type* is constrained to an [autobiography](04-the-book-and-subjectivity.md). The constraint rides the generic `T`, so `lookup()` returns an `$Autobiography` and the compiler checks it, while nothing but the string `for` is ever stored. That is validation done through the type parameter. A person never appears in the representation directly; only the book about them does, and `$Author` cannot exist until Level Two produces an autobiography to point at.

The rest of the referential family follows the same way: a subject reference is a `$Reference<$Subject>`; and `$Title` is a reference that is also **canonical**.

## The canonical as a designation

One relation sits slightly apart, because [`$Title`](02-composition.md) uses it: a thing can differ not by validation and not by multiplication, but by bearing the **canonical role** — being the representative its whole presents to the layer above. As I read Doug's canonical, it is a role, not a type, recurring at every level. A `$Title` is a `$Reference` that *is designated canonical* — it points at its work (a reference) and is the first/representative, the fusion of "points at" and "is the first text." This designation is what [The Canonical Echo](06-the-canonical-echo-and-views.md) shows becoming, at book scale, the Cover.

**Team reading (Cathy).** These three edges — composition, validation-inheritance, canonical-designation — are exactly what `$Chemistry` expresses natively: composition through the [binding constructor](../../../chemistry/.lib/composition/03-binding-constructor.md) with `$check` (the runtime validation that a part is the right type), inheritance through ordinary `extends`, and the canonical designation through `parts[0]` read by a [perspective](../../../chemistry/.lib/particle/08-perspectives.md). The type hierarchy Doug is describing and the framework that will hold it agree on what the edges are.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
