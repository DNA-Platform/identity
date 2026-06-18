# The Architecture — Layers

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Three layers. Strict boundaries. Each layer talks only to the one below it.

```
┌─────────────────────────────────────────────────────────────┐
│  Scripts                                                     │
│  Import the Claude class. Use View objects. Never touch      │
│  controllers or UIA. Read like a human using the app.        │
├─────────────────────────────────────────────────────────────┤
│  View Layer (Pages, Components, Item objects)                │
│  The app on screen. Typed objects for everything visible.    │
│  Navigation returns the next page object. Every method       │
│  goes through the Gateway before calling down.               │
│  ONLY layer that uses the Gateway.                           │
├──────────────────── GATEWAY ────────────────────────────────┤
│  The bridge. Checks foreground. Fires action once.           │
│  Polls verify. Every View→Controller call crosses here.      │
├─────────────────────────────────────────────────────────────┤
│  Controllers                                                 │
│  Blind UIA executors. Raw sensors and actuators.             │
│  No gateway. No foreground checks. No state awareness.       │
│  Called ONLY by the View layer through the Gateway.          │
├─────────────────────────────────────────────────────────────┤
│  Infrastructure (UIA, Shell, Window, Keyboard)               │
│  OS primitives. No app knowledge. No checks.                 │
│  Called ONLY by controllers.                                  │
└─────────────────────────────────────────────────────────────┘
```

## Layer 1: Infrastructure

Six classes that talk to the OS. None know about Claude Desktop. None check foreground. None verify results.

| Class | Purpose |
|-------|---------|
| [`Window`](../../src/window.ts) | Find, launch, focus, maximize, minimize, screenshot via Win32 |
| [`Uia`](../../src/uia.ts) | Read the accessibility tree, invoke elements, read text and URLs |
| [`Keyboard`](../../src/keyboard.ts) | Type text, press keys, keyboard shortcuts |
| [`Shell`](../../src/shell.ts) | Persistent PowerShell session, 12ms per call |
| [`Diagnostics`](../../src/diagnostics.ts) | Screenshots and UIA dumps on failure |
| [`Navigator`](../../src/navigator.ts) | Screen detection from URL |

These are bundled into the [`Automation`](../../src/automation.ts) interface and injected into controllers.

## Layer 2: Controllers

Controllers are blind UIA executors. They do ONE thing: translate a named operation into UIA calls. They are **sensors** (read something) and **actuators** (do something). Nothing else.

**Controllers do NOT:**
- Use the gateway
- Check if the app is foreground
- Verify that an action worked
- Know what screen the app is on
- Orchestrate multi-step sequences

**Controllers DO:**
- Read UIA elements and return data
- Click UIA elements
- Type text into UIA elements
- Return boolean (did the click happen?) or data (what did the read find?)

A controller is like server-side code behind an API. The View layer is the client. Scripts never call controllers — that would be like a browser user calling your server code directly.

**The sensor/actuator pattern:**

```typescript
// Sensor — reads the UIA tree, returns data
async isMenuVisible(): Promise<boolean> {
  return this.auto.uia.exists('MenuItem', 'Rename');
}

// Actuator — does one UIA action, returns whether it fired
async clickRename(): Promise<boolean> {
  return this.auto.uia.invoke('MenuItem', 'Rename');
}
```

No gateway. No retry. No verify. Just the raw UIA call.

| Controller | Domain |
|------------|--------|
| [`ChatListController`](../../src/controllers/chat-list-controller.ts) | Sidebar conversations — read list, click items, expand menus |
| [`ComposerController`](../../src/controllers/composer-controller.ts) | Text input — type, paste, click Send |
| [`ConversationController`](../../src/controllers/conversation-controller.ts) | Messages — read turns, read response, scroll |
| [`ProjectController`](../../src/controllers/project-controller.ts) | Project page — read name, instructions, files |
| [`ProjectsController`](../../src/controllers/projects-controller.ts) | Projects grid — read cards, click cards |
| [`SidebarController`](../../src/controllers/sidebar-controller.ts) | Sidebar navigation — click Projects, New Chat, search |
| [`ModelPickerController`](../../src/controllers/model-picker-controller.ts) | Model selection |
| [`ArtifactPanelController`](../../src/controllers/artifact-panel-controller.ts) | Artifact panel |
| [`MessageController`](../../src/controllers/composed-message-controller.ts) | Message being composed |

