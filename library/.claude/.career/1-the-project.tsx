import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            To brainstorm ideas about how to make a living for myself
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                Be sure to do due diligent research, assess the level of sophistication of my reasoning and answer at that
                level, understand my assumptions and work within them if they are consistent weighing in to check
                consistency as needed, and to be aware of your assumptions noting if they are reasonable and assessing if it
                is dangerous or very unproductive to assume rather than to ask questions in order to build a realistic
                context
            </Paragraph>
        </Section>
    </Chapter>
);
