import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Journal ]]</Title>
        <Paragraph>
            <Brief />
            The type of book that is read newest first, every entry dated and all of them on one page; and
            Typeset, this library's look for one.
        </Paragraph>
        <Section>
            <Heading>The journal, a type of book</Heading>
            <Paragraph>
                A journal is a book of dated entries. Every entry is a chapter that
                is <Means>$[[ dated ]]( ./The Date )</Means> and says the month of its date as
                its <Means>$[[ part ]]( ./The Part )</Means>, and the table lists each month under a section headed
                with its name, so a new entry is one file with its date and nothing else moves. The type asks for
                both and refuses an entry that lacks either, in a sentence that names it.
            </Paragraph>
            <Paragraph>
                The journal lays its entries out on one page, which is its own arrangement
                under <Means>$[[ the layout ]]( ./The Layout )</Means>: nothing is hidden, the open entry is the
                one a link names or the latest when none is, its row is lit, and that is where the book turns to.
                Each entry wears its number in the book's order and its date in a gutter at its left, the number a
                word the journal adds to it when bound. There is no turn at the foot, since the page runs on, and no
                page for the synopsis, which is read on the book's entry in the catalogue.
            </Paragraph>
            <Paragraph>
                Newest first is a thing said of the book, as a tone is, and the journal says it of itself when
                bound. A press at the top of the contents, <Means>$[[ a switch ]]( ./The Switch )</Means>, takes it
                off and puts it back; the entries and their rows follow it. Each row of the contents carries its
                entry's day, a word the journal adds to the row, as <Means>$[[ the entry ]]( ./The Entry )</Means> is
                given its presses.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Typeset, its theme</Heading>
            <Paragraph>
                Typeset is the look of a book that reads like a book, in this library's white: the bar and the
                contents as <Means>$[[ the bookshelf ]]( ./The Bookshelf )</Means> has them, the rows with their
                dots and the lit row's stroke, and a page that is the paper, with a radial lift of the book's own
                foot colour at its corner. The accent is the foot ink of the book's cover, so a journal wears its
                own pen, and nothing on the page is the band's colour. The entry's number stands pale and large in
                the gutter above its date, a line between entries fades at its ends, the title and headings are
                in the serif and the words set ragged at seventeen pixels. Every value is a field
                of <Means>$[[ the theme ]]( ./The Theme )</Means> or the cover's scheme; none is a literal.
            </Paragraph>
        </Section>
        <Section>
            <Heading>A second journal</Heading>
            <Paragraph>
                A second journal is one line, a class extending this one; a cover with its scheme, its window and
                its illustration, holding the library's cover as a volume; a synopsis; a table with a section for
                each month, listing the entries, and the parenthetical row naming the book, the synopsis and
                itself; and entries that say their month and their date at their head, with a first paragraph.
                It wears Typeset in that line. The one this library has
                is <Means>$[[ my story ]]( Dougs Story )</Means>, designed on its own page
                in <Means>$[[ The Story's Page ]]( Dougs Design / The Story's Page )</Means>.
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
