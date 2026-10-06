import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Catalogue ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is the way into every other, so it is laid out as a place to choose from. It stands in
                the frame every book of mine stands in, drawn by <Means>$[[ the base book ]]( Dougs Reference Manual / The Book )</Means>:
                the library's bar black across the top, with my three books as its subjects, each beside a dot
                in its colour and the open one lit by a line in that colour; this book's contents down the
                opal side bar; and the page beside. It has no head of its own, because its cover stands on its
                shelf. The page is always the synopsis and the shelf, and under the shelf the entry that is
                open, if one is. It wears the dark tone, the library's own, which
                is <Means>$[[ the black top bar over the opal side bar ]]( Dougs Design / A Black Top Bar and an Opal Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                The design it follows is <Means>$[[ the shelf ]]( Dougs Design / The Shelf )</Means> inside that
                frame, explored again as <Means>$[[ the library's page ]]( Dougs Design / The Library's Page, in the Frame of 15 )</Means>:
                the covers at two by three in each book's colour, with the spine's lines and the rule across,
                six to a row at a desk and three on a phone, and one line under each. Beside this chapter the
                library's subjects are written once, as three references to the books, each saying its book's
                colour, and every book draws them in its bar.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is on the shelf</Heading>
            <Paragraph>
                The first book on the shelf is this one. The catalogue is filed under what it is about, which is
                itself, so its own cover stands first, in the site's blue-black, and pressing it brings this page
                back: I was just reading about the thing I am on. That is the closure this library has, shown
                rather than avoided.
            </Paragraph>
            <Paragraph>
                After it stand the chapters that each represent a book. The class of this book finds them by
                what they are: a chapter that carries the synopsis of a book other than this one. Its
                specification says every chapter I add has a place. On the shelf such a chapter is drawn as its
                book: the title as a cover, and under it one line, the sentence the entry says
                is <Means>$[[ its caption ]]( ./The Catalogue )</Means>. The rest of the entry — the book's own
                synopsis — is read when the entry is open.
            </Paragraph>
            <Paragraph>
                An entry opens from its row in the contents, which is marked with the book's colour, or from its
                cover. It opens in place: the volume spans the row under the shelf, the cover large, the caption
                over the synopsis, as a concept opens in the design book. The title leads to the book. Anywhere
                else a title refers to its own chapter; in this book, where the chapter carries another book's
                synopsis, it refers to that book, by a class of the framework's reference from a title to
                itself, registered on this book's class, so no chapter has to ask for it. The row's second word,
                an arrow, leads to the book too, and is the reference the library requires a catalogue's table
                to carry for every book filed under it.
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
                The theme is the base's with this book's scheme, which is the site's own — the sea as its
                colour, the deep blue as its accent, the opal as its side bar — and two parts of its own: the
                front, which sets the synopsis plain in the serif at the file's size, and the covers. Each entry
                says <Means>$[[ its book's colour ]]( Dougs Reference Manual / The Colour )</Means>, and the
                cover on the shelf, the dot in the contents and the dot in the library's bar are painted from
                that one saying. The cover and the table of contents are the framework's own, undressed; what
                they look like here is the base's.
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
