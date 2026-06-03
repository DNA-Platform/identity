---
title: Subjects and catalogues
author: "[Libby](../.team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Subjects and catalogues

Libby: A subject catalogue IS the subject. Not a book ABOUT a subject — the subject's identity. The way an autobiography IS the agent, a catalogue IS the subject it defines.

## The flat structure

Libby: A subject catalogue does NOT contain the books it catalogues. The books sit beside it as peers at the same directory level. The subject catalogue LINKS to them. This is the core structural principle — you can't achieve multi-subject membership with folders. You achieve it with links.

```
library/
  .protocols/                ← subject catalogue (a book with chapters)
  voice-and-nametags/        ← book (subject: .protocols) — PEER, not child
  the-boot-sequence/         ← book (subject: .protocols) — PEER, not child
  coding-policy/             ← book (subject: .protocols) — PEER, not child
```

Libby: `.protocols/` has a `.cover.md` and chapters. The chapters describe protocols as a subject — conventions, principles, how they relate. The TOC lists the books: voice-and-nametags, the-boot-sequence, coding-policy. But those books are SEPARATE DIRECTORIES at the same level. They are not inside `.protocols/`.

## The three types

| Prefix | Role | Count | Self-referential? |
|--------|------|-------|-------------------|
| `..` | Library catalogue | One per library | Yes — catalogues itself and all top-level subjects |
| `.` | Subject catalogue | Many per library | Yes — catalogues itself and the books in its subject |
| (none) | Regular book | Many per library | No — declares its subject, catalogued by a subject |

## Self-cataloguing

Libby: Every catalogue appears in its own table of contents. The catalogue's entry in its own TOC says "this subject exists, and this is what it's about." The self-reference constitutes the subject's identity.

## The `subject:` field

Libby: Every regular book declares its canonical subject in its frontmatter:

```yaml
---
title: Voice and Nametags
subject: ".protocols"
author: "[Arthur](path/to/autobiography/.cover.md)"
summary: >
  Paragraph summary...
---
```

Libby: The frontmatter order is: **title > subject > author > summary**. The subject says where this book lives. The author says who wrote it.

## Multi-subject membership

Libby: A book can belong to multiple subjects. Newton's Principia is philosophy, physics, and math. It has ONE directory. It has `subject: ".physics"` as its canonical subject. The `.philosophy/` and `.math/` subject catalogues each have a TOC entry that links to the Principia. The book doesn't link back to non-canonical subjects. Non-canonical subjects find the book; the book only knows its canonical home.

Libby: This is impossible in a folder-based hierarchy. A directory can only have one parent. In a link-based hierarchy, a book can be catalogued by as many subjects as see relevance. The flat filesystem makes multi-subject membership natural.

## What a subject catalogue contains

Libby: A subject catalogue is a BOOK. It has `.cover.md` and chapters. Its chapters can include:

1. **The subject's specification** — what this subject is, its conventions, its principles
2. **Protocols specific to this subject** — rules that apply to books in this subject
3. **Validation resources** — code that checks the subject's conventions
4. **Its own self-cataloguing entry** — the subject appears in its own TOC

Libby: The cover's TOC also lists the BOOKS in this subject — with paragraph descriptions and links to the peer directories where those books live. The subject catalogue is both a book (with its own content) and an index (pointing to other books).

## How subjects grow

Libby: A book grows too long → factor into two books and a subject catalogue. Three new peer directories. The subject catalogue IS the new subject. The two books have `subject:` pointing to the new catalogue.

Libby: A subject gets too many books → factor into sub-subjects. The original subject catalogue gains entries for the new sub-subject catalogues. The sub-subjects catalogue subsets of the books. The tree gets deeper through link nesting, not folder nesting.

## Agent libraries

Libby: Each team member has a personal library inside `.team/{agent}/`. Inside that folder, the structure is the SAME flat pattern:

```
.team/arthur/
  .everything-that-has-a-shape/           ← subject catalogue (Arthur's library identity)
  arthur-or-the-shape-of-everything/      ← book (autobiography, peer)
  the-architecture-of-identity/           ← book (peer)
  perspective/                            ← book (peer)
```

Libby: The agent's subject catalogue, autobiography, and other books are flat peers. The subject catalogue links to the books. Each book has `subject: ".everything-that-has-a-shape"`.

## The `.team/` subject

Libby: `.team/` is a subject catalogue at the library root. It's special because it contains agent folders. But it still follows the pattern — it catalogues books about the team (roles, abilities, sprint tracking) that sit as peers at the library root, AND it catalogues the agent folders inside it.

## Naming

Libby: Names are timeless. Don't encode current state. `.what-the-tests-promise` not `.what-428-tests-promise`. The number changes. The promise doesn't.

Libby: Names are tier-zero synopsis. You read them in every link, every listing, every reference. Choose names that carry meaning about what the book IS, not what it contains right now.

## The catalogue instinct

Libby: Signs a new subject is needed:

- **A book in 10+ chapters** — might be broader than one book
- **Three books with repeated preamble** — "see X and Y first" means X, Y, and this book share a subject
- **Reading-order questions** — "what should I read first?" is answered by a catalogue
- **Multi-subject books** — if a book keeps getting linked by catalogues that aren't its canonical subject, maybe it needs a new canonical home

<!-- citations -->
[anatomy]: 01-anatomy-of-a-book.md
[reading cost]: 08-the-reading-cost-architecture.md
[flat structure]: .09-the-flat-structure.md
