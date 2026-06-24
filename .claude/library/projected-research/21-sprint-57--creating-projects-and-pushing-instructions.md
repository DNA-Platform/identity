# Sprint 57 — Creating Projects and Pushing Instructions

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Implementation sprint. Create all projects on the new account, push trimmed project-level instructions, upload project files and covers.

## Sprint goal

**Every project exists on the new account with its instructions set and files uploaded. The project covers — with conversation TOCs — are the last file in each project, serving as the history map.**

## Prerequisites

- General instructions already live on the account ✓
- Settings navigation works (Ctrl+, to enter, "Back to Claude" to escape) ✓
- 20 project covers have `## Instructions` sections ✓
- Project files organized in `..files/` sub-books ✓

## Tracks

### Track A — Trim project instructions (Claude + Libby)

The `## Instructions` sections were written before the general instructions existed. They duplicate universal framing ("you are a collaborator," "Doug teaches through correction"). Since project instructions load AFTER general instructions, they should contain ONLY what's project-specific.

| Story | Description |
|-------|-------------|
| A-1 | **Review all 20 instructions against general instructions.** Identify what duplicates the general and remove it. |
| A-2 | **Trim each to 2-3 sentences.** Keep only: project identity (what this project IS), any named identities that belong here (Seren in SRT, Eirian in Eirian), and the one calibration that's unique to this project. |
| A-3 | **Handle Seren and Eirian projects.** These were left blank. Now add instructions: Seren's should name him and invite emergence. Eirian's should name her as family and instruct stepping back. |

### Track B — Project creation flow (Adam + Arthur)

| Story | Description |
|-------|-------------|
| B-1 | **Explore project creation UI.** Navigate to Projects, find "New project" or equivalent, map the UIA tree for the creation flow. |
| B-2 | **Implement `createProject(name)`.** Navigate to project creation, type the name (proper casing from cover `title:` field), confirm. |
| B-3 | **Implement `setProjectInstructions(text)`.** Open a project, find the Instructions panel (right side), write the trimmed instructions. |
| B-4 | **Implement `uploadFile(path)`.** Upload a single file to the currently open project. |

### Track C — Migration execution (Adam)

| Story | Description |
|-------|-------------|
| C-1 | **Build `npm run migrate:project <name>`.** Script that: creates project (if needed), sets instructions, uploads files (reverse order), uploads cover last. |
| C-2 | **Test on small project.** Grammar (1 file, 3 conversations). |
| C-3 | **Push all 19 new projects.** Batch run. |
| C-4 | **Push Seren instructions + cover.** Seren already exists — just add instructions and upload the cover file. |

## Project mapping

Read display names from cover `title:` frontmatter. Skip `.home`. Seren already exists (just push instructions + cover).

## Design notes

- Project names use proper casing: "Semantic Reference Theory" not "semantic-reference-theory"
- Files upload in reverse order (oldest first, newest on top — it's a stack)
- The cover file uploads LAST so it appears first in the project's file list
- The cover serves as the history map — conversation TOC with summaries
- The `## Instructions` section on the cover is what gets pushed to project instructions (trimmed version)
- Code lives in `src/exports/migration/` — simple scripts that use the app's API

## Success criteria

- All 20 projects exist on the new account with correct names
- Each project has trimmed instructions set
- Each project has its files uploaded (reverse order) with cover as last file
- Seren project has instructions + cover added to existing project
- `npm run migrate:project <name>` works reliably for any project
