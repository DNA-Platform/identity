import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Date ]]</Title>
        <Section>
            <Heading>What a dated chapter is</Heading>
            <Paragraph>
                A chapter of mine may say when it is from. It says so once, at its top: the words I want read, and
                the day a machine can read, with the time where I know it. The chapter gets a class for it and
                draws the words at its foot, as a dateline. A book can read each chapter's day and put its chapters
                in order of recency. The chapters of <Means>$[[ Dougs Story ]]</Means> are dated, and no book of
                mine sorts by the date yet.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The date's file</Heading>
            <Paragraph>
                <Code identifier="code" />
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
