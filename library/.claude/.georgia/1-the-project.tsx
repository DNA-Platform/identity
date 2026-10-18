import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            We are trying to settle in the country of Georgia and this is a project to help us get support and advice
            and assistance on that most complex mission
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                No instructions were set on this project.
            </Paragraph>
        </Section>
    </Chapter>
);
