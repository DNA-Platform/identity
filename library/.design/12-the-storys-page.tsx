import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Design, Desk, Exhibit, Phone, Thumbnail, Volume } from '../.manual/.book';
import StoryCover from '../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Design>$[[ Dougs Story ]]</Design>
        <Volume>{StoryCover()}</Volume>
        <Title>[[ The Story's Page ]]</Title>
        <Section>
            <Heading>My story, as built</Heading>
            <Paragraph>
                <Exhibit />
                <Image>![[ built-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                My story's page as built from this page: a journal, every entry on one page newest first, its
                number and its date in the gutter, the contents newest first at a press, in Typeset, the look of a
                book that reads like a book. Before this page it was the sheet
                of <Means>$[[ 29 ]]( ./The Reading View, in the Frame, with the Chapters at the Side )</Means>, built
                from the sketch before any page was designed from its print. It is the fourth page to be designed
                from its print, and the first that is a book to be read rather than browsed. Where it is: the type
                of book and its look are <Means>$[[ The Journal ]]( Dougs Reference Manual / The Journal )</Means>,
                and the book that wears them is <Means>$[[ my story ]]( Dougs Story )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the journal's page became</Heading>
            <Paragraph>
                The page became the fourth type of book and its look, kept in the reference manual so another
                journal can be written from them: <Means>$[[ The Journal ]]( Dougs Reference Manual / The Journal )</Means>,
                which lays every entry on one page newest first, asks every entry for its date and its month,
                adds the number to the entry and the day to its row, and registers Typeset, the look of a book
                that reads like a book. My story extends it in one line and keeps no appendix, since nothing of
                its old sheet is its own.
            </Paragraph>
            <Paragraph>
                That the type holds for a book other than mine was proved the day it was built: a second journal
                of eight files, a cover, a synopsis, a table of one month and two dated entries, written into a
                galley of this library from the manual's words alone, bound first time, photographed, and thrown
                away. This is its page.
            </Paragraph>
            <Paragraph>
                <Image>![[ second-journal.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Designed on page 037</Heading>
            <Paragraph>
                <Desk />
                <Image>![[ 037-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 037-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 037-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Append
            identifier="037"
            type=".html"
        >
            ![[ 037.html ]]
        </Append>
    </Chapter>
);
