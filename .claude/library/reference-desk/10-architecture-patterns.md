# Architecture Patterns

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The patterns that built this app. Read this before writing or modifying ANY code. These are not suggestions — they are the architectural decisions that make the codebase work. Violating them produces blind, dangerous automation.

## Parts of the app equal objects in the code

Every visible element in Claude Desktop has a corresponding object in the codebase. The sidebar is an object. A conversation in the sidebar is an object. The three-dot menu is an object. Each menu item is an object. The project picker dialog is an object. Each project in the list is an object.

If you're calling `uia.invokeByName('some string')` from a script or component, you're bypassing the object graph. Find the object that represents that UI element. If it doesn't exist, create it. Then call a method on the object.

The object graph mirrors the app:

```
Claude (app)
  ├── Sidebar
  │     ├── ChatList
  │     │     ├── ChatItem → .open() → Conversation
  │     │     │              .menu() → ChatMenu
  │     │     │                          .rename(title)
  │     │     │                          .addToProject() → ProjectPicker
  │     │     │                                              .select(name)
  │     │     │                                              .cancel()
  │     │     │                          .delete()
  │     │     │                          .pin()
  │     │     └── ...
  │     └── Projects, Search, etc.
  ├── Conversation (page)
  │     ├── Breadcrumbs → .projectName, .rename()
  │     ├── Composer → .compose(), .send(), .readDraft(), .clear()
  │     ├── Messages → .readTurns(), .readLastResponse()
  │     └── Streaming → .checkStreaming(), .isResponseComplete()
  ├── Project (page)
  └── ...
```

Each node in this graph is a TypeScript class with async methods. Each method verifies the state of the app before acting.

## Everything is async

Every method that touches the app returns a Promise. Reading is async (the UIA tree may not be ready). Clicking is async (the result may take time). Verifying is async (the state changes asynchronously).

No synchronous assumptions. No `sleep()`. No "it should be ready by now."

## Every object verifies its own state

An object is valid only when the app confirms it. A `ChatMenu` object exists only after the menu is verified open. A `ProjectPicker` object exists only after the dialog is verified visible. A method like `.select(name)` reads back the selection after clicking to confirm it matches.

This is enforced by the return type: `menu()` returns `Promise<ChatMenu>`. The Promise resolves only when the menu is confirmed visible. If the menu didn't open, the Promise rejects. You can't call `.rename()` on a menu that didn't open — because you don't have the object.

## No strings in the component layer

String-based UIA calls (`invokeByName`, `expandByName`, `clickByName`) belong in controllers ONLY. Controllers are the boundary between typed objects and the raw UIA tree. Components and scripts never touch UIA directly.

A script says `chatItem.menu()` — not `uia.expandByName('More options for Finance')`.

## Every action gets a confirmation read

After every action, read the state and confirm it matches your intent. This is not optional. This is not for "dangerous" operations. This is for EVERY action. See [Coding Philosophy](05-coding-philosophy.md#every-action-gets-a-confirmation-read).

The object graph enforces this: each method reads back before returning. `.rename(title)` reads the title after setting it. `.select(project)` reads the selection after clicking. `.open()` reads the URL after navigating. The verification is inside the method, not the caller's responsibility.

## The controller layer

Controllers ([`controllers/`](../../src/controllers/)) are the translation layer between typed objects and raw UIA. Each controller:
- Knows the UIA element names for its domain (hardcoded, not passed as parameters)
- Implements the async state-reading methods
- Implements the action methods with verification
- Returns typed data, not raw strings

Run the [introspect tool](09-codebase-index--introspect.ts) to see all controllers and their methods.

## How to add a new feature

1. Read this chapter
2. Identify which object in the graph this feature belongs to
3. Add a method to that object (or create a new object if it's a new UI element)
4. The method: acts, reads back, verifies, returns the next object or throws
5. The controller: translates between the typed method and raw UIA calls
6. Test: call the method, check the result
7. Update this chapter and the [Reference Desk cover](../reference-desk/.cover.md) with the new method
