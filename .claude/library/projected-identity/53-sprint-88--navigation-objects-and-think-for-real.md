# Sprint 88 — Navigation Objects and Think for Real

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Sprint 87 failed because the code doesn't model the app. `openProject('Claude')` is callable from anywhere. Sidebar needs manual refreshing. Send verifies by checking transient status indicators instead of content. The object graph stops at ChatList — projects, project pages, and project conversations have no objects.

This sprint finishes the object model. Every screen is a page. Every navigation returns the next page. The sidebar reads itself on page construction. Response detection watches text growth. Think works through the real app flow.

## The app — four screens

### Home Screen
- **Sidebar:** Nav buttons (Chat, Cowork, Code), New Chat, Projects, Recents list (clickable conversations with three-dot menus)
- **Main area:** Greeting, Composer, ModelPicker
- **Transitions:** Click sidebar conversation → ConversationPage. Click Projects → ProjectsGridPage. Send message → ConversationPage.

### Projects Grid Screen
- **Sidebar:** Same global sidebar as Home
- **Main area:** Grid of ProjectCards (name, description, date). "New project" button. Search bar.
- **Transitions:** Click a card → ProjectDetailPage. Click sidebar conversation → ConversationPage.

### Project Detail Screen
- **Sidebar:** DIFFERENT from global. Shows conversations scoped to THIS project. Same UI component, different data.
- **Main area:** Project name, description, instructions, files list. Composer for starting a new conversation.
- **Transitions:** Click sidebar conversation → ConversationPage (in project context). Click "Start chat" → new ConversationPage in project.

### Conversation Screen
- **Sidebar:** Global recents (or project conversations if entered from project context)
- **Main area:** Title/breadcrumbs, message history, streaming response area, Composer at bottom.
- **Transitions:** Click sidebar item → different ConversationPage. 

## Code design

### File plan

| File | Action | What it becomes |
|------|--------|----------------|
| `src/pages/page.ts` | **NEW** | Base Page class with sidebar auto-read |
| `src/pages/home.ts` | **REFACTOR** | `HomePage extends Page`. send() returns ConversationPage |
| `src/pages/projects.ts` | **REFACTOR** | `ProjectsGridPage extends Page`. cards[].open() returns ProjectDetailPage |
| `src/pages/project.ts` | **REFACTOR** | `ProjectDetailPage extends Page`. sidebar has project conversations |
| `src/pages/conversation.ts` | **REFACTOR** | `ConversationPage extends Page`. send(text) + waitForResponse() |
| `src/components/sidebar.ts` | **SIMPLIFY** | One class. Auto-reads on construction. No manual refresh from scripts |
| `src/components/chat-list.ts` | **KEEP** | ChatItem/ChatMenu/ProjectPicker — proven pattern, unchanged |
| `src/claude.ts` | **THIN** | launch(), exit(), currentPage. Remove 6 send methods, remove openProject etc. Navigation goes through page objects |
| `src/session.ts` | **SIMPLIFY** | Uses page objects internally instead of raw Claude class methods |

### Base Page class (`src/pages/page.ts`)

```typescript
///: Page — base class for all app screens.
///: Each screen has a sidebar and a main area. The sidebar reads its current
///: state from the UIA tree on construction — no manual refresh needed.
///: Subclasses add screen-specific content and transitions.
///:
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — objects mirror the app.
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md) — screen detection.

export abstract class Page {
  readonly sidebar: Sidebar;

  constructor(protected readonly auto: Automation, sidebar: Sidebar) {
    this.sidebar = sidebar;
  }

  abstract get screenType(): Screen;

  // Every page can navigate to projects or a new chat via the sidebar
  async openProjects(): Promise<ProjectsGridPage> { ... }
  async openConversation(title: string): Promise<ConversationPage> { ... }
}
```

### ProjectsGridPage (`src/pages/projects.ts`)

