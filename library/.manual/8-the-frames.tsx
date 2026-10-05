import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Frames ]]</Title>
        <Section>
            <Heading>What a frame is</Heading>
            <Paragraph>
                A frame is where a book puts its parts on the screen: the library's name, the cover and its
                lines, the table of contents, the open page and the switch. A book is layout, so a frame is
                written in the book. Each frame is a class
                under <Means>$[[ the library's book ]]( ./The Book )</Means>, and what it writes is the layout:
                every part drawn in an element of the frame's own.
            </Paragraph>
            <Paragraph>
                A chapter does not know where it is put. The book finds each one by what it is, the cover, the
                table of contents, a page, and draws it where the frame wants it. What a chapter wraps itself in
                makes no difference to the frame, since the frame only places its own elements.
            </Paragraph>
            <Paragraph>
                A frame's rules are written with it, in one styled component that reads the values
                of <Means>$[[ the theme ]]( ./The Theme )</Means>. It is drawn inside the book, so it reads
                whichever theme the book has at that moment, its own or one given to it from outside.
            </Paragraph>
            <Paragraph>
                With no frame, a book reads down the page: the library's name, the cover and its lines, the table
                of contents, the pages, the switch. That is what the library's book writes by itself.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The side bar</Heading>
            <Paragraph>
                This frame sets the library's name and the cover at the top of a dark bar at the left, and the
                table of contents under them. The open page is beside the bar, with the switch above it. It is the
                frame of two
                of <Means>$[[ the designs I am going with ]]( Dougs Design / The Designs I Am Going With )</Means>,
                the reference manual's and a conversation's. On a narrow screen there is no bar, and the book
                reads down the page: the cover, the open page, then the table of contents.
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
