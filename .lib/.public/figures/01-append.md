# Append

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-28 with U1 and U2 of [Sprint 89](../projection/94-sprint-89--figures.md); the code is [`src/figures/Append.tsx`](../../package/src/figures/Append.tsx), the binder's half [`inventory/filenames.ts`](../../package/.binding/inventory/filenames.ts), [`inventory/chapters.ts`](../../package/.binding/inventory/chapters.ts) and [`assembly/book.ts`](../../package/.binding/assembly/book.ts).***

---

## What it is

**An Append is a file's contents, appended to its chapter by the binder, uninterpreted.** Doug, 2026-09-28: *"What if we be neutral and just call the annotation Append. Like an appendix, but by action… And then it's just text that has been appended to the chapter."* It is an annotation said of a chapter: its text is the file's text, or a picture's address; its two fields, written as attributes, are `identifier` and `type` as the file spelled them. It draws nothing of its own and is hidden as every annotation's writing is, wearing `pa-append`; the chapter's annotations hold it and anyone may find it, `chapter.annotations.find($Append)`. Nothing enforces that a figure shows it — *"We can't. But it will be there as an annotation."*

| member | what it is |
|---|---|
| `$identifier` · `$type` | the part of the file's name after the chapter's and its separator, and the extension with its dot; `<Append identifier="version1" type=".tsx">` |
| the text | the file's contents, or a picture's address beside the book's pages |
| `AppendSpecification` | **an append is said of a chapter** |

## How a file accompanies a chapter

**A file accompanies a writing when its name is the writing's extension-free name, one separator character, an identifier and its type** — `5-the-plate.version1.tsx`, `5-the-plate-figures.tsx` — **or the writing's name and its type alone**, `5-the-plate.ts`, whose identifier is empty and which a figure names by type. Doug: *"just skip a character, let them use what they want, and we make the dot a convention and recommendation."* So the dot is the convention; any character serves. Three consequences the inventory holds:

- **A numbered `.tsx` is a chapter unless it accompanies another** — its base being another chapter's name, a character and more — so a `.tsx` accompanying a chapter always carries an identifier, and a chapter's name may not be another's plus one character.
- **Identifiers are unique per type** among a writing's files: `chapter-name.id.tsx` beside `chapter-name-id.tsx` is refused, `CLASHING-IDENTIFIER`. Doug: *"the compiler would error on chapter-name.id.tsx, chapter-name-id.tsx, because ids must be unique per type."*
- **A file accompanying nothing is refused**, `UNACCOUNTED`, as before; the extensions a file may carry are a closed list, `ts tsx js mjs json md css sh txt csv svg png jpg jpeg`; the apparatus may have files too, `.cover.masthead.tsx`.

The accounting's refusals are the binder's own diagnostics, `file(1,1): error TAG: at — says`, four tags: `EXCUSED-INSIDE-A-BOOK`, `STALE-EXEMPTION`, `UNACCOUNTED`, `CLASHING-IDENTIFIER`. Doug: *"Make sure to have the binder/compiler deliver errors in a consistent way."*

## How the binder appends it

**In the book's module, which the assembly already writes.** For a chapter with accompanying files the module imports each text file raw, `import appended0… from '../manual/3-the-masthead-and-the-byline.code.tsx?raw'`, calls the chapter as it always did, and hands the element its Appends as added children through `cloneElement`. Nothing reads a chapter's source, nothing reads disk at draw, and a file that is not there stops the bundle by name. **A picture is never imported:** its Append's text is its address beside the book's pages, `/manual/6-the-mark-and-the-photograph.png`, and the render phase copies it there — an import gave the dev server's own address, `/@fs/…`, which no published page could serve. The structure reads a text file for what it refers to and refuses one that names; it never reads a picture.

## Promises

Three in [`.tests/append.test.tsx`](../../package/.tests/append.test.tsx): the identifier and type as spelled and the text the contents, front-most first; hidden on the page wearing its mark with the prose untouched; said of a chapter. Four in [`inventory/chapters.test.ts`](../../package/.binding/inventory/chapters.test.ts): a chapter told from a numbered file accompanying one whatever separates them; identifier and type for both spellings; the unaccounted and the unknown refused, a declaration excused; two files under one identifier and type named. One in [`assembly/book.test.ts`](../../package/.binding/assembly/book.test.ts): the module appends the manual's files, text raw, a picture by its address.

## Gate

Measured 2026-09-28: the package 302 of 302; the compiler's typecheck 0, unit 103 of 103, regression 40 of 40 with the manual bound and its picture served.

**Names.** Doug's: `Append`, `identifier`, `type`. Struck by him on the way: *Resource*, *Literal*, *Symbol*. Ours, flagged: the four diagnostic tags, *accompanying file* as the prose word, and `Accompanying`, `Clashing`, `imageTypes` in the binder.
