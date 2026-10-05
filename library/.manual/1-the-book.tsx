import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Book ]]</Title>
        <Section>
            <Heading>What a book is here</Heading>
            <Paragraph>
                Every book in this library extends one class, so what a book is here is said once. A book of mine
                holds chapters and nothing else, it has a place for every chapter it holds, and only an ordinary
                chapter appends a file. The class says all three in its specification, and the bind holds every
                book to it.
            </Paragraph>
            <Paragraph>
                Left to itself, the class writes the chapters down the page in the order of their files. Under the
                cover it draws <Means>$[[ who the book is by and what it is filed under ]]( ./The Author and the Subject )</Means>,
                and <Means>$[[ the switch ]]( ./The Switch )</Means>. A chapter may append a file kept beside it,
                and under each chapter the class prints the files it appends, each
                as <Means>$[[ a listing ]]( ./The Listing )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What a type of book is given</Heading>
            <Paragraph>
                A book that wants its parts somewhere else on the screen is a class under this one, and writes
                them there. The class gives it what it needs for that. It can ask for its chapters. Those are the
                ordinary ones: the framework puts a class on every chapter and takes it off a cover, a synopsis
                and a table of contents, and my book reads that class. It can ask which chapter a place names,
                whether the place is the chapter or a heading inside it, and so which chapter is open: the one
                the address names.
            </Paragraph>
            <Paragraph>
                It can draw the front page, which is the open one while no chapter is, and it says what goes on
                it. And it can draw <Means>$[[ a page ]]( ./The Pages )</Means> for each chapter: its words, the
                files it appends, and whether it is the open one. A book that draws chapters of another sort
                adds them to what it places, and the specification counts them.
            </Paragraph>
            <Paragraph>
                Three things the class does for every book without being asked. It says the book
                is <Means>$[[ paged ]]( ./The Pages )</Means>. It gives each chapter
                its <Means>$[[ catchword ]]( ./The Catchword )</Means>. And when the address names the cover it
                leaves the page where it is. <Means>$[[ The manual ]]( ./The Manual )</Means> is one type of
                book, and the others are documented in the books they lay out.
            </Paragraph>
            <Paragraph>
                This manual's book file is where every other book takes the class from.
                And <Means>$[[ the theme ]]( ./The Theme )</Means> is registered on the class, once, so every
                book gets it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is said of a book</Heading>
            <Paragraph>
                Some things are said of a whole book: that it is paged, that it is outlined, that its code is
                forward. Each must be said of a book of this library and of nothing else, so that rule is written
                once, in the second file below, and each of them takes it.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="said"
            type=".tsx"
        >
            ![[ said.tsx ]]
        </Append>
    </Chapter>
);
