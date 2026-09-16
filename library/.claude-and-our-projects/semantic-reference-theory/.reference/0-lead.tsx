import { Heading, Italics, Paragraph, Section, Document, Title } from '@dna-platform/public';
import { $Article, Infobox, Line, Fixed } from '../../../..reference/.book';

export default class $Lead extends $Article {
    print() {
        return (
            <Document>
                <Title print={false}>Lead</Title>
                <Infobox>
                    <Heading>Semantic Reference Theory</Heading>
                    <Paragraph>A first-order logic on referents</Paragraph>
                    <Fixed seed={53} width="250" height="250">Fixed Points</Fixed>
                    <Line label="Domain">Referents</Line>
                    <Line label="Semantics">Library semantics</Line>
                    <Line label="Author">Doug</Line>
                    <Line label="Filed under">Claude &amp; Our Projects</Line>
                </Infobox>
                <Section>
                    <Heading>Reference is not travel</Heading>
                    <Paragraph>
                        The theory is a first-order logic whose domain is referents and whose canonical semantic
                        form is <Italics>library semantics</Italics>. The library metaphor came first and brought the
                        theory into existence; the formalism has been much harder to build than the metaphor was to
                        see, which is the usual order of things.
                    </Paragraph>
                    <Paragraph>
                        The clearest thing it has taught me so far is small enough to state in one line. A title
                        already means the thing it titles. Nothing about meaning something requires knowing the way
                        there.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}
