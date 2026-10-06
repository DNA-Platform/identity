# Sprint 102: Designing Together

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **implementation-ready, planned 2026-10-06 on Doug's word at the cancellation of [Sprint 101](106-sprint-101--the-design-into-the-semantics.md); waiting on his go.** The requirements are his message, kept whole below; the plan is guardrails for a sprint that is done in the room with him, one book at a time.
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow).
- ***The title is a PROXY for his sentence: "Let's design together."***

---

## Where this sprint comes from

**Sprint 101 was cancelled as a failure, and this sprint is the method he set in its place, in his words:**

> *"It's time for you and me to do this on our own. Let's make some space in the design book. We are going to start from scratch. You don't have to delete anything, but maybe you can come up with some method to denote that these are a fresh set of designs. And you and I are going to iterate rapidly in HTML, then you are going to use hot reload to apply them. I want to get through this. Let's design together."*
>
> *"Just cancel the current sprint. Call it a failure. And just /ce-plan a next sprint that is one-by-one design with me, and we are going to LITERALLY start with the data that is in each book, bring it into html, so we can rapidly evolve the design by just looking at the same HTML page, photographing and integrating into the design book as we go."*
>
> *"You are also going to need to restructure the design book. In chronological order is not always the right way to go. What can we do to introduce something like phases, and accept that what we saw there was the sketch phase, and we'll call this next phase the design phase. Can you come up with ways of annotating chapters by phase, so we can encapsulate some of what we did already, and move onto a fresh canvas?"*

**And the direction for what is designed, from the same hour:** *"Go light. Gentle. Pastels with accent colors… pastels that are just in the blue green purple spectrum A LITTLE more than the yellow orange pink one, while still having interesting contrasts… don't have one dominant color that occupies so much… choosing several colors that span the color wheel so that no book is any one thing… really be thoughtful about font and font size and color palettes."* *"Those books are huge. Is there even a book selection view that tells you something about one? Maybe there's something useful the UI on this page can do?"*

