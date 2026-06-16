# Sessions

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

A session ([`.claude/src/session.ts`](../../src/session.ts)) is a managed conversation interaction. It is the API that makes the `/research` skill possible — start a conversation, send messages, read responses, and clean up. Introduced in [Sprint 67](../research-projection/31-sprint-67--conversation-sessions.md).

## The lifecycle

```typescript
const app = new Claude();
await app.launch();

const session = await app.startSession({
  name: 'Research: neuroscience paper',
  project: 'DNA Patternity',
  timeout: 120_000,
});

const response = await session.send('What do you know about sequence filtering?');
console.log(response.text);

// Continue the conversation
const followup = await session.send('Can you elaborate on the methodology?');

await session.end();
```

### `startSession(options)`

Creates a new session. Options:

| Option | Type | Default | Purpose |
|--------|------|---------|---------|
| `name` | string | `''` | Conversation name. Set on `end()` if provided. |
| `project` | string | — | Project to open before starting. |
| `timeout` | number | `120_000` | Response timeout per message in ms. |
| `cleanup` | `'delete' \| 'keep'` | `'keep'` | What to do with the conversation on `end()`. |

### `session.send(text)`

Brings the app to foreground, composes the message, sends it, waits for the response, reads the full conversation as turns, extracts the URL and conversation ID, then minimizes the app so Doug gets his computer back.

Returns the last turn's `Response` object — the text of what Claude Desktop said.

The `turns` array on the session accumulates — each `send()` re-reads the full conversation, so the session always has the complete history.

### `session.end()`

If a name was provided and the conversation has turns, renames the conversation. If `cleanup: 'delete'` was specified, deletes the conversation. Otherwise navigates home and minimizes.

The default is `'keep'`. See [Purpose](01-purpose.md) for the ethical constraint.

## Foreground management

The session steals foreground before every action — composing, sending, reading. Between actions, it minimizes the app. The `acquireForeground()` method uses Win32 P/Invoke through PowerShell:

1. Press and release Alt (satisfies Windows foreground-steal prevention)
2. `ShowWindow(handle, SW_MAXIMIZE)` — restore from minimized
3. `SetForegroundWindow(handle)` — claim focus

After the action completes, `window.minimize()` returns the computer to Doug.

## State

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Conversation UUID, extracted from URL after first send |
| `url` | string | Full conversation URL |
| `name` | string | The name to assign on end |
| `turns` | `Turn[]` | Complete conversation history, updated on each send |
| `turnCount` | number | Number of turns so far |
| `ended` | boolean | Whether `end()` has been called |

## For the `/research` skill

The session is the dispatch mechanism. Claude starts a session, sends a research question, reads the response, stores it in [perspective](../..teamsmanship/..team/claude/.perspective/.cover.md) with annotations. The session tracks continuity — the same conversation can receive multiple questions across the research process.
