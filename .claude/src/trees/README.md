# UIA Trees — captured reference snapshots

Real Claude Desktop accessibility-tree dumps, one per app state, captured with
`allNames()`. They are the ground truth the driver is built and tested against —
"look at the app, not the code" (Sprint 88) made durable. They travel with the
driver (this is identity — see On Sync, "Beware the two `src/` directories").

## Convention

- **One file per state:** `<state>.txt` — e.g. `home.txt`,
  `conversation-streaming.txt`, `conversation-thinking.txt`,
  `conversation-complete.txt`, `projects.txt`, `project-detail.txt`.
- **Contents:** the raw `allNames()` output, one element per line
  (`ControlType.X | Name`), with a header comment giving the url/screen and the
  capture date (Anthropic changes the app; the date says how fresh the tree is).
- **Cataloguing with `///:`** — a controller or page that parses a given state
  links to its tree from its `///:` annotation, so the knowledge and the code
  stay tied. Example, in `controllers/conversation-controller.ts`:

  ```
  ///: Streaming/complete detection — see the trees:
  ///: [streaming](../trees/conversation-streaming.txt),
  ///: [complete](../trees/conversation-complete.txt).
  ```

  The link checker validates these links like any other markdown link.

## The tree is flat — infer the structure from it

The `allNames()` dump is a **flat list**; it never contains the structured
response. There is no `Content`/`Thinking`/`Response` nesting in the tree — only
a sequence of `ControlType | Name` lines. The structured `Response` is **inferred**
from that flat sequence: the boundary markers (`You said:`, `Claude responded:`,
`Message actions`), the `<ANTARTIFACTLINK …/>` tag, code-block and thinking
detection. That inference *is* the parser. So when building or fixing the
structured `Response`, read the relevant flat tree here and infer the blocks from
it — the tree is the evidence, the structure is what we derive from it.

## Catalogue (captured 2026-06-21, app v1.14271.0, Opus 4.8 High)

