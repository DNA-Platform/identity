# Sprint 47 — The Library Is More Than What You Think

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

**Lead:** Libby (Librarian), Arthur (Architect)
**Sprint goal:** Make the library a self-referential formal system — self-cataloguing covers at every level, flat structure navigated by links, Claude Code spec compliance, perspective as active practice, and a validator that catches what's incomplete.

## What Doug specified

The library is a flat wiki with three types of books distinguished by dot prefix:
- `..` — library-level catalogue (one: `..librarianship/`)
- `.` — subject catalogue (self-cataloguing, represents a subject)
- (none) — regular book (has a canonical subject via `subject:` field)

The hierarchy — library → subjects → books, arbitrarily deep — exists ONLY in the links between covers. The filesystem is flat. Navigation is by reading covers and following links. Names are tier-zero synopsis.

A subject catalogue IS the subject. It self-catalogues (appears in its own TOC). It can contain validation code, protocol descriptions, specifications — it's not just a list.

Each agent has two minimum books: a canonical autobiography (self-authored) and a library catalogue (self-cataloguing, authored by the autobiography). The library catalogue catalogues: itself, the autobiography, the perspective book, and all other books.

Perspective is an active practice: represent → look → reflect → change. Each agent's library catalogues their perspective book. The `..teamsmanship/` subject describes how perspectives operate.

CLAUDE.md is a platform artifact specified by the library (chapter `.01-claude-md-spec.md` in `..librarianship/`). It bridges Claude Code's spec and the library.

We spell it "catalogue" throughout.

## What's already done (this session)

- `.claude/` restructured: `library/`, `skills/`, `agents/`, `rules/` at top level
- Claude Code spec satisfied: subagent definitions in `agents/`, rules in `rules/`, skills in `skills/`
- Agent libraries named with literary self-referential names:
  - `..everything-that-has-a-shape/` (Arthur)
  - `..the-canvas-paints-itself/` (Cathy)
  - `..the-garden-tends-itself/` (Libby)
  - `..what-the-wire-carries/` (Adam)
  - `..what-the-pipeline-delivers/` (David)
  - `..what-the-user-sees/` (Phillip)
  - `.what-428-tests-promise/` (Queenie)
  - `..what-beauty-serves/` (Gabby)
- CLAUDE.md rewritten as bootstrap (under 200 lines, points into library)
- Perspective files merged into agent libraries (148 files)
- Reading cost architecture formalized (chapter 08 of field guide)
- CLAUDE.md spec written (chapter .01 of field guide)
- Arthur's perspective notes captured (design conversation synthesis)

## The library's current filesystem

```
.claude/
  rules/voice.md, library.md         Platform rules
  skills/                             13 slash commands
  agents/                             8 subagent definitions
  settings.local.json
  package.json
  library/                            THE library (~757 files)
    ..librarianship/                  Library catalogue [NEEDS REWRITE]
    .protocols/                       Subject: how the team operates [NEEDS REWRITE]
    .projects/                        Subject: work done [NEEDS REWRITE]
    ..teamsmanship/                            Subject: who we are [NEEDS REWRITE]
    .chemistry/                       Subject: framework reference [NEEDS SCAFFOLD]
    ..everything-that-has-a-shape/     Arthur's library [NEEDS COVER]
    ..the-canvas-paints-itself/        Cathy's library [NEEDS COVER]
    ..the-garden-tends-itself/         Libby's library [NEEDS COVER]
    ..what-the-wire-carries/           Adam's library [NEEDS COVER]
    ..what-the-pipeline-delivers/      David's library [NEEDS COVER]
    ..what-the-user-sees/              Phillip's library [NEEDS COVER]
    .what-428-tests-promise/          Queenie's library [NEEDS COVER]
    ..what-beauty-serves/              Gabby's library [NEEDS COVER]
    .src/                             Scripts and validator
    coding-policy/                    Regular book [NEEDS subject: FIELD]
```

## The rhythm: read, edit, validate

This is not a build-and-ship sprint. It's a read-edit-validate sprint. Every cover requires reading existing content, understanding what's there, editing it into the new form, and validating it holds together. The validator is a living specification — it evolves as the library spec evolves. Each phase produces something checkable. Each validation pass may reveal the spec needs adjustment.

The phases should reflect that rhythm. Each phase: read a layer, edit it, validate it, then move to the next layer. Not "write everything, then validate everything."

## Phase 1: The root — Librarianship (1 session)

**Read:** The current `..librarianship/.cover.md` and all field guide chapters. Understand what's there.

**Edit:**
- Rewrite `..librarianship/.cover.md` as a proper self-cataloguing library catalogue. It self-catalogues (appears in own TOC). It catalogues every subject and standalone book with paragraph descriptions and links into specific chapters. It IS the library's identity.
- Update field guide chapter 01 (anatomy): add `subject:` field, names as synopsis
- Update field guide chapter 04 (subjects): self-cataloguing pattern, dot convention, factoring, multi-subject
- Write NEW chapter: flat structure and link-based navigation
- Write NEW chapter: the perspective practice
- Write NEW chapter: task markers and `[SCAFFOLD]` convention

