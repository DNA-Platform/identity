import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Bars ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is the way into every other, so it is laid out as a place to choose from. It stands in
                the frame every book of mine stands in, drawn by <Means>$[[ the base book ]]( Dougs Reference Manual / The Book )</Means>:
                the library's bar across the top, with my three books as its subjects, this book's contents at
                the left, its name and <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means> at
                the head, and beside them one page: the synopsis and a shelf when no chapter is open, and
                otherwise the open chapter. It wears the dark tone, the library's own.
            </Paragraph>
            <Paragraph>
                The design it follows is <Means>$[[ the shelf ]]( Dougs Design / The Shelf )</Means> inside the
                frame: the covers at two by three in each book's colour, with the spine's lines and the rule
                across, six to a row at a desk and three on a phone. Beside this chapter the library's subjects
                are written once, as three references to the books, and every book draws them in its bar.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is on the shelf</Heading>
            <Paragraph>
                The shelf holds the chapters that each represent a book. The class of this book finds them by what
                they are: a chapter that carries the synopsis of a book other than this one. Its specification
                says every chapter I add has a place.
            </Paragraph>
            <Paragraph>
                On the shelf such a chapter is drawn as its book: the title as a cover, and its words under it.
                The title leads to the book. Anywhere else a title refers to its
                own chapter. In this book, where the chapter carries another book's synopsis, it refers to that
                book. That link is a class of the framework's reference from a title to itself, registered
                on this book's class, so no chapter has to ask for it.
            </Paragraph>
            <Paragraph>
                The shelf is one view of those chapters, and the views I chose for this book are three: the
                shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a
                time, because a view that is said takes the one said before it away. That is how the framework
                keeps a book to one theme, done here for views. The class says the shelf; the other two are not
                drawn yet.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How it is dressed</Heading>
            <Paragraph>
                The theme is the library's, with this book's colours and its own parts: the front page and the
                covers. Each chapter that stands for a book says <Means>$[[ the book's colour ]]( Dougs Reference Manual / The Colour )</Means>,
                and the cover on the shelf is painted in it. The cover and the table of contents are this book's
                own, each the framework's with a look, and the cover file and the table file take them from here.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="booklink"
            type=".tsx"
        >
            ![[ booklink.tsx ]]
        </Append>
        <Append
            identifier="views"
            type=".tsx"
        >
            ![[ views.tsx ]]
        </Append>
        <Append
            identifier="faces"
            type=".tsx"
        >
            ![[ faces.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="subjects"
            type=".tsx"
        >
            ![[ subjects.tsx ]]
        </Append>
    </Chapter>
);
