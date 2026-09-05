# The Wikipedia Fit

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Researched 2026-09-05, on Doug's question:*** **"We are making this wikipedia styled by default… Is there a wikipedia stylesheet that we can draw inspiration from or use directly?"** *and* **"When a person has all that info is that a type of card? Do we make sure ours can evolve into that?"*

## <a id="the-finding"></a>THE FINDING — the theme is ALREADY Wikimedia's, and there is an MIT package that names it

***[`wikimedia-ui-base`](https://www.npmjs.com/package/wikimedia-ui-base) is the Wikimedia Foundation's own base variable file, it ships 193 CSS custom properties, and it is **MIT**.*** *Read from the registry and the tarball, 2026-09-05: `license = 'MIT'`, `version = 0.22.0`.*

**And every value in `$Theme` is already one of its tokens** — which means somebody took them from Wikimedia by hand and the package is simply the named version of what we have:

| `$Theme` | `wikimedia-ui-base` | |
|---|---|---|
| `paper = '#ffffff'` | `--wmui-color-base100: #fff` | **exact** |
| `ink = '#202122'` | `--wmui-color-base10: #202122` | **exact** |
| `quiet = '#f8f9fa'` | `--wmui-color-base90: #f8f9fa` | **exact** |
| `shade = '#eaecf0'` | `--wmui-color-base80: #eaecf0` | **exact** |
| `rule = '#a2a9b1'` | `--wmui-color-base50: #a2a9b1` | **exact** |
| `link = '#3366cc'` | `--wmui-color-accent50: #36c` | **the same colour** |
| `leading = '1.6'` | `--line-height-base: 1.6` | **exact** |
| `body = 'Helvetica Neue', …` | `--font-family-sans` | *ours drops `Liberation Sans`* |
| `display = 'Linux Libertine', …` | `--font-family-serif` | *ours drops `Source Serif Pro`* |

***So the answer to "can we use it directly" is YES, for the tokens*** — and it is not even a change of look, only of provenance.

## <a id="done"></a>DONE — it is the base now, not a copy

**`wikimedia-ui-base@^0.22.0` is a dependency of the package**, and `$Theme` no longer holds a single hex value:

| `$Theme` | reads |
|---|---|
| `paper` | `var(--background-color-base)` |
| `ink` | `var(--color-base)` |
| `quiet` · `shade` | `var(--wmui-color-base90)` · `var(--wmui-color-base80)` |
| `rule` | `var(--border-color-base)` |
| `link` | `var(--color-primary)` |
| `body` · `display` | `var(--font-family-sans)` · `var(--font-family-serif)` |
| `leading` | `var(--line-height-base)` |
| **`measure` · `size`** | ***ours*** — *WikimediaUI's base carries no content width and no font size; it is a UI variable file* |

***And that is exactly the use their own file asks for:*** **"Don't use those variables directly, instead define your vars referring to them."** *`$Theme` IS our applied layer over the WikimediaUI palette.*

***`$Style` is `$Format`, and every dress is an `$XFormat`*** — `$ArticleFormat`, `$TableFormat`, `$HeadingFormat` and the rest — **which also ended the collision that stopped `index2.ts` from exporting the folder.** *Doug's rule for the word: **formatting is the act, format is the structure**, and these are structures.*

## <a id="the-integrating-document"></a>THE INTEGRATING DOCUMENT — it exists, it is Codex, and it is the WRONG HALF

**[The Wikimedia Design Style Guide](https://design.wikimedia.org/style-guide/) is being archived; [Codex](https://doc.wikimedia.org/codex/latest/components/overview.html) is its successor and IS the integrating document.** *But read its component list:*

> *Button · ButtonGroup · Checkbox · Combobox · Field · Select · TextInput · ToggleSwitch · Accordion · **Card** · Dialog · Menu · Popover · **Table** · Tooltip · InfoChip · Message · ProgressBar · Toast · Icon · Image · Thumbnail · **Link** · Tabs · SearchInput · TypeaheadSearch*

***That is APPLICATION CHROME, not a page of writing.*** **Codex dresses the interface around an article; it does not dress the article.** *Of its twenty-six, four touch us at all — **Card**, **Table**, **Link**, **Thumbnail** — and `Card` is the one worth reading before `$CatalogueCard` gets its infobox drawing.*

***The half we actually want — infobox, reflist, toc, hatnote, navbox, thumb — is NOT in Codex.*** **It lives in MediaWiki core's content CSS (GPL-2.0-or-later) and in on-wiki template stylesheets like [`Module:Infobox/styles.css`](https://en.wikipedia.org/wiki/Module:Infobox/styles.css), which are wiki pages under CC BY-SA.** *So there is no single MIT document for article content; there is a palette we may take and a structure we must write.*

## <a id="the-licence-wall"></a>THE LICENCE WALL — and it is the whole reason to stop at the tokens

| what | licence | may `lib` use it? |
|---|---|---|
| **`wikimedia-ui-base`** | ***MIT*** | ***yes*** |
| [`mediawiki.skinning.content`](https://www.mediawiki.org/wiki/API:Styling_content) — the article CSS behind `load.php` | **GPL-2.0-or-later** | **no** |
| [Vector skin](https://www.mediawiki.org/wiki/Skin:Vector) | **GPL-2.0-or-later** | **no** |
| `@wikimedia/codex` · `@wikimedia/codex-design-tokens` | ***GPL-2.0+*** *(checked at v2.6.2)* | **no** |

***MediaWiki is [GPL-2.0-or-later and its CSS is part of the package](https://www.mediawiki.org/wiki/Copyright)*** — **"if you change CSS files in such a way that you create a derivative work, then this work must be licensed under the GPL as well."** *A public library that shipped Wikipedia's stylesheet would be a GPL library.*

**So: take the TOKENS from the MIT package and write our own dresses against them.** *Which is what `encyclopedia2` already is — ten small styled chemicals reading a theme.* ***The research changes nothing about the drawing; it names where the numbers came from and puts a licence under them.***

## <a id="the-card"></a>IS A PERSON WITH ALL THAT INFO A TYPE OF CARD? — ***yes, and it is called an infobox***

**[`Template:Infobox person`](https://en.wikipedia.org/wiki/Template:Infobox_person) carries about eighty named fields** — *`name`, `image`, `birth_date`, `birth_place`, `occupation`, `known_for`, `notable_works`, `spouse`, `awards`, `website`, and so on* — **and any field left blank is not drawn.**

***That is a catalogue card.*** **A fixed vocabulary of labelled facts about one subject, set beside the opening of the writing, where every field is optional and the card is whatever survives.**

**And its shape is exactly the shape Doug just gave us** — *"an IndexCard can have a name and lines which are pieces of writing"*:

| Wikipedia | ours |
|---|---|
| `.infobox-above` — the title cell | ***the card's `name()`*** |
| `.infobox-label` + `.infobox-data` — a row | ***one of its `lines()`*** |
| `.infobox-header` — a section break | *a line that is a heading* |
| `.infobox-below` — the footer | *the last line* |
| optional fields simply absent | ***a card is whatever lines it holds*** |

***So OUR card evolves into THEIRS by holding more lines, and nothing structural has to change.*** **A `$CatalogueCard` with a title and three lines and a `$CatalogueCard` with eighty are the same class.**

*One caution read off their own page:* **"the table structure is soft-deprecated and will go away."** *So the infobox is a fact about the FIELDS, not about the `<table>`, and our card should not learn the table.*

## <a id="the-viewless"></a>THE VIEWLESS KINDS — where each one lands on Wikipedia

| ours | Wikipedia's | its class | fit |
|---|---|---|---|
| **`$CatalogueCard`** | ***the infobox*** | `.infobox` | ***exact*** |
| **`$IndexCard`** | *a row of an infobox, or an entry in a list* | `.infobox-label` / `.infobox-data` | ***exact*** |
| **`$ReferenceCard`** | ***the reference list*** — a numbered list of citations | `.reflist`, `.references` | ***exact***, and it is why `$Cited` is an `<ol>` |
| **`$TableOfContents`** | ***the TOC*** | `.toc` | ***exact*** |
| **`$Index`** | *category links at the foot of a page* | `.catlinks` | **near** — ours is a book's index, theirs is a category list; both are set in columns |
| **`$Subject`** | ***a category*** | `.catlinks` | ***exact*** |
| **`$Synopsis`** | ***the short description***, or the lead paragraph | `.shortdescription` | **near** |
| **`$Cover`** | *the lead: title, short description, infobox* | — | **near** |
| **`$Path`** | *the href itself* | — | *not a structure* |
| **`$Bookmark` · `$PageFold` · `$Highlight`** | ***nothing.*** *Wikipedia has no reader state* | — | ***no fit, and that is a real difference*** |
| **`$Catalogue`** | *nothing — it is a reading, not a page part* | — | **no fit** |
| **`$Author`** | ***nothing. Wikipedia has no bylines*** | — | ***no fit, and it is the sharpest one*** |

***Two of those absences are worth keeping:*** **Wikipedia has no author and no reader's marks**, *because it is written by nobody and read by everybody.* **Ours has both**, which is the place the default style will not carry us and we will have to draw something of our own.

## <a id="what-to-do"></a>What this says to do

1. **Take `wikimedia-ui-base` as the theme's source** — MIT, already our values, 193 tokens instead of 11.
2. **Do NOT take the article CSS or Codex.** *GPL-2.0-or-later, and it would take the library with it.*
3. **`$CatalogueCard` draws as an infobox** — a name above, labelled lines beneath, every line optional.
4. **`$ReferenceCard` draws as `.reflist`** — which is what `$Cited` (`styled.ol`) was written for.
5. **`$Index` draws in columns** — `$Columns` exists for it and now wears it.
6. ***Design `$Author` and the reader's marks ourselves.*** **The default style has nothing to say about either.**

---

*Sources: [Template:Infobox person](https://en.wikipedia.org/wiki/Template:Infobox_person) · [Template:Infobox](https://en.wikipedia.org/wiki/Template:Infobox) · [Wikipedia:Catalogue of CSS classes](https://en.wikipedia.org/wiki/Wikipedia:Catalogue_of_CSS_classes) · [API:Styling content](https://www.mediawiki.org/wiki/API:Styling_content) · [MediaWiki Copyright](https://www.mediawiki.org/wiki/Copyright) · [Skin:Vector](https://www.mediawiki.org/wiki/Skin:Vector) · [wikimedia-ui-base](https://www.npmjs.com/package/wikimedia-ui-base) · [@wikimedia/codex-design-tokens](https://www.npmjs.com/package/@wikimedia/codex-design-tokens)*
