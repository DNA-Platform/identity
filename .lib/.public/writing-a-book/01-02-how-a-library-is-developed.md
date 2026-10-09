# How a Library Is Developed

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-10-05 at the close of [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md), on Doug's words: "if dev time becomes too slow and you can't rapidly iterate, your ability to style goes into the gutter… We lost an important part of this design" — "When doing UI work you need rapid feedback right? If the system doesn't give that to you, the system is a failure" — "We need future sessions to know, beyond a doubt, how to develop when building a library." [How a Library Is Designed](01-01-how-a-library-is-designed.md) says what to build; this says how to work while building it. The chapter's name, and the words workbench, look and live, are PROXIES.***

---

## <a id="the-protocol"></a>The protocol

**A library is developed with its pages open. Nothing is bound in order to look at it.**

1. **Open the workbench once, in the background, and leave it open for the session.**

   ```
   node .me/.manual/6-developing-a-library~workbench.mjs
   ```

   It says `the library is live at …` within ten seconds. It is the binder's own dev server and one Chrome, both kept open.

2. **Edit a file. Look.**

   ```
   node .me/.manual/6-developing-a-library~workbench.mjs look dougs-story
   node .me/.manual/6-developing-a-library~workbench.mjs look dougs-story/#closure phone at=.pd-title
   ```

   A look waits for the save to reach the open page, prints what it found, and names a photograph. Read the photograph. Everything else is asked in the same call: `read=` what an element says, `style=` what it computes to, `box=` where it stands, `after=` what is drawn before and after it, `rules=` every rule that names a word in the order they apply, `at=` one element alone, `click=` a press first, `phone` a phone's width, `fresh` a new load. The whole list is at the head of [the file](../../../../.me/.manual/6-developing-a-library~workbench.mjs).

