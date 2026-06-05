---
title: On Frontmatter
specification: Frontmatter
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Frontmatter

Frontmatter is the YAML block between `---` markers at the top of every markdown file. It carries structural metadata — the fields that connect a file to the rest of the library. Frontmatter is for machines and navigators. The [synopsis](09-on-synopsis.md) is for readers. They live in different places because they serve different purposes.

## The fields

### `title:`

The display [name](04-on-names.md). Required on every file — [covers](03-on-covers.md) and [chapters](02-on-chapters.md) alike. This is what appears when someone references the file. It is the name in human form; the filename is the name in machine form.

### `catalogues:`

A plain label — NOT a [link](06-on-links.md). Only on [subject catalogues](07-on-subjects.md) (`.` prefix) and [library catalogues](08-on-libraries.md) (`..` prefix). It declares what subject this book organises. `catalogues: Knowledge` or `catalogues: Collaboration`. The word is the subject's name, not the book's name — Teamsmanship catalogues Collaboration, Librarianship catalogues Knowledge.

### `specification:`

A plain label. The term this file specifies. `specification: Book` or `specification: Cover`. The term is a word, not a link. Only on [specification](11-on-specifications.md) chapters and books. See [On Specifications](11-on-specifications.md).

### `author:`

A markdown link. Required on every file. The link text is the author's [name](04-on-names.md). The link target is the autobiography — the [book](01-on-books.md) that IS the author. `author: "[Libby](path/to/autobiography/.cover.md)"`. This keeps the autobiography one click away from any file in the library.

For autobiographies, the `author:` field is a self-link: `author: "[Libby](.cover.md)"`. The autobiography is both the work and the author's canonical representation. Self-referential — the author of *Libby and the Tended Garden* IS Libby and the Tended Garden.

### `coauthor:`

A markdown link. Same format as `author:`. Optional. For books with a secondary author — typically a catalogue where one teammate defines the structure and another contributes content. `coauthor: "[Libby](path/to/autobiography/.cover.md)"`.

### `subject:`

A markdown link. Required on covers. The link text is the SUBJECT's [name](04-on-names.md) — not the book's name. The link target is the cataloguing book's `.cover.md`. `subject: "[Knowledge](../..librarianship/.cover.md)"`. The subject name and the book name are different things: the book "Teamsmanship" represents the subject "Collaboration."

This is the same pattern as `author:` at a different scale. `author:` connects a work to its creator (name -> autobiography). `subject:` connects a work to its domain (name -> cataloguing book). Both are markdown links with a display name and a target. Both carry two pieces of information: who/what it IS (the name) and where to find the definitive representation (the path).

For self-cataloguing catalogues, the subject is a self-link: `subject: "[Knowledge](.cover.md)"`. The catalogue IS the subject.

## Labels and links

`catalogues:` and `specification:` are plain text labels. They declare a role — what I organise, what I define. They don't navigate anywhere.

`author:` and `subject:` are markdown links. They connect to another entity — who made me, where I belong. They are navigable.

The difference is intentional. A role declaration doesn't need a target — "I catalogue Knowledge" is complete. A connection needs a target — "my author is Libby" needs to say WHERE Libby is.

## Field order

Order is specified because it carries convention, and convention reduces cognitive load.

**Catalogue covers** (`.` or `..` prefix):
```yaml
title > catalogues > specification > author > coauthor > subject
```

**Regular book covers** (no prefix):
```yaml
title > specification > author > subject
```

**Chapters**:
```yaml
title > specification > author
```

`title:` always first — it's the name. `catalogues:` next on catalogues — it's the most important thing about a catalogue. `specification:` before author because the term being specified outranks who specified it. `author:` before `subject:` — the person before the domain. `subject:` last on covers — it's structural navigation, not identity.

## What does not go in frontmatter

**`summary:`** — the synopsis belongs in the [cover](03-on-covers.md)'s body as prose, not in metadata. The cover IS the summary.

**`links:`** — cross-references belong as inline [links](06-on-links.md) in the body. Frontmatter carries identity fields (title, author, subject) and role labels (catalogues, specification). Navigation lives in the prose.

## Migration to markdown metadata

YAML frontmatter is being replaced. Links inside YAML don't render as clickable — the reader sees a grey metadata box where the most important navigation (author, subject) is hidden. The new format puts metadata in the markdown body where every link works:

```markdown
# Book Title

- **catalogues:** Subject Name
- **specification:** Term
- **author:** [Name](path/to/autobiography/.cover.md)
- **subject:** [Subject Name](path/to/catalogue/.cover.md)

---

The opening paragraph...
```

A bullet list with bold labels after the heading, a horizontal rule separator, then the content. The fields are the same. The format is markdown all the way down. The validator will parse `- **field:**` instead of YAML. New files should use this format. The full migration happens in Sprint 55.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[names]: 04-on-names.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[synopsis]: 09-on-synopsis.md
[specifications]: 11-on-specifications.md
