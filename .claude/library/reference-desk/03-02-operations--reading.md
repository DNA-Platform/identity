# Reading Responses

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The conversation page ([`.claude/src/pages/conversation.ts`](../../src/pages/conversation.ts)) reads what Claude Desktop said. This is the receiving end of the research dispatch — after `send()`, `readTurns()` captures the structured response.

## Reading methods

| Method | Returns | Use when |
|--------|---------|----------|
| `readLastResponse()` | `string` | You just need the text of the most recent response |
| `readTurns()` | `Turn[]` | You need the full conversation as structured data |
| `readMessages()` | `ChatMessage[]` | You need raw message objects |
| `readStructuredMessages()` | `ConversationMessage[]` | You need messages with metadata |
| `readResponse()` | `ConversationMessage \| null` | You need the last response as a structured object |
| `readTitle()` | `string` | You need the conversation title |
| `messageCount()` | `number` | You need to know how many messages exist |

For research dispatches, `readLastResponse()` is usually sufficient. For full conversation capture, `readTurns()` gives structured data.

## The Turn model

A conversation is a sequence of turns. Each turn has a prompt (what was sent) and a response (what Claude Desktop said).

```typescript
interface Turn {
  prompt: Prompt;
  response: Response;
}

interface Prompt {
  text: string;
  attachments?: string[];
}

interface Response {
  text: string;
  thinking?: string;
  artifacts?: Artifact[];
}
```

`readTurns()` parses the UIA tree text into this structure. The parser handles multi-turn conversations — [Sprint 66](../projected-research/30-sprint-66--the-conversation-object.md) tested it against a 342-turn conversation and parsed it in 750ms.

## Streaming and response detection

Several signals indicate Desktop is processing:

### UIA elements during response generation

From Sprint 82 exploration (120 snapshots during extended thinking):

| UIA Element | Present when | Absent when |
|-------------|-------------|-------------|
| `"Claude is responding"` (Text) | Desktop is processing | Response complete |
| `"Claude is thinking"` (Text) | Extended thinking active | Thinking done |
| `"Stop response"` (Button) | Desktop is processing | Response complete |
| `"Send"` / `"Send message"` (Button) | Ready for input | Desktop is busy |
| `"Scroll to bottom"` (Button) | Not at bottom | At bottom |
| `"Claude responded:"` (in page text) | Response text exists | No response yet |

**Key finding — the notification is not the text.** `thinking-active` and `streaming` share *every* named marker (`Claude is responding`, `Stop response`, one `Message actions`). The only thing that differs is the **Document body growing**. So "Claude is responding" / "Claude is thinking" is a *notification* (`hasStreamingIndicator()`) that can sit frozen with zero output — never proof that text is flowing. The honest "is it streaming" is `checkStreaming(baseline)`: the Document's `readText()` has grown past the length captured right after send, AND Stop is present. The WRITE half waits on *that*, so it minimizes only once real tokens have arrived, not on the bare notification (Doug, Sprint 93).

**Captured ground truth (2026-06-21, app v1.14271.0).** Real tree snapshots live in [`.claude/src/trees/`](../../src/trees/README.md), catalogued by state. They confirm and update the above:
- The live "processing" indicator is `ControlType.Text | Claude is responding`; extended thinking shows a `ControlType.Button | Thinking` whose **name becomes the thinking summary** when thinking completes (e.g. "Weighing intuitive evidence against mathematical proof barriers").
- **The response body text is NOT a named element.** Through the entire response stream the `allNames()` count was constant — the body lives only in the `ControlType.Document` TextPattern, read via `readText()`. So the structured `Response` fetches its *structure* (thinking summary, `Stop response`, `You said:`, `Message actions`) directly from named elements, and reads its *content* from the Document. Controllers point to the specific tree-states they depend on via `///:` links.

### Detectors

All async. All check real UI state. Call after `scrollToBottom()`.

