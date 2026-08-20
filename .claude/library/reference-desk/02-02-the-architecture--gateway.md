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

**One check per operation.** `act`, `read` and a bare `waitFor` each require the foreground once, at the top. If the app is not visible and cannot be brought forward, they throw rather than acting on a screen nobody can see.

This is the ONLY place foreground is checked. Not in UIA. Not in controllers. Not duplicated anywhere.

It used to be duplicated inside the gateway itself, and it was expensive. `act` required the foreground, then called `waitFor`, which required it again — and each check was two fresh PowerShell processes ([the shell](04-03-platform--shell.md)). A do-nothing action with an instantly-true verify cost **1675ms**, none of it the app. The tapering poll now lives in a private `poll` with no check of its own; only an operation pays.

The lesson generalises past this bug: **a check belongs to an operation, not to every loop inside it.** Discipline that re-asserts itself at every level reads as rigour and behaves as a tax. [Gateway tests](../../src/tests/gateway.test.ts) assert the count — `one action asks for the foreground exactly once` — because counting how many times the code asked is a fact, where timing on a machine that also runs Claude Desktop is a flaky test.

### The snapshot handoff

The precheck reads the tree to confirm the element an action is about to touch is really there. But a caller often *already* read the tree — the [navigator](02-03-the-architecture--navigation.md) reads it to choose which "new chat" affordance the current build shows. It hands that reading over:

```typescript
const { home, tree } = await this.findHomeAffordance();
await this.gateway.act(action, verify,
  { description: `Navigate to home via "${home}"`, target: { name: home }, snapshot: tree });
```

Without it, `goHome()` walked the same screen three times in a few milliseconds.

This is a **handoff, not a cache**. There is no staleness window, because a staleness window would eventually let an old tree authorise an action — precisely what the precheck exists to prevent. The caller is stating a fact it observed immediately before asking to act. And the handoff is not a bypass: a target absent from the handed-over tree is still failed, and the action still never fires.

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
