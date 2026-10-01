# Dressing a Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-27 with U9 of [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u9), on Doug's asking for a visual language in the test library and a report on how easy it is to make one. The code is the test library's own: [`the-library/.book.tsx`](../../package/.binding/.test/library/.book.tsx) and [`3-the-masthead-and-the-byline.code.tsx`](../../package/.binding/.test/manual/3-the-masthead-and-the-byline.code.tsx). The chapter's name is a PROXY.***

---

**Doug, 2026-09-27:** *"Tighten up the formatting through the theme… imagine having things in well defined bounding boxes with well defined spacing… really use the theme and maybe visual cues to make things look distinct and natural to give me a visual language that will help me navigate your library. I am not sure what a cover is, or a table of contents, or a regular chapter, and it's not clear what will take me to the subject, or who is the author. Help me know where I am."* And: *"report if its relatively easy to use styled components on the test library. I would think it would be relatively easy to make formats with styles and apply them, and relatively easy to make components that have annotations as defaults, and you can do both of those without sacrificing customizability, so you can build in units of meaning that are sensible for UI."*

**The short report: yes to both, and the whole dress is two files of the library's own.** None of it touches `.public`. What it took to learn is below, so the next library pays minutes for it.

## Where a library's look lives — three places, each with its own job

| place | what it dresses | how | in the test library |
|---|---|---|---|
| **the theme's values** | everything, by inheritance | a class under `$Theme` sets any of the eight | `$LibraryTheme`: Georgia, a wider measure, a longer leading, an oxblood link, a warm paper |
| **the theme's sheet, extended** | *the framework's marks* — `pd-chapter`, `pd-canonical`, `pa-cover`, `pa-synopsis`, `pa-table-of-contents`, `pa-col`, `pa-page` | the theme's `$Define` reassigns `style` to a styled component that **extends** the default sheet | the cover card, the kind labels, the counted chapters, the synopsis rule, the boxed table |
| **a format in front of the theme** | *the library's own marks* — `pd-running-head`, `pd-byline`, `pd-label`, `pd-catchword` — and any place a book or chapter chooses | a class under `$Format` with a `style`, stood on a book in `$Define` or on chapters at `$Bound` | `Navigable` on every book; `Framed` on Some Projects and on each of the persona's chapters; `Typewritten` on the paper |

**The division is the lesson.** The default sheet already comprehends every class the framework puts on an element, and a promise holds it to that — so a library's theme does not restate it; it extends it, and its extension speaks only of the same marks. What the library *adds* to a page — a masthead, a byline, a catchword — is the library's kind, wears the library's mark, and is dressed by the library's format. One never reaches into the other.

## Extending the default sheet is one field