```typescript
///: ProjectsGridPage — the project grid. A list of project cards.
///: Click a card to get a ProjectDetailPage. The cards are populated on
///: construction from the UIA tree.
///:
///: [Project Operations](../../library/reference-desk/03-03-operations--projects.md)

export class ProjectsGridPage extends Page {
  readonly cards: ProjectCard[];

  find(name: string): ProjectCard | undefined;
  async create(name: string): Promise<ProjectDetailPage>;
}

export class ProjectCard {
  readonly name: string;
  readonly description: string;

  async open(): Promise<ProjectDetailPage>;
  // open() clicks the card, waits for the project screen,
  // reads sidebar + project data, returns a verified ProjectDetailPage
}
```

### ProjectDetailPage (`src/pages/project.ts`)

```typescript
///: ProjectDetailPage — a single project. Files, instructions, and
///: a sidebar showing THIS project's conversations (not global recents).
///: The sidebar auto-populates on construction — it shows project-scoped chats.
///:
///: [Project Operations](../../library/reference-desk/03-03-operations--projects.md)

export class ProjectDetailPage extends Page {
  readonly name: string;
  readonly description: string;
  readonly instructions: string;
  readonly files: ProjectFile[];
  // sidebar.chats.items are project-scoped conversations

  async editInstructions(text: string): Promise<void>;
  async uploadFile(path: string): Promise<void>;
  async newConversation(): Promise<ConversationPage>;
  async openConversation(title: string): Promise<ConversationPage>;
  // openConversation clicks the conversation in the project sidebar
}
```

### ConversationPage (`src/pages/conversation.ts`)

```typescript
///: ConversationPage — an open conversation. Send messages, wait for
///: responses by watching text growth, read responses.
///:
///: Response detection: watch readText() length. Growing = still working.
///: Stable length + "Claude responded:" element = done. No transient indicators.
///:
///: [Reading Responses](../../library/reference-desk/03-02-operations--reading.md)
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md)

export class ConversationPage extends Page {
  readonly title: string;
  readonly conversationId: string;
  readonly projectName: string | null;
  readonly composer: Composer;

  // ONE send method. Composes, clicks Send, verifies the thinking block
  // or response content appeared. Returns when Desktop has acknowledged.
  async send(text: string): Promise<void>;

  // Wait for response to finish. Watches text growth.
  // Text stable for 5+ seconds AND completion marker present = done.
  async waitForResponse(timeoutMs?: number): Promise<string>;

  // Read what's there
  async readLastResponse(): Promise<string>;
  async readTurns(): Promise<Turn[]>;
  async hasContent(): Promise<boolean>;

  async rename(newTitle: string): Promise<void>;
}
```

### HomePage (`src/pages/home.ts`)

```typescript
///: HomePage — the landing page. Greeting, composer, model picker.
///: Sending from home creates a new conversation and navigates there.
///:
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md)

export class HomePage extends Page {
  readonly composer: Composer;
  readonly modelPicker: ModelPicker;

  // Sending from home returns a ConversationPage (new chat created)
  async send(text: string): Promise<ConversationPage>;
}
```

### Thinned Claude class (`src/claude.ts`)

```typescript
///: Claude — the application. Launches, finds the window, detects the
///: current screen, returns a Page object. Navigation happens through pages.
///:
///: [Reference Desk](../library/reference-desk/.cover.md)

export class Claude {
  async launch(): Promise<Page>;  // returns whatever page the app is on
  async home(): Promise<HomePage>;  // navigate to home, return it
  exit(): void;

  // That's it. No send methods. No openProject. No refresh.
  // Navigation goes: page.sidebar.openProjects() → card.open() → etc.
}
```

## Response detection design

### Send verify: thinking block appeared

```typescript
// In ConversationPage.send():
await this.composer.compose(text);
await this.auto.gateway.act(
  () => this.composer.clickSend(),
  () => this.controller.hasThinkingBlock(),  // Button named "Thinking"
  { timeoutMs: 120_000 },
);
```

The thinking block is a permanent Button element. It appears the moment Desktop starts processing. Its name changes from "Thinking" to the thinking summary after. It never disappears. If Desktop skips thinking and goes straight to streaming, "Claude responded:" text appears instead — `hasThinkingBlock()` checks both.

### Wait for response: text stabilizes + completion marker

