# Integration tests — against the live Claude Desktop

These drive the real app. They are **not** part of `npm test` and will reject to run
unless you ask for them explicitly:

```
npm run test:integration        # rejects, and tells you why
CLAUDE_DESKTOP_LIVE=1 npm run test:integration
```

## Why the guard exists

Everything in [`src/tests/*.test.ts`](../) is hermetic — it asserts what the code
promises against fixtures, in milliseconds, on any machine. That is worth having and
it is **not** enough: a fixture can only confirm our assumptions about the app, and
[the reality boundary lies](../../../library/projected-identity/62-sprint-92--retro.md).
The empty composer that reports its placeholder as its value, the Stop button that
appears on a mere acknowledgement, the streaming indicator that freezes with zero
output — every one of those passed a unit test and failed against the app.

So these tests exist to check the assumptions themselves. They are the only tests
that can.

But they take Doug's screen. They maximize the window, click things, and read the
tree. **They are run when Doug says so, never automatically**, which is what the
environment variable enforces.

## The rules every integration test follows

From [Coding Philosophy](../../../library/reference-desk/05-coding-philosophy.md) and
[Writing Scripts](../../../library/reference-desk/06-writing-scripts.md):

- **Minimize in a `finally`, before closing the shell** — minimizing needs the shell.
  Never during a pending send; minimizing mid-generation can hang it.
- **Close the shell, or it leaks.** Sprint 91 leaked 100+ shells exactly this way.
  A test that leaks a shell has failed even if it passed.
- **Read-only by default.** Navigate, read, screenshot. Do not send messages, create
  projects, or rename anything unless the test is specifically about that — and then
  clean up what it made.
- **No fixed waits.** Poll a sensor. A `setTimeout` is a guess about the app's speed.
- **Never force focus.** If Claude Desktop loses foreground, the test HALTS. It does
  not call `SetForegroundWindow` and try to win the race back. Focus loss means the
  user intervened, and the user's intent is absolute. This is Doug's computer.

## What they assert

The three things a fixture cannot:

1. **`Claude.tree()` returns a real, populated tree** — the app is readable, the
   snapshot is non-empty, and it contains the elements the driver's sensors depend
   on. This is the check that catches an app update before anything else does.
2. **The screen model matches the screen.** `describe()` says the page has a
   composer; the tree says there is an `Edit` element. When those disagree, the
   model has drifted from the app and every command built on it is suspect.
3. **The precondition rejects correctly.** Ask for an element that is genuinely not
   on screen and confirm the action does not fire, fails immediately rather than
   after 30 seconds, and carries the tree.

Nothing here sends a message. That comes later, and it comes with Doug watching.
