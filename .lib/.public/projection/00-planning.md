# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as sprints absorb it. This revision (2026-07-30) is the full proposal Doug asked for — breakdown, execution notes, risks, demos — for him to compress or expand.*

## The goal

IXP keeps very, very careful track of **authorship and lineage of knowledge**. Doug's AI conversations get mapped into a showable form; Doug gets a personal library referenced from here; `@dna-platform/lib` stays a consumable package so references work **across repos**. Every IXP project gets documented in $Chemistry, and those classes are copied into the `.public` app by a build script that either produces the whole truth or fails. Who deserves authorship of a human-AI dialogue is not a footnote — it is what the repository explores.

## Sprint 46 — The Book

**Goal.** `$Chapter` (composition of sections), `$Book` (composition of chapters, carrying title / subject-reference / author-reference per the design), `$Literature` (composition of books). Composition keeps bubbling up; refine it at each rung.

**Execution.** Model-first sentence per class, signed before code. The dual-composition question is already answered by the ladder's precedent — one `parts` level, every other level a *flattening reading* (`$Section.sentences` is the built proof); verify it at book scale (`book.parts` = chapters, `book.sections`/`book.paragraphs` derived). Above `$Section` the mode is authored parts, not parsed prose — chapters are block-level children arriving as typed bond-constructor arguments. Keep the reference family *stub-thin*: `subject`/`author` store indirect targets; `lookup()` navigation stays deferred.

**Risks.** (1) *Block-level child mechanics*: the grouping machinery only groups inline runs — how sections arrive at `$Chapter`'s door (typed spread) is assumed, not yet driven; prove it with a mechanism test in the first increment. (2) *Canonical echo at book scale*: the Cover as "the book presented as its title-only chapter" may force the same subtype-or-convert fork the Section title did — flag it for a sign-off, don't guess. (3) *Reference scope creep* — the moment `$Author` wants a real target, stop; that's sprint 49's material.

**Demo.** *A real book on the shelf.* A multi-chapter book rendered whole; a **cover lens** — the same live object through its canonical projection; anatomy extended to book scale (chapters / sections / paragraphs / words). Strongest content choice: a real text — an excerpt of one of the archive's articles, or this branch's own design book rendered as a `$Book`.

## Sprint 47 — The Catalogue

**Goal.** `$Cataloguable` before `$Catalogue`: the role is *holding one's own canonical synopsis*, so an index / table of contents **composes automatically** — a derived reading that cannot drift (the inferred-TOC design landing in code). Explore Doug's fusion: a catalogue is *a composition of writing whose canonical is a composition of references* — where composition-contains meets collection-references.

**Execution.** Role first, container second — building the container first invites hand-made indexes, which is the drift disease reborn. Mid-sprint design session with Doug on the fusion sentence before `$Catalogue` is coded (is it a class, or a role the way composition became an interface?). The index renders before it navigates: entries degrade to text until `lookup()` is real. Honor the edit-first law: the register row changes the day the decision does.

**Risks.** (1) *The fusion is a hypothesis* — Doug said "I think, right? We have to explore this"; the biggest risk is building the ontology before the exploration; the design session is the gate. (2) *Synopsis provenance*: cataloguable means holding one's **own** synopsis — define now what an absent synopsis does to the index (degrade visibly, never invent). (3) *Two doors, one book*: literature *contains* books, a subject *references* them — the shared `$Book` must serve both without either door warping it.

**Demo.** *The index that composes itself.* A catalogue over the demo books; edit a member's synopsis in the live editor and watch the index re-derive — anatomy's sibling. A lens pair showing the two total views: **index** (canonicals) beside **contents** (flattening) of the same object.

## Sprint 48 — Subjects and the Library

**Goal.** Subject catalogues, the library catalogue, subject kinds — `$Biography`, `$Autobiography`, `$SubjectiveSubject` — and `$Library`, the self-cataloguing summit. Subject and library as compositions of books through readings.

**Execution.** Follow the derivation's structural chain (a biography's subject is a subjective subject; an autobiography's author-reference equals its subject-reference; the library's canonical is an autobiography — the summit files itself). The library as a held singleton instance (the `$Atom` candidate). Verify one-parts-many-readings at the top: `library.parts` = subjects, `library.books` = flattened.

**Risks.** (1) *The auto-categorical loop* — the library filed under its own subject is a genuine cycle; drive rendering and reference-resolution through it early, before content piles on. (2) *The dyad conjecture* (`$Catalogue : $Library` :: `$Subject : $Literature`) is recorded as conjecture — don't force the unification; let the code confirm or kill it. (3) *Class inflation* — every class must stay "forced, not chosen"; the sign-off is where names die.

