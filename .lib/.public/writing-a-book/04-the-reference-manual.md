# The Reference Manual

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***Written 2026-09-28 with U6 of [Sprint 89](../projection/94-sprint-89--figures.md), by the librarian who keeps the test library's manual; the book is [`.binding/.test/manual/`](../../package/.binding/.test/manual/). The chapter's name is Doug's word for the book.***

---

**Doug, 2026-09-28:** *"The vision here is that one writes code for one's library in one's library, and it is in one's library as resource documents associated with chapters. This allows a library to be a sort of convenient documentation system for a code library, and more specifically, the code library that is used to build itself… The payoff is a library whose inside contains its own outside, at least in printed form, which is a good step for a library that's closed under books."* And: *"Resources allow the system to be closed under chapters, with the accompanying files being where the coding complexity lives, and then forcing them to be surfaced inside the structure."*

## What a reference manual is

**A book of the library whose chapters each hold, as the files beside them, a tool the library is built with, and use it.** Every book here extends the library's own book class, wears its theme, draws its masthead and byline, ends every chapter with a catchword, and takes its face from a format. Those tools are the manual's chapters' files, `1-the-book.code.tsx`, `2-the-theme.code.tsx`, and so on, and the manual's `.book.tsx` is a door: it re-exports them, and every other book imports its tools from there — *"you literally use the code in the reference manual as the tools in the library."* Each chapter says what the tool is and how I use it as the librarian of a library, and for mine, and prints the file through a Code figure, `<Code identifier="code" />`.

**The manual accompanies the reference.** A subject's catalogue is its reference, the book that represents the subject; the manual is the technical information beside it. Doug: *"the elegance is that we have the catalogue — the book that is the catalogue that represents the subject — as the reference (like reference desk) — and then this is the accompanying reference manual that gives technical information about the subject."* The test library's is filed under Libraries, by me, and its title is the plain one he offered, The Library Reference Manual; a dot in front of a folder is a catalogue in our dot type system, so its folder is `manual` and not `.manual`, though he left that convention open for a library that wants it.

## How a library grows into subjects

Doug: *"One way something can become a subject is when a book is complex and needs a lot of code, it splits into a catalogue that catalogues what it is about, the original book, and the reference manual for it. And that is a very normal reason to move from book to subject… as one builds their library, the subject catalogue grows because books become a poor container for their contents."* So a book that outgrows itself becomes three: a catalogue about what it was about, the book it was, and the manual that holds its tools. The test library's top already has the shape — The Library its reference, The Library Reference Manual beside it — and a book of mine that needs its own tools would split the same way.

## The manual is read before the code, and written before it

**A library closed under books contains the representation of the tools used to build it, and that representation is the primary source.** Doug, 2026-09-28: *"Are you remembering to actually make the test library a self-documenting codebase, so that you literally read the reference manual to develop the code? It's not a fiction. This is what we are inventing."* So the rule I keep: before I touch a tool of my library I read the chapter that prints it, and it is the specification; when I add a tool I write its chapter first and develop the code by reading it — the explorer's chapter stood in this manual before a line of the explorer existed; and when I say how something must look or work, my chapter says it before the code does.

## A chapter is shown with its file

**If one is about the other, show them together.** Doug, 2026-09-29, of the manual seen as an app in [its explorer](../projection/98-sprint-93--the-explorer.md): *"Is the chapter about the code? There should not be two clicks to get to the code,"* then *"If one is about the other, show them together,"* and of the result, *"It can be primary. I don't think the other one is necessary."* So a chapter that prints a file is read as a spread, the file up front and the prose beside it, and never as its prose alone; a chapter of several files opens at its first, the rest a leaf away in the tree. The same rule makes the manual's front its cover with the synopsis beneath it, since a synopsis is of its book, and puts what an appendix says of its file beside the file rather than over it. The explorer is the manual's seventh chapter, and the manual documents it as it documents every tool.

## How to write one

1. **Name each tool's file for its chapter**: the chapter's extension-free name, a separator, an identifier and the type — `3-the-masthead-and-the-byline.code.tsx`. The dot is the convention; a `.tsx` needs an identifier; identifiers are unique per type — [Append](../writing/19-append.md).
2. **Make the manual's `.book.tsx` the door**: `export * from './3-the-masthead-and-the-byline.code.tsx'` for each, and the book class itself imported from its chapter's file.
3. **Import from the door everywhere else**: `import { $TheLibrary, Framed } from '../manual/.book'`; the library's own `.book.tsx` may be one line, `export { $TheLibrary as default } from '../manual/.book'`.
4. **Insert the file in its chapter with the literal** — `<Code>![[ code.tsx ]]</Code>` prints the file beside the chapter; `![[ this ]]` prints the chapter's own source; `<Svg>![[ .svg ]]</Svg>` and `<Image>![[ .png ]]</Image>` show a mark and a picture — and say how you use the tool. Every file beside a chapter is inserted or imported by it, or the bind refuses it; since [Sprint 92](../projection/97-sprint-92--the-literal-form.md) the binder appends nothing, and an Append is yours to write when you want an appendix among the chapter's annotations — [Code, Image and Svg](../figures/03-code-image-and-svg.md).
5. **List the manual in the library's catalogue** as any book, a row referring to its synopsis.

## What bit, so it does not bite the next librarian

- **Section headings repeat across a manual's chapters** — *What it is*, *The file* — and a longform page wears every chapter, so an id stood twice and the proof refused the bind. Name each chapter's sections for the chapter: *The book's file*, *The theme's file*.
- **A picture imported by the module got the dev server's address**, `/@fs/…`, which no published page serves. Its Append's text is now the address beside the book's pages, and the render phase copies the picture there — [The Picture That Came From the Dev Server](../solutions/95-the-picture-that-came-from-the-dev-server.md).
- **A page holding a picture opens with a preload link** React emits before the theme's container; a promise reading the root's first child must allow it.
- **A printed file quotes rules.** The faces' file says `font-family: monospace`, so a promise that reads a page's text for a style reads the style blocks instead.
- **The prose stays legible.** Each chapter holds one figure per file, the appends are hidden, and the composition is a chapter's — Doug: *"so much of .public exists to protect the integrity of the semantic structure of the text."*