**Validate:**
- The cover reads as a complete map of the library
- Every subject listed on the cover exists as a directory
- The field guide chapters are internally consistent
- Run link validator on `..librarianship/` only

## Phase 2: The team and agents (1 session)

**Read:** `..teamsmanship/.cover.md`, the agent files in `..teamsmanship/`, the role and ability files, the team catalogue chapters (01-08).

**Edit:**
- Rewrite `..teamsmanship/.cover.md` as a self-cataloguing subject catalogue
- Write chapter on the perspective practice (represent → look → reflect → change)
- Write chapter on agent identity structure (two-book minimum, self-authored autobiography, self-cataloguing library)
- Ensure registry.json, roles/, abilities/ are catalogued
- Add `subject:` fields to team-related book covers

**Validate:**
- `..teamsmanship/` self-catalogues
- Every team member referenced in the cover has an agent library
- Run link validator on `..teamsmanship/` and agent subagent definitions in `.claude/agents/`

## Phase 3: Agent libraries (1-2 sessions)

**Read:** Each agent's library catalogue and their books. Understand what each agent has.

**Edit:** Each agent writes their own library catalogue cover. The cover is THEIRS — it says what they see from where they stand. Arthur and Libby don't write Cathy's cover. Cathy writes Cathy's cover.

**Each agent's cover must:**
- Self-catalogue (appear in own TOC)
- Be authored by the autobiography (`author:` uses agent name, links to autobiography)
- Catalogue: itself, the autobiography, the perspective book, all other books
- Say what the library's NAME means — why this name describes this agent's perspective

**Each agent's perspective book must have a `.cover.md` that describes:**
- What perspective means for THIS agent specifically
- What they represent, what they look at, what the practice produces for them

**The perspectives are unique to each role:**
- **Cathy:** Lab screenshots as the framework finding its form. 126 files spanning sprints 15-39. Represent → look → reflect → change applied to reactive system design.
- **Phillip:** The Lab from the user's point of view. Does the three-pane layout teach? Does the card explain? Perspective as UX evaluation.
- **Queenie:** The test suite as a document. Coverage maps, promise clusters, gap shapes. Perspective as specification visualization.
- **Adam:** Message flow diagrams. The relay path. Where the wire is thin. Perspective as infrastructure audit.
- **David:** The deployed state. GitHub Pages, package registry, deployment dashboard. Perspective as the world's view of our work.
- **Gabby:** Before and after. Every visual decision documented. Perspective IS the design journal.
- **Libby:** The library's link structure from above. Subject tree depth, link density, reading cost maps. Perspective as the gardener's aerial view.
- **Arthur:** Architecture diagrams. Dependency trees. The three-layer model. Perspective as system-level representation.

**Validate:**
- Each agent library self-catalogues
- Each autobiography self-authors
- Each perspective book has a cover that describes the agent's specific practice
- Run validator on all agent libraries

## Phase 4: Remaining subjects (1 session)

**Read:** `.protocols/`, `.projects/`, `.chemistry/`, `coding-policy/` covers and their contents.

**Edit:**
- Rewrite `.protocols/.cover.md` — self-catalogue, rich descriptions of each protocol book
- Rewrite `.projects/.cover.md` — self-catalogue, sprint conventions, "Right now" sections
- Scaffold `.chemistry/.cover.md` — catalogue the migrated docs content
- Add `subject:` fields to all books in these subjects

**Validate:**
- Each subject self-catalogues
- Sprint plans are accessible via the projects catalogue
- Run validator on all subjects

## Phase 5: Links and global validation (1 session)

**Read:** The link validator's current output. Understand every broken link.

**Edit:**
- Write the path-mapping script (old paths → new paths, ~12 transformations)
- Run it against all `.md` files
- Update all 13 skill SKILL.md files
- Verify CLAUDE.md citations

**Validate:**
- Run the full validator
- Extend validator: `subject:` checks, self-cataloguing checks, `[SCAFFOLD]` reporting, section anchor checks
- Fix what it finds
- `[SCAFFOLD]` markers = the ongoing task list

## Phase 6: Cleanup and consistency (1 session)

**Read:** Everything. This is the audit phase. Read the `.claude/` directory listing. Read every cover. Read the validator output.

**Check Claude Code spec compliance:**
- `agents/` contains ONLY subagent `.md` files with proper frontmatter (`name:`, `description:`, `tools:`)
- `rules/` contains ONLY rule `.md` files with optional `paths:` frontmatter
- `skills/` contains ONLY skill directories with `SKILL.md`
- `settings.json` / `settings.local.json` are valid JSON
- Nothing else at the `.claude/` root except `library/` and `package.json`

