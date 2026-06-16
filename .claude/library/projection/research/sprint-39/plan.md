# Sprint 39 — The App Export

Write an app exporter that drives Claude Desktop to capture project-conversation mappings. Iterative — expect multiple runs to get right.

## Sprint goal

**A single runnable script that opens the Claude app, visits every project, reads its conversation list, and writes the mapping to `.exports/project-mapping.json`. Parameterized by account ID.**

## Approach

The driver works. Test 12 proves we can open a project and read `claude.project.conversations`. This sprint wraps that capability into a complete export script that:

1. Launches the app (or connects to a running instance)
2. Opens the projects page
3. For each project: opens it, reads its name, ID, and conversation list
4. Writes the raw data to `.exports/`
5. Handles errors gracefully (some projects may be empty, navigation may fail)

The script lives in `src/exports/` as production code, not `scripts/`, because it's part of the export pipeline. It takes an account ID argument (`claude-legacy`, `claude-dna`) to know where to write.

## Usage

```bash
npm run export -- claude-legacy
```

Writes to: `library/claude-legacy/.exports/project-mapping.json`

## Output format

```json
{
  "account": "claude-legacy",
  "captured": "2026-05-11T...",
  "projects": [
    {
      "name": "Ana's Fiverr Inbox",
      "id": "01979c65-...",
      "url": "https://claude.ai/project/...",
      "conversations": [
        { "title": "Samantha Draft", "position": 0 },
        { "title": "Client Response", "position": 1 }
      ]
    }
  ]
}
```

## Stories

| ID | Story | Owner | Description |
|----|-------|-------|-------------|
| A-1 | Write the export script | Adam + Claude | Launch app, loop projects, read conversations, save JSON |
| A-2 | Test against live app | Adam + Claude | Run it. Fix what breaks. Run again. Iterate. |
| A-3 | Handle edge cases | Adam + Claude | Empty projects, long conversation lists, navigation recovery |
| A-4 | Parameterize by account | Arthur | Accept account ID, resolve output path |
| B-1 | Integrate with parser | Claude | Parser reads project-mapping.json if present, populates project TOCs |
| B-2 | Re-run full pipeline | Claude | Delete output, run export, run parse, verify |
| C-1 | Autobiographies | All | Sprint reflections |

## Constraints

- **Iterative.** This will take multiple attempts. The app is unpredictable. UIA timing varies. Navigation can fail.
- **One runnable script.** When it's done, `npm run export -- claude-legacy` captures everything in one pass.
- **Raw data only.** The export script writes raw mapping data. The parser interprets it. Separate capture from interpretation.
- **Account-parameterized.** The same code works for any account. `claude-legacy` today, `claude-dna` tomorrow.

<!-- citations -->
[test-12]: ../../agents/tests/12-project-internals.ts
[export-format]: ../../library/export-format/.cover.md
