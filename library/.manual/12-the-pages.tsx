import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Pages ]]</Title>
        <Section>
            <Heading>One page open at a time</Heading>
            <Paragraph>
                A page is a chapter together with the files it
                appends. <Means>$[[ The book ]]( ./The Book )</Means> draws one for each of its chapters, and
                says which one is open. Every page is in the document, so a link to any place in the book has
                somewhere to land.
            </Paragraph>
            <Paragraph>
                This is the rule that goes with them: a page that is not open is not shown. It is said of every
                book once, here. An arrangement of a book, such
                as <Means>$[[ the sidebar ]]( ./The Sidebar )</Means>, is this with rules of its own added, and a
                book says which arrangement it has in one line.
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