### Implementation note: cleaning controllers

Currently 8 of 9 controllers use the gateway internally (`auto.gateway.act()`, `auto.gateway.read()`). This is WRONG. The gateway belongs in the View layer. Controllers should be pure sensors and actuators. The `ChatListController` is the model — it was cleaned in Sprint 84. The other 8 need the same treatment:

1. Every `gateway.act(action, verify)` in a controller becomes: the actuator (action) stays in the controller, the verify moves to the View.
2. Every `gateway.read(reader, validator)` in a controller becomes: the reader stays in the controller, the polling moves to the View.
3. Every `gateway.waitFor(predicate)` in a controller moves entirely to the View.

The controller's `send()` method should be: click the Send button. That's it. The View wraps it: gateway.act(controller.clickSend, controller.hasNewContent).

## The Gateway

The gateway sits BETWEEN the View and the Controllers. It is the bridge. Every View→Controller call crosses it.

Three operations:
- **`act(action, verify)`** — check foreground, fire the action once (calls a controller actuator), poll the verify (calls a controller sensor). If verify fails, throw with diagnostics.
- **`waitFor(predicate)`** — check foreground, poll a predicate (calls a controller sensor) with tapering backoff.
- **`read(reader, validator)`** — check foreground, poll a reader (calls a controller sensor) until it returns valid data.

The gateway checks `isForeground()` on every call. If the app is not visible, it throws: "App is not visible. Call app.window.maximize() first." This is the ONLY place foreground is checked. Not in UIA. Not in controllers. Not duplicated.

## Layer 3: View

The View layer IS the app on screen. Every visible thing is a typed object. Every action is a parameterless method. Navigation returns the next object. Objects can only be used on the screen they represent.

### Pages

```
Page (abstract)
├── HomePage
├── ConversationPage
├── ProjectsListPage
└── ProjectDetailPage
```

Each page is constructed AFTER navigation completes, from what's on screen. The page reads its content during construction. You can't have a ProjectsListPage without being on the projects screen.

### The Sidebar

One class. Always visible. Same on every screen. It's a property of the app, not of any page.

```typescript
class Sidebar {
  conversations: ConversationItem[]  // read from "More options for X" buttons
  newChat(): void                    // click the New Chat button
  openProjects(): void               // click the Projects button
  search(query: string): void        // type in the search box
  refresh(): Promise<void>           // re-read the conversation list
}
```

After `openProjects()`, the caller constructs a `ProjectsListPage` from the new screen.

### Item objects

Items in lists. Each has a name (from the UIA tree) and actions.

```typescript
class ConversationItem {
  title: string                       // from "More options for X" button
  open(): Promise<void>               // click the item → screen changes
  menu(): Promise<ConversationMenu>   // click three-dot → menu appears
}

class ProjectItem {
  name: string                        // from ListItem element
  open(): Promise<void>               // click the card → screen changes
}
```

`open()` on an item uses the gateway: act(click the item, verify the screen changed). The item's name came from the UIA tree — so we KNOW it's there.

### Composer

```typescript
class Composer {
  type(text: string): Promise<void>   // put text in the text box
  clear(): Promise<void>              // clear the text box
  readDraft(): Promise<string>        // read what's in the box
  send(): Promise<void>               // click the Send button
  attach(): Promise<void>             // click the attach button
}
```

`type(text)` is the ONLY method that takes a string — because typing IS putting text into a visible text box. `send()` is parameterless — click the button.

`send()` uses the gateway: act(click Send, verify text grew on page). The text-growth check compares page text length before and after — new content means Desktop acknowledged.

