import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
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
                that it is an entry, reading whether the row's chapter is a spread and which files it
                appends. The chevron is a switch said of the section, and the key stands folded from the start. The tree's look is the folder's own,
                carried by its layer and read off the book's theme, so a section said to be a folder in any book of
                mine folds and reads as the manual's tree does, in that book's colours: the base book says a folder
                of each <Means>$[[ part's ]]( ./The Part )</Means> section at bind. A folder is open when the reader
                is in its part, the open chapter's part being its own, and both none in this book, or when the
                address names the folder's own heading, as it does a part of the register; open, it is the
                tree, and closed it draws nothing of its own, so its section reads as the theme draws any section,
                and in a manual's context a folder that is not open is not drawn at all. The root is the root of
                the tree, the one row the base book adds to the table at bind, the book's own name leading back
                to the book, drawn in a manual's context only; this book adds none. The design of the tree and how the chevron came to be
                drawn is in <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
            <Paragraph>
                The index has ways, each a field a type of book sets when it is bound, so that no book carries a
                rule for its side. Folded: every section of the table is folded until its chevron is pressed,
                and every folder is drawn as one whether or not it holds the open chapter, a look the folder's
                own layer carries under a class of its own, foldable, where it otherwise draws only the open
                folder; the one folder that keeps the tree's look is the open one of a book turned to a chapter,
                since that is the manual's side, and the part the address names in a list is lit and unfolded. Counted: each heading over the book's entries carries the count of the rows under it, a word
                the index adds. Dated: each row leading to one of the book's entries carries its day where the
                entry is dated, a word the index adds that was the journal's. The entries are the book's own, its body unless the type says
                otherwise, as <Means>$[[ the project manual ]]( ./The Project Manual )</Means> says its
                conversations are. A table file may say the ways, Index folded counted dated, and a type of
                book sets them in code before the table is bound: the journal dated, the project manual all
                three. The names, folded, counted, dated and foldable, are the session's until I keep or change
                them.
            </Paragraph>
            <Paragraph>
                Searched is the fourth way: a field where the type of book places it, at the head of the side or
                of the page, and a word typed there is the index's word. While one stands the index draws the
                hits in place of its rows, each a row with the entry's title marked where the word falls, its
                day where the entry is dated, its synopsis clipped around the first fall, and the whole row
                leading to the entry's place by the entry's open laid over it; and the book wears a class saying
                it is searching, so a theme may hide what the hits replace. The index asks the book for the
                words, and a type of book answers in its own: which of its writings are found for a word, the
                words each one carries, a title and a text read once when first asked and kept, the count of
                falls, the place a hit leads to, and the hint the empty field shows. So <Means>$[[ the register ]]( ./The Register )</Means> answers
                with its entries' titles and synopses within the part that is open, <Means>$[[ the project manual ]]( ./The Project Manual )</Means> with
                its entries and its files' names, and a conversation with its messages. The hits are keyed by the
                place each leads to and never by its position, and a hit's title is drawn as marked text, since a
                row's reference and a word's children are fixed when the row is made. The entry's open, the word
                laid over a row so the whole row leads, stands in this chapter now, since the hits use it as the
                project manual's rows do. The way is set as the others are, Index searched in a table file or in
                code before the table is bound. The names, searched, search, found, sought, result and the
                entry's open, are the session's until I keep or change them.
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
