# On Covers

- **specification:** Cover
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A cover is the face of a [book](01-on-books.md). Pick up any book and look at the front — the title, the author, and what it's about. That is the cover. In this library, the cover is `.cover.md`: the title as a heading, then the fields that identify the book, then a horizontal rule, then the opening paragraph and the table of contents. Everything a reader needs to decide whether to open the book is on the cover.

## The cover identifies the book

The lines immediately after the heading ARE the cover — the book specifying itself. They are markdown, not YAML. Every link is clickable. Every field is readable where it sits.

```markdown
# Bookkeeping

- **catalogues:** Book
- **specification:** Book
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **subject:** [Knowledge](../..librarianship/.cover.md)

---

The specification of how books work...
```

A bullet list with bold labels. A horizontal rule separator. Then the content. The fields identify the book the way a physical cover identifies a physical book: the title says what it's called, the author says who wrote it, the subject says where it belongs.

## The fields

**The title** is the `#` heading. The [name](04-on-names.md) in display form. Required on every file — covers and [chapters](02-on-chapters.md) alike.

**`catalogues:`** is a plain label — not a [link](06-on-links.md). Only on [subject catalogues](07-on-subjects.md) (`.` prefix) and [library catalogues](08-on-libraries.md) (`..` prefix). It declares what subject this book organises. The word is the subject's name, not the book's name — Teamsmanship catalogues Collaboration, Librarianship catalogues Knowledge.

**`specification:`** is a plain label. The term this file specifies. Only on [specification](11-on-specifications.md) chapters and books.

**`author:`** is a markdown link. Required on every file. The link text is the author's name. The link target is the autobiography — the book that IS the author. For autobiographies, the author is a self-link: `[Libby](.cover.md)` — the autobiography defines its own author. For all other files, the link goes to the autobiography. This keeps identity one click away from any page in the library.

**`coauthor:`** is a markdown link. Same format as author. Optional. For books with a secondary author, or chapters where someone else made substantial edits. See [On Authorship](13-on-authorship.md).

**`subject:`** is a markdown link. Required on covers. The link text is the subject's name — not the book's name. The link target is the cataloguing book's cover. The subject name and the book name are different: the book "Teamsmanship" represents the subject "Collaboration." For self-cataloguing catalogues, the subject is a self-link: `[Knowledge](.cover.md)`.

The author and subject fields follow the same pattern at different scales. Author connects a work to its creator (name to autobiography). Subject connects a work to its domain (name to cataloguing book). Both carry a display name and a navigable path.

## Labels and links

`catalogues:` and `specification:` are plain text. They declare a role — what I organise, what I define. They don't navigate anywhere.

`author:` and `subject:` are markdown links. They connect to another entity — who made me, where I belong. They are navigable.

A role declaration is complete on its own: "I catalogue Knowledge." A connection needs a target: "my author is Libby" — the link says where Libby is.

## Field order

The order on the cover carries convention:

- **Catalogue covers:** title (heading), then catalogues, specification, author, coauthor, subject
- **Regular book covers:** title (heading), then specification, author, subject
- **Chapters:** title (heading), then specification, author

Title first — it's the name. Catalogues next on catalogues — it's the most important thing about a catalogue. Author before subject — the person before the domain. Subject last — structural navigation, not identity.

## The opening paragraph

Below the horizontal rule, the first paragraph IS the book's [synopsis](09-on-synopsis.md). This paragraph answers: what is this book, why does it exist, who should read it. It is the densest prose in the book. The cover IS the summary — no separate summary field.

## The table of contents

An ordered list of [chapters](02-on-chapters.md) as [links](06-on-links.md) with descriptions. The TOC is the book's second layer of synopsis — richer than the opening paragraph but still a fraction of the full content.

For reference books, each TOC entry is 2-3 sentences with [links into specific sections](06-on-links.md#section-targets). For chronological books (autobiographies, sprint histories), one-line entries suffice. A chapter without a TOC entry is invisible. A TOC entry without a chapter is a `[SCAFFOLD]` marker.

## Catalogue covers

When the book is a [subject catalogue](07-on-subjects.md) or [library catalogue](08-on-libraries.md), the cover's TOC describes other books from the subject's perspective — the same book appears differently in different catalogues because each subject sees it through its own lens. A catalogue cover also [self-catalogues](07-on-subjects.md#self-cataloguing): it includes itself in its own TOC.

## The cover in the reading cost architecture

The cover is layer 3 in the [synopsis architecture](09-on-synopsis.md) — the last layer before primary source. A well-written cover means most readers never open a chapter. The chapter exists for the reader who needs depth no synopsis can replace.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[names]: 04-on-names.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[synopsis]: 09-on-synopsis.md
[authorship]: 13-on-authorship.md
[specifications]: 11-on-specifications.md
[type system]: .cover.md#the-dot-type-system
