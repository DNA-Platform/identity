import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Author and the Subject ]]</Title>
        <Section>
            <Heading>Two links on every book</Heading>
            <Paragraph>
                Every cover in this library names who wrote the book and what it is filed under. The compiler
                refuses a book that leaves out either. But naming them draws nothing: the framework keeps both on the
                cover as facts and leaves it to a library to show them.
            </Paragraph>
            <Paragraph>
                So <Means>$[[ the book ]]( ./The Book )</Means> draws them, on every book, as two short lines. One
                says who the book is by and leads to that author's own book. The other says what the book is
                filed under and leads to the book that catalogues it. They are the way out of any book and into
                the rest of the library, and a book of mine is never drawn without them.
            </Paragraph>
            <Paragraph>
                Each is a paragraph of its own, so a book that arranges its parts can put the two in different
                places.
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
