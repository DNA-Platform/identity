import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Date ]]</Title>
        <Paragraph>
            <Brief />
            Said of a chapter that carries the day it was written.
        </Paragraph>
        <Section>
            <Heading>What a dated chapter is</Heading>
            <Paragraph>
                A chapter of mine may say when it is from. It says so once: the words I want read, and the day a
                machine can read, with the time where I know it. The date itself is the framework's
                own. What this adds is a way for a chapter to carry one, so that a book can ask a chapter for its
                date, and every dated chapter can be found.
            </Paragraph>
            <Paragraph>
                The chapter draws its date at its foot. The chapters
                of <Means>$[[ Dougs Story ]]</Means> are dated, and no book of mine sorts by date yet.
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
