---
title: On Subjects
specification: Subject
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Subjects

A subject catalogue is a [book](01-on-books.md) that catalogues other books. It is one level of specialization above a regular book — marked by the `.` prefix on its directory name. In the [type system](.cover.md#the-dot-type-system), a subject IS a book with added responsibilities: it self-catalogues, it describes the books in its domain, and it carries the `catalogues:` [label](05-on-frontmatter.md).

## Self-cataloguing

Every subject catalogue appears in its own table of contents. The catalogue's entry for itself says "this subject exists, and this is what it's about." The self-reference constitutes the subject's identity. A subject that doesn't catalogue itself doesn't know what it is.

```markdown
### [Librarianship](.cover.md) — Knowledge

You are reading it. Self-cataloguing. The library knowing itself.
```

## The `catalogues:` label

A plain text [label](05-on-frontmatter.md#catalogues) — not a link. Placed right below `title:` in frontmatter because it's the most important thing about a catalogue: what it organises. `catalogues: Knowledge` on Librarianship. `catalogues: Collaboration` on Teamsmanship.

The `catalogues:` label names the SUBJECT. The `title:` names the BOOK. These are different: the book "Teamsmanship" catalogues the subject "Collaboration." The book "Librarianship" catalogues the subject "Knowledge." The subject name is what you'd call this area of knowledge in conversation. The book name is the practice of knowing about it.

## Flat peers

A subject catalogue does NOT contain the books it catalogues. The books sit beside it as peers at the same directory level. The catalogue [links](06-on-links.md) to them from its [cover](03-on-covers.md). Each book declares its canonical subject in its [frontmatter](05-on-frontmatter.md) via the `subject:` field.

```
library/
  ..librarianship/         <- subject catalogue
  bookkeeping/             <- book (subject: Knowledge) -- PEER, not child
  subjects-and-catalogues/ <- book (subject: Knowledge) -- PEER, not child
```

This flatness makes [multi-subject membership](#multi-subject-membership) possible. A book that lives inside a directory can only have one parent. A book that sits beside directories can be linked by any number of them. The hierarchy lives in the links, not the filesystem. See [On Links](06-on-links.md).

## Subject-shaped descriptions

When a catalogue describes a book in its TOC, the description is shaped by the SUBJECT's perspective. The same book, catalogued by two different subjects, gets two different descriptions. Newton's *Principia* described by the physics catalogue talks about the calculus of motion. The same *Principia* described by the philosophy catalogue talks about the mechanical worldview. Same book. Different subject-shaped descriptions.

This is the catalogue's essential work: not just listing books but interpreting them through the lens of the subject. A flat list of book titles is a directory listing. A list of book titles with subject-shaped descriptions is a catalogue.

## Multi-subject membership

A book has ONE canonical subject — declared in its `subject:` [field](05-on-frontmatter.md#subject). Other subjects link to it from their TOCs with their own descriptions. The book doesn't link back to non-canonical subjects. The non-canonical subjects find the book; the book only knows its canonical home.

This is impossible in a folder hierarchy. In a link hierarchy, it's natural. The flat filesystem enables it. The `subject:` field anchors it. The cross-links surface it.

## The `subject:` field symmetry

`subject:` on a book is the same pattern as `author:` on a chapter. Both are markdown links. Both carry a display name and a target. `author: "[Libby](path/to/autobiography/.cover.md)"` — name is the person, target is the autobiography. `subject: "[Knowledge](../..librarianship/.cover.md)"` — name is the subject, target is the cataloguing book.

Person and autobiography are different things. Subject and cataloguing book are different things. The link carries both: the name identifies, the path locates. See [On Frontmatter](05-on-frontmatter.md).

## Personal libraries

Each teammate has a personal library inside [Teamsmanship](../..teamsmanship/.cover.md). Inside that folder, the same flat pattern applies: the teammate's subject catalogue (`..everything-that-has-a-shape/`), their autobiography (`arthur-or-the-shape-of-everything/`), and their other books are all flat peers. The subject catalogue links to the books. Each book has `subject:` pointing back.

The `..` prefix on personal library catalogues (like `..everything-that-has-a-shape/`) reflects that these ARE library catalogues within the teammate's scope — they catalogue everything in the personal library. This is the public library exception: a library catalogue inside another catalogue. See [On Libraries](08-on-libraries.md).

<!-- citations -->
[books]: 01-on-books.md
[covers]: 03-on-covers.md
[frontmatter]: 05-on-frontmatter.md
[links]: 06-on-links.md
[libraries]: 08-on-libraries.md
[growth]: 10-on-evolution.md
[type system]: .cover.md#the-dot-type-system
[team]: ../..teamsmanship/.cover.md
