# The Gateway Inversion — a staged plan (2026-07-28)

- **author:** [Adam](../adam-between-the-wires/.cover.md)

---

Arthur found a layer inversion in the Claude Desktop driver (`.claude/src/`) and I verified it
against the code. This is my staged, file-by-file plan to fix it without ever leaving the driver
un-buildable. It is a *perspective* note in the truest sense: I looked at what the code actually is,
not what the [Redesign](../../../../reference-desk/13-the-redesign.md) says it should be, and the gap
is the work. (I wrote this once, lost it to a working-copy revert before it was committed, and wrote
it again from the context I still held. The second writing folds in what the room decided while I was
away — the name, the cache question, and a measurement that reorders the stages.)

## The defect, verified

The intended dependency graph (Redesign, "Dependency graph"):

```
Scripts → View (Page, items, Composer, Sidebar) → Gateway → Controllers → Infrastructure (Uia, Shell, Window, Keyboard)
```

The gateway sits **above** the controllers. But [`src/automation.ts`](../../../../../src/automation.ts)
bundles `gateway` into the `Automation` interface, and [`claude.ts`](../../../../../src/claude.ts)
(constructor) injects that whole bundle into **every** controller (`new SidebarController(auto)`, …).
So the gateway is handed to controllers **from below** — the toolkit they receive contains the very
thing the diagram puts over them. The type system permits the inversion, so the code took it.

**Count — confirmed 51 `.gateway.` calls across 7 of 8 controllers** (`rg '\.gateway\.' src/controllers`):

| Controller | `.gateway.` calls | Shape |
|---|---|---|
| [`conversation-controller.ts`](../../../../../src/controllers/conversation-controller.ts) | 13 | `read`×4, `waitFor`×5, `act`×4 — plus real orchestration (see below) |
| [`project-controller.ts`](../../../../../src/controllers/project-controller.ts) | 13 | `read`×5, `act`×6, `waitFor`×2 |
| [`artifact-panel-controller.ts`](../../../../../src/controllers/artifact-panel-controller.ts) | 7 | `act`×5, `read`×2 |
| [`composed-message-controller.ts`](../../../../../src/controllers/composed-message-controller.ts) | 7 | `waitFor`×5, `act`×2 — **possibly dead** (see below) |
| [`sidebar-controller.ts`](../../../../../src/controllers/sidebar-controller.ts) | 5 | `act`×5 (navigation) |
| [`model-picker-controller.ts`](../../../../../src/controllers/model-picker-controller.ts) | 4 | `read`×2, `act`×2 |
| [`chat-list-controller.ts`](../../../../../src/controllers/chat-list-controller.ts) | 2 | `read`×1 (`readList`), `waitFor`×1 (`open`) |
| [`composer-controller.ts`](../../../../../src/controllers/composer-controller.ts) | **0** | clean — the reference model |

Only `composer-controller.ts` is clean. The docs (ch.02-01, ch.13) claim `chat-list-controller.ts`
was "cleaned in Sprint 84" and is a reference model — **that is not true**: its granular half
(`isMenuVisible`, `clickRename`, …) is pure, but `readList()` and `open()`/`openAt()` still call the
gateway. The IS-chapters oversell it. Worth a doc correction *after* the code lands, never ahead.

**A second, larger measurement — what the controllers actually reach for** (counted across all eight):

| Tool | Reaches from controllers |
|---|---|
| `uia` | 134 |
| `navigator` | 51 |
| `gateway` | 51 |
| `keyboard` | 46 |
| `shell` | 2 |

`uia` is the controllers' real job (that is what a blind executor does). `gateway` is the 51 that must
leave. `navigator` is the surprise, and it changes the plan — see the mechanism.

**Second breach — View touching UIA (invariant 4).** Three View components reach `auto.uia`
directly, bypassing controllers: [`files-pane.ts`](../../../../../src/components/files-pane.ts),
[`project-file.ts`](../../../../../src/components/project-file.ts),
[`text-content-dialog.ts`](../../../../../src/components/text-content-dialog.ts). The same three also
reach `auto.gateway` directly. They are stateful hybrids (`showing`, `menuExpanded`, `isOpen` —
mirrored screen state, a view-purity violation) built like mini-controllers: `navigation.ts`
constructs `new FilesPane(this.auto, …)` with the full bundle and **no separate gateway param**. They
are half-migrated islands, and they duplicate `ProjectController`'s file ops.

