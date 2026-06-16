# Sprint 36 — The Ghost App

Build the full skeleton of the Claude controller. Every class, method, and property named and typed. Constructors wired. Bodies empty. The ghost of the app before any flesh goes on the bones.

## Sprint goal

**A complete TypeScript skeleton that models every interaction we care about with the Claude Windows app — readable as a specification, implementable one method at a time.**

## Tracks

### Track A — Library tidy (Libby)

Priority: unblock others by tidying the root first, then deeper reorganization.

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Nothing but folders at library root | Every loose file becomes a book or moves into one. `.librarianship/` at the root as the top-level catalogue. Templates, loose docs — all organized into books. |
| A-2 | .librarianship as top-level subject | Dot-prefixed to sort first. Catalogues all books. Contains the field guide chapters + validation scripts (when ready). The book that represents the librarian and the library itself. |
| A-3 | Point books to their subject | Each book's cover gets a `subject:` field linking to its catalogue. |

Note: Libby may split deeper reorg into Sprint 37. Priority is the root tidy (A-1) and the catalogue (A-2).

### Track B — Agentic tooling research (Adam)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | Survey agentic AI tools | Web search: MCP servers for Windows automation, agentic frameworks, tools designed for AI-driven workflows. What exists? What's mature? What fits our stack? |
| B-2 | Evaluate top candidates | For each promising tool: what does it do, how does it integrate, would it replace our PowerShell subprocess calls? |
| B-3 | Write a book | Work with Libby to create an objective library book about the findings. Not a spike — durable knowledge. |

### Track C — Explore the app (Claude + Adam)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Navigate to projects page | Write throwaway code in `scripts/` to open the Projects view. Screenshot it. |
| C-2 | Navigate into a project | Open a specific project. Screenshot. Observe: files, instructions, scoped conversations. |
| C-3 | Open a conversation with content | Navigate to a chat that has messages, artifacts, uploaded files. Screenshot. Observe the message structure. |
| C-4 | Narrate each screenshot | Write perspective chapters for each screenshot. Describe what the app does semantically. Identify components. |

### Track D — Ghost app skeleton (Claude + Arthur)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Skeleton from home + conversation observations | Expand existing skeleton classes with methods discovered from screenshots and narration. |
| D-2 | Skeleton for projects | New page class: `Project`. Properties for files, instructions, scoped chat list. Methods for navigation. |
| D-3 | Skeleton for message reading/writing | How messages are structured. Reading a conversation. Editing a message. Copying content. |
| D-4 | Full ghost app review | Walk the entire skeleton. Every class, every method. Does it read like a spec? Are the names right? |

### Track E — Autobiography + books (All)

| ID | Story | Description |
|----|-------|-------------|
| E-1 | Sprint chapters | Everyone writes in their autobiography about Sprint 36 learnings. |
| E-2 | Thematic books | Continue growing the thematic books started last sprint. |

## Design approach

Doug's philosophy: **semantic structure drives elegant function.** Name first. Describe in prose what the thing does. Let the prose inform the method names. The skeleton is the specification. Implementation follows.

The prose-before-code pattern: Claude narrates what he sees in the app → the narration produces verbs and nouns → the verbs become methods, the nouns become classes → the skeleton captures the shape → implementation fills in the bodies.

## Definition of done

- [ ] Library root: nothing but folders (books)
- [ ] `.librarianship/` exists as top-level catalogue
- [ ] Adam has surveyed agentic tooling and written findings to the library
- [ ] Screenshots of: projects page, open project, conversation with content
- [ ] Perspective chapters narrating each screenshot
- [ ] Complete ghost app skeleton — all classes, methods, properties named and typed
- [ ] Autobiographies updated

<!-- citations -->
[coding policy]: ../../library/coding-policy/.cover.md
[librarianship]: ../../library/librarianship/.cover.md
[perspective]: ../../library/..team/claude/.perspective/.cover.md
