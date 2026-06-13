# On Chapters

- **specification:** Chapter
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A chapter is a markdown file inside a [book](01-on-books.md). It is the base unit of content — the thing a reader eventually reads when no [synopsis](09-on-synopsis.md) answered their question. Every chapter is numbered and signed.

## Numbering

Chapters are named `NN-slug.md` where `NN` is a two-digit number and `slug` is a kebab-case title. The number is a sort key for reading order, not semantic content. `01` comes before `02`. The reader encounters them in this order in the [table of contents](03-on-covers.md). Gaps are fine — renumbering everything when you insert a chapter between 03 and 04 is unnecessary churn.

When a chapter grows sections that want separate files: `01-1-subsection.md`, `01-2-subsection.md`. The cover's TOC gains a second level. Too many sub-numbers suggest the chapter should become its own [book](01-on-books.md). See [On Evolution](10-on-evolution.md).

## Signing

Every chapter has `author:` in its [frontmatter](03-on-covers.md):

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

A resource is a non-markdown file that sits beside the chapter it serves — the same book, the next page. The chapter documents what the resource does. The resource is the code. They are one thing in two languages.

The naming convention ties them together:

```
bookkeeping/
  .cover.md
  11-on-specifications.md                    ← the chapter
  11-on-specifications--validator.ts         ← the resource
```

The resource shares its chapter's number and name. The `--` separates the chapter name from the resource name. When you open the book directory, the chapter and its resource sort together — you see the documentation and the code side by side.

A resource can be a validator (checks what the chapter specifies), a compiler (assembles what the chapter defines), a migration tool (performs what the chapter describes), an image (illustrates what the chapter explains), or any other non-markdown file. The rule is the same: the chapter motivates the resource, the resource evidences the chapter.

Next and previous links skip resources — they go chapter to chapter. The chapter references its resource near the title, typically as an inline link: "The [validator](11-on-specifications--validator.ts) checks what this chapter specifies."

A resource without a chapter is an orphan. Code that lives in a directory with no markdown chapter explaining it forces the reader to search. A chapter about code without the code beside it forces the reader to leave the book. Both break the promise that the book holds its own tools.

## What a chapter is not

A chapter is not a standalone document. It has no `subject:` field — the book's [cover](03-on-covers.md) declares the subject. It has no table of contents — that lives on the cover. It has no synopsis in its frontmatter — the cover's TOC entry IS the chapter's synopsis. The chapter is content. Everything about the chapter's context lives on the cover.

A chapter that outgrows its book does not become a bigger chapter. It becomes a [book](01-on-books.md). See [On Evolution](10-on-evolution.md).

<!-- citations -->
[books]: 01-on-books.md
[covers]: 03-on-covers.md
[names]: 04-on-names.md
[frontmatter]: 03-on-covers.md
[links]: 06-on-links.md
[synopsis]: 09-on-synopsis.md
[growth]: 10-on-evolution.md
