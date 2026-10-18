import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            Building the Chemistry wrapper around the React framework in TypeScript
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                Help me build the app specified in the project files
            </Paragraph>
        </Section>
    </Chapter>
);
