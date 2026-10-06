import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Catchword ]]</Title>
        <Section>
            <Heading>The way to the next chapter</Heading>
            <Paragraph>
                In an old book the catchword is the word at the foot of a page that says how the next page
                begins. Here it is a line at the foot of every chapter: the chapter before, where this one is in
                the book, and the chapter after.
            </Paragraph>
            <Paragraph>
                The line asks <Means>$[[ the book ]]( ./The Book )</Means> for its chapters, so it counts and
                leads through the chapters I can open, and not the cover or the table of contents. Each link is a
                word that refers to a chapter and says that chapter's title. At the first chapter the one before
                is the chapter itself, and at the last the one after is, so the line is the same at both ends.
            </Paragraph>
            <Paragraph>
                Between the links is the folio, which says which chapter this is and of how many. The book
                gives every chapter a catchword when the book is whole, so no chapter writes its own.
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
