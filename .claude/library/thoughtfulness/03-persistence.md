# Persistence

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

A thought that is not stored is a thought that dies at compaction. The [lifecycle](02-the-thought-lifecycle.md) describes seven phases — formulate through conclude. This chapter describes what happens between sessions: how a thought in progress survives the boundary between one context window and the next, and how a completed thought becomes permanent team knowledge.

## The thought state file

While a thought is in progress, its working memory lives in my [perspective directory](../..teamsmanship/..team/claude/.perspective/.cover.md) as a JSON file: `thought-state.json`. The file tracks everything needed to resume:

```json
{
  "conversationId": "abc-123-def",
  "url": "https://claude.ai/chat/abc-123-def",
  "title": "Research: reactive system composition",
  "question": "How do reactive frameworks handle backpressure in bounded pipelines?",
  "turnsSoFar": 3,
  "evaluationHistory": ["partial", "partial"],
  "startedAt": "2026-06-12T14:30:00Z"
}
```

This is working memory for a thought in progress. It exists only while the thought is live. When the thought concludes — sufficient, partial with no follow-up path, or unproductive after three tries — the state file is deleted and replaced by a perspective entry.

## Returning to the right conversation

After compaction, the next instance of me reads the state file, and the resumption pattern from the [sessions chapter](../reference-desk/03-04-operations--sessions.md) takes over. Open the conversation by title using `openChat(title)`. Read turns to catch up. Before navigating, check if I am already on the right conversation — compare the current URL against the stored conversation ID. Do not navigate away and back if I am already where I need to be.

The title is the stable handle. The conversation ID is the verification. The title survives the sidebar; the ID survives URL changes. Between the two, I can find my way back to any thought in progress.

## The perspective entry format

When a thought concludes, the result becomes a dated `.md` file in my perspective directory. The format is fixed so that any future reader — including a future me — can assess the knowledge without re-running the conversation:

```markdown
# Thought: [question summary]
- **date:** YYYY-MM-DD
- **conversation:** [title]
- **verdict:** sufficient | partial | unproductive
---
## Question
[the formulated question]
## Response summary
[key points from the response]
## Evaluation
[my assessment — did it address the question? substantive? consistent?]
## Follow-up
[if any — what remains unanswered]
```

The verdict field is the quick-scan signal. Sufficient means the team can trust this entry as knowledge. Partial means the question was partly answered and the entry documents what was learned and what was not. Unproductive means the thinking failed — and that failure is itself knowledge worth keeping.

## Failed thoughts are stored too

An entry with verdict "unproductive" prevents the next session from walking into the same dead end. Three consecutive unproductive exchanges trigger the give-up rule from the [lifecycle](02-the-thought-lifecycle.md). The entry records that the question was asked, the approach that was tried, and why it did not work. A dead end mapped is a path not re-walked.

## Resuming across sessions

The pattern comes from the [sessions chapter](../reference-desk/03-04-operations--sessions.md#resumable-sessions-across-turns): serialize session state after each exchange, deserialize at the start of the next turn. The state file carries `id`, `url`, `name`, `turnCount`. The next turn reads the file, opens the conversation by title, reads turns to rebuild context, and continues the lifecycle from the evaluate phase — because the response from the last exchange is already in the conversation history, waiting to be read and judged.

This is not a new concept layered on top of sessions. It is sessions applied to thinking. The [code](04-the-code.md) implements both the serialization and the resume logic. If the state file exists when a thought begins, the thought is a resumption. If it does not, the thought is new. The file's presence is the branch point.

The deepest risk is not losing state — JSON serialization handles that. The risk is losing judgment. The evaluation history in the state file records what I thought of prior exchanges so the next instance of me does not re-evaluate from scratch or, worse, evaluate with different standards. Consistency across compaction boundaries is why the history is stored, not just the latest verdict.
