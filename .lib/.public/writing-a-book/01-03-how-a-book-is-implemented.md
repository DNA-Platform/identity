# How a Book Is Implemented

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***NOTES, begun 2026-10-05 on Doug's words: "We need to get to design. You are starting to fill up a library and that library doesn't have code yet. We need to go to the design and implement it… we will start writing down notes on how to implement books in a library." He leads this subject and teaches it; what he says is written here as he says it, and [the frame](#frame) is his. [How a Library Is Designed](01-01-how-a-library-is-designed.md) says what a design is; [How a Library Is Developed](01-02-how-a-library-is-developed.md) says how to work; this says how a design becomes reusable parts of a library. The chapter's name is a PROXY.***

---

## <a id="frame"></a>The frame he set

*Doug, 2026-10-05, on reading the first form of these notes, which had called his design book built and drawn their examples from its code. Whole, since it is the brief for everything below.*

> **"We have not implemented any code yet for my library. What was written was enough to get .design up and running. Consider none of it right. Consider all of it being rewritten. We are working from the designs, but we are going to talk about how to implement reusable components, and where to put them in the library."**
>
> **"I will teach you how to use annotations and types to mark up different kinds of chapters, and to collect them so that we can support different kinds of layouts in the book base classes that we use. We can use annotations to protect the semantic structure of the content, so that we have the power to restyle it easily with $is, and to use the annotation system to apply formatting or expose data or do all sorts of useful things. We can talk about building components to accompany our base classes that consume and expose certain properties by navigating the composition."**
>
> **"We will have a mind for structure and semantics, letting the book design guide us, and genuinely wonder how we will render a cover in different ways, or how to reinterpret a table of contents as another application experience, or what to put in a synopsis and whether it should be parenthetical. We will use those designs but we will see them through the lens of books in a library. We should not find this design restrictive at all."**

*And the hour after, setting the work and then the sprint that is to do it — [Sprint 100](../projection/105-sprint-100--the-big-plan.md):*

> **"Well this is where you need to look at your designs and decide what structure is common across them versus what is local to a specific book. Try to imagine where the chapters go, and therefore, what the different types of chapters are - and we can create annotations for the different types of chapters to help our base book organize them. This will give our base books much more power to place and render books as they want. The different chapter types can come with classes and formats. Come up with a plan for which design or designs will go with each book - and where I note that I like two versions we might provide toggles to switch between different ways of showing the same data."**
>
> **"Is it pretty clear which code is general and deserves to be in the reference manual? Remember that the reference manual is one of the things that needs style. Things that are more local can get catalogued in the appendix, which might also be given a view similar to a reference manual. But we want to make sure to keep the more general things scoped to the right place. We can possibly create reference manuals that, in addition to having their code, also catalogue other reference manuals, so that you can move back and forth between a subject of reference manuals if needed."**
>
> **"…a big plan that includes the different designs, which books will have them - and be sure to put this in the design book! And then common themes across them, and what sort of classes, annotations, and components you will create to make it more like the chapters are modular plugins provided to a book, and the book chooses how to work with them in specific ways, while also managing to be a sensible document of their own in linear order."**

*And his first correction of the reading, which had asked whether a manual that catalogues manuals is two things at once:*

> **"Something does not need to JUST be a catalogue. I would argue that a reference manual that catalogues reference manuals is still a reference manual. Can we design a combination reference manual that can have others, so that we don't need to split everything up to create a new reference manual, we can just make new ones as needed and extend the current ones to catalogue them."**

**So cataloguing is not a kind of book.** It is what any book does for the books filed under it: a chapter that stands for each, and an answer for each in its table, beside whatever chapters of its own it has. *The Binder already holds it — the test library's Libby has chapters of her own and answers for the persona filed under her. The plan carries no base book that is only a catalogue — [D10](../projection/105-sprint-100--the-big-plan.md#d10).*

