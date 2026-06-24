# Sprint 96 — The Type-Check and the Table of Contents

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

This sprint began as a question — "do we have a centralized validator, a type-check for the library?" — and ended with one: plus the death of the warning, a tool that keeps covers honest, and a clean push up to identity. It was the work Sprint 95's sidetrack had deferred, finally done.

## What happened

The [validation runner](../..environmentalism/05-on-validation--runner.ts) already existed but undersold itself. It became the library's **type-check**: every link and every book, across `.claude`, `CLAUDE.md`, and every branch library (`library/*/.lib`), run at the end of every [compile](../..environmentalism/04-on-skills.md) and reporting what must be fixed immediately. Two latent bugs fell along the way — a Windows drive-letter path bug that stopped it spawning its sub-validators, and an accounting bug that miscounted a clean validator as a failure.

Then the warning tier died. The principle was Doug's: a warning is a rule the validator checks and then tells you to ignore, and no one returns to a deferred warning — it accumulates as drift until the library quietly stops meaning what it says. So every check in the [bookkeeping validator](../bookkeeping/11-on-specifications--validator.ts) became an error, and [On Specifications](../bookkeeping/11-on-specifications.md) now says so: a contract has no soft clauses.

Hardening the checks surfaced 54 real problems the warning tier had been hiding — bare cover entries, sprint records with no metadata, deprecated YAML frontmatter, nametags in published bodies. The bare covers needed the deepest care, so they got a tool and a discipline. The tool is the [TOC injector](../bookkeeping/03-on-covers--toc.ts): given a cover and a chapter, it inserts, updates, or reads back (`--get`) one table-of-contents entry by reading only the cover and the chapter's title line — never the whole book — validates the cover's structure, and refuses a non-standard cover so we standardize instead of guessing. The discipline was Libby's: under a wartime grant she read each owner's autobiography in order and wrote every synopsis true to that owner's voice, never her own.

The cleaned library — 81 books, 560 chapters, **0 errors** — went up through identity to `main` with the [commit tool](../..environmentalism/06-on-sync--commit.sh). It paused once for a hand-merge on two compiled agent files, exactly as the sync is designed to: it pauses for human judgment, it does not cold-automate.

## Deliverables

- [05-on-validation--runner.ts](../..environmentalism/05-on-validation--runner.ts) — the centralized type-check: all links + all books, `.claude` and every branch, run at the end of compile, with errors and broken links blocking.
- [03-on-covers--toc.ts](../bookkeeping/03-on-covers--toc.ts) — the interim TOC tool: `insert`/`update`, `--get` one entry, `--check` a whole cover. Catalogued in [On Covers](../bookkeeping/03-on-covers.md) and [Tools](../.compilation/05-tools.md).
- [11-on-specifications--validator.ts](../bookkeeping/11-on-specifications--validator.ts) + [On Specifications](../bookkeeping/11-on-specifications.md) — errors only, no warning tier; the nametag check now names all ten teammates.
- The [skills compiler](../..environmentalism/04-on-skills.md) now runs the type-check at the end of every compile.

## What it taught

- **A warning is a rule you have agreed not to enforce.** Either it is an error or it is not a rule. There is no honest third thing, because there is no "later."
- **The type-check is the library knowing it means what it says.** All links resolve, all books are well-formed — everywhere, not only where you happened to look.
- **A tool that refuses is a tool that standardizes.** The injector won't touch a non-standard cover; that refusal is how we find the covers that need fixing.
- **The real answer is still ahead.** The synopsis belongs in the chapter, with the whole table of contents assembled from the chapters. The injector is the honest interim; the assembler is the next step.