| Method | What it checks | Use for |
|--------|---------------|---------|
| `checkStreaming(baseline)` | Document grew past the post-send baseline AND Stop present | **Real streamed text is flowing** |
| `hasStreamingIndicator()` | "Claude is responding"/"thinking" notification | Server acknowledged — NOT proof of text (can freeze) |
| `hasStopButton()` | "Stop response" button present | Desktop actively processing |
| `canSend()` | Send button active | Desktop ready for input |
| `hasResponseContent()` | "Claude responded:" in text | Response finished with text |
| `isResponseComplete()` | No stop button AND content present | **Definitive done signal** |
| `isAtBottom()` | "Scroll to bottom" button absent | View at bottom, safe to read |

**The definitive done signal is `isResponseComplete()`** — stop button gone AND real content present (`"Claude responded:"`). The content guard avoids the false "done" in the instant after send (no Stop yet, no content yet), and it distinguishes a real answer from an error state (Desktop producing nothing).

**Scroll to bottom before every check.** [Lazy rendering](02-04-the-architecture--app-model.md#lazy-rendering) means the UIA tree only contains visible elements. The streaming indicator and stop button are at the bottom. `scrollToBottom()` is awaitable — it clicks the UI button and waits for it to disappear.

### Error states

| State | How to detect |
|-------|--------------|
| Acknowledged, generating normally | `checkStreaming(baseline)` true (Document growing), `hasStopButton()` true |
| Done with response | `isResponseComplete()` true (no Stop AND `hasResponseContent()`) |
| Done with NO response (error) | `hasStopButton()` false but `hasResponseContent()` false |
| Hung — never starts | After 30s: Document never grew (`checkStreaming` false), `hasStreamingIndicator()` may be true (frozen notification) |
| Hung — starts but never finishes | `hasStopButton()` true for 5+ minutes, Document not growing |

### Blocking vs non-blocking

`waitForResponse(timeoutMs)` — blocking. Polls for processing start, then polls for streaming end. Throws if nothing detected within 30 seconds. Used by `send()` and `session.send()`.

`sendAsync()` — non-blocking. Scrolls, sends, scrolls. Returns immediately. Caller polls `isResponseComplete()` in a loop with `scrollToBottom()` before each check.

## Visibility and reading

**Sprint 72 finding:** reading requires the app to be VISIBLE. `readTurns()` returned empty when the app was minimized, but returned 91 turns when maximized on the same conversation. The UIA tree may not fully populate when the window is minimized in current versions of Claude Desktop.

**The current flow:** maximize to compose and send → keep visible while waiting for response → read response while visible → minimize after reading is complete.

Sprint 67 tested background reading and found it worked at that time. The app has been updated since. Background polling for streaming completion (`checkStreaming()`) may still work from minimized state — this needs re-testing. But `readTurns()` and `readText()` need the app visible.

**Implication for Doug's computer:** the app must be visible during response generation AND reading. Minimize only after the complete response has been read. This is a constraint — Claude Desktop responses can take minutes, during which the app occupies the screen. The session should be updated to keep the window visible until the read is complete, then minimize immediately after.

## Refresh

`refresh()` rebuilds the conversation page's state from the UIA tree. No cached data survives a refresh — everything is reconstructed. This follows the [no-privileged-state principle](05-coding-philosophy.md): if the tree says it, the model reflects it. If the tree doesn't say it, the model doesn't have it.

## The parser is the most fragile part

The turn parser depends on the exact UIA tree structure of conversation messages. When Anthropic updates Claude Desktop, the element names, nesting, and text patterns change. The parser stops matching and returns undefined fields.

**Sprint 72 finding:** `readTurns()` returned turns with `response.text: undefined` even though the response was visible in the app. The raw text (`readText()`) contained the response, but the structured parser couldn't find it.

When this happens:
1. Read the raw tree: `const text = await app.conversation.readText()` — this always works
2. Read the element names: `const names = await app.auto.uia.allNames()`
3. Compare the patterns to what the parser expects in `readTurns()`
4. Update the parser to match the new structure
5. Update this chapter to document the new patterns

This is expected maintenance. The codebase is a model of the app. When the app changes, the model must follow.
