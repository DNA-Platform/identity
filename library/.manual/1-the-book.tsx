import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Book ]]</Title>
        <Section>
            <Heading>What a book is here</Heading>
            <Paragraph>
                Every book in this library extends the library's own book class, so what a book is here is decided
                once. The class draws one thing before a book's chapters: a byline, the author the book's cover
                names, which leads to <Means>$[[ Dougs Story ]]</Means> from every book. A book opened at its cover
                stays at the top of its page, so the byline is the first thing in view. Its file is also where the
                theme is registered for the framework's on the library's book class: every book of the library is a
                subclass and inherits the registration, so the Theme the framework stands on every book
                is <Means>$[[ ./The Theme ]]</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The book's file</Heading>
            <Paragraph>
                The file stands beside this chapter and is printed as it is on disk. The manual's book file is the
                door: it takes the class from here, and every other book of the library imports it from there.
            </Paragraph>
            <Paragraph>
                <Code>![[ code.tsx ]]</Code>
            </Paragraph>
        </Section>
    </Chapter>
);
