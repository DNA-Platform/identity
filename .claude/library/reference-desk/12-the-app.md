# The App

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

What Claude Desktop looks like. Every noun in this chapter is a class in the code. Every action is a method. This is the specification the [code](../../src/) implements. If the code doesn't match what's described here, the code is wrong.

> **Reconciled to the built code.** The object mapping below now names the classes that actually ship in [`.claude/src/`](../../src/), verified against the source. It carried the pre-redesign names (`ChatItem`, `ProjectCard`, `ChatList`) for six sprints after [Sprint 92](../projected-identity/61-sprint-92--the-driver-live.md) landed, because the migration note promising reconciliation "as Sprint 92 lands" outlived the sprint that was supposed to honour it. A promise to reconcile later is not a reconciliation; if you write one, it is a debt, and this is what it looks like unpaid.

The code mirrors the app. The app has screens. Each screen has things on it. Each thing is an object with properties and actions. Navigation between screens returns new objects. You can only call methods for the screen you're on because you only have that screen's object.

## The window

Claude Desktop is a single window divided into a **sidebar** on the left and a **main area** on the right. The sidebar stays visible on every screen. The main area changes depending on where you are.

## The sidebar

The sidebar is a vertical panel present on every screen. From top to bottom:

**Mode tabs** — Chat, Cowork, Code. Small buttons in a row. Pure actions.

**New Chat button** — starts a fresh conversation. Pure action.

**Projects button** — navigates to the projects grid. Pure action.

**Conversation list** — labeled "Recents." A scrollable list of conversations. Each conversation is a **ConversationListItem**: it has a title, and on hover a **three-dot button** appears ("More options for [title]"). Clicking the item opens the conversation. Clicking the three-dot button opens a **ConversationMenu** with items: Pin, Rename, Delete, and either "Add to project" / "Projects" (if not in a project) or "Change project" / "Remove from project" (if in one). Clicking Rename makes the title editable inline. Clicking Delete shows a confirmation. Clicking "Add to project" opens the **Move chat** dialog (`MoveConversationModal`) — a list of projects *plus* a search bar, not a one-shot picker.

**View All button** — expands the conversation list if more exist. Pure action.

**User profile** — name, avatar. Not interactive for our purposes.

The sidebar conversation list shows the same items on almost every screen — home, conversation, projects grid, project detail. The items are the same objects regardless of which screen you're on.

## Home screen

The main area when you first open the app or click New Chat.

**Greeting** — text like "How can I help you today?"

**Suggestion pills** — quick-start topics (Write, Learn, Code, Life stuff). Buttons.

**Composer** — the text input for typing messages. Has placeholder text. Contains: an **attach button** for files, the **model picker** (shows current model, click to change), a **voice button**, and a **send button** (appears when text is present). The composer is a shared component — it appears on Home, Project Detail, and Conversation screens.

Sending from Home creates a new conversation and navigates there. The home screen is replaced by a conversation screen.

## Conversation screen

The main area when viewing a conversation.

**Title bar** — conversation name (clickable to rename). If in a project, a **project breadcrumb** appears showing the project name (clickable to go to the project page).

**Message list** — scrollable vertical list of messages. Each **Message** has:
- Text content
- Timestamp
- Role (user or assistant)
- Action buttons on hover: Edit, Copy (user messages); Copy, Read aloud, Like, Dislike, Retry (assistant messages)

When Claude is responding, the newest assistant message builds in real time:

1. A **ThinkingBlock** appears — a collapsible element. During active thinking it's labeled "Thinking." After thinking completes, the label becomes a **thinking summary** sentence. The thinking block is permanent — it stays after the response is done. It can be expanded to see full thinking text.

2. **Response text** streams in — words appearing progressively. During streaming, a **Stop button** ("Stop response") appears. When streaming finishes, the stop button disappears and "Claude finished the response" appears.

The response text and thinking block are permanent content. The streaming indicator ("Claude is responding") and stop button are transient — they disappear after completion. **Always verify by checking for content (thinking block, response text), never by checking for transient indicators.**

**Composer** — same as Home screen. Below all messages.

**Scroll to bottom button** — appears when scrolled up. Clicking it scrolls to the latest messages. Must be clicked before reading response content due to lazy rendering.

## Projects grid screen

The main area when you click Projects in the sidebar.

**Header** — "Projects" label, **sort button**, **New Project button**.

**Search bar** — text input for filtering.

**Project card list** — a grid of **ProjectItem** objects ("grid" is a display detail; it is a list). Each card has:
- Project name (bold)
- Description
- Date ("Updated yesterday")
- Three-dot button for options

Clicking a card navigates to the project detail page.

## Project detail screen

The main area after clicking a project card.

**Breadcrumb** — "All projects" (clickable, returns to grid) → project name.

**Options** — "More options for [project]" button, "Pin project" button.

**Composer** — same shared component. Sending creates a new conversation in this project.

