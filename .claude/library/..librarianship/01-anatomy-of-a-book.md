---
title: Anatomy of a book
author: "[Libby](../..teamsmanship/libby/libby-and-the-tended-garden/.cover.md)"
---

# Anatomy of a book

Libby: A book is a directory. Everything inside it is either the cover or a chapter. That's the whole model.

## The cover (`.cover.md`)

Libby: The dot-prefix sorts it to the top and signals "this is metadata, not content." The cover is the first thing you read when you open a book.

### Frontmatter

Libby: For regular books: **title > author > subject**.

```yaml
---
title: Coding Policy
author: "[Arthur](../..teamsmanship/arthur/arthur-or-the-shape-of-everything/.cover.md)"
subject: "[Collaboration](../..teamsmanship/.cover.md)"
---
```

Libby: For subject catalogues, add **catalogues:** — declaring what subject this book organises:

```yaml
---
title: Teamsmanship
author: "[Libby](libby/libby-and-the-tended-garden/.cover.md)"
subject: "[Collaboration](.cover.md)"
catalogues: "[Collaboration](.cover.md)"
---
```

Libby: **`title:`** — the book's name. Names are tier-zero synopsis — you read them in every link, every listing. Choose names that carry meaning about what the book IS. Don't encode current state.

Libby: **`author:`** — a markdown link. The link text is the author's NAME. The link target is the AUTOBIOGRAPHY. In the example above, Arthur's name displays as the byline and the link goes to his autobiography. For autobiographies, the author field is a self-link: the autobiography IS the author. See [authorship and autobiography](05-authorship-and-autobiography.md).

Libby: **`subject:`** — a markdown link, symmetric with author. The link text is the SUBJECT's name — what you'd call this area of knowledge. The link target is the CATALOGUING BOOK that specifies and catalogues this subject. The subject name and the book name are different: the book "Teamsmanship" represents the subject "The Team." For self-cataloguing catalogues, the subject is a self-link. See [subjects and catalogues](04-subjects-and-catalogues.md).

Libby: **`catalogues:`** — only on subject catalogues. A markdown link declaring what subject this book organises. For self-cataloguing catalogues, `catalogues:` and `subject:` are the same self-link. The `catalogues:` field makes the book's role explicit: "I am not just IN this subject, I DEFINE it."

Libby: The `author:`, `subject:`, and `catalogues:` fields are the same pattern at three scales. `author:` connects a work to its creator (name → autobiography). `subject:` connects a work to its domain (name → cataloguing book). `catalogues:` connects a catalogue to the subject it organises (name → self). All are markdown links. All have a display name and a target.

Libby: **No `summary:` in frontmatter.** The synopsis belongs in the cover's BODY — the opening paragraph that the reader encounters first. The cover IS the synopsis. Frontmatter is structural metadata (title, author, subject). The synopsis is prose.

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
[flat structure]: 11-the-flat-structure.md
