# The App

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

What Claude Desktop looks like. Every noun in this chapter is a class in the code. Every action is a method. This is the specification the [code](../../src/) implements. If the code doesn't match what's described here, the code is wrong.

The code mirrors the app. The app has screens. Each screen has things on it. Each thing is an object with properties and actions. Navigation between screens returns new objects. You can only call methods for the screen you're on because you only have that screen's object.

## The window

Claude Desktop is a single window divided into a **sidebar** on the left and a **main area** on the right. The sidebar stays visible on every screen. The main area changes depending on where you are.

## The sidebar

The sidebar is a vertical panel present on every screen. From top to bottom:

**Mode tabs** — Chat, Cowork, Code. Small buttons in a row. Pure actions.

**New Chat button** — starts a fresh conversation. Pure action.

**Projects button** — navigates to the projects grid. Pure action.

**Conversation list** — labeled "Recents." A scrollable list of conversations. Each conversation is a **ConversationListItem**: it has a title, and on hover a **three-dot button** appears ("More options for [title]"). Clicking the item opens the conversation. Clicking the three-dot button opens a **ConversationMenu** with items: Pin, Rename, Delete, and either "Add to project" / "Projects" (if not in a project) or "Change project" / "Remove from project" (if in one). Clicking Rename makes the title editable inline. Clicking Delete shows a confirmation. Clicking "Add to project" opens a **ProjectPicker** dialog with a list of projects to choose from.

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

**Project card list** — a grid of **ProjectCard** objects. Each card has:
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

| App noun | Code class | Key methods |
|----------|-----------|-------------|
| Sidebar | `Sidebar` | tabs, newChat(), openProjects() |
| Conversation list | `ChatList` | items, find(title), showAll() |
| Conversation list item | `ChatItem` | title, open() → Conversation, menu() → ChatMenu |
| Conversation menu | `ChatMenu` | rename(), delete(), pin(), addToProject() → ProjectPicker |
| Project picker | `ProjectPicker` | projects, select(name), cancel() |
| Projects grid | `ProjectsGrid` | cards, find(name) |
| Project card | `ProjectCard` | name, description, open() → ProjectDetailPage |
| Project detail | `ProjectDetailPage` | name, instructions, files, conversations |
| Project conversation item | `ProjectConversationItem` | title, open() → Conversation |
| Conversation | `Conversation` | title, messages, composer, send(text), waitForResponse() |
| Message | `Message` / `Turn` | text, role, copy(), retry() |
| Thinking block | detected via `hasThinkingBlock()` | exists/doesn't, has summary label |
| Response | `Response` | text (grows during streaming) |
| Composer | `Composer` | compose(), send(), readDraft(), clear(), attach() |
| Model picker | `ModelPicker` | currentModel(), selectModel() |
