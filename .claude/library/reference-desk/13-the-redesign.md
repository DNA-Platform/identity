# The Redesign — Target Architecture

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

> **This chapter describes the driver we are migrating TO, not the driver as it is.** It is the intermediate design document for [Sprint 90](../projected-identity/57-sprint-90--the-app-driver-refactor.md); [Sprint 91](../projected-identity/57-sprint-90--the-app-driver-refactor.md#sprint-91--focused-coding-preview) builds it. Until then, the code on disk does not match this. The IS-chapters — [ch.10 Architecture Patterns](10-architecture-patterns.md) and [ch.12 The App](12-the-app.md) — and the `///:` annotations are updated *in lockstep with the code* as Sprint 91 lands, never ahead of it. Describing code that does not exist yet is how the [hallucinated synopsis](../projected-identity/51-sprint-86--retro.md) got into [ch.4](../thoughtfulness/04-the-code.md); this chapter is allowed to do it only because it is explicitly the *target*, not a description of reality.

## The one rule

The driver models **a human sitting in front of Claude Desktop, operating it with a mouse and keyboard, looking at the screen in front of them.** Every capability the driver has must be a capability that human has, right now, on the screen they are looking at. The driver has no privileged access — no API, no hidden state, nothing the user could not see or do. This is not a constraint we tolerate. It is the definition of what the driver *is*.

The five principles below are not five separate rules. They are one rule and four ways to catch yourself breaking it. Follow them literally.

### P1 — A method is a physical action on the visible screen

Before writing a method, ask: *could a person do this, on this screen, in one click or by typing?* If no, it does not exist. This kills two species of fake method:

- **Macros** — `say`, `sendMessage`, `compose`. They bundle several human actions (clear, type, click) into one call. A human does not have a "send message" button that also types; they type, *then* press send.
- **Infrastructure-as-method** — `waitForResponse`, `resetData`, `refresh`, `refreshMetadata`. No human "refreshes" a screen object. They look, and if it is not ready, they look again. Waiting is the caller polling a sensor, not a method on the screen.

### P2 — Clicks are parameterless; only typing takes a parameter

A button takes no argument — you press it or you do not. So every method that models a click is **parameterless**: `newChat()`, `send()`, `delete()`, `open()`, `select()`, `confirm()`, `pin()`. The *only* methods that take a parameter are the ones that model typing into a field: `type(text)`, `search(query)`. A button is, precisely, a parameterless method.

This is why P1's macros are illegal at the type level: `sendMessage(text)` takes a parameter *and* models a click — it is secretly two actions wearing one signature. Split it: `type(text)` then `send()`. Same for `compose(text)` → `clear()` then `type(text)`; for rename → `menu.rename()` (click) → `field.type(text)` (type) → `field.confirm()` (click). Three actions, three calls.

### P3 — The object IS the screen; an unreachable method is a hierarchy bug

The object you hold represents *exactly* the screen you are looking at. If that object exposes an action that is not visible on that screen, **the class hierarchy is wrong** — not the caller, not the runtime state. You do not add a guard (`requireScreen`, `if (!onConversation) throw`). You move the method to the object where it is reachable.

The type system is the guard. You cannot call `readMessages()` unless you are holding a `ConversationPage`, and the only way to get one is to navigate to it (`item.open(): ConversationPage`). Invalid actions are made *unrepresentable*, not defended against at runtime. Doug's form of the test: *if a screen's object exposes an action that isn't on that screen, the hierarchy is wrong.*

### P4 — Static things are strongly typed; strings are only the user's data

The app's own vocabulary is finite and known at design time: sidebar buttons, menu items, model options, thinking modes, project-picker entries. All of it must be **strongly typed** — a parameterless method or a typed list item. The user's *data* is open-ended: conversation titles, project names. Only that is a string.

A magic string at the View layer — `invokeByName('Projects')`, `selectModel('Opus')` — is a confession that you failed to model something static; it papers a hole in the class hierarchy. The UIA string still exists, but it lives **inside the controller** as an implementation detail, never in the View's API. `selectModel('Opus')` becomes `modelPicker.options → find('Opus') → option.select()`. `find` returning `undefined` is a real "not on screen," and that — [find proves existence](#) — is the only honest way to ask whether something is there.

### P5 — Every action verifies itself, and the gateway is where that lives

A human clicks and then *watches*: did the screen change? The driver must do the same. Every action method both acts and confirms: `open()` clicks **and** verifies the new screen appeared; `maximize()` calls Win32 **and** verifies foreground rather than trusting the call returned.

The [Gateway](02-02-the-architecture--gateway.md) is the single place this is enforced. `act(action, verify)` fires the action exactly once and polls the verify sensor with tapering backoff; `waitFor(predicate)` and `read(reader, validator)` do the same for waiting and reading. The gateway also checks foreground first — you cannot act on an app you cannot see ([P-foreground](#)). Verification is not optional politeness. An action you did not verify is an action you only *hope* happened.

### The one-line audit

Read any method signature. If it takes an **index**, a **timeout**, or a **constant-as-a-string**, or it does **two things** (type + act), it is wrong. The fix is almost always: *split it*, or *turn the string into a found object*. Run this against every file the migration touches.

## The connection to view purity

[Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md) notes this is the same discipline as $Chemistry's [view purity](../..teamsmanship/..team/cathy/reactivity-models/.cover.md): the model must be a *total, faithful function of what is on the screen*, and the design must make invalid states unrepresentable rather than guarded. A magic string or a runtime `requireScreen` is the specification leaking out of the type system and reappearing as a runtime check. Carry the specification in the types and the leaks disappear.

## How code and docs move together (Sprint 91)

The coding does not finish and *then* get documented. They move in lockstep, the way [Code-Library Linkage](11-code-library-linkage.md) specifies:

1. Build a class to this design.
2. Write its `///:` annotation pointing to the Reference Desk chapter that explains the pattern it instantiates.
3. Update the IS-chapter ([ch.10](10-architecture-patterns.md)/[ch.12](12-the-app.md)) to describe the class as it now exists.
4. The [link checker](../..environmentalism/05-on-validation--check-links.ts) validates the `///:` links the same as markdown; the [introspect tool](09-codebase-index--introspect.ts) shows annotation and API side by side.

Documentation never runs ahead of code (that is this chapter's job, and only because it is marked target). It runs *with* it. Ground truth for modeling each screen lives in [`.claude/src/debug/`](../../src/debug/) — UIA tree dumps, PNGs, the menu and project-modal capture sequences. Read those; capture your own when a screen isn't covered ([looking at the app](../projected-identity/54-sprint-88--retro.md) is how Sprint 88 finally made progress).

## Target object model

The full model is specified in [Sprint 90 Part 3](../projected-identity/57-sprint-90--the-app-driver-refactor.md#part-3--target-object-model). Summary: `Claude` holds only `window` and `launch(): Page`. `Page` is abstract, holds the one universal `Sidebar`. `HomePage`, `ConversationPage`, `ProjectsListPage`, `ProjectDetailPage` extend it. Items (`ConversationItem`, `ProjectItem`, `ProjectPickerItem`, `Message`, `Artifact`, `ProjectFile`, `ModelOption`) carry their own actions. `ConversationItem` is shared by the sidebar and the project detail page. `Composer` is page-unaware.

## Class catalogue

Every target class, its layer, responsibility, and public surface. Parameter rule (P2) enforced throughout: only `type`/`search` take a string; everything else is parameterless. Verified against the current code via the [introspect tool](09-codebase-index--introspect.ts) on 2026-06-18.

### View — pages

| Class | Responsibility | Public surface |
|---|---|---|
| `Page` (abstract) | What every screen shares | `sidebar: Sidebar`; `screenType` |
| `HomePage extends Page` | The empty/new-chat screen | `composer: Composer`; `modelPicker: ModelPicker` |
| `ConversationPage extends Page` | An open chat | `title`; `projectName`; `composer`; `messages: Message[]`; `response: Response`; `scrollToBottom()`; `scrollToTop()`; sensors `isResponseComplete()`, `hasResponseContent()`, `hasStopButton()`, `canSend()` |
| `ProjectsListPage extends Page` | The projects screen (was "grid") | `projects: ProjectItem[]`; `find(name)`; `create(): NewProjectForm` |
| `ProjectDetailPage extends Page` | One project | `name`; `instructions`; `files: ProjectFile[]`; `conversations: ConversationItem[]`; `composer` |

### View — items and components (each carries its own actions)

| Class | Responsibility | Public surface |
|---|---|---|
| `Sidebar` | The one panel on every screen | `conversations(): ConversationItem[]`; `newChat(): HomePage`; `projects(): ProjectsPage`; `search(text)` |
| `Composer` | The text box | `type(text)`; `clear()`; `readDraft()`; `send(): ConversationPage`; `attach()` |
| `ConversationItem` | A conversation in the sidebar **or** a project page | `name`; `open(): ConversationPage`; `menu(): ConversationMenu` |
| `ConversationMenu` | The three-dot menu | `rename(name)` (types the new title into the inline field, commits with Enter — no confirm button); `addToProject(): MoveConversationModal`; `removeFromProject()`; `delete()`; `pin()` |
| `ProjectItem` | A project in the list | `name`; `open(): ProjectPage` |
| `MoveConversationModal` | The "Add to project" dialog (UIA title "Move chat") — **not unitary**: a project list plus a search bar | `projects(): ProjectChoice[]`; `search(text)`; `cancel()` |
| `ProjectChoice` | One project in the modal | `name`; `select()` (auto-confirms, closes the modal) |
| `Message` | One message in a conversation | `text`; `role`; `thinkingBlock: ThinkingBlock \| null`; `copy()`; `retry()`; `edit(text)` (modeled when built — the message editor is its own thing, possibly with a real Save button) |
| `ThinkingBlock` | Collapsible extended-thinking block | `summary`; `expand()` |
| `Response` | The current/streaming response | `text`; `isComplete`; `hasContent` |
| `Artifact` | An artifact in the panel | `title`; `open()`; `copy()`; `download()` |
| `ProjectFile` | A file on a project | `name`; `read()`; `remove()`; `download()` |
| `ModelOption` | One option in the model dropdown | `name`; `select()` |
| `ModelPicker` | The model/thinking selector | `options: ModelOption[]`; `current()`; `thinkingModes: ModelOption[]` |

### Gateway / Controllers / Infrastructure

| Class | Layer | Note |
|---|---|---|
| `Gateway` | Gateway | Unchanged in shape: `act`, `waitFor`, `read`; foreground checked on all three. The only foreground gate. |
| `*Controller` (one per component) | Controller | Pure sensors/actuators. No gateway, no foreground, no `requireScreen`, no orchestration. |
| `Window`, `Uia`, `Shell`, `Keyboard`, `Navigator`, `Automation` | Infrastructure | Largely unchanged. `Navigator` loses `requireScreen` (see Patterns). |
| `Claude` | Root | Holds `window` + infra only. `launch(): Promise<Page>`. No always-on page properties. |

## The object model (settled — model the objects, not their features)

**The modeling rule.** A shared *feature* is not a class. `TailedAnimal : Animal` is wrong — "has a tail" is a property some animals have, not a kind of animal. So there is **no** `ComposerPage` for "pages with a composer": the composer is a property some pages have. You make an **interface** for a feature *only* when you need to treat it polymorphically (hold the feature and swap implementations through it). Here we never do — you are always on a *concrete* page — so the feature is just an **independent property** on each page that has one. No interface, no shared base around the feature.

**`Page` is the only base** (every screen genuinely IS-A page — it has the sidebar). The four real pages, each carrying the properties it actually has:

```
Page (abstract)        sidebar(): Sidebar          ← the global conversation list, on every page
├── HomePage           composer: Composer; modes()
├── ConversationPage   composer: Composer; messages(): Message[]; response: Response; menu(): ConversationMenu
├── ProjectsPage       projects(): ProjectItem[]
└── ProjectPage        composer: Composer; conversations(): ConversationItem[]; files(): ProjectFile[]; instructions
```

`composer` is the same `Composer` **class**, declared independently on the three chat surfaces — not inherited, not behind an interface, because nothing needs to abstract over it. Its `send(): Promise<ConversationPage>` takes you to a conversation page (or returns the one you're on). Reused component **classes** (`Composer`, `ConversationItem`, `ConversationMenu`, `Message`, `Response`, `Part`, `ProjectItem`, `ProjectFile`, `MoveConversationModal`) are flat — they compose into the pages and into each other; they do not extend. `ConversationItem` is one class shown in the `Sidebar` and on a `ProjectPage`. `ConversationMenu` is reached from `ConversationItem.menu()` and `ConversationPage.menu()`; its `rename(name)` types straight into the inline title field (no separate `EditField` — a rename field has no confirm button).

## Dependency graph

Strict, one direction, each layer talks only to the layer below:

```
Scripts
  └─→ View (Page, items, Composer, Sidebar, …)
        └─→ Gateway
              └─→ Controllers (*Controller)
                    └─→ Infrastructure (Uia, Shell, Window, Keyboard)
```

Made concrete, the rules that the current code violates and the redesign enforces:

- **`Composer` must not import `Uia`.** Today `components/composer.ts` reads `uia.readText()` directly to verify a send — a View skipping two layers. Removed: `Composer.send()` confirms only that the draft cleared (its own controller sensor); `ConversationPage` owns "did response text appear."
- **Controllers import only `Automation`** (gateway, uia, keyboard, navigator bundle) and never each other. They expose sensors and actuators; they never sequence.
- **The Gateway is imported only by View classes.** No script and no controller imports it.
- **`Claude` imports infrastructure, not pages.** It cannot hold a `Conversation` — you reach a `ConversationPage` only by navigating, so the dependency from a page back up to `Claude` does not exist.
- **Items depend on their controller, not their page.** A `ConversationItem` knows how to `open()` itself via its controller; it does not hold a back-reference to the `Sidebar` or page that listed it.

## Layer invariants — the sanity test

Five theorems. Every file Sprint 91 touches is audited against them; a violation is a bug in the file, not a judgment call.

1. **The class hierarchy represents the app.** `Page` (abstract) and its screen subclasses; items compose, they don't extend. If a class doesn't correspond to something on screen, it doesn't belong.
2. **It is very different from the current code, and that is expected.** Much is deleted, decomposed, and renamed (see the removal plan). Do not preserve the old shape to save tests.
3. **The gateway is in every View method that reaches a controller; never in a controller.** A View action is `gateway.act(actuator, verifySensor)`; a View read is `gateway.read(reader, validator)`. The View reaches a controller *only* through the gateway. (Precision: the `verifySensor` is a raw controller sensor the gateway *calls* while polling — it is not itself gateway-wrapped.)
4. **Controllers interface with the UIA tree; View methods never do.** Only controllers import `Uia`/touch the tree. A View class importing `Uia` is a layer violation. *Current breach to fix: `components/composer.ts` reads `uia.readText()` — removed by [decision #2](#settled-decisions-the-four-open-questions). Sprint 91 audits every View file for a stray `Uia` import.*
5. **Controllers have no gateway — that is the View's job.** A controller is blind: no `gateway.*`, no foreground check, no `requireScreen`, no orchestration. *Current breach to fix: `conversation-controller.ts` runs `gateway.waitFor` inside `waitForResponse()`; the controller keeps the `isResponseComplete()` sensor and the View does the waiting.*

6. **Everything that touches the app is async and never blocks.** Any method that reaches the shell, the UIA tree, or the window returns a `Promise` and `await`s. The gateway polls with awaited sleeps (tapering 50ms→1s) — it never busy-waits and never blocks the event loop. Only pure data transforms (parsers, `toMarkdown()`, getters over already-read data) may be synchronous, because they don't touch the app. *Current breach to fix: `window.ts` (Win32 lifecycle — `find`/`launch`/`focus`/`maximize`/`minimize`/`isForeground`/`requireForeground`) is synchronous via `powershellSync`, which spawns a fresh shell and blocks (~200ms). Convert it to the async persistent shell (also faster, 12ms). This cascades: `Gateway.requireForeground()` and its call sites — `act`/`waitFor`/`read`, `claude.launch()` — become async.*

`chat-list-controller.ts` and `composer-controller.ts` already satisfy 3–6; they are the reference models.

## Patterns (worked examples against real classes)

**The list pattern** — `read → find(name) → item.action()`. Replaces every `open(title: string)`/`select(name: string)`/`openAt(index)` on a container.
```
// now (chat-list.ts):           sidebar.chatList.open('Test')
// target:                       sidebar.conversations.find('Test')?.open()
// now (model-picker.ts):        modelPicker.selectModel('Opus')   // magic string
// target:                       modelPicker.options.find('Opus')?.select()
```

**Split typing from acting** (P1/P2) — one human action per call.
```
// now (composer.ts):            // compose(text) was already split — good
// now (chat-list.ts):           chatMenu.rename('New title')      // macro
// target:                       const f = await menu.rename(); await f.type('New title'); await f.confirm()
```

**Find proves existence** (P4) — a returned object is proof the thing is on screen; `undefined` is an honest "not there."
```
// target:   const item = sidebar.conversations.find('Test')   // ConversationItem | undefined
//           if (!item) throw new NotOnScreen('Test')          // real not-found, not a bad search string
```

**Action verifies itself** (P5) — every actuator is wrapped `gateway.act(actuator, sensor)` in the View; the controller stays blind.
```
// View:     await this.gateway.act(c.clickRename, c.isRenameFieldActive)   // act once, poll the sensor
// Controller (blind):  async clickRename(): Promise<boolean> { … }          // no verify, no foreground
```

## Removal plan (file-by-file)

What Sprint 91 deletes, renames, and decomposes. Grounded in the current files. **Breaking the tests that target these is expected.**

### Delete outright

- **`pages/projects.ts`** (`Projects`) — duplicates `pages/projects-grid.ts`. Its `open(name)`/`openAt(index)`/`create(name,desc)`/`remove(name)` collapse into the list pattern on `ProjectsListPage`.
- **`pages/project-detail.ts`** (`ProjectConversations`, `ProjectConversationItem`) — both it and `chat-list.ts` read "More options for X" list items. Unify on one `ConversationItem`; `ProjectDetailPage.conversations` reuses it.

### Rename into the target

- **`pages/projects-grid.ts`**: `ProjectsGrid` → `ProjectsListPage extends Page`; `ProjectCard` → `ProjectItem`. "Grid" is a display detail; it's a list.
- **`pages/home.ts`**: `Home` → `HomePage extends Page` (holds `composer`, `modelPicker`).
- **`components/chat-list.ts`**: `ChatItem` → `ConversationItem`; `ChatMenu` → `ConversationMenu`. `ChatList` dissolves into `Sidebar.conversations` (the list pattern). `ProjectPicker.select(projectName: string)` → `ProjectPickerItem.select()`.

### Decompose the god objects

- **`pages/conversation.ts`** (`Conversation`, 30 methods) → `ConversationPage` + `Message` + `ThinkingBlock` + `Response` + `Artifact` + `EditField`. Move off the page: `copyMessage(index)` → `Message.copy()`; `editMessage(index,text)` → `Message.edit(): EditField`; `expandThinking(index)` → `Message.thinkingBlock.expand()`; `openArtifact/copyArtifact/downloadArtifact(title,…)` → `Artifact.open()/copy()/download()`. Delete the infrastructure-as-method: `waitForResponse(timeout)` (caller does `gateway.waitFor(page.isResponseComplete)`), `refresh()`, `refreshMetadata()`, `isInProject(name)` (read `projectName`, caller compares), `regenerateLastResponse()` → `response`/`Message.retry()`. Consolidate the four readers (`readLastResponse`, `readTurns`, `readStructuredMessages`, `readResponse`) behind `messages`/`response`.
- **`pages/project.ts`** (`Project`, 14 methods) → `ProjectDetailPage` + `ProjectFile` + `EditField`. Split `rename`/`editDescription`/`writeInstructions` into click→`EditField`→`type`→`confirm`. Move `removeFile/readFileContent/downloadFile(name)` → `ProjectFile.remove()/read()/download()`. `addTextContent(title,content)` → dialog steps via existing `TextContentDialog`. Delete `resetData()`, `refresh()`.

### Reconcile the fragmented message model — into a *structure*, not root text

`components/composed-message.ts` (`Message` with write/paste/send), `components/message.ts` (parsers), and `components/turn.ts` (`Content`/`Prompt`/`Response`/`Thinking`) overlap. The reconciliation **preserves the structure in `turn.ts`** — it does not flatten it (Doug, 2026-06-18). The old code already had the right shape and it must not be lost:

- A `Response` is a **structure**: ordered `Content` blocks (text / code), a `Thinking` block, and `Artifact`s — *not* a blob of text read from the root of the UIA tree and string/HTML-parsed. Don't grab root text and parse; build the structure from the tree.
- `Response` exposes **property-like accessors** for the structured view: its content, its thinking, its artifacts — each readable on its own.
- `Response.isStreaming(): Promise<boolean>` — grabs the tree and reports whether anything is still generating. This is the sensor the page's send-unit and read-wait poll (and it must key on **real generated text**, per [decision #2](#settled-decisions-the-four-open-questions), not the "thinking" ack).
- `Response.toMarkdown()` (a `toString()`-style formatter) composes the structure into markdown with sections (thinking, response, artifacts). `Content` already has `toMarkdown()`; `Response` gets one that includes its thinking and artifacts.

Target classes: **one** `Response` (the structured, live one — revive and wire `turn.ts`'s, whose methods currently throw "Not connected to automation"), one `Message` (a message in a conversation, carrying its `Response`/`ThinkingBlock`), `Content`/`Thinking`/`Artifact` as its parts. The compose-time `Message` (write/paste/send) is the `Composer`'s job — fold it in.

**Fetch the structure directly from the tree — do not parse (Doug).** The UIA tree is *already* structured: elements with control types and names. Build the `Response` by querying those elements (the thinking-block button, the response-text elements, code blocks, the artifact tag) and assembling `Content`/`Thinking`/`Response` from them — **never** flatten to `readText()` and re-parse with regex. Don't parse what you can fetch. The old `message.ts` parsers are **informational only**: they tell you *which* markers and control types correspond to *which* part of the structure; that knowledge informs the direct fetch, but the parser code is not copied. The point of the abstraction: **read the response in real time** through a typed structure built by direct tree queries, and `toMarkdown()` it when you want the formatted whole.

#### Lift the UIA signals, don't lose them — and respect the thinking-text gap

The signal vocabulary is **not** being reinvented — it is documented in [Reading Responses](03-02-operations--reading.md#streaming-and-response-detection) and lives in the working driver in [the identity repo](../..environmentalism/06-on-sync.md#beware-the-two-src-directories). Lift it verbatim into the new sensors: the boundary markers (`You said:`, `Claude responded:`, `Message actions`), the `<ANTARTIFACTLINK identifier=… type=… title=…/>` artifact tag, the dedup/noise filters in `text.ts`, and the streaming signals. **Restore** the regression: `hasResponseContent()` must check `'Claude responded:'` **or** `'Claude is thinking'` (the working tree dropped the second; identity keeps it).

The send-unit signal ([decision #2](#settled-decisions-the-four-open-questions), requirement 8) is **actual text streaming** — the page text *growing* — which the old `composer.send()` detected by comparing `readText()` length before and after (it waited for growth, ~20 chars). **Do NOT use the Stop button's *presence* as the gate (Doug, from experience): it can appear on mere acknowledgement and then freeze.** Wait for real text to start growing. Completion is the inverse Doug specified: **the Stop button going *absent after* text has started streaming** means generation stopped — `isResponseComplete()` = no Stop button AND can-send. The thinking-text wrinkle (Sprint 82): during extended thinking the tree has no text yet, so text-streaming detection legitimately waits through the thinking phase until text appears — that is the real "generation started," not the ack. Because reading needs the window visible (Sprint 72), do not minimize while generation is live — keep visible, wait for complete, read, then minimize. This logic exists in the working driver (identity `composer.ts` `send()` and `conversation-controller`); **restore it on the page** per decision #2 — the composer clicks, the page watches the text grow.

These become **async, parameterless sensors** on the structured `Response`/`ConversationPage` — `isStreaming()`, `hasContent`, `isComplete` — reading the tree, taking nothing. `isStreaming()` means *the structured response has real text* (fetched from the tree, and growing) — not an indicator. The lifted signals tell the sensors which tree elements to fetch; only the object structure around them is new.

#### The `Response` as a polymorphic collection of parts (Doug, 2026-06-21)

**This is the [`Response` View object](02-01-the-architecture--layers.md#response-and-message-objects) on the [`ConversationPage`](10-architecture-patterns.md#the-class-hierarchy) — a TypeScript class in the app's View layer, integrated into the object model. It is NOT a script.** The `ConversationController` does the blind UIA reads (`readText` for the Document body, the ordered named elements for the part markers); the `Response` View assembles the parts from that data; the page exposes it as `conversation.response`. `/think` has none of this logic of its own — it just drives the app's view. The capture scripts under `src/scripts/` are *throwaway scaffolding* that grounded the design against the live app; they are not the deliverable (the smell of building *around* the app instead of *in* it).

The body content (approach **a**: read from the Document text) is structured like this:

- `Response` holds the **raw extracted response block** in a private field; `toString()` returns it whole (fidelity). Raw is the source of truth.
- The parts are an **ordered list** (an array, in document order). **Order is guaranteed by construction:** the parts are built by walking the named UIA elements, which `allNames()` returns in document/tree order — so a prose run, then a `python code` Group, then another prose run come out in exactly that sequence, each part keeping its position. The Document text only supplies the *clean content* for each part already located in order. Rendering (`toMarkdown()`) just maps over the ordered list.
- `Part` is a base class; each part is a **subclass with a string `type` discriminant** and its own properties: `TextPart`, `CodePart` (`language`, `code`), `ArtifactPart` (`title`, `format`, `body`), `ThinkingPart`/`ResearchPart` (`summary`), and more as Claude Desktop surfaces them. The system scales — a new kind of output is a new subclass.
- Each `Part` **renders itself polymorphically** — `toMarkdown()` now, a `$Chemistry` visual later. The parts are an interpretation of the raw; the same parts can be re-rendered many ways. (This is the project's polymorphic-view pattern, not just a parsing convenience.)

**Three complications to respect when building it:**
1. **"The whole thing" needs a first extraction.** The Document text is the whole *app* (chrome, sidebar, user message, the truncated `Claude responded:` preview, the thinking summary — twice — then the body). Isolate the response *block* — after the thinking summary, before the composer — and store *that* as the raw. This boundary-find is the most fragile parse (`Claude responded:` appears as both preview and full text); make it carefully.
2. **The code/artifact parsers can't be grounded yet.** Every [captured tree](../../src/trees/README.md) is plain prose — no code block, no artifact. How those appear in the Document text is unknown. Build the part *system* and `TextPart` now (groundable); **capture a code-block response and an artifact response** before writing `CodePart`/`ArtifactPart`, so they aren't guessed.
3. **Parse on complete, not mid-stream.** A growing raw can be mid-code-block; parsing it yields broken parts. Parse fully when `isComplete()`; during streaming expose the raw-so-far without committing to parts.

### Controller cleanup (Part 4E)

- ✅ `chat-list-controller.ts`, `composer-controller.ts` — already pure; the two models.
- ⬜ `conversation-controller.ts` — remove `waitForResponse(timeout)` orchestration; keep sensors (`isResponseComplete`, `hasThinkingBlock`, `readResponse`, …). The View waits via the gateway.
- ⬜ `sidebar-controller.ts`, `project-controller.ts`, `projects-controller.ts`, `model-picker-controller.ts`, `artifact-panel-controller.ts` — strip any `gateway.*`, foreground, or multi-step sequencing; expose raw sensors/actuators only.

### Infrastructure

- **`navigator.ts`**: remove `requireScreen(...)` — runtime screen guards are exactly what P3 forbids; the page *type* is the guard. Keep `detectScreen()` (needed for `launch()` resume-or-home). Re-home helpers (`goHome`, `resetToHome`) stay as recovery; navigation that lands on a screen returns the typed page.
- **`claude.ts`**: change `launch(): Promise<void>` → `launch(): Promise<Page>`. Already free of always-on page properties — keep it that way.

## Settled decisions (the four open questions)

1. **`launch()` returns base `Page`.** Mechanism: read the last-known screen, reconstitute that page object, and ask it (`detectScreen()`) whether it really is that screen; on mismatch, `goHome()` and return `HomePage`. You earn a concrete page type only by *confirming* state. `detectScreen()` already exists to support this.
2. **Send-verify lives on `ConversationPage`, not `Composer`.** `Composer.send()` clicks Send and confirms the draft cleared (its own sensor). The "response text appeared → Desktop acknowledged" check belongs to the page that can see the response. **Drop the `Uia` import from `Composer`.** That page-level check must wait for **actual streaming response text**, not the "Claude is thinking" / "Claude is responding" server acknowledgement — the ack can hang, **especially after a minimize** (Doug, from experience). The send *unit of work* ends only when real generated text appears; **do not minimize or hand back control before then.**
3. **No `EditField` class — a rename field has no confirm button (revised).** This decision originally proposed one shared `EditField` with `type()` + `confirm()`. That modelled a thing that isn't on screen: the rename field is just a textbox you type into and commit with Enter — there is no confirm *button* to click, and pre-abstracting one shared field across rename / edit-message / rename-project is the same premature-abstraction trap as `TailedAnimal`. So `ConversationMenu.rename(name)` types straight into the inline field and commits (it takes a string because it types into a textbox — the one law that allows a parameter). `Message.edit(text)` and project rename are modelled when built, each as its actual affordance (the message editor may genuinely have a Save button — then *it* gets an object).
4. **`Sidebar.newChat()` returns `HomePage`.** The `Composer` stays page-unaware: it types and clicks. After sending from `HomePage`, the new `ConversationPage` is obtained through the same reconstitute-and-confirm navigation as `launch()` — **no `sendAndGetConversation()` macro.** This is the first thing to validate in Sprint 91, since the home→conversation transition is where Sprint 87/88 broke.

## Accomplishing the 14 think requirements

The object model must be able to *express* each of the [19 acceptance requirements](../projected-identity/55-sprint-89--think-acceptance-tests.md) before `/think` can be written. Doug's 14 map to objects and methods as follows — this is the bridge from design to acceptance test.

| # | Requirement | Object / method that accomplishes it | Where |
|---|---|---|---|
| 1 | Send returns control after sending | The send *unit of work* ends when generation **starts** (real streaming text), not at the click and not at the "thinking" ack. Control returns then — so more work can be done while the response completes. `Composer.send()` clicks + confirms the draft cleared; `ConversationPage` waits for streaming text before returning/minimizing. | M2 |
| 2 | Verify sending on long responses | `send()` verifies the *draft cleared*, not response text — so response length is irrelevant to confirming the send. Response completion is a separate page concern. | M2 |
| 3 | Robust to user typing; clear the box; in the view model | `Composer.clear()` waits for typing stability (3 identical reads) then clears — a View method on the composer. | M2 |
| 4 | State verified before any action; behind the app; via gateways | Every View action is `gateway.act(actuator, sensor)`; the gateway checks foreground and verifies. The page *type* guarantees the screen — no action exists on the wrong page. | all |
| 5 | Create a new conversation on send | `Sidebar.newChat(): HomePage` → `composer.type()/send()` → reconstitute `ConversationPage`. | M2 |
| 6 | Navigate to an existing conversation in the project | `ProjectDetailPage.conversations.find(title)?.open(): ConversationPage` (or `Sidebar.conversations.find`). | post-spike |
| 7 | Sanity-check it's the right conversation | `ConversationPage.messages` — read and compare content. | post-spike |
| 8 | Send and wait for streaming to start before handing back control | After `composer.send()`, wait `gateway.waitFor(page.hasResponseContent)` where `hasResponseContent` detects **actual response text**, not the "thinking"/"responding" ack (which can hang, especially after minimize). Minimize/hand-back only after this passes. | M2/M3 |
| 9 | Read names the conversation by topic and moves it to the project | `ConversationMenu.rename(name)` + `addToProject(): MoveConversationModal` → `projects().find()` → `ProjectChoice.select()`. | post-spike |
| 10 | Read returns the message to Claude | `ConversationPage.response.text` / `messages` returned to the skill. | M3 |
| 11 | Scroll to bottom before write / after send / before read / while waiting | `ConversationPage.scrollToBottom()`, called at each step. | M3 |
| 12 | On read, poll-wait for completion; the app surfaces "finished" | `gateway.waitFor(page.isResponseComplete)`; `isResponseComplete()` is the content-based done signal (not a transient indicator). | M3 |
| 13 | Failure reported with clear context, maybe the UIA tree | The gateway already calls `diagnostics.captureOnFailure` (screenshot + UIA dump); errors carry the description and what was expected. | cross-cutting |
| 14 | Timeout recovery — resume checking | The `/think` state file persists the conversation id; `launch(): Page` reconstitute-and-confirm + open-by-id lets a later invocation resume reading. | cross-cutting |

Every requirement has a home in the model. None requires a macro, an index, or a magic string. That is the test that the hierarchy is right.

## Status

Design principles: written and explained. Class catalogue, hierarchy, dependency graph, patterns, removal plan, decisions: complete and grounded in the current code. **Sprint 90's deliverable is done when this chapter is reviewed.** Sprint 91 executes the removal plan against this catalogue.
