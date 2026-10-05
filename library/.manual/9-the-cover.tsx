import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Cover ]]</Title>
        <Section>
            <Heading>The lines of a cover</Heading>
            <Paragraph>
                A cover says a book's title, who wrote it and what it is filed under. The framework's cover
                draws the title. Mine also writes the other two as lines of the cover, each a link: the subject
                the book is filed under, and the author, which leads to <Means>$[[ Dougs Story ]]</Means> from
                every book. The library is filed under itself, so its cover says no second line.
            </Paragraph>
            <Paragraph>
                The lines are part of the cover and not something a book draws beside it.
                So <Means>$[[ a frame ]]( ./The Frames )</Means> can set a cover as a bar, a board or one running
                line, and it is the same cover each time.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The cover's file</Heading>
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
