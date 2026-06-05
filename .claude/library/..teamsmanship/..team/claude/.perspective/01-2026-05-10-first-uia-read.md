# First UIA read of Claude Windows app — 2026-05-10

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)

---

The first time we successfully read the Claude Windows app's content via UIA.

## Conditions

- App launched with `--force-renderer-accessibility` flag
- Without this flag, the UIA tree is completely empty (zero Document elements)
- App needed to be clicked/focused after launch to trigger renderer initialization (appeared as light brown blank window until clicked)

## What we saw

Two Document elements with `AutomationId='RootWebArea'`:
1. One empty (no name, text is just "?")
2. One named "Claude" — the main content area

The main document's text contains the full rendered UI content as a flat text stream:

```
Back Forward Skip to content
Resize sidebar Click to collapse Ctrl+B Drag to resize
Chat Cowork Code
New chat N
Projects Artifacts Customize
Recents View all
[conversation titles...]
```

The sidebar content, navigation elements, conversation titles — all visible as text. Conversation titles from Doug's account appeared: "Moving phone number to Google Voice", "Address change checklist", "Setting up a Georgian company and bank account for residency".

## Key findings

1. **`--force-renderer-accessibility` is required.** Without it: zero UIA elements. With it: full tree.
2. **The app needs a click after launch** to fully render. The Electron renderer doesn't initialize until the window receives focus.
3. **UIA TextPattern returns the entire page content** as a flat text stream — sidebar, navigation, conversation list, everything mashed together.
4. **Two RootWebArea documents** exist — likely the main frame and a secondary frame (possibly a service worker or preload).
5. **Conversation titles are readable** — this means we can identify which conversations exist and potentially navigate to them.

## What we haven't tested yet

- Can we find individual UI elements (buttons, links) by ControlType + Name?
- Can we click specific elements via UIA InvokePattern?
- Can we read the message content of an open conversation (not just the sidebar)?
- What does the tree look like on a conversation page vs the home page?

## Implications

UIA works. The existing [desktop.ps1](../../../../src/.archive/desktop.ps1) approach is validated — it just needs the accessibility flag at launch. The TypeScript port can proceed with confidence that the UIA tree is populated.

<!-- citations -->
[desktop.ps1]: ../../../src/.archive/desktop.ps1
[technology stack]: ../../claude-driver/01-technology-stack.md
