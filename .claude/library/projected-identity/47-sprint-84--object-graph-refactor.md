# Sprint 84 — Object Graph Refactor

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The app throws string commands at UIA. It should model the application as an object graph where every UI element is a typed object with async methods that verify their own state. No strings. No blind commands. Every object knows what it is and can check its own state.

## Sprint goal

**Every interaction goes through typed objects that verify their state. ChatItem has .menu(). Menu has .addToProject(). ProjectPicker has .select(). Each returns the next object in the chain. No string-based UIA calls in the component or script layer.**

## The current architecture

```
Scripts → Claude class → Components (thin) → Controllers (string UIA calls)
```

Components like ChatList return `{ title, index }` — plain data. Operations like rename and addToProject live on the controller as methods that take string titles. The controller calls `uia.expandByName(string)`, `uia.invoke(type, string)` — all string-based, all blind.

## The target architecture

```
Scripts → Claude class → Components (rich objects) → Controllers (verified state)
```

A ChatItem should be:
```typescript
interface ChatItem {
  title: string;
  index: number;
  async open(): Promise<Conversation>;
  async menu(): Promise<ChatMenu>;
}

interface ChatMenu {
  async rename(newTitle: string): Promise<void>;
  async addToProject(): Promise<ProjectPicker>;
  async delete(): Promise<void>;
  async pin(): Promise<void>;
}

interface ProjectPicker {
  projects: string[];
  async select(projectName: string): Promise<void>;
  async cancel(): Promise<void>;
}
```

Each method returns the next object in the chain. Each object verifies its own state. `menu()` returns a ChatMenu only after confirming the menu is visible. `addToProject()` returns a ProjectPicker only after confirming the dialog opened. `select()` verifies the selection before confirming.

## Stories

| ID | Story | Owner |
|----|-------|-------|
| S1 | Design the typed object interfaces for ChatItem, ChatMenu, ProjectPicker, Conversation breadcrumbs | Arthur + Claude |
| S2 | Implement ChatItem as a rich object with menu(), open() | Adam |
| S3 | Implement ChatMenu with rename(), addToProject(), delete(), pin() — each returning the next object | Adam |
| S4 | Implement ProjectPicker with select(), cancel() — verifies selection | Adam |
| S5 | Implement conversation breadcrumb reading as typed object — project name, rename dropdown | Adam |
| S6 | Remove all string-based UIA calls from the component layer | Adam |
| S7 | Remove gateway.act retries from chat-list-controller | Adam |
| S8 | Test: rename Finance → Financial Analysis using the object chain | Adam |
| S9 | Test: add to Claude project using the object chain | Adam |
| S10 | Update Reference Desk with the object graph architecture | Claude |
| S11 | Validate, push | Adam |

## The principle

Doug: "You aren't using the app. Get the sidebar object. That has conversations. Those have options. You choose one. You get a modal. Everything is async. Everything validates its own state."

Every action gets a confirmation read. Not sometimes — always. The object graph enforces this: you can't get a ProjectPicker without the dialog being verified open. You can't select a project without the selection being verified. The types ARE the verification.
