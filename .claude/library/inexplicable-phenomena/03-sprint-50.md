# Sprint 50 — Fix and Formalize

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Fix the broken links. Formalize the validators. Build the compilers. Establish the three pillars. In that order.

## Phase 1: Measure the damage (Queenie + Adam)

Run ALL validators against the FULL library. Report the numbers. This is the truth about how healthy the library is.

1. Run [anatomy validator](../bookkeeping/bookkeeping.ts) against `library/` — counts: errors, warnings
2. Run [subjects validator](../subjects-and-catalogues/subjects-and-catalogues.ts) against `library/` — counts: errors, warnings
3. Run [link validator](../.tooling/scripts/validate-links.ts) against `library/` — counts: broken, warnings
4. Report the total: X anatomy errors, Y subject errors, Z broken links

These numbers are the baseline. Every fix gets measured against them.

## Phase 2: Fix broken links (Adam + Libby)

Write a comprehensive link-fixing script for the current structure. The paths changed when:
- Agent libraries moved into `..teamsmanship/..team/{agent}/`
- Protocol chapters became the `protocols/` book
- Field guide chapters graduated to standalone books
- `.protocols/` and `.projects/` were removed
- Agent library catalogues got `..` prefix

Map every old path pattern to its new equivalent. Run the script. Run the link validator. Repeat until the broken link count is zero (except cross-repo and `[SCAFFOLD]`).

Every fix is validated. Don't fix by hand and hope. Fix, validate, count.

## Phase 3: Fix anatomy errors (Libby)

The anatomy validator catches: missing `subject:`, missing `author:`, unsigned chapters, `summary:` in frontmatter, missing `catalogues:`. Fix each category:

1. Convert remaining bare-string `subject:` fields to proper markdown links
2. Sign unsigned chapters with `author:` links
3. Remove `summary:` from any frontmatter that still has it
4. Add `catalogues:` to any `.` or `..` directory missing it
5. Run anatomy validator. Target: zero errors outside `.chemistry/` `[SCAFFOLD]`

## Phase 4: Write the `..team/` validator extension (Cathy)

The `..team/` folder inside `..teamsmanship/` needs its own validator. Write it as a chapter resource: `..teamsmanship/01-what-a-teammate-is.ts` (paired with the identity chapter).

The validator checks:
- `..team/` contains only agent folders (no loose files)
- Every agent catalogued in [ch 18](../..teamsmanship/18-gabby.md) has a folder in `..team/`
- Every folder in `..team/` is catalogued in the book
- Each agent folder has a `..` prefixed library catalogue with a `.cover.md`

The extension pattern: Librarianship's anatomy validator discovers and runs book-specific validators when they exist as chapter resources. Document this in the [platform interface book](../the-platform-interface/.cover.md).

## Phase 5: Build remaining compilers (Cathy + Arthur)

The [agent compiler](../..teamsmanship/06-the-agents-folder.ts) works. Write the rest:

1. **Territory rules compiler** — reads [Teamsmanship ch 05](../..teamsmanship/05-code-territory.md), generates `.claude/rules/{territory}.md` files with path scopes and links to the relevant teammate's library. Chapter resource: `..teamsmanship/05-code-territory.ts`

2. **CLAUDE.md compiler** — reads [Librarianship ch 09](../..librarianship/09-claude-md-spec.md), generates `CLAUDE.md` at the project root with links into the library. Chapter resource: `..librarianship/09-claude-md-spec.ts`

3. **Skills compiler** — reads the [skills book](../skills-and-commands/.cover.md), generates `.claude/skills/*/SKILL.md` files. Chapter resource: `skills-and-commands/00-compiler.ts`

Document the compilation architecture in the [platform interface book](../the-platform-interface/.cover.md): the library is the source, platform files are build output, compilers are chapter resources.

## Phase 6: The three pillars (Arthur + Libby)

### Libby in Librarianship

Add my [personal library](../..teamsmanship/..team/libby/..the-garden-tends-itself/.cover.md) directly to [Librarianship's](../..librarianship/.cover.md) catalogue. Write a chapter in Librarianship about the librarian's role — what it means that the library has a librarian, that the librarian IS the library's identity.

### Arthur in Teamsmanship

Review [Teamsmanship](../..teamsmanship/.cover.md). Become co-author or primary author on relevant chapters. Add my [personal library](../..teamsmanship/..team/arthur/..everything-that-has-a-shape/.cover.md) directly to the catalogue. Write a chapter about leading through representation, not management.

### The third pillar (design only)

Design the third `..` catalogue — the system subject. Name it. Define what it catalogues. This is a design discussion, not an implementation. Implementation is sprint 51. The team discusses:
- What subject does it represent? (The System? The Substrate? Cognition?)
- What does Claude as a teammate mean?
- What books belong to this subject? (compilers, platform spec, cognitive architecture)

## Definition of done

- [ ] Validators run clean: zero anatomy errors (outside `.chemistry/`), zero subject errors, zero broken links (outside cross-repo/scaffold)
- [ ] `..team/` validator extension written and passing
- [ ] Territory rules compiler generates path-scoped rules
- [ ] CLAUDE.md compiler generates from spec
- [ ] Skills compiler generates SKILL.md files
- [ ] Compilation architecture documented in platform interface book
- [ ] Libby's library catalogued by Librarianship
- [ ] Arthur's library catalogued by Teamsmanship
- [ ] Third pillar designed (name, subject, scope)
- [ ] All changes pushed to identity repo

<!-- citations -->
[anatomy-validator]: ../bookkeeping/bookkeeping.ts
[subjects-validator]: ../subjects-and-catalogues/subjects-and-catalogues.ts
[link-validator]: ../.tooling/scripts/validate-links.ts
[agent-compiler]: ../..teamsmanship/06-the-agents-folder.ts
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[platform]: ../the-platform-interface/.cover.md
