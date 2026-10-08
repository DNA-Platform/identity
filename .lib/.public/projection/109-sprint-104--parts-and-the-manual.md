# Sprint 104: Parts and the Manual

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **requirements-only, approved 2026-10-08** in the room, all four sections at once, after a brainstorm of four questions on his opening: *"how we might have a chapter type (as an annotation) for an entry in a reference manual, and for books in my library, perhaps the base class book would know how to treat them separate so that they could be exposed with a reference manual view?"*
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow).
- ***The title is a PROXY. The names Part and Manual are his; the type of book's name and every file and class under them are the plan's, found through [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md) and never run by him.***

---

## Where this sprint comes from

**[Sprint 103](108-sprint-103--the-manuals-page.md) left the appendix view design owed** — its U5, the catalogue's built view in the manual's look, denied files until the sharing was designed with him. He opened this one from a wider place, at the catchup: *"I want to imagine providing an appendix that might be or have elements of a reference manual, as almost all books might end up with an appendix for the components used to generate them - almost like the genome of the book."* The genome is his likeness for the annotation system — *"each annotation confers a phenotype"* — and it stays a likeness; nothing here is named for it.

**What the catchup found standing.** Every book of his already ends its table of contents in a section said to be the appendix, headed *How this book is built*, listing its machinery; the base book reads those sections for the chapters it keeps out of its pages, and the layout puts a built class on the book when the open chapter is one of them. The manual's door re-exports every tool and the other books import from it. The Key is the pattern once: a door chapter, entries that say so by a reference the binder checks, a section of the table that folds them. And Part is E31 of the Genesis, *"Part is the Book that goes in a book, for nested tables of contents"*, out of scope since [Sprint 82](88-sprint-82--chapter-and-book.md) on *"The core alone"*.

## His rulings, verbatim and in order

1. **The view.** *"It would be a view for a collection of chapters. Presumably the book would have to support this mode, but for those chapters, we might imagine that they can declare themselves in some reference manual, by name, and then the table of contents knows how to surface the reference manuals, and then in each reference manual, only a fraction of the table of contents tree is showing for the chapters in the manual… We need to plan it, and ideally, it would be very annotative, and the same table of contents is present for the reference manuals, it just knows how to adapt to a context. Can we imagine this? I don't know if it is different views but it sure could be."*
2. **The part.** *"A section in the table of contents, and perhaps all chapters be annotated with a `<Part>` annotation specifying parts of the book, with a name that says what part they are in. And the table of contents knows how to organize itself into parts. For manual chapters or reference chapters or whatever elegant name you come up with, the part with give cohesion to the manual."*
3. **The trait.** *"On the chapter. It is a trait that specifies a type of chapter. And then, if convenient, one can wrap that trait in a chapter type, but that is harder to adapt. I would say keep it at the trait level. In fact, a Manual can be a type of Part! So it is a specialization of an annotation but it can be done with inheritance."*
4. **The look.** *"Yes a format the trait brings, though we want the manual and this to be the same code. We duplicate nothing. Perhaps the reference manual is just a book where everything is in one reference manual, with maybe some special classes to help with the case where everything is one. Does that make sense? This shouldn't be two things."*

**Two earlier rulings fix where the drawing lives, and were cited before any approach was offered:** *"The purpose of a book is layout"* and *"Why would the annotations a chapter has affect what a book decides to do with it in its view?"* — [How a Book Is Built](../writing-a-book/00-02-how-a-book-is-built.md). So the base book reads the trait and draws; a part never draws.

## Requirements

### 1 · The part

- <a id="r1"></a>**R1. A chapter says which part it is in** by one line at its head: an annotation whose content is a reference to the section of its book's table of contents headed with the part's name. A chapter that says no part is in the book's body. *Observed: the line in the chapter file, and the chapter listed under that section.*
- <a id="r2"></a>**R2. A part is a section of the table**, and a part's own sections are its groups. The index says at bind which sections are parts, from what the chapters declare, and its rows stay entries. *Observed: the manual's seven groups under one part; the design book's one part with six rows.*
- <a id="r3"></a>**R3. The binder holds the chapter and the table to agree.** A part that names no section is refused as any reference is; a chapter listed under a section other than the part it says is refused by a rule on the book, in a sentence a librarian could say. *Observed: move a chapter's row to another section and the bind fails with that sentence; move it back and the bind is clean.*

### 2 · The manual

- <a id="r4"></a>**R4. A manual is a type of part**, said of a chapter by inheritance: the one line names the part and says the part is a manual. No subclass of chapter anywhere. *Observed: `chapter.is` answers both the part and the manual.*
- <a id="r5"></a>**R5. The base book draws a manual chapter the manual's way** when it is open: its words beside its files, the three readings, the file tabs, the options, the rail and the grip, in the book's own tone. The book's pages are its chapters that are not in a manual, so the turn and the folio never count them. *Observed: in the design book, The Frame opened shows its three files as tabs and takes the split on a press, measured by the grid's columns as Sprint 103 measured them, in rose on white.*
- <a id="r6"></a>**R6. The look is a Format the trait brings**: the spread's grid with the tree, rail, files and code rules, said of the book that holds a manual chapter, reading that book's theme values. *Observed: no manual rule copied in any book's theme, and the bookshelf's built part gone.*
- <a id="r7"></a>**R7. The reference manual is a book whose every chapter is in one manual, and nothing is duplicated.** Its class keeps only the all-in-one case: which chapter opens when none is named, the readings on by default, the light tone, the entry that shows a file's type. *Observed: the manual's page on 4242 measures the same forty properties as before the sprint, and its class is its defaults and its registrations.*

