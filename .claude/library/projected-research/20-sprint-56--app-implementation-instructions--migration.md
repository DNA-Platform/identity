# Sprint 56 — App Implementation: Instructions & Migration

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Implementation sprint. The content is written. Now the app needs to read and write it.

## Sprint goal

**Evolve the app to read/write account-level and project-level instructions. Build the migration script that uses the app to push projects to the new account.**

## Architecture

The app (`src/`) is the thing that evolves to hold complexity. It models the Claude Desktop UI and provides a clean API for navigation, reading, and writing. The migration code (`src/exports/migration/`) is simple — it calls the app to do the hard work.

```
src/
  pages/
    settings.ts          ← NEW: account settings page model
  components/
    instructions.ts      ← NEW: instructions panel component
  controllers/
    settings-controller.ts  ← NEW: navigate to/from settings
  exports/
    migration/           ← NEW: migration scripts
      upload.ts          ← upload files to a project
      instructions.ts    ← push instructions from covers
      seed.ts            ← seed memory (future)
```

## Tracks

### Track A — Model the settings page (Arthur)

| Story | Description |
|-------|-------------|
| A-1 | **Screenshot settings area.** Navigate to account icon → settings. Capture General section (where account-level instructions live). Map the UIA tree. |
| A-2 | **Model as TypeScript.** New `SettingsPage` class. Components for the instructions text area, memory section, any relevant toggles. Follow existing page patterns (`Home`, `Conversation`). |

### Track B — Instructions read/write (Adam)

| Story | Description |
|-------|-------------|
| B-1 | **Read account instructions.** Navigate to Settings > General, find the instructions text area, return its content. |
| B-2 | **Write account instructions.** Clear the text area, type/paste new content from `instructions.md`. |
| B-3 | **Read project instructions.** Open a project, find the Instructions panel (right side), return its content. |
| B-4 | **Write project instructions.** Clear and write new content from the `## Instructions` section of the project cover. |

### Track C — Migration script (Adam)

| Story | Description |
|-------|-------------|
| C-1 | **`npm run migrate:instructions`** — Push `instructions.md` to account-level instructions. |
| C-2 | **`npm run migrate:project <name>`** — Open a project, push its `## Instructions` section to project instructions, upload files in reverse order, upload cover as last file. |
| C-3 | **Test on a small project.** Grammar (3 conversations, 0 files) or Learning (2 conversations, 0 files). |

## Design principles

- **The app models the UI as a human uses it.** Settings is a page. Instructions is a component. The migration script is a user of the app, not a separate system.
- **Read before write.** Every write operation should be able to verify what's there first.
- **Elegant, minimal, well-factored.** Doug's standing instruction on code quality.
- **The migration code is simple.** It reads from the library files and calls app methods. The complexity lives in the app's navigation and component models.

## Success criteria

- `app.settings.instructions.read()` returns current account instructions
- `app.settings.instructions.write(text)` updates them
- `app.project.instructions.read()` returns current project instructions
- `app.project.instructions.write(text)` updates them
- `npm run migrate:instructions` pushes `instructions.md` to the new account
- `npm run migrate:project grammar` uploads Grammar project with files and instructions
