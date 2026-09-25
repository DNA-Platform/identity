# Sprint 82: Chapter and Book

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** closed — planned, built and compounded 2026-09-25, local and not pushed; `/ce-brainstorm` for Sprint 83 next, on the Genesis
- ***The sprint's name is Doug's subject, "Chapter and Book"; opened 2026-09-25.***

---

## Where this unit comes from

**Doug set it at Sprint 81's close:** *"There is no newer stream afaik so if you see the topic, it was in the old conversation anyways. We did references and mentions. Chapter and Book can be next and we need to figure out how to write them. I think chapters will get their own function components. Books will be compiled to import the chapter components call the functions and send them into the book as children. We will decide if the book should be a function or go straight into the page that it represents."*

**And opened the brainstorm on the annotations:** *"Chapter and Book. Start with Genesis, really think about annotations, because this is going to be a place where we don't just use them as defaults but start building things like Cover and TableOfContents and Synopsis whatever we do for Subject and Author to all be attributes."*

**It is also the Genesis's own next step.** [Sprint 80](86-sprint-80--format-and-theme.md) wrote the order down — *"then ordering and parts at E26 and E27, which are built; and the books only at E29"* — and everything before E29 is now built. Sprint 81's browser drive moved here as this sprint's visible end, since a page the redraft draws is what Chapter and Book begin. **And its purpose, in Doug's words:** *"This will be the sprint where we standup enough of ..public to have a test library for its compiler. The compiler is being co-developed, not backed in. That's relevant."*

## What the Genesis says

| | the event | and Doug's ruling on it since |
|---|---|---|
| **closure** | E29: *"Every piece of writing is in a book… A thing that contains sections is a Chapter."* E37: every exterior candidate is admitted as a book | — |
| **the levels** | E30: Chapter 5, closed and permissive; Book 6, closed and strict (E62). E32: *"Book is the top."* E31: *"Part is the Book that goes in a book,"* for nested tables of contents | Letter 1 to Book 7, so **Chapter 6 and Book 7** (ruling 3 of Sprint 79) |
| **the canonicals** | E30: a Title and a parenthetical-by-default Summary first in a chapter; Cover, Synopsis and Table of Contents first in a book. *"Heading/Title/Cover are referents that mean each; Summary/Synopsis convey meaning for display; the Table of Contents is a container for titles and potentially summaries"* | *"Title extends Heading."* The summary optional, and when absent one constructed and appended, parenthetical: *"a proxy."* The cover *"is the first, but that one also must carry the $Cover annotation which is what `<Type>Cover</Type>` will resolve to"* |
| **typing** | E32: *"Annotations are the typing mechanism going forward."* E35: *"a Type does not know what it means; weighs on specification when subclassed"* | **levels are classes; the cover, the synopsis and the table of contents are annotations a chapter carries** — *"We have a type as an annotation, but not every instance of writing has a type like it does now"* |
| **the bound book** | E35: *"The Book is bound, abstract, cannot be annotated directly; its Cover represents it… A Book sees its Cover's types and decides it deserves them."* E57: the book imports its cover's By and About | *"The Cover annotation can only be applied to a chapter. The book can find its cover with it. The book can lift the annotations it wants out of its cover and do whatever with them"* |
| **subject and author** | E34, E49: they start at the book. E51: `<Type>Subject <Of>Math</Of></Type>`, short `<Subject>Math</Subject>`. E52: the compiler fills the link. E56: About and By | see the rulings below |
| **chapters are documents** | E33: *"Chapter renders in isolation; Book composes chapter functions."* The self-link chain: cover title → book; synopsis → cover; table of contents → synopsis → cover. The Canonical, a nameless Letter that means something | the Canonical a Letter that means something, written by the author |
| **the address** | — | *"Titles should have ids as part of both the book and chapter system. They are mentioned by default in the classes"* |

## Found by reading, before any design

- **A chapter function must be called, not rendered — verified in chemistry's bond.** A plain function component written as a child is wrapped in a `$Function$` chemical ([`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts), the branch at `typeof type === 'function'` and the class `$Function$`), so `<Book><TheArgument /></Book>` would hand the book a function chemical that `parts` never sees, where `<Book>{TheArgument()}</Book>` hands it the `$Chapter` itself — which is Doug's *"call the functions."* *A called function holds no hooks.*
- **Chemistry resolves a name to a class already — by reading, unproven in the redraft.** A formula files a specimen under a name and the render walk swaps it in while it is still an element, before the parent's bond: [The Formula](../../../chemistry/.lib/composition/12-the-formula.md) resolves `<Type>Autobiography</Type>`, and v1's `$Type` was built on it.
- **E30's "referents" is a word about the model, not the Referent annotation.** *The stream's own vocabulary files referent, conveyance and container among Doug's words for what something is, with no surface of their own; the Referent annotation is E22's. A title standing a Referent was our assumption, and Doug struck it.*

## Rulings of the brainstorm, verbatim

