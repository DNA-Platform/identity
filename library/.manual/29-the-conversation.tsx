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
            The type of book a conversation is: a book of messages, each said by a speaker at a time, in order, any
            number of speakers, with the participants, the period and the count on its cover.
        </Paragraph>
        <Section>
            <Heading>The conversation, a type of book</Heading>
            <Paragraph>
                A conversation is a book whose cover says who took part, each participant a word that refers to the
                book that stands for them in this library, my autobiography for me and what stands for Claude for
                him; when it was held, from which instant to which; and how many messages it holds, how many of
                them on the screen and how many left on other paths, since a conversation is a tree once a message
                is edited or asked again and the book keeps the path that was shown. Those are annotations with
                values and a paragraph of participants, so that the page reports them and every catalogue of
                conversations can read them, by date, by size, by who was there. The first version imports the
                whole conversation into one chapter, dated with its first day and in the part of its month, as an
                entry of <Means>$[[ a journal ]]( ./The Journal )</Means> is; the days, the sittings and the
                summaries that make a long conversation navigable come by hand after. The type asks that every
                chapter be dated, say its month, and hold at least one message.
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
            <Heading>A message, and what it is made of</Heading>
            <Paragraph>
                A message is one thing one participant said at one time. It is a section of its own kind, not a
                section said to be something: it says when it was said, as an instant, and it is headed by its
                speaker, a heading whose words refer to the participant's book, so that every message of mine
                leads to my autobiography and every message of Claude's to what stands for him. There are no
                turns and no pairs of messages; a message stands alone in its order, and three speakers read the
                same as two. What was said stands inside it as the ordinary writing of this library, paragraphs,
                lists, headings, code, tables and formulas, converted once when the conversation is imported and
                never read from a string when the page is drawn. A word that was typed as code is said verbatim.
                A paragraph that was quoted is said quoted.
            </Paragraph>
            <Paragraph>
                What a message holds that is not said, a thing done and what came back, a file made, a file
                given, is not a paragraph wearing a mark but a writing of its own, and what those are depends on
                who was speaking: Claude's are said
                in <Means>$[[ Claudes Reference Manual ]]</Means>, which specializes this chapter, as a
                manual of another participant's would. The thinking behind an answer is not in the book.
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
