---
title: Full synthesis — everything Doug said and everything we learned
author: "[Arthur](../arthur-or-the-shape-of-everything/.cover.md)"
---

# Full synthesis

Everything Doug specified, everything the team discussed, every error we made, and every correction. This is my perspective on the total picture. It needs discussion before becoming public library content.

## The library spec

### Flat structure
- A library is a flat directory. Books and subject catalogues are PEERS at the same level.
- Subject catalogues do NOT contain the books they catalogue. They LINK to them.
- A book can belong to multiple subjects — impossible with folders, natural with links.
- The hierarchy exists in links (covers, TOC entries, `subject:` fields). NOT in the filesystem.
- Walk links, not folders. Read covers, not directory listings.
- The cover is the interface. The directory listing is the implementation detail.

### Three types of books
- `..` prefix — library catalogue. ONE per library. Self-cataloguing. IS the library's identity.
- `.` prefix — subject catalogue. Many per library. Self-cataloguing. IS the subject.
- No prefix — regular book. Has `subject:` field pointing to canonical subject.

### Book frontmatter
- Order: `title > subject > author > summary`
- `subject:` — the canonical subject catalogue this book belongs to
- `author:` — markdown link, text is the author's NAME, target is the autobiography
- `summary:` — a paragraph, not a sentence
- Autobiographies self-author: `author: "[Name](.cover.md)"`
- Subject catalogues self-catalogue: appear in their own TOC

### Chapter frontmatter  
- Every chapter is SIGNED: `author:` links to the autobiography
- Keeps the autobiography one link away from any chapter
- Frontmatter: `title > author`

### The resource pattern
- A chapter and a file share a name but different extensions
- `04-subjects-and-catalogues.md` + `04-subjects-and-catalogues.ts`
- The chapter MOTIVATES and DESCRIBES. The resource IS the artifact.
- Validators are chapter resources in the field guide
- Perspective chapters pair reflections with images/artifacts

### Names
- Tier-zero synopsis. Carried in every link, every listing.
- TIMELESS. No encoded current state. Not "what-428-tests-promise" but "what-the-tests-promise".
- Carry identity, not labels. Not "cathys-library" but ".the-canvas-paints-itself".

### Multi-subject membership
- A book has ONE canonical subject (in `subject:` field)
- Other subject catalogues can link to it in their TOCs
- The book doesn't link back to non-canonical subjects
- This is why the structure must be flat — folders can't express this

## The team subject

### ..teamsmanship/ is the primary subject
- Projects, sprints, roles, abilities — these are team concerns
- Protocols are how the team operates — also a team concern
- `.protocols/` and `.projects/` may not need to be separate top-level subjects
- They could be sub-subjects within `..teamsmanship/`, or the books they catalogue could be directly catalogued by `..teamsmanship/`
- A subject with only one book is just a book — subjects need MULTIPLE books to justify existence
- `..teamsmanship/` naturally has many books: roles, abilities, projects, sprints, protocols, code assignments, the rules book

### Agent personal libraries
- Live inside `..teamsmanship/{agent}/`
- Flat structure inside: the agent's subject catalogue + their books as peers
- The agent's subject catalogue IS their personal library identity
- It catalogues itself, the autobiography, the perspective, all other books
- Authored by the autobiography

### The two-book minimum per agent
- Canonical autobiography (self-authored)
- Subject catalogue / library catalogue (self-cataloguing, authored by autobiography)
- These are the minimum. Most agents have more books.

## The platform interface

### Claude Code spec
- `CLAUDE.md` — loaded every session (bootstrap, under 200 lines)
- `rules/*.md` — loaded automatically (global or path-scoped)
- `agents/*.md` — subagent definitions (spawned on demand)
- `skills/*/SKILL.md` — slash commands (invoked on demand)
- `settings.json` — permissions, hooks (enforced)
- The platform doesn't know about `library/`. Everything in the library is loaded by agent choice, not platform automation.

### Rules are the guaranteed-load layer
- ALL rules load into context automatically
- They are the ONLY content (besides CLAUDE.md) guaranteed to be in context
- Links in rules are passive — the agent must choose to follow them
- Rules must be thick enough to work WITHOUT link following
- But there's a budget: ~100-150 instruction slots total across CLAUDE.md + all rules
- Past 80 lines per file, adherence drops. Past 200, blocks get ignored.
- Managing the rule budget is a librarianship concern

