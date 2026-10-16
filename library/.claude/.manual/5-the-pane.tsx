import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Pane ]]</Title>
        <Paragraph>
            <Brief />
            The box beside the words where an artifact or a file given opens, as the application opens one.
        </Paragraph>
        <Section>
            <Heading>What a pane is</Heading>
            <Paragraph>
                When an artifact's card is pressed in a conversation, the artifact opens beside the words in a pane
                that takes half the window, the words narrowing beside it, as the application the conversations
                come from opens one. At the pane's head stand the artifact's title and its kind, a copy that puts
                the whole of it on the clipboard, and a close; in its body the version itself, a document as
                writing and code in its box; at its foot the version's number with an arrow to the one before and
                the one after, and a download that saves the version as a file. A file given to Claude opens the
                same way, from its chip at the head of my words, its text in the body and no foot, and an upload
                the export did not carry says so. The pressed card or chip reads pressed while the pane is open;
                pressing it again, or the close, shuts the pane. On a phone the pane covers the words. The design
                is <Means>$[[ concept 2 ]]( Claudes Design / A Conversation, as the Application Shows It )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a pane fits the library's patterns</Heading>
            <Paragraph>
                A pane is a paragraph with content of its own, drawn as a box, as the reference manual's panel is.
                What it shows is a field of the conversation it stands in: the card or the chip that was pressed
                sets it, the pane reads it, and a press is a value set on the book, which draws once. An artifact's
                version is a chapter of the conversation, written at import as every message is, so the pane
                draws a chapter and never reads a document from a string. The chapter stands in the book's
                appendix, listed in a section of the table the side does not show, and is a page of the book
                like any other, hidden until the pane shows it, since the binder asks that every chapter be
                listed and the proof that every link on the page land; the days down the side are only days
                because the index lists no parenthetical entry. Its rules are its own, on its own element, and
                the conversation's theme only says where in its grid the pane stands.
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
