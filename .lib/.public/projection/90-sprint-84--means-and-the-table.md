# Sprint 84: Means and the Table

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** requirements-only — brainstormed 2026-09-26, eleven requirements approved
- ***The sprint's name is a PROXY, the room's, taken from Doug's two words for it; his to rename.***

---

## Where this sprint comes from

**Doug opened it:** *"For next sprint. I see we have reference on Title. Give Chapter a link to its title, and then can't table of contents just enumerate the chapters, including its own, in its gettable property, and just get all of the references? That's mich simpler. We should hopefully be able to use that to create some sort of property where the chapter refers to it's book, which it can get from its title. Then we need to figure out synopses. How does the synopsis attribute work? Where do we get and store the reference back to the book it is a synopsis of. Remember that in cataloguing books that represent subjects, chapters will be synopses of some other book, so the synopsis attribute itself might take the title of a book."*

## What the catch-up found

- **Chapter's canonical is already its Title**, found among its text; **Title has `chapter` and `reference`**, its Reference holding the address the compiler gave it — `/a-paper/#the-argument`.
- **The Genesis, E33:** *"A catalogue entry is a chapter that is a synopsis; the catalogue may print or import it. The table of contents for a synopsis is a chapter carrying the link to its book. Self-link chain: cover title → book; synopsis → cover; table of contents → synopsis → cover."* The implementation notes: *"Synopsis — conveyance; points to Cover"*, the mechanism *"inferred (a Reference)"*.
- **Author, Subject and About** each read the compiled `[name](address)` and stand a Reference — the shape a Synopsis naming its book can take. **v1** named it inside the synopsis, `<Synopsis><For>A Paper</For>…` — evidence, not canon.
- **Chapters in chapters are designed in:** Chapter is permissive, and `parts` splices a child of its own class. **But a nested chapter's title would wear its id on the host page**, and `proof` refuses an id worn twice.
- **Chemistry's lifecycle:** the phases `setup`, `mount`, `render`, `layout`, `effect`, `unmount`, awaited with `next(phase)`; async bond constructors, awaited with `next('construction')`; "formed" is the atom layer's flag for persisted state. **A book's own `$Define` runs last, after its bond has sorted every chapter in** — so a book is whole the moment its bond is done.

## Rulings of the brainstorm, verbatim

| on | Doug's words |
|---|---|
| **how a Synopsis names its book** | chosen, of the options offered: *"A reference inside it"* — `<Synopsis>$[ The Log ]</Synopsis>`, which the compiler writes as `[The Log](/the-log/)` · *"Also for synopsis, <Synopsis /> perhaps can find its chapters title in contents and use that as its reference if none is provided"* |
| **a catalogue's synopsis chapters** | *"Maybe it is a chapter that renders it, and then decorates it. That seems more straightforward. Chapters can be in chapters."* |
| **Content** | chosen: *"Content stays for drawing"* |
| **means** | *"Yes the chapter can expose its title through a get property, which then exposes its reference. Maybe we cann that: title.means = Reference to chapter; chapter.mention is a get property that returns title.means. We can have: synopsis.means - this can be a reference to the book that it is a synopsis of and we agreed that synopsis will support the ()[] syntax handed to it from the compiler, or get its book. Book can mean what its Cover means - return that, because a link that goes to the cover is one that goes to the book"* · *"Synopsis is an annotation. It can have a reference perhaps, and can other elements then access that references - its means property, which I don't want to put on a base class for now, can be its reference to a book"* |
| **the Table** | *"No, we just have a type of paragraph? which is a table. Table might even be an annotation that adds classes to the parts of a composition. It could take $rows and figure out columns, it could take $row and $columsn and validate, and it can add classes that allow a grid. It can add pa-table to the writing and whatever classes a grid would normally add to its cells. Table as attribute is probably the most elegant way to do this, and it is something that operates on the parts of a composition, adding and removing classes there by authorship"* · *"A table is a way of interpreting a composition, and the attribute can handle annotating the various contents as needed"* |
| **the dynamic table, and phases** | *"I don't understand what you mean by seen. Maybe the compiler down't need to validate that the table uses references, because it could be dynamic. But don't all the chapters have to be built before the table works? Using the table is dynamic, and we are going to have to figure out what's allowed to happen after render. We do have the ability to override formed or something - we have the ability to do async stuff in $Chemistry so catchup on that. It looks like we might need multi-phase rendering sometimes. Let's design it"* |

| **$Bound** | asked whether the moment a book is whole needs a hook of its own: *"I like this - let's call it $Bound, another method like defines. And yes, as the last thing it does in its bond constructor, after defines, it calls $Bound downward, top to bottom? $Bound is on writing. Maybe $Bound itself is responsible for calling it downward so it can be modified, and maybe the pattern would be to call super AFTER you are done? It is a parent preparing itself for its children right? So in the extension notes, bound calls bound on all its contents and annotations after it binds itself, and then $Book is the only bond constructor that actually calls it"* |
| **written and drawn tables** | *"Written! We want compiler support. Even if we remove the check - because a check on the chapter titles guarantees the table of contents attribute has what it needs, let's test that the references work. And then have another book with a table of contents that is drawn. You have more than one book"* |
| **the Table's marks** | *"Classes by authorship. but study the class layout of the popular grid libraries and copy it for pa- classes. Remember it can also add classes to the parts and so on"* |

