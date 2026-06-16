# The Code

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The [lifecycle](02-the-thought-lifecycle.md) is a protocol. This chapter is the implementation. The script [`think.ts`](../../src/scripts/think.ts) turns the seven-phase loop into executable code, using [`Session`](../../src/session.ts) from the [Reference Desk](../reference-desk/.cover.md) codebase as its transport layer. `[SCAFFOLD]`

## What the script does

`think.ts` accepts a question and optional resume state, then drives the lifecycle: formulate, dispatch, wait, read, evaluate, store, continue-or-conclude. The script is a caller of `Session` — it starts or resumes a session, sends the question, reads the response, and writes state. The evaluation is not in the script. The evaluation is Claude's job — the calling context in Claude Code reads the response and decides the verdict. The script is the wire. Claude is the judgment.

## Session as transport

The script creates a `Session` through `app.startSession()`, or resumes one by calling `app.openChat(title)` and reading turns. The session handles foreground management, compose-send-wait-read, and minimization. The script never touches UIA, never polls streaming, never manages the window. That work belongs to the [session layer](../reference-desk/03-04-operations--sessions.md) and the layers beneath it. If the script needs to reach below `Session`, the abstraction is incomplete — fix the session, not the script. This is the [coding philosophy](../reference-desk/05-coding-philosophy.md) applied directly.

## State file management

Before starting, the script checks Claude's [perspective directory](../..teamsmanship/..team/claude/.perspective/.cover.md) for `thought-state.json`. If the file exists, this is a resumption — the script reads the stored conversation ID, title, turn count, and evaluation history, then opens the existing conversation and reads turns to catch up. If the file does not exist, this is a new thought — the script starts a fresh session.

After each exchange, the script writes the state file with the current session properties: `id`, `url`, `name`, `turnCount`, plus the question and evaluation history from [persistence](03-persistence.md). The state file is the bookmark between compaction boundaries.

When a thought concludes, the script deletes the state file and writes the perspective entry — the dated `.md` file whose format is specified in the [persistence chapter](03-persistence.md). The transition from state file to entry is atomic in intent: the thought is either in progress or concluded, never both.

## The evaluation step

The script does not evaluate. It dispatches and records. Claude — the calling context in Claude Code — reads the response text returned by `session.send()`, applies the three evaluation questions from the [lifecycle](02-the-thought-lifecycle.md#5-evaluate), and decides: sufficient, partial, or unproductive. That verdict flows back into the script as input for the next iteration. If partial, the script sends a follow-up. If sufficient or unproductive (after three consecutive failures), the script concludes and writes the perspective entry.

This separation matters. The script is automation — deterministic, repeatable, testable. The evaluation is judgment — contextual, dependent on what Claude knows about the team's state, not reducible to a function. Mixing the two would make the script brittle and the judgment mechanical. They stay separate.

## Error handling

The script minimizes the app on any failure. Doug's computer is not ours. If `session.send()` throws, the script catches, minimizes, and writes whatever partial state it has to the state file. A failed exchange is not a lost thought — the state file preserves the conversation reference so the next attempt can resume rather than restart. If the failure is during state file write itself, the conversation still exists in Claude Desktop's sidebar by title. The title is the fallback handle.

The [purpose chapter](01-purpose.md) names the principle: a thought that is not stored is a thought that dies at compaction. The error handler's job is to store whatever can be stored before the process ends.

## The script location

Source: [`.claude/src/scripts/think.ts`](../../src/scripts/think.ts) `[SCAFFOLD]`

The script will live alongside the other Reference Desk scripts. It follows the same patterns: import `Claude`, launch, do work, minimize, exit. The difference is that `think.ts` is not a test or a one-shot tool — it is a reusable automation resource that Claude invokes when the team needs to think outside the context window. The lifecycle chapter is the specification. This script is the implementation. If the script cannot express a step from the lifecycle, the lifecycle is wrong.
