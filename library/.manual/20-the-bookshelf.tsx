import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Bookshelf ]]</Title>
        <Paragraph>
            <Brief />
            The theme of a catalogue whose page is a shelf: the bar is the cover, the side bar is the table
            of contents, the open book lies on a desk above the shelf, and every book is a jacket in its own
            six colours.
        </Paragraph>
        <Section>
            <Heading>What it dresses</Heading>
            <Paragraph>
                The bookshelf was designed as one page in HTML, in <Means>$[[ the design book ]]( Dougs Design / The Bookshelf )</Means>,
                and this theme is that page's style carried into the library's words. The page's values are
                its fields: a slate ink and never black, a faint cool tint, one sky accent for the library
                itself, a bar of fifty-two pixels, a side bar of two hundred and thirty-two, a cover of a
                hundred and thirty-two on the shelf and a hundred and eighty-four on the desk, all of it on
                a body of fourteen. Its parts dress what the catalogue draws: the illustrations and the
                marks, the bar, the shelf, the jackets, the desk, the page unfolded to read on, and the page
                in its built view.
            </Paragraph>
            <Paragraph>
                A jacket is the same for every book: three bands of three colours, the name on the band
                above, the drawing on the ground between, the author on the foot, hairlines of white parting
                them as Penguin's did. The colours are the cover's own scheme, read from the cover and set
                where the jacket is drawn, so the theme knows no book by name and a new book brings its
                colours with it. A mark is a window onto the same drawing, at the desk's scale, bordered with
                the drawing's own line.
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
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
    </Chapter>
);
