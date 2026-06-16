# Sprint 35 — The Object Model

Build the TypeScript class hierarchy that models the Claude Windows app as a human sees it.

## Sprint goal

**A clean `src/` with a working `ClaudeApp` class (execute, exit, maximize), screenshots of the app in Claude's perspective, and skeleton classes for every visible component — named, typed, wired together, unimplemented.**

## Required reading

- [Coding Policy](../../library/coding-policy/.cover.md) — naming, modules, automation discipline
- [Windows Automation Reference](../../library/windows-automation/.cover.md) — the proven launch sequence
- [desktop.ps1](../../agents/src/desktop.ps1) — screenshot code to port (GDI capture)
- Arthur to research OO + DI best practices before skeleton work begins

## Track A — Clean house (Adam + Arthur)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Archive dead code | Move old `.js`, `.ps1` (except `desktop.ps1` for reference), dead experiments to `src/.archive/`. Delete true dead ends. |
| A-2 | Organize src | Clean structure: TypeScript source files, the shortcut, `package.json`, `tsconfig.json`. Nothing extraneous at the top level. |
| A-3 | Shortcut utility | Move the shortcut-generation PowerShell into a utility script (`src/tools/create-shortcut.ps1` or similar). We need to regenerate it when Claude's version updates. |

## Track B — ClaudeApp class (Claude + Adam)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | `ClaudeApp.execute()` | Launch via shortcut, wait for window, restore, wait for UIA, maximize. The [proven sequence](../../library/windows-automation/01-electron-accessibility.md). TypeScript, clean, following coding policy. |
| B-2 | `ClaudeApp.exit()` | `WM_CLOSE` to main window, `Stop-Process` on stragglers, poll until zero MSIX processes. |
| B-3 | `ClaudeApp.maximize()` | `ShowWindow(hwnd, SW_MAXIMIZE)`. Simple but must only be called after render. |
| B-4 | `ClaudeApp.screenshot()` | Capture the window via GDI (port from `desktop.ps1`). Save to a specified path. |

## Track C — Look at the app (Claude)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Screenshot the home screen | Launch the app, take a screenshot, save to `.perspective/`. Write a chapter about what you see — identify every visible component. |
| C-2 | Screenshot a conversation | Open a conversation (manually if needed), screenshot, perspective chapter. Identify the message area, input, model selector, etc. |
| C-3 | Screenshot a project | Open a project view, screenshot, perspective chapter. Identify files list, instructions, project conversations. |
| C-4 | Component inventory | From the screenshots, compile a list of all visible components with proposed class names. |

## Track D — Skeleton code (Arthur + Claude)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Research OO + DI best practices | Arthur researches: how to model a desktop app's UI as a class hierarchy. DI patterns for wiring components. TypeScript-specific idioms. |
| D-2 | Write skeleton classes | Empty classes with names, properties, constructors. No implementation — just the shape. Every class in its own file, one concern per file. |
| D-3 | DI wiring | How the components assemble. The App creates the Window. The Window contains the Sidebar, the Header, the active Screen. Screens contain their components. |

## Track E — Documentation (Libby)

| ID | Story | Description |
|----|-------|-------------|
| E-1 | Code-library linking policy | Document how code and library reference each other. Library cites source files. Code cites library chapters for "why." Add to coding policy. |
| E-2 | Update library books | Reflect sprint decisions in Claude Driver, Windows Automation Reference. |
| E-3 | Autobiography updates | Everyone writes their chapter. Own voice, own book. |

## Definition of done

- [ ] `src/` is clean — no dead files, clear structure
- [ ] `ClaudeApp` class works: execute → exit → execute produces the same result twice
- [ ] At least 3 screenshots in Claude's perspective with component observations
- [ ] Skeleton classes for all identified components — named, typed, wired, empty
- [ ] Coding policy updated with code-library linking
- [ ] Autobiographies updated

## Design principles (from Doug)

- **Minimalistic, professional organization.** Elegant simple names.
- **Model the app as a human sees it.** Screens, components, shared elements.
- **Reusable instances.** Same component class, different data (conversation list on home vs in a project).
- **Polymorphism for contextual differences.** When a component behaves differently in different contexts.
- **DI for assembly.** Components receive their dependencies, they don't find them.
- **Look first, name second, implement last.**

<!-- citations -->
[coding policy]: ../../library/coding-policy/.cover.md
[Windows Automation Reference]: ../../library/windows-automation/.cover.md
[proven sequence]: ../../library/windows-automation/01-electron-accessibility.md
[desktop.ps1]: ../../agents/src/desktop.ps1
