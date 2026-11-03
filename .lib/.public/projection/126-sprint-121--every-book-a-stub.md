# Sprint 121 — Every Book a Stub

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Opened 2026-11-03 inside a `/ce-brainstorm` on getting mathematics up and running as a project, which Doug turned first to the library's own shape: every book a stub with its essential parts and no chapters, `.reference` renamed `.subject`, the top's table a plain catalogue of what is filed under it. The sprint's name is a PROXY. `requirements-only`: the brainstorm continues in the room with his questions, and the units below are what he instructed directly while it ran.***

---

## <a id="where"></a>Where things stand — 2026-11-03

**Next action: `/ce-brainstorm` continues, by his questions.** His words: "I need you to ask me questions as Claude questions, getting me to explain and clarify my vision for what we need to get mathematics set up as a project. We need a roadmap and an enumeration of all the components." Open for him at the close of this session's work: the top book's title now that `reference` means a specification; whether `.manual` becomes `library/.reference`, the library's own specification with its code; the first thing to stub under Mathematics; and the words of the stub synopses, which are proxies until he keeps or changes them.

**Built on his word while the brainstorm ran:** Our Team, with no chapters ([U1](#u1)); every `.reference` folder renamed `.subject` ([U2](#u2)); every catalogue book a stub, the top's table a plain list of the books filed under it, each row a way in ([U3](#u3)). Ten books bind in 6.0 s and every page answers 200; the numbers are in [Verification](#verification), the commands in [To see it](#see).

**What this sprint's library is, in the eight words:** the top catalogue at `library/.subject`, filed under what it is about, which is itself; a subject's catalogue at `library/<subject>/.subject`, and its specification, when it has one, at `library/<subject>/.reference`; the autobiography at `library/.identity/.subject`, Our Team; the dictionary, the manual and the design inside the top; the face at `library/.public`. A stub book is a cover, a synopsis and a table, nothing else.

**Found on the way, so it is not found again:** the workbench's live server holds a handle on every source folder it serves, and Windows refuses to rename any of them while it is open, so a rename inside `library/` closes the workbench first; and a row written `[[ X ]]**` in a catalogue's table is drawn as a reference to the book it answers for, so a plain list of rows is already a list of ways in.

## <a id="rulings"></a>Rulings, verbatim

- On the autobiography: "Call the book Our Team, and don't add chapters. We will create functions that stub things in the library eventually, but the stub books shouldn't have chapters. Write a temp cover, proxy synopsis and table of contents. No chapters. We are now using live code. We are careful about naming. You can only take liberties when I instruct you to and you should ask about semantic content (names and writing is important now) when you are unsure. We will eventually write guides so that you can capture my voice and naming better".
- On the brainstorm: "Also, we were supposed to be brainstorming. I need you to ask me questions as Claude questions, getting me to explain and clarify my vision for what we need to get mathematics set up as a project. We need a roadmap and an enumeration of all the components".
- On the project, asked what it is: "Let's start at the top. .reference is the library. What do we need in there? Ask me that next. For this question, mathematics is a subject. I'm starting to think we should change .reference to .subject because it contains the subject catalogue. And perhaps reference might be the manual? Let's do that change. I need to think about how to lay out math: Library (of papers), Projects, Results... there is more I need to think more. Think about math projects where papers are published (many) and multiple people work as a team and help me think about how to understand it. I like the idea of a principles textbook called Principia textbook for formal proofs of results... fun things like that. How coupled should project and result be? Not sure. Need to think".
- On what up and running means: "Right now, we are going to define a default theme and form that is very very simple. For math as a subject, it will be a subject catalogue and catalogue the books in its table of contents with synopsis chapters".
- On the top book, asked what it needs: "Right now, I just want every book we have standardized as a stub with the essential parts - /catchup on .public we have great documentation for how to build a library. Yes it can have a stub synopsis and synopses are usually parenthetical. I want you to turn .reference into .subject. We will have .reference serve as something more like the specification of the subject. Most subjects will have a specification to refer to. After that is in place, I would like you to build a very simple table of contents for each, cataloguing the books in the subject. Get the titles right with author and about and subject however we represent these things. Use standard coding patterns to understand code convention and patterns for".
- On the rename's shape: ".reference is .subject, .reference will be a specification of the subject (optional), manual will stay the same".
- On mathematics, asked how coupled a project and a result are: "Perhaps mathematics as a subject should have an encyclopedia (this will be a type of book) that serves as an A-Z explanation of all definitions, theorems, formalisms etc... in all projects. Projects have their own results. We can probably have a journal in mathematics that catalogues all the articles in all the subjects. A mathematical subject will have a sort of specification described in the reference. I am starting to think there is no .manual and actually the .reference manual is where both the spec and the code goes. If you write code it is probably a type of book or chapter or whatever and that should be organized in a specification for the different parts of the subject".
- Carried from the brainstorm's opening, his seeds: "book types, simple stub themes, components for the types and where they are, design, protocols - we might add protocols where I write parts of the Team book, or other log / journal - like books in the library so that we build a narrative for the project. I want to sketch at first, with stubs that help us see the whole library, rather than filling in all the books at once. We also want to archive but keep track of the coming soon app that was in .public, because I want to refer to it eventually in the styles. Perhaps we can include screenshots and an html reference of it in our design project and mention that it is the coming soon page".

## <a id="requirements"></a>Requirements

The brainstorm is not closed; these are the requirements his instructions settled, each built and seen. The roadmap and the enumeration of components he asked for are owed to the room.

- <a id="r1"></a>**R1** The autobiography is Our Team, a stub: a temp cover, a proxy synopsis, a table of its three faces, and no chapters; every other book's author line names it. *Seen:* Our Team at `/our-team` with 2 chapters, the catalogue claim "every book reaches the library and the author" passing with Our Team as the author of every book.
- <a id="r2"></a>**R2** Every catalogue folder is `.subject`: the top at `library/.subject`, each subject's at `library/<subject>/.subject`, the autobiography's at `library/.identity/.subject`; `.reference` is reserved for a subject's specification, optional, and none stands yet. *Seen:* the inventory lists ten books and every folder it names is a `.subject` or stands inside one.
- <a id="r3"></a>**R3** Every catalogue book is a stub with the essential parts and no chapters: a cover with its title, author, subject and about; a synopsis whose title is parenthetical and whose one paragraph is a proxy; a table of contents. The top's one chapter and Our Team's one chapter are gone. *Seen:* the resolve line gives the top and every subject 2 chapters, the synopsis and the table.
- <a id="r4"></a>**R4** The top's table is a plain catalogue of the books filed under it, one row a book, each row a way in. *Seen:* the top's page carries a reference to every one of the nine books filed under it and nothing else in its contents but the parenthetical row.

## <a id="units"></a>Units

### <a id="u1"></a>U1 — Our Team — **built and seen, 2026-11-03**

**What runs:** the book's cover rewritten with the title Our Team on every line that names the book, the synopsis one line, "The people who work on inexplicable phenomena.", the table the three faces; the chapter Who Qualifies removed by git; the author line `*[[ The Team ]]` rewritten `*[[ Our Team ]]` on the nine other covers; the top's row, its chapter and its synopsis repointed.

**Measured:** 10 books, 50 keys, every reference resolves, every book reaches the library and the author; Our Team → `/our-team` and 2 chapters; bound in 6.0 s, the record removing the 12 files the old name wrote; `/our-team` fetched 200.

### <a id="u2"></a>U2 — `.reference` to `.subject` — **built and seen, 2026-11-03**

**What runs:** the workbench closed; `git mv` of `library/.reference` to `library/.subject` and of each subject's and the autobiography's `.reference` to `.subject`, six folders; every import of `../../.reference/.manual/` repointed to `../../.subject/.manual/`; the manual's fifth chapter and the workbench's own comments naming the new path; the memory of the root corrected.

**Measured:** 10 books, the inventory naming `.identity/.subject`, `.subject`, `.subject/.design`, `.subject/.manual`, `.subject/dictionary` and the five subjects' `.subject`; 49 keys; bound in 6.0 s; every page fetched 200.

### <a id="u3"></a>U3 — every catalogue a stub, the top's table plain — **built and seen, 2026-11-03**

**What runs:** the top's chapter What This Library Is removed by git with its row; the top's two-column table replaced by one row a filed book, `[[ Our Team ]]**` through `[[ The Design ]]**`, then the parenthetical row naming the book, the synopsis and the table; the six catalogue synopses rewritten as one-paragraph proxies, the top's "The catalogue of the library, filed under what it is about, which is itself: everything here is filed under it, directly or through another book.", each subject's "The catalogue of mathematics: every book of mathematics in this library is filed under it." with its own name; the Dictionary, the Manual and the Design left as they stand, since their chapters are his word, the code the library binds with, and the sketch he keeps.

**Measured:** the top's page carries `href` to `/our-team/`, `/dictionary/`, `/chemistry/`, `/mathematics/`, `/pharmacology/`, `/philosophy/`, `/physics/`, `/the-manual/` and `/the-design/`, every row a reference; the root `/` is a shell forwarding to the top's page; the record removed 22 files the source no longer writes.

## <a id="verification"></a>Verification

Bound three times on 2026-11-03 from `library/.public/.binding` with `NODE_OPTIONS=--max-old-space-size=10240`: after Our Team, 10 books, 50 keys, 6.0 s; after the rename and the stubs, 10 books, 49 keys, 6.0 s, 11 pages read back as the browser will build them. Fetched from the preview on 4343: `/`, `/reference/`, `/our-team/`, `/mathematics/`, `/chemistry/`, `/dictionary/`, `/the-manual/`, `/the-design/`, each 200. Through the workbench, built: the top at a desk in 1,707 ms fresh, Mathematics at a phone in 529 ms, Our Team at a desk in 543 ms, 0 past the right edge on each.

## <a id="see"></a>To see it

```
cd library/.public/.binding
npm run bind
npm run preview -- --port 4343 --strictPort
```

Open `http://localhost:4343/inexplicable-phenomena/`, which forwards to the top book. The workbench: `node library/.subject/.manual/5-developing-the-library~workbench.mjs`, then `… look reference built fresh`, `… look mathematics built phone`, `… close`. Close it before renaming any folder under `library/`.
