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

## Use cases

### Research dispatch
Claude starts a session, sends a research question, reads the response, stores it in [perspective](../..teamsmanship/..team/claude/.perspective/.cover.md) with annotations.

### Returning to a conversation
The session stores `id` and `url`. To return to a previous conversation across sessions or turns:
```typescript
await app.openChat('Research: neuroscience paper');
const turns = await app.conversation.readTurns();
// Now you have the full conversation history to catch up
```
`openChat(title)` finds the conversation in the sidebar by title and opens it. If the app is already showing that conversation (check `app.navigator.screen === 'conversation'` and the URL contains the right ID), no navigation is needed.

### Detecting current context
Before navigating, check if you're already where you need to be:
```typescript
const screen = await app.navigator.detectScreen();
if (screen === 'conversation') {
  const url = await app.auto.uia.readUrl();
  if (url?.includes(targetConversationId)) {
    // Already here — just read
    const turns = await app.conversation.readTurns();
  }
}
```
Don't navigate away and back if you're already in the right place.

### Large text pasting
Claude will need to paste substantial context when thinking through research. The composer handles pastes up to 73KB (tested in [Sprint 63](../research-projection/27-sprint-63--the-pilot-conversation.md)). For very large context, split across multiple messages.

### Continuing multi-turn research
The session's `turns` array accumulates. Each `send()` re-reads the full conversation. A research session can span multiple questions:
```typescript
const r1 = await session.send('What is the methodology?');
const r2 = await session.send('How does it compare to prior work?');
const r3 = await session.send('What are the implications?');
// session.turns now has all 3 exchanges
```
