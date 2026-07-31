# Windows UIA

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

UI Automation ([`.claude/src/uia.ts`](../../src/uia.ts)) is how the tool sees and interacts with the Claude Desktop app. Every button click, every text read, every element discovery goes through the Windows UI Automation API, called via PowerShell from the persistent [shell](04-03-platform--shell.md).

## The prerequisite

Claude Desktop is an Electron app. Electron apps have a Chromium renderer. By default, Chromium does NOT populate the accessibility tree — the tree that UIA reads. Without the accessibility tree, the app is invisible to automation.

The fix: launch Claude Desktop with `--force-renderer-accessibility`. This flag tells Chromium to build the accessibility tree. It was discovered in [Sprint 34](../projected-research/02-sprint-34--can-we-talk-to-claude.md) — the single most important infrastructure detail. Without it, nothing works.

The launch shortcut at `.claude/src/shortcut/create-shortcut.ps1` embeds this flag. The [`Window`](../../src/window.ts) class verifies the flag is present when launching.

## How UIA works

The UIA API models the app as a tree of `AutomationElement` nodes. Each node has properties: `Name`, `ControlType`, `AutomationId`, `BoundingRectangle`. The tool reads this tree to find elements, invoke them, and extract text.

The `Uia` class wraps all of this in a TypeScript API:

```typescript
// Read all visible text from the app
const text = await uia.readText();

// Read the URL (from the document element's name)
const url = await uia.readUrl();

// Get all element names as a flat array
const names = await uia.allNames();

// Invoke a button by its accessible name
await uia.invokeByName('Send');

// Invoke the LAST element with a name (for disambiguation)
await uia.invokeByNameLast('Show more');
```

## The PowerShell bridge

Every UIA call is a PowerShell script sent through the [shell](04-03-platform--shell.md). The script:
1. Loads the `UIAutomationClient` and `UIAutomationTypes` assemblies
2. Gets the window's `AutomationElement` from its handle
3. Searches the tree for the target element
4. Reads its properties or invokes it
5. Returns the result as text

The `windowSetup()` helper generates the preamble for every call — loading assemblies and finding the window element from the handle.

## What UIA can and cannot do

**Can:** read text content, read element names and types, read URLs, invoke buttons and links, read the tree structure, detect dialogs and menus.

**Cannot:** read CSS styles, read pixel colors, interact with canvas elements, read content inside iframes that don't expose accessibility, simulate hover states.

The app model is designed around what UIA CAN do. If a UI element isn't accessible through the tree, the approach is to find a different way to access it — usually through keyboard shortcuts or by reading text content instead of element properties.

## What the tree costs

Measured, July 2026, on the real app:

| | |
|---|---|
| raw descendants in the window | **161** |
| named elements after parsing | **121–123** |
| `allNames()` as written | **77–133ms** |
| the same walk with a `CacheRequest` | **310ms** |
| `readUrl()` | **~40ms** |

**Reading the whole tree is cheap, and it is not what makes the driver slow.** This is worth writing down because it is the opposite of the intuition. UIA property reads are cross-process, so the textbook fix is a [`CacheRequest`](https://learn.microsoft.com/dotnet/api/system.windows.automation.cacherequest) — bulk-fetch the properties, then read `$el.Cached.Name` for free. On a tree of a few hundred elements the setup costs more than the crossings it saves, and the "optimised" version measured **four times slower**. Do not apply it here without re-measuring; the trade only turns over on trees an order of magnitude larger.

Two consequences the driver is built on. A tree read is affordable **per action**, which is what makes the [precondition](02-02-the-architecture--gateway.md) and [`TreeSnapshot`](../../src/tree.ts) practical rather than aspirational. And a *duplicate* tree read is worth removing not because it is slow, but because reading the same screen three times in one navigation means three different moments were each treated as now.

## What a verify predicate must not do

[`detectScreen()`](../../src/navigator.ts) is the verify predicate for nearly every navigation in the app, and it used to walk the whole tree on every call — to set `hasOpenDialog` and `hasOpenMenu`, which nothing in the driver reads. The screen is decided entirely by the URL. So a poll loop paid a full tree walk per iteration for two booleans only three debug scripts ever printed. Overlay detection moved to `detectOverlays()`, and `detectScreen()` went from **136ms to 17ms**.

The rule: **a verify predicate should read the one thing it is deciding on.** Anything else it gathers is paid for on every iteration of every poll in the app.

## Element finding strategies

The codebase uses three strategies, from most to least robust:

1. **By name** — `invokeByName('Send')`. Finds the element whose `Name` property matches. Fragile if multiple elements share the name.
2. **By name last** — `invokeByNameLast('Show more')`. When multiple elements match, takes the last one. A pragmatic fix for pages where "Show more" appears in multiple sections.
3. **By text parsing** — read `allNames()` or `readText()`, then parse the text to find what you need. Used for complex reads like conversation turns where the structure is in the text content, not in individual elements.

The [coding philosophy](05-coding-philosophy.md) says: target semantics, not presentation. Names and roles survive UI redesigns. Positions and CSS classes don't.
