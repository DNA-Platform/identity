# Architecture Patterns

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

## The one rule

**If you can't do it with a mouse and keyboard, it can't be in the app.**

Every method in the View layer must correspond to something a human can do while sitting in front of the screen. Click a button. Type text into a text box. Press Enter. Press Escape. Scroll down. Read what's on screen. That's the complete list of actions.

If a method takes a parameter that isn't text being typed into a visible text box, the method is wrong. If a method navigates to a screen without the user clicking through each intermediate screen, the method is wrong. If a method works when the app isn't visible, the method is wrong. If a method combines multiple user actions into one call, the method is wrong.

This is not a guideline. This is the test for whether code belongs in the app. Every method. Every parameter. Every return value. Can the human do this? Then the code can do it. Can't the human do it? Then the code can't either.

## Why

A GUI is stateful. You are somewhere. You can only do what you can see. You can't skip screens. You can't invoke things that aren't visible. You can't interact with a minimized window. The code must enforce the same constraints the GUI enforces, because the code IS driving the GUI. If the code can do things the GUI doesn't allow, the code will fail — not loudly, not immediately, but by being in a state the GUI never intended, where nothing works and the errors are cryptic.

The object model protects the code from itself. If you can only call `.open()` on a `ProjectItem` you got from a list you read from a screen you navigated to, then you KNOW the project exists and you KNOW you're on the right screen. The types enforce the navigation. The types enforce the state. You can't make a mistake the GUI wouldn't let you make.

## The class hierarchy

```
App
├── window: Window
│     maximize(), minimize(), launch(), exit(), screenshot()
│     isForeground() — everything refuses to work if this is false
│
├── sidebar: Sidebar (always visible on every screen)
│     conversations: ConversationItem[]
│     newChat() → navigates to home
│     openProjects() → ProjectsListPage
│     search(query) — types in the search box
│
└── (current page — one of:)

    HomePage extends Page
    ├── composer: Composer
    └── (sending from here creates a new conversation)

    ConversationPage extends Page
    ├── title: string
    ├── projectName: string | null
    ├── composer: Composer
    ├── messages: Message[]
    ├── response: Response (current/latest, grows during streaming)
    ├── scrollToBottom()
    └── readLastResponse(): string

    ProjectsListPage extends Page
    └── projects: ProjectItem[]
          find(name) → ProjectItem | undefined

    ProjectDetailPage extends Page
    ├── name: string
    ├── instructions: string
    ├── files: ProjectFile[]
    ├── conversations: ConversationItem[]
    └── composer: Composer
```

## Every noun is a class

| What you see | Class | What you can do with it |
|---|---|---|
| The window | `Window` | maximize, minimize, launch, exit, screenshot |
| The sidebar | `Sidebar` | access conversations, click New Chat, click Projects |
| A conversation in the sidebar | `ConversationItem` | open() → ConversationPage, menu() → ConversationMenu |
| The three-dot menu | `ConversationMenu` | rename(), delete(), pin(), addToProject() → ProjectPicker |
| The project picker dialog | `ProjectPicker` | items (list of ProjectPickerItem), cancel() |
| A project in the picker | `ProjectPickerItem` | select() — parameterless, clicks this one |
| A project in the list | `ProjectItem` | name, open() → ProjectDetailPage |
| A conversation in a project | `ConversationItem` | same class as sidebar items |
| The text input | `Composer` | type(text), clear(), readDraft(), send(), attach() |
| A message | `Message` | text, role, copy(), retry() |
| The thinking block | `ThinkingBlock` | summary, expand() |
| The streaming response | `Response` | text (grows), isComplete |

## Every action is parameterless (except typing)

A human clicks a button. The click has no parameter. The button knows what it does.

- `item.open()` — not `openChat('Test')`. The item already knows its name.
- `menu.rename()` — opens the inline edit field. You then type the new name into it.
- `pickerItem.select()` — not `picker.select('Claude')`. The item IS Claude.
- `composer.send()` — clicks the Send button. No text parameter. You already typed it.
- `composer.type(text)` — the ONE exception. Typing IS putting text into a text box.

Methods that take names, IDs, or navigation targets are API patterns. They don't exist in a GUI. You find the thing in a list, you click it.

## Navigation returns the next page

Clicking something that changes the screen returns the new page object.

```typescript
const projects = await app.sidebar.openProjects();   // → ProjectsListPage
const claude = projects.find('Claude');               // → ProjectItem | undefined
const detail = await claude.open();                   // → ProjectDetailPage
const test = detail.conversations.find('Test');       // → ConversationItem | undefined
const conv = await test.open();                       // → ConversationPage
```

If `find()` returns undefined, the thing isn't on screen. That's not a bug — it's the app telling you it's not there. You can't click what doesn't exist.

## The app must be visible

Nothing works if the window isn't foreground. Not reads. Not clicks. Not polls. The gateway enforces `requireForeground()` on every operation. If the app is minimized, you get an error. You have to `app.window.maximize()` first — that's YOUR action, not something the app does for you.

## Every action verifies itself

Opening a project:
1. You have a `ProjectItem` because it was in the list — verified by construction.
2. `open()` clicks it — then verifies the screen changed to a project page.
3. The `ProjectDetailPage` is constructed from what's now on screen — verified by reading.

If any step fails, you get an error with context. Not a silent wrong state.

## The Composer

One class. Appears on Home, Conversation, and ProjectDetail pages. Same text box, same buttons.

- `type(text)` — put text in the box. The ONLY method that takes a string parameter.
- `clear()` — clear the box. Checks if someone else is typing first (stability check).
- `readDraft()` — read what's in the box.
- `send()` — click the Send button. Verifies that new content appeared (text grew).
- `attach()` — click the attach button.

The Composer doesn't know what page it's on. It types and clicks. The page determines what happens next — Home creates a new conversation, Conversation adds a message, ProjectDetail creates a project conversation.

## The Sidebar

One class. Always visible. Same on every screen.

- `conversations` — list of `ConversationItem` objects, read from "More options for X" buttons.
- `newChat()` — clicks the New Chat button.
- `openProjects()` — clicks the Projects button, returns `ProjectsListPage`.
- `search(query)` — types in the search box, list updates.

## What does NOT exist

No methods that take navigation targets as parameters:
- ~~`openProject('Claude')`~~ — find the ProjectItem, call item.open()
- ~~`openChat('Test')`~~ — find the ConversationItem, call item.open()
- ~~`openConversationById(id)`~~ — IDs aren't visible, use titles
- ~~`say(text, timeout)`~~ — type, then send, then wait, then read. Four actions.
- ~~`sendAsync()`~~ / ~~`sendAndForget()`~~ / ~~`sendMessage(text)`~~ — one send button, one click
- ~~`renameChat(title, newTitle)`~~ — find the item, open its menu, click rename, type
- ~~`startSession(options)`~~ — not a GUI concept

No methods that skip screens:
- ~~`openProjectConversation('Claude', 'Test')`~~ — navigate projects → find Claude → open → find Test → open

No methods that work when the app isn't visible.

## The controller layer

Controllers read the UIA tree and return data. They're the ONLY code that touches UIA. They handle the messy string matching, element finding, and PowerShell calls. The View objects (pages, items, menus) call controllers and get back typed data. Scripts call View objects and get back verified state.

The controllers stay. The View layer above them is what this chapter specifies. The controllers are the implementation. The View is the interface.
