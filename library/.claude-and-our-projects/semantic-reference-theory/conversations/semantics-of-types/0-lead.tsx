import { Bold, Document, Heading, Italics, Paragraph, Section, Subject, Title } from '@dna-platform/public';
import { $Article, Line } from '../../../../..reference/.book';
import { About } from '../../../.reference/.book';
import { Participant } from '@dna-platform/public/conversation';

export default class $Lead extends $Article {
    print() {
        return (
            <Document>
                <Title print={false}>Lead</Title>
                <About>
                    <Heading>Semantics of Types &amp; More</Heading>
                    <Paragraph>A conversation, becoming a book</Paragraph>
                    <Line label="Held">Over two days in September 2026</Line>
                    <Line label="Length">100 messages in eight movements</Line>
                    <Line label="Between">
                        <Participant>[Doug](MY Library Log)</Participant>
                        <Participant>[Claude](Claude &amp; Our Projects)</Participant>
                    </Line>
                    <Line label="Filed under"><Subject>Semantic Reference Theory</Subject></Line>
                </About>
                <Section>
                    <Heading>What a type is and what a name resolves to</Heading>
                    <Paragraph>
                        This one began as a conversation and became a book without anyone deciding it should, which is
                        the reason I am porting the rest of them in too. We librarians take reference very seriously,
                        and my conversations with AI are the substrate for most of my progress in this domain.
                    </Paragraph>
                    <Paragraph>
                        It opens on a word I made up for fun — <Italics>ivitivity</Italics> — and ends on the whole
                        numbers. In between the suffix turns out to be two suffixes, subjectivity turns out to live in
                        the context rather than in the subject, and a property of a type turns out to be the thing the
                        whole of Semantic Reference Theory had been circling. <Bold>Eight movements</Bold>, and each one
                        is a chapter.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}
