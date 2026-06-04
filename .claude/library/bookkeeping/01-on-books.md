---
title: On Books
specification: Book
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Books

Libby: A book is a directory. Inside it: one [cover](03-on-covers.md) and any number of [chapters](02-on-chapters.md). That is the entire model. The directory IS the book. The cover IS the face. The chapters ARE the content. Nothing else belongs.

## The base type

Libby: In the library's [type system](.cover.md#the-dot-type-system), a book with no prefix is the base type. It holds content. It belongs to a [subject](07-on-subjects.md) declared in its [frontmatter](05-on-frontmatter.md). It is catalogued by a [subject catalogue](07-on-subjects.md) that links to it from a table of contents with a description shaped by the subject's perspective.

Libby: The dot prefix marks specialization. A `.`-prefixed directory is a [subject catalogue](07-on-subjects.md) — a book that catalogues other books. A `..`-prefixed directory is a [library catalogue](08-on-libraries.md) — a subject catalogue that IS the library. Each level adds behavior while preserving the base structure: directory, cover, chapters.

## What a book contains

Libby: **`.cover.md`** — the entry point. [Frontmatter](05-on-frontmatter.md) with title, author, subject. An opening paragraph. A table of contents. The cover is the [synopsis](09-on-synopsis.md) that makes opening a chapter rarely necessary. See [On Covers](03-on-covers.md).

Libby: **`NN-slug.md`** — numbered chapters. Each one [signed](05-on-frontmatter.md) by its author. The number is a sort key for reading order, not semantic. See [On Chapters](02-on-chapters.md).

Libby: **Resource files** — non-markdown files that sit beside the chapter they serve. A `.ts` validator beside the chapter that documents it. An image beside the chapter that displays it. The chapter is documentation for the resource; the resource is evidence for the chapter. See [On Chapters](02-on-chapters.md#resources).

## What a book does not contain

Libby: **Other books.** Books are peers in a flat directory. A book does not nest inside another book. A subject catalogue does not contain the books it catalogues — they sit beside it. The hierarchy lives in [links](06-on-links.md), not folders. See [On Subjects](07-on-subjects.md).

Libby: **Loose files.** The library is closed under books. No sticky notes, no stray markdown outside a book. Every piece of writing lives in a book as a chapter.

Libby: **Duplicated content.** If two books need the same paragraph, one [links](06-on-links.md) to the other. The content lives in one place. Duplication rots because only one copy gets updated.

## Identity

Libby: A book's [name](04-on-names.md) — the directory name — is tier-zero [synopsis](09-on-synopsis.md). You read it in every link, every listing, every reference. It carries identity at zero reading cost. Choose names that say what the book IS, not what it contains right now. Names are timeless.

Libby: A book's `subject:` field says where it belongs. A book's `author:` field says who wrote it. Together with the name, these three — name, author, subject — are the book's identity. Everything else is content.

## The book as a unit

Libby: Books are the library's atoms. They can be linked, catalogued, described, moved, and factored — but they cannot be subdivided below the chapter level without losing identity. A chapter without its book has no cover, no synopsis, no table of contents. A cover without chapters has no content. The book is the smallest self-describing unit.

Libby: When a book [grows](10-on-evolution.md) too large, it factors into multiple books and a subject catalogue. When a chapter grows too large, it becomes its own book. The unit stays the same — a directory with a cover and chapters — at every scale.

<!-- citations -->
[covers]: 03-on-covers.md
[chapters]: 02-on-chapters.md
[names]: 04-on-names.md
[frontmatter]: 05-on-frontmatter.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[synopsis]: 09-on-synopsis.md
[growth]: 10-on-evolution.md
[specifications]: 11-on-specifications.md
[type system]: .cover.md#the-dot-type-system