**What stands when it opens.** The code of Sprint 101 as its *Where things stand* records it: the frame of 15 on every book, the theme's roles, the catalogue's page with its entries, the appendix at the foot, the story's door, the manual's door after 28 and 31 (the helper's, uncommitted at the cancellation, accepted on its report). None of its colour is his; all of its structure is reusable.

## Requirements — his message, as requirements

- <a id="r1"></a>**R1.** The design book has **phases**. Every chapter says which phase it belongs to. What was done is the **sketch phase** — the deciding chapter, the questions, Every Concept, Driving the Build and their appendix — and is encapsulated as such. The **design phase** opens on a fresh canvas, and the book opens on it. The table orders by phase, the design phase first; chronology is kept in the file names and nowhere else. *Observed: the design book's side bar reads the design phase's group first and the sketch phase's after it, in a smaller voice as the appendix is; the door opens on the design phase.*
- <a id="r2"></a>**R2.** Each book's **data is brought into one HTML page, literally**: the page starts from the bound page's own markup — the book's real chapters, titles, paragraphs, captions, with the framework's class names kept — and a style of its own. No mock content; no lorem. *Observed: the design page's words are the book's words, diffable against the bound page.*
- <a id="r3"></a>**R3.** The design is **evolved on that one page by looking, together, one book at a time** — the catalogue first, then the story, the manual, the design book — each round a change to the page, a photograph, his words. *Observed: a design chapter per book holding the page, its photographs in order, and what he said at each.*
- <a id="r4"></a>**R4.** A page he has decided is **applied by hot reload**: its values ported into the book's theme parts and layout with the workbench open, until the live page measures as the page does. *Observed: `look style=` on the live page returns the page's values for the sizes, colours and widths named in the design chapter.*
- <a id="r5"></a>**R5.** The colour is **light and gentle**: pastels with accent colours, a little more blue, green and purple than yellow, orange and pink, interesting contrasts, several colours across the wheel so that no book is any one thing and no one colour occupies so much; **no black**; every colour, font and size specific and thought through, with its comparable named. *Observed: the palette is a sheet in the design chapter, each value with its role and its source.*
- <a id="r6"></a>**R6.** The catalogue's page **has a use**: a book can be chosen and known about from it; the covers are small; what the page does for a reader is said before it is drawn. *Observed: the catalogue's design chapter opens with what a reader comes to the page to do.*

**Acceptance examples.** <a id="ae1"></a>**AE1** The design book opens on the design phase; its side bar groups chapters by phase. <a id="ae2"></a>**AE2** The catalogue's design chapter shows the page's photographs in the order they were taken, each under his words, the last one decided. <a id="ae3"></a>**AE3** The live catalogue page, measured with the workbench, equals the decided page in every value the chapter names. <a id="ae4"></a>**AE4** The same three for the story, the manual and the design book, each in its turn.

## Decisions

- <a id="d1"></a>**D1. A phase is a thing said of a chapter — `Phase`, naming its phase.** Written in each chapter of the design book as `<Phase>sketch</Phase>` or `<Phase>design</Phase>`, read in `is()` as *this chapter is in a phase*, the phase's name in it as `Coloured` carries its value; the table of contents has one section per phase and the theme draws the sketch phase's section as the appendix is drawn, in a smaller voice. *Chosen over* a second book for the design phase (the library catalogues one design book, and the sketches are its history, not another book), and over renaming or renumbering the old chapters (files keep their numbers; order lives in the table, which is where this library keeps order). **PROXY:** the annotation's name and the phases' names are his to keep or change.
- <a id="d2"></a>**D2. A design page starts from the bound page.** `.me/..public/<book>/index.html` holds the book exactly as the binder prints it; its body is copied into `N-<the book>-designed~0NN.html` beside the design chapter, with the printed stylesheet dropped and a `<style>` of ours in its place. The camera photographs it as it photographs every numbered page. *Chosen over* writing the page by hand (lorem, refused: *"only sources he points at"*) and over drawing the design in the live code (the failure of Sprint 101).
- <a id="d3"></a>**D3. One page, many rounds, one book at a time, in the room.** A round is: a change to the page's style, the camera, the photograph into the chapter under his words. The page keeps its number across rounds; a round he wants kept as a stage is copied to the next number so its photograph stays. *Chosen over* many alternative pages per round (he chooses between rounds, not between a spread of guesses).
- <a id="d4"></a>**D4. Application is porting, with the page open.** The decided page's values become the book's theme parts and, where the page's structure differs, the book's `write()` or layout; the workbench's `look` measures the live page against the chapter's named values after each port. *Chosen over* a bind per look (the workbench is for this).
- <a id="d5"></a>**D5. The colour language is designed as a sheet before any page uses it:** a small palette of pastels across the wheel with an accent each, a slate ink, no black, and the roles each value fills, each with its comparable — Notion's and Craft's pastel tags, Apple's icon blues and greens, Matter's papers — so that a page draws from the sheet rather than inventing. *Chosen over* a palette per book (no book is any one thing: a book uses several of the sheet's colours in its own way).

## Units

- <a id="u1"></a>**U1. Phases in the design book.** *Mechanism:* `Phase`, an annotation said of a chapter carrying its phase's name, beside a chapter *The Phase* in the design book's appendix; `<Phase>sketch</Phase>` written in chapters 1–4; the table's sections regrouped by phase with the design phase first; the design book's `open` falling back to the first chapter of the design phase; the theme drawing the sketch phase's section in the appendix's voice. *Files:* `.me/.design/o6-the-phase.tsx`, `~code.tsx`, `.table.tsx`, chapters 1–4, `o5-the-frame~code.tsx`, `~theme.tsx`. *Visible end:* AE1. *Depends on:* nothing.
- <a id="u2"></a>**U2. The catalogue designed, with him.** *Mechanism:* D2 and D3 on `/dougs-library/`: the chapter `5-the-catalogue-designed.tsx` opens with what a reader comes to the page to do (R6), holds `~034.html` made from the bound page, and grows a photograph and his words per round; the palette sheet (D5) is its first section. *Visible end:* AE2. *Depends on:* U1.
- <a id="u3"></a>**U3. The catalogue applied.** *Mechanism:* D4 into `..reference/o1-the-catalogue~theme.tsx`, `~views.tsx`, `~code.tsx` and the base theme where a value is every book's. *Visible end:* AE3. *Depends on:* U2 decided.
- <a id="u4"></a>**U4. The story designed, with him.** As U2 on `/dougs-story/`, chapter `6-the-story-designed.tsx`, `~035.html`. *Depends on:* U3.
- <a id="u5"></a>**U5. The story applied.** As U3 into `.librarian/`. *Depends on:* U4 decided.
- <a id="u6"></a>**U6. The manual designed, with him.** As U2 on `/dougs-reference-manual/`, chapter `7-the-manual-designed.tsx`, `~036.html`; the helper's door of 28 and 31 is the page's starting state. *Depends on:* U5.
- <a id="u7"></a>**U7. The manual applied.** As U3 into `.manual/10-the-manual~*`. *Depends on:* U6 decided.
- <a id="u8"></a>**U8. The design book designed, with him.** As U2 on `/dougs-design/`, chapter `8-the-design-book-designed.tsx`, `~037.html`. *Depends on:* U7.
- <a id="u9"></a>**U9. The design book applied.** As U3 into `.design/o5-the-frame~*`, `o4-the-gallery~code.tsx`. *Depends on:* U8 decided.
- <a id="u10"></a>**U10. The close.** The manual's chapters made true to the applied pages; the four false sentences the helper listed; `/ce-compound` for what the rounds taught about designing with him; `/ce-handoff`. *Depends on:* U9.

## Test scenarios

Per applied unit (U3, U5, U7, U9): the workbench's `look` at a desk and on a phone returns, for every value the design chapter names, the page's value; the drive finds nothing past the right edge; a press on each remaining switch keeps the held book (the regression promise of Sprint 101); the bind proves every page. Per design unit: the chapter's photographs are the camera's, newer than the page, and each has his words under it.

## Order

U1, then U2–U3, U4–U5, U6–U7, U8–U9 in pairs, each pair a sitting with him; U10.

## Risks

- **His time.** Each design unit needs him in the room. *Mitigated:* one book per sitting, the page ready before he arrives, the rounds short.
- **The dev server.** It drew nothing on a fresh load after the catalogue's files were renamed under it. *Mitigated:* the workbench restarted; a fresh load checked before each sitting.
- **Porting drift.** A page's value lost on the way into the theme. *Mitigated:* every value the chapter names is measured on the live page, AE3.
- **The same failure.** Designing by guessing again. *Mitigated by the method itself:* no change to the live site that was not first a page he saw.

## The plan checked against itself

R1 lands in U1; R2 and R3 in U2, U4, U6, U8; R4 in U3, U5, U7, U9; R5 in U2's sheet (D5) and every design unit; R6 in U2's opening. Every unit names its mechanism and its visible end. Nothing is owed from Sprint 101 but the manual's four sentences, which U10 carries.

## Where things stand

**Next: his go — then `/ce-work` on this chapter, starting at [U1](#u1).** Nothing is built. The helper session is stopped. The workbench is open; the preview on 4242 serves the last bind of Sprint 101.