| **approving the requirements** | A and B: *"Approve A and B"* · C: *"Approve and I hope you see that Table is a stylistic thing, the table of contents is an attribute, the links are dynamic, but the three can work together, and if one doesn't want to use the dynamic links they can hand write them with compiler syntax. We can assume that chapter 1 is cover, 2 is synopsis and 3 is table, and this will help dynamic table generators"* · D: *"I want this to be an informal way to implement the thing. Can we make this not a specified thing, but maybe the Synopsis attribute knows how to see another chapter that is a synopsis and reach in and get what it needs?"* — with the shape `<Chapter>` · `<Title>` · `<SomeOtherImportedSynopsis>` · `<Synopsis>` — *"And then someone can just write a synopsis by hand. It doesn't need to be borrowed"* · E: *"Approve E"* |

## Requirements

*Approved 2026-09-26. **Three things work together and each stands alone:** the Table is a style, the TableOfContents an attribute, and its links dynamic — and anyone may hand-write the links in compiler syntax instead. Each requirement says what would be observed if it held.*

### A. What writings mean — `means`, per class and on no base

| | requirement | observed |
|---|---|---|
| **R1** | `Title.means` — the Reference a title stands to its chapter, the proxy `Title.reference` renamed | the argument's title means `/a-paper/#the-argument` |
| **R2** | `Chapter.title`, its Title, and `Chapter.mention`, its title's `means` | every chapter of the test library answers both |
| **R3** | `Book.means` — what its cover means, *"because a link that goes to the cover is one that goes to the book"* | the paper means `/a-paper/` |
| **R4** | `Synopsis.means` — the book it is a synopsis of: the reference written inside it, `<Synopsis>$[ The Log ]</Synopsis>`; else, reaching into its own chapter, the `means` of a chapter there that is a synopsis; else its chapter's mention | the three cases, each in a unit promise |

### B. `$Bound` — the moment a book is whole

| | requirement | observed |
|---|---|---|
| **R5** | `$Bound()` on Writing, like `$Define`: a writing binds itself, then calls `$Bound()` on its text and its annotations, top to bottom; an override does its own work and then calls `super.$Bound()` — *"a parent preparing itself for its children"*. **Only `$Book`'s bond constructor calls it**, last, after define | a paragraph three levels down finds its book whole in its `$Bound`, the cover and the table found; a book that binds draws and paints as often as one that does not |

### C. Tables of contents

| | requirement | observed |
|---|---|---|
| **R6** | `TableOfContents.contents` — the mentions of its book's chapters, depth-first through chapters in chapters, its own included, in book order | the paper's table answers its five chapters' mentions in order |
| **R7** | Written tables stay written in Contents, with the compiler's support, and their references work: every written entry is among the table's contents | a promise over every written table of the test library |
| **R8** | Some Projects' table is drawn from its contents; a drawn table may assume *"chapter 1 is cover, 2 is synopsis and 3 is table"*, as the compiler writes them; the compiler's rule that a table refers to every chapter is removed, since every chapter's title already guarantees what the table needs | Some Projects binds and its page lists every chapter; add a chapter and the table lists it with no edit to the table; photographed |

### D. A synopsis in a catalogue — informal, not specified

| | requirement | observed |
|---|---|---|
| **R9** | A catalogue's chapter may hold another book's synopsis chapter, imported, beside an empty `<Synopsis />` that reaches in and takes its `means` — or a synopsis written by hand, naming its book. Nothing specifies it | The Library carries a chapter holding The Log's synopsis; its Synopsis means `/the-log/`; edit The Log's synopsis and The Library's page follows |
| **R10** | In `$Bound`, a title whose `means` is not its book's stands no Referent — so a synopsis drawn in another book links home and wears no second id there | The Library's page wears `id="synopsis"` once, and the proof passes |

### E. The Table — a way of interpreting a composition

| | requirement | observed |
|---|---|---|
| **R11** | `Table`, an annotation interpreting a composition as a grid — rows its parts, cells their parts; `$rows` and `$columns` optional and checked in `specifies`; by authorship, classes copied from Bootstrap and Tailwind — `pa-table pa-cols-N` on the writing, `pa-row pa-row-start-I` on each row, `pa-col pa-col-start-J` and `pa-col-span-K` on each cell — taken back in `erase`; its note carries the sheet, rows drawn as `display: contents` | a written table's rows wear `pa-row` and its cells `pa-col`, the page laying them out as a grid, photographed; render counts unchanged |

**The visible end:** three pages, photographed — Some Projects' drawn table, The Library's chapter holding The Log's synopsis, and a written table laid out by the Table. **What a hand-written page cannot fake:** a chapter added to Some Projects appears in its table with the table untouched; an edit to The Log's synopsis appears on The Library's page.

**Out of scope:** E33's Canonical; Part; a table drawing itself from its contents in every book.

## Where things stand

**Next: `/ce-plan` on this chapter.** The requirements are approved; nothing is built. *Status: requirements-only.*
