import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $TheDomain extends $Article {
    print() {
        return (
            <Document>
                <Title>The Domain</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>The cover of Semantic Reference Theory, and the severe one. The theory&rsquo;s domain is referents, and a referent&rsquo;s whole content is what it refers to &mdash; so every one of the hundred and twenty-one cells has a bite taken out of exactly one of its four edges, the edge it names.</Paragraph>
                    <Paragraph>A reader can see which way a cell points before touching anything, and can find the single cell with no bite at all: the one that refers to itself.</Paragraph>
                </Section>
                <Section>
                    <Heading>Pressing a cell asserts an axiom</Heading>
                    <Paragraph>Press a cell and it becomes a fixed point. Its bite closes, and the field re-partitions: every cell now belongs to whichever fixed point its chain reaches first, and a hairline of ink is drawn along every edge where two basins meet. One press, one new closed curve. Two presses, two.</Paragraph>
                    <Paragraph><Bold>The number of regions is the number of things a reader decided were their own content</Bold>, and it is an assertion rather than a fact they were handed. Press a fixed point again and the axiom is retracted: its bite returns and its region is absorbed by whatever it falls into.</Paragraph>
                </Section>
                <Section>
                    <Heading>No ink at rest</Heading>
                    <Paragraph>There is no dark value on the plate until a reader makes one. <Bold>The only ink in the whole library appears solely by a reader&rsquo;s hand</Bold>, which is the piece saying what a proof is.</Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>The naming map is dealt once and never moves. An earlier version let a press <Italics>re-root</Italics> the field, and that was removed for a reason worth keeping: re-rooting is the catalogue&rsquo;s own figure with its hatching turned off, and putting <Italics>this book is filed under itself</Italics> on a different book is decoration wearing somebody else&rsquo;s meaning. The catalogue owns the one. This book owns how many.</Paragraph>
                    <Paragraph>It is also the one cover whose correctness is a claim about mathematics rather than about taste. Should the theory&rsquo;s account of a referent change, the figure becomes wrong in a way no visual review detects.</Paragraph>
                </Section>
                <Comments by="Gabby">
                    <Paragraph>The severe one. A referent&rsquo;s whole content is what it refers to, so there was nothing to draw except the pointing. I resisted making it prettier than that; a cover for a theory should be able to be wrong, and this one can.</Paragraph>
                    <Paragraph>Taking the re-rooting out was the right call even though it was the most satisfying thing the plate did. It belonged to another book.</Paragraph>
                </Comments>
                <Resource>.tsx</Resource>
            </Document>
        );
    }
}
