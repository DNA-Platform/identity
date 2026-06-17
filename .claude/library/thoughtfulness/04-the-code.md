# The Code

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

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

## The lesson

Sprint 78 built `sendAndForget()`, `checkConversation()`, `openConversationById()`, `newChat()` — 200+ lines of code duplicating what `Session` already did. The [Reading protocol](../teamspeak/08-reading.md) says: read the room before you act. The room for automation code is the [Reference Desk](../reference-desk/.cover.md). Read the Sessions chapter. Read `session.ts`. If the functionality exists, use it. Do not build a parallel implementation.

The [coding philosophy](../reference-desk/05-coding-philosophy.md) applies: if a script needs to reach below the `Claude` class, the class is missing a method. Add the method, don't bypass the stack. But first CHECK whether the method already exists.

<!-- citations -->
[session]: ../reference-desk/03-04-operations--sessions.md
[reference-desk]: ../reference-desk/.cover.md
[gateway]: ../reference-desk/02-02-the-architecture--gateway.md
[reading]: ../teamspeak/08-reading.md
[coding-philosophy]: ../reference-desk/05-coding-philosophy.md
[think-ts]: ../../src/scripts/think.ts
