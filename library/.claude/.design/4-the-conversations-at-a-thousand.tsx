import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Desk, Phone, Question, Thumbnail } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Title>[[ The Conversations at a Thousand ]]</Title>
        <Section>
            <Heading>The register, at a thousand</Heading>
            <Paragraph>
                <Means>$[[ Our Conversations ]]</Means> holds nine hundred and eighty-three conversations now, every
                one of both my accounts, and a register that lists them all at once is a list no one reads. These
                sketches set the register by its parts: one part for each of my projects with Claude and one for
                the conversations filed under none, twenty-eight in all, and no conversation listed until a part is
                pressed. They are drawn from the real covers, every title, count and day as the library holds them,
                so what is shown is the thing itself; and they keep the project page's own form, the bar, the side,
                the head and the rows of <Means>$[[ ./The Project's Page ]]</Means>, so that a part opened reads as
                a project does. Each sketch keeps its number in this book, and I answer by
                number: 006 is <Means>$[[ ./The Parts ]]</Means>, 007 is <Means>$[[ ./A Part Open ]]</Means>, and
                008 is <Means>$[[ ./A Word Typed ]]</Means>.
            </Paragraph>
            <Paragraph>
                <Question />
                What is open on page 006, each a switch at the foot: the shelf, 1 the parts as cards, 2 the parts as
                rows in the row form, 3 the parts as sections each with its three latest and a line to the rest.
                What is open on page 007: the side, 1 every part folded with the open one unfolded to its months, 2
                the open part's months alone with the way back to the parts above them; and the rows, titles alone
                or with the synopsis. What is open on page 008: the answer, 1 the rows newest first each naming its
                part, 2 the rows grouped under their parts, 3 the rows within the open part only. On my word that
                the session decides, its choice stands until my number says otherwise: 006 as cards, since the
                application lays its projects as cards and nothing is reinvented that it has settled; 007 with the
                parts folded and the open one unfolded; 008 each row naming its part, and within the part when one
                is open. Built so in Sprint 114, the days after: <Means>$[[ Our Conversations ]]</Means> opens on
                its parts as 006 lays them, a part pressed opens on its rows as 007 does with the side folded to its
                parts and the open one lit, and a word typed answers as 008 does with each row naming its part;
                the search over the words said in the messages waits on the binder, and the pages drawn behind the
                cards make the page answer a press only after some seconds at a thousand, which is the next
                design's question.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The Parts ]]]</Heading>
            <Paragraph>
                Concept 6, Our Conversations opened and no part pressed. The head says where the register stands,
                Dougs Claude and then Our Conversations, its name in the serif, and what it holds: the count of
                conversations, of parts and of exchanges, and the months from the first to the last; under them the
                search, a word over every conversation, empty until I type. The parts stand down the main column
                newest first by the day of their latest conversation, each with its name, its count and the title
                and day of that latest one; as cards in a grid, as rows in the project page's row form with the
                latest title where the synopsis goes, or as sections of three rows each with a line to the rest.
                The side lists the parts with their counts and nothing else, since there is no month to list until
                a part is open. No conversation is listed on this page.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 006-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 006-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 006-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Part Open ]]]</Heading>
            <Paragraph>
                Concept 7, a part pressed: <Means>$[[ Semantic Reference Theory ]]( claude--Semantic Reference Theory )</Means>,
                its seventy-nine conversations newest first under their months, each a row with its title, its
                count of exchanges and its day, the synopsis under each on the second row form. The head says the
                part, Dougs Claude, Our Conversations and then the part's name in the serif, its counts and its
                months, and a line to the project's own page where its files and instructions are; the search
                under them is within the part. The side either keeps every part, folded with its count, and
                unfolds the open one to its months, or lists the open part's months alone with the way back to the
                parts above. The address carries the part, so the page opens on it from a link.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 007-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 007-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 007-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Word Typed ]]]</Heading>
            <Paragraph>
                Concept 8, a word typed at the head, consciousness: sixty-seven of the nine hundred and eighty-three
                say it in their title or synopsis, in thirteen parts, twenty-nine of them within Semantic Reference
                Theory. The count stands above the rows, and under it the second search is offered, over the words
                said in the messages, which is fetched on its first press and not before. The rows are the row form
                with the synopsis shown and the word marked where it stands, clipped around the match: newest first
                with each row naming its part in a small label, or grouped under their parts' headings with a count
                each, or, when a part is open, within that part alone, the head saying which. Nothing on the page
                but the rows moves as the word is typed.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 008-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 008-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 008-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Append
            identifier="006"
            type=".html"
        >
            ![[ 006.html ]]
        </Append>
        <Append
            identifier="007"
            type=".html"
        >
            ![[ 007.html ]]
        </Append>
        <Append
            identifier="008"
            type=".html"
        >
            ![[ 008.html ]]
        </Append>
    </Chapter>
);
