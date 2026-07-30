# Levels of Closure

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Everything in this book rests on one idea of Doug's. As I read it: a representation can express what is fundamental only when it is *closed* under a single primitive — everything at the level an instance of that one thing, nothing pointing outside it. He states it directly, arriving at it while refusing to call the thing below the book a "document" (his word for why not: too physical), in the *levels* passage ([conversation][conv]):

> "there is value for there being levels where you have a certain type of representation and everything is closed under it. You need something like that to express that which is fundamental in the same way, that object oriented programming needs everything to be an object"

He sharpens it against set theory, correcting a reading that had gone looking for "a layer below books," in the *set theory* passage ([conversation][conv]):

> "You don't understand the idea that a set theory can give you another level and then once you think of that level everything is closed under that."

My gloss on the two quotes together: the move is not to find a smaller thing but to name one primitive and see that everything at the level is a position within it — the way numbers, functions, and relations are all *sets*, and a set of sets is a set. Membership never exits the universe. That is what I mean by closure below.

## Why a foundation must be closed

I take a level to be closed when the operations that build its things take that level's things as inputs and return that level's things as outputs — so a catalogue of books is itself a book, and even the library gets its own book, and reference never leaves the closure. Doug ties this to what makes a representation fundamental at all, in the *self-referential components* passage ([conversation][conv]):

> "The system I'm abstracting already has the self-referential components it's just not closed under a type of representation, but that's a property that you need for a type of representation system to even have the ability to be fundamental."

**Team reading (Cathy).** This is the reason the whole project can live in `$Chemistry` rather than beside it. `$Chemistry` already makes everything one kind of thing — a `$Chemical` — that renders itself. A representation system that is *closed under one primitive that knows how to render* is exactly a library that can display itself. The principle and the framework want the same shape.

## The two levels of the semantics of books

Doug names two levels and the passage between them, and notes that the same shapes recur upward — *"These concepts echo up across the layers"* ([conversation][conv]). As I organize them:

- **Level One — the composition.** Closed under composition. This is the language level; as I read Doug, nothing here has an author or an address yet, only the parts and the whole they make. → [Composition](02-composition.md).

- **Level Two — the book.** Closed under cataloguing. This is where author and subject first become expressible — Doug calls the book *"the minimum unit where an author makes sense"* ([conversation][conv]). → [The Book and Subjectivity](04-the-book-and-subjectivity.md).

- **The library** is not a third primitive, on my reading — it is the book level's own self-catalogue, the top book filing itself, needing nothing new.

So we build from the bottom: `$Composition` first, then the passage up to `$Book`. The aim — `$Book`, `$Chapter`, `$Title`, `$Author` — is reached by getting these levels right and letting each class fall out as a position within them.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
