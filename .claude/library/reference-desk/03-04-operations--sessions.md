# Sessions

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

A session ([`.claude/src/session.ts`](../../src/session.ts)) is a managed conversation interaction. It is the API that makes the [/think skill](../our-skillset/20-think.md) possible — start a conversation, send messages, read responses, and clean up. Introduced in [Sprint 67](../projected-research/31-sprint-67--conversation-sessions.md).

## The complete research workflow

The tool must support this end-to-end:

1. **Start or return to a conversation.** If this is new research, start a session. If continuing, find the conversation by title, open it, read the turns to catch up.
2. **Know where you are.** Detect if the app is already at the right chat. Don't navigate away and back.
3. **Read to catch up.** Before writing the next message, read the full conversation. Know what was said.
4. **Compose and send.** Paste the prompt (potentially large — research context). Send.
5. **Minimize and wait.** Minimize immediately after sending. Poll `checkStreaming()` from the background with exponential backoff. Don't steal Doug's computer while waiting.
6. **Know when it's done.** The streaming check returns false. The response is complete.
7. **Read the response.** From the background if possible. Bring to foreground only if needed.
8. **Store it.** Write the response to a file or Claude's perspective. The response object must carry the full text.
9. **Continue or end.** Send the next message, or end the session.

If ANY of these steps requires working around the app — calling raw UIA methods, writing custom waits, manually parsing text — the app abstraction is incomplete. Fix the app, don't work around it. See [Coding Philosophy](05-coding-philosophy.md).

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
Claude starts a session, sends a research question, reads the response, stores it in perspective with annotations. The [Thoughtfulness](../thoughtfulness/.cover.md) book specifies the full protocol — the write/check/read cycle, the [conversation catalogue](../thoughtfulness/05-conversation-catalogue.md), the perspective entry format. The [/think skill](../our-skillset/20-think.md) uses `sendAndForget()` for the write phase (non-blocking) and polls `isResponseComplete()` for the read phase. The think script ([`think.ts`](../../src/scripts/think.ts)) handles only state file persistence — 46 lines. All Desktop interaction goes through Session.

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

### The think write and read share this standard

The "are we already here?" check above is no longer just advice — it is the standard the [/think](../our-skillset/20-think.md) dispatch follows for **both** the write and the read, through one shared helper, [`locateConversation(app, topic)`](../thoughtfulness/02-the-thought-lifecycle--dispatch.ts):

```typescript
export async function locateConversation(app: Claude, topic: string): Promise<ConversationPage> {
  const here = await app.currentConversation();
  if (here && (await here.title()) === topic) return here;  // already on the right topic — reuse untouched
  return openTopic(await claudeProject(app), topic);         // else: project -> open the topic
}
```

If the app is already on the conversation we want, reuse the live screen untouched — no navigating to the project and back. Otherwise open the project and navigate to the topic. The write and the read call the same helper, so they cannot disagree about where "here" is.

**The title check is the topic-correctness guard.** The [Session](../../src/session.ts) remembers a *URL*, not a *topic* — `inSync()` answers "are we still on the same page?", which is not the same as "are we on the RIGHT conversation?". So the write needs something the read used to take on faith: [`ConversationPage.title()`](../../src/pages/conversation.ts) reads the header title, and comparing it to the topic turns "already on a conversation" into "already on the *right* conversation." That closes the asymmetry.

This sits on top of the Session, not inside it — **the Session class is unchanged**, still recording only the page URL. The topic guard lives one level up, in `locateConversation`, which the [write resource](../thoughtfulness/02-the-thought-lifecycle--dispatch.ts) and the read both call.

**Write signature:** `dispatch(app, topic, say, isNew, attach)`. A *new* topic is born in the project's own composer (it is in the project from the start — no move to make); an *existing* topic is located through `locateConversation`, reusing the live screen when we are already on it.

### Large text pasting
Claude will need to paste substantial context when thinking through research. The composer handles pastes up to 73KB (tested in [Sprint 63](../projected-research/27-sprint-63--the-pilot-conversation.md)). For very large context, split across multiple messages.

### Resumable sessions across turns

A session's state — `id`, `url`, `name`, `turnCount` — should be serializable so the next conversation turn can pick up where the last one left off. The pattern:

```typescript
// Save after a session
const state = { id: session.id, url: session.url, name: session.name, turns: session.turnCount };
writeFileSync('.claude/src/debug/session-state.json', JSON.stringify(state));

// Resume in the next turn
const saved = JSON.parse(readFileSync('.claude/src/debug/session-state.json', 'utf-8'));
await app.openChat(saved.name);
const turns = await app.conversation.readTurns();
// Now you have the history — continue from here
```

This extends Session without inventing a new concept. The session object tracks state in memory. Serialization lets it survive across process restarts.

### Sprint 72 proof: the workflow works

The full workflow test ([`test-full-workflow.ts`](../../src/scripts/test-full-workflow.ts)) proved:
- Send a prompt to a new chat → response received (4190 chars)
- Navigate away to home → return to the same conversation by sidebar position
- Read the full transcript → 1 turn with correct prompt and response
- Send a second prompt → response received (4094 chars)
- Read again → 2 turns total
- Responses saved to `src/debug/workflow-response-1.txt` and `workflow-response-2.txt`

Known issues from the test:
- Conversation title isn't immediately available after creation — the app auto-titles asynchronously
- Deletion readiness check times out — the deletion works but the verification fails
- The response text for turn 2 includes turn 1's text (the parser reads the full conversation each time)

### Continuing multi-turn research
The session's `turns` array accumulates. Each `send()` re-reads the full conversation. A research session can span multiple questions:
```typescript
const r1 = await session.send('What is the methodology?');
const r2 = await session.send('How does it compare to prior work?');
const r3 = await session.send('What are the implications?');
// session.turns now has all 3 exchanges
```
