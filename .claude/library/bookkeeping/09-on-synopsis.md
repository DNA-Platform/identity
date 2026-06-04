---
title: On Synopsis
specification: Synopsis
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Synopsis

Libby: Every line read is context consumed. After a compaction, context is the scarcest resource. The library's job is to answer questions at the shallowest layer possible, so the reader never opens a [book](01-on-books.md) they don't need. Synopsis — the summary at each layer — is how the library pays for depth with brevity.

## The four layers

Libby: Between "I need to know something" and "I'm reading the chapter," there are four layers. Each is richer than the last but narrower in scope. Each should make the next rarely necessary.

### Layer 0: The name

Libby: The [name](04-on-names.md) of a book, a chapter, a subject. Read in every [link](06-on-links.md), every listing, at zero cost — no file needs to be opened. *Bookkeeping* tells you the book specifies how books work. *On Covers* tells you the chapter is about covers. The name carries identity before any file is read. This is tier-zero synopsis — the densest possible description.

### Layer 1: The library catalogue

Libby: The [library catalogue](08-on-libraries.md) cover ([`..librarianship/.cover.md`](../..librarianship/.cover.md)). TOC entries are **paragraphs** — one per subject. Each paragraph: what the subject covers, what you'll learn, when to go deeper. Each paragraph contains [links into specific chapters](06-on-links.md#section-targets) — not just to the subject catalogue but directly to the chapter that answers the most common question.

Libby: A reader scanning this page answers: "Is what I need in Knowledge or Collaboration?" And if they already know the topic: "Which chapter has the nametag convention?" — answered by a link in the paragraph, no further navigation.

Libby: **Budget: ~150-200 lines** for the full library catalogue.

### Layer 2: The subject catalogue

Libby: The [subject catalogue](07-on-subjects.md) cover (e.g., `..teamsmanship/.cover.md`). TOC entries are **paragraphs** — one per book in the subject. Each paragraph is subject-shaped: not just "what this book covers" but "what you'll learn from this subject's perspective." Each paragraph contains links into specific chapters.

Libby: A reader at this layer knows which subject. They're deciding which book. The paragraph answers that without opening the book.

Libby: **Budget: ~80-120 lines** per subject catalogue.

### Layer 3: The book cover

Libby: The [cover](03-on-covers.md) (`bookkeeping/.cover.md`). An opening paragraph (what this book is). A table of contents where each entry is 2-3 sentences for reference books, one line for chronological books. TOC entries may link into specific sections within chapters.

Libby: A reader at this layer knows which book. They're deciding which chapter.

Libby: **Budget: ~40-80 lines** per book cover.

### Layer 4: The chapter

Libby: The [chapter](02-on-chapters.md) itself. Primary source. A reader arrives here only when layers 0-3 didn't answer their question. No budget — it's as long as it needs to be.

## The shortcut system

Libby: Each layer contains links INTO deeper layers — not just to the next layer's cover but directly to specific chapters or sections. This creates shortcuts:

- Library catalogue paragraph about Knowledge -> links to a specific Bookkeeping chapter
- Subject catalogue paragraph about a book -> links to the key chapter directly
- Book cover TOC entry -> links to a specific section within the chapter

Libby: A reader who knows exactly what they need follows a shortcut and skips layers entirely. A reader who's browsing reads the synopses layer by layer. Both paths work. The links serve the expert; the synopses serve the explorer.

## The tending practice

Libby: When content changes, three updates are required:

1. **Layer 3** — update the book's cover synopsis and TOC entries
2. **Layer 2** — update the subject catalogue's description of that book
3. **Layer 1** — update the library catalogue's description of that subject (if significant)

Libby: Three updates per change. The cost is paid once, by the author, at write time. It's recovered many times, by every reader, at read time. The library optimizes for reading because reading is the scarce operation — writing happens once, reading happens every session.

## The reading cost test

Libby: After any restructure, count the lines in the waking-up path:

- Layer 1 (CLAUDE.md + library catalogue): < 250 lines
- Adding layer 2 (one subject catalogue): < 120 additional lines
- Adding layer 3 (one book cover): < 80 additional lines
- Full orientation (layers 1-2 for all active subjects): < 400 lines

Libby: If totals exceed these budgets, the synopses are too long or the library has too many subjects at the top level. Either compress the synopses or factor subjects into sub-subjects. See [On Evolution](10-on-evolution.md).

## Why four layers

Libby: The number maps to four questions a reader asks in sequence:

1. "What does this library contain?" -> Layer 1
2. "What does this subject cover?" -> Layer 2
3. "What does this book teach?" -> Layer 3
4. "What exactly does this chapter say?" -> Layer 4

Libby: A well-tended library answers 80% of questions by layer 2. Layer 3 is for finding the right chapter in a known book. Layer 4 is for depth no synopsis can replace.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[names]: 04-on-names.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[growth]: 10-on-evolution.md
[librarianship]: ../..librarianship/.cover.md
