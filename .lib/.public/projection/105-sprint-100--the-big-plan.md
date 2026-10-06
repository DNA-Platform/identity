# Sprint 100: The Big Plan

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **CLOSED 2026-10-06, compacted at the close from 19,273 words.** Opened 2026-10-05 as a plan and no code; set to build the same hour ([R13](#r13)); everything built declared dead that evening and begun again from structure ([R14](#r14), [the path](#the-path)); four books built to a matching of designs that was ours and not his; the design book then put together so the designs could be decided by number, and decided — the record is [Where things stand](#where-things-stand). What it taught lives in its rooms: [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md), [The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md), [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md), [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md#sketch-first), [Solutions 103](../solutions/103-the-heading-that-took-a-number.md) and [104](../solutions/104-the-card-that-opened-out-of-sight.md), and [the prototype workflow's third run](../../../../.claude/library/..teamsmanship/19-workflows.md#what-the-third-run-added--out-of-sprint-100).
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow) — the brainstorm was the talk in the room that day, kept in [How a Book Is Implemented](../writing-a-book/01-03-how-a-book-is-implemented.md).
- ***The title is his phrase, "a big plan"; a PROXY for the sprint.***

---

## Where this sprint comes from

**[Sprint 98](103-sprint-98--dougs-design.md) ended with a design chosen for each of seven books, and no code that is right.** Doug, 2026-10-05: *"We have not implemented any code yet for my library. What was written was enough to get .design up and running. Consider none of it right. Consider all of it being rewritten."* He then said how the library is to be built — *"I will teach you how to use annotations and types to mark up different kinds of chapters, and to collect them so that we can support different kinds of layouts in the book base classes that we use"* — and set the work: look at the designs, decide what is common and what is local, imagine where the chapters go, and plan.

## Requirements — the register

*Each was his sentence of 2026-10-05, written at full weight with what would be seen; compacted at the close to one line each, the anchors kept. His words that still govern are quoted.*

- <a id="r1"></a>**R1** — the plan says which designs each book has, in his design book. *Landed as [The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx), decided by number at the close.*
- <a id="r2"></a>**R2** — where he liked two, a toggle. *Switch and Tab; the papers, the modes, code forward.*
- <a id="r3"></a>**R3** — what is common and what is local. *[The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md).*
- <a id="r4"></a>**R4** — where the chapters go, and so the kinds of chapter. *Annotations said in the chapter; [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md).*
- <a id="r5"></a>**R5** — chapters are plugins a book is given, and the book is still a document.
- <a id="r6"></a>**R6** — the semantics protected, the look said from outside with `$is`.
- <a id="r7"></a>**R7** — components beside the base classes.
- <a id="r8"></a>**R8** — the three wonderings: a cover rendered many ways, a table of contents as another experience, a synopsis shown or not.
- <a id="r9"></a>**R9** — general code in the reference manual, local code in a book's appendix.
- <a id="r10"></a>**R10** — reference manuals that catalogue reference manuals: *"Something does not need to JUST be a catalogue."* ([D10](#d10))
- <a id="r11"></a>**R11** — none of the existing code is the plan.
- <a id="r12"></a>**R12** — seen through books, and not restrictive.
- <a id="r13"></a>**R13** — built, by sketching every book at once, the manual's design first, graded as it goes: *"Start getting to work, and keep grading yourself on whether or not you think your implementation of the design is making use of the library design patterns correctly."*
- <a id="r14"></a>**R14** — everything in his library is dead test code; harvest it, then build four real books by structure: *"four books with four very different looks… a structural annotation-based system… Show me a todo list of accomplishable and milestones along this path."*
- <a id="r15"></a>**R15** — the author and the subject on every book — *"without those, the library is not navigable"*; a layout is a subclass of the book; a resource documents — *"The point of resources is to document, it is not to render."*

## Decisions — the register

- <a id="d1"></a>**D1** — the plan is chapters of his design book, in his voice; this chapter holds the guardrails.
- <a id="d2"></a>**D2** — read off the designs region by region, and shown.
- <a id="d3"></a>**D3** — parts and their places, never pages.
- <a id="d4"></a>**D4** — every kind of chapter held to both halves of his sentence: placeable, and sensible in file order.
- <a id="d5"></a>**D5** — what is his to rule is asked in his book, by letter, and answered in his words.
- <a id="d6"></a>**D6** — every name is a stand-in until he keeps it. *Superseded in method by [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md): "NO! I can't approve all classnames in this library. You have to learn."*
- <a id="d7"></a>**D7** — nothing is built. *Reversed the same day by [R13](#r13).*
- <a id="d8"></a>**D8** — a part is general when a base book needs it or a second book uses it; otherwise its own book's appendix.
- <a id="d9"></a>**D9** — the work is done with the page open, bound once at the close.
- <a id="d10"></a>**D10** — cataloguing is not a kind of book; it is what any book does for the books filed under it. *His ruling under [R10](#r10); the test library's Libby is the proof that the Binder needs nothing new.*
- <a id="d11"></a>**D11** — sketched across every standing book at once.
- <a id="d12"></a>**D12** — the reference manual wears its design first.
- <a id="d13"></a>**D13** — a part begins where it is first needed and moves to the manual when a second book uses it.
- <a id="d14"></a>**D14** — every piece graded as it lands.
- <a id="d15"></a>**D15** — nothing under `.public` changes; what it lacks is built as a pattern in his library and pitched. *Held: the one change, the `o` prefix for appendix chapters, was on his instruction and shown.*

## A first reading — what the plan is expected to say

*What stood here: six things every chosen design shares — the library's cover and table, this book's cover and table, the open chapter, what goes with it — and a table of the kinds of chapter, proposed from the concepts before any was built. It is superseded by the map read off the sketches' own files, [The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md), whose four attributes — layout, tone, at, view — say the same six things with the file's names.*

## Units — the register

*U1 to U6 were the plan's chapters, folded on [R14](#r14) into one table; U7 to U13 the first build, declared dead; all kept as one line each for the record's citations.*

- <a id="u1"></a>**U1** — which book wears what · <a id="u2"></a>**U2** — what the designs share, drawn · <a id="u3"></a>**U3** — the kinds of chapter · <a id="u4"></a>**U4** — the books that hold them · <a id="u5"></a>**U5** — where each part is kept · <a id="u6"></a>**U6** — what is his to rule, and the records.
- <a id="u7"></a>**U7** — the one book, its pages and one frame · <a id="u8"></a>**U8** — the manual's design · <a id="u9"></a>**U9** — the story's sheet and papers · <a id="u10"></a>**U10** — the catalogue's bars and shelf · <a id="u11"></a>**U11** — the design book on the same parts · <a id="u12"></a>**U12** — the manual's chapters in sections · <a id="u13"></a>**U13** — the grade, the bind, the records. *Dead test code, [R14](#r14).*

## <a id="grade"></a>The grade, as each piece landed — 2026-10-05

*Given at full weight as the first build landed, by [the three tests](../the-coding-style/07-what-natural-means.md#the-three-tests); corrected by Doug the same day, his three sentences and what changed in [How a Book Is Implemented](../writing-a-book/01-03-how-a-book-is-implemented.md#corrected). Kept here as the verdict and the fights, one line each.*

**The verdict as first written blamed the framework for what we had not read** — a theme given through `$is` providing only inside itself. The framework answers it: a Format that reads theme values says `themeProvider = true`. *What most improved the build was his sentence, "the purpose of a book is layout," already written in this library from 2026-09-13.* **The fights:** two were the framework's as claimed and withdrawn; three were ours — the book not laying out, an annotation given through `$is` doing its work in `defines()`, the family rule the framework's own idiom; and five stand small: a table's rows as two shapes, a note drawn in reverse order, *everything but the listing* as a number, a control that is not writing, a first load's warning. **What stood after:** a book's `write()` is the layout; a layout is a class under it; a switch gives a view through `$is` and nothing else.

## <a id="the-path"></a>The path — the plan reviewed on [R14](#r14), 2026-10-05

**What stands:** the requirements; the rulings ([D10](#d10)) and the working decisions ([D9](#d9), [D13](#d13), [D14](#d14), [D15](#d15)). **What is dead:** everything under [U7](#u7) to [U12](#u12). **What is folded:** [U1](#u1) to [U6](#u6), into one table read off the designs.

*The harvest — thirty-two things the dead code had to work out with no page to read, seventeen from the first pass and fifteen from the helper session's — was written down as [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md) ([U14](#u14)) and stood here at full length until the close. The four designs read for structure, and the designs read section by section on his word of 2026-10-06, stood here too; both are superseded by [The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md) and by the decisions by number below.*

### The milestones

- <a id="u14"></a>**U14 — what the dead code taught, written down.** Done 2026-10-05: [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md).
- <a id="u15"></a>**U15 — the structure of the four books, with no look.** Built 2026-10-05; he liked it: *"a nice unstyled form that made me really happy to be able to browse, just because I can see the DNA of the .public framework."* His three answers at that audit are [R15](#r15).
- <a id="u16"></a>**U16 — four layouts, placed and plain.** Built 2026-10-05.
- <a id="u17"></a>**U17 — the reference manual as concept 6.** Built, bound and seen 2026-10-06, to 6's values. *Decided since: 6 read two ways, 28 and 31.*
- <a id="u18"></a>**U18 — his story as concept 25.** Built by the helper session, every line audited, 2026-10-06, to 25's values. *Decided since: 29, in the frame.*
- <a id="u19"></a>**U19 — the catalogue as the shelf of 1 under the bars of 19.** Built 2026-10-06 — **to a design he never approved:** *"I never approved a two-bar design."* It is concept 19 to the pixel, `two` + `dark` + `subject` + `shelf` in the frame file's attributes. *Decided since: 1, in the frame.*
- <a id="u20"></a>**U20 — the design book, light and airy, in two modes.** Built 2026-10-06 as 11 in library mode and 12 in gallery mode with 21's cards; then put together for deciding — opens on *Every Concept*, every card numbered, a press opens a concept full screen with its close; six concepts sketched for what none drew. *Decided since: white, with the black side bar and the blue-with-black-top as options.*
- <a id="u21"></a>**U21 — the close.** What two books share is in the manual; the manual's files renumbered to its index; no dead code left; the `.public` diff below. *Not reached: the renumbering and the diff carry over.*

*Order, risks and the plan's self-check stood here and are spent: the order ran as the milestones say; of the risks, "names hardening" fired and became the naming method, "words in his voice he has not said" fired in the H answer's "Yes, and" and was cut; the self-check passed before the work.*

## Where things stand

**Next: `/ce-brainstorm` for Sprint 101 — expected subject, his to set: the build to the decided designs, from each concept's HTML read whole, the frame first since it is on every screen.** *Before the brainstorm, read the five things listed at the foot; nothing is built from this chapter's older sections.*

**The decisions, by number, all his, recorded verbatim in [The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx), 2026-10-06.** **The frame on every screen:** a top bar with a side bar on most — 15/16 and 23 — *"we have to support all of these easily because we will be augmenting the color palette"*; the bar, the side bar and the logo colours configurable — 26 white-over-black and 27 black-over-black are two settings, not a choice; the dark side bar the default; each book its own colour; *"we don't know how to integrate the top with the dark sidebar yet"* was answered by 26 and 27. **The library:** 1, the shelf, *"with support for things that feel more like 2 and 3."* **The manual:** 6 read two ways, 28 code in front and 31 words in front — *"make a nice transition between the code view and the writing view if it can be made expressed annotatively and elegantly. I would say that all writing in the code view is different, with a much smaller synopsis."* **The story:** 29 — *"nice"* — 25's sheet under the top bar, the chapters down the side bar, the papers above, the turn at the foot. **The design book:** white, with the black side bar and the blue-with-black-top as options. **The projects' catalogue** stays 9 in the frame; **a conversation** 23. *Never one or the other recommended by me: "I'm not even sure why you would recommend one. That's not a standard for anything."*

**His rulings of the close, verbatim, each already in its room.** *"What is the type of design that you are using to decorate the library page? Is that really what a library looks like? Maybe think about what these designs are, and name them accordingly."* — a theme is a tone, [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md#a-theme-is-a-tone). *"Don't look at the photos. Look at the html of the designs that were decided on, and then look at the photos of them."* · *"If you have been working from photos and not html, you have been trying to create something that could have been created far more accurately because we literally designed in HTML."* — [The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md). *"Every concept used to be numbered and we spoke in terms of the numbers."* · *"The numbers are dangerous because then you have some trouble displaying similar ones together. It is a brittle design, do try to label the themes based on what they are and not what their number is."* · *"you can always sketch in html in the design book when doing UI work to save yourself time, rather than going right to .public."* — [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md#sketch-first). *"There are no pages! There are chapters… Have a more specific book order a certain set of chapters by type."* · *"Make an annotation to do it. You are reaching for framework changes when you have a completely expressive system."* · *"You don't subclass to get plumbing. You subclass semantically."* — [nouns and annotations](../the-coding-style/09-how-a-thing-is-named.md#nouns-and-annotations--when-a-thing-is-new-and-when-it-is-said-of-a-writing).

**State, split honestly.**

- **Complete.** The design book usable for deciding: opens on *Every Concept*; every card numbered by `$Concept.note()`; a press opens a concept full screen beside the index, title first, with its `×` written as `$[[ × ]]( ./Every Concept )` and said to be its `Close`; thirty-one concepts, 26 to 31 sketched 2026-10-06 under *Sketched to Decide*; the deciding chapter with every answer verbatim. The four books built as the milestones say, the manual and the story to their files' values. His name out of the code: `$LibraryBook`, `$LibraryBookTheme`, `$Library`, `$Story`, `$Design`, `$ReferenceManual`. Appendix chapters `oN-`, the binder's one change. The semantic map, the naming method with its tone rule, the protocol's sketch-first section, Solutions 103 and 104, the workflow's third run.
- **In progress.** Nothing; every file is committed and pushed — dougs-library `acbc277` and after.
- **Not started — the next sprint's.** The frame built from the frame file, `3-every-concept~020.html`, as one layout Format per `data-layout` and one theme per tone, the bar, side and logo colours as fields; the catalogue rebuilt as 1; the manual as 28/31 with the transition; the story as 29; the design book in the frame; the themes renamed for their tones and the library's palette made the base's. Then the `~` rule for the binder: *"standardize the ~ in resources and make them mandatory, so that files with a ~ are excluded and everything else needs to be a chapter or else there is an error"* — which renames the test library's `.code.tsx` resources. The manual's files renumbered to its index ([U21](#u21)).

**Blockers, each with what it waits on.** **The `.public` diff below** — approved by him in a question, *"Apply all three and test"*, and not applied: it waits on being applied, tested, and shown. **The story's opening paragraph** is still found by position; it is to be *First*, an annotation said in each chapter — waits on nothing but doing. **`$Layout` duplicates `Paginated`**, `chapters` reads `pd-canonical`, `(this.book as $LibraryBook)` is cast in three places, `BookLink` sets its book at `$Bound` — each a strain to design with `.public` open before the rebuild, not during it.

**Verification.** His library binds: **5 pages proved**, every reference resolving, at the last bind of 2026-10-06. On the built site in a headless browser: a press on a card changes the address to the concept's, the section gains `pa-open`, the desk photograph is 976 pixels wide, the card's own scroll is 28; a press on `×` returns the address to `#every-concept` and no card is open; zero page errors. The camera: thirty-one concepts photographed at a desk and on a phone. Binder typecheck 0, unit 151 of 151 at the `o` change; nothing under `library/.public/package` or chemistry changed since.

**For `.public` and chemistry — one change in three parts, drafted by a reviewer that wrote nothing, approved by him, not applied.** *His words: "Fix this, but bear in mind that we don't always want the router to scroll… we should be able to support many different ways of showing chapters and not all of them would scroll."* **So the router only says where, and the book goes there after it has drawn.**

1. **Chemistry, one line** — `library/chemistry/package/src/abstraction/reaction.ts`, in `react()`: a drawn chemical that reacts is put back at `render` until it is drawn again, so `next('layout')` asked after a write waits for that draw.
    ```diff
    -        if (update) update();
    +        if (!update) return;
    +        if (chemical[$phase$] === 'effect') chemical[$phase$] = 'render';
    +        update();
    ```
2. **The book, `src/libraries/Book.tsx`** — the bookmark's setter turns after the draw; the turn at mount goes.
    ```diff
         set $bookmark(value: string | undefined) {
             if (value === this._bookmark) return;
             this._bookmark = value;
    -        this.turn();
    +        void this[next]('mount').then(() => this[next]('layout')).then(() => this.turn());
         }
    …
             this.$Bound();
    -        void this[next]('mount').then(() => this.turn());
    ```
3. **The router, `.binding/application/main.tsx`** — one line goes, and it no longer scrolls for any book.
    ```diff
         book.$bookmark = bookmarkOf(location);
    -    if (location.hash !== '') document.getElementById(location.hash.slice(1))?.scrollIntoView();
    ```

*With it, one promise of `book.test.tsx` waits for the turn it now gets a moment later, and two are written: a paged book told a new bookmark turns once the page it names is open; a chemical just written to answers `next('layout')` after its redraw. Risks as drafted: nothing was run; no caller in the repository asks `next('layout')` after a write. **Refused, and not to be raised again:** an address for a page kept beside a chapter.*

**Wrong turns, kept.** **A matching of designs to books that was the record's reading and not his** — *"You hallucinated the matching per book"*; the catalogue built as 19. **Building from photographs where the HTML was the design.** **A theme named for the book it dresses.** **A number written into a heading's text** ([Solutions 103](../solutions/103-the-heading-that-took-a-number.md)). **A card looked at by its address and never pressed** ([Solutions 104](../solutions/104-the-card-that-opened-out-of-sight.md)). **Classes named for what they did, then from a dictionary** — [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md). **A top bar as a subclass of the cover.** **The layout done outside the book**, reported as three defects of `.public`. **A sketch held as text to be drawn live, and an address pitched for it.** **An object model written long before a design was on the screen.** **A class that extended Synopsis to borrow its code.** **Three methods named for a member the class already had** — `npx tsc --noEmit` in `.me/..public/.binding` names such a thing. **A heredoc in a shell command, which hung** — files come from the Write tool. **A `&` in a sed replacement, which inserted the match.**

**To see it.** `http://localhost:4242/dougs-design/` — opens on the cards; press any, then its `×`; *The Designs I Am Going With* first in the index. `http://localhost:4242/dougs-reference-manual/`, `/dougs-library/`, `/dougs-story/` as built to the superseded matching. The preview is `npx vite preview --port 4242 --strictPort` in `.me/..public/.binding`; a bind is `npm run bind` there; a sketch is photographed with `node .me/.design/o3-the-camera~camera.mjs`.

**To read first** — *a start and not a boundary, shaped for a brainstorm.*

1. **[The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx)** — every decision in his words, by number; what each book is to be.
2. **[The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md)** — the map from the files' regions to the library's parts; the four attributes of the frame; what is *not built*.
3. **`.me/.design/3-every-concept~020.html`**, whole — the one file that is every frame; and `~001.html`, `~028.html`, `~031.html`, `~029.html` for the four books.
4. **[How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md)** — what a type of book is made of, the checks, and what the four builds found.
5. **[How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md)** and [the protocol's sketch-first section](../writing-a-book/01-02-how-a-library-is-developed.md#sketch-first) — before the first class and the first sketch.