**Demo.** *The Front Door seed.* A small library browsing itself — subjects to books to chapters, the library's own catalogue as its opening page — prototype #1 finally breathing, carried by the fallback-to-default navigation invariant.

**Core estimate: three sprints (46–48), built to compress to two** — if 46 lands without a correction cycle, 47 and 48 can merge. History (the interface turn, the block door, the title contract) says plan for exactly one correction cycle somewhere in 46–47.

## Sprint 49 — Dialogue and Provenance

**Goal.** The conversation abstraction down from book: `$Dialogue` — turns, speakers, and **non-fiction as provenance**. The authorship-attribution model. The import format for Doug's conversations, and the first cross-repo reference to Doug's personal library.

**Execution.** *Precondition:* the SRT source reading (both conversations, the eleven prototypes, the `..files`) completes during 46–48, producing a design ledger. Then the design session with Doug **before any code** — on the table: the ConversationBook sketch, sprint 43's rules (the transcript is external and non-library; symbolization is the only door; no neutral floor), and the form question — Plato and the interview prove dialogue-as-nonfiction exists; what makes it non-fiction is that *every turn is answerable to the cited transcript*. Then the abstraction; then **one sample conversation imported end-to-end** before Doug bulk-imports.

**Risks.** (1) *Settling what should stay open* — who deserves authorship of a human-AI dialogue is the repository's exploration; model the author field as a **relation**, not a string, so the question stays askable in the data. (2) *Import-format churn* — the single-sample gate exists so format mistakes cost one conversation, not a corpus. (3) *Cross-repo resolution* — `doug-library` won't exist for every consumer; the degrade-to-text law goes into the classes from day one. (4) *Publication scope* — which conversations are public is Doug's per-item call; the format must carry that bit rather than assume it.

**Demo.** *A real conversation as a book.* The flagship: the 2026-07-18 *Semantics of Books* conversation itself, rendered — turns, speakers, a provenance line to the transcript; anatomy showing turns-per-speaker; and if the design supports it, an **attribution lens** — the page showing who wrote what, which is IXP's thesis on screen.

## Sprint 50 — The Public Build

**Goal.** The `.public` build script as a strict compiler — **dirty ⇒ fail, never degrade**. IXP's $Chemistry documentation classes copied into the `.public` app and made accessible. `@dna-platform/lib` consumable across repos. The repo-creation abstraction: a repo *born* a branch (lib dependency, `.lib` seeded, projection with its chapter zero, identity wired).

**Execution.** Claude leads, David on deploy (the archive's `static.yml` is prior art for Pages). The build enumerates documentation classes, copies them into the app, catalogues them, builds — one script, one truth. Repo-creation grows out of the existing `/branch` and `/identity` skills, promoted from skill to specification with a script.

**Risks.** (1) *The strictness paradox* — a compiler that fails often gets bypassed, and hand-compiling around the build is exactly how the archive's `.public` died; failure messages must name the fix, or the law breeds the disease it prevents. (2) *Cross-repo versioning* — lib changes breaking consumers; decide semver-vs-pinning before the first external consumer, not after. (3) *Scope honesty* — "document all IXP projects" is a content program that outlives the sprint; 50 builds the machine, content accretes afterward.

**Demo.** *The build building the site.* Run the script; the `.public` app serves a documentation class rendered from the repo's own code. And the law made visible: introduce dirt, run it again, watch it **refuse** — with a failure message good enough to act on.

## Standing rules on every rung

Examples in the app every sprint — the demo shelf is the driven-and-seen rungs of the work. The sign-off loop governs each increment; model-first sentences before diffs; spec tests with title-body correspondence; visible-proof Lab cases; green → driven → seen on anything visible. The library is edit-first: chapters absorb, synopses move with them.

## Open design questions (explored, not settled)

- Is `$Catalogue` a class or a role (`$Cataloguable`), the way composition became an interface?
- Where does the canonical-composition-of-references live — the catalogue's `canonical`, or a distinct `index` reading?
- Subject *references* its books while literature *contains* them — how the two doors share one `$Book`.
- What a human-AI dialogue's author field carries — one name, two, or a new relation. IXP's question, Doug's call.
- The cover at book scale: subtype (a cover is a kind of chapter) or conversion-and-exposure, the Section-title fork revisited one level up.
- The personal-library reference: how `doug-library` is cited from IXP so links resolve when present and degrade honestly when not.
