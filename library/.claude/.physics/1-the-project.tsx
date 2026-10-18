import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            We are going to explore some semantic reinterpretations of physics and their consequences
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                No instructions were set on this project.
            </Paragraph>
        </Section>
    </Chapter>
);
