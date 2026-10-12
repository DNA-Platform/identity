import { Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Answer, Decision, Pain, Question, Solution } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>The story</Part>
        <Title>[[ The journal, in five rounds ]]</Title>
        <Section>
            <Heading>What I come to my story for</Heading>
            <Paragraph>
                My story is the last type of book in this library, and the first that is read rather than
                browsed. I had chosen its design by number in <Means>$[[ Choosing by number ]]( ./Choosing by number )</Means>,
                the sheet of 25 in the frame, and it had been built from that sketch before any page was designed
                from its print. So it had never had the pass the other three books had: a page made from its own
                print, rounds on that page, and a port measured against it. This is that pass, on the fourth page
                designed from a print, <Means>$[[ The Story's Page ]]( ./The Story's Page )</Means>.
            </Paragraph>
            <Paragraph>
                <Question />
                What should a book that is read like a book look like here, in the clean theme the other three
                wear, and what is the type of book called?
            </Paragraph>
            <Paragraph>
                <Answer />
                We want our books to look a bit more like books when they are stories. It needs to fit in with
                the clean theme. We need strong semantic names for the thing we are creating, like we have
                Reference Manual, Portfolio and Bookshelf. And a plan to write it as well: we can reorganize what
                is on there now, it does not need to be rewritten that much, but we want to organize it so that
                it can be scaled into the future.
            </Paragraph>
            <Paragraph>
                <Decision />
                A fourth type of book in the reference manual, the Journal: dated entries, read newest first. Its
                look is Typeset. My story extends it in one line, and keeps no appendix, since nothing of its old
                sheet is its own.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What I decided on the journal's page, in order</Heading>
            <Paragraph>
                The first round was the sheet as built, carried into the clean frame with each chapter's date
                at the right of its row. I said we needed to completely redesign this. Asked which page it should
                read like, I said that this is why we design: you have to explore these, and asking me to imagine
                is wasting my time.
            </Paragraph>
            <Paragraph>
                <Pain />
                The second round explored four comparables, a printed book's page, a reading app, a long-form
                essay and a dated journal, each as its own page. Too much html. Give me options to move between
                them.
            </Paragraph>
            <Paragraph>
                <Solution />
                One page, with the four ways of reading at a switch. The html is a mockup tool: we use it to
                prototype rapidly, and a sketch is quick. And a design's sketches live beside the chapter that
                designs it, never in a chapter that holds everything, because an everything chapter breaks the
                idea of the book. Everything would need to be a view on all the chapters, not a new one.
            </Paragraph>
            <Paragraph>
                The third round took the cream out. Every way used the story's own amber, read into the wash and
                the lit row, and I don't like yellowed paper. We are white themed, with subtle and interesting
                colour gradients and drop shadows. The page went white with the story's foot colour, its
                fountain-pen blue, as the one accent, and a second switch for the tint, pen, sky or slate. The
                fourth round took the last warmth out of the writing surface, which still looked yellow beside
                the side bar.
            </Paragraph>
            <Paragraph>
                <Decision />
                Journal, in pen. Every entry on one page, newest first, its number pale and large in a gutter
                above its date, the contents newest first at a press with each row dated. The fifth round made
                the rows the bookshelf's, a dot with a white ring and the lit row's stroke, and added the richness
                at the edge of perception: a gradient on the lit row with a line of light along its top, lines
                between entries that fade at their ends, a halo on the date's dot, and a radial lift of the blue
                at the page's corner.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the journal fits the library's words</Heading>
            <Paragraph>
                The bar is the cover and the side bar is the table of contents, as every book's. The entries are
                the chapters, each dated and saying its month as its part, so a new entry is one file. Newest
                first is a thing said of the book by a press. The number and the date in the gutter are the
                chapter's own, placed by the theme. Nothing on the page was a new word; the Journal lays the
                words out and Typeset dresses them, both in <Means>$[[ The Journal ]]( Dougs Reference Manual / The Journal )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
