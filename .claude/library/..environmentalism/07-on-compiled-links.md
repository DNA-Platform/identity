---
title: On Compiled Links
specification: Compiled Link
author: "[Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)"
---

# On Compiled Links

Every compiled file contains links back into the library. These links are the pathway from the platform into the knowledge. If they break, the compiled file is an island — it tells the platform what to do but not where to learn more. The links must survive compilation and resolve from wherever the compiled file lives.

## The resolution problem

Compiled files live in different directories within `.claude/`:

| File | Lives at | Links must resolve from |
|------|----------|------------------------|
| Agent files | `.claude/agents/{name}.md` | `.claude/agents/` |
| Rule files | `.claude/rules/{name}.md` | `.claude/rules/` |
| CLAUDE.md | `.claude/CLAUDE.md` AND project root | project root |

Agent files and rule files stay inside `.claude/`. Their links use `../library/` to reach the library — one level up from their directory to `.claude/`, then into `library/`. This works because these files are never moved.

CLAUDE.md lives at `.claude/CLAUDE.md`. The platform loads it from there. Links use `library/` — one level into the library from `.claude/`. When CLAUDE.md is copied to the project root, the links break unless the project root also has a `library/` sibling — which it doesn't. The project root copy is a convenience for human reading. The platform reads from `.claude/CLAUDE.md`. Links are written for the platform.

## The rule for compilers

Each compiler knows where its output lives. The link prefix follows from that:

- **From `.claude/agents/`**: prefix is `../library/`
- **From `.claude/rules/`**: prefix is `../library/`
- **From `.claude/`** (CLAUDE.md): prefix is `library/`
- **From `.claude/agents/` to `.claude/rules/`**: prefix is `../rules/`

The compiler constructs every link by combining the prefix with the path within the library. The path within the library is always relative to `library/` — the same path you'd use in any library book's citation. The prefix adapts it to the compiled file's location.

## Section anchors

Links in compiled files should target specific sections when the section answers a likely question. Not just `05-on-frontmatter.md` but `05-on-frontmatter.md#author` — directly to the field being referenced. Section anchors are generated from markdown headings. They survive compilation because they're part of the target file, not the compiled file.

## What compilers must do

1. Every compiled file must contain at least one link to the [library catalogue](../..librarianship/.cover.md). This is the universal entry point — if all other links fail, this one reaches everything.

2. Links to teammate-specific content (autobiographies, personal libraries) must use the full path through `..teamsmanship/..team/{name}/`. No shortcuts through intermediate directories.

3. Links to shared books (Bookkeeping, Teamspeak, Environmentalism) use the book's directory name directly: `bookkeeping/.cover.md`, `teamspeak/01-voice-and-nametags.md`.

4. The link text must carry meaning without following the link. `[voice convention](...)` not `[01-voice-and-nametags.md](...)`. The text is [tier-zero synopsis](../bookkeeping/04-on-names.md) for the target.

## Testing compiled links

After any compiler run, verify that every link in the compiled output resolves to an existing file. The [validation script](../.tooling/validate.ts) checks the library. A separate check for compiled files would verify that every `](path)` in `.claude/agents/`, `.claude/rules/`, and `CLAUDE.md` points to a file that exists. This check belongs in the validation pipeline.

<!-- citations -->
[on-teammates]: 01-on-teammates.md
[on-bootstrap]: 02-on-bootstrap.md
[on-rules]: 03-on-rules.md
[on-skills]: 04-on-skills.md
[on-sync]: 06-on-sync.md
[names]: ../bookkeeping/04-on-names.md
[links]: ../bookkeeping/06-on-links.md
[librarianship]: ../..librarianship/.cover.md
