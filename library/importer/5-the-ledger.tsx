import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Ledger ]]</Title>
        <Paragraph>
            <Brief />
            What the importer wrote, kept as a record beside each conversation's entry in the book that holds them
            all, so that it knows which conversations are already in, which have grown since, which are new, and
            which I have edited by hand and it must never touch.
        </Paragraph>
        <Section>
            <Heading>A record beside every entry</Heading>
            <Paragraph>
                Many conversations are short, and after a few runs it is hard to know which are in. So the
                importer keeps its ledger in the conversations book itself: beside each entry of the register of
                all my conversations stands a file named for the entry, the record of that conversation's
                import, with the conversation's id, the name and folder of its book, the export
                it was read from, the export's time of last change and its count of messages at the import, and
                the digest of the files written. The entry lists the file, so the binder accounts for it, and
                reads nothing of it, since a resource is shown and never interpreted. The importer reads the
                newest export it finds, by the date in its manifest, so a newer export dropped where the last
                one lay is the one read, and the record says which export each conversation came from. A
                conversation with no record is new, and a run writes it. One whose export now shows a later time
                or more messages has grown since, and a run writes it again, since nothing of mine is in it. One
                equal to its record is in, and a run leaves it. And one whose files no longer match their digest
                has been edited by hand, and the importer never touches it, whatever flag the run was given;
                when such a one has grown since as well, the run says so beside it, and the re-import is mine to
                do by hand, with my edits applied again after, as I said on 2026-10-14.
            </Paragraph>
            <Paragraph>
                The record stands with the entry, so what I do to a conversation by hand, cutting it, renaming
                it, striking it from the register, carries its record along or removes it, and the state of the
                import is never a file apart that can disagree with the books. While the importer is being made
                it overwrites what it wrote, on a flag said at the run, since the shape of a book is still being
                decided on <Means>$[[ its page ]]( Dougs Design / The Conversation's Page )</Means>. Once it is
                done the flag goes, and a conversation once imported is mine: cut into days or sittings,
                summarized, annotated, by hand.
            </Paragraph>
        </Section>
        <Append
            identifier="ledger"
            type=".ts"
        >
            ![[ ledger.ts ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
