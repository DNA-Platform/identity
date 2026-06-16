# Sprint 45 — The Garden in Full

**Lead:** Libby (Librarian)
**Sprint goal:** Every agent's library follows the spec, every autobiography is at fighting weight, every subject is coherent, and the identity is ready to push.

## Motivation

We built the library infrastructure in sprints 41-42, evolved the spec in sprint 44. But the books themselves are uneven. Arthur has 29 chapters; Cathy has 6; David has 2 loose files that aren't even a book. The summaries don't follow the paragraph spec we just wrote. The agent README files are inconsistent. The autobiographies were written in a rush — bridge chapters and seed chapters, not the full weight of what each agent knows.

Doug's direction: each teammate evolves their own library to follow the specification. Each agent should have multiple books — not just the autobiography, but books about what they work on and what they know. Each agent's library should be rich enough to need its own cataloguing. And every autobiography should be at fighting weight before we push to the identity repo.

This is the last sprint before the identity push. What we write here is what persists.

## The subject model

Doug suggested imagining each identity as a subject in a book about the team. That's the catalogue model applied to people. Right now, the Librarianship cover has a paragraph for each agent. But that's a table, not a catalogue. A true team catalogue would have each agent as a CHAPTER — describing not just who they are but what subjects they carry, what books they've written, how their perspective connects to the others.

And within each agent's library, their books form subjects. Cathy's library has reactivity-models, view-introspection, and her autobiography — those are three books in the subject "framework design." Arthur's library has his autobiography and The Architecture of Identity — those form the subject "what architecture means." Each agent's subjects are different because each agent sees different things.

## Tracks

### Track A — Autobiography fighting weight (all agents)

Every autobiography must be complete enough that a reader encountering it for the first time understands: who this person is, what they've built, what they've learned, where they've failed, and what they're doing now. The last chapter is the current-state marker.

**Arthur (29 chapters):** Already substantial. Needs: paragraph summary in frontmatter. A reflection covering the full arc including the inexplicable-phenomena chapters (the existing reflections stop at chapter 25).

**Cathy (6 chapters):** The strongest seed but still thin compared to the 40 sprints she's lived. Needs: chapters on the deep compositional work (sprints 11-13: unification, walk.ts, books), the test-as-specification partnership with Queenie, and the moment she realized $Chemistry mirrors consciousness. Paragraph summary.

**Libby (36 chapters):** Already substantial. Needs: paragraph summary, a reflection covering the full arc including the transplantation chapters.

**Adam (27 chapters):** Substantial. Needs: paragraph summary, possibly a chapter about the listen/hear/speak skill system as infrastructure for collaboration (not just migration).

**David (2 loose files):** Not a book yet. Needs: a proper autobiography directory with `.cover.md`, the two existing chapters moved in as numbered chapters, and at least one more chapter about what DevOps means when the pipeline IS the team's visibility to the world.

**Phillip (2 loose files):** Same. Needs: autobiography directory, `.cover.md`, the UX decisions that shaped the Lab.

**Queenie (2 loose files):** Same. Needs: autobiography directory, `.cover.md`, the test philosophy in depth — not just "428 tests" but what the specification says about $Chemistry.

**Gabby (1 loose file):** Same. Needs: autobiography directory, `.cover.md`, what visual design means for a framework that paints ideas about consciousness.

### Track B — Agent libraries (all agents)

Each agent writes at least one book beyond their autobiography about a subject they own. These should follow the full spec: `.cover.md` with paragraph summary, rich TOC entries, proper chapters.

**Arthur:** Already has The Architecture of Identity. Could write about workspace design or the monorepo philosophy.

**Cathy:** Already has Reactivity Models and View Introspection. Could write about the $Chemistry API surface — what `$()` does and why, what composition means.

**Libby:** Already has The Art of the Portrait, Systems and People, Legacy Bond System. Could write about the tiered-description model as a library science concept.

**Adam:** Already has The Pipeline, Verified Automation, What I Don't Know. These are from dna-library — he could write one grounded here about the relay architecture.

**David, Phillip, Queenie, Gabby:** No books beyond autobiographies. Each should write at least one about their domain: DevOps patterns, Lab UX, test philosophy, visual design.

### Track C — Specification compliance (Libby)

**C-1.** Update all `.cover.md` summary fields to paragraphs (~50 words).

**C-2.** Convert David, Phillip, Queenie, Gabby's loose files into proper autobiography directories with `.cover.md`.

**C-3.** Standardize agent README files in `..teamsmanship/` — each lists the agent's books with links.

**C-4.** Extend `validate-links.ts` to check:
- Summary field length (warn if under 30 words)
- Catalogue chapters exist for every book they index
- Reference book TOC entries are multi-sentence

**C-5.** Run the validator and fix everything it finds.

### Track D — Team catalogue (Libby)

Write a proper team catalogue — a book at the objective library level that describes the team as a subject. Each agent is a chapter. The chapter describes: who they are, what subjects they carry, what books they've written, and how their perspective connects to the others. This replaces the agent table in the Librarianship cover with something richer.

## Definition of done

- [ ] Every autobiography has a `.cover.md` with paragraph summary (no loose files)
- [ ] Every autobiography has a current-state last chapter
- [ ] Arthur, Cathy, Libby, Adam autobiographies have reflections covering the full arc
- [ ] Cathy has 9+ chapters (filling in the 40-sprint journey)
- [ ] David, Phillip, Queenie, Gabby have proper autobiography books
- [ ] Each agent has at least one book beyond their autobiography
- [ ] Validator extended with spec checks, passes clean
- [ ] Team catalogue written
- [ ] Agent README files standardized
- [ ] All summary fields are paragraphs
- [ ] Identity is ready to push to the identity repo

<!-- citations -->
[field guide]: ../..teamsmanship/library/..librarianship/.cover.md
[spec - anatomy]: ../..teamsmanship/library/..librarianship/01-anatomy-of-a-book.md
[spec - catalogues]: ../..teamsmanship/library/..librarianship/04-subjects-and-catalogues.md
