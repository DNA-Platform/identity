# Sending Messages

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The composer ([`.claude/src/components/composer.ts`](../../src/components/composer.ts)) handles everything about constructing and sending a message. The high-level API on [`Claude`](../../src/claude.ts) delegates here.

## The simple path

```typescript
// Send a message and get the response
const response = await app.say('What is sequence filtering?');

// Or: compose, then send separately
await app.compose('Here is a long prompt...');
await app.send();  // waits for response by default
```

`say(text)` composes, sends, waits for the response, and returns the response text. It's the one-liner for research dispatches. `compose()` + `send()` gives more control — useful when building multi-part messages.

## Compose methods

| Method | What it does | When to use |
|--------|-------------|-------------|
| `compose(text)` | Paste into the composer (clears first) | Default — handles any size |
| `type(text)` | Character-by-character via keyboard | Short text, needs to trigger autocomplete |
| `paste(text)` | Clipboard paste | Direct control over paste |
| `append(text)` | Add to existing content without clearing | Multi-part composition |
| `attach(filePath)` | Attach a file via clipboard file-drop | Uploading documents |
| `clear()` | Clear the composer | Start over |
| `readDraft()` | Read what's currently in the composer from UIA | Check if Doug has text typed |

**Note:** `compose()` now explicitly reads the draft and clears before typing. This prevents accidental sends of leftover text from failed operations or Doug's typing. The clear is driven by `readDraft()` — it checks before clearing, not blindly.

## Paste vs Type

The composer uses paste by default because:
- **No size limit.** Typing is character-by-character; paste handles 73KB in one operation ([Sprint 63](../projected-research/27-sprint-63--the-pilot-conversation.md) tested this).
- **Faster.** Paste is instant. Typing 73KB at keyboard speed would take minutes.
- **Reliable.** Each typed character goes through the keyboard event pipeline. Paste is a single clipboard operation.

Type is used only when the text must trigger the input handler character-by-character — for example, to trigger search autocomplete in the sidebar.

## The send flow

Two send methods:

**`send(responseTimeoutMs)`** — send and WAIT for the response:
1. The composer's send button is invoked via UIA
2. The [gateway](02-02-the-architecture--gateway.md) verifies that Desktop starts responding
3. The gateway polls until the response completes
4. The conversation's turns are re-read to capture the response

The timeout defaults to 120 seconds. For long research questions, increase it: `await app.send(300_000)`.

**`sendAndForget()`** — send and confirm Desktop started, but DON'T wait for the full response:
1. The composer's send button is invoked via UIA
2. The gateway polls to confirm Desktop started processing (streaming indicator appears)
3. If streaming doesn't start within 15 seconds, throws — the message wasn't received
4. Returns as soon as streaming starts. Does NOT wait for the response to complete.

Use `sendAndForget()` when you want to minimize and come back later. Use `send()` (or [`session.send()`](03-04-operations--sessions.md)) when you want the response before continuing. For the `/think` skill, [Session](03-04-operations--sessions.md) is the right tool — it handles the full lifecycle.

## File attachments

`attach(filePath)` uses the Windows clipboard file-drop mechanism — `SetFileDropList` in PowerShell. This bypasses the file dialog entirely. The file appears as an attachment in the composer. Discovered in [Sprint 59](../projected-research/23-sprint-59--create-projects-and-upload-files.md) as a replacement for the file dialog which UIA couldn't reliably control.

## The `conversationTurn` method

```typescript
const response = await app.conversationTurn('My question');
```

An alias for `say()` that makes the intent clearer in multi-turn scripts. Both compose, send, wait, and return the response text.