**The sentence the plan is held to is the last one, and it has two halves:** a chapter is a plugin a book is given, and the book chooses what to do with it; and the book, read in the order its chapters are written, is still a sensible document with nothing choosing. *The plan itself is written in his design book, and the team's first reading of it is in [the sprint's chapter](../projection/105-sprint-100--the-big-plan.md#a-first-reading--what-the-plan-is-expected-to-say).*

**The first sketches, and what they found.** *The same day he set the work going — "work on everything at once, in sketching fashion… keep grading yourself" — and all four standing books were sketched from shared parts in his manual. What reads as natural, the ten fights, and what the designs still ask for are [the grade](../projection/105-sprint-100--the-big-plan.md#grade). The one that changes how a library is written: **a theme given through `$is` provides only inside itself, so a frame is a mark and its rules are a part of the theme.***

**What follows from it, for these notes and for the work.**

- **No code in his library is a model.** The classes in `.me/.design` and `.me/.manual` got a design book standing so the designs could be chosen. They are read as what was tried and never as how it is done, and all of it is to be rewritten.
- **The unit of the work is a reusable part and its place in the library,** not a book's page: a kind of chapter; a base class of book that collects the kinds it knows and lays them out; a component that goes with a base class.
- **The semantics come first and the look is said of them.** Content is marked for what it *is*, so that the same content can be restyled from outside through `$is` without being rewritten.
- **The designs are material.** Each is read for what it shows of a cover, a table of contents, a synopsis and the chapters, *through the lens of books in a library*, and none is a layout to transcribe.

## <a id="subjects"></a>The subjects of the talk, as he named them

*Each is his phrase. What he teaches of it is written under it; what stands there now is only what the reading found.*

1. **Reusable components, and where to put them in the library.**
2. **Annotations and types that mark up different kinds of chapters, and collecting them** so that the book base classes support different layouts.
3. **Annotations protecting the semantic structure of the content,** so it is restyled with `$is`; and the annotation system used to apply formatting, to expose data, and *"all sorts of useful things."*
4. **Components that accompany the base classes,** consuming and exposing properties by navigating the composition.
5. **The three wonderings:** how a cover is rendered in different ways; how a table of contents is reinterpreted as another application experience; what goes in a synopsis, and whether it is parenthetical.

### What his chosen designs already show of the three — ours, read off the photographs

*Offered as material for the fifth subject, and his to correct. The numbers are the concepts in his design book.*

**A cover, rendered four ways.** A cover says a title, an author, a subject and what the book is about. In **19** the black bar is the library's cover laid across the top, its title at the left and its author at the right; the sky bar under it is the open subject's cover, its title and *filed under* its subject. On the shelf of **1** a book's cover is a coloured board with its title and who it was kept with. At the head of the sheet in **25** it is one running line, *Dougs Story · by The Librarian*.

**A table of contents, as five experiences.** In **19** the library's table is the row of subjects in the top bar and the open subject's is the list at the left, *holds 3 projects*; the shelf beside it is that same table with each entry shown as a cover. In **23** it is the rail, *holds 8 chapters*. In **6** it is a tree whose leaves are files. In **9** it is the rows of a table with columns.

**A synopsis, shown or not.** In **1** and **19** the card that says *Continue* is one book's synopsis shown large. In **6** the paragraph under a part's title is that chapter's. On the sheet of **25** none shows at all.

## <a id="where"></a>Which design is for which book

*The seven books he chose a design for in [Sprint 98](../projection/103-sprint-98--dougs-design.md#r36).*

| | the book | its folder | the design | what stands today |
|---|---|---|---|---|
| 1 | **the library's catalogue**, *Dougs Library* | `.me/..reference/` | the shelf of **1** under the black and sky bars of **19**, the view switching among **1**, **2** and **3** | its chapters and its table, on the scaffold |
| 2 | **the reference manual**, *Dougs Reference Manual* | `.me/.manual/` | the words beside the file as in **6**, a part alone on the bench as in **8**, a toggle between code forward and words forward | its chapters, on the scaffold |
| 3 | **the design book**, *Dougs Design* | `.me/.design/` | light and airy, with a toggle between a library mode and a gallery mode | its chapters and the concepts, held up by code that is to be rewritten |
| 4 | **his autobiography**, *Dougs Story* | `.me/.librarian/` | the reading view of **25**: one typeset sheet, a chapter at a time, likely under a dark bar; papers *book*, *night* and *white*; a view by recency | four dated chapters, on the scaffold |
| 5 | **the Claude project catalogue** | no book yet | the table of **9** under the white and opal bars of **20**, with a splash of the Claude theme | nothing |
| 6 | **a project's conversation catalogue** | no book yet | a multi-view beginning as a plain list downward; views by recency and by size; each conversation's synopsis; not drawn | nothing; *"we will have to build the importer"* |
| 7 | **a Claude conversation** | no book yet | **23**: the conversation in the black side bar, in the form of the application it comes from | nothing |

**Four books stand as writing. None wears its design, and no code in them is kept as right.** His chapter [The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx) says of each that it *"does not wear it yet"*.

## <a id="given"></a>What `.public` gives, as read

*Each is a mechanism read in the framework's code or its chapter on 2026-10-05, with where it is promised. Where one can be read working it is in the test library, which is the team's; his own library's code is not a model — [the frame](#frame). This is what the reading found before the teaching, and the teaching corrects it. Doug, 2026-09-27, in [Book](../library/05-book.md#how-it-is-extended): "implementing books is largely about how to display the chapters. You implement various types of chapters through direct types or annotations, and use them in Book… A book can't be limited in how its chapters are displayed and .public gives its authors the ability to subclass Book and do sophisticated usecases."*

| | the mechanism | where it is written | where it can be read working |
|---|---|---|---|
| 1 | **A class under Book.** Its `write()` draws what is layout and not a chapter, each drawn part given the cover as its chapter. *Every book has a class of its own wherever anything is registered on a class.* | [Book](../library/05-book.md#how-it-is-extended) | the test library's `$TheLibrary` and its manual's door |
| 2 | **A chapter is a kind by what it carries**, an annotation or a type, and a book asks by `is`, never by position. | [Book](../library/05-book.md#the-app-like-book-analysed-in-full), the app-like book in about seventy lines | the test manual's `Appendix` mark |
| 3 | **Which chapters are pages, and which one is open**: a class under Paginated overriding `pages` and `open`, reading the book's `bookmark`. The router sets the bookmark and never decides what is visible. | [Paginated](../library/08-paginated.md) | the test manual's `$Tabbed` |
| 4 | **A Format said of the book** carries a frame: a grid keyed on the marks, with no element added. | [Format and Theme](../writing/11-format-and-theme.md) | the test manual's `$Explorer` |
| 5 | **A book's own cover, synopsis and table** are subclasses exported from its door under the framework's names. | [The Development Policies](07-the-development-policies.md), policy 3 | the test manual's `7-the-explorer.chapters.tsx` |
| 6 | **A theme is fields and parts, registered on a book's class.** A field written while the book is drawn reaches every rule beneath it. | [The Development Policies](07-the-development-policies.md#4--a-theme-is-properties-every-template-reads-them-through-the-provider-in-one-form); promised in [`theme.test.tsx`](../../package/.tests/theme.test.tsx) | the test library's theme, and Libby's dark one |
| 7 | **A switch from outside is one door:** `writing.$is = Something`, and `writing.$is = []` to take it back. It round-trips; a theme given this way replaces the book's at one paint. | [The Annotation System](../writing/07-the-annotation-system.md); promised for a theme, a format and Paginated in the package's suite | **nowhere: no book in either library switches anything from a control** |
| 8 | **An annotation does one thing to what it is said of**: a class, a layer, a value, a note; and it may expose what it holds, as a date exposes its day. *One annotation, one property.* | [The Annotation System](../writing/07-the-annotation-system.md); [Developing an Annotation](../writing/10-developing-an-annotation.md) | the framework's own, in `src/writing` and `src/libraries` |
| 9 | **A writing reaches its book, and a book exposes its cover, synopsis and table** and what its cover says, so a part navigates the composition and reads. | [Book](../library/05-book.md); [Books in Annotations](../library/01-books-in-annotations.md) | the test library's byline and tabs |
| 10 | **The table of contents is what lists**, held complete by the Binder: every chapter of the book and every book of its subject. | [the link aggregator](01-01-how-a-library-is-designed.md#the-link-aggregator); [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md) | every table in both libraries |
| 11 | **The code that builds a book lives in the book**: a chapter says what a part is and prints the file beside it. | [How to Be a Librarian](05-how-to-be-a-librarian.md); Sprint 98's [R44](../projection/103-sprint-98--dougs-design.md#r44) | the test library's manual |

## <a id="asked"></a>What the designs ask for that nothing gives yet

*Read off the chosen concepts element by element, by the question of [How a Library Is Designed](01-01-how-a-library-is-designed.md): which thing in the library is this?*

- **A view switched on the page.** Four of the seven designs have one. *The door exists and is promised (7, above); no control has been built on it, and where a reader's choice is kept is not settled.* His words: *"Dynamic view change is proof that we are coding the semantics and annotating the semantic structure with what is necessary for the view."*
- **What stands for a book above its name.** The shelf of **1** shows each book as a cover with a colour and a date. Those are said on that book's own cover and do not reach its catalogue's page.
- **The library's bar on every book's page.** In **19** the upper bar is the library's cover and table, on a page that is another book's.
- **The reverse of a reference.** *Cited from outside* in **19**, *where it is used* in **6**, *cited in* in **9**, *cited by* in **23**.
- **A count, and the chain upward.** *3 projects*, *212 books*, *chapter 1 of 8*; *filed under Dougs Library*, and the breadcrumb of **23**.
- **An order over chapters.** By recency for the story; by recency and by size for a project's conversations.
- **What is the reader's and in no book.** *Continue*, a favourite, a note of mine, the question typed in **2**.

*The second through the fifth are things the Binder knows while it runs and does not hand to a page; each is a change to `.public`, his to rule.*

## <a id="found"></a>Found while reading

- **Two of the four books have no class.** The doors of his catalogue and his story hand on the library's class, so nothing can be said of either alone.
- **Pictures beside a chapter do not show on the live site.** Measured 2026-10-05: a concept's photograph is `image/png` on the built site and the page's own shell on the live one, since the bind's render phase is what copies it. *A page that shows pictures is looked at `built`.* Added to [the table of what reaches the open page](01-02-how-a-library-is-developed.md#hot).

## <a id="ours"></a>Ours, to raise when the talk reaches them

1. **What a shelf shows of a book**: only what the catalogue says of it, its name and its synopsis, or what that book's own cover says.
2. **Where a reader's choice is kept** — a view, a paper, a mode — and whether it holds from one page to the next.

**Names.** Doug's: *view*, *implement a book*, *reusable components*, *book base classes*, *navigating the composition*, *library mode* and *gallery mode*. Ours, flagged: this chapter's title; *the scaffold* for the cream theme every book wears now.
