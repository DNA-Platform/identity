# The Book File the Digest Never Read

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** library · tooling · blind-instrument
- **sprint:** [Sprint 117](../projection/122-sprint-117--binding-by-imports.md#u4)

---

## Symptoms

**The sprint's own demo answering one where the count had said twenty-eight.** One comment reworded in `.me/.claude/.manual/10-the-projects-page~code.tsx`, the project page's code, and a full bind:

```
specify    1 book read in 1 child · 1018 unchanged · 214 writings specified (804380 recorded) · peak 301 MB in a child (20.0s)
render     1 page drawn in 1 child · 1018 kept · 174 pictures · peak 497 MB in a child (7.6s)
bound C:\Source\dna-platform\inexplicable-phenomena\.me in 50.0s
```

The one book was Claude's manual, whose chapter the file stands beside. The 27 project books, each of whose book file imports that file to extend the project manual, were unchanged to the binder. The closure count run before any bind, `count-reach.ts` in the session's scratchpad, had said 28 books reach the file; the digest's promise was green at 3 of 3; the recovery bind an hour before had read one book for a prose change, which looked like the digest working.

## What it turned out to be

**The digest took its closures from `book.files`, and `book.files` are the chapters.** `inventory/books.ts` fills them with `account.chapters`; `inventory/chapters.ts` lists the apparatus without the book file, and `inventory/filenames.ts` says why: *`.book.tsx` is not one of them, because it is not a chapter — it is the book, the thing the other three are chapters of.* So `graph.digest` walked the imports of every chapter and every code resource and never the book file's, which is the one place every imported book extends its manual. A project book's chapters import the manual's annotations; only its book file imports the project page. Before [Sprint 117](../projection/122-sprint-117--binding-by-imports.md#u1) the digest held one hash of every `.book.tsx` in the library, so a book file's change reached everything; U1 took that away and reached nothing in its place. The count had walked `.book.tsx` by name, which is why it was right and the binder was not.

## How it was found

By the measuring bind, and only there: the sprint's number was the stage line, and the stage line said 1.

## Why no gate caught it sooner

**The promise's book was not the inventory's.** `.test/imports.test.ts` built its `Book` by hand with `files: ['.book.tsx', '.cover.tsx']`, a shape the inventory never produces, so the promise proved the closure from a book file the real digest never started from. And the count beside the binder walked the book file itself, so the two agreed with each other and neither with the bind.

## The repair, and the rule it leaves

`graph.digest` names the book file first among a book's own files, `join(book.path, '.book.tsx')`, before the chapters and the resources. The promise's book has the inventory's shape, `files: ['.cover.tsx']`, and a fourth assertion changes the manual's book file, reached only through the book file, and requires the digest to change: red against the digest without the fix, green with it. Found on the way and corrected in the same act: U1 had been built in the library's copy of the binder, `.me/..public/.binding`, against the rule in [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#home) that development happens in the master and the copy catches up by sync, the wrong turn Sprint 77 recorded; the three files were ported to the master with the fix and the copy synced. **The rules:** a promise's fixture takes the shape the code under test is given in the bind, or it promises nothing about the bind; and a count beside the binder is not the binder, so a sprint's number is the stage line and never the count.
