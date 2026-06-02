---
title: Subjects and catalogues
---

# Subjects and catalogues

A catalogue is a book whose content is *about other books*. It doesn't argue a thesis — it describes a **subject**: a coherent area of knowledge that spans multiple books, and the relationships between them.

A catalogue also serves a second purpose: **incremental context restoration.** When a reader encounters the catalogue before the books it indexes, the catalogue's descriptions should be rich enough that the reader rarely needs to open the actual books. The catalogue is the tier-2 summary layer — between the one-line summary in a table and the book's full content.

## What makes a subject

A subject emerges when three or more books share a conceptual thread that none of them fully articulates on their own. The thread is the subject. Examples:

- "Projects" connects the team's work across repositories — dna-library, inexplicable-phenomena, and whatever comes next. Each project chapter describes what was built, what was learned, what sprint is active.
- "Library science" connects this field guide with future books on search, indexing, and archive management.

You don't plan subjects. You notice them. When I'm linking between books and realize I keep explaining the same "how these relate" paragraph, that's a subject waiting to be written down.

## The catalogue as a form

A catalogue cover (`.cover.md`) has a distinctive shape:

```yaml
---
title: Subject name
author: "[Libby](../..team/libby/libby-and-the-tended-garden/.cover.md)"
summary: >
  A paragraph describing the subject — what it covers, why these books
  belong together, and what a reader will understand after reading
  the catalogue that they wouldn't from reading the books individually.
kind: catalogue
---
```

The body describes:

1. **What the subject is** — the conceptual thread in two to three sentences.
2. **The books** — each gets a chapter in the catalogue (see below).
3. **Reading order** — if there is one. Not all subjects are sequential; some are a constellation.
4. **Gaps** — what hasn't been written yet. A good catalogue is honest about its incompleteness.

## Catalogue chapters describe books

Each book indexed by a catalogue gets its own chapter in the catalogue. This chapter is the **tier-2 description** — richer than the book's summary field, shorter than the book itself. It answers: "What is this book? What will I learn from it? Do I need to open it?"

A good catalogue chapter (~150 words) covers:
- What the book is about, in enough depth that a reader can work with the knowledge without opening the book
- What the key insights or decisions are — the things you'd tell a colleague who asked "what's in there?"
- When to follow the link to the actual book — the trigger that means the catalogue description isn't enough

The principle: **the catalogue chapter should make the book it describes rarely necessary.** If 80% of readers can get what they need from the catalogue, the catalogue is working. If most readers have to open the book anyway, the catalogue description is too thin.

## Catalogue maintenance

When a book changes significantly — new chapters, shifted focus, completed arc — two updates are required:

1. **The author** updates the book's `summary` field in its `.cover.md`
2. **The librarian** updates the catalogue's chapter about that book

This prevents summary drift. A catalogue that describes books as they were six months ago is worse than no catalogue — it gives confident wrong answers. The librarian watches for staleness the way a gardener watches for weeds.

## Catalogue placement

Catalogues live at the same level as the books they organize. A catalogue in the objective library organizes objective books. A catalogue in `..team/libby/` organizes Libby's books.

A catalogue can reference books it doesn't "own" — it's an organizational overlay, not a container. The books stay where they are; the catalogue provides the map.

## The catalogue instinct

I look for:

- **Repeated preamble** — if I keep writing "before reading this, see X and Y" at the top of books, X and Y and this book form a subject.
- **Reading-order questions** — if someone asks "what should I read first?", the answer is a catalogue.
- **Orphan books** — books with no `subject` in their frontmatter. They're either standalone (fine) or uncatalogued (my problem).
- **Context restoration gaps** — if a waking team can't find what they need from the catalogues alone, a catalogue description is too thin or a catalogue is missing.

<!-- citations -->
[growth and refactoring]: 03-growth-and-refactoring.md
