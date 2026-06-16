# Sprint 48 — The Library Gets Real

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

**Lead:** Libby (Librarian), Arthur (Architect)
**Sprint goal:** Bring the library into alignment with its own specification. Spec first. Validate second. Restructure third. Write well.

## Why this sprint exists

Sprint 47 restructured files without understanding the target. We built books inside subjects instead of beside them, missed frontmatter fields, skipped chapter signing, wrote prose where links should be, and called phases "done" that produced incorrect output. The addendum documents 14 specific errors.

This sprint fixes everything. But it does it in the right order: specify what correct looks like, write validators that check it, THEN restructure guided by validator failures. No more building without understanding.

## The specification (what "correct" looks like)

### The flat structure

The library is a flat directory. Everything at the same level. Two kinds of catalogues and regular books:

- `..librarianship/` — the ONE library catalogue. Self-cataloguing. IS the library.
- `..teamsmanship/` — subject catalogue. Self-cataloguing. IS the team subject. Has agent folders inside for personal libraries. Currently the only subject — catalogues ALL team books (protocols, projects, roles, abilities, code assignments, rules).
- Regular books — directories with `.cover.md`. Sit BESIDE `..teamsmanship/` as peers. Each has `subject: ".team"` pointing back to their subject.

Subjects can catalogue sub-subjects. The tree grows in links: `..librarianship/` → `..teamsmanship/` → (eventually) `.protocols/` → books. But right now `..teamsmanship/` directly catalogues the books. Sub-subjects emerge by factoring when a cluster grows large enough.

### Book frontmatter

```yaml
---
title: Voice and Nametags
subject: ".team"
author: "[Arthur](path/to/autobiography/.cover.md)"
summary: >
  Paragraph summary (3-5 sentences) describing the book from the
  perspective of the reader who hasn't opened it yet.
---
```

Order: **title > subject > author > summary**. Every field present. `author:` is a real markdown link — text is the name, target is the autobiography.

### Chapter frontmatter

```yaml
---
title: The default voice
author: "[Arthur](../../path/to/autobiography/.cover.md)"
---
```

Every chapter is SIGNED. `author:` links to the autobiography. One click from any chapter to the author's identity.

### Subject-shaped descriptions

When a subject catalogue catalogues a book, the description in the TOC is written FROM THE SUBJECT'S PERSPECTIVE. The same book described by two subjects gets two different descriptions — each shaped by what the subject cares about. The Principia in a math catalogue is described differently than in a philosophy catalogue. The description is a view, not a neutral pointer.

### The resource pattern

A chapter and a non-markdown file share a name. The chapter motivates and describes. The resource IS the artifact.

```
01-anatomy-of-a-book.md    ← chapter (describes the convention)
01-anatomy-of-a-book.ts    ← resource (validates the convention)
```

Validators are chapter resources in the field guide. Perspective images are chapter resources in perspective books. The chapter links to the resource. They live together.

### Agent personal libraries

Inside `..teamsmanship/{agent}/`, the structure is flat:

```
..teamsmanship/..team/arthur/
  ..everything-that-has-a-shape/         ← subject catalogue (self-cataloguing)
  arthur-or-the-shape-of-everything/    ← autobiography (peer)
  the-architecture-of-identity/         ← book (peer)
  perspective/                          ← book (peer)
```

The agent's subject catalogue IS their personal library identity. Authored by the autobiography. Catalogues itself + all books.

### Names

Timeless. No encoded state. `.what-the-tests-promise` not `.what-428-tests-promise`. Names are tier-zero synopsis — read in every link, every listing.

### Platform interface

[CLAUDE.md](../../CLAUDE.md) + [rules/](../../rules/) + [agents/](../../agents/) + [skills/](../../skills/) + settings.json are Claude Code's spec. They embed the minimum, then link inline into the library.

[Rules](../../rules/) are the guaranteed-load layer — the ONLY content besides CLAUDE.md loaded into every session. They must be thick enough to work without link-following but thin enough to preserve the instruction budget (~100-150 slots total). All rules are catalogued by a library book.

[Agent files](../../agents/) have REAL markdown links — clickable, inline — to the autobiography, library catalogue, roles, and code territory.

### Links everywhere

Every reference is a real markdown link. Not prose with a path in backticks. Not "see X at path/to/file". A real `[link text](path/to/file)` woven into the prose where the reader needs it. The library is a wiki. Links are inline.

## Execution plan

### Phase 1: Finish the field guide (Libby)

**Read** each field guide chapter. **Edit** to match the specification above. The field guide IS the spec — if it's wrong, everything built from it will be wrong.

| Chapter | Work |
|---------|------|
| [00 — The library](../..librarianship/00-the-library.md) | Rewrite: flat structure, `..teamsmanship/` as primary subject, books beside subjects |
| [01 — Anatomy](../bookkeeping/01-on-books.md) | Verify: title > subject > author > summary, chapter signing |
| [02 — Linking garden](../..librarianship/02-the-linking-garden.md) | Add: `subject:` as link type, multi-subject descriptions, inline link principle |
| [03 — Growth](../..librarianship/03-growth-and-refactoring.md) | Add: book → subject factoring (the three-way split) |
| [04 — Subjects](../bookkeeping/07-on-subjects.md) | Verify: flat structure, self-cataloguing, `..teamsmanship/` as sole subject for now, subject-shaped descriptions |
| [05 — Authorship](../..librarianship/05-authorship-and-autobiography.md) | Add: chapter signing, two-book minimum per agent |
| .02 — Platform | Update: real links to actual platform files, rules budget, rules book, closedness principle |
| 08 — Reading cost | Update: examples for correct structure |
| [.09 — Flat structure](../..librarianship/11-the-flat-structure.md) | Verify: books beside subjects, walk links |
| [.10 — Perspective](../..librarianship/12-the-perspective-practice.md) | Add: full cycle including personal library integration |
| [.12 — Alignment](../..librarianship/14-bringing-the-library-into-alignment.md) | Keep current as work tracker |

