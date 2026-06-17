# Project Operations

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The project page ([`.claude/src/pages/project.ts`](../../src/pages/project.ts)) manages Claude Desktop projects — the containers where research happens. Projects have names, descriptions, instructions, files, and conversations.

## Navigation

```typescript
// Open the projects list
await app.openProjects();

// Open a specific project by name
await app.openProject('DNA Patternity');

// Open by index (for iteration)
await app.openProjectAt(2);
```

`openProject(name)` navigates to the projects grid, finds the card by name, clicks it, and waits for the project page to load. The [gateway](02-02-the-architecture--gateway.md) verifies arrival by checking the URL for `/project/`.

## Reading project data

| Method | Returns | Description |
|--------|---------|-------------|
| `readName()` | `string` | The project name |
| `readDescription()` | `string` | The project description |
| `readInstructions()` | `string` | The project instructions text |
| `readFileContent(name)` | `string` | Content of a specific file |

## Modifying projects

| Method | Description | Stateless? |
|--------|-------------|------------|
| `rename(newName)` | Changes the project name | No |
| `editDescription(text)` | Updates the description | No |
| `writeInstructions(text)` | Sets project instructions | No |
| `uploadFile(localPath)` | Uploads a file from disk via clipboard | No |
| `addTextContent(title, content)` | Adds a text file to the project | No |
| `removeFile(name)` | Deletes a project file | No — use cautiously |
| `newConversation()` | Starts a new conversation in this project | No |

**For stateless testing:** only use read methods. Do not modify projects you didn't create.

## File operations

File upload uses the clipboard file-drop mechanism (see [Sending Messages § File attachments](03-01-operations--sending.md)). `addTextContent(title, content)` opens the "Add text content" dialog, types the title, pastes the content, and saves. This was the breakthrough from [Sprint 59](../projected-research/23-sprint-59--create-projects-and-upload-files.md) — the file dialog was unreliable via UIA, but the text content dialog worked consistently.

## The projects list

The [`Projects`](../../src/pages/projects.ts) page (plural) shows the grid of all projects. It provides:

```typescript
// List all project cards
const cards = app.projects.cards;  // Lazy<ProjectCard[]>
await cards.wait();  // Load all pages

// Open by index
await app.projects.openAt(0);

// Create a new project
await app.projects.create('New Research Project');
```

The cards list is `Lazy<>` — it loads on demand and paginates by scrolling. `wait()` scrolls through all pages to build the full list.

## Adding a conversation to a project

The sidebar's three-dot menu opens a context menu for any conversation. The "Add to project" item opens a project picker dialog. The full object chain:

```typescript
await app.sidebar.refresh();
const item = app.sidebar.chats.find('Finance');
const menu = await item.menu();           // ChatMenu — verified open
const picker = await menu.addToProject(); // ProjectPicker — verified dialog visible
await picker.select('Claude');            // selects, verifies dialog closed
```

Each step returns the next [View object](10-architecture-patterns.md) only after verifying state through controller sensors. `menu()` verifies the menu appeared. `addToProject()` verifies the dialog opened and reads the project list. `select()` clicks the `ListItem` by name and verifies the dialog closed.

The implementation lives in [`chat-list.ts`](../../src/components/chat-list.ts) (View objects: `ChatItem`, `ChatMenu`, `ProjectPicker`) backed by [`chat-list-controller.ts`](../../src/controllers/chat-list-controller.ts) (sensors and actuators).

**The Claude project** is the canonical home for successful research conversations. The [Thoughtfulness](../thoughtfulness/.cover.md) protocol files conversations there after the thought concludes with a sufficient verdict. See the [conversation catalogue](../thoughtfulness/05-conversation-catalogue.md) for the tracking system.

## For research

The typical research flow:
1. `app.openProject('Research Topic')` — navigate to the project
2. Read existing files and instructions for context
3. Use the [/think](../our-skillset/20-think.md) skill to dispatch questions — `send()` then `read()`
4. Store results in Claude's [perspective](../..teamsmanship/..team/claude/.perspective/.cover.md) and update the [conversation catalogue](../thoughtfulness/05-conversation-catalogue.md)
