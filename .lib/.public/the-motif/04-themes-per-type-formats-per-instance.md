# Themes per Type, Formats per Instance

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***A ruling, 2026-09-11, not yet built — recorded here so the next sprint designs from it rather than from the sheets as they stand.*** Doug, reading the encyclopedia theme's infobox group: **"If everything on a theme is for just a component, don't we want the theme for that? We can make an infobox theme that is also a singleton by registering one… I think the theme is being used wrong and might need to be split up."**

## <a id="ruling"></a>The ruling, in his words

> **"A theme would be constant for all members of a type of component. DI can allow you to have singleton themes for types. Just subclass regular theme if needed. Then an infobox can just have the part of its theme. Alternatively, it can just be in the format and then everything about the theme of an infobox is dynamic and particularized. Themes should be single for a type, formats should be individual, and the two should have access to each other so one can use the same values as the other. Your theme approach isn't modular at all."**

> **"This explains why your folders contain almost no code for each theme. There should be more format classes. This should be a particular implementation."**

## <a id="what-it-means"></a>What it reverses, and what it keeps

**Sprint 57 moved kinds' rules INTO the sheet** — *"the sheet addresses kinds"* — so a reading's theme is one class of `@select` groups, one group per kind, and a reading's folder holds a theme and almost nothing else. **This ruling moves them back out**, to where the kind is:

| | one per | holds | reached by |
|---|---|---|---|
| **a theme** | **type** of component | the values and rules constant for every member of that type | registration — `$(Book, Theme)(ArticleTheme)`, and for a kind, a singleton theme registered for it |
| **a format** | **instance** | what is dynamic and particular to this one | written into the writing it formats, as today |

Each reads the other's values, so an infobox's format can use the same `quiet` and `shade` its theme does. **The base `$Theme` in formatting is the package's theme; the readings are `$ArticleTheme`, `$MarkdownTheme`, `$EncyclopediaTheme`** — named the day of the ruling — and a reading's folder is expected to fill with format classes.

## <a id="worked"></a>The worked example is the infobox

The group that provoked the ruling, [in the encyclopedia theme](../../package/src/encyclopedia/Theme.tsx): float, width, margin, padding, background from `quiet`, border from `shade`, a labelled row. Every one is a rule about the infobox and nothing else, so it is the infobox's theme, one per infobox type, and the encyclopedia sheet keeps only what is about the page.

**Placed after LaTeX closes** by Doug's word, as the next brainstorm's first thread; the mechanism is chemistry's [representative](../../../chemistry/.lib/composition/11-the-representative.md) and the seam is [`$Format`](../../package/src/writing/Format.tsx), and both exist. Recorded in [Sprint 58](../projection/64-sprint-58--the-chapter-that-is-its-view.md) as what the sprint owes forward.

## <a id="built"></a>Built 2026-09-12 — the theme is the book's

**Doug's ruling, verbatim:** *"Put a theme property on writing. It asks parent for theme. On document and book, have it store and make theme instead. One property and two overrides."* · *"The theme is for the whole book — register the theme to $Book."* · *"specifically shouldn't create the theme. It validates that it's assigned if anything. You can have this done in the bond constructor."*

**What stands in the code:** `$Writing.theme` asks its parent through `reflection.above` and answers the package's theme at the top; `$Book` and `$Document` hold one, made in their bond by `$check(theme, '!')`, which is the registration answering, and their specifications say only that one is there; the package registers the bare theme on `Book`; a book's file registers its own there as one instance — `$EncyclopediaTheme.$register(Book)` — and the wiki opens one book by route so one registration stands; a book handed another theme assigns it and runs it down to its documents; the sheet is worn in the book's own view. **A theme per kind, this chapter's first thread, is not built**; the encyclopedia's per-kind groups still stand in its sheet. The defect that forced this is [The Theme That Arrived on the Second Paint](../solutions/73-the-theme-that-arrived-on-the-second-paint.md).
