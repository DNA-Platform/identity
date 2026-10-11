import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Design, Desk, Exhibit, Phone, Thumbnail, Volume } from '../.manual/.book';
import LibraryCover from '../..reference/.cover.tsx';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Design>$[[ Dougs Library ]]</Design>
        <Volume>{LibraryCover()}</Volume>
        <Title>[[ The Bookshelf ]]</Title>
        <Section>
            <Heading>The catalogue, as built</Heading>
            <Paragraph>
                <Exhibit />
                <Image>![[ built-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The library catalogue's page, designed from its print in one evening and carried into the library the same
                day; how it was decided is <Means>$[[ the story ]]( ./The bookshelf, in an evening )</Means>, and what
                is built is below.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Built from the page</Heading>
            <Paragraph>
                The same day the page was decided it was carried into the library, through the words above and
                nothing else: the cover type and what a cover carries in <Means>$[[ The Cover ]]( Dougs Reference Manual / The Cover )</Means>,
                the theme in <Means>$[[ The Bookshelf ]]( Dougs Reference Manual / The Bookshelf )</Means>, and
                the catalogue drawing its regions. Every book's cover now says its scheme, its window and its
                illustration, the illustration a file beside the cover, and the catalogue's entries each hold
                their book's cover as a volume. This is the built page with the catalogue's own book on the
                desk, in the page's fonts.
            </Paragraph>
            <Paragraph>
                <Image>![[ built-open.png ]]</Image>
            </Paragraph>
            <Paragraph>
                My story pressed, on the desk above the untouched shelf, its row lit in its own band. The way to
                the book stands under the words rather than inside them, because inside them the fade swallowed
                it; and the line that says by whom and under which subject comes after an entry's words, because
                a chapter is drawn whole and its title cannot be parted from its paragraphs.
            </Paragraph>
            <Paragraph>
                <Image>![[ built-unfolded.png ]]</Image>
            </Paragraph>
            <Paragraph>
                Read on: the shelf steps aside, the words run full, the press moves to the top. It is a thing
                said of the book by a switch, and the switch still says read on when the shelf is away; the
                page said the shelf then, and that word is a small thing still owed.
            </Paragraph>
            <Paragraph>
                <Image>![[ built-view.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The built view: the appendix first in the contents, the chapter that says how this book is
                built shown with its files in the manual's look. It is the spread, the manual's own view, said of that
                chapter, read as <Means>$[[ The Manual's Page ]]( ./The Manual's Page )</Means> decided it,
                with the shelf and the desk stepping aside while it is open and a press on a row of the other
                group the way back.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Three changes on seeing it built</Heading>
            <Paragraph>
                A book filed under itself, which only the library can be, draws no subject's mark: its own
                mark and name are the whole logo. On any other book the subject's mark stands first, and
                resting on it unfolds the subject's name in the book's own formatting, in the book's place,
                the book's logo stepping aside; the marks and the name stand one gap apart, the same gap
                three times. And the mark cut from my story's drawing was a poor crop, a page corner and some
                lines; a mark wants a coherent, geometrically memorable segment of the drawing. Four windows
                on it, each at four times its size, with the library's mark first for comparison:
            </Paragraph>
            <Paragraph>
                <Image>![[ mark-library.png ]]</Image>
                <Image>![[ mark-a.png ]]</Image>
                <Image>![[ mark-b.png ]]</Image>
                <Image>![[ mark-c.png ]]</Image>
                <Image>![[ mark-d.png ]]</Image>
            </Paragraph>
            <Paragraph>
                In order: the nib on a ruled line, the pen crossing the gutter between the two pages, the old
                crop, and the ruled page with the nib at its corner. The nib is the one set, as the window
                at −54, −33 on the story's cover; the window is a thing said of the cover, two numbers, so
                another choice is two numbers changed.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The card, on reading it bound</Heading>
            <Paragraph>
                Three days later I read the bound page and said what the card had strayed into. Remove the
                label above the words entirely. Remove the terminology filed under: this is a library, and that
                is the subject; filed is not semantically right. Make my name a live link on the book, and the
                title of the book a live link too, and have it go to the book. Remove that tiny little arrow
                and use the arrow we use in the table of contents, the triangle. The collapsed state of the
                writing is to be thinner and always the same height; it was too big, and it was hard to click
                the books below. The content area uses very little space: widen it, maintain mobile, but make
                desktop fill more of the space. And on the catalogue's own desk, no by Doug and no subject
                Library: the subject of a catalogue is the catalogue itself, and we do not need to represent the
                whole cover. And on seeing that: the read button should be flush with the bottom of the book;
                increase the text visible before it fades; and do not say this catalogue on the button, either
                hide it or give it the name of the book, a regular button with a regular book name, since it is
                the only self-catalogued book in the library and people will get the joke.
            </Paragraph>
            <Paragraph>
                So the card is this, and the photographs above are of it. Under the jacket's height in every
                state but read on and the phone, its rows the words, the line and the way in, the words fading
                at the foot where they run long. The line says subject, never filed under, and the title, my
                name and the subject's name are each a link to its book, underlined on hover. The way in ends
                in the contents' triangle and stands on the jacket's foot, the last row of the card, whether or
                not a line stands above it; the words fade over a space and a half, not three. The words run to
                seventy-two characters on a desk. And the catalogue's own desk draws its title and its words
                alone, with Read Dougs Library and read on beneath them. Where it is: the desk in <Means>$[[ The Bookshelf ]]( Dougs Reference Manual / The Bookshelf )</Means>,
                the line in <Means>$[[ The Author and the Subject ]]( Dougs Reference Manual / The Author and the Subject )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Designed on page 034</Heading>
            <Paragraph>
                <Desk />
                <Image>![[ 034-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 034-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 034-small.png ]]</Image>
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
