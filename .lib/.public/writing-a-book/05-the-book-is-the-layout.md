# The Book Is the Layout

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)

---

***Written 2026-09-13 at Doug's instruction, by the session that had just been shown how this works three times in one afternoon:*** **"I don't want to get fired by not using this framework so I will write down how to use it as I learn."** *Every line below is something he said or something measured in the code the same day; nothing here is inferred.*

## <a id="the-anchor"></a>The anchor — ***book is layout, chapters are logical parts***

> **"Book is layout. Chapters are logical parts. This is the essence of the framework. The page layout and logical parts of the page."**

**A book answers WHERE. A chapter answers WHAT.** *The whole of [the anchors section](../the-coding-style/03-the-coding-style.md#book-and-chapter) is that sentence and its consequences; this chapter is how you write against it.*

## <a id="the-files"></a>The files — ***everything but `.book` is content, and content is chapters***

> ***Doug:*** **"all the files except .book are the content and they only have chapters."**

| the file | what it holds |
|---|---|
| **`.book.tsx`** | ***the book*** — the layout, the kinds the book registers, and nothing that is content |
| **every other file** | ***one chapter*** — `export default class $X extends <a chapter kind>`, with one `print()` writing its document |

***So a thing that is a logical part of the page is a FILE.*** **The manual of style is not something inside the lead; it is a navigation box for a whole subject area, so it is a chapter of its own** — *and the day that was got right, the lead's file lost twenty lines and gained nothing.*

### <a id="the-book-file"></a>And `.book` has an ORDER — ***the book first, then everything the book is written with***

> ***Doug, 2026-09-13:*** **".book is the thing that inherits from encyclopedia FIRST and then all components for the book."**

| in this order | |
|---|---|
| **1 · the book** | `export default class $X extends $Encyclopedia` — *or whatever book kind this is a book of.* **It stands at the top of the file, before anything else it needs** |
| **2 · the components** | *every kind the book is written with — its link kinds, its own documents and sections, its formats — and the `$()` exports beneath them* |

***The reason is the anchor again:*** **the file is named for the book, and the book is the layout.** *A reader opening `.book.tsx` is opening it to find out what this book IS; the parts it is written with are what it is made of, and they come after.*

***The one file that breaks it, named so it is not mistaken for the convention:*** [`.wiki/.encyclopedia/.book.tsx`](../../package/.wiki/.encyclopedia/.book.tsx) **is 536 lines and its book class stands at line 477** — last, after six painted-icon helpers, an eighty-line table of language editions and a dozen component classes. **It is the inverse of the rule and it is owed a reordering.**

## <a id="the-type"></a>How the book FINDS a chapter — ***its type, never its position and never its name***

> ***Doug:*** **"chapter types are how it finds certain chapters."** · **"You should have different types. Just enumerate them in view!"**

**A chapter carries a type, exactly as every other kind does** — `addType(block, $TypeOfX)` in its bond — **and the book asks `reflection.is(chapter, $TypeOfX)`.** *[`$Article`](../../package/src/encyclopedia/Article.tsx) is the first of these: it says a chapter is a logical part of the article rather than apparatus.*

***And this is why the type is the only answer.*** **A chapter writes its document in `print()`, which runs AFTER the book draws** — so the book cannot see what a chapter will write. **What the book must know, the chapter says by its TYPE.** *An afternoon was spent designing a mount-phase find, a registry on the book's scratchpad, and an article held invisible until a placement landed — all of it machinery for a question the type answers before the first paint.*

## <a id="the-parts"></a>How the book DRAWS them — ***a template method for each part, like the header and the footer***

> ***Doug:*** **"Why isn't this the same as header and footer. I want to hear: the chapters are put in the right groups in view. There is a template method for each of the parts in Encyclopedia. The chapters go where put."**

**`$Book` already has the shape:** `header()` and `footer()` answer nothing by default and its drawing composes them around its writing. **A book kind adds a member per part and the view hands each part its group** — [`$Encyclopedia.body(held)`](../../package/src/encyclopedia/Encyclopedia.tsx) is one.

***The fault to avoid is the one that was committed first:*** **inlining a part's drawing in the view.** *It works and it is wrong, because it is the one thing a consumer of the book kind cannot override — which is the whole point of the other two being members.*

## <a id="the-rules"></a>Four rules the same afternoon produced

- <a id="no-cache"></a>***NOTHING IS CACHED.*** **"Stop caching things. Use types. Find them when drawing. Why are you ALWAYS caching things? We have them in memory. We have the block. We have chapter properties to enumerate. If you want anything it's a get only property. STOP CACHING!!"** *`$Book.chapters` is the shape: a get-only property reading `parts()` every time it is asked.*
- <a id="one-list"></a>***ONE LIST.*** **"You don't need two arrays just because you have a list of two types. Just use the list."** *The book has its chapters; the view walks them once and puts each where its type says.*
- <a id="not-a-remainder"></a>***A GROUP IS NAMED, NEVER LEFT OVER.*** *A part defined as "what remains once the apparatus is taken" is a subtraction, and a subtraction is one misreading away from taking the apparatus — **which is what the team before this one was fired for**: [the synopsis and the table of contents were dissolved to buy a layout](../the-type-system/08-the-cover-is-a-cover.md#his-cause).*
- <a id="print-false"></a>***`print={false}` DECLARES WITHOUT DRAWING, and it already works.*** *A chapter is written into its book as an element; `$Writing`'s bond turns a written `print` into `parenthetical`, and `$Writing.view()` returns null before it ever calls `print()`.* **No member is owed for it.** *It is not needed where the book's layout composes the page, because then a chapter is drawn once, by the book, in the place its type names.*

## <a id="the-look"></a>And the look is the format's, not the model's

**A box stands beside the prose because its format says `float: right`.** *`$ManualFormat` and `$InfoboxFormat` both say it, and neither changed when the flow was built.* ***The model never carries a word like "floating"*** — **it is a manual and an infobox, and where they are drawn is the book's business and how they are drawn is the format's.**

***What the book had to give them was one formatting context.*** *Every prose document was its own grid item — each placed in the text column by the theme — and a float cannot cross from one grid item to another, whatever the nesting. **The body is that context**, and with it a line in the chapter after the manual measured 374 wide against the manual's edge and 676 below it.*

## <a id="see-also"></a>See also

- **[Using the Public Library](01-using-the-public-library.md)** — *what a consumer imports and through which door*
- **[The Book's Little Framework](04-the-book-s-little-framework.md)** — *what a book declares for itself*
- **[The Coding Style](../the-coding-style/03-the-coding-style.md#book-and-chapter)** — *the anchor, and every other rule in force*
- **[Sprint 67](../projection/73-sprint-67--the-flow-the-book-holds.md)** — *the sprint this was learned in, with what was cut on the way*
