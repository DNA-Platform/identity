import { Append, Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Theme ]]</Title>
        <Section>
            <Heading>What the theme is</Heading>
            <Paragraph>
                The theme is where this library keeps its values, and the one styled component every book is
                drawn inside. The framework's own theme has no values and no rules, so everything here is mine.
            </Paragraph>
            <Paragraph>
                It is small on purpose. No design is built yet, so it holds four values: a measure, a space, how
                wide a side is, which is also the least width of a book on a shelf, and how narrow a screen is
                before a book stops setting things side by side. And it holds only the rules a plain page needs:
                the page keeps the space around it, a chapter keeps to the measure, a chapter, a section and a
                paragraph each keep the space above and below, a picture is never wider than its place, and a
                listing scrolls sideways when its lines are long. It grows as each design is built, and every
                value added to it is one I chose.
            </Paragraph>
            <Paragraph>
                The component is made of parts, each a method that returns some rules, so a book can change one
                part and keep the rest.
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
