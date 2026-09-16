import { $, select } from '@dna-platform/chemistry';
import { Book as BookSheet } from '@dna-platform/public';
import { $EncyclopediaTheme } from '@dna-platform/public/encyclopedia';

// THE LIBRARY IS DRAWN AS AN ENCYCLOPEDIA — Doug, 2026-09-15: "I want wikipedia formatting… As this
// thing fills in, I want it to be a Wikipedia Page." The sheet is the encyclopedia's own with one
// thing added, and the addition belongs to this library rather than to the framework.
//
// WHERE A BYLINE GOES ON A WIKIPEDIA PAGE is the line directly under the tabs — the slot "From
// Wikipedia, the free encyclopedia" occupies, which is the first place a reader looks to find out
// whose page this is. Doug, 2026-09-15: "We need to find a place for the subject and author links
// that are natural in the wikipedia design… ideally they would be under the title or something
// since they are on the cover."
//
// The encyclopedia's own sheet HIDES a cover's author and subject outright, and for its own demo
// that is right: Turing's cover carries neither, because a Wikipedia article has no single author
// and files its subject in a category bar at the foot. Every cover in THIS library carries both, and
// they are the two links that make it a connected library rather than five separate pages — so they
// are put back, one at each end of that line, the way the tabs above them sit.
// `$LibraryTheme` is a PROXY NAME, flagged for Doug.
export class $LibraryTheme extends $EncyclopediaTheme {
    // A PAINTING IS HUNG, NOT PASTED IN. Doug, 2026-09-15: "make the formatting around it nice like
    // it has a frame." A mat of the paper's own colour, a hairline the width of a frame's rebate,
    // and a shadow shallow enough to read as a thing on a wall rather than a card floating over one.
    // The caption below it is gone with the explanation it used to carry: "No need to explain
    // anything! It's an interactive surprise! Easter Egg… Art speaks for itself."
    // THE MASTHEAD, LAID OUT THE WAY WIKIPEDIA'S IS: the mark on the left, the name beside it, the
    // tagline tucked under the name. Two columns and two rows, with the mark spanning both — which
    // is the only arrangement that keeps the three of them on one baseline block instead of stacking
    // into a tower. The mark is the plate's own untouched state, so a library's logo is a picture of
    // the thing the library does.
    @select('.pd-header > .pd-section:not(.pd-menu)') brand_display = 'grid';
    brand_gridTemplateColumns = 'auto minmax(0, 1fr)';
    brand_columnGap = '0.5rem';
    brand_alignItems = 'center';
    brand_alignSelf = 'center';
    brand_width = 'auto';
    brand_lineHeight = '1.25';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-tiles') mark_gridColumn = '1';
    mark_gridRow = '1 / span 2';
    mark_display = 'block';
    mark_margin = '0';
    mark_padding = '2px';
    mark_background = '#fdfcfa';
    mark_border = '1px solid rgba(38, 34, 30, 0.2)';
    mark_borderRadius = '1px';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-paragraph:not(.pd-heading):not(.pd-tiles)') markName_gridColumn = '2';
    markName_gridRow = '1';
    markName_margin = '0';
    markName_fontSize = '1.05em';
    markName_letterSpacing = '0.01em';
    markName_whiteSpace = 'nowrap';
    markName_lineHeight = '1.25';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-heading') markSaid_gridColumn = '2';
    markSaid_gridRow = '2';
    markSaid_display = 'block';
    markSaid_margin = '0';
    markSaid_fontSize = '0.6875em';
    markSaid_fontWeight = '400';
    markSaid_letterSpacing = '0.02em';
    markSaid_opacity = '0.62';
    markSaid_whiteSpace = 'nowrap';
    markSaid_overflow = 'hidden';
    markSaid_textOverflow = 'ellipsis';
    @select('.pd-header .pd-tiles > .pd-caption') markCaption_display = 'none';


