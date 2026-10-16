import { Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Answer } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Part>The story</Part>
        <Title>[[ Starting from the audit ]]</Title>
        <Section>
            <Heading>What I saw on the first page</Heading>
            <Paragraph>
                The first conversation page was built from the application's form before anything of it was
                designed, and when I opened it I saw a page that wore the bare base of this library, hid who was
                speaking, drew a tool use as a faint line, and led nowhere: no mark in the header, no way to the
                book it is filed under. Then it wore a dark frame nobody chose. The night it was rebuilt to fit
                in with the other books I said what this book is for.
            </Paragraph>
            <Paragraph>
                <Answer />
                This is very ugly and rough, so we are going to need to do serious design work. Let's get a design
                book up and running so we can add a few html pages to it and make some good decisions.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is to be designed</Heading>
            <Paragraph>
                A conversation shown with high fidelity: as clean as Claude is on the web, with formatted code and
                artifacts I can click, opening in the conversation. A book of all my conversations that can hold
                hundreds without a sidebar that scrolls forever: arranged by project, each project a part of the
                book, and one search over all of them. A project's page that is useful, which means first a way to
                navigate the conversations held in it, with its files browsable as one part of the page, and
                perhaps a conversation read inside it. A way back to where I came from, placed on a page as a
                component when a page has a use for one, never on every page. And code abstracted enough that the
                next user experience is easy to make, which begins with the base of a library book carrying the
                frame every book shares.
            </Paragraph>
            <Paragraph>
                The method is the one <Means>$[[ Dougs Design ]]</Means> settled: a question, a few pages of HTML
                shown together with a switch, chosen by number, built to match. The sketches live beside the
                chapter that designs from them, numbered from one in this book, never gathered on a page of their
                own, which is the pattern Dougs Design tried first and stopped carrying forward because it does not
                scale; and each design that is decided keeps the page as built beside its sketch. The first
                is <Means>$[[ the conversation's page ]]( ./The Conversation's Page )</Means>, and its first sketch
                is <Means>$[[ concept 1 ]]( ./A Conversation, in the Library's Frame )</Means>, a conversation of
                mine in the frame every book of this library wears, refused the same night for an orange it took
                from my own book and for names over the messages; its second
                is <Means>$[[ concept 2 ]]( ./A Conversation, as the Application Shows It )</Means>, the chat text
                as the application has it and an artifact opening beside the words as the application opens one;
                its third is <Means>$[[ concept 3 ]]( ./A Conversation, as the Application Measures )</Means>, the
                same page at the application's own measures, read in its browser rather than imitated.
            </Paragraph>
        </Section>
    </Chapter>
);
