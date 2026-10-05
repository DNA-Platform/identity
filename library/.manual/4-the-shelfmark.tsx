import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Shelfmark ]]</Title>
        <Section>
            <Heading>What a shelfmark is</Heading>
            <Paragraph>
                A catalogue of mine holds a chapter for each book filed under it, and that chapter stands in for
                the book: it carries the book's synopsis. In the catalogue's table of contents the row for such a
                chapter ends in a small square. The name leads to the chapter here, and the square leads to the
                book itself. <Means>$[[ Dougs Library ]]</Means> is written this way,
                in <Means>$[[ its table of contents ]]( Dougs Library / Table of Contents )</Means>.
            </Paragraph>
            <Paragraph>
                The square is the catalogue's answer for the book, so it is also what tells the compiler that this
                catalogue holds it. I write the answer with the book's name, and the theme draws the square in its
                place, at the right of the row and a thoughtful distance from the names, with the squares of a
                table in one line. The name stays in the link for anyone who cannot see the square.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The shelfmark's file</Heading>
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