### 3 · The table in context

- <a id="r8"></a>**R8. One table, adapting.** When the open chapter is in a manual, that part stands first and whole in the side bar as a tree, its groups as folders and a chapter's files as presses under its row, and the other parts step aside. When the open chapter is a page, the table stands as the book's design has it, the appendix section at the foot. *Observed: in the catalogue, pressing The Catalogue puts its part first and dims the shelf's rows; pressing a book's row brings the shelf back.*
- <a id="r9"></a>**R9. The appendix stays a trait of the table's section**, saying where it stands and in what voice, one job; whether its chapters are a manual is the chapters' own saying. *Observed: the manual's Key folded under its part, no appendix on it; the design book's appendix at the foot, its chapters manuals.*

### 4 · Seen

**What you will look at to sign the sprint off, and what a hand-made page cannot fake:** <a id="ae1"></a>**AE1** the design book's The Frame, opened on 4242, drawn with its three files as tabs and taking the split on a press, in the design book's tone, from one line in its file. <a id="ae2"></a>**AE2** a chapter misfiled in its table refused by the bind with a sentence, and the bind clean when it is put back. <a id="ae3"></a>**AE3** the catalogue's The Catalogue opened the same way, the bookshelf's hand-copied built rules deleted. <a id="ae4"></a>**AE4** the reference manual's page unchanged to the audit's forty properties. <a id="ae5"></a>**AE5** the story's The Sheet opened the same way, on the story's paper.

**Actors.** <a id="a1"></a>**A1** the author of a chapter, who writes one line and lists the chapter under its part. <a id="a2"></a>**A2** the reader, who opens a manual chapter from a page and presses its readings. <a id="a3"></a>**A3** the binder, which refuses.

**Flows.** <a id="f1"></a>**F1** A tool is added to the design book: a chapter written with the manual line at its head and its files beside it, a row under the part's section, a bind, and the chapter drawn the manual's way. <a id="f2"></a>**F2** A reader on a page of the story presses The Sheet in the appendix: the table puts the part first, the leaf is the manual's, words forward; a press on split shows the file; a press on a page's row brings the table back. <a id="f3"></a>**F3** A chapter's row is moved to the wrong section: the bind names the chapter and the part in one sentence.

## What this leaves alone

The Key's word, owed from Sprint 103; the press cost pitched to chemistry and to the package; the file presses under a chapter's title; the whole folder row as one press; parts nested deeper than a part's groups; and the marks of the Key on another book's manual chapters, since the Key is the manual's.

## A sketch of the mechanism — brainstorm-level, the plan decides

```tsx
// at the head of a chapter of the design book
<Manual>$[[ ./How this book is built ]]</Manual>
```

- **The part** is an annotation whose content is a reference; its section is the table's section whose heading means it, as a section is mentioned through its heading since [Sprint 85](91-sprint-85--headings-and-routes.md). **The manual** extends it.
- **The index**, which says entry of every row at bind, says of every section a chapter names that it is a part; the folder the manual says of each section today is the same saying, or stands beside it.
- **The base book** reads the trait: its pages are the chapters not in a manual; its leaves draw a manual chapter with the manual's leaf, which moves from the manual's class to the base; its bound stands the manual's Format on the book when any chapter is a manual; the layout's built class says the open chapter is in a manual, with the plan's name.
- **The Format** is the spread as it stands, with the manual theme's parts — tree, icons, words, rail, grip, files, code, small — joined to it, reading values by name from whichever theme the book has. The manual's own values stay the manual's theme's.
- **The reference manual's class** keeps the all-in-one case and its registrations; its door stays one line.
- **The binder** checks the reference as any reference, and a rule on the book checks that the part's section leads to the chapter.

**Two risks the plan must carry.** A section headed with a part's name and a chapter titled the same wore one id in [Solutions 107](../solutions/107-the-heading-worn-twice-on-one-page.md). A Format's rule and a tone's rule at equal weight lose to sheet order, [Solutions 109](../solutions/109-the-fold-that-lost-to-the-books-prefix.md), so the Format's rules say the book first from their first line.

## Where things stand

**Next: `/ce-plan` on this chapter.** The requirements above are approved; the plan names the decisions, the units, the files, the scenarios and the risks, and finds the names. Read first, each for what is load-bearing: [The Manual's code](../../../../.me/.manual/10-the-manual~code.tsx) for what moves to the base and what stays; [The Entry's code](../../../../.me/.manual/14-the-entry~code.tsx) for the index, the appendix and the folder as they are said at bind; [the bookshelf's theme](../../../../.me/.manual/20-the-bookshelf~theme.tsx) for the built part the Format replaces; [Paginated](../library/08-paginated.md) for pages and open as overridable; [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md) before any name. To see the site: `npx vite preview --port 4242 --strictPort` in `.me/..public/.binding`, then `/dougs-design/#the-frame` for the chapter the first acceptance example names; the workbench is `node .me/.manual/6-developing-a-library~workbench.mjs` on 5173. Nothing is built.
