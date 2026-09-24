# The Book and Subjectivity

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Level Two is the **book** — the level where, as I read Doug, *subjectivity* enters. Cataloguing introduces compositions that stand in for things — an autobiography for an author, a subject-book for a topic — and only now does a reference have somewhere to land. Two things become expressible here, and the order is the whole point.

## Subject comes first, then author

A [reference](03-inheritance-and-composition.md) needs something to point at. At Level Two there finally is: a book that stands in for a subject, a book that stands in for an author. Doug corrects the order, and the correction is deep ([line 1758][conv]):

> "you have subject and author reversed because within a person's library, they are a subject, and in fact, they are the subject that is represented by the library, the top level subject of this type of library."

What I take from this: subject comes before author. A person is represented in their own library as its top-level subject, and authorship is then a capability only a subject can have — so subject is expressible first, and author only once there is a subject to bear it.

## The two subjects meet — the genius of the metaphor

This is the sentence the whole theory turns on. Doug ([line 1760][conv]):

> "Subjectivity. Get it?? where the concept of subject in the library and the concept of subject as in subjective meet and these semantics express it clearly"

And he says why it is not a pun but a structural fact ([line 1762][conv]):

> "if you can imagine that which is capable of authorship also being that which defines a type of subject, and it's not any old subject, but the subject that is the thing that catalogues all the others, which makes it the library then you see that this is a very real and important representational structure because **subjectivity is required for the notion of authorship**"

My reading: the catalogue's *subject* (what a book is about) and the subjective *subject* (the one who is about things) are one word because Doug is treating them as one thing — and that is why a library, of all structures, is the natural way to picture a subjectivity.

## Said only in books

The discipline of Level Two is, as I read it, set theory's discipline. When the derivation reached for "capable of authorship," Doug stopped it, in the *closed under books* passage ([conversation][conv]):

> "you're failing to describe this as something that's closed under books! You're reaching for the semantics of authorship, but that's the thing we are defining. It is enough that there is a special type of biography that's called an autobiography… We don't talk about human beings, putting sets and other sets in set theory."

So on this reading, authorship is something the structure produces, not something it reaches outside itself to assert. Everything is said in books: an autobiography is a special kind of biography; the library's canonical is an autobiography; authorship can be read off the catalogue rather than imported into it. That is worked out fully in [The Subjective Subject and the Library](07-the-subjective-subject-and-the-library.md).

## The classes at Level Two

As I place them, drawing on the *base type* and *book as section* passages ([conversation][conv]):

- **`$Book`** is a composition of chapters — `Composition<Chapter>` — that additionally carries a [title](02-composition.md), a subject reference, and an author reference. It is the smallest unit that can carry an author.
- **A book is a type of chapter.** Doug: *"a book also needs to be a type of chapter"* — so a book can stand as its own first part, which is how it plays the role of Cover without a Cover class. (Worked out in [The Canonical Echo](06-the-canonical-echo-and-views.md).)
- **`$Chapter`** is a composition of sections or chapters — the recursive middle. Doug: *"A chapter can be a composition of sections"* — and "Part One" is a chapter of chapters.
- **subject and author** are [references](03-inheritance-and-composition.md): `subject?: Ref` → a subject-book, `author?: Ref` → an autobiography. As I read it, they arrive with the level and inherit downward — a chapter's author resolves through its containing book unless it states its own.

**Team reading (Cathy).** The passage from Level One to Level Two is a single `extends` in `$Chemistry`: `$Book extends $Chapter extends $Composition`. Subjectivity saturating "here and not below" is drawn as the class boundary where `subject` and `author` fields first appear. And because a book is a composition of chapters via the [binding constructor](../../../chemistry/.lib/composition/03-binding-constructor.md), `$Book(...chapters)` gives us the whole Level-Two object — self-rendering, its title as `parts[0]`, its subject and author as references — with no machinery the framework doesn't already have. From here the dream classes — `$Book`, `$Chapter`, `$Title`, `$Author` — are all in reach, each a position in the two levels rather than a type invented on its own.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
