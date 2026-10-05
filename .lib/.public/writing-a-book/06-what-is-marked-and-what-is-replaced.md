# What Is Marked and What Is Replaced

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-10-01, the night of [Sprint 97's policy](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md#the-policy), on Doug's task: "Go through all the classes. Which of the annotations do you feel are essential? Ones for reference, parenthetical, and other really fundamental ones — just document the classes, what annotations control them, what they mark, and leave them to be styled in the base sheet. And then for others like maybe list and table, document them as something where a person would decide to export their own List or Table annotations as subclasses of those, and introduce a new styled component." Every row is read from [`src`](../../package/src/) as it stands at `1282606`; where the policy changes a class, the row says so. The chapter's title is a PROXY.***

---

## The two groups, and the line between them

**Every class in `src` marks what it is, and a library dresses marks.** A kind of writing marks itself — `pd-paragraph`, `pd-title` — and an annotation marks the writing it is said of — `pa-reference`, `pa-table`. The marks are the whole of what the base says about appearance; the base ships no style. A library's theme is one styled component written against the marks, and that component is *the base sheet of that library*: what a library's author implements in the subclass of Theme they create.

**The line between the two groups is whether the class is a box.** A *fundamental* annotation says what a writing is or means and carries a mechanism — a level, an anchor, an id, a hiding, a file — and no box of its own; its mark is dressed in the theme, and nothing is subclassed to change its look. A *replaceable* annotation is a box or a layout said of a writing — a grid, a list, a header, a navigation, a closed page — and carries its own styled component; a library that wants it to look otherwise subclasses it, writes its styled component, and uses its own in place of the framework's, by export or by registration. The policy is [P1 to P9](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md#the-policy); this chapter is the roster it governs.

## The kinds — what a writing is, dressed by mark in the theme

*A kind is not an annotation; it is a composition that marks itself and stands its own annotations in `$Define`, behind whatever the author writes. These rows are what a library's theme has to dress for a bare book to read as that library's.*

| class | marks | stands in `$Define` | its element | notes |
|---|---|---|---|---|
| `$Letter` | `pd-letter` | Level 1, Open, Inline | `span` | holds anything; the floor |
| `$Word` | `pd-word` | Level 2, Permissive, Open, Inline | `span` | |
| `$Sentence` | `pd-sentence` | Level 3, Permissive, Open, Inline | `span` | |
| `$Paragraph` | `pd-paragraph` | Level 4, Permissive, Open, Block | `div` | |
| `$Section` | `pd-section` | Level 5, Permissive, Closed, Block | `div` | means through its Heading |
| `$Chapter` | `pd-chapter`, `pd-canonical` | Level 6, Permissive, Closed, Block | `div` | Cover, Synopsis and TableOfContents take `pd-canonical` off |
| `$Book` | `pd-book` | Level 7, Strict, Closed, Block, **Theme** | `div` | the Theme it stands is *asked for*, `$(theme)`, so a library's registration answers it |
| `$Title` | `pd-title` | Block; then **Self** and **Referent** from the compiler's link | `div`, inside its Self's anchor | Self and Referent asked for, `$(self)`, `$(referent)` |
| `$Heading` | `pd-heading` | Block; **Referent** and **Self** | `div`, inside its anchor | the same |
| `$Line` | `pd-line` | Block | `div` | a sentence on its own line |
| `$Space` | `pd-space` | Blank | `span` | draws its count of non-breaking spaces |
| `$Break` | `pd-break` | Blank, Block | `div`, empty | |
| `$Mention` | — (a Word) | Referent, from the written form | `span` | the words shown, the id worn |
| `$Means` | — (a Word) | Reference, from the written form | `span`, inside its anchor | |
| `$Previous` · `$Next` | `pd-previous`, `pd-next` | Reference to the neighbour's mention | `span`, inside its anchor | |
| `$Math` | `pd-math` | — | `span`, KaTeX inside | |
| `$Equation` | `pd-equation` | Paragraph's | `div`, KaTeX display inside | numbered by a library's counter, not the base |
| `$Date` | `pd-date` | — | `time`, replacing its span at the bond | |
| `$Figure` | `pd-figure` | Letter's | `span` | |
| `$Code` | `pd-code` | — | `pre`, its own element, replacing its span at the bond as a Date's `time` does, holding `code` | `numbered` wraps each line in `pd-code-line` carrying the number as `data-line`; a library's `::before { content: attr(data-line) }` shows it |
| `$Image` · `$Svg` | `pd-image`, `pd-svg` | — | `span` holding `img` / inline `svg` | |

*What a library writes for these:* rules by mark in its theme's component — `.pd-paragraph { margin-block: … }`, `.pd-title { font-size: … }`, `.pd-code { … }` — and nothing else. A kind is never subclassed for its look.

## The fundamental annotations — what a writing is or means, dressed by mark in the theme

*Each carries a mechanism and no box. A library dresses the mark in its theme and subclasses none of them for a look. Where one holds a styled field, the row says what it is for.*

| class | said of | marks on the writing | the mechanism | dressed |
|---|---|---|---|---|
| `$Level` | a composition | — | the level, read from what was written in it | nothing to dress |
| `$Strict` · `$Permissive` | a composition | — | what parts it holds, each taking its opposite out of expression | nothing |
| `$Open` · `$Closed` | a composition | — | whether it holds anything but writing | nothing |
| `$Inline` · `$Block` | a composition | — | Block replaces the writing's own `span` with a `div`, cited to itself; under the policy by value, `'span'`, so a Parenthetical in front is left alone | nothing |
| `$Reference` | any writing | `pa-reference` | adds its **anchor** as a container, `href` the address the writing means; the anchor is a styled field, `anchor`, worn `pa-reference` through `attrs` and carrying no rule of the base's | `.pa-reference { color: …; text-decoration: … }` in the theme; the anchor itself replaced only if the element must change, by a subclass registered on the book |
| `$SelfReference` (`Self`) | a title, a heading | `pa-self-reference` | the same anchor, the address the writing's own | `.pa-self-reference { color: inherit; text-decoration: none }` in the theme — his word, *these things deserve to be in the base theme one implements* |
| `$Referent` | any writing | `pa-referent` | sets the writing's `id` to the slug it holds | a scroll margin, if any, by mark |
| `$Parenthetical` | any writing | `pa-parenthetical` | under the policy, **removes what is drawn**: replaces the writing's own element with one carrying its id and marks, `hidden`, and no children — through Block's seam, no CSS | nothing to dress; a library's rule on `.pd-title` reaches nothing it should not |
| `$Narrative` | any writing | — | takes every Parenthetical behind it out of expression | nothing |
| `$Blank` | a writing with no ink, Space and Break | `pa-blank` | a mark and nothing else, since what wears it has nothing to hide | by mark, if a library blanks something else |
| `$Append` | a chapter | `pa-append` on its own element — moot once an annotation's writing is not drawn | holds a file's contents or a picture's address beside a chapter, read by a Figure by identifier and type | nothing |
| `$Author` · `$Subject` · `$About` | a cover | — | each stands a Reference to what it names, from the written form; the book exposes them | the byline a library draws is the library's own kind, with its own mark |
| `$Content` | an entry of a table of contents | `pa-reference` and, on its note, `pa-content` through `attrs` | a Reference whose note draws the entry's name in its **span**, a styled field | `.pa-content` by mark; the span replaced only with the table of contents it belongs to |
| `$Theme` | a book | — | a Format that provides: its layer answers chemistry's `theme` with it, and chemistry hands its fields live to every template beneath, drawing its `style` as the book's layer; singular, every theme behind it out of expression; no field and no style of its own | **it is the base sheet** — a library's theme is a subclass with fields and the one styled component that dresses every mark above, registered on the library's book class, `$(TheLibrary, Theme)(LibraryTheme)` |

## The replaceable Formats — a box said of a writing, subclassed and replaced

*Each is a Format: a shell of a class with `style` set to a styled component, and the marks it puts on the writing. The base's template carries what the marks mean and no look. A library that wants the box to look otherwise writes a subclass with its own styled component and uses it in place of the framework's.*

| class | said of | marks | the base's template carries | what you write |
|---|---|---|---|---|
| `$Table` | a composition | `pa-table` on it; at the bind `pa-row`, `pa-row-start-n` on each row, `pa-col`, `pa-col-start-n`, `pa-col-span-n` on each cell | the grid; rows and the anchor around a linked cell `display: contents`; the twelve starts and spans — what the marks mean | `class $LibraryTable extends $Table { style = selection(this.style)\`.pa-col { … } .pa-row:first-child .pa-col { … }\` }` — extending the grid, or `selection.div\`…\`` for a grid of your own |
| `$List` | a composition with parts | `pa-list`, `pa-ordered` on it; `pa-item` on each item at the bind | the item and its marker, decimal when ordered | `class $LibraryList extends $List { style = … }` |
| `$Paginated` | a book | `pa-paginated` on it; `pa-page` on each chapter at the bind; `pa-open` on the bookmarked one at each define | `.pa-page:not(.pa-open) { display: none }` — a closed page unseen, no `!important` | a subclass for which chapters are pages, as the manual's Tabbed, and a `style` if the pages need a box |
| `$Cover` | a chapter | `pa-cover` on it; takes `pd-canonical` off | a `header` and nothing | `class $LibraryCover extends $Cover { style = selection.header\`.pa-cover { the card } .pa-cover .pd-title { … }\` }` |
| `$TableOfContents` | a chapter | `pa-table-of-contents` on it; takes `pd-canonical` off | a `nav` and nothing | the same shape, `selection.nav` |
| `$Synopsis` | a chapter | `pa-synopsis` on it; takes `pd-canonical` off | no layer — its power is over the text, appending the synopsized chapter's | a subclass with a `style` if a synopsis needs a box; otherwise `.pa-synopsis` by mark in the theme |
| `$Biography` · `$Autobiography` | a chapter | `pa-biography`, `pa-autobiography` | under the policy no layer; annotations that mark | by mark in the theme, or a subclass with a `style` for a box |
| `$Bold` · `$Emphasis` · `$Underline` | any writing | `pa-bold`, `pa-emphasis`, `pa-underline` through `attrs` on their own element | `b`, `em`, `u` — the semantic element and nothing | a subclass with a `style` for another element or a look; a library's own basic by the same six lines |

**And using yours in place of the framework's — two ways, by what the framework does with the word.** Where the framework stands a component for itself — Book's Theme, a Title's Self — a library *registers* a subclass on its book class, in its door, once: `$(TheLibrary, Self)(LibrarySelf)`; every book of the library is a subclass of that class and resolves it. Where a chapter *writes* the word — `<Table />`, `<Cover />` — **a registration does not reach it:** the library exports its subclass under the framework's name from its door, and the chapter imports it from there. *Corrected 2026-10-05. This paragraph said until then that the same registration answers a written word; [`registration.test.tsx`](../../package/.tests/registration.test.tsx) promises the opposite — "a chapter's written `<Table />` is not, and is replaced by importing the library's as Table" — and [policy 3](07-the-development-policies.md) has it right, with the reason: a written word is made before any `.public` code could ask. Making a written word ask was pitched in Sprint 97 and parked.* A look the framework has no word for — a Card, a Frame — is used the same way: imported from the door and written.

## A door, worked

```tsx
// the-library/.book.tsx — configuration: imports, classes, registrations, exports
import { $, selection, css } from '@dna-platform/chemistry';
import { $Book, $Theme, $Table, $Cover, Theme, Table, Cover, Self } from '@dna-platform/public';

declare module 'styled-components' { interface DefaultTheme extends $LibraryTheme {} }
export class $LibraryTheme extends $Theme {
    font = "Georgia, serif"; ink = '#23262a'; paper = '#faf8f4'; link = '#5b2f2a'; space = '1.25rem';
    protected typography() { return css`.pd-paragraph { margin-block: ${({ theme }) => theme.space}; } .pd-title { font-size: 2em; }`; }
    protected links() { return css`.pa-reference { color: ${({ theme }) => theme.link}; } .pa-self-reference { color: inherit; text-decoration: none; }`; }
    style = selection.div`font-family: ${({ theme }) => theme.font}; color: ${({ theme }) => theme.ink}; ${this.typography()} ${this.links()}`;
}
export class $LibraryTable extends $Table { override style = selection(this.style)`.pa-col { border-block-end: 1px solid ${({ theme }) => theme.ink}; }`; }
export class $LibraryCover extends $Cover { override style = selection.header`.pa-cover { padding: ${({ theme }) => theme.space}; }`; }

export class $TheLibrary extends $Book { /* write(): the running head and the byline */ }
export const TheLibrary = $($TheLibrary);
$(TheLibrary, Theme)($($LibraryTheme));
export const Table = $($LibraryTable);
export const Cover = $($LibraryCover);
```

*A chapter then imports `Table` and `Cover` from this door and writes the words it always wrote; the Theme is registered, since the framework stands it; the manual's theme, extending the library's, overrides `links()` alone; a dark book sets three fields. Corrected 2026-10-05: the door registered Table and Cover until then, which reaches nothing.*

**Names.** Doug's: *fundamental*, *replace*, *export your own*, *register*, *the base sheet*. Ours, flagged: the chapter's title; `typography` and `links` as the parts in the worked door.
