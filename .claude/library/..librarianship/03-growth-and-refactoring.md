---
title: Growth and refactoring
author: "[Libby](../.teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Growth and refactoring

Books grow. Content accumulates. A chapter that started as twenty lines becomes two hundred. A book that started with three chapters has twelve. The garden gets overgrown. This chapter is about when and how to prune.

## Chapter → Book

**Signal:** a chapter needs its own table of contents — it has internal sections that readers want to jump between, or it's long enough that scrolling becomes navigation.

**Procedure:**

1. Create a new book directory at the same level.
2. Move the chapter's content into the new book as chapters.
3. Write a `.cover.md` for the new book.
4. In the original book, replace the extracted chapter with a **summary paragraph** — two to four sentences that capture the essential point — followed by a prominent link: *"See [new book title] for the full treatment."*
5. Update the original book's TOC.

The summary is critical. Most readers of the original book don't need the full extracted content — they need to know it exists and where to find it. A good summary means they rarely have to follow the link.

## Book → Anthology

**Signal:** a book's chapters have each grown into books. The original book is no longer a single coherent argument — it's a container for loosely related sub-books.

**Procedure:**

1. Each chapter that's become a book already exists as a separate directory (from the chapter → book process above).
2. The original book's cover becomes a **catalogue cover** — it describes how the constituent books relate, suggests a reading order, and provides the conceptual thread that connects them.
3. Change the cover's tone from "this book argues X" to "these books explore X from different angles."

An anthology is a catalogue that remembers it used to be a book. The history is part of the value.

## When NOT to split

- The chapter is long but linear — readers will read top to bottom. Length alone isn't a reason to split.
- The content is tightly coupled — splitting would force readers to bounce between two files to understand one idea.
- The chapter is long because it has code examples. Consider whether the examples can be shortened instead.

## Book → Subject

Libby: **Signal:** several books share a conceptual thread that none fully articulates. You keep writing "before reading this, see X and Y" at the top of books. Readers ask "what should I read first?"

Libby: **Procedure:**

1. Create a new [subject catalogue](../subjects-and-catalogues/01-subjects-and-catalogues.md) — a `.` prefixed directory with `.cover.md`.
2. The catalogue's cover describes the conceptual thread and catalogues the books with [subject-shaped descriptions](../subjects-and-catalogues/01-subjects-and-catalogues.md) — each book described from the subject's perspective.
3. Each book adds `subject: ".new-subject"` to its frontmatter pointing to the new catalogue.
4. The new subject catalogue [self-catalogues](../subjects-and-catalogues/01-subjects-and-catalogues.md) — it appears in its own TOC.
5. The parent catalogue (e.g., `..librarianship/` or `.teamsmanship/`) adds the new subject to ITS TOC.

Libby: Three new peer directories: the subject catalogue and at least two books. A subject with only one book is just a book — subjects need MULTIPLE books to justify existence.

Libby: Subjects can catalogue sub-subjects — this is how the [tree grows deep](../subjects-and-catalogues/01-subjects-and-catalogues.md). The filesystem stays flat. The depth is in the links.

## Catalogue evolution

Libby: A catalogue book can grow too large when its chapters are themselves rich specifications. The catalogue evolves: its chapters graduate into standalone books, and the catalogue transitions from CONTAINING the content to CATALOGUING it.

Libby: **Signal:** a catalogue has more than 10-15 chapters, and several chapters are 80+ lines — each a self-contained specification that could stand alone. The catalogue's cover is trying to be both a field guide (specification) AND an index (navigation), and it's too long for either job.

Libby: **Procedure:**

1. Identify chapters that are substantial enough to be books (typically 80+ lines with multiple sections).
2. For each graduating chapter, create a new book directory at the library root with the chapter's content.
3. The new book's `subject:` points back to the catalogue.
4. In the catalogue, replace the graduated chapter with a shorter catalogue entry — a chapter ABOUT the book rather than a chapter that IS the content. The catalogue chapter links to the standalone book and describes it from the subject's perspective.
5. Chapters that are short, transitional, or tightly coupled to the catalogue's identity stay as chapters.

Libby: The catalogue becomes leaner and more navigational. The books become richer and more independent. Both are better for it — the catalogue is easier to scan, and the books are easier to find and read in isolation.

Libby: This is how [Librarianship](.cover.md) itself evolved. Its field guide chapters grew large enough to be standalone books about Knowledge. The chapters graduated. Librarianship became a catalogue of books rather than a container of chapters. The spec captured its own evolution.

## Book → Subject (revisited)

Libby: The earlier section describes a book factoring into a subject when several books share a thread. But books also evolve INTO subjects on their own — when a single book grows so many chapters that its chapters want to be books.

Libby: **Signal:** a book has 15+ chapters, several over 80 lines. The TOC is long. Readers can't scan it. The chapters have internal structure (H2 sections) that could be their own TOC entries. The book is doing two jobs: specifying a subject AND holding all the content. It should split: the specification stays as the catalogue, the content becomes books.

Libby: This is how a book becomes a subject catalogue. The book already WAS the subject — it just didn't know it yet. The factoring makes the implicit explicit.

## Subject → Nested subjects

Libby: A subject catalogue grows. It catalogues 10, then 15, then 20 books. The TOC is too long. Clusters emerge — groups of books that relate more to each other than to the rest.

Libby: **Signal:** the catalogue's TOC has natural groupings. You keep adding section headers to organize the TOC. Readers ask "where are the books about X?" and X is a subset of the subject.

Libby: **Procedure:**

1. Identify a cluster of 3+ books that form a coherent sub-subject.
2. Create a new `.` prefixed subject catalogue at the same level.
3. The new sub-subject's `subject:` points to the parent subject catalogue.
4. Move the clustered books' `subject:` from the parent to the new sub-subject.
5. The parent catalogue adds the new sub-subject to its TOC and removes the individual book entries.

Libby: The tree deepens: `..librarianship/` → `.book-craft/` → `anatomy-of-a-book/`. Three levels. All flat in the filesystem. All linked in the covers. The sub-subject IS the cluster's identity — not a folder, a catalogue.

Libby: Subjects can nest arbitrarily deep through this pattern. The filesystem stays flat at each level. The depth is always in the links.

## The refactoring instinct

Libby: Signs during routine maintenance:

- **A chapter with H2 sections that could each stand alone** — candidate for chapter → book.
- **Two books that keep linking to each other** — they might be chapters of a third, unwritten book.
- **A book with more than 8-10 chapters** — consider book → subject factoring.
- **A catalogue with more than 15 chapters** — consider catalogue evolution (chapters → books).
- **A summary that's hard to write** — probably about more than one thing.
- **Three books with repeated preamble** — they share a subject.
- **A subject with only one book** — it's not a subject yet. It's just a book.

<!-- citations -->
[subjects and catalogues]: 04-subjects-and-catalogues.md
[anatomy]: 01-anatomy-of-a-book.md
