# The Gateway Pattern

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The gateway ([`.claude/src/gateway.ts`](../../src/gateway.ts)) is the discipline layer. Every stateful interaction with the UIA tree goes through it. No static waits, no blind retries, no unchecked assumptions. It was born in [Sprint 61](../projected-research/25-sprint-61--feedback-mcp-research-and-app-hardening.md) from the pain of automation that didn't know if it worked.

Doug's original framing (from his stock trading platform): centralize cross-cutting concerns. The gateway centralizes polling, timeout, diagnostics, and foreground enforcement so controllers don't reinvent them.

## The core principle: act once, look repeatedly

The gateway enforces a single discipline: fire an action ONCE, then poll a verify predicate until it confirms the action worked. Never retry the action. Never assume it worked. The verify function is always a quick, harmless read — a [controller sensor](#sensors-and-actuators), not an action.

## The three methods

### `act(action, verify, options)` — do something and verify

Fire the action once. Then poll `verify` with tapering backoff until it returns true. If verify times out, throw — the action happened but its effect wasn't confirmed. The action is never retried.

```typescript
// In the View layer — action once, poll verify
await controller.expandMenu(title);             // actuator: fires ONCE
await gateway.waitFor(                           // poll a sensor
  () => controller.isMenuVisible(),
  { timeoutMs: 5_000 },
);
```

`gateway.act()` wraps this same pattern with diagnostics:

```typescript
await gateway.act(
  () => controller.expandMenu(title),            // fires ONCE
  () => controller.isMenuVisible(),              // polled with tapering backoff
  { description: 'Open menu' },
);
```

Key implementation details from [`gateway.ts`](../../src/gateway.ts):
- `requireForeground()` is called before the action — the window must be active
- The action fires exactly once — no retry of the action itself
- On verify failure, `diagnostics.record()` logs the description and duration
- `diagnostics.captureOnFailure()` takes a screenshot for debugging

The verify function must be:
- **Quick** — a single UIA read, returns boolean
- **Harmless** — reads state, doesn't change it
- **A controller sensor** — the controller knows how to check the app's state

### `waitFor(predicate, options)` — poll until true

Pure polling — no action. Returns `true` if the predicate becomes true before timeout. This is the most-used gateway method. View objects call it directly after firing controller actuators.

The **tapering poll**: start at 50ms intervals, double each time, cap at 1000ms. Fast response for quick state changes, efficient for slow ones.

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
const items = await gateway.read(
  () => controller.readList(),
  (items) => items.length > 0,
  { description: 'Read chat list' },
);
```

## The `GatewayOptions` interface

```typescript
interface GatewayOptions {
  timeoutMs?: number;       // default 30_000
  pollIntervalMs?: number;  // default 500
  retries?: number;         // default 3
  screenshotOnFailure?: string;
  description?: string;     // logged on success and failure
}
```

## Sensors and actuators

Controllers split their methods into two categories that map directly to the gateway's discipline:

**Sensors** (reads) — quick state checks. Return boolean or data. Called by `waitFor` and `read`. Examples: `isMenuVisible()`, `isDialogVisible()`, `readMenuItems()`, `readProjectList()`, `isRenameFieldActive()`.

**Actuators** (actions) — single UIA operations that change state. Return boolean (did it fire). Called once, then verified with a sensor. Examples: `expandMenu(title)`, `clickRename()`, `clickAddToProject()`, `clickProjectItem(name)`.

The View layer orchestrates: call an actuator once → poll a sensor via `gateway.waitFor()` → construct the next View object from verified state. See [Architecture Patterns](10-architecture-patterns.md) for the full MVC flow.

## The principle

From [Verified Automation](../..teamsmanship/..team/adam/verified-automation/.cover.md): the difference between pressing a button and knowing it worked. The gateway converts blindness to seeing — rapid state checks that convert a one-shot action into a verified outcome. Every action gets a confirmation read. Every failure captures its own state. The app reports its own readiness — the caller never guesses.

See also: [Coding Philosophy](05-coding-philosophy.md) for the principles behind this design.
