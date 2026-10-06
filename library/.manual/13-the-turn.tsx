import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Turn ]]</Title>
        <Paragraph>
            <Brief />
            The line at the foot of a chapter: the one before, which of how many, the one after.
        </Paragraph>
        <Section>
            <Heading>The way to the next chapter</Heading>
            <Paragraph>
                The turn is the line at the foot of every chapter that takes me to the next one or the one
                before: the chapter before, where this one is in the book, and the chapter after.
            </Paragraph>
            <Paragraph>
                The line asks <Means>$[[ the book ]]( ./The Book )</Means> for its chapters, so it counts and
                leads through the chapters I can open, and not the cover or the table of contents. Each link is a
                word that refers to a chapter and says that chapter's title. At the first chapter the one before
                is the chapter itself, and at the last the one after is, so the line is the same at both ends.
            </Paragraph>
            <Paragraph>
                Between the links is the count, which says which chapter this is and of how many. The book
                gives every chapter a turn when the book is whole, so no chapter writes its own.
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
