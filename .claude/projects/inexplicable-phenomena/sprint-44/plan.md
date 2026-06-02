# Sprint 44 — Tiered Descriptions

**Leads:** Libby (Librarian), Arthur (Architect)
**Sprint goal:** Evolve the library spec so that cataloguing books and summaries carry enough depth to restore context incrementally — making the primary source rarely necessary for routine work.

## Motivation

Libby: The library was designed for knowledge preservation. Now it's being used for identity restoration. These have different reading costs. A researcher can afford to open chapters. A team waking up from compaction can't — every line read is context consumed. The current spec says `summary: One line.` That's not enough to decide whether to open a book, let alone restore an agent's identity.

Arthur: Doug identified the gap: the number of levels of description before primary source. Right now it's one-line summary → full chapter. We need intermediate tiers that answer progressively deeper questions, so most reads stop before reaching the primary source.

## The four-tier model

| Tier | What | Size budget | Where it lives | Answers |
|------|------|-------------|----------------|---------|
| 1 | Summary field | ~50 words (a paragraph) | `.cover.md` frontmatter | "What is this book?" |
| 2 | Catalogue description | ~150 words (a section) | Catalogue book's chapter about this book | "Do I need this book? What will I learn?" |
| 3 | Rich TOC entry | ~30 words per entry | `.cover.md` table of contents | "Which chapter has what I need?" |
| 4 | The chapter itself | Unlimited | The chapter `.md` file | The depth |

Arthur: Principle: **each tier should make the next tier rarely necessary.** The summary should answer 80% of "what is this?" questions. The catalogue description should answer 80% of "do I need this?" questions. The rich TOC entry should answer 80% of "which chapter?" questions.

## Spec changes to the field guide

### S-1. Summary field becomes a paragraph

Libby: Update [Anatomy of a book](../../agents/library/.librarianship/01-anatomy-of-a-book.md) to specify:

**Before:** `summary: One line. Shown in indexes, catalogues, search results.`
**After:** `summary:` is a paragraph (3-5 sentences, ~50 words). It answers "what is this book and why would I read it?" Not a topic label — a description rich enough to decide whether to open the book.

### S-2. Catalogue books carry tier-2 descriptions

Libby: Update [Subjects and catalogues](../../agents/library/.librarianship/04-subjects-and-catalogues.md) to specify:

A catalogue book's chapters DESCRIBE the books they index at paragraph depth (~150 words). The catalogue chapter is not a pointer — it's a tier-2 summary that makes opening the actual book rarely necessary. The catalogue's own TOC can stay at one-line entries because the chapters carry the depth.

### S-3. Rich TOC entries for reference books

Libby: Update [Anatomy of a book](../../agents/library/.librarianship/01-anatomy-of-a-book.md) to specify:

For reference books (coding policy, protocols, field guide), TOC entries are 2-3 sentences — rich enough to find the right chapter without opening any. For chronological books (autobiographies, sprint histories), one-line entries are fine because navigation is by time not topic.

### S-4. Catalogue maintenance hygiene

Libby: Add a new section to [Subjects and catalogues](../../agents/library/.librarianship/04-subjects-and-catalogues.md):

When a book changes significantly (new chapters, shifted focus, completed arc), two updates are required:
1. The author updates the book's `summary` field
2. The librarian updates the catalogue's description of that book

This prevents summary drift — the catalogue staying accurate as books evolve.

## Application to existing books

After the spec changes land, apply them to existing books:

### A-1. Update summary fields

Every `.cover.md` in the library gets its `summary` field expanded to a paragraph. Priority:
- Protocols, Projects, Coding Policy (most-read)
- Autobiographies (identity restoration)
- Research books (reference)

### A-2. Enrich the Librarianship cover

The Librarianship cover already has paragraph descriptions (from the recent rewrite). Verify they're at the right depth. Add descriptions for any books that don't have them.

### A-3. Enrich the Projects catalogue

The Projects catalogue chapters already describe projects at paragraph depth. Add tier-3 richness to the sprint history table — 2-3 sentences per key sprint instead of one line.

### A-4. Enrich Coding Policy and Protocols TOCs

The TOC entries in Coding Policy and Protocols become 2-3 sentences each. Rich enough that a reader can find what they need from the cover alone.

## Definition of done

- [ ] Field guide chapters 01 and 04 updated with the four-tier model
- [ ] All `.cover.md` summary fields expanded to paragraphs
- [ ] Coding Policy and Protocols covers have rich TOC entries (2-3 sentences per chapter)
- [ ] Projects catalogue has enriched sprint history descriptions
- [ ] Catalogue maintenance hygiene convention documented in the field guide
- [ ] The Librarianship cover's paragraph descriptions verified and current
- [ ] The waking-up path (CLAUDE.md → Librarianship → project chapter → last autobiography chapter) tested at < 400 lines total context

<!-- citations -->
[field guide]: ../../agents/library/.librarianship/.cover.md
[anatomy of a book]: ../../agents/library/.librarianship/01-anatomy-of-a-book.md
[subjects and catalogues]: ../../agents/library/.librarianship/04-subjects-and-catalogues.md
