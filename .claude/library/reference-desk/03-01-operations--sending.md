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

## Paste vs Type

The composer uses paste by default because:
- **No size limit.** Typing is character-by-character; paste handles 73KB in one operation ([Sprint 63](../research-projection/27-sprint-63--the-pilot-conversation.md) tested this).
- **Faster.** Paste is instant. Typing 73KB at keyboard speed would take minutes.
- **Reliable.** Each typed character goes through the keyboard event pipeline. Paste is a single clipboard operation.

Type is used only when the text must trigger the input handler character-by-character — for example, to trigger search autocomplete in the sidebar.

## The send flow

`send(responseTimeoutMs)`:
1. The composer's send button is invoked via UIA
2. The [gateway](02-02-the-architecture--gateway.md) verifies that Claude Desktop starts responding (the "Claude is responding" indicator appears)
3. The gateway polls until the response completes (the indicator disappears)
4. The conversation's turns are re-read to capture the response

The timeout defaults to 120 seconds. For long research questions, increase it: `await app.send(300_000)`.

## File attachments

`attach(filePath)` uses the Windows clipboard file-drop mechanism — `SetFileDropList` in PowerShell. This bypasses the file dialog entirely. The file appears as an attachment in the composer. Discovered in [Sprint 59](../research-projection/23-sprint-59--create-projects-and-upload-files.md) as a replacement for the file dialog which UIA couldn't reliably control.

## The `conversationTurn` method

```typescript
const response = await app.conversationTurn('My question');
```

An alias for `say()` that makes the intent clearer in multi-turn scripts. Both compose, send, wait, and return the response text.