    // THE AUTHOR, UNDER THE TITLE — Doug, 2026-09-15: "Just put 'Author: Doug' with a link to my
    // autobiography and leave the subject author links on the right."
    //
    // This is the cover's own `<Author>`, which the encyclopedia's sheet hides outright because a
    // Wikipedia article has no single author and Turing's cover carries none. Every book here does,
    // and it is the one fact about a personal library that a reader needs before anything else: who
    // is talking. It goes where Wikipedia puts "From Wikipedia, the free encyclopedia" — the line
    // under the tabs — and the label is a label, not a headline, so it is not bold.
    // IT SITS IN THE TAB ROW, NOT ON A LINE OF ITS OWN — Doug, 2026-09-15: "the author link in
    // between the lines." Wikipedia's tab row is a namespace group on the left and an action group on
    // the right; ours has only the right one, so the left half of that row was empty and the author
    // was pushed below the rule onto a line by itself. Between the rules is where it belongs, and it
    // is the same `<Author>` the cover already carries — moved, not copied.
    @select('.pd-book > .pd-chapter > .pd-cover > .pd-author') by_display = 'flex';
    by_alignItems = 'center';
    by_gridColumn = '2';
    by_gridRow = '3';
    // AND IT HAS TO BE ON TOP OF THE TAB ROW TO BE CLICKABLE. The author and the toolbar share one
    // grid cell — that is the whole point, the author sits in the empty left half of the tab row —
    // but the toolbar is written after it in the cover, so it paints over it and swallowed every
    // click. The link was correct the whole time and could not be pressed: Doug, 2026-09-15, "the
    // author link isn't clickable and doesn't take me to my log."
    by_position = 'relative';
    by_zIndex = '1';
    by_justifySelf = 'start';
    by_alignSelf = 'stretch';
    by_fontSize = '0.875em';
    by_lineHeight = '1.4';
    by_margin = '0';
    by_paddingBottom = '1px';

    // THE LITTLE SQUARE THAT GOES TO THE BOOK — Doug, 2026-09-15: "We need the library to actually
    // have a table that points to the other books. The table itself should have the book link maybe
    // as a second little subscript square or something that goes to the book the entry represents."
    //
    // A contents entry has always done one job: jump to a place on this page. In a LIBRARY an entry
    // stands for a book as well, and those are two different destinations that cannot share one link.
    // So a row carries both — the words go to the section, and a small square after them goes to the
    // book. It is a mention, so nobody writes an address: it says the book's name and the shelf turns
    // that into the page. The name stays in the markup at zero size and is read out; only its drawing
    // becomes a square, which is what keeps a row scannable instead of doubling its text.
    // SCOPED TO BOOK MENTIONS, AND SIZED IN ROOT UNITS. A chapter mention wears .pd-catalogue too, so an
    // unscoped rule turned the contents' own chapter entries into squares pointing at sections; and the
    // box was written in em against a font-size of zero, which is how a square came out two pixels wide.
    // AND THE SILENCE IS ON THE MENTION, NOT ON ITS ANCHOR. The name is carried in the markup at no
    // size so a reader who cannot see the square is still told which book it goes to — but written
    // on the ANCHOR, that silence vanished with the anchor: a mention of the book you are already
    // reading draws no link at all now, and its name came back at full size, so the row said
    // "Doug's Library Doug's Library". Silencing the mention itself means the words never show
    // either way, and the square is drawn by the anchor when there is one to draw.
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-book.pd-catalogue > .pd-meaning') square_display = 'inline-block';
    square_width = '0.58rem';
    square_height = '0.58rem';
    square_marginLeft = '0.4rem';
    square_verticalAlign = 'baseline';
    square_borderRadius = '1px';
    square_boxSizing = 'border-box';
    get square_border() { return `1px solid ${this.link}`; }
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-book.pd-catalogue > .pd-meaning:hover') get squareOn_background() { return this.link; }
    squareOn_textDecoration = 'none';
    // BESIDE THE WORDS, NOT UNDER THEM — Doug, 2026-09-15: "put the square next to instead of
    // subscript while keeping it the same size." A row is a flex line aligned on the baseline, which
    // hangs a square below the letters because a square has no baseline of its own to sit on. Centred
    // against the line it reads as a mark standing beside the entry rather than an afterthought
    // dropped off the end of it. The size does not change.
    // AND ON THE FIRST LINE OF A TWO-LINE ENTRY, not halfway down it. Centred against a row that is
    // one line tall is the same thing as sitting on it; centred against a row of two lines puts the
    // square in the gap between them, beside nothing. It keeps the row's baseline, which is the
    // first line's, so a long entry and a short one carry their square at the same height.
    // Centred against the ROW works while every entry is one line and puts the square in the gap the
    // moment one is two; a baseline hangs it under the letters. What is wanted is the middle of the
    // FIRST line, which is the same place in both cases: the row's top, plus the words' own top
    // padding (0.43em), plus half a line, less half the square.
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-book.pd-catalogue') beside_alignSelf = 'flex-start';
    beside_marginTop = '0.59rem';
    beside_flex = '0 0 auto';
    beside_display = 'flex';
    beside_alignItems = 'center';
    beside_fontSize = '0';
    beside_lineHeight = '0';

