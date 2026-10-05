import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Book ]]</Title>
        <Section>
            <Heading>What a book is here</Heading>
            <Paragraph>
                Every book in this library extends one class, so what a book is here is said once. A book of mine
                holds chapters and nothing else, and only an ordinary chapter appends a file. The class says both
                in its specification, and the bind holds every book to it.
            </Paragraph>
            <Paragraph>
                Left to itself, the class writes the chapters down the page in the order of their files. Under the
                cover it draws <Means>$[[ who the book is by and what it is filed under ]]( ./The Author and the Subject )</Means>,
                and <Means>$[[ the switch ]]( ./The Switch )</Means>. A chapter may append a file kept beside it,
                and under each chapter the class prints the files it appends, each
                as <Means>$[[ a listing ]]( ./The Listing )</Means>.
            </Paragraph>
            <Paragraph>
                A book that wants its parts somewhere else on the screen is a class under this one, and writes
                them there. The class gives it what it needs for that. It can ask for its chapters. Those are the
                ordinary ones: the framework puts a class on every chapter and takes it off a cover, a synopsis
                and a table of contents, and my book reads that class. It can ask which chapter is open: the one
                the address names, or the one that holds the place it names. And it can
                draw <Means>$[[ a page ]]( ./The Pages )</Means> for each: the chapter, the files it appends, and
                whether it is the open one. <Means>$[[ The sidebar ]]( ./The Sidebar )</Means> is one such book,
                and the others are documented in the books they lay out.
            </Paragraph>
            <Paragraph>
                This manual's book file is where every other book takes the class from.
                And <Means>$[[ the theme ]]( ./The Theme )</Means> is registered on the class, once, so every
                book gets it.
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
