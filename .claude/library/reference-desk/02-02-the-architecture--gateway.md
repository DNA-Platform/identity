# The Gateway Pattern

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The gateway ([`.claude/src/gateway.ts`](../../src/gateway.ts)) is the discipline layer. Every stateful interaction with the UIA tree goes through it. No static waits, no blind retries, no unchecked assumptions. It was born in [Sprint 61](../research-projection/25-sprint-61--feedback-mcp-research-and-app-hardening.md) from the pain of automation that didn't know if it worked.

Doug's original framing (from his stock trading platform): centralize cross-cutting concerns. The gateway centralizes retry, polling, timeout, diagnostics, and foreground enforcement so controllers don't reinvent them.

## The three methods

### `act(action, isReady, options)` — do something and verify

Execute the action, then poll `isReady` until it returns true. If readiness times out, retry the whole thing — action AND verification — up to 3 times. Handles transient UI state, slow renders, flaky element invocations.

```typescript
await gateway.act(
  async () => { await uia.invoke('Send'); },
  async () => { return (await uia.allNames()).some(n => n.includes('responding')); },
  { description: 'Send message', timeoutMs: 30_000 }
);
```

Key implementation details from the source:
- `requireForeground()` is called before every action — the window must be active
- On failure, `diagnostics.record()` logs the description, duration, and error
- `diagnostics.captureOnFailure()` takes a screenshot — the most valuable debugging artifact

### `waitFor(predicate, options)` — poll until true

Pure polling — no action, no retry. Returns `true` if the predicate becomes true before timeout.

The **tapering poll** is the implementation detail most descriptions miss: start polling at 50ms intervals, double each time, cap at 1000ms. Fast response for quick state changes, efficient for slow ones. This is NOT a fixed `pollIntervalMs` — the option sets the initial interval for `act` but `waitFor` always tapers.

```typescript
// Tapering poll: start fast (50ms), double each time, cap at 1000ms
let interval = 50;
while (Date.now() < deadline) {
  if (await predicate()) return true;
  await this.sleep(Math.min(interval, 1000));
  interval = Math.min(interval * 2, 1000);
}
```

### `read(reader, isValid, options)` — read and validate

Poll until the reader produces a valid result. Combines `waitFor` with a typed return value. If the result never becomes valid, throws with diagnostics.

```typescript
const title = await gateway.read(
  async () => parseTitle(await uia.readText()),
  (title) => title.length > 0,
  { description: 'Read conversation title' }
);
```

## The `GatewayOptions` interface

```typescript
interface GatewayOptions {
  timeoutMs?: number;       // default 30_000
  pollIntervalMs?: number;  // default 500 (for act retries)
  retries?: number;         // default 3
  screenshotOnFailure?: string;  // path to save diagnostic screenshot
  description?: string;     // logged on success and failure
}
```

## The principle

From [Verified Automation](../..teamsmanship/..team/adam/verified-automation/.cover.md): the difference between pressing a button and knowing it worked. The gateway pattern is the mechanism. Every action verifies its own result. Every failure captures its own state. The app reports its own readiness — the caller never guesses.

See also: [coding philosophy](05-coding-philosophy.md) for the principles behind this design.
