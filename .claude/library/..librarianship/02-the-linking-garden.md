---
title: The linking garden
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# The linking garden

Libby: Links are the paths through the garden. The library's hierarchy lives entirely in links — not in the filesystem. Every reference is a real markdown link: `[text](path)`, inline, clickable, woven where the reader needs it.

## Kinds of links

### Inline links

Libby: Standard markdown links woven into prose. These are the paths the reader walks. Use them when the reader's natural next question is "tell me more about X."

Libby: Every reference in the library is inline. Not "see file at path/to/thing" — that's a string. A real link: "the [voice convention](../protocols/01-voice-and-nametags.md) describes nametag rules." The link IS the reference. It's clickable where you're reading it.

Libby: **Guideline:** link on first mention in a section. Don't re-link the same target in the same paragraph. Don't over-link — if every word is blue, nothing stands out.

### Citations

Libby: Reference-style links in a `<!-- citations -->` block at the bottom of each file:

```markdown
<!-- citations -->
[anatomy]: 01-anatomy-of-a-book.md
[subjects]: 04-subjects-and-catalogues.md
[team]: ../..teamsmanship/.cover.md
```

Libby: Citations serve as the file's **local glossary** — reusable link targets for concepts mentioned multiple times. Use `[anatomy]` anywhere in the text. The URL is defined once at the bottom. Keeps prose clean, links maintainable.

Libby: **Convention:** if you mention something, cite it. If you cite it, make sure the target exists. Broken citations are weeds.

### Cross-references (frontmatter `links:`)

Libby: Book-level connections declared on the [cover](../anatomy-of-a-book/01-anatomy-of-a-book.md):

```yaml
links:
  - "[Coding Policy](../coding-policy/.cover.md)"
  - "[Reactivity Models](../..teamsmanship/..team/cathy/reactivity-models/.cover.md)"
```

Libby: These are structural — they tell the catalogue system "these books are related." All frontmatter links must be real markdown links with descriptive text, never bare paths.

### The `subject:` field

Libby: Every book's [frontmatter](../anatomy-of-a-book/01-anatomy-of-a-book.md) includes `subject:` — the canonical [subject catalogue](../subjects-and-catalogues/01-subjects-and-catalogues.md) this book belongs to. This is a structural link: it declares where the book lives in the library's hierarchy. A book can be linked by multiple subject catalogues, but it declares ONE canonical subject.

### The `author:` field

Libby: On covers AND chapters. A real markdown link where the text is the author's name and the target is the [autobiography](05-authorship-and-autobiography.md). The author link keeps the autobiography one link away from any chapter in any book.

## Links target sections

Libby: Links can point to specific sections within a file using heading anchors: `[chapter signing](../anatomy-of-a-book/01-anatomy-of-a-book.md#chapter-frontmatter)`. This enables the [shortcut system](../the-reading-cost-architecture/01-the-reading-cost-architecture.md) — a catalogue can link directly to the section of a book that answers the most common question, skipping the cover entirely.

## The direction convention

Libby: **Public → public**: freely in all directions.
**Personal → public**: freely — personal books reference shared knowledge.
**Public → personal**: through the [`..teamsmanship/` catalogue](../..teamsmanship/.cover.md) only — the team subject bridges the perspectives. The public library doesn't link directly into individual agents' spaces, but `..teamsmanship/` catalogues all personal libraries.
**Personal → personal**: through the public library or through the `..teamsmanship/` catalogue.

## Links are the hierarchy

Libby: The library's filesystem is [flat](11-the-flat-structure.md). Books and catalogues are peers. The tree — library → subjects → books, arbitrarily deep — exists ONLY in the links. Subject catalogues link to their books. Books point to their subjects via `subject:`. The tree is navigated by reading [covers](.cover.md) and following links. Never by browsing directories.

<!-- citations -->
[anatomy]: 01-anatomy-of-a-book.md
[subjects]: 04-subjects-and-catalogues.md
[authorship]: 05-authorship-and-autobiography.md
[reading cost]: 08-the-reading-cost-architecture.md
[flat]: 11-the-flat-structure.md
[team]: ../..teamsmanship/.cover.md
[cover]: .cover.md
