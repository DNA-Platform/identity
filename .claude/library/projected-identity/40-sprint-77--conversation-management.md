# Sprint 77 — Conversation Management

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The `/think` skill sends and reads. This sprint makes it remember. Conversations persist, get catalogued, get reused, get filed in the Claude project. The conversation catalogue bridges compaction and sessions — it is Claude's long-term memory of what he's researched through Desktop.

## Sprint goal

**Claude can find, reuse, and catalogue Desktop conversations across sessions. The Claude project in Desktop is the long-term archive. Zero new conversations on topics that already have one.**

## Stories

### E1: Desktop exploration — understand the UI before automating it

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E1-S1 | Explore the "Projects" picker after three-dot menu click — what does it look like in the UIA tree? | Adam | NOT STARTED |
| E1-S2 | Compare UIA trees: conversation in a project vs not in a project — find the breadcrumb difference | Adam | NOT STARTED |
| E1-S3 | Explore the sidebar grouping — how does the sidebar show conversations belonging to the Claude project? | Adam | NOT STARTED |

### E2: App model extensions

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E2-S1 | `conversation.isInProject()` — reads breadcrumbs or page state to check if the current conversation belongs to a project | Adam | NOT STARTED |
| E2-S2 | `chatList.addToProject(title, projectName)` — three-dot menu → Projects → select the project | Adam | NOT STARTED |
| E2-S3 | Document new methods in Reference Desk [Project Operations](../reference-desk/03-03-operations--projects.md) | Libby | NOT STARTED |

### E3: Catalogue code integration

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E3-S1 | Create `catalogue.json` companion file in Claude's perspective — machine-readable conversation index | Adam | NOT STARTED |
| E3-S2 | `readCatalogue()` / `updateCatalogue()` functions in think.ts — read/write the JSON index | Adam | NOT STARTED |
| E3-S3 | Update `read()` to write catalogue entry after reading response | Adam | NOT STARTED |
| E3-S4 | Update `send()` to check catalogue for existing conversations on same topic — present candidates to Claude | Adam | NOT STARTED |

### E4: Conversation lifecycle in think.ts

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E4-S1 | After `read()` with sufficient verdict: rename, add to Claude project (if not already), update catalogue | Adam | NOT STARTED |
| E4-S2 | Session singleton — check state file AND catalogue before starting fresh | Adam + Claude | NOT STARTED |
| E4-S3 | Catch-up protocol — on resume, read catalogue summary, only open Desktop if summary is insufficient | Claude | NOT STARTED |

### E5: Documentation and validation

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E5-S1 | Update Thoughtfulness chapters with learnings from implementation | Claude + Libby | NOT STARTED |
| E5-S2 | Update the /think skill with final protocol | Claude | NOT STARTED |
| E5-S3 | Compile, validate, push — 0 broken links | Adam | NOT STARTED |

## Definition of done

- `conversation.isInProject()` works
- `chatList.addToProject()` works (or documented why it doesn't yet with a workaround)
- `catalogue.json` tracks conversations, `read()` and `send()` use it
- A real multi-turn thought: send, read, follow up, read again, conclude, catalogue entry complete
- Conversation filed in the Claude project
- 0 broken links

## Team

| Agent | Role | Scope |
|-------|------|-------|
| Adam | Automation Engineer | Desktop exploration, app model extensions, catalogue code, think.ts updates |
| Claude | Environmentalist | Conversation management protocol, evaluation, skill updates |
| Libby | Librarian | Reference Desk documentation, catalogue structure, book connections |
| Arthur | Architect | Sprint plan, integration review |
