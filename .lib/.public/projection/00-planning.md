# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): temporary notes, overwritten when addressed. Laid down 2026-07-30 from Doug's total plan; each retro sweeps what its sprint absorbed.*

## The goal

IXP keeps very, very careful track of **authorship and lineage of knowledge**. Doug's AI conversations get mapped into a showable form; Doug gets a personal library referenced from here; `@dna-platform/lib` stays a consumable package so references work **across repos**. Every IXP project gets documented in $Chemistry, and those classes are copied into the `.public` app by a build script that either produces the whole truth or fails. Who deserves authorship of a human-AI dialogue is not a footnote — it is what the repository explores.

## The ladder

- **Sprint 46 — The Book.** `$Chapter` (composition of sections), `$Book` (composition of chapters, + title/subject/author per the design), `$Literature` (composition of books). Composition keeps bubbling up; refine it as it climbs. The dual-composition question is answered by the ladder's own precedent — one `parts` level, other levels as flattening readings (`$Section.sentences` is the proof) — verify it at book scale. **Example:** a real book on the shelf; the cover as canonical projection of the same live object.
- **Sprint 47 — The Catalogue.** `$Cataloguable` before `$Catalogue`: the role is holding one's own canonical synopsis, so an index/TOC **composes automatically** — a derived reading that cannot drift (this is the inferred-TOC design landing in code). Explore Doug's fusion: a catalogue is *a composition of writing whose canonical is a composition of references* — where composition-contains meets collection-references. **Example:** an index composing itself; edit a synopsis, watch the TOC re-derive.
- **Sprint 48 — Subjects and the Library.** Subject catalogues, the library catalogue, subject kinds (biography, autobiography); subject and library as compositions of books through readings. **Example:** a small library browsing itself — the Front Door seed (prototype #1).
- *Core estimate: three sprints, structured to compress to two if 46 lands without a correction cycle — history (the interface turn, the block door, the title contract) says plan for one.*
- **Sprint 49 — Dialogue and Provenance.** The conversation abstraction down from book: dialogue as *form* (Plato and the interview prove dialogue-as-nonfiction exists); non-fiction = provenance — every turn answerable to the cited transcript, the external literal, symbolization the only door. Authorship attribution designed **with Doug in the room** (ConversationBook sketch + sprint-43 rules on the table). Then Doug imports his conversations. **Example:** a conversation rendered as a book, provenance visible.
- **Sprint 50 — The Public Build.** The `.public` build script as a strict compiler (dirty ⇒ fail, never degrade); IXP's $Chemistry documentation classes copied into the app and made accessible; cross-repo references (present ⇒ resolve, absent ⇒ degrade to text); the repo-creation abstraction — a repo born a branch (lib dependency, `.lib`, projection with `.plan.md`, identity wired), grown from the `/branch` and `/identity` skills.

## Standing rules for every rung

Examples in the app every sprint — the demo shelf is the driven-and-seen rungs of the work. The sign-off loop governs each increment; spec tests with title-body correspondence; visible-proof Lab cases. The SRT source reading (both conversations, eleven prototypes, `..files`) proceeds alongside 46–48 and must be complete before the 49 design session.

## Open design questions (explored, not settled)

- Is `$Catalogue` a class or a role (`$Cataloguable`), the way composition became an interface?
- Where does the canonical-composition-of-references live — the catalogue's `canonical`, or a distinct `index` reading?
- Subject *references* its books (collection) while literature *contains* them (composition) — how the two doors share one `$Book`.
- What a human-AI dialogue's author field carries — one name, two, or a new relation. IXP's question, Doug's call.
- The personal-library reference: how `doug-library` (external repo) is cited from IXP so links resolve when present and degrade honestly when not.
