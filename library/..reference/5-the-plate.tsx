import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $ThePlate extends $Article {
    print() {
        return (
            <Document>
                <Title>The Plate</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>
                        The painting on this library&rsquo;s own cover and the logo cut from it. High key throughout,
                        the spectrum held at low chroma, no black at any point, flat squares above and hatched patches
                        below.
                    </Paragraph>
                    <Paragraph>
                        <Bold>The figure is the library&rsquo;s own rule, drawn.</Bold> Every book is catalogued by
                        another and exactly one catalogues itself, so every cell points at one neighbour, every chain
                        strictly shortens, and one cell points at itself. The cover is not a picture of the closure. It
                        is the closure.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>What a book gets</Heading>
                    <Paragraph>
                        Seven composable parts, each usable alone. A <Italics>wheel</Italics> is colour. A{' '}
                        <Italics>field</Italics> is geometry. A <Italics>stroke</Italics> is one mark. A{' '}
                        <Italics>painting</Italics> is the marks in order. A <Italics>brush</Italics> is what is in hand
                        and where. A <Italics>colouring</Italics> is a wheel and a field together, answering what a
                        cell looks like. A <Italics>keep</Italics> is where a painting is stored. The component holds
                        three pieces of state and four handlers and asks the seven for everything else.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The wheel</Heading>
                    <Paragraph>
                        Sampled from the canvas and closed into a cycle, so stepping off the end lands back at the
                        beginning. The interpolation keeps chroma even between stops rather than letting the midpoints
                        go grey.
                    </Paragraph>
                    <Paragraph>
                        <Bold>A colour may never be walked off either end.</Bold> The canvas has no white and no black,
                        so no amount of painting can ruin a plate however long it is worked. That is a guarantee about
                        the wheel, not a habit of the painter.
                    </Paragraph>
                    <Paragraph>
                        The library&rsquo;s own books sit in the cool quarter and the books about the team in the warm
                        one, so a reader who never reads a word can tell from across the room which kind of book they
                        are holding.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The field</Heading>
                    <Paragraph>
                        <Bold>The same plate every time it is drawn.</Bold> A page is written out by the binder and
                        drawn again in the browser, and the two must agree exactly &mdash; so the arrangement is a hash
                        of the seed and the position, never a random number. A plate is dealt, not rolled.
                    </Paragraph>
                    <Paragraph>
                        Stripes run along the flow, and the angle of a repeating gradient is the direction the colour
                        changes in &mdash; across the bands rather than along them &mdash; so it is turned a quarter.
                        There are enough directions that a stroke is visibly its own and few enough that the plate
                        reads as one surface.
                    </Paragraph>
                    <Paragraph>
                        The one cell that files itself is placed off centre, because a library&rsquo;s summit is not
                        the middle of anything; it is the book that happens to be about its keeper. Every other step
                        lands strictly closer to it, so no chain can cycle and every chain must arrive.{' '}
                        <Bold>The closure is a property of the method, not a hope about the data.</Bold>
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>A mark</Heading>
                    <Paragraph>
                        A stroke is a ruled segment, and three shapes are ruled out. A true diagonal pinches to a point
                        at every join and reads as a dotted line. An elbow is two sides of a rectangle and reads as
                        plumbing. What remains is a staircase: single steps, each sharing a full edge with the last.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>How it is used</Heading>
                    <Paragraph>
                        A cover writes one tag carrying a seed. The same code draws the cover a reader may paint on and
                        the masthead logo, which is the same plate with the hand removed, and the logo is a link to
                        the plate it is cut from, by a mention the compiler addresses. Only the library&rsquo;s own
                        summit retains what a reader leaves on it; the remaining covers hold no state, because a
                        catalogue of everything its keeper keeps is the one page where what a reader leaves should be
                        kept.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>
                        <Bold>The rule establishing correctness is in none of the seven parts.</Bold> A preview lives in
                        a brush; the store receives only a painting; exactly two call sites write to it. That is a
                        property of how the component uses those parts, not of the parts themselves, so a reader
                        studying the seven alone will understand a plate that could still persist a hover.
                    </Paragraph>
                    <Paragraph>
                        This is the case for which this manual exists. Code divided into parts cannot state the rules
                        holding between them, and those rules have nowhere to reside but a chapter.
                    </Paragraph>
                </Section>
                <Comments by="Gabby">
                    <Paragraph>
                        This is the one piece of art in the library that is about the library. I did not want a cover
                        that illustrated the closure rule; I wanted one that was it, dealt from a seed and repainted
                        every time you open it.
                    </Paragraph>
                    <Paragraph>
                        The three shapes I ruled out cost me the most time and are the reason it reads as a surface
                        rather than a diagram. A diagonal looks like a dotted line and an elbow looks like plumbing.
                        Stairs were the only thing left, and they turned out to be right.
                    </Paragraph>
                </Comments>
                <Resource>.tsx</Resource>
            </Document>
        );
    }
}
