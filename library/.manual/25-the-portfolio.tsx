import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Portfolio ]]</Title>
        <Paragraph>
            <Brief />
            The type of book that records how a library came to look the way it does, in four parts the table
            reads, each read in its own view; and the Exhibition, this library's look for one.
        </Paragraph>
        <Section>
            <Heading>The portfolio, a type of book</Heading>
            <Paragraph>
                A portfolio is a book in parts. Every chapter says which part it is in, and the table lists
                each part under a section headed with its name; the type asks that no chapter is in none. The
                story, how the library came to look so, is read as prose with the turn at its foot. The designs
                are chapters that each name the book they are of and are read as rooms, which the portfolio
                says of them at bind. The sketches are a chapter of concepts read as a gallery, which the chapter
                says of itself. And how the book is built is its appendix, read as the manual reads a chapter.
                The book opens on the story's first chapter when nothing is bookmarked and draws no switches.
            </Paragraph>
            <Paragraph>
                A second portfolio is one line, a class extending this one, a cover, a synopsis and a table with
                its four sections, and chapters that say their part; it wears the Exhibition in that line. The
                vocabulary it is written in
                is <Means>$[[ The Paragraphs ]]( ./The Paragraphs )</Means> and <Means>$[[ The Concept ]]( ./The Concept )</Means>;
                its views are <Means>$[[ The Gallery ]]( ./The Gallery )</Means> and <Means>$[[ The Room ]]( ./The Room )</Means>;
                its tools are <Means>$[[ The Camera ]]( ./The Camera )</Means> and <Means>$[[ The Print ]]( ./The Print )</Means>.
                The one this library has is <Means>$[[ the design book ]]( Dougs Design )</Means>, designed on its
                own page in <Means>$[[ The design book ]]( Dougs Design / The design book )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The Exhibition, its theme</Heading>
            <Paragraph>
                The look is a place you come to see design, at the edge of seeing: a wash across the pages from a
                tenth of the book's band at the top left to an eighth of its foot at the bottom right; the bar
                and the side bar near-whites that shade toward their edges, with the book's three bands under the
                bar as a hairline and a half; the contents as a gallery guide, the designs numbered as plates
                with a miniature of each book's jacket; the words in the serif for titles and for what the author
                said, the sans for the rest, at seventy-two characters; every photograph with a close shadow and
                a far one. The values are the page's, carried in as they were decided; the cover's scheme is read
                as every book's is.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="faces"
            type=".tsx"
        >
            ![[ faces.tsx ]]
        </Append>
    </Chapter>
);
