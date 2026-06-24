# Sprint 44 — A Complete Project Book

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Build one project book with everything: project files, conversation summaries, artifact links. Make it navigable for Doug. Meanwhile, polish project file operations in the app model.

## Sprint goal

**Doug opens a project folder, sees the cover with files and conversations, clicks into a conversation that has artifacts, follows a link to the artifact, reads the full transcript. All links work. Meanwhile, the app model's project file operations are designed correctly.**

## Test project

**DNA Patternity** — 18 conversations, 17 project files, likely has artifacts. Good balance of content.

## Tracks

### Track A — Build the DNA Patternity book (Claude + Libby)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Match conversations to export | Find the 18 mapped conversations in the export data. Get dates, message counts, UUIDs. |
| A-2 | Find artifacts in those conversations | Scan the export for tool_use blocks in DNA Patternity conversations. |
| A-3 | Write the .cover.md | Project name, description, instructions. Files section listing all 17 docs. Conversations table with links. |
| A-4 | Write conversation summaries | One chapter per conversation. Title, date, messages, link to full transcript, links to artifacts. |
| A-5 | Verify navigation | Run link validator. Then open in VS Code preview and click through. |

### Track B — App model file operations (Arthur + Adam)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | Review project file controller | Read the current `project-controller.ts` file operations. Are upload, download, remove, readContent designed correctly? |
| B-2 | Review Lazy<T> on files | Does `project.files.wait()` load all files including paginated ones? |
| B-3 | Design file content reading | When we read a project file's content via the app, how does it work? Click the file, read the text, go back? |

<!-- citations -->
[export-format]: ../../library/export-format/.cover.md
