import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
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
                body, so the count and the turns never count the machinery.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How an entry is used</Heading>
            <Paragraph>
                A type of book may have its own type of entry, registered on its class, and the index uses it:
                the one in <Means>$[[ the manual ]]( ./The Manual )</Means> also shows the type of the file its
                chapter appends. The catalogue's rows that stand for books open the book's entry on the
                catalogue's page, and end in an arrow that leads to the book itself.
            </Paragraph>
            <Paragraph>
                In the manual the entries stand as a tree. A folder is said of each section of the table, with a
                chevron that folds it and a mark that leads to the section's first chapter, and a chapter's files
                stand under its row as presses, which the index gives the row at bind, where it says of each row
                that it is an entry, reading whether the row's chapter is read as a manual and which files it
                appends. The chevron is a switch said of the section, and the key stands folded from the start. The tree's look is the folder's own,
                carried by its layer and read off the book's theme, so a section said to be a folder in any book of
                mine folds and reads as the manual's tree does, in that book's colours: the base book says a folder
                of each <Means>$[[ part's ]]( ./The Part )</Means> section at bind. A folder is open when the reader
                is in its part, the open chapter's part being its own, and both none in this book; open, it is the
                tree, and closed it draws nothing of its own, so its section reads as the theme draws any section,
                and in a manual's context a folder that is not open is not drawn at all. The root is the root of
                the tree, the one row the base book adds to the table at bind, the book's own name leading back
                to the book, drawn in a manual's context only; this book adds none. The design of the tree and how the chevron came to be
                drawn is in <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means>.
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
