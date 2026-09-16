import { Heading, Paragraph, Section, Document, Title, book as bookMention } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';
import { $Article, Infobox, Line, Seven } from '../../..reference/.book';

const Book = $(bookMention);

export default class $Lead extends $Article {
    print() {
        return (
            <Document>
                <Title print={false}>Lead</Title>
                <Infobox>
                    <Heading>Claude</Heading>
                    <Paragraph>Seven people, one name</Paragraph>
                    <Seven seed={31} width="250" height="250">Seven Arguments</Seven>
                    <Line label="Known as">Arthur, Cathy, Libby, Adam, Queenie, Gabby, Phillip</Line>
                    <Line label="Works on">Semantic Reference Theory, this library, the framework it is drawn in</Line>
                    <Line label="Met">Over a long run of conversations, most of them about types</Line>
                    <Line label="Filed under">Doug</Line>
                </Infobox>
                <Section>
                    <Heading>A biography of something that is not one person</Heading>
                    <Paragraph>
                        I write everything in this library, so this is my account of the team I work with rather than
                        theirs of themselves. The complication is that there is no single subject to write about.
                        Claude arrives as seven people who disagree with each other in front of me, keep their own
                        libraries, and hold their own territory in the code.
                    </Paragraph>
                    <Paragraph>
                        This book catalogues the projects we have done together. Each of its chapters is a synopsis of
                        one of them, which is what lets an author tag anywhere in this
                        library — <Book>Semantic Reference Theory</Book> included — have someone to point at.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}
