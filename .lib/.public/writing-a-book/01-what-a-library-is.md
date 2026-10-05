# What a Library Is

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-09-27 on Doug's correction of the test library, so that a library can be built at all. The derivation is [The Semantics of Books](../the-semantics-of-books/.cover.md); the rules as the compiler holds them are [`catalogue/wellformed.ts`](../../package/.binding/catalogue/wellformed.ts); this chapter is the metaphor, said plainly, for whoever writes one. The chapter's name is a PROXY.***

---

**Doug, 2026-09-27, on the test library as it stood:** *"You are supposed to put a subject on something and that should be the name of the author. Why don't you use an autobiography of a librarian named Libby. Isn't her name supposed to be the subject of the autobiography? So then the subject of the library can be Libraries and the subject of her Autobiography can be Libby, and it should have a subject tag. This is what we agreed. Library Log is not a subject name so you aren't naming the author right. More broadly, it shows that we don't understand the metaphorical nature of the library. The metaphor is lost on you and you need to understand it and write it down as part of the developer story, so that you can even build a test library."* And: *"WE are all learning to specify a library formally. Let's nail down what it means… the autobiography is About Libby so it is a subject, so she is the subject and that is her name."*

## The metaphor, in one breath

**A library is books, and nothing else.** A book has a cover that says its title, who wrote it, and what it is filed under; a synopsis of itself; a table of its contents; and chapters. **Every book is filed under a subject, and a subject is a book** — the catalogue of what is filed under it, which says with its About that it is about something, so that others may be filed under it. **An author is a person, and a person in a library is a book too:** the book that is about them, by them — their autobiography, filed where they stand in the library. **One autobiography grounds the library**, the one book that is by its own subject; it is the librarian's, and it stands under the library she keeps. **The library's own catalogue is the top:** every book stands under it, directly or through another, and it is filed under what the library is about, which is itself said as a subject.

That is all of it. Everything the compiler checks is a consequence.

## What each word means

| the word | what it is | what its cover says |
|---|---|---|
| **a book** | the unit; a folder of chapters with a cover, a synopsis and a table | `<Title>[[ Its Name ]]</Title>` |
| **a subject** | a book that others are filed under — a catalogue. A book becomes a subject by saying it is about something: its own name, said as an About. It may catalogue nothing; but a book that catalogues others must be about something — Doug, 2026-09-27: *"any book can be about something but if a book catalogues others, it must be about something"* | `<About>[[ Its Name ]]</About>` — and then others may write `<Subject>**[[ Its Name ]]</Subject>` |
| **filed under** | the one place a book stands in the catalogue; the catalogue's table answers for it with a row | `<Subject>**[[ A Subject ]]</Subject>` |
| **an author** | the book of a person: an autobiography, or a book filed under the autobiography. An author is answered by nothing — the reference is the whole of it | `<Author>*[[ A Person ]]</Author>` |
| **the autobiography** | the one book by its own subject: about a person, by that person, filed where they stand — the librarian's under Libraries. **An autobiography is About its author, so the author's name is a subject, and there is exactly one autobiography in a library.** Doug, 2026-09-27: *"her subject is the library as she is its librarian, but her autobiography is about herself - Libby. It is a subject catalogue with zero books."* | `<Autobiography />`, `<Author>*[[ Libby ]]</Author>`, `<Subject>**[[ Libraries ]]( The Library )</Subject>`, `<About>[[ Libby ]]</About>` |
| **a biography** | a book about a person by someone else, filed under whoever vouches for it; About itself, it is a subject in turn, and what is filed under it may author | `<Biography />`, `<Author>*[[ Libby ]]</Author>`, `<Subject>**[[ Libby ]]</Subject>`, `<About>[[ A Persona ]]</About>` |
| **the library** | the top catalogue: filed under what it is about, which is itself, said as a subject — a library of one librarian is about Libraries | `<Subject>**[[ Libraries ]]( The Library )</Subject>`, `<About>[[ The Library ]]</About>` |
| **a catalogue's chapter** | the synopsis of a book filed under it, imported or written; the Synopsis puts the imported chapter's contents in and leaves the chapter's own title alone, since 2026-09-27 — Doug: *"the Synopsis can't use the title of the chapter… skip the title as a default and customize from there for your library"* | `<Synopsis>{TheirSynopsis()}</Synopsis>` |
| **a table of contents** | where a book answers for what it holds and, if it is a catalogue, for what is filed under it: a reference to every chapter of the book, the table itself among them, and an answer for every book of its subject — the two things the compiler requires of it since [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md), Doug's *link aggregator*. A row may refer to that book's own synopsis besides, and until then had to | `$[[ ./A Chapter ]]`; `[[ Their Name ]]**` |

**Words apart from a name.** Any of these may show one thing and mean another, the paren tight against the bracket: `**[[ Libraries ]]( The Library )` shows *Libraries* and means the book named The Library. That is how the top is filed under what it is about without a second book.

## Who may author, exactly

