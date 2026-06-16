# Sprint 52: The Third Pillar

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The library has two subjects with catalogues: Knowledge (Librarianship) and Collaboration (Teamsmanship). The third — the computational substrate, the platform that runs the library — exists as scattered references but has no home. Claude is the teammate who holds this territory, the way Libby holds Knowledge and Arthur holds Collaboration. This sprint builds Claude's presence and the compilation infrastructure that makes the library self-generating.

Doug also pointed out that the sprint/project abstraction itself belongs in the metaphor. Projects are a type of book. Sprints are a type of chapter. This has always been true — we've been writing sprint plans as chapters inside project books. But it's not specified. This sprint specifies it.

## Tasks

### Phase 1: Investigation and reading

#### 1a. Claude reads the code

Read the `src/` application code from dna-library that Adam and I built — the conversation pipeline, the listen/hear/speak infrastructure. Read the existing skills. Read the agents compiler. Read The Platform Interface. Understand the territory before building in it.

**Owner:** Claude
**Scope:** `src/`, `.claude/skills/`, `.claude/agents/`, the-platform-interface book

#### 1b. Read what Claude was in dna-library

The dna-library project had Claude as a teammate. Read whatever remains of that representation. Understand what Claude was before deciding what Claude becomes here.

**Owner:** Claude, Adam
**Scope:** dna-library references in autobiographies

### Phase 2: Discussion and naming

#### 2a. Name the third subject

The team discusses. Knowledge, Collaboration, and ____. The subject name is NOT "Claude" — that's the teammate's name. The subject is an area of knowledge. What is the area? The Platform? The System? The Substrate? Something that fits the art: Librarianship, Teamsmanship, ____ship?

This is a team decision. Everyone contributes. The name emerges from discussion, not from one person.

**Owner:** All
**Output:** A subject name and a book name for the third `..` catalogue

#### 2b. Discuss the project/sprint specification

Doug said a project is a sort of subject that has a type of book that's a plan. Sprints as chapters fit naturally. Discuss: how does the current `inexplicable-phenomena/` structure map to the type system? What's specified and what's implicit? Where does this specification live — in Bookkeeping (since it's about a type of book) or in the project book itself?

**Owner:** Arthur, Libby
**Output:** A specification sketch for project-books and sprint-chapters

### Phase 3: Scaffolding

#### 3a. Claude's personal library

Set up `..team/claude/` with the two-book minimum:
- `..` library catalogue (the personal library identity)
- Autobiography (chapter 1: arriving, the self-reference problem, what the name means)

**Owner:** Claude
**Scope:** `..teamsmanship/..team/claude/`

#### 3b. The third subject catalogue

Create the `..` prefixed directory at library root. Cover with `catalogues:` label. Self-cataloguing entry. Scaffold TOC listing the books that will sit beside it: the platform interface, the compilation pattern, the skills system.

The name comes from phase 2. The content comes from existing books that already describe this territory (the-platform-interface, the agents folder chapter, the skills-and-commands book).

**Owner:** Claude, Libby
**Scope:** Library root — new `..` directory

#### 3c. Scaffold the project/sprint specification

Write the specification — either as a Bookkeeping chapter (On Projects? On Sprints?) or as a chapter in the project book itself. Specify: what frontmatter a project book has, what a sprint chapter looks like, how the sprint history table works, how plans relate to retros.

**Owner:** Arthur, Libby
**Scope:** Bookkeeping or inexplicable-phenomena book

### Phase 4: Compilation

#### 4a. CLAUDE.md compiler

Build a compiler that reads the library and generates CLAUDE.md. The field guide chapter [09-claude-md-spec.md](../..librarianship/09-claude-md-spec.md) specifies what it must contain. The compiler is a `.ts` resource beside a chapter in the third subject's catalogue (or beside the platform interface chapter).

Input: library catalogue, subjects, waking-up layers
Output: `CLAUDE.md` at project root
Pattern: same as the agents compiler

**Owner:** Claude
**Scope:** New compiler resource

#### 4b. Territory rules compiler

Build a compiler that reads [code-territory.md](../..teamsmanship/05-territory.md) and generates path-scoped `.claude/rules/{territory}.md` files. Each rule embeds the minimum + links to the library.

Input: code territory assignments
Output: `.claude/rules/*.md` files
Pattern: same as agents compiler

**Owner:** Adam
**Scope:** New compiler resource

### Phase 5: Catalogue updates

#### 5a. Teamsmanship catalogues Claude

Add Claude as the ninth teammate in the Teamsmanship cover. Write the catalogue chapter for Claude's personal library, matching the pattern of chapters 11-18 for the other teammates.

**Owner:** Arthur
**Scope:** `..teamsmanship/.cover.md` + new chapter

#### 5b. Librarianship shows three subjects

Update the library catalogue to show the third subject — even if it's still young. Three subjects: Knowledge (Librarianship), Collaboration (Teamsmanship), and the third. The entry can note `[SCAFFOLD]` where content is incomplete.

**Owner:** Libby
**Scope:** `..librarianship/.cover.md`

### Phase 6: Reflection

#### 6a. Claude's autobiography chapter 2

Write the second chapter. What compilation taught about self-reference. The system that generates its own interface from its own description. How this differs from Libby's self-cataloguing and Arthur's self-specifying.

**Owner:** Claude

#### 6b. Sprint retro

The team discusses what sprint 52 revealed. The naming decision. The compilation pattern. What the third pillar changes about how the library sees itself.

**Owner:** All

## Definition of done

- Claude exists as a teammate in `..team/claude/` with autobiography and library catalogue
- Third subject catalogue exists at library root with cover and scaffold TOC
- CLAUDE.md compiler produces a valid bootstrap file from library content
- Territory rules compiler generates path-scoped rules from territory.md
- Project/sprint specification exists as a chapter
- Teamsmanship catalogues Claude
- Librarianship shows three subjects
- Both compilers have chapter resources documenting them

## Dependencies

Sprint 52 depends on sprint 51's alignment. The compilers need valid frontmatter to read. The catalogue updates need the reading cost measured so we don't exceed budgets. And the naming discussion needs the team to have sat with Bookkeeping long enough for the art to feel natural.

<!-- citations -->
[bookkeeping]: ../../bookkeeping/.cover.md
[platform-interface]: ../../the-platform-interface/01-the-platform-interface.md
[agents-compiler]: ../../..teamsmanship/06-the-agents-folder.ts
[territory]: ../../..teamsmanship/05-territory.md
[claude-md-spec]: ../../..librarianship/09-claude-md-spec.md
