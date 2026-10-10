import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Noun ]]</Keyed>
        <Title>[[ The Turn ]]</Title>
        <Paragraph>
            <Brief />
            The line at the foot of a chapter: the one before, which of how many, the one after.
        </Paragraph>
        <Section>
            <Heading>What the turn is</Heading>
            <Paragraph>
                The turn is the line at the foot of every chapter that takes me to the next one or the one
                before: a word that leads to the chapter before, the count, which says which chapter this is
                and of how many, and a word that leads to the chapter after. The word before is said to be the
                one before and the word after the one after, so a book's theme can place the two by name — my
                story sets them as a grid with the count centred and an end absent at the first and last
                chapter.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the turn fits the library's patterns</Heading>
            <Paragraph>
                The turn is a paragraph the book draws, with content of its own, as <Means>$[[ the byline ]]( ./The Author and the Subject )</Means> is;
                the count is a word with content of its own; before and after are things said of a word, as
                the framework says Self of a title. The line asks <Means>$[[ the book ]]( ./The Book )</Means> for
                its chapters, so it counts and leads through the chapters I can open, and not the cover or the
                table of contents. At the first chapter the one before is the chapter itself, and at the last
                the one after is, each a reference to itself, which is how a theme knows the end is absent.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the turn is used</Heading>
            <Paragraph>
                No chapter writes its own: the book gives every chapter a turn when the book is whole. A book's
                theme styles the line — the manual's as a row with the count faint, my story's as its sketch's
                grid in the mono face.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the turn bites</Heading>
            <Paragraph>
                The framework's own next and previous walk every chapter, the cover and the table among them;
                the turn walks the book's. A chapter the book does not place has no turn, which is what the
                book's rule that every chapter has a place is for.
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
