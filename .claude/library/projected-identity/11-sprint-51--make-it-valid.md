# Sprint 51: Make It Valid

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Bookkeeping is written. Eleven specification chapters define what the library should be. This sprint makes what's HERE agree with what's SPECIFIED. No new territory — alignment, validation, and slimming.

## The validator says

0 errors. 33 warnings across both validators. Broken down:

- **~15 stale `summary:` in frontmatter** — predates the "no summary in metadata" rule from [On Covers](../bookkeeping/03-on-covers.md). Mechanical fix: remove the field, ensure cover body has synopsis as prose.
- **~12 frontmatter order violations** — `subject` appearing before `author`. Spec says author before subject. Mechanical fix.
- **3 chapters missing frontmatter** — need signing with `title:` and `author:`.

## Tasks

### 1. Fix the 33 warnings

Walk every book the validator flags. For each:
- Remove `summary:` from frontmatter. Verify the cover body already has the synopsis as prose (it usually does).
- Swap `author:` and `subject:` into correct order.
- Add frontmatter to unsigned chapters.

Run bookkeeping.ts after each batch. Target: 0 warnings.

**Owner:** Libby
**Scope:** All 44 books in the library

### 2. Slim the field guide

Four Librarianship field guide chapters now overlap with [Bookkeeping](../bookkeeping/.cover.md) specification chapters. Each becomes a synopsis paragraph with a link to the authority:

| Field guide chapter | Bookkeeping authority | Action |
|---|---|---|
| 02 — The linking garden | [On Links](../bookkeeping/06-on-links.md) | Synopsis + link. Keep direction convention specifics |
| 03 — Growth and refactoring | [On Growth](../bookkeeping/10-on-evolution.md) | Synopsis + link. Keep book→subject procedure |
| 05 — Authorship and autobiography | [On Covers](../bookkeeping/03-on-covers.md) | Synopsis + link. Keep two-book minimum, autobiography naming |
| 11 — The flat structure | [On Subjects](../bookkeeping/07-on-subjects.md) | Synopsis + link. Mostly absorbed |

The field guide chapters keep what's unique to them (the two-book minimum, the direction convention details, the autobiography naming pattern). Anything that duplicates Bookkeeping becomes a link.

**Owner:** Libby
**Scope:** 4 field guide chapters

### 3. Extend bookkeeping.ts

The validator currently checks a subset of what Bookkeeping specifies. Extend to check:

- [ ] Full frontmatter order for all three types (catalogue, book, chapter)
- [ ] `specification:` label presence on spec chapters/books
- [ ] No books inside subject catalogue directories (flat structure)
- [ ] `catalogues:` required and is plain text (not a link) on `.`/`..` books
- [ ] Chapter files have `author:` that is a markdown link

**Owner:** Queenie
**Scope:** bookkeeping.ts

### 4. Measure reading cost

Count lines on the waking-up path and compare to [On Synopsis](../bookkeeping/09-on-synopsis.md) budgets:

- [ ] CLAUDE.md — budget: part of <250 combined with layer 1
- [ ] Librarianship cover (layer 1) — budget: ~150-200 lines
- [ ] Teamsmanship cover (layer 2) — budget: ~80-120 lines
- [ ] Bookkeeping cover (layer 3) — budget: ~40-80 lines

Report: which covers exceed budget, by how much, what to compress.

**Owner:** Phillip
**Scope:** 4 key covers

### 5. Validation script in the library

The library lives in the identity repo, which travels across projects. A GitHub Action in THIS project's `.github/` doesn't travel. The validation needs to live in the library itself — a script that runs before syncing, the way the compilers will run before generating platform files.

Write a validation runner script in the library (e.g., `.tooling/validate.ts` or beside a chapter that documents it) that runs all validators: bookkeeping.ts, subjects-and-catalogues.ts, and any future validators. The script is the library's self-check — run it before `git push` inside `.claude/`.

Document the validation step in the sync protocol ([Travel](../teamspeak/07-travel.md)): validate before you sync. The sync method is part of the system, and the system lives in the library.

**Owner:** David
**Scope:** Library tooling + sync protocol documentation

### 6. Rewrite chapter 14

"Bringing the library into alignment" is stale — references old paths, old states, work that's done. Rewrite against current reality. Most sections can be marked `[ALIGNED]`. What remains is the ongoing tending work.

**Owner:** Libby
**Scope:** `..librarianship/14-bringing-the-library-into-alignment.md`

### 7. Rename protocols → teamspeak

Verify the filesystem rename happened. If `protocols/` still exists, rename to `teamspeak/`. Update all references. The book was renamed conceptually but may not have been renamed on disk.

**Owner:** Arthur
**Scope:** `teamspeak/` (formerly `protocols/`)

## Definition of done

- bookkeeping.ts: 0 errors, 0 warnings
- subjects-and-catalogues.ts: 0 errors, 0 warnings
- Field guide chapters 02, 03, 05, 11 are synopsis-and-link entries
- Reading cost measured and reported
- Validation script runs all validators from library root
- Sync protocol documents the validate-before-push step
- Chapter 14 reflects current reality

<!-- citations -->
[bookkeeping]: ../../bookkeeping/.cover.md
[librarianship]: ../../..librarianship/.cover.md