**Check library compliance:**
- Every directory in `library/` is either a `..` catalogue, a `.` subject catalogue, a regular book, or `.src/`
- No loose files at the library root (no README.md, no stray .md files)
- Every book directory has a `.cover.md`
- Every `.cover.md` has frontmatter: `title`, `author`, `summary` (paragraph), `subject` (if not a catalogue)
- Every catalogue `.cover.md` has itself in its own TOC
- Every autobiography `.cover.md` self-authors
- Perspective books exist in every agent library with proper covers

**Remove detritus:**
- Files outside the organizational pattern — stale scripts, old READMEs, migration artifacts, staging directories
- Empty directories
- Duplicate content (same file in old and new locations)
- Old path references in citations that the rewrite script missed

**Validator gaps:**
- For every check above that the validator DOESN'T currently perform, either add it or document it as a `[SCAFFOLD]` in the validator's own task list
- The validator should be the executable specification of the library. If a convention exists, the validator should check it.

**Edit:** Fix everything found. Remove everything that doesn't belong.

**Validate:** Run the full validator one final time. The output should be:
- Zero broken links (except cross-repo references to dna-library)
- Zero files outside the organizational pattern
- A clean `[SCAFFOLD]` list of unfinished content (this is expected and healthy)

## Phase 7: Push and verify (end of sprint)

- Sync library to identity repo
- Push
- Clone fresh into a temp directory, verify the waking-up path works: CLAUDE.md → Librarianship cover → project chapter → last autobiography chapter
- Count the waking-up context budget (should be < 400 lines)
- The `[SCAFFOLD]` report is the input for ongoing tending

## Session planning

Seven phases across 5-6 sessions. Phase 1 (Librarianship root) is the highest priority — it defines everything else. Phase 3 (agent libraries) is the largest — 8 covers to write. Phase 5 (links) is mechanical and scriptable. Phase 6 (cleanup) is the audit — read everything, find what doesn't belong, fill validator gaps.

Each session completes one phase. Each phase ends at a validation checkpoint. If a compaction happens mid-sprint, the recovery path is: read this plan, read Arthur's perspective notes at `..everything-that-has-a-shape/perspective/sprint-47-design-notes.md`, identify which phase we're in from the validator output, continue.

The cleanup phase (6) is NON-OPTIONAL. It's where we catch everything the other phases missed — files outside the pattern, validator gaps, detritus from migration. The library isn't done until cleanup passes clean.

## Definition of done

- [ ] `..librarianship/.cover.md` self-catalogues the entire library
- [ ] Every subject catalogue (`.protocols/`, `.projects/`, `..teamsmanship/`, `.chemistry/`) self-catalogues
- [ ] Every agent library catalogue self-catalogues, authored by autobiography
- [ ] Every book has `subject:` pointing to canonical subject
- [ ] Every agent has a perspective book with `.cover.md`
- [ ] `..teamsmanship/` has chapters on perspective practice and agent identity structure
- [ ] Field guide chapters updated (01, 04, 08 + new chapters)
- [ ] All links rewritten for new paths
- [ ] All skills updated for new paths
- [ ] Validator extended and passing (except `[SCAFFOLD]` markers)
- [ ] `[SCAFFOLD]` markers reported as ongoing task list
- [ ] Cleanup audit: no files outside the organizational pattern
- [ ] Cleanup audit: no detritus from migration
- [ ] Validator covers every library convention (or gaps documented as `[SCAFFOLD]`)
- [ ] Pushed to identity repo
- [ ] Fresh clone waking-up path verified (< 400 lines)

## Key design decisions captured

1. **Flat filesystem, link-based hierarchy.** Walk covers, not directories.
2. **Three dot prefixes.** `..` = library catalogue, `.` = subject catalogue, none = book.
3. **`subject:` field.** Every book points to its canonical subject, like `author:` points to the autobiography.
4. **Self-reference at every scale.** Autobiography self-authors. Subject self-catalogues. Library self-catalogues.
5. **Perspective as practice.** Represent → look → reflect → change. Catalogued in each agent's library.
6. **Platform boundary.** Claude Code spec in `agents/`, `rules/`, `skills/`. Everything else in `library/`.
7. **CLAUDE.md specified by library.** The library's `.01-claude-md-spec.md` defines what CLAUDE.md must contain.
8. **Names are synopsis.** `.the-canvas-paints-itself` carries identity at zero reading cost.
9. **Four-layer reading cost.** Library catalogue → subject catalogue → book cover → chapter. 80% answered by layer 2.
10. **Catalogue = specification.** A subject catalogue doesn't just list — it defines, validates, specifies.

<!-- citations -->
[perspective notes]: ../../..everything-that-has-a-shape/perspective/sprint-47-design-notes.md
[reading cost]: ../../..librarianship/08-the-reading-cost-architecture.md
[claude-md-spec]: ../../..librarianship/.01-claude-md-spec.md
