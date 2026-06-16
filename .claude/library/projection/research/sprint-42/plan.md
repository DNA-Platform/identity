# Sprint 42 — Projects as Books

Turn the flat export into navigable project books. Test with a small project, verify it works, generalize.

## Sprint goal

**A reader opens a project folder and can navigate from cover to conversation to full transcript, like browsing the app. Built and verified on a test project, then run for all 20.**

## Approach

The data exists in two places:
- **Export** (`.exports/data-*.zip`) — full conversation content, project docs, artifacts
- **Mapping** (`.exports/project-mapping-*.json`) — which conversations belong to which projects

The parser joins them: for each project in the mapping, find the matching export conversations by title, produce a cover with TOC and summary files with links. The full conversations stay in `conversations/` — the project book links to them.

## Test projects

1. **Physics** (4 conversations, 1 file) — small, quick to verify manually
2. **Grammar** (3 conversations, 1 file) — even smaller
3. **DNA Patternity** (18 conversations, 17 files) — tests the full structure with files

## Project book structure

```
projects/
  physics/
    .cover.md                           — name, description, instructions, file list, conversation TOC
    docs/                               — project knowledge files (from export)
    conversations/                      — summary chapters linking to full transcripts
      01-the-nature-of-force.md
      02-quantum-semantics.md
```

### .cover.md format

```markdown
---
uuid: ...
title: "Physics"
conversations: 4
docs: 1
---

# Physics

Description text.

## Files

- [physics-doc.md](docs/physics-doc.md)

## Conversations

| # | Title | Date | Messages |
|---|-------|------|----------|
| 1 | [Title](conversations/01-title.md) | 2025-09-15 | 42 |
```

### Conversation summary format

```markdown
---
title: "The nature of force"
date: 2025-09-15
messages: 42
project: physics
full: ../../conversations/2025-09-15-the-nature-of-force.md
---

# The nature of force

**Project:** [Physics](../.cover.md)
**Date:** 2025-09-15
**Messages:** 42

[Read full conversation](../../conversations/2025-09-15-the-nature-of-force.md)
```

## Stories

| ID | Story | Owner | Description |
|----|-------|-------|-------------|
| A-1 | Join mapping + export | Claude | Match captured titles to export conversations. Produce a joined dataset. |
| A-2 | Generate project covers | Claude + Libby | Write `.cover.md` for each project with conversation TOC. |
| A-3 | Generate conversation summaries | Claude | Write summary .md files in each project's `conversations/` folder. |
| A-4 | Add project back-links to conversations | Claude | Add `project:` field to conversation frontmatter. |
| B-1 | Test on Physics | Libby | Open physics project, navigate from cover → conversation → transcript. Verify links work. |
| B-2 | Test on DNA Patternity | Libby | Verify files + conversations + artifacts all link correctly. |
| C-1 | Run for all 20 projects | Claude | Generalize and run. Delete old output, produce fresh. |
| C-2 | Build `.claude` master catalogue | Libby | Top-level index of all projects. |
| D-1 | Autobiographies | All | Sprint reflections. |

## Constraints

- **Don't modify full conversations.** Project summaries link to them. The conversations are the raw archive.
- **Stable filenames.** Conversation summary files in projects use numbered prefixes matching the mapping position.
- **Cross-check.** After generation, verify a sample of links actually resolve to existing files.

<!-- citations -->
[export-format]: ../../library/export-format/.cover.md
[app-model-design]: ../../library/claude-driver/03-app-model-design.md
