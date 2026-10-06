# How a Thing Is Named

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Written 2026-10-06 on Doug's word — "when you get this, you HAVE TO write up how you figured out how to name things in documentation that will be easily found, because it needs to be replicated" — after a night in which a library's classes were named three wrong ways in a row. It is the method, read off how `.public` itself is named, with that night's failures as the counterexamples. The chapter's name is a PROXY.***

---

## What went wrong, in his words

A library built on `.public` was written with classes named `BookItself`, `Listed`, `Shelved`, `Paged`, `Pick`, `Choice`, `FiledUnder`. Corrected, they were renamed into a dictionary — `Shelfmark`, `Classmark`, `Imposition`, `Catchword`, `Dateline` — and corrected again.

- *"BookItself is a very bad name. There is a whole article about how we don't name things by function - Listed. I do that with writing semantics terms."*
- *"Do an ls of the writing directory in .public… Look at how coherent the list of types is. Do you see? Am I not beautifully capturing a domain? When I use descriptive words WITHIN that domain, I have already captured the essence of one."*
- *"Your domain is not books in general. You are not writing .public. You are doing the domain of the designs you are working on as adapted to the semantics of books… you need to sit down and come up with a coherent domain… An implementer should be able to look at your code and understand what it is doing based on the words."*
- *"The TOPMOST layer of your objects needs to be incredibly coherent before you start playing games adapting the members to that domain."*
- *"SHELFMARK IS A WORD NO ONE USES!!! NOT IN A DOMAIN… Do you not know what it means to be a word in common usage?"*
- *"You can see the .public base classes and structures. Paragraph, Title, Chapter... you are building on THAT. BookItself and Listed is what you come up with as the natural extensions?"* *"NO! I can't approve all classnames in this library. You have to learn."*
- *"You aren't looking at how beautiful the file and class names are in .public. You aren't coming close to matching what I do."*

## How `.public` is named — the evidence, read off the source

**A file is one noun, and it exports that noun three ways.** `src/writing`: Append, Bold, Break, Composition, Date, Emphasis, Equation, Format, Heading, Letter, Line, List, Math, Means, Mention, Paragraph, Reference, Referent, Section, Sentence, Space, Table, Theme, Underline, Word, Writing. `src/libraries`: Biography, Book, Chapter, Cover, Next, Paginated, Previous, Synopsis, TableOfContents, Title. `src/figures`: Code, Figure, Image, Svg. Each `Noun.tsx` exports the class `$Noun`, the component `Noun`, and `NounSpecification`. Nothing else is in the name: no `Base`, no `Impl`, no `Component`, no role word.

**A writing is a noun; what is said of a writing reads as a predicate.** Every class a reader writes in a chapter is the noun of the thing — a Paragraph, a Word, a Title. Every annotation is read through `writing.is(X)`, and its name is chosen so that sentence is English: *a chapter is Closed, Strict, Permissive, Inline, Block, Parenthetical, Narrative, Blank; a book is Paginated; a title is Self, a Referent; a cover's line is the Author, the Subject, the About; a row is Content.* Adjectives for a state or a manner, nouns for a role — and both are words a reader already knows.

**Related kinds live in the file of the kind they belong to.** `Reference.tsx` exports Reference and Self; `Writing.tsx` exports Writing, Annotation, Parenthetical, Narrative, Blank; `Composition.tsx` exports Level, Strict, Permissive, Open, Closed, Inline, Block; `Cover.tsx` exports Cover, Author, Subject, About; `TableOfContents.tsx` exports TableOfContents and Content; `Biography.tsx` exports Biography and Autobiography.

**A library's files and classes follow the same grammar.** The test library's chapters: `1-the-book`, `2-the-theme`, `3-the-masthead-and-the-byline`, `4-the-catchword`, `5-the-faces`, `6-the-mark-and-the-photograph`, `7-the-explorer` — each named for the thing it documents, with the article. Its resources are named for what the file holds, one concern each: `.code`, `.theme`, `.layout`, `.paging`, `.tabs`, `.tree`, `.chapters`, `.appendix`, `.front.html`, `.sketch.html`. Its classes: `$Byline`, `$Catchword`, `$RunningHead`, `$Index`, `$Entries`, `$Tabs`, `$Label`, `$Appendix`, `$Explorer`, `$Branch`, `$Close` — nouns of things on the page; `$Framed`, `$Tabbed`, `$Navigable`, `$Literary`, `$Typewritten` — adjectives said of a book or a chapter; `$LibraryTheme`, `$DarkTheme`, `$ManualCover`, `$LibraryTableOfContents` — a theme or a face named for the book it dresses and the kind it is.

## The method

