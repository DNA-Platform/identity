# Sprint 63: Chemistry Documentation Migration — Phase 1: Read and Plan

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Move all of `.chemistry/` from the identity library into the chemistry branch library at `library/chemistry/.lib/`. This is 199 markdown files of framework documentation that predates the library's conventions. It needs restructuring into proper books catalogued by Representivity.

This sprint is Phase 1: Cathy and Libby read everything, discuss how to factorize, and produce a detailed plan for the migration. Execution is Phase 2.

## Why this matters

`.chemistry/` is project-specific framework documentation. It doesn't belong in the identity library — it belongs in the chemistry branch where the team's knowledge of building $Chemistry lives. Moving it completes the separation between identity (what the team IS) and applied knowledge (what the team learned building something).

## Task 1: Cathy reads the content — Cathy

Read the `.chemistry/` directory structure and content. You built this framework — you know what these docs describe. For each major section, note:
- What it covers (the framework concept)
- How current it is (some may be stale after 40 sprints of changes)
- What code it references (and whether those references still resolve)
- How it should be factorized into books

Major sections to read:
- `chemistry/books/particle/` — particle documentation (7 files)
- `chemistry/concepts/` — lexical scoping, derivatives
- `chemistry/features/` — feature documentation
- `chemistry/caveats/` — known caveats
- `chemistry/patterns/` — usage patterns
- `chemistry/epistemology/` — the Lab, the test suite, open questions
- `chemistry/ontology/` — ontological structure
- `chemistry/examples/` — code examples
- `chemistry/sections/` and `chemistry/topical/` — sectioned docs
- Top-level files: overview, glossary, coding conventions, react integration

Produce a list of proposed books with their topics and which source files map to each.

## Task 2: Libby reads the structure — Libby

Read the `.chemistry/` directory and understand what's there at a structural level. Don't read every file — read the index files, the cover, the catalogue.md, and sample a few chapters from each section. Assess:
- How much content is there per section?
- What's the right granularity for books? (One book per section? Fewer larger books? More smaller ones?)
- What conventions need to change? (index.md → .cover.md, no frontmatter → proper metadata, flat structure → dot-type system)
- What can be discarded? (Stale docs, templates, backlogs)

## Task 3: Cathy and Libby discuss — Both

Discuss how to factorize the 199 files into books. Consider:
- What are the natural book boundaries? (A book about particles, a book about reactivity, a book about patterns?)
- What naming convention? (Single words that carry authority, per Doug's naming principle)
- What gets discarded vs archived vs migrated?
- How do code references work in the branch library? (Links from `.lib/` to `../../src/`)
- Who authors each book? (Cathy as framework engineer, Libby as librarian ensuring conventions)

The discussion produces the Phase 2 plan — specific books, specific file mappings, specific naming.

## Task 4: Doug review — Doug

Present the factorization plan to Doug for feedback before executing. The naming matters. The book boundaries matter. Doug may have opinions about how $Chemistry documentation should be organized as a branch library — this is the team's knowledge of building a representational framework, not just API docs.

## What success looks like

A detailed plan for Phase 2 that lists every book to create, every file to move, every file to discard, and the naming convention for the chemistry branch library. The plan is approved by Doug before execution begins.
