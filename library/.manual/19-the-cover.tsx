import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Kind>$[[ ./An Annotation ]]</Kind>
        <Title>[[ The Cover ]]</Title>
        <Paragraph>
            <Brief />
            The cover is a book's data model: what it says is said in annotations, this cover type exposes
            each as a property, and any part of the book imports the cover rather than the whole book to
            read it.
        </Paragraph>
        <Section>
            <Heading>What the cover carries</Heading>
            <Paragraph>
                The framework's cover says the book's title, its author and the subject it is filed under,
                and that is what the bar across the top of every page shows. A design that needs more of a
                book says more on its cover, as annotations, so that the cover stays the one place a book
                describes itself. For the bookshelf a cover carries three more things: its scheme — the six
                colours of its jacket, the ground, the band and its ink, the foot and its ink, and the ink
                its drawing is drawn in; its illustration, a drawing kept as a file beside the cover and
                drawn by the cover itself; and its window, where the mark that stands for the book in a bar
                is cut from that drawing. The cover type here exposes them as properties, and its
                specification refuses a cover that lacks one.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How another book's cover reaches a catalogue</Heading>
            <Paragraph>
                A catalogue's chapter that stands for a book already imports that book's own synopsis, and
                the framework's synopsis appends its words. The same chapter holds that book's cover the
                same way, said as a volume: the cover is imported and held as data, and nothing of it is
                appended, so nothing of it draws. The shelf and the desk read the volume's cover and draw
                a jacket from it; the bar reads a cover and draws a mark from it. That is how a page knows
                another book: by importing its cover, never by looking it up, and never by drawing it twice.
            </Paragraph>
            <Paragraph>
                The jacket and the mark are the two things drawn from a cover. A jacket is the cover as a
                reader sees it on the shelf and on the desk: the name on the band, the drawing on the
                ground, the author on the foot, in the scheme's six colours. A mark is a window onto the
                same drawing at the desk's scale, a square with the drawing's own line as its border, so
                that the same drawing is the same everywhere and a change to the file changes every place
                it stands. <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> dresses both.
            </Paragraph>
            <Paragraph>
                The bar's logo is two marks and two names: the subject's mark first, the book's own beside it,
                the book's name in the sans and the library's waiting under it. The pointer on the subject's
                mark folds the book's mark away and brings the library's name up, and holds it while the pointer
                crosses to the name, which is its link. The hold is a field on the logo, said as a class by an
                annotation; how it came to be that is in <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
            <Paragraph>
                The browser's tab wears the same mark. The tool beside this chapter makes the library's icon
                from the catalogue's cover — the drawing's file, the scheme, the window — as the mark the bar
                draws, and writes it into the binding's configuration, so the tab changes when the cover does.
                It is run when the cover changes, before a bind.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="icon"
            type=".mjs"
        >
            ![[ icon.mjs ]]
        </Append>
    </Chapter>
);
