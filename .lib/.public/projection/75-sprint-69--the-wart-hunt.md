# Sprint 69 — The Wart Hunt

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready` — ***HALTED at the list of work for Doug's go*** — *the register written 2026-09-13 from a reading of every file in `src` (5,781 lines), the four books' files, the suite and the design books; ruled row by row in the room; planned the same day. Nothing built, nothing deleted. Compounding after, on his word.*
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="where"></a>Where things stand — ***2026-09-13, planned and HALTED at the list***

**Next action: Doug's go, then `/ce-work` on [the plan](#plan) starting at [D11](#d11) and [U1](#u1).** *"Finish up the design and halt and then we implement it."* The register beneath is what was found; the rulings are his words; the plan is the eleven units. **The working copy is Sprint 68's:** `main` at `f40866f` with its five files modified and uncommitted (its cover entry says *built and halted*; its chapter's stand has not caught up); this chapter touches none of them. Chapter zero is untouched until the review.

**How every row is read.** *file:line* · the fight in the implementer's words · where it is paid · what `.public` owes so it disappears · the promise that pins it · **state**: `run` (counted this session by grep) · `read` (seen at the line) · `recorded` (the library says so) · `guess`. **A row says what is; the ruling is his.** No name here is proposed; proxies are marked.

## <a id="rulings"></a>Rulings so far — ***his words, verbatim, 2026-09-13***

- <a id="r-misconception"></a>**THE MISCONCEPTION, and it is the principle the whole review runs on:** *"Look for this polymorphism misconception as a source of warts in your analysis. The principle: don't try to predict the future. The set of subclasses is never comprehensive so don't design by what is there but what COULD BE needed in the future. Nothing is locked. Framework design is for an unknown future."* · *"A wart is preemptively trying to predict and design around polymorphism. If there is a more natural thing, like using the classes in the class list, rather than overriding, do that. If it is a real polymorphism need, stick with it. Obviously the more we put in view and print, the more dangerous it becomes to override it. We should endeavor not to."* · *"Chemistry is OO and react is not, and you can't import warts from a framework that doesn't support it. Think like C# and look for polymorphism done wrong or right. Overriding view is dangerous, but having an Encyclopedia book as different because it has a unique layout is not. Assuming all books need a layout section is potentially dangerous."*
- <a id="r-existing"></a>**USE WHAT IS THERE:** *"definition isn't bad but if we have it, why aren't things using it? Is that the wart? … If the wart is we have the capacity to address it but classes don't, this is a cleanup with a documentation on how to use the writing class for extension."*
- <a id="r-fix"></a>**A FIX IS JUDGED AS A WART TOO:** *"You need to use principles to fix the warts. You need to decide your fix isn't creating new warts. Have we solved this so you would not call the changed code a wart? Its property as a wart is that it is non-native and doesn't produce code. Don't put warts over the most important classes in the framework to get rid of minor warts elsewhere."*
- <a id="r-f2"></a>**ON THE TAG SAID TWICE ([F2](#f2)):** *"It could be a format exception. I would maybe have the format base validate that it and only it handles this, and disable definition and create a way where a null definition (which would be protected) does something else. Or we move definition to composition and accept that annotations aren't wrapped. Look for a solution like that. Annotations aren't supposed to appear. They might not need a definition by semantics."*
- <a id="r-f3"></a>**ON THE BODY ([F3](#f3)):** *"Article should have its own kind of book. Header and Footer might even belong there rather than on book. Is the wart that we also might need to have themes / formats that can decorate themselves to be excluded from the styled chemicals and the `:not` belongs there? And the book for article comes with a theme that declares what isn't a part of it? I don't know that this fixes the wart but it's a perfectly reasonable styled chemical feature."*
- <a id="r-parenthetical"></a>**ON PARENTHETICALS:** *"Printing true and false is not a wart unless there is a better way. Sometimes, to have everything closed under writing, we need annotations and parentheticals. But we must look at the semantics and say 'does this deserve to be parenthetical here. Is it some text for an illustration to keep it having text? That's okay. One day that could be an aria type implementation but for now it arises by design.' Case by case. You might have warts but be sure."*
- <a id="r-dead"></a>**ON THE DEAD ([B9](#b9)):** *"persist is chemistry. You need to see what is talking to the base. You need to use tools to be aware of all members on the chain when you decide something is dead. For things that are dead, you have to be careful not to remove something that is still a sketch. A highlight should have a beginning and ending. … References don't persist right now. And maybe highlight is unused or unimplemented and it can be left alone but we understand that it's not in production really. Still, delete when the semantics are bad and it's dead because the same thing is implemented elsewhere. It sounds like the focus logic we were implementing can be stripped off for now. Yes dead features are good to get rid of, just be careful that you are not stealing the essence of something."*
- <a id="r-group"></a>**THE ORDER:** the group first — the container question, the overrides, the paper's book and the theme split designed as one; deletions ride along as each file is opened.
- <a id="r-test"></a>**EVERY DESIGN OF HIS IS TESTED TOO:** on the F2 and F3 directions read back — *"Only if it doesn't create warts. You always have to take my design and ask — does this work or does it create a wart."* · *"A library like article definitely deserves its own base types if needed."*
- <a id="r-scheme"></a>**ON THE ADDRESS SCHEME:** *"span and held should be read, but read and follow are essential reference function. Look at the difference here. One is an essential part of an interface, and is what allows one to get from chapter to document. The others are blah styling mess. See the difference between intentional but artifact of meeting interface and dead code? Don't destroy in an effort to remove warts."*
- <a id="r-themes"></a>**ON THE THEME'S TWO HOLDERS ([C3](#caching)):** *"Maybe they should have a Book theme and a DocumentTheme derived from theme so we can target them differently? Yes they are both different tops of a hierarchy and they represent targeting one chapter versus a whole book, but it is probably a wart for them not to reflect the semantics of what they target. They can share a base class."*
- **THE DOCUMENT OWED:** *a chapter on how to use the writing class for extension* — `definition`, `print`, `print={false}`, `addType`, wearing a format, registering — a consumer's chapter, for [Writing a Book](../writing-a-book/.cover.md).

## <a id="misconception"></a>The misconception, found first in this register's own rows

**Three of the four fixes this register first proposed were the wart Doug named — a base designed from the subclasses in front of it:** the *container* (a new member on `$Writing` to unify a tag two classes said) · an *attributes member* on `$Writing` (designed from twelve overrides) · *header · parts · footer on `$Book`* (designed from two books, assuming every book has a body). **All three withdrawn.** *And two rows were the same misreading:* [F12](#f12) — *"a rule most of a level's kinds waive is at the wrong level"* judges the base by today's kinds, where a waiver is the specification chain's own designed move; and [F8](#f8) partly — the encyclopedia's contents opening in place IS the encyclopedia being different, so the second grammar is not by itself a wart; what is a wart there is what it does not use.

**In the code, the same misconception, read the same way — rows that stand as warts because a base decided for kinds it cannot know:** the `:not()` rosters naming today's apparatus ([F3](#f3)) · the apparatus found by position ([F4](#f4)) · `reflection.formatted` deciding *if book* ([B1](#b1)) · `$Annotation` judging every holder as though every annotation were a type ([B7](#b7)) · `SectionSpecification.supplies` giving every section-kind a heading it may not want, so five kinds answer twice ([B5](#b5)) · `Reflection.kinds` naming book, chapter, theme and fold by hand ([B2](#b2)). **And what is polymorphism done RIGHT, and is not a wart:** `$Encyclopedia.print()` placing its own parts · a kind waiving a rule · a kind overriding `print()` · an override of `view()` where the element is genuinely a different element · a book kind with its own header.

## <a id="brief"></a>The brief, in Doug's words

> **"What is the biggest symptom of writing your own framework? That all of your implementations are natural. Having awkward problems with themes and layout? Fix them in .public so it supports the use case you want. You control the framework. Everything in the code can be natural everywhere."** · **"Start by reading writing, annotation, type, reference, letter-book and look for warts. There may be few or none… Then look at list and look for more code in writing folder that looks like it is very clean, follows coding conventions and fits in. Your goal is to make everything in article and encyclopedia feel like that. Theming and Formatting should feel natural. If they don't we need to adjust. DI should be natural. The code written in the form of chapters should feel natural in all four books."** · **"Writing everything — extending everything — in both component libraries and demos should look incredibly clean… when you look for warts, they locally look like a fight, or/and they trickle up to creating fights."** · **"Natural means no fights, warts create fights, and we have a near zero tolerance for any of it."** · **"Promises could encode warts or cause them. They are not gospel."** · **"Look for dead features, ugly unsemantic members, unnecessary caching when a computed property or pulling in the view would work, warts of all kind, fights of all kinds."** · **"We are going to codify intentionality of code in this codebase. And clean it. You will be deleting. You will be refactoring. You will be cleaning."** · **"Don't outsource this. I trained you."**

**The criterion is written where it belongs:** [What Natural Means § Natural means no fights](../the-coding-style/07-what-natural-means.md#no-fights), added today.

## <a id="standard"></a>The standard — what clean looks like in this codebase, so the target is concrete

**The base door's small kinds are the standard, and they are the same shape every time:** four declarations, one bond line, a `definition`, a type with its specification, two exports — 25 to 40 lines, no comment, no `view()`. *Read whole and found so:* [`Letter`](../../package/src/writing/Letter.tsx) · [`Word`](../../package/src/writing/Word.tsx) · [`Paragraph`](../../package/src/writing/Paragraph.tsx) · [`Cell`](../../package/src/writing/Cell.tsx) · [`Phrase`](../../package/src/writing/Phrase.tsx) · [`List`](../../package/src/writing/List.tsx) · [`Item`](../../package/src/writing/Item.tsx) · the three in [`Emphasis`](../../package/src/writing/Emphasis.tsx) · [`Figure`](../../package/src/writing/Figure.tsx) · [`Hatnote`](../../package/src/encyclopedia/Hatnote.tsx) · [`Article`](../../package/src/encyclopedia/Article.tsx) · [`Notes`](../../package/src/reference/Notes.tsx) · [`References`](../../package/src/reference/References.tsx) · [`Footnote`](../../package/src/article/Footnote.tsx). **And the five registrations at module bottoms are DI as it should read** — `$(List, TypeOfSentence)(TypeOfItem)`, `$(Illustration, TypeOfSentence)(TypeOfCaption)`, `$(Image, TypeOfSentence)(TypeOfDescription)`, `$(Control, TypeOfSentence)(TypeOfDescription)`, `$(TableOfContents, TypeOfSection)(TypeOfRow)` — *one line, in the file of the kind that specialises.* **A chapter file in the paper is the standard for a chapter:** `export default class $X extends $Chapter { print() { return <Document>…</Document>; } }` — [`1-introduction.tsx`](../../package/.latex/aaronson/1-introduction.tsx).

**Everything below is measured against that.**

## <a id="base"></a>The base first — writing, annotation, type, reference, letter–book

*Read end to end: `Writing`, `Composition`, `Annotation`, `Type`, `Reference`, `Letter`–`Section`, `Document`, `Chapter`, `Book`, and the utilities. Doug expected few or none; there are more than none, and most are one gap paid many times beneath.*

| | the fight | where | what `.public` owes | promise | state |
|---|---|---|---|---|---|
| <a id="b1"></a>**B1** | ***a kind-conditional in a utility:*** `reflection.formatted` wears the theme only `if is(writing, book)` — the base deciding what a kind should override | [`Reflection.tsx:159-163`](../../package/src/utilities/Reflection.tsx) | `$Book` wears its theme in its own drawing; `formatted` reduces annotations and nothing else | none | `read` |
| <a id="b2"></a>**B2** | ***the utility holds the kinds*** — `kinds` names book, chapter, theme, fold, the hierarchies and the levels; ~30 methods, most of them methods of `$Writing` or `$Type` with the receiver as first argument ([Polymorphic Limiting § the second face](../the-type-system/06-polymorphic-limiting.md#the-second-face), then 17 of 22) | `Reflection.tsx:23-35` and throughout | the powers a type confers land on the type; what must stay outside (`knows`, `template`, the ladders) is a registry, not a home | none | `read` |
| <a id="b3"></a>**B3** | ***a cache outside the framework in the base:*** `printed`, a module `WeakMap` filtering the block once per block — kept because a fresh `$Block` per draw remounts ([Solutions 70](../solutions/70-the-mention-that-remounted-every-draw.md)); `reflection.readings` (`wrapped`) is the same cache for `Section` and `List` printing their parts | [`Writing.tsx:13,63-69`](../../package/src/writing/Writing.tsx) · `Reflection.tsx:15,88-96` | a reading of a block drawn without making a block — the smell [encyclopedia/Theme.tsx:1](../../package/src/encyclopedia/Theme.tsx) already names; likely chemistry's | none | `read` |
| <a id="b4"></a>**B4** | ***the fold's id is written on an `<a>`***, so a kind that is full of links (an entry) cannot carry it and overrides `view()` to put the id on its own element | `Writing.tsx:55-58` · [`Entry.tsx:34-40`](../../package/src/reference/Entry.tsx) | the id on the definition element; the anchor only where there is a meaning — *judged against [the fix rule](#r-fix) before it is made: is the id on the element native, and does it produce the anchor for free?* | none | `read` |
| <a id="b5"></a>**B5** | ***one demand stated twice, in two classes:*** a section's heading is a RULE on the specification (`$opensWithHeading`) and a SUPPLY on the specification (`supplies` makes a `Heading` — [P37](../the-type-system/05-what-we-believe.md#the-machinery) says a specification constructs nothing), while the kinds that carry no heading waive the rule on the SPECIFICATION and the supply on the TYPE — twice each, five times: `Quote`, `Aside`, `Summary`, `Theorem`, `Table`; and `IndexCard`, `Row`, `Author`, `Subject`, `Title` waive the rule. ***The misconception in the base: the supply assumes every section-kind wants a heading read out of its first sentence.*** | [`Section.tsx:49-76`](../../package/src/writing/Section.tsx) · [`Quote.tsx:39-49`](../../package/src/writing/Quote.tsx) · `Aside.tsx:57-59` · `Summary.tsx:28-30` · `Theorem.tsx:34-36` · `Table.tsx:33-35,47-49` | one seam: a demand waived is not supplied, said ONCE | none | `run` — `return false` ×19 in 17 files |
| <a id="b6"></a>**B6** | ***cruft:*** `heading()` copied byte for byte into seven classes that already extend `$Section` and inherit it | `Table.tsx:22` · `Aside.tsx:43` · `Summary.tsx:14` · `Author.tsx:12` · `Subject.tsx:13` · `Title.tsx:17` · `Theorem.tsx:17` | delete seven lines | none | `run` — 8 hits, one the base's |
| <a id="b7"></a>**B7** | ***an annotation judges its holder by default:*** `$Annotation.specification = new WritingSpecification()`, so every annotation that is not a type demands of the writing it annotates; `Path`, `Format` and `Catalogue` override `specifically()` to nothing, and `$Fold` and `$Reference`-as-annotation re-run the base rules on their holders. ***The misconception: the base assumes every annotation is a type.*** | [`Annotation.tsx:13-17`](../../package/src/writing/Annotation.tsx) · `Path.tsx:17-18` · `Format.tsx:36-37` · `Catalogue.tsx:21-22` | an annotation demands nothing unless it is a type; three overrides go | none | `run` — 3 whole waivers |
| <a id="b8"></a>**B8** | ***the two ladders' types disagree:*** `$TypeOfBook extends $TypeOfReference` while `$TypeOfChapter extends $Type` — a book's type is a reference type and a chapter's is not, though [Sprint 55](61-sprint-55--the-two-ladders.md) ruled them the same shape one level apart | [`Book.tsx:78`](../../package/src/library/Book.tsx) · [`Chapter.tsx:19`](../../package/src/library/Chapter.tsx) | a ruling — which is the design | `writing.test.tsx:31-48` pins the ladders, not the types' parents | `read` |
| <a id="b9"></a>**B9** | ***dead in the base — CORRECTED against the chain*** (`persist`, `$pid`, `recall` and hydration are chemistry's, [`chemical.ts:1012-1018`](../../../chemistry/package/src/abstraction/chemical.ts); `$focused`, `focus()`, `unfocus()` and the `$pid ??=` lines are ours): **strip** — the focus logic on `$Reference` (*"references don't persist right now… the focus logic can be stripped off for now"*); `$Composition.concatenate` (0 callers); `$Writing.valid()` (answers `true`, called only by `.tests`); `url.scheme/host/path/query/fragment/parts` (0 callers); `reflection.chapter` (0 callers); the three shells that throw — `Appendix.letter`, `Talk.topics`, `Comment.replies`. **Keep as sketches:** `$Highlight.beginning/ending` (*"a highlight should have a beginning and ending"*), `Bookmark`/`PageFold` setting `persist` (the reader's marks, not in production). **Ruled ([his words](#r-scheme)):** `read()` and `follow()` are essential — members of an interface, the way from chapter to document — and stay without a caller; `held()` is called by `parts()` and `follow()` and stays; `span()` is read hard before anything is cut. *A member that meets an interface is intentional; dead is what is implemented elsewhere and semantically bad* | [`Reference.tsx:12-17,21,33-34,41-51`](../../package/src/reference/Reference.tsx) · `Composition.tsx:68-72` · `Writing.tsx:91-94` · [`Url.ts:18-48`](../../package/src/utilities/Url.ts) · `Reflection.tsx:70-72` · `Appendix.tsx:13-15` · `Talk.tsx:25,47` · `Catalogue.tsx:48-84` | delete what is dead and implemented elsewhere; never a sketch's essence | `writing.test` calls `valid()` ×2 | `run` |
| <a id="b10"></a>**B10** | ***three spellings of the bond line:*** `super.$X(this.addType(block, $TypeOfY))` ×70; `super.$X((block ?? new $Block()).concat($check(TypeOfY, '!')))` ×4 (`Bookmark`, `Highlight`, `PageFold`, `ReferenceCard`); `super.$X($check(block, $Block, '!').concat($check(style, '!')))` ×2 in `src` and ×7 in the portal — the third is *a kind wearing a format* said as block arithmetic | `Bookmark.tsx:12` · `Highlight.tsx:20` · `PageFold.tsx:10` · `ReferenceCard.tsx:26` · `Header.tsx:10` · `Toolbar.tsx:12` · [`.wiki/.encyclopedia/.book.tsx`](../../package/.wiki/.encyclopedia/.book.tsx) | `addType` exists — use it; and wearing a format rides [F2](#f2)'s ruling | none | `run` |
| <a id="b11"></a>**B11** | ***comments in the base*** — over 650 comment lines in `src`, four files above 50 (`writing/Theme` 106, `article/Theme` 105, `encyclopedia/Theme` 53, `Reflection` 46); `Note` and `Aside` carry the same 30-line note verbatim; a double blank line at `Reference.tsx:84-85` | run per file | [the comment lifecycle](../the-coding-style/03-the-coding-style.md#comments): each moved to the chapter that owns its subject, then deleted | none | `run` |
| <a id="b12"></a>**B12** | ***the record's names are not the code's:*** [The Type and the Instance](../the-type-system/02-the-type-and-the-instance.md#the-block-asking-pair) designs `find`/`findOne`; the code says `searchFor`/`searchForOne` | `Writing.tsx:77-85` | one name, Doug's | none | `run` — `findOne(` 0, `searchForOne(` 8 |
| <a id="b13"></a>**B13** | `$Writing$` promises `document`, `mention`, `meaning`, `kind`, `annotations` and not `theme`, `book`, `className`, which every writing has | `Writing.tsx:15-21` | the interface says what a writing has | none | `read` |

**Not a wart, read and kept:** `$Type.name` from `constructor.name` (a [recorded caution](../the-coding-style/03-the-coding-style.md#the-build-caution), not a fault); `$Writing.inline = true` (chemistry's grouping marker, [Solutions 1](../solutions/01-the-formulas-that-rendered-empty.md)); the makers assigning `_mention` ([a ruled fact](../writing-a-book/04-the-book-s-little-framework.md#facts)); `parser.parts` (the parse memo — "asking twice answers the same parts"); `tex.rendered`; `Specification.cached`.

## <a id="fights"></a>The fights, by the seam `.public` owes

*Each is one gap paid in several places. The count is where it is paid; the owed thing is what makes every payment disappear — and, [ruled](#r-fix), is judged as a wart itself before it is made.*

### <a id="f1"></a>F1 · ***the `view()` override for one attribute*** — twelve stand where the record says one · ***RE-JUDGED: no new member***

**The rule:** *a kind overrides `print`, not `view`* — [the drawing conventions](../the-coding-style/03-the-coding-style.md#the-drawing-conventions), "the ONE override left is `$Format`". **The code:** `override view()` in **12** files (`run`): [`Heading`](../../package/src/writing/Heading.tsx) (a tag by depth, an `id`, a `pd-level-N` class) · [`Equation`](../../package/src/writing/Equation.tsx) (`data-number`, innerHTML) · [`Math`](../../package/src/writing/Math.tsx) (innerHTML) · [`Code`](../../package/src/writing/Code.tsx) (`pre > code`, a language class) · [`Image`](../../package/src/writing/Image.tsx) (`src alt width height`) · [`Illustration`](../../package/src/writing/Illustration.tsx) (`figure > img + figcaption`) · [`Entry`](../../package/src/reference/Entry.tsx) (`id`, `data-number`) · [`Line`](../../package/src/encyclopedia/Infobox.tsx) (`data-label`) · [`Summary`](../../package/src/application/Menu.tsx) (**the tag only** — `definition = 'summary'` is the feature unused) · [`Search`](../../package/src/application/Search.tsx) (`form > input + button`) · [`Ref`](../../package/src/reference/Ref.tsx) (`href`) · `Format` (children). **Eight of them restate the same wrapper** — `reflection.formatted(this, <tag className={this.className} …>{this.print()}</tag>)` (`run`: 8).

**Ruled:** *overrides aren't inherently a problem; don't create new warts; the more we put in view and print the more dangerous it becomes to override — endeavour not to.* **So no attributes member.** Each kind is handled with what exists — `definition` (Summary; Code and Illustration with their inner structure in `print()`), the class list (Heading's level), the fold seam once the base puts the id on the element ([B4](#b4)) — and an override STAYS where the element is genuinely a different element (`Image`, a void element with `src`; `Search`, a form; `Math`/`Equation`, KaTeX's HTML, unless `print` can carry it). *Each case is shown before its file changes, and the changed code is judged as a wart before it stands.* **Promise:** none pins the overrides; `writing.test.tsx:169-171` pins that a paragraph writes its element.

### <a id="f2"></a>F2 · ***the tag said twice, and the wrap*** — a format must repeat its writing's tag or add an element · ***DIRECTION RULED***

**The mechanism** ([Styled Particles](../../../chemistry/.lib/particle/11-styled-particles.md); read at [`particle.ts:324-338`](../../../chemistry/package/src/abstraction/particle.ts)): `draw()` calls `styling(this, view)` when a class declares a `selector`, and the element the view wrote is stood as the compiled component **only if its tag equals the selector's**; otherwise the compiled component wraps. A format never writes the element, its holder does, so [`$Format.format()`](../../package/src/writing/Format.tsx) lifts a **second instance** — `<Worn of={this}>` — and in-place restyling happens only when the format's `selector` tag equals the writing's `definition`. **So every kind that wears a format says its tag twice:** `Menu` details/details · `Toolbar` nav/nav · `Manual` aside/aside · `Navbox` nav/nav (`run`: 4 files with both) · `Header` section/section · `Search` form/form · `Table` div/div · `Box` aside/aside (`read`); **and where they disagree the format WRAPS** — `Image` writes `<img>`, `$IllustrationFormat` defaults to `div`, measured `<div of="$IllustrationFormat"><img class="pd-image">` ([recorded](../the-coding-style/03-the-coding-style.md#what-the-wrapper-cost)). **The second instance is why `$of`, `handed()` (×3 `src`, ×2 portal) and `shown()` — `(this.$of ?? this).parent as $Image` — exist**, and why `selector: any` is cast ten times (`run`).

**Ruled direction** ([his words](#r-f2)): *annotations aren't supposed to appear and may need no definition by semantics* — so `definition` moves to `$Composition`, protected, and may be unset; a composition that wears a format leaves it unset and **the format handles the element** — the format base validating that it, and only it, does. *The kind says the tag nowhere; the format's selector says it once.* **To confirm in the room before it is designed.** **Promise:** `writing.test.tsx:234-239` pins `$Format.theme` (the `$of` road); nothing pins the wrap.

### <a id="f3"></a>F3 · ***the paper has no book of its own, so its theme does the paper's layout by exclusion*** · ***RE-JUDGED AND RULED***

**Withdrawn:** *header · parts · footer on `$Book`* — [the misconception](#misconception): designed from two books, assuming every book has a body. **What stands:** [`$Encyclopedia`](../../package/src/encyclopedia/Encyclopedia.tsx) having its own layout is polymorphism done right; `src/article` exports kinds and a theme and **no book kind**, so [`$Aaronson extends $Book`](../../package/.latex/aaronson/.book.tsx) and the article theme says what a body document is by a six-long `:not()` roster six times ([`article/Theme.tsx:138-145`](../../package/src/article/Theme.tsx)), markdown repeats three (`103-105`), and the encyclopedia still carries `:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter)` ×4 (`424-441`). **`run`: `:not(` — article 10, encyclopedia 13, markdown 6, base 5, application `Header` 4, `Toolbar` 2, `Menu` 1.**

**Ruled** ([his words](#r-f3)): *Article should have its own kind of book; header and footer might belong there rather than on `$Book`;* and the roster itself may be **a styled-chemical feature** — *a theme or format that declares what it excludes, once* — with *"the book for article coming with a theme that declares what isn't a part of it."* **A pitch for [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#pitches), not built here; whether it dissolves the roster is his open question.** The body as a hand-written `<div className="pd-body">` (`Encyclopedia.tsx:39`) stays a row for the encyclopedia's own book. **Promise:** none.

### <a id="f4"></a>F4 · ***the apparatus by position*** — ruled away in Sprint 64, standing, and pinned green

[`Book.tsx:34-36`](../../package/src/library/Book.tsx): `cover = chapters[0]`, `synopsis = chapters[1]`, `table = chapters[2]` — [P45's own example](../the-type-system/05-what-we-believe.md#how-we-work), [Sprint 64 R5](70-sprint-64--themes-by-registration.md) *"you simply type it"*, unbuilt through three sprints and [the firing](../the-type-system/08-the-cover-is-a-cover.md). ***The misconception in the base: a position assumes the shape of every book.*** **Pinned by [`book.test.tsx:16-32`](../../package/.tests/book.test.tsx)** — *"…by position"* — **green since it was written.** *What `.public` owes:* the cover, synopsis and contents as types the book finds by `reflection.is`, the way `$Encyclopedia` finds `$Article`; the promise rewritten the same day. **State:** `read`, `recorded`.

### <a id="f5"></a>F5 · ***themes and formats*** — the theme is the frame, and the frame is in four places

- **`$Theme` is four things at once** ([`writing/Theme.tsx`](../../package/src/writing/Theme.tsx)): values (`paper`…`leading`) · 56 `@select` groups (`run`) · the `<main>` element itself (`selector = styled.main`, `display = 'flow-root'`, `padding`, `margin`, `minHeight`) · an annotation with a type and a specification. [Sprint 66 R1–R3](72-sprint-66--themes-and-formats.md#requirements), ruled and unbuilt: *a theme is values; a format is the styled chemical; one theme, two formats.* **Owed before the rest of this section can be clean, and in the group.**
- **The encyclopedia theme is 505 lines and 99 groups** and it does four jobs: Wikipedia's values; the frame's grid, placing by class the apparatus it names (`46-107`); the chrome from another door (`.pd-header`, `.pd-toolbar`, `.pd-appearance`, `.pd-search`, `.pd-menu` — `53-64,87-94,109-121,126-211,305-323`); and the kinds' looks the Motif says are the formats' ([the infobox group](../../package/src/encyclopedia/Theme.tsx) `326-344` beside `$InfoboxFormat`, *"because a theme's rule outranks a worn format's"* — [Motif 4's worked example](../the-motif/04-themes-per-type-formats-per-instance.md#worked)).
- **Themes hide by `display: none`** (`run`: encyclopedia 7, application 6, portal 5). ***Ruled: parenthetical is by design, case by case, be sure.*** *Sure:* the wiki cover's author and subject (`395`) are carried for the catalogue and never shown — parenthetical by design, which the paper writes as [`<Subject print={false}>`](../../package/.latex/aaronson/.cover.tsx) and the wiki hides by theme instead: a demo cleanup. *Not sure until a page is driven:* the synopsis heading (`396` — a heading the section rule forced, [B5](#b5)), the title's `.pd-reference` (`397`), the menus' words (`151`, `205` — they hold a `<Description>`, already parenthetical, so the rule may be dead), the portal's cover parts (`.book.tsx:516`). **Withheld until seen.**
- **Positional selectors** (`run`: 12): the manual's foot lines by `:nth-last-child(2)` and `:last-child` ([`Manual.tsx:105-114`](../../package/src/encyclopedia/Manual.tsx), and again in the theme `293`) — *the manual's foot is an unnamed kind*; `Toolbar` `:last-of-type` (`32`); the toolbar's current tab `:first-child` (`187-188`); the synopsis' subpage line `:nth-of-type(2)` (`229`); the contents' first row `:first-of-type` (`267`); the portal's `p:first-child`/`p:last-child` (`327,329`).
- **Element selectors remaining** (`run`): base `h1`, `hr`, `img`, `figure:not(.pd-figure) figcaption` (4); `Appearance` `h3 div h4 label input` (6); the portal `p`, `h2.pd-heading`, `img`, `a`, `div`, `span`, `select`, `button`, `input[name=search]` (`read`).
- **The cover's look styled from the frame** — [`article/Theme.tsx:106-112`](../../package/src/article/Theme.tsx), [`encyclopedia/Theme.tsx:382-391`](../../package/src/encyclopedia/Theme.tsx), [`writing/Theme.tsx:222-240`](../../package/src/writing/Theme.tsx) — the exact fault of [The Cover Is a Cover](../the-type-system/08-the-cover-is-a-cover.md#why-a-wart), in three themes.
- **A value said twice:** the strip 56px and the sheet's margin 59px ([`article/Theme.tsx:77,98`](../../package/src/article/Theme.tsx)); `painted()` on `$Format` (`Format.tsx:62-64`) and again as a `const` in the portal's book (`run`: 7 `src`, 4 demo).
- **`$Theme.$register(within?)` means two things by its argument** and casts through `as unknown as` (`Theme.tsx:334-337`); overriding a base getter forces a getter (`article/Theme.tsx:96-100`).

**Promises:** `theme.test.tsx:43-55` pins that *a theme written into a document does not make it that document's*; `book.test.tsx:116-129` pins registration by CSS text.

### <a id="f6"></a>F6 · ***one word, two kinds*** — `$Summary`, `$Header`, `$Article`, `$Search`

`run` — duplicate class names across doors: **`$Header`** ([article](../../package/src/article/Header.tsx), a `$Chemical` strip; [application](../../package/src/application/Header.tsx), a `$Section` bar — and `$Cover` prints `<header>` besides) · **`$Summary`** and **`$TypeOfSummary`** ([writing](../../package/src/writing/Summary.tsx), a section that summarises; [application/Menu](../../package/src/application/Menu.tsx), the word you press) — **so `.pd-summary` selects both**, and the encyclopedia theme overrides the base's `summed_` group to restyle the menu's (`293-295`). `read` — **`$Article`** ([src/encyclopedia](../../package/src/encyclopedia/Article.tsx), a chapter type; [`.wiki/.article/.book.tsx`](../../package/.wiki/.article/.book.tsx), a book) · **`$Search`** ([application](../../package/src/application/Search.tsx); [the portal's own](../../package/.wiki/.encyclopedia/.book.tsx)). **What is owed:** one word each — his.

### <a id="f7"></a>F7 · ***the chrome is in the cover*** — the two wiki covers are 134 and 255 lines, four of them cover

[`.wiki/.article/.cover.tsx`](../../package/.wiki/.article/.cover.tsx) and [`turing/.cover.tsx`](../../package/.wiki/turing/.cover.tsx) write the site's bar, the 45-language menu and the toolbar **inside `<Cover>`**, and the first forty lines are identical in both (`read`). The wiki's book overrides `header()` for the panel only ([`.article/.book.tsx:9-13`](../../package/.wiki/.article/.book.tsx)) — **the feature exists and the bar does not use it**; the paper puts its strip in `header()`. *Under [F3](#f3)'s ruling the bar belongs to the encyclopedia book's own layout, wherever `header()` comes to live.* The reader ([`read-page.mjs`](../../package/.wiki/.public/read-page.mjs)) emits the chrome per cover.

### <a id="f8"></a>F8 · ***one table of contents, two grammars*** · ***RE-JUDGED***

The paper: `<TableOfContents><Heading/><Row><Chapter>Introduction</Chapter><Row><Section>…` — lowercase mentions, no anchors, the mention resolves ([`.latex/aaronson/.table.tsx`](../../package/.latex/aaronson/.table.tsx)). The wiki: `<TableOfContents><Section><Heading/><Option><Ref>[(Top)](#)</Ref></Option><Menu><Summary><Ref>[Early life](#early-life-and-education)</Ref></Summary>…` — application kinds and **hand-written fragments** ([`turing/.table.tsx`](../../package/.wiki/turing/.table.tsx)). ***Re-judged: the encyclopedia's contents opening in place is the encyclopedia being different, and that is right.*** **What is a wart is what the wiki's does not use:** the mention that resolves (it writes fragments by hand) — [use what is there](#r-existing). Beside it: **`$Row` is a struck word** ([Sprint 46](50-sprint-46--the-mention.md#rulings)) standing and written **132 times** (`run`); **`$Option` written by hand 364 times** (`run`) because registering *for a menu a paragraph is an option* took the menu's summary ([Solutions 75](../solutions/75-the-registration-that-took-the-summary.md)) — a registration that a specialisation should not swallow the level's own kinds: **a chemistry question**.

### <a id="f9"></a>F9 · ***the portal is a third shape of book***

[`.wiki/.encyclopedia/.book.tsx`](../../package/.wiki/.encyclopedia/.book.tsx): 536 lines, the book class at 477 ([ruled a fault](../writing-a-book/05-the-book-is-the-layout.md#the-book-file)); seven kinds wearing a format by block arithmetic (`run`: 7, [B10](#b10)); `$Logo.print()` hand-writes `<img>` **where `$Image` exists** ([Sprint 56's finding](62-sprint-56--the-encyclopedia.md), still); `$Project.view()` wraps in `CardFormat` by hand; a second `$Search` **where the application's exists**; `painted` duplicated; `$LanguageFormat` placing ten languages by a lookup table on `$at`; `$PortalTheme` selecting `.pd-book > header`, `header p:has(img)`. *The portal being a different book is right; what it re-invents is not.*

### <a id="f10"></a>F10 · ***`$Ref` is a bramble***

[`Ref.tsx`](../../package/src/reference/Ref.tsx): **four ways to name a target** — a path annotation, a `$path` prop, a markdown link, a bare key (`29-33`); `link()` lexes the copy with `marked` on every call and `url()` calls it twice per draw (`31,34,61-70`); `view()` writes the anchor — **a third anchor writer** beside `Writing.view:58` and `Catalogue.print:45`; `reduce()` overridden (`72-77`). *Doug: "use the markdown reference syntax it affords"* — the markdown link is the spelling; the path annotation exists to hold the result once. **Cleanup, no new member.**

### <a id="f11"></a>F11 · ***the heading synthesised three times, and waived three times***

[`Author.tsx:16-19`](../../package/src/library/Author.tsx), [`Subject.tsx:17-20`](../../package/src/library/Subject.tsx), [`Title.tsx:29-33`](../../package/src/library/Title.tsx) each rebuild `_block` in the bond to make a `Heading` from what was written; each also waives `$opensWithHeading`, redundant once the bond has made the heading (`run`: 3); `Author.tsx:28` reads *"a author"*. **Doug ruled these are cards** — *"Title, Author and Subject are the cards of the card catalogue"* ([Sprint 46](50-sprint-46--the-mention.md#rulings), U13 design owed since). **What is owed:** the ruling, then one mechanism.

### <a id="f12"></a>F12 · ***waivers of `$saysSomething`*** · ***RE-JUDGED: probably not a wart***

`Synopsis`, `Footer`, `Index`, `Chapter`, `Catalogue`, `Format`, `Row` waive one base rule (`run`, within the 19). *The first reading — "a rule most of a level's kinds waive is at the wrong level" — [designs the base from today's kinds](#misconception); a waiver is the specification chain's own move, done right.* **Left standing only as a question:** is a document that says nothing until drawn a thing the base rule should know?

### <a id="f13"></a>F13 · ***cruft and shells***

`CatalogueCard.title()` and `get meaning` ≡ `IndexCard`'s ([`CatalogueCard.tsx:12,18`](../../package/src/library/CatalogueCard.tsx) · [`IndexCard.tsx:14,20`](../../package/src/reference/IndexCard.tsx)) · `ReferenceCard.references()` hand-scans `_block` where `searchFor` exists ([`ReferenceCard.tsx:16-19`](../../package/src/reference/ReferenceCard.tsx)) · five files hold more than one kind against one-class-one-file (`run`: `Menu` 3, `Emphasis` 3, `Description` 2, `Infobox` 2, `Talk` 2) · three members that throw not-implemented, [ruled dead](#b9).

### <a id="f14"></a>F14 · ***a control that does nothing***

[`Appearance.tsx`](../../package/src/application/Appearance.tsx): three values written by radios (`19-21`) and read by nothing (`run`); raw `h3`/`h4`/`label`/`input`; element selectors ×6. [Sprint 66 R7](72-sprint-66--themes-and-formats.md#requirements) ruled it writes the theme. **Build R7 or take it off the page.**

### <a id="f15"></a>F15 · ***the doors***

[`index.ts:49-65`](../../package/src/index.ts) re-exports `library/` *"until every consumer moves"*; there is no `formatting/` though [T12](57-sprint-53--the-annotative-theme.md#rulings) ruled the base *writing, reference, formatting*; an `application` door stands beside the ruled five; `article/Header` is chrome in the article door while the bar is in application. **A ruling.**

### <a id="f16"></a>F16 · ***the record against the code***

Claims the code contradicts today (`run`/`read`): *"the ONE override left is `$Format`"* ([drawing conventions](../the-coding-style/03-the-coding-style.md#the-drawing-conventions)) — 12 stand · *"no comments in `src`"* ([P47](../the-type-system/05-what-we-believe.md#how-we-work)) — 650+ lines · `find`/`findOne` ([B12](#b12)) · `formatting/` ([F15](#f15)) · [The Spelling of a Kind](../the-coding-style/05-the-spelling-of-a-kind.md), flagged stale 2026-09-05 and unchanged. *Repaired in the same act as the code.*



# <a id="plan"></a>THE PLAN — ***2026-09-13, the group as one sprint; HALTED at the list for Doug's go***

## <a id="requirements"></a>Requirements — approved in the room, each cited to its ruling, each saying what is OBSERVED

| | what it demands | ruled at | observed as |
|---|---|---|---|
| <a id="r1"></a>**R1** | ***A composition that wears a format draws the format as its element.*** The tag is said once, in the format's selector; nothing wraps; no second instance; no `of` attribute; `$Format.$of`, `handed()`, `shown()`, `$Format.format()`, `$Annotation.format()` and `reflection.formatted` are gone. | [D1](#d1), probed; [his words](#r-f2), *"there should never be `of`"* | every kind that wears a format draws ONE element carrying the format's compiled class and the kind's `pd-` classes; the format's bond runs once; `grep -rn '\$of\|handed()\|shown()\|formatted(' src` empty; no `of=` in any page's DOM |
| <a id="r2"></a>**R2** | ***A format's specification judges the writing it is worn by: one format at most.*** *"The format base validates that it and only it handles this."* | [his words](#r-f2) | a promise: a writing wearing two formats is refused with the rule's sentence |
| <a id="r3"></a>**R3** | ***`format` is an ask on `$Composition`; `definition` is protected on `$Writing`.*** Annotations wear no format; the mention appears, so `definition` cannot leave `$Writing`. | his questions on D1 — *public or protected, on composition?* — answered by [D5](#d5) | `grep -n 'get format' src/writing/Composition.tsx` one hit; `protected definition` in `Writing.tsx`; the eight kinds that wear a format declare no `definition` |
| <a id="r4"></a>**R4** | ***The fold's key is the `id` of the writing's element; the meaning anchor stays inside it.*** `Entry.view()` goes; a heading's id is a fold its bond makes from its text. | [B4](#b4); [use what is there](#r-existing) | `.pd-entry` is a `<p id=…>` with no `<a id>`; every heading's id equals today's; `verify:latex` 66 rows and 43 citations landing; the wiki gate's contents links land |
| <a id="r5"></a>**R5** | ***The twelve `view()` overrides are handled with what exists, and an override stays only where the element is genuinely a different element.*** | [his words](#r-misconception), *overrides aren't inherently a problem… don't create new warts* | `override view()` in `src` falls from 12 to the five with a reason each — `Image`, `Search`, `Math`, `Equation`, `Format` — and the reasons stand in the extension chapter |
| <a id="r6"></a>**R6** | ***The article has its own book kind, with `header()`, `footer()` and its parts placed by type; `$Encyclopedia` is a type of it; `$Book` assumes nothing.*** *"Move it to where it is needed. But document that Books are for layout and this is exactly the kind of thing one does when implementing a book."* | [his words](#r-f3) and the D3 answer | `grep -c 'header()\|footer()' src/library/Book.tsx` = 0; the six-long `:not()` roster count in `article/Theme.tsx` and `markdown/Theme.tsx` = 0; `verify:latex` green on both readings with its 64 section numbers; the three wiki pages unchanged at the pinned widths |
| <a id="r7"></a>**R7** | ***A theme is values; formats are the styled chemicals; the book and a document each wear a format made in their bond through `$`.*** The values live in one object the book holds, read by every writing through `theme`. | [Sprint 66 R1–R3](72-sprint-66--themes-and-formats.md#requirements); [his ruling](#r-themes) on two targets; [D6](#d6) on access | `$Theme` declares no selector and no `@select`; a first-frame probe on all four pages reads the theme's colour on a meaning anchor, never blue; `verify:latex` both readings; the wiki gate's regions unchanged at nineteen widths |
| <a id="r8"></a>**R8** | ***Hiding by theme is replaced by parenthetical where the semantics say so — case by case, each seen on the page first.*** | [his words](#r-parenthetical) | the encyclopedia theme's `_display = 'none'` count from 7 to those with a reason recorded; the wiki cover's author and subject `print={false}` in the demo |
| <a id="r9"></a>**R9** | ***The dead stripped and the cruft deleted, per file, never a sketch and never a member that meets an interface.*** | [his words](#r-dead), [the scheme](#r-scheme) | each stripped member's grep empty in `src`, both demos and `.tests`; the suite green; the pages unchanged; `Highlight`'s ends, `Bookmark`/`PageFold`'s `persist`, `read`/`follow`/`held` untouched |
| <a id="r10"></a>**R10** | ***The heading demand is said once*** — the rule and the supply are one statement, so a kind with no heading answers once. | [B5](#b5) | ***design owed*** — [U7](#u7) |
| <a id="r11"></a>**R11** | ***An annotation demands nothing of its holder unless it is a type.*** | [B7](#b7) | `Path`, `Format`, `Catalogue` no longer override `specifically()`; a promise that an annotation written into a writing runs no rule on it |
| <a id="r12"></a>**R12** | ***The record is repaired in the same act, and the chapter on extending `$Writing` is written.*** | [his words](#r-existing); *"Be keeping track of everything decided in coding documents and design documents"* | the drawing conventions row names the five overrides and their reasons; The Book Is the Layout carries the D3 sentence; Motif 4 carries U5; Writing a Book gains the extension chapter |
| <a id="r13"></a>**R13** | ***Every change under `src` is shown before it is made; one file per structural step; the gates after each unit; local commits; nothing pushed.*** | the standing rule | the ledger in this chapter |
| <a id="r14"></a>**R14** | ***The appearance panel writes the theme.*** | [Sprint 66 R7](72-sprint-66--themes-and-formats.md#requirements), ruled | Dark on `/turing` turns the page dark live; a reload is Standard |

**Out of scope, named:** the four name collisions ([F6](#f6)), `$Row`'s word ([F8](#f8)), the doors ([F15](#f15)), `$TypeOfBook`'s parent ([B8](#b8)), the Condition Report's fate — rulings, not units. The `$Option` registration limit — a chemistry pitch. Comments out of `src` beyond the files this sprint opens ([B11](#b11)).

## <a id="decisions"></a>Decisions — continued from [D1–D4](#d1)

- <a id="d5"></a>**D5 · `format` is a public ask on `$Composition`; `definition` is protected on `$Writing`.** *An ask like `meaning`, `theme` and `book`, which are public; annotations wear no format, so it stands one class down from them; the mention appears, so the element's word stays on the base. Chosen over a getter on `$Writing` (his question: does it apply to annotations — no) and over a reflection reading (a member of the thing, not a utility with the receiver demoted).*
- <a id="d6"></a>**D6 · The values live in one object the book holds, and everything reads it through `theme`.** *Organised by access, as he asked: a writing's `theme` already walks to the book; a format's parent is now the writing it dresses, so `this.theme` reaches the same object with no `$of` and no copy. The book's format and a document's format are per instance, made in the bond through `$` so a book registers its own; the theme is per book, registered `'single'`. His `$BookTheme`/`$DocumentTheme` are the candidate names for those two formats and are his to give — they are formats reading a theme, and calling them themes would say the wrong thing. Chosen over both inheriting the palette from `$Theme`, which declares a reading's values twice or reads them across by getter — the fight.*
- <a id="d7"></a>**D7 · Five overrides stay, each a different element.** `Image` (a void element with `src`), `Search` (a form the writing does not hold), `Math` and `Equation` (KaTeX's HTML on the element itself), `Format` (its children). *Chosen over routing KaTeX through `print()`, which adds an element to say the same thing.*
- <a id="d8"></a>**D8 · Deletions ride along, per file, under the deletion test.** *A member that meets an interface stays; a sketch keeps its essence; the chain beneath the base is read first.*
- <a id="d9"></a>**D9 · The heading demand is design owed.** Three shapes, none chosen: the supply runs only where the rule stands (one waiver, on the specification); a structural property on the type both read (*"structure is a property"*); the demand narrowed to a type between section and its kinds. *Doug's.*
- <a id="d10"></a>**D10 · The article's chapter type for a logical part comes from the encyclopedia and moves up.** *`$Article` names the encyclopedia's body chapter today; the article book needs the same and the encyclopedia is a type of the article book, so the type lives in `src/article` and the encyclopedia inherits it. The name is his — `$Article` collides with the demo's book.*
- <a id="d11"></a>**D11 · Sprint 68's five uncommitted files are committed locally before U1 opens two of them.** *`Manual.tsx` and `encyclopedia/Theme.tsx` are in both; a sprint does not edit another sprint's uncommitted work. His call at the halt.*

## <a id="units"></a>Units — each a mechanism, its files, its scenarios, its visible end

### <a id="u1"></a>U1 · ***the lifted format*** — R1, R2, R3 · D1, D5
**Mechanism:** `$Composition.format` asks the block for the one format worn; `$Writing.view()` draws `createElement(format ?? definition, { className }, …)`; `FormatSpecification` judges its holder — one format; `$Book` wears its theme by the same road until U5 makes it a format; `$Annotation.format`, `$Format.format`, `$of`, `handed()`, `shown()`, `reflection.formatted` deleted; each kind that wears a format loses its `definition` and says the wearing in one line (the `addType` shape, [B10](#b10)); the portal's seven say it the same way.
**Files:** `Writing.tsx` · `Composition.tsx` · `Annotation.tsx` · `Format.tsx` · `Reflection.tsx` · `Book.tsx` · `Table.tsx` · `Image.tsx` · `Manual.tsx` · `Navbox.tsx` · `Box.tsx` · `Infobox.tsx` · `Menu.tsx` · `application/Header.tsx` · `Toolbar.tsx` · `Search.tsx` · `.wiki/.encyclopedia/.book.tsx` and its mirror.
**Depends on:** D11.
**Scenarios:** **T1** a kind wearing a format draws one element with the format's class and its own classes *(the probe as a promise)*. **T2** the format's bond runs once. **T3** no `of` attribute in any page's DOM, driven. **T4** two formats on one writing refused. **T5** the grep of R1 empty. **T6** the wiki gate's regions and the paper's readings unchanged. **T7** suite, `tsc`, `clean`.
**Visible end:** ***the four pages as today, one element fewer around every worn kind — counted before and after.***

### <a id="u2"></a>U2 · ***the id on the element*** — R4 · D2
**Mechanism:** the fold's key becomes the `id` of the element `view()` draws; the meaning anchor is drawn inside it; `Entry.view()` deleted; `Heading` makes a fold from its text in its bond, its `definition` a getter by depth, its view override deleted.
**Files:** `Writing.tsx` · `Entry.tsx` · `Heading.tsx` · `Fold.tsx` *(read; possibly untouched)*.
**Depends on:** U1.
**Scenarios:** **T8** an entry's `<p>` carries its key as id and no anchor carries one. **T9** every heading id equals today's. **T10** `verify:latex` landing pairs green. **T11** the wiki gate's contents links land. **T12** a heading's fold is in the scratchpad *(one promise)*.
**Visible end:** ***citations and contents still land, with no anchor wrapping an entry.***

### <a id="u3"></a>U3 · ***the overrides, case by case*** — R5 · D2, D7
**Mechanism:** `Summary` → `definition = 'summary'`; `Code` → `definition = 'pre'`, `print()` writes `<code>`; `Illustration` → `definition = 'figure'`, `print()` writes the image and caption; `Line` → the label is writing: a line is a section whose heading is its label, the reader writes it so; `Ref` → the markdown link is the one spelling, read once at bond into a `$Reference` holding the path, so the base draws the anchor and `url()`, `link()` and the override go *(if it holds; else the override stays with its reason)*; `Image`, `Search`, `Math`, `Equation` keep their override and lose the `reflection.formatted` wrapper. **Each case shown before its file changes.**
**Files:** `Menu.tsx` · `Code.tsx` · `Illustration.tsx` · `Infobox.tsx` · `Ref.tsx` · `Image.tsx` · `Search.tsx` · `Math.tsx` · `Equation.tsx` · `read-page.mjs` and the wiki's lead chapters (the `Line`).
**Depends on:** U1, U2.
**Scenarios:** **T13** `override view()` in `src` = 5, the five named. **T14** the paper's and the wiki's text identical; code, figures, summaries, infobox rows drawn as today by the gates. **T15** every `Ref` on `/turing` still an anchor with its href *(count equals today's)*.
**Visible end:** ***twelve overrides to five, the pages unchanged.***

### <a id="u4"></a>U4 · ***the article's book*** — R6 · D3, D10
**Mechanism:** a book kind in `src/article` *(name owed)* with `header()`, `footer()` and a `print()` that places its parts by type — the abstract, the body's chapters, the references, the notes, the appendix — as `$Encyclopedia` does; `$Book` loses `header()`/`footer()` and its `print()` is the block; the body chapter type moves from `src/encyclopedia/Article.tsx` to `src/article` *(name owed)*; `$Encyclopedia` extends the article book; the paper's chapter class carries the type; the six-long rosters in the article and markdown themes become selectors on the body the book draws.
**Files:** `src/article/` *(two new, one moved)* · `article.ts` · `encyclopedia/Encyclopedia.tsx` · `encyclopedia.ts` · `library/Book.tsx` · `article/Theme.tsx` · `markdown/Theme.tsx` · `.latex/aaronson/.book.tsx` · the wiki books' imports · `read-page.mjs`.
**Depends on:** U1.
**Scenarios:** **T16** `header`/`footer` absent from `Book.tsx`. **T17** the six-long roster count 0 in both themes. **T18** `verify:latex` both readings, 64 section numbers. **T19** the three wiki pages unchanged at the pinned widths. **T20** `loading.test` green with the moved type.
**Visible end:** ***the paper numbered and laid out as today, by its book's layout and not by exclusion.***

### <a id="u5"></a>U5 · ***the theme split*** — R7 · D4, D6
**Mechanism:** `$Theme` becomes values — no selector, no group, no type, no specification; registered `'single'` on `Book`, held by the book, read by every writing through `theme`; the base's 56 groups become a base book format (`styled.main`, the frame) and a base document format (the prose), each a `$Format` made in the book's and the document's bond through `$`; the article, markdown and encyclopedia themes split the same way, the encyclopedia's chrome groups going to the application kinds' own formats; every format reads values through `this.theme`; the theme tests rewritten; the paper's switch hands the book another theme and the demos register their formats in `.book`.
**Files:** `writing/Theme.tsx` · `writing/Format.tsx` · two new base files *(names owed)* · `article/Theme.tsx` +2 · `markdown/Theme.tsx` +2 · `encyclopedia/Theme.tsx` +2 · `application/*.tsx` formats · `library/Book.tsx` · `library/Document.tsx` · `index.ts` · both demos' `.book.tsx` · `.tests/theme.test.tsx` · `.tests/book.test.tsx`.
**Depends on:** U1, U4.
**Scenarios:** **T21** `$Theme` declares no selector and no `@select`. **T22** the first-frame probe on all four pages: never blue. **T23** `verify:latex` both readings. **T24** the wiki gate at nineteen widths. **T25** a format registered for a book's document type is worn by every document of that book. **T26** a theme value written from a handler redraws a format reading it *(Sprint 66's AE7 probe; red first)*.
**Visible end:** ***the four pages identical by the gates, with the theme a values class one screen long.***

### <a id="u6"></a>U6 · ***the panel writes the theme*** — R14
**Mechanism:** the panel asks the book's theme by registration and writes `size`, `measure` and the palette; Automatic follows `matchMedia` and its change event; the current choice is read from the theme; the night palette read off Wikipedia's night mode.
**Files:** `application/Appearance.tsx` · `encyclopedia/Theme.tsx` (the option values) · the wiki gate.
**Depends on:** U5 T26 green.
**Scenarios:** **T27** Dark turns `/turing` dark live. **T28** Large grows the text; Wide widens. **T29** a reload is Standard, Standard, Automatic.
**Visible end:** ***a control that does something — a hand-authored page cannot fake it.***

### <a id="u7"></a>U7 · ***the heading demand said once*** — R10 · D9 — ***DESIGN OWED***
*No files, no scenarios, no dependencies.* Three shapes stand in [D9](#d9); Doug chooses; until then `Quote`, `Aside`, `Summary`, `Theorem` and `Table` answer twice.

### <a id="u8"></a>U8 · ***an annotation demands nothing*** — R11
**Mechanism:** the default `WritingSpecification` moves from `$Annotation` to `$Type`; `Path`, `Format` and `Catalogue` lose their `specifically()` overrides; one promise.
**Files:** `Annotation.tsx` · `Type.tsx` · `Path.tsx` · `Format.tsx` · `Catalogue.tsx`.
**Depends on:** nothing.
**Scenarios:** **T30** an annotation written into a writing runs no rule on it. **T31** the suite's specify promises unchanged.
**Visible end:** ***three overrides gone and every page the same.***

### <a id="u9"></a>U9 · ***the dead and the cruft, per file*** — R9 · D8
**Mechanism:** as each file is opened — and on their own where no unit opens them — strip the focus logic on `$Reference`; `concatenate`; `valid()` (tests call `specify()`); the six `url` readings; `reflection.chapter`; the three throwing shells; the seven `heading()` copies; `CatalogueCard`'s duplicated `title()` and `meaning`; `ReferenceCard.references()` → `searchFor`; the three redundant `$opensWithHeading` waivers; `Note`/`Aside`'s duplicate comment to the library. Untouched: `Highlight`'s ends, `Bookmark`/`PageFold`'s `persist`, `read`/`follow`/`held`; `span()` read hard first.
**Files:** `Reference.tsx` · `Composition.tsx` · `Writing.tsx` · `Url.ts` · `Reflection.tsx` · `Appendix.tsx` · `Talk.tsx` · the seven · `CatalogueCard.tsx` · `ReferenceCard.tsx` · `Author.tsx` · `Subject.tsx` · `Title.tsx` · `Note.tsx` · `Aside.tsx` · `.tests/writing.test.tsx`.
**Depends on:** nothing.
**Scenarios:** **T32** each stripped member's grep empty in `src`, both demos and `.tests`. **T33** suite, `tsc`, `clean`. **T34** the pages unchanged.
**Visible end:** ***the diffstat: lines subtracted, each named.***

### <a id="u10"></a>U10 · ***the parentheticals, seen*** — R8
**Mechanism:** the four pages driven; for each `display: none` in a theme, what it hides and whether the model should carry it; the wiki cover's author and subject become `print={false}` in the reader and the demo; the rest decided on the page and each kept rule given its reason in the library.
**Files:** `read-page.mjs` · the wiki covers and mirrors · `encyclopedia/Theme.tsx` · the portal's book.
**Depends on:** U5.
**Scenarios:** **T35** the count of hiding rules, before and after, with a reason per survivor. **T36** the wiki gate unchanged.
**Visible end:** ***the same pages, with the model saying what is not shown.***

### <a id="u11"></a>U11 · ***the records*** — R12
**Mechanism:** the drawing conventions row corrected to the five overrides and their reasons; The Book Is the Layout carries D3's sentence *(done 2026-09-13)*; Motif 4 § built carries U5; The Spelling of a Kind rewritten against the code or struck; the `find`/`findOne` name ruled; the extension chapter written in Writing a Book from the code after U3 — `definition`, `print`, `print={false}`, `addType`, wearing a format, registering, and the five overrides that stay. **Compounding after, on Doug's word.**
**Files:** the design books; every cover in the same act with the TOC tool.
**Depends on:** U3, U5.
**Visible end:** ***a reader of the books meets the code as it is.***

## <a id="risks"></a>Risks

| | risk | what mitigates it |
|---|---|---|
| **K1** | the lifted road changes the box around every worn kind and the wiki gate's 25 region pairs move | the format's element WAS the styled box; T6 before anything else is built on U1 |
| **K2** | the theme split regresses first paint — [Solutions 73](../solutions/73-the-theme-that-arrived-on-the-second-paint.md) again | T22, the first-frame probe, red-first |
| **K3** | a heading's fold per heading fills the scratchpad and two headings share a text | T12 counts; a duplicate key is the same collision the wiki's ids have today, named if met |
| **K4** | the suite reads `dist` | rollup QUICK before every run, [Solutions 5](../solutions/05-the-suite-that-passed-against-a-stale-build.md) |
| **K5** | a served page believed before the mirror is rebound | [Solutions 72](../solutions/72-the-mirror-with-two-directions.md); rebind and restart before any measurement |
| **K6** | a fix that is itself a wart | every unit's diff read against [What Natural Means](../the-coding-style/07-what-natural-means.md#a-fix) before it stands; a change that only adds is said out loud |
| **K7** | U4 changes `$Book` while U1 has it open | one file per step; U1 closes with its commit before U4 opens |

## <a id="order"></a>Order

**D11 first** (Doug's) · **U1 · U2 · U3 · U8 · U4 · U5 · U6 · U10** — U9 rides along in every file opened and closes on its own — **U11 last**; **U7 waits on D9.** *Each unit: rollup QUICK, the suite, `tsc`, `clean`, the paper's gate on both readings, the wiki gate where a page changed; one local commit; the stand rewritten.*

## <a id="trace"></a>Origin trace, both directions

| from | lands in | | from | lands in |
|---|---|---|---|---|
| R1, R2, R3 | U1 | | R8 | U10 |
| R4 | U2 | | R9 | U9 |
| R5 | U3 | | R10 | U7 *(owed)* |
| R6 | U4 | | R11 | U8 |
| R7 | U5 | | R12 | U11 |
| R13 | every unit's ledger | | R14 | U6 |

## <a id="self-check"></a>The plan against itself

**One unit is owed and says so** — U7. **Two units carry a conditional** — U3's `Ref` and U10's survivors — each with its fallback named. **U5 is the largest** — six theme files split and three demos' registrations — and it is one sprint because the operation is one operation repeated; it is not divided. **The size:** U1 touches sixteen files with one edit each; U5 the most, about twenty; the whole is several sessions of one kind of work, sequential by their gates. **Every requirement has a home; every unit names what runs and what is seen.**

## <a id="names"></a>Names owed to Doug

the article book kind · the body chapter type (`$Article` stands in) · the book's format and the document's format (`$BookTheme`, `$DocumentTheme` his candidates) · the two base format files · this chapter's title.

## <a id="group"></a>The group, designed — ***the four decisions the plan continues from; each tested as a wart***

### <a id="d1"></a>D1 · ***a composition draws the format it wears as its element*** — F2, B1, B10, C4 — ***PROBED, run***

**The probe** (`.tests/probe-f2.test.tsx`, created, run against `dist` and removed in one command): a `$Section` kind wearing a format whose `selector = styled.aside` and `padding = '7px'`, drawn two ways.

| road | what the DOM held | format bonds |
|---|---|---|
| **today** — worn by concatenation, drawn through `reflection.formatted` → `<Worn of={this}>` | `<aside of="$Chemistry.$BoxedFormat[179]" class="sc-…"><section class="pd-boxed-today pd-section">…</section></aside>` — **the format wraps, and its `of` prop leaks into the DOM as an attribute** | **2** |
| **lifted** — the annotation already in the block, lifted as the element: `const Format = $(format); <Format className={this.className}>{this.print()}</Format>` | `<aside class="sc-iCoKjR iNFQeJ pd-boxed-lifted pd-section">…</aside>` — **one element, the format's tag, the compiled class and the writing's classes on it, `padding:7px` in the sheet** | **1** |

**So the tag is said once — in the format's selector — and the kind says nothing.** *The mechanism is chemistry's own: `$(instance)` lifts an existing chemical, `given()` forwards `$className` to the element, `styling()` stands the format's view (its children) in its selector.*

**The decision:** `$Writing.view()` draws `createElement(this.format ?? this.definition, { className }, …)` — *a format worn is the element; otherwise the kind's own word.* **Deleted:** `$Annotation.format(drawn)` (a base member that existed for one subclass — [the third face](../the-type-system/06-polymorphic-limiting.md#the-third-face)), `$Format.format()`, `reflection.formatted` and its *if book* ([B1](#b1) dissolves: `$Book` wears its theme by the same road), `$Format.$of`, `handed()` ×3, `shown()`, the `<Worn>` lift; `definition` becomes unused on the eight kinds that wear a format and is deleted there. **Added:** one ask on `$Writing` — `get format()`, beside `meaning`, `theme`, `book` — *tested as a wart: it asks the block like its siblings, every writing may wear one, it predicts nothing.* **The format base validates that it alone handles the element** ([his words](#r-f2)): `FormatSpecification` judges the writing it is worn by — one format, no `definition` of its own — *which is what an annotation's specification is for, and today `$Format.specifically()` is overridden to nothing ([B7](#b7)).*

**Tested against his direction, and one half fails:** *`definition` cannot move to `$Composition`* — one annotation appears, the mention (`$Catalogue`, `parenthetical = false`), which draws the anchor a table of contents is made of. **It stays on `$Writing`, protected.**

**Wearing a format is said as a declaration, not block arithmetic** ([B10](#b10)): the bond concatenates through `addType`'s shape — *the spelling is settled with the file open, one line, the same in `src` and the portal.*

### <a id="d2"></a>D2 · ***the twelve overrides, case by case, with what exists*** — F1, B4

No attributes member. With D1 the eight `reflection.formatted(this, <tag className=…>` wrappers have nothing to wrap in; what remains per kind: **`Summary`** → `definition = 'summary'` · **`Code`** → `definition = 'pre'`, `print()` writes `<code>` · **`Illustration`** → `definition = 'figure'`, `print()` writes the image and its caption · **`Heading`** → its level in the class list it already writes; its tag by depth is a `definition` getter, and its `id` is [B4](#b4)'s · **`Entry`** → [B4](#b4) · **`Line`** → the label is writing, not a prop drawn by CSS — *a ruling* · **`Image`, `Search`** → overrides stay: a void element with `src`, a form · **`Math`, `Equation`** → `print()` carrying KaTeX's HTML inside the definition, if the extra element is acceptable; else the override stays · **`Ref`** → [F10](#f10)'s cleanup first. *Each shown before its file changes.*

**[B4](#b4) as designed:** the fold's key is the `id` of the definition element — *a fold names where a writing IS* — and the meaning anchor stays inside it; `Entry.view()` and `Heading`'s hand-made id go. **A heading's id becomes a fold its bond makes from its text**, so the contents' `#early-life-and-education` resolves through the scratchpad like every other fold — *the existing mechanism, used.*

### <a id="d3"></a>D3 · ***the article has its own book*** — F3

A book kind in `src/article` (*name owed*) with its own `print()` placing its parts — the abstract, the body's documents, the references, the notes, the appendix — by type, as `$Encyclopedia` places its. The article theme then selects the body and the six-long roster goes six times; markdown's three go with it. **Open, his:** whether `header()` and `footer()` stay on `$Book` (an empty default answers nothing and costs nothing) or move to the kinds that have them. **The exclusion decorator** — a theme declaring once what is not part of it — goes to [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#pitches) as a pitch and is not built here.

### <a id="d4"></a>D4 · ***the theme split*** — F5, C3 — ***open, and it is the one his design and Sprint 66's disagree on***

[Sprint 66 R1–R3](72-sprint-66--themes-and-formats.md#requirements): *a theme is values; a format is the styled chemical; one theme, two formats.* [His ruling today](#r-themes): *a `$BookTheme` and a `$DocumentTheme` derived from theme, targeting the book and a document, sharing a base.* **Under D1 both fit one shape:** the book wears its `$BookTheme` as its element (`styled.main`, the frame's groups) and a document wears its `$DocumentTheme` as its element (`styled.article`, the prose groups) — *each a singleton by registration, each worn by the lifted road.* **Where they disagree is where the VALUES live:** on `$Theme` inherited by both (a palette declared twice per reading, or read across by getters — the fight), or on one values object the book holds that every format and both themes read through `this.theme.ink` as formats do today. *A question, not a decision.*

## <a id="caching"></a>Stored where a read would do — Doug's third ask

| | what is stored | why it says it is | question |
|---|---|---|---|
| **C1** | `printed` — [`Writing.tsx:13`](../../package/src/writing/Writing.tsx) | a fresh `$Block` per draw remounts | [B3](#b3): a block read without a block made — chemistry's? |
| **C2** | `reflection.readings` — `Reflection.tsx:15` | the same, for parts | same |
| **C3** | `$Document._theme`, `$Book._theme` and a setter that runs it down (`Book.tsx:41-44`) | [ruled 2026-09-12](../the-motif/04-themes-per-type-formats-per-instance.md#built): store and make | **Ruled ([his words](#r-themes)): a `$BookTheme` and a `$DocumentTheme` over a shared base, each reflecting the top of the hierarchy it targets** — his design, tested for warts in the group's design (where the two share values is where a fight could arise) |
| **C4** | `$Format.$of` — `Format.tsx:15` | the second instance ([F2](#f2)) | goes with F2 |
| **C5** | `$Writing._mention` assigned by makers and by `$Book`'s bond | [a ruled fact](../writing-a-book/04-the-book-s-little-framework.md#facts) | keep |
| **C6** | `reflection.templates`, `parser.parts`, `tex.rendered`, `Specification.cached` | per-class or per-string facts | keep |

## <a id="promises"></a>The promises to question — Queenie

| | the promise | what it pins |
|---|---|---|
| **P1** | [`book.test.tsx:16-32`](../../package/.tests/book.test.tsx) *"…by position"* | [F4](#f4), the ruled-away fault |
| **P2** | `writing.test.tsx:62-72`, `334-337` *"a sentence holding a documented is admitted"* | the struck level rule — a wrong thing pinned as the cost of striking it |
| **P3** | `theme.test.tsx:43-55` *"a theme written into a document does not make it that document's"* | a written annotation the framework ignores |
| **P4** | `writing.test.tsx:234-239` *"a format makes its own theme"* | `$of`, the second instance ([F2](#f2)) |
| **P5** | `registration.test.tsx:64-98` *"the table draws first, so nothing a documented learns at draw time can reach it"* | a limitation, made load-bearing |
| **P6** | `writing.test.tsx:31-48` the two ladders | fine — but silent on [B8](#b8) |
| **P7** | five reaches into `reflection.beneath` that `src` never makes | [Solutions 66](../solutions/66-the-promise-that-outlived-its-design.md), still standing |
| **P0** | *what has no promise at all:* the format wrap, the heading twice, `print={false}`, the doors, every `view()` override | the fights nothing would go red for |

## <a id="questions"></a>Rulings still needed

1. **[F2](#f2)** — RULED as a direction, to be tested: does it create a wart.
2. **[F3](#f3)** — RULED as a direction, to be tested the same way.
3. **[B8](#b8)** — `$TypeOfBook extends $TypeOfReference` or `$Type`, like the chapter's?
4. **[C3](#caching)** — RULED: `$BookTheme` and `$DocumentTheme` over one base, to be tested.
5. **[B9](#b9)** — RULED: `read`/`follow`/`held` stay; `span` read hard first.
6. **[F6](#f6)** — the four words.
7. **[F8](#f8)** — `$Row`'s word; the registration limit as a chemistry pitch.
8. **[F14](#f14)** — the panel: build R7 or remove.
9. **[F15](#f15)** — the doors.
10. **[F5](#f5)** — the hidden things, once driven.
11. **Where this register lives** — [The Condition Report](../the-condition-report/.cover.md) or this chapter (Libby's question).

## <a id="names"></a>Names owed — proxies, none taken

the article book kind · this chapter's title · `$Article` as the encyclopedia's chapter type (collides with the demo's book).

## <a id="unread"></a>What this register did NOT do

No page was driven and nothing was measured on screen — every *hides*, *wraps* and *draws* above is `read` or `recorded`, never `seen`. Not read: the served mirror `.wiki/.public` (generated), `read-page.mjs` past its head, `.latex/.public/build.mjs`, and the seven promise files other than `book`, `theme`, `registration` and `writing`. Chemistry's `particle.ts` was read at the styling seam (`70-100`, `140-160`, `315-375`) and `chemical.ts` grepped for the chain; `styled.ts` not read. `tsc` on `tsconfig.build.json` exits 0 (`run`).
