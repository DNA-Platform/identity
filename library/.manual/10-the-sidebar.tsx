import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Sidebar ]]</Title>
        <Section>
            <Heading>A book read one chapter at a time</Heading>
            <Paragraph>
                Some of my books are for looking things up. Such a book keeps its cover and its table of contents
                at the side, and shows one chapter beside them. This manual is one,
                and <Means>$[[ Dougs Design ]]</Means> is another.
            </Paragraph>
            <Paragraph>
                It is two things. The first is a class of book. It writes the side, which
                holds <Means>$[[ what the book is filed under, its cover and who it is by ]]( ./The Author and the Subject )</Means>,
                then <Means>$[[ the switch ]]( ./The Switch )</Means> and the table of contents. Beside the side it
                writes a page for the synopsis and <Means>$[[ a page ]]( ./The Pages )</Means> for each chapter.
                The page that is open is the chapter the address names, or the one that holds the place it names,
                and the synopsis when it names neither. Its specification says every chapter the book holds has
                one of those places, so nothing is ever left undrawn.
            </Paragraph>
            <Paragraph>
                The second is the arrangement, which is said of the book: the side and the pages in two columns.
                On a narrow screen the side comes first and the page under it. Because the arrangement is said of
                the book and not written into it, another one can be said in its place.
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
