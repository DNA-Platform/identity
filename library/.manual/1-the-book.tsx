import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Book ]]</Title>
        <Section>
            <Heading>What a book is here</Heading>
            <Paragraph>
                Every book in this library extends the library's own book class, so what a book is here is decided
                once. The class knows the parts every book has. The cover, the table of contents
                and <Means>$[[ the pages ]]( ./The Pages )</Means> are chapters, and it finds each by what it is.
                The library's name, which is a way home from every
                book, <Means>$[[ the lines that go with a cover ]]( ./The Cover )</Means> and the switch it draws
                itself. By itself it writes them down the page in that order. A class under it places them on
                the screen, and that is <Means>$[[ a frame ]]( ./The Frames )</Means>.
            </Paragraph>
            <Paragraph>
                Its file is also where the theme is registered for the framework's on the library's book
                class: every book of the library is a subclass and inherits the registration, so the Theme the
                framework gives every book is <Means>$[[ ./The Theme ]]</Means>.
            </Paragraph>
            <Paragraph>
                The file also holds the switch. A book says which views it offers, a spread, a paper, a way of
                showing its table, and the switch draws them as words to press. A press gives the book that view
                from outside, in front of its own. The view in front turns off the others of its kind, so
                pressing another is all it takes to change back. No chapter is rewritten for a view.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The book's file</Heading>
            <Paragraph>
                The file stands beside this chapter and is printed as it is on disk. The manual's book file is the
                door: it takes the class from here, and every other book of the library imports it from there.
            </Paragraph>
            <Paragraph>
                <Code identifier="code" />
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
