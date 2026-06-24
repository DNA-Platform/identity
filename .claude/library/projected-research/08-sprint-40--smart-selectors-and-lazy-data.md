# Sprint 40 — Smart Selectors and Lazy Data

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Make the app robust. Scoped selectors that understand page context. Lazy async data properties that load on demand and stay consistent.

## Sprint goal

**The app model is beautiful and functional. A project page has conversations as a natural property. A sidebar has a chat list that knows all its items. Every interaction uses a scoped selector that understands page context. The export works because the app works — not the other way around.**

## Problem statement

`invokeByName('Show more')` clicks the first element with that name — which might be in the project description, not the conversation list. This is like writing `$('.show-more')` in jQuery without scoping to a container. We need `$('#conversations .show-more')`.

14 `invokeByName` calls exist across the controllers. Most are probably safe because their names are unique on the page. But "Show more", "View all", "New chat", and "Attach" could be ambiguous when multiple page sections are visible.

## Design 1: Scoped selectors

The UIA layer needs a way to scope searches to a region of the page. Options discussed:

**Text-based scoping** — the controllers already parse UIA text and understand page sections. The selector should use that understanding to identify *which* "Show more" is in the conversation section.

**UIA subtree scoping** — find the parent container element first, search within its subtree. Like jQuery's `$container.find('.show-more')`.

**Approach:** Add a `uia.invokeInSection(name, sectionMarker)` method that:
1. Reads the UIA text
2. Finds the section that starts at `sectionMarker` (e.g., "Start a task in Cowork")
3. Identifies the target element by its position relative to that section
4. Invokes it

## Design 2: Lazy async data

Doug's pattern: data properties return a wrapper that knows how to load itself.

```typescript
interface Lazy<T> {
  readonly value: T;        // current cached value (may be stale)
  readonly loaded: boolean;  // whether wait() has been called
  wait(): Promise<T>;        // load fully (clicks Show more, scrolls, etc.)
  reset(): void;             // clear cache (called on navigation)
}
```

Every data property in the app — conversations, files, messages, chat list — wraps its value in `Lazy<T>`. Accessing `.value` returns whatever was last read. Calling `.wait()` does the full load. Navigation triggers `.reset()`.

**Example usage:**
```typescript
await claude.openProject('Georgia');
const convs = claude.project.conversations;  // Lazy<ProjectConversation[]>
await convs.wait();                           // clicks Show more until done
console.log(convs.value);                     // full list
console.log(convs.loaded);                    // true
```

The exporter becomes trivial:
```typescript
for (const card of claude.projects.cards) {
  await claude.openProject(card.name);
  await claude.project.conversations.wait();
  mapping.push({ conversations: claude.project.conversations.value });
}
```

## Tracks

### Track A — Scoped selectors (Claude + Adam)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Audit all invokeByName calls | Review all 14 calls. Identify which are safe (unique names) and which need scoping. |
| A-2 | Design scoped invocation | Add `invokeInSection()` or `invokeWithin()` to the UIA layer. |
| A-3 | Fix "Show more" in project | Use scoped selector to click the conversation list's "Show more", not the description's. |
| A-4 | Fix other ambiguous selectors | Any other `invokeByName` calls that could hit the wrong target. |

### Track B — Lazy data pattern (Arthur + Claude)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | Design `Lazy<T>` wrapper | TypeScript class with `value`, `loaded`, `wait()`, `reset()`. |
| B-2 | Apply to project conversations | `project.conversations` returns `Lazy<ProjectConversation[]>`. |
| B-3 | Apply to project files | `project.files` returns `Lazy<ProjectFile[]>`. |
| B-4 | Apply to sidebar chat list | `sidebar.chats` items loaded lazily. |
| B-5 | Navigation resets | Navigating away from a page resets its lazy properties. |

### Track C — Re-run capture (Adam)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Update capture script | Use lazy data: `await project.conversations.wait()` instead of `loadAllConversations()`. |
| C-2 | Run against all 20 projects | Verify all projects load fully — no more 30-conversation caps. |
| C-3 | Cross-check against export | Compare captured titles against export conversation names. |

### Track D — Library and retro (All)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Document patterns | Scoped selectors and lazy data patterns in the coding policy or a new book. |
| D-2 | Autobiographies | Sprint reflections, learning from teammates. |

## Constraints

- **No static waits.** Test for the condition you expect.
- **Idempotent scripts.** Start from any state — closed, minimized, wrong tab, wrong page.
- **Smart selectors.** Every interaction scoped to the correct page region.
- **Data stays consistent.** Navigation resets cached data. New conversations trigger refresh.

<!-- citations -->
[coding-policy]: ../../library/coding-policy/.cover.md
[export-format]: ../../library/export-format/.cover.md
