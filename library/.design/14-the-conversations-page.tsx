import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Answer, Decision, Desk, Phone, Question, Thumbnail } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Title>[[ The Conversation's Page ]]</Title>
        <Section>
            <Heading>A conversation, as it is imported</Heading>
            <Paragraph>
                A conversation I had with Claude is to become a book in this library, and this page is where its
                shape is decided. It is designed from a print, as <Means>$[[ my story's page ]]( ./The Story's Page )</Means> was:
                the first ten exchanges of one real conversation, written by hand as a book and bound, and then
                the page drawn on that print in the frame I chose for a conversation,
                concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>. Nothing of the way my
                old library imported a conversation is kept; each thing on the page is asked which of the
                library's words it is before it is drawn.
            </Paragraph>
            <Paragraph>
                <Question />
                Four things are open, each a switch at the head of page 038. What a chapter is: a day of the
                conversation, or one message. How an exchange stands: as that application shows it, my turns in my
                colour at the right and Claude's as prose; plainly, who and when above the words; or with who and
                when in a margin at the left, as a book sets a dialogue. What a tool did: a line with its result
                folded under it, the line and the result both shown, or neither. And the hour: the instant is the
                data, kept in UTC, and the page shows it in the zone I choose, since I have spoken to Claude from
                many places and the reporting is the page's, as are the counts at the head.
            </Paragraph>
            <Paragraph>
                <Answer />
                Let's put the whole thing in one chapter for now. We are going to have to process these by hand to
                convert them to the form we want them to ultimately be in, where they are summarized and
                navigable. We will have overwrite semantics for now as we work on the importer, but after that, we
                won't ever have overwriting, because we will edit conversations by hand. Many conversations are
                short. We may very much need to use the importer and the state of the system to figure out which
                conversations are imported already, which ones need to be updated with new content, and which
                ones are just new, because it will be hard to know.
            </Paragraph>
            <Paragraph>
                <Answer />
                Format them almost exactly as they are formatted in Claude. In a reference manual for my Claude
                books we can include all sorts of annotations for the data that we have in the data model, and
                annotate the conversation with them. What we are doing in this whole library is something like
                indexing these conversations: cataloguing them along many dimensions will serve to index them,
                and they will be much faster to browse. We care mostly about the date. Show the time in the
                current time zone, but what we care about is accurate date and time, kept as annotations. Focus
                on how the Claude app views a conversation for now, and we can grow it from there.
            </Paragraph>
            <Paragraph>
                <Decision />
                One chapter for the whole conversation in the first version, formatted as Claude formats it; the
                data about a conversation kept as annotations on its cover and reported by the page; a search
                Claude ran shown as the app shows it, a row that opens on its results; the hour in the reader's
                zone. Days, sittings and summaries come by hand after the import, and so the importer overwrites
                only while it is being made.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Designed on page 038</Heading>
            <Paragraph>
                <Desk />
                <Image>![[ 038-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 038-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 038-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>The application's own form, 2026-10-15</Heading>
            <Paragraph>
                The page did not take concept 23's frame after all. On 2026-10-14 I decided that a conversation
                is shown as the application that held it shows it: we might as well use the form, and add
                annotations and flourishes on that base. So the form was read off a conversation on claude.ai,
                element by element and style by style, through a browser the library keeps open for the purpose,
                and written as the theme of a conversation with Claude
                in <Means>$[[ Claudes Reference Manual ]]( Claudes Reference Manual / The Page )</Means>: my
                words in a bubble at the right, Claude's as serif prose across a column, the tool uses as muted
                lines, inline code as small red pills, the speaker's name kept for screen readers alone. The
                sketch above stays as the frame that was considered.
            </Paragraph>
        </Section>
        <Append
            identifier="038"
            type=".html"
        >
            ![[ 038.html ]]
        </Append>
    </Chapter>
);
