---
title: On Evolution
specification: Evolution
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Evolution

Libby: The library evolves. Not just grows — becomes something it wasn't. A [chapter](02-on-chapters.md) becomes a [book](01-on-books.md). A book becomes a [subject](07-on-subjects.md). A container label dissolves when its contents find proper homes. A wiki becomes a library when it derives a specification of itself. Each transition preserves what came before while adding structure that wasn't there. The thing doesn't break. It evolves.

## Chapter to book

Libby: **Signal:** a chapter needs its own table of contents. Sections that readers want to jump between. Length that makes scrolling into navigation.

Libby: **Procedure:** new book directory at the same level. Chapter content becomes chapters of the new book. Write a [cover](03-on-covers.md). In the original book, replace the extracted chapter with a summary paragraph and a link. The summary is critical — it means most readers never follow the link. This is the [synopsis](09-on-synopsis.md) principle: each layer makes the next rarely necessary.

## Book to subject

Libby: **Signal:** several books share a conceptual thread none fully articulates. "Before reading this, see X and Y" at the top of books. Readers asking "what should I read first?"

Libby: **Procedure:** new [subject catalogue](07-on-subjects.md) — `.`-prefixed directory with a cover. The cover describes the thread and catalogues the books with subject-shaped descriptions. Each book adds `subject:` pointing to the new catalogue. The new catalogue self-catalogues. The parent catalogue adds the new subject.

Libby: Three new peer directories minimum. A subject with only one book is just a book.

## A book evolving into a subject

Libby: A book can evolve INTO a subject — when its chapters grow so numerous that each wants to be a book. The book already WAS the subject. It just didn't know it yet. The factoring makes the implicit explicit.

Libby: **Signal:** 15+ chapters, several over 80 lines. The TOC is too long to scan. The book is doing two jobs: specifying a subject AND holding all the content.

## Subject to nested subjects

Libby: **Signal:** a subject catalogue lists 15+ books. Natural clusters emerge. You keep adding section headers to organise the TOC.

Libby: **Procedure:** new `.`-prefixed catalogues for each cluster. The tree deepens through link nesting, not folder nesting. The filesystem stays flat.

## Catalogue evolution

Libby: The most important transition. A catalogue starts as a book with chapters — a field guide, a specification, a collection. Its chapters grow. Some become substantial enough to be their own books. The catalogue evolves from CONTAINING content to CATALOGUING it.

Libby: **Signal:** more than 10-15 chapters, several at 80+ lines. The cover is trying to be both a specification and an index.

Libby: **Procedure:** graduating chapters become books with `subject:` pointing back. The catalogue replaces each chapter with a synopsis entry — a description of the book rather than the content itself. Chapters that were in the wrong subject migrate to where they belong. Container labels that named the old structure dissolve. What remains is a pure catalogue: it specifies what it catalogues (through essential [specifications](11-on-specifications.md)) and then catalogues it (through the table of contents).

Libby: This is how [Librarianship](../..librarianship/.cover.md) evolved. Its field guide chapters grew into standalone books. Specification content migrated to [Bookkeeping](.cover.md). Platform content will migrate to the third subject. Subject descriptions became catalogue entries in the cover. The "field guide" label dissolved because it was a container for homeless content, and when the content found homes, the container had no purpose.

Libby: A pure catalogue has no leftover sections. Every chapter either specifies the subject or describes a book. Everything else has a home elsewhere.

## Dissolution

Libby: When a container label stops describing what it holds, the label dissolves. "Field guide" dissolved when its chapters found homes in Bookkeeping, Teamsmanship, and the cover. "Protocols" evolved into "Teamspeak" when the team understood what the book actually specified. The dissolution isn't destruction — it's the moment the library's structure catches up to its content. Content that was grouped by convenience becomes grouped by meaning.

Libby: Signs of a container ready to dissolve:
- Chapters that belong to different subjects sharing a section header
- A label that describes the format ("field guide") rather than the content
- Content that duplicates what exists more authoritatively elsewhere
- A section that's really just a table of contents for books described elsewhere

## When NOT to split

Libby: **Long but linear** — readers read top to bottom. Length alone isn't a reason.

Libby: **Tightly coupled** — splitting forces readers to bounce between files.

Libby: **Long from examples** — shorten the examples instead.

Libby: **Two books that keep linking to each other** — they might be chapters of a third, unwritten book.

## Scaffolds and incompleteness

Libby: The library is always incomplete. Incompleteness must be visible.

Libby: **`[SCAFFOLD]`** on a TOC entry means the chapter is planned but unwritten. The reader knows not to open it expecting content.

Libby: **`<!-- TODO: description -->`** inside a chapter marks a section in progress. Invisible to readers, visible to validators and editors.

Libby: Remove markers when the work is done. Stale markers are rot. A healthy library has some scaffolds (evolution in progress) but not many stale ones (abandoned work). The markers ARE the task list — the library tracks its own incompleteness.

## The evolution instinct

Libby: Signs during routine maintenance:

- A chapter with sections that could each stand alone — chapter to book
- Three books with repeated preamble — they share an unwritten subject
- A book with 8-10+ chapters — book to subject
- A catalogue with 15+ chapters — catalogue evolution
- A summary that's hard to write — probably about more than one thing
- A subject with only one book — not a subject yet
- A section label that describes format, not content — ready to dissolve

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[synopsis]: 09-on-synopsis.md
[specifications]: 11-on-specifications.md
[librarianship]: ../..librarianship/.cover.md
[bookkeeping]: .cover.md
