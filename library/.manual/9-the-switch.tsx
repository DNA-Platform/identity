import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Switch ]]</Title>
        <Section>
            <Heading>Something a reader presses</Heading>
            <Paragraph>
                A choice is a word drawn as a button. It is given one thing that can be said of a book. Pressed,
                it says that thing of the book I am reading. Pressed again, it takes it back. The button itself
                reports whether the thing is said, by asking the book.
            </Paragraph>
            <Paragraph>
                Nothing is rebuilt when I press one. The book I am reading is given the thing in front of what its
                class already says, and draws again. So a view I can switch to is written the same way as a view
                a book always has, and what a book shows before I press anything is said once, by its class. A
                choice only adds to what the class says. It cannot take away something the class says itself.
            </Paragraph>
            <Paragraph>
                The first choice every book carries
                is <Means>$[[ the outline ]]( ./The Outline )</Means>. <Means>$[[ The book ]]( ./The Book )</Means> draws
                it, and a book that has more to choose from draws more.
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
