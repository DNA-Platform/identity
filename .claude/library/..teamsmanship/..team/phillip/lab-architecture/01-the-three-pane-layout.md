# The three-pane layout

- **author:** [Phillip](../phillip-and-the-visible-layer/.cover.md)

---

[Book: [Lab Architecture](.cover.md)]

The Lab has three panes: sidebar, content, and code. The sidebar lists tests and cases in a tree structure. The content pane renders the case's visual output -- the actual $Chemistry view, live and reactive. The code pane shows the source that produces that output. Three panes because the Lab serves three questions simultaneously: *what can I look at?* (sidebar), *what does it look like?* (content), and *how does it work?* (code).

The sidebar is a navigation tree. Tests group related cases. Each test has a name and an element symbol -- the periodic-element metaphor that Gabby refined into the card chip. Click a test, and its cases expand below. Click a case, and the content and code panes populate. The sidebar owns the route state: hash-based routing means the URL fragment maps to a test and case, so you can link directly to any demonstration. The routing is a `$Chemical` -- it reacts to `hashchange` events and updates the selected test and case, which propagates through the reactive graph to update the other two panes.

The content pane is where $Chemistry proves itself. Every case renders live -- not a screenshot, not a recording, but the actual framework producing actual DOM. When a case demonstrates reactivity, you see the value change. When it demonstrates composition, you see the parent-child relationship rendered in real time. The content pane is the Lab's reason for existing: it makes the framework's behavior visible and interactive.

The code pane completes the story. Seeing what a case *does* is useful. Seeing how the code *reads* is what teaches. The code pane shows the source for the current case, syntax-highlighted, scrollable, and synchronized with the content pane. When you change cases, both panes update together. The pairing is deliberate: behavior and source, side by side, so the reader never has to context-switch between "what happened" and "why."

The constraint that shapes every architectural decision is dogfooding. `$Layout` is a `$Chemical` that manages the three-pane split. The sidebar is a `$Chemical`. The router is a `$Chemical`. When the layout breaks, it's a framework bug. When the sidebar navigation feels sluggish, it's a reactivity performance issue. When the theme doesn't apply to a nested component, it's a composition problem. The Lab is not separate from the test suite -- it IS the test suite, experienced visually. Every component I build is a test I'm running.

The class hierarchy reflects this. `$Lab` is the root -- it mounts to the DOM and owns the theme provider. `$Layout` manages the pane geometry. `$Test` represents a group of demonstrations. `$Case` renders a single one. `$PlannedCase` is a placeholder -- a case that appears in the sidebar with a planned status, marking a demonstration that the spec requires but nobody has built yet. The hierarchy is shallow because depth is handled by composition, not inheritance. A case can contain any chemical the framework can render, nested to any depth.

The two-color theme runs through everything. Turquoise is structural -- borders, headings, the sidebar's active-item highlight. Neon-green is active -- the brand accent, hover states, the periodic-element symbol on the card chip. The theme is a `ThemeProvider` wrapping the `$Lab` root, and every styled-component reads from it. Gabby owns the values. I own the plumbing. The separation works because styled-components give us a shared vocabulary: a color defined in the theme, used in a component, changed in one place.

<!-- citations -->
[Phillip and the Visible Layer]: ../phillip-and-the-visible-layer/.cover.md
[chemistry app]: ../../../../../library/chemistry/app/
