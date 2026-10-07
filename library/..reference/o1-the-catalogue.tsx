import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Catalogue ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is the way into every other, so it is laid out as a place to choose from: the
                bookshelf, designed as one page in <Means>$[[ the design book ]]( Dougs Design / The Bookshelf )</Means> and
                carried into the library's words as <Means>$[[ the Bookshelf ]]( Dougs Reference Manual / The Bookshelf )</Means> in
                the manual — a type of book, a catalogue, with its theme. This book's own door says one
                thing, that the library is a catalogue, and holds nothing else; what is beside this chapter is
                the one file this library writes for itself, its subjects, which the bars of the other books
                still draw until their own designs come.
            </Paragraph>
            <Paragraph>
                The bar across the top is the cover and nothing else: my own mark and my name, and my author
                at the right with the mark of his book. A book filed under another would show its subject's
                mark first, unfolding to the subject's name in place of the book's own; this catalogue is
                filed under itself, the one book that can be, so the catalogue draws no subject's mark for it.
                The contents stand down the side, each row with a dot in its book's colour and a triangle
                after it that leads to the book. The page is the desk and the shelf: the open book lies large
                on the desk above, and the shelf below stays as it is while books are picked from it.
            </Paragraph>
            <Paragraph>
                When nothing is open, the catalogue's own book is on the desk — I am reading about the thing I
                am on, which is the closure this library has, shown rather than avoided. A book pressed on the
                shelf or in the contents comes down onto the desk in its place. The desk keeps its shape: the
                words stand as tall as the jacket, a long entry fades at the foot, and read on is a thing said
                of the book that lets the desk take the shelf's place, and holds while other books are picked.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is on the shelf</Heading>
            <Paragraph>
                The first book on the shelf is this one, and after it stand the chapters that each stand for a
                book filed here. The catalogue finds them by what they are: a chapter that carries the synopsis
                of a book other than this one. Each such chapter also holds that book's cover, imported and
                said as a volume, so the catalogue knows a book's jacket because the book's own cover says
                it — <Means>$[[ the cover ]]( Dougs Reference Manual / The Cover )</Means> is the book's data
                model, and nothing of the held cover is drawn as writing. On the shelf the chapter is drawn as
                its jacket with the book's name under it, and the name opens the entry on the desk; on the desk
                the jacket stands large beside the chapter's words — the sentence the entry says is <Means>$[[ its caption ]]( ./The Catalogue )</Means>,
                then the book's own synopsis — with the way to the book under them.
            </Paragraph>
            <Paragraph>
                Anywhere else a title refers to its own chapter; in a catalogue, where a chapter carries
                another book's synopsis, its title refers to that book, by a class of the framework's
                reference from a title to itself, registered on the catalogue's class. The row's second word,
                the triangle, leads to the book too, and is the reference the library requires a catalogue's
                table to carry for every book filed under it.
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
