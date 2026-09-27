import { ReactNode } from 'react';
import { $, $Block, $check, select, styled } from '@dna-platform/chemistry';
import { Appearance } from '@dna-platform/public/application';
import { $Aside$, $Aside, $TypeOfAside, AsideSpecification, $Format, $Writing, Heading, Specification } from '@dna-platform/public';
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

export * from './5-the-plate.tsx.tsx';
export * from './6-the-ledger.tsx.tsx';
export * from './7-the-switchboard.tsx.tsx';
export * from './8-the-domain.tsx.tsx';
export * from './3-the-masthead.tsx.tsx';
export * from './2-the-sheet.tsx.tsx';

export default class $DougsLibrary extends $Encyclopedia {
    // THE RIGHT RAIL. An appearance panel is what the sheet puts in the third column; the encyclopedia
    // asks a book for its header and the wiki's own article answers with exactly this.
    override header(): ReactNode {
        const Panel = $(Appearance);

        return <Panel />;
    }
}

export const DougsLibrary = $($DougsLibrary);

// A LIBRARY CARRIES AN IDENTITY, AND SO DOES THE TEAM THAT BUILT IT. Doug, 2026-09-16, granting
// it: "say that you can speak as me… and allow them to speak about the solution they came up
// with, and then you can speak as yourselves, making it clear that I am granting you permission
// to annotate things with Team." So a chapter of this library is written in his hand, and the
// person who made the thing it documents says so under their own name, here.

// ─── COMMENTS FROM THE AUTHOR ─────────────────────────────────────────────────────────────────────
//
// Doug, 2026-09-16: "as you write the importer, you will maintain documentation in narrative form in
// the library. In this case, annotate it from me like: Comments from the Author: — and then you can
// use your team names in those sections. Just have a standard way to handle that."
//
// THIS IS THAT STANDARD WAY, and it exists because this book has two voices in it. The chapters are
// Doug's — his library, his narrative, first person. The code the chapters document was written by
// somebody on the team, and when that person needs to say something about it they say it HERE,
// under their own name, without the chapter changing voice mid-paragraph.
//
// IT IS A COMPONENT, which is a wrapper associating a formatter with a selection of parts — his own
// definition. The name is a prop, because a name is a label and not content; everything else is
// written inside it and the format styles it, so a comment can hold a list, a quote or a second
// paragraph without this file learning about any of them.
//
// IT STANDS BETWEEN SECTIONS, NOT INSIDE ONE. An aside is section-grade, and a section-grade writing
// standing inside a section is on the same rung — the parse treats it as prose and makes it into a
// paragraph, so it would keep its words and lose its kind. Written at the document's own level it is
// the level beneath and is kept whole. That is a fact about where it goes, and the chapters obey it.
//
// `$Comments` and `$by` ARE PROXY NAMES, flagged for Doug.
export interface $Comments$ extends $Aside$ { }

export class $Comments extends $Aside implements $Comments$ {
    $by = '';

    // A COMMENT SAYS WHOSE IT IS BEFORE IT SAYS ANYTHING. The heading is built in the bond and
    // concatenated, so it is in the block by the time anything reads it and a specification can see
    // it — the same seam $Title and the library's own strip already use.
    $Comments(block: $Block) {
        super.$Aside((block ?? new $Block()).concat(
            $<$Writing>(<Heading>{`Comments from ${this.$by === '' ? 'the Author' : this.$by}`}</Heading>),
        ).concat($check(commentsStyle, '!')));
    }
}

export class $TypeOfComments extends $TypeOfAside {
    protected override specification: Specification<$Writing> = new CommentsSpecification();
}

export class CommentsSpecification extends AsideSpecification {
}

// THE FORMAT. Every value is read off the theme, so a comment is drawn in whatever dress the page
// above it is wearing — quieter than the prose it sits beside, and set in from it, the way a note in
// a margin is set in from the text it is about.
export class $CommentsFormat extends $Format {
    override selector: any = styled.aside;
    display = 'block';
    margin = '1.5em 0';
    padding = '0.8em 1em';
    fontSize = '0.94em';
    get background() { return this.theme.quiet; }
    get borderLeft() { return `3px solid ${this.theme.shade}`; }

    @select('> .pd-heading') said_display = 'block';
    said_margin = '0 0 0.4em';
    said_padding = '0';
    said_border = 'none';
    said_fontSize = '0.9em';
    said_fontWeight = '700';
    said_letterSpacing = '0.02em';
    get said_color() { return this.theme.pale; }
    get said_fontFamily() { return this.theme.body; }

    @select('> .pd-paragraph:last-child') last_marginBottom = '0';
}

export const Comments = $($Comments);
export const TypeOfComments = $($TypeOfComments);
export const CommentsFormat = $($CommentsFormat);
const commentsStyle = CommentsFormat;