| Tree | State | What it shows |
|------|-------|---------------|
| [home-fresh.txt](home-fresh.txt) | Fresh chat (New chat) | The empty composer + sidebar. Baseline. |
| [composer-typed.txt](composer-typed.txt) | Prompt typed, not sent | The typed text sits in `ControlType.Edit \| Write your prompt to Claude`. |
| [conversation-just-sent.txt](conversation-just-sent.txt) | Just sent, no response yet | User message present, **no** thinking block, **no** streaming indicator yet. |
| [conversation-thinking-active.txt](conversation-thinking-active.txt) | Extended thinking active | `ControlType.Button \| Thinking` + `ControlType.Text \| Claude is responding` + `ControlType.Button \| Stop response`. Response body text still absent. |
| [conversation-streaming.txt](conversation-streaming.txt) | Thinking done, response streaming | The Thinking button's name has become the **summary** (`Weighing intuitive evidence against mathematical proof barriers`); `Claude is responding` + `Stop response` still present; response body **still not in named elements**. |
| [conversation-complete.txt](conversation-complete.txt) | Response finished (plain prose) | `Text \| Claude finished the response` replaces "Claude is responding"; `Stop response` gone; the response's own action buttons appear (`Copy`, `Read aloud`, `Give positive/negative feedback`, `Retry`); the Thinking button's name is the summary; `Text \| Claude responded: …` preview present. The body now appears as named `Text` elements too — but **split awkwardly** — while the clean contiguous body is in the Document text. Grounds `TextPart`. |
| [conversation-artifact.txt](conversation-artifact.txt) | Research + editable artifact (the complex case) | Grounds `ResearchPart`/`ThinkingPart` and `ArtifactPart`. **Research phases are summary blocks** — `Button \| Reconciled valuation data…`, `Button \| Synthesized valuation timeline…` (name = summary, like thinking). **The artifact is a titled PANEL, not an inline tag** — `Text \| Document`, `Document · MD`, `RadioButton \| Preview` / `RadioButton \| Code`, `Open in Visual Studio Code`, content as `ListItem`s. **No `<ANTARTIFACTLINK>` tag** — the old parser's artifact marker no longer exists. The response is a **sequence of parts**: text → research summaries → text → artifact. |
| [conversation-code.txt](conversation-code.txt) | Inline code block | Grounds `CodePart`. The block is `ControlType.Group \| <lang> code` (e.g. `python code` — language is in the group name), containing `Button \| Copy to clipboard` and `Text \| <lang>`. The code body is in the **Document text** (`def fibonacci(n):` …), split awkwardly across `Text` elements in the named tree. So: detect the block + language from the named `Group`, read the code content from the Document. |
| [projects.txt](projects.txt) | The Projects page (`/projects`) | Grounds `ProjectsPage`. A `ControlType.List \| Projects` of `ControlType.ListItem`s named `<name>Updated <date>` (e.g. `ClaudeUpdated 5 days ago` → project name `Claude`). Plus `Button \| New project`, `Sort projects`, `Edit \| Search projects`. Read the list items, strip the `Updated …` suffix for the name, `find(name)` → click → detail page. **Still to capture:** project detail (its conversations). |
| [conversation-menu.txt](conversation-menu.txt) | The three-dot conversation menu, expanded | Grounds `ConversationMenu` + `ChatListController` menu sensors/actuators. `ControlType.Menu \| More options for <title>` holding `ControlType.MenuItem \| Pin / Rename / Add to project / Delete` (and `Projects` when already filed). `clickRename` etc. invoke `MenuItem` by name; `readMenuItems` filters the known set. Captured via the **legal object model** (`ConversationItem.menu()`), not a raw invoke. |
| [move-conversation-modal.txt](move-conversation-modal.txt) | The "Add to project" dialog (`MoveConversationModal`) | Grounds `MoveConversationModal` + the modal controller methods. `ControlType.Window \| Move chat` (so `isDialogVisible` keys on "Move chat"), `Text \| Select a project to move this chat into.`, a **search bar** `ControlType.ComboBox \| Select a project`, then `ControlType.List \| Projects` of `ControlType.ListItem \| <project name>` (**Claude first**). `readProjectList` matches the `ListItem \| (.+)` lines; `clickProjectItem` invokes the `ListItem` by name; selecting auto-confirms and closes. |
| [conversation-rename-field.txt](conversation-rename-field.txt) | The inline rename field, open | Grounds `ConversationMenu.rename(name)` + `isRenameFieldActive`. Clicking the `Rename` MenuItem turns the title into `ControlType.Edit \| Rename` — that element's presence IS the field-active signal. The field opens pre-selected; paste replaces, Enter commits. **No confirm button** — confirming why `EditField`/`field.confirm()` was the wrong model. |

**Streaming = the Document text grows.** Across the unfold `readText()` length went 1992 → 2321 → 2437 → 3803 chars while `allNames()` stayed flat — the body streams into the Document, not into named elements. That growth is the real streaming signal (not the `Claude is responding` indicator).

**Completion markers (from conversation-complete):** `Claude finished the response` present, `Stop response` absent, response action buttons present.

**The body-text fork:** the clean, contiguous response is one block in the Document text; the named `Text` elements carry it pre-split and lossy on spacing. Fetching the structure (thinking summary, state, boundaries) is from named elements; fetching the *content* is cleanest from the Document text.

## What the trees prove — fetch the structure, read the content

The decisive finding for the structured `Response`:

- **The structure is named elements — fetch it directly.** User message = `ControlType.Text \| You said: …`. Thinking block = `ControlType.Button \| Thinking` (active) → `ControlType.Button \| <summary>` (done; the name *becomes* the summary). Message end = `ControlType.Group \| Message actions`. Streaming = `ControlType.Text \| Claude is responding` present. Generating = `ControlType.Button \| Stop response` present.
- **The response body text is NOT a named element.** The `allNames()` count stayed at exactly 94 through the entire response stream — the words are not discrete elements. They live in the `ControlType.Document \| <title>` element's TextPattern, reachable only by reading the Document's text.

So the structured `Response` fetches its *structure* from named elements (thinking summary, streaming/stop state, boundaries) and reads its *content text* from the Document. "Text streaming" = the Document's response text growing — not the `Claude is responding` indicator (which, per Doug, can sit there while frozen). This is the opposite of flat-text parsing: we query the named structure and read one text field, rather than dumping everything to text and regexing it apart.

## Why this matters

When Anthropic changes the app, the parser breaks. Re-capture the affected tree,
diff it against the committed one, and the change is exactly visible. The tree is
the spec the structure-fetching implements.
