---
title: "Sprint 55: Markdown Metadata"
author: "[Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)"
---

# Sprint 55: Markdown Metadata

Replace YAML frontmatter with markdown metadata across all 586 files. Every link becomes clickable. The format is markdown all the way down.

## The new format

```markdown
# Book Title

- **catalogues:** Subject Name
- **specification:** Term
- **author:** [Name](path/to/autobiography/.cover.md)
- **coauthor:** [Name](path/to/autobiography/.cover.md)
- **subject:** [Subject Name](path/to/catalogue/.cover.md)

---

The opening paragraph...
```

A bullet list with bold labels after the heading, followed by a horizontal rule separator. Every field that was in YAML becomes a clickable markdown line. The `---` separates metadata from content.

## Tasks

1. Update On Frontmatter in Bookkeeping — specify the new convention, deprecate YAML
2. Update bookkeeping.ts validator — parse `- **field:**` instead of YAML `---` blocks
3. Write a migration script — strip YAML, convert to markdown bullets, preserve field values
4. Run the migration on all 586 files
5. Run validators, fix any issues
6. Update On Compiled Links — compilers generate the new format
7. Recompile all platform files
8. Sync and push

## Why

Links in YAML don't render as clickable in the document. The reader — Doug — sees a grey metadata box. The most important navigation (author, subject) is hidden. Markdown metadata makes every link functional where the reader reads it.