```typescript
// In ConversationPage.waitForResponse():
let lastLength = 0;
let stableCount = 0;

await this.auto.gateway.waitFor(async () => {
  await this.scrollToBottom();
  const text = await this.controller.readPageText();
  const len = text?.length ?? 0;

  if (len !== lastLength) {
    stableCount = 0;
    lastLength = len;
    return false;  // still growing
  }

  stableCount++;
  if (stableCount < 5) return false;  // not stable enough yet

  // Text is stable. Check for the permanent completion marker.
  return text.includes('Claude responded:')
    || text.includes('Claude finished the response');
}, { timeoutMs });
```

Text growing = working. Text stable 5 checks + completion marker = done. No streaming indicators. No stop buttons. Content and only content.

## Documentation plan

### Reference Desk updates

| Chapter | Change |
|---------|--------|
| [Architecture Patterns (10)](../reference-desk/10-architecture-patterns.md) | Add navigation-returns-objects pattern. Update object graph to include ProjectsGridPage → ProjectCard → ProjectDetailPage → ConversationPage chain. |
| [Layers (02-01)](../reference-desk/02-01-the-architecture--layers.md) | Update Page layer description: pages use inheritance, base Page owns sidebar. |
| [Project Operations (03-03)](../reference-desk/03-03-operations--projects.md) | Rewrite to use page objects: `projects.find('Claude').open()` not `app.openProject('Claude')`. |
| [Sending Messages (03-01)](../reference-desk/03-01-operations--sending.md) | Simplify to ONE send method on ConversationPage. Remove descriptions of sendAsync/sendAndForget/etc. |
| [Reading Responses (03-02)](../reference-desk/03-02-operations--reading.md) | Rewrite response detection: text growth + completion marker. Remove transient indicator descriptions. |
| [Pitfalls (07)](../reference-desk/07-pitfalls.md) | Already updated with content-not-indicators rule. Add page navigation pitfall: never call methods for a screen you're not on. |
| [Coding Philosophy (05)](../reference-desk/05-coding-philosophy.md) | Add: "The app is screens. Navigate them. Each screen is a page object." |
| [Codebase Index (09)](../reference-desk/09-codebase-index.md) | Re-run introspect tool after refactor to update the index. |

### `///:` annotations on every changed file

Every new and refactored file gets `///:` annotations linking to the relevant Reference Desk chapters. The [introspect tool](../reference-desk/09-codebase-index--introspect.ts) displays them. The [link checker](../..environmentalism/05-on-validation--check-links.ts) validates them.

## The think test

When the refactor is done, this script must work:

```typescript
const app = new Claude();
const home = await app.launch();

// Navigate to Claude project
const projects = await home.sidebar.openProjects();
const claude = await projects.find('Claude').open();

// Open the Test conversation
const test = await claude.openConversation('Test');

// Send a question and wait for the response
await test.send('What is the CALM theorem? Two sentences.');
const response = await test.waitForResponse();
console.log(response);

// Done — minimize
app.window.minimize();
```

Objects all the way. No manual refresh. No skipped screens. No transient indicators. Text appears, grows, stabilizes, gets read.

## Who does what

**Adam:** Build the Page hierarchy. Refactor pages. Wire navigation. Implement text-growth response detection. Remove dead send methods.

**Arthur:** Review object graph. Ensure inheritance is correct. Check that no methods exist for screens you're not on.

**Claude:** Test the think flow once navigation works. Update think dispatch script to use page objects.

**Libby:** Update Reference Desk chapters after the refactor. Verify `///:` annotations on all changed files. Run link checker.

**Cathy:** Review the response detection design. The text-growth + completion-marker approach should follow the same verify discipline as the rest of the architecture.

## Work order

1. **Explore** — capture UIA tree on the project detail page to see the project sidebar structure
2. **Build** — Page base class, then ProjectsGridPage, then ProjectDetailPage, then ConversationPage
3. **Wire** — sidebar.openProjects() returns ProjectsGridPage. card.open() returns ProjectDetailPage. etc.
4. **Detect** — implement text-growth response detection in ConversationPage
5. **Thin** — strip Claude class to launch/home/exit. Remove dead methods.
6. **Test** — run the think test script above
7. **Document** — update Reference Desk, add `///:` annotations, push
