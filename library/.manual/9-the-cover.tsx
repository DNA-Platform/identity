import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Cover ]]</Title>
        <Section>
            <Heading>The lines of a cover</Heading>
            <Paragraph>
                A cover says a book's title, who wrote it and what it is filed under. The framework's cover
                draws the title. The other two are lines the book draws from what its cover says, each a link:
                the subject the book is filed under, and the author, which leads
                to <Means>$[[ Dougs Story ]]</Means> from every book. The library is filed under itself, so it
                has no second line.
            </Paragraph>
            <Paragraph>
                The lines are the book's and not the cover's, so <Means>$[[ a frame ]]( ./The Frames )</Means> puts
                each one where it wants. The side bar sets both under the
                title. <Means>$[[ The catalogue's bars ]]( Dougs Library / The Bars )</Means> set the author at the
                far end of the library's bar. <Means>$[[ The story's sheet ]]( Dougs Story / The Sheet )</Means> runs
                the author on after the title and leaves the other out.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The lines' file</Heading>
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