`clear()` checks for user typing first (stability check) — three consecutive identical reads means stable.

### Menus and Pickers

```typescript
class ConversationMenu {
  items: string[]
  rename(): Promise<void>     // click Rename → inline edit field
  delete(): Promise<void>     // click Delete
  pin(): Promise<void>        // click Pin
  addToProject(): Promise<ProjectPicker>  // click → picker appears
  close(): Promise<void>      // press Escape
}

class ProjectPicker {
  items: ProjectPickerItem[]
  cancel(): Promise<void>
}

class ProjectPickerItem {
  name: string
  select(): Promise<void>     // click this project → dialog closes
}
```

Every method is parameterless. The item knows its own name. `select()` doesn't take a project name — the item IS the project.

### Response and Message objects

```typescript
class Response {
  text: string                // the response text — grows during streaming
  isComplete: boolean         // text stopped growing AND completion marker present
  hasContent: boolean         // any text exists (thinking block or response)
}

class Message {
  text: string
  role: 'user' | 'assistant'
  thinkingBlock: ThinkingBlock | null
  copy(): Promise<string>
  retry(): Promise<void>
}

class ThinkingBlock {
  summary: string             // the label on the collapsed block
  expand(): Promise<string>   // click to expand, returns thinking text
}
```

## How a script reads

A script using this architecture:

```typescript
const app = new Claude();
await app.launch();                                    // app visible, foreground verified

// Navigate to Claude project
app.sidebar.openProjects();                            // click Projects button
const projectsPage = new ProjectsListPage(app);        // read project list from screen
const claude = projectsPage.projects.find('Claude');    // find in list
await claude.open();                                    // click → navigates to project page
const projectPage = new ProjectDetailPage(app);         // read project from screen
const test = projectPage.conversations.find('Test');    // find in project conversation list
await test.open();                                      // click → navigates to conversation

// Type and send
await app.conversation.composer.type('What is sheaf cohomology?');
await app.conversation.composer.send();                 // click Send, verify text grew

// Wait for response to finish (text stops growing)
// ... gateway.waitFor(text stabilized AND completion marker present) ...

// Read
const response = await app.conversation.readLastResponse();
console.log(response);

app.window.minimize();
```

Every line is a mouse-and-keyboard action. Every object represents something visible. The gateway checks foreground on every call. Controllers are never touched. Navigation goes through objects. Nothing is skipped.

## Implementation plan

### Files to create
- `src/pages/page.ts` — abstract Page base class
- Pages already exist but need refactoring to match this spec

### Files to refactor
- `src/claude.ts` — DONE (Sprint 89, stripped to window + sidebar + page objects)
- `src/controllers/*.ts` — remove all gateway usage, make pure sensors/actuators
- `src/components/composer.ts` — move `waitForUserToStopTyping` into `clear()`, remove gateway from controller
- `src/components/chat-list.ts` — already clean (Sprint 84 pattern)
- `src/pages/conversation.ts` — add text-growth send verify, text-stabilization response wait
- `src/pages/projects-grid.ts` — already uses ListItem reading
- `src/pages/project-detail.ts` — already uses ListItem reading

### Controller cleanup order (by priority for /think)
1. `ComposerController` — remove gateway.act from send(). Make it: click Send button, return boolean.
2. `ConversationController` — remove gateway.waitFor from waitForResponse(). Make sensors: readText(), hasThinkingBlock(), isResponseComplete(). The View does the waiting.
3. `SidebarController` — remove gateway.act from navigation methods. Make actuators: clickProjects(), clickNewChat(). The View verifies navigation.
4. `ChatListController` — already clean.
5. Rest as needed.

### What to verify after refactor
- Gateway.act/waitFor/read all check foreground ✓ (already done)
- No controller imports Gateway
- No controller calls gateway.act/waitFor/read
- All View methods use gateway for controller calls
- Window.maximize() verifies it worked ✓ (already done)
- Every action has a verify
- Every list is read from UIA elements, not parsed from text
