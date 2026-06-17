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

## MVC — Model, View, Controller

The codebase follows MVC. The layers are distinct and must not be conflated.

**Model** — plain data types. `ThoughtState`, `CatalogueEntry`, `ChatItem` as `{ title, index }`, `Turn`, `Response`. No methods that touch the app. Just data about what we know.

**Controller** ([`controllers/`](../../src/controllers/)) — the UIA layer. Talks to the raw app. Reads elements, clicks buttons, types text. Returns DATA about what it sees. Each controller:
- Knows the UIA element names for its domain (hardcoded)
- Does low-level UIA operations (expand, invoke, click, read)
- Has its own checks at the UIA level ("I clicked and something appeared")
- Returns raw data, not View objects

**View** ([`components/`](../../src/components/), [`pages/`](../../src/pages/), [`claude.ts`](../../src/claude.ts)) — the object graph. Typed objects that represent what's on screen. Each View object:
- Calls Controller methods to read data and perform actions
- Verifies the data represents a valid state before constructing the next object
- Returns typed objects to the caller — the object's existence IS the guarantee of state
- Never touches UIA directly

The flow: View calls Controller → Controller does UIA → Controller returns data → View verifies → View constructs the next typed object → returns to caller.

```
caller: chatItem.menu()
  View (ChatList):  calls controller.expandMenu(title)
  Controller:       does UIA expand, reads menu items, returns string[]
  View (ChatList):  checks that expected items are present
  View (ChatList):  constructs ChatMenu object from verified data
  return:           ChatMenu (the object's existence = menu is open and valid)
```

The Controller catches UIA failures ("expand didn't work"). The View catches semantic failures ("the menu opened but doesn't have the items I expected"). Two levels of verification.

Run the [introspect tool](09-codebase-index--introspect.ts) to see all controllers and their methods.

## How to add a new feature

1. Read this chapter
2. Identify which View object this feature belongs to
3. Add a method to the View object
4. The View method: calls Controller, reads data, verifies, returns the next View object or throws
5. If the Controller needs new UIA operations, add them to the Controller — they return data, not View objects
6. Test: call the View method, verify the result object
7. Update this chapter and the [Reference Desk cover](.cover.md)
