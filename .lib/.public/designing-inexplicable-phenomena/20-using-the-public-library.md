# Using the Public Library

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***What a consumer of `@dna-platform/public` writes, as distinct from what the library itself is written as.*** **Five rulings, all Doug's, given 2026-09-06 over the Wikipedia demo, and each one applies to every application written in the library, not only that one.**

## <a id="plain-subclasses"></a>A consumer subclasses plainly — no interfaces, no types, no specifications

> ***Doug, on a demo chapter that carried `$WikipediaChapter$`, a `$TypeOfWikipediaChapter` and a `WikipediaChapterSpecification`:*** **"Not necessary — write this down. All that complex extension was so that the end user COULD subclass if they want to. No need to do specifications and interfaces. Understand??"**

**The [four-declaration file](19-what-we-believe.md#the-shape) — interface, class, type, specification — is the LIBRARY's shape.** *It exists so that a class in `src` can be replaced at any part, carried as a type, and checked at build.* ***A consumer does not repeat it.*** A consumer writes one class, extending the library's, adding the data it needs — **no `$X$`, no `$TypeOfX`, no `XSpecification`.** *The type it inherits is the true one, and a second composition type on the same writing is what `type()` [does not admit](../solutions/50-the-demo-that-wrote-itself-a-framework.md).* **A subclass that adds only a look overrides `frame()`; one that adds only a drawing overrides `view()`; one that adds a fact adds a `$field`.**

## <a id="the-normal-chapter"></a>The convention — `.chapter` subclasses the book's normal chapter

> ***Doug:*** **"In `.chapter` always subclass chapter to make one that is a normal chapter, and subclass cover, table of contents as needed. Export default on normal chapter and import as Chapter. Book. Now you have types to reorganize. Make this a convention. You subclass chapter to make the normal chapter in `.chapter`."**

| file | holds | default export |
|---|---|---|
| **`.book.tsx`** | ***the book subclass*** — `class $Wikipedia extends $Book` — and what only the book needs | **the class**, which the build wraps |
| **`.chapter.tsx`** | ***the book's normal chapter*** — `class $WikipediaChapter extends $Chapter { }` — with a cover or table of contents subclassed beside it *as needed*, and what the chapters are written with | **the normal chapter's component**, imported as `Chapter` |
| **`N-name.tsx`** | one chapter: imports and markup, `$(<Chapter>…</Chapter>, Chapter)` | the instance |

***"Now you have types to reorganize":*** *the book and its normal chapter are classes of this book's own, so anything that must tell this book's chapters apart has a class to ask — and nothing else in the demo needs to.*

## <a id="web-words"></a>A web page is written in web design language

> ***Doug, on a book whose two regions were called the door and the foot:*** **"There is NO door. Use web design language for Wikipedia. Don't be clever. Write this down."**

**The library's own words are library words — cover, chapter, section, index card — and they are the library's.** *What a consumer names on a PAGE is named the way the web names it:* **`main` and `footer`, `nav`, `logo`, `search`, `grid`, `card`.** ***A coined word for a thing the web already has a word for is the same fault as [a coined word for a thing the library already has a word for](11-the-coding-style.md#no-jargon)*** — it reads well in the file and costs every reader after.

## <a id="no-comments"></a>No comments in the code, and the demo is code

> ***Doug, twice in one hour, on comment blocks in `.wiki`:*** **"Stop putting code comments in the code."**

**[The ban](11-the-coding-style.md#open) covers a consumer's files exactly as it covers `src`.** *A demo is not a `.spec` — it is the framework being used, and its files are read as code.* ***What a comment would have said goes in the library, and the library links to the file.***

## <a id="minimalism"></a>The questions before any class — code minimalism and code ugliness minimalism

> ***Doug, on a book subclass that laid out two regions with two Formats and a chapter kind carrying a region:*** **"Do you need the header and the footer? Can you use styled components to tag them in some way? Can you try to write classes so that you don't have to change the structure of the DOM? Can you please find a minimum implementation? It's possible that the book could be empty though I get you could get styles in there relatively easy. Please read and discuss the most elegant way to use this framework. I want code minimalism and code ugliness minimalism. What stops you from having a flat list of chapters and organizing?"** *And then:* **"Write this down but I want you to apply this type of thinking to every bit of code you write."**

***So these are asked of every piece of code before it is written, in this order:***

| | the question | what answering it honestly usually finds |
|---|---|---|
| **1** | ***Do you need it at all?*** | *a region, a kind, a member that the default already gives* |
| **2** | ***Can a styled component tag it instead of a class carrying it?*** | *a Format with a nested `@select` rule does what a subclass with a field did* |
| **3** | ***Can it be written so the DOM keeps its structure?*** | *the library's own drawing already has the elements; organize them, do not wrap them* |
| **4** | ***What is the minimum?*** | *an empty book that only registers; a plain chapter written flat* |
| **5** | ***What stops a flat list, organized?*** | *usually nothing — arrangement is a fact about the dress, not about the writing* |

**The Wikipedia book is the worked example.** *A book subclass with `chapters()`, `region()`, a custom `view()`, two Formats and a chapter kind carrying `$region` became an EMPTY book class that registers four Formats for its own scope — a body, a header, a sidebar that is not drawn, a content grid — and writes no view; the flat chapters are organized by the content Format's nested rules.* ***And the measured reason the flat list is not only smaller but correct:*** *a subclass `view()` that draws its held chapters through `$(chapter)` draws their frames and empties their contents in the browser, while the library's own `view()` draws them whole — [The Wikipedia Demo § what was measured](../projection/49-the-wikipedia-demo.md#measured).* **The default drawing is the one that works; organize it, do not replace it.**

## <a id="lines"></a>Writing is written in the markup, a sentence to a line, and what a kind can make it makes

> ***Doug, on a cover written `<Title><Heading>…</Heading></Title>`:*** **"You shouldn't need headings in there. Write title to create the heading since it is a section."** *And on prose written as `'…\n' + '…'`:* **"I have word wrap on. Please don't use plus… Why are you stringing all strings? This is React. Write strings in the markup."**

**A title, an author and a subject are sections that are their own heading, so each MAKES its heading from its copy when none was written** — `<Title>Wikipedia</Title>` is the whole of it. *The same reach: a book that carries no table of contents makes one from its chapters' headings, so `.table.tsx` is written only when the book wants a different one.*

**A sentence ends at its stop, and a list item at its mark.** *Doug, on a template literal written to keep the lines: "Please no string interpolation when unnecessary… This is React. Write strings in the markup."* ***JSX condenses the line breaks inside plain text to one space before anything of ours runs — so the parser finds a sentence at its stop (`.` `!` `?` followed by a space) as well as at a line, and a list finds its items at their `- ` marks as well as at its lines:***

```tsx
<Paragraph>
    A simple article should have, at least, a lead section and references.
    The following list includes additional standardized sections in an article.
</Paragraph>
<List>
    - Short description
    - Hatnotes
</List>
```

*The parser trims a line's indentation where a line survives, so the copy is the sentence and not its margin. A link is plain markdown in plain text — `<OutwardLink>[Terms of Use](https://…)</OutwardLink>` — with no braces and no quotes around it. A template literal is written only where the value is computed, as the search form's action URL is.* **Never `'…' + '…'`.**

## <a id="readings"></a>A view draws readings of the block, and the readings are made at the bond

***Two facts measured the same afternoon, and together they say how a book lays itself out.*** **A writing that returns its own held parts as `$(part)` components draws their frames and empties their contents — [Solutions 51](../solutions/51-the-chapters-a-book-drew-empty.md); a reading of its block — `this._block.filter(…)`, which is a `$Block` — draws them whole.** *And a reading made IN the view is a chemical made per render, which loops React (*Maximum update depth exceeded*): [Solutions 16's law](../solutions/16-the-parse-that-woke-its-own-parents.md), a view reads and never makes.*

**So [`$Book`](../../package/src/book/Book.tsx) makes its four readings once, at the bond, after it has placed its cover, synopsis, table and index — `_opening` · `_contents` · `_body` · `_closing` (proxy names) — and its view hands each to a region Format: `Header`, `Sidebar`, `Content`, `Footer`, with [`Margin`](../../package/src/encyclopedia/MarginFormat.tsx) the region they specialize by `$at`.** *[`$Table`](../../package/src/writing/Table.tsx) needs no view at all: its frame wears [`TableFormat`](../../package/src/encyclopedia/TableFormat.tsx), a grid whose `> .pd-table` is `display: contents`, so the heading and the cells the block already holds become the grid's items — the organizing lives in the Format and the DOM keeps its structure.* ***A consumer that wants a different arrangement registers a different Format for the region, and never writes a view.*** *And a heading draws `<h2 id="Order_of_article_elements">` — Wikipedia's own spelling of an anchor — so the table of contents a book makes for itself links `[name](#name_with_underscores)` and every entry resolves.*

---

*Written 2026-09-06 out of [The Wikipedia Demo](../projection/49-the-wikipedia-demo.md). The struck-word table in [The Coding Style](11-the-coding-style.md#the-anchors) was swept wholesale the same day on Doug's order — furniture → apparatus, ladder → chain, rung → step, refusal → rejection, mint → make — across both libraries.*
