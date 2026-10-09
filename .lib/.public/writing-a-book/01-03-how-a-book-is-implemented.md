# How a Book Is Implemented

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***NOTES, begun 2026-10-05 and compacted 2026-10-06 to his words and his three corrections, on Doug's words: "We need to get to design. You are starting to fill up a library and that library doesn't have code yet. We need to go to the design and implement it… we will start writing down notes on how to implement books in a library." He leads this subject and teaches it; what he says is written here as he says it, and [the frame](#frame) is his. [How a Library Is Designed](01-01-how-a-library-is-designed.md) says what a design is; [How a Library Is Developed](01-02-how-a-library-is-developed.md) says how to work; this says how a design becomes reusable parts of a library. The chapter's name is a PROXY.***

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

*And that evening, after the corrections [below](#corrected) and a rebuild that still broke the written policies — the word that sets the path from here:*

> **"I want you to consider everything in my library has dead test code. We hadn't even had designs. There was no thought. Harvest that code for clues on what you need documented to be able to build a real library. And then review the /ce-plan I want to see an implementation of the library catalogue, the reference manual, the design book and my autobiography - four books with four very different looks. And I think if you look at them structurally, you'll see a lot of similarities and differences that can be reflected in a structural annotation-based system."**
>
> **"I recommend that you try to use annotations to make components - a format is an annotation is that like a styled component, but it can also be used to select things. Perhaps use components when you have a collection like a certain type of chapter, trying your best - like with css classes - to have a book-like structure in the semantics of the chapters, and yet have it come together in more of an app view."**
>
> **"Show me a todo list of accomplishable and milestones along this path, so we can begin to chip away and make progress."**

**What that says, read plainly — ours, and his to correct.** *Every class in `.me` is dead: read once for what it shows must be written down, and never built on.* **A type of chapter is an annotation, and an annotation is how a component is made:** a Format carries a styled component, so saying it of a chapter gives that chapter its look *and* gives the book a way to pick it out — `chapter.is(…)` in code, its CSS class in a rule. **A collection of chapters of one type is what a component is for:** the book collects them by their annotation and hands them to something that draws the collection. **The chapters keep a book's own structure and words; the app is what the book's layout makes of them.** *The path is [Sprint 100's](../projection/105-sprint-100--the-big-plan.md#the-path).*

**So cataloguing is not a type of book.** It is what any book does for the books filed under it: a chapter that stands for each, and an answer for each in its table, beside whatever chapters of its own it has. *The Binder already holds it — the test library's Libby has chapters of her own and answers for the persona filed under her. The plan carries no base book that is only a catalogue — [D10](../projection/105-sprint-100--the-big-plan.md#d10).*

**The sentence the plan is held to is the last one, and it has two halves:** a chapter is a plugin a book is given, and the book chooses what to do with it; and the book, read in the order its chapters are written, is still a sensible document with nothing choosing. *The plan itself is written in his design book, and the team's first reading of it is in [the sprint's chapter](../projection/105-sprint-100--the-big-plan.md#a-first-reading--what-the-plan-is-expected-to-say).*

**The first sketches, and what they found.** *The same day he set the work going — "work on everything at once, in sketching fashion… keep grading yourself" — and all four standing books were sketched from shared parts in his manual. What reads as natural, what was fought, and what the designs still ask for are [the grade](../projection/105-sprint-100--the-big-plan.md#grade). **The first three fights were ours and not the framework's, and he corrected each the same day — [below](#corrected).***

## <a id="corrected"></a>What he corrected first — 2026-10-05

*The first report listed, as defects of `.public`: a theme given through `$is` that "only provides inside itself"; a chapter that "cannot be placed by its book" while a Format wraps it; and `$is` being "never bound" and "the whole set". His answers, whole:*

> **"1. I don't understand this. Too lingo-y. A mark is not a technical word. Speak to a programmer"**
>
> **"2. Why would the annotations a chapter has affect what a book decides to do with it in its view? The purpose of a book is layout"**
>
> **"3. $is should have override semantics based on how annotations work. And it should be dynamic. Is it not?"**

**1 — said to a programmer, and it was our omission.** Every `$Format` wraps its writing's element in one more element, and several nest in the order their `defines()` run, the first innermost. A `$Theme` is a Format whose wrapper is the theme provider. The theme a book class registers runs last, so it is outermost; one assigned through `$is` runs first, so it wraps only `div.pd-book`, and a Format on the same book whose styled component reads `${({ theme }) => …}` is then outside any provider. **The framework already answers this: `themeProvider = true` on a Format hands it the book's current theme wherever it is nested** ([`Format.tsx`](../../package/src/writing/Format.tsx), promised in [`format-theme.test.tsx`](../../package/.tests/format-theme.test.tsx)). *Measured on his story the same hour: two Formats on the book with one rule each, one with the flag; through paper, night and white the one with the flag followed each theme's value and the other read none.* **Nothing is owed by `.public`, and the pitch is withdrawn.** *And the word: say "a CSS class an annotation adds", never "a mark", to him or in his library.*

**2 — a book that lays out is never in the way of what a chapter wraps itself in.** The sketch left `write()` to the base, which draws every chapter in file order, and placed them from the theme with a CSS grid on the book's children. A grid places direct children, and a chapter carrying `Cover` or `TableOfContents` is drawn inside the `header` or `nav` its Format adds — so the rule missed and `display: contents` was written on the wrapper. **That is the layout done outside the book.** His sentence is the one this library already holds from 2026-09-13, [The Book Is the Layout](../the-first-draft/05-the-book-is-the-layout.md#the-anchor): *"Book is layout. Chapters are logical parts,"* and *"There is a template method for each of the parts… The chapters go where put."* **Rebuilt the same day:** the library's book finds its chapters by what they are and draws its own lines through a method each; a class under it writes the layout, every part inside an element of the layout's own, with its rules in one styled component beside it. *Anything a book draws in `write()` is inside the provider whichever theme holds, so the first fight cannot arise there at all.*

**3 — yes to both.** What `$is` gives goes to the front, `defines()` runs from the front, and the one in front turns off those of its type behind it; `define()` runs again at every `view()`, so an assignment redraws. *What had been met was our own code:* an annotation that did its work in `$Bound()`, which runs once when the book is built, so one given later never did it — that work belongs in `defines()` and `erase()`; and a switch that removed the earlier choice from the list by hand, which override already does. *The switch now puts the pressed view in front and nothing else.*

**What follows from it, for these notes and for the work.**

- **No code in his library is a model.** The classes in `.me/.design` and `.me/.manual` got a design book standing so the designs could be chosen. They are read as what was tried and never as how it is done, and all of it is to be rewritten.
- **The unit of the work is a reusable part and its place in the library,** not a book's page: a type of chapter; a base class of book that collects the types it knows and lays them out; a component that goes with a base class.
- **The semantics come first and the look is said of them.** Content is marked for what it *is*, so that the same content can be restyled from outside through `$is` without being rewritten.
- **The designs are material.** Each is read for what it shows of a cover, a table of contents, a synopsis and the chapters, *through the lens of books in a library*, and none is a layout to transcribe.

## What the rest of these notes became

*Five sections stood here — the subjects of the talk as he named them, which design is for which book, what `.public` gives as read before the teaching, what the designs ask for that nothing gives yet, and two questions of ours — written before any book was built, and compacted 2026-10-06 at the close of Sprint 101, every one of them answered by building.* Which design is for which book is decided by number in his design book and recorded in [Sprint 101](../projection/106-sprint-101--the-design-into-the-semantics.md#where-things-stand); what the designs are made of is read off their own files in [The Domain of the Designs](01-06-the-domain-of-the-designs.md); what `.public` gives and what a book is built from is [How a Book Is Laid Out](01-04-how-a-book-is-laid-out.md); and what the designs still ask for that nothing gives is that chapter's open list. The two questions of ours — how a chapter's opening paragraph is said, and whether a book's chapters follow its files or its table — were answered the same way: an annotation said in the chapter, and the table.
