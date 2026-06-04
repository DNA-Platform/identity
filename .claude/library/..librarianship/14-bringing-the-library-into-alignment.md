---
title: Bringing the library into alignment
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Bringing the library into alignment

Libby: This chapter tracks the distance between the library's specification and its implementation. The specification lives in [Bookkeeping](../bookkeeping/.cover.md) — eleven "On" chapters defining every convention. This chapter records what's aligned, what's not, and what the validators say.

## Current state (Sprint 51)

### Bookkeeping validator `[ALIGNED]`

Libby: [bookkeeping.ts](../bookkeeping/bookkeeping.ts) — 0 errors, 0 warnings across 44 books and 263 chapters. All frontmatter fields present and ordered. All chapters signed. No `summary:` in frontmatter. Run: `npx tsx bookkeeping/bookkeeping.ts .` from library root.

### Subjects validator `[PARTIAL]`

Libby: [subjects-and-catalogues.ts](../subjects-and-catalogues/subjects-and-catalogues.ts) — 0 errors, 33 warnings. The warnings are false positives: the validator's path resolution doesn't follow relative paths from inside `..team/` personal libraries correctly. The `subject:` links in those books are valid — the validator's link resolution needs updating.

### Flat structure `[ALIGNED]`

Libby: Books sit beside their subject catalogues as peers. No books nested inside subject directories (except the `..team/` exception for personal libraries inside Teamsmanship). The two root catalogues — [Librarianship](../..librarianship/.cover.md) and [Teamsmanship](../..teamsmanship/.cover.md) — are correct.

### Frontmatter `[ALIGNED]`

Libby: All covers have `title:`, `author:`, `subject:`. Catalogues have `catalogues:`. Order is correct: title > catalogues > specification > author > coauthor > subject for catalogues, title > author > subject for books. All chapters have `title:` and `author:` as markdown links.

### Names `[ALIGNED]`

Libby: Renamed `protocols/` to `teamspeak/`. No encoded state in directory names (the old `.what-428-tests-promise` was fixed in a prior sprint).

### Reading cost `[ALIGNED]`

Libby: Measured in Sprint 51. CLAUDE.md + Librarianship cover = 145 lines (budget: <250). Full orientation = 218 lines (budget: <400). All covers within budget. Room to grow for the third subject.

### Field guide `[ALIGNED]`

Libby: Chapters 02 (linking), 03 (growth), 05 (authorship), 11 (flat structure) slimmed to synopsis-and-link entries pointing to [Bookkeeping](../bookkeeping/.cover.md) as the authority. The field guide navigates. Bookkeeping specifies.

### Validation script `[ALIGNED]`

Libby: [.tooling/validate.ts](../.tooling/validate.ts) runs all validators from library root. Run before syncing to the identity repo. Documented in the sync protocol ([The Identity Repo](../teamspeak/06-the-identity-repo.md)).

## What remains

### Subjects validator path resolution `[NOT ALIGNED]`

Libby: The subjects validator can't follow relative `subject:` links from inside `..team/` personal libraries. The links are valid — the validator's resolution is incomplete. Fix: update the path resolver to handle relative paths from nested scopes.

### Third subject `[SCAFFOLD]`

Libby: Sprint 52 introduces the third subject catalogue for the platform/system. Librarianship will need updating to show three subjects.

### .chemistry/ restructure `[SCAFFOLD]`

Libby: 210 files awaiting restructure into proper books. Deferred to a future sprint.

### Compilers `[SCAFFOLD]`

Libby: One compiler exists ([agents folder](../..teamsmanship/06-the-agents-folder.ts)). CLAUDE.md compiler and territory rules compiler planned for Sprint 52.

## When this chapter is done

Libby: When all sections are `[ALIGNED]`, this chapter archives itself. The validators are the ongoing specification check — this chapter just tracks what the validators can't yet measure.

<!-- citations -->
[bookkeeping]: ../bookkeeping/.cover.md
[subjects]: ../subjects-and-catalogues/.cover.md
[librarianship]: .cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
