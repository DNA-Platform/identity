# Sprint 84 — Object Graph Refactor

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Full architectural refactor. The codebase follows MVC: Controllers do UIA and return data, the View builds typed objects with verified state, the gateway converts blind actions into tested ones. This sprint makes it consistent throughout.

**Read [Architecture Patterns](../reference-desk/10-architecture-patterns.md) before starting any work.**

## Sprint goal

**Every Controller method does one thing (read or act). Every View method chains Controller calls and returns verified typed objects. gateway.act (blind retries) removed. The whole codebase follows the same pattern.**

## Phase 1: Audit

Inventory every Controller method. Classify as:
- **Sensor (read)** — reads UIA state, returns data. Quick, harmless, pollable.
- **Actuator (act)** — performs one UIA operation. Fire once.
- **Mixed (needs splitting)** — does multiple things, needs refactoring.

| Controller | Owner | Status |
|------------|-------|--------|
| `chat-list-controller` | Adam | — |
| `conversation-controller` | Adam | — |
| `composer-controller` | Adam | — |
| `composed-message-controller` | Adam | — |
| `sidebar-controller` | Adam | — |
| `project-controller` | Adam | — |
| `projects-controller` | Adam | — |
| `model-picker-controller` | Adam | — |
| `artifact-panel-controller` | Adam | — |

Document findings in the [Codebase Index](../reference-desk/09-codebase-index.md) or a new Reference Desk chapter.

## Phase 2: Controller refactor

Split mixed methods into sensor/actuator pairs. For each Controller:

**chat-list-controller** — the worst offender:
- Split `addToProject(title, projectName)` into: `expandMenu(title)`, `isMenuVisible()`, `readMenuItems()`, `clickMenuItem(name)`, `isDialogVisible()`, `readProjectList()`, `clickProject(name)`, `closeDialog()`
- Split `rename(title, newTitle)` into: `expandMenu(title)`, `clickMenuItem('Rename')`, `isRenameFieldActive()`, `typeInField(text)`, `confirmRename()`
- Remove `gateway.act` — replace with single action + `gateway.waitFor(sensor)`
- Remove all `setTimeout` pauses

**conversation-controller** — mostly clean, fix:
- `waitForResponse` — replace `gateway.waitFor` internal retries with the View polling pattern
- `scrollToBottom` — already good (act + verify button gone)
- Add: `readBreadcrumbProject()`, `readBreadcrumbTitle()` as explicit sensor methods

**composer-controller** — needs:
- `isFieldFocused()` sensor
- `readFieldContent()` sensor
- Remove blind `selectAll` — verify field is focused first

**All controllers** — universal rules:
- Every actuator returns boolean (did the UIA call succeed?)
- Every sensor returns typed data
- No `gateway.act` — only `gateway.waitFor` for polling
- No `setTimeout` — ever
- UIA element names hardcoded in the controller, never passed as parameters from View

## Phase 3: View refactor

Build the typed object graph in the component layer:

**ChatItem** — `menu(): Promise<ChatMenu>`, `open(): Promise<void>`
**ChatMenu** — `rename(title): Promise<void>`, `addToProject(): Promise<ProjectPicker>`, `delete(): Promise<void>`, `pin(): Promise<void>`, `close(): Promise<void>`
**ProjectPicker** — `projects: string[]`, `select(name): Promise<void>`, `has(name): boolean`, `cancel(): Promise<void>`
**ConversationBreadcrumb** — `projectName: string | null`, `title: string`, `rename(title): Promise<void>`

Each View method: calls Controller actuator ONCE → polls Controller sensor via `gateway.waitFor` → reads data via Controller sensor → constructs next View object → returns it.

## Phase 4: Remove gateway.act

Replace every `gateway.act(action, verify)` with:
```typescript
await action();                              // fire once
await gateway.waitFor(() => verify());       // poll the read
```

The verify function is always a Controller sensor — quick, harmless, pollable.

## Phase 5: Documentation

- Update [Architecture Patterns](../reference-desk/10-architecture-patterns.md) with the sensor/actuator inventory
- Update [Coding Philosophy](../reference-desk/05-coding-philosophy.md) with the gateway framerate principle
- Update each operations chapter (Sending, Reading, Projects, Sessions) with the new View interfaces
- Update the [Codebase Index](../reference-desk/09-codebase-index.md) with the audit results

## Phase 6: Test

- Rename Finance → Financial Analysis using the object chain: `chatItem.menu().then(m => m.rename('Financial Analysis'))`
- Add to Claude project using the object chain: `chatItem.menu().then(m => m.addToProject()).then(p => p.select('Claude'))`
- Verify via breadcrumbs: `conversation.readProjectName() === 'Claude'`
- Run all validators: 0 broken links

## Team

| Agent | Role | Scope |
|-------|------|-------|
| Adam | Automation Engineer | Controller audit, Controller refactor, gateway.act removal |
| Arthur | Architect | View interface design, MVC enforcement |
| Claude | Environmentalist | Reference Desk documentation, architecture patterns |
| Queenie | QA Engineer | Test contracts for every Controller method |

## Definition of done

- Every Controller method is classified as sensor or actuator
- No `gateway.act` in the codebase
- No `setTimeout` in Controllers
- ChatItem, ChatMenu, ProjectPicker exist as typed View objects
- Rename and addToProject work through the object chain
- Reference Desk Architecture Patterns documents the full sensor/actuator inventory
- 0 broken links
