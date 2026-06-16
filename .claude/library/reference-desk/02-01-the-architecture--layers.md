# The Architecture — Layers

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The driver has five layers. Dependencies flow strictly downward. A script calls `Claude`. `Claude` delegates to pages and components. Components delegate to controllers. Controllers use infrastructure. Never upward, never sideways between controllers.

```
┌─────────────────────────────────────────────┐
│  Scripts          (src/scripts/*.ts)         │  ← You write these
├─────────────────────────────────────────────┤
│  Claude           (src/claude.ts)            │  ← High-level API
├─────────────────────────────────────────────┤
│  Pages/Components (src/pages/, components/)  │  ← App model
├─────────────────────────────────────────────┤
│  Controllers      (src/controllers/)         │  ← UIA tree interaction
├─────────────────────────────────────────────┤
│  Infrastructure   (gateway, uia, window,     │  ← Platform primitives
│                    keyboard, shell, navigator)│
└─────────────────────────────────────────────┘
```

## Layer 1: Infrastructure

Six classes that talk to the OS. None of them know about Claude-the-app.

| Class | Source | Purpose |
|-------|--------|---------|
| [`Window`](../../src/window.ts) | 215 lines | Find, launch, focus, maximize, minimize, screenshot via Win32 |
| [`Uia`](../../src/uia.ts) | 405 lines | Read the UI Automation tree, invoke elements, read text and URLs |
| [`Keyboard`](../../src/keyboard.ts) | 118 lines | Type text via clipboard, press keys, send key sequences |
| [`Shell`](../../src/shell.ts) | 117 lines | Persistent PowerShell session (12ms per call vs 200ms spawning) |
| [`Gateway`](../../src/gateway.ts) | 121 lines | Retry, poll, timeout — the [async discipline layer](02-02-the-architecture--gateway.md) |
| [`Navigator`](../../src/navigator.ts) | 185 lines | Screen detection state machine, navigation, recovery |

These are bundled into an [`Automation`](../../src/automation.ts) interface and injected into every controller. Controllers never construct infrastructure — they receive it.

```typescript
interface Automation {
  shell: Shell;
  window: Window;
  gateway: Gateway;
  diagnostics: Diagnostics;
  uia: Uia;
  keyboard: Keyboard;
  navigator: Navigator;
}
```

## Layer 2: Controllers

Controllers read and write the UIA tree. Each controller owns one domain of the UI. They return plain data; they never hold state.

| Controller | Source | Domain |
|------------|--------|--------|
| [`ComposerController`](../../src/controllers/composer-controller.ts) | Text input, paste, send button |
| [`ConversationController`](../../src/controllers/conversation-controller.ts) | Read messages, turns, title; rename; delete; wait for response |
| [`ProjectController`](../../src/controllers/project-controller.ts) | Project name, files, instructions, conversations |
| [`ProjectsController`](../../src/controllers/projects-controller.ts) | List projects, open project, create project |
| [`SidebarController`](../../src/controllers/sidebar-controller.ts) | Navigation buttons, search, new chat |
| [`ChatListController`](../../src/controllers/chat-list-controller.ts) | Ordered conversation list, open/rename/delete/pin |
| [`ModelPickerController`](../../src/controllers/model-picker-controller.ts) | Model selection, thinking mode |
| [`ArtifactPanelController`](../../src/controllers/artifact-panel-controller.ts) | Artifact list, content reading |
| [`ComposedMessageController`](../../src/controllers/composed-message-controller.ts) | Message being typed: text, attachments |

## Layer 3: Pages and Components

Pages are the high-level views — what screen you're on. Components are reusable pieces that appear across pages.

**Pages** (exactly one active at a time):

| Page | Source | What it represents |
|------|--------|--------------------|
| [`Home`](../../src/pages/home.ts) | The default screen with greeting and composer |
| [`Conversation`](../../src/pages/conversation.ts) | An open chat with messages, turns, streaming state |
| [`Projects`](../../src/pages/projects.ts) | The project grid with cards |
| [`Project`](../../src/pages/project.ts) | A single project's detail page |

**Components** (reusable, appear in multiple pages):

| Component | Source | What it does |
|-----------|--------|--------------|
| [`Composer`](../../src/components/composer.ts) | The text input area — type, paste, compose, send |
| [`Sidebar`](../../src/components/sidebar.ts) | Left panel with navigation and chat list |
| [`ChatList`](../../src/components/chat-list.ts) | Ordered list of conversations |
| [`Message`](../../src/components/message.ts) | The message being composed: text + attachments |
| [`ModelPicker`](../../src/components/model-picker.ts) | Model and thinking mode selector |
| [`ArtifactPanel`](../../src/components/artifact-panel.ts) | Slide-out panel for generated content |

## Layer 4: Claude

The [`Claude`](../../src/claude.ts) class is the single entry point. It wires everything together in its constructor — no external assembly required.

```typescript
import { Claude } from './claude.ts';
const app = new Claude();
await app.launch();
```

The class exposes high-level operations that compose pages, components, and controllers. `app.openProject('Physics')` navigates to the projects page, finds the card, clicks it, waits for the project page, and refreshes the project data. One call, five layers of work.

## Layer 5: Scripts

Scripts import `Claude` and describe what to do. They are the user-facing layer. A well-written script reads like a procedure a human would follow:

```typescript
const app = new Claude();
await app.launch();
await app.openProject('DNA Patternity');
const response = await app.say('What do you know about this project?');
console.log(response);
```

If this feels hard to write, the layers below need to change. Scripts should never reach into controllers or infrastructure directly. If a script needs something the `Claude` class doesn't expose, add it to `Claude` — don't bypass the stack.
