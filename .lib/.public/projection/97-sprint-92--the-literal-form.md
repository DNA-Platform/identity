# Sprint 92: The Literal Form

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Opened 2026-09-28 during [Sprint 91](96-sprint-91--the-comments-leave-the-code.md), brainstormed in the room with Doug the same day, `requirements-only`: his rulings are verbatim below and the requirements are drawn from them; the plan follows on his word. The workflow is the [feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md). The sprint's title is a PROXY; Doug's to rename.***

---

## Where this sprint comes from

**Doug, 2026-09-28, verbatim, questioning the figures:** *"Hmm, questioning our approach to figures. We might want to go back to our template language, and give more flexibility: `{{{ this }}}` … `{{{ whatever.tsx }}}` — And then an implementer can USE Append if they like as a way of inserting it in, but that is not the only way. Now we have to choose the bracketing right. What should mean: request my own representation? We need to demonstrate it's very different and even a whole different id system than the library references. What do you think? Any ideas? Maybe show existing syntax and your recommendation for new syntax."*

**What the room answered, and why braces cannot be it:** since [Sprint 90](95-sprint-90--the-binder-reads-with-the-parser.md) the binder reads the notation through the TypeScript parser, in JSX text and strings; `{{{ this }}}` in JSX is an expression holding an object literal that does not parse. Any character but `{ < > }` is open in JSX text, so the form is a sigil before brackets, as every form is. The room recommended `!`, markdown's own sigil for the one form that inserts rather than links, and `this` for the chapter's own file. **A correction owed him, made in the room:** the referring form today is `$[ X ]`, one bracket; the count of brackets has meant one refers, two titles, three names a place.

**His rulings, verbatim.** On the sigil: *"I Like ! but could it really mean something similar to what we are talking about here? We also want to support cross chapter… We do `$[[ ]]` — do we not? We should stick to two."* On the brackets, asked plainly: **`![[ … ]]` and `$[ ]` becomes `$[[ ]]`.** On the self word: **this.** On a words half: *"Nothing. This inserts a whole file in. No need to be anything else but what it is."* On reaching across chapters: *"Name on disk, but... let's not have it go across chapters. If it goes across chapters, it has no meaning which chapter its associated with. So: `![[ this ]]` And `![[ id.type ]]` And the compiler can now enforce that all resources are used."* On Append and Figure: *"Move Append to writing, as it's related to appendices, and a chapter writing can use Append if they want, or can do other things. Figures can read that if configured, but one might also just `![[ ]]` into the figure, and it should be the kind of thing where `<MyFigure> ![[ this ]] <MyAnnotation /> </MyFigure>` would parse correctly."* On the binder appending: *"No, append is the authors. You remove the flexibility if you have the binder do it. The binder can and should guarantee that every resource file (except this, which is optional) must be specified."*

## The language, before and after

| family | today | after this sprint | names | resolves against | compiles to |
|---|---|---|---|---|---|
| a reference | `$[ X ]` | **`$[[ X ]]`** | a title, `Book / Chapter` | the catalogue | `[words](url)` |
| a title · a place · the starred forms | `[[ X ]]` · `[[[ X ]]]` · `*[[ X ]]` … | unchanged | | the catalogue | `[words](url)` |
| **the literal** | — | **`![[ this ]]`** | the chapter's own file, as written | the file being compiled, before the transform | the text, one string expression |
| | — | **`![[ id.type ]]`** · `![[ .png ]]` | a file accompanying this chapter, by identifier and type, or type alone | the inventory's account of the chapter's files | the text; a picture's address beside the pages |
| | — | `![[ x.ts ]]` naming nothing · `![[ words ]]( file )` · `![[ ./other ]]` | | | refused: `UNKNOWN-FILE` · malformed, one slot only · malformed, no reaching across chapters |
| | — | a file no `![[ ]]` in its chapter names | | | refused, `UNUSED-FILE`; `this` alone is optional |

## Requirements

*Drawn 2026-09-28 from the rulings above; **approved by the rulings themselves**, each names what would be observed. The plan is owed.*

