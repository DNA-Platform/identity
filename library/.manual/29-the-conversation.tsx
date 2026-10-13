import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Conversation ]]</Title>
        <Paragraph>
            <Brief />
            The type of book a conversation with Claude is imported as, formatted as Claude formats one: a
            chapter of exchanges, each headed by who said it, and the data about the conversation on its cover.
        </Paragraph>
        <Section>
            <Heading>The conversation, a type of book</Heading>
            <Paragraph>
                A conversation is a book whose cover says when it was held, from which instant to which, and how
                many messages it holds, how many of them on the screen and how many left on other paths, since a
                conversation is a tree once a message is edited or asked again and the book keeps the path that
                was shown. Those are annotations with values, not words, so that the page reports them and every
                catalogue of conversations can read them, by date, by size, by whatever is said of them. The
                first version imports the whole conversation into one chapter, dated with its first day and in the
                part of its month, as an entry of <Means>$[[ a journal ]]( ./The Journal )</Means> is; the days,
                the sittings and the summaries that make a long conversation navigable come by hand after. The
                type asks that every chapter be dated, say its month, and hold at least one exchange.
            </Paragraph>
            <Paragraph>
                The cover says where the conversation is filed: under the book that catalogues all of them, and
                besides under each project that catalogues it, which is the way back from a conversation to its
                project. The synopsis is what the conversation came to, in a paragraph. It is designed
                on <Means>$[[ its own page ]]( Dougs Design / The Conversation's Page )</Means>, in the frame
                of the application the conversations come from.
            </Paragraph>
        </Section>
        <Section>
            <Heading>An exchange, and what it carries</Heading>
            <Paragraph>
                An exchange is one message: a section said to be an exchange, told the instant it was said, and
                headed by who said it, a word that refers to them. A reference to me points to my autobiography,
                which is the referent that stands for me in this library; a reference to Claude points to what
                stands for Claude here. What was said stands as paragraphs, lists, headings, code, tables and
                formulas, the ordinary writing of this library, converted once when the conversation is imported
                and never read from a string when the page is drawn. A word that was typed as code is said
                verbatim. A paragraph that was quoted is said quoted.
            </Paragraph>
            <Paragraph>
                A search of the web or a run of code that Claude made in an exchange is one paragraph saying what
                was done, said to be an action, and what came back is the paragraph after, said to be its
                results; the page shows them as Claude does, a row that opens on what came back. A file attached
                to a message stands beside the chapter, and a paragraph of the exchange names it as attached. An
                artifact the conversation made stands beside the chapter too, every version of it, and a
                paragraph names it; the chapter lists its files at its foot
                as <Means>$[[ the listing ]]( ./The Listing )</Means> shows them. The thinking behind an answer is
                not in the book, and an uploaded file whose content was never exported is named and no more.
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
