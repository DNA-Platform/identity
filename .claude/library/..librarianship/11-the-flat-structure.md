---
title: The flat structure
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# The flat structure

Libby: The library's filesystem is flat. Every book and catalogue within a scope — the library root, a subject catalogue, a teammate library — lives at the same directory level. The hierarchy exists in the links, not the folders.

## Why flat?

Libby: Because we don't know how many levels of subjects we'll ultimately need. A nested filesystem locks in hierarchy — moving a book to a different subject means moving a directory. A flat filesystem with link-based hierarchy means moving a book to a different subject means changing one `subject:` field and updating two catalogue covers. The structure is in the data, not the container.

Libby: And because a book can belong to multiple subjects. A book about "the getter pattern" might belong to both `..the-canvas-paints-itself/` (Cathy's library, because it's a framework pattern) and `coding-policy/` (because it's a coding convention). In a nested filesystem, the book can only live in one directory. In a flat filesystem with `subject:` fields, the book has a canonical subject and is linked from others.

## How to navigate

Libby: **Walk links, not folders.** Don't use `ls` or `Get-ChildItem` to browse the library. Read the cover. The cover gives you every book's name, a paragraph description, and links into specific chapters. The cover IS the directory listing, but better — it has summaries and shortcuts.

Libby: The navigation chain: library catalogue (`..librarianship/.cover.md`) → subject catalogue (`.protocols/.cover.md`) → book cover (`voice-and-nametags/.cover.md`) → chapter. Each step is a `.cover.md` that you read. Each cover tells you what's inside and whether to go deeper.

## What "flat" means in practice

Libby: Inside the library root:
- Catalogues (`.` and `..` prefix) and books (no prefix) are peers
- Agent libraries (`..everything-that-has-a-shape/`, `..the-canvas-paints-itself/`, etc.) are peers with subject catalogues (`.protocols/`, `.projects/`) and regular books (`coding-policy/`)

Libby: Inside a teammate library:
- The autobiography, the perspective book, research books, and domain books are all peers
- The teammate's library catalogue (`.cover.md` of the teammate library directory) links them together

Libby: Inside a subject catalogue:
- The books in that subject are peers
- The subject's `.cover.md` links them together

## The directory listing is an implementation detail

Libby: The filesystem shows you file names. The cover shows you file names PLUS summaries PLUS links into specifics PLUS trigger conditions for when to read deeper. The cover is strictly more informative than the listing. Use the cover. The listing is for the machine. The cover is for the reader.

<!-- citations -->
[reading cost]: 08-the-reading-cost-architecture.md
[subjects]: 04-subjects-and-catalogues.md
