# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as sprints absorb it — when a sprint becomes real, its section leaves this chapter for its own. Revision 2026-07-30, carrying Doug's notes: the cover as canonical chapter, chapters DI-style, book-as-folder, and the semantics of books governing our vocabulary.*

## The goal

IXP keeps very, very careful track of **authorship and lineage of knowledge**. Doug's AI conversations get mapped into a showable form; Doug gets a personal library referenced from here; `@dna-platform/lib` stays a consumable package so references work **across repos**. Every IXP project gets documented in $Chemistry, and those classes are copied into the `.public` app by a build script that either produces the whole truth or fails. Who deserves authorship of a human-AI dialogue is not a footnote — it is what the repository explores.

*Sprint 46 — The Book is **real** and left this scratchpad: see [its chapter](03-sprint-46--the-book.md). Its remaining notes ride there.*

*Sprint 47 — The Catalogue is **closed** (2026-08-03): see [its chapter](05-sprint-47--the-catalogue.md) — the reference system complete (read/ref, the catalogue equation, $Location/$Path, sameness of arrival) and integrated into the manifold (the atlas chapter, ribbons plural, the backwards arrow, the citation loop). Its retro rides at the chapter's end. What it opened folds into 48.5 below.*

## Sprint 48 — Subjects and the Library

**Ruled into this sprint (Doug, 2026-08-03):** the **environment of a book is a subject**, and it all goes up to the library — so environment referents are subject/library work: what a `$Link` reads to (a place in the world — another demo, a route, another document) and where it points from lands here, not in 47. `$Link` stays a plain anchor-rendering chemical until then.

**Goal.** Subject catalogues, the library catalogue, subject kinds — `$Biography`, `$Autobiography`, `$SubjectiveSubject` — and `$Library`, the self-cataloguing summit. Inherits from 48.5: grounding (shelving is the subject's viewing of its books), the `/books/:name` convention, names-as-ids, contents rows fully live. Subject and library as compositions of books through readings. Doug's picture to keep: a book cataloguing the team's biographies — a subject catalogue of subjects *that represents the team* — with the publisher link carrying the author's team (see 48.5). And the upward law: **things in the library point up** — book to canonical subject, as chapter now points to book.

**Execution.** Follow the derivation's structural chain (a biography's subject is a subjective subject; an autobiography's author-reference equals its subject-reference; the library's canonical is an autobiography — the summit files itself). The library as a held singleton instance (the `$Atom` candidate). Verify one-parts-many-readings at the top: `library.parts` = subjects, `library.books` = flattened.

**Risks.** (1) *The auto-categorical loop* — the library filed under its own subject is a genuine cycle; drive rendering and reference-resolution through it early, before content piles on. (2) *The dyad conjecture* (`$Catalogue : $Library` :: `$Subject : $Literature`) is recorded as conjecture — don't force the unification; let the code confirm or kill it. (3) *Class inflation* — every class must stay "forced, not chosen"; the sign-off is where names die.

**Demo.** *The Front Page seed.* A small library browsing itself — subjects to books to chapters, the library's own catalogue as its opening page — prototype #1 finally breathing, carried by the fallback-to-default navigation invariant.

**Core estimate: three sprints (46–48), built to compress to two** — if 46 lands without a correction cycle, 47 and 48 can merge. History (the interface turn, the block binding, the title contract) says plan for exactly one correction cycle somewhere in 46–47.

## Sprint 48.5 — References *(inserted the decimal way — Doug, 2026-07-30; the core LANDED inside Sprint 46)*

The pondering happened early and the core shipped inside [Sprint 46](03-sprint-46--the-book.md), under Doug's sentence law: a reference is a sentence that stands for something; the composition assigns references with the parts; the kinds (`$Link`, `$Name`, `$Bookmark`, `$Highlight`); resolution by `single` over the index; the grain rule. What remains, folded forward:

