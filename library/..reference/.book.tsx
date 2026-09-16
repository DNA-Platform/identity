import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { Appearance } from '@dna-platform/public/application';
import { $Encyclopedia } from '@dna-platform/public/encyclopedia';

// THE LIBRARY CATALOGUE, AND THE BASE EVERY OTHER BOOK HERE IS WRITTEN WITH. Nothing stands at the
// library's root — Doug, 2026-09-15: "there is no root .book.tsx, that is ..dougs-library" — so the
// one book that catalogues the whole library is also what the rest extend.
//
// THIS FILE IS A DOOR, and that is the whole of its job. Everything this library adds lives in a
// file of its own beside it — the way the framework keeps one kind per file — and is re-exported
// from here, so a chapter imports from ONE place and never has to know which file a thing came from.
// It reached seven hundred lines holding four unrelated things at once, and Doug's note was the
// right one: "reorganize, refactor and improve your code… follow the patterns of the library."
//
//   plate.tsx      the painting on the catalogue's own cover, and the logo cut from it
//   chart.tsx      the chart and its track on the log
//   seven.tsx      the table of seven arguments on Claude's biography
//   fixed.tsx      the domain of referents on the theory
//   rubric.tsx     the rubricated transcript on the conversation
//   apparatus.tsx  the strip across the top and the tab row, both of them writing
//   theme.tsx      the sheet this library is drawn in
//
// FIVE COVERS, NOT ONE PICTURE FIVE TIMES — Doug, 2026-09-15: "You have four books that need art.
// Do not couple them. Make a separate piece of unique art for each one." So each is its own piece
// with its own palette, its own grain and its own way of answering a hand, and none of them shares
// a line of code with any other. What they share is an idea: a cover here is a FIELD you move in
// rather than an object you look at, held high-key with no black anywhere, and it says nothing
// about itself — the caption is a name and never an explanation.
//
// AND ONLY THE CATALOGUE REMEMBERS. Doug: "The others don't need to be stateful… the art as
// mechanism of making art should not be overdone." A catalogue of everything its keeper keeps is
// the one page where what a reader leaves should be kept, and it is the only one you can mark.
//
// THE TYPES THIS LIBRARY DECLARES ITSELF BY. A type files itself under its name when its module
// loads, so they are brought in here, where every book that extends this one loads them with it.
export { Autobiography, Biography, Catalogues } from '@dna-platform/public/library';

// A CHAPTER OF PROSE IS AN ARTICLE. The encyclopedia lays a page out in three columns and puts the
// chapters carrying this type in the middle one; a chapter carrying only $TypeOfChapter is apparatus
// — a cover, a table of contents, a footer — and stands where it was written. Measured 2026-09-15:
// every chapter here was a plain $Chapter, so every page's prose fell into the contents column and
// the whole middle of the page was white. Chapters here extend this.
export { $Article } from '@dna-platform/public/encyclopedia';

// THE INFOBOX, WHICH IS WHERE A PLATE BELONGS. Turing's portrait is 250 across inside one of these,
// floated right at the top of the lead. The encyclopedia already styles a picture and its caption
// inside an infobox, so a plate written here asks for nothing a photograph would not.
export { Infobox, Line } from '@dna-platform/public/encyclopedia';

export * from './plate';
export * from './chart';
export * from './seven';
export * from './fixed';
export * from './rubric';
export * from './apparatus';
export * from './theme';

export default class $DougsLibrary extends $Encyclopedia {
    // THE RIGHT RAIL. An appearance panel is what the sheet puts in the third column; the encyclopedia
    // asks a book for its header and the wiki's own article answers with exactly this.
    override header(): ReactNode {
        const Panel = $(Appearance);

        return <Panel />;
    }
}

export const DougsLibrary = $($DougsLibrary);
