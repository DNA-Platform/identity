---
title: Anatomy of a book
---

# Anatomy of a book

A book is a directory. Everything inside it is either the cover or a chapter. That's the whole model.

## The cover (`.cover.md`)

The dot-prefix serves two purposes: it sorts to the top in every file listing, and it signals "this is metadata, not content." The cover is the first thing you read when you open a book. It carries:

**Frontmatter** — YAML metadata that machines *and humans* read:

```yaml
---
title: Human-readable book title
author: "[Author Name](relative/path/to/autobiography/.cover.md)"
summary: >
  A paragraph (3-5 sentences, ~50 words) that answers "what is this book
  and why would I read it?" Rich enough that a reader encountering this book
  in a catalogue can decide whether to open it without reading anything else.
  Not a topic label — a description.
subject: subject-slug              # which catalogue this belongs to
links:                             # books this one relates to
  - "[Related Book Title](relative/path/to/other-book/)"
  - "[Another Book Title](relative/path/to/another/)"
---
```

**The `summary` field is a paragraph, not a sentence.** This is the most-read field in the library — it appears in catalogues, indexes, and search results. It answers three questions: what is this book about, why does it exist, and who should read it. A summary that says "How we write code" fails — it labels the topic without helping the reader decide. A summary that says "How we write code in $Chemistry — the $ prefix convention, the reactive patterns that make views pure, and the three layers of code (framework, Lab, public face) that keep concerns separated" helps the reader decide without opening the book.

**The `subject` field points to the book's canonical subject catalogue.** Every regular book belongs to a subject. The `subject:` value is the catalogue's directory name (e.g., `".protocols"`, `".the-canvas-paints-itself"`). A book can be referenced by multiple subject catalogues, but it has ONE canonical subject — the one it points to. See [subjects and catalogues](04-subjects-and-catalogues.md).

**All frontmatter links must be markdown links.** Never bare paths. The link title carries meaning — and the *right* meaning depends on context.

**The `author` link text is the author's name** — not the book title. `author: "[Libby](../.the-garden-tends-itself/libby-and-the-tended-garden/.cover.md)"` reads like a byline: *by Libby*. The link target is the autobiography.

**The `links` entries use book titles** — because in that context you're listing related books, and the title identifies the book.

For canonical autobiographies, the author field is a **self-link**: `author: "[Libby](.cover.md)"`. See the [self-link chapter](05-authorship-and-autobiography.md) for why this matters.

**Body** — what humans read: an opening paragraph (what this book is, why it exists, who should read it), followed by the table of contents.

**Table of contents** — an ordered list of chapters as markdown links with descriptions.

For **reference books** (coding policy, protocols, field guide), each TOC entry should be 2-3 sentences — rich enough that a reader can find what they need from the TOC alone, without opening any chapter:

```markdown
## Chapters

1. [The $ convention](01-the-dollar-convention.md) — The `$` prefix separates intrinsic identity from extrinsic context. `$Chemical` is the framework concept, `$()` creates the React wrapper. camelCase always, no ALL_CAPS. Framework-internal symbols use `$` prefix and suffix.
2. [Reactive patterns](02-reactive-patterns.md) — Scope-tracked reactivity through getters/setters: write `this.count = 5` and the view updates. Views are object-pure — same state in, same output out. Chemicals compose safely because views can't corrupt each other's state.
```

For **chronological books** (autobiographies, sprint histories), one-line TOC entries are fine — the reader navigates by time, not topic:

```markdown
1. [The reactive model](01-the-reactive-model.md) — choosing scope-tracked reactivity, why getters and setters won
2. [View purity](02-view-purity.md) — the discovery that views are object-pure
```

The principle: **each tier of description should make the next tier rarely necessary.** The summary should answer 80% of "what is this book?" questions. The TOC entries should answer 80% of "which chapter do I need?" questions. If you're opening the actual chapter, it's because you need depth that no summary could provide.

## Chapters (`NN-slug.md`)

Chapters are numbered for reading order. The number is not semantic — it's a sort key. If you insert a chapter between 03 and 04, renumber; don't use 03a.

Each chapter has minimal frontmatter:

```yaml
---
title: Chapter title
---
```

The rest lives on the cover. A chapter doesn't repeat the book's author, summary, or subject — that's the cover's job.

## Names are tier-zero synopsis

Libby: The name of a book — the directory name — is the densest description in the library. You read it in every link, every TOC entry, every reference. It carries meaning at zero reading cost.

Libby: `.the-canvas-paints-itself` tells you about Cathy's library before you open anything. `coding-policy` tells you the book's topic. `arthur-or-the-shape-of-everything` tells you the autobiography's thesis. The name IS a synopsis — the one that requires no click, no read, no context.

Libby: Choose names that carry identity, not just labels. Not `.cathys-library` but `.the-canvas-paints-itself`. Not `team-protocols` but `.protocols`. The name should tell the reader what they'll FIND, not just what the container IS.

## What doesn't go in a book

- **Code.** Books describe; code implements. Link to source files, don't embed them (short illustrative snippets are fine).
- **Transient loose files.** The library is closed under books. If information doesn't fit in a book, it needs a book created for it — not a loose file dropped in a directory. A sticky note on the front desk is a broken abstraction.
- **Duplicated content.** If two books need the same paragraph, one of them should link to the other instead.

<!-- citations -->
[self-link]: 05-authorship-and-autobiography.md
[subjects]: 04-subjects-and-catalogues.md
[flat structure]: .09-the-flat-structure.md
