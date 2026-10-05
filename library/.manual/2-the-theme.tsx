import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Theme ]]</Title>
        <Section>
            <Heading>What the theme is</Heading>
            <Paragraph>
                A place for the library's properties, and the one styled component that dresses the framework's
                marks with them. The framework's Theme is bare, so the properties are this library's own: the font,
                the size, the leading, the measure, the space, the ink, the paper and the link, and three for a bar:
                its dark, the bright that is written on it, and a tint. They are declared as fields and read by every
                rule beneath through the theme's own provision. The values stand in for a design
                not yet made: a light paper and a dark ink, in the light serif of the page that has stood at the
                library's address while it was built. That page's own dark is a cover, and is kept for an accent.
            </Paragraph>
            <Paragraph>
                The component is composed of parts, each a method returning a fragment of rules, so that a book
                changes one part and keeps the rest: the page, the levels, the links, the figures, and the
                apparatus, which is the lines of a cover, the switch, the shelfmark and the dateline. Two more
                parts say what a mark on the book looks like: the side bar
                of <Means>$[[ ./The Frames ]]</Means>, and the spread of <Means>$[[ ./The Listing ]]</Means>. A
                book that has a frame of its own adds that frame's part in its own theme. Every rule names a mark
                the framework or this library puts on the writing.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The theme's file</Heading>
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