    // THE ROGUE FOURTEEN PIXELS. Measured 2026-09-15: the tab row stood 47 tall for 32 of tabs,
    // because each group is a PARAGRAPH and a paragraph's bottom margin is one em — 14px at this
    // size. The toolbar's own format zeroes it and something outranks that, so it is zeroed here
    // where the sheet has the last word. Only the vertical margins: the left one is `auto` and is
    // what holds the group against the right edge.
    @select('.pd-book .pd-chapter .pd-toolbar > .pd-paragraph') tabRow_marginTop = '0';
    tabRow_marginBottom = '0';

    // THE CONTENTS, CLOSED UP. Measured 2026-09-15: "Contents" carries six pixels of padding under it
    // AND six of margin, and each entry another six above and below its link — twelve dead pixels
    // before the first row and twelve between every pair after it. On an article with fifteen entries
    // that reads as breathing room; on a book with two it reads as a hole, which is what Doug kept
    // pointing at: "can you just kill that extra space?" So the heading sits on its list and the rows
    // sit on each other, and the block is as tall as what is in it.
    // THE CONTENTS, MEASURED OFF WIKIPEDIA RATHER THAN GUESSED. Read from the live Vector 2022
    // stylesheet and from computed styles on the Turing page, 2026-09-15:
    //
    //   the block          14px, from --font-size-small on .vector-pinnable-element
    //   "Contents"         14px · 700 · #101418 · margin-left 12px · padding 0
    //   an entry           14px · 400 · #36c · line-height normal · 6px above and below · 28px tall
    //   the left edge      12px for BOTH — the heading by margin-left, the row by padding-left
    //   a nested entry     +12px per level, flat pixels, never em
    //   the active entry   700 AND #202122 — bold alone reads wrong
    //
    // THEY SHARE A LEFT EDGE, and ours did not: measured at four widths, "Contents" stood at 66.5
    // and every entry at 56 — ten and a half pixels of overhang from a margin this sheet had put on
    // the heading and on nothing else. Wikipedia reserves that 12px on both, as the gutter its
    // collapse chevron is pulled into; the encyclopedia's own sheet says 0.857em, which is the same
    // twelve pixels. So both are said here, together, where they cannot drift apart again.
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-heading') list_padding = '0';
    list_margin = '0 0 0.43em 0.857em';
    list_lineHeight = '1.6';
    @select('.pd-book > .pd-chapter > .pd-table-of-contents > .pd-section > .pd-paragraph:not(.pd-heading)') indent_paddingLeft = '0.857em';
    // A ROW IS ONE LINE. The words of an entry are drawn as a BLOCK, so a square written after them
    // dropped onto a line of its own and the contents came out as a list of orphaned dots.
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-paragraph:not(.pd-heading)') row_display = 'flex';
    row_alignItems = 'baseline';
    row_lineHeight = 'normal';
    // AND THE ROW NEVER WRAPS. A contents row is a flex line and something upstream leaves it
    // WRAPPING, which is invisible until an entry is long enough to need two lines: then the words
    // take the whole width and the little square is pushed onto a line of its own beneath them.
    // Measured 2026-09-16 on two pages — "Semantic Reference Theory" and "Semantics of Types & More"
    // — where the row stood 55 tall for 44 of text with an orphaned square under it. The words wrap
    // inside their own box; the row does not.
    row_flexWrap = 'nowrap';
    // SIX PIXELS ABOVE AND SIX BELOW, WHICH IS WIKIPEDIA'S. It stood at 0.12em — under two pixels —
    // from a pass that was chasing a gap above the first row, and tightened the wrong thing: the gap
    // was the heading's margin, and the rows had been squeezed to 22px against Wikipedia's 28.
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-paragraph:not(.pd-heading) .pd-ref') rowSaid_padding = '0.43em 0';
    rowSaid_lineHeight = 'normal';
    // AND NOTHING IS BOLD, BECAUSE NOTHING IS CURRENT. Wikipedia bolds the entry you are AT — it
    // darkens it from link blue to #202122 and sets it 700 — and at rest that happens to be "(Top)",
    // which is why a sheet reading Wikipedia sees the first entry heavy and writes down "the first
    // entry is heavy". Measured on the live Turing page 2026-09-15: scroll to y=4000 and "(Top)"
    // goes back to 400 and #36c while the section you have reached becomes 700 and #202122. So the
    // rule encodes a SCROLL POSITION as a style. We have no "(Top)" and nothing watching the scroll,
    // so no entry is current and none of them is bold.
    @select('.pd-book > .pd-chapter > .pd-table-of-contents > .pd-section > .pd-paragraph:first-of-type .pd-ref') rowFirst_fontWeight = '400';
    get rowFirst_color() { return this.link; }