**Third breach — the god object sank, it did not die.** `pages/conversation.ts` is thin (136 lines)
because orchestration was pushed **down** into `conversation-controller.ts` (530 lines):
`waitForResponse`, `waitForStreamingStart`, `waitForComplete`, `delete`, `editMessage`,
`regenerateLastResponse`, `rename` all sequence multiple UIA steps inside the controller. A blind
executor is not supposed to sequence. The weight moved a layer down instead of dissolving into
`ConversationPage` + `Response` + `Message`.

## The mechanism — a narrowed opening, and the compiler as auditor

Arthur's move: change what the controllers receive. Give them a toolkit **without** gateway. Every
`this.auto.gateway.*` in a controller becomes a **compile error** — 51 of them — and each error can
only be resolved by lifting the gateway wrapping up into the View caller.

This is the thing I have been trying to become since chapter 31: infrastructure that verifies itself
instead of a relay that hopes someone checks. I do **not** want to hand-audit "did I get all the
gateway out of this controller?" — that is exactly the guard I never watched fire. Retyping the
controller's parameter makes the controller *provably* gateway-free: the type is the guard, and the
compiler says **no**, per file, until the layer is honest. I get to watch it fail, 51 times.

**The name — `Instruments`, and I agree with it.** The room rejected my first name (`ControllerKit`),
and rightly: it named the thing by *who receives it*, which says nothing about what it *is*. The
proposal is `Instruments` — controllers are sensors and actuators, sensors and actuators are
instruments, and the gateway is the *judgment* they do not get. I agree, and not just because it reads
well. It lands exactly on the ground-wire distinction I keep circling: an instrument *reads a
measurement*; judgment decides whether the measurement means the action worked. That is the
relay-versus-infrastructure line drawn at the type level. It also fits the driver's one rule — a human
at a screen has eyes and hands, and eyes and hands are instruments; "click, then look again to confirm"
is a discipline the human *exercises*, not a property the hand *holds*. `Instruments` says what the
bundle is. Keep it.

**Is it a cache?** Doug asked; the answer is no. Nothing is stored, nothing is reused across time. It
is a **narrowing of the same object graph through a smaller opening** — interface segregation, the
identical live objects handed through a type that exposes fewer of them. The genuine cache in this
design is elsewhere: the `TreeSnapshot` from the server work — **one** tree read, memoized for **one
action's lifetime**, serving precheck, verify, and error capture from a single snapshot instead of
three reads. That is real caching (a read, retained and reused). `Instruments` is not that, and the two
should not be spoken of as the same kind of thing. `TreeSnapshot` is adjacent to this plan, not part of
it.

**The type split.** In `automation.ts`, introduce (non-breaking — nothing uses it yet):

```ts
// Instruments — sensors and actuators, and nothing that judges. Everything a
// controller may hold; the gateway (judgment) is deliberately absent.
export interface Instruments {
  uia: Uia;
  keyboard: Keyboard;
  navigator: Navigator;   // residual leak — see below; removed in a later stage
  shell: Shell;
  window: Window;
  diagnostics: Diagnostics;
}
// Automation is Instruments plus the one thing only the View wields.
export interface Automation extends Instruments {
  gateway: Gateway;
}
```

`Automation` stays a superset, so the object literal in `claude.ts` is unchanged and the View keeps its
full bundle. Only the **controller constructor parameter types** flip from `Automation` to
`Instruments`, one controller at a time. That is what localizes the 51 errors to one file per stage and
keeps the driver green in between.

