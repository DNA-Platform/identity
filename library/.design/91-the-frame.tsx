import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Appendix, Wide } from './.book';

export default () => (
    <Chapter>
        <Appendix />
        <Title>[[ The Frame ]]</Title>
        <Section>
            <Heading>What the frame is</Heading>
            <Paragraph>
                The frame is where things stand on the screen: a rail at the left in the dark of the cover,
                holding the book's name and its index, and the open page beside it on the paper. It is a format
                said of the book, so it adds one layer around the book and places what is already there by the
                marks the framework and this book put on it. Nothing is positioned by counting. On a phone the
                book's name lies across the top and the index runs under it in one line, which stays in place as
                the page moves.
            </Paragraph>
            <Paragraph>
                The masthead is a paragraph the book draws before its chapters: the library this book stands in,
                and the book's own name, each a way back. Under it stands the byline every book of my library
                draws, my name as a way to my story, and the frame keeps it in the rail. And a paragraph that says
                it is wide is let out of the reading measure, which is how a sketch or a listing takes the whole
                page.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The frame's file</Heading>
            <Paragraph>
                <Wide />
                <Code language="tsx">![[ code.tsx ]]</Code>
            </Paragraph>
        </Section>
    </Chapter>
);