3. **Bind once, when the piece of work is done, and look at what it built.**

   ```
   npm run bind                                   (in .me/..public/.binding)
   node .me/.manual/6-developing-a-library~workbench.mjs look dougs-story built fresh
   ```

   The built site on 4242 is the one Doug reads, and [the bind is the gate](#live-and-bound), not the live page.

4. **Close the workbench when the session ends:** the same file with `close`.

**Three signs the protocol is being broken:** a script written into the scratchpad to see a page; a second bind inside one piece of work; a claim about how something looks with no photograph named.

*The workbench stands in Doug's library, beside the chapter of his manual that says what it is — [Developing a Library](../../../../.me/.manual/6-developing-a-library.tsx) — because [what builds a library lives inside it](05-how-to-be-a-librarian.md). A design is still drawn in a sketch first and the book photographed beside it; his design book's camera photographs the sketches, and the workbench photographs the book.*

## <a id="costs"></a>What each step costs

*Measured 2026-10-05 on Doug's library of four books, in Chrome, each number a match and never a timeout.*

| step | time |
|---|---|
| the workbench opens | the dev server up in **2.4s**, the first page drawn **1.9s** after |
| a sentence saved in a chapter → on the open page | **0.19–0.24s**, in place |
| a declaration saved in the library's theme → computed on the page | **0.24–0.33s**, in place |
| the same in the design book, the heaviest theme | **0.59–0.68s**, in place |
| a chapter's link taken out of a table → the compiler's refusal on the page | **0.11s**, naming the chapter; gone when mended |
| a look at a book already open | **0.3–0.4s** |
| the first look at a book | **1.2–4.0s** |
| a look at the built site, loaded fresh | **1.0–1.3s** |
| a bind | **6.6s** with nothing changed, about **9s** changed, **13.4s** run beside the open workbench |
| the way a look was taken before: a bind, a probe written for the occasion, a new Chrome | **15–25s**, and a file to write and remove |

**The cost that matters is the second-order one**, and it was written on 2026-09-20 in [One browser, kept open](../debugging-a-page/03-one-browser-kept-open.md#fact): *at ten seconds a look you look after every third change, and the change you did not look at is the one that was wrong.*

## <a id="live-and-bound"></a>What the live page checks, and what only the bind checks

**The live page is for looking. The bind is the gate.**

| | on the live page | in a bind |
|---|---|---|
| **the notation resolved** — every `[[ … ]]` in a file | as that file is saved | yes |
| **the catalogue's rules** — the twenty-four faults of [`wellformed`](../../package/.binding/catalogue/wellformed.ts) | **only at start and when a cover, a synopsis or a table is saved** — [`catalogue/holds.ts`](../../package/.binding/catalogue/holds.ts) | yes, every time |
| **each book asked its own rules** — the specification of writing | no | yes, *specify* |
| **the page as it is printed** — what a reader gets before the code arrives, and that the code takes it up | no; the live site sends an empty page and draws it | yes, *render* |
| **every link against the page it leads to, every id worn once** | no | yes, *proof* |

*Measured the same day: a sixth chapter added to Doug's manual appeared on the open page at once and raised nothing, though the table did not list it. The refusal came when the table was next saved.* **So a fault introduced by any file but a dot chapter waits for the next dot chapter's save, or for the bind.** *And "seen live" is never "shipped": the last look at finished work is `built fresh`, the standing rule that a feature is driven in the real browser before it is called working.*

## <a id="hot"></a>What reaches the open page, and what does not

*Doug's commission of 2026-09-17, the fourth of [his six](../the-catalogue-and-the-specification/01-the-commission.md): "it is known which parts support hot reload and which parts don't and we support as many as possible because restarting a server is death." Each row says how it is known.*

| what was edited | reaches the open page | how this is known |
|---|---|---|
| a chapter's words | in place | measured 2026-10-05 |
| a theme, a face, any code file beside a chapter | in place | measured 2026-10-05, on two themes |
| a table, a cover, a synopsis | in place, and the catalogue's rules are asked | measured 2026-10-05 |
| a chapter added | in place, with no bind | seen 2026-10-05; timed at 1.76s on 2026-09-25 |
| a sheet named in `.pubconfig` | in place at 1.4s | measured 2026-09-20; **not measured since** |
| **a picture beside a chapter** | **no.** The live site answers a picture's address with the page's own shell; the bind's render phase is what copies it beside the pages. A page that shows pictures, as his design book's cards do, is looked at `built` | measured 2026-10-05: `image/png` on the built site, `text/html` on the live one |
| **the framework's `src`** | **no.** The face reads the package from `dist` — seen 2026-10-05 in a compiled table, whose import resolved to `package/dist/lib.js`. A `src` edit is the package's build, then a look with `fresh` | the build timed at 4.4–5.0s on 2026-09-20; **not measured since** |
| **the binder's own files** | **no.** The dev server keeps the binder it started with. Sync the face, then close the workbench and open it | read in [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#dev) |
| `.pubconfig` | **not known** | not measured |

*A bind run beside the open workbench works, and leaves one error on each open live page — React's `createRoot() on a container that has already been passed to createRoot()` — until that page is looked at with `fresh`. And once a library has been bound, a live page loaded fresh is taken up over the last bind's print, so it warns of a mismatch wherever the source has moved on since; the page is right, and the warning goes at the next bind.*

## <a id="the-tool"></a>What the workbench learned in its first hour

**Three faults, each a rule in the tool now**, as [the tool before it](../debugging-a-page/03-one-browser-kept-open.md#design) had three:

- **A page just loaded from the live site is blank.** The live site prints nothing and draws the book when its code arrives, so the first photograph was of an empty page. *A page is waited on until it says something, or the compiler does.*
- **A page behind another draws nothing.** A look at a book opened earlier never answered: the wait was on an animation frame, and a tab that is not in front is given none. *The page looked at is brought forward, nothing waits on a frame, and every look has thirty seconds before the page is closed and the next look opens it again.*
- **An element is photographed by clipping the page to where it stands,** in page coordinates, *the lesson of 2026-09-20 carried over, with reading the pseudo-elements and reading which rule wins.*

**And three more in its first day of real use,** building [Sprint 100](../projection/105-sprint-100--the-big-plan.md)'s sketches:

- **A built page is printed before its code takes hold of it,** so a look just after a load read the print and not the book. *A page just loaded is waited on until the book's code has taken it, and, at a chapter's address, until the book has turned to that place.*
- **`fresh` loads the address asked for, never the one the tab was left at.** *A press moves the tab to another chapter; a reload kept it there and photographed the wrong page.*
- **The tree under an element is a question of its own:** `tree=<selector>|<depth>` prints each element with its marks and its size. *Writing a frame's rules without it was guessing at which box wears which mark.*

## <a id="lost"></a>How this was lost, twice

1. **2026-09-17.** Doug's commission for the binder: *"And remember as an anchor, support for hot reload is obviously ESSENTIAL."* It was built; an edit appeared in place in 496ms.
2. **2026-09-20.** After a day of ten-second looks he asked: *"Did you maintain a single connection to the browser and refresh? … Did hot reload allow you to work in front of the compiled output?"* The answers were no. The team wrote [Debugging a Page](../debugging-a-page/.cover.md), five chapters, and built a kept-open browser that answered in 13–20ms.
3. **2026-10-02.** His library started from scratch. The tool had stood in a folder inside the old face's copy of the binder, and went to the archive with that face. The book stayed, describing a tool that no longer stood where it said.
4. **2026-10-05.** A session bound his library about twenty times to look at it, wrote a probe for each look, and did not know whether an edit still appeared in place. He asked again.

**Two causes, and neither is forgetfulness.** *The tool stood where a new face replaces it, and in no book.* **And every document a session follows said to bind:** [the order of work](07-the-development-policies.md#order) said *"Bind, and run the gates"* and *"Serve on 4242"*; every sprint's *to see it* said `npm run bind`; his own manual said the bind and the preview. The live loop was described once, as mechanism, in the binder's design record, and was a step nowhere. *A session that kept our documents faithfully did what that session did.*

**What is different this time.** The tool is a resource of a chapter of his manual, so the compiler holds it to its chapter and a new face cannot remove it. And the protocol is said at every place a session comes in by:

| the place | what it says |
|---|---|
| the session's memory, loaded every time | *develop-with-the-page-open*: the two commands, and never a bind to look |
| [the order of work](07-the-development-policies.md#order) | its third step is the open page; the bind is the fourth |
| [`/ce-work`](../../../../.claude/library/our-skillset/30-ce-work.md) | before the first edit, how this branch sees a change |
| [`/ce-handoff`](../../../../.claude/library/our-skillset/32-ce-handoff.md) | a sprint's *to see it* names the loop, and the workbench is closed |
| Doug's manual, [Developing a Library](../../../../.me/.manual/6-developing-a-library.tsx) | the practice in his words, and the tool |
| [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#hot) and [One browser, kept open](../debugging-a-page/03-one-browser-kept-open.md) | each points here |

*When one of these is edited, the others are checked against it.*

## <a id="sketch-first"></a>Sketch in HTML in the design book before `.public` — 2026-10-06

**Doug: *"you can always sketch in html in the design book when doing UI work to save yourself time, rather than going right to .public."*** And of what a sketch is: *"the html will have something you can follow exactly. Names are wrong, but the numerical shapes and fonts etc. can be replicated."* So a view no concept draws is not built first and shown after; it is sketched as a numbered concept in the design book, photographed, looked at full screen, and answered by number — and only then built, from the file.

**The steps, as run for six concepts in one evening** — the frame with a dark side bar under a white top and under a black top, the manual read code-first and words-first, the story in the frame navigated two ways:

1. **Make the file from one already there.** A concept is `3-every-concept~NNN.html` beside the chapter; the next number is its own for good. The frames 11 to 23 are one file with four attributes — `data-layout`, `data-tone`, `data-at`, `data-view` — so a new frame is a copy with the attributes set and one rule added; a new reading of a page is its file with a `data-view` and the rules for it. *The `<meta name="idea">` is the sentence the card shows; `said` stays empty until he says.*
2. **Photograph it with the camera** — `node .me/.design/o3-the-camera~camera.mjs`, which photographs every concept newer than its photographs at a desk and on a phone and says what runs past the edge. Seconds.
3. **Give it a section in *Every Concept*** under a group — `<Concept>NNN</Concept>`, the heading as a place, the idea, `<Photographs />` with both pictures, `<Source />` with the file, `<Close />` with the word back to the chapter — and **link it from the chapter that decides**, since a place nobody refers to is refused.
4. **Bind, and look at it full screen on the built site** — a press on the card opens it beside the index, the title first, the desk photograph at full width, its × back to the chapter.
5. **Ask by number, showing.** Never recommend one — *"I'm not even sure why you would recommend one. That's not a standard for anything."* His answer is written verbatim under the question and the decision under that.

**What it cost.** A frame from the frame file: a copy and six lines, minutes. The manual's two readings from 6's file: the longest, under half an hour, most of it the write-up. Two binds that refused — a number written into a heading's text, which changed every place's address ([Solutions 103](../solutions/103-the-heading-that-took-a-number.md)), and five places nobody referred to — each named exactly, each cured in a line. **And one card opened out of sight until a probe pressed it** ([Solutions 104](../solutions/104-the-card-that-opened-out-of-sight.md)): a look that loads a page by its address is not a look that presses.

## <a id="galley"></a>A galley proves a pattern without touching the library — 2026-10-09

**When the question is whether a pattern works for a book that does not exist yet, make the book in a galley, never in his library.** [Sprint 104](../projection/109-sprint-104--parts-and-the-manual.md#u10) had to show that a second reference manual could be made from the recipe alone, and no subject wanted one; so the whole library was copied aside and the book written into the copy as an author would, bound by the copy's own apparatus, served on a port of its own and photographed, then thrown away, the photograph and the counts kept. **Two things make it work.** The galley stands under the binder's own galleys folder, `library/.public/package/.binding/.test/.galleys/`, which git ignores and from which vite, tsx and the framework resolve by walking up to the repository's packages, exactly as the binder's tests pull theirs — [`galleys.ts`](../../package/.binding/.test/galleys.ts) — and a copy in the machine's temp folder resolves nothing. And the copy leaves behind what a bind writes and what a package manager installs. The script that did it is a page in the scratchpad and is easily written again from `galleys.ts`; the thing to remember is the folder.

**And a galley at a past commit is the regression gate — added the same evening.** The sprint had measured the manual's page at 144 properties on 23 elements and called it unchanged, and an hour after it closed Doug saw his library broken on 4242: an arrow that hid nothing, file rows moved and dimmed, the catalogue's card gone — [Solutions 110](../solutions/110-the-layer-that-took-the-themes-rules.md). What found all three in an hour was the library as it stood at the last commit before the sprint, written from the identity repo's archive over a galley, bound by the galley's apparatus and served on 4243 beside 4242, and every page compared on every element under the book — thirty-two computed properties and the box, keyed by the element's path of tags and library classes so that styled-components' hashes do not count — in every view a reader opens, not only the one the sprint built. *The rule: a sprint that promises a page unchanged proves it against that page bound at the commit before, on every element, never on a set of properties chosen beforehand, which reads what it chose.* The two scripts were a page each in the scratchpad, one to pull and bind the galley at a commit and one to compare a route on two origins, and are easily written again; what to remember is that the comparison is whole, and that a fold is still proved by a height and a count, since a comparison at load reads nothing a press changes.

## <a id="open"></a>What is open, and whose it is

- **No promise holds the live path.** Nothing in the binder's three suites starts the dev server, so an edit could stop appearing in place and every gate would stay green. *A regression promise that serves a galley live, saves a chapter and a theme, and requires each on the open page without a reload. The test library is the team's; not written.*
- **The catalogue's rules on every save,** not only a dot chapter's. *They cost 37ms and 6ms over 206 books once the files are read. A change to the binder; Doug's.*
- **The workbench in the binder,** so every face has it by sync and the test library, which has no face and is bound only through a galley, can be looked at live too. *Built in his library first, as a pattern; the pitch is Doug's to hear.*
- **The dev server's port is not pinned.** It takes 5173 or the next free one, and the workbench reads the address it prints. *A tab Doug keeps on the live site would drift as his preview once did. A change to the binder; Doug's.*
- **`src` reaching the page without a build** — the dev server reading the package from `src` in development, the idea of 2026-09-20. *Doug's.*

**Names.** Doug's: *rapid feedback*, *the development process*, *hot reload*. Ours, flagged: *the workbench*, *a look*, *live* and *built*, this chapter's title.
