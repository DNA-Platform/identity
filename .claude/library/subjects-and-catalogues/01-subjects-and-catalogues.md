---
title: Subjects and catalogues
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Subjects and catalogues

A subject catalogue IS the subject. Not a book ABOUT a subject — the subject's identity. The way an autobiography IS the teammate, a catalogue IS the subject it defines.

## The flat structure

A subject catalogue does NOT contain the books it catalogues. The books sit beside it as peers at the same directory level. The subject catalogue LINKS to them. This is the core structural principle — you can't achieve multi-subject membership with folders. You achieve it with links.

```
library/
  teamspeak/                ← subject catalogue (a book with chapters)
  voice-and-nametags/        ← book (subject: .protocols) — PEER, not child
  the-boot-sequence/         ← book (subject: .protocols) — PEER, not child
  coding-policy/             ← book (subject: .protocols) — PEER, not child
```

`teamspeak/` has a `.cover.md` and chapters. The chapters describe protocols as a subject — conventions, principles, how they relate. The TOC lists the books: voice-and-nametags, the-boot-sequence, coding-policy. But those books are SEPARATE DIRECTORIES at the same level. They are not inside `teamspeak/`.

## The three types

| Prefix | Role | Count | Self-referential? |
|--------|------|-------|-------------------|
| `..` | Library catalogue | Usually one per scope; public libraries with personal libraries may have two at the root | Yes — catalogues itself |
| `.` | Subject catalogue | Many per library | Yes — catalogues itself and the books in its subject |
| (none) | Regular book | Many per library | No — declares its subject, catalogued by a subject |

## Self-cataloguing

Every catalogue appears in its own table of contents. The catalogue's entry in its own TOC says "this subject exists, and this is what it's about." The self-reference constitutes the subject's identity.

## The `subject:` field

Every book declares its canonical subject in its frontmatter as a markdown link — symmetric with `author:`:

```yaml
---
title: Coding Policy
author: "[Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)"
subject: "[The Team](../..teamsmanship/.cover.md)"
---
```

The frontmatter order is: **title > author > subject**. Author before subject.

The `subject:` link has two parts, and they mean different things:

The **link text** is the SUBJECT'S name — what area of knowledge this book belongs to. "The Team", "Knowledge", "Physics". This is NOT the book's name. The book called "Teamsmanship" represents the subject called "The Team." The book called "Librarianship" represents the subject called "Knowledge." The book called "Principia Mathematica" represents the subject called "Natural Philosophy."

The **link target** is the CATALOGUING BOOK — the book that specifies and catalogues this subject. It points to the `.cover.md` of the subject catalogue.

This is the same pattern as `author:`. The `author:` link text is the PERSON's name ("Arthur"). The `author:` link target is the AUTOBIOGRAPHY — the book that represents the person. The person and the book about them are different things. The subject and the book about it are different things. The link carries both: the name identifies, the path locates.

For self-cataloguing catalogues, the subject is a self-link: `subject: "[Knowledge](.cover.md)"` on the Librarianship book. The subject name is "Knowledge." The book is "Librarianship." The self-link says: this book IS the catalogue for the subject it names.

## Multi-subject membership

A book can belong to multiple subjects. Newton's Principia is philosophy, physics, and math. It has ONE directory. It has `subject: "[Natural Philosophy](../.physics/.cover.md)"` as its canonical subject. The philosophy and math subject catalogues each link to the Principia in their TOCs — with descriptions shaped by their own perspective. The book doesn't link back to non-canonical subjects. The non-canonical subjects find the book; the book only knows its canonical home.

The Principia described by the physics catalogue talks about the calculus of motion. The same Principia described by the philosophy catalogue talks about the mechanical worldview. Same book. Different subject-shaped descriptions. The subject determines how the book is described, not what the book contains.

This is impossible in a folder-based hierarchy. A directory can only have one parent. In a link-based hierarchy, a book can be catalogued by as many subjects as see relevance. The flat filesystem makes multi-subject membership natural.

## What a subject catalogue contains

A subject catalogue is a BOOK. It has `.cover.md` and chapters. Its chapters can include:

1. **The subject's specification** — what this subject is, its conventions, its principles
2. **Protocols specific to this subject** — rules that apply to books in this subject
3. **Validation resources** — code that checks the subject's conventions
4. **Its own self-cataloguing entry** — the subject appears in its own TOC

The cover's TOC also lists the BOOKS in this subject — with paragraph descriptions and links to the peer directories where those books live. The subject catalogue is both a book (with its own content) and an index (pointing to other books).

## How subjects grow

A book grows too long → factor into two books and a subject catalogue. Three new peer directories. The subject catalogue IS the new subject. The two books have `subject:` pointing to the new catalogue.

A subject gets too many books → factor into sub-subjects. The original subject catalogue gains entries for the new sub-subject catalogues. The sub-subjects catalogue subsets of the books. The tree gets deeper through link nesting, not folder nesting.

## Agent libraries

Each team member has a personal library inside `..teamsmanship/{agent}/`. Inside that folder, the structure is the SAME flat pattern:

```
..teamsmanship/..team/arthur/
  ..everything-that-has-a-shape/           ← subject catalogue (Arthur's library identity)
  arthur-or-the-shape-of-everything/      ← book (autobiography, peer)
  the-architecture-of-identity/           ← book (peer)
  perspective/                            ← book (peer)
```

The teammate's subject catalogue, autobiography, and other books are flat peers. The subject catalogue links to the books. Each book has `subject: ".everything-that-has-a-shape"`.

## The `..teamsmanship/` subject

`..teamsmanship/` is a subject catalogue at the library root. It's special because it contains agent folders. But it still follows the pattern — it catalogues books about the team (roles, abilities, sprint tracking) that sit as peers at the library root, AND it catalogues the teammate folders inside it.

## Naming

Names are timeless. Don't encode current state. `.what-the-tests-promise` not `.what-428-tests-promise`. The number changes. The promise doesn't.

Names are tier-zero synopsis. You read them in every link, every listing, every reference. Choose names that carry meaning about what the book IS, not what it contains right now.

## The catalogue instinct

Signs a new subject is needed:

- **A book in 10+ chapters** — might be broader than one book
- **Three books with repeated preamble** — "see X and Y first" means X, Y, and this book share a subject
- **Reading-order questions** — "what should I read first?" is answered by a catalogue
- **Multi-subject books** — if a book keeps getting linked by catalogues that aren't its canonical subject, maybe it needs a new canonical home

<!-- citations -->
[anatomy]: ../bookkeeping/01-on-books.md
[reading cost]: 08-the-reading-cost-architecture.md
[flat structure]: 11-the-flat-structure.md