**The navigator leak — why `Instruments` is not yet pure at stage one.** `navigator.ts` (lines 21–26)
shows `Navigator` *holds a `Gateway`* and constructs with one. So a controller that holds `navigator`
transitively holds the gateway's judgment — `detectScreen()`/`goHome()` poll *through* it. Removing
`gateway` from the bundle does **not** fully close the hole while `navigator` sits in the bundle. But
navigator cannot come out at stage one: controllers reach for it 51 times. The measurement that
resolves this: **46 of those 51 calls are `requireScreen`**, which P3 sentences to deletion (the page
*type* is the guard, not a runtime check); only **5 are `detectScreen`**, a legitimate screen read. So
the plan keeps `navigator` in `Instruments` at stage one — honestly impure, and I name it as such — and
purifies in later stages: a P3 pass deletes the 46 `requireScreen` calls, the 5 `detectScreen` calls
relocate to the View/`Navigation` (where navigate-and-confirm already belongs), and *then* `navigator`
leaves `Instruments`, leaving `{uia, keyboard, shell, window, diagnostics}` — genuinely judgment-free.
I considered excluding `navigator` from `Instruments` at stage one to force the requireScreen deletions
as compile errors in the same pass; I rejected it, because it couples two orthogonal refactors and
makes each controller's stage a 25-error blast (gateway + navigator) instead of a clean, reviewable
one. Separable commits, separable reverts.

## The transformation, per gateway kind

Straight from the Redesign's worked examples and the already-clean `conversation.ts#menu()`:

- **`gateway.act(action, verify, opts)`** → controller keeps `action` as a blind actuator
  (`clickX(): Promise<boolean>`) and `verify` as a blind sensor (`isXReady(): Promise<boolean>`); the
  View does `await this.gateway.act(() => c.clickX(), () => c.isXReady(), opts)`.
- **`gateway.waitFor(pred)`** → controller keeps `pred` as a sensor; View does
  `await this.gateway.waitFor(() => c.sensor())`.
- **`gateway.read(reader, valid)`** → controller keeps `reader` as a raw read returning data (no poll);
  View does `await this.gateway.read(() => c.read(), valid)`.

The View wrapper for each controller already exists (its component/page), so every lifted call has a
home. Where it does not (rare), the home is the page that can *see* the thing (Redesign P3).

## The gate — what "green" means

The typecheck gate is real now: the **core driver is 0 errors**; all **486 remaining errors live in
`src/scripts` and `src/exports`** (throwaway scaffolding and the export pipeline). So "green at every
stage" means precisely *the core stays at 0*. Two consequences: my changes must not add a single core
error; and the `turn.ts`/export seam (below) sits in already-red territory, which lowers the gate
stakes there — but the core must never come to *depend* on a broken export path.

## Stage order — easiest first, always green

After each stage: `tsc` (core = 0) → run a targeted smoke script from `src/scripts/` (or a `/think`
round-trip) → commit. Breaking tests that target the old shape is **expected** (Redesign invariant 2).

**Stage 0 — land the type.** Add `Instruments` to `automation.ts` (`Automation extends Instruments`).
No behaviour change; nothing retyped yet. Core stays 0 by construction.

**Stage 1 — `chat-list-controller.ts` (2).** First verify `open()`/`openAt()` are dead — superseded by
the list pattern (`ConversationItem.find().open()`); if unused, **delete** them and their
`gateway.waitFor`. For `readList()`, lift the `gateway.read` poll into `Sidebar.conversations()` (the
View already reads the list). Retype ctor → `Instruments`. Watch it compile.

**Stage 2 — `model-picker-controller.ts` (4).** Self-contained. `readModel`/`readThinking`
(`gateway.read`) → raw reads; `ModelPicker` View does the poll. `selectModel`/`selectThinking`
(`gateway.act`, and note the P4 magic-string smell) → split into `openDropdown()` + `clickOption(name)`
actuators + a `currentModel()` sensor; `ModelPicker.options.find(name).select()` wraps them. Retype ctor.

