# Reading Responses

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

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

**Key finding:** During extended thinking, ONLY the streaming indicator and Stop button appear. The thinking TEXT is not in the UIA tree until thinking finishes. Content (`hasResponseContent()`) stays false the entire thinking phase, which can last minutes for research questions.

### Detectors

All async. All check real UI state. Call after `scrollToBottom()`.

| Method | What it checks | Use for |
|--------|---------------|---------|
| `checkStreaming()` | Streaming indicator text | Server acknowledged, processing |
| `hasStopButton()` | "Stop response" button present | Desktop actively processing |
| `canSend()` | Send button active | Desktop ready for input |
| `hasResponseContent()` | "Claude responded:" in text | Actual response text appeared |
| `isResponseComplete()` | No stop button AND can send | **Definitive done signal** |
| `isAtBottom()` | "Scroll to bottom" button absent | View at bottom, safe to read |

**The definitive done signal is `isResponseComplete()`** — stop button gone AND send button active. This works whether or not response text appeared. It detects both successful responses and error states (like Desktop producing nothing).

**Scroll to bottom before every check.** [Lazy rendering](02-04-the-architecture--app-model.md#lazy-rendering) means the UIA tree only contains visible elements. The streaming indicator and stop button are at the bottom. `scrollToBottom()` is awaitable — it clicks the UI button and waits for it to disappear.

### Error states

| State | How to detect |
|-------|--------------|
| Acknowledged, generating normally | `checkStreaming()` true, `hasStopButton()` true |
| Done with response | `isResponseComplete()` true, `hasResponseContent()` true |
| Done with NO response (error) | `isResponseComplete()` true, `hasResponseContent()` false |
| Hung — never starts | After 30s: `checkStreaming()` false, `canSend()` true, no content |
| Hung — starts but never finishes | `checkStreaming()` true for 5+ minutes, no content |

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
