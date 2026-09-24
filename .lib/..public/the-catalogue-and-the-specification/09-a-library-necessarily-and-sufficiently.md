# A Library, Necessarily and Sufficiently

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The chapter name is a PROXY, flagged for Doug.***

**keywords:** library · name · address · slug · url · fragment · necessity · sufficiency · collision · proof

---

***Doug, 2026-09-20:*** **"You should have a spec of what a library is and you should look for things that would obviously be true. Use principles of urls. Do you ever get the same? When, then validate that that scenario is impossible. It should express necessity and sufficiency."** *This is that specification. It says what a library is in terms of names and addresses, states the invariants that are obviously true of one, enumerates every way two things could get the same address, and names the rule in [the binder](07-the-binder.md) and the promise in its suite that make each scenario impossible. Where a scenario is refused only by reading the built page, it says so.*

## <a id="words"></a>The two words

**A condition is NECESSARY when a library that lacks it is not a library**, *because some reference in it cannot work — two things answer to one address, or an address answers to nothing.* **A set of conditions is SUFFICIENT when a library that meets them all is one**, *in the only sense the compiler can promise: every name written anywhere resolves to exactly one thing, and every address written on any page lands on exactly that thing, once.* *Necessity is checked over the source, by name; sufficiency is proved over the built pages, by id — because the compiler [reads files and names and never a tag's attribute](08-the-binders-condition.md#b31), and what a page finally draws is the framework's.*

## <a id="what"></a>What a library is, in names and addresses

*A library is a set of books. A book is a set of chapters. A chapter holds mentions. Each of the three has a **name**, given in code — a book's on its cover, a chapter's in its `<Title>`, a mention's in `[[[ X ]]]` — and each has an **address**, which the compiler derives and nobody writes:*

| thing | named | scoped by | addressed as |
|---|---|---|---|
| a book | `<Title>` on its cover | the library | `/slug(name)/` — a page |
| a chapter | `<Title>` in its file | its book | `/slug(book)/#slug(name)` — a fragment of the book's page |
| a mention | `[[[ name ]]]` where it stands | its book | `/slug(book)/#slug(name)` — a fragment of the book's page |

**The slug is the whole of the trouble.** *It lowercases, drops apostrophes, spells `&` as "and", and turns every other run of punctuation into one hyphen: "Dougs Library" and "Doug's Library" are two names at one address; so are "The Sheet" and "the sheet", and "Five books, one book" and "Five books one book"; "???" is no address at all. A name is unique where it is scoped, and an address must be unique where it is served, and those are not the same test.*

*Two things the table does not show. A **resource** — code beside a chapter — is drawn on every page that wears it, so it has no place and may not name anything. And the **root**: `/` is a redirect to the root book's page, with a canonical link to it, so the one thing served at two URLs names which of them is its address.*

## <a id="principles"></a>The principles of a URL, as invariants of a library

1. **One thing, one address.** *Nothing is reached by two addresses. The root's redirect is the single, declared exception.*
2. **One address, one thing.** *No two things share a page path, and no two things on a page share a fragment — whatever names produced them.*
3. **Every address answers.** *Every reference written in the library resolves to a thing, and every thing draws an element wearing its id on the page its address names, exactly once.*
4. **Everything is reachable.** *Every book is listed by the catalogue that holds it, every chapter by its book's table, and every mention is referred to by something — a name nobody spends is refused, because a library is compact.*
5. **An address follows the name, never the place.** *Renaming a thing changes its address and every reference recompiles, because references are written as names. Moving a book between folders or reordering chapters changes nothing.*

## <a id="same"></a>"Do you ever get the same?" — every scenario, and what refuses it

*Each row is a way two things would meet at one address, or an address would meet nothing. Each is refused by a rule that returns a fault by file and line, and each rule has a promise in [`wellformed.test.ts`](../../package/.binding/catalogue/wellformed.test.ts) or [`proof.test.ts`](../../package/.binding/specification/proof.test.ts) built to break exactly that way.*

| scenario | breaks | refused by | where |
|---|---|---|---|
| two books with one name | 2 | `DUPLICATE-TITLE` | source |
| two books whose names slug to one path — "A Paper" and "A. Paper" | 2 | `SAME-ADDRESS` | source |
| a book whose path is where the binder writes its bundle — "Assets" | 2 | `RESERVED-ADDRESS` | source |
| two chapters, or a chapter and a mention, or two mentions, of one book with one name | 2 | `DUPLICATE-TITLE` | source |
| the same, with two names that slug to one fragment — "Table of Contents" and "Table Of Contents" | 2 | `SAME-ADDRESS` | source |
| a chapter titled with its own book's name, whose fragment is the cover's | 2 | `SAME-ADDRESS` | source |
| a name that leaves no address — "???" | 3 | `NO-ADDRESS` | source |
| a resource that titles a chapter or allocates a mention, and so stands on every page | 1, 2 | `RESOURCE-NAMES` | source |
| a reference to a name the library does not hold, in prose, in a string, or as an element | 3 | `UNKNOWN-REFERENCE`, and the transform's `missing` | source |
| a name nobody refers to | 4 | `UNREFERENCED-MENTION` | source |
| a chapter its table does not list; a book its catalogue does not answer for | 4 | `CHAPTER-NOT-LISTED`, `NOT-LISTED` | source |
| a heading wearing its own words as an id — "Cautions" in seven chapters | 2 | nothing to refuse: a heading wears no id unless a mention allocated it ([B32](08-the-binders-condition.md#b32)) | framework |
| a mention allocated inside a writing that does not print, so its id is never drawn | 3 | the proof: "nothing on this page answers to it" — the compiler does not read `print` | page |
| two elements on one page wearing one id, whatever drew them | 2 | the proof: "worn by N elements, and an id is worn once" | page |
| a link whose fragment answers other than once, on its page or another | 2, 3 | the proof | page |
| an address written without a leading slash, read against whatever folder serves the page | 3 | the proof | page |
| the root at `/` and at `/its-name/` | 1 | by design: a redirect carrying `rel="canonical"` | binder |

## <a id="necessity"></a>Necessity

*Every row above is necessary: a library in which any one of them holds has a reference that cannot work — it lands on one of two things, or on nothing, or leads a reader to a thing they can reach no other way. The compiler refuses each at the source where a name can be seen, and says which line.*

## <a id="sufficiency"></a>Sufficiency

***If the source rules hold and the proof holds, every reference works.*** *The argument is short. Every address the compiler writes is derived from a name that resolved to exactly one thing (the source rules); the framework draws that thing's element wearing that address's fragment, and the proof reads every built page and refuses an id worn twice, a fragment nothing answers to, and a link that leads to a page nobody built (the page rules). So every written address lands on the one element that wears it. What the source cannot see — a title that does not print, a kind that draws its own element — the proof sees, because it does not read the source at all.*

**What is not yet in the argument, said plainly:** *the framework's own ids (`root`) share the page's namespace and are not names; a kind that draws its own element outside the base's view ([B28](08-the-binders-condition.md#b28)) wears its id by its own hand; the reserved paths are one folder; and the slug of a name outside the Latin alphabet is not specified. Each is a row this chapter will gain when it is seen.*
