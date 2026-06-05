---
title: Growth and refactoring
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Growth and refactoring

[On Evolution](../bookkeeping/10-on-evolution.md) specifies the library's growth patterns — chapter-to-book, book-to-subject, catalogue evolution, scaffolds, and the refactoring instinct. This field guide chapter preserves the detailed step-by-step procedures and the book-to-anthology pattern that expand on the specification.

## Chapter to book — procedure

[On Evolution](../bookkeeping/10-on-evolution.md#chapter-to-book) defines the signal. The full procedure:

1. Create a new book directory at the same level.
2. Move the chapter's content into the new book as chapters.
3. Write a [`.cover.md`](../bookkeeping/03-on-covers.md) for the new book.
4. In the original book, replace the extracted chapter with a **summary paragraph** — two to four sentences that capture the essential point — followed by a prominent link: *"See [new book title] for the full treatment."*
5. Update the original book's TOC.

The summary is critical. Most readers of the original book don't need the full extracted content — they need to know it exists and where to find it. A good summary means they rarely follow the link.

## Book to anthology

**Signal:** a book's chapters have each grown into books. The original book is no longer a single coherent argument — it's a container for loosely related sub-books.

**Procedure:**

1. Each chapter that's become a book already exists as a separate directory (from the chapter-to-book process above).
2. The original book's cover becomes a **catalogue cover** — it describes how the constituent books relate, suggests a reading order, and provides the conceptual thread that connects them.
3. Change the cover's tone from "this book argues X" to "these books explore X from different angles."

An anthology is a catalogue that remembers it used to be a book. The history is part of the value.

## Book to subject — procedure

[On Evolution](../bookkeeping/10-on-evolution.md#book-to-subject) defines the signal. The full procedure:

1. Create a new [subject catalogue](../bookkeeping/07-on-subjects.md) — a `.` prefixed directory with `.cover.md`.
2. The catalogue's cover describes the conceptual thread and catalogues the books with [subject-shaped descriptions](../bookkeeping/07-on-subjects.md#subject-shaped-descriptions) — each book described from the subject's perspective.
3. Each book adds `subject:` to its frontmatter pointing to the new catalogue.
4. The new subject catalogue self-catalogues — it appears in its own TOC.
5. The parent catalogue (e.g., `..librarianship/` or `..teamsmanship/`) adds the new subject to ITS TOC.

## Subject to nested subjects — procedure

[On Evolution](../bookkeeping/10-on-evolution.md#subject-to-nested-subjects) defines the signal. The full procedure:

1. Identify a cluster of 3+ books that form a coherent sub-subject.
2. Create a new `.` prefixed subject catalogue at the same level.
3. The new sub-subject's `subject:` points to the parent subject catalogue.
4. Move the clustered books' `subject:` from the parent to the new sub-subject.
5. The parent catalogue adds the new sub-subject to its TOC and removes the individual book entries.

## When NOT to split — details

[On Evolution](../bookkeeping/10-on-evolution.md#when-not-to-split) lists the signals. The underlying principle: splitting is for the READER, not the writer. If the reader's experience gets worse — bouncing between files, losing context, needing to hold two windows open — the split is wrong regardless of how long the chapter is.

The hardest case: a chapter that's long because it has code examples. The instinct is to split the examples into a separate file. Resist. The examples ARE the explanation for a code-heavy chapter. Consider shortening the examples instead — a 10-line snippet that proves the point beats a 40-line snippet that's "complete."

<!-- citations -->
[on growth]: ../bookkeeping/10-on-evolution.md
[on subjects]: ../bookkeeping/07-on-subjects.md
[on books]: ../bookkeeping/01-on-books.md
