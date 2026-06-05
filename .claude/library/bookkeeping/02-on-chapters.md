---
title: On Chapters
specification: Chapter
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# On Chapters

A chapter is a markdown file inside a [book](01-on-books.md). It is the base unit of content — the thing a reader eventually reads when no [synopsis](09-on-synopsis.md) answered their question. Every chapter is numbered and signed.

## Numbering

Chapters are named `NN-slug.md` where `NN` is a two-digit number and `slug` is a kebab-case title. The number is a sort key for reading order, not semantic content. `01` comes before `02`. The reader encounters them in this order in the [table of contents](03-on-covers.md). Gaps are fine — renumbering everything when you insert a chapter between 03 and 04 is unnecessary churn.

When a chapter grows sections that want separate files: `01-1-subsection.md`, `01-2-subsection.md`. The cover's TOC gains a second level. Too many sub-numbers suggest the chapter should become its own [book](01-on-books.md). See [On Evolution](10-on-evolution.md).

## Signing

Every chapter has `author:` in its [frontmatter](05-on-frontmatter.md):

```yaml
---
title: The reactive model
author: "[Cathy](../../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)"
---
```

The `author:` [link](06-on-links.md) keeps the autobiography one click away from any chapter in any book. When you're reading a chapter and want to know who wrote it — their perspective, their expertise, their voice — the link is right there. This is the one-link-to-autobiography principle: no chapter is more than one click from the person who wrote it.

Co-authored chapters list the primary author in frontmatter. The text can acknowledge co-authors inline.

## Sections

Chapters use markdown headings (`##`, `###`) to create sections. Every heading generates a linkable anchor: `## The reactive model` becomes `#the-reactive-model`. Other chapters, covers, and catalogues can [link](06-on-links.md) directly to a section — this enables the [synopsis shortcut system](09-on-synopsis.md) where a catalogue points a reader straight to the section that answers their question.

Choose section headings that work as link text. A reader following `[the reactive model](01-the-reactive-model.md#the-reactive-model)` should know what they'll find. Headings are [names](04-on-names.md) at the section level — tier-zero synopsis for the content below them.

## Resources

A resource is a non-markdown file that sits beside the chapter it serves. The chapter and its resource share a conceptual name — the chapter documents what the resource does, and the resource provides executable evidence for what the chapter specifies.

The most common resource is a validator: a `.ts` file that checks the conventions the chapter describes. The chapter is documentation for the code. The code is specification made executable. They belong together because they say the same thing in different languages.

```
bookkeeping/
  .cover.md
  01-on-books.md
  bookkeeping.ts          ← resource: validates what the chapters specify
```

Other resources: images displayed by a chapter, scripts run by a chapter, data files referenced by a chapter. The rule is the same — the chapter motivates the resource, the resource evidences the chapter. A resource without a chapter is an orphan. A chapter about code without the code beside it forces the reader to search.

## What a chapter is not

A chapter is not a standalone document. It has no `subject:` field — the book's [cover](03-on-covers.md) declares the subject. It has no table of contents — that lives on the cover. It has no synopsis in its frontmatter — the cover's TOC entry IS the chapter's synopsis. The chapter is content. Everything about the chapter's context lives on the cover.

A chapter that outgrows its book does not become a bigger chapter. It becomes a [book](01-on-books.md). See [On Evolution](10-on-evolution.md).

<!-- citations -->
[books]: 01-on-books.md
[covers]: 03-on-covers.md
[names]: 04-on-names.md
[frontmatter]: 05-on-frontmatter.md
[links]: 06-on-links.md
[synopsis]: 09-on-synopsis.md
[growth]: 10-on-evolution.md
