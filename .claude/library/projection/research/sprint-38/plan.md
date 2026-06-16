# Sprint 38 — Projects as Books

Turn the flat export into a navigable library. Projects become books with covers and conversation summaries. Artifacts are extracted from conversations. The live app provides the project-conversation mapping.

## Sprint goal

**Each project is a book with a cover, table of contents, conversation summaries, and links to artifacts. Doug and Ana can browse by project, find a conversation, read it, and locate its artifacts.**

## Key findings from Sprint 37

1. **Artifacts exist in the export** — embedded in conversation messages as `tool_use` blocks with `name: "artifacts"`. Full content available with title, type, and create/update commands.
2. **Images exist** — as `"type": "image"` blocks with `file_uuid` references (images themselves may not be in the export).
3. **Project-conversation mapping is missing** — must be recovered from the live app.
4. **Tool usage is rich** — web searches, code execution, file operations, widget rendering. All inline in messages.

## Design: project as book

```
library/claude-legacy/
  .claude/                          — top-level catalogue of all projects
    .cover.md                       — table of contents linking all projects
  projects/
    anas-fiverr-inbox/
      .cover.md                     — project name, description, instructions, TOC
      conversations/
        samantha-draft.md           — summary + link to full conversation
        client-response.md          — summary + link to full conversation
    eirian/
      .cover.md
      conversations/
        ...
  artifacts/
    .index.md                       — catalogue of all artifacts
    2025-10-03-foundations-of-inheritance-in-srt.md
    2025-08-24-page-tsx-test-suite-index.tsx
    ...
  conversations/                    — all conversations (raw archive, unchanged)
    2025-06-23-brennen.md
    ...
  memories.md
```

## Conversation summary format (inside a project book)

```markdown
---
title: Samantha Draft
conversation: ../../conversations/2025-07-15-samantha-draft.md
date: 2025-07-15
messages: 24
artifacts:
  - title: Russian Draft v3
    file: ../../artifacts/2025-07-15-russian-draft-v3.md
---

# Samantha Draft

Summary of the conversation — what was discussed, what was decided, what artifacts were produced.

[Full conversation](../../conversations/2025-07-15-samantha-draft.md)
```

## Tracks

### Track A — Recover project mapping from live app (Claude + Adam)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Study the tests | Read all 13 tests to understand current app capabilities. Note what's proven to work. |
| A-2 | Write a script to capture project conversations | Open each project in the app, read its conversation list, save UUID → project mapping. |
| A-3 | Match UUIDs to export conversations | Join the mapping with the export data to sort conversations into projects. |

### Track B — Extract artifacts from export (Claude)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | Parse `tool_use` blocks | Find all `name: "artifacts"` blocks in conversations. Extract content, title, type. |
| B-2 | Write artifact files | Save each artifact in its native format to `artifacts/`. Build `.index.md`. |
| B-3 | Link artifacts to conversations | Add artifact links to conversation frontmatter and inline. |

### Track C — Build project books (Libby + Claude)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Create project covers | For each project, write `.cover.md` with name, description, instructions, and TOC. |
| C-2 | Write conversation summaries | For each conversation in a project, write a summary chapter with links. |
| C-3 | Create `.claude` top-level catalogue | The master index of all projects with summaries and links. |
| C-4 | Back-link conversations to projects | Add project reference to conversation frontmatter. |

### Track D — Library + autobiographies (All)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Update export-format book | Document artifact structure, tool_use blocks, image references. |
| D-2 | Autobiography chapters | Everyone writes about Sprint 38 learnings. |

<!-- citations -->
[export-format]: ../../library/export-format/.cover.md
[coding-policy]: ../../library/coding-policy/.cover.md
