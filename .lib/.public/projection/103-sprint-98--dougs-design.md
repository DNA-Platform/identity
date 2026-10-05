# Sprint 98: Dougs Design

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Claude](../../../../.claude/library/..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **state:** **CLOSED AND COMPOUNDED, 2026-10-05** — a design chosen for each of the seven books of his library, each from numbered concepts in his design book and each in his words; nothing of a design built into the library yet, which is the next sprint's.
- **workflow:** [the prototype workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-prototype-workflow) — sketch, discuss, iterate, then the feature workflow. *Its second run; [what the run added](../../../../.claude/library/..teamsmanship/19-workflows.md#what-the-second-run-added--out-of-sprint-98) is recorded there.*
- ***The title is the name of his book; a PROXY for the sprint.***

---

## Where this sprint comes from

**His library starts over, and the first thing it needs is a design he chose.** On 2026-10-02, on his word — *"making the current folder a ..me folder and clearing .me. You can push the cleared version, giving us a fresh branch in git. Then we can develop the design process"* — the library written in the first `.public` was set aside, `.me` was emptied and `dougs-library` pushed cleared at `d6dd6cd`. It was initialized on his layout and his names: `..reference` *Dougs Library*, About The Library; `.librarian` *Dougs Story*, the autobiography, About The Librarian; `.design` *Dougs Design*, *"the book that will contain the design of the library"*; `.manual` *Dougs Reference Manual*. Two of his rulings were built in the binder for it, `e39b0be`: a cover's About is the name of the subject its book represents, and the library's own catalogue is required ([What a Library Is](../writing-a-book/01-what-a-library-is.md)). *The old library stands at `.archive/..me` since 2026-10-05, on his word, and whole on the `dougs-library` branch at `4911c8b`.*

## <a id="r36"></a>The seven books, and what is chosen for each

*He named what needs a design — "I can imagine a small or a unique design that I would like for each of these based on what you have created so far" — and was asked one question a book, each drawn in the design book with its nearest numbered concepts. His answers stand whole under their questions there. The numbers are the concepts' own, in the chapter Every Concept.*

| | the book | what he chose | his words | still open |
|---|---|---|---|---|
| **R36** | the library's catalogue | the shelf of 1 under the black and sky of 19, its view switching among 1, 2 and 3 | *"I like the black and sky, though I think I want to be able to switch the view between 1-3 as part of the dynamism of the page… Many ways to view the same thing will be important."* | how a book is built to carry many views — his to lead: *"We will talk about how to implement a book, and you will find that you might want to do more structurally than you expect."* |
| <a id="r37"></a>**R37** | the reference manual | 6, with 8 for a part, and a toggle between code forward and words forward | *"Code doesn't look right unless in full view, so we might want a view where we show one write-up on the right side of the code and another that moves the code off to the right, but it's mostly there to give the visual sense that it can be expanded out again."* | the two states, drawn |
| <a id="r38"></a>**R38** | the design book | light and airy, with a toggle between a library mode and a gallery mode | *"if the dark sidebar is the thing that makes the library memorable, then maybe we have a toggle between library and gallery mode, and gallery mode is more white themed with subtle variation, and library mode is more dark themed."* | the gallery mode, drawn; whether the two modes are the whole library's |
| <a id="r39"></a>**R39** | his autobiography | 25, the reading view of the algebra of perspective from the original demo | *"there was something called the algebra of perspective that had a dark and light theme and a simple reading view. Something like that?"* — and of 25: *"I like 25, beautiful. We will likely have a bar on top also in dark perhaps so it isn't so noticeable, but I really like it for bookish chapters like the autobiography."* | which paper; the dark bar on top |
| <a id="r40"></a>**R40** | the Claude project catalogue | the table of 9 under the white and opal bars of 20 | chosen as offered, after *"I like 9 the best, and I might even like a splash of the Claude theme"* | what one project is on the page; his color for Claude |
| <a id="r41"></a>**R41** | a project's conversation catalogue | a multi-view that begins as a plain list downward; views by recency and by size; each conversation's synopsis; annotated for a search that comes later | *"let's not think too much about the conversation view yet because we will have to build the importer."* · *"Let's annotate like we will create a search and need some form of indexing but not do it in version 1."* | everything, until the importer |
| <a id="r42"></a>**R42** | a Claude conversation | 23, the black side bar | *"Yes 23, though we might vary color scheme based on project etc... but start assuming the dark sidebar. That theme looks nice."* | nothing to begin |

*25 was drawn from `.archive/.archive/app/src/sections/` — `the-page.tsx`, `page/sheet.tsx`, `page/page.tsx`, `page/faces/faces.tsx` — the looks that demo called book and night: Georgia, a drop initial, justified prose on a paper of `#fbf9f3` or a night of `#191f3a`, with a plain white added.*

## The design language his answers began

- <a id="r30"></a>**R30 — the top bar may be the cover, and the side bar the table of contents.** *"Might the top bar be a version of the cover and the side bar be a version of the table of contents?… they might be good things to think about as the meaning of the cover and table of contents."* The side bar: *"yes, we like it for this design we are converging on, though let's explore other options too."* The narrow rail is the same bar collapsed: *"something collapsible in cases where screen real estate could be useful."* And: *"I also want to see designs that are quite different before converging on exactly this."*
- <a id="r31"></a>**R31 — less of the dark; white with the dark mark; the opal as a kind of annotation.** Of 20: *"The white and then opal looks really good. A clean white theme with the dark logo makes me start to think that maybe I don't want quite so much of the dark. The opal is interesting too, and while we would need to use that effect carefully, I like it as a type of annotation."*
- <a id="r32"></a>**R32 — the tone depends on the page, and each cataloguing book is its own place.** *"Maybe I like the black and sky for the library itself, with its more bookish view, and then moving into different color themes for each cataloguing book. We do truly want the different parts of the app, in some ways, to feel like different apps, and that can even mean the top bar has different colors and an evolving logo."*
- <a id="r33"></a>**R33 — three catalogues, three looks, a view chosen for each.** *"We have the across Claude projects catalogue, and then we have the conversations per project catalogue and we have the library catalogue. These should all look like different things, and I am inclined to choose between them."*
- <a id="r34"></a>**R34 — a page is imagined from what is done on it, and a view that changes is the proof of the semantics.** *"We need to imagine things based on the set of features we want in each interaction."* · *"Dynamic view change is proof that we are coding the semantics and annotating the semantic structure with what is necessary for the view."*
- <a id="r35"></a>**R35 — the colors are his, and a cover's art is its book's mark.** *"I will choose colors based on my synaesthetic preferences. I also think we want some form of cover art… Perhaps the cover art is simply the logo of the book, and we just have a progressive logo."*

**And from the rounds before, still in force:** the blue is the one his coming-soon page suggests, **measured** — its ground `#0c1b1f` at hue 217 in OKLCH, its opal `#c8f4fb` at 208, the wave's `#D4EEF8` at 223 — and it belongs to the frame; the content keeps many colors and light accents ([R22](#r22), [R26](#r26)). No faded brown ([R20](#r20)). The author is on every screen, with an accent that is only him ([R21](#r21)). The page of a conversation follows the application the conversations come from ([R13](#r13)).

## <a id="requirements"></a>The register of what he asked, in the order he said it

*One line each, the anchor kept. The sentences are his.*

- <a id="r1"></a>**R1** — what the library is for: *"a home for the raw materials of IXP… my conversations including my conversations with your kind."*
- <a id="r2"></a>**R2** — what the design must do: *"bring me a sense of pride, fit in, make me happy and be an effective way to store, annotate and explore my primary source materials."*
- <a id="r3"></a>**R3** — the design book is the process and the record: *"telling the story of how this library was designed."*
- <a id="r4"></a>**R4** — a design is shown as HTML he can use, kept with its photograph and its code.
- <a id="r5"></a>**R5** — concept first, loose and contained: *"don't be committed to code in the library."*
- <a id="r6"></a>**R6** — the chapter's own page is a design he will judge.
- <a id="r7"></a>**R7** — many options, and never one design scaled before it is chosen.
- <a id="r8"></a>**R8** — an application, the book a metaphor: *"If it had to look like a book, I would have said that."*
- <a id="r9"></a>**R9** — the sources: the coming-soon page for the feel, and nothing from the old library until he points at it.
- <a id="r10"></a>**R10** — the second session is a helper: *"you two stop as a coordinated pair."*
- <a id="r11"></a>**R11** — the design book browsable, light, and not one long scroll; a resource's file sorts below its chapter's; the book's parts documented in appendix chapters.
- <a id="r12"></a>**R12** — many finished concepts by kind of page, each a different layout, at a desk and on a phone, five more being easy.
- <a id="r13"></a>**R13** — the page of a conversation is settled: *"we literally need to support Claude Desktop."*
- <a id="r14"></a>**R14** — whoever draws it looks first: *"Don't show me anything that you would never choose as a design."*
- <a id="r15"></a>**R15** — a design question is asked by showing: *"If you want to ask me a design question SHOW ME SOMETHING."*
- <a id="r16"></a>**R16** — many views of one semantic core: *"a view is a way of interpreting the same structure in different ways."*
- <a id="r17"></a>**R17** — every cataloguing book is a home, and a book *"reports to its subject catalogue like its home more than the library home."*
- <a id="r18"></a>**R18** — the cover is the landmark of a book.
- <a id="r19"></a>**R19** — controls that are realistic to build; a find primed by the catalogue's own fields; favorites.
- <a id="r20"></a>**R20** — soft black, blue and white carrying the design; *"I am unlikely to go for a design with the faded brown color."*
- <a id="r21"></a>**R21** — the author on every screen: *"some sense that you are interacting with someone."*
- <a id="r22"></a>**R22** — the blue is the one his own page suggests: *"There is an axis of blue there."*
- <a id="r23"></a>**R23** — correct, do not extend: *"why did you extend rather than correct?"*
- <a id="r24"></a>**R24** — a color as options, never one guess; books not all one color.
- <a id="r25"></a>**R25** — *"Please be subtractive… Delete the bad ones."*
- <a id="r26"></a>**R26** — *"The blue was never about the content… I was looking for multiple colors."*
- <a id="r27"></a>**R27** — layouts shown as ideas, lighter and darker, that he chooses among.
- <a id="r28"></a>**R28** — no calendar view; a conversation in the black side bar.
- <a id="r29"></a>**R29** — the canonical thing we inspect is in the book: *"your numbered sheet is in the archive, and is not a chapter in the book."*

## What was built

- **In the binder**, committed locally at `e39b0be`: About as the subject's name, with `TITLED-TWICE`; the library must catalogue itself, with `NO-LIBRARY` and `TWO-LIBRARIES`; a copy of the binder no longer carries the master's galleys.
- **His library**, four books on the bare base, in `.me`.
- **The design book**, Dougs Design, which is the record he asked for and the place the design was decided. Two generated chapters: *What I Am Asked*, every question by letter with the numbered concepts it is about drawn under it and his answer beneath; and *Every Concept*, the twenty-five by number, a section a kind. Four appendix chapters print the book's own parts: the pages, the frame, the concept and its viewer, the theme. A card opens across the whole screen with the concept live at a desk and on a phone.
- **<a id="process"></a>The one command**, `node .archive/dougs-design/session.mjs`: it gives a new concept its number, photographs what changed at both widths, writes both chapters and the index, and binds. It writes nothing outside the book. The concepts' sources, the questions and the command itself are staged in `.archive/dougs-design/`, **which is on this disk only**; `sessions/CONCEPTS.md` there is the contract for whoever draws.

## What the two days corrected — a stub

*The rounds, the five ways the work missed, and the rules that came of them left this chapter at the compound for their rooms.* **The rules:** [what the prototype workflow's second run added](../../../../.claude/library/..teamsmanship/19-workflows.md#what-the-second-run-added--out-of-sprint-98). **The markup ruling:** [Markup Is Written Fully Expanded](../the-coding-style/06-the-shape-of-tsx.md#markup-is-expanded). **The bind that refused a sketch:** [The Page That Only Printed the Notation](../solutions/102-the-page-that-only-printed-the-notation.md).

**The wrong turns, kept in one place so they are not retried:** a conversation's text lifted from the old library, which he had not pointed at; one design carried across four kinds of page before any was chosen; literal book forms where he meant an application; a ten-chapter book and a measuring apparatus where he asked for concepts quickly; sketches all black; copies of products; a conversation interface of our own; a poll in words about designs he had not seen; a blue chosen where his page had one to measure; a session added beside a sketch he had asked to have corrected; the corrected blue put on every book; and a numbered page kept outside the book. **Beneath them all:** the workflow's discussion by territory was not held until a catchup he ordered, and the designer of structure and movement had not spoken.

## Found on the way, and not this sprint's

*Each is written down so it is not lost, and none was chased.* A numbered Code draws an empty last line for a file that ends in a newline ([`src/figures/Code.tsx`](../../package/src/figures/Code.tsx), a change under `src` and so his to allow). Three passages gone stale: [What Is Marked and What Is Replaced](../writing-a-book/06-what-is-marked-and-what-is-replaced.md) still says a registration answers a written `<Table />`; [Code, Image and Svg](../figures/03-code-image-and-svg.md) still says the default sheet has a rule for each; [Author, Subject and About](../library/04-author-subject-and-about.md) still says an annotation's writing is drawn and hidden. The binding's `tsconfig.json` lacks `allowImportingTsExtensions`; a registration of a subclass theme does not typecheck against chemistry's signature, a pitch; the package's declarations are a build behind its source. A part of a theme named `chapter` shadows the accessor every writing has. The face keeps the pictures of chapters that no longer exist — `.me/..public/.design` held 240 files where 92 were current — until it is cleared by hand. The test library's tables are written on one line, against the markup ruling. And the resource separator is a tilde in his library alone; the test library and the docs await [the rename](../writing-a-book/04-the-reference-manual.md).

## Where things stand

**Next: `/ce-brainstorm`, to open the sprint that builds.** *What this session expected it to be about, which is his to set in the room: the seven books above, beginning from his word on how a book is built to carry many views.*

**Done.** A design is chosen for each of the seven books, in his words, in the table at the top. A design language stands under it. The design book holds every concept by number and every question with his answer. The lessons are in their rooms and this chapter is compacted, 7,078 words to 3,303, every anchor kept.

**Not started.** Anything of a design built into his library's theme or faces. The importer for the conversations.

**Open, and his.**
- How a book is built to carry many views. He has said he will lead it, and that it will take more structure than we expect.
- His colors, for the library, for Conversations with Claude and for each project. They are his by synaesthesia; every color in the concepts is a stand-in.
- Two questions left unanswered in the book: where he is on a screen and whether the orange is his (E), and what stands at the right of a page (F).
- Which concepts go. No book chose 4, 5, 7, 10, 12 to 18, 21, 22 or 24. On his word they are deleted and their numbers retired.
- The cream paper of the library's own scaffold theme, in Dougs Reference Manual, which three of his books still wear.
- Whether the staging in `.archive/dougs-design/` moves into the library, since the command that makes the design book is not in any repository.

**Waits on something.** Book 6 waits on the importer. Anything in [`.public/package/src`](../../package/src/) waits on his yes, each change. The first thing to make real is one catalogue switching its view live; whether that needs anything from the framework is not known.

**Verified.** At `e39b0be`: binder typecheck 0, unit 137 of 137, regression 46 of 46. At the close: his library binds with 30 keys and every reference resolving; the design book was driven in Chrome at a desk and on a phone with no errors — it opens on the questions, a question's cards open full screen and the arrow keys move among that question's alone, the index reaches each kind as a place. The sync's validators pass: bookkeeping, and 196 compiled links with none broken.

**To see it.** `cd .me/..public/.binding && npx vite preview --port 4242 --strictPort`, then `http://localhost:4242/dougs-design/`. The book opens on What I Am Asked; Every Concept is the second entry of the index. After any change to a concept or a question, `node .archive/dougs-design/session.mjs` from the repository root rewrites and binds it.

**Where it is kept.** This branch library is on the identity repository's `inexplicable-phenomena` branch, and his library on `dougs-library`, both pushed with this handoff. The project's `main` is four local commits ahead of origin and is his to push: `f43d44e`, `4692e9d`, `e39b0be`, `fb70daa`.

**To read, for a brainstorm on the build** — a start, and not a boundary:
1. The table at the top of this chapter, and the six lines of the design language under it: they are the requirements' source.
2. The design book itself, at 4242: the concepts 1, 6, 8, 9, 19, 20, 23 and 25 are the ones chosen, and pressing one runs it.
3. [Book](../library/05-book.md) and [Paginated](../library/08-paginated.md): how a book is extended into an application, which is where many views of one book will be decided.
4. [Dressing a Library](../writing-a-book/02-dressing-a-library.md) and [The Development Policies](../writing-a-book/07-the-development-policies.md): how a chosen design goes into a library's theme and faces.
5. [What the prototype workflow's second run added](../../../../.claude/library/..teamsmanship/19-workflows.md#what-the-second-run-added--out-of-sprint-98): how the next design question is put to him.
