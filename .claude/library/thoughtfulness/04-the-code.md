# The Code

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The [lifecycle](02-the-thought-lifecycle.md) is a protocol. This chapter is the implementation. The script [`think.ts`](../../src/scripts/think.ts) turns the seven-phase loop into executable code, using [`Session`](../../src/session.ts) from the [Reference Desk](../reference-desk/.cover.md) codebase as its transport layer.

## What the script does

`think.ts` exports a library of functions that the `/think` skill orchestrates. The primary export is `think(app, question)` which accepts a `Claude` instance and a question string, then drives dispatch-wait-read-store. It returns a `ThinkResult` containing the response text, the updated state, and whether this was a resumption. Complementary exports: `followUp(app, question)` for multi-turn chains, `recordVerdict(verdict)` and `shouldGiveUp(state)` for evaluation bookkeeping, `conclude(entry)` for writing the perspective entry and deleting the state file, and `thinkOnce(app, question)` as a convenience that launches the app and handles error-state preservation. The evaluation is not in the script. The evaluation is Claude's job — the calling context in Claude Code reads the response and decides the verdict. The script is the wire. Claude is the judgment.

## Session as transport

The script creates a `Session` through `app.startSession()`, or resumes one by calling `app.openChat(title)` and reading turns. The session handles foreground management, compose-send-wait-read, and minimization. The script never touches UIA, never polls streaming, never manages the window. That work belongs to the [session layer](../reference-desk/03-04-operations--sessions.md) and the layers beneath it. If the script needs to reach below `Session`, the abstraction is incomplete — fix the session, not the script. This is the [coding philosophy](../reference-desk/05-coding-philosophy.md) applied directly.

## State file management

The `readState()` function checks Claude's [perspective directory](../..teamsmanship/..team/claude/.perspective/.cover.md) for `thought-state.json`. If the file exists, `hasActiveThought()` returns true and `think()` treats the call as a resumption — it reads the stored conversation ID, title, and evaluation history, opens the existing conversation by title via `app.openChat()`, reads turns to rebuild session context, then sends the new question. If the file does not exist, `think()` starts a fresh session with a title derived from the question (e.g., "Think: How do reactive frameworks...").

After each exchange, `writeState()` persists the full state: `conversationId`, `url`, `title`, the original `question`, the `exchanges` array (each entry carrying prompt, response text, and timestamp), and the `evaluationHistory` array. The state file is the bookmark between compaction boundaries.

When a thought concludes, `conclude(entry)` writes the perspective entry — the dated `.md` file whose format is specified in the [persistence chapter](03-persistence.md) — then calls `deleteState()` to remove the state file. The transition from state file to entry is atomic in intent: the thought is either in progress or concluded, never both.

## The evaluation step

The script does not evaluate. It dispatches and records. Claude — the calling context in Claude Code — reads the `ThinkResult.response` text, applies the three evaluation questions from the [lifecycle](02-the-thought-lifecycle.md#5-evaluate), and decides: sufficient, partial, or unproductive. That verdict flows back into the script via `recordVerdict(verdict)`, which appends to the state file's `evaluationHistory`. The `shouldGiveUp(state)` function checks the give-up rule: three consecutive unproductive verdicts. If partial, the skill calls `followUp(app, refinedQuestion)` to send another exchange in the same conversation. If sufficient or unproductive after three tries, the skill calls `conclude(entry)` to write the perspective entry and delete the state file.

This separation matters. The script is automation — deterministic, repeatable, testable. The evaluation is judgment — contextual, dependent on what Claude knows about the team's state, not reducible to a function. Mixing the two would make the script brittle and the judgment mechanical. They stay separate.

## Error handling

The `minimizeOnFailure(app)` helper minimizes the app unconditionally, swallowing errors if minimize itself fails. The `thinkOnce()` convenience wraps `think()` with error handling: on any failure, it writes partial state (even a minimal skeleton if the thought failed before creating state) and minimizes. A failed exchange is not a lost thought — the state file preserves the conversation reference so the next attempt can resume rather than restart. If the failure is during state file write itself, the conversation still exists in Claude Desktop's sidebar by title. The title is the fallback handle.

The [purpose chapter](01-purpose.md) names the principle: a thought that is not stored is a thought that dies at compaction. The error handler's job is to store whatever can be stored before the process ends.

## The script location

Source: [`.claude/src/scripts/think.ts`](../../src/scripts/think.ts)

The script lives alongside the other Reference Desk scripts. It follows the same patterns: import `Claude`, minimize when done. The difference is that `think.ts` is not a test or a one-shot tool — it is a library of exported functions that the `/think` skill orchestrates.

### Non-blocking API (primary)

- `send(app, question)` — send a question, minimize immediately. Handles both fresh conversations and resumptions: checks the state file, if exchanges exist it opens the existing conversation, verifies the URL, reads the last response to catch up, then sends the follow-up. If no state, starts fresh — navigates home first to avoid typing into an existing conversation. Uses `type()` not `paste()` (paste creates attachments for large text). Returns the `ThoughtState`.
- `read(app)` — check if the response is ready. If still streaming, minimizes and returns `{ ready: false }`. If done, reads turns, captures URL/ID, renames the conversation to a topical name (first exchange only), writes state, minimizes, returns `{ ready: true, response }`.

### Blocking API (convenience)

- `think(app, question)` — full synchronous lifecycle: sends and waits for the response. Blocks until done. Use only when blocking is acceptable.
- `thinkOnce(app, question)` — launches app + `think()` with error-state preservation.
- `followUp(app, question)` — synchronous follow-up in the same conversation.

### State and evaluation

- `readState()`, `writeState()`, `deleteState()`, `hasActiveThought()` — state file management.
- `recordVerdict(verdict)` — append a verdict to the evaluation history.
- `shouldGiveUp(state)` — three consecutive unproductive verdicts trigger the give-up rule.
- `conclude(entry)` — write the perspective entry and delete the state file.
- `writePerspectiveEntry(entry)` — write a perspective entry without deleting state (for partial conclusions).
- `minimizeOnFailure(app)` — unconditional minimize, swallowing errors.

### Idempotent foreground

All window operations check state before acting. `maximize()`, `focus()`, and `acquireForeground()` skip the Win32 calls if the app is already in the foreground. `launch()` skips maximize if already foregrounded. One clean transition per operation, no flicker.

The lifecycle chapter is the specification. This script is the implementation. If the script cannot express a step from the lifecycle, the lifecycle is wrong.
