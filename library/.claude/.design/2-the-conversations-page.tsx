import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Answer, Desk, Phone, Question, Thumbnail } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Title>[[ The Conversation's Page ]]</Title>
        <Section>
            <Heading>A conversation, high fidelity</Heading>
            <Paragraph>
                A conversation I had with Claude, shown on its own page as cleanly as the application shows it,
                in the frame every book of this library wears. The sketches are drawn on the print of one of mine,
                SRT Axioms and Specialization, a dozen messages from each of its five days, with its code and its
                files, so what is shown is the real thing; from the second sketch on, two days of two other
                conversations of mine are spliced in before them, Conservation of Time Complexity and Metalogical
                Subjectivity, because no conversation of the project made an artifact or set an equation, and I
                asked to see those. Each sketch is numbered from one in this book and keeps its number; they stand
                beside this chapter, and I answer by number.
            </Paragraph>
            <Paragraph>
                <Question />
                What was open on page 001: my words in the application's grey or in my colour, and where a file
                opens. What is open on page 002, each a thing to say by its place: the hour of a message shown
                only on hover; the word before who took part; what it came to above the first day; and the pane's
                foot, a version with its arrows, a download and a publish, which the application has and this
                library may not need.
            </Paragraph>
            <Paragraph>
                <Answer />
                This doesn't look good at all, with the bright orange? Halloweenish at best. And we don't need an
                option to show anything in orange. Don't think I love the color orange or anything. I see why you
                are taking that from my book, but seeing as how I don't like it, I would prefer it not be
                propagated forward. I do like the idea of having the participants in the conversation, but you
                don't have the look right. We also don't have a book that represents Claude. I suppose Dougs
                Claude could be used as that, as it could probably be About Claude, which is an option. Even so,
                we need to tighten up this design. And in the version we are designing, I want to see examples of
                artifacts I can access and click, and various forms of SRT syntax and math and code, so I can see
                what the options look like, and you really need to look for conversations with that formatting in
                the importer to make sure you really are importing into that format.
            </Paragraph>
            <Paragraph>
                <Answer />
                I want the chat to look clean. You can do it. Try to have the chat text to be comparable to what
                is in the actual chat. Don't reinvent the wheel with this.
            </Paragraph>
            <Paragraph>
                <Answer />
                We can remove the option, I want the document to open the same way it does in the Claude app, to
                the side. But can you please try to get the interaction the same as is in the app. It's not quite
                right yet.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Conversation, in the Library's Frame ]]]</Heading>
            <Paragraph>
                Concept 1, after the application the conversations come from, set in the frame every book of this
                library wears, the journal's page of <Means>$[[ concept 37 ]]( Dougs Design / The Story's Page )</Means>.
                The marks in the bar lead up to Our Conversations and to me; the conversation's days stand down the
                side as its parts, each with its count, one day open at a time; what it came to stands above the
                first day; a way back stands at the head when I came from somewhere; each exchange is set as the
                application sets it, my words at the right and Claude's as prose, who spoke and when above; every
                block of code is formatted in the application's box; every file is a card that opens beside the
                words in the manual's panel, or under its card. Refused: the orange taken from my own book, which
                tinted my words and underlined my name, is not to be carried forward anywhere; the names over the
                messages are not the application's.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 001-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 001-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 001-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Conversation, as the Application Shows It ]]]</Heading>
            <Paragraph>
                Concept 2, after concept 1, with nothing reinvented: the chat text as the application has it. My
                words in the application's grey box at the right, in the sans; Claude's as serif prose on white,
                nothing drawn around an answer but its words; no name over a message, the hour at its margin on
                hover only. Who took part stands once in the head, in the byline's form, a soft word and the names
                in ink, Claude's leading to Dougs Claude, the book about him. The days stand down the side as the
                conversation's parts. Every block of code sits in the application's box, its language named at
                the head with a copy, keywords, strings and comments coloured on white; SRT notation, which no
                highlighter knows, is boxed under its own name with its operators marked. Math is typeset
                inline and displayed. A table has hairlines and a bold first row. An artifact is a card in the
                answer, a glyph for a document or for code, its title and a line to open it; a press opens it as
                the application does, in a pane at the right taking half the window, the words narrowing beside
                it, with the title, its kind, a copy and a close at the head, a document rendered and code as
                code, the version with its arrows and the tools at the foot; the pressed card is marked, and a
                second press, or the close, shuts it. My uploads are chips at the head of my own words, as the
                application shows them, and open in the same pane. On a phone the pane covers the words. No
                switch is left on the page.
            </Paragraph>
            <Paragraph>
                <Desk />
                <Image>![[ 002-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 002-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 002-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Append
            identifier="001"
            type=".html"
        >
            ![[ 001.html ]]
        </Append>
        <Append
            identifier="002"
            type=".html"
        >
            ![[ 002.html ]]
        </Append>
    </Chapter>
);
