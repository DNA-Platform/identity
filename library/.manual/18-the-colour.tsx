import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Colour ]]</Title>
        <Section>
            <Heading>Each book has a colour of its own</Heading>
            <Paragraph>
                A chapter that stands for a book on a shelf says the book's colour, as a librarian's label does,
                and its cover is painted in it: the name on a gradient of that colour, the line across it a
                tint. The book itself says the same colour in its own theme, so its dots and its pressed
                switches wear it. That is one colour said in two places for now, because what a cover says does
                not yet reach its catalogue's page, and the two are brought to one when it does.
            </Paragraph>
            <Paragraph>
                The colours are the ones the frame's sketch gives the library's subjects: my own books the soft
                black of the library, the design book a rose, the manual a purple, my story the orange that is
                me. <Means>$[[ The catalogue ]]( Dougs Library )</Means> says each.
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