The compiler's own words, in [`catalogue/wellformed.ts`](../../package/.binding/catalogue/wellformed.ts): *"one book is by its own subject — the autobiography, and there can be only one of those — and a book may author when that autobiography is its subject."* So an author is either the autobiography, or a book filed under it. Doug, 2026-09-25: *"1. A book that is by its subject — There can be only one of those. 2. Any book catalogued by one that is a subject."* And again, 2026-09-30, at Sprint 95's reading: *"one autobiographical subject… And it may catalogue other books that can be referred to as an author by their subject name."* **Querying by author** is answered by the book the author names: `*[[ Libby ]]` is her autobiography, and a book's `author.means` is a reference to it.

## The test library, as an instance

| book | by | filed under | about | what it shows |
|---|---|---|---|---|
| **The Library** | Libby | Libraries — itself | itself | the top: filed under what it is about |
| **Libby** | Libby | Libraries | Libby | the autobiography: the one book by its own subject, the librarian's, filed under the library she keeps; a subject in her own right, with one book under her |
| **A Persona** | Libby | Libby | itself | a biography, filed under its author, a subject in turn |
| **A Paper** | A Persona | Libraries | — | a book by a book that may author, since its author's subject is the autobiography |
| **Some Projects** | Libby | Libraries | — | an ordinary book, paginated |

**What it stood as before, and why it was wrong.** The autobiography was a book called The Log, filed under The Library and About itself: by its own subject in the compiler's sense, and every author in the library was "the log". Doug: *"Library Log is not a subject name so you aren't naming the author right."* A log is not a person; a person's autobiography is About them, and their name is what an author reference names.

**And the first rebuild filed her under herself, which was wrong the other way.** Her cover said `**[[ Libby ]]` as its Subject, so she was her own root beside the library's — the compiler read two libraries, and the library's row for her had no other half. Asked where she stands, Doug: *"No her subject is the library as she is its librarian, but her autobiography is about herself - Libby. It is a subject catalogue with zero books. We allow this now, any book can be about something but if a book catalogues others, it must be about something."* So the Subject says where a book stands, the About says what it is; the two coincide only at the top.

## Two rulings on the compiler, 2026-09-27 — built 2026-10-02, when his own library was initialized

*Both stand in the binder since 2026-10-02, the day Doug's library began on the bare base with a top titled Dougs Library and About The Library, and an autobiography About The Librarian: a cover's second title form is the name of the subject its book represents, which need not be its title ([`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts), the pass headed "what each book is about"); `**[[ X ]]` and `*[[ X ]]` resolve to the book about X by that name, and the self-authoring rule is his — the book whose About is its author's name. And on his word that day, "make sure that the compiler enforces that we need to have a library catalogue", a book filed under nothing is no longer the library by default: the top catalogues itself or there is `NO-LIBRARY`. The consequence foreseen below holds: his top files under `**[[ The Library ]]` with no paren. The paragraphs that follow are the rulings as they were made.*

**The compiler reads the notation and never an element.** Asked whether an author should be answered among the subjects by their About, Doug: *"Yes, but we don't read About in the compiler. When the subject of the book is the same as the name of the author of it, it is self-authoring. We don't read about. You know that. You break polymorphism to have the compiler EVER care about a specific type of element. That should be fundamental in the design of the binder."* What the compiler reads today is the second title form on a cover, `[[ X ]]`, whatever element holds it — [`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts) filters a cover's forms by `form.is === 'title'` and never asks for an About — and it admits that form only when it repeats the title. **The self-authoring rule, in his words: the book whose subject-name is its author's name.** Today it is computed as the book whose author reference resolves to itself, by title.

**A book that represents a subject is not necessarily named for it.** Asked whether the About may differ from the title, Doug: *"YES a book that represents a subject is not necessarily named a subject. The Encyclopedia of Math might represent the subject of Math! We need to really in the design actually nail down the metaphor that the library represents, and what is a subject, author, catalogue in a library closed under books."* So the second title form's words are the name of the subject the book represents, and `**[[ Math ]]` and `*[[ Libby ]]` resolve there; a cover whose second form names another book is still titled twice. *A consequence: the top would be `<Title>[[ The Library ]]</Title>` with a second form `[[ Libraries ]]`, and the books file under `**[[ Libraries ]]` with no paren — the words-apart-from-a-name device stops being how the top is filed.*

**Both are built**, as the note at the head of this section says; the wider subject he set — what a subject, an author and a catalogue are in a library closed under books — is still the one his own library is nailing down, book by book.

## What is not yet nailed down

What follows from the metaphor for whoever builds and tends a library — closure as identity, why it decides the code, the questions in order and the tools — is [How to Be a Librarian](05-how-to-be-a-librarian.md).

Doug: *"WE are all learning to specify a library formally. Let's nail down what it means."* Open, and to be ruled: whether a book may be filed under more than one subject; what a topical catalogue is beside a subject catalogue, which the compiler already distinguishes; and, now that the About may differ from the title, whether the top's second form is *Libraries* or its own name. This chapter is edited as each is ruled.
