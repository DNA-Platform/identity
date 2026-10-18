import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Desk, Phone, Question, Thumbnail } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Title>[[ The Project's Page ]]</Title>
        <Section>
            <Heading>A project, navigable</Heading>
            <Paragraph>
                A project of mine with Claude, shown on its own page the way the application shows it: its
                conversations down the main part of the screen, its files and its instructions kept apart from
                them, and a side that lists what the page holds rather than every file and every conversation in
                one tree. The sketches are drawn on the content of one of mine, <Means>$[[ Semantic Reference Theory ]]( claude--Semantic Reference Theory )</Means>,
                sixty-three files and seventy-nine conversations as the page holds them, so what is shown is the
                real thing; and the way back is drawn into the full print of <Means>$[[ SRT Axioms &amp; Specialization ]]( claude--SRT Axioms &amp; Specialization--b3d24e04 )</Means>,
                a conversation of that project, with its own sheet. Each sketch keeps its number in this book, and
                I answer by number: 004 is <Means>$[[ ./A Project, as the Application Lays It ]]</Means>, and 005
                is <Means>$[[ ./A Conversation, the Way Back ]]</Means>.
            </Paragraph>
            <Paragraph>
                <Question />
                What is open on page 004, each a switch at the foot: the layout, 1 as the application lays it, 2
                as the register sets it, 3 the files first as a shelf; and the rows, titles alone or with the
                synopsis under each. What is open on page 005, the way back from a conversation to its project:
                1 the project's mark in the logo, where the mark that files the conversation stands, its name
                under on hover; 2 a line of crumbs at the head; 3 a chip at the head, remembered from the way I
                came. And whether the knowledge column keeps the application's Memory and Scheduled rows, which
                the library has nothing to put in.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Project, as the Application Lays It ]]]</Heading>
            <Paragraph>
                Concept 4, after the application's project page as read in the library's browser on 18 October
                2026: a serif title, rows 54 tall with the title at the left and the day at the right, a list 635
                wide, and a column at the right reading Instructions and Context. The conversations held in the
                project stand down the main column, newest first under their months, each a row with its title,
                its count of exchanges and its day; a second row form carries the synopsis under each. The
                knowledge of the project, its instructions and its files, stands in a column at the right where
                the application keeps it, and a file pressed opens beside the words in the pane, as an artifact
                opens on a conversation's page; two files are carried in the sketch. The side lists what the page
                holds, the project and the months of its conversations with their counts, where it listed every
                file and every conversation in one tree. The head says where the project stands, Dougs Claude
                and then the project, its name in the serif, what it is, and what it holds. Layout 2 sets the
                conversations as <Means>$[[ Our Conversations ]]</Means> sets them, the number, the date, the
                title and the synopsis. Layout 3 gives up the column: the files stand as a shelf of tiles at the
                head of the list and the instructions under the brief. The whites are the decided sketch's own,
                the scheme on the marks only; nothing is reinvented that the application has settled.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 004-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 004-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 004-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Conversation, the Way Back ]]]</Heading>
            <Paragraph>
                Concept 5, the way back from a conversation's page to the project it was held in, three forms on
                a switch, drawn into the bound print of SRT Axioms &amp; Specialization; nothing else on the page
                moves. Every conversation's cover already says its project, so each form is said by the page
                and needs no cookie, but the third. 1: the mark the logo files the conversation under becomes the
                project's, in the project's own colours, its name under the conversation's on hover, where it
                was Our Conversations'. 2: a line of crumbs at the head, Our Conversations and then the project,
                as the application's Projects and then the project. 3: a chip at the head, back to the project,
                shown when I came from it and otherwise back to Our Conversations, which is a thing remembered on
                the way rather than said by the page.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 005-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 005-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 005-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Append
            identifier="004"
            type=".html"
        >
            ![[ 004.html ]]
        </Append>
        <Append
            identifier="005"
            type=".html"
        >
            ![[ 005.html ]]
        </Append>
    </Chapter>
);
