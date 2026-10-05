# Sprint 99: The Link Aggregator

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **CLOSED 2026-10-05 — planned, built, verified, committed and pushed in one day.** The requirements are Doug's sentences; the plan under them was the team's and is kept here as a register, compacted at the close from 3,601 words. [Where things stand](#where-things-stand) is the handoff, and it opens with the next command.
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow) — the brainstorm was held in the room that day.
- ***The title is his phrase for what a table of contents becomes; a PROXY for the sprint.***

---

## Where this sprint comes from

**The brainstorm on building his library reached the table of contents before it reached anything else.** A first architecture sketch asked how one book's page could know about other books. He answered: *"what a book knows about other books better be in the Binder,"* and then said what a catalogue's table is for — *"it gives a use to the table, as a link aggregator. Yes it can present them, but it could also expose them to be consumed by the rest of the system."* The whole of that is written in [How a Library Is Designed](../writing-a-book/01-01-how-a-library-is-designed.md#the-link-aggregator).

**This sprint was the Binder's part of it and nothing more:** which links a table of contents must hold, checked from the notation. What a view does with those links, and the table exposing them at runtime, are later sprints. **Its close found two things it had not planned for**, and they are [below](#the-close).

## Requirements — his words

*Each is his sentence of 2026-10-05. All six hold; how each was proved is under [Where things stand](#where-things-stand).*

- <a id="r1"></a>**R1 — a table refers to every chapter of its book, itself among them.** *"The table needs to refer to all chapters including itself. Might as well be there, though frequently it will be placed in some interesting place."*
- <a id="r2"></a>**R2 — a table refers to every book of its subject.** *"And it should refer to all books."* It held already, as `NOT-LISTED` and `NOT-IN-THE-TABLE`; the sprint kept it and gave it promises.
- <a id="r3"></a>**R3 — the synopsis rule goes.** *"The synopsis rule can go if the chapter rule is there right because the synopsis will have to be there?"* It will: every book holds a synopsis, and under R1 its own table refers to it.
- <a id="r4"></a>**R4 — only the templating language validates, and everything stays replaceable.** *"I am worried that you might be looking for components. We need everything to be replaceable. Only the templating language can be used to validate."* And: *"We can't have the binder validate TSX. It uses its templating language to validate, and the writer can use that anywhere."*
- <a id="r5"></a>**R5 — both libraries are changed as little as the rules require.** *"I want the test library and my library minimally updated to support this validation."*
- <a id="r6"></a>**R6 — the test of the sprint.** *"The test is that this is well integrated into the test library and my library, and that it is a first class feature in the tests of the binder."*

*And the standing wish this serves:* **"I do want strong support in the binder on the subjectivity of a library."**

## <a id="today"></a>What the Binder did before the sprint

*A table of what the Binder held on the morning of 2026-10-05 stood here.* **It is spent: the code changed that afternoon, and what the Binder holds now is said where it is kept true** — the rules in [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#wellformed) and [The Language](../the-catalogue-and-the-specification/06-the-language.md#faults), and everything it holds for the subjectivity of a library in [A Library, Necessarily and Sufficiently](../the-catalogue-and-the-specification/09-a-library-necessarily-and-sufficiently.md#every-case). *One finding from that reading is worth keeping: the Binder reads writing and never a component. It uses the TypeScript parser only to find where prose and strings stand, and one pattern for the notation over those runs; no rule sees a tag's name, a prop or an import.*

## Decisions

- <a id="d1"></a>**D1 — the chapter rule is the one that was struck, restored under its own name.** It was removed in [Sprint 84](90-sprint-84--means-and-the-table.md) because a table could be drawn from what its chapters mention. His reason for bringing it back is new: the table is the one validated place of links that the rest of the system consumes, and the Binder can only count what is written in the notation. *Chosen over leaving it to the runtime's `contents`, which the Binder cannot see. Recorded with both reasons so a later reader does not strike it again for the first.*
- <a id="d2"></a>**D2 — "every chapter" means every titled file of the book but its cover.** The synopsis and the table itself are chapters and are counted. The cover is not: its title names the book. A place named `[[[ so ]]]` is not a chapter and is not counted. *Every table in both libraries also refers to its own book; the rule does not ask for it, and it is his to add.*
- <a id="d3"></a>**D3 — the table's file is where the links are counted.** A reference to a chapter written in some other chapter's prose does not satisfy the rule, as an answer written outside the table does not satisfy `NOT-IN-THE-TABLE`. Inside the file the writer may put a link in any element, shown or unshown.
- <a id="d4"></a>**D4 — the synopsis rule goes whole.** Both of its cases, with what the structure recorded only for it. *Chosen over a rule that would accept a chapter of the catalogue named for the book — withdrawn on his word: "I don't know how we'd validate that books have chapters."*
- <a id="d5"></a>**D5 — the rule for books is not touched.** No new fault, no renamed one, no promise reworded.
- <a id="d6"></a>**D6 — what needs Doug's yes is the change to `.public`, never the commit.** *"I take changes to .public very very seriously."* A change to the framework or the Binder that he has not asked for is shown to him before it is made. **As planned, this decision also held every diff uncommitted until he had seen it and pushed nothing; he reversed that half the same day** — *"Stop making commits this sacred thing. Commit often… You are in charge of the code. Commit to Github when we complete something please."* It is [rule 11 of the handoff](../../../../.claude/library/our-skillset/32-ce-handoff.md#11-the-work-is-made-official-before-it-is-handed-off) now.
- <a id="d7"></a>**D7 — the libraries change by one table each, and by the sentences that describe the rules.** The test library's other tables keep their references into synopses, which are still good references. Its catalogues do not take the square in this sprint.

## Units — the register

*The plan stood here at working weight: what each unit runs and when, its files, what it waited on, what would be seen, and its scenarios. All five are built; each scenario that survived is a promise, and a promise is read where it runs.*

- <a id="u1"></a>**U1 — the Binder refuses a table that leaves out a chapter of its own book.** `CHAPTER-NOT-LISTED`, one loop in [`catalogue/wellformed.ts`](../../package/.binding/catalogue/wellformed.ts) over what the structure already recorded of each table; the fault stands on the table's file, names the chapter and writes out the reference owed. *Its promises are the group "a table of contents, the link aggregator" in [`wellformed.test.ts`](../../package/.binding/catalogue/wellformed.test.ts).*
- <a id="u2"></a>**U2 — the synopsis rule leaves the Binder.** Both checks, their helper, the fault's name and the one field [`structure.ts`](../../package/.binding/catalogue/structure.ts) kept for it. The faults still number twenty-four. *The regression's stage broken on purpose is aimed at the chapter rule, in [`binding.regression.ts`](../../package/.binding/.test/binding.regression.ts).*
- <a id="u3"></a>**U3 — the test library's one drawn table writes its links.** [Some Projects' table](../../package/.binding/.test/projects/.table.tsx) writes its four links unshown inside the section that draws its entries.
- <a id="u4"></a>**U4 — his catalogue's table drops what it carried only for the synopsis rule.** Three unshown references left `.me/..reference/.table.tsx`; the face's copy of the Binder was brought up from the master.
- <a id="u5"></a>**U5 — the records say what the code now does.** The Binder, As Built; A Library, Necessarily and Sufficiently; The Language; Cover, Synopsis and TableOfContents; What a Library Is; How to Be a Librarian; How a Library Is Designed.

*The order of the units stood here; the sprint ran it.* *The plan's check of itself against the six requirements stood here; it passed before the work began.* *The risks stood here. One fired in a form nobody listed: the performance suite was to be run to see the rule hold over many books, and it could not start — [below](#the-close). The risk that a change to `.public` would land unseen had already fired before the plan was written, and is the first wrong turn under Where things stand.*

## <a id="the-close"></a>What the close found, beyond the plan

**The Binder's performance suite had been red for six days.** Both of its files named the test library's catalogue folder `the-library`, which [Sprint 93](98-sprint-93--the-explorer.md) renamed `library` the day after the suite was last mended; no gate runs it, and five sprints closed over it. Doug: *"Wait the binder has a red performance suite? This is the time to fix it… Binder performance is critical."* It is no benchmark and failed on no number. It was mended with one word in two files and a count, and running it is a step of [the order of work](../writing-a-book/07-the-development-policies.md#order) now. The account is [The Project Nobody Ran](../solutions/97-the-project-nobody-ran.md), and the numbers are in [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#measured).

**And the library was being developed the slow way, for the third time.** The session bound his library about twenty times to look at it and wrote a probe for each look. Asked whether an edit still appeared on an open page, it did not know. Doug: *"So you don't use hot reload, don't know if it works, people forgot it was a feature? … We lost an important part of this design."* It works, and faster than when last timed: a saved sentence on the open page in a quarter of a second. What was lost was the practice, twice before, by where its tool and its documents were kept. **The protocol, the measurements, the history and the doors that now say it are one chapter: [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md).** The tool is the workbench, in his manual.

## Where things stand

**Next: `/ce-brainstorm`, to resume building Doug's library.** *This session expected the subject to be how each of the seven chosen designs is built, and the tools for every kind of book and view; the subject is his to set in the room.* **Before the first edit of any page, open the workbench** — the four steps of [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md#the-protocol).

**His intent, in his words:** *"…so we can get back to building my library."* And for how: *"We need future sessions to know, beyond a doubt, how to develop when building a library."*

**Complete, all of it.**

- **A table of contents is held to its links.** It must refer to every chapter of its book, itself among them, and to every book filed under it, or the bind refuses by name. The rule that a catalogue's row stand beside a synopsis reference is gone. Both libraries are written to it (U1 to U5).
- **The performance suite is green and is a step.** Two of two.
- **How a library is developed is measured, tooled and written at every door** a session comes in by: memory, the order of work, `/ce-work`, `/ce-handoff`, his manual, the Binder's design record.
- **It is official.** The project's `main` is on GitHub at `aa6e151` — the sprint at `3422682`, the suite at `aa6e151`. The team's identity, this branch library and his library were synced with the commit tool at the close; the workbench was closed.

**His rulings of the day, verbatim.**

- *On a table:* **"The table needs to refer to all chapters including itself… And it should refer to all books. The synopsis rule can go if the chapter rule is there."**
- *On what may validate:* **"We can't have the binder validate TSX. It uses its templating language to validate, and the writer can use that anywhere."** · **"We need everything to be replaceable."**
- *On `.public`:* **"I take changes to .public very very seriously. Make this a pattern implemented in the library itself."**
- *On commits:* **"Stop making commits this sacred thing. Commit often."** · **"You are in charge of the code. Commit to Github when we complete something please."** · **"Before handing things off, make the work done the official work."**
- *On performance:* **"Binder performance is critical."**
- *On developing:* **"When doing UI work you need rapid feedback right? If the system doesn't give that to you, the system is a failure."** · **"I don't care about the dev server or any particular thing. You can work as you like. But you need to use an efficient workflow, and we need to document how to develop a library."**

**Verified, on the final state.**

- The Binder's typecheck: 0 errors. Its unit suite: **148 of 148**, twelve of them the table's own. Its regression in Chrome: **47 of 47**, with two galleys broken on purpose, one missing a chapter's link and one a book's, each refused by name. Its performance suite: **2 of 2** — validating 206 books, structure 494ms cold and 37ms warm, the rules 6ms; a bind of 26 books in 17.1s.
- His library binds with **48 keys**, every reference resolving and five pages proved. It refused a chapter's link taken out of his manual's table and the table's own link taken out of his story's, each by name.
- The live loop, in Chrome on his library: a sentence on the open page in 0.19–0.24s, a theme's declaration in 0.24–0.68s, the compiler's refusal in 0.11s, nothing reloaded; a look through the workbench in 0.3–0.4s.
- The built site, loaded fresh after the close's one bind: the manual's new chapter and its links in both directions, no errors, nothing past the right edge on a phone for the manual and the catalogue.

**Not verified, and said plainly.** No suite starts the dev server, so the live loop is guarded only by being used. Whether the framework's `src` or `.pubconfig` reach an open page was not measured today. The design book and the story were looked at on a desk only after the last changes.

**Owed to Doug's eye — words in his voice he has not read.** His story's four chapters. In his manual: The Date, The Shelfmark, **Developing a Library**, and one sentence each in Initializing a Library on the table's rule and on the bind. One paragraph in The Shelves, one in The Camera, and the story sentences in his design book. **Stand-in names, his to give:** *Shelfmark*, *the workbench*, every chapter title.

**Open, and his.**

- Whether "every chapter" should count the cover, and whether a link outside the table's file should count ([D2](#d2), [D3](#d3)).
- The table exposing its links at runtime, a change under `src`. The test library taking the square.
- Five pitches about the live loop, each in [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md#open): a promise that holds it, the rules on every save, the workbench in the Binder, a pinned port, `src` without a build.
- From before: the recency view of his story; controls for references at different visibility; questions E and F; his colours; which unchosen concepts go; the cream theme.

**Wrong turns, kept so they are not retried.**

1. **The Binder was edited before he had seen the change**, on the strength of an option picked in a question. Reverted unlanded; [D6](#d6).
2. **A finished, verified diff was held uncommitted to ask whether to commit**, and he was told pushing was his. It is not; [D6](#d6).
3. **A bind was run for every look.** [The protocol](../writing-a-book/01-02-how-a-library-is-developed.md#the-protocol).
4. **A tool kept where a new face replaces it.** The kept-open browser of 2026-09-20 stood in a face's copy of the Binder and was lost with the face. A tool that builds a library stands in a book of that library.

**To see it.** The built site: `http://localhost:4242/dougs-library/`, three names each with its square, and `http://localhost:4242/dougs-reference-manual/#developing-a-library`. To work on it: `node .me/.manual/6-developing-a-library~workbench.mjs`, then the same file with `look dougs-library`. To see a rule fire, take one entry out of any `.table.tsx` in `.me` with the workbench open and look: the refusal is on the page in a tenth of a second.

**To read first, for a brainstorm.** *A start and not a boundary.*

1. **His story**, `.me/.librarian/`, four dated chapters: what the library is for, what was chosen, how it is built and how it is written.
2. **`.me/.design/1-the-designs-i-am-going-with.tsx`**: the seven designs the build is of.
3. **[How a Library Is Designed](../writing-a-book/01-01-how-a-library-is-designed.md)**: which thing in the library each element of a design is, views as ranks, and what the Binder knows.
4. **[How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md)**: before any edit.
5. **His manual**, `.me/.manual/`: the door, the theme, and the parts built so far, each beside its chapter.
