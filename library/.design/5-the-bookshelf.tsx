import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Bookshelf ]]</Title>
        <Section>
            <Heading>The design phase begins here</Heading>
            <Paragraph>
                What came before this chapter was the sketch phase, and it ended
                in <Means>$[[ Driving the Build ]]( ./Driving the Build )</Means>. From here the designs are made
                together, one page at a time, in HTML, looked at in a browser and changed until they are right;
                the photographs come later. The page beside this chapter is the catalogue's own print — every
                word the print's, the framework's names on every element — under a style of ours, so that what
                is designed is the page as it will be, not a sketch of one.
            </Paragraph>
            <Paragraph>
                The first view designed is the bookshelf: what I come to
                <Means>$[[ the catalogue's page ]]( Dougs Library )</Means> to do, and how it looks when it does
                it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What I decided on the page</Heading>
            <Paragraph>
                The cover carries what the bar shows. A bar that lists the library's books does not scale, not
                every book has access to that list, and it breaks the subjective feel of the library; a book
                may import its library's table if it needs it. So the bar is strictly the cover: the subject's
                mark at the left, which is the subject link and on hover expands to what a press will show; the
                book's mark and title, both self-references; the author at the right. What goes on a cover is
                annotations that store its data, and a custom Cover exposes them as properties.
            </Paragraph>
            <Paragraph>
                Every book wears the same design, the story's: three colours in bands, the third colour its own
                band at the foot, the title centred, an illustration between in the book's ink. The schemes come
                from what each book is — the site's opal and teal for this catalogue, a Field Notes notebook
                for my story, a blueprint for the design book, gunmetal and brass for the manual — pulled toward
                pastel and kept, never redone. The mark in the bar is a window cut from the cover's own drawing,
                not a copy of it, so if one changes the other changes.
            </Paragraph>
            <Paragraph>
                The page opens with this catalogue's own book on the desk. A book pressed on the shelf or in
                the contents comes down onto the desk above the shelf, the shelf untouched; the desk keeps its
                shape, a long entry fades, and read on holds while I browse the contents. The contents open
                the entry; the small triangle after a filed book leads to the book. How this book is built
                turns the page into the manual's view of itself, the one table of contents rendering its other
                kind.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the page fits the library's words</Heading>
            <Paragraph>
                The library's semantics are as universal as the index and page semantics of a website, but they
                have connections that emphasize things differently, and the art of making a library is adapting
                that navigation to whatever view I like. So for every thing on this page I asked which of the
                library's words it is. The bar is the cover, and nothing else. The side bar and the bookshelf are
                two views of one table of contents; the desk is that table's open row showing its book's synopsis,
                with read on to expand it. A row of the table carries three things: its reference to the book, the
                book's cover imported from the book's own cover file, and the book's synopsis imported the same way
                — so the catalogue knows a book's cover because it imported it, and nothing is drawn twice. The
                mark in the bar is the cover's illustration by reference. Read on and the built view are classes
                on the book. The triangle is the row's second reference. Nothing on the page was a seventh word.
            </Paragraph>
            <Paragraph>
                What this takes to build is small: this catalogue as a type of book that places its table's kinds
                in regions; a few annotations — a volume said of a row, holding the imported cover; the synopsis
                said of a row as well as a chapter; an illustration said of a cover; the colour grown to a scheme;
                and a custom cover in <Means>$[[ the manual ]]( Dougs Reference Manual )</Means> that exposes
                what a cover says as properties, so the bar, the volume and the mark read one cover. The cover is
                the book's importable data model: its annotations hold the data, a cover type of my own, referenced
                in the appendix, exposes it, and any part of the book imports the cover rather than the whole book
                to read it. That is a sensible way to share state, and it is how another book's cover enters this
                catalogue — injected by an annotation, as data, so it is no part of what would cause things to
                render. The method —
                the page from the print, a thing changed per round, comparables before invention — is the branch
                library's; the tool that makes a page from a print is <Means>$[[ The Print ]]( ./The Print )</Means>.
            </Paragraph>
        </Section>
        <Append
            identifier="034"
            type=".html"
        >
            ![[ 034.html ]]
        </Append>
    </Chapter>
);