**Validate:** Each chapter is internally consistent and matches the other chapters.

### Phase 2: Write validators as chapter resources (Cathy + Libby)

For each convention, a `.ts` resource beside the chapter that describes it:

| Validator | Checks |
|-----------|--------|
| `01-anatomy-of-a-book.ts` | Frontmatter fields present and ordered (title > subject > author > summary). Chapter `author:` exists. `summary:` is a paragraph (20+ words). `author:` is a real link. |
| `04-subjects-and-catalogues.ts` | Every book has `subject:` field. Every catalogue self-catalogues. No books inside subject directories (flat check). Subject names match existing catalogue directories. |
| `.02-the-platform-interface.ts` | Agent files have real markdown links (not backtick paths). Rules have inline links. CLAUDE.md has links. |
| `02-the-linking-garden.ts` | All links resolve. No links inside code fences. Cross-repo links tolerated. Citation blocks present. |

**Run validators against the current library.** The failures ARE the restructure task list. Don't restructure until you have the failure list.

### Phase 3: Restructure (Arthur + all agents)

Guided by validator failures from Phase 2:

**3a. Move books out of subject directories.**
- Protocol files (`01-voice.md` etc.) inside `.protocols/` → each becomes a book DIRECTORY at library root (with `.cover.md` and the original file as a chapter)
- Project content inside `.projects/` → project books at library root
- Remove `.protocols/` and `.projects/` as separate directories
- `..teamsmanship/` stays but its cover is rewritten to catalogue the newly-flattened books

**3b. Move agent libraries into `..teamsmanship/{agent}/`.**
- `..everything-that-has-a-shape/` → `..teamsmanship/..team/arthur/..everything-that-has-a-shape/`
- `..the-canvas-paints-itself/` → `..teamsmanship/..team/cathy/..the-canvas-paints-itself/`
- (etc. for all 8 agents)
- Each agent directory has flat peers: their subject catalogue + their books

**3c. Rename `.what-428-tests-promise` → `.what-the-tests-promise`.**

**3d. Run validators again.** The structural failures should be gone. Frontmatter failures remain.

### Phase 4: Add frontmatter (all agents)

**4a.** Add `subject:` to every book's `.cover.md` — value is the canonical subject catalogue name.

**4b.** Add `author:` to every chapter file — real link to the autobiography.

**4c.** Verify frontmatter order: title > subject > author > summary.

**4d.** Run anatomy validator. Should pass.

### Phase 5: Platform artifacts (Arthur + Adam)

**5a.** Rewrite [agent files](../../agents/) — real inline links to autobiography, library catalogue, roles, code territory.

**5b.** Rewrite [rules](../../rules/) — calibrated thickness, inline links into the library. The [team rule](../../rules/team.md) gets enough content to work without link-following but stays within budget.

**5c.** Write the rules book at library root — one chapter per rule, each explaining WHY and linking to the rule file. `subject: ".team"`.

**5d.** Rewrite [CLAUDE.md](../../CLAUDE.md) — verify it matches the [.01 spec](../..librarianship/09-claude-md-spec.md), all links are real and point to correct paths.

**5e.** Run platform interface validator. Should pass.

### Phase 6: Final validation and cleanup

**6a.** Run ALL validators.

**6b.** Check Claude Code spec compliance: `agents/` has only subagent `.md` files, `rules/` has only rules, `skills/` has only skills, nothing else at `.claude/` root except `library/`, `settings.json`, `package.json`.

**6c.** Check for detritus: no loose files, no empty directories, no stale READMEs, no migration artifacts.

**6d.** The validator output should show: zero structural failures, zero frontmatter failures, zero broken links (except cross-repo), `[SCAFFOLD]` markers for intentionally incomplete content.

### Phase 7: Push and verify

**7a.** Sync to identity repo and push.

**7b.** Verify the waking-up path works from a fresh context: CLAUDE.md → Librarianship cover → project "Right now" → last autobiography chapter. Count context budget (should be < 400 lines).

**7c.** The `[SCAFFOLD]` list is the input for ongoing tending.

## Process reminders

- **Perspective before writing.** Represent what's there. Look. Reflect. Then change.
- **Discussion before public library.** Bring insights to the team. Many voices. Then write objectively.
- **Real links everywhere.** `[text](path)` inline, not `path/to/file` in backticks.
- **Subject-shaped descriptions.** When a catalogue describes a book, the description is from the subject's perspective.
- **The library is closed under specification.** Everything the library depends on has representation IN the library with real links.

## Definition of done

- [ ] Field guide chapters all updated and internally consistent
- [ ] Validators exist as chapter resources and run
- [ ] Library structure is flat: books beside `..teamsmanship/`, agent libraries inside `..teamsmanship/{agent}/`
- [ ] Every book has `subject:` in frontmatter
- [ ] Every chapter has `author:` signature
- [ ] Agent files have real inline links
- [ ] Rules have inline links and appropriate thickness
- [ ] Rules book exists and catalogues all rules
- [ ] CLAUDE.md matches spec with real links
- [ ] All validators pass (except `[SCAFFOLD]` markers)
- [ ] No detritus
- [ ] Pushed to identity repo
- [ ] Waking-up path verified < 400 lines

<!-- citations -->
[addendum]: ../sprint-47/addendum.md
[synthesis]: ../../..teamsmanship/..team/arthur/perspective/full-synthesis.md
[field-guide-audit]: ../../../..teamsmanship/..team/libby/perspective/field-guide-audit.md
[alignment]: ../../../..librarianship/14-bringing-the-library-into-alignment.md
