# The Gateway Pattern

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The gateway ([`.claude/src/gateway.ts`](../../src/gateway.ts)) is the bridge between the View layer and the Controllers. Every View→Controller call crosses it. It enforces three things: the app is visible, the action fires once, and the result is verified.

## The bridge

```
View method
    ↓
Gateway (is the app foreground? → fire action → verify result)
    ↓
Controller (blind UIA executor)
```

The View decides WHAT to do. The gateway ensures it's SAFE and VERIFIED. The controller DOES the UIA work. No layer skips the gateway. No controller uses the gateway. The gateway is used ONLY by the View.

## Foreground enforcement

Every gateway method checks `isForeground()` before doing anything. If the app is not visible, it throws: "App is not visible. Call app.window.maximize() first."

This is the ONLY place foreground is checked. Not in UIA. Not in controllers. Not duplicated anywhere. One check. One place. Standard error.

## The three methods

### `act(action, verify)`

Fire an action once. Poll verify with tapering backoff. Throw if verify fails.

```typescript
// In a View object:
await this.gateway.act(
  () => this.controller.clickRename(),     // actuator — one UIA call
  () => this.controller.isRenameFieldActive(), // sensor — quick state check
  { description: 'Click Rename' },
);
```

The action is a controller actuator — parameterless, returns boolean. The verify is a controller sensor — quick, harmless read. The gateway fires the action ONCE and polls the verify.

### `waitFor(predicate)`

Poll a predicate with tapering backoff (50ms → 100ms → 200ms → ... → 1000ms cap). Returns true when predicate passes, false on timeout.

```typescript
// Wait for text to stop growing
const stable = await this.gateway.waitFor(async () => {
  const len = (await this.controller.readText())?.length ?? 0;
  return len > previousLength;
}, { timeoutMs: 60_000 });
```

### `read(reader, validator)`

Poll a reader until it returns valid data. Combines waitFor with a typed return value.

```typescript
// Read the conversation list, wait for it to be non-empty
const items = await this.gateway.read(
  () => this.controller.readConversations(),
  (items) => items.length > 0,
  { description: 'Read conversations' },
);
```

## Tapering backoff

All polling starts at 50ms intervals, doubles each iteration, caps at 1000ms. Fast response for quick operations. Efficient for slow ones. Not configurable — the tapering is the gateway's discipline.

## Diagnostics on failure

When `act()` verify fails, the gateway records the failure in diagnostics and captures a screenshot. The error message includes: what was attempted, how long it waited, and what failed. This is requirement 13 — failure reporting with context.

## What the gateway is NOT

- Not a retry mechanism for actions. The action fires ONCE.
- Not used by controllers. Controllers are below the gateway.
- Not used by infrastructure. UIA/Shell/Window don't know about foreground.
- Not a place for business logic. The View decides what to do. The gateway ensures it's safe and verified.
