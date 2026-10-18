import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            What this project is, as Claude held it.
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                We will be creating an app called DNA Patternity in which we redefine what it means to create a pattern. See
                the project code for details
            </Paragraph>
        </Section>
    </Chapter>
);