**Sections** in the main area:
- **Memory** — project-specific memories
- **Instructions** — with **Edit instructions** button
- **Files** — with **Add files** button

**Project conversations** — listed as clickable items in the main area, each showing title and "Last message [time] ago." These conversations also appear in the sidebar conversation list mixed with everything else.

## Navigation

Every transition is a click that produces a new screen:

| From | Action | To |
|------|--------|----|
| Any screen | Sidebar → conversation item | Conversation screen |
| Any screen | Sidebar → New Chat | Home screen |
| Any screen | Sidebar → Projects | Projects grid |
| Projects grid | Click a project card | Project detail |
| Project detail | Click a conversation | Conversation screen |
| Project detail | "All projects" breadcrumb | Projects grid |
| Conversation | Project breadcrumb | Project detail |
| Home | Send a message | Conversation screen |

## The object mapping

Every noun above is a class. Every pure action is a method. The [Architecture Patterns](10-architecture-patterns.md) chapter shows how the object graph is built. The [Layers](02-01-the-architecture--layers.md) chapter shows how controllers read UIA elements to populate these objects.

| App noun | Code class | Source |
|----------|-----------|--------|
| The window | `Claude` (holds `window`, `sidebar`, `session`) | [claude.ts](../../src/claude.ts) |
| Any screen | `Page` (abstract — holds the sidebar, `id()`) | [pages/page.ts](../../src/pages/page.ts) |
| Home screen | `HomePage extends Page` | [pages/home.ts](../../src/pages/home.ts) |
| Conversation screen | `ConversationPage extends Page` | [pages/conversation.ts](../../src/pages/conversation.ts) |
| Projects grid screen | `ProjectsPage extends Page` | [pages/projects-grid.ts](../../src/pages/projects-grid.ts) |
| Project detail screen | `ProjectPage extends Page` | [pages/project.ts](../../src/pages/project.ts) |
| Sidebar | `Sidebar` — the conversation list lives here; there is no separate list class | [components/sidebar.ts](../../src/components/sidebar.ts) |
| Conversation list item | `ConversationItem` — one class for the sidebar **and** the project page | [components/chat-list.ts](../../src/components/chat-list.ts) |
| Conversation menu | `ConversationMenu` | [components/chat-list.ts](../../src/components/chat-list.ts) |
| "Add to project" dialog | `MoveConversationModal` (UIA title "Move chat") — a project list **plus** a search bar | [components/move-conversation-modal.ts](../../src/components/move-conversation-modal.ts) |
| A project in that dialog | `ProjectChoice` — `select()` auto-confirms and closes | [components/move-conversation-modal.ts](../../src/components/move-conversation-modal.ts) |
| Project card | `ProjectItem` | [pages/projects-grid.ts](../../src/pages/projects-grid.ts) |
| A file on a project | `ProjectFile`, listed by `FilesPane` | [components/project-file.ts](../../src/components/project-file.ts) |
| Message | `Message` | [components/message.ts](../../src/components/message.ts) |
| The streaming response | `Response` — an ordered list of `Part`s | [components/response.ts](../../src/components/response.ts) |
| A piece of a response | `Part` → `TextPart`, `CodePart`, `ThinkingPart`, `ArtifactPart` | [components/part.ts](../../src/components/part.ts) |
| Thinking block | `ThinkingPart` — a part of the response, **not** a standalone class | [components/part.ts](../../src/components/part.ts) |
| Artifact panel | `ArtifactPanel`; an artifact in a response is an `ArtifactPart` | [components/artifact-panel.ts](../../src/components/artifact-panel.ts) |
| Composer | `Composer` — `type(text)`, `clear()`, `readDraft()`, `send()`, `attach()` | [components/composer.ts](../../src/components/composer.ts) |
| Model picker | `ModelPicker` | [components/model-picker.ts](../../src/components/model-picker.ts) |
| Where the app *is* | `Session` — remembers the current page by URL, re-binds on resume | [session.ts](../../src/session.ts) |
| The page factory | `Navigation` — turns "we are on screen X" into the typed `Page` | [pages/navigation.ts](../../src/pages/navigation.ts) |

**Two things this table records that no chapter had before.** `Page.id()` is URL-as-identity — the live page id, read fresh from the tree, which the `Session` compares against what it remembered; it is load-bearing and was catalogued nowhere. And `Navigation` is a real class, the id→page factory, likewise uncatalogued.

**One thing it cannot yet reconcile.** Two classes named `Response` ship at once: the structured [components/response.ts](../../src/components/response.ts) (the parts model, used by `ConversationPage`) and the legacy [components/turn.ts](../../src/components/turn.ts) (`Response`/`Content`/`Prompt`, still imported by [message.ts](../../src/components/message.ts), [conversation-controller.ts](../../src/controllers/conversation-controller.ts), and [exports/format.ts](../../src/exports/format.ts)). The new model runs the page; the old model still runs the read-and-export path. The row above names the one that is current. The seam is real and is scheduled work, not a documentation choice.
