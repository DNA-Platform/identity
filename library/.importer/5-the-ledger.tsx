import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Ledger ]]</Title>
        <Paragraph>
            <Brief />
            What the importer wrote, so that it knows which conversations are already in, which have grown since,
            which are new, and which I have edited by hand and it must never touch.
        </Paragraph>
        <Section>
            <Heading>Four states a conversation can be in</Heading>
            <Paragraph>
                Many conversations are short, and after a few runs it is hard to know which are in. So the
                importer keeps a ledger beside this chapter: one line per conversation it wrote, with the
                conversation's id, the folder it was written to, the export's time of last change and its count
                of messages at the import, and the digest of the files written. A conversation absent from the
                ledger is new. One whose export now shows a later time or more messages has grown since, and is
                reported. One equal to its line is in. And one whose files no longer match their digest has been
                edited by hand, and the importer never touches it, whatever flag the run was given.
            </Paragraph>
            <Paragraph>
                While the importer is being made it overwrites what it wrote, on a flag said at the run, since the
                shape of a book is still being decided on <Means>$[[ its page ]]( Dougs Design / The Conversation's Page )</Means>.
                Once it is done the flag goes, and a conversation once imported is mine: cut into days or
                sittings, summarized, annotated, by hand.
            </Paragraph>
        </Section>
        <Append
            identifier="ledger"
            type=".ts"
        >
            ![[ ledger.ts ]]
        </Append>
        <Append
            identifier="ledger"
            type=".json"
        >
            ![[ ledger.json ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
