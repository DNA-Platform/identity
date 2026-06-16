# The App Model

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The app model is how you think about the Claude Desktop app when you write code against it. This chapter describes the abstract shape — the patterns that survive app updates. The specific classes change; these principles don't. Source: coding policy ch 5, [Sprint 40](../projected-research/08-sprint-40--smart-selectors-and-lazy-data.md), [Sprint 41](../projected-research/09-sprint-41--the-stateful-app.md).

## Active page

At any moment, exactly one page is active. The [`Navigator`](02-03-the-architecture--navigation.md) tracks which one through URL detection. Data access is tied to the active page — trying to read project files from the home screen is a `WrongScreenError`.

```typescript
app.navigator.screen  // 'home' | 'conversation' | 'projects' | 'project' | 'settings' | 'customize' | 'unknown'
```

Each screen should have its own detection test. The URL-based detection in [`navigator.ts`](../../src/navigator.ts) works for the current app version, but URLs change when Anthropic updates the app. When a screen detection fails, update `screenFromUrl()` — the app is the source of truth.

## Lazy data

Paginated data wraps in `Lazy<T>`. Access `.value` for the cache. Call `.wait()` to load all pages. Call `.reset()` on navigation.

```typescript
const convs = project.conversations;  // Lazy<ProjectConversation[]>
convs.value                           // whatever is loaded
await convs.wait();                   // clicks "Show more" until done
convs.value                           // full list
```

Mutations (new conversation, file upload) call `.reset()` to invalidate the cache. This is NOT privileged state — the cache is a performance optimization, and `reset()` + `wait()` always rebuilds from the tree.

## Idempotent scripts

Scripts that drive the app must work from any starting state: closed, minimized, wrong tab, wrong page. Start with:

```typescript
await app.launch();    // finds existing or launches new
await app.resetToHome();  // recovers from any state
```

Then navigate to where you need to be. `resetToHome()` is the universal recovery — it closes dialogs, leaves settings, and navigates home. If `resetToHome()` fails, the app is in an unknown state and the script should minimize and abort.

## When the model is wrong

The app changes. A button gets renamed. A URL pattern shifts. A dialog's accessible name changes. When this happens:

1. The [gateway](02-02-the-architecture--gateway.md) catches it — a readiness check fails
2. Take a screenshot and read the UIA tree to see what changed
3. Update the model code (controller, navigator, component) to match the new app
4. Update the book chapter that documents the changed behavior
5. Run the tests to verify the fix

This is normal. The codebase is a living model of a living app. See [Pitfalls](07-pitfalls.md) for specific examples.
