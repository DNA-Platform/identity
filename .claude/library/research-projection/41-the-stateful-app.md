# Sprint 41 — The Stateful App

Implement the app model design from the [design document](../../library/claude-driver/03-app-model-design.md). The app is the product. When it works elegantly, everything built on it is trivial.

## Sprint goal

**The app model has an active page, index-based navigation, automatic data loading, and lazy pagination. The capture script is six lines.**

## Tracks

### Track A — Active page and navigation (Arthur + Claude)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | `openAt(index)` on Projects | Click the Nth project card from the loaded list. No name search. |
| A-2 | Return to projects list | `openProjects()` from a Project page returns to the grid and re-reads cards. |
| A-3 | Page-aware data access | `project.name` throws `WrongScreenError` if not on a project page. Data is tied to the active page. |
| A-4 | Auto-load on navigation | Navigating to a page loads its data. No explicit `refresh()` needed by callers. |

### Track B — Scoped selectors (Adam + Claude)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | `invokeByNameLast` integration | Use last-match for "Show more" in project conversations. Test against Russia, Investing, SRT. |
| B-2 | Audit remaining ambiguous selectors | Review "View all", "New chat", "Attach" for ambiguity. Fix with scoped methods where needed. |

### Track C — Lazy data completion (Arthur)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Verify `Lazy<T>` on project conversations | `conversations.wait()` clicks "Show more" until done. Test against capped projects. |
| C-2 | Apply `Lazy<T>` to sidebar chat list | `sidebar.chats` items load lazily, "View all" clicked on `.wait()`. |
| C-3 | Navigation resets lazy data | Opening a different project resets the previous project's lazy properties. |

### Track D — Capture re-run (Adam)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Rewrite capture script | Six lines using the new model: open projects, iterate by index, wait for data, collect. |
| D-2 | Run against all 20 projects | Verify all conversations load fully. Compare counts against previous best (601). |
| D-3 | Cross-check against export | Match captured titles to export conversation names. Report coverage. |

### Track E — Library and retro (All)

| ID | Story | Description |
|----|-------|-------------|
| E-1 | Update coding policy | Document active page pattern, lazy data pattern, scoped selectors. |
| E-2 | Autobiographies | Sprint reflections. |

## Design reference

See [App model design](../../library/claude-driver/03-app-model-design.md) for the full specification.

## The capture script this sprint should produce

```typescript
await claude.openProjects();
for (let i = 0; i < claude.projects.cards.length; i++) {
  await claude.projects.openAt(i);
  const convs = await claude.project.conversations.wait();
  const files = await claude.project.files.wait();
  mapping.push({ name: claude.project.name, conversations: convs, files });
  await claude.openProjects();
}
```

No `goHome()`. No name search. No error recovery. No sleep. The app handles it.

<!-- citations -->
[design-doc]: ../../library/claude-driver/03-app-model-design.md
[lazy]: ../../agents/src/lazy.ts
[coding-policy]: ../../library/coding-policy/.cover.md
