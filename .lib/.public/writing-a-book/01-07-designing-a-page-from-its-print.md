# Designing a Page from Its Print

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **sprint:** [Sprint 102](../projection/107-sprint-102--designing-together.md)
- ***Written 2026-10-07 from one evening of designing the catalogue's page with Doug in HTML, after a sprint that designed by guessing failed. Short on purpose: the point is to be read before the next page is designed.***

---

## The method

1. **Start from the bound print.** `.me/..public/<book>/index.html` holds the book exactly as the binder prints it. Take the regions a reader sees — the bar, the side bar, the front — with the framework's class names kept and the hashes dropped, and put a `<style>` of your own in place of the printed sheet. Every word on the page is the book's; nothing is mocked.
2. **Keep it beside the chapter that designs it**, as `N-the-<view>~0NN.html` in the design book, and open it in a browser from the file. One page, many rounds; photographs come later.
3. **Change one thing per round and say what it was.** He looks, he says, you edit, he refreshes. Never redo what was close — *"Your original one was closer to correct. We could have tweaked it. But you completely redid it."*
4. **Find comparables before inventing.** A house is priced from the houses like it. Name the site that already does the interaction and take its element; the answer to *would any website ever look like this?* must be yes, with the site named.
5. **Port when seen**, with the workbench open, until the live page measures as the page does.

## The rules that held

- **A region is designed from what its chapter carries.** The bar is the cover and nothing else: the subject it is filed under, its own title, its author. It needs no other book, so it scales, every book has it, and it stays this book's. If a region needs data the chapter does not say, the chapter gets an annotation and a custom `Cover` exposes it as a property; the region never gets a dependency.
- **A reference can show its referent's cover before it is followed.** The subject's mark in the bar unfolds on hover to the subject's name — what a press will show. The canonical echo, made an interaction.
- **One drawing, many places, by reference.** A mark is a window onto the drawing on the cover — an SVG `use` on the page, the one file in the book — never a copy at another scale. *"If we changed one, yours wouldn't change."* Its border is the drawing's line width at that scale; its window is a rule of the book, not of the place, so the same mark is the same everywhere.
- **A book has a colour scheme, not a colour, and the scheme comes from what the book is.** The catalogue wears the site's opal and teal; the story a Field Notes notebook; the design book a blueprint; the manual gunmetal and brass. Three colours in blocks — the Penguin tri-band — the third colour its own band, not a repeat. Pastels are dusty, a quarter of a candy's chroma; a formula in colour space is a guide, never the chooser.
- **Black on no bar, a side bar a breath off white, colour kept for accents**: dots, spines, the open row's strip.
- **Sizes are the files' multiples of one body.** A 14px body; covers 132 wide; the desk compact enough that the shelf stays in reach under it.
- **A lockup is built on the brand rules**: one mark height, a gap of a third of it, the wordmark's cap height on the mark's centre line, tracking a touch tighter, one weight, clear space of one mark.
- **An open book keeps its shape.** The desk's words are as tall as its cover; a long entry fades and *read on* is a state of the page that holds while other books are picked.

## What the page is, in the framework's words

| on the page | in `.public` | stands |
|---|---|---|
| the bar | the book's cover: subject mark, title, byline | built, from the cover alone |
| the subject's mark | a reference to the subject's cover, drawn through its illustration | the mark's file is the one cross-book thing; the binder's |
| the side bar | the table of contents; the open row's strip its `pa-open` | built |
| the `▷` after a filed book | the table's second word, `[[ ▷ ]]( Dougs Story )**` | built |
| the shelf | **the table of contents drawn as covers** — a face of `TableOfContents` | to build; ends the duplicate-id problem, since an entry is drawn once and referred to once |
| the desk | the open entry chapter | to build |
| the cover's drawing | an `Svg` figure the cover appends, said `Illustration` | to build |
| three colours | `Coloured` grown to the scheme — ground, band, foot, their inks — set in the theme, said in the entry | to build; the copy is the binder's gap |
| the caption | `Caption`, said of the one line in an entry | built |
| *read on*, the built view | classes on the book, as tones and papers are; the appendix heading's own place pressed | to build |
| a phase | `Phase`, said of a chapter | planned |

## What is still the binder's

A page knows nothing of another book: the subject's mark, a filed book's three colours and its chapter count all reach the catalogue by a copy today. The binder answers *filed under* from both ends; it can hand a book its subject's cover and a catalogue its books' covers. Until it does, the copy is written where the reference is, and recorded.
