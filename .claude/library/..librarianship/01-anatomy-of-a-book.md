---
title: Anatomy of a book
author: "[Libby](../..teamsmanship/libby/libby-and-the-tended-garden/.cover.md)"
---

# Anatomy of a book

Libby: A book is a directory. Everything inside it is either the cover or a chapter. That's the whole model.

## The cover (`.cover.md`)

Libby: The dot-prefix sorts it to the top and signals "this is metadata, not content." The cover is the first thing you read when you open a book.

### Frontmatter

Libby: The order is: **title > author > subject**. Three fields. That's it.

```yaml
---
title: Coding Policy
author: "[Arthur](../..teamsmanship/arthur/arthur-or-the-shape-of-everything/.cover.md)"
subject: "[Teamsmanship](../..teamsmanship/.cover.md)"
---
```

Libby: **`title:`** — the book's name. Names are tier-zero synopsis — you read them in every link, every listing. Choose names that carry meaning about what the book IS. Don't encode current state.

Libby: **`author:`** — a markdown link. The link text is the **author's name**. The link target is the **autobiography**. `author: "[Libby](path/to/autobiography/.cover.md)"` reads as a byline: *by Libby*. For autobiographies, the author field is a self-link: `author: "[Libby](.cover.md)"`. The autobiography IS the author.

Libby: **`subject:`** — a markdown link, symmetric with `author:`. The link text is the **subject's name** — what you'd call this area of knowledge. The link target is the **cataloguing book**. `subject: "[Teamsmanship](path/to/..teamsmanship/.cover.md)"`. The subject name doesn't have to match the directory name — it's the human-readable name for this area of knowledge. For self-cataloguing catalogues, the subject is a self-link: `subject: "[Librarianship](.cover.md)"`. See [subjects and catalogues](04-subjects-and-catalogues.md).

Libby: The `author:` and `subject:` fields are the same pattern at two scales. `author:` connects a work to its creator (name → autobiography). `subject:` connects a work to its domain (name → cataloguing book). Both are markdown links. Both have a display name and a target. Both support self-reference (autobiography self-authors, catalogue self-catalogues).

Libby: **`author:`** — a markdown link. The link text is the **author's name** (not the book title). `author: "[Libby](path/to/autobiography/.cover.md)"` reads like a byline: *by Libby*. The link target is the autobiography — because the autobiography IS the author. For autobiographies, the author field is a self-link: `author: "[Libby](.cover.md)"`.

Libby: **No `summary:` in frontmatter.** The summary is PROSE — it belongs in the cover's body, as the opening paragraph. The cover IS the synopsis. Putting a summary in metadata duplicates what the prose already says and creates maintenance burden. Write the synopsis as the first thing the reader encounters in the body.

Libby: **`summary:`** — a paragraph, not a sentence. This is the most-read field in the library. It appears in catalogues and search results. A summary that says "How we write code" labels the topic without helping the reader decide. A summary that says "How we write code in $Chemistry — the $ prefix convention, the reactive patterns, and the three layers of code that keep concerns separated" helps the reader decide without opening the book.

Libby: **`links:`** — optional cross-references to related books. The link text is the book title.

### Body

Libby: An opening paragraph (what this book is, why it exists, who should read it), followed by the table of contents.

### Table of contents

Libby: An ordered list of chapters as markdown links with descriptions.

Libby: For **reference books** (coding policy, protocols, field guide), each TOC entry should be 2-3 sentences — rich enough to find what you need without opening the chapter.

Libby: For **chronological books** (autobiographies), one-line TOC entries are fine — navigation is by time, not topic.

Libby: Each TOC entry can contain **links into specific sections** of the chapter — shortcuts that let a reader skip straight to what they need.

## Chapters (`NN-slug.md`)

Libby: Chapters are numbered for reading order. The number is a sort key, not semantic.

### Chapter frontmatter

```yaml
---
title: Chapter title
author: "[Arthur](../../path/to/autobiography/.cover.md)"
---
```

Libby: Every chapter is **signed**. The `author:` field links to the author's autobiography. This keeps the autobiography referentially close — one link away from any chapter in any book. When you're reading a chapter and want to know who wrote it and what their perspective is, the link is right there.

Libby: The chapter doesn't repeat the book's subject or summary — those live on the cover.

### Chapter sub-numbering

Libby: When a chapter grows sections that want separate files: `01-1-subsection.md`, `01-2-subsection.md`. The TOC gains a second level. Too many sub-numbers suggest the chapter should become its own book.

## Names are tier-zero synopsis

Libby: The name of a book — the directory name — is the densest description in the library. You read it in every link, every listing, every reference. It carries meaning at zero reading cost.

Libby: Choose names that carry identity, not just labels. Not `cathys-library` but `.the-canvas-paints-itself`. Not `team-protocols` but `.protocols`. Names should be timeless — no encoded current state that will become stale.

## What doesn't go in a book

- **Code.** Books describe; code implements. Link to source files.
- **Transient loose files.** The library is closed under books. No sticky notes.
- **Duplicated content.** If two books need the same paragraph, link instead.

<!-- citations -->
[subjects]: 04-subjects-and-catalogues.md
[self-link]: 05-authorship-and-autobiography.md
[flat structure]: .09-the-flat-structure.md
