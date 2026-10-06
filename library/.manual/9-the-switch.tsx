import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Switch ]]</Title>
        <Paragraph>
            <Brief />
            A word a reader presses to say one thing of the book, and one of a set.
        </Paragraph>
        <Section>
            <Heading>Something a reader presses</Heading>
            <Paragraph>
                A switch is a word drawn as a button. It is given one thing that can be said of a book. Pressed,
                it says that thing of the book I am reading. Pressed again, it takes it back. The button itself
                reports whether the thing is said, by asking the book.
            </Paragraph>
            <Paragraph>
                Nothing is rebuilt when I press one. The book I am reading is given the thing in front of what its
                class already says, and draws again. So a view I can switch to is written the same way as a view
                a book always has, and what a book shows before I press anything is said once, by its class. A
                switch only adds to what the class says. It cannot take away something the class says itself.
            </Paragraph>
            <Paragraph>
                Some switches come as a set, where only one can hold: the paper a book is printed on, or the view
                of a shelf. A tab is a switch for that. It is given the thing it says and the set it belongs to.
                Pressed, it says its own thing and takes back the others of the set, and pressing the one that
                already holds changes nothing.
            </Paragraph>
            <Paragraph>
                The first switch every book carries
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
