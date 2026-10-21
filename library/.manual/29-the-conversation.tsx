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
                conversations can read them, by date, by size, by who was there. The import writes a conversation
                as one chapter, Conversation, holding every message in order and dated by nothing of its own,
                since I have not comprehended it yet: the cover says when it was held and every message its
                instant, so the days are there to be consumed and nothing is displayed that need not be; the
                chapters I cut it into by hand after, by topic or by sitting, are dated as an entry
                of <Means>$[[ a journal ]]( ./The Journal )</Means> is, titled as I like, and stand in whatever
                part I say. Under the title stand who took part and a
                tally, how many messages over how many days and from which day to which, the days counted from
                the messages, and the page opens on the one chapter with nothing above it: the synopsis
                the import writes is the application's summary and not a cataloguing of mine, so it stays where
                the catalogue reads it, on the cover, and never on the page. The type asks that every chapter
                hold at least one message, and that every message be addressed by its time, so that an index can
                point at one.
            </Paragraph>
            <Paragraph>
                The cover says where the conversation is filed: under the book that catalogues all of them, its
                subject. Where it was held is a fact about the application it came from and not about
                conversations, so a conversation with Claude says its project with Claude's own annotation,
                in <Means>$[[ Claudes Reference Manual ]]</Means>, which specializes this type to draw it, and
                that is the way back from a conversation to its project. The synopsis is what the conversation
                came to, in a paragraph. It is designed
                on <Means>$[[ its own page ]]( Claudes Design / The Conversation's Page )</Means>, as the
                application the conversations come from shows one, in the frame every book of this library wears.
            </Paragraph>
        </Section>
        <Section>
            <Heading>A message, and what it is made of</Heading>
            <Paragraph>
                A message is one thing one participant said at one time. It is a section of its own kind, not a
                section said to be something: it says when it was said, as an instant, and that instant, whole,
                with its speaker is its address on the page, since two messages have been sent within one second
                and, in my older account, a question and its answer within one microsecond; and it is headed by its
                speaker, a heading whose words refer to the participant's book, so that every message of mine
                leads to my autobiography and every message of Claude's to what stands for him; a message whose
                speaker is the library's author is said to be mine, when the book is bound, so a page can set
                what I said apart from what was said to me without naming anyone. There are no
                turns and no pairs of messages; a message stands alone in its order, and three speakers read the
                same as two. What was said stands inside it as the ordinary writing of this library, paragraphs,
                lists, headings, code, tables and formulas, converted once when the conversation is imported and
                never read from a string when the page is drawn. A message is opaque, in the words
                of <Means>$[[ The Address ]]( ./The Address )</Means>: a heading inside it is its own structure and
                no address of the page, so six answers may each be headed Proof sketch and a page wears one
                address per message, its instant and its speaker, the instant as the application has it. A word that was typed as code is
                said verbatim.
                A paragraph that was quoted is said quoted.
            </Paragraph>
            <Paragraph>
                What a message holds that is not said, a thing done, a file made, a file given, is not a
                paragraph wearing a mark but a writing of its own, and what those are depends on who was
                speaking: Claude's are said in <Means>$[[ Claudes Reference Manual ]]</Means>, which
                specializes this chapter, as a manual of another participant's would. The thinking behind an
                answer is not in the book, and neither is what a thing done brought back, the pages fetched and
                the output of code, which the import counts and leaves where the export keeps it.
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