    // AND IT DOES NOT VANISH ON A NARROW SCREEN. The encyclopedia's sheet hides the contents and the
    // appearance panel together below 1120px, which is the right breakpoint — measured off Vector
    // 2022, whose sidebar becomes a titlebar dropdown at exactly 1119px — but Wikipedia MOVES its
    // contents there rather than dropping it, and a library you cannot navigate on a laptop is not
    // navigable. Until there is a control to open it from, it stands at the top of the article in
    // the reading column, at the same type it has in the rail: Wikipedia keeps one type scale for
    // both containers, so nothing here needs a second one.
    @select('@media (max-width: 1119px) {\n             .pd-book > .pd-chapter > .pd-table-of-contents {') narrow_display = 'block';
    narrow_gridColumn = '1 / -1';
    narrow_width = 'auto';
    narrow_maxWidth = '100%';
    narrow_margin = '0 0 1.5em';
    narrow_padding = '0 0 0.75em';
    get narrow_borderBottom() { return `1px solid ${this.quiet}`; }

    @select('.pd-infobox .pd-tiles') hung_display = 'block';
    hung_margin = '0.55em auto 0.7em';
    hung_padding = '0.7em';
    hung_width = 'fit-content';
    hung_background = '#fdfcfa';
    hung_border = '1px solid rgba(38, 34, 30, 0.18)';
    hung_borderRadius = '1px';
    hung_boxShadow = '0 1px 2px rgba(38, 34, 30, 0.1), 0 6px 14px -8px rgba(38, 34, 30, 0.22)';
    @select('.pd-infobox .pd-tiles > .pd-image') plate_display = 'block';
    plate_outline = '1px solid rgba(38, 34, 30, 0.1)';
    plate_outlineOffset = '0';
    // AND IT IS TITLED, NOT EXPLAINED. Doug, 2026-09-15: "No need to explain anything! It's an
    // interactive surprise! Easter Egg… Your description of it ruins it. Art speaks for itself."
    // The caption used to describe the mechanic, which gave the whole thing away before a reader had
    // touched it. What stands there now is what a painting has on a gallery wall and what Turing's
    // portrait has under it — a name and nothing else. It is also the alt text, so the plate says
    // something to a reader who cannot see it, which silence would not.
    @select('.pd-infobox .pd-tiles.pd-illustration > .pd-caption') named_display = 'block';
    named_fontSize = '0.8125em';
    named_fontStyle = 'italic';
    named_letterSpacing = '0.01em';
    named_textAlign = 'center';
    named_margin = '0.5em 0 0';
    named_padding = '0';
    named_opacity = '0.72';

}

export const LibraryTheme = $($LibraryTheme);

$LibraryTheme.$register(BookSheet);
