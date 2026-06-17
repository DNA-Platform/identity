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

## Sharing the computer

The tool runs on Doug's computer. Doug may be typing in the composer when automation starts. `compose()` calls `waitForUserToStopTyping()` before clearing the composer. The method reads the draft, waits for three consecutive identical reads (stability), then clears. This prevents the tool from clobbering Doug's in-progress typing.

```typescript
// Inside claude.ts — compose() does this automatically
await this.waitForUserToStopTyping();
const combined = parts.join('\n\n');
await this.conversation.composer.compose(combined);
```

Scripts that use `compose()` or `say()` get this for free. Scripts that call `composer.compose()` directly must handle it themselves.

## Compose methods

| Method | What it does | When to use |
|--------|-------------|-------------|
| `compose(text)` | Scroll to bottom, clear draft, paste text | Default — handles any size |
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
1. Scroll to bottom — ensure the UI is at the latest position
2. The composer's send button is invoked via UIA
3. Scroll to bottom again — Desktop may jump the view when processing starts
4. The [gateway](02-02-the-architecture--gateway.md) detects processing started (streaming indicator, thinking text, or response text)
5. The gateway polls until the response completes
6. The conversation's turns are re-read to capture the response

The timeout defaults to 120 seconds. For long research questions, increase it: `await app.send(300_000)`.

**`sendAsync()`** — send without waiting for the response:
1. Scroll to bottom
2. Click Send
3. Scroll to bottom again
4. Return immediately — never blocks

After calling `sendAsync()`, poll the conversation object directly:
- `conversation.checkStreaming()` — is Desktop generating?
- `conversation.readLastResponse()` — read the response text
- `conversation.isAtBottom()` — is the view at the bottom?

**Detecting processing:** The streaming indicator ("Claude is responding") may not appear immediately. Desktop may show "Please wait" first. The reliable signal is THINKING TEXT appearing in the response — actual content from Desktop's extended thinking. Check `readLastResponse()` for non-empty content, not just the streaming indicator.

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
