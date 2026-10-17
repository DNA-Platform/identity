import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            Exploring the nature of meaning in the form of a first-order logic. We will approach this subject using
            referents in a catalogue as our object of study, and we will consider a single ternary relation R(x,y,t),
            where R(x,y,t) implies that x relates to y through t
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                No instructions were set on this project.
            </Paragraph>
        </Section>
    </Chapter>
);
