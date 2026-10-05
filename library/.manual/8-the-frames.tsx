import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Frames ]]</Title>
        <Section>
            <Heading>What a frame is</Heading>
            <Paragraph>
                A frame places the parts every book has: the library's name, the book's cover, its table of
                contents and the open page. It is a mark said of the book, and it adds nothing to the book. The
                chapters stay in the order they are written, and each one stands where the frame puts it by what
                it is. With no frame, a book reads down the page in that order.
            </Paragraph>
            <Paragraph>
                Only one frame holds at a time. A frame given later stands in front of the one a book already
                has and takes it out, so a book or a reader can change the frame and no chapter is rewritten.
            </Paragraph>
            <Paragraph>
                What a frame looks like is not written with the frame. It is a part
                of <Means>$[[ the theme ]]( ./The Theme )</Means>, keyed on the frame's mark. A theme can be changed
                from outside, and a theme that comes in that way has to bring every frame's rules with it, or the
                frame is left with no values to read.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The side bar</Heading>
            <Paragraph>
                The first frame sets the cover and the table of contents down a dark bar at the left, with the
                open page beside it. It is the frame of two
                of <Means>$[[ the designs I am going with ]]( Dougs Design / The Designs I Am Going With )</Means>,
                the reference manual's and a conversation's. On a narrow screen it stands down, and the book
                reads down the page.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The frames' file</Heading>
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
