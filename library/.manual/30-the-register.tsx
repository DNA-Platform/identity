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
            The book that catalogues many others by their parts: its entries their synopses, every one dated,
            laid out by the sections of its table, a part at a time.
        </Paragraph>
        <Section>
            <Heading>A book of synopses, by its parts</Heading>
            <Paragraph>
                A register is a book of this library whose entries are not its own writing but the synopses of
                the books filed under it: each entry a chapter that holds another book's synopsis, imported from
                that book, and its cover as a volume, so the register knows the book's size and its dates because
                the book's own cover says them. Each entry is dated with the book's date. Its parts are the
                sections of its table that list entries, and the page is laid out by them: opened, it shows the
                parts as cards, each with its name, its count of conversations and the title and day of its
                latest, and lists no entry; a part pressed opens on its entries as rows newest first under their
                months, in the row form of <Means>$[[ the project manual's page ]]( ./The Project Manual )</Means>,
                with the synopses under the same switch, the head saying the part, its counts and its months and
                leading to the project's own page. The address carries the part, the heading of its section being
                a place, so a part's rows are somewhere a link reaches and the book opens on them from a link. The
                side lists the parts by <Means>$[[ the index's ]]( ./The Entry )</Means> three ways, folded,
                counted and dated, the part the address names unfolded to its rows. A search stands at the head: a
                word typed there is a field on the book set in the press, and the book draws under the head the
                conversations whose title or synopsis holds it, with their count, the word marked where it
                stands, each row naming its part and leading to the conversation, narrowed to the open part when
                one is open; the titles and synopses are read off the entries once, when first asked, since every
                entry already holds them, and nothing is written for the search to read. The type asks that every
                entry stand for a book, be dated and be listed under a part; and it lets an entry file a file of
                its own, where a cover, a synopsis or a table may not, so that what is known about a book can
                stand beside its entry. It was a journal until Sprint 114, every entry on one page newest first
                with its number in the gutter, and became this on the day it held a thousand.
            </Paragraph>
            <Paragraph>
                It is the book that catalogues all of my conversations, by the project each was held in and one
                part for those held in none. The entries and the table are written by the importer, one entry for
                each conversation it brings in and the table by project, the form
                in <Means>$[[ The Imported Conversation ]]( Claudes Reference Manual / The Imported Conversation )</Means>;
                the register reads them. In the code the parts are called groups, since the framework's compositions own
                the word parts for the writings they hold. The design is concept 6 of <Means>$[[ Claudes Design / The Conversations at a Thousand ]]</Means>
                as cards and concept 7 with the parts folded, until I decide by number.
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
