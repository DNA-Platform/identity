# Sprint 90 — The App Driver Refactor

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

## Why this sprint

[Sprint 89](55-sprint-89--think-acceptance-tests.md) proved (see its [retro](56-sprint-89--retro.md)) that `/think` keeps failing for one reason: the driver's object model does not mirror the app. Methods sit on the wrong objects, scripts call macros that should be split, and the `Claude` class is missing the methods its own scripts call. The fix is not more tests against the current code — it is finishing the refactor the code has been asking for since [Sprint 88](53-sprint-88--navigation-objects-and-think-for-real.md), so an object model that can't express the wrong thing makes the [19 acceptance tests](55-sprint-89--think-acceptance-tests.md) fall out naturally.

The driver automates Claude Desktop through the Windows UIA tree. It is not an API client. It is a model of **a human sitting in front of the app**.

## What this sprint is — and is not

This is a **small, design-only sprint**. It writes a document, not code. The work is too large to charge into — whole classes are rewritten, a new inheritance hierarchy is introduced, the design principles change — so the team agreed (2026-06-18) to split it:

- **Sprint 90 (this one):** produce an **intermediate design document** — [Reference Desk ch.13 "The Redesign"](../reference-desk/13-the-redesign.md) — that fully describes the *new* code: every class, its dependencies, the patterns and the inheritance hierarchy, and *then* an explicit list of what gets replaced and removed in the current codebase. The five design principles are already written there literally; the class catalogue, hierarchy, dependency graph, and removal plan are filled in through discussion. No production code changes.
- **Sprint 91:** focused coding. Implement the design document. **This will break a lot of existing tests — that is expected and fine;** the [19 acceptance tests](55-sprint-89--think-acceptance-tests.md) are then written fresh against the new driver.

Everything below (Parts 1–5) is the **seed** for that document — the one rule, the target object model, the migration tables, the open decisions. Sprint 90's job is to turn this seed into a complete, discussed class-level design: dependency graph, base classes and what extends them, the patterns each layer follows, and the removal plan. Where this document refines [Reference Desk ch.10](../reference-desk/10-architecture-patterns.md) and [ch.12](../reference-desk/12-the-app.md), those chapters — and [Thoughtfulness ch.4](../thoughtfulness/04-the-code.md) — are updated to match *after Sprint 91 lands*, from the code as built, not before.

## Who owns what

Assignments follow [Territory](../..teamsmanship/05-territory.md) and [Roles](../..teamsmanship/02-roles.md), not convenience. The driver codebase `.claude/src/**` is **Claude's** territory, shared with **Adam**; architecture is **Arthur's**; the test *promise* is **Queenie's**.

