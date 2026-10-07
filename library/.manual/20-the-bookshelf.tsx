import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Kind>$[[ ./A Type of Book ]]</Kind>
        <Title>[[ The Bookshelf ]]</Title>
        <Paragraph>
            <Brief />
            A catalogue whose page is a shelf, and its theme: the bar is the cover, the side bar is the table
            of contents, the open book lies on a desk above the shelf, and every book is a jacket in its own
            six colours.
        </Paragraph>
        <Section>
            <Heading>The catalogue, a type of book</Heading>
            <Paragraph>
                A catalogue is a book whose chapters stand for other books: a chapter that carries another
                book's synopsis, and holds that book's cover as a volume, is one of its books. The class finds
                them by what they carry and draws the regions the base gives every book in its own way — the
                bar as its cover, with the subject's mark first when the book is filed under another and no
                mark when it is filed under itself, as only the library is; the side bar as its table; the
                open leaf as the desk, the jacket large beside the chapter's words, and the shelf of jackets
                after the leaves. Three things are said in it: a caption, of the one line an entry says; an
                arrow, of the word in a row that leads to the book; and unfolded, of the book, by the switch
                that reads on. A title in a catalogue's entry refers to the book it stands for, by a reference
                registered on the class. A library makes its catalogue by saying so in its door, in one line,
                and writing its entries.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the theme dresses</Heading>
            <Paragraph>
                The bookshelf was designed as one page in HTML, in <Means>$[[ the design book ]]( Dougs Design / The Bookshelf )</Means>,
                and this theme is that page's style carried into the library's words. The page's values are
                its fields: a slate ink and never black, a faint cool tint, one sky accent for the library
                itself, a bar of fifty-two pixels, a side bar of two hundred and thirty-two, a cover of a
                hundred and thirty-two on the shelf and a hundred and eighty-four on the desk, all of it on
                a body of fourteen. Its parts dress what the catalogue draws: the illustrations and the
                marks, the lockups in the bar, the shelf, the jackets, the desk, the page unfolded to read
                on, and the page in its built view.
            </Paragraph>
            <Paragraph>
                A jacket is the same for every book: three bands of three colours, the name on the band
                above, the drawing on the ground between, the author on the foot, hairlines of white parting
                them as Penguin's did. The colours are the cover's own scheme, read from the cover and set
                where the jacket is drawn, so the theme knows no book by name and a new book brings its
                colours with it. A mark is a window onto the same drawing, at the desk's scale, bordered with
                the drawing's own line. In the bar the marks and the name stand one gap apart, the same gap
                three times, and resting on the subject's mark unfolds the subject's name in the book's own
                formatting, in the book's place.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The two views</Heading>
            <Paragraph>
                The page has two views and one table of contents. Reading, the contents stand first and the
                page is the desk and the shelf; built, the appendix stands first, the shelf and the desk step
                aside, and the open chapter is shown with its files as the reference manual shows a chapter.
                Which view stands is a class on the book that the layout adds when the open chapter is in
                the appendix, so the toggle between them is a press on a row of the other group. The built
                view borrows the manual's look for now; it is designed properly when the manual is.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
    </Chapter>
);
