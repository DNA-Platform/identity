import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Gallery ]]</Title>
        <Section>
            <Heading>The concepts as cards</Heading>
            <Paragraph>
                A gallery is said of a chapter whose sections are concepts. In it, each group of concepts is a
                grid, and each concept is a card: its two photographs first, then its name, what it is after, its
                idea, and what I said of it. The sketch's own code is not on the card.
            </Paragraph>
            <Paragraph>
                A card opens across the whole gallery when its address is the one I am at, and then it shows its
                photographs at full size and the sketch's code under them. The concept says of itself that it is
                open when the book's bookmark names it, and the gallery reads that; no card keeps a state of its
                own.
            </Paragraph>
            <Paragraph>
                The two paragraphs the card places are said to be what they are in the chapter: the one holding
                the photographs is the pictures, and the one holding the code is the source. Both are kinds
                of <Means>$[[ a concept's ]]( ./The Concept )</Means> paragraph.
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
