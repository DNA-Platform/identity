# Sprint 20 — the wart register

- **author:** [Libby](../libby-and-the-tended-garden/.cover.md)

---

Doug's charge for Sprint 20: surface names in `library/.public/package/src` (lib) and `library/.public/build` (the compiler) whose vocabulary is not the vocabulary of libraries and books — the compromises that look wrong. One row per name: where it lives, what it means, why it does not fit, and a **proposed** replacement. Never settled — Doug names framework things; I propose.

## The rule I read every row against

The semantics of the classes and members must be the semantics of **libraries, books, and writing**. A name fails when it borrows from another domain — programming (`emit`, `walk`, `where`, `xOf`), the courtroom (`verdict`), geography (`location`, `path`, `route`), shipping (`manifest`), or my own coinages (`seam`, `law`) — and a name is *suspect* when it collides with another name meaning something else.

## lib — `package/src`

| name | where | what it means now | why it does not fit | proposed (unsettled) |
|---|---|---|---|---|
| `utilities/` | dir | the toolbox — `html.ts`, `Composible` | chemistry's own documentation calls this `tools/`; two names for one idea | `tools/` |
| `$Theme` | writing/Theme.tsx | a bag of colours, faces, measures — the visual dress; `view()` returns null | a theme is **not writing**; it is how writing is *dressed*, and it sits in `writing/` | move out of writing/ to a dressing/design area; a book's look is its **dress** or **design** — `$Dress`? `$Design`? |
| `dressing.ts` | writing/ | a `styled-components` module augmentation | not writing — build/type glue misfiled among the levels | move beside `$Theme` (dressing/ or tools/) |
| `Composed` · `Laid` · `Lay` | writing/Theme.tsx | composition types (parts, parenthetical, run/each/one) | composition vocabulary orphaned inside the theme file | move to Composition or tools/ |
| `$Phrase` | writing/Phrase.tsx | a `$Word` subclass; the base for inline specials (`$Snippet` extends it) | "phrase" is linguistics, not a rung of the ladder; and a phrase is *more* than a word yet **extends** `$Word` — an upside-down inheritance | an inline-mark base needs a book name, not "phrase" |
| `$Snippet` | writing/Snippet.tsx | inline code inside a sentence | "snippet" is programmer idiom; and `Code.tsx` already exists for block code | inline vs block code wants one book pair — `$Code` (inline) / `$Listing` (block)? |
| `set0` | writing/Paragraph.tsx | a leftover member name | not a word of any domain | rename to what it does |
| `$TableOfContents` | book/ | the derived contents chapter | Doug already ruled the name wrong | `$Contents` (on the board) |
| `$Location` · `$Path` | reference/ | a reference's address — an index-match and a chain of them | geography/programming; a reference's address in a library is a **call number** / a **citation**, not a *location* on a *path* | Path → the reference chain (`$Citation`? already taken) ; Location → the indexed hit |
| `$Highlight` | reference/ | a span of a sentence named by position (`$first`/`$last`) | "highlight" is a reader's UI gesture; a named span in a book is a **passage** or an **annotation** | `$Passage`? `$Annotation`? |
| `$Catalogue` vs `$CardCatalogue` | reference/ vs library/ | the reference-collection interface vs the physical card catalogue | two "catalogue" names in two dirs — which is which is not obvious | keep one as *catalogue*; the other names the artifact (the drawer, the cards) |
| `$Denote` | document/ | the inline footnote cue that reads its note | "denote" is a verb dressed as a class — a command, not a thing | the note's **cue** / **callout** / **mark** |

## the compiler — `build/`

| name | where | what it means now | why it does not fit | proposed (unsettled) |
|---|---|---|---|---|
| `Reference` `Library` `Path` `Book` `Link` `Entry` | library.ts | the compiler's flat **description** of the folders on disk | every one **shadows a lib class of the same name** — the live book and the description of it wear one word | mark the description model apart from the live classes (a `Read`/`Survey` prefix, or a namespace) so `Book` never means two things |
| `Verdict` | validate.ts | a book's validation result | courtroom, not library — though `stands: boolean` beside it is exactly right | the review's **finding**; a **reading**; keep `stands` |
| `Role` (build) | library.ts | `cover \| synopsis \| chapter` | **collides** with writing's `Role` = `use \| mention` — one word, two unrelated axes | rename build's to `Kind`-of-file, or `Face`, freeing `Role` for the writing sense |
| `Complaint` / `fault` / `says` | library.ts, validate.ts | three words across the pipeline for "what is wrong" | one fault should have one name | settle on one — a **fault**, and it *says* its reason |
| `route` / `routeOf` | walk.ts | the reader-facing URL of a book | routing is programmer idiom; a reader arrives at a book's **shelf-mark** / **address** | the book's **address** |
| `dotsOf` · `roleOf` | walk.ts | count the dots / decide the file's role | `xOf` is programmer idiom | rephrase as what they read |
| `walk` | walk.ts | read the folders into a description | traversal idiom; the stage that *reads the shelves* | the **survey** / the **reading** of the shelves |
| `resolve` | resolve.ts | turn a name into the thing it stands for | programmer idiom, though close to *reference* | the **reference** pass — a name becomes a reference |
| `emit` | emit.ts | write the cards into the books | compiler idiom | **publish** / **print** / **issue** |
| `where` | where.ts | a query over the description | SQL idiom | a book-query verb |
| `Manifest` / `sort-order.json` | walk.ts | the person's chosen arrangement | shipping idiom | the **arrangement** / the **order** |

**One good name to keep, as the model:** `stands` — "the book stands" (validate.ts). That is exactly the register: a book that passes *stands*; the rest is courtroom.

## the documentation jargon — my own, and the two it hides

- **"seam"** (~111 places, mine). In the compiler it names the shared TYPE later stages read instead of the filesystem — a boundary where stages meet without touching. It is not a word of books. The code itself already says the honest word: the walk produces **"a description of a library."** So *the seam* is **the description** (or, where it means where-parts-meet, a book's **spine** — where the gathered pages are bound). Replace it; Doug did not invent it, and it may be hiding the fact that we never named the thing plainly.
- **"law"** (~85 files, mine). It does **two jobs**, and that is the wart: sometimes it means *what the model REQUIRES* (forced, not chosen — an `$Book` **must** have a cover at zero), and sometimes *what we AGREED* (a decision we could revisit — the shortest title takes the canonical). Those are different words. Forced → a **necessity** (or "the model requires"); agreed → a **convention** (or "our decision"). A library has conventions; a type system has necessities; neither has laws.

## The authorship ruling for this sprint

The register will live in the Sprint 20 chapter of `library/.public/.lib/projection/`. That book — **Projection** — is authored by **Arthur** (subject: Publicity), with Cathy coauthor on some sprint chapters. Per [On Authorship](../../../../bookkeeping/13-on-authorship.md), a book has one author; only the author or a coauthor writes in it. So the register must **route through one author**, not be co-edited by everyone who finds a wart: each teammate *reports* their found names, and the chapter's author *integrates* them into one register in one voice — the same "one writer keeps the record" the parallel-work rules already enforce. A register is a **catalogue of names**, and a catalogue has one cataloguer; co-editing it is exactly the drift the single-author rule prevents. For *this* register specifically, naming is my territory, so the clean arrangement is: I author the naming register as **coauthor** on the Sprint 20 chapter (Arthur runs the sprint and owns the book; I own the register within it), or I hand Arthur the finished register and he sets it. Doug's call on which. Either way: one hand holds the pen.
