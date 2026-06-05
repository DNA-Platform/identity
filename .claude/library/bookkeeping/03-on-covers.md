---
title: On Covers
specification: Cover
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Covers

A cover is a [chapter](02-on-chapters.md) that knows about its [book](01-on-books.md). It is `.cover.md` — the dot prefix sorts it above numbered chapters and signals "this is the book's face, not its content." The cover is the first thing you read when you open a book. Most of the time, it is the ONLY thing you need to read.

## A specialized chapter

In the [type system](.cover.md#the-dot-type-system), a cover is one level of specialization above a chapter. It has the same format — markdown with [frontmatter](05-on-frontmatter.md) — but it carries additional fields (`subject:`, optionally `catalogues:` and `specification:`) and additional responsibilities (the opening paragraph, the table of contents). A chapter says what it says. A cover says what the whole book says.

## The opening paragraph

The first paragraph after the heading IS the book's [synopsis](09-on-synopsis.md). Not a frontmatter field — prose in the body. This paragraph answers: what is this book, why does it exist, who should read it. It is the densest prose in the book. A reader scanning the [subject catalogue](07-on-subjects.md) may see only a description of this book — but a reader who opens the cover will read this paragraph. It must earn that read.

No `summary:` in frontmatter. The cover IS the summary. Frontmatter is structural metadata. The synopsis is prose.

## The table of contents

An ordered list of [chapters](02-on-chapters.md) as markdown [links](06-on-links.md) with descriptions. The TOC is the book's second layer of [synopsis](09-on-synopsis.md) — richer than the opening paragraph but still a fraction of the full content.

### For reference books

Each TOC entry is 2-3 sentences — rich enough to answer a question without opening the chapter. The reader is looking for a specific topic. The description tells them whether this chapter has it. TOC entries can contain [links into specific sections](06-on-links.md) of the chapter — shortcuts that let the reader skip straight to what they need.

```markdown
1. [On Books](01-on-books.md) — `specification: Book`. The base type: a directory
   with a cover and chapters. What belongs in a book, what doesn't. The book as
   the library's atom. [Resources](01-on-books.md#resources) sit beside chapters.
```

### For chronological books

One-line TOC entries are fine. Autobiographies and sprint histories are navigated by time, not by topic. The chapter [name](04-on-names.md) carries enough meaning.

```markdown
27. [The garden is what it grew](27-the-garden-is-what-it-grew.md)
28. [Bookkeeping](28-bookkeeping.md)
```

### How the TOC grows

A new chapter means a new TOC entry. The description is written at the same time as the chapter — they are one act, not two. A TOC entry without a chapter is a `[SCAFFOLD]` marker. A chapter without a TOC entry is invisible, which is the same as nonexistent. See [On Links](06-on-links.md) — discoverability is existence.

## Catalogue covers

When the book is a [subject catalogue](07-on-subjects.md) or [library catalogue](08-on-libraries.md), the cover's TOC catalogues OTHER books, not just its own chapters. A book cover looks inward — it describes its own chapters. A catalogue cover looks outward — it describes the books in its subject, and it may also have specification chapters of its own.

The difference shows in the TOC entries. A book cover entry says what a chapter teaches. A catalogue cover entry says what a book teaches *from this subject's perspective*. The same book appears differently in different catalogues because each subject sees it through its own lens. See [On Subjects](07-on-subjects.md#subject-shaped-descriptions).

A catalogue cover also self-catalogues: it has an entry for ITSELF in its own TOC. This self-reference constitutes the subject's identity — without it, the catalogue describes everything except the thing it represents. See [On Subjects](07-on-subjects.md#self-cataloguing).

## The cover IS the book's face

In the [reading cost architecture](09-on-synopsis.md), the cover is layer 3 — the last layer before primary source. A well-written cover means most readers never open a chapter. The cover answers "what does this book teach?" and "which chapter has what I need?" If those answers are good enough, the reader moves on. The chapter exists for the reader who needs depth no synopsis can replace.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[names]: 04-on-names.md
[frontmatter]: 05-on-frontmatter.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[synopsis]: 09-on-synopsis.md
[type system]: .cover.md#the-dot-type-system
