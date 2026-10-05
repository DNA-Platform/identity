import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Theme ]]</Title>
        <Section>
            <Heading>What the theme is</Heading>
            <Paragraph>
                A place for the library's properties, and the one styled component that dresses the framework's
                marks with them. The framework's Theme is bare, so the properties are this library's own: the font,
                the size, the leading, the measure, the space, the ink, the paper and the link, declared as fields
                and read by every rule beneath through the theme's own provision. The values stand in for a design
                not yet made: a light paper and a dark ink, in the light serif of the page that has stood at the
                library's address while it was built. That page's own dark is a cover, and is kept for an accent.
            </Paragraph>
            <Paragraph>
                The component is composed of parts, each a method returning a fragment of rules, so that a book
                changes one part and keeps the rest: the page, the levels and the links. Every rule names a mark
                the framework puts on the writing.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The theme's file</Heading>
            <Paragraph>
                <Code>![[ code.tsx ]]</Code>
            </Paragraph>
        </Section>
    </Chapter>
);
