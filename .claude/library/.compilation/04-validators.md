# Validators

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Three validators check library and compiled output. The validation runner orchestrates them in sequence.

## Bookkeeping validator

- **Source:** [11-on-specifications--validator.ts](../bookkeeping/11-on-specifications--validator.ts)
- **Specification:** [On Specifications](../bookkeeping/11-on-specifications.md)
- **Checks:** Every book has a `.cover.md`. Every cover has a `#` title. Every chapter has a `#` title and `author:` metadata. Directory names follow the dot-type convention.
- **Scope:** Any directory tree — identity library, branch libraries, or both.
- **Output:** Books checked, chapters checked, errors, warnings.

## Compiled-links validator

- **Source:** [07-on-compiled-links--validator.ts](../..environmentalism/07-on-compiled-links--validator.ts)
- **Specification:** [On Compiled Links](../..environmentalism/07-on-compiled-links.md)
- **Checks:** Every markdown link in compiled files (`agents/`, `rules/`, `CLAUDE.md`) resolves to a real file. Provenance comments exist.
- **Scope:** `.claude/` directory.
- **Output:** Links checked, broken count, warnings.

## Link checker

- **Source:** [05-on-validation--check-links.ts](../..environmentalism/05-on-validation--check-links.ts)
- **Specification:** [On Validation](../..environmentalism/05-on-validation.md)
- **Checks:** Every markdown link in every library file resolves. Uses CommonMark parsing and RFC 3986 URL resolution.
- **Scope:** Any directory tree.
- **Output:** Files scanned, links checked, broken count.

## The validation runner — the centralized type-check

- **Source:** [05-on-validation--runner.ts](../..environmentalism/05-on-validation--runner.ts)
- **Orchestrates:** the link checker, the bookkeeping validator, and the compiled-links validator — across the identity library **and every branch library** (`library/*/.lib`). Reports anatomy errors, compiled-broken links, library/branch broken links, and warnings as separate totals.
- **Used by:** the commit tool and the pull tool (gate before pushing/syncing), and `/audit`.

This is the library's **type-check: all links and all books, across `.claude`, `CLAUDE.md`, and every branch.** A clean run is the end-of-work "good state" signal. Anatomy errors and broken *compiled* links are **blocking — fix immediately** (compiled output mirrors the library; each is a chapter or link to fix now, before it travels). Broken *library/branch* links are reported but not blocking, because they include intentional cross-repo links that degrade to text; real breaks among them should still be fixed. Warnings are surfaced as drift to clean up.

## Consistency checker

- **Source:** [06-on-links--consistency.ts](../bookkeeping/06-on-links--consistency.ts)
- **Specification:** [On Consistency](../bookkeeping/06-01-on-consistency.md)
- **Checks:** Both sides of every link — does the source's description of the target match what the target actually says? Count mismatches (source says "seven chapters," directory has eight). Keyword mismatches (source describes a topic the target's opening doesn't mention).
- **Scope:** Any directory tree.
- **Output:** Files scanned, links checked, issues found (count mismatches and keyword mismatches).

## Keyword search

- **Source:** [06-on-links--search.ts](../bookkeeping/06-on-links--search.ts)
- **Specification:** [On Consistency](../bookkeeping/06-01-on-consistency.md)
- **Purpose:** Find where concepts are discussed in the library. Given keywords, returns matching files and paragraphs ranked by relevance. Use before creating links.
- **Scope:** Any directory tree.
- **Output:** Matching files with excerpts, ranked by score.

## What the commit tool gates on

The [commit tool](../..environmentalism/06-on-sync--commit.sh) runs the validation runner before pushing. If bookkeeping or compiled-links fail, the push is blocked. The full link checker is NOT gated — it's informational. This is deliberate: 136 pre-existing cross-repo broken links should not block every push. The audit skill reports them; the commit tool does not gate on them.
