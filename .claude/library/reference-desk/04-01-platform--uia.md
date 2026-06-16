# Windows UIA

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

UI Automation ([`.claude/src/uia.ts`](../../src/uia.ts)) is how the tool sees and interacts with the Claude Desktop app. Every button click, every text read, every element discovery goes through the Windows UI Automation API, called via PowerShell from the persistent [shell](04-03-platform--shell.md).

## The prerequisite

Claude Desktop is an Electron app. Electron apps have a Chromium renderer. By default, Chromium does NOT populate the accessibility tree — the tree that UIA reads. Without the accessibility tree, the app is invisible to automation.

The fix: launch Claude Desktop with `--force-renderer-accessibility`. This flag tells Chromium to build the accessibility tree. It was discovered in [Sprint 34](../research-projection/02-sprint-34--can-we-talk-to-claude.md) — the single most important infrastructure detail. Without it, nothing works.

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

## Element finding strategies

The codebase uses three strategies, from most to least robust:

1. **By name** — `invokeByName('Send')`. Finds the element whose `Name` property matches. Fragile if multiple elements share the name.
2. **By name last** — `invokeByNameLast('Show more')`. When multiple elements match, takes the last one. A pragmatic fix for pages where "Show more" appears in multiple sections.
3. **By text parsing** — read `allNames()` or `readText()`, then parse the text to find what you need. Used for complex reads like conversation turns where the structure is in the text content, not in individual elements.

The [coding philosophy](05-coding-philosophy.md) says: target semantics, not presentation. Names and roles survive UI redesigns. Positions and CSS classes don't.