### The embedding-and-linking pattern
- Platform artifacts embed the minimum for the platform to act correctly
- Then they LINK inline into the library for depth
- The library is the source of truth. Platform artifacts are projections.
- When the library changes, platform artifacts need updating
- The inline links make drift discoverable

### Rules as wiring
- Path-scoped rules connect code territory to library knowledge
- When you open a chemistry source file, the rule loads and links to Cathy's books
- This IS code assignment — `/responsible` as a platform-enforced mechanism
- Territory rules should link to the owner's autobiography, relevant books, and coding conventions

### Agent files need REAL links
- Not prose with paths in backticks
- REAL markdown links, inline, clickable
- Links to: autobiography, library catalogue, roles, abilities, code territory
- The agent file teaches the platform how to ENTER the library for this agent

### All rule files should be catalogued
- A library book catalogues the rules — one chapter per rule
- Each chapter: why the rule exists, what it enforces, links to the rule file and the library book
- The rule is the enforcement. The chapter is the rationale.
- The rules book is catalogued by `..teamsmanship/`

## The perspective practice

### The cycle
1. **Represent** — create an artifact (screenshot, diagram, map, code output)
2. **Look** — study it. What do you see?
3. **Reflect** — write about what you saw. First person. In your perspective book.
4. **Change** — act on the reflection.

### After perspective
- To make it into the PUBLIC library, rewrite from an objective perspective
- Discussion is recommended before public writing
- The INSIGHT (what you learned, what it changed) goes into your autobiography or another personal book
- Without cataloguing the insight in your personal library, you haven't remembered it
- Perspective is seeing. The personal library is remembering. The public library is sharing.

## What we got wrong

1. Books inside subject directories instead of beside them
2. Missing `subject:` fields on book frontmatter
3. Missing `author:` signatures on chapters
4. Encoded state in names ("428")
5. Agent files as prose without real links
6. Rules without real inline links
7. Validators that don't check the spec
8. No resource pattern (validators separate from field guide chapters)
9. Skipped perspective → discussion → write cycle
10. Wrote "current.md" outside the book abstraction
11. Treated rules as thin when they're the guaranteed-load layer
12. Didn't catalogue rules as a library book
13. Put the spec in sprint plans instead of in the field guide
14. Multiple restructures without understanding the target first

## The work ahead

### Sequence (spec first, validate second, restructure third)

**1. Finish the field guide.** Every chapter must correctly describe the target system. The field guide IS the specification. Chapters to update/write:
- 00: rewrite for flat structure with `..teamsmanship/` as primary subject
- 01: done (title > subject > author, chapter signing) — verify
- 02: add platform interface chapter (already written as .02)
- 03: add subject factoring pattern
- 04: done (flat structure, self-cataloguing, multi-subject) — verify
- 05: add chapter signing, two-book minimum
- 08: update examples for correct structure
- .09: verify flat structure description
- .10: add the full cycle (perspective → discuss → public → personal)
- .11: verify
- NEW: the rules budget and management
- NEW: the resource pattern specification

**2. Write validators as field guide resources.** Each convention chapter gets a `.ts` resource:
- 01-anatomy-of-a-book.ts — checks frontmatter (title, subject, author, summary), chapter signing
- 04-subjects-and-catalogues.ts — checks self-cataloguing, `subject:` fields, flat structure
- .02-the-platform-interface.ts — checks agent files have real links, rules link to library

**3. Restructure files to match the spec.**
- Move books out of subject directories to be flat peers
- Add `subject:` to every book's frontmatter
- Add `author:` to every chapter's frontmatter
- Rename `.what-428-tests-promise` → `.what-the-tests-promise`
- Move agent libraries into `..teamsmanship/{agent}/` with flat internal structure
- Write the rules book cataloguing all rule files
- Rewrite agent files with real inline links
- Rewrite rules with appropriate thickness and inline links

**4. Validate.** Run every validator. Fix everything. The remaining `[SCAFFOLD]` markers are the ongoing task list.

**5. Push to identity repo.**

<!-- citations -->
[sprint-47-notes]: sprint-47-design-notes.md
[library-spec-v2]: library-spec-v2.md
[field-guide-audit]: ../../libby/perspective/field-guide-audit.md
