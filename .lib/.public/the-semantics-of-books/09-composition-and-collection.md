# Composition and Collection — the Two Container Operations

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Until now this book has used one word, [composition](02-composition.md), for how a whole holds its parts. Doug's correction is that there are **two** ways, and they are different operations. In this session:

> "We can have things like a Composition of Books is more like an Anthology whereas a Collection of Books is more like a subject, and a Library is a Collection of Subjects. We have compositions and collections operating here."

## The two operations

- **Composition — containment.** The parts *belong to* the whole; they are read as one work, in order. A composition of books, held as parts, is an **anthology**. This is the operation [Level One](01-levels-of-closure.md) is built on, and Doug's later word for it is **multiplication** — many of a thing become the level above.

- **Collection — cataloguing by reference.** The members are *pointed at* — via [`$Reference`](03-inheritance-and-composition.md) — not contained. A collection of books is a **subject**; a collection of subjects is a **library**. The members keep their own identity and place; the collection only references them. The native word for this side — where references are organized — is **catalogue**; Doug's term in the moment was "collection," and the [register](08-the-symbolizing-dyad-and-the-register.md) carries it as `$Catalogue`.

This is the [overflow specification](07-the-subjective-subject-and-the-library.md) stated as a fork: *when the payload outgrows the entry, containment turns into reference.* A chapter is composed into its book (contained); a book is collected into its subject (referenced). Cross the threshold and composition becomes collection.

So the container types split cleanly:

| the whole | operation | its members | the class |
|---|---|---|---|
| anthology | **composition** (contains) | books, as parts | `$Anthology` = `$Composition<$Book>` |
| subject | **collection** (references) | books, by reference | `$Subject` = `$Collection<$Book>` |
| library | **collection** (references) | subjects, by reference | `$Library` = `$Collection<$Subject>` |

## Composition is a monad

Doug named what composition is, and it is the reason it can be the closed Level-One primitive. In the *monad* passages of the [source conversation][conv]:

> "This is just the list monad is it not?"

and, pressing it home:

> "look at the word monad. A singular representation right? We can map everything into it. That's exactly what I'm talking about with the form of closure. Of course I'm talking about monads"

As I read the point: a monad is what you have when everything maps into one kind of thing and nothing ever escapes that kind — closure, given a precise form. Its two specifications match composition's two moves:

- **Unit** — anything at all can be turned into a composition, starting from nothing but a [title](02-composition.md): the title-only book is where construction begins.
- **Join** — nesting collapses back into the level; a composition of compositions [flattens](06-the-canonical-echo-and-views.md) into a composition, and iterating never takes you out.

So on my reading `$Composition` is a monad at its core, with the plain list as the degenerate case — and the [canonical](06-the-canonical-echo-and-views.md) is what the library adds on top: a designated first part, so the closure is not just sealed but has a face you can consult at every node.

And **collection** is the complementary operation: where composition *joins* (flattens containment into one work), collection *catalogues* (holds references without absorbing them). A `$Subject` does not flatten its books into itself the way a `$Book` flattens its chapters — it points at them. That is why a subject can catalogue books it did not write and a library can hold subjects that outgrow it: collection references, composition contains.

**Team reading (Cathy).** These are two different things in [$Chemistry](../../../chemistry/.lib/..representivity/.cover.md) too, and the distinction is the one from my [architecture briefing](.cover.md): **composition is the parent–child tree** (the [binding constructor](../../../chemistry/.lib/composition/03-binding-constructor.md), rollups that [diffuse up](../../../chemistry/.lib/composition/08-catalyst-graph.md) the single `$$parent$$` chain — the monad's join, made reactive), and **collection is the reference graph** (a reactive set of `Ref`s the owner reads, cross-graph, not contained). An `$Anthology` is built the way a `$Book` is — children through the binding constructor. A `$Subject` or `$Library` owns a reactive *collection* of references and renders it — which is why the [`citedBy` inverse](.cover.md) is a collection concern, not a composition one. Composition contains and flattens; collection references and catalogues; the framework has a distinct mechanism for each.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