`$Theme` holds its sheet in a field, `style`, and the theme's provider reads that field **when it draws** — [`Theme.tsx`](../../package/src/writing/Theme.tsx), `const Style = this.$theme.style`. A subclass extends it in a field of its own: its initialiser runs after the base's, so `this.style` there is the default, and a field is made once for the class, where a `$Define` would make a styled component per instance and no two pages of a book would share a sheet — the first draft of this library did, and [Sprint 95, U8](../projection/100-sprint-95--pages-formats-and-words.md#u8) found thirty-three sheets for thirty-four pages:

```tsx
export class $LibraryTheme extends $Theme {
    font = "Georgia, 'Times New Roman', serif";
    space = '1.25rem';
    link = '#5b2f2a';
    // …the eight, as many as the library changes

    override style = selection(this.style as ComponentType<{ className?: string }>)`
        .pd-book { counter-reset: chapter; }
        .pd-chapter .pd-title::before { content: 'Chapter ' counter(chapter); /* … */ }
        .pa-cover .pd-title::before { content: 'Cover'; }
        .pa-autobiography .pd-title::before { content: 'Autobiography'; }
        .pd-title.pa-parenthetical::before { content: none; }
        /* … */
    `;
}
```

`selection(component)` is styled-components' own extension: the new sheet carries every rule of the old and adds its own after, so the library's rules win where they meet. **Every added rule reads the theme's values** — `${at('space')}`, `${at('ink')}`, `color-mix(in srgb, ${at('ink')} 18%, ${at('paper')})` — never a literal, so a book that overrides the values keeps the look: Libby's dark book, which sets three, is the same card, labels and rules in ivory on charcoal, with no rule of its own. *Seen in the photographs.*

**A subclass of the extending theme inherits the extension**, as it inherits `$Define` — `$DarkTheme extends $LibraryTheme` sets three values and nothing else.

**Not in a bond of its own, and a defect found on the way.** The first draft extended the sheet in a bond, `$LibraryTheme(...chemicals) { this.$Theme(...chemicals); this.style = … }`, and every page carried a console error from chemistry's chain rule: *"$LibraryTheme did not call $Format — every declared bond constructor on the chain must be called."* With the bond gone the error stayed and named `$Theme` instead: **Theme's own bond passes over Format's on purpose**, since Format's bond would wrap the theme in a second provider, and chemistry has been reporting that on every page of every themed book since Theme was built, logging and carrying on, so nothing looked wrong. That is `.public`'s to settle — a template method on Format that Theme overrides, so Theme may call Format's bond — and is pitched with an expected-failure promise in [the regression](../../package/.binding/.test/binding.regression.ts), reading Chrome's console — the check does not fire in the package's own build, which is a question for chemistry — not fixed here. `$Define` needs no bond and is where a kind's defaults belong.

## Each book its own feel, and where a feel lives

Doug: *"I like each book having slightly different feels. A more monospace programmery look somewhere, a more literary look somewhere else… You want to keep the complexity in the theme and formats and annotations, while preserving the semantic structure mostly, though to achieve interesting layouts or effects, book and chapter type can be used to organize their children by type or annotation into more legible arrangements for the purpose."*

| book | its feel | how, and nothing else changed |
|---|---|---|
| **The Library** | the card catalogue: Georgia, the labelled card, the boxed table | the library's theme, which every book inherits |
| **Libby** | the same language on charcoal | `$DarkTheme`, three values |
| **A Paper** | typewritten, a manuscript | `$Typewritten`, a Format on the book, one rule |
| **A Persona** | literary: Palatino, centred small-capped titles, paragraphs indented and set close, the poem breathing, every chapter framed | `$Literary`, a Format on the book; `<Framed />` on each chapter at the bind |
| **Some Projects** | pages, one at a time, framed | `<Paginated />` and `<Framed />` in `$Define` |

**The semantic structure is untouched in every one:** the same chapters, sections, paragraphs and marks, so a mention from another book lands the same way in each. A feel is a theme's values, or a format in front, and that is all a feel is allowed to be until a layout needs a book or chapter class to arrange its children, which none of these has needed.

## Driving the links, and what the compiler refused

**Every visible anchor of a page, clicked in Chrome, with the landing recorded** — the address, and the first identified element whose box reaches the viewport's top band — is how the two turns that Doug clicked were found to fail, and how Libby's hops were proven: [Sprint 88, U10](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u10) has the findings. Three things a library writer meets on that road:

- **A mention nobody refers to is refused at the bind** — *UNREFERENCED-MENTION: "a name nobody spends is unnecessary, and a library is compact."* Make a heading a mention, `[[[ Delegation ]]]`, only where another chapter will hop to it.
- **A hop across books lands on its heading through the page's own router**, `#delegation`, `#what-was-found`; a chapter's route within a longform book turns by the Book's own scroll, which is the Book's to get right and a book's to override — the test library's book opens the cover's route at the top of the page, masthead in view.
- **A line break before a reference swallows the space before it.** Keep the word and its `<Means>` on one line.

## The visual language, and where each cue comes from

| the reader asks | the cue | the mark it is drawn from |
|---|---|---|
| who wrote this, and where does it stand? | the **byline**: two labelled rows, *Author* and *Filed under*, each a link, at the head of the cover's card | `pd-byline`, `pd-label` — the library's, drawn by its book from `book.author` and `book.subject` |
| what is this page? | a **kind label** above the title: *Cover*, *Autobiography*, *Biography*, *Synopsis*, *Table of Contents*, *Chapter 1* | `pa-cover`, `pa-autobiography`, `pa-biography`, `pa-synopsis`, `pa-table-of-contents`; chapters of the canonical type counted by a CSS counter on `pd-canonical.pd-chapter` |
| is this the cover? | a **card**: a top rule in the link's colour, a tinted ground, the byline its head | `pa-cover`, on the chapter's own element, and `pd-byline` |
| is this the synopsis? | a **ruled block**, italic, the rule in the link's colour | `pa-synopsis` |
| is this the table? | a **box**; its catalogue's rows ruled, its headings in the label's voice | `pa-table-of-contents`, `pa-col`, `pa-row:first-child` |
| where am I in the library? | the **masthead**: *The Library / Libby: Table of Contents* — and on the library's own page, the library alone | `pd-running-head`; the top is known by its subject's identifier equalling its title's |
| where next? | the **catchword**: ‹ previous · next › at every chapter's foot, the ends self-references in ink | `pd-catchword`, `pd-previous`, `pd-next`, `pa-self-reference` |

**One voice for every label.** The kind labels, the parenthetical titles, the table's headings and its header row share one rule — small, uppercase, letter-spaced, faded — so a reader learns once what a label looks like. A parenthetical title *is* already the label, so the kind label is suppressed there: `.pd-title.pa-parenthetical::before { content: none; }`, last, at equal specificity.

## The standard tricks, and the two facts that bit

- **CSS counters** count the chapters of the canonical type: reset on `pd-book`, incremented on `.pd-canonical.pd-chapter`, the class Chapter adds and a Cover, a Synopsis or a TableOfContents takes off, so no roster of kinds is written — the roster the first draft wrote, `:not(.pa-cover):not(.pa-synopsis):not(.pa-table-of-contents)`, was a concept without a word until Doug gave it one.
- **`::before` from a mark** says what a thing is without a component: the mark is the framework's, the words are the theme's.
- **The mark on the chapter's own element** boxes the cover and the table: `.pa-cover` is the card and `.pa-table-of-contents` the box. The framework wraps a cover chapter in a `header` and a table in a `nav`, each a `pd-container`, and the sheet never reaches either through what it holds, since a format in front stands its own layer between them and the wrapper is then not adjacent; the first draft did, `header.pd-container:has(> .pa-cover)`, and paid for it in the two facts below — [the trials of Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#trials).
- **`color-mix()`** makes every rule and ground from the theme's ink and paper, so a dark theme's borders are light without a second rule.
- **A closed page hides its own card.** The paginated book hides *pages*, the chapter's own element, so a card drawn on that element goes with it; the first draft drew the card on the wrapper and then had to hide a wrapper whose page was closed, an empty box with a border. *That was the first fault seen.*

**The two facts:**

1. **The front-most annotation draws innermost**, [Theme](../writing/13-theme.md#how-it-is-extended) — so a format stood on a chapter *in front* sits between the semantic wrapper and the chapter's element. A rule on the chapter's own mark is untouched by that; a rule on the wrapper reached through what it contained stopped matching, which is why the sheet writes none now. The persona's book frames every chapter, and its cover is a frame, not a card. **That is correct, not a fault:** the book chose the frame, and the choice is said as one — `Framed` marks what it frames, `pa-framed`, and the card and the rule stand down where a frame already stands, `.pa-cover:not(.pa-framed)`.
2. **A byline drawn by the book is not inside the cover.** The book draws it before its chapters, so the card is two boxes made one: the byline's full border and the cover's, top removed. When the cover is closed or framed, the byline still stands complete. *The first draft gave the byline no bottom and it lost its box the moment the cover page was closed.*

## Components with annotations as defaults — the four shapes in use

| shape | where | what it gives |
|---|---|---|
| **a kind with a mark** | `$Byline`, `$Label`, `$RunningHead`, `$Catchword` — `this.classes.add(this, 'pd-…')` in `$Define` | a thing the theme and the formats can name |
| **a book with annotation defaults** | `$TheLibrary.$Define` adds `<Navigable />` and `<LibraryTheme />`; `$SomeProjects.$Define` adds `<Paginated />` and `<Framed />`; `$APaper.$Define` adds `<Typewritten />` | every book of the library is dressed by extending one class; a book adds its own on top |
| **a book dressing its chapters** | `$APersona.$Bound` adds `<Framed />` to each chapter once the book is whole | a per-chapter default set by the book, since the chapters are written as `<Chapter>` and not as a class |
| **a component with text defaults** | `$Catchword`'s bond adds `<PreviousTitle />` and `<NextTitle />` to its text | a unit of meaning — *the catchword* — written once, wearing its own mark |

**Customisability is kept at every level**, and the library shows it: the same theme is overridden by values (Dark), added to by a format on the book (Typewritten, Paginated), added to by a format on the chapters (Framed), and every rule of the dress still reads the values. Nothing in the base has to be edited to make a book look different.

## Is it easy? The honest report

**Yes.** A format with a style is a class with one field, five lines; applying it is one JSX element in `$Define` or `$Bound`. A component with annotations as defaults is the same `$Define` with `this.annotations.add`. Extending the theme's sheet is one field. The whole dress, both files, is under three hundred lines, half of them CSS.

**How a format reaches the theme — two ways, and both are simple.** Asked whether `.public` should export its sheet's value-reading helper, Doug, 2026-09-27: *"I am worried that this is hard. The idiom is that the theme is on the book's annotations right? We have the book then the annotations and we can access the theme by type. That should be simple. If it's not, we have to ask why it's hard to get an annotation from the book, because I thought everything would be in reach and it should be."* It is in reach: a format is a writing, its `book` is its parent's, and `this.book?.annotations.expressed($Theme)` is the theme, the front-most where two stand — promised in [`theme.test.tsx`](../../package/.tests/theme.test.tsx) for a format on a book and one on a chapter. **What is not in reach is the inside of a style.** A style is compiled once per class and read from any instance of it — chemistry's [`styled.ts`](../../../chemistry/package/src/abstraction/styled.ts), *"the seat — compiled once per class"* — its interpolations fed the drawn instance's values as props; so a closure over `this` in a style reads the standing instance the class was compiled from and never the drawn one: the same promise draws `outline-color:unreached` from `${() => this.book?.…}` while `${({ theme }) => theme.ink}` draws the ink. That is what the provider is for — every styled element beneath the theme is handed its values as `props.theme` — and `at(property)` is sugar over `({ theme }) => theme[property]`, no more. The test library keeps it, nothing is exported, and `Framed` reads the provider like the rest. *Two wrong turns on the way, both cheap: a getter named `theme` on a format breaks Format's own initialiser, since `theme` is its flag for being one; and the closure drew the fallbacks on every page before the promise said why.* What was flagged here until Sprint 95, that the card's selector depended on `header` and `nav`, which no chapter of this library names, went with the selector: the sheet names marks and never a wrapper's element.

## Promises and gate

One Chrome promise in [the regression](../../package/.binding/.test/binding.regression.ts): on Libby's page the cover's title is labelled *Autobiography*, her chapter's *Chapter 1*, the parenthetical synopsis title not at all; the byline's labels read *Author* and *Filed under*; the running head reads *The Library / Libby: Table of Contents*, and on the library's own page *The Library: Table of Contents*. It reads `innerText`, never `textContent` — a word's hidden annotations, its level's *2* and a reference's url, are in the latter. Five promises re-read for the byline's form, the theme's font and spacing, the frame's ink. Committed as `d4d25ad`; measured 2026-09-27: the compiler's typecheck 0, unit 98 of 98, regression 38 of 38; the package untouched.

**Names.** Ours, flagged: `at`, `Byline`, `Label`, `pd-byline`, `pd-label`, and this chapter's title. Doug's: the visual language's words — cover, synopsis, table of contents, chapter, author, filed under.
