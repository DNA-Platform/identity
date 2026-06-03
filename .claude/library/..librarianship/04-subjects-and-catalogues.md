---
title: Subjects and catalogues
---

# Subjects and catalogues

Libby: A catalogue IS the subject. Not a book ABOUT a subject — the subject's identity. The way an autobiography IS the agent, a catalogue IS the subject it defines. This is identity through self-reference: the catalogue catalogues itself, and that self-reference constitutes the subject's existence.

## The three types of books

Libby: Three dot prefixes distinguish three roles:

| Prefix | Role | Self-referential? | Example |
|--------|------|-------------------|---------|
| `..` | Library catalogue | Yes — catalogues itself and all top-level subjects | `..librarianship/` |
| `.` | Subject catalogue | Yes — catalogues itself and the books in its subject | `.protocols/`, `.the-canvas-paints-itself/` |
| (none) | Regular book | No — catalogued by a subject | `coding-policy/`, `arthur-or-the-shape-of-everything/` |

Libby: There is one `..` catalogue per library. It IS the library. There can be many `.` catalogues — one per subject. Regular books belong to subjects via the `subject:` field in their frontmatter.

## Self-cataloguing

Libby: Every catalogue appears in its own table of contents. This is not vanity — it's identity. The catalogue's entry in its own TOC says "this subject exists, and this is what it's about." Without self-cataloguing, the catalogue is an anonymous list. With it, the catalogue has a name, a description, and a place in its own map.

```markdown
## This catalogue

### [.protocols/](.) — How the team operates

Libby: You are reading it. This catalogue defines the protocols subject...
```

## The `subject:` field

Libby: Every regular book has a `subject:` field in its `.cover.md` frontmatter, pointing to its canonical subject catalogue:

```yaml
---
title: Coding Policy
author: "[Arthur](../.everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"
summary: >
  How we write code in $Chemistry...
subject: ".protocols"
---
```

Libby: A book can belong to multiple subjects, but it has ONE canonical subject — the one it points to via `subject:`. Non-canonical subjects link TO the book from their catalogue, but the book doesn't link back. Same pattern as authorship: one canonical author, many references.

Libby: The `subject:` field answers "where does this book live?" the way `author:` answers "who wrote this?"

## What a catalogue contains

Libby: A catalogue is MORE than a table of contents. It is a specification of its subject. It can contain:

1. **What the subject is** — the conceptual thread, in the catalogue's own voice
2. **The books** — each catalogued with a paragraph description and links into specific chapters
3. **Protocols and conventions** — rules specific to this subject (as chapters)
4. **Validation code** — resources that check the subject's conventions (as chapters with code)
5. **Itself** — the self-cataloguing entry

Libby: Think of the catalogue as the subject's `.cover.md` AND its specification AND its table of contents. It's dense. It's the place where someone learns everything about the subject without opening any of the books.

## How subjects grow

Libby: A subject emerges when a book grows too large or when multiple books need a shared context:

**Book → Subject:** A single book gets too long. Factor it into two books and a catalogue. The catalogue becomes the subject. The original book's content splits across the two new books. The catalogue describes how they relate.

**Multiple books → Subject:** Three or more books share a conceptual thread. Write a catalogue that describes the thread and catalogues the books. Each book adds `subject:` pointing to the new catalogue.

Libby: The tree grows by creating new catalogues, not by nesting directories. A subject catalogue can catalogue other subject catalogues — this is how the tree gets arbitrarily deep. `.protocols/` might eventually catalogue sub-subjects like `.voice/` and `.discussion/` if those areas grow enough books.

## The flat filesystem

Libby: All books and catalogues live at the same filesystem level within their scope. The agent library `.the-canvas-paints-itself/` contains Cathy's books as flat peers:

```
.the-canvas-paints-itself/          ← subject catalogue (Cathy's library)
  .cover.md                         ← self-cataloguing
  cathy-and-the-reactive-canvas/    ← autobiography (regular book)
  reactivity-models/                ← research book (regular book)
  view-introspection/               ← research book (regular book)
  perspective/                      ← perspective book (regular book)
```

Libby: The hierarchy — which books belong to which subject — lives in the links (`subject:` fields and catalogue TOC entries). Not in the filesystem. This is intentional: the tree can be arbitrarily deep without nesting directories, and a book can belong to multiple subjects (impossible in a nested filesystem, natural in a link-based system).

## Names carry identity

Libby: The name of a catalogue IS a synopsis. `.the-canvas-paints-itself` tells you about Cathy's library before you open anything. `.protocols` tells you the subject is operational conventions. The name is tier-zero reading cost — you see it in every link, every directory listing, every reference. Choose names that carry meaning.

## Catalogue maintenance

Libby: When a book changes significantly — new chapters, shifted focus, completed arc — updates cascade:

1. **The author** updates the book's `summary` field
2. **The subject catalogue** updates its description of the book (the librarian does this, or the agent for their personal library)
3. **The library catalogue** updates its description of the subject (if the change is significant enough)

Libby: Three tiers of update. The cost is paid once at write time. It's recovered many times at read time.

## The catalogue instinct

Libby: Signs a new subject is needed:

- **Repeated preamble** — "before reading this, see X and Y" means X, Y, and this book form a subject
- **Reading-order questions** — "what should I read first?" is answered by a catalogue
- **Orphan books** — books with no `subject:` field are either standalone or uncatalogued
- **A book with 10+ chapters** — the subject might be broader than one book can hold
- **Context restoration gaps** — if a waking team can't find what they need from the catalogues, a subject is missing or its descriptions are too thin

<!-- citations -->
[growth and refactoring]: 03-growth-and-refactoring.md
[reading cost]: 08-the-reading-cost-architecture.md
[anatomy]: 01-anatomy-of-a-book.md
