# Sprint 37 — The Archive

Parse the Claude export into a browsable markdown library that Doug and Ana can read. The account library mirrors the app's organization.
- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

## Sprint goal

**`npm run parse` reads the export ZIP from `library/claude-legacy/exports/` and unpacks it into a browsable folder structure in `library/claude-legacy/`. Doug and Ana can open any conversation and read it as a transcript. The model bridges export data and the live app.**

## Context

Doug created `library/` at the repo root as the account library — separate from `.claude/agents/library/` (the team wiki). Two accounts:
- `claude-legacy/` — the old dna.love account being migrated
- `claude-dna/` — the new account (populated during migration)

The export ZIP (535MB conversations, 20 projects, memories) lives in `claude-legacy/exports/`. We unpack it into the same folder as browsable markdown.

## Design principles

- **App-based organization.** Doug and Ana know the app. The folder structure should match their mental model: projects with docs and conversations, a recents-like list of standalone conversations.
- **Stable filenames.** Date of first message as prefix: `2025-06-23-title-slug.md`. Conversations don't move when they get new messages.
- **Preserve everything.** Metadata in YAML frontmatter. Timestamps on every message. UUIDs preserved. Nothing thrown away.
- **Artifacts as resources.** Each artifact extracted as a separate file next to its conversation, named with the conversation prefix + artifact name. Format preserved (`.html`, `.py`, `.svg`, etc.).
- **Readable first.** The markdown renders like a transcript. Speaker names, timestamps, code blocks, all visible.
- **Living archive.** A conversation can be exported from the live app into the library at any time. The library is not just a one-time dump.

## Folder structure

```
library/
  claude-legacy/
    memories.md                              — Claude's accumulated memory
    exports/
      data-....zip                           — the raw export
    artifacts/
      .index.md                              — catalogue of all artifacts with links
      2025-06-25-budget-spreadsheet.html     — artifact in native format
      2025-08-15-interactive-periodic-table.html
      2025-08-15-data-parser.py
    projects/
      anas-fiverr-inbox/
        .project.md                          — name, description, instructions
        docs/
          style-guide.md
          claude-prompting-guide.md
        conversations/
          2025-07-15-samantha-draft.md
          2025-08-02-client-response.md
      physics/
        .project.md
        docs/
          ...
    conversations/
      2025-06-23-setting-up-git.md
      2025-06-25-georgian-company.md         — links to artifacts/2025-06-25-budget...
      2025-06-28-moving-phone-number.md
      ...
  claude-dna/
    (populated during migration — same structure)
```

## Conversation markdown format

```markdown
---
uuid: d2fd53d1-ba4f-4faf-b010-edda58dc9813
title: Setting up a Georgian company
created: 2025-06-25T11:18:57Z
updated: 2025-06-26T06:21:59Z
messages: 14
project: null
artifacts:
  - { title: "Budget spreadsheet", file: "2025-06-25-georgian-company-budget.html" }
---

# Setting up a Georgian company

**Doug** · 2025-06-25 11:18
> I'm in a weird state with git. Can I undo all of my current changes?

**Claude** · 2025-06-25 11:19
> Yes! You have several options...
>
> ```bash
> git reset --hard origin/main
> ```
```

## Tracks

### Track A — Format design (Claude + Libby)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Conversation format | Markdown spec for a single conversation. Speaker names, timestamps, code blocks, frontmatter. |
| A-2 | Project structure | `.project.md` cover, `docs/` folder, scoped `conversations/`. |
| A-3 | Memories format | Readable markdown of the semantic memory. |
| A-4 | Artifact extraction | Rules for extracting artifacts as separate files. Naming convention. Format preservation. |
| A-5 | Document in library | Update export-format book with the browsable format spec. |

### Track B — Parser (Claude + Adam)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | ZIP reader | Open the ZIP, read entries as streams. Handle the 535MB conversations file. |
| B-2 | Conversation parser | Stream-parse conversations.json. Write each as a dated markdown file. Extract artifacts. |
| B-3 | Project parser | Read project JSONs. Create folder structure. Write docs as markdown files. Link conversations to projects. |
| B-4 | Memories parser | Read memories.json. Write as browsable markdown. |
| B-5 | Entry point | `npm run parse` — reads ZIP, writes to `library/claude-legacy/`. |
| B-6 | Statistics | Total conversations, messages, projects, date range, largest conversations. |

### Track C — Model bridge (Arthur + Claude)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Review skeleton fresh | Read the current src with fresh eyes — Doug has been editing. |
| C-2 | Export-to-model types | Shared TypeScript interfaces for conversations, messages, projects. Used by both the parser and the app driver. |
| C-3 | App-to-library export | A method on the app model that captures a conversation from the live app and writes it to the library. The inverse of parsing. |
| C-4 | Account abstraction | The app needs to know which account it's operating on. Initialize with an account ID that maps to a library folder. |

### Track D — Library (Libby)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Carry-forward | Chapter-resource pattern, universal abilities, link tending. |
| D-2 | Update .librarianship | Add export-format book. Note the relationship between the team library (`.claude/agents/library/`) and the account library (`library/`). |

<!-- citations -->
[export-format]: ../../library/export-format/.cover.md
[coding-policy]: ../../library/coding-policy/.cover.md
[claude-migration]: ../../library/claude-migration/.cover.md
