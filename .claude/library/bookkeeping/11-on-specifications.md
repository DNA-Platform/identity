---
title: On Specifications
specification: Specification
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Specifications

A specification DEFINES something. A regular [book](01-on-books.md) is ABOUT something. The distinction is authority: a specification is the definitive word on what a thing IS, not an exploration of what it means. Bookkeeping doesn't describe books — it defines what a valid book is. [Teamspeak](../teamspeak/.cover.md) doesn't discuss communication — it defines how the team communicates.

## The `specification:` label

A plain text [label](05-on-frontmatter.md#specification) in frontmatter. The term being specified — a word, not a link. `specification: Book` or `specification: Cover` or `specification: Specification`. The term names the thing defined. It sits after `catalogues:` (if present) and before `author:` in [field order](05-on-frontmatter.md#field-order).

A specification label can appear on a [chapter](02-on-chapters.md) or on a book's [cover](03-on-covers.md). On a chapter: this chapter specifies this term. On a cover: this book specifies this term. A specification book like Bookkeeping has `specification: Book` on its cover AND `specification: Book` on its first chapter — the book specifies the type, and the first chapter provides the detailed specification.

## Validators

A specification is often accompanied by a validator — executable code that checks the conventions the specification describes. The validator is a [resource](02-on-chapters.md#resources) that sits beside the cover as a book-level resource, or beside the chapter that documents it.

The chapter is documentation for the code. The code is specification made executable. They say the same thing in different languages: the chapter in prose for readers, the validator in TypeScript for machines. A specification without a validator is a convention. A specification with a validator is a contract.

[bookkeeping.ts](bookkeeping.ts) validates everything the chapters in this book specify: [frontmatter](05-on-frontmatter.md) fields and order, [chapter signing](02-on-chapters.md#signing), [cover](03-on-covers.md) structure, [catalogue](07-on-subjects.md) self-cataloguing. One validator for the whole book — because the specifications in this book form a coherent type system, not independent rules.

## Essential specifications

Every [subject](07-on-subjects.md) depends on terms defined in specification books. The [library catalogue](08-on-libraries.md) identifies these as essential specifications — the books without which the subject's other books cannot be properly formed.

- **Knowledge** -> [Bookkeeping](.cover.md) (how books work)
- **Collaboration** -> [Teamspeak](../teamspeak/.cover.md) (how the team communicates)

An essential specification for a subject is like a type definition for a language: without it, you can't write valid code. Without Bookkeeping, you can't write valid books. The specification IS the subject's type system.

## How specifications evolve

A specification starts as a chapter in a larger book — a field guide entry, a convention described in passing. When the convention becomes important enough to be authoritative, the chapter gains a `specification:` label. When the specification grows beyond what one chapter can hold, the chapter becomes a book — still with `specification:` on the cover, now with multiple specification chapters inside.

This is the pattern Bookkeeping followed. It started as a single field guide chapter in [Librarianship](../..librarianship/.cover.md) ("Anatomy of a book"). It grew a validator. It gained a name. It became a book with eleven specification chapters. The specification didn't change — it was always the specification of what a book IS. What changed was the level of articulation.

See [On Evolution](10-on-evolution.md) for the general pattern of chapters becoming books.

## The specification instinct

Signs that something should be a specification:

- You keep correcting people who do it wrong — there's a rule that isn't written down
- A validator checks something but no chapter explains what it checks
- Two books assume the same convention but define it differently
- A term appears in many chapters but no chapter owns the definition

When these signs appear, write the specification. Give it a `specification:` label. Put it where it belongs — in the essential specification book for the relevant subject. The act of specifying often reveals ambiguities the convention had been hiding.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[frontmatter]: 05-on-frontmatter.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[growth]: 10-on-evolution.md
[bookkeeping]: .cover.md
[teamspeak]: ../teamspeak/.cover.md
[librarianship]: ../..librarianship/.cover.md
