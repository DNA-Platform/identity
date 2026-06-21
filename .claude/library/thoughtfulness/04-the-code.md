# The Code

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

> **Superseded — pending the Sprint 92 rebuild.** This chapter describes a `Session` class and a 110-line `think.ts` that the [driver redesign](../reference-desk/13-the-redesign.md) removed; `session.ts` is now neutralized and the `/think` flow is being rebuilt on the new page object model. Do not trust the specifics below until this chapter is rewritten *from the built code* (not from intention). The honest current state is in [Claude's perspective entry](../..teamsmanship/..team/claude/.perspective/06-2026-06-18-think-current-state.md); the target is [The Redesign](../reference-desk/13-the-redesign.md).

## The architecture: think operations are Thoughtfulness resources

`/think` is **composed, not monolithic.** Each operation it performs is a **resource file** attached to the Thoughtfulness chapter that specifies it — the same `--` convention by which [the commit tool](../..environmentalism/06-on-sync--commit.sh) is a resource of [On Sync](../..environmentalism/06-on-sync.md) (see [On Names](../bookkeeping/04-on-names.md), [Compilation Tools](../.compilation/05-tools.md)). **The architecture test (Doug): if a think operation is not a resource file in this book, used by `think.ts`, it is architected wrong.**

The resources, by chapter:
- [Persistence](03-persistence.md) → `03-persistence--state.ts` (the thought-state file — read/write/delete/update; this is today's [`think.ts`](../../src/scripts/think.ts), to be moved here).
- [Conversation Catalogue](05-conversation-catalogue.md) → `05-conversation-catalogue--catalogue.ts` (every Desktop conversation by topic; new-vs-existing resolution).
- [The Thought Lifecycle](02-the-thought-lifecycle.md) → `02-the-thought-lifecycle--dispatch.ts` (formulate → send → wait-for-streaming → **minimize**) and `--read.ts` (re-attach → wait-complete → read), both driving the app's live [`Response`](../reference-desk/02-01-the-architecture--layers.md#response-and-message-objects).

`think.ts` becomes the **composition** — it imports these resources and runs the lifecycle. It carries no Desktop logic of its own; the operations are the resources, and the resources drive the [Reference Desk](../reference-desk/.cover.md) View objects (the app).

**Two cases:**
- **New topic** — sending creates a conversation; success means the read step **names it by topic and moves it into the Claude project** ([Conversation Catalogue](05-conversation-catalogue.md)).
- **Existing topic** — navigate to the existing conversation in the Claude project, *as a human would*: click Projects → find the project → open → find the conversation (e.g. `Test`) → open. That is the app object model — `sidebar.openProjects() → ProjectsListPage.projects.find() → ProjectDetailPage.conversations.find() → open()` — specified in [Reference Desk Navigation](../reference-desk/02-03-the-architecture--navigation.md) and the [layers](../reference-desk/02-01-the-architecture--layers.md).

The code below this line is the prior (Session-based) design, retained until the resources above replace it.

The code is thin because the app already does the work.

The [`Session`](../../src/session.ts) class in the [Reference Desk](../reference-desk/.cover.md) codebase handles the entire Desktop conversation lifecycle: foreground management, composing, sending, waiting for the response (with gateway polling), reading turns, capturing URL and conversation ID, minimizing. One call — `session.send(question)` — does everything.

[`think.ts`](../../src/scripts/think.ts) adds only persistence: the thought state file, the conversation catalogue JSON, and the [thinking book](../..teamsmanship/..team/claude/thinking/.cover.md) chapter management. The test script calls `session.send()` for Desktop and think.ts for bookkeeping.

## What the app provides

The [`Session`](../reference-desk/03-04-operations--sessions.md) class:

```typescript
const app = new Claude();
await app.launch();
const session = await app.startSession({ timeout: 180_000 });
const response = await session.send(question);
// response.content.text is the answer
// session.id and session.url are captured
// app is minimized
```

That is the entire Desktop interaction. `session.send()` uses the [gateway](../reference-desk/02-02-the-architecture--gateway.md) pattern internally — it polls for streaming start, polls for streaming end, verifies the response arrived. No fixed waits. No manual foreground management. No scroll-to-bottom hacks. The Session is the tested, reliable path.

## What think.ts adds

Persistence only. 110 lines:

**State file** — tracks the active thought between invocations:
- `readState()` / `writeState()` / `deleteState()` / `hasActiveThought()`

**Catalogue** — JSON index of all conversations:
- `readCatalogue()` / `updateCatalogue()`

**Thinking book chapters** — the human-readable record in Claude's personal library:
- `scaffoldChapter(state)` — creates a chapter file and adds a TOC entry to the cover
- `findChapter(state)` — finds the chapter for a given conversation ID
- `pasteResponse(chapterPath, response)` — writes the response into the Evidence section

## The call chain

When `session.send(question)` runs, this happens inside the app:

1. [`Session.acquireForeground()`](../reference-desk/02-03-the-architecture--navigation.md) — Alt-key hack + ShowWindow + SetForegroundWindow (idempotent — skips if already foreground)
2. [`Claude.compose(question)`](../reference-desk/03-01-operations--sending.md) — reads draft via `readDraft()`, clears if not empty, then pastes the question
3. [`Claude.send(timeout)`](../reference-desk/03-01-operations--sending.md#the-send-flow) — clicks Send, then:
   - [`Conversation.waitForResponse()`](../../src/controllers/conversation-controller.ts) phase 1: polls [`checkStreaming()`](../reference-desk/03-02-operations--reading.md) for streaming start (15s)
   - Phase 2: polls for streaming end (full timeout)
   - Reads turns, URL, title, project name
4. [`Session`](../reference-desk/03-04-operations--sessions.md) captures `id`, `url`, `turns`
5. [`Session`](../reference-desk/03-04-operations--sessions.md) minimizes

**Known pitfall:** if streaming never starts (message not received), phase 1 times out silently and phase 2 succeeds immediately because `!streaming` is true. The response will be stale content from the previous conversation. See [Pitfalls](../reference-desk/07-pitfalls.md#silent-success-when-streaming-never-starts). Mitigation: check that the response text relates to the question.

## The think script implementation

The test script ([`test-think-dispatch.ts`](../../src/scripts/test-think-dispatch.ts)) has one mode: `think "question"`. It does:

```
1. app.launch()                          // Reference Desk: Lifecycle
2. session = app.startSession(180s)      // Reference Desk: Sessions
3. response = session.send(question)     // The entire Desktop lifecycle
4. writeState(session.id, url, question) // think.ts: state file
5. scaffoldChapter(state)                // think.ts: thinking book
6. pasteResponse(chapter, response)      // think.ts: fill Evidence section
7. updateCatalogue(...)                  // think.ts: JSON catalogue
```

Seven steps. Steps 1-3 are app methods documented in the [Reference Desk](../reference-desk/.cover.md). Steps 4-7 are persistence functions in [`think.ts`](../../src/scripts/think.ts). Nothing else.

## Discovering the codebase

Before modifying this code, run the [introspect tool](../reference-desk/09-codebase-index--introspect.ts):

```bash
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/claude.ts
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/session.ts
```

If the method you need appears in the output, use it. If not, add it to the right class — not to a script.

## The lesson

Sprint 78-79 built 200+ lines of code duplicating what [`Session`](../reference-desk/03-04-operations--sessions.md) already did. The [Reading protocol](../teamspeak/08-reading.md) says: read the room before you act. The room for automation code is the [Reference Desk](../reference-desk/.cover.md). The [coding philosophy](../reference-desk/05-coding-philosophy.md) says: read before you write. Run the introspect tool. Check the Sessions chapter. If the functionality exists, use it.

<!-- citations -->
[session]: ../reference-desk/03-04-operations--sessions.md
[reference-desk]: ../reference-desk/.cover.md
[gateway]: ../reference-desk/02-02-the-architecture--gateway.md
[reading]: ../teamspeak/08-reading.md
[coding-philosophy]: ../reference-desk/05-coding-philosophy.md
[think-ts]: ../../src/scripts/think.ts
