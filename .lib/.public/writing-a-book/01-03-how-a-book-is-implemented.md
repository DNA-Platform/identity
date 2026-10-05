# How a Book Is Implemented

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***NOTES, begun 2026-10-05 on Doug's words: "We need to get to design. You are starting to fill up a library and that library doesn't have code yet. We need to go to the design and implement it… we will start writing down notes on how to implement books in a library." He leads this subject, by his own word in the design sessions: "We will talk about how to implement a book, and you will find that you might want to do more structurally than you expect to support many different views. Many ways to view the same thing will be important." What follows was gathered by a catchup of thirty documents and is where that talk starts from; what he says is written into it as he says it. [How a Library Is Designed](01-01-how-a-library-is-designed.md) says what a design is; [How a Library Is Developed](01-02-how-a-library-is-developed.md) says how to work; this says how a design becomes a book's code. The chapter's name is a PROXY.***

---

## <a id="where"></a>Which design is implemented where

*The seven books he chose a design for in [Sprint 98](../projection/103-sprint-98--dougs-design.md#r36). The numbers are the concepts in his design book's chapter Every Concept; each concept stands beside it as a page and two photographs. A book's design is implemented in that book's own folder: its class in `.book.tsx`, its parts in files beside the chapters of its appendix, and the parts every book shares in his manual.*

| | the book | its folder, and its class today | the design | what stands today |
|---|---|---|---|---|
| 1 | **the library's catalogue**, *Dougs Library* | `.me/..reference/` — **no class of its own**; its door hands on the library's | the shelf of **1** under the black and sky bars of **19**, the view switching among **1**, **2** and **3** | the scaffold: cream, one column, a table of three names each with its square |
| 2 | **the reference manual**, *Dougs Reference Manual* | `.me/.manual/` — `$TheManual`, an empty class | the words beside the file as in **6**, a part alone on the bench as in **8**, a toggle between code forward and words forward | the scaffold: chapters down the page, each printing its file |
| 3 | **the design book**, *Dougs Design* | `.me/.design/` — `$DougsDesign`, **built**: a masthead, a rail, pages, a viewer, a theme | light and airy, with a toggle between a library mode and a gallery mode | a dark rail holding the table, a light page, one chapter open at a time; **no toggle** |
| 4 | **his autobiography**, *Dougs Story* | `.me/.librarian/` — **no class of its own** | the reading view of **25**: one typeset sheet, a chapter at a time, likely under a dark bar; papers *book*, *night* and *white*; a view by recency | the scaffold, four dated chapters down the page |
| 5 | **the Claude project catalogue** | no book yet | the table of **9** under the white and opal bars of **20**, with a splash of the Claude theme | nothing |
| 6 | **a project's conversation catalogue** | no book yet | a multi-view beginning as a plain list downward; views by recency and by size; each conversation's synopsis; not drawn | nothing; *"we will have to build the importer"* |
| 7 | **a Claude conversation** | no book yet | **23**: the conversation in the black side bar, in the form of the application it comes from | nothing |

**Four books stand and none wears its design; three wait on an importer.** His chapter [The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx) says of each standing book that it *"does not wear it yet"*, and is edited as each does.

## <a id="given"></a>What `.public` already gives for implementing a book

*Each is a mechanism read in the code or its chapter on 2026-10-05, with where it is promised and where a book already uses it. Doug, 2026-09-27, in [Book](../library/05-book.md#how-it-is-extended): "implementing books is largely about how to display the chapters. You implement various types of chapters through direct types or annotations, and use them in Book… A book can't be limited in how its chapters are displayed and .public gives its authors the ability to subclass Book and do sophisticated usecases."*

| | the mechanism | where it is written | a book that uses it today |
|---|---|---|---|
| 1 | **The book's own class**, under the library's. Its `write()` draws what is layout and not a chapter — a masthead, a byline, tabs — each given the cover as its chapter; its `turn()` is overridden where nothing scrolls. *Every book has a class of its own wherever anything is registered on a class.* | [Book](../library/05-book.md#how-it-is-extended) | `$DougsDesign`; the test library's manual |
| 2 | **Chapters are placed by what they carry**, never by position: a mark is a small class under Annotation or Format in the book's own files, putting a `pa-` class on what it is said of. | [Book](../library/05-book.md#the-app-like-book-analysed-in-full), the app-like book in about seventy lines | `Appendix`, `Entry`, `Concepts` in his design book |
| 3 | **Which chapters are pages, and which one is open**: a class under Paginated overriding `pages` and `open`, reading the book's `bookmark`. The router sets the bookmark and never decides what is visible. | [Paginated](../library/08-paginated.md) | `$Paged` in his design book; `$Tabbed` in the test manual |
| 4 | **The frame is a Format said of the book**: a grid keyed on the marks, with no element added. *The top bar is the cover and the side bar is the table of contents*, placed. | [How a Library Is Designed](01-01-how-a-library-is-designed.md#every-list-is-a-rank); [Format and Theme](../writing/11-format-and-theme.md) | `$Gallery`, the rail of his design book; `$Explorer` in the test manual |
| 5 | **A book's own cover, synopsis and table** are subclasses exported from its door under the framework's names. | [The Development Policies](07-the-development-policies.md), policy 3 | the test manual's `7-the-explorer.chapters.tsx` |
| 6 | **The theme is fields and parts, registered on the book's class.** A field written while the book is drawn reaches every rule beneath it. | [The Development Policies](07-the-development-policies.md#4--a-theme-is-properties-every-template-reads-them-through-the-provider-in-one-form); promised in [`theme.test.tsx`](../../package/.tests/theme.test.tsx) | `DougsTheme`, `DesignTheme` |
| 7 | **A switch from outside is one door:** `book.$is = Something`, and `book.$is = []` to take it back. It round-trips, and a theme given this way replaces the book's at one paint. | [The Annotation System](../writing/07-the-annotation-system.md); promised for a theme, a format and Paginated in the package's suite | **no book: nothing in either library switches anything from a control yet** |
| 8 | **A view reads the table of contents**, which the Binder holds complete: every chapter of the book and every book of its subject. A catalogue's own chapter stands in for each book filed under it, carrying that book's name and synopsis. | [the link aggregator](01-01-how-a-library-is-designed.md#the-link-aggregator); [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md) | his catalogue, written with the shelfmark |
| 9 | **The code that builds a book lives in the book**: an appendix chapter says what a part is and prints the file beside it. | [How to Be a Librarian](05-how-to-be-a-librarian.md); Sprint 98's [R44](../projection/103-sprint-98--dougs-design.md#r44) | his design book's chapters 90 to 94; his manual |

**The reference manual's design has an ancestor already built.** The test library's manual is an explorer in seven files beside one chapter: a paging class, a layout, a tree drawn on each entry of the table, tabs, an appendix mark, a theme and its own faces — [`7-the-explorer.tsx`](../../package/.binding/.test/manual/7-the-explorer.tsx). His design differs in its look and its toggle; the kinds of part are the same.

## <a id="asked"></a>What the designs ask for that nothing gives yet

*Read off the chosen concepts' photographs, element by element, by the question of [How a Library Is Designed](01-01-how-a-library-is-designed.md): which thing in the library is this?*

- **A view switched on the page.** Four of the seven designs have one: the catalogue among **1**, **2** and **3**; the manual between code forward and words forward; the design book between its two modes; the story among three papers. *The door exists and is promised (7, above). No control has been built on it, and where a reader's choice is kept is not settled.* His words: *"Dynamic view change is proof that we are coding the semantics and annotating the semantic structure with what is necessary for the view."*
- **What stands for a book above its name.** The shelf of **1** shows each book as a cover with a colour and a date. A catalogue's page holds the book's name and its synopsis; the colour, the mark and the date are said on that book's own cover and do not reach the catalogue's page.
- **The library's bar on every book's page.** In **19** the upper bar is the library's cover and its table, on a page that is another book's. *One book's page carrying another book's table is content that reaches it only by being written, imported or compiled.*
- **The reverse of a reference.** *Cited from outside* in **19**, *where it is used* in **6**, *cited in* in **9**, *cited by* in **23**.
- **A count, and the chain upward.** *3 projects*, *212 books*, *chapter 1 of 8*; *filed under Dougs Library*, and the breadcrumb of **23**.
- **An order over chapters.** By recency for the story; by recency and by size for a project's conversations.
- **What is the reader's and in no book.** *Continue*, a favourite, a note of mine, the question typed in **2**.

*The second through the fifth are things the Binder knows while it runs and does not hand to a page; each is a change to `.public`, his to rule. The first and the sixth can be built in his library today.*

## <a id="found"></a>Found while reading

- **Two of the four books have no class.** The doors of his catalogue and his story hand on the library's class, so nothing can be registered or drawn for either alone. *A design for either begins by giving it a class under the library's, as the design book and the manual have.*
- **Pictures beside a chapter do not show on the live site.** Measured 2026-10-05: a concept's photograph is `image/png` on the built site and the page's own shell on the live one, since the bind's render phase is what copies it. *His design book's cards are blank while it is developed live; a page that shows pictures is looked at `built`.* Added to [the table of what reaches the open page](01-02-how-a-library-is-developed.md#hot).

## <a id="starts"></a>Where the talk starts from

*Questions the reading leaves, in the order a first build would meet them. He leads; what he says is written under each.*

1. **What is a view, in a book's own terms?** The shelf, the list and the wall of his catalogue show the same books. Is a view a rank of what the table lists — its name, its cover, its synopsis — or a layout of the page, or one of each chosen together?
2. **Where does a book's design live?** In its own folder with its parts in its appendix, as his design book does, the shared parts in his manual — or elsewhere.
3. **What does a shelf show of a book?** Only what the catalogue says of it, its name and its synopsis, or what that book's own cover says.
4. **Where is a reader's choice kept** — the view, the paper, the mode — and does it hold from one page to the next?
5. **Which book is built first?**

**Names.** Doug's: *view*, *implement a book*, *library mode* and *gallery mode*, *the black and sky*. Ours, flagged: this chapter's title; *a mark* for a small annotation that only names what a chapter is; *the scaffold* for the cream theme every book wears now.
