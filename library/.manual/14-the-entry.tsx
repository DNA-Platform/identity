import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Kind>$[[ ./An Annotation ]]</Kind>
        <Title>[[ The Entry ]]</Title>
        <Paragraph>
            <Brief />
            A row of the table of contents that leads somewhere, lit when its chapter is open.
        </Paragraph>
        <Section>
            <Heading>What an entry is</Heading>
            <Paragraph>
                A table of contents is a list of rows, and most of them lead to a chapter. I call such a row an
                entry. An entry knows the chapter it leads to, whether the row names the chapter or a heading
                inside it, and it says so when that chapter is the open one. So a table of contents can show
                where I am in the book, in the frame's holds, where <Means>$[[ the book ]]( ./The Book )</Means> draws
                it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How an entry fits the library's patterns</Heading>
            <Paragraph>
                The index is the framework's table of contents with one thing added: when the book is bound it
                says of each row that leads somewhere that it is an entry. The table file says it is the table
                of contents and that it is an index, two things said of one chapter, and the chapter stays a
                table of contents; no table file says entry on every row. A row leads somewhere when the row, or
                its first word, is a content of the table; a parenthetical row never does. An entry reads the
                chapter it leads to, and its dot wears that chapter's colour where the chapter says one; the
                row's look is the theme's holds part, in the colours of <Means>$[[ the tone ]]( ./The Tone )</Means>.
                And a section of the table said to be the appendix — how this book is built — stands at the
                foot of the contents in a smaller voice, and the chapters it leads to are left out of the book's
                pages, so the folio and the turns never count the machinery.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How an entry is used</Heading>
            <Paragraph>
                A type of book may have its own kind of entry, registered on its class, and the index uses it:
                the one in <Means>$[[ the manual ]]( ./The Manual )</Means> also shows the type of the file its
                chapter appends. The catalogue's rows that stand for books open the book's entry on the
                catalogue's page, and end in an arrow that leads to the book itself.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where an entry bites</Heading>
            <Paragraph>
                An entry lights for the place the address names or for the open chapter's own name, and for
                nothing else; a row naming a heading of another chapter is never lit. The library's subjects in
                the bar are not entries — they are references to other books; the one that is this book is lit
                by <Means>$[[ the layout ]]( ./The Layout )</Means>, which knows the book's address.
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
