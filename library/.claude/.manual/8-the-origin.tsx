import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Origin ]]</Title>
        <Paragraph>
            <Brief />
            The application's own id of a conversation and of each of its messages, kept on the writing as an
            annotation, in the object model and drawn nowhere, so an import finds a book again whatever it has
            been renamed to.
        </Paragraph>
        <Section>
            <Heading>The id on the writing</Heading>
            <Paragraph>
                The application gives every conversation and every message an id of its own, and the import
                used to keep those ids in a record beside each entry, with the book's name beside them. A name
                is mine to change, and I will rename conversations, move them and cut them into chapters, so
                a memory keyed by name loses the book it remembers. My ruling: the import's memory belongs on
                the writing itself, as annotations, in the object model, and it need not be surfaced. So an
                origin is an annotation holding the id, said of <Means>$[[ the conversation ]]( Dougs Reference Manual / The Conversation )</Means>'s
                cover after <Means>$[[ the account ]]( ./The Account )</Means>, and said of every message as its
                first child before the speaker. It draws nothing on the page and answers its id to code as its uuid: the
                conversation with Claude answers its origin from its cover, and a message's is read off the
                message's annotations.
            </Paragraph>
            <Paragraph>
                With the ids on the writing, an import keeps one ledger per import configuration, a dataset
                regardless of the date it was exported, updated in place by every run, keyed by the
                conversation's id and holding neither name nor folder, and finds a book by the origin on its
                cover, so renaming, moving or cutting
                a book never loses it; the form is in <Means>$[[ The Imported Conversation ]]( ./The Imported Conversation )</Means>
                and the ledger in <Means>$[[ The Ledger ]]( Dougs Importer / The Ledger )</Means>.
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