- **To Sprint 48 (subjects):** grounding — *a book does not shelve itself; shelving is a subject's viewing* — the `/books/:name` route convention, names-as-ids (titles as slugs), and contents rows going fully live (they already render held references and degrade to headings).
- **Landed in 47:** word-grain bookmark landing, as the rounding law — the page opens to the paragraph that holds the word (the finest fold a page can open to); the model reads the very word. And reference kinds with **their own views** — `$RibbonMark`/`$Return` in the manifold are subclass-plus-`view()`, zero framework change.
- **Still 48.5 matter, schedulable in any sprint:** **`$Citation` with Doug** (his call, 2026-08-02: *"I love it. Deserves to be in the framework and we can design it"* — his ingredients, 2026-08-03: no Markdown; a Bibliography somewhere holding entries that each expose a key linked to a path reference for that spot; `$Footnote` with overlapping structure; an inline declarer in the prose wearing the superscript, reformattable; built on the bookmark's resolve-fresh tech; capable of crossing documents); in-prose references *through the reader* (the openings typeset `copy` strings, so a reference written inside a paragraph flattens; the openings must render writing instances); the `$Link` stretch (the catalogue of a context's links; what following means when the router unmounts the context); the driftwood question (the `catalogue` member on referents — Doug: *"we'll see how this ends up working out"*); the imprint page (metadata as cover parentheticals; publisher → team); the frame-always-anchors vs degrade-to-text call (Doug's eye).

## Sprint 49 — Dialogue and Lineage

**Goal.** The conversation abstraction down from book: `$Dialogue` — turns, speakers, and **non-fiction as cited lineage**: a dialogue is non-fiction to the degree every turn is answerable to its cited transcript. The authorship-attribution model. The import format for Doug's conversations, and the first cross-repo reference to Doug's personal library.

**Execution.** *Precondition:* the SRT source reading (both conversations, the eleven prototypes, the `..files`) completes during 46–48, producing a design ledger. Then the design session with Doug **before any code** — on the table: the ConversationBook sketch, sprint 43's rules (the transcript is external and non-library; symbolization is the only bond constructor; no neutral floor), and the form question — Plato and the interview prove dialogue-as-nonfiction exists; the citation is what makes it so. Then the abstraction; then **one sample conversation imported end-to-end** before Doug bulk-imports.

**Risks.** (1) *Settling what should stay open* — who deserves authorship of a human-AI dialogue is the repository's exploration; model the author field as a **relation**, not a string, so the question stays askable in the data. (2) *Import-format churn* — the single-sample gate exists so format mistakes cost one conversation, not a corpus. (3) *Cross-repo resolution* — `doug-library` won't exist for every consumer; the degrade-to-text law goes into the classes from day one. (4) *Publication scope* — which conversations are public is Doug's per-item call; the format must carry that bit rather than assume it.

**Demo.** *A real conversation as a book.* The flagship: the 2026-07-18 *Semantics of Books* conversation itself, rendered — turns, speakers, the citation line to the transcript; anatomy showing turns-per-speaker; and if the design supports it, an **attribution lens** — the page showing who wrote what, which is IXP's thesis on screen.

## Sprint 50 — The Public Build

**Goal.** The `.public` build script as a strict compiler — **dirty ⇒ fail, never degrade**. IXP's $Chemistry documentation classes copied into the `.public` app and made accessible. `@dna-platform/lib` consumable across repos. The repo-creation abstraction: a repo *born* a branch (lib dependency, `.lib` seeded, projection with its chapter zero, identity wired).

**Execution.** Claude leads, David on deploy (the archive's `static.yml` is prior art for Pages). The build enumerates documentation classes, copies them into the app, catalogues them, builds — one script, one truth. Repo-creation grows out of the existing `/branch` and `/identity` skills, promoted from skill to specification with a script.

**Risks.** (1) *The strictness paradox* — a compiler that fails often gets bypassed, and hand-compiling around the build is exactly how the archive's `.public` died; failure messages must name the fix, or the law breeds the disease it prevents. (2) *Cross-repo versioning* — lib changes breaking consumers; decide semver-vs-pinning before the first external consumer, not after. (3) *Scope honesty* — "document all IXP projects" is a content program that outlives the sprint; 50 builds the machine, content accretes afterward.

**Demo.** *The build building the site.* Run the script; the `.public` app serves a documentation class rendered from the repo's own code. And the law made visible: introduce dirt, run it again, watch it **reject** the build — with a failure message good enough to act on.

## The demos deserve a subject catalogue *(Doug, 2026-07-31 — future sprint material)*

The demos are becoming a collection — The Page, The Books, and "we will have many." They want a **subject catalogue of demos**: each demo catalogued with its use case, its aesthetic identity, and what it proves, browsable the way subjects are. Likely lands with Sprint 47–48 (the catalogue/subject machinery demonstrating itself on the demos would be the self-referential proof). **The demo law, standing from today:** every demo must be *impressive and aesthetically unique* — range across demos, never a shared template look — and must carry *a meaningful use case*, grounded in a defensive reading of the sprints, the chemistry app, the sibling demos, and the documentation.

## Standing rules at every level

Speak within the **semantics of books** — the vocabulary of the domain is the vocabulary of the work. Examples in the app every sprint — the demo shelf is the driven-and-seen proof of the work. The sign-off loop governs each increment; model-first sentences before diffs; spec tests with title-body correspondence; visible-proof Lab cases; green → driven → seen on anything visible. The library is edit-first: chapters absorb, synopses move with them; projection covers stay current through the [TOC tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts).

## Open design questions (explored, not settled)

*Two were settled by Sprint 47 and absorbed: `$Catalogue` is an **interface** — a catalogue is a composition of references and a reference for its composition, realized per level by the `$$` classes and `$TableOfContents` — the same move composition made; and the bookmark's address is a **path of indexes** (the `at`-references compose, uniqueness lives in the read: a duplicated index reads nothing). What survives an edit to the book remains open below.*

- Where does the canonical-composition-of-references live — the catalogue's `canonical`, or a distinct `index` reading (the topical index at the back)?
- Subject *references* its books while literature *contains* them — how the two bond constructors share one `$Book`.
- What a human-AI dialogue's author field carries — one name, two, or a new relation. IXP's question, Doug's call.
- How the Lab loads a book-as-folder — imports, registration, and what the book file exports.
- The personal-library reference: how `doug-library` is cited from IXP so links resolve when present and degrade honestly when not.
- ~~What survives an edit to the book~~ — RULED (Doug, 2026-08-03): this is not an abstraction for editing books; books are published by the time they get to the library. Location references assume published text, and no reference survives editing in any trivial fashion. A bookmark is not a specified kept thing — it is placed in the book when you write, as an inline element.
- Which parentheticals on the cover are *metadata* (publisher, date — the imprint's content) versus *writing* (the cover's summary is its title) — and whether the imprint page derives from a metadata reading the way the table of contents derives from chapters.
