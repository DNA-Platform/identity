---
title: Field guide audit — what's wrong and what to do about it
author: "[Libby](../libby-and-the-tended-garden/.cover.md)"
---

# Field guide audit

Representing the current state of the field guide against what Doug specified. Looking at each chapter. Reflecting on what needs to change.

## Chapter 00 — The library

Describes the two-layer model (objective/subjective) and the old `..teamsmanship/` structure. The two-layer concept is still correct but the structural description is wrong — references `..teamsmanship/` at the library root which doesn't exist anymore. **Needs significant rewrite** to describe the flat structure with `..teamsmanship/` as a subject catalogue containing agent folders.

## Chapter 01 — Anatomy of a book

I just rewrote this. Added `subject:` field, chapter signing (`author:` on chapters), `title > subject > author > summary` order, names as synopsis. **Recently updated — verify it matches Doug's spec.**

## Chapter 02 — The linking garden

Describes citations, inline links, cross-references. The linking mechanics are still correct. Missing: the role of `subject:` as a link type, and the one-to-many relationship where multiple catalogues link to one book. **Needs additions, not rewrite.**

## Chapter 03 — Growth and refactoring

Describes chapter→book and book→anthology factoring. Missing: book→subject factoring (the three-way split Doug described). The growth pattern now has a third form: when a book gets too long, factor into two books plus a subject catalogue. **Needs the subject factoring pattern added.**

## Chapter 04 — Subjects and catalogues

I just rewrote this too. Describes the flat structure, self-cataloguing, multi-subject membership, the `subject:` field, agent libraries. **Recently updated — verify it matches Doug's spec.**

## Chapter 05 — Authorship and autobiography

Describes author links, the self-link, naming conventions. Still correct but needs: chapter-level authorship (signing chapters), and the relationship between the autobiography and the agent's subject catalogue. **Needs additions about chapter signing and the two-book minimum.**

## Chapter 06 — Academic papers as books

Specific to the dna-library project's neuroscience work. Still correct as a convention but references a book that lives in dna-library. **Low priority. Keep as-is.**

## Chapter 07 — Voice and nametags

A pointer to the protocols book. Correct. **No change needed.**

## Chapter 08 — The reading cost architecture

Describes four layers of synopsis. The concept is correct but the examples reference the old structure. The four layers are: library catalogue → subject catalogue → book cover → chapter. Each should make the next rarely necessary. **Needs example updates, not conceptual rewrite.**

## Chapter .09 — The flat structure

New chapter I wrote this session. Describes walking links not folders. **Verify it matches the corrected understanding of flat = books beside subjects, not inside them.**

## Chapter .10 — The perspective practice

New chapter. Represent → look → reflect → change. **Probably correct. Verify.**

## Chapter .11 — Tasks and unfinished work

New chapter. `[SCAFFOLD]` markers, `<!-- TODO -->`, cleanup. **Probably correct. Verify.**

## What's missing entirely

The field guide doesn't have:
- A chapter on the `.claude/` platform interface — what Claude Code specifies, what we add, how they bridge
- A chapter on agent files — how the `.claude/agents/*.md` files should link into the library
- A chapter on the `settings.json` — what permissions the library needs

## My reflection

The field guide needs THREE kinds of work:

1. **Chapters 01 and 04** — just rewritten. Need verification against Doug's full spec, especially the one-to-many subject relationship and the flat structure.

2. **Chapters 00, 02, 03, 05, 08** — structurally sound but need updates. The concepts are right; the details reference the old structure or miss new conventions (chapter signing, subject factoring).

3. **New chapters needed** — platform interface, agent file spec, settings spec.

The RIGHT sequence is: verify 01 and 04 (they're the foundation), then update 00, 03, 05 (they depend on the foundation), then update 02 and 08 (examples and links), then write the new chapters.

And I need to discuss with the team before more changes. Doug said "changing the way the library works is a serious endeavor." I should bring the corrected chapters to the team for critique before proceeding.

<!-- citations -->
[field guide]: ../../../../..librarianship/.cover.md