- **Arthur** ([Architect](../..teamsmanship/02-roles.md#architect)) — the object model and the layer boundaries (Part 3, Part 1, and the Part 5 decisions). Architectural shape is his per the `**` and `.claude/` infrastructure territory. The shape has to be right before any code moves; he does not write the View classes, he approves the model they implement.
- **Claude** ([Environmentalist](../..teamsmanship/02-roles.md#environmentalist)) — primary owner of `.claude/src/**`, so the **View layer** (Part 4 A–D: pages, items, composer, `think.ts`) and the **consumer side**: the [`/think` skill chapter](../our-skillset/20-think.md) and [Thoughtfulness ch.4](../thoughtfulness/04-the-code.md). When the driver API changes, the skill's script-invocation lines change with it. He owns the *content* the [skills compiler](../..environmentalism/04-on-skills--compiler.ts) consumes — the compiled `SKILL.md` must not point at dead commands.
- **Adam** ([Automation Engineer](../..teamsmanship/02-roles.md#automation-engineer)) — co-owner of `.claude/src/**`; owns the **controllers, gateway, and infrastructure** (Part 4E, Part 2), because he built the gateway pattern and the relay. Controllers go back to pure sensors/actuators; the gateway stays the only foreground check. He also owns the [skills-compiler machinery](../..environmentalism/04-on-skills--compiler.ts) and the [link validator](../..environmentalism/05-on-validation--check-links.ts) that must pass after the `///:` annotations move.
- **Queenie** ([QA](../..teamsmanship/02-roles.md#qa-engineer)) — owns the **acceptance criteria**, not the script files (those live in Claude/Adam's `src/`). Tests are promises: she defines what the [19 tests](55-sprint-89--think-acceptance-tests.md) must prove and holds the bar — *reliably* green, not green-once, especially the flaky-by-nature test 15 (shell serialization) and test 16 (background reading). Claude and Adam implement the scripts to her specification.

## Part 1 — The one rule, and everything that follows

**The rule:** if a person can't do it with a mouse and keyboard, on the screen in front of them right now, it does not exist as a method. Everything below is just how you tell when you've broken it.

1. **Mouse-and-keyboard test.** Before writing a method, ask: could a person do this, on this screen, in one click or by typing? No → it doesn't exist. This kills macros (`say`, `sendMessage`, `compose`) and infra-as-method (`waitForResponse`, `resetData`, `refresh`).
2. **The object you hold IS the screen you're on.** You can't call `readMessages()` unless you're holding a `ConversationPage`. You get one only by navigating to it. The type system, not a runtime `requireScreen` guard, is what stops you from acting on a screen you aren't on.
3. **Hierarchy test (Doug's).** If a screen's object exposes an action that isn't visible on that screen, the *hierarchy* is wrong. Move the method to where it's reachable. Don't guard it.
4. **Strings are only for the user's data.** Conversation titles and project names are dynamic → strings. Everything constant — sidebar buttons, menu items, model options — is a typed, parameterless method or a list item. No `invokeByName('Projects')` at the View level; the UIA string lives *inside the controller* as an implementation detail.
5. **Find proves existence.** The controller reads the tree and builds typed objects. The object existing *is* the proof the thing is on screen. `find('Test')` returning `undefined` means it isn't there — a real "not found," not a bug in your search string. You never "open by name and hope."
6. **Layers, strict, each talks only to the one below:** `Scripts → View → Gateway → Controllers → Infrastructure (UIA/Shell/Window/Keyboard)`.
   - **Controllers are blind.** They never check foreground, never verify, never know the screen. They are server-side code. **Scripts never call a controller** — that's a browser calling your server code directly.
   - **The Gateway is the bridge between a View method and a controller.** It is the *only* place foreground is checked. It fires the action once and polls a verify.
   - **The View owns verification** because the View is the layer that can see the screen.
7. **Every action verifies itself.** `open()` clicks *and* confirms the screen changed. `maximize()` does the Win32 call *and* detects foreground rather than trusting it.
8. **Nothing works when the app isn't visible.** Enforced once, in the Gateway. Bringing the window forward is *your* action (`window.maximize()`); the app won't do it for you.
9. **Split typing from acting.** `type(text)` then `send()`. `clear()` then `type()`. Rename = click Rename → field appears → type → confirm. Three actions, three calls.
10. **Everything is a list.** Sidebar conversations, projects, project conversations, picker entries, artifacts, files, model options — all the same pattern: `read → find(name) → item.action()`. There is no "grid"; the grid is just how the app *displays* a list. Collapse it to a list.
11. **Remove, don't deprecate.** Dead methods left "for later" get used lazily and rot the model. Protect the code from forgetful future use by making the wrong thing *impossible to express*, not merely discouraged.

## Part 2 — Already done (preserve; do not redo or undo)

- **`claude.ts`** stripped from ~527 to ~185 lines. ~25 API methods removed (`openChat`, `openProject*`, `say`, `sendMessage`, `sendAsync`, `conversationTurn`, `renameChat`, `startSession`, etc.).
- **`gateway.ts`** — `requireForeground()` now runs in **all three** methods: `act`, `waitFor`, `read` (previously only `act`).
- **`window.ts`** — `maximize()` verifies it worked by detecting foreground afterward, not by trusting the Win32 call.
- **`controllers/composer-controller.ts`** — rewritten to pure sensors/actuators, no gateway. Use it and `chat-list-controller.ts` as the two clean models.
- **`pages/page.ts`** — abstract base written (holds `sidebar`, `screenType`).
- **`components/composer.ts`** — rewritten to call through the gateway. ⚠️ Has two issues to fix in Part 5; don't treat it as finished.

> Note (Sprint 89 found): the strip in Part 2 removed `compose`/`sendAsync`/`startSession` etc., but `session.ts`, `test-think-dispatch.ts`, and the existing acceptance tests still call them. That is why nothing runs today. Part 4 rebuilds those capabilities in their correct homes; until it lands, the driver does not execute.

## Part 3 — Target object model

```
Claude
  window: Window
  launch(): Promise<Page>            // base Page — see Part 5, resume-or-home

Page (abstract)
  sidebar: Sidebar                   // the one thing on every screen
  screenType

Sidebar                              // one class, identical on every screen
  conversations: ConversationItem[]  // read from "More options for X" buttons
  newChat(): HomePage                // click New Chat
  projects(): ProjectsListPage       // click Projects (typed, not a string)
  search(query): void                // type into the search box

HomePage extends Page
  composer: Composer

ConversationPage extends Page
  title; projectName
  composer: Composer
  messages: Message[]
  response: Response                 // current/streaming
  scrollToBottom(); scrollToTop()
  // sensors: isResponseComplete(), hasStopButton(), canSend(), hasResponseContent()

ProjectsListPage extends Page
  projects: ProjectItem[]
  find(name): ProjectItem | undefined

ProjectItem
  name
  open(): ProjectDetailPage

ProjectDetailPage extends Page
  name; instructions; files: ProjectFile[]
  conversations: ConversationItem[]  // SAME class as the sidebar's
  composer: Composer

ConversationItem                     // used by Sidebar AND ProjectDetailPage
  title
  open(): ConversationPage
  menu(): ConversationMenu

ConversationMenu
  rename(): RenameField              // click Rename → returns the inline field
  delete(): void
  pin(): void
  addToProject(): ProjectPicker

RenameField                          // the inline edit field rename surfaces
  type(text): void
  confirm(): void                    // press Enter

ProjectPicker
  items: ProjectPickerItem[]
  cancel(): void

ProjectPickerItem
  name
  select(): void                     // the item IS the project; no string param

Composer                             // one class, page-unaware
  type(text); clear(); readDraft(); send(); attach()

Message
  text; role
  thinkingBlock: ThinkingBlock | null
  copy(): string
  retry(): void                      // assistant messages
  edit(): EditField                  // opens the field, then you type

ThinkingBlock
  summary
  expand(): string

Response
  text; isComplete; hasContent

Artifact
  title
  open(): string; copy(): string; download(): void

ProjectFile
  name
  read(): string; remove(): void; download(): void

ModelOption                          // the list pattern, not selectModel('Opus')
  name
  select(): void
```

## Part 4 — The migration, file by file

### A. Create / rename into existence

| Now | Becomes | Notes |
|---|---|---|
| `pages/home.ts` `Home` (empty) | `HomePage extends Page` | holds `composer`; nothing else |
| `pages/conversation.ts` `Conversation` (god object) | `ConversationPage extends Page` | decompose — see B/C/D below |
| `pages/projects-grid.ts` `ProjectsGrid` / `ProjectCard` | `ProjectsListPage` / `ProjectItem` | "grid" → list |
| `pages/project.ts` `Project` (god object) | `ProjectDetailPage extends Page` | decompose |
| `pages/project-detail.ts` `ProjectConversationItem` | **delete** — use `ConversationItem` | both read "More options for X"; one class |
| `components/chat-list.ts` `ChatItem` / `ChatMenu` | `ConversationItem` / `ConversationMenu` | unify naming; used in two places |
| (new) | `ThinkingBlock`, `RenameField`/`EditField`, `ModelOption` | currently inlined as index/string methods |

### B. Delete entire files / methods (capability moves, per the table)

- **`pages/projects.ts`** — delete the file. It duplicates `ProjectsListPage`. `open(name)`, `openAt(index)`, `remove(name)` → `find(name)` then `item.open()`. `create(name, desc)` → click New Project → type name → type description → click Create (four steps, see C).
- **`claude.ts`** — remove the always-on page properties: `conversation`, `home`, `project`, `projects`, `projectsGrid`, `projectConversations`. You should not be able to reach a `ConversationPage` without navigating to one. Keep `window` and infra; add `launch(): Promise<Page>`.
- **Conversation god-object removals:** `waitForResponse(timeoutMs)` (infra — the caller polls `isResponseComplete()` via `gateway.waitFor`), `refresh()`/`refreshMetadata()` (fold into page construction), `isInProject(projectName)` (read `projectName`, caller compares).
- **Project god-object removals:** `resetData()`, `refresh()`.

### C. Split (typing ≠ acting)

| Now | Split into |
|---|---|
| `Composer.compose(text)` | `clear()` then `type(text)` |
| `Composer.sendMessage(text)` | `type(text)` then `send()` |
| `ChatMenu.rename(newTitle)` | `menu.rename()` → `RenameField`; `field.type(text)`; `field.confirm()` |
| `Conversation.rename(newTitle)` | click title → `RenameField` → type → confirm |
| `Conversation.editMessage(index, text)` | `message.edit()` → `EditField` → type → confirm |
| `Project.rename / editDescription / writeInstructions` | click field → `type(text)` |
| `Project.addTextContent(title, content)` | open dialog → type title → type content → submit (use existing `TextContentDialog`) |
| `Projects.create(name, desc)` | click New → type name → type desc → click Create |

### D. Move onto item objects (kill the index/title params)

| Now (on a page/panel) | Becomes (on the item) |
|---|---|
| `Conversation.copyMessage(index)` | `Message.copy()` |
| `Conversation.expandThinking(messageIndex)` | `Message.thinkingBlock.expand()` |
| `Conversation.openArtifact/copyArtifact/downloadArtifact(title, …)` | `Artifact.open() / copy() / download()` |
| `ArtifactPanel.select(title)` | `list(): Artifact[]` → `artifact.open()` |
| `Project.removeFile/readFileContent/downloadFile(name, …)` | `ProjectFile.remove() / read() / download()` |
| `ModelPicker.selectModel(model)` / `selectThinking(mode)` | open dropdown → `ModelOption[]` → `option.select()` |
| `ProjectPicker.select(projectName)` | `ProjectPickerItem.select()` |
| `ChatList.open(title)` / `openAt(index)` | `find(title)` / `at(index)` → `item.open()` |

### E. Controller cleanup (remove the gateway from controllers)

Every controller must become pure sensors/actuators — no `gateway.act/waitFor/read`, no foreground checks, no `requireScreen`, no multi-step orchestration. The View wraps each raw call in `gateway.act(actuator, sensor)`.

- ✅ `chat-list-controller.ts` — already clean (the Sprint 84 model).
- ✅ `composer-controller.ts` — cleaned this session.
- ⬜ `conversation-controller.ts` — strip `gateway.waitFor` out of `waitForResponse`; expose sensors `readText()`, `hasThinkingBlock()`, `isResponseComplete()`; the View does the waiting.
- ⬜ `sidebar-controller.ts` — strip `gateway.act`; expose actuators `clickProjects()`, `clickNewChat()`; the View verifies navigation.
- ⬜ `project-controller.ts`, `projects-controller.ts`, `model-picker-controller.ts`, `artifact-panel-controller.ts`, `composed-message-controller.ts` — same treatment.

## Part 5 — Open decisions to settle before coding (these caused churn)

1. **`launch()` return type.** It cannot return a *specific* page — you don't know what screen the app resumed on. So it returns base `Page`. The mechanism: remember the screen you were last on, try to reconstitute that page and ask it whether it really is that screen; if it says no, navigate home and return `HomePage`. You earn a concrete type by *confirming* state, never by assuming it.
2. **Where the send-verify lives.** The current `composer.ts` reads `uia.readText()` to check the page text grew. Wrong twice: (a) a *View* object importing *UIA* directly, skipping the layer boundary; (b) "did new content appear on the page" is the **page's** job, not the text box's. Fix: `Composer.send()` just clicks Send and confirms the button fired / the draft cleared. `ConversationPage` owns the "text grew → Desktop acknowledged" verification. Drop the `Uia` import from `Composer`.
3. **Rename / edit field representation.** `menu.rename()` clicks Rename and the inline field appears; model it as a small object (`RenameField` with `type()` + `confirm()`). Same shape for `Message.edit()`. Decide whether these share one `EditField` class — they probably should.
4. **`newChat()` target.** Clicking New Chat lands on the empty home screen, so `Sidebar.newChat(): HomePage`. Sending from `HomePage` creates a conversation; the caller constructs a `ConversationPage` from the new screen. The Composer stays page-unaware.

## The one-line audit to run against any file

Read each method signature. If it takes an **index**, a **timeout**, or a **constant-as-a-string**, or it does **two things** (type + act), it's wrong. The fix is almost always: *split it*, or *turn the string into a found object*.

## Definition of done — Sprint 90 (the design document)

The deliverable is one **intermediate design document** in the Reference Desk (a new design chapter), produced through team discussion. It is done when it contains:

1. **The new class catalogue** — every class in the target model, its responsibility, its public surface, and the layer it lives in (View / Gateway / Controller / Infrastructure).
2. **The inheritance hierarchy** — what `Page` is, what extends it, what `EditField`/`RenameField` share, where `ConversationItem` is reused. Drawn, not implied.
3. **The dependency graph** — who depends on whom, with the strict layer rule (each talks only to the layer below) made concrete per class. The "no `Uia` import in `Composer`" decision (Part 5.2) generalized to every boundary.
4. **The patterns** — the list pattern (`read → find → item.action()`), the split-typing-from-acting pattern, find-proves-existence, action-verifies-itself — each stated with a worked example against a real class.
5. **The removal plan** — an explicit, file-by-file list of what is replaced and what is deleted from the current `.claude/src/` (Parts 4A/4B expanded to completeness), so Sprint 91 is execution, not rediscovery.
6. **Settled decisions** — the four open questions in Part 5 resolved, with rationale, so coding doesn't re-litigate them.

No production code changes this sprint. The audit, the running driver, the recompiled skill, and the 19 green tests are **Sprint 91's** definition of done.

## Sprint 91 — focused coding (preview)

**Spike first, migrate second.** Per the [Sprint 90 retro](58-sprint-90--retro.md), Sprint 91 does **not** open with the removal plan. It opens with a **vertical spike**: the minimum new objects to send from the home screen, cross the home→conversation transition, and read one real streaming response to completion — run against the live app until reliable. That is the environmental boundary the design cannot prove on paper ([decision #4](../reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions), tests 15/16, streaming detection), and the exact path that died in Sprints 87–88. If the spike holds, the [removal plan](../reference-desk/13-the-redesign.md#removal-plan-file-by-file) executes as careful labor; if it doesn't, we learn it at the cost of five classes, not forty.

Then implement the rest of the document. Expect to break many existing tests as classes are rewritten and removed — that is acceptable and planned; do not preserve tests against the old shape. Done when: driver runs end to end, `think.ts` and the [`/think` skill](../our-skillset/20-think.md) call only methods that exist and the skill recompiles through the [skills compiler](../..environmentalism/04-on-skills--compiler.ts), the [19 acceptance tests](55-sprint-89--think-acceptance-tests.md) are written fresh and **reliably** green, and [ch.10](../reference-desk/10-architecture-patterns.md)/[ch.12](../reference-desk/12-the-app.md)/[Thoughtfulness ch.4](../thoughtfulness/04-the-code.md) are corrected from the built code.

**Fallback:** if the gate can't go green in Sprint 91, ship a degraded manual `/think` — operator sends, waits, reads, no automation pretending — and write it down honestly.
