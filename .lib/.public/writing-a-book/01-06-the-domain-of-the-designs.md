# The Domain of the Designs

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Begun 2026-10-06 on Doug's word, and his to correct: every name below is a PROXY until he keeps it. The chapter's name is a PROXY too.***

---

## His words, in the order they came

The library's classes had been named for what they did — `BookItself`, `Listed`, `Paged`, `Pick` — and then, on his correction, renamed into librarianship's dictionary — `Shelfmark`, `Classmark`, `Imposition`, `Catchword`. Both were wrong, and he said why:

- ***"Do an ls of the writing directory in .public… Look at how coherent the list of types is. Do you see? Am I not beautifully capturing a domain? When I use descriptive words WITHIN that domain, I have already captured the essence of one."***
- ***"Your domain is not books in general. You are not writing .public. You are doing the domain of the designs you are working on as adapted to the semantics of books. You are making custom annotations to help the writing look the way you want. It's not the same domain. It builds from it. And you need to sit down and come up with a coherent domain. If you haven't done that, you aren't building an object model of anything, and therefore you are not making something generalizable that we can use and extend in many books. An implementer should be able to look at your code and understand what it is doing based on the words."***
- ***"You are so wrapped up in how I sometimes name writing-based class members that you can't even see the structure of the class names. The TOPMOST layer of your objects needs to be incredibly coherent before you start playing games adapting the members to that domain. If you play dopey games without having a coherent domain, you are just writing semantics-free code."***
- ***"SHELFMARK IS A WORD NO ONE USES!!! NOT IN A DOMAIN… Do you not know what it means to be a word in common usage?"***

## The rule, as it stands after those four

1. **The topmost layer first.** The classes a reader meets first — the kinds of book, their layouts, the bars and what stands on them, the parts of a page — are named as one coherent set before any member is named. A member takes its name from that set; the set never takes its name from a member.
2. **Words in common usage.** A name is a word an implementer already knows from the screen or from ordinary English — bar, side, shelf, cover, sheet, paper, tab, switch, index, entry, turn, count, gallery — never a word from a specialist dictionary, however exact. If a word has to be looked up, it is wrong.
3. **The designs' domain, built on the framework's.** The framework's words — Book, Chapter, Cover, Synopsis, TableOfContents, Section, Paragraph, Word, Reference — are what a library is written in and are never renamed. His library's classes name what a reader sees in his designs, each made of those writings; a custom annotation is how a writing is made to look the way the design wants.

## The topmost layer, proposed 2026-10-06 and waiting on his yes

| | names | what each is |
|---|---|---|
| **the books** | `Book`, `Manual`, `Library`, `Story`, `Design` | the base every book of his extends, and the four types |
| **the layouts** | `Layout`, `Spread`, `Sheet`, `Bars`, `Frame` | the base — one chapter open at a time — and one under it for each type; a book takes its layout by registration |
| **the bars, and what stands on them** | `TopBar`, `SideBar`, `FiledUnder`, `Byline`, `Switch`, `Tab` | a top bar said of the cover and a side bar said of the table of contents — annotations beside `Cover` and `TableOfContents` in the chapter file, never subclasses of them; the two lines every book draws; a button that says a thing of the book, and one of a set |
| **the table of contents** | `Index`, `Entry` | a table of contents whose rows lead somewhere; a row, lit when its chapter is open |
| **reading a chapter** | `Turn`, `Count`, `Listing`, `Outline`, `CodeForward`, `Timestamp` | before and after at the foot of a chapter; *N of M*; a file printed under its name; the structure drawn over the page; the file given the room; the date a chapter carries |
| **the catalogue** | `Shelf`, `View`, `BookLink` | the books as covers; a family of which one is said at a time; the title on the shelf that opens the book |
| **the design book** | `Gallery`, `Concept`, `Photographs`, `Source`, `Question`, `Answer`, `Decision`, `LibraryMode`, `GalleryMode` | a chapter whose concepts are cards; a concept; its two photographs; the sketch's own code; the three kinds of paragraph of *What I Am Asked* and *The Designs I Am Going With*; the two modes, his words |
| **the story** | `BookPaper`, `NightPaper`, `WhitePaper` | the three papers, his words |

**Renamed that night to the table above, with two kept in the framework's own grammar — a chapter is `Dated`, a book is `Outlined` — and the method written where it will be found: [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md).**
