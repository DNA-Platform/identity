# The Object Model of His Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***A SURVEY, written 2026-10-06 before any code that followed it, and COMPACTED 2026-10-06 at the close of Sprint 101 on his permission — "The Object Model of His Library - I give permission to compact this" — from 5,387 words to the record below. It read each chosen design part by part in the words of a library and proposed types of book, kinds of chapter and the components that draw them; his word on it the same day governs how it is read: "that's a lot and they are very abstract… is that what is required to implement the designs? … those are the minimum abstractions you need." So nothing was built because this chapter proposed it. The chapter's name is a PROXY.***

---

## His words that set it

> **"Every book you build is different right? There's no generic one. You are defining the types of books for my library."**
>
> **"Find ways of specifying the types of chapters too. It might be through annotations, it might be base classes, though be careful not to have more than one chapter base class because then no one can subclass the base without rewriting the other subclass."**
>
> **"You have been obsessed with identifying ordinary chapters. Ever think that maybe there's no such thing as an ordinary chapter, and you should have them all typed and annotated?"**
>
> **"Have you designed an object model with thoughtful names and meaningful components to convey the semantic structure of the designs?… I want to see the names of the design, the names of the parts of the design. An object model that captures the design, but in the semantics. What are the differences. What are the types of books that are different? Don't extend synopsis unless you are creating a new type of synopsis!"**
>
> **"Coming up with an object model for the design is as hard or harder than the design itself. The design has nothing to say about structure… It is deep work to fill the pages of the reference manuals with the tools that will help us build this library."**
>
> **"The annotation system is new. They are a form of adding trait. They give you a power that is almost like multiple inheritance. Like classes in the html so CSS could be moved out, annotations give you a place for the magic to allow the code to retain much of its semantic character."**

## The method it used, kept as five lines

- **A screen is evidence of the domain, never the domain** — Evans, *Domain-Driven Design*, 2003; Fowler, *Separated Presentation*, 2006. Whatever would have to be written twice for a second presentation belongs in the model.
- **Five tests before a subclass** — Coad, 1992: the subclass is a special kind of, never a role played by; it never needs to become something else; it extends rather than overrides or nullifies; it does not subclass a utility class; and within the domain it is a special kind of a thing, not a role, transaction or device. *His one sentence says the same: "You don't subclass to get plumbing. You subclass semantically."*
- **A trait for what a thing can have two of** — annotations, said of a writing, read in `is()`.
- **A block never sets its own outer geometry** — the parent places, the theme paints.
- **Names say what a thing is**, in the domain's own words — now [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md).

## What it came to

**Taken, each when a design on the screen needed it:** a type of book as a class whose `write()` places, with its arrangement, theme and faces; `Entry` and `Index`; the turn; one of a set and a family of views; a title that means the book its chapter is a synopsis of. **Proposed and not taken:** the author and the subject as notes on the cover; removing the framework's pagination, which the layout now extends instead; the kinds Introduction, Guide, Lead, Question and Decision as kinds of chapter — three of them became things said of a paragraph. **What superseded the survey's tables:** the designs' own files read whole, [The Domain of the Designs](01-06-the-domain-of-the-designs.md), whose four attributes say what the survey guessed at; and what each build found, in [How a Book Is Laid Out](01-04-how-a-book-is-laid-out.md).
