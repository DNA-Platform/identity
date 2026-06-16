# Coding Philosophy

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

The principles for building and extending the Reference Desk codebase. These are not aspirational guidelines — they are decisions made through pain. Each one traces back to a sprint where not following it caused a failure. Source: the coding policy from dna-library, Doug's design principles from [Sprint 35](../projected-research/03-sprint-35--the-object-model.md), the verification discipline from [Sprint 61](../projected-research/25-sprint-61--feedback-mcp-research-and-app-hardening.md).

## The app reports its own readiness

Doug's principle from [Sprint 41](../projected-research/09-sprint-41--the-stateful-app.md): "Why isn't the navigation part of the app? It should control seeing if the next action can be performed."

Every component and page should expose a readiness check. The [gateway](02-02-the-architecture--gateway.md) uses it. The script caller never guesses when the UI is ready. If you find yourself writing `await sleep(3000)` — the app model is incomplete. Add a readiness predicate to the component, then use `gateway.waitFor()`.

## If the API is harder than the app, the API is wrong

From [Sprint 35](../projected-research/03-sprint-35--the-object-model.md): Doug's design principles — "look first, name second, implement last." The test: read a script aloud. If a non-programmer can't understand what it does, the names are wrong.

```typescript
// Good — reads like English
await app.openProject('DNA Patternity');
const response = await app.say('What do you know about this project?');

// Bad — the abstraction is leaking
await app.navigator.requireScreen('home');
await app.auto.uia.invokeByName('Projects');
await app.gateway.waitFor(() => app.navigator.screen === 'projects');
```

If a script needs to reach into controllers or infrastructure, the `Claude` class is missing a method. Add the method, don't bypass the stack.

## No privileged state

From [Sprint 65](../projected-research/29-sprint-65--the-composed-message.md): "If you can't reconstruct the object by reading the UIA tree, your model is lying."

Every object in the app model must be reconstructable from what the app shows. No hidden fields that only the code knows. No state that survives navigation but isn't visible in the tree. When you call [`refresh()`](../../src/pages/conversation.ts) on a page, it rebuilds from the tree, not from cached memory.

This is the same principle that makes the library work after compaction — if it's not in the text, it doesn't exist. The UIA tree is the text. The app model is the reader.

## Fixed waits are the biggest code smell

`await sleep(3000)` is a guess. Guesses break. The correct pattern is always: execute, test for the expected result with backoff, respond based on the test.

The [gateway](02-02-the-architecture--gateway.md) implements this with tapering poll — start checking at 50ms, double to 1000ms cap. But the principle is deeper than the gateway. It is the philosophy of automation: never assume something happened. Always verify. And verify efficiently — don't poll at a fixed rate, back off when the response is slow, respond quickly when it's fast.

This applies everywhere:
- **Sending a message:** don't wait 5 seconds. Poll for the "responding" indicator.
- **Navigating:** don't wait 2 seconds. Poll for the URL change.
- **Reading a response:** don't wait for a fixed timeout. Poll `checkStreaming()` until it's false.
- **Launching the app:** don't wait 10 seconds. Poll for the window handle.

If you find yourself writing a fixed wait, you've found a gap in the app model. The app should expose a readiness check for whatever you're waiting for. If it doesn't, add one.

## Verify, don't assume

From [Sprint 61](../projected-research/25-sprint-61--feedback-mcp-research-and-app-hardening.md): "The automation sprints taught us we were flying blind." Every raw UIA call that changes state must go through [`gateway.act()`](02-02-the-architecture--gateway.md) with a verification predicate.

No static waits. No blind retries. No "it usually works." If you click a button, verify the expected UI appeared. If you navigate, verify you arrived. If you send a message, verify the response indicator appeared.

## Target semantics, not presentation

From the automation discipline:

| Fragile (never) | Robust (always) |
|-----------------|-----------------|
| CSS class `.btn-primary` | ARIA role `button` with name "Send" |
| XPath `/div[3]/div[2]/button` | Accessibility tree element by name |
| Pixel coordinates | Element name or role |

The UI will change. CSS classes will be renamed. Element positions will shift. Semantic identifiers — button names, ARIA roles, text content — survive redesigns. The [UIA layer](04-01-platform--uia.md) finds elements by name and role, never by position.

## One concern per file

The driver grows by adding files, not by growing files. Each file owns one domain. Dependencies flow up the stack: operations depend on navigation, navigation depends on lifecycle. Never downward. Never circular. See the [layer architecture](02-01-the-architecture--layers.md).

## Names are documentation

From the naming conventions: if you can read a function call aloud and a non-programmer understands what it does, the name is right. `app.openProject('Physics')` — clear. `app.auto.uia.invokeByName('div[3]')` — the abstraction failed.

## Scripts never wait and never check the tree

A script should look like using the app. If you find yourself writing `await gateway.waitFor(...)` or `const names = await uia.allNames()` in a script, the [`Claude`](../../src/claude.ts) class is missing a method. The wait should be INSIDE the method. The tree check should be INSIDE the method. The script caller writes `await app.openProject('Physics')` and trusts that it arrived. If the method can't guarantee arrival, the method is broken — fix the method, don't work around it in the script.

This is the strongest form of the abstraction principle: the view layer (scripts) should read like a human using the app. No implementation details leak upward.

## Always minimize

The app runs on Doug's computer. Every test, every script, every research dispatch must minimize the app when done — and must minimize QUICKLY if something goes wrong. The [`Session`](../../src/session.ts) minimizes between turns. Test scripts must call `app.window.minimize()` in their cleanup, including in error handlers. If a test fails, collect what you need (screenshot, error message) and minimize immediately. Doug's computer is not yours.

## Code references the library, library references code

From the code-library linking convention: source files carry comments pointing to the library chapter that explains them. Library chapters carry links to the source files they document. The two are bidirectionally connected. When one changes, the other should be checked for consistency using the [consistency tools](../bookkeeping/06-01-on-consistency.md).
