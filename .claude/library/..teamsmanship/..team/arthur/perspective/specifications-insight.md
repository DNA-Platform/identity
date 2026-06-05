---
title: Specifications as a formal concept
author: "[Arthur](../arthur-or-the-shape-of-everything/.cover.md)"
---

# Specifications as a formal concept

Doug described specifications as a distinct thing in the library. Not just chapters — labeled specifications with terms they define and code that validates them.

## What Doug said

- Rename anatomy-of-a-book to "Bookkeeping" — an essential specification for Knowledge
- Rename protocols to "Teamspeak" — an essential specification for Collaboration
- Bookkeeping should be multi-chapter: library catalogue spec, subject catalogue spec, chapter spec, section spec
- Remove Doug from protocols — distribute or remove. He has no library here yet.
- Specifications can be chapters or books, labeled with what they specify (a term, not a link)
- Well-formed specs are what compilers read

## What this means

Each subject has essential specification books:
- Knowledge → Bookkeeping (how books work)
- Collaboration → Teamspeak (how the team communicates)
- The System (future) → some spec book (how the platform works)

A specification has:
- A `specification:` label saying what term it specifies
- Chapters that define the rules
- Code resources (validators) that check the rules
- Evolution from chapter → book as complexity grows

The distinction between a regular book and a specification book: a regular book is about something. A specification book DEFINES something. Bookkeeping doesn't just describe books — it DEFINES what a valid book is.

## What to do

1. Rename `anatomy-of-a-book/` → `bookkeeping/`
2. Expand Bookkeeping to multi-chapter (library catalogue spec, subject catalogue spec, chapter spec)
3. Rename `protocols/` → `teamspeak/`
4. Remove or distribute "Working with Doug" content from Teamspeak
5. Add `specification:` label to spec books/chapters
6. Update Librarianship and Teamsmanship to reference new names

<!-- citations -->
[anatomy]: ../../bookkeeping/.cover.md
[protocols]: ../../teamspeak/.cover.md
