# The Letter That Took a Hundred and Sixty Seconds

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** library · live-range · absent-case
- **sprint:** [Sprint 115](../projection/120-sprint-115--the-conversation-page-and-the-project-page.md#u7)

---

## Symptoms

**On the bound page of Seren & The Hard Problem, 684 messages, the search's first answer took 194.8 s when *Eirian* was typed, and the same word set in one input answered 43 hits with 95 highlights in 0.01 s.** Letter by letter: *E* answered 684 hits in 4.4 s, *Ei* 212 hits in 160 s, *Eir* 110 in 4.0 s, *Eiri* 43 in 2.0 s, and the rest under a second. No page error, 0 of them in every run; the workbench had shown the search working all day, since nobody had timed a letter there.

## What it was

Not the book's redraw, which was the first suspect, and not the highlights' own making. The cost rose as the square of the hits a letter *removed*: 472 rows dropped at *Ei*, 102 at *Eir*, 67 at *Eiri*. The browser's profile over the *Ei* step, taken on the workbench through the devtools protocol, put 95.7 percent of 77,959 samples in the browser's own `removeChild`, under React's deletion of the dropped rows. A removal was slow because the document was full of live ranges. The conversation's `sought(word)` marked every fall of the word with the CSS highlight API, and built the marks as `Range` objects: one for every *e* in 684 messages on the first letter, tens of thousands. A live `Range` is kept current by the browser on every change to the document, so each row React removed paid for the whole set, and the set made for *E* stayed alive after *Ei* replaced the highlight, until the collector took it.

## The fix

`StaticRange`. The highlight API takes any `AbstractRange`, and a static one is a record of four numbers the browser never updates and paints the same: `new StaticRange({ startContainer: node, startOffset: at, endContainer: node, endOffset: at + word.length })` in [`3-the-project~code.tsx`](../../../../.me/.claude/.manual/3-the-project~code.tsx), one line. The numbers after it stand in the sprint's record. Two cuts were made beside it on the way, found by reading and not by the profile, and kept because each was a redraw with no reason: the searching annotation was assigned to the book as a new array on every letter, and is now said of the table, the index's chapter, only as the word crosses between empty and not; and the two pages' draws above the pages read the word in the book's own draw, where the hits already draw nothing on an empty word.

## What it taught

- **Measure a search letter by letter.** One word set at once is the case a probe finds easy to write and the case a reader never types; the defect lived entirely between the letters, which is `absent-case` on the gate's side.
- **A highlight over a long page is static ranges.** A live range is a subscription to the document, and ten thousand subscriptions make every later mutation quadratic; nothing in the API's shape says so.
- **Profile before fixing.** The right-looking suspect, a book redrawn on every letter, measured at 0.01 s for a whole word; the profile cost one probe and named a native call no reading of the library's code would have reached.
