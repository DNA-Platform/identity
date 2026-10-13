import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Register ]]</Title>
        <Paragraph>
            <Brief />
            The simplest book that catalogues many others: a journal whose entries are their synopses, every one
            dated, all on one page newest first.
        </Paragraph>
        <Section>
            <Heading>A journal of synopses</Heading>
            <Paragraph>
                A register is <Means>$[[ a journal ]]( ./The Journal )</Means> whose entries are not its own
                writing but the synopses of the books filed under it: each entry a chapter that holds another
                book's synopsis, imported from that book, and its cover as a volume, so the register knows the
                book's size and its dates because the book's own cover says them. Each entry is dated with the
                book's date and says the month of its date as its part, as a journal asks, and the page lays every
                entry out newest first with its number and its day in the gutter, the way into the book on its
                title. The type asks, besides what a journal asks, that every entry stand for a book; and it lets an
                entry file a file of its own, where a cover, a synopsis or a table may not, so that what is known
                about a book can stand beside its entry.
            </Paragraph>
            <Paragraph>
                It is the very simple book that catalogues all of my conversations, since there will be other
                books that catalogue them more effectively, by project and by whatever else is said of them; and
                for now the book that catalogues those catalogues wears it too, until a shelf is designed for
                projects. The entries are written by the importer, one for each conversation it brings in, each
                filing the record of its import beside it, which the importer reads back and the binder never
                reads; the register reads the entries.
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