| | requirement | observed |
|---|---|---|
| **R1** | **The referring form is `$[[ X ]]`.** The language's table, the scanner and the transform read two brackets; one bracket is refused as malformed; every reference in the test library is rewritten; the docs that spell the form follow. | the language's promises; the test library binds; `grep -c '\$\[ ' ` over the test library is 0 |
| **R2** | **`![[ this ]]` compiles to the chapter's own source as written**, before the transform touched it, as one string expression where the form stood, so the element holding it receives the text. | a chapter writing `<Code>![[ this ]]</Code>` prints its own file on its page, `$[[ ]]` and `![[ ]]` uncompiled inside it |
| **R3** | **`![[ id.type ]]` compiles to the file accompanying the chapter** with that identifier and type — its text, or a picture's address beside the pages — and `![[ .type ]]` to the one whose identifier is empty. | the manual's chapters print their tool files through `<Code>![[ code.tsx ]]</Code>`; the mark and the photograph through `![[ .svg ]]` and `![[ .png ]]` |
| **R4** | **The form is one slot and one chapter.** A words half, or a name reaching another chapter, is malformed and refused at bind by name. | the wellformed fixture refuses both with their faults |
| **R5** | **A file nobody names is refused.** Every file accompanying a chapter is named by a `![[ ]]` in that chapter, or the bind refuses it, `UNUSED-FILE`; the chapter's own file needs no `![[ this ]]`. *"the compiler can now enforce that all resources are used."* | a fixture with an accompanying file and no form for it is refused; the test library binds |
| **R6** | **The binder appends nothing.** The assembly writes the chapter's module as before Sprint 89, without Appends; the render still copies pictures beside the pages. *"You remove the flexibility if you have the binder do it."* | the assembled module of a chapter with files imports none of them raw; the structure still reads text files for the references they spend |
| **R7** | **Append is an annotation of `writing`, the author's.** It moves from `src/figures` to `src/writing`; a chapter writes `<Append identifier="…" type="…">![[ id.type ]]</Append>` when it wants an appendix among its annotations, and may write anything in it. | `src/writing/Append.tsx`; the package's promises; a chapter of the test library writing one by hand |
| **R8** | **Figure reads an Append if configured, or the text it is given.** Its attributes name a hand-written Append; with `![[ ]]` as its text it is a letter holding the literal; `<MyFigure> ![[ this ]] <MyAnnotation /> </MyFigure>` binds and draws. | the figure promises re-read; the parse case a regression promise |
| **R9** | **Code highlights its syntax, HTML as part of code included**, by a mechanism Doug approves — carried from [Sprint 91](96-sprint-91--the-comments-leave-the-code.md#u9)'s D6, and researched in [Sprint 93](98-sprint-93--the-explorer.md)'s brainstorm: a dependency of `.public` for viewing code — **Lezer, ruled by Doug 2026-09-28** — the viewer's powers as annotations on the Code figure and the theme colouring the token marks. Doug: *"How can we have a very powerful yet customizable ways of viewing code for our Code component and for public in general."* | the manual's printed files coloured on their pages, in the library's ink, and Libby's dark book colouring them in its own |
| **R10** | **The docs say the language as it is.** [The Language](../the-catalogue-and-the-specification/06-the-language.md), [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md), the [Figures](../figures/.cover.md) book, [How to Be a Librarian](../writing-a-book/12-how-to-be-a-librarian.md)'s tools table and every chapter spelling `$[ ]` rewritten; the sprint records untouched, since they are the trail. | the checker of [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md#back-and-forth) at zero; `grep -c '\$\[ '` over the settled accounts at 0 |

**Out of scope:** reaching across chapters or books with a literal, ruled out; a words half, ruled out; markdown parsed as writing; the code's own library, [chapter zero](00-planning.md#the-code-library).

**Names.** Doug's: `![[ ]]`, `this`, `$[[ ]]`, *the literal*, *Append* in `writing`. Ours, flagged: `UNKNOWN-FILE` and `UNUSED-FILE`; *the literal form* as the sprint's name.

## Where things stand

**Next: `/ce-plan` on this chapter, when Sprint 91 has closed and Doug says.** The requirements are his rulings; the plan is owed — the units at least: the language's table and both readers; the resolution of `![[ ]]` against the account, which the inventory already holds; the assembly without Appends; Append's move, `src` on his yes; Figure re-read; the test library rewritten to `$[[ ]]` and `![[ ]]`; the fixtures for the four refusals; the docs; the gate and a galley diffed against Sprint 91's.

**Read first, for the plan:** [`catalogue/language.ts`](../../package/.binding/catalogue/language.ts), the table the two forms enter; [`catalogue/source.ts`](../../package/.binding/catalogue/source.ts) and [`reference/transform.ts`](../../package/.binding/reference/transform.ts), where a literal is compiled as a splice; [`inventory/chapters.ts`](../../package/.binding/inventory/chapters.ts), whose account of a chapter's files is what `![[ id.type ]]` resolves against; [`assembly/book.ts`](../../package/.binding/assembly/book.ts), the appending to remove; [Append](../figures/01-append.md) and [Figure](../figures/02-figure.md) as they stand.
