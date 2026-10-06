import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Two Bars ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is the way into every other, so it is laid out as a place to choose from. Across the top
                are two bars. The first is the library's: what this book is filed under, and me. The second is this
                book's: its cover, and <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means>.
                Under the bars the table of contents is kept at the left. Beside it is one page: the synopsis and
                a shelf when no chapter is open, and otherwise the open chapter.
            </Paragraph>
            <Paragraph>
                The two bars are the arrangement said of the book. The design it follows
                is <Means>$[[ the shelf ]]( Dougs Design / The Shelf )</Means> under <Means>$[[ the black and the sky ]]( Dougs Design / Two Top Bars: Black, then Sky )</Means>.
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
                The title is the book's shelfmark: it leads to the book. Anywhere else a title refers to its
                own chapter. In this book, where the chapter carries another book's synopsis, it refers to that
                book. The shelfmark is a class of the framework's reference from a title to itself, registered
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
                The theme is the library's, with this book's colors and its own parts: the two bars, the contents at
                the left, the front page and the covers. The cover and the table of contents are this book's own.
                Each is the framework's with a look, and the cover file and the table file take them from here.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="shelfmark"
            type=".tsx"
        >
            ![[ shelfmark.tsx ]]
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
    </Chapter>
);
