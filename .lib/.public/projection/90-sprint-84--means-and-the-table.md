# Sprint 84: Means and the Table

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** brainstorming — opened 2026-09-26
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

## Where things stand

**Next: the brainstorm continues** — the phases of a writing, the table of contents drawn from its chapters, and the Table attribute; requirements not yet written.
