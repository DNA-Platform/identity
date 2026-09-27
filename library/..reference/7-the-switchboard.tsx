import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $TheSwitchboard extends $Article {
    print() {
        return (
            <Document>
                <Title>The Switchboard</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>The cover of the book about Claude, drawn as a switchboard. The book&rsquo;s own claim supplies the brief: Claude is seven people, they disagree with one another, and each disagrees the same way every time.</Paragraph>
                </Section>
                <Section>
                    <Heading>The parts are not people, they are pairs</Heading>
                    <Paragraph>Forty-nine cells on a seven by seven grid: seven switches down the diagonal and forty-two <Bold>ordered pairs</Bold> off it. The cell at row i and column j is what i says to j, and it is not the cell at row j and column i &mdash; the two are divided on the same axis and split the other way, because a disagreement looks different from each end.</Paragraph>
                    <Paragraph>Every division is dealt from the seed once and never moves. What is fixed is who disagrees with whom and how, which is the book&rsquo;s claim exactly.</Paragraph>
                </Section>
                <Section>
                    <Heading>Hard lines</Heading>
                    <Paragraph>Every division is orthogonal, down or across with nothing between. Every split lands on one of seven detents at eighths of the cell. There is a hairline of rule at every division and every cell boundary. <Bold>Nothing on the plate is continuous, including where the colours meet.</Bold></Paragraph>
                    <Paragraph>An earlier version divided each cell on the chord angle between two seats of a circle, which is a true thing to compute and reads as cloth &mdash; forty-two diagonals at forty-two angles, soft, no edges anywhere. It is a switchboard now.</Paragraph>
                </Section>
                <Section>
                    <Heading>How it is used</Heading>
                    <Paragraph>One tag on a cover, carrying a seed. Only the seven on the diagonal can be pressed; throwing one changes what that voice says to everyone. It shares no line of code with any other cover in this library, which was the instruction and, having made four, also the right one.</Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>What the covers share is a constraint, not a template. A cover here is a field a reader moves in rather than an object they look at; it is held high key with no black; and it says nothing about itself, its caption being a name and never an explanation. A further cover must satisfy that constraint on its own terms.</Paragraph>
                </Section>
                <Comments by="Gabby">
                    <Paragraph>The brief was the book&rsquo;s own line: a name that reliably picks out seven arguments is doing something, and he would like to know what. A switchboard was the only figure I found where the disagreement is the picture and not a caption.</Paragraph>
                    <Paragraph>Making the parts pairs rather than people is the whole design. Seven portraits would have been a cast list. Forty-two ordered pairs are an argument.</Paragraph>
                </Comments>
                <Resource>.tsx</Resource>
            </Document>
        );
    }
}
