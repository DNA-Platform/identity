---
title: Tasks and unfinished work
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Tasks and unfinished work

The library is always incomplete. Books are scaffolded before they're written. Chapters are planned before they're filled. Subjects are created before all their books exist. This is healthy — the library grows by accretion, not by perfection.

But incompleteness must be VISIBLE. A reader who encounters a scaffolded book and thinks it's finished will make decisions based on missing information. A reader who sees `[SCAFFOLD]` knows to look elsewhere or wait.

## The `[SCAFFOLD]` marker

A TOC entry marked with `[SCAFFOLD]` means: the chapter file exists (or should exist) but the content is incomplete or absent.

```markdown
## Chapters

1. [The reactive model](01-the-reactive-model.md) — choosing scope-tracked reactivity
2. [View purity](02-view-purity.md) — object-pure views as a guarantee
3. [Error boundaries](03-error-boundaries.md) — handling failed renders `[SCAFFOLD]`
```

The `[SCAFFOLD]` marker tells the reader: chapter 3 is planned but not written. Don't open it expecting content. The validator reports all `[SCAFFOLD]` markers as a task list.

## The `<!-- TODO: description -->` marker

Inside a chapter, `<!-- TODO: description -->` marks a section that needs work:

```markdown
## The scope system

The scope tracks which properties a view depends on.

<!-- TODO: describe the dirty flag mechanism and re-render scheduling -->

When a tracked property changes, the view re-renders.
```

HTML comments are invisible to the reader but visible to the validator and to agents editing the file. Use them for work-in-progress notes, not for published content.

## Cleanup on completion

When a `[SCAFFOLD]` chapter is written, remove the marker from the TOC entry. When a `<!-- TODO -->` section is completed, remove the comment. Stale markers are rot — they tell readers that work is incomplete when it isn't. The validator should flag markers that have been present for more than two sprints without change.

## The validator as task list

Running the validator produces a report of all `[SCAFFOLD]` and `<!-- TODO -->` markers. This report IS the library's task list. No separate task tracker needed — the library tracks its own incompleteness through markers that the validator collects.

The task list is organic — it grows when books are scaffolded and shrinks when chapters are written. A healthy library has SOME scaffolds (growth in progress) but not MANY stale ones (abandoned work).

## Sprint plans as library tasks

Sprint plans live in project books within the `.projects/` subject. Each sprint can be represented as chapters with task markers. When a sprint completes, the markers are cleaned up. The sprint history table in the project chapter records what was delivered.

This means sprint planning and library tending use the same mechanism: create the structure, mark what's unfinished, write the content, clean the markers. The library IS the project management system.

<!-- citations -->
[subjects]: 04-subjects-and-catalogues.md
[anatomy]: ../bookkeeping/01-on-books.md
