# Sprint 59 — Create Projects and Upload Files

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Implementation sprint. Two concrete deliverables: create all projects on the new account, then upload files to each one.

## Sprint goal

**Every project exists on the new account with its files uploaded in reverse order. No instructions yet, no descriptions — just project names and files.**

## Track A — Create all projects (just titles)

Create 19 new projects. Just the name. Leave the description ("What are you trying to achieve?") empty. Seren already exists — skip it.

**Project names in alphabetical order** (read from cover `title:` frontmatter):

1. Ana Studies English
2. Ana's Fiverr Inbox
3. Career
4. Chemistry
5. DNA Patternity
6. Eirian
7. Georgia
8. Grammar
9. Inexplicable Phenomena
10. Investing
11. Learning
12. Life
13. Miscellaneous
14. Neuroscience
15. Nikolai
16. Number Theory
17. Physics
18. Russia
19. Turkey

No `.home` — those are unscoped conversations.

**App work:** The creation flow is tested (sprint 56 — Ana Studies English was created successfully). The script needs to:
- Navigate to Projects page
- Click "New project"
- Type the name (proper casing from cover `title:`)
- Leave description blank
- Click "Create project"
- Navigate back to Projects for the next one

## Track B — Upload files to each project

For each project that has files (`..files/` sub-book), upload them in reverse order (oldest first, newest last). The cover file uploads LAST — it appears first in the project's file list.

**Projects with files:**

| Project | Files | Notes |
|---------|-------|-------|
| Ana's Fiverr Inbox | 11 | Style guide documents |
| Chemistry | 8 | Source code files |
| DNA Patternity | 17 | React app source |
| Eirian | 56 | Identity documents — the most files |
| Inexplicable Phenomena | 66 | Encyclopedia Semantica codebase — the most files |
| Miscellaneous | 1 | Claude prompting guide |
| Neuroscience | 2 | Tolias papers |
| Physics | 1 | Referential semantics paper |
| Grammar | 1 | Grammar reference |
| Career | 1 | Career reference |
| Semantic Reference Theory | 55 | SRT papers + Seren's authored works |
| Seren | 12 | Seren's authored works (already exists — just upload files) |

**App work needed:**
- Navigate to a project
- Find the file upload mechanism ("Add files" button from the project page)
- Upload a file from disk
- Repeat for each file in reverse order
- Upload the project cover (.cover.md) as the last file

This requires exploring the file upload UI — it may be a file picker dialog, a drag-and-drop zone, or a button that opens a native file browser. Adam needs to investigate.

## Design principles

- **Complexity lives in the app.** The migration script calls app methods. The app handles the navigation, element finding, and interaction patterns.
- **The app models the UI as a human uses it.** Project creation is a page. File upload is a component. Each gets a proper model.
- **Maximize, operate, minimize.** Window stays maximized during work. Minimize when done.

## Order of operations

1. Create all 19 projects (Track A) — fast, just names
2. Investigate file upload UI (Track B prep)
3. Implement file upload in the app model
4. Upload files to each project, reverse order, cover last
5. Verify Seren project has its files added

## Success criteria

- 20 projects visible on the new account (19 new + Seren)
- Each project with files has them uploaded in correct order (cover on top)
- The app's project model includes `create()`, `uploadFile()` methods
- `npm run migrate:create-projects` works
- `npm run migrate:upload-files <project>` works