| on | Doug's words |
|---|---|
| **Cover, Synopsis and TableOfContents** | *"Have you not read enough? We have an annotation system right? We are using it. They are going to end up holding the format and then also do structural validation, like coexpression with other annotations."* |
| **the book** | a function, as the chapters are: chosen from *"A function"* over *"straight into the page"* |
| **subject and author** | *"No those have both text and urls. The url goes to a reference annotation, and they, as annotations, will have to expose something that the book likely exposes too. It is similar in needing the wrapping, but I think we can repurpose Reference for this."* |
| **titles** | *"We didn't build Title yet... Who said it is a Referent?"* — what stands is *"Titles should have ids as part of both the book and chapter system"*; how a title gets its id is designed when Title is built |
| **scope** | the core alone — Chapter, Title, Book, Cover, Synopsis and TableOfContents, By, About and Subject, and the compiler assembling books; Part, the built summary, the Canonical mark and `<Type>` by name wait |
| **the test library** | *"Rewrite teh library at the end - we will have a lot - and we can focus on using what is in the library now. And test the ..public compiler on that"*, and then: *"The test library has to move to this framework. We should be able to test the compiler with it right? So in ..public, we drop the v1 dependency in our test library this sprint. We can rewrite the whole test library based on what we will have at the end of this sprint."* So the compiler's test library in `.public` resolves the redraft this sprint, and is rewritten whole at its end |
| **self-reference** | *"We like self-referential links. Document this. There are a lot of fixed-points in this framework. it is fine"* · *"The way we handle them is to style them so they don't look link-like with no underline and maybe no pointer"* · *"We are building a mathematical structure that relies on fixed-points to comprehend authorship and subjectivity so... you have to embrance them"* — written into [Word, Sentence and Paragraph](../writing/09-word-sentence-and-paragraph.md#self-reference) |
| **title, as reviewed** | *"I think a Heading expresses its section. We want a Title expressing its chapter. We can make it its own construct, and it can be at the Sentence level (Heading can too since things are permissive). I would say we want a similar relationship, so the code will be similar, between Title and Heading. Title gets the compiler syntax, so it also has the Reference annotation right?"* — which supersedes *"Title extends Heading"* of 2026-09-21 |
| **finding the canonical** | *"If Book can operate by type, it's more important that it has only one Cover, and no need for it to be first. Same with Chapter and Title. They can do a by type canonical (no need to abstract), and Chapter type checks, whereas Book annotation type checks for a Cover. As we go up in levels, the detection mechanism changes. Heading has to be the first. So it gets more abstract"* |
| **Cover, Synopsis and TableOfContents, as reviewed** | *"Yes approved"* |
| **subject and author, as reviewed** | *"Doesn't the compiler decide the link? Check them. Author goes to a book that represents the Author. Subject to a book representing the subject - not sure why # is sos important in the compiler. Why can't it be the normal url and it just is a self-link? It feels like there is a hack in the compiler where there shouldn't be"* — checked: the url is the catalogue's; the `#` is a special case at `transform.ts` that marks only links to a book's own page, left from Sprint 73's words-alone self-link |
| **the Genesis, checked** | *"Does Genesis have any insights here? Just want to make sure we are following it, even though the spec has changed."* Read against the round: E33's self-link chain and E52's compiler filling the link side with the normal url; E7 and E30 make Heading and Title parallel referents; E7 and E30 begin by position and E32, E34, E35 and E62 move to meaning, so detection growing abstract up the levels is the Genesis's own drift; E55 answers itself that the link in an annotation is *"a form of annotative meaning"*; E52 gives referential integrity to the compiler |
| **self-links** | *"This is a great point. We are about it for Subject and Author. Oh! Use the url as an id. Doesn't the title of the book get a url, and the subject and author? Compare them. The subjective author is one whos title has the same url as its Author link. The library is the same for subject"* — so the compiler writes the normal url everywhere, and the fixed points are recognized by comparing urls as ids |
| **section** | *"Keep by class"* — Section finds its Heading by class wherever it stands, as ruled 2026-09-22 |
| **the requirements, reviewed** | Chapter, Title and Book approved but for one thing: *"Not marking itself. Just using the thing given from the compiler right?"* — a Title stands the Reference the compiler's `[text](url)` gives it, and nothing more. Author, Subject and self-links: *"Approve but we need to decide where we are drawing these things. We need formats. We would need annotations for book I think."* The compiler and its test library, and the visible end: approved |
| **the close of the brainstorm** | *"Okay finish up brainstorm so we can move to plan"* · *"You will have to look at the existing code and work through warts as you go"* |
| **the terminology** | *"on whatever you need, because you aren't using proper terminology. There are lots of great documentation on how to develop .public and this is us using it"* — the catch-up corrected refusal to *raises* and *does not specify*, the gathering word "roles" to the names, "a book that authors itself" to the autobiography, the order to subject then author, and coexpression, an explaining word, out of a rule's name |
| **the compiler's guide** | *"No! The compiler should enforce as much as possible based on what it gives. Put that as the implementation guide of the compiler. We don't move things out of the programming language because we can catch them in unit tests."* — asked whether a table's completeness should move to TableOfContents' specification, as [Specifying a Library](../writing-a-book/07-specifying-a-library.md#the-line) would have had it; R13 and R21 stand, and the guide is [the compiler's](../the-catalogue-and-the-specification/07-the-binder.md#guide) |
| **a table not shown** | *"Maybe a certain book doesn't want to show the table of contents. But they can collect everything as annotations, store them, and present the table in another way. They still need to put everything on the page the right way even if it's all invisible."* — R27; a table of contents is never dropped to make a layout work, as [The Cover Is a Cover](../the-type-system/08-the-cover-is-a-cover.md#his-cause) records |
| **four, not two** | *"Yeah we didn't do this right. Don't we need 4 things? Expressing the author, expressing thge subject, and then whether it is an author and whther it is a subject? I don't think you are reading the compiler right. ALso make a library folder for this , like we had in v1"* — the compiler's language already has the four as the two ends of two edges: `*[[ X ]]` and `**[[ X ]]` express the author and the subject, written in the book; `[[ X ]]*` and `[[ X ]]**` say this writing is the author or the subject of X, written in the other book; the requirements on subject and author are reopened, and the classes go in a `library` folder as v1's did |
| **the tags** | *"What are the things you write based on the compiler that help you specify a book. What are all the tags"* |
| **By, About and Subject** | *"By/About and Subject, and if we make the Subject the name of the author, we can avoid one thing - and then allow subjects with no books - they represent a subject with nothing in it yet"* · *"By and About refer to author and subject. Author and Subject denote books that represent one"* · *"We can make life easier by deciding that the subject has to be the name of the author"* |
| **the subject, an alternate id** | *"Subject ends up like an alternate id for the book"* · *"Doug Rubino is the subject in my library that represents me. I can choose to display it in some other way. Maybe this removes one part of the language"* · and asked which part: *"It always way an alternate id, don't change anything. I mean that the subject gets the books id back right< But it a different label from the title. A thing that represents a subject, any title other than the name of the subject has two titles effectively"* — the language stands; a label that differs from the title is the words, and the book's id is the paren, as `**[[ Doug ]]( Dougs Library )` already writes |
| **text and id** | *"But the buy and about need () too don't they? They should get urls like everything, no? Or are they just like mentions?  Confirm that the syntax supports () and that it gets the urls back"* · *"You always need to be able to say text versus id as an option"* — confirmed by running the compiler's transform from a cover: `*[[ written by the persona ]]( A Persona )` gives `[written by the persona](/a-persona/)`, `**[[ shelved under the library ]]( The Library )` gives `[shelved under the library](/the-library/)`, the postfix forms likewise, and only `[[[ X ]]]` gets an id; written in the library's own cover every form naming The Library gave `#`, which R17 removes |
| **Subject collapses the author syntax** | *"So what happens if we decide that Subject collapses the Author syntax. So if By every corresponds to a subject that is self-By-ing or catalogued by one, it is an author. We should be able to get rid of syntax. That seems like a pretty simple way to do this. Does that remove a part of the compiler language, and can we adjust the brackets to accommodate that if it makes a space?"* Answered from the compiler: who may author is already derived from By and About, and only the two-way rule leans on `[[ X ]]*`; so it leaves the language, and on the space: *"Leave it free."* And the rule: *"Read this and see the correctness - a book that is by it's subject, or catalogued by one is a potential author"* — which gives the test library's own authors, the log by its own subject and the persona catalogued by it, and drops the second half, "and authored by that same catalogue" |
| **the postfix, shifted** | *"Wait don't we have a **? Something should fill that spot and the other one should change too. And in fact, the author and subject link, do they just become two subject links?"* — asked with both tables beside each other: *"Shift them"*; and of By and About as two subject links: *"We need to knkw which is which"* — so they keep one star and two; then *"Print the syntax for me. Let me edit it but first you show me"* |
| **lined up, and the star says it** | *"No this is where we need help. How do you identify the Author? You need to know that the subject is who wrote it. But then on By and About, which aren't in the compiler, how does the compiler know it has specified the author or the subject? We need to tell it that it is a subject lookup but it is for specifying the author. These don't line up. These need to be: [[ X ]]** this is subject X → the catalogue answering for X; [[ X ]]*** this is a catalogue of X → the topical catalogue answering for X. For things to line up"* — the shift reversed; and asked whether the star or the tag tells the compiler which subject a link specifies: *"The star says it"* |
| **built on the test library** | *"Implement these changes on the test library and confirm that all syntax works and that you can validate the whole library"* · *"Make sure that the compiler has code to construct the whole library, and that it understand the structure and validates it. I just want to make sure we are doing something robust. Please, after you are done with your work, validate that it is being understood correctly"* |
| **one step** | *"No clue what catalogued by one means but the subject is a singular catalogue, which is a type of topic. But topics are not property in a tree and can be many to many"* · *"This should be specified in the code.. 1. A book that is by its subject - There can be only one of those 2. Any book catalogued by one that is a subject"* — written into the compiler's colouring as the two clauses, K2 |
| **the same url everywhere** | *"I don't like the special case. Just give the same urls everywhere"* — the transform's `#` for the page a link stands on is gone, K2 |
| **Self** | *"What's with pa-self-reference. Yes just leave it off for now, and we'll figure it out later. Why don't you subclass Reference to make a $SelfReference as a type of reference that works the same, but it also appeans pa-self-reference, and make export it as Self, put this in the $Reference file and read about and adhere to the highest coding standards"* — K3; R16's url comparison left for later |
| **the main line** | *"You know you are rewriting the test library to use this one, and to do that you need to get chapters working as functions, books as functions, rendering them in the compiler..."* |
| **`.public`, and `.archive/.public`** | *"Move .public into archive and change the name of what we are using to .public from ..public. You will have to clean the modules and anything else big out of it, but do this, and let's officially have this code be .public and refer to .archive/.public for references to the last version"* — the redraft is `library/.public`; v1 is `.archive/.public`, its `node_modules` gone and its `dist` kept for the two that still read it |
| **the plan's brief** | *"Let's do it. Let's get the meat of this. I want enough implemented for the test library to live here. We need chapter and book compilation. We will write them as functions - empty function components - and they will be called when a book renders. So too for books. We don't have a compiler that does this yet. We need the .public tests running that can call specify on the test library. We need a first draft of all of it so .public stands on its own"* |
| **what the compiler reads** | *"You don't need the compiler to check for anything. You can't! They might subclass them. That's why they are in special files"* — so it reads files and the notation, and never a tag |
| **a title's id** | *"It uses the compiler syntax!! Please know this. All titles in chapters use it"* — the url a title's `[[ X ]]` compiles to carries its id, the fragment |
| **the cover, redesigned** | *"We need to redesign By and Aout etc... we need to nail it down. We don't have the pattern yet and I need help"* · *"We need to figure out how compiler syntax relates to these classes"* · then a full book's cover as `<Chapter> <Cover /> <Title>My Book</Title> <Author>Me</Author> <Subject>My Life</Subject> <About>Doug</About> </Chapter>`, the About *"That it is a catalogue - that it can be a subject"*: *"I think, in each case, we want them to be annotations, but only the title is a real element. All the rest are annotations, and book can reach in an expose them, and then everyone can access them"* |
| **annotations of annotations** | asked whether the syntax goes `[[ X ]]` for the title, `*[[ X ]]` the author, `**[[ X ]]` the subject and the title form for About: *"Yes you can, but we are deprecating By and they are all annotations. Maybe they can each create a Reference as one of their own annotations, expose it as a property, and then it can be used. Annotations of Annotations"* |
| **About** | *"Any book can be About something, but that allows other books to then be able to use it as a subject catalogue and this one needs to be written with links because it is about that subject"* · and `<About>Me</About>` beside `<Author>Me</Author>`: *"This is a self-authoring book"* · *"I'm not using the compiler syntax but we can imagine it was added in so that these components are getting uirls where needed"* |
| **the pointer** | a self-link keeps its pointer — chosen from *"Keep the pointer"* |
| **the test library's form** | *"Good go for it. You might need to change the test library code to accommodate what we have. The library is pretty bare now, but it is worth moving into this minimal form because we should have everything we need to do compiler tests, and we can evolve it to look more like a correct library as we get there"* |
| **Title and Heading** | *"Make Title and Heading their own files in library and writing respectively please"* — `3852c1e`, the two module cycles declared in the build |
| **the ordinary view** | asked which layer hides an annotation's own writing: *"I think, if we want to have a theme, it is a format annotation that is also a theme that is global to a book. The annottaion validate that it is a book. And we can use its style"* · *"Yes good to make one local to the test-library"* · *"And we can put that in the documentation as an extension-point for book. One might give the book a format called Theme which is a theme, which would be realized in its .book or as a resource in one of its chapters, perhaps as an appendix"* — the test library's `Theme`, `549d33b` and `7c031d1`, and [Book's extension point](../library/05-book.md#how-it-is-extended) |
| **Self, and a cover's title** | asked whether the test library writes a Self with its url as content: *"That's not right. Self is a reference - an annotation not meaning right?? - wouldn't the title of a book have a self-link? You can put one in. Wouldn't it get the reference syntax and wouldn't it add a self-reference for its thing? If would check it it's book is a cover and if it is (make a book property on Chapter and return parent). Or is it not able to do that because objects can only check down? No this isn't quite there yet"* · *"Do it the way you are doing it and we'll see where it enters the picture"* — so no Self in the test library yet, and R16's lead is a cover's Title standing a Self, found through a `book` on Chapter |

## Requirements

*Approved 2026-09-25 in sections, each with what would be observed if it held. The identifiers are for the plan's tracing; the words are Doug's where the requirement is his sentence.*

### Chapter, Title and Book

| | the requirement | observed |
|---|---|---|
| **R1** | A Chapter is a Composition at level 6, permissive and closed, standing its Level and its pair in `$Define` | `chapter.level` is 6; a chapter holding a string outside any writing fails *a closed composition holds only writing* |
| **R2** | A chapter's canonical is its one Title, found by class wherever it stands — *"They can do a by type canonical (no need to abstract)"* | `chapter.canonical` is the Title whether it stands first or second; a chapter with none, or with two, fails when asked, naming the chapter |
| **R3** | A Title is its own construct at the Sentence level, expressing its chapter as a Heading expresses its section — *"a similar relationship, so the code will be similar, between Title and Heading"* | `title.chapter` is the chapter it stands in; a Title outside a chapter says so when asked; `$Title` does not extend `$Heading` |
| **R4** | A Title's words are compiler syntax, and it stands the Reference the compiled `[text](url)` gives it, and nothing more — *"Just using the thing given from the compiler right?"* | `<Title>[A Paper](/a-paper/)</Title>` draws its words as a link to `/a-paper/` and adds nothing else |
| **R5** | A chapter file is a function that returns a Chapter, called where it is used and never rendered, so the book holds the `$Chapter` itself | a book given `{TheArgument()}` answers the chapter among its parts |
| **R6** | A Book is a Composition at level 7, strict and closed, so it holds chapters and books | `book.level` is 7; a Section placed straight in a book fails *a strict composition holds parts at its level or one below* |
| **R7** | A book's canonical is its one cover, the chapter expressing Cover, found by the annotation wherever it stands — *"it's more important that it has only one Cover, and no need for it to be first"* | `book.canonical` is the chapter carrying `<Cover />` in any place; a book with two covers, or none, fails, naming the book |
| **R8** | A book exposes its title and what its cover's Author, Subject and About say, read from its cover — *"they, as annotations, will have to expose something that the book likely exposes too"* | the book answers its cover's title, Author, Subject and About |
| **R9** | A title has an id, worn once on the page, so a table's entry lands on it — *"Titles should have ids as part of both the book and chapter system"*; how it is given is designed with Title, and *"use the url as an id"* is the lead | on the bound page the entry for a chapter lands on its title's element, and the proof finds that id once |

### Cover, Synopsis and TableOfContents

| | the requirement | observed |
|---|---|---|
| **R10** | Cover, Synopsis and TableOfContents are annotations a chapter carries, each a Format holding its look — a cover inside a `header`, a table of contents inside a `nav` — and restyled by a library's own subclass — *"They are going to end up holding the format"* | a chapter carrying `<Cover />` draws inside a `header` layer; taking `<Cover />` away takes the layer back at the next define |
| **R11** | Each is said of a chapter, and a book has one of each, in no required place — the Book ruling, *"no need for it to be first,"* supersedes the positions first proposed | a Cover on a Section fails *a cover is said of a chapter*; two synopses in one book fail, naming the book |
| **R12** | What a cover carries, which is Doug's *"structural validation, like coexpression with other annotations"*, as redesigned 2026-09-25: a cover carries its Author and its Subject and may carry an About, and Author, Subject and About are said only of a cover — the runtime's to specify, since *"You don't need the compiler to check for anything"* | a cover with no Author does not specify, naming the cover; an About on the synopsis does not specify |
| **R13** | Whether a table of contents catalogues every chapter of its book is the compiler's to enforce — *"No! The compiler should enforce as much as possible based on what it gives. Put that as the implementation guide of the compiler. We don't move things out of the programming language because we can catch them in unit tests."* | R21 |

### Author, Subject, About and self-referential links

| | the requirement | observed |
|---|---|---|
| **R14** | Author and Subject refer to the author and to the subject a book is filed under, and By is deprecated — *"we are deprecating By and they are all annotations"*: each an annotation of the cover holding what the compiler writes, `<Author>*[[ A Persona ]]</Author>` as `[A Persona](/a-persona/)` and `<Subject>**[[ The Library ]]</Subject>` as `[The Library](/the-library/)`, the text apart from the id when written so — *"You always need to be able to say text versus id as an option"* — and each creating a Reference from that url as one of its own annotations and exposing it as a property: *"Maybe they can each create a Reference as one of their own annotations, expose it as a property, and then it can be used. Annotations of Annotations"* | the paper's `book.author` answers the text "A Persona" and a reference to `/a-persona/` |
| **R15** | About denotes the subject a book represents, so other books may file under it — *"Any book can be About something, but that allows other books to then be able to use it as a subject catalogue"* — written as the title form in the cover naming its own book — **revised 2026-09-25** from an About whose name became another name of the book, on *"it needs no name. Title and About cover it"*; a book by what it is about is self-authoring, *"This is a self-authoring book"*; and a subject may have nothing in it yet | the log's About makes it a catalogue the persona files under; an About's url is its title's; a book filed under one with no About raises `NOT-A-SUBJECT` — **built**, U3 and U6 |
| **R16** | The fixed points are recognized by comparing urls as ids — *"The subjective author is one whos title has the same url as its Author link. The library is the same for subject"* — the autobiography, whose Author's url is its own title's url, the author arrow's fixed point, and the library, auto-categorical, whose Subject's url is its own title's url; such an Author or Subject is drawn as a self-referential link — **left for later on 2026-09-25:** *"Yes just leave it off for now, and we'll figure it out later"*; meanwhile a self-link is written as `<Self>`, K3 | the log, an autobiography, draws its Author wearing `pa-self-reference`, and the library its Subject; the persona's paper draws neither so |
| **R17** | The compiler writes the normal url everywhere: its special case for a link to the page it stands on goes, and Reference's `#` branch with it | the transform writes `[The Log](/the-log/)` inside The Log, no `#` is written anywhere, and Reference tests no `#` — **built 2026-09-25**, the compiler's half in K2 `641e39b` and Reference's in K3 `e81ca19`, where `$SelfReference` wears the class |
| **R18** | A self-referential link does not look like a link — *"style them so they don't look link-like with no underline and maybe no pointer"* — its base look carried by Self as Parenthetical carries its own, and a sheet may override it | in the browser a self-link written as Self shows no underline and keeps its pointer |

### The compiler and its test library

| | the requirement | observed |
|---|---|---|
| **R19** | In `.public` the compiler's test library drops v1, so the compiler binds it with the redraft — *"in ..public, we drop the v1 dependency in our test library this sprint"* | a bind of the staged test library resolves `@dna-platform/public` to `library/.public/package`, shown by one line, the compiler's link to `.archive/.public` gone, and its pages carry the redraft's classes |
| **R20** | The assemble task writes each book module as a function that calls its chapter functions into the book class `.book.tsx` declares — *"Books will be compiled to import the chapter components call the functions and send them into the book as children"* | the book module for a book calls each chapter function once, in the order of its files, inside the book |
| **R21** | The compiler reads the redraft's spelling — a book named by its cover's title, a chapter by its title — and raises a table of contents that misses a chapter of its book as a fault naming both, enforcing as much as it can from what it gives, as E52 has it: *"for referential integrity, compiler templating"* | the unit suite's structure promises pass over the rewritten test library; a table with one entry removed raises a fault naming the book and the chapter |
| **R22** | At the sprint's end the whole test library is rewritten in the redraft's elements from what the sprint built — *"We can rewrite the whole test library based on what we will have at the end of this sprint"* | no file of `.public/package/.binding/.test` uses a v1 name — no `print()`, no `Document`, `Ref` or `For`, no chapter mention tag |
| **R23** | v1's compiler, now in `.archive/.public`, is left as it is, binding v1 libraries; the two compilers part here — and since 2026-09-25 v1 itself is the archive: *"let's officially have this code be .public and refer to .archive/.public for references to the last version"* | `.archive/.public/package/.binding` unchanged by the sprint, Doug's library's copy naming it as its origin |

### The visible end

| | the requirement | observed |
|---|---|---|
| **R24** | The `.public` regression suite binds the rewritten test library with the redraft and is green, and the proof reads every page back with every anchor landing on an id worn once | the regression count and the proof's anchor count, reported |
| **R25** | Seen in a real browser: a bound book's cover in its format with its Author and Subject as links, drawn by its book, a table of contents whose entries land on each chapter's title, and a self-link written as Self drawn without an underline — R16's recognition left for later | a drive asserting the visible text, and a navigation from an entry landing on the title's id |
| **R26** | What a hand-written page cannot fake: take one entry out of a table and the compiler raises a fault naming the chapter | the fault, read from the bind's own output |
| **R27** | A book that does not show its table of contents still writes it and puts it on the page the right way, invisible, every chapter catalogued, and presents its entries another way if it likes — *"Maybe a certain book doesn't want to show the table of contents. But they can collect everything as annotations, store them, and present the table in another way. They still need to put everything on the page the right way even if it's all invisible."* | a book whose table of contents is parenthetical draws it hidden, the compiler still enforces that it catalogues every chapter, and the proof still reads its links |
| **R28** | The classes live in a `library` folder of `src`, as v1's did — *"ALso make a library folder for this , like we had in v1"* — with its own index, and a doc book of its own beside Writing and Utilities | `src/library/index.ts` exports Chapter, Title, Book, Cover, Synopsis, TableOfContents, By, About and Subject, and the library's doc book documents each class to its four parts |
| **R29** | `[[ X ]]*` leaves the language — Subject collapses the author syntax, so an author edge is said by the By alone and needs no answering end; and the postfix single star is left empty, so each answer carries the count of the link it answers — `[[ X ]]**` answering `**[[ X ]]`, `[[ X ]]***` answering `***[[ X ]]` — *"No this is where we need help. How do you identify the Author? You need to know that the subject is who wrote it. But then on By and About, which aren't in the compiler, how does the compiler know it has specified the author or the subject? We need to tell it that it is a subject lookup but it is for specifying the author. These don't line up. These need to be: [[ X ]]** this is subject X → the catalogue answering for X; [[ X ]]*** this is a catalogue of X → the topical catalogue answering for X. For things to line up"* | the unit suite's language promises; a By with no answering row raises no `NOT-LISTED`; `[[ ]]( A Paper )**` in the library's table answers the paper's `**[[ The Library ]]`, and `[[ X ]]*` raises `MALFORMED-ANNOTATION`; the "has written" rows leave the test library |
| **R30** | A potential author is an autobiography — a book by its subject, its By naming the subject it represents, not the one it is filed under; *"Isn't an autobiography one that is by its subject?"* — or a book catalogued by one — *"Read this and see the correctness - a book that is by it's subject, or catalogued by one is a potential author"* — and a By must name one; authorship still begins in one self-representation | the log, by The Log and representing The Log, is an autobiography, and the persona is one by being catalogued by it; a By naming a book catalogued by no potential author raises `MAY-NOT-AUTHOR`; two books by their own subjects raise `TWO-SELF-AUTHORS`; and since 2026-09-25 one step, not a walk — *"1. A book that is by its subject - There can be only one of those 2. Any book catalogued by one that is a subject"* — so a diary two steps under the log raises `MAY-NOT-AUTHOR`, K2 |
| **R31** | The compiler knows which subject a link specifies by its star — one the subject who wrote it, two the subject it is filed under, three a topic — and reads no tag: Title, Cover, Synopsis, TableOfContents, Author, Subject and About are the runtime's, so a library subclasses them freely — *"The star says it"*, and *"You can't! They might subclass them. That's why they are in special files"* | the unit suite's language promises read the relation off the stars; a chapter whose title element is a library's own subclass under another name compiles unchanged |

### <a id="syntax"></a>The syntax, as settled

Printed for Doug on his *"Print the syntax for me. Let me edit it but first you show me"*, corrected by him to line up, and settled with *"The star says it."* **It is the spec the compiler is changed to.**

```
TITLES AND NAMES                                   about this writing
  [[ X ]]                 this is titled X          → [X](url)
  [[ words ]]( X )        titled X, shown as words  → [words](url)
  [[[ X ]]]               this is named X, here     → [X](x)   the one form that gets an id

SUBJECT LOOKUPS, pointing out                      about X
  *[[ X ]]                this is by X              → the subject who wrote it; a potential author
  **[[ X ]]               this is about X           → the subject it is filed under, canonically
  ***[[ X ]]              this is catalogued by X   → a topic

ANSWERS, pointing in, written in X's table         about this writing
  [[ X ]]**               this is subject X         → the catalogue answering for X
  [[ X ]]***              this is a catalogue of X  → the topical catalogue answering for X
  [[ X ]]*                empty: an author needs no answer

REFERENCES                                         about X
  $[ X ]                  the address of X          → [X](url)
  $[ words ]( X )         the address, as words     → [words](url)

EVERY FORM takes its words, [ words ]( X ), the paren tight against the bracket, before any postfix stars.
EVERY FORM compiles to [text](url), except [[[ X ]]], which compiles to [text](id).
```

**Out of scope, on Doug's *"The core alone"*:** Part (E31), the built summary and `Summarized` (E30), the Canonical mark (E33), and `<Type>Cover</Type>` resolved by name (E35, E51).

### <a id="open"></a>Open, for the plan to settle with Doug

| | open | what is known |
|---|---|---|
| **O1** | Where the cover's annotations are drawn — **settled**: only the title is content; the book exposes its cover's Title, Author, Subject and About, *"and then everyone can access them"*, and a library's book class, its layout, draws them | D6 |
| **O2** | How a title gets its id — **settled**: *"It uses the compiler syntax!!"* — the fragment of the url its `[[ X ]]` compiles to, held by a Referent the Title stands | D5 |
| **O3** | The pointer on a self-link — **settled**: kept | D10 |
| **O4** | How the `.public` compiler resolves the redraft for its test library | today it reads v1 through a link of its own, `.binding/node_modules/@dna-platform/public` to `.archive/.public/package`, made at the rename; U10 removes it and the root workspace link resolves `library/.public/package` — measured before it is relied on, since [Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md#the-fourth-appearance) is what trusting the walk cost |
| **O5** | A chapter function is called, so it holds no hooks | written into the docs with Chapter, U12 |
| **O6** | How a Subject is written — **superseded**: what R15 called Subject is About, the title form in the cover, whose name becomes another name of the book | D4 |
| **O7** | Whether "catalogued by one" means catalogued by an autobiography — **settled 2026-09-25, one step**: *"1. A book that is by its subject - There can be only one of those 2. Any book catalogued by one that is a subject"* | built in K2 `641e39b` |

**The working rule for the plan and the work**, in Doug's words: *"You will have to look at the existing code and work through warts as you go."*

## <a id="plan"></a>Plan

*Planned 2026-09-25 on Doug's `/ce-plan`, from a reading of the compiler — its tasks, the assembly, the specify phase, the app and the prerender, the inventory, the test library — of `src`'s composition classes, and of the Genesis on chapters and books, E29 to E35 and E51 to E57. The design is Doug's, from the rulings above; what is ours is flagged.*

### <a id="shape"></a>The shape

**Two channels reach the compiler, and classes reach the runtime.** The compiler knows a thing by the FILE it stands in and by the NOTATION written in it, and never by a tag, because a library subclasses every class — *"That's why they are in special files."* The runtime knows the same things by class.

| the compiler reads | the runtime's class |
|---|---|
| `.book.tsx` | the library's book class, a `$Book` — its layout |
| `.cover.tsx` · `.synopsis.tsx` · `.table.tsx` | a Chapter carrying Cover · Synopsis · TableOfContents |
| a numbered file | a Chapter |
| `[[ X ]]` | Title — names its file; the url it compiles to links it to itself, and the url's fragment is its id |
| `*[[ X ]]` | Author — an annotation of the cover |
| `**[[ X ]]` | Subject — an annotation of the cover |
| a later `[[ X ]]` in a cover, naming its own book | About — an annotation of the cover; *"it needs no name. Title and About cover it"* |
| `[[[ X ]]]` | Mention |
| `$[ X ]` | Means, or any writing standing a Reference |

**A cover, as Doug sketched it**, with the notation added — a self-authoring book, by what it is about. *As built, About names its own book — "it needs no name. Title and About cover it" — so the sketch's book is called what it is about, as the test library's log is:*

```tsx
<Chapter>
    <Cover />
    <Autobiography />
    <Title>[[ The Log ]]</Title>
    <Author>*[[ The Log ]]</Author>
    <Subject>**[[ The Library ]]</Subject>
    <About>[[ The Log ]]</About>
</Chapter>
```

**Only the Title is drawn as content.** Author, Subject and About are annotations, each making a Reference from its compiled url as one of its own annotations and exposing it; the book reaches into its cover and exposes all four, *"and then everyone can access them."*

**Chapters and books are functions.** A chapter file default-exports a function of no arguments that returns its `<Chapter>`; the compiler writes each book module exporting `book`, a function returning the book class with each chapter function called inside it, in file order; the page renders `book`, so the chapters are called when the book renders; the specify phase calls `book()` and puts what it builds to `specify()`.

### <a id="decisions"></a>Decisions

| | the decision | why, and over what |
|---|---|---|
| **D1** | Chapters and books are functions, as above | Doug's brief; a chapter written as an element reaches the book as a `$Function$`, which `parts` never sees — found in the brainstorm |
| **D2** | The compiler reads files and the notation, never a tag: nothing reads `Title`, `Cover`, `Option`, `For`, `book` or `chapter`, and what a file carries is the runtime's to specify | *"You don't need the compiler to check for anything. You can't! They might subclass them"*; the rules that read tags go — NO-BOOK-REFERENCE and STRAY-LISTING — and NO-SYNOPSIS is read per table |
| **D3** | A title names what its file is: in `.cover.tsx` its book, anywhere else a chapter of its book — `[[ The Argument ]]` in `1-the-argument.tsx` compiles to `/a-paper/#the-argument` | read as it is written, a bare name is a book's and would not be found; the compiler knows the file it reads |
| **D4** | In `.cover.tsx` the first title form is the title and gives the address; a later one naming the same book is the About, and gives no name of its own; one naming anything else is `TITLED-TWICE`; a book may be filed under only when it is About something, `NOT-A-SUBJECT` | *"that allows other books to then be able to use it as a subject catalogue"*; **revised 2026-09-25**, from an About whose name was another name of the book, on *"it needs no name. Title and About cover it."* **Flagged: order tells the About from the Title**, since the compiler reads no tag |
| **D5** | The Title is a Sentence-level writing standing the Reference its compiled `[text](url)` gives it and a Referent holding the url's fragment; Author, Subject and About are annotations, each standing a Reference from its compiled url among its own annotations and exposing it as `reference`, and its words as `text` | *"only the title is a real element"* · *"It uses the compiler syntax!!"* · *"Annotations of Annotations"*. `reference` is a **proxy name**; `text` is the reading Mention and Means already have |
| **D6** | The framework draws none of Author, Subject and About; the book exposes its cover's `title`, `author`, `subject` and `about`, and a library's book class draws them where it likes — the test library's draws its byline | *"book can reach in an expose them, and then everyone can access them"*; Book is layout |
| **D7** | Cover and TableOfContents are Formats drawing their chapter in a `header` and a `nav`; Synopsis adds no layer; each is said of a chapter | R10; a library's subclass restyles, and the book finds it by `instanceof` |
| **D8** | The compiler binds this code: the link to the archive goes with the rewrite, and `@dna-platform/public` resolves by the root workspace link to `library/.public/package`, whose `dist` is built before the regression runs | O4; measured: this code's `node_modules` is empty, so one React is resolved, the root's |
| **D9** | Specify runs in the bind's specify phase; each failure `specify()` returns is placed on the chapter file the index in its code names | *"We need the .public tests running that can call specify on the test library"*; a book's contents are its chapters in file order, by D1 |
| **D10** | Self keeps the pointer and loses the underline, in its note | R18, and *"Keep the pointer"* |
| **D11** | The specify phase records no facts of v1: `specification/reading.ts` and `environment.ts` go, and the graph keeps what caching needs | their reader was retired with the library-level suite |
| **D12** | Out of scope: Part, the built Summary, the Canonical mark, `<Type>` by name; R16's url comparison; a runtime Topic; and `<Resource>` placement, which writes v1's `CodeNavigator` and which the test library does not use — **flagged** | *"The core alone"*; *"Yes just leave it off for now, and we'll figure it out later"* |

**The classes and members this plan adds to `src`**, which its approval is Doug's yes for — and nothing else is: `$Chapter`; `$Title` with `chapter`, `text` and `reference`; `$Book` with `canonical`, `title`, `author`, `subject` and `about`; `$Cover`, `$Synopsis` and `$TableOfContents`; `$Author`, `$Subject` and `$About` with `text` and `reference`; each with its specification and its export, in a `src/library` folder with its index; and Self's note.

### <a id="units"></a>Units

*Compacted at the close to a register. Each unit's mechanism, files, scenarios and demo were the plan, and the plan ran; what was built is the code and its promises, and what it means is read in the [Library](../library/.cover.md) book and [the binder chapter](../the-catalogue-and-the-specification/07-the-binder.md). A scenario that survived is a promise, and a promise is read where it runs.*

| | the unit | built | read now in |
|---|---|---|---|
| <a id="u1"></a>**U1** | Chapter and Title — a chapter at 6 whose canonical is its one title; a title at 3, its words compiler syntax | `ffdc354`; Title in its own file, `3852c1e` | [Chapter and Title](../library/02-chapter-and-title.md) |
| <a id="u2"></a>**U2** | Cover, Synopsis and TableOfContents — Formats a chapter carries | `abd303d` | [Cover, Synopsis and TableOfContents](../library/03-cover-synopsis-and-table-of-contents.md) |
| <a id="u3"></a>**U3** | Author, Subject and About — annotations of the cover, each standing a Reference among its own | `abd303d` | [Author, Subject and About](../library/04-author-subject-and-about.md) |
| <a id="u4"></a>**U4** | Book — a composition at 7 whose canonical is the chapter carrying its cover, exposing what the cover says | `3f54cbf` | [Book](../library/05-book.md) |
| <a id="u5"></a>**U5** | Self's look — its note a global style taking the underline off, the pointer kept | `54e7c59` | [Developing an Annotation](../writing/10-developing-an-annotation.md) |
| <a id="u6"></a>**U6** | the compiler reads files and the notation and no tag; `NOT-A-SUBJECT` and `TITLED-TWICE` | `beccfaf` | [the binder chapter](../the-catalogue-and-the-specification/07-the-binder.md#reading) |
| <a id="u7"></a>**U7** | books compiled as functions calling their chapter functions in file order | `491177b` | [Books in Annotations](../library/01-books-in-annotations.md#a-whole-book-written-out) |
| <a id="u8"></a>**U8** | specify on this code, each failure placed on its chapter's file; v1's reader gone | `491177b` | [Book](../library/05-book.md) |
| <a id="u9"></a>**U9** | the test library rewritten in `.public` | `beccfaf` | [the test library](../the-catalogue-and-the-specification/07-the-binder.md#test-library) |
| <a id="u10"></a>**U10** | the compiler binds this code, and two stages broken on purpose fail by name | `491177b` | [the regression](../../package/.binding/.test/binding.regression.ts) |
| <a id="u11"></a>**U11** | the visible end, driven in a real browser; the test library's Theme drawing the ordinary view | `549d33b`, `7c031d1` | [Book's theme](../library/05-book.md#how-it-is-extended) and [the regression](../../package/.binding/.test/binding.regression.ts) |
| <a id="u12"></a>**U12** | the docs | the identity branch | the [Library](../library/.cover.md) book |

### <a id="order"></a>Order

*It ran as written — U1 to U5, then U6 with U9, then U7, U8 and U10, then U11, with U12 alongside. Stubbed at the close.*

### <a id="risks"></a>Risks

*None fired as feared: the regression was red from U6 to U10 by design and green at U10, and the unit suites gated each step between. The one cost the plan did not list was a module cycle each for Title and Heading when Doug put them in files of their own, declared in the build with its reason. Stubbed at the close.*

### <a id="trace"></a>Where each requirement lands

| | lands in |
|---|---|
| R1 to R4, R9 | U1 |
| R5 | U4, U7 |
| R6 to R8 | U4 |
| R10, R11, R12 | U2, U3, U4 |
| R13, R21 | U6 |
| R14, R15, R31 | U3, U6 |
| R16 | left for later — *"leave it off for now"* |
| R17 | built — K2 and K3 |
| R18 | U5 |
| R19, R24, R26 | U10 |
| R20 | U7 |
| R22 | U9 |
| R23 | done — v1 is `.archive/.public` |
| R25, R27 | U11 |
| R28 | U1 to U4, U12 |
| R29, R30 | built — K1 and K2, carried by U6 and U9 |

*The plan's self-check passed before the work began: every requirement landed or said why not, and the members it added to `src` were listed for Doug's yes. Stubbed at the close.*

## Where things stand

**Next: `/ce-brainstorm` for Sprint 83 — reading the Genesis against what `.public` now has, to find what it is missing; and then back to Doug's library.** *Doug, closing this sprint: "Good. I believe we have the core of a real library now! Say that we're going to spend a sprint looking at Genesis and seeing what we are missing, and then get back to my library."* The subject is his, given in the room; the sprint after it is `.me`, Doug's own library, which is still written in v1 and reads `.archive/.public`.

**Where this sprint left `.public`, in plain words.** A library can now be written entirely in `.public`: every chapter a function returning its Chapter, a cover saying its Title, Author, Subject and About, a table referring to its chapters and answering for what it catalogues, and a book class that lays the page out. The compiler reads a library by its files and its notation and never by a tag, writes each book as a function that calls its chapters, specifies every book when it binds, and puts each failure on the file that caused it. Its five-book test library is written this way and binds green, and a real browser sees the cover, the byline and a table's entry landing on its chapter. Every unit is in [the register](#units) with its commit; what each class is, and how to extend it, is the [Library](../library/.cover.md) book.

**What is missing, as far as this sprint could see** — a starting list for the brainstorm, not its brief:

- **The shape of the page.** Every composition draws as the `span` Writing gives it, so a reader sees a table's words run together; no class replaces its own element yet ([the finding](../library/01-books-in-annotations.md#what-is-not-drawn-yet)).
- **What D12 left out**: Part, a book in a book (E31); the built Summary and `Summarized` (E30); the Canonical mark (E33); `<Type>` resolved by name (E35, E51); and a runtime Topic.
- **R16**: the fixed points recognised by comparing urls, and Doug's lead for it — a cover's Title standing a Self, found through a `book` on Chapter, [in his words](#rulings-of-the-brainstorm-verbatim).
- **The escape reaches every title**: `[[ Dr. Who ]]` names `Dr Who` and `[[ v1.2 ]]` names `v12`, in silence ([measured](../the-catalogue-and-the-specification/07-the-binder.md#open)) — which Doug's library meets at its first bind on this code.
- **An appendix**, the chapter kind Doug named as one home for a book's Theme.

**Read these first, for a brainstorm on the Genesis** — a starting point, not a boundary:

1. [The Genesis of Writing](../the-genesis-of-writing/.cover.md) — the conversation, the event stream and the compiled object model: the source to read against. *Load-bearing: the events after E35, which no sprint has built from yet.*
2. [What the Genesis says](#what-the-genesis-says) in this chapter, and D12 in [the decisions](#decisions) — what this sprint took from E29 to E35 and what it left.
3. [The Library](../library/.cover.md) book — what `.public` has now, class by class, to set against the Genesis.
4. [A Library, Necessarily and Sufficiently](../the-catalogue-and-the-specification/09-a-library-necessarily-and-sufficiently.md) — every case of a library with its checker and its state, built or planned.

**Verified at `7c031d1`, measured, not remembered:** the package typecheck 0 errors and 202 of 202 across fifteen files; the compiler's typecheck 0 errors, unit 95 of 95, regression 16 of 16 — five in a real browser, two stages broken on purpose — and both scale suites green over ten copies. To see it: `npx vitest run --project regression` in `library/.public/package/.binding`, which binds the test library, reads every page back, and drives the paper and the library in Chrome.

**Wrong turns already taken, so nobody takes them again:** a regression regex pinned to v1's markup — this code draws a link's words inside their own element, so an anchor is matched by its address and first words; running one regression test with `-t` skips the test that binds, and the drive then reads no pages; `import styled from 'styled-components'` under the binder's server loader, where only the named import works; and a junction removed with anything but `rmdir`, which could follow it into its target.

**Compounded at the close:** the dot escape reaching every title, into [the binder's open list](../the-catalogue-and-the-specification/07-the-binder.md#open); chapters and books as functions, into [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md#the-files); importing `styled` by name, into [Book's theme](../library/05-book.md#how-it-is-extended); and this chapter's spent plan compacted to a register and stubs, 11,351 words to 9,796.

**For Doug, when he wants them:** the spans; R16's lead; and the proxy names — `titled`, `about`, `titledTwice`, `NOT-A-SUBJECT`, `TITLED-TWICE`, `RunningHead`, `text` and `reference` — with Collection's type alias `Author` beside the class of that name.

**Flagged, not changed:** the move that made this code `.public` left **964 links in the older chapters of this branch library that no longer resolve** — 750 in the projection book, 104 in the condition report, 36 in Solutions — nearly all pointing at v1's source by paths that now lead into this code or into `.archive`; measured 2026-09-25 over 10,021 links, the files this sprint wrote reading clean but for two v1 paths already broken in The Book Is the Layout — a cleanup of its own; `publish-packages.yml` publishes this code once its version is bumped; `deploy-pages.yml` builds v1's archived `app`; the root `package-lock.json` still lists two removed workspaces; `<Resource>` placement writes v1's `CodeNavigator`, D12.

**Standing:** commit locally as often as wanted and never push until Doug says; every change in `src` has Doug's yes first, and this plan's list is that yes; chemistry is not changed.
