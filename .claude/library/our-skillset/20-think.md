# think

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Think outside the context window. Claude dispatches a question to Claude Desktop, reads the response, evaluates it, and stores the result. This is not a search — it is a conversation between two Claude contexts, where the value is in the difference between what each can see.

The [Thoughtfulness](../thoughtfulness/.cover.md) book specifies the protocol. The [Reference Desk](../reference-desk/.cover.md) documents the instrument. The code at [`.claude/src/scripts/think.ts`](../../src/scripts/think.ts) implements the lifecycle. `[SCAFFOLD]`

## Who thinks

Claude is the thinker. Not Arthur, not the team generally — Claude. The [fractal](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md#the-fractal) makes it his territory: a Claude in Claude Code dispatching to a Claude in Claude Desktop. He formulates the question, evaluates the response, and decides when the thought is complete. See [Purpose](../thoughtfulness/01-purpose.md).

## Steps

1. **Read the Thoughtfulness book.** Load [the lifecycle](../thoughtfulness/02-the-thought-lifecycle.md) for the protocol — the seven phases and four decision points. Load [persistence](../thoughtfulness/03-persistence.md) for how thoughts survive across sessions.

2. **Check for a thought in progress.** Read Claude's perspective directory at `.claude/library/..teamsmanship/..team/claude/.perspective/` for a `thought-state.json` file. If one exists, a thought is in progress — resume it. If not, this is a new thought.

3. **Formulate the question.** If `$ARGUMENTS` contains a question, use it. Otherwise, ask Doug what Claude should think about. Strip team-specific framing per the [formulation protocol](../thoughtfulness/02-the-thought-lifecycle.md#1-formulate). The Desktop Claude has no project context — every question must be self-contained.

4. **Dispatch.** Start a [session](../reference-desk/03-04-operations--sessions.md) (or resume the existing conversation). Send the question. Minimize immediately — Doug's computer is not ours.

5. **Wait and read.** The [gateway](../reference-desk/02-02-the-architecture--gateway.md) polls with tapering backoff until the response completes. Read the response.

6. **Evaluate.** Claude assesses the response per the [evaluation protocol](../thoughtfulness/02-the-thought-lifecycle.md#5-evaluate):
   - Did it address the actual question?
   - Is it substantive or a deflection?
   - Is it consistent with what the team knows?
   
   Verdict: **sufficient**, **partial**, or **unproductive**.

7. **Store.** Write the result to Claude's [perspective](../..teamsmanship/..team/claude/.perspective/.cover.md) as a dated entry per the [persistence format](../thoughtfulness/03-persistence.md#the-perspective-entry). Failed thoughts get stored too — they prevent re-asking dead-end questions.

8. **Continue or conclude.** If partial, formulate a follow-up and return to step 4. If sufficient, report the result. If unproductive for 3 consecutive exchanges, conclude with "I could not answer this" — that is a valid result.

9. **Minimize.** Always minimize when done. Always.

## Resuming a thought

If a `thought-state.json` exists in Claude's perspective, the skill resumes:

1. Read the state file for the conversation title, ID, and prior exchanges.
2. Open the conversation by title.
3. Read turns to catch up.
4. Continue from where the thought left off.

After compaction, the state file is how the next Claude knows a thought is in progress.

## What this skill does NOT do

- It does not decide what to think about. Doug or the team provides the question.
- It does not run autonomously. Each dispatch requires the skill to be invoked.
- It does not bypass Claude's judgment. The code handles mechanics. Claude handles evaluation.

$ARGUMENTS