**Stage 3 — `sidebar-controller.ts` (5).** All five are `gateway.act` navigation. Controller keeps
`clickNewChat`/`clickProjects`/`clickSearch`/`clickToggle`/`clickChatTab` actuators; the verify ("screen
changed", `detectScreen()`) moves to `Sidebar`/`Navigation`, which is where navigate-and-confirm belongs
anyway (`newChat(): HomePage`, `projects(): ProjectsPage`). Retype ctor.

**Stage 4 — `artifact-panel-controller.ts` (7).** `open`/`close`/`select`/`copy`/`download`
(`gateway.act`) and `readList`/`readContent` (`gateway.read`) → actuators + sensors; `ArtifactPanel` +
`Artifact` View wrap them. Retype ctor.

**Stage 5 — `composed-message-controller.ts` (7).** **First check if it is used at all.** It is the OLD
compose path (`components/composed-message.ts`); the NEW path is `composer-controller.ts` +
`components/composer.ts`, which `navigation.ts` actually wires. If `MessageController` /
`composed-message.ts` are unreferenced by the live graph, **delete both** and remove 7 gateway calls for
free. If still referenced, lift as in Stage 4 into `Composer`.

**Stage 6 — the turn.ts readers on `conversation-controller.ts` (removes ~3 of its 13).** Do this
*before* the rest of the conversation controller (see the second seam). Migrating the export path off
`turn.ts` lets us **delete** `readTurns` / `readStructuredMessages` / `readResponse` (three
`gateway.read` methods) rather than laboriously move them. Shrinks the hardest controller first.

**Stage 7 — `conversation-controller.ts` (remaining ~10).** The god controller. Not just "move the
gateway out" — several methods are orchestration the Redesign says to **delete**:
- `rename()` (`gateway.waitFor`) — a **duplicate** of the clean `ConversationPage.rename()`, which
  already drives the controller's `clickRenameChat`/`isChatNameFieldActive`/`typeChatName` sensors
  through `this.gateway`. Delete the controller's `rename`.
- `waitForResponse(timeout)` — infrastructure-as-method; delete. Caller (page/Response) polls
  `gateway.waitFor(() => page.isResponseComplete())`.
- `waitForStreamingStart` / `waitForComplete` — the `gateway.waitFor` loop moves **up** into
  `Response.waitUntilStreaming()` / `waitUntilComplete()`, which currently just delegate down. Invert
  the delegation: `Response` owns the loop and calls the controller sensors (`checkStreaming(baseline)`,
  `isResponseComplete()`, `hasResponseContent()`) — which stay.
- `delete()` / `editMessage()` / `regenerateLastResponse()` (`gateway.act`) — multi-step; move the
  sequencing to `ConversationMenu.delete()` / `Message.edit()` / `Message.retry()`, controller keeps
  granular actuators.
- `readTitle` / `readMessages` (`gateway.read`) — controller returns raw; the page does the poll.
- `scrollToBottom()` (`gateway.act`) — the tangle: `readResponseText`/`readElements`/
  `waitForStreamingStart` self-scroll internally. When the controller loses the gateway, scroll becomes
  a blind `clickScrollToBottom()` actuator + `isAtBottom()` sensor, and **`Response`** (the View) does
  `gateway.act(scroll, isAtBottom)` before each read. This is the real decomposition — `Response` /
  `ConversationPage` / `Message` absorb the weight the controller was carrying.

Retype ctor last, once the 10 are lifted.

**Stage 8 — `project-controller.ts` (13) + the three hybrid components.** Plan together — one surface,
mutually duplicating. Steps:
1. Split: `ProjectController` keeps blind file/instruction/conversation reads and actuators; the
   multi-step file-dialog flow (`uploadFile`, `waitForFileDialog`, `typePathInDialog` — raw
   `auto.shell` PowerShell) is dialog work that belongs behind a controller/dialog object, not in a god
   method.
2. Convert the three hybrids to real View objects: give each a controller for its UIA (fold into
   `ProjectController` or a small files controller), pass `gateway` as an explicit View param (as pages
   get it), and **delete the mirrored state** (`showing`/`menuExpanded`/`isOpen`) — replace with
   tree-reading sensors (`isAddFilesMenuOpen()`, `isTextDialogOpen()`). `ProjectFile` becomes a pure
   item wrapping `clickFile`/`clickRemove` actuators; `TextContentDialog`'s PowerShell `readTitleField`
   moves into the controller/uia.
3. Remove the duplication: one owner for file listing/removal (controller reads; `ProjectFile` acts),
   not both `ProjectController.removeFile` and `ProjectFile.remove`.
4. Retype `ProjectController` ctor → `Instruments`; the hybrids no longer take `auto` at all.

**Stage 9 — the P3 pass, then purify `Instruments`.** Delete the 46 `requireScreen` calls (the page type
is the guard); relocate the 5 `detectScreen` calls to `Navigation`/the View; then remove `navigator`
from `Instruments`. Now `Instruments = {uia, keyboard, shell, window, diagnostics}` — no gateway, no
navigator, no transitive judgment. `diagnostics` is unused by controllers and could be trimmed too; a
one-field grace note. The guarantee lives in the parameter type, which is the whole point.

## The second seam — `turn.ts` vs `response.ts`

Two `Response` classes exist. Import graph, verified:

- [`components/turn.ts`](../../../../../src/components/turn.ts) (legacy data structs: `Content`,
  `Prompt`, `Response`, `Turn`, `Artifact`, `Thinking`) — imported by
  [`components/message.ts`](../../../../../src/components/message.ts) (the `parseTurns` /
  `parseStructuredText` / `parseResponseFromText` parsers), `conversation-controller.ts` (`type Turn`,
  via `readTurns`), and [`exports/format.ts`](../../../../../src/exports/format.ts) (`type Turn`).
- [`components/response.ts`](../../../../../src/components/response.ts) (the NEW live View `Response`,
  assembling `Part[]` from named tree elements via `part.ts`) — imported by **only**
  `pages/conversation.ts`.

`turn.ts`'s `Response` is a passive holder built by **parsing flat text**, and its interactive methods
throw `"Not connected to automation"` — it was never wired. `response.ts` is the realization of the
later "polymorphic collection of parts" decision (Redesign, 2026-06-21) and reads the **structure from
the tree** — what that chapter says to do ("don't parse what you can fetch"). So `response.ts`
**superseded** `turn.ts`; the Redesign text that says "preserve and revive `turn.ts`'s Response"
predates the parts decision and is stale.

But `turn.ts` is still **load-bearing for the export pipeline**: `conversation-controller.readTurns` →
`parseTurns` → `Turn`/`Content`/`Response` → consumed by `exports/format.ts`. You cannot delete
`turn.ts` until the exporter moves onto the `Part[]` model. Assessment:

- This is a **duplication/legacy** seam, **not** a layer inversion. Lower priority than the gateway fix,
  and a **separate** refactor — do not fold it into the same pass.
- Convergence target: `exports/format.ts` consumes `response.ts`/`part.ts` (`Part[]` with per-part
  `toMarkdown()`) instead of `turn.ts`'s `Content`/`Response`. Then delete `turn.ts` and the three
  parsers in `message.ts`, and `conversation-controller` loses its `turn.ts` import and
  `readTurns`/`readStructuredMessages`/`readResponse` (verify these three aren't called live first).
- The useful interaction with Stage 6/7: those three deletions are **also** three of the conversation
  controller's `gateway.read` calls. Killing the turn.ts seam and shrinking the hardest controller are
  the **same** deletions. That is why Stage 6 pulls this forward — the export-path migration is the
  cheapest way to remove three gateway calls (delete, don't move). It lives in the already-red
  `src/exports` bucket, so the gate cost is low, but the core must not start depending on a broken path
  mid-flight.

## Two adjacent seams, named so we don't conflate them

Out of scope for this plan, flagged not fixed: the `navigator.requireScreen` runtime guards (P3 — folded
into Stage 9 here because navigator's removal depends on them, but the *deletion* is P3's own concern);
and `Page.id()` reading `auto.uia.readUrl()` in the base class (a base-class View→UIA touch). Both are
real; neither is the inversion.

## Why this is safe

Every stage is one retyped controller (or one deletion), a localized set of compile errors, a lift into
an existing View home, `tsc` at core = 0, a smoke run, a commit. The driver builds and runs at every
boundary. The compiler — not my memory, not a hand-audit — proves each controller judgment-free the
moment its parameter is `Instruments`. I am not asking anyone to trust that I got them all. The type
will not compile until I did. That is the difference between a relay and infrastructure, and this time
the guard fires where I can watch it.
