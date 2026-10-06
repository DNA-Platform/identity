# The Card That Opened Out of Sight

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **keywords:** library · demo · scrolled-away *(no class in the vocabulary fits; proxy, flagged for Doug)*
- **sprint:** [Sprint 100](../projection/105-sprint-100--the-big-plan.md#where-things-stand)

---

## Symptoms

**Doug: *"you need to add the functionality again where I can click on the design again and see it full screen. I can barely see these designs."*** A press on a concept's card in the design book's gallery appeared to do nothing. Measured in a headless browser, it did everything: the address changed to the concept's, the section gained `pa-open`, the photograph grew from 181 to 706 pixels — **and the open card's top was at −1,260 pixels**, above the window.

Then, with the card made to take the screen — `position: fixed`, the side bar's width from the left — the number and the name showed, the code showed, and **the photographs did not**: the card's own `scrollTop` was 1,340.

## What it turned out to be

**The router scrolls the place a press names into view, and the place is the heading — so whatever stands above the heading is scrolled out.** In the gallery's grid the photographs stood first and the heading under them; a press on the heading's link put the heading at the top of the nearest scrollable box. Before the card was fixed, that box was the page, and the card's top went far above the window; after, it was the card itself, and the photographs went above its top edge.

*Not a defect of the router, which does what [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md) left it doing and what the three-part diff in the sprint chapter would change; the layout had put content above the thing the press goes to.*

## How it was found

By measuring instead of looking: a probe that pressed the card and printed the open section's bounding box, then the photographs' boxes and the card's `scrollTop`. The first number, −1,260, said the press worked; the second, 1,340, said why nothing was seen.

## Why no gate caught it

The gallery had been looked at built, with a card opened by its address on load — where nothing scrolls. A press is a different path from a load, and no probe pressed.

## The repair, and the rule it leaves

**In the open state the title goes first and the photographs under it**, so the scroll lands on the title with the pictures beneath — one line in the gallery's rules, `grid-template-areas: 'number name close' 'pictures pictures pictures'`. And the close, written in each concept as a reference back to *Every Concept*, is placed in the same row.

**The rule:** *whatever a press goes to stands at the top of what it opens.* When a layout opens something at a place, the place is the first thing in it; content above a heading is content the reader will not see after the press that names it.