1. **Say what the thing IS before naming it, in the words of its own domain.** A library's domain is its designs, built on the framework's writings: what a reader sees on the page, as a reader would call it — a bar, a shelf, a cover, a card, a sheet, a paper, a tab, an index, an entry, a turn. Not the framework's domain, which is already named; not a dictionary of the book arts, which nobody on the page uses.
2. **Name the topmost layer as one set first.** List the classes of a folder as `ls` lists `src/writing`, and read the list: the books, their layouts, the bars and what stands on them, the parts of a page. It must read as a coherent glossary before any member, variable or CSS class is named. A member takes its words from that set.
3. **A writing the library draws is a noun; a thing said of a writing reads in `is()`.** `$Byline extends $Paragraph`: a byline. `$Switch extends $Word`: a switch. `$Turn extends $Paragraph`: a turn. `$Entry extends $Annotation`: *this row is an Entry*. `$Dated extends $Annotation`: *this chapter is Dated*. `$Outlined extends $Format`: *this book is Outlined*. `$Gallery extends $Format`: *this chapter is a Gallery*, as *a chapter is a Table*. Say the sentence aloud; if it is not English, the name is wrong.
4. **Every word is in common usage.** If an implementer would have to look it up, it is not a name. `Shelfmark`, `Classmark`, `Imposition`, `Catchword` fail here however exact they are; `TopBar`, `SideBar`, `Shelf`, `Count`, `Turn` pass.
5. **A name says what, never how or why.** `BookItself` says where a link goes; `BookLink` says what it is. `Listed` says what was done to something; `Shelf` says what it is. `Pick` says what a reader does; `Tab` says what they press. A participle is right only when it is the state itself, as `Closed` and `Paginated` are.
6. **A file is named for the thing it documents or holds.** A chapter `N-the-<thing>.tsx`; a file beside it `N-the-<thing>~<what it holds>.tsx` — `code`, `theme`, `faces`, `views`, `entry`, `forward` — one concern each, a noun each. An appendix chapter is `oN-…`.
7. **Flag what is still a stand-in.** A name is Doug's to keep or change; it is written where he reads, with `PROXY` beside the ones not yet his.

## Nouns and annotations — when a thing is new, and when it is said of a writing

**Doug, 2026-10-06, after the night's names:** *"isn't the topbar a reinterpretation of the cover? Can any other chapter really be a top bar? Maybe it's an annotation for a cover?… When do you create something new in the domain - like an Image that is categorically different - versus annotating a paragraph as First perhaps, or making an annotation that allows you to insert classes into a piece of writing. Is FirstParagraph really a component? No, I don't think so. You have to choose nouns and verbs when you write a sentence. You also have to choose how to write an object model in .public."*

**The choice, in the order it is asked:**

1. **Is it an existing writing seen, placed, dressed or given a role?** Then it is an **annotation said of that writing**, and its content stays the writing's. The cover as a top bar is the cover: `$TopBar extends $Cover`, so `<Cover />` in the book's cover file is the bar, and the book's one-cover rule says which chapter can be it. A paragraph that opens a chapter is *First*, an annotation on that paragraph in the chapter — never a `FirstParagraph` component, which would be a second Paragraph. A section that is a concept, a row that is an entry, a chapter that is dated, a book that is outlined, laid out as a spread, shown as a shelf: all said of what is already there. **Read it in `is()`: *this paragraph is First*.**
2. **Does it write content of its own that no existing writing produces?** Then it is a **new writing — a noun**, categorically different as Image and Code are from Paragraph. A byline writes the author's name and link from the cover; a switch is a word whose element is a button and whose press writes `$is`; a turn writes the chapters either side; a count writes *N of M*. The framework's own precedent is Next and Previous: words that represent a property they can reach. **Test: does it have a `write()` of its own? If not, it is not a noun.**
3. **Does an existing annotation need a look in this book?** Then it is a **face**: a subclass with a `style`, exported under the framework's name and imported by the chapter that writes it — `ManualCover`, `StoryTableOfContents`, `TopBar`, `SideBar`.
4. **Does the book place its chapters differently?** Then it is a **type of book**: a subclass whose `write()` places, with its layout, theme and faces beside it.
5. **Is it only values?** A theme.

**What this corrected in his library:** the story's opening paragraph was found by position in code and is to be *First*, an annotation written in each chapter; and the base `Layout` rebuilt what `Paginated` already gives — `pages` and `open` overridable, as the test library's `Tabbed` uses them — where it should have extended it.

## The test

Read the folder's class names as one list beside the design it builds. **Every name should be a word on the sketch or an ordinary word for what is on it; a reader of the list should be able to say what each thing is without opening a file; and nothing in the list should need a dictionary.** His: *"An implementer should be able to look at your code and understand what it is doing based on the words."*

## The library tonight, read by the test

`.manual`: DougsBook, Manual, Spread, Layout, TopBar, SideBar, Index, Entry, FileEntry, Byline, FiledUnder, Switch, Tab, Turn, Count, Listing, Dated, Outlined, CodeForward, DougsTheme, ManualTheme, ManualCover, ManualTableOfContents. `..reference`: DougsLibrary, Bars, View, Shelf, BookLink, LibraryTheme, LibraryCover, LibraryTableOfContents. `.librarian`: DougsStory, Sheet, StoryTheme, BookPaper, NightPaper, WhitePaper, StoryCover, StoryTableOfContents. `.design`: DougsDesign, Frame, Gallery, Concept, Photographs, Source, Question, Answer, Decision, DesignTheme, GalleryMode, LibraryMode. *Read against the sketches, the frame of 11 to 23 still has words with no class — subjects, find, holds, continue, counts, favourites, across — because those parts are not built; and `FiledUnder` and `CodeForward` are phrases rather than nouns, kept because the first is what the line says and the second is his.*
