import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Concept ]]</Title>
        <Section>
            <Heading>What a concept is</Heading>
            <Paragraph>
                A concept is one sketch of one idea.
                In <Means>$[[ Every Concept ]]( ./Every Concept )</Means> each has a section of its own: its name,
                its number, what it is drawn after, the idea in a sentence, a photograph of it at a desk and on a
                phone, what I said of it if I said anything, and last the sketch's own code.
            </Paragraph>
            <Paragraph>
                The section says it is a concept and gives its number, which it keeps for good. I answer by that
                number. The sketch itself is a file kept beside the chapter. It is there to document the concept,
                so its section prints it as code, and nothing in this library opens it or draws it.
            </Paragraph>
            <Paragraph>
                Another chapter points to a concept by its number, as a link to its place in Every Concept. It
                does not show the concept a second time.
            </Paragraph>
            <Paragraph>
                The number is drawn where the section says it is a concept, as the note of that saying, so it
                stands on the card before the name. A concept opened across the screen has a close, a word
                written in its section as a link back to Every Concept, which the gallery shows only then.
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
