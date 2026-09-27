import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $TheChapterMark extends $Article {
    print() {
        return (
            <Document>
                <Title>The Chapter Mark</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>A chapter&rsquo;s number drawn as a four by four figure taken from its prime factorisation. Sixteen values come back, read row by row from the top left, one meaning the light colour.</Paragraph>
                </Section>
                <Section>
                    <Heading>How a number chooses its figure</Heading>
                    <Paragraph>The count of <Italics>distinct</Italics> primes dividing the number chooses its symmetry, so a whole family of chapters shares one posture. A perfect square is balanced. A prime stands upright. A repeated prime factor lies flat. A number built from two or more different primes each taken once leans &mdash; right when it is even, left when it is odd.</Paragraph>
                    <Paragraph>The number&rsquo;s largest prime, taken against four, then says how much of the square is light, and its position among the chapters sharing both picks one figure off the shelf those chapters draw from. Everything is integer arithmetic on the number alone, which is why a server and a browser draw the same chapter.</Paragraph>
                </Section>
                <Section>
                    <Heading>What was measured</Heading>
                    <Paragraph>Over the first sixty-four numbers, by walking every figure and re-deriving each property from its cells: <Bold>every one has an exact symmetry, every one is a single connected light region, and every one is distinct.</Bold> The light count runs nine to twelve of sixteen, so a figure is always more object than ground.</Paragraph>
                    <Paragraph>Past sixty-four they must begin to repeat. The first pair of chapters that could share a plate of nine and sit one cell apart is eighty-five and ninety-three, which is a long way down a log.</Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>None are known. It is the smallest subject in this manual and the only one with no state, no drawing and no dependency on anything else in the library.</Paragraph>
                </Section>
                <Comments by="Gabby">
                    <Paragraph>A numeral tells you where you are and nothing else. This tells you something true about the number itself, and I like that a reader can learn to read it without being taught. It is the smallest thing I have made here and the one I would defend longest.</Paragraph>
                </Comments>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
