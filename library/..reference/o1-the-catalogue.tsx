import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Catalogue ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is the way into every other, so it is laid out as a place to choose from: the
                bookshelf, designed as one page in <Means>$[[ the design book ]]( Dougs Design / The Bookshelf )</Means> and
                carried into the library as <Means>$[[ the Bookshelf ]]( Dougs Reference Manual / The Bookshelf )</Means> —
                a catalogue, a type of book, with its theme. This book's own door says one thing, that the
                library is a catalogue; beside this chapter stands the one file it writes for itself, its
                subjects, which the other books' bars draw until their own designs come.
            </Paragraph>
            <Paragraph>
                The bar is the cover and nothing else: my mark and my name, and my author at the right with
                the mark of his book. A book filed under another would show its subject's mark first; this
                catalogue is filed under itself, the one book that can be. The contents stand down the side,
                a dot in each book's colour and a triangle that leads to the book. The page is the desk and
                the shelf: when nothing is open the catalogue's own book is on the desk, and a book pressed on
                the shelf or in the contents comes down onto it in its place. The desk keeps its shape, a long
                entry fades, and read on lets the desk take the shelf's place while other books are picked.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is on the shelf</Heading>
            <Paragraph>
                Every chapter after the table stands for a book filed here: it carries that book's synopsis,
                imported from the book, and holds the book's cover as a volume, so the catalogue knows a
                jacket because the book's own cover says it — <Means>$[[ the cover ]]( Dougs Reference Manual / The Cover )</Means> is
                a book's data model. On the shelf the chapter is its jacket with the name under it; on the
                desk the jacket stands large beside the one line the entry says, <Means>$[[ its caption ]]( ./The Catalogue )</Means>,
                the book's synopsis, by whom and where it is filed, and the way into the book. A title in such
                a chapter refers to the book it stands for, and the triangle in its row is the reference the
                library requires a catalogue to carry for every book filed under it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The two views</Heading>
            <Paragraph>
                The page has two views and one table of contents. Reading, the contents stand first and the
                page is the desk and the shelf. Built, which is where this chapter is read, the group that says
                how this book is built stands first, the shelf and the desk step aside, and the open chapter is
                shown with its files as the reference manual shows a chapter. Which view stands is a class the
                layout puts on the book when the open chapter is in the appendix, so a press on a row of the
                other group is the toggle between them.
            </Paragraph>
        </Section>
        <Append
            identifier="subjects"
            type=".tsx"
        >
            ![[ subjects.tsx ]]
        </Append>
    </Chapter>
);
